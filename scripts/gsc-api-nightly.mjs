#!/usr/bin/env node
/**
 * Nightly GSC automation (service account):
 * - Submit / refresh sitemap.xml for each registry domain
 * - URL Inspection on P0 pages
 * - Write reports/gsc-nightly-latest.json
 *
 * Cannot click "Request indexing" for normal pages (Google limitation).
 * Setup: scripts/GSC-API-SETUP.md
 *
 * Usage:
 *   GOOGLE_APPLICATION_CREDENTIALS=./secrets/gsc-service-account.json npm run gsc:nightly
 *   npm run gsc:nightly -- --dry-run
 *   npm run gsc:nightly -- --inspect-only
 *   npm run gsc:nightly -- --sitemaps-only
 */

import { mkdir, writeFile, access, readFile } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { GoogleAuth } from 'google-auth-library';
import { P0_INDEX_BY_DIR, absoluteUrl } from './lib/gsc-checklist.mjs';
import {
  parseSitemapLocs,
  summarizeSitemapContinuity,
  continuityMessage,
} from './lib/sitemap-continuity.mjs';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, '..');
const REPORT_DIR = path.join(ROOT, 'reports');
const SCOPES = ['https://www.googleapis.com/auth/webmasters'];

/** GSC property id — URL-prefix form matches this account's properties. */
function gscSiteUrl(siteUrl) {
  const u = siteUrl.replace(/\/$/, '');
  return `${u}/`;
}

async function loadSites() {
  const registry = JSON.parse(await readFile(path.join(ROOT, 'sites.registry.json'), 'utf8'));
  return (registry.sites || []).map((s) => ({
    dir: s.dir,
    domain: s.domain,
    url: s.siteUrl,
  }));
}

const args = new Set(process.argv.slice(2));
const dryRun = args.has('--dry-run');
const inspectOnly = args.has('--inspect-only');
const sitemapsOnly = args.has('--sitemaps-only');

const RETRY_ATTEMPTS = 3;
const RETRY_BASE_MS = 1500;

function sleep(ms) {
  return new Promise((r) => setTimeout(r, ms));
}

function errorMessage(err) {
  return err?.message || String(err);
}

/** Google / network blips that often succeed on retry. */
function isTransientError(err) {
  const msg = errorMessage(err).toLowerCase();
  const code = err?.code || err?.status || err?.response?.status;
  if ([429, 500, 502, 503, 504].includes(Number(code))) return true;
  return (
    msg.includes('internal error') ||
    msg.includes('backend error') ||
    msg.includes('unavailable') ||
    msg.includes('rate limit') ||
    msg.includes('quota') ||
    msg.includes('econnreset') ||
    msg.includes('etimedout') ||
    msg.includes('socket hang up') ||
    msg.includes('temporarily')
  );
}

async function withRetry(label, fn, { attempts = RETRY_ATTEMPTS } = {}) {
  let lastErr;
  for (let i = 1; i <= attempts; i++) {
    try {
      return await fn();
    } catch (err) {
      lastErr = err;
      if (!isTransientError(err) || i === attempts) break;
      const wait = RETRY_BASE_MS * i;
      console.log(`retry ${i}/${attempts - 1} after ${wait}ms (${label}: ${errorMessage(err)})`);
      await sleep(wait);
    }
  }
  throw lastErr;
}

async function getAuthClient() {
  const credPath = process.env.GOOGLE_APPLICATION_CREDENTIALS;
  if (!credPath) {
    throw new Error(
      'Set GOOGLE_APPLICATION_CREDENTIALS to your service-account JSON path.\nSee scripts/GSC-API-SETUP.md',
    );
  }
  const resolved = path.isAbsolute(credPath) ? credPath : path.resolve(ROOT, credPath);
  await access(resolved);
  const auth = new GoogleAuth({
    keyFile: resolved,
    scopes: SCOPES,
  });
  return auth.getClient();
}

async function apiRequest(client, method, url, body) {
  const res = await client.request({
    url,
    method,
    data: body,
    headers: body ? { 'Content-Type': 'application/json' } : undefined,
  });
  return res.data;
}

async function fetchSitemapXml(sitemapUrl) {
  const res = await fetch(sitemapUrl, {
    redirect: 'follow',
    headers: { 'user-agent': 'PortfolioHealthAudit/1.0 (+site-owner)' },
  });
  if (!res.ok) throw new Error(`HTTP ${res.status}`);
  return res.text();
}

async function checkSitemapContinuity(site) {
  const sitemapUrl = `${site.url.replace(/\/$/, '')}/sitemap.xml`;
  const generated = JSON.parse(await readFile(path.join(ROOT, site.dir, 'seo/generated-routes.json'), 'utf8'));
  const localXml = await readFile(path.join(ROOT, site.dir, 'public/sitemap.xml'), 'utf8');
  const liveXml = await fetchSitemapXml(sitemapUrl);
  return summarizeSitemapContinuity({
    siteUrl: site.url,
    generatedRoutes: generated.allRoutes || [],
    liveLocs: parseSitemapLocs(liveXml),
    localSitemapLocs: parseSitemapLocs(localXml),
  });
}

async function submitSitemap(client, siteUrl) {
  const property = gscSiteUrl(siteUrl);
  const site = encodeURIComponent(property);
  const feed = encodeURIComponent(`${siteUrl.replace(/\/$/, '')}/sitemap.xml`);
  const url = `https://www.googleapis.com/webmasters/v3/sites/${site}/sitemaps/${feed}`;
  if (dryRun) {
    return { ok: true, dryRun: true, url, property };
  }
  await withRetry(`sitemap ${property}`, () => apiRequest(client, 'PUT', url));
  return { ok: true, sitemap: `${siteUrl.replace(/\/$/, '')}/sitemap.xml`, property };
}

async function inspectUrl(client, siteUrl, pageUrl) {
  const url = 'https://searchconsole.googleapis.com/v1/urlInspection/index:inspect';
  const body = {
    inspectionUrl: pageUrl,
    siteUrl: gscSiteUrl(siteUrl),
  };
  if (dryRun) {
    return { inspectionUrl: pageUrl, dryRun: true };
  }
  const data = await withRetry(`inspect ${pageUrl}`, () => apiRequest(client, 'POST', url, body));
  const result = data.inspectionResult ?? {};
  const index = result.indexStatusResult ?? {};
  return {
    inspectionUrl: pageUrl,
    verdict: index.verdict ?? null,
    coverageState: index.coverageState ?? null,
    robotsTxtState: index.robotsTxtState ?? null,
    indexingState: index.indexingState ?? null,
    lastCrawlTime: index.lastCrawlTime ?? null,
    pageFetchState: index.pageFetchState ?? null,
  };
}

function isoDateDaysAgo(days) {
  const date = new Date();
  date.setUTCDate(date.getUTCDate() - days);
  return date.toISOString().slice(0, 10);
}

async function searchAnalytics(client, siteUrl, startDate, endDate) {
  const property = encodeURIComponent(gscSiteUrl(siteUrl));
  const url = `https://www.googleapis.com/webmasters/v3/sites/${property}/searchAnalytics/query`;
  if (dryRun) return [];
  const data = await withRetry(`search analytics ${siteUrl}`, () =>
    apiRequest(client, 'POST', url, {
      startDate,
      endDate,
      dimensions: ['query', 'page'],
      rowLimit: 5000,
      dataState: 'final',
    }),
  );
  return (data.rows || []).map((row) => ({
    query: row.keys?.[0] || '',
    page: row.keys?.[1] || '',
    clicks: row.clicks || 0,
    impressions: row.impressions || 0,
    ctr: row.ctr || 0,
    position: row.position || 0,
  }));
}

function buildContentOpportunities(domain, current, previous) {
  const previousByKey = new Map(previous.map((row) => [`${row.query}|${row.page}`, row]));
  const opportunities = [];
  for (const row of current) {
    const prior = previousByKey.get(`${row.query}|${row.page}`);
    if (row.impressions >= 5 && row.position >= 4 && row.position <= 20) {
      opportunities.push({
        domain,
        type: 'striking-distance',
        priority: row.impressions / Math.max(row.position, 1),
        ...row,
        previousClicks: prior?.clicks ?? null,
        previousImpressions: prior?.impressions ?? null,
        action: `Expand the page section answering “${row.query}” and strengthen internal links to this URL.`,
      });
    } else if (row.impressions >= 10 && row.position < 10 && row.ctr < 0.02) {
      opportunities.push({
        domain,
        type: 'low-ctr',
        priority: row.impressions * (0.02 - row.ctr),
        ...row,
        previousClicks: prior?.clicks ?? null,
        previousImpressions: prior?.impressions ?? null,
        action: `Improve the title and meta description for “${row.query}” without changing the page intent.`,
      });
    }
    if (
      prior &&
      prior.impressions >= 10 &&
      row.impressions <= prior.impressions * 0.6 &&
      prior.impressions - row.impressions >= 10
    ) {
      opportunities.push({
        domain,
        type: 'declining-demand',
        priority: prior.impressions - row.impressions,
        ...row,
        previousClicks: prior.clicks,
        previousImpressions: prior.impressions,
        action: `Review freshness, SERP intent, and competing coverage for “${row.query}”; update only if the topic remains relevant.`,
      });
    }
  }
  return opportunities.sort((a, b) => b.priority - a.priority).slice(0, 50);
}

function contentOpportunityMarkdown(report) {
  const rows = [...report.contentOpportunities].sort((a, b) => b.priority - a.priority);
  const lines = [
    '# Search-led content opportunities',
    '',
    `Generated: ${report.generatedAt}`,
    '',
    'These are based on real Google impressions, ranking position, and click-through rate. Expand an existing page only when the query matches its intent; do not create a thin page for every keyword.',
    '',
  ];
  if (!rows.length) {
    lines.push('No qualified opportunities were found in the current 28-day window.', '');
    return lines.join('\n');
  }
  for (const domain of [...new Set(rows.map((row) => row.domain))]) {
    lines.push(`## ${domain}`, '');
    for (const row of rows.filter((item) => item.domain === domain).slice(0, 20)) {
      lines.push(
        `- **${row.query}** — ${row.type}; ${row.impressions} impressions; ${row.clicks} clicks; position ${row.position.toFixed(1)}; CTR ${(row.ctr * 100).toFixed(1)}%`,
      );
      lines.push(`  - Page: ${row.page}`);
      lines.push(`  - Recommended: ${row.action}`);
    }
    lines.push('');
  }
  return lines.join('\n');
}

function needsManualRequest(row) {
  if (row.dryRun) return false;
  const cov = (row.coverageState || '').toLowerCase();
  const verdict = (row.verdict || '').toLowerCase();
  if (verdict === 'pass' && cov.includes('indexed')) return false;
  if (cov.includes('submitted and indexed')) return false;
  return true;
}

async function main() {
  console.log('=== GSC API nightly ===\n');
  if (dryRun) console.log('(dry-run — no API writes)\n');

  const sites = await loadSites();

  const report = {
    generatedAt: new Date().toISOString(),
    dryRun,
    note:
      'URL Inspection + sitemap submit only. "Request indexing" in GSC UI is not available via API for normal pages.',
    sitemapContinuity: [],
    sitemaps: [],
    inspections: [],
    searchPerformance: [],
    contentOpportunities: [],
    needsManualRequestIndexing: [],
    /** Hard failures (auth/permission/most sitemaps down) — exit 1 */
    errors: [],
    /** Soft blips after retries — logged, do not fail the systemd unit */
    softErrors: [],
  };

  console.log('Live sitemap vs generated-routes (does not need GSC credentials)\n');
  for (const site of sites) {
    const domain = new URL(site.url).hostname;
    process.stdout.write(`  ${domain} ... `);
    try {
      const continuity = await checkSitemapContinuity(site);
      report.sitemapContinuity.push({
        domain,
        dir: site.dir,
        ok: continuity.ok,
        staleDeploy: continuity.staleDeploy,
        liveCount: continuity.liveCount,
        generatedCount: continuity.generatedCount,
        missingFromLive: continuity.missingFromLive.length,
        extraOnLive: continuity.extraOnLive.length,
        extraOnLiveUrls: continuity.extraOnLive,
        missingFromLiveSample: continuity.missingFromLive.slice(0, 8),
      });
      if (continuity.ok) {
        console.log(`ok (${continuity.generatedCount} URLs)`);
      } else {
        const msg = continuityMessage(continuity);
        console.log(`FAIL: ${msg}`);
        report.errors.push({ type: 'sitemap-continuity', domain, error: msg });
      }
    } catch (err) {
      const msg = errorMessage(err);
      console.log(`FAIL: ${msg}`);
      report.errors.push({ type: 'sitemap-continuity', domain, error: msg });
    }
  }
  console.log('');

  let client = null;
  if (!dryRun) {
    try {
      client = await getAuthClient();
    } catch (err) {
      const msg = errorMessage(err);
      console.log(`GSC auth unavailable: ${msg}`);
      console.log('Skipping sitemap submit / URL Inspection; continuity results are still recorded.\n');
      report.errors.push({ type: 'auth', error: msg });
    }
  }

  for (const site of sites) {
    const domain = new URL(site.url).hostname;
    const p0 = P0_INDEX_BY_DIR[site.dir] ?? { label: site.dir, paths: [{ path: '/' }] };

    if (!client && !dryRun) continue;

    if (!inspectOnly) {
      process.stdout.write(`Sitemap ${domain} ... `);
      try {
        const r = client
          ? await submitSitemap(client, site.url)
          : { ok: true, dryRun: true };
        report.sitemaps.push({ domain, ...r });
        console.log('ok');
      } catch (err) {
        const msg = errorMessage(err);
        console.log(`FAIL: ${msg}`);
        const entry = { type: 'sitemap', domain, error: msg, transient: isTransientError(err) };
        (isTransientError(err) ? report.softErrors : report.errors).push(entry);
        report.sitemaps.push({ domain, ok: false, error: msg });
      }
      await sleep(200);
    }

    if (sitemapsOnly) continue;

    console.log(`\nInspect P0 — ${p0.label} (${domain})`);
    for (const { path: p, note, isNew } of p0.paths) {
      const pageUrl = absoluteUrl(site.url, p);
      process.stdout.write(`  ${pageUrl} ... `);
      try {
        const row = client
          ? await inspectUrl(client, site.url, pageUrl)
          : { inspectionUrl: pageUrl, dryRun: true };
        const enriched = { domain, dir: site.dir, path: p, note, isNew, ...row };
        report.inspections.push(enriched);
        if (needsManualRequest(enriched)) {
          report.needsManualRequestIndexing.push({
            url: pageUrl,
            coverageState: enriched.coverageState,
            verdict: enriched.verdict,
            gscInspectHint: `GSC → URL Inspection → ${pageUrl} → Request indexing`,
          });
        }
        console.log(enriched.coverageState || (dryRun ? 'dry-run' : 'ok'));
      } catch (err) {
        const msg = errorMessage(err);
        console.log(`FAIL: ${msg}`);
        // Single-URL inspect flakiness should not fail the nightly unit
        report.softErrors.push({
          type: 'inspect',
          url: pageUrl,
          error: msg,
          transient: isTransientError(err),
        });
      }
      // Stay polite under URL Inspection quotas
      await sleep(dryRun ? 0 : 350);
    }

    if (!inspectOnly) {
      const currentRange = { startDate: isoDateDaysAgo(28), endDate: isoDateDaysAgo(1) };
      const previousRange = { startDate: isoDateDaysAgo(56), endDate: isoDateDaysAgo(29) };
      process.stdout.write(`  Search demand ${domain} ... `);
      try {
        const current = client
          ? await searchAnalytics(client, site.url, currentRange.startDate, currentRange.endDate)
          : [];
        const previous = client
          ? await searchAnalytics(client, site.url, previousRange.startDate, previousRange.endDate)
          : [];
        const opportunities = buildContentOpportunities(domain, current, previous);
        report.searchPerformance.push({
          domain,
          currentRange,
          previousRange,
          rows: current.length,
          clicks: current.reduce((sum, row) => sum + row.clicks, 0),
          impressions: current.reduce((sum, row) => sum + row.impressions, 0),
          opportunities: opportunities.length,
        });
        report.contentOpportunities.push(...opportunities);
        console.log(`${current.length} query/page rows, ${opportunities.length} opportunities`);
      } catch (err) {
        const msg = errorMessage(err);
        console.log(`FAIL: ${msg}`);
        report.softErrors.push({
          type: 'search-analytics',
          domain,
          error: msg,
          transient: isTransientError(err),
        });
      }
    }
  }

  await mkdir(REPORT_DIR, { recursive: true });
  const stamp = new Date().toISOString().slice(0, 10);
  const latestPath = path.join(REPORT_DIR, 'gsc-nightly-latest.json');
  const datedPath = path.join(REPORT_DIR, `gsc-nightly-${stamp}.json`);
  const json = JSON.stringify(report, null, 2);
  await writeFile(latestPath, json, 'utf8');
  await writeFile(datedPath, json, 'utf8');
  await writeFile(
    path.join(REPORT_DIR, 'content-opportunities-latest.md'),
    contentOpportunityMarkdown(report),
    'utf8',
  );

  const sitemapOk = report.sitemaps.filter((s) => s.ok).length;
  const sitemapTotal = report.sitemaps.length;
  const hardSitemapFails = report.errors.filter((e) => e.type === 'sitemap').length;

  console.log('\n=== Summary ===');
  console.log(
    `Sitemap continuity: ${report.sitemapContinuity.filter((s) => s.ok).length}/${report.sitemapContinuity.length} ok`,
  );
  console.log(`Sitemaps: ${sitemapOk}/${sitemapTotal} ok`);
  console.log(`Inspections: ${report.inspections.length}`);
  console.log(`Search content opportunities: ${report.contentOpportunities.length}`);
  console.log(`Needs manual Request indexing: ${report.needsManualRequestIndexing.length}`);
  console.log(`Soft errors (non-fatal): ${report.softErrors.length}`);
  console.log(`Hard errors: ${report.errors.length}`);
  console.log(`Report: ${latestPath}`);

  if (report.needsManualRequestIndexing.length) {
    console.log('\nManual follow-up (API cannot request indexing for these):');
    for (const row of report.needsManualRequestIndexing.slice(0, 25)) {
      console.log(`  - ${row.url} (${row.coverageState || row.verdict || 'unknown'})`);
    }
    if (report.needsManualRequestIndexing.length > 25) {
      console.log(`  ... +${report.needsManualRequestIndexing.length - 25} more in report`);
    }
  }

  if (report.softErrors.length) {
    console.log('\nSoft errors (retried; did not fail the job):');
    for (const row of report.softErrors.slice(0, 15)) {
      console.log(`  - ${row.type}: ${row.url || row.domain} — ${row.error}`);
    }
  }

  if (report.contentOpportunities.length) {
    console.log('\nTop search-led content opportunities:');
    for (const row of report.contentOpportunities
      .sort((a, b) => b.priority - a.priority)
      .slice(0, 20)) {
      console.log(
        `  - ${row.domain}: ${row.query} (${row.impressions} impressions, position ${row.position.toFixed(1)}, ${row.type})`,
      );
    }
  }

  // Fail systemd only when sitemaps mostly break or a hard (non-transient) sitemap error remains
  const sitemapCollapse = sitemapTotal > 0 && hardSitemapFails >= Math.ceil(sitemapTotal / 2);
  if (!dryRun && (report.errors.length > 0 || sitemapCollapse)) {
    process.exitCode = 1;
  }
}

main().catch((err) => {
  console.error(err.message || err);
  process.exit(1);
});

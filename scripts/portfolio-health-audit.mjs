#!/usr/bin/env node
import { createHash } from 'node:crypto';
import { mkdir, readFile, writeFile, access } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { spawn } from 'node:child_process';
import * as cheerio from 'cheerio';
import { parseSitemapLocs, summarizeSitemapContinuity, continuityMessage } from './lib/sitemap-continuity.mjs';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, '..');
const REPORT_DIR = path.join(ROOT, 'reports');
const args = new Set(process.argv.slice(2));
const runBuilds = args.has('--build');
const requestedSite = process.argv.find((arg) => arg.startsWith('--site='))?.split('=')[1];
const FETCH_TIMEOUT_MS = 20_000;
const FETCH_CONCURRENCY = 10;
const PUBLISHER_ID = 'ca-pub-1132338970019438';
const LEGAL_PATHS = ['/about/', '/contact/', '/privacy/', '/terms/', '/disclaimer/'];

const CONTRACTS = {
  flooringboxcalculator: [
    { path: '/stair-carpet-calculator/', includes: ['value="15"'], label: 'stair carpet starts at 15% waste' },
  ],
  paintcalculator: [
    { path: '/exterior-paint-calculator/', includes: ['Exterior Paint Calculator'], label: 'exterior calculator renders' },
  ],
  drywallcalculator: [
    { path: '/', includes: ['Total doors, all rooms', 'Total windows, all rooms'], label: 'multi-room deductions are clear' },
  ],
  mulchcalculator: [
    { path: '/gravel-calculator/', includes: ['value="4"', 'value="0.5"'], label: 'gravel defaults are 4 inches and 0.5 cu ft' },
  ],
  hvaccalculator: [
    { path: '/garage-heater-btu-calculator/', includes: ['estimated heating load'], excludes: ['recommended mini-split size'], label: 'garage heater uses heating result mode' },
  ],
  landscapetoolsguide: [
    { path: '/tools/aspire/', includes: ['Custom pricing'], excludes: ['From ~$0/mo'], label: 'custom-priced tools are labeled correctly' },
  ],
  metaboliclowcarb: [
    { path: '/guides/atkins-phases-explained/', includes: ['datePublished', 'dateModified'], label: 'guide article dates render' },
  ],
  project: [
    { path: '/0.01-btc-to-usd/', includes: ['0.01 BTC'], label: 'decimal Bitcoin routes prerender' },
    { path: '/bitcoin-fee-calculator/', includes: ['min="1"'], label: 'fee inputs reject zero' },
  ],
};

function nowIso() {
  return new Date().toISOString();
}

function normalizeUrl(value) {
  const url = new URL(value);
  url.hash = '';
  const isAsset = /\.(?:css|js|mjs|png|jpe?g|svg|webp|ico|txt|xml|json|html|woff2?)$/i.test(url.pathname);
  if (!url.pathname.endsWith('/') && !isAsset) url.pathname += '/';
  return url.toString();
}

function stripTrailingSlash(value) {
  return value.replace(/\/$/, '');
}

function wordCount(text) {
  return text.trim().split(/\s+/).filter(Boolean).length;
}

function fingerprint(issue) {
  return createHash('sha1')
    .update([issue.site, issue.category, issue.url || '', issue.message].join('|'))
    .digest('hex')
    .slice(0, 16);
}

function issueKey(issue) {
  return issue.fingerprint || fingerprint(issue);
}

async function exists(filePath) {
  try {
    await access(filePath);
    return true;
  } catch {
    return false;
  }
}

async function fetchWithRetry(url, options = {}) {
  let lastError;
  for (let attempt = 1; attempt <= 3; attempt += 1) {
    const controller = new AbortController();
    const timeout = setTimeout(() => controller.abort(), FETCH_TIMEOUT_MS);
    try {
      const response = await fetch(url, {
        redirect: options.redirect || 'follow',
        headers: { 'user-agent': 'PortfolioHealthAudit/1.0 (+site-owner)' },
        signal: controller.signal,
      });
      clearTimeout(timeout);
      return response;
    } catch (error) {
      clearTimeout(timeout);
      lastError = error;
      if (attempt < 3) await new Promise((resolve) => setTimeout(resolve, 500 * attempt));
    }
  }
  throw lastError;
}

async function mapLimit(items, limit, worker) {
  const results = new Array(items.length);
  let cursor = 0;
  async function run() {
    while (cursor < items.length) {
      const index = cursor;
      cursor += 1;
      results[index] = await worker(items[index], index);
    }
  }
  await Promise.all(Array.from({ length: Math.min(limit, items.length) }, run));
  return results;
}

function runCommand(command, commandArgs, cwd, timeoutMs = 10 * 60_000) {
  return new Promise((resolve) => {
    const startedAt = Date.now();
    const child = spawn(command, commandArgs, {
      cwd,
      env: { ...process.env, CI: 'true' },
      stdio: ['ignore', 'pipe', 'pipe'],
    });
    let output = '';
    const append = (chunk) => {
      output += chunk.toString();
      if (output.length > 2_000_000) output = output.slice(-2_000_000);
    };
    child.stdout.on('data', append);
    child.stderr.on('data', append);
    const timeout = setTimeout(() => child.kill('SIGTERM'), timeoutMs);
    child.on('close', (code, signal) => {
      clearTimeout(timeout);
      resolve({
        ok: code === 0,
        code,
        signal,
        durationMs: Date.now() - startedAt,
        output,
      });
    });
  });
}

function parseSitemap(xml) {
  return parseSitemapLocs(xml);
}

function parseJsonLd($, site, pageUrl, addIssue) {
  $('script[type="application/ld+json"]').each((_, element) => {
    const raw = $(element).text().trim();
    if (!raw) return;
    try {
      const data = JSON.parse(raw);
      const nodes = Array.isArray(data) ? data : data['@graph'] || [data];
      for (const node of nodes) {
        if (node?.['@type'] === 'Article' && (!node.datePublished || !node.dateModified)) {
          addIssue('warning', 'schema', pageUrl, 'Article schema is missing published or modified dates');
        }
      }
    } catch (error) {
      addIssue('error', 'schema', pageUrl, `Invalid JSON-LD: ${error.message}`);
    }
  });
}

async function auditSite(site, report) {
  const startedAt = Date.now();
  const base = stripTrailingSlash(site.siteUrl);
  const siteResult = {
    dir: site.dir,
    domain: site.domain,
    startedAt: nowIso(),
    build: null,
    pagesChecked: 0,
    sitemapUrls: 0,
    contractsChecked: 0,
    issueCount: 0,
    durationMs: 0,
  };
  const addIssue = (severity, category, url, message, detail) => {
    const entry = { severity, site: site.dir, domain: site.domain, category, url, message, detail };
    entry.fingerprint = fingerprint(entry);
    report.issues.push(entry);
    siteResult.issueCount += 1;
  };

  const requiredLocal = [
    'package.json',
    'index.html',
    'public/ads.txt',
    'public/robots.txt',
    'public/sitemap.xml',
    'public/404.html',
    'seo/generated-routes.json',
    'scripts/prerender.mjs',
  ];
  for (const relative of requiredLocal) {
    if (!(await exists(path.join(ROOT, site.dir, relative)))) {
      addIssue('error', 'local-files', null, `Missing required file: ${relative}`);
    }
  }

  if (runBuilds) {
    const buildStarted = Date.now();
    const typecheck = await runCommand('npm', ['run', 'typecheck'], path.join(ROOT, site.dir));
    const build = typecheck.ok
      ? await runCommand('npm', ['run', 'build'], path.join(ROOT, site.dir), 15 * 60_000)
      : { ok: false, code: null, durationMs: 0, output: 'Skipped because typecheck failed' };
    siteResult.build = {
      ok: typecheck.ok && build.ok,
      typecheck: { ok: typecheck.ok, durationMs: typecheck.durationMs },
      production: { ok: build.ok, durationMs: build.durationMs },
      durationMs: Date.now() - buildStarted,
    };
    const buildLog = [
      `# ${site.domain} nightly build`,
      `Typecheck: ${typecheck.ok ? 'PASS' : 'FAIL'}`,
      '',
      typecheck.output,
      '',
      `Production build: ${build.ok ? 'PASS' : 'FAIL'}`,
      '',
      build.output,
    ].join('\n');
    await writeFile(path.join(REPORT_DIR, `build-${site.dir}-latest.log`), buildLog, 'utf8');
    if (!typecheck.ok) addIssue('error', 'build', null, 'TypeScript check failed', typecheck.output.slice(-4000));
    if (!build.ok) addIssue('error', 'build', null, 'Production build or prerender failed', build.output.slice(-4000));
    if (build.ok) {
      const dist = path.join(ROOT, site.dir, 'dist');
      if (await exists(path.join(dist, '__spa-shell.html'))) {
        addIssue('error', 'prerender', null, 'Temporary __spa-shell.html leaked into production output');
      }
      for (const relative of ['404.html', 'terms/index.html', 'index.html']) {
        if (!(await exists(path.join(dist, relative)))) {
          addIssue('error', 'prerender', null, `Production output is missing ${relative}`);
        }
      }
    }
  }

  const essentials = [
    ['home', `${base}/`],
    ['terms', `${base}/terms/`],
    ['ads', `${base}/ads.txt`],
    ['robots', `${base}/robots.txt`],
    ['sitemap', `${base}/sitemap.xml`],
    ['notFound', `${base}/nightly-audit-definitely-not-a-real-page`],
  ];
  const essentialBodies = new Map();
  for (const [label, url] of essentials) {
    try {
      const response = await fetchWithRetry(url, { redirect: label === 'notFound' ? 'manual' : 'follow' });
      const body = await response.text();
      essentialBodies.set(label, { response, body, url });
      const expected = label === 'notFound' ? 404 : 200;
      if (response.status !== expected) {
        addIssue('error', label === 'notFound' ? 'soft-404' : 'http', url, `Expected HTTP ${expected}, received ${response.status}`);
      }
    } catch (error) {
      addIssue('error', 'http', url, `Request failed: ${error.message}`);
    }
  }

  const adsBody = essentialBodies.get('ads')?.body || '';
  if (!adsBody.includes(`google.com, pub-${PUBLISHER_ID.replace('ca-pub-', '')}`)) {
    addIssue('error', 'ads', `${base}/ads.txt`, 'ads.txt is missing the expected AdSense publisher record');
  }
  const robotsBody = essentialBodies.get('robots')?.body || '';
  if (!robotsBody.includes(`${base}/sitemap.xml`)) {
    addIssue('warning', 'robots', `${base}/robots.txt`, 'robots.txt does not advertise the canonical sitemap URL');
  }
  const notFoundBody = essentialBodies.get('notFound')?.body || '';
  if (!/noindex/i.test(notFoundBody)) {
    addIssue('error', 'soft-404', `${base}/nightly-audit-definitely-not-a-real-page`, '404 response is missing noindex');
  }

  const sitemapBody = essentialBodies.get('sitemap')?.body || '';
  const sitemapUrls = [...new Set(parseSitemap(sitemapBody).map(normalizeUrl))];
  siteResult.sitemapUrls = sitemapUrls.length;
  if (!sitemapUrls.length) addIssue('error', 'sitemap', `${base}/sitemap.xml`, 'Sitemap contains no URLs');
  for (const legalPath of LEGAL_PATHS) {
    if (!sitemapUrls.includes(`${base}${legalPath}`)) {
      addIssue('error', 'sitemap', `${base}/sitemap.xml`, `Sitemap is missing ${legalPath}`);
    }
  }

  try {
    const routes = JSON.parse(await readFile(path.join(ROOT, site.dir, 'seo/generated-routes.json'), 'utf8'));
    const generatedRoutes = routes.allRoutes || [];
    let localSitemapLocs = [];
    try {
      localSitemapLocs = parseSitemap(await readFile(path.join(ROOT, site.dir, 'public/sitemap.xml'), 'utf8'));
    } catch (error) {
      addIssue('error', 'sitemap', null, `Could not read committed sitemap.xml: ${error.message}`);
    }
    const continuity = summarizeSitemapContinuity({
      siteUrl: site.siteUrl,
      generatedRoutes,
      liveLocs: sitemapUrls,
      localSitemapLocs,
    });
    siteResult.sitemapGeneratedUrls = continuity.generatedCount;
    if (!continuity.ok) {
      addIssue('error', 'sitemap-continuity', `${base}/sitemap.xml`, continuityMessage(continuity), {
        liveCount: continuity.liveCount,
        generatedCount: continuity.generatedCount,
        localCount: continuity.localCount,
        missingFromLiveSample: continuity.missingFromLive.slice(0, 8),
        extraOnLive: continuity.extraOnLive.slice(0, 20),
      });
    }
    const missingCap = continuity.staleDeploy ? 8 : 40;
    for (const url of continuity.missingFromLive.slice(0, missingCap)) {
      addIssue('error', 'sitemap', url, 'Generated route is missing from live sitemap');
    }
    if (continuity.missingFromLive.length > missingCap) {
      addIssue(
        'error',
        'sitemap',
        `${base}/sitemap.xml`,
        `${continuity.missingFromLive.length - missingCap} additional generated routes are missing from the live sitemap`,
      );
    }
    for (const url of continuity.extraOnLive) {
      addIssue(
        'error',
        'sitemap',
        url,
        'Live sitemap still submits a URL that is not in generated-routes.json (retired or orphan). Add a 301 or drop it on the next deploy.',
      );
    }
    for (const url of continuity.missingFromLocalSitemap.slice(0, 8)) {
      addIssue('error', 'sitemap', url, 'Generated route is missing from committed public/sitemap.xml');
    }
    for (const url of continuity.extraInLocalSitemap.slice(0, 8)) {
      addIssue('error', 'sitemap', url, 'Committed public/sitemap.xml has a URL that is not in generated-routes.json');
    }
  } catch (error) {
    addIssue('error', 'sitemap', null, `Could not compare generated routes: ${error.message}`);
  }

  const titleOwners = new Map();
  const descriptionOwners = new Map();
  const canonicalOwners = new Map();
  const bodyHashOwners = new Map();
  const discoveredInternalLinks = new Set();
  const discoveredAssets = new Set();
  const pageResults = await mapLimit(sitemapUrls, FETCH_CONCURRENCY, async (pageUrl) => {
    try {
      const response = await fetchWithRetry(pageUrl);
      const html = await response.text();
      if (response.status !== 200) {
        addIssue('error', 'http', pageUrl, `Sitemap URL returned HTTP ${response.status}`);
        return;
      }
      const $ = cheerio.load(html);
      const title = $('title').first().text().trim();
      const description = $('meta[name="description"]').attr('content')?.trim() || '';
      const canonical = $('link[rel="canonical"]').attr('href')?.trim() || '';
      const robots = $('meta[name="robots"]').attr('content') || '';
      const adsenseAccount = $('meta[name="google-adsense-account"]').attr('content') || '';
      const main = $('#main-content').first();
      const mainText = main.text().replace(/\s+/g, ' ').trim();
      const words = wordCount(mainText);
      const pathname = new URL(pageUrl).pathname;
      const minimumWords = LEGAL_PATHS.includes(pathname) ? 40 : pathname === '/' ? 120 : 100;
      const qualityTarget = pathname.startsWith('/guides/')
        ? 350
        : site.dir === 'project'
          ? 250
          : pathname.startsWith('/recipes/')
            ? 300
            : LEGAL_PATHS.includes(pathname) || pathname === '/'
              ? null
              : 250;

      if (!title) addIssue('error', 'metadata', pageUrl, 'Page is missing a title');
      if (!description) addIssue('error', 'metadata', pageUrl, 'Page is missing a meta description');
      else if (description.length < 70 || description.length > 180) {
        addIssue('warning', 'metadata', pageUrl, `Meta description length is ${description.length}; target 70–180 characters`);
      }
      if (!canonical) addIssue('error', 'canonical', pageUrl, 'Page is missing a canonical URL');
      else if (normalizeUrl(canonical) !== normalizeUrl(pageUrl)) {
        addIssue('error', 'canonical', pageUrl, `Canonical points to ${canonical}`);
      }
      if (/noindex/i.test(robots)) addIssue('error', 'indexing', pageUrl, 'Sitemap URL is marked noindex');
      if (adsenseAccount !== PUBLISHER_ID) {
        addIssue('error', 'ads', pageUrl, 'Page is missing the expected google-adsense-account metadata');
      }
      if (!main.length) addIssue('error', 'content', pageUrl, 'Page is missing #main-content');
      else if (words < minimumWords) {
        addIssue('warning', 'thin-content', pageUrl, `Main content has ${words} words; expected at least ${minimumWords}`);
      } else if (qualityTarget && words < qualityTarget) {
        addIssue(
          'opportunity',
          'content-depth',
          pageUrl,
          `Main content has ${words} words; deepen toward ${qualityTarget}+ words when search demand supports it`,
        );
      }

      const addOwner = (map, key, url) => {
        if (!key) return;
        if (!map.has(key)) map.set(key, []);
        map.get(key).push(url);
      };
      addOwner(titleOwners, title, pageUrl);
      addOwner(descriptionOwners, description, pageUrl);
      addOwner(canonicalOwners, canonical, pageUrl);
      if (mainText) {
        const bodyHash = createHash('sha1').update(mainText.toLowerCase()).digest('hex');
        addOwner(bodyHashOwners, bodyHash, pageUrl);
      }

      parseJsonLd($, site, pageUrl, addIssue);
      $('a[href]').each((_, element) => {
        try {
          const target = new URL($(element).attr('href'), pageUrl);
          if (
            target.origin === new URL(base).origin &&
            !target.pathname.startsWith('/cdn-cgi/')
          ) {
            discoveredInternalLinks.add(normalizeUrl(target.toString()));
          }
        } catch {}
      });
      $('img[src], meta[property="og:image"], meta[name="twitter:image"]').each((_, element) => {
        const value = $(element).attr('src') || $(element).attr('content');
        if (!value) return;
        try {
          const target = new URL(value, pageUrl);
          if (target.origin === new URL(base).origin) discoveredAssets.add(target.toString());
        } catch {}
      });
    } catch (error) {
      addIssue('error', 'http', pageUrl, `Could not audit sitemap URL: ${error.message}`);
    }
  });
  siteResult.pagesChecked = pageResults.length;

  for (const [label, owners] of [
    ['title', titleOwners],
    ['meta description', descriptionOwners],
    ['canonical URL', canonicalOwners],
  ]) {
    for (const [value, urls] of owners) {
      if (value && urls.length > 1) {
        addIssue('warning', 'duplicate-metadata', urls[0], `Duplicate ${label} appears on ${urls.length} pages`, urls.slice(0, 10));
      }
    }
  }
  for (const urls of bodyHashOwners.values()) {
    if (urls.length > 1) {
      addIssue('warning', 'duplicate-content', urls[0], `Exact duplicate main content appears on ${urls.length} pages`, urls.slice(0, 10));
    }
  }

  const sitemapSet = new Set(sitemapUrls);
  const extraLinks = [...discoveredInternalLinks].filter((url) => !sitemapSet.has(url));
  await mapLimit(extraLinks, FETCH_CONCURRENCY, async (url) => {
    try {
      const response = await fetchWithRetry(url, { redirect: 'manual' });
      if (response.status >= 400) addIssue('error', 'broken-link', url, `Internal link returned HTTP ${response.status}`);
    } catch (error) {
      addIssue('error', 'broken-link', url, `Internal link request failed: ${error.message}`);
    }
  });
  await mapLimit([...discoveredAssets], FETCH_CONCURRENCY, async (url) => {
    try {
      const response = await fetchWithRetry(url);
      if (!response.ok) addIssue('error', 'asset', url, `Referenced image returned HTTP ${response.status}`);
    } catch (error) {
      addIssue('error', 'asset', url, `Referenced image request failed: ${error.message}`);
    }
  });

  for (const contract of CONTRACTS[site.dir] || []) {
    siteResult.contractsChecked += 1;
    const url = `${base}${contract.path}`;
    try {
      const response = await fetchWithRetry(url);
      const body = await response.text();
      for (const needle of contract.includes || []) {
        if (!body.includes(needle)) addIssue('error', 'contract', url, `Contract failed: ${contract.label} (missing ${needle})`);
      }
      for (const needle of contract.excludes || []) {
        if (body.includes(needle)) addIssue('error', 'contract', url, `Contract failed: ${contract.label} (found ${needle})`);
      }
    } catch (error) {
      addIssue('error', 'contract', url, `Contract request failed: ${error.message}`);
    }
  }

  siteResult.durationMs = Date.now() - startedAt;
  return siteResult;
}

function reportMarkdown(report) {
  const lines = [
    `# Portfolio nightly health report`,
    '',
    `Generated: ${report.generatedAt}`,
    `Mode: ${report.runBuilds ? 'build + live crawl' : 'live crawl only'}`,
    `Result: ${report.summary.errors ? 'FAIL' : report.summary.warnings ? 'PASS WITH WARNINGS' : 'PASS'}`,
    '',
    `## What ran`,
    '',
    `- Sites checked: ${report.summary.sites}`,
    `- Sitemap pages crawled: ${report.summary.pagesChecked}`,
    `- Production contracts checked: ${report.summary.contractsChecked}`,
    `- Errors: ${report.summary.errors}`,
    `- Warnings: ${report.summary.warnings}`,
    `- Content opportunities: ${report.summary.opportunities}`,
    `- New issues: ${report.newIssues.length}`,
    `- Resolved since previous run: ${report.resolvedIssues.length}`,
    '',
  ];
  if (report.newIssues.length) {
    lines.push('## New issues', '');
    for (const row of report.newIssues) lines.push(`- **${row.severity.toUpperCase()}** ${row.domain}: ${row.message}${row.url ? ` — ${row.url}` : ''}`);
    lines.push('');
  }
  if (report.resolvedIssues.length) {
    lines.push('## Resolved since previous run', '');
    for (const row of report.resolvedIssues) lines.push(`- ${row.domain}: ${row.message}${row.url ? ` — ${row.url}` : ''}`);
    lines.push('');
  }
  lines.push('## Per-site result', '');
  for (const site of report.sites) {
    const errors = report.issues.filter((row) => row.site === site.dir && row.severity === 'error').length;
    const warnings = report.issues.filter((row) => row.site === site.dir && row.severity === 'warning').length;
    const opportunities = report.issues.filter((row) => row.site === site.dir && row.severity === 'opportunity').length;
    lines.push(`- **${site.domain}** — ${errors ? 'FAIL' : 'PASS'}; ${site.pagesChecked} pages; ${errors} errors; ${warnings} warnings; ${opportunities} content opportunities${site.build ? `; build ${site.build.ok ? 'passed' : 'failed'}` : ''}`);
  }
  const operationalIssues = report.issues.filter((row) => row.severity !== 'opportunity');
  if (operationalIssues.length) {
    lines.push('', '## All current issues', '');
    for (const row of operationalIssues) lines.push(`- **${row.severity.toUpperCase()}** [${row.category}] ${row.domain}: ${row.message}${row.url ? ` — ${row.url}` : ''}`);
  }
  if (report.summary.opportunities) {
    lines.push('', '## Content depth backlog', '');
    lines.push('Prioritize these pages only when GSC impressions or user demand justify expansion.', '');
    for (const row of report.issues.filter((item) => item.severity === 'opportunity').slice(0, 50)) {
      lines.push(`- ${row.domain}: ${row.message} — ${row.url}`);
    }
    if (report.summary.opportunities > 50) {
      lines.push(`- …plus ${report.summary.opportunities - 50} more in the JSON report.`);
    }
  }
  lines.push('', `JSON report: reports/portfolio-health-latest.json`, '');
  return lines.join('\n');
}

async function main() {
  const startedAt = Date.now();
  await mkdir(REPORT_DIR, { recursive: true });
  const registry = JSON.parse(await readFile(path.join(ROOT, 'sites.registry.json'), 'utf8'));
  let sites = registry.sites || [];
  if (requestedSite) sites = sites.filter((site) => site.dir === requestedSite || site.domain === requestedSite);
  if (!sites.length) throw new Error(`No sites matched ${requestedSite || 'registry'}`);

  let previous = null;
  const latestJson = path.join(REPORT_DIR, 'portfolio-health-latest.json');
  try {
    previous = JSON.parse(await readFile(latestJson, 'utf8'));
  } catch {}

  const report = {
    generatedAt: nowIso(),
    runBuilds,
    requestedSite: requestedSite || null,
    sites: [],
    issues: [],
    newIssues: [],
    newOpportunities: [],
    persistentIssues: [],
    resolvedIssues: [],
    summary: {},
  };

  for (const site of sites) {
    console.log(`\n=== ${site.domain} ===`);
    report.sites.push(await auditSite(site, report));
  }

  const previousByKey = new Map((previous?.issues || []).map((row) => [issueKey(row), row]));
  const currentByKey = new Map(report.issues.map((row) => [issueKey(row), row]));
  report.newIssues = report.issues.filter(
    (row) => row.severity !== 'opportunity' && !previousByKey.has(issueKey(row)),
  );
  report.newOpportunities = report.issues.filter(
    (row) => row.severity === 'opportunity' && !previousByKey.has(issueKey(row)),
  );
  report.persistentIssues = report.issues.filter((row) => previousByKey.has(issueKey(row)));
  report.resolvedIssues = [...previousByKey.entries()]
    .filter(([key]) => !currentByKey.has(key))
    .map(([, row]) => row);
  report.summary = {
    sites: report.sites.length,
    pagesChecked: report.sites.reduce((sum, site) => sum + site.pagesChecked, 0),
    contractsChecked: report.sites.reduce((sum, site) => sum + site.contractsChecked, 0),
    errors: report.issues.filter((row) => row.severity === 'error').length,
    warnings: report.issues.filter((row) => row.severity === 'warning').length,
    opportunities: report.issues.filter((row) => row.severity === 'opportunity').length,
    durationMs: Date.now() - startedAt,
  };

  const stamp = report.generatedAt.slice(0, 10);
  const json = JSON.stringify(report, null, 2);
  const markdown = reportMarkdown(report);
  await writeFile(latestJson, json, 'utf8');
  await writeFile(path.join(REPORT_DIR, `portfolio-health-${stamp}.json`), json, 'utf8');
  await writeFile(path.join(REPORT_DIR, 'portfolio-health-latest.md'), markdown, 'utf8');
  await writeFile(path.join(REPORT_DIR, `portfolio-health-${stamp}.md`), markdown, 'utf8');

  console.log('\n=== Portfolio summary ===');
  console.log(`Sites: ${report.summary.sites}`);
  console.log(`Pages: ${report.summary.pagesChecked}`);
  console.log(`Errors: ${report.summary.errors}`);
  console.log(`Warnings: ${report.summary.warnings}`);
  console.log(`Content opportunities: ${report.summary.opportunities}`);
  console.log(`New: ${report.newIssues.length}`);
  console.log(`Resolved: ${report.resolvedIssues.length}`);
  console.log(`Report: ${path.join(REPORT_DIR, 'portfolio-health-latest.md')}`);
  if (report.summary.errors > 0) process.exitCode = 1;
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});

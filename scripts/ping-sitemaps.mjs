#!/usr/bin/env node
/**
 * Verify live sitemaps, ping Bing, and print a Google Search Console indexing checklist.
 *
 * Google deprecated the public sitemap ping endpoint — use Search Console for
 * authoritative resubmits. This script:
 *   1. Fetches each sitemap (must return 200) and counts URLs
 *   2. Optionally verifies P0 money pages return 200 (--verify-p0)
 *   3. Pings Bing Webmaster Tools (best-effort; 410 is deprecated)
 *   4. Prints per-domain GSC links + P0 "Request indexing" checklist
 *
 * Usage:
 *   node scripts/ping-sitemaps.mjs                 # all 8 sites (default)
 *   node scripts/ping-sitemaps.mjs --all           # same as default
 *   node scripts/ping-sitemaps.mjs drywallcalculator
 *   node scripts/ping-sitemaps.mjs --checklist-only   # no network; print GSC steps
 *   node scripts/ping-sitemaps.mjs --verify-p0     # also HEAD/GET each P0 URL
 *   node scripts/ping-sitemaps.mjs --legacy        # drywall, mulch, paint only
 */
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import {
  GSC_SETUP_STEPS,
  bingWebmasterUrl,
  gscInspectUrl,
  gscPropertyWelcomeUrl,
  gscSitemapsUrl,
  getP0ForDir,
  absoluteUrl,
} from './lib/gsc-checklist.mjs';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, '..');

const LEGACY_DIRS = ['drywallcalculator', 'mulchcalculator', 'paintcalculator'];

const args = process.argv.slice(2);
const allFlag = args.includes('--all');
const legacyFlag = args.includes('--legacy');
const checklistOnly = args.includes('--checklist-only');
const verifyP0 = args.includes('--verify-p0');
const positional = args.filter((a) => !a.startsWith('-'));

const registry = JSON.parse(fs.readFileSync(path.join(ROOT, 'sites.registry.json'), 'utf8'));

let sites = registry.sites;
if (positional.length > 0) {
  sites = sites.filter((s) => positional.includes(s.dir));
  if (sites.length === 0) {
    console.error(`No matching sites for: ${positional.join(', ')}`);
    console.error(`Known dirs: ${registry.sites.map((s) => s.dir).join(', ')}`);
    process.exit(1);
  }
} else if (legacyFlag) {
  sites = sites.filter((s) => LEGACY_DIRS.includes(s.dir));
} else if (!allFlag) {
  // default: all sites in registry
}

async function fetchStatus(url, method = 'GET') {
  const res = await fetch(url, { redirect: 'follow', method });
  return { status: res.status, ok: res.ok };
}

async function pingBing(sitemapUrl) {
  const pingUrl = `https://www.bing.com/webmaster/ping.aspx?siteMap=${encodeURIComponent(sitemapUrl)}`;
  const res = await fetch(pingUrl);
  return { status: res.status, ok: res.ok };
}

function parseSitemapLocs(xml) {
  const locs = [];
  const re = /<loc>([^<]+)<\/loc>/g;
  let m;
  while ((m = re.exec(xml)) !== null) {
    locs.push(m[1].trim());
  }
  return locs;
}

function printGlobalChecklist() {
  console.log('═══════════════════════════════════════════════════════════════');
  console.log('  Google Search Console — portfolio setup checklist');
  console.log('═══════════════════════════════════════════════════════════════\n');
  GSC_SETUP_STEPS.forEach((step, i) => {
    console.log(`  ${i + 1}. ${step}`);
  });
  console.log(`\n  Bing Webmaster Tools: ${bingWebmasterUrl()}\n`);
}

function printSiteChecklist(site, { sitemapUrlCount = null, p0Results = null } = {}) {
  const p0 = getP0ForDir(site.dir);
  const gscHost = site.domain;

  console.log(`───────────────────────────────────────────────────────────────`);
  console.log(`  ${p0.label} — ${site.domain}`);
  console.log(`───────────────────────────────────────────────────────────────`);
  if (sitemapUrlCount != null) {
    console.log(`  Sitemap URLs: ${sitemapUrlCount}  →  ${site.siteUrl}/sitemap.xml`);
  }
  console.log(`  Add property:  ${gscPropertyWelcomeUrl(gscHost)}`);
  console.log(`  Submit sitemap: ${gscSitemapsUrl(gscHost)}`);
  console.log(`    Enter: sitemap.xml\n`);
  console.log('  P0 — Request indexing (URL Inspection → Request indexing):\n');

  for (const entry of p0.paths) {
    const full = absoluteUrl(site.siteUrl, entry.path);
    const tag = entry.isNew ? ' [NEW]' : '';
    const note = entry.note ? ` (${entry.note})` : '';
    let status = '';
    if (p0Results) {
      const r = p0Results.get(full);
      if (r) status = r.ok ? ' ✓' : ` ✗ HTTP ${r.status}`;
    }
    console.log(`    ${entry.isNew ? '★' : '·'} ${full}${tag}${note}${status}`);
    console.log(`      Inspect: ${gscInspectUrl(site.siteUrl, entry.path)}`);
  }
  console.log('');
}

async function run() {
  printGlobalChecklist();

  if (checklistOnly) {
    for (const site of sites) {
      printSiteChecklist(site);
    }
    console.log('Checklist only — no network requests. Run without --checklist-only to verify live sitemaps.\n');
    return;
  }

  console.log(`Sitemap check & ping for ${sites.length} site(s)…\n`);

  let anyFail = false;

  for (const site of sites) {
    const sitemapUrl = `${site.siteUrl}/sitemap.xml`;
    let sitemapUrlCount = null;
    const p0Results = verifyP0 ? new Map() : null;

    process.stdout.write(`  ${site.domain}\n`);

    try {
      const res = await fetch(sitemapUrl, { redirect: 'follow' });
      if (!res.ok) {
        console.log(`    ✗ sitemap fetch HTTP ${res.status} — ${sitemapUrl}`);
        anyFail = true;
        printSiteChecklist(site);
        continue;
      }

      const xml = await res.text();
      const locs = parseSitemapLocs(xml);
      sitemapUrlCount = locs.length;
      console.log(`    ✓ sitemap live (${res.status}) — ${sitemapUrlCount} URLs`);

      const bing = await pingBing(sitemapUrl);
      if (bing.ok) {
        console.log(`    ✓ Bing ping (${bing.status})`);
      } else if (bing.status === 410) {
        console.log(`    · Bing ping deprecated (HTTP 410) — submit sitemap in Bing Webmaster manually`);
      } else {
        console.log(`    · Bing ping HTTP ${bing.status} (non-fatal)`);
      }

      if (verifyP0) {
        const p0 = getP0ForDir(site.dir);
        let p0Fail = 0;
        for (const entry of p0.paths) {
          const full = absoluteUrl(site.siteUrl, entry.path);
          const check = await fetchStatus(full);
          p0Results.set(full, check);
          if (!check.ok) p0Fail++;
        }
        if (p0Fail > 0) {
          console.log(`    ✗ ${p0Fail} P0 URL(s) not HTTP 200`);
          anyFail = true;
        } else {
          console.log(`    ✓ all ${p0.paths.length} P0 URLs return 200`);
        }
      }

      console.log('');
      printSiteChecklist(site, { sitemapUrlCount, p0Results });
    } catch (err) {
      console.log(`    ✗ ${err.message}\n`);
      printSiteChecklist(site);
      anyFail = true;
    }
  }

  if (anyFail) {
    console.log('Some checks failed — fix deploy or DNS before resubmitting in GSC.\n');
    process.exit(1);
  }

  console.log('Done. Work through each domain checklist above in Google Search Console.\n');

  let newCount = 0;
  for (const site of sites) {
    const p0 = getP0ForDir(site.dir);
    newCount += p0.paths.filter((p) => p.isNew).length;
  }
  if (newCount > 0) {
    console.log(`Priority: request indexing on ${newCount} ★ NEW URL(s) marked in the checklists above.\n`);
  }
}

run().catch((err) => {
  console.error(err);
  process.exit(1);
});

#!/usr/bin/env node
/**
 * Add www → apex (301) redirect rules for all sites in sites.registry.json.
 *
 * Usage:
 *   node scripts/setup-www-redirects.mjs           # all sites
 *   node scripts/setup-www-redirects.mjs paintcalculator   # one site
 *
 * API token needs: Zone → Zone → Read, Zone → Rules → Edit (or Single Redirect → Edit)
 */
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { loadRepoEnv } from './lib/env.mjs';
import { createClient, ensureWwwToApexRedirect, dashboardLinks } from './lib/cloudflare.mjs';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, '..');

const siteFilter = process.argv[2];

loadRepoEnv(ROOT);

const accountId = process.env.CLOUDFLARE_ACCOUNT_ID;
const apiToken = process.env.CLOUDFLARE_API_TOKEN;
const registry = JSON.parse(fs.readFileSync(path.join(ROOT, 'sites.registry.json'), 'utf8'));

let sites = registry.sites.filter((s) => s.domain);
if (siteFilter) {
  sites = sites.filter((s) => s.dir === siteFilter);
  if (sites.length === 0) {
    console.error(`Site "${siteFilter}" not found in sites.registry.json`);
    process.exit(1);
  }
}

const cf = createClient(accountId, apiToken);

console.log(`\nAdding www → apex redirects for ${sites.length} domain(s)…\n`);

const results = [];

for (const site of sites) {
  try {
    const result = await ensureWwwToApexRedirect(cf, site.domain);
    results.push({ site, ...result });

    if (result.status === 'created') {
      console.log(`  ✓ ${site.domain} — redirect rule created (${result.method ?? 'redirect'})`);
    } else if (result.status === 'exists') {
      console.log(`  · ${site.domain} — redirect rule already present (${result.method ?? 'redirect'})`);
    } else {
      console.log(`  ⚠ ${site.domain} — ${result.reason}`);
    }
  } catch (err) {
    results.push({ site, status: 'error', error: err.message });
    console.log(`  ✗ ${site.domain} — ${err.message}`);
  }
}

const failed = results.filter((r) => r.status === 'error');
const skipped = results.filter((r) => r.status === 'skipped');

console.log('');

if (failed.length > 0) {
  console.log('Some domains failed. Your API token can manage DNS but not redirect rules yet.');
  console.log('Add ONE of these to your token (https://dash.cloudflare.com/profile/api-tokens):');
  console.log('  • Zone → Page Rules → Edit → All zones   (works on free plan, 3 rules/zone)');
  console.log('  • Zone → Single Redirect → Edit → All zones   (preferred, Redirect Rules)');
  console.log('Then re-run:  npm run redirects:www');
  console.log('');
  console.log('Workaround (no redirect token): redeploy each site — deploy copies Pages');
  console.log('Functions middleware that 301s www → apex:');
  console.log('  npm run deploy:drywall   (and other deploy:* scripts)\n');
  process.exit(1);
}

if (skipped.length > 0) {
  console.log(`${skipped.length} domain(s) skipped (no Cloudflare zone). Run npm run domain -- <site> first.\n`);
}

console.log('Verify (should show 301/308 to apex):');
for (const site of sites.filter((s) => results.find((r) => r.site.dir === s.dir && r.status !== 'skipped'))) {
  console.log(`  curl -sI "https://www.${site.domain}/" | grep -iE 'HTTP|location'`);
}
console.log('');

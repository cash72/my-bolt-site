#!/usr/bin/env node
/**
 * Automate Pages custom domain + DNS CNAME records for a site.
 *
 * Usage: node scripts/setup-cloudflare-domain.mjs metaboliclowcarb
 */
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { loadRepoEnv } from './lib/env.mjs';
import { createClient, setupCustomDomain, dashboardLinks } from './lib/cloudflare.mjs';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, '..');

const siteDir = process.argv[2];
if (!siteDir) {
  console.error('Usage: node scripts/setup-cloudflare-domain.mjs <site-folder>');
  process.exit(1);
}

loadRepoEnv(ROOT);

const accountId = process.env.CLOUDFLARE_ACCOUNT_ID;
const apiToken = process.env.CLOUDFLARE_API_TOKEN;
const registry = JSON.parse(fs.readFileSync(path.join(ROOT, 'sites.registry.json'), 'utf8'));
const site = registry.sites.find((s) => s.dir === siteDir);

if (!site?.domain) {
  console.error(`No domain configured for "${siteDir}" in sites.registry.json`);
  process.exit(1);
}

const links = dashboardLinks(accountId, site);

try {
  const cf = createClient(accountId, apiToken);
  console.log(`\nSetting up ${site.domain} → ${site.pagesProject}.pages.dev\n`);

  const result = await setupCustomDomain(cf, {
    pagesProject: site.pagesProject,
    domain: site.domain,
  });

  for (const step of result.steps) {
    console.log(`  • ${step}`);
  }

  if (result.zoneError) {
    console.log('\n────────────────────────────────────────');
    console.log('Your API token cannot manage this zone yet.');
    console.log('One-time fix (2 minutes):');
    console.log(`  1. Open ${links.apiTokens}`);
    console.log('  2. Edit your token → add permissions:');
    console.log('       Zone → DNS → Edit → All zones');
    console.log('       Zone → Zone → Read → All zones');
    console.log('  3. Re-run: npm run domain -- ' + siteDir);
    console.log('────────────────────────────────────────\n');
    process.exit(1);
  }

  if (result.pendingZone) {
    console.log('\n⏳ Zone is not Active yet — Cloudflare is still verifying the domain.');
    console.log('   You will get an email when ready. Then re-run:');
    console.log(`   npm run domain -- ${siteDir}\n`);
    console.log(`   Preview works now: https://${site.pagesProject}.pages.dev\n`);
    process.exit(0);
  }

  if (result.domains?.length) {
    console.log('\nCustom domain status:');
    for (const d of result.domains) {
      console.log(`  • ${d.name}: ${d.status}${d.error ? ` — ${d.error}` : ''}`);
    }
  }

  console.log('\n✓ DNS automation complete.');
  console.log(`  Custom:  https://${site.domain}`);
  console.log(`  Preview: https://${site.pagesProject}.pages.dev`);
  console.log(`  Check:   ${links.pagesDomains}\n`);
  console.log('If status is still "pending", wait 5–15 minutes for SSL.\n');
} catch (err) {
  console.error('\n✗', err.message);
  process.exit(1);
}

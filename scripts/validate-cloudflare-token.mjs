#!/usr/bin/env node
/**
 * Verify API token can manage all registered site zones + Pages.
 *
 * Usage: node scripts/validate-cloudflare-token.mjs
 */
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { loadRepoEnv } from './lib/env.mjs';
import { createClient, dashboardLinks } from './lib/cloudflare.mjs';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, '..');

loadRepoEnv(ROOT);

const accountId = process.env.CLOUDFLARE_ACCOUNT_ID;
const apiToken = process.env.CLOUDFLARE_API_TOKEN;
const registry = JSON.parse(fs.readFileSync(path.join(ROOT, 'sites.registry.json'), 'utf8'));

let ok = true;

try {
  const cf = createClient(accountId, apiToken);
  await cf.verifyToken();
  console.log('\n✓ API token is valid\n');

  const zones = await cf.listZones();
  const zoneNames = new Set(zones.map((z) => z.name));
  console.log(`Zones visible to token (${zones.length}):`);
  for (const z of zones) {
    console.log(`  • ${z.name} — ${z.status}`);
  }
  console.log('');

  for (const site of registry.sites) {
    if (!site.domain) continue;
    const links = dashboardLinks(accountId, site);
    console.log(`── ${site.domain} ──`);

    if (!zoneNames.has(site.domain)) {
      ok = false;
      console.log('  ✗ Zone NOT visible to this token');
      console.log('    Fix: edit API token → Zone → DNS → Edit → All zones in account');
      console.log('         Zone → Zone → Read → All zones in account');
      console.log(`    Then: npm run domain -- ${site.dir}`);
      console.log(`    Token: ${links.apiTokens}\n`);
      continue;
    }

    const zone = zones.find((z) => z.name === site.domain);
    if (zone.status !== 'active') {
      ok = false;
      console.log(`  ⚠ Zone status: ${zone.status} (wait for activation email, then re-run)`);
    } else {
      console.log('  ✓ Zone active');
    }

    const records = await cf.listDns(zone.id);
    const target = `${site.pagesProject}.pages.dev`;
    const apex = records.find(
      (r) => r.type === 'CNAME' && r.content === target && (r.name === site.domain || r.name === site.domain + '.')
    );
    const www = records.find(
      (r) => r.type === 'CNAME' && r.content === target && r.name === `www.${site.domain}`
    );

    if (apex) console.log(`  ✓ Apex CNAME → ${target}`);
    else {
      ok = false;
      console.log(`  ✗ Missing apex CNAME → ${target}`);
    }

    if (www) console.log(`  ✓ www CNAME → ${target}`);
    else {
      ok = false;
      console.log(`  ✗ Missing www CNAME → ${target}`);
    }

    const domains = await cf.listPagesDomains(site.pagesProject);
    for (const d of domains) {
      const mark = d.status === 'active' ? '✓' : '⚠';
      console.log(`  ${mark} Pages: ${d.name} — ${d.status}${d.verification_data?.error_message ? ` (${d.verification_data.error_message})` : ''}`);
      if (d.status !== 'active') ok = false;
    }

    console.log('');
  }

  if (ok) {
    console.log('✓ Token and domains look good. Deploy with:\n  npm run deploy -- <site-dir>\n');
  } else {
    console.log('✗ Fix the items above, then run:\n  npm run domain -- metaboliclowcarb\n');
    process.exit(1);
  }
} catch (err) {
  console.error('\n✗', err.message);
  console.error('\nCreate or update .env from .env.example\n');
  process.exit(1);
}

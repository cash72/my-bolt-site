#!/usr/bin/env node
/**
 * Probe whether the API token can create www → apex redirect rules.
 *
 * Usage: node scripts/check-redirect-permissions.mjs
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
const sample = registry.sites.find((s) => s.domain);

const cf = createClient(accountId, apiToken);
await cf.verifyToken();

console.log('\nRedirect API permission check\n');

if (!sample) {
  console.error('No domains in sites.registry.json');
  process.exit(1);
}

const zone = await cf.getZone(sample.domain);
if (!zone) {
  console.error(`Zone not found for ${sample.domain}`);
  process.exit(1);
}

const probes = [
  {
    name: 'Single Redirect (dynamic rulesets)',
    path: `/zones/${zone.id}/rulesets/phases/http_request_dynamic_redirect/entrypoint`,
    method: 'GET',
  },
  {
    name: 'Page Rules (read)',
    path: `/zones/${zone.id}/pagerules`,
    method: 'GET',
  },
];

let canReadRedirects = false;
let canWriteRedirects = false;

for (const probe of probes) {
  try {
    await cf.api(probe.method, probe.path);
    console.log(`  ✓ ${probe.name}`);
    canReadRedirects = true;
  } catch (err) {
    console.log(`  ✗ ${probe.name} — ${err.message}`);
  }
}

try {
  await cf.api('POST', `/zones/${zone.id}/rulesets`, {
    kind: 'zone',
    phase: 'http_request_dynamic_redirect',
    rules: [],
  });
  canWriteRedirects = true;
  console.log('  ✓ Single Redirect (create)');
} catch (err) {
  if (/9109|Unauthorized/i.test(err.message)) {
    console.log('  ✗ Single Redirect (create) — missing Zone → Single Redirect → Edit');
  } else if (/required|invalid|missing|1004|9100|authentication/i.test(err.message)) {
    if (/authentication|10000/i.test(err.message)) {
      console.log('  ✗ Single Redirect (create) — missing Zone → Single Redirect → Edit');
    } else {
      canWriteRedirects = true;
      console.log('  ✓ Single Redirect (create) — write permission OK');
    }
  } else {
    console.log(`  ✗ Single Redirect (create) — ${err.message}`);
  }
}

if (!canWriteRedirects) {
  try {
    // Invalid payload: distinguish auth errors from validation errors.
    await cf.api('POST', `/zones/${zone.id}/pagerules`, {});
    canWriteRedirects = true;
    console.log('  ✓ Page Rules (create)');
  } catch (err) {
    if (/9109|Unauthorized/i.test(err.message)) {
      console.log('  ✗ Page Rules (create) — missing Zone → Page Rules → Edit');
    } else if (/required|invalid|missing|1004|9100/i.test(err.message)) {
      canWriteRedirects = true;
      console.log('  ✓ Page Rules (create) — write permission OK');
    } else {
      console.log(`  ✗ Page Rules (create) — ${err.message}`);
    }
  }
}

console.log('');

if (canWriteRedirects) {
  console.log('Token can create redirects. Run:\n  npm run redirects:www\n');
  process.exit(0);
}

console.log('Your token manages DNS and Pages but cannot create redirect rules.');
console.log('');
console.log('If Cloudflare showed "nothing to save" when editing the token, the permission');
console.log('did NOT apply. Existing tokens often cannot be changed — create a NEW token.');
console.log('');
console.log('Create Custom Token at:');
console.log(`  ${dashboardLinks(accountId, sample).apiTokens}\n`);
console.log('Permissions (include ALL zones in account for each Zone permission):');
console.log('  • Account → Cloudflare Pages → Edit');
console.log('  • Zone → Zone → Read');
console.log('  • Zone → DNS → Edit');
console.log('  • Zone → Single Redirect → Edit   (preferred)');
console.log('    — or — Zone → Page Rules → Edit   (free plan fallback)\n');
console.log('Zone Resources: Include → All zones in account');
console.log('Copy the NEW token into .env as CLOUDFLARE_API_TOKEN, then:');
console.log('  npm run redirects:check');
console.log('  npm run redirects:www\n');

process.exit(1);

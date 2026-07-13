#!/usr/bin/env node
/**
 * Print one-time setup steps (API token, .env, first deploy).
 */
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, '..');
const registry = JSON.parse(fs.readFileSync(path.join(ROOT, 'sites.registry.json'), 'utf8'));

console.log(`
╔══════════════════════════════════════════════════════════════════╗
║  Micro-site deploy — automated setup                             ║
╚══════════════════════════════════════════════════════════════════╝

ONE-TIME: Fix API token (required for custom domains)

  1. https://dash.cloudflare.com/profile/api-tokens → Edit your token
  2. Add permissions for ALL zones in your account:
       • Zone → Zone → Read → All zones
       • Zone → DNS → Edit → All zones
       • Account → Cloudflare Pages → Edit
  3. Save token → update CLOUDFLARE_API_TOKEN in .env

VERIFY token sees every site zone:

  npm run validate

AUTOMATE domain + DNS (no dashboard clicking):

  npm run domain -- metaboliclowcarb

DEPLOY (build + upload + domain if --attach-domain):

  npm run deploy -- metaboliclowcarb --attach-domain

DIAGNOSE both sites:

  npm run diagnose

Google Search Console:

  node scripts/add-google-verification.mjs metaboliclowcarb YOUR_CODE
  npm run deploy -- metaboliclowcarb

Registered sites:
${registry.sites.map((s) => `  • ${s.dir} → ${s.domain}`).join('\n')}
`);

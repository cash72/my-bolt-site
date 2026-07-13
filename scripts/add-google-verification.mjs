#!/usr/bin/env node
/**
 * Add Google Search Console HTML-file verification to a site.
 *
 * Usage:
 *   node scripts/add-google-verification.mjs googleabfb4703d24297e0 flooringboxcalculator
 *
 * The token is the part before .html (from Search Console download filename).
 */
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, '..');

const raw = process.argv[2];
const siteDir = process.argv[3] || 'flooringboxcalculator';

if (!raw) {
  console.error('Usage: node scripts/add-google-verification.mjs <verification-token> [site-folder]');
  console.error('Example: node scripts/add-google-verification.mjs googleabfb4703d24297e0 flooringboxcalculator');
  process.exit(1);
}

const publicDir = path.join(ROOT, siteDir, 'public');
const base = raw.replace(/\.html$/i, '').replace(/\s*\(\d+\)$/, '').trim();
const filename = base.startsWith('google') ? `${base}.html` : `google${base}.html`;
const filePath = path.join(publicDir, filename);
const content = `google-site-verification: ${filename}\n`;

fs.mkdirSync(publicDir, { recursive: true });
fs.writeFileSync(filePath, content);

console.log(`\n✓ Wrote ${path.relative(ROOT, filePath)}`);
console.log(`  Live URL will be: https://YOUR-DOMAIN/${filename}`);
console.log('\nRedeploy, then click Verify in Search Console:\n');
console.log(`  npm run deploy -- ${siteDir}\n`);

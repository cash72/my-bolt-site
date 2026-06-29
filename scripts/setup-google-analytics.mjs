#!/usr/bin/env node
/**
 * Save GA4 Measurement ID to repo root .env and print GitHub secret steps.
 *
 * Get your ID: https://analytics.google.com
 *   Admin → Data streams → satoshi-calc.com → Measurement ID (G-XXXXXXXXXX)
 *
 * Usage: node scripts/setup-google-analytics.mjs G-XXXXXXXXXX
 */
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, '..');
const ENV_PATH = path.join(ROOT, '.env');

const measurementId = process.argv[2]?.trim();

if (!measurementId) {
  console.error(`
Usage: node scripts/setup-google-analytics.mjs G-XXXXXXXXXX

Create a GA4 property first:
  1. https://analytics.google.com → Admin → Create property
  2. Add web data stream: https://satoshi-calc.com
  3. Copy Measurement ID (starts with G-)
  4. Re-run this script with that ID
`);
  process.exit(1);
}

if (!/^G-[A-Z0-9]+$/i.test(measurementId)) {
  console.error('Invalid format. Expected GA4 Measurement ID like G-XXXXXXXXXX');
  process.exit(1);
}

let envText = fs.existsSync(ENV_PATH) ? fs.readFileSync(ENV_PATH, 'utf8') : '';

if (/^VITE_GA_MEASUREMENT_ID=/m.test(envText)) {
  envText = envText.replace(/^VITE_GA_MEASUREMENT_ID=.*$/m, `VITE_GA_MEASUREMENT_ID=${measurementId}`);
} else {
  envText = envText.trimEnd() + `\nVITE_GA_MEASUREMENT_ID=${measurementId}\n`;
}

fs.writeFileSync(ENV_PATH, envText);

console.log(`\n✓ Saved VITE_GA_MEASUREMENT_ID=${measurementId} to .env\n`);
console.log('Next steps:');
console.log('  1. GitHub → Settings → Secrets → Actions → New secret');
console.log(`     Name: VITE_GA_MEASUREMENT_ID  Value: ${measurementId}`);
console.log('     (Or run: node scripts/sync-github-secrets.mjs after gh auth login)');
console.log('  2. Deploy: npm run deploy:satoshi');
console.log('  3. Verify: GA4 → Reports → Realtime while browsing satoshi-calc.com\n');

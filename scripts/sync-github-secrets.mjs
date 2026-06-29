#!/usr/bin/env node
/**
 * Push deploy credentials from .env to GitHub Actions secrets.
 * Requires: gh CLI authenticated (`gh auth login`).
 *
 * Usage: node scripts/sync-github-secrets.mjs
 */
import { execSync, spawnSync } from 'child_process';
import path from 'path';
import { fileURLToPath } from 'url';
import { loadRepoEnv } from './lib/env.mjs';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, '..');

loadRepoEnv(ROOT);

const required = {
  CLOUDFLARE_ACCOUNT_ID: process.env.CLOUDFLARE_ACCOUNT_ID,
  CLOUDFLARE_API_TOKEN: process.env.CLOUDFLARE_API_TOKEN,
};

const optional = {
  VITE_GA_MEASUREMENT_ID: process.env.VITE_GA_MEASUREMENT_ID,
  VITE_ADSENSE_CLIENT: process.env.VITE_ADSENSE_CLIENT,
  VITE_ADSENSE_SLOT_FOOTER: process.env.VITE_ADSENSE_SLOT_FOOTER,
  VITE_ADSENSE_SLOT_CONTENT: process.env.VITE_ADSENSE_SLOT_CONTENT,
};

for (const [name, value] of Object.entries(required)) {
  if (!value) {
    console.error(`Missing ${name} in .env`);
    process.exit(1);
  }
}

try {
  execSync('gh auth status', { stdio: 'ignore' });
} catch {
  console.error('GitHub CLI not authenticated. Run: gh auth login');
  console.error('Then re-run: node scripts/sync-github-secrets.mjs');
  process.exit(1);
}

function setSecret(name, value) {
  const result = spawnSync('gh', ['secret', 'set', name, '--body', value], {
    cwd: ROOT,
    stdio: 'inherit',
  });
  if (result.status !== 0) process.exit(result.status ?? 1);
}

console.log('Setting GitHub Actions secrets for cash72/my-bolt-site...\n');

for (const [name, value] of Object.entries(required)) {
  setSecret(name, value);
  console.log(`✓ ${name}`);
}

for (const [name, value] of Object.entries(optional)) {
  if (!value?.trim()) {
    console.log(`– ${name} (skipped — not in .env)`);
    continue;
  }
  setSecret(name, value.trim());
  console.log(`✓ ${name}`);
}

console.log('\nDone. Push to main or run Deploy Cloudflare site workflow to rebuild.');

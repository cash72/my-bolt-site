#!/usr/bin/env node
/**
 * Print site folder names (from sites.registry.json) that changed in the current push.
 * Used by deploy-cloudflare-site.yml on push events.
 */
import { execSync } from 'child_process';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, '..');

const registry = JSON.parse(fs.readFileSync(path.join(ROOT, 'sites.registry.json'), 'utf8'));
const siteDirs = registry.sites.map((s) => s.dir);

const before = process.env.GITHUB_BEFORE;
const after = process.env.GITHUB_SHA || 'HEAD';

function listChangedFiles() {
  const zeroSha = '0000000000000000000000000000000000000000';
  const base = !before || before === zeroSha ? `${after}~1` : before;

  try {
    const out = execSync(`git diff --name-only ${base} ${after}`, {
      cwd: ROOT,
      encoding: 'utf8',
    }).trim();
    return out ? out.split('\n') : [];
  } catch {
    return [];
  }
}

const changedFiles = listChangedFiles();
const changedSites = new Set();

const sharedDeployPaths = ['scripts/deploy-cloudflare.mjs', 'scripts/setup-cloudflare-domain.mjs', 'sites.registry.json'];
const sharedDeployPrefix = 'scripts/lib/';

for (const file of changedFiles) {
  for (const dir of siteDirs) {
    if (file === dir || file.startsWith(`${dir}/`)) {
      changedSites.add(dir);
    }
  }

  if (
    sharedDeployPaths.includes(file) ||
    file.startsWith(sharedDeployPrefix)
  ) {
    for (const dir of siteDirs) {
      changedSites.add(dir);
    }
  }
}

for (const dir of [...changedSites].sort()) {
  console.log(dir);
}

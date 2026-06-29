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
const isCI = process.env.GITHUB_ACTIONS === 'true';

function listChangedFiles() {
  const zeroSha = '0000000000000000000000000000000000000000';
  const attempts = [];

  if (before && before !== zeroSha) {
    attempts.push(`${before} ${after}`);
  }
  attempts.push(`${after}~1 ${after}`);
  if (isCI) {
    attempts.push('HEAD~1 HEAD');
  }

  for (const range of attempts) {
    try {
      const out = execSync(`git diff --name-only ${range}`, {
        cwd: ROOT,
        encoding: 'utf8',
      }).trim();
      if (out) return out.split('\n');
    } catch {
      // try next range
    }
  }

  return [];
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

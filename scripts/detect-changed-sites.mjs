#!/usr/bin/env node
/**
 * Print site folder names (from sites.registry.json) that changed in the current push.
 * Used by deploy-cloudflare-site.yml on push events.
 *
 * Only deploys a site when:
 *   - Files under that site's folder changed, or
 *   - That site's entry in sites.registry.json changed
 *
 * Shared script/root changes alone do NOT trigger a portfolio-wide redeploy.
 *
 * Usage:
 *   node scripts/detect-changed-sites.mjs        # one dir per line
 *   node scripts/detect-changed-sites.mjs --json # JSON array for CI matrix
 */
import { execSync } from 'child_process';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, '..');
const jsonMode = process.argv.includes('--json');

const registry = JSON.parse(fs.readFileSync(path.join(ROOT, 'sites.registry.json'), 'utf8'));
const siteDirs = registry.sites
  .map((s) => s.dir)
  .filter((dir) => fs.existsSync(path.join(ROOT, dir, 'package.json')));

const before = process.env.GITHUB_BEFORE;
const after = process.env.GITHUB_SHA || 'HEAD';
const isCI = process.env.GITHUB_ACTIONS === 'true';

function gitOutput(cmd) {
  return execSync(cmd, { cwd: ROOT, encoding: 'utf8' }).trim();
}

function tryDiff(range) {
  try {
    const out = gitOutput(`git diff --name-only ${range}`);
    return { ok: true, files: out ? out.split('\n').filter(Boolean) : [] };
  } catch {
    return { ok: false, files: [] };
  }
}

function listChangedFiles() {
  const zeroSha = '0000000000000000000000000000000000000000';

  if (before && after && before === after) {
    return [];
  }

  const attempts = [];

  if (before && before !== zeroSha && before !== after) {
    attempts.push(`${before} ${after}`);
  }
  if (isCI) {
    attempts.push('HEAD~1 HEAD');
  }
  attempts.push(`${after}~1 ${after}`);

  for (const range of attempts) {
    const result = tryDiff(range);
    if (result.ok) return result.files;
  }

  return [];
}

function dirsWithRegistryEntryChanges(changedFiles) {
  if (!changedFiles.includes('sites.registry.json')) {
    return [];
  }

  const zeroSha = '0000000000000000000000000000000000000000';
  let oldRegistry = { sites: [] };

  if (before && before !== zeroSha) {
    try {
      oldRegistry = JSON.parse(gitOutput(`git show ${before}:sites.registry.json`));
    } catch {
      // Parent commit missing registry file
    }
  }

  const changedDirs = [];

  for (const site of registry.sites) {
    const oldSite = oldRegistry.sites?.find((s) => s.dir === site.dir);
    if (!oldSite || JSON.stringify(oldSite) !== JSON.stringify(site)) {
      if (siteDirs.includes(site.dir)) {
        changedDirs.push(site.dir);
      }
    }
  }

  return changedDirs;
}

const changedFiles = listChangedFiles();
const changedSites = new Set();

for (const file of changedFiles) {
  for (const dir of siteDirs) {
    if (file === dir || file.startsWith(`${dir}/`)) {
      changedSites.add(dir);
    }
  }
}

for (const dir of dirsWithRegistryEntryChanges(changedFiles)) {
  changedSites.add(dir);
}

const result = [...changedSites].sort();

if (jsonMode) {
  console.log(JSON.stringify(result));
} else {
  for (const dir of result) {
    console.log(dir);
  }
}

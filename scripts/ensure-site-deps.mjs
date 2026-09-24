#!/usr/bin/env node
/**
 * Install each registry site's dependencies when typescript/tsc is missing.
 *   node scripts/ensure-site-deps.mjs
 *   node scripts/ensure-site-deps.mjs paintcalculator
 */
import { spawn } from 'node:child_process';
import { ensureSiteDeps, siteDir } from './lib/site-deps.mjs';
import { loadRegistryDirs } from './lib/shell-contracts.mjs';

function runCommand(command, commandArgs, cwd, timeoutMs = 15 * 60_000) {
  return new Promise((resolve) => {
    const startedAt = Date.now();
    const child = spawn(command, commandArgs, {
      cwd,
      env: { ...process.env, CI: 'true' },
      stdio: ['ignore', 'pipe', 'pipe'],
    });
    let output = '';
    const append = (chunk) => {
      output += chunk.toString();
      process.stdout.write(chunk);
    };
    child.stdout.on('data', append);
    child.stderr.on('data', append);
    const timeout = setTimeout(() => child.kill('SIGTERM'), timeoutMs);
    child.on('close', (code) => {
      clearTimeout(timeout);
      resolve({ ok: code === 0, output, durationMs: Date.now() - startedAt });
    });
  });
}

const requested = process.argv[2];
const dirs = requested ? [requested] : await loadRegistryDirs();
let failed = 0;
for (const dir of dirs) {
  process.stdout.write(`\n=== ${dir} (${siteDir(dir)}) ===\n`);
  const result = await ensureSiteDeps(dir, runCommand);
  if (result.skipped) console.log('already installed');
  if (!result.ok) {
    failed += 1;
    console.error(`FAIL  ${dir}: npm ci did not succeed`);
  } else if (!result.skipped) {
    console.log(`PASS  ${dir}: installed`);
  }
}

if (failed) {
  console.error(`\n${failed} site(s) failed to install.`);
  process.exit(1);
}
console.log(`\n${dirs.length} site(s) ready for typecheck/build.`);

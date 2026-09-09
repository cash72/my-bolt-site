#!/usr/bin/env node
/**
 * Offline shell contracts (no crawl, no deploy).
 *   node scripts/check-shell-contracts.mjs
 *   node scripts/check-shell-contracts.mjs paintcalculator
 */
import { checkAllShellContracts, checkSiteShellContracts, loadRegistryDirs } from './lib/shell-contracts.mjs';

const requested = process.argv[2];

const dirs = requested ? [requested] : await loadRegistryDirs();
const results = requested
  ? [await checkSiteShellContracts(requested)]
  : await checkAllShellContracts(dirs);

let failed = 0;
for (const result of results) {
  if (result.ok) {
    console.log(`PASS  ${result.dir}`);
    continue;
  }
  failed += 1;
  console.log(`FAIL  ${result.dir}`);
  for (const error of result.errors) {
    console.log(`      ${error.file}: ${error.message}`);
  }
}

if (failed) {
  console.error(`\n${failed} site(s) failed shell contracts.`);
  process.exit(1);
}

console.log(`\n${results.length} site(s) passed shell contracts.`);

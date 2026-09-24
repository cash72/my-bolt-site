/**
 * Make sure a site folder can run `npm run typecheck` / `npm run build`.
 * Nightly --build used to fail 16 times (8 sites × typecheck + skipped build)
 * when only the root node_modules existed.
 */
import { access } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '../..');

export function siteDir(dir) {
  return path.join(ROOT, dir);
}

export async function siteHasLocalTsc(dir) {
  try {
    await access(path.join(ROOT, dir, 'node_modules/typescript/bin/tsc'));
    return true;
  } catch {
    return false;
  }
}

/**
 * @param {string} dir
 * @param {(command: string, args: string[], cwd: string, timeoutMs?: number) => Promise<{ ok: boolean, output: string }>} runCommand
 */
export async function ensureSiteDeps(dir, runCommand) {
  if (await siteHasLocalTsc(dir)) {
    return { ok: true, skipped: true, output: 'Site dependencies already installed' };
  }
  const result = await runCommand('npm', ['ci'], path.join(ROOT, dir), 15 * 60_000);
  return { ...result, skipped: false };
}

/**
 * Fast, offline contracts that must stay true on every site.
 * Used by CI, local deploy preflight, and the nightly health audit
 * so the same checks cannot drift apart.
 */
import { readFile, access } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '../..');

async function exists(filePath) {
  try {
    await access(filePath);
    return true;
  } catch {
    return false;
  }
}

/**
 * @param {string} dir site folder name
 * @returns {Promise<{ dir: string, ok: boolean, errors: { file: string, message: string }[] }>}
 */
export async function checkSiteShellContracts(dir) {
  const errors = [];
  const indexHtmlPath = path.join(ROOT, dir, 'index.html');
  const privacyPagePath = path.join(ROOT, dir, 'src/pages/PrivacyPage.tsx');

  if (await exists(indexHtmlPath)) {
    const indexHtml = await readFile(indexHtmlPath, 'utf8');
    if (!/<title>[^<]+<\/title>/i.test(indexHtml)) {
      errors.push({ file: `${dir}/index.html`, message: 'Missing a <title> element' });
    }
    if (/^\s*title:\s*'/m.test(indexHtml)) {
      errors.push({
        file: `${dir}/index.html`,
        message: 'Contains a TypeScript title property instead of a <title> tag',
      });
    }
  } else {
    errors.push({ file: `${dir}/index.html`, message: 'File is missing' });
  }

  if (await exists(privacyPagePath)) {
    const privacySrc = await readFile(privacyPagePath, 'utf8');
    if (!privacySrc.includes('Ads Settings') || !privacySrc.includes('aboutads.info')) {
      errors.push({
        file: `${dir}/src/pages/PrivacyPage.tsx`,
        message: 'Missing AdSense Ads Settings / aboutads disclosures',
      });
    }
  } else {
    errors.push({ file: `${dir}/src/pages/PrivacyPage.tsx`, message: 'File is missing' });
  }

  return { dir, ok: errors.length === 0, errors };
}

export async function loadRegistryDirs() {
  const registry = JSON.parse(await readFile(path.join(ROOT, 'sites.registry.json'), 'utf8'));
  return (registry.sites || []).map((site) => site.dir);
}

export async function checkAllShellContracts(dirs) {
  const results = [];
  for (const dir of dirs) {
    results.push(await checkSiteShellContracts(dir));
  }
  return results;
}

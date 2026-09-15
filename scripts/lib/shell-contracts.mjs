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

  if (dir === 'project') {
    errors.push(...(await checkSatoshiEditorialLinkContracts()));
  }

  return { dir, ok: errors.length === 0, errors };
}

/**
 * AUD/INR only ship 10k/50k/100k satoshi amount pages. Interpolating
 * `/500000-satoshi-to-${currency}` (or any amount those currencies lack)
 * is what made the nightly crawl fail.
 *
 * Amounts in HERO_MILESTONES exist for every currency; anything else must
 * go through getSatoshiAmountPath() so missing routes are not linked.
 */
const SATOSHI_HERO_MILESTONES = new Set(['10000', '50000', '100000']);

async function checkSatoshiEditorialLinkContracts() {
  const errors = [];
  const routesPath = path.join(ROOT, 'project/seo/generated-routes.json');
  const generatedEditorialPath = path.join(ROOT, 'project/src/lib/landingEditorialGenerated.ts');
  const staticEditorialPath = path.join(ROOT, 'project/src/lib/landingEditorial.ts');
  const guidesPath = path.join(ROOT, 'project/src/lib/guides.ts');

  const routes = JSON.parse(await readFile(routesPath, 'utf8'));
  const validPaths = new Set(routes.allRoutes || [...(routes.staticRoutes || []), ...(routes.landingPaths || []), ...(routes.guidePaths || [])]);

  const generatedSrc = await readFile(generatedEditorialPath, 'utf8');
  for (const match of generatedSrc.matchAll(/\/(\d+)-satoshi-to-\$\{currency\}/g)) {
    if (!SATOSHI_HERO_MILESTONES.has(match[1])) {
      errors.push({
        file: 'project/src/lib/landingEditorialGenerated.ts',
        message: `Interpolated /${match[1]}-satoshi-to-\${currency} is not a page for every currency (AUD/INR omit 500k and similar). Link through getSatoshiAmountPath() instead.`,
      });
    }
  }

  const markdownFiles = [
    { file: 'project/src/lib/landingEditorialGenerated.ts', src: generatedSrc },
    { file: 'project/src/lib/landingEditorial.ts', src: await readFile(staticEditorialPath, 'utf8') },
    { file: 'project/src/lib/guides.ts', src: await readFile(guidesPath, 'utf8') },
  ];

  for (const { file, src } of markdownFiles) {
    for (const match of src.matchAll(/\]\((\/[^)]+)\)/g)) {
      const href = match[1].split('#')[0].split('?')[0];
      if (href.includes('${')) continue;
      const normalized = href.length > 1 && href.endsWith('/') ? href.slice(0, -1) : href;
      if (!validPaths.has(normalized)) {
        errors.push({
          file,
          message: `Internal markdown link ${href} is not a generated Satoshi route`,
        });
      }
    }
  }

  return errors;
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

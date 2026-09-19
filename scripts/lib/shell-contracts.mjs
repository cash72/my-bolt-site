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

  errors.push(...(await checkEditorialMarkdownLinkContracts(dir)));
  if (dir === 'project') {
    errors.push(...(await checkSatoshiInterpolatedLinkContracts()));
  }

  return { dir, ok: errors.length === 0, errors };
}

const EDITORIAL_MARKDOWN_FILES = [
  'src/lib/landingEditorial.ts',
  'src/lib/landingEditorialGenerated.ts',
  'src/lib/guides.ts',
  'src/lib/guides/guides.ts',
  'src/lib/tools/tools.ts',
];

/**
 * AUD/INR only ship 10k/50k/100k satoshi amount pages. Interpolating
 * `/500000-satoshi-to-${currency}` (or any amount those currencies lack)
 * is what made the nightly crawl fail.
 *
 * Amounts in HERO_MILESTONES exist for every currency; anything else must
 * go through getSatoshiAmountPath() so missing routes are not linked.
 */
const SATOSHI_HERO_MILESTONES = new Set(['10000', '50000', '100000']);

async function checkEditorialMarkdownLinkContracts(dir) {
  const errors = [];
  const routesPath = path.join(ROOT, dir, 'seo/generated-routes.json');
  if (!(await exists(routesPath))) return errors;

  const routes = JSON.parse(await readFile(routesPath, 'utf8'));
  const validPaths = new Set(
    routes.allRoutes || [
      ...(routes.staticRoutes || []),
      ...(routes.landingPaths || []),
      ...(routes.guidePaths || []),
    ],
  );

  for (const rel of EDITORIAL_MARKDOWN_FILES) {
    const filePath = path.join(ROOT, dir, rel);
    if (!(await exists(filePath))) continue;
    const src = await readFile(filePath, 'utf8');
    for (const match of src.matchAll(/\]\((\/[^)]+)\)/g)) {
      const href = match[1].split('#')[0].split('?')[0];
      if (href.includes('${') || href === '/path') continue;
      const normalized = href.length > 1 && href.endsWith('/') ? href.slice(0, -1) : href;
      if (!validPaths.has(normalized)) {
        errors.push({
          file: `${dir}/${rel}`,
          message: `Internal markdown link ${href} is not a generated route`,
        });
      }
    }
  }

  return errors;
}

async function checkSatoshiInterpolatedLinkContracts() {
  const errors = [];
  const generatedEditorialPath = path.join(ROOT, 'project/src/lib/landingEditorialGenerated.ts');
  const generatedSrc = await readFile(generatedEditorialPath, 'utf8');

  for (const match of generatedSrc.matchAll(/\/(\d+)-satoshi-to-\$\{currency\}/g)) {
    if (!SATOSHI_HERO_MILESTONES.has(match[1])) {
      errors.push({
        file: 'project/src/lib/landingEditorialGenerated.ts',
        message: `Interpolated /${match[1]}-satoshi-to-\${currency} is not a page for every currency (AUD/INR omit 500k and similar). Link through getSatoshiAmountPath() instead.`,
      });
    }
  }

  if (/-\$\{slugName\}-in-satoshi/.test(generatedSrc)) {
    errors.push({
      file: 'project/src/lib/landingEditorialGenerated.ts',
      message:
        'Interpolated /${amount}-${slugName}-in-satoshi is not a page for every currency (AUD/INR omit fiat amount landings). Link through getFiatToSatoshiAmountPath() instead.',
    });
  }

  const redirectsSrc = await readFile(path.join(ROOT, 'project/public/_redirects'), 'utf8');
  for (const currency of ['aud', 'inr']) {
    const from = `/500000-satoshi-to-${currency}`;
    const to = `/satoshi-to-${currency}/`;
    if (!redirectsSrc.includes(`${from} ${to} 301`) || !redirectsSrc.includes(`${from}/ ${to} 301`)) {
      errors.push({
        file: 'project/public/_redirects',
        message: `Missing 301 from ghost ${from} to ${to} (AUD/INR never shipped a 500k page)`,
      });
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

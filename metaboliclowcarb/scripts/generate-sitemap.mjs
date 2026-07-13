import fs from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, '..');
const SITE_URL = 'https://metaboliclowcarb.com';
const TODAY = new Date().toISOString().slice(0, 10);

const STATIC_ROUTES = [
  { path: '/', changefreq: 'weekly', priority: '1.0' },
  { path: '/recipes', changefreq: 'weekly', priority: '0.85' },
  { path: '/guides', changefreq: 'weekly', priority: '0.88' },
  { path: '/about', changefreq: 'monthly', priority: '0.6' },
  { path: '/contact', changefreq: 'monthly', priority: '0.5' },
  { path: '/privacy', changefreq: 'yearly', priority: '0.3' },
  { path: '/disclaimer', changefreq: 'yearly', priority: '0.3' },
];

/** Keep in sync with src/lib/landingPages.ts slugs */
const landingSrc = await fs.readFile(path.join(ROOT, 'src/lib/landingPages.ts'), 'utf8');
const LANDING_SLUGS = [...landingSrc.matchAll(/^\s+slug: '([^']+)',/gm)].map((m) => m[1]);

/** Auto-synced from src/lib/guides/guides.ts slug fields */
const guidesSrc = await fs.readFile(path.join(ROOT, 'src/lib/guides/guides.ts'), 'utf8');
const GUIDE_SLUGS = [...guidesSrc.matchAll(/^\s+slug: '([^']+)',/gm)].map((m) => m[1]);
const recipesSrc = await fs.readFile(path.join(ROOT, 'src/lib/recipes/recipes.ts'), 'utf8');
const RECIPE_SLUGS = [...recipesSrc.matchAll(/^\s+slug: '([^']+)',/gm)].map((m) => m[1]);

function toSitemapLoc(routePath) {
  if (routePath === '/') return `${SITE_URL}/`;
  const p = routePath.startsWith('/') ? routePath : `/${routePath}`;
  return `${SITE_URL}${p.endsWith('/') ? p : `${p}/`}`;
}

function urlEntry(loc, changefreq, priority) {
  return `  <url>
    <loc>${loc}</loc>
    <lastmod>${TODAY}</lastmod>
    <changefreq>${changefreq}</changefreq>
    <priority>${priority}</priority>
  </url>`;
}

const landingPaths = LANDING_SLUGS.map((slug) => `/${slug}`);
const guidePaths = GUIDE_SLUGS.map((slug) => `/guides/${slug}`);
const recipePaths = RECIPE_SLUGS.map((slug) => `/recipes/${slug}`);

const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${STATIC_ROUTES.map((route) =>
  urlEntry(toSitemapLoc(route.path), route.changefreq, route.priority)
).join('\n')}
${landingPaths.map((p) => urlEntry(toSitemapLoc(p), 'weekly', '0.9')).join('\n')}
${guidePaths.map((p) => urlEntry(toSitemapLoc(p), 'monthly', '0.85')).join('\n')}
${recipePaths.map((p) => urlEntry(toSitemapLoc(p), 'monthly', '0.75')).join('\n')}
</urlset>
`;

const allRoutes = [
  ...STATIC_ROUTES.map((r) => r.path),
  ...landingPaths,
  ...guidePaths,
  ...recipePaths,
];

const redirectPaths = allRoutes.filter((r) => r !== '/');
const redirects = redirectPaths.map((route) => `${route} ${route}/ 308`).join('\n');
await fs.writeFile(path.join(ROOT, 'public/_redirects'), `${redirects}\n`);

await fs.writeFile(path.join(ROOT, 'public/sitemap.xml'), sitemap);
await fs.mkdir(path.join(ROOT, 'seo'), { recursive: true });
await fs.writeFile(
  path.join(ROOT, 'seo/generated-routes.json'),
  JSON.stringify({ allRoutes, landingPaths, guidePaths, recipePaths }, null, 2)
);

console.log(`Sitemap: ${allRoutes.length} URLs -> public/sitemap.xml`);
console.log(`Redirects: ${redirectPaths.length} (non-slash → trailing slash)`);

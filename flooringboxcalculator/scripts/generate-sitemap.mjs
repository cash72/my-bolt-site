import fs from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, '..');
const SITE_URL = 'https://flooringboxcalculator.com';
const TODAY = new Date().toISOString().slice(0, 10);

const STATIC_ROUTES = [
  { path: '/', changefreq: 'weekly', priority: '1.0' },
  { path: '/guides', changefreq: 'weekly', priority: '0.9' },
  { path: '/about', changefreq: 'monthly', priority: '0.6' },
  { path: '/contact', changefreq: 'monthly', priority: '0.5' },
  { path: '/privacy', changefreq: 'yearly', priority: '0.3' },
  { path: '/disclaimer', changefreq: 'yearly', priority: '0.3' },
];

/** Keep in sync with src/lib/landingPages.ts slugs */
const LANDING_SLUGS = [
  'laminate-flooring-calculator',
  'vinyl-plank-calculator',
  'flooring-square-footage-calculator',
  'tile-flooring-calculator',
  'flooring-waste-calculator',
  'how-many-flooring-boxes',
  'square-yard-calculator',
  'carpet-calculator',
  'how-many-tiles-do-i-need',
  'stair-carpet-calculator',
];

const GUIDE_SLUGS = [
  'how-to-measure-rooms-for-flooring',
  'how-to-prep-subfloor-before-installing-flooring',
  'how-to-remove-old-flooring',
  'flooring-acclimation-before-install',
  'flooring-transition-strips-and-trim',
  'how-much-flooring-waste-to-buy',
  'how-many-flooring-boxes-guide',
  'laminate-vs-tile-vs-carpet-comparison',
  'do-i-need-underlay-for-laminate',
  'how-to-install-laminate-flooring-beginners',
  'how-to-choose-laminate-flooring',
  'laminate-vs-vinyl-plank-which-to-buy',
  'tile-underlayment-membrane-guide',
  'how-to-prep-for-tile-floor',
  'how-to-choose-floor-tile',
  'large-format-tile-tips',
  'carpet-pad-guide',
  'how-to-choose-carpet-for-rooms',
];

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

const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${STATIC_ROUTES.map((route) =>
  urlEntry(toSitemapLoc(route.path), route.changefreq, route.priority)
).join('\n')}
${landingPaths.map((p) => urlEntry(toSitemapLoc(p), 'weekly', '0.9')).join('\n')}
${guidePaths.map((p) => urlEntry(toSitemapLoc(p), 'monthly', '0.8')).join('\n')}
</urlset>
`;

const allRoutes = [
  ...STATIC_ROUTES.map((r) => r.path),
  ...landingPaths,
  ...guidePaths,
];

const redirectPaths = allRoutes.filter((r) => r !== '/');
const redirects = redirectPaths.map((route) => `${route} ${route}/ 308`).join('\n');
await fs.writeFile(path.join(ROOT, 'public/_redirects'), `${redirects}\n`);

await fs.writeFile(path.join(ROOT, 'public/sitemap.xml'), sitemap);
await fs.mkdir(path.join(ROOT, 'seo'), { recursive: true });
await fs.writeFile(
  path.join(ROOT, 'seo/generated-routes.json'),
  JSON.stringify({ allRoutes, landingPaths, guidePaths }, null, 2)
);

console.log(`Sitemap: ${allRoutes.length} URLs -> public/sitemap.xml`);
console.log(`Redirects: ${redirectPaths.length} (non-slash → trailing slash)`);

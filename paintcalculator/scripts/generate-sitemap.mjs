import fs from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, '..');
const SITE_URL = 'https://paint-calculator.ca';
const TODAY = new Date().toISOString().slice(0, 10);

const STATIC_ROUTES = [
  { path: '/', changefreq: 'weekly', priority: '1.0' },
  { path: '/guides', changefreq: 'weekly', priority: '0.88' },
  { path: '/about', changefreq: 'monthly', priority: '0.6' },
  { path: '/contact', changefreq: 'monthly', priority: '0.5' },
  { path: '/privacy', changefreq: 'yearly', priority: '0.3' },
  { path: '/disclaimer', changefreq: 'yearly', priority: '0.3' },
];

const LANDING_SLUGS = [
  'room-paint-calculator',
  'how-much-paint-do-i-need',
  'paint-coverage-calculator',
  'interior-paint-calculator',
  'fence-stain-calculator',
  'exterior-house-stain-calculator',
  'deck-stain-calculator',
  'wallpaper-calculator',
  'how-many-rolls-of-wallpaper',
  'accent-wall-wallpaper-calculator',
  'exterior-paint-calculator',
  'ceiling-paint-calculator',
  'paint-cost-estimator',
];

/** Keep in sync with src/lib/guides/guides.ts */
const GUIDE_SLUGS = [
  'primer-before-painting',
  'how-to-repair-walls-before-painting',
  'how-to-patch-drywall-holes',
  'how-to-prep-walls-for-painting',
  'how-to-paint-a-room-step-by-step',
  'painting-over-dark-colors',
  'how-to-fix-peeling-paint',
  'how-to-remove-wallpaper-before-painting',
  'interior-paint-sheen-guide',
  'how-much-paint-for-a-room',
  'how-many-coats-of-paint',
  'paint-coverage-per-gallon',
  'how-to-estimate-wallpaper-rolls',
  'wallpaper-pattern-repeat',
  'accent-wall-wallpaper-tips',
  'how-much-fence-stain-do-i-need',
  'deck-stain-coverage',
  'exterior-stain-two-coats',
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
${guidePaths.map((p) => urlEntry(toSitemapLoc(p), 'monthly', '0.85')).join('\n')}
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

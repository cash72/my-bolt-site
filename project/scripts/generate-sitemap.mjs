import fs from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, '..');
const SITE_URL = 'https://satoshi-calc.com';
const TODAY = new Date().toISOString().slice(0, 10);

const STATIC_ROUTES = [
  { path: '/', changefreq: 'hourly', priority: '1.0' },
  { path: '/conversions', changefreq: 'weekly', priority: '0.85' },
  { path: '/guides', changefreq: 'weekly', priority: '0.85' },
  { path: '/about', changefreq: 'monthly', priority: '0.6' },
  { path: '/contact', changefreq: 'monthly', priority: '0.5' },
  { path: '/privacy', changefreq: 'yearly', priority: '0.3' },
  { path: '/disclaimer', changefreq: 'yearly', priority: '0.3' },
];

const GUIDE_SLUGS = [
  'what-is-a-satoshi',
  'how-many-satoshis-in-a-bitcoin',
  'usd-to-satoshi',
  'how-to-store-bitcoin-safely',
  'bitcoin-self-custody-basics',
  'run-your-own-bitcoin-node',
];

const CURRENCIES = ['usd', 'eur', 'gbp', 'cad'];
const SATOSHI_AMOUNTS = [1, 10, 100, 1000, 10000, 100000, 1000000];
const FIAT_AMOUNTS = [1, 10, 100, 1000];

const FIAT_SLUG_NAMES = {
  usd: 'dollars',
  eur: 'euros',
  gbp: 'pounds',
  cad: 'cad',
};

function buildLandingPaths() {
  const paths = [];

  for (const currency of CURRENCIES) {
    paths.push(`/satoshi-to-${currency}`);
  }

  for (const currency of CURRENCIES) {
    for (const amount of SATOSHI_AMOUNTS) {
      paths.push(`/${amount}-satoshi-to-${currency}`);
    }
  }

  for (const currency of CURRENCIES) {
    paths.push(`/${currency}-to-satoshi`);
  }

  for (const currency of CURRENCIES) {
    for (const amount of FIAT_AMOUNTS) {
      paths.push(`/${amount}-${FIAT_SLUG_NAMES[currency]}-in-satoshi`);
    }
  }

  return paths;
}

function urlEntry(loc, changefreq, priority) {
  return `  <url>
    <loc>${loc}</loc>
    <lastmod>${TODAY}</lastmod>
    <changefreq>${changefreq}</changefreq>
    <priority>${priority}</priority>
  </url>`;
}

const landingPaths = buildLandingPaths();
const guidePaths = GUIDE_SLUGS.map((slug) => `/guides/${slug}`);

const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${STATIC_ROUTES.map((route) => urlEntry(`${SITE_URL}${route.path === '/' ? '/' : route.path}`, route.changefreq, route.priority)).join('\n')}
${landingPaths.map((route) => urlEntry(`${SITE_URL}${route}`, 'daily', '0.8')).join('\n')}
${guidePaths.map((route) => urlEntry(`${SITE_URL}${route}`, 'weekly', '0.75')).join('\n')}
</urlset>
`;

const seoConfig = {
  staticRoutes: STATIC_ROUTES.map((r) => r.path),
  landingPaths,
  guidePaths,
  allRoutes: [...STATIC_ROUTES.map((r) => r.path), ...landingPaths, ...guidePaths],
};

await fs.writeFile(path.join(ROOT, 'public/sitemap.xml'), sitemap);
await fs.writeFile(path.join(ROOT, 'seo/generated-routes.json'), JSON.stringify(seoConfig, null, 2));

console.log(`Generated sitemap with ${seoConfig.allRoutes.length} URLs`);
console.log(`  Static: ${seoConfig.staticRoutes.length}`);
console.log(`  Landing: ${landingPaths.length}`);
console.log(`  Guides: ${guidePaths.length}`);

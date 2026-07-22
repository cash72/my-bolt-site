import fs from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, '..');
const SITE_URL = 'https://landscapetoolsguide.com';
const TODAY = new Date().toISOString().slice(0, 10);

const STATIC_ROUTES = [
  { path: '/', changefreq: 'weekly', priority: '1.0' },
  { path: '/tools', changefreq: 'weekly', priority: '0.95' },
  { path: '/pricing', changefreq: 'weekly', priority: '0.93' },
  { path: '/compare', changefreq: 'weekly', priority: '0.9' },
  { path: '/guides', changefreq: 'weekly', priority: '0.88' },
  { path: '/about', changefreq: 'monthly', priority: '0.5' },
  { path: '/contact', changefreq: 'monthly', priority: '0.4' },
  { path: '/privacy', changefreq: 'yearly', priority: '0.3' },
  { path: '/disclaimer', changefreq: 'yearly', priority: '0.3' },
];

/** Keep in sync with src/lib/tools/tools.ts */
const TOOL_SLUGS = [
  'jobber',
  'housecall-pro',
  'lmn',
  'service-autopilot',
  'aspire',
  'gorilladesk',
  'fieldpulse',
  'singleops',
];

const COMPARISON_SLUGS = [
  'jobber-vs-housecall-pro-landscaping',
  'lmn-vs-jobber-landscaping',
  'jobber-vs-gorilladesk-landscaping',
  'housecall-pro-vs-service-autopilot-landscaping',
  'aspire-vs-lmn-landscaping',
];

const ALTERNATIVES_SLUGS = ['jobber-alternatives-landscaping', 'housecall-pro-alternatives'];

const BEST_SLUGS = ['best-software-solo-landscaper', 'best-lawn-care-route-software'];

const GUIDE_SLUGS = [
  'how-to-choose-lawn-care-software',
  'landscaping-software-pricing-guide',
  'when-to-upgrade-to-lmn',
  'route-optimization-lawn-care-software',
  'quickbooks-integration-landscape-software',
  'mobile-app-landscape-crew-management',
  'recurring-billing-lawn-care-software',
  'design-build-estimating-software-landscape',
  'lawn-treatment-chemical-tracking',
  'solo-landscaper-software-checklist',
  'migrating-landscape-business-software',
  'field-service-software-evaluation-checklist',
  'snow-removal-billing-software',
  'job-costing-landscape-install-projects',
  'customer-portal-lawn-care-software',
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

const toolPaths = TOOL_SLUGS.map((slug) => `/tools/${slug}`);
const comparePaths = COMPARISON_SLUGS.map((slug) => `/compare/${slug}`);
const alternativesPaths = ALTERNATIVES_SLUGS.map((slug) => `/alternatives/${slug}`);
const bestPaths = BEST_SLUGS.map((slug) => `/best/${slug}`);
const guidePaths = GUIDE_SLUGS.map((slug) => `/guides/${slug}`);

const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${STATIC_ROUTES.map((route) =>
  urlEntry(toSitemapLoc(route.path), route.changefreq, route.priority)
).join('\n')}
${toolPaths.map((p) => urlEntry(toSitemapLoc(p), 'monthly', '0.92')).join('\n')}
${comparePaths.map((p) => urlEntry(toSitemapLoc(p), 'monthly', '0.9')).join('\n')}
${alternativesPaths.map((p) => urlEntry(toSitemapLoc(p), 'monthly', '0.88')).join('\n')}
${bestPaths.map((p) => urlEntry(toSitemapLoc(p), 'monthly', '0.88')).join('\n')}
${guidePaths.map((p) => urlEntry(toSitemapLoc(p), 'monthly', '0.85')).join('\n')}
</urlset>
`;

const allRoutes = [
  ...STATIC_ROUTES.map((r) => r.path),
  ...toolPaths,
  ...comparePaths,
  ...alternativesPaths,
  ...bestPaths,
  ...guidePaths,
];

const redirectPaths = allRoutes.filter((r) => r !== '/');
const redirects = redirectPaths.map((route) => `${route} ${route}/ 308`).join('\n');
await fs.writeFile(path.join(ROOT, 'public/_redirects'), `${redirects}\n`);

await fs.writeFile(path.join(ROOT, 'public/sitemap.xml'), sitemap);
await fs.mkdir(path.join(ROOT, 'seo'), { recursive: true });
await fs.writeFile(
  path.join(ROOT, 'seo/generated-routes.json'),
  JSON.stringify(
    { allRoutes, toolPaths, comparePaths, alternativesPaths, bestPaths, guidePaths },
    null,
    2
  )
);

console.log(`Sitemap: ${allRoutes.length} URLs -> public/sitemap.xml`);
console.log(`Redirects: ${redirectPaths.length} (non-slash → trailing slash)`);

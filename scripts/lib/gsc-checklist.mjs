/**
 * Google Search Console checklist data — P0 URLs to request indexing after deploy.
 * Paths use trailing-slash canonical form (matches Cloudflare _redirects).
 */

export const GSC_SETUP_STEPS = [
  'Add each domain as a Search Console property (Domain property recommended).',
  'Verify via DNS TXT (Cloudflare DNS) or HTML tag if not already verified.',
  'Submit sitemap: https://{domain}/sitemap.xml (Sitemaps → Add new sitemap).',
  'For each P0 URL below: URL Inspection → paste URL → Request indexing.',
  'Optional: add the same domains in Bing Webmaster Tools and submit sitemaps.',
  'After 7–14 days: check Performance → Queries for impressions; expand content on winners.',
];

/** @type {Record<string, { label: string; paths: { path: string; note?: string; isNew?: boolean }[] }>} */
export const P0_INDEX_BY_DIR = {
  drywallcalculator: {
    label: 'Drywall Calculator',
    paths: [
      { path: '/drywall-calculator/' },
      { path: '/how-many-drywall-sheets/' },
      { path: '/basement-drywall-calculator/', isNew: true },
      { path: '/garage-drywall-calculator/', isNew: true },
      { path: '/guides/drywall-project-from-framing-to-paint/', isNew: true },
      { path: '/guides/priming-new-drywall-before-paint/', isNew: true },
      { path: '/guides/how-much-drywall-for-a-room/' },
    ],
  },
  mulchcalculator: {
    label: 'Mulch Calculators',
    paths: [
      { path: '/mulch-calculator/' },
      { path: '/cubic-yards-calculator/' },
      { path: '/playground-mulch-calculator/', isNew: true },
      { path: '/topsoil-calculator/', isNew: true },
      { path: '/stone-mulch-calculator/', isNew: true },
      { path: '/guides/mulch-bed-project-from-scratch/', isNew: true },
      { path: '/guides/how-to-spread-mulch-evenly/', isNew: true },
      { path: '/guides/how-much-mulch-do-i-need/' },
    ],
  },
  hvaccalculator: {
    label: 'HVAC Calculators',
    paths: [
      { path: '/btu-calculator/' },
      { path: '/mini-split-for-rv/' },
      { path: '/window-ac-calculator/', isNew: true },
      { path: '/garage-heater-btu-calculator/', isNew: true },
      { path: '/whole-house-btu-calculator/', isNew: true },
      { path: '/guides/diy-mini-split-project-roadmap/', isNew: true },
      { path: '/guides/mini-split-electrical-requirements/', isNew: true },
      { path: '/guides/how-to-install-window-ac-safely/', isNew: true },
      { path: '/guides/btu-per-square-foot-explained/' },
    ],
  },
  flooringboxcalculator: {
    label: 'Flooring Box Calculator',
    paths: [
      { path: '/how-many-flooring-boxes/' },
      { path: '/laminate-flooring-calculator/' },
      { path: '/stair-carpet-calculator/', isNew: true },
      { path: '/guides/diy-flooring-installation-roadmap/', isNew: true },
      { path: '/guides/first-row-laminate-flooring-layout/', isNew: true },
      { path: '/guides/how-many-flooring-boxes-guide/' },
    ],
  },
  paintcalculator: {
    label: 'Paint Calculator (CA)',
    paths: [
      { path: '/how-much-paint-do-i-need/' },
      { path: '/paint-coverage-calculator/' },
      { path: '/exterior-paint-calculator/', isNew: true },
      { path: '/ceiling-paint-calculator/', isNew: true },
      { path: '/paint-cost-estimator/', isNew: true },
      { path: '/guides/interior-painting-project-guide/', isNew: true },
      { path: '/guides/identify-oil-vs-latex-paint-on-walls/', isNew: true },
      { path: '/guides/how-much-paint-for-a-room/' },
    ],
  },
  landscapetoolsguide: {
    label: 'Landscape Tools Guide',
    paths: [
      { path: '/compare/jobber-vs-housecall-pro-landscaping/' },
      { path: '/compare/lmn-vs-jobber-landscaping/' },
      { path: '/compare/jobber-vs-gorilladesk-landscaping/', isNew: true },
      { path: '/compare/housecall-pro-vs-service-autopilot-landscaping/', isNew: true },
      { path: '/compare/aspire-vs-lmn-landscaping/', isNew: true },
      { path: '/best/best-software-solo-landscaper/' },
    ],
  },
  metaboliclowcarb: {
    label: 'Metabolic Low Carb',
    paths: [
      { path: '/net-carb-calculator/' },
      { path: '/keto-macro-calculator/' },
      { path: '/weight-loss-macro-calculator/', isNew: true },
      { path: '/diabetes-macro-calculator/', isNew: true },
      { path: '/guides/net-carbs-for-insulin-resistance/' },
    ],
  },
  project: {
    label: 'Satoshi Calc',
    paths: [
      { path: '/' },
      { path: '/100000-satoshi-to-usd/' },
      { path: '/500-satoshi-to-usd/', isNew: true },
      { path: '/5000-satoshi-to-usd/', isNew: true },
      { path: '/guides/what-is-a-satoshi/' },
    ],
  },
};

export function gscResourceId(domain) {
  return `sc-domain:${domain}`;
}

export function gscResourceParam(domain) {
  return encodeURIComponent(gscResourceId(domain));
}

export function gscPropertyWelcomeUrl(domain) {
  return `https://search.google.com/search-console/welcome?resource_id=${gscResourceParam(domain)}`;
}

export function gscSitemapsUrl(domain) {
  return `https://search.google.com/search-console/sitemaps?resource_id=${gscResourceParam(domain)}`;
}

export function gscInspectUrl(siteUrl, path) {
  const full = `${siteUrl.replace(/\/$/, '')}${path.startsWith('/') ? path : `/${path}`}`;
  const resource = gscResourceParam(new URL(siteUrl).hostname);
  return `https://search.google.com/search-console/inspect?resource_id=${resource}&url=${encodeURIComponent(full)}`;
}

export function bingWebmasterUrl() {
  return 'https://www.bing.com/webmasters/';
}

export function absoluteUrl(siteUrl, path) {
  return `${siteUrl.replace(/\/$/, '')}${path.startsWith('/') ? path : `/${path}`}`;
}

export function getP0ForDir(dir) {
  return P0_INDEX_BY_DIR[dir] ?? { label: dir, paths: [{ path: '/' }] };
}

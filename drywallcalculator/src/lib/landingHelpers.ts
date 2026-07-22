import { getGuideBySlug } from './guides/guides';
import type { Guide } from './guides/types';
import { LANDING_PAGES, type LandingPage } from './landingPages';

export const FEATURED_HOME_GUIDES = [
  'drywall-project-from-framing-to-paint',
  'drywall-tools-for-hanging-and-finishing',
  'drywall-sanding-tips-dust-control',
  'priming-new-drywall-before-paint',
] as const;

export function getGuidesForLanding(page: LandingPage): Guide[] {
  if (page.slug === 'drywall-for-ceiling-calculator') {
    return ['hanging-drywall-on-ceiling', 'how-much-drywall-waste-to-add', 'half-inch-vs-five-eighth-drywall']
      .map((slug) => getGuideBySlug(slug))
      .filter((g): g is Guide => g !== undefined);
  }
  if (page.slug === 'how-many-drywall-sheets') {
    return ['drywall-sheet-sizes-explained', 'estimating-drywall-screws-and-compound', 'how-much-drywall-waste-to-add']
      .map((slug) => getGuideBySlug(slug))
      .filter((g): g is Guide => g !== undefined);
  }
  if (page.slug === 'basement-drywall-calculator') {
    return ['drywall-for-basement-renovation', 'how-much-drywall-for-a-room', 'half-inch-vs-five-eighth-drywall']
      .map((slug) => getGuideBySlug(slug))
      .filter((g): g is Guide => g !== undefined);
  }
  if (page.slug === 'garage-drywall-calculator') {
    return ['how-much-drywall-for-a-room', 'how-much-drywall-waste-to-add', 'drywall-screw-spacing-and-pattern']
      .map((slug) => getGuideBySlug(slug))
      .filter((g): g is Guide => g !== undefined);
  }
  if (page.slug === 'drywall-cost-estimator') {
    return ['estimating-drywall-screws-and-compound', 'how-much-drywall-for-a-room', 'drywall-project-from-framing-to-paint']
      .map((slug) => getGuideBySlug(slug))
      .filter((g): g is Guide => g !== undefined);
  }
  return [
    'drywall-project-from-framing-to-paint',
    'how-much-drywall-for-a-room',
    'drywall-tools-for-hanging-and-finishing',
    'how-to-hang-drywall-step-by-step',
  ]
    .map((slug) => getGuideBySlug(slug))
    .filter((g): g is Guide => g !== undefined);
}

const P0_CROSS_LINK_SLUGS: Partial<Record<string, string[]>> = {
  'drywall-calculator': ['drywall-cost-estimator', 'how-many-drywall-sheets'],
  'drywall-cost-estimator': ['drywall-calculator', 'how-many-drywall-sheets'],
  'how-many-drywall-sheets': ['drywall-calculator', 'drywall-cost-estimator'],
  'drywall-for-ceiling-calculator': ['drywall-calculator', 'drywall-cost-estimator'],
  'basement-drywall-calculator': ['drywall-calculator', 'drywall-cost-estimator'],
  'garage-drywall-calculator': ['drywall-calculator', 'drywall-cost-estimator'],
};

export function getRelatedLandingPages(page: LandingPage, limit = 4): LandingPage[] {
  const p0Slugs = P0_CROSS_LINK_SLUGS[page.slug] ?? [];
  const p0Pages = p0Slugs
    .map((slug) => LANDING_PAGES.find((p) => p.slug === slug))
    .filter((p): p is LandingPage => p !== undefined && p.slug !== page.slug);

  const rest = LANDING_PAGES.filter(
    (p) => p.slug !== page.slug && !p0Pages.some((pp) => pp.slug === p.slug)
  );

  return [...p0Pages, ...rest].slice(0, limit);
}

export function getRelatedSlugsForLanding(page: LandingPage): string[] {
  return getRelatedLandingPages(page, 3).map((p) => p.slug);
}

export function getFeaturedHomeGuides(): Guide[] {
  return FEATURED_HOME_GUIDES.map((slug) => getGuideBySlug(slug)).filter(
    (g): g is Guide => g !== undefined
  );
}

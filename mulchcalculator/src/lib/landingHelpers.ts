import { getGuideBySlug } from './guides/guides';
import type { Guide } from './guides/types';
import { LANDING_PAGES, type LandingPage } from './landingPages';

const MULCH_GUIDES = [
  'mulch-bed-project-from-scratch',
  'how-much-mulch-do-i-need',
  'how-to-spread-mulch-evenly',
  'weeding-before-mulch-how-to',
] as const;

const GRAVEL_GUIDES = [
  'how-much-gravel-for-driveway',
  'gravel-types-pea-crushed',
  'cubic-yards-mulch-explained',
] as const;

export const FEATURED_HOME_GUIDES = [
  'mulch-bed-project-from-scratch',
  'weeding-before-mulch-how-to',
  'how-to-spread-mulch-evenly',
  'how-much-mulch-do-i-need',
] as const;

export function getGuidesForLanding(page: LandingPage): Guide[] {
  if (page.slug === 'gravel-calculator') {
    return [...GRAVEL_GUIDES]
      .map((slug) => getGuideBySlug(slug))
      .filter((g): g is Guide => g !== undefined);
  }
  if (page.slug === 'cubic-yards-calculator') {
    return ['cubic-yards-mulch-explained', 'how-many-mulch-bags-per-yard', 'delivery-vs-bags-bulk-mulch']
      .map((slug) => getGuideBySlug(slug))
      .filter((g): g is Guide => g !== undefined);
  }
  if (page.slug === 'playground-mulch-calculator') {
    return ['playground-mulch-safety-standards', 'mulch-depth-how-deep', 'rubber-mulch-vs-wood-mulch']
      .map((slug) => getGuideBySlug(slug))
      .filter((g): g is Guide => g !== undefined);
  }
  if (page.slug === 'topsoil-calculator') {
    return ['topsoil-calculator-guide', 'cubic-yards-mulch-explained', 'how-much-mulch-do-i-need']
      .map((slug) => getGuideBySlug(slug))
      .filter((g): g is Guide => g !== undefined);
  }
  if (page.slug === 'stone-mulch-calculator') {
    return ['gravel-types-pea-crushed', 'mulch-vs-bark-vs-compost', 'how-much-gravel-for-driveway']
      .map((slug) => getGuideBySlug(slug))
      .filter((g): g is Guide => g !== undefined);
  }
  if (page.slug === 'mulch-cost-estimator') {
    return ['delivery-vs-bags-bulk-mulch', 'how-many-mulch-bags-per-yard', 'how-much-mulch-do-i-need']
      .map((slug) => getGuideBySlug(slug))
      .filter((g): g is Guide => g !== undefined);
  }
  if (page.slug === 'sod-calculator') {
    return ['topsoil-calculator-guide', 'cubic-yards-mulch-explained', 'how-much-mulch-do-i-need']
      .map((slug) => getGuideBySlug(slug))
      .filter((g): g is Guide => g !== undefined);
  }
  return [...MULCH_GUIDES]
    .map((slug) => getGuideBySlug(slug))
    .filter((g): g is Guide => g !== undefined);
}

const P0_CROSS_LINK_SLUGS: Partial<Record<string, string[]>> = {
  'mulch-calculator': ['mulch-cost-estimator', 'sod-calculator'],
  'mulch-cost-estimator': ['mulch-calculator', 'cubic-yards-calculator'],
  'sod-calculator': ['topsoil-calculator', 'mulch-calculator'],
  'gravel-calculator': ['mulch-calculator', 'stone-mulch-calculator'],
  'cubic-yards-calculator': ['mulch-calculator', 'mulch-cost-estimator'],
  'playground-mulch-calculator': ['mulch-calculator', 'mulch-cost-estimator'],
  'topsoil-calculator': ['sod-calculator', 'mulch-calculator'],
  'stone-mulch-calculator': ['gravel-calculator', 'mulch-calculator'],
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

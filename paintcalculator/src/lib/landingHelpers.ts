import { getGuideBySlug } from './guides/guides';
import type { Guide } from './guides/types';
import { LANDING_PAGES, type LandingPage } from './landingPages';

export function getGuidesForLanding(page: LandingPage): Guide[] {
  if (page.kind === 'wallpaper') {
    return ['how-to-estimate-wallpaper-rolls', 'wallpaper-pattern-repeat', 'accent-wall-wallpaper-tips']
      .map((slug) => getGuideBySlug(slug))
      .filter((g): g is Guide => g !== undefined);
  }

  if (
    page.kind === 'paint' &&
    (page.paintType === 'fence_stain' || page.paintType === 'deck_stain' || page.paintType === 'house_stain')
  ) {
    return ['how-much-fence-stain-do-i-need', 'deck-stain-coverage', 'exterior-stain-two-coats']
      .map((slug) => getGuideBySlug(slug))
      .filter((g): g is Guide => g !== undefined);
  }

  if (page.kind === 'paint' && page.paintType === 'exterior') {
    return ['how-much-paint-for-a-room', 'primer-before-painting', 'how-to-paint-a-room-step-by-step']
      .map((slug) => getGuideBySlug(slug))
      .filter((g): g is Guide => g !== undefined);
  }

  if (page.slug === 'ceiling-paint-calculator') {
    return ['how-much-paint-for-a-room', 'primer-before-painting', 'interior-paint-sheen-guide']
      .map((slug) => getGuideBySlug(slug))
      .filter((g): g is Guide => g !== undefined);
  }

  if (page.slug === 'cabinet-trim-paint-calculator') {
    return [
      'how-to-paint-cabinets-and-trim',
      'identify-oil-vs-latex-paint-on-walls',
      'how-to-choose-primer-interior-walls',
      'interior-paint-sheen-guide',
    ]
      .map((slug) => getGuideBySlug(slug))
      .filter((g): g is Guide => g !== undefined);
  }

  if (page.slug === 'paint-cost-estimator') {
    return ['how-much-paint-for-a-room', 'paint-coverage-calculator', 'primer-before-painting']
      .map((slug) => getGuideBySlug(slug))
      .filter((g): g is Guide => g !== undefined);
  }

  return [
    'interior-painting-project-guide',
    'identify-oil-vs-latex-paint-on-walls',
    'how-to-choose-primer-interior-walls',
    'how-to-paint-a-room-step-by-step',
  ]
    .map((slug) => getGuideBySlug(slug))
    .filter((g): g is Guide => g !== undefined);
}

const P0_CROSS_LINK_SLUGS: Partial<Record<string, string[]>> = {
  'how-much-paint-do-i-need': ['paint-coverage-calculator', 'room-paint-calculator', 'interior-paint-calculator'],
  'paint-coverage-calculator': ['how-much-paint-do-i-need', 'room-paint-calculator'],
  'room-paint-calculator': ['how-much-paint-do-i-need', 'interior-paint-calculator'],
  'interior-paint-calculator': ['how-much-paint-do-i-need', 'room-paint-calculator'],
  'wallpaper-calculator': ['how-many-rolls-of-wallpaper', 'accent-wall-wallpaper-calculator'],
  'how-many-rolls-of-wallpaper': ['wallpaper-calculator', 'accent-wall-wallpaper-calculator'],
  'fence-stain-calculator': ['deck-stain-calculator', 'exterior-house-stain-calculator'],
  'deck-stain-calculator': ['fence-stain-calculator', 'exterior-house-stain-calculator'],
  'exterior-house-stain-calculator': ['fence-stain-calculator', 'deck-stain-calculator'],
  'exterior-paint-calculator': ['how-much-paint-do-i-need', 'paint-coverage-calculator', 'interior-paint-calculator'],
  'ceiling-paint-calculator': ['how-much-paint-do-i-need', 'room-paint-calculator', 'interior-paint-calculator'],
  'paint-cost-estimator': ['how-much-paint-do-i-need', 'paint-coverage-calculator', 'room-paint-calculator'],
  'cabinet-trim-paint-calculator': [
    'how-much-paint-do-i-need',
    'interior-paint-calculator',
    'paint-cost-estimator',
  ],
};

export function getRelatedLandingPages(page: LandingPage, limit = 4): LandingPage[] {
  const p0Slugs = P0_CROSS_LINK_SLUGS[page.slug] ?? [];
  const p0Pages = p0Slugs
    .map((slug) => LANDING_PAGES.find((p) => p.slug === slug))
    .filter((p): p is LandingPage => p !== undefined && p.slug !== page.slug);

  const sameKind = LANDING_PAGES.filter(
    (p) => p.slug !== page.slug && p.kind === page.kind && !p0Pages.some((pp) => pp.slug === p.slug)
  );
  const otherKind = LANDING_PAGES.filter(
    (p) => p.slug !== page.slug && p.kind !== page.kind && !p0Pages.some((pp) => pp.slug === p.slug)
  );

  return [...p0Pages, ...sameKind, ...otherKind].slice(0, limit);
}

export const FEATURED_HOME_GUIDES = [
  'interior-painting-project-guide',
  'identify-oil-vs-latex-paint-on-walls',
  'how-to-choose-primer-interior-walls',
  'how-to-paint-a-room-step-by-step',
] as const;

export function getFeaturedHomeGuides(): Guide[] {
  return FEATURED_HOME_GUIDES.map((slug) => getGuideBySlug(slug)).filter(
    (g): g is Guide => g !== undefined
  );
}

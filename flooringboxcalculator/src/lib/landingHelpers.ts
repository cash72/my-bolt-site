import { getGuideBySlug } from './guides/guides';
import type { Guide } from './guides/types';
import { LANDING_PAGES, type LandingPage } from './landingPages';

const DEFAULT_GUIDES = [
  'diy-flooring-installation-roadmap',
  'how-to-measure-rooms-for-flooring',
  'laminate-flooring-tools-you-need',
  'how-to-install-laminate-flooring-beginners',
];

export function getGuidesForLanding(page: LandingPage): Guide[] {
  const slugs = page.relatedGuideSlugs?.length
    ? page.relatedGuideSlugs
    : DEFAULT_GUIDES;
  return slugs.map((slug) => getGuideBySlug(slug)).filter((g): g is Guide => g !== undefined);
}

const P0_CROSS_LINK_SLUGS: Partial<Record<string, string[]>> = {
  'how-many-flooring-boxes': [
    'laminate-flooring-calculator',
    'flooring-waste-calculator',
    'tile-flooring-calculator',
  ],
  'laminate-flooring-calculator': ['how-many-flooring-boxes', 'vinyl-plank-calculator'],
  'vinyl-plank-calculator': ['laminate-flooring-calculator', 'how-many-flooring-boxes'],
  'tile-flooring-calculator': ['how-many-tiles-do-i-need', 'how-many-flooring-boxes'],
  'how-many-tiles-do-i-need': ['tile-flooring-calculator', 'flooring-waste-calculator'],
  'carpet-calculator': ['flooring-square-footage-calculator', 'how-many-flooring-boxes'],
  'flooring-waste-calculator': ['how-many-flooring-boxes', 'laminate-flooring-calculator'],
  'flooring-square-footage-calculator': ['how-many-flooring-boxes', 'carpet-calculator'],
  'stair-carpet-calculator': ['carpet-calculator', 'square-yard-calculator', 'how-to-choose-carpet-for-rooms'],
};

export function getRelatedLandingPages(page: LandingPage, limit = 4): LandingPage[] {
  const p0Slugs = P0_CROSS_LINK_SLUGS[page.slug] ?? [];
  const p0Pages = p0Slugs
    .map((slug) => LANDING_PAGES.find((p) => p.slug === slug))
    .filter((p): p is LandingPage => p !== undefined && p.slug !== page.slug);

  const sameMaterial = LANDING_PAGES.filter(
    (p) =>
      p.slug !== page.slug &&
      p.material === page.material &&
      !p0Pages.some((pp) => pp.slug === p.slug)
  );
  const otherMaterial = LANDING_PAGES.filter(
    (p) =>
      p.slug !== page.slug &&
      p.material !== page.material &&
      !p0Pages.some((pp) => pp.slug === p.slug)
  );

  return [...p0Pages, ...sameMaterial, ...otherMaterial].slice(0, limit);
}

export const FEATURED_HOME_GUIDES = [
  'diy-flooring-installation-roadmap',
  'laminate-flooring-tools-you-need',
  'first-row-laminate-flooring-layout',
  'how-to-install-laminate-flooring-beginners',
] as const;

export function getFeaturedHomeGuides(): Guide[] {
  return FEATURED_HOME_GUIDES.map((slug) => getGuideBySlug(slug)).filter(
    (g): g is Guide => g !== undefined
  );
}

import { getGuideBySlug } from './guides/guides';
import type { Guide } from './guides/types';
import type { ApplicationType } from './hvac/types';
import { LANDING_PAGES, type LandingPage } from './landingPages';

const APPLICATION_GUIDES: Partial<Record<ApplicationType, string[]>> = {
  rv: ['what-size-mini-split-for-rv', 'rv-mini-split-installation-options', 'mini-split-vs-window-ac'],
  tiny_home: ['mini-split-sizing-for-tiny-homes', 'insulating-tiny-home-for-hvac', 'common-mini-split-sizing-mistakes'],
  she_shed: ['she-shed-heating-and-cooling', 'diy-mini-split-project-roadmap', 'diy-mini-split-installation-basics'],
  cottage: ['cottage-mini-split-guide', 'seer-ratings-explained', 'single-zone-vs-multi-zone-mini-split'],
  bedroom: ['how-many-btu-for-bedroom', 'btu-per-square-foot-explained', 'mini-split-vs-window-ac'],
  living_room: ['how-to-size-ac-for-open-floor-plan', 'btu-per-square-foot-explained', 'how-many-btu-for-bedroom'],
  standard_room: ['btu-per-square-foot-explained', 'single-zone-vs-multi-zone-mini-split', 'common-mini-split-sizing-mistakes'],
};

const DEFAULT_GUIDES = [
  'diy-mini-split-project-roadmap',
  'common-mini-split-sizing-mistakes',
  'diy-mini-split-installation-basics',
];

export function getGuidesForLanding(page: LandingPage): Guide[] {
  if (page.slug === 'ac-cost-to-run-calculator' || page.kind === 'cost') {
    return ['seer-ratings-explained', 'btu-per-square-foot-explained', 'mini-split-vs-window-ac']
      .map((slug) => getGuideBySlug(slug))
      .filter((g): g is Guide => g !== undefined);
  }
  if (page.slug === 'window-ac-calculator') {
    return ['window-ac-btu-sizing', 'how-to-install-window-ac-safely', 'mini-split-vs-window-ac']
      .map((slug) => getGuideBySlug(slug))
      .filter((g): g is Guide => g !== undefined);
  }
  if (page.slug === 'garage-heater-btu-calculator') {
    return ['mini-split-for-garage-workshop', 'btu-per-square-foot-explained', 'common-mini-split-sizing-mistakes']
      .map((slug) => getGuideBySlug(slug))
      .filter((g): g is Guide => g !== undefined);
  }
  if (page.slug === 'whole-house-btu-calculator') {
    return ['how-to-size-ac-for-open-floor-plan', 'btu-per-square-foot-explained', 'single-zone-vs-multi-zone-mini-split']
      .map((slug) => getGuideBySlug(slug))
      .filter((g): g is Guide => g !== undefined);
  }
  const slugs = APPLICATION_GUIDES[page.applicationType] ?? DEFAULT_GUIDES;
  return slugs.map((slug) => getGuideBySlug(slug)).filter((g): g is Guide => g !== undefined);
}

const P0_CROSS_LINK_SLUGS: Partial<Record<string, string[]>> = {
  'mini-split-for-rv': ['mini-split-for-tiny-home', 'btu-calculator', 'mini-split-calculator'],
  'mini-split-for-tiny-home': ['mini-split-for-rv', 'btu-calculator', 'mini-split-calculator'],
  'mini-split-for-shed': ['mini-split-for-rv', 'btu-calculator'],
  'mini-split-for-cottage': ['btu-calculator', 'what-size-ac-do-i-need'],
  'btu-calculator': ['mini-split-calculator', 'what-size-ac-do-i-need', 'mini-split-for-rv'],
  'mini-split-calculator': ['btu-calculator', 'mini-split-for-rv', 'mini-split-for-tiny-home'],
  'window-ac-calculator': ['ac-size-calculator', 'room-ac-calculator', 'what-size-ac-do-i-need'],
  'garage-heater-btu-calculator': ['btu-calculator', 'mini-split-for-shed', 'tonnage-calculator'],
  'whole-house-btu-calculator': ['btu-calculator', 'what-size-ac-do-i-need', 'tonnage-calculator'],
  'ac-cost-to-run-calculator': ['btu-calculator', 'mini-split-calculator', 'tonnage-calculator'],
};

export function getRelatedLandingPages(page: LandingPage, limit = 4): LandingPage[] {
  const p0Slugs = P0_CROSS_LINK_SLUGS[page.slug] ?? [];
  const p0Pages = p0Slugs
    .map((slug) => LANDING_PAGES.find((p) => p.slug === slug))
    .filter((p): p is LandingPage => p !== undefined && p.slug !== page.slug);

  const sameApp = LANDING_PAGES.filter(
    (p) => p.slug !== page.slug && p.applicationType === page.applicationType
  );
  const other = LANDING_PAGES.filter(
    (p) => p.slug !== page.slug && p.applicationType !== page.applicationType
  );
  const seen = new Set([page.slug, ...p0Pages.map((p) => p.slug)]);
  const rest = [...sameApp, ...other].filter((p) => !seen.has(p.slug));

  return [...p0Pages, ...rest].slice(0, limit);
}

export const FEATURED_HOME_GUIDES = [
  'diy-mini-split-project-roadmap',
  'mini-split-electrical-requirements',
  'how-to-install-window-ac-safely',
  'btu-per-square-foot-explained',
] as const;

export function getFeaturedHomeGuides(): Guide[] {
  return FEATURED_HOME_GUIDES.map((slug) => getGuideBySlug(slug)).filter(
    (g): g is Guide => g !== undefined
  );
}

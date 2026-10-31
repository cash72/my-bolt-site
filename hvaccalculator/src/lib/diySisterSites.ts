/** Topical home-improvement sister calculators (not crypto / keto / software). */
export type DiySisterSiteId = 'paint' | 'flooring' | 'hvac' | 'drywall' | 'mulch';

export interface DiySisterSite {
  id: DiySisterSiteId;
  href: string;
  label: string;
}

export const DIY_HOME_CALC_SITES: readonly DiySisterSite[] = [
  { id: 'paint', href: 'https://paint-calculator.ca/', label: 'Paint calculator (Canada)' },
  { id: 'flooring', href: 'https://flooringboxcalculator.com/', label: 'Flooring box calculator' },
  { id: 'hvac', href: 'https://hvaccalculators.net/', label: 'HVAC / BTU calculators' },
  { id: 'drywall', href: 'https://drywall-calculator.com/', label: 'Drywall sheet calculator' },
  { id: 'mulch', href: 'https://mulch-calculators.com/', label: 'Mulch & gravel calculator' },
] as const;

export function diySisterSitesExcept(current: DiySisterSiteId): DiySisterSite[] {
  return DIY_HOME_CALC_SITES.filter((site) => site.id !== current);
}

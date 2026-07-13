import { getGuideBySlug } from './guides/guides';
import type { Guide } from './guides/types';

export const FEATURED_HOME_GUIDES = [
  'net-carbs-for-insulin-resistance',
  'intermittent-fasting-16-8-vs-18-6',
  'pcos-and-low-carb',
] as const;

export function getFeaturedHomeGuides(): Guide[] {
  return FEATURED_HOME_GUIDES.map((slug) => getGuideBySlug(slug)).filter(
    (g): g is Guide => g !== undefined
  );
}

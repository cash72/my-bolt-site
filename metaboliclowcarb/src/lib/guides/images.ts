import type { Guide } from './types';
import { SITE_URL } from '../site';

export function getGuideImagePath(guide: Pick<Guide, 'slug'>): string {
  return `/guides/images/${guide.slug}.jpg`;
}

export function getGuideImageUrl(guide: Pick<Guide, 'slug'>): string {
  return `${SITE_URL}${getGuideImagePath(guide)}`;
}

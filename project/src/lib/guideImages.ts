import type { GuideDef } from './guides';
import { SITE_URL } from './site';

export function getGuideImagePath(guide: Pick<GuideDef, 'slug'>): string {
  return `/guides/images/${guide.slug}.jpg`;
}

export function getGuideImageUrl(guide: Pick<GuideDef, 'slug'>): string {
  return `${SITE_URL.replace(/\/$/, '')}${getGuideImagePath(guide)}`;
}

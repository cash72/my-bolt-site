import type { Guide } from './types';

export function getGuideImagePath(guide: Guide): string {
  return `/guides/images/${guide.slug}.jpg`;
}

export function getGuideImageUrl(guide: Guide, siteUrl: string): string {
  return `${siteUrl.replace(/\/$/, '')}${getGuideImagePath(guide)}`;
}

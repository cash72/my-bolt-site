import indexableLandings from '../../seo/indexable-landings.json';

const INDEXABLE = new Set(indexableLandings.slugs);

export function isLandingIndexable(slug: string): boolean {
  return INDEXABLE.has(slug);
}

export const INDEXABLE_LANDING_SLUGS = [...INDEXABLE];

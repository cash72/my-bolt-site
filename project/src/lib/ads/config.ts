/** Matches the publisher ID in ads.txt — public, not secret */
export const ADSENSE_PUBLISHER_ID = 'ca-pub-1132338970019438';

/**
 * Master switch for AdSense ad units and script loading.
 * Keep false until AdSense approves satoshi-calc.com — set VITE_ADSENSE_ENABLED=true to re-enable.
 */
export const ADSENSE_ENABLED = import.meta.env.VITE_ADSENSE_ENABLED === 'true';

/** AdSense publisher ID (env override for builds) */
export const ADSENSE_CLIENT =
  import.meta.env.VITE_ADSENSE_CLIENT?.trim() || ADSENSE_PUBLISHER_ID;

/** AdSense ad unit slot IDs — create display units in AdSense, then set via env */
export const ADSENSE_SLOTS = {
  footer: import.meta.env.VITE_ADSENSE_SLOT_FOOTER?.trim() || '9490641503',
  content: import.meta.env.VITE_ADSENSE_SLOT_CONTENT?.trim() || '8950595776',
} as const;

/** A-Ads (aads.com) ad unit ID — crypto-friendly network */
export const AADS_UNIT_ID = import.meta.env.VITE_AADS_UNIT_ID?.trim() || '';

/** Optional fixed size for A-Ads, e.g. 728x90 or 300x250. Leave empty for adaptive. */
export const AADS_SIZE = import.meta.env.VITE_AADS_SIZE?.trim() || '';

export type AdPlacement = keyof typeof ADSENSE_SLOTS;

export const AD_PLACEMENTS: Record<
  AdPlacement,
  { minHeightClass: string; adFormat: 'auto' | 'horizontal' | 'rectangle' }
> = {
  footer: {
    minHeightClass: 'min-h-[90px] sm:min-h-[100px]',
    adFormat: 'auto',
  },
  content: {
    minHeightClass: 'min-h-[250px]',
    adFormat: 'auto',
  },
};

export function hasAdsensePublisher(): boolean {
  return ADSENSE_ENABLED && Boolean(ADSENSE_CLIENT);
}

export function isAdsenseSlotConfigured(placement: AdPlacement): boolean {
  return ADSENSE_ENABLED && Boolean(ADSENSE_CLIENT && ADSENSE_SLOTS[placement]);
}

export function isAdsenseEnabled(): boolean {
  return isAdsenseSlotConfigured('footer') || isAdsenseSlotConfigured('content');
}

export function isAAdsEnabled(): boolean {
  return Boolean(AADS_UNIT_ID);
}

export function isAnyAdEnabled(): boolean {
  return isAdsenseEnabled() || isAAdsEnabled();
}

export function getAdsenseSlot(placement: AdPlacement): string {
  return ADSENSE_SLOTS[placement];
}

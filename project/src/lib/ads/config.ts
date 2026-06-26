/** AdSense publisher ID, e.g. ca-pub-1234567890123456 */
export const ADSENSE_CLIENT = import.meta.env.VITE_ADSENSE_CLIENT?.trim() || '';

/** AdSense ad unit slot IDs (create units in AdSense dashboard) */
export const ADSENSE_SLOTS = {
  footer: import.meta.env.VITE_ADSENSE_SLOT_FOOTER?.trim() || '',
  content: import.meta.env.VITE_ADSENSE_SLOT_CONTENT?.trim() || '',
} as const;

/** A-Ads (aads.com) ad unit ID — crypto-friendly network */
export const AADS_UNIT_ID = import.meta.env.VITE_AADS_UNIT_ID?.trim() || '';

/** Optional fixed size for A-Ads, e.g. 728x90 or 300x250. Leave empty for adaptive. */
export const AADS_SIZE = import.meta.env.VITE_AADS_SIZE?.trim() || '';

export type AdPlacement = keyof typeof ADSENSE_SLOTS;

export function isAdsenseEnabled(): boolean {
  return Boolean(ADSENSE_CLIENT && (ADSENSE_SLOTS.footer || ADSENSE_SLOTS.content));
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

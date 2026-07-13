/** AdSense publisher ID, e.g. ca-pub-1234567890123456 */
export const ADSENSE_CLIENT = import.meta.env.VITE_ADSENSE_CLIENT?.trim() || '';

/**
 * Master switch for AdSense ad units and script loading.
 * Keep false until AdSense approves drywall-calculator.com.
 */
export const ADSENSE_ENABLED = import.meta.env.VITE_ADSENSE_ENABLED === 'true';

/** AdSense ad unit slot IDs (create units in AdSense after approval) */
export const ADSENSE_SLOTS = {
  footer: import.meta.env.VITE_ADSENSE_SLOT_FOOTER?.trim() || '',
  content: import.meta.env.VITE_ADSENSE_SLOT_CONTENT?.trim() || '',
} as const;

export type AdPlacement = keyof typeof ADSENSE_SLOTS;

export function isAdsenseClientSet(): boolean {
  return ADSENSE_ENABLED && Boolean(ADSENSE_CLIENT);
}

export function isAdsenseSlotConfigured(placement: AdPlacement): boolean {
  return ADSENSE_ENABLED && Boolean(ADSENSE_CLIENT && ADSENSE_SLOTS[placement]);
}

export function isAdsenseEnabled(): boolean {
  return isAdsenseSlotConfigured('footer') || isAdsenseSlotConfigured('content');
}

export function isAnyAdEnabled(): boolean {
  return isAdsenseEnabled();
}

export function getAdsenseSlot(placement: AdPlacement): string {
  return ADSENSE_SLOTS[placement];
}

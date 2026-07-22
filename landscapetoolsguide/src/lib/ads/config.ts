/** AdSense publisher ID, e.g. ca-pub-1234567890123456 */
export const ADSENSE_CLIENT = import.meta.env.VITE_ADSENSE_CLIENT?.trim() || '';

/**
 * Master switch for AdSense ad units and script loading.
 * Keep false until AdSense approves landscapetoolsguide.com — set VITE_ADSENSE_ENABLED=true to re-enable.
 */
export const ADSENSE_ENABLED = import.meta.env.VITE_ADSENSE_ENABLED === 'true';

/** AdSense ad unit slot IDs (create units in AdSense after approval) */
export const ADSENSE_SLOTS = {
  footer: import.meta.env.VITE_ADSENSE_SLOT_FOOTER?.trim() || '',
  content: import.meta.env.VITE_ADSENSE_SLOT_CONTENT?.trim() || '',
  /** Under calculator results — falls back to content slot ID if empty */
  results: import.meta.env.VITE_ADSENSE_SLOT_RESULTS?.trim() || '',
  /** Mid-article on guides — falls back to content slot ID if empty */
  midGuide: import.meta.env.VITE_ADSENSE_SLOT_MID?.trim() || '',
} as const;

export type AdPlacement = keyof typeof ADSENSE_SLOTS;

export function isAdsenseClientSet(): boolean {
  return ADSENSE_ENABLED && Boolean(ADSENSE_CLIENT);
}

/** Resolve slot ID; results/midGuide reuse content until dedicated units exist. */
export function getAdsenseSlot(placement: AdPlacement): string {
  const direct = ADSENSE_SLOTS[placement];
  if (direct) return direct;
  if (placement === 'results' || placement === 'midGuide') {
    return ADSENSE_SLOTS.content || (ADSENSE_SLOTS as { sidebar?: string }).sidebar || '';
  }
  return '';
}

export function isAdsenseSlotConfigured(placement: AdPlacement): boolean {
  return ADSENSE_ENABLED && Boolean(ADSENSE_CLIENT && getAdsenseSlot(placement));
}

export function isAdsenseEnabled(): boolean {
  return (Object.keys(ADSENSE_SLOTS) as AdPlacement[]).some((p) => isAdsenseSlotConfigured(p));
}

export function isAnyAdEnabled(): boolean {
  return isAdsenseEnabled();
}

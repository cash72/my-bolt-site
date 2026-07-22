/** AdSense publisher ID, e.g. ca-pub-1234567890123456 */
export const ADSENSE_CLIENT = import.meta.env.VITE_ADSENSE_CLIENT?.trim() || '';

/**
 * Master switch for AdSense ad units and script loading.
 * Keep false until AdSense approves mulch-calculators.com.
 */
export const ADSENSE_ENABLED = import.meta.env.VITE_ADSENSE_ENABLED === 'true';

/** AdSense ad unit slot IDs (create units in AdSense after approval) */
export const ADSENSE_SLOTS = {
  footer: import.meta.env.VITE_ADSENSE_SLOT_FOOTER?.trim() || '',
  content: import.meta.env.VITE_ADSENSE_SLOT_CONTENT?.trim() || '',
  /** Under calculator results — set VITE_ADSENSE_SLOT_RESULTS (do not reuse content). */
  results: import.meta.env.VITE_ADSENSE_SLOT_RESULTS?.trim() || '',
  /** Mid-article on guides — set VITE_ADSENSE_SLOT_MID (do not reuse content). */
  midGuide: import.meta.env.VITE_ADSENSE_SLOT_MID?.trim() || '',
} as const;

export type AdPlacement = keyof typeof ADSENSE_SLOTS;

export function isAdsenseClientSet(): boolean {
  return ADSENSE_ENABLED && Boolean(ADSENSE_CLIENT);
}

/**
 * Resolve slot ID. results/midGuide only render when their own env IDs are set —
 * do not alias the content unit (avoids the same ad slot 2–3× on one page).
 */
export function getAdsenseSlot(placement: AdPlacement): string {
  return ADSENSE_SLOTS[placement] || '';
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

/** True when a dedicated in-results unit is live — page-level content ads should yield. */
export function hasResultsAdUnit(): boolean {
  return isAdsenseSlotConfigured('results');
}

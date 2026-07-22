/**
 * AdSense growth playbook — target $1,500–$2,000/mo display-only.
 *
 * After AdSense approval on a domain:
 * 1. Create distinct display units: footer, content, results, midGuide.
 *    results/midGuide do NOT reuse the content slot ID (avoids 2–3× same unit).
 * 2. Set env: VITE_ADSENSE_ENABLED=true, VITE_ADSENSE_CLIENT, VITE_ADSENSE_SLOT_*.
 * 3. Prefer enabling Auto ads, then disable cluttering placements in AdSense UI.
 * 4. Track Page RPM + pageviews weekly; update the growth canvas mid estimates.
 *
 * Priority engines (effort order): HVAC → Satoshi → Metabolic → Mulch → rest.
 * Landscape remains affiliate-first; AdSense there is secondary.
 */
export const ADSENSE_GROWTH = {
  monthlyTargetLow: 1500,
  monthlyTargetHigh: 2000,
  monthlyTargetMid: 1750,
  blendedRpmTarget: 13,
  portfolioPvAtTargetRpm: Math.round((1750 / 13) * 1000),
} as const;

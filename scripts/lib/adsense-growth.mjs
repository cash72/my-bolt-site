/**
 * AdSense growth playbook.
 *
 * Do not invert these horizons:
 * - Compounding clock starts 2026-06-22 (repo). Peak is 12–24 months (~month 18).
 * - Month 6 (~2026-12) modeled up to ~$300/mo IF search impressions compound.
 * - $1,500–$2,000/mo is the later peak/RPM stretch at ~135k PV — not month 6, not current.
 * - ~20 Paint clicks / 28 days (ads still off) is a traffic snapshot, not a new ceiling.
 *
 * After AdSense approval on a domain:
 * 1. Create distinct display units: footer, content, results, midGuide.
 *    results/midGuide do NOT reuse the content slot ID (avoids 2–3× same unit).
 * 2. Set env: VITE_ADSENSE_ENABLED=true, VITE_ADSENSE_CLIENT, VITE_ADSENSE_SLOT_*.
 * 3. Prefer enabling Auto ads, then disable cluttering placements in AdSense UI.
 * 4. Track Page RPM + pageviews weekly against month6UsdCap, not against current-click dollars.
 *
 * Focus engines while titles are frozen: Paint → HVAC → Flooring.
 * Landscape remains affiliate-first; AdSense there is secondary.
 */
export const ADSENSE_GROWTH = {
  compoundingClockStart: '2026-06-22',
  month6Around: '2026-12',
  month6UsdCap: 300,
  peakWindowMonths: [12, 24],
  peakAroundMonth: 18,
  monthlyTargetLow: 1500,
  monthlyTargetHigh: 2000,
  monthlyTargetMid: 1750,
  blendedRpmTarget: 13,
  portfolioPvAtTargetRpm: Math.round((1750 / 13) * 1000),
} as const;

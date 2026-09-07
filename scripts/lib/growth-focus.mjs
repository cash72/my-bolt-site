/**
 * Ranking focus for the portfolio. When nightly eight-site title churn is paused,
 * crawl/index scripts default to Paint, HVAC, and Flooring only.
 */
import { readFileSync } from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '../..');

export function loadGrowthFocus() {
  const raw = JSON.parse(readFileSync(path.join(ROOT, 'sites.growth-focus.json'), 'utf8'));
  return {
    pauseNightlyPortfolioGrowth: Boolean(raw.pauseNightlyPortfolioGrowth),
    focusSites: Array.isArray(raw.focusSites) ? raw.focusSites : [],
    reason: raw.reason || '',
    pausedUntil: raw.pausedUntil || '',
  };
}

/** Filter registry sites to the ranking-focus set when the nightly pause is on. */
export function applyGrowthFocus(sites, { forceAll = false } = {}) {
  const focus = loadGrowthFocus();
  if (forceAll || !focus.pauseNightlyPortfolioGrowth || focus.focusSites.length === 0) {
    return { sites, focus, filtered: false };
  }
  const allowed = new Set(focus.focusSites);
  return {
    sites: sites.filter((site) => allowed.has(site.dir)),
    focus,
    filtered: true,
  };
}

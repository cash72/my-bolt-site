#!/usr/bin/env node
/**
 * Patch AdSense placements (results + midGuide) and insert mid-guide ads
 * across calculator sites. Run from repo root:
 *   node scripts/patch-adsense-growth.mjs
 */
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');

const DIY_SITES = [
  'paintcalculator',
  'flooringboxcalculator',
  'drywallcalculator',
  'mulchcalculator',
  'hvaccalculator',
  'metaboliclowcarb',
  'landscapetoolsguide',
];

function writeConfig(site) {
  const file = path.join(ROOT, site, 'src/lib/ads/config.ts');
  let src = fs.readFileSync(file, 'utf8');
  const hasSidebar = src.includes('sidebar:');

  const slotsBlock = hasSidebar
    ? `export const ADSENSE_SLOTS = {
  footer: import.meta.env.VITE_ADSENSE_SLOT_FOOTER?.trim() || '',
  content: import.meta.env.VITE_ADSENSE_SLOT_CONTENT?.trim() || '',
  sidebar: import.meta.env.VITE_ADSENSE_SLOT_SIDEBAR?.trim() || '',
  /** Under calculator results — falls back to content slot ID if empty */
  results: import.meta.env.VITE_ADSENSE_SLOT_RESULTS?.trim() || '',
  /** Mid-article on guides — falls back to content slot ID if empty */
  midGuide: import.meta.env.VITE_ADSENSE_SLOT_MID?.trim() || '',
} as const;`
    : `export const ADSENSE_SLOTS = {
  footer: import.meta.env.VITE_ADSENSE_SLOT_FOOTER?.trim() || '',
  content: import.meta.env.VITE_ADSENSE_SLOT_CONTENT?.trim() || '',
  /** Under calculator results — falls back to content slot ID if empty */
  results: import.meta.env.VITE_ADSENSE_SLOT_RESULTS?.trim() || '',
  /** Mid-article on guides — falls back to content slot ID if empty */
  midGuide: import.meta.env.VITE_ADSENSE_SLOT_MID?.trim() || '',
} as const;`;

  src = src.replace(/export const ADSENSE_SLOTS = \{[\s\S]*?\} as const;/, slotsBlock);

  const helpers = `export type AdPlacement = keyof typeof ADSENSE_SLOTS;

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
`;

  src = src.replace(
    /export type AdPlacement = keyof typeof ADSENSE_SLOTS;[\s\S]*$/,
    helpers
  );

  fs.writeFileSync(file, src);
  console.log('config', site);
}

function patchGuidePage(site) {
  const file = path.join(ROOT, site, 'src/pages/GuidePage.tsx');
  if (!fs.existsSync(file)) return;
  let src = fs.readFileSync(file, 'utf8');

  if (src.includes("placement=\"midGuide\"")) {
    console.log('guide already patched', site);
    return;
  }

  if (!src.includes("import AdSlot")) {
    src = src.replace(
      "import ContentMonetizationSlot from '../components/ContentMonetizationSlot';",
      "import AdSlot from '../components/AdSlot';\nimport ContentMonetizationSlot from '../components/ContentMonetizationSlot';"
    );
  }

  // Standard DIY guide map → insert mid ad after 2nd section
  const standardMap = `        {guide.sections.map((section) => (
          <section key={section.heading}>
            <h2 className="text-lg font-semibold text-slate-900 dark:text-slate-100 mb-3">{section.heading}</h2>
            {section.paragraphs?.map((p) => (
              <p key={p} className="text-sm text-slate-700 dark:text-slate-300 leading-relaxed mb-3">
                {renderEditorialText(p)}
              </p>
            ))}
            {section.bullets && (
              <ul className="list-disc list-inside space-y-2 text-sm text-slate-700 dark:text-slate-300">
                {section.bullets.map((b) => (
                  <li key={b} className="leading-relaxed">
                    {renderEditorialText(b)}
                  </li>
                ))}
              </ul>
            )}
          </section>
        ))}`;

  const patchedMap = `        {guide.sections.map((section, sectionIndex) => (
          <div key={section.heading}>
            <section>
              <h2 className="text-lg font-semibold text-slate-900 dark:text-slate-100 mb-3">{section.heading}</h2>
              {section.paragraphs?.map((p) => (
                <p key={p} className="text-sm text-slate-700 dark:text-slate-300 leading-relaxed mb-3">
                  {renderEditorialText(p)}
                </p>
              ))}
              {section.bullets && (
                <ul className="list-disc list-inside space-y-2 text-sm text-slate-700 dark:text-slate-300">
                  {section.bullets.map((b) => (
                    <li key={b} className="leading-relaxed">
                      {renderEditorialText(b)}
                    </li>
                  ))}
                </ul>
              )}
            </section>
            {sectionIndex === 1 && guide.sections.length > 2 && (
              <AdSlot placement="midGuide" className="my-8" />
            )}
          </div>
        ))}`;

  if (src.includes(standardMap)) {
    src = src.replace(standardMap, patchedMap);
    fs.writeFileSync(file, src);
    console.log('guide', site);
  } else {
    console.warn('guide pattern mismatch', site);
  }
}

for (const site of DIY_SITES) {
  writeConfig(site);
  patchGuidePage(site);
}

console.log('done');

#!/usr/bin/env node
/**
 * Download hero images for guide pages (Pexels — free license).
 * All photo IDs are verified with HTTP HEAD before assignment.
 * Exits non-zero if any guide is missing an image after fallbacks.
 */
import fs from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const OUT_DIR = path.resolve(__dirname, '../public/guides/images');

/** Primary photo per guide — each ID verified HTTP 200 on 2026-07-09. */
const GUIDE_PHOTOS = {
  'btu-per-square-foot-explained': '1571460',
  'how-many-btu-for-bedroom': '6195301',
  'mini-split-vs-window-ac': '1575986',
  'single-zone-vs-multi-zone-mini-split': '313691',
  'seer-ratings-explained': '442579',
  'mini-split-sizing-for-tiny-homes': '2219024',
  'insulating-tiny-home-for-hvac': '2599250',
  'what-size-mini-split-for-rv': '3964595',
  'rv-mini-split-installation-options': '8962188',
  'she-shed-heating-and-cooling': '4050318',
  'cottage-mini-split-guide': '5691620',
  'diy-mini-split-installation-basics': '6476589',
  'common-mini-split-sizing-mistakes': '234527',
  'how-to-size-ac-for-open-floor-plan': '280222',
  'mini-split-for-garage-workshop': '271743',
  'window-ac-btu-sizing': '6195301',
  'heat-pump-vs-air-conditioner': '442579',
  'portable-ac-vs-window-ac': '1575986',
};

/** Verified fallback pool (never assign an unverified ID). */
const FALLBACK_POOL = [
  '3760263',
  '6802045',
  '8293774',
  '3990359',
  '8866770',
  '4239123',
  '2090652',
  '3991874',
  '1084199',
];

const pexelsUrl = (id) =>
  `https://images.pexels.com/photos/${id}/pexels-photo-${id}.jpeg?auto=compress&cs=tinysrgb&w=1200&h=630&fit=crop`;

async function photoExists(photoId) {
  const res = await fetch(pexelsUrl(photoId), {
    method: 'HEAD',
    headers: { 'User-Agent': 'hvaccalculator-guide-images/1.0' },
    redirect: 'follow',
  });
  return res.ok;
}

async function downloadTo(dest, photoId) {
  const res = await fetch(pexelsUrl(photoId), {
    headers: { 'User-Agent': 'hvaccalculator-guide-images/1.0' },
  });
  if (!res.ok) throw new Error(`HTTP ${res.status}`);
  const buf = Buffer.from(await res.arrayBuffer());
  if (buf.length < 10_000) throw new Error(`file too small (${buf.length} bytes)`);
  await fs.writeFile(dest, buf);
}

await fs.mkdir(OUT_DIR, { recursive: true });

const failures = [];

for (const [slug, primaryId] of Object.entries(GUIDE_PHOTOS)) {
  const dest = path.join(OUT_DIR, `${slug}.jpg`);
  const candidates = [primaryId, ...FALLBACK_POOL.filter((id) => id !== primaryId)];
  let saved = false;

  for (const photoId of candidates) {
    try {
      if (!(await photoExists(photoId))) continue;
      await downloadTo(dest, photoId);
      const label = photoId === primaryId ? 'primary' : `fallback ${photoId}`;
      console.log(`✓ ${slug}.jpg <- Pexels ${photoId} (${label})`);
      saved = true;
      break;
    } catch {
      /* try next candidate */
    }
  }

  if (!saved) failures.push(slug);
}

if (failures.length) {
  console.error(`\nFAILED: no image for ${failures.length} guide(s): ${failures.join(', ')}`);
  process.exit(1);
}

console.log(`\nAll ${Object.keys(GUIDE_PHOTOS).length} guide images saved.`);

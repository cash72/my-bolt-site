#!/usr/bin/env node
/**
 * Download hero images for guide pages (Pexels — free license).
 * All photo IDs verified HTTP 200 before assignment. Build fails if any guide lacks an image.
 */
import fs from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const OUT_DIR = path.resolve(__dirname, '../public/guides/images');

/** Primary photo per guide — verified 2026-07-09 */
const GUIDE_PHOTOS = {
  'how-to-measure-rooms-for-flooring': '1571453',
  'how-to-prep-subfloor-before-installing-flooring': '1571458',
  'how-to-remove-old-flooring': '1571459',
  'flooring-acclimation-before-install': '1571461',
  'flooring-transition-strips-and-trim': '1571462',
  'how-much-flooring-waste-to-buy': '1571463',
  'how-many-flooring-boxes-guide': '1571465',
  'laminate-vs-tile-vs-carpet-comparison': '1571466',
  'do-i-need-underlay-for-laminate': '1571467',
  'how-to-install-laminate-flooring-beginners': '1571468',
  'how-to-choose-laminate-flooring': '1571469',
  'laminate-vs-vinyl-plank-which-to-buy': '1571470',
  'tile-underlayment-membrane-guide': '1457842',
  'how-to-prep-for-tile-floor': '276724',
  'how-to-choose-floor-tile': '276551',
  'large-format-tile-tips': '276534',
  'carpet-pad-guide': '276583',
  'how-to-choose-carpet-for-rooms': '191800',
  'diy-flooring-installation-roadmap': '1571453',
  'laminate-flooring-tools-you-need': '1571468',
  'first-row-laminate-flooring-layout': '1571465',
  'stagger-pattern-laminate-planks': '1571469',
  'install-flooring-around-door-jambs': '1571462',
  'when-not-to-diy-flooring': '1571458',
};

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
  '280222',
  '271743',
];

const pexelsUrl = (id) =>
  `https://images.pexels.com/photos/${id}/pexels-photo-${id}.jpeg?auto=compress&cs=tinysrgb&w=1200&h=630&fit=crop`;

async function photoExists(photoId) {
  const res = await fetch(pexelsUrl(photoId), {
    method: 'HEAD',
    headers: { 'User-Agent': 'flooringboxcalculator-guide-images/1.0' },
    redirect: 'follow',
  });
  return res.ok;
}

async function downloadTo(dest, photoId) {
  const res = await fetch(pexelsUrl(photoId), {
    headers: { 'User-Agent': 'flooringboxcalculator-guide-images/1.0' },
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
      /* try next */
    }
  }

  if (!saved) failures.push(slug);
}

if (failures.length) {
  console.error(`\nFAILED: no image for ${failures.length} guide(s): ${failures.join(', ')}`);
  process.exit(1);
}

console.log(`\nAll ${Object.keys(GUIDE_PHOTOS).length} guide images saved.`);

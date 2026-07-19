#!/usr/bin/env node
/** Download hero images for guide pages. Build fails if any guide lacks an image. */
import fs from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const OUT_DIR = path.resolve(__dirname, '../public/guides/images');

const GUIDE_PHOTOS = {
  'primer-before-painting': '1571411',
  'how-to-repair-walls-before-painting': '1571415',
  'how-to-patch-drywall-holes': '1571416',
  'how-to-prep-walls-for-painting': '1571425',
  'how-to-paint-a-room-step-by-step': '1571432',
  'painting-over-dark-colors': '1571433',
  'how-to-fix-peeling-paint': '1571435',
  'how-to-remove-wallpaper-before-painting': '1571436',
  'interior-paint-sheen-guide': '1571437',
  'how-much-paint-for-a-room': '1571440',
  'how-many-coats-of-paint': '1571441',
  'paint-coverage-per-gallon': '1571442',
  'how-to-estimate-wallpaper-rolls': '1571444',
  'wallpaper-pattern-repeat': '1571445',
  'accent-wall-wallpaper-tips': '1571446',
  'how-much-fence-stain-do-i-need': '1571447',
  'deck-stain-coverage': '1571448',
  'exterior-stain-two-coats': '1571449',
  'interior-painting-project-guide': '1571450',
  'identify-oil-vs-latex-paint-on-walls': '1571451',
  'how-to-choose-primer-interior-walls': '1571452',
  'interior-painting-tools-and-supplies-list': '1571411',
  'how-long-between-paint-coats': '1571432',
  'painting-over-oil-based-paint': '1571435',
};

const FALLBACK_POOL = [
  '1571411', '1571415', '1571416', '1571425', '1571432', '1571433', '1571435',
  '1571436', '1571437', '1571440', '1571441', '1571442', '1571444', '1571445',
  '1571446', '1571447', '1571448', '1571449', '1571450', '1571451', '1571452',
];

const pexelsUrl = (id) =>
  `https://images.pexels.com/photos/${id}/pexels-photo-${id}.jpeg?auto=compress&cs=tinysrgb&w=1200&h=630&fit=crop`;

async function photoExists(photoId) {
  const res = await fetch(pexelsUrl(photoId), {
    method: 'HEAD',
    headers: { 'User-Agent': 'paintcalculator-guide-images/1.0' },
    redirect: 'follow',
  });
  return res.ok;
}

async function downloadTo(dest, photoId) {
  const res = await fetch(pexelsUrl(photoId), {
    headers: { 'User-Agent': 'paintcalculator-guide-images/1.0' },
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
      console.log(`✓ ${slug}.jpg <- Pexels ${photoId}${photoId === primaryId ? ' (primary)' : ` (fallback ${photoId})`}`);
      saved = true;
      break;
    } catch { /* next */ }
  }
  if (!saved) failures.push(slug);
}

if (failures.length) {
  console.error(`FAILED: ${failures.join(', ')}`);
  process.exit(1);
}
console.log(`\nAll ${Object.keys(GUIDE_PHOTOS).length} guide images saved.`);

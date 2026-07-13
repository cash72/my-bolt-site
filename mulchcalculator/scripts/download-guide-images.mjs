#!/usr/bin/env node
/** Download hero images for guide pages. Build fails if any guide lacks an image. */
import fs from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const OUT_DIR = path.resolve(__dirname, '../public/guides/images');

/** Verified Pexels IDs — unique per guide, HTTP 200 HEAD check. */
const GUIDE_PHOTOS = {
  'how-much-mulch-do-i-need': '1084199',
  'mulch-depth-how-deep': '5538616',
  'cubic-yards-mulch-explained': '6676298',
  'mulch-vs-bark-vs-compost': '450061',
  'how-much-gravel-for-driveway': '2808337',
  'gravel-types-pea-crushed': '574258',
  'topsoil-calculator-guide': '3716335',
  'how-many-mulch-bags-per-yard': '1179225',
  'spring-mulch-application-guide': '1179229',
  'rubber-mulch-vs-wood-mulch': '1179228',
  'edging-and-prepping-beds-before-mulch': '1179223',
  'delivery-vs-bags-bulk-mulch': '4056535',
};

const FALLBACK_POOL = [
  '1084199', '5538616', '6676298', '450061', '2808337', '574258',
  '3716335', '1179225', '1179229', '1179228', '1179223', '4056535',
  '376464', '280222', '271743',
];

const pexelsUrl = (id) =>
  `https://images.pexels.com/photos/${id}/pexels-photo-${id}.jpeg?auto=compress&cs=tinysrgb&w=1200&h=630&fit=crop`;

async function photoExists(photoId) {
  const res = await fetch(pexelsUrl(photoId), {
    method: 'HEAD',
    headers: { 'User-Agent': 'mulchcalculator-guide-images/1.0' },
    redirect: 'follow',
  });
  return res.ok;
}

async function downloadTo(dest, photoId) {
  const res = await fetch(pexelsUrl(photoId), {
    headers: { 'User-Agent': 'mulchcalculator-guide-images/1.0' },
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

#!/usr/bin/env node
/** Download hero images for guide pages. Build fails if any guide lacks an image. */
import fs from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const OUT_DIR = path.resolve(__dirname, '../public/guides/images');

/** Verified Pexels IDs — unique per guide, HTTP 200 HEAD check. */
const GUIDE_PHOTOS = {
  'how-much-drywall-for-a-room': '3760263',
  'drywall-sheet-sizes-explained': '6802045',
  'how-much-drywall-waste-to-add': '8293774',
  'how-to-hang-drywall-step-by-step': '3990359',
  'hanging-drywall-on-ceiling': '8866770',
  'drywall-taping-and-mudding-guide': '4239123',
  'how-many-coats-drywall-mud': '2090652',
  'drywall-screw-spacing-and-pattern': '3991874',
  'half-inch-vs-five-eighth-drywall': '1084199',
  'how-to-patch-drywall-holes': '376464',
  'drywall-for-basement-renovation': '280222',
  'estimating-drywall-screws-and-compound': '271743',
};

const FALLBACK_POOL = [
  '3760263', '6802045', '8293774', '3990359', '8866770', '4239123',
  '2090652', '3991874', '1084199', '376464', '280222', '271743',
];

const pexelsUrl = (id) =>
  `https://images.pexels.com/photos/${id}/pexels-photo-${id}.jpeg?auto=compress&cs=tinysrgb&w=1200&h=630&fit=crop`;

async function photoExists(photoId) {
  const res = await fetch(pexelsUrl(photoId), {
    method: 'HEAD',
    headers: { 'User-Agent': 'drywallcalculator-guide-images/1.0' },
    redirect: 'follow',
  });
  return res.ok;
}

async function downloadTo(dest, photoId) {
  const res = await fetch(pexelsUrl(photoId), {
    headers: { 'User-Agent': 'drywallcalculator-guide-images/1.0' },
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

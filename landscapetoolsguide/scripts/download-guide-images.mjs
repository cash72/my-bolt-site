#!/usr/bin/env node
/** Download hero images for guide pages. Build fails if any guide lacks an image. */
import fs from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const OUT_DIR = path.resolve(__dirname, '../public/guides/images');

/** Verified Pexels IDs (HTTP 200 HEAD check). */
const GUIDE_PHOTOS = {
  'how-to-choose-lawn-care-software': '1084199',
  'landscaping-software-pricing-guide': '280222',
  'when-to-upgrade-to-lmn': '271743',
  'route-optimization-lawn-care-software': '5538616',
  'quickbooks-integration-landscape-software': '6676298',
  'mobile-app-landscape-crew-management': '450061',
  'recurring-billing-lawn-care-software': '2808337',
  'design-build-estimating-software-landscape': '574258',
  'lawn-treatment-chemical-tracking': '3716335',
  'solo-landscaper-software-checklist': '1179225',
  'migrating-landscape-business-software': '1179229',
  'field-service-software-evaluation-checklist': '1179228',
};

const FALLBACK_POOL = [
  '1084199', '280222', '271743', '5538616', '6676298', '450061',
  '2808337', '574258', '3716335', '1179225', '1179229', '1179228', '1179223',
];

const pexelsUrl = (id) =>
  `https://images.pexels.com/photos/${id}/pexels-photo-${id}.jpeg?auto=compress&cs=tinysrgb&w=1200&h=630&fit=crop`;

async function photoExists(photoId) {
  const res = await fetch(pexelsUrl(photoId), {
    method: 'HEAD',
    headers: { 'User-Agent': 'landscapetoolsguide-guide-images/1.0' },
    redirect: 'follow',
  });
  return res.ok;
}

async function downloadTo(dest, photoId) {
  const res = await fetch(pexelsUrl(photoId), {
    headers: { 'User-Agent': 'landscapetoolsguide-guide-images/1.0' },
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

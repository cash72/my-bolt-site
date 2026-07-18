#!/usr/bin/env node
/** Download hero images for guide pages. Build fails if any guide lacks an image. */
import fs from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const OUT_DIR = path.resolve(__dirname, '../public/guides/images');

/** Verified Pexels IDs (HTTP 200 HEAD check). */
const GUIDE_PHOTOS = {
  'how-to-break-a-24-hour-fast': '4056535',
  'intermittent-fasting-16-8-vs-18-6': '4056536',
  'water-fast-vs-assisted-fast': '4056538',
  'fasting-with-insulin-resistance': '4056539',
  'dr-boz-ratio-explained': '1640777',
  'net-carbs-for-insulin-resistance': '1640774',
  'best-first-meal-after-fasting': '1640772',
  'visceral-fat-metabolic-health': '1095550',
  'fatty-liver-low-carb': '1640775',
  'getting-started-keto-low-carb': '1640773',
  'atkins-phases-explained': '1640776',
  'pcos-and-low-carb': '1640771',
  'fasting-on-diabetes-medications': '1640770',
  'electrolytes-during-fasting': '1640769',
  'how-to-read-nutrition-labels-net-carbs': '1640768',
  'protein-on-keto-and-low-carb': '1640767',
  'keto-flu-and-electrolytes': '6802045',
  'mindful-macro-tracking-low-carb': '8293774',
};

const FALLBACK_POOL = [
  '4056535', '1640777', '1095550', '376464', '1640774', '1640772', '1640775',
  '1640773', '1640776', '1640771', '1640770', '1640769', '1640768', '1640767',
  '3760263', '6802045', '8293774',
];

const pexelsUrl = (id) =>
  `https://images.pexels.com/photos/${id}/pexels-photo-${id}.jpeg?auto=compress&cs=tinysrgb&w=1200&h=630&fit=crop`;

async function photoExists(photoId) {
  const res = await fetch(pexelsUrl(photoId), {
    method: 'HEAD',
    headers: { 'User-Agent': 'metaboliclowcarb-guide-images/1.0' },
    redirect: 'follow',
  });
  return res.ok;
}

async function downloadTo(dest, photoId) {
  const res = await fetch(pexelsUrl(photoId), {
    headers: { 'User-Agent': 'metaboliclowcarb-guide-images/1.0' },
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

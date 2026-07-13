#!/usr/bin/env node
/** Download hero images for guide pages. Build fails if any guide lacks an image. */
import fs from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const OUT_DIR = path.resolve(__dirname, '../public/guides/images');

/** Verified Pexels IDs (HTTP 200 HEAD check). */
const GUIDE_PHOTOS = {
  'what-is-a-satoshi': '8439097',
  'how-many-satoshis-in-a-bitcoin': '730564',
  'usd-to-satoshi': '8465440',
  'how-to-store-bitcoin-safely': '8445344',
  'bitcoin-self-custody-basics': '6771061',
  'run-your-own-bitcoin-node': '6771549',
  'how-to-buy-bitcoin': '6771550',
  'stacking-sats-dca': '6771551',
};

const FALLBACK_POOL = [
  '8439097', '730564', '8465440', '8445344', '6771061', '6771549', '6771550', '6771551',
  '6771552', '8445345', '8465441', '8439098', '730565', '6771062', '376464',
];

const pexelsUrl = (id) =>
  `https://images.pexels.com/photos/${id}/pexels-photo-${id}.jpeg?auto=compress&cs=tinysrgb&w=1200&h=630&fit=crop`;

async function photoExists(photoId) {
  const res = await fetch(pexelsUrl(photoId), {
    method: 'HEAD',
    headers: { 'User-Agent': 'satoshi-calc-guide-images/1.0' },
    redirect: 'follow',
  });
  return res.ok;
}

async function downloadTo(dest, photoId) {
  const res = await fetch(pexelsUrl(photoId), {
    headers: { 'User-Agent': 'satoshi-calc-guide-images/1.0' },
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

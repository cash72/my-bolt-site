import { createCanvas, loadImage } from 'canvas';
import { existsSync, mkdirSync, readFileSync, writeFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';
import { spawnSync } from 'node:child_process';
import ffmpegPath from 'ffmpeg-static';

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = join(__dirname, '..');
const manifestPath = join(__dirname, 'frame-manifest.json');
const scenesDir = join(root, 'assets', 'scenes-ai');
const pdfDir = join(root, 'assets', 'pdf-pages');
const outDir = join(root, 'assets', 'frames');
const W = 1920;
const H = 1080;

mkdirSync(outDir, { recursive: true });
mkdirSync(scenesDir, { recursive: true });

const manifest = JSON.parse(readFileSync(manifestPath, 'utf8'));

async function composePdfFrame(pageNum) {
  const src = join(pdfDir, `page-${String(pageNum).padStart(2, '0')}.png`);
  if (!existsSync(src)) {
    throw new Error(`Missing ${src}. Run: npm run pdf`);
  }

  const img = await loadImage(src);
  const canvas = createCanvas(W, H);
  const ctx = canvas.getContext('2d');
  ctx.fillStyle = '#f5f5f5';
  ctx.fillRect(0, 0, W, H);

  const maxW = W - 120;
  const maxH = H - 80;
  const scale = Math.min(maxW / img.width, maxH / img.height);
  const w = img.width * scale;
  const h = img.height * scale;
  const x = (W - w) / 2;
  const y = (H - h) / 2;

  ctx.fillStyle = 'rgba(0,0,0,0.10)';
  ctx.fillRect(x + 10, y + 12, w, h);
  ctx.fillStyle = '#ffffff';
  ctx.fillRect(x - 6, y - 6, w + 12, h + 12);
  ctx.drawImage(img, x, y, w, h);

  return canvas.toBuffer('image/png');
}

function segmentDuration(segFile) {
  const probe = spawnSync(
    ffmpegPath,
    ['-i', segFile, '-f', 'null', '-'],
    { encoding: 'utf8' },
  );
  const match = probe.stderr.match(/Duration: (\d+):(\d+):(\d+(?:\.\d+)?)/);
  if (!match) return 5;
  return Number(match[1]) * 3600 + Number(match[2]) * 60 + Number(match[3]);
}

const segmentDir = join(root, 'assets', 'voice-segments');
const segmentDurations = [];
for (let i = 1; i <= 13; i++) {
  const file = join(segmentDir, `seg-${String(i).padStart(2, '0')}.mp3`);
  segmentDurations[i - 1] = existsSync(file) ? segmentDuration(file) : 5;
}

const framesBySegment = manifest.reduce((acc, frame) => {
  if (!acc[frame.segment]) acc[frame.segment] = [];
  acc[frame.segment].push({ ...frame });
  return acc;
}, {});

const frameTimings = [];
for (let seg = 0; seg < 13; seg++) {
  const frames = framesBySegment[seg] ?? [{ type: 'scene', scene: 'hook-worried', segment: seg }];
  const segTime = segmentDurations[seg] ?? 5;
  const totalWeight = frames.reduce((s, f) => s + (f.weight ?? 1), 0);
  for (const frame of frames) {
    const share = (frame.weight ?? 1) / totalWeight;
    frameTimings.push({ ...frame, duration: segTime * share });
  }
}

const metaPath = join(root, 'assets', 'voiceover-meta.json');
if (existsSync(metaPath)) {
  const target = JSON.parse(readFileSync(metaPath, 'utf8')).duration;
  const current = frameTimings.reduce((s, f) => s + f.duration, 0);
  const scale = target / current;
  for (const frame of frameTimings) {
    frame.duration *= scale;
  }
}

const outputFrames = [];

for (let i = 0; i < frameTimings.length; i++) {
  const frame = frameTimings[i];
  const label = String(i + 1).padStart(2, '0');
  const pngFile = `frame-${label}.png`;

  if (frame.type === 'pdf') {
    writeFileSync(join(outDir, pngFile), await composePdfFrame(frame.page));
    outputFrames.push({
      duration: frame.duration,
      segment: frame.segment,
      type: 'pdf',
      media: 'image',
      motion: 'static',
      file: pngFile,
      source: join(outDir, pngFile),
    });
    console.log(`Frame ${label}: pdf p${frame.page} (${frame.duration.toFixed(2)}s)`);
  } else {
    const src = join(scenesDir, `${frame.scene}.png`);
    if (!existsSync(src)) {
      throw new Error(`Missing ${src}. Add AI scene image or run scene generation.`);
    }
    outputFrames.push({
      duration: frame.duration,
      segment: frame.segment,
      type: 'scene',
      media: 'image',
      motion: 'static',
      scene: frame.scene,
      file: pngFile,
      source: src,
    });
    console.log(`Frame ${label}: scene ${frame.scene} (${frame.duration.toFixed(2)}s)`);
  }
}

writeFileSync(
  join(outDir, 'timings.json'),
  JSON.stringify(
    {
      frames: outputFrames,
      totalDuration: outputFrames.reduce((s, f) => s + f.duration, 0),
    },
    null,
    2,
  ),
);

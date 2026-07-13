import { spawnSync } from 'node:child_process';
import { existsSync, mkdirSync, readFileSync, writeFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';
import ffmpegPath from 'ffmpeg-static';

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = join(__dirname, '..');
const framesDir = join(root, 'assets', 'frames');
const segmentsDir = join(root, 'assets', 'segments');
const timingsPath = join(framesDir, 'timings.json');
const voiceover = join(root, 'assets', 'voiceover.mp3');
const outFile = join(root, 'output', 'ai-proof-job-playbook-promo-with-preview.mp4');

const STATIC_VF =
  'scale=1920:1080:force_original_aspect_ratio=decrease,pad=1920:1080:(ow-iw)/2:(oh-ih)/2,format=yuv420p';

if (!existsSync(timingsPath)) {
  console.error('Missing timings. Run: npm run frames');
  process.exit(1);
}

const { frames } = JSON.parse(readFileSync(timingsPath, 'utf8'));
mkdirSync(segmentsDir, { recursive: true });

const segmentPaths = [];

for (let i = 0; i < frames.length; i++) {
  const frame = frames[i];
  const segPath = join(segmentsDir, `part-${String(i + 1).padStart(2, '0')}.mp4`);

  const args = [
    '-y',
    '-loop',
    '1',
    '-i',
    frame.source,
    '-t',
    frame.duration.toFixed(3),
    '-vf',
    STATIC_VF,
    '-r',
    '30',
    '-c:v',
    'libx264',
    '-pix_fmt',
    'yuv420p',
    '-an',
    segPath,
  ];

  console.log(`Segment ${i + 1}/${frames.length}: ${frame.type}${frame.scene ? ` ${frame.scene}` : frame.type === 'pdf' ? '' : ''}`);
  const result = spawnSync(ffmpegPath, args, { stdio: 'inherit' });
  if (result.status !== 0) process.exit(result.status ?? 1);
  segmentPaths.push(segPath);
}

const concatList = join(segmentsDir, 'concat.txt');
writeFileSync(
  concatList,
  `${segmentPaths.map((p) => `file '${p.replace(/'/g, "'\\''")}'`).join('\n')}\n`,
);

const tempVideo = join(segmentsDir, 'merged-video.mp4');
const merge = spawnSync(
  ffmpegPath,
  ['-y', '-f', 'concat', '-safe', '0', '-i', concatList, '-c', 'copy', tempVideo],
  { stdio: 'inherit' },
);
if (merge.status !== 0) process.exit(merge.status ?? 1);

console.log('Muxing audio...');
const final = spawnSync(
  ffmpegPath,
  ['-y', '-i', tempVideo, '-i', voiceover, '-c:v', 'copy', '-c:a', 'aac', '-b:a', '192k', '-shortest', outFile],
  { stdio: 'inherit' },
);
if (final.status !== 0) process.exit(final.status ?? 1);

console.log(`\nDone! Video saved to:\n${outFile}`);

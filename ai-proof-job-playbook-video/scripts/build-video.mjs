import { existsSync, readFileSync, readdirSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';
import { buildVideo } from './build-video-utils.mjs';

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = join(__dirname, '..');
const assets = join(root, 'assets');
const slidesDir = join(assets, 'slides');
const voiceover = join(assets, 'voiceover.mp3');
const metaPath = join(assets, 'voiceover-meta.json');
const outFile = join(root, 'output', 'ai-proof-job-playbook-promo.mp4');

const slideFiles = readdirSync(slidesDir)
  .filter((f) => f.startsWith('slide-') && f.endsWith('.png'))
  .sort()
  .map((f) => join(slidesDir, f));

const duration = JSON.parse(readFileSync(metaPath, 'utf8')).duration;
const durations = slideFiles.map(() => duration / slideFiles.length);

buildVideo({
  imagePaths: slideFiles,
  durations,
  voiceoverPath: voiceover,
  outFile,
  listName: 'ffmpeg-input.txt',
});

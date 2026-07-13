import { existsSync, readdirSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';
import { buildVideo } from './build-video-utils.mjs';

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = join(__dirname, '..');
const assets = join(root, 'assets');
const slidesDir = join(assets, 'slides');
const pdfDir = join(assets, 'pdf-pages');
const outputDir = join(root, 'output');

const voiceover = join(assets, 'voiceover.mp3');
const metaPath = join(assets, 'voiceover-meta.json');
const pdfPath = join(assets, 'playbook.pdf');
const outFile = join(outputDir, 'ai-proof-job-playbook-promo-with-preview.mp4');

if (!existsSync(pdfPath)) {
  console.error('Missing assets/playbook.pdf');
  process.exit(1);
}

const introSlides = ['slide-01.png', 'slide-02.png', 'slide-03.png'].map((f) =>
  join(slidesDir, f),
);
const pdfPages = readdirSync(pdfDir)
  .filter((f) => f.startsWith('page-') && f.endsWith('.png'))
  .sort()
  .slice(1, 6)
  .map((f) => join(pdfDir, f));
const outroSlides = ['slide-05.png', 'slide-06.png'].map((f) => join(slidesDir, f));

const imagePaths = [...introSlides, ...pdfPages, ...outroSlides];

buildVideo({
  imagePaths,
  voiceoverPath: voiceover,
  metaPath,
  outFile,
  listName: 'ffmpeg-preview-input.txt',
});

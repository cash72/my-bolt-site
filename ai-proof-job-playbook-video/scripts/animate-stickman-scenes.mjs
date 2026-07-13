import { mkdirSync, rmSync, writeFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';
import { spawnSync } from 'node:child_process';
import ffmpegPath from 'ffmpeg-static';
import { SCENE_NAMES, createSurface, drawScene } from './stickman-lib.mjs';

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = join(__dirname, '..');
const outDir = join(root, 'assets', 'scenes-animated');
const tmpRoot = join(root, 'assets', '.anim-tmp');

const FPS = 24;
const LOOP_SECONDS = 2;
const FRAMES = FPS * LOOP_SECONDS;

mkdirSync(outDir, { recursive: true });

for (const name of SCENE_NAMES) {
  const tmpDir = join(tmpRoot, name);
  rmSync(tmpDir, { recursive: true, force: true });
  mkdirSync(tmpDir, { recursive: true });

  for (let i = 0; i < FRAMES; i++) {
    const t = i / FRAMES;
    const { c, ctx } = createSurface();
    drawScene(name, ctx, t);
    writeFileSync(join(tmpDir, `frame-${String(i).padStart(4, '0')}.png`), c.toBuffer('image/png'));
  }

  const outFile = join(outDir, `${name}.mp4`);
  const result = spawnSync(
    ffmpegPath,
    [
      '-y',
      '-framerate',
      String(FPS),
      '-i',
      join(tmpDir, 'frame-%04d.png'),
      '-c:v',
      'libx264',
      '-pix_fmt',
      'yuv420p',
      '-movflags',
      '+faststart',
      outFile,
    ],
    { stdio: 'inherit' },
  );

  if (result.status !== 0) process.exit(result.status ?? 1);
  console.log(`Animated: ${outFile}`);
}

rmSync(tmpRoot, { recursive: true, force: true });

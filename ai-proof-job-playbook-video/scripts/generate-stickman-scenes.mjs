import { mkdirSync, writeFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';
import { SCENE_NAMES, createSurface, drawScene } from './stickman-lib.mjs';

const outDir = join(dirname(fileURLToPath(import.meta.url)), '..', 'assets', 'scenes');
mkdirSync(outDir, { recursive: true });

for (const name of SCENE_NAMES) {
  const { c, ctx } = createSurface();
  drawScene(name, ctx, 0);
  const file = join(outDir, `${name}.png`);
  writeFileSync(file, c.toBuffer('image/png'));
  console.log(`Scene saved: ${file}`);
}

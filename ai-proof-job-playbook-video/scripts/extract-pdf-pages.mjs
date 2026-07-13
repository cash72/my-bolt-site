import { spawnSync } from 'node:child_process';
import { existsSync, mkdirSync, readFileSync, readdirSync, renameSync, rmSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = join(__dirname, '..');
const pdfPath = join(root, 'assets', 'playbook.pdf');
const outDir = join(root, 'assets', 'pdf-pages');
const manifestPath = join(__dirname, 'frame-manifest.json');

mkdirSync(outDir, { recursive: true });

const neededPages = [
  ...new Set(
    JSON.parse(readFileSync(manifestPath, 'utf8'))
      .filter((f) => f.type === 'pdf')
      .map((f) => f.page),
  ),
].sort((a, b) => a - b);

console.log(`Extracting PDF pages: ${neededPages.join(', ')}`);

for (const page of neededPages) {
  const normalized = join(outDir, `page-${String(page).padStart(2, '0')}.png`);
  const prefix = join(outDir, `tmp-${String(page).padStart(2, '0')}`);

  if (existsSync(normalized)) {
    console.log(`Exists ${normalized}`);
    continue;
  }

  const result = spawnSync(
    'pdftoppm',
    ['-png', '-f', String(page), '-l', String(page), '-r', '150', pdfPath, prefix],
    { encoding: 'utf8' },
  );
  if (result.status !== 0) {
    console.error(result.stderr || result.stdout);
    process.exit(result.status ?? 1);
  }

  const generated = readdirSync(outDir)
    .filter((f) => f.startsWith(`tmp-${String(page).padStart(2, '0')}`) && f.endsWith('.png'))
    .sort()[0];

  if (!generated) {
    console.error(`No PNG generated for page ${page}`);
    process.exit(1);
  }

  rmSync(normalized, { force: true });
  renameSync(join(outDir, generated), normalized);
  console.log(`Saved ${normalized}`);
}

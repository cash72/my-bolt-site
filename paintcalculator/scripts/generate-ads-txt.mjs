import fs from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, '..');
const client = process.env.VITE_ADSENSE_CLIENT?.trim();

const adsPath = path.join(ROOT, 'public/ads.txt');

if (client) {
  const pubId = client.replace(/^ca-pub-/i, '');
  const adsTxt = `# Auto-generated at build time from VITE_ADSENSE_CLIENT
google.com, pub-${pubId}, DIRECT, f08e47fec0942fa0
`;
  await fs.writeFile(adsPath, adsTxt);
  console.log('Generated public/ads.txt for AdSense');
} else {
  try {
    const existing = await fs.readFile(adsPath, 'utf8');
    if (existing.includes('google.com,')) {
      console.log('Kept existing public/ads.txt (VITE_ADSENSE_CLIENT unset)');
    } else {
      console.log('Skipped ads.txt (set VITE_ADSENSE_CLIENT to generate)');
    }
  } catch {
    console.log('Skipped ads.txt (set VITE_ADSENSE_CLIENT to generate)');
  }
}

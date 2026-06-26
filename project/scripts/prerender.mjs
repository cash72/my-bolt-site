import puppeteer from 'puppeteer';
import handler from 'serve-handler';
import http from 'http';
import fs from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const DIST = path.resolve(__dirname, '../dist');
const BASE = (process.env.VITE_BASE_PATH || '/').replace(/\/$/, '');
const PORT = Number(process.env.PRERENDER_PORT || 4173);

const routesJson = JSON.parse(
  await fs.readFile(path.resolve(__dirname, '../seo/generated-routes.json'), 'utf8')
);
const ROUTES = routesJson.allRoutes;

function routeToOutput(route) {
  if (route === '/') return path.join(DIST, 'index.html');
  return path.join(DIST, route.slice(1), 'index.html');
}

const server = http.createServer((req, res) =>
  handler(req, res, {
    public: DIST,
    rewrites: [{ source: '**', destination: '/index.html' }],
  })
);

await new Promise((resolve, reject) => {
  server.listen(PORT, '127.0.0.1', (err) => (err ? reject(err) : resolve()));
});

console.log(`Prerender server at http://127.0.0.1:${PORT}${BASE || ''}/`);

const browser = await puppeteer.launch({
  headless: true,
  args: ['--no-sandbox', '--disable-setuid-sandbox'],
});

try {
  for (const route of ROUTES) {
    const suffix = route === '/' ? '/' : route;
    const url = `http://127.0.0.1:${PORT}${BASE}${suffix}`;
    const page = await browser.newPage();
    await page.goto(url, { waitUntil: 'networkidle2', timeout: 90_000 });
    await page.waitForSelector('#main-content', { timeout: 15_000 });
    await new Promise((r) => setTimeout(r, 500));
    const html = await page.content();
    const outPath = routeToOutput(route);
    await fs.mkdir(path.dirname(outPath), { recursive: true });
    await fs.writeFile(outPath, html);
    await page.close();
    console.log(`Prerendered ${url} -> ${outPath}`);
  }
} finally {
  await browser.close();
  server.close();
}

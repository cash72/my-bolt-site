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
const SPA_SHELL = '__spa-shell.html';

const routesJson = JSON.parse(
  await fs.readFile(path.resolve(__dirname, '../seo/generated-routes.json'), 'utf8')
);
const ROUTES = [...routesJson.allRoutes.filter((r) => r !== '/'), '/'];

function routeToOutput(route) {
  if (route === '/') return path.join(DIST, 'index.html');
  return path.join(DIST, route.slice(1), 'index.html');
}

const shellSrc = path.join(DIST, 'index.html');
const shellDest = path.join(DIST, SPA_SHELL);
await fs.copyFile(shellSrc, shellDest);

const server = http.createServer((req, res) =>
  handler(req, res, {
    public: DIST,
    rewrites: [{ source: '**', destination: `/${SPA_SHELL}` }],
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

async function setupPage(page) {
  await page.evaluateOnNewDocument(() => {
    window.__PRERENDER__ = true;
  });
}

try {
  for (const route of ROUTES) {
    const suffix = route === '/' ? '/' : route;
    const url = `http://127.0.0.1:${PORT}${BASE}${suffix}`;
    const page = await browser.newPage();
    await setupPage(page);
    await page.goto(url, { waitUntil: 'domcontentloaded', timeout: 60_000 });
    await page.waitForSelector('#main-content', { timeout: 15_000 });
    await new Promise((r) => setTimeout(r, 300));

    let html = await page.content();

    if (route !== '/') {
      html = html.replace(/<script id="homepage-faq-schema"[^>]*>[\s\S]*?<\/script>/g, '');
    }
    html = html
      .replace(/<script async="" src="https:\/\/pagead2\.googlesyndication\.com[^"]*"[^>]*><\/script>/g, '')
      .replace(/<script async="" src="https:\/\/www\.googletagmanager\.com[^"]*"[^>]*><\/script>/g, '');

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

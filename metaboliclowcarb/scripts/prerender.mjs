import puppeteer from 'puppeteer';
import handler from 'serve-handler';
import http from 'http';
import fs from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const DIST = path.resolve(__dirname, '../dist');
const BASE = (process.env.VITE_BASE_PATH || '/').replace(/\/$/, '');
const REQUESTED_PORT = Number(process.env.PRERENDER_PORT || 0);
const SPA_SHELL = '__spa-shell.html';

const routesJson = JSON.parse(
  await fs.readFile(path.resolve(__dirname, '../seo/generated-routes.json'), 'utf8')
);
// Prerender all routes except "/" first — "/" overwrites dist/index.html (the SPA shell).
const ROUTES = [...routesJson.allRoutes.filter((r) => r !== '/'), '/'];

function routeToOutput(route) {
  if (route === '/') return path.join(DIST, 'index.html');
  return path.join(DIST, route.slice(1), 'index.html');
}

const shellSrc = path.join(DIST, 'index.html');
const shellDest = path.join(DIST, SPA_SHELL);
await fs.copyFile(shellSrc, shellDest);

const server = http.createServer((req, res) => {
  const requestPath = new URL(req.url || '/', 'http://localhost').pathname;
  const isAsset = /^\/assets\//.test(requestPath) || /\.(?:css|js|mjs|png|jpe?g|svg|webp|ico|txt|xml|json|html|woff2?)$/i.test(requestPath);
  if (!isAsset) req.url = `/${SPA_SHELL}`;
  return handler(req, res, { public: DIST, cleanUrls: false });
});

await new Promise((resolve, reject) => {
  server.listen(REQUESTED_PORT, '127.0.0.1', (err) => (err ? reject(err) : resolve()));
});

const address = server.address();
if (!address || typeof address === 'string') throw new Error('Prerender server did not expose a TCP port');
const PORT = address.port;

console.log(`Prerender server at http://127.0.0.1:${PORT}${BASE || ''}/`);

const browser = await puppeteer.launch({
  headless: true,
  protocolTimeout: 30_000,
  args: ['--no-sandbox', '--disable-setuid-sandbox'],
});

async function setupPage(page) {
  await page.evaluateOnNewDocument(() => {
    window.__PRERENDER__ = true;
  });
}

async function getPageHtml(page) {
  const client = await page.createCDPSession();
  try {
    const { root } = await client.send('DOM.getDocument', { depth: 0 });
    const { nodeId } = await client.send('DOM.querySelector', { nodeId: root.nodeId, selector: 'html' });
    const { outerHTML } = await client.send('DOM.getOuterHTML', { nodeId });
    return `<!doctype html>\n${outerHTML}`;
  } finally {
    await client.detach();
  }
}

try {
  for (const route of ROUTES) {
    const suffix = route === '/' ? '/' : route;
    const url = `http://127.0.0.1:${PORT}${BASE}${suffix}`;
    for (let attempt = 1; attempt <= 2; attempt += 1) {
      const page = await browser.newPage();
      try {
        await setupPage(page);
        await page.goto(url, { waitUntil: 'domcontentloaded', timeout: 60_000 });
        await page.waitForSelector('#main-content', { timeout: 15_000 });
        let html = await getPageHtml(page);
        if (route !== '/') html = html.replace(/<script id="homepage-faq-schema"[^>]*>[\s\S]*?<\/script>/g, '');
        html = html
          .replace(/<script async="" src="https:\/\/pagead2\.googlesyndication\.com[^"]*"[^>]*><\/script>/g, '')
          .replace(/<script async="" src="https:\/\/www\.googletagmanager\.com[^"]*"[^>]*><\/script>/g, '');
        const outPath = routeToOutput(route);
        await fs.mkdir(path.dirname(outPath), { recursive: true });
        await fs.writeFile(outPath, html);
        console.log(`Prerendered ${url} -> ${outPath}`);
        break;
      } catch (error) {
        if (attempt === 2) throw error;
        console.warn(`Retrying ${route} after prerender failure: ${error.message}`);
      } finally {
        await page.close().catch(() => {});
      }
    }
  }
} finally {
  await browser.close();
  server.close();
  await fs.unlink(shellDest).catch(() => {});
}

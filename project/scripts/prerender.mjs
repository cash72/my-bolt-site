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

/** Stable mock prices for prerender when CoinGecko is unreachable in CI/sandbox. */
const MOCK_PRICE_BODY = JSON.stringify({
  bitcoin: {
    usd: 95_000,
    usd_24h_change: 1.2,
    eur: 88_000,
    eur_24h_change: 1.1,
    gbp: 75_000,
    gbp_24h_change: 1.0,
    cad: 130_000,
    cad_24h_change: 1.3,
    aud: 145_000,
    aud_24h_change: 1.25,
    inr: 7_900_000,
    inr_24h_change: 1.15,
  },
});

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

const browserOptions = {
  headless: true,
  protocolTimeout: 30_000,
  args: ['--no-sandbox', '--disable-setuid-sandbox'],
};
let browser = await puppeteer.launch(browserOptions);

async function setupPage(page) {
  await page.evaluateOnNewDocument((mockJson) => {
    window.__PRERENDER__ = true;
    const mock = JSON.parse(mockJson);
    const originalFetch = window.fetch.bind(window);
    window.fetch = (input, init) => {
      const url = typeof input === 'string' ? input : input.url;
      if (url.includes('api.coingecko.com')) {
        return Promise.resolve({
          ok: true,
          status: 200,
          json: () => Promise.resolve(mock),
        });
      }
      return originalFetch(input, init);
    };
  }, MOCK_PRICE_BODY);
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

let page = await browser.newPage();
await setupPage(page);

try {
  for (const [routeIndex, route] of ROUTES.entries()) {
    if (routeIndex > 0 && routeIndex % 40 === 0) {
      await page.close().catch(() => {});
      await browser.close();
      browser = await puppeteer.launch(browserOptions);
      page = await browser.newPage();
      await setupPage(page);
    }
    const suffix = route === '/' ? '/' : route;
    const url = `http://127.0.0.1:${PORT}${BASE}${suffix}`;
    for (let attempt = 1; attempt <= 3; attempt += 1) {
      try {
        await page.goto(url, { waitUntil: 'domcontentloaded', timeout: 15_000 });
        await page.waitForSelector('#main-content', { timeout: 8_000 });
        await page
          .waitForFunction(
            () => {
              const alert = document.querySelector('[role="alert"]');
              if (alert?.textContent?.includes('Unable to fetch')) return false;
              const main = document.querySelector('#main-content');
              if (!main) return false;
              return !main.textContent?.includes('$0.00 BTC price');
            },
            { timeout: 5_000 }
          )
          .catch(() => console.warn(`  Warning: price wait timed out for ${route}`));

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
        if (attempt === 3) throw error;
        console.warn(`Retrying ${route} after prerender failure: ${error.message}`);
        await page?.close().catch(() => {});
        await browser.close().catch(() => {});
        browser = await puppeteer.launch(browserOptions);
        page = await browser.newPage();
        await setupPage(page);
      }
    }
  }
} finally {
  await browser.close();
  server.close();
  await fs.unlink(shellDest).catch(() => {});
}

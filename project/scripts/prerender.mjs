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

try {
  for (const route of ROUTES) {
    const suffix = route === '/' ? '/' : route;
    const url = `http://127.0.0.1:${PORT}${BASE}${suffix}`;
    const page = await browser.newPage();
    await setupPage(page);
    await page.goto(url, { waitUntil: 'domcontentloaded', timeout: 60_000 });
    await page.waitForSelector('#main-content', { timeout: 15_000 });
    await page.waitForFunction(() => !document.querySelector('[aria-busy="true"]'), {
      timeout: 30_000,
    });
    await page
      .waitForFunction(
        () => {
          const alert = document.querySelector('[role="alert"]');
          if (alert?.textContent?.includes('Unable to fetch')) return false;
          const main = document.querySelector('#main-content');
          if (!main) return false;
          return !main.textContent?.includes('$0.00 BTC price');
        },
        { timeout: 15_000 }
      )
      .catch(() => {
        console.warn(`  Warning: price wait timed out for ${route}`);
      });

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
  await fs.unlink(shellDest).catch(() => {});
}

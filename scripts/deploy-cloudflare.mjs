#!/usr/bin/env node
/**
 * One-command deploy: build + Cloudflare Pages + optional custom domain.
 *
 * Usage:
 *   node scripts/deploy-cloudflare.mjs flooringboxcalculator
 *   node scripts/deploy-cloudflare.mjs flooringboxcalculator --attach-domain
 */
import { execSync } from 'child_process';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { loadRepoEnv } from './lib/env.mjs';
import { createClient, ensurePagesProject } from './lib/cloudflare.mjs';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, '..');

const siteDir = process.argv[2];
const attachDomain = process.argv.includes('--attach-domain');

if (!siteDir) {
  console.error('Usage: node scripts/deploy-cloudflare.mjs <site-folder> [--attach-domain]');
  console.error('Example: node scripts/deploy-cloudflare.mjs flooringboxcalculator --attach-domain');
  process.exit(1);
}

loadRepoEnv(ROOT);

const viteBuildEnv = Object.fromEntries(
  Object.entries(process.env).filter(([key]) => key.startsWith('VITE_'))
);

const registry = JSON.parse(fs.readFileSync(path.join(ROOT, 'sites.registry.json'), 'utf8'));
const site = registry.sites.find((s) => s.dir === siteDir);

if (!site) {
  console.error(`Site "${siteDir}" not found in sites.registry.json`);
  process.exit(1);
}

const sitePath = path.join(ROOT, site.dir);
const distPath = path.join(sitePath, 'dist');

if (!fs.existsSync(path.join(sitePath, 'package.json'))) {
  console.error(`No package.json in ${site.dir}`);
  process.exit(1);
}

const accountId = process.env.CLOUDFLARE_ACCOUNT_ID;
const apiToken = process.env.CLOUDFLARE_API_TOKEN;
const isCI = process.env.GITHUB_ACTIONS === 'true';

function run(cmd, opts = {}) {
  console.log(`\n> ${cmd}\n`);
  execSync(cmd, { stdio: 'inherit', cwd: opts.cwd ?? ROOT, env: { ...process.env, ...opts.env } });
}

console.log(`\nDeploying ${site.dir} → Cloudflare Pages project "${site.pagesProject}"`);
console.log(`Site URL: ${site.siteUrl}\n`);

run('npm ci', { cwd: sitePath });
run('npx puppeteer browsers install chrome', { cwd: sitePath });

run('npm run build', {
  cwd: sitePath,
  env: {
    ...viteBuildEnv,
    VITE_SITE_URL: site.siteUrl,
    VITE_BASE_PATH: '/',
  },
});

if (!fs.existsSync(distPath)) {
  console.error('Build failed: dist/ not found');
  process.exit(1);
}

const functionsDir = path.join(sitePath, 'functions');
const middlewareTemplate = path.join(ROOT, 'scripts/templates/pages-www-redirect-middleware.js');
const middlewareDest = path.join(functionsDir, '_middleware.js');
fs.mkdirSync(functionsDir, { recursive: true });
fs.copyFileSync(middlewareTemplate, middlewareDest);
console.log('  • www → apex middleware copied to functions/_middleware.js');

const wranglerEnv = {
  CLOUDFLARE_ACCOUNT_ID: accountId,
  CLOUDFLARE_API_TOKEN: apiToken,
};

if (!apiToken || !accountId) {
  if (isCI) {
    console.error('\nError: CLOUDFLARE_API_TOKEN and CLOUDFLARE_ACCOUNT_ID are required in CI.');
    process.exit(1);
  }
  console.warn('\nWarning: CLOUDFLARE_API_TOKEN or CLOUDFLARE_ACCOUNT_ID missing in .env');
  console.warn('Wrangler may use cached OAuth login instead.\n');
} else {
  const cf = createClient(accountId, apiToken);
  const { created } = await ensurePagesProject(cf, site.pagesProject);
  if (created) {
    console.log(`Created Cloudflare Pages project "${site.pagesProject}"\n`);
  }
}

run(
  `npx wrangler@3 pages deploy dist --project-name=${site.pagesProject} --branch=main`,
  { cwd: sitePath, env: wranglerEnv }
);

if (attachDomain && site.domain) {
  if (!apiToken || !accountId) {
    console.error('\n--attach-domain requires CLOUDFLARE_API_TOKEN and CLOUDFLARE_ACCOUNT_ID in .env');
    process.exit(1);
  }
  run(`node scripts/setup-cloudflare-domain.mjs ${site.dir}`, { env: wranglerEnv });
}

console.log('\n✓ Deploy complete');
console.log(`  Preview: https://${site.pagesProject}.pages.dev`);
if (site.domain) {
  console.log(`  Custom:  https://${site.domain}`);
}
console.log(`  Sitemap: ${site.siteUrl}/sitemap.xml`);
console.log('\nNext: submit sitemap in Google Search Console (if not done yet).\n');

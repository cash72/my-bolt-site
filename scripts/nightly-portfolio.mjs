#!/usr/bin/env node
import { mkdir, readFile, writeFile } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { spawn } from 'node:child_process';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, '..');
const REPORT_DIR = path.join(ROOT, 'reports');
const dryRun = process.argv.includes('--dry-run');
const skipBuild = process.argv.includes('--skip-build');

function runNode(script, args = []) {
  return new Promise((resolve) => {
    const startedAt = Date.now();
    const child = spawn(process.execPath, [path.join(ROOT, 'scripts', script), ...args], {
      cwd: ROOT,
      env: process.env,
      stdio: ['ignore', 'pipe', 'pipe'],
    });
    let output = '';
    const onData = (chunk) => {
      const text = chunk.toString();
      output += text;
      process.stdout.write(text);
    };
    child.stdout.on('data', onData);
    child.stderr.on('data', onData);
    child.on('close', (code, signal) => {
      resolve({ ok: code === 0, code, signal, durationMs: Date.now() - startedAt, output });
    });
  });
}

async function readJson(relative) {
  try {
    return JSON.parse(await readFile(path.join(REPORT_DIR, relative), 'utf8'));
  } catch {
    return null;
  }
}

function sendDesktopNotification(title, body, urgency) {
  return new Promise((resolve) => {
    const child = spawn('notify-send', ['--urgency', urgency, title, body], {
      stdio: 'ignore',
      env: process.env,
    });
    child.on('error', () => resolve(false));
    child.on('close', (code) => resolve(code === 0));
  });
}

async function sendWebhook(payload) {
  const url = process.env.NIGHTLY_REPORT_WEBHOOK_URL;
  if (!url) return { attempted: false, ok: false };
  try {
    const response = await fetch(url, {
      method: 'POST',
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify({
        text: payload.text,
        content: payload.text,
        report: payload,
      }),
    });
    return { attempted: true, ok: response.ok, status: response.status };
  } catch (error) {
    return { attempted: true, ok: false, error: error.message };
  }
}

async function main() {
  const startedAt = Date.now();
  await mkdir(REPORT_DIR, { recursive: true });
  const actions = [];

  console.log('=== Nightly portfolio maintenance ===\n');
  const healthArgs = skipBuild ? [] : ['--build'];
  const healthRun = await runNode('portfolio-health-audit.mjs', healthArgs);
  actions.push({
    name: 'Portfolio build and live crawl',
    ok: healthRun.ok,
    durationMs: healthRun.durationMs,
    detail: skipBuild ? 'Live crawl only' : 'Typecheck, production build, prerender, crawl, SEO and contract checks',
  });

  console.log('\n=== Google Search Console phase ===\n');
  const gscArgs = dryRun ? ['--dry-run'] : [];
  const gscRun = await runNode('gsc-api-nightly.mjs', gscArgs);
  actions.push({
    name: 'Google Search Console',
    ok: gscRun.ok,
    durationMs: gscRun.durationMs,
    detail: dryRun ? 'Dry-run sitemap and P0 inspection' : 'Sitemap submission and P0 URL inspection',
  });

  const health = await readJson('portfolio-health-latest.json');
  const gsc = await readJson('gsc-nightly-latest.json');
  const errors = health?.summary?.errors ?? (healthRun.ok ? 0 : 1);
  const warnings = health?.summary?.warnings ?? 0;
  const contentDepthOpportunities = health?.summary?.opportunities ?? 0;
  const newIssues = health?.newIssues?.length ?? 0;
  const resolved = health?.resolvedIssues?.length ?? 0;
  const gscManual = gsc?.needsManualRequestIndexing?.length ?? 0;
  const gscErrors = (gsc?.errors?.length ?? 0) + (gsc?.softErrors?.length ?? 0);
  const contentOpportunities = gsc?.contentOpportunities?.length ?? 0;
  const ok = actions.every((action) => action.ok) && errors === 0;
  const generatedAt = new Date().toISOString();
  const text = ok
    ? `PASS: 8 sites checked, ${warnings} warnings, ${resolved} resolved, ${contentDepthOpportunities} depth and ${contentOpportunities} search-led opportunities.`
    : `ACTION NEEDED: ${errors} site errors, ${newIssues} new issues, ${gscErrors} GSC errors.`;

  const result = {
    generatedAt,
    dryRun,
    skipBuild,
    ok,
    text,
    actions,
    portfolio: health
      ? {
          sites: health.summary?.sites,
          pagesChecked: health.summary?.pagesChecked,
          contractsChecked: health.summary?.contractsChecked,
          errors,
          warnings,
          contentDepthOpportunities,
          newIssues,
          persistentIssues: health.persistentIssues?.length ?? 0,
          resolvedIssues: resolved,
        }
      : null,
    gsc: gsc
      ? {
          sitemapsOk: gsc.sitemaps?.filter((row) => row.ok).length ?? 0,
          sitemapsTotal: gsc.sitemaps?.length ?? 0,
          inspections: gsc.inspections?.length ?? 0,
          needsManualRequestIndexing: gscManual,
          contentOpportunities,
          errors: gsc.errors?.length ?? 0,
          softErrors: gsc.softErrors?.length ?? 0,
        }
      : null,
    durationMs: Date.now() - startedAt,
  };

  const markdown = [
    '# Nightly portfolio maintenance',
    '',
    `Generated: ${generatedAt}`,
    `Result: ${ok ? 'PASS' : 'ACTION NEEDED'}`,
    '',
    '## Summary',
    '',
    `- ${text}`,
    `- Pages crawled: ${result.portfolio?.pagesChecked ?? 'unknown'}`,
    `- Production contracts: ${result.portfolio?.contractsChecked ?? 'unknown'}`,
    `- Existing pages below the editorial depth target: ${result.portfolio?.contentDepthOpportunities ?? 'unknown'}`,
    `- GSC inspections: ${result.gsc?.inspections ?? 'unknown'}`,
    `- Search-led content opportunities: ${result.gsc?.contentOpportunities ?? 'unknown'}`,
    '',
    '## Actions performed',
    '',
    ...actions.map((action) => `- ${action.ok ? 'PASS' : 'FAIL'} — ${action.name}: ${action.detail} (${Math.round(action.durationMs / 1000)}s)`),
    '',
    '## Reports',
    '',
    '- Full site audit: reports/portfolio-health-latest.md',
    '- GSC details: reports/gsc-nightly-latest.json',
    '- Service log: reports/gsc-nightly.log',
    '',
  ].join('\n');

  const stamp = generatedAt.slice(0, 10);
  await writeFile(path.join(REPORT_DIR, 'nightly-latest.json'), JSON.stringify(result, null, 2), 'utf8');
  await writeFile(path.join(REPORT_DIR, `nightly-${stamp}.json`), JSON.stringify(result, null, 2), 'utf8');
  await writeFile(path.join(REPORT_DIR, 'nightly-latest.md'), markdown, 'utf8');
  await writeFile(path.join(REPORT_DIR, `nightly-${stamp}.md`), markdown, 'utf8');

  const desktopNotified = await sendDesktopNotification(
    ok ? 'Portfolio nightly audit passed' : 'Portfolio nightly audit needs attention',
    `${text} Report: ${path.join(REPORT_DIR, 'nightly-latest.md')}`,
    ok ? 'normal' : 'critical',
  );
  const webhook = await sendWebhook({ ...result, text });
  result.reporting = { desktopNotified, webhook };
  await writeFile(path.join(REPORT_DIR, 'nightly-latest.json'), JSON.stringify(result, null, 2), 'utf8');

  console.log('\n=== Nightly result ===');
  console.log(text);
  console.log(`Readable report: ${path.join(REPORT_DIR, 'nightly-latest.md')}`);
  console.log(`Desktop notification: ${desktopNotified ? 'sent' : 'unavailable'}`);
  console.log(`Webhook: ${webhook.attempted ? (webhook.ok ? 'sent' : 'failed') : 'not configured'}`);
  if (!ok) process.exitCode = 1;
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});

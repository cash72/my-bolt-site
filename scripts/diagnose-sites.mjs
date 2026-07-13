#!/usr/bin/env node
/**
 * Suite health check: registry sites + orphan zones in Cloudflare account.
 *
 * Usage: node scripts/diagnose-sites.mjs
 */
import fs from 'fs';
import path from 'path';
import { execSync } from 'child_process';
import { fileURLToPath } from 'url';
import { loadRepoEnv } from './lib/env.mjs';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, '..');

loadRepoEnv(ROOT);

const accountId = process.env.CLOUDFLARE_ACCOUNT_ID;
const apiToken = process.env.CLOUDFLARE_API_TOKEN;
const registry = JSON.parse(fs.readFileSync(path.join(ROOT, 'sites.registry.json'), 'utf8'));

async function api(urlPath) {
  if (!apiToken) return null;
  const res = await fetch(`https://api.cloudflare.com/client/v4${urlPath}`, {
    headers: { Authorization: `Bearer ${apiToken}` },
  });
  const data = await res.json();
  return data.success ? data : null;
}

function dig(name, type = 'A') {
  try {
    return execSync(`dig +short ${name} ${type}`, { encoding: 'utf8' }).trim() || '(none)';
  } catch {
    return '(lookup failed)';
  }
}

function curlInfo(url) {
  try {
    const out = execSync(`curl -sI --max-time 10 ${url}`, { encoding: 'utf8' });
    const status = out.match(/^HTTP\/[\d.]+ (\d+)/m)?.[1] ?? 'no response';
    const server = out.match(/^server:\s*(.+)$/im)?.[1]?.trim() ?? 'unknown';
    return { status, server };
  } catch {
    return { status: 'failed', server: 'unknown' };
  }
}

function detectHosting(server, dnsA) {
  if (/cloudflare/i.test(server)) return 'Cloudflare Pages';
  if (/github/i.test(server)) return 'GitHub Pages';
  if (/185\.199\./.test(dnsA)) return 'GitHub Pages (DNS)';
  if (dnsA !== '(none)' && !/185\.199\./.test(dnsA)) return 'Likely Cloudflare';
  return 'Unknown';
}

console.log('\nMicro-site suite diagnostics\n');

for (const site of registry.sites) {
  const dnsA = dig(site.domain);
  const home = curlInfo(site.siteUrl + '/');
  const pages = curlInfo(`https://${site.pagesProject}.pages.dev/`);

  console.log(`── ${site.domain} (${site.dir}/) ──`);
  console.log(`  Repo folder:        ${site.dir}/`);
  console.log(`  Deploy:             npm run deploy -- ${site.dir}`);
  console.log(`  Public DNS (A):     ${dnsA}`);
  console.log(`  Public DNS (www):   ${dig('www.' + site.domain)}`);
  console.log(`  pages.dev:          HTTP ${pages.status} (${pages.server})`);
  console.log(`  Custom domain:      HTTP ${home.status} (${home.server})`);
  console.log(`  Hosting:            ${detectHosting(home.server, dnsA)}`);

  if (apiToken && accountId) {
    const zone = await api(`/zones?name=${site.domain}`);
    const z = zone?.result?.[0];
    console.log(`  CF zone:            ${z ? z.status : 'NOT VISIBLE to token'}`);

    const domains = await api(`/accounts/${accountId}/pages/projects/${site.pagesProject}/domains`);
    if (domains?.result?.length) {
      for (const d of domains.result) {
        const err = d.verification_data?.error_message;
        console.log(`  Pages domain:       ${d.name} → ${d.status}${err ? ` (${err})` : ''}`);
      }
    } else {
      console.log(`  Pages domain:       (none linked)`);
    }
  }

  console.log('');
}

// Orphan zones in Cloudflare not in sites.registry.json
if (apiToken && accountId) {
  const zones = await api(`/zones?account.id=${accountId}&per_page=50`);
  const registered = new Set(registry.sites.map((s) => s.domain));
  const orphans = (zones?.result ?? []).filter((z) => !registered.has(z.name));

  if (orphans.length) {
    console.log('── Zones in Cloudflare NOT in sites.registry.json ──\n');
    for (const z of orphans) {
      const dnsA = dig(z.name);
      const home = curlInfo(`https://${z.name}/`);
      const recs = await api(`/zones/${z.id}/dns_records?per_page=20`);
      const targets = (recs?.result ?? [])
        .filter((r) => r.type === 'CNAME' || r.type === 'A')
        .map((r) => `${r.type} ${r.name} → ${r.content}`)
        .slice(0, 4);

      console.log(`  ${z.name} (${z.status})`);
      console.log(`    HTTP: ${home.status} via ${home.server}`);
      console.log(`    Hosting: ${detectHosting(home.server, dnsA)}`);
      console.log(`    DNS: ${targets.join('; ') || '(no A/CNAME records)'}`);
      console.log(`    Note: Not in automated deploy pipeline — zero CF Pages traffic is expected if DNS bypasses Cloudflare.\n`);
    }
  }
}

console.log('Registry sites:', registry.sites.map((s) => s.domain).join(', '));
console.log(`Dashboard: https://dash.cloudflare.com/${accountId}\n`);

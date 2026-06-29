/**
 * Shared Cloudflare API helpers for deploy + domain automation.
 */

export function requireEnv(accountId, apiToken) {
  if (!accountId || !apiToken) {
    throw new Error('Set CLOUDFLARE_ACCOUNT_ID and CLOUDFLARE_API_TOKEN in .env (repo root).');
  }
}

export function createClient(accountId, apiToken) {
  requireEnv(accountId, apiToken);

  async function api(method, urlPath, body) {
    const res = await fetch(`https://api.cloudflare.com/client/v4${urlPath}`, {
      method,
      headers: {
        Authorization: `Bearer ${apiToken}`,
        'Content-Type': 'application/json',
      },
      body: body ? JSON.stringify(body) : undefined,
    });
    const data = await res.json();
    if (!data.success) {
      const msg = data.errors?.map((e) => `${e.message}${e.code ? ` [${e.code}]` : ''}`).join('; ') || res.statusText;
      const err = new Error(msg);
      err.apiErrors = data.errors;
      throw err;
    }
    return data;
  }

  return {
    accountId,
    api,
    async listZones() {
      const data = await api('GET', `/zones?account.id=${accountId}&per_page=50`);
      return data.result ?? [];
    },
    async getZone(domain) {
      const data = await api('GET', `/zones?name=${domain}`);
      return data.result?.[0];
    },
    async createZone(domain) {
      return api('POST', '/zones', {
        name: domain,
        account: { id: accountId },
        jump_start: true,
      });
    },
    async listDns(zoneId) {
      const data = await api('GET', `/zones/${zoneId}/dns_records?per_page=100`);
      return data.result ?? [];
    },
    async deleteDnsRecord(zoneId, recordId) {
      await api('DELETE', `/zones/${zoneId}/dns_records/${recordId}`);
    },
    async removeLegacyHostingRecords(zoneId, domain) {
      const records = await this.listDns(zoneId);
      const removed = [];

      for (const r of records) {
        const isApex = r.name === domain;
        const isWww = r.name === `www.${domain}`;
        const isGitHubPagesIp = r.type === 'A' && /^185\.199\./.test(r.content);
        const isGitHubPagesCname = r.type === 'CNAME' && /github\.io/i.test(r.content);
        const isApexA = isApex && r.type === 'A';
        const isWwwGitHub = isWww && isGitHubPagesCname;

        if (isApexA || isGitHubPagesIp || isWwwGitHub) {
          await this.deleteDnsRecord(zoneId, r.id);
          removed.push(`${r.type} ${r.name} → ${r.content}`);
        }
      }

      return removed;
    },
    async upsertCname(zoneId, domain, recordName, target) {
      const fqdn = recordName === '@' ? domain : `${recordName}.${domain}`;
      const records = await this.listDns(zoneId);
      const existing = records.find(
        (r) => r.type === 'CNAME' && (r.name === fqdn || (recordName === '@' && r.name === domain))
      );
      const payload = { type: 'CNAME', name: recordName, content: target, proxied: true };

      if (existing) {
        if (existing.content === target && existing.proxied) {
          return { action: 'unchanged', name: fqdn };
        }
        await api('PUT', `/zones/${zoneId}/dns_records/${existing.id}`, payload);
        return { action: 'updated', name: fqdn };
      }

      await api('POST', `/zones/${zoneId}/dns_records`, payload);
      return { action: 'created', name: fqdn };
    },
    async getPagesProject(name) {
      try {
        const data = await api('GET', `/accounts/${accountId}/pages/projects/${name}`);
        return data.result;
      } catch (err) {
        if (/not found|8000007/i.test(err.message)) return null;
        throw err;
      }
    },
    async createPagesProject(name) {
      return api('POST', `/accounts/${accountId}/pages/projects`, {
        name,
        production_branch: 'main',
      });
    },
    async listPagesDomains(project) {
      const data = await api('GET', `/accounts/${accountId}/pages/projects/${project}/domains`);
      return data.result ?? [];
    },
    async addPagesDomain(project, name) {
      try {
        await api('POST', `/accounts/${accountId}/pages/projects/${project}/domains`, { name });
        return { action: 'linked' };
      } catch (err) {
        if (/already exists|duplicate|already been taken|already added/i.test(err.message)) {
          return { action: 'exists' };
        }
        throw err;
      }
    },
    async verifyToken() {
      const data = await api('GET', '/user/tokens/verify');
      return data.result;
    },
  };
}

export async function ensureZone(cf, domain) {
  let zone = await cf.getZone(domain);
  if (zone) return { zone, created: false };

  try {
    const data = await cf.createZone(domain);
    zone = data.result;
    return { zone, created: true };
  } catch (err) {
    if (/already exists|1061/i.test(err.message)) {
      zone = await cf.getZone(domain);
      if (zone) return { zone, created: false };
    }
    throw err;
  }
}

export async function ensurePagesProject(cf, projectName) {
  const existing = await cf.getPagesProject(projectName);
  if (existing) return { project: existing, created: false };
  const data = await cf.createPagesProject(projectName);
  return { project: data.result, created: true };
}

export async function setupCustomDomain(cf, { pagesProject, domain }) {
  const pagesTarget = `${pagesProject}.pages.dev`;
  const results = { pagesTarget, steps: [] };

  const project = await ensurePagesProject(cf, pagesProject);
  results.steps.push(
    project.created ? `Created Pages project "${pagesProject}"` : `Pages project "${pagesProject}" exists`
  );

  for (const name of [domain, `www.${domain}`]) {
    const link = await cf.addPagesDomain(pagesProject, name);
    results.steps.push(
      link.action === 'linked' ? `Linked Pages domain ${name}` : `Pages domain ${name} already linked`
    );
  }

  let zoneResult;
  try {
    zoneResult = await ensureZone(cf, domain);
    results.steps.push(
      zoneResult.created
        ? `Created DNS zone ${domain} (status: ${zoneResult.zone.status})`
        : `DNS zone ${domain} found (status: ${zoneResult.zone.status})`
    );
  } catch (err) {
    results.zoneError = err.message;
    results.steps.push(`Could not manage DNS zone: ${err.message}`);
    return results;
  }

  const { zone } = zoneResult;

  if (zone.status !== 'active') {
    results.pendingZone = true;
    results.steps.push(
      `Zone status is "${zone.status}" — wait for Cloudflare to activate it, then re-run this command.`
    );
  }

  const removed = await cf.removeLegacyHostingRecords(zone.id, domain);
  for (const line of removed) {
    results.steps.push(`Removed legacy DNS: ${line}`);
  }

  for (const recordName of ['@', 'www']) {
    const dns = await cf.upsertCname(zone.id, domain, recordName, pagesTarget);
    results.steps.push(
      `${dns.action === 'created' ? 'Created' : dns.action === 'updated' ? 'Updated' : 'Confirmed'} CNAME ${dns.name} → ${pagesTarget}`
    );
  }

  const domains = await cf.listPagesDomains(pagesProject);
  results.domains = domains.map((d) => ({
    name: d.name,
    status: d.status,
    error: d.verification_data?.error_message,
  }));

  return results;
}

export function dashboardLinks(accountId, site) {
  return {
    account: `https://dash.cloudflare.com/${accountId}`,
    zoneDns: `https://dash.cloudflare.com/${accountId}/${site.domain}/dns/records`,
    pagesDomains: `https://dash.cloudflare.com/${accountId}/pages/view/${site.pagesProject}/domains`,
    apiTokens: 'https://dash.cloudflare.com/profile/api-tokens',
  };
}

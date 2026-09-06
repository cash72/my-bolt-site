/**
 * Compare generated-routes.json, the committed public/sitemap.xml, and the live sitemap.
 * A stale live sitemap is the usual GSC “Discovered – currently not indexed” / coverage-gap cause.
 */

export function parseSitemapLocs(xml) {
  return [...String(xml).matchAll(/<loc>([^<]+)<\/loc>/g)].map((match) => match[1].trim());
}

export function trailingSlashUrl(value) {
  const url = new URL(value);
  url.hash = '';
  url.search = '';
  const isAsset = /\.(?:css|js|mjs|png|jpe?g|svg|webp|ico|txt|xml|json|html|woff2?)$/i.test(url.pathname);
  if (!url.pathname.endsWith('/') && !isAsset) url.pathname += '/';
  return url.toString();
}

export function absoluteRoute(siteUrl, route) {
  const base = String(siteUrl).replace(/\/$/, '');
  if (!route || route === '/') return `${base}/`;
  const path = route.startsWith('/') ? route : `/${route}`;
  return trailingSlashUrl(`${base}${path}`);
}

export function compareRouteSets(generatedAbs, otherAbs) {
  const generated = new Set(generatedAbs);
  const other = new Set(otherAbs);
  return {
    generatedCount: generated.size,
    otherCount: other.size,
    missingFromOther: [...generated].filter((url) => !other.has(url)).sort(),
    extraInOther: [...other].filter((url) => !generated.has(url)).sort(),
  };
}

export function summarizeSitemapContinuity({ siteUrl, generatedRoutes, liveLocs, localSitemapLocs }) {
  const generatedAbs = (generatedRoutes || []).map((route) => absoluteRoute(siteUrl, route));
  const liveAbs = (liveLocs || []).map((url) => trailingSlashUrl(url));
  const vsLive = compareRouteSets(generatedAbs, liveAbs);
  const vsLocal = Array.isArray(localSitemapLocs)
    ? compareRouteSets(
        generatedAbs,
        localSitemapLocs.map((url) => trailingSlashUrl(url)),
      )
    : null;

  const missing = vsLive.missingFromOther.length;
  const extra = vsLive.extraInOther.length;
  const localMismatch = vsLocal
    ? vsLocal.missingFromOther.length + vsLocal.extraInOther.length
    : 0;
  const staleDeploy =
    vsLive.generatedCount > 0 && missing >= 10 && vsLive.generatedCount >= vsLive.otherCount * 1.25;

  return {
    generatedCount: vsLive.generatedCount,
    liveCount: vsLive.otherCount,
    localCount: vsLocal?.otherCount ?? null,
    missingFromLive: vsLive.missingFromOther,
    extraOnLive: vsLive.extraInOther,
    missingFromLocalSitemap: vsLocal?.missingFromOther ?? [],
    extraInLocalSitemap: vsLocal?.extraInOther ?? [],
    staleDeploy,
    ok: missing === 0 && extra === 0 && localMismatch === 0,
  };
}

export function continuityMessage(summary) {
  if (summary.staleDeploy) {
    return `Live sitemap is stale: ${summary.liveCount} URLs vs ${summary.generatedCount} in generated-routes.json (${summary.missingFromLive.length} missing from live, ${summary.extraOnLive.length} extra). Deploy the current sitemap so GSC can discover money pages.`;
  }
  if (summary.missingFromLive.length || summary.extraOnLive.length) {
    return `Live sitemap mismatch: ${summary.liveCount} live vs ${summary.generatedCount} generated (${summary.missingFromLive.length} missing, ${summary.extraOnLive.length} extra/retired).`;
  }
  if (summary.missingFromLocalSitemap.length || summary.extraInLocalSitemap.length) {
    return `Committed sitemap.xml is out of sync with generated-routes.json (${summary.missingFromLocalSitemap.length} missing, ${summary.extraInLocalSitemap.length} extra). Re-run the site generate-sitemap script.`;
  }
  return `Sitemap continuity ok (${summary.generatedCount} URLs).`;
}

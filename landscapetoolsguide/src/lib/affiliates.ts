/**
 * Affiliate links come from env vars after you join each vendor program.
 * Until then, pages link to official homepages (no commission).
 */
const AFFILIATE_ENV: Record<string, string | undefined> = {
  jobber: import.meta.env.VITE_AFFILIATE_JOBBER,
  'housecall-pro': import.meta.env.VITE_AFFILIATE_HOUSECALLPRO,
  lmn: import.meta.env.VITE_AFFILIATE_LMN,
  'service-autopilot': import.meta.env.VITE_AFFILIATE_SERVICE_AUTOPILOT,
  aspire: import.meta.env.VITE_AFFILIATE_ASPIRE,
  gorilladesk: import.meta.env.VITE_AFFILIATE_GORILLADESK,
  fieldpulse: import.meta.env.VITE_AFFILIATE_FIELDPULSE,
  singleops: import.meta.env.VITE_AFFILIATE_SINGLEOPS,
};

export function getAffiliateUrl(toolSlug: string, fallbackWebsite: string): string {
  const tracked = AFFILIATE_ENV[toolSlug]?.trim();
  return tracked && tracked.startsWith('http') ? tracked : fallbackWebsite;
}

export function isAffiliateLink(toolSlug: string): boolean {
  const url = AFFILIATE_ENV[toolSlug]?.trim();
  return Boolean(url && url.startsWith('http'));
}

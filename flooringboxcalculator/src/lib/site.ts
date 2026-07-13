export const SITE_URL =
  import.meta.env.VITE_SITE_URL?.replace(/\/$/, '') || 'https://flooringboxcalculator.com';

export const SITE_NAME = 'Flooring Box Calculator';

export const SITE_DOMAIN = 'flooringboxcalculator.com';

export const CONTACT_EMAIL = 'cashfreedom4us@gmail.com';

export const SITE_CONTENT_UPDATED = '2026-07-07';

/** Canonical URL with trailing slash (matches Cloudflare Pages). */
export function canonicalUrl(path: string = '/'): string {
  if (!path || path === '/') return `${SITE_URL}/`;
  const normalized = path.startsWith('/') ? path : `/${path}`;
  return `${SITE_URL}${normalized.endsWith('/') ? normalized : `${normalized}/`}`;
}

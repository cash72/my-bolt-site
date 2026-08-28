export const SITE_URL =
  import.meta.env.VITE_SITE_URL?.replace(/\/$/, '') || 'https://hvaccalculators.net';

export const SITE_NAME = 'HVAC Calculators';

export const SITE_DOMAIN = 'hvaccalculators.net';

export const CONTACT_EMAIL = 'cashfreedom4us@gmail.com';

export const SITE_CONTENT_UPDATED = '2026-08-27';

export const OG_IMAGE_URL = `${SITE_URL}/guides/images/mini-split-vs-window-ac.jpg`;

/** Canonical URL with trailing slash (matches Cloudflare Pages). */
export function canonicalUrl(path: string = '/'): string {
  if (!path || path === '/') return `${SITE_URL}/`;
  const normalized = path.startsWith('/') ? path : `/${path}`;
  return `${SITE_URL}${normalized.endsWith('/') ? normalized : `${normalized}/`}`;
}

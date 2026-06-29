export const SITE_URL =
  import.meta.env.VITE_SITE_URL?.replace(/\/$/, '') || 'https://satoshi-calc.com';

export const SITE_NAME = 'SatoshiCalc';

export const CONTACT_EMAIL = 'cashfreedom4us@gmail.com';

export const SITE_EDITOR = 'SatoshiCalc Editorial Team';

/** Visible on guides and legal pages; bump when content is materially updated. */
export const SITE_CONTENT_UPDATED = '2026-06-29';

export const OG_IMAGE_URL = `${SITE_URL}/og-image.png`;

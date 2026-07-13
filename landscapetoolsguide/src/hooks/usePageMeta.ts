import { useEffect } from 'react';
import { OG_IMAGE_URL, SITE_NAME, canonicalUrl } from '../lib/site';

interface PageMeta {
  title: string;
  description: string;
  path?: string;
  image?: string;
  ogType?: 'website' | 'article';
}

function upsertMeta(name: string, content: string, attr: 'name' | 'property' = 'name') {
  let el = document.querySelector(`meta[${attr}="${name}"]`);
  if (!el) {
    el = document.createElement('meta');
    el.setAttribute(attr, name);
    document.head.appendChild(el);
  }
  el.setAttribute('content', content);
}

function upsertCanonical(href: string) {
  let el = document.querySelector('link[rel="canonical"]') as HTMLLinkElement | null;
  if (!el) {
    el = document.createElement('link');
    el.rel = 'canonical';
    document.head.appendChild(el);
  }
  el.href = href;
}

/** Match Cloudflare Pages trailing-slash URLs in sitemap and canonical tags. */
function normalizePageUrl(path: string): string {
  return canonicalUrl(path);
}

export function usePageMeta({
  title,
  description,
  path = '',
  image = OG_IMAGE_URL,
  ogType = 'website',
}: PageMeta) {
  useEffect(() => {
    const fullTitle = title.includes(SITE_NAME) ? title : `${title} | ${SITE_NAME}`;
    const normalizedUrl = normalizePageUrl(path);

    document.title = fullTitle;
    upsertMeta('description', description);
    upsertMeta('og:title', fullTitle, 'property');
    upsertMeta('og:description', description, 'property');
    upsertMeta('og:url', normalizedUrl, 'property');
    upsertMeta('og:site_name', SITE_NAME, 'property');
    upsertMeta('og:type', ogType, 'property');
    upsertMeta('og:image', image, 'property');
    upsertMeta('twitter:card', 'summary_large_image');
    upsertMeta('twitter:title', fullTitle);
    upsertMeta('twitter:description', description);
    upsertMeta('twitter:url', normalizedUrl);
    upsertMeta('twitter:image', image);
    upsertCanonical(normalizedUrl);
  }, [title, description, path, image, ogType]);
}

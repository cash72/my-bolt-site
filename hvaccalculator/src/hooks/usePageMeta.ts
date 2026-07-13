import { useEffect } from 'react';
import { SITE_NAME, canonicalUrl } from '../lib/site';

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

export function usePageMeta({ title, description, path = '', image, ogType = 'website' }: PageMeta) {
  useEffect(() => {
    const fullTitle = title.includes(SITE_NAME) ? title : `${title} | ${SITE_NAME}`;
    const normalizedUrl = normalizePageUrl(path);

    document.title = fullTitle;
    upsertMeta('description', description);
    upsertMeta('og:type', ogType, 'property');
    upsertMeta('og:title', fullTitle, 'property');
    upsertMeta('og:description', description, 'property');
    upsertMeta('og:url', normalizedUrl, 'property');
    upsertMeta('twitter:title', fullTitle);
    upsertMeta('twitter:description', description);
    upsertMeta('twitter:url', normalizedUrl);
    upsertCanonical(normalizedUrl);
    if (image) {
      upsertMeta('og:image', image, 'property');
      upsertMeta('twitter:image', image);
      upsertMeta('twitter:card', 'summary_large_image');
    }
  }, [title, description, path, image, ogType]);
}

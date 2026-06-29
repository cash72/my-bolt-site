const GA_ID = import.meta.env.VITE_GA_MEASUREMENT_ID?.trim() || '';

declare global {
  interface Window {
    dataLayer?: unknown[];
    gtag?: (...args: unknown[]) => void;
  }
}

let analyticsReady = false;
const pendingPageViews: string[] = [];

function flushPendingPageViews() {
  while (pendingPageViews.length > 0) {
    const path = pendingPageViews.shift();
    if (path) sendPageView(path);
  }
}

function sendPageView(path: string) {
  if (!GA_ID || typeof window === 'undefined' || !window.gtag) return;

  window.gtag('event', 'page_view', {
    page_path: path,
    page_location: `${window.location.origin}${path}`,
  });
}

export function isAnalyticsEnabled(): boolean {
  return Boolean(GA_ID);
}

export function getAnalyticsId(): string {
  return GA_ID;
}

export function initAnalytics() {
  if (!GA_ID || typeof window === 'undefined') return;

  if (window.gtag) {
    analyticsReady = true;
    return;
  }

  window.dataLayer = window.dataLayer || [];
  window.gtag = function gtag(...args: unknown[]) {
    window.dataLayer?.push(args);
  };
  window.gtag('js', new Date());

  const existing = document.querySelector(`script[src*="googletagmanager.com/gtag/js?id=${GA_ID}"]`);
  if (existing) {
    analyticsReady = true;
    window.gtag('config', GA_ID, { anonymize_ip: true, send_page_view: false });
    flushPendingPageViews();
    return;
  }

  const script = document.createElement('script');
  script.async = true;
  script.src = `https://www.googletagmanager.com/gtag/js?id=${encodeURIComponent(GA_ID)}`;
  script.onload = () => {
    analyticsReady = true;
    window.gtag?.('config', GA_ID, { anonymize_ip: true, send_page_view: false });
    flushPendingPageViews();
  };
  document.head.appendChild(script);
}

/** Fire a GA4 page_view on SPA navigations (initial load + route changes). */
export function trackPageView(path: string) {
  if (!GA_ID || typeof window === 'undefined') return;

  if (!analyticsReady || !window.gtag) {
    if (!pendingPageViews.includes(path)) {
      pendingPageViews.push(path);
    }
    return;
  }

  sendPageView(path);
}

/** Track custom engagement events (affiliate clicks, copy actions, etc.). */
export function trackEvent(eventName: string, params: Record<string, string | number> = {}) {
  if (!GA_ID || typeof window === 'undefined' || !window.gtag) return;
  window.gtag('event', eventName, params);
}

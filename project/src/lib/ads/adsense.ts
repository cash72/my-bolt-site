import { ADSENSE_CLIENT } from './config';

declare global {
  interface Window {
    adsbygoogle?: unknown[];
  }
}

let scriptLoaded = false;
let scriptLoading = false;
const loadQueue: Array<() => void> = [];

export function loadAdSenseScript(): Promise<void> {
  if (typeof window === 'undefined' || !ADSENSE_CLIENT) {
    return Promise.resolve();
  }

  if (scriptLoaded) {
    return Promise.resolve();
  }

  return new Promise((resolve) => {
    loadQueue.push(resolve);

    if (scriptLoading) return;
    scriptLoading = true;

    const script = document.createElement('script');
    script.async = true;
    script.src = `https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${encodeURIComponent(ADSENSE_CLIENT)}`;
    script.crossOrigin = 'anonymous';
    script.onload = () => {
      scriptLoaded = true;
      loadQueue.splice(0).forEach((cb) => cb());
    };
    script.onerror = () => {
      scriptLoading = false;
      loadQueue.splice(0).forEach((cb) => cb());
    };
    document.head.appendChild(script);
  });
}

export async function pushAdSenseUnit(): Promise<void> {
  await loadAdSenseScript();
  if (!window.adsbygoogle) {
    window.adsbygoogle = [];
  }
  try {
    window.adsbygoogle.push({});
  } catch {
    // Ad blockers or script failures — ignore
  }
}

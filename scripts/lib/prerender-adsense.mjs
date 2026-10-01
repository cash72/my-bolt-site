/**
 * Keep AdSense site verification in prerendered HTML without baking
 * Puppeteer's session (managed show_ads_impl + empty ins) into dist.
 * Ad units stay gated on VITE_ADSENSE_ENABLED.
 */
import { fileURLToPath } from 'node:url';

export const ADSENSE_VERIFY_SCRIPT =
  '<script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-1132338970019438" crossorigin="anonymous"></script>';

export function sanitizePrerenderHtml(html) {
  let out = html
    .replace(/<script[^>]*src="https:\/\/pagead2\.googlesyndication\.com[^"]*"[^>]*>\s*<\/script>/gi, '')
    .replace(/<script[^>]*src="https:\/\/www\.googletagmanager\.com[^"]*"[^>]*>\s*<\/script>/gi, '')
    .replace(/<ins class="adsbygoogle[^"]*"[\s\S]*?<\/ins>/gi, '')
    .replace(/<iframe[^>]*(?:googlesyndication|aswift_|google_ads)[^>]*>[\s\S]*?<\/iframe>/gi, '');

  if (!out.includes('adsbygoogle.js?client=ca-pub-1132338970019438')) {
    if (out.includes('</head>')) {
      out = out.replace('</head>', `    ${ADSENSE_VERIFY_SCRIPT}\n  </head>`);
    } else {
      out = `${ADSENSE_VERIFY_SCRIPT}\n${out}`;
    }
  }
  return out;
}

if (process.argv[1] && fileURLToPath(import.meta.url) === process.argv[1]) {
  const dirty = `<!doctype html><html><head>
<script async="" src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-1132338970019438" crossorigin="anonymous"></script>
<script src="https://pagead2.googlesyndication.com/pagead/managed/js/adsense/m202609220101/show_ads_impl.js?bust=1"></script>
</head><body>
<ins class="adsbygoogle adsbygoogle-noablate" data-adsbygoogle-status="done" style="display: none !important;"></ins>
<main id="main-content">ok</main>
</body></html>`;
  const clean = sanitizePrerenderHtml(dirty);
  const ok =
    clean.includes('adsbygoogle.js?client=ca-pub-1132338970019438') &&
    !clean.includes('show_ads_impl') &&
    !clean.includes('<ins class="adsbygoogle') &&
    (clean.match(/adsbygoogle\.js\?client=/g) || []).length === 1;
  if (!ok) {
    console.error('prerender-adsense self-test failed\n', clean);
    process.exit(1);
  }
  console.log('prerender-adsense self-test passed');
}

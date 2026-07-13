import { useEffect } from 'react';
import { isAdsenseClientSet } from '../lib/ads/config';
import { loadAdSenseScript } from '../lib/ads/adsense';

/** Loads the AdSense script on every page (required for site verification during signup). */
export default function AdSenseSiteScript() {
  useEffect(() => {
    if (isAdsenseClientSet()) {
      loadAdSenseScript();
    }
  }, []);

  return null;
}

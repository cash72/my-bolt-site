import { useEffect, useRef, useState } from 'react';
import { useLocation } from 'react-router-dom';
import {
  AADS_SIZE,
  AADS_UNIT_ID,
  ADSENSE_CLIENT,
  getAdsenseSlot,
  isAAdsEnabled,
  isAdsenseEnabled,
  isAnyAdEnabled,
  type AdPlacement,
} from '../lib/ads/config';
import { pushAdSenseUnit } from '../lib/ads/adsense';

interface AdSlotProps {
  placement: AdPlacement;
  /** Show A-Ads when AdSense slot for this placement is not configured */
  allowAAdsFallback?: boolean;
  className?: string;
}

function AdLabel() {
  return (
    <p className="text-center text-xs text-slate-400 dark:text-slate-500 mb-2 uppercase tracking-wide">
      Advertisement
    </p>
  );
}

function AdSenseUnit({ slotId }: { slotId: string }) {
  const pushed = useRef(false);

  useEffect(() => {
    pushed.current = false;
  }, [slotId]);

  useEffect(() => {
    if (pushed.current) return;
    pushed.current = true;
    pushAdSenseUnit();
  }, [slotId]);

  return (
    <ins
      className="adsbygoogle block"
      style={{ display: 'block' }}
      data-ad-client={ADSENSE_CLIENT}
      data-ad-slot={slotId}
      data-ad-format="auto"
      data-full-width-responsive="true"
    />
  );
}

function AAdsUnit() {
  const src = AADS_SIZE
    ? `//acceptable.a-ads.com/${AADS_UNIT_ID}?size=${AADS_SIZE}`
    : `//acceptable.a-ads.com/${AADS_UNIT_ID}`;

  const [width, height] = AADS_SIZE ? AADS_SIZE.split('x').map(Number) : [728, 90];

  return (
    <iframe
      title="Advertisement"
      data-aa={AADS_UNIT_ID}
      src={src}
      style={{
        border: 0,
        padding: 0,
        width: AADS_SIZE ? `${width}px` : '100%',
        maxWidth: '100%',
        height: `${height}px`,
        overflow: 'hidden',
        backgroundColor: 'transparent',
        margin: '0 auto',
        display: 'block',
      }}
    />
  );
}

export default function AdSlot({ placement, allowAAdsFallback = true, className = '' }: AdSlotProps) {
  const location = useLocation();
  const [visible, setVisible] = useState(isAnyAdEnabled());

  useEffect(() => {
    setVisible(isAnyAdEnabled());
  }, [location.pathname]);

  if (!visible) return null;

  const adsenseSlot = getAdsenseSlot(placement);
  const showAdsense = isAdsenseEnabled() && Boolean(adsenseSlot);
  const showAAds = allowAAdsFallback && isAAdsEnabled() && !showAdsense;

  if (!showAdsense && !showAAds) return null;

  return (
    <aside
      className={`ad-slot my-8 ${className}`.trim()}
      aria-label="Advertisement"
      key={`${placement}-${location.pathname}`}
    >
      <AdLabel />
      <div className="rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-900/50 p-3 overflow-hidden">
        {showAdsense ? <AdSenseUnit slotId={adsenseSlot} /> : <AAdsUnit />}
      </div>
    </aside>
  );
}

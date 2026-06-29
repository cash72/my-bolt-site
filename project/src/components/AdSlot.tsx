import { useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import {
  AADS_SIZE,
  AADS_UNIT_ID,
  AD_PLACEMENTS,
  ADSENSE_CLIENT,
  getAdsenseSlot,
  hasAdsensePublisher,
  isAAdsEnabled,
  isAdsenseSlotConfigured,
  type AdPlacement,
} from '../lib/ads/config';
import { pushAdSenseUnit } from '../lib/ads/adsense';
import { useInView } from '../hooks/useInView';

interface AdSlotProps {
  placement: AdPlacement;
  /** Use A-Ads in this slot when no AdSense unit is configured for it */
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

function AdPlaceholder({ placement }: { placement: AdPlacement }) {
  const { minHeightClass } = AD_PLACEMENTS[placement];

  return (
    <div
      className={`${minHeightClass} w-full rounded-lg border border-dashed border-slate-200/80 dark:border-slate-700/80 bg-slate-100/40 dark:bg-slate-800/30`}
      aria-hidden="true"
    />
  );
}

function AdSenseUnit({ placement, slotId }: { placement: AdPlacement; slotId: string }) {
  const pushed = useRef(false);
  const { minHeightClass, adFormat } = AD_PLACEMENTS[placement];

  useEffect(() => {
    pushed.current = false;
  }, [slotId]);

  useEffect(() => {
    if (pushed.current) return;
    pushed.current = true;
    void pushAdSenseUnit();
  }, [slotId]);

  return (
    <div className={`${minHeightClass} w-full flex items-center justify-center`}>
      <ins
        className="adsbygoogle block w-full"
        style={{ display: 'block' }}
        data-ad-client={ADSENSE_CLIENT}
        data-ad-slot={slotId}
        data-ad-format={adFormat}
        data-full-width-responsive="true"
      />
    </div>
  );
}

function AAdsUnit({ placement }: { placement: AdPlacement }) {
  const { minHeightClass } = AD_PLACEMENTS[placement];
  const src = AADS_SIZE
    ? `//acceptable.a-ads.com/${AADS_UNIT_ID}?size=${AADS_SIZE}`
    : `//acceptable.a-ads.com/${AADS_UNIT_ID}`;

  const [width, height] = AADS_SIZE ? AADS_SIZE.split('x').map(Number) : [728, 90];

  return (
    <div className={`${minHeightClass} w-full flex items-center justify-center`}>
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
    </div>
  );
}

export default function AdSlot({ placement, allowAAdsFallback = true, className = '' }: AdSlotProps) {
  const location = useLocation();
  const { ref, inView } = useInView(placement === 'footer' ? '400px 0px' : '200px 0px');

  if (!hasAdsensePublisher() && !isAAdsEnabled()) {
    return null;
  }

  const adsenseSlot = getAdsenseSlot(placement);
  const showAdsense = isAdsenseSlotConfigured(placement);
  const showAAds = allowAAdsFallback && isAAdsEnabled() && !showAdsense;
  const { minHeightClass } = AD_PLACEMENTS[placement];

  return (
    <aside
      ref={ref}
      className={`ad-slot my-8 ${className}`.trim()}
      aria-label="Advertisement"
      data-ad-placement={placement}
      key={`${placement}-${location.pathname}`}
    >
      <AdLabel />
      <div className="rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-900/50 p-3 overflow-hidden">
        {!inView ? (
          <div className={`${minHeightClass} w-full`} aria-hidden="true" />
        ) : showAdsense ? (
          <AdSenseUnit placement={placement} slotId={adsenseSlot} />
        ) : showAAds ? (
          <AAdsUnit placement={placement} />
        ) : (
          <AdPlaceholder placement={placement} />
        )}
      </div>
    </aside>
  );
}

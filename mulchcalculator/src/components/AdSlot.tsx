import { useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import { ADSENSE_CLIENT, getAdsenseSlot, isAdsenseSlotConfigured, type AdPlacement } from '../lib/ads/config';
import { pushAdSenseUnit } from '../lib/ads/adsense';

interface AdSlotProps {
  placement: AdPlacement;
  className?: string;
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

export default function AdSlot({ placement, className = '' }: AdSlotProps) {
  const location = useLocation();

  if (
    (typeof window !== 'undefined' && (window as Window & { __PRERENDER__?: boolean }).__PRERENDER__) ||
    !isAdsenseSlotConfigured(placement)
  ) {
    return null;
  }

  const slotId = getAdsenseSlot(placement);

  return (
    <aside
      className={`my-8 ${className}`.trim()}
      aria-label="Advertisement"
      key={`${placement}-${location.pathname}`}
    >
      <p className="text-center text-xs text-slate-400 dark:text-slate-500 mb-2 uppercase tracking-wide">
        Advertisement
      </p>
      <div className="rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-900/50 p-3 overflow-hidden min-h-[90px]">
        <AdSenseUnit slotId={slotId} />
      </div>
    </aside>
  );
}

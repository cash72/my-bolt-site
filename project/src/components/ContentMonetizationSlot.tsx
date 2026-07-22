import { Link } from 'react-router-dom';
import { BookOpen, ChevronRight } from 'lucide-react';
import AdSlot from './AdSlot';
import { isAdsenseSlotConfigured } from '../lib/ads/config';
import type { GuideDef } from '../lib/guides';

interface ContentMonetizationSlotProps {
  placement: 'content' | 'footer';
  guides?: GuideDef[];
  className?: string;
  showAd?: boolean;
}

export default function ContentMonetizationSlot({
  placement,
  guides,
  className = '',
  showAd = true,
}: ContentMonetizationSlotProps) {
  const adOn = showAd && isAdsenseSlotConfigured(placement);
  const showGuides = placement === 'content' && Boolean(guides?.length);

  if (!adOn && !showGuides) {
    return null;
  }

  return (
    <div className={className}>
      {adOn ? <AdSlot placement={placement} className="my-0" /> : null}
      {showGuides ? (
        <aside
          className="my-8 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-6 sm:p-8 shadow-sm"
          aria-label="Related guides"
        >
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 rounded-xl bg-orange-100 dark:bg-orange-900/30 flex items-center justify-center">
              <BookOpen className="w-5 h-5 text-orange-600 dark:text-orange-400" aria-hidden="true" />
            </div>
            <h2 className="text-lg font-bold">Continue learning</h2>
          </div>
          <ul className="space-y-2">
            {guides!.map((guide) => (
              <li key={guide.slug}>
                <Link
                  to={guide.path}
                  className="flex items-center justify-between gap-3 rounded-xl border border-slate-100 dark:border-slate-800 px-4 py-3 text-sm font-medium text-slate-700 dark:text-slate-200 hover:border-orange-300 dark:hover:border-orange-700 hover:text-orange-600 dark:hover:text-orange-400 transition-colors"
                >
                  <span>{guide.breadcrumbLabel}</span>
                  <ChevronRight className="w-4 h-4 shrink-0 text-slate-400" aria-hidden="true" />
                </Link>
              </li>
            ))}
          </ul>
        </aside>
      ) : null}
    </div>
  );
}

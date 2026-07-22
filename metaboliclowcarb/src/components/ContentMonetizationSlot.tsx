import { Link } from 'react-router-dom';
import { BookOpen, ChevronRight } from 'lucide-react';
import AdSlot from './AdSlot';
import { isAdsenseSlotConfigured } from '../lib/ads/config';
import type { Guide } from '../lib/guides/types';

interface ContentMonetizationSlotProps {
  placement: 'content' | 'footer';
  guides?: Guide[];
  className?: string;
  /** When false, skip the ad unit and keep related links (e.g. calculator pages with a results ad). */
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
            <div className={`w-10 h-10 rounded-xl bg-teal-100 dark:bg-teal-900/30 flex items-center justify-center`}>
              <BookOpen className={`w-5 h-5 text-teal-600 dark:text-teal-400`} aria-hidden="true" />
            </div>
            <h2 className="text-lg font-bold">Continue reading</h2>
          </div>
          <ul className="space-y-2">
            {guides!.map((guide) => (
              <li key={guide.slug}>
                <Link
                  to={`/guides/${guide.slug}`}
                  className={`flex items-center justify-between gap-3 rounded-xl border border-slate-100 dark:border-slate-800 px-4 py-3 text-sm font-medium text-slate-700 dark:text-slate-200 hover:border-teal-300 dark:hover:border-teal-700 hover:text-teal-600 dark:hover:text-teal-400 transition-colors`}
                >
                  <span>{guide.title}</span>
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

import { Link } from 'react-router-dom';
import { BookOpen, Calculator, ChevronRight } from 'lucide-react';
import AdSlot from './AdSlot';
import { isAdsenseSlotConfigured } from '../lib/ads/config';
import type { Guide } from '../lib/guides/types';
import { LANDING_PAGES } from '../lib/landingPages';

interface ContentMonetizationSlotProps {
  placement: 'content' | 'footer';
  guides?: Guide[];
  relatedSlugs?: string[];
  className?: string;
  showAd?: boolean;
}

export default function ContentMonetizationSlot({
  placement,
  guides,
  relatedSlugs,
  className = '',
  showAd = true,
}: ContentMonetizationSlotProps) {
  const adOn = showAd && isAdsenseSlotConfigured(placement);
  const showGuideLinks = placement === 'content' && Boolean(guides?.length);
  const related = !showGuideLinks && relatedSlugs?.length
    ? relatedSlugs
        .map((slug) => LANDING_PAGES.find((p) => p.slug === slug))
        .filter((p): p is NonNullable<typeof p> => p !== undefined)
    : [];
  const showRelatedCalcs = placement === 'content' && related.length > 0;

  if (!adOn && !showGuideLinks && !showRelatedCalcs) {
    return null;
  }

  return (
    <div className={className}>
      {adOn ? <AdSlot placement={placement} className="my-0" /> : null}
      {showGuideLinks ? (
        <aside
          className="my-8 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-6 sm:p-8 shadow-sm"
          aria-label="Related guides"
        >
          <div className="flex items-center gap-3 mb-4">
            <div className={`w-10 h-10 rounded-xl bg-orange-100 dark:bg-orange-900/30 flex items-center justify-center`}>
              <BookOpen className={`w-5 h-5 text-orange-600 dark:text-orange-400`} aria-hidden="true" />
            </div>
            <h2 className="text-lg font-bold">Continue reading</h2>
          </div>
          <ul className="space-y-2">
            {guides!.map((guide) => (
              <li key={guide.slug}>
                <Link
                  to={`/guides/${guide.slug}`}
                  className={`flex items-center justify-between gap-3 rounded-xl border border-slate-100 dark:border-slate-800 px-4 py-3 text-sm font-medium text-slate-700 dark:text-slate-200 hover:border-orange-300 dark:hover:border-orange-700 hover:text-orange-600 dark:hover:text-orange-400 transition-colors`}
                >
                  <span>{guide.title}</span>
                  <ChevronRight className="w-4 h-4 shrink-0 text-slate-400" aria-hidden="true" />
                </Link>
              </li>
            ))}
          </ul>
        </aside>
      ) : null}
      {showRelatedCalcs ? (
        <aside
          className="my-8 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-6 sm:p-8 shadow-sm"
          aria-label="Related calculators"
        >
          <div className="flex items-center gap-3 mb-4">
            <div className={`w-10 h-10 rounded-xl bg-orange-100 dark:bg-orange-900/30 flex items-center justify-center`}>
              <Calculator className={`w-5 h-5 text-orange-600 dark:text-orange-400`} aria-hidden="true" />
            </div>
            <h2 className="text-lg font-bold">Related calculators</h2>
          </div>
          <ul className="space-y-2">
            {related.map((page) => (
              <li key={page.slug}>
                <Link
                  to={page.path}
                  className={`flex items-center justify-between gap-3 rounded-xl border border-slate-100 dark:border-slate-800 px-4 py-3 text-sm font-medium text-slate-700 dark:text-slate-200 hover:border-orange-300 dark:hover:border-orange-700 hover:text-orange-600 dark:hover:text-orange-400 transition-colors`}
                >
                  <span>{page.breadcrumbLabel}</span>
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

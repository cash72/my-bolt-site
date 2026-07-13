import { BookOpen, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import AdSlot from './AdSlot';
import { isAnyAdEnabled } from '../lib/ads/config';
import type { Guide } from '../lib/guides/types';

interface ContentMonetizationSlotProps {
  placement: 'content' | 'footer';
  guides?: Guide[];
  className?: string;
}

export default function ContentMonetizationSlot({
  placement,
  guides,
  className = '',
}: ContentMonetizationSlotProps) {
  if (isAnyAdEnabled()) {
    return <AdSlot placement={placement} className={className} />;
  }

  if (placement !== 'content' || !guides?.length) return null;

  return (
    <aside
      className={`my-8 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-6 sm:p-8 shadow-sm ${className}`.trim()}
      aria-label="Related guides"
    >
      <div className="flex items-center gap-3 mb-4">
        <div className="w-10 h-10 rounded-xl bg-sky-100 dark:bg-sky-900/30 flex items-center justify-center">
          <BookOpen className="w-5 h-5 text-sky-600 dark:text-sky-400" aria-hidden="true" />
        </div>
        <h2 className="text-lg font-bold">Continue reading</h2>
      </div>
      <ul className="space-y-2">
        {guides.map((guide) => (
          <li key={guide.slug}>
            <Link
              to={`/guides/${guide.slug}`}
              className="flex items-center justify-between gap-3 rounded-xl border border-slate-100 dark:border-slate-800 px-4 py-3 text-sm font-medium text-slate-700 dark:text-slate-200 hover:border-sky-300 dark:hover:border-sky-700 hover:text-sky-600 dark:hover:text-sky-400 transition-colors"
            >
              <span>{guide.title}</span>
              <ChevronRight className="w-4 h-4 shrink-0 text-slate-400" aria-hidden="true" />
            </Link>
          </li>
        ))}
      </ul>
    </aside>
  );
}

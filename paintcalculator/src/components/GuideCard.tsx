import { Link } from 'react-router-dom';
import type { Guide } from '../lib/guides/types';
import { GUIDE_CATEGORY_LABEL } from '../lib/guides/types';

export function GuideCard({ guide }: { guide: Guide }) {
  return (
    <div className="h-full flex flex-col rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/50 overflow-hidden">
      <Link
        to={`/guides/${guide.slug}`}
        className="block flex-1 p-5 hover:bg-blue-50/50 dark:hover:bg-blue-950/20 transition-colors"
      >
        <p className="text-xs font-medium text-blue-700 dark:text-blue-400 mb-1">
          {GUIDE_CATEGORY_LABEL[guide.category]}
        </p>
        <h2 className="font-semibold text-slate-900 dark:text-slate-100 mb-2 leading-snug">{guide.title}</h2>
        <p className="text-sm text-slate-600 dark:text-slate-400 line-clamp-3 mb-3">{guide.description}</p>
        <p className="text-xs text-slate-500">{guide.readMinutes} min read</p>
      </Link>
      {guide.toolPath && guide.toolLabel && (
        <div className="px-5 py-3 border-t border-slate-100 dark:border-slate-800 bg-slate-50 dark:bg-slate-900/80">
          <Link
            to={guide.toolPath}
            className="text-xs font-semibold text-blue-700 dark:text-blue-400 hover:underline"
          >
            {guide.toolLabel} →
          </Link>
        </div>
      )}
    </div>
  );
}

import { Link } from 'react-router-dom';
import { getAffiliateUrl, isAffiliateLink } from '../lib/affiliates';
import type { Tool } from '../lib/tools/types';
import { CREW_SIZE_LABEL, TOOL_CATEGORY_LABEL } from '../lib/tools/types';

export function ToolCard({ tool }: { tool: Tool }) {
  return (
    <Link
      to={`/tools/${tool.slug}`}
      className="block rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/50 p-5 hover:border-emerald-300 dark:hover:border-emerald-800 transition-colors"
    >
      <p className="text-xs font-medium text-emerald-700 dark:text-emerald-400 mb-1">
        {TOOL_CATEGORY_LABEL[tool.category]}
      </p>
      <h2 className="font-semibold text-slate-900 dark:text-slate-100 mb-2">{tool.name}</h2>
      <p className="text-sm text-slate-600 dark:text-slate-400 line-clamp-2 mb-3">{tool.tagline}</p>
      <div className="flex flex-wrap gap-2 text-xs">
        <span className="px-2 py-0.5 rounded-full bg-emerald-50 dark:bg-emerald-950/40 text-emerald-800 dark:text-emerald-300">
          From ~${tool.startingPriceUsd}/mo
        </span>
        {tool.bestFor.slice(0, 2).map((size) => (
          <span
            key={size}
            className="px-2 py-0.5 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400"
          >
            {CREW_SIZE_LABEL[size]}
          </span>
        ))}
      </div>
    </Link>
  );
}

export function AffiliateButton({
  toolSlug,
  websiteUrl,
  label,
  className = '',
}: {
  toolSlug: string;
  websiteUrl: string;
  label: string;
  className?: string;
}) {
  const href = getAffiliateUrl(toolSlug, websiteUrl);
  const sponsored = isAffiliateLink(toolSlug);

  return (
    <a
      href={href}
      target="_blank"
      rel={`noopener noreferrer${sponsored ? ' sponsored' : ''}`}
      className={
        className ||
        'inline-flex items-center justify-center px-5 py-2.5 rounded-lg bg-emerald-600 hover:bg-emerald-700 text-white font-semibold text-sm transition-colors'
      }
    >
      {label}
    </a>
  );
}

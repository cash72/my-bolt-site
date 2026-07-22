import { Link, Navigate, useParams } from 'react-router-dom';
import { usePageMeta } from '../hooks/usePageMeta';
import { useJsonLd } from '../hooks/useJsonLd';
import { AffiliateButton } from '../components/ToolCard';
import { ToolCard } from '../components/ToolCard';
import ContentMonetizationSlot from '../components/ContentMonetizationSlot';
import SessionDeepener from '../components/SessionDeepener';
import { getToolBySlug } from '../lib/tools/tools';
import { getGuideBySlug } from '../lib/guides/guides';
import { CREW_SIZE_LABEL, TOOL_CATEGORY_LABEL } from '../lib/tools/types';
import { breadcrumbSchema, pageUrl } from '../lib/schema/jsonLd';
import { TOOL_NEXT_STEPS } from '../lib/sessionNextSteps';
import { SITE_NAME } from '../lib/site';

const FEATURE_LABELS: { key: keyof import('../lib/tools/types').ToolFeatures; label: string }[] = [
  { key: 'routeOptimization', label: 'Route optimization' },
  { key: 'recurringBilling', label: 'Recurring billing' },
  { key: 'quickbooks', label: 'QuickBooks sync' },
  { key: 'mobileApp', label: 'Mobile app' },
  { key: 'snowModule', label: 'Snow module' },
  { key: 'designBuild', label: 'Design-build estimating' },
  { key: 'chemicalTracking', label: 'Chemical tracking' },
];

export default function ToolPage() {
  const { slug } = useParams<{ slug: string }>();
  const tool = slug ? getToolBySlug(slug) : undefined;

  usePageMeta({
    title: tool ? `${tool.name} Review for Landscapers` : 'Tool',
    description: tool?.description ?? '',
    path: tool ? `/tools/${tool.slug}` : '/tools',
  });

  useJsonLd(
    'tool-breadcrumb-schema',
    tool
      ? breadcrumbSchema([
          { name: 'Home', path: '/' },
          { name: 'Tools', path: '/tools' },
          { name: tool.name, path: `/tools/${tool.slug}` },
        ])
      : null
  );

  if (!tool) {
    return <Navigate to="/tools" replace />;
  }

  const relatedTools = (tool.relatedToolSlugs ?? [])
    .map((s) => getToolBySlug(s))
    .filter((t): t is NonNullable<typeof t> => t != null);

  const relatedGuides = (tool.relatedGuideSlugs ?? [])
    .map((s) => getGuideBySlug(s))
    .filter((g): g is NonNullable<typeof g> => g != null);

  return (
    <main id="main-content" className="max-w-3xl mx-auto px-4 sm:px-6 py-8 sm:py-12" role="main">
      <nav className="text-sm text-slate-500 dark:text-slate-400 mb-6">
        <Link to="/tools" className="hover:text-emerald-600 dark:hover:text-emerald-400">
          Tools
        </Link>
        <span className="mx-2">/</span>
        <span className="text-slate-700 dark:text-slate-300">{tool.name}</span>
      </nav>

      <p className="text-xs font-medium text-emerald-700 dark:text-emerald-400 mb-2">
        {TOOL_CATEGORY_LABEL[tool.category]}
      </p>
      <h1 className="text-2xl sm:text-3xl font-bold tracking-tight mb-2">{tool.name}</h1>
      <p className="text-lg text-slate-600 dark:text-slate-400 mb-6">{tool.tagline}</p>

      <div className="flex flex-wrap items-center gap-4 mb-8 p-5 rounded-xl border border-emerald-200 dark:border-emerald-900/50 bg-emerald-50/50 dark:bg-emerald-950/20">
        <div>
          <p className="text-sm font-medium text-slate-800 dark:text-slate-200">
            From ~${tool.startingPriceUsd > 0 ? `${tool.startingPriceUsd}/mo` : 'custom pricing'}
          </p>
          <p className="text-xs text-slate-600 dark:text-slate-400 mt-1">{tool.pricingNote}</p>
        </div>
        <AffiliateButton toolSlug={tool.slug} websiteUrl={tool.websiteUrl} label={`Visit ${tool.name} →`} />
      </div>

      <p className="text-sm text-slate-700 dark:text-slate-300 leading-relaxed mb-8">{tool.description}</p>

      <section className="mb-8">
        <h2 className="text-lg font-semibold mb-3">Best for</h2>
        <div className="flex flex-wrap gap-2">
          {tool.bestFor.map((size) => (
            <span
              key={size}
              className="px-3 py-1 rounded-full text-sm bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300"
            >
              {CREW_SIZE_LABEL[size]}
            </span>
          ))}
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-lg font-semibold mb-3">Features</h2>
        <ul className="grid sm:grid-cols-2 gap-2 text-sm">
          {FEATURE_LABELS.map(({ key, label }) => (
            <li key={key} className="flex items-center gap-2">
              <span
                className={
                  tool.features[key]
                    ? 'text-emerald-600 dark:text-emerald-400'
                    : 'text-slate-400 dark:text-slate-600'
                }
              >
                {tool.features[key] ? '✓' : '—'}
              </span>
              {label}
            </li>
          ))}
        </ul>
      </section>

      <div className="grid sm:grid-cols-2 gap-6 mb-8">
        <section>
          <h2 className="text-lg font-semibold mb-3">Pros</h2>
          <ul className="list-disc list-inside space-y-2 text-sm text-slate-700 dark:text-slate-300">
            {tool.pros.map((p) => (
              <li key={p}>{p}</li>
            ))}
          </ul>
        </section>
        <section>
          <h2 className="text-lg font-semibold mb-3">Cons</h2>
          <ul className="list-disc list-inside space-y-2 text-sm text-slate-700 dark:text-slate-300">
            {tool.cons.map((c) => (
              <li key={c}>{c}</li>
            ))}
          </ul>
        </section>
      </div>

      <section className="mb-8 p-5 rounded-xl bg-slate-100 dark:bg-slate-900/50">
        <h2 className="text-lg font-semibold mb-2">Verdict</h2>
        <p className="text-sm text-slate-700 dark:text-slate-300 leading-relaxed">{tool.verdict}</p>
      </section>

      <ContentMonetizationSlot placement="content" guides={relatedGuides} className="mb-8" />

      {relatedTools.length > 0 && (
        <section className="mb-8">
          <h2 className="text-lg font-semibold mb-4">Compare with</h2>
          <div className="grid sm:grid-cols-2 gap-4">
            {relatedTools.slice(0, 4).map((t) => (
              <ToolCard key={t.slug} tool={t} />
            ))}
          </div>
        </section>
      )}

      <SessionDeepener links={TOOL_NEXT_STEPS} className="mb-8" />

      <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed border-t border-slate-200 dark:border-slate-800 pt-6">
        {SITE_NAME} — independent review. Pricing verified from public sources; confirm on{' '}
        <a href={pageUrl(`/tools/${tool.slug}`)} className="underline">
          {tool.name}
        </a>{' '}
        before purchase.{' '}
        <Link to="/disclaimer" className="text-emerald-600 dark:text-emerald-400 hover:underline">
          Affiliate disclosure
        </Link>
      </p>
    </main>
  );
}

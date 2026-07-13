import { Link, Navigate, useParams } from 'react-router-dom';
import { usePageMeta } from '../hooks/usePageMeta';
import { useJsonLd } from '../hooks/useJsonLd';
import { AffiliateButton } from '../components/ToolCard';
import AdSlot from '../components/AdSlot';
import { getComparisonBySlug, COMPARISONS } from '../lib/comparisons/comparisons';
import { getToolBySlug } from '../lib/tools/tools';
import { breadcrumbSchema } from '../lib/schema/jsonLd';

export default function ComparePage() {
  const { slug } = useParams<{ slug: string }>();
  const comparison = slug ? getComparisonBySlug(slug) : undefined;
  const tools = comparison?.toolSlugs.map((s) => getToolBySlug(s)).filter(Boolean) ?? [];
  const relatedComparisons = comparison
    ? COMPARISONS.filter((c) => c.slug !== comparison.slug).slice(0, 3)
    : [];

  usePageMeta({
    title: comparison?.title ?? 'Compare',
    description: comparison?.description ?? '',
    path: comparison ? `/compare/${comparison.slug}` : '/compare',
  });

  useJsonLd(
    'compare-faq-schema',
    comparison
      ? {
          '@context': 'https://schema.org',
          '@type': 'FAQPage',
          mainEntity: comparison.faqs.map((faq) => ({
            '@type': 'Question',
            name: faq.question,
            acceptedAnswer: { '@type': 'Answer', text: faq.answer },
          })),
        }
      : null
  );

  useJsonLd(
    'compare-breadcrumb-schema',
    comparison
      ? breadcrumbSchema([
          { name: 'Home', path: '/' },
          { name: 'Compare', path: '/compare' },
          { name: comparison.title, path: `/compare/${comparison.slug}` },
        ])
      : null
  );

  if (!comparison) {
    return <Navigate to="/compare" replace />;
  }

  return (
    <main id="main-content" className="max-w-3xl mx-auto px-4 sm:px-6 py-8 sm:py-12" role="main">
      <nav className="text-sm text-slate-500 dark:text-slate-400 mb-6">
        <Link to="/compare" className="hover:text-emerald-600 dark:hover:text-emerald-400">
          Compare
        </Link>
        <span className="mx-2">/</span>
        <span className="text-slate-700 dark:text-slate-300">{comparison.title}</span>
      </nav>

      <h1 className="text-2xl sm:text-3xl font-bold tracking-tight mb-4">{comparison.title}</h1>
      <p className="text-slate-600 dark:text-slate-400 mb-8 leading-relaxed">{comparison.summary}</p>

      {tools.length === 2 && (
        <div className="grid sm:grid-cols-2 gap-4 mb-10">
          {tools.map((tool) =>
            tool ? (
              <div
                key={tool.slug}
                className="p-4 rounded-xl border border-slate-200 dark:border-slate-800 text-center"
              >
                <p className="font-semibold mb-2">{tool.name}</p>
                <p className="text-sm text-slate-600 dark:text-slate-400 mb-3">
                  From ~${tool.startingPriceUsd}/mo
                </p>
                <AffiliateButton toolSlug={tool.slug} websiteUrl={tool.websiteUrl} label="Visit site" />
                <p className="mt-3">
                  <Link
                    to={`/tools/${tool.slug}`}
                    className="text-sm text-emerald-600 dark:text-emerald-400 hover:underline"
                  >
                    Full review
                  </Link>
                </p>
              </div>
            ) : null
          )}
        </div>
      )}

      <article className="space-y-8 mb-10">
        {comparison.sections.map((section) => (
          <section key={section.heading}>
            <h2 className="text-lg font-semibold mb-3">{section.heading}</h2>
            {section.paragraphs.map((p) => (
              <p key={p} className="text-sm text-slate-700 dark:text-slate-300 leading-relaxed mb-3">
                {p}
              </p>
            ))}
          </section>
        ))}
      </article>

      <AdSlot placement="content" className="mb-8" />

      <section aria-labelledby="compare-faq">
        <h2 id="compare-faq" className="text-lg font-semibold mb-4">
          FAQ
        </h2>
        <div className="space-y-5">
          {comparison.faqs.map((faq) => (
            <article key={faq.question}>
              <h3 className="font-medium text-sm text-slate-800 dark:text-slate-200">{faq.question}</h3>
              <p className="text-sm text-slate-600 dark:text-slate-400 mt-1 leading-relaxed">{faq.answer}</p>
            </article>
          ))}
        </div>
      </section>

      {relatedComparisons.length > 0 && (
        <section className="mt-10 pt-8 border-t border-slate-200 dark:border-slate-800" aria-labelledby="related-compare">
          <h2 id="related-compare" className="text-lg font-semibold mb-4">
            More comparisons
          </h2>
          <ul className="space-y-3">
            {relatedComparisons.map((c) => (
              <li key={c.slug}>
                <Link
                  to={`/compare/${c.slug}`}
                  className="text-emerald-700 dark:text-emerald-400 font-medium hover:underline"
                >
                  {c.title}
                </Link>
                <p className="text-sm text-slate-600 dark:text-slate-400 mt-0.5">{c.summary}</p>
              </li>
            ))}
          </ul>
        </section>
      )}
    </main>
  );
}

import { Link, Navigate, useParams } from 'react-router-dom';
import { usePageMeta } from '../hooks/usePageMeta';
import { useJsonLd } from '../hooks/useJsonLd';
import { ToolCard } from '../components/ToolCard';
import AdSlot from '../components/AdSlot';
import { getAlternativesBySlug } from '../lib/alternatives/alternatives';
import { getToolBySlug } from '../lib/tools/tools';
import { breadcrumbSchema } from '../lib/schema/jsonLd';

export default function AlternativesPage() {
  const { slug } = useParams<{ slug: string }>();
  const page = slug ? getAlternativesBySlug(slug) : undefined;
  const sourceTool = page ? getToolBySlug(page.sourceToolSlug) : undefined;
  const alternatives = (page?.alternativeSlugs ?? [])
    .map((s) => getToolBySlug(s))
    .filter((t): t is NonNullable<typeof t> => t != null);

  usePageMeta({
    title: page?.title ?? 'Alternatives',
    description: page?.description ?? '',
    path: page ? `/alternatives/${page.slug}` : '/compare',
  });

  useJsonLd(
    'alternatives-faq-schema',
    page
      ? {
          '@context': 'https://schema.org',
          '@type': 'FAQPage',
          mainEntity: page.faqs.map((faq) => ({
            '@type': 'Question',
            name: faq.question,
            acceptedAnswer: { '@type': 'Answer', text: faq.answer },
          })),
        }
      : null
  );

  useJsonLd(
    'alternatives-breadcrumb-schema',
    page
      ? breadcrumbSchema([
          { name: 'Home', path: '/' },
          { name: 'Compare', path: '/compare' },
          { name: page.title, path: `/alternatives/${page.slug}` },
        ])
      : null
  );

  if (!page) {
    return <Navigate to="/compare" replace />;
  }

  return (
    <main id="main-content" className="max-w-3xl mx-auto px-4 sm:px-6 py-8 sm:py-12" role="main">
      <nav className="text-sm text-slate-500 dark:text-slate-400 mb-6">
        <Link to="/compare" className="hover:text-emerald-600 dark:hover:text-emerald-400">
          Compare
        </Link>
        <span className="mx-2">/</span>
        <span className="text-slate-700 dark:text-slate-300">{page.title}</span>
      </nav>

      <h1 className="text-2xl sm:text-3xl font-bold tracking-tight mb-4">{page.title}</h1>
      <p className="text-slate-600 dark:text-slate-400 mb-4 leading-relaxed">{page.intro}</p>
      {sourceTool && (
        <p className="text-sm mb-8">
          Replacing or comparing against{' '}
          <Link to={`/tools/${sourceTool.slug}`} className="text-emerald-600 dark:text-emerald-400 hover:underline">
            {sourceTool.name}
          </Link>
          .
        </p>
      )}

      <div className="grid sm:grid-cols-2 gap-4 mb-10">
        {alternatives.map((tool) => (
          <ToolCard key={tool.slug} tool={tool} />
        ))}
      </div>

      <AdSlot placement="content" className="mb-8" />

      <section aria-labelledby="alt-faq">
        <h2 id="alt-faq" className="text-lg font-semibold mb-4">
          FAQ
        </h2>
        <div className="space-y-5">
          {page.faqs.map((faq) => (
            <article key={faq.question}>
              <h3 className="font-medium text-sm text-slate-800 dark:text-slate-200">{faq.question}</h3>
              <p className="text-sm text-slate-600 dark:text-slate-400 mt-1 leading-relaxed">{faq.answer}</p>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}

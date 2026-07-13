import { Link, Navigate, useParams } from 'react-router-dom';
import { usePageMeta } from '../hooks/usePageMeta';
import { useJsonLd } from '../hooks/useJsonLd';
import { AffiliateButton } from '../components/ToolCard';
import AdSlot from '../components/AdSlot';
import { getBestPageBySlug } from '../lib/best/bestPages';
import { getToolBySlug } from '../lib/tools/tools';
import { breadcrumbSchema } from '../lib/schema/jsonLd';

export default function BestPage() {
  const { slug } = useParams<{ slug: string }>();
  const page = slug ? getBestPageBySlug(slug) : undefined;
  const tools = (page?.toolSlugs ?? [])
    .map((s) => getToolBySlug(s))
    .filter((t): t is NonNullable<typeof t> => t != null);

  usePageMeta({
    title: page?.title ?? 'Best picks',
    description: page?.description ?? '',
    path: page ? `/best/${page.slug}` : '/',
  });

  useJsonLd(
    'best-faq-schema',
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
    'best-breadcrumb-schema',
    page
      ? breadcrumbSchema([
          { name: 'Home', path: '/' },
          { name: page.title, path: `/best/${page.slug}` },
        ])
      : null
  );

  if (!page) {
    return <Navigate to="/" replace />;
  }

  return (
    <main id="main-content" className="max-w-3xl mx-auto px-4 sm:px-6 py-8 sm:py-12" role="main">
      <nav className="text-sm text-slate-500 dark:text-slate-400 mb-6">
        <Link to="/" className="hover:text-emerald-600 dark:hover:text-emerald-400">
          Home
        </Link>
        <span className="mx-2">/</span>
        <span className="text-slate-700 dark:text-slate-300">{page.title}</span>
      </nav>

      <h1 className="text-2xl sm:text-3xl font-bold tracking-tight mb-4">{page.title}</h1>
      <p className="text-slate-600 dark:text-slate-400 mb-8 leading-relaxed">{page.intro}</p>

      <ol className="space-y-6 mb-10">
        {tools.map((tool, index) => (
          <li
            key={tool.slug}
            className="p-5 rounded-xl border border-slate-200 dark:border-slate-800"
          >
            <div className="flex flex-wrap items-start justify-between gap-4 mb-3">
              <div>
                <span className="text-xs font-medium text-emerald-700 dark:text-emerald-400">
                  #{index + 1}
                </span>
                <h2 className="text-lg font-semibold">
                  <Link to={`/tools/${tool.slug}`} className="hover:text-emerald-600 dark:hover:text-emerald-400">
                    {tool.name}
                  </Link>
                </h2>
              </div>
              <AffiliateButton toolSlug={tool.slug} websiteUrl={tool.websiteUrl} label="Visit site" />
            </div>
            <p className="text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
              {page.pickNotes[tool.slug] ?? tool.tagline}
            </p>
          </li>
        ))}
      </ol>

      <AdSlot placement="content" className="mb-8" />

      <section aria-labelledby="best-faq">
        <h2 id="best-faq" className="text-lg font-semibold mb-4">
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

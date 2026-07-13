import { Link, Navigate, useParams } from 'react-router-dom';
import { usePageMeta } from '../hooks/usePageMeta';
import { useJsonLd } from '../hooks/useJsonLd';
import ContentMonetizationSlot from '../components/ContentMonetizationSlot';
import { ToolCard } from '../components/ToolCard';
import { GuideCard } from '../components/GuideCard';
import { getGuideBySlug, GUIDES } from '../lib/guides/guides';
import { GUIDE_CATEGORY_LABEL } from '../lib/guides/types';
import { getGuideImagePath, getGuideImageUrl } from '../lib/guides/images';
import { getToolBySlug } from '../lib/tools/tools';
import { breadcrumbSchema } from '../lib/schema/jsonLd';
import { renderEditorialText } from '../lib/renderEditorialText';
import { SITE_NAME, SITE_URL, canonicalUrl } from '../lib/site';

export default function GuidePage() {
  const { slug } = useParams<{ slug: string }>();
  const guide = slug ? getGuideBySlug(slug) : undefined;

  usePageMeta({
    title: guide ? guide.title : 'Guide',
    description: guide?.description ?? '',
    path: guide ? `/guides/${guide.slug}` : '/guides',
    image: guide ? getGuideImageUrl(guide, SITE_URL) : undefined,
    ogType: 'article',
  });

  useJsonLd(
    'guide-faq-schema',
    guide
      ? {
          '@context': 'https://schema.org',
          '@type': 'FAQPage',
          mainEntity: guide.faqs.map((faq) => ({
            '@type': 'Question',
            name: faq.question,
            acceptedAnswer: { '@type': 'Answer', text: faq.answer },
          })),
        }
      : null
  );

  useJsonLd(
    'guide-article-schema',
    guide
      ? {
          '@context': 'https://schema.org',
          '@type': 'Article',
          headline: guide.title,
          description: guide.description,
          image: [getGuideImageUrl(guide, SITE_URL)],
          url: canonicalUrl(`/guides/${guide.slug}`),
          author: { '@type': 'Organization', name: SITE_NAME },
          publisher: { '@type': 'Organization', name: SITE_NAME },
          articleSection: GUIDE_CATEGORY_LABEL[guide.category],
        }
      : null
  );

  useJsonLd(
    'guide-breadcrumb-schema',
    guide
      ? breadcrumbSchema([
          { name: 'Home', path: '/' },
          { name: 'Guides', path: '/guides' },
          { name: guide.title, path: `/guides/${guide.slug}` },
        ])
      : null
  );

  if (!guide) {
    return <Navigate to="/guides" replace />;
  }

  const relatedGuides = (guide.relatedGuideSlugs ?? GUIDES.filter((g) => g.slug !== guide.slug).map((g) => g.slug))
    .map((s) => getGuideBySlug(s))
    .filter((g): g is NonNullable<typeof g> => g != null)
    .slice(0, 3);

  const relatedTools = (guide.relatedToolSlugs ?? [])
    .map((s) => getToolBySlug(s))
    .filter((t): t is NonNullable<typeof t> => t != null);

  return (
    <main id="main-content" className="max-w-3xl mx-auto px-4 sm:px-6 py-8 sm:py-12" role="main">
      <nav className="text-sm text-slate-500 dark:text-slate-400 mb-6">
        <Link to="/guides" className="hover:text-emerald-600 dark:hover:text-emerald-400">
          Guides
        </Link>
        <span className="mx-2">/</span>
        <span className="text-slate-700 dark:text-slate-300">{guide.title}</span>
      </nav>

      <p className="text-xs font-medium text-emerald-700 dark:text-emerald-400 mb-2">
        {GUIDE_CATEGORY_LABEL[guide.category]} · {guide.readMinutes} min read
      </p>
      <h1 className="text-2xl sm:text-3xl font-bold tracking-tight mb-3">{guide.title}</h1>
      <p className="text-slate-600 dark:text-slate-400 mb-6 leading-relaxed">{guide.description}</p>

      <figure className="mb-8 rounded-2xl overflow-hidden border border-slate-200 dark:border-slate-800">
        <img
          src={getGuideImagePath(guide)}
          alt={`${guide.title} — landscaping business photo`}
          className="w-full h-auto max-h-80 object-cover"
          width={1200}
          height={630}
          loading="eager"
        />
      </figure>

      {guide.ctaPath && guide.ctaLabel && (
        <div className="mb-8 p-4 rounded-xl border border-emerald-200 dark:border-emerald-900/50 bg-emerald-50/50 dark:bg-emerald-950/20">
          <p className="text-sm font-medium text-slate-800 dark:text-slate-200 mb-1">Next step</p>
          <Link to={guide.ctaPath} className="text-emerald-700 dark:text-emerald-400 font-semibold hover:underline">
            {guide.ctaLabel} →
          </Link>
        </div>
      )}

      <article className="space-y-8">
        {guide.sections.map((section) => (
          <section key={section.heading}>
            <h2 className="text-lg font-semibold text-slate-900 dark:text-slate-100 mb-3">{section.heading}</h2>
            {section.paragraphs?.map((p) => (
              <p key={p} className="text-sm text-slate-700 dark:text-slate-300 leading-relaxed mb-3">
                {renderEditorialText(p)}
              </p>
            ))}
            {section.bullets && (
              <ul className="list-disc list-inside space-y-2 text-sm text-slate-700 dark:text-slate-300">
                {section.bullets.map((b) => (
                  <li key={b} className="leading-relaxed">
                    {renderEditorialText(b)}
                  </li>
                ))}
              </ul>
            )}
          </section>
        ))}
      </article>

      <ContentMonetizationSlot placement="content" guides={relatedGuides} className="my-10" />

      {relatedTools.length > 0 && (
        <section className="mb-8">
          <h2 className="text-lg font-semibold mb-4">Tools mentioned</h2>
          <div className="grid sm:grid-cols-2 gap-4">
            {relatedTools.map((tool) => (
              <ToolCard key={tool.slug} tool={tool} />
            ))}
          </div>
        </section>
      )}

      <section className="mb-8" aria-labelledby="guide-faq">
        <h2 id="guide-faq" className="text-lg font-semibold mb-4">
          Frequently asked questions
        </h2>
        <div className="space-y-5">
          {guide.faqs.map((faq) => (
            <article key={faq.question}>
              <h3 className="font-medium text-slate-800 dark:text-slate-200 text-sm">{faq.question}</h3>
              <p className="text-sm text-slate-600 dark:text-slate-400 mt-1 leading-relaxed">{faq.answer}</p>
            </article>
          ))}
        </div>
      </section>

      {relatedGuides.length > 0 && (
        <section className="mb-8" aria-labelledby="related-guides">
          <h2 id="related-guides" className="text-lg font-semibold mb-4">
            Related guides
          </h2>
          <div className="grid sm:grid-cols-2 gap-4">
            {relatedGuides.map((g) => (
              <GuideCard key={g.slug} guide={g} />
            ))}
          </div>
        </section>
      )}

      <p className="text-xs text-slate-500 dark:text-slate-400 mt-8 leading-relaxed border-t border-slate-200 dark:border-slate-800 pt-6">
        {SITE_NAME} — independent buying advice.{' '}
        <Link to="/disclaimer" className="text-emerald-600 dark:text-emerald-400 hover:underline">
          Read disclaimer
        </Link>
      </p>
    </main>
  );
}

import { Link, Navigate, useParams } from 'react-router-dom';
import { usePageMeta } from '../hooks/usePageMeta';
import { useJsonLd } from '../hooks/useJsonLd';
import { getGuideBySlug } from '../lib/guides/guides';
import { getGuideImagePath, getGuideImageUrl } from '../lib/guides/images';
import { GUIDE_CATEGORY_LABEL } from '../lib/guides/types';
import { getRecipeBySlug } from '../lib/recipes/recipes';
import AdSlot from '../components/AdSlot';
import ContentMonetizationSlot from '../components/ContentMonetizationSlot';
import { GuideCard } from '../components/GuideCard';
import { breadcrumbSchema, pageUrl } from '../lib/schema/jsonLd';
import { renderEditorialText } from '../lib/renderEditorialText';
import { SITE_NAME, SITE_URL } from '../lib/site';

const GUIDE_DATE_PUBLISHED = '2026-07-12';
const GUIDE_DATE_MODIFIED = '2026-08-23';

export default function GuidePage() {
  const { slug } = useParams<{ slug: string }>();
  const guide = slug ? getGuideBySlug(slug) : undefined;

  usePageMeta({
    title: guide ? `${guide.title} — ${SITE_NAME}` : 'Guide',
    description: guide?.description ?? '',
    path: guide ? `/guides/${guide.slug}` : '/guides',
    image: guide ? getGuideImageUrl(guide) : undefined,
    ogType: 'article',
  });

  useJsonLd(
    'guide-breadcrumb-schema',
    guide
      ? breadcrumbSchema([
          { name: 'Guides', path: '/guides' },
          { name: guide.title, path: `/guides/${guide.slug}` },
        ])
      : null
  );

  useJsonLd(
    'guide-faq-schema',
    guide
      ? {
          '@context': 'https://schema.org',
          '@type': 'FAQPage',
          mainEntity: guide.faqs.map((faq) => ({
            '@type': 'Question',
            name: faq.question,
            acceptedAnswer: {
              '@type': 'Answer',
              text: faq.answer.replace(/\[([^\]]+)\]\([^)]+\)/g, '$1'),
            },
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
          datePublished: GUIDE_DATE_PUBLISHED,
          dateModified: GUIDE_DATE_MODIFIED,
          image: [getGuideImageUrl(guide)],
          url: pageUrl(`/guides/${guide.slug}`),
          mainEntityOfPage: pageUrl(`/guides/${guide.slug}`),
          author: { '@type': 'Organization', name: 'Metabolic Low Carb Editorial Team', url: `${SITE_URL}/` },
          publisher: { '@type': 'Organization', name: SITE_NAME, url: `${SITE_URL}/` },
          articleSection: GUIDE_CATEGORY_LABEL[guide.category],
          citation: guide.sources.map((source) => source.url),
        }
      : null
  );

  if (!guide) {
    return <Navigate to="/guides" replace />;
  }

  const relatedGuides = (guide.relatedGuideSlugs ?? [])
    .map((s) => getGuideBySlug(s))
    .filter((g): g is NonNullable<typeof g> => g != null)
    .slice(0, 3);

  const relatedRecipes = (guide.relatedRecipeSlugs ?? [])
    .map((s) => getRecipeBySlug(s))
    .filter((r): r is NonNullable<typeof r> => r != null)
    .slice(0, 4);

  return (
    <main id="main-content" className="max-w-3xl mx-auto px-4 sm:px-6 py-8 sm:py-12" role="main">
      <nav className="text-sm text-slate-500 dark:text-slate-400 mb-6">
        <Link to="/guides" className="hover:text-teal-600 dark:hover:text-teal-400">
          Guides
        </Link>
        <span className="mx-2">/</span>
        <span className="text-slate-700 dark:text-slate-300">{guide.title}</span>
      </nav>

      <figure className="mb-6 rounded-xl overflow-hidden border border-slate-200 dark:border-slate-800">
        <img
          src={getGuideImagePath(guide)}
          alt={`${guide.title} — metabolic health photo`}
          width={1200}
          height={630}
          className="w-full aspect-[40/21] object-cover"
          loading="eager"
          decoding="async"
        />
      </figure>

      <p className="text-xs font-medium text-teal-700 dark:text-teal-400 mb-2">
        {GUIDE_CATEGORY_LABEL[guide.category]} · {guide.readMinutes} min read
      </p>
      <h1 className="text-2xl sm:text-3xl font-bold tracking-tight mb-3">{guide.title}</h1>
      <div className="text-sm text-slate-600 dark:text-slate-400 mb-4 space-y-1">
        <p>By Metabolic Low Carb Editorial Team</p>
        <p>
          Editorially updated July 26, 2026 ·{' '}
          <Link to="/editorial-policy" className="text-teal-600 dark:text-teal-400 hover:underline">
            Not medically reviewed
          </Link>
        </p>
      </div>
      <p className="text-slate-600 dark:text-slate-400 mb-6 leading-relaxed">{guide.description}</p>

      {guide.toolPath && guide.toolLabel && (
        <div className="mb-8 p-4 rounded-xl border border-teal-200 dark:border-teal-900/50 bg-teal-50/50 dark:bg-teal-950/20">
          <p className="text-sm font-medium text-slate-800 dark:text-slate-200 mb-1">Try the tool</p>
          <Link
            to={guide.toolPath}
            className="text-teal-700 dark:text-teal-400 font-semibold hover:underline"
          >
            {guide.toolLabel} →
          </Link>
        </div>
      )}

      <article className="prose-slate space-y-8">
        {guide.sections.map((section, sectionIndex) => (
          <div key={section.heading}>
            <section>
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
            {sectionIndex === 1 && guide.sections.length > 2 && (
              <AdSlot placement="midGuide" className="my-8" />
            )}
          </div>
        ))}
      </article>

      <ContentMonetizationSlot placement="content" guides={relatedGuides} className="my-10" />

      <section className="mb-8" aria-labelledby="guide-faq">
        <h2 id="guide-faq" className="text-lg font-semibold mb-4">
          Frequently asked questions
        </h2>
        <div className="space-y-5">
          {guide.faqs.map((faq) => (
            <article key={faq.question}>
              <h3 className="font-medium text-slate-800 dark:text-slate-200 text-sm">{faq.question}</h3>
              <p className="text-sm text-slate-600 dark:text-slate-400 mt-1 leading-relaxed">
                {renderEditorialText(faq.answer)}
              </p>
            </article>
          ))}
        </div>
      </section>

      <section className="mb-8" aria-labelledby="guide-sources">
        <h2 id="guide-sources" className="text-lg font-semibold mb-3">
          Sources and further reading
        </h2>
        <p className="text-sm text-slate-600 dark:text-slate-400 mb-3 leading-relaxed">
          These sources support general education about the topics discussed. They do not establish an individual
          diagnosis or treatment plan.
        </p>
        <ul className="list-disc pl-5 space-y-2">
          {guide.sources.map((source) => (
            <li key={source.url} className="text-sm text-slate-700 dark:text-slate-300">
              <a
                href={source.url}
                target="_blank"
                rel="noreferrer"
                className="text-teal-600 dark:text-teal-400 hover:underline"
              >
                {source.title}
              </a>{' '}
              <span className="text-slate-500 dark:text-slate-400">— {source.publisher}</span>
            </li>
          ))}
        </ul>
      </section>

      {relatedRecipes.length > 0 && (
        <section className="mb-8" aria-labelledby="related-recipes">
          <h2 id="related-recipes" className="text-lg font-semibold mb-3">
            Related recipes
          </h2>
          <ul className="space-y-2">
            {relatedRecipes.map((recipe) => (
              <li key={recipe.slug}>
                <Link
                  to={`/recipes/${recipe.slug}`}
                  className="text-sm text-teal-600 dark:text-teal-400 hover:underline"
                >
                  {recipe.title}
                </Link>
                <span className="text-xs text-slate-500 ml-2">~{recipe.netCarbsPerServing}g net carbs</span>
              </li>
            ))}
          </ul>
        </section>
      )}

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
        {SITE_NAME} provides educational content only — not medical advice, diagnosis, or treatment. Talk to your
        healthcare provider before changing diet, fasting, or medications.{' '}
        <Link to="/disclaimer" className="text-teal-600 dark:text-teal-400 hover:underline">
          Read disclaimer
        </Link>
      </p>
    </main>
  );
}

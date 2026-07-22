import { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { ArrowRight, BookOpen, ChevronRight, Clock } from 'lucide-react';
import { usePageMeta } from '../hooks/usePageMeta';
import { getAffiliateProducts } from '../lib/affiliates';
import {
  AffiliateDisclosureBanner,
  AffiliateProductGrid,
} from '../components/AffiliateProductCard';
import {
  getGuideBySlug,
  FEATURED_GUIDES,
  type GuideDef,
} from '../lib/guides';
import ContentMonetizationSlot from '../components/ContentMonetizationSlot';
import AdSlot from '../components/AdSlot';
import { LANDING_PAGE_BY_SLUG } from '../lib/landingPages';
import { getGuideImagePath, getGuideImageUrl } from '../lib/guideImages';
import { renderEditorialText } from '../lib/renderEditorialText';
import { SITE_EDITOR, SITE_URL, canonicalUrl } from '../lib/site';

function formatDisplayDate(iso: string): string {
  return new Date(`${iso}T12:00:00`).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
}

function GuideBreadcrumbs({ page }: { page: GuideDef }) {
  return (
    <nav aria-label="Breadcrumb" className="mb-6 text-sm text-slate-500 dark:text-slate-400">
      <ol className="flex flex-wrap items-center gap-1">
        <li>
          <Link to="/" className="hover:text-orange-600 dark:hover:text-orange-400">
            Home
          </Link>
        </li>
        <li aria-hidden="true">
          <ChevronRight className="w-3.5 h-3.5 inline" />
        </li>
        <li>
          <Link to="/guides" className="hover:text-orange-600 dark:hover:text-orange-400">
            Guides
          </Link>
        </li>
        <li aria-hidden="true">
          <ChevronRight className="w-3.5 h-3.5 inline" />
        </li>
        <li className="text-slate-700 dark:text-slate-300 font-medium">{page.breadcrumbLabel}</li>
      </ol>
    </nav>
  );
}

function GuideContent({ guide }: { guide: GuideDef }) {
  usePageMeta({
    title: guide.title,
    description: guide.description,
    path: guide.path,
    image: getGuideImageUrl(guide),
    ogType: 'article',
  });

  useEffect(() => {
    const faqId = 'guide-faq-schema';
    let faqScript = document.getElementById(faqId) as HTMLScriptElement | null;
    if (!faqScript) {
      faqScript = document.createElement('script');
      faqScript.id = faqId;
      faqScript.type = 'application/ld+json';
      document.head.appendChild(faqScript);
    }

    faqScript.textContent = JSON.stringify({
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: guide.faq.map((item) => ({
        '@type': 'Question',
        name: item.q,
        acceptedAnswer: { '@type': 'Answer', text: item.a },
      })),
    });

    const articleId = 'guide-article-schema';
    let articleScript = document.getElementById(articleId) as HTMLScriptElement | null;
    if (!articleScript) {
      articleScript = document.createElement('script');
      articleScript.id = articleId;
      articleScript.type = 'application/ld+json';
      document.head.appendChild(articleScript);
    }

    articleScript.textContent = JSON.stringify({
      '@context': 'https://schema.org',
      '@type': 'Article',
      headline: guide.h1,
      description: guide.description,
      url: canonicalUrl(guide.path),
      datePublished: guide.datePublished,
      dateModified: guide.dateModified,
      image: [getGuideImageUrl(guide)],
      author: { '@type': 'Organization', name: SITE_EDITOR },
      publisher: { '@type': 'Organization', name: 'SatoshiCalc', url: SITE_URL },
    });

    const breadcrumbId = 'guide-breadcrumb-schema';
    let breadcrumbScript = document.getElementById(breadcrumbId) as HTMLScriptElement | null;
    if (!breadcrumbScript) {
      breadcrumbScript = document.createElement('script');
      breadcrumbScript.id = breadcrumbId;
      breadcrumbScript.type = 'application/ld+json';
      document.head.appendChild(breadcrumbScript);
    }

    breadcrumbScript.textContent = JSON.stringify({
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        {
          '@type': 'ListItem',
          position: 1,
          name: 'Home',
          item: canonicalUrl('/'),
        },
        {
          '@type': 'ListItem',
          position: 2,
          name: 'Guides',
          item: canonicalUrl('/guides'),
        },
        {
          '@type': 'ListItem',
          position: 3,
          name: guide.breadcrumbLabel,
          item: canonicalUrl(guide.path),
        },
      ],
    });

    return () => {
      document.getElementById(faqId)?.remove();
      document.getElementById(articleId)?.remove();
      document.getElementById(breadcrumbId)?.remove();
    };
  }, [guide]);

  const relatedGuides = guide.relatedGuideSlugs
    .map((slug) => getGuideBySlug(slug))
    .filter(Boolean) as GuideDef[];

  const relatedLandings = guide.relatedLandingPaths
    .map((path) => {
      const slug = path.replace(/^\//, '');
      return LANDING_PAGE_BY_SLUG.get(slug);
    })
    .filter(Boolean);

  return (
    <main id="main-content" className="max-w-3xl mx-auto px-4 sm:px-6 py-8 sm:py-12" role="main">
      <GuideBreadcrumbs page={guide} />

      <header className="mb-8">
        <div className="flex items-center gap-2 text-sm text-slate-500 dark:text-slate-400 mb-3">
          <BookOpen className="w-4 h-4" aria-hidden="true" />
          <span className="flex items-center gap-1">
            <Clock className="w-3.5 h-3.5" aria-hidden="true" />
            {guide.readTimeMinutes} min read
          </span>
          {guide.hasAffiliateLinks && (
            <>
              <span aria-hidden="true">·</span>
              <span>Contains affiliate links</span>
            </>
          )}
          <span aria-hidden="true">·</span>
          <span>Updated {formatDisplayDate(guide.dateModified)}</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-bold tracking-tight mb-4">{guide.h1}</h1>
        <p className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed">{guide.intro}</p>
      </header>

      <figure className="mb-8 rounded-2xl overflow-hidden border border-slate-200 dark:border-slate-800">
        <img
          src={getGuideImagePath(guide)}
          alt={`${guide.h1} — Bitcoin guide`}
          width={1200}
          height={630}
          className="w-full aspect-[40/21] object-cover"
          loading="eager"
          decoding="async"
        />
      </figure>

      {guide.hasAffiliateLinks && <AffiliateDisclosureBanner />}

      <article className="prose prose-slate dark:prose-invert max-w-none">
        {guide.sections.map((section, sectionIndex) => {
          const products = section.productIds ? getAffiliateProducts(section.productIds) : [];
          return (
            <div key={section.heading}>
              <section className="mb-10">
                <h2 className="text-xl font-bold text-slate-900 dark:text-slate-100">{section.heading}</h2>
                {section.paragraphs?.map((p, i) => (
                  <p key={i}>{renderEditorialText(p)}</p>
                ))}
                {section.bullets && (
                  <ul className="list-disc list-inside space-y-2 text-sm">
                    {section.bullets.map((b, i) => (
                      <li key={i}>{renderEditorialText(b)}</li>
                    ))}
                  </ul>
                )}
                {products.length > 0 && <AffiliateProductGrid products={products} />}
              </section>
              {sectionIndex === 1 && guide.sections.length > 2 && (
                <AdSlot placement="midGuide" className="my-8 not-prose" />
              )}
            </div>
          );
        })}
      </article>

      <ContentMonetizationSlot
        placement="content"
        guides={relatedGuides.length ? relatedGuides : FEATURED_GUIDES.slice(0, 4)}
      />

      <section className="mt-12 mb-10" aria-label="FAQ">
        <h2 className="text-xl font-bold mb-4 text-slate-900 dark:text-slate-100">Frequently asked questions</h2>
        {guide.faq[0] && (
          <div className="mb-6 rounded-xl border border-orange-100 dark:border-orange-900/40 bg-orange-50/50 dark:bg-orange-950/20 p-4 sm:p-5">
            <p className="text-sm font-semibold text-slate-800 dark:text-slate-200 uppercase tracking-wide mb-3">
              Quick answer
            </p>
            <h3 className="font-semibold text-slate-900 dark:text-slate-100">{guide.faq[0].q}</h3>
            <p className="mt-1 text-slate-600 dark:text-slate-300 leading-relaxed">{guide.faq[0].a}</p>
          </div>
        )}
        <div className="space-y-3">
          {guide.faq.slice(1).map((item) => (
            <details
              key={item.q}
              className="group border border-slate-200 dark:border-slate-800 rounded-xl open:bg-slate-50 dark:open:bg-slate-850"
            >
              <summary className="flex items-center justify-between cursor-pointer p-4 list-none font-medium text-slate-800 dark:text-slate-200">
                {item.q}
              </summary>
              <div className="px-4 pb-4 text-slate-600 dark:text-slate-300 leading-relaxed">{item.a}</div>
            </details>
          ))}
        </div>
      </section>

      {relatedLandings.length > 0 && (
        <section className="mb-10" aria-label="Live converters">
          <h2 className="text-xl font-bold mb-4 text-slate-900 dark:text-slate-100">Live converters</h2>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {relatedLandings.map((page) => (
              <li key={page!.slug}>
                <Link
                  to={page!.path}
                  className="block rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 px-4 py-3 text-sm font-medium hover:border-orange-300 dark:hover:border-orange-700 transition-colors"
                >
                  {page!.breadcrumbLabel}
                </Link>
              </li>
            ))}
          </ul>
        </section>
      )}

      {relatedGuides.length > 0 && (
        <section className="mb-10" aria-label="Related guides">
          <h2 className="text-xl font-bold mb-4 text-slate-900 dark:text-slate-100">Related guides</h2>
          <ul className="space-y-2">
            {relatedGuides.map((g) => (
              <li key={g.slug}>
                <Link
                  to={g.path}
                  className="inline-flex items-center gap-2 text-orange-600 dark:text-orange-400 hover:underline font-medium"
                >
                  {g.breadcrumbLabel}
                  <ArrowRight className="w-3.5 h-3.5" aria-hidden="true" />
                </Link>
              </li>
            ))}
          </ul>
        </section>
      )}

      <section className="text-center pt-6 border-t border-slate-200 dark:border-slate-800">
        <Link
          to="/"
          className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-orange-500 text-white font-semibold hover:bg-orange-600 transition-colors"
        >
          Open Satoshi converter
          <ArrowRight className="w-4 h-4" aria-hidden="true" />
        </Link>
      </section>
    </main>
  );
}

export default function GuidePageRoute() {
  const { guideSlug } = useParams<{ guideSlug: string }>();
  return <GuidePage slug={guideSlug} />;
}

function GuidePage({ slug }: { slug: string | undefined }) {
  const guide = getGuideBySlug(slug);

  if (!guide) {
    return (
      <main id="main-content" className="max-w-3xl mx-auto px-4 sm:px-6 py-16" role="main">
        <h1 className="text-2xl font-bold mb-4">Guide not found</h1>
        <Link to="/guides" className="text-orange-600 dark:text-orange-400 hover:underline">
          Browse all guides
        </Link>
      </main>
    );
  }

  return <GuideContent guide={guide} />;
}

export function GuidesIndexContent() {
  usePageMeta({
    title: 'Bitcoin Guides — Buy, Convert & Store Safely',
    description:
      'Free educational guides on buying Bitcoin, Satoshis, USD conversion, hardware wallets, self-custody, and running your own node.',
    path: '/guides',
  });

  return (
    <main id="main-content" className="max-w-5xl mx-auto px-4 sm:px-6 py-8 sm:py-12" role="main">
      <header className="mb-10">
        <h1 className="text-3xl sm:text-4xl font-bold tracking-tight mb-4">Bitcoin Guides</h1>
        <p className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed max-w-3xl">
          Educational articles on Satoshis, converting to fiat, and Bitcoin sovereignty — organized from beginner
          basics through self-custody and running your own node. Pair these with our{' '}
          <Link to="/" className="text-orange-600 dark:text-orange-400 hover:underline">
            live converter
          </Link>{' '}
          and{' '}
          <Link to="/conversions" className="text-orange-600 dark:text-orange-400 hover:underline">
            conversion directory
          </Link>
          .
        </p>
        <div className="mt-6 grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-3xl text-sm">
          <div className="rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-4">
            <h2 className="font-semibold text-slate-900 dark:text-slate-100 mb-1">Beginner</h2>
            <p className="text-slate-600 dark:text-slate-400">
              What is a Satoshi, how many sats in a Bitcoin, USD conversion math, and how to buy your first stack.
            </p>
          </div>
          <div className="rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-4">
            <h2 className="font-semibold text-slate-900 dark:text-slate-100 mb-1">Self-custody</h2>
            <p className="text-slate-600 dark:text-slate-400">
              Storing Bitcoin safely, hardware wallets, seed phrase backup, and sovereignty habits.
            </p>
          </div>
          <div className="rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-4">
            <h2 className="font-semibold text-slate-900 dark:text-slate-100 mb-1">Advanced</h2>
            <p className="text-slate-600 dark:text-slate-400">
              Running your own node, verifying balances, and reducing trust in third parties.
            </p>
          </div>
        </div>
      </header>

      <ContentMonetizationSlot placement="content" guides={FEATURED_GUIDES.slice(0, 5)} />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {FEATURED_GUIDES.map((guide) => (
          <article
            key={guide.slug}
            className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-6 shadow-sm hover:border-orange-200 dark:hover:border-orange-800/50 transition-colors"
          >
            <div className="flex items-center gap-2 text-xs text-slate-500 dark:text-slate-400 mb-3">
              <Clock className="w-3.5 h-3.5" aria-hidden="true" />
              {guide.readTimeMinutes} min read
              {guide.hasAffiliateLinks && (
                <>
                  <span aria-hidden="true">·</span>
                  <span>Affiliate links</span>
                </>
              )}
            </div>
            <h2 className="text-xl font-bold mb-2 text-slate-900 dark:text-slate-100">
              <Link to={guide.path} className="hover:text-orange-600 dark:hover:text-orange-400">
                {guide.h1}
              </Link>
            </h2>
            <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed mb-4">{guide.intro}</p>
            <Link
              to={guide.path}
              className="inline-flex items-center gap-1 text-sm font-semibold text-orange-600 dark:text-orange-400 hover:underline"
            >
              Read guide
              <ArrowRight className="w-3.5 h-3.5" aria-hidden="true" />
            </Link>
          </article>
        ))}
      </div>
    </main>
  );
}

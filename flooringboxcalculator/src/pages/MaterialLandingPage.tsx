import { useEffect } from 'react';
import { Link, Navigate, useParams } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';
import { usePageMeta } from '../hooks/usePageMeta';
import FlooringCalculator from '../components/FlooringCalculator';
import ContentMonetizationSlot from '../components/ContentMonetizationSlot';
import { hasResultsAdUnit } from '../lib/ads/config';
import { getLandingEditorial } from '../lib/landingEditorial';
import { getGuidesForLanding, getRelatedLandingPages } from '../lib/landingHelpers';
import { getLandingPageBySlug } from '../lib/landingPages';
import { renderEditorialText } from '../lib/renderEditorialText';
import { canonicalUrl, SITE_NAME } from '../lib/site';

function Breadcrumbs({ label }: { label: string }) {
  return (
    <nav aria-label="Breadcrumb" className="mb-6 text-sm text-slate-500 dark:text-slate-400">
      <ol className="flex flex-wrap items-center gap-1">
        <li>
          <Link to="/" className="hover:text-emerald-600 dark:hover:text-emerald-400">
            Home
          </Link>
        </li>
        <li aria-hidden="true">
          <ChevronRight className="w-3.5 h-3.5 inline" />
        </li>
        <li className="text-slate-700 dark:text-slate-300 font-medium">{label}</li>
      </ol>
    </nav>
  );
}

export default function MaterialLandingPage() {
  const { slug } = useParams<{ slug: string }>();
  const page = slug ? getLandingPageBySlug(slug) : undefined;
  const editorial = slug ? getLandingEditorial(slug) : undefined;
  const relatedGuides = page ? getGuidesForLanding(page) : [];
  const relatedPages = page ? getRelatedLandingPages(page) : [];
  const pageIntro = editorial?.intro ?? page?.intro;

  usePageMeta({
    title: page?.title ?? 'Calculator',
    description: page?.description ?? '',
    path: page?.path ?? '/',
  });

  useEffect(() => {
    if (!page) return;

    const scriptId = 'landing-faq-schema';
    let script = document.getElementById(scriptId) as HTMLScriptElement | null;
    if (!script) {
      script = document.createElement('script');
      script.id = scriptId;
      script.type = 'application/ld+json';
      document.head.appendChild(script);
    }

    script.textContent = JSON.stringify({
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: page.faqs.map((faq) => ({
        '@type': 'Question',
        name: faq.question,
        acceptedAnswer: {
          '@type': 'Answer',
          text: faq.answer,
        },
      })),
    });

    const breadcrumbId = 'landing-breadcrumb-schema';
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
          name: page.breadcrumbLabel,
          item: canonicalUrl(page.path),
        },
      ],
    });

    return () => {
      document.getElementById(scriptId)?.remove();
      document.getElementById(breadcrumbId)?.remove();
    };
  }, [page]);

  if (!page) {
    return <Navigate to="/" replace />;
  }

  return (
    <main id="main-content" className="max-w-5xl mx-auto px-4 sm:px-6 py-8 sm:py-12" role="main">
      <Breadcrumbs label={page.breadcrumbLabel} />

      <FlooringCalculator
        initialMaterial={page.material}
        heading={page.h1}
        subheading={pageIntro ?? page.intro}
      />

      <ContentMonetizationSlot placement="content" guides={relatedGuides} showAd={!hasResultsAdUnit()} />

      {relatedGuides.length > 0 && (
        <section className="mt-12" aria-label="Related guides">
          <h2 className="text-xl font-semibold mb-4">Related guides</h2>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {relatedGuides.map((guide) => (
              <li key={guide.slug}>
                <div className="rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 px-4 py-3">
                  <Link
                    to={`/guides/${guide.slug}`}
                    className="block text-sm font-medium hover:text-emerald-700 dark:hover:text-emerald-400 transition-colors"
                  >
                    {guide.title}
                  </Link>
                  {guide.toolPath && guide.toolLabel && (
                    <Link
                      to={guide.toolPath}
                      className="mt-1 block text-xs font-medium text-emerald-600 dark:text-emerald-400 hover:underline"
                    >
                      {guide.toolLabel} →
                    </Link>
                  )}
                </div>
              </li>
            ))}
          </ul>
        </section>
      )}

      {editorial && (
        <section className="mt-16 pt-10 border-t border-slate-200 dark:border-slate-800">
          <div className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 p-6 sm:p-8 shadow-sm space-y-6 text-slate-600 dark:text-slate-300 leading-relaxed">
            {editorial.sections.map((section) => (
              <div key={section.heading}>
                <h2 className="text-xl font-bold text-slate-900 dark:text-slate-100 mb-3">
                  {section.heading}
                </h2>
                {section.paragraphs.map((paragraph, i) => (
                  <p key={i} className={i > 0 ? 'mt-3' : undefined}>
                    {renderEditorialText(paragraph)}
                  </p>
                ))}
              </div>
            ))}
          </div>
        </section>
      )}

      <section className="mt-16 pt-10 border-t border-slate-200 dark:border-slate-800" aria-labelledby="page-faq">
        <h2 id="page-faq" className="text-xl font-semibold mb-4">
          Frequently asked questions
        </h2>
        <div className="space-y-5">
          {page.faqs.map((faq) => (
            <article key={faq.question}>
              <h3 className="font-medium text-slate-800 dark:text-slate-200">{faq.question}</h3>
              <p className="text-sm text-slate-600 dark:text-slate-400 mt-1 leading-relaxed">{faq.answer}</p>
            </article>
          ))}
        </div>
      </section>

      {relatedPages.length > 0 && (
        <section className="mt-12" aria-label="Related calculators">
          <h2 className="text-xl font-semibold mb-4">Related calculators</h2>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {relatedPages.map((related) => (
              <li key={related.slug}>
                <Link
                  to={related.path}
                  className="block rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 px-4 py-3 text-sm font-medium hover:border-emerald-300 dark:hover:border-emerald-700 transition-colors"
                >
                  {related.breadcrumbLabel}
                </Link>
              </li>
            ))}
          </ul>
        </section>
      )}

      <p className="mt-10 text-xs text-slate-400">
        {SITE_NAME} · {canonicalUrl(page.path)}
      </p>
    </main>
  );
}

import { useEffect } from 'react';
import { Link, Navigate, useParams } from 'react-router-dom';
import { usePageMeta } from '../hooks/usePageMeta';
import { useJsonLd } from '../hooks/useJsonLd';
import MetabolicTools from '../components/MetabolicTools';
import FastingClock from '../components/FastingClock';
import TdeeCalculator from '../components/TdeeCalculator';
import ContentMonetizationSlot from '../components/ContentMonetizationSlot';
import { hasResultsAdUnit } from '../lib/ads/config';
import { GuideCard } from '../components/GuideCard';
import { getGuideBySlug } from '../lib/guides/guides';
import { getLandingEditorial } from '../lib/landingEditorial';
import { FEATURED_LANDING_LINKS, getLandingPageBySlug } from '../lib/landingPages';
import { renderEditorialText } from '../lib/renderEditorialText';
import { breadcrumbSchema } from '../lib/schema/jsonLd';
import { OG_IMAGE_URL, SITE_NAME, SITE_URL } from '../lib/site';

export default function ToolLandingPage() {
  const { slug } = useParams<{ slug: string }>();
  const page = slug ? getLandingPageBySlug(slug) : undefined;
  const editorial = slug ? getLandingEditorial(slug) : undefined;
  const pageIntro = editorial?.intro ?? page?.intro;

  usePageMeta({
    title: page?.title ?? 'Calculator',
    description: page?.description ?? '',
    path: page?.path ?? '/',
    image: OG_IMAGE_URL,
  });

  useJsonLd(
    'landing-breadcrumb-schema',
    page
      ? breadcrumbSchema([
          { name: 'Calculator', path: '/' },
          { name: page.breadcrumbLabel, path: page.path },
        ])
      : null
  );

  useEffect(() => {
    if (!page) return;

    const appScriptId = 'landing-app-schema';
    let appScript = document.getElementById(appScriptId) as HTMLScriptElement | null;
    if (!appScript) {
      appScript = document.createElement('script');
      appScript.id = appScriptId;
      appScript.type = 'application/ld+json';
      document.head.appendChild(appScript);
    }

    appScript.textContent = JSON.stringify({
      '@context': 'https://schema.org',
      '@type': 'WebApplication',
      name: page.h1,
      description: page.description,
      url: `${SITE_URL}${page.path.endsWith('/') ? page.path : `${page.path}/`}`,
      applicationCategory: 'HealthApplication',
      operatingSystem: 'Any',
      offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
    });

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

    return () => {
      document.getElementById('landing-app-schema')?.remove();
      document.getElementById(scriptId)?.remove();
    };
  }, [page]);

  if (!page) {
    return <Navigate to="/" replace />;
  }

  const relatedGuides = (page.relatedGuideSlugs ?? [])
    .map((s) => getGuideBySlug(s))
    .filter((g): g is NonNullable<typeof g> => g != null);

  const otherCalculators = FEATURED_LANDING_LINKS.filter((p) => p.slug !== page.slug).slice(0, 6);

  return (
    <main id="main-content" className="max-w-5xl mx-auto px-4 sm:px-6 py-8 sm:py-12" role="main">
      <nav className="text-sm text-slate-500 dark:text-slate-400 mb-6">
        <Link to="/" className="hover:text-teal-600 dark:hover:text-teal-400">
          Calculator
        </Link>
        <span className="mx-2">/</span>
        <span className="text-slate-700 dark:text-slate-300">{page.breadcrumbLabel}</span>
      </nav>

      {page.tool === 'fasting-clock' ? (
        <FastingClock
          heading={page.h1}
          subheading={pageIntro ?? page.intro}
          defaultGoal={page.defaultFastingGoal}
          defaultMode={page.defaultFastingMode}
        />
      ) : page.tool === 'tdee' ? (
        <TdeeCalculator heading={page.h1} subheading={pageIntro ?? page.intro} />
      ) : (
        <MetabolicTools
          activeTool={page.tool}
          showTabs={false}
          macroPlan={page.defaultPlan}
          heading={page.h1}
          subheading={pageIntro ?? page.intro}
        />
      )}

      <ContentMonetizationSlot placement="content" guides={relatedGuides} showAd={!hasResultsAdUnit()} />

      {relatedGuides.length > 0 && (
        <section className="mt-16 pt-10 border-t border-slate-200 dark:border-slate-800" aria-labelledby="related-guides">
          <h2 id="related-guides" className="text-xl font-semibold mb-4">
            Related guides
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {relatedGuides.map((guide) => (
              <GuideCard key={guide.slug} guide={guide} />
            ))}
          </div>
        </section>
      )}

      {editorial && (
        <section className="mt-16 pt-10 border-t border-slate-200 dark:border-slate-800">
          <div className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 p-6 sm:p-8 shadow-sm space-y-6 text-slate-600 dark:text-slate-300 leading-relaxed">
            {editorial.sections.map((section) => (
              <div key={section.heading}>
                <h2 className="text-xl font-bold text-slate-900 dark:text-slate-100 mb-3">{section.heading}</h2>
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

      <section className="mt-12" aria-labelledby="page-faq">
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

      <section className="mt-12 pt-10 border-t border-slate-200 dark:border-slate-800" aria-labelledby="other-calcs">
        <h2 id="other-calcs" className="text-lg font-semibold mb-3">
          Other calculators
        </h2>
        <ul className="flex flex-wrap gap-x-4 gap-y-2 text-sm">
          {otherCalculators.map((p) => (
            <li key={p.slug}>
              <Link to={p.path} className="text-teal-600 dark:text-teal-400 hover:underline">
                {p.breadcrumbLabel}
              </Link>
            </li>
          ))}
          <li>
            <Link to="/guides" className="text-teal-600 dark:text-teal-400 hover:underline">
              All guides
            </Link>
          </li>
          <li>
            <Link to="/recipes" className="text-teal-600 dark:text-teal-400 hover:underline">
              Recipes
            </Link>
          </li>
        </ul>
      </section>

      <p className="mt-10 text-xs text-slate-400">
        {SITE_NAME} · {SITE_URL}
      </p>
    </main>
  );
}

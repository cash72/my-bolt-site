import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import { usePageMeta } from '../hooks/usePageMeta';
import { ToolCard } from '../components/ToolCard';
import { GuideCard } from '../components/GuideCard';
import ContentMonetizationSlot from '../components/ContentMonetizationSlot';
import { TOOLS } from '../lib/tools/tools';
import { COMPARISONS } from '../lib/comparisons/comparisons';
import { BEST_PAGES } from '../lib/best/bestPages';
import { GUIDES, getGuideBySlug } from '../lib/guides/guides';
import { SITE_NAME } from '../lib/site';

const FEATURED_GUIDE_SLUGS = [
  'how-to-choose-lawn-care-software',
  'when-to-upgrade-to-lmn',
  'solo-landscaper-software-checklist',
  'landscaping-software-pricing-guide',
] as const;

const HOMEPAGE_FAQ = [
  {
    q: 'What is the best software for a solo landscaper?',
    a: 'Most solos start with Jobber or FieldPulse — see our best software for solo landscaper guide for pricing and feature comparisons.',
  },
  {
    q: 'When should I use LMN instead of Jobber?',
    a: 'When you do design-build estimating and job costing, not just recurring mowing routes. Read our LMN vs Jobber comparison for crew-size guidance.',
  },
] as const;

export default function HomePage() {
  usePageMeta({
    title: `Best Landscaping & Lawn Care Software (2026)`,
    description:
      'Compare Jobber, Housecall Pro, LMN, and more for lawn care and landscape companies — pricing, features, and honest picks by crew size.',
    path: '/',
  });

  useEffect(() => {
    const faqId = 'homepage-faq-schema';
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
      mainEntity: HOMEPAGE_FAQ.map((item) => ({
        '@type': 'Question',
        name: item.q,
        acceptedAnswer: { '@type': 'Answer', text: item.a },
      })),
    });

    return () => {
      document.getElementById(faqId)?.remove();
    };
  }, []);

  const featured = TOOLS.filter((t) => ['jobber', 'housecall-pro', 'lmn', 'gorilladesk'].includes(t.slug));

  return (
    <main id="main-content" className="max-w-5xl mx-auto px-4 sm:px-6 py-8 sm:py-12" role="main">
      <section className="mb-10">
        <p className="text-sm font-medium text-emerald-700 dark:text-emerald-400 mb-2">Software directory</p>
        <h1 className="text-3xl sm:text-4xl font-bold tracking-tight mb-4">
          Landscaping &amp; lawn care business software
        </h1>
        <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl leading-relaxed">
          Curated comparisons for owner-operators and growing crews — maintenance routes, design-build estimating, and
          everything in between. Updated for 2026 pricing.
        </p>
        <div className="mt-6 flex flex-wrap gap-3">
          <Link
            to="/tools"
            className="inline-flex px-5 py-2.5 rounded-lg bg-emerald-600 hover:bg-emerald-700 text-white font-semibold text-sm transition-colors"
          >
            Browse all tools
          </Link>
          <Link
            to="/compare/jobber-vs-housecall-pro-landscaping"
            className="inline-flex px-5 py-2.5 rounded-lg border border-slate-300 dark:border-slate-700 hover:border-emerald-400 font-semibold text-sm transition-colors"
          >
            Jobber vs Housecall Pro
          </Link>
          <Link
            to="/compare"
            className="inline-flex px-5 py-2.5 rounded-lg border border-slate-300 dark:border-slate-700 hover:border-emerald-400 font-semibold text-sm transition-colors"
          >
            All comparisons
          </Link>
          <Link
            to="/compare/aspire-vs-lmn-landscaping"
            className="inline-flex px-5 py-2.5 rounded-lg border border-slate-300 dark:border-slate-700 hover:border-emerald-400 font-semibold text-sm transition-colors"
          >
            Aspire vs LMN
          </Link>
        </div>
      </section>

      <ContentMonetizationSlot placement="content" guides={GUIDES} />

      <section className="mt-12">
        <h2 className="text-xl font-semibold mb-4">Featured tools</h2>
        <div className="grid sm:grid-cols-2 gap-4">
          {featured.map((tool) => (
            <ToolCard key={tool.slug} tool={tool} />
          ))}
        </div>
        <p className="mt-4 text-sm">
          <Link to="/tools" className="text-emerald-600 dark:text-emerald-400 hover:underline">
            View all {TOOLS.length} tools →
          </Link>
        </p>
      </section>

      <section className="mt-12 pt-10 border-t border-slate-200 dark:border-slate-800">
        <h2 className="text-xl font-semibold mb-4">Popular comparisons</h2>
        <ul className="space-y-3">
          {COMPARISONS.map((c) => (
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
          <li>
            <Link
              to="/alternatives/jobber-alternatives-landscaping"
              className="text-emerald-700 dark:text-emerald-400 font-medium hover:underline"
            >
              Best Jobber alternatives for landscaping
            </Link>
          </li>
        </ul>
      </section>

      <section className="mt-12 pt-10 border-t border-slate-200 dark:border-slate-800">
        <h2 className="text-xl font-semibold mb-4">Best-for guides</h2>
        <div className="grid sm:grid-cols-2 gap-4">
          {BEST_PAGES.map((page) => (
            <Link
              key={page.slug}
              to={`/best/${page.slug}`}
              className="block rounded-xl border border-slate-200 dark:border-slate-800 p-5 hover:border-emerald-300 dark:hover:border-emerald-800 transition-colors"
            >
              <h3 className="font-semibold mb-2">{page.title}</h3>
              <p className="text-sm text-slate-600 dark:text-slate-400 line-clamp-2">{page.description}</p>
            </Link>
          ))}
        </div>
      </section>

      <section className="mt-12 pt-10 border-t border-slate-200 dark:border-slate-800">
        <div className="flex items-end justify-between gap-4 mb-4">
          <h2 className="text-xl font-semibold">Buying guides</h2>
          <Link to="/guides" className="text-sm text-emerald-600 dark:text-emerald-400 hover:underline shrink-0">
            View all
          </Link>
        </div>
        <div className="grid sm:grid-cols-2 gap-4">
          {FEATURED_GUIDE_SLUGS.map((slug) => {
            const guide = getGuideBySlug(slug);
            return guide ? <GuideCard key={guide.slug} guide={guide} /> : null;
          })}
        </div>
      </section>

      <section className="mt-12 pt-10 border-t border-slate-200 dark:border-slate-800" aria-labelledby="faq-heading">
        <h2 id="faq-heading" className="text-xl font-semibold mb-4">
          FAQ
        </h2>
        <div className="space-y-4 text-sm">
          <article>
            <h3 className="font-medium text-slate-800 dark:text-slate-200">
              What is the best software for a solo landscaper?
            </h3>
            <p className="text-slate-600 dark:text-slate-400 mt-1 leading-relaxed">
              Most solos start with{' '}
              <Link to="/tools/jobber" className="text-emerald-600 dark:text-emerald-400 hover:underline">
                Jobber
              </Link>{' '}
              or{' '}
              <Link to="/tools/fieldpulse" className="text-emerald-600 dark:text-emerald-400 hover:underline">
                FieldPulse
              </Link>{' '}
              — see our{' '}
              <Link to="/best/best-software-solo-landscaper" className="text-emerald-600 dark:text-emerald-400 hover:underline">
                solo landscaper picks
              </Link>
              .
            </p>
          </article>
          <article>
            <h3 className="font-medium text-slate-800 dark:text-slate-200">
              When should I use LMN instead of Jobber?
            </h3>
            <p className="text-slate-600 dark:text-slate-400 mt-1 leading-relaxed">
              When you do design-build estimating and job costing, not just recurring mowing routes. Read{' '}
              <Link to="/compare/lmn-vs-jobber-landscaping" className="text-emerald-600 dark:text-emerald-400 hover:underline">
                LMN vs Jobber
              </Link>
              .
            </p>
          </article>
        </div>
      </section>

      <p className="text-xs text-slate-500 dark:text-slate-400 mt-12 leading-relaxed">
        {SITE_NAME} is an independent directory. Pricing and features change — verify on each vendor site before
        purchasing.
      </p>
    </main>
  );
}

import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { usePageMeta } from '../hooks/usePageMeta';
import MulchCalculator from '../components/MulchCalculator';
import ContentMonetizationSlot from '../components/ContentMonetizationSlot';
import { hasResultsAdUnit } from '../lib/ads/config';
import { GuideCard } from '../components/GuideCard';
import { getFeaturedHomeGuides } from '../lib/landingHelpers';

const POPULAR_CALCULATORS = [
  { to: '/mulch-calculator', label: 'Mulch calculator' },
  { to: '/mulch-cost-estimator', label: 'Cost estimator' },
  { to: '/sod-calculator', label: 'Sod calculator' },
  { to: '/topsoil-calculator', label: 'Topsoil calculator' },
] as const;

const HOMEPAGE_FAQ = [
  {
    q: 'How much mulch do I need?',
    a: 'Multiply bed area (length × width) by depth in feet, then divide by 27 for cubic yards. A 10×10 bed at 3 inches needs about 0.93 cubic yards — round up to 1 yard when ordering bulk.',
  },
  {
    q: 'How many bags equal a cubic yard?',
    a: 'One cubic yard is 27 cu ft. Standard mulch bags hold 2 cu ft, so you need about 14 bags per cubic yard.',
  },
  {
    q: 'Does this work for gravel and topsoil?',
    a: 'Yes. Switch material type in project settings. The math is the same — area × depth — regardless of material.',
  },
  {
    q: 'Can I calculate multiple beds?',
    a: 'Yes. Add up to five beds and the calculator totals area, volume, and bags for the whole project.',
  },
] as const;

export default function HomePage() {
  usePageMeta({
    title: 'Mulch Calculator — Cubic Yards, Bags & Cost',
    description:
      'Free mulch calculator for garden beds. Enter bed dimensions and depth to get cubic yards, bag counts, and optional cost estimates.',
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

  return (
    <main id="main-content" className="max-w-5xl mx-auto px-4 sm:px-6 py-8 sm:py-12" role="main">
      <section className="mb-8" aria-label="Popular calculators">
        <p className="text-xs font-semibold uppercase tracking-wide text-slate-500 dark:text-slate-400 mb-2">
          Popular calculators
        </p>
        <div className="flex flex-wrap gap-2">
          {POPULAR_CALCULATORS.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className="inline-flex items-center rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 px-3 py-1.5 text-sm font-medium text-slate-700 dark:text-slate-200 hover:border-emerald-300 dark:hover:border-emerald-700 hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </div>
      </section>

      <p className="mb-8 text-slate-700 dark:text-slate-200 text-sm sm:text-base leading-relaxed border-l-4 border-emerald-500 pl-4">
        A 10×10 garden bed at 3 inches deep needs about 0.93 cubic yards of mulch — roughly 14
        standard 2 cu ft bags. Enter your bed dimensions below for cubic yards, bag counts, and a
        copyable garden-center shopping list.
      </p>

      <MulchCalculator />

      <ContentMonetizationSlot
        placement="content"
        showAd={!hasResultsAdUnit()}
        relatedSlugs={['mulch-calculator', 'topsoil-calculator', 'playground-mulch-calculator', 'stone-mulch-calculator']}
      />

      <section className="mt-16 pt-10 border-t border-slate-200 dark:border-slate-800" aria-labelledby="featured-guides">
        <div className="flex items-center justify-between gap-4 mb-6">
          <h2 id="featured-guides" className="text-xl font-semibold">
            Landscaping guides
          </h2>
          <Link
            to="/guides"
            className="text-sm font-medium text-emerald-600 dark:text-emerald-400 hover:underline shrink-0"
          >
            View all guides →
          </Link>
        </div>
        <div className="grid sm:grid-cols-3 gap-4">
          {getFeaturedHomeGuides().map((guide) => (
            <GuideCard key={guide.slug} guide={guide} />
          ))}
        </div>
      </section>

      <section className="mt-16 pt-10 border-t border-slate-200 dark:border-slate-800">
        <h2 className="text-xl font-semibold mb-4">How it works</h2>
        <ol className="grid sm:grid-cols-3 gap-6 text-sm text-slate-600 dark:text-slate-400">
          <li>
            <span className="block font-semibold text-slate-800 dark:text-slate-200 mb-1">1. Measure beds</span>
            Enter length and width in feet and inches for each garden bed or landscaping area.
          </li>
          <li>
            <span className="block font-semibold text-slate-800 dark:text-slate-200 mb-1">2. Set depth & material</span>
            Choose mulch, gravel, or topsoil. Adjust depth and waste allowance for your project.
          </li>
          <li>
            <span className="block font-semibold text-slate-800 dark:text-slate-200 mb-1">3. Order with confidence</span>
            We calculate cubic yards and bag counts and let you copy a shopping list for the garden center.
          </li>
        </ol>
      </section>

      <section className="mt-12" aria-labelledby="faq-heading">
        <h2 id="faq-heading" className="text-xl font-semibold mb-4">
          FAQ
        </h2>
        <div className="space-y-4 text-sm">
          {HOMEPAGE_FAQ.map((faq) => (
            <div key={faq.q}>
              <h3 className="font-medium text-slate-800 dark:text-slate-200">{faq.q}</h3>
              <p className="text-slate-600 dark:text-slate-400 mt-1">{faq.a}</p>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}

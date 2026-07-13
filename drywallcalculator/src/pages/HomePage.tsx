import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { usePageMeta } from '../hooks/usePageMeta';
import DrywallCalculator from '../components/DrywallCalculator';
import ContentMonetizationSlot from '../components/ContentMonetizationSlot';
import { GuideCard } from '../components/GuideCard';
import { getFeaturedHomeGuides } from '../lib/landingHelpers';

const POPULAR_CALCULATORS = [
  { to: '/drywall-calculator', label: 'Drywall calculator' },
  { to: '/how-many-drywall-sheets', label: 'Sheet count' },
  { to: '/basement-drywall-calculator', label: 'Basement drywall' },
  { to: '/garage-drywall-calculator', label: 'Garage drywall' },
] as const;

const HOMEPAGE_FAQ = [
  {
    q: 'How much drywall do I need for a room?',
    a: 'Wall area = 2 × ceiling height × (length + width). Subtract about 20 sq ft per door and 15 sq ft per window. Divide by sheet size (32 sq ft for 4×8), add waste, and round up to whole sheets.',
  },
  {
    q: 'How many sq ft is a drywall sheet?',
    a: 'A standard 4×8 ft sheet covers 32 sq ft. A 4×12 ft sheet covers 48 sq ft. Enter your sheet dimensions in project settings for an accurate count.',
  },
  {
    q: 'Does this include ceiling drywall?',
    a: 'Toggle "Walls + ceiling" in project settings to add ceiling area (length × width). Or use the dedicated ceiling calculator landing page.',
  },
  {
    q: 'Can I calculate multiple rooms?',
    a: 'Yes. Add up to five rooms and the calculator totals area and sheets for the whole project.',
  },
] as const;

export default function HomePage() {
  usePageMeta({
    title: 'Drywall Calculator — Room Size, Sheets & Waste',
    description:
      'Free drywall calculator for walls and ceilings. Enter room dimensions, sheet size, and waste to get sheet counts plus a copyable shopping list.',
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

  const featuredGuides = getFeaturedHomeGuides();

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
              className="inline-flex items-center rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 px-3 py-1.5 text-sm font-medium text-slate-700 dark:text-slate-200 hover:border-orange-300 dark:hover:border-orange-700 hover:text-orange-600 dark:hover:text-orange-400 transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </div>
      </section>

      <p className="mb-8 text-slate-700 dark:text-slate-200 text-sm sm:text-base leading-relaxed border-l-4 border-orange-500 pl-4">
        A 12×12 room with 8 ft ceilings has about 384 sq ft of wall area — roughly 14 sheets of 4×8
        drywall with 10% waste. Enter your exact dimensions below for sheet counts, optional ceiling
        area, and a copyable lumber-yard list.
      </p>

      <DrywallCalculator />

      <ContentMonetizationSlot placement="content" guides={featuredGuides} />

      <section className="mt-16 pt-10 border-t border-slate-200 dark:border-slate-800">
        <div className="flex items-end justify-between gap-4 mb-4">
          <h2 className="text-xl font-semibold">Drywall guides</h2>
          <Link to="/guides" className="text-sm text-orange-600 dark:text-orange-400 hover:underline shrink-0">
            View all {featuredGuides.length > 0 ? '12' : ''} guides →
          </Link>
        </div>
        <p className="text-sm text-slate-600 dark:text-slate-400 mb-4 max-w-2xl">
          In-depth articles on sheet estimates, hanging, taping, mudding, and basement finishing — then use the
          calculator above for your shopping list.
        </p>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {featuredGuides.map((guide) => (
            <GuideCard key={guide.slug} guide={guide} />
          ))}
        </div>
      </section>

      <section className="mt-16 pt-10 border-t border-slate-200 dark:border-slate-800">
        <h2 className="text-xl font-semibold mb-4">How it works</h2>
        <ol className="grid sm:grid-cols-3 gap-6 text-sm text-slate-600 dark:text-slate-400">
          <li>
            <span className="block font-semibold text-slate-800 dark:text-slate-200 mb-1">1. Measure rooms</span>
            Enter length, width, and ceiling height in feet and inches for each rectangular room.
          </li>
          <li>
            <span className="block font-semibold text-slate-800 dark:text-slate-200 mb-1">2. Set sheet size & waste</span>
            Default is 4×8 ft sheets (32 sq ft) with 10% waste. Toggle ceiling, adjust openings, and optional price per sheet.
          </li>
          <li>
            <span className="block font-semibold text-slate-800 dark:text-slate-200 mb-1">3. Buy with confidence</span>
            We calculate whole sheets to buy and let you copy a shopping list for the lumber yard.
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

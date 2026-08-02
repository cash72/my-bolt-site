import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { usePageMeta } from '../hooks/usePageMeta';
import PaintCalculator from '../components/PaintCalculator';
import ContentMonetizationSlot from '../components/ContentMonetizationSlot';
import { hasResultsAdUnit } from '../lib/ads/config';
import { GuideCard } from '../components/GuideCard';
import { getFeaturedHomeGuides } from '../lib/landingHelpers';
import { renderEditorialText } from '../lib/renderEditorialText';

const POPULAR_CALCULATORS = [
  { to: '/paint-coverage-calculator', label: 'Behr coverage calculator' },
  { to: '/how-much-paint-do-i-need', label: 'How much Behr paint?' },
  { to: '/paint-cost-estimator', label: 'Paint cost' },
  { to: '/cabinet-trim-paint-calculator', label: 'Cabinet & trim' },
  { to: '/guides/paint-coverage-per-gallon', label: 'Coverage per gallon' },
] as const;

const HOMEPAGE_FAQ = [
  {
    q: 'How much paint do I need for a room?',
    a: 'Wall area = 2 × ceiling height × (length + width). Add ceiling area if needed. Multiply by coats, add waste, then divide by sq ft per gallon on your paint label. A 12×12 room with 8 ft ceilings needs about 2–3 gallons for two coats — or run the [how much Behr paint](/how-much-paint-do-i-need) calculator.',
  },
  {
    q: 'How many sq ft does a gallon of paint cover?',
    a: 'Most interior latex covers 350–400 sq ft per gallon on smooth walls. Behr Premium Plus Interior often lists up to 400 sq ft/gallon — use our [Behr paint coverage calculator](/paint-coverage-calculator) with your exact can label for gallons to buy.',
  },
  {
    q: 'Is there a Behr paint calculator?',
    a: 'Yes — use our free [Behr paint coverage calculator](/paint-coverage-calculator) or [how much Behr paint](/how-much-paint-do-i-need) page. Enter room size and the sq ft per gallon from your Behr can (any brand works the same way).',
  },
  {
    q: 'How much Behr paint do I need for a 12×12 room?',
    a: 'About 2–3 gallons for walls with two coats when Behr lists ~400 sq ft/gallon. Use the [how much Behr paint calculator](/how-much-paint-do-i-need) with your exact dimensions and can label.',
  },
  {
    q: 'Does this work for fence or deck stain?',
    a: 'Yes. Choose fence stain, house exterior stain, or deck stain. Fence uses run length × panel height; deck uses length × width; house stain uses building footprint and wall height.',
  },
  {
    q: 'Can I calculate multiple rooms?',
    a: 'Yes. Add up to five rooms and the calculator totals paintable area and gallons for the whole project.',
  },
] as const;

export default function HomePage() {
  usePageMeta({
    title: 'Paint Calculator Canada — Free Behr Coverage & Room Gallons',
    description:
      'Free paint calculator Canada: room gallons, Behr paint coverage calculator, and shopping lists. 12×12 room ≈ 2–3 gallons at ~400 sq ft/gal. Walls, ceiling, fence, deck, wallpaper.',
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
              className="inline-flex items-center rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 px-3 py-1.5 text-sm font-medium text-slate-700 dark:text-slate-200 hover:border-blue-300 dark:hover:border-blue-700 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
            >
              {link.label}
            </Link>
          ))}
          <Link
            to="/guides"
            className="inline-flex items-center rounded-lg px-3 py-1.5 text-sm font-medium text-blue-600 dark:text-blue-400 hover:underline"
          >
            All guides →
          </Link>
        </div>
      </section>

      <aside
        className="mb-6 rounded-xl border border-blue-200 dark:border-blue-900/50 bg-blue-50 dark:bg-blue-950/30 px-4 py-3 sm:px-5 sm:py-4"
        aria-label="Quick answer"
      >
        <p className="text-xs font-semibold uppercase tracking-wide text-blue-800 dark:text-blue-300 mb-1">
          Quick answer — Behr paint coverage
        </p>
        <p className="text-sm sm:text-[15px] text-slate-800 dark:text-slate-200 leading-relaxed">
          Most Behr Premium Plus Interior covers up to ~400 sq ft per gallon (one coat, smooth primed drywall).
          A 12×12 room with 8 ft ceilings needs about 2–3 gallons for two coats. Use the{' '}
          <Link to="/paint-coverage-calculator" className="font-medium text-blue-700 dark:text-blue-300 hover:underline">
            Behr paint coverage calculator
          </Link>{' '}
          or{' '}
          <Link to="/how-much-paint-do-i-need" className="font-medium text-blue-700 dark:text-blue-300 hover:underline">
            how much Behr paint do I need
          </Link>{' '}
          with your can label — or enter room size below on this paint calculator Canada homepage.
        </p>
      </aside>

      <p className="mb-8 text-slate-700 dark:text-slate-200 text-sm sm:text-base leading-relaxed border-l-4 border-blue-500 pl-4">
        Enter dimensions below for walls, ceiling, fence, deck, or wallpaper — coats, waste, and coverage from
        your paint can, with a copyable shopping list.
      </p>

      <PaintCalculator />

      <ContentMonetizationSlot placement="content" guides={featuredGuides} showAd={!hasResultsAdUnit()} />

      <section className="mt-16 pt-10 border-t border-slate-200 dark:border-slate-800">
        <div className="flex items-end justify-between gap-4 mb-4">
          <h2 className="text-xl font-semibold">Project guides</h2>
          <Link to="/guides" className="text-sm text-blue-600 dark:text-blue-400 hover:underline shrink-0">
            View all
          </Link>
        </div>
        <p className="text-sm text-slate-600 dark:text-slate-400 mb-4">
          Primer, wall repair, prep checklists, and step-by-step painting — then use the calculator above for gallons.
        </p>
        <div className="grid sm:grid-cols-2 gap-4">
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
            <span className="block font-semibold text-slate-800 dark:text-slate-200 mb-1">2. Set product & coats</span>
            Pick paint or stain (fence, house exterior, deck), adjust coats, coverage from your can, and openings if needed.
          </li>
          <li>
            <span className="block font-semibold text-slate-800 dark:text-slate-200 mb-1">3. Buy with confidence</span>
            We calculate gallons (and quarts) and let you copy a shopping list for the paint counter.
          </li>
        </ol>
      </section>

      <section className="mt-12" aria-labelledby="tools-heading">
        <h2 id="tools-heading" className="text-xl font-semibold mb-4">
          Paint, stain & wallpaper
        </h2>
        <p className="text-sm text-slate-600 dark:text-slate-400 mb-4">
          Use the calculator above for paint and stain. For wallpaper rolls, pattern repeat, and accent walls, try our{' '}
          <Link to="/wallpaper-calculator" className="text-violet-600 dark:text-violet-400 hover:underline">
            wallpaper calculator
          </Link>{' '}
          or read our{' '}
          <Link to="/guides/how-to-estimate-wallpaper-rolls" className="text-blue-600 dark:text-blue-400 hover:underline">
            wallpaper roll guide
          </Link>
          .
        </p>
      </section>

      <section className="mt-12" aria-labelledby="faq-heading">
        <h2 id="faq-heading" className="text-xl font-semibold mb-4">
          FAQ
        </h2>
        <div className="space-y-4 text-sm">
          {HOMEPAGE_FAQ.map((faq) => (
            <div key={faq.q}>
              <h3 className="font-medium text-slate-800 dark:text-slate-200">{faq.q}</h3>
              <p className="text-slate-600 dark:text-slate-400 mt-1">{renderEditorialText(faq.a)}</p>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}

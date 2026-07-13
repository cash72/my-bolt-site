import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { usePageMeta } from '../hooks/usePageMeta';
import FlooringCalculator from '../components/FlooringCalculator';
import ContentMonetizationSlot from '../components/ContentMonetizationSlot';
import { GuideCard } from '../components/GuideCard';
import { getFeaturedHomeGuides } from '../lib/landingHelpers';
import { FEATURED_LANDING_LINKS } from '../lib/landingPages';

const POPULAR_CALCULATORS = [
  { to: '/how-many-flooring-boxes', label: 'Box calculator' },
  { to: '/laminate-flooring-calculator', label: 'Laminate calculator' },
  { to: '/stair-carpet-calculator', label: 'Stair carpet' },
  { to: '/tile-flooring-calculator', label: 'Tile calculator' },
  { to: '/carpet-calculator', label: 'Carpet calculator' },
] as const;

const HOMEPAGE_FAQS = [
  {
    question: 'How much waste should I add?',
    answer:
      '10% is typical for laminate and LVP in simple rooms. Tile often needs 15% because of cuts and breakage. Add more for diagonal layouts or many obstacles.',
  },
  {
    question: 'Where do I find sq ft per box?',
    answer:
      'Check the product box or listing — coverage is usually printed as square feet per carton. Laminate and LVP boxes often cover 18–24 sq ft; tile varies widely by tile size.',
  },
  {
    question: 'Can I use this for multiple rooms?',
    answer:
      'Yes. Add up to five rooms and the calculator totals everything into one box count for the whole project.',
  },
  {
    question: 'Does this work for carpet?',
    answer:
      'Yes. Select carpet to see square yards. Carpet pad is ordered separately in the same square yards.',
  },
];

export default function HomePage() {
  usePageMeta({
    title: 'Flooring Box Calculator — Laminate, Tile, Carpet & LVP',
    description:
      'Free flooring calculator for laminate, vinyl plank, tile, and carpet. Room square footage, waste allowance, box counts, and square yards — plus DIY prep guides.',
    path: '/',
  });

  useEffect(() => {
    const scriptId = 'homepage-faq-schema';
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
      mainEntity: HOMEPAGE_FAQS.map((faq) => ({
        '@type': 'Question',
        name: faq.question,
        acceptedAnswer: { '@type': 'Answer', text: faq.answer },
      })),
    });

    return () => {
      document.getElementById(scriptId)?.remove();
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
              className="inline-flex items-center rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 px-3 py-1.5 text-sm font-medium text-slate-700 dark:text-slate-200 hover:border-emerald-300 dark:hover:border-emerald-700 hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors"
            >
              {link.label}
            </Link>
          ))}
          <Link
            to="/guides"
            className="inline-flex items-center rounded-lg px-3 py-1.5 text-sm font-medium text-emerald-600 dark:text-emerald-400 hover:underline"
          >
            All guides →
          </Link>
        </div>
      </section>

      <p className="mb-8 text-slate-700 dark:text-slate-200 text-sm sm:text-base leading-relaxed border-l-4 border-emerald-500 pl-4">
        A 12×12 room is 144 sq ft — at 10% waste and 20 sq ft per box, that is roughly 8 cartons of laminate.
        Enter your dimensions below for an exact box count, plus tile, LVP, and carpet square-yard estimates.
      </p>

      <FlooringCalculator />

      <ContentMonetizationSlot placement="content" guides={featuredGuides} />

      <section className="mt-16 pt-10 border-t border-slate-200 dark:border-slate-800">
        <div className="flex items-end justify-between gap-4 mb-4">
          <h2 className="text-xl font-semibold">Project guides</h2>
          <Link to="/guides" className="text-sm text-emerald-600 dark:text-emerald-400 hover:underline shrink-0">
            View all
          </Link>
        </div>
        <p className="text-sm text-slate-600 dark:text-slate-400 mb-4">
          Subfloor prep, underlay, waste percentages, and product picks — then use the calculator above for boxes.
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
            Enter length and width in feet and inches for each rectangular room.
          </li>
          <li>
            <span className="block font-semibold text-slate-800 dark:text-slate-200 mb-1">2. Set material & waste</span>
            Pick laminate, LVP, tile, or carpet. Adjust waste % and enter sq ft per box from your label.
          </li>
          <li>
            <span className="block font-semibold text-slate-800 dark:text-slate-200 mb-1">3. Buy with confidence</span>
            We round up to whole boxes (or square yards for carpet) and let you copy a shopping list.
          </li>
        </ol>
      </section>

      <section className="mt-12" aria-labelledby="tools-heading">
        <h2 id="tools-heading" className="text-xl font-semibold mb-4">
          Calculators by material
        </h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3 text-sm">
          {FEATURED_LANDING_LINKS.map((page) => (
            <Link
              key={page.slug}
              to={page.path}
              className="rounded-lg border border-slate-200 dark:border-slate-800 px-4 py-3 hover:border-emerald-300 dark:hover:border-emerald-800 transition-colors"
            >
              <span className="font-medium text-slate-800 dark:text-slate-200">{page.breadcrumbLabel}</span>
              <span className="block text-slate-500 dark:text-slate-400 text-xs mt-0.5 line-clamp-2">
                {page.h1}
              </span>
            </Link>
          ))}
        </div>
        <p className="text-sm text-slate-600 dark:text-slate-400 mt-4">
          Not sure which floor to buy? Read our{' '}
          <Link
            to="/guides/laminate-vs-tile-vs-carpet-comparison"
            className="text-emerald-600 dark:text-emerald-400 hover:underline"
          >
            laminate vs tile vs carpet guide
          </Link>{' '}
          or browse all{' '}
          <Link to="/guides" className="text-emerald-600 dark:text-emerald-400 hover:underline">
            flooring guides
          </Link>
          .
        </p>
      </section>

      <section className="mt-12" aria-labelledby="faq-heading">
        <h2 id="faq-heading" className="text-xl font-semibold mb-4">
          FAQ
        </h2>
        <div className="space-y-4 text-sm">
          <div>
            <h3 className="font-medium text-slate-800 dark:text-slate-200">{HOMEPAGE_FAQS[0].question}</h3>
            <p className="text-slate-600 dark:text-slate-400 mt-1">
              {HOMEPAGE_FAQS[0].answer} See our{' '}
              <Link
                to="/guides/how-much-flooring-waste-to-buy"
                className="text-emerald-600 dark:text-emerald-400 hover:underline"
              >
                waste guide
              </Link>{' '}
              for room-by-room tips.
            </p>
          </div>
          <div>
            <h3 className="font-medium text-slate-800 dark:text-slate-200">{HOMEPAGE_FAQS[1].question}</h3>
            <p className="text-slate-600 dark:text-slate-400 mt-1">{HOMEPAGE_FAQS[1].answer}</p>
          </div>
          <div>
            <h3 className="font-medium text-slate-800 dark:text-slate-200">{HOMEPAGE_FAQS[2].question}</h3>
            <p className="text-slate-600 dark:text-slate-400 mt-1">{HOMEPAGE_FAQS[2].answer}</p>
          </div>
          <div>
            <h3 className="font-medium text-slate-800 dark:text-slate-200">{HOMEPAGE_FAQS[3].question}</h3>
            <p className="text-slate-600 dark:text-slate-400 mt-1">
              {HOMEPAGE_FAQS[3].answer}{' '}
              <Link to="/carpet-calculator" className="text-emerald-600 dark:text-emerald-400 hover:underline">
                Carpet calculator
              </Link>
              .
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}

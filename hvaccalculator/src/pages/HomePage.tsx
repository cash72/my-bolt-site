import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { usePageMeta } from '../hooks/usePageMeta';
import HvacCalculator from '../components/HvacCalculator';
import ContentMonetizationSlot from '../components/ContentMonetizationSlot';
import { GuideCard } from '../components/GuideCard';
import { getFeaturedHomeGuides } from '../lib/landingHelpers';
import { LANDING_PAGES } from '../lib/landingPages';

const POPULAR_CALCULATORS = [
  { to: '/btu-calculator', label: 'BTU calculator' },
  { to: '/window-ac-calculator', label: 'Window AC' },
  { to: '/mini-split-calculator', label: 'Mini-split sizing' },
  { to: '/mini-split-for-rv', label: 'RV mini-split' },
  { to: '/garage-heater-btu-calculator', label: 'Garage heater' },
] as const;

const HOMEPAGE_FAQ = [
  {
    q: 'How many BTU per square foot?',
    a: 'Most cooled rooms need 20–30 BTU per sq ft. RVs and uninsulated sheds need more; well-insulated tiny homes need less. Sun exposure, ceiling height, and occupants adjust the result.',
  },
  {
    q: 'What size mini-split for an RV?',
    a: 'Most full-time RVers use 9,000–12,000 BTU depending on length and insulation. A 30 ft RV with 200–250 sq ft of living space often needs a 9k minimum; 12k is common in hot climates.',
  },
  {
    q: 'Can I size a whole tiny home with one calculator?',
    a: 'Yes — add up to five spaces or enter the main living footprint as one zone. Most tiny homes use a single 9k–18k BTU ductless head.',
  },
  {
    q: 'Is this a Manual J calculation?',
    a: 'No. This is a DIY planning tool. For permits and whole-house central HVAC, hire a licensed pro for Manual J and Manual S equipment selection.',
  },
] as const;

export default function HomePage() {
  usePageMeta({
    title: 'BTU & Mini-Split Calculator — AC Sizing for Rooms, RVs & Tiny Homes',
    description:
      'Free BTU and mini-split calculator at HVACCalculators.net. Size ductless AC for bedrooms, RVs, tiny homes, she-sheds, and cottages — cooling load, tonnage, and heat pump planning.',
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

  const featuredLandings = LANDING_PAGES.filter((p) =>
    ['mini-split-for-rv', 'mini-split-for-tiny-home', 'mini-split-for-shed', 'mini-split-for-cottage'].includes(
      p.slug
    )
  );

  const roomCalculators = LANDING_PAGES.filter((p) =>
    ['window-ac-calculator', 'garage-heater-btu-calculator', 'whole-house-btu-calculator', 'room-ac-calculator'].includes(
      p.slug
    )
  );

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
              className="inline-flex items-center rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 px-3 py-1.5 text-sm font-medium text-slate-700 dark:text-slate-200 hover:border-sky-300 dark:hover:border-sky-700 hover:text-sky-600 dark:hover:text-sky-400 transition-colors"
            >
              {link.label}
            </Link>
          ))}
          <Link
            to="/guides"
            className="inline-flex items-center rounded-lg px-3 py-1.5 text-sm font-medium text-sky-600 dark:text-sky-400 hover:underline"
          >
            All guides →
          </Link>
        </div>
      </section>

      <p className="mb-8 text-slate-700 dark:text-slate-200 text-sm sm:text-base leading-relaxed border-l-4 border-sky-500 pl-4">
        A 12×12 bedroom (144 sq ft) typically needs 3,600–4,300 BTU calculated — retail mini-splits start at
        9,000 BTU. Enter your exact dimensions below for cooling load, heating estimate, and recommended ductless
        head size.
      </p>

      <HvacCalculator />

      <ContentMonetizationSlot placement="content" guides={featuredGuides} />

      <section className="mt-16 pt-10 border-t border-slate-200 dark:border-slate-800">
        <h2 className="text-xl font-semibold mb-4">Room, window & garage calculators</h2>
        <p className="text-sm text-slate-600 dark:text-slate-400 mb-4">
          Size window AC units, garage heaters, and multi-room loads — separate from RV and tiny-home mini-split pages.
        </p>
        <ul className="grid sm:grid-cols-2 gap-3 text-sm">
          {roomCalculators.map((page) => (
            <li key={page.slug}>
              <Link
                to={page.path}
                className="block p-3 rounded-lg border border-slate-200 dark:border-slate-800 hover:border-sky-400 dark:hover:border-sky-600 transition-colors"
              >
                <span className="font-medium text-sky-700 dark:text-sky-400">{page.breadcrumbLabel}</span>
                <p className="text-slate-500 dark:text-slate-400 mt-0.5 text-xs">{page.description.slice(0, 90)}…</p>
              </Link>
            </li>
          ))}
        </ul>
      </section>

      <section className="mt-16 pt-10 border-t border-slate-200 dark:border-slate-800">
        <h2 className="text-xl font-semibold mb-4">Mini-split sizing by application</h2>
        <p className="text-sm text-slate-600 dark:text-slate-400 mb-4">
          Pre-set insulation and load factors for RVs, tiny homes, backyard sheds, and seasonal cottages.
        </p>
        <ul className="grid sm:grid-cols-2 gap-3 text-sm">
          {featuredLandings.map((page) => (
            <li key={page.slug}>
              <Link
                to={page.path}
                className="block p-3 rounded-lg border border-slate-200 dark:border-slate-800 hover:border-sky-400 dark:hover:border-sky-600 transition-colors"
              >
                <span className="font-medium text-sky-700 dark:text-sky-400">{page.breadcrumbLabel}</span>
                <p className="text-slate-500 dark:text-slate-400 mt-0.5 text-xs">{page.description.slice(0, 90)}…</p>
              </Link>
            </li>
          ))}
        </ul>
      </section>

      <section className="mt-16 pt-10 border-t border-slate-200 dark:border-slate-800">
        <div className="flex items-end justify-between gap-4 mb-4">
          <h2 className="text-xl font-semibold">DIY sizing guides</h2>
          <Link to="/guides" className="text-sm text-sky-600 dark:text-sky-400 hover:underline shrink-0">
            View all
          </Link>
        </div>
        <p className="text-sm text-slate-600 dark:text-slate-400 mb-4">
          RV installs, tiny home insulation, she-shed comfort, cottage heat pumps, and mini-split mistakes to avoid.
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
            <span className="block font-semibold text-slate-800 dark:text-slate-200 mb-1">1. Measure your space</span>
            Enter length, width, and ceiling height for each room, RV living area, or shed footprint.
          </li>
          <li>
            <span className="block font-semibold text-slate-800 dark:text-slate-200 mb-1">2. Set application type</span>
            Choose RV, tiny home, she-shed, cottage, or standard room — insulation and BTU factors adjust automatically.
          </li>
          <li>
            <span className="block font-semibold text-slate-800 dark:text-slate-200 mb-1">3. Buy the right BTU</span>
            We calculate cooling load, heating estimate, and round up to common mini-split sizes (9k, 12k, 18k, 24k).
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

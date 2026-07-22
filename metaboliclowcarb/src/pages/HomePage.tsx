import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { usePageMeta } from '../hooks/usePageMeta';
import MetabolicTools from '../components/MetabolicTools';
import FastingClock from '../components/FastingClock';
import ContentMonetizationSlot from '../components/ContentMonetizationSlot';
import { hasResultsAdUnit } from '../lib/ads/config';
import { RecipeCard } from '../components/RecipeCard';
import { GuideCard } from '../components/GuideCard';
import { getFeaturedRecipes } from '../lib/recipes/recipes';
import { getFeaturedHomeGuides } from '../lib/landingHelpers';
import { LANDING_PAGES } from '../lib/landingPages';
import type { ToolId } from '../lib/metabolic/types';

const POPULAR_TOOLS = [
  { to: '/net-carb-calculator', label: 'Net carb calculator' },
  { to: '/keto-macro-calculator', label: 'Keto macro calculator' },
  { to: '/weight-loss-macro-calculator', label: 'Weight loss macros' },
  { to: '/diabetes-macro-calculator', label: 'Diabetes macros' },
  { to: '/intermittent-fasting-timer', label: 'Intermittent fasting timer' },
] as const;

const TOOL_TABS: { id: ToolId; label: string; sub: string }[] = [
  { id: 'net-carb', label: 'Net carbs', sub: 'From a food label' },
  { id: 'macro', label: 'Daily macros', sub: 'Your daily targets' },
  { id: 'fasting-clock', label: 'Fasting clock', sub: 'IF & extended fasts' },
];

const HOMEPAGE_FAQS = [
  {
    question: 'What are net carbs?',
    answer:
      'Net carbs are total carbohydrates minus fiber and often sugar alcohols. Keto and low-carb diets use them to track daily carb intake.',
  },
  {
    question: 'Is this medical advice?',
    answer:
      'No. These calculators provide estimates for education only. Work with your healthcare provider — especially if you have diabetes, take insulin, or manage blood pressure medications.',
  },
  {
    question: 'How long should I fast?',
    answer:
      'Dr. Mindy Pelz starts most people at 13–16 hours. Autophagy benefits increase around 17 hours. Extended 24–72 hour fasts need medical awareness — especially on medications.',
  },
  {
    question: 'Which calculator should I use first?',
    answer:
      'Use the net carb calculator when reading a food label. Use the macro calculator for daily targets. Use the fasting clock when you are ready to track fasts after low-carb eating feels stable.',
  },
];

export default function HomePage() {
  const [activeTool, setActiveTool] = useState<ToolId>('net-carb');

  usePageMeta({
    title: 'Metabolic Low Carb Calculator — Net Carbs, Macros & Fasting Clock',
    description:
      'Free net carb calculator, keto macro calculator, and fasting clock for insulin resistance, PCOS, metabolic health, and low-carb diets. Plus recipes and guides.',
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
      <div className="space-y-6">
        <div>
          <h1 className="text-2xl sm:text-3xl font-bold tracking-tight mb-2">Metabolic Low Carb Calculator</h1>
          <p className="text-slate-600 dark:text-slate-400 text-sm sm:text-base">
            Three free tools: count net carbs from food labels, get daily macro targets, or track intermittent and
            extended fasts with expert-guided metabolic phases.
          </p>
        </div>

        <section aria-label="Popular calculators">
          <p className="text-xs font-semibold uppercase tracking-wide text-slate-500 dark:text-slate-400 mb-2">
            Popular calculators
          </p>
          <div className="flex flex-wrap gap-2">
            {POPULAR_TOOLS.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className="inline-flex items-center rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 px-3 py-1.5 text-sm font-medium text-slate-700 dark:text-slate-200 hover:border-teal-300 dark:hover:border-teal-700 hover:text-teal-600 dark:hover:text-teal-400 transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </section>

        <div className="space-y-2">
          <p className="text-sm text-slate-600 dark:text-slate-400">Choose what you need help with — switch anytime.</p>
          <div className="flex flex-col sm:flex-row gap-2 p-1 rounded-lg bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
            {TOOL_TABS.map((tab) => (
              <button
                key={tab.id}
                type="button"
                onClick={() => setActiveTool(tab.id)}
                className={`flex-1 px-3 sm:px-4 py-2.5 rounded-md text-left sm:text-center transition-colors ${
                  activeTool === tab.id
                    ? 'bg-teal-600 text-white'
                    : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-200'
                }`}
              >
                <span className="block text-sm font-medium">{tab.label}</span>
                <span
                  className={`block text-xs mt-0.5 ${
                    activeTool === tab.id ? 'text-teal-100' : 'text-slate-400 dark:text-slate-500'
                  }`}
                >
                  {tab.sub}
                </span>
              </button>
            ))}
          </div>
        </div>

        {activeTool === 'fasting-clock' ? (
          <FastingClock
            heading="Fasting Clock"
            subheading="Track water-only and assisted fasts from 16 to 72 hours. Guidance synthesized from Dr. Mindy Pelz, Dr. Eric Westman, and Dr. Boz."
          />
        ) : (
          <MetabolicTools activeTool={activeTool} showTabs={false} showHeader={false} />
        )}
      </div>

      <ContentMonetizationSlot placement="content" guides={featuredGuides} showAd={!hasResultsAdUnit()} />

      <section className="mt-16 pt-10 border-t border-slate-200 dark:border-slate-800">
        <div className="flex items-end justify-between gap-4 mb-4">
          <h2 className="text-xl font-semibold">Guides</h2>
          <Link to="/guides" className="text-sm text-teal-600 dark:text-teal-400 hover:underline shrink-0">
            View all
          </Link>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {featuredGuides.map((guide) => (
            <GuideCard key={guide.slug} guide={guide} />
          ))}
        </div>
      </section>

      <section className="mt-16 pt-10 border-t border-slate-200 dark:border-slate-800">
        <div className="flex items-end justify-between gap-4 mb-4">
          <h2 className="text-xl font-semibold">Low carb recipes</h2>
          <Link to="/recipes" className="text-sm text-teal-600 dark:text-teal-400 hover:underline shrink-0">
            View all
          </Link>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {getFeaturedRecipes().map((recipe) => (
            <RecipeCard key={recipe.slug} recipe={recipe} />
          ))}
        </div>
      </section>

      <section className="mt-16 pt-10 border-t border-slate-200 dark:border-slate-800" aria-labelledby="tools-heading">
        <h2 id="tools-heading" className="text-xl font-semibold mb-4">
          Calculators by tool
        </h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3 text-sm">
          {LANDING_PAGES.map((page) => (
            <Link
              key={page.slug}
              to={page.path}
              className="rounded-lg border border-slate-200 dark:border-slate-800 px-4 py-3 hover:border-teal-300 dark:hover:border-teal-800 transition-colors"
            >
              <span className="font-medium text-slate-800 dark:text-slate-200">{page.breadcrumbLabel}</span>
              <span className="block text-slate-500 dark:text-slate-400 text-xs mt-0.5 line-clamp-2">{page.h1}</span>
            </Link>
          ))}
        </div>
        <p className="text-sm text-slate-600 dark:text-slate-400 mt-4">
          New to low carb? Start with our{' '}
          <Link to="/guides/getting-started-keto-low-carb" className="text-teal-600 dark:text-teal-400 hover:underline">
            getting started guide
          </Link>{' '}
          or the{' '}
          <Link to="/net-carb-calculator" className="text-teal-600 dark:text-teal-400 hover:underline">
            net carb calculator
          </Link>
          .
        </p>
      </section>

      <section className="mt-16 pt-10 border-t border-slate-200 dark:border-slate-800">
        <h2 className="text-xl font-semibold mb-4">Which tool should I use?</h2>
        <ul className="grid sm:grid-cols-3 gap-6 text-sm text-slate-600 dark:text-slate-400">
          <li className="rounded-lg border border-slate-200 dark:border-slate-800 p-4">
            <span className="block font-semibold text-slate-800 dark:text-slate-200 mb-1">Net carbs</span>
            Use when holding a package and want to know if a food fits your carb limit. Copy numbers from the Nutrition
            Facts label.
          </li>
          <li className="rounded-lg border border-slate-200 dark:border-slate-800 p-4">
            <span className="block font-semibold text-slate-800 dark:text-slate-200 mb-1">Daily macros</span>
            Get a simple daily plan — protein, net carbs, and fat based on your body, activity, and eating plan.
          </li>
          <li className="rounded-lg border border-slate-200 dark:border-slate-800 p-4">
            <span className="block font-semibold text-slate-800 dark:text-slate-200 mb-1">Fasting clock</span>
            Track 16–72 hour fasts with metabolic phases, cycle guidance (Dr. Mindy), electrolyte tips (Dr. Westman &
            Boz), and optional Dr. Boz Ratio tracking.
          </li>
        </ul>
      </section>

      <section className="mt-12" aria-labelledby="faq-heading">
        <h2 id="faq-heading" className="text-xl font-semibold mb-4">
          FAQ
        </h2>
        <div className="space-y-4 text-sm">
          <div>
            <h3 className="font-medium text-slate-800 dark:text-slate-200">{HOMEPAGE_FAQS[0].question}</h3>
            <p className="text-slate-600 dark:text-slate-400 mt-1">
              {HOMEPAGE_FAQS[0].answer}{' '}
              <Link to="/guides/how-to-read-nutrition-labels-net-carbs" className="text-teal-600 dark:text-teal-400 hover:underline">
                Label reading guide
              </Link>
              .
            </p>
          </div>
          <div>
            <h3 className="font-medium text-slate-800 dark:text-slate-200">{HOMEPAGE_FAQS[1].question}</h3>
            <p className="text-slate-600 dark:text-slate-400 mt-1">{HOMEPAGE_FAQS[1].answer}</p>
          </div>
          <div>
            <h3 className="font-medium text-slate-800 dark:text-slate-200">{HOMEPAGE_FAQS[2].question}</h3>
            <p className="text-slate-600 dark:text-slate-400 mt-1">
              {HOMEPAGE_FAQS[2].answer}{' '}
              <Link to="/guides/intermittent-fasting-16-8-vs-18-6" className="text-teal-600 dark:text-teal-400 hover:underline">
                16:8 vs 18:6 guide
              </Link>{' '}
              ·{' '}
              <Link to="/fasting-clock" className="text-teal-600 dark:text-teal-400 hover:underline">
                Fasting clock
              </Link>
              .
            </p>
          </div>
          <div>
            <h3 className="font-medium text-slate-800 dark:text-slate-200">{HOMEPAGE_FAQS[3].question}</h3>
            <p className="text-slate-600 dark:text-slate-400 mt-1">{HOMEPAGE_FAQS[3].answer}</p>
          </div>
        </div>
      </section>
    </main>
  );
}

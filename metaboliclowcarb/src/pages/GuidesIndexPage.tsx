import { Link } from 'react-router-dom';
import { usePageMeta } from '../hooks/usePageMeta';
import { useJsonLd } from '../hooks/useJsonLd';
import { GUIDES } from '../lib/guides/guides';
import { GUIDE_CATEGORY_LABEL, type GuideCategory } from '../lib/guides/types';
import { FEATURED_LANDING_LINKS } from '../lib/landingPages';
import { GuideCard } from '../components/GuideCard';
import ContentMonetizationSlot from '../components/ContentMonetizationSlot';
import { itemListSchema, pageUrl } from '../lib/schema/jsonLd';

const CATEGORIES: (GuideCategory | 'all')[] = [
  'all',
  'fasting',
  'insulin-resistance',
  'metabolic-health',
];

const FEATURED_GUIDE_SLUGS = [
  'protein-on-keto-and-low-carb',
  'keto-flu-and-electrolytes',
  'getting-started-keto-low-carb',
  'dr-boz-ratio-explained',
];

export default function GuidesIndexPage() {
  const featuredGuides = FEATURED_GUIDE_SLUGS.map((slug) => GUIDES.find((g) => g.slug === slug)).filter(
    (g): g is NonNullable<(typeof GUIDES)[number]> => g != null
  );

  usePageMeta({
    title: 'Low Carb & Fasting Guides — Insulin Resistance, Metabolic Health',
    description:
      'Free guides on intermittent fasting, insulin resistance, net carbs, Dr. Boz ratio, fatty liver, and breaking fasts safely. Paired with calculators and recipes.',
    path: '/guides',
  });

  useJsonLd(
    'guides-index-list-schema',
    itemListSchema(
      'Low carb and fasting guides',
      GUIDES.map((guide) => ({
        name: guide.title,
        url: pageUrl(`/guides/${guide.slug}`),
      }))
    )
  );

  return (
    <main id="main-content" className="max-w-5xl mx-auto px-4 sm:px-6 py-8 sm:py-12" role="main">
      <h1 className="text-2xl sm:text-3xl font-bold tracking-tight mb-2">Guides</h1>
      <p className="text-slate-600 dark:text-slate-400 mb-8 max-w-2xl">
        Practical, search-friendly articles on fasting, insulin resistance, and metabolic health — each linked to our
        free calculators and low-carb recipes.
      </p>

      {CATEGORIES.filter((c) => c !== 'all').map((category) => {
        const items = GUIDES.filter((g) => g.category === category);
        if (items.length === 0) return null;
        return (
          <section key={category} className="mb-12" aria-labelledby={`cat-${category}`}>
            <h2 id={`cat-${category}`} className="text-lg font-semibold mb-4">
              {GUIDE_CATEGORY_LABEL[category]}
            </h2>
            <div className="grid sm:grid-cols-2 gap-4">
              {items.map((guide) => (
                <GuideCard key={guide.slug} guide={guide} />
              ))}
            </div>
          </section>
        );
      })}

      <ContentMonetizationSlot placement="content" guides={featuredGuides} />

      <section className="mt-12 pt-10 border-t border-slate-200 dark:border-slate-800" aria-labelledby="guide-calcs">
        <h2 id="guide-calcs" className="text-lg font-semibold mb-3">
          Free calculators
        </h2>
        <p className="text-sm text-slate-600 dark:text-slate-400 mb-4">
          Pair these guides with our tools for net carbs, macros, and fasting.
        </p>
        <ul className="flex flex-wrap gap-x-4 gap-y-2 text-sm">
          {FEATURED_LANDING_LINKS.map((page) => (
            <li key={page.slug}>
              <Link to={page.path} className="text-teal-600 dark:text-teal-400 hover:underline">
                {page.breadcrumbLabel}
              </Link>
            </li>
          ))}
          <li>
            <Link to="/recipes" className="text-teal-600 dark:text-teal-400 hover:underline">
              Low carb recipes
            </Link>
          </li>
        </ul>
      </section>
    </main>
  );
}

import { Link } from 'react-router-dom';
import { usePageMeta } from '../hooks/usePageMeta';
import { useJsonLd } from '../hooks/useJsonLd';
import { RECIPES } from '../lib/recipes/recipes';
import { RECIPE_CATEGORY_LABEL, type RecipeCategory } from '../lib/recipes/types';
import { GUIDES } from '../lib/guides/guides';
import { RecipeCard } from '../components/RecipeCard';
import AdSlot from '../components/AdSlot';
import { itemListSchema, pageUrl } from '../lib/schema/jsonLd';

const CATEGORIES: RecipeCategory[] = ['breakfast', 'lunch', 'dinner', 'snack'];

const FEATURED_GUIDE_SLUGS = [
  'getting-started-keto-low-carb',
  'best-first-meal-after-fasting',
  'net-carbs-for-insulin-resistance',
  'how-to-read-nutrition-labels-net-carbs',
];

export default function RecipesIndexPage() {
  usePageMeta({
    title: 'Low Carb & Keto Recipes for Insulin Resistance',
    description:
      'Blood-sugar-friendly low carb and keto recipes with net carbs per serving. For metabolic health and insulin resistance — not medical advice.',
    path: '/recipes',
  });

  useJsonLd(
    'recipes-index-list-schema',
    itemListSchema(
      'Low carb and keto recipes',
      RECIPES.map((recipe) => ({
        name: recipe.title,
        url: pageUrl(`/recipes/${recipe.slug}`),
      }))
    )
  );

  const featuredGuides = FEATURED_GUIDE_SLUGS.map((slug) => GUIDES.find((g) => g.slug === slug)).filter(
    (g): g is NonNullable<typeof g> => g != null
  );

  return (
    <main id="main-content" className="max-w-5xl mx-auto px-4 sm:px-6 py-8 sm:py-12" role="main">
      <div className="mb-10">
        <h1 className="text-2xl sm:text-3xl font-bold tracking-tight mb-2">Low carb recipes</h1>
        <p className="text-slate-600 dark:text-slate-400 text-sm sm:text-base max-w-2xl">
          {RECIPES.length} blood-sugar-friendly low carb and keto recipes with estimated net carbs per serving — for
          metabolic health and insulin resistance. Use our{' '}
          <Link to="/" className="text-teal-600 dark:text-teal-400 hover:underline">
            calculators
          </Link>{' '}
          to check label values on packaged ingredients. See our{' '}
          <Link to="/guides/best-first-meal-after-fasting" className="text-teal-600 dark:text-teal-400 hover:underline">
            break-fast guide
          </Link>{' '}
          for refeeding after fasts.
        </p>
        <p className="text-xs text-slate-500 dark:text-slate-500 mt-3">
          Estimates only — not medical or dietary advice. Consult your healthcare provider before changing your diet.
        </p>
      </div>

      {CATEGORIES.map((category) => {
        const items = RECIPES.filter((r) => r.category === category);
        if (!items.length) return null;

        return (
          <section key={category} className="mb-12">
            <h2 className="text-lg font-semibold mb-4">{RECIPE_CATEGORY_LABEL[category]}</h2>
            <div className="grid sm:grid-cols-2 gap-4">
              {items.map((recipe) => (
                <RecipeCard key={recipe.slug} recipe={recipe} />
              ))}
            </div>
          </section>
        );
      })}

      <AdSlot placement="content" />

      <section className="mt-12 pt-10 border-t border-slate-200 dark:border-slate-800" aria-labelledby="recipe-guides">
        <h2 id="recipe-guides" className="text-lg font-semibold mb-3">
          Related guides
        </h2>
        <ul className="space-y-2 text-sm">
          {featuredGuides.map((guide) => (
            <li key={guide.slug}>
              <Link to={`/guides/${guide.slug}`} className="text-teal-600 dark:text-teal-400 hover:underline">
                {guide.title}
              </Link>
            </li>
          ))}
          <li>
            <Link to="/guides" className="text-teal-600 dark:text-teal-400 hover:underline font-medium">
              View all guides →
            </Link>
          </li>
        </ul>
      </section>
    </main>
  );
}

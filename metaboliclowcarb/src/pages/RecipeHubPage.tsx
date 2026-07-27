import { Link, Navigate } from 'react-router-dom';
import { usePageMeta } from '../hooks/usePageMeta';
import { useJsonLd } from '../hooks/useJsonLd';
import { getRecipeHub, RECIPE_HUBS } from '../lib/recipes/recipeHubs';
import { RecipeCard } from '../components/RecipeCard';
import ContentMonetizationSlot from '../components/ContentMonetizationSlot';
import { GUIDES } from '../lib/guides/guides';
import { itemListSchema, pageUrl } from '../lib/schema/jsonLd';

interface RecipeHubPageProps {
  hubId: string;
}

export default function RecipeHubPage({ hubId }: RecipeHubPageProps) {
  const hub = getRecipeHub(hubId);
  const recipes = hub?.getRecipes() ?? [];

  usePageMeta({
    title: hub?.metaTitle ?? 'Recipes',
    description: hub?.description ?? '',
    path: hub?.path ?? '/recipes',
  });

  useJsonLd(
    'recipe-hub-list-schema',
    hub
      ? itemListSchema(
          hub.title,
          recipes.map((recipe) => ({
            name: recipe.title,
            url: pageUrl(`/recipes/${recipe.slug}`),
          }))
        )
      : null
  );

  if (!hub) {
    return <Navigate to="/recipes" replace />;
  }

  const relatedGuides = GUIDES.filter((g) =>
    ['getting-started-keto-low-carb', 'net-carbs-for-insulin-resistance', 'best-first-meal-after-fasting'].includes(
      g.slug
    )
  );

  return (
    <main id="main-content" className="max-w-5xl mx-auto px-4 sm:px-6 py-8 sm:py-12" role="main">
      <nav className="text-sm text-slate-500 dark:text-slate-400 mb-6">
        <Link to="/recipes" className="hover:text-teal-600 dark:hover:text-teal-400">
          Recipes
        </Link>
        <span className="mx-2">/</span>
        <span className="text-slate-700 dark:text-slate-300">{hub.title}</span>
      </nav>

      <header className="mb-10 max-w-3xl">
        <h1 className="text-2xl sm:text-3xl font-bold tracking-tight mb-3">{hub.title}</h1>
        {hub.intro.map((p) => (
          <p key={p.slice(0, 48)} className="text-slate-600 dark:text-slate-400 text-sm sm:text-base mb-3 leading-relaxed">
            {p}
          </p>
        ))}
        <p className="text-sm text-slate-500 dark:text-slate-400">
          {recipes.length} recipes · Verify packaged ingredients with the{' '}
          <Link to="/net-carb-calculator" className="text-teal-600 dark:text-teal-400 hover:underline">
            net carb calculator
          </Link>{' '}
          · Set daily targets with the{' '}
          <Link to="/keto-macro-calculator" className="text-teal-600 dark:text-teal-400 hover:underline">
            keto macro calculator
          </Link>
          .
        </p>
      </header>

      <div className="flex flex-wrap gap-2 mb-8">
        {RECIPE_HUBS.map((h) => (
          <Link
            key={h.id}
            to={h.path}
            className={`text-xs px-3 py-1.5 rounded-full border transition-colors ${
              h.id === hub.id
                ? 'border-teal-600 bg-teal-50 text-teal-800 dark:bg-teal-950/40 dark:text-teal-300 dark:border-teal-500'
                : 'border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-300 hover:border-teal-500'
            }`}
          >
            {h.id === 'under-10g-net-carbs' ? 'Under 10g' : h.id === 'keto' ? 'Keto' : h.title.split(' ')[0]}
          </Link>
        ))}
      </div>

      <div className="grid sm:grid-cols-2 gap-4 mb-10">
        {recipes.map((recipe) => (
          <RecipeCard key={recipe.slug} recipe={recipe} />
        ))}
      </div>

      {hub.practicalGuide && (
        <section
          className="mb-10 max-w-3xl prose prose-slate dark:prose-invert"
          aria-labelledby="recipe-hub-practical-guide"
        >
          <h2 id="recipe-hub-practical-guide" className="text-xl font-semibold">
            {hub.practicalGuide.title}
          </h2>
          {hub.practicalGuide.paragraphs.map((paragraph) => (
            <p key={paragraph.slice(0, 64)} className="text-sm sm:text-base text-slate-600 dark:text-slate-400 leading-relaxed">
              {paragraph}
            </p>
          ))}
          <h3 className="text-base font-semibold">Before you prep</h3>
          <ul className="text-sm sm:text-base text-slate-600 dark:text-slate-400 leading-relaxed">
            {hub.practicalGuide.checklist.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
          <h3 className="text-base font-semibold">How to use the estimates</h3>
          <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400 leading-relaxed">
            Recipe values are working estimates intended for the listed quantities and stated number of servings. They
            are not laboratory analyses, and products can differ by brand. Check the package values for the ingredients
            you use and recalculate when you change a portion or substitution.
          </p>
        </section>
      )}

      <ContentMonetizationSlot placement="content" guides={relatedGuides} />

      <p className="text-xs text-slate-500 dark:text-slate-400 mt-8">
        Estimates only — not medical advice. Browse all{' '}
        <Link to="/recipes" className="text-teal-600 dark:text-teal-400 hover:underline">
          recipes
        </Link>{' '}
        or{' '}
        <Link to="/guides" className="text-teal-600 dark:text-teal-400 hover:underline">
          guides
        </Link>
        .
      </p>
    </main>
  );
}

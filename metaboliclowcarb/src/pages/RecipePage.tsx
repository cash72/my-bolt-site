import { Link, Navigate, useParams } from 'react-router-dom';
import { usePageMeta } from '../hooks/usePageMeta';
import { useJsonLd } from '../hooks/useJsonLd';
import { getRecipeBySlug } from '../lib/recipes/recipes';
import { getGuideBySlug } from '../lib/guides/guides';
import type { Recipe } from '../lib/recipes/types';
import { RECIPE_CATEGORY_LABEL } from '../lib/recipes/types';
import { PlanBadges } from '../components/RecipeCard';
import { GuideCard } from '../components/GuideCard';
import { RecipeCard } from '../components/RecipeCard';
import ContentMonetizationSlot from '../components/ContentMonetizationSlot';
import AdSlot from '../components/AdSlot';
import { getRecipeImagePath, getRecipeImageUrl } from '../lib/recipes/images';
import imageManifest from '../lib/recipes/imageManifest.json';
import { breadcrumbSchema, pageUrl } from '../lib/schema/jsonLd';
import { SITE_URL } from '../lib/site';
import { getRecipeArticle } from '../lib/recipes/recipeArticles';
import { getRelatedRecipes } from '../lib/recipes/recipeHubs';
import SessionDeepener from '../components/SessionDeepener';
import { RECIPE_NEXT_STEPS } from '../lib/sessionNextSteps';

type ImageCredit = {
  path: string;
  source: string;
  photoId: string;
  photographer: string;
  url: string;
};

function recipeSchema(recipe: Recipe): Record<string, unknown> {
  return {
    '@context': 'https://schema.org',
    '@type': 'Recipe',
    name: recipe.title,
    description: recipe.description,
    image: [getRecipeImageUrl(recipe)],
    url: pageUrl(`/recipes/${recipe.slug}`),
    recipeCategory: RECIPE_CATEGORY_LABEL[recipe.category],
    recipeYield: `${recipe.servings} ${recipe.servings === 1 ? 'serving' : 'servings'}`,
    prepTime: `PT${recipe.prepMinutes}M`,
    cookTime: `PT${recipe.cookMinutes}M`,
    totalTime: `PT${recipe.prepMinutes + recipe.cookMinutes}M`,
    recipeIngredient: recipe.ingredients,
    recipeInstructions: recipe.steps.map((text, index) => ({
      '@type': 'HowToStep',
      position: index + 1,
      text,
    })),
    ...(recipe.proteinPerServing != null
      ? {
          nutrition: {
            '@type': 'NutritionInformation',
            proteinContent: `${recipe.proteinPerServing} g`,
          },
        }
      : {}),
  };
}

export default function RecipePage() {
  const { slug } = useParams<{ slug: string }>();
  const recipe = slug ? getRecipeBySlug(slug) : undefined;

  usePageMeta({
    title: recipe ? `${recipe.title} — Low Carb Recipe` : 'Recipe',
    description: recipe?.description ?? '',
    path: recipe ? `/recipes/${recipe.slug}` : '/recipes',
    image: recipe ? getRecipeImageUrl(recipe) : undefined,
    ogType: 'article',
  });

  useJsonLd(
    'recipe-breadcrumb-schema',
    recipe
      ? breadcrumbSchema([
          { name: 'Recipes', path: '/recipes' },
          { name: RECIPE_CATEGORY_LABEL[recipe.category], path: `/recipes/${recipe.category}` },
          { name: recipe.title, path: `/recipes/${recipe.slug}` },
        ])
      : null
  );

  useJsonLd('recipe-schema', recipe ? recipeSchema(recipe) : null);

  if (!recipe) {
    return <Navigate to="/recipes" replace />;
  }

  const article = getRecipeArticle(recipe);
  const relatedGuides = (recipe.relatedGuideSlugs ?? [])
    .map((s) => getGuideBySlug(s))
    .filter((g): g is NonNullable<typeof g> => g != null);

  const relatedRecipes = getRelatedRecipes(recipe, 3);
  const photoCredit = (imageManifest as Record<string, ImageCredit>)[recipe.slug];

  return (
    <main id="main-content" className="max-w-3xl mx-auto px-4 sm:px-6 py-8 sm:py-12" role="main">
      <nav className="text-sm text-slate-500 dark:text-slate-400 mb-6">
        <Link to="/recipes" className="hover:text-teal-600 dark:hover:text-teal-400">
          Recipes
        </Link>
        <span className="mx-2">/</span>
        <Link
          to={`/recipes/${recipe.category}`}
          className="hover:text-teal-600 dark:hover:text-teal-400"
        >
          {RECIPE_CATEGORY_LABEL[recipe.category]}
        </Link>
        <span className="mx-2">/</span>
        <span className="text-slate-700 dark:text-slate-300">{recipe.title}</span>
      </nav>

      <img
        src={getRecipeImagePath(recipe)}
        alt={recipe.title}
        width={1200}
        height={800}
        className="w-full aspect-[3/2] object-cover rounded-xl mb-6 border border-slate-200 dark:border-slate-800"
        loading="eager"
        decoding="async"
      />
      {photoCredit && (
        <p className="text-xs text-slate-400 dark:text-slate-500 -mt-4 mb-6">
          Photo:{' '}
          <a
            href={photoCredit.url}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-teal-600 dark:hover:text-teal-400"
          >
            {photoCredit.photographer}
          </a>{' '}
          / {photoCredit.source}
        </p>
      )}

      <p className="text-xs font-medium text-teal-700 dark:text-teal-400 mb-2">
        {RECIPE_CATEGORY_LABEL[recipe.category]}
      </p>
      <h1 className="text-2xl sm:text-3xl font-bold tracking-tight mb-3">{recipe.title}</h1>
      <p className="text-slate-600 dark:text-slate-400 mb-4">{recipe.description}</p>

      <PlanBadges recipe={recipe} />

      <dl className="grid grid-cols-2 sm:grid-cols-4 gap-3 mt-6 mb-8 text-sm">
        <div className="p-3 rounded-lg border border-slate-200 dark:border-slate-800">
          <dt className="text-slate-500 dark:text-slate-400 text-xs">Net carbs</dt>
          <dd className="font-semibold">~{recipe.netCarbsPerServing}g</dd>
        </div>
        <div className="p-3 rounded-lg border border-slate-200 dark:border-slate-800">
          <dt className="text-slate-500 dark:text-slate-400 text-xs">Servings</dt>
          <dd className="font-semibold">{recipe.servings}</dd>
        </div>
        <div className="p-3 rounded-lg border border-slate-200 dark:border-slate-800">
          <dt className="text-slate-500 dark:text-slate-400 text-xs">Prep</dt>
          <dd className="font-semibold">{recipe.prepMinutes} min</dd>
        </div>
        <div className="p-3 rounded-lg border border-slate-200 dark:border-slate-800">
          <dt className="text-slate-500 dark:text-slate-400 text-xs">Cook</dt>
          <dd className="font-semibold">{recipe.cookMinutes} min</dd>
        </div>
      </dl>

      <section className="mb-8 prose prose-slate dark:prose-invert max-w-none">
        <h2 className="text-lg font-semibold mb-3 !mt-0">Why this meal fits low carb</h2>
        <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">{article.whyItFits}</p>
        {article.swaps && (
          <>
            <h3 className="text-base font-semibold mt-5 mb-2">Swaps</h3>
            <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">{article.swaps}</p>
          </>
        )}
        {article.mealPrep && (
          <>
            <h3 className="text-base font-semibold mt-5 mb-2">Meal prep</h3>
            <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">{article.mealPrep}</p>
          </>
        )}
        {article.ingredientNotes && (
          <>
            <h3 className="text-base font-semibold mt-5 mb-2">Choose and prep the ingredients</h3>
            <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">{article.ingredientNotes}</p>
          </>
        )}
        {article.servingNotes && (
          <>
            <h3 className="text-base font-semibold mt-5 mb-2">Serve it well</h3>
            <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">{article.servingNotes}</p>
          </>
        )}
      </section>

      <section className="mb-8">
        <h2 className="text-lg font-semibold mb-3">Ingredients</h2>
        <ul className="list-disc list-inside space-y-1.5 text-slate-700 dark:text-slate-300 text-sm">
          {recipe.ingredients.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </section>

      <AdSlot placement="midGuide" className="my-8" />

      <section className="mb-8">
        <h2 className="text-lg font-semibold mb-3">Instructions</h2>
        <ol className="list-decimal list-inside space-y-3 text-slate-700 dark:text-slate-300 text-sm">
          {recipe.steps.map((step) => (
            <li key={step} className="leading-relaxed">
              {step}
            </li>
          ))}
        </ol>
      </section>

      {recipe.tips && (
        <section className="mb-8 p-4 rounded-xl bg-slate-100 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800">
          <h2 className="text-sm font-semibold mb-2">Tips</h2>
          <p className="text-sm text-slate-600 dark:text-slate-400">{recipe.tips}</p>
        </section>
      )}

      <section
        className="mb-8 p-4 rounded-xl border border-teal-200 dark:border-teal-900 bg-teal-50/50 dark:bg-teal-950/20"
        aria-labelledby="recipe-tools"
      >
        <h2 id="recipe-tools" className="text-sm font-semibold mb-2 text-teal-900 dark:text-teal-200">
          Check the numbers
        </h2>
        <p className="text-sm text-slate-600 dark:text-slate-400 mb-3">
          This recipe is about <strong>~{recipe.netCarbsPerServing}g net carbs</strong> per serving
          {recipe.proteinPerServing ? ` and ~${recipe.proteinPerServing}g protein` : ''}. Verify packaged ingredients
          and set your daily budget:
        </p>
        <ul className="space-y-1.5 text-sm mb-3">
          <li>
            <Link to="/net-carb-calculator" className="text-teal-700 dark:text-teal-400 hover:underline font-medium">
              Net carb calculator
            </Link>
            <span className="text-slate-500"> — label math for sauces, yogurt, sausages</span>
          </li>
          <li>
            <Link to="/keto-macro-calculator" className="text-teal-700 dark:text-teal-400 hover:underline font-medium">
              Keto macro calculator
            </Link>
            <span className="text-slate-500"> — daily protein / fat / carb targets</span>
          </li>
          <li>
            <Link
              to="/recipes/under-10g-net-carbs"
              className="text-teal-700 dark:text-teal-400 hover:underline font-medium"
            >
              More recipes under 10g net carbs
            </Link>
          </li>
        </ul>
        <SessionDeepener links={RECIPE_NEXT_STEPS} />
      </section>

      <ContentMonetizationSlot placement="content" guides={relatedGuides} />

      {relatedGuides.length > 0 && (
        <section className="mb-8" aria-labelledby="related-guides">
          <h2 id="related-guides" className="text-lg font-semibold mb-4">
            Related guides
          </h2>
          <div className="grid sm:grid-cols-2 gap-4">
            {relatedGuides.map((guide) => (
              <GuideCard key={guide.slug} guide={guide} />
            ))}
          </div>
        </section>
      )}

      {relatedRecipes.length > 0 && (
        <section className="mb-8" aria-labelledby="related-recipes">
          <h2 id="related-recipes" className="text-lg font-semibold mb-4">
            Cook next
          </h2>
          <div className="grid sm:grid-cols-2 gap-4">
            {relatedRecipes.map((r) => (
              <RecipeCard key={r.slug} recipe={r} />
            ))}
          </div>
          <p className="mt-4 text-sm">
            <Link
              to={`/recipes/${recipe.category}`}
              className="text-teal-600 dark:text-teal-400 hover:underline font-medium"
            >
              More {RECIPE_CATEGORY_LABEL[recipe.category].toLowerCase()} recipes →
            </Link>
          </p>
        </section>
      )}

      <p className="text-xs text-slate-500 dark:text-slate-400 mt-8 leading-relaxed">
        Net carb and protein values are working estimates intended for the listed quantities and stated servings; they
        are not laboratory analyses or medical advice. Brands and substitutions can change the result. Verify packaged
        foods with our{' '}
        <Link to="/net-carb-calculator" className="text-teal-600 dark:text-teal-400 hover:underline">
          net carb calculator
        </Link>
        . {SITE_URL}
      </p>
    </main>
  );
}

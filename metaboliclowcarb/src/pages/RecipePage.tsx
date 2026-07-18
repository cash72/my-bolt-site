import { useEffect } from 'react';
import { Link, Navigate, useParams } from 'react-router-dom';
import { usePageMeta } from '../hooks/usePageMeta';
import { useJsonLd } from '../hooks/useJsonLd';
import { getRecipeBySlug, RECIPES } from '../lib/recipes/recipes';
import { getGuideBySlug } from '../lib/guides/guides';
import { RECIPE_CATEGORY_LABEL } from '../lib/recipes/types';
import { PlanBadges } from '../components/RecipeCard';
import { GuideCard } from '../components/GuideCard';
import { RecipeCard } from '../components/RecipeCard';
import ContentMonetizationSlot from '../components/ContentMonetizationSlot';
import { getRecipeImagePath, getRecipeImageUrl } from '../lib/recipes/images';
import imageManifest from '../lib/recipes/imageManifest.json';
import { breadcrumbSchema } from '../lib/schema/jsonLd';
import { SITE_NAME, SITE_URL } from '../lib/site';

type ImageCredit = {
  path: string;
  source: string;
  photoId: string;
  photographer: string;
  url: string;
};

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
          { name: recipe.title, path: `/recipes/${recipe.slug}` },
        ])
      : null
  );

  useEffect(() => {
    if (!recipe) return;

    const scriptId = 'recipe-schema';
    let script = document.getElementById(scriptId) as HTMLScriptElement | null;
    if (!script) {
      script = document.createElement('script');
      script.id = scriptId;
      script.type = 'application/ld+json';
      document.head.appendChild(script);
    }

    const imageUrl = getRecipeImageUrl(recipe);

    script.textContent = JSON.stringify({
      '@context': 'https://schema.org',
      '@type': 'Recipe',
      name: recipe.title,
      description: recipe.description,
      image: [imageUrl],
      url: `${SITE_URL}/recipes/${recipe.slug}/`,
      author: {
        '@type': 'Organization',
        name: SITE_NAME,
        url: `${SITE_URL}/`,
      },
      recipeCategory: RECIPE_CATEGORY_LABEL[recipe.category],
      recipeYield: `${recipe.servings} servings`,
      prepTime: `PT${recipe.prepMinutes}M`,
      cookTime: `PT${recipe.cookMinutes}M`,
      totalTime: `PT${recipe.prepMinutes + recipe.cookMinutes}M`,
      recipeIngredient: recipe.ingredients,
      recipeInstructions: recipe.steps.map((text, i) => ({
        '@type': 'HowToStep',
        position: i + 1,
        text,
      })),
      nutrition: {
        '@type': 'NutritionInformation',
        carbohydrateContent: `${recipe.netCarbsPerServing} g net carbs (estimated)`,
        ...(recipe.proteinPerServing
          ? { proteinContent: `${recipe.proteinPerServing} g (estimated)` }
          : {}),
      },
    });

    return () => {
      document.getElementById(scriptId)?.remove();
    };
  }, [recipe]);

  if (!recipe) {
    return <Navigate to="/recipes" replace />;
  }

  const relatedGuides = (recipe.relatedGuideSlugs ?? [])
    .map((s) => getGuideBySlug(s))
    .filter((g): g is NonNullable<typeof g> => g != null);

  const relatedRecipes = RECIPES.filter((r) => r.slug !== recipe.slug && r.category === recipe.category)
    .slice(0, 3);

  const photoCredit = (imageManifest as Record<string, ImageCredit>)[recipe.slug];

  return (
    <main id="main-content" className="max-w-3xl mx-auto px-4 sm:px-6 py-8 sm:py-12" role="main">
      <nav className="text-sm text-slate-500 dark:text-slate-400 mb-6">
        <Link to="/recipes" className="hover:text-teal-600 dark:hover:text-teal-400">
          Recipes
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

      <section className="mb-8">
        <h2 className="text-lg font-semibold mb-3">Ingredients</h2>
        <ul className="list-disc list-inside space-y-1.5 text-slate-700 dark:text-slate-300 text-sm">
          {recipe.ingredients.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </section>

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
            More {RECIPE_CATEGORY_LABEL[recipe.category].toLowerCase()} recipes
          </h2>
          <div className="grid sm:grid-cols-2 gap-4">
            {relatedRecipes.map((r) => (
              <RecipeCard key={r.slug} recipe={r} />
            ))}
          </div>
        </section>
      )}

      <p className="text-xs text-slate-500 dark:text-slate-400 mt-8 leading-relaxed">
        Net carb and nutrition values are estimates for {SITE_NAME} — not medical advice. Verify packaged foods with
        our{' '}
        <Link to="/net-carb-calculator" className="text-teal-600 dark:text-teal-400 hover:underline">
          net carb calculator
        </Link>
        . {SITE_URL}
      </p>
    </main>
  );
}

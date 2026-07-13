import { Link } from 'react-router-dom';
import { getRecipeImagePath } from '../lib/recipes/images';
import type { Recipe } from '../lib/recipes/types';
import { PLAN_BADGE_LABEL, RECIPE_CATEGORY_LABEL } from '../lib/recipes/types';

export function RecipeCard({ recipe }: { recipe: Recipe }) {
  return (
    <Link
      to={`/recipes/${recipe.slug}`}
      className="block rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/50 overflow-hidden hover:border-teal-300 dark:hover:border-teal-800 transition-colors"
    >
      <img
        src={getRecipeImagePath(recipe)}
        alt={recipe.title}
        width={600}
        height={400}
        className="w-full aspect-[3/2] object-cover"
        loading="lazy"
        decoding="async"
      />
      <div className="p-5">
      <p className="text-xs font-medium text-teal-700 dark:text-teal-400 mb-1">
        {RECIPE_CATEGORY_LABEL[recipe.category]}
      </p>
      <h2 className="font-semibold text-slate-900 dark:text-slate-100 mb-2">{recipe.title}</h2>
      <p className="text-sm text-slate-600 dark:text-slate-400 line-clamp-2 mb-3">{recipe.description}</p>
      <div className="flex flex-wrap gap-2 text-xs">
        <span className="px-2 py-0.5 rounded-full bg-teal-50 dark:bg-teal-950/40 text-teal-800 dark:text-teal-300">
          ~{recipe.netCarbsPerServing}g net carbs
        </span>
        {recipe.fitsPlans.slice(0, 2).map((plan) => (
          <span
            key={plan}
            className="px-2 py-0.5 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400"
          >
            {PLAN_BADGE_LABEL[plan]}
          </span>
        ))}
      </div>
      </div>
    </Link>
  );
}

export function PlanBadges({ recipe }: { recipe: Recipe }) {
  return (
    <div className="flex flex-wrap gap-2">
      {recipe.fitsPlans.map((plan) => (
        <span
          key={plan}
          className="text-xs px-2.5 py-1 rounded-full bg-teal-50 dark:bg-teal-950/40 text-teal-800 dark:text-teal-300"
        >
          {PLAN_BADGE_LABEL[plan]}
        </span>
      ))}
    </div>
  );
}

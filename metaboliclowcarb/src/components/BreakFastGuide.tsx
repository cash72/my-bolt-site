import { Link } from 'react-router-dom';
import { UtensilsCrossed } from 'lucide-react';
import { getBreakFastGuide, getBreakFastRecipes } from '../lib/fasting/breakFast';

interface BreakFastGuideProps {
  elapsedHours: number;
  goalHours: number;
  prominent?: boolean;
}

export default function BreakFastGuidePanel({
  elapsedHours,
  goalHours,
  prominent = false,
}: BreakFastGuideProps) {
  const guide = getBreakFastGuide(elapsedHours, goalHours);
  const recipes = getBreakFastRecipes(guide.recipeSlugs);

  return (
    <section
      id="break-fast-guide"
      aria-labelledby="break-fast-heading"
      className={`rounded-xl border space-y-5 ${
        prominent
          ? 'border-teal-300 dark:border-teal-800 bg-teal-50/80 dark:bg-teal-950/40 p-5 sm:p-6 ring-2 ring-teal-500/20'
          : 'border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/50 p-5'
      }`}
    >
      <div>
        <h2
          id="break-fast-heading"
          className="text-lg font-semibold text-slate-900 dark:text-slate-100 flex items-center gap-2"
        >
          <UtensilsCrossed className="w-5 h-5 text-teal-600" aria-hidden="true" />
          {guide.title}
        </h2>
        <p className="text-sm text-slate-600 dark:text-slate-400 mt-2 leading-relaxed">{guide.summary}</p>
      </div>

      <div>
        <h3 className="text-sm font-semibold text-slate-800 dark:text-slate-200 mb-2">How to break your fast</h3>
        <ol className="space-y-2">
          {guide.steps.map((step, i) => (
            <li key={step} className="text-sm text-slate-600 dark:text-slate-400 flex gap-2 leading-relaxed">
              <span className="shrink-0 w-5 h-5 rounded-full bg-teal-100 dark:bg-teal-900/50 text-teal-700 dark:text-teal-400 text-xs font-semibold flex items-center justify-center">
                {i + 1}
              </span>
              <span>{step}</span>
            </li>
          ))}
        </ol>
      </div>

      <div>
        <h3 className="text-sm font-semibold text-slate-800 dark:text-slate-200 mb-2">What to avoid</h3>
        <ul className="space-y-1">
          {guide.avoid.map((item) => (
            <li key={item} className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
              • {item}
            </li>
          ))}
        </ul>
      </div>

      <div>
        <h3 className="text-sm font-semibold text-slate-800 dark:text-slate-200 mb-2">Expert tips</h3>
        <ul className="space-y-2">
          {guide.doctorTips.map((tip) => (
            <li
              key={tip.tip}
              className="text-xs rounded-lg border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900/40 px-3 py-2"
            >
              <span className="font-medium text-teal-700 dark:text-teal-400">{tip.doctor}:</span>{' '}
              <span className="text-slate-600 dark:text-slate-400">{tip.tip}</span>
            </li>
          ))}
        </ul>
      </div>

      {recipes.length > 0 && (
        <div>
          <div className="flex items-end justify-between gap-3 mb-3">
            <h3 className="text-sm font-semibold text-slate-800 dark:text-slate-200">
              Suggested break-fast meals
            </h3>
            <Link to="/recipes" className="text-xs text-teal-600 dark:text-teal-400 hover:underline shrink-0">
              All recipes
            </Link>
          </div>
          <ul className="grid sm:grid-cols-2 gap-3">
            {recipes.map((recipe) => (
              <li key={recipe.slug}>
                <Link
                  to={`/recipes/${recipe.slug}`}
                  className="block h-full rounded-lg border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/60 p-4 hover:border-teal-300 dark:hover:border-teal-800 transition-colors"
                >
                  <p className="text-xs font-medium text-teal-700 dark:text-teal-400 mb-1 capitalize">
                    {recipe.category}
                  </p>
                  <p className="font-medium text-sm text-slate-900 dark:text-slate-100 mb-1">{recipe.title}</p>
                  <p className="text-xs text-slate-500 dark:text-slate-400 line-clamp-2 mb-2">{recipe.description}</p>
                  <p className="text-xs text-slate-600 dark:text-slate-400">
                    ~{recipe.netCarbsPerServing}g net carbs
                    {recipe.proteinPerServing != null && ` · ${recipe.proteinPerServing}g protein`}
                  </p>
                </Link>
              </li>
            ))}
          </ul>
          <p className="mt-4 text-sm">
            <Link
              to="/guides/how-to-break-a-24-hour-fast"
              className="text-teal-600 dark:text-teal-400 hover:underline font-medium"
            >
              Read the full break-fast guide →
            </Link>
          </p>
        </div>
      )}
    </section>
  );
}

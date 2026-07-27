import type { DietPlan } from '../metabolic/types';
import { getRecipeBySlug, getRecipesByCategory, RECIPES } from './recipes';
import type { Recipe, RecipeCategory } from './types';
import { RECIPE_CATEGORY_LABEL } from './types';

export type RecipeHubId =
  | RecipeCategory
  | 'keto'
  | 'under-10g-net-carbs';

export interface RecipeHub {
  id: RecipeHubId;
  path: string;
  title: string;
  metaTitle: string;
  description: string;
  intro: string[];
  getRecipes: () => Recipe[];
}

const CATEGORY_INTROS: Record<RecipeCategory, string[]> = {
  breakfast: [
    'Low-carb breakfasts that keep net carbs predictable — eggs, yogurt bowls, and protein-forward plates that work for keto and insulin-resistance-friendly plans.',
    'Use these meals after overnight fasting or as a calm first meal of the day. Check packaged sauces and yogurts with our net carb calculator before you assume “plain” means zero sugar.',
  ],
  lunch: [
    'Lunch ideas built around protein and vegetables instead of bread, tortillas, or rice. Lettuce cups, salads, and bowls keep you full without a mid-afternoon crash for many people.',
    'Pack leftovers in glass containers; most of these hold 2–3 days refrigerated. Pair with water and salt if you are early in a low-carb transition.',
  ],
  dinner: [
    'Dinner recipes with clear net-carb estimates — sheet-pan proteins, zucchini noodles, and vegetable sides that fit strict keto or ~50g IR-style days.',
    'Cook once, reheat twice: many dinners here double as next-day lunch. Finish with a short walk if your clinician has cleared you for light activity after meals.',
  ],
  snack: [
    'Snacks under a small net-carb budget — useful between meals or as a break-fast bridge after longer fasts when a full plate feels like too much.',
    'Portion nuts and cheese carefully; “low carb” still adds up. When in doubt, weigh a serving once so eyeballing stays honest later.',
  ],
};

function categoryHub(category: RecipeCategory): RecipeHub {
  const label = RECIPE_CATEGORY_LABEL[category];
  return {
    id: category,
    path: `/recipes/${category}`,
    title: `${label} low carb recipes`,
    metaTitle: `${label} Low Carb & Keto Recipes`,
    description: `${label} recipes with estimated net carbs for keto and insulin resistance. Blood-sugar-friendly ideas from Metabolic Low Carb.`,
    intro: CATEGORY_INTROS[category],
    getRecipes: () => getRecipesByCategory(category),
  };
}

export const RECIPE_HUBS: RecipeHub[] = [
  categoryHub('breakfast'),
  categoryHub('lunch'),
  categoryHub('dinner'),
  categoryHub('snack'),
  {
    id: 'keto',
    path: '/recipes/keto',
    title: 'Strict keto recipes (~20g net carb days)',
    metaTitle: 'Strict Keto Recipes with Net Carbs',
    description:
      'Recipes that typically fit a strict keto day — low estimated net carbs per serving, protein-forward plates for Metabolic Low Carb.',
    intro: [
      'These recipes are tagged for strict keto plans (about 20g net carbs per day). Per-serving estimates still matter — two servings can blow a tight budget.',
      'Combine with the keto macro calculator for daily protein and fat targets, and verify any packaged ingredients on the net carb calculator.',
    ],
    getRecipes: () => RECIPES.filter((r) => r.fitsPlans.includes('strict_keto' as DietPlan)),
  },
  {
    id: 'under-10g-net-carbs',
    path: '/recipes/under-10g-net-carbs',
    title: 'Recipes under 10g net carbs per serving',
    metaTitle: 'Low Carb Recipes Under 10g Net Carbs',
    description:
      'Low carb recipes with about 10g net carbs or less per serving — useful for keto, OMAD sides, and insulin-resistance-friendly plates.',
    intro: [
      'Every recipe on this hub lists roughly 10g net carbs or less per serving. That makes them easier to stack into a 20g or 50g day without guesswork.',
      'Estimates assume the ingredients and portions listed. Sauces, sweetened yogurt, and “low carb” tortillas can change the math — measure once, then cook with confidence.',
    ],
    getRecipes: () => RECIPES.filter((r) => r.netCarbsPerServing <= 10),
  },
];

export const RECIPE_HUB_IDS = RECIPE_HUBS.map((h) => h.id);

export function getRecipeHub(id: string): RecipeHub | undefined {
  return RECIPE_HUBS.find((h) => h.id === id);
}

export function isRecipeHubSlug(slug: string): boolean {
  return RECIPE_HUB_IDS.includes(slug as RecipeHubId);
}

/** Related recipes: same category first, then same plan, exclude current. */
export function getRelatedRecipes(recipe: Recipe, limit = 3): Recipe[] {
  const sameCategory = RECIPES.filter((r) => r.slug !== recipe.slug && r.category === recipe.category);
  const plan = recipe.fitsPlans[0];
  const samePlan = RECIPES.filter(
    (r) => r.slug !== recipe.slug && r.category !== recipe.category && r.fitsPlans.includes(plan)
  );
  const merged = [...sameCategory, ...samePlan];
  const seen = new Set<string>();
  const out: Recipe[] = [];
  for (const r of merged) {
    if (seen.has(r.slug)) continue;
    seen.add(r.slug);
    out.push(r);
    if (out.length >= limit) break;
  }
  return out;
}

export function recipesForNetCarbBudget(maxNet: number, limit = 3): Recipe[] {
  return RECIPES.filter((r) => r.netCarbsPerServing <= maxNet)
    .sort((a, b) => a.netCarbsPerServing - b.netCarbsPerServing)
    .slice(0, limit);
}

export function featuredHubRecipes(slugs: string[]): Recipe[] {
  return slugs.map((s) => getRecipeBySlug(s)).filter((r): r is Recipe => r != null);
}

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
  practicalGuide?: {
    title: string;
    paragraphs: string[];
    checklist: string[];
  };
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

const CATEGORY_GUIDES: Partial<Record<RecipeCategory, NonNullable<RecipeHub['practicalGuide']>>> = {
  breakfast: {
    title: 'Build a breakfast you can repeat',
    paragraphs: [
      'Start by deciding whether breakfast needs to be cooked now, reheated, or carried out the door. Scrambled eggs and shakshuka suit a slower morning; egg muffins and chia pudding move most of the work to the day before. A no-cook yogurt bowl is fastest, but its label and measured toppings matter more than its simple assembly suggests.',
      'Treat each recipe’s net-carb number as an estimate for the exact listed serving, not a promise for every version of the dish. Flavored yogurt, sweetened plant milk, bottled sauces, and larger fruit portions can change the result quickly. If you alter an ingredient, use its package panel and the net carb calculator to update the meal rather than relying on the recipe badge.',
    ],
    checklist: [
      'Choose one fresh-cooked option and one make-ahead option for the week.',
      'Portion fruit, seeds, and cheese instead of adding them freely from the package.',
      'Keep a savory backup such as eggs for mornings when a planned recipe is unavailable.',
      'Reheat egg dishes until hot, and keep yogurt or prepared chia pudding refrigerated.',
    ],
  },
  lunch: {
    title: 'Pack low-carb lunches that hold up',
    paragraphs: [
      'A reliable packed lunch separates wet ingredients from crisp ones. Keep lettuce leaves, mini peppers, greens, and dressing apart from chicken or tuna salad until you eat. For jar salads, place dressing at the bottom and sturdy ingredients above it, with greens at the top. These small packing choices prevent a low-carb lunch from becoming unappealing by noon.',
      'Use the stated serving count when dividing a batch. A two-serving tuna salad or burger bowl should become two containers before the first meal is served. This makes the per-serving estimate more useful and reduces accidental double portions. When using deli meat, mayonnaise, dressing, salsa, or pickles, compare labels because recipes can only estimate the products specified.',
    ],
    checklist: [
      'Cool cooked meat before sealing it with salad ingredients.',
      'Pack sauces and dressings in a leakproof container and add them at serving time.',
      'Include a fork or spoon and a bowl if the original container is difficult to mix in.',
      'Use an insulated bag and ice pack when lunch cannot go straight into a refrigerator.',
    ],
  },
  snack: {
    title: 'Use snacks deliberately',
    paragraphs: [
      'A useful snack solves a specific problem: a long gap between meals, a small appetite, or the need for a portable option. Choose a defined portion, put it on a plate or in a container, and then close the package. Cheese, nuts, yogurt, and cottage cheese are easy to keep eating when the serving is not separated first.',
      'Match the snack to the rest of the day instead of assuming every item here fits every carb target. The yogurt-and-berry bowl is tagged for moderate low carb and insulin-resistance plans, while eggs and the cottage-cheese bowl have lower listed estimates. Brand differences still matter, especially for dairy, seasoning blends, deli meat, and anything marketed as sugar-free.',
    ],
    checklist: [
      'Pick protein-centered snacks when the next full meal is several hours away.',
      'Measure nuts, berries, and condiments at least once before relying on visual portions.',
      'Keep dairy and prepared eggs chilled when packing them away from home.',
      'If you are routinely hungry soon after a snack, consider whether a planned meal would be more useful.',
    ],
  },
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
    practicalGuide: CATEGORY_GUIDES[category],
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

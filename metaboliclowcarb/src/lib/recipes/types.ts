import type { DietPlan } from '../metabolic/types';

export type RecipeCategory = 'breakfast' | 'lunch' | 'dinner' | 'snack';

export interface Recipe {
  slug: string;
  title: string;
  description: string;
  category: RecipeCategory;
  /** Which macro plans this recipe typically fits per serving */
  fitsPlans: DietPlan[];
  netCarbsPerServing: number;
  proteinPerServing?: number;
  servings: number;
  prepMinutes: number;
  cookMinutes: number;
  ingredients: string[];
  steps: string[];
  tips?: string;
  relatedGuideSlugs?: string[];
}

export const RECIPE_CATEGORY_LABEL: Record<RecipeCategory, string> = {
  breakfast: 'Breakfast',
  lunch: 'Lunch',
  dinner: 'Dinner',
  snack: 'Snack',
};

export const PLAN_BADGE_LABEL: Record<DietPlan, string> = {
  strict_keto: 'Strict keto',
  low_carb_ir: 'Insulin resistance',
  moderate_low_carb: 'Moderate low carb',
};

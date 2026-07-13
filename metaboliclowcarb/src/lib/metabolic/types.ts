export type Sex = 'female' | 'male';

export type ActivityLevel = 'sedentary' | 'light' | 'moderate' | 'active' | 'very_active';

export type DietPlan = 'strict_keto' | 'low_carb_ir' | 'moderate_low_carb';

export interface NetCarbInput {
  totalCarbsG: number;
  fiberG: number;
  sugarAlcoholsG: number;
  servings: number;
}

export interface NetCarbResult {
  netCarbsPerServingG: number;
  netCarbsTotalG: number;
  totalCarbsG: number;
  fiberG: number;
  sugarAlcoholsG: number;
  servings: number;
}

export interface MacroInput {
  sex: Sex;
  age: number;
  weightLbs: number;
  heightFt: number;
  heightIn: number;
  activity: ActivityLevel;
  plan: DietPlan;
}

export interface MacroResult {
  calories: number;
  proteinG: number;
  fatG: number;
  netCarbsG: number;
  proteinCalories: number;
  fatCalories: number;
  carbCalories: number;
  tdee: number;
  bmr: number;
  planLabel: string;
}

export type ToolId = 'net-carb' | 'macro' | 'fasting-clock';

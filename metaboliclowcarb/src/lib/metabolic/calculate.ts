import type {
  ActivityLevel,
  DietPlan,
  MacroInput,
  MacroResult,
  NetCarbInput,
  NetCarbResult,
  Sex,
  TdeeInput,
  TdeeResult,
} from './types';

const ACTIVITY_MULTIPLIER: Record<ActivityLevel, number> = {
  sedentary: 1.2,
  light: 1.375,
  moderate: 1.55,
  active: 1.725,
  very_active: 1.9,
};

const PLAN_NET_CARBS: Record<DietPlan, number> = {
  strict_keto: 20,
  low_carb_ir: 50,
  moderate_low_carb: 100,
};

const PLAN_LABEL: Record<DietPlan, string> = {
  strict_keto: 'Strict keto (20g net carbs)',
  low_carb_ir: 'Low carb for insulin resistance (50g net carbs)',
  moderate_low_carb: 'Moderate low carb (100g net carbs)',
};

export function calcNetCarbs(input: NetCarbInput): NetCarbResult {
  const servings = Math.max(input.servings, 1);
  const netPerServing = Math.max(0, input.totalCarbsG - input.fiberG - input.sugarAlcoholsG);

  return {
    netCarbsPerServingG: netPerServing,
    netCarbsTotalG: netPerServing * servings,
    totalCarbsG: input.totalCarbsG,
    fiberG: input.fiberG,
    sugarAlcoholsG: input.sugarAlcoholsG,
    servings,
  };
}

function toKg(lbs: number): number {
  return lbs * 0.453592;
}

function toCm(ft: number, inches: number): number {
  return ft * 30.48 + inches * 2.54;
}

export function calcBmr(sex: Sex, weightKg: number, heightCm: number, age: number): number {
  if (sex === 'male') {
    return 10 * weightKg + 6.25 * heightCm - 5 * age + 5;
  }
  return 10 * weightKg + 6.25 * heightCm - 5 * age - 161;
}

export function calcTdee(bmr: number, activity: ActivityLevel): number {
  return Math.round(bmr * ACTIVITY_MULTIPLIER[activity]);
}

export function calcTdeeTarget(input: TdeeInput): TdeeResult | null {
  if (input.age <= 0 || input.weightLbs <= 0 || input.heightFt < 0 || input.heightIn < 0) {
    return null;
  }
  const bmr = Math.round(calcBmr(input.sex, toKg(input.weightLbs), toCm(input.heightFt, input.heightIn), input.age));
  const tdee = calcTdee(bmr, input.activity);
  const deficitPct = Math.min(40, Math.max(0, input.deficitPct || 0));
  const deficitKcal = Math.round(tdee * (deficitPct / 100));
  const targetCalories = Math.max(bmr, tdee - deficitKcal);
  return { bmr, tdee, targetCalories, deficitPct, deficitKcal };
}

export function calcMacros(input: MacroInput): MacroResult | null {
  const age = input.age;
  const weightLbs = input.weightLbs;
  const heightFt = input.heightFt;
  const heightIn = input.heightIn;

  if (age <= 0 || weightLbs <= 0 || heightFt < 0 || heightIn < 0) {
    return null;
  }

  const weightKg = toKg(weightLbs);
  const heightCm = toCm(heightFt, heightIn);
  const bmr = calcBmr(input.sex, weightKg, heightCm, age);
  const tdee = calcTdee(bmr, input.activity);

  const netCarbsG = PLAN_NET_CARBS[input.plan];
  const carbCalories = netCarbsG * 4;
  const proteinG = Math.round(weightLbs * 0.8);
  const proteinCalories = proteinG * 4;
  const fatCalories = Math.max(tdee - proteinCalories - carbCalories, 0);
  const fatG = Math.round(fatCalories / 9);

  return {
    calories: tdee,
    proteinG,
    fatG,
    netCarbsG,
    proteinCalories,
    fatCalories,
    carbCalories,
    tdee,
    bmr: Math.round(bmr),
    planLabel: PLAN_LABEL[input.plan],
  };
}

export function formatGrams(value: number): string {
  return `${Math.round(value * 10) / 10}g`;
}

export function formatCalories(value: number): string {
  return `${Math.round(value).toLocaleString()} kcal`;
}

export function planLabel(plan: DietPlan): string {
  return PLAN_LABEL[plan];
}

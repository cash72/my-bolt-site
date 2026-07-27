import type { NextStepLink } from '../components/SessionDeepener';

/** Post-results links to raise pages/session for AdSense. */
export const CALCULATOR_NEXT_STEPS: NextStepLink[] = [
  {
    to: '/recipes/under-10g-net-carbs',
    label: 'Recipes under 10g net carbs',
    hint: 'Turn your label math into a meal',
  },
  {
    to: '/keto-macro-calculator',
    label: 'Keto macro calculator',
    hint: 'Protein, fat, and net carbs',
  },
  {
    to: '/guides/how-to-read-nutrition-labels-net-carbs',
    label: 'How to read labels for net carbs',
    hint: 'Fiber and sugar alcohols explained',
  },
];

export const TDEE_NEXT_STEPS: NextStepLink[] = [
  {
    to: '/weight-loss-macro-calculator',
    label: 'Weight-loss macro calculator',
    hint: 'Turn TDEE into a cut plan',
  },
  {
    to: '/recipes/dinner',
    label: 'Dinner recipes',
    hint: 'Protein-forward plates under control',
  },
  {
    to: '/guides/protein-on-keto-and-low-carb',
    label: 'Protein on keto guide',
    hint: 'Hit protein without blowing carbs',
  },
];

export const MACRO_NEXT_STEPS: NextStepLink[] = [
  {
    to: '/recipes/keto',
    label: 'Strict keto recipe hub',
    hint: 'Meals that usually fit a 20g day',
  },
  {
    to: '/recipes/breakfast',
    label: 'Breakfast recipes',
    hint: 'Eggs, yogurt bowls, and refeeds',
  },
  {
    to: '/guides/getting-started-keto-low-carb',
    label: 'Getting started with keto',
    hint: 'First two weeks on low carb',
  },
];

export const FASTING_NEXT_STEPS: NextStepLink[] = [
  {
    to: '/guides/best-first-meal-after-fasting',
    label: 'Best first meal after fasting',
    hint: 'How to refeed gently',
  },
  {
    to: '/recipes/break-fast-bone-broth-eggs',
    label: 'Bone broth + eggs break-fast',
    hint: 'Gentle first plate',
  },
  {
    to: '/recipes/scrambled-eggs-spinach',
    label: 'Scrambled eggs with spinach',
    hint: 'Classic low-carb refeed',
  },
];

export const RECIPE_NEXT_STEPS: NextStepLink[] = [
  {
    to: '/net-carb-calculator',
    label: 'Net carb calculator',
    hint: 'Check sauces and packaged sides',
  },
  {
    to: '/keto-macro-calculator',
    label: 'Keto macro calculator',
    hint: 'Fit this meal into your daily budget',
  },
  {
    to: '/guides/how-to-read-nutrition-labels-net-carbs',
    label: 'Read labels for net carbs',
    hint: 'Fiber and sugar alcohols explained',
  },
];

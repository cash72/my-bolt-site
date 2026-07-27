import { getRecipeBySlug } from '../recipes/recipes';
import type { Recipe } from '../recipes/types';

export type BreakFastTier = 'intermittent' | 'extended' | 'prolonged';

export interface BreakFastGuide {
  tier: BreakFastTier;
  title: string;
  summary: string;
  steps: string[];
  avoid: string[];
  tips: string[];
  recipeSlugs: string[];
}

/** Resolve recipe slugs to full recipe objects (skips missing). */
export function getBreakFastRecipes(slugs: string[]): Recipe[] {
  return slugs.map((slug) => getRecipeBySlug(slug)).filter((r): r is Recipe => r != null);
}

export function getBreakFastTier(elapsedHours: number, goalHours: number): BreakFastTier {
  const hours = Math.max(elapsedHours, goalHours);
  if (hours >= 36) return 'prolonged';
  if (hours >= 19) return 'extended';
  return 'intermittent';
}

export function getBreakFastGuide(elapsedHours: number, goalHours: number): BreakFastGuide {
  const tier = getBreakFastTier(elapsedHours, goalHours);

  if (tier === 'prolonged') {
    return {
      tier,
      title: 'Breaking a prolonged fast (36h+)',
      summary:
        'Extended fasts require the gentlest refeed. Refeeding syndrome is a serious risk beyond 24 hours — reintroduce food slowly in small amounts.',
      steps: [
        'Step 1 — Hydrate first: plain water or a small cup of warm bouillon/bone broth. Wait 15–30 minutes.',
        'Step 2 — First bite: a small portion only — think ¼ of a normal meal. Scrambled eggs, cottage cheese, or a few bites of chicken salad.',
        'Step 3 — Wait 30–60 minutes. Notice how you feel. Stop if nauseous or dizzy.',
        'Step 4 — Second mini-meal (if hungry): protein + healthy fat + a small amount of low-carb vegetables. Still avoid a large plate.',
        'Step 5 — Resume normal low-carb meals over the next 12–24 hours. Do not binge on carbs or sugar.',
      ],
      avoid: [
        'Large carb-heavy meals (pizza, pasta, bread, sweets) — can spike blood sugar and trigger refeeding complications.',
        'Alcohol for at least 24 hours after a prolonged fast.',
        'High-fiber feasts immediately — add vegetables gradually.',
        'Eating quickly or until stuffed — nausea and cramping are common if you rush.',
      ],
      tips: [
        'Break with protein, healthy fat, and gentle fiber — not a carb-heavy reward meal. Your gut needs time to wake up.',
        'Refeeding syndrome is real on fasts over 24 hours. Start small, go slow, and seek medical help if you feel chest pain, confusion, or severe weakness.',
        'After a long fast, prioritize protein and fat in modest portions. Avoid breaking with a large sugar load.',
      ],
      recipeSlugs: ['scrambled-eggs-spinach', 'cottage-cheese-cucumber', 'chicken-salad-lettuce-cups', 'ginger-chicken-bone-broth-soup'],
    };
  }

  if (tier === 'extended') {
    return {
      tier,
      title: 'Breaking an extended fast (19–35h)',
      summary:
        'After a longer fast, your digestive system may need a gentle restart. Start with protein, fat, and fiber in a moderate portion — not a feast.',
      steps: [
        'Optional first: warm bouillon or bone broth — especially after water-only fasts.',
        'First meal: protein-forward and low carb. Aim for ~15–25g protein with healthy fat.',
        'Include gentle fiber: leafy greens, cucumber, or broccoli — not a huge raw salad right away.',
        'Eat slowly and stop at comfortable fullness — your hunger signals may be sharper than usual.',
        'Resume your normal low-carb eating window. Skip dessert and processed carbs for this first meal.',
      ],
      avoid: [
        'Breaking your fast with fruit juice, smoothies with banana, or sugary yogurt.',
        'Large portions — treat this like two small meals 30 minutes apart if needed.',
        'Heavy cream coffee with sugar — black coffee or tea is fine if you already tolerate it.',
      ],
      tips: [
        'A moderate protein-and-fat meal with gentle fiber is a common refeed pattern after longer fasts.',
        'If you feel lightheaded before eating, a small amount of broth or water may help — seek care if symptoms persist.',
        'Optional glucose/ketone tracking after eating is for personal observation only; it is not a diagnostic test.',
      ],
      recipeSlugs: [
        'scrambled-eggs-spinach',
        'chicken-salad-lettuce-cups',
        'baked-salmon-broccoli',
        'egg-muffins',
        'ginger-chicken-bone-broth-soup',
      ],
    };
  }

  return {
    tier: 'intermittent',
    title: 'Breaking intermittent fast (≤18h)',
    summary:
      'Shorter fasts (16:8, 18:6) are the easiest to break. A balanced low-carb meal with protein, healthy fat, and fiber is a common starting point.',
    steps: [
      'Open your eating window with a balanced low-carb meal — not snacks or grazing.',
      'Prioritize protein (eggs, chicken, fish, cottage cheese) plus healthy fat.',
      'Add non-starchy vegetables or a small side of greens for fiber.',
      'Eat when hungry, stop when full — your first meal after IF is not an excuse to overeat.',
      'Stay low carb if that matches your eating plan.',
    ],
    avoid: [
      'Breaking with toast, oatmeal, or cereal if you are following a low-carb plan.',
      'Sweetened coffee drinks or "keto" bars loaded with sugar alcohols as your first bite.',
      'Skipping protein and eating only nuts or cheese — balance matters.',
    ],
    tips: [
      '16-hour fasts are a common entry point for time-restricted eating — break them with real food: protein, fat, and fiber.',
      'On lower-carb eating, hunger often stays moderate — your first meal can be lunch-sized. No need to "make up" missed calories.',
      'Optional Dr. Boz Ratio tracking after eating is for personal observation only; it is not a treatment target.',
    ],
    recipeSlugs: [
      'scrambled-eggs-spinach',
      'taco-bowl-no-tortilla',
      'greek-yogurt-berries',
      'zucchini-noodles-meat-sauce',
      'sheet-pan-sausage-peppers',
      'lettuce-wrap-burger-bowl',
      'shakshuka-spinach-feta',
    ],
  };
}

export function shouldShowBreakGuide(
  isRunning: boolean,
  goalReached: boolean,
  showAfterEnd: boolean,
  elapsedHours: number
): boolean {
  if (showAfterEnd) return true;
  if (isRunning && goalReached) return true;
  if (isRunning && elapsedHours >= 15.5) return true;
  return false;
}

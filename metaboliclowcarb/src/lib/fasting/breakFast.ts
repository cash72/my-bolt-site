import { getRecipeBySlug } from '../recipes/recipes';
import type { Recipe } from '../recipes/types';

export type BreakFastTier = 'intermittent' | 'extended' | 'prolonged';

export interface BreakFastGuide {
  tier: BreakFastTier;
  title: string;
  summary: string;
  steps: string[];
  avoid: string[];
  doctorTips: { doctor: string; tip: string }[];
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
        'Extended fasts require the gentlest refeed. Dr. Westman warns that refeeding syndrome is a serious risk beyond 24 hours — reintroduce food slowly in small amounts.',
      steps: [
        'Step 1 — Hydrate first: plain water or a cup of warm bouillon/bone broth (Dr. Westman) for sodium. Wait 15–30 minutes.',
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
      doctorTips: [
        {
          doctor: 'Dr. Mindy Pelz',
          tip: 'Break with protein, healthy fat, and fiber — not a carb-heavy reward meal. Your gut needs time to wake up.',
        },
        {
          doctor: 'Dr. Eric Westman',
          tip: 'Refeeding syndrome is real on fasts over 24 hours. Start small, go slow, and seek medical help if you feel chest pain, confusion, or severe weakness.',
        },
        {
          doctor: 'Dr. Boz',
          tip: 'After a long fast, prioritize protein and fat to keep insulin stable. Avoid breaking ketosis with a sugar load.',
        },
      ],
      recipeSlugs: ['scrambled-eggs-spinach', 'cottage-cheese-cucumber', 'chicken-salad-lettuce-cups'],
    };
  }

  if (tier === 'extended') {
    return {
      tier,
      title: 'Breaking an extended fast (19–35h)',
      summary:
        'After a gut-reset or autophagy fast, your digestive system is resting. Dr. Mindy recommends protein, fat, and fiber — but in a moderate portion, not a feast.',
      steps: [
        'Optional first: warm bouillon or bone broth (Dr. Westman) — especially after water-only fasts.',
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
      doctorTips: [
        {
          doctor: 'Dr. Mindy Pelz',
          tip: 'This is her weekly "gut reset" break — quality protein, healthy fat, and fiber stabilize blood sugar after autophagy.',
        },
        {
          doctor: 'Dr. Eric Westman',
          tip: 'Salt your food normally when you eat. If you feel lightheaded, bouillon before your meal helps.',
        },
        {
          doctor: 'Dr. Boz',
          tip: 'Check your Dr. Boz Ratio after eating — a gentle protein meal should keep ketosis reachable without a glucose spike.',
        },
      ],
      recipeSlugs: [
        'scrambled-eggs-spinach',
        'chicken-salad-lettuce-cups',
        'baked-salmon-broccoli',
        'egg-muffins',
      ],
    };
  }

  return {
    tier: 'intermittent',
    title: 'Breaking intermittent fast (≤18h)',
    summary:
      'Shorter fasts (16:8, 18:6) are the easiest to break. Dr. Mindy still recommends protein, healthy fat, and fiber — your first meal sets blood sugar for the eating window.',
    steps: [
      'Open your eating window with a balanced low-carb meal — not snacks or grazing.',
      'Prioritize protein (eggs, chicken, fish, cottage cheese) plus healthy fat.',
      'Add non-starchy vegetables or a small side of greens for fiber.',
      'Dr. Westman: eat when hungry, stop when full — your first meal after IF is not an excuse to overeat.',
      'Stay low carb to maintain the metabolic benefits you built during the fast.',
    ],
    avoid: [
      'Breaking with toast, oatmeal, or cereal — spikes insulin and ends fat-burning quickly.',
      'Sweetened coffee drinks or "keto" bars loaded with sugar alcohols as your first bite.',
      'Skipping protein and eating only nuts or cheese — balance matters.',
    ],
    doctorTips: [
      {
        doctor: 'Dr. Mindy Pelz',
        tip: '13–16 hour fasts are her baseline — break them with real food: protein, fat, and fiber at every meal.',
      },
      {
        doctor: 'Dr. Eric Westman',
        tip: 'On keto, hunger stays low — your first meal can be lunch-sized. No need to "make up" missed calories.',
      },
      {
        doctor: 'Dr. Boz',
        tip: 'If you track the Dr. Boz Ratio, your first meal should nudge you toward fat burning, not a glucose spike above 80.',
      },
    ],
    recipeSlugs: [
      'scrambled-eggs-spinach',
      'taco-bowl-no-tortilla',
      'greek-yogurt-berries',
      'zucchini-noodles-meat-sauce',
      'sheet-pan-sausage-peppers',
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

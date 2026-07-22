export interface LandingEditorialSection {
  heading: string;
  paragraphs: string[];
}

export interface LandingEditorial {
  intro?: string;
  sections: LandingEditorialSection[];
}

export const LANDING_EDITORIAL: Record<string, LandingEditorial> = {
  'net-carb-calculator': {
    intro:
      'Packaged foods list total carbohydrates, fiber, and sugar alcohols separately. Net carbs estimate what affects blood sugar — enter label numbers above for per-serving net carbs on keto and low-carb plans.',
    sections: [
      {
        heading: 'Net carb math on US nutrition labels',
        paragraphs: [
          'Standard formula: net carbs ≈ total carbohydrates minus dietary fiber minus sugar alcohols (erythritol is usually subtracted fully). Some sugar alcohols affect glucose — when in doubt, count half of maltitol or sorbitol.',
          'For daily budgets with insulin resistance, see our [net carbs for insulin resistance guide](/guides/net-carbs-for-insulin-resistance) and [how to read nutrition labels](/guides/how-to-read-nutrition-labels-net-carbs).',
        ],
      },
      {
        heading: 'When to track per meal vs per day',
        paragraphs: [
          'Strict keto often caps at 20–25g net carbs per day. Moderate low-carb may allow 50–100g. Run this calculator per food or per meal, then add totals — or jump to the [keto macro calculator](/keto-macro-calculator) for daily targets.',
        ],
      },
    ],
  },

  'keto-macro-calculator': {
    intro:
      'Strict keto macros start with a carb ceiling — usually 20g net carbs — plus adequate protein and fat for satiety. Enter your body stats and activity; calories use the Mifflin-St Jeor equation.',
    sections: [
      {
        heading: 'How keto macros are split',
        paragraphs: [
          'Carbs stay low (default 20g net). Protein is set around 0.8g per pound of body weight — enough to preserve lean mass without excess gluconeogenesis for most people. Remaining calories come from fat.',
          'Not ready for 20g carbs? The [low carb macro calculator](/low-carb-macro-calculator) targets ~100g for metabolic health transitions.',
        ],
      },
      {
        heading: 'Before you change your diet',
        paragraphs: [
          'Keto affects blood sugar and blood pressure — talk to your doctor if you take diabetes or hypertension medication. Our [getting started keto guide](/guides/getting-started-keto-low-carb) walks through the first two weeks.',
        ],
      },
    ],
  },

  'insulin-resistance-macro-calculator': {
    intro:
      'Insulin resistance often responds to lower-carb, protein-forward meals. This plan defaults to about 50g net carbs per day — stricter than standard diets but more flexible than strict keto.',
    sections: [
      {
        heading: 'Why 50g net carbs as a starting point',
        paragraphs: [
          'Many clinicians and low-carb programs use 50–100g as a metabolic-health range — enough vegetables and fiber without constant glucose spikes from refined carbs.',
          'Pair macros with our [fasting with insulin resistance guide](/guides/fasting-with-insulin-resistance) if you also use time-restricted eating.',
        ],
      },
      {
        heading: 'PCOS and metabolic health',
        paragraphs: [
          'Lower-carb approaches are commonly discussed for PCOS — individual needs vary. See [PCOS and low carb](/guides/pcos-and-low-carb) and confirm targets with your healthcare team.',
        ],
      },
    ],
  },

  'low-carb-macro-calculator': {
    intro:
      'Moderate low carb (~100g net carbs daily) suits maintenance after keto, Atkins later phases, or metabolic health without full ketosis.',
    sections: [
      {
        heading: 'Low carb vs strict keto',
        paragraphs: [
          'Keto keeps carbs at or below 20–25g to maintain ketosis. Moderate low carb allows more vegetables, fruit, and legumes — still far below a typical 250g+ standard diet.',
          'Atkins Phase 1 matches strict keto — use the [keto macro calculator](/keto-macro-calculator) or [Atkins macro calculator](/atkins-macro-calculator) for induction.',
        ],
      },
      {
        heading: 'Making macros stick',
        paragraphs: [
          'Prioritize protein and fiber at each meal. Whole foods beat processed “low carb” bars for blood sugar stability. Track briefly to learn portions, then eat intuitively if that works for you.',
        ],
      },
    ],
  },

  'metabolic-health-calculator': {
    intro:
      'Metabolic dysfunction — insulin resistance, elevated triglycerides, or weight around the midsection — often improves when refined carbs drop and protein intake stays adequate.',
    sections: [
      {
        heading: 'Blood-sugar-friendly macro balance',
        paragraphs: [
          'This calculator uses a low-carb IR plan (~50g net carbs) with protein around 0.8g per pound and healthy fats filling remaining calories. It is an educational starting point, not a prescription.',
          'Net carbs are one lever — sleep, movement, and stress matter too. See [visceral fat and metabolic health](/guides/visceral-fat-metabolic-health).',
        ],
      },
      {
        heading: 'Tracking without obsession',
        paragraphs: [
          'Many people track macros for 2–4 weeks to learn portion sizes, then shift to plate method: palm of protein, fist of vegetables, thumb of fat. Re-run the calculator when weight or activity changes significantly.',
        ],
      },
    ],
  },

  'fasting-clock': {
    intro:
      'Track water-only or assisted fasts from 16 hours to 72 hours. The clock shows metabolic phases — fat burning, autophagy thresholds, and extended reset windows — based on hours without food.',
    sections: [
      {
        heading: 'Assisted vs water-only fasting',
        paragraphs: [
          'Water-only is the strictest — plain water only. Assisted adds electrolytes, bouillon for sodium, and black coffee or tea without calories. Both avoid caloric food and sweeteners that break a fast.',
          'Compare modes in our [water fast vs assisted fast guide](/guides/water-fast-vs-assisted-fast).',
        ],
      },
      {
        heading: 'Safety before longer fasts',
        paragraphs: [
          'Extended fasts affect blood sugar and blood pressure — especially on diabetes or BP medication. Read [fasting on diabetes medications](/guides/fasting-on-diabetes-medications) and [electrolytes during fasting](/guides/electrolytes-during-fasting) before going past 24 hours.',
        ],
      },
    ],
  },

  'intermittent-fasting-timer': {
    intro:
      '16:8 and 18:6 are the most common intermittent fasting windows — fast overnight and into late morning, eat within a compressed window.',
    sections: [
      {
        heading: '16:8 vs 18:6 — which to start with',
        paragraphs: [
          '16:8 (16 hours fasted, 8-hour eating window) is the usual entry point. 18:6 adds two hours of fasting — some people see better glucose control without jumping to 24-hour fasts.',
          'See [intermittent fasting 16:8 vs 18:6](/guides/intermittent-fasting-16-8-vs-18-6) for schedule examples.',
        ],
      },
      {
        heading: 'IF with low carb or keto',
        paragraphs: [
          'Lower carb intake often reduces hunger — many people naturally fall into 16:8 without forcing it. Pair fasting with adequate protein at meals to preserve muscle mass.',
        ],
      },
    ],
  },

  'extended-fasting-clock': {
    intro:
      '24-, 36-, 48-, and 72-hour fasts are advanced tools — not day-one strategies. Use assisted mode with electrolytes and medical clearance if you take glucose-lowering drugs.',
    sections: [
      {
        heading: 'What happens hour by hour',
        paragraphs: [
          'Around 12–14 hours, fat burning increases. Autophagy research often cites ~17 hours without food. A 24-hour fast is commonly used as a weekly “gut reset” — not daily.',
          'Track optional glucose and ketones with our [Dr. Boz ratio calculator](/dr-boz-ratio-calculator) during longer fasts.',
        ],
      },
      {
        heading: 'Breaking an extended fast safely',
        paragraphs: [
          'Start with protein, healthy fat, and non-starchy vegetables — not a large carb load. See [how to break a 24-hour fast](/guides/how-to-break-a-24-hour-fast) and [best first meal after fasting](/guides/best-first-meal-after-fasting).',
        ],
      },
    ],
  },

  'water-fast-timer': {
    intro:
      'Water-only fasting means plain water — no coffee, tea, bouillon, or electrolyte powders with calories. It is the strictest form and best suited to shorter durations for most people.',
    sections: [
      {
        heading: 'Who should avoid water-only fasts',
        paragraphs: [
          'Pregnancy, eating disorders, type 1 diabetes, and many medication regimens make water-only fasts unsafe without direct medical supervision. When in doubt, use assisted fasting or skip extended fasts.',
        ],
      },
      {
        heading: 'Shorter vs longer water fasts',
        paragraphs: [
          'Many practitioners treat 24 hours as an upper bound for unsupervised water-only fasts. Beyond that, electrolyte depletion and refeeding risks rise — read [water fast vs assisted fast](/guides/water-fast-vs-assisted-fast).',
        ],
      },
    ],
  },

  'dr-boz-ratio-calculator': {
    intro:
      'The Dr. Boz Ratio divides fasting glucose (mg/dL) by blood ketones (mmol/L). One number reflects whether you are primarily burning glucose or fat — useful during fasts and low-carb transitions.',
    sections: [
      {
        heading: 'How to interpret your ratio',
        paragraphs: [
          'Above 80: still glucose-dominant — tighten carbs or extend overnight fasting. 40–80: moderate ketosis, common for steady weight management. Below 40: deeper ketosis — approach gradually, not as a day-one target.',
          'Full explanation in our [Dr. Boz ratio guide](/guides/dr-boz-ratio-explained).',
        ],
      },
      {
        heading: 'You need a dual glucose/ketone meter',
        paragraphs: [
          'The ratio requires finger-stick readings from a meter that reports both values. No meter? Use the [net carb calculator](/net-carb-calculator) and [fasting clock](/fasting-clock) without ratio tracking.',
        ],
      },
    ],
  },

  'atkins-macro-calculator': {
    intro:
      'Atkins Phase 1 (Induction) keeps net carbs very low — similar to strict keto at about 20g per day. Enter your stats for daily protein, fat, and carb gram targets during induction.',
    sections: [
      {
        heading: 'Atkins phases at a glance',
        paragraphs: [
          'Phase 1: ~20g net carbs. Phase 2 slowly adds nuts, berries, and more vegetables. Phase 3 and 4 increase carbs toward maintenance — use the [low carb macro calculator](/low-carb-macro-calculator) for later phases.',
          'See [Atkins phases explained](/guides/atkins-phases-explained) for the full progression.',
        ],
      },
      {
        heading: 'Induction is temporary',
        paragraphs: [
          'Most people do not stay at 20g carbs forever. Induction jump-starts fat adaptation — then carbs rise gradually while weight and labs are monitored.',
        ],
      },
    ],
  },

  'pcos-low-carb-calculator': {
    intro:
      'PCOS often involves insulin resistance. Many people discuss lower-carb eating with their providers — this plan uses ~50g net carbs with adequate protein and healthy fats.',
    sections: [
      {
        heading: 'Why low carb comes up for PCOS',
        paragraphs: [
          'Elevated insulin can drive androgen symptoms and make weight loss harder. Reducing refined carbs and prioritizing protein at meals may improve glucose — but PCOS is individual.',
          'Read [PCOS and low carb](/guides/pcos-and-low-carb) alongside these macro targets.',
        ],
      },
      {
        heading: 'Work with your care team',
        paragraphs: [
          'PCOS management may include medication, cycle tracking, and fertility goals — diet is one piece. Do not change treatment without your doctor.',
        ],
      },
    ],
  },

  'omad-fasting-timer': {
    intro:
      'One Meal A Day (OMAD) compresses eating into a single hour — effectively a 23-hour daily fast. It is advanced intermittent fasting, not a starting protocol.',
    sections: [
      {
        heading: 'Making one meal nutritionally complete',
        paragraphs: [
          'One meal must cover protein, vegetables, healthy fats, and micronutrients for the whole day. Undereating protein on OMAD can cost muscle mass over time.',
          'See [best first meal after fasting](/guides/best-first-meal-after-fasting) for composition tips.',
        ],
      },
      {
        heading: 'OMAD and blood sugar medications',
        paragraphs: [
          'A single large meal plus all-day fasting shifts glucose patterns dramatically — medication doses may need adjustment. Medical supervision is essential on insulin or sulfonylureas.',
        ],
      },
    ],
  },

  'weight-loss-macro-calculator': {
    intro:
      'Weight loss requires a calorie deficit — eating fewer calories than you burn. This calculator sets macros with a moderate deficit while keeping protein adequate to preserve muscle.',
    sections: [
      {
        heading: 'Protein during a deficit',
        paragraphs: [
          'Higher protein during weight loss helps preserve lean mass — especially when combined with resistance training. Very low calorie diets without enough protein increase muscle loss risk.',
        ],
      },
      {
        heading: 'Low carb can simplify satiety',
        paragraphs: [
          'Many people find protein-and-fat meals more filling than carb-heavy plates at the same calories. Pair these macros with whole foods rather than ultra-processed “diet” products.',
        ],
      },
    ],
  },

  'diabetes-macro-calculator': {
    intro:
      'Diabetes management requires medical oversight — especially when changing carb intake or starting fasting. This calculator provides educational macro estimates only.',
    sections: [
      {
        heading: 'Carb changes and medication',
        paragraphs: [
          'Lower carb intake can drop blood sugar quickly — insulin and sulfonylurea doses may need reduction to avoid hypoglycemia. Never adjust medication without your prescriber.',
          'Read [fasting on diabetes medications](/guides/fasting-on-diabetes-medications) before combining diet changes with IF.',
        ],
      },
      {
        heading: 'Focus on whole foods first',
        paragraphs: [
          'Replacing refined carbs with vegetables, protein, and healthy fats often improves post-meal glucose before counting every gram. Use net carb math as a tool, not the only measure of a meal.',
        ],
      },
    ],
  },

  'tdee-calorie-calculator': {
    intro:
      'TDEE (Total Daily Energy Expenditure) estimates how many calories you burn in a day — BMR plus activity. Use it as the baseline for weight loss, maintenance, or muscle-gain targets.',
    sections: [
      {
        heading: 'From TDEE to a deficit or surplus',
        paragraphs: [
          'A common fat-loss starting point is TDEE minus 300–500 calories. Aggressive cuts below that raise hunger and muscle-loss risk. For a protein-forward cut plan, open the [weight-loss macro calculator](/weight-loss-macro-calculator) with the same stats.',
          'Building muscle usually needs a small surplus (about 200–300 above TDEE) plus resistance training — macros still matter more than eating “clean” without enough protein.',
        ],
      },
      {
        heading: 'Activity multipliers are estimates',
        paragraphs: [
          'Desk jobs with light walking differ from construction or daily training. If weight stalls for 2–3 weeks, adjust calories rather than trusting the multiplier forever — track weekly averages, not day-to-day scale noise.',
          'New to low carb? Pair calorie targets with our [getting started keto guide](/guides/getting-started-keto-low-carb), then split macros in the [keto macro calculator](/keto-macro-calculator).',
        ],
      },
      {
        heading: 'When to talk to a clinician',
        paragraphs: [
          'Very low calorie targets, diabetes medications, pregnancy, and eating-disorder history need professional guidance. This tool is educational — not medical advice.',
        ],
      },
    ],
  },
};

export function getLandingEditorial(slug: string): LandingEditorial | undefined {
  return LANDING_EDITORIAL[slug];
}

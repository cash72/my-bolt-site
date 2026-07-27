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
      'Packaged foods list total carbohydrates, fiber, and sugar alcohols separately. Net carbs estimate what affects blood sugar — enter label numbers above for per-serving net carbs on keto and low-carb plans. This page is a working tool plus a short field guide so you can shop with confidence, not guesswork.',
    sections: [
      {
        heading: 'Net carb math on US nutrition labels',
        paragraphs: [
          'Standard formula: net carbs ≈ total carbohydrates minus dietary fiber minus sugar alcohols (erythritol is usually subtracted fully). Some sugar alcohols affect glucose — when in doubt, count half of maltitol or sorbitol, or use a glucose meter if your clinician recommends monitoring.',
          'Serving size is the silent multiplier. A “2g net carb” cookie that lists a 1-cookie serving becomes 6g if you eat three. Enter one serving first, then multiply by how many you actually eat.',
          'For daily budgets with insulin resistance, see our [net carbs for insulin resistance guide](/guides/net-carbs-for-insulin-resistance) and [how to read nutrition labels](/guides/how-to-read-nutrition-labels-net-carbs).',
        ],
      },
      {
        heading: 'When to track per meal vs per day',
        paragraphs: [
          'Strict keto often caps at 20–25g net carbs per day. Moderate low-carb may allow 50–100g. Run this calculator per food or per meal, then add totals — or jump to the [keto macro calculator](/keto-macro-calculator) for daily targets.',
          'A practical habit: track every packaged item for one week, then only re-check when you switch brands. Whole foods (eggs, meat, leafy greens, olive oil) rarely need a label once you know your pattern.',
        ],
      },
      {
        heading: 'Turn the number into a meal',
        paragraphs: [
          'After you know a sauce or yogurt’s net carbs, pick a recipe that still fits your remaining budget. Browse [recipes under 10g net carbs](/recipes/under-10g-net-carbs) or the [strict keto hub](/recipes/keto). Pair label literacy with cooking — that is how tools become results.',
        ],
      },
    ],
  },

  'keto-macro-calculator': {
    intro:
      'Strict keto macros start with a carb ceiling — usually 20g net carbs — plus adequate protein and fat for satiety. Enter your body stats and activity; calories use the Mifflin-St Jeor equation. Use this page to set a day-one budget, then refine with hunger, energy, and labs — not influencer screenshots.',
    sections: [
      {
        heading: 'How keto macros are split',
        paragraphs: [
          'Carbs stay low (default 20g net). Protein is set around 0.8g per pound of body weight — enough to preserve lean mass without excess for most people. Remaining calories come from fat so meals stay filling.',
          'Not ready for 20g carbs? The [low carb macro calculator](/low-carb-macro-calculator) targets ~100g for metabolic-health transitions, and the [insulin resistance macro calculator](/insulin-resistance-macro-calculator) sits near ~50g.',
        ],
      },
      {
        heading: 'Calories first when fat loss is the goal',
        paragraphs: [
          'Macros without a calorie ceiling can stall weight loss if fat portions creep up. Run the [TDEE calorie calculator](/tdee-calorie-calculator) with the same stats for maintenance or a 300–500 calorie deficit, then return here so protein and ~20g net carbs fit inside that budget.',
          'If you only care about ketosis (not the scale), lock carbs and protein first and let hunger guide fat — still recheck TDEE after a 10–15 lb change.',
        ],
      },
      {
        heading: 'First two weeks on paper',
        paragraphs: [
          'Week one is often electrolytes and sleep, not perfect logging. Read [keto flu and electrolytes](/guides/keto-flu-and-electrolytes) and [getting started keto](/guides/getting-started-keto-low-carb) before you chase a flawless macro streak.',
          'Shop with the [net carb calculator](/net-carb-calculator), then cook from the [keto recipe hub](/recipes/keto) so dinner matches the numbers you just set.',
        ],
      },
      {
        heading: 'Before you change your diet',
        paragraphs: [
          'Keto affects blood sugar and blood pressure — talk to your doctor if you take diabetes or hypertension medication. Never adjust prescriptions because a calculator suggested new grams.',
        ],
      },
    ],
  },

  'insulin-resistance-macro-calculator': {
    intro:
      'Insulin resistance often responds to lower-carb, protein-forward meals. This plan defaults to about 50g net carbs per day — stricter than a standard diet but more flexible than strict keto. It is an educational starting point for metabolic-health experiments you run with your clinician.',
    sections: [
      {
        heading: 'Why 50g net carbs as a starting point',
        paragraphs: [
          'Many clinicians and low-carb programs use 50–100g as a metabolic-health range — enough vegetables and fiber without constant glucose spikes from refined carbs. Fifty grams is a common “tight but livable” middle for people leaving a high-carb baseline.',
          'If you need induction-level restriction first, use the [keto macro calculator](/keto-macro-calculator) (~20g) for a short phase, then return here. Context: [net carbs for insulin resistance](/guides/net-carbs-for-insulin-resistance).',
        ],
      },
      {
        heading: 'Pair macros with timing — carefully',
        paragraphs: [
          'Time-restricted eating can help some people with IR, but medication changes the risk profile. Read [fasting with insulin resistance](/guides/fasting-with-insulin-resistance) and [fasting on diabetes medications](/guides/fasting-on-diabetes-medications) before stacking long fasts on top of a new carb budget.',
        ],
      },
      {
        heading: 'PCOS and related metabolic goals',
        paragraphs: [
          'Lower-carb approaches are commonly discussed for PCOS — individual needs vary. See [PCOS and low carb](/guides/pcos-and-low-carb) and the dedicated [PCOS calculator](/pcos-low-carb-calculator). Confirm targets with your healthcare team.',
        ],
      },
    ],
  },

  'low-carb-macro-calculator': {
    intro:
      'Moderate low carb (~100g net carbs daily) suits maintenance after keto, Atkins later phases, or metabolic health without full ketosis. It is often the long-term lane people can sustain at restaurants and family meals.',
    sections: [
      {
        heading: 'Low carb vs strict keto',
        paragraphs: [
          'Keto keeps carbs at or below 20–25g to maintain ketosis. Moderate low carb allows more vegetables, fruit, and legumes — still far below a typical 250g+ standard diet.',
          'Atkins Phase 1 matches strict keto — use the [keto macro calculator](/keto-macro-calculator) or [Atkins macro calculator](/atkins-macro-calculator) for induction, then return here for Phase 2+ style budgets. Full ladder: [Atkins phases explained](/guides/atkins-phases-explained).',
        ],
      },
      {
        heading: 'Making macros stick without obsession',
        paragraphs: [
          'Prioritize protein and fiber at each meal. Whole foods beat processed “low carb” bars for blood sugar stability. Track briefly to learn portions, then eat more intuitively if that works — see [mindful macro tracking](/guides/mindful-macro-tracking-low-carb).',
          'Need dinner ideas that fit? Browse [recipes](/recipes) and filter by category rather than inventing a new plate every night.',
        ],
      },
      {
        heading: 'When to tighten again',
        paragraphs: [
          'If waist, fasting glucose, or triglycerides drift the wrong way for several weeks, temporarily lower carbs (toward the [IR calculator](/insulin-resistance-macro-calculator) or keto) and review sleep and alcohol — not only the macro app.',
        ],
      },
    ],
  },

  'metabolic-health-calculator': {
    intro:
      'Metabolic dysfunction — insulin resistance, elevated triglycerides, or weight around the midsection — often improves when refined carbs drop and protein intake stays adequate. This calculator uses a low-carb IR-style plan as an educational baseline.',
    sections: [
      {
        heading: 'Blood-sugar-friendly macro balance',
        paragraphs: [
          'Defaults sit near ~50g net carbs with protein around 0.8g per pound and healthy fats filling remaining calories. It is a starting sketch, not a prescription and not a diagnosis tool.',
          'Net carbs are one lever — sleep, walking, strength training, and stress matter too. See [visceral fat and metabolic health](/guides/visceral-fat-metabolic-health) and [fatty liver and low carb](/guides/fatty-liver-low-carb) for context beyond the scale.',
        ],
      },
      {
        heading: 'Tracking without obsession',
        paragraphs: [
          'Many people track macros for 2–4 weeks to learn portion sizes, then shift to plate method: palm of protein, fist of vegetables, thumb of fat. Re-run the calculator when weight or activity changes significantly — [mindful tracking guide](/guides/mindful-macro-tracking-low-carb).',
        ],
      },
      {
        heading: 'Next tools after macros',
        paragraphs: [
          'Verify packaged foods with the [net carb calculator](/net-carb-calculator). Estimate burn with [TDEE](/tdee-calorie-calculator). If you add fasting later, start short and read the safety guides first.',
        ],
      },
    ],
  },

  'fasting-clock': {
    intro:
      'Track water-only or assisted fasts from 16 hours toward longer windows. The clock shows educational metabolic phases — fat burning, commonly cited autophagy thresholds, and extended reset windows — based on hours without food. It does not diagnose or supervise your fast.',
    sections: [
      {
        heading: 'Assisted vs water-only fasting',
        paragraphs: [
          'Water-only is the strictest — plain water only. Assisted adds electrolytes, bouillon for sodium, and black coffee or tea without calories. Both avoid caloric food and sweeteners that break a fast.',
          'Compare modes in our [water fast vs assisted fast guide](/guides/water-fast-vs-assisted-fast). Most people tolerate assisted plans better past 24 hours because sodium replacement is explicit.',
        ],
      },
      {
        heading: 'Safety before longer fasts',
        paragraphs: [
          'Extended fasts affect blood sugar and blood pressure — especially on diabetes or BP medication. Read [fasting on diabetes medications](/guides/fasting-on-diabetes-medications) and [electrolytes during fasting](/guides/electrolytes-during-fasting) before going past 24 hours.',
          'Plan the exit as carefully as the start: [how to break a 24-hour fast](/guides/how-to-break-a-24-hour-fast) and [best first meal after fasting](/guides/best-first-meal-after-fasting).',
        ],
      },
      {
        heading: 'Related timers',
        paragraphs: [
          'Prefer a named IF schedule? Use the [intermittent fasting timer](/intermittent-fasting-timer). Planning 36–72 hours with clearance? Open the [extended fasting clock](/extended-fasting-clock). Strict plain-water only? See the [water fast timer](/water-fast-timer).',
        ],
      },
    ],
  },

  'intermittent-fasting-timer': {
    intro:
      '16:8 and 18:6 are the most common intermittent fasting windows — fast overnight and into late morning, eat within a compressed window. This timer helps you see the clock; the guides help you decide whether the schedule fits your life and medications.',
    sections: [
      {
        heading: '16:8 vs 18:6 — which to start with',
        paragraphs: [
          '16:8 (16 hours fasted, 8-hour eating window) is the usual entry point. 18:6 adds two hours of fasting — some people see better glucose control without jumping to 24-hour fasts.',
          'See [intermittent fasting 16:8 vs 18:6](/guides/intermittent-fasting-16-8-vs-18-6) for schedule examples, including notes many women use around the menstrual cycle.',
        ],
      },
      {
        heading: 'IF with low carb or keto',
        paragraphs: [
          'Lower carb intake often reduces hunger — many people naturally fall into 16:8 without forcing it. Pair fasting with adequate protein at meals to preserve muscle mass — [protein on keto](/guides/protein-on-keto-and-low-carb).',
          'If insulin resistance is your main goal, also read [fasting with IR](/guides/fasting-with-insulin-resistance) before stacking aggressive windows.',
        ],
      },
      {
        heading: 'What to eat in the window',
        paragraphs: [
          'Compressed eating is not a license for ultra-processed carbs. Build meals from the [recipe index](/recipes) — protein, vegetables, and fats that match your macro plan from the [keto](/keto-macro-calculator) or [low carb](/low-carb-macro-calculator) calculators.',
        ],
      },
    ],
  },

  'extended-fasting-clock': {
    intro:
      '24-, 36-, 48-, and 72-hour fasts are advanced tools — not day-one strategies. Use assisted mode with electrolytes and medical clearance if you take glucose-lowering drugs. This clock is for timing awareness after you already have a safety plan.',
    sections: [
      {
        heading: 'What happens hour by hour (educational)',
        paragraphs: [
          'Around 12–14 hours, fat burning typically increases for many people. Autophagy research often cites roughly ~17 hours without food as a commonly discussed threshold — not a guarantee of a specific cellular outcome on your body.',
          'A 24-hour fast is often used as an occasional “gut reset,” not a daily habit. Track optional glucose and ketones with the [Dr. Boz ratio calculator](/dr-boz-ratio-calculator) during longer experiments if you already own a dual meter.',
        ],
      },
      {
        heading: 'Electrolytes and meds before you start',
        paragraphs: [
          'Read [electrolytes during fasting](/guides/electrolytes-during-fasting) and [fasting on diabetes medications](/guides/fasting-on-diabetes-medications). If those pages raise more questions than answers, you are not ready to start the clock.',
        ],
      },
      {
        heading: 'Breaking an extended fast safely',
        paragraphs: [
          'Start with protein, healthy fat, and non-starchy vegetables — not a large carb load. See [how to break a 24-hour fast](/guides/how-to-break-a-24-hour-fast) and [best first meal after fasting](/guides/best-first-meal-after-fasting), then cook something gentle like [bone broth + eggs](/recipes/break-fast-bone-broth-eggs).',
        ],
      },
    ],
  },

  'water-fast-timer': {
    intro:
      'Water-only fasting means plain water — no coffee, tea, bouillon, or electrolyte powders with calories. It is the strictest form and best suited to shorter durations for most people. Use this timer only when you have already chosen water-only on purpose.',
    sections: [
      {
        heading: 'Who should avoid water-only fasts',
        paragraphs: [
          'Pregnancy, eating disorders, type 1 diabetes, and many medication regimens make water-only fasts unsafe without direct medical supervision. When in doubt, use assisted fasting or skip extended fasts entirely.',
          'If you take diabetes or blood pressure medication, start with [fasting on diabetes medications](/guides/fasting-on-diabetes-medications) — not this timer.',
        ],
      },
      {
        heading: 'Shorter vs longer water fasts',
        paragraphs: [
          'Many practitioners treat ~24 hours as an upper bound for unsupervised water-only fasts. Beyond that, electrolyte depletion and refeeding risks rise — read [water fast vs assisted fast](/guides/water-fast-vs-assisted-fast) and prefer the [extended fasting clock](/extended-fasting-clock) in assisted mode when cleared.',
        ],
      },
      {
        heading: 'Exiting a water-only fast',
        paragraphs: [
          'Refeed gently. Broth and eggs beat pizza. Follow [how to break a 24-hour fast](/guides/how-to-break-a-24-hour-fast) even if your fast was shorter than a full day — stomach enzymes still appreciate a soft landing.',
        ],
      },
    ],
  },

  'dr-boz-ratio-calculator': {
    intro:
      'The Dr. Boz Ratio divides fasting glucose (mg/dL) by blood ketones (mmol/L). One number reflects whether you are primarily burning glucose or fat — useful during fasts and low-carb transitions if you already use a dual meter.',
    sections: [
      {
        heading: 'How to interpret your ratio',
        paragraphs: [
          'Above 80: still glucose-dominant — tighten carbs or extend overnight fasting. 40–80: moderate ketosis, common for steady weight management. Below 40: deeper ketosis — approach gradually, not as a day-one target.',
          'Full explanation in our [Dr. Boz ratio guide](/guides/dr-boz-ratio-explained). Trends over days matter more than a single heroic reading.',
        ],
      },
      {
        heading: 'You need a dual glucose/ketone meter',
        paragraphs: [
          'The ratio requires finger-stick readings from a meter that reports both values. No meter? Use the [net carb calculator](/net-carb-calculator) and [fasting clock](/fasting-clock) without ratio tracking — you can still make progress.',
        ],
      },
      {
        heading: 'What to change when the number is high',
        paragraphs: [
          'Usually: fewer refined carbs, consistent protein, earlier dinner, and patience. Recalculate macros with the [keto macro calculator](/keto-macro-calculator) and verify packaged foods before you blame “stubborn metabolism.”',
        ],
      },
    ],
  },

  'atkins-macro-calculator': {
    intro:
      'Atkins Phase 1 (Induction) keeps net carbs very low — similar to strict keto at about 20g per day. Enter your stats for daily protein, fat, and carb gram targets during induction, then plan your exit to later phases before hunger boredom sets in.',
    sections: [
      {
        heading: 'Atkins phases at a glance',
        paragraphs: [
          'Phase 1: ~20g net carbs. Phase 2 slowly adds nuts, berries, and more vegetables. Phase 3 and 4 increase carbs toward maintenance — use the [low carb macro calculator](/low-carb-macro-calculator) for later phases.',
          'See [Atkins phases explained](/guides/atkins-phases-explained) for when to advance and a practical food ladder.',
        ],
      },
      {
        heading: 'Induction is temporary for most people',
        paragraphs: [
          'Most people do not stay at 20g carbs forever. Induction jump-starts fat adaptation — then carbs rise gradually while weight and labs are monitored. If you prefer permanent keto language, the [keto macro calculator](/keto-macro-calculator) and [getting started guide](/guides/getting-started-keto-low-carb) cover the same early window.',
        ],
      },
      {
        heading: 'Shopping and cooking in Phase 1',
        paragraphs: [
          'Foundation foods: eggs, meat, fish, leafy greens, olive oil, avocado. Verify sauces with the [net carb calculator](/net-carb-calculator). Cook from [under 10g recipes](/recipes/under-10g-net-carbs) so induction does not become deli-meat monotony.',
        ],
      },
    ],
  },

  'pcos-low-carb-calculator': {
    intro:
      'PCOS often involves insulin resistance. Many people discuss lower-carb eating with their providers — this plan uses ~50g net carbs with adequate protein and healthy fats as an educational starting sketch, not a fertility or hormone treatment.',
    sections: [
      {
        heading: 'Why low carb comes up for PCOS',
        paragraphs: [
          'Elevated insulin can drive androgen symptoms and make weight loss harder. Reducing refined carbs and prioritizing protein at meals may improve glucose for some women — PCOS is individual and labs beat anecdotes.',
          'Read [PCOS and low carb](/guides/pcos-and-low-carb) alongside these macro targets, and [net carbs for IR](/guides/net-carbs-for-insulin-resistance) if glucose is the main focus.',
        ],
      },
      {
        heading: 'Cycle-aware habits (optional)',
        paragraphs: [
          'If you add intermittent fasting, many women prefer shorter windows in the luteal phase. Start with the [IF timer](/intermittent-fasting-timer) and the [16:8 vs 18:6 guide](/guides/intermittent-fasting-16-8-vs-18-6) — not multi-day fasts on week one.',
        ],
      },
      {
        heading: 'Work with your care team',
        paragraphs: [
          'PCOS management may include medication, cycle tracking, and fertility goals — diet is one piece. Do not change treatment because a website suggested 50g of carbs. Use recipes from the [dinner hub](/recipes/dinner) to make the plan edible.',
        ],
      },
    ],
  },

  'omad-fasting-timer': {
    intro:
      'One Meal A Day (OMAD) compresses eating into a single hour — effectively a ~23-hour daily fast. It is advanced intermittent fasting, not a starting protocol. Use this timer only after shorter IF windows feel easy and medically appropriate.',
    sections: [
      {
        heading: 'Making one meal nutritionally complete',
        paragraphs: [
          'One meal must cover protein, vegetables, healthy fats, and micronutrients for the whole day. Undereating protein on OMAD can cost muscle mass over time — review [protein on keto](/guides/protein-on-keto-and-low-carb).',
          'See [best first meal after fasting](/guides/best-first-meal-after-fasting) for composition tips, then scale that plate up carefully rather than inhaling junk in sixty minutes.',
        ],
      },
      {
        heading: 'OMAD and blood sugar medications',
        paragraphs: [
          'A single large meal plus all-day fasting shifts glucose patterns dramatically — medication doses may need adjustment. Medical supervision is essential on insulin or sulfonylureas. Read [fasting on diabetes medications](/guides/fasting-on-diabetes-medications).',
        ],
      },
      {
        heading: 'Build up, do not jump',
        paragraphs: [
          'Prove 16:8 and 18:6 first with the [intermittent fasting timer](/intermittent-fasting-timer). OMAD is optional intensity, not a badge. Many metabolic goals are reachable without living on one plate forever.',
        ],
      },
    ],
  },

  'weight-loss-macro-calculator': {
    intro:
      'Weight loss requires a calorie deficit — eating fewer calories than you burn. This calculator sets macros with a moderate deficit while keeping protein adequate to preserve muscle. Pair it with [TDEE](/tdee-calorie-calculator) if you want the burn estimate first.',
    sections: [
      {
        heading: 'Protein during a deficit',
        paragraphs: [
          'Higher protein during weight loss helps preserve lean mass — especially with resistance training. Very low calorie diets without enough protein increase muscle-loss risk. Details: [protein on keto and low carb](/guides/protein-on-keto-and-low-carb).',
        ],
      },
      {
        heading: 'Low carb can simplify satiety',
        paragraphs: [
          'Many people find protein-and-fat meals more filling than carb-heavy plates at the same calories. Pair these macros with whole foods rather than ultra-processed “diet” products, and verify labels with the [net carb calculator](/net-carb-calculator).',
          'Cook from [dinner recipes](/recipes/dinner) so the deficit is a meal plan, not a spreadsheet hobby.',
        ],
      },
      {
        heading: 'Pace and plateaus',
        paragraphs: [
          'Aggressive cuts raise hunger and dropout risk. If the scale stalls for 2–3 weeks, re-check adherence and TDEE before slashing another 500 calories. Habit tools: [mindful macro tracking](/guides/mindful-macro-tracking-low-carb).',
        ],
      },
    ],
  },

  'diabetes-macro-calculator': {
    intro:
      'Diabetes management requires medical oversight — especially when changing carb intake or starting fasting. This calculator provides educational macro estimates only. It cannot replace your care team, meter, or prescription plan.',
    sections: [
      {
        heading: 'Carb changes and medication',
        paragraphs: [
          'Lower carb intake can drop blood sugar quickly — insulin and sulfonylurea doses may need reduction to avoid hypoglycemia. Never adjust medication without your prescriber.',
          'Read [fasting on diabetes medications](/guides/fasting-on-diabetes-medications) before combining diet changes with IF, and [fasting with insulin resistance](/guides/fasting-with-insulin-resistance) if IR is part of your picture.',
        ],
      },
      {
        heading: 'Focus on whole foods first',
        paragraphs: [
          'Replacing refined carbs with vegetables, protein, and healthy fats often improves post-meal glucose before counting every gram. Use net carb math as a tool — [net carb calculator](/net-carb-calculator) — not the only measure of a meal.',
        ],
      },
      {
        heading: 'Related educational tools',
        paragraphs: [
          'If your clinician agrees on a moderate low-carb experiment, the [insulin resistance macro calculator](/insulin-resistance-macro-calculator) and [metabolic health calculator](/metabolic-health-calculator) use similar educational defaults. Always prioritize prescribed targets over website defaults.',
        ],
      },
    ],
  },

  'tdee-calorie-calculator': {
    intro:
      'TDEE (Total Daily Energy Expenditure) estimates how many calories you burn in a day — BMR plus activity. Use it as the baseline for weight loss, maintenance, or muscle-gain targets before you split those calories into macros.',
    sections: [
      {
        heading: 'From TDEE to a deficit or surplus',
        paragraphs: [
          'A common fat-loss starting point is TDEE minus 300–500 calories. Aggressive cuts below that raise hunger and muscle-loss risk. For a protein-forward cut plan, open the [weight-loss macro calculator](/weight-loss-macro-calculator) with the same stats.',
          'Building muscle usually needs a small surplus (about 200–300 above TDEE) plus resistance training — macros still matter more than eating “clean” without enough protein.',
        ],
      },
      {
        heading: 'Pair TDEE with keto macros',
        paragraphs: [
          'TDEE answers “how many calories?” Keto answers “how are those calories split?” After you have maintenance or a deficit here, open the [keto macro calculator](/keto-macro-calculator) (~20g net carbs) or the [insulin resistance macro calculator](/insulin-resistance-macro-calculator) (~50g) so protein stays locked while fat fills the remaining calories.',
          'New to low carb? Read [getting started keto](/guides/getting-started-keto-low-carb) before you stack a hard deficit on day one.',
        ],
      },
      {
        heading: 'Activity multipliers are estimates',
        paragraphs: [
          'Desk jobs with light walking differ from construction or daily training. If weight stalls for 2–3 weeks, adjust calories rather than trusting the multiplier forever — track weekly averages, not day-to-day scale noise.',
          'When you revisit numbers, re-run macros in the [keto macro calculator](/keto-macro-calculator) so protein grams stay current with body weight.',
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

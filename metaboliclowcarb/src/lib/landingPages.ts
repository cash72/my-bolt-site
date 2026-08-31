import type { DietPlan, ToolId } from './metabolic/types';
import type { FastingGoalHours, FastingMode } from './fasting/types';

export interface LandingPage {
  slug: string;
  path: string;
  tool: ToolId;
  defaultPlan?: DietPlan;
  defaultFastingGoal?: FastingGoalHours;
  defaultFastingMode?: FastingMode;
  title: string;
  h1: string;
  description: string;
  breadcrumbLabel: string;
  intro: string;
  faqs: { question: string; answer: string }[];
  relatedGuideSlugs?: string[];
}

export const LANDING_PAGES: LandingPage[] = [
  {
    slug: 'net-carb-calculator',
    path: '/net-carb-calculator',
    tool: 'net-carb',
    title: 'Net Carb / Recipe Carb Calculator — Free Label Math',
    h1: 'Net Carb Calculator',
    description:
      'Free recipe carb calculator and net carb tool. Enter total carbs, fiber, and sugar alcohols from any food label — get net carbs per serving for keto and low-carb recipes.',
    breadcrumbLabel: 'Net carb calculator',
    intro:
      'Looking for a recipe carb calculator? Enter numbers from any nutrition label (or recipe nutrition panel) — we subtract fiber and sugar alcohols so you get net carbs per serving for keto and blood-sugar-friendly cooking.',
    faqs: [
      {
        question: 'How do you calculate net carbs?',
        answer:
          'For most US labels: net carbs = total carbohydrates minus dietary fiber minus sugar alcohols (often erythritol). Always check the product label rules for your diet.',
      },
      {
        question: 'How to calculate net carbs from a food label?',
        answer:
          'Find total carbohydrates, dietary fiber, and sugar alcohols on the label. Subtract fiber and sugar alcohols from total carbs. Our calculator does the math — enter each line and get net carbs per serving instantly.',
      },
      {
        question: 'What net carbs are good for insulin resistance?',
        answer:
          'Many people with insulin resistance aim for 50–100g net carbs per day, or stricter keto at under 20–25g. Work with your healthcare provider for personal targets.',
      },
      {
        question: 'Should I subtract all sugar alcohols?',
        answer:
          'Erythritol is usually subtracted fully. Other sugar alcohols may affect blood sugar — some people count half. This calculator subtracts the full amount you enter.',
      },
      {
        question: 'Is this net carb calculator free?',
        answer:
          'Yes. No signup required. Use it for every packaged food you log — see our net carbs for insulin resistance guide for daily targets.',
      },
    ],
    relatedGuideSlugs: ['net-carbs-for-insulin-resistance', 'how-to-read-nutrition-labels-net-carbs'],
  },
  {
    slug: 'keto-macro-calculator',
    path: '/keto-macro-calculator',
    tool: 'macro',
    defaultPlan: 'strict_keto',
    title: 'Keto Macro Calculator — Daily Protein, Fat & 20g Net Carbs',
    h1: 'Free Keto Macro Calculator',
    description:
      'Free keto macro calculator for weight loss: enter age, weight, height, and activity to get daily calories, protein, fat, and ~20g net carb targets. Pair with TDEE when the scale stalls. No signup.',
    breadcrumbLabel: 'Keto macro calculator',
    intro:
      'How many carbs, protein, and fat on keto? Enter your stats and get daily macro targets — about 20g net carbs for strict keto, with calories from the Mifflin-St Jeor equation. For a maintenance or deficit ceiling first, use the [TDEE calorie calculator](/tdee-calorie-calculator), then return here to lock the split.',
    faqs: [
      {
        question: 'How many carbs on strict keto?',
        answer:
          'Strict keto typically keeps net carbs at or below 20–25g per day. This calculator defaults to 20g net carbs for the carb macro. Verify packaged servings with the [net carb calculator](/net-carb-calculator) so label math matches the day ceiling.',
      },
      {
        question: 'How many carbs should I eat on keto per day?',
        answer:
          'Most strict keto plans target 20–25g net carbs daily. Moderate low-carb allows more — use our [low carb macro calculator](/low-carb-macro-calculator) if you are not in induction.',
      },
      {
        question: 'Is there a free keto macro calculator?',
        answer:
          'Yes — this tool is free with no signup. Enter height, weight, age, sex, and activity level to get protein, fat, and net carb grams per day.',
      },
      {
        question: 'How much protein on keto?',
        answer:
          'This calculator uses about 0.8g protein per pound of body weight — a common starting point. Adjust with a dietitian if you have kidney or other conditions. See our [protein on keto guide](/guides/protein-on-keto-and-low-carb) for food examples.',
      },
      {
        question: 'Should I set calories with TDEE before macros?',
        answer:
          'Optional but useful for weight loss. Run the [TDEE calorie calculator](/tdee-calorie-calculator) for maintenance or a modest deficit, then use this keto macro calculator to lock protein, fat, and ~20g net carbs inside that calorie budget.',
      },
      {
        question: 'How do I calculate keto macros for weight loss?',
        answer:
          'Start with body stats and activity here for protein, fat, and ~20g net carbs. If the scale stalls, refresh total calories with the [TDEE calorie calculator](/tdee-calorie-calculator) (modest deficit), then re-run keto macros so fat grams fill the remaining budget — not crash cuts without protein.',
      },
      {
        question: 'Do fat grams change after I lose weight?',
        answer:
          'Yes. As body weight drops, protein grams and total calories usually need a refresh. Recheck the [TDEE calorie calculator](/tdee-calorie-calculator) after a 10–15 lb change, then re-run this keto macro calculator so fat fills the new remaining budget.',
      },
      {
        question: 'How often should I recalculate keto macros?',
        answer:
          'Recheck after a 10–15 lb change, a big activity shift, or a 2–3 week stall. Refresh calories with the [TDEE calorie calculator](/tdee-calorie-calculator), then re-run this page so protein and ~20g net carbs stay current — do not keep day-one fat grams forever.',
      },
      {
        question: 'Does a desk job change my keto macros?',
        answer:
          'Yes — lower activity usually means a lower calorie budget, so fat grams drop while protein and ~20g net carbs stay the priority. Update activity in the [TDEE calorie calculator](/tdee-calorie-calculator), then re-run this keto macro calculator so the split matches desk days instead of an old “active” estimate.',
      },
      {
        question: 'Should I eat all my fat macros every day?',
        answer:
          'Not if fat loss is the goal. Treat fat as a flexible ceiling for satiety inside your calorie budget — lock protein and ~20g net carbs first. If the scale stalls, refresh total calories with the [TDEE calorie calculator](/tdee-calorie-calculator) before forcing every fat gram.',
      },
      {
        question: 'How do I stay under 20g net carbs with packaged foods?',
        answer:
          'Run each label through the [net carb calculator](/net-carb-calculator) (total carbs − fiber − sugar alcohols), then add servings until you hit your day ceiling. Keep protein and fat from this keto macro calculator fixed; swap brands if one sauce blows the budget.',
      },
      {
        question: 'Is this medical advice?',
        answer:
          'No. These are estimates for education only. Talk to your doctor before changing diet, especially if you take diabetes or blood pressure medication.',
      },
    ],
    relatedGuideSlugs: ['getting-started-keto-low-carb', 'dr-boz-ratio-explained', 'protein-on-keto-and-low-carb'],
  },
  {
    slug: 'insulin-resistance-macro-calculator',
    path: '/insulin-resistance-macro-calculator',
    tool: 'macro',
    defaultPlan: 'low_carb_ir',
    title: 'Insulin Resistance Macro Calculator — Low Carb Daily Targets',
    h1: 'Insulin Resistance Macro Calculator',
    description:
      'Calculate daily protein, fat, and net carbs for insulin resistance and metabolic health. Blood-sugar-friendly low carb macro targets.',
    breadcrumbLabel: 'Insulin resistance macros',
    intro:
      'Get daily calorie and macro targets tuned for low-carb eating with insulin resistance — about 50g net carbs, adequate protein, and healthy fats.',
    faqs: [
      {
        question: 'What diet helps insulin resistance?',
        answer:
          'Many people benefit from lower-carb, whole-food meals with protein, fiber, and healthy fats at each meal. This is not a substitute for medical care.',
      },
      {
        question: 'Why 50g net carbs for this plan?',
        answer:
          '50g is a common low-carb starting point for metabolic health — stricter than standard diets but less restrictive than strict keto. Prefer induction first? Use the [keto macro calculator](/keto-macro-calculator) (~20g), then return here. Your provider may recommend different targets.',
      },
      {
        question: 'Can I use this with PCOS?',
        answer:
          'Low-carb approaches are often discussed for PCOS and insulin resistance, but individual needs vary. Confirm targets with your healthcare team.',
      },
      {
        question: 'Should I add a calorie deficit for IR weight loss?',
        answer:
          'Often yes over time, but start with carb quality and protein under clinician guidance. If waist and weight stall for several weeks, estimate maintenance with the [TDEE calorie calculator](/tdee-calorie-calculator), then rebuild macros here or in the [keto macro calculator](/keto-macro-calculator).',
      },
    ],
    relatedGuideSlugs: ['net-carbs-for-insulin-resistance', 'pcos-and-low-carb', 'fasting-with-insulin-resistance'],
  },
  {
    slug: 'low-carb-macro-calculator',
    path: '/low-carb-macro-calculator',
    tool: 'macro',
    defaultPlan: 'moderate_low_carb',
    title: 'Low Carb Macro Calculator — Daily Net Carbs & Macros (Free)',
    h1: 'Low Carb Macro Calculator',
    description:
      'Free low carb macro calculator for metabolic health and Atkins-style eating. Daily calories, protein, fat, and ~100g net carb targets — less strict than keto.',
    breadcrumbLabel: 'Low carb macro calculator',
    intro:
      'Not ready for strict keto? This moderate low-carb calculator targets about 100g net carbs per day — useful for metabolic health, Atkins maintenance, or transitioning off induction.',
    faqs: [
      {
        question: 'How is this different from keto?',
        answer:
          'Keto usually stays under 20–25g net carbs — use the [keto macro calculator](/keto-macro-calculator) for that split. This moderate low-carb plan uses about 100g net carbs — still lower than a typical diet but more flexible.',
      },
      {
        question: 'How many net carbs on a low carb diet?',
        answer:
          'Moderate low carb is often 75–130g net carbs per day. This calculator defaults to about 100g — stricter than standard diets, more flexible than strict keto.',
      },
      {
        question: 'Should I set calories with TDEE on moderate low carb?',
        answer:
          'Optional. Run the [TDEE calorie calculator](/tdee-calorie-calculator) when you want a maintenance or deficit ceiling, then return here for ~100g net carbs — or switch to the [keto macro calculator](/keto-macro-calculator) if you tighten to ~20g.',
      },
      {
        question: 'Does this work for Atkins?',
        answer:
          'Atkins phases vary. Phase 1 is very low carb (similar to strict keto). Later phases add carbs — this calculator’s moderate setting can approximate maintenance-style eating.',
      },
      {
        question: 'What about metabolic dysfunction?',
        answer:
          'Metabolic dysfunction often responds to reducing refined carbs and prioritizing protein and fiber. Pair these macros with whole foods and medical guidance.',
      },
      {
        question: 'Is this low carb macro calculator free?',
        answer:
          'Yes. Enter your body stats and activity level to get daily protein, fat, and net carb grams — no account required.',
      },
    ],
    relatedGuideSlugs: ['atkins-phases-explained', 'fatty-liver-low-carb'],
  },
  {
    slug: 'metabolic-health-calculator',
    path: '/metabolic-health-calculator',
    tool: 'macro',
    defaultPlan: 'low_carb_ir',
    title: 'Metabolic Health Calculator — Blood Sugar Friendly Macros',
    h1: 'Metabolic Health Calculator',
    description:
      'Calculate macros for metabolic health, blood sugar balance, and insulin sensitivity. Low carb protein, fat, and net carb daily targets.',
    breadcrumbLabel: 'Metabolic health calculator',
    intro:
      'Estimate daily macros for metabolic dysfunction and blood-sugar-friendly eating — built for insulin resistance and low-carb lifestyles.',
    faqs: [
      {
        question: 'What is metabolic dysfunction?',
        answer:
          'It often refers to problems like insulin resistance, elevated blood sugar, or metabolic syndrome. Diet is one lever — alongside sleep, activity, and medical care.',
      },
      {
        question: 'Are net carbs the same as blood sugar impact?',
        answer:
          'Net carbs are a label math shortcut. Fiber and food quality also matter. Use net carbs as one tool, not the only measure of a meal.',
      },
      {
        question: 'Should I track macros every day?',
        answer:
          'Many people track briefly to learn portion sizes, then eat intuitively. Do what supports consistency without adding stress.',
      },
    ],
    relatedGuideSlugs: ['visceral-fat-metabolic-health', 'net-carbs-for-insulin-resistance'],
  },
  {
    slug: 'fasting-clock',
    path: '/fasting-clock',
    tool: 'fasting-clock',
    defaultFastingGoal: 16,
    defaultFastingMode: 'assisted',
    title: 'Fasting Clock — Intermittent & Extended Fast Timer',
    h1: 'Fasting Clock',
    description:
      'Free fasting timer for water-only and assisted fasts. Track 16–72 hour fasts with educational stage labels and safety reminders.',
    breadcrumbLabel: 'Fasting clock',
    intro:
      'Start your fast and track elapsed time against educational stage windows — commonly cited metabolic-shift, extended-IF, and multi-day ranges. Labels mark clock time only; they do not prove biological processes occurred.',
    faqs: [
      {
        question: 'What is assisted fasting vs water-only?',
        answer:
          'Water-only means plain water — strictest, best for shorter fasts. Assisted adds zero-calorie electrolytes, bouillon/broth, and black coffee or tea without calories. Both avoid caloric food and drinks.',
      },
      {
        question: 'When does autophagy start?',
        answer:
          'Human autophagy timing is uncertain and cannot be measured at home. Some research discusses cellular cleanup after many hours without food, but a timer cannot confirm it. See our guides for limitations.',
      },
      {
        question: 'Is extended fasting safe?',
        answer:
          'Fasts beyond 24 hours carry electrolyte and refeeding risks — especially on diabetes or blood pressure medications. Always consult your doctor before extended fasting. Do not adjust medication on your own.',
      },
    ],
    relatedGuideSlugs: ['how-to-break-a-24-hour-fast', 'intermittent-fasting-16-8-vs-18-6', 'electrolytes-during-fasting'],
  },
  {
    slug: 'intermittent-fasting-timer',
    path: '/intermittent-fasting-timer',
    tool: 'fasting-clock',
    defaultFastingGoal: 16,
    defaultFastingMode: 'assisted',
    title: 'Intermittent Fasting Timer — 16:8 & 18:6 Clock',
    h1: 'Intermittent Fasting Timer',
    description:
      'Track 16-hour and 18-hour intermittent fasts with educational stage labels. Keto-friendly IF timer for time-restricted eating.',
    breadcrumbLabel: 'IF timer',
    intro:
      'Classic 16:8 or 18:6 intermittent fasting made simple. Stage labels mark educational time windows — not proof of fat burning or autophagy.',
    faqs: [
      {
        question: 'What is 16:8 fasting?',
        answer:
          'You fast for 16 hours and eat within an 8-hour window. Many people start with 13–16 hour overnight fasts as an entry point for time-restricted eating.',
      },
      {
        question: 'Does keto make fasting easier?',
        answer:
          'When carbs stay lower, hunger often drops within days and many people naturally skip meals — intermittent fasting can follow without forcing it.',
      },
      {
        question: 'Can women do 16:8 every day?',
        answer:
          'Evidence does not support universal fasting schedules by sex or menstrual-cycle phase. Stop and seek advice if fasting contributes to dizziness, sleep disruption, menstrual changes, or restrictive eating.',
      },
    ],
    relatedGuideSlugs: ['intermittent-fasting-16-8-vs-18-6', 'fasting-with-insulin-resistance'],
  },
  {
    slug: 'extended-fasting-clock',
    path: '/extended-fasting-clock',
    tool: 'fasting-clock',
    defaultFastingGoal: 36,
    defaultFastingMode: 'assisted',
    title: 'Extended Fasting Clock — 24 to 72 Hour Fast Timer',
    h1: 'Extended Fasting Clock',
    description:
      'Track 24, 36, 48, and 72 hour water and assisted fasts. Optional Dr. Boz ratio tracking and safety alerts for extended fasting.',
    breadcrumbLabel: 'Extended fasting',
    intro:
      'For advanced 24–72 hour fasts after you have a safety plan and medical clearance when needed. Assisted mode allows bouillon and zero-calorie electrolytes.',
    faqs: [
      {
        question: 'How often should I do a 24-hour fast?',
        answer:
          'Frequency depends on health status, medications, and goals. There is no validated schedule for everyone. Discuss extended fasting with your clinician before making it routine.',
      },
      {
        question: 'What is the Dr. Boz Ratio during a fast?',
        answer:
          'Divide fasting glucose (mg/dL) by blood ketones (mmol/L). Branded materials sometimes cite bands above 80, 40–80, and below 40 — these are not validated clinical cutoffs or treatment targets.',
      },
      {
        question: 'Why use assisted instead of water-only for long fasts?',
        answer:
          'Assisted mode allows bouillon and zero-calorie electrolytes, which many people find easier to tolerate. Read our electrolytes-during-fasting guide and get medical clearance before extended fasts.',
      },
    ],
    relatedGuideSlugs: ['water-fast-vs-assisted-fast', 'electrolytes-during-fasting', 'dr-boz-ratio-explained'],
  },
  {
    slug: 'water-fast-timer',
    path: '/water-fast-timer',
    tool: 'fasting-clock',
    defaultFastingGoal: 24,
    defaultFastingMode: 'water-only',
    title: 'Water Fast Timer — Strict Water-Only Fasting Clock',
    h1: 'Water Fast Timer',
    description:
      'Track strict water-only fasts from 16 to 72 hours. Metabolic phase clock with safety guidance for extended water fasting.',
    breadcrumbLabel: 'Water fast timer',
    intro:
      'Plain water only — no broth, electrolyte powders with calories, or coffee with cream. Best for shorter fasts; consider assisted mode for 24h+ with medical clearance.',
    faqs: [
      {
        question: 'What can I drink on a water-only fast?',
        answer:
          'Plain water only in strict mode. No bouillon, no coffee with cream, no supplements with calories. Caloric additions break a strict water-only fast.',
      },
      {
        question: 'Is water-only safe for 48+ hours?',
        answer:
          'Extended water-only fasts beyond 24 hours increase electrolyte imbalance risk for many people. Discuss with your doctor; this timer may suggest assisted mode for longer goals.',
      },
      {
        question: 'How do I break a water fast safely?',
        answer:
          'Break with small portions of protein, healthy fat, and gentle fiber — not a large carb-heavy meal. Go slowly to reduce refeeding risk on extended fasts.',
      },
    ],
    relatedGuideSlugs: ['water-fast-vs-assisted-fast', 'how-to-break-a-24-hour-fast'],
  },
  {
    slug: 'dr-boz-ratio-calculator',
    path: '/dr-boz-ratio-calculator',
    tool: 'fasting-clock',
    defaultFastingGoal: 24,
    defaultFastingMode: 'assisted',
    title: 'Dr. Boz Ratio Calculator — Glucose ÷ Ketones During Fasts',
    h1: 'Dr. Boz Ratio Calculator',
    description:
      'Track the Dr. Boz Ratio (fasting glucose ÷ blood ketones) during fasts. Educational calculator with neutral interpretations.',
    breadcrumbLabel: 'Dr. Boz ratio',
    intro:
      'Log fasting glucose and blood ketones during your fast. The branded ratio divides mg/dL by mmol/L — interpretations here are educational only, not diagnostic targets.',
    faqs: [
      {
        question: 'What is the Dr. Boz Ratio?',
        answer:
          'Divide fasting glucose (mg/dL) by blood ketones (mmol/L). Branded materials sometimes cite bands above 80, 40–80, and below 40 — these are not validated clinical cutoffs.',
      },
      {
        question: 'When should I check my ratio?',
        answer:
          'Many people check in the morning before breaking a fast, or at consistent intervals if they already use a dual meter. Use the same meter and conditions for trend comparison.',
      },
      {
        question: 'Is this medical advice?',
        answer:
          'No. The ratio is an optional educational tool. Work with your doctor if you manage diabetes or take glucose-lowering medications. Do not adjust medication based on the ratio.',
      },
    ],
    relatedGuideSlugs: ['dr-boz-ratio-explained', 'extended-fasting-clock', 'fasting-on-diabetes-medications'],
  },
  {
    slug: 'atkins-macro-calculator',
    path: '/atkins-macro-calculator',
    tool: 'macro',
    defaultPlan: 'strict_keto',
    title: 'Atkins Macro Calculator — Phase 1 Low Carb Targets',
    h1: 'Atkins Macro Calculator',
    description:
      'Calculate daily protein, fat, and net carbs for Atkins Phase 1 and low-carb induction. Mifflin-St Jeor calories with strict carb limits.',
    breadcrumbLabel: 'Atkins macro calculator',
    intro:
      'Atkins Phase 1 (Induction) keeps net carbs very low — similar to strict keto at about 20g. Use this for daily macro targets during induction.',
    faqs: [
      {
        question: 'How many carbs on Atkins Phase 1?',
        answer:
          'Classic Atkins Induction limits net carbs to about 20g per day. This calculator defaults to strict keto macros (~20g net carbs).',
      },
      {
        question: 'When do I add carbs on Atkins?',
        answer:
          'Phase 2 slowly adds nuts, berries, and more vegetables as you approach goal weight. See our Atkins phases guide for the full progression.',
      },
      {
        question: 'Is Atkins the same as keto?',
        answer:
          'Phase 1 is very similar to strict keto. Later Atkins phases allow more carbs than typical keto maintenance.',
      },
    ],
    relatedGuideSlugs: ['atkins-phases-explained', 'getting-started-keto-low-carb'],
  },
  {
    slug: 'pcos-low-carb-calculator',
    path: '/pcos-low-carb-calculator',
    tool: 'macro',
    defaultPlan: 'low_carb_ir',
    title: 'PCOS Low Carb Calculator — Macro Targets for Insulin Resistance',
    h1: 'PCOS Low Carb Calculator',
    description:
      'Daily macro calculator tuned for PCOS and insulin resistance — about 50g net carbs, adequate protein, and healthy fats.',
    breadcrumbLabel: 'PCOS calculator',
    intro:
      'Many people with PCOS discuss lower-carb eating with their providers. This plan uses ~50g net carbs and protein-forward macros for blood-sugar-friendly meals.',
    faqs: [
      {
        question: 'Does low carb help PCOS?',
        answer:
          'Research and clinical experience often link insulin resistance with PCOS symptoms. Lower-carb diets may improve markers for some women — confirm with your OB/GYN or endocrinologist.',
      },
      {
        question: 'Should women with PCOS fast?',
        answer:
          'Intermittent fasting may help some women with PCOS once low-carb eating is stable. Evidence does not support cycle-phase fasting prescriptions — discuss timing with your clinician.',
      },
      {
        question: 'How much protein for PCOS?',
        answer:
          'This calculator uses about 0.8g protein per pound of body weight as a starting point. Your provider may recommend different targets.',
      },
    ],
    relatedGuideSlugs: ['pcos-and-low-carb', 'net-carbs-for-insulin-resistance', 'intermittent-fasting-16-8-vs-18-6'],
  },
  {
    slug: 'omad-fasting-timer',
    path: '/omad-fasting-timer',
    tool: 'fasting-clock',
    defaultFastingGoal: 24,
    defaultFastingMode: 'assisted',
    title: 'OMAD Fasting Timer — One Meal a Day Clock',
    h1: 'OMAD Fasting Timer',
    description:
      'Track one-meal-a-day (OMAD) fasts with a 23-hour fasting window. Metabolic phase guidance for extended daily fasts.',
    breadcrumbLabel: 'OMAD timer',
    intro:
      'One meal a day usually means a 23-hour fast and a 1-hour eating window. Set a 24-hour goal and stop the timer when you eat — or use 16:8 while building up to OMAD.',
    faqs: [
      {
        question: 'What is OMAD?',
        answer:
          'One meal a day — you eat a single substantial meal daily and fast the other ~23 hours. It is a form of extended intermittent fasting.',
      },
      {
        question: 'Is OMAD safe?',
        answer:
          'Not for everyone. Avoid OMAD if pregnant, underweight, or on diabetes medications without medical supervision. Start with 16:8 before jumping to OMAD.',
      },
      {
        question: 'What should my one meal include?',
        answer:
          'Protein, healthy fats, and low-starch vegetables — enough calories to meet your needs in one sitting. Good OMAD plates include sheet pan chicken with cabbage or a salmon avocado poke bowl (see Recipes). Pair with our break-fast guide for refeed timing.',
      },
    ],
    relatedGuideSlugs: ['best-first-meal-after-fasting', 'intermittent-fasting-16-8-vs-18-6', 'electrolytes-during-fasting'],
  },
  {
    slug: 'weight-loss-macro-calculator',
    path: '/weight-loss-macro-calculator',
    tool: 'macro',
    defaultPlan: 'moderate_low_carb',
    title: 'Weight Loss Macro Calculator — Low Carb Daily Targets',
    h1: 'Weight Loss Macro Calculator',
    description:
      'Calculate daily protein, fat, and net carbs for sustainable weight loss on a low-carb plan. Mifflin-St Jeor calories with ~100g net carb default.',
    breadcrumbLabel: 'Weight loss macros',
    intro:
      'Moderate low-carb macros (~100g net carbs) support steady fat loss without strict keto restriction. Enter your stats for daily calorie and macro targets.',
    faqs: [
      {
        question: 'How many carbs for weight loss?',
        answer:
          'Many people lose weight on 50–130g net carbs depending on activity and insulin sensitivity. This calculator uses ~100g as a moderate low-carb starting point. Prefer induction-level restriction? Use the [keto macro calculator](/keto-macro-calculator) (~20g).',
      },
      {
        question: 'Should I use TDEE or this weight-loss calculator?',
        answer:
          'Use the [TDEE calorie calculator](/tdee-calorie-calculator) when you want maintenance or a custom deficit first. Use this page when you want macros (~100g net carbs) with a built-in planning deficit. Prefer strict keto splits? Lock protein and ~20g net carbs in the [keto macro calculator](/keto-macro-calculator) inside the same calorie budget.',
      },
      {
        question: 'Do I need to count macros forever?',
        answer:
          'Short tracking builds awareness of portions and protein intake. Many people transition to habit-based eating after a few weeks — use macros as training wheels.',
      },
      {
        question: 'Is low carb required for weight loss?',
        answer:
          'No — calorie deficit matters most. Low carb helps some people control hunger and blood sugar. Pair these targets with whole foods and medical guidance if needed. Recheck burn with [TDEE](/tdee-calorie-calculator) after a 10–15 lb change.',
      },
    ],
    relatedGuideSlugs: ['getting-started-keto-low-carb', 'visceral-fat-metabolic-health', 'atkins-phases-explained'],
  },
  {
    slug: 'diabetes-macro-calculator',
    path: '/diabetes-macro-calculator',
    tool: 'macro',
    defaultPlan: 'low_carb_ir',
    title: 'Diabetes Macro Calculator — Blood Sugar Friendly Targets',
    h1: 'Diabetes Macro Calculator',
    description:
      'Daily macro calculator for type 2 diabetes and prediabetes low-carb eating. ~50g net carbs with adequate protein and healthy fats.',
    breadcrumbLabel: 'Diabetes macros',
    intro:
      'Lower-carb macro targets may support blood sugar management alongside medication — about 50g net carbs, protein-forward meals, and healthy fats. Not medical advice; confirm with your care team.',
    faqs: [
      {
        question: 'Can low carb help type 2 diabetes?',
        answer:
          'Many clinical programs use reduced carbohydrate intake to improve blood sugar markers. Never change diet or medications without your doctor — especially on insulin or sulfonylureas.',
      },
      {
        question: 'Why 50g net carbs here?',
        answer:
          '50g is a common therapeutic low-carb starting point used in metabolic health programs — stricter than standard diets but more flexible than strict keto. Prefer a short induction phase? Compare the [keto macro calculator](/keto-macro-calculator) (~20g) with your clinician’s plan.',
      },
      {
        question: 'Should I use TDEE with diabetes macros?',
        answer:
          'Only with clinician oversight. If weight loss is also a goal and meds are stable, estimate maintenance with the [TDEE calorie calculator](/tdee-calorie-calculator), then rebuild protein and carbs here — never cut calories alone if you take insulin or sulfonylureas.',
      },
      {
        question: 'Should I fast while on diabetes medication?',
        answer:
          'Fasting with glucose-lowering meds can cause dangerous lows. Read our [fasting on diabetes medications](/guides/fasting-on-diabetes-medications) guide and get provider approval before combining fasting with this plan.',
      },
    ],
    relatedGuideSlugs: ['fasting-on-diabetes-medications', 'net-carbs-for-insulin-resistance', 'fasting-with-insulin-resistance'],
  },
  {
    slug: 'tdee-calorie-calculator',
    path: '/tdee-calorie-calculator',
    tool: 'tdee',
    title: 'TDEE Calculator — Free Daily Calories, BMR & Deficit',
    h1: 'Free TDEE Calorie Calculator',
    description:
      'Free TDEE calorie calculator (Mifflin-St Jeor): estimate BMR, maintenance calories, and an optional 300–500 calorie weight-loss deficit — then pair with the keto macro calculator. No signup.',
    breadcrumbLabel: 'TDEE calculator',
    intro:
      'Total Daily Energy Expenditure (TDEE) is a planning estimate of how many calories you burn in a day. Enter age, sex, weight, height, and activity — optionally apply a mild-to-moderate deficit for fat-loss targets. After you have a calorie ceiling, split protein, fat, and ~20g net carbs with the [keto macro calculator](/keto-macro-calculator).',
    faqs: [
      {
        question: 'What is TDEE vs BMR?',
        answer:
          'BMR is calories burned at rest. TDEE multiplies BMR by an activity factor to estimate full-day burn including movement and exercise.',
      },
      {
        question: 'How do I calculate TDEE for weight loss?',
        answer:
          'Estimate maintenance with this calculator, then subtract about 300–500 calories for a moderate deficit. Pair the calorie target with protein and net carbs in the [keto macro calculator](/keto-macro-calculator) — do not cut calories alone without enough protein.',
      },
      {
        question: 'Can I use a TDEE calculator with keto?',
        answer:
          'Yes. TDEE sets total calories; keto sets the carb ceiling (often ~20g net). Run TDEE first, then split protein, fat, and net carbs with our [keto macro calculator](/keto-macro-calculator) using the same body stats.',
      },
      {
        question: 'What is a good calorie deficit from TDEE?',
        answer:
          'A common starting point is 300–500 calories below maintenance. Larger cuts raise hunger and muscle-loss risk. Recheck TDEE after a 10–15 lb change, then refresh macros so protein stays adequate.',
      },
      {
        question: 'How accurate is Mifflin-St Jeor?',
        answer:
          'It is a widely used adult estimate, not a lab measurement. Adjust after 2–3 weeks if weight stalls or drops too fast. This is not medical advice.',
      },
      {
        question: 'Should I eat below BMR?',
        answer:
          'This tool floors targets at BMR. Very low calories can be unsafe — talk with a clinician before aggressive cuts, especially with diabetes medications.',
      },
      {
        question: 'Is this TDEE calorie calculator free?',
        answer:
          'Yes — no signup. Enter age, sex, height, weight, and activity to get BMR, maintenance calories, and an optional deficit target.',
      },
      {
        question: 'Should I change activity level if I start lifting?',
        answer:
          'Yes — bump the activity multiplier when training becomes consistent, then re-check weight over 2–3 weeks. After the new TDEE prints, rebuild protein and ~20g net carbs in the [keto macro calculator](/keto-macro-calculator) so macros match the higher burn.',
      },
      {
        question: 'Why does my TDEE differ from another calculator?',
        answer:
          'Formulas and activity multipliers vary. Treat any TDEE as a starting estimate — if weekly average weight is flat for 2–3 weeks, adjust calories here rather than shopping for a higher number. Then rebuild protein and ~20g net carbs in the [keto macro calculator](/keto-macro-calculator).',
      },
      {
        question: 'Should I use weekly average weight with TDEE?',
        answer:
          'Yes. Day-to-day scale noise from water and food volume can hide a real trend. Weigh most mornings, average the week, then decide whether to hold, cut 300–500 from this TDEE, or refresh macros in the [keto macro calculator](/keto-macro-calculator).',
      },
      {
        question: 'Do I need to recalculate TDEE every week?',
        answer:
          'No — weekly weighing is for the trend; recalculate TDEE after a 10–15 lb change, a lasting activity shift, or a 2–3 week stall on your weekly average. Then rebuild protein and ~20g net carbs in the [keto macro calculator](/keto-macro-calculator) so macros match the new calorie ceiling.',
      },
    ],
    relatedGuideSlugs: [
      'getting-started-keto-low-carb',
      'mindful-macro-tracking-low-carb',
      'visceral-fat-metabolic-health',
      'protein-on-keto-and-low-carb',
    ],
  },
];

export const FEATURED_LANDING_SLUGS = [
  'keto-macro-calculator',
  'tdee-calorie-calculator',
  'net-carb-calculator',
  'insulin-resistance-macro-calculator',
  'weight-loss-macro-calculator',
  'diabetes-macro-calculator',
  'intermittent-fasting-timer',
  'pcos-low-carb-calculator',
  'fasting-clock',
] as const;

export const FEATURED_LANDING_LINKS = FEATURED_LANDING_SLUGS.map((slug) => {
  const page = LANDING_PAGES.find((p) => p.slug === slug);
  return page
    ? { slug: page.slug, path: page.path, breadcrumbLabel: page.breadcrumbLabel }
    : null;
}).filter((p): p is { slug: string; path: string; breadcrumbLabel: string } => p !== null);

export function getLandingPageBySlug(slug: string): LandingPage | undefined {
  return LANDING_PAGES.find((p) => p.slug === slug);
}

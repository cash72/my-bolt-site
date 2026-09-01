import type { Guide, GuideSource } from './types';

const SOURCES = {
  healthyEating: {
    title: 'Tips for Healthy Eating for a Healthy Weight',
    publisher: 'Centers for Disease Control and Prevention',
    url: 'https://www.cdc.gov/healthy-weight-growth/healthy-eating/index.html',
  },
  foodData: {
    title: 'USDA FoodData Central',
    publisher: 'U.S. Department of Agriculture',
    url: 'https://fdc.nal.usda.gov/',
  },
  nutritionLabel: {
    title: 'How to Understand and Use the Nutrition Facts Label',
    publisher: 'U.S. Food and Drug Administration',
    url: 'https://www.fda.gov/food/nutrition-facts-label/how-understand-and-use-nutrition-facts-label',
  },
  insulinResistance: {
    title: 'Insulin Resistance & Prediabetes',
    publisher: 'National Institute of Diabetes and Digestive and Kidney Diseases',
    url: 'https://www.niddk.nih.gov/health-information/diabetes/overview/what-is-diabetes/prediabetes-insulin-resistance',
  },
  hypoglycemia: {
    title: 'Low Blood Glucose (Hypoglycemia)',
    publisher: 'National Institute of Diabetes and Digestive and Kidney Diseases',
    url: 'https://www.niddk.nih.gov/health-information/diabetes/overview/preventing-problems/low-blood-glucose-hypoglycemia',
  },
  fattyLiver: {
    title: 'Nonalcoholic Fatty Liver Disease (NAFLD) & NASH',
    publisher: 'National Institute of Diabetes and Digestive and Kidney Diseases',
    url: 'https://www.niddk.nih.gov/health-information/liver-disease/nafld-nash',
  },
  pcos: {
    title: 'Polycystic ovary syndrome',
    publisher: "U.S. Department of Health and Human Services, Office on Women's Health",
    url: 'https://womenshealth.gov/a-z-topics/polycystic-ovary-syndrome',
  },
  magnesium: {
    title: 'Magnesium: Fact Sheet for Consumers',
    publisher: 'National Institutes of Health, Office of Dietary Supplements',
    url: 'https://ods.od.nih.gov/factsheets/Magnesium-Consumer/',
  },
  potassium: {
    title: 'Potassium: Fact Sheet for Consumers',
    publisher: 'National Institutes of Health, Office of Dietary Supplements',
    url: 'https://ods.od.nih.gov/factsheets/Potassium-Consumer/',
  },
  fastingReview: {
    title: 'Intermittent fasting and weight loss: Systematic review',
    publisher: 'Canadian Family Physician (PubMed)',
    url: 'https://pubmed.ncbi.nlm.nih.gov/32060194/',
  },
  fastingOutcomesReview: {
    title: 'Intermittent Energy Restriction for Weight Loss: A Systematic Review of Cardiometabolic, Inflammatory and Appetite Outcomes',
    publisher: 'Journal of the Academy of Nutrition and Dietetics (PubMed)',
    url: 'https://pubmed.ncbi.nlm.nih.gov/35531785/',
  },
  namedDietsReview: {
    title: 'Long-term effects of 4 popular diets on weight loss and cardiovascular risk factors: a systematic review of randomized controlled trials',
    publisher: 'Circulation: Cardiovascular Quality and Outcomes (PubMed)',
    url: 'https://pubmed.ncbi.nlm.nih.gov/25387778/',
  },
} satisfies Record<string, GuideSource>;

function sourcesForGuide(slug: string): GuideSource[] {
  if (slug === 'fatty-liver-low-carb') return [SOURCES.fattyLiver, SOURCES.healthyEating];
  if (slug === 'pcos-and-low-carb') return [SOURCES.pcos, SOURCES.insulinResistance];
  if (slug === 'atkins-phases-explained') return [SOURCES.namedDietsReview, SOURCES.healthyEating];
  if (slug.includes('electrolytes') || slug === 'water-fast-vs-assisted-fast') {
    return [SOURCES.magnesium, SOURCES.potassium, SOURCES.fastingReview];
  }
  if (slug.includes('fast') || slug === 'intermittent-fasting-16-8-vs-18-6') {
    return [SOURCES.fastingReview, SOURCES.fastingOutcomesReview, SOURCES.hypoglycemia];
  }
  if (slug.includes('carb') || slug.includes('label')) {
    return [SOURCES.nutritionLabel, SOURCES.foodData, SOURCES.insulinResistance];
  }
  if (slug === 'dr-boz-ratio-explained') return [SOURCES.insulinResistance, SOURCES.hypoglycemia];
  return [SOURCES.healthyEating, SOURCES.insulinResistance, SOURCES.foodData];
}

const GUIDE_DRAFTS: Omit<Guide, 'sources'>[] = [
  {
    slug: 'how-to-break-a-24-hour-fast',
    category: 'fasting',
    title: 'How to Break a 24-Hour Fast Safely',
    description:
      'General meal-planning considerations after a 24-hour fast, including symptoms that require medical help.',
    readMinutes: 9,
    toolPath: '/fasting-clock',
    toolLabel: 'Fasting clock',
    relatedRecipeSlugs: ['scrambled-eggs-spinach', 'chicken-salad-lettuce-cups', 'cottage-cheese-cucumber', 'ginger-chicken-bone-broth-soup'],
    relatedGuideSlugs: ['best-first-meal-after-fasting', 'water-fast-vs-assisted-fast'],
    sections: [
      {
        heading: 'Why how you break a fast matters',
        paragraphs: [
          'Human research does not establish that a 24-hour fast produces a specific autophagy threshold or a medically meaningful “gut reset.” Responses to fasting and the first meal vary.',
          'After a short fast, most otherwise healthy adults can return to an ordinary balanced meal. A smaller meal eaten slowly may feel more comfortable, but it is not a universal medical requirement.',
        ],
      },
      {
        heading: 'Step-by-step: breaking a 24-hour fast',
        paragraphs: ['These are optional comfort-focused ideas, not a refeeding protocol:'],
        bullets: [
          'Choose water and an ordinary meal unless a clinician has given different instructions.',
          'If a large meal feels uncomfortable, begin with a smaller portion such as eggs, chicken salad, or salmon with vegetables.',
          'Eat slowly over 15–20 minutes. Stop at comfortable fullness, not stuffed.',
          'Wait 30–60 minutes before a second small meal if still hungry.',
          'Resume your usual eating pattern according to hunger and tolerance.',
        ],
      },
      {
        heading: 'What to avoid on your first meal',
        paragraphs: [
          'There is no single food that “undoes” a fast. Large, rich meals or alcohol may worsen nausea or stomach discomfort for some people.',
          'People with diabetes should follow their care plan for carbohydrate intake and glucose monitoring rather than relying on universal “spike” claims.',
        ],
      },
      {
        heading: 'When to get medical help',
        paragraphs: [
          'Seek urgent care for chest pain, severe confusion, fainting, or persistent vomiting. Refeeding syndrome is associated mainly with malnutrition and prolonged inadequate intake; this page cannot assess individual risk.',
          'If you take diabetes or blood-pressure medication, ask your prescriber whether fasting is appropriate. Never change a dose on the basis of this guide.',
        ],
      },
      {
        heading: 'Sample first meals after 24 hours',
        paragraphs: [
          'Keep protein moderate and carbs low: scrambled eggs with spinach, chicken salad lettuce cups, or baked salmon with broccoli. See our [best first meal guide](/guides/best-first-meal-after-fasting) and related [break-fast recipes](/recipes/scrambled-eggs-spinach).',
          'Use the [fasting clock](/fasting-clock) to track your window and plan refeed timing. Match the first meal to your day ceiling with the [keto macro calculator](/keto-macro-calculator) (~20g net carbs) so protein stays locked.',
        ],
      },
    ],
    faqs: [
      {
        question: 'Can I break a 24-hour fast with fruit?',
        answer:
          'Whole fruit can be part of a balanced meal. People who monitor glucose can follow their clinician’s advice and observe their own response.',
      },
      {
        question: 'How often should I do a 24-hour fast?',
        answer:
          'No schedule is appropriate for everyone, and evidence does not support branded menstrual-cycle “fasting phases” as medical consensus. Ask a clinician if fasting may affect a health condition, pregnancy, medication, or eating-disorder recovery.',
      },
      {
        question: 'Is coffee with cream okay to break a fast?',
        answer:
          'Cream contains calories, so it does not meet a strict no-calorie definition. Whether that matters depends on the purpose of the fast.',
      },
      {
        question: 'Should I lock macros before the first meal?',
        answer:
          'Helpful if fat loss or blood sugar is the goal. Set protein and ~20g net carbs with the [keto macro calculator](/keto-macro-calculator), and use the [TDEE calorie calculator](/tdee-calorie-calculator) when the scale stalls despite shorter eating windows.',
      },
    ],
  },
  {
    slug: 'intermittent-fasting-16-8-vs-18-6',
    category: 'fasting',
    title: '16:8 vs 18:6 Intermittent Fasting — Which Is Right for You?',
    description:
      'Compare 16-hour and 18-hour eating windows, the limits of current evidence, and situations that require clinical advice.',
    readMinutes: 9,
    toolPath: '/intermittent-fasting-timer',
    toolLabel: 'IF timer',
    relatedGuideSlugs: ['fasting-with-insulin-resistance', 'how-to-break-a-24-hour-fast'],
    sections: [
      {
        heading: 'What intermittent fasting actually means',
        paragraphs: [
          'Intermittent fasting describes eating schedules that alternate periods of eating and not eating. Study protocols vary, so results from one schedule do not automatically apply to another.',
          'Systematic reviews report that intermittent fasting can produce short-term weight loss, but it has not consistently outperformed continuous energy restriction and long-term evidence remains limited.',
        ],
      },
      {
        heading: '16:8 — the beginner standard',
        paragraphs: [
          'A 16:8 schedule allows eating during an eight-hour period. Example: finish dinner at 7 PM and eat again at 11 AM.',
          'It may fit some schedules, but it is not accessible or beneficial for everyone. Research does not establish a universal hour when “fat burning” meaningfully begins.',
        ],
      },
      {
        heading: '18:6 — a modest step up',
        paragraphs: [
          'An 18:6 schedule narrows eating to six hours. No validated 17-hour autophagy threshold exists for humans.',
          'There is not enough evidence to prescribe fasting length by menstrual-cycle phase. Stop and seek advice if fasting contributes to dizziness, sleep disruption, menstrual changes, anxiety, or restrictive eating.',
        ],
      },
      {
        heading: 'OMAD and longer fasts — not step one',
        paragraphs: [
          'One-meal-a-day and longer fasts make it harder to meet energy and nutrient needs and may increase medication-related risks. They are not a required progression from shorter schedules.',
          'Choose the least restrictive schedule that meets your goals, or do not fast. A timer records elapsed time; it does not determine safety or metabolic state.',
        ],
      },
      {
        heading: 'Choosing your first IF window',
        bullets: [
          'Start 16:8 — skip breakfast, eat 12 PM–8 PM',
          'Move to 18:6 after 2–4 weeks if energy is stable',
          'Pair with [keto macros](/keto-macro-calculator) for steadier glucose',
          'Optional calorie baseline — [TDEE calculator](/tdee-calorie-calculator)',
          'Track with our [intermittent fasting timer](/intermittent-fasting-timer)',
        ],
        paragraphs: [
          'If you have insulin resistance, read [fasting with insulin resistance](/guides/fasting-with-insulin-resistance) before tightening your window. A shorter eating window is not a free pass for ultra-processed carbs — lock protein and net carbs with the [keto macro calculator](/keto-macro-calculator) when fat loss is the goal.',
        ],
      },
    ],
    faqs: [
      {
        question: 'Will IF slow my metabolism?',
        answer:
          'Long-term metabolic effects of specific daily fasting windows remain uncertain. If energy, sleep, menstrual cycles, or eating behavior worsen, stop and discuss the change with a clinician.',
      },
      {
        question: 'Can I drink coffee while fasting?',
        answer:
          'Water is the simplest no-calorie option. Plain coffee and tea contain little energy; cream and oils contain calories. There is no universal definition of an “assisted fast.”',
      },
      {
        question: 'Do I still need macros on 16:8?',
        answer:
          'Yes if fat loss or blood sugar is the goal. Set protein and ~20g net carbs with the [keto macro calculator](/keto-macro-calculator), and use the [TDEE calorie calculator](/tdee-calorie-calculator) when the scale stalls despite a shorter eating window.',
      },
      {
        question: 'Should men and women fast the same way?',
        answer:
          'Evidence does not support universal fasting schedules by sex or menstrual-cycle phase. Pregnancy, breastfeeding, fertility treatment, menstrual changes, and a history of disordered eating warrant individualized advice.',
      },
    ],
  },
  {
    slug: 'water-fast-vs-assisted-fast',
    category: 'fasting',
    title: 'Water Fast vs Assisted Fast — Electrolytes Explained',
    description:
      'Definitions, evidence limits, and electrolyte risks of water-only and supplement-supported fasting.',
    readMinutes: 9,
    toolPath: '/water-fast-timer',
    toolLabel: 'Water fast timer',
    relatedGuideSlugs: ['how-to-break-a-24-hour-fast', 'intermittent-fasting-16-8-vs-18-6'],
    sections: [
      {
        heading: 'Water-only fasting',
        paragraphs: [
          'A water-only fast generally means consuming water and no calories. “Assisted fasting” is not a standardized medical term.',
          'Headache, dizziness, weakness, palpitations, and cramps have many possible causes. They should not automatically be treated as sodium deficiency.',
        ],
      },
      {
        heading: 'Assisted fasting — what is allowed',
        paragraphs: [
          'Some people use “assisted fasting” to describe adding electrolytes, coffee, tea, or broth. Broth has calories, and products differ in sodium, potassium, magnesium, sweeteners, and medication interactions.',
          'Electrolyte supplements do not make prolonged fasting inherently safe. Excess sodium, potassium, or magnesium can also cause harm.',
        ],
      },
      {
        heading: 'Which should you choose?',
        paragraphs: [
          'There is no authoritative one-size-fits-all electrolyte protocol by fast length. Prolonged fasting should not be self-managed with an internet dosing schedule.',
          'Our fasting clock lets you toggle modes and shows tailored hydration tips as your timer runs. After the fast, set meal macros with the [keto macro calculator](/keto-macro-calculator) so the first eating window stays on plan.',
        ],
        bullets: [
          'For ordinary hydration, drink according to thirst unless a clinician has set a fluid target',
          'Do not use electrolyte products to push through concerning symptoms',
          'Avoid prolonged fasting without clinical guidance',
          'Kidney, heart, blood-pressure, and endocrine conditions can change electrolyte safety',
          'Optional calorie baseline after refeed — [TDEE calculator](/tdee-calorie-calculator)',
        ],
      },
      {
        heading: 'Electrolyte strategy by fast type',
        paragraphs: [
          'Potassium and magnesium supplements can interact with medications and may be dangerous with impaired kidney function. See [electrolytes during fasting](/guides/electrolytes-during-fasting) for general safety information.',
          'Use the [water fast timer](/water-fast-timer) or [extended fasting clock](/extended-fasting-clock) depending on your protocol.',
        ],
      },
    ],
    faqs: [
      {
        question: 'Does bouillon break a fast?',
        answer:
          'Bouillon usually contains calories and sodium, so it is not water-only. Whether to use it is a dietary preference, not a medical definition of a successful fast.',
      },
      {
        question: 'What about electrolyte powders?',
        answer:
          'Read the label and ask a clinician or pharmacist about supplements if you have kidney, heart, or blood-pressure conditions or take medicines that affect electrolytes.',
      },
    ],
  },
  {
    slug: 'fasting-with-insulin-resistance',
    category: 'insulin-resistance',
    title: 'Fasting With Insulin Resistance — When to Go Slow',
    description:
      'Why insulin resistance and glucose-lowering medicines require caution with fasting and individualized clinical advice.',
    readMinutes: 10,
    toolPath: '/insulin-resistance-macro-calculator',
    toolLabel: 'IR macro calculator',
    relatedGuideSlugs: ['dr-boz-ratio-explained', 'net-carbs-for-insulin-resistance', 'intermittent-fasting-16-8-vs-18-6'],
    sections: [
      {
        heading: 'Insulin resistance changes the fasting equation',
        paragraphs: [
          'With insulin resistance, muscle, fat, and liver cells do not respond to insulin as they should. Blood glucose tests—not appearance, symptoms, or a ketone ratio—are used to identify prediabetes and diabetes.',
          'Fasting responses vary, and a high glucose reading during a fast is not enough to infer which tissue is supplying energy. Unexpected or persistent high readings need clinical evaluation.',
        ],
      },
      {
        heading: 'Why clinical context comes first',
        paragraphs: [
          'No validated glucose-to-ketone target determines whether a person is “ready” to fast. A1C, fasting plasma glucose, medical history, nutrition status, and medicines are more relevant clinical information.',
          'Lifestyle changes can help prevent or delay type 2 diabetes, but no single fasting or carbohydrate schedule is required.',
        ],
      },
      {
        heading: 'Signs you should not extend your fast',
        paragraphs: [
          'Stop fasting and follow your care plan if you develop weakness, shakiness, confusion, sweating, palpitations, or an out-of-range glucose reading. Seek urgent help for severe symptoms.',
          'Insulin and medicines that stimulate insulin release can cause hypoglycemia when meals are skipped. Ask the prescriber before fasting and never adjust medication yourself.',
        ],
      },
      {
        heading: 'A practical progression',
        bullets: [
          'Choose a sustainable, nutrient-dense eating pattern with your care team.',
          'Set educational macros with the [insulin resistance calculator](/insulin-resistance-macro-calculator) or [keto macro calculator](/keto-macro-calculator) only after clinician agreement.',
          'Optional calorie baseline — [TDEE calculator](/tdee-calorie-calculator) if weight loss is also a goal and meds are stable.',
          'Use laboratory tests recommended by your clinician to monitor prediabetes or diabetes.',
          'Discuss any meal-skipping schedule before starting if you take glucose-lowering medicine.',
          'Longer fasting is optional and is not a treatment milestone.',
        ],
        paragraphs: [],
      },
      {
        heading: 'IR fasting safety checklist',
        bullets: [
          'Use a meter or CGM only as directed and know your action thresholds',
          'Coordinate with your prescriber before changing meal timing',
          'Choose carbohydrate intake with a registered dietitian or clinician',
          'Carry the fast-acting carbohydrate recommended in your hypoglycemia plan',
          'Treat consumer glucose-to-ketone ratios as non-diagnostic',
        ],
        paragraphs: [],
      },
    ],
    faqs: [
      {
        question: 'Why is my fasting glucose high on keto?',
        answer:
          'Morning glucose can be affected by hormones, sleep, illness, food, and medicines. Persistent out-of-range results warrant medical evaluation.',
      },
      {
        question: 'Can fasting cure insulin resistance?',
        answer:
          'No. Insulin resistance has multiple causes. Evidence-based lifestyle and medical care can improve risk factors, but fasting is not a guaranteed cure.',
      },
      {
        question: 'Should I set macros before trying IF with IR?',
        answer:
          'Usually yes under clinician guidance. Lock protein and a carb ceiling with the [insulin resistance macro calculator](/insulin-resistance-macro-calculator) or [keto macro calculator](/keto-macro-calculator) first. Add the [TDEE calorie calculator](/tdee-calorie-calculator) only if weight loss is a goal and medications are stable.',
      },
    ],
  },
  {
    slug: 'dr-boz-ratio-explained',
    category: 'insulin-resistance',
    title: 'Dr. Boz Ratio — Branded Calculator & Limitations',
    description:
      'What this branded glucose-to-ketone ratio calculates, why its targets are not validated clinical cutoffs, and how to interpret it cautiously.',
    readMinutes: 9,
    toolPath: '/dr-boz-ratio-calculator',
    toolLabel: 'Dr. Boz ratio calculator',
    relatedGuideSlugs: ['fasting-with-insulin-resistance', 'net-carbs-for-insulin-resistance'],
    sections: [
      {
        heading: 'What is the Dr. Boz Ratio?',
        paragraphs: [
          'The “Dr. Boz Ratio” is a branded calculation that divides blood glucose in mg/dL by blood ketones in mmol/L. It is not a diagnostic test or medical-consensus measure of insulin resistance.',
          'A ratio combines two readings but cannot show which fuel the whole body is “primarily burning,” diagnose disease, or substitute for A1C and glucose tests interpreted by a clinician.',
        ],
      },
      {
        heading: 'How to calculate it',
        paragraphs: [
          'The calculation requires glucose in mg/dL and beta-hydroxybutyrate in mmol/L measured at the same time. Home meters have limitations, and context affects both values.',
          'Formula: Dr. Boz Ratio = Glucose (mg/dL) ÷ Ketones (mmol/L). Example: 90 mg/dL ÷ 1.5 mmol/L = 60.',
          'Our fasting clock includes optional fields to track your ratio during active fasts.',
        ],
      },
      {
        heading: 'How to interpret your number',
        bullets: [
          'Published clinical guidelines do not validate 80 or 40 as treatment thresholds.',
          'A lower value usually results from lower glucose, higher ketones, or both, but does not prove better health.',
          'Do not use the ratio to justify prolonged fasting, medication changes, or claims about autophagy.',
        ],
        paragraphs: [
          'Unexpected glucose or ketone results should be assessed using your care plan, especially with diabetes, illness, pregnancy, or SGLT2-inhibitor use.',
        ],
      },
      {
        heading: 'Using the ratio in practice',
        paragraphs: [
          'This site’s calculator uses the branded formula directly: glucose (mg/dL) ÷ ketones (mmol/L). It does not convert glucose to mmol/L first. Some other tools divide glucose by 18 before dividing by ketones — that yields a different number; check which formula a tool uses.',
          'Enter values in our [Dr. Boz ratio calculator](/dr-boz-ratio-calculator). Pair with [net carb tracking](/net-carb-calculator) to see how meals move your numbers. Day ceilings still come from the [keto macro calculator](/keto-macro-calculator) or [insulin resistance macro calculator](/insulin-resistance-macro-calculator) — not from chasing a ratio.',
        ],
      },
    ],
    faqs: [
      {
        question: 'Do I need a meter to use this site?',
        answer:
          'No. Calculators and fasting tools work without a meter. The ratio is optional advanced tracking for people who already own a dual glucose/ketone meter.',
      },
      {
        question: 'What ratio should I target for weight loss?',
        answer:
          'There is no evidence-based target for weight loss. Do not change food, fasting, or medication to chase a ratio; discuss glucose or ketone monitoring with your clinician. If fat loss needs a calorie plan, use the [TDEE calorie calculator](/tdee-calorie-calculator) and rebuild macros in the [keto macro calculator](/keto-macro-calculator) instead of chasing a ratio.',
      },
      {
        question: 'Where is the Dr. Boz ratio calculator?',
        answer:
          'Use our free Dr. Boz ratio calculator to log glucose and ketones during fasts. It pairs with the fasting clock if you also track fast duration.',
      },
    ],
  },
  {
    slug: 'net-carbs-for-insulin-resistance',
    category: 'insulin-resistance',
    title: 'Net Carbs for Insulin Resistance — How Many Per Day?',
    description:
      'How to calculate net carbs from food labels and choose daily targets for blood-sugar-friendly eating and metabolic health.',
    readMinutes: 9,
    toolPath: '/net-carb-calculator',
    toolLabel: 'Net carb calculator',
    relatedRecipeSlugs: ['cauliflower-rice-stir-fry', 'baked-salmon-broccoli', 'taco-bowl-no-tortilla', 'lettuce-wrap-burger-bowl', 'salmon-avocado-poke-bowl'],
    relatedGuideSlugs: ['fasting-with-insulin-resistance', 'dr-boz-ratio-explained'],
    sections: [
      {
        heading: 'Net carbs vs total carbs',
        paragraphs: [
          '“Net carbs” is not an FDA-defined label value. Commercial formulas commonly subtract fiber and selected sugar alcohols from total carbohydrate, but methods vary.',
          'A net-carbohydrate estimate does not reliably predict an individual glucose response and is not the same as carbohydrate counting prescribed for diabetes care.',
        ],
      },
      {
        heading: 'Daily targets — three common tiers',
        bullets: [
          'Very-low-carbohydrate plans are often described as fewer than about 50g total carbohydrate per day, but definitions vary.',
          '“Low carbohydrate” has no single universal gram target.',
          'Individual needs depend on total diet, activity, health conditions, medicines, preferences, and access to food.',
        ],
        paragraphs: [
          'Your provider may recommend different numbers based on medications, kidney health, and lab results. These tiers are starting points, not prescriptions. Personalize protein and calories with the [keto macro calculator](/keto-macro-calculator) (strict) or [insulin resistance macro calculator](/insulin-resistance-macro-calculator) (~50g), and use the [TDEE calorie calculator](/tdee-calorie-calculator) when fat loss needs a calorie ceiling.',
        ],
      },
      {
        heading: 'Practical label reading',
        paragraphs: [
          'Use our [net carb calculator](/net-carb-calculator) at the grocery store: enter total carbs, fiber, and sugar alcohols from the label. Multiply by servings if you eat more than one.',
          'Watch hidden sugars in sauces, dressings, and "keto" packaged foods. When in doubt, choose whole foods: meat, fish, eggs, leafy greens, olive oil.',
        ],
      },
      {
        heading: 'Daily net carb targets for IR',
        bullets: [
          'Do not treat 20g, 50g, or 100g as universal treatment cutoffs',
          'Prioritize overall nutrient quality and a sustainable pattern',
          'Prediabetes risk can improve without claiming permanent “reversal”',
          'Use [net carb calculator](/net-carb-calculator) per meal',
          'Set daily macros — [keto](/keto-macro-calculator) or [IR macros](/insulin-resistance-macro-calculator)',
          'Optional calorie baseline — [TDEE calculator](/tdee-calorie-calculator)',
          'Read labels — [nutrition label guide](/guides/how-to-read-nutrition-labels-net-carbs)',
        ],
        paragraphs: [
          'Combine carb limits with [intermittent fasting](/guides/intermittent-fasting-16-8-vs-18-6) only after glucose is stable with diet changes alone.',
        ],
      },
    ],
    faqs: [
      {
        question: 'Should I subtract all sugar alcohols?',
        answer:
          'There is no FDA-standard subtraction rule for “net carbs.” Follow your clinician’s carbohydrate-counting method if you use insulin or other glucose-lowering medicine.',
      },
      {
        question: 'Is 50g net carbs low enough for insulin resistance?',
        answer:
          'There is no single effective number for everyone. A clinician or registered dietitian can help set a target that accounts for medicines, labs, nutrition, and preferences.',
      },
      {
        question: 'Should I set macros or just net carbs?',
        answer:
          'Net carbs are the first lever for insulin resistance. Add protein and calorie targets with the [keto macro calculator](/keto-macro-calculator) or [TDEE calorie calculator](/tdee-calorie-calculator) if hunger, muscle loss, or stalled weight becomes the next problem.',
      },
    ],
  },
  {
    slug: 'best-first-meal-after-fasting',
    category: 'fasting',
    title: 'Best First Meal After Fasting — Low-Carb Ideas',
    description:
      'Protein-forward break-fast meals for 16-hour IF and 24-hour fasts. Recipe ideas with net carb counts for keto and insulin resistance.',
    readMinutes: 8,
    toolPath: '/fasting-clock',
    toolLabel: 'Fasting clock',
    relatedRecipeSlugs: ['scrambled-eggs-spinach', 'egg-muffins', 'greek-yogurt-berries', 'taco-bowl-no-tortilla', 'chicken-salad-lettuce-cups', 'shakshuka-spinach-feta'],
    relatedGuideSlugs: ['how-to-break-a-24-hour-fast', 'intermittent-fasting-16-8-vs-18-6'],
    sections: [
      {
        heading: 'The break-fast formula',
        paragraphs: [
          'There is no medically established “best” first meal after a short fast. A balanced meal can include protein foods, vegetables or fruit, whole-food carbohydrates as appropriate, and unsaturated fats.',
          'After a short daily fasting window, most healthy adults can eat a usual meal. After 24 hours, a smaller portion may be more comfortable for some people.',
        ],
      },
      {
        heading: 'Top recipe picks from our kitchen',
        paragraphs: [
          'Each recipe below has an estimated net-carbohydrate value. Estimates do not determine whether a meal is appropriate for an individual medical condition.',
        ],
        bullets: [
          'Scrambled Eggs with Spinach (~2g net carbs) — classic, gentle, high protein.',
          'Egg Muffins (~2g) — prep ahead for busy break-fast mornings.',
          'Chicken Salad Lettuce Cups (~3g) — light after extended fasts.',
          'Taco Bowl No Tortilla (~8g) — satisfying after 16:8, skip if just finished 24h+.',
          'Greek Yogurt with Berries (~6g) — check the label for added sugars and serving size.',
        ],
      },
      {
        heading: 'Match the meal to the fast length',
        paragraphs: [
          'Tolerance and nutrition needs vary. Fasts longer than a day, repeated fasting, malnutrition risk, or concerning symptoms call for professional guidance rather than a website refeeding sequence.',
        ],
      },
      {
        heading: 'Recipe picks by fast length',
        paragraphs: [
          'After 16–18 hour IF: normal low-carb meal size is fine. After 24+ hours: half-portion protein meals — [scrambled eggs](/recipes/scrambled-eggs-spinach), [cottage cheese](/recipes/cottage-cheese-cucumber), or [bone broth eggs](/recipes/break-fast-bone-broth-eggs).',
          'Full protocol in [how to break a 24-hour fast](/guides/how-to-break-a-24-hour-fast). Match protein grams to your day with the [keto macro calculator](/keto-macro-calculator) so the first meal does not blow the carb ceiling.',
        ],
      },
    ],
    faqs: [
      {
        question: 'Can I break a fast with a protein shake?',
        answer:
          'A shake can provide nutrients, but ingredients and individual tolerance vary. There is no universal evidence that a shake or whole food is safer after a short fast.',
      },
      {
        question: 'How do I keep the first meal inside keto macros?',
        answer:
          'Prioritize protein and vegetables, then verify packaged items with the [net carb calculator](/net-carb-calculator). Set the day ceiling with the [keto macro calculator](/keto-macro-calculator) so the break-fast meal fits ~20g net carbs instead of guessing.',
      },
    ],
  },
  {
    slug: 'visceral-fat-metabolic-health',
    category: 'metabolic-health',
    title: 'Visceral Fat and Metabolic Health — What Matters',
    description:
      'Plain-language guide to belly fat, organ fat, and why low-carb eating and fasting target metabolic dysfunction — not just scale weight.',
    readMinutes: 9,
    toolPath: '/tdee-calorie-calculator',
    toolLabel: 'TDEE calorie calculator',
    relatedGuideSlugs: ['fatty-liver-low-carb', 'net-carbs-for-insulin-resistance', 'fasting-with-insulin-resistance'],
    sections: [
      {
        heading: 'Subcutaneous vs visceral fat',
        paragraphs: [
          'Subcutaneous fat sits under your skin — the fat you can pinch. Visceral fat wraps around organs in the abdomen (liver, pancreas, intestines). Visceral fat is more strongly linked to insulin resistance, elevated triglycerides, and metabolic syndrome.',
          'Waist circumference and BMI are screening measures with limitations. A clinician can interpret them alongside blood pressure, laboratory results, history, and other risk factors.',
        ],
      },
      {
        heading: 'Why the scale is not the whole story',
        paragraphs: [
          'Waist circumference provides information that BMI alone does not, but neither measurement directly quantifies visceral fat. Imaging is used in research and selected clinical settings.',
          'Dietary patterns and activity can change weight and cardiometabolic risk factors. No eating pattern can target fat loss from a specific body area.',
        ],
      },
      {
        heading: 'What you can do',
        bullets: [
          'If you track carbohydrates, choose a target with a clinician or registered dietitian.',
          'Prioritize protein at each meal to preserve muscle during fat loss.',
          'For educational calorie and macro planning, use the [TDEE calorie calculator](/tdee-calorie-calculator) and [keto macro calculator](/keto-macro-calculator).',
          'Add 16:8 IF once low-carb eating feels stable.',
          'Measure waist monthly, not just weight weekly.',
          'Discuss liver enzymes and A1c with your doctor annually.',
        ],
        paragraphs: [],
      },
      {
        heading: 'Measuring metabolic progress',
        paragraphs: [
          'Weight, waist circumference, blood pressure, glucose, lipids, and liver tests describe different aspects of health. Use our [metabolic health calculator](/metabolic-health-calculator) only for general context — and the [TDEE calorie calculator](/tdee-calorie-calculator) when waist and weight need a calorie baseline.',
          'Some interventions reduce waist circumference or measured visceral fat, but evidence does not show that low carb plus [time-restricted eating](/guides/intermittent-fasting-16-8-vs-18-6) reliably targets visceral fat for every person. If scale weight is also a goal, start with a modest [TDEE](/tdee-calorie-calculator) deficit rather than crash cuts.',
        ],
      },
    ],
    faqs: [
      {
        question: 'Can you lose visceral fat without losing weight?',
        answer:
          'Some studies show visceral fat reduction with low-carb diets even when total weight change is modest, especially when combined with resistance exercise. Individual results vary.',
      },
      {
        question: 'Does fasting burn belly fat specifically?',
        answer:
          'You cannot spot-reduce fat. Current evidence does not establish that fasting selectively burns belly or visceral fat.',
      },
      {
        question: 'Should I track calories or just carbs for belly fat?',
        answer:
          'Start with net carbs and protein under clinician guidance. If waist and weight stall for several weeks, add an educational calorie check with the [TDEE calorie calculator](/tdee-calorie-calculator) and rebuild macros in the [keto macro calculator](/keto-macro-calculator).',
      },
    ],
  },
  {
    slug: 'fatty-liver-low-carb',
    category: 'metabolic-health',
    title: 'Fatty Liver and Low-Carb Eating — Basics',
    description:
      'Non-alcoholic fatty liver disease (NAFLD) and why reducing refined carbs may help. Educational overview with links to macro tools — not medical treatment advice.',
    readMinutes: 9,
    toolPath: '/keto-macro-calculator',
    toolLabel: 'Keto macro calculator',
    relatedGuideSlugs: ['visceral-fat-metabolic-health', 'net-carbs-for-insulin-resistance'],
    relatedRecipeSlugs: ['salmon-avocado-poke-bowl', 'baked-salmon-broccoli', 'ginger-chicken-bone-broth-soup'],
    sections: [
      {
        heading: 'What is fatty liver (NAFLD)?',
        paragraphs: [
          'Nonalcoholic fatty liver disease (also called metabolic dysfunction-associated steatotic liver disease in newer terminology) involves excess fat in the liver. Obesity, metabolic syndrome, and type 2 diabetes are important risk factors.',
          'Many people have no symptoms early on. Blood tests (ALT, AST, GGT) and imaging can detect it. This guide is educational only — diagnosis and treatment require a healthcare provider.',
        ],
      },
      {
        heading: 'Why low carb comes up in conversation',
        paragraphs: [
          'The liver plays a central role in glucose and fat metabolism. Diet quality, energy intake, body weight, activity, medicines, and other conditions can all affect liver health.',
          'Some dietary interventions improve liver-fat measures, but this does not make a ketogenic diet the standard treatment for every patient. NIDDK emphasizes clinician-guided weight management and diet changes.',
        ],
      },
      {
        heading: 'Practical steps (with your doctor)',
        bullets: [
          'Reduce sugar, soda, juice, and refined grains first.',
          'Choose an eating pattern and any carbohydrate target with your care team.',
          'Avoid aggressive extended fasting until liver and kidney function are evaluated.',
          'Follow the testing schedule recommended by your clinician.',
        ],
        paragraphs: [
          'Never stop medications or ignore elevated liver enzymes without medical guidance. For educational macro starting points, use the [keto macro calculator](/keto-macro-calculator) (~20g net carbs) or [low carb macro calculator](/low-carb-macro-calculator), and the [TDEE calorie calculator](/tdee-calorie-calculator) if calorie planning is part of the conversation.',
        ],
      },
      {
        heading: 'Lifestyle stack for NAFLD',
        bullets: [
          'Cut refined carbs and fructose-heavy drinks first',
          'Do not assume a fixed net-carb target treats fatty liver',
          'Educational day-one macros — [keto macro calculator](/keto-macro-calculator)',
          'Optional educational calorie check — [TDEE calculator](/tdee-calorie-calculator)',
          'Add walking after meals — independent of weight loss',
          'Review liver tests and imaging on the schedule your doctor recommends',
          'See [getting started keto](/guides/getting-started-keto-low-carb) for food lists',
        ],
        paragraphs: [],
      },
    ],
    faqs: [
      {
        question: 'Is keto safe with fatty liver?',
        answer:
          'A lower-carbohydrate pattern may be one option, but safety and suitability depend on the full diet and medical context. Liver disease requires personalized care.',
      },
      {
        question: 'Does fasting help fatty liver?',
        answer:
          'Evidence is not sufficient to prescribe fasting as fatty-liver treatment. Discuss meal timing with the clinician managing your liver health.',
      },
      {
        question: 'Where do calories fit if weight is also a goal?',
        answer:
          'Carb quality and quantity matter first for many NAFLD discussions. If weight and waist stall, add a maintenance check with the [TDEE calorie calculator](/tdee-calorie-calculator) and rebuild macros in the [keto macro calculator](/keto-macro-calculator) with your clinician’s guidance.',
      },
    ],
  },
  {
    slug: 'getting-started-keto-low-carb',
    category: 'insulin-resistance',
    title: 'Getting Started with Keto and Low Carb — First 2 Weeks',
    description:
      'A practical starter plan: cut sugar first, target net carbs, prioritize protein, and when to add fasting.',
    readMinutes: 12,
    toolPath: '/keto-macro-calculator',
    toolLabel: 'Keto macro calculator',
    relatedGuideSlugs: ['net-carbs-for-insulin-resistance', 'atkins-phases-explained', 'how-to-read-nutrition-labels-net-carbs'],
    relatedRecipeSlugs: ['scrambled-eggs-spinach', 'lettuce-wrap-burger-bowl', 'sheet-pan-chicken-thighs-cabbage', 'egg-muffins'],
    sections: [
      {
        heading: 'Before you change anything',
        paragraphs: [
          'If you take diabetes, blood-pressure, or diuretic medication, talk with your clinician before starting a low-carb diet or fasting. Carbohydrate reduction can change glucose and blood pressure quickly. This guide is educational — not a prescription.',
          'Decide what change is realistic before day one. “Keto” and “low carb” are defined differently across studies and programs; no fixed gram target is appropriate for everyone.',
        ],
      },
      {
        heading: 'Week 1: remove the obvious carbs',
        bullets: [
          'Stop soda, juice, candy, and white bread',
          'Read labels — use our net carb calculator on packaged foods',
          'Eat protein + non-starchy vegetables at each meal',
          'Drink normally; do not assume lightheadedness is caused by salt loss',
          'Cook from the [breakfast](/recipes/breakfast) and [dinner](/recipes/dinner) hubs so you are not improvising hungry',
        ],
        paragraphs: [
          'Week one is subtraction, not perfection. Clear the pantry of the foods that trigger automatic eating. Replace them with eggs, meat, leafy greens, olive oil, butter, cheese (if tolerated), and plain yogurt you have label-checked.',
        ],
      },
      {
        heading: 'Week 2: set a daily net carb target',
        paragraphs: [
          'Calculators provide estimates, not personalized prescriptions. Use our [keto macro calculator](/keto-macro-calculator) only as an educational planning aid — and the [TDEE calorie calculator](/tdee-calorie-calculator) if you want a maintenance or deficit calorie baseline first.',
          'Appetite may increase or decrease after a diet change. Skipping breakfast is optional and should not be treated as proof of metabolic improvement.',
          'Headache, fatigue, and cramps are nonspecific. Read [keto flu and electrolytes](/guides/keto-flu-and-electrolytes) for safety limits and seek care for severe or persistent symptoms.',
        ],
      },
      {
        heading: 'Week-one starter plan',
        bullets: [
          'Day 1–3: remove sugar, bread, rice, pasta, soda',
          'Stock proteins, leafy greens, eggs, avocados, olive oil',
          'Calculate macros — [keto macro calculator](/keto-macro-calculator)',
          'Optional calorie baseline — [TDEE calculator](/tdee-calorie-calculator)',
          'Track net carbs — [net carb calculator](/net-carb-calculator)',
          'Cook from [strict keto recipes](/recipes/keto) so dinner is decided',
          'Read [Atkins phases](/guides/atkins-phases-explained) if using a phased approach',
        ],
        paragraphs: [
          'If you have insulin resistance or PCOS, also read [net carbs for IR](/guides/net-carbs-for-insulin-resistance) and [PCOS and low carb](/guides/pcos-and-low-carb). Avoid copying prolonged fasting plans from social media.',
        ],
      },
    ],
    faqs: [
      {
        question: 'Do I need to count calories?',
        answer:
          'Many people start with net carbs and protein only. If weight loss stalls, estimate maintenance with the [TDEE calorie calculator](/tdee-calorie-calculator), then re-check protein and carbs in the [keto macro calculator](/keto-macro-calculator).',
      },
    ],
  },
  {
    slug: 'atkins-phases-explained',
    category: 'insulin-resistance',
    title: 'Atkins Phases Explained — Induction Through Maintenance',
    description:
      'Phase 1 through 4 net carb limits, when to advance, how Atkins compares to strict keto, and a practical food ladder for each stage.',
    readMinutes: 11,
    toolPath: '/keto-macro-calculator',
    toolLabel: 'Keto macro calculator',
    relatedGuideSlugs: ['getting-started-keto-low-carb', 'net-carbs-for-insulin-resistance', 'mindful-macro-tracking-low-carb'],
    relatedRecipeSlugs: ['scrambled-eggs-spinach', 'greek-yogurt-berries', 'sheet-pan-chicken-thighs-cabbage'],
    sections: [
      {
        heading: 'Why Atkins still uses phases',
        paragraphs: [
          'Atkins is a branded commercial diet that uses staged carbohydrate restriction and reintroduction. Its phase rules describe that program; they are not medical-consensus targets and do not prove “fat adaptation.”',
          'Phase 1 looks a lot like modern strict keto. The difference is intentional progression: you are expected to test higher carb levels once cravings and weight loss stabilize. Use the [keto macro calculator](/keto-macro-calculator) or [Atkins macro calculator](/atkins-macro-calculator) for induction (~20g net carbs), then switch to the [low carb macro calculator](/low-carb-macro-calculator) as you leave Phase 1.',
        ],
      },
      {
        heading: 'The four phases at a glance',
        bullets: [
          'Phase 1 (“Induction”): the commercial program uses its most restrictive carbohydrate rules',
          'Phase 2: the program gradually adds selected carbohydrate-containing foods',
          'Phase 3: the program broadens food choices near a weight goal',
          'Phase 4: the program describes an individualized maintenance pattern',
        ],
        paragraphs: [
          'Write down the phase and the current carb budget. Vague “I’m doing Atkins” without a number is how people stall or overshoot.',
        ],
      },
      {
        heading: 'When to advance (and when to stay)',
        paragraphs: [
          'Program materials define phase transitions, but there is no clinical rule that a short-term weight change or craving level proves a specific carbohydrate threshold.',
          'Medical context matters. If you take diabetes medication, any carb reintroduction can change glucose — coordinate with your clinician. For IR-focused carb ceilings, also read [net carbs for insulin resistance](/guides/net-carbs-for-insulin-resistance).',
        ],
      },
      {
        heading: 'Food ladder examples',
        bullets: [
          'Phase 1: eggs, fish, poultry, beef, olive oil, spinach, broccoli, avocado',
          'Early Phase 2: almonds, pecans, raspberries, blackberries, Greek yogurt (check labels)',
          'Later phases: more fruit, legumes, or starchy vegetables only if your numbers still work',
          'Always verify packaged foods with the [net carb calculator](/net-carb-calculator)',
        ],
        paragraphs: [
          'Compare induction habits with our [getting started keto guide](/guides/getting-started-keto-low-carb) if you prefer keto language over Atkins phase names — the first two weeks look similar. For induction numbers, the [keto macro calculator](/keto-macro-calculator) and [Atkins macro calculator](/atkins-macro-calculator) both target ~20g net carbs; add [TDEE](/tdee-calorie-calculator) when weight loss needs a calorie baseline.',
        ],
      },
    ],
    faqs: [
      {
        question: 'Can I stay on Phase 1 forever?',
        answer:
          'Long-term severe restriction can make nutrient adequacy and adherence harder. Discuss the full dietary pattern with a registered dietitian or clinician.',
      },
      {
        question: 'Is Atkins the same as keto?',
        answer:
          'Both labels commonly describe carbohydrate restriction, but definitions vary. Atkins is a proprietary phased program; “keto” is a broader term. Day-one numbers: [keto macro calculator](/keto-macro-calculator).',
      },
      {
        question: 'What if I stall in Phase 2?',
        answer:
          'Weight changes can reflect many factors. Review intake, activity, sleep, medicines, and expectations with a qualified professional instead of automatically intensifying restriction. If the scale is the issue, refresh calories with the [TDEE calorie calculator](/tdee-calorie-calculator) before blaming carbs alone.',
      },
    ],
  },
  {
    slug: 'pcos-and-low-carb',
    category: 'insulin-resistance',
    title: 'PCOS and Low Carb — What the Research Suggests',
    description:
      'How insulin resistance can relate to PCOS, what nutrition research can and cannot establish, and why care is individualized.',
    readMinutes: 12,
    toolPath: '/pcos-low-carb-calculator',
    toolLabel: 'PCOS calculator',
    relatedGuideSlugs: ['net-carbs-for-insulin-resistance', 'intermittent-fasting-16-8-vs-18-6', 'protein-on-keto-and-low-carb'],
    relatedRecipeSlugs: ['salmon-avocado-poke-bowl', 'sheet-pan-chicken-thighs-cabbage', 'scrambled-eggs-spinach'],
    sections: [
      {
        heading: 'Insulin and PCOS — the connection people discuss',
        paragraphs: [
          'Many people with PCOS also have insulin resistance, but PCOS has varied features and causes. Diet is one part of care and does not replace evaluation of irregular cycles, androgen-related symptoms, fertility goals, or metabolic risk.',
          'This guide is educational, not a treatment plan. PCOS phenotypes differ. What helps one person may be too aggressive for another, especially around fertility goals or disordered-eating history.',
        ],
      },
      {
        heading: 'Practical nutrition starting points',
        bullets: [
          'Discuss targets with your OB/GYN or endocrinologist before large diet shifts',
          'No universal net-carbohydrate target treats PCOS; treat the [PCOS calculator](/pcos-low-carb-calculator) as an educational estimate',
          'Prefer stricter induction? Start with the [keto macro calculator](/keto-macro-calculator) (~20g), then loosen',
          'Optional calorie baseline — [TDEE calorie calculator](/tdee-calorie-calculator)',
          'Include varied protein foods as part of a nutritionally adequate pattern',
          'Build plates around eggs, fish, poultry, leafy greens, olive oil, and berries in moderation',
          'Track cycles, energy, waist, and labs — not scale weight alone',
        ],
        paragraphs: [
          'Label literacy can help compare added sugars, fiber, sodium, and serving sizes. Practice with [how to read nutrition labels](/guides/how-to-read-nutrition-labels-net-carbs).',
        ],
      },
      {
        heading: 'Fasting and the menstrual cycle',
        paragraphs: [
          'Longer fasts are not required for PCOS. Evidence does not establish special fasting windows for menstrual-cycle phases.',
          'If meal timing worsens menstrual symptoms, fertility treatment, medication tolerance, or restrictive eating, stop and contact your care team.',
        ],
      },
      {
        heading: 'What to cook this week',
        paragraphs: [
          'Balanced meals can include protein foods, vegetables, whole-food carbohydrate sources, and unsaturated fats. Recipes are examples, not treatments.',
        ],
      },
      {
        heading: 'When diet is not enough',
        paragraphs: [
          'Low carb does not replace medication, fertility workups, or mental-health care. If cycles remain absent, symptoms worsen, or you feel obsessive about food rules, pause aggressive restriction and talk to your care team. Sustainable metabolic health beats a perfect carb count.',
        ],
      },
    ],
    faqs: [
      {
        question: 'Will low carb regulate my period?',
        answer:
          'Cycle regularity can change for many reasons. Diet alone is not a reliable treatment or diagnostic test; discuss irregular or absent periods with a clinician.',
      },
      {
        question: 'Is keto better than moderate low carb for PCOS?',
        answer:
          'Research does not establish keto as universally superior to other sustainable eating patterns for PCOS. Choose a nutritionally adequate approach with your care team. Compare the [keto macro calculator](/keto-macro-calculator) and [PCOS low carb calculator](/pcos-low-carb-calculator) as educational estimates only.',
      },
      {
        question: 'Should I do long fasts for PCOS?',
        answer:
          'Long fasts are not a standard PCOS treatment. Ask your care team before fasting, especially during fertility treatment, pregnancy, or use of glucose-lowering medicine.',
      },
      {
        question: 'Do I need a calorie deficit for PCOS weight loss?',
        answer:
          'Often yes over time, but start with carb quality and protein. If waist and weight stall for several weeks, estimate maintenance with the [TDEE calorie calculator](/tdee-calorie-calculator) and rebuild macros — still under clinician guidance.',
      },
    ],
  },
  {
    slug: 'fasting-on-diabetes-medications',
    category: 'fasting',
    title: 'Fasting on Diabetes and Blood Pressure Medications — Safety Basics',
    description:
      'Why insulin, sulfonylureas, SGLT2 inhibitors, and BP meds require doctor supervision before extended fasts — plus a safer progression ladder.',
    readMinutes: 12,
    toolPath: '/fasting-clock',
    toolLabel: 'Fasting clock',
    relatedGuideSlugs: ['fasting-with-insulin-resistance', 'water-fast-vs-assisted-fast', 'electrolytes-during-fasting'],
    sections: [
      {
        heading: 'Why medications change fasting risk',
        paragraphs: [
          'Skipping or delaying meals while continuing insulin or medicines that increase insulin release can raise hypoglycemia risk. Fluid intake and blood-pressure effects also vary by medicine and health condition.',
          'Never stop, reduce, or reschedule a prescription on your own. This page helps identify questions for a prescriber; it is not a medication-adjustment protocol.',
        ],
      },
      {
        heading: 'Medication categories and relative risk',
        bullets: [
          'Insulin and sulfonylureas can cause hypoglycemia when meals are skipped',
          'Other diabetes medicines have different risks and combinations change the picture',
          'SGLT2 inhibitors carry a ketoacidosis warning that can occur even without very high glucose',
          'Blood-pressure medicines and diuretics can affect fluid balance and dizziness',
          'A pharmacist or prescriber should review the exact medicine list before fasting',
        ],
        paragraphs: [
          'If you cannot name your medications and how they work, pause fasting plans until a pharmacist or clinician walks through them with you.',
        ],
      },
      {
        heading: 'Safer progression before long fasts',
        bullets: [
          'Ask whether fasting is appropriate before changing meal timing',
          'Agree on glucose checks and action thresholds when monitoring is prescribed',
          'Know how to treat hypoglycemia using the plan from your care team',
          'Do not add sodium or electrolyte supplements as a substitute for medication review',
          'Stop fasting for shakiness, confusion, heavy sweating, fainting, or an out-of-range reading',
        ],
        paragraphs: [
          'Pair this with [fasting with insulin resistance](/guides/fasting-with-insulin-resistance) and [electrolytes during fasting](/guides/electrolytes-during-fasting). Track windows on the [fasting clock](/fasting-clock) only after your care team agrees on the plan. Educational meal targets (not medication advice) live in the [keto macro calculator](/keto-macro-calculator) and [TDEE calorie calculator](/tdee-calorie-calculator).',
        ],
      },
      {
        heading: 'Questions to ask your clinician',
        bullets: [
          'Which of my meds raise hypoglycemia risk during a fast?',
          'What glucose reading means I should eat immediately?',
          'Should I check ketones if I take an SGLT2 inhibitor?',
          'Could diet, fluid, or weight changes affect my blood-pressure treatment?',
        ],
        paragraphs: [
          'Bring a written plan: intended fast length, water-only vs assisted, and when you will stop. Vague “I might try fasting” is harder to supervise safely.',
        ],
      },
    ],
    faqs: [
      {
        question: 'Can I fast on metformin?',
        answer:
          'Metformin is lower hypoglycemia risk than insulin secretagogues, but still discuss fasting plans with your prescriber — especially beyond 24 hours or if combined with other drugs.',
      },
      {
        question: 'Is 16:8 safe on diabetes medication?',
        answer:
          'Only your prescriber can assess this for your medicine list and health history. Ask for a monitoring and hypoglycemia plan before changing meal timing.',
      },
      {
        question: 'What if I feel hypoglycemic during a fast?',
        answer:
          'Treat low blood sugar per your clinician’s instructions (often fast-acting glucose), stop the fast, and seek urgent care for severe symptoms. Do not push through confusion or fainting.',
      },
    ],
  },
  {
    slug: 'electrolytes-during-fasting',
    category: 'fasting',
    title: 'Electrolytes During Fasting — Sodium, Potassium & Magnesium',
    description:
      'What sodium, potassium, and magnesium do, why symptoms are nonspecific, and when supplements can be unsafe.',
    readMinutes: 11,
    toolPath: '/extended-fasting-clock',
    toolLabel: 'Extended fasting clock',
    relatedGuideSlugs: ['water-fast-vs-assisted-fast', 'how-to-break-a-24-hour-fast', 'keto-flu-and-electrolytes'],
    relatedRecipeSlugs: ['break-fast-bone-broth-eggs', 'ginger-chicken-bone-broth-soup'],
    sections: [
      {
        heading: 'Why electrolytes drop when you fast',
        paragraphs: [
          'Fluid and electrolyte balance can change with food intake, sweating, vomiting, diarrhea, kidney function, medicines, and some eating patterns.',
          'Headache, lightheadedness, palpitations, weakness, and cramps are nonspecific. They cannot be safely diagnosed as sodium, potassium, or magnesium deficiency from symptoms alone.',
        ],
      },
      {
        heading: 'What general guidance can safely say',
        bullets: [
          'There is no standard “assisted fasting” electrolyte formula',
          'Food-first nutrient intake is generally preferable when eating',
          'Potassium supplements and salt substitutes can be dangerous with kidney disease or certain medicines',
          'Magnesium supplements can cause adverse effects and interact with medicines',
        ],
        paragraphs: [
          'Choose a mode deliberately. Compare [water fast vs assisted fast](/guides/water-fast-vs-assisted-fast) before you start the [extended fasting clock](/extended-fasting-clock).',
        ],
      },
      {
        heading: 'Avoid one-size-fits-all supplement doses',
        bullets: [
          'Do not use a generic sodium target to self-treat dizziness or extend a fast',
          'Get potassium from food when appropriate; ask before using supplements or potassium salt substitutes',
          'Do not use a generic magnesium dose for cramps or sleep; supplement limits and interactions matter',
          'Follow clinician-set fluid limits if you have kidney, heart, or endocrine conditions',
        ],
        paragraphs: [
          'If you take blood pressure medication, extra sodium and volume shifts are not DIY experiments. Ask before you double bouillon “because the internet said so.”',
        ],
      },
      {
        heading: 'How to respond to symptoms',
        bullets: [
          'Headache or brain fog: stop the fast if symptoms persist and consider medical advice',
          'Persistent cramps: review possible causes with a clinician rather than guessing an electrolyte',
          'Dizziness standing up: sit or lie down, avoid driving, and seek advice if it continues',
          'Severe chest pain, confusion, or fainting: stop fasting and seek urgent care',
        ],
        paragraphs: [
          'When the fast ends, refeed gently — [how to break a 24-hour fast](/guides/how-to-break-a-24-hour-fast) and [bone broth + eggs](/recipes/break-fast-bone-broth-eggs) are designed for that transition. Once eating resumes, lock protein and net carbs with the [keto macro calculator](/keto-macro-calculator) so the first meals fit the day ceiling.',
        ],
      },
    ],
    faqs: [
      {
        question: 'Can I use zero-calorie electrolyte powders?',
        answer:
          'Many assisted fasters use sugar-free electrolyte mixes. Check labels for carbs and sweeteners if you are strict keto, and confirm the product fits your clinician’s advice.',
      },
      {
        question: 'Does bone broth break a fast?',
        answer:
          'Broth has calories and protein, so it is not water-only. Adding it does not make prolonged fasting medically safe.',
      },
      {
        question: 'How much salt is too much?',
        answer:
          'People with kidney disease, heart failure, or certain BP regimens need individualized limits. Do not chase high sodium targets without medical context.',
      },
    ],
  },
  {
    slug: 'how-to-read-nutrition-labels-net-carbs',
    category: 'insulin-resistance',
    title: 'How to Read Nutrition Labels for Net Carbs',
    description:
      'Find total carbs, fiber, and sugar alcohols on US labels — step-by-step for keto and low-carb shopping.',
    readMinutes: 11,
    toolPath: '/net-carb-calculator',
    toolLabel: 'Net carb calculator',
    relatedGuideSlugs: ['net-carbs-for-insulin-resistance', 'getting-started-keto-low-carb'],
    relatedRecipeSlugs: ['greek-yogurt-berries', 'sheet-pan-sausage-peppers', 'chia-pudding-coconut'],
    sections: [
      {
        heading: 'Why label literacy matters on low carb',
        paragraphs: [
          'Nutrition Facts labels help compare serving size, total carbohydrate, fiber, added sugars, sodium, and other nutrients. “Net carbs” is not an FDA-defined or required label value.',
          'Net carbs are not a FDA-required line. They are a shopper convention used on keto and low-carb plans. Different people treat maltitol, allulose, and soluble corn fiber differently. When a product is unclear, be conservative: count more carbs rather than fewer, especially if you have diabetes or take glucose-lowering medication.',
        ],
      },
      {
        heading: 'Label lines to find',
        bullets: [
          'Serving size — the math only works if you eat that amount',
          'Total Carbohydrate (top carbohydrate line)',
          'Dietary Fiber (indented below and included within Total Carbohydrate)',
          'Sugar Alcohols (if listed; the FDA does not define a standard “net carb” subtraction)',
          'Total Sugars / Added Sugars — context for how “sweet” the product is',
        ],
        paragraphs: [
          'A common commercial estimate is total carbohydrate minus fiber and some sugar alcohols, but methods differ and the FDA does not define a standard “net carb” formula.',
        ],
      },
      {
        heading: 'Label math worked example',
        paragraphs: [
          'Example: Total carbs 15g, fiber 8g, erythritol 4g → net carbs ≈ 3g on most keto plans. If you eat two servings, double everything before you celebrate.',
          'Example: if a product lists 20g total carbohydrate, 10g fiber, and 8g maltitol, different commercial formulas will produce different “net” values. Use total carbohydrate if your care plan requires it.',
          'For daily budgets with insulin resistance, see [net carbs for IR](/guides/net-carbs-for-insulin-resistance). Then pick a meal from our [under 10g recipes](/recipes/under-10g-net-carbs) so the label math turns into dinner.',
        ],
      },
      {
        heading: 'Shopping checklist',
        bullets: [
          'Ignore front-of-pack “keto” badges until you check the panel',
          'Compare brands of the same food — mayonnaise, salsa, and sausage vary widely',
          'Watch “sugar-free” candies that use maltitol or sorbitol',
          'Weigh nuts and cheese once at home so portions stay honest',
        ],
        paragraphs: [
          'For label practice, compare a few packaged foods you already buy. Use the [net carb calculator](/net-carb-calculator) as an estimate and consider the full Nutrition Facts panel. Once servings fit your day, lock daily protein and carbs with the [keto macro calculator](/keto-macro-calculator) — and the [TDEE calorie calculator](/tdee-calorie-calculator) if fat loss needs a calorie ceiling.',
        ],
      },
    ],
    faqs: [
      {
        question: 'Do I subtract all fiber?',
        answer:
          'FDA total carbohydrate already includes dietary fiber. Some low-carb programs subtract fiber to create a nonstandard “net” estimate; follow your clinician’s method if carbohydrate counting is part of diabetes care.',
      },
      {
        question: 'What about allulose?',
        answer:
          'Check how allulose appears on the specific label. If carbohydrate counting affects medication dosing, use the method provided by your care team.',
      },
      {
        question: 'How do label net carbs fit a daily keto budget?',
        answer:
          'Add servings with the [net carb calculator](/net-carb-calculator), then keep the day under your carb ceiling from the [keto macro calculator](/keto-macro-calculator). If weight loss stalls, refresh calories with the [TDEE calorie calculator](/tdee-calorie-calculator) before blaming one snack.',
      },
      {
        question: 'Are Canadian or EU labels the same?',
        answer:
          'No. Fiber and sugar alcohol placement can differ. This guide focuses on typical US Nutrition Facts panels. When traveling, read the local panel carefully or stick to whole foods.',
      },
    ],
  },
  {
    slug: 'protein-on-keto-and-low-carb',
    category: 'metabolic-health',
    title: 'How Much Protein on Keto and Low Carb?',
    description:
      'Protein targets for strict keto, moderate low carb, and fasting — grams per pound, food examples, kidney considerations, and how to set macros without overthinking.',
    readMinutes: 11,
    toolPath: '/keto-macro-calculator',
    toolLabel: 'Keto macro calculator',
    relatedGuideSlugs: ['getting-started-keto-low-carb', 'net-carbs-for-insulin-resistance', 'mindful-macro-tracking-low-carb'],
    relatedRecipeSlugs: ['sheet-pan-chicken-thighs-cabbage', 'salmon-avocado-poke-bowl', 'cottage-cheese-cucumber'],
    sections: [
      {
        heading: 'Why protein matters when carbs drop',
        paragraphs: [
          'Protein supplies amino acids and supports muscle and other tissues. Needs vary with age, body size, activity, pregnancy, illness, kidney function, and overall energy intake.',
          'Calculator output is an estimate, not a dietary reference intake or clinical prescription. A registered dietitian can assess individual needs.',
        ],
      },
      {
        heading: 'Starting targets by situation',
        bullets: [
          'Use established dietary reference guidance as a baseline, then individualize when appropriate',
          'Training, recovery, age, and energy intake can change needs',
          'Pregnancy, illness, and recovery may require professional assessment',
          'Kidney or liver disease requires individualized advice',
        ],
        paragraphs: [
          'Re-run macros when weight drops 10–15 lbs. Absolute protein grams can scale with current (or target) body weight so you are not stuck on day-one numbers forever. Refresh [TDEE](/tdee-calorie-calculator) at the same time so deficit targets stay realistic.',
        ],
      },
      {
        heading: 'What a protein-forward day looks like',
        paragraphs: [
          'Protein can come from eggs, fish, poultry, dairy, legumes, tofu, nuts, seeds, and other foods. Browse [breakfast recipes](/recipes/breakfast) and [dinner recipes](/recipes/dinner) for examples.',
          'Packaged “protein bars” can hide maltitol and fiber tricks. Verify with the [net carb calculator](/net-carb-calculator) before they become a daily habit. Pair protein grams with a calorie ceiling from the [TDEE calorie calculator](/tdee-calorie-calculator) when fat loss needs both.',
        ],
      },
      {
        heading: 'Protein, ketosis, and fasting',
        paragraphs: [
          'Protein intake can influence metabolism, but there is no universal gram amount that guarantees or prevents ketosis.',
          'Protein breaks a true fast. During the eating window, prioritize it; during the fast, stick to your water or assisted rules. See [best first meal after fasting](/guides/best-first-meal-after-fasting) for refeed composition.',
        ],
      },
    ],
    faqs: [
      {
        question: 'Can too much protein kick me out of ketosis?',
        answer:
          'There is no universal protein cutoff that determines ketosis. Medical ketogenic diets require specialist supervision.',
      },
      {
        question: 'Should I eat protein during a fast?',
        answer:
          'A true fast means no calories — protein breaks the fast. Break fasts with protein-forward meals; see [best first meal after fasting](/guides/best-first-meal-after-fasting).',
      },
      {
        question: 'How do protein grams fit with TDEE calories?',
        answer:
          'Set total calories with the [TDEE calorie calculator](/tdee-calorie-calculator), lock protein in the [keto macro calculator](/keto-macro-calculator), then fill remaining calories with fat while holding net carbs at your plan’s limit.',
      },
      {
        question: 'Do I need less protein on desk days?',
        answer:
          'Usually keep protein steady and lower fat when activity drops. Update the activity multiplier in the [TDEE calorie calculator](/tdee-calorie-calculator), then re-run the [keto macro calculator](/keto-macro-calculator) so protein grams stay near ~0.8g per pound while total calories fall.',
      },
      {
        question: 'Is plant protein okay on low carb?',
        answer:
          'Yes if net carbs fit your budget — tofu, tempeh, and some seitan products vary widely. Read labels carefully; beans and lentils raise carbs faster than animal proteins.',
      },
    ],
  },
  {
    slug: 'keto-flu-and-electrolytes',
    category: 'metabolic-health',
    title: 'Keto Flu — Symptoms, Electrolytes & Fixes',
    description:
      'Why “keto flu” is not a diagnosis, why symptoms should not be assumed to be electrolyte loss, and when to seek care.',
    readMinutes: 10,
    toolPath: '/keto-macro-calculator',
    toolLabel: 'Keto macro calculator',
    relatedGuideSlugs: ['electrolytes-during-fasting', 'getting-started-keto-low-carb', 'protein-on-keto-and-low-carb'],
    sections: [
      {
        heading: 'What “keto flu” usually is',
        paragraphs: [
          '“Keto flu” is an informal label, not a diagnosis. Headache, fatigue, nausea, dizziness, irritability, and cramps after a diet change have many possible causes.',
          'Do not assume symptoms prove an electrolyte deficit or that they must be endured. Severe, persistent, or worsening symptoms need medical assessment.',
        ],
      },
      {
        heading: 'Safer responses to symptoms',
        bullets: [
          'Pause the dietary change if you feel unwell',
          'Eat regular, nutritionally adequate meals and drink normally',
          'Do not self-treat dizziness with salt or potassium',
          'Ask a clinician or pharmacist before using electrolyte supplements',
          'Seek urgent care for chest pain, fainting, severe confusion, or breathing difficulty',
        ],
        paragraphs: [
          'Fasters use the same toolkit — [electrolytes during fasting](/guides/electrolytes-during-fasting) covers assisted vs water-only details.',
        ],
      },
      {
        heading: 'Day-by-day expectations',
        bullets: [
          'There is no reliable day-by-day symptom schedule',
          'Symptoms that persist should not be normalized as adaptation',
          'A [macro calculator](/keto-macro-calculator) cannot identify the cause of symptoms',
          'If fat loss is a goal after symptoms ease, set calories with the [TDEE calorie calculator](/tdee-calorie-calculator)',
        ],
        paragraphs: [
          'If you take blood-pressure medication, tell your prescriber before making a major diet or sodium change. Do not alter the medicine yourself.',
        ],
      },
    ],
    faqs: [
      {
        question: 'How long does keto flu last?',
        answer:
          'There is no guaranteed duration. Seek medical advice for persistent or severe symptoms, especially with diabetes, kidney disease, pregnancy, or blood-pressure treatment.',
      },
      {
        question: 'Should I quit keto if I feel awful day two?',
        answer:
          'Do not guess at an electrolyte treatment. Stop the diet change and seek prompt care for severe symptoms, chest pain, fainting, or confusion.',
      },
      {
        question: 'Does “dirty keto” prevent keto flu?',
        answer:
          'No dietary marketing label prevents nonspecific symptoms. Food quality matters, but salt or magnesium should not be presented as a universal fix.',
      },
      {
        question: 'When should I set macros during keto flu?',
        answer:
          'Focus on electrolytes and simple meals first. Once symptoms ease (often days 4–7), lock protein and ~20g net carbs in the [keto macro calculator](/keto-macro-calculator). Add the [TDEE calorie calculator](/tdee-calorie-calculator) if fat loss needs a calorie ceiling.',
      },
    ],
  },
  {
    slug: 'mindful-macro-tracking-low-carb',
    category: 'metabolic-health',
    title: 'Macro Tracking Without Obsession — Low Carb Habits',
    description:
      'When to count macros, when to use plate method, how to exit logging without rebound, and how to transition from calculator numbers to sustainable eating.',
    readMinutes: 10,
    toolPath: '/keto-macro-calculator',
    toolLabel: 'Keto macro calculator',
    relatedGuideSlugs: ['getting-started-keto-low-carb', 'protein-on-keto-and-low-carb', 'how-to-read-nutrition-labels-net-carbs'],
    sections: [
      {
        heading: 'Track long enough to learn, not forever',
        paragraphs: [
          'Short-term logging can help some people learn portions and label information, but there is no required duration and tracking can be harmful for people prone to disordered eating.',
          'Set initial targets with a calculator — [TDEE](/tdee-calorie-calculator) for calories, then [keto](/keto-macro-calculator), [low carb](/low-carb-macro-calculator), or [insulin resistance macros](/insulin-resistance-macro-calculator) — then adjust from energy, hunger, waist, and labs with your provider.',
        ],
      },
      {
        heading: 'A simple tracking protocol',
        bullets: [
          'Week 1: log everything, including oils and bites — honesty beats perfection',
          'Week 2: fix the biggest leaks (nuts, cheese, dressings) using [label skills](/guides/how-to-read-nutrition-labels-net-carbs)',
          'Week 3–4: keep protein steady; loosen fat if hunger is low and weight is trending',
          'Exit plan: move to plate method below once portions feel obvious',
        ],
        paragraphs: [
          'If logging raises anxiety or you skip social meals to protect a streak, the tool is costing more than it gives. Stop counting and change approach.',
        ],
      },
      {
        heading: 'Plate method when counting stops',
        bullets: [
          'Half plate non-starchy vegetables',
          'Palm-sized protein',
          'Thumb of added fat (oil, nuts, cheese)',
          'Carbs from berries, legumes, or starchy veg only if your plan allows',
        ],
        paragraphs: [
          'Revisit numbers if weight stalls for 6+ weeks, you add serious training, or medications change. Use [TDEE](/tdee-calorie-calculator) plus macros when you need a fresh baseline — then return to habits, not permanent spreadsheet living.',
        ],
      },
      {
        heading: 'Cook from recipes instead of guessing',
        paragraphs: [
          'Repeating a few known meals beats improvising every night. Start with [under 10g net carb recipes](/recipes/under-10g-net-carbs) or the [keto hub](/recipes/keto), then rotate. Consistency is a feature, not a failure of creativity.',
        ],
      },
    ],
    faqs: [
      {
        question: 'Do I need a food scale forever?',
        answer:
          'No. Scales help early accuracy. Most maintainers estimate portions after learning what 30g nuts or 4 oz chicken looks like on their plate.',
      },
      {
        question: 'What if tracking increases anxiety?',
        answer:
          'Stop counting if it raises anxiety or compulsive behavior, and consider support from a registered dietitian or mental-health professional experienced in eating concerns.',
      },
      {
        question: 'Should I track on maintenance forever?',
        answer:
          'There is no requirement to track indefinitely. Use the least intensive method that supports health without anxiety or compulsive behavior.',
      },
      {
        question: 'When should I refresh keto macros vs TDEE?',
        answer:
          'Refresh the [TDEE calorie calculator](/tdee-calorie-calculator) after a 10–15 lb change, a new training block, or a desk-job shift. Then rebuild protein and ~20g net carbs in the [keto macro calculator](/keto-macro-calculator). Between those checkpoints, prefer plate habits over daily spreadsheet tweaks.',
      },
      {
        question: 'Which calculator should I open first when logging feels stuck?',
        answer:
          'If the scale is flat, start with [TDEE](/tdee-calorie-calculator) and a modest deficit. If carbs keep drifting over 20g, lock the split in the [keto macro calculator](/keto-macro-calculator) and verify labels with the [net carb calculator](/net-carb-calculator).',
      },
    ],
  },
];

export const GUIDES: Guide[] = GUIDE_DRAFTS.map((guide) => ({
  ...guide,
  sources: sourcesForGuide(guide.slug),
}));

export function getGuideBySlug(slug: string): Guide | undefined {
  return GUIDES.find((g) => g.slug === slug);
}

export function getGuidesByCategory(category: Guide['category']): Guide[] {
  return GUIDES.filter((g) => g.category === category);
}

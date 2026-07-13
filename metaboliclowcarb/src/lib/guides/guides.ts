import type { Guide } from './types';

export const GUIDES: Guide[] = [
  {
    slug: 'how-to-break-a-24-hour-fast',
    category: 'fasting',
    title: 'How to Break a 24-Hour Fast Safely',
    description:
      'Step-by-step guide to refeeding after a 24-hour gut-reset fast. What to eat first, what to avoid, and when to seek medical help.',
    readMinutes: 9,
    toolPath: '/fasting-clock',
    toolLabel: 'Fasting clock',
    relatedRecipeSlugs: ['scrambled-eggs-spinach', 'chicken-salad-lettuce-cups', 'cottage-cheese-cucumber'],
    relatedGuideSlugs: ['best-first-meal-after-fasting', 'water-fast-vs-assisted-fast'],
    sections: [
      {
        heading: 'Why how you break a fast matters',
        paragraphs: [
          'A 24-hour fast is long enough to activate autophagy and give your digestive system a real rest. Dr. Mindy Pelz calls this a weekly "gut reset." The mistake many people make is treating the first meal like a reward — pizza, pasta, or a large sugary coffee — which spikes blood sugar and can cause nausea or cramping.',
          'Dr. Eric Westman notes that extended fasts carry refeeding risks if you eat too much too fast. Even at 24 hours, your gut enzymes and insulin response need a gentle restart. The goal is protein, healthy fat, and modest fiber — not a carb load.',
        ],
      },
      {
        heading: 'Step-by-step: breaking a 24-hour fast',
        paragraphs: ['Follow this sequence for most healthy adults on a low-carb or keto-style plan:'],
        bullets: [
          'Optional first: warm bouillon or bone broth (5–10 minutes) for sodium — especially after water-only fasts.',
          'First meal: a moderate portion — about half to two-thirds of a normal plate. Think eggs, chicken salad in lettuce cups, or baked salmon with broccoli.',
          'Eat slowly over 15–20 minutes. Stop at comfortable fullness, not stuffed.',
          'Wait 30–60 minutes before a second small meal if still hungry.',
          'Resume normal low-carb eating for the rest of your eating window. Skip dessert and processed carbs for this first meal.',
        ],
      },
      {
        heading: 'What to avoid on your first meal',
        paragraphs: [
          'Skip fruit juice, smoothies with banana, bread, cereal, and large pasta portions. These spike insulin quickly after fasting and can undo the metabolic benefits you built.',
          'Avoid alcohol for at least several hours after breaking a 24-hour fast. Your liver is still shifting back to normal processing.',
        ],
      },
      {
        heading: 'When to get medical help',
        paragraphs: [
          'Seek urgent care if you experience chest pain, severe confusion, fainting, or persistent vomiting when refeeding. Dr. Westman warns that refeeding syndrome — though more common beyond 48–72 hours — is serious and requires medical supervision.',
          'If you take diabetes or blood pressure medication, work with your provider before attempting 24-hour fasts. Doses often need adjustment.',
        ],
      },
      {
        heading: 'Sample first meals after 24 hours',
        paragraphs: [
          'Keep protein moderate and carbs low: scrambled eggs with spinach, chicken salad lettuce cups, or baked salmon with broccoli. See our [best first meal guide](/guides/best-first-meal-after-fasting) and related [break-fast recipes](/recipes/scrambled-eggs-spinach).',
          'Use the [fasting clock](/fasting-clock) to track your window and plan refeed timing.',
        ],
      },
    ],
    faqs: [
      {
        question: 'Can I break a 24-hour fast with fruit?',
        answer:
          'Whole low-sugar berries in small amounts may work for some people on moderate low carb. For strict keto or insulin resistance, protein and fat first is safer — fruit can spike glucose after a fast.',
      },
      {
        question: 'How often should I do a 24-hour fast?',
        answer:
          'Dr. Mindy Pelz suggests once weekly or every other week for many people. Post-menopausal women often have more flexibility than cycling women, who should align longer fasts with "power phases" of the menstrual cycle.',
      },
      {
        question: 'Is coffee with cream okay to break a fast?',
        answer:
          'Dr. Boz emphasizes that cream in coffee breaks the fasted metabolic state. Use black coffee during the fast; break with real food when you open your eating window.',
      },
    ],
  },
  {
    slug: 'intermittent-fasting-16-8-vs-18-6',
    category: 'fasting',
    title: '16:8 vs 18:6 Intermittent Fasting — Which Is Right for You?',
    description:
      'Compare 16-hour and 18-hour intermittent fasting windows. Beginner-friendly guide with Dr. Mindy and Dr. Westman principles for low-carb eaters.',
    readMinutes: 9,
    toolPath: '/intermittent-fasting-timer',
    toolLabel: 'IF timer',
    relatedGuideSlugs: ['fasting-with-insulin-resistance', 'how-to-break-a-24-hour-fast'],
    sections: [
      {
        heading: 'What intermittent fasting actually means',
        paragraphs: [
          'Intermittent fasting (IF) is not a diet — it is a schedule. You alternate a fasting window (water, plain tea, or assisted electrolytes) with an eating window where you eat normal low-carb meals.',
          'Dr. Eric Westman points out that on a well-formulated ketogenic diet, hunger often drops within days, so many people naturally skip breakfast without forcing it. That is intermittent fasting emerging from reduced appetite, not willpower alone.',
        ],
      },
      {
        heading: '16:8 — the beginner standard',
        paragraphs: [
          'Sixteen hours fasting, eight hours eating. Example: finish dinner at 7 PM, eat again at 11 AM. Dr. Mindy Pelz uses 13–16 hour fasts as the baseline for metabolic flexibility — accessible to nearly everyone.',
          'Benefits: easier socially, fits most work schedules, enough time to shift toward fat burning (often by 12–14 hours). Good first step if you are new to fasting or managing insulin resistance cautiously.',
        ],
      },
      {
        heading: '18:6 — a modest step up',
        paragraphs: [
          'Eighteen hours fasting, six hours eating. You push closer to the 17-hour autophagy threshold Dr. Mindy discusses without committing to a full 24-hour fast.',
          'Best for: people comfortable with 16:8 for several weeks, stable energy, and no signs of excessive stress (poor sleep, hair loss, anxiety). Cycling women should avoid pushing to 18:6 during ovulation (days 11–15) — keep to 15 hours max in that window.',
        ],
      },
      {
        heading: 'OMAD and longer fasts — not step one',
        paragraphs: [
          'One meal a day (OMAD) and fasts beyond 18 hours are advanced. Dr. Boz warns that people with severe insulin resistance may not be "healthy enough to fast" until they stabilize with low-carb eating first — glucose can stay elevated for days on extended fasts.',
          'Build the habit: 16:8 for 2–4 weeks → try 18:6 → consider 24-hour gut resets occasionally. Use our fasting clock to track phases and break-fast guidance.',
        ],
      },
      {
        heading: 'Choosing your first IF window',
        bullets: [
          'Start 16:8 — skip breakfast, eat 12 PM–8 PM',
          'Move to 18:6 after 2–4 weeks if energy is stable',
          'Pair with [low-carb macros](/keto-macro-calculator) for steadier glucose',
          'Track with our [intermittent fasting timer](/intermittent-fasting-timer)',
        ],
        paragraphs: [
          'If you have insulin resistance, read [fasting with insulin resistance](/guides/fasting-with-insulin-resistance) before tightening your window.',
        ],
      },
    ],
    faqs: [
      {
        question: 'Will IF slow my metabolism?',
        answer:
          'Short daily fasting windows (16–18 hours) do not cause the same metabolic slowdown as chronic severe calorie restriction for most people. If energy crashes, sleep suffers, or cycles become irregular, shorten your fast.',
      },
      {
        question: 'Can I drink coffee while fasting?',
        answer:
          'Black coffee and plain tea are generally fine during IF. Cream, MCT oil, or sweeteners break the fast for metabolic purposes (Dr. Boz). Assisted fasting allows electrolytes and bouillon without calories.',
      },
      {
        question: 'Should men and women fast the same way?',
        answer:
          'Dr. Mindy emphasizes cycle-aware fasting for women. Men, governed primarily by testosterone pulses, can often vary fast length by goal (17h for autophagy, 36h for plateaus) without the same cycle constraints.',
      },
    ],
  },
  {
    slug: 'water-fast-vs-assisted-fast',
    category: 'fasting',
    title: 'Water Fast vs Assisted Fast — Electrolytes Explained',
    description:
      'Strict water-only fasting vs assisted fasting with salt, bouillon, and electrolytes. Guidance from Dr. Westman and Dr. Boz for safe extended fasts.',
    readMinutes: 9,
    toolPath: '/water-fast-timer',
    toolLabel: 'Water fast timer',
    relatedGuideSlugs: ['how-to-break-a-24-hour-fast', 'intermittent-fasting-16-8-vs-18-6'],
    sections: [
      {
        heading: 'Water-only fasting',
        paragraphs: [
          'Plain water only — no calories, no broth, no supplements with calories. Strictest form, often used for shorter fasts (16–24 hours) or by experienced fasters.',
          'Risk: electrolyte loss. Dr. Eric Westman stresses that low-carb diets and fasting both increase sodium needs. Headaches, dizziness, and muscle cramps on water-only fasts often mean you need salt, not more willpower.',
        ],
      },
      {
        heading: 'Assisted fasting — what is allowed',
        paragraphs: [
          'Assisted fasting adds non-caloric support: water, plain salt or electrolyte mixes without sugar, bouillon/bone broth (Dr. Westman recommends a cup daily for sodium), black coffee, and plain tea.',
          'Dr. Boz is direct: "Salt + water are best" during fasts. This is not cheating — it prevents preventable side effects and helps you complete the fast safely.',
        ],
      },
      {
        heading: 'Which should you choose?',
        paragraphs: [
          'For 16–18 hour IF: water alone may be fine if you salt food well when you eat. For 24 hours and beyond: assisted fasting is strongly recommended.',
          'Our fasting clock lets you toggle modes and shows tailored hydration tips as your timer runs.',
        ],
        bullets: [
          '16–18h IF, feel good → water or assisted both work',
          '24h+ gut reset → assisted with bouillon',
          '36–72h extended → assisted only for most people',
          'History of kidney issues → ask your doctor before high sodium',
        ],
      },
      {
        heading: 'Electrolyte strategy by fast type',
        paragraphs: [
          'Water-only fasts beyond 24 hours need sodium, potassium, and magnesium planning — see [electrolytes during fasting](/guides/electrolytes-during-fasting). Assisted fasts with bouillon or bone broth are gentler for beginners.',
          'Use the [water fast timer](/water-fast-timer) or [extended fasting clock](/extended-fasting-clock) depending on your protocol.',
        ],
      },
    ],
    faqs: [
      {
        question: 'Does bouillon break a fast?',
        answer:
          'Plain bouillon has minimal calories but provides critical sodium. Most low-carb clinicians treat it as compatible with fasting goals, especially beyond 16 hours. Strict water-only purists may disagree — choose based on your goals and how you feel.',
      },
      {
        question: 'What about electrolyte powders?',
        answer:
          'Use sugar-free powders with sodium, potassium, and magnesium. Avoid gummy vitamins or products with maltodextrin or sugar.',
      },
    ],
  },
  {
    slug: 'fasting-with-insulin-resistance',
    category: 'insulin-resistance',
    title: 'Fasting With Insulin Resistance — When to Go Slow',
    description:
      'Why extended fasting can fail with insulin resistance. Dr. Boz on glucose, ketones, and building metabolic readiness before long fasts.',
    readMinutes: 10,
    toolPath: '/insulin-resistance-macro-calculator',
    toolLabel: 'IR macro calculator',
    relatedGuideSlugs: ['dr-boz-ratio-explained', 'net-carbs-for-insulin-resistance', 'intermittent-fasting-16-8-vs-18-6'],
    sections: [
      {
        heading: 'Insulin resistance changes the fasting equation',
        paragraphs: [
          'With insulin resistance, your cells do not respond efficiently to insulin. Blood glucose stays elevated; fat stores stay locked. Dr. Boz describes patients who fast 48+ hours yet glucose remains in the hundreds — a sign the body is not yet burning fat effectively.',
          'Research on prolonged fasting in severely obese patients showed glucose could stay elevated for days while ketones lagged — the body breaking down muscle instead of tapping fat. That is why "fast harder" is not always the answer.',
        ],
      },
      {
        heading: 'The Dr. Boz approach: stabilize first',
        paragraphs: [
          'Dr. Boz recommends delaying prolonged fasts until metabolism improves. Start with a low-carb, adequate-fat eating pattern. Track the Dr. Boz Ratio (glucose ÷ ketones) — aim below 80, ideally below 40, before pushing 24-hour+ fasts.',
          'Dr. Eric Westman adds patience: blood sugar normalization on keto can take months, not days. Intermittent 16:8 while keeping carbs low is often more sustainable than jumping to multi-day water fasts.',
        ],
      },
      {
        heading: 'Signs you should not extend your fast',
        paragraphs: [
          'Stop or shorten your fast and eat a proper low-carb meal if you notice persistent weakness, shakiness, heart palpitations, or fasting glucose staying above ~120 mg/dL after 24+ hours without ketones rising.',
          'If you take metformin, insulin, sulfonylureas, or blood pressure medication, fasting requires medical supervision — doses may need lowering to prevent dangerous lows.',
        ],
      },
      {
        heading: 'A practical progression',
        bullets: [
          'Weeks 1–4: Low-carb meals, track net carbs (50g or less for IR).',
          'Weeks 2–6: Natural 12–14 hour overnight fasts as hunger allows.',
          'Weeks 4–8: 16:8 IF if Dr. Boz Ratio and energy improve.',
          'Later: Occasional 24-hour gut resets — not weekly marathons until metrics support it.',
        ],
        paragraphs: [],
      },
      {
        heading: 'IR fasting safety checklist',
        bullets: [
          'Check fasting glucose and symptoms daily when starting',
          'Coordinate with your provider if on diabetes meds',
          'Keep net carbs under personal tolerance — see [net carbs for IR](/guides/net-carbs-for-insulin-resistance)',
          'Break fasts with protein-first meals, not juice',
          'Monitor with [Dr. Boz ratio calculator](/dr-boz-ratio-calculator) if you track GKI',
        ],
        paragraphs: [],
      },
    ],
    faqs: [
      {
        question: 'Why is my fasting glucose high on keto?',
        answer:
          'Dawn phenomenon, stress hormones, and incomplete insulin sensitivity improvement can keep morning glucose elevated. It often improves over months. Persistent highs despite low carb warrant medical evaluation.',
      },
      {
        question: 'Can fasting cure insulin resistance?',
        answer:
          'Fasting and low-carb eating can improve insulin sensitivity for many people, but this is not medical advice or a guarantee. Work with your healthcare team and monitor labs.',
      },
    ],
  },
  {
    slug: 'dr-boz-ratio-explained',
    category: 'insulin-resistance',
    title: 'Dr. Boz Ratio Explained — Glucose ÷ Ketones',
    description:
      'How to calculate and interpret the Dr. Boz Ratio for fasting and keto. Targets for weight loss, autophagy, and insulin resistance.',
    readMinutes: 9,
    toolPath: '/fasting-clock',
    toolLabel: 'Fasting clock (ratio tracker)',
    relatedGuideSlugs: ['fasting-with-insulin-resistance', 'net-carbs-for-insulin-resistance'],
    sections: [
      {
        heading: 'What is the Dr. Boz Ratio?',
        paragraphs: [
          'The Dr. Boz Ratio (DBR) divides fasting blood glucose (mg/dL) by blood ketones (mmol/L). It is a single number that reflects whether you are primarily burning glucose or fat.',
          'Dr. Annette Bosworth (Dr. Boz) uses it to help patients see insulin resistance in real time — especially when scale weight stalls but metabolic health is changing.',
        ],
      },
      {
        heading: 'How to calculate it',
        paragraphs: [
          'You need a meter that reads both glucose and ketones from a finger stick. Measure in a fasted state — morning before food is common.',
          'Formula: Dr. Boz Ratio = Glucose (mg/dL) ÷ Ketones (mmol/L). Example: 90 mg/dL ÷ 1.5 mmol/L = 60.',
          'Our fasting clock includes optional fields to track your ratio during active fasts.',
        ],
      },
      {
        heading: 'How to interpret your number',
        bullets: [
          'Above 80: Still glucose-dominant. Tighten carbs, consider longer overnight fasts, or improve fat intake quality.',
          '40–80: Moderate ketosis. Good for general health and steady weight management.',
          'Below 40: Deeper ketosis associated with autophagy and therapeutic benefits — approach gradually.',
        ],
        paragraphs: [
          'Dr. Boz emphasizes: "Ketones rise first, glucose falls second." Do not expect instant ratio improvements on day one of low carb.',
        ],
      },
      {
        heading: 'Using the ratio in practice',
        paragraphs: [
          'Measure fasting glucose (mg/dL) and blood ketones (mmol/L). Divide glucose by 18, then divide by ketones for the Dr. Boz ratio. Lower ratios generally indicate deeper metabolic flexibility.',
          'Enter values in our [Dr. Boz ratio calculator](/dr-boz-ratio-calculator). Pair with [net carb tracking](/net-carb-calculator) to see how meals move your numbers.',
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
          'Many people aim to get consistently under 80. Below 40 is often associated with deeper fat burning — but individual targets vary. Discuss with your provider if you have diabetes.',
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
    relatedRecipeSlugs: ['cauliflower-rice-stir-fry', 'baked-salmon-broccoli', 'taco-bowl-no-tortilla'],
    relatedGuideSlugs: ['fasting-with-insulin-resistance', 'dr-boz-ratio-explained'],
    sections: [
      {
        heading: 'Net carbs vs total carbs',
        paragraphs: [
          'On US nutrition labels: net carbs ≈ total carbohydrates minus dietary fiber minus sugar alcohols (often erythritol fully subtracted). This estimates carbs that more directly affect blood sugar.',
          'Fiber-rich whole foods behave differently than refined carbs — but net carbs remain a useful daily budget for insulin resistance and keto-style plans.',
        ],
      },
      {
        heading: 'Daily targets — three common tiers',
        bullets: [
          'Strict keto: ~20g net carbs/day — Dr. Westman-style therapeutic ketosis for diabetes and obesity clinics.',
          'Insulin resistance / metabolic health: ~50g net carbs/day — our default IR macro plan; balanced and sustainable.',
          'Moderate low carb: ~100g net carbs/day — maintenance or gradual transition.',
        ],
        paragraphs: [
          'Your provider may recommend different numbers based on medications, kidney health, and lab results. These tiers are starting points, not prescriptions.',
        ],
      },
      {
        heading: 'Practical label reading',
        paragraphs: [
          'Use our net carb calculator at the grocery store: enter total carbs, fiber, and sugar alcohols from the label. Multiply by servings if you eat more than one.',
          'Watch hidden sugars in sauces, dressings, and "keto" packaged foods. When in doubt, choose whole foods: meat, fish, eggs, leafy greens, olive oil.',
        ],
      },
      {
        heading: 'Daily net carb targets for IR',
        bullets: [
          'Strict therapeutic: 20–30g net carbs/day',
          'Moderate low carb: 50–75g net carbs/day',
          'Maintenance after reversal: 75–100g — individual',
          'Use [net carb calculator](/net-carb-calculator) per meal',
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
          'Erythritol is usually fully subtracted. Maltitol and others can still raise blood sugar — some people count half. Our calculator subtracts what you enter; adjust based on your response.',
      },
      {
        question: 'Is 50g net carbs low enough for insulin resistance?',
        answer:
          'For many people, yes — combined with adequate protein and healthy fats. Some need stricter keto (20g); others improve at 100g. Track glucose response and work with your doctor.',
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
    relatedRecipeSlugs: ['scrambled-eggs-spinach', 'egg-muffins', 'greek-yogurt-berries', 'taco-bowl-no-tortilla', 'chicken-salad-lettuce-cups'],
    relatedGuideSlugs: ['how-to-break-a-24-hour-fast', 'intermittent-fasting-16-8-vs-18-6'],
    sections: [
      {
        heading: 'The break-fast formula',
        paragraphs: [
          'Dr. Mindy Pelz: protein + healthy fat + fiber at your first meal. Dr. Westman: eat when hungry, stop when full — do not "make up" missed calories.',
          'For 16:8 IF, a normal-sized lunch works. For 24-hour fasts, start smaller — half plate, then assess hunger in 30–60 minutes.',
        ],
      },
      {
        heading: 'Top recipe picks from our kitchen',
        paragraphs: [
          'Each recipe below is linked from our collection with estimated net carbs. All fit strict keto or insulin resistance plans.',
        ],
        bullets: [
          'Scrambled Eggs with Spinach (~2g net carbs) — classic, gentle, high protein.',
          'Egg Muffins (~2g) — prep ahead for busy break-fast mornings.',
          'Chicken Salad Lettuce Cups (~3g) — light after extended fasts.',
          'Taco Bowl No Tortilla (~8g) — satisfying after 16:8, skip if just finished 24h+.',
          'Greek Yogurt with Berries (~6g) — moderate; best after shorter fasts, not first choice for strict IR.',
        ],
      },
      {
        heading: 'Match the meal to the fast length',
        paragraphs: [
          'After 16–18 hours: any recipe above in a normal portion. After 24 hours: eggs, cottage cheese, or chicken salad first. After 36+ hours: follow our prolonged refeed steps in the fasting clock break-fast guide.',
        ],
      },
      {
        heading: 'Recipe picks by fast length',
        paragraphs: [
          'After 16–18 hour IF: normal low-carb meal size is fine. After 24+ hours: half-portion protein meals — [scrambled eggs](/recipes/scrambled-eggs-spinach), [cottage cheese](/recipes/cottage-cheese-cucumber), or [bone broth eggs](/recipes/break-fast-bone-broth-eggs).',
          'Full protocol in [how to break a 24-hour fast](/guides/how-to-break-a-24-hour-fast).',
        ],
      },
    ],
    faqs: [
      {
        question: 'Can I break a fast with a protein shake?',
        answer:
          'A clean whey or collagen shake without added sugar can work in a pinch. Whole food is preferred — chewing signals satiety and is gentler on digestion after longer fasts.',
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
    toolPath: '/metabolic-health-calculator',
    toolLabel: 'Metabolic health calculator',
    relatedGuideSlugs: ['fatty-liver-low-carb', 'net-carbs-for-insulin-resistance', 'fasting-with-insulin-resistance'],
    sections: [
      {
        heading: 'Subcutaneous vs visceral fat',
        paragraphs: [
          'Subcutaneous fat sits under your skin — the fat you can pinch. Visceral fat wraps around organs in the abdomen (liver, pancreas, intestines). Visceral fat is more strongly linked to insulin resistance, elevated triglycerides, and metabolic syndrome.',
          'Waist circumference often tracks visceral fat better than BMI alone. A larger waist with "normal" weight still carries metabolic risk.',
        ],
      },
      {
        heading: 'Why the scale is not the whole story',
        paragraphs: [
          'Dr. Westman\'s clinic experience: improving blood sugar and reducing carb intake often improves metabolic markers before dramatic weight loss. Dr. Boz uses the Boz Ratio for the same reason — internal metabolism can shift while the scale stalls.',
          'Intermittent fasting and low-carb eating both reduce insulin spikes, which helps the body access stored fat — including visceral depots — over time.',
        ],
      },
      {
        heading: 'What you can do',
        bullets: [
          'Track net carbs daily — start with 50g for insulin resistance.',
          'Prioritize protein at each meal to preserve muscle during fat loss.',
          'Add 16:8 IF once low-carb eating feels stable.',
          'Measure waist monthly, not just weight weekly.',
          'Discuss liver enzymes and A1c with your doctor annually.',
        ],
        paragraphs: [],
      },
      {
        heading: 'Measuring metabolic progress',
        paragraphs: [
          'Waist circumference, fasting insulin, triglycerides, and liver enzymes often improve before scale weight drops. Use our [metabolic health calculator](/metabolic-health-calculator) for waist-to-height context.',
          'Low carb plus [time-restricted eating](/guides/intermittent-fasting-16-8-vs-18-6) targets visceral fat preferentially in many studies — consistency beats extreme restriction.',
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
          'You cannot spot-reduce fat. Fasting lowers insulin and extends fat-burning windows, which may preferentially reduce visceral fat over time in some people — but diet consistency matters more than any single fast.',
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
    toolPath: '/low-carb-macro-calculator',
    toolLabel: 'Low carb macro calculator',
    relatedGuideSlugs: ['visceral-fat-metabolic-health', 'net-carbs-for-insulin-resistance'],
    sections: [
      {
        heading: 'What is fatty liver (NAFLD)?',
        paragraphs: [
          'Non-alcoholic fatty liver disease means excess fat stored in liver cells — not from alcohol, but often from insulin resistance, excess fructose, and chronic calorie surplus. It is common in metabolic syndrome and type 2 diabetes.',
          'Many people have no symptoms early on. Blood tests (ALT, AST, GGT) and imaging can detect it. This guide is educational only — diagnosis and treatment require a healthcare provider.',
        ],
      },
      {
        heading: 'Why low carb comes up in conversation',
        paragraphs: [
          'The liver plays a central role in glucose and fat metabolism. When insulin is chronically elevated, the liver converts excess carbohydrate to fat (de novo lipogenesis). Reducing refined carbs and fructose lowers that signal.',
          'Clinical research on ketogenic and low-carb diets shows improvements in liver fat markers for some patients with NAFLD — but study designs and populations vary. Dr. Westman\'s work at Duke focused on metabolic disease broadly, including fatty liver in obesity clinics.',
        ],
      },
      {
        heading: 'Practical steps (with your doctor)',
        bullets: [
          'Reduce sugar, soda, juice, and refined grains first.',
          'Target net carbs appropriate for your plan (often 20–50g under medical supervision).',
          'Avoid aggressive extended fasting until liver and kidney function are evaluated.',
          'Retest liver enzymes after 3–6 months of consistent change.',
        ],
        paragraphs: [
          'Never stop medications or ignore elevated liver enzymes without medical guidance.',
        ],
      },
      {
        heading: 'Lifestyle stack for NAFLD',
        bullets: [
          'Cut refined carbs and fructose-heavy drinks first',
          'Aim for 50g or fewer net carbs if tolerated',
          'Add walking after meals — independent of weight loss',
          'Retest liver enzymes at 12 weeks with your doctor',
          'See [getting started keto](/guides/getting-started-keto-low-carb) for food lists',
        ],
        paragraphs: [],
      },
    ],
    faqs: [
      {
        question: 'Is keto safe with fatty liver?',
        answer:
          'Many clinicians use low-carb diets for NAFLD under supervision. If you have advanced liver disease or take multiple medications, you need personalized medical advice — not a website guide.',
      },
      {
        question: 'Does fasting help fatty liver?',
        answer:
          'Some research suggests time-restricted eating may reduce liver fat. Extended fasts without medical clearance are not recommended if you have significant liver disease.',
      },
    ],
  },
  {
    slug: 'getting-started-keto-low-carb',
    category: 'insulin-resistance',
    title: 'Getting Started with Keto and Low Carb — First 2 Weeks',
    description:
      'A practical starter plan: cut sugar first, target net carbs, prioritize protein, and when to add fasting.',
    readMinutes: 9,
    toolPath: '/keto-macro-calculator',
    toolLabel: 'Keto macro calculator',
    relatedGuideSlugs: ['net-carbs-for-insulin-resistance', 'atkins-phases-explained', 'how-to-read-nutrition-labels-net-carbs'],
    sections: [
      {
        heading: 'Week 1: remove the obvious carbs',
        bullets: [
          'Stop soda, juice, candy, and white bread',
          'Read labels — use our net carb calculator on packaged foods',
          'Eat protein + vegetables at each meal',
          'Drink water; add salt if you feel lightheaded (keto flu)',
        ],
        paragraphs: [],
      },
      {
        heading: 'Week 2: set a daily net carb target',
        paragraphs: [
          'Strict keto: ~20g net carbs. Insulin resistance: ~50g. Moderate low carb: ~100g. Use our macro calculator to personalize calories and protein.',
          'Dr. Eric Westman notes hunger often drops within days on low carb — many people naturally skip breakfast without forcing fasting.',
        ],
      },
      {
        heading: 'Week-one starter plan',
        bullets: [
          'Day 1–3: remove sugar, bread, rice, pasta, soda',
          'Stock proteins, leafy greens, eggs, avocados, olive oil',
          'Calculate macros — [keto macro calculator](/keto-macro-calculator)',
          'Track net carbs — [net carb calculator](/net-carb-calculator)',
          'Read [Atkins phases](/guides/atkins-phases-explained) if using phased approach',
        ],
        paragraphs: [
          'If you have insulin resistance or PCOS, also read [net carbs for IR](/guides/net-carbs-for-insulin-resistance) and [PCOS and low carb](/guides/pcos-and-low-carb).',
        ],
      },
    ],
    faqs: [
      {
        question: 'Do I need to count calories?',
        answer:
          'Many people start with net carbs and protein only. If weight loss stalls, tracking total calories for a short period can help.',
      },
    ],
  },
  {
    slug: 'atkins-phases-explained',
    category: 'insulin-resistance',
    title: 'Atkins Phases Explained — Induction Through Maintenance',
    description:
      'Phase 1 through 4 net carb limits, when to advance, and how Atkins compares to strict keto.',
    readMinutes: 8,
    toolPath: '/atkins-macro-calculator',
    toolLabel: 'Atkins macro calculator',
    relatedGuideSlugs: ['getting-started-keto-low-carb', 'low-carb-macro-calculator'],
    sections: [
      {
        heading: 'The four phases',
        bullets: [
          'Phase 1 (Induction): ~20g net carbs — rapid switch to fat burning',
          'Phase 2: add 5g net carbs weekly from nuts, seeds, berries',
          'Phase 3 (Pre-maintenance): fine-tune as you near goal weight',
          'Phase 4 (Maintenance): find your personal carb tolerance',
        ],
        paragraphs: [],
      },
      {
        heading: 'Phase carb limits quick reference',
        bullets: [
          'Phase 1 Induction: ~20g net carbs/day',
          'Phase 2 Ongoing: add 5g weekly as tolerated',
          'Phase 3 Pre-Maintenance: widen toward goal weight',
          'Phase 4 Maintenance: personal carb balance',
          'Use [Atkins macro calculator](/atkins-macro-calculator) for phase targets',
        ],
        paragraphs: [
          'Compare with strict keto in our [getting started guide](/guides/getting-started-keto-low-carb).',
        ],
      },
    ],
    faqs: [
      {
        question: 'Can I stay on Phase 1 forever?',
        answer:
          'Some people do for therapeutic reasons under medical care. Most advance to Phase 2 once cravings stabilize and weight loss is on track.',
      },
    ],
  },
  {
    slug: 'pcos-and-low-carb',
    category: 'insulin-resistance',
    title: 'PCOS and Low Carb — What the Research Suggests',
    description:
      'How insulin resistance links to PCOS symptoms and why many providers discuss carb reduction — not a treatment plan.',
    readMinutes: 9,
    toolPath: '/pcos-low-carb-calculator',
    toolLabel: 'PCOS calculator',
    relatedGuideSlugs: ['net-carbs-for-insulin-resistance', 'intermittent-fasting-16-8-vs-18-6'],
    sections: [
      {
        heading: 'Insulin and PCOS',
        paragraphs: [
          'PCOS often involves insulin resistance, which drives higher insulin and can worsen androgen symptoms. Lower-carb diets may improve metabolic markers for some women — individual results vary.',
        ],
      },
      {
        heading: 'Practical starting points',
        bullets: [
          'Discuss targets with OB/GYN or endocrinologist',
          'Start ~50g net carbs with adequate protein',
          'Consider cycle-aware fasting (shorter fasts in luteal phase — Dr. Mindy)',
          'Track cycles, energy, and labs — not just scale weight',
        ],
        paragraphs: [],
      },
      {
        heading: 'PCOS nutrition priorities',
        paragraphs: [
          'Lower net carbs reduce insulin spikes that drive androgen symptoms in many women with PCOS. Start with [PCOS low carb calculator](/pcos-low-carb-calculator) targets — often 50–75g net carbs.',
          'Women should align longer fasts with cycle phase — see [intermittent fasting 16:8 vs 18:6](/guides/intermittent-fasting-16-8-vs-18-6) for gender-specific notes.',
        ],
      },
    ],
    faqs: [
      {
        question: 'Will low carb regulate my period?',
        answer:
          'Some women see improved cycle regularity as insulin improves. Others need additional treatment. Do not replace medical care with diet alone.',
      },
    ],
  },
  {
    slug: 'fasting-on-diabetes-medications',
    category: 'fasting',
    title: 'Fasting on Diabetes and Blood Pressure Medications — Safety Basics',
    description:
      'Why insulin, sulfonylureas, and BP meds require doctor supervision before extended fasts.',
    readMinutes: 10,
    toolPath: '/fasting-clock',
    toolLabel: 'Fasting clock',
    relatedGuideSlugs: ['fasting-with-insulin-resistance', 'water-fast-vs-assisted-fast'],
    sections: [
      {
        heading: 'Why medications matter',
        paragraphs: [
          'Dr. Eric Westman warns that fasting while on insulin or sulfonylureas can cause dangerous hypoglycemia. Blood pressure medications may need adjustment as weight and sodium intake change during fasts.',
          'Never stop or reduce prescriptions without your prescriber. Many clinics use supervised low-carb programs with medication tapering plans.',
        ],
      },
      {
        heading: 'Safer progression',
        bullets: [
          'Stabilize low-carb eating for weeks before extended fasts (Dr. Boz)',
          'Start with 13–16 hour windows; monitor glucose if your doctor recommends',
          'Use assisted fasting with sodium for 24h+ only with clearance',
          'Break fasts immediately if shaky, confused, or severely hypoglycemic',
        ],
        paragraphs: [],
      },
      {
        heading: 'Medication categories and fasting risk',
        bullets: [
          'Metformin: often continued — hypoglycemia risk lower alone',
          'Sulfonylureas: high hypoglycemia risk — dose adjustment required',
          'Insulin: never fast without medical supervision',
          'SGLT2 inhibitors: dehydration/ketoacidosis risk — provider guidance essential',
          'Pair diet changes with [IR fasting guide](/guides/fasting-with-insulin-resistance)',
        ],
        paragraphs: [
          'This is educational only — your prescriber must approve any fasting protocol with diabetes medications.',
        ],
      },
    ],
    faqs: [
      {
        question: 'Can I fast on metformin?',
        answer:
          'Metformin is lower hypoglycemia risk than insulin secretagogues, but still discuss fasting plans with your prescriber — especially beyond 24 hours.',
      },
    ],
  },
  {
    slug: 'electrolytes-during-fasting',
    category: 'fasting',
    title: 'Electrolytes During Fasting — Sodium, Potassium & Magnesium',
    description:
      'Prevent headaches and cramps during 16–72 hour fasts. Dr. Westman bouillon and Dr. Boz assisted-fasting tips.',
    readMinutes: 8,
    toolPath: '/extended-fasting-clock',
    toolLabel: 'Extended fasting clock',
    relatedGuideSlugs: ['water-fast-vs-assisted-fast', 'how-to-break-a-24-hour-fast'],
    sections: [
      {
        heading: 'Why electrolytes drop',
        paragraphs: [
          'Low insulin during fasting increases sodium loss through kidneys. Without replacement, you may get headaches, dizziness, or leg cramps — often mistaken for “fasting not working.”',
        ],
      },
      {
        heading: 'What experts recommend',
        bullets: [
          'Dr. Westman: bouillon or broth for sodium (assisted fasts)',
          'Dr. Boz: salt water, magnesium, potassium as needed — avoid caloric broth on strict water-only',
          'Plain water-only beyond 24h increases electrolyte risk — switch to assisted mode',
        ],
        paragraphs: [],
      },
      {
        heading: 'Daily electrolyte targets (general adults)',
        bullets: [
          'Sodium: 2–3g/day on low carb; more during prolonged fasts',
          'Potassium: food-first; supplement only with guidance',
          'Magnesium: 200–400mg glycinate often helps sleep and cramps',
          'Avoid overhydrating plain water without sodium',
          'Assisted fasts: bouillon — see [water vs assisted fast](/guides/water-fast-vs-assisted-fast)',
        ],
        paragraphs: [],
      },
    ],
    faqs: [
      {
        question: 'Can I use zero-calorie electrolyte powders?',
        answer:
          'Many assisted fasters use sugar-free electrolyte mixes. Check labels for carbs and artificial sweeteners if you are strict keto.',
      },
    ],
  },
  {
    slug: 'how-to-read-nutrition-labels-net-carbs',
    category: 'insulin-resistance',
    title: 'How to Read Nutrition Labels for Net Carbs',
    description:
      'Find total carbs, fiber, and sugar alcohols on US labels — step-by-step for keto and low-carb shopping.',
    readMinutes: 8,
    toolPath: '/net-carb-calculator',
    toolLabel: 'Net carb calculator',
    relatedGuideSlugs: ['net-carbs-for-insulin-resistance', 'getting-started-keto-low-carb'],
    sections: [
      {
        heading: 'Label lines to find',
        bullets: [
          'Total Carbohydrate (top line)',
          'Dietary Fiber (indented below — subtract fully)',
          'Sugar Alcohols (if listed — often subtract fully for erythritol)',
          'Serving size — multiply if you eat more than one serving',
        ],
        paragraphs: [
          'Net carbs ≈ total carbs − fiber − sugar alcohols. Enter numbers in our calculator for instant results.',
        ],
      },
      {
        heading: 'Label math worked example',
        paragraphs: [
          'Total carbs 15g, fiber 8g, erythritol 4g → net carbs ≈ 3g on most keto plans. Enter each line in our [net carb calculator](/net-carb-calculator).',
          'For insulin resistance targets, see [net carbs for IR](/guides/net-carbs-for-insulin-resistance) and verify sugar alcohol rules per product.',
        ],
      },
    ],
    faqs: [
      {
        question: 'Do I subtract all fiber?',
        answer:
          'On US labels, dietary fiber is subtracted from total carbs for net carb counting on most keto plans. Soluble fiber still has minimal impact for some people.',
      },
    ],
  },
];

export function getGuideBySlug(slug: string): Guide | undefined {
  return GUIDES.find((g) => g.slug === slug);
}

export function getGuidesByCategory(category: Guide['category']): Guide[] {
  return GUIDES.filter((g) => g.category === category);
}

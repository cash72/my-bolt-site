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
    relatedRecipeSlugs: ['scrambled-eggs-spinach', 'chicken-salad-lettuce-cups', 'cottage-cheese-cucumber', 'ginger-chicken-bone-broth-soup'],
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
    title: 'Dr. Boz Ratio Explained — Calculator, Formula & Target Numbers',
    description:
      'What is the Dr. Boz Ratio? Learn the glucose ÷ ketones formula, target numbers for weight loss and autophagy, and use our free Dr. Boz ratio calculator.',
    readMinutes: 9,
    toolPath: '/dr-boz-ratio-calculator',
    toolLabel: 'Dr. Boz ratio calculator',
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
          'Strict therapeutic: 20–30g net carbs/day',
          'Moderate low carb: 50–75g net carbs/day',
          'Maintenance after reversal: 75–100g — individual',
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
          'Erythritol is usually fully subtracted. Maltitol and others can still raise blood sugar — some people count half. Our calculator subtracts what you enter; adjust based on your response.',
      },
      {
        question: 'Is 50g net carbs low enough for insulin resistance?',
        answer:
          'For many people, yes — combined with adequate protein and healthy fats. Some need stricter keto (20g); others improve at 100g. Track glucose response and work with your doctor.',
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
          'Set calories with the [TDEE calorie calculator](/tdee-calorie-calculator), then macros with the [keto macro calculator](/keto-macro-calculator).',
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
          'Low carb plus [time-restricted eating](/guides/intermittent-fasting-16-8-vs-18-6) targets visceral fat preferentially in many studies — consistency beats extreme restriction. If scale weight is your main lever, start with [TDEE](/tdee-calorie-calculator) and a modest deficit rather than crash cuts.',
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
      {
        question: 'Should I track calories or just carbs for belly fat?',
        answer:
          'Start with net carbs and protein. If waist and weight stall for several weeks, add a calorie check with the [TDEE calorie calculator](/tdee-calorie-calculator) and rebuild macros in the [keto macro calculator](/keto-macro-calculator).',
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
    relatedRecipeSlugs: ['salmon-avocado-poke-bowl', 'baked-salmon-broccoli', 'ginger-chicken-bone-broth-soup'],
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
          'Never stop medications or ignore elevated liver enzymes without medical guidance. For educational macro starting points, use the [keto macro calculator](/keto-macro-calculator) or [low carb macro calculator](/low-carb-macro-calculator), and the [TDEE calorie calculator](/tdee-calorie-calculator) if calorie surplus is part of the story.',
        ],
      },
      {
        heading: 'Lifestyle stack for NAFLD',
        bullets: [
          'Cut refined carbs and fructose-heavy drinks first',
          'Aim for 50g or fewer net carbs if tolerated',
          'Set macros — [keto](/keto-macro-calculator) or [low carb](/low-carb-macro-calculator)',
          'Optional calorie check — [TDEE calculator](/tdee-calorie-calculator)',
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
      {
        question: 'Do I need a calorie target or just lower carbs?',
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
          'Decide your first target before day one: strict keto (~20g net carbs), insulin-resistance-friendly (~50g), or moderate low carb (~100g). You can tighten later. Jumping straight to 20g while travel-stressed and under-slept is how people quit in week one.',
        ],
      },
      {
        heading: 'Week 1: remove the obvious carbs',
        bullets: [
          'Stop soda, juice, candy, and white bread',
          'Read labels — use our net carb calculator on packaged foods',
          'Eat protein + non-starchy vegetables at each meal',
          'Drink water; add salt if you feel lightheaded (keto flu) — confirm with your clinician if you have blood-pressure issues',
          'Cook from the [breakfast](/recipes/breakfast) and [dinner](/recipes/dinner) hubs so you are not improvising hungry',
        ],
        paragraphs: [
          'Week one is subtraction, not perfection. Clear the pantry of the foods that trigger automatic eating. Replace them with eggs, meat, leafy greens, olive oil, butter, cheese (if tolerated), and plain yogurt you have label-checked.',
        ],
      },
      {
        heading: 'Week 2: set a daily net carb target',
        paragraphs: [
          'Strict keto: ~20g net carbs. Insulin resistance: ~50g. Moderate low carb: ~100g. Use our [keto macro calculator](/keto-macro-calculator) or [insulin resistance macro calculator](/insulin-resistance-macro-calculator) to personalize protein, fat, and net carbs — and the [TDEE calorie calculator](/tdee-calorie-calculator) if you want a maintenance or deficit calorie baseline first.',
          'Dr. Eric Westman notes hunger often drops within days on low carb — many people naturally skip breakfast without forcing fasting. If hunger drops, you can experiment with a shorter eating window later — see [intermittent fasting 16:8 vs 18:6](/guides/intermittent-fasting-16-8-vs-18-6).',
          'Expect keto flu symptoms (headache, fatigue, cramps) if electrolytes drop. Read [keto flu and electrolytes](/guides/keto-flu-and-electrolytes) before you blame “willpower.”',
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
          'If you have insulin resistance or PCOS, also read [net carbs for IR](/guides/net-carbs-for-insulin-resistance) and [PCOS and low carb](/guides/pcos-and-low-carb). Women may need a gentler fasting ramp — do not copy a 72-hour fast from social media in week one.',
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
    toolPath: '/atkins-macro-calculator',
    toolLabel: 'Atkins macro calculator',
    relatedGuideSlugs: ['getting-started-keto-low-carb', 'net-carbs-for-insulin-resistance', 'mindful-macro-tracking-low-carb'],
    relatedRecipeSlugs: ['scrambled-eggs-spinach', 'greek-yogurt-berries', 'sheet-pan-chicken-thighs-cabbage'],
    sections: [
      {
        heading: 'Why Atkins still uses phases',
        paragraphs: [
          'Atkins is a ladder, not a permanent 20g carb sentence. Induction forces rapid fat adaptation; later phases add carbs back until you find a personal ceiling that keeps weight and energy stable. That structure is useful if strict keto forever feels socially or nutritionally too tight.',
          'Phase 1 looks a lot like modern strict keto. The difference is intentional progression: you are expected to test higher carb levels once cravings and weight loss stabilize. Use the [Atkins macro calculator](/atkins-macro-calculator) for induction targets, then switch to the [low carb macro calculator](/low-carb-macro-calculator) as you leave Phase 1.',
        ],
      },
      {
        heading: 'The four phases at a glance',
        bullets: [
          'Phase 1 (Induction): ~20g net carbs — foundation foods only (eggs, meat, leafy greens, oils, cheese in moderation)',
          'Phase 2 (Ongoing Weight Loss): add ~5g net carbs per week from nuts, seeds, berries, more vegetables',
          'Phase 3 (Pre-maintenance): widen further as you approach goal weight; slow the pace of loss',
          'Phase 4 (Lifetime Maintenance): your personal carb tolerance — the highest net carbs that keep results',
        ],
        paragraphs: [
          'Write down the phase and the current carb budget. Vague “I’m doing Atkins” without a number is how people stall or overshoot.',
        ],
      },
      {
        heading: 'When to advance (and when to stay)',
        paragraphs: [
          'Advance when hunger is manageable, energy is stable, and weight trend is still downward (or maintenance is holding). Stay or drop back a phase if cravings roar back, sleep collapses, or the scale jumps and stays up for two weeks.',
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
          'Some people do for therapeutic reasons under medical care. Most advance to Phase 2 once cravings stabilize and weight loss is on track, then find a higher personal carb limit that still works.',
      },
      {
        question: 'Is Atkins the same as keto?',
        answer:
          'Induction is very similar to strict keto (~20g net carbs). Atkins explicitly plans carb reintroduction; many keto approaches stay low indefinitely. Choose the structure you can follow for years, not weeks. Day-one numbers: [keto macro calculator](/keto-macro-calculator).',
      },
      {
        question: 'What if I stall in Phase 2?',
        answer:
          'Check portions of nuts and dairy first — easy to overeat. Confirm net carbs with labels, tighten back toward Phase 1 for 1–2 weeks, then re-expand more slowly. If the scale is the issue, refresh calories with the [TDEE calorie calculator](/tdee-calorie-calculator) before blaming carbs alone.',
      },
    ],
  },
  {
    slug: 'pcos-and-low-carb',
    category: 'insulin-resistance',
    title: 'PCOS and Low Carb — What the Research Suggests',
    description:
      'How insulin resistance links to PCOS symptoms, practical carb and protein starting points, cycle-aware fasting notes, and what low carb cannot replace.',
    readMinutes: 12,
    toolPath: '/pcos-low-carb-calculator',
    toolLabel: 'PCOS calculator',
    relatedGuideSlugs: ['net-carbs-for-insulin-resistance', 'intermittent-fasting-16-8-vs-18-6', 'protein-on-keto-and-low-carb'],
    relatedRecipeSlugs: ['salmon-avocado-poke-bowl', 'sheet-pan-chicken-thighs-cabbage', 'scrambled-eggs-spinach'],
    sections: [
      {
        heading: 'Insulin and PCOS — the connection people discuss',
        paragraphs: [
          'Polycystic ovary syndrome often travels with insulin resistance. Higher insulin can push androgen symptoms (acne, unwanted hair growth, irregular cycles) and make fat loss harder even when calories look “fine.” That is why many clinicians discuss lower-carb eating as one lever among others — medication, sleep, strength training, and cycle tracking included.',
          'This guide is educational, not a treatment plan. PCOS phenotypes differ. What helps one person may be too aggressive for another, especially around fertility goals or disordered-eating history.',
        ],
      },
      {
        heading: 'Practical nutrition starting points',
        bullets: [
          'Discuss targets with your OB/GYN or endocrinologist before large diet shifts',
          'Many low-carb PCOS plans start around 50g net carbs — see the [PCOS low carb calculator](/pcos-low-carb-calculator)',
          'Prefer stricter induction? Start with the [keto macro calculator](/keto-macro-calculator) (~20g), then loosen',
          'Optional calorie baseline — [TDEE calorie calculator](/tdee-calorie-calculator)',
          'Protein at every meal (roughly palm-sized) to blunt hunger and protect muscle',
          'Build plates around eggs, fish, poultry, leafy greens, olive oil, and berries in moderation',
          'Track cycles, energy, waist, and labs — not scale weight alone',
        ],
        paragraphs: [
          'Label literacy matters: sauces and “healthy” yogurts often hide the carbs that spike insulin. Practice with [how to read nutrition labels](/guides/how-to-read-nutrition-labels-net-carbs) and [net carbs for IR](/guides/net-carbs-for-insulin-resistance).',
        ],
      },
      {
        heading: 'Fasting and the menstrual cycle',
        paragraphs: [
          'Longer fasts are not mandatory for PCOS. If you use intermittent fasting, many women do better with shorter windows in the luteal phase and save 18–24 hour experiments for times of the cycle when energy is stronger — a theme Dr. Mindy Pelz emphasizes.',
          'Start with 13–16 hour overnight fasts only after low-carb meals feel sustainable. Read [16:8 vs 18:6](/guides/intermittent-fasting-16-8-vs-18-6) before jumping to OMAD or multi-day fasts.',
        ],
      },
      {
        heading: 'What to cook this week',
        paragraphs: [
          'Protein-forward, low-spike meals beat perfect macros. Try [scrambled eggs with spinach](/recipes/scrambled-eggs-spinach), [sheet-pan chicken thighs with cabbage](/recipes/sheet-pan-chicken-thighs-cabbage), or a [salmon avocado bowl](/recipes/salmon-avocado-poke-bowl). Browse the [dinner hub](/recipes/dinner) when you need variety without cereal bowls.',
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
          'Some women see improved cycle regularity as insulin improves. Others need additional treatment. Do not replace medical care with diet alone.',
      },
      {
        question: 'Is keto better than moderate low carb for PCOS?',
        answer:
          'Not always. Strict keto (~20g) can work for some; others do better near 50–75g with more vegetables and social flexibility. Choose the lowest carb level you can maintain while labs and symptoms trend the right way — with your clinician. Compare the [keto macro calculator](/keto-macro-calculator) and [PCOS low carb calculator](/pcos-low-carb-calculator).',
      },
      {
        question: 'Should I do long fasts for PCOS?',
        answer:
          'Usually not as a first tool. Stabilize meals and sleep first. Use shorter overnight fasts if helpful, and get medical clearance before 24h+ fasts — especially on glucose-lowering medication.',
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
          'Fasting lowers blood sugar and blood volume. That is useful metabolically — and dangerous when medications already push glucose or blood pressure down. Dr. Eric Westman warns that fasting while on insulin or sulfonylureas can cause severe hypoglycemia. Blood pressure drugs may need adjustment as sodium intake and weight change.',
          'Never stop or reduce prescriptions on your own. Many low-carb clinics use supervised programs with explicit medication tapering plans. This page is a briefing so you know what to ask — not a protocol to self-run.',
        ],
      },
      {
        heading: 'Medication categories and relative risk',
        bullets: [
          'Metformin: lower hypoglycemia risk alone — still discuss longer fasts with your prescriber',
          'Sulfonylureas (e.g. glipizide, glyburide): high hypoglycemia risk — dose changes often required before fasting',
          'Insulin: never attempt extended fasting without medical supervision and a monitoring plan',
          'SGLT2 inhibitors: dehydration and ketoacidosis risk — provider guidance is essential',
          'GLP-1 drugs: nausea and intake changes are common — coordinate any fasting experiments',
          'Blood pressure meds: dizziness on standing can worsen as sodium and volume drop',
        ],
        paragraphs: [
          'If you cannot name your medications and how they work, pause fasting plans until a pharmacist or clinician walks through them with you.',
        ],
      },
      {
        heading: 'Safer progression before long fasts',
        bullets: [
          'Stabilize low-carb eating for several weeks first (a common Dr. Boz-style approach)',
          'Start with 12–16 hour overnight windows — track how you feel, not just the clock',
          'Monitor glucose if your doctor recommends meters or CGM',
          'Use assisted fasting with sodium for anything near 24h+ only with clearance',
          'Break the fast immediately if you are shaky, confused, sweating heavily, or severely hypoglycemic',
        ],
        paragraphs: [
          'Pair this with [fasting with insulin resistance](/guides/fasting-with-insulin-resistance) and [electrolytes during fasting](/guides/electrolytes-during-fasting). Track windows on the [fasting clock](/fasting-clock) only after your care team agrees on the plan.',
        ],
      },
      {
        heading: 'Questions to ask your clinician',
        bullets: [
          'Which of my meds raise hypoglycemia risk during a fast?',
          'What glucose reading means I should eat immediately?',
          'Should I check ketones if I take an SGLT2 inhibitor?',
          'How should BP meds change if I lose weight or increase sodium for electrolytes?',
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
          'Sometimes — with approval and monitoring. It is still a medication-relevant change. Do not assume “everyone does IF” means it is safe for your prescription list.',
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
      'Prevent headaches and cramps during 16–72 hour fasts with sodium, potassium, and magnesium — Dr. Westman bouillon and Dr. Boz assisted-fasting notes.',
    readMinutes: 11,
    toolPath: '/extended-fasting-clock',
    toolLabel: 'Extended fasting clock',
    relatedGuideSlugs: ['water-fast-vs-assisted-fast', 'how-to-break-a-24-hour-fast', 'keto-flu-and-electrolytes'],
    relatedRecipeSlugs: ['break-fast-bone-broth-eggs', 'ginger-chicken-bone-broth-soup'],
    sections: [
      {
        heading: 'Why electrolytes drop when you fast',
        paragraphs: [
          'When insulin falls during fasting or strict low carb, kidneys excrete more sodium. Water follows. The result can be headaches, lightheadedness, heart palpitations, or leg cramps — symptoms people often blame on “willpower failure” or “fasting not working.”',
          'The same sodium shift shows up in the first week of keto (“keto flu”). Fixes overlap: see [keto flu and electrolytes](/guides/keto-flu-and-electrolytes). Fasting just compresses the timeline.',
        ],
      },
      {
        heading: 'What clinicians commonly recommend',
        bullets: [
          'Dr. Westman: bouillon or broth for sodium on assisted fasts',
          'Dr. Boz: salt water, magnesium, and potassium as needed — avoid caloric broth if you insist on strict water-only',
          'Plain water-only beyond ~24 hours raises electrolyte risk for many people — prefer assisted mode',
          'Black coffee/tea are common on assisted plans; cream and sweeteners break a true fast',
        ],
        paragraphs: [
          'Choose a mode deliberately. Compare [water fast vs assisted fast](/guides/water-fast-vs-assisted-fast) before you start the [extended fasting clock](/extended-fasting-clock).',
        ],
      },
      {
        heading: 'Practical daily targets (general adults)',
        bullets: [
          'Sodium: often 2–3g/day on low carb; more may be needed on longer assisted fasts — follow clinician guidance',
          'Potassium: food-first when eating; supplement only with medical advice (especially on BP meds or kidney disease)',
          'Magnesium: 200–400mg glycinate at night often helps sleep and cramps for many people',
          'Fluids: drink to thirst — chugging gallons of plain water without sodium can worsen cramps',
        ],
        paragraphs: [
          'If you take blood pressure medication, extra sodium and volume shifts are not DIY experiments. Ask before you double bouillon “because the internet said so.”',
        ],
      },
      {
        heading: 'Symptom → fix map',
        bullets: [
          'Headache / brain fog early in a fast: try sodium (salt water or bouillon on assisted plans)',
          'Leg cramps at night: magnesium + review sodium; check potassium strategy with a clinician if persistent',
          'Dizziness standing up: sit, hydrate with sodium, shorten the fast if it continues',
          'Severe chest pain, confusion, or fainting: stop fasting and seek urgent care',
        ],
        paragraphs: [
          'When the fast ends, refeed gently — [how to break a 24-hour fast](/guides/how-to-break-a-24-hour-fast) and [bone broth + eggs](/recipes/break-fast-bone-broth-eggs) are designed for that transition.',
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
          'Yes for a strict water-only fast — broth has calories and protein. On assisted plans, small amounts of bouillon are often used for sodium. Decide your rules before the clock starts.',
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
          'Most “low carb” mistakes happen in the grocery aisle, not the kitchen. A yogurt cup, salad dressing, or sausage link can look safe until you check serving size and added sugars. Learning three lines on a US Nutrition Facts panel — total carbohydrate, dietary fiber, and sugar alcohols — lets you estimate net carbs in under a minute.',
          'Net carbs are not a FDA-required line. They are a shopper convention used on keto and low-carb plans. Different people treat maltitol, allulose, and soluble corn fiber differently. When a product is unclear, be conservative: count more carbs rather than fewer, especially if you have diabetes or take glucose-lowering medication.',
        ],
      },
      {
        heading: 'Label lines to find',
        bullets: [
          'Serving size — the math only works if you eat that amount',
          'Total Carbohydrate (top carbohydrate line)',
          'Dietary Fiber (indented below — usually subtract fully on US labels)',
          'Sugar Alcohols (if listed — erythritol often subtracted fully; maltitol often partially counted)',
          'Total Sugars / Added Sugars — context for how “sweet” the product is',
        ],
        paragraphs: [
          'Standard estimate: net carbs ≈ total carbs − fiber − sugar alcohols (with judgment on which sugar alcohols you fully subtract). Enter the numbers in our [net carb calculator](/net-carb-calculator) so you are not doing mental math with a cart behind you.',
        ],
      },
      {
        heading: 'Label math worked example',
        paragraphs: [
          'Example: Total carbs 15g, fiber 8g, erythritol 4g → net carbs ≈ 3g on most keto plans. If you eat two servings, double everything before you celebrate.',
          'Example with a trap: a “keto” bar lists 20g total carbs, 10g fiber, 8g maltitol. Some people count maltitol at half impact (~4g), so estimated net might be closer to 6g than 2g. If your glucose monitor reacts, trust the meter over the marketing.',
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
          'If you are just starting, spend one shopping trip only on label practice: pick five packaged foods you already buy and run each through the calculator. That single habit prevents weeks of accidental carb creep.',
        ],
      },
    ],
    faqs: [
      {
        question: 'Do I subtract all fiber?',
        answer:
          'On US labels, dietary fiber is usually subtracted from total carbs for net carb counting on keto plans. Some people still notice glucose effects from certain fibers — use a meter if you need precision.',
      },
      {
        question: 'What about allulose?',
        answer:
          'Allulose is often listed under sugars or separately and is commonly treated as contributing few net carbs. Confirm how it appears on your specific label and how your clinician wants you to count it.',
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
          'Carb restriction lowers insulin, but protein is what preserves muscle during weight loss and keeps meals satisfying. Too little protein on an aggressive deficit costs lean mass; chasing extremely high protein is rarely required for most people who are not athletes.',
          'Our [keto macro calculator](/keto-macro-calculator) defaults to about 0.8g protein per pound of body weight — a common starting point in many low-carb programs. If you also need a calorie ceiling, run the [TDEE calorie calculator](/tdee-calorie-calculator) with the same stats first, or use the [weight-loss macro calculator](/weight-loss-macro-calculator) for a deficit layered on top.',
        ],
      },
      {
        heading: 'Starting targets by situation',
        bullets: [
          'General low carb / keto: ~0.7–0.9g per pound of body weight (or goal weight if obese — ask your clinician)',
          'Resistance training: stay toward the upper end',
          'Sedentary fat loss: moderate protein is often enough if meals are consistent',
          'Older adults: slightly higher protein often helps preserve muscle',
          'Kidney disease: your medical team sets limits — do not self-prescribe high protein',
        ],
        paragraphs: [
          'Re-run macros when weight drops 10–15 lbs. Absolute protein grams can scale with current (or target) body weight so you are not stuck on day-one numbers forever. Refresh [TDEE](/tdee-calorie-calculator) at the same time so deficit targets stay realistic.',
        ],
      },
      {
        heading: 'What a protein-forward day looks like',
        paragraphs: [
          'Think meals, not shakes by default: eggs at breakfast, fish or chicken at lunch, a palm of meat or cottage cheese at dinner. Browse [breakfast recipes](/recipes/breakfast) and [dinner recipes](/recipes/dinner) for plates that already lean protein-first.',
          'Packaged “protein bars” can hide maltitol and fiber tricks. Verify with the [net carb calculator](/net-carb-calculator) before they become a daily habit.',
        ],
      },
      {
        heading: 'Protein, ketosis, and fasting',
        paragraphs: [
          'For most people, moderate protein does not block ketosis the way dietary carbs do. If you are experimenting clinically, measure — do not guess from social media anecdotes.',
          'Protein breaks a true fast. During the eating window, prioritize it; during the fast, stick to your water or assisted rules. See [best first meal after fasting](/guides/best-first-meal-after-fasting) for refeed composition.',
        ],
      },
    ],
    faqs: [
      {
        question: 'Can too much protein kick me out of ketosis?',
        answer:
          'For most people, moderate protein does not prevent ketosis the way carbs do. Individual response varies — track ketones if you are experimenting, not guessing.',
      },
      {
        question: 'Should I eat protein during a fast?',
        answer:
          'A true fast means no calories — protein breaks the fast. Break fasts with protein-forward meals; see [best first meal after fasting](/guides/best-first-meal-after-fasting).',
      },
      {
        question: 'Is plant protein okay on low carb?',
        answer:
          'Yes if net carbs fit your budget — tofu, tempeh, and some seitan products vary widely. Read labels carefully; beans and lentils raise carbs faster than animal proteins.',
      },
      {
        question: 'How do protein grams fit with TDEE calories?',
        answer:
          'Set total calories with the [TDEE calorie calculator](/tdee-calorie-calculator), lock protein in the [keto macro calculator](/keto-macro-calculator), then fill remaining calories with fat while holding net carbs at your plan’s limit.',
      },
    ],
  },
  {
    slug: 'keto-flu-and-electrolytes',
    category: 'metabolic-health',
    title: 'Keto Flu — Symptoms, Electrolytes & Fixes',
    description:
      'Why headaches and fatigue happen in the first week of low carb, which electrolytes to replenish, day-by-day expectations, and when symptoms need medical attention.',
    readMinutes: 10,
    toolPath: '/keto-macro-calculator',
    toolLabel: 'Keto macro calculator',
    relatedGuideSlugs: ['electrolytes-during-fasting', 'getting-started-keto-low-carb', 'protein-on-keto-and-low-carb'],
    sections: [
      {
        heading: 'What “keto flu” usually is',
        paragraphs: [
          'The first 3–7 days of strict low carb often bring headaches, fatigue, irritability, and muscle cramps. Much of this is a sodium and water shift — insulin drops, kidneys excrete sodium, and blood volume dips. It is not a virus and it is not proof the diet “isn’t for you.”',
          'Most people improve with electrolytes, sleep, and consistent low-carb meals — not by bouncing back to sugar. Pair this guide with [getting started keto](/guides/getting-started-keto-low-carb) so the first two weeks have a plan.',
        ],
      },
      {
        heading: 'Electrolyte fixes that help',
        bullets: [
          'Sodium: bouillon, pickle juice, or salt on food — especially if dizzy standing up',
          'Potassium: leafy greens and avocado first; supplements only if a provider approves',
          'Magnesium: glycinate or citrate at night for cramps and sleep',
          'Water: drink to thirst — plain water without sodium can worsen cramps',
          'Protein: do not under-eat protein while carbs crash — see [protein on keto](/guides/protein-on-keto-and-low-carb)',
        ],
        paragraphs: [
          'Fasters use the same toolkit — [electrolytes during fasting](/guides/electrolytes-during-fasting) covers assisted vs water-only details.',
        ],
      },
      {
        heading: 'Day-by-day expectations',
        bullets: [
          'Days 1–2: carb withdrawal and salt loss feel loud — keep meals simple and salty',
          'Days 3–5: energy often dips then stabilizes if electrolytes are on point',
          'Days 6–14: hunger usually falls; refine macros with the [keto macro calculator](/keto-macro-calculator)',
        ],
        paragraphs: [
          'If you take blood pressure medication, tell your clinician you are changing sodium and carbs — doses sometimes need adjustment as volume changes.',
        ],
      },
    ],
    faqs: [
      {
        question: 'How long does keto flu last?',
        answer:
          'Most people feel better within a week if electrolytes are addressed. Persistent severe symptoms warrant talking to a clinician — especially on blood pressure medication.',
      },
      {
        question: 'Should I quit keto if I feel awful day two?',
        answer:
          'Try sodium and magnesium first. If symptoms are severe, chest pain, or confusion — seek medical care immediately, not internet advice.',
      },
      {
        question: 'Does “dirty keto” prevent keto flu?',
        answer:
          'No. Electrolyte shifts happen from low insulin, not from whether your cheese is artisanal. Whole foods help long-term health; salt and magnesium fix most early flu symptoms.',
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
    toolPath: '/low-carb-macro-calculator',
    toolLabel: 'Low carb macro calculator',
    relatedGuideSlugs: ['getting-started-keto-low-carb', 'protein-on-keto-and-low-carb', 'how-to-read-nutrition-labels-net-carbs'],
    sections: [
      {
        heading: 'Track long enough to learn, not forever',
        paragraphs: [
          'Two to four weeks of logging teaches portion sizes and the hidden carbs in sauces, drinks, and “healthy” snacks. The goal is pattern recognition — not a lifetime of barcode scanning at every meal.',
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
          'Stop counting and work with a dietitian on hunger-fullness cues. Low carb should reduce obsession for many people — if it increases it, change approach.',
      },
      {
        question: 'Should I track on maintenance forever?',
        answer:
          'Usually no. Spot-check for a few days after holidays or travel. Continuous logging is a teaching tool, not a personality trait.',
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

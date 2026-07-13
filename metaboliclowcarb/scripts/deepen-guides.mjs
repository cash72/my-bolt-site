#!/usr/bin/env node
/** One-time deepen pass: extra section + internal links + readMinutes per guide slug. */
import fs from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';

const GUIDES_PATH = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '../src/lib/guides/guides.ts');

const PATCHES = [
  {
    slug: 'how-to-break-a-24-hour-fast',
    readMinutes: 9,
    insertBefore: "        question: 'Can I break a 24-hour fast with fruit?'",
    section: `      {
        heading: 'Sample first meals after 24 hours',
        paragraphs: [
          'Keep protein moderate and carbs low: scrambled eggs with spinach, chicken salad lettuce cups, or baked salmon with broccoli. See our [best first meal guide](/guides/best-first-meal-after-fasting) and related [break-fast recipes](/recipes/scrambled-eggs-spinach).',
          'Use the [fasting clock](/fasting-clock) to track your window and plan refeed timing.',
        ],
      },
`,
  },
  {
    slug: 'intermittent-fasting-16-8-vs-18-6',
    readMinutes: 9,
    insertBefore: "        question: 'Will IF slow my metabolism?'",
    section: `      {
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
`,
  },
  {
    slug: 'water-fast-vs-assisted-fast',
    readMinutes: 9,
    insertBefore: "        question: 'Does bouillon break a fast?'",
    section: `      {
        heading: 'Electrolyte strategy by fast type',
        paragraphs: [
          'Water-only fasts beyond 24 hours need sodium, potassium, and magnesium planning — see [electrolytes during fasting](/guides/electrolytes-during-fasting). Assisted fasts with bouillon or bone broth are gentler for beginners.',
          'Use the [water fast timer](/water-fast-timer) or [extended fasting clock](/extended-fasting-clock) depending on your protocol.',
        ],
      },
`,
  },
  {
    slug: 'fasting-with-insulin-resistance',
    readMinutes: 10,
    insertBefore: "        question: 'Why is my fasting glucose high on keto?'",
    section: `      {
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
`,
  },
  {
    slug: 'dr-boz-ratio-explained',
    readMinutes: 9,
    insertBefore: "        question: 'Do I need a meter to use this site?'",
    section: `      {
        heading: 'Using the ratio in practice',
        paragraphs: [
          'Measure fasting glucose (mg/dL) and blood ketones (mmol/L). Divide glucose by 18, then divide by ketones for the Dr. Boz ratio. Lower ratios generally indicate deeper metabolic flexibility.',
          'Enter values in our [Dr. Boz ratio calculator](/dr-boz-ratio-calculator). Pair with [net carb tracking](/net-carb-calculator) to see how meals move your numbers.',
        ],
      },
`,
  },
  {
    slug: 'net-carbs-for-insulin-resistance',
    readMinutes: 9,
    insertBefore: "        question: 'Should I subtract all sugar alcohols?'",
    section: `      {
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
`,
  },
  {
    slug: 'best-first-meal-after-fasting',
    readMinutes: 8,
    insertBefore: "        question: 'Can I break a fast with a protein shake?'",
    section: `      {
        heading: 'Recipe picks by fast length',
        paragraphs: [
          'After 16–18 hour IF: normal low-carb meal size is fine. After 24+ hours: half-portion protein meals — [scrambled eggs](/recipes/scrambled-eggs-spinach), [cottage cheese](/recipes/cottage-cheese-cucumber), or [bone broth eggs](/recipes/break-fast-bone-broth-eggs).',
          'Full protocol in [how to break a 24-hour fast](/guides/how-to-break-a-24-hour-fast).',
        ],
      },
`,
  },
  {
    slug: 'visceral-fat-metabolic-health',
    readMinutes: 9,
    insertBefore: "        question: 'Can you lose visceral fat without losing weight?'",
    section: `      {
        heading: 'Measuring metabolic progress',
        paragraphs: [
          'Waist circumference, fasting insulin, triglycerides, and liver enzymes often improve before scale weight drops. Use our [metabolic health calculator](/metabolic-health-calculator) for waist-to-height context.',
          'Low carb plus [time-restricted eating](/guides/intermittent-fasting-16-8-vs-18-6) targets visceral fat preferentially in many studies — consistency beats extreme restriction.',
        ],
      },
`,
  },
  {
    slug: 'fatty-liver-low-carb',
    readMinutes: 9,
    insertBefore: "        question: 'Is keto safe with fatty liver?'",
    section: `      {
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
`,
  },
  {
    slug: 'getting-started-keto-low-carb',
    readMinutes: 9,
    insertBefore: "        question: 'Do I need to count calories?'",
    section: `      {
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
`,
  },
  {
    slug: 'atkins-phases-explained',
    readMinutes: 8,
    insertBefore: "        question: 'Can I stay on Phase 1 forever?'",
    section: `      {
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
`,
  },
  {
    slug: 'pcos-and-low-carb',
    readMinutes: 9,
    insertBefore: "        question: 'Will low carb regulate my period?'",
    section: `      {
        heading: 'PCOS nutrition priorities',
        paragraphs: [
          'Lower net carbs reduce insulin spikes that drive androgen symptoms in many women with PCOS. Start with [PCOS low carb calculator](/pcos-low-carb-calculator) targets — often 50–75g net carbs.',
          'Women should align longer fasts with cycle phase — see [intermittent fasting 16:8 vs 18:6](/guides/intermittent-fasting-16-8-vs-18-6) for gender-specific notes.',
        ],
      },
`,
  },
  {
    slug: 'fasting-on-diabetes-medications',
    readMinutes: 10,
    insertBefore: "        question: 'Can I fast on metformin?'",
    section: `      {
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
`,
  },
  {
    slug: 'electrolytes-during-fasting',
    readMinutes: 8,
    insertBefore: "        question: 'Can I use zero-calorie electrolyte powders?'",
    section: `      {
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
`,
  },
  {
    slug: 'how-to-read-nutrition-labels-net-carbs',
    readMinutes: 8,
    insertBefore: "        question: 'Do I subtract all fiber?'",
    section: `      {
        heading: 'Label math worked example',
        paragraphs: [
          'Total carbs 15g, fiber 8g, erythritol 4g → net carbs ≈ 3g on most keto plans. Enter each line in our [net carb calculator](/net-carb-calculator).',
          'For insulin resistance targets, see [net carbs for IR](/guides/net-carbs-for-insulin-resistance) and verify sugar alcohol rules per product.',
        ],
      },
`,
  },
];

let content = await fs.readFile(GUIDES_PATH, 'utf8');

for (const { slug, readMinutes, insertBefore, section } of PATCHES) {
  const slugRe = new RegExp(`(slug: '${slug}',[\\s\\S]*?readMinutes: )\\d+`);
  if (!slugRe.test(content)) {
    console.error(`Missing slug or readMinutes: ${slug}`);
    process.exit(1);
  }
  content = content.replace(slugRe, `$1${readMinutes}`);

  const faqIdx = content.indexOf(insertBefore);
  if (faqIdx === -1) {
    console.error(`Missing FAQ anchor for ${slug}`);
    process.exit(1);
  }
  const sectionsClose = content.lastIndexOf('    ],', faqIdx);
  const before = content.lastIndexOf('    sections: [', faqIdx);
  if (sectionsClose === -1 || sectionsClose < before) {
    console.error(`Missing sections close for ${slug}`);
    process.exit(1);
  }
  content = content.slice(0, sectionsClose) + section + content.slice(sectionsClose);
  console.log(`Deepened ${slug}`);
}

await fs.writeFile(GUIDES_PATH, content);
console.log('guides.ts updated.');

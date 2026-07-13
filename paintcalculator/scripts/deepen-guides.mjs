#!/usr/bin/env node
/** One-time deepen pass: extra section + internal links + readMinutes per guide slug. */
import fs from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';

const GUIDES_PATH = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '../src/lib/guides/guides.ts');

const PATCHES = [
  {
    slug: 'how-much-paint-for-a-room',
    readMinutes: 9,
    insertBefore: "        question: 'How much paint for a 12×12 room?'",
    section: `      {
        heading: 'Worked example: 12×14 bedroom',
        paragraphs: [
          'Walls: perimeter 52 ft × 8 ft ceiling = 416 sq ft. Minus one door (20) and one window (15) → 381 sq ft. Two coats at 350 sq ft/gallon = 762 ÷ 350 ≈ 2.2 gallons — buy 3 gallons finish paint.',
          'Run your dimensions in the [room paint calculator](/room-paint-calculator). See [how many coats](/guides/how-many-coats-of-paint) and [primer guide](/guides/primer-before-painting) before checkout.',
        ],
      },
`,
  },
  {
    slug: 'how-many-coats-of-paint',
    readMinutes: 8,
    insertBefore: "        question: 'Does primer count as a coat?'",
    section: `      {
        heading: 'Coat planning checklist',
        bullets: [
          'New drywall: primer + 2 finish coats',
          'Color change light over dark: primer + 2 finish',
          'Same-color refresh: 1–2 coats after cleaning',
          'Ceiling flat white: often 1–2 coats',
          'Enter actual coat count in the [paint calculator](/how-much-paint-do-i-need)',
        ],
        paragraphs: [],
      },
`,
  },
  {
    slug: 'paint-coverage-per-gallon',
    readMinutes: 8,
    insertBefore: "        question: 'Is 400 sq ft per gallon realistic?'",
    section: `      {
        heading: 'Adjust coverage for your wall type',
        bullets: [
          'Smooth primed drywall: use label high end (~400 sq ft)',
          'Orange peel texture: use ~300 sq ft/gallon',
          'Unprimed repairs showing through: lower effective coverage',
          'Spray vs brush: spray can list higher — brush/roll uses more',
        ],
        paragraphs: [
          'Use the [coverage calculator](/paint-coverage-calculator) with your measured sq ft and realistic coverage number — not the marketing maximum.',
        ],
      },
`,
  },
  {
    slug: 'primer-before-painting',
    readMinutes: 10,
    insertBefore: "        question: 'Do I need primer on already painted walls?'",
    section: `      {
        heading: 'Primer shopping by scenario',
        bullets: [
          'New drywall: PVA or drywall primer — seals paper and joint compound',
          'Stain blocking: shellac or oil primer for smoke, water, tannin',
          'Dark-to-light: tinted gray primer reduces finish coats',
          'Masonry: masonry primer before interior block walls',
        ],
        paragraphs: [
          'Buy primer gallons from one coat of wall area — separate from [finish paint totals](/guides/how-much-paint-for-a-room).',
        ],
      },
`,
  },
  {
    slug: 'how-to-repair-walls-before-painting',
    readMinutes: 10,
    insertBefore: "        question: 'How long before I can paint patched walls?'",
    section: `      {
        heading: 'Repair sequence before paint',
        bullets: [
          '1. Fix structural cracks and loose tape',
          '2. Fill holes — see [drywall patch guide](/guides/how-to-patch-drywall-holes)',
          '3. Sand flush when dry',
          '4. Prime patches (spot prime or whole wall)',
          '5. Finish paint — 2 coats typical',
        ],
        paragraphs: [],
      },
`,
  },
  {
    slug: 'how-to-patch-drywall-holes',
    readMinutes: 9,
    insertBefore: "        question: 'Why does my patch show through paint?'",
    section: `      {
        heading: 'Patch size quick reference',
        bullets: [
          'Nail holes: spackle, finger wipe, sand — no mesh needed',
          '1–3 inch: lightweight spackle or patch kit',
          '3–6 inch: mesh patch + joint compound, feather 12 inches',
          'Larger: California patch or new drywall insert',
        ],
        paragraphs: [
          'After patching, follow [wall prep steps](/guides/how-to-prep-walls-for-painting) before opening the paint can.',
        ],
      },
`,
  },
  {
    slug: 'how-to-prep-walls-for-painting',
    readMinutes: 10,
    insertBefore: "        question: 'Do I need to wash walls before painting?'",
    section: `      {
        heading: 'Prep day supply list',
        bullets: [
          'TSP or degreaser for kitchen/bath walls',
          'Patch compound, sandpaper 120–220 grit',
          'Painter tape — release within 24 hours on fresh paint',
          'Drop cloths, caulk for trim gaps',
          'Shop vac for dust after sanding',
        ],
        paragraphs: [
          'Complete [repairs](/guides/how-to-repair-walls-before-painting) and [primer](/guides/primer-before-painting) before estimating gallons in the [room calculator](/room-paint-calculator).',
        ],
      },
`,
  },
  {
    slug: 'how-to-paint-a-room-step-by-step',
    readMinutes: 11,
    insertBefore: "        question: 'Cut in or roll first?'",
    section: `      {
        heading: 'Weekend timeline',
        bullets: [
          'Day 1 AM: prep, patch, sand, vacuum',
          'Day 1 PM: prime if needed — dry overnight',
          'Day 2 AM: ceiling cut-in + roll',
          'Day 2 PM: walls coat 1 — dry per can',
          'Day 3: walls coat 2, remove tape, touch-ups',
        ],
        paragraphs: [
          'Order enough paint using [how much paint for a room](/guides/how-much-paint-for-a-room) before Day 2 — running out mid-wall shows lap marks.',
        ],
      },
`,
  },
  {
    slug: 'painting-over-dark-colors',
    readMinutes: 8,
    insertBefore: "        question: 'Does gray primer work under any color?'",
    section: `      {
        heading: 'Dark-to-light coat strategy',
        paragraphs: [
          'Step 1: clean walls. Step 2: bond primer or stain-blocking primer if needed. Step 3: tinted primer toward your new color (gray for whites, beige-tint for tans). Step 4: two finish coats minimum.',
          'Budget extra gallons — see [coat planning](/guides/how-many-coats-of-paint) and run totals in the [paint calculator](/how-much-paint-do-i-need).',
        ],
      },
`,
  },
  {
    slug: 'how-to-fix-peeling-paint',
    readMinutes: 9,
    insertBefore: "        question: 'Can I paint over peeling paint?'",
    section: `      {
        heading: 'Peeling repair workflow',
        bullets: [
          'Scrape all loose paint to sound edge',
          'Sand feather edge — no ridge under new paint',
          'Prime bare substrate (shellac if stain present)',
          'Two finish coats — match [sheen](/guides/interior-paint-sheen-guide) to adjacent wall',
          'Fix moisture source before repainting bath areas',
        ],
        paragraphs: [],
      },
`,
  },
  {
    slug: 'how-to-remove-wallpaper-before-painting',
    readMinutes: 9,
    insertBefore: "        question: 'Can I paint over wallpaper instead of removing?'",
    section: `      {
        heading: 'Removal methods',
        bullets: [
          'Score vinyl surface, apply steamer, scrape — most reliable',
          'Liquid stripper for stubborn glue — ventilate well',
          'Dry strip (peelable top layer) if wallpaper is strippable type',
          'Sand remaining glue residue — primer blocks yellowing',
        ],
        paragraphs: [
          'After removal, skim damaged areas and follow [wall prep](/guides/how-to-prep-walls-for-painting) before paint.',
        ],
      },
`,
  },
  {
    slug: 'interior-paint-sheen-guide',
    readMinutes: 8,
    insertBefore: "        question: 'Can I use the same sheen on walls and trim?'",
    section: `      {
        heading: 'Room-by-room sheen picks',
        bullets: [
          'Ceilings: flat or matte — hides imperfections',
          'Bedrooms/living: eggshell or matte',
          'Kitchen/bath/hall: satin — washable',
          'Trim/doors: semi-gloss — durable, wipeable',
          'Kids rooms: satin on walls, semi-gloss on trim',
        ],
        paragraphs: [
          'Match sheen on repairs — flashing occurs when patch is flat and wall is satin. Buy quarts from the [room paint calculator](/room-paint-calculator) totals.',
        ],
      },
`,
  },
  {
    slug: 'how-to-estimate-wallpaper-rolls',
    readMinutes: 9,
    insertBefore: "        question: 'How many rolls for a 10×12 room?'",
    section: `      {
        heading: 'Roll math worked example',
        paragraphs: [
          'Accent wall 10×8 ft = 80 sq ft. Roll covers 28 sq ft usable (after pattern waste). 80 ÷ 28 ≈ 2.9 → buy 3 rolls. Add 10% for beginners.',
          'Use the [wallpaper calculator](/wallpaper-calculator) for multiple walls and pattern repeat — see [pattern repeat guide](/guides/wallpaper-pattern-repeat).',
        ],
      },
`,
  },
  {
    slug: 'wallpaper-pattern-repeat',
    readMinutes: 8,
    insertBefore: "        question: 'What if my label says no repeat?'",
    section: `      {
        heading: 'Repeat types and waste',
        bullets: [
          'Random match / free match: lowest waste — drops align anywhere',
          'Straight match: pattern aligns horizontally — add repeat to strip length',
          'Drop match: diagonal repeat — highest waste, plan 15–25% extra',
          'Large repeat (12+ inches): fewer strips per roll — buy extra',
        ],
        paragraphs: [
          'Enter repeat inches in the [wallpaper calculator](/wallpaper-calculator) — our [rolls guide](/guides/how-to-estimate-wallpaper-rolls) explains usable sq ft per bolt.',
        ],
      },
`,
  },
  {
    slug: 'accent-wall-wallpaper-tips',
    readMinutes: 7,
    insertBefore: "        question: 'Can I use wallpaper on just one wall?'",
    section: `      {
        heading: 'Accent wall planning',
        bullets: [
          'Choose wall with least doors/windows — fewer cuts',
          'Bold pattern: one wall only — see [accent calculator](/accent-wall-wallpaper-calculator)',
          'Align focal point (headboard, TV) with pattern center',
          'Buy all rolls same dye lot — check bolt numbers',
          'Keep 1 spare roll for future repairs',
        ],
        paragraphs: [],
      },
`,
  },
  {
    slug: 'how-much-fence-stain-do-i-need',
    readMinutes: 8,
    insertBefore: "        question: 'Do I stain both sides of a fence?'",
    section: `      {
        heading: 'Fence stain quick math',
        paragraphs: [
          '100 linear ft × 6 ft height = 600 sq ft both sides (if staining front and back). One coat at 150 sq ft/gallon ≈ 4 gallons. Two coats → 8 gallons.',
          'Use the [fence stain calculator](/fence-stain-calculator) with picket vs panel style and [two-coat guide](/guides/exterior-stain-two-coats) for exterior projects.',
        ],
      },
`,
  },
  {
    slug: 'deck-stain-coverage',
    readMinutes: 8,
    insertBefore: "        question: 'Oil vs water-based deck stain coverage?'",
    section: `      {
        heading: 'Deck sq ft examples',
        bullets: [
          '10×12 deck surface: 120 sq ft',
          '12×20 deck: 240 sq ft',
          'Add railings and steps separately — lots of edge footage',
          'New wood may need 2 coats — see [exterior two-coat guide](/guides/exterior-stain-two-coats)',
        ],
        paragraphs: [
          'Run dimensions in the [deck stain calculator](/deck-stain-calculator) with transparent vs solid stain coverage rates.',
        ],
      },
`,
  },
  {
    slug: 'exterior-stain-two-coats',
    readMinutes: 8,
    insertBefore: "        question: 'Paint vs stain on exterior — same calculator?'",
    section: `      {
        heading: 'Two-coat exterior planning',
        bullets: [
          'Transparent/semi-transparent: often 2 coats first year, 1 coat maintenance',
          'Solid stain: 2 coats for uniform color on weathered wood',
          'Double gallons in calculator when product specifies 2 coats wet-on-wet or 24h apart',
          'Fence, deck, and siding — use matching product line for compatibility',
        ],
        paragraphs: [
          'Estimate total gallons with the [fence](/fence-stain-calculator) or [deck stain calculator](/deck-stain-calculator) and toggle coat count.',
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

// Make paragraphs optional in types — handled separately
await fs.writeFile(GUIDES_PATH, content);
console.log('guides.ts updated.');

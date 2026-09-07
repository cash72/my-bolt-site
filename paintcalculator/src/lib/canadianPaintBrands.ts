/** Typical Canadian retail paint brands and label coverage ranges.
 *  Numbers are planning defaults from published can ranges — never a substitute for the Coverage line on the product you buy.
 *  This site is not affiliated with any manufacturer or retailer.
 */

export const BRAND_AFFILIATION_DISCLAIMER =
  'Brand names appear only so you can match typical Canadian label coverage. Paint Calculator is an independent tool — not affiliated with, endorsed by, or sponsored by Behr, Benjamin Moore, Sherwin-Williams, Cloverdale Paint, Dulux, Sico, Beauti-Tone, CIL, Valspar, PPG, The Home Depot, Lowe’s, Canadian Tire, Home Hardware, or their parent companies. Always use the Coverage figure printed on your can.';

export interface CanadianPaintBrand {
  slug: string;
  name: string;
  shortName: string;
  path: string;
  soldAt: string;
  region: string;
  typicalSqFtPerGallon: string;
  typicalHighSqFt: number;
  productLines: string;
  twelveByTwelveGallons: string;
  breadcrumbLabel: string;
  title: string;
  h1: string;
  description: string;
  quickAnswer: string;
  intro: string;
  faqs: { question: string; answer: string }[];
  editorial: { heading: string; paragraphs: string[] }[];
}

const GALLONS_12X12_AT = (sqFtPerGal: number) => {
  const walls = 384;
  const twoCoats = walls * 2;
  const raw = twoCoats / sqFtPerGal;
  return raw.toFixed(1);
};

export const CANADIAN_PAINT_BRANDS: CanadianPaintBrand[] = [
  {
    slug: 'benjamin-moore-paint-calculator',
    name: 'Benjamin Moore',
    shortName: 'Benjamin Moore',
    path: '/benjamin-moore-paint-calculator',
    soldAt: 'Independent Benjamin Moore retailers across Canada (not big-box exclusive)',
    region: 'Nationwide',
    typicalSqFtPerGallon: '350–400',
    typicalHighSqFt: 400,
    productLines: 'Regal Select, Aura, Advance (cabinets), Ultra Spec',
    twelveByTwelveGallons: '2–3 gallons',
    breadcrumbLabel: 'Benjamin Moore',
    title: 'Benjamin Moore Paint Calculator — Gallons for Your Room (Canada)',
    h1: 'Benjamin Moore Paint Calculator',
    description:
      'Free Benjamin Moore paint calculator for Canada: 12×12 room ≈ 2–3 gallons at 350–400 sq ft/gal. Enter room size and your Regal Select or Aura can label.',
    quickAnswer: `A 12×12 room with 8 ft ceilings is about 384 sq ft of walls. Two coats at a typical Benjamin Moore interior rate of ~400 sq ft/gallon is ${GALLONS_12X12_AT(400)} gallons — buy 2 gallons on smooth primed drywall, or 3 if you are covering a dark colour. Enter the Coverage number from your Benjamin Moore can below.`,
    intro:
      'Searching for a Benjamin Moore paint calculator? Enter room size, then set sq ft per gallon from your Regal Select, Aura, or Advance can. Canadian cans often list square metres per 3.78 L — convert or use the Coverage line as printed.',
    faqs: [
      {
        question: 'How much Benjamin Moore paint for a 12×12 room?',
        answer:
          'About 2 gallons of interior latex for walls with two coats when the can lists ~400 sq ft/gallon on smooth primed drywall. Texture or a big colour change: plan 3 gallons. Use the Coverage line on your specific Benjamin Moore product.',
      },
      {
        question: 'What is Benjamin Moore coverage per gallon?',
        answer:
          'Regal Select and Aura interiors commonly list around 350–400 sq ft per gallon (one coat, ideal surfaces). Advance for cabinets lists similar or slightly higher. Primer and exterior lines cover less. Always enter your can’s number.',
      },
      {
        question: 'Where is Benjamin Moore sold in Canada?',
        answer:
          'Independent Benjamin Moore retailers nationwide — not Home Depot or Canadian Tire exclusive. Take this gallon count to your local dealer with the product name from your can.',
      },
      {
        question: 'Is this an official Benjamin Moore tool?',
        answer:
          'No. This is an independent room calculator. We are not affiliated with Benjamin Moore. The math uses your measurements and the coverage printed on the can you buy.',
      },
    ],
    editorial: [
      {
        heading: 'Benjamin Moore gallons — worked example',
        paragraphs: [
          '12×12 room, 8 ft ceilings, walls only ≈ 384 sq ft. Two coats at 400 sq ft/gallon = 768 ÷ 400 ≈ 1.9 gallons. Smooth, primed, same-colour refresh: buy 2 gallons of Regal Select or Aura. Dark-to-light or orange-peel texture: use 350 sq ft/gallon and buy 3.',
          'Cabinet work with Advance is a different product — run this calculator once for walls and once for trim if sheens or labels differ.',
        ],
      },
      {
        heading: 'Canadian labels (sq ft vs m²)',
        paragraphs: [
          'Many Benjamin Moore Canada labels list spread rate in square metres per 3.78 L. Roughly 37 m² per gallon ≈ 400 sq ft. If the can shows only metric, convert or type the published imperial figure if both appear.',
          'Enter that number in project settings above. Do not use a generic internet average when the can is in your hand.',
        ],
      },
      {
        heading: 'Compare other Canadian brands',
        paragraphs: [
          'Same 12×12 math for [Sherwin-Williams](/sherwin-williams-paint-calculator), [Cloverdale](/cloverdale-paint-calculator), [Dulux](/dulux-paint-calculator), and [Behr at Home Depot](/how-much-paint-do-i-need). See the [Canadian brand coverage chart](/canadian-paint-coverage).',
        ],
      },
    ],
  },
  {
    slug: 'sherwin-williams-paint-calculator',
    name: 'Sherwin-Williams',
    shortName: 'Sherwin-Williams',
    path: '/sherwin-williams-paint-calculator',
    soldAt: 'Sherwin-Williams stores and authorized dealers across Canada',
    region: 'Nationwide',
    typicalSqFtPerGallon: '350–400',
    typicalHighSqFt: 350,
    productLines: 'Duration Home, SuperPaint, Cashmere, Emerald, Harmony',
    twelveByTwelveGallons: '2–3 gallons',
    breadcrumbLabel: 'Sherwin-Williams',
    title: 'Sherwin-Williams Paint Calculator — Room Gallons (Canada)',
    h1: 'Sherwin-Williams Paint Calculator',
    description:
      'Free Sherwin-Williams paint calculator for Canada. 12×12 walls ≈ 2–3 gallons at 350–400 sq ft/gal. Duration, SuperPaint, Cashmere — use your can label.',
    quickAnswer: `A 12×12 room (384 sq ft of walls) with two coats at a typical Sherwin-Williams interior rate of ~350 sq ft/gallon is about ${GALLONS_12X12_AT(350)} gallons — buy 3 gallons for most DIY colour changes. Smooth primed walls at 400 sq ft/gallon can finish closer to 2 gallons. Enter the Coverage line from your Duration, SuperPaint, or Cashmere can.`,
    intro:
      'Need a Sherwin-Williams paint calculator? Measure the room, then copy sq ft per gallon from your Duration Home, SuperPaint, Cashmere, or Emerald can. Company stores in Canada print coverage on the label — that number beats any website default.',
    faqs: [
      {
        question: 'How much Sherwin-Williams paint for a 12×12?',
        answer:
          'Plan 2–3 gallons for walls, two coats. SuperPaint and Duration interiors often list about 350–400 sq ft/gallon. Colour changes and texture use the low end — buy 3 gallons rather than stretching 2.',
      },
      {
        question: 'Does Sherwin-Williams have a room gallon calculator?',
        answer:
          'Sherwin-Williams publishes coverage on each product, not a DIY room-dimension tool like this. Enter your wall measurements here and the label number from your can. This site is not affiliated with Sherwin-Williams.',
      },
      {
        question: 'Duration vs SuperPaint vs Cashmere — same coverage?',
        answer:
          'Interior lines cluster around 350–400 sq ft/gallon on ideal walls, but each can is different. Emerald and Harmony have their own labels. Never mix products in one calculation — run primer and topcoat separately.',
      },
      {
        question: 'Where do I buy Sherwin-Williams in Canada?',
        answer:
          'Sherwin-Williams company stores nationwide and some independent dealers. Cloverdale Paint stores in Western Canada are part of the same company family but sell Cloverdale-branded products — use the [Cloverdale calculator](/cloverdale-paint-calculator) for those cans.',
      },
    ],
    editorial: [
      {
        heading: 'Sherwin-Williams 12×12 worked example',
        paragraphs: [
          '384 sq ft walls × 2 coats = 768 sq ft to cover. At 350 sq ft/gallon (a cautious SuperPaint / Duration DIY rate) that is 2.2 gallons — the store sells whole gallons, so buy 3. At a 400 sq ft/gallon label on smooth primed drywall, 1.9 gallons → buy 2 if you are confident in the surface.',
          'Pro accounts sometimes spray; spray overspray uses more product than this roller-based estimate. Add waste in the calculator if you are spraying.',
        ],
      },
      {
        heading: 'Company stores vs Cloverdale',
        paragraphs: [
          'Sherwin-Williams owns Cloverdale Paint. Cans labelled Cloverdale are a different product line sold mainly in Western Canada. Use [Cloverdale paint calculator](/cloverdale-paint-calculator) when that is what is in your tray.',
          'For other Canadian brands see the [coverage chart](/canadian-paint-coverage).',
        ],
      },
    ],
  },
  {
    slug: 'cloverdale-paint-calculator',
    name: 'Cloverdale Paint',
    shortName: 'Cloverdale',
    path: '/cloverdale-paint-calculator',
    soldAt: 'Cloverdale Paint stores (Western Canada) and selected dealers',
    region: 'Western Canada (BC, Alberta, Prairies) — limited elsewhere',
    typicalSqFtPerGallon: '350–400',
    typicalHighSqFt: 400,
    productLines: 'Premium interior latex, Evolve, exterior acrylics (check the specific can)',
    twelveByTwelveGallons: '2–3 gallons',
    breadcrumbLabel: 'Cloverdale',
    title: 'Cloverdale Paint Calculator — Western Canada Room Gallons',
    h1: 'Cloverdale Paint Calculator',
    description:
      'Free Cloverdale Paint calculator for Western Canada. 12×12 room ≈ 2–3 gallons at 350–400 sq ft/gal. Enter room size and your Cloverdale can label.',
    quickAnswer: `Cloverdale interior latex commonly lists around 400 sq ft per gallon on smooth walls. A 12×12 with 8 ft ceilings (384 sq ft walls, two coats) is about ${GALLONS_12X12_AT(400)} gallons — buy 2 gallons if primed and smooth, 3 with texture or a colour change. Copy Coverage from your Cloverdale can; Western Canada labels may show m² per 3.78 L.`,
    intro:
      'Cloverdale Paint is a Western Canada staple (BC, Alberta, Prairies). This calculator converts your room size into gallons using the spread rate on your Cloverdale can — not a national big-box default.',
    faqs: [
      {
        question: 'How much Cloverdale paint for a 12×12 room?',
        answer:
          'About 2–3 gallons of interior latex for two coats on walls. Start from 400 sq ft/gallon if that is what your can lists; drop to 350 for texture. Cloverdale stores can confirm the label on the product you choose.',
      },
      {
        question: 'Is Cloverdale the same as Sherwin-Williams?',
        answer:
          'Sherwin-Williams owns Cloverdale Paint, but the cans, names, and stores are Cloverdale-branded in the West. Use this page for Cloverdale labels and the [Sherwin-Williams calculator](/sherwin-williams-paint-calculator) for Duration / SuperPaint cans.',
      },
      {
        question: 'Can I buy Cloverdale in Ontario or Quebec?',
        answer:
          'Cloverdale retail is concentrated in Western Canada. If your can says Dulux, Sico, or Benjamin Moore, use those calculators instead. Coverage math is the same; the label number is not.',
      },
      {
        question: 'Is this an official Cloverdale tool?',
        answer:
          'No. Independent calculator, not affiliated with Cloverdale Paint or Sherwin-Williams. Enter the Coverage figure from your can.',
      },
    ],
    editorial: [
      {
        heading: 'Why Cloverdale gets its own page',
        paragraphs: [
          'Western Canadian DIYers search “Cloverdale paint calculator” the same way Ontario searches Behr or Dulux. Using a Home Depot coverage default on a Cloverdale can is sloppy — the label on your 3.78 L pail is the source of truth.',
          '12×12 walls at 400 sq ft/gallon, two coats ≈ 1.9 gallons. Buy 2; keep a quart for touch-ups if the store sells them in the same batch.',
        ],
      },
      {
        heading: 'Metric labels in Western stores',
        paragraphs: [
          'Canadian Cloverdale cans often list m² per 3.78 L. 37 m² ≈ 400 sq ft. Enter whichever unit the calculator field expects as square feet per gallon after converting, or use the imperial figure if both are printed.',
        ],
      },
    ],
  },
  {
    slug: 'dulux-paint-calculator',
    name: 'Dulux',
    shortName: 'Dulux',
    path: '/dulux-paint-calculator',
    soldAt: 'Canadian Tire, Home Hardware (selected), and Dulux/PPG retailers',
    region: 'Nationwide (very common at Canadian Tire)',
    typicalSqFtPerGallon: '350–400',
    typicalHighSqFt: 400,
    productLines: 'Dulux Diamond, Lifemaster, Dulux Ultra, Weathershield (exterior)',
    twelveByTwelveGallons: '2–3 gallons',
    breadcrumbLabel: 'Dulux',
    title: 'Dulux Paint Calculator — Canadian Tire Gallons (Canada)',
    h1: 'Dulux Paint Calculator',
    description:
      'Free Dulux paint calculator for Canada. 12×12 ≈ 2–3 gallons at 350–400 sq ft/gal. Diamond and Lifemaster — use the Coverage line on your Canadian Tire can.',
    quickAnswer: `Dulux Diamond and Lifemaster interiors in Canada often list about 400 sq ft per 3.78 L gallon on smooth primed walls. A 12×12 (384 sq ft walls, two coats) is ~${GALLONS_12X12_AT(400)} gallons — buy 2 gallons for a same-colour refresh, 3 for colour changes. Enter the number from your Dulux can, not a Behr default.`,
    intro:
      'Dulux is one of the easiest paints to find in Canada (Canadian Tire and other PPG retailers). This Dulux paint calculator uses your room size plus the spread rate on Diamond, Lifemaster, or Ultra — the same gallon math, your can’s coverage.',
    faqs: [
      {
        question: 'How much Dulux paint for a 12×12 room?',
        answer:
          'Typically 2–3 gallons of interior latex for two coats. Diamond / Lifemaster often list ~400 sq ft per gallon on ideal walls. Canadian Tire staff cannot override a short can — round up in this calculator before you check out.',
      },
      {
        question: 'Dulux vs Sico — are they the same?',
        answer:
          'Both are PPG brands in Canada. Dulux is the national consumer name (Canadian Tire). Sico is especially strong in Quebec. Use the [Sico calculator](/sico-paint-calculator) when that is the label on the can.',
      },
      {
        question: 'Does Dulux list coverage in m²?',
        answer:
          'Often yes. 37 m² per 3.78 L ≈ 400 sq ft/gallon. Convert before entering sq ft per gallon, or use the imperial line if the bilingual label shows both.',
      },
      {
        question: 'Is this an official Dulux or PPG calculator?',
        answer:
          'No. Independent tool, not affiliated with Dulux, PPG, or Canadian Tire.',
      },
    ],
    editorial: [
      {
        heading: 'Dulux at Canadian Tire — buy once',
        paragraphs: [
          'Running out mid-wall means a second trip and a possible batch mismatch. 768 sq ft of two-coat coverage ÷ 400 = 1.9 gallons. Buy 2 of Diamond or Lifemaster for smooth primed 12×12 walls; buy 3 if you skipped primer on a colour change.',
          'Weathershield and exterior products cover less per gallon — switch paint type in the calculator and read the exterior label, not the interior Diamond number.',
        ],
      },
      {
        heading: 'Other store brands',
        paragraphs: [
          'Home Depot cans are usually [Behr](/how-much-paint-do-i-need). Home Hardware is often [Beauti-Tone](/beauti-tone-paint-calculator). Lowe’s is often [Valspar](/valspar-paint-calculator). Chart: [Canadian paint coverage by brand](/canadian-paint-coverage).',
        ],
      },
    ],
  },
  {
    slug: 'sico-paint-calculator',
    name: 'Sico',
    shortName: 'Sico',
    path: '/sico-paint-calculator',
    soldAt: 'Sico/PPG retailers, hardware independents — especially Quebec',
    region: 'Nationwide, strongest in Quebec',
    typicalSqFtPerGallon: '350–430',
    typicalHighSqFt: 400,
    productLines: 'Sico Expert, Evolution, Mygo, exterior acrylics',
    twelveByTwelveGallons: '2–3 gallons',
    breadcrumbLabel: 'Sico',
    title: 'Sico Paint Calculator — Gallons (Quebec & Canada)',
    h1: 'Sico Paint Calculator',
    description:
      'Free Sico paint calculator for Quebec and Canada. 12×12 ≈ 2–3 gallons. Expert and Evolution — enter room size and the Coverage (m² or sq ft) on your Sico can.',
    quickAnswer: `Sico Expert / Evolution interiors often list around 37–40 m² per 3.78 L (about 400–430 sq ft/gallon) on ideal walls. A 12×12 with two coats is still a 2–3 gallon buy after waste — ${GALLONS_12X12_AT(400)} gallons raw at 400 sq ft/gallon. Use the figure on your Sico can, not a Dulux or Behr default.`,
    intro:
      'Sico is a PPG brand with deep roots in Quebec. This calculator turns room dimensions into gallons using your Expert, Evolution, or Mygo label. French and English cans both print a spread rate — that number is what you enter.',
    faqs: [
      {
        question: 'Combien de peinture Sico pour une pièce 12×12?',
        answer:
          'Environ 2 à 3 gallons (3,78 L) pour les murs, deux couches. Vérifiez le pouvoir couvrant sur le contenant Expert ou Evolution. This page is English-first; the math is the same on a French label.',
      },
      {
        question: 'Is Sico the same coverage as Dulux?',
        answer:
          'Both are PPG. Labels are not identical. If the can says Sico, use this page. If it says Dulux, use the [Dulux calculator](/dulux-paint-calculator).',
      },
      {
        question: 'Official Sico calculator?',
        answer:
          'No. Independent, not affiliated with Sico or PPG.',
      },
    ],
    editorial: [
      {
        heading: 'Sico 12×12 example',
        paragraphs: [
          '384 sq ft walls × 2 coats ÷ 400 sq ft/gallon ≈ 1.9 gallons. Buy 2 of Expert or Evolution for a clean primed room; buy 3 for new drywall without a dedicated primer coat.',
          'If the can lists 40 m² / 3.78 L (~430 sq ft), the raw math is closer to 1.8 gallons — you still buy 2 gallons at the counter.',
        ],
      },
    ],
  },
  {
    slug: 'beauti-tone-paint-calculator',
    name: 'Beauti-Tone',
    shortName: 'Beauti-Tone',
    path: '/beauti-tone-paint-calculator',
    soldAt: 'Home Hardware (exclusive in Canada)',
    region: 'Nationwide wherever Home Hardware is',
    typicalSqFtPerGallon: '350–400',
    typicalHighSqFt: 400,
    productLines: 'Designer Series, Neutral Base interiors, exterior acrylics',
    twelveByTwelveGallons: '2–3 gallons',
    breadcrumbLabel: 'Beauti-Tone',
    title: 'Beauti-Tone Paint Calculator — Home Hardware Gallons',
    h1: 'Beauti-Tone Paint Calculator',
    description:
      'Free Beauti-Tone paint calculator (Home Hardware Canada). 12×12 ≈ 2–3 gallons at 350–400 sq ft/gal. Enter room size and your Designer Series can label.',
    quickAnswer: `Beauti-Tone Designer Series interiors at Home Hardware typically list about 400 sq ft per gallon on smooth walls. A 12×12, two coats, is ~${GALLONS_12X12_AT(400)} gallons — buy 2 gallons if primed, 3 with texture. This is not a Behr or Dulux number; copy Coverage from your Beauti-Tone can.`,
    intro:
      'Beauti-Tone is Home Hardware’s paint brand. If that is what is in your tray, enter room size here and the sq ft per gallon from the Designer Series (or other) label — not a big-box default.',
    faqs: [
      {
        question: 'How much Beauti-Tone for a 12×12?',
        answer:
          'Usually 2–3 gallons for walls, two coats, at ~400 sq ft/gallon on primed drywall. Home Hardware can tint extra quarts from the same formula if you round up in this calculator first.',
      },
      {
        question: 'Beauti-Tone vs Dulux at Home Hardware?',
        answer:
          'Some Home Hardware locations also carry Dulux. Read the brand on the lid. Dulux cans belong on the [Dulux calculator](/dulux-paint-calculator).',
      },
      {
        question: 'Official Beauti-Tone tool?',
        answer:
          'No. Independent, not affiliated with Home Hardware or Beauti-Tone.',
      },
    ],
    editorial: [
      {
        heading: 'Home Hardware 12×12',
        paragraphs: [
          'Same 384 sq ft wall math as every other brand. Two coats at 400 sq ft/gallon ≈ 1.9 gallons. Buy 2 Designer Series gallons for a straightforward repaint. New drywall: primer plus two finish coats — run the calculator twice.',
        ],
      },
    ],
  },
  {
    slug: 'cil-paint-calculator',
    name: 'CIL',
    shortName: 'CIL',
    path: '/cil-paint-calculator',
    soldAt: 'Canadian Tire and selected retailers (AkzoNobel)',
    region: 'Nationwide',
    typicalSqFtPerGallon: '300–400',
    typicalHighSqFt: 375,
    productLines: 'CIL interior latex lines (check the specific Canadian Tire SKU)',
    twelveByTwelveGallons: '2–3 gallons',
    breadcrumbLabel: 'CIL',
    title: 'CIL Paint Calculator — Canadian Tire Room Gallons',
    h1: 'CIL Paint Calculator',
    description:
      'Free CIL paint calculator for Canada. 12×12 ≈ 2–3 gallons. Enter room size and the Coverage number on your CIL can — often next to Dulux at Canadian Tire.',
    quickAnswer: `CIL interiors in Canada often land around 300–400 sq ft per gallon depending on the line. Using 375 sq ft/gallon, a 12×12 with two coats is about ${GALLONS_12X12_AT(375)} gallons — buy 3 gallons unless your can clearly lists 400 sq ft and walls are smooth and primed. Read the CIL label, not the Dulux end cap beside it.`,
    intro:
      'CIL is a long-running Canadian name (AkzoNobel) still on Canadian Tire shelves beside Dulux. Coverage varies more by line than Dulux Diamond — this calculator uses whatever your CIL can actually prints.',
    faqs: [
      {
        question: 'How much CIL paint for a 12×12?',
        answer:
          'Plan 2–3 gallons. If the can lists 400 sq ft/gallon and walls are easy, 2 gallons can work. Many CIL interiors behave closer to 350 sq ft/gallon in DIY use — 3 gallons is the safer cart.',
      },
      {
        question: 'CIL vs Dulux at Canadian Tire?',
        answer:
          'Different brands on the same aisle. Dulux Diamond is a different label — use the [Dulux calculator](/dulux-paint-calculator) for those cans.',
      },
      {
        question: 'Official CIL calculator?',
        answer:
          'No. Independent, not affiliated with CIL or AkzoNobel.',
      },
    ],
    editorial: [
      {
        heading: 'CIL 12×12 example',
        paragraphs: [
          'At 375 sq ft/gallon, 768 ÷ 375 ≈ 2.0 gallons. That is the edge of a 2-gallon buy — if openings are few and walls are smooth. Add waste in the calculator; most DIYers should still walk out with 3 gallons rather than run short.',
        ],
      },
    ],
  },
  {
    slug: 'valspar-paint-calculator',
    name: 'Valspar',
    shortName: 'Valspar',
    path: '/valspar-paint-calculator',
    soldAt: 'Lowe’s Canada and selected retailers',
    region: 'Nationwide where Lowe’s operates',
    typicalSqFtPerGallon: '350–400',
    typicalHighSqFt: 400,
    productLines: 'Reserve, Signature, Ultra, exterior acrylics',
    twelveByTwelveGallons: '2–3 gallons',
    breadcrumbLabel: 'Valspar',
    title: 'Valspar Paint Calculator — Lowe’s Canada Gallons',
    h1: 'Valspar Paint Calculator',
    description:
      'Free Valspar paint calculator for Lowe’s Canada. 12×12 ≈ 2–3 gallons at 350–400 sq ft/gal. Reserve / Signature — enter room size and your can label.',
    quickAnswer: `Valspar Reserve and Signature interiors at Lowe’s Canada typically list about 400 sq ft per gallon on smooth primed drywall. A 12×12, two coats, is ~${GALLONS_12X12_AT(400)} gallons — buy 2 if the surface is easy, 3 for colour changes. Do not use a Home Depot Behr number on a Valspar can.`,
    intro:
      'Valspar is the paint most Lowe’s Canada shoppers roll. Enter room size here and sq ft per gallon from Reserve, Signature, or Ultra. Home Depot cans are Behr — that is a different calculator.',
    faqs: [
      {
        question: 'How much Valspar for a 12×12 room?',
        answer:
          'About 2–3 gallons for walls, two coats, at 350–400 sq ft/gallon. Lowe’s can tint a third gallon from the same formula if you round up here first.',
      },
      {
        question: 'Valspar vs Behr?',
        answer:
          'Behr is Home Depot; Valspar is Lowe’s. Coverage on the can is similar in the 350–400 sq ft range, but you still enter the number from the can you bought. Behr page: [how much paint](/how-much-paint-do-i-need).',
      },
      {
        question: 'Official Valspar tool?',
        answer:
          'No. Independent, not affiliated with Valspar, Sherwin-Williams (parent), or Lowe’s.',
      },
    ],
    editorial: [
      {
        heading: 'Lowe’s 12×12',
        paragraphs: [
          '384 sq ft × 2 ÷ 400 ≈ 1.9 gallons. Buy 2 Reserve or Signature gallons for a primed same-colour room. Primer plus two topcoats on new drywall is three calculator passes (or one primer pass and one finish pass with two coats).',
        ],
      },
    ],
  },
];

export const BEHR_HOME_DEPOT = {
  name: 'Behr',
  path: '/how-much-paint-do-i-need',
  soldAt: 'Home Depot Canada',
  region: 'Nationwide',
  typicalSqFtPerGallon: '350–400',
  twelveByTwelveGallons: '2–3 gallons',
} as const;

export function gallonsFor12x12(sqFtPerGallon: number): string {
  return GALLONS_12X12_AT(sqFtPerGallon);
}

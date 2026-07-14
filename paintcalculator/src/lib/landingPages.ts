import type { PaintType, SurfaceType } from './paint/types';

export type CalculatorKind = 'paint' | 'wallpaper';

interface LandingPageBase {
  slug: string;
  path: string;
  kind: CalculatorKind;
  title: string;
  h1: string;
  description: string;
  breadcrumbLabel: string;
  intro: string;
  faqs: { question: string; answer: string }[];
}

export interface PaintLandingPage extends LandingPageBase {
  kind: 'paint';
  paintType: PaintType;
  surface: SurfaceType;
}

export interface WallpaperLandingPage extends LandingPageBase {
  kind: 'wallpaper';
}

export type LandingPage = PaintLandingPage | WallpaperLandingPage;

export const LANDING_PAGES: LandingPage[] = [
  {
    slug: 'room-paint-calculator',
    path: '/room-paint-calculator',
    kind: 'paint',
    paintType: 'interior',
    surface: 'both',
    title: 'Room Paint Calculator — Walls, Ceiling & Gallons (Canada)',
    h1: 'Room Paint Calculator',
    description:
      'Free room paint calculator. Enter room dimensions and ceiling height to estimate wall and ceiling paint in gallons.',
    breadcrumbLabel: 'Room calculator',
    intro:
      'Measure a rectangular room in feet and inches. We calculate wall area from perimeter × height, add ceiling if needed, and deduct doors and windows.',
    faqs: [
      {
        question: 'How do I calculate paint for a room?',
        answer:
          'Wall area = 2 × ceiling height × (length + width). Add ceiling area (length × width) if you are painting the ceiling. Divide total coverage by sq ft per gallon on your paint can.',
      },
      {
        question: 'How many coats should I plan for?',
        answer:
          'Most interior walls need two coats over primer or a color change. Primer alone is often one coat. Adjust the coat count in project settings.',
      },
      {
        question: 'Should I subtract doors and windows?',
        answer:
          'Yes for a closer estimate. A standard door is about 20 sq ft and a window about 15 sq ft. The calculator deducts these automatically.',
      },
    ],
  },
  {
    slug: 'how-much-paint-do-i-need',
    path: '/how-much-paint-do-i-need',
    kind: 'paint',
    paintType: 'interior',
    surface: 'walls',
    title: 'Paint Gallon Calculator — How Much Paint Do I Need? (Free, Canada)',
    h1: 'How Much Paint Do I Need?',
    description:
      'Free paint gallon calculator for Canadian DIY projects. Enter room size, coats, and sq ft per gallon from your can — see how many gallons to buy. Works with Behr, Benjamin Moore, and any brand.',
    breadcrumbLabel: 'How much paint',
    intro:
      'The biggest question at the paint counter: how many gallons? Enter your room size and we round up so you do not run short mid-project.',
    faqs: [
      {
        question: 'How many gallons for a 12×12 room?',
        answer:
          'A 12×12 room with 8 ft ceilings has about 384 sq ft of wall area. With two coats and 350 sq ft per gallon coverage, you need roughly 2.2 gallons — buy 3 gallons to be safe.',
      },
      {
        question: 'How much does a gallon of paint cover?',
        answer:
          'Most interior latex covers 350–400 sq ft per gallon on smooth walls. Check your can — flat and textured surfaces cover less.',
      },
      {
        question: 'Do I need primer and paint?',
        answer:
          'New drywall, stains, or bold color changes usually need primer first. Run the calculator twice — once for primer, once for topcoat — or switch paint type in settings.',
      },
      {
        question: 'How many square feet does a gallon of paint cover?',
        answer:
          'Most interior latex covers 350–400 sq ft per gallon on smooth, primed walls. Behr Premium Plus Interior lists up to 400 sq ft/gallon on the can — enter your exact label number in project settings for the best estimate.',
      },
      {
        question: 'Is there a Behr paint calculator?',
        answer:
          'Behr sells paint by coverage on the can label, not a room-size tool. Enter your room dimensions here and set sq ft per gallon to the number on your Behr can — same math, any brand.',
      },
    ],
  },
  {
    slug: 'paint-coverage-calculator',
    path: '/paint-coverage-calculator',
    kind: 'paint',
    paintType: 'interior',
    surface: 'walls',
    title: 'How Many Sq Ft Does a Gallon Cover? Free Paint Coverage Calculator',
    h1: 'Paint Coverage Calculator',
    description:
      'Free paint coverage calculator — enter room size and sq ft per gallon from your can. See how many gallons you need per coat. Works with Behr, Benjamin Moore, and Canadian paint labels.',
    breadcrumbLabel: 'Coverage calculator',
    intro:
      'Coverage depends on your paint label, surface texture, and number of coats. Enter the sq ft per gallon from your can for an accurate gallon count.',
    faqs: [
      {
        question: 'What is typical paint coverage?',
        answer:
          'Interior latex: 350 sq ft/gallon. Primer: 300 sq ft/gallon. Exterior paint: 250 sq ft/gallon on porous siding. Always use the number on your product.',
      },
      {
        question: 'Why does my paint cover less than the label?',
        answer:
          'Textured walls, dark colors, unprimed surfaces, and rolling vs spraying all reduce coverage. Add 10% waste for touch-ups and roller absorption.',
      },
      {
        question: 'Should I buy quarts or gallons?',
        answer:
          'The calculator shows both. Small accent walls or closets may only need quarts. Whole rooms usually need at least one gallon — we round up for store quantities.',
      },
      {
        question: 'How many square feet does a gallon of paint cover?',
        answer:
          'Interior latex typically covers 350–400 sq ft per gallon on smooth walls. Primer is often 250–350 sq ft/gallon. Always use the coverage number printed on your paint can — not a generic average.',
      },
      {
        question: 'Does Behr have a paint coverage calculator?',
        answer:
          'Behr lists sq ft per gallon on each product label but does not offer a room-dimension calculator. Enter your wall measurements above and set coverage to the Behr number on your can for an accurate gallon count.',
      },
      {
        question: 'What is Behr paint coverage per gallon?',
        answer:
          'Behr Premium Plus Interior often lists up to 400 sq ft/gallon; Premium Plus Ultra and Marquee lines are similar on smooth drywall. Textured walls, deep colours, and unprimed surfaces cover less — use 300–350 sq ft/gallon as a realistic DIY default.',
      },
    ],
  },
  {
    slug: 'interior-paint-calculator',
    path: '/interior-paint-calculator',
    kind: 'paint',
    paintType: 'interior',
    surface: 'both',
    title: 'Interior Paint Calculator — Walls & Ceiling',
    h1: 'Interior Paint Calculator',
    description:
      'Free interior paint calculator for walls and ceilings. Room dimensions, coats, waste, and gallon counts for DIY projects.',
    breadcrumbLabel: 'Interior calculator',
    intro:
      'Plan an interior repaint with default 350 sq ft per gallon and two coats. Toggle walls only, ceiling only, or both.',
    faqs: [
      {
        question: 'How much extra paint should I buy?',
        answer:
          'Add about 10% for touch-ups, roller tray waste, and future patch jobs. The calculator includes a waste allowance you can adjust.',
      },
      {
        question: 'Can I calculate multiple rooms?',
        answer:
          'Yes. Add up to five rooms and the calculator totals paintable area, deductions, and gallons for the whole job.',
      },
      {
        question: 'Does this work for trim and doors?',
        answer:
          'This tool focuses on wall and ceiling area. Trim and doors use less paint — many DIYers buy a quart of trim paint separately.',
      },
    ],
  },
  {
    slug: 'fence-stain-calculator',
    path: '/fence-stain-calculator',
    kind: 'paint',
    paintType: 'fence_stain',
    surface: 'fence',
    title: 'Fence Stain Calculator — Panels, Coverage & Gallons',
    h1: 'Fence Stain Calculator',
    description:
      'Free fence stain calculator. Enter fence run length and panel height to estimate stain gallons for wood fence panels.',
    breadcrumbLabel: 'Fence stain',
    intro:
      'Measure each fence section as run length × panel height. Default coverage is 150 sq ft/gallon on rough wood — toggle both sides if staining front and back.',
    faqs: [
      {
        question: 'How much stain for a wood fence?',
        answer:
          'Multiply fence length by panel height for one side. Rough-sawn boards often cover 125–175 sq ft per gallon. Staining both sides doubles the area.',
      },
      {
        question: 'How many coats of fence stain?',
        answer:
          'Most fence stains need one coat on previously stained wood, or two on bare wood. Check the product label and adjust coats in settings.',
      },
      {
        question: 'Do I stain both sides of a fence?',
        answer:
          'Staining both sides improves longevity and appearance. Use the “Both sides” option to double your square footage automatically.',
      },
    ],
  },
  {
    slug: 'exterior-house-stain-calculator',
    path: '/exterior-house-stain-calculator',
    kind: 'paint',
    paintType: 'house_stain',
    surface: 'walls',
    title: 'Exterior House Stain Calculator — Siding & Gallons',
    h1: 'Exterior House Stain Calculator',
    description:
      'Calculate exterior house stain for siding and wood walls. Enter building footprint and wall height for gallon estimates.',
    breadcrumbLabel: 'House stain',
    intro:
      'Enter your home footprint (length × width) and average wall height. We calculate exterior wall area the same way pros estimate siding stain.',
    faqs: [
      {
        question: 'How much stain for a house exterior?',
        answer:
          'Wall area ≈ 2 × wall height × (length + width) of the building footprint. Divide by coverage on your stain can — often 150–250 sq ft/gallon on porous wood.',
      },
      {
        question: 'Is house stain coverage different from paint?',
        answer:
          'Yes. Stain soaks into wood and typically covers less area than paint. Use the sq ft/gallon printed on your stain label for accuracy.',
      },
      {
        question: 'What about trim and soffits?',
        answer:
          'This calculator focuses on main wall area. Add extra stain for trim, soffits, and gables — the 10% waste allowance helps cover some of that.',
      },
    ],
  },
  {
    slug: 'deck-stain-calculator',
    path: '/deck-stain-calculator',
    kind: 'paint',
    paintType: 'deck_stain',
    surface: 'deck',
    title: 'Deck Stain Calculator — Sq Ft, Coverage & Gallons',
    h1: 'Deck Stain Calculator',
    description:
      'Free deck stain calculator. Enter deck length and width to estimate stain gallons for boards, rails, and horizontal surfaces.',
    breadcrumbLabel: 'Deck stain',
    intro:
      'Measure deck board area as length × width. Default coverage is 175 sq ft/gallon — horizontal boards and weathered wood may need more.',
    faqs: [
      {
        question: 'How much stain for a deck?',
        answer:
          'Deck board area = length × width. Most deck stains cover 150–200 sq ft per gallon on horizontal boards. Add waste for rails and steps separately if needed.',
      },
      {
        question: 'One coat or two on a deck?',
        answer:
          'Many deck stains are one-coat formulas on maintenance coats. Bare wood or a color change may need two. Adjust coats in the calculator.',
      },
      {
        question: 'Does this include railings?',
        answer:
          'Enter railing sections as additional deck areas, or add extra waste % to account for vertical balusters and posts.',
      },
    ],
  },
  {
    slug: 'wallpaper-calculator',
    path: '/wallpaper-calculator',
    kind: 'wallpaper',
    title: 'Wallpaper Calculator — Rolls, Pattern Repeat & Waste',
    h1: 'Wallpaper Calculator',
    description:
      'Free wallpaper calculator. Enter room size and roll dimensions to estimate how many rolls you need, including pattern repeat and waste.',
    breadcrumbLabel: 'Wallpaper calculator',
    intro:
      'Measure each room in feet and inches. Default roll is a 21-inch × 33-foot double roll. Add pattern repeat if your paper has a repeating design.',
    faqs: [
      {
        question: 'How many rolls of wallpaper do I need?',
        answer:
          'Divide total wall square footage (minus doors and windows) plus waste by the coverage per roll. A standard double roll covers about 57 sq ft.',
      },
      {
        question: 'How does pattern repeat affect rolls?',
        answer:
          'Repeating patterns waste paper when strips must align. Enter your repeat in inches — the calculator adds extra waste automatically.',
      },
      {
        question: 'Should I buy an extra roll?',
        answer:
          'Yes. Keep one extra roll for future repairs and in case of color lot differences. The waste percentage helps cover matching cuts.',
      },
    ],
  },
  {
    slug: 'how-many-rolls-of-wallpaper',
    path: '/how-many-rolls-of-wallpaper',
    kind: 'wallpaper',
    title: 'How Many Rolls of Wallpaper Do I Need?',
    h1: 'How Many Rolls of Wallpaper Do I Need?',
    description:
      'Calculate wallpaper rolls for your room. Enter dimensions, roll size, and pattern repeat for an accurate count.',
    breadcrumbLabel: 'How many rolls',
    intro:
      'The wallpaper store sells by the roll — this tool converts your wall area into a roll count rounded up so you do not run short.',
    faqs: [
      {
        question: 'How much wall area does one roll cover?',
        answer:
          'A typical double roll (21" × 33 ft) covers about 57–58 sq ft. Check your roll label — vinyl and peel-and-stick vary.',
      },
      {
        question: 'Do I subtract doors and windows?',
        answer:
          'Yes. The calculator deducts about 20 sq ft per door and 15 sq ft per window for a closer estimate.',
      },
      {
        question: 'What waste percentage for wallpaper?',
        answer:
          'Plain paper: 10–15%. Patterned paper: 15–25%. The calculator defaults to 15% and bumps waste when pattern repeat is set.',
      },
    ],
  },
  {
    slug: 'accent-wall-wallpaper-calculator',
    path: '/accent-wall-wallpaper-calculator',
    kind: 'wallpaper',
    title: 'Accent Wall Wallpaper Calculator',
    h1: 'Accent Wall Wallpaper Calculator',
    description:
      'Estimate wallpaper rolls for a single accent wall. Enter wall width and ceiling height for a quick roll count.',
    breadcrumbLabel: 'Accent wall',
    intro:
      'Accent walls use one wall surface — enter the room so we calculate one wall run, or use a small room with one dominant wall length.',
    faqs: [
      {
        question: 'How do I calculate one accent wall?',
        answer:
          'Multiply wall width by ceiling height for the accent wall area. Or enter a narrow room where one wall is the feature wall.',
      },
      {
        question: 'How many rolls for one wall?',
        answer:
          'Often one roll covers a single accent wall. Enter exact dimensions — small rooms may still need two rolls for pattern matching.',
      },
      {
        question: 'Can I combine with paint?',
        answer:
          'Yes. Use our paint calculator for the other walls and this tool for the feature wall — buy materials separately.',
      },
    ],
  },
  {
    slug: 'exterior-paint-calculator',
    path: '/exterior-paint-calculator',
    kind: 'paint',
    paintType: 'exterior',
    surface: 'walls',
    title: 'Exterior Paint Calculator — Siding Gallons (Canada)',
    h1: 'Exterior Paint Calculator',
    description:
      'Free exterior paint calculator for siding and walls. Enter building footprint and wall height for gallon estimates with Canadian coverage defaults.',
    breadcrumbLabel: 'Exterior paint',
    intro:
      'Exterior latex covers less area than interior paint — default 250 sq ft per gallon on porous siding. Enter footprint dimensions and average wall height for total gallons.',
    faqs: [
      {
        question: 'How much exterior paint for a house?',
        answer:
          'Wall area ≈ 2 × wall height × (length + width) of the footprint. A 40×30 ft two-story home can need 15–25 gallons for two coats — depends on siding texture and color change.',
      },
      {
        question: 'How many coats of exterior paint?',
        answer:
          'Most exterior repaints need two coats over primer or a significant color change. Maintenance coats over similar color may be one. Adjust coats in settings.',
      },
      {
        question: 'Does this include trim and soffits?',
        answer:
          'This focuses on main wall area. Add waste % or run separate calculations for trim — many DIYers buy trim paint by the quart.',
      },
    ],
  },
  {
    slug: 'ceiling-paint-calculator',
    path: '/ceiling-paint-calculator',
    kind: 'paint',
    paintType: 'interior',
    surface: 'ceiling',
    title: 'Ceiling Paint Calculator — Gallons for Ceilings (Canada)',
    h1: 'Ceiling Paint Calculator',
    description:
      'Calculate ceiling paint gallons from room dimensions. Flat ceiling area only — walls excluded for quick gallon counts.',
    breadcrumbLabel: 'Ceiling paint',
    intro:
      'Ceiling paint is usually flat or matte white. Enter room length and width — we calculate ceiling square footage only and default to one coat on white over white.',
    faqs: [
      {
        question: 'How much paint for a ceiling?',
        answer:
          'Ceiling area = length × width. A 12×14 room has 168 sq ft of ceiling. At 350 sq ft/gallon and one coat, you need about half a gallon — buy one gallon for touch-ups.',
      },
      {
        question: 'One coat or two on ceilings?',
        answer:
          'Repainting white over white is often one coat. Color changes or stained ceilings need primer plus two coats — adjust in project settings.',
      },
      {
        question: 'Can I paint walls with this calculator?',
        answer:
          'This page sets surface to ceiling only. For walls and ceiling together, use the room paint or interior paint calculator.',
      },
    ],
  },
  {
    slug: 'paint-cost-estimator',
    path: '/paint-cost-estimator',
    kind: 'paint',
    paintType: 'interior',
    surface: 'both',
    title: 'Paint Cost Estimator — Gallons & Project Budget (Canada)',
    h1: 'Paint Cost Estimator',
    description:
      'Estimate paint gallons and total project cost. Enter room size, price per gallon, and coats for a DIY budget before the paint store.',
    breadcrumbLabel: 'Paint cost estimator',
    intro:
      'Enter price per gallon from your local paint store (CAD). We calculate gallons needed and multiply for an estimated materials total — primer, tape, and rollers are extra.',
    faqs: [
      {
        question: 'How much does it cost to paint a room?',
        answer:
          'Materials often run $80–$200 CAD for a typical bedroom (paint, primer, basic supplies). Enter your gallon price here for paint-only cost; add 10–15% for rollers and tape.',
      },
      {
        question: 'Should I include primer in the cost estimate?',
        answer:
          'Run the calculator twice — once with primer paint type and once with topcoat — or add primer gallons manually. New drywall and bold color changes need primer.',
      },
      {
        question: 'Why is my estimate higher than one gallon?',
        answer:
          'Two coats on walls plus ceiling, waste allowance, and door/window deductions all affect gallons. We round up to whole gallons like the store sells them.',
      },
    ],
  },
];

export const FEATURED_LANDING_SLUGS = [
  'how-much-paint-do-i-need',
  'exterior-paint-calculator',
  'ceiling-paint-calculator',
  'paint-cost-estimator',
  'room-paint-calculator',
  'interior-paint-calculator',
  'paint-coverage-calculator',
  'wallpaper-calculator',
  'fence-stain-calculator',
] as const;

export const FEATURED_LANDING_LINKS = FEATURED_LANDING_SLUGS.map((slug) =>
  LANDING_PAGES.find((p) => p.slug === slug)
).filter((p): p is LandingPage => p !== undefined);

export function getLandingPageBySlug(slug: string): LandingPage | undefined {
  return LANDING_PAGES.find((page) => page.slug === slug);
}

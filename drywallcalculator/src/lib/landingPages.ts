export interface LandingPage {
  slug: string;
  path: string;
  includeCeiling: boolean;
  title: string;
  h1: string;
  description: string;
  breadcrumbLabel: string;
  intro: string;
  faqs: { question: string; answer: string }[];
}

export const LANDING_PAGES: LandingPage[] = [
  {
    slug: 'drywall-calculator',
    path: '/drywall-calculator',
    includeCeiling: false,
    title: 'Free Drywall Calculator — How Many Sheets for Your Room?',
    h1: 'Drywall Calculator',
    description:
      'Free drywall calculator for DIY projects. Enter room length, width, and ceiling height — get wall area, sheet counts, and waste for 4×8 or 4×12 sheets.',
    breadcrumbLabel: 'Drywall calculator',
    intro:
      'Measure a rectangular room in feet and inches. We calculate wall area from perimeter × height, deduct doors and windows, and round up to whole sheets.',
    faqs: [
      {
        question: 'How do I calculate drywall for a room?',
        answer:
          'Wall area = 2 × ceiling height × (length + width). Subtract about 20 sq ft per door and 15 sq ft per window. Divide by sheet size (32 sq ft for 4×8) and add waste.',
      },
      {
        question: 'How much waste should I add for drywall?',
        answer:
          'Most DIYers add 10% extra for cuts, mistakes, and future patches. Complex layouts with many corners may need 12–15%.',
      },
      {
        question: 'What size drywall sheets should I use?',
        answer:
          'Standard 4×8 ft sheets cover 32 sq ft each. 4×12 ft sheets cover 48 sq ft and reduce seams on long walls — enter your sheet size in settings.',
      },
    ],
  },
  {
    slug: 'how-many-drywall-sheets',
    path: '/how-many-drywall-sheets',
    includeCeiling: false,
    title: 'How Many Drywall Sheets Do I Need? Free Sheet Calculator',
    h1: 'How Many Drywall Sheets Do I Need?',
    description:
      'Free drywall sheet calculator. Enter room dimensions, sheet size, and waste — see how many 4×8 or 4×12 sheets to buy for walls or ceiling.',
    breadcrumbLabel: 'Sheet count',
    intro:
      'The lumber yard sells by the sheet — this tool converts your wall area into a sheet count rounded up so you do not run short.',
    faqs: [
      {
        question: 'How many sheets for a 12×12 room?',
        answer:
          'A 12×12 room with 8 ft ceilings has about 384 sq ft of wall area. With 10% waste and 32 sq ft sheets, you need roughly 14 sheets — fewer if you deduct doors and windows.',
      },
      {
        question: 'How is sheet count calculated?',
        answer:
          'Total area (with waste) divided by sheet square footage, rounded up. A 4×8 sheet = 32 sq ft; a 4×12 sheet = 48 sq ft.',
      },
      {
        question: 'Should I buy an extra sheet?',
        answer:
          'The calculator already includes waste. Keeping one spare sheet for future repairs is a good idea, especially if you need to match a lot number.',
      },
    ],
  },
  {
    slug: 'drywall-for-ceiling-calculator',
    path: '/drywall-for-ceiling-calculator',
    includeCeiling: true,
    title: 'Drywall for Ceiling Calculator — Sheets & Area',
    h1: 'Drywall for Ceiling Calculator',
    description:
      'Estimate drywall sheets for walls and ceiling. Enter room dimensions to include ceiling area in your sheet count.',
    breadcrumbLabel: 'Ceiling calculator',
    intro:
      'Ceiling drywall adds length × width to your total area. This calculator includes both walls and ceiling with default 4×8 sheets and 10% waste.',
    faqs: [
      {
        question: 'How do I calculate ceiling drywall?',
        answer:
          'Ceiling area = room length × room width. Add that to wall area (2 × height × (length + width)), subtract openings, add waste, then divide by sheet size.',
      },
      {
        question: 'Is ceiling drywall the same thickness as walls?',
        answer:
          'Often yes — 1/2 inch is common for both. Some codes require 5/8 inch on ceilings for fire rating. Sheet count math is the same regardless of thickness.',
      },
      {
        question: 'Do I need more waste for ceilings?',
        answer:
          'Ceiling cuts around fixtures and light boxes can add waste. Start with 10% and increase to 12–15% if you have many recessed lights or soffits.',
      },
    ],
  },
  {
    slug: 'basement-drywall-calculator',
    path: '/basement-drywall-calculator',
    includeCeiling: false,
    title: 'Basement Drywall Calculator — Sheets for Finished Basements',
    h1: 'Basement Drywall Calculator',
    description:
      'Estimate drywall sheets for basement finishing projects. Enter room dimensions, deduct doors and windows, and add waste for below-grade walls.',
    breadcrumbLabel: 'Basement calculator',
    intro:
      'Basement rooms often have shorter walls, soffits, and utility chases. Measure each finished area in feet and inches — we calculate wall area and round up to whole sheets.',
    faqs: [
      {
        question: 'How much drywall for a basement room?',
        answer:
          'Use the same formula as upstairs: wall area = 2 × ceiling height × (length + width), minus doors and windows, divide by sheet size, add 10% waste. Basements with many corners may need 12–15% waste.',
      },
      {
        question: 'Should I use moisture-resistant drywall in a basement?',
        answer:
          'Many codes and pros use mold-resistant (green board) on below-grade walls. Sheet count math is the same — thickness and type are separate purchase decisions.',
      },
      {
        question: 'Do I drywall the ceiling in a basement?',
        answer:
          'Finished basements often include a drywall ceiling to hide joists and ducts. Toggle ceiling in settings or use our ceiling calculator if walls and ceiling are separate orders.',
      },
    ],
  },
  {
    slug: 'garage-drywall-calculator',
    path: '/garage-drywall-calculator',
    includeCeiling: false,
    title: 'Garage Drywall Calculator — Sheets for Walls & Shops',
    h1: 'Garage Drywall Calculator',
    description:
      'Calculate drywall sheets for garage walls and workshop finishing. Enter bay dimensions and ceiling height for accurate sheet counts.',
    breadcrumbLabel: 'Garage calculator',
    intro:
      'Garage finishing usually covers perimeter walls only — measure each wall run and typical 8–9 ft ceiling height. Add waste for around garage doors and windows.',
    faqs: [
      {
        question: 'How many sheets for a two-car garage?',
        answer:
          'A 24×24 garage with 8 ft walls has roughly 768 sq ft of wall area before openings. After a double garage door deduction and 10% waste, expect about 24–28 sheets of 4×8.',
      },
      {
        question: 'Is garage drywall different from interior?',
        answer:
          'Fire-rated Type X drywall is often required on garage walls adjoining living space. Count sheets the same way — choose thickness per local code.',
      },
      {
        question: 'Should I include the garage ceiling?',
        answer:
          'Many DIYers drywall walls only. If you are finishing the ceiling, enable ceiling area or use the ceiling calculator for length × width overhead.',
      },
    ],
  },
];

export const FEATURED_LANDING_SLUGS = [
  'drywall-calculator',
  'how-many-drywall-sheets',
  'basement-drywall-calculator',
  'garage-drywall-calculator',
  'drywall-for-ceiling-calculator',
] as const;

export const FEATURED_LANDING_LINKS = FEATURED_LANDING_SLUGS.map((slug) =>
  LANDING_PAGES.find((p) => p.slug === slug)
).filter((p): p is LandingPage => p !== undefined);

export function getLandingPageBySlug(slug: string): LandingPage | undefined {
  return LANDING_PAGES.find((page) => page.slug === slug);
}

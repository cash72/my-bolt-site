import type { MaterialType } from './mulch/types';

export interface LandingPage {
  slug: string;
  path: string;
  materialType: MaterialType;
  depthIn?: number;
  title: string;
  h1: string;
  description: string;
  breadcrumbLabel: string;
  intro: string;
  faqs: { question: string; answer: string }[];
}

export const LANDING_PAGES: LandingPage[] = [
  {
    slug: 'mulch-calculator',
    path: '/mulch-calculator',
    materialType: 'mulch',
    depthIn: 3,
    title: 'Mulch Calculator — How Much Mulch Do I Need? (Free)',
    h1: 'Mulch Calculator',
    description:
      'Free mulch calculator for garden beds. Enter bed length, width, and depth — get cubic yards and bag counts. Default 3-inch depth.',
    breadcrumbLabel: 'Mulch calculator',
    intro:
      'Measure each garden bed in feet and inches. Default depth is 3 inches — the standard for decorative mulch around shrubs and trees.',
    faqs: [
      {
        question: 'How much mulch do I need?',
        answer:
          'Multiply bed area (length × width) by depth in feet. Divide by 27 for cubic yards. A 10×10 bed at 3" depth needs about 0.93 cubic yards — round up to 1.',
      },
      {
        question: 'How deep should mulch be?',
        answer:
          'Most landscaping beds use 2–4 inches of mulch. Three inches is a common default — it suppresses weeds without smothering plant roots.',
      },
      {
        question: 'How many bags of mulch equal a cubic yard?',
        answer:
          'A cubic yard is 27 cu ft. Standard mulch bags are 2 cu ft, so about 14 bags per cubic yard. The calculator counts bags automatically.',
      },
    ],
  },
  {
    slug: 'gravel-calculator',
    path: '/gravel-calculator',
    materialType: 'gravel',
    title: 'Gravel Calculator — Cubic Yards & Tons (Free)',
    h1: 'Gravel Calculator',
    description:
      'Free gravel calculator for paths and driveways. Enter area dimensions and depth — get cubic yards, tons, and bag counts for bulk gravel.',
    breadcrumbLabel: 'Gravel calculator',
    intro:
      'Enter the length and width of your gravel area. Adjust depth for paths (2–3"), driveways (4–6"), or drainage projects.',
    faqs: [
      {
        question: 'How much gravel do I need?',
        answer:
          'Area in sq ft × depth in feet ÷ 27 = cubic yards. A 20×10 path at 4" deep needs about 2.5 cubic yards of gravel.',
      },
      {
        question: 'What depth for a gravel driveway?',
        answer:
          'Driveways typically need 4–6 inches of compacted gravel. Paths and patios often use 2–3 inches. Enter your depth in project settings.',
      },
      {
        question: 'Is gravel sold by the ton or cubic yard?',
        answer:
          'Bulk gravel is usually sold by the cubic yard. Bagged pea gravel is sold in 0.5 cu ft bags — use the bag count for smaller projects.',
      },
    ],
  },
  {
    slug: 'cubic-yards-calculator',
    path: '/cubic-yards-calculator',
    materialType: 'mulch',
    title: 'Cubic Yards Calculator — Mulch, Gravel & Topsoil',
    h1: 'Cubic Yards Calculator',
    description:
      'Convert garden bed area and depth to cubic yards. Works for mulch, gravel, topsoil, and other bulk landscaping materials.',
    breadcrumbLabel: 'Cubic yards',
    intro:
      'Enter any rectangular area and depth to get cubic yards and bag equivalents. Switch material type for mulch, gravel, or topsoil.',
    faqs: [
      {
        question: 'How do I convert sq ft to cubic yards?',
        answer:
          'Multiply square footage by depth in feet to get cubic feet, then divide by 27. Example: 100 sq ft × 0.25 ft (3") = 25 cu ft ≈ 0.93 cu yd.',
      },
      {
        question: 'How many cubic yards in a pickup truck?',
        answer:
          'A standard pickup bed holds about 1.5–2 cubic yards level full. A cubic yard weighs roughly 400–800 lbs depending on material.',
      },
      {
        question: 'Should I add extra for waste?',
        answer:
          'Yes. Add 10% for settling, uneven ground, and spillage. The calculator includes a waste allowance you can adjust.',
      },
    ],
  },
  {
    slug: 'playground-mulch-calculator',
    path: '/playground-mulch-calculator',
    materialType: 'mulch',
    depthIn: 12,
    title: 'Playground Mulch Calculator — Depth & Cubic Yards',
    h1: 'Playground Mulch Calculator',
    description:
      'Calculate playground mulch volume for safety surfacing. Enter play area dimensions and depth for cubic yards and bag counts.',
    breadcrumbLabel: 'Playground mulch',
    intro:
      'Play areas often need 9–12 inches of engineered wood fiber or rubber mulch for fall protection. Default depth is 12 inches — adjust to your equipment manufacturer specs.',
    faqs: [
      {
        question: 'How deep should playground mulch be?',
        answer:
          'Many installations target 12 inches of loose-fill mulch at maintained depth. Critical fall height from your play equipment determines the required depth — check manufacturer guidelines.',
      },
      {
        question: 'How much mulch for a 20×30 play area?',
        answer:
          '600 sq ft at 12" depth is 600 cu ft ÷ 27 ≈ 22 cubic yards. Bulk delivery is usually cheaper than bags at this volume.',
      },
      {
        question: 'Wood mulch vs rubber playground mulch?',
        answer:
          'Both are sold by volume. Rubber mulch is heavier and lasts longer; engineered wood fiber is common for public playgrounds. Cubic yard math is the same.',
      },
    ],
  },
  {
    slug: 'topsoil-calculator',
    path: '/topsoil-calculator',
    materialType: 'topsoil',
    depthIn: 4,
    title: 'Topsoil Calculator — Cubic Yards for Gardens & Lawns',
    h1: 'Topsoil Calculator',
    description:
      'Free topsoil calculator for garden beds, lawn leveling, and new planting areas. Enter area dimensions and depth for cubic yards.',
    breadcrumbLabel: 'Topsoil calculator',
    intro:
      'Topsoil is ordered in cubic yards for bulk delivery or bags for small patches. Default depth is 4 inches for new beds — use 1–2 inches for lawn topdressing.',
    faqs: [
      {
        question: 'How much topsoil do I need?',
        answer:
          'Multiply area (length × width) by depth in feet, divide by 27. A 10×20 bed at 4" depth needs about 2.5 cubic yards.',
      },
      {
        question: 'How deep should topsoil be for a new garden?',
        answer:
          'New vegetable and flower beds often use 4–6 inches of quality topsoil mixed into native soil. Lawn repairs may only need 1–2 inches.',
      },
      {
        question: 'Topsoil vs compost vs mulch?',
        answer:
          'Topsoil is for growing plants. Compost improves soil biology. Mulch covers soil surface. Use this calculator for topsoil volume — switch material type in settings.',
      },
    ],
  },
  {
    slug: 'stone-mulch-calculator',
    path: '/stone-mulch-calculator',
    materialType: 'gravel',
    depthIn: 3,
    title: 'Stone Mulch Calculator — Decorative Rock & Gravel Beds',
    h1: 'Stone Mulch Calculator',
    description:
      'Calculate decorative stone, river rock, and gravel mulch for landscape beds. Cubic yards and bag counts from area and depth.',
    breadcrumbLabel: 'Stone mulch',
    intro:
      'Stone mulch beds use 2–4 inches of decorative rock over landscape fabric. Enter bed dimensions — default depth is 3 inches for typical shrub borders.',
    faqs: [
      {
        question: 'How much stone mulch do I need?',
        answer:
          'Same math as gravel: sq ft × depth in feet ÷ 27 = cubic yards. A 50 sq ft bed at 3" depth needs about 0.46 cubic yards — round up.',
      },
      {
        question: 'Stone mulch vs wood mulch?',
        answer:
          'Stone does not decompose and rarely needs topping up. Wood mulch breaks down and needs refresh every 1–2 years. Stone is heavier — confirm delivery access.',
      },
      {
        question: 'What depth for river rock beds?',
        answer:
          '2–3 inches is common for decorative rock over fabric. Use 4 inches only if you want a thicker visible layer — depth increases weight and cost quickly.',
      },
    ],
  },
];

export const FEATURED_LANDING_SLUGS = [
  'mulch-calculator',
  'topsoil-calculator',
  'playground-mulch-calculator',
  'stone-mulch-calculator',
  'gravel-calculator',
  'cubic-yards-calculator',
] as const;

export const FEATURED_LANDING_LINKS = FEATURED_LANDING_SLUGS.map((slug) =>
  LANDING_PAGES.find((p) => p.slug === slug)
).filter((p): p is LandingPage => p !== undefined);

export function getLandingPageBySlug(slug: string): LandingPage | undefined {
  return LANDING_PAGES.find((page) => page.slug === slug);
}

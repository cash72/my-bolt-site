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
    title: 'Mulch Calculator — Cubic Yards & Bags (How Much Do I Need?)',
    h1: 'Mulch Calculator',
    description:
      'Free mulch calculator: enter bed length, width, and depth for cubic yards and 2 cu ft bag counts. Default 3-inch depth for garden beds — plan bulk delivery or bagged orders.',
    breadcrumbLabel: 'Mulch calculator',
    intro:
      'Measure each garden bed in feet and inches. Default depth is 3 inches — the standard for decorative mulch around shrubs and trees.',
    faqs: [
      {
        question: 'How much mulch do I need?',
        answer:
          'Multiply bed area (length × width) by depth in feet. Divide by 27 for cubic yards. A 10×10 bed at 3" depth needs about 0.93 cubic yards — round up to 1 yard for bulk. Use the [mulch cost estimator](/mulch-cost-estimator) once you have local $/yard and bag prices.',
      },
      {
        question: 'How deep should mulch be?',
        answer:
          'Most landscaping beds use 2–4 inches of mulch. Three inches is a common default — it suppresses weeds without smothering plant roots. Late-summer top-ups before fall often need only 1–2 inches over existing material.',
      },
      {
        question: 'How many bags of mulch equal a cubic yard?',
        answer:
          'A cubic yard is 27 cu ft. Standard mulch bags are 2 cu ft, so about 14 bags per cubic yard. The calculator counts bags automatically — compare bag vs bulk totals in the [mulch cost estimator](/mulch-cost-estimator).',
      },
    ],
  },
  {
    slug: 'gravel-calculator',
    path: '/gravel-calculator',
    materialType: 'gravel',
    depthIn: 4,
    title: 'Gravel Calculator — Cubic Yards & Bag Counts',
    h1: 'Gravel Calculator',
    description:
      'Free gravel calculator for paths and driveways. Enter area dimensions and depth to get cubic yards and configurable bag counts.',
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
    title: 'Cubic Yards Calculator — How Many Yards of Mulch?',
    h1: 'Cubic Yards Calculator',
    description:
      'How many cubic yards of mulch do I need? Convert bed area and depth to cubic yards for bulk mulch, gravel, and topsoil — then price bags vs delivery.',
    breadcrumbLabel: 'Cubic yards',
    intro:
      'Enter any rectangular area and depth to get cubic yards and bag equivalents. Switch material type for mulch, gravel, or topsoil.',
    faqs: [
      {
        question: 'How do I convert sq ft to cubic yards?',
        answer:
          'Multiply square footage by depth in feet to get cubic feet, then divide by 27. Example: 100 sq ft × 0.25 ft (3") = 25 cu ft ≈ 0.93 cu yd. Price that yardage with the [mulch cost estimator](/mulch-cost-estimator).',
      },
      {
        question: 'How many cubic yards in a pickup truck?',
        answer:
          'A standard pickup bed holds about 1.5–2 cubic yards level full. A cubic yard of mulch weighs roughly 400–800 lbs; gravel is much heavier — check payload before self-hauling bulk.',
      },
      {
        question: 'Should I add extra for waste?',
        answer:
          'Yes. Add 10% for settling, uneven ground, and spillage. The calculator includes a waste allowance you can adjust — especially useful before late-summer or fall bulk deliveries.',
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
  {
    slug: 'mulch-cost-estimator',
    path: '/mulch-cost-estimator',
    materialType: 'mulch',
    depthIn: 3,
    title: 'How Much Does Mulch Cost? Bulk Yard vs Bag Estimator',
    h1: 'How Much Does Mulch Cost?',
    description:
      'How much does mulch cost? Estimate bulk cubic-yard vs bagged mulch totals from bed area, depth, and local prices — free materials cost calculator before delivery.',
    breadcrumbLabel: 'Cost estimator',
    intro:
      'Enter bed dimensions and depth, then optional prices per cubic yard and per 2 cu ft bag. Compare bulk delivery vs bagged mulch before you order.',
    faqs: [
      {
        question: 'Is bulk mulch cheaper than bags?',
        answer:
          'Usually yes above ~1 cubic yard once you count ~14 bags per yard (2 cu ft bags) plus trips. Bags win for half-yard refresh projects and car-trunk loads. Enter both $/yard and bag prices above to see your break-even. Planning detail: [delivery vs bags](/guides/delivery-vs-bags-bulk-mulch).',
      },
      {
        question: 'How do I estimate mulch cost?',
        answer:
          'Get cubic yards from area × depth (or use the [mulch calculator](/mulch-calculator)), round up, multiply by $/yard — or multiply 2 cu ft bag count by bag price. Example: 2 cu yd at $45/yard ≈ $90 materials; the same volume as bags at $4.50 × 28 ≈ $126 before tax.',
      },
      {
        question: 'How much does 1 cubic yard of mulch cost?',
        answer:
          'Retail bulk often lands roughly $30–$60 per cubic yard for natural hardwood before delivery; dyed colors and specialty blends run higher. Bagged product is usually $3.50–$6 per 2 cu ft bag (~$50–$85 per yard equivalent). Enter your local tags above — regional prices swing more than national averages.',
      },
      {
        question: 'Does this include delivery?',
        answer:
          'No — delivery fees, tax, fabric, and edging are separate. Many yards charge a flat fee under 3–5 yards. Use the materials total to compare supplier quotes, then add each yard’s delivery line.',
      },
      {
        question: 'When should I order mulch for late summer or fall?',
        answer:
          'Late summer is a good window to price bulk before peak fall demand — measure beds after heat-stressed weeds die back, then top up 1–2 inches before frost. See [fall mulch application timing](/guides/fall-mulch-application-timing) for depth targets; run volumes here with your local yard and bag prices.',
      },
      {
        question: 'Should I order before Labor Day weekend?',
        answer:
          'If you can: late August through the week before Labor Day often has shorter delivery lead times than mid-September, when yards are booking fall bed refreshes. Price bulk vs bags here first, then call for drop dates — wait lists stretch faster than $/yard in many markets.',
      },
      {
        question: 'Does dyed mulch cost more than natural hardwood?',
        answer:
          'Usually yes — dyed black, brown, or red bulk often runs $5–$20 more per cubic yard than natural hardwood, and bag SKUs carry a similar premium. Enter the dyed $/yard (or bag price) above so the estimator matches the color you actually want, not a cheaper natural tag.',
      },
      {
        question: 'How much does mulch cost for front and back beds together?',
        answer:
          'Add beds in the calculator (or sum square footage) so you order once. Example: 120 sq ft front + 180 sq ft back at 3 inches ≈ 2.8 cu yd — roughly $85–$170 materials at $30–$60/yard before delivery, vs ~$140–$240 as 2 cu ft bags at $3.50–$6. Combining beds often crosses the bulk break-even that a single small bed would miss.',
      },
    ],
  },
  {
    slug: 'sod-calculator',
    path: '/sod-calculator',
    materialType: 'sod',
    title: 'Sod Calculator — Rolls, Pallets & Lawn Area',
    h1: 'Sod Calculator',
    description:
      'Free sod calculator for new lawns. Enter area dimensions — get sod roll and pallet counts with optional pricing.',
    breadcrumbLabel: 'Sod calculator',
    intro:
      'Measure each lawn section in feet and inches. We convert area (plus waste) into sod rolls and pallets using common coverage defaults you can edit.',
    faqs: [
      {
        question: 'How much sod do I need?',
        answer:
          'Measure length × width for each section, add ~10% waste for cuts and seams, then divide by roll or pallet coverage. A typical roll covers about 10 sq ft; a pallet often covers ~450 sq ft — confirm with your supplier.',
      },
      {
        question: 'How many rolls of sod in a pallet?',
        answer:
          'It depends on roll size. If rolls are 10 sq ft and a pallet covers 450 sq ft, that is about 45 rolls. Enter your supplier’s roll and pallet coverage in settings.',
      },
      {
        question: 'Should I buy sod by the roll or pallet?',
        answer:
          'Small patches often use rolls from a garden center. Full lawns are cheaper by the pallet with delivery. Enter both prices to compare.',
      },
    ],
  },
];

export const FEATURED_LANDING_SLUGS = [
  'mulch-cost-estimator',
  'mulch-calculator',
  'cubic-yards-calculator',
  'topsoil-calculator',
  'playground-mulch-calculator',
  'stone-mulch-calculator',
] as const;

export const FEATURED_LANDING_LINKS = FEATURED_LANDING_SLUGS.map((slug) =>
  LANDING_PAGES.find((p) => p.slug === slug)
).filter((p): p is LandingPage => p !== undefined);

export function getLandingPageBySlug(slug: string): LandingPage | undefined {
  return LANDING_PAGES.find((page) => page.slug === slug);
}

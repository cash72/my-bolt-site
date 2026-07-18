import type { MaterialType } from './flooring/types';

export interface LandingPage {
  slug: string;
  path: string;
  material: MaterialType;
  title: string;
  h1: string;
  description: string;
  breadcrumbLabel: string;
  intro: string;
  faqs: { question: string; answer: string }[];
  relatedGuideSlugs?: string[];
}

export const LANDING_PAGES: LandingPage[] = [
  {
    slug: 'laminate-flooring-calculator',
    path: '/laminate-flooring-calculator',
    material: 'laminate',
    title: 'Laminate Flooring Calculator — Sq Ft, Waste & Boxes',
    h1: 'Laminate Flooring Calculator',
    description:
      'Free laminate flooring calculator. Enter room dimensions in feet and inches, add waste, and get box counts for your project.',
    breadcrumbLabel: 'Laminate calculator',
    intro:
      'Plan laminate flooring for one or more rectangular rooms. Default waste is 10% for cuts and mistakes — adjust if your layout needs more.',
    faqs: [
      {
        question: 'How much waste should I add for laminate?',
        answer:
          'Most installers add 10% extra for straight layouts. Use 12–15% if you have many doorways, closets, or diagonal cuts.',
      },
      {
        question: 'How many sq ft are in a box of laminate?',
        answer:
          'Common boxes cover 18–24 sq ft. Check your product label — enter the exact coverage in the calculator for accurate box counts.',
      },
      {
        question: 'Can I calculate multiple rooms at once?',
        answer:
          'Yes. Add up to five rooms and the calculator totals the area, waste, and boxes for the whole project.',
      },
    ],
    relatedGuideSlugs: [
      'do-i-need-underlay-for-laminate',
      'how-to-install-laminate-flooring-beginners',
      'how-much-flooring-waste-to-buy',
    ],
  },
  {
    slug: 'vinyl-plank-calculator',
    path: '/vinyl-plank-calculator',
    material: 'laminate',
    title: 'Vinyl Plank (LVP) Calculator — Sq Ft, Waste & Boxes',
    h1: 'Vinyl Plank / LVP Calculator',
    description:
      'Free luxury vinyl plank calculator. Enter room size, add waste, and get box counts for LVP and waterproof vinyl flooring.',
    breadcrumbLabel: 'Vinyl plank calculator',
    intro:
      'Luxury vinyl plank (LVP) uses the same box math as laminate — sq ft per carton plus waste. Default waste is 10% for straight layouts.',
    faqs: [
      {
        question: 'Is LVP calculated the same as laminate?',
        answer:
          'Yes — measure square footage, add waste, divide by sq ft per box, round up. LVP boxes often cover 18–30 sq ft depending on plank size.',
      },
      {
        question: 'How much extra LVP should I buy?',
        answer:
          '10% for simple rooms; 12–15% if you have many cuts, closets, or a diagonal layout. Keep one spare box for future repairs.',
      },
      {
        question: 'Do I need underlay for vinyl plank?',
        answer:
          'Many LVP products include an attached pad. If not, use underlayment rated for vinyl — see our underlay guide for laminate and LVP.',
      },
    ],
    relatedGuideSlugs: [
      'laminate-vs-vinyl-plank-which-to-buy',
      'do-i-need-underlay-for-laminate',
      'how-to-choose-laminate-flooring',
    ],
  },
  {
    slug: 'flooring-square-footage-calculator',
    path: '/flooring-square-footage-calculator',
    material: 'laminate',
    title: 'Flooring Square Footage Calculator — How Much Flooring? (Free)',
    h1: 'Flooring Square Footage Calculator',
    description:
      'Free flooring square footage calculator. Enter room dimensions — get total sq ft with waste for laminate, vinyl, tile, or carpet before you buy boxes.',
    breadcrumbLabel: 'Sq ft calculator',
    intro:
      'Start with accurate square footage — then convert to boxes using coverage per carton. This calculator totals all rooms and adds your waste percentage.',
    faqs: [
      {
        question: 'How do I calculate flooring square footage?',
        answer:
          'For each rectangular room, multiply length × width in feet. Add all rooms together, then multiply by (1 + waste%) for the amount to buy.',
      },
      {
        question: 'Does square footage include waste?',
        answer:
          'Our results show both raw room area and total with waste. Use the “with waste” number when dividing by sq ft per box.',
      },
      {
        question: 'Can I use this for carpet?',
        answer:
          'Yes — switch material to carpet to see square yards, or use our carpet calculator for sq yd ordering.',
      },
    ],
    relatedGuideSlugs: ['how-to-measure-rooms-for-flooring', 'how-much-flooring-waste-to-buy'],
  },
  {
    slug: 'tile-flooring-calculator',
    path: '/tile-flooring-calculator',
    material: 'tile',
    title: 'Tile Flooring Calculator — Sq Ft, Waste & Boxes',
    h1: 'Tile Flooring Calculator',
    description:
      'Free tile calculator for floor area, waste allowance, and box counts. Works with ceramic, porcelain, and stone tile.',
    breadcrumbLabel: 'Tile calculator',
    intro:
      'Tile projects usually need more waste than laminate because of cuts around fixtures and breakage. Default waste is 15%.',
    faqs: [
      {
        question: 'How much extra tile should I buy?',
        answer:
          '15% is a common starting point for rectangular rooms. Complex layouts or large format tile may need 18–20%.',
      },
      {
        question: 'How do I find sq ft per tile box?',
        answer:
          'Multiply tile length × width in inches, divide by 144 for sq ft per tile, then multiply by pieces per box. Or use the coverage printed on the box.',
      },
      {
        question: 'Does this work for wall tile?',
        answer:
          'The math is the same — enter wall length and height as your room dimensions. Consider extra waste for outlets and niches.',
      },
    ],
    relatedGuideSlugs: [
      'how-to-prep-for-tile-floor',
      'how-to-choose-floor-tile',
      'large-format-tile-tips',
    ],
  },
  {
    slug: 'flooring-waste-calculator',
    path: '/flooring-waste-calculator',
    material: 'laminate',
    title: 'Flooring Waste Calculator — How Much Extra to Buy',
    h1: 'Flooring Waste Calculator',
    description:
      'Calculate how much extra flooring to buy for waste. See waste square footage and cost for laminate and tile projects.',
    breadcrumbLabel: 'Waste calculator',
    intro:
      'Avoid short orders by adding the right waste factor. Compare 10% vs 15% and see exactly how many extra square feet you are buying.',
    faqs: [
      {
        question: 'What is a waste factor in flooring?',
        answer:
          'It is extra material beyond your measured room area to cover cuts, mistakes, and future repairs. It is usually expressed as a percentage.',
      },
      {
        question: 'Is 10% waste enough?',
        answer:
          'Often yes for simple rectangular laminate rooms. Tile and intricate layouts typically need 15% or more.',
      },
      {
        question: 'Should I round up boxes?',
        answer:
          'Yes. The calculator always rounds up to whole boxes so you do not run short on install day.',
      },
    ],
    relatedGuideSlugs: ['how-much-flooring-waste-to-buy', 'how-many-flooring-boxes-guide'],
  },
  {
    slug: 'how-many-flooring-boxes',
    path: '/how-many-flooring-boxes',
    material: 'laminate',
    title: 'How Many Flooring Boxes Do I Need?',
    h1: 'How Many Flooring Boxes Do I Need?',
    description:
      'Enter room size and box coverage to find how many flooring boxes to buy. Includes waste and rounds up automatically.',
    breadcrumbLabel: 'Box calculator',
    intro:
      'Box counts depend on total square footage (with waste) divided by coverage per box. We round up so you never buy too few.',
    faqs: [
      {
        question: 'How are flooring boxes calculated?',
        answer:
          'Divide total square footage including waste by sq ft per box, then round up to the next whole number.',
      },
      {
        question: 'What if my last box is only partly used?',
        answer:
          'That is normal. The leftover is your waste allowance plus partial-box remainder. Keep extra planks for future repairs.',
      },
      {
        question: 'Can I enter price per box?',
        answer:
          'Yes. Optional price per box gives an estimated total and shows roughly how much of your spend goes to waste material.',
      },
    ],
    relatedGuideSlugs: ['how-many-flooring-boxes-guide', 'how-to-measure-rooms-for-flooring'],
  },
  {
    slug: 'square-yard-calculator',
    path: '/square-yard-calculator',
    material: 'carpet',
    title: 'Square Yard Calculator for Carpet — Sq Ft to Sq Yd',
    h1: 'Square Yard Calculator for Carpet',
    description:
      'Convert room square footage to square yards for carpet ordering. Includes waste allowance and rounds up.',
    breadcrumbLabel: 'Square yard calculator',
    intro:
      'Carpet is priced and ordered in square yards (sq yd). We total your rooms, add waste, divide by 9, and round up.',
    faqs: [
      {
        question: 'How many square feet in a square yard?',
        answer: 'One square yard equals 9 square feet. Divide total sq ft by 9 to get sq yd.',
      },
      {
        question: 'How much carpet waste should I add?',
        answer: '10% is typical for plain carpet. Patterned or berber carpet may need 15% for pattern matching.',
      },
      {
        question: 'Is pad included?',
        answer: 'Order the same square yards of carpet pad separately — this calculator is carpet area only.',
      },
    ],
    relatedGuideSlugs: ['carpet-pad-guide', 'how-to-choose-carpet-for-rooms'],
  },
  {
    slug: 'carpet-calculator',
    path: '/carpet-calculator',
    material: 'carpet',
    title: 'Carpet Calculator — Sq Ft, Square Yards & Waste',
    h1: 'Carpet Calculator',
    description:
      'Free carpet calculator. Enter room dimensions, add waste, and get square yards to order at the store.',
    breadcrumbLabel: 'Carpet calculator',
    intro:
      'Carpet is sold by the square yard. We convert your room square footage (with waste) to sq yd and round up.',
    faqs: [
      {
        question: 'How do I convert sq ft to sq yd for carpet?',
        answer: 'Divide square footage by 9. A 12×12 room is 144 sq ft, which equals 16 square yards.',
      },
      {
        question: 'How much extra carpet should I buy?',
        answer: 'Add 10% for seams, closets, and stairs not modeled here. Increase waste for patterned carpet.',
      },
      {
        question: 'Does this include pad?',
        answer: 'This estimates carpet area only. Order the same square yards of pad separately.',
      },
    ],
    relatedGuideSlugs: ['carpet-pad-guide', 'how-to-choose-carpet-for-rooms', 'how-to-measure-rooms-for-flooring'],
  },
  {
    slug: 'how-many-tiles-do-i-need',
    path: '/how-many-tiles-do-i-need',
    material: 'tile',
    title: 'How Many Tiles Do I Need? — Tile Box Calculator',
    h1: 'How Many Tiles Do I Need?',
    description:
      'Calculate how many tile boxes to buy from room size, waste allowance, and coverage per box.',
    breadcrumbLabel: 'Tile count',
    intro:
      'Enter room dimensions and sq ft per box from your tile carton. Default waste is 15% for cuts and breakage.',
    faqs: [
      {
        question: 'How many extra tiles should I buy?',
        answer: '15% is standard for rectangular floors. Complex layouts or large format tile may need 18–20%.',
      },
      {
        question: 'How do I find sq ft per tile box?',
        answer: 'Check the box label. Multiply tile size × pieces per box ÷ 144, or use the printed coverage area.',
      },
      {
        question: 'Does this work for backsplash tile?',
        answer: 'Yes. Enter backsplash length and height as your room dimensions for wall tile projects.',
      },
    ],
    relatedGuideSlugs: ['how-to-prep-for-tile-floor', 'large-format-tile-tips', 'how-much-flooring-waste-to-buy'],
  },
  {
    slug: 'stair-carpet-calculator',
    path: '/stair-carpet-calculator',
    material: 'carpet',
    title: 'Stair Carpet Calculator — Square Yards for Stairs',
    h1: 'Stair Carpet Calculator',
    description:
      'Estimate carpet square yards for stairs and runners. Enter stair dimensions as rooms and add extra waste for treads, risers, and bullnose.',
    breadcrumbLabel: 'Stair carpet',
    intro:
      'Stair carpet is ordered in square yards like room carpet. Measure each flight as length × width (tread depth × stair width) or add individual stair "rooms" — default waste is 15% for cuts and wrapping.',
    faqs: [
      {
        question: 'How much carpet for 13 stairs?',
        answer:
          'Estimate each tread+riser as roughly 2 sq ft per step (varies by overhang). 13 stairs ≈ 26 sq ft per foot of width — a 3 ft wide run needs ~78 sq ft plus 15% waste ≈ 10 sq yd.',
      },
      {
        question: 'How much extra waste for stairs?',
        answer:
          'Use 15–20% waste for stairs vs 10% for flat rooms. Bullnose, winders, and pattern matching consume more material.',
      },
      {
        question: 'Do I need pad on stairs?',
        answer:
          'Yes — use thin, dense stair pad or the pad recommended by your carpet manufacturer. Order pad in the same square yards as carpet.',
      },
    ],
    relatedGuideSlugs: ['how-to-choose-carpet-for-rooms', 'carpet-pad-guide', 'how-to-measure-rooms-for-flooring'],
  },
];

export const FEATURED_LANDING_SLUGS = [
  'how-many-flooring-boxes',
  'laminate-flooring-calculator',
  'stair-carpet-calculator',
  'tile-flooring-calculator',
  'carpet-calculator',
  'vinyl-plank-calculator',
  'flooring-waste-calculator',
  'how-many-tiles-do-i-need',
] as const;

export const FEATURED_LANDING_LINKS = FEATURED_LANDING_SLUGS.map((slug) =>
  LANDING_PAGES.find((p) => p.slug === slug)
).filter((p): p is LandingPage => p !== undefined);

export function getLandingPageBySlug(slug: string): LandingPage | undefined {
  return LANDING_PAGES.find((page) => page.slug === slug);
}

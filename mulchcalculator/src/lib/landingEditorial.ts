export interface LandingEditorialSection {
  heading: string;
  paragraphs: string[];
}

export interface LandingEditorial {
  intro?: string;
  sections: LandingEditorialSection[];
}

export const LANDING_EDITORIAL: Record<string, LandingEditorial> = {
  'mulch-calculator': {
    intro:
      'Mulch is ordered in cubic yards or by the bag. Measure each bed in feet, set depth (3 inches is standard for shrub beds), and we convert area × depth into yards and bag counts.',
    sections: [
      {
        heading: 'The cubic yard formula',
        paragraphs: [
          'Cubic yards = (length × width × depth in feet) ÷ 27. A 10×10 bed at 3 inches (0.25 ft) = 25 cu ft ≈ 0.93 cubic yards — round up to 1 yard when buying bulk.',
          'For gravel paths or driveways, switch material type or use our dedicated [gravel calculator](/gravel-calculator) with deeper default depths.',
        ],
      },
      {
        heading: 'Depth and weed control',
        paragraphs: [
          'Two inches is minimum for weed suppression; three inches is the landscaping standard around trees and shrubs. Four inches can work for playgrounds but may hold too much moisture against plant stems.',
        ],
      },
      {
        heading: 'Bags vs bulk delivery',
        paragraphs: [
          'One cubic yard = 27 cu ft. Standard 2 cu ft mulch bags need about 14 bags per yard. Small projects under half a yard are often cheaper in bags; whole-yard orders save labor on spreading.',
        ],
      },
    ],
  },

  'gravel-calculator': {
    intro:
      'Gravel projects need more depth than mulch — paths use 2–3 inches, driveways 4–6 inches after compaction. Enter your area and depth for cubic yards and optional bag counts for pea gravel.',
    sections: [
      {
        heading: 'Depth by application',
        paragraphs: [
          'Walking paths and patios: 2–3 inches of compacted gravel. Residential driveways: 4–6 inches total, often in two lifts with a base layer. Drainage swales may need 6+ inches depending on slope.',
          'Switch back to [mulch calculator](/mulch-calculator) for decorative beds at 2–4 inch depth.',
        ],
      },
      {
        heading: 'Bulk vs bagged pea gravel',
        paragraphs: [
          'Landscaping supply yards sell by the cubic yard. Bagged pea gravel (often 0.5 cu ft) makes sense for small accent areas — the calculator shows both yardage and bag totals.',
        ],
      },
      {
        heading: 'Compaction and ordering',
        paragraphs: [
          'Add 10% for settling and uneven subgrade. Compact in lifts with a plate compactor on driveways — ordered volume is loose; compacted volume is what you walk or drive on.',
        ],
      },
    ],
  },

  'cubic-yards-calculator': {
    intro:
      'Any rectangular area with a uniform depth converts to cubic yards the same way — whether you are spreading mulch, gravel, topsoil, or fill. This page is the general-purpose volume tool for landscaping beds and small earthwork.',
    sections: [
      {
        heading: 'Square feet to cubic yards',
        paragraphs: [
          'Multiply square footage by depth in feet, divide by 27. Example: 200 sq ft × 0.33 ft (4") = 66 cu ft = 2.44 cubic yards.',
          'Use the [mulch calculator](/mulch-calculator) for pre-set 3 inch mulch depth, or [gravel calculator](/gravel-calculator) for path and driveway defaults.',
        ],
      },
      {
        heading: 'Pickup truck and trailer loads',
        paragraphs: [
          'A full-size pickup holds roughly 1.5–2 cubic yards level with the bed sides. Weight varies: mulch ~400–800 lb/yd, gravel 2,000+ lb/yd — check payload before loading.',
        ],
      },
      {
        heading: 'Waste and settling',
        paragraphs: [
          'Add 10% for spillage, uneven ground, and settling — especially on fresh topsoil or loose gravel. Adjust the waste slider in project settings before copying your shopping list.',
        ],
      },
    ],
  },

  'playground-mulch-calculator': {
    intro:
      'Playground safety surfacing is sold in volume like landscape mulch — but depth requirements are much deeper. Default 12 inches matches many engineered wood fiber specs; confirm critical fall height with your equipment manufacturer.',
    sections: [
      {
        heading: 'Depth vs fall height',
        paragraphs: [
          'Public playgrounds often maintain 9–12 inches of loose-fill mulch at the use zone. Residential play sets may need less — check ASTM F1292 and your playset manual before ordering.',
          'Compare [rubber vs wood playground mulch](/guides/rubber-mulch-vs-wood-mulch) and [mulch depth guide](/guides/mulch-depth-how-deep) before choosing material.',
        ],
      },
      {
        heading: 'Bulk delivery at playground scale',
        paragraphs: [
          'A 20×30 play area at 12" depth is about 22 cubic yards — bagged mulch is impractical at that volume. Use our [cubic yards calculator](/cubic-yards-calculator) for smaller border beds around the play zone.',
        ],
      },
    ],
  },

  'topsoil-calculator': {
    intro:
      'Topsoil orders use the same cubic-yard math as mulch — area × depth ÷ 27. Default 4 inches suits new garden beds; use 1–2 inches for lawn leveling and patch repair.',
    sections: [
      {
        heading: 'Garden beds vs lawn topdress',
        paragraphs: [
          'New vegetable and flower beds often need 4–6 inches of quality topsoil worked into native soil. Lawn repairs may only need 1–2 inches raked over bare patches.',
          'Read our [topsoil calculator guide](/guides/topsoil-calculator-guide) for screened vs unscreened soil and when to add compost.',
        ],
      },
      {
        heading: 'Delivery tips',
        paragraphs: [
          'A pickup truck holds roughly 1.5–2 cubic yards level full. Have the dump spot accessible — wet topsoil is heavy and will rut soft lawns.',
        ],
      },
    ],
  },

  'stone-mulch-calculator': {
    intro:
      'Decorative stone and river rock beds use 2–4 inches over landscape fabric. Enter bed dimensions — we convert to cubic yards the same way as gravel paths.',
    sections: [
      {
        heading: 'Stone vs organic mulch',
        paragraphs: [
          'Stone does not decompose and rarely needs topping up. Wood mulch refreshes every 1–2 years but improves soil as it breaks down. See [mulch vs bark vs compost](/guides/mulch-vs-bark-vs-compost) for planting beds with living shrubs.',
          'For driveways and paths, use the dedicated [gravel calculator](/gravel-calculator) with deeper default depth.',
        ],
      },
      {
        heading: 'Weight and delivery',
        paragraphs: [
          'Stone is heavier than mulch — confirm driveway or gate access for bulk dumps. A cubic yard of river rock can weigh 2,000+ lbs depending on stone type.',
        ],
      },
    ],
  },

  'mulch-cost-estimator': {
    intro:
      'How much does mulch cost? Volume alone is not enough — enter bed area and depth, then local bulk $/yard and bag prices to compare delivery vs bagged mulch before you order.',
    sections: [
      {
        heading: 'Bulk vs bags — the break-even',
        paragraphs: [
          'Bulk cubic yards usually win past about one yard once you count ~14 bags per yard of 2 cu ft bags plus store trips. Bags win for half-yard cosmetic refreshes and beds far from the driveway drop point.',
          'Worked example: 150 sq ft at 3 inches ≈ 1.4 cu yd. At $40/yard materials ≈ $56; as bags at $4.50 × ~20 ≈ $90 before tax. Flip the prices above to match your nursery and big-box tags.',
          'See [delivery vs bags](/guides/delivery-vs-bags-bulk-mulch) and [bags per yard](/guides/how-many-mulch-bags-per-yard) for logistics detail — or get clean yardage first with the [mulch calculator](/mulch-calculator).',
        ],
      },
      {
        heading: 'Seasonal pricing without new landings',
        paragraphs: [
          'Late summer into early fall is when many yards restock dyed bulk and fall colors. Measure after you pull summer weeds, order only the top-up depth you need (often 1–2 inches over existing mulch), and compare quotes while suppliers still have capacity.',
          'August–September tip: call for delivery lead times before weekend demand stacks up — wait lists stretch faster than $/yard in many markets. Depth and timing tips live in [fall mulch application timing](/guides/fall-mulch-application-timing) and [spring mulch application](/guides/spring-mulch-application-guide).',
        ],
      },
      {
        heading: 'What this estimate leaves out',
        paragraphs: [
          'Delivery fees, tax, landscape fabric, and edging are separate. Many suppliers charge a flat delivery under 3–5 yards — add that line after you lock materials totals from each quote.',
          'Treat the result as a planning comparison between bulk and bags, not a supplier invoice. Confirm bag size (2 vs 3 cu ft) and whether dyed bulk matches the bag SKU you want.',
        ],
      },
    ],
  },

  'sod-calculator': {
    intro:
      'Sod is sold by coverage — rolls for patches, pallets for full lawns. Enter lawn dimensions and we convert area plus waste into roll and pallet counts.',
    sections: [
      {
        heading: 'Roll and pallet coverage',
        paragraphs: [
          'Common DIY rolls cover about 10 sq ft (often 2×5 ft). Pallets commonly cover roughly 400–500 sq ft depending on the farm — edit coverage in settings to match your quote.',
          'Add ~10% waste for cuts around beds, curves, and seams. Prep soil first — see our [topsoil calculator](/topsoil-calculator) if you are leveling before install.',
        ],
      },
      {
        heading: 'Pricing tips',
        paragraphs: [
          'Enter price per roll and per pallet to compare. Full-lawn orders almost always price better by the pallet with delivery than by individual rolls.',
        ],
      },
    ],
  },
};

export function getLandingEditorial(slug: string): LandingEditorial | undefined {
  return LANDING_EDITORIAL[slug];
}

export interface LandingEditorialSection {
  heading: string;
  paragraphs: string[];
}

export interface LandingEditorial {
  intro?: string;
  sections: LandingEditorialSection[];
}

export const LANDING_EDITORIAL: Record<string, LandingEditorial> = {
  'drywall-calculator': {
    intro:
      'Drywall is sold by the sheet — but you buy based on wall area. Enter room length, width, and ceiling height and we convert perimeter × height into whole 4×8 or 4×12 sheets with waste included.',
    sections: [
      {
        heading: 'How wall area is calculated',
        paragraphs: [
          'For a rectangular room, wall area = 2 × ceiling height × (length + width). A 12×12 room with 8 ft ceilings has 384 sq ft of wall — before deducting doors and windows.',
          'Toggle ceiling drywall in project settings to add length × width on top of wall area. Use our [ceiling drywall calculator](/drywall-for-ceiling-calculator) when walls and ceiling are separate purchases.',
        ],
      },
      {
        heading: 'Sheet sizes and waste',
        paragraphs: [
          'Standard 4×8 sheets cover 32 sq ft; 4×12 sheets cover 48 sq ft and reduce horizontal seams on long walls. Most DIYers add 10% waste for cuts and mistakes — increase to 12–15% for rooms with many corners or niches.',
          'Need a quick sheet count without re-entering dimensions? Jump to [how many drywall sheets](/how-many-drywall-sheets) for the same math with a sheet-first framing.',
        ],
      },
      {
        heading: 'Before you order at the lumber yard',
        paragraphs: [
          'Match sheet thickness to your application — 1/2 inch is typical for walls; some ceilings require 5/8 inch for fire rating. Count screws, joint compound, and tape separately — this tool focuses on sheet quantity only.',
        ],
      },
    ],
  },

  'how-many-drywall-sheets': {
    intro:
      'Big-box stores and lumber yards price drywall by the sheet, not by square foot. This page runs the same room math as our main calculator but emphasizes the final sheet count you hand to the cashier.',
    sections: [
      {
        heading: 'From square feet to sheets',
        paragraphs: [
          'Divide total area (with waste) by sheet square footage, then round up. Example: 420 sq ft with 10% waste = 462 sq ft ÷ 32 sq ft per 4×8 sheet ≈ 14.4 → buy 15 sheets.',
          'Switch sheet dimensions in settings — a 4×12 sheet changes the divisor from 32 to 48 sq ft and often lowers the sheet count on long walls.',
        ],
      },
      {
        heading: 'Room examples',
        paragraphs: [
          'A 10×12 bedroom with 8 ft ceilings has about 352 sq ft of wall. After 10% waste and two standard doors deducted, expect roughly 12–13 sheets of 4×8.',
          'For ceiling-only jobs, use the [drywall for ceiling calculator](/drywall-for-ceiling-calculator) — ceiling area is simply length × width.',
        ],
      },
      {
        heading: 'Should you buy a spare sheet?',
        paragraphs: [
          'Waste is already in the total. Keeping one extra sheet from the same lot number is smart for future patches — especially on visible walls where color and texture must match.',
        ],
      },
    ],
  },

  'drywall-for-ceiling-calculator': {
    intro:
      'Ceiling drywall adds a flat rectangle (length × width) on top of your wall area. Hanging ceiling boards is slower and cut-heavy — this calculator includes both surfaces so one trip to the store covers the room.',
    sections: [
      {
        heading: 'Ceiling area math',
        paragraphs: [
          'Ceiling sq ft = room length × room width. A 14×16 great room adds 224 sq ft on top of wall area. Toggle "walls + ceiling" or use this page with ceiling included by default.',
          'For wall-only estimates, use the main [drywall calculator](/drywall-calculator) and leave ceiling off.',
        ],
      },
      {
        heading: 'Thickness and fire code',
        paragraphs: [
          '1/2 inch gypsum is common on residential ceilings. Garages, party walls, and some jurisdictions require 5/8 inch Type X for fire rating — sheet count math is identical regardless of thickness.',
        ],
      },
      {
        heading: 'Extra waste for ceilings',
        paragraphs: [
          'Recessed lights, fan boxes, and soffits add cutouts. Start with 10% waste; bump to 12–15% if you have more than four ceiling penetrations or angled tray ceilings.',
        ],
      },
    ],
  },

  'basement-drywall-calculator': {
    intro:
      'Basement finishing is sheet-count math plus moisture and fire-code decisions. Enter each room you are drywalling — we total wall area, deduct openings, and round up to 4×8 or 4×12 sheets.',
    sections: [
      {
        heading: 'Below-grade considerations',
        paragraphs: [
          'Basement walls are often shorter than main-floor rooms and may include soffits around ducts. Measure each finished rectangle separately if heights differ.',
          'See our [basement renovation guide](/guides/drywall-for-basement-renovation) for mold-resistant board, framing, and vapor control before you hang.',
        ],
      },
      {
        heading: 'Ceiling and utility chases',
        paragraphs: [
          'If you are drywalling the ceiling to hide joists, add ceiling area or use the [ceiling calculator](/drywall-for-ceiling-calculator). Utility walls around panels need their own dimensions entered as part of the room or a second space.',
        ],
      },
    ],
  },

  'garage-drywall-calculator': {
    intro:
      'Garage drywall is usually perimeter walls only — big openings for overhead doors cut into your net area. Enter bay dimensions and we estimate sheets with standard door deductions.',
    sections: [
      {
        heading: 'Fire-rated assemblies',
        paragraphs: [
          'Attached garages often require Type X drywall on walls and ceilings that face living space. Sheet quantity is unchanged — thickness and fire rating are separate line items at the store.',
        ],
      },
      {
        heading: 'Workshop and insulated garages',
        paragraphs: [
          'If you insulated stud bays before drywall, your sheet count is the same as an uninsulated wall. Add 10–12% waste for around windows, man doors, and corner beads.',
        ],
      },
    ],
  },

  'drywall-cost-estimator': {
    intro:
      'Sheet count alone does not finish a budget. Add local prices for drywall panels, joint compound, and screw boxes to get a materials-only total before labor or texture.',
    sections: [
      {
        heading: 'What this estimator includes',
        paragraphs: [
          'We convert room dimensions into sheets (with waste), rough screw counts (~32 per sheet), and five-gallon mud buckets (~1 per 200 sq ft for Level 4). Enter store prices and we sum sheets + mud + screws.',
          'Tape, corner bead, primer, and sanding supplies are small add-ons — budget them separately. See [estimating screws and compound](/guides/estimating-drywall-screws-and-compound) for Level 4 baselines.',
        ],
      },
      {
        heading: 'Labor is separate',
        paragraphs: [
          'Hang-and-tape labor varies widely by market. Use this materials total to compare lumber-yard quotes, then get a pro bid if you are not finishing yourself.',
          'Need sheet count only? Use the main [drywall calculator](/drywall-calculator) or [how many sheets](/how-many-drywall-sheets).',
        ],
      },
    ],
  },
};

export function getLandingEditorial(slug: string): LandingEditorial | undefined {
  return LANDING_EDITORIAL[slug];
}

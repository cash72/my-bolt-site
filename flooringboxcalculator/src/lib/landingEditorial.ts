export interface LandingEditorialSection {
  heading: string;
  paragraphs: string[];
}

export interface LandingEditorial {
  intro?: string;
  sections: LandingEditorialSection[];
}

export const LANDING_EDITORIAL: Record<string, LandingEditorial> = {
  'laminate-flooring-calculator': {
    intro:
      'Standing at the flooring aisle, the question is always the same: how many boxes? This calculator turns your room dimensions into a box count — with waste, sq ft per carton, and rounded-up totals for install day.',
    sections: [
      {
        heading: 'Why box counts matter before you buy',
        paragraphs: [
          'Running short mid-install means a second trip to the store — and the new batch may not match the first dye lot exactly. Buying too many leaves sealed cartons in the garage for years.',
          'A 12×12 room is 144 sq ft. At 10% waste that is 158 sq ft to buy. With 20 sq ft per box, that is 8 boxes — we round up automatically so you never buy too few.',
        ],
      },
      {
        heading: 'Underlay and acclimation — plan before you click',
        paragraphs: [
          'Laminate floats over underlayment — order pad separately in the same square footage as your floor. See [do I need underlay for laminate](/guides/do-i-need-underlay-for-laminate) for foam vs cork choices.',
          'Let cartons sit in the install room for 48 hours before opening. Our [flooring acclimation guide](/guides/flooring-acclimation-before-install) explains temperature and humidity targets.',
        ],
      },
      {
        heading: 'Waste allowance for straight layouts',
        paragraphs: [
          'Default 10% covers end cuts, mistakes, and future plank repairs. Hallways with many doorways, closets, or diagonal layouts may need 12–15%. The [flooring waste guide](/guides/how-much-flooring-waste-to-buy) walks through room-by-room factors.',
          'Keep one spare box from the same lot for patches. Store it flat in a climate-controlled space — not the garage if temperatures swing.',
        ],
      },
    ],
  },

  'vinyl-plank-calculator': {
    intro:
      'Luxury vinyl plank (LVP) uses the same box math as laminate — total square footage with waste, divided by sq ft per carton. Waterproof click-lock planks are sold in cartons covering 18–30 sq ft depending on plank width.',
    sections: [
      {
        heading: 'LVP vs laminate — same math, different product',
        paragraphs: [
          'Both products measure length × width for area, add waste, divide by box coverage, round up. LVP is waterproof and often includes an attached pad — check the label before ordering separate underlay.',
          'Not sure which to buy? Read [laminate vs vinyl plank](/guides/laminate-vs-vinyl-plank-which-to-buy) for basement, kitchen, and budget comparisons.',
        ],
      },
      {
        heading: 'Box coverage varies by plank size',
        paragraphs: [
          'Wider planks (7–9 inches) cover more sq ft per carton than narrow strips. The number on the box is the only reliable source — enter it in project settings above for an accurate count.',
          'For whole-home LVP projects, add up to five rooms and the calculator totals boxes for the entire job in one run.',
        ],
      },
      {
        heading: 'Basement and bathroom installs',
        paragraphs: [
          'LVP handles moisture better than laminate — still prep the subfloor flat within 3/16 inch over 10 feet. See [how to prep subfloor](/guides/how-to-prep-subfloor-before-installing-flooring) before you order materials.',
          'Transition strips at doorways are not included in box counts — budget for T-molding or reducers at every room change.',
        ],
      },
    ],
  },

  'flooring-square-footage-calculator': {
    intro:
      'Accurate square footage is step one for any flooring project. Enter room dimensions in feet and inches — we total all rooms, add your waste percentage, and show the number to divide by box coverage.',
    sections: [
      {
        heading: 'Length × width — the foundation of every estimate',
        paragraphs: [
          'For each rectangular room, multiply length by width in feet. A 10×14 living room is 140 sq ft. Add every room you are flooring in one colour before applying waste.',
          'Our [how to measure rooms for flooring](/guides/how-to-measure-rooms-for-flooring) guide covers L-shaped spaces, closets, and when to measure inside vs outside of door frames.',
        ],
      },
      {
        heading: 'Raw area vs area with waste',
        paragraphs: [
          'The results panel shows both numbers. Use the “with waste” total when dividing by sq ft per box or when ordering carpet by the square yard.',
          'Waste is not optional — even perfect installers lose material to cuts and defects. Compare 10% vs 15% in settings to see how much extra you are buying.',
        ],
      },
      {
        heading: 'Convert sq ft to boxes or square yards',
        paragraphs: [
          'Laminate and tile: divide total sq ft (with waste) by coverage per box, round up. Carpet: divide by 9 for square yards. Use our [box calculator](/how-many-flooring-boxes) or [carpet calculator](/carpet-calculator) for material-specific rounding.',
        ],
      },
    ],
  },

  'tile-flooring-calculator': {
    intro:
      'Tile is sold by the box, not the single piece. Enter room dimensions, set waste to 15% for cuts and breakage, and enter sq ft per carton from your tile label for a box count rounded up.',
    sections: [
      {
        heading: 'Why tile needs more waste than laminate',
        paragraphs: [
          'Cuts around toilets, door casings, and floor registers consume full tiles that never touch the floor. Breakage during transport and install adds another 2–3%. Default 15% is a solid starting point for rectangular rooms.',
          'Complex layouts, herringbone, or large-format tile may need 18–20%. See [how much flooring waste to buy](/guides/how-much-flooring-waste-to-buy) for layout-specific guidance.',
        ],
      },
      {
        heading: 'Finding sq ft per tile box',
        paragraphs: [
          'Check the carton label first. Or multiply tile length × width in inches, divide by 144 for sq ft per tile, then multiply by pieces per box.',
          'Large-format tiles (12×24 and bigger) cover more area per box but break more easily — handle with care and add extra for the learning curve if this is your first tile job.',
        ],
      },
      {
        heading: 'Subfloor prep before you order',
        paragraphs: [
          'Tile needs a flat, rigid base — flex causes cracked grout and loose tiles. Read [how to prep for tile floor](/guides/how-to-prep-for-tile-floor) and [tile underlayment guide](/guides/tile-underlayment-membrane-guide) before buying thinset and membrane.',
          'For wall tile and backsplash, enter backsplash length and height as your room dimensions — waste for outlets and niches runs higher than floor tile.',
        ],
      },
    ],
  },

  'flooring-waste-calculator': {
    intro:
      'The waste percentage is the difference between a smooth install weekend and an emergency store run. Compare 10% vs 15% side by side and see exactly how many extra square feet — and dollars — you are committing to.',
    sections: [
      {
        heading: 'What waste factor actually covers',
        paragraphs: [
          'End cuts along walls, mistakes at the saw, defective planks or tiles, and future repairs all come from your waste allowance. It is not padding for sloppy measuring — it is realistic material loss.',
          'A 200 sq ft room at 10% waste buys 220 sq ft. At 15%, that jumps to 230 sq ft — enough for one extra box of laminate or several extra tiles.',
        ],
      },
      {
        heading: '10% vs 15% — when to use each',
        paragraphs: [
          '10% works for simple rectangular laminate and LVP rooms with few obstacles. 15% is standard for tile because of breakage and intricate cuts. Diagonal layouts, many doorways, and herringbone patterns push toward 18–20%.',
          'Our [flooring waste guide](/guides/how-much-flooring-waste-to-buy) breaks down waste by material type and room shape.',
        ],
      },
      {
        heading: 'Waste cost in your budget',
        paragraphs: [
          'Enter price per box to see estimated total spend and how much goes to waste material. That helps you decide whether a more expensive product with better yield per box is worth it.',
          'Always round up to whole boxes after adding waste — partial boxes are not sold at retail. Use the [how many flooring boxes](/how-many-flooring-boxes) page for the final carton count.',
        ],
      },
    ],
  },

  'how-many-flooring-boxes': {
    intro:
      'The store question is always “how many boxes?” — not square footage. Enter room size, waste, and sq ft per carton from your product label. We divide, round up, and show exactly what to put in your cart.',
    sections: [
      {
        heading: 'The box math in plain terms',
        paragraphs: [
          'Total sq ft with waste ÷ sq ft per box = boxes needed. Always round up — a 7.2 box result means buy 8 boxes.',
          'A 15×12 room (180 sq ft) with 10% waste is 198 sq ft. At 22 sq ft per box, that is 9 boxes. Enter your exact dimensions above for your project.',
        ],
      },
      {
        heading: 'Where to find sq ft per box',
        paragraphs: [
          'Every laminate, LVP, and tile carton prints coverage on the label — usually 18–24 sq ft for laminate, 15–20 sq ft for tile. Big-box listings sometimes round; trust the physical box at the store.',
          'See our [how many flooring boxes guide](/guides/how-many-flooring-boxes-guide) for worked examples across room sizes.',
        ],
      },
      {
        heading: 'Leftover planks and future repairs',
        paragraphs: [
          'A partly used last box is normal — that is your waste allowance plus remainder. Keep extra planks or tiles from the same dye lot for future patches.',
          'Dye lots change between production runs. Buy all boxes from the same lot number printed on the carton wrapper.',
        ],
      },
    ],
  },

  'square-yard-calculator': {
    intro:
      'Carpet is priced and ordered in square yards, not square feet. We total your rooms, add waste, divide by 9, and round up — so the number you give the store matches what rolls off the truck.',
    sections: [
      {
        heading: 'Square feet to square yards — the conversion',
        paragraphs: [
          'Divide total square footage by 9. A 12×12 room is 144 sq ft ÷ 9 = 16 square yards. Carpet rolls are typically 12 feet wide, so the installer plans seams from your sq yd total.',
          'With 10% waste, that 144 sq ft room needs about 17.6 sq yd — round up to 18 square yards at the counter.',
        ],
      },
      {
        heading: 'Patterned and berber carpet waste',
        paragraphs: [
          'Plain carpet in a rectangular room often works at 10% waste. Patterned carpet, berber loops, and rooms with many corners may need 15% for pattern matching and seaming.',
          'Our [how to choose carpet for rooms](/guides/how-to-choose-carpet-for-rooms) guide covers pile height, fibre type, and when pattern matters.',
        ],
      },
      {
        heading: 'Carpet pad is a separate line item',
        paragraphs: [
          'Order the same square yards of pad as carpet — this calculator is carpet face fibre only. See [carpet pad guide](/guides/carpet-pad-guide) for density and moisture barrier choices.',
          'For a full carpet estimate with sq ft and sq yd side by side, try the [carpet calculator](/carpet-calculator).',
        ],
      },
    ],
  },

  'carpet-calculator': {
    intro:
      'Carpet estimates need both square feet (for comparing products) and square yards (for ordering). Enter room dimensions, add waste, and we convert to sq yd rounded up for the flooring counter.',
    sections: [
      {
        heading: 'Why carpet uses square yards',
        paragraphs: [
          'North American carpet has been sold by the square yard for decades — price tags, installer quotes, and roll inventory all use sq yd. Converting from sq ft prevents under-ordering by a factor of nine.',
          'A 10×15 bedroom is 150 sq ft = 16.67 sq yd. With 10% waste, order 19 square yards.',
        ],
      },
      {
        heading: 'Measuring for carpet — rooms and stairs',
        paragraphs: [
          'This calculator handles rectangular rooms. Stairs, landings, and hall runners need separate measurements added manually or as additional room rows.',
          'Read [how to measure rooms for flooring](/guides/how-to-measure-rooms-for-flooring) for hallways, closets, and irregular spaces before you order.',
        ],
      },
      {
        heading: 'Pad, install, and transitions',
        paragraphs: [
          'Budget pad at the same sq yd as carpet. Transition metal at hard-surface doorways is separate from carpet area. Our [flooring transition strips guide](/guides/flooring-transition-strips-and-trim) lists trim types by doorway situation.',
          'Not sure carpet is right for your room? Compare options in [laminate vs tile vs carpet](/guides/laminate-vs-tile-vs-carpet-comparison).',
        ],
      },
    ],
  },

  'how-many-tiles-do-i-need': {
    intro:
      'Tile projects fail at the store when you buy too few boxes. Enter room dimensions, 15% waste for cuts and breakage, and sq ft per carton — we give you a box count rounded up with no guesswork.',
    sections: [
      {
        heading: 'Tile box counts vs individual pieces',
        paragraphs: [
          'Retail tile is sold by the box, typically 10–15 sq ft per carton for floor tile. Dividing total sq ft (with waste) by box coverage and rounding up is the only reliable method.',
          'A 10×10 bathroom floor is 100 sq ft. At 15% waste that is 115 sq ft. With 12 sq ft per box, you need 10 boxes — not 9.',
        ],
      },
      {
        heading: 'Cuts, breakage, and layout complexity',
        paragraphs: [
          'Toilet flanges, floor drains, and door casings turn whole tiles into scrap. Large-format tile breaks more during handling — add extra if this is your first install.',
          'See [large format tile tips](/guides/large-format-tile-tips) for handling, lippage, and layout strategies that affect how much tile you use.',
        ],
      },
      {
        heading: 'Floor tile vs backsplash',
        paragraphs: [
          'The math is identical — enter wall length and height for backsplash projects. Waste runs higher on walls because of outlets, switches, and window sills.',
          'For full floor prep and thinset estimates, start with [how to prep for tile floor](/guides/how-to-prep-for-tile-floor). For product selection, see [how to choose floor tile](/guides/how-to-choose-floor-tile).',
        ],
      },
    ],
  },

  'stair-carpet-calculator': {
    intro:
      'Stair carpet is ordered in square yards like room carpet — but cuts, bullnose, and winders eat extra material. Default 15% waste is higher than flat rooms; measure each flight carefully.',
    sections: [
      {
        heading: 'Measuring stairs',
        paragraphs: [
          'Estimate each tread plus riser as roughly 2 sq ft per step per foot of stair width — a 13-step, 3 ft wide run is often 75–80 sq ft before waste.',
          'For box stairs, measure one box step as a mini rectangle. Winders and pie-shaped steps need individual measurements entered as separate “rooms.”',
        ],
      },
      {
        heading: 'Pad and installation',
        paragraphs: [
          'Order pad in the same square yards as carpet — use thin, dense stair pad rated by your carpet manufacturer. See our [carpet pad guide](/guides/carpet-pad-guide).',
          'Choosing carpet type? Read [how to choose carpet for rooms](/guides/how-to-choose-carpet-for-rooms) for fiber and pile by traffic level.',
        ],
      },
    ],
  },

  'flooring-cost-estimator': {
    intro:
      'Turn square footage into a materials-plus-install budget. Enter area, product $/sq ft, and labor rate — we estimate total project cost before you shop boxes or book an installer.',
    sections: [
      {
        heading: 'Material vs installed cost',
        paragraphs: [
          'Box labels show coverage and often a per-sq-ft material price. Installed quotes add labor, underlay, transitions, and disposal. This estimator keeps those line items separate so you can compare DIY vs pro.',
          'Get an accurate area first with the [flooring square footage calculator](/flooring-square-footage-calculator), then convert to boxes with [how many flooring boxes](/how-many-flooring-boxes).',
        ],
      },
      {
        heading: 'Waste and extras in the budget',
        paragraphs: [
          'Add 10–15% waste into the square footage you price — short boxes mid-install cost more than leftover cartons. Budget separately for underlay, trim, and threshold strips; they are rarely in the plank price.',
          'For the full DIY sequence after you know cost, follow the [DIY flooring installation roadmap](/guides/diy-flooring-installation-roadmap).',
        ],
      },
      {
        heading: 'When quotes differ wildly',
        paragraphs: [
          'Big gaps between store DIY totals and contractor quotes usually come from subfloor prep, furniture moving, or tear-out — ask what is included. Use this page as a materials baseline, not a final bid.',
        ],
      },
    ],
  },
};

export function getLandingEditorial(slug: string): LandingEditorial | undefined {
  return LANDING_EDITORIAL[slug];
}

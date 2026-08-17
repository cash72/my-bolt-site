export interface LandingEditorialSection {
  heading: string;
  paragraphs: string[];
}

export interface LandingEditorial {
  intro?: string;
  sections: LandingEditorialSection[];
}

export const LANDING_EDITORIAL: Record<string, LandingEditorial> = {
  'how-much-paint-do-i-need': {
    intro:
      'Standing at the paint counter with a Behr can (or any brand), the question is always: how many gallons? This calculator turns your room dimensions into a gallon count — with coats, waste, and coverage from your paint can label.',
    sections: [
      {
        heading: 'How much Behr paint do I need? Worked examples',
        paragraphs: [
          '12×12 room, 8 ft ceilings, walls only ≈ 384 sq ft. Two coats at Behr’s 400 sq ft/gallon label rate = 768 ÷ 400 ≈ 1.9 gallons — buy 2 gallons if walls are smooth and primed. Texture or a big colour change? Use 350 sq ft/gallon and buy 3.',
          '10×12 bedroom with two doors and one window: deduct openings in the calculator, keep two coats, and expect roughly 2 gallons of Behr Premium Plus Interior for walls. Always confirm with the exact “Coverage” line on your can.',
          'For coverage-only math (sq ft ÷ label rate), use the [Behr paint coverage calculator](/paint-coverage-calculator). Stay here when you want coats, waste, and store quantities in one pass.',
        ],
      },
      {
        heading: 'Why gallon estimates matter before you buy',
        paragraphs: [
          'Running short mid-project means a second trip to the store — and the new can may not match the first batch exactly. Buying too much leaves sealed gallons in the garage for years.',
          'Enter your exact dimensions above for your project. The quick answer box uses a typical Canadian DIY room so you have a starting point before you measure.',
        ],
      },
      {
        heading: 'Primer vs topcoat — run the numbers twice',
        paragraphs: [
          'New drywall, water stains, or a jump from navy to white usually needs [primer first](/guides/primer-before-painting). Primer often covers less area per gallon than finish paint — check the label and run the calculator once per product.',
          'If you are only refreshing the same colour on sound walls, one coat may be enough. Our [how many coats guide](/guides/how-many-coats-of-paint) walks through when two coats are non-negotiable.',
        ],
      },
      {
        heading: 'Canadian paint labels and coverage',
        paragraphs: [
          'Coverage on Canadian cans is listed in square feet per litre or per gallon depending on the brand. Benjamin Moore, Sherwin-Williams, and Behr Canada all print coverage on the back — enter that number in project settings for the most accurate result.',
          'Flat and ceiling paints often cover more than high-gloss trim. Textured walls and deep colours cover less — the 10% waste setting helps, but add extra for orange peel or knockdown texture.',
        ],
      },
    ],
  },

  'room-paint-calculator': {
    intro:
      'A rectangular room is the most common DIY paint job. Enter length, width, and ceiling height in feet and inches — we calculate wall area, optional ceiling, door and window deductions, then gallons to buy.',
    sections: [
      {
        heading: 'How wall area is calculated',
        paragraphs: [
          'Wall square footage = 2 × ceiling height × (length + width). That is the perimeter multiplied by height — the standard method paint stores and contractors use for estimates.',
          'Toggle ceiling paint separately if you are doing walls only. Standard deductions: about 20 sq ft per door and 15 sq ft per window. Adjust openings in project settings if your home differs.',
        ],
      },
      {
        heading: 'From room area to Behr gallons',
        paragraphs: [
          'Once you have paintable sq ft, divide by the Coverage line on your Behr (or any brand) can. Prefer a dedicated coverage tool? Use the [Behr paint coverage calculator](/paint-coverage-calculator) with the same label rate.',
          'For coats, waste, and store rounding in one shopping list, switch to [how much Behr paint do I need](/how-much-paint-do-i-need) after you measure the room.',
        ],
      },
      {
        heading: 'Multi-room projects',
        paragraphs: [
          'Add up to five rooms and the calculator totals paintable area and gallons for the whole job — useful when painting a hallway plus bedrooms in one colour.',
          'For accent walls or different colours per room, run separate estimates or use our [accent wall wallpaper calculator](/accent-wall-wallpaper-calculator) if one wall is wallpaper instead of paint.',
        ],
      },
      {
        heading: 'Before you roll — prep checklist',
        paragraphs: [
          'Gallon counts assume clean, sound surfaces. Peeling paint, patched holes, and glossy old paint change how much product you use. See [how to prep walls for painting](/guides/how-to-prep-walls-for-painting) and [wall repair before painting](/guides/how-to-repair-walls-before-painting) before you buy materials.',
        ],
      },
    ],
  },

  'interior-paint-calculator': {
    intro:
      'Interior latex for walls and ceilings — with default 350 sq ft per gallon and two coats. Toggle walls only, ceiling only, or both for a whole-room repaint.',
    sections: [
      {
        heading: 'Choosing the right sheen indoors',
        paragraphs: [
          'Flat and matte hide imperfections on ceilings and low-traffic bedrooms. Eggshell and satin wash better in kitchens, halls, and kids’ rooms. Our [interior paint sheen guide](/guides/interior-paint-sheen-guide) matches finish to each room.',
          'Higher sheen covers slightly less area per gallon — if you switch from flat to semi-gloss, nudge coverage down 10–15% in settings.',
        ],
      },
      {
        heading: 'Behr label coverage vs default 350',
        paragraphs: [
          'Our default 350 sq ft/gallon is a conservative DIY interior rate. If your Behr Premium Plus Interior lists up to 400 sq ft/gallon on smooth primed drywall, enter that number for a tighter buy list — or run the [Behr paint coverage calculator](/paint-coverage-calculator) for coverage-only math.',
          'Texture, primer, and dark-to-light colour changes still cover less than the marketing maximum. When unsure, keep 350 and round up.',
        ],
      },
      {
        heading: 'Waste allowance — what it covers',
        paragraphs: [
          'The default 10% waste covers roller tray residue, touch-up jars, and cutting-in overlap. Bold colour changes or porous new drywall may need 15%.',
          'Trim and doors are not included in wall/ceiling area — most homeowners buy a separate quart of trim paint. Factor that in when budgeting.',
        ],
      },
    ],
  },

  'wallpaper-calculator': {
    intro:
      'Wallpaper is sold by the roll, not the gallon. Enter room dimensions and roll size (default 21-inch × 33 ft double roll) to get a roll count with pattern repeat and waste built in.',
    sections: [
      {
        heading: 'Pattern repeat eats rolls',
        paragraphs: [
          'Solid and textured papers without a repeating motif waste the least. Geometric and floral patterns must align strip to strip — enter repeat height in inches and the calculator adds matching waste automatically.',
          'Our [wallpaper pattern repeat guide](/guides/wallpaper-pattern-repeat) explains how to read repeat symbols on the bolt label.',
        ],
      },
      {
        heading: 'Always keep one extra roll',
        paragraphs: [
          'Dye lots vary between production runs. If you patch a wall two years later with a roll from a different lot, the colour may not match. Buy one spare roll from the same batch and store it flat.',
          'For a single feature wall, try the [accent wall wallpaper calculator](/accent-wall-wallpaper-calculator). For paint on the other walls, switch to the [room paint calculator](/room-paint-calculator).',
        ],
      },
    ],
  },

  'fence-stain-calculator': {
    intro:
      'Wood fence stain is measured in run length × panel height. Rough-sawn boards absorb more product than smooth lumber — default coverage is 150 sq ft per gallon on one side.',
    sections: [
      {
        heading: 'One side vs both sides',
        paragraphs: [
          'Staining the face visible from your yard is standard. Staining both sides extends life and reduces warping — use the “both sides” toggle to double square footage.',
          'A 6 ft × 50 ft fence section is 300 sq ft per side. At 150 sq ft/gallon and one coat, that is 2 gallons per side. See [how much fence stain do I need](/guides/how-much-fence-stain-do-i-need) for seasonal prep tips.',
        ],
      },
      {
        heading: 'Fence stain vs exterior paint',
        paragraphs: [
          'Stain penetrates wood; paint films on top. Stain gallons cover less area because product soaks in. Enter the sq ft/gallon from your stain can — transparent stains cover more than solid-colour stains.',
        ],
      },
    ],
  },

  'deck-stain-calculator': {
    intro:
      'Deck boards are measured as length × width for horizontal surface area. Weathered wood and horizontal boards often need more product than vertical siding — default 175 sq ft per gallon.',
    sections: [
      {
        heading: 'Horizontal decks vs rails',
        paragraphs: [
          'Enter the main deck platform as length × width. Rails, steps, and balusters add area — add a second “deck area” row or bump waste to 15–20% if rails are substantial.',
          'Many maintenance coats are one-coat formulas. Bare wood or a colour change may need two. Our [deck stain coverage guide](/guides/deck-stain-coverage) covers prep and dry time between coats.',
        ],
      },
      {
        heading: 'Canadian deck seasons',
        paragraphs: [
          'Apply stain when wood is dry and temperatures stay above 10°C for 24 hours — typical May through September in most of Canada. Morning dew and evening humidity extend dry time; buy extra stain if rain interrupts your weekend project.',
        ],
      },
    ],
  },

  'paint-coverage-calculator': {
    intro:
      'How many square feet does a gallon of Behr paint cover? It depends on your can label — not a single universal number. Enter your room dimensions and the sq ft per gallon from Behr, Benjamin Moore, or any brand to get an accurate gallon count per coat.',
    sections: [
      {
        heading: 'Behr paint calculator — how to use this tool',
        paragraphs: [
          'If you searched “Behr paint calculator” or “Behr paint coverage calculator,” you are in the right place. Read the Coverage line on your Behr can, enter room size above, set sq ft per gallon to that number, and get gallons per coat.',
          'Typical Behr interior ranges (one coat, smooth primed drywall): Premium Plus Interior up to ~400 sq ft/gallon; Premium Plus Ultra and Marquee similar on flat walls; ceiling flat often 350–400 sq ft/gallon. Exterior and primer lines list lower numbers — always use your exact can.',
          'This calculator is brand-neutral: the same workflow works for Sherwin-Williams, Benjamin Moore, or store brands at Home Depot Canada. Need coats and waste as a shopping list? Use [how much Behr paint do I need](/how-much-paint-do-i-need).',
        ],
      },
      {
        heading: 'How much does a gallon of Behr paint cover? Worked examples',
        paragraphs: [
          'One gallon of Behr Premium Plus Interior at the common 400 sq ft/gallon label covers about 400 sq ft of smooth wall in one coat — roughly the walls of a small 10×10 room (320 sq ft) with product left over, or most of a 12×12 room’s walls (384 sq ft) in a single coat.',
          'Two coats doubles the paint: that same 12×12 room needs ~768 ÷ 400 ≈ 1.9 gallons — buy 2 gallons if walls are smooth and primed. Texture, primer, or a dark-to-light colour change? Drop to 350 sq ft/gallon and plan 3 gallons.',
          'For a full chart by Behr product type, see [Behr paint coverage per gallon](/guides/paint-coverage-per-gallon). For coats + waste as a store list, stay with [how much Behr paint do I need](/how-much-paint-do-i-need).',
        ],
      },
      {
        heading: 'Why coverage varies more than people expect',
        paragraphs: [
          'A label that says 400 sq ft/gallon assumes smooth, primed drywall with a light colour. Popcorn ceilings, brick, and unprimed new drywall can drop real-world coverage to 250–300 sq ft/gallon or lower.',
          'Spraying uses more paint than rolling because of overspray; rolling into a deep colour over white may need an extra coat that the label does not account for. Our [paint coverage per gallon guide](/guides/paint-coverage-per-gallon) breaks down typical ranges by product type.',
        ],
      },
      {
        heading: 'Interior vs primer vs exterior numbers',
        paragraphs: [
          'Interior latex: often 350–400 sq ft/gallon. Primer: 250–350 sq ft/gallon. Exterior on wood siding: 200–300 sq ft/gallon. Never mix products in one calculation — run the calculator separately for primer and topcoat.',
          'If you are comparing brands at the store, coverage per gallon is a fair way to compare value: a more expensive can that covers 25% more area may cost less per square foot painted.',
        ],
      },
      {
        heading: 'Quarts vs gallons at the counter',
        paragraphs: [
          'The results panel shows gallons and quarts. Closets, powder rooms, and single accent walls often need only one or two quarts. Whole rooms and open-plan spaces almost always need full gallons — we round up so you are not caught short.',
          'For a full room estimate that includes coats and waste, also try the [how much paint do I need](/how-much-paint-do-i-need) page or the [room paint calculator](/room-paint-calculator).',
        ],
      },
      {
        heading: 'Home Depot Canada Behr cans — read this line first',
        paragraphs: [
          'On most Behr Canada cans, Coverage (or “Approximate Coverage”) is printed near the product description or on the back panel in sq ft per gallon (or per litre — convert if needed). That single number is what you enter above.',
          'If two Behr SKUs sit side by side with different coverage claims, run this calculator twice and compare gallons × shelf price — not just the sticker on the can. For a dollar budget after gallons, use the [paint cost estimator](/paint-cost-estimator).',
        ],
      },
    ],
  },

  'exterior-house-stain-calculator': {
    intro:
      'Exterior wood stain on siding, cedar shingles, or log-style walls is estimated from your home’s footprint and average wall height — the same perimeter × height math contractors use before ordering product.',
    sections: [
      {
        heading: 'Footprint method — what it includes and skips',
        paragraphs: [
          'We treat the building as a rectangle: wall area ≈ 2 × wall height × (length + width). That captures the main four walls. It does not automatically add gables, dormers, or multi-story height changes — bump waste to 15% if your roofline is complex.',
          'Garages and attached breezeways can be added as a second room row with the same footprint logic. Detached structures need a separate run.',
        ],
      },
      {
        heading: 'Stain absorption on Canadian exteriors',
        paragraphs: [
          'Cedar and pine absorb more stain than factory-primed composite siding. Transparent and semi-transparent stains cover more area than solid stains that film on the surface. Check the sq ft/gallon on your can — 150–250 sq ft/gallon is common on rough wood.',
          'Our [exterior stain two coats guide](/guides/exterior-stain-two-coats) explains when a maintenance recoat needs one pass versus full stripping and two coats on bare wood.',
        ],
      },
      {
        heading: 'Trim, soffits, and fascia',
        paragraphs: [
          'This calculator focuses on main wall area. Soffits, fascia boards, window trim, and porch ceilings add square footage the footprint method understates. The default 10% waste helps; increase it to 15–20% on ornate Victorian or Craftsman-style trim.',
          'For horizontal deck and porch floors, switch to the [deck stain calculator](/deck-stain-calculator). For fence runs along the property line, use the [fence stain calculator](/fence-stain-calculator).',
        ],
      },
    ],
  },

  'how-many-rolls-of-wallpaper': {
    intro:
      'Wallpaper bolts are priced per roll, not per square foot — so the store question is always “how many rolls?” Enter your room dimensions and we convert wall area into a roll count, rounded up, with pattern waste included.',
    sections: [
      {
        heading: 'Double rolls vs single rolls',
        paragraphs: [
          'Most North American wallpaper is sold as a “double roll” (about 21 inches wide × 33 feet long), covering roughly 57–58 sq ft. Some European brands list single-roll coverage — check the bolt label and adjust roll dimensions in settings if yours differs.',
          'Peel-and-stick and vinyl panels are often sold by the panel, not the bolt. This tool assumes traditional rolled paper; for panel products, divide your wall width by panel width instead.',
        ],
      },
      {
        heading: 'Doors, windows, and waste',
        paragraphs: [
          'Subtracting openings gets you closer to what actually goes on the wall. We deduct about 20 sq ft per door and 15 sq ft per window by default. Rooms with floor-to-ceiling glass or double doors may need manual adjustment.',
          'Plain textures need 10–15% waste. Large repeats can push waste to 20–25%. Enter pattern repeat height if your paper has a motif that must align at the ceiling line. See [wallpaper pattern repeat](/guides/wallpaper-pattern-repeat) for how to read the label.',
        ],
      },
      {
        heading: 'Buying strategy at the store',
        paragraphs: [
          'Always purchase all rolls from the same dye lot — the lot number is printed on each bolt wrapper. Mixing lots causes visible colour shifts between strips. Buy one extra roll from the same lot for future repairs; stores rarely restock the exact same batch.',
          'For a single feature wall instead of a full room, the [accent wall wallpaper calculator](/accent-wall-wallpaper-calculator) gives a faster estimate. Our [how to estimate wallpaper rolls guide](/guides/how-to-estimate-wallpaper-rolls) walks through measuring awkward rooms.',
        ],
      },
    ],
  },

  'accent-wall-wallpaper-calculator': {
    intro:
      'One bold wall behind a bed, sofa, or fireplace is the most popular wallpaper project — smaller than a full room, but pattern matching still matters. Enter the wall dimensions to see how many rolls you need for that single surface.',
    sections: [
      {
        heading: 'Measuring one wall vs one room',
        paragraphs: [
          'The simplest approach: multiply accent wall width by ceiling height. If the wall has a sloped ceiling or built-in cabinetry, measure the paintable rectangle only.',
          'Alternatively, enter a narrow room where the accent wall is the dominant length — the calculator deducts other walls if you are only covering one. Our [accent wall wallpaper tips](/guides/accent-wall-wallpaper-tips) cover layout, lighting, and colour pairing with the other three walls.',
        ],
      },
      {
        heading: 'Often one roll — but not always',
        paragraphs: [
          'A 12 ft wide × 8 ft high accent wall is 96 sq ft. One double roll (~57 sq ft) is not enough — you need two rolls for full coverage, or one roll if the design only covers part of the wall with panels.',
          'Large pattern repeats waste more paper on short walls because strips must align vertically. Enter repeat height even on accent walls — a bold geometric can turn a “one roll” job into two.',
        ],
      },
      {
        heading: 'Pairing wallpaper with paint on other walls',
        paragraphs: [
          'Most accent-wall projects use wallpaper on one surface and paint on the rest. Run this tool for the feature wall, then use the [interior paint calculator](/interior-paint-calculator) or [room paint calculator](/room-paint-calculator) for the remaining walls — buy wallpaper and paint as separate line items.',
          'Choose a paint colour that appears in the wallpaper background for a cohesive look. Bring the wallpaper sample to the paint counter for a custom match, or pick a neutral from the same colour family.',
        ],
      },
    ],
  },

  'exterior-paint-calculator': {
    intro:
      'Exterior latex covers less area than interior paint — default 250 sq ft per gallon on porous siding. Enter building footprint and average wall height for gallon estimates with Canadian coverage defaults. Use this before you order delivery so one weekend of good weather is enough product.',
    sections: [
      {
        heading: 'Siding and texture',
        paragraphs: [
          'Rough cedar, stucco, and previously unpainted wood absorb more paint than smooth hardboard. Use the sq ft per gallon printed on your exterior can — often 200–300 sq ft/gallon.',
          'Bold colour changes over dark siding usually need primer plus two topcoats — run the calculator twice or raise coat count. A light refresh over the same colour on sound paint may finish in one heavy coat plus touch-ups.',
        ],
      },
      {
        heading: 'Footprint example',
        paragraphs: [
          'A 40 × 30 ft bungalow with 9 ft walls is about 2 × 9 × (40 + 30) = 1,260 sq ft of wall. At 250 sq ft/gallon and two coats you need about 10.1 gallons — buy 11 to cover waste, porches, and touch-ups. Bump waste to 15% if you have heavy texture or lots of trim returns.',
        ],
      },
      {
        heading: 'Trim, soffits, and Canadian weather windows',
        paragraphs: [
          'This tool focuses on main wall area. Many DIYers buy trim paint by the quart separately — the 10% waste allowance helps cover some fascia and soffit area.',
          'Plan exterior painting when overnight lows stay above ~10°C and rain is unlikely for 24 hours. For stain instead of paint, switch to the [exterior house stain calculator](/exterior-house-stain-calculator).',
        ],
      },
    ],
  },

  'ceiling-paint-calculator': {
    intro:
      'Ceiling paint is usually flat white — enter room length and width for ceiling square footage only. Walls are excluded so you get a quick gallon count for a ceiling-only refresh without overbuying wall paint.',
    sections: [
      {
        heading: 'One coat vs two',
        paragraphs: [
          'White-over-white refreshes often need one coat if the old finish is sound. Water stains, nicotine, or colour changes need stain-blocking primer first — see our [primer before painting guide](/guides/primer-before-painting), then run this calculator for the finish coats.',
          'Popcorn or heavy texture covers less per gallon than smooth drywall. If your label assumes 350–400 sq ft/gallon on smooth ceilings, drop coverage toward 250–300 for texture.',
        ],
      },
      {
        heading: 'Quick ceiling math',
        paragraphs: [
          'A 12 × 14 ft ceiling is 168 sq ft. Two coats at 350 sq ft/gallon ≈ 1.0 gallon — buy one gallon plus a quart if you cut in poorly or have patches. Open-plan great rooms add up fast; measure each zone or use the largest rectangle and add 10% waste.',
        ],
      },
      {
        heading: 'Walls and ceiling together',
        paragraphs: [
          'For a full room repaint, use the [room paint calculator](/room-paint-calculator) or [how much paint do I need](/how-much-paint-do-i-need) with surface set to both. Keep ceiling flat and walls eggshell/satin as separate products — do not mix sheens in one estimate.',
        ],
      },
    ],
  },

  'paint-cost-estimator': {
    intro:
      'Enter price per gallon from your local paint store (CAD) — we multiply gallons needed for an estimated materials total. Tape, rollers, and primer are extra line items so you can budget the full DIY cart, not just the colour can.',
    sections: [
      {
        heading: 'Budgeting a DIY room',
        paragraphs: [
          'Materials often run $80–$200 CAD for a typical bedroom including basic supplies. This page estimates paint gallons × your entered price — add 15–20% for brushes, tape, trays, and drop cloths.',
          'Example: 2.5 gallons at $65/gallon ≈ $163 in paint alone. Mid-grade brushes and a roller kit can add $40–$70. Keep a labelled touch-up jar so you are not buying another gallon for one scuff.',
        ],
      },
      {
        heading: 'Primer and topcoat as two line items',
        paragraphs: [
          'New drywall and bold colour changes need primer — run the gallon math with paint type set to primer, then again for topcoat, or add primer gallons manually to the cost field.',
          'Premium paint costs more per gallon but may cover in fewer coats. Compare cost per finished square foot: (price ÷ coverage) × coats, not sticker price alone.',
        ],
      },
      {
        heading: 'Where this estimator stops',
        paragraphs: [
          'Labour, ladder rental, and furniture moving are not included. For gallon counts without price, use [how much paint do I need](/how-much-paint-do-i-need). For coverage-only brand math, use the [paint coverage calculator](/paint-coverage-calculator).',
        ],
      },
    ],
  },

  'cabinet-trim-paint-calculator': {
    intro:
      'Cabinets and trim are piece counts and linear feet — not room wall area. Enter door/drawer fronts and baseboard length; we estimate gallons (or quarts) with waste for enamel and trim paint.',
    sections: [
      {
        heading: 'Why cabinets need a different paint math',
        paragraphs: [
          'A kitchen remodel is dozens of faces, not one big rectangle. Count doors and drawer fronts separately, then add linear feet of baseboard, casing, and crown. Our [cabinet & trim paint calculator](/cabinet-trim-paint-calculator) totals coverage for both.',
          'Cabinet enamel often covers less per gallon than wall latex — enter the label sq ft/gallon (often 300–350) so you do not under-buy mid-project.',
        ],
      },
      {
        heading: 'Primer, coats, and sheen',
        paragraphs: [
          'Bare wood and stained cabinets usually need bonding primer plus two topcoats. Semi-gloss or satin enamel hides fingerprints better than flat. For full-room walls after cabinets, switch to the [how much paint do I need](/how-much-paint-do-i-need) tool.',
          'Walk the whole job in our [interior painting project guide](/guides/interior-painting-project-guide) — prep, prime, and cut-in order matter as much as gallons.',
        ],
      },
      {
        heading: 'Quarts vs gallons',
        paragraphs: [
          'Small trim jobs often finish under one gallon — buy quarts when the estimate is well under a gallon to avoid waste and colour-match issues later. Keep leftover for touch-ups in a labelled jar.',
        ],
      },
    ],
  },
};

export function getLandingEditorial(slug: string): LandingEditorial | undefined {
  return LANDING_EDITORIAL[slug];
}

import type { Guide } from './types';

export const GUIDES: Guide[] = [
  {
    slug: 'how-much-mulch-do-i-need',
    category: 'planning',
    title: 'How Much Mulch Do I Need for My Garden Beds?',
    description:
      'Step-by-step guide to calculating mulch volume for landscaping beds. Area formulas, depth in inches, cubic yards, bag counts, and real examples for front yards, tree rings, and shrub borders.',
    readMinutes: 10,
    toolPath: '/mulch-calculator',
    toolLabel: 'Mulch calculator',
    relatedGuideSlugs: [
      'mulch-depth-how-deep',
      'cubic-yards-mulch-explained',
      'how-many-mulch-bags-per-yard',
    ],
    sections: [
      {
        heading: 'The basic mulch volume formula',
        paragraphs: [
          'Mulch quantity starts with bed area. For a rectangular garden bed, multiply length × width to get square feet. Then multiply by depth in feet to get cubic feet. Divide by 27 to convert to cubic yards — the unit bulk mulch is sold in.',
          'Example: a 12 ft × 8 ft bed at 3 inches deep. Area = 96 sq ft. Depth in feet = 3 ÷ 12 = 0.25 ft. Volume = 96 × 0.25 = 24 cu ft. Cubic yards = 24 ÷ 27 ≈ 0.89 cu yd. Round up to 1 cubic yard when ordering bulk.',
          'Irregular beds can be split into rectangles or measured as an average width along a curved border. For tree rings, use π × radius² for area, then apply the same depth math.',
        ],
      },
      {
        heading: 'Measuring multiple beds in one project',
        paragraphs: [
          'Most landscaping jobs include several beds — foundation plantings, island beds, tree rings, and side yards. Calculate each bed separately, then add cubic yards for a single delivery or truckload.',
          'A typical suburban front yard might include: 40 sq ft foundation bed + 120 sq ft island bed + three 25 sq ft tree rings. At 3 inches depth, that totals roughly 2.2 cubic yards before waste.',
        ],
        bullets: [
          'Foundation beds: measure along the house, include corners',
          'Island beds: length × width at the widest points',
          'Tree rings: outer diameter minus inner (no-mulch) zone',
          'Paths with mulch: treat like a narrow rectangle',
        ],
      },
      {
        heading: 'Adding waste and settling allowance',
        paragraphs: [
          'Add 10% extra for uneven ground, spillage, and settling over the first season. Beds with steep edges or lots of curves may need 15%. Our calculator includes an adjustable waste percentage.',
          'Fresh mulch fluffs higher than aged mulch — a truck that looks “full” at delivery will settle after rain and foot traffic. Ordering slightly more avoids a second trip for half a yard.',
        ],
      },
      {
        heading: 'Using the calculator for your yard',
        paragraphs: [
          'Enter up to five beds with feet-and-inch dimensions. Set depth (default 3 inches), material type, and waste %. You get cubic yards, standard 2 cu ft bag counts, and a copyable shopping list.',
          'Use our [mulch calculator](/mulch-calculator) for instant totals, or read our [cubic yards guide](/guides/cubic-yards-mulch-explained) if you prefer pencil-and-paper math.',
        ],
      },
    ],
    faqs: [
      {
        question: 'How much mulch for a 10×10 bed at 3 inches?',
        answer:
          '100 sq ft × 0.25 ft depth = 25 cu ft ≈ 0.93 cubic yards. That is about 13–14 standard 2 cu ft bags. Round up to 1 cubic yard for bulk delivery.',
      },
      {
        question: 'Do I need new mulch if old mulch is still there?',
        answer:
          'Top up only to restore 2–3 inches of total depth. Measure current depth with a ruler; subtract from your target depth before calculating new mulch volume.',
      },
      {
        question: 'How much mulch for a tree ring?',
        answer:
          'Measure the mulched area from trunk to drip line (or your chosen ring radius). A 6 ft diameter ring (28 sq ft) at 3 inches needs about 0.26 cubic yards — roughly 4 bags.',
      },
    ],
  },
  {
    slug: 'mulch-depth-how-deep',
    category: 'mulch',
    title: 'How Deep Should Mulch Be? Depth Guide for Beds & Trees',
    description:
      'Recommended mulch depth for flower beds, shrubs, vegetable gardens, and tree rings. Why 2–4 inches works, volcano mulching risks, and how depth affects your cubic yard estimate.',
    readMinutes: 9,
    toolPath: '/mulch-calculator',
    toolLabel: 'Mulch calculator',
    relatedGuideSlugs: [
      'how-much-mulch-do-i-need',
      'spring-mulch-application-guide',
      'edging-and-prepping-beds-before-mulch',
    ],
    sections: [
      {
        heading: 'Standard depth for decorative landscape mulch',
        paragraphs: [
          'Most ornamental beds use 2–4 inches of shredded hardwood, bark, or dyed mulch. Three inches is the industry default — enough to suppress weeds, retain soil moisture, and look finished without burying plant crowns.',
          'Two inches works on well-maintained beds with existing mulch and good weed control. Four inches suits high-traffic public plantings or very weedy sites, but avoid piling against woody stems.',
        ],
        bullets: [
          'Flower beds & perennials: 2–3 inches',
          'Shrubs & foundation plantings: 3 inches',
          'Tree rings (flat, not mounded): 2–4 inches',
          'Vegetable paths (straw/chips): 2–3 inches',
        ],
      },
      {
        heading: 'Why too much mulch hurts plants',
        paragraphs: [
          '“Volcano mulching” — thick cones against tree trunks — traps moisture on bark and encourages rot, insects, and root girdling. Keep mulch 3–6 inches away from trunks and stems.',
          'Depth over 4 inches can block oxygen to shallow roots and tie up nitrogen at the soil interface as wood mulch decomposes. Refresh thin layers annually instead of dumping 6+ inches at once.',
        ],
      },
      {
        heading: 'Depth and your material estimate',
        paragraphs: [
          'Doubling depth doubles volume. A bed that needs 1 cubic yard at 3 inches needs 2 cubic yards at 6 inches — a common ordering mistake when switching from “looks right” to measured depth.',
          'Enter exact depth in the calculator. Convert inches to feet (divide by 12) when doing manual math: 4 inches = 0.333 ft.',
        ],
      },
    ],
    faqs: [
      {
        question: 'Is 2 inches of mulch enough?',
        answer:
          'Yes for maintenance top-ups on beds that already have a mulch base. For new beds or bare soil, start with 3 inches for better weed suppression.',
      },
      {
        question: 'How deep should mulch be around trees?',
        answer:
          '2–4 inches in a flat ring from near the trunk flare (not touching) to the drip line. Never stack mulch against the bark.',
      },
      {
        question: 'Should I remove old mulch before adding new?',
        answer:
          'Usually no — rake and fluff existing mulch, then top up to target depth. Remove only if mulch is matted, moldy, or over 6 inches total.',
      },
    ],
  },
  {
    slug: 'cubic-yards-mulch-explained',
    category: 'planning',
    title: 'Cubic Yards Explained — Mulch, Gravel & Topsoil Math',
    description:
      'How cubic yards work for bulk landscaping materials. Convert square feet and depth to cubic feet and yards, pickup truck capacities, and ordering tips for garden centers.',
    readMinutes: 8,
    toolPath: '/cubic-yards-calculator',
    toolLabel: 'Cubic yards calculator',
    relatedGuideSlugs: [
      'how-much-mulch-do-i-need',
      'how-many-mulch-bags-per-yard',
      'delivery-vs-bags-bulk-mulch',
    ],
    sections: [
      {
        heading: 'What is a cubic yard?',
        paragraphs: [
          'A cubic yard is a volume box 3 ft × 3 ft × 3 ft = 27 cubic feet. Bulk mulch, gravel, and topsoil are priced and delivered by the cubic yard in most of North America.',
          'Knowing cubic yards lets you compare bulk delivery vs bagged product and size truckloads correctly.',
        ],
      },
      {
        heading: 'Converting bed measurements to cubic yards',
        paragraphs: [
          'Formula: Cubic yards = (Length ft × Width ft × Depth ft) ÷ 27.',
          'Example: 20 ft × 5 ft path at 4 inches deep. Depth = 4/12 = 0.333 ft. Volume = 20 × 5 × 0.333 = 33.3 cu ft. Yards = 33.3 ÷ 27 ≈ 1.23 cu yd.',
        ],
        bullets: [
          '1 cu yd = 27 cu ft',
          '3" depth on 100 sq ft ≈ 0.93 cu yd',
          '4" depth on 100 sq ft ≈ 1.23 cu yd',
          'Add 10% waste before rounding up',
        ],
      },
      {
        heading: 'Trucks, weight, and delivery minimums',
        paragraphs: [
          'A full-size pickup holds roughly 1.5–2 cubic yards level with the bed sides — less if the material is wet or heavy (stone vs mulch). Many suppliers enforce 2-yard minimums for delivery.',
          'Mulch weighs about 400–800 lbs per cubic yard depending on moisture. Gravel can exceed 2,500 lbs per yard — check payload limits before DIY hauling.',
        ],
      },
    ],
    faqs: [
      {
        question: 'How many sq ft does 1 cubic yard of mulch cover?',
        answer:
          'At 3 inches deep, about 108 sq ft (27 cu ft ÷ 0.25 ft depth). At 2 inches, about 162 sq ft.',
      },
      {
        question: 'How do I convert cubic feet to cubic yards?',
        answer: 'Divide cubic feet by 27. Example: 54 cu ft ÷ 27 = 2 cubic yards.',
      },
      {
        question: 'Is a yard of mulch the same as a yard of gravel?',
        answer:
          'Same volume (27 cu ft), but weight and coverage behavior differ. Gravel compacts; mulch settles. Always specify material when ordering.',
      },
    ],
  },
  {
    slug: 'mulch-vs-bark-vs-compost',
    category: 'mulch',
    title: 'Mulch vs Bark vs Compost — Which to Use Where',
    description:
      'Compare shredded hardwood mulch, bark nuggets, pine straw, and compost mulch. Cost, longevity, appearance, and best uses for front yards, vegetable gardens, and pathways.',
    readMinutes: 9,
    relatedGuideSlugs: [
      'rubber-mulch-vs-wood-mulch',
      'mulch-depth-how-deep',
      'spring-mulch-application-guide',
    ],
    sections: [
      {
        heading: 'Shredded hardwood and dyed mulch',
        paragraphs: [
          'The most common choice at big-box stores and landscape yards. Shredded pieces knit together for weed control and stay in place on slopes better than large nuggets. Dyed brown/black/red mulch uses shredded wood — color fades in 12–18 months.',
          'Best for: foundation beds, commercial landscapes, annual refresh cycles. Typical bag size: 2 cu ft.',
        ],
      },
      {
        heading: 'Bark nuggets and pine bark',
        paragraphs: [
          'Larger pieces (mini, standard, jumbo nuggets) last longer and look formal but wash away on slopes and float in heavy rain. Pine bark is lighter and acidic — good for azaleas, rhododendrons, and blueberries.',
          'Best for: level beds, containers, acid-loving plants. Less ideal for steep grades or flood-prone zones.',
        ],
      },
      {
        heading: 'Compost and leaf mulch',
        paragraphs: [
          'Compost as a top dressing improves soil biology but breaks down fast — often within one season. Use thin layers (1–2 inches) or mix into soil rather than 4-inch decorative depth.',
          'Leaf mulch and arborist chips are economical for paths, back beds, and vegetable gardens. Allow fresh wood chips to age before using thickly around tender annuals (nitrogen tie-up).',
        ],
      },
    ],
    faqs: [
      {
        question: 'What is the cheapest mulch option?',
        answer:
          'Bulk shredded hardwood from a local yard is often cheapest per cubic yard. Municipal leaf compost programs can be free or low-cost for residents.',
      },
      {
        question: 'Can I use compost instead of mulch?',
        answer:
          'Compost feeds soil but does not last as surface mulch. Use compost to amend soil, then cover with 2–3 inches of bark or shredded mulch for weed control.',
      },
      {
        question: 'Does mulch type change how much I need?',
        answer:
          'Volume is the same — cubic yards depend on area and depth, not material. Nuggets look different at the same depth but still measure by volume.',
      },
    ],
  },
  {
    slug: 'how-much-gravel-for-driveway',
    category: 'gravel',
    title: 'How Much Gravel Do I Need for a Driveway or Path?',
    description:
      'Calculate gravel cubic yards for driveways, parking pads, and walkways. Recommended depths by use, compaction factor, and base vs surface stone layers.',
    readMinutes: 10,
    toolPath: '/gravel-calculator',
    toolLabel: 'Gravel calculator',
    relatedGuideSlugs: [
      'gravel-types-pea-crushed',
      'cubic-yards-mulch-explained',
      'delivery-vs-bags-bulk-mulch',
    ],
    sections: [
      {
        heading: 'Gravel depth by project type',
        paragraphs: [
          'Depth drives volume more than any other variable. A decorative path might need 2–3 inches of pea gravel over landscape fabric. A driveway for passenger vehicles often needs 4–6 inches of crushed stone after compaction, sometimes over a separate base layer.',
          'Always measure depth after compaction expectations — loose stone settles 10–20% when driven on. Many pros order extra for regrading after the first month.',
        ],
        bullets: [
          'Walking paths: 2–3 inches surface gravel',
          'Patios (gravel): 3–4 inches over compacted base',
          'Light-duty driveway: 4–6 inches crushed stone',
          'Heavy use / soft soil: 6–8 inches + geotextile',
        ],
      },
      {
        heading: 'Driveway area calculation',
        paragraphs: [
          'Measure length × width of the tire track area or full pad. A 12 ft × 40 ft single-lane strip = 480 sq ft. At 5 inches (0.417 ft) depth: 480 × 0.417 = 200 cu ft ≈ 7.4 cubic yards. Add 10% → about 8.2 yards.',
          'Curved drives can be approximated as rectangles or split into sections. Use our [gravel calculator](/gravel-calculator) for multiple areas.',
        ],
      },
      {
        heading: 'Base layer vs surface stone',
        paragraphs: [
          'Full driveway builds may use 4 inches of large crushed base (#2 or #3 stone) plus 2 inches of finer topping (#57 or pea gravel). Calculate each layer separately — they are often different products and prices.',
          'For mulch-site math, the same L×W×depth÷27 formula applies; only depth targets and compaction allowance change.',
        ],
      },
    ],
    faqs: [
      {
        question: 'How much gravel for a 20×10 driveway at 4 inches?',
        answer:
          '200 sq ft × 0.333 ft = 66.7 cu ft ≈ 2.47 cubic yards. Add 10% waste → about 2.7 yards. Round up to 3 for delivery minimums.',
      },
      {
        question: 'Should I compact gravel before measuring depth?',
        answer:
          'Specify compacted depth in your plan. If you order for loose fill depth, you will be short after rolling or driving.',
      },
      {
        question: 'Pea gravel vs crushed stone for driveways?',
        answer:
          'Crushed stone with fines compacts into a firmer surface for vehicles. Pea gravel moves under tires — better for paths and patios. See our gravel types guide.',
      },
    ],
  },
  {
    slug: 'gravel-types-pea-crushed',
    category: 'gravel',
    title: 'Gravel Types — Pea Gravel, Crushed Stone & River Rock',
    description:
      'Choose the right gravel for paths, driveways, drainage, and decorative beds. Sizes (#57, #8, pea gravel), compaction, cost per yard, and bag vs bulk.',
    readMinutes: 8,
    toolPath: '/gravel-calculator',
    toolLabel: 'Gravel calculator',
    relatedGuideSlugs: [
      'how-much-gravel-for-driveway',
      'cubic-yards-mulch-explained',
      'delivery-vs-bags-bulk-mulch',
    ],
    sections: [
      {
        heading: 'Pea gravel',
        paragraphs: [
          'Smooth, rounded 1/4"–3/8" stones — comfortable underfoot, popular for paths, dog runs, and dry creek beds. Does not compact well; tires and shovels displace it. Often sold in 0.5 cu ft bags for small projects.',
          'Coverage: same cubic yard math as mulch. A yard covers ~108 sq ft at 3 inches.',
        ],
      },
      {
        heading: 'Crushed stone and crusher run',
        paragraphs: [
          'Angular edges lock together when compacted. #57 stone (3/4–1") drains well for driveways and French drains. Crusher run (mix of fines and stone) forms a hard base layer.',
          'Heavier than mulch — plan delivery instead of bagging for areas over ~100 sq ft at 4 inches.',
        ],
        bullets: [
          '#57 / 3/4" clean: driveways, drainage, concrete prep',
          'Crusher run: base layer under pavers or asphalt',
          '#8 small crushed: paver joints, finer top dress',
          'Rip rap: erosion control, not for walking surfaces',
        ],
      },
      {
        heading: 'River rock and decorative stone',
        paragraphs: [
          'Larger smooth stone for dry streams, accents, and xeriscaping. Expensive per yard and poor for driveways. Depth is often 2–3 inches for appearance — calculate volume the same way, but order by weight on some quotes.',
        ],
      },
    ],
    faqs: [
      {
        question: 'What size gravel for a walkway?',
        answer:
          'Pea gravel or 3/8" crushed for comfort. Lay 2–3 inches over compacted base and edging to contain stone.',
      },
      {
        question: 'How much does a cubic yard of gravel weigh?',
        answer:
          'Roughly 2,400–2,800 lbs depending on stone type and moisture — much heavier than mulch. Verify truck and trailer limits.',
      },
      {
        question: 'Bagged pea gravel — how many bags per yard?',
        answer:
          '27 cu ft per yard ÷ 0.5 cu ft per bag ≈ 54 bags. Bulk is usually cheaper above 1 yard.',
      },
    ],
  },
  {
    slug: 'topsoil-calculator-guide',
    category: 'topsoil',
    title: 'Topsoil Calculator Guide — Raised Beds, Lawn & Leveling',
    description:
      'How much topsoil to order for new lawns, filling low spots, and raised vegetable beds. Cubic yards, depth targets, quality tips, and weight for hauling.',
    readMinutes: 9,
    toolPath: '/cubic-yards-calculator',
    toolLabel: 'Cubic yards calculator',
    relatedGuideSlugs: [
      'cubic-yards-mulch-explained',
      'how-much-mulch-do-i-need',
      'edging-and-prepping-beds-before-mulch',
    ],
    sections: [
      {
        heading: 'When you need topsoil vs mulch',
        paragraphs: [
          'Topsoil builds or restores soil profile — new sod, seeding, raised beds, or filling erosion ruts. Mulch protects the surface. Many projects use both: 6–12 inches of topsoil in a raised bed, then 2–3 inches of mulch on planting beds elsewhere.',
          'Select “topsoil” in project settings so bag equivalents match typical 1 cu ft or 40 lb bag labeling at retailers.',
        ],
      },
      {
        heading: 'Depth guidelines',
        paragraphs: [
          'New lawn from seed or sod: 4–6 inches of quality topsoil worked into subgrade. Minor leveling: 1–2 inches spread and rake. Raised beds: 8–12 inches minimum for vegetables, more for root crops.',
          'Volume adds up fast — a 4 ft × 8 ft raised bed at 10 inches deep needs about 1 cubic yard.',
        ],
        bullets: [
          'Lawn prep: 4–6 inches tilled in',
          'Spot leveling: 1–2 inches',
          'Raised bed 4×8 at 10": ~1 cu yd',
          'Planter mix: often sold by cu ft, not yard',
        ],
      },
      {
        heading: 'Screened topsoil and delivery',
        paragraphs: [
          '“Screened” topsoil has rocks and debris removed — worth the premium for lawns and beds. Unscreened fill is cheaper for large hole filling where quality matters less.',
          'Topsoil is heavy (about 2,000 lbs per yard when damp). Compare delivered yard price vs bagged for projects under 1 yard.',
        ],
      },
    ],
    faqs: [
      {
        question: 'How much topsoil for a 10×10 lawn area at 4 inches?',
        answer:
          '100 sq ft × 0.333 ft = 33.3 cu ft ≈ 1.23 cubic yards. Add 10% → about 1.4 yards.',
      },
      {
        question: 'Can I use topsoil as mulch?',
        answer:
          'No — bare topsoil weeds quickly and erodes. Plant into it, then mulch exposed areas.',
      },
      {
        question: 'How many bags of topsoil in a cubic yard?',
        answer:
          'If bags are 1 cu ft, about 27 bags per yard. If 40 lb bags (~0.75 cu ft), about 36 bags.',
      },
    ],
  },
  {
    slug: 'how-many-mulch-bags-per-yard',
    category: 'planning',
    title: 'How Many Mulch Bags Equal a Cubic Yard?',
    description:
      'Bag sizes (2 cu ft, 3 cu ft), bags per cubic yard, when bagged beats bulk, and how to convert your bed estimate to a store shopping list.',
    readMinutes: 7,
    toolPath: '/mulch-calculator',
    toolLabel: 'Mulch calculator',
    relatedGuideSlugs: [
      'cubic-yards-mulch-explained',
      'delivery-vs-bags-bulk-mulch',
      'how-much-mulch-do-i-need',
    ],
    sections: [
      {
        heading: 'Standard bag sizes',
        paragraphs: [
          'The most common mulch bag in the US is 2 cubic feet. Some premium lines use 3 cu ft bags. Always read the label — “2 cu ft” refers to volume, not weight.',
          '1 cubic yard = 27 cubic feet. Bags per yard = 27 ÷ bag size.',
        ],
        bullets: [
          '2 cu ft bags: 13.5 per yard → round up to 14',
          '3 cu ft bags: 9 per yard',
          '1.5 cu ft bags: 18 per yard',
          '0.5 cu ft pea gravel bags: 54 per yard',
        ],
      },
      {
        heading: 'From bed estimate to bag count',
        paragraphs: [
          'Calculate cubic yards first, then multiply by bags per yard. Example: 1.5 cu yd × 14 bags ≈ 21 bags (2 cu ft). Our calculator outputs bag counts automatically for your material settings.',
          'Buy 1–2 extra bags for patch-ups — returns are easier than a second store run.',
        ],
      },
      {
        heading: 'When bags make sense vs bulk',
        paragraphs: [
          'Bagged mulch wins for small beds, remote beds far from the driveway drop point, and when you lack a truck. Bulk wins above ~2 cubic yards on price and labor.',
          'See [delivery vs bags](/guides/delivery-vs-bags-bulk-mulch) for a full cost comparison.',
        ],
      },
    ],
    faqs: [
      {
        question: 'How many 2 cu ft bags for 2 cubic yards?',
        answer: 'About 27 bags (14 per yard × 2). Add 1–2 extras for waste.',
      },
      {
        question: 'Why does my receipt show fewer bags than calculated?',
        answer:
          'Fluffed bag volume can differ slightly from bulk yard volume. If short, depth may be under target — measure in the bed with a ruler.',
      },
      {
        question: 'Do all stores use 2 cu ft bags?',
        answer:
          'Most do, but confirm on shelf tags. Adjust the bag size in calculator settings if your store uses 3 cu ft.',
      },
    ],
  },
  {
    slug: 'spring-mulch-application-guide',
    category: 'installation',
    title: 'Spring Mulch Application — Timing, Prep & Spreading Tips',
    description:
      'When to mulch in spring, soil temperature considerations, weed prevention, how to spread evenly, and refreshing beds without smothering perennials.',
    readMinutes: 10,
    toolPath: '/mulch-calculator',
    toolLabel: 'Mulch calculator',
    relatedGuideSlugs: [
      'mulch-depth-how-deep',
      'edging-and-prepping-beds-before-mulch',
      'how-much-mulch-do-i-need',
    ],
    sections: [
      {
        heading: 'Best timing in spring',
        paragraphs: [
          'Apply mulch after soil warms and perennials emerge so you can see plant crowns. Late March through May is typical in temperate climates — adjust for your frost date.',
          'If you mulch too early on wet soil, you can trap cold and slow emergence. Wait until beds are workable and weeds are pulled or treated.',
        ],
      },
      {
        heading: 'Prep steps before spreading',
        paragraphs: [
          'Edge beds, remove winter debris, and pull existing weeds. Install or refresh edging to hold mulch. Water plants if soil is dry — mulch on dry soil still helps, but plants stress less when hydrated first.',
          'For new beds, consider landscape fabric or cardboard only where long-term weed pressure is severe — many gardeners prefer thick mulch alone for perennials.',
        ],
      },
      {
        heading: 'Spreading technique',
        paragraphs: [
          'Dump piles in sections, rake to uniform depth using a hard rake or hands. Use a yardstick or stake marked at 3 inches to spot-check depth. Keep mulch pulled back from trunks and building siding.',
          'On slopes, shredded mulch outperforms nuggets. Water lightly after spreading to settle dust and help knit fibers on dyed products.',
        ],
      },
    ],
    faqs: [
      {
        question: 'Can I mulch before plants come up?',
        answer:
          'Light refresh is OK if you know plant locations. Heavy new mulch can bury slow-emerging perennials — wait until you see shoots when possible.',
      },
      {
        question: 'Should I fertilize before mulching?',
        answer:
          'Slow-release granular fertilizer on established shrubs is fine before mulch. Avoid fresh hot compost as top mulch on tender plants.',
      },
      {
        question: 'How often should I remulch?',
        answer:
          'Most wood mulches need a 1–2 inch top-up yearly or every other year as the lower layer decomposes.',
      },
    ],
  },
  {
    slug: 'rubber-mulch-vs-wood-mulch',
    category: 'mulch',
    title: 'Rubber Mulch vs Wood Mulch — Playgrounds & Landscapes',
    description:
      'Compare rubber mulch and wood mulch for playgrounds, longevity, cost per cubic yard, heat retention, and when each material fits residential landscaping.',
    readMinutes: 8,
    relatedGuideSlugs: [
      'mulch-vs-bark-vs-compost',
      'mulch-depth-how-deep',
      'how-much-mulch-do-i-need',
    ],
    sections: [
      {
        heading: 'Wood mulch overview',
        paragraphs: [
          'Natural appearance, improves soil as it breaks down, standard for garden beds. Needs replacement every 1–3 years. Lower upfront cost per cubic yard in most markets.',
          'Not ideal for fall zones under play equipment unless specified engineered wood fiber — different product than decorative bark.',
        ],
      },
      {
        heading: 'Rubber mulch overview',
        paragraphs: [
          'Made from recycled tires — lasts many years, does not decompose, vivid colors available. Popular for playgrounds when installed at certified depths (often 6 inches for fall height ratings — check local code).',
          'Higher material cost, can retain heat in full sun, and does not feed soil. Best contained with borders — pieces can scatter.',
        ],
      },
      {
        heading: 'Volume planning is the same',
        paragraphs: [
          'Whether rubber or wood, order by cubic yards from area × depth. Playground specs may require deeper fill than garden beds — recalculate volume before ordering.',
        ],
      },
    ],
    faqs: [
      {
        question: 'Is rubber mulch safe for gardens?',
        answer:
          'Most food-garden guides recommend wood-based mulch. Rubber is marketed for playgrounds and paths, not edible beds.',
      },
      {
        question: 'Does rubber mulch need more depth?',
        answer:
          'Playground installations often need 6+ inches for impact attenuation. Decorative use may match wood depths — follow manufacturer specs.',
      },
      {
        question: 'Which lasts longer?',
        answer:
          'Rubber lasts many years. Wood replenishes annually as it decomposes — a feature for soil health in planting beds.',
      },
    ],
  },
  {
    slug: 'edging-and-prepping-beds-before-mulch',
    category: 'installation',
    title: 'Edging & Bed Prep Before You Mulch',
    description:
      'Install plastic, steel, or trench edging to contain mulch. Weed barriers, slope tips, and prep checklist so your cubic yard estimate matches a clean finished bed.',
    readMinutes: 9,
    relatedGuideSlugs: [
      'spring-mulch-application-guide',
      'mulch-depth-how-deep',
      'how-much-mulch-do-i-need',
    ],
    sections: [
      {
        heading: 'Why edging matters',
        paragraphs: [
          'Edging keeps mulch off lawn and pavement, maintains depth over time, and reduces washout on slopes. Without a border, rake-out into grass is inevitable — wasting material and killing turf.',
        ],
        bullets: [
          'Trench edge: economical, natural look',
          'Plastic/composite bender board: curves, DIY-friendly',
          'Steel or aluminum: durable, modern lines',
          'Stone/brick: formal, higher labor',
        ],
      },
      {
        heading: 'Weed control choices',
        paragraphs: [
          'Hand-pulling plus 3 inches mulch handles most residential beds. Landscape fabric under mulch can help on persistent weeds but impedes organic matter incorporation — cut Xs for new plantings.',
          'Cardboard sheet mulch is a biodegradable middle ground for smothering grass when converting lawn to bed (plan extra volume for depressions as cardboard breaks down).',
        ],
      },
      {
        heading: 'Prep checklist',
        paragraphs: [
          '1) Mark bed outline. 2) Install edging. 3) Remove weeds/debris. 4) Water plants. 5) Calculate volume with target depth. 6) Spread and depth-check.',
          'Good prep means the mulch you calculated actually stays in the bed — not on the driveway.',
        ],
      },
    ],
    faqs: [
      {
        question: 'Do I need landscape fabric under mulch?',
        answer:
          'Optional. Helpful under stone or for severe weeds; many perennial gardeners skip it and rely on depth + maintenance.',
      },
      {
        question: 'How deep should a mulch trench edge be?',
        answer:
          '3–4 inches deep, vertical or slightly angled — enough to block rake spill. Wider trenches look crisp between lawn and bed.',
      },
      {
        question: 'Should I edge before or after delivery?',
        answer:
          'Before. Edging defines where piles go and prevents mulch on lawn during spreading.',
      },
    ],
  },
  {
    slug: 'delivery-vs-bags-bulk-mulch',
    category: 'planning',
    title: 'Bulk Mulch Delivery vs Bags — Cost & Logistics',
    description:
      'When to order bulk mulch by the cubic yard vs buying bagged product. Delivery fees, minimums, DIY truck hauling, and storage tips for weekend landscaping projects.',
    readMinutes: 8,
    toolPath: '/mulch-calculator',
    toolLabel: 'Mulch calculator',
    relatedGuideSlugs: [
      'how-many-mulch-bags-per-yard',
      'cubic-yards-mulch-explained',
      'how-much-mulch-do-i-need',
    ],
    sections: [
      {
        heading: 'Bulk delivery basics',
        paragraphs: [
          'Suppliers dump mulch on driveway or tarp — you wheelbarrow to beds. Pricing is per cubic yard; delivery fees often apply under 3–5 yards. Schedule when you can spread same day or cover piles if rain is forecast.',
          'Dyed mulch can stain pavement — use tarp under the drop zone.',
        ],
      },
      {
        heading: 'Bagged mulch from retailers',
        paragraphs: [
          'Higher per-yard cost but no delivery wait, easier carry to backyards, and exact returns of unopened bags. Ideal for 0.5–2 yard projects split across weekends.',
          'Calculate bags with our [bags per yard guide](/guides/how-many-mulch-bags-per-yard) before loading the cart.',
        ],
        bullets: [
          'Under ~1.5 cu yd: bags often competitive with delivery fee',
          '2–5 cu yd: bulk usually wins on price',
          'Backyard-only access: bags despite higher cost',
          'Pickup truck: 1.5–2 yd self-haul saves delivery',
        ],
      },
      {
        heading: 'Hidden costs to compare',
        paragraphs: [
          'Include: material, tax, delivery, tarp, wheelbarrow time, and fuel for self-haul. Bulk mistakes (ordering short) cost a second delivery minimum — calculate with 10% waste up front.',
        ],
      },
    ],
    faqs: [
      {
        question: 'What is a typical mulch delivery minimum?',
        answer:
          'Often 2–3 cubic yards for local nurseries; big-box bulk programs vary. Call before assuming single-yard delivery.',
      },
      {
        question: 'How long can a mulch pile sit?',
        answer:
          'Spread within a few days if possible. Covered piles can sit longer; wet piles heat and sour in summer.',
      },
      {
        question: 'Is bulk mulch the same quality as bags?',
        answer:
          'Often the same supplier — bulk may be fresher and moister. Ask if dyed bulk matches bag SKU color.',
      },
    ],
  },
];

export function getGuideBySlug(slug: string): Guide | undefined {
  return GUIDES.find((g) => g.slug === slug);
}

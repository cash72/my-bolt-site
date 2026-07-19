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
      'mulch-bed-project-from-scratch',
      'mulch-depth-how-deep',
      'how-to-spread-mulch-evenly',
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
      'weeding-before-mulch-how-to',
      'how-to-spread-mulch-evenly',
      'refresh-mulch-without-removing-old',
      'mulch-bed-project-from-scratch',
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
      'edging-options-for-mulch-beds',
      'weeding-before-mulch-how-to',
      'mulch-too-close-to-house-foundation',
      'mulch-bed-project-from-scratch',
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
{
    slug: 'fall-mulch-application-timing',
    category: 'mulch',
    title: 'Fall Mulch Application — Timing, Depth & Winter Prep',
    description:
      'When to mulch in fall, how late is too late, ideal depth before frost, protecting perennials and shrubs, and how autumn top-ups affect your cubic yard order.',
    readMinutes: 9,
    toolPath: '/mulch-calculator',
    toolLabel: 'Mulch calculator',
    relatedGuideSlugs: [
      'spring-mulch-application-guide',
      'mulch-depth-how-deep',
      'how-much-mulch-do-i-need',
    ],
    sections: [
      {
        heading: 'Best window for fall mulching',
        paragraphs: [
          'Fall mulch goes down after a few light frosts but before the ground freezes hard — typically late September through November in temperate zones. Soil is still workable, weeds slow down, and plants enter dormancy.',
          'Avoid heavy new mulch on warm wet soil in early fall — that can keep roots too moist and invite crown rot on perennials. Wait until top growth slows and you have pulled summer weeds.',
        ],
        bullets: [
          'Northern zones: aim before consistent hard freeze',
          'Mild climates: mulch after peak heat, before heavy rain season',
          'New plantings: mulch same season as install once watered in',
          'Skip dyed mulch on frozen ground — it will not knit until spring',
        ],
      },
      {
        heading: 'Fall depth and winter protection',
        paragraphs: [
          'A 2–3 inch refresh is enough for most beds going into winter. Do not exceed 4 inches total — deep piles against woody stems trap moisture and invite rodents to nest.',
          'For marginally hardy plants, mulch insulates roots but does not replace proper hardiness zone selection. Pull mulch back from crowns in early spring so new growth is not delayed.',
          'On slopes, fall is a good time to top up before winter washout. Shredded hardwood or pine fines interlock better than nuggets on grade.',
        ],
      },
      {
        heading: 'Calculating your fall order',
        paragraphs: [
          'Measure only the depth you need to restore — not full new-bed depth if 1–2 inches of mulch remains. Subtract existing depth from your 3-inch target before running numbers.',
          'Fall projects often combine several beds after leaf cleanup. Use our [mulch calculator](/mulch-calculator) for cubic yards and bag counts, or see [how much mulch do I need](/guides/how-much-mulch-do-i-need) for manual math on irregular beds.',
        ],
      },
    ],
    faqs: [
      {
        question: 'Is fall or spring better for mulching?',
        answer:
          'Both work. Spring mulch supports weed suppression during active growth; fall mulch protects soil over winter and reduces heaving on shallow-rooted plants. Many gardeners do a light fall touch-up and a fuller spring refresh.',
      },
      {
        question: 'Can I mulch over fallen leaves?',
        answer:
          'Shred leaves lightly into the bed or remove thick mats first. Whole wet leaves under mulch can mat and block air — rake or mow-in before spreading wood mulch.',
      },
      {
        question: 'How much mulch for a fall top-up on 200 sq ft?',
        answer:
          'At 2 inches new depth: 200 × (2/12) = 33 cu ft ≈ 1.2 cubic yards. Add 10% waste and round up. That is roughly 17–18 standard 2 cu ft bags.',
      },
    ],
  },
  {
    slug: 'mulch-for-vegetable-gardens',
    category: 'mulch',
    title: 'Mulch for Vegetable Gardens — Straw, Chips & Compost',
    description:
      'Best mulch types for vegetable beds and paths. Straw vs wood chips, nitrogen tie-up, slug risks, and how much to order for raised beds and row paths.',
    readMinutes: 10,
    toolPath: '/mulch-calculator',
    toolLabel: 'Mulch calculator',
    relatedGuideSlugs: [
      'mulch-vs-bark-vs-compost',
      'mulch-depth-how-deep',
      'how-much-mulch-do-i-need',
    ],
    sections: [
      {
        heading: 'Mulch types that work in food gardens',
        paragraphs: [
          'Vegetable gardens favor fast-decomposing, weed-free materials: straw (not hay — hay carries weed seeds), shredded leaves, compost, and partially aged wood chips on paths only.',
          'Avoid fresh wood mulch directly against young seedlings — as it breaks down at the soil line it can temporarily tie up nitrogen. Compost or straw around transplants is the safer default.',
        ],
        bullets: [
          'Straw: paths and mature tomatoes/peppers — 2–3 inches',
          'Compost mulch: rich beds, cool soil — 1–2 inches',
          'Shredded leaves: free, excellent after partial composting',
          'Wood chips: walkways between rows, not seed rows',
        ],
      },
      {
        heading: 'Where to mulch and where to skip',
        paragraphs: [
          'Mulch paths to keep mud off shoes and reduce compaction. Around established plants, keep mulch 2–3 inches from stems to limit slug hiding and stem rot.',
          'Direct-seeded beds (carrots, lettuce) often stay unmulched until plants are 4–6 inches tall — then side-dress with thin straw. Raised beds drain fast; 2 inches is usually enough.',
        ],
      },
      {
        heading: 'Estimating volume for beds and paths',
        paragraphs: [
          'Treat each raised bed and path as a separate rectangle. A 4 ft × 8 ft bed at 2 inches depth needs about 5.3 cu ft — roughly four 2 cu ft bags.',
          'Add path length × width for total project volume. Our [mulch calculator](/mulch-calculator) handles multiple areas; set depth to 2 inches for most vegetable applications.',
        ],
      },
    ],
    faqs: [
      {
        question: 'Is cedar mulch safe for vegetable gardens?',
        answer:
          'Aged cedar on paths is fine. Avoid thick fresh cedar against young vegetable roots — use straw or compost in planting zones instead.',
      },
      {
        question: 'Does mulch attract slugs in vegetable beds?',
        answer:
          'Yes, especially in cool wet weather. Keep mulch thin near seedlings, use drier straw, and hand-pick or trap if slugs become a problem.',
      },
      {
        question: 'How deep should mulch be on garden paths?',
        answer:
          '2–3 inches of straw or chips on firm soil. Refresh when bare patches appear — path mulch compacts faster than ornamental beds.',
      },
    ],
  },
  {
    slug: 'calculating-mulch-for-tree-rings',
    category: 'planning',
    title: 'Calculating Mulch for Tree Rings — Area & Volume',
    description:
      'Measure tree ring area with inner and outer radius, convert to cubic yards, avoid volcano mulching, and worked examples for young trees and mature shade trees.',
    readMinutes: 8,
    toolPath: '/mulch-calculator',
    toolLabel: 'Mulch calculator',
    relatedGuideSlugs: [
      'how-much-mulch-do-i-need',
      'mulch-depth-how-deep',
      'cubic-yards-mulch-explained',
    ],
    sections: [
      {
        heading: 'Tree ring area formula',
        paragraphs: [
          'A tree ring is an annulus — a circle with a hole. Area = π × (R² − r²), where R is outer radius and r is inner radius (keep mulch off the trunk).',
          'Example: mulch from 1 ft from trunk to 5 ft from trunk. Outer R = 5 ft, inner r = 1 ft. Area = 3.14 × (25 − 1) = 75.4 sq ft. At 3 inches depth: 75.4 × 0.25 = 18.9 cu ft ≈ 0.7 cubic yards.',
          'For quick estimates when the trunk zone is small, use π × R² if R is measured to the drip line — error is modest on large rings.',
        ],
      },
      {
        heading: 'Multiple trees and odd shapes',
        paragraphs: [
          'Calculate each ring separately, then add cubic yards for one delivery. Oval rings: use average radius or split into two half-ovals.',
          'Grouped plantings under one canopy can be one large circle instead of individual rings — simpler math and a healthier root zone mulch blanket.',
        ],
        bullets: [
          'Young tree: 3–4 ft outer radius is common',
          'Mature shade tree: extend to drip line when feasible',
          'Keep 3–6 inches bare around trunk flare',
          'Flat 2–4 inch depth — never mounded against bark',
        ],
      },
      {
        heading: 'From square feet to bags or bulk',
        paragraphs: [
          'Divide cubic feet by 27 for yards; multiply yards by ~13.5 for standard 2 cu ft bags (half-bags do not exist — round up).',
          'Three 6-ft-diameter rings at 3 inches total about 0.8 cubic yards — often cheaper as bags than a bulk minimum. Run all rings in our [mulch calculator](/mulch-calculator) with custom bed dimensions.',
        ],
      },
    ],
    faqs: [
      {
        question: 'How big should a tree ring be?',
        answer:
          'At minimum, 3–4 ft radius on new trees. On mature trees, mulch to the drip line where practical — that mirrors where feeder roots absorb water and nutrients.',
      },
      {
        question: 'How much mulch for a 8 ft diameter ring at 3 inches?',
        answer:
          'If mulching the full circle (64 sq ft): 64 × 0.25 = 16 cu ft ≈ 0.59 cu yd — about 8 bags. Subtract inner trunk zone if you leave bare soil at the base.',
      },
      {
        question: 'Can I use the calculator for tree rings?',
        answer:
          'Yes — enter the outer length and width of a square that contains the ring, or use a circular bed entry if your calculator supports diameter. For precision on donut shapes, use the annulus formula above.',
      },
    ],
  },
  {
    slug: 'colored-mulch-fade-and-refresh',
    category: 'mulch',
    title: 'Colored Mulch Fade & Refresh — When to Reapply',
    description:
      'Why dyed mulch fades, how long color lasts, refresh vs full replacement, stain risks on pavement, and volume for a cosmetic top-up layer.',
    readMinutes: 8,
    toolPath: '/mulch-calculator',
    toolLabel: 'Mulch calculator',
    relatedGuideSlugs: [
      'rubber-mulch-vs-wood-mulch',
      'spring-mulch-application-guide',
      'delivery-vs-bags-bulk-mulch',
    ],
    sections: [
      {
        heading: 'Why colored mulch fades',
        paragraphs: [
          'Dyed mulch gets color from water-based iron oxide or carbon pigments applied to shredded bark or wood. UV light, rain, and microbial breakdown fade the surface color within 6–18 months — faster in sunny front yards, slower in shade.',
          'Fade is cosmetic — the mulch still suppresses weeds and retains moisture. Fading does not mean the material failed; the top 1/2 inch weathers first while lower layers stay darker until you rake.',
        ],
      },
      {
        heading: 'Refresh strategy without over-mulching',
        paragraphs: [
          'Fluff existing mulch with a hard rake to expose fresher material underneath — often enough for back beds. For front curb appeal, add 1–2 inches of new dyed mulch to restore color.',
          'Do not stack year after year without checking total depth. If mulch is already 4+ inches, remove old matted layers or skip a year before refreshing — deep mulch harms woody plants.',
        ],
        bullets: [
          'Rake first — free color boost from turnover',
          'Top-up: 1–2 inches max for fade refresh',
          'Match dye batch when possible — reds and browns vary by supplier',
          'Water lightly after spread to set dye dust',
        ],
      },
      {
        heading: 'Ordering the right amount for refresh',
        paragraphs: [
          'Refresh volume is smaller than initial install. A 150 sq ft front bed at 1.5 inches new depth needs 150 × 0.125 = 18.75 cu ft ≈ 0.7 cubic yards — about 9–10 bags.',
          'Calculate refresh depth separately from total bed depth. Use our [mulch calculator](/mulch-calculator) with a 1–2 inch depth entry for cosmetic top-ups only.',
        ],
      },
    ],
    faqs: [
      {
        question: 'How long does colored mulch stay red or black?',
        answer:
          'Expect noticeable fade in one season in full sun; 12–24 months before a 1–2 inch refresh looks best on display beds. Brown dyes often fade more gracefully than bright red.',
      },
      {
        question: 'Does dyed mulch harm plants or soil?',
        answer:
          'Iron oxide and carbon-based dyes used by reputable suppliers are generally considered safe for landscape use. Avoid unknown cheap dyes near vegetable beds — use natural mulch in food gardens.',
      },
      {
        question: 'Will fresh dyed mulch stain my driveway?',
        answer:
          'Yes, when wet. Keep piles on tarp, avoid spreading in rain, and rinse pavement promptly. Let mulch dry slightly after delivery if staining is a concern.',
      },
    ],
  },
  {
    slug: 'landscape-fabric-under-mulch',
    category: 'mulch',
    title: 'Landscape Fabric Under Mulch — Pros, Cons & Install',
    description:
      'When landscape fabric helps, when to skip it, weed barrier vs wood mulch decomposition, proper install steps, and how fabric affects long-term bed maintenance.',
    readMinutes: 9,
    toolPath: '/mulch-calculator',
    toolLabel: 'Mulch calculator',
    relatedGuideSlugs: [
      'edging-and-prepping-beds-before-mulch',
      'mulch-depth-how-deep',
      'spring-mulch-application-guide',
    ],
    sections: [
      {
        heading: 'When fabric makes sense',
        paragraphs: [
          'Non-woven geotextile fabric under stone or under mulch can slow persistent weeds on paths, commercial plantings, and beds converted from lawn. It is not a permanent weed cure — organic matter and wind-blown seeds accumulate on top.',
          'Skip fabric in perennial borders where you divide and replant often. Roots and earthworms work best with direct soil contact; fabric creates a barrier that complicates planting and soil improvement.',
        ],
        bullets: [
          'Good: stone paths, parking strips, severe weed pressure',
          'Skip: vegetable gardens, active perennial beds',
          'Use woven fabric under gravel; non-woven under mulch',
          'Never use solid plastic — blocks air and water',
        ],
      },
      {
        heading: 'Installation steps',
        paragraphs: [
          'Remove weeds, smooth soil, and install edging first. Roll fabric shiny-side down (if marked), overlap seams 6–12 inches, and pin edges every few feet. Cut Xs for existing plants; slit lines for new rows.',
          'Cover with 2–4 inches of mulch immediately — UV destroys exposed fabric in one season. Mulch hides fabric and holds it against wind.',
        ],
      },
      {
        heading: 'Fabric and your mulch depth estimate',
        paragraphs: [
          'Fabric does not change volume math — depth and area stay the same. You may need slightly more mulch the first year as fabric prevents some settling into soil.',
          'Plan for future refresh without adding fabric layers — double layers trap debris and roots. Calculate top-up mulch with our [mulch calculator](/mulch-calculator) at normal 2–3 inch depth.',
        ],
      },
    ],
    faqs: [
      {
        question: 'Does landscape fabric stop weeds completely?',
        answer:
          'No. Weeds can grow in mulch above the fabric and through cut holes. It reduces weed pressure from below — especially grass rhizomes — but maintenance is still required.',
      },
      {
        question: 'Can I put new fabric over old mulch?',
        answer:
          'Not recommended. Remove or rake old mulch flat, pull weeds, then fabric and fresh mulch. Layering creates a soggy mat and makes planting impossible.',
      },
      {
        question: 'How long does landscape fabric last under mulch?',
        answer:
          'Quality non-woven fabric often lasts 5–10 years under 3 inches of mulch before breakdown and weed breakthrough. Cheaper thin fabric fails sooner — invest in 3–4 oz weight for longevity.',
      },
    ],
  },
  {
    slug: 'playground-mulch-safety-standards',
    category: 'mulch',
    title: 'Playground Mulch Safety — Depth, Materials & Standards',
    description:
      'ASTM mulch depth for fall height, engineered wood fiber vs rubber mulch, critical fall height tables, and how to calculate cubic yards for play areas.',
    readMinutes: 10,
    toolPath: '/mulch-calculator',
    toolLabel: 'Mulch calculator',
    relatedGuideSlugs: [
      'rubber-mulch-vs-wood-mulch',
      'mulch-depth-how-deep',
      'how-much-mulch-do-i-need',
    ],
    sections: [
      {
        heading: 'Critical fall height and depth',
        paragraphs: [
          'Playground surfacing is sized to equipment fall height — the highest designated play surface to the protective ground cover. Engineered wood fiber (EWF) and rubber mulch are tested to ASTM F1292 and F2075 standards when labeled for playground use.',
          'Depth is much deeper than landscape beds. A 8-ft fall height may require 9–12 inches of compacted EWF or 6 inches of rubber mulch — check the manufacturer certificate for your product. Landscape bark at 3 inches is not playground-safe.',
        ],
        bullets: [
          'Measure fall height from highest walkable surface',
          'Use only certified playground surfacing products',
          'Install to compacted depth, not fluffy pile height',
          'Extend surfacing zone per equipment footprint guidelines',
        ],
      },
      {
        heading: 'Material choices for residential playsets',
        paragraphs: [
          'Engineered wood fiber knits when compacted and is economical for large zones. Rubber mulch lasts longer, needs less depth, and drains well but costs more per cubic yard and gets hot in direct sun.',
          'Pea gravel and landscape mulch are poor impact surfaces — avoid them under swings and climbing structures. Maintain borders so surfacing does not migrate into lawn.',
        ],
      },
      {
        heading: 'Volume math for play areas',
        paragraphs: [
          'Play zones are often rectangular fall zones under swings or full use zones around composite structures. Area × depth in feet = cubic feet ÷ 27 = cubic yards.',
          'Example: 20 ft × 15 ft use zone at 9 inches (0.75 ft) depth = 300 × 0.75 = 225 cu ft ≈ 8.3 cubic yards before compaction allowance. Add 10–15% for settle and rake maintenance.',
          'Run your fall zone dimensions through our [mulch calculator](/mulch-calculator) — enter depth in inches per manufacturer spec, not standard 3-inch landscape depth.',
        ],
      },
    ],
    faqs: [
      {
        question: 'How deep should mulch be under a swing set?',
        answer:
          'Depends on fall height and product certification — often 9–12 inches of engineered wood fiber for residential sets with 8–10 ft platforms. Read the surfacing chart shipped with your playset or mulch supplier.',
      },
      {
        question: 'Is rubber mulch safer than wood for playgrounds?',
        answer:
          'Both can meet standards when certified and installed to required depth. Rubber needs less depth and lasts longer; EWF is cooler under bare feet and lower cost but needs periodic rake and top-up.',
      },
      {
        question: 'How often should playground mulch be topped up?',
        answer:
          'Rake monthly in high-use areas; top up 1–2 times per year as compaction and displacement occur under swings and slide exits. Re-check depth with a probe after heavy use seasons.',
      },
    ],
  },
  {
    slug: 'mulch-bed-project-from-scratch',
    category: 'planning',
    title: 'Mulch Bed Project From Scratch — DIY Landscaping Roadmap',
    description:
      'Complete DIY mulch project map: measure cubic yards, choose material, weed and edge beds, fabric decisions, spread depth, and yearly refresh. Links every phase to free calculators.',
    readMinutes: 12,
    toolPath: '/mulch-calculator',
    toolLabel: 'Mulch calculator',
    relatedGuideSlugs: [
      'how-much-mulch-do-i-need',
      'weeding-before-mulch-how-to',
      'how-to-spread-mulch-evenly',
      'edging-and-prepping-beds-before-mulch',
    ],
    sections: [
      {
        heading: 'Why mulch jobs look patchy by midsummer',
        paragraphs: [
          'Thin spots, volcanoes at tree trunks, fabric poking through, and mulch piled against siding all come from skipped planning — not from the brand of bark. This roadmap walks bed refresh from measure to maintain with calculator links so you order yards once.',
          'Jump to the phase you need. Vegetable beds, playgrounds, and gravel paths branch after you estimate volume.',
        ],
      },
      {
        heading: 'The 8-phase mulch bed flow',
        bullets: [
          'Phase 1 — Measure area and depth; convert to cubic yards',
          'Phase 2 — Choose material (bark, wood, rubber, compost blends)',
          'Phase 3 — Decide bags vs bulk delivery',
          'Phase 4 — Weed and edge beds; keep mulch off the foundation',
          'Phase 5 — Fabric yes/no under mulch',
          'Phase 6 — Spread evenly to target depth',
          'Phase 7 — Tree rings and special zones',
          'Phase 8 — Refresh next season without stripping everything',
        ],
        paragraphs: [
          'Mid-project deep dives: [weeding before mulch](/guides/weeding-before-mulch-how-to), [spread evenly](/guides/how-to-spread-mulch-evenly), [foundation clearance](/guides/mulch-too-close-to-house-foundation), [edging options](/guides/edging-options-for-mulch-beds), [refresh without removing](/guides/refresh-mulch-without-removing-old).',
        ],
      },
      {
        heading: 'Phase-by-phase deep links',
        bullets: [
          'Measure: [How much mulch](/guides/how-much-mulch-do-i-need) · [Depth](/guides/mulch-depth-how-deep) · [Cubic yards](/guides/cubic-yards-mulch-explained) · [Bags per yard](/guides/how-many-mulch-bags-per-yard)',
          'Choose: [Mulch vs bark vs compost](/guides/mulch-vs-bark-vs-compost) · [Rubber vs wood](/guides/rubber-mulch-vs-wood-mulch) · [Colored mulch](/guides/colored-mulch-fade-and-refresh)',
          'Buy: [Delivery vs bags](/guides/delivery-vs-bags-bulk-mulch)',
          'Prep: [Edge and prep beds](/guides/edging-and-prepping-beds-before-mulch) · [Weed first](/guides/weeding-before-mulch-how-to) · [Edging options](/guides/edging-options-for-mulch-beds)',
          'Fabric: [Landscape fabric under mulch](/guides/landscape-fabric-under-mulch)',
          'Apply: [Spread evenly](/guides/how-to-spread-mulch-evenly) · [Spring timing](/guides/spring-mulch-application-guide) · [Fall timing](/guides/fall-mulch-application-timing)',
          'Special: [Tree rings](/guides/calculating-mulch-for-tree-rings) · [Vegetable gardens](/guides/mulch-for-vegetable-gardens) · [Playground](/guides/playground-mulch-safety-standards)',
          'Maintain: [Refresh without removing](/guides/refresh-mulch-without-removing-old) · [Keep off foundation](/guides/mulch-too-close-to-house-foundation)',
        ],
        paragraphs: [
          'Calculators: [mulch](/mulch-calculator), [cubic yards](/cubic-yards-calculator), [topsoil](/topsoil-calculator), [gravel](/gravel-calculator), [playground](/playground-mulch-calculator).',
        ],
      },
      {
        heading: 'One-weekend bed refresh',
        paragraphs: [
          'Saturday morning: measure and order bulk or buy bags; weed and edge. Saturday afternoon: fabric if using, then spread to depth. Sunday: tree rings, blow debris off lawn, wash sidewalks. Schedule delivery early — bulk piles dry out and are harder to move in afternoon sun.',
        ],
      },
    ],
    faqs: [
      {
        question: 'How deep should mulch be in flower beds?',
        answer:
          'Usually 2–3 inches for most bark and wood mulches after settling. More than 4 inches can smother roots and hold too much moisture. Use our depth guide and calculator.',
      },
      {
        question: 'Do I need landscape fabric under mulch?',
        answer:
          'Not always. Fabric can help with aggressive weeds but makes planting harder and can look exposed as mulch thins. See our fabric guide before you staple a whole bed.',
      },
      {
        question: 'How do I calculate cubic yards of mulch?',
        answer:
          'Area in square feet × depth in feet ÷ 27. Example: 300 sq ft at 3 inches (0.25 ft) ≈ 2.8 cubic yards. The mulch calculator does this from length, width, and depth.',
      },
    ],
  },
  {
    slug: 'weeding-before-mulch-how-to',
    category: 'installation',
    title: 'Weeding Before Mulch — How to Prep Beds So Weeds Stay Down',
    description:
      'How to clear weeds before mulching: hand pull vs smother vs herbicide, roots that regrow, and why mulch alone will not kill established weeds.',
    readMinutes: 8,
    toolPath: '/mulch-calculator',
    toolLabel: 'Mulch calculator',
    relatedGuideSlugs: [
      'edging-and-prepping-beds-before-mulch',
      'landscape-fabric-under-mulch',
      'how-to-spread-mulch-evenly',
      'mulch-bed-project-from-scratch',
    ],
    sections: [
      {
        heading: 'Mulch suppresses — it does not erase roots',
        paragraphs: [
          'Covering living weeds with two inches of bark often creates pale, stretched weeds that push through. Spend an hour weeding before you dump yards. Then calculate volume with the [mulch calculator](/mulch-calculator).',
        ],
      },
      {
        heading: 'Clear method by weed type',
        bullets: [
          'Annual seedlings: hoe or scrape, then mulch same day',
          'Dandelion / taproots: dig full root; broken pieces regrow',
          'Bermuda / quackgrass: remove runners; consider fabric or repeated clearing',
          'Beds being redesigned: smother with cardboard then mulch (sheet mulching)',
        ],
        paragraphs: [
          'Water the bed lightly the day before — roots slide out easier. Avoid tilling weed seeds to the surface right before mulch day.',
        ],
      },
      {
        heading: 'Herbicide notes for DIYers',
        paragraphs: [
          'If you use a non-selective product on empty beds, follow the label wait time before planting or heavy mulching. Keep spray off lawn edges and desirable shrubs. Many beds do fine with mechanical weeding only.',
        ],
      },
      {
        heading: 'After weeds are gone',
        paragraphs: [
          'Edge the bed, decide on fabric, then spread. Continue with [edging and prep](/guides/edging-and-prepping-beds-before-mulch), [fabric guide](/guides/landscape-fabric-under-mulch), and [how to spread mulch evenly](/guides/how-to-spread-mulch-evenly).',
        ],
      },
    ],
    faqs: [
      {
        question: 'Can I mulch over weeds if I make it thicker?',
        answer:
          'Thicker mulch helps seedlings but established perennials often push through. Pull or smother first for a cleaner season.',
      },
      {
        question: 'Should I put cardboard under mulch?',
        answer:
          'Cardboard sheet mulching works for converting lawn to beds. Overlap seams, wet it, then mulch on top. Cut holes for plants. Avoid piling cardboard against tree trunks.',
      },
      {
        question: 'Do I weed again after mulching?',
        answer:
          'Yes — spot pull anything that germinates in the mulch surface. It is much faster than weeding bare soil.',
      },
    ],
  },
  {
    slug: 'how-to-spread-mulch-evenly',
    category: 'installation',
    title: 'How to Spread Mulch Evenly — Depth, Rake, and Finish Tips',
    description:
      'DIY technique for spreading bulk or bagged mulch to a consistent 2–3 inch depth: staging piles, rake patterns, slopes, and cleanup.',
    readMinutes: 8,
    toolPath: '/mulch-calculator',
    toolLabel: 'Mulch calculator',
    relatedGuideSlugs: [
      'mulch-depth-how-deep',
      'weeding-before-mulch-how-to',
      'calculating-mulch-for-tree-rings',
      'mulch-bed-project-from-scratch',
    ],
    sections: [
      {
        heading: 'Stage small piles — do not bury one corner',
        paragraphs: [
          'Dump or wheelbarrow mulch in small mounds along the bed, then rake out. One giant pile at the driveway end means the far border gets starved. Order enough with the [mulch calculator](/mulch-calculator) using your target depth from [how deep mulch should be](/guides/mulch-depth-how-deep).',
        ],
      },
      {
        heading: 'Spread technique',
        bullets: [
          'Wear gloves; bark dyes stain skin and sidewalks',
          'Use a flat bow rake or mulch fork to pull material to depth',
          'Check depth with a scrap stick marked at 2 and 3 inches',
          'Keep mulch pulled back from plant crowns and tree trunks',
          'On slopes, work uphill so loose bark does not avalanche',
          'Blow or sweep mulch off lawn and hardscape the same day',
        ],
        paragraphs: [
          'Bagged mulch: open bags in the bed where they will be used so you are not double-handling.',
        ],
      },
      {
        heading: 'Even depth checkpoints',
        paragraphs: [
          'Walk the bed after the first pass — thin spots show as dark soil. Add a second light pass rather than dumping thick patches that smother roots. Tree rings need a donut, not a volcano — see [mulch for tree rings](/guides/calculating-mulch-for-tree-rings).',
        ],
      },
      {
        heading: 'Finish and foundation clearance',
        paragraphs: [
          'Leave a clean gap at the house — details in [mulch too close to the foundation](/guides/mulch-too-close-to-house-foundation). Edge lines look sharp when you redefine the cut with a spade or [edging options](/guides/edging-options-for-mulch-beds).',
        ],
      },
    ],
    faqs: [
      {
        question: 'How do I know I have 3 inches of mulch?',
        answer:
          'Push a stick to the soil, mark the mulch surface, and measure. Check several spots — edges thin out first.',
      },
      {
        question: 'Should mulch be compacted?',
        answer:
          'Rake to settle but do not stomp it into a hard mat. It will settle slightly after rain — that is expected.',
      },
      {
        question: 'Can I use a blower to spread mulch?',
        answer:
          'Blowers help clean hardscape and move light chips. Heavy bulk bark is still a rake-and-fork job for even depth.',
      },
    ],
  },
  {
    slug: 'refresh-mulch-without-removing-old',
    category: 'mulch',
    title: 'Refresh Mulch Without Removing Old — Top-Up Guide',
    description:
      'How to top up faded mulch beds without hauling everything out: when to fluff, when to add an inch, and when old mulch should be removed.',
    readMinutes: 8,
    toolPath: '/mulch-calculator',
    toolLabel: 'Mulch calculator',
    relatedGuideSlugs: [
      'colored-mulch-fade-and-refresh',
      'mulch-depth-how-deep',
      'how-to-spread-mulch-evenly',
      'spring-mulch-application-guide',
    ],
    sections: [
      {
        heading: 'Most years you top up — you do not strip',
        paragraphs: [
          'Mulch decomposes and fades. A spring refresh is usually 1 inch over existing material after you fluff compacted areas — not a full tear-out. Measure thin spots and order less than a new install with the [mulch calculator](/mulch-calculator).',
        ],
      },
      {
        heading: 'Refresh steps',
        bullets: [
          'Rake and fluff old mulch to restore color and break crust',
          'Pull weeds that germinated in the surface',
          'Check total depth — stay near 2–3 inches after top-up',
          'Add fresh mulch in thin layers; blend edges into old',
          'Keep trunks and siding clear',
        ],
        paragraphs: [
          'Dyed mulch fade tips: [colored mulch fade and refresh](/guides/colored-mulch-fade-and-refresh). Timing: [spring mulch guide](/guides/spring-mulch-application-guide).',
        ],
      },
      {
        heading: 'When to remove old mulch',
        bullets: [
          'Sour, slimy, or anaerobic smell after being piled too deep',
          'Heavy weed rhizomes matted through the layer',
          'Switching to a totally different material (e.g. rubber over rotting bark)',
          'Grade changes or edging rebuild that needs a clean bed',
        ],
        paragraphs: [
          'Compost spent bark into garden beds if it is clean, or dispose per local green-waste rules.',
        ],
      },
      {
        heading: 'How much for a top-up',
        paragraphs: [
          'If beds still have ~2 inches and you want 3, order about one-third of a full re-mulch volume. Example: a bed that needed 3 yards new might need ~1 yard refresh. Spread with [even spreading tips](/guides/how-to-spread-mulch-evenly).',
        ],
      },
    ],
    faqs: [
      {
        question: 'Can I put new mulch over old fabric?',
        answer:
          'Yes if fabric is still flat and buried. Exposed fabric should be cut back or recovered — see our landscape fabric guide.',
      },
      {
        question: 'Will mixing old and new mulch look patchy?',
        answer:
          'Fluff and blend edges. Fresh dyed mulch will be brighter at first; it evens out after sun and rain.',
      },
      {
        question: 'How often should I refresh mulch?',
        answer:
          'Many beds need a light top-up every 1–2 years. High-sun dyed mulch may need color refresh sooner.',
      },
    ],
  },
  {
    slug: 'mulch-too-close-to-house-foundation',
    category: 'installation',
    title: 'Mulch Too Close to House Foundation — Clearance Guide',
    description:
      'How far to keep mulch from siding and foundations: moisture, pests, and termite inspection gaps. Safe edges for DIY bed layouts.',
    readMinutes: 8,
    toolPath: '/mulch-calculator',
    toolLabel: 'Mulch calculator',
    relatedGuideSlugs: [
      'edging-and-prepping-beds-before-mulch',
      'edging-options-for-mulch-beds',
      'how-to-spread-mulch-evenly',
      'mulch-bed-project-from-scratch',
    ],
    sections: [
      {
        heading: 'Mulch against siding is a moisture sandwich',
        paragraphs: [
          'Bark piled against wood, fiber cement, or stucco holds water and hides pests. Inspectors and termite companies look for soil or mulch contacting siding. Leave a clear inspection gap at the foundation when you spread.',
        ],
      },
      {
        heading: 'Practical clearance rules',
        bullets: [
          'Keep mulch several inches below the bottom of siding / stucco weep screed',
          'Do not bury siding, brick ledges, or hose bibs',
          'Pull mulch back from wood steps and deck posts',
          'Use rock or bare soil strips against the foundation if you want a neat edge',
          'Slope grade away from the house under the mulch layer',
        ],
        paragraphs: [
          'Local termite practices vary — when in doubt, leave a visible band of foundation clear. Edge the bed with [edging options](/guides/edging-options-for-mulch-beds) so bark stays put.',
        ],
      },
      {
        heading: 'How this changes your yardage',
        paragraphs: [
          'A clearance strip slightly reduces bed area — measure the planting bed, not the entire strip to the wall. Recalculate in the [mulch calculator](/mulch-calculator) if you carve out a rock border along the house.',
        ],
      },
      {
        heading: 'Fixing beds that are already piled high',
        paragraphs: [
          'Rake mulch down and away from siding; check for soft wood or mud tubes. Refresh the bed with [even spreading](/guides/how-to-spread-mulch-evenly) and proper depth from [mulch depth](/guides/mulch-depth-how-deep).',
        ],
      },
    ],
    faqs: [
      {
        question: 'How many inches of gap from the foundation?',
        answer:
          'Enough to see the foundation and keep mulch below siding — often a clear band of several inches to a foot depending on cladding and local pest guidance. Never bury siding.',
      },
      {
        question: 'Is gravel better against the house?',
        answer:
          'A narrow rock strip drains faster and stays put for inspections. You can still mulch the outer planting bed. Use the gravel calculator if that strip is wide.',
      },
      {
        question: 'Can mulch cause termites?',
        answer:
          'Mulch does not create termites, but constant moisture and hidden wood contact help pests go unnoticed. Clearance and dry detailing matter more than mulch brand.',
      },
    ],
  },
  {
    slug: 'edging-options-for-mulch-beds',
    category: 'installation',
    title: 'Edging Options for Mulch Beds — Metal, Plastic, Stone, Trench',
    description:
      'Compare mulch bed edging: spade-cut trench, steel, plastic, brick, and stone. Cost, look, and how edging changes mulch volume.',
    readMinutes: 9,
    toolPath: '/mulch-calculator',
    toolLabel: 'Mulch calculator',
    relatedGuideSlugs: [
      'edging-and-prepping-beds-before-mulch',
      'mulch-too-close-to-house-foundation',
      'how-to-spread-mulch-evenly',
      'mulch-bed-project-from-scratch',
    ],
    sections: [
      {
        heading: 'Edging keeps depth honest',
        paragraphs: [
          'Without an edge, mulch migrates into lawn and you overspread forever. Choose an edge before you order yards so the bed area is final — then run the [mulch calculator](/mulch-calculator).',
        ],
      },
      {
        heading: 'Option comparison',
        bullets: [
          'Spade-cut trench (natural edge): cheap, clean look, needs recutting',
          'Steel / aluminum landscape edging: thin profile, durable, higher material cost',
          'Plastic edging: budget, can heave in frost if not staked well',
          'Brick / paver restraint: heavy, formal, good near patios',
          'Stone or boulder edge: informal, uses more bed space',
        ],
        paragraphs: [
          'Prep steps overlap [edging and prepping beds](/guides/edging-and-prepping-beds-before-mulch). Keep foundation clearance per [mulch and foundation guide](/guides/mulch-too-close-to-house-foundation).',
        ],
      },
      {
        heading: 'Install tips that save mulch',
        bullets: [
          'Set edge height so finished mulch sits slightly below the lawn for mowing clearance',
          'Stake steel/plastic firmly — floppy edges spill bark',
          'Recut trench edges each spring if you skip hard edging',
          'Measure inside the edge for square footage',
        ],
        paragraphs: [
          'After edging: weed, optional fabric, then [spread mulch evenly](/guides/how-to-spread-mulch-evenly). Full project map: [mulch bed from scratch](/guides/mulch-bed-project-from-scratch).',
        ],
      },
    ],
    faqs: [
      {
        question: 'What is the cheapest mulch edge?',
        answer:
          'A sharp spade-cut trench costs only labor. Recut when grass creeps in. Hard edging costs more up front and less yearly maintenance.',
      },
      {
        question: 'Does edging change how much mulch I buy?',
        answer:
          'Slightly — a precise edge defines area. Soft, overgrown beds are larger than you think until you cut them back. Remeasure after edging.',
      },
      {
        question: 'Can I edge after mulching?',
        answer:
          'Yes, but you will spill and re-rake. Edge first when you can.',
      },
    ],
  },
];

export function getGuideBySlug(slug: string): Guide | undefined {
  return GUIDES.find((g) => g.slug === slug);
}

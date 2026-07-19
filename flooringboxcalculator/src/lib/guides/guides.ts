import type { Guide } from './types';

export const GUIDES: Guide[] = [
  // ── Prep & how-to ──────────────────────────────────────────────
  {
    slug: 'how-to-measure-rooms-for-flooring',
    category: 'prep',
    title: 'How to Measure Rooms for Flooring',
    description:
      'Measure length, width, closets, and odd shapes so your square footage and box count are accurate before you buy.',
    readMinutes: 9,
    toolPath: '/how-many-flooring-boxes',
    toolLabel: 'Flooring box calculator',
    relatedGuideSlugs: [
      'diy-flooring-installation-roadmap',
      'how-much-flooring-waste-to-buy',
      'how-many-flooring-boxes-guide',
      'when-not-to-diy-flooring',
    ],
    sections: [
      {
        heading: 'Basic rectangular rooms',
        paragraphs: [
          'Measure wall to wall at the longest points — not always at the baseboard if the room is out of square. Record length and width in feet and inches.',
          'Multiply length × width for square footage. A 12 ft × 14 ft room is 168 sq ft. Enter each room separately in the calculator, then add them for a whole-house total.',
        ],
      },
      {
        heading: 'Closets, hallways, and L-shaped rooms',
        bullets: [
          'Split L-shaped spaces into two rectangles, calculate each, then add',
          'Include closet floors if you are running the same flooring through',
          'Narrow hallways: measure full length × width; add extra waste for many cuts',
          'Subtract permanent islands only if tile stops at the cabinet base',
        ],
        paragraphs: [],
      },
      {
        heading: 'Common measuring mistakes',
        bullets: [
          'Forgetting to measure into doorways where flooring runs through',
          'Using carpet sizes when buying laminate boxes (different units and waste)',
          'Measuring once — verify with a second pass and a sketch',
          'Ignoring floor registers you will cut around (add waste, not subtract area)',
        ],
        paragraphs: [],
      },
      {
        heading: 'Whole-house measuring workflow',
        paragraphs: [
          'Sketch each room on grid paper. Label dimensions, door swings, and fixed islands. Total square footage in the [flooring box calculator](/) with waste from our [waste guide](/guides/how-much-flooring-waste-to-buy) before visiting the store.',
          'For open floor plans, measure as one zone if the same SKU runs continuously — otherwise split at transitions where material or direction changes.',
        ],
      },
    ],
    faqs: [
      {
        question: 'Do I measure in feet or square yards?',
        answer:
          'Measure rooms in feet for laminate and tile. Carpet is often quoted in square yards — divide total sq ft by 9. Our carpet calculator converts for you.',
      },
      {
        question: 'Should I buy extra for future repairs?',
        answer:
          'Keep one spare box of laminate or a few extra tiles after install. That is separate from waste — it is insurance for dents and water damage years later.',
      },
    ],
  },
  {
    slug: 'how-to-prep-subfloor-before-installing-flooring',
    category: 'prep',
    title: 'How to Prep a Subfloor Before Installing Flooring',
    description:
      'Level, clean, and dry the subfloor for laminate, tile, or carpet. Fix squeaks and high spots before you open the first box.',
    readMinutes: 10,
    toolPath: '/laminate-flooring-calculator',
    toolLabel: 'Laminate calculator',
    relatedGuideSlugs: [
      'diy-flooring-installation-roadmap',
      'do-i-need-underlay-for-laminate',
      'when-not-to-diy-flooring',
      'how-to-remove-old-flooring',
    ],
    sections: [
      {
        heading: 'Why subfloor prep matters',
        paragraphs: [
          'New flooring telegraphs every bump, dip, and squeak underneath. Laminate clicks together and bridges small gaps — but large low spots flex and crack boards. Tile needs a flat plane or edges crack. Carpet hides minor issues but pad over humps wears faster.',
          'Budget time for prep. It is often half the job on older homes.',
        ],
      },
      {
        heading: 'Prep checklist',
        bullets: [
          'Remove all old flooring, staples, and adhesive lumps',
          'Walk the floor — screw down loose OSB or plywood (squeak screws)',
          'Check moisture: concrete should pass a plastic-sheet or meter test for laminate/tile',
          'Grind or sand high spots; fill low spots with leveling compound',
          'Vacuum thoroughly — grit under underlayment wears grooves in laminate back',
          'For tile on plywood: verify deflection and use appropriate backer board',
        ],
        paragraphs: [],
      },
      {
        heading: 'Concrete vs plywood',
        paragraphs: [
          'Concrete: patch cracks, grind paint or sealer if bonding tile mortar, install vapor barrier or moisture-rated underlay if manufacturer requires it for laminate.',
          'Plywood subfloor: renail or screw on a grid pattern. Joints should not flex. Use underlayment or backer board per product specs — never float laminate directly on bare plank gaps without underlay.',
        ],
      },
      {
        heading: 'Flatness quick test',
        paragraphs: [
          'Drag a 6–10 ft straightedge in every direction. Mark humps and dips with pencil. Grind highs; fill lows with self-leveler per bag instructions. Re-test before [underlay](/guides/do-i-need-underlay-for-laminate) goes down.',
        ],
      },
    ],
    faqs: [
      {
        question: 'How flat does a subfloor need to be?',
        answer:
          'Many laminate specs allow 3/16 inch variation over 10 feet. Tile often needs 1/8 inch over 10 feet for large format. Use a long straightedge and feeler gauge — do not guess by eye.',
      },
      {
        question: 'Can I install over existing vinyl or tile?',
        answer:
          'Only if the old floor is fully bonded, one layer, and not cushioned vinyl. Laminate over soft vinyl flexes and fails. When unsure, remove down to subfloor.',
      },
    ],
  },
  {
    slug: 'how-to-remove-old-flooring',
    category: 'prep',
    title: 'How to Remove Old Flooring Before Installing New',
    description:
      'Strip carpet, laminate, vinyl, and tile safely. What to leave, what to tear out, and when asbestos testing is required.',
    readMinutes: 9,
    toolPath: '/how-many-flooring-boxes',
    toolLabel: 'Flooring box calculator',
    relatedGuideSlugs: [
      'how-to-prep-subfloor-before-installing-flooring',
      'how-to-measure-rooms-for-flooring',
    ],
    sections: [
      {
        heading: 'Carpet removal',
        bullets: [
          'Cut carpet into strips with a utility knife — easier to carry',
          'Pull tack strips with a pry bar; wear gloves (sharp)',
          'Remove pad staples from subfloor',
          'Inspect for pet damage or moisture before new install',
        ],
        paragraphs: [],
      },
      {
        heading: 'Laminate and floating floor removal',
        paragraphs: [
          'Floating floors come apart by reversing the click-lock from the last row installed. Start at a wall with a gap or remove baseboard first.',
          'Glue-down laminate is rare — scrape residue or replace subfloor layer if adhesive is severe.',
        ],
      },
      {
        heading: 'Tile and vinyl',
        bullets: [
          'Ceramic tile: hammer and chisel, or rent a floor scraper for large areas',
          'Thinset on plywood may need grinding — budget time',
          'Sheet vinyl: heat gun softens adhesive; test for asbestos in pre-1980s homes',
          'Never sand or grind suspected asbestos tile — hire abatement if unsure',
        ],
        paragraphs: [],
      },
      {
        heading: 'Timeline and disposal',
        bullets: [
          'Carpet: often one room per hour once you have technique',
          'Laminate float: fastest removal — stack planks for disposal',
          'Tile: slowest; rent dumpster for large tear-outs',
          'Budget one day removal + one day prep before install weekend',
        ],
        paragraphs: [
          'After tear-out, walk the subfloor and update measurements — old flooring thickness can hide true room size. Rerun the [square footage calculator](/flooring-square-footage-calculator) if walls were previously covered differently.',
        ],
      },
    ],
    faqs: [
      {
        question: 'Do I need to remove baseboards?',
        answer:
          'For floating laminate and vinyl plank, you can often undercut baseboards or use base shoe after install. Removing baseboards gives a cleaner look and easier first/last row fit.',
      },
    ],
  },
  {
    slug: 'flooring-acclimation-before-install',
    category: 'prep',
    title: 'How Long Should Flooring Acclimate Before Install?',
    description:
      'Why laminate, hardwood, and vinyl need to rest in the room — temperature, humidity, and manufacturer rules.',
    readMinutes: 8,
    sections: [
      {
        heading: 'What acclimation means',
        paragraphs: [
          'Flooring planks expand and contract with humidity and temperature. Boxes stored in a cold garage then installed in a heated room can gap or buckle as they adjust.',
          'Acclimation means storing unopened cartons flat in the install room (or adjacent conditioned space) until they reach equilibrium with the home.',
        ],
      },
      {
        heading: 'Typical timelines',
        bullets: [
          'Laminate: often 48–72 hours; some brands say 24 hours minimum',
          'Solid hardwood: 3–7 days or longer; follow species and regional guidelines',
          'Luxury vinyl plank (LVP): 24–48 hours common',
          'Ceramic/porcelain tile: does not acclimate like wood — but store indoors to avoid thermal shock',
        ],
        paragraphs: [
          'Run HVAC at normal living conditions during acclimation and install. Read the carton — warranty may require specific humidity ranges.',
        ],
      },
      {
        heading: 'Humidity targets (planning reference)',
        bullets: [
          'Many wood-based products: 35–55% relative humidity during acclimation',
          'Do not acclimate in an unheated garage then install in a 70°F home',
          'Use a hygrometer in the install room — cheap insurance against gaps',
          'Tile and stone: store indoors 24 hours; focus on substrate moisture instead',
        ],
        paragraphs: [
          'After acclimation, confirm box counts with the [laminate calculator](/laminate-flooring-calculator) before cutting the first row.',
        ],
      },
    ],
    faqs: [
      {
        question: 'Can I stack boxes against an exterior wall?',
        answer:
          'Avoid exterior walls and concrete slabs without a moisture barrier underneath cartons. Center of the room, flat stack, with air space around boxes is ideal.',
      },
    ],
  },
  {
    slug: 'flooring-transition-strips-and-trim',
    category: 'prep',
    title: 'Flooring Transitions, Reducers & Trim — What You Need',
    description:
      'T-molds, reducers, stair noses, and baseboards at doorways and height changes. Plan trim before you calculate boxes.',
    readMinutes: 8,
    sections: [
      {
        heading: 'Transition types',
        bullets: [
          'T-molding: same height, two hard surfaces (laminate to laminate across a doorway)',
          'Reducer: higher floor down to lower (laminate to vinyl or tile)',
          'End cap / square nose: flooring ends at fireplace or sliding door track',
          'Stair nose: bullnose profile on top stair tread for laminate/LVP',
          'Carpet gripper transition: metal strip where carpet meets hard flooring',
        ],
        paragraphs: [],
      },
      {
        heading: 'Expansion gaps and baseboards',
        paragraphs: [
          'Floating floors need a 1/4–3/8 inch gap at walls — hidden by baseboard or quarter round. Do not caulk the floating edge to the wall.',
          'Match transition color to flooring or trim. Buy one extra piece for miscuts.',
        ],
      },
      {
        heading: 'How to order transitions',
        paragraphs: [
          'Measure each doorway width and add 10% for cuts. Count height changes between rooms — each needs a reducer or T-mold. See [laminate install basics](/guides/how-to-install-laminate-flooring-beginners) for when to snap transitions before the last row.',
        ],
      },
    ],
    faqs: [
      {
        question: 'Do transitions count in square footage?',
        answer:
          'No — they are linear feet purchased separately. Measure each doorway width and add 10% for cuts.',
      },
    ],
  },

  // ── Planning & quantities ──────────────────────────────────────
  {
    slug: 'how-much-flooring-waste-to-buy',
    category: 'planning',
    title: 'How Much Flooring Waste Should I Buy?',
    description:
      '10% vs 15% waste for laminate, tile, and carpet — when to add more for diagonal layouts, stairs, and pattern matching.',
    readMinutes: 9,
    toolPath: '/flooring-waste-calculator',
    toolLabel: 'Flooring waste calculator',
    relatedGuideSlugs: [
      'how-many-flooring-boxes-guide',
      'how-to-measure-rooms-for-flooring',
    ],
    sections: [
      {
        heading: 'What waste covers',
        paragraphs: [
          'Waste is extra material beyond your measured room area. It pays for cutoffs at walls, mistakes, broken tile, and future repairs — not for unmeasured closets you forgot.',
        ],
      },
      {
        heading: 'Starting percentages',
        bullets: [
          'Laminate / LVP straight lay: 10% typical',
          'Laminate diagonal or many doorways: 12–15%',
          'Ceramic/porcelain tile: 15% standard; 18–20% for herringbone or large format',
          'Carpet: 10% for plain carpet; 15%+ for patterned or berber',
          'Stairs and landings: measure separately and add 15% — lots of cuts',
        ],
        paragraphs: [
          'Our calculator defaults to 10% laminate and 15% tile. Increase the slider if your layout is complex.',
        ],
      },
      {
        heading: 'When extra waste saves a second trip',
        bullets: [
          'Open floor plan with continuous run through multiple doorways',
          'Large format tile (fewer pieces per box — one break hurts)',
          'Discontinued color you cannot reorder',
          'First-time DIY installer',
        ],
        paragraphs: [],
      },
      {
        heading: 'Worked example: 320 sq ft living + hallway',
        paragraphs: [
          '320 sq ft × 10% waste = 352 sq ft to buy for straight laminate. At 22 sq ft per box → 16 boxes. For 15% tile waste on the same area: 368 sq ft ÷ 15 sq ft per box ≈ 25 boxes. Use the [waste calculator](/flooring-waste-calculator) to toggle percentages without redoing math.',
        ],
      },
    ],
    faqs: [
      {
        question: 'Is leftover flooring wasted money?',
        answer:
          'Some leftover is intentional. One spare box prevents a mismatch if you need a repair in five years. Store it labeled with the room name.',
      },
      {
        question: 'Should I round up boxes?',
        answer:
          'Always round up to whole boxes at the store. Partial boxes are not sold — our calculator rounds up automatically.',
      },
    ],
  },
  {
    slug: 'how-many-flooring-boxes-guide',
    category: 'planning',
    title: 'How Many Flooring Boxes Do I Need?',
    description:
      'Divide room square footage (plus waste) by coverage per box. Works for laminate, LVP, and tile cartons.',
    readMinutes: 8,
    toolPath: '/how-many-flooring-boxes',
    toolLabel: 'Flooring box calculator',
    relatedGuideSlugs: [
      'how-much-flooring-waste-to-buy',
      'how-to-measure-rooms-for-flooring',
    ],
    sections: [
      {
        heading: 'The formula',
        paragraphs: [
          'Boxes needed = (total sq ft × (1 + waste%)) ÷ sq ft per box, rounded up.',
          'Example: 200 sq ft room, 10% waste, 22 sq ft per box → 220 ÷ 22 = 10 boxes exactly. At 205 sq ft with same box size you still need 11 boxes after rounding.',
        ],
      },
      {
        heading: 'Where to find sq ft per box',
        bullets: [
          'Printed on the carton front — "Coverage: 20.06 sq ft"',
          'Retailer listing under specifications',
          'Tile: pieces per box × (tile length × width ÷ 144)',
          'Never assume — box sizes vary even within the same brand line',
        ],
        paragraphs: [],
      },
      {
        heading: 'Store pickup checklist',
        bullets: [
          'Screenshot the SKU and sq ft per box from the product page',
          'Confirm batch/lot color if buying over multiple weeks',
          'Add one box for attic storage — match dye lot on receipt',
          'Buy underlay and transitions in same trip when possible',
        ],
        paragraphs: [
          'Combine rooms in the [box count calculator](/how-many-flooring-boxes) only when every room uses the identical product code.',
        ],
      },
    ],
    faqs: [
      {
        question: 'Multiple rooms — one box count or separate?',
        answer:
          'You can combine rooms if the product SKU is identical. One total area with waste, one box count — easier for store pickup.',
      },
    ],
  },
  {
    slug: 'laminate-vs-tile-vs-carpet-comparison',
    category: 'planning',
    title: 'Laminate vs Tile vs Carpet — Which Flooring for Which Room?',
    description:
      'Compare durability, moisture, comfort, cost, and DIY difficulty by room type — kitchen, bath, basement, bedroom.',
    readMinutes: 9,
    toolPath: '/laminate-flooring-calculator',
    toolLabel: 'Laminate calculator',
    relatedGuideSlugs: [
      'how-to-choose-laminate-flooring',
      'how-to-choose-floor-tile',
      'how-to-choose-carpet-for-rooms',
    ],
    sections: [
      {
        heading: 'Quick comparison',
        bullets: [
          'Laminate/LVP: good DIY, moderate cost, avoid standing water; LVP better in kitchens than laminate',
          'Tile: best moisture and durability, harder install, cold underfoot without heat',
          'Carpet: warm and quiet, poor in wet areas, professional stretch recommended',
        ],
        paragraphs: [],
      },
      {
        heading: 'Room-by-room picks',
        bullets: [
          'Bedrooms / living: laminate, LVP, carpet, or tile — preference driven',
          'Kitchen: porcelain tile or waterproof LVP; not standard laminate near dishwasher',
          'Bathroom: tile or dedicated waterproof LVP rated for wet areas',
          'Basement: tile or LVP with moisture-rated underlay; test concrete moisture first',
          'Stairs: carpet common; laminate with stair nose or hardwood',
        ],
        paragraphs: [],
      },
      {
        heading: 'Budget planning per square foot',
        paragraphs: [
          'Material-only rough ranges (installed varies by region): carpet often lowest per sq ft, laminate/LVP mid-tier, porcelain tile higher for product + mortar + labor. Measure total sq ft first, then compare line-item quotes per category using our [square footage calculator](/flooring-square-footage-calculator).',
        ],
      },
    ],
    faqs: [
      {
        question: 'Is laminate OK in a kitchen?',
        answer:
          'Traditional laminate swells at seams if water sits. Waterproof laminate and LVP exist — buy a product rated for kitchens and wipe spills quickly.',
      },
    ],
  },

  // ── Laminate & vinyl ───────────────────────────────────────────
  {
    slug: 'do-i-need-underlay-for-laminate',
    category: 'laminate',
    title: 'Do I Need Underlayment for Laminate Flooring?',
    description:
      'When underlay is required, foam vs felt vs cork, vapor barriers on concrete, and attached-pad laminate exceptions.',
    readMinutes: 9,
    toolPath: '/laminate-flooring-calculator',
    toolLabel: 'Laminate calculator',
    relatedGuideSlugs: [
      'how-to-prep-subfloor-before-installing-flooring',
      'how-to-install-laminate-flooring-beginners',
      'laminate-vs-vinyl-plank-which-to-buy',
    ],
    sections: [
      {
        heading: 'Short answer: almost always yes',
        paragraphs: [
          'Underlayment goes between subfloor and floating laminate. It cushions, reduces noise, smooths minor subfloor texture, and often provides the required vapor barrier on concrete.',
          'Skipping underlay voids many warranties and makes floors loud and hollow-sounding.',
        ],
      },
      {
        heading: 'Types of underlay',
        bullets: [
          'Foam (basic): 2–3 mm, budget rooms, smooth plywood subfloor',
          'Foam + vapor barrier (combo roll): required on concrete slabs in most regions',
          'Felt / fiber: denser, better sound — good for condos and second floors',
          'Cork: natural sound dampening, moderate moisture resistance',
          'Attached pad on plank: some laminates include factory pad — no second layer unless spec allows',
        ],
        paragraphs: [
          'Never stack two soft underlays unless the manufacturer explicitly permits it — too much flex breaks click locks.',
        ],
      },
      {
        heading: 'Concrete vs wood subfloor',
        paragraphs: [
          'On concrete: use underlay with built-in 6 mil vapor barrier or separate poly sheet per local code. Test slab moisture first.',
          'On plywood: standard foam or felt; vapor barrier usually not needed unless over crawl space with humidity.',
        ],
      },
      {
        heading: 'Roll coverage math',
        paragraphs: [
          'Underlay rolls list sq ft coverage — usually 100–200 sq ft. Total room sq ft + 10% overlap at seams, round up one roll. Example: 450 sq ft project with 100 sq ft rolls → buy 5 rolls. Underlay is not included in [box count](/guides/how-many-flooring-boxes-guide) — budget separately.',
        ],
      },
    ],
    faqs: [
      {
        question: 'Can I use carpet pad under laminate?',
        answer:
          'No. Carpet pad is too soft — boards flex and joints break. Use only underlayment rated for laminate or LVP.',
      },
      {
        question: 'How much underlay do I buy?',
        answer:
          'Same square footage as your room total plus 10% overlap at seams. Underlay is sold in rolls — round up one roll rather than coming up short.',
      },
    ],
  },
  {
    slug: 'how-to-install-laminate-flooring-beginners',
    category: 'laminate',
    title: 'How to Install Laminate Flooring — Step-by-Step for Beginners',
    description:
      'Underlay, first row, spacing, cutting, and finishing at doorways. Floating floor basics without glue.',
    readMinutes: 11,
    toolPath: '/laminate-flooring-calculator',
    toolLabel: 'Laminate calculator',
    relatedGuideSlugs: [
      'laminate-flooring-tools-you-need',
      'first-row-laminate-flooring-layout',
      'stagger-pattern-laminate-planks',
      'install-flooring-around-door-jambs',
    ],
    sections: [
      {
        heading: 'Tools',
        bullets: [
          'Pull bar, tapping block, mallet (laminate install kit)',
          'Table saw or jigsaw for crosscuts and notches',
          'Spacers for expansion gap',
          'Pencil, tape measure, utility knife for underlay',
        ],
        paragraphs: [],
      },
      {
        heading: 'Install sequence',
        bullets: [
          '1. Acclimate flooring; prep subfloor',
          '2. Roll underlay perpendicular to plank direction; tape seams',
          '3. Start first row along longest wall or most visible wall — tongue toward wall with spacers',
          '4. Stagger end joints at least 12 inches between rows — randomize for natural look',
          '5. Click each plank: angle tongue, drop, tap seam closed',
          '6. Last row: rip width if needed; pull bar engages tight against wall',
          '7. Install transitions; reinstall baseboard or quarter round — nail to wall, not floor',
        ],
        paragraphs: [],
      },
      {
        heading: 'Cutting tips',
        paragraphs: [
          'Measure twice at door jambs — undercut jambs with a handsaw on a scrap plank so flooring slides under for a clean finish.',
          'Keep factory cut edge at the wall when possible; cut edges face the wall hidden by trim.',
        ],
      },
      {
        heading: 'Beginner mistakes to avoid',
        bullets: [
          'Forgetting expansion gap — floor buckles in summer',
          'Stagger joints too short — weak rows, looks busy',
          'Nailing baseboard into floating floor — locks planks',
          'Skipping underlay seam tape on concrete',
          'Starting crooked — first row sets the whole room',
        ],
        paragraphs: [
          'Order 10% extra via the [laminate calculator](/laminate-flooring-calculator) before your first miscut stops the job.',
        ],
      },
    ],
    faqs: [
      {
        question: 'Which direction should planks run?',
        answer:
          'Parallel to the main light source or longest wall is typical. Run toward sliding doors for fewer end cuts, or match adjacent rooms for continuity.',
      },
    ],
  },
  {
    slug: 'how-to-choose-laminate-flooring',
    category: 'laminate',
    title: 'How to Choose Laminate Flooring — AC Rating, Thickness & Waterproof',
    description:
      'Pick the right laminate for traffic, pets, and moisture. AC ratings, mm thickness, and when to choose LVP instead.',
    readMinutes: 9,
    sections: [
      {
        heading: 'AC wear rating',
        bullets: [
          'AC3: light residential — bedrooms',
          'AC4: general residential — living, dining, hallways',
          'AC5: heavy residential / light commercial',
          'Higher AC = harder wear layer — better for dogs and kids',
        ],
        paragraphs: [],
      },
      {
        heading: 'Thickness and underfoot feel',
        paragraphs: [
          '7–8 mm: budget, needs flat subfloor. 10–12 mm: quieter, more forgiving of minor dips. Thickness does not equal durability — wear layer AC rating matters more.',
        ],
      },
      {
        heading: 'Water resistance',
        bullets: [
          'Standard laminate: wipe spills quickly',
          'Water-resistant core: waxed edges, short exposure OK',
          'Waterproof laminate / LVP: for kitchens and mudrooms — read warranty limits',
        ],
        paragraphs: [],
      },
      {
        heading: 'Retail label checklist',
        bullets: [
          'AC rating matches room traffic (AC4+ for hallways)',
          'Waterproof claim — read warranty exclusions',
          'Box coverage sq ft — enter in calculator, not guess',
          'Attached pad? — skip double underlay unless approved',
          'Batch/lot number — buy all boxes same run',
        ],
        paragraphs: [],
      },
    ],
    faqs: [
      {
        question: 'Matte vs glossy laminate?',
        answer:
          'Matte and hand-scraped textures hide scratches and dust. High gloss shows every footprint and micro-scratch — less popular now.',
      },
    ],
  },
  {
    slug: 'laminate-vs-vinyl-plank-which-to-buy',
    category: 'laminate',
    title: 'Laminate vs Vinyl Plank (LVP) — Which Should You Buy?',
    description:
      'Compare waterproofing, install method, feel, price, and resale for laminate versus luxury vinyl plank.',
    readMinutes: 9,
    relatedGuideSlugs: ['how-to-choose-laminate-flooring', 'do-i-need-underlay-for-laminate'],
    sections: [
      {
        heading: 'Key differences',
        bullets: [
          'Laminate: wood fiber core — swells with prolonged water; often cheaper at entry level',
          'LVP: plastic core (WPC/SPC) — waterproof; softer underfoot; glue-down or click',
          'Both float over underlay except glue-down LVP',
          'LVP tolerates basements and kitchens better',
        ],
        paragraphs: [],
      },
      {
        heading: 'When laminate still wins',
        paragraphs: [
          'Dry rooms where you prefer a more rigid feel underfoot and sharper click-lock. Premium laminate with AC5 can outwear budget LVP. Compare specific products, not categories alone.',
        ],
      },
      {
        heading: 'Room-by-room decision tree',
        bullets: [
          'Basement / slab: waterproof LVP with vapor-rated underlay',
          'Kitchen / mudroom: LVP or waterproof laminate — not standard laminate',
          'Bedrooms (dry): laminate or LVP — preference and budget',
          'Whole-house one SKU: LVP simplifies wet-adjacent zones',
        ],
        paragraphs: [
          'Run both material paths in the [vinyl plank calculator](/vinyl-plank-calculator) and [laminate calculator](/laminate-flooring-calculator) with the same room list to compare box counts.',
        ],
      },
    ],
    faqs: [
      {
        question: 'Can I mix laminate and LVP in one house?',
        answer:
          'Yes, with transitions at doorways. Match height and color family for a cohesive look — use reducers if thickness differs.',
      },
    ],
  },

  // ── Tile ───────────────────────────────────────────────────────
  {
    slug: 'tile-underlayment-membrane-guide',
    category: 'tile',
    title: 'Tile Underlayment & Membrane — Backer Board, DITRA & More',
    description:
      'Cement board, fiber cement, uncoupling membrane, and when you need them over plywood or concrete.',
    readMinutes: 9,
    sections: [
      {
        heading: 'Why tile needs proper underlayment',
        paragraphs: [
          'Tile is rigid — subfloor movement causes cracked grout and loose tile. Backer board stiffens wood subfloors. Uncoupling membranes absorb minor horizontal movement and waterproof in wet areas.',
        ],
      },
      {
        heading: 'Common products',
        bullets: [
          'Cement backer board (1/4 or 1/2 inch): screw to subfloor, tape seams, thinset under board',
          'Fiber-cement / foam boards: lighter alternatives — follow manufacturer mortar',
          'Uncoupling membrane (e.g. DITRA): mortar to subfloor, tile to membrane — great on plywood',
          'Waterproof membrane: shower floors and wet rooms — liquid or sheet',
        ],
        paragraphs: [],
      },
      {
        heading: 'Concrete slab installs',
        paragraphs: [
          'Direct bond possible with proper primer and thinset if slab is flat and cured. Crack isolation membrane over control joints prevents cracks telegraphing through tile.',
        ],
      },
      {
        heading: 'Wet-area requirements',
        bullets: [
          'Shower floors: waterproof membrane + slope to drain — not beginner DIY',
          'Bathroom dry areas: uncoupling membrane optional but popular on plywood',
          'Kitchen: backer board minimum; membrane at dishwasher peninsula optional',
          'Always flood-test showers before tile if membrane is liquid-applied',
        ],
        paragraphs: [
          'Pair substrate choice with [tile prep steps](/guides/how-to-prep-for-tile-floor) before ordering tile boxes.',
        ],
      },
    ],
    faqs: [
      {
        question: 'Can I tile directly on plywood?',
        answer:
          'Not recommended for long-term durability. Use backer board or uncoupling membrane per TCNA guidelines — one layer of structurally sound plywood minimum.',
      },
    ],
  },
  {
    slug: 'how-to-prep-for-tile-floor',
    category: 'tile',
    title: 'How to Prep for a Tile Floor Installation',
    description:
      'Flatness, layout lines, thinset choice, and dry-fitting before you mix mortar.',
    readMinutes: 10,
    relatedGuideSlugs: ['tile-underlayment-membrane-guide', 'large-format-tile-tips'],
    sections: [
      {
        heading: 'Prep checklist',
        bullets: [
          'Install backer board or membrane; flatness within 1/8 inch per 10 ft for large tile',
          'Snap chalk lines from room center — balance cut tiles at walls',
          'Dry-lay a row without mortar to preview cuts',
          'Have correct thinset (modified vs unmodified) for substrate and tile type',
          'Mix thinset to peanut butter consistency — slake 10 minutes, remix',
        ],
        paragraphs: [],
      },
      {
        heading: 'Layout strategy',
        paragraphs: [
          'Centered grid looks formal; start from main entry for fewer small cuts in the sightline. Hide narrow cut tiles under cabinets if kitchen tile stops at toe kick.',
        ],
      },
      {
        heading: 'Thinset and trowel quick reference',
        bullets: [
          'Modified thinset: plywood, backer board, most porcelain',
          'Unmodified: some membranes and absorbent substrates — read tile spec',
          '1/4 × 1/4 notch: many 12×12 and smaller floor tile',
          '1/2 × 1/2 notch: large format 12×24 and bigger',
          'Back-butter large tile — full coverage on back, no voids',
        ],
        paragraphs: [],
      },
    ],
    faqs: [
      {
        question: 'How long before I can walk on new tile?',
        answer:
          'Light foot traffic often 24 hours; grout after thinset cures per bag — usually 24–48 hours. Wait 72 hours before heavy loads.',
      },
    ],
  },
  {
    slug: 'how-to-choose-floor-tile',
    category: 'tile',
    title: 'How to Choose Floor Tile — Porcelain vs Ceramic, PEI & Slip',
    description:
      'Pick tile that survives foot traffic, pets, and wet feet. PEI ratings, COF slip resistance, and size trends.',
    readMinutes: 9,
    toolPath: '/how-many-tiles-do-i-need',
    toolLabel: 'Tile quantity calculator',
    sections: [
      {
        heading: 'Porcelain vs ceramic',
        bullets: [
          'Porcelain: denser, lower water absorption — best for floors and outdoors',
          'Ceramic: fine for light residential floors; verify floor-rated',
          'Glazed porcelain: easy clean; through-body hides chips better on unglazed edge',
        ],
        paragraphs: [],
      },
      {
        heading: 'PEI wear rating (glazed tile)',
        bullets: [
          'PEI 3: residential floor, light traffic',
          'PEI 4: general residential including kitchen',
          'PEI 5: heavy traffic commercial — overkill at home but durable',
        ],
        paragraphs: [],
      },
      {
        heading: 'Slip and size',
        paragraphs: [
          'Bath and entry: look for DCOF ≥ 0.42 wet or textured surface. Large format (12×24, 24×24) means fewer grout lines but demands flatter subfloor and more waste.',
        ],
      },
      {
        heading: 'Kitchen vs bathroom tile picks',
        bullets: [
          'Bathroom floor: textured porcelain, PEI 4+, smaller formats for slope areas',
          'Kitchen: PEI 4 porcelain; large format OK if subfloor flat',
          'Shower wall tile ≠ shower floor tile — floor needs slip rating',
          'Natural stone: seal regularly; higher maintenance than porcelain',
        ],
        paragraphs: [
          'Enter tile dimensions in the [tile calculator](/tile-flooring-calculator) with 15–20% waste for diagonal or large-format layouts.',
        ],
      },
    ],
    faqs: [
      {
        question: 'Can wall tile go on the floor?',
        answer:
          'No — wall tile is thinner and lower PEI. It cracks under foot load. Use floor-rated tile only.',
      },
    ],
  },
  {
    slug: 'large-format-tile-tips',
    category: 'tile',
    title: 'Large Format Tile — Install Tips & Extra Waste',
    description:
      '12×24 and bigger tile needs flat floors, leveling clips, and 15–20% waste. What DIYers should know.',
    readMinutes: 8,
    sections: [
      {
        heading: 'Why large tile is different',
        bullets: [
          'One broken 24×24 tile = many square feet lost — buy extra',
          'Lippage risk without leveling clips and very flat substrate',
          'Heavier sheets — consider hiring for overhead or heavy porcelain',
          'Use large-format thinset and 1/2 inch notched trowel (follow tile size chart)',
        ],
        paragraphs: [],
      },
      {
        heading: 'Waste factor',
        paragraphs: [
          'Set waste to 18–20% in the calculator for large format or diagonal layouts. Keep two spare tiles stored flat after install.',
        ],
      },
      {
        heading: 'Leveling clip systems',
        paragraphs: [
          'Clips and wedges hold tile edges flush while mortar sets — essential for 12×24+ on walls and floors. Budget clips per tile perimeter. Remove clips after 24 hours before grouting. Flat substrate still required — clips do not fix wavy subfloor.',
        ],
      },
    ],
    faqs: [
      {
        question: 'Do I need a wet saw?',
        answer:
          'Large porcelain almost always needs a wet saw for straight cuts. Rent one for the weekend — score-and-snap fails on thick porcelain.',
      },
    ],
  },

  // ── Carpet ─────────────────────────────────────────────────────
  {
    slug: 'carpet-pad-guide',
    category: 'carpet',
    title: 'Carpet Pad Guide — Do You Need Pad & Which Type?',
    description:
      'Foam, rubber, and fiber pad. Thickness limits, moisture barriers, and ordering the same sq yd as carpet.',
    readMinutes: 9,
    sections: [
      {
        heading: 'Why pad matters',
        paragraphs: [
          'Pad cushions foot traffic, extends carpet life, and improves insulation. Carpet without pad wears fast and feels thin. Order pad in the same square yards as carpet (with the same waste allowance).',
        ],
      },
      {
        heading: 'Pad types',
        bullets: [
          'Rebond (recycled foam): most common residential — 6–8 lb density for living areas',
          'Memory foam / frothed foam: premium feel — match carpet manufacturer max thickness',
          'Rubber: dense, durable — good on stairs and high traffic',
          'Moisture barrier pad: basements or slab-on-grade — not a substitute for fixing leaks',
        ],
        paragraphs: [],
      },
      {
        heading: 'Thickness rules',
        paragraphs: [
          'Too thick pad on stairs or with some carpets causes wrinkling. Many carpets specify max 7/16 inch pad. Check carpet warranty before buying thick plush pad.',
        ],
      },
      {
        heading: 'Square yard ordering example',
        paragraphs: [
          'Room 12×15 ft = 180 sq ft ÷ 9 = 20 sq yd carpet. With 10% waste → 22 sq yd. Order pad to match 22 sq yd — pad and carpet are sold separately but same area. Use the [carpet calculator](/carpet-calculator) to convert feet to yards automatically.',
        ],
      },
    ],
    faqs: [
      {
        question: 'Can I reuse old carpet pad?',
        answer:
          'No for a quality install. Old pad is compressed and contaminated. New carpet on old pad wrinkles and fails warranty.',
      },
    ],
  },
  {
    slug: 'how-to-choose-carpet-for-rooms',
    category: 'carpet',
    title: 'How to Choose Carpet for Bedrooms, Stairs & Living Areas',
    description:
      'Fiber types (nylon, polyester, wool), pile cut vs loop, and durability by room.',
    readMinutes: 9,
    toolPath: '/carpet-calculator',
    toolLabel: 'Carpet calculator',
    sections: [
      {
        heading: 'Fiber comparison',
        bullets: [
          'Nylon: most durable synthetic — stairs, hallways, rentals',
          'Polyester: soft, colorfast, budget-friendly — moderate traffic',
          'Triexta (SmartStrand): stain resistance, good for kids and pets',
          'Wool: premium, natural — professional clean only',
        ],
        paragraphs: [],
      },
      {
        heading: 'Pile style',
        bullets: [
          'Cut pile (Saxony, textured): classic soft carpet — shows vacuum marks',
          'Loop (Berber): durable, casual — snags on pets claws',
          'Pattern cut-loop: hides wear — good living rooms',
        ],
        paragraphs: [],
      },
      {
        heading: 'Room tips',
        paragraphs: [
          'Stairs: low profile, dense pad, professional stretch install. Bedrooms: softer pile OK. Basement: synthetic only, moisture pad if needed — avoid carpet if water history.',
        ],
      },
      {
        heading: 'Traffic rating by room',
        bullets: [
          'Hallways / stairs: dense nylon, lower pile, 8 lb pad',
          'Living room: textured cut pile or pattern — hides footprints',
          'Bedrooms: plush OK — moderate traffic',
          'Home office: chair mat on rollers — carpet crushes without one',
          'Rentals: solution-dyed nylon — stain and fade resistant',
        ],
        paragraphs: [
          'Measure in feet, order in square yards — the [carpet calculator](/carpet-calculator) handles conversion and waste. See [pad guide](/guides/carpet-pad-guide) before checkout.',
        ],
      },
    ],
    faqs: [
      {
        question: 'Patterned carpet and waste',
        answer:
          'Pattern match needs extra material — add 15% or more waste in the calculator and confirm roll width with the store.',
      },
    ],
  },
  {
    slug: 'diy-flooring-installation-roadmap',
    category: 'planning',
    title: 'DIY Flooring Installation Roadmap — Room Redo Start to Finish',
    description:
      'Complete DIY flooring project map: choose material, measure boxes, remove old floor, prep subfloor, acclimate, underlay, install, and trim. Links every phase to free calculators and how-to guides.',
    readMinutes: 12,
    toolPath: '/how-many-flooring-boxes',
    toolLabel: 'Flooring boxes calculator',
    relatedGuideSlugs: [
      'laminate-vs-tile-vs-carpet-comparison',
      'how-to-measure-rooms-for-flooring',
      'laminate-flooring-tools-you-need',
      'how-to-install-laminate-flooring-beginners',
    ],
    sections: [
      {
        heading: 'Why flooring projects stall mid-room',
        paragraphs: [
          'DIY floors fail less from bad clicking technique and more from skipped planning: wrong box count, wavy first row, no expansion gap, or door jambs that were never undercut. This roadmap is your project checklist — each phase links deeper, and the [how many flooring boxes](/how-many-flooring-boxes) calculator keeps you from running out on the last row.',
          'Jump to the phase that matches where you are. Laminate and vinyl plank share most install steps; tile and carpet branch off after subfloor prep.',
        ],
      },
      {
        heading: 'The 8-phase DIY flooring flow',
        bullets: [
          'Phase 1 — Choose material: laminate vs vinyl vs tile vs carpet',
          'Phase 2 — Measure and order: square feet, waste %, boxes or yards',
          'Phase 3 — Decide DIY vs pro: stairs, tile wet areas, uneven slabs',
          'Phase 4 — Demo: remove old flooring and fasteners',
          'Phase 5 — Prep: flatten subfloor, moisture check, underlay or membrane',
          'Phase 6 — Acclimate floating floors; gather tools',
          'Phase 7 — Install: first row, stagger, door jambs, last row',
          'Phase 8 — Finish: transitions, baseboard or quarter round',
        ],
        paragraphs: [
          'Phases 6–7 are where DIYers search mid-project. Deep dives: [tools list](/guides/laminate-flooring-tools-you-need), [first row layout](/guides/first-row-laminate-flooring-layout), [stagger pattern](/guides/stagger-pattern-laminate-planks), [door jambs](/guides/install-flooring-around-door-jambs).',
        ],
      },
      {
        heading: 'Phase-by-phase deep links',
        bullets: [
          'Choose: [Laminate vs tile vs carpet](/guides/laminate-vs-tile-vs-carpet-comparison) · [Laminate vs vinyl](/guides/laminate-vs-vinyl-plank-which-to-buy) · [Choose laminate](/guides/how-to-choose-laminate-flooring)',
          'Measure: [Measure rooms](/guides/how-to-measure-rooms-for-flooring) · [Waste %](/guides/how-much-flooring-waste-to-buy) · [Boxes guide](/guides/how-many-flooring-boxes-guide)',
          'DIY decision: [When not to DIY flooring](/guides/when-not-to-diy-flooring)',
          'Demo / prep: [Remove old flooring](/guides/how-to-remove-old-flooring) · [Prep subfloor](/guides/how-to-prep-subfloor-before-installing-flooring)',
          'Underlay: [Underlay for laminate](/guides/do-i-need-underlay-for-laminate) · [Acclimation](/guides/flooring-acclimation-before-install)',
          'Install: [Laminate install beginners](/guides/how-to-install-laminate-flooring-beginners) · [Tools](/guides/laminate-flooring-tools-you-need) · [First row](/guides/first-row-laminate-flooring-layout)',
          'Detail: [Stagger pattern](/guides/stagger-pattern-laminate-planks) · [Door jambs](/guides/install-flooring-around-door-jambs) · [Transitions](/guides/flooring-transition-strips-and-trim)',
          'Tile branch: [Choose tile](/guides/how-to-choose-floor-tile) · [Prep for tile](/guides/how-to-prep-for-tile-floor) · [Tile calculator](/tile-flooring-calculator)',
          'Carpet branch: [Choose carpet](/guides/how-to-choose-carpet-for-rooms) · [Carpet pad](/guides/carpet-pad-guide) · [Carpet calculator](/carpet-calculator)',
        ],
        paragraphs: [
          'Material-specific calculators: [laminate](/laminate-flooring-calculator), [vinyl plank](/vinyl-plank-calculator), [tile](/tile-flooring-calculator), [carpet](/carpet-calculator).',
        ],
      },
      {
        heading: 'One-weekend floating floor plan',
        paragraphs: [
          'Thursday: measure, order boxes with waste, buy underlay and install kit. Friday: remove old floor and baseboard, patch subfloor, start acclimation. Saturday: underlay and first half of room. Sunday: finish rows, undercut door jambs, transitions, reinstall trim.',
          'Cold or humid rooms need longer acclimation — see [flooring acclimation before install](/guides/flooring-acclimation-before-install) before you open cartons on install day.',
        ],
      },
    ],
    faqs: [
      {
        question: 'What is the correct order for a DIY flooring project?',
        answer:
          'Choose product, measure and order, remove old flooring, prep and flatten the subfloor, acclimate (floating floors), install underlay, lay flooring with expansion gaps, then transitions and trim. Never nail trim into a floating floor.',
      },
      {
        question: 'How much waste should I buy?',
        answer:
          'Most rooms need about 10% extra. Complex layouts, diagonals, and pattern-match tile or carpet need 15% or more. Use our waste and boxes calculators before checkout.',
      },
      {
        question: 'Is laminate or vinyl easier for beginners?',
        answer:
          'Both click-lock floating floors are DIY-friendly. Waterproof vinyl (LVP) handles spills better in kitchens and baths. Compare options in our laminate vs vinyl guide, then size boxes with the matching calculator.',
      },
    ],
  },
  {
    slug: 'laminate-flooring-tools-you-need',
    category: 'laminate',
    title: 'Laminate Flooring Tools You Need — DIY Install Kit Checklist',
    description:
      'Must-have tools for installing laminate or vinyl plank: pull bar, tapping block, spacers, saws, and underlay supplies. What to buy, rent, or skip.',
    readMinutes: 9,
    toolPath: '/laminate-flooring-calculator',
    toolLabel: 'Laminate calculator',
    relatedGuideSlugs: [
      'how-to-install-laminate-flooring-beginners',
      'first-row-laminate-flooring-layout',
      'install-flooring-around-door-jambs',
      'diy-flooring-installation-roadmap',
    ],
    sections: [
      {
        heading: 'Buy the kit once — finish the room',
        paragraphs: [
          'A cheap foam block and missing pull bar turn the last row into a fight. Spend on a proper floating-floor kit and one decent saw; it costs less than an extra box of planks wasted on bad cuts. Calculate boxes first with the [laminate calculator](/laminate-flooring-calculator).',
        ],
      },
      {
        heading: 'Must-have install tools',
        bullets: [
          'Pull bar + tapping block + rubber mallet (laminate / LVP install kit)',
          'Spacers (or scrap blocks) for 1/4–3/8 inch expansion gap at walls',
          'Tape measure, pencil, speed square',
          'Utility knife and straightedge for underlay and scoring vinyl',
          'Jigsaw or circular / table saw for crosscuts and rip cuts',
          'Handsawn for undercutting door jambs (or oscillating multi-tool)',
          'Knee pads, safety glasses, dust mask for cutting',
        ],
        paragraphs: [
          'Optional: moisture meter for concrete, floor scraper for demo, crowbar for baseboard, shop vac for dust under underlay.',
        ],
      },
      {
        heading: 'Saws — what beginners actually use',
        bullets: [
          'Jigsaw: notches around vents and door casings; slower crosscuts',
          'Circular saw or miter saw: fast square crosscuts on a workbench',
          'Table saw: clean rip cuts for the last row width',
          'Guillotine / laminate cutter: quiet crosscuts for LVP; check thickness rating',
        ],
        paragraphs: [
          'Cut outdoors or in a garage when possible — laminate dust is fine and sticky. Support the plank fully so the locking edge does not chip.',
        ],
      },
      {
        heading: 'What you do not need',
        bullets: [
          'Glue for most click-lock floating floors (unless the manufacturer requires it)',
          'Carpet pad or foam not rated for laminate / LVP',
          'Nails through the floating floor into the subfloor',
          'Cheap plastic spacers that crush — wood scraps work better',
        ],
        paragraphs: [
          'Next: [first row layout](/guides/first-row-laminate-flooring-layout), then full [install steps](/guides/how-to-install-laminate-flooring-beginners). Undercut jambs with tips in [flooring around door jambs](/guides/install-flooring-around-door-jambs).',
        ],
      },
    ],
    faqs: [
      {
        question: 'Can I install laminate with only a utility knife?',
        answer:
          'Some thin LVP scores and snaps; most laminate needs a saw for clean cuts. Plan on at least a jigsaw or circular saw for doorways and the last row.',
      },
      {
        question: 'Is a tapping block required?',
        answer:
          'Yes for most click systems. Hitting the locking edge with a hammer alone damages the joint. Use the block between the mallet and the plank.',
      },
      {
        question: 'Do I need a moisture meter?',
        answer:
          'Smart on concrete slabs and below-grade rooms. Excess moisture voids many warranties. Pair with the right underlay — see our underlay guide.',
      },
    ],
  },
  {
    slug: 'first-row-laminate-flooring-layout',
    category: 'laminate',
    title: 'First Row Laminate Flooring Layout — Straight Start Guide',
    description:
      'How to start laminate or vinyl plank: which wall, tongue direction, expansion spacers, and checking square so the whole room stays straight.',
    readMinutes: 9,
    toolPath: '/laminate-flooring-calculator',
    toolLabel: 'Laminate calculator',
    relatedGuideSlugs: [
      'stagger-pattern-laminate-planks',
      'how-to-install-laminate-flooring-beginners',
      'laminate-flooring-tools-you-need',
      'do-i-need-underlay-for-laminate',
    ],
    sections: [
      {
        heading: 'The first row sets every row after it',
        paragraphs: [
          'A crooked first row shows up as tapered gaps at the far wall and broken locks mid-room. Take twenty extra minutes here — chalk line, spacers, and a dry fit — before you commit the second row.',
          'Underlay should already be down and taped. Confirm expansion gap size on your carton (often 1/4–3/8 inch / 6–10 mm).',
        ],
      },
      {
        heading: 'Which wall to start against',
        bullets: [
          'Longest wall or the wall most visible from the main doorway',
          'Run planks parallel to the main light from windows when possible',
          'Match plank direction to adjacent rooms for continuous flow',
          'Avoid starting on the most out-of-square wall without a chalk line',
        ],
        paragraphs: [
          'If walls are out of square, snap a chalk line parallel to the starting wall and align the first row to the line — not the drywall. Trim the last row later to absorb the error.',
        ],
      },
      {
        heading: 'Tongue, groove, and spacers',
        bullets: [
          'Manufacturer diagrams win — usually tongue faces the wall or groove faces the room',
          'Place spacers every 2–3 feet along the starting wall and at ends',
          'Dry-fit 3–4 planks; check the face edge with a straightedge or laser',
          'Cut the last plank of row 1 to leave the expansion gap at the end wall',
          'Save the cut-off if it is longer than the minimum stagger for row 2',
        ],
        paragraphs: [
          'Pull the first row tight as you go — a loose start multiplies. Use the tapping block lightly on the groove side per the install sheet.',
        ],
      },
      {
        heading: 'Before you start row two',
        paragraphs: [
          'Measure from the first-row face to the opposite wall in a few places. If the last row would be under ~2–3 inches wide, rip a few inches off the first row so the last row stays a workable width.',
          'Next: [stagger pattern for laminate planks](/guides/stagger-pattern-laminate-planks), then keep going with the [beginner install guide](/guides/how-to-install-laminate-flooring-beginners). Still short on material? Recheck the [laminate calculator](/laminate-flooring-calculator).',
        ],
      },
    ],
    faqs: [
      {
        question: 'Should the tongue face the wall?',
        answer:
          'Follow your product diagram. Many systems place the tongue toward the wall so you can angle the next row into the groove facing the room. Mixing this up makes locking painful.',
      },
      {
        question: 'Can I start in the middle of the room?',
        answer:
          'Some pros do for very large spaces, but beginners should start at a wall with a straight chalk line. Mid-room starts need two working directions and more experience.',
      },
      {
        question: 'What if the starting wall bows?',
        answer:
          'Use a chalk line for a straight first edge. You may need to scribe or rip the first row to follow a bowed wall while keeping the room-facing edge straight.',
      },
    ],
  },
  {
    slug: 'stagger-pattern-laminate-planks',
    category: 'laminate',
    title: 'Stagger Pattern for Laminate Planks — Joint Rules That Hold',
    description:
      'How to stagger laminate and vinyl plank end joints: minimum offset, H-pattern to avoid, random look tips, and why short staggers fail.',
    readMinutes: 8,
    toolPath: '/laminate-flooring-calculator',
    toolLabel: 'Laminate calculator',
    relatedGuideSlugs: [
      'first-row-laminate-flooring-layout',
      'how-to-install-laminate-flooring-beginners',
      'how-much-flooring-waste-to-buy',
      'diy-flooring-installation-roadmap',
    ],
    sections: [
      {
        heading: 'Why stagger matters',
        paragraphs: [
          'End joints stacked in a ladder or H pattern look cheap and create weak rows that telegraph movement. A proper stagger spreads stress across the floor and reads like real wood.',
          'Most makers require at least 6–12 inches (150–300 mm) between end joints on adjacent rows — check your carton. When in doubt, use 12 inches minimum.',
        ],
      },
      {
        heading: 'Simple stagger method for DIYers',
        bullets: [
          'Start row 1 with a full plank',
          'Start row 2 with a plank cut to about 1/3 or 1/2 length (keep offcut ≥ minimum stagger)',
          'Start row 3 with a different length than row 2 — avoid repeating every other row',
          'Never let end joints line up on neighboring rows',
          'Avoid H joints: end joints that form a column across three rows',
        ],
        paragraphs: [
          'Randomize cut lengths as you go. Pull from multiple cartons if dye lots vary slightly — mix boxes for color blend as you stagger.',
        ],
      },
      {
        heading: 'Using offcuts without wasting boxes',
        paragraphs: [
          'The leftover from the end of a row often starts the next row if it meets the minimum length. Too short? Cut a fresh starter and save the scrap for closet cuts or under-appliance fill.',
          'Heavy waste from bad stagger planning is why we recommend ~10% extra in the [waste guide](/guides/how-much-flooring-waste-to-buy) and [boxes calculator](/how-many-flooring-boxes).',
        ],
      },
      {
        heading: 'Visual checks every few rows',
        bullets: [
          'Step back — do end joints form a stair-step or a brick pattern? Adjust',
          'Photo the floor from the doorway; patterns jump out on camera',
          'Keep expansion spacers in until trim goes on',
        ],
        paragraphs: [
          'Continue with [door jamb undercuts](/guides/install-flooring-around-door-jambs) when you reach openings. Full sequence: [install laminate for beginners](/guides/how-to-install-laminate-flooring-beginners).',
        ],
      },
    ],
    faqs: [
      {
        question: 'What is the minimum stagger for laminate?',
        answer:
          'Follow the manufacturer — commonly 6 to 12 inches. Using less can void the warranty and weaken the floor. Twelve inches is a safe DIY default when the sheet is unclear.',
      },
      {
        question: 'Should I use a repeating brick pattern?',
        answer:
          'A strict half-brick repeat can look artificial. Slightly random offsets (still above the minimum) look more like hardwood and hide manufacturing length variation.',
      },
      {
        question: 'Do vinyl planks use the same stagger rules?',
        answer:
          'Yes for click-lock LVP/LVT. Some products specify larger minimums — read the insert. Waterproof vinyl still needs expansion gaps and proper stagger.',
      },
    ],
  },
  {
    slug: 'install-flooring-around-door-jambs',
    category: 'prep',
    title: 'How to Install Flooring Around Door Jambs — Undercut Guide',
    description:
      'Undercut door casings so laminate or vinyl slides under for a clean finish. Tool setup, scrap-plank height trick, and transitions at doorways.',
    readMinutes: 9,
    toolPath: '/how-many-flooring-boxes',
    toolLabel: 'Flooring boxes calculator',
    relatedGuideSlugs: [
      'how-to-install-laminate-flooring-beginners',
      'flooring-transition-strips-and-trim',
      'laminate-flooring-tools-you-need',
      'first-row-laminate-flooring-layout',
    ],
    sections: [
      {
        heading: 'Slide under the jamb — do not caulk a gap',
        paragraphs: [
          'Leaving a chewed gap beside the door casing and filling it with caulk looks like a DIY tell. Pros undercut the jamb and casing so the plank slides underneath with a tight shadow line.',
          'Do this before or as you reach each doorway — fighting a finished row into a square casing wastes planks.',
        ],
      },
      {
        heading: 'Undercut height trick',
        bullets: [
          'Lay a scrap of your flooring + underlay against the jamb',
          'Rest a handsaw or oscillating tool flat on the scrap',
          'Cut through casing and jamb stop until the scrap slides under',
          'Vacuum dust; test-fit a plank before locking the row',
          'Leave the expansion gap at the wall — the jamb covers the cut edge',
        ],
        paragraphs: [
          'A fine-tooth handsaw on the scrap works in tight closets. An oscillating multi-tool is faster on oak casings. Protect the finished floor with cardboard when cutting above installed planks.',
        ],
      },
      {
        heading: 'Doorways between rooms',
        paragraphs: [
          'Where flooring meets a different height or material, plan a T-molding, reducer, or doorway threshold — see [transition strips and trim](/guides/flooring-transition-strips-and-trim). Undercut both sides if the same floating floor continues through.',
          'Do not pinch a floating floor under a heavy door stop without the required gap. The floor must still expand.',
        ],
      },
      {
        heading: 'Notching vs undercutting',
        bullets: [
          'Undercut: preferred at casings — plank disappears under wood',
          'Notch: around metal door frames or tile returns that cannot be cut',
          'Mark notch with the plank in place; cut slightly oversized, then sneak up',
          'Keep factory edges toward the room when you can',
        ],
        paragraphs: [
          'Need tools? [Laminate tools checklist](/guides/laminate-flooring-tools-you-need). Still ordering? [Boxes calculator](/how-many-flooring-boxes).',
        ],
      },
    ],
    faqs: [
      {
        question: 'Should I remove the door to undercut jambs?',
        answer:
          'Usually no. Lift the door off pins only if the swing blocks your saw. Most casing cuts happen with the door open or removed temporarily for the last few inches.',
      },
      {
        question: 'What if I cut the jamb too high?',
        answer:
          'A slightly high cut still hides under casing. If you gouge the face of the casing, touch up stain/paint or add a thin shoe molding — better than a wide caulk joint at the floor.',
      },
      {
        question: 'Do tile installs undercut jambs the same way?',
        answer:
          'Similar idea with a different stack height — use tile + thinset + underlayment thickness as your spacer under the saw. Many tile jobs also use case molding returns instead.',
      },
    ],
  },
  {
    slug: 'when-not-to-diy-flooring',
    category: 'planning',
    title: 'When Not to DIY Flooring — Hire vs Install Yourself',
    description:
      'Honest DIY vs pro guide: stairs, large-format tile, wet slabs, radiant heat, and uneven subfloors. Still measure and price materials with free calculators.',
    readMinutes: 9,
    toolPath: '/how-many-flooring-boxes',
    toolLabel: 'Flooring boxes calculator',
    relatedGuideSlugs: [
      'diy-flooring-installation-roadmap',
      'how-to-prep-subfloor-before-installing-flooring',
      'laminate-vs-tile-vs-carpet-comparison',
      'how-to-install-laminate-flooring-beginners',
    ],
    sections: [
      {
        heading: 'DIY wins on simple floating floors',
        paragraphs: [
          'Click-lock laminate or rigid vinyl in a rectangular room on a flat, dry subfloor is a classic weekend DIY. You will spend more time on prep and cuts than on clicking planks together.',
          'Use the [DIY flooring roadmap](/guides/diy-flooring-installation-roadmap) and [boxes calculator](/how-many-flooring-boxes) even if you hire install — knowing quantities keeps bids honest.',
        ],
      },
      {
        heading: 'Strong reasons to hire a pro',
        bullets: [
          'Stairs and landings — stretch carpet or stair noses done wrong are unsafe',
          'Large-format tile or shower floors — lippage and waterproofing skill',
          'Slabs with moisture issues or failing adhesive from old vinyl',
          'Radiant heat systems with strict manufacturer rules',
          'Out-of-level floors needing grinding, sistering, or sister joists',
          'Heritage wide-plank hardwood nail-down or glue-down',
        ],
        paragraphs: [
          'If the subfloor fails a straightedge or moisture test, fix structure first — see [prep subfloor](/guides/how-to-prep-subfloor-before-installing-flooring). Installing pretty plank over a bad base wastes the material.',
        ],
      },
      {
        heading: 'Middle ground — DIY materials, pro labor',
        paragraphs: [
          'Many homeowners buy boxes themselves (you control grade and dye lot) and pay labor only. Measure twice with our [measure guide](/guides/how-to-measure-rooms-for-flooring) and [waste guide](/guides/how-much-flooring-waste-to-buy) so you do not under-order.',
          'Tile wet zones and carpet stairs are the usual labor-only hires; floating LVP in bedrooms stays DIY.',
        ],
      },
      {
        heading: 'Still DIY? Sequence that protects the warranty',
        bullets: [
          'Acclimate per carton — [acclimation guide](/guides/flooring-acclimation-before-install)',
          'Underlay rated for your product — [underlay guide](/guides/do-i-need-underlay-for-laminate)',
          'Expansion gaps everywhere — including under trim',
          'Keep leftover boxes for repairs; same dye lot matters',
        ],
        paragraphs: [
          'Beginner install walkthrough: [how to install laminate flooring](/guides/how-to-install-laminate-flooring-beginners). Compare materials first: [laminate vs tile vs carpet](/guides/laminate-vs-tile-vs-carpet-comparison).',
        ],
      },
    ],
    faqs: [
      {
        question: 'Can a beginner install laminate alone?',
        answer:
          'Yes for a single flat room if you have a helper for long planks and door cuts. Budget a full weekend including demo and trim. Stairs and multi-room patterns raise the difficulty fast.',
      },
      {
        question: 'Is waterproof vinyl easier than laminate?',
        answer:
          'Install motion is similar. Vinyl is more forgiving around spills and some products score-and-snap. Subfloor flatness and expansion gaps still matter for both.',
      },
      {
        question: 'Should I DIY removal of old flooring?',
        answer:
          'Often yes for carpet and floating laminate. Glued vinyl, thinset tile, and asbestos-era materials are hire-or-test territory — see our remove old flooring guide and local disposal rules.',
      },
    ],
  },
];

export function getGuideBySlug(slug: string): Guide | undefined {
  return GUIDES.find((g) => g.slug === slug);
}

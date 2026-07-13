import type { ApplicationType } from './hvac/types';

export interface LandingPage {
  slug: string;
  path: string;
  applicationType: ApplicationType;
  title: string;
  h1: string;
  description: string;
  breadcrumbLabel: string;
  intro: string;
  faqs: { question: string; answer: string }[];
}

export const LANDING_PAGES: LandingPage[] = [
  {
    slug: 'btu-calculator',
    path: '/btu-calculator',
    applicationType: 'standard_room',
    title: 'BTU Calculator — Room Cooling & Heating Load',
    h1: 'BTU Calculator',
    description:
      'Free BTU calculator for rooms and small spaces. Enter dimensions, insulation, and climate to estimate cooling and heating load.',
    breadcrumbLabel: 'BTU calculator',
    intro:
      'Measure your space in feet and inches. Pick the application type that matches your building — standard room, tiny home, RV, shed, or cottage — for accurate BTU estimates.',
    faqs: [
      {
        question: 'How many BTU per square foot?',
        answer:
          'Most cooled rooms need 20–30 BTU per sq ft depending on insulation, sun exposure, and climate. Hot, sunny, or poorly insulated spaces need more; well-insulated tiny homes often need less.',
      },
      {
        question: 'How do I convert BTU to tons?',
        answer: 'Divide BTU by 12,000. A 12,000 BTU unit is 1 ton. Mini-splits are commonly sold as 9k, 12k, 18k, or 24k BTU single-zone heads.',
      },
      {
        question: 'Is this a substitute for a Manual J load calculation?',
        answer:
          'No. This tool gives planning estimates for DIY sizing. Licensed HVAC pros use Manual J for final equipment selection and permit work.',
      },
    ],
  },
  {
    slug: 'mini-split-calculator',
    path: '/mini-split-calculator',
    applicationType: 'standard_room',
    title: 'Mini-Split Calculator — Size Ductless AC & Heat Pump',
    h1: 'Mini-Split Size Calculator',
    description:
      'Calculate the right mini-split BTU for single-zone ductless AC or heat pump. Room dimensions, insulation, and climate included.',
    breadcrumbLabel: 'Mini-split calculator',
    intro:
      'Mini-splits are sized in BTU — we round up to common head sizes (9k, 12k, 18k, 24k). Enter your space and choose insulation and sun exposure for a realistic single-zone recommendation.',
    faqs: [
      {
        question: 'What size mini-split for a 400 sq ft room?',
        answer:
          'At 25 BTU/sq ft with average insulation, 400 sq ft needs about 10,000 BTU — round up to a 12,000 BTU (1 ton) head. Sunny or poorly insulated rooms may need 18,000 BTU.',
      },
      {
        question: 'Can one mini-split cool multiple rooms?',
        answer:
          'Open floor plans sometimes work with one head. Closed floor plans usually need multi-zone systems or one head per primary space. This calculator totals area for a single zone.',
      },
      {
        question: 'Do mini-splits provide heat?',
        answer:
          'Most modern mini-splits are heat pumps that heat and cool. Our heating BTU estimate is a rough planning number — cold-climate performance depends on model HSPF and install quality.',
      },
    ],
  },
  {
    slug: 'ac-size-calculator',
    path: '/ac-size-calculator',
    applicationType: 'bedroom',
    title: 'AC Size Calculator — What Size Air Conditioner Do I Need?',
    h1: 'AC Size Calculator',
    description:
      'Find what size air conditioner or mini-split you need by room square footage, ceiling height, insulation, and climate.',
    breadcrumbLabel: 'AC size calculator',
    intro:
      'Oversized AC short-cycles and wastes energy; undersized units never catch up on hot days. Enter bedroom or living space dimensions for a right-sized starting point.',
    faqs: [
      {
        question: 'What size AC for a 12×12 bedroom?',
        answer:
          'A 12×12 room is 144 sq ft. At 25 BTU/sq ft that is 3,600 BTU calculated load — but retail units start at 6,000–9,000 BTU. A 9,000 BTU mini-split or window unit is the practical minimum for most bedrooms.',
      },
      {
        question: 'What happens if AC is too big?',
        answer:
          'Oversized units cool quickly but do not run long enough to dehumidify. You get a cold, clammy room and higher energy bills. Size to calculated load, not “bigger is better.”',
      },
      {
        question: 'Window AC vs mini-split sizing — same BTU?',
        answer:
          'The BTU load calculation is similar. Mini-splits are more efficient and quieter but cost more upfront. Match rated BTU to calculated load for either type.',
      },
    ],
  },
  {
    slug: 'what-size-ac-do-i-need',
    path: '/what-size-ac-do-i-need',
    applicationType: 'living_room',
    title: 'What Size AC Do I Need? — BTU by Room Size',
    h1: 'What Size AC Do I Need?',
    description:
      'Answer “what size AC do I need” with room dimensions, occupants, kitchen load, and sun exposure. BTU and mini-split tonnage results.',
    breadcrumbLabel: 'What size AC',
    intro:
      'Living rooms and open areas need more BTU per sq ft than bedrooms because of windows, electronics, and people. Toggle kitchen load if the space includes cooking appliances.',
    faqs: [
      {
        question: 'How many BTU for 500 square feet?',
        answer:
          '500 sq ft × 25 BTU = 12,500 BTU baseline. With average insulation, round up to a 12,000 or 18,000 BTU unit depending on sun and ceiling height.',
      },
      {
        question: 'Do people affect AC sizing?',
        answer:
          'Yes. Each person adds roughly 600 BTU of sensible heat beyond the first two occupants. Enter occupant count in project settings.',
      },
      {
        question: 'Should I size for the hottest day of the year?',
        answer:
          'Size for design conditions in your climate — not record heat waves. In hot-humid zones, consider upsizing one step or improving insulation instead.',
      },
    ],
  },
  {
    slug: 'mini-split-for-rv',
    path: '/mini-split-for-rv',
    applicationType: 'rv',
    title: 'Mini-Split for RV — BTU Sizing Calculator',
    h1: 'Mini-Split Sizing for RVs & Campers',
    description:
      'Calculate mini-split BTU for RVs, travel trailers, and campers. Accounts for thin walls, limited insulation, and sunny exposure.',
    breadcrumbLabel: 'RV mini-split',
    intro:
      'RVs and campers lose heat fast through thin walls and single-pane windows. We apply a higher BTU-per-sq-ft factor and default to poor insulation — typical for ductless installs in skoolies and fifth-wheels.',
    faqs: [
      {
        question: 'What size mini-split for a 30 ft RV?',
        answer:
          'A 30 ft RV often has 200–250 sq ft of cooled living space. At RV insulation factors, expect 7,000–9,000 BTU calculated — buy a 9,000 BTU unit minimum; 12,000 BTU is common for full-timing in hot climates.',
      },
      {
        question: 'Can I install a mini-split on an RV?',
        answer:
          'Yes — many skoolie and RV DIYers mount the condenser on a hitch rack or roof bracket and run lines to an interior head. You need 30A+ shore power or adequate inverter/generator capacity.',
      },
      {
        question: 'RV roof AC vs mini-split — which is better?',
        answer:
          'Roof units are easier to install but noisier and less efficient. Mini-splits are quieter and dehumidify better but need custom mounting and 110V/220V planning.',
      },
    ],
  },
  {
    slug: 'mini-split-for-tiny-home',
    path: '/mini-split-for-tiny-home',
    applicationType: 'tiny_home',
    title: 'Mini-Split for Tiny Home — BTU & Tonnage Calculator',
    h1: 'Mini-Split Sizing for Tiny Homes',
    description:
      'Size ductless mini-splits for tiny houses on wheels and foundation-built tiny homes. Good insulation defaults with optional kitchen load.',
    breadcrumbLabel: 'Tiny home mini-split',
    intro:
      'Well-built tiny homes often have better insulation than full-size houses per sq ft. We start with a lower BTU factor but add kitchen load for galley kitchens in 200–400 sq ft footprints.',
    faqs: [
      {
        question: 'What size mini-split for a 400 sq ft tiny home?',
        answer:
          'Many 400 sq ft tiny homes need 9,000–12,000 BTU with good insulation. Open lofts with high ceilings may need 12,000–18,000 BTU — use the high-ceiling toggle.',
      },
      {
        question: 'One mini-split for whole tiny home?',
        answer:
          'Most tiny homes use one single-zone head in the main living area. Sleeping lofts benefit if airflow reaches them — otherwise consider a second head or fan circulation.',
      },
      {
        question: 'THOW vs stationary tiny home — same sizing?',
        answer:
          'Similar BTU math, but THOWs may have more air leakage at hitch flex points. If walls feel drafty, choose “poor” insulation or upsize one BTU step.',
      },
    ],
  },
  {
    slug: 'mini-split-for-shed',
    path: '/mini-split-for-shed',
    applicationType: 'she_shed',
    title: 'Mini-Split for She-Shed & Workshop — BTU Calculator',
    h1: 'Mini-Split for She-Sheds & Backyard Studios',
    description:
      'Size mini-splits for she-sheds, backyard offices, art studios, and workshop sheds. Defaults for light insulation and moderate square footage.',
    breadcrumbLabel: 'She-shed mini-split',
    intro:
      'Backyard sheds and she-sheds are often poorly insulated stud walls or kit buildings. Enter your footprint — typical 10×12 to 12×20 — and adjust sun exposure if the long wall faces west.',
    faqs: [
      {
        question: 'What size mini-split for a 10×12 shed?',
        answer:
          '120 sq ft at shed insulation factors is often 3,800–4,500 BTU calculated. Retail minimums are 9,000 BTU — that is acceptable for a small shed; the unit will modulate down on inverter models.',
      },
      {
        question: 'Do I need insulation before installing a mini-split?',
        answer:
          'Yes — spray foam or rigid board in walls and roof dramatically cuts required BTU and prevents condensation. Insulate first, then size the unit.',
      },
      {
        question: 'Electrical for shed mini-split?',
        answer:
          'Most 9k–12k BTU units need a dedicated 15–20A circuit. Larger heads need 220V. Check the unit label and local code — permits are often required.',
      },
    ],
  },
  {
    slug: 'mini-split-for-cottage',
    path: '/mini-split-for-cottage',
    applicationType: 'cottage',
    title: 'Mini-Split for Cottage & Cabin — BTU Calculator',
    h1: 'Mini-Split Sizing for Cottages & Cabins',
    description:
      'Calculate mini-split BTU for seasonal cottages, lake cabins, and vacation homes. Moderate insulation defaults for part-time occupancy.',
    breadcrumbLabel: 'Cottage mini-split',
    intro:
      'Cottages range from insulated year-round cabins to seasonal lake camps. Pick insulation level honestly — older camps with log walls need “poor” or “none” even if charming.',
    faqs: [
      {
        question: 'What size mini-split for a 600 sq ft cabin?',
        answer:
          '600 sq ft with average cottage insulation is roughly 15,000–18,000 BTU calculated. A 18,000 BTU single-zone or two smaller heads for upstairs/downstairs are common choices.',
      },
      {
        question: 'Heat pump mini-split for off-season cottage use?',
        answer:
          'Heat pumps work well for spring and fall shoulder seasons. Very cold climates may need supplemental heat below design temperature — check cold-climate HSPF ratings.',
      },
      {
        question: 'Close cottage for winter — mini-split care?',
        answer:
          'Follow manufacturer winterizing steps. Many owners set heat to 45–50°F when away or fully shut down and drain lines in freeze zones.',
      },
    ],
  },
  {
    slug: 'room-ac-calculator',
    path: '/room-ac-calculator',
    applicationType: 'bedroom',
    title: 'Room AC Calculator — BTU by Bedroom Size',
    h1: 'Room AC Calculator',
    description:
      'Calculate BTU for bedroom air conditioning — single rooms, dorm rooms, and guest rooms. Mini-split and window AC sizing.',
    breadcrumbLabel: 'Room AC calculator',
    intro:
      'Bedrooms typically need less BTU per sq ft than kitchens or sunrooms. Enter dimensions and mark shaded if the room gets little direct sun.',
    faqs: [
      {
        question: 'What size AC for a 10×10 bedroom?',
        answer:
          '100 sq ft needs about 2,500 BTU calculated — practical minimum units are 6,000–9,000 BTU. A 9,000 BTU unit is the most common choice for comfort and humidity control.',
      },
      {
        question: 'Is 8,000 BTU enough for a bedroom?',
        answer:
          'Usually yes for rooms under 350 sq ft with average insulation. Larger master bedrooms (400+ sq ft) often need 12,000 BTU.',
      },
      {
        question: 'Portable AC vs mini-split for bedroom?',
        answer:
          'Portable units are easier but less efficient and noisier. Mini-splits cost more but are quieter and better for sleeping — size both by the same BTU load.',
      },
    ],
  },
  {
    slug: 'tonnage-calculator',
    path: '/tonnage-calculator',
    applicationType: 'standard_room',
    title: 'AC Tonnage Calculator — BTU to Tons',
    h1: 'AC Tonnage Calculator',
    description:
      'Convert room BTU load to air conditioner tonnage. Enter dimensions to get tons and matching mini-split BTU size.',
    breadcrumbLabel: 'Tonnage calculator',
    intro:
      'Residential AC is often quoted in tons — 1 ton = 12,000 BTU/hr. We calculate your load in BTU and show the matching tonnage and ductless head size.',
    faqs: [
      {
        question: 'How many BTU in a ton of AC?',
        answer: 'One ton of air conditioning equals 12,000 BTU per hour of cooling capacity.',
      },
      {
        question: 'What ton AC for 1,500 sq ft house?',
        answer:
          'Whole-house sizing needs room-by-room Manual J — not one sq-ft rule. Rough planning for average homes is 2–3 tons total, often split across multiple zones or a central system.',
      },
      {
        question: 'Is 1.5 ton the same as 18,000 BTU?',
        answer: 'Yes. 1.5 tons × 12,000 = 18,000 BTU. Mini-split packaging often lists BTU instead of tonnage.',
      },
    ],
  },
  {
    slug: 'window-ac-calculator',
    path: '/window-ac-calculator',
    applicationType: 'bedroom',
    title: 'Window AC Calculator — BTU Size for Window Units',
    h1: 'Window AC Calculator',
    description:
      'Calculate BTU for window air conditioners by room size. Enter bedroom or office dimensions for right-sized window unit shopping.',
    breadcrumbLabel: 'Window AC calculator',
    intro:
      'Window AC units are sold in fixed BTU steps — 5,000, 8,000, 10,000, 12,000 BTU and up. We calculate your load so you pick a unit that cools without short-cycling.',
    faqs: [
      {
        question: 'What size window AC for a bedroom?',
        answer:
          'A 10×12 bedroom (144 sq ft) needs about 3,600 BTU calculated — retail minimums are 5,000–6,000 BTU. A 9,000–10,000 BTU window unit is the practical sweet spot for comfort and dehumidifying.',
      },
      {
        question: 'Can a window AC be too big?',
        answer:
          'Yes. Oversized window units cool fast but leave humidity high. Match rated BTU to calculated load — do not buy the biggest unit that fits the opening.',
      },
      {
        question: 'Window AC vs mini-split BTU — same math?',
        answer:
          'Room load calculation is the same. Mini-splits are quieter and more efficient but cost more. Use the same BTU result when comparing types.',
      },
    ],
  },
  {
    slug: 'garage-heater-btu-calculator',
    path: '/garage-heater-btu-calculator',
    applicationType: 'garage_workshop',
    title: 'Garage Heater BTU Calculator — Workshop & Garage Heating',
    h1: 'Garage Heater BTU Calculator',
    description:
      'Estimate BTU for garage and workshop heaters. Enter garage dimensions with poor insulation defaults for propane, electric, and infrared heaters.',
    breadcrumbLabel: 'Garage heater BTU',
    intro:
      'Garages and workshops are poorly insulated with large doors — we default to garage/workshop application type with lower insulation factors. Use heating BTU for winter comfort planning.',
    faqs: [
      {
        question: 'How many BTU to heat a two-car garage?',
        answer:
          'A 24×24 garage with 8 ft ceilings is 576 sq ft. Poorly insulated garages often need 30+ BTU/sq ft for heating — roughly 17,000–20,000 BTU. Uninsulated metal buildings need more.',
      },
      {
        question: 'Does opening the garage door affect sizing?',
        answer:
          'Yes. Frequent door cycles add heat loss. Size toward the upper end or add insulation first — ceiling and garage door kits dramatically cut required BTU.',
      },
      {
        question: 'Propane vs electric garage heater BTU?',
        answer:
          'BTU output is comparable when rated equally. Propane units often deliver higher peak BTU for large shops; electric is simpler for attached garages with existing service.',
      },
    ],
  },
  {
    slug: 'whole-house-btu-calculator',
    path: '/whole-house-btu-calculator',
    applicationType: 'living_room',
    title: 'Whole House BTU Calculator — Multi-Room AC Planning',
    h1: 'Whole House BTU Calculator',
    description:
      'Estimate total BTU for whole-house cooling planning. Add multiple rooms and open living areas for central AC or multi-zone mini-split sizing.',
    breadcrumbLabel: 'Whole house BTU',
    intro:
      'Whole-house sizing is not one rule-of-thumb multiplier — add each major zone (living, kitchen, bedrooms) as separate spaces and total the load. Use results for planning; licensed pros run Manual J for permits.',
    faqs: [
      {
        question: 'How many BTU for a 1,500 sq ft house?',
        answer:
          'Rough planning totals often land at 24,000–36,000 BTU depending on layout, insulation, and climate — usually split across zones or a 2–3 ton central system. Add each room here for a better estimate.',
      },
      {
        question: 'One mini-split vs central AC for whole house?',
        answer:
          'Multi-zone mini-splits or a central ducted system both work. This calculator totals BTU — your installer maps that to equipment zones and duct design.',
      },
      {
        question: 'Should I include the kitchen in whole-house BTU?',
        answer:
          'Yes. Kitchens add heat from appliances and occupants. Enable kitchen load when the open living area includes cooking space.',
      },
    ],
  },
];

export const FEATURED_LANDING_SLUGS = [
  'btu-calculator',
  'mini-split-calculator',
  'window-ac-calculator',
  'garage-heater-btu-calculator',
  'whole-house-btu-calculator',
  'mini-split-for-rv',
  'mini-split-for-tiny-home',
  'ac-size-calculator',
] as const;

export const FEATURED_LANDING_LINKS = FEATURED_LANDING_SLUGS.map((slug) =>
  LANDING_PAGES.find((p) => p.slug === slug)
).filter((p): p is LandingPage => p !== undefined);

export function getLandingPageBySlug(slug: string): LandingPage | undefined {
  return LANDING_PAGES.find((page) => page.slug === slug);
}

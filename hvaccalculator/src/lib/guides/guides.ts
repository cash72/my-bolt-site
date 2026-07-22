import type { Guide } from './types';

export const GUIDES: Guide[] = [
  {
    slug: 'btu-per-square-foot-explained',
    category: 'sizing',
    title: 'BTU Per Square Foot Explained — Room Sizing Basics',
    description:
      'How the 20–30 BTU per sq ft rule works, when to go higher or lower, and how insulation, climate, and sun exposure change your load.',
    readMinutes: 9,
    toolPath: '/btu-calculator',
    toolLabel: 'BTU calculator',
    relatedGuideSlugs: [
      'what-size-mini-split-for-rv',
      'mini-split-sizing-for-tiny-homes',
      'common-mini-split-sizing-mistakes',
    ],
    sections: [
      {
        heading: 'What BTU per square foot means',
        paragraphs: [
          'BTU (British Thermal Units) measures how much heat an air conditioner must remove per hour. The common planning shortcut is 20–30 BTU per square foot of cooled floor area for residential spaces.',
          'Example: a 200 sq ft room × 25 BTU = 5,000 BTU calculated load. Retail mini-splits start at 9,000 BTU — you round up to the next available head size, not down.',
          'These numbers are planning estimates for DIY sizing — not a substitute for a licensed Manual J load calculation or permit work.',
        ],
      },
      {
        heading: 'When to use 20, 25, or 30+ BTU per sq ft',
        bullets: [
          '20 BTU/sq ft: well-insulated, shaded rooms in mild climates',
          '25 BTU/sq ft: average insulation, typical interior rooms — good default',
          '30+ BTU/sq ft: sunny west-facing walls, poor insulation, kitchens, or hot-humid zones',
          'Add load for high ceilings (volume above 8 ft), extra occupants, and electronics',
        ],
        paragraphs: [
          'Tiny homes with good spray-foam insulation often land closer to 20. RVs, sheds, and old cottages with drafty walls often need 30 or more.',
        ],
      },
      {
        heading: 'Put it together with a calculator',
        paragraphs: [
          'Multiply length × width for floor area, apply your BTU factor, then adjust for ceiling height, sun, and occupants. Our [BTU calculator](/btu-calculator) applies these factors so you do not have to memorize every exception.',
        ],
      },
      {
        heading: 'Worked example: 14×16 living room',
        paragraphs: [
          'Floor area = 224 sq ft. At 25 BTU/sq ft baseline = 5,600 BTU. Add 10% for a west-facing window (sunny exposure) → 6,160 BTU. Add 15% for a 9 ft ceiling → ~7,100 BTU calculated load.',
          'Retail mini-split heads jump 9,000 → 12,000 → 18,000 BTU. You would select 9,000 BTU here — not 18,000. See [common sizing mistakes](/guides/common-mini-split-sizing-mistakes) if you are tempted to oversize.',
          'For tonnage comparisons, 9,000 BTU ≈ 0.75 tons. Use our [tonnage calculator](/tonnage-calculator) when shopping central AC specs alongside ductless heads.',
        ],
      },
    ],
    faqs: [
      {
        question: 'Is 40 BTU per square foot ever needed?',
        answer:
          'Yes — for sunrooms, glass-heavy walls, or uninsulated metal buildings in hot climates. If calculated load exceeds common head sizes, improve insulation first or consider two zones.',
      },
      {
        question: 'Does heating use the same BTU per sq ft?',
        answer:
          'Heat load math differs from cooling in cold climates. Mini-split heat pumps are rated separately for heating (HSPF). Use cooling BTU for head sizing; verify heating performance at your design outdoor temperature.',
      },
      {
        question: 'Can I size a whole house with one sq-ft rule?',
        answer:
          'No — whole-house central systems need room-by-room Manual J. The sq-ft rule is for single rooms or open zones served by one ductless head.',
      },
    ],
  },
  {
    slug: 'how-many-btu-for-bedroom',
    category: 'sizing',
    title: 'How Many BTU for a Bedroom? — AC & Mini-Split Sizing',
    description:
      'BTU sizing for 10×10, 12×12, and master bedrooms. Why minimum unit sizes matter and when to choose a mini-split over a window AC.',
    readMinutes: 8,
    toolPath: '/room-ac-calculator',
    toolLabel: 'Room AC calculator',
    relatedGuideSlugs: [
      'btu-per-square-foot-explained',
      'mini-split-vs-window-ac',
      'common-mini-split-sizing-mistakes',
    ],
    sections: [
      {
        heading: 'Bedroom BTU by common sizes',
        paragraphs: [
          'Bedrooms usually need less load than kitchens or sunrooms because they have fewer heat sources and often less window area.',
          'A 10×10 bedroom (100 sq ft) calculates to about 2,500 BTU at 25 BTU/sq ft — but practical retail minimums are 6,000–9,000 BTU. A 9,000 BTU mini-split or window unit is the common choice.',
          'A 12×12 bedroom (144 sq ft) calculates to roughly 3,600 BTU — again, buy 9,000 BTU minimum for comfort and dehumidification.',
          'Master bedrooms of 300–400 sq ft often need 9,000–12,000 BTU depending on sun exposure and insulation.',
        ],
      },
      {
        heading: 'Factors that push bedroom load up',
        bullets: [
          'Large south- or west-facing windows with direct sun',
          'Top-floor rooms under a hot roof with poor attic insulation',
          'Home offices with PCs, monitors, and printers running all day',
          'Ensuite bathrooms with steam from showers (open door = extra humidity load)',
          'Cathedral or vaulted ceilings — more volume to cool',
        ],
        paragraphs: [
          'Mark the room as sunny in the calculator if one wall gets afternoon sun. Shaded north-facing bedrooms can use a lower factor.',
        ],
      },
      {
        heading: 'Right-size for sleep, not oversize',
        paragraphs: [
          'Oversized AC cools fast but short-cycles — the room feels cold and clammy because the unit never runs long enough to dehumidify. Match calculated load, then round up one retail step.',
          'Inverter mini-splits modulate down at partial load, which helps in small bedrooms where minimum BTU still exceeds calculated load.',
        ],
      },
      {
        heading: 'Bedroom sizing quick reference',
        bullets: [
          '10×10 (100 sq ft): calc ~2,500 BTU → buy 9,000 BTU head',
          '12×12 (144 sq ft): calc ~3,600 BTU → buy 9,000 BTU head',
          '14×16 (224 sq ft): calc ~5,600 BTU → 9,000 BTU usually sufficient',
          '16×20 master (320 sq ft): calc ~8,000 BTU → 9,000–12,000 BTU depending on sun',
          '400 sq ft master suite: often 12,000 BTU with average insulation',
        ],
        paragraphs: [
          'Run exact dimensions in the [room AC calculator](/room-ac-calculator). Compare ductless vs window units in our [mini-split vs window AC guide](/guides/mini-split-vs-window-ac) before buying.',
        ],
      },
    ],
    faqs: [
      {
        question: 'Is 8,000 BTU enough for a bedroom?',
        answer:
          'Usually yes for rooms under 250 sq ft with average insulation. Larger masters or sunny rooms often need 12,000 BTU. Run the room calculator with your exact dimensions.',
      },
      {
        question: 'Do I count closet square footage?',
        answer:
          'Include closet floor area if cooled air reaches them through open doors or louvered doors. Closed-off closets add little load — skip them for a closer estimate.',
      },
      {
        question: 'One mini-split for two small bedrooms?',
        answer:
          'Only if doors stay open and airflow reaches both rooms. Closed bedrooms need their own head or a multi-zone system — one head in a hallway rarely cools closed rooms evenly.',
      },
    ],
  },
  {
    slug: 'mini-split-vs-window-ac',
    category: 'mini_split',
    title: 'Mini-Split vs Window AC — Which Is Right for You?',
    description:
      'Compare cost, efficiency, noise, install difficulty, and sizing for ductless mini-splits and window air conditioners in bedrooms, sheds, and small spaces.',
    readMinutes: 9,
    toolPath: '/mini-split-calculator',
    toolLabel: 'Mini-split calculator',
    relatedGuideSlugs: [
      'how-many-btu-for-bedroom',
      'seer-ratings-explained',
      'single-zone-vs-multi-zone-mini-split',
    ],
    sections: [
      {
        heading: 'Same BTU math, different experience',
        paragraphs: [
          'Both types are sized by the same room BTU load — enter dimensions in either calculator path and match rated capacity to calculated load.',
          'Window units are cheaper upfront and install in an afternoon. Mini-splits cost more but are quieter, more efficient, and do not block a window or leak air around a sash.',
        ],
      },
      {
        heading: 'Mini-split advantages',
        bullets: [
          'SEER often 20+ vs 10–12 on basic window units — lower electric bills over time',
          'Compressor sits outside — much quieter inside for sleeping and recording',
          'Heat pump models heat and cool from one system',
          'No lost window — better security and natural light',
          'Inverter compressors hold steady temperature without on/off cycling',
        ],
        paragraphs: [],
      },
      {
        heading: 'When a window AC still makes sense',
        bullets: [
          'Renting — landlord may not allow wall penetrations for line sets',
          'Cooling one room for one hot season on a tight budget',
          'Temporary cooling while saving for a permanent mini-split',
          'Historic windows where exterior condenser placement is restricted',
        ],
        paragraphs: [
          'DIY mini-split installs require line-set flaring, vacuum pump, and often a 220V circuit. Window units plug into a standard outlet. These are planning considerations — not professional install advice.',
        ],
      },
      {
        heading: 'Cost comparison over 5 years (planning estimate)',
        paragraphs: [
          'A $400 window unit vs a $1,200 DIY mini-split kit: the mini-split often pays back in electricity if you run AC 4+ hours daily in a hot climate with SEER 20+ vs SEER 11 window unit.',
          'Renters and seasonal-only users may still prefer window units despite efficiency. Full-time tiny home, RV, or cottage dwellers usually benefit from ductless long term. Read [SEER ratings explained](/guides/seer-ratings-explained) before comparing models.',
        ],
      },
    ],
    faqs: [
      {
        question: 'Is a mini-split always more efficient?',
        answer:
          'Generally yes at equal BTU — higher SEER and no window air leakage. A cheap window unit on a leaky sash can waste more energy than the label suggests.',
      },
      {
        question: 'Can I replace a window AC with a mini-split in the same opening?',
        answer:
          'Mini-splits need a small wall hole for the line set, not the full window opening. You regain the window; the indoor head mounts high on a wall.',
      },
      {
        question: 'Same BTU rating — same cooling power?',
        answer:
          'Rated BTU is similar, but mini-splits often deliver rated capacity more consistently because of better airflow design and inverter control.',
      },
    ],
  },
  {
    slug: 'single-zone-vs-multi-zone-mini-split',
    category: 'mini_split',
    title: 'Single-Zone vs Multi-Zone Mini-Split — How to Choose',
    description:
      'One outdoor unit with one head vs multiple indoor heads. When open floor plans work with a single zone and when you need separate rooms.',
    readMinutes: 8,
    toolPath: '/mini-split-calculator',
    toolLabel: 'Mini-split calculator',
    relatedGuideSlugs: [
      'mini-split-vs-window-ac',
      'how-to-size-ac-for-open-floor-plan',
      'common-mini-split-sizing-mistakes',
    ],
    sections: [
      {
        heading: 'Single-zone basics',
        paragraphs: [
          'A single-zone system is one outdoor condenser paired with one indoor head. You size the head for the total cooled area that head serves — usually one room or one open zone.',
          'This is the most common setup for tiny homes, RVs, she-sheds, and one-room cottages. Simpler install, lower equipment cost, and one thermostat location.',
        ],
      },
      {
        heading: 'Multi-zone when rooms have doors',
        bullets: [
          'One outdoor unit drives two to four indoor heads — each head has its own remote or zone control',
          'Size each head for the room it serves, not the whole house total on one head',
          'Outdoor unit capacity must match combined load — manufacturer charts limit how many heads and total BTU',
          'Best for cabins with separate bedrooms, or main floor + loft that need independent control',
        ],
        paragraphs: [
          'Do not assume one 18,000 BTU head will cool three closed bedrooms. Air does not turn corners through shut doors the way open floor plans allow.',
        ],
      },
      {
        heading: 'Open floor plans — one head or two?',
        paragraphs: [
          'Kitchen-living combos under 600 sq ft with open sight lines often work with one properly sized head placed for airflow across the space.',
          'Long narrow layouts, L-shaped rooms, or loft sleeping areas may need a second head or strong fan circulation. Use the [open floor plan sizing guide](/guides/how-to-size-ac-for-open-floor-plan) and honest insulation inputs.',
        ],
      },
      {
        heading: 'Equipment pairing examples',
        bullets: [
          'Tiny home 300 sq ft open plan: single-zone 9,000–12,000 BTU head',
          'Cabin with 2 closed bedrooms + open living: 2-head multi-zone, size each room',
          'Garage apartment studio: single-zone unless bedroom has a door',
          'RV/skoolie: always single-zone — one head for entire living area',
        ],
        paragraphs: [
          'Size each zone with the [mini-split calculator](/mini-split-calculator) before comparing multi-zone outdoor unit charts from manufacturers.',
        ],
      },
    ],
    faqs: [
      {
        question: 'Is multi-zone more efficient than two single-zone systems?',
        answer:
          'One multi-zone condenser can be efficient when zones run together. If only one room needs cooling, a dedicated single-zone system avoids oversizing the outdoor unit.',
      },
      {
        question: 'Can I add a second head later?',
        answer:
          'Only if the original outdoor unit is a multi-zone model with unused ports. Single-zone condensers cannot accept a second head — you would add a separate system.',
      },
      {
        question: 'How do I size a multi-zone outdoor unit?',
        answer:
          'Sum each zone load, then follow manufacturer combination tables — total connected BTU often cannot exceed 100–130% of outdoor unit capacity. This is equipment-specific planning, not a generic sq-ft rule.',
      },
    ],
  },
  {
    slug: 'seer-ratings-explained',
    category: 'mini_split',
    title: 'SEER Ratings Explained — Mini-Split Efficiency Guide',
    description:
      'What SEER and SEER2 mean on ductless heat pumps, how higher ratings save money, and what to look for when comparing models.',
    readMinutes: 8,
    toolPath: '/ac-cost-to-run-calculator',
    toolLabel: 'AC cost to run calculator',
    relatedGuideSlugs: [
      'mini-split-vs-window-ac',
      'common-mini-split-sizing-mistakes',
      'diy-mini-split-installation-basics',
    ],
    sections: [
      {
        heading: 'What SEER measures',
        paragraphs: [
          'SEER (Seasonal Energy Efficiency Ratio) compares cooling output to electricity use over a typical cooling season. Higher SEER = less electricity for the same BTU output.',
          'Modern mini-splits commonly rate 18–30+ SEER. Basic window units are often 10–12 SEER. The difference shows up on your bill when the unit runs many hours per day.',
          'SEER2 is an updated test procedure — compare SEER2 to SEER2 on new labels. Older SEER ratings are not identical numbers but the same idea applies.',
        ],
      },
      {
        heading: 'SEER vs correct sizing',
        bullets: [
          'High SEER does not fix an undersized unit — it still runs nonstop on hot days',
          'Oversized high-SEER units still short-cycle and dehumidify poorly',
          'Right-sized equipment at SEER 20 beats oversized equipment at SEER 28',
          'Install quality (vacuum, line length, airflow) affects real-world efficiency as much as the label',
        ],
        paragraphs: [
          'Size the head first with a BTU calculator, then compare SEER within the correct capacity tier.',
        ],
      },
      {
        heading: 'HSPF for heating',
        paragraphs: [
          'Heat pump mini-splits list HSPF (Heating Seasonal Performance Factor) for heating mode. Cold-climate models publish performance at low outdoor temps — important for cottages and tiny homes used in shoulder seasons.',
          'Efficiency ratings are manufacturer estimates under lab conditions. Your climate, insulation, and install affect actual results.',
        ],
      },
      {
        heading: 'SEER tiers and what they mean in practice',
        bullets: [
          'SEER 16–18: entry inverter ductless — solid baseline',
          'SEER 20–24: mid-tier — common on DIY-friendly brands',
          'SEER 28+: premium cold-climate models — diminishing returns in mild zones',
          'SEER2 label on 2023+ equipment — compare like with like',
        ],
        paragraphs: [
          'A 9,000 BTU SEER 22 unit running 8 hours daily at $0.15/kWh saves roughly $30–50/year vs SEER 13 at the same load — rough planning math, not a utility bill guarantee.',
          'Pair efficiency shopping with correct sizing from our [BTU per sq ft guide](/guides/btu-per-square-foot-explained).',
        ],
      },
    ],
    faqs: [
      {
        question: 'What SEER is good for a mini-split?',
        answer:
          'SEER 18–20 is a solid minimum for new ductless equipment. SEER 24+ is common on premium inverter models. Diminishing returns exist — balance upfront cost against local electric rates.',
      },
      {
        question: 'Does SEER matter for a she-shed used part-time?',
        answer:
          'Less than for a full-time tiny home or RV. If you only run AC on hot afternoons, prioritize correct BTU sizing and noise level over chasing the highest SEER tier.',
      },
      {
        question: 'Is SEER the same as EER?',
        answer:
          'No. EER is a single test point (often 95°F). SEER averages over a season. Mini-split shopping labels emphasize SEER or SEER2.',
      },
    ],
  },
  {
    slug: 'mini-split-sizing-for-tiny-homes',
    category: 'tiny_home',
    title: 'Mini-Split Sizing for Tiny Homes — BTU & One-Head Plans',
    description:
      'Size ductless AC and heat pumps for 200–400 sq ft tiny houses. Loft ceilings, galley kitchens, and THOW air leakage factors.',
    readMinutes: 9,
    toolPath: '/mini-split-for-tiny-home',
    toolLabel: 'Tiny home mini-split calculator',
    relatedGuideSlugs: [
      'insulating-tiny-home-for-hvac',
      'what-size-mini-split-for-rv',
      'btu-per-square-foot-explained',
    ],
    sections: [
      {
        heading: 'Typical tiny home BTU ranges',
        paragraphs: [
          'Most tiny homes are 200–400 sq ft on the main floor. Well-insulated builds with spray foam often calculate 6,000–9,000 BTU — retail minimum is usually 9,000 BTU.',
          '400 sq ft with average insulation and a galley kitchen often lands at 9,000–12,000 BTU. Open lofts with 10–12 ft peak ceilings may need 12,000–18,000 BTU when you enable high-ceiling adjustment.',
          'These are planning estimates — verify with your actual insulation, window count, and climate before buying equipment.',
        ],
      },
      {
        heading: 'One head for the whole tiny home',
        bullets: [
          'Mount the head in the main living area where airflow reaches the loft opening',
          'Sleeping lofts above the head benefit from rising cool air — add a circulation fan if hot spots persist',
          'Bathroom doors left open share load; closed wet baths add humidity — consider exhaust fan use',
          'THOWs with flex at the hitch: if walls feel drafty, choose poor insulation or upsize one BTU step',
        ],
        paragraphs: [],
      },
      {
        heading: 'THOW vs foundation tiny home',
        paragraphs: [
          'Foundation-built tiny homes with fixed walls often seal better than THOWs that flex in transit. Stationary THOWs skirted and sealed can match foundation performance.',
          'Use the tiny home calculator defaults, then adjust insulation honestly. Upsizing without fixing air leaks wastes money long term.',
        ],
      },
      {
        heading: 'Galley kitchen and loft adjustments',
        paragraphs: [
          'A propane range and refrigerator in a 300 sq ft tiny home add sensible heat beyond square footage. Enable kitchen load in the [tiny home calculator](/mini-split-for-tiny-home) when the galley shares the main volume.',
          'Sleeping lofts with 4–6 ft knee walls still add cubic volume — use high-ceiling adjustment when peak height exceeds 10 ft. A 12,000 BTU head is common when loft volume is included on a 350 sq ft footprint.',
        ],
      },
    ],
    faqs: [
      {
        question: 'What size mini-split for a 300 sq ft tiny home?',
        answer:
          'With good insulation, calculated load is often 6,000–8,000 BTU — buy 9,000 BTU. With a kitchen and loft volume, 12,000 BTU is common. Enter exact dimensions in the calculator.',
      },
      {
        question: 'Do I need 220V for a tiny home mini-split?',
        answer:
          'Many 9k–12k BTU units run on 110V/15A; larger heads and some cold-climate models need 220V. Check the unit spec sheet and local electrical code.',
      },
      {
        question: 'Two heads for sleeping loft and main floor?',
        answer:
          'Usually one head suffices in small footprints. Consider a second head or multi-zone only if the loft is closed off or does not receive airflow from the main head.',
      },
    ],
  },
  {
    slug: 'insulating-tiny-home-for-hvac',
    category: 'tiny_home',
    title: 'Insulating a Tiny Home for HVAC — Before You Size AC',
    description:
      'Spray foam, rigid board, and air sealing for tiny houses. Why insulation cuts BTU load and prevents condensation in small envelopes.',
    readMinutes: 9,
    toolPath: '/mini-split-for-tiny-home',
    toolLabel: 'Tiny home mini-split calculator',
    relatedGuideSlugs: [
      'mini-split-sizing-for-tiny-homes',
      'btu-per-square-foot-explained',
      'common-mini-split-sizing-mistakes',
    ],
    sections: [
      {
        heading: 'Insulation before equipment',
        paragraphs: [
          'Sizing a mini-split before insulating is backwards. Every R-value you add lowers required BTU and improves comfort between cycles.',
          'Tiny envelopes heat and cool fast — poor insulation means oversized equipment, condensation on cold surfaces, and mold risk in wall cavities.',
          'Plan insulation during build or retrofit, then run BTU numbers. This guide is DIY planning information, not a building science consultation.',
        ],
      },
      {
        heading: 'Common tiny home insulation choices',
        bullets: [
          'Closed-cell spray foam: highest R per inch, air seals in one step — popular in THOWs',
          'Rigid board (XPS or polyiso): good for roof and floor packs before interior finish',
          'Mineral wool in stud bays: breathable, good for sound — pair with air barrier tape at seams',
          'Windows: low-E double-pane minimum; triple-pane worth it in cold climates',
          'Thermal bridge breaks at metal studs and trailer frame contact points',
        ],
        paragraphs: [],
      },
      {
        heading: 'Air sealing matters as much as R-value',
        paragraphs: [
          'A tiny home with R-20 walls but leaky window trim behaves like poor insulation in the calculator. Seal penetrations for plumbing, electrical, and hitch flex points before closing walls.',
          'After sealing, re-run your BTU estimate with "good" or "average" insulation instead of "poor" — you may drop one full head size.',
        ],
      },
      {
        heading: 'Insulation targets by climate zone (planning reference)',
        bullets: [
          'Hot-humid (Zone 2–3): R-13+ walls, R-30 roof, focus on air sealing and window SHGC',
          'Mixed (Zone 4–5): R-20 walls, R-30–40 roof, thermal break at trailer frame',
          'Cold (Zone 6+): R-24+ walls, R-40+ roof, triple-pane or high-performance windows',
          'All zones: seal penetrations before blowing insulation — leaks defeat R-value',
        ],
        paragraphs: [
          'After upgrading insulation, rerun the [tiny home mini-split calculator](/mini-split-for-tiny-home) — many builds drop from 12,000 BTU planning to 9,000 BTU actual load.',
        ],
      },
    ],
    faqs: [
      {
        question: 'How much insulation does a tiny home need?',
        answer:
          'Many builders target R-20+ walls and R-30+ roof — often exceeding code minimums because of small volume. Climate zone dictates specifics; follow local code and manufacturer guidance.',
      },
      {
        question: 'Can I skip insulation if I buy a bigger mini-split?',
        answer:
          'You can, but you pay forever in energy bills and risk surface condensation when the unit cycles off. Insulate first — it is cheaper than oversizing equipment.',
      },
      {
        question: 'Does floor insulation matter on a THOW?',
        answer:
          'Yes — trailer floors lose heat to road splash and cold air underneath. Insulate the bay and skirt stationary THOWs in winter.',
      },
    ],
  },
  {
    slug: 'what-size-mini-split-for-rv',
    category: 'rv',
    title: 'What Size Mini-Split for an RV? — BTU by Length & Layout',
    description:
      'Mini-split BTU sizing for travel trailers, fifth-wheels, and skoolies. Thin walls, windows, and full-time hot-climate living.',
    readMinutes: 8,
    toolPath: '/mini-split-for-rv',
    toolLabel: 'RV mini-split calculator',
    relatedGuideSlugs: [
      'rv-mini-split-installation-options',
      'mini-split-sizing-for-tiny-homes',
      'btu-per-square-foot-explained',
    ],
    sections: [
      {
        heading: 'RV load is higher per sq ft',
        paragraphs: [
          'RVs and campers have thin walls, minimal insulation, and large window area relative to floor space. Calculators apply a higher BTU factor than a stick-built room of the same size.',
          'A 200 sq ft living area in a travel trailer often calculates 7,000–9,000 BTU — buy 9,000 BTU minimum. Full-timing in Arizona or Florida commonly uses 12,000 BTU for 250+ sq ft.',
        ],
      },
      {
        heading: 'Sizing by RV type',
        bullets: [
          'Class B van: 100–150 sq ft cooled — 9,000 BTU typical',
          'Travel trailer 25–30 ft: 150–250 sq ft — 9,000–12,000 BTU',
          'Fifth-wheel or skoolie 30–40 ft: 250–350 sq ft — 12,000 BTU common',
          'Slide-outs add area and leak points — include them in dimensions',
        ],
        paragraphs: [
          'Roof AC replacement projects sometimes downsized incorrectly — mini-splits are more efficient but still need honest load math, not roof-unit BTU copied blindly.',
        ],
      },
      {
        heading: 'Power and generator planning',
        paragraphs: [
          '9,000 BTU inverter mini-splits often draw 800–1,200W running on 110V. Startup surge matters for inverter generators. Shore power at 30A service is usually sufficient for one head.',
          'Verify amperage on the label before boondocking — these are rough planning numbers, not electrical engineering sign-off.',
        ],
      },
      {
        heading: 'RV sizing by interior length',
        bullets: [
          '20–24 ft trailer: 120–180 sq ft living → 9,000 BTU typical',
          '25–30 ft trailer: 180–250 sq ft → 9,000–12,000 BTU',
          '32–40 ft fifth-wheel: 250–350 sq ft → 12,000 BTU common',
          'Class A/C motorhome: measure actual cooled sq ft, not vehicle length',
        ],
        paragraphs: [
          'Enter slide-out dimensions in the [RV mini-split calculator](/mini-split-for-rv). Thin walls mean you will land at the high end of [BTU per sq ft](/guides/btu-per-square-foot-explained) ranges.',
        ],
      },
    ],
    faqs: [
      {
        question: 'What size mini-split for a 30 ft travel trailer?',
        answer:
          'Most 30 ft trailers have 200–250 sq ft of cooled living space. Expect 9,000–12,000 BTU at RV insulation factors. Use the RV calculator with your exact interior dimensions.',
      },
      {
        question: 'Is 12,000 BTU too big for a small RV?',
        answer:
          'Calculated load may be lower, but inverter units modulate down. Undersizing on hot days is worse than slight oversizing with an inverter in RV applications.',
      },
      {
        question: 'Does a mini-split replace my roof AC BTU rating one-to-one?',
        answer:
          'Not always — roof units are often oversized and inefficient. Size the mini-split from room load, not the old rooftop sticker BTU.',
      },
    ],
  },
  {
    slug: 'rv-mini-split-installation-options',
    category: 'rv',
    title: 'RV Mini-Split Installation Options — Mounting & Power',
    description:
      'Condenser on hitch rack, bumper mount, or roof bracket. Line sets, vibration, and shore power for DIY RV ductless installs.',
    readMinutes: 10,
    toolPath: '/mini-split-for-rv',
    toolLabel: 'RV mini-split calculator',
    relatedGuideSlugs: [
      'what-size-mini-split-for-rv',
      'diy-mini-split-installation-basics',
      'mini-split-vs-window-ac',
    ],
    sections: [
      {
        heading: 'Where to mount the outdoor unit',
        bullets: [
          'Rear hitch cargo rack: popular on skoolies and fifth-wheels — good airflow, easy service access',
          'Bumper platform: works on trailers with rated bumpers — watch tongue weight limits',
          'Roof bracket: saves rear overhang length — adds height and wind load; secure for highway speeds',
          'Under-skirt enclosed bay: possible on stationary skoolies — ensure airflow clearances per manufacturer',
        ],
        paragraphs: [
          'Vibration isolation pads and flexible line routing reduce stress at wall penetrations. Every mile of travel shakes connections — strain relief and proper support matter.',
        ],
      },
      {
        heading: 'Interior head placement',
        paragraphs: [
          'Mount the head on an interior wall with line set routed through a cabinet or closet to hide the chase. Avoid exterior walls if possible — less thermal bridging and easier insulation patch.',
          'Keep clearance below the head for airflow return. Do not mount over the bed headboard without checking throw direction — cold draft complaints are common with poor placement.',
        ],
      },
      {
        heading: 'Electrical and legal considerations',
        bullets: [
          'Dedicated 15–20A circuit from the breaker panel — avoid sharing with microwave on same leg',
          'Soft-start kits reduce generator surge on startup',
          'Some states require licensed HVAC for refrigerant work — DIY-friendly kits use pre-charged lines within length limits',
          'Check campground rules on external mounts and noise',
        ],
        paragraphs: [
          'This is general DIY planning information. Follow manufacturer instructions, local codes, and refrigerant regulations in your area.',
        ],
      },
      {
        heading: 'Travel-day checklist',
        bullets: [
          'Power off and disconnect shore cord before departure',
          'Secure condenser with straps rated for highway vibration',
          'Cap line-set openings if head is removed for service (professional only)',
          'Check hitch rack weight against RV and rack ratings',
          'Re-level and test cool mode at each new campsite',
        ],
        paragraphs: [
          'See [what size mini-split for RV](/guides/what-size-mini-split-for-rv) for BTU planning before choosing mount location — undersized units work harder when condenser airflow is blocked at tight campsites.',
        ],
      },
    ],
    faqs: [
      {
        question: 'Can I run a mini-split while driving?',
        answer:
          'No — shut down before travel. Condenser must be secured; line sets are not designed for on-road operation.',
      },
      {
        question: 'Pre-charged line sets vs vacuum pump install?',
        answer:
          'Pre-charged "DIY" kits with matched line length avoid brazing and vacuum if you stay within spec. Longer runs need professional charging and vacuum — do not guess.',
      },
      {
        question: 'Will a mini-split fit my RV height clearance?',
        answer:
          'Roof mounts add 12–18 inches. Hitch mounts extend rear length. Measure total height and rear overhang before buying — campground trees and ferry limits matter.',
      },
    ],
  },
  {
    slug: 'she-shed-heating-and-cooling',
    category: 'cottage',
    title: 'She-Shed Heating and Cooling — Mini-Split Sizing Guide',
    description:
      'Heat and cool a backyard she-shed, art studio, or office shed. Insulation steps, typical 10×12 to 12×20 BTU ranges, and electrical basics.',
    readMinutes: 8,
    toolPath: '/mini-split-for-shed',
    toolLabel: 'She-shed mini-split calculator',
    relatedGuideSlugs: [
      'cottage-mini-split-guide',
      'diy-mini-split-installation-basics',
      'btu-per-square-foot-explained',
    ],
    sections: [
      {
        heading: 'She-sheds are not stick-built rooms',
        paragraphs: [
          'Kit sheds and converted Tuff Sheds often have minimal wall insulation — calculator defaults assume light insulation and moderate square footage.',
          'A 10×12 she-shed (120 sq ft) may calculate 3,800–4,500 BTU — retail minimum is 9,000 BTU. Inverter mini-splits modulate down so 9k is acceptable for small studios.',
          'Insulate before you install — spray foam or rigid board in roof and walls drops load and prevents sweat on metal sheds.',
        ],
      },
      {
        heading: 'Heating and cooling in one unit',
        bullets: [
          'Heat pump mini-splits cool in summer and heat in spring/fall — ideal for part-time studio use',
          'Uninsulated metal sheds lose heat fast — heating mode runs more often; fix insulation first',
          'Supplemental electric heat may be needed below heat pump design temp in cold zones',
          'Dehumidify in humid climates to protect art supplies, fabric, and electronics',
        ],
        paragraphs: [],
      },
      {
        heading: 'Sun exposure and use pattern',
        paragraphs: [
          'West-facing long walls with big windows need sunny exposure selected in the calculator. Shaded sheds under trees can use lower factors.',
          'Part-time use (weekends only) still benefits from right sizing — oversize units short-cycle even on Saturday afternoons.',
        ],
      },
      {
        heading: 'Insulating a kit shed before HVAC',
        bullets: [
          'Spray foam roof cavity: biggest comfort gain on metal-roof sheds',
          'Rigid board on stud walls: R-10 minimum for year-round use',
          'Weatherstrip door and seal sole plate to slab/pavers',
          'Shade west wall with awning or planting to cut afternoon load',
        ],
        paragraphs: [
          'A 12×20 insulated she-shed (240 sq ft) often calculates 7,000–9,000 BTU after insulation — buy 9,000 BTU inverter. Use the [she-shed calculator](/mini-split-for-shed) with updated insulation inputs.',
        ],
      },
    ],
    faqs: [
      {
        question: 'What size mini-split for a 10×12 she-shed?',
        answer:
          '120 sq ft with shed insulation factors calculates under 5,000 BTU — buy 9,000 BTU as the practical minimum. Insulate well and choose an inverter model.',
      },
      {
        question: 'Do I need a permit for a shed mini-split?',
        answer:
          'Many jurisdictions require permits for electrical and HVAC work on accessory structures. Check local building department — rules vary widely.',
      },
      {
        question: 'Can I use a portable AC instead?',
        answer:
          'Yes for tight budgets — portables are noisier and less efficient. Size by the same BTU load; exhaust hose through a panel is simpler but leakier than a mini-split.',
      },
    ],
  },
  {
    slug: 'cottage-mini-split-guide',
    category: 'cottage',
    title: 'Cottage Mini-Split Guide — Sizing Cabins & Seasonal Homes',
    description:
      'Ductless sizing for lake cabins, seasonal cottages, and vacation homes. Insulation honesty, winter heat pump limits, and multi-room options.',
    readMinutes: 9,
    toolPath: '/mini-split-for-cottage',
    toolLabel: 'Cottage mini-split calculator',
    relatedGuideSlugs: [
      'she-shed-heating-and-cooling',
      'insulating-tiny-home-for-hvac',
      'single-zone-vs-multi-zone-mini-split',
    ],
    sections: [
      {
        heading: 'Cottage insulation varies more than you think',
        paragraphs: [
          'Log cabins, older lake camps, and part-time cottages often perform like "poor" insulation even when charming. Select insulation level honestly in the calculator — not what you wish the camp had.',
          '600 sq ft cottage with average insulation often calculates 15,000–18,000 BTU. A single 18,000 BTU head works for open main floors; upstairs/downstairs splits may need two heads or multi-zone.',
        ],
      },
      {
        heading: 'Seasonal vs year-round use',
        bullets: [
          'Seasonal summer cooling: size for peak July load; dehumidification matters at the lake',
          'Shoulder-season heat pump heat: check HSPF and low-temp performance rating',
          'Winter away mode: set heat to 45–50°F or follow manufacturer winterizing in freeze zones',
          'Mice and pest protection on line sets and condenser covers during vacant months',
        ],
        paragraphs: [],
      },
      {
        heading: 'Single head vs multi-zone cabins',
        paragraphs: [
          'Open great-room cottages with one sleeping loft often work with one head in the main space. Closed bedroom doors on a second floor usually need a second zone.',
          'Compare equipment cost vs comfort — one oversized head blowing cold air under closed bedroom doors leads to complaints every weekend.',
        ],
      },
      {
        heading: 'Lake cabin humidity and shoulder seasons',
        paragraphs: [
          'Cottages at the lake see high humidity in June — dehumidification matters as much as raw BTU. Right-sized inverter units run longer cycles and pull moisture better than oversized singles.',
          'Shoulder-season heat (50–40°F outdoor) needs a heat pump with published low-temp performance. Check HSPF2 and extended capacity tables before relying on ductless as sole heat source.',
          'Run the [cottage mini-split calculator](/mini-split-for-cottage) with "poor" insulation first if the camp is older, then model upgrades to see BTU drop.',
        ],
      },
    ],
    faqs: [
      {
        question: 'What size mini-split for a 600 sq ft cabin?',
        answer:
          'Roughly 15,000–18,000 BTU with average insulation — an 18,000 BTU single-zone or two smaller heads for separate floors. Enter layout and insulation in the cottage calculator.',
      },
      {
        question: 'Will a mini-split heat my cottage in winter?',
        answer:
          'Heat pumps work well above design temperature. Very cold climates may need supplemental heat below rated outdoor temp — read the manufacturer extended capacity chart.',
      },
      {
        question: 'Should I shut down the mini-split when the cottage is empty all winter?',
        answer:
          'In freeze-prone zones, follow winterizing steps — drain lines if required, or maintain minimum heat. Manufacturer manuals differ; this is not professional freeze-protection advice.',
      },
    ],
  },
  {
    slug: 'diy-mini-split-installation-basics',
    category: 'diy',
    title: 'DIY Mini-Split Installation Basics — Planning Checklist',
    description:
      'Pre-charged kits, line sets, wall mounts, vacuum, and electrical for homeowner-installed ductless systems. What DIY can cover and when to call a pro.',
    readMinutes: 10,
    toolPath: '/mini-split-calculator',
    toolLabel: 'Mini-split calculator',
    relatedGuideSlugs: [
      'diy-mini-split-project-roadmap',
      'mini-split-electrical-requirements',
      'precharged-diy-mini-split-kits-explained',
      'when-to-hire-mini-split-installer',
    ],
    sections: [
      {
        heading: 'Before you buy equipment',
        bullets: [
          'Size the head with a BTU calculator — buy matched indoor/outdoor pair from same series',
          'Confirm electrical: 110V vs 220V, breaker size, wire gauge, outdoor disconnect location',
          'Plan line-set path length — pre-charged DIY kits have maximum line length; longer needs pro charge',
          'Check local code: permits, condenser setbacks, noise ordinances',
        ],
        paragraphs: [
          'Start with the full [DIY mini-split project roadmap](/guides/diy-mini-split-project-roadmap) if you are sequencing size → wire → mount. DIY videos skip code and refrigerant law — verify what is legal in your jurisdiction before purchasing.',
        ],
      },
      {
        heading: 'Install sequence overview',
        paragraphs: [
          'Mount outdoor condenser on pad or bracket with clear airflow clearances. Mount indoor bracket level, drill wall penetration with slight outward slope for drainage.',
          'Run line set, communication wire, and drain. Flare connections torqued to spec. Pre-charged systems open valves after leak-check; traditional installs need vacuum pump to 500 microns or below.',
          'Open electrical, test heat and cool modes, and check drain flow. These steps are summaries — follow the manufacturer manual exactly.',
        ],
      },
      {
        heading: 'When to hire a licensed HVAC tech',
        bullets: [
          'Line set longer than DIY kit rating — requires weighing refrigerant charge',
          'No comfort with flaring or vacuum procedure — leaks cost more than install labor',
          'Jurisdiction requires licensed refrigerant work',
          'Multi-zone systems with complex branch selectors',
        ],
        paragraphs: [
          'This guide is planning information only — not a step-by-step substitute for manufacturer instructions or professional advice.',
        ],
      },
      {
        heading: 'Tools and materials checklist',
        bullets: [
          'Indoor bracket, level, stud finder, core bit for wall penetration',
          'Flaring tool, torque wrench, nitrogen or leak detector',
          'Vacuum pump and micron gauge (if not pre-charged kit)',
          'Outdoor pad or wall bracket, disconnect box, whip to breaker',
          'Line hide cover (optional), condensate drain hose and slope',
        ],
        paragraphs: [
          'Confirm head size with the [mini-split calculator](/mini-split-calculator) before ordering — line-set kits are matched to specific BTU tiers on many DIY brands.',
        ],
      },
    ],
    faqs: [
      {
        question: 'Are pre-charged DIY mini-splits reliable?',
        answer:
          'When line length stays within spec, connections are flared correctly, and valves open after leak test, many homeowners succeed. Mistakes in vacuum or flaring cause early compressor failure.',
      },
      {
        question: 'Do I need a vacuum pump?',
        answer:
          'Pre-charged kits with matched length often skip vacuum if no line was cut. Any cut line or non-pre-charged system requires evacuation — never skip vacuum to save time.',
      },
      {
        question: 'How far can the condenser sit from the head?',
        answer:
          'Often 25–50 ft depending on model — longer runs need larger line size and charge adjustment. Read the spec sheet before mounting the outdoor unit far away.',
      },
    ],
  },
  {
    slug: 'common-mini-split-sizing-mistakes',
    category: 'sizing',
    title: 'Common Mini-Split Sizing Mistakes — And How to Avoid Them',
    description:
      'Oversizing, copying old unit BTU, ignoring sun and insulation, and sizing multi-room spaces on one head. Fix these before you buy.',
    readMinutes: 8,
    toolPath: '/mini-split-calculator',
    toolLabel: 'Mini-split calculator',
    relatedGuideSlugs: [
      'btu-per-square-foot-explained',
      'how-to-size-ac-for-open-floor-plan',
      'mini-split-sizing-for-tiny-homes',
    ],
    sections: [
      {
        heading: 'Mistake #1: Bigger is always better',
        paragraphs: [
          'Oversized mini-splits cool the room quickly then shut off. Short cycles mean poor dehumidification, temperature swings, and higher wear.',
          'Match calculated load, then round up one retail step — not two sizes "just in case."',
        ],
      },
      {
        heading: 'Mistake #2: Copying the old unit sticker',
        bullets: [
          'Old window AC or roof unit may have been wrong from day one',
          'Insulation upgrades since original install lower required BTU',
          'Room use changed — home office heat load differs from guest room',
          'Manufacturer nominal BTU ≠ calculated room load',
        ],
        paragraphs: [],
      },
      {
        heading: 'More errors we see in DIY projects',
        bullets: [
          'Ignoring west-facing glass — adds 10–30% load in sunny climates',
          'Sizing one head for closed bedrooms — doors block airflow',
          'Forgetting ceiling height — loft and cathedral volume needs adjustment',
          'Skipping kitchen load in tiny home galley layouts',
          'Using whole-house sq-ft rules for a single zone',
        ],
        paragraphs: [
          'Run a fresh calculation with honest inputs. These tools give planning estimates — not professional Manual J results.',
        ],
      },
      {
        heading: 'Pre-purchase sanity check',
        bullets: [
          'Calculated load within one retail step of selected head? If two steps up, reconsider',
          'Insulation level matches reality — not future renovation plans',
          'Sunny exposure set for west/south glass walls',
          'Kitchen or office heat sources included in open zones',
          'Multi-room plan uses separate zones if doors close',
        ],
        paragraphs: [
          'Walk through our [BTU per sq ft guide](/guides/btu-per-square-foot-explained) and rerun the [mini-split calculator](/mini-split-calculator) before checkout — returns on opened line-set kits are difficult.',
        ],
      },
    ],
    faqs: [
      {
        question: 'How do I know if my mini-split is oversized?',
        answer:
          'Runs only a few minutes each cycle on moderate days, room feels humid, or you need to set thermostat several degrees higher to avoid feeling cold.',
      },
      {
        question: 'Should I upsize for the hottest day ever?',
        answer:
          'Size for design conditions in your climate zone — not record heat waves. Fix insulation and shade before jumping two BTU tiers.',
      },
      {
        question: 'Is undersizing safer than oversizing?',
        answer:
          'Undersizing struggles on peak days. Slight round-up to next head size is fine. Severe undersizing means the unit never catches up — oversizing causes comfort issues. Right-size first.',
      },
    ],
  },
  {
    slug: 'how-to-size-ac-for-open-floor-plan',
    category: 'sizing',
    title: 'How to Size AC for an Open Floor Plan — Single-Zone Tips',
    description:
      'Cooling kitchen-living combos and great rooms with one mini-split head. How to measure, when one zone works, and when to add a second head.',
    readMinutes: 9,
    toolPath: '/what-size-ac-do-i-need',
    toolLabel: 'What size AC calculator',
    relatedGuideSlugs: [
      'btu-per-square-foot-explained',
      'single-zone-vs-multi-zone-mini-split',
      'common-mini-split-sizing-mistakes',
    ],
    sections: [
      {
        heading: 'Measure the whole open zone',
        paragraphs: [
          'Treat connected spaces without doors as one cooling zone — sum floor areas. A 20×20 living area plus 10×12 kitchen opening is 520 sq ft total, not two separate loads on one head.',
          'Add kitchen load toggle if cooking appliances share the space — ranges and ovens add sensible heat beyond sq-ft math.',
          'Use 25–30 BTU/sq ft as a starting point, then adjust for ceiling height over 8 ft and sunny glass.',
        ],
      },
      {
        heading: 'Head placement and airflow',
        bullets: [
          'Mount where airflow can reach the farthest corner — often near the kitchen-living boundary',
          'Avoid blowing directly onto dining tables or sofas — comfort complaints follow',
          'Ceiling fans help equalize temperature in long rectangular layouts',
          'Half-walls and pillars redirect airflow — sight lines ≠ air paths',
        ],
        paragraphs: [],
      },
      {
        heading: 'When one head is not enough',
        paragraphs: [
          'L-shaped plans with a jog more than 15 ft from the head may develop hot corners. Second floor open lofts above a great room sometimes need a second head or strong fan circulation.',
          'If bedrooms open off the great room with doors closed at night, size the head for occupied open area only — or add multi-zone for bedrooms.',
        ],
      },
      {
        heading: 'Open plan worked example',
        paragraphs: [
          'Kitchen 12×14 (168 sq ft) + living 18×16 (288 sq ft) = 456 sq ft open zone. Baseline 456 × 25 = 11,400 BTU. Kitchen load +10% → 12,540 BTU. Nine-foot ceilings +15% → ~14,400 BTU.',
          'Choose a 12,000 or 18,000 BTU head depending on sun and whether you accept the top of range — many open plans land on 12,000 BTU with good insulation. Use the [what size AC calculator](/what-size-ac-do-i-need) with kitchen toggle enabled.',
        ],
      },
    ],
    faqs: [
      {
        question: 'How many BTU for 500 sq ft open floor plan?',
        answer:
          '500 sq ft × 25 BTU = 12,500 BTU baseline. With average insulation, a 12,000 or 18,000 BTU head depending on sun and kitchen load — use the calculator with kitchen toggle on.',
      },
      {
        question: 'One mini-split for kitchen and living room?',
        answer:
          'Yes when open with no door — size combined area plus kitchen load. Closed galley kitchens off the side may behave as separate zones.',
      },
      {
        question: 'Do tall ceilings change open plan sizing?',
        answer:
          'Yes — volume above 8 ft adds load. Enable high-ceiling adjustment or add 10–15% to calculated BTU for double-height great rooms.',
      },
    ],
  },
  {
    slug: 'mini-split-for-garage-workshop',
    category: 'diy',
    title: 'Mini-Split for Garage Workshop — Cooling & Heating DIY Spaces',
    description:
      'Size ductless AC for garages and workshops. Insulation, door leakage, equipment heat, and 220V planning for maker spaces.',
    readMinutes: 9,
    toolPath: '/btu-calculator',
    toolLabel: 'BTU calculator',
    relatedGuideSlugs: [
      'diy-mini-split-installation-basics',
      'she-shed-heating-and-cooling',
      'btu-per-square-foot-explained',
    ],
    sections: [
      {
        heading: 'Garages are tough envelopes',
        paragraphs: [
          'Standard uninsulated garage doors leak air and radiate heat. Block walls may have no insulation. Calculators assume poor insulation unless you have upgraded the shell.',
          'A 400 sq ft two-car garage workshop may calculate 12,000–18,000 BTU with poor insulation — 18,000 BTU is common before you insulate. After insulating doors and walls, recalculate — you may drop to 12,000 BTU.',
        ],
      },
      {
        heading: 'Workshop heat gains beyond sq ft',
        bullets: [
          'Welding, compressors, and dust collection motors add heat',
          'South-facing garage doors act like radiators in afternoon sun',
          'Epoxy curing and paint booths need ventilation — exhaust air replaces cooled air',
          'Occasional use vs daily use: modulating inverter helps part-time shops',
        ],
        paragraphs: [
          'Size for peak use when machines run and doors stay closed — not empty garage volume alone.',
        ],
      },
      {
        heading: 'Install and electrical notes',
        paragraphs: [
          'Mount indoor head away from dust-heavy zones — filters clog faster in workshops. Mount outdoor condenser where lawn equipment will not hit it.',
          'Many 12k–18k BTU units need 220V. Run dedicated circuit before closing drywall if finishing the garage. Permit and code rules apply — this is planning info, not electrical advice.',
        ],
      },
      {
        heading: 'Garage upgrade path',
        bullets: [
          'Step 1: Insulate garage door panels and add bottom seal',
          'Step 2: Insulate walls (batts or foam) if finishing interior',
          'Step 3: Rerun [BTU calculator](/btu-calculator) with improved insulation',
          'Step 4: Install mini-split — often drop one head size after steps 1–2',
          'Step 5: Add shop air filtration separately from HVAC cooling',
        ],
        paragraphs: [
          'Many owners oversize because they skip steps 1–2. See [DIY install basics](/guides/diy-mini-split-installation-basics) for electrical planning before cutting drywall.',
        ],
      },
    ],
    faqs: [
      {
        question: 'What size mini-split for a 24×24 garage?',
        answer:
          '576 sq ft uninsulated calculates high — often 18,000 BTU or more. Insulate the door and walls first, then expect 12,000–18,000 BTU. Enter dimensions with poor insulation selected.',
      },
      {
        question: 'Should I insulate the garage door before installing AC?',
        answer:
          'Strongly yes — panel kits and bottom seals cut load dramatically. Cooling an uninsulated metal door garage is expensive and never comfortable.',
      },
      {
        question: 'Is a mini-split safe in a dusty woodworking shop?',
        answer:
          'Keep filters maintained and consider air filtration in the shop zone. Mini-splits do not bring in fresh air — ventilation is separate from cooling load planning.',
      },
    ],
  },
  {
    slug: 'window-ac-btu-sizing',
    category: 'sizing',
    title: 'Window AC BTU Sizing — Room Dimensions & Plug-In Units',
    description:
      'How to size window and portable AC units by BTU, minimum unit sizes, and when a mini-split is worth the upgrade.',
    readMinutes: 8,
    toolPath: '/window-ac-calculator',
    toolLabel: 'Window AC calculator',
    relatedGuideSlugs: ['mini-split-vs-window-ac', 'btu-per-square-foot-explained'],
    sections: [
      {
        heading: 'Window unit BTU basics',
        paragraphs: [
          'Retail window ACs sell in 5,000, 8,000, 10,000, 12,000, and 15,000+ BTU steps. Calculate load first — then buy the next size up, not down. A 150 sq ft bedroom often lands near 5,000–6,000 BTU calculated; retail minimum is often 8,000 BTU.',
          'Oversizing window units cycles on/off without dehumidifying well — sticky feeling despite cold air. Right-sizing matters more in humid climates.',
        ],
      },
      {
        heading: 'When to skip window AC',
        paragraphs: [
          'Large open rooms, sunrooms, and additions with poor insulation may need 12,000+ BTU window units that are loud and block egress windows. Compare [mini-split vs window AC](/guides/mini-split-vs-window-ac) before buying the biggest box at the store.',
        ],
      },
    ],
    faqs: [
      {
        question: 'What size window AC for a 12×12 room?',
        answer:
          'About 144 sq ft at 25 BTU/sq ft ≈ 3,600 BTU calculated — but retail units start at 5,000–8,000 BTU. An 8,000 BTU unit is common; ensure good insulation or it may short-cycle.',
      },
      {
        question: 'Do window ACs heat too?',
        answer:
          'Some models include heat mode — lower capacity than dedicated heat. Cold-climate primary heat needs a different solution.',
      },
    ],
  },
  {
    slug: 'heat-pump-vs-air-conditioner',
    category: 'mini_split',
    title: 'Heat Pump vs Air Conditioner — What Homeowners Should Know',
    description:
      'Cooling-only AC vs heat pumps that heat and cool. Efficiency labels, climate limits, and sizing overlap with mini-splits.',
    readMinutes: 9,
    toolPath: '/mini-split-calculator',
    toolLabel: 'Mini-split calculator',
    relatedGuideSlugs: ['seer-ratings-explained', 'mini-split-vs-window-ac'],
    sections: [
      {
        heading: 'Same cooling math, different heating story',
        paragraphs: [
          'For cooling, heat pumps and AC units are sized by BTU removal load — our [BTU calculator](/btu-calculator) applies to both. Heat pumps add reverse operation for winter; efficiency drops as outdoor temperature falls.',
          'Mini-splits are almost always heat pumps today — one outdoor unit heats and cools a zone.',
        ],
      },
      {
        heading: 'Climate and backup heat',
        bullets: [
          'Mild climates: heat pump often replaces furnace for moderate loads',
          'Cold climates: auxiliary heat strips or furnace backup may run below ~20°F',
          'Cooling-only window units: no heat — cheapest upfront, no winter value',
          'HSPF and SEER: read both on heat pump labels',
        ],
        paragraphs: [
          'See [SEER ratings explained](/guides/seer-ratings-explained) for efficiency shopping — higher SEER saves kWh over years, not first-season comfort.',
        ],
      },
    ],
    faqs: [
      {
        question: 'Is a mini-split a heat pump?',
        answer:
          'Most ductless mini-splits are heat pumps — they heat and cool. Confirm on the spec sheet before buying cooling-only listings.',
      },
      {
        question: 'Do heat pumps work in cold winters?',
        answer:
          'Modern cold-climate models operate below 0°F with reduced output. Sizing must account for design heating load — not cooling BTU alone.',
      },
    ],
  },
  {
    slug: 'portable-ac-vs-window-ac',
    category: 'mini_split',
    title: 'Portable AC vs Window AC — Noise, BTU & Efficiency',
    description:
      'Compare portable roll-around units to window AC for bedrooms, rentals, and HOA restrictions. Dual-hose vs single-hose efficiency.',
    readMinutes: 8,
    toolPath: '/room-ac-calculator',
    toolLabel: 'Room AC calculator',
    relatedGuideSlugs: ['window-ac-btu-sizing', 'mini-split-vs-window-ac'],
    sections: [
      {
        heading: 'Efficiency and hose setup',
        paragraphs: [
          'Single-hose portable ACs pull conditioned air from the room to exhaust heat — they fight themselves and use more kWh per BTU. Dual-hose models separate intake and exhaust — better, still less efficient than window units.',
          'Window units mount half inside, half outside — heat leaves directly. Same BTU rating, window units usually cool faster and cheaper to run.',
        ],
      },
      {
        heading: 'When portable still makes sense',
        bullets: [
          'Rental leases banning window brackets',
          'HOA rules on visible window units',
          'Temporary cooling one season in a home office',
          'Rooms where drilling is impossible',
        ],
        paragraphs: [
          'Size portables with the same room BTU math — then expect to buy a higher nominal BTU than a window unit for the same room.',
        ],
      },
    ],
    faqs: [
      {
        question: 'Are portable ACs louder?',
        answer:
          'Usually yes — the compressor sits in the room. Window units put compressor mass outside the living space.',
      },
      {
        question: 'Do I need to empty water from portable ACs?',
        answer:
          'Humidity condenses into a tank or drains via hose depending on model. High-humidity days mean more maintenance than window units.',
      },
    ],
  },
  {
    slug: 'diy-mini-split-project-roadmap',
    category: 'diy',
    title: 'DIY Mini-Split Project Roadmap — Size, Wire, Mount & Start Up',
    description:
      'Complete DIY ductless mini-split project map: BTU sizing, single vs multi-zone, electrical, placement, pre-charged kits, install basics, and when to hire. Links every phase to free calculators.',
    readMinutes: 12,
    toolPath: '/mini-split-calculator',
    toolLabel: 'Mini-split calculator',
    relatedGuideSlugs: [
      'common-mini-split-sizing-mistakes',
      'mini-split-electrical-requirements',
      'diy-mini-split-installation-basics',
      'when-to-hire-mini-split-installer',
    ],
    sections: [
      {
        heading: 'Why DIY mini-splits fail before first cool day',
        paragraphs: [
          'Wrong BTU, undersized wire, outdoor units stuffed in a corner, or opening refrigerant valves without a leak check are the usual failure modes — not the brand on the box. This roadmap is your size-to-startup checklist with calculator links so you buy the right matched set once.',
          'Jump to the phase that matches today. Window and portable AC stay a separate DIY branch when a wall penetration is not an option.',
        ],
      },
      {
        heading: 'The 8-phase DIY mini-split flow',
        bullets: [
          'Phase 1 — Size BTU load (room, shed, RV, tiny home, garage)',
          'Phase 2 — Choose single-zone vs multi-zone and heat-pump features',
          'Phase 3 — Confirm electrical service, breaker, disconnect, and whip',
          'Phase 4 — Plan indoor head and outdoor condenser placement',
          'Phase 5 — Decide pre-charged DIY kit vs pro vacuum/charge',
          'Phase 6 — Mount, line set, drain, and electrical (follow the manual)',
          'Phase 7 — Leak check, open valves or vacuum, test heat and cool',
          'Phase 8 — Know when to stop and hire a licensed tech',
        ],
        paragraphs: [
          'Deep dives: [electrical requirements](/guides/mini-split-electrical-requirements), [placement](/guides/mini-split-indoor-outdoor-placement), [DIY kits](/guides/precharged-diy-mini-split-kits-explained), [install basics](/guides/diy-mini-split-installation-basics), [hire vs DIY](/guides/when-to-hire-mini-split-installer). Window units: [install window AC safely](/guides/how-to-install-window-ac-safely).',
        ],
      },
      {
        heading: 'Phase-by-phase deep links',
        bullets: [
          'Size: [BTU per sq ft](/guides/btu-per-square-foot-explained) · [Bedroom BTU](/guides/how-many-btu-for-bedroom) · [Sizing mistakes](/guides/common-mini-split-sizing-mistakes) · [Open floor plans](/guides/how-to-size-ac-for-open-floor-plan)',
          'Choose: [Single vs multi-zone](/guides/single-zone-vs-multi-zone-mini-split) · [Heat pump vs AC](/guides/heat-pump-vs-air-conditioner) · [Mini-split vs window](/guides/mini-split-vs-window-ac) · [SEER](/guides/seer-ratings-explained)',
          'Spaces: [Tiny home](/guides/mini-split-sizing-for-tiny-homes) · [RV](/guides/what-size-mini-split-for-rv) · [Shed](/guides/she-shed-heating-and-cooling) · [Cottage](/guides/cottage-mini-split-guide) · [Garage](/guides/mini-split-for-garage-workshop)',
          'DIY: [Electrical](/guides/mini-split-electrical-requirements) · [Placement](/guides/mini-split-indoor-outdoor-placement) · [Pre-charged kits](/guides/precharged-diy-mini-split-kits-explained) · [Install basics](/guides/diy-mini-split-installation-basics)',
          'Hire: [When to hire](/guides/when-to-hire-mini-split-installer)',
          'Alt DIY: [Window AC sizing](/guides/window-ac-btu-sizing) · [Install window AC](/guides/how-to-install-window-ac-safely) · [Portable vs window](/guides/portable-ac-vs-window-ac)',
        ],
        paragraphs: [
          'Calculators: [mini-split](/mini-split-calculator), [BTU](/btu-calculator), [window AC](/window-ac-calculator), [RV](/mini-split-for-rv), [tiny home](/mini-split-for-tiny-home), [shed](/mini-split-for-shed), [garage heater](/garage-heater-btu-calculator).',
        ],
      },
      {
        heading: 'One-weekend single-zone plan (experienced DIY)',
        paragraphs: [
          'Week before: size with the calculator, order matched kit, schedule electrician if you are not comfortable with 220V, pull permit if required. Saturday: mount outdoor pad/bracket and indoor head, drill penetration, run line set and drain. Sunday: electrical disconnect, leak check, open valves or vacuum, test modes. Complex multi-zone or long line sets are rarely a weekend DIY.',
          'This roadmap is planning information — always follow the manufacturer manual and local code. Refrigerant work may require a license where you live.',
        ],
      },
    ],
    faqs: [
      {
        question: 'Can a homeowner install a mini-split themselves?',
        answer:
          'Many jurisdictions allow pre-charged DIY kits within line-length limits if electrical and mounting meet code. Vacuum/charge work and multi-zone systems often need a licensed tech. Check local rules before you buy.',
      },
      {
        question: 'What size mini-split do I need?',
        answer:
          'Start with room square footage and climate factors in our BTU or mini-split calculator, then avoid common oversizing mistakes. Match indoor and outdoor units from the same series.',
      },
      {
        question: 'Is a mini-split better than a window AC?',
        answer:
          'For year-round comfort, quieter operation, and heating, yes for many rooms. Window units win on upfront cost and simple rental installs — compare in our mini-split vs window AC guide.',
      },
    ],
  },
  {
    slug: 'mini-split-electrical-requirements',
    category: 'diy',
    title: 'Mini-Split Electrical Requirements — Breaker, Wire & Disconnect',
    description:
      'DIY electrical planning for ductless mini-splits: 110V vs 220V, breaker size, wire gauge, outdoor disconnect, and when to hire an electrician.',
    readMinutes: 9,
    toolPath: '/mini-split-calculator',
    toolLabel: 'Mini-split calculator',
    relatedGuideSlugs: [
      'diy-mini-split-project-roadmap',
      'diy-mini-split-installation-basics',
      'precharged-diy-mini-split-kits-explained',
      'when-to-hire-mini-split-installer',
    ],
    sections: [
      {
        heading: 'Read the nameplate before you buy wire',
        paragraphs: [
          'Every outdoor unit lists minimum circuit ampacity (MCA) and maximum overcurrent protection (MOCP). Those numbers — not a YouTube guess — set breaker size and wire gauge. Undersized wire is a fire risk; oversized breakers that ignore the label are a code failure.',
          'Size the equipment with the [mini-split calculator](/mini-split-calculator) first, then match electrical to that model’s installation sheet.',
        ],
      },
      {
        heading: 'Common DIY electrical checklist',
        bullets: [
          'Dedicated circuit — do not share with shop tools or a dryer',
          'Correct voltage: many 12k–24k units need 208/230V; some small kits are 115V',
          'Breaker size at or below MOCP on the nameplate',
          'Copper conductors sized for MCA and run length (voltage drop)',
          'Outdoor disconnect within sight of the condenser (local code)',
          'Whip / conduit from disconnect to unit per manufacturer',
          'Proper grounding and bonding',
        ],
        paragraphs: [
          'If your panel is full or you are unsure about load calculations, hire a licensed electrician for the circuit even if you mount the heads yourself.',
        ],
      },
      {
        heading: 'Indoor power and communication',
        paragraphs: [
          'Most ductless systems power the outdoor unit and send low-voltage or manufacturer communication cable to the indoor head — follow the wiring diagram exactly. Mixing thermostat wire gauges or skipping the disconnect “to finish Saturday” causes warranty and inspection problems.',
        ],
      },
      {
        heading: 'Next steps in the project',
        paragraphs: [
          'Plan clearances in [indoor and outdoor placement](/guides/mini-split-indoor-outdoor-placement), choose a kit type in [pre-charged DIY kits](/guides/precharged-diy-mini-split-kits-explained), then follow [install basics](/guides/diy-mini-split-installation-basics). Full map: [DIY mini-split roadmap](/guides/diy-mini-split-project-roadmap).',
        ],
      },
    ],
    faqs: [
      {
        question: 'What size breaker for a 12,000 BTU mini-split?',
        answer:
          'It depends on the model MCA/MOCP — often a 15A or 20A double-pole on 230V for smaller units, larger for higher BTU. Always use the installation manual for that SKU.',
      },
      {
        question: 'Can I plug a mini-split into a regular outlet?',
        answer:
          'Only if the manufacturer provides a corded 115V unit rated for that receptacle. Most permanent installs require hardwired dedicated circuits.',
      },
      {
        question: 'Do I need a permit for mini-split electrical?',
        answer:
          'Often yes for new 230V circuits. Check your city or county before you open the panel.',
      },
    ],
  },
  {
    slug: 'mini-split-indoor-outdoor-placement',
    category: 'diy',
    title: 'Mini-Split Indoor and Outdoor Placement — Clearances That Work',
    description:
      'Where to mount the indoor head and outdoor condenser: airflow, noise, line-set length, sun, snow, and drainage for DIY ductless installs.',
    readMinutes: 9,
    toolPath: '/mini-split-calculator',
    toolLabel: 'Mini-split calculator',
    relatedGuideSlugs: [
      'diy-mini-split-installation-basics',
      'mini-split-electrical-requirements',
      'single-zone-vs-multi-zone-mini-split',
      'diy-mini-split-project-roadmap',
    ],
    sections: [
      {
        heading: 'Indoor head — throw air, not into a corner',
        paragraphs: [
          'Mount high on an exterior wall when you can so the line set is short. Leave manufacturer clearances above, below, and beside the head. Avoid pointing supply air at a bed pillow or into a soffit that blocks the louvers.',
          'Keep the unit away from heat sources and do not install where curtains will cover the return. Confirm BTU size with the [mini-split calculator](/mini-split-calculator) before you cut the wall.',
        ],
      },
      {
        heading: 'Outdoor condenser — airflow and service access',
        bullets: [
          'Level pad or wall bracket rated for the unit weight',
          'Clearances on coil sides and rear — no stuffing into a fence corner',
          'Elevate above typical snow; leave melt and defrost drainage path',
          'Shade helps efficiency but never block airflow with a solid box',
          'Keep noise away from bedroom windows and neighbor property lines',
          'Plan disconnect location within sight of the unit',
        ],
        paragraphs: [
          'Wall brackets are popular for sheds and tiny homes where slab space is tight — still respect vibration isolation and clearances.',
        ],
      },
      {
        heading: 'Line-set path and drain',
        paragraphs: [
          'Drill the penetration with a slight downward slope to the outside so condensate does not drain into the wall. Hide lines with a cover kit if appearance matters. Stay within the pre-charged kit’s maximum length — longer runs change charge requirements (see [DIY kits](/guides/precharged-diy-mini-split-kits-explained)).',
          'Never trap the drain hose in a loop that holds water. Test drain flow on startup.',
        ],
      },
      {
        heading: 'Multi-zone placement notes',
        paragraphs: [
          'Each head needs its own good wall — a hallway dump does not cool bedrooms well. Branch boxes and longer total pipe length push many projects into [hire a pro](/guides/when-to-hire-mini-split-installer) territory. Compare [single vs multi-zone](/guides/single-zone-vs-multi-zone-mini-split) before you buy.',
        ],
      },
    ],
    faqs: [
      {
        question: 'Can I put the outdoor unit on a roof?',
        answer:
          'Only with proper structure, vibration pads, service access, and local approval. Ground or wall mounts are simpler for DIY.',
      },
      {
        question: 'How high should the indoor head be?',
        answer:
          'Follow the manual — typically high on the wall for cooling throw, with required clearance from the ceiling. Too close to the ceiling chokes return air.',
      },
      {
        question: 'Can the condenser sit under a deck?',
        answer:
          'Only if clearances and airflow are met and leaves/debris will not choke the coil. Restricted airflow kills efficiency and can trip the unit.',
      },
    ],
  },
  {
    slug: 'precharged-diy-mini-split-kits-explained',
    category: 'diy',
    title: 'Pre-Charged DIY Mini-Split Kits Explained — When They Work',
    description:
      'How pre-charged ductless kits differ from traditional vacuum-and-charge installs, line-length limits, flaring tips, and when DIY stops being a good idea.',
    readMinutes: 9,
    toolPath: '/mini-split-calculator',
    toolLabel: 'Mini-split calculator',
    relatedGuideSlugs: [
      'diy-mini-split-installation-basics',
      'mini-split-electrical-requirements',
      'when-to-hire-mini-split-installer',
      'diy-mini-split-project-roadmap',
    ],
    sections: [
      {
        heading: 'What “pre-charged” actually means',
        paragraphs: [
          'DIY-oriented kits ship with refrigerant already in the outdoor unit (and sometimes lines). If you keep the line set within the rated length and make leak-free flares, you open service valves after assembly — no vacuum pump in the best-case kit instructions.',
          'Cut a line, extend beyond the rating, or use a non-kit outdoor unit and you are back to vacuum, micron gauge, and often a license. Size the match set with the [mini-split calculator](/mini-split-calculator) before ordering a kit BTU tier.',
        ],
      },
      {
        heading: 'DIY kit success checklist',
        bullets: [
          'Indoor and outdoor are a matched pair from the same kit series',
          'Line length and lift within the sticker limits',
          'Flares cut square, deburred, torqued to spec — not “snug with channel locks”',
          'Leak check before opening valves',
          'Electrical and disconnect already correct',
          'Drain slopes out; wall hole sealed against weather',
        ],
        paragraphs: [
          'Install overview: [DIY mini-split installation basics](/guides/diy-mini-split-installation-basics). Placement: [indoor/outdoor placement](/guides/mini-split-indoor-outdoor-placement).',
        ],
      },
      {
        heading: 'When pre-charged kits are the wrong buy',
        bullets: [
          'Multi-zone with long total pipe — charge and branch complexity',
          'Need to splice or heavily customize line sets',
          'Local code forbids homeowner refrigerant work',
          'No comfort with flaring or torque specs',
        ],
        paragraphs: [
          'Hiring for vacuum and charge while you hang brackets can still save money — see [when to hire](/guides/when-to-hire-mini-split-installer).',
        ],
      },
      {
        heading: 'Warranty and realism',
        paragraphs: [
          'Register the kit, keep photos of clearances and torque, and do not skip the leak check to “get cool air tonight.” Early compressor failures from air and moisture in the lines are expensive DIY lessons.',
        ],
      },
    ],
    faqs: [
      {
        question: 'Do I need EPA certification for a DIY mini-split kit?',
        answer:
          'Rules vary. Handling refrigerants often requires certification for technicians; some pre-charged kits are marketed to homeowners. Verify your local and national rules before purchase.',
      },
      {
        question: 'Can I add line-set length to a pre-charged kit?',
        answer:
          'Usually not without adjusting charge. Exceeding the kit length is a common reason to hire a tech with scales and a vacuum pump.',
      },
      {
        question: 'Are DIY mini-splits as efficient as pro brands?',
        answer:
          'Look at SEER2/HSPF2 on the sheet, not marketing. Mid-tier DIY kits can be efficient when sized and installed correctly — see our SEER guide.',
      },
    ],
  },
  {
    slug: 'when-to-hire-mini-split-installer',
    category: 'diy',
    title: 'When to Hire a Mini-Split Installer — DIY vs Pro',
    description:
      'Honest guide to DIY vs professional ductless install: multi-zone, long line sets, electrical, permits, and warranties. Still size BTU yourself with free calculators.',
    readMinutes: 9,
    toolPath: '/mini-split-calculator',
    toolLabel: 'Mini-split calculator',
    relatedGuideSlugs: [
      'diy-mini-split-project-roadmap',
      'precharged-diy-mini-split-kits-explained',
      'diy-mini-split-installation-basics',
      'common-mini-split-sizing-mistakes',
    ],
    sections: [
      {
        heading: 'DIY wins on simple single-zone kits',
        paragraphs: [
          'A single head, short line set, accessible exterior wall, and clear electrical path is the sweet spot for experienced homeowners using a pre-charged kit. You should still size the load yourself with the [mini-split calculator](/mini-split-calculator) so the contractor or kit BTU is not a guess.',
        ],
      },
      {
        heading: 'Strong reasons to hire',
        bullets: [
          'Multi-zone systems with branch boxes or long total piping',
          'Line sets longer than DIY kit ratings — weigh-in charge required',
          'Panel upgrades, long 230V runs, or unsure electrical work',
          'Two-story line routing, brick cores, or finished interiors you cannot risk',
          'Warranty that requires licensed startup',
          'Commercial or permit inspections that expect a licensed HVAC contractor',
        ],
        paragraphs: [
          'Hybrid approach: you hang the pad and indoor bracket; the tech flares, vacuums, and starts up. That still beats paying for a wrong-sized unit.',
        ],
      },
      {
        heading: 'What to ask a pro before you sign',
        bullets: [
          'Manual J or load calculation — or will they use your room measurements?',
          'SEER2 / HSPF2 equipment options and line-set materials',
          'Who pulls the permit and electrical',
          'Warranty labor vs parts, and startup checklist',
        ],
        paragraphs: [
          'Avoid [common sizing mistakes](/guides/common-mini-split-sizing-mistakes) even when hiring — oversized heads short-cycle and feel clammy.',
        ],
      },
      {
        heading: 'Still DIY? Follow the full map',
        paragraphs: [
          'Roadmap: [DIY mini-split project](/guides/diy-mini-split-project-roadmap). Electrical: [requirements](/guides/mini-split-electrical-requirements). Kits: [pre-charged explained](/guides/precharged-diy-mini-split-kits-explained). Install overview: [basics](/guides/diy-mini-split-installation-basics).',
        ],
      },
    ],
    faqs: [
      {
        question: 'Is DIY mini-split cheaper than a pro?',
        answer:
          'Equipment can be cheaper DIY, but mistakes (leaks, wrong wire, wrong BTU) erase the savings. Factor permit, electrical, and your time.',
      },
      {
        question: 'Can I buy equipment online and hire install only?',
        answer:
          'Sometimes — many pros prefer to sell matched equipment they warranty. Ask before you order a random online kit.',
      },
      {
        question: 'Do I need a pro for a shed or garage mini-split?',
        answer:
          'Simple single-zone shed kits are common DIY projects if electrical is correct. Garages with dust and long runs still benefit from pro line work — see our garage mini-split guide.',
      },
    ],
  },
  {
    slug: 'how-to-install-window-ac-safely',
    category: 'diy',
    title: 'How to Install a Window AC Safely — Support, Seal & Power',
    description:
      'DIY window air conditioner install: sash support, brackets, sealing gaps, correct outlet circuit, and tipping hazards. Size BTU before you buy.',
    readMinutes: 9,
    toolPath: '/window-ac-calculator',
    toolLabel: 'Window AC calculator',
    relatedGuideSlugs: [
      'window-ac-btu-sizing',
      'mini-split-vs-window-ac',
      'portable-ac-vs-window-ac',
      'diy-mini-split-project-roadmap',
    ],
    sections: [
      {
        heading: 'Size first — then mount',
        paragraphs: [
          'A unit that is too large short-cycles; too small never catches up. Use the [window AC calculator](/window-ac-calculator) and [window AC BTU sizing](/guides/window-ac-btu-sizing) before you haul a 70 lb chassis up a ladder.',
          'If you want quiet year-round heat and cool, compare [mini-split vs window AC](/guides/mini-split-vs-window-ac) before cutting foam side panels.',
        ],
      },
      {
        heading: 'Safe mounting checklist',
        bullets: [
          'Window and sill in good condition — rotten wood cannot hold the unit',
          'Exterior bracket or sash support rated for the unit weight (many cities require brackets)',
          'Unit tilts slightly down toward outdoors for drainage',
          'Side accordion panels sealed; no big air gaps',
          'Sash locked or security bar so the unit cannot fall inward',
          'Never support the chassis with only thin plastic side panels',
        ],
        paragraphs: [
          'Two-person lift for anything over small 5k–8k units. Falling window ACs are a real injury and liability risk.',
        ],
      },
      {
        heading: 'Power and condensation',
        bullets: [
          'Plug into a proper grounded outlet on a circuit that is not overloaded',
          'Avoid cheap extension cords — heat and voltage drop kill compressors',
          'Follow the manual for drip vs drain-plug setups',
          'Keep furniture and curtains off the front grille',
        ],
        paragraphs: [
          'Portable units avoid the window chassis but bring hose and efficiency tradeoffs — see [portable vs window](/guides/portable-ac-vs-window-ac).',
        ],
      },
      {
        heading: 'When a window unit is the wrong DIY',
        paragraphs: [
          'Upper-story installs without proper brackets, casement windows without kits, HOA bans, or rooms that need heat in winter are better served by a ductless plan — start at the [DIY mini-split roadmap](/guides/diy-mini-split-project-roadmap).',
        ],
      },
    ],
    faqs: [
      {
        question: 'Do I need a bracket for a window AC?',
        answer:
          'Many manufacturers and local codes say yes for safety. Side panels alone are not a structural support. Use an approved bracket or support kit.',
      },
      {
        question: 'Can I install a window AC in a sliding window?',
        answer:
          'Only with a kit designed for horizontal sliders or casements. Forcing a vertical-sash unit sideways is unsafe.',
      },
      {
        question: 'Why does my window AC drip inside?',
        answer:
          'Usually wrong tilt (should drain outdoors), clogged drain, or extreme humidity. Check the install angle and clean the base per the manual.',
      },
    ],
  },
];

export function getGuideBySlug(slug: string): Guide | undefined {
  return GUIDES.find((g) => g.slug === slug);
}

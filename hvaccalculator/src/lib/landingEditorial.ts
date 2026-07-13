export interface LandingEditorialSection {
  heading: string;
  paragraphs: string[];
}

export interface LandingEditorial {
  intro?: string;
  sections: LandingEditorialSection[];
}

export const LANDING_EDITORIAL: Record<string, LandingEditorial> = {
  'btu-calculator': {
    intro:
      'British Thermal Units (BTU) measure how much heat an air conditioner must remove per hour. Enter your room dimensions, insulation, and climate zone — we estimate cooling load and round up to common mini-split sizes.',
    sections: [
      {
        heading: 'The 20–30 BTU per square foot rule',
        paragraphs: [
          'A quick planning shortcut: multiply room square footage by 20–30 BTU for cooling. A 200 sq ft bedroom at 25 BTU/sq ft needs about 5,000 BTU calculated load — but retail units start at 6,000–9,000 BTU, so you buy the next standard size up.',
          'Our [BTU per square foot guide](/guides/btu-per-square-foot-explained) explains when to use the low or high end of that range based on insulation and sun exposure.',
        ],
      },
      {
        heading: 'What this calculator adjusts for',
        paragraphs: [
          'Ceiling height above 8 ft adds volume. Sunny west-facing walls add load. Each occupant beyond two adds roughly 600 BTU. Kitchen appliances add sensible heat — toggle kitchen load for open living/kitchen spaces.',
          'This is a DIY planning estimate, not a Manual J load calculation. Permits and whole-house central HVAC need a licensed pro.',
        ],
      },
      {
        heading: 'BTU vs tons vs mini-split packaging',
        paragraphs: [
          '12,000 BTU = 1 ton of cooling. Mini-splits are sold as 9k, 12k, 18k, and 24k BTU heads. Use our [tonnage calculator](/tonnage-calculator) to see both numbers side by side.',
        ],
      },
    ],
  },

  'mini-split-calculator': {
    intro:
      'Ductless mini-splits are sized in BTU per indoor head. This calculator totals your space load and recommends the next standard single-zone size — 9,000, 12,000, 18,000, or 24,000 BTU.',
    sections: [
      {
        heading: 'Why mini-split sizing is different from central AC',
        paragraphs: [
          'Central systems split capacity across ducts and multiple rooms. A single-zone mini-split must handle the entire connected space alone — open floor plans work; closed floor plans often need one head per primary room or a multi-zone system.',
          'Compare options in our [single-zone vs multi-zone guide](/guides/single-zone-vs-multi-zone-mini-split) before you buy one large head for a whole house.',
        ],
      },
      {
        heading: 'Inverter mini-splits and oversizing',
        paragraphs: [
          'Modern inverter units modulate down on mild days. Slightly oversizing a bedroom is common because retail minimums are 9,000 BTU. Severely oversizing a small insulated room causes short cycling and poor dehumidification — size to calculated load, not “biggest available.”',
          'See [common mini-split sizing mistakes](/guides/common-mini-split-sizing-mistakes) before you commit to a unit.',
        ],
      },
      {
        heading: 'Heat pump heating BTU',
        paragraphs: [
          'Most mini-splits sold today heat and cool. Our heating estimate is for planning only — cold-climate performance depends on HSPF rating and install quality. Northern cabins may need supplemental heat below design temperature.',
        ],
      },
    ],
  },

  'ac-size-calculator': {
    intro:
      '“What size air conditioner do I need?” usually means BTU for a bedroom or living space. Enter dimensions and we show calculated load plus the practical retail size — window unit, portable, or mini-split.',
    sections: [
      {
        heading: 'Why calculated BTU differs from store shelf labels',
        paragraphs: [
          'A 10×10 bedroom calculates to ~2,500 BTU but stores sell 6,000–9,000 BTU as the minimum practical unit. That is normal — the unit runs at part load most of the time on inverter or cycling compressors.',
          'For a 12×12 bedroom (144 sq ft), a [9,000 BTU mini-split](/room-ac-calculator) or equivalent window unit is the standard recommendation.',
        ],
      },
      {
        heading: 'Oversized AC problems',
        paragraphs: [
          'Too much capacity cools the room in minutes without running long enough to remove humidity. You get a cold, clammy space and higher bills. Match rated BTU to calculated load — do not double “just to be safe.”',
          'Our [mini-split vs window AC guide](/guides/mini-split-vs-window-ac) compares efficiency and noise at the same BTU rating.',
        ],
      },
    ],
  },

  'what-size-ac-do-i-need': {
    intro:
      'Living rooms and open areas need more BTU per square foot than bedrooms — more windows, people, and electronics. Enter your space and toggle kitchen load if cooking appliances share the zone.',
    sections: [
      {
        heading: 'Open floor plans and single-zone limits',
        paragraphs: [
          'One mini-split head can cool an open kitchen-living-dining area if airflow reaches all corners. Hallways and closed bedrooms off that zone may stay warm — our [open floor plan sizing guide](/guides/how-to-size-ac-for-open-floor-plan) covers when one head is enough.',
          '500 sq ft × 25 BTU = 12,500 BTU baseline — round up to 12,000 or 18,000 BTU depending on sun and ceiling height.',
        ],
      },
      {
        heading: 'Occupants and kitchen load',
        paragraphs: [
          'Each person beyond the first two adds sensible heat. A range or oven running during dinner adds spike load — enable kitchen load in settings for combined kitchen-living spaces.',
        ],
      },
    ],
  },

  'mini-split-for-rv': {
    intro:
      'RVs and campers lose heat through thin walls, single-pane windows, and constant air leakage. We apply higher BTU-per-sq-ft factors and default to poor insulation — realistic for skoolies, fifth-wheels, and travel trailers.',
    sections: [
      {
        heading: 'Typical RV BTU ranges',
        paragraphs: [
          'A 30 ft RV with 200–250 sq ft of cooled living space often needs 7,000–9,000 BTU calculated — buy 9,000 BTU minimum; 12,000 BTU is common for full-timing in hot, humid climates.',
          'Read [what size mini-split for an RV](/guides/what-size-mini-split-for-rv) and [RV installation options](/guides/rv-mini-split-installation-options) before cutting holes in the shell.',
        ],
      },
      {
        heading: 'Power planning',
        paragraphs: [
          '9k–12k BTU units typically need 15–20A at 110V or 220V depending on model. Full-timing requires 30A shore power or adequate inverter/generator capacity — electrical planning is as important as BTU sizing.',
        ],
      },
      {
        heading: 'Roof AC vs ductless',
        paragraphs: [
          'Roof units are easier to install but noisier and less efficient at dehumidifying. Mini-splits are quieter and perform better in humid climates but need custom condenser mounting and line-set routing.',
        ],
      },
    ],
  },

  'mini-split-for-tiny-home': {
    intro:
      'Well-built tiny homes often insulate better per square foot than average stick-built houses. We start with a moderate BTU factor but add kitchen load for galley layouts in 200–400 sq ft footprints.',
    sections: [
      {
        heading: 'One head for the whole tiny home',
        paragraphs: [
          'Most tiny homes use a single 9k–18k BTU head in the main living area. Sleeping lofts need airflow — a ceiling fan or ductless multi-head setup if the loft is isolated.',
          'Our [tiny home mini-split sizing guide](/guides/mini-split-sizing-for-tiny-homes) and [insulation guide](/guides/insulating-tiny-home-for-hvac) pair with this calculator.',
        ],
      },
      {
        heading: 'THOW vs foundation-built',
        paragraphs: [
          'Tiny homes on wheels may leak air at the hitch flex and wheel wells. If the shell feels drafty, set insulation to “poor” or upsize one BTU step even if walls are well insulated.',
        ],
      },
    ],
  },

  'mini-split-for-shed': {
    intro:
      'Backyard she-sheds, art studios, and workshop sheds are often lightly insulated kit buildings. Enter footprint — typical 10×12 to 12×20 — and set sun exposure if the long wall faces west.',
    sections: [
      {
        heading: 'Small sheds and minimum unit sizes',
        paragraphs: [
          'A 10×12 shed (120 sq ft) may calculate to 3,800–4,500 BTU — retail minimums are 9,000 BTU. Inverter mini-splits modulate down and are acceptable; avoid grossly oversized non-inverter units.',
          'Insulate before you size: spray foam or rigid board in walls and roof cuts required BTU dramatically. See [she-shed heating and cooling](/guides/she-shed-heating-and-cooling).',
        ],
      },
      {
        heading: 'Electrical and permits',
        paragraphs: [
          'Most 9k–12k BTU units need a dedicated 15–20A circuit; larger heads need 220V. Check local code — backyard structures often require permits for HVAC electrical work.',
        ],
      },
    ],
  },

  'mini-split-for-cottage': {
    intro:
      'Seasonal cottages and lake cabins range from insulated four-season builds to drafty log camps. Pick insulation level honestly — charming log walls often perform like “poor” even when picturesque.',
    sections: [
      {
        heading: '600 sq ft cabin example',
        paragraphs: [
          '600 sq ft with average cottage insulation often calculates to 15,000–18,000 BTU. An 18,000 BTU single-zone head or two smaller heads for upstairs/downstairs are common approaches.',
          'Our [cottage mini-split guide](/guides/cottage-mini-split-guide) covers shoulder-season heat pump use and winterizing.',
        ],
      },
      {
        heading: 'Seasonal vs year-round',
        paragraphs: [
          'Heat pumps work well for spring and fall. Very cold climates need cold-climate HSPF ratings or supplemental heat. Many owners set heat to 45–50°F when away or fully winterize in freeze zones.',
        ],
      },
    ],
  },

  'room-ac-calculator': {
    intro:
      'Bedrooms need less BTU per sq ft than kitchens or sunrooms — fewer appliances, often smaller windows, and less daytime occupancy. Enter dimensions and mark shaded if the room gets little direct sun.',
    sections: [
      {
        heading: 'Bedroom sizing examples',
        paragraphs: [
          'A 10×10 bedroom (100 sq ft) calculates to ~2,500 BTU — practical minimums are 6,000–9,000 BTU. A 9,000 BTU unit is the most common choice for comfort and humidity control while sleeping.',
          'Master bedrooms over 350 sq ft often need 12,000 BTU. See [how many BTU for a bedroom](/guides/how-many-btu-for-bedroom) for more examples.',
        ],
      },
      {
        heading: 'Portable vs mini-split for bedrooms',
        paragraphs: [
          'Portables are easier to install but noisier and vent hot air through a window kit. Mini-splits cost more upfront but are quieter — size both using the same BTU load from this calculator.',
        ],
      },
    ],
  },

  'tonnage-calculator': {
    intro:
      'Residential AC capacity is often quoted in tons — 1 ton = 12,000 BTU per hour. We calculate your room load in BTU and show matching tonnage plus the ductless head size you would buy.',
    sections: [
      {
        heading: 'BTU to tons conversion',
        paragraphs: [
          'Divide BTU by 12,000. A 12,000 BTU unit is 1 ton; 18,000 BTU is 1.5 tons; 24,000 BTU is 2 tons. Mini-split boxes usually list BTU — tonnage is more common on central systems.',
        ],
      },
      {
        heading: 'Whole-house vs single-room',
        paragraphs: [
          '“What ton AC for 1,500 sq ft?” requires room-by-room Manual J — not one multiplier. Rough planning for average homes is 2–3 tons total split across zones. This tool sizes one room or zone at a time.',
          'For room-level BTU without tonnage framing, use the [BTU calculator](/btu-calculator) or [mini-split calculator](/mini-split-calculator).',
        ],
      },
    ],
  },

  'window-ac-calculator': {
    intro:
      'Window air conditioners are sold in fixed BTU steps — 5,000 through 15,000+ BTU. We calculate your room load so you pick a unit that cools and dehumidifies without short-cycling.',
    sections: [
      {
        heading: 'Bedroom and office sizing',
        paragraphs: [
          'A 10×12 bedroom calculates to ~3,600 BTU but store minimums are 5,000–6,000 BTU. A 9,000–10,000 BTU window unit is the practical sweet spot for most sleeping rooms.',
          'Compare ductless options in our [mini-split vs window AC guide](/guides/mini-split-vs-window-ac) — same BTU math, different install and noise.',
        ],
      },
      {
        heading: 'Fitting the window opening',
        paragraphs: [
          'Rated BTU must match calculated load — do not buy the largest unit that fits the sash. Oversized window units cool fast but leave humidity high.',
        ],
      },
    ],
  },

  'garage-heater-btu-calculator': {
    intro:
      'Garages and workshops are poorly insulated with large overhead doors — we default to garage/workshop application type with lower insulation factors. Use heating BTU for winter comfort planning.',
    sections: [
      {
        heading: 'Two-car garage example',
        paragraphs: [
          'A 24×24 garage with 8 ft walls is 576 sq ft. Poorly insulated shops often need 17,000–20,000+ BTU for comfortable winter work — insulate the door and ceiling first to cut required capacity.',
          'See [mini-split for garage workshop](/guides/mini-split-for-garage-workshop) for year-round heat pump options vs dedicated garage heaters.',
        ],
      },
      {
        heading: 'Propane, electric, and infrared',
        paragraphs: [
          'BTU output is comparable when rated equally. Ventilation and carbon monoxide safety matter for fuel-burning units — follow manufacturer clearance requirements.',
        ],
      },
    ],
  },

  'whole-house-btu-calculator': {
    intro:
      'Whole-house cooling is not one multiplier — add each major zone as a separate space and total the load. Use results for planning; licensed pros run Manual J for permits and equipment selection.',
    sections: [
      {
        heading: 'Multi-zone planning',
        paragraphs: [
          'Open kitchen-living areas may share one zone; closed bedrooms usually need their own heads or ducts. Our [open floor plan sizing guide](/guides/how-to-size-ac-for-open-floor-plan) explains single-head limits.',
          'Rough planning for a 1,500 sq ft home often lands at 24,000–36,000 BTU total — split across zones or a 2–3 ton central system.',
        ],
      },
      {
        heading: 'When to hire a pro',
        paragraphs: [
          'This tool totals DIY estimates. Permits, duct design, and refrigerant work require licensed HVAC contractors and formal load calculations.',
        ],
      },
    ],
  },
};

export function getLandingEditorial(slug: string): LandingEditorial | undefined {
  return LANDING_EDITORIAL[slug];
}

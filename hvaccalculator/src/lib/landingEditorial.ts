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
          'Electronics, TVs, and game consoles add smaller but real loads in media rooms — if the space feels warm with people and screens on, bump sun exposure or occupants rather than doubling BTU “just in case.”',
        ],
      },
      {
        heading: 'Room-size examples (planning only)',
        paragraphs: [
          '12×12 living nook (~144 sq ft): often 9,000 BTU retail after load math. 15×20 open living (~300 sq ft) with kitchen load: commonly 12,000–18,000 BTU. 20×25 great room (~500 sq ft) with west glass: often 18,000–24,000 BTU or two heads.',
          'These are DIY planning ranges. Whole-house permits and equipment selection need a Manual J from a licensed pro — use this page to shortlist sizes before you shop.',
        ],
      },
      {
        heading: 'Climate and when Manual J is required',
        paragraphs: [
          'Hot-humid zones need longer run time for dehumidification — prefer right-sized inverter equipment over oversized window boxes. Dry desert heat is more about peak BTU than moisture.',
          'If you are replacing a central system, adding a heat pump, or pulling a permit, stop at this estimate and hire Manual J. For winter heating load in a garage or furnace zone, see the [garage heater BTU calculator](/garage-heater-btu-calculator) or [furnace BTU calculator](/furnace-btu-calculator).',
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
        heading: 'Power planning — 30A vs 50A and soft start',
        paragraphs: [
          '9k–12k BTU units typically need 15–20A at 110V or 220V depending on model. Full-timing requires 30A shore power or adequate inverter/generator capacity — electrical planning is as important as BTU sizing.',
          'Soft-start kits lower compressor inrush so a 30A pedestal or generator can start a 12k unit that would otherwise trip. Confirm amp draw on the nameplate and whether your kit is 120V or 240V before you buy.',
          'Boondocking on solar/inverter? Size continuous inverter watts above running load and surge above locked-rotor amps — or stick with a roof AC that matches your existing converter wiring.',
        ],
      },
      {
        heading: 'Roof AC vs ductless',
        paragraphs: [
          'Roof units are easier to install but noisier and less efficient at dehumidifying. Mini-splits are quieter and perform better in humid climates but need custom condenser mounting and line-set routing.',
          'Condenser placement must stay clear of road spray, propane tanks, and slide-outs. Frame mounts and vibration isolation matter as much as BTU — poorly mounted outdoor units fail early on travel days.',
        ],
      },
      {
        heading: 'Climate upsizing for full-timers',
        paragraphs: [
          'Desert and Gulf Coast full-timers often upsizing one retail step above calculated cooling load for peak afternoon heat. Do not double capacity — humidity control still needs run time.',
          'Winter camping below freezing needs a cold-climate heat pump rating or supplemental heat. See [heat pump vs air conditioner](/guides/heat-pump-vs-air-conditioner) and the [heat pump cold climate calculator](/heat-pump-cold-climate-calculator) for heating-side planning.',
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
        heading: 'Fitting the window opening and egress',
        paragraphs: [
          'Rated BTU must match calculated load — do not buy the largest unit that fits the sash. Oversized window units cool fast but leave humidity high.',
          'Bedrooms used for sleeping must keep an egress path. Measure clear opening height and width after the bracket is installed — some jurisdictions treat a blocked sash as a safety issue.',
        ],
      },
      {
        heading: 'Humidity, dual-hose portables, and ENERGY STAR charts',
        paragraphs: [
          'Window units usually dehumidify better than single-hose portables because heat leaves through the exterior half of the chassis. Dual-hose portables are closer but still noisier with the compressor indoors — see [portable vs window AC](/guides/portable-ac-vs-window-ac).',
          'ENERGY STAR room-AC charts are a solid starting table; this calculator adjusts for ceiling height, sun, occupants, and kitchen load beyond a flat sq-ft chart. For a deeper walkthrough, read [window AC BTU sizing](/guides/window-ac-btu-sizing).',
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
          'Infrared heaters warm objects and people, not just air — useful for spot work zones. Forced-air units heat the whole volume faster but need more fuel when the door opens frequently.',
        ],
      },
      {
        heading: 'Insulate before you upsize',
        paragraphs: [
          'A poorly sealed overhead door and uninsulated ceiling can double the heater BTU you need. Rigid foam on the door, weatherstripping, and attic/ceiling insulation often pay back faster than a larger burner.',
          'Attached garages next to living space should keep combustion appliances code-compliant and sealed from living air. When in doubt, use electric or a heat pump and follow local clearances.',
        ],
      },
      {
        heading: 'Related winter sizing tools',
        paragraphs: [
          'Planning whole-home furnace capacity? Use the [furnace BTU calculator](/furnace-btu-calculator). Comparing cold-climate heat pumps vs backup heat? Open the [heat pump cold climate calculator](/heat-pump-cold-climate-calculator).',
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

  'ac-cost-to-run-calculator': {
    intro:
      'Estimate what it costs to run an air conditioner from SEER (or EER), capacity, hours, and your electric rate. Useful for comparing window units, portable ACs, and mini-splits before you buy.',
    sections: [
      {
        heading: 'How SEER turns into a bill estimate',
        paragraphs: [
          'Cooling energy use scales with BTU capacity and hours of operation, then divides by efficiency (SEER/EER). Higher SEER means fewer kWh for the same cooling — enter your utility $/kWh for a local monthly estimate.',
          'Size the unit first with the [BTU calculator](/btu-calculator) or [mini-split calculator](/mini-split-calculator); an oversized short-cycling unit can cost more than a right-sized efficient one.',
        ],
      },
      {
        heading: 'SEER vs SEER2 on the label',
        paragraphs: [
          'SEER2 uses updated test conditions and usually prints a lower number than legacy SEER for the same hardware. Enter the rating printed on your equipment — do not mix SEER and SEER2 in one comparison without converting.',
          'When shopping, compare SEER2-to-SEER2 (or SEER-to-SEER). The compare field on this page is for same-scale ratings so monthly savings stay honest.',
        ],
      },
      {
        heading: 'Hours and climate matter more than sticker SEER',
        paragraphs: [
          'A high-SEER unit in a mild climate with short cooling seasons may cost less annually than a mid-SEER unit run 12 hours a day in a hot region. Use realistic daily hours for your home, not nameplate maximum.',
          'Planning a ductless install? Walk electrical, placement, and kit choices in the [DIY mini-split project roadmap](/guides/diy-mini-split-project-roadmap).',
        ],
      },
      {
        heading: 'What this estimate leaves out',
        paragraphs: [
          'We model compressor energy for planning — not standby power, fans on other equipment, or time-of-use rate tiers. Treat the result as a comparison tool between units, not a utility bill guarantee.',
        ],
      },
    ],
  },

  'furnace-btu-calculator': {
    intro:
      'Furnace and heating BTU planning starts with heated square footage, insulation, and climate. Enter the zone you want warm — we estimate heating load for DIY comparison before you talk to a HVAC pro.',
    sections: [
      {
        heading: 'Heating BTU is not cooling BTU',
        paragraphs: [
          'Cooling load removes heat and moisture; heating load replaces heat lost through walls, windows, and air leaks. Cold climates and leaky shells need more heating BTU per sq ft than the cooling number for the same room.',
          'Use this page for furnace, boiler, or electric heat planning. For ductless winter performance, pair results with the [heat pump cold climate calculator](/heat-pump-cold-climate-calculator).',
        ],
      },
      {
        heading: 'Worked examples',
        paragraphs: [
          'A 1,200 sq ft ranch with average insulation in a cold climate often lands near 40,000–60,000 BTU input for whole-home planning — layout and windows swing that range. A finished basement zone of 400 sq ft may need its own 15,000–25,000 BTU of capacity depending on below-grade losses.',
          'Garages and workshops are worse: large doors and thin walls dominate. Size those with the [garage heater BTU calculator](/garage-heater-btu-calculator) instead of a living-room factor.',
        ],
      },
      {
        heading: 'AFUE, input vs output, and Manual J',
        paragraphs: [
          'Furnace nameplates list input BTU and AFUE. Output ≈ input × AFUE. An 80,000 BTU input furnace at 95% AFUE delivers about 76,000 BTU of heat — shop output against your load, not marketing input alone.',
          'This tool is a DIY planning estimate. Permits, gas-line sizing, and final equipment selection need Manual J / Manual S from a licensed contractor.',
        ],
      },
      {
        heading: 'When a heat pump replaces the furnace',
        paragraphs: [
          'Mild climates often run heat pumps as primary heat. Cold-climate models still need honest design temperatures — see [heat pump vs air conditioner](/guides/heat-pump-vs-air-conditioner) before you rip out a working furnace.',
        ],
      },
    ],
  },

  'heat-pump-cold-climate-calculator': {
    intro:
      'Cold-climate heat pumps keep capacity longer as outdoor temperatures drop — but design temperature still decides whether you need backup heat. Enter your space for a planning BTU estimate, then check HSPF / HSPF2 on the label.',
    sections: [
      {
        heading: 'Why cold-climate ratings matter',
        paragraphs: [
          'Standard heat pumps lose capacity below freezing. Cold-climate and hyper-heat models are tested to deliver more of their rated heat at 5°F / −15°C and below. Always read capacity tables at your design temperature — not just nominal 47°F ratings.',
          'HSPF (and HSPF2) measure seasonal heating efficiency. Higher is better for bills; capacity at design temp decides whether the house stays warm without strips or a furnace.',
        ],
      },
      {
        heading: 'Backup heat decision tree',
        paragraphs: [
          'If calculated heating load at design temp exceeds the heat pump’s published capacity, you need dual fuel, electric strips, or a furnace backup. Oversizing cooling to chase winter heat causes summer short-cycling — size for both seasons honestly.',
          'Compare cooling-side math on the [mini-split calculator](/mini-split-calculator) and winter furnace planning on the [furnace BTU calculator](/furnace-btu-calculator).',
        ],
      },
      {
        heading: 'Mini-split vs ducted cold-climate systems',
        paragraphs: [
          'Ductless heads are common for additions, cottages, and zone upgrades. Whole-home cold-climate heat pumps may be ducted. Either way, Manual J still applies for permits and rebates that require load calculations.',
          'Cottages and seasonal homes: see the [cottage mini-split guide](/guides/cottage-mini-split-guide). Garages: [mini-split for garage workshop](/guides/mini-split-for-garage-workshop).',
        ],
      },
      {
        heading: 'Planning vs installer design',
        paragraphs: [
          'Use this calculator to shortlist equipment class and talk to installers with numbers. Final selection needs site design temperature, envelope details, and manufacturer capacity tables — not a single online multiplier.',
        ],
      },
    ],
  },
};

export function getLandingEditorial(slug: string): LandingEditorial | undefined {
  return LANDING_EDITORIAL[slug];
}

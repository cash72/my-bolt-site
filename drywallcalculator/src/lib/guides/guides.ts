import type { Guide } from './types';

export const GUIDES: Guide[] = [
  {
    slug: 'how-much-drywall-for-a-room',
    category: 'planning',
    title: 'How Much Drywall Do I Need for a Room?',
    description:
      'Complete guide to calculating drywall sheets for walls and ceilings. Perimeter formulas, door and window deductions, waste percentages, and real room examples for DIY basement and bedroom projects.',
    readMinutes: 10,
    toolPath: '/drywall-calculator',
    toolLabel: 'Drywall calculator',
    relatedGuideSlugs: [
      'drywall-sheet-sizes-explained',
      'how-much-drywall-waste-to-add',
      'estimating-drywall-screws-and-compound',
    ],
    sections: [
      {
        heading: 'Wall area formula for rectangular rooms',
        paragraphs: [
          'Drywall quantity starts with wall square footage. For a standard rectangular room, wall area equals perimeter multiplied by ceiling height: Wall sq ft = 2 × (length + width) × ceiling height.',
          'Example: a 12 ft × 14 ft bedroom with 8 ft ceilings has perimeter 52 ft. Wall area = 52 × 8 = 416 sq ft before openings. A 10 ft × 10 ft closet with 8 ft ceilings has 320 sq ft of wall — about nine sheets of 4×8 drywall with waste.',
          'Ceiling drywall is calculated separately: ceiling sq ft = length × width. A 12×14 room adds 168 sq ft on top of wall area when you hang both surfaces.',
        ],
      },
      {
        heading: 'Deducting doors, windows, and openings',
        paragraphs: [
          'Subtract rough openings so you do not over-buy. Rule of thumb for planning: standard interior door ≈ 20 sq ft, standard window ≈ 15 sq ft, double door or slider ≈ 40 sq ft.',
          'For a precise takeoff, measure each opening (width × height) and subtract from total wall area. Large pass-throughs, fireplace bump-outs, and stairwells need individual measurements — our calculator accepts custom deduction per room.',
        ],
        bullets: [
          'Single interior door (32×80): ~18–21 sq ft',
          'Window 3×4 ft: ~12 sq ft',
          'Garage service door: ~40 sq ft',
          'Skip tiny openings under 2 sq ft — waste covers them',
        ],
      },
      {
        heading: 'Converting square feet to sheet count',
        paragraphs: [
          'Divide net area (plus waste) by sheet size. A 4×8 sheet covers 32 sq ft; a 4×12 covers 48 sq ft. Always round up to whole sheets — lumber yards do not sell half sheets.',
          '416 sq ft of wall + 10% waste = 458 sq ft ÷ 32 = 14.3 → buy 15 sheets of 4×8. Switching to 4×12 sheets on long walls can drop the sheet count and reduce horizontal seams.',
        ],
      },
      {
        heading: 'Multi-room projects and ordering',
        paragraphs: [
          'Add each room separately, then total sheets for one lumber-yard trip. Match sheet thickness and type (standard vs moisture-resistant) across the job so texture and paint absorb the same.',
          'Use our [drywall calculator](/drywall-calculator) for up to five rooms, ceiling toggle, custom sheet dimensions, and a copyable shopping list with screw and compound estimates.',
        ],
      },
    ],
    faqs: [
      {
        question: 'How many drywall sheets for a 12×12 room?',
        answer:
          'With 8 ft ceilings and no large openings, wall area is about 384 sq ft. At 10% waste and 32 sq ft per 4×8 sheet, you need roughly 14 sheets for walls only. Add four more sheets if you include an 8 ft ceiling.',
      },
      {
        question: 'Do I count both sides of a wall?',
        answer:
          'Only if you are drywalling both sides in the same project phase. Shared walls between rooms are often drywalled from one side at a time during construction. For a single-room reno, count the surfaces you will actually hang.',
      },
      {
        question: 'How much extra drywall should I buy?',
        answer:
          'Add 10% waste for simple rectangular rooms, 12–15% for rooms with many corners, soffits, or arched openings. See our waste guide for cut-loss factors on ceilings and complex layouts.',
      },
    ],
  },
  {
    slug: 'drywall-sheet-sizes-explained',
    category: 'materials',
    title: 'Drywall Sheet Sizes Explained — 4×8 vs 4×12 and More',
    description:
      'Standard drywall dimensions, square footage per sheet, when to use 4×12 or 54-inch wide board, and how sheet size affects seam count, labor, and your material estimate.',
    readMinutes: 9,
    toolPath: '/how-many-drywall-sheets',
    toolLabel: 'Sheet count calculator',
    relatedGuideSlugs: [
      'how-much-drywall-for-a-room',
      'half-inch-vs-five-eighth-drywall',
      'how-to-hang-drywall-step-by-step',
    ],
    sections: [
      {
        heading: 'Standard 4×8 drywall sheets',
        paragraphs: [
          'The most common gypsum board in North America is 4 ft wide × 8 ft long × 1/2 inch thick. Each sheet covers 32 sq ft. It fits standard 8 ft ceiling heights with one horizontal seam per wall run, or vertical orientation with fewer seams on 8 ft walls.',
          '4×8 sheets are easiest to handle solo on walls — a full sheet weighs roughly 55–70 lbs depending on thickness. Most home improvement stores stock 4×8 first; specialty lengths may be special-order.',
        ],
      },
      {
        heading: '4×10 and 4×12 for tall or long walls',
        paragraphs: [
          '4×10 sheets cover 40 sq ft; 4×12 sheets cover 48 sq ft. They reduce butt joints on long walls and work well on 9 ft or 10 ft ceilings when hung horizontally — one seam instead of two.',
          'Trade-off: longer sheets are heavier (4×12 1/2 inch can exceed 80 lbs), harder to lift alone, and may not fit in a short-bed pickup without overhang. Crews of two often prefer 4×12 on open great-room walls.',
        ],
        bullets: [
          '4×8: 32 sq ft — default for bedrooms and closets',
          '4×10: 40 sq ft — common in 9 ft ceiling homes',
          '4×12: 48 sq ft — great rooms, long basement walls',
          '54×12: 54 sq ft — 54-inch wide board for 9 ft ceilings, fewer seams',
        ],
      },
      {
        heading: 'Choosing sheet size for your project',
        paragraphs: [
          'Match sheet length to ceiling height and wall length. On a 24 ft basement wall with 8 ft ceilings, three sheets of 4×8 create two butt joints; two sheets of 4×12 create one. Fewer joints mean less taping labor but harder handling.',
          'Enter your actual sheet dimensions in the calculator — using 48 sq ft per sheet instead of 32 changes the buy list significantly on large jobs.',
        ],
      },
    ],
    faqs: [
      {
        question: 'What is the most common drywall size?',
        answer:
          '4×8 ft × 1/2 inch is standard for residential walls and many ceilings. It covers 32 square feet per sheet.',
      },
      {
        question: 'Can I use 4×12 on 8-foot ceilings?',
        answer:
          'Yes — hung vertically, one 4×12 sheet covers an 8 ft wall height with no horizontal seam on that stud bay. Hung horizontally, it spans 12 ft width with one seam at 4 ft height.',
      },
    ],
  },
  {
    slug: 'how-much-drywall-waste-to-add',
    category: 'planning',
    title: 'How Much Drywall Waste to Add — Cut Loss & Ordering',
    description:
      'Why 10% waste is the DIY default, when to bump to 15%, how ceiling cuts and complex layouts increase scrap, and how waste affects your final sheet count at the lumber yard.',
    readMinutes: 8,
    toolPath: '/drywall-calculator',
    toolLabel: 'Drywall calculator',
    relatedGuideSlugs: [
      'how-much-drywall-for-a-room',
      'drywall-sheet-sizes-explained',
      'hanging-drywall-on-ceiling',
    ],
    sections: [
      {
        heading: 'What counts as drywall waste',
        paragraphs: [
          'Waste includes off-cuts too small to reuse, mis-cuts, broken corners, and sheets damaged in transit. It also covers future patch material — keeping one sheet from the same lot for repairs avoids color and texture mismatches years later.',
          'Waste is not the same as spare inventory for a second project — it is built into the area calculation so you finish the job without an emergency supply run.',
        ],
      },
      {
        heading: 'Recommended waste percentages',
        bullets: [
          '10% — rectangular rooms, few openings, mostly wall work',
          '12% — several doors/windows, L-shaped rooms, first-time DIY',
          '15% — cathedral ceilings, many recessed lights, curved soffits',
          '15–20% — heavy ceiling work with many box cuts',
        ],
      },
      {
        heading: 'Ceiling and complex layout factors',
        paragraphs: [
          'Ceiling drywall generates more scrap per sheet than walls — light fixture boxes, fan boxes, and HVAC registers each require precise cutouts. A grid of six recessed cans on one ceiling sheet can waste 15% of that board even when cuts are careful.',
          'Stairwells, tray ceilings, and bulkheads break the simple perimeter math. Measure each plane separately and add higher waste on each non-rectangular section.',
        ],
      },
    ],
    faqs: [
      {
        question: 'Is 10% waste enough for drywall?',
        answer:
          'For a single rectangular room with 8 ft ceilings and two doors, 10% is standard. Increase to 12–15% if you are new to hanging board or the room has many openings.',
      },
      {
        question: 'Should I buy an extra sheet beyond waste?',
        answer:
          'The waste factor already pads the order. One extra sheet for long-term patches is smart on visible living-area walls — store it flat in a dry space.',
      },
    ],
  },
  {
    slug: 'how-to-hang-drywall-step-by-step',
    category: 'installation',
    title: 'How to Hang Drywall Step by Step — Walls for Beginners',
    description:
      'Stud spacing, screw patterns, sheet orientation, cutting around outlets, and the correct order to hang a room (ceiling first, then walls top-down) for a flat, code-friendly DIY install.',
    readMinutes: 12,
    toolPath: '/drywall-calculator',
    toolLabel: 'Drywall calculator',
    relatedGuideSlugs: [
      'drywall-screw-spacing-and-pattern',
      'hanging-drywall-on-ceiling',
      'drywall-taping-and-mudding-guide',
    ],
    sections: [
      {
        heading: 'Tools and materials checklist',
        bullets: [
          '4-ft T-square and utility knife for scoring',
          'Rotary cutout tool or keyhole saw for boxes',
          'Cordless screw gun with dimpler bit',
          '1-1/4 inch drywall screws (coarse thread for wood studs)',
          'Drywall lift or deadman for ceiling help',
          'Construction adhesive optional on ceilings',
        ],
      },
      {
        heading: 'Hang ceiling before walls',
        paragraphs: [
          'Professional layout hangs the ceiling first so wall sheets support the ceiling edge along the top plate. Mark stud locations on the ceiling with a chalk line or stud finder before lifting sheets.',
          'Use a drywall lift for ceiling work — solo attempts without a lift often crack corners or create uneven screw lines. Adhesive beads on joists reduce screw pops long-term when combined with screws.',
        ],
      },
      {
        heading: 'Wall sheet orientation and seams',
        paragraphs: [
          'On 8 ft walls, vertical orientation places tapered edges on studs for easier taping. Horizontal orientation can reduce seams on long walls when using 12 ft sheets.',
          'Stagger vertical seams between rows — never align butt joints on the same stud column on adjacent courses. Break joints like brickwork for structural stability and crack resistance.',
        ],
      },
      {
        heading: 'Cutting and fitting',
        paragraphs: [
          'Score the face paper with a knife, snap the gypsum core, then cut the back paper. For outlet boxes, measure from the nearest installed sheet edge, transfer to the new board, and use a rotary tool for speed.',
          'Leave a 1/4–3/8 inch gap at the floor — baseboard covers it. Tight floor contact draws moisture from concrete slabs on basement jobs.',
        ],
      },
      {
        heading: 'Screw placement basics',
        paragraphs: [
          'Screws every 12 inches on walls, 8 inches on ceilings, 3/4 inch from tapered edges. See our screw spacing guide for field vs edge patterns and code references.',
        ],
      },
    ],
    faqs: [
      {
        question: 'Do you hang drywall vertically or horizontally?',
        answer:
          'Both work. Vertical is common on 8 ft residential walls for fewer butt joints. Horizontal with 12 ft sheets reduces seams on long commercial-style walls. Match orientation within a room.',
      },
      {
        question: 'How many screws per sheet of drywall?',
        answer:
          'Roughly 32–36 screws per 4×8 wall sheet on 16-inch centers (field and edges). Ceilings need more — about 40–48 screws per 4×8 sheet.',
      },
    ],
  },
  {
    slug: 'hanging-drywall-on-ceiling',
    category: 'installation',
    title: 'Hanging Drywall on a Ceiling — Tips, Tools & Sheet Count',
    description:
      'Ceiling drywall thickness, screw spacing, lift techniques, butt joint backing, and how to estimate ceiling sheets separately from wall area for basements and room additions.',
    readMinutes: 11,
    toolPath: '/drywall-for-ceiling-calculator',
    toolLabel: 'Ceiling drywall calculator',
    relatedGuideSlugs: [
      'how-to-hang-drywall-step-by-step',
      'half-inch-vs-five-eighth-drywall',
      'how-much-drywall-waste-to-add',
    ],
    sections: [
      {
        heading: 'Ceiling area and sheet estimate',
        paragraphs: [
          'Ceiling square footage = room length × width. A 14×20 ft basement room needs 280 sq ft of ceiling board — nine sheets of 4×8 at 10% waste, or seven sheets of 4×12.',
          'Use our [ceiling drywall calculator](/drywall-for-ceiling-calculator) when walls are already estimated separately — it defaults to including ceiling area in the total sheet count.',
        ],
      },
      {
        heading: 'Thickness and fire code',
        paragraphs: [
          '1/2 inch gypsum is typical on residential ceilings with joists 16 or 24 inches on center. 5/8 inch Type X is required on some garage ceilings, multifamily demising assemblies, and commercial ratings — check local code.',
          'Heavier 5/8 board needs more screws and a stronger lift — plan help for ceiling hangs regardless of thickness.',
        ],
      },
      {
        heading: 'Installation technique',
        paragraphs: [
          'Mark joist lines perpendicular to sheet orientation. Apply adhesive in serpentine beads where allowed, then drive screws into joists — misses are obvious when the board sags between fasteners.',
          'Install perimeter screws first to hold the sheet, then fill the field. Butt joints need backer board or clip systems if they fall between joists — never leave a butt joint floating.',
        ],
        bullets: [
          'Rent a panel lift for $30–40/day on large ceilings',
          'Two-person “deadman” T-brace works for small rooms',
          'Start on the side farthest from the door for headroom while working',
          'Cut ceiling sheets 1/4 inch short on walls — walls tuck under',
        ],
      },
    ],
    faqs: [
      {
        question: 'Is ceiling drywall harder than walls?',
        answer:
          'Yes — overhead work is slower, heavier, and needs more fasteners. Budget 50–100% more labor time per sheet compared to walls.',
      },
      {
        question: 'What screw spacing for ceiling drywall?',
        answer:
          '8 inches on center in the field and along edges on ceilings; 12 inches is typical on walls. Always verify against your local building code.',
      },
    ],
  },
  {
    slug: 'drywall-taping-and-mudding-guide',
    category: 'finishing',
    title: 'Drywall Taping and Mudding — Complete Finishing Guide',
    description:
      'Paper vs mesh tape, joint compound types (all-purpose, topping, quick-set), embedding tape, feathering seams, and reaching Level 4 finish for paint-ready walls.',
    readMinutes: 13,
    toolPath: '/drywall-calculator',
    toolLabel: 'Drywall calculator',
    relatedGuideSlugs: [
      'how-many-coats-drywall-mud',
      'how-to-hang-drywall-step-by-step',
      'estimating-drywall-screws-and-compound',
    ],
    sections: [
      {
        heading: 'Tape types and where to use them',
        paragraphs: [
          'Paper tape is the standard for flat tapered seams — embed it in the first coat of all-purpose joint compound while the mud is wet. Paper resists cracking along butt joints when embedded correctly.',
          'Fiberglass mesh tape is self-adhesive and works on flat repairs and some prefilled gaps, but many pros avoid mesh on butt joints in new construction because it can telegraph cracks without proper bedding.',
        ],
      },
      {
        heading: 'Joint compound lineup',
        bullets: [
          'All-purpose (ready-mixed): embedding tape, second coat, repairs',
          'Topping compound: thinner final coats, easier sanding',
          'Quick-set (setting-type): fast coats, fill deep gaps, control dry time',
          'Lightweight mud: easier sanding, slightly less durable for embed coat',
        ],
      },
      {
        heading: 'Three-coat process overview',
        paragraphs: [
          'Coat 1 (embed): thin bed of mud, press paper tape into tapered seams, knife off excess. Coat 2 (fill): widen the seam 6–8 inches, fill screw heads. Coat 3 (finish): feather 10–12 inches, ready for sand.',
          'Butt joints need a wider build — no tapered edge means you create a gradual hump that must sand flat without scuffing face paper.',
        ],
      },
      {
        heading: 'Inside and outside corners',
        paragraphs: [
          'Inside corners: fold paper tape or use metal-reinforced corner tape; mud both sides in one pass with a corner trowel. Outside corners: metal or vinyl corner bead nailed or screwed, then three coats like a seam.',
        ],
      },
    ],
    faqs: [
      {
        question: 'How long between mud coats?',
        answer:
          'Ready-mixed compound often needs 24 hours between coats in humid basements. Quick-set mud can allow recoats in 45–90 minutes depending on set time (20, 45, 90 minute bags).',
      },
      {
        question: 'What is Level 4 drywall finish?',
        answer:
          'Level 4: two coats on seams, one on fasteners, sanded smooth — standard for flat or eggshell paint in living spaces. Texture or Level 5 may hide minor imperfections better on gloss paint.',
      },
    ],
  },
  {
    slug: 'how-many-coats-drywall-mud',
    category: 'finishing',
    title: 'How Many Coats of Drywall Mud Do You Need?',
    description:
      'Embed, fill, and finish coats explained — coat count for tapered seams vs butt joints, screw heads, corners, and when a fourth skim coat is worth the labor.',
    readMinutes: 8,
    toolPath: '/drywall-calculator',
    toolLabel: 'Drywall calculator',
    relatedGuideSlugs: [
      'drywall-taping-and-mudding-guide',
      'estimating-drywall-screws-and-compound',
      'how-to-patch-drywall-holes',
    ],
    sections: [
      {
        heading: 'Minimum coats by joint type',
        bullets: [
          'Tapered edge seam: 3 coats (embed tape, fill, finish)',
          'Butt joint: 3–4 coats (wider feather each pass)',
          'Screw heads: 2 coats minimum (dimple fill + finish)',
          'Inside corner: 3 coats with corner tool',
          'Outside corner (bead): 3 coats over bead flanges',
        ],
      },
      {
        heading: 'When to add a fourth coat',
        paragraphs: [
          'Critical lighting (window opposite a wall) shows every seam. A thin skim coat over the whole room — or a Level 5 skim on seams only — fixes telegraphing after the third coat sands through tape.',
          'Dark paint and glossy sheens show flaws more than matte white primer. Budget extra compound and sand time if you are going from new drywall to a deep color.',
        ],
      },
      {
        heading: 'Compound quantity per coat',
        paragraphs: [
          'A 1,000 sq ft hang (walls + ceiling) often uses 4–6 five-gallon buckets of ready-mixed mud for three coats, plus one roll of tape. High-coat-count butt-heavy jobs push toward eight buckets.',
        ],
      },
    ],
    faqs: [
      {
        question: 'Can you only do two coats of mud?',
        answer:
          'Two coats work on screw heads and very flat tapered seams in low-light closets. Living rooms and kitchens should get three coats on seams for paint-ready results.',
      },
      {
        question: 'Does primer count as a coat of mud?',
        answer:
          'No. Primer seals compound and paper — it does not fill seams. Still complete your mud coats before primer.',
      },
    ],
  },
  {
    slug: 'drywall-screw-spacing-and-pattern',
    category: 'installation',
    title: 'Drywall Screw Spacing and Pattern — Walls & Ceilings',
    description:
      'Field vs edge spacing, inches on center for wood and metal studs, ceiling vs wall schedules, and why over-screwing causes bumps that show through paint.',
    readMinutes: 9,
    toolPath: '/drywall-calculator',
    toolLabel: 'Drywall calculator',
    relatedGuideSlugs: [
      'how-to-hang-drywall-step-by-step',
      'estimating-drywall-screws-and-compound',
      'hanging-drywall-on-ceiling',
    ],
    sections: [
      {
        heading: 'Standard spacing schedule',
        paragraphs: [
          'Walls: 12 inches on center in the field (middle of sheet), 8 inches along tapered edges and butts, screws 3/8–3/4 inch from paper edge. Ceilings: 8 inches on center in field and edges on 1/2 inch board.',
          'Some jurisdictions require 7 inches on ceiling edges — always confirm local amendments. Over-driving screws breaks paper and loses holding power; use a dimpler bit.',
        ],
      },
      {
        heading: 'Stud alignment and missed fasteners',
        paragraphs: [
          'Screws must hit framing. A line of missed screws along a stud bay causes flex and cracked mud later. Snap chalk lines on face paper for ceiling joists before hanging, or use a stud finder on each course.',
        ],
      },
      {
        heading: 'Estimating screw count',
        paragraphs: [
          'Rule of thumb: one 1-lb box (about 350 screws) per 500 sq ft of drywall on walls. Ceilings use more fasteners — plan 1 box per 400 sq ft. Our calculator outputs total screw count with your sheet estimate.',
        ],
      },
    ],
    faqs: [
      {
        question: 'What length screw for 1/2 inch drywall?',
        answer:
          '1-1/4 inch coarse-thread screws for 1/2 inch board into wood studs. 1 inch for 1/2 inch into 20-gauge steel studs. 1-5/8 inch for 5/8 inch board.',
      },
      {
        question: 'Nails or screws for drywall?',
        answer:
          'Screws are standard — faster, less likely to pop. Ring-shank nails appear in some production framing but screws dominate DIY and remodel work.',
      },
    ],
  },
  {
    slug: 'half-inch-vs-five-eighth-drywall',
    category: 'materials',
    title: '1/2 Inch vs 5/8 Inch Drywall — When to Use Each',
    description:
      'Thickness differences, sound and fire ratings, sag resistance on ceilings, weight per sheet, and building code situations that require 5/8 Type X gypsum board.',
    readMinutes: 9,
    toolPath: '/drywall-calculator',
    toolLabel: 'Drywall calculator',
    relatedGuideSlugs: [
      'drywall-sheet-sizes-explained',
      'hanging-drywall-on-ceiling',
      'drywall-for-basement-renovation',
    ],
    sections: [
      {
        heading: '1/2 inch — default for most homes',
        paragraphs: [
          '1/2 inch gypsum on walls and ceilings is the residential default when joists and studs are 16 inches on center. It balances weight, cost, and rigidity. A 4×8 sheet weighs about 57 lbs.',
          'Use 1/2 inch moisture-resistant (green board) in bathrooms behind tile backer zones per manufacturer guidance — not as a tile substrate by itself in wet showers.',
        ],
      },
      {
        heading: '5/8 inch — fire, sound, and span',
        paragraphs: [
          '5/8 inch board adds mass for STC sound reduction between units and meets Type X fire ratings when labeled. Required on garage ceilings with living space above in many IRC jurisdictions.',
          'Heavier sheets (≈70+ lbs per 4×8) need two people on ceilings. Screw spacing may tighten to 7 inches on ceiling per some codes.',
        ],
        bullets: [
          'Garage-to-house separation: often 5/8 Type X',
          'Party walls in townhomes: check STC/fire assembly',
          '24-inch joist spacing on ceilings: 5/8 recommended',
          'Shaft walls and furnace closets: verify fire design',
        ],
      },
    ],
    faqs: [
      {
        question: 'Can I use 1/2 inch on a garage ceiling?',
        answer:
          'Many codes require 5/8 Type X on garage ceilings under finished living space. Check your local amended IRC before ordering.',
      },
      {
        question: 'Does thicker drywall reduce sound?',
        answer:
          'Mass helps, but resilient channel, insulation, and decoupled assemblies matter more. 5/8 on a single stud wall helps modestly; double layers with Green Glue or staggered studs help more.',
      },
    ],
  },
  {
    slug: 'how-to-patch-drywall-holes',
    category: 'repair',
    title: 'How to Patch Drywall Holes — Small Dents to Large Openings',
    description:
      'Spackle vs joint compound, mesh patches, California patch, backing boards for fist-sized holes, and blending texture so repairs disappear after paint.',
    readMinutes: 11,
    toolPath: '/drywall-calculator',
    toolLabel: 'Drywall calculator',
    relatedGuideSlugs: [
      'drywall-taping-and-mudding-guide',
      'how-many-coats-drywall-mud',
      'how-to-hang-drywall-step-by-step',
    ],
    sections: [
      {
        heading: 'Hole size determines method',
        bullets: [
          'Nail holes / screws: spackle or finger-applied compound',
          'Up to 2 inches: self-adhesive mesh patch + compound',
          '2–6 inches: California patch (backer strip + plug)',
          '6+ inches: new gypsum insert with backing cleats',
          'Full sheet damage: replace section to nearest studs',
        ],
      },
      {
        heading: 'California patch steps',
        paragraphs: [
          'Cut a square hole clean. Insert a wood backer strip behind the hole, screw through the face drywall into the strip. Cut a plug slightly larger than the hole, bevel edges, screw plug to backer, tape seams, three coats, sand, prime.',
        ],
      },
      {
        heading: 'Texture matching',
        paragraphs: [
          'Orange peel and knockdown texture need a practice board before hitting the wall. Thin compound through a hopper gun, or use aerosol texture for small patches. Paint sheen must match — flat hides patches better than satin.',
        ],
      },
    ],
    faqs: [
      {
        question: 'Can I use spackle on large holes?',
        answer:
          'Spackle is for minor dents under 1/2 inch. Larger holes need mesh, backing, and standard joint compound with tape.',
      },
      {
        question: 'How long before painting a drywall patch?',
        answer:
          'Wait 24 hours after final mud coat, sand, dust, then prime. Primer seals porosity differences between patch and old paint.',
      },
    ],
  },
  {
    slug: 'drywall-for-basement-renovation',
    category: 'planning',
    title: 'Drywall for Basement Renovation — Moisture, Framing & Code',
    description:
      'When to use moisture-resistant board, framing on concrete walls, ceiling height loss, egress windows, and estimating materials for full basement finishing projects.',
    readMinutes: 12,
    toolPath: '/drywall-calculator',
    toolLabel: 'Drywall calculator',
    relatedGuideSlugs: [
      'half-inch-vs-five-eighth-drywall',
      'hanging-drywall-on-ceiling',
      'how-much-drywall-waste-to-add',
    ],
    sections: [
      {
        heading: 'Moisture and mold prevention',
        paragraphs: [
          'Fix exterior water management before closing walls — gutters, grading, interior dehumidification. Do not trap moisture against concrete with plastic vapor barriers on the warm side in all climates; follow local building science guidance.',
          'Fiber-resistant or moisture-resistant gypsum on lower walls in damp zones; never install standard paper-face board directly on below-grade concrete without a framed cavity and appropriate insulation strategy.',
        ],
      },
      {
        heading: 'Framing and furring',
        paragraphs: [
          'Steel or pressure-treated bottom plates on slab, studs 16 inches on center, rigid or batt insulation in cavity, then drywall. Furring channels can save headroom versus full stud walls on perimeter concrete.',
          'Soffits around ducts and beams eat sheet count — measure each boxed-out area separately in the calculator.',
        ],
      },
      {
        heading: 'Egress and code for bedrooms',
        paragraphs: [
          'Legal basement bedrooms need egress windows and often smoke/CO alarms tied to house circuits. Fire separation from furnace rooms may require 5/8 Type X — sheet count and thickness vary by room.',
        ],
      },
      {
        heading: 'Typical basement sheet quantities',
        paragraphs: [
          'A 1,000 sq ft open basement (30×33 footprint, 8 ft ceilings) might need 35–45 sheets for perimeter walls plus 30–35 ceiling sheets depending on layout — use room-by-room calculator entries for accuracy.',
        ],
      },
    ],
    faqs: [
      {
        question: 'What drywall for basement bathroom?',
        answer:
          'Cement board or fiber-cement tile backer in shower wet zones. Moisture-resistant gypsum on painted bathroom walls outside the shower. Do not use green board as sole shower substrate.',
      },
      {
        question: 'Should I drywall the ceiling or leave drop ceiling?',
        answer:
          'Drywall ceiling looks finished and adds fire separation but hides utilities. Plan access panels or leave a corridor under ducts if you need future service access.',
      },
    ],
  },
  {
    slug: 'estimating-drywall-screws-and-compound',
    category: 'planning',
    title: 'Estimating Drywall Screws, Tape & Joint Compound',
    description:
      'Boxes of screws per 1,000 sq ft, five-gallon mud buckets per hang, paper tape rolls, corner bead linear feet, and a shopping list template for your drywall finishing phase.',
    readMinutes: 10,
    toolPath: '/how-many-drywall-sheets',
    toolLabel: 'Sheet count calculator',
    relatedGuideSlugs: [
      'drywall-screw-spacing-and-pattern',
      'drywall-taping-and-mudding-guide',
      'how-much-drywall-for-a-room',
    ],
    sections: [
      {
        heading: 'Screws',
        paragraphs: [
          'Walls: ~350 screws per 500 sq ft (about one 1-lb box). Ceilings: ~350 screws per 400 sq ft. Buy coarse-thread 1-1/4 inch for 1/2 inch board on wood studs. Add 10% for drops and strip-out.',
        ],
      },
      {
        heading: 'Joint compound',
        paragraphs: [
          'Three-coat finish on 1,000 sq ft of hung board: 4–6 five-gallon buckets ready-mixed all-purpose, plus 1–2 buckets topping for final coat. Quick-set users buy 18-lb bags for embed coat to speed first day.',
        ],
      },
      {
        heading: 'Tape and corner bead',
        bullets: [
          '500 ft roll paper tape covers ~1,000 sq ft of hung drywall for seams',
          'Inside corners: paper or metal-reinforced tape',
          'Outside corners: 8–10 ft sticks of metal bead per corner',
          'Control joints in long walls: vinyl expansion beads',
        ],
      },
      {
        heading: 'Putting the list together',
        paragraphs: [
          'Run the calculator for sheets first, then add finishing materials as multiples of sheet count. A 15-sheet bedroom job might need: 15 sheets, 1 box screws, 2 mud buckets, 1 roll tape, 3 corner beads, primer after sand.',
        ],
      },
    ],
    faqs: [
      {
        question: 'How many buckets of mud for one room?',
        answer:
          'A single 12×12 room with ceiling often needs 1–2 five-gallon buckets for three coats on seams and screws. Larger open plans scale with total hung square footage.',
      },
      {
        question: 'Pre-mixed or powder joint compound?',
        answer:
          'Ready-mixed is convenient for DIY. Powder setting compound controls working time on hot days and for filling wide gaps before taping.',
      },
    ],
  },
];

export function getGuideBySlug(slug: string): Guide | undefined {
  return GUIDES.find((g) => g.slug === slug);
}

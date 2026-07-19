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
      'drywall-project-from-framing-to-paint',
      'drywall-sheet-sizes-explained',
      'how-much-drywall-waste-to-add',
      'drywall-tools-for-hanging-and-finishing',
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
      'drywall-tools-for-hanging-and-finishing',
      'drywall-screw-spacing-and-pattern',
      'drywall-taping-and-mudding-guide',
      'drywall-project-from-framing-to-paint',
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
      'drywall-sanding-tips-dust-control',
      'how-many-coats-drywall-mud',
      'priming-new-drywall-before-paint',
      'when-to-hire-a-drywall-finisher',
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
{
    slug: 'green-board-purple-board-bathrooms',
    category: 'materials',
    title: 'Green Board vs Purple Board for Bathrooms — Where Each Goes',
    description:
      'Moisture-resistant gypsum in bathrooms: green board, purple board, cement backer, and code zones. What to hang on wet walls vs dry vanity walls and how it affects your sheet count.',
    readMinutes: 9,
    toolPath: '/drywall-calculator',
    toolLabel: 'Drywall calculator',
    relatedGuideSlugs: [
      'half-inch-vs-five-eighth-drywall',
      'drywall-for-basement-renovation',
      'how-much-drywall-for-a-room',
    ],
    sections: [
      {
        heading: 'What green and purple board actually are',
        paragraphs: [
          'Green board and purple board are paper-faced gypsum with moisture-resistant additives — not waterproof. Green board was the traditional “wet area” drywall; purple board (often branded Mold Tough or equivalent) adds mold inhibitors and tighter paper.',
          'Both are fine on bathroom walls outside direct shower spray — vanity walls, toilet walls, ceilings. Neither belongs as the sole tile substrate inside a shower — use cement board or fiber-cement tile backer there.',
        ],
        bullets: [
          'Shower/tub surround tile: cement or fiber-cement backer',
          'Bathroom walls outside shower: purple or green 1/2 inch',
          'Ceilings: same MR board or standard 1/2 inch per code',
          'Paint with bathroom-rated primer — board is not the finish',
        ],
      },
      {
        heading: 'Code zones and practical layout',
        paragraphs: [
          'Many jurisdictions treat the shower interior as a wet zone requiring non-gypsum backer. The rest of the bath is “ damp ” — MR gypsum is acceptable when finished with tile or moisture-rated paint.',
          'Plan sheet breaks at the shower curb or glass line so you do not mix backer and gypsum mid-field. Order MR board only for bath rooms — standard drywall elsewhere keeps costs down.',
        ],
      },
      {
        heading: 'Estimating sheets for a bathroom',
        paragraphs: [
          'Measure each wall plane; MR board comes in same 4×8 and 4×12 sizes as standard. A typical 8×5 bath with 8 ft ceilings might need 6–8 sheets for walls plus 2–3 for ceiling before waste — less if a shower niche removes one full plane.',
          'Enter room dimensions in our [drywall calculator](/drywall-calculator) and note MR sheets on your pickup list separately from standard board.',
        ],
      },
    ],
    faqs: [
      {
        question: 'Can I use green board inside a shower?',
        answer:
          'No — not as tile backer. Use cement board or equivalent rated for shower wet areas. MR gypsum behind tile in shower walls fails when grout cracks and water penetrates.',
      },
      {
        question: 'Is purple board worth the extra cost?',
        answer:
          'For bathrooms with poor ventilation or history of mold, yes. For a powder room with no shower, standard drywall plus good paint is often enough.',
      },
      {
        question: 'Same thickness as regular drywall?',
        answer:
          'Yes — 1/2 inch is standard for residential bath walls. Match thickness to adjoining rooms so jambs and tile transitions stay flush.',
      },
    ],
  },
  {
    slug: 'drywall-finish-levels-explained',
    category: 'finishing',
    title: 'Drywall Finish Levels Explained — Level 0 Through Level 5',
    description:
      'GA finish levels for walls and ceilings: when Level 4 is enough, why kitchens and gloss paint need Level 5, and what each level means for mud coats and sanding.',
    readMinutes: 10,
    toolPath: '/drywall-calculator',
    toolLabel: 'Drywall calculator',
    relatedGuideSlugs: [
      'how-many-coats-drywall-mud',
      'drywall-taping-and-mudding-guide',
      'how-much-drywall-for-a-room',
    ],
    sections: [
      {
        heading: 'What finish levels mean',
        paragraphs: [
          'Gypsum Association levels describe how much joint compound and sanding a surface gets before decoration. Level 0 is hung board only; Level 5 is skim-coated for the flattest paint-ready surface.',
          'Most residential bedrooms and living rooms finish at Level 4 — taped seams, three coats on joints, screws coated, sanded, primer. Garages and concealed areas may stop at Level 3.',
        ],
        bullets: [
          'Level 3: tape + two coats — texture or tile backer',
          'Level 4: three coats, sanded — flat or light texture paint',
          'Level 5: Level 4 + skim coat — gloss, semi-gloss, critical light',
          'Level 0–2: commercial/concealed — not typical DIY living space',
        ],
      },
      {
        heading: 'Choosing the right level for each room',
        paragraphs: [
          'Level 4 fits walls with eggshell or matte paint and some natural shadow. Bathrooms and kitchens with semi-gloss on walls benefit from Level 5 or very careful Level 4 plus high-build primer — gloss reveals every seam telegraph.',
          'Ceilings with recessed cans create raking light that shows imperfections — consider Level 5 on main ceiling planes or use flat paint after meticulous Level 4 sanding.',
        ],
      },
      {
        heading: 'Impact on compound and labor',
        paragraphs: [
          'Level 5 adds a thin skim coat over the entire surface — often one extra 5-gallon bucket per 400–600 sq ft of wall/ceiling depending on technique (roll skim vs trowel).',
          'Budget mud and sand time when estimating the job. Sheet count from our [drywall calculator](/drywall-calculator) drives compound estimates — see [screws and compound guide](/guides/estimating-drywall-screws-and-compound) for Level 4 baselines, then add skim material for Level 5 rooms.',
        ],
      },
    ],
    faqs: [
      {
        question: 'Is Level 4 enough for most homes?',
        answer:
          'Yes for standard matte or eggshell walls in bedrooms, halls, and living rooms with normal lighting. Upgrade visible ceilings and gloss-painted areas to Level 5.',
      },
      {
        question: 'What is a Level 5 skim coat?',
        answer:
          'A thin all-over coat of joint compound (or dedicated skim product) applied after Level 4 is sanded — eliminates porosity difference between seams and field so paint sheen looks uniform.',
      },
      {
        question: 'Do I need Level 5 before tile?',
        answer:
          'No — tile sets on Level 3 or better substrate. Finish level matters most for painted gypsum surfaces.',
      },
    ],
  },
  {
    slug: 'drywall-around-windows-and-doors',
    category: 'installation',
    title: 'Drywall Around Windows & Doors — Gaps, Reveals & Cuts',
    description:
      'Hang drywall at rough openings: reveal gaps for trim, cut accuracy, screw placement near jambs, and ordering extra sheet waste for window-heavy walls.',
    readMinutes: 9,
    toolPath: '/drywall-calculator',
    toolLabel: 'Drywall calculator',
    relatedGuideSlugs: [
      'how-to-hang-drywall-step-by-step',
      'how-much-drywall-for-a-room',
      'drywall-screw-spacing-and-pattern',
    ],
    sections: [
      {
        heading: 'Reveal gap at openings',
        paragraphs: [
          'Leave a consistent 1/8–1/4 inch gap between drywall edge and door/window jamb or framing — not tight to the buck. Trim casings cover the gap; tight fits crack when framing shrinks.',
          'At rough sills, stop drywall above the sill plate or notch around built-in bucks per your window manufacturer detail. Caulk paint-grade gaps after trim — do not mud against window flanges.',
        ],
      },
      {
        heading: 'Cutting and hanging order',
        paragraphs: [
          'Measure each opening; subtract twice your reveal from the stud-to-stud cut size. Use a rotary cutout tool for precision or score-and-snap with a jigsaw finish at corners.',
          'Hang top sheets first on walls with headers — fewer butt joints at lintels. Screw within 8 inches of openings but avoid blowing out fragile corner beads on metal bucks.',
        ],
        bullets: [
          'Mark openings from floor with laser or story pole',
          'Pre-cut window holes slightly small — rasp to fit',
          'Back-block oversized window returns if needed',
          'Use paper tape on stress corners near tall windows',
        ],
      },
      {
        heading: 'Openings and your material estimate',
        paragraphs: [
          'Window-heavy walls generate more scrap — bump waste from 10% to 12–15% on rooms with four or more openings. Deductions in area math help sheet count, but cut loss around each opening still adds up.',
          'List each room with opening count in our [drywall calculator](/drywall-calculator) and use custom deductions for large picture windows so you do not over-order full sheets.',
        ],
      },
    ],
    faqs: [
      {
        question: 'How big should the gap be between drywall and door frame?',
        answer:
          'About 1/8 inch is typical — enough for minor movement, small enough for casing to cover. Consistency matters more than exact width.',
      },
      {
        question: 'Do I hang drywall over window bucks?',
        answer:
          'Drywall stops at the rough opening edge unless your trim detail calls for returns. Never sandwich unsealed drywall against exterior window flanges — flash per window instructions.',
      },
      {
        question: 'Should I deduct windows when calculating sheets?',
        answer:
          'Yes for large openings — each 3×4 window saves ~12 sq ft. Keep small deductions conservative; waste from cuts often balances tiny openings.',
      },
    ],
  },
  {
    slug: 'garage-drywall-fire-separation',
    category: 'materials',
    title: 'Garage Drywall Fire Separation — Type X & Code Basics',
    description:
      'Fire-rated drywall between garage and house: 1/2 vs 5/8 Type X, which walls and ceilings need it, penetration rules, and sheet counts for attached garages.',
    readMinutes: 10,
    toolPath: '/drywall-calculator',
    toolLabel: 'Drywall calculator',
    relatedGuideSlugs: [
      'half-inch-vs-five-eighth-drywall',
      'how-much-drywall-for-a-room',
      'drywall-for-basement-renovation',
    ],
    sections: [
      {
        heading: 'Where fire separation is required',
        paragraphs: [
          'Attached garages typically need gypsum separation on walls and ceilings shared with living space — commonly 1/2 inch Type X on garage side of house walls and ceiling under habitable rooms. Local code may require 5/8 inch on certain boundaries or fire-rated assemblies.',
          'Check your jurisdiction — IRC and local amendments vary on garage-to-bedroom walls, breezeways, and detached garages with living space above. Permits often trigger inspection of labeled Type X board.',
        ],
        bullets: [
          'House wall facing garage: Type X gypsum',
          'Ceiling under finished room above garage: often 5/8 Type X',
          'Doors to house: self-closing, solid wood or rated',
          'Penetrations: fire caulk at boxes and pipes per code',
        ],
      },
      {
        heading: 'Type X vs regular drywall',
        paragraphs: [
          'Type X board has glass fibers and core additives for fire resistance — it is heavier and slightly harder to snap. It is not a substitute for a full rated assembly if code calls for a specific UL design.',
          'Use Type X only where required — it costs more. Standard 1/2 inch is fine on exterior garage walls not shared with the house.',
        ],
      },
      {
        heading: 'Calculating garage separation sheets',
        paragraphs: [
          'Measure only separating surfaces — not all four garage walls if two are exterior cladding. A 22×24 ft two-car garage sharing one 24-ft house wall and 22-ft ceiling band under a bedroom might need 15–20 sheets of Type X depending on height and door openings.',
          'Enter separating walls and ceiling as separate calculator rooms in our [drywall calculator](/drywall-calculator). Label Type X on your order — suppliers stock it separately from standard board.',
        ],
      },
    ],
    faqs: [
      {
        question: 'Is 1/2 inch Type X enough for garage walls?',
        answer:
          'Often yes on garage-to-house walls in IRC jurisdictions — verify locally. Ceilings under living space frequently require 5/8 inch Type X.',
      },
      {
        question: 'Do I need fire tape or special mud?',
        answer:
          'Standard taping materials work. Fire stopping is about board type, penetration sealant, and door requirements — not special joint compound.',
      },
      {
        question: 'What about garage attic access holes?',
        answer:
          'Maintain continuity of separation. Use rated attic hatches or build framed access details that preserve the fire boundary — ask your inspector before cutting.',
      },
    ],
  },
  {
    slug: 'soundproof-drywall-basics',
    category: 'materials',
    title: 'Soundproof Drywall Basics — STC, Layers & When It Helps',
    description:
      'Reduce noise between rooms: mass, damping, decoupling, 5/8 board, double layers, Green Glue, and realistic expectations for DIY bedroom and home office walls.',
    readMinutes: 10,
    toolPath: '/drywall-calculator',
    toolLabel: 'Drywall calculator',
    relatedGuideSlugs: [
      'half-inch-vs-five-eighth-drywall',
      'how-much-drywall-for-a-room',
      'drywall-for-basement-renovation',
    ],
    sections: [
      {
        heading: 'How drywall blocks sound',
        paragraphs: [
          'STC (Sound Transmission Class) rises with mass, damping, and decoupling. A single 1/2 inch wall might rate STC 33–38 — normal speech transfers. Adding mass (5/8 inch or double layer), damping compound between layers, or resilient channel decoupling improves results more than “soundproof” marketing alone.',
          'Specialty boards ( laminated viscoelastic gypsum ) add damping in one product — effective but pricey. DIY often doubles 5/8 inch with Green Glue or similar between layers on one side of the wall.',
        ],
      },
      {
        heading: 'Practical upgrades for bedrooms and offices',
        paragraphs: [
          'Minimum meaningful upgrade: 5/8 inch Type X or standard on both sides, insulated cavity, caulk perimeter gaps, and airtight outlets. Better: staggered studs or resilient channel with double drywall on one side.',
          'Ceilings need treatment too — sound flanks over plates and through joist bays. One heavy ceiling layer plus insulation helps home theaters under bedrooms.',
        ],
        bullets: [
          'Insulate cavity — big STC gain for little cost',
          'Seal electrical boxes and plate gaps with acoustic caulk',
          'Double 5/8 with damping compound on one side',
          'Solid core door and weatherstrip — weak link if wall is heavy',
        ],
      },
      {
        heading: 'Ordering extra material for double layers',
        paragraphs: [
          'Double-layer sound walls double gypsum on at least one side — multiply that side’s sheet count by two plus 10% waste. Damping tubes cover roughly 16 sq ft per tube depending on product — budget two tubes per 4×8 sheet pair.',
          'Run base sheet math in our [drywall calculator](/drywall-calculator), then duplicate one-side sheets for the second layer. See [5/8 vs 1/2 guide](/guides/half-inch-vs-five-eighth-drywall) for weight and screw length changes.',
        ],
      },
    ],
    faqs: [
      {
        question: 'Does soundproof drywall work by itself?',
        answer:
          'One specialty board helps modestly — STC gains of a few points. Best results combine mass, insulation, sealing, and often double layers or decoupling.',
      },
      {
        question: 'What screw length for double 5/8 drywall?',
        answer:
          'Use 1-5/8 inch coarse screws into studs — long enough for both layers without punching through. First layer can use 1-1/4 inch if you stagger second layer screws.',
      },
      {
        question: 'Is resilient channel worth it for DIY?',
        answer:
          'Yes on critical walls (bedroom under home theater) if you follow install details — short screws that do not bridge to studs. Skip on closets where STC 45 is enough with insulated double drywall.',
      },
    ],
  },
  {
    slug: 'repairing-water-damaged-drywall',
    category: 'repair',
    title: 'Repairing Water-Damaged Drywall — Dry Out, Cut & Patch',
    description:
      'Fix wet drywall after leaks: when to dry vs replace, stain vs swell, mold checks, patch sizing, matching thickness, and finishing to blend with existing texture.',
    readMinutes: 10,
    toolPath: '/drywall-calculator',
    toolLabel: 'Drywall calculator',
    relatedGuideSlugs: [
      'how-to-patch-drywall-holes',
      'drywall-for-basement-renovation',
      'half-inch-vs-five-eighth-drywall',
    ],
    sections: [
      {
        heading: 'Assess damage before patching',
        paragraphs: [
          'Stop the water source first. Surface stains on paint-only moisture may dry and repaint — if gypsum core is firm and not delaminated, seal stain with primer and touch up paint.',
          'Replace board that is swollen, soft, crumbling, or moldy behind the face paper. Probe with a screwdriver — mushy core means cut back to solid gypsum and dry framing.',
        ],
        bullets: [
          'Dry cavity with fans/dehumidifier before close-in',
          'Cut square beyond all soft material',
          'Treat framing with mold cleaner if growth present',
          'Verify leak repair — new drywall fails if moisture returns',
        ],
      },
      {
        heading: 'Cut-out and patch steps',
        paragraphs: [
          'Mark a rectangle spanning studs; cut along center of studs so patch screws land on solid framing. Add backing if hole falls mid-bay. Hang matching thickness — 1/2 inch most common; garages may be 5/8.',
          'Tape with paper on flat repairs; mesh only on small patches. Feather mud wider than usual (12–16 inches) to hide humps under existing orange peel or knockdown.',
        ],
      },
      {
        heading: 'Material for repairs',
        paragraphs: [
          'Small ceiling patches may need one sheet shared across several jobs — buy one 4×8 and cut studs accordingly. Match MR board in baths if the wet zone was MR.',
          'For multi-room flood work, tally all cut-out areas and run our [drywall calculator](/drywall-calculator) with a custom small-room entry — add 15% waste on irregular cutouts. See [patching holes guide](/guides/how-to-patch-drywall-holes) for backer and tape detail on small openings.',
        ],
      },
    ],
    faqs: [
      {
        question: 'Can wet drywall dry out without replacing?',
        answer:
          'If only surface-wet and core stays hard, yes — dry thoroughly and prime. Once core swells or paper bubbles, replacement is required — it will not return to flat.',
      },
      {
        question: 'How much to cut out around water damage?',
        answer:
          'Remove all soft gypsum plus 6–12 inches into firm board if staining suggests wicking. Better a larger patch now than a bubble later.',
      },
      {
        question: 'Do I need mold-resistant board on repairs?',
        answer:
          'Use purple or green MR board in bathrooms and basements after verified dry framing. Standard board is fine on dry living-area walls once the leak is fixed.',
      },
    ],
  },
  {
    slug: 'drywall-project-from-framing-to-paint',
    category: 'planning',
    title: 'Drywall Project From Framing to Paint — DIY Roadmap',
    description:
      'Complete DIY drywall project map: estimate sheets, pick thickness, hang, tape and mud, sand, finish level, and prime for paint. Links every phase to free calculators and how-to guides.',
    readMinutes: 12,
    toolPath: '/drywall-calculator',
    toolLabel: 'Drywall calculator',
    relatedGuideSlugs: [
      'how-much-drywall-for-a-room',
      'drywall-tools-for-hanging-and-finishing',
      'how-to-hang-drywall-step-by-step',
      'drywall-taping-and-mudding-guide',
    ],
    sections: [
      {
        heading: 'Why drywall projects stall before paint',
        paragraphs: [
          'Most DIY drywall fails at finishing — not hanging. Wrong sheet count, skipped screw patterns, muddy sanding, or painting raw mud without primer shows every ridge under light. This roadmap is your hang-to-paint checklist with calculator links so you buy sheets and compound once.',
          'Jump to the phase that matches today. Bathrooms and basements branch into moisture-rated board after estimating.',
        ],
      },
      {
        heading: 'The 8-phase drywall flow',
        bullets: [
          'Phase 1 — Estimate sheets, waste, screws, and compound',
          'Phase 2 — Choose thickness and specialty board (bath, garage, sound)',
          'Phase 3 — Gather hang and finish tools',
          'Phase 4 — Hang walls, then ceilings; correct screw spacing',
          'Phase 5 — Tape and mud coats to the finish level you need',
          'Phase 6 — Sand with dust control between coats',
          'Phase 7 — Decide DIY Level 4 vs hiring a finisher for Level 5',
          'Phase 8 — Prime new drywall, then paint',
        ],
        paragraphs: [
          'Deep dives for mid-project searches: [tools](/guides/drywall-tools-for-hanging-and-finishing), [sanding](/guides/drywall-sanding-tips-dust-control), [hire vs DIY finish](/guides/when-to-hire-a-drywall-finisher), [priming before paint](/guides/priming-new-drywall-before-paint).',
        ],
      },
      {
        heading: 'Phase-by-phase deep links',
        bullets: [
          'Estimate: [How much drywall](/guides/how-much-drywall-for-a-room) · [Sheet sizes](/guides/drywall-sheet-sizes-explained) · [Waste](/guides/how-much-drywall-waste-to-add) · [Screws & compound](/guides/estimating-drywall-screws-and-compound)',
          'Materials: [1/2 vs 5/8](/guides/half-inch-vs-five-eighth-drywall) · [Green/purple board](/guides/green-board-purple-board-bathrooms) · [Garage fire](/guides/garage-drywall-fire-separation)',
          'Hang: [Hang step-by-step](/guides/how-to-hang-drywall-step-by-step) · [Ceilings](/guides/hanging-drywall-on-ceiling) · [Screw pattern](/guides/drywall-screw-spacing-and-pattern) · [Windows & doors](/guides/drywall-around-windows-and-doors)',
          'Finish: [Tape & mud](/guides/drywall-taping-and-mudding-guide) · [How many coats](/guides/how-many-coats-drywall-mud) · [Finish levels](/guides/drywall-finish-levels-explained)',
          'Sand / prime: [Sanding tips](/guides/drywall-sanding-tips-dust-control) · [Prime new drywall](/guides/priming-new-drywall-before-paint)',
          'Repair: [Patch holes](/guides/how-to-patch-drywall-holes) · [Water damage](/guides/repairing-water-damaged-drywall)',
          'Basement: [Basement drywall](/guides/drywall-for-basement-renovation) · [Moisture checklist](/guides/basement-drywall-moisture-checklist)',
        ],
        paragraphs: [
          'Run room dimensions through the [drywall calculator](/drywall-calculator) or [how many sheets](/how-many-drywall-sheets) before you schedule the hang day.',
        ],
      },
      {
        heading: 'Weekend room plan (one room, walls only)',
        paragraphs: [
          'Friday: estimate, buy sheets and compound, gather tools. Saturday: hang walls. Sunday morning: tape and first coat; afternoon second coat if dry. Next weekend: third coat, sand, prime. Ceilings add a helper and a full extra day.',
          'Cold or damp basements slow mud dry times — see [basement moisture checklist](/guides/basement-drywall-moisture-checklist) before you close the room in.',
        ],
      },
    ],
    faqs: [
      {
        question: 'What is the correct order for a drywall project?',
        answer:
          'Estimate materials, hang ceilings then walls (or walls then ceilings per your preference and help), tape, mud coats with dry time between, sand, prime, then paint. Never paint raw joint compound without primer.',
      },
      {
        question: 'How many sheets do I need for a room?',
        answer:
          'Divide wall (and ceiling) square footage by the sheet size you buy — usually 32 sq ft for 4×8 — then add waste. Our drywall calculator does the math from room dimensions.',
      },
      {
        question: 'Can beginners tape and mud themselves?',
        answer:
          'Yes for Level 3–4 finishes under flat paint with practice. Smooth Level 5 under gloss or critical light is often worth hiring — see our hire vs DIY finishing guide.',
      },
    ],
  },
  {
    slug: 'drywall-tools-for-hanging-and-finishing',
    category: 'installation',
    title: 'Drywall Tools for Hanging and Finishing — DIY Checklist',
    description:
      'Must-have tools for hanging and finishing drywall: T-square, screw gun, knives, mud pan, pole sander, and dust control. What to buy, rent, or skip.',
    readMinutes: 9,
    toolPath: '/drywall-calculator',
    toolLabel: 'Drywall calculator',
    relatedGuideSlugs: [
      'how-to-hang-drywall-step-by-step',
      'drywall-taping-and-mudding-guide',
      'drywall-sanding-tips-dust-control',
      'drywall-project-from-framing-to-paint',
    ],
    sections: [
      {
        heading: 'Hang tools vs finish tools',
        paragraphs: [
          'Hanging needs lifting and fastening gear. Finishing needs knives, pans, and sanding. Buy or borrow both before mud day — driving to the store with wet mud on the walls wastes coats. Estimate sheets first with the [drywall calculator](/drywall-calculator).',
        ],
      },
      {
        heading: 'Must-have hanging tools',
        bullets: [
          'Drywall T-square (48 inch) and utility knife with spare blades',
          'Screw gun or dimpler bit — sinks screws without breaking paper',
          'Drywall lift (rent) for ceilings — safer than ladders alone',
          'Panel carrier or helper for 4×8 and 4×12 sheets',
          'Keyhole saw or jab saw for outlets and switches',
          'Tape measure, chalk line, pencil, hammer for plates',
        ],
        paragraphs: [
          'Optional: router with drywall bit for outlets after hang, deadman T-brace for ceilings if no lift.',
        ],
      },
      {
        heading: 'Must-have finishing tools',
        bullets: [
          '6 inch, 10 inch, and 12 inch taping knives (flexible)',
          'Mud pan or hawk; mixing paddle for drill',
          'Paper tape (preferred for flats) and corner bead tools',
          'Pole sander + 120–220 grit screens or paper; sanding sponge for corners',
          'Shop vac with drywall dust bag or HEPA; plastic sheeting',
          'Corner trowel for inside corners if you finish many rooms',
        ],
        paragraphs: [
          'Banjo tapers speed long runs but beginners often get cleaner flats with hand tape. See [tape and mud guide](/guides/drywall-taping-and-mudding-guide).',
        ],
      },
      {
        heading: 'What you can skip at first',
        bullets: [
          'Full auto taper (bazooka) — pro rental, steep learning curve',
          'Texture sprayer until walls are flat and primed',
          'Cheap knives that leave ridges — one good 10–12 inch knife beats three bent ones',
        ],
        paragraphs: [
          'Next: [hang step-by-step](/guides/how-to-hang-drywall-step-by-step), then [sanding with dust control](/guides/drywall-sanding-tips-dust-control).',
        ],
      },
    ],
    faqs: [
      {
        question: 'Do I need a drywall lift for walls?',
        answer:
          'No for walls if you have a helper. Lifts shine on ceilings and solo installs. Rent for a weekend rather than buying for one room.',
      },
      {
        question: 'What knife sizes for a first room?',
        answer:
          'A 6 inch for embedding tape, 10 inch for second coat, and 12 inch for skim/feather coats covers most DIY rooms.',
      },
      {
        question: 'Can I sand with a regular orbital sander?',
        answer:
          'Use drywall screens on a pole or hand sander. Aggressive orbital pads dig hollows in soft mud. Dust control matters — see our sanding guide.',
      },
    ],
  },
  {
    slug: 'drywall-sanding-tips-dust-control',
    category: 'finishing',
    title: 'Drywall Sanding Tips and Dust Control for DIY',
    description:
      'How to sand drywall between coats without destroying the room: grit sequence, pole sanding, wet sanding options, and dust containment.',
    readMinutes: 9,
    toolPath: '/drywall-calculator',
    toolLabel: 'Drywall calculator',
    relatedGuideSlugs: [
      'drywall-taping-and-mudding-guide',
      'how-many-coats-drywall-mud',
      'priming-new-drywall-before-paint',
      'drywall-finish-levels-explained',
    ],
    sections: [
      {
        heading: 'Sand to flatten — not to carve',
        paragraphs: [
          'The goal is feathered edges and flush fasteners, not glass-smooth gypsum. Over-sanding cuts into tape and creates waves that show under paint. Light pressure, long strokes, and a work light angled across the wall reveal ridges.',
          'Mud must be fully dry before sanding — cool damp rooms need overnight or longer between coats. See [how many coats of mud](/guides/how-many-coats-drywall-mud).',
        ],
      },
      {
        heading: 'Grit and tool sequence',
        bullets: [
          'After embed / first coat: knock high ridges with 120 grit if needed — often knife scrape is enough',
          'After fill coats: 150 grit pole sand for flats',
          'Before primer: 180–220 grit touch-up on visible scratches',
          'Corners: sanding sponge folded — keep from rounding the corner bead face',
          'Never sand through paper tape — stop and skim another coat instead',
        ],
        paragraphs: [
          'Shop-vac pole sanders with shrouds cut dust dramatically. Hand pole sanding still needs plastic on floors and a sealed doorway.',
        ],
      },
      {
        heading: 'Dust control that actually works',
        bullets: [
          'Plastic zipper door on the room; cover HVAC returns',
          'Negative air: box fan blowing out a window if weather allows',
          'HEPA or drywall-rated vac — household bags clog and blow dust',
          'Wear a proper dust mask; drywall dust is fine and persistent',
          'Vacuum between coats before the next mud pass',
        ],
        paragraphs: [
          'Wet sponging can reduce dust on small patches but is slower on whole rooms and can raise the nap of paper. Use for repairs more than full hangs.',
        ],
      },
      {
        heading: 'When sanding is done',
        paragraphs: [
          'Wipe or vacuum dust, then check under raking light. Skim remaining hollows, dry, final light sand. Next: [prime new drywall before paint](/guides/priming-new-drywall-before-paint). Finish level targets: [finish levels explained](/guides/drywall-finish-levels-explained).',
        ],
      },
    ],
    faqs: [
      {
        question: 'Should I sand between every coat?',
        answer:
          'Knock down ridges and fasteners as needed. Heavy sanding every coat wastes mud and paper. Many pros scrape with a knife between coats and save serious sanding for the end.',
      },
      {
        question: 'Why do I still see seams after sanding?',
        answer:
          'Usually not enough feather width or coats — not more sanding. Add a wider skim coat, dry, then sand lightly. Primer and paint make remaining flaws obvious.',
      },
      {
        question: 'Can I paint the same day I sand?',
        answer:
          'Only after dust is fully removed and the surface is dry. Primer goes on clean board and mud — leftover dust causes fisheyes and poor adhesion.',
      },
    ],
  },
  {
    slug: 'priming-new-drywall-before-paint',
    category: 'finishing',
    title: 'Priming New Drywall Before Paint — Why PVA Matters',
    description:
      'Why new drywall needs primer before finish paint, which PVA or drywall primer to use, how much to buy, and when tinted primer helps.',
    readMinutes: 9,
    toolPath: '/drywall-calculator',
    toolLabel: 'Drywall calculator',
    relatedGuideSlugs: [
      'drywall-sanding-tips-dust-control',
      'drywall-finish-levels-explained',
      'drywall-project-from-framing-to-paint',
      'how-much-drywall-for-a-room',
    ],
    sections: [
      {
        heading: 'Raw drywall drinks paint unevenly',
        paragraphs: [
          'Face paper, joint compound, and patches all absorb at different rates. Finish paint alone flashes dull over mud and shiny over paper — the classic DIY blotchy wall. A dedicated drywall / PVA primer seals the surface so topcoats look even.',
          'Paint-and-primer-in-one is not a substitute for real drywall primer on a new hang. Use it later for color coats if you want.',
        ],
      },
      {
        heading: 'Which primer to buy',
        bullets: [
          'New drywall / large mud jobs → PVA or labeled drywall primer (high coverage, cheap)',
          'Stains from water repairs → stain-blocking primer on those spots first, then PVA field',
          'Dark finish color planned → ask the store to tint primer gray or toward the color',
          'Bathrooms after MR board → moisture-tolerant primer per paint system',
        ],
        paragraphs: [
          'Coverage is often 200–300+ sq ft per gallon on new board — more than finish paint. Count one full coat over every new surface.',
        ],
      },
      {
        heading: 'Apply and inspect',
        bullets: [
          'Vacuum dust completely after final sand',
          'Cut in and roll primer; keep a wet edge',
          'After dry, raking light reveals missed ridges — spot skim, re-prime those areas',
          'Then apply finish coats per your paint label',
        ],
        paragraphs: [
          'Sheet counts for the hang still come from the [drywall calculator](/drywall-calculator). Primer gallons are a separate purchase based on wall area.',
        ],
      },
      {
        heading: 'Cross-check finish level before you prime',
        paragraphs: [
          'Priming seals flaws in place. If you still see tape lines under raking light, fix mud first. Level targets: [drywall finish levels](/guides/drywall-finish-levels-explained). Full project map: [framing to paint roadmap](/guides/drywall-project-from-framing-to-paint).',
        ],
      },
    ],
    faqs: [
      {
        question: 'Can I skip primer on new drywall?',
        answer:
          'You can, but expect flashing and uneven sheen — especially over joints. Primer is cheaper than a third finish coat trying to hide blotches.',
      },
      {
        question: 'Is PVA the same as regular primer?',
        answer:
          'PVA drywall primer is formulated to seal porous paper and mud. Bonding or stain-blocking primers solve different problems. Match the product to new drywall unless you have stains or glossy repairs.',
      },
      {
        question: 'How long after primer can I paint?',
        answer:
          'Most latex drywall primers recoat in 1–2 hours. Follow the can. Cold basements need longer.',
      },
    ],
  },
  {
    slug: 'when-to-hire-a-drywall-finisher',
    category: 'finishing',
    title: 'When to Hire a Drywall Finisher — Level 4 vs Level 5',
    description:
      'DIY vs pro drywall finishing: which finish levels beginners can hit, when Level 5 and critical light need a finisher, and how to still estimate sheets yourself.',
    readMinutes: 9,
    toolPath: '/drywall-calculator',
    toolLabel: 'Drywall calculator',
    relatedGuideSlugs: [
      'drywall-finish-levels-explained',
      'drywall-taping-and-mudding-guide',
      'drywall-project-from-framing-to-paint',
      'priming-new-drywall-before-paint',
    ],
    sections: [
      {
        heading: 'Hang yourself, finish selectively',
        paragraphs: [
          'Many DIYers hang successfully and hire finishing for skim and texture. Labor for Level 5 under gloss paint often costs less than redoing a blotchy DIY job. Still estimate sheets with the [drywall calculator](/drywall-calculator) so material bids stay honest.',
        ],
      },
      {
        heading: 'DIY-friendly vs hire-friendly',
        bullets: [
          'DIY OK: closets, garages, Level 3–4 under flat/eggshell paint',
          'Hire recommended: open living rooms with grazing light, Level 5, heavy texture match',
          'Hire recommended: large ceilings, stairwells, historic plaster blend-ins',
          'Hire or specialist: fire-rated assemblies and soundboard systems that need inspection',
        ],
        paragraphs: [
          'Understand targets in [finish levels explained](/guides/drywall-finish-levels-explained) before you quote a finisher.',
        ],
      },
      {
        heading: 'What to ask a finisher',
        bullets: [
          'Finish level included and paint sheen assumed',
          'Who sands and who primes',
          'Number of coats and dry time between visits',
          'Responsibility for screw pops after heat season',
        ],
        paragraphs: [
          'If you DIY mud: follow [tape and mud](/guides/drywall-taping-and-mudding-guide) and [sanding tips](/guides/drywall-sanding-tips-dust-control), then [prime](/guides/priming-new-drywall-before-paint).',
        ],
      },
      {
        heading: 'Hybrid approach',
        paragraphs: [
          'Hang and tape embeds yourself; hire skim and texture. Or hire the whole finish after you hang. Full sequence: [project roadmap](/guides/drywall-project-from-framing-to-paint).',
        ],
      },
    ],
    faqs: [
      {
        question: 'What finish level do most living rooms need?',
        answer:
          'Level 4 is common under flat or eggshell paint. Level 5 (skim coat) is for gloss, dark colors, or walls washed with strong side light.',
      },
      {
        question: 'Is DIY taping obvious to buyers?',
        answer:
          'Under flat paint with careful feathering, often no. Under semi-gloss or window light, ridges show. Match finish level to lighting and sheen.',
      },
      {
        question: 'Should I buy the mud if I hire finishing?',
        answer:
          'Pros usually bring preferred compound. You can supply board; confirm before delivery day.',
      },
    ],
  },
  {
    slug: 'basement-drywall-moisture-checklist',
    category: 'materials',
    title: 'Basement Drywall Moisture Checklist — Before You Hang',
    description:
      'Moisture and mold checks before basement drywall: leaks, humidity, insulation, mold-resistant board, and when to wait. Pair with basement sheet estimates.',
    readMinutes: 9,
    toolPath: '/basement-drywall-calculator',
    toolLabel: 'Basement drywall calculator',
    relatedGuideSlugs: [
      'drywall-for-basement-renovation',
      'green-board-purple-board-bathrooms',
      'repairing-water-damaged-drywall',
      'drywall-project-from-framing-to-paint',
    ],
    sections: [
      {
        heading: 'Drywall does not fix a wet basement',
        paragraphs: [
          'Closing damp walls into gypsum traps moisture and feeds mold. Run this checklist before you order sheets. Estimating still happens in the [basement drywall calculator](/basement-drywall-calculator) — only after the space passes moisture basics.',
        ],
      },
      {
        heading: 'Pre-hang checklist',
        bullets: [
          'No active leaks at walls, windows, or slab seams for a full wet season if possible',
          'Relative humidity manageable with dehumidifier (often under ~60% when closed)',
          'Framing dry to the touch; no musty smell behind plastic',
          'Exterior grading and gutters directing water away from foundation',
          'Insulation strategy decided — rigid foam vs mineral wool per local code and moisture plan',
          'Choose mold-resistant board where codes or conditions require it',
        ],
        paragraphs: [
          'Purple/green MR board resists moisture better than standard but is not a waterproofing system. Details: [green vs purple board](/guides/green-board-purple-board-bathrooms) and [basement renovation guide](/guides/drywall-for-basement-renovation).',
        ],
      },
      {
        heading: 'Red flags — wait or remediate',
        bullets: [
          'Efflorescence or repeated water stains on block',
          'Prior mold that was never professionally addressed',
          'Dirt floors or missing vapor strategy on cold walls',
          'Plan to bury poly tight against cold concrete without drying path — get local best practice first',
        ],
        paragraphs: [
          'If you are repairing flood damage upstairs or down, see [repairing water-damaged drywall](/guides/repairing-water-damaged-drywall) before rehanging.',
        ],
      },
      {
        heading: 'After you pass the checklist',
        paragraphs: [
          'Estimate sheets, hang, finish, and prime using the [full drywall roadmap](/guides/drywall-project-from-framing-to-paint). Keep a dehumidifier running during mud dry times in cool basements.',
        ],
      },
    ],
    faqs: [
      {
        question: 'Can I hang drywall on basement concrete?',
        answer:
          'Not directly. Use framed walls or furring with a moisture strategy appropriate to your climate and code. Board needs a dry, even substrate.',
      },
      {
        question: 'Is green board enough for basements?',
        answer:
          'MR board helps but does not replace leak repair and humidity control. Many basements use standard board on dry framed walls with good vapor management — follow local practice.',
      },
      {
        question: 'How long should a wet basement dry before drywall?',
        answer:
          'Until finishes stay dry through wet weather and humidity is controlled. That can mean weeks of remediation — not a weekend.',
      },
    ],
  },
];

export function getGuideBySlug(slug: string): Guide | undefined {
  return GUIDES.find((g) => g.slug === slug);
}

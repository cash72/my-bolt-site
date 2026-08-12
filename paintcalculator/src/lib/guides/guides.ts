import type { Guide } from './types';

export const GUIDES: Guide[] = [
  {
    slug: 'how-much-paint-for-a-room',
    category: 'paint',
    title: 'How Much Paint Do I Need for a Room?',
    description:
      'Step-by-step guide to calculating wall and ceiling paint for any rectangular room. Formulas, coat counts, and when to buy extra.',
    readMinutes: 9,
    toolPath: '/how-much-paint-do-i-need',
    toolLabel: 'How much paint calculator',
    relatedGuideSlugs: [
      'how-to-prep-walls-for-painting',
      'paint-coverage-per-gallon',
      'how-many-coats-of-paint',
      'primer-before-painting',
    ],
    sections: [
      {
        heading: 'The basic wall area formula',
        paragraphs: [
          'For a rectangular room, wall paintable area equals the perimeter multiplied by ceiling height. Perimeter = 2 × (length + width). Example: a 12×14 ft room with 8 ft ceilings has perimeter 52 ft × 8 ft = 416 sq ft of walls.',
          'Add ceiling area (length × width) if you are painting the ceiling — another 168 sq ft in that example. Subtract doors (~20 sq ft each) and windows (~15 sq ft each) for a closer estimate.',
        ],
      },
      {
        heading: 'From square footage to gallons',
        paragraphs: [
          'Divide total paintable area (× number of coats) by the coverage number on your paint can label. Most interior latex lists 350–400 sq ft per gallon on smooth, primed walls.',
          'Always round up. A 416 sq ft wall with two coats at 350 sq ft/gallon needs about 2.4 gallons — buy 3 gallons to avoid a mid-project store run. Prefer label math over guesswork — the [Behr paint coverage calculator](/paint-coverage-calculator) turns your can’s sq ft/gallon into gallons to buy.',
        ],
        bullets: [
          'Smooth new drywall: often 400 sq ft/gallon',
          'Textured or porous walls: 300–350 sq ft/gallon',
          'Dark color over light: plan 2 coats minimum',
          'Same-color touch-up: 1 coat may suffice',
        ],
      },
      {
        heading: 'Use the calculator instead of guesswork',
        paragraphs: [
          'Our room paint calculator accepts feet and inches, handles multiple rooms, deducts openings, and outputs gallons plus quarts with a copyable shopping list. Already know total wall sq ft? Jump straight to the [paint coverage calculator](/paint-coverage-calculator).',
        ],
      },
      {
        heading: 'Worked example: 12×14 bedroom',
        paragraphs: [
          'Walls: perimeter 52 ft × 8 ft ceiling = 416 sq ft. Minus one door (20) and one window (15) → 381 sq ft. Two coats at 350 sq ft/gallon = 762 ÷ 350 ≈ 2.2 gallons — buy 3 gallons finish paint.',
          'Run your dimensions in the [room paint calculator](/room-paint-calculator) or [coverage calculator](/paint-coverage-calculator). See [how many coats](/guides/how-many-coats-of-paint) and [primer guide](/guides/primer-before-painting) before checkout.',
        ],
      },
    ],
    faqs: [
      {
        question: 'How much paint for a 12×12 room?',
        answer:
          'With 8 ft ceilings, walls are about 384 sq ft. Two coats at 350 sq ft/gallon ≈ 2.2 gallons — buy 3 gallons. Add one gallon if painting the ceiling too. Confirm with the [coverage calculator](/paint-coverage-calculator) using your can’s rate.',
      },
      {
        question: 'Do I need separate paint for trim?',
        answer:
          'Trim is usually calculated separately (linear feet or piece count). This guide covers walls and ceilings. Many DIYers buy an extra quart for doors and baseboards.',
      },
    ],
  },
  {
    slug: 'how-many-coats-of-paint',
    category: 'paint',
    title: 'How Many Coats of Paint Do You Need?',
    description:
      'One coat vs two coats vs three — when primer counts as a coat, and how to plan for color changes and new drywall.',
    readMinutes: 8,
    toolPath: '/how-much-paint-do-i-need',
    toolLabel: 'Paint gallon calculator',
    relatedGuideSlugs: [
      'how-long-between-paint-coats',
      'primer-before-painting',
      'how-much-paint-for-a-room',
      'paint-coverage-per-gallon',
    ],
    sections: [
      {
        heading: 'The default: two coats for walls',
        paragraphs: [
          'Most professional painters apply two finish coats on walls for even color and durability. One coat often looks streaky, especially with deep or red tones.',
          'Primer is separate — it is not usually counted as a "finish coat" but it is essential over new drywall, dark-to-light color changes, or stained repairs.',
        ],
      },
      {
        heading: 'When one coat is enough',
        bullets: [
          'Same color refresh on clean, previously painted walls in good condition',
          'Some self-priming paints over similar tones (check the can)',
          'Ceiling flat white over existing flat white',
        ],
        paragraphs: [],
      },
      {
        heading: 'When you need three coats (or primer + two)',
        bullets: [
          'Covering dark red, navy, or black with light beige or white',
          'Bare drywall or patched walls without dedicated primer',
          'High-contrast accent walls',
          'Exterior wood that drinks the first coat',
        ],
        paragraphs: [
          'Enter the actual coat count in our calculator — underestimating coats is the #1 reason people run out mid-room. More coats multiply gallons; run totals in the [paint coverage calculator](/paint-coverage-calculator) before you buy.',
        ],
      },
      {
        heading: 'Coat planning checklist',
        bullets: [
          'New drywall: primer + 2 finish coats',
          'Color change light over dark: primer + 2 finish',
          'Same-color refresh: 1–2 coats after cleaning',
          'Ceiling flat white: often 1–2 coats',
          'Enter actual coat count in the [paint calculator](/how-much-paint-do-i-need)',
          'Convert label coverage → gallons with the [coverage calculator](/paint-coverage-calculator)',
        ],
        paragraphs: [],
      },
    ],
    faqs: [
      {
        question: 'Does primer count as a coat?',
        answer:
          'Primer is a separate product layer. For shopping, buy primer gallons based on one coat of primer coverage, then buy finish paint for two coats.',
      },
      {
        question: 'Can I thin paint to stretch coverage?',
        answer:
          'Manufacturers design paint at a specific viscosity. Thinning reduces hide and durability. Buy enough product instead of thinning — use the [coverage calculator](/paint-coverage-calculator) with a realistic (lower) sq ft/gallon rate instead.',
      },
    ],
  },
  {
    slug: 'paint-coverage-per-gallon',
    category: 'paint',
    title: 'Behr Paint Coverage per Gallon — Free Chart | Paint Calculator',
    description:
      'How many sq ft does a gallon of Behr paint cover? Interior ~350–400 sq ft/gal; primer & exterior lower. Chart + free Behr coverage calculator.',
    readMinutes: 8,
    toolPath: '/paint-coverage-calculator',
    toolLabel: 'Behr paint coverage calculator',
    relatedGuideSlugs: ['how-much-paint-for-a-room', 'how-many-coats-of-paint'],
    sections: [
      {
        heading: 'Quick answer: Behr coverage per gallon',
        paragraphs: [
          'Most Behr Premium Plus Interior lists up to about 400 sq ft per gallon on smooth, primed drywall for one coat. Primer and exterior products are lower — always use the Coverage line on your specific can.',
          'To turn that into gallons for your room, use our free [Behr paint coverage calculator](/paint-coverage-calculator) or [how much Behr paint do I need](/how-much-paint-do-i-need) with your wall measurements.',
        ],
      },
      {
        heading: 'Where to find coverage on the can',
        paragraphs: [
          'Look for "Coverage" or "Spread rate" — typically 250–400 sq ft per gallon for interior latex, lower for rough surfaces and exterior stain.',
          'That number assumes one coat on a smooth, properly prepared surface. Multiply your total area by coat count before dividing.',
        ],
      },
      {
        heading: 'Factors that reduce coverage',
        bullets: [
          'Textured walls (orange peel, knockdown)',
          'Unprimed porous surfaces (new drywall, bare wood)',
          'Rolling vs spraying (spray often uses more product)',
          'Deep colors requiring thick application',
          'Cutting in waste and tray residue — add 10% buffer',
        ],
        paragraphs: [
          'Our calculator includes a waste allowance you can adjust. Ten percent is standard for walls; fifteen percent for complex rooms with many corners.',
        ],
      },
      {
        heading: 'Adjust coverage for your wall type',
        bullets: [
          'Smooth primed drywall: use label high end (~400 sq ft)',
          'Orange peel texture: use ~300 sq ft/gallon',
          'Unprimed repairs showing through: lower effective coverage',
          'Spray vs brush: spray can list higher — brush/roll uses more',
        ],
        paragraphs: [
          'Use the [coverage calculator](/paint-coverage-calculator) with your measured sq ft and realistic coverage number — not the marketing maximum.',
        ],
      },
      {
        heading: 'Behr paint coverage per gallon (typical ranges)',
        paragraphs: [
          'Behr does not publish one coverage number for all products — each can lists its own sq ft per gallon. These ranges help you sanity-check the label before you enter the number in our calculator.',
        ],
        bullets: [
          'Behr Premium Plus Interior (walls): often up to 400 sq ft/gallon on smooth, primed drywall',
          'Behr Premium Plus Ultra / Marquee: similar on flat walls; deep colours may need more product',
          'Behr ceiling flat: commonly 350–400 sq ft/gallon',
          'Behr primer: typically 250–350 sq ft/gallon — lower than finish paint',
          'Behr exterior: often 200–300 sq ft/gallon on wood siding',
        ],
      },
      {
        heading: 'Use Behr label numbers in our calculator',
        paragraphs: [
          'If you searched “Behr paint coverage calculator,” enter your room dimensions in the [paint coverage calculator](/paint-coverage-calculator) and set sq ft per gallon to the exact figure on your Behr can. That matches what a brand-specific tool would do — without tying you to one manufacturer.',
        ],
      },
      {
        heading: 'How much Behr paint do I need from coverage?',
        paragraphs: [
          'Take paintable sq ft × coats ÷ label coverage. Example: 384 sq ft walls × 2 coats ÷ 400 sq ft/gallon ≈ 1.9 → buy 2 gallons of Behr interior. Prefer a tool that also adds waste and rounds to store sizes? Use [how much Behr paint do I need](/how-much-paint-do-i-need).',
          'Prefer coverage-only math (one coat at a time)? Stay on the [Behr paint coverage calculator](/paint-coverage-calculator). Both pages share the same Canadian DIY defaults.',
        ],
      },
    ],
    faqs: [
      {
        question: 'How many square feet does a gallon of paint cover?',
        answer:
          'Most interior latex covers 350–400 sq ft per gallon on smooth, primed walls for one coat. Two coats means dividing your total area by a lower effective rate — many DIYers plan 300–350 sq ft per gallon per coat in practice.',
      },
      {
        question: 'Is 400 sq ft per gallon realistic?',
        answer:
          'On smooth, primed drywall with a quality roller and one coat — yes, for many premium paints. Real-world DIY projects with two coats plan closer to 350 sq ft per gallon per coat.',
      },
      {
        question: 'What is Behr paint coverage per gallon?',
        answer:
          'Check your specific Behr product label. Premium Plus Interior often lists up to 400 sq ft/gallon on ideal surfaces; primer and exterior lines are lower. Enter that number in our calculator with your room size for gallons to buy.',
      },
      {
        question: 'How much Behr paint do I need?',
        answer:
          'A 12×12 room with 8 ft ceilings is about 384 sq ft of walls. Two coats at Behr’s ~400 sq ft/gallon rate ≈ 1.9 gallons — buy 2–3 gallons depending on texture and colour change. Use our how much Behr paint calculator with your room size and can label.',
      },
      {
        question: 'Does Behr have an online paint calculator?',
        answer:
          'Behr focuses on product specs and colour tools rather than a room gallon estimator. Use our free calculator with your wall measurements and the sq ft/gallon from your Behr can — the math is the same for any brand.',
      },
    ],
  },
  {
    slug: 'primer-before-painting',
    category: 'prep',
    title: 'Should I Use Primer Before Painting?',
    description:
      'When primer is required vs optional, which type to buy, how much you need, and what happens if you skip it on walls and ceilings.',
    readMinutes: 10,
    toolPath: '/how-much-paint-do-i-need',
    toolLabel: 'How much paint calculator',
    relatedGuideSlugs: [
      'how-to-choose-primer-interior-walls',
      'identify-oil-vs-latex-paint-on-walls',
      'how-to-prep-walls-for-painting',
      'painting-over-dark-colors',
    ],
    sections: [
      {
        heading: 'Short answer: often yes — but not always',
        paragraphs: [
          'Primer is a bonding and sealing coat applied before your finish paint. It is not just "white paint" — it is formulated to stick to bare or problem surfaces and give finish paint an even base.',
          'If walls are clean, sound, and you are repainting a similar color with quality latex, you may skip primer. New drywall, patches, stains, or bold color changes almost always need primer first.',
        ],
      },
      {
        heading: 'Always use primer when',
        bullets: [
          'New drywall or skim-coated walls (seals porous paper and joint compound)',
          'Large patched areas — patch compound flashes through finish paint without primer',
          'Water, smoke, nicotine, or crayon stains (use stain-blocking primer)',
          'Painting dark red, navy, or black walls light (tinted primer saves finish coats)',
          'Bare wood, metal, masonry, or glossy oil paint you are converting to latex',
          'Peeling or chalky old paint after scraping (once surface is stable)',
        ],
        paragraphs: [],
      },
      {
        heading: 'You can usually skip primer when',
        bullets: [
          'Walls are previously painted latex in good condition — no peeling, no glossy oil',
          'Same or similar color refresh (e.g. white over white)',
          'Manufacturer-labeled "paint + primer" on the can AND the color change is minor (read the label)',
        ],
        paragraphs: [
          'When in doubt, one coat of primer is cheaper than an extra finish coat or a redo.',
        ],
      },
      {
        heading: 'Types of primer — pick the right one',
        bullets: [
          'Drywall / PVA primer: new drywall and large mud jobs — inexpensive, high coverage',
          'Stain-blocking (shellac or water-based): water rings, smoke, tannins from knots',
          'Bonding primer: glossy surfaces, tile, laminate, hard-to-stick areas',
          'Tinted primer: ask the store to tint toward your finish color for dark-to-light jumps',
        ],
        paragraphs: [
          'Primer covers roughly 200–300 sq ft per gallon — less than finish paint. Buy primer gallons separately in our calculator by counting one primer coat over the same wall area. Convert your primer can’s sq ft/gallon into gallons with the [paint coverage calculator](/paint-coverage-calculator).',
        ],
      },
      {
        heading: 'Primer shopping by scenario',
        bullets: [
          'New drywall: PVA or drywall primer — seals paper and joint compound',
          'Stain blocking: shellac or oil primer for smoke, water, tannin',
          'Dark-to-light: tinted gray primer reduces finish coats',
          'Masonry: masonry primer before interior block walls',
        ],
        paragraphs: [
          'Buy primer gallons from one coat of wall area — separate from [finish paint totals](/guides/how-much-paint-for-a-room). After primer, re-run the [coverage calculator](/paint-coverage-calculator) for finish coats using the topcoat label rate.',
        ],
      },
    ],
    faqs: [
      {
        question: 'Can I use paint as primer?',
        answer:
          'Flat white paint lacks the binders and stain seal of real primer. Finish coats may peel, look blotchy, or let stains bleed through. Use a product labeled primer or sealer.',
      },
      {
        question: 'Do I need primer on already painted walls?',
        answer:
          'If the paint is clean, matte or eggshell latex, and not peeling — often no. Glossy walls need light sanding and bonding primer. Any patch bigger than a nail hole should be primed.',
      },
      {
        question: 'How long after primer can I paint?',
        answer:
          'Most latex primers: recoat in 1–2 hours, topcoat same day. Check the can — humidity and cold slow drying. Sand lightly if grain raises on drywall primer.',
      },
      {
        question: 'How many gallons of primer should I buy?',
        answer:
          'Usually one coat over the same wall area as finish paint, at the primer’s lower coverage rate (often 250–350 sq ft/gallon). Enter primer sq ft/gallon in the [Behr paint coverage calculator](/paint-coverage-calculator), then run finish coats separately.',
      },
    ],
  },
  {
    slug: 'how-to-repair-walls-before-painting',
    category: 'prep',
    title: 'How to Repair Walls Before Painting',
    description:
      'Fix holes, cracks, nail pops, and damaged drywall so your paint job looks smooth — step-by-step for DIY prep.',
    readMinutes: 10,
    toolPath: '/how-much-paint-do-i-need',
    toolLabel: 'How much paint calculator',
    relatedGuideSlugs: [
      'how-to-patch-drywall-holes',
      'how-to-prep-walls-for-painting',
      'primer-before-painting',
      'how-to-fix-peeling-paint',
    ],
    sections: [
      {
        heading: 'Why repair comes before paint quantity',
        paragraphs: [
          'Paint hides minor flaws but does not fix structure. Patches, cracks, and loose tape will telegraph through finish paint — especially with glossier sheens or raking light from windows.',
          'Complete repairs, primer, then paint. Order matters: patch → sand → dust → prime → finish coats.',
        ],
      },
      {
        heading: 'Small nail holes and picture hooks',
        bullets: [
          'Remove loose debris; lightly sand raised edges',
          'Fill with spackle or lightweight joint compound using a putty knife',
          'Let dry fully — shrinkage causes dimples if you rush',
          'Sand flush with 120–150 grit; wipe dust',
          'Prime patched spots (or whole wall if many holes)',
        ],
        paragraphs: [],
      },
      {
        heading: 'Cracks and nail pops',
        paragraphs: [
          'Nail pops: reset the nail or drive a screw nearby, dimple below surface, fill, sand, prime.',
          'Hairline cracks: widen slightly with a utility knife, fill with compound, mesh tape for cracks that reopen — then mud, sand, prime.',
          'Corner bead damage: reattach or replace metal/vinyl bead, mud smooth, sand, prime.',
        ],
      },
      {
        heading: 'When to call a pro',
        paragraphs: [
          'Large water damage, mold behind the wall, major structural cracks, or extensive plaster failure need more than a paint-prep fix. Address moisture sources before painting.',
        ],
      },
      {
        heading: 'Repair sequence before paint',
        bullets: [
          '1. Fix structural cracks and loose tape',
          '2. Fill holes — see [drywall patch guide](/guides/how-to-patch-drywall-holes)',
          '3. Sand flush when dry',
          '4. Prime patches (spot prime or whole wall)',
          '5. Finish paint — 2 coats typical',
        ],
        paragraphs: [],
      },
    ],
    faqs: [
      {
        question: 'Can I paint without sanding patches?',
        answer:
          'Sanding blends the patch edge into the wall. Unsanded patches show as shiny or raised spots after paint. A quick 120-grit pass saves a redo.',
      },
      {
        question: 'How long before I can paint patched walls?',
        answer:
          'Joint compound can take 24 hours to dry per coat (longer in humidity). Primer after it is fully dry and sanded — rushing traps moisture and causes bubbling.',
      },
    ],
  },
  {
    slug: 'how-to-patch-drywall-holes',
    category: 'prep',
    title: 'How to Patch Drywall Holes Before Painting',
    description:
      'Fix small dents to medium holes (up to 6 inches) with spackle, patch kits, or California patch — ready for primer and paint.',
    readMinutes: 9,
    toolPath: '/how-much-paint-do-i-need',
    toolLabel: 'How much paint calculator',
    relatedGuideSlugs: [
      'how-to-repair-walls-before-painting',
      'primer-before-painting',
      'how-to-prep-walls-for-painting',
    ],
    sections: [
      {
        heading: 'Hole size determines the method',
        bullets: [
          'Under ½ inch: spackle only',
          '½ inch to 2 inches: spackle or lightweight compound, two thin coats if needed',
          '2–6 inches: adhesive mesh patch or "California patch" (drywall scrap + compound)',
          'Larger than 6 inches: drywall patch piece screwed to studs, tape seams, mud, sand',
        ],
        paragraphs: [],
      },
      {
        heading: 'California patch (medium holes)',
        paragraphs: [
          'Cut drywall slightly larger than the hole. Score and snap the gypsum, peel the back paper off the outer ring so only the face paper overlaps the wall. Set in compound, feather edges over 12–16 inches, sand, prime.',
          'Feathering wide prevents a visible bump — the patch should feel smooth to your hand before primer.',
        ],
      },
      {
        heading: 'Before you paint',
        bullets: [
          'Sand to 120–150 grit smooth',
          'Remove all dust with a damp cloth or vacuum brush',
          'Apply primer — unpainted compound is porous and absorbs paint unevenly',
          'Then two finish coats to match the rest of the wall',
        ],
        paragraphs: [],
      },
      {
        heading: 'Patch size quick reference',
        bullets: [
          'Nail holes: spackle, finger wipe, sand — no mesh needed',
          '1–3 inch: lightweight spackle or patch kit',
          '3–6 inch: mesh patch + joint compound, feather 12 inches',
          'Larger: California patch or new drywall insert',
        ],
        paragraphs: [
          'After patching, follow [wall prep steps](/guides/how-to-prep-walls-for-painting) before opening the paint can.',
        ],
      },
    ],
    faqs: [
      {
        question: 'Why does my patch show through paint?',
        answer:
          'Usually missing primer or insufficient feathering. Compound and paper absorb paint differently than old paint — primer unifies the surface.',
      },
    ],
  },
  {
    slug: 'how-to-prep-walls-for-painting',
    category: 'prep',
    title: 'How to Prep Walls for Painting — Complete Checklist',
    description:
      'Clean, sand, caulk, tape, and protect floors. The prep checklist pros use before opening the first gallon.',
    readMinutes: 10,
    toolPath: '/how-much-paint-do-i-need',
    toolLabel: 'How much paint calculator',
    relatedGuideSlugs: [
      'identify-oil-vs-latex-paint-on-walls',
      'how-to-repair-walls-before-painting',
      'how-to-choose-primer-interior-walls',
      'how-to-paint-a-room-step-by-step',
    ],
    sections: [
      {
        heading: 'Prep order of operations',
        bullets: [
          '1. Remove furniture or center it and cover completely',
          '2. Remove switch plates, outlet covers, curtain hardware',
          '3. Repair holes and cracks (see our repair guide)',
          '4. Clean walls — dust, grease, and smoke block adhesion',
          '5. Sand glossy or rough areas; dust again',
          '6. Caulk trim gaps and fine cracks at baseboards (paintable latex caulk)',
          '7. Tape trim, ceiling line, and adjacent rooms if needed',
          '8. Prime where required; then paint',
        ],
        paragraphs: [],
      },
      {
        heading: 'Cleaning matters more than people think',
        paragraphs: [
          'Kitchens and hallways: wash with mild TSP substitute or degreaser, rinse, dry. Dusty bedrooms: wipe with damp cloth or vacuum walls with brush attachment.',
          'Do not paint over cobwebs, cooking grease, or bathroom soap film — paint will peel or chip later.',
        ],
      },
      {
        heading: 'Sanding and deglossing',
        paragraphs: [
          'Lightly scuff glossy old paint with 120–150 grit or use a deglosser liquid for trim. Goal is a matte tooth for the new coat to grip — you are not removing all old paint.',
          'Always dust after sanding. Tack cloths pick up fine particles that ruin a smooth finish.',
        ],
      },
      {
        heading: 'Protect the room',
        bullets: [
          'Canvas drop cloths on floors — plastic is slippery on stairs',
          'Frog tape or blue painter tape on trim; press edges firmly',
          'Ventilate: open windows, fan out — especially for oil primer or high-VOC products',
        ],
        paragraphs: [],
      },
      {
        heading: 'Prep day supply list',
        bullets: [
          'TSP or degreaser for kitchen/bath walls',
          'Patch compound, sandpaper 120–220 grit',
          'Painter tape — release within 24 hours on fresh paint',
          'Drop cloths, caulk for trim gaps',
          'Shop vac for dust after sanding',
        ],
        paragraphs: [
          'Complete [repairs](/guides/how-to-repair-walls-before-painting) and [primer](/guides/primer-before-painting) before estimating gallons in the [room calculator](/room-paint-calculator) or [Behr paint coverage calculator](/paint-coverage-calculator).',
        ],
      },
    ],
    faqs: [
      {
        question: 'Do I need to wash walls before painting?',
        answer:
          'Yes in kitchens, bathrooms, and kid rooms. A clean surface is the cheapest insurance against peeling. Lightly soiled living rooms may only need dusting.',
      },
      {
        question: 'Should I caulk before or after painting?',
        answer:
          'Caulk gaps at trim and small cracks before painting. Wipe excess, let cure per tube label, then paint. Do not caulk over unpainted bare wood without primer first.',
      },
      {
        question: 'When should I buy paint relative to prep?',
        answer:
          'Measure and run the [Behr paint coverage calculator](/paint-coverage-calculator) after you know which walls need primer vs finish — then buy so dye lots match across the whole room.',
      },
    ],
  },
  {
    slug: 'how-to-paint-a-room-step-by-step',
    category: 'prep',
    title: 'How to Paint a Room — Step-by-Step for Beginners',
    description:
      'Cut in, roll walls, paint ceiling and trim in the right order. Drying times, tools, and tips for a clean DIY job.',
    readMinutes: 11,
    toolPath: '/how-much-paint-do-i-need',
    toolLabel: 'How much paint calculator',
    relatedGuideSlugs: [
      'interior-painting-tools-and-supplies-list',
      'how-to-prep-walls-for-painting',
      'how-long-between-paint-coats',
      'interior-painting-project-guide',
    ],
    sections: [
      {
        heading: 'Tools you will need',
        bullets: [
          '2½–3 inch angled brush for cutting in',
          '9 inch roller frame + 3/8 inch nap cover for smooth walls (1/2 inch for light texture)',
          'Extension pole for ceilings and high walls',
          'Roller tray with liner, stir sticks, opener',
          'Primer and finish paint (calculate gallons first)',
          'Drop cloths, tape, spackle kit if repairing',
        ],
        paragraphs: [],
      },
      {
        heading: 'Painting order (most rooms)',
        paragraphs: [
          'Many pros: ceiling first → walls → trim last. Others do two wall coats then touch ceiling and trim. Either works if you cut in carefully.',
        ],
        bullets: [
          'Stir paint thoroughly — color settles in the can',
          'Cut in: brush a 2–3 inch band along ceiling, corners, trim, outlets',
          'Roll walls in W or M shapes while cut-in is wet — avoids lap marks',
          'Second coat: same process after dry time on the can (usually 2–4 hours)',
          'Remove tape at a 45° angle while paint is slightly tacky for clean lines',
        ],
      },
      {
        heading: 'Rolling technique',
        paragraphs: [
          'Load roller evenly — do not oversaturate. Start mid-wall and roll toward the cut-in, overlapping each pass 30–50%. Maintain a wet edge to prevent stripes.',
          'One wall at a time on the second coat. Do not roll half a room and break for lunch — the dry line will show.',
        ],
      },
      {
        heading: 'After painting',
        bullets: [
          'Label leftover cans with room and date',
          'Wash latex brushes and rollers with soap and water before paint dries',
          'Wait at least 24 hours before moving furniture back against walls',
        ],
        paragraphs: [],
      },
      {
        heading: 'Weekend timeline',
        bullets: [
          'Day 1 AM: prep, patch, sand, vacuum',
          'Day 1 PM: prime if needed — dry overnight',
          'Day 2 AM: ceiling cut-in + roll',
          'Day 2 PM: walls coat 1 — dry per can',
          'Day 3: walls coat 2, remove tape, touch-ups',
        ],
        paragraphs: [
          'Order enough paint using [how much paint for a room](/guides/how-much-paint-for-a-room) or the [Behr paint coverage calculator](/paint-coverage-calculator) before Day 2 — running out mid-wall shows lap marks.',
        ],
      },
    ],
    faqs: [
      {
        question: 'Cut in or roll first?',
        answer:
          'Cut in first, then roll into the wet edge while cut-in is still wet. Some painters cut in one wall, roll it, then move on — best for avoiding lap lines.',
      },
      {
        question: 'How long between coats?',
        answer:
          'Follow the can — typically 2–4 hours for latex at room temperature. Cool or humid rooms need longer. The wall should feel dry, not cool and tacky.',
      },
      {
        question: 'How do I know I bought enough paint before Day 2?',
        answer:
          'Measure walls and convert your Behr (or any brand) label rate in the [paint coverage calculator](/paint-coverage-calculator) — buy all gallons from the same dye lot before you start rolling.',
      },
    ],
  },
  {
    slug: 'painting-over-dark-colors',
    category: 'prep',
    title: 'Painting Over Dark Colors — Primer Tips That Save Coats',
    description:
      'Cover navy, red, or black walls with lighter paint without using five finish coats. Tinted primer and technique.',
    readMinutes: 8,
    toolPath: '/paint-coverage-calculator',
    toolLabel: 'Paint coverage calculator',
    relatedGuideSlugs: ['primer-before-painting', 'how-many-coats-of-paint', 'how-to-prep-walls-for-painting'],
    sections: [
      {
        heading: 'Why dark-to-light is hard',
        paragraphs: [
          'Deep pigments bleed through light paint. One coat of white over red often looks pink. Skipping primer means three or four finish coats — more cost than a gallon of tinted primer.',
        ],
      },
      {
        heading: 'The winning approach',
        bullets: [
          'Clean walls; repair flaws',
          'One coat gray or tinted primer (ask store to tint 50–75% toward your new color)',
          'Two finish coats of your light color — use quality paint with good hide',
          'If still not covered, add a third finish coat rather than thinning paint',
        ],
        paragraphs: [
          'Update coat count to 2 (or 3) in the [paint coverage calculator](/paint-coverage-calculator) when planning purchases — dark-to-light jobs burn more gallons than a same-color refresh.',
        ],
      },
      {
        heading: 'Dark-to-light coat strategy',
        paragraphs: [
          'Step 1: clean walls. Step 2: bond primer or stain-blocking primer if needed. Step 3: tinted primer toward your new color (gray for whites, beige-tint for tans). Step 4: two finish coats minimum.',
          'Budget extra gallons — see [coat planning](/guides/how-many-coats-of-paint), then run totals in the [coverage calculator](/paint-coverage-calculator) or [how much paint](/how-much-paint-do-i-need).',
        ],
      },
    ],
    faqs: [
      {
        question: 'Does gray primer work under any color?',
        answer:
          'Gray primer is popular under medium tones. For very light pastels, ask for a white primer tinted toward your topcoat. The paint desk can match primer tint to your chips.',
      },
      {
        question: 'How many gallons for a dark-to-light room?',
        answer:
          'Plan primer plus two finish coats minimum. Enter coat count 2–3 and a conservative coverage rate (often 300–350 sq ft/gallon) in the [Behr paint coverage calculator](/paint-coverage-calculator).',
      },
    ],
  },
  {
    slug: 'how-to-fix-peeling-paint',
    category: 'prep',
    title: 'How to Fix Peeling Paint Before Repainting',
    description:
      'Scrape, sand, prime, and repaint areas where latex or oil paint is flaking — stop peel from spreading.',
    readMinutes: 9,
    toolPath: '/how-much-paint-do-i-need',
    toolLabel: 'How much paint calculator',
    relatedGuideSlugs: [
      'how-to-repair-walls-before-painting',
      'primer-before-painting',
      'how-to-prep-walls-for-painting',
    ],
    sections: [
      {
        heading: 'Diagnose the failure before scraping',
        paragraphs: [
          'Peeling is a symptom, not a complete diagnosis. Look at where it starts and what is exposed underneath. Failure around a window, ceiling stain, shower, or exterior wall can point to active moisture. Widespread sheets that reveal a glossy older coating often indicate poor adhesion, while isolated chips around patched areas may mean dust or unprimed filler was painted over.',
          'Press painter’s tape firmly across several nearby areas and pull it back. If sound-looking paint releases, the weak zone extends beyond the visible curl. Do not seal an active leak or damp substrate under another coating. Repair the water source, allow the assembly to dry, and confirm that the surface is stable before continuing.',
        ],
        bullets: [
          'Around plumbing or a roof line: investigate moisture first',
          'Over shiny old paint: suspect inadequate cleaning, sanding, or bonding primer',
          'At joint compound or filler: suspect dust, porosity, or skipped primer',
          'Only at an impact point: treat it as a local repair after checking the surrounding edge',
        ],
      },
      {
        heading: 'Remove failure without enlarging the damage',
        paragraphs: [
          'Protect the floor and wear appropriate eye and respiratory protection. Scrape from the loose area toward firmly bonded paint, keeping the blade nearly flat so it does not gouge drywall paper or soft wood. Stop only when the remaining edge resists moderate pressure; painting over a curled transition simply moves the next failure line outward.',
          'Older coatings can require special handling. If the age or history of the paint makes hazardous material a possibility, avoid aggressive sanding until you have identified the coating and chosen a safe method. For ordinary modern coatings, feather the firm edge gradually, remove dust, and inspect under side lighting. A ridge visible now will remain visible after repainting.',
        ],
        bullets: [
          'Cut away torn drywall face paper rather than leaving fibres standing',
          'Skim shallow depressions in thin passes and let each pass dry',
          'Sand the repair flush, then vacuum and wipe away remaining dust',
          'Recheck the entire perimeter for edges that flex under the scraper',
        ],
      },
      {
        heading: 'Choose primer for the exposed surface',
        paragraphs: [
          'Primer should solve the condition you actually uncovered. Use a drywall-compatible primer over new compound and exposed gypsum face, a bonding primer where a sound but hard or glossy coating remains, and a stain-blocking product only when a dry stain could migrate through the finish. Follow the primer label for surface compatibility, ventilation, drying, and recoating.',
          'Prime beyond the bare spot onto a narrow band of sound paint. After it dries, inspect for raised fibres or pinholes, make any final correction, and spot-prime again. The goal is one even, sealed repair rather than alternating porous filler and dense old paint.',
        ],
      },
      {
        heading: 'Repaint so the patch disappears',
        paragraphs: [
          'Match both colour and [interior paint sheen](/guides/interior-paint-sheen-guide). Even an accurate colour can flash when a flat patch sits inside a satin wall. Apply the specified finish coats and respect the label’s recoat time; a heavy coat does not replace two properly dried coats. On a small repair, feathering outward may work, but strong side light or higher sheen often makes a corner-to-corner wall coat the cleaner choice.',
          'Keep the room within the product’s listed temperature and humidity range and restore normal ventilation as the coating cures. Save the product name and colour formula for maintenance. If blistering, staining, or edge lifting returns, stop repainting and reassess moisture or substrate compatibility.',
        ],
        bullets: [
          'Spot repair when the surrounding coating is sound and the match is inconspicuous',
          'Recoat the full wall when colour, texture, or sheen differences remain obvious',
          'Use the [paint calculator](/how-much-paint-do-i-need) after deciding how much of the wall must be recoated',
        ],
      },
    ],
    faqs: [
      {
        question: 'Can I paint over peeling paint?',
        answer:
          'No — new paint will peel with the old layer. Remove all failing paint first, then prime and recoat.',
      },
      {
        question: 'Why is the repaired area visible after painting?',
        answer:
          'The usual causes are an unfeathered edge, different surface porosity, or a sheen mismatch. Sand the transition smooth, seal filler with primer, and use the same finish. If side lighting still reveals the patch, coat the wall from corner to corner.',
      },
    ],
  },
  {
    slug: 'how-to-remove-wallpaper-before-painting',
    category: 'prep',
    title: 'How to Remove Wallpaper Before Painting',
    description:
      'Strip old wallpaper, clean adhesive, and prep walls for paint or new paper — avoid bubbling and peel later.',
    readMinutes: 9,
    toolPath: '/wallpaper-calculator',
    toolLabel: 'Wallpaper calculator',
    relatedGuideSlugs: ['how-to-prep-walls-for-painting', 'primer-before-painting'],
    sections: [
      {
        heading: 'Identify the wall and wallpaper first',
        paragraphs: [
          'Start at a loose seam or switch-plate opening and lift a small corner. Some papers release as a complete sheet; others separate into a decorative face and a paper backing. Vinyl-faced paper usually needs its surface opened before water can reach the paste. Knowing which layer is resisting avoids soaking a wall that would have dry-stripped cleanly.',
          'Also identify the substrate. Painted plaster tolerates careful wetting differently from unsealed drywall face paper, which can soften, tear, and swell. Shut off power to the work area before removing switch and receptacle covers, keep liquid out of electrical boxes, protect floors, and test the least aggressive method in a hidden area.',
        ],
        bullets: [
          'Peelable paper: remove the face first, then treat the backing',
          'Strippable paper: pull slowly at a low angle to limit surface damage',
          'Coated or vinyl face: perforate lightly only if moisture cannot penetrate',
          'Unknown wall: use a small test patch before committing to steam or stripper',
        ],
      },
      {
        heading: 'Soften paste in manageable sections',
        paragraphs: [
          'Work in a section you can scrape while it remains damp. Apply the remover recommended for the paper and adhesive, allow the labelled dwell time, and re-wet rather than forcing a dry scraper. Hold a broad scraper nearly parallel to the wall. A steep blade angle causes gouges that create more finishing work than the wallpaper itself.',
          'Steam can help with stubborn layers, but excess heat and moisture can loosen drywall facing, soften compound, or damage nearby finishes. Use short passes and stop if the wall face begins to fuzz or delaminate. More scoring is not automatically better: deep perforations leave hundreds of small repairs.',
        ],
      },
      {
        heading: 'Remove adhesive, not just the paper',
        paragraphs: [
          'A bare-looking wall may still carry a thin paste film. Under angled light, mark glossy streaks and ridges, then wash using the adhesive remover’s directions and clean water for the final pass. Change the water frequently so dissolved paste is not spread back over the wall. When dry, rub the surface with a damp dark cloth; slime or tackiness means residue remains.',
          'Avoid relying on sanding alone for adhesive removal. Heat can gum the paste onto the abrasive and drive residue into the surface. Wash first, allow the wall to dry fully, and then sand only raised fibres and repaired areas.',
        ],
        bullets: [
          'Rinse trim and baseboards before residue dries on them',
          'Do not mix removal products unless the labels explicitly permit it',
          'Ventilate the room and use the protective equipment listed by the product maker',
          'Let the wall dry before judging stains, blisters, or remaining adhesive',
        ],
      },
      {
        heading: 'Repair, seal, and prepare for the next finish',
        paragraphs: [
          'Cut away loose face paper, seal damaged drywall paper with a compatible problem-surface sealer, and skim gouges in thin coats. Sand smooth and inspect with a lamp held close to the wall. Follow the complete [wall preparation guide](/guides/how-to-prep-walls-for-painting) before applying a finish.',
          'For paint, use a primer suitable for the repaired substrate and any trace staining, then apply the specified finish coats. For new wallpaper, use the primer or wallcovering preparation product recommended by the paper and adhesive manufacturers. Once the final wall dimensions are known, the [wallpaper calculator](/wallpaper-calculator) can estimate the replacement material.',
        ],
      },
    ],
    faqs: [
      {
        question: 'Can I paint over wallpaper instead of removing?',
        answer:
          'Only if paper is fully glued, no seams lifting, and you prime with an oil or shellac sealer first. Removal is safer long-term — water can loosen paper under latex paint later.',
      },
      {
        question: 'How do I know whether the wallpaper paste is gone?',
        answer:
          'Inspect the dry wall under side lighting and test a small area with a damp cloth. A slick, gummy, or reactivated film indicates remaining adhesive. Continue the label-approved wash and rinse process before repairing or priming.',
      },
    ],
  },
  {
    slug: 'interior-paint-sheen-guide',
    category: 'prep',
    title: 'Flat vs Eggshell vs Satin — Which Paint Sheen to Use?',
    description:
      'Choose the right interior finish for walls, trim, ceiling, kitchen, and bathroom — washability vs hide.',
    readMinutes: 8,
    toolPath: '/how-much-paint-do-i-need',
    toolLabel: 'How much paint calculator',
    relatedGuideSlugs: ['how-to-paint-a-room-step-by-step', 'how-to-prep-walls-for-painting'],
    sections: [
      {
        heading: 'What sheen changes in a finished room',
        paragraphs: [
          'Sheen describes how strongly a dried coating reflects light. As reflectivity rises, a surface generally becomes easier to wipe but also reveals more dents, sanding marks, roller texture, and touch-ups. Product names are not perfectly standardized, so one maker’s matte may resemble another maker’s eggshell. Compare the actual product data and sample boards rather than choosing by name alone.',
          'Colour also shifts with finish and lighting. A deeper colour in satin can appear richer and more reflective than the same formula in flat. View a cured sample in daylight and under the room’s evening lighting, then tilt it to see how windows and fixtures create glare.',
        ],
        bullets: [
          'Flat or matte: low reflection and forgiving appearance',
          'Eggshell: a subtle lustre that balances appearance and routine cleaning',
          'Satin: stronger reflection and a more noticeable surface texture',
          'Semi-gloss or gloss: pronounced highlights, commonly reserved for detailed or frequently handled surfaces',
        ],
      },
      {
        heading: 'Choose by cleaning and exposure',
        paragraphs: [
          'Start with what reaches the surface. A quiet adult bedroom may need little more than dusting, while an entry, play area, or kitchen sees fingerprints and repeated wiping. In a bathroom, the coating must suit the humidity and ventilation conditions; sheen alone does not make an unsuitable product moisture resistant. Check that the selected paint is approved for the room and substrate.',
          'Flat is a practical ceiling choice because it reduces reflected glare and disguises minor variations. Eggshell or a washable matte can suit many living spaces. Satin is useful where regular cleaning matters, provided the wall is prepared carefully. Trim, doors, and frames often use a harder semi-gloss product so handled edges clean more readily.',
        ],
        bullets: [
          'Low contact and uneven substrate: favour lower reflection',
          'Frequent fingerprints or splashes: compare the product’s washability and intended use',
          'Strong window light: expect higher sheen to emphasize waves and patches',
          'Doors and trim: prioritize blocking resistance and cleanability, not just shine',
        ],
      },
      {
        heading: 'Preparation matters more as sheen rises',
        paragraphs: [
          'Repair dents, feather patches, sand ridges, and remove dust before applying satin or glossier finishes. Prime porous repairs so they do not absorb the finish differently from the surrounding wall. Use a consistent roller cover and maintain a wet edge; changing application pressure midway can leave bands that become visible in reflected light.',
          'When changing from a glossy coating, clean and dull the old surface as directed by the new product. A bonding primer may be needed where adhesion is uncertain. Do a small compatibility test if the old coating is unknown rather than assuming a wall paint will grip it.',
        ],
      },
      {
        heading: 'Use a simple decision rule',
        paragraphs: [
          'Choose the lowest sheen that meets the room’s realistic cleaning needs and is offered in a suitable product. This usually gives the calmest appearance while avoiding unnecessary glare. Move one step higher when repeated washing, handling, or splash exposure justifies it—not because every kitchen or child’s room must use the same finish.',
          'For repairs, match the exact product and sheen whenever possible. Stir retained paint thoroughly and test after it dries. Age, cleaning, and application method can make touch-ups flash even from the original can, so repainting from corner to corner may be the only invisible solution. Use the [room paint calculator](/room-paint-calculator) or [Behr paint coverage calculator](/paint-coverage-calculator) once you decide whether the job is a patch or a full wall.',
        ],
        bullets: [
          'Need to hide flaws: compare flat and matte products',
          'Need routine gentle washing: compare washable matte and eggshell',
          'Need frequent wiping: evaluate satin products rated for that use',
          'Need a distinct, durable trim finish: compare semi-gloss options',
        ],
      },
    ],
    faqs: [
      {
        question: 'Can I use the same sheen on walls and trim?',
        answer:
          'You can, but contrast in sheen (eggshell walls + semi-gloss trim) is standard — trim wipes clean and frames the room.',
      },
      {
        question: 'Is satin always better for bathrooms?',
        answer:
          'No. Use a paint specifically suitable for the room’s moisture conditions, and maintain effective ventilation. Satin may make cleaning easier, but product suitability, surface preparation, and moisture control matter more than sheen by itself.',
      },
      {
        question: 'Does sheen change how much paint I need?',
        answer:
          'Slightly — higher sheen can cover a bit less area per gallon. Enter the Coverage line from your can in the [Behr paint coverage calculator](/paint-coverage-calculator) rather than assuming flat and satin use the same rate.',
      },
    ],
  },
  {
    slug: 'how-to-estimate-wallpaper-rolls',
    category: 'wallpaper',
    title: 'How to Estimate Wallpaper Rolls for a Room',
    description:
      'Wall width, roll length, pattern repeat, and waste — a plain-language guide before you buy wallpaper.',
    readMinutes: 9,
    toolPath: '/wallpaper-calculator',
    toolLabel: 'Wallpaper calculator',
    relatedGuideSlugs: ['wallpaper-pattern-repeat', 'accent-wall-wallpaper-tips'],
    sections: [
      {
        heading: 'Record the room as separate wall runs',
        paragraphs: [
          'Measure each wall from corner to corner and use the greatest finished height from ceiling to baseboard. Rooms that look rectangular often have a chimney breast, alcove, sloped ceiling, or bulkhead that changes the required strip length. Sketch these separately instead of hiding them inside one perimeter number.',
          'Record the width and height of doors and windows, but do not assume every opening can be deducted as simple square footage. Full-length drops still run above, below, or beside openings, and matching pieces may consume more paper than the opening saves. Treat large uninterrupted openings as possible deductions only after planning the strip layout.',
        ],
        bullets: [
          'Measure in one unit system and keep it consistent',
          'Use the tallest point when a ceiling is slightly out of level',
          'Mark inside and outside corners because strips should not be wrapped blindly through them',
          'List short sections above doors and windows for possible offcut reuse',
        ],
      },
      {
        heading: 'Read the roll label before doing the math',
        paragraphs: [
          'Use the exact packaged width, length, repeat, match type, and roll convention shown by the seller or manufacturer. A product described as a “double roll” may be sold as one physical bolt, while another listing may quote single-roll equivalents. Comparing only the word roll can double or halve an order by mistake.',
          'Confirm whether the listed dimensions describe one packaged bolt and whether the stated coverage is nominal or usable. Nominal area does not account for trimming and pattern alignment. Also record the batch, lot, or dye-lot identifier so every package in the room is from the same production run.',
        ],
      },
      {
        heading: 'Convert roll length into complete drops',
        paragraphs: [
          'Add the manufacturer’s recommended top and bottom trimming allowance to the measured wall height. For straight-match paper, increase that cut length to the next point where the motif can align. A drop-match design may require alternating cuts or a larger offset; follow its hanging instructions rather than treating it as a straight repeat.',
          'Divide the packaged roll length by the planned cut length and round down. That is the number of complete drops available from one bolt. Then divide each wall width by the paper width and round up to find strips needed. Finally, divide total strips by drops per bolt and round up again. The [wallpaper calculator](/wallpaper-calculator) performs this process when supplied with the exact label values.',
        ],
        bullets: [
          'Never count a partial final drop as usable for a full-height wall',
          'Keep a strip-by-strip plan for offcuts that may fit over openings',
          'Calculate each different ceiling height separately',
          'Recheck the result when changing to another colourway or paper construction',
        ],
      },
      {
        heading: 'Worked method with a hypothetical label',
        paragraphs: [
          'Suppose a wall needs seven full-width strips after its width is divided by the paper width. After adding trim and aligning the stated repeat, suppose the labelled roll length yields three complete drops. Seven strips divided by three drops per roll is 2.34, so the purchase must be rounded up to three packaged rolls. The unused drop capacity is not wasted if it can cover another planned section.',
          'This example demonstrates the sequence rather than a universal coverage value. Substitute your wall and label dimensions. Before ordering, verify whether a seller’s quantity selector represents physical bolts, single-roll equivalents, or pairs.',
        ],
      },
      {
        heading: 'Plan for installation risk and future repair',
        paragraphs: [
          'Add an appropriate contingency for damaged strips, complex corners, a large repeat, or a first-time installation. The best reserve is usually a complete unopened package from the same batch, provided the return policy is acceptable. Store leftover paper dry and labelled; a future repair is much easier when the exact batch is available.',
          'Before cutting, unroll every package enough to confirm colour and printing consistency. Stop if batch codes differ or a defect repeats. For more detail on match types, use the [pattern repeat guide](/guides/wallpaper-pattern-repeat).',
        ],
      },
    ],
    faqs: [
      {
        question: 'How many rolls for a 10×12 room?',
        answer:
          'Room length and width are not enough. The answer depends on wall height, openings, packaged roll dimensions, match type, and pattern repeat. Enter the exact wall and label specifications in the calculator, then confirm whether the seller counts physical bolts or single-roll equivalents.',
      },
      {
        question: 'Should I subtract every door and window?',
        answer:
          'No. A narrow opening may save little because full drops are still needed around it. Plan strips first and deduct only material that can genuinely be omitted or replaced with usable offcuts.',
      },
    ],
  },
  {
    slug: 'wallpaper-pattern-repeat',
    category: 'wallpaper',
    title: 'Wallpaper Pattern Repeat Explained',
    description:
      'What pattern repeat means on a wallpaper label, how it affects roll count, and tips for accent walls.',
    readMinutes: 8,
    toolPath: '/how-many-rolls-of-wallpaper',
    toolLabel: 'Wallpaper roll calculator',
    relatedGuideSlugs: ['how-to-estimate-wallpaper-rolls', 'accent-wall-wallpaper-tips'],
    sections: [
      {
        heading: 'Read repeat and match as separate instructions',
        paragraphs: [
          'The repeat is the vertical distance until a design begins again. The match tells you how neighbouring strips relate. Both matter: two papers can share the same repeat but require different starting points on every second strip. Read the symbols and hanging instructions on the actual label because naming and diagrams can vary by manufacturer.',
          'Before cutting, roll out two strip widths side by side on a clean floor. Locate a distinctive motif and verify how it meets at the seam. This simple mock-up catches mistaken assumptions about orientation, alternating strips, and the top of the design before material is committed.',
        ],
        bullets: [
          'Random or free match: adjacent strips do not nee
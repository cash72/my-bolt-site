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
          'Complete [repairs](/guides/how-to-repair-walls-before-painting) and [primer](/guides/primer-before-painting) before estimating gallons in the [room calculator](/room-paint-calculator).',
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
          'Order enough paint using [how much paint for a room](/guides/how-much-paint-for-a-room) before Day 2 — running out mid-wall shows lap marks.',
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
          'For repairs, match the exact product and sheen whenever possible. Stir retained paint thoroughly and test after it dries. Age, cleaning, and application method can make touch-ups flash even from the original can, so repainting from corner to corner may be the only invisible solution. Use the [room paint calculator](/room-paint-calculator) once you decide whether the job is a patch or a full wall.',
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
          'Random or free match: adjacent strips do not need a fixed vertical alignment',
          'Straight match: matching motifs meet at the same height across a seam',
          'Drop or offset match: the neighbouring strip starts at a different point in the repeat',
          'Reverse hang: alternate strips rotate as directed to control shading or design',
        ],
      },
      {
        heading: 'Turn wall height into a cut length',
        paragraphs: [
          'Begin with the maximum wall height and add the trimming allowance specified by the hanging instructions. For a straight match, increase this raw length to the next complete repeat position so every drop can begin and end with enough material. The difference between raw length and aligned cut length is pattern waste.',
          'For an offset match, do not automatically apply straight-match arithmetic. Some designs alternate between two starting points, and some labels describe a half-drop or other offset. Plan an A/B cutting sequence if directed, mark each strip lightly on the back, and keep the tops facing the same way.',
        ],
      },
      {
        heading: 'Use a measurement example, not an area shortcut',
        paragraphs: [
          'Imagine a measured wall plus trimming allowance requires a raw drop of 101 inches, and the paper label states a 24-inch straight repeat. The next repeat boundary is 120 inches, so each full drop must be planned at 120 inches for alignment. A roll that looked adequate by square footage may therefore yield fewer complete strips.',
          'Those numbers are only an arithmetic example; use the repeat and allowances on your own product. The reliable shopping unit is complete aligned drops per packaged roll, not nominal square feet. Enter the exact repeat in the [wallpaper calculator](/wallpaper-calculator), then compare its result with a manual strip count.',
        ],
      },
      {
        heading: 'Set a focal point before the first strip',
        paragraphs: [
          'On a feature wall, centre a dominant motif on the architectural or furniture focal point, then work outward. This can require trimming equal amounts from the first and last strips rather than starting with a full-width strip at one corner. In a full room, choose the least conspicuous place for the final mismatch and avoid assuming corners are perfectly plumb.',
          'Draw a plumb reference line for the first strip; do not use a corner as the only guide. Dry-lay enough strips to see whether a prominent motif will be clipped awkwardly at the ceiling, outlet bank, or window edge. A small starting adjustment can produce a more deliberate result without changing the number of rolls.',
        ],
      },
      {
        heading: 'Avoid repeat-related mistakes',
        bullets: [
          'Do not cut all strips until the first two are hung and the match is confirmed',
          'Do not rotate a strip unless the label calls for reverse hanging',
          'Do not mix production batches on one wall',
          'Do not discard labelled offcuts until doors, windows, and repairs are complete',
        ],
        paragraphs: [
          'Keep strips in sequence when the print has natural variation. If a seam will not align both near the ceiling and lower down, check plumb and wall flatness before stretching or forcing wet paper. The [roll estimation guide](/guides/how-to-estimate-wallpaper-rolls) explains how aligned cut length affects the purchase quantity.',
        ],
      },
    ],
    faqs: [
      {
        question: 'What if my label says no repeat?',
        answer:
          'Treat it as a random or free match only if the hanging instructions confirm that designation. Enter zero repeat in the calculator, while still allowing for top and bottom trimming and installation mistakes.',
      },
      {
        question: 'Does a larger repeat always mean more rolls?',
        answer:
          'Not always. It often increases each aligned cut length, but the final roll count depends on how many complete drops fit into the packaged roll and how many strips the walls need. Calculate complete drops with the exact label dimensions.',
      },
    ],
  },
  {
    slug: 'accent-wall-wallpaper-tips',
    category: 'wallpaper',
    title: 'Accent Wall Wallpaper — How Much Do You Need?',
    description:
      'Calculating wallpaper for one feature wall instead of a full room. Less paper, but pattern repeat still applies.',
    readMinutes: 7,
    toolPath: '/accent-wall-wallpaper-calculator',
    toolLabel: 'Accent wall calculator',
    relatedGuideSlugs: ['wallpaper-pattern-repeat', 'how-to-estimate-wallpaper-rolls'],
    sections: [
      {
        heading: 'Choose a wall that supports the room',
        paragraphs: [
          'A useful accent wall has a clear visual reason: it frames a bed, fireplace, dining area, or other focal point. A wall broken by several doors, vents, or cabinets can fragment a large design and create excessive cutting. Stand at the room entrance and from the main seated position to check whether the selected wall feels intentional from both views.',
          'Consider daylight and fixtures. Reflective or dark papers can look dramatically different opposite a window or under grazing light. Order a sample and place it vertically on the wall for several days before buying full rolls. Check it beside flooring, trim, and the paint on the adjoining walls.',
        ],
      },
      {
        heading: 'Measure full-width drops, not just square area',
        paragraphs: [
          'Measure the wall width at the top, middle, and bottom and use the largest figure for strip planning. Measure height in several places as well. Divide the maximum width by the labelled paper width and round up to determine the number of strips. Then calculate how many pattern-aligned drops fit in each packaged roll.',
          'Openings do not always produce a full deduction. A window may interrupt several strips while still requiring matching sections above and below it. Sketch the strip positions and identify where offcuts can be reused. Enter the exact roll length, width, and repeat in the [accent wall calculator](/accent-wall-wallpaper-calculator).',
        ],
      },
      {
        heading: 'Centre the design deliberately',
        paragraphs: [
          'For a strong geometric, mural-like, or oversized botanical print, decide which motif should sit on the focal centreline. Mark that line and plan equal edge cuts so neither corner ends with an accidental sliver. The visual centre may be the bed or fireplace rather than the mathematical centre of the wall.',
          'Use a level to create a plumb starting line. Corners are frequently out of plumb, so starting from one can make the design drift across the wall. Dry-plan at least the first and last strip widths. Review the [pattern repeat guide](/guides/wallpaper-pattern-repeat) before cutting a straight, drop, or reverse-hung design.',
        ],
      },
      {
        heading: 'Prepare the wall and boundaries',
        paragraphs: [
          'Remove loose coatings, repair dents, sand smooth, and use the wall preparation product specified for the wallpaper and adhesive. A feature wall attracts attention, so ridges and unsealed patches are especially visible in side light. Let repairs and primer dry fully before hanging.',
          'Decide how the paper will terminate at inside corners, trim, baseboards, and the ceiling. Do not assume a decorative caulk bead will hide poor cuts. Remove switch plates safely, keep paste out of electrical boxes, and pre-plan cuts around fixed objects. If the wall has persistent dampness or an unresolved leak, correct that condition before covering it.',
        ],
      },
      {
        heading: 'Coordinate paint without competing',
        paragraphs: [
          'Pull a quieter background or secondary colour from the paper for the remaining walls rather than automatically matching its boldest motif. Test the paint and paper together under the room’s real lighting. A lower-reflection wall finish often lets the pattern remain the focal point, but select a paint suitable for the room’s cleaning needs.',
          'Paint adjoining walls and trim before hanging where practical, allowing the coating to cure as directed. Use the [room paint calculator](/room-paint-calculator) for the non-papered surfaces. Keep the wallpaper label, batch details, and a usable offcut with your maintenance records.',
        ],
        bullets: [
          'Check every package for the same batch identifier before cutting',
          'Retain one full-width piece long enough for a future damaged-strip repair',
          'Photograph the product label and installation instructions',
          'Use a soft brush or cleaning method approved for that wallcovering',
        ],
      },
    ],
    faqs: [
      {
        question: 'Can I use wallpaper on just one wall?',
        answer:
          'Yes — accent walls are common. Calculate that wall only, but order from the same batch and keep spare paper for edge repairs.',
      },
      {
        question: 'Should the pattern be centred on the wall?',
        answer:
          'Centre it on the room’s visual focal point when the design has a dominant motif. That may be the wall centre, but a bed, fireplace, or built-in can shift the best centreline. Dry-plan the edge strip widths before committing.',
      },
    ],
  },
  {
    slug: 'how-much-fence-stain-do-i-need',
    category: 'stain',
    title: 'How Much Fence Stain Do I Need?',
    description:
      'Calculate gallons for board-on-board, shadowbox, or privacy fence stain using length, height, and coverage per gallon.',
    readMinutes: 8,
    toolPath: '/fence-stain-calculator',
    toolLabel: 'Fence stain calculator',
    relatedGuideSlugs: ['deck-stain-coverage', 'exterior-stain-two-coats'],
    sections: [
      {
        heading: 'Measure each fence section and side',
        paragraphs: [
          'Measure the horizontal length and average height of each section, then multiply length by height for one face. Keep sections separate when heights or construction styles change. Decide whether the project includes one face or both: a 100-foot-long, 6-foot-high fence is 600 square feet on one face and 1,200 square feet for two faces before adjustments.',
          'Measure gates as their own rectangles if they will be stained. Subtract only true openings that contain no wood. Posts, caps, kickboards, and exposed edges add area, while widely spaced pickets reduce the solid face. The [fence stain calculator](/fence-stain-calculator) can account for fence style, but a direct board count is more accurate for an unusual design.',
        ],
        bullets: [
          'Record each height change instead of using the tallest height everywhere',
          'Count both faces only when both are accessible and included in the job',
          'Add gates, posts, caps, and trim that receive the same product',
          'Keep a sketch so the crew knows which neighbour-facing sections are included',
        ],
      },
      {
        heading: 'Use the coverage rate on the selected stain',
        paragraphs: [
          'Do not estimate from a generic “stain” rate. Coverage changes with product chemistry, application method, wood species, surface texture, porosity, and whether the boards are new, weathered, or previously coated. Use the rate printed on the current product label or technical sheet for the relevant surface condition.',
          'Rough-sawn faces, end grain, cracks, and dry weathered boards can absorb more than smooth sealed wood. Spraying can also create transfer loss, especially on open pickets. Apply a measured test area when the wood is unusually porous, then compare actual use with the estimate before purchasing the remainder.',
        ],
        bullets: [
          'Keep the calculator rate in the same units as the product label',
          'Use the label’s rough-surface range when that matches the fence',
          'Do not thin stain to stretch coverage unless the manufacturer permits it',
          'Round the final purchase to available container sizes',
        ],
      },
      {
        heading: 'Calculate coats from the product system',
        paragraphs: [
          'If a hypothetical label lists 200 square feet per gallon for one coat, a measured 1,200-square-foot two-sided fence would require 1,200 ÷ 200 = 6 gallons for that coat before waste and detail work. This is an arithmetic example, not a recommended coverage rate; replace 200 with the value for your product and substrate.',
          'Do not simply double the quantity until you confirm that the product calls for two coats. Some penetrating systems specify one saturating application, some use wet-on-wet passes, and film-forming products may require separate coats. The [exterior stain coat guide](/guides/exterior-stain-two-coats) explains how to read that decision.',
        ],
      },
      {
        heading: 'Prepare for even absorption',
        paragraphs: [
          'Clean dirt, biological growth, and loose fibres using methods compatible with the wood and coating. Remove failing previous finish where required, rinse away cleaning residue, and allow the fence to reach the moisture condition specified by the stain maker. Staining damp wood can reduce penetration or trap moisture.',
          'Protect plants, masonry, siding, and neighbouring property from cleaner and overspray. Stir the stain as directed and mix containers together when colour uniformity matters. Work complete board lengths or panel sections while maintaining a wet edge; stopping in the middle of a board can leave lap marks.',
        ],
      },
      {
        heading: 'Choose a workable weather window',
        paragraphs: [
          'Follow the label’s limits for air and surface temperature, humidity, rain-free time, direct sun, and drying before evening dew. In many Canadian regions, spring and autumn can bring cool nights even after a mild afternoon, so check the full application and curing window rather than only the daytime high.',
          'After the fence dries, record the product, colour, batch, application date, and areas completed. Inspect exposed tops, horizontal caps, end grain, and sprinkler-facing sections more often because they can weather differently. Maintenance should be triggered by the product’s condition and manufacturer guidance, not an arbitrary calendar interval.',
        ],
      },
    ],
    faqs: [
      {
        question: 'Do I stain both sides of a fence?',
        answer:
          'Include only the faces you are authorized and able to finish. Before entering neighbouring property or coating a shared boundary fence, confirm access and the agreed scope with the owner. Calculate one face for a one-sided job and two faces for both sides.',
      },
      {
        question: 'Should I buy extra fence stain?',
        answer:
          'Allow for the product maker’s stated application loss and the fence’s roughness, details, and test-area result. Avoid a universal waste percentage. Keep enough matching product for missed edges and small maintenance work, stored according to the label.',
      },
    ],
  },
  {
    slug: 'deck-stain-coverage',
    category: 'stain',
    title: 'Deck Stain Coverage — Boards, Rails & Stairs',
    description:
      'How to estimate deck stain gallons including floor boards, railings, steps, and vertical surfaces.',
    readMinutes: 8,
    toolPath: '/deck-stain-calculator',
    toolLabel: 'Deck stain calculator',
    relatedGuideSlugs: ['how-much-fence-stain-do-i-need', 'exterior-stain-two-coats'],
    sections: [
      {
        heading: 'Build the estimate surface by surface',
        paragraphs: [
          'Start with deck length multiplied by width for the walking surface. A 12-by-16-foot rectangle is 192 square feet. Measure each additional landing separately and exclude areas covered permanently by a structure only if they will not be coated. Do not stop at the footprint when rails, fascia, steps, and posts are part of the scope.',
          'For stairs, measure tread width by tread depth and riser width by riser height, then multiply by the number of similar steps. Treat broad rail caps as narrow rectangles. Balusters and decorative rails are time-consuming and difficult to estimate by footprint, so measure a representative section or use a direct component count.',
        ],
        bullets: [
          'Walking boards and landings',
          'Treads, risers, and stair stringers',
          'Top and bottom rails, balusters, and posts',
          'Fascia, exposed beam faces, skirting, and board ends',
        ],
      },
      {
        heading: 'Match the rate to wood condition',
        paragraphs: [
          'Use the selected product’s coverage range for the prepared substrate. Smooth previously coated boards, rough weathered wood, and freshly stripped surfaces do not absorb the same amount. End grain and checking can take extra material. A small measured test area gives better evidence than transferring a rate from another deck.',
          'Preparation also determines whether the stain can bond or penetrate. Clean the deck, remove incompatible or failing finish, rinse thoroughly, and allow it to dry to the moisture condition required by the manufacturer. Aggressive pressure washing can damage soft fibres and create a fuzzy surface, so use a method appropriate to the wood and existing coating.',
        ],
      },
      {
        heading: 'Decide the coat count from instructions',
        paragraphs: [
          'Read the complete application system before entering a coat count. Some penetrating stains require one controlled application; others specify a second wet-on-wet pass. Film-forming products may call for distinct coats with a stated recoat interval. Applying an unnecessary heavy coat can leave a tacky or uneven surface rather than improve durability.',
          'If the deck has an existing finish, confirm compatibility before recoating. Water should not be used as the only compatibility test, and adding a different coating over a sound-looking but incompatible layer can lead to peeling. Make a test patch and let it cure before committing to the full deck.',
        ],
      },
      {
        heading: 'Run a transparent calculation',
        paragraphs: [
          'Add the measured areas for every included component. Divide that total by the label coverage for one coat, multiply only by the specified coat count, then allow for the product’s stated application loss and the complexity of rails or gaps. Round up to container sizes actually sold. Use the [deck stain calculator](/deck-stain-calculator) to keep the arithmetic visible.',
          'For example, the 192-square-foot deck surface above remains 192 square feet until stair and railing measurements are added. If those components total another 74 square feet, the project area is 266 square feet. Divide 266 by your own product’s labelled coverage; no generic gallons-per-deck shortcut is required.',
        ],
        bullets: [
          'Keep separate totals if rails and decking use different products',
          'Do not count underside framing unless it is actually in scope',
          'Allow for gaps and edges only when the application reaches them',
          'Use the [two-coat guide](/guides/exterior-stain-two-coats) when instructions are unclear',
        ],
      },
      {
        heading: 'Apply in safe deck conditions',
        paragraphs: [
          'Check air and surface temperature, sun exposure, humidity, wind, rain-free period, and cure time on the label. A deck board can be hotter than the air in direct sun, causing stain to dry before it can be worked evenly. Cool nights and dew matter as well, particularly during short shoulder-season weather windows in Canada.',
          'Plan an exit route so freshly coated stairs or doorways do not trap you. Keep people, pets, furniture, and planters off the surface for the stated cure period. Afterward, inspect high-traffic paths, exposed board ends, rail caps, and areas where water lingers. Clean gently using methods approved for the coating and recoat based on condition.',
        ],
      },
    ],
    faqs: [
      {
        question: 'Oil vs water-based deck stain coverage?',
        answer:
          'Coverage varies by formula, not just base. Use the number on your specific product label rather than rules of thumb.',
      },
      {
        question: 'Do I include gaps between deck boards?',
        answer:
          'Count only surfaces you will actually reach. The top-face footprint already covers the board widths plus gaps as a plan area, so do not add the gaps again. Add accessible board edges separately only if the application method and scope include coating them.',
      },
    ],
  },
  {
    slug: 'exterior-stain-two-coats',
    category: 'exterior',
    title: 'Exterior House Stain — Planning Gallons & Coats',
    description:
      'Estimate stain for siding, logs, or exterior walls. Coverage, two-coat rules, and when to use our house stain calculator.',
    readMinutes: 8,
    toolPath: '/exterior-house-stain-calculator',
    toolLabel: 'House stain calculator',
    relatedGuideSlugs: ['deck-stain-coverage', 'how-much-fence-stain-do-i-need'],
    sections: [
      {
        heading: 'Measure the exterior envelope by elevation',
        paragraphs: [
          'Measure each wall width by its height and keep the four elevations separate. For a simple 40-by-30-foot footprint with 9-foot rectangular walls, the perimeter is 140 feet and the base wall area is 1,260 square feet before gables and openings. This is a geometry example only; actual wall heights, additions, and cladding details must be measured.',
          'Add triangular gables as one-half base times height. Measure dormer faces, exposed foundation trim, fascia, and other included elements separately. Deduct only substantial windows and doors; detailed trim and extra cutting can offset small opening deductions. The [house stain calculator](/exterior-house-stain-calculator) provides a starting total that should be checked against elevation notes.',
        ],
      },
      {
        heading: 'One coat or two is a product decision',
        paragraphs: [
          'Do not use “new wood equals two coats” as a universal rule. Penetrating stains, wet-on-wet systems, and film-forming solid stains can have very different application requirements. Read the technical instructions for the exact product, substrate, and desired opacity. The specified spread rate may also differ between the first and later coats.',
          'A maintenance coat is appropriate only when the existing finish is compatible, well bonded, clean, and within the product system’s recoat guidance. Peeling, heavy build-up, widespread greying, or an unknown previous coating calls for closer diagnosis and possibly stripping or a different preparation system.',
        ],
        bullets: [
          'One application: use only where the product specifies it',
          'Wet-on-wet passes: complete within the maker’s timing window',
          'Separate coats: observe the stated drying and recoat interval',
          'Maintenance coat: verify adhesion and compatibility first',
        ],
      },
      {
        heading: 'Estimate each coat with the correct rate',
        paragraphs: [
          'Divide measured area by the label coverage for the first coat. If a second coat is required and has a different spread rate, calculate it separately rather than simply doubling the first-coat quantity. Rough cedar, logs, end grain, and deeply weathered wood may use more material than smooth siding, so select the label range that matches the prepared surface.',
          'Spray application can lose material to wind and overspray; back-brushing may be required for penetration and evenness. Use the product maker’s stated allowance and local test-area use instead of a universal waste percentage. Keep separate calculations when siding, trim, deck surfaces, or logs use different products.',
        ],
      },
      {
        heading: 'Prepare for adhesion and uniform colour',
        paragraphs: [
          'Inspect for moisture entry, rot, failed caulking, loose fasteners, biological growth, and peeling finish. Correct the cause of deterioration before cosmetic work. Clean using a method compatible with the substrate, rinse residues, and let the assembly dry to the condition required by the stain maker. Sand or strip as directed, taking suitable precautions for old or unknown coatings.',
          'Box compatible containers together when the manufacturer recommends it, and work to natural breaks such as corners or boards. Maintain a wet edge to reduce lap marks. Apply a test area where it can be evaluated after full drying; colour and opacity on rough wood often differ from a small store sample.',
        ],
      },
      {
        heading: 'Wait for the complete weather window',
        paragraphs: [
          'Check the forecast against the label’s limits for air and surface temperature, direct sun, wind, humidity, rain, and overnight dew. The wall surface can be much hotter in sun or cooler in shade than the reported air temperature. In Canadian spring and autumn conditions, a suitable afternoon can still be followed by a night below the product’s curing range.',
          'Plan staging so each elevation can be completed to a natural break. Follow appropriate ladder, scaffold, and fall-protection practices for the site; material estimation does not make high work safe. Protect roofs, masonry, glazing, plants, vehicles, and neighbouring property from cleaner and overspray.',
        ],
      },
      {
        heading: 'Inspect and maintain by exposure',
        bullets: [
          'Check south- and west-facing walls for faster weathering',
          'Inspect lower courses, end grain, and splash zones after wet seasons',
          'Clean gently without damaging the stain film or wood fibres',
          'Record product, colour, batch, prep, coat count, and application date',
        ],
        paragraphs: [
          'Recoat when inspection and manufacturer guidance indicate it, before widespread failure makes preparation more invasive. Horizontal rail caps and trim can age faster than vertical siding and may need separate attention. Use the [fence](/fence-stain-calculator) or [deck stain calculator](/deck-stain-calculator) for those surfaces rather than folding them into the house-wall rate.',
        ],
      },
    ],
    faqs: [
      {
        question: 'Paint vs stain on exterior — same calculator?',
        answer:
          'The area math is the same, but coverage, preparation, and coat requirements are product-specific. Select the correct product type and enter the rate from its current label or technical sheet rather than borrowing a value from paint or another stain.',
      },
      {
        question: 'Can I apply a second coat just for darker colour?',
        answer:
          'Only if the product instructions allow another coat on that substrate. Extra material can create gloss, tackiness, poor penetration, or later peeling. Test the approved coat system to judge colour before coating the full elevation.',
      },
    ],
  },
  {
    slug: 'interior-painting-project-guide',
    category: 'paint',
    title: 'Interior Painting Project Guide — Room Redo Start to Finish',
    description:
      'Complete DIY roadmap for painting a room: assess oil vs latex, choose primer, prep walls, gather tools, cut in and roll, and time your coats. Links every step to free calculators.',
    readMinutes: 12,
    toolPath: '/how-much-paint-do-i-need',
    toolLabel: 'How much paint calculator',
    relatedGuideSlugs: [
      'identify-oil-vs-latex-paint-on-walls',
      'how-to-choose-primer-interior-walls',
      'interior-painting-tools-and-supplies-list',
      'how-to-paint-a-room-step-by-step',
    ],
    sections: [
      {
        heading: 'Why paint projects fail mid-way',
        paragraphs: [
          'Most DIY paint jobs go wrong before the roller hits the wall: wrong primer over oil, skipping prep, buying too little paint, or recoating while the first coat is still soft. This guide is your project map — each phase links to a deeper article and the [how much paint calculator](/how-much-paint-do-i-need) so you buy once.',
          'Use this as a checklist. Jump to the phase that matches where you are today, then follow the next-step links at the end of each article.',
        ],
      },
      {
        heading: 'The 7-phase interior paint flow',
        bullets: [
          'Phase 1 — Estimate gallons: measure walls and run the [paint calculator](/how-much-paint-do-i-need) or [coverage calculator](/paint-coverage-calculator)',
          'Phase 2 — Identify what is on the wall: oil vs latex (alcohol wipe test)',
          'Phase 3 — Choose primer: drywall, stain-block, bonding, or tinted',
          'Phase 4 — Prep and repair: clean, patch, sand, tape',
          'Phase 5 — Gather tools: rollers, brushes, trays, drop cloths',
          'Phase 6 — Apply: cut in, roll, maintain a wet edge',
          'Phase 7 — Recoat timing: hours between coats, when to stop for the night',
        ],
        paragraphs: [
          'Phase 2 and 3 are the most searched — and the most skipped. If you paint latex over glossy oil without bonding primer, you get peeling in months. Start with [how to tell oil vs latex paint](/guides/identify-oil-vs-latex-paint-on-walls) before you buy finish paint.',
        ],
      },
      {
        heading: 'Phase-by-phase deep links',
        bullets: [
          'Estimate: [How much paint for a room](/guides/how-much-paint-for-a-room) · [Coverage per gallon](/guides/paint-coverage-per-gallon)',
          'Identify: [Oil vs latex on walls](/guides/identify-oil-vs-latex-paint-on-walls) · [Painting over dark colors](/guides/painting-over-dark-colors)',
          'Primer: [How to choose primer](/guides/how-to-choose-primer-interior-walls) · [Should I use primer?](/guides/primer-before-painting)',
          'Prep: [Prep walls for painting](/guides/how-to-prep-walls-for-painting) · [Repair walls](/guides/how-to-repair-walls-before-painting)',
          'Tools: [Painting tools and supplies list](/guides/interior-painting-tools-and-supplies-list)',
          'Apply: [Paint a room step by step](/guides/how-to-paint-a-room-step-by-step) · [How many coats](/guides/how-many-coats-of-paint)',
          'Timing: [How long between paint coats](/guides/how-long-between-paint-coats) · [Sheen guide](/guides/interior-paint-sheen-guide)',
        ],
        paragraphs: [
          'Ceilings, exteriors, and wallpaper follow the same prep logic but different products — use the [ceiling paint calculator](/ceiling-paint-calculator) or [exterior paint calculator](/exterior-paint-calculator) when those surfaces are in scope.',
        ],
      },
      {
        heading: 'One-weekend room plan',
        paragraphs: [
          'Friday evening: test for oil paint, buy primer and tools, patch and sand small repairs. Saturday morning: clean, tape, prime. Saturday afternoon / Sunday: first finish coat. Sunday afternoon or Monday: second coat after full dry time from the can.',
          'Cold or humid weather stretches dry times — see [how long between paint coats](/guides/how-long-between-paint-coats) before you schedule guests or furniture back into the room.',
        ],
      },
    ],
    faqs: [
      {
        question: 'What is the correct order for painting a room?',
        answer:
          'Ceiling first (if painting), then walls, then trim and doors last. Prep and primer always come before finish paint. Estimate gallons before you shop so you buy matching batch numbers.',
      },
      {
        question: 'Do I need primer on every paint job?',
        answer:
          'Not always — clean latex over latex in a similar color can skip primer. New drywall, oil paint, stains, patches, and dark-to-light color changes almost always need the right primer first.',
      },
      {
        question: 'How do I calculate how much paint to buy?',
        answer:
          'Measure wall length × height for each wall, subtract large windows and doors, multiply by coats, divide by coverage on the can (often ~350–400 sq ft/gallon). Our free calculator does the math for you.',
      },
    ],
  },
  {
    slug: 'identify-oil-vs-latex-paint-on-walls',
    category: 'prep',
    title: 'How to Tell If Paint Is Oil or Latex — Quick Wall Tests',
    description:
      'Alcohol wipe test and other DIY methods to identify oil-based vs water-based paint before you prime or repaint. Avoid peeling by matching the right primer.',
    readMinutes: 9,
    toolPath: '/how-much-paint-do-i-need',
    toolLabel: 'How much paint calculator',
    relatedGuideSlugs: [
      'how-to-choose-primer-interior-walls',
      'primer-before-painting',
      'painting-over-oil-based-paint',
      'interior-painting-project-guide',
    ],
    sections: [
      {
        heading: 'Why this test matters before you buy paint',
        paragraphs: [
          'Latex (water-based) paint will not stick reliably over glossy oil-based enamel without sanding and a bonding primer. Oil over latex can also crack. Guessing wrong is the #1 cause of peeling DIY wall paint within a year.',
          'Homes painted before the 1990s often still have oil enamel on trim, kitchens, and bathrooms. Newer rooms are usually latex — but landlords, flippers, and mystery coats mean you should always test.',
        ],
      },
      {
        heading: 'Alcohol wipe test (most reliable DIY method)',
        bullets: [
          'Clean a small area with mild soap and water; dry completely',
          'Dip a cotton ball or cloth in rubbing alcohol (isopropyl 70%+)',
          'Rub hard for 10–15 seconds on an inconspicuous spot',
          'Latex / water-based: color transfers onto the cotton; film softens',
          'Oil-based / alkyd: little or no color transfer; surface stays hard',
        ],
        paragraphs: [
          'Test more than one wall if rooms were painted at different times. Trim and doors are often oil even when walls are latex — test both.',
        ],
      },
      {
        heading: 'Other clues (use with the wipe test)',
        bullets: [
          'Oil enamel: harder, glossier sheen that feels slick; yellows slightly with age',
          'Latex: more flexible, chalks slightly when rubbed dry with a finger',
          'Smell: oil solvents smell stronger when sanded; latex is milder',
          'Sanding: oil dust feels finer and powdery; latex can gum a bit',
        ],
        paragraphs: [
          'Clues alone are not enough — always confirm with alcohol before you skip bonding primer.',
        ],
      },
      {
        heading: 'What to do next based on the result',
        paragraphs: [
          'If the wipe test shows latex and walls are sound: clean, spot-prime patches, then finish paint. Follow [how to choose primer](/guides/how-to-choose-primer-interior-walls) only if you have stains, new drywall, or a big color change.',
          'If the wipe test shows oil (or you are unsure): light sand (120–150 grit) to dull gloss, wipe dust, apply bonding primer, then latex finish. Full steps in [painting over oil-based paint](/guides/painting-over-oil-based-paint).',
          'Still planning gallons? Run wall measurements through the [how much paint calculator](/how-much-paint-do-i-need) after you know coats and primer needs.',
        ],
      },
    ],
    faqs: [
      {
        question: 'Can I paint latex over oil without primer?',
        answer:
          'Not safely on glossy oil. Dull the surface with sanding and use a bonding primer labeled for oil-to-latex conversions. Skipping this step is a common cause of peeling.',
      },
      {
        question: 'Does the alcohol test work on ceilings and trim?',
        answer:
          'Yes. Test each surface type — ceilings are often flat latex while trim may be oil enamel in older homes.',
      },
      {
        question: 'What if nothing transfers but the wall feels soft?',
        answer:
          'You may have a failing film or heavy dirt. Clean thoroughly and retest. If the coating remains soft or chalky after cleaning, scrape loose paint and prime with a bonding or chalk-sealing primer before finishing.',
      },
    ],
  },
  {
    slug: 'how-to-choose-primer-interior-walls',
    category: 'prep',
    title: 'How to Choose Primer for Interior Walls — Decision Guide',
    description:
      'Pick the right interior primer: PVA for new drywall, stain-blocking for marks, bonding for oil and gloss, tinted for dark-to-light. Decision table for DIY painters.',
    readMinutes: 10,
    toolPath: '/how-much-paint-do-i-need',
    toolLabel: 'How much paint calculator',
    relatedGuideSlugs: [
      'identify-oil-vs-latex-paint-on-walls',
      'primer-before-painting',
      'painting-over-dark-colors',
      'interior-painting-tools-and-supplies-list',
    ],
    sections: [
      {
        heading: 'Primer picker — match the problem, not the brand',
        paragraphs: [
          'Primer is a tool with a job: seal porous drywall, block stains, stick to slick oil, or hide a dark color. Buying any white primer wastes money when you need stain-block or bonding chemistry.',
          'First identify what is on the wall with the [oil vs latex test](/guides/identify-oil-vs-latex-paint-on-walls). Then use the table below.',
        ],
      },
      {
        heading: 'Which primer for which wall',
        bullets: [
          'New drywall / large mud patches → PVA or drywall primer (cheap, high coverage)',
          'Water stains, smoke, nicotine, crayon → stain-blocking primer (shellac or labeled water-based stain blocker)',
          'Glossy oil enamel or hard slick surfaces → bonding / adhesion primer after light sanding',
          'Dark red, navy, black → light → tinted primer (gray or toward finish color)',
          'Clean latex, similar color refresh → often skip primer; spot-prime patches only',
          'Bare wood trim before wall paint → wood primer on trim; walls still get their own product',
        ],
        paragraphs: [
          'More context on when to skip primer lives in [Should I use primer before painting?](/guides/primer-before-painting).',
        ],
      },
      {
        heading: 'How much primer to buy',
        paragraphs: [
          'Interior primers often cover 200–300 sq ft per gallon — less than finish paint. Count one full coat over every wall you will prime. Large color changes or porous new drywall may need a second primer coat.',
          'Estimate finish paint separately in the [how much paint calculator](/how-much-paint-do-i-need). Add primer gallons as a second pass of the same wall area at ~250 sq ft/gallon if your can does not list coverage — or convert the primer label rate in the [Behr paint coverage calculator](/paint-coverage-calculator).',
        ],
      },
      {
        heading: 'Apply primer like finish paint',
        bullets: [
          'Stir thoroughly; do not thin unless the label allows',
          'Cut in edges, then roll; keep a wet edge',
          'Sand lightly with 220 grit if grain raises on drywall primer',
          'Recheck stain bleed — second coat of stain-blocker if marks show through',
          'Topcoat within the recoat window on the can (often same day for latex primers)',
        ],
        paragraphs: [
          'Next: gather [tools and supplies](/guides/interior-painting-tools-and-supplies-list), then follow [how to paint a room step by step](/guides/how-to-paint-a-room-step-by-step).',
        ],
      },
    ],
    faqs: [
      {
        question: 'Is paint-and-primer-in-one enough?',
        answer:
          'On clean latex walls with a small color change, often yes. On new drywall, oil paint, heavy stains, or dramatic color shifts, use a dedicated primer first — paint-and-primer blends are not true stain blockers or bonding primers.',
      },
      {
        question: 'Shellac vs water-based stain-blocking primer?',
        answer:
          'Shellac (alcohol-based) seals severe smoke and water stains best but has strong odor and cleanup with denatured alcohol. Water-based stain blockers are easier for most DIY rooms with light-to-moderate stains.',
      },
      {
        question: 'Do I need tinted primer for dark walls?',
        answer:
          'Tinted primer (gray or toward your new light color) reduces the number of finish coats when going from dark to light. See our [painting over dark colors](/guides/painting-over-dark-colors) guide for coat planning.',
      },
    ],
  },
  {
    slug: 'interior-painting-tools-and-supplies-list',
    category: 'paint',
    title: 'Interior Painting Tools and Supplies List — What You Actually Need',
    description:
      'DIY checklist of rollers, brushes, trays, tape, drop cloths, and prep tools for painting a room — what to buy, what to skip, and how to match nap to wall texture.',
    readMinutes: 9,
    toolPath: '/how-much-paint-do-i-need',
    toolLabel: 'How much paint calculator',
    relatedGuideSlugs: [
      'how-to-paint-a-room-step-by-step',
      'how-to-prep-walls-for-painting',
      'how-to-choose-primer-interior-walls',
      'interior-painting-project-guide',
    ],
    sections: [
      {
        heading: 'Buy once, paint better',
        paragraphs: [
          'Cheap foam brushes and overloaded trays cause drips and texture. A short, solid kit costs less than a wasted gallon of finish paint. Use this list before you shop — then calculate gallons with the [paint calculator](/how-much-paint-do-i-need).',
        ],
      },
      {
        heading: 'Must-have painting tools',
        bullets: [
          '9-inch roller frame + quality covers (3/8" nap for smooth walls; 1/2–3/4" for light texture)',
          '2–2.5 inch angled sash brush for cutting in (buy one good brush, not three cheap ones)',
          'Paint tray + liners (or a 5-gallon bucket with roller screen for larger rooms)',
          'Extension pole for walls and ceilings',
          'Painter’s tape (blue or green) + plastic or canvas drop cloths',
          'Putty knife, sandpaper (120–220), caulk for trim gaps',
          'Screwdriver for outlet covers; ladder or sturdy step stool',
        ],
        paragraphs: [
          'Optional but worth it: paint edger for ceilings, microfiber cloths, TSP substitute for cleaning, and a roller spinner for cleanup.',
        ],
      },
      {
        heading: 'Match roller nap to the surface',
        bullets: [
          'Smooth drywall / light orange peel → 3/8 inch nap',
          'Medium texture / popcorn touch-ups → 1/2 to 3/4 inch',
          'Ceilings → often same nap as walls; use a dedicated cover to avoid lint transfer',
          'Trim → brush only, or mini foam rollers for flat door panels',
        ],
        paragraphs: [
          'Worn covers leave fuzz in the film. Replace covers when they mat or shed — one spare cover per color is cheap insurance.',
        ],
      },
      {
        heading: 'Prep supplies before the paint aisle',
        paragraphs: [
          'Cleaning solution, patch compound, and primer are prep — buy them before finish paint so you are not stuck mid-project. See [how to prep walls for painting](/guides/how-to-prep-walls-for-painting) and [how to choose primer](/guides/how-to-choose-primer-interior-walls).',
          'Ready to roll? Follow [how to paint a room step by step](/guides/how-to-paint-a-room-step-by-step) for cut-in and rolling technique.',
        ],
      },
    ],
    faqs: [
      {
        question: 'What brush size for cutting in walls?',
        answer:
          'A 2 to 2.5 inch angled sash brush is the DIY standard for walls and ceilings. Larger brushes hold more paint but are harder to control along trim.',
      },
      {
        question: 'Do I need an expensive roller frame?',
        answer:
          'A sturdy metal frame that locks the cover matters more than brand prestige. Spend on covers — they control texture and coverage.',
      },
      {
        question: 'Canvas or plastic drop cloths?',
        answer:
          'Canvas stays put and absorbs drips on floors. Plastic is fine for furniture and for covering carpet when taped carefully — it can be slippery underfoot on hard floors.',
      },
    ],
  },
  {
    slug: 'how-long-between-paint-coats',
    category: 'paint',
    title: 'How Long Between Paint Coats? Dry Time Guide for DIY',
    description:
      'Recoat times for latex and oil paint, how humidity and temperature change dry time, and when a second coat is safe — so you avoid peeling and lap marks.',
    readMinutes: 8,
    toolPath: '/how-much-paint-do-i-need',
    toolLabel: 'How much paint calculator',
    relatedGuideSlugs: [
      'how-many-coats-of-paint',
      'how-to-paint-a-room-step-by-step',
      'interior-painting-project-guide',
      'paint-coverage-per-gallon',
    ],
    sections: [
      {
        heading: 'Follow the can — then adjust for your room',
        paragraphs: [
          'Label recoat times assume ~70°F (21°C) and moderate humidity. Cold, damp basements and closed rooms with no airflow need more hours. Touch-dry is not recoat-ready — the film can still be soft underneath.',
          'Typical latex interior: recoat in 2–4 hours; full cure in days. Oil / alkyd: often 8–24 hours between coats. Always prefer the longer wait if the wall feels cool or tacky.',
        ],
      },
      {
        heading: 'Signs the first coat is ready',
        bullets: [
          'No tack when you press a knuckle lightly in a corner',
          'Sheen looks even (wet spots look glossier)',
          'Label recoat window has passed for your temperature',
          'If you sand lightly for dust nibs, dust is powdery — not gummy',
        ],
        paragraphs: [
          'Recoating too soon can cause peeling, wrinkling, or dragging the first coat into the roller. Waiting overnight between coats is safer for beginners.',
        ],
      },
      {
        heading: 'Humidity, heat, and fans',
        paragraphs: [
          'High humidity slows evaporation — add hours, not minutes. A box fan in a doorway (not aimed hard at the wet wall) improves air exchange. Dehumidifiers help in basements.',
          'Very hot, dry air can skin the surface too fast and leave lap marks — work smaller sections and keep a wet edge. See technique notes in [paint a room step by step](/guides/how-to-paint-a-room-step-by-step).',
        ],
      },
      {
        heading: 'How many coats vs how long between them',
        paragraphs: [
          'Most interior latex jobs need two finish coats for even color — especially color changes. Dark-to-light may need primer plus two finish coats. Plan gallons with [how many coats of paint](/guides/how-many-coats-of-paint) and the [coverage guide](/guides/paint-coverage-per-gallon).',
          'Back to the full roadmap: [interior painting project guide](/guides/interior-painting-project-guide).',
        ],
      },
    ],
    faqs: [
      {
        question: 'Can I paint a second coat after 1 hour?',
        answer:
          'Only if the label says so and conditions are ideal. Most latex needs 2–4 hours. If the film feels tacky, wait — rushing causes adhesion problems.',
      },
      {
        question: 'How long before furniture can go back?',
        answer:
          'Light use after 24 hours for many latex paints; wait several days before sliding heavy furniture or hanging art that presses the wall. Full hardness can take up to 30 days.',
      },
      {
        question: 'Do I wait longer between primer and paint?',
        answer:
          'Use the primer can’s topcoat time — often 1–2 hours for latex primers. Stain-blocking and oil primers may need longer. Sand lightly if the primer raised the grain on drywall.',
      },
    ],
  },
  {
    slug: 'painting-over-oil-based-paint',
    category: 'prep',
    title: 'Painting Over Oil-Based Paint with Latex — Prep That Sticks',
    description:
      'How to repaint oil enamel walls and trim with latex: sanding, bonding primer, clean-up, and common peeling mistakes. Pair with the oil vs latex wall test.',
    readMinutes: 9,
    toolPath: '/how-much-paint-do-i-need',
    toolLabel: 'How much paint calculator',
    relatedGuideSlugs: [
      'identify-oil-vs-latex-paint-on-walls',
      'how-to-choose-primer-interior-walls',
      'how-to-prep-walls-for-painting',
      'primer-before-painting',
    ],
    sections: [
      {
        heading: 'Oil enamel under latex is a bonding problem',
        paragraphs: [
          'Oil-based (alkyd) paint cures to a hard, slick film. Water-based latex sits on top unless you dull the gloss and use a bonding primer. Skipping either step is why DIY kitchen and trim paint peels in sheets.',
          'Confirm you actually have oil with the [alcohol wipe test](/guides/identify-oil-vs-latex-paint-on-walls) before you buy primer.',
        ],
      },
      {
        heading: 'Prep steps that make latex stick',
        bullets: [
          'Clean grease and soap film (TSP substitute) — especially kitchens and bathrooms',
          'Sand to dull sheen (120–150 grit); you do not need to strip to bare wall',
          'Vacuum and wipe dust with a damp microfiber cloth',
          'Caulk trim gaps; spot-fill dents; sand patches smooth',
          'Apply bonding primer labeled for glossy / oil surfaces — full coat, not spotty',
          'Topcoat with quality latex after the primer recoat window',
        ],
        paragraphs: [
          'Full room sequence: [prep walls](/guides/how-to-prep-walls-for-painting) → [choose primer](/guides/how-to-choose-primer-interior-walls) → [paint step by step](/guides/how-to-paint-a-room-step-by-step).',
        ],
      },
      {
        heading: 'Trim and doors vs wall fields',
        paragraphs: [
          'Trim is often oil while walls are latex. Paint walls and trim as separate systems: bond-prime oil trim, then finish with latex enamel or acrylic trim paint for durability.',
          'Estimate wall gallons separately from trim — trim uses less area but more brush work. Wall totals still come from the [how much paint calculator](/how-much-paint-do-i-need).',
        ],
      },
      {
        heading: 'Mistakes that cause peeling',
        bullets: [
          'Latex straight over glossy oil with no sanding or bonding primer',
          'Painting over chalky or peeling oil without scraping loose film first',
          'Recoating primer or finish while still soft — see [recoat timing](/guides/how-long-between-paint-coats)',
          'Heavy grease left on kitchen walls under primer',
        ],
        paragraphs: [
          'If paint is already peeling, scrape to a firm edge, sand, prime bare spots with bonding primer, then finish. See also [how to fix peeling paint](/guides/how-to-fix-peeling-paint).',
        ],
      },
    ],
    faqs: [
      {
        question: 'Can I use oil paint over latex?',
        answer:
          'Technically yes with proper prep, but most DIYers switch to latex for easier cleanup and lower VOCs. If you keep oil, follow the oil product’s label for priming and ventilation.',
      },
      {
        question: 'Do I need to strip all the oil paint?',
        answer:
          'Usually no. Dull the surface, clean, and bond-prime. Strip only if the old film is failing everywhere or you need a bare substrate for another reason.',
      },
      {
        question: 'What primer brand should I buy?',
        answer:
          'Buy any quality bonding primer that explicitly lists adhesion over glossy or oil-based coatings. Read the label for interior use and recoat times rather than chasing a brand name.',
      },
    ],
  },
  {
    slug: 'how-to-paint-cabinets-and-trim',
    category: 'paint',
    title: 'How to Paint Cabinets and Trim — Prep, Primer & Coats',
    description:
      'DIY guide to painting kitchen cabinets, interior doors, and trim: degrease, sand, bond-prime, and estimate gallons with the cabinet & trim calculator.',
    readMinutes: 9,
    toolPath: '/cabinet-trim-paint-calculator',
    toolLabel: 'Cabinet & trim calculator',
    relatedGuideSlugs: [
      'identify-oil-vs-latex-paint-on-walls',
      'how-to-choose-primer-interior-walls',
      'interior-paint-sheen-guide',
      'painting-over-oil-based-paint',
    ],
    sections: [
      {
        heading: 'Size the paint before you open a can',
        paragraphs: [
          'Cabinets and trim are piece counts, not room walls. Use the [cabinet & trim paint calculator](/cabinet-trim-paint-calculator) for door/drawer counts and linear feet of baseboard — then buy gallons (or quarts) with waste built in.',
        ],
      },
      {
        heading: 'Prep that makes paint stick',
        bullets: [
          'Remove doors/drawers and hardware; label everything',
          'Degrease kitchen cabinets (TSP substitute) — dust alone is not enough',
          'Light sand glossy surfaces; wipe dust',
          'Test oil vs latex on old trim — see [oil vs latex ID](/guides/identify-oil-vs-latex-paint-on-walls)',
          'Bonding primer on glossy or oil-based trim and cabinets',
        ],
        paragraphs: [
          'Skip primer and you fight peeling edges around knobs and door edges. Primer choice guide: [how to choose primer](/guides/how-to-choose-primer-interior-walls).',
        ],
      },
      {
        heading: 'Sheen and coats',
        paragraphs: [
          'Satin or semi-gloss is standard for trim and cabinets — wipeable and tougher than flat. Most kitchen cabinets need two thin finish coats after primer. Recoat timing: [how long between coats](/guides/how-long-between-paint-coats).',
          'Sheen comparison: [flat vs eggshell vs satin](/guides/interior-paint-sheen-guide).',
        ],
      },
      {
        heading: 'When to stop DIY',
        paragraphs: [
          'Factory-finished cabinets with peeling laminate, water-damaged boxes, or sprayed finishes you cannot sand safely are often better replaced or left to a cabinet refinisher. Softwood trim with failing oil layers may need [painting over oil](/guides/painting-over-oil-based-paint) steps or stripping.',
        ],
      },
    ],
    faqs: [
      {
        question: 'Can I paint cabinets without sanding?',
        answer:
          'Liquid deglossers help, but light scuff sanding plus bonding primer is more reliable on greasy kitchen doors.',
      },
      {
        question: 'Brush, roll, or spray?',
        answer:
          'Foam rollers and angled sash brushes work for DIY. Spraying looks factory-smooth but needs masking skill and ventilation.',
      },
      {
        question: 'How much paint for trim only?',
        answer:
          'Enter zero cabinets and doors in the calculator and only linear feet of trim. Many DIYers buy a quart for small trim jobs and a gallon when casing every room.',
      },
    ],
  },
];

export function getGuideBySlug(slug: string): Guide | undefined {
  return GUIDES.find((g) => g.slug === slug);
}

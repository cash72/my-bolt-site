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
          'Always round up. A 416 sq ft wall with two coats at 350 sq ft/gallon needs about 2.4 gallons — buy 3 gallons to avoid a mid-project store run.',
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
          'Our room paint calculator accepts feet and inches, handles multiple rooms, deducts openings, and outputs gallons plus quarts with a copyable shopping list.',
        ],
      },
      {
        heading: 'Worked example: 12×14 bedroom',
        paragraphs: [
          'Walls: perimeter 52 ft × 8 ft ceiling = 416 sq ft. Minus one door (20) and one window (15) → 381 sq ft. Two coats at 350 sq ft/gallon = 762 ÷ 350 ≈ 2.2 gallons — buy 3 gallons finish paint.',
          'Run your dimensions in the [room paint calculator](/room-paint-calculator). See [how many coats](/guides/how-many-coats-of-paint) and [primer guide](/guides/primer-before-painting) before checkout.',
        ],
      },
    ],
    faqs: [
      {
        question: 'How much paint for a 12×12 room?',
        answer:
          'With 8 ft ceilings, walls are about 384 sq ft. Two coats at 350 sq ft/gallon ≈ 2.2 gallons — buy 3 gallons. Add one gallon if painting the ceiling too.',
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
          'Enter the actual coat count in our calculator — underestimating coats is the #1 reason people run out mid-room.',
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
          'Manufacturers design paint at a specific viscosity. Thinning reduces hide and durability. Buy enough product instead of thinning.',
      },
    ],
  },
  {
    slug: 'paint-coverage-per-gallon',
    category: 'paint',
    title: 'How Many Square Feet Does a Gallon of Paint Cover?',
    description:
      'How many sq ft per gallon on interior latex, primer, and Behr cans. Read your label, adjust for texture, and use our free coverage calculator to avoid under-buying.',
    readMinutes: 8,
    toolPath: '/paint-coverage-calculator',
    toolLabel: 'Paint coverage calculator',
    relatedGuideSlugs: ['how-much-paint-for-a-room', 'how-many-coats-of-paint'],
    sections: [
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
          'Primer covers roughly 200–300 sq ft per gallon — less than finish paint. Buy primer gallons separately in our calculator by counting one primer coat over the same wall area.',
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
          'Buy primer gallons from one coat of wall area — separate from [finish paint totals](/guides/how-much-paint-for-a-room).',
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
          'Update coat count to 2 (or 3) in our paint calculator when planning purchases.',
        ],
      },
      {
        heading: 'Dark-to-light coat strategy',
        paragraphs: [
          'Step 1: clean walls. Step 2: bond primer or stain-blocking primer if needed. Step 3: tinted primer toward your new color (gray for whites, beige-tint for tans). Step 4: two finish coats minimum.',
          'Budget extra gallons — see [coat planning](/guides/how-many-coats-of-paint) and run totals in the [paint calculator](/how-much-paint-do-i-need).',
        ],
      },
    ],
    faqs: [
      {
        question: 'Does gray primer work under any color?',
        answer:
          'Gray primer is popular under medium tones. For very light pastels, ask for a white primer tinted toward your topcoat. The paint desk can match primer tint to your chips.',
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
        heading: 'Why paint peels',
        bullets: [
          'Painting over dirty, glossy, or wet surfaces',
          'Moisture behind the wall (bathroom, exterior, leak)',
          'Oil paint topped with latex without bonding primer',
          'Cheap paint or paint applied too thick in one coat',
        ],
        paragraphs: [],
      },
      {
        heading: 'Fix it properly',
        bullets: [
          'Scrape all loose and lifting paint until edges are firmly bonded',
          'Sand feathered edge where old meets bare — 120 grit',
          'Dust; apply bonding or oil-blocking primer on bare and transition zones',
          'Fill low spots if needed, sand, prime again',
          'Two finish coats — blend beyond the patch if the sheen mismatch shows',
        ],
        paragraphs: [
          'If peel returns in weeks, investigate moisture before repainting again.',
        ],
      },
      {
        heading: 'Peeling repair workflow',
        bullets: [
          'Scrape all loose paint to sound edge',
          'Sand feather edge — no ridge under new paint',
          'Prime bare substrate (shellac if stain present)',
          'Two finish coats — match [sheen](/guides/interior-paint-sheen-guide) to adjacent wall',
          'Fix moisture source before repainting bath areas',
        ],
        paragraphs: [],
      },
    ],
    faqs: [
      {
        question: 'Can I paint over peeling paint?',
        answer:
          'No — new paint will peel with the old layer. Remove all failing paint first, then prime and recoat.',
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
        heading: 'Basic removal process',
        bullets: [
          'Score vinyl wallpaper with a scoring tool so remover penetrates',
          'Apply hot water or wallpaper stripper with a pump sprayer; wait 10–15 minutes',
          'Scrape with a wide putty knife — work parallel to the wall to avoid gouges',
          'Remove residual paste with hot water and sponge or commercial paste remover',
          'Sand rough areas; wash walls; let dry 24–48 hours',
          'Prime entire wall — leftover paste stains and porosity vary',
        ],
        paragraphs: [],
      },
      {
        heading: 'Paint vs new wallpaper after removal',
        paragraphs: [
          'Painting: prime with drywall primer, then two finish coats. Use our room paint calculator for gallons.',
          'New wallpaper: walls must be smooth and primed — paste residue causes bubbles. Use our wallpaper calculator for rolls.',
        ],
      },
      {
        heading: 'Removal methods',
        bullets: [
          'Score vinyl surface, apply steamer, scrape — most reliable',
          'Liquid stripper for stubborn glue — ventilate well',
          'Dry strip (peelable top layer) if wallpaper is strippable type',
          'Sand remaining glue residue — primer blocks yellowing',
        ],
        paragraphs: [
          'After removal, skim damaged areas and follow [wall prep](/guides/how-to-prep-walls-for-painting) before paint.',
        ],
      },
    ],
    faqs: [
      {
        question: 'Can I paint over wallpaper instead of removing?',
        answer:
          'Only if paper is fully glued, no seams lifting, and you prime with an oil or shellac sealer first. Removal is safer long-term — water can loosen paper under latex paint later.',
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
        heading: 'Sheen from matte to gloss',
        bullets: [
          'Flat / matte: hides imperfections, low reflectivity — ceilings, low-traffic bedrooms',
          'Eggshell: slight washability, most popular for living rooms and bedrooms',
          'Satin: easier to wipe — hallways, kids rooms, trim in some homes',
          'Semi-gloss: trim, doors, cabinets, high moisture (bathroom if not flat ceiling)',
          'Gloss: rarely on walls; doors, furniture, accents',
        ],
        paragraphs: [
          'Higher sheen shows wall flaws more — repair and sand well before satin on rough walls.',
        ],
      },
      {
        heading: 'Room-by-room quick picks',
        bullets: [
          'Ceiling: flat white',
          'Living / dining: eggshell',
          'Kitchen / bath walls: satin or scrubbable eggshell (not flat near splashes)',
          'Trim and doors: semi-gloss (often different product than walls)',
        ],
        paragraphs: [],
      },
      {
        heading: 'Room-by-room sheen picks',
        bullets: [
          'Ceilings: flat or matte — hides imperfections',
          'Bedrooms/living: eggshell or matte',
          'Kitchen/bath/hall: satin — washable',
          'Trim/doors: semi-gloss — durable, wipeable',
          'Kids rooms: satin on walls, semi-gloss on trim',
        ],
        paragraphs: [
          'Match sheen on repairs — flashing occurs when patch is flat and wall is satin. Buy quarts from the [room paint calculator](/room-paint-calculator) totals.',
        ],
      },
    ],
    faqs: [
      {
        question: 'Can I use the same sheen on walls and trim?',
        answer:
          'You can, but contrast in sheen (eggshell walls + semi-gloss trim) is standard — trim wipes clean and frames the room.',
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
        heading: 'What you need to measure',
        paragraphs: [
          'Measure each wall width and height in feet. Note doors and windows — you still buy paper for those sections but pattern matching affects drop length.',
          'Check the wallpaper label for roll width (usually 20.5" or 27"), roll length (often 33 ft), and pattern repeat (vertical distance before the pattern repeats).',
        ],
      },
      {
        heading: 'Pattern repeat adds waste',
        paragraphs: [
          'Solid or random-match papers waste less. A 24-inch pattern repeat on a 96-inch wall means each drop is cut longer to align the pattern — leftover increases.',
          'Rule of thumb: add 10–15% waste for plain paper, 15–25% for large repeats. Our wallpaper calculator handles repeat math automatically.',
        ],
      },
      {
        heading: 'Buy an extra roll',
        paragraphs: [
          'Keep one unopened roll from the same dye lot for future repairs. Stores may not stock the same batch later.',
        ],
      },
      {
        heading: 'Roll math worked example',
        paragraphs: [
          'Accent wall 10×8 ft = 80 sq ft. Roll covers 28 sq ft usable (after pattern waste). 80 ÷ 28 ≈ 2.9 → buy 3 rolls. Add 10% for beginners.',
          'Use the [wallpaper calculator](/wallpaper-calculator) for multiple walls and pattern repeat — see [pattern repeat guide](/guides/wallpaper-pattern-repeat).',
        ],
      },
    ],
    faqs: [
      {
        question: 'How many rolls for a 10×12 room?',
        answer:
          'Depends on ceiling height, roll dimensions, and pattern repeat. A typical bedroom with 8 ft ceilings often needs 5–7 single rolls — use our calculator with your exact paper specs.',
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
        heading: 'Random match vs straight match vs drop match',
        bullets: [
          'Random match / no repeat: easiest install, least waste',
          'Straight match: pattern aligns horizontally at the same height each drop',
          'Drop match: pattern shifts vertically — most waste, most planning',
        ],
        paragraphs: [
          'The repeat number (e.g. 21 cm or 9 inches) is the vertical distance before the design repeats. Larger repeats mean longer cuts per strip.',
        ],
      },
      {
        heading: 'Why repeat matters for shopping',
        paragraphs: [
          'Two rooms with identical square footage can need different roll counts if the repeat differs. Always enter repeat into our calculator — guessing "one roll per wall" fails on patterned paper.',
        ],
      },
      {
        heading: 'Repeat types and waste',
        bullets: [
          'Random match / free match: lowest waste — drops align anywhere',
          'Straight match: pattern aligns horizontally — add repeat to strip length',
          'Drop match: diagonal repeat — highest waste, plan 15–25% extra',
          'Large repeat (12+ inches): fewer strips per roll — buy extra',
        ],
        paragraphs: [
          'Enter repeat inches in the [wallpaper calculator](/wallpaper-calculator) — our [rolls guide](/guides/how-to-estimate-wallpaper-rolls) explains usable sq ft per bolt.',
        ],
      },
    ],
    faqs: [
      {
        question: 'What if my label says no repeat?',
        answer: 'Enter zero or a small random-match value. Waste drops to roughly 10% for standard rooms.',
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
        heading: 'One wall is simpler — but not trivial',
        paragraphs: [
          'Measure only the accent wall width × height. You still need enough drops for pattern repeat and a full strip width — you cannot buy half a strip.',
          'Buy one extra roll if the pattern is bold — small rooms with large repeats often need more paper than intuition suggests.',
        ],
      },
      {
        heading: 'Pair with paint for other walls',
        paragraphs: [
          'Many designers paint adjoining walls a coordinating solid color. Use our room paint calculator for the non-papered walls and the accent wall calculator for wallpaper.',
        ],
      },
      {
        heading: 'Accent wall planning',
        bullets: [
          'Choose wall with least doors/windows — fewer cuts',
          'Bold pattern: one wall only — see [accent calculator](/accent-wall-wallpaper-calculator)',
          'Align focal point (headboard, TV) with pattern center',
          'Buy all rolls same dye lot — check bolt numbers',
          'Keep 1 spare roll for future repairs',
        ],
        paragraphs: [],
      },
    ],
    faqs: [
      {
        question: 'Can I use wallpaper on just one wall?',
        answer:
          'Yes — accent walls are common. Calculate that wall only, but order from the same batch and keep spare paper for edge repairs.',
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
        heading: 'Measure the fence run',
        paragraphs: [
          'Measure total fence length in feet and average panel height. For a 6 ft privacy fence 100 ft long, one side is roughly 600 sq ft — both sides doubles to 1,200 sq ft if staining inside and out.',
          'Deduct gates or use our calculator openings field for approximate deductions.',
        ],
      },
      {
        heading: 'Stain coverage is lower than paint',
        paragraphs: [
          'Rough cedar and weathered wood absorb more product. Many exterior stains cover 150–250 sq ft per gallon per coat. Read your can — transparent stains cover less than solid-color stains.',
        ],
        bullets: [
          'Transparent / semi-transparent: 150–200 sq ft/gallon',
          'Solid stain: up to 250–300 sq ft/gallon',
          'Plan two coats on weathered wood',
        ],
      },
      {
        heading: 'Fence stain quick math',
        paragraphs: [
          '100 linear ft × 6 ft height = 600 sq ft both sides (if staining front and back). One coat at 150 sq ft/gallon ≈ 4 gallons. Two coats → 8 gallons.',
          'Use the [fence stain calculator](/fence-stain-calculator) with picket vs panel style and [two-coat guide](/guides/exterior-stain-two-coats) for exterior projects.',
        ],
      },
    ],
    faqs: [
      {
        question: 'Do I stain both sides of a fence?',
        answer:
          'Only if you want both sides finished. Neighbor-facing side is often skipped on boundary fences — calculate one side only if that is your plan.',
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
        heading: 'Start with deck footprint',
        paragraphs: [
          'Length × width gives the main surface. A 12×16 deck = 192 sq ft. Add stairs (each tread + riser), top rails, balusters, and posts — these add 20–40% more area on many decks.',
        ],
      },
      {
        heading: 'Prep affects absorption',
        paragraphs: [
          'Power-washed bare wood drinks stain. Previously coated decks may need one coat. Always check manufacturer coverage after prep — our calculator lets you set coats and sq ft per gallon.',
        ],
      },
      {
        heading: 'Deck sq ft examples',
        bullets: [
          '10×12 deck surface: 120 sq ft',
          '12×20 deck: 240 sq ft',
          'Add railings and steps separately — lots of edge footage',
          'New wood may need 2 coats — see [exterior two-coat guide](/guides/exterior-stain-two-coats)',
        ],
        paragraphs: [
          'Run dimensions in the [deck stain calculator](/deck-stain-calculator) with transparent vs solid stain coverage rates.',
        ],
      },
    ],
    faqs: [
      {
        question: 'Oil vs water-based deck stain coverage?',
        answer:
          'Coverage varies by formula, not just base. Use the number on your specific product label rather than rules of thumb.',
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
        heading: 'Exterior square footage basics',
        paragraphs: [
          'For rectangular homes, approximate wall area as perimeter × average wall height. A 40×30 ft footprint with 9 ft walls ≈ 140 ft perimeter × 9 ft = 1,260 sq ft per story — adjust for gables, dormers, and garage.',
          'Our house stain calculator uses footprint dimensions you enter plus wall height — refine with your actual measurements.',
        ],
      },
      {
        heading: 'Two coats on exposed wood',
        paragraphs: [
          'Horizontal surfaces (decks, rail caps) weather faster than vertical siding. Most exterior stain systems recommend two coats on new or stripped wood, one maintenance coat on previously stained sound wood.',
        ],
        bullets: [
          'Log homes: check log-specific coverage — often 100–150 sq ft/gallon',
          'Smooth hardboard siding: higher coverage than rough cedar',
          'Spraying: faster but uses more product — add 10–15% material',
        ],
      },
      {
        heading: 'Two-coat exterior planning',
        bullets: [
          'Transparent/semi-transparent: often 2 coats first year, 1 coat maintenance',
          'Solid stain: 2 coats for uniform color on weathered wood',
          'Double gallons in calculator when product specifies 2 coats wet-on-wet or 24h apart',
          'Fence, deck, and siding — use matching product line for compatibility',
        ],
        paragraphs: [
          'Estimate total gallons with the [fence](/fence-stain-calculator) or [deck stain calculator](/deck-stain-calculator) and toggle coat count.',
        ],
      },
    ],
    faqs: [
      {
        question: 'Paint vs stain on exterior — same calculator?',
        answer:
          'Our tool handles both paint and stain products. Enter the coverage from your can — stain values are usually lower than exterior paint.',
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
          'Phase 1 — Estimate gallons: measure walls and run the [paint calculator](/how-much-paint-do-i-need)',
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
          'Estimate finish paint separately in the [how much paint calculator](/how-much-paint-do-i-need). Add primer gallons as a second pass of the same wall area at ~250 sq ft/gallon if your can does not list coverage.',
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

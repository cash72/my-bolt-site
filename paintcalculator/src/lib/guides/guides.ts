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
    relatedGuideSlugs: ['primer-before-painting', 'how-much-paint-for-a-room', 'paint-coverage-per-gallon'],
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
    title: 'Paint Coverage Per Gallon — What the Label Really Means',
    description:
      'How to read sq ft per gallon on a paint can, adjust for texture and porosity, and avoid under-buying on your project.',
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
    ],
    faqs: [
      {
        question: 'Is 400 sq ft per gallon realistic?',
        answer:
          'On smooth, primed drywall with a quality roller and one coat — yes, for many premium paints. Real-world DIY projects with two coats plan closer to 350 sq ft per gallon per coat.',
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
      'how-to-prep-walls-for-painting',
      'how-to-repair-walls-before-painting',
      'painting-over-dark-colors',
      'how-many-coats-of-paint',
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
      'how-to-repair-walls-before-painting',
      'primer-before-painting',
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
      'how-to-prep-walls-for-painting',
      'interior-paint-sheen-guide',
      'how-many-coats-of-paint',
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
];

export function getGuideBySlug(slug: string): Guide | undefined {
  return GUIDES.find((g) => g.slug === slug);
}

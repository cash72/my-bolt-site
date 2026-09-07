/** Scannable first-job facts for new DIYers. Shared by homepage, first-paint-job landing, and related guides. */

export interface DiyStarterFact {
  id: string;
  title: string;
  doThis: string;
  bullets: string[];
  href: string;
  linkLabel: string;
}

export const DIY_STARTER_FACTS: DiyStarterFact[] = [
  {
    id: 'roller',
    title: 'How to choose a roller',
    doThis: '9-inch frame + 3/8″ nap for smooth walls. Go 1/2–3/4″ nap on texture.',
    bullets: [
      'Buy a metal frame that locks the cover. Spend on covers, not a fancy handle.',
      'One spare cover per colour — shed or matted nap leaves fuzz in the paint.',
      'Ceilings: use a dedicated cover so wall lint does not transfer.',
    ],
    href: '/guides/how-to-choose-a-paint-roller',
    linkLabel: 'Roller nap guide',
  },
  {
    id: 'brush',
    title: 'How to choose a brush',
    doThis: 'One 2–2½″ angled sash brush for cutting in. Skip cheap foam for walls.',
    bullets: [
      'Angled bristles follow trim and ceilings. A square 3″ brush is harder to control.',
      'Synthetic bristles for latex (almost all interior wall paint in Canada).',
      'Buy one good brush, not three dollar-store ones that fan out and leave streaks.',
    ],
    href: '/guides/how-to-choose-a-paint-brush',
    linkLabel: 'Brush size guide',
  },
  {
    id: 'tape-cloths',
    title: 'Tape off or drop cloths?',
    doThis: 'Both. Canvas (or taped plastic) on floors. Painter’s tape on trim and glass.',
    bullets: [
      'Drop cloths catch roller spray and tray drips. Tape does not protect a floor.',
      'Blue or green painter’s tape on baseboards, window sash, and light-switch plates if you leave them on.',
      'Pull tape at 45° while the last coat is still slightly tacky for a clean line.',
    ],
    href: '/guides/painters-tape-vs-drop-cloths',
    linkLabel: 'Tape vs drop cloths',
  },
  {
    id: 'order',
    title: 'What order do I paint?',
    doThis: 'Ceiling first, then walls, then trim last.',
    bullets: [
      'Cut in a 2–3″ band, then roll while that band is still wet (wet edge).',
      'Finish one wall before you take a lunch break — a dry line shows as a stripe.',
      'Remove outlet covers before you start. Tape the openings, not the plastic plates.',
    ],
    href: '/guides/how-to-paint-a-room-step-by-step',
    linkLabel: 'Step-by-step room',
  },
  {
    id: 'coats',
    title: 'How many coats?',
    doThis: 'Two finish coats on walls for most colour changes. Primer first on new drywall or stains.',
    bullets: [
      'Same colour refresh on sound walls can be one coat — still buy enough for two.',
      'Wait the recoat time on the can (often 2–4 hours latex). Overnight is safer for beginners.',
      'Dark-to-light usually needs primer plus two finish coats.',
    ],
    href: '/guides/how-many-coats-of-paint',
    linkLabel: 'Coats & dry time',
  },
  {
    id: 'kit',
    title: 'What else is in the cart?',
    doThis: 'Tray + liners, extension pole, stir stick, sandpaper, putty knife, TSP substitute.',
    bullets: [
      'Extension pole saves your shoulders on walls and ceilings.',
      'Liners mean you are not washing a tray between colours.',
      'Calculate gallons first so you are not mid-wall at Canadian Tire.',
    ],
    href: '/guides/interior-painting-tools-and-supplies-list',
    linkLabel: 'Full supplies list',
  },
];

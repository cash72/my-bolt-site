export type AffiliateCategory =
  | 'hardware-wallet'
  | 'node'
  | 'backup'
  | 'software';

export interface AffiliateProduct {
  id: string;
  name: string;
  brand: string;
  /** Replace with your affiliate URL when approved — falls back to official site */
  url: string;
  description: string;
  category: AffiliateCategory;
  bestFor: string;
}

function affiliateUrl(envKey: string, fallback: string): string {
  const env = import.meta.env as Record<string, string | undefined>;
  return env[envKey]?.trim() || fallback;
}

/** Swap URLs via .env — see .env.example for VITE_AFFILIATE_* keys */
export const AFFILIATE_PRODUCTS: Record<string, AffiliateProduct> = {
  coldcard: {
    id: 'coldcard',
    name: 'Coldcard',
    brand: 'Coinkite',
    url: affiliateUrl('VITE_AFFILIATE_COLDCARD', 'https://coldcard.com/'),
    description:
      'Air-gapped hardware wallet with a numeric keypad, PSBT support, and a strong focus on security for long-term holders.',
    category: 'hardware-wallet',
    bestFor: 'Advanced users who want maximum security and don’t mind a steeper learning curve.',
  },
  jade: {
    id: 'jade',
    name: 'Blockstream Jade',
    brand: 'Blockstream',
    url: affiliateUrl('VITE_AFFILIATE_JADE', 'https://blockstream.com/jade/'),
    description:
      'Open-source hardware wallet with optional camera for QR signing and a competitive price point.',
    category: 'hardware-wallet',
    bestFor: 'Beginners and intermediate users who want open-source firmware at a fair price.',
  },
  bitbox02: {
    id: 'bitbox02',
    name: 'BitBox02',
    brand: 'Shift Crypto',
    url: affiliateUrl('VITE_AFFILIATE_BITBOX', 'https://bitbox.swiss/bitbox02/'),
    description:
      'Swiss-made hardware wallet with a minimalist design, microSD backup, and Bitcoin-only edition available.',
    category: 'hardware-wallet',
    bestFor: 'Privacy-conscious users who prefer a simple, no-nonsense device.',
  },
  start9: {
    id: 'start9',
    name: 'Start9 Server',
    brand: 'Start9',
    url: affiliateUrl('VITE_AFFILIATE_START9', 'https://start9.com/'),
    description:
      'Plug-and-play personal server for running Bitcoin Core, Lightning, and sovereign apps at home.',
    category: 'node',
    bestFor: 'People ready to verify their own transactions without trusting a third-party node.',
  },
  umbrel: {
    id: 'umbrel',
    name: 'Umbrel',
    brand: 'Umbrel',
    url: affiliateUrl('VITE_AFFILIATE_UMBREL', 'https://umbrel.com/'),
    description:
      'User-friendly home server OS for Bitcoin, Lightning, and self-hosted apps with a polished interface.',
    category: 'node',
    bestFor: 'Beginners who want the simplest path to running a node at home.',
  },
  seedplate: {
    id: 'seedplate',
    name: 'Metal Seed Backup',
    brand: 'Various',
    url: affiliateUrl('VITE_AFFILIATE_SEEDPLATE', 'https://coldcard.com/docs/seedplate'),
    description:
      'Stamp your recovery words into steel so backups survive fire, flood, and time better than paper.',
    category: 'backup',
    bestFor: 'Anyone storing meaningful amounts — paper backups are a single point of failure.',
  },
};

export function getAffiliateProducts(ids: string[]): AffiliateProduct[] {
  return ids.map((id) => AFFILIATE_PRODUCTS[id]).filter(Boolean);
}

export const AFFILIATE_DISCLOSURE =
  'Some links on this page are affiliate links. If you purchase through them, SatoshiCalc may earn a commission at no extra cost to you. We only recommend products we believe are useful for Bitcoin self-custody.';

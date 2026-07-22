import { satoshiToFiat } from './conversion';

/** Typical SegWit vSize estimates for fee planning (not exact for every wallet). */
export const TX_SIZE_PRESETS = [
  { id: 'segwit-1in-1out', label: '1-in / 1-out SegWit', vBytes: 140 },
  { id: 'segwit-1in-2out', label: '1-in / 2-out SegWit', vBytes: 166 },
  { id: 'segwit-2in-2out', label: '2-in / 2-out SegWit', vBytes: 208 },
  { id: 'legacy-1in-1out', label: '1-in / 1-out legacy', vBytes: 224 },
] as const;

export function feeSats(satPerVb: number, vBytes: number): number {
  if (!Number.isFinite(satPerVb) || !Number.isFinite(vBytes) || satPerVb < 0 || vBytes < 0) {
    return 0;
  }
  return Math.ceil(satPerVb * vBytes);
}

export function feeFiat(satPerVb: number, vBytes: number, btcPrice: number): number {
  return satoshiToFiat(feeSats(satPerVb, vBytes), btcPrice);
}

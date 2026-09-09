export const SATOSHI_PER_BTC = 100_000_000;

export type FiatCurrency = 'usd' | 'eur' | 'gbp' | 'cad' | 'aud' | 'inr';

export const FIAT_CURRENCIES: FiatCurrency[] = ['usd', 'eur', 'gbp', 'cad', 'aud', 'inr'];

const COINGECKO_VS = FIAT_CURRENCIES.join(',');

export const COINGECKO_URL =
  `https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=${COINGECKO_VS}&include_24hr_change=true`;

export interface PriceData {
  bitcoin: Record<FiatCurrency, number> & {
    usd_24h_change?: number;
    eur_24h_change?: number;
    gbp_24h_change?: number;
    cad_24h_change?: number;
    aud_24h_change?: number;
    inr_24h_change?: number;
  };
}

export const CURRENCY_LABELS: Record<FiatCurrency, string> = {
  usd: 'USD',
  eur: 'EUR',
  gbp: 'GBP',
  cad: 'CAD',
  aud: 'AUD',
  inr: 'INR',
};

export const CURRENCY_NAMES: Record<FiatCurrency, string> = {
  usd: 'US Dollar',
  eur: 'Euro',
  gbp: 'British Pound',
  cad: 'Canadian Dollar',
  aud: 'Australian Dollar',
  inr: 'Indian Rupee',
};

export const CURRENCY_SLUG_NAMES: Record<FiatCurrency, string> = {
  usd: 'dollars',
  eur: 'euros',
  gbp: 'pounds',
  cad: 'cad',
  aud: 'aud',
  inr: 'inr',
};

export function getBtcPrice(priceData: PriceData | null, currency: FiatCurrency): number {
  return priceData?.bitcoin?.[currency] ?? 0;
}

export function satoshiToFiat(satoshi: number, btcPrice: number): number {
  return satoshi * (btcPrice / SATOSHI_PER_BTC);
}

export function fiatToSatoshi(fiat: number, btcPrice: number): number {
  return btcPrice > 0 ? (fiat / btcPrice) * SATOSHI_PER_BTC : 0;
}

export function btcToFiat(btc: number, btcPrice: number): number {
  return btc * btcPrice;
}

export function fiatToBtc(fiat: number, btcPrice: number): number {
  return btcPrice > 0 ? fiat / btcPrice : 0;
}

export function btcToSatoshi(btc: number): number {
  return btc * SATOSHI_PER_BTC;
}

/** Slug-safe BTC amount string: 0.01, 0.1, 1, 10 (no trailing zeros). */
export function formatBtcSlugAmount(amount: number): string {
  if (Number.isInteger(amount)) return String(amount);
  return String(amount);
}

export function formatBtcDisplay(amount: number): string {
  if (amount >= 1) return formatNumber(amount);
  return amount.toLocaleString('en-US', { minimumFractionDigits: 0, maximumFractionDigits: 8 });
}

export function formatCurrency(value: number, currency: string) {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: currency.toUpperCase(),
    minimumFractionDigits: 2,
    maximumFractionDigits: 6,
  }).format(value);
}

export function formatNumber(value: number) {
  return new Intl.NumberFormat('en-US', {
    minimumFractionDigits: 0,
    maximumFractionDigits: 8,
  }).format(value);
}

export function formatSatoshiAmount(amount: number): string {
  return amount.toLocaleString('en-US');
}

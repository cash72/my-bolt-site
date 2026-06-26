export const SATOSHI_PER_BTC = 100_000_000;

export const COINGECKO_URL =
  'https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=usd,eur,gbp,cad&include_24hr_change=true';

export type FiatCurrency = 'usd' | 'eur' | 'gbp' | 'cad';

export interface PriceData {
  bitcoin: {
    usd: number;
    usd_24h_change?: number;
    eur: number;
    eur_24h_change?: number;
    gbp: number;
    gbp_24h_change?: number;
    cad: number;
    cad_24h_change?: number;
  };
}

export const FIAT_CURRENCIES: FiatCurrency[] = ['usd', 'eur', 'gbp', 'cad'];

export const CURRENCY_LABELS: Record<FiatCurrency, string> = {
  usd: 'USD',
  eur: 'EUR',
  gbp: 'GBP',
  cad: 'CAD',
};

export const CURRENCY_NAMES: Record<FiatCurrency, string> = {
  usd: 'US Dollar',
  eur: 'Euro',
  gbp: 'British Pound',
  cad: 'Canadian Dollar',
};

export const CURRENCY_SLUG_NAMES: Record<FiatCurrency, string> = {
  usd: 'dollars',
  eur: 'euros',
  gbp: 'pounds',
  cad: 'cad',
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

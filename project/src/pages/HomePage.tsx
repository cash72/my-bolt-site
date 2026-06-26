import { useState, useEffect, useCallback, useRef, lazy, Suspense } from 'react';
import { Link } from 'react-router-dom';
import { useDarkMode } from '../context/DarkModeContext';
import { usePageMeta } from '../hooks/usePageMeta';
import AdSlot from '../components/AdSlot';
import {
  COINGECKO_URL,
  SATOSHI_PER_BTC,
  formatCurrency,
  formatNumber,
  type PriceData,
} from '../lib/conversion';
import {
  ArrowRightLeft,
  TrendingUp,
  RefreshCw,
  Bitcoin,
  DollarSign,
  Euro,
  PoundSterling,
  ChevronDown,
  Info,
  ArrowUpRight,
  ArrowDownRight,
  Copy,
  Check,
  CircleDollarSign,
  BarChart3,
  MessageCircleQuestion,
  Wallet,
  Pickaxe,
} from 'lucide-react';

const AreaChart = lazy(() =>
  import('recharts').then((m) => ({ default: m.AreaChart }))
);
const Area = lazy(() =>
  import('recharts').then((m) => ({ default: m.Area }))
);
const XAxis = lazy(() =>
  import('recharts').then((m) => ({ default: m.XAxis }))
);
const YAxis = lazy(() =>
  import('recharts').then((m) => ({ default: m.YAxis }))
);
const CartesianGrid = lazy(() =>
  import('recharts').then((m) => ({ default: m.CartesianGrid }))
);
const Tooltip = lazy(() =>
  import('recharts').then((m) => ({ default: m.Tooltip }))
);
const ResponsiveContainer = lazy(() =>
  import('recharts').then((m) => ({ default: m.ResponsiveContainer }))
);

const COINGECKO_CHART_URL =
  'https://api.coingecko.com/api/v3/coins/bitcoin/market_chart?vs_currency=usd&days=10';

const currencyIcons: Record<string, React.ReactNode> = {
  usd: <DollarSign className="w-4 h-4" aria-hidden="true" />,
  eur: <Euro className="w-4 h-4" aria-hidden="true" />,
  gbp: <PoundSterling className="w-4 h-4" aria-hidden="true" />,
  cad: <CircleDollarSign className="w-4 h-4" aria-hidden="true" />,
};

export default function HomePage() {
  usePageMeta({
    title: 'Satoshi to USD Converter | Live Bitcoin Price Calculator (2026)',
    description:
      'Free Satoshi to USD, EUR, GBP & CAD converter with live Bitcoin prices. Convert satoshis instantly with real-time rates. 10-day price chart & quick reference table included.',
    path: '/',
  });

  const { dark } = useDarkMode();
  const [priceData, setPriceData] = useState<PriceData | null>(null);
  const [chartData, setChartData] = useState<{ date: string; price: number }[]>([]);
  const [chartLoading, setChartLoading] = useState(true);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [lastUpdated, setLastUpdated] = useState<Date | null>(null);
  const [countdown, setCountdown] = useState(60);

  const [satoshiInput, setSatoshiInput] = useState('100000');
  const [usdInput, setUsdInput] = useState('');
  const [reverseCurrency, setReverseCurrency] = useState('usd');
  const [mode, setMode] = useState<'satoshi' | 'reverse'>('satoshi');
  const [copied, setCopied] = useState<string | null>(null);

  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const countdownRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const fetchPrice = useCallback(async () => {
    setLoading(true);
    setError(null);
    try {
      const res = await fetch(COINGECKO_URL);
      if (!res.ok) throw new Error('Failed to fetch price');
      const data: PriceData = await res.json();
      setPriceData(data);
      setLastUpdated(new Date());
      setCountdown(60);
    } catch (e) {
      setError('Unable to fetch live Bitcoin price. Please try again later.');
    } finally {
      setLoading(false);
    }
  }, []);

  const fetchChart = useCallback(async () => {
    setChartLoading(true);
    try {
      const res = await fetch(COINGECKO_CHART_URL);
      if (!res.ok) throw new Error('Failed to fetch chart');
      const data = await res.json();
      const prices: [number, number][] = data.prices;
      const daily = prices
        .filter((_, i) => i % 24 === 0)
        .map(([timestamp, price]) => ({
          date: new Date(timestamp).toLocaleDateString('en-US', { month: 'short', day: 'numeric' }),
          price: Math.round(price),
        }));
      setChartData(daily);
    } catch {
      setChartData([]);
    } finally {
      setChartLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchPrice();
    fetchChart();
    intervalRef.current = setInterval(fetchPrice, 60000);
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [fetchPrice, fetchChart]);

  useEffect(() => {
    countdownRef.current = setInterval(() => {
      setCountdown((c) => (c > 0 ? c - 1 : 60));
    }, 1000);
    return () => {
      if (countdownRef.current) clearInterval(countdownRef.current);
    };
  }, []);

  const btcPriceUsd = priceData?.bitcoin?.usd ?? 0;
  const btcPriceEur = priceData?.bitcoin?.eur ?? 0;
  const btcPriceGbp = priceData?.bitcoin?.gbp ?? 0;
  const btcPriceCad = priceData?.bitcoin?.cad ?? 0;

  const chartMin = chartData.length > 0 ? Math.min(...chartData.map((d) => d.price)) * 0.98 : 0;
  const chartMax = chartData.length > 0 ? Math.max(...chartData.map((d) => d.price)) * 1.02 : 0;

  const satoshiValue = parseFloat(satoshiInput) || 0;
  const usdValue = satoshiValue * (btcPriceUsd / SATOSHI_PER_BTC);
  const eurValue = satoshiValue * (btcPriceEur / SATOSHI_PER_BTC);
  const gbpValue = satoshiValue * (btcPriceGbp / SATOSHI_PER_BTC);
  const cadValue = satoshiValue * (btcPriceCad / SATOSHI_PER_BTC);

  const usdInputValue = parseFloat(usdInput) || 0;
  const reverseBtcPrice =
    reverseCurrency === 'usd'
      ? btcPriceUsd
      : reverseCurrency === 'eur'
        ? btcPriceEur
        : reverseCurrency === 'gbp'
          ? btcPriceGbp
          : btcPriceCad;
  const reverseSatoshiValue =
    reverseBtcPrice > 0 ? (usdInputValue / reverseBtcPrice) * SATOSHI_PER_BTC : 0;

  const copyToClipboard = (text: string, key: string) => {
    navigator.clipboard.writeText(text).then(() => {
      setCopied(key);
      setTimeout(() => setCopied(null), 1500);
    });
  };

  const priceChange = priceData?.bitcoin?.usd_24h_change ?? null;
  const isUp = priceChange === null ? true : priceChange >= 0;
  const priceChangeLabel =
    priceChange === null
      ? '24h'
      : `${isUp ? '+' : ''}${priceChange.toFixed(2)}%`;

  return (
      <main id="main-content" className="max-w-5xl mx-auto px-4 sm:px-6 py-8 sm:py-12" role="main">
        {/* BTC Price Banner */}
        <section className="mb-10 animate-fade-in" aria-label="Live Bitcoin Price">
          <div className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 p-6 sm:p-8 shadow-sm" itemScope itemType="https://schema.org/ExchangeRateSpecification">
            <meta itemProp="currency" content="BTC" />
            <meta itemProp="targetCurrency" content="USD" />
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
              <div>
                <div className="flex items-center gap-2 text-sm text-slate-500 dark:text-slate-400 mb-1">
                  <TrendingUp className="w-4 h-4" aria-hidden="true" />
                  <h1 className="text-sm font-normal">Live Bitcoin Price</h1>
                </div>
                <div className="flex items-baseline gap-3">
                  <span className="text-3xl sm:text-4xl font-bold tracking-tight" itemProp="value">
                    {btcPriceUsd > 0 ? formatCurrency(btcPriceUsd, 'usd') : '--'}
                  </span>
                  <span
                    className={`inline-flex items-center gap-1 text-sm font-medium px-2.5 py-0.5 rounded-full ${
                      priceChange === null
                        ? 'bg-slate-100 text-slate-500 dark:bg-slate-800 dark:text-slate-400'
                        : isUp
                          ? 'bg-emerald-50 text-emerald-600 dark:bg-emerald-900/20 dark:text-emerald-400'
                          : 'bg-rose-50 text-rose-600 dark:bg-rose-900/20 dark:text-rose-400'
                    }`}
                    aria-label={
                      priceChange === null
                        ? '24 hour price change loading'
                        : `24 hour price change ${priceChangeLabel}`
                    }
                  >
                    {priceChange !== null &&
                      (isUp ? (
                        <ArrowUpRight className="w-3.5 h-3.5" aria-hidden="true" />
                      ) : (
                        <ArrowDownRight className="w-3.5 h-3.5" aria-hidden="true" />
                      ))}
                    {priceChangeLabel}
                  </span>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="text-right">
                  <div className="text-sm text-slate-500 dark:text-slate-400">USD</div>
                  <div className="font-semibold">{btcPriceUsd > 0 ? formatCurrency(btcPriceUsd, 'usd') : '--'}</div>
                </div>
                <div className="w-px h-8 bg-slate-200 dark:bg-slate-700" />
                <div className="text-right">
                  <div className="text-sm text-slate-500 dark:text-slate-400">EUR</div>
                  <div className="font-semibold">{btcPriceEur > 0 ? formatCurrency(btcPriceEur, 'eur') : '--'}</div>
                </div>
                <div className="w-px h-8 bg-slate-200 dark:bg-slate-700" />
                <div className="text-right">
                  <div className="text-sm text-slate-500 dark:text-slate-400">GBP</div>
                  <div className="font-semibold">{btcPriceGbp > 0 ? formatCurrency(btcPriceGbp, 'gbp') : '--'}</div>
                </div>
                <div className="w-px h-8 bg-slate-200 dark:bg-slate-700 hidden sm:block" />
                <div className="text-right hidden sm:block">
                  <div className="text-sm text-slate-500 dark:text-slate-400">CAD</div>
                  <div className="font-semibold">{btcPriceCad > 0 ? formatCurrency(btcPriceCad, 'cad') : '--'}</div>
                </div>
              </div>
            </div>
            <div className="mt-4 pt-4 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between text-sm">
              <div className="flex items-center gap-2 text-slate-500 dark:text-slate-400">
                <RefreshCw className={`w-3.5 h-3.5 ${loading ? 'animate-spin' : ''}`} aria-hidden="true" />
                <span>{lastUpdated ? `Updated ${lastUpdated.toLocaleTimeString()}` : 'Loading...'}</span>
              </div>
              <div className="text-slate-400 dark:text-slate-500">Next update in {countdown}s</div>
            </div>
          </div>
        </section>

        {/* Error Banner */}
        {error && (
          <div className="mb-6 p-4 rounded-xl bg-rose-50 dark:bg-rose-900/20 border border-rose-200 dark:border-rose-800 text-rose-700 dark:text-rose-300 text-sm animate-fade-in" role="alert">
            {error}
          </div>
        )}

        {/* Converter Card */}
        <section className="mb-12 animate-slide-up" aria-label="Satoshi Converter">
          <div className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm overflow-hidden">
            <div className="border-b border-slate-100 dark:border-slate-800">
              <div className="flex" role="tablist" aria-label="Conversion direction">
                <button
                  onClick={() => setMode('satoshi')}
                  className={`flex-1 py-4 text-sm font-medium transition-colors relative ${
                    mode === 'satoshi'
                      ? 'text-orange-600 dark:text-orange-400'
                      : 'text-slate-500 dark:text-slate-400 hover:text-slate-700 dark:hover:text-slate-300'
                  }`}
                  role="tab"
                  aria-selected={mode === 'satoshi'}
                  aria-controls="satoshi-panel"
                  id="satoshi-tab"
                >
                  <span className="flex items-center justify-center gap-2">
                    <Bitcoin className="w-4 h-4" aria-hidden="true" />
                    Satoshi to Fiat
                  </span>
                  {mode === 'satoshi' && <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-orange-500" />}
                </button>
                <button
                  onClick={() => setMode('reverse')}
                  className={`flex-1 py-4 text-sm font-medium transition-colors relative ${
                    mode === 'reverse'
                      ? 'text-orange-600 dark:text-orange-400'
                      : 'text-slate-500 dark:text-slate-400 hover:text-slate-700 dark:hover:text-slate-300'
                  }`}
                  role="tab"
                  aria-selected={mode === 'reverse'}
                  aria-controls="reverse-panel"
                  id="reverse-tab"
                >
                  <span className="flex items-center justify-center gap-2">
                    <ArrowRightLeft className="w-4 h-4" aria-hidden="true" />
                    Fiat to Satoshi
                  </span>
                  {mode === 'reverse' && <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-orange-500" />}
                </button>
              </div>
            </div>

            <div className="p-6 sm:p-8">
              {mode === 'satoshi' ? (
                <div id="satoshi-panel" role="tabpanel" aria-labelledby="satoshi-tab" className="space-y-6">
                  <div>
                    <label htmlFor="satoshi-input" className="block text-sm font-medium text-slate-600 dark:text-slate-400 mb-2">
                      Amount in Satoshi
                    </label>
                    <div className="relative">
                      <div className="absolute left-4 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-orange-100 dark:bg-orange-900/30 flex items-center justify-center">
                        <Bitcoin className="w-4 h-4 text-orange-600 dark:text-orange-400" aria-hidden="true" />
                      </div>
                      <input
                        id="satoshi-input"
                        type="number"
                        value={satoshiInput}
                        onChange={(e) => setSatoshiInput(e.target.value)}
                        min="0"
                        step="1"
                        className="w-full pl-16 pr-4 py-4 text-2xl font-semibold bg-slate-50 dark:bg-slate-850 border border-slate-200 dark:border-slate-700 rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-500/30 focus:border-orange-500 transition-all dark:text-white"
                        placeholder="0"
                        inputMode="numeric"
                      />
                      <div className="absolute right-4 top-1/2 -translate-y-1/2 text-sm text-slate-400 font-medium">sats</div>
                    </div>
                    <div className="mt-2 text-sm text-slate-500 dark:text-slate-400">= {formatNumber(satoshiValue / SATOSHI_PER_BTC)} BTC</div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                    {(['usd', 'eur', 'gbp', 'cad'] as const).map((currency) => {
                      const value =
                        currency === 'usd'
                          ? usdValue
                          : currency === 'eur'
                            ? eurValue
                            : currency === 'gbp'
                              ? gbpValue
                              : cadValue;
                      return (
                        <div
                          key={currency}
                          className="group relative bg-slate-50 dark:bg-slate-850 rounded-xl p-4 border border-slate-100 dark:border-slate-800 hover:border-orange-200 dark:hover:border-orange-800/50 transition-all"
                        >
                          <div className="flex items-center gap-2 text-slate-500 dark:text-slate-400 mb-2">
                            <span aria-hidden="true">{currencyIcons[currency]}</span>
                            <span className="text-sm font-medium uppercase">{currency}</span>
                          </div>
                          <div className="text-xl font-bold tracking-tight">
                            {btcPriceUsd > 0 ? formatCurrency(value, currency) : '--'}
                          </div>
                          <button
                            onClick={() => copyToClipboard(formatCurrency(value, currency), currency)}
                            className="absolute top-3 right-3 p-1.5 rounded-md opacity-0 group-hover:opacity-100 hover:bg-slate-200 dark:hover:bg-slate-700 transition-all"
                            aria-label={`Copy ${currency.toUpperCase()} value`}
                          >
                            {copied === currency ? (
                              <Check className="w-3.5 h-3.5 text-emerald-500" aria-hidden="true" />
                            ) : (
                              <Copy className="w-3.5 h-3.5 text-slate-400" aria-hidden="true" />
                            )}
                          </button>
                        </div>
                      );
                    })}
                  </div>
                </div>
              ) : (
                <div id="reverse-panel" role="tabpanel" aria-labelledby="reverse-tab" className="space-y-6">
                  <div>
                    <label htmlFor="fiat-input" className="block text-sm font-medium text-slate-600 dark:text-slate-400 mb-2">
                      Amount in Fiat
                    </label>
                    <div className="relative flex gap-3">
                      <div className="relative flex-1">
                        <div className="absolute left-4 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-emerald-100 dark:bg-emerald-900/30 flex items-center justify-center">
                          <span aria-hidden="true">{currencyIcons[reverseCurrency]}</span>
                        </div>
                        <input
                          id="fiat-input"
                          type="number"
                          value={usdInput}
                          onChange={(e) => setUsdInput(e.target.value)}
                          min="0"
                          step="0.01"
                          className="w-full pl-16 pr-4 py-4 text-2xl font-semibold bg-slate-50 dark:bg-slate-850 border border-slate-200 dark:border-slate-700 rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-500/30 focus:border-orange-500 transition-all dark:text-white"
                          placeholder="0"
                          inputMode="decimal"
                        />
                      </div>
                      <div className="relative">
                        <select
                          value={reverseCurrency}
                          onChange={(e) => setReverseCurrency(e.target.value)}
                          className="h-full pl-4 pr-10 py-4 bg-slate-50 dark:bg-slate-850 border border-slate-200 dark:border-slate-700 rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-500/30 focus:border-orange-500 font-semibold text-slate-700 dark:text-slate-300 appearance-none cursor-pointer"
                          aria-label="Select fiat currency"
                        >
                          <option value="usd">USD</option>
                          <option value="eur">EUR</option>
                          <option value="gbp">GBP</option>
                          <option value="cad">CAD</option>
                        </select>
                        <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 pointer-events-none" aria-hidden="true" />
                      </div>
                    </div>
                  </div>

                  <div className="bg-slate-50 dark:bg-slate-850 rounded-xl p-6 border border-slate-100 dark:border-slate-800">
                    <div className="flex items-center gap-2 text-slate-500 dark:text-slate-400 mb-3">
                      <Bitcoin className="w-4 h-4" aria-hidden="true" />
                      <span className="text-sm font-medium">Equivalent in Satoshi</span>
                    </div>
                    <div className="flex items-baseline gap-2">
                      <span className="text-3xl font-bold tracking-tight">
                        {reverseBtcPrice > 0 ? formatNumber(Math.floor(reverseSatoshiValue)) : '--'}
                      </span>
                      <span className="text-lg text-slate-400 font-medium">sats</span>
                    </div>
                    <div className="mt-2 text-sm text-slate-500 dark:text-slate-400">
                      = {formatNumber(reverseSatoshiValue / SATOSHI_PER_BTC)} BTC
                    </div>
                    <button
                      onClick={() => copyToClipboard(String(Math.floor(reverseSatoshiValue)), 'reverse')}
                      className="mt-4 inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-sm font-medium hover:bg-slate-50 dark:hover:bg-slate-700 transition-colors"
                    >
                      {copied === 'reverse' ? (
                        <>
                          <Check className="w-3.5 h-3.5 text-emerald-500" aria-hidden="true" />
                          Copied
                        </>
                      ) : (
                        <>
                          <Copy className="w-3.5 h-3.5" aria-hidden="true" />
                          Copy Satoshi Amount
                        </>
                      )}
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </section>

        {/* 10-Day Price Chart */}
        <section className="mb-12 animate-slide-up" aria-label="Bitcoin 10-Day Price Chart">
          <div className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 p-6 sm:p-8 shadow-sm">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-xl bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center">
                <BarChart3 className="w-5 h-5 text-blue-600 dark:text-blue-400" aria-hidden="true" />
              </div>
              <div>
                <h2 className="text-xl font-bold">10-Day Price Trend</h2>
                <p className="text-sm text-slate-500 dark:text-slate-400">Bitcoin price in USD</p>
              </div>
            </div>
            {chartLoading ? (
              <div className="h-44 sm:h-56 flex items-center justify-center text-slate-400">
                <RefreshCw className="w-6 h-6 animate-spin mr-2" aria-hidden="true" />
                Loading chart...
              </div>
            ) : chartData.length === 0 ? (
              <div className="h-44 sm:h-56 flex items-center justify-center text-slate-400">Unable to load chart data.</div>
            ) : (
              <div className="h-44 sm:h-56">
                <Suspense fallback={<div className="h-44 sm:h-56 flex items-center justify-center text-slate-400">Loading chart...</div>}>
                  <ResponsiveContainer width="100%" height="100%">
                    <AreaChart data={chartData} margin={{ top: 5, right: 5, left: 5, bottom: 5 }}>
                      <defs>
                        <linearGradient id="colorPrice" x1="0" y1="0" x2="0" y2="1">
                          <stop offset="5%" stopColor="#f97316" stopOpacity={0.3} />
                          <stop offset="95%" stopColor="#f97316" stopOpacity={0} />
                        </linearGradient>
                      </defs>
                      <CartesianGrid strokeDasharray="3 3" stroke={dark ? '#334155' : '#e2e8f0'} />
                      <XAxis
                        dataKey="date"
                        tick={{ fill: dark ? '#94a3b8' : '#64748b', fontSize: 12 }}
                        axisLine={{ stroke: dark ? '#475569' : '#cbd5e1' }}
                        tickLine={false}
                      />
                      <YAxis
                        domain={[chartMin, chartMax]}
                        tick={{ fill: dark ? '#94a3b8' : '#64748b', fontSize: 12 }}
                        axisLine={false}
                        tickLine={false}
                        tickFormatter={(v: number) => `$${(v / 1000).toFixed(0)}k`}
                      />
                      <Tooltip
                        contentStyle={{
                          backgroundColor: dark ? '#1e293b' : '#ffffff',
                          border: `1px solid ${dark ? '#334155' : '#e2e8f0'}`,
                          borderRadius: '12px',
                          color: dark ? '#f1f5f9' : '#0f172a',
                        }}
                        formatter={(value) => {
                          const n = typeof value === 'number' ? value : Number(value);
                          return [
                            new Intl.NumberFormat('en-US', {
                              style: 'currency',
                              currency: 'USD',
                              minimumFractionDigits: 0,
                              maximumFractionDigits: 0,
                            }).format(n),
                            'Price',
                          ];
                        }}
                      />
                      <Area
                        type="monotone"
                        dataKey="price"
                        stroke="#f97316"
                        strokeWidth={2.5}
                        fillOpacity={1}
                        fill="url(#colorPrice)"
                        dot={{ r: 4, fill: '#f97316', strokeWidth: 0 }}
                        activeDot={{ r: 6, fill: '#f97316', stroke: dark ? '#1e293b' : '#ffffff', strokeWidth: 2 }}
                      />
                    </AreaChart>
                  </ResponsiveContainer>
                </Suspense>
              </div>
            )}
          </div>
        </section>

        <div className="max-w-5xl mx-auto">
          <AdSlot placement="content" />
        </div>

        {/* Info Section */}
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12" aria-label="About Satoshi and Conversion Guide">
          <article className="animate-slide-up" style={{ animationDelay: '0.1s' }}>
            <div className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 p-6 sm:p-8 shadow-sm h-full">
              <div className="flex items-center gap-3 mb-5">
                <div className="w-10 h-10 rounded-xl bg-orange-100 dark:bg-orange-900/30 flex items-center justify-center">
                  <Info className="w-5 h-5 text-orange-600 dark:text-orange-400" aria-hidden="true" />
                </div>
                <h2 className="text-xl font-bold">What is a Satoshi?</h2>
              </div>
              <div className="space-y-4 text-slate-600 dark:text-slate-300 leading-relaxed">
                <p>
                  A <strong>Satoshi</strong> is the smallest unit of Bitcoin,
                  named after the pseudonymous creator of Bitcoin, Satoshi
                  Nakamoto. Just as a dollar is divided into 100 cents, one
                  Bitcoin is divided into 100,000,000 Satoshis.
                </p>
                <p>
                  This means 1 Satoshi equals 0.00000001 BTC. When Bitcoin's
                  price rises, expressing smaller amounts in Satoshis becomes
                  more practical than using decimal fractions of a whole Bitcoin.
                </p>
                <p>
                  Satoshis enable micro-transactions and make Bitcoin accessible
                  at any price level. You don't need to buy a whole Bitcoin —
                  you can purchase any amount, right down to a single Satoshi.
                </p>
              </div>
            </div>
          </article>
          <article className="animate-slide-up" style={{ animationDelay: '0.2s' }}>
            <div className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 p-6 sm:p-8 shadow-sm h-full">
              <div className="flex items-center gap-3 mb-5">
                <div className="w-10 h-10 rounded-xl bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center">
                  <Wallet className="w-5 h-5 text-blue-600 dark:text-blue-400" aria-hidden="true" />
                </div>
                <h2 className="text-xl font-bold">How Do I Store My Bitcoin?</h2>
              </div>
              <div className="space-y-4 text-slate-600 dark:text-slate-300 leading-relaxed">
                <p>
                  Bitcoin is stored in a <strong>digital wallet</strong>, which holds your private keys — the cryptographic proof that you own your coins. There are several types of wallets, each with different trade-offs between security and convenience.
                </p>
                <p>
                  <strong>Hardware wallets</strong> (like Ledger or Trezor) are physical devices that keep your keys offline, making them the most secure option for long-term storage. They are immune to online hacking attempts.
                </p>
                <p>
                  <strong>Software wallets</strong> (mobile or desktop apps) are convenient for everyday use but are connected to the internet, so they carry more risk. Always download wallets from official sources and enable two-factor authentication where possible.
                </p>
              </div>
            </div>
          </article>
          <article className="animate-slide-up" style={{ animationDelay: '0.3s' }}>
            <div className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 p-6 sm:p-8 shadow-sm h-full">
              <div className="flex items-center gap-3 mb-5">
                <div className="w-10 h-10 rounded-xl bg-amber-100 dark:bg-amber-900/30 flex items-center justify-center">
                  <Pickaxe className="w-5 h-5 text-amber-600 dark:text-amber-400" aria-hidden="true" />
                </div>
                <h2 className="text-xl font-bold">What is Bitcoin Mining?</h2>
              </div>
              <div className="space-y-4 text-slate-600 dark:text-slate-300 leading-relaxed">
                <p>
                  <strong>Bitcoin mining</strong> is the process by which new bitcoins are created and transactions are confirmed on the network. Miners use specialized computers to solve complex mathematical puzzles, securing the blockchain in the process.
                </p>
                <p>
                  When a miner successfully solves a puzzle, they add a new block of transactions to the blockchain and receive a reward in newly minted bitcoins. This reward halves approximately every four years in an event called the <strong>halving</strong>.
                </p>
                <p>
                  Mining ensures Bitcoin remains decentralized — no single entity controls the network. However, it requires significant electricity and hardware investment, leading to debates about its environmental impact.
                </p>
              </div>
            </div>
          </article>
          <article className="animate-slide-up" style={{ animationDelay: '0.4s' }}>
            <div className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 p-6 sm:p-8 shadow-sm h-full">
              <div className="flex items-center gap-3 mb-5">
                <div className="w-10 h-10 rounded-xl bg-emerald-100 dark:bg-emerald-900/30 flex items-center justify-center">
                  <ArrowRightLeft className="w-5 h-5 text-emerald-600 dark:text-emerald-400" aria-hidden="true" />
                </div>
                <h2 className="text-xl font-bold">How to Convert</h2>
              </div>
              <div className="space-y-4 text-slate-600 dark:text-slate-300 leading-relaxed">
                <p>
                  Converting between Satoshis and fiat currencies is simple with
                  the live Bitcoin price. Our calculator uses real-time data from
                  the CoinGecko API to ensure accuracy.
                </p>
                <p>
                  <strong>Satoshi to USD:</strong> Multiply your Satoshi amount
                  by the current BTC price in USD, then divide by 100,000,000.
                  For example, 10,000 sats at $65,000 BTC = $6.50.
                </p>
                <p>
                  <strong>USD to Satoshi:</strong> Divide your USD amount by the
                  current BTC price, then multiply by 100,000,000. Our reverse
                  converter handles this instantly for USD, EUR, GBP, and CAD.
                </p>
              </div>
            </div>
          </article>
        </section>

        {/* FAQ Section */}
        <section className="mb-12 animate-slide-up" style={{ animationDelay: '0.3s' }} aria-label="Frequently Asked Questions">
          <div className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 p-6 sm:p-8 shadow-sm">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-xl bg-violet-100 dark:bg-violet-900/30 flex items-center justify-center">
                <MessageCircleQuestion className="w-5 h-5 text-violet-600 dark:text-violet-400" aria-hidden="true" />
              </div>
              <h2 className="text-xl font-bold">Frequently Asked Questions</h2>
            </div>
            <div className="space-y-4">
              {[
                {
                  q: 'How many Satoshis are in one Bitcoin?',
                  a: 'There are exactly 100,000,000 (one hundred million) Satoshis in one Bitcoin. This is why 1 Satoshi equals 0.00000001 BTC.',
                },
                {
                  q: 'How many Satoshis in 100 dollars?',
                  a: () => {
                    const sats = btcPriceUsd > 0 ? Math.floor((100 / btcPriceUsd) * SATOSHI_PER_BTC) : 0;
                    const eurSats = btcPriceEur > 0 ? Math.floor((100 / btcPriceEur) * SATOSHI_PER_BTC) : 0;
                    const gbpSats = btcPriceGbp > 0 ? Math.floor((100 / btcPriceGbp) * SATOSHI_PER_BTC) : 0;
                    const cadSats = btcPriceCad > 0 ? Math.floor((100 / btcPriceCad) * SATOSHI_PER_BTC) : 0;
                    return btcPriceUsd > 0
                      ? `At current prices, 100 USD buys about ${sats.toLocaleString()} sats. 100 EUR buys about ${eurSats.toLocaleString()} sats. 100 GBP buys about ${gbpSats.toLocaleString()} sats. 100 CAD buys about ${cadSats.toLocaleString()} sats.`
                      : 'Loading live conversion...';
                  },
                },
                {
                  q: 'How much is 1000 Satoshis in dollars?',
                  a: () => {
                    const usd = btcPriceUsd > 0 ? 1000 * (btcPriceUsd / SATOSHI_PER_BTC) : 0;
                    const eur = btcPriceEur > 0 ? 1000 * (btcPriceEur / SATOSHI_PER_BTC) : 0;
                    const gbp = btcPriceGbp > 0 ? 1000 * (btcPriceGbp / SATOSHI_PER_BTC) : 0;
                    const cad = btcPriceCad > 0 ? 1000 * (btcPriceCad / SATOSHI_PER_BTC) : 0;
                    return btcPriceUsd > 0
                      ? `At current prices, 1000 sats = ${formatCurrency(usd, 'usd')} USD, ${formatCurrency(eur, 'eur')} EUR, ${formatCurrency(gbp, 'gbp')} GBP, ${formatCurrency(cad, 'cad')} CAD.`
                      : 'Loading live conversion...';
                  },
                },
                {
                  q: 'Why use Satoshis instead of Bitcoin?',
                  a: 'As Bitcoin price rises, whole Bitcoins become expensive. Satoshis let you buy, send, and track smaller amounts affordably. Most wallets and exchanges display balances in both BTC and sats.',
                },
                {
                  q: 'What currencies does SatoshiCalc support?',
                  a: 'SatoshiCalc supports conversion to and from USD, EUR, GBP, and CAD using live rates from CoinGecko.',
                },
                {
                  q: 'How often are prices updated?',
                  a: 'Prices refresh automatically every 60 seconds from the CoinGecko API to keep conversions as accurate as possible.',
                },
              ].map((faq, i) => {
                const id = `faq-${i}`;
                return (
                  <details
                    key={id}
                    className="group border border-slate-200 dark:border-slate-800 rounded-xl open:bg-slate-50 dark:open:bg-slate-850 transition-colors"
                  >
                    <summary className="flex items-center justify-between cursor-pointer p-4 list-none select-none">
                      <span className="font-medium text-slate-800 dark:text-slate-200 pr-4">{faq.q}</span>
                      <ChevronDown className="w-4 h-4 text-slate-400 shrink-0 transition-transform group-open:rotate-180" aria-hidden="true" />
                    </summary>
                    <div className="px-4 pb-4 text-slate-600 dark:text-slate-300 leading-relaxed">
                      {typeof faq.a === 'function' ? faq.a() : faq.a}
                    </div>
                  </details>
                );
              })}
            </div>
          </div>
        </section>

        {/* Quick Reference Table */}
        <section className="mb-12 animate-slide-up" style={{ animationDelay: '0.4s' }} aria-label="Satoshi Quick Reference Table">
          <div className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 p-6 sm:p-8 shadow-sm">
            <h2 className="text-xl font-bold mb-6">Quick Reference</h2>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-slate-200 dark:border-slate-700">
                    <th className="text-left py-3 px-4 font-medium text-slate-500 dark:text-slate-400">Satoshis</th>
                    <th className="text-right py-3 px-4 font-medium text-slate-500 dark:text-slate-400">USD</th>
                    <th className="text-right py-3 px-4 font-medium text-slate-500 dark:text-slate-400">EUR</th>
                    <th className="text-right py-3 px-4 font-medium text-slate-500 dark:text-slate-400">GBP</th>
                    <th className="text-right py-3 px-4 font-medium text-slate-500 dark:text-slate-400">CAD</th>
                  </tr>
                </thead>
                <tbody>
                  {[1, 10, 100, 1000, 10000, 100000, 1000000].map((sats) => (
                    <tr
                      key={sats}
                      className="border-b border-slate-100 dark:border-slate-800 hover:bg-slate-50 dark:hover:bg-slate-850 transition-colors"
                    >
                      <td className="py-3 px-4 font-medium">
                        <Link
                          to={`/${sats}-satoshi-to-usd`}
                          className="hover:text-orange-600 dark:hover:text-orange-400"
                        >
                          {sats.toLocaleString()} sats
                        </Link>
                      </td>
                      <td className="py-3 px-4 text-right">
                        {btcPriceUsd > 0 ? formatCurrency(sats * (btcPriceUsd / SATOSHI_PER_BTC), 'usd') : '--'}
                      </td>
                      <td className="py-3 px-4 text-right">
                        {btcPriceEur > 0 ? formatCurrency(sats * (btcPriceEur / SATOSHI_PER_BTC), 'eur') : '--'}
                      </td>
                      <td className="py-3 px-4 text-right">
                        {btcPriceGbp > 0 ? formatCurrency(sats * (btcPriceGbp / SATOSHI_PER_BTC), 'gbp') : '--'}
                      </td>
                      <td className="py-3 px-4 text-right">
                        {btcPriceCad > 0 ? formatCurrency(sats * (btcPriceCad / SATOSHI_PER_BTC), 'cad') : '--'}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>
      </main>
  );
}

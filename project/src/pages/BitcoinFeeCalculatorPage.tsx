import { useEffect, useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowRight,
  Bitcoin,
  Calculator,
  ChevronDown,
  ChevronRight,
  MessageCircleQuestion,
  RefreshCw,
} from 'lucide-react';
import { usePageMeta } from '../hooks/usePageMeta';
import { useBitcoinPrice } from '../hooks/useBitcoinPrice';
import ContentMonetizationSlot from '../components/ContentMonetizationSlot';
import AdSlot from '../components/AdSlot';
import SessionDeepener from '../components/SessionDeepener';
import { FEE_NEXT_STEPS } from '../lib/sessionNextSteps';
import {
  formatCurrency,
  formatNumber,
  formatSatoshiAmount,
  getBtcPrice,
  satoshiToFiat,
} from '../lib/conversion';
import { TX_SIZE_PRESETS, feeSats } from '../lib/fees';
import { getGuideBySlug } from '../lib/guides';
import { canonicalUrl } from '../lib/site';

const DEFAULT_SAT_PER_VB = 12;
const DEFAULT_VBYTES = 140;

export default function BitcoinFeeCalculatorPage() {
  usePageMeta({
    title: 'Bitcoin Fee Calculator — sat/vB to Sats & USD',
    description:
      'Estimate Bitcoin transaction fees from sat/vB and transaction size (vBytes). See fee in sats, BTC, and live USD. Free mempool planning tool.',
    path: '/bitcoin-fee-calculator',
  });

  const [satPerVb, setSatPerVb] = useState(DEFAULT_SAT_PER_VB);
  const [vBytes, setVBytes] = useState(DEFAULT_VBYTES);
  const [presetId, setPresetId] = useState<string>(TX_SIZE_PRESETS[0].id);

  const { priceData, loading, lastUpdated, countdown } = useBitcoinPrice();
  const btcPrice = getBtcPrice(priceData, 'usd');

  const sats = feeSats(satPerVb, vBytes);
  const usd = satoshiToFiat(sats, btcPrice);
  const btc = sats / 100_000_000;

  const relatedGuides = [
    'bitcoin-transaction-fees-explained',
    'how-to-send-bitcoin-first-time',
    'lightning-network-basics',
  ]
    .map((slug) => getGuideBySlug(slug))
    .filter((g): g is NonNullable<typeof g> => g !== undefined);

  const faqItems = useMemo(
    () => [
      {
        question: 'What is sat/vB?',
        answer:
          'Satoshis per virtual byte is the fee rate wallets use to bid for block space. Higher sat/vB usually confirms faster when the mempool is busy.',
      },
      {
        question: 'How is the fee calculated?',
        answer: `Fee (sats) ≈ sat/vB × transaction size in vBytes. This page uses ${satPerVb} sat/vB × ${vBytes} vB = ${formatSatoshiAmount(sats)} sats${btcPrice > 0 ? ` (about ${formatCurrency(usd, 'usd')} USD)` : ''}.`,
      },
      {
        question: 'Are these vByte sizes exact?',
        answer:
          'Presets are typical SegWit and legacy estimates. Your wallet may show a slightly different size based on inputs, outputs, and script type. Always confirm in your wallet before broadcasting.',
      },
      {
        question: 'When should I use Lightning instead?',
        answer:
          'For tips and small payments, Lightning fees are usually far cheaper than on-chain. Use on-chain for cold-storage moves and exchange withdrawals when you need settlement finality.',
      },
    ],
    [satPerVb, vBytes, sats, usd, btcPrice]
  );

  useEffect(() => {
    const scriptId = 'fee-calc-faq-schema';
    let script = document.getElementById(scriptId) as HTMLScriptElement | null;
    if (!script) {
      script = document.createElement('script');
      script.id = scriptId;
      script.type = 'application/ld+json';
      document.head.appendChild(script);
    }
    script.textContent = JSON.stringify({
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: faqItems.map((item) => ({
        '@type': 'Question',
        name: item.question,
        acceptedAnswer: { '@type': 'Answer', text: item.answer },
      })),
    });

    const breadcrumbId = 'fee-calc-breadcrumb-schema';
    let breadcrumb = document.getElementById(breadcrumbId) as HTMLScriptElement | null;
    if (!breadcrumb) {
      breadcrumb = document.createElement('script');
      breadcrumb.id = breadcrumbId;
      breadcrumb.type = 'application/ld+json';
      document.head.appendChild(breadcrumb);
    }
    breadcrumb.textContent = JSON.stringify({
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: canonicalUrl('/') },
        {
          '@type': 'ListItem',
          position: 2,
          name: 'Bitcoin Fee Calculator',
          item: canonicalUrl('/bitcoin-fee-calculator'),
        },
      ],
    });

    return () => {
      document.getElementById(scriptId)?.remove();
      document.getElementById(breadcrumbId)?.remove();
    };
  }, [faqItems]);

  return (
    <main id="main-content" className="max-w-5xl mx-auto px-4 sm:px-6 py-8 sm:py-12" role="main">
      <nav aria-label="Breadcrumb" className="mb-6 text-sm text-slate-500 dark:text-slate-400">
        <ol className="flex flex-wrap items-center gap-1">
          <li>
            <Link to="/" className="hover:text-orange-600 dark:hover:text-orange-400">
              Home
            </Link>
          </li>
          <li aria-hidden="true">
            <ChevronRight className="w-3.5 h-3.5 inline" />
          </li>
          <li className="text-slate-700 dark:text-slate-300 font-medium">Bitcoin Fee Calculator</li>
        </ol>
      </nav>

      <header className="mb-8">
        <div className="flex items-center gap-2 text-sm text-slate-500 dark:text-slate-400 mb-3">
          <Calculator className="w-4 h-4" aria-hidden="true" />
          <span>Mempool fee planning</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-bold tracking-tight mb-4">
          Bitcoin Fee Calculator (sat/vB)
        </h1>
        <p className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed max-w-3xl">
          Estimate on-chain fees from fee rate (sat/vB) and transaction size. Results show sats, BTC, and live USD
          so you can compare a withdrawal fee to the amount you are moving.
        </p>
      </header>

      <section
        className="mb-10 bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 p-6 sm:p-8 shadow-sm"
        aria-label="Fee calculator"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          <label className="block">
            <span className="text-sm font-medium text-slate-700 dark:text-slate-200">Fee rate (sat/vB)</span>
            <input
              type="number"
              min={1}
              step={1}
              value={satPerVb}
              onChange={(e) => setSatPerVb(Math.max(0, Number(e.target.value) || 0))}
              className="mt-2 w-full rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-850 px-4 py-3 text-lg font-semibold"
            />
          </label>
          <label className="block">
            <span className="text-sm font-medium text-slate-700 dark:text-slate-200">Transaction size (vBytes)</span>
            <input
              type="number"
              min={1}
              step={1}
              value={vBytes}
              onChange={(e) => {
                setPresetId('custom');
                setVBytes(Math.max(0, Number(e.target.value) || 0));
              }}
              className="mt-2 w-full rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-850 px-4 py-3 text-lg font-semibold"
            />
          </label>
        </div>

        <div className="mb-6">
          <p className="text-sm font-medium text-slate-700 dark:text-slate-200 mb-2">Size presets</p>
          <div className="flex flex-wrap gap-2">
            {TX_SIZE_PRESETS.map((preset) => (
              <button
                key={preset.id}
                type="button"
                onClick={() => {
                  setPresetId(preset.id);
                  setVBytes(preset.vBytes);
                }}
                className={`px-3 py-2 rounded-lg text-sm border transition-colors ${
                  presetId === preset.id
                    ? 'border-orange-400 bg-orange-50 dark:bg-orange-900/30 text-orange-800 dark:text-orange-200'
                    : 'border-slate-200 dark:border-slate-700 hover:border-orange-300'
                }`}
              >
                {preset.label} ({preset.vBytes} vB)
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <div className="rounded-xl border border-slate-100 dark:border-slate-800 bg-slate-50 dark:bg-slate-850 p-4">
            <p className="text-sm text-slate-500 dark:text-slate-400 mb-1">Fee (sats)</p>
            <p className="text-2xl font-bold">{formatSatoshiAmount(sats)}</p>
          </div>
          <div className="rounded-xl border border-slate-100 dark:border-slate-800 bg-slate-50 dark:bg-slate-850 p-4">
            <p className="text-sm text-slate-500 dark:text-slate-400 mb-1">Fee (BTC)</p>
            <p className="text-2xl font-bold">{formatNumber(btc)}</p>
          </div>
          <div className="rounded-xl border border-orange-100 dark:border-orange-900/40 bg-orange-50 dark:bg-orange-900/20 p-4">
            <p className="text-sm text-slate-500 dark:text-slate-400 mb-1">Fee (USD)</p>
            <p className="text-2xl font-bold text-orange-700 dark:text-orange-300">
              {btcPrice > 0 ? formatCurrency(usd, 'usd') : loading ? 'Loading…' : '—'}
            </p>
          </div>
        </div>

        <p className="mt-5 text-sm text-slate-600 dark:text-slate-300 leading-relaxed border-l-4 border-orange-500 pl-4">
          Formula: {satPerVb} sat/vB × {vBytes} vB = {formatSatoshiAmount(sats)} sats
          {btcPrice > 0 ? ` ≈ ${formatCurrency(usd, 'usd')} at ${formatCurrency(btcPrice, 'usd')} BTC.` : '.'}
        </p>

        <div className="mt-4 pt-4 border-t border-slate-100 dark:border-slate-800 flex flex-wrap items-center justify-between gap-3 text-sm text-slate-500 dark:text-slate-400">
          <div className="flex items-center gap-2">
            <RefreshCw className={`w-3.5 h-3.5 ${loading ? 'animate-spin' : ''}`} aria-hidden="true" />
            <span>{lastUpdated ? `Price updated ${lastUpdated.toLocaleTimeString()}` : 'Loading price…'}</span>
          </div>
          <span>Next update in {countdown}s · USD from CoinGecko</span>
        </div>

        <div className="mt-4 space-y-3">
          <SessionDeepener links={FEE_NEXT_STEPS} />
          <AdSlot placement="results" className="my-0" />
        </div>
      </section>

      <ContentMonetizationSlot placement="content" guides={relatedGuides} />

      <section className="mb-10 prose prose-slate dark:prose-invert max-w-none">
        <div className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 p-6 sm:p-8 shadow-sm space-y-6 text-slate-600 dark:text-slate-300 leading-relaxed">
          <div>
            <h2 className="text-xl font-bold text-slate-900 dark:text-slate-100 mt-0 mb-3">
              How to use this fee calculator
            </h2>
            <p>
              Check a mempool explorer or your wallet for a target sat/vB, pick a size preset close to your spend, and
              compare the USD fee to the amount you are sending. A $4 fee on a $40 transfer is expensive; the same fee
              on a $4,000 cold-storage move is usually fine.
            </p>
            <p className="mt-3">
              Need the full explainer? Read{' '}
              <Link
                to="/guides/bitcoin-transaction-fees-explained"
                className="text-orange-600 dark:text-orange-400 hover:underline"
              >
                Bitcoin transaction fees explained
              </Link>
              . Convert the fee sats to dollars on{' '}
              <Link to="/satoshi-to-usd" className="text-orange-600 dark:text-orange-400 hover:underline">
                Satoshi to USD
              </Link>{' '}
              or whole coins on{' '}
              <Link to="/btc-to-usd" className="text-orange-600 dark:text-orange-400 hover:underline">
                Bitcoin to USD
              </Link>
              .
            </p>
          </div>
          <div>
            <h2 className="text-xl font-bold text-slate-900 dark:text-slate-100 mt-0 mb-3">
              Why wallets quote sat/vB
            </h2>
            <p>
              Miners sort the mempool by fee rate, not by dollar amount. Two transactions can move the same BTC value
              but pay different fees if one spends more inputs (larger vSize). This tool separates rate from size so you
              can see both levers.
            </p>
          </div>
        </div>
      </section>

      <section className="mb-10" aria-labelledby="fee-faq-heading">
        <div className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 p-6 sm:p-8 shadow-sm">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 rounded-xl bg-violet-100 dark:bg-violet-900/30 flex items-center justify-center">
              <MessageCircleQuestion className="w-5 h-5 text-violet-600 dark:text-violet-400" aria-hidden="true" />
            </div>
            <h2 id="fee-faq-heading" className="text-xl font-bold">
              Frequently asked questions
            </h2>
          </div>
          <div className="space-y-4">
            {faqItems.map((faq, i) => (
              <details
                key={i}
                className="group border border-slate-200 dark:border-slate-800 rounded-xl open:bg-slate-50 dark:open:bg-slate-850"
              >
                <summary className="flex items-center justify-between cursor-pointer p-4 list-none">
                  <span className="font-medium text-slate-800 dark:text-slate-200 pr-4">{faq.question}</span>
                  <ChevronDown className="w-4 h-4 text-slate-400 shrink-0 group-open:rotate-180" aria-hidden="true" />
                </summary>
                <div className="px-4 pb-4 text-slate-600 dark:text-slate-300 leading-relaxed">{faq.answer}</div>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="text-center">
        <Link
          to="/btc-to-usd"
          className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-orange-500 text-white font-semibold hover:bg-orange-600 transition-colors"
        >
          <Bitcoin className="w-4 h-4" aria-hidden="true" />
          Open BTC to USD converter
          <ArrowRight className="w-4 h-4" aria-hidden="true" />
        </Link>
      </section>
    </main>
  );
}

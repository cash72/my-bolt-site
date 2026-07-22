import { Link } from 'react-router-dom';
import { Check, Minus } from 'lucide-react';
import { usePageMeta } from '../hooks/usePageMeta';
import { AffiliateButton } from '../components/ToolCard';
import ContentMonetizationSlot from '../components/ContentMonetizationSlot';
import { getGuideBySlug } from '../lib/guides/guides';
import { TOOLS } from '../lib/tools/tools';
import { CREW_SIZE_LABEL, TOOL_CATEGORY_LABEL, type Tool } from '../lib/tools/types';
import { SITE_NAME } from '../lib/site';

const FEATURE_COLS: { key: keyof Tool['features']; label: string }[] = [
  { key: 'routeOptimization', label: 'Routes' },
  { key: 'recurringBilling', label: 'Recurring' },
  { key: 'quickbooks', label: 'QuickBooks' },
  { key: 'mobileApp', label: 'Mobile' },
  { key: 'snowModule', label: 'Snow' },
  { key: 'designBuild', label: 'Design-build' },
  { key: 'chemicalTracking', label: 'Chemical' },
];

const PRICING_GUIDE_SLUGS = [
  'landscaping-software-pricing-guide',
  'how-to-choose-lawn-care-software',
  'when-to-upgrade-to-lmn',
];

function sortTools(a: Tool, b: Tool): number {
  const aCustom = a.startingPriceUsd <= 0;
  const bCustom = b.startingPriceUsd <= 0;
  if (aCustom !== bCustom) return aCustom ? 1 : -1;
  if (a.startingPriceUsd !== b.startingPriceUsd) return a.startingPriceUsd - b.startingPriceUsd;
  return a.name.localeCompare(b.name);
}

function priceLabel(tool: Tool): string {
  if (tool.startingPriceUsd <= 0) return 'Custom';
  return `~$${tool.startingPriceUsd}/mo`;
}

export default function PricingMatrixPage() {
  const tools = [...TOOLS].sort(sortTools);
  const featuredGuides = PRICING_GUIDE_SLUGS.map((slug) => getGuideBySlug(slug)).filter(
    (g): g is NonNullable<ReturnType<typeof getGuideBySlug>> => g != null
  );

  usePageMeta({
    title: 'Landscaping Software Pricing Matrix — Starting Prices Compared',
    description:
      'Side-by-side pricing matrix for lawn care and landscaping software: starting monthly prices, crew fit, and feature checkmarks for Jobber, Housecall Pro, LMN, Aspire, and more.',
    path: '/pricing',
  });

  return (
    <main id="main-content" className="max-w-5xl mx-auto px-4 sm:px-6 py-8 sm:py-12" role="main">
      <h1 className="text-2xl sm:text-3xl font-bold tracking-tight mb-3">
        Landscaping software pricing matrix
      </h1>
      <p className="text-slate-600 dark:text-slate-400 mb-6 leading-relaxed max-w-3xl">
        Compare published starting prices and core features across {TOOLS.length} platforms used by
        lawn care and landscape companies. Prices change — confirm on each vendor site before you
        buy. For crew-size guidance, see our{' '}
        <Link
          to="/guides/landscaping-software-pricing-guide"
          className="text-emerald-700 dark:text-emerald-400 hover:underline"
        >
          pricing guide
        </Link>
        .
      </p>

      <div className="overflow-x-auto rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 mb-8">
        <table className="w-full text-sm text-left min-w-[52rem]">
          <thead>
            <tr className="border-b border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950/60">
              <th scope="col" className="px-3 py-3 font-semibold sticky left-0 bg-slate-50 dark:bg-slate-950/95 z-10">
                Vendor
              </th>
              <th scope="col" className="px-3 py-3 font-semibold whitespace-nowrap">
                Starting price
              </th>
              <th scope="col" className="px-3 py-3 font-semibold">
                Category
              </th>
              <th scope="col" className="px-3 py-3 font-semibold">
                Best for
              </th>
              {FEATURE_COLS.map((col) => (
                <th key={col.key} scope="col" className="px-2 py-3 font-semibold text-center whitespace-nowrap">
                  {col.label}
                </th>
              ))}
              <th scope="col" className="px-3 py-3 font-semibold">
                <span className="sr-only">Visit</span>
              </th>
            </tr>
          </thead>
          <tbody>
            {tools.map((tool) => (
              <tr
                key={tool.slug}
                className="border-b border-slate-100 dark:border-slate-800/80 last:border-0 align-top"
              >
                <th
                  scope="row"
                  className="px-3 py-3 font-medium sticky left-0 bg-white dark:bg-slate-900 z-10"
                >
                  <Link
                    to={`/tools/${tool.slug}`}
                    className="text-emerald-700 dark:text-emerald-400 hover:underline"
                  >
                    {tool.name}
                  </Link>
                  <p className="text-xs font-normal text-slate-500 dark:text-slate-400 mt-1 max-w-[11rem] leading-snug">
                    {tool.pricingNote}
                  </p>
                </th>
                <td className="px-3 py-3 whitespace-nowrap font-semibold">{priceLabel(tool)}</td>
                <td className="px-3 py-3 text-slate-600 dark:text-slate-400 whitespace-nowrap">
                  {TOOL_CATEGORY_LABEL[tool.category]}
                </td>
                <td className="px-3 py-3 text-slate-600 dark:text-slate-400 text-xs leading-relaxed">
                  {tool.bestFor.map((size) => CREW_SIZE_LABEL[size]).join(', ')}
                </td>
                {FEATURE_COLS.map((col) => (
                  <td key={col.key} className="px-2 py-3 text-center">
                    {tool.features[col.key] ? (
                      <Check
                        className="w-4 h-4 text-emerald-600 dark:text-emerald-400 inline"
                        aria-label="Yes"
                      />
                    ) : (
                      <Minus className="w-4 h-4 text-slate-300 dark:text-slate-600 inline" aria-label="No" />
                    )}
                  </td>
                ))}
                <td className="px-3 py-3">
                  <AffiliateButton
                    toolSlug={tool.slug}
                    websiteUrl={tool.websiteUrl}
                    label="Visit"
                    className="inline-flex items-center px-2.5 py-1 rounded-md bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-medium whitespace-nowrap"
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <p className="text-xs text-slate-500 dark:text-slate-400 mb-8">
        Starting prices are approximate entry tiers researched for {SITE_NAME}. Mid-tier and
        enterprise plans usually cost more. Custom-priced vendors (Aspire, SingleOps) typically
        quote after a demo.
      </p>

      <section className="mb-10">
        <h2 className="text-lg font-semibold mb-3">Next steps</h2>
        <ul className="space-y-2 text-sm">
          <li>
            <Link to="/compare" className="text-emerald-700 dark:text-emerald-400 hover:underline">
              Head-to-head comparisons
            </Link>
          </li>
          <li>
            <Link to="/tools" className="text-emerald-700 dark:text-emerald-400 hover:underline">
              Full tool directory
            </Link>
          </li>
          <li>
            <Link
              to="/guides/landscaping-software-pricing-guide"
              className="text-emerald-700 dark:text-emerald-400 hover:underline"
            >
              Landscaping software pricing guide
            </Link>
          </li>
        </ul>
      </section>

      <ContentMonetizationSlot placement="content" guides={featuredGuides} />
    </main>
  );
}

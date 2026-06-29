import { ExternalLink } from 'lucide-react';
import { AFFILIATE_DISCLOSURE, type AffiliateProduct } from '../lib/affiliates';
import { trackEvent } from '../lib/analytics';

export function AffiliateDisclosureBanner() {
  return (
    <aside
      className="mb-8 rounded-xl border border-amber-200 dark:border-amber-900/50 bg-amber-50 dark:bg-amber-950/30 px-5 py-4 text-sm text-amber-950 dark:text-amber-100 leading-relaxed"
      role="note"
      aria-label="Affiliate disclosure"
    >
      <strong className="font-semibold">Disclosure: </strong>
      {AFFILIATE_DISCLOSURE}
    </aside>
  );
}

interface AffiliateProductCardProps {
  product: AffiliateProduct;
}

export function AffiliateProductCard({ product }: AffiliateProductCardProps) {
  return (
    <div className="rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-5 shadow-sm">
      <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4">
        <div className="flex-1">
          <p className="text-xs font-medium uppercase tracking-wide text-slate-500 dark:text-slate-400 mb-1">
            {product.brand}
          </p>
          <h3 className="text-lg font-bold text-slate-900 dark:text-slate-100 mb-2">{product.name}</h3>
          <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed mb-2">{product.description}</p>
          <p className="text-sm text-slate-500 dark:text-slate-400">
            <strong className="text-slate-700 dark:text-slate-300">Best for:</strong> {product.bestFor}
          </p>
        </div>
        <a
          href={product.url}
          target="_blank"
          rel="sponsored noopener noreferrer"
          onClick={() =>
            trackEvent('affiliate_click', {
              product_id: product.id,
              product_name: product.name,
              link_url: product.url,
            })
          }
          className="inline-flex items-center justify-center gap-2 shrink-0 px-4 py-2.5 rounded-lg bg-orange-500 text-white text-sm font-semibold hover:bg-orange-600 transition-colors"
        >
          View {product.name}
          <ExternalLink className="w-3.5 h-3.5" aria-hidden="true" />
        </a>
      </div>
    </div>
  );
}

interface AffiliateProductGridProps {
  products: AffiliateProduct[];
}

export function AffiliateProductGrid({ products }: AffiliateProductGridProps) {
  if (products.length === 0) return null;

  return (
    <div className="not-prose my-6 space-y-4" aria-label="Recommended products">
      {products.map((product) => (
        <AffiliateProductCard key={product.id} product={product} />
      ))}
    </div>
  );
}

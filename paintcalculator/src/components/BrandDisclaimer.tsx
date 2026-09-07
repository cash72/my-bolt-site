import { Link } from 'react-router-dom';
import { BRAND_AFFILIATION_DISCLAIMER } from '../lib/canadianPaintBrands';

export default function BrandDisclaimer({ className = '' }: { className?: string }) {
  return (
    <p className={`text-xs text-slate-500 dark:text-slate-400 leading-relaxed ${className}`}>
      {BRAND_AFFILIATION_DISCLAIMER}{' '}
      <Link to="/disclaimer" className="underline hover:text-blue-600 dark:hover:text-blue-400">
        Full disclaimer
      </Link>
      .
    </p>
  );
}

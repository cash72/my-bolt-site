import { Link } from 'react-router-dom';
import { usePageMeta } from '../hooks/usePageMeta';
import { GuideCard } from '../components/GuideCard';
import AdSlot from '../components/AdSlot';
import { GUIDES } from '../lib/guides/guides';

export default function GuidesIndexPage() {
  usePageMeta({
    title: 'Landscaping Software Buying Guides',
    description:
      'How to choose lawn care and landscaping business software — pricing, routing, QuickBooks sync, crew apps, and 12 in-depth buying guides.',
    path: '/guides',
  });

  return (
    <main id="main-content" className="max-w-3xl mx-auto px-4 sm:px-6 py-8 sm:py-12" role="main">
      <h1 className="text-2xl sm:text-3xl font-bold tracking-tight mb-3">Buying guides</h1>
      <p className="text-slate-600 dark:text-slate-400 mb-8 leading-relaxed">
        Practical advice for picking field service and landscape-specific software — before you commit to a annual
        contract.
      </p>

      <div className="grid sm:grid-cols-2 gap-4">
        {GUIDES.map((guide) => (
          <GuideCard key={guide.slug} guide={guide} />
        ))}
      </div>

      <AdSlot placement="content" className="mt-10" />

      <p className="text-sm mt-8">
        <Link to="/tools" className="text-emerald-600 dark:text-emerald-400 hover:underline">
          Browse the full software directory →
        </Link>
      </p>
    </main>
  );
}

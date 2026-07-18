import { Link } from 'react-router-dom';
import { usePageMeta } from '../hooks/usePageMeta';
import { useJsonLd } from '../hooks/useJsonLd';
import { GuideCard } from '../components/GuideCard';
import ContentMonetizationSlot from '../components/ContentMonetizationSlot';
import { GUIDES } from '../lib/guides/guides';
import { itemListSchema, pageUrl } from '../lib/schema/jsonLd';

const INDEX_GUIDE_SLUGS = [
  'how-to-choose-lawn-care-software',
  'landscaping-software-pricing-guide',
  'snow-removal-billing-software',
  'job-costing-landscape-install-projects',
];

export default function GuidesIndexPage() {
  const featuredGuides = INDEX_GUIDE_SLUGS.map((slug) => GUIDES.find((g) => g.slug === slug)).filter(
    (g): g is NonNullable<(typeof GUIDES)[number]> => g != null
  );

  usePageMeta({
    title: 'Landscaping Software Buying Guides',
    description:
      'How to choose lawn care and landscaping business software — pricing, routing, QuickBooks sync, crew apps, and 12 in-depth buying guides.',
    path: '/guides',
  });

  useJsonLd(
    'guides-index-list-schema',
    itemListSchema(
      'Landscaping software buying guides',
      GUIDES.map((guide) => ({
        name: guide.title,
        url: pageUrl(`/guides/${guide.slug}`),
      }))
    )
  );

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

      <ContentMonetizationSlot placement="content" guides={featuredGuides} className="mt-10" />

      <p className="text-sm mt-8">
        <Link to="/tools" className="text-emerald-600 dark:text-emerald-400 hover:underline">
          Browse the full software directory →
        </Link>
      </p>
    </main>
  );
}

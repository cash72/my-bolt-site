import { Link } from 'react-router-dom';
import { usePageMeta } from '../hooks/usePageMeta';
import ContentMonetizationSlot from '../components/ContentMonetizationSlot';
import { getGuideBySlug } from '../lib/guides/guides';
import { COMPARISONS } from '../lib/comparisons/comparisons';
import { ALTERNATIVES } from '../lib/alternatives/alternatives';

const COMPARE_INDEX_GUIDE_SLUGS = [
  'how-to-choose-lawn-care-software',
  'when-to-upgrade-to-lmn',
  'landscaping-software-pricing-guide',
];

export default function CompareIndexPage() {
  const featuredGuides = COMPARE_INDEX_GUIDE_SLUGS.map((slug) => getGuideBySlug(slug)).filter(
    (g): g is NonNullable<ReturnType<typeof getGuideBySlug>> => g != null
  );

  usePageMeta({
    title: 'Landscaping Software Comparisons',
    description:
      'Side-by-side comparisons of lawn care and landscaping business software — Jobber vs Housecall Pro, LMN vs Jobber, GorillaDesk, Service Autopilot, Aspire, and more.',
    path: '/compare',
  });

  return (
    <main id="main-content" className="max-w-3xl mx-auto px-4 sm:px-6 py-8 sm:py-12" role="main">
      <h1 className="text-2xl sm:text-3xl font-bold tracking-tight mb-3">Software comparisons</h1>
      <p className="text-slate-600 dark:text-slate-400 mb-8 leading-relaxed">
        Head-to-head reviews for landscaping and lawn care companies choosing between popular platforms.
      </p>

      <ul className="space-y-6 mb-10">
        {COMPARISONS.map((c) => (
          <li key={c.slug} className="border-b border-slate-200 dark:border-slate-800 pb-6">
            <Link
              to={`/compare/${c.slug}`}
              className="text-lg font-semibold text-emerald-700 dark:text-emerald-400 hover:underline"
            >
              {c.title}
            </Link>
            <p className="text-sm text-slate-600 dark:text-slate-400 mt-2">{c.summary}</p>
          </li>
        ))}
      </ul>

      <section>
        <h2 className="text-lg font-semibold mb-4">Alternatives roundups</h2>
        <ul className="space-y-3">
          {ALTERNATIVES.map((a) => (
            <li key={a.slug}>
              <Link
                to={`/alternatives/${a.slug}`}
                className="text-emerald-700 dark:text-emerald-400 font-medium hover:underline"
              >
                {a.title}
              </Link>
            </li>
          ))}
        </ul>
      </section>

      <ContentMonetizationSlot placement="content" guides={featuredGuides} className="mt-10" />
    </main>
  );
}

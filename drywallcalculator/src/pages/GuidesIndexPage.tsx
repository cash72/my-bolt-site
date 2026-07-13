import { usePageMeta } from '../hooks/usePageMeta';
import { GUIDES } from '../lib/guides/guides';
import { GUIDE_CATEGORY_LABEL, type GuideCategory } from '../lib/guides/types';
import { GuideCard } from '../components/GuideCard';
import ContentMonetizationSlot from '../components/ContentMonetizationSlot';
import { getFeaturedHomeGuides } from '../lib/landingHelpers';

const CATEGORIES: GuideCategory[] = ['planning', 'installation', 'finishing', 'materials', 'repair'];

export default function GuidesIndexPage() {
  usePageMeta({
    title: 'Drywall Guides — Hanging, Taping, Mudding & Sheet Estimates',
    description:
      'In-depth drywall guides: how much board to buy, sheet sizes, screw spacing, ceiling hangs, taping and mudding, patches, and basement finishing — with free calculators.',
    path: '/guides',
  });

  return (
    <main id="main-content" className="max-w-5xl mx-auto px-4 sm:px-6 py-8 sm:py-12" role="main">
      <h1 className="text-2xl sm:text-3xl font-bold tracking-tight mb-2">Drywall project guides</h1>
      <p className="text-slate-600 dark:text-slate-400 mb-8 max-w-2xl leading-relaxed">
        Step-by-step articles on estimating gypsum board, hanging walls and ceilings, finishing seams, and
        repairing holes — written for DIY homeowners and basement renovators. Pair each guide with our free
        sheet-count calculators.
      </p>

      {CATEGORIES.map((category) => {
        const items = GUIDES.filter((g) => g.category === category);
        if (items.length === 0) return null;
        return (
          <section key={category} className="mb-12" aria-labelledby={`cat-${category}`}>
            <h2 id={`cat-${category}`} className="text-lg font-semibold mb-4">
              {GUIDE_CATEGORY_LABEL[category]}
            </h2>
            <div className="grid sm:grid-cols-2 gap-4">
              {items.map((guide) => (
                <GuideCard key={guide.slug} guide={guide} />
              ))}
            </div>
          </section>
        );
      })}

      <ContentMonetizationSlot placement="content" guides={getFeaturedHomeGuides()} />
    </main>
  );
}

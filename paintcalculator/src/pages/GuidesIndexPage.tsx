import { usePageMeta } from '../hooks/usePageMeta';
import { GUIDES } from '../lib/guides/guides';
import { GUIDE_CATEGORY_LABEL, type GuideCategory } from '../lib/guides/types';
import { GuideCard } from '../components/GuideCard';
import ContentMonetizationSlot from '../components/ContentMonetizationSlot';
import { getFeaturedHomeGuides } from '../lib/landingHelpers';
import { Link } from 'react-router-dom';

const CATEGORIES: GuideCategory[] = ['prep', 'paint', 'wallpaper', 'stain', 'exterior'];

export default function GuidesIndexPage() {
  usePageMeta({
    title: 'Paint Guides — Primer, Wall Repair, Prep & How to Paint a Room',
    description:
      'Should you use primer? How to choose a roller and brush, tape vs drop cloths, repair walls, and paint a room step-by-step. Plus free gallon calculators.',
    path: '/guides',
  });

  return (
    <main id="main-content" className="max-w-5xl mx-auto px-4 sm:px-6 py-8 sm:py-12" role="main">
      <h1 className="text-2xl sm:text-3xl font-bold tracking-tight mb-2">Paint & project guides</h1>
      <p className="text-slate-600 dark:text-slate-400 mb-4 max-w-2xl">
        New to DIY? Start with roller nap, brush size, and tape vs drop cloths — then gallons and step-by-step painting.
      </p>
      <p className="mb-8 flex flex-wrap gap-2 text-sm">
        <Link
          to="/first-paint-job"
          className="inline-flex rounded-lg border border-blue-200 dark:border-blue-900 bg-blue-50 dark:bg-blue-950/30 px-3 py-1.5 font-medium text-blue-800 dark:text-blue-300"
        >
          First paint job checklist
        </Link>
        <Link
          to="/guides/how-to-choose-a-paint-roller"
          className="inline-flex rounded-lg border border-slate-200 dark:border-slate-700 px-3 py-1.5"
        >
          Roller
        </Link>
        <Link
          to="/guides/how-to-choose-a-paint-brush"
          className="inline-flex rounded-lg border border-slate-200 dark:border-slate-700 px-3 py-1.5"
        >
          Brush
        </Link>
        <Link
          to="/guides/painters-tape-vs-drop-cloths"
          className="inline-flex rounded-lg border border-slate-200 dark:border-slate-700 px-3 py-1.5"
        >
          Tape vs drop cloths
        </Link>
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

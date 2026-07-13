import { usePageMeta } from '../hooks/usePageMeta';
import { GUIDES } from '../lib/guides/guides';
import { GUIDE_CATEGORY_LABEL, type GuideCategory } from '../lib/guides/types';
import { GuideCard } from '../components/GuideCard';
import ContentMonetizationSlot from '../components/ContentMonetizationSlot';
import { getFeaturedHomeGuides } from '../lib/landingHelpers';

const CATEGORIES: GuideCategory[] = ['prep', 'planning', 'laminate', 'tile', 'carpet'];

export default function GuidesIndexPage() {
  usePageMeta({
    title: 'Flooring Guides — Prep, Underlay, Product Choices & How-To',
    description:
      'How to measure rooms, prep subfloors, choose underlay, pick laminate tile or carpet, and calculate waste and box counts. Free DIY guides with calculators.',
    path: '/guides',
  });

  return (
    <main id="main-content" className="max-w-5xl mx-auto px-4 sm:px-6 py-8 sm:py-12" role="main">
      <h1 className="text-2xl sm:text-3xl font-bold tracking-tight mb-2">Flooring project guides</h1>
      <p className="text-slate-600 dark:text-slate-400 mb-8 max-w-2xl">
        Prep checklists, underlay and pad choices, product comparisons, and step-by-step how-tos — paired with free box
        and square footage calculators on flooringboxcalculator.com.
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

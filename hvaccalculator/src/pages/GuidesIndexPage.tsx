import { usePageMeta } from '../hooks/usePageMeta';
import { GUIDES } from '../lib/guides/guides';
import { GUIDE_CATEGORY_LABEL, type GuideCategory } from '../lib/guides/types';
import { GuideCard } from '../components/GuideCard';
import ContentMonetizationSlot from '../components/ContentMonetizationSlot';
import { getFeaturedHomeGuides } from '../lib/landingHelpers';

const CATEGORIES: GuideCategory[] = ['sizing', 'mini_split', 'tiny_home', 'rv', 'cottage', 'diy'];

export default function GuidesIndexPage() {
  usePageMeta({
    title: 'HVAC & Mini-Split Guides — RV, Tiny Home, She-Shed & DIY Sizing',
    description:
      'BTU sizing basics, mini-split vs window AC, RV and tiny home ductless guides, she-shed cooling, cottage heat pumps, and DIY install planning.',
    path: '/guides',
  });

  return (
    <main id="main-content" className="max-w-5xl mx-auto px-4 sm:px-6 py-8 sm:py-12" role="main">
      <h1 className="text-2xl sm:text-3xl font-bold tracking-tight mb-2">HVAC & mini-split guides</h1>
      <p className="text-slate-600 dark:text-slate-400 mb-8 max-w-2xl">
        Planning articles for DIYers sizing ductless mini-splits — bedrooms, RVs, tiny homes, backyard studios, and
        seasonal cottages. Pair each guide with the free BTU calculator.
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

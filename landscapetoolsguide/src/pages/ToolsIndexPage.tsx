import { Link } from 'react-router-dom';
import { usePageMeta } from '../hooks/usePageMeta';
import { ToolCard } from '../components/ToolCard';
import ContentMonetizationSlot from '../components/ContentMonetizationSlot';
import { getGuideBySlug } from '../lib/guides/guides';
import { TOOLS, getToolsByCategory } from '../lib/tools/tools';
import { TOOL_CATEGORY_LABEL, type ToolCategory } from '../lib/tools/types';

const CATEGORY_ORDER: ToolCategory[] = [
  'all-in-one-fsm',
  'landscape-specific',
  'lawn-maintenance',
  'design-build',
];

const TOOLS_INDEX_GUIDE_SLUGS = [
  'how-to-choose-lawn-care-software',
  'solo-landscaper-software-checklist',
  'field-service-software-evaluation-checklist',
];

export default function ToolsIndexPage() {
  const featuredGuides = TOOLS_INDEX_GUIDE_SLUGS.map((slug) => getGuideBySlug(slug)).filter(
    (g): g is NonNullable<ReturnType<typeof getGuideBySlug>> => g != null
  );

  usePageMeta({
    title: 'Landscaping & Lawn Care Software Directory',
    description:
      'Browse Jobber, Housecall Pro, LMN, GorillaDesk, Service Autopilot, and more — compared for lawn care and landscape businesses.',
    path: '/tools',
  });

  return (
    <main id="main-content" className="max-w-5xl mx-auto px-4 sm:px-6 py-8 sm:py-12" role="main">
      <nav className="text-sm text-slate-500 dark:text-slate-400 mb-6">
        <Link to="/" className="hover:text-emerald-600 dark:hover:text-emerald-400">
          Home
        </Link>
        <span className="mx-2">/</span>
        <span className="text-slate-700 dark:text-slate-300">Tools</span>
      </nav>

      <h1 className="text-2xl sm:text-3xl font-bold tracking-tight mb-3">Software directory</h1>
      <p className="text-slate-600 dark:text-slate-400 mb-8 max-w-2xl leading-relaxed">
        {TOOLS.length} tools reviewed for landscaping and lawn care — click any listing for pricing, pros/cons, and
        outbound links.
      </p>

      {CATEGORY_ORDER.map((category) => {
        const tools = getToolsByCategory(category);
        if (tools.length === 0) return null;
        return (
          <section key={category} className="mb-10">
            <h2 className="text-lg font-semibold mb-4">{TOOL_CATEGORY_LABEL[category]}</h2>
            <div className="grid sm:grid-cols-2 gap-4">
              {tools.map((tool) => (
                <ToolCard key={tool.slug} tool={tool} />
              ))}
            </div>
          </section>
        );
      })}

      <ContentMonetizationSlot placement="content" guides={featuredGuides} className="mt-8" />
    </main>
  );
}

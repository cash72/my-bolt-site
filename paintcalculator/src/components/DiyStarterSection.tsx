import { Link } from 'react-router-dom';
import { DIY_STARTER_FACTS } from '../lib/diyStarterFacts';

export default function DiyStarterSection({
  headingId = 'diy-starter',
  hideHubLink = false,
}: {
  headingId?: string;
  hideHubLink?: boolean;
}) {
  return (
    <section className="mt-16 pt-10 border-t border-slate-200 dark:border-slate-800" aria-labelledby={headingId}>
      <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-3 mb-4">
        <div>
          <h2 id={headingId} className="text-xl font-semibold">
            New to DIY? Read this first
          </h2>
          <p className="text-sm text-slate-600 dark:text-slate-400 mt-1 max-w-2xl">
            Gallons first, then tools. Short answers you can use in the aisle — tap a card for the full how-to.
          </p>
        </div>
        {!hideHubLink && (
          <Link
            to="/first-paint-job"
            className="text-sm font-medium text-blue-600 dark:text-blue-400 hover:underline shrink-0"
          >
            First paint job hub →
          </Link>
        )}
      </div>

      <nav aria-label="Jump to DIY facts" className="mb-4 flex flex-wrap gap-2">
        {DIY_STARTER_FACTS.map((fact) => (
          <a
            key={fact.id}
            href={`#diy-${fact.id}`}
            className="inline-flex items-center rounded-full bg-slate-100 dark:bg-slate-800 px-3 py-1 text-xs font-medium text-slate-700 dark:text-slate-200 hover:bg-blue-50 dark:hover:bg-blue-950/40 hover:text-blue-800 dark:hover:text-blue-300"
          >
            {fact.title}
          </a>
        ))}
      </nav>

      <div className="grid sm:grid-cols-2 gap-4">
        {DIY_STARTER_FACTS.map((fact) => (
          <article
            key={fact.id}
            id={`diy-${fact.id}`}
            className="rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-4 sm:p-5 scroll-mt-24"
          >
            <h3 className="text-base font-semibold text-slate-900 dark:text-slate-100">{fact.title}</h3>
            <p className="mt-2 text-sm font-medium text-slate-800 dark:text-slate-200 leading-snug">{fact.doThis}</p>
            <ul className="mt-3 space-y-1.5 text-sm text-slate-600 dark:text-slate-400">
              {fact.bullets.map((bullet) => (
                <li key={bullet} className="pl-4 relative before:content-['·'] before:absolute before:left-0 before:text-blue-600">
                  {bullet}
                </li>
              ))}
            </ul>
            <Link
              to={fact.href}
              className="mt-3 inline-block text-sm font-medium text-blue-700 dark:text-blue-400 hover:underline"
            >
              {fact.linkLabel} →
            </Link>
          </article>
        ))}
      </div>
    </section>
  );
}

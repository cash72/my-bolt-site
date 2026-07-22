import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';

export type NextStepLink = { to: string; label: string; hint?: string };

interface SessionDeepenerProps {
  links: NextStepLink[];
}

export default function SessionDeepener({ links }: SessionDeepenerProps) {
  if (!links.length) return null;

  return (
    <div className="pt-3 border-t border-sky-200/60 dark:border-sky-900/40">
      <p className="text-xs font-medium text-slate-500 dark:text-slate-400 mb-2">Next steps</p>
      <ul className="space-y-1.5">
        {links.map((link) => (
          <li key={link.to}>
            <Link
              to={link.to}
              className="flex items-start gap-2 text-sm font-medium text-sky-700 dark:text-sky-400 hover:text-sky-600 dark:hover:text-sky-300 transition-colors"
            >
              <ChevronRight className="w-4 h-4 shrink-0 mt-0.5" aria-hidden="true" />
              <span>
                {link.label}
                {link.hint ? (
                  <span className="block text-xs font-normal text-slate-500 dark:text-slate-400">{link.hint}</span>
                ) : null}
              </span>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

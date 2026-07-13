import { Outlet, Link, NavLink } from 'react-router-dom';
import { Leaf, Moon, Sun } from 'lucide-react';
import { useDarkMode } from '../context/DarkModeContext';
import { TOOLS } from '../lib/tools/tools';
import { COMPARISONS } from '../lib/comparisons/comparisons';
import { GUIDES } from '../lib/guides/guides';
import { CONTACT_EMAIL, SITE_NAME } from '../lib/site';
import ScrollToTop from './ScrollToTop';
import AdSenseSiteScript from './AdSenseSiteScript';
import AdSlot from './AdSlot';

const navLinkClass = ({ isActive }: { isActive: boolean }) =>
  `text-sm transition-colors ${
    isActive
      ? 'text-emerald-600 dark:text-emerald-400 font-medium'
      : 'text-slate-500 dark:text-slate-400 hover:text-slate-700 dark:hover:text-slate-300'
  }`;

export default function Layout() {
  const { dark, toggle } = useDarkMode();

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100 transition-colors duration-300">
      <AdSenseSiteScript />
      <ScrollToTop />
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-emerald-600 focus:text-white focus:rounded-lg"
      >
        Skip to main content
      </a>

      <header
        className="border-b border-slate-200 dark:border-slate-800 bg-white/80 dark:bg-slate-900/80 backdrop-blur-md sticky top-0 z-50"
        role="banner"
      >
        <div className="max-w-5xl mx-auto px-4 sm:px-6 h-14 flex items-center justify-between gap-4">
          <Link to="/" className="flex items-center gap-2.5 shrink-0">
            <div className="w-8 h-8 rounded-lg bg-emerald-600 flex items-center justify-center">
              <Leaf className="w-5 h-5 text-white" aria-hidden="true" />
            </div>
            <span className="font-semibold text-base sm:text-lg tracking-tight leading-tight max-w-[11rem] sm:max-w-none">
              {SITE_NAME}
            </span>
          </Link>

          <nav className="hidden sm:flex items-center gap-5" aria-label="Site">
            <NavLink to="/tools" className={navLinkClass}>
              Tools
            </NavLink>
            <NavLink to="/compare" className={navLinkClass}>
              Compare
            </NavLink>
            <NavLink to="/guides" className={navLinkClass}>
              Guides
            </NavLink>
            <NavLink to="/about" className={navLinkClass}>
              About
            </NavLink>
          </nav>

          <button
            onClick={toggle}
            className="p-2 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
            aria-label="Toggle dark mode"
          >
            {dark ? (
              <Sun className="w-4 h-4" aria-hidden="true" />
            ) : (
              <Moon className="w-4 h-4" aria-hidden="true" />
            )}
          </button>
        </div>
      </header>

      <Outlet />

      <footer
        className="border-t border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900"
        role="contentinfo"
      >
        <div className="max-w-5xl mx-auto px-4 sm:px-6 py-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-6 text-sm">
            <div>
              <div className="flex items-center gap-2 mb-2 font-semibold text-slate-800 dark:text-slate-200">
                <Leaf className="w-4 h-4 text-emerald-600" aria-hidden="true" />
                {SITE_NAME}
              </div>
              <p className="text-slate-500 dark:text-slate-400 leading-relaxed">
                Independent comparisons of lawn care and landscaping business software — pricing, features, and
                affiliate links where available.
              </p>
            </div>
            <div>
              <p className="font-semibold text-slate-800 dark:text-slate-200 mb-2">Popular tools</p>
              <ul className="flex flex-col gap-2">
                {TOOLS.slice(0, 5).map((tool) => (
                  <li key={tool.slug}>
                    <Link
                      to={`/tools/${tool.slug}`}
                      className="text-slate-600 dark:text-slate-300 hover:text-emerald-600 dark:hover:text-emerald-400"
                    >
                      {tool.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <p className="font-semibold text-slate-800 dark:text-slate-200 mb-2">Comparisons</p>
              <ul className="flex flex-col gap-2">
                {COMPARISONS.map((c) => (
                  <li key={c.slug}>
                    <Link
                      to={`/compare/${c.slug}`}
                      className="text-slate-600 dark:text-slate-300 hover:text-emerald-600 dark:hover:text-emerald-400"
                    >
                      {c.title}
                    </Link>
                  </li>
                ))}
                <li>
                  <Link
                    to="/alternatives/jobber-alternatives-landscaping"
                    className="text-slate-600 dark:text-slate-300 hover:text-emerald-600 dark:hover:text-emerald-400"
                  >
                    Jobber alternatives
                  </Link>
                </li>
              </ul>
            </div>
            <div className="flex flex-col gap-2">
              {GUIDES.map((g) => (
                <Link
                  key={g.slug}
                  to={`/guides/${g.slug}`}
                  className="text-slate-600 dark:text-slate-300 hover:text-emerald-600 dark:hover:text-emerald-400"
                >
                  {g.title}
                </Link>
              ))}
              <Link
                to="/about"
                className="text-slate-600 dark:text-slate-300 hover:text-emerald-600 dark:hover:text-emerald-400"
              >
                About
              </Link>
              <Link
                to="/contact"
                className="text-slate-600 dark:text-slate-300 hover:text-emerald-600 dark:hover:text-emerald-400"
              >
                Contact
              </Link>
              <Link
                to="/privacy"
                className="text-slate-600 dark:text-slate-300 hover:text-emerald-600 dark:hover:text-emerald-400"
              >
                Privacy Policy
              </Link>
              <Link
                to="/disclaimer"
                className="text-slate-600 dark:text-slate-300 hover:text-emerald-600 dark:hover:text-emerald-400"
              >
                Disclaimer
              </Link>
            </div>
          </div>
          <AdSlot placement="footer" className="mb-6" />
          <div className="pt-6 border-t border-slate-100 dark:border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-3 text-sm text-slate-500 dark:text-slate-400">
            <p className="text-center sm:text-left">
              Independent reviews — we may earn commission on outbound links.{' '}
              <Link to="/disclaimer" className="text-emerald-600 dark:text-emerald-400 hover:underline">
                Read disclaimer
              </Link>
            </p>
            <a href={`mailto:${CONTACT_EMAIL}`} className="text-emerald-600 dark:text-emerald-400 hover:underline">
              {CONTACT_EMAIL}
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}

import { useState } from 'react';
import { Outlet, Link, NavLink } from 'react-router-dom';
import { Activity, Menu, Moon, Sun, X } from 'lucide-react';
import { useDarkMode } from '../context/DarkModeContext';
import { FEATURED_LANDING_LINKS } from '../lib/landingPages';
import { GUIDES } from '../lib/guides/guides';
import { CONTACT_EMAIL, SITE_NAME } from '../lib/site';
import ScrollToTop from './ScrollToTop';
import AdSenseSiteScript from './AdSenseSiteScript';
import AdSlot from './AdSlot';

const navLinkClass = ({ isActive }: { isActive: boolean }) =>
  `text-sm transition-colors ${
    isActive
      ? 'text-teal-600 dark:text-teal-400 font-medium'
      : 'text-slate-500 dark:text-slate-400 hover:text-slate-700 dark:hover:text-slate-300'
  }`;

export default function Layout() {
  const { dark, toggle } = useDarkMode();
  const [mobileNavOpen, setMobileNavOpen] = useState(false);

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100 transition-colors duration-300">
      <AdSenseSiteScript />
      <ScrollToTop />
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-teal-600 focus:text-white focus:rounded-lg"
      >
        Skip to main content
      </a>

      <header
        className="border-b border-slate-200 dark:border-slate-800 bg-white/80 dark:bg-slate-900/80 backdrop-blur-md sticky top-0 z-50"
        role="banner"
      >
        <div className="max-w-5xl mx-auto px-4 sm:px-6 h-14 flex items-center justify-between gap-4">
          <Link to="/" className="flex items-center gap-2.5 shrink-0">
            <div className="w-8 h-8 rounded-lg bg-teal-600 flex items-center justify-center">
              <Activity className="w-5 h-5 text-white" aria-hidden="true" />
            </div>
            <span className="font-semibold text-base sm:text-lg tracking-tight leading-tight max-w-[11rem] sm:max-w-none">
              {SITE_NAME}
            </span>
          </Link>

          <nav className="hidden sm:flex items-center gap-5" aria-label="Site">
            <NavLink to="/" end className={navLinkClass}>
              Calculator
            </NavLink>
            <NavLink to="/recipes" className={navLinkClass}>
              Recipes
            </NavLink>
            <NavLink to="/guides" className={navLinkClass}>
              Guides
            </NavLink>
            <NavLink to="/about" className={navLinkClass}>
              About
            </NavLink>
            <NavLink to="/contact" className={navLinkClass}>
              Contact
            </NavLink>
          </nav>

          <div className="flex items-center gap-1">
          <button
            type="button"
            className="sm:hidden p-2 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
            aria-label={mobileNavOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={mobileNavOpen}
            onClick={() => setMobileNavOpen((open) => !open)}
          >
            {mobileNavOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
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
        </div>

        {mobileNavOpen && (
          <nav
            className="sm:hidden border-t border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 px-4 py-3 flex flex-col gap-2"
            aria-label="Mobile"
          >
            <NavLink to="/" end className={navLinkClass} onClick={() => setMobileNavOpen(false)}>
              Calculator
            </NavLink>
            <NavLink to="/recipes" className={navLinkClass} onClick={() => setMobileNavOpen(false)}>
              Recipes
            </NavLink>
            <NavLink to="/guides" className={navLinkClass} onClick={() => setMobileNavOpen(false)}>
              Guides
            </NavLink>
            <NavLink to="/about" className={navLinkClass} onClick={() => setMobileNavOpen(false)}>
              About
            </NavLink>
            <NavLink to="/contact" className={navLinkClass} onClick={() => setMobileNavOpen(false)}>
              Contact
            </NavLink>
          </nav>
        )}
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
                <Activity className="w-4 h-4 text-teal-600" aria-hidden="true" />
                {SITE_NAME}
              </div>
              <p className="text-slate-500 dark:text-slate-400 leading-relaxed">
                Free calculators, fasting clock, recipes, and guides for keto, insulin resistance, and metabolic
                health. Not medical advice.
              </p>
            </div>
            <div>
              <p className="font-semibold text-slate-800 dark:text-slate-200 mb-2">Calculators</p>
              <ul className="flex flex-col gap-2 max-h-48 overflow-y-auto">
                {FEATURED_LANDING_LINKS.map((page) => (
                  <li key={page.slug}>
                    <Link
                      to={page.path}
                      className="text-slate-600 dark:text-slate-300 hover:text-teal-600 dark:hover:text-teal-400"
                    >
                      {page.breadcrumbLabel}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <p className="font-semibold text-slate-800 dark:text-slate-200 mb-2">Guides</p>
              <ul className="flex flex-col gap-2 max-h-48 overflow-y-auto">
                {GUIDES.slice(0, 6).map((guide) => (
                  <li key={guide.slug}>
                    <Link
                      to={`/guides/${guide.slug}`}
                      className="text-slate-600 dark:text-slate-300 hover:text-teal-600 dark:hover:text-teal-400"
                    >
                      {guide.title}
                    </Link>
                  </li>
                ))}
                <li>
                  <Link
                    to="/guides"
                    className="text-teal-600 dark:text-teal-400 hover:underline text-xs font-medium"
                  >
                    View all guides →
                  </Link>
                </li>
              </ul>
            </div>
            <div className="flex flex-col gap-2">
              <Link
                to="/recipes"
                className="text-slate-600 dark:text-slate-300 hover:text-teal-600 dark:hover:text-teal-400"
              >
                Recipes
              </Link>
              <Link
                to="/about"
                className="text-slate-600 dark:text-slate-300 hover:text-teal-600 dark:hover:text-teal-400"
              >
                About
              </Link>
              <Link
                to="/contact"
                className="text-slate-600 dark:text-slate-300 hover:text-teal-600 dark:hover:text-teal-400"
              >
                Contact
              </Link>
              <Link
                to="/privacy"
                className="text-slate-600 dark:text-slate-300 hover:text-teal-600 dark:hover:text-teal-400"
              >
                Privacy Policy
              </Link>
              <Link
                to="/disclaimer"
                className="text-slate-600 dark:text-slate-300 hover:text-teal-600 dark:hover:text-teal-400"
              >
                Disclaimer
              </Link>
            </div>
          </div>
          <AdSlot placement="footer" className="mb-6" />
          <div className="pt-6 border-t border-slate-100 dark:border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-3 text-sm text-slate-500 dark:text-slate-400">
            <p className="text-center sm:text-left">
              Estimates only — not medical advice.{' '}
              <Link to="/disclaimer" className="text-teal-600 dark:text-teal-400 hover:underline">
                Read disclaimer
              </Link>
            </p>
            <a href={`mailto:${CONTACT_EMAIL}`} className="text-teal-600 dark:text-teal-400 hover:underline">
              {CONTACT_EMAIL}
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}

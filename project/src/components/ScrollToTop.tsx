import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

/** Reset scroll position on client-side route changes */
export default function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

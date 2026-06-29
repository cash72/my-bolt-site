import { useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import { trackPageView } from '../lib/analytics';

export function useAnalyticsPageView() {
  const { pathname, search } = useLocation();
  const lastTracked = useRef<string | null>(null);

  useEffect(() => {
    const path = `${pathname}${search}`;
    if (lastTracked.current === path) return;
    lastTracked.current = path;
    trackPageView(path);
  }, [pathname, search]);
}

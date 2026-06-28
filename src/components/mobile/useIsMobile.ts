import { useEffect, useState } from 'react';

export function useIsMobile(breakpoint = 768) {
  const query = `(max-width: ${breakpoint - 1}px)`;

  const [isMobile, setIsMobile] = useState(() => {
    if (typeof window === 'undefined' || typeof window.matchMedia === 'undefined') return false;
    return window.matchMedia(query).matches;
  });

  useEffect(() => {
    if (typeof window === 'undefined' || typeof window.matchMedia === 'undefined') return;

    const mql = window.matchMedia(query);

    const handleChange = (e: MediaQueryListEvent) => setIsMobile(e.matches);

    // Add listener in a way compatible with older browsers
    const logMatches = (matches: boolean) => {
      try {
        // use debug to avoid noisy logs in production consoles
        // eslint-disable-next-line no-console
        console.debug(`[useIsMobile] breakpoint=${breakpoint} isMobile=${matches}`);
      } catch (e) {
        /* ignore */
      }
    };

    logMatches(mql.matches);

    const wrappedHandleChange = (e: MediaQueryListEvent) => {
      logMatches(e.matches);
      handleChange(e);
    };

    if (typeof mql.addEventListener === 'function') {
      mql.addEventListener('change', wrappedHandleChange as EventListener);
    } else if (typeof (mql as any).addListener === 'function') {
      (mql as any).addListener(wrappedHandleChange);
    }

    // Ensure state is in sync
    setIsMobile(mql.matches);

    return () => {
      if (typeof mql.removeEventListener === 'function') {
        mql.removeEventListener('change', wrappedHandleChange as EventListener);
      } else if (typeof (mql as any).removeListener === 'function') {
        (mql as any).removeListener(wrappedHandleChange);
      }
    };
  }, [breakpoint]);

  return isMobile;
}

import { Link, type LinkProps } from 'react-router-dom';
import { forwardRef, useCallback } from 'react';

// Map of route paths to their lazy import functions
const routeImports: Record<string, () => Promise<unknown>> = {
  '/': () => import('@/pages/Index'),
  '/guides': () => import('@/pages/Guides'),
  '/tools': () => import('@/pages/Tools'),
  '/glossary': () => import('@/pages/Glossary'),
  '/quick-fixes': () => import('@/pages/QuickFixes'),
  '/device-hub': () => import('@/pages/DeviceHub'),
  '/how-it-works': () => import('@/pages/HowItWorks'),
  '/pricing': () => import('@/pages/Pricing'),
  '/about': () => import('@/pages/About'),
  '/blog': () => import('@/pages/Blog'),
  '/forum': () => import('@/pages/forum/Index'),
  '/search': () => import('@/pages/SearchResults'),
};

export const PreloadLink = forwardRef<HTMLAnchorElement, LinkProps>(
  function PreloadLink({ to, onMouseEnter, onFocus, ...props }, ref) {
    const path = typeof to === 'string' ? to : to.pathname ?? '';

    const preload = useCallback(() => {
      // Try exact match first, then prefix match for dynamic routes
      const importFn = routeImports[path] ??
        Object.entries(routeImports).find(([key]) => path.startsWith(key + '/'))?.[1];
      if (importFn) importFn();
    }, [path]);

    return (
      <Link
        ref={ref}
        to={to}
        onMouseEnter={(e) => { preload(); onMouseEnter?.(e); }}
        onFocus={(e) => { preload(); onFocus?.(e); }}
        {...props}
      />
    );
  }
);

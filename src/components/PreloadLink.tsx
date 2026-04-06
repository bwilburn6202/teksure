/**
 * PreloadLink — wraps React Router <Link> to prefetch the next page's
 * JavaScript chunk on hover or when it enters the viewport.
 *
 * Usage: identical to <Link>, just swap the import.
 *   <PreloadLink to="/guides/wifi-setup">WiFi Guide</PreloadLink>
 */

import { Link, type LinkProps } from 'react-router-dom';
import { useEffect, useRef, useState } from 'react';

const cache = new Set<string>();

/** Prefetch all <link rel="modulepreload"> tags that Vite injects for a route */
async function preloadRoute(to: string) {
  if (cache.has(to)) return;
  cache.add(to);

  // Vite injects <link rel="modulepreload"> for lazy route chunks.
  // We find them by matching the href against the route path.
  const links = document.querySelectorAll<HTMLLinkElement>('link[rel="modulepreload"]');
  const promises: Promise<unknown>[] = [];

  links.forEach(link => {
    if (link.href.includes(to.replace(/\//g, '')) || link.href.includes(to.slice(1))) {
      if (!link.dataset.preloaded) {
        link.dataset.preloaded = 'true';
        promises.push(
          fetch(link.href, { priority: 'low' as RequestPriority, mode: 'no-cors' }).then(() => {}),
        );
      }
    }
  });

  await Promise.all(promises);
}

/**
 * Alternative strategy: dynamically import the route module directly.
 * This works when routes use `React.lazy(() => import('./pages/...'))`.
 * We map common paths to their lazy import functions.
 */
const routePreloaders: Record<string, () => Promise<unknown>> = {
  '/guides': () => import('@/pages/Guides'),
  '/tools': () => import('@/pages/Tools'),
  '/quick-fixes': () => import('@/pages/QuickFixes'),
  '/tips': () => import('@/pages/Tips'),
  '/glossary': () => import('@/pages/Glossary'),
  '/safety/scam-alerts': () => import('@/pages/ScamAlerts'),
  '/get-help': () => import('@/pages/GetHelp'),
  '/book': () => import('@/pages/Book'),
  '/how-it-works': () => import('@/pages/HowItWorks'),
  '/about': () => import('@/pages/About'),
  '/login': () => import('@/pages/Login'),
  '/signup': () => import('@/pages/Signup'),
  '/favorites': () => import('@/pages/Favorites'),
  '/notifications': () => import('@/pages/Notifications'),
  '/my-path': () => import('@/pages/MyPath'),
  '/forum': () => import('@/pages/forum/Index'),
  '/videos': () => import('@/pages/Videos'),
  '/articles': () => import('@/pages/Articles'),
  '/blog': () => import('@/pages/Blog'),
  '/sources': () => import('@/pages/Sources'),
};

async function preloadByPath(to: string) {
  if (cache.has(to)) return;
  cache.add(to);

  // Check direct route preloader map
  const path = to.split('?')[0].split('#')[0];
  const loader = routePreloaders[path];
  if (loader) {
    try {
      await loader();
    } catch {
      /* route may not exist — silently ignore */
    }
    return;
  }

  // Guide detail pages — preload the GuideDetail component
  if (path.startsWith('/guides/')) {
    try {
      await import('@/pages/GuideDetail');
    } catch { /* already loaded */ }
    return;
  }

  // Tool detail pages
  if (path.startsWith('/tools/')) {
    try {
      await import('@/pages/Tools');
    } catch { /* already loaded */ }
    return;
  }

  // Fallback: try to find modulepreload links
  await preloadRoute(path);
}

interface PreloadLinkProps extends LinkProps {
  /** Delay in ms before prefetching (default: 80) */
  delay?: number;
  /** Also prefetch when the link enters the viewport (default: false) */
  viewport?: boolean;
}

export function PreloadLink({ to, delay = 80, viewport = false, children, ...rest }: PreloadLinkProps) {
  const ref = useRef<HTMLAnchorElement>(null);
  const [prefetched, setPrefetched] = useState(false);
  const timeoutRef = useRef<ReturnType<typeof setTimeout>>();

  const triggerPrefetch = () => {
    if (prefetched) return;
    setPrefetched(true);
    void preloadByPath(typeof to === 'string' ? to : to.pathname || '');
  };

  // Hover prefetch
  const handleMouseEnter = () => {
    timeoutRef.current = setTimeout(triggerPrefetch, delay);
  };

  const handleMouseLeave = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
      timeoutRef.current = undefined;
    }
  };

  // Focus prefetch (keyboard navigation)
  const handleFocus = triggerPrefetch;

  // Viewport prefetch using IntersectionObserver
  useEffect(() => {
    if (!viewport || !ref.current) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          triggerPrefetch();
          observer.disconnect();
        }
      },
      { rootMargin: '200px' },
    );
    observer.observe(ref.current);
    return () => observer.disconnect();
  }, [to, viewport]); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <Link
      ref={ref}
      to={to}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onFocus={handleFocus}
      onBlur={handleMouseLeave}
      {...rest}
    >
      {children}
    </Link>
  );
}

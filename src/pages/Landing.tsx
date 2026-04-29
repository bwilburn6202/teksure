import { useState, useEffect, type FormEvent } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ArrowUp } from 'lucide-react';
import { Navbar } from '@/components/layout/Navbar';
import { SEOHead } from '@/components/SEOHead';

/**
 * Homepage — fixed centered hero on the global mesh wallpaper.
 *
 * The page locks document scroll while mounted so the hero (logo, search,
 * chips, trust line) is always centered in the viewport without anything
 * pushing the layout taller than the screen. The MeshGradientBackground
 * mounted in AppShell shines through unchanged.
 */
export default function Landing() {
  const [query, setQuery] = useState('');
  const navigate = useNavigate();

  // Lock body scroll while this page is mounted so the centered hero
  // is the entire visible viewport — no scrollbar, no overflow.
  useEffect(() => {
    const prevHtml = document.documentElement.style.overflow;
    const prevBody = document.body.style.overflow;
    document.documentElement.style.overflow = 'hidden';
    document.body.style.overflow = 'hidden';
    return () => {
      document.documentElement.style.overflow = prevHtml;
      document.body.style.overflow = prevBody;
    };
  }, []);

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    const q = query.trim();
    if (!q) return;
    navigate(`/search?q=${encodeURIComponent(q)}`);
  };

  const chips = [
    { label: 'Get real human help', to: '/get-help' },
    { label: 'Find the right guide', to: '/guides' },
    { label: 'Ask TekBrain',        to: '/tekbrain' },
    { label: 'Browse tools',        to: '/tools' },
    { label: 'More',                to: '/site-index' },
  ];

  return (
    <>
      <SEOHead
        title="TekSure — Free Tech Help for Beginners & Seniors"
        description="Free step-by-step tech guides, quick fixes, and verified tech support for seniors and beginners. No jargon — clear answers."
        path="/"
      />
      {/* Navbar with noSpacer — main fills full viewport instead. */}
      <Navbar noSpacer />

      <main
        id="main-content"
        tabIndex={-1}
        className="fixed inset-0 z-0 w-full h-[100dvh]
                   flex flex-col items-center justify-center
                   px-4 pt-[80px] sm:pt-[88px]
                   overflow-hidden outline-none"
      >
        <div className="w-full max-w-3xl flex flex-col items-center">
          {/* Logo — large, horizontal */}
          <div className="mb-6 sm:mb-10">
            <img
              src="/teksure-logo.svg"
              alt="TekSure"
              width={552}
              height={120}
              fetchPriority="high"
              className="h-16 sm:h-20 md:h-24 w-auto block dark:hidden"
            />
            <img
              src="/teksure-logo-white.svg"
              alt=""
              aria-hidden="true"
              width={552}
              height={120}
              className="h-16 sm:h-20 md:h-24 w-auto hidden dark:block"
            />
          </div>

          {/* Big rounded search input */}
          <form onSubmit={onSubmit} role="search" className="w-full mb-5">
            <label htmlFor="landing-search" className="sr-only">
              What do you need help with?
            </label>
            <div className="relative">
              <input
                id="landing-search"
                type="search"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="What do you need help with?"
                autoComplete="off"
                className="w-full h-16 pl-7 pr-16 rounded-full text-base sm:text-lg
                           bg-white/65 dark:bg-white/[0.06]
                           supports-[backdrop-filter]:bg-white/45
                           supports-[backdrop-filter]:dark:bg-white/[0.04]
                           backdrop-blur-xl backdrop-saturate-150
                           border border-white/70 dark:border-white/15
                           shadow-[0_10px_40px_-12px_rgba(26,26,26,0.18),0_2px_6px_rgba(26,26,26,0.04)]
                           text-foreground placeholder:text-muted-foreground/80
                           focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-transparent"
              />
              <button
                type="submit"
                aria-label="Search"
                className="absolute right-2 top-1/2 -translate-y-1/2 inline-flex items-center justify-center
                           h-12 w-12 rounded-full
                           bg-primary text-primary-foreground
                           hover:bg-primary/90 hover:-translate-y-[calc(50%+1px)]
                           transition-[transform,background-color] duration-150
                           motion-reduce:hover:transform-none
                           shadow-[0_4px_14px_rgba(42,95,204,0.35)]
                           focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-transparent"
              >
                <ArrowUp className="h-5 w-5" aria-hidden="true" />
              </button>
            </div>
          </form>

          {/* Action chips */}
          <nav
            aria-label="Quick actions"
            className="flex flex-wrap items-center justify-center gap-2.5 mb-8"
          >
            {chips.map((c) => (
              <Link
                key={c.to}
                to={c.to}
                className="inline-flex items-center h-11 px-5 rounded-full text-sm sm:text-[15px] font-semibold
                           bg-white/55 dark:bg-white/[0.06]
                           supports-[backdrop-filter]:bg-white/35
                           supports-[backdrop-filter]:dark:bg-white/[0.04]
                           backdrop-blur-md
                           border border-white/70 dark:border-white/15
                           text-foreground/90
                           hover:bg-white/90 dark:hover:bg-white/[0.10] hover:border-primary/40 hover:text-primary
                           transition-colors
                           focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-transparent"
              >
                {c.label}
              </Link>
            ))}
          </nav>

          {/* Trust line */}
          <p className="text-sm sm:text-[15px] text-muted-foreground text-center">
            <span className="font-bold text-foreground">2,500+</span>
            <span className="ml-1.5">free guides</span>
            <span className="mx-2 opacity-50" aria-hidden="true">·</span>
            Real humans
            <span className="mx-2 opacity-50" aria-hidden="true">·</span>
            Plain English
          </p>
        </div>
      </main>
    </>
  );
}

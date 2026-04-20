import { useState, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { ArrowUp, Sparkles } from 'lucide-react';
import { SEOHead } from '@/components/SEOHead';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { TierPicker } from '@/components/TierPicker';
import { JobsDoors } from '@/components/JobsDoors';
import { guides } from '@/data/guides';
import { useTier, TIER_META } from '@/contexts/TierContext';

/**
 * TekSure homepage — welcome-first, light by default, segmented by tier.
 *
 * Replaces the former dark-starfield landing. The new page leads with three
 * jobs-to-be-done doors (learn / fix / verify), asks the visitor to pick
 * their experience tier, and only then exposes an open-ended Ask TekSure
 * input. For returning users whose tier is already remembered, we jump
 * straight to a personalized "Welcome back" panel with their next lesson.
 *
 * Accessibility:
 *   - Single <h1> with the site mission; visual styling emphasizes clarity.
 *   - 44 × 44 minimum tap targets on every interactive element.
 *   - The optional Ask input has a visible label and submits on Enter.
 */
const Index = () => {
  const [prompt, setPrompt] = useState('');
  const navigate = useNavigate();
  const { tier, hasChosen } = useTier();

  // Force light on the homepage so first-time visitors land in a warm,
  // welcoming environment. Users who explicitly picked dark still win
  // because DarkModeToggle writes 'teksure-theme' to localStorage.
  useEffect(() => {
    if (typeof window === 'undefined') return;
    const stored = localStorage.getItem('teksure-theme');
    if (stored !== 'dark') {
      document.documentElement.classList.remove('dark');
    }
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const q = prompt.trim();
    if (!q) return;
    navigate(`/search?q=${encodeURIComponent(q)}`);
  };

  const guideCount = guides.length.toLocaleString();
  const tierMeta = tier ? TIER_META[tier] : null;

  return (
    <>
      <SEOHead
        title="TekSure — Free Tech Help for Beginners & Seniors"
        description="Free step-by-step tech help in plain English. Learn at your pace, get things fixed, and check if a link, call, or email is safe."
        path="/"
        jsonLd={[
          { '@context': 'https://schema.org', '@type': 'Organization', '@id': 'https://teksure.com/#organization', name: 'TekSure', url: 'https://teksure.com', logo: 'https://teksure.com/og-image.png', description: 'American tech support company offering free step-by-step guides for seniors and beginners.', contactPoint: { '@type': 'ContactPoint', contactType: 'customer support', email: 'hello@teksure.com', availableLanguage: 'English' } },
          { '@context': 'https://schema.org', '@type': 'WebSite', '@id': 'https://teksure.com/#website', url: 'https://teksure.com', name: 'TekSure', description: 'American tech support — free guides, tools, and real humans for beginners and seniors.', publisher: { '@id': 'https://teksure.com/#organization' }, potentialAction: { '@type': 'SearchAction', target: { '@type': 'EntryPoint', urlTemplate: 'https://teksure.com/search?q={search_term_string}' }, 'query-input': 'required name=search_term_string' } },
        ]}
      />

      <Navbar />

      <main id="main-content" tabIndex={-1} className="min-h-screen bg-background pb-32 outline-none lg:pb-16">
        {/* Hero welcome */}
        <section className="mx-auto max-w-6xl px-4 pt-10 text-center sm:pt-14 md:pt-20">
          <p className="mb-4 inline-flex items-center gap-2 rounded-full border bg-muted/40 px-4 py-1.5 text-sm font-medium text-muted-foreground">
            <Sparkles className="h-4 w-4 text-primary" aria-hidden="true" />
            Free forever. No jargon. Real humans when you need them.
          </p>
          <h1 className="mx-auto mb-5 max-w-3xl text-4xl font-bold leading-tight tracking-tight text-foreground sm:text-5xl md:text-6xl">
            Tech help that speaks<br className="hidden sm:block" /> your language.
          </h1>
          <p className="mx-auto max-w-2xl text-lg text-muted-foreground sm:text-xl">
            {guideCount}+ free guides, {`68`}+ interactive tools, and friendly answers to any tech question — written for humans, not engineers.
          </p>
        </section>

        {/* Returning-visitor welcome-back (only if tier picked) */}
        {hasChosen && tierMeta && (
          <section className="mx-auto mt-10 max-w-4xl px-4">
            <div className="rounded-2xl border-2 border-primary/30 bg-primary/5 p-6 sm:p-7">
              <div className="flex flex-wrap items-start justify-between gap-4">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-widest text-primary">Welcome back</p>
                  <h2 className="mt-1 text-2xl font-semibold text-foreground">
                    {tierMeta.emoji} Picking up where you left off
                  </h2>
                  <p className="mt-1 text-base text-muted-foreground">
                    Your path: <strong className="text-foreground">{tierMeta.label}</strong> — {tierMeta.short}
                  </p>
                </div>
                <div className="flex flex-wrap gap-2">
                  <Link
                    to="/my-path"
                    className="inline-flex min-h-[44px] items-center rounded-xl bg-primary px-5 text-sm font-semibold text-primary-foreground shadow-sm hover:brightness-110"
                  >
                    Open my path →
                  </Link>
                  <Link
                    to="/learn"
                    className="inline-flex min-h-[44px] items-center rounded-xl border bg-background px-5 text-sm font-semibold text-foreground hover:bg-muted/60"
                  >
                    Browse lessons
                  </Link>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* Jobs-to-be-done doors */}
        <section className="mx-auto mt-12 max-w-6xl px-4 sm:mt-16">
          <h2 className="mb-5 text-center text-sm font-semibold uppercase tracking-widest text-muted-foreground">
            What brings you here today?
          </h2>
          <JobsDoors />
        </section>

        {/* Tier picker (hide once chosen) */}
        {!hasChosen && (
          <section className="mx-auto mt-14 max-w-6xl px-4 sm:mt-20">
            <div className="mx-auto mb-6 max-w-2xl text-center">
              <h2 className="mb-2 text-2xl font-semibold text-foreground sm:text-3xl">
                How comfortable are you with tech?
              </h2>
              <p className="text-base text-muted-foreground">
                No right or wrong answer. We use this to recommend the right guides — you can change it anytime.
              </p>
            </div>
            <TierPicker />
            <p className="mt-3 text-center text-xs text-muted-foreground">
              You can skip this and browse freely — everything works either way.
            </p>
          </section>
        )}

        {/* Ask input */}
        <section className="mx-auto mt-14 max-w-3xl px-4 sm:mt-20">
          <div className="mb-4 text-center">
            <h2 className="mb-1 text-2xl font-semibold text-foreground sm:text-3xl">
              Or ask in your own words
            </h2>
            <p className="text-base text-muted-foreground">
              Type what's on your mind. We'll find the right guide.
            </p>
          </div>
          <form onSubmit={handleSubmit} className="relative">
            <label htmlFor="landing-prompt" className="sr-only">
              What do you need help with?
            </label>
            <textarea
              id="landing-prompt"
              rows={1}
              placeholder="e.g. My printer won't connect to Wi-Fi"
              value={prompt}
              onChange={(e) => {
                setPrompt(e.target.value);
                const t = e.currentTarget;
                t.style.height = 'auto';
                t.style.height = Math.min(t.scrollHeight, 160) + 'px';
              }}
              onKeyDown={(e) => {
                if (e.key === 'Enter' && !e.shiftKey) {
                  e.preventDefault();
                  handleSubmit(e as unknown as React.FormEvent);
                }
              }}
              className="block w-full resize-none rounded-2xl border-2 bg-background p-5 pr-16 text-base text-foreground shadow-sm outline-none transition-colors placeholder:text-muted-foreground focus:border-primary focus:ring-2 focus:ring-primary/20"
              style={{ minHeight: 64 }}
            />
            <button
              type="submit"
              aria-label="Search TekSure"
              disabled={!prompt.trim()}
              className="absolute bottom-3 right-3 flex h-11 w-11 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-sm transition-opacity hover:brightness-110 disabled:opacity-40"
            >
              <ArrowUp className="h-5 w-5" aria-hidden="true" />
            </button>
          </form>

          {/* Quick suggestion chips */}
          <div className="mt-5 flex flex-wrap justify-center gap-2">
            {[
              { label: 'Find the right guide', to: '/find-a-guide' },
              { label: 'Ask TekBot', to: '/brain' },
              { label: 'Browse tools', to: '/tools' },
              { label: 'Get real human help', to: '/get-help' },
            ].map((s) => (
              <button
                key={s.to}
                type="button"
                onClick={() => navigate(s.to)}
                className="inline-flex min-h-[40px] items-center rounded-full border bg-background px-4 text-sm font-medium text-foreground hover:bg-muted/60"
              >
                {s.label}
              </button>
            ))}
          </div>
        </section>

        {/* Stat bar */}
        <section className="mx-auto mt-16 max-w-6xl px-4 pb-4 text-center">
          <p className="text-sm text-muted-foreground">
            <strong className="text-foreground">{guideCount}+</strong> free guides
            <span className="mx-2 opacity-50">·</span>
            Real humans
            <span className="mx-2 opacity-50">·</span>
            Plain English
            <span className="mx-2 opacity-50">·</span>
            Works on any device
          </p>
        </section>
      </main>

      <Footer />
    </>
  );
};

export default Index;

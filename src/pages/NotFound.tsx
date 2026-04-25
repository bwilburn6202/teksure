import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useEffect, useState, type FormEvent } from 'react';
import { SEOHead } from '@/components/SEOHead';
import {
  Compass,
  Search,
  BookOpen,
  Wrench,
  Sparkles,
  HeartHandshake,
  MapPin,
  Flag,
  ArrowRight,
} from 'lucide-react';

type Tone = 'navy' | 'amber';

const DESTINATIONS: Array<{
  icon: typeof BookOpen;
  label: string;
  to: string;
  desc: string;
  tone: Tone;
}> = [
  { icon: BookOpen,       label: 'Browse Guides', to: '/guides',   desc: 'Step-by-step help for any device',             tone: 'navy'  },
  { icon: Wrench,         label: 'Explore Tools', to: '/tools',    desc: 'Handy helpers — wizards, checks & calculators', tone: 'amber' },
  { icon: Sparkles,       label: 'Ask TekBrain',  to: '/tekbrain', desc: 'Chat with our friendly tech assistant',         tone: 'navy'  },
  { icon: HeartHandshake, label: 'Book Help',     to: '/get-help', desc: 'Connect with a real, patient technician',       tone: 'amber' },
];

const POPULAR_PAGES: Array<{ label: string; to: string }> = [
  { label: 'How TekSure works',   to: '/how-it-works'  },
  { label: 'Scam Defense Center', to: '/scam-defense'  },
  { label: 'Daily tech tips',     to: '/tips'          },
  { label: 'Tech glossary',       to: '/glossary'      },
  { label: 'Quick fixes',         to: '/quick-fixes'   },
  { label: 'Find a guide',        to: '/find-a-guide'  },
  { label: 'Free resources',      to: '/free-resources'},
  { label: 'Emergency help',      to: '/emergency-help'},
];

const NotFound = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [query, setQuery] = useState('');

  useEffect(() => {
    console.error('404: User attempted to access non-existent route:', location.pathname);
  }, [location.pathname]);

  const handleSearch = (e: FormEvent) => {
    e.preventDefault();
    const q = query.trim();
    if (q) navigate(`/search?q=${encodeURIComponent(q)}`);
  };

  const referrer = typeof document !== 'undefined' ? (document.referrer || '(direct or unknown)') : '(unknown)';
  const reportBody =
    `Hi TekSure team,\n\n` +
    `I landed on a page that doesn't exist.\n\n` +
    `Missing URL: ${location.pathname}${location.search}\n` +
    `Where I came from: ${referrer}\n\n` +
    `What I was trying to do:\n`;
  const reportMailto = `mailto:hello@teksure.com?subject=${encodeURIComponent('Broken link on TekSure')}&body=${encodeURIComponent(reportBody)}`;

  return (
    <>
      <SEOHead
        title="Page not found — TekSure"
        description="We couldn't find that page — but we'll help you find what you need. Browse guides, tools, or chat with TekBrain."
        path="/404"
        type="error"
        noindex
      />
      <main
        id="main-content"
        className="relative overflow-hidden bg-background px-4 py-12 md:py-20 min-h-[80vh] text-foreground"
      >
        {/* Soft ambient glow — decorative only */}
        <div
          className="pointer-events-none absolute inset-x-0 -top-24 h-96 opacity-40"
          aria-hidden="true"
          style={{ background: 'radial-gradient(900px 380px at 50% 0%, hsl(var(--primary)/0.08) 0%, transparent 70%)' }}
        />

        <div className="relative max-w-4xl mx-auto">

          {/* Compass illustration */}
          <div className="flex flex-col items-center mb-8" aria-hidden="true">
            <div className="relative w-40 h-40 md:w-48 md:h-48">
              <div className="absolute inset-0 rounded-full blur-2xl opacity-60 bg-amber-300/50" />
              <div className="absolute inset-2 rounded-full flex items-center justify-center shadow-xl bg-gradient-to-br from-amber-400 to-amber-600">
                <Compass className="h-20 w-20 md:h-24 md:w-24 text-white" strokeWidth={1.5} />
              </div>
              {/* Floating navy pin */}
              <div className="absolute -top-2 -right-2 w-11 h-11 rounded-full bg-card shadow-md flex items-center justify-center border-2 border-primary">
                <MapPin className="h-5 w-5 text-primary" strokeWidth={2.5} />
              </div>
              {/* Floating sparkle */}
              <div className="absolute -bottom-1 -left-3 w-9 h-9 rounded-full bg-card shadow-md flex items-center justify-center">
                <Sparkles className="h-4 w-4 text-amber-500" strokeWidth={2.5} />
              </div>
            </div>
          </div>

          {/* Headline */}
          <div className="text-center mb-10">
            <p className="text-xs md:text-sm font-bold uppercase tracking-widest mb-3 text-primary">
              Let's get you back on track
            </p>
            <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-4 leading-tight text-foreground">
              Oops, this page took a wrong turn
            </h1>
            <p className="text-xl md:text-2xl leading-relaxed max-w-2xl mx-auto text-foreground/70">
              Don't worry, we'll help you find what you need.
            </p>
          </div>

          {/* Search bar */}
          <form
            onSubmit={handleSearch}
            className="max-w-2xl mx-auto mb-3"
            role="search"
            aria-label="Search TekSure"
          >
            <label htmlFor="not-found-search" className="sr-only">Search TekSure</label>
            <div className="flex items-center gap-2 bg-card rounded-2xl shadow-lg p-2 border-2 border-border focus-within:border-primary focus-within:shadow-xl transition-all">
              <Search className="h-6 w-6 ml-3 flex-shrink-0 text-muted-foreground" aria-hidden="true" />
              <input
                id="not-found-search"
                type="search"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search guides, tools, tips…"
                className="flex-1 bg-transparent outline-none text-lg py-3 min-w-0 placeholder:text-muted-foreground/60 text-foreground"
                autoComplete="off"
              />
              <button
                type="submit"
                className="px-6 py-3 rounded-xl font-bold text-primary-foreground text-base bg-primary shadow-md hover:bg-primary/90 active:bg-primary/80 transition-all whitespace-nowrap"
              >
                Search
              </button>
            </div>
          </form>
          <p className="text-center text-sm mb-14 text-muted-foreground">
            Try things like <em>"reset password"</em>, <em>"slow wifi"</em>, or <em>"phishing email"</em>.
          </p>

          {/* Destination cards */}
          <h2 className="text-2xl md:text-3xl font-extrabold text-center mb-6 text-foreground">
            Or head somewhere helpful
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-14">
            {DESTINATIONS.map(({ icon: Icon, label, to, desc, tone }) => {
              const isAmber = tone === 'amber';
              return (
                <Link
                  key={to}
                  to={to}
                  className="group relative flex items-start gap-4 rounded-2xl bg-card p-5 md:p-6 shadow-sm transition-all hover:-translate-y-1 hover:shadow-xl border-2 border-border hover:border-primary/40 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-primary/30"
                >
                  <div
                    className={`h-14 w-14 rounded-2xl flex items-center justify-center flex-shrink-0 shadow-sm ${
                      isAmber ? 'bg-gradient-to-br from-amber-400 to-amber-600' : 'bg-primary'
                    }`}
                  >
                    <Icon className="h-7 w-7 text-white" strokeWidth={2} aria-hidden="true" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-lg md:text-xl font-bold mb-1 text-foreground">{label}</p>
                    <p className="text-sm md:text-base leading-snug text-muted-foreground">{desc}</p>
                  </div>
                  <ArrowRight
                    className="h-5 w-5 flex-shrink-0 mt-1 text-primary transition-transform group-hover:translate-x-1"
                    aria-hidden="true"
                  />
                </Link>
              );
            })}
          </div>

          {/* Popular pages */}
          <section aria-labelledby="popular-heading" className="max-w-3xl mx-auto mb-14">
            <h2
              id="popular-heading"
              className="text-base md:text-lg font-bold mb-4 text-center text-foreground"
            >
              Popular pages
            </h2>
            <ul className="flex flex-wrap justify-center gap-2">
              {POPULAR_PAGES.map(({ label, to }) => (
                <li key={to}>
                  <Link
                    to={to}
                    className="inline-flex items-center px-4 py-2 rounded-full bg-card border-2 border-border font-semibold text-sm md:text-base text-foreground transition-all hover:border-primary/50 hover:text-primary hover:shadow-sm hover:-translate-y-0.5"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </section>

          {/* Report broken link */}
          <div className="text-center">
            <p className="text-sm md:text-base mb-3 text-muted-foreground">
              Got here by clicking a link somewhere? Let us know so we can fix it.
            </p>
            <a
              href={reportMailto}
              className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-card border-2 border-border font-semibold text-base text-primary transition-all hover:border-primary/50 hover:shadow-sm hover:-translate-y-0.5"
            >
              <Flag className="h-4 w-4" aria-hidden="true" />
              Report this broken link
            </a>
            {location.pathname && (
              <p className="mt-5 text-xs font-mono break-all max-w-md mx-auto text-muted-foreground/60">
                Missing: {location.pathname}{location.search}
              </p>
            )}
          </div>

        </div>
      </main>
    </>
  );
};

export default NotFound;

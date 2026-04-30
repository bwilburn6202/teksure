import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useEffect, useState, type FormEvent } from 'react';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
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

/**
 * 404 page — warm, reassuring, and actually helpful.
 *
 * Palette matches the Landing Page v2 homepage:
 *   cream  #FAF8F4 / #FFE9C7
 *   navy   #2A5FCC
 *   amber  #F9B56A → #E68F3A gradient
 *
 * Instead of shouting "ERROR 404", this page orients the user with a
 * compass illustration, a big search bar, four common destinations,
 * a row of popular pages, and a "report this" escape hatch so we can
 * hear about broken links from the people who hit them.
 */

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
    // Keep the console breadcrumb so devs can spot broken links in logs.
    console.error('404: User attempted to access non-existent route:', location.pathname);
  }, [location.pathname]);

  const handleSearch = (e: FormEvent) => {
    e.preventDefault();
    const q = query.trim();
    if (q) navigate(`/search?q=${encodeURIComponent(q)}`);
  };

  // Prefills an email with the missing URL + referrer so reports come in
  // with enough context to actually fix the broken link.
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
      <Navbar />
      <main id="main-content" className="min-h-[70vh] flex flex-col items-center justify-center px-4 py-16 bg-background">
        <div className="text-center max-w-lg mx-auto">

          {/* Friendly visual */}
          <div className="text-8xl mb-4 select-none"></div>
          <h1 className="text-3xl md:text-4xl font-bold tracking-tight mb-3 text-primary">
            Hmm, we can't find that page.
          </h1>
          <p className="text-muted-foreground mb-8 leading-relaxed max-w-sm mx-auto">
            The page you were looking for doesn't seem to exist. It may have moved,
            or the link might have a small typo in it. No worries — let's get you
            somewhere useful!
          </p>

          {/* Four common destinations */}
          <h2 className="text-2xl md:text-3xl font-extrabold text-center mb-6" style={{ color: '#1A1A1A' }}>
            Or head somewhere helpful
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-14">
            {DESTINATIONS.map(({ icon: Icon, label, to, desc, tone }) => {
              const isAmber = tone === 'amber';
              return (
                <Link
                  key={to}
                  to={to}
                  className="group relative flex items-start gap-4 rounded-2xl bg-white p-5 md:p-6 shadow-sm transition-all hover:-translate-y-1 hover:shadow-xl border-2 focus-visible:outline-none focus-visible:ring-4"
                  style={{ borderColor: '#E4DFD4' }}
                >
                  <div
                    className="h-14 w-14 rounded-2xl flex items-center justify-center flex-shrink-0 shadow-sm"
                    style={{
                      background: isAmber
                        ? 'linear-gradient(135deg, #F9B56A 0%, #E68F3A 100%)'
                        : '#2A5FCC',
                    }}
                  >
                    <Icon className="h-7 w-7 text-white" strokeWidth={2} aria-hidden="true" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-lg md:text-xl font-bold mb-1" style={{ color: '#1A1A1A' }}>
                      {label}
                    </p>
                    <p className="text-sm md:text-base leading-snug" style={{ color: '#6B6B6B' }}>
                      {desc}
                    </p>
                  </div>
                  <ArrowRight
                    className="h-5 w-5 flex-shrink-0 mt-1 transition-transform group-hover:translate-x-1"
                    style={{ color: '#2A5FCC' }}
                    aria-hidden="true"
                  />
                </Link>
              );
            })}
          </div>

          {/* Popular pages chip list */}
          <section aria-labelledby="popular-heading" className="max-w-3xl mx-auto mb-14">
            <h2
              id="popular-heading"
              className="text-base md:text-lg font-bold mb-4 text-center"
              style={{ color: '#1A1A1A' }}
            >
              Popular pages
            </h2>
            <ul className="flex flex-wrap justify-center gap-2">
              {POPULAR_PAGES.map(({ label, to }) => (
                <li key={to}>
                  <Link
                    to={to}
                    className="inline-flex items-center px-4 py-2 rounded-full bg-white border-2 font-semibold text-sm md:text-base transition-all hover:shadow-sm hover:-translate-y-0.5"
                    style={{ borderColor: '#E4DFD4', color: '#1A1A1A' }}
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </section>

          {/* Report this — escape hatch for broken links */}
          <div className="text-center">
            <p className="text-sm md:text-base mb-3" style={{ color: '#6B6B6B' }}>
              Got here by clicking a link somewhere? Let us know so we can fix it.
            </p>
            <a
              href={reportMailto}
              className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-white border-2 font-semibold text-base transition-all hover:shadow-sm hover:-translate-y-0.5"
              style={{ borderColor: '#E4DFD4', color: '#2A5FCC' }}
            >
              <Flag className="h-4 w-4" aria-hidden="true" />
              Report this broken link
            </a>
            {location.pathname && (
              <p
                className="mt-5 text-xs font-mono break-all max-w-md mx-auto"
                style={{ color: '#9B9B9B' }}
              >
                Missing: {location.pathname}{location.search}
              </p>
            )}
          </div>

        </div>
      </main>
      <Footer />
    </>
  );
};

export default NotFound;

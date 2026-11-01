import { useState, type FormEvent } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Search, BookOpen, ShieldAlert, KeyRound, Headset, ArrowRight, AlertTriangle } from 'lucide-react';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { GUIDE_COUNT_LABEL } from '@/data/site-stats';
import { GUIDE_CATEGORIES, categoryLabels } from '@/data/guide-categories';
import { categoryIcons } from '@/lib/category-icons';

const DOORS = [
  { to: '/guides', icon: BookOpen, title: 'Read a guide', text: `${GUIDE_COUNT_LABEL} step-by-step guides for phones, computers, email and more.` },
  { to: '/scam-defense', icon: ShieldAlert, title: 'Check for a scam', text: 'Got a strange text, call or email? Find out before you click or pay.' },
  { to: '/tools', icon: KeyRound, title: 'Use a safety tool', text: 'Check a link, make a strong password, stop robocalls, freeze your credit.' },
  { to: '/get-help', icon: Headset, title: 'Talk to a real person', text: 'Book a session with a TekSure helper when a guide is not enough.' },
];

// One tap to a common search, for people who are not sure what to type.
const SUGGESTIONS = ['Scam text', 'Make text bigger', 'Wi-Fi', 'Medicare', 'Video call'];

export default function Landing() {
  const [query, setQuery] = useState('');
  const navigate = useNavigate();

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    const q = query.trim();
    if (q) navigate(`/search?q=${encodeURIComponent(q)}`);
  };

  return (
    <>
      <SEOHead
        title="TekSure — Free Tech Help for Beginners & Seniors"
        description="Free step-by-step tech guides, scam checks, and real human help for seniors and beginners. No jargon — clear answers."
        path="/"
      />
      <Navbar />

      <main id="main-content" tabIndex={-1} className="outline-none">
        <section className="relative overflow-hidden bg-ink text-ink-foreground">
          <div aria-hidden="true" className="bg-grid absolute inset-0" />
          <div className="relative mx-auto max-w-6xl px-4 pb-14 pt-12 sm:pb-20 sm:pt-20">
            <div className="max-w-3xl">
            <p className="eyebrow text-signal">
              <span aria-hidden="true" className="h-2 w-2 rounded-full bg-signal" />
              Free tech help · No sign-up
            </p>
            <h1 className="mt-4 font-display text-[2.6rem] font-bold leading-[1.05] sm:text-6xl">
              Tech help in <span className="text-signal">plain English.</span>
            </h1>
            <p className="mt-5 max-w-2xl text-xl text-ink-muted">
              Clear, step-by-step guides for phones, computers and the internet. No jargon, no sales pitch.
            </p>

            <form onSubmit={onSubmit} role="search" className="mt-8 rounded-2xl bg-card p-2 shadow-xl ring-1 ring-ink-line">
              <label htmlFor="landing-search" className="sr-only">What do you need help with?</label>
              <div className="flex flex-col gap-2 sm:flex-row">
                <div className="relative flex-1">
                  <Search aria-hidden="true" className="pointer-events-none absolute left-4 top-1/2 hidden h-6 w-6 -translate-y-1/2 text-muted-foreground sm:block" />
                  <input
                    id="landing-search"
                    type="search"
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    placeholder="What do you need help with?"
                    autoComplete="off"
                    className="h-14 w-full rounded-xl border-2 border-input bg-card pl-4 pr-4 text-lg sm:pl-12 text-foreground placeholder:text-muted-foreground focus-visible:border-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                  />
                </div>
                <button
                  type="submit"
                  className="inline-flex h-14 shrink-0 items-center justify-center gap-2 rounded-xl bg-primary px-6 text-lg font-semibold text-primary-foreground hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                >
                  Search
                  <ArrowRight className="h-5 w-5" aria-hidden="true" />
                </button>
              </div>
            </form>

            <div className="mt-5 flex flex-wrap items-center gap-2">
              <span className="mr-1 text-base text-ink-muted">Popular:</span>
              {SUGGESTIONS.map((s) => (
                <Link
                  key={s}
                  to={`/search?q=${encodeURIComponent(s)}`}
                  className="inline-flex min-h-[44px] items-center rounded-full border border-ink-line bg-white/5 px-4 text-base font-medium text-ink-foreground hover:border-signal hover:text-signal focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-signal"
                >
                  {s}
                </Link>
              ))}
            </div>
            </div>
          </div>
        </section>

        <section aria-labelledby="doors" className="mx-auto max-w-6xl px-4 pt-12 sm:pt-16">
          <h2 id="doors" className="font-display text-3xl font-bold">What would you like to do?</h2>
          <ul className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {DOORS.map((d, i) => {
              const Icon = d.icon;
              return (
                <li key={d.to}>
                  <Link
                    to={d.to}
                    className="group flex h-full flex-col rounded-2xl border-2 border-border bg-card p-6 transition-colors hover:border-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                  >
                    <span className="flex items-center justify-between">
                      <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary text-primary-foreground">
                        <Icon className="h-6 w-6" aria-hidden="true" />
                      </span>
                      <span aria-hidden="true" className="font-mono text-sm font-semibold text-muted-foreground">0{i + 1}</span>
                    </span>
                    <span className="mt-5 block font-display text-2xl font-bold text-foreground">{d.title}</span>
                    <span className="mt-2 block flex-1 text-lg text-muted-foreground">{d.text}</span>
                    <span className="mt-4 inline-flex items-center gap-1 text-lg font-semibold text-primary">
                      Go <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" aria-hidden="true" />
                    </span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </section>

        <section aria-labelledby="topics" className="mx-auto max-w-6xl px-4 pt-14">
          <h2 id="topics" className="font-display text-3xl font-bold">Browse guides by topic</h2>
          <ul className="mt-6 grid gap-3 sm:grid-cols-2">
            {GUIDE_CATEGORIES.map((c) => {
              const Icon = categoryIcons[c];
              return (
                <li key={c}>
                  <Link
                    to={`/guides?category=${c}`}
                    className="flex min-h-[64px] items-center gap-4 rounded-xl border-2 border-border bg-card px-4 py-3 text-lg font-semibold hover:border-primary hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                  >
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-secondary text-primary">
                      <Icon className="h-5 w-5" aria-hidden="true" />
                    </span>
                    {categoryLabels[c]}
                  </Link>
                </li>
              );
            })}
          </ul>
        </section>

        <section className="mx-auto max-w-6xl px-4 pt-14">
          <div className="flex flex-col gap-4 rounded-2xl border-2 border-destructive/40 bg-danger p-6 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex items-start gap-4">
              <AlertTriangle className="mt-1 h-7 w-7 shrink-0 text-danger-foreground" aria-hidden="true" />
              <div>
                <h2 className="font-display text-2xl font-bold text-danger-foreground">Think you have been scammed?</h2>
                <p className="mt-1 text-lg text-foreground">Stay calm. There are clear steps you can take right now.</p>
              </div>
            </div>
            <Link
              to="/emergency-help"
              className="inline-flex min-h-[52px] shrink-0 items-center justify-center rounded-xl bg-destructive px-6 text-lg font-semibold text-destructive-foreground hover:bg-destructive/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
            >
              What to do right now
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}

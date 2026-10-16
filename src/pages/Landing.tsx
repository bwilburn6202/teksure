import { useState, type FormEvent } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Search, BookOpen, ShieldAlert, Wrench, Phone, ArrowRight, Check, AlertTriangle, type LucideIcon } from 'lucide-react';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { GUIDE_COUNT_LABEL } from '@/data/site-stats';
import { GUIDE_CATEGORIES, categoryLabels, categoryDescriptions } from '@/data/guide-categories';
import { categoryIcons } from '@/components/guide/categoryIcons';

const DOORS: { to: string; title: string; text: string; icon: LucideIcon }[] = [
  { to: '/guides', title: 'Read a guide', text: `${GUIDE_COUNT_LABEL} step-by-step guides for phones, computers, email and more.`, icon: BookOpen },
  { to: '/scam-defense', title: 'Check for a scam', text: 'Got a strange text, call or email? Find out before you click or pay.', icon: ShieldAlert },
  { to: '/tools', title: 'Use a tool', text: 'Fix Wi-Fi, check a password, find a lost phone, compare phone plans.', icon: Wrench },
  { to: '/get-help', title: 'Talk to a real person', text: 'Book a session with a TekSure helper when a guide is not enough.', icon: Phone },
];

const PROMISES = ['Free to read', 'No sign-up needed', 'Written in plain English'];

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
        {/* Hero */}
        <section className="border-b border-border bg-muted/50">
          <div className="mx-auto max-w-5xl px-4 py-12 sm:py-20">
            <h1 className="max-w-3xl text-4xl sm:text-6xl font-bold tracking-tight text-foreground">
              Tech help in plain English.
            </h1>
            <p className="mt-5 max-w-2xl text-xl sm:text-2xl text-muted-foreground">
              Free guides for phones, computers and the internet. No jargon, no sales pitch.
            </p>

            <form onSubmit={onSubmit} role="search" className="mt-8 flex max-w-3xl flex-col gap-3 sm:flex-row">
              <label htmlFor="landing-search" className="sr-only">What do you need help with?</label>
              <input
                id="landing-search"
                type="search"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="What do you need help with?"
                autoComplete="off"
                className="h-14 w-full min-w-0 rounded-lg border-2 border-input bg-background px-4 text-lg text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
              />
              <button
                type="submit"
                className="inline-flex h-14 shrink-0 items-center justify-center gap-2 rounded-lg bg-primary px-6 text-lg font-semibold text-primary-foreground hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
              >
                <Search className="h-5 w-5" aria-hidden="true" />
                Search
              </button>
            </form>

            <ul className="mt-6 flex flex-wrap gap-x-6 gap-y-2 text-lg text-foreground">
              {PROMISES.map((p) => (
                <li key={p} className="inline-flex items-center gap-2">
                  <Check className="h-5 w-5 text-primary" aria-hidden="true" />
                  {p}
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Four ways in */}
        <section aria-labelledby="ways-in" className="mx-auto max-w-5xl px-4 pt-12 sm:pt-16">
          <h2 id="ways-in" className="text-3xl font-bold tracking-tight">How can we help today?</h2>
          <ul className="mt-6 grid gap-4 sm:grid-cols-2">
            {DOORS.map((d) => {
              const Icon = d.icon;
              return (
                <li key={d.to}>
                  <Link
                    to={d.to}
                    className="group flex h-full gap-4 rounded-xl border-2 border-border bg-card p-6 transition-colors hover:border-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                  >
                    <span className="inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                      <Icon className="h-6 w-6" aria-hidden="true" />
                    </span>
                    <span className="flex-1">
                      <span className="flex items-center gap-2 text-2xl font-bold text-foreground">
                        {d.title}
                        <ArrowRight className="h-5 w-5 text-primary transition-transform group-hover:translate-x-1" aria-hidden="true" />
                      </span>
                      <span className="mt-2 block text-lg text-muted-foreground">{d.text}</span>
                    </span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </section>

        {/* Topics */}
        <section aria-labelledby="topics" className="mx-auto max-w-5xl px-4 pt-12 sm:pt-16">
          <div className="flex flex-wrap items-end justify-between gap-3">
            <h2 id="topics" className="text-3xl font-bold tracking-tight">Browse guides by topic</h2>
            <Link to="/guides" className="text-lg font-semibold text-primary underline-offset-4 hover:underline">
              See all guides
            </Link>
          </div>
          <ul className="mt-6 grid gap-3 sm:grid-cols-2">
            {GUIDE_CATEGORIES.map((c) => {
              const Icon = categoryIcons[c];
              return (
                <li key={c}>
                  <Link
                    to={`/guides?category=${c}`}
                    className="flex h-full items-start gap-4 rounded-xl border border-border bg-card p-4 transition-colors hover:border-primary hover:bg-muted/40 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                  >
                    <Icon className="mt-1 h-6 w-6 shrink-0 text-primary" aria-hidden="true" />
                    <span>
                      <span className="block text-lg font-semibold text-foreground">{categoryLabels[c]}</span>
                      <span className="mt-1 block text-base text-muted-foreground">{categoryDescriptions[c]}</span>
                    </span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </section>

        {/* Scammed? */}
        <section aria-labelledby="scammed" className="mx-auto max-w-5xl px-4 pt-12 sm:pt-16">
          <div className="flex flex-col gap-5 rounded-xl border-2 border-destructive/40 bg-danger p-6 sm:flex-row sm:items-center sm:p-8">
            <AlertTriangle className="h-10 w-10 shrink-0 text-danger-foreground" aria-hidden="true" />
            <div className="flex-1">
              <h2 id="scammed" className="text-2xl font-bold text-danger-foreground">Think you have been scammed?</h2>
              <p className="mt-2 text-lg text-foreground">
                Act fast and do not be embarrassed — it happens to careful people every day. We will walk you through the next steps.
              </p>
            </div>
            <Link
              to="/emergency-help"
              className="inline-flex min-h-[52px] shrink-0 items-center justify-center gap-2 rounded-lg bg-destructive px-6 text-lg font-semibold text-destructive-foreground hover:bg-destructive/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
            >
              What to do right now
              <ArrowRight className="h-5 w-5" aria-hidden="true" />
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}

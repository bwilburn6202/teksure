import { useState, type FormEvent } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { GUIDE_COUNT_LABEL } from '@/data/site-stats';
import { GUIDE_CATEGORIES, categoryLabels } from '@/data/guide-categories';
import { TOP_QUESTIONS } from '@/data/top-questions';

/**
 * Home page, set like the first page of a manual: what this is, a search box,
 * the questions people ask most, the topics, and who wrote it. One column,
 * lists instead of card grids, so the page reads top to bottom.
 */
export default function Landing() {
  const [query, setQuery] = useState('');
  const navigate = useNavigate();

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    const q = query.trim();
    if (q) navigate(`/search?q=${encodeURIComponent(q)}`);
  };

  const section = 'mt-14 border-t-2 border-foreground pt-6';

  return (
    <>
      <SEOHead
        title="TekSure — Free Tech Help for Beginners & Seniors"
        description="Free step-by-step tech guides, scam checks, and real human help for seniors and beginners. No jargon — clear answers."
        path="/"
      />
      <Navbar />

      <main id="main-content" tabIndex={-1} className="mx-auto max-w-3xl px-4 pt-12 sm:pt-16 outline-none">
        <h1 className="font-display text-[2.6rem] font-bold leading-[1.1] sm:text-6xl">Tech help in plain English.</h1>
        <p className="mt-5 text-xl text-muted-foreground">
          {GUIDE_COUNT_LABEL} free, step-by-step guides for phones, computers and the internet, each with a link to
          the official instructions. When a guide is not enough, a real person can help.
        </p>

        <form onSubmit={onSubmit} role="search" className="mt-8">
          <label htmlFor="landing-search" className="block text-lg font-bold">
            What do you need help with?
          </label>
          <div className="mt-2 flex flex-col gap-2 sm:flex-row">
            <input
              id="landing-search"
              type="search"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="For example: make text bigger"
              autoComplete="off"
              className="h-14 w-full rounded-sm border-2 border-foreground bg-card px-4 text-lg text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-ring/40"
            />
            <button
              type="submit"
              className="inline-flex h-14 shrink-0 items-center justify-center rounded-sm bg-primary px-7 text-lg font-bold text-primary-foreground hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-ring/40"
            >
              Search
            </button>
          </div>
        </form>

        <aside aria-labelledby="scam-now" className="mt-10 border-l-[6px] border-destructive bg-danger px-5 py-4">
          <h2 id="scam-now" className="font-display text-2xl font-bold text-danger-foreground">Think you are being scammed right now?</h2>
          <p className="mt-1 text-lg">
            Hang up or stop replying. Do not send money, gift cards or codes.{' '}
            <Link to="/emergency-help" className="font-bold text-foreground underline underline-offset-4">
              Then follow these steps.
            </Link>
          </p>
        </aside>

        <section aria-labelledby="top-questions" className={section}>
          <h2 id="top-questions" className="font-display text-3xl font-bold">Questions people ask most</h2>
          <ol className="mt-4 divide-y divide-border border-y border-border">
            {TOP_QUESTIONS.map((t, i) => (
              <li key={t.to}>
                <Link
                  to={t.to}
                  className="group flex min-h-[56px] items-baseline gap-4 py-3 text-lg hover:bg-secondary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                >
                  <span aria-hidden="true" className="w-6 shrink-0 text-right font-mono text-base text-muted-foreground">
                    {i + 1}.
                  </span>
                  <span className="font-bold text-primary underline-offset-4 group-hover:underline">{t.q}</span>
                </Link>
              </li>
            ))}
          </ol>
        </section>

        <section aria-labelledby="topics" className={section}>
          <h2 id="topics" className="font-display text-3xl font-bold">Guides by topic</h2>
          <ul className="mt-4 grid gap-x-8 sm:grid-cols-2">
            {GUIDE_CATEGORIES.map((c) => (
              <li key={c} className="border-b border-border">
                <Link
                  to={`/guides?category=${c}`}
                  className="flex min-h-[52px] items-center text-lg font-bold text-primary underline-offset-4 hover:underline"
                >
                  {categoryLabels[c]}
                </Link>
              </li>
            ))}
          </ul>
          <p className="mt-4 text-lg">
            Or try a <Link to="/tools" className="font-bold text-primary underline underline-offset-4">free safety tool</Link>:
            check a link, make a strong password, freeze your credit.
          </p>
        </section>

        <section aria-labelledby="who" className={section}>
          <h2 id="who" className="font-display text-3xl font-bold">Who writes this</h2>
          <blockquote className="mt-4 space-y-3 text-lg leading-relaxed">
            <p>
              TekSure started the way a lot of family tech support does: a phone call. A grandparent asking how to
              join a video call. A parent wondering if an email is a scam.
            </p>
            <p>
              So we started writing things down, with one rule: if someone who has never used a computer cannot read
              it aloud and follow along, it is not done yet.
            </p>
          </blockquote>
          <p className="mt-3 text-lg font-bold">
            — The TekSure team ·{' '}
            <Link to="/about" className="font-normal text-primary underline underline-offset-4">more about us</Link>
          </p>
          <p className="mt-6 text-lg">
            Stuck on something a guide does not cover?{' '}
            <Link to="/get-help" className="font-bold text-primary underline underline-offset-4">Talk to a real person</Link>.
          </p>
        </section>
      </main>

      <Footer />
    </>
  );
}

import { useMemo, useState } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { GUIDE_CATEGORIES, categoryLabels, categoryDescriptions, type GuideCategory } from '@/data/guide-categories';
import { guideIndex } from '@/lib/guide-index';
import { GUIDE_COUNT_LABEL } from '@/data/site-stats';
import { categoryIcons } from '@/components/guide/categoryIcons';
import type { GuideSummary } from '@/lib/guide-index';

/** Guides shown per topic before the rest fold under "Show all" (all stay in the page for search engines). */
const PREVIEW = 6;

const GuideCard = ({ g }: { g: GuideSummary }) => (
  <li>
    <Link
      to={`/guides/${g.slug}`}
      className="group flex h-full flex-col rounded-xl border border-border bg-card p-5 transition-colors hover:border-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
    >
      <span className="flex items-start gap-3">
        {g.thumbnailEmoji && (
          <span aria-hidden="true" className="text-2xl leading-none">{g.thumbnailEmoji}</span>
        )}
        <span className="text-lg font-semibold leading-snug text-primary group-hover:underline underline-offset-4">{g.title}</span>
      </span>
      <span className="mt-2 line-clamp-3 text-base text-muted-foreground">{g.excerpt}</span>
      {(g.readTime || g.difficulty) && (
        <span className="mt-auto pt-3 text-base text-muted-foreground">
          {[g.readTime && `${g.readTime} read`, g.difficulty].filter(Boolean).join(' · ')}
        </span>
      )}
    </Link>
  </li>
);

const isCategory = (v: string | null): v is GuideCategory =>
  !!v && (GUIDE_CATEGORIES as readonly string[]).includes(v);

/**
 * /guides — every guide, grouped by category, with a text filter.
 * `?category=<id>` narrows the list to one category (the old hub pages
 * redirect here with it).
 */
export default function Guides() {
  const [params, setParams] = useSearchParams();
  const active = isCategory(params.get('category')) ? (params.get('category') as GuideCategory) : null;
  const [filter, setFilter] = useState('');

  const groups = useMemo(() => {
    const q = filter.trim().toLowerCase();
    return (active ? [active] : GUIDE_CATEGORIES).map((cat) => ({
      cat,
      guides: guideIndex
        .filter((g) => g.category === cat)
        .filter((g) => !q || g.title.toLowerCase().includes(q) || g.excerpt.toLowerCase().includes(q))
        .sort((a, b) => a.title.localeCompare(b.title)),
    }));
  }, [active, filter]);

  const shown = groups.reduce((n, g) => n + g.guides.length, 0);
  const pick = (cat: GuideCategory | null) => {
    const next = new URLSearchParams(params);
    if (cat) next.set('category', cat);
    else next.delete('category');
    setParams(next, { replace: true });
  };

  const chip = (on: boolean) =>
    `min-h-[44px] px-4 rounded-md border-2 text-base font-semibold ${
      on ? 'border-primary bg-primary text-primary-foreground' : 'border-border hover:border-primary'
    }`;

  return (
    <>
      <SEOHead
        title={active ? `${categoryLabels[active]} Guides | TekSure` : 'Tech Guides for Beginners & Seniors | TekSure'}
        description={
          active
            ? categoryDescriptions[active]
            : `${GUIDE_COUNT_LABEL} free, step-by-step tech guides in plain English: phones, computers, email, scams, Medicare and more.`
        }
        path="/guides"
      />
      <Navbar />
      <main id="main-content" tabIndex={-1} className="mx-auto max-w-5xl px-4 pt-10 outline-none">
        <h1 className="text-4xl sm:text-5xl font-bold tracking-tight">{active ? categoryLabels[active] : 'Guides'}</h1>
        <p className="mt-3 text-xl text-muted-foreground">
          {active ? categoryDescriptions[active] : 'Step-by-step help in plain English. Pick a topic or type a word to narrow the list.'}
        </p>

        <div className="mt-6">
          <label htmlFor="guide-filter" className="block text-lg font-semibold">
            Filter guides
          </label>
          <input
            id="guide-filter"
            type="search"
            value={filter}
            onChange={(e) => setFilter(e.target.value)}
            placeholder="For example: WhatsApp, printer, Medicare"
            className="mt-2 h-12 w-full max-w-xl rounded-md border-2 border-input bg-background px-4 text-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
          />
        </div>

        <nav aria-label="Guide topics" className="mt-6 flex flex-wrap gap-2">
          <button onClick={() => pick(null)} className={chip(!active)} aria-pressed={!active}>
            All topics
          </button>
          {GUIDE_CATEGORIES.map((c) => (
            <button key={c} onClick={() => pick(c)} className={chip(active === c)} aria-pressed={active === c}>
              {categoryLabels[c]}
            </button>
          ))}
        </nav>

        <p className="mt-6 text-base text-muted-foreground" aria-live="polite">
          Showing {shown} {shown === 1 ? 'guide' : 'guides'}.
        </p>

        {groups.map(({ cat, guides }) => {
          if (guides.length === 0) return null;
          const Icon = categoryIcons[cat];
          // Folding only applies to the full, unfiltered list.
          const fold = !active && !filter.trim() && guides.length > PREVIEW;
          const first = fold ? guides.slice(0, PREVIEW) : guides;
          const rest = fold ? guides.slice(PREVIEW) : [];
          return (
            <section key={cat} aria-labelledby={`cat-${cat}`} className="mt-12">
              {!active && (
                <div className="flex flex-wrap items-center justify-between gap-3 border-b-2 border-border pb-3">
                  <h2 id={`cat-${cat}`} className="flex items-center gap-3 text-2xl font-bold">
                    <span className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                      <Icon className="h-5 w-5" aria-hidden="true" />
                    </span>
                    {categoryLabels[cat]}
                  </h2>
                  <button onClick={() => pick(cat)} className="min-h-[44px] text-lg font-semibold text-primary underline-offset-4 hover:underline">
                    See all {guides.length}
                  </button>
                </div>
              )}
              <ul className="mt-5 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {first.map((g) => <GuideCard key={g.slug} g={g} />)}
              </ul>
              {rest.length > 0 && (
                <details className="group/more mt-4">
                  <summary className="inline-flex min-h-[48px] cursor-pointer list-none items-center rounded-lg border-2 border-border px-5 text-lg font-semibold hover:border-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring [&::-webkit-details-marker]:hidden">
                    <span className="group-open/more:hidden">Show {rest.length} more</span>
                    <span className="hidden group-open/more:inline">Show fewer</span>
                  </summary>
                  <ul className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                    {rest.map((g) => <GuideCard key={g.slug} g={g} />)}
                  </ul>
                </details>
              )}
            </section>
          );
        })}

        {shown === 0 && (
          <p className="mt-10 text-lg">
            No guides match “{filter}”. Try a shorter word, or{' '}
            <Link to={`/search?q=${encodeURIComponent(filter)}`} className="text-primary underline">search the whole site</Link>.
          </p>
        )}
      </main>
      <Footer />
    </>
  );
}

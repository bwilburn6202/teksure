import { useMemo, useState } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { GUIDE_CATEGORIES, categoryLabels, categoryDescriptions, type GuideCategory } from '@/data/guide-categories';
import { guideIndex } from '@/lib/guide-index';
import { GUIDE_COUNT_LABEL } from '@/data/site-stats';
import { PageHeader } from '@/components/layout/PageHeader';
import { categoryIcons } from '@/lib/category-icons';
import { ArrowRight } from 'lucide-react';

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
    `inline-flex items-center gap-2 min-h-[44px] px-4 rounded-full border-2 text-base font-semibold focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring ${
      on ? 'border-primary bg-primary text-primary-foreground' : 'border-border bg-card hover:border-primary'
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
      <main id="main-content" tabIndex={-1} className="outline-none">
        <PageHeader
          eyebrow={active ? 'Guides' : `${GUIDE_COUNT_LABEL} free guides`}
          title={active ? categoryLabels[active] : 'Guides'}
          description={active ? categoryDescriptions[active] : 'Step-by-step help in plain English. Pick a topic or type a word to narrow the list.'}
        >
          <div className="mt-6 max-w-xl">
            <label htmlFor="guide-filter" className="block text-lg font-semibold">
              Filter guides
            </label>
            <input
              id="guide-filter"
              type="search"
              value={filter}
              onChange={(e) => setFilter(e.target.value)}
              placeholder="For example: WhatsApp, printer, Medicare"
              className="mt-2 h-14 w-full rounded-xl border-2 border-transparent bg-card px-4 text-lg text-foreground placeholder:text-muted-foreground focus-visible:border-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-signal"
            />
          </div>
        </PageHeader>

        <div className="mx-auto max-w-5xl px-4 pt-8">
          <nav aria-label="Guide topics" className="flex flex-wrap gap-2">
            <button onClick={() => pick(null)} className={chip(!active)} aria-pressed={!active}>
              All topics
            </button>
            {GUIDE_CATEGORIES.map((c) => {
              const Icon = categoryIcons[c];
              return (
                <button key={c} onClick={() => pick(c)} className={chip(active === c)} aria-pressed={active === c}>
                  <Icon className="h-4 w-4" aria-hidden="true" />
                  {categoryLabels[c]}
                </button>
              );
            })}
          </nav>

          <p className="mt-6 font-mono text-sm font-semibold text-muted-foreground" aria-live="polite">
            Showing {shown} {shown === 1 ? 'guide' : 'guides'}
          </p>

          {groups.map(({ cat, guides }) =>
            guides.length === 0 ? null : (
              <section key={cat} aria-labelledby={`cat-${cat}`} className="mt-10">
                {!active && (
                  <h2 id={`cat-${cat}`} className="flex items-center gap-3 font-display text-2xl font-bold">
                    {(() => {
                      const Icon = categoryIcons[cat];
                      return (
                        <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-secondary text-primary">
                          <Icon className="h-5 w-5" aria-hidden="true" />
                        </span>
                      );
                    })()}
                    {categoryLabels[cat]}
                  </h2>
                )}
                <ul className="mt-4 grid gap-3 md:grid-cols-2">
                  {guides.map((g) => (
                    <li key={g.slug}>
                      <Link
                        to={`/guides/${g.slug}`}
                        className="group flex h-full flex-col rounded-xl border-2 border-border bg-card p-4 hover:border-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                      >
                        <span className="flex items-start justify-between gap-3 text-lg font-semibold text-primary">
                          {g.title}
                          <ArrowRight className="mt-1 h-5 w-5 shrink-0 transition-transform group-hover:translate-x-1" aria-hidden="true" />
                        </span>
                        <span className="mt-1 text-base text-muted-foreground">{g.excerpt}</span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </section>
            ),
          )}

          {shown === 0 && (
            <p className="mt-10 text-lg">
              No guides match “{filter}”. Try a shorter word, or{' '}
              <Link to={`/search?q=${encodeURIComponent(filter)}`} className="text-primary underline">search the whole site</Link>.
            </p>
          )}
        </div>
      </main>
      <Footer />
    </>
  );
}

import { useState, useMemo, useEffect } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import {
  Search, Clock, ArrowRight, Brain, ChevronLeft, ChevronRight,
  Sparkles, Lightbulb,
} from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { guides, categoryLabels, type Guide } from '@/data/guides';
import { GuideThumbnail } from '@/components/GuideThumbnail';
import { tools, type Tool } from '@/pages/Tools';

/* ── Constants ──────────────────────────────────────────── */
const POPULAR_SEARCHES = [
  'WiFi',
  'scam',
  'password',
  'video call',
  'iPhone',
  'email',
  'slow computer',
  'Medicare',
];

const RESULTS_PER_PAGE = 20;

/* ── Helpers ────────────────────────────────────────────── */

/** Score a match for relevance — title hits rank higher than body hits. */
function scoreGuide(guide: Guide, q: string): number {
  const query = q.toLowerCase();
  let score = 0;
  if (guide.title.toLowerCase().includes(query)) score += 100;
  if (guide.excerpt.toLowerCase().includes(query)) score += 40;
  if (guide.tags.some(t => t.toLowerCase().includes(query))) score += 30;
  if (guide.body && guide.body.toLowerCase().includes(query)) score += 10;
  if (guide.steps?.some(s =>
    s.title.toLowerCase().includes(query) ||
    s.content.toLowerCase().includes(query)
  )) score += 20;
  return score;
}

function scoreTool(tool: Tool, q: string): number {
  const query = q.toLowerCase();
  let score = 0;
  if (tool.title.toLowerCase().includes(query)) score += 100;
  if (tool.description.toLowerCase().includes(query)) score += 40;
  if (tool.keywords?.toLowerCase().includes(query)) score += 30;
  if (tool.category.toLowerCase().includes(query)) score += 15;
  return score;
}

/** Extract a snippet around the first match, highlighting the match. */
function getHighlightedSnippet(text: string, q: string, maxLen = 180): JSX.Element {
  if (!text) return <span />;
  const lower = text.toLowerCase();
  const idx = lower.indexOf(q.toLowerCase());

  if (idx === -1) {
    const trimmed = text.length > maxLen ? text.slice(0, maxLen) + '…' : text;
    return <span>{trimmed}</span>;
  }

  const pad = Math.floor((maxLen - q.length) / 2);
  const start = Math.max(0, idx - pad);
  const end = Math.min(text.length, idx + q.length + pad);
  const prefix = start > 0 ? '…' : '';
  const suffix = end < text.length ? '…' : '';

  const before = text.slice(start, idx);
  const match = text.slice(idx, idx + q.length);
  const after = text.slice(idx + q.length, end);

  return (
    <span>
      {prefix}
      {before}
      <mark className="bg-yellow-200 dark:bg-yellow-600/40 text-foreground rounded px-0.5 font-semibold">
        {match}
      </mark>
      {after}
      {suffix}
    </span>
  );
}

/** Senior-friendly difficulty pill (mirrors the Tools page styling). */
function difficultyPillClass(d?: string): string {
  switch (d) {
    case 'Beginner':
    case 'Easy':
      return 'bg-green-50 text-green-800 border-green-300 dark:bg-green-950/40 dark:text-green-300 dark:border-green-800';
    case 'Intermediate':
    case 'Medium':
      return 'bg-amber-50 text-amber-800 border-amber-300 dark:bg-amber-950/40 dark:text-amber-300 dark:border-amber-800';
    case 'Advanced':
      return 'bg-rose-50 text-rose-800 border-rose-300 dark:bg-rose-950/40 dark:text-rose-300 dark:border-rose-800';
    default:
      return 'bg-muted text-foreground border-border';
  }
}

/* ── Result card components ─────────────────────────────── */

function GuideResultCard({ guide, query }: { guide: Guide; query: string }) {
  // Choose the best text field to snippet from — prefer the one that contains the match.
  const q = query.toLowerCase();
  const sourceText =
    guide.excerpt.toLowerCase().includes(q)
      ? guide.excerpt
      : guide.body?.toLowerCase().includes(q)
        ? guide.body
        : guide.steps?.find(s =>
          s.title.toLowerCase().includes(q) || s.content.toLowerCase().includes(q),
        )?.content ?? guide.excerpt;

  return (
    <Link
      to={`/guides/${guide.slug}`}
      className="block rounded-2xl focus:outline-none focus:ring-2 focus:ring-primary/60 focus:ring-offset-2"
      aria-label={`Read guide: ${guide.title}`}
    >
      <Card className="h-full rounded-2xl border-2 border-border bg-card hover:border-primary/40 hover:shadow-lg transition-all hover:-translate-y-0.5 group">
        <CardContent className="p-5 md:p-6 flex gap-4 md:gap-5">
          {/* Category icon thumbnail */}
          <GuideThumbnail
            category={guide.category}
            size="h-8 w-8 md:h-10 md:w-10"
            className="h-16 w-16 md:h-20 md:w-20 rounded-2xl bg-primary/5 dark:bg-primary/10 flex items-center justify-center shrink-0"
          />

          <div className="flex-1 min-w-0">
            <div className="flex items-center gap-2 mb-2 flex-wrap">
              <Badge
                variant="secondary"
                className="rounded-full text-xs font-medium"
              >
                Guide
              </Badge>
              <Badge
                variant="outline"
                className="rounded-full text-xs font-medium"
              >
                {categoryLabels[guide.category]}
              </Badge>
            </div>

            <h3 className="font-bold text-lg md:text-xl leading-snug mb-2 group-hover:text-primary transition-colors">
              {getHighlightedSnippet(guide.title, query, 120)}
            </h3>

            <p className="text-base text-muted-foreground leading-relaxed mb-3 line-clamp-2">
              {getHighlightedSnippet(sourceText, query, 200)}
            </p>

            <div className="flex items-center gap-2 flex-wrap">
              {guide.difficulty && (
                <span
                  className={[
                    'inline-flex items-center rounded-full border px-2.5 py-1 text-xs font-semibold',
                    difficultyPillClass(guide.difficulty),
                  ].join(' ')}
                >
                  {guide.difficulty}
                </span>
              )}
              <span className="inline-flex items-center gap-1 text-sm text-muted-foreground">
                <Clock className="h-4 w-4" aria-hidden="true" />
                {guide.readTime}
              </span>
            </div>
          </div>
        </CardContent>
      </Card>
    </Link>
  );
}

function ToolResultCard({ tool, query }: { tool: Tool; query: string }) {
  const Icon = tool.icon;
  const content = (
    <Card className="h-full rounded-2xl border-2 border-border bg-card hover:border-primary/40 hover:shadow-lg transition-all hover:-translate-y-0.5 group">
      <CardContent className="p-5 md:p-6 flex gap-4 md:gap-5">
        <div
          className={`h-16 w-16 md:h-20 md:w-20 rounded-2xl ${tool.bg} flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform`}
          aria-hidden="true"
        >
          <Icon className={`h-8 w-8 md:h-10 md:w-10 ${tool.color}`} />
        </div>

        <div className="flex-1 min-w-0 flex flex-col">
          <div className="flex items-center gap-2 mb-2 flex-wrap">
            <Badge
              variant="secondary"
              className="rounded-full text-xs font-medium bg-violet-50 text-violet-800 border border-violet-200 dark:bg-violet-950/40 dark:text-violet-300 dark:border-violet-800"
            >
              Tool
            </Badge>
            {tool.badge && (
              <Badge variant="outline" className="rounded-full text-xs font-medium">
                {tool.badge}
              </Badge>
            )}
          </div>

          <h3 className="font-bold text-lg md:text-xl leading-snug mb-2 group-hover:text-primary transition-colors">
            {getHighlightedSnippet(tool.title, query, 120)}
          </h3>

          <p className="text-base text-muted-foreground leading-relaxed mb-3 line-clamp-2">
            {getHighlightedSnippet(tool.description, query, 200)}
          </p>

          <div className="flex items-center gap-2 flex-wrap mt-auto pt-2">
            <span
              className={[
                'inline-flex items-center rounded-full border px-2.5 py-1 text-xs font-semibold',
                difficultyPillClass(tool.difficulty),
              ].join(' ')}
            >
              {tool.difficulty}
            </span>
            <span className="inline-flex items-center gap-1 text-sm text-muted-foreground">
              <Clock className="h-4 w-4" aria-hidden="true" />
              {tool.time}
            </span>
            {tool.path && (
              <span className="ml-auto inline-flex items-center gap-1 text-sm font-semibold text-primary group-hover:translate-x-0.5 transition-transform">
                Open tool
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </span>
            )}
          </div>
        </div>
      </CardContent>
    </Card>
  );

  if (!tool.path) {
    return (
      <div className="block" aria-label={tool.title}>
        {content}
      </div>
    );
  }

  return (
    <Link
      to={tool.path}
      className="block rounded-2xl focus:outline-none focus:ring-2 focus:ring-primary/60 focus:ring-offset-2"
      aria-label={`Open tool: ${tool.title}`}
    >
      {content}
    </Link>
  );
}

/* ── Empty state ────────────────────────────────────────── */

function EmptyResults({ query, onSuggest }: { query: string; onSuggest: (term: string) => void }) {
  return (
    <div className="text-center py-12 md:py-16 max-w-xl mx-auto">
      <p className="text-6xl mb-4 select-none" aria-hidden="true"></p>
      <h2 className="text-2xl md:text-3xl font-bold mb-3 text-foreground">
        No results for "{query}"
      </h2>
      <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
        Don't worry — there's still help available. Ask TekBrain for a plain-English answer,
        or suggest a guide we should write.
      </p>

      <div className="flex flex-col sm:flex-row gap-3 justify-center mb-10">
        <Button
          asChild
          size="lg"
          className="min-h-[48px] text-base font-semibold rounded-xl"
        >
          <Link to={`/tekbrain/chat?q=${encodeURIComponent(query)}`}>
            <Brain className="h-5 w-5 mr-2" aria-hidden="true" />
            Ask TekBrain about "{query}"
          </Link>
        </Button>
        <Button
          asChild
          variant="outline"
          size="lg"
          className="min-h-[48px] text-base font-semibold rounded-xl border-2"
        >
          <Link to="/find-a-guide">
            <Lightbulb className="h-5 w-5 mr-2" aria-hidden="true" />
            Suggest a guide
          </Link>
        </Button>
      </div>

      <div className="pt-4 border-t border-border">
        <p className="text-sm font-semibold text-muted-foreground mb-3 uppercase tracking-wide">
          Or try a popular search
        </p>
        <div className="flex flex-wrap justify-center gap-2">
          {POPULAR_SEARCHES.map(term => (
            <button
              key={term}
              onClick={() => onSuggest(term)}
              className="min-h-[44px] rounded-full border-2 border-border bg-background px-4 py-2 text-base font-medium hover:bg-primary/10 hover:border-primary transition-colors focus:outline-none focus:ring-2 focus:ring-primary/60"
            >
              {term}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

/* ── Landing state (no query) ───────────────────────────── */

function NoQueryLanding({ onSuggest }: { onSuggest: (term: string) => void }) {
  return (
    <div className="text-center py-10 md:py-16 max-w-xl mx-auto">
      <p className="text-6xl mb-4 select-none" aria-hidden="true"></p>
      <h2 className="text-2xl md:text-3xl font-bold mb-3 text-foreground">
        What are you looking for?
      </h2>
      <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
        Search {guides.length}+ free guides and {tools.length}+ interactive tools.
      </p>

      <div>
        <p className="text-sm font-semibold text-muted-foreground mb-3 uppercase tracking-wide flex items-center justify-center gap-2">
          <Sparkles className="h-4 w-4" aria-hidden="true" />
          Popular searches
        </p>
        <div className="flex flex-wrap justify-center gap-2">
          {POPULAR_SEARCHES.map(term => (
            <button
              key={term}
              onClick={() => onSuggest(term)}
              className="min-h-[44px] rounded-full border-2 border-border bg-background px-4 py-2 text-base font-medium hover:bg-primary/10 hover:border-primary transition-colors focus:outline-none focus:ring-2 focus:ring-primary/60"
            >
              {term}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

/* ── Main component ─────────────────────────────────────── */

type TabKey = 'all' | 'guides' | 'tools';

const SearchResults = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const urlQuery = searchParams.get('q') || '';
  const [inputValue, setInputValue] = useState(urlQuery);
  const [activeTab, setActiveTab] = useState<TabKey>('all');
  const [page, setPage] = useState(1);

  // Keep the input synced when navigating via browser back / external link.
  useEffect(() => {
    setInputValue(urlQuery);
    setPage(1);
  }, [urlQuery]);

  // Reset to page 1 whenever tab changes
  useEffect(() => {
    setPage(1);
  }, [activeTab]);

  // ── Search computation ──────────────────────────────────
  const { matchingGuides, matchingTools } = useMemo(() => {
    const q = urlQuery.trim();
    if (!q) return { matchingGuides: [] as Guide[], matchingTools: [] as Tool[] };

    const gResults = guides
      .map(g => ({ g, s: scoreGuide(g, q) }))
      .filter(r => r.s > 0)
      .sort((a, b) => b.s - a.s)
      .map(r => r.g);

    const tResults = tools
      .map(t => ({ t, s: scoreTool(t, q) }))
      .filter(r => r.s > 0)
      .sort((a, b) => b.s - a.s)
      .map(r => r.t);

    return { matchingGuides: gResults, matchingTools: tResults };
  }, [urlQuery]);

  const totalCount = matchingGuides.length + matchingTools.length;

  // Which results show under the active tab
  const activeResults: Array<{ kind: 'guide'; item: Guide } | { kind: 'tool'; item: Tool }> = useMemo(() => {
    const guideItems = matchingGuides.map(g => ({ kind: 'guide' as const, item: g }));
    const toolItems = matchingTools.map(t => ({ kind: 'tool' as const, item: t }));
    if (activeTab === 'guides') return guideItems;
    if (activeTab === 'tools') return toolItems;
    // "All" — tools first (they're more actionable), then guides.
    return [...toolItems, ...guideItems];
  }, [matchingGuides, matchingTools, activeTab]);

  // ── Pagination ──────────────────────────────────────────
  const totalPages = Math.max(1, Math.ceil(activeResults.length / RESULTS_PER_PAGE));
  const safePage = Math.min(page, totalPages);
  const paginated = useMemo(() => {
    const start = (safePage - 1) * RESULTS_PER_PAGE;
    return activeResults.slice(start, start + RESULTS_PER_PAGE);
  }, [activeResults, safePage]);

  // ── Handlers ────────────────────────────────────────────
  const runSearch = (value: string) => {
    const v = value.trim();
    setInputValue(value);
    setSearchParams(v ? { q: v } : {});
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    runSearch(inputValue);
  };

  const handlePopularClick = (term: string) => {
    runSearch(term);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Tab labels
  const tabConfig: Array<{ key: TabKey; label: string; count: number }> = [
    { key: 'all', label: 'All', count: totalCount },
    { key: 'guides', label: 'Guides', count: matchingGuides.length },
    { key: 'tools', label: 'Tools', count: matchingTools.length },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead
        title={urlQuery ? `Results for "${urlQuery}" | TekSure` : 'Search | TekSure'}
        description={
          urlQuery
            ? `Search results for "${urlQuery}" — find ${guides.length}+ tech guides and tools.`
            : 'Search TekSure guides and tools.'
        }
        path={`/search${urlQuery ? `?q=${encodeURIComponent(urlQuery)}` : ''}`}
      />
      <Navbar />

      <main id="main-content" className="flex-1">
        {/* ── Hero / search header ─────────────────────────── */}
        <section className="border-b border-border bg-gradient-to-b from-primary/5 to-background">
          <div className="container max-w-5xl py-10 md:py-14">
            {urlQuery ? (
              <>
                <p className="text-base md:text-lg text-muted-foreground mb-2">
                  {totalCount} {totalCount === 1 ? 'result' : 'results'} found
                </p>
                <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight text-foreground">
                  Results for: <span className="text-primary">"{urlQuery}"</span>
                </h1>
              </>
            ) : (
              <>
                <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight text-foreground mb-3">
                  Search TekSure
                </h1>
                <p className="text-lg md:text-xl text-muted-foreground">
                  Find guides and tools that solve everyday tech questions.
                </p>
              </>
            )}

            {/* Always-visible search input */}
            <form onSubmit={handleSubmit} className="mt-6 flex gap-2" role="search">
              <label htmlFor="search-input" className="sr-only">
                Search guides and tools
              </label>
              <div className="relative flex-1">
                <Search
                  className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground pointer-events-none"
                  aria-hidden="true"
                />
                <Input
                  id="search-input"
                  type="search"
                  placeholder="Try: WiFi, scam, password, video call…"
                  className="pl-12 h-14 text-lg rounded-xl border-2 border-border bg-background focus-visible:border-primary"
                  value={inputValue}
                  onChange={e => setInputValue(e.target.value)}
                  autoComplete="off"
                />
              </div>
              <Button
                type="submit"
                size="lg"
                className="h-14 px-6 md:px-8 text-base font-semibold rounded-xl min-w-[100px]"
              >
                Search
              </Button>
            </form>
          </div>
        </section>

        {/* ── Body ─────────────────────────────────────────── */}
        <section className="container max-w-5xl py-8 md:py-12">
          {!urlQuery ? (
            <NoQueryLanding onSuggest={handlePopularClick} />
          ) : totalCount === 0 ? (
            <EmptyResults query={urlQuery} onSuggest={handlePopularClick} />
          ) : (
            <>
              {/* Tabs */}
              <div
                role="tablist"
                aria-label="Filter by result type"
                className="flex flex-wrap gap-2 mb-6 md:mb-8 border-b border-border pb-4"
              >
                {tabConfig.map(tab => {
                  const isActive = activeTab === tab.key;
                  return (
                    <button
                      key={tab.key}
                      role="tab"
                      aria-selected={isActive}
                      aria-controls={`panel-${tab.key}`}
                      onClick={() => setActiveTab(tab.key)}
                      className={[
                        'min-h-[44px] px-5 rounded-full text-base font-semibold border-2 transition-colors',
                        'focus:outline-none focus:ring-2 focus:ring-primary/60 focus:ring-offset-2',
                        isActive
                          ? 'bg-primary text-primary-foreground border-primary'
                          : 'bg-background text-foreground border-border hover:border-primary/60 hover:bg-primary/5',
                      ].join(' ')}
                    >
                      {tab.label}
                      <span
                        className={[
                          'ml-2 inline-flex items-center justify-center rounded-full text-xs font-bold px-2 py-0.5 min-w-[1.5rem]',
                          isActive
                            ? 'bg-primary-foreground/20 text-primary-foreground'
                            : 'bg-muted text-muted-foreground',
                        ].join(' ')}
                      >
                        {tab.count}
                      </span>
                    </button>
                  );
                })}
              </div>

              {/* Results grid */}
              <div
                role="tabpanel"
                id={`panel-${activeTab}`}
                aria-live="polite"
                className="space-y-4 md:space-y-5"
              >
                {paginated.length === 0 ? (
                  <p className="text-center text-lg text-muted-foreground py-12">
                    No {activeTab === 'guides' ? 'guides' : 'tools'} matched — try the other tab.
                  </p>
                ) : (
                  paginated.map((r, i) =>
                    r.kind === 'guide' ? (
                      <GuideResultCard
                        key={`g-${r.item.slug}-${i}`}
                        guide={r.item}
                        query={urlQuery}
                      />
                    ) : (
                      <ToolResultCard
                        key={`t-${r.item.title}-${i}`}
                        tool={r.item}
                        query={urlQuery}
                      />
                    ),
                  )
                )}
              </div>

              {/* Pagination */}
              {totalPages > 1 && (
                <nav
                  aria-label="Results pagination"
                  className="flex items-center justify-center gap-2 mt-10 md:mt-12 flex-wrap"
                >
                  <Button
                    variant="outline"
                    size="lg"
                    onClick={() => {
                      setPage(p => Math.max(1, p - 1));
                      window.scrollTo({ top: 0, behavior: 'smooth' });
                    }}
                    disabled={safePage === 1}
                    className="min-h-[44px] rounded-xl border-2 text-base font-semibold"
                  >
                    <ChevronLeft className="h-5 w-5 mr-1" aria-hidden="true" />
                    Previous
                  </Button>

                  <div className="flex items-center gap-1 flex-wrap">
                    {Array.from({ length: totalPages }, (_, i) => i + 1).map(p => (
                      <button
                        key={p}
                        onClick={() => {
                          setPage(p);
                          window.scrollTo({ top: 0, behavior: 'smooth' });
                        }}
                        aria-current={p === safePage ? 'page' : undefined}
                        aria-label={`Go to page ${p}`}
                        className={[
                          'min-w-[44px] min-h-[44px] rounded-xl border-2 text-base font-semibold px-3',
                          'focus:outline-none focus:ring-2 focus:ring-primary/60 focus:ring-offset-2',
                          p === safePage
                            ? 'bg-primary text-primary-foreground border-primary'
                            : 'bg-background text-foreground border-border hover:border-primary/60 hover:bg-primary/5',
                        ].join(' ')}
                      >
                        {p}
                      </button>
                    ))}
                  </div>

                  <Button
                    variant="outline"
                    size="lg"
                    onClick={() => {
                      setPage(p => Math.min(totalPages, p + 1));
                      window.scrollTo({ top: 0, behavior: 'smooth' });
                    }}
                    disabled={safePage === totalPages}
                    className="min-h-[44px] rounded-xl border-2 text-base font-semibold"
                  >
                    Next
                    <ChevronRight className="h-5 w-5 ml-1" aria-hidden="true" />
                  </Button>
                </nav>
              )}

              {/* Always-available fallback CTA after results */}
              <div className="mt-12 md:mt-16 rounded-2xl border-2 border-dashed border-border bg-muted/30 p-6 md:p-8 text-center">
                <p className="text-lg md:text-xl font-semibold mb-2">
                  Didn't find what you needed?
                </p>
                <p className="text-base text-muted-foreground mb-4">
                  Ask TekBrain for a personalized answer — it reads every guide and tool on the site.
                </p>
                <Button
                  asChild
                  size="lg"
                  className="min-h-[48px] text-base font-semibold rounded-xl"
                >
                  <Link to={`/tekbrain/chat?q=${encodeURIComponent(urlQuery)}`}>
                    <Brain className="h-5 w-5 mr-2" aria-hidden="true" />
                    Ask TekBrain about "{urlQuery}"
                  </Link>
                </Button>
              </div>
            </>
          )}
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default SearchResults;

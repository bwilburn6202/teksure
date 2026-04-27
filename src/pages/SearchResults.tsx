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
    <div className="text-center py-16 max-w-md mx-auto">
      <p className="text-4xl mb-4 select-none"></p>
      <p className="text-xl font-semibold mb-2 text-primary">
        No guides matched "{query}"
      </p>
      <p className="text-muted-foreground mb-6 leading-relaxed">
        We couldn't find anything for that exact phrase. Try a simpler word, or
        pick one of these popular topics:
      </p>
      <div className="flex flex-wrap justify-center gap-2 mb-8">
        {SUGGESTED_SEARCHES.map(term => (
          <button
            key={term}
            onClick={() => onSuggest(term)}
            className="rounded-full border border-border bg-muted px-3 py-1.5 text-sm font-medium hover:bg-primary/10 hover:border-primary/30 transition-colors"
          >
            {term}
          </button>
        ))}
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
        noindex
      />
      <Navbar />

      <main id="main-content" className="container py-12 flex-1">
        <div className="max-w-2xl mx-auto mb-10">
          <h1 className="text-3xl md:text-4xl font-bold tracking-tight mb-6 text-primary">Search Results</h1>
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
            <Input
              placeholder="Search guides..."
              className="pl-10 h-12 text-base rounded-xl border border-border"
              value={search}
              onChange={e => handleSearch(e.target.value)}
            />
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
                )}
              </TabsContent>
            ))}
          </Tabs>
        ) : (
          <div className="text-center py-16 max-w-md mx-auto">
            <p className="text-4xl mb-4 select-none"></p>
            <p className="text-lg font-medium mb-2 text-primary">What are you looking for?</p>
            <p className="text-muted-foreground mb-6">
              Search {guides.length}+ free guides — try topics like:
            </p>
            <div className="flex flex-wrap justify-center gap-2">
              {['WiFi problems', 'forgot password', 'how to print', 'slow computer', 'email setup', 'video call'].map(term => (
                <button
                  key={term}
                  onClick={() => handleSearch(term)}
                  className="rounded-full border border-border bg-muted px-3 py-1.5 text-sm font-medium hover:bg-primary/10 hover:border-primary/30 transition-colors"
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

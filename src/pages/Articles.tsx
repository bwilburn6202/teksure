import { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { Search, Monitor, Apple, Smartphone, Tablet, Globe, Filter } from 'lucide-react';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { AggregatedArticleCard } from '@/components/AggregatedArticleCard';
import { aggregatedArticles, contentSources, getSourceById, type OsTag } from '@/data/aggregatedArticles';

// ── Filter options ─────────────────────────────────────────────────────────────

const OS_FILTERS: { tag: OsTag; label: string; icon: typeof Monitor }[] = [
  { tag: 'Windows',  label: 'Windows',      icon: Monitor },
  { tag: 'Mac',      label: 'Mac',          icon: Apple },
  { tag: 'iOS',      label: 'iPhone / iPad', icon: Smartphone },
  { tag: 'Android',  label: 'Android',      icon: Tablet },
  { tag: 'Any',      label: 'All devices',  icon: Globe },
];

const DIFFICULTY_FILTERS = ['Beginner', 'Intermediate', 'Advanced'] as const;

const ALL_CATEGORIES = Array.from(new Set(aggregatedArticles.map(a => a.category))).sort();

// ── Component ──────────────────────────────────────────────────────────────────

export default function Articles() {
  const [search, setSearch] = useState('');
  const [selectedOs, setSelectedOs] = useState<OsTag | null>(null);
  const [selectedDifficulty, setSelectedDifficulty] = useState<string | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [selectedSource, setSelectedSource] = useState<string | null>(null);

  const featuredArticles = useMemo(
    () => aggregatedArticles.filter(a => a.featured),
    [],
  );

  const filteredArticles = useMemo(() => {
    const q = search.toLowerCase();
    return aggregatedArticles.filter((article) => {
      if (q && !article.title.toLowerCase().includes(q) && !article.excerpt.toLowerCase().includes(q) && !article.category.toLowerCase().includes(q)) return false;
      if (selectedOs && !article.osTags.includes(selectedOs) && !article.osTags.includes('Any')) return false;
      if (selectedDifficulty && article.difficulty !== selectedDifficulty) return false;
      if (selectedCategory && article.category !== selectedCategory) return false;
      if (selectedSource && article.sourceId !== selectedSource) return false;
      return true;
    });
  }, [search, selectedOs, selectedDifficulty, selectedCategory, selectedSource]);

  const hasFilters = search || selectedOs || selectedDifficulty || selectedCategory || selectedSource;

  function clearFilters() {
    setSearch('');
    setSelectedOs(null);
    setSelectedDifficulty(null);
    setSelectedCategory(null);
    setSelectedSource(null);
  }

  return (
    <>
      <SEOHead
        title="Simplified Tech Articles — TekSure"
        description="Plain-language tech guides simplified from trusted sources like Apple, Google, Microsoft, AARP, and more. Easy to follow, no jargon."
        path="/articles"
      />
      <Navbar />

      <main id="main-content" className="min-h-screen bg-background pb-16">
        {/* ── Hero ────────────────────────────────────────────────── */}
        <div className="bg-gradient-to-b from-primary/5 to-transparent border-b border-border">
          <div className="max-w-5xl mx-auto px-4 py-10 sm:py-14 text-center">
            <p className="text-xs font-semibold uppercase tracking-widest text-primary mb-3">Simplified from trusted sources</p>
            <h1 className="text-3xl sm:text-4xl font-bold text-foreground mb-3">Tech Help, Plain and Simple</h1>
            <p className="text-muted-foreground text-base max-w-xl mx-auto leading-relaxed">
              We take official guides from Apple, Google, Microsoft, and other trusted sources and rewrite them in everyday language — no jargon, just clear steps.
            </p>
            <p className="text-xs text-muted-foreground mt-3">
              <Link to="/sources" className="underline underline-offset-2 hover:text-foreground transition-colors">
                Learn about our content sources →
              </Link>
            </p>
          </div>
        </div>

        <div className="max-w-5xl mx-auto px-4 pt-8">
          {/* ── Search + filters ─────────────────────────────────── */}
          <div className="mb-8 space-y-4">
            {/* Search bar */}
            <div className="relative max-w-lg">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground pointer-events-none" aria-hidden="true" />
              <Input
                type="search"
                placeholder="Search articles…"
                className="pl-9"
                value={search}
                onChange={e => setSearch(e.target.value)}
                aria-label="Search articles"
              />
            </div>

            {/* Filter chips row */}
            <div className="flex flex-wrap gap-2 items-center">
              <span className="flex items-center gap-1 text-xs text-muted-foreground shrink-0">
                <Filter className="h-3 w-3" aria-hidden="true" />
                Filter:
              </span>

              {/* OS filters */}
              {OS_FILTERS.map(({ tag, label, icon: Icon }) => (
                <button
                  key={tag}
                  onClick={() => setSelectedOs(selectedOs === tag ? null : tag)}
                  className={`flex items-center gap-1.5 text-xs px-3 py-1.5 rounded-full border transition-colors ${
                    selectedOs === tag
                      ? 'bg-primary text-primary-foreground border-primary'
                      : 'bg-background text-foreground border-border hover:border-primary/40'
                  }`}
                  aria-pressed={selectedOs === tag}
                  aria-label={`Filter by ${label}`}
                >
                  <Icon className="h-3 w-3" aria-hidden="true" />
                  {label}
                </button>
              ))}

              {/* Difficulty filters */}
              {DIFFICULTY_FILTERS.map((diff) => (
                <button
                  key={diff}
                  onClick={() => setSelectedDifficulty(selectedDifficulty === diff ? null : diff)}
                  className={`text-xs px-3 py-1.5 rounded-full border transition-colors ${
                    selectedDifficulty === diff
                      ? 'bg-primary text-primary-foreground border-primary'
                      : 'bg-background text-foreground border-border hover:border-primary/40'
                  }`}
                  aria-pressed={selectedDifficulty === diff}
                  aria-label={`Filter by ${diff} difficulty`}
                >
                  {diff}
                </button>
              ))}

              {/* Category select */}
              <select
                value={selectedCategory ?? ''}
                onChange={e => setSelectedCategory(e.target.value || null)}
                className="text-xs px-3 py-1.5 rounded-full border border-border bg-background text-foreground transition-colors hover:border-primary/40 focus:outline-none focus:ring-1 focus:ring-primary"
                aria-label="Filter by category"
              >
                <option value="">All categories</option>
                {ALL_CATEGORIES.map(cat => (
                  <option key={cat} value={cat}>{cat}</option>
                ))}
              </select>

              {/* Source select */}
              <select
                value={selectedSource ?? ''}
                onChange={e => setSelectedSource(e.target.value || null)}
                className="text-xs px-3 py-1.5 rounded-full border border-border bg-background text-foreground transition-colors hover:border-primary/40 focus:outline-none focus:ring-1 focus:ring-primary"
                aria-label="Filter by source"
              >
                <option value="">All sources</option>
                {contentSources.map(s => (
                  <option key={s.id} value={s.id}>{s.name}</option>
                ))}
              </select>

              {/* Clear filters */}
              {hasFilters && (
                <Button variant="ghost" size="sm" onClick={clearFilters} className="text-xs h-7 px-2">
                  Clear filters
                </Button>
              )}
            </div>
          </div>

          {/* ── Featured articles (shown when no filter active) ─── */}
          {!hasFilters && (
            <section aria-labelledby="featured-heading" className="mb-10">
              <h2 id="featured-heading" className="text-lg font-bold text-foreground mb-4">
                Featured Articles
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {featuredArticles.map((article) => {
                  const source = getSourceById(article.sourceId);
                  if (!source) return null;
                  return (
                    <AggregatedArticleCard
                      key={article.slug}
                      article={article}
                      source={source}
                    />
                  );
                })}
              </div>
            </section>
          )}

          {/* ── All / filtered results ───────────────────────────── */}
          <section aria-labelledby="all-articles-heading">
            <div className="flex items-center justify-between mb-4">
              <h2 id="all-articles-heading" className="text-lg font-bold text-foreground">
                {hasFilters ? `Results (${filteredArticles.length})` : 'All Articles'}
              </h2>
            </div>

            {filteredArticles.length === 0 ? (
              <div className="text-center py-16 text-muted-foreground">
                <p className="text-4xl mb-4">🔍</p>
                <p className="font-medium mb-1">No articles found</p>
                <p className="text-sm">Try adjusting your search or filters.</p>
                <Button variant="outline" size="sm" className="mt-4" onClick={clearFilters}>
                  Clear filters
                </Button>
              </div>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {filteredArticles.map((article) => {
                  const source = getSourceById(article.sourceId);
                  if (!source) return null;
                  return (
                    <AggregatedArticleCard
                      key={article.slug}
                      article={article}
                      source={source}
                    />
                  );
                })}
              </div>
            )}
          </section>
        </div>
      </main>

      <Footer />
    </>
  );
}

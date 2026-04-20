import { useState, useMemo } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { Search, Clock } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { guides, categoryLabels, type GuideCategory } from '@/data/guides';
import { getGuideThumbnailUrl } from '@/lib/guideThumbnails';

const SUGGESTED_SEARCHES = [
  'WiFi problems', 'forgot password', 'slow computer', 'how to print',
  'email setup', 'video call', 'update Windows', 'back up my phone',
  'Alexa setup', 'scam', 'Medicare', 'Zelle', 'streaming', 'Bluetooth',
  'screenshot', 'new phone', 'privacy settings',
];

function SearchEmptyState({ query, onSuggest }: { query: string; onSuggest: (term: string) => void }) {
  return (
    <div className="text-center py-16 max-w-md mx-auto">
      <p className="text-4xl mb-4 select-none">🤷</p>
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
      <div className="flex flex-col sm:flex-row gap-3 justify-center text-sm">
        <Link to="/guides" className="text-primary hover:underline font-medium">
          Browse all guides →
        </Link>
        <Link to="/get-help" className="text-primary hover:underline font-medium">
          Talk to a real technician →
        </Link>
      </div>
    </div>
  );
}

const SearchResults = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const initialQuery = searchParams.get('q') || '';
  const [search, setSearch] = useState(initialQuery);
  const [activeTab, setActiveTab] = useState<'all' | GuideCategory>('all');

  const filtered = useMemo(() => {
    if (!search.trim()) return [];
    const q = search.toLowerCase();
    let results = guides.filter(g =>
      g.title.toLowerCase().includes(q) ||
      g.excerpt.toLowerCase().includes(q) ||
      g.tags.some(t => t.includes(q)) ||
      (g.body && g.body.toLowerCase().includes(q)) ||
      (g.steps && g.steps.some(s => s.title.toLowerCase().includes(q) || s.content.toLowerCase().includes(q)))
    );
    if (activeTab !== 'all') {
      results = results.filter(g => g.category === activeTab);
    }
    return results;
  }, [search, activeTab]);

  const handleSearch = (value: string) => {
    setSearch(value);
    setSearchParams(value ? { q: value } : {});
  };

  // Dynamically show only categories that have matching results
  const matchingCategories = useMemo(() => {
    if (!search.trim()) return [] as GuideCategory[];
    const q = search.toLowerCase();
    const allMatches = guides.filter(g =>
      g.title.toLowerCase().includes(q) ||
      g.excerpt.toLowerCase().includes(q) ||
      g.tags.some(t => t.includes(q)) ||
      (g.body && g.body.toLowerCase().includes(q)) ||
      (g.steps && g.steps.some(s => s.title.toLowerCase().includes(q) || s.content.toLowerCase().includes(q)))
    );
    const cats = [...new Set(allMatches.map(g => g.category))];
    return cats;
  }, [search]);

  const categories: ('all' | GuideCategory)[] = ['all', ...matchingCategories];

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead
        title={`Search: "${initialQuery}" | TekSure`}
        description={`Search results for "${initialQuery}" — find tech guides and solutions.`}
        path={`/search?q=${encodeURIComponent(initialQuery)}`}
      />
      <Navbar />

      <main className="container py-12 flex-1">
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
        </div>

        {search.trim() ? (
          <Tabs value={activeTab} onValueChange={v => setActiveTab(v as typeof activeTab)}>
            <TabsList className="mb-8 flex-wrap h-auto gap-1">
              {categories.map(cat => (
                <TabsTrigger key={cat} value={cat} className="capitalize rounded-xl">
                  {cat === 'all' ? `All (${filtered.length})` : categoryLabels[cat]}
                </TabsTrigger>
              ))}
            </TabsList>

            {categories.map(cat => (
              <TabsContent key={cat} value={cat}>
                {filtered.length === 0 ? (
                  <SearchEmptyState query={search} onSuggest={handleSearch} />
                ) : (
                  <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {filtered.map((guide, i) => (
                      <div
                        key={guide.slug}
                      >
                        <Link to={`/guides/${guide.slug}`}>
                          <Card className="h-full rounded-2xl border border-border bg-card hover:shadow-lg transition-all hover:-translate-y-1 group">
                            <CardContent className="pt-6">
                              <img src={getGuideThumbnailUrl(guide)} alt="" className="w-full h-28 rounded-lg object-cover mb-3" loading="lazy" decoding="async" width="600" height="400" />
                              <div className="flex items-center gap-2 mb-2">
                                <Badge variant="secondary" className="text-xs rounded-full">{categoryLabels[guide.category]}</Badge>
                                <span className="text-xs text-muted-foreground flex items-center gap-1">
                                  <Clock className="h-3 w-3" />{guide.readTime}
                                </span>
                              </div>
                              <h3 className="font-semibold text-sm mb-1 group-hover:text-primary transition-colors leading-snug line-clamp-2">
                                {guide.title}
                              </h3>
                              <p className="text-xs text-muted-foreground line-clamp-2">{guide.excerpt}</p>
                            </CardContent>
                          </Card>
                        </Link>
                      </div>
                    ))}
                  </div>
                )}
              </TabsContent>
            ))}
          </Tabs>
        ) : (
          <div className="text-center py-16 max-w-md mx-auto">
            <p className="text-4xl mb-4 select-none">🔎</p>
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
                  {term}
                </button>
              ))}
            </div>
          </div>
        )}
      </main>

      <Footer />
    </div>
  );
};

export default SearchResults;

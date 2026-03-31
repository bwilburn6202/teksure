import { useState, useMemo } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Search, Clock } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { guides, categoryLabels, type GuideCategory } from '@/data/guides';

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
      g.tags.some(t => t.includes(q))
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

  const categories: ('all' | GuideCategory)[] = ['all', 'windows-guides', 'mac-guides', 'essential-skills', 'tips-tricks', 'ai-guides'];

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
                  <div className="text-center py-16">
                    <p className="text-4xl mb-4">🔍</p>
                    <p className="text-lg font-medium mb-2 text-primary">No results for "{search}"</p>
                    <p className="text-muted-foreground">
                      Try different keywords or{' '}
                      <Link to="/quick-fixes" className="text-primary hover:underline">browse Quick Fixes</Link>
                    </p>
                  </div>
                ) : (
                  <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {filtered.map((guide, i) => (
                      <motion.div
                        key={guide.slug}
                        initial={{ opacity: 0, y: 15 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: Math.min(i * 0.04, 0.3) }}
                      >
                        <Link to={`/guides/${guide.slug}`}>
                          <Card className="h-full rounded-2xl border border-border bg-card hover:shadow-lg transition-all hover:-translate-y-1 group">
                            <CardContent className="pt-6">
                              <div className="text-3xl mb-3">{guide.thumbnailEmoji}</div>
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
                      </motion.div>
                    ))}
                  </div>
                )}
              </TabsContent>
            ))}
          </Tabs>
        ) : (
          <div className="text-center py-16">
            <p className="text-4xl mb-4">🔎</p>
            <p className="text-lg font-medium mb-2 text-primary">Type something to search</p>
            <p className="text-muted-foreground">Search through {guides.length}+ guides</p>
          </div>
        )}
      </main>

      <Footer />
    </div>
  );
};

export default SearchResults;

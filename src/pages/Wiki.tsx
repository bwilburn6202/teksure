import { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { Search, BookOpen, ArrowRight } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { wikiPages, categoryLabels, categoryColors, type WikiPage } from '@/data/wiki';

type CategoryFilter = 'all' | WikiPage['category'];

const filterTabs: { value: CategoryFilter; label: string }[] = [
  { value: 'all', label: 'All' },
  { value: 'concept', label: 'Concepts' },
  { value: 'entity', label: 'Entities' },
  { value: 'synthesis', label: 'Synthesis' },
];

function getExcerpt(content: string, maxLength = 100): string {
  // Strip markdown formatting and get plain text
  const plain = content
    .replace(/#{1,6}\s+/g, '')
    .replace(/\*\*([^*]+)\*\*/g, '$1')
    .replace(/\[([^\]]+)\]\([^)]+\)/g, '$1')
    .replace(/- \[ \]/g, '')
    .replace(/[*_~`]/g, '')
    .replace(/\n+/g, ' ')
    .trim();
  if (plain.length <= maxLength) return plain;
  return plain.slice(0, maxLength).replace(/\s+\S*$/, '') + '...';
}

const Wiki = () => {
  const [search, setSearch] = useState('');
  const [category, setCategory] = useState<CategoryFilter>('all');

  const filtered = useMemo(() => {
    let results = wikiPages;
    if (category !== 'all') {
      results = results.filter(p => p.category === category);
    }
    if (search.trim()) {
      const q = search.toLowerCase();
      results = results.filter(
        p =>
          p.title.toLowerCase().includes(q) ||
          p.tags.some(t => t.toLowerCase().includes(q))
      );
    }
    return results;
  }, [search, category]);

  return (
    <div className="min-h-screen bg-background">
      <SEOHead
        title="TekSure Wiki — Your Tech Knowledge Base"
        description="Browse our growing collection of plain-English tech articles. Learn about Wi-Fi, passwords, scam prevention, and more — written for real people, not tech experts."
        path="/wiki"
      />
      <Navbar />

      {/* Header */}
      <section className="border-b border-border">
        <div className="max-w-5xl mx-auto py-16 md:py-20 px-4 text-center">
          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary rounded-full px-4 py-1.5 text-sm font-medium mb-6">
            <BookOpen className="h-4 w-4" />
            Knowledge Base
          </div>
          <h1 className="text-3xl md:text-4xl font-bold tracking-tight mb-3">
            TekSure Wiki
          </h1>
          <p className="text-muted-foreground text-lg mb-8 max-w-2xl mx-auto">
            Your tech knowledge base — plain-English articles on the topics that matter most.
          </p>
          <div className="relative max-w-md mx-auto">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
            <Input
              placeholder="Search articles... (e.g. Wi-Fi, passwords, scams)"
              className="pl-10 h-11 text-base rounded-xl border-border"
              value={search}
              onChange={e => setSearch(e.target.value)}
            />
          </div>
        </div>
      </section>

      {/* Category filter tabs */}
      <div className="sticky top-16 z-40 bg-background border-b border-border">
        <div className="max-w-5xl mx-auto px-4 py-3">
          <div className="flex flex-wrap gap-2 justify-center">
            {filterTabs.map(tab => (
              <button
                key={tab.value}
                onClick={() => setCategory(tab.value)}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                  category === tab.value
                    ? 'bg-primary text-primary-foreground'
                    : 'bg-muted text-muted-foreground hover:bg-muted/80'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Wiki page grid */}
      <section className="py-12 md:py-16 px-4">
        <div className="max-w-5xl mx-auto">
          {filtered.length === 0 ? (
            <div className="text-center py-16">
              <p className="text-4xl mb-4">📚</p>
              <p className="text-lg font-medium mb-2">No articles found</p>
              <p className="text-muted-foreground">
                Try a different search term or category filter.
              </p>
            </div>
          ) : (
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {filtered.map(page => (
                <Link
                  key={page.slug}
                  to={`/wiki/${page.slug}`}
                  className="group rounded-2xl border border-border bg-card p-6 hover:border-primary/40 hover:shadow-md transition-all"
                >
                  <div className="flex items-start justify-between gap-2 mb-3">
                    <h2 className="text-lg font-semibold group-hover:text-primary transition-colors">
                      {page.title}
                    </h2>
                    <ArrowRight className="h-4 w-4 shrink-0 mt-1 text-muted-foreground group-hover:text-primary transition-colors" />
                  </div>
                  <span
                    className={`inline-block text-xs font-medium px-2.5 py-0.5 rounded-full mb-3 ${categoryColors[page.category]}`}
                  >
                    {categoryLabels[page.category]}
                  </span>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                    {getExcerpt(page.content)}
                  </p>
                  <div className="flex flex-wrap gap-1.5">
                    {page.tags.slice(0, 4).map(tag => (
                      <Badge key={tag} variant="outline" className="text-xs rounded-full">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </Link>
              ))}
            </div>
          )}
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Wiki;

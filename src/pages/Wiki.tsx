import { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { Search, BookOpen, ArrowRight, Star } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { wikiPages, categoryLabels, categoryColors, type WikiPage } from '@/data/wiki';

type CategoryFilter = 'all' | WikiPage['category'];

const filterTabs: { value: CategoryFilter; label: string }[] = [
  { value: 'all', label: 'All Topics' },
  { value: 'concept', label: 'How-To Guides' },
  { value: 'entity', label: 'Platforms & Services' },
  { value: 'synthesis', label: 'Learning Paths' },
];

/** Map first tag to a friendly emoji */
function getTagEmoji(tags: string[]): string {
  const first = tags[0]?.toLowerCase() ?? '';
  const emojiMap: Record<string, string> = {
    'wi-fi': '📶',
    internet: '🌐',
    passwords: '🔑',
    security: '🔒',
    scams: '🛡️',
    phishing: '🎣',
    safety: '🛡️',
    beginner: '🌱',
    'getting-started': '🚀',
    checklist: '✅',
    resources: '📚',
    help: '🤝',
    government: '🏛️',
    router: '📶',
    networking: '📶',
    accounts: '🔑',
    fraud: '🚨',
    learning: '📖',
    privacy: '🔐',
  };
  return emojiMap[first] || '📄';
}

/** Slugs for Popular Topics — hand-picked for usefulness to seniors */
const popularSlugs = [
  'wifi-networking',
  'password-security',
  'scam-prevention',
  'beginners-roadmap',
  'safety-checklist',
  'us-resources',
];

function getExcerpt(content: string, maxLength = 120): string {
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

  const popularPages = useMemo(
    () =>
      popularSlugs
        .map(s => wikiPages.find(p => p.slug === s))
        .filter(Boolean) as typeof wikiPages,
    []
  );

  const isSearching = search.trim() !== '' || category !== 'all';

  return (
    <div className="min-h-screen bg-background">
      <SEOHead
        title="Learn About Technology — TekSure"
        description="Plain-language guides to help you understand everyday technology. Learn about Wi-Fi, passwords, scam prevention, and more — written for real people, not tech experts."
        path="/wiki"
      />
      <Navbar />

      {/* Header */}
      <section className="border-b border-border">
        <div className="max-w-5xl mx-auto py-16 md:py-20 px-4 text-center">
          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary rounded-full px-4 py-1.5 text-sm font-medium mb-6">
            <BookOpen className="h-4 w-4" />
            Learning Center
          </div>
          <h1 className="text-3xl md:text-4xl font-bold tracking-tight mb-3">
            Learn About Technology
          </h1>
          <p className="text-muted-foreground text-lg md:text-xl mb-8 max-w-2xl mx-auto leading-relaxed">
            Plain-language guides to help you understand everyday technology. Pick a topic below.
          </p>
          <div className="relative max-w-lg mx-auto">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
            <Input
              placeholder="Search for a topic..."
              className="pl-12 min-h-[52px] text-lg rounded-xl border-border"
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
                className={`px-5 py-2.5 rounded-lg text-base font-medium transition-colors ${
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

      {/* Popular Topics — shown only when not searching/filtering */}
      {!isSearching && popularPages.length > 0 && (
        <section className="py-10 md:py-14 px-4 border-b border-border bg-muted/30">
          <div className="max-w-5xl mx-auto">
            <div className="flex items-center gap-2 mb-6">
              <Star className="h-5 w-5 text-amber-500" />
              <h2 className="text-xl md:text-2xl font-bold">Popular Topics</h2>
            </div>
            <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {popularPages.map(page => (
                <Link
                  key={page.slug}
                  to={`/wiki/${page.slug}`}
                  className="group flex items-center gap-4 rounded-2xl border border-border bg-card p-5 md:p-6 hover:border-primary/40 hover:shadow-md transition-all"
                >
                  <span className="text-3xl shrink-0">{getTagEmoji(page.tags)}</span>
                  <div className="min-w-0">
                    <h3 className="text-lg font-semibold group-hover:text-primary transition-colors leading-snug">
                      {page.title}
                    </h3>
                    <span
                      className={`inline-block text-xs font-medium px-2.5 py-0.5 rounded-full mt-1.5 ${categoryColors[page.category]}`}
                    >
                      {categoryLabels[page.category]}
                    </span>
                  </div>
                  <ArrowRight className="h-5 w-5 shrink-0 ml-auto text-muted-foreground group-hover:text-primary transition-colors" />
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Full topic grid */}
      <section className="py-12 md:py-16 px-4">
        <div className="max-w-5xl mx-auto">
          {!isSearching && (
            <h2 className="text-xl md:text-2xl font-bold mb-6">All Topics</h2>
          )}
          {filtered.length === 0 ? (
            <div className="text-center py-16">
              <p className="text-5xl mb-4">📚</p>
              <p className="text-xl font-medium mb-2">No topics found</p>
              <p className="text-muted-foreground text-base">
                Try a different search term or pick another category above.
              </p>
            </div>
          ) : (
            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {filtered.map(page => (
                <Link
                  key={page.slug}
                  to={`/wiki/${page.slug}`}
                  className="group rounded-2xl border border-border bg-card p-8 hover:border-primary/40 hover:shadow-md transition-all"
                >
                  <div className="flex items-start justify-between gap-3 mb-3">
                    <div className="flex items-start gap-3">
                      <span className="text-2xl shrink-0 mt-0.5">{getTagEmoji(page.tags)}</span>
                      <h2 className="text-xl font-semibold group-hover:text-primary transition-colors leading-snug">
                        {page.title}
                      </h2>
                    </div>
                    <ArrowRight className="h-5 w-5 shrink-0 mt-1 text-muted-foreground group-hover:text-primary transition-colors" />
                  </div>
                  <span
                    className={`inline-block text-xs font-medium px-2.5 py-0.5 rounded-full mb-3 ${categoryColors[page.category]}`}
                  >
                    {categoryLabels[page.category]}
                  </span>
                  <p className="text-base text-muted-foreground leading-relaxed mb-4">
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

import { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { Search, BookOpen, ArrowRight, Star, Database, Brain, RefreshCw, FileText, LinkIcon, Activity } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { wikiPages, categoryLabels, categoryColors, type WikiPage } from '@/data/wiki';
import { guides } from '@/data/guides';

type CategoryFilter = 'all' | WikiPage['category'];

const filterTabs: { value: CategoryFilter; label: string }[] = [
  { value: 'all', label: 'All Topics' },
  { value: 'concept', label: 'How-To Guides' },
  { value: 'entity', label: 'Platforms & Services' },
  { value: 'synthesis', label: 'Learning Paths' },
  { value: 'source', label: 'Source Indexes' },
];

/** Map first tag to a friendly emoji */
function getTagEmoji(tags: string[]): string {
  const first = tags[0]?.toLowerCase() ?? '';
  const emojiMap: Record<string, string> = {
    'wi-fi': '📶', internet: '🌐', passwords: '🔑', security: '🔒',
    scams: '🛡️', phishing: '🎣', safety: '🛡️', beginner: '🌱',
    'getting-started': '🚀', checklist: '✅', resources: '📚',
    help: '🤝', government: '🏛️', router: '📶', networking: '📶',
    accounts: '🔑', fraud: '🚨', learning: '📖', privacy: '🔐',
    banking: '🏦', smartphone: '📱', phone: '📱', 'digital-literacy': '🎓',
    email: '📧', shopping: '🛒', health: '🏥', accessibility: '♿',
    'social-media': '💬', 'smart-home': '🏠', streaming: '📺',
    cloud: '☁️', video: '📹', apple: '🍎', android: '🤖',
    windows: '🪟', google: '🔍', microsoft: '💠',
  };
  return emojiMap[first] || '📄';
}

/** Slugs for Popular Topics */
const popularSlugs = [
  'wifi-networking',
  'password-security',
  'scam-prevention',
  'smartphone-basics',
  'digital-literacy',
  'online-banking-safety',
];

function getExcerpt(content: string, maxLength = 120): string {
  const plain = content
    .replace(/#{1,6}\s+/g, '')
    .replace(/\*\*([^*]+)\*\*/g, '$1')
    .replace(/\[\[([^\]]+)\]\]/g, '$1')
    .replace(/\[([^\]]+)\]\([^)]+\)/g, '$1')
    .replace(/- \[ \]/g, '')
    .replace(/[*_~`]/g, '')
    .replace(/\n+/g, ' ')
    .trim();
  if (plain.length <= maxLength) return plain;
  return plain.slice(0, maxLength).replace(/\s+\S*$/, '') + '...';
}

/** Count cross-references across all wiki pages */
function countCrossLinks(): number {
  let count = 0;
  for (const page of wikiPages) {
    count += page.seeAlso.length;
    const wikilinks = page.content.match(/\[\[[^\]]+\]\]/g);
    if (wikilinks) count += wikilinks.length;
  }
  return count;
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
          p.tags.some(t => t.toLowerCase().includes(q)) ||
          p.content.toLowerCase().includes(q)
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

  // Knowledge base stats
  const stats = useMemo(() => ({
    wikiPages: wikiPages.length,
    guides: guides.length,
    crossLinks: countCrossLinks(),
    categories: new Set(wikiPages.map(p => p.category)).size,
  }), []);

  return (
    <div className="min-h-screen bg-background">
      <SEOHead
        title="Knowledge Base — TekSure"
        description="TekSure's AI-compiled knowledge base. Plain-language articles about technology, compiled from 780+ guides and authoritative sources. Always up to date, always growing."
        path="/wiki"
      />
      <Navbar />

      {/* Hero */}
      <section className="border-b border-border">
        <div className="max-w-5xl mx-auto py-16 md:py-20 px-4 text-center">
          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary rounded-full px-4 py-1.5 text-sm font-medium mb-6">
            <Brain className="h-4 w-4" />
            AI-Compiled Knowledge Base
          </div>
          <h1 className="text-3xl md:text-5xl font-bold tracking-tight mb-4">
            Everything We Know About Technology
          </h1>
          <p className="text-muted-foreground text-lg md:text-xl mb-4 max-w-3xl mx-auto leading-relaxed">
            {stats.wikiPages} articles compiled from {stats.guides}+ guides and authoritative sources like AARP, FTC, CISA, Apple Support, and Google Support. Written in plain language for real people.
          </p>
          <p className="text-muted-foreground text-base mb-8 max-w-2xl mx-auto">
            This knowledge base is maintained by AI — it reads new guides, connects related ideas, and keeps everything up to date automatically. Knowledge compounds over time.
          </p>
          <div className="relative max-w-lg mx-auto">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
            <Input
              placeholder="Search the knowledge base..."
              className="pl-12 min-h-[52px] text-lg rounded-xl border-border"
              value={search}
              onChange={e => setSearch(e.target.value)}
            />
          </div>
        </div>
      </section>

      {/* How It Works — Karpathy architecture explained in plain language */}
      {!isSearching && (
        <section className="py-10 md:py-14 px-4 border-b border-border bg-gradient-to-b from-muted/40 to-background">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-xl md:text-2xl font-bold mb-2 text-center">How This Knowledge Base Works</h2>
            <p className="text-center text-muted-foreground mb-8 max-w-2xl mx-auto">
              Inspired by AI researcher Andrej Karpathy's LLM Knowledge Base architecture — a system where AI compiles raw information into an organized, interlinked reference that grows smarter over time.
            </p>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              <Card className="border-blue-200 dark:border-blue-800/40 bg-blue-50/50 dark:bg-blue-950/20">
                <CardContent className="p-5 text-center">
                  <Database className="h-8 w-8 text-blue-600 dark:text-blue-400 mx-auto mb-3" />
                  <h3 className="font-semibold text-base mb-1">Ingest</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    We gather information from trusted sources — official support sites, government agencies, and expert publications.
                  </p>
                </CardContent>
              </Card>
              <Card className="border-purple-200 dark:border-purple-800/40 bg-purple-50/50 dark:bg-purple-950/20">
                <CardContent className="p-5 text-center">
                  <Brain className="h-8 w-8 text-purple-600 dark:text-purple-400 mx-auto mb-3" />
                  <h3 className="font-semibold text-base mb-1">Compile</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    AI reads all sources and writes organized articles — summarizing, connecting ideas, and explaining things in plain language.
                  </p>
                </CardContent>
              </Card>
              <Card className="border-green-200 dark:border-green-800/40 bg-green-50/50 dark:bg-green-950/20">
                <CardContent className="p-5 text-center">
                  <LinkIcon className="h-8 w-8 text-green-600 dark:text-green-400 mx-auto mb-3" />
                  <h3 className="font-semibold text-base mb-1">Cross-Link</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Every article links to related topics. {stats.crossLinks}+ connections help you explore naturally from one topic to the next.
                  </p>
                </CardContent>
              </Card>
              <Card className="border-amber-200 dark:border-amber-800/40 bg-amber-50/50 dark:bg-amber-950/20">
                <CardContent className="p-5 text-center">
                  <RefreshCw className="h-8 w-8 text-amber-600 dark:text-amber-400 mx-auto mb-3" />
                  <h3 className="font-semibold text-base mb-1">Maintain</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    AI regularly checks for outdated info, missing connections, and new topics to add. The knowledge base grows every week.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      )}

      {/* Stats bar */}
      {!isSearching && (
        <section className="py-6 px-4 border-b border-border">
          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-center">
              <div>
                <p className="text-2xl md:text-3xl font-bold text-primary">{stats.wikiPages}</p>
                <p className="text-sm text-muted-foreground">Wiki Articles</p>
              </div>
              <div>
                <p className="text-2xl md:text-3xl font-bold text-primary">{stats.guides}+</p>
                <p className="text-sm text-muted-foreground">Source Guides</p>
              </div>
              <div>
                <p className="text-2xl md:text-3xl font-bold text-primary">{stats.crossLinks}+</p>
                <p className="text-sm text-muted-foreground">Cross-Links</p>
              </div>
              <div>
                <p className="text-2xl md:text-3xl font-bold text-primary">{stats.categories}</p>
                <p className="text-sm text-muted-foreground">Categories</p>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Topic Clusters — MOC hub visualization (arscontexta-inspired) */}
      {!isSearching && (
        <section className="py-10 md:py-14 px-4 border-b border-border">
          <div className="max-w-5xl mx-auto">
            <div className="flex items-center justify-center gap-2 mb-2">
              <LinkIcon className="h-5 w-5 text-primary" />
              <h2 className="text-xl md:text-2xl font-bold">Topic Clusters</h2>
            </div>
            <p className="text-center text-muted-foreground mb-8 max-w-2xl mx-auto text-sm">
              Our knowledge is organized into interconnected clusters. Each hub connects to detailed articles, forming a navigable knowledge graph.
            </p>
            <div className="grid gap-4 sm:grid-cols-3">
              {wikiPages
                .filter(p => p.slug.startsWith('moc-'))
                .map(moc => (
                  <Link
                    key={moc.slug}
                    to={`/wiki/${moc.slug}`}
                    className="group relative rounded-2xl border-2 border-primary/20 bg-gradient-to-br from-primary/5 to-transparent p-6 hover:border-primary/50 hover:shadow-lg transition-all"
                  >
                    <div className="flex items-center gap-2 mb-3">
                      <span className="text-2xl">{getTagEmoji(moc.tags)}</span>
                      <h3 className="text-lg font-semibold group-hover:text-primary transition-colors">
                        {moc.title.replace('Map: ', '')}
                      </h3>
                    </div>
                    <div className="flex flex-wrap gap-1.5 mb-3">
                      {moc.seeAlso.slice(0, 4).map(slug => {
                        const linked = wikiPages.find(p => p.slug === slug);
                        return linked ? (
                          <span key={slug} className="text-xs bg-primary/10 text-primary px-2 py-0.5 rounded-full">
                            {linked.title.length > 20 ? linked.title.slice(0, 20) + '...' : linked.title}
                          </span>
                        ) : null;
                      })}
                      {moc.seeAlso.length > 4 && (
                        <span className="text-xs text-muted-foreground px-2 py-0.5">
                          +{moc.seeAlso.length - 4} more
                        </span>
                      )}
                    </div>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {getExcerpt(moc.content, 100)}
                    </p>
                    <ArrowRight className="absolute top-6 right-5 h-4 w-4 text-muted-foreground group-hover:text-primary transition-colors" />
                  </Link>
                ))}
            </div>
          </div>
        </section>
      )}

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
              <h2 className="text-xl md:text-2xl font-bold">Start Here</h2>
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
            <h2 className="text-xl md:text-2xl font-bold mb-6">All Articles</h2>
          )}
          {isSearching && (
            <p className="text-base text-muted-foreground mb-6">{filtered.length} article{filtered.length !== 1 ? 's' : ''} found</p>
          )}
          {filtered.length === 0 ? (
            <div className="text-center py-16">
              <p className="text-5xl mb-4">📚</p>
              <p className="text-xl font-medium mb-2">No articles found</p>
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
                    {page.seeAlso.length > 0 && (
                      <Badge variant="outline" className="text-xs rounded-full gap-1">
                        <LinkIcon className="h-3 w-3" />
                        {page.seeAlso.length} links
                      </Badge>
                    )}
                  </div>
                </Link>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Sources and methodology */}
      {!isSearching && (
        <section className="py-12 px-4 border-t border-border bg-muted/20">
          <div className="max-w-3xl mx-auto text-center">
            <Activity className="h-8 w-8 text-primary mx-auto mb-4" />
            <h2 className="text-xl md:text-2xl font-bold mb-3">Our Sources</h2>
            <p className="text-muted-foreground text-base leading-relaxed mb-6">
              Every article in this knowledge base is compiled from official, trusted sources. We never make things up or guess. All information comes from:
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              {['Apple Support', 'Google Support', 'Microsoft Support', 'AARP', 'FTC.gov', 'CISA.gov', 'How-To Geek', "Tom's Guide", 'GCFGlobal'].map(source => (
                <Badge key={source} variant="secondary" className="text-sm px-3 py-1.5 rounded-full">
                  {source}
                </Badge>
              ))}
            </div>
          </div>
        </section>
      )}

      <Footer />
    </div>
  );
};

export default Wiki;

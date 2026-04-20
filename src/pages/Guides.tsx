import { useState, useMemo, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Search, Monitor, Apple, Lightbulb, Sparkles, Bot, Clock, CheckCircle2, ShieldCheck, BookOpen, Phone, Heart, LayoutList, LayoutGrid, Wifi, CreditCard, Tv, MessageSquare, ArrowRightLeft, Globe, Landmark, EyeOff, Building2, ShoppingCart, Cpu, Wrench, Briefcase } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { guides, categoryLabels, categoryDescriptions, type GuideCategory } from '@/data/guides';
import { getCompletedGuides, getProgressCount } from '@/lib/progress';
import { getGuideThumbnailUrl, getGuideThumbnailSmall } from '@/lib/guideThumbnails';
import { StarRating } from '@/components/StarRating';
import { Progress } from '@/components/ui/progress';
import { Button } from '@/components/ui/button';

const categoryIcons: Record<string, typeof Monitor> = {
  'windows-guides': Monitor,
  'mac-guides': Apple,
  'essential-skills': Lightbulb,
  'tips-tricks': Sparkles,
  'ai-guides': Bot,
  'safety-guides': ShieldCheck,
  'how-to': BookOpen,
  'app-guides': Phone,
  'health-tech': Heart,
  'government-civic': Landmark,
  'financial-tech': CreditCard,
  'smart-home': Tv,
  'entertainment': Sparkles,
  'communication': MessageSquare,
  'life-transitions': ArrowRightLeft,
  'internet-connectivity': Wifi,
  'online-privacy': EyeOff,
  'online-banking': Building2,
  'buying-guides': ShoppingCart,
  'tech-explained': Cpu,
  'troubleshooting': Wrench,
  'work-from-home': Briefcase,
};

const GuideCard = ({ guide, completed }: { guide: typeof guides[0]; completed?: boolean }) => {
  const [imgError, setImgError] = useState(false);
  return (
  <Link to={`/guides/${guide.slug}`} className="group block h-full">
    <div className={`rounded-2xl border h-full transition-all hover:shadow-md overflow-hidden ${
      completed ? 'border-green-500/30 bg-green-50/50 dark:bg-green-950/20' : 'border-border bg-card'
    }`}>
      <div className="relative h-36 overflow-hidden bg-muted">
        {imgError ? (
          <div className="w-full h-full flex items-center justify-center text-4xl select-none" aria-hidden="true">
            {guide.thumbnailEmoji}
          </div>
        ) : (
        <img
          src={getGuideThumbnailUrl(guide)}
          alt={guide.title}
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
          loading="lazy"
          onError={() => setImgError(true)}
        />
        )}
        {completed && (
          <div className="absolute top-2 right-2 bg-green-500 text-white rounded-full p-1">
            <CheckCircle2 className="h-3.5 w-3.5" />
          </div>
        )}
        {guide.difficulty && (
          <span className={`absolute top-2 left-2 text-xs font-semibold px-2 py-0.5 rounded-full ${
            guide.difficulty === 'Beginner' ? 'bg-green-100 text-green-700 dark:bg-green-900/80 dark:text-green-300' :
            guide.difficulty === 'Intermediate' ? 'bg-amber-100 text-amber-700 dark:bg-amber-900/80 dark:text-amber-300' :
            'bg-red-100 text-red-700 dark:bg-red-900/80 dark:text-red-300'
          }`}>
            {guide.difficulty}
          </span>
        )}
      </div>
      <div className="p-4">
        <div className="flex items-center gap-2 mb-2 flex-wrap">
          <Badge variant="secondary" className="text-xs font-medium">
            {categoryLabels[guide.category]}
          </Badge>
          {guide.verifiedHelpful && (
            <Badge variant="outline" className="text-xs border-green-500/50 text-green-600 dark:text-green-400 gap-1">
              <CheckCircle2 className="h-2.5 w-2.5" /> Verified Helpful
            </Badge>
          )}
          <span className="flex items-center gap-1 text-xs text-muted-foreground">
            <Clock className="h-2.5 w-2.5" /> {guide.readTime}
          </span>
        </div>
        <h3 className="font-semibold text-sm mb-1.5 group-hover:text-primary transition-colors leading-snug line-clamp-2">
          {guide.title}
        </h3>
        <p className="text-sm text-foreground/70 line-clamp-2 leading-relaxed">{guide.excerpt}</p>
        <div className="mt-2.5">
          <StarRating guideSlug={guide.slug} readOnly size="sm" />
        </div>
      </div>
    </div>
  </Link>
  );
};

const GuideListItem = ({ guide, completed }: { guide: typeof guides[0]; completed?: boolean }) => (
  <Link to={`/guides/${guide.slug}`} className="group block">
    <div className={`flex items-center gap-3 px-3 py-2.5 min-h-[44px] border-b border-border hover:bg-accent/50 transition-colors ${
      completed ? 'bg-green-50/50 dark:bg-green-950/10' : ''
    }`}>
      <img
        src={getGuideThumbnailSmall(guide)}
        alt={guide.title}
        className="w-8 h-8 rounded-md object-cover shrink-0"
        loading="lazy"
        onError={(e) => { (e.target as HTMLImageElement).style.display = 'none'; }}
      />
      <div className="flex-1 min-w-0">
        <p className="text-sm font-medium group-hover:text-primary transition-colors truncate">{guide.title}</p>
      </div>
      <Badge variant="secondary" className="text-xs font-medium shrink-0 hidden sm:inline-flex">
        {categoryLabels[guide.category]}
      </Badge>
      <span aria-label={guide.difficulty ?? ''} className={`text-xs font-medium shrink-0 hidden md:inline ${
        guide.difficulty === 'Beginner' ? 'text-green-600' :
        guide.difficulty === 'Intermediate' ? 'text-amber-600' : 'text-red-500'
      }`}>
        <span aria-hidden="true">{guide.difficulty === 'Beginner' ? '●' : guide.difficulty === 'Intermediate' ? '●●' : '●●●'}</span>
      </span>
      <span className="text-xs text-muted-foreground shrink-0 w-12 text-right">{guide.readTime}</span>
      {completed && <CheckCircle2 className="h-3.5 w-3.5 text-green-500 shrink-0" />}
    </div>
  </Link>
);


const POPULAR_SEARCHES = ['WiFi not working', 'forgot password', 'how to print', 'update Windows', 'slow computer'];

function GuidesEmptyState({
  search,
  activeTab,
  onClear,
  onSearch,
}: {
  search: string;
  activeTab: string;
  onClear: () => void;
  onSearch: (term: string) => void;
}) {
  if (search.trim() && activeTab !== 'all') {
    return (
      <div className="text-center py-20 max-w-md mx-auto">
        <p className="text-4xl mb-4 select-none">🔍</p>
        <h2 className="text-lg font-semibold mb-2">
          No guides found for "{search}" in {categoryLabels[activeTab as GuideCategory]}
        </h2>
        <p className="text-sm text-muted-foreground mb-6">
          Try searching in all categories, or use a different word.
        </p>
        <button
          onClick={onClear}
          className="inline-flex items-center gap-2 rounded-xl bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground hover:bg-primary/90 transition-colors"
        >
          Show all guides
        </button>
      </div>
    );
  }

  if (search.trim()) {
    return (
      <div className="text-center py-20 max-w-md mx-auto">
        <p className="text-4xl mb-4 select-none">🤷</p>
        <h2 className="text-lg font-semibold mb-2">
          No guides matched "{search}"
        </h2>
        <p className="text-sm text-muted-foreground mb-6">
          Try using a simpler word, or pick one of these popular topics:
        </p>
        <div className="flex flex-wrap justify-center gap-2 mb-6">
          {POPULAR_SEARCHES.map(term => (
            <button
              key={term}
              onClick={() => onSearch(term)}
              className="rounded-full border border-border bg-muted px-3 py-1 text-xs font-medium hover:bg-primary/10 hover:border-primary/30 transition-colors"
            >
              {term}
            </button>
          ))}
        </div>
        <button
          onClick={onClear}
          className="text-sm text-primary hover:underline font-medium"
        >
          Clear search and browse all guides
        </button>
      </div>
    );
  }

  // Category tab selected but no guides in it
  return (
    <div className="text-center py-20 max-w-md mx-auto">
      <p className="text-4xl mb-4 select-none">📂</p>
      <h2 className="text-lg font-semibold mb-2">No guides in this category yet</h2>
      <p className="text-sm text-muted-foreground mb-6">
        We're always adding new content. In the meantime, you can browse all our guides.
      </p>
      <button
        onClick={onClear}
        className="inline-flex items-center gap-2 rounded-xl bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground hover:bg-primary/90 transition-colors"
      >
        Browse all guides
      </button>
    </div>
  );
}

const Guides = () => {
  const [search, setSearch] = useState('');
  const [activeTab, setActiveTab] = useState<'all' | GuideCategory>('all');
  const [completedSlugs, setCompletedSlugs] = useState<Set<string>>(() => getCompletedGuides());
  const [difficultyFilter, setDifficultyFilter] = useState<'all' | 'Beginner' | 'Intermediate' | 'Advanced'>('all');
  const [viewMode, setViewMode] = useState<'list' | 'grid'>(() => {
    if (typeof window === 'undefined') return 'list';
    try { return (localStorage.getItem('teksure-guides-view') as 'list' | 'grid') || 'list'; } catch { return 'list'; }
  });
  const toggleView = (mode: 'list' | 'grid') => {
    setViewMode(mode);
    try { localStorage.setItem('teksure-guides-view', mode); } catch {}
  };

  useEffect(() => {
    // Check URL params for category
    const params = new URLSearchParams(window.location.search);
    const cat = params.get('category') as GuideCategory | null;
    const q = params.get('q');
    if (cat && categoryLabels[cat]) setActiveTab(cat);
    if (q) setSearch(q);
  }, []);

  useEffect(() => {
    const handleUpdate = () => setCompletedSlugs(getCompletedGuides());
    window.addEventListener('teksure-progress-update', handleUpdate);
    return () => window.removeEventListener('teksure-progress-update', handleUpdate);
  }, []);

  const allSlugs = useMemo(() => guides.map(g => g.slug), []);
  const progressStats = useMemo(() => getProgressCount(allSlugs), [allSlugs]);

  const filtered = useMemo(() => {
    let results = guides;
    if (activeTab !== 'all') results = results.filter(g => g.category === activeTab);
    if (difficultyFilter !== 'all') results = results.filter(g => g.difficulty === difficultyFilter);
    if (search.trim()) {
      const q = search.toLowerCase();
      results = results.filter(g =>
        g.title.toLowerCase().includes(q) ||
        g.excerpt.toLowerCase().includes(q) ||
        g.tags.some(t => t.includes(q)) ||
        (g.body && g.body.toLowerCase().includes(q)) ||
        (g.steps && g.steps.some(s => s.title.toLowerCase().includes(q) || s.content.toLowerCase().includes(q)))
      );
    }
    return results;
  }, [search, activeTab, difficultyFilter]);

  const categories = Object.keys(categoryLabels) as GuideCategory[];

  return (
    <div className="min-h-screen bg-background">
      <SEOHead
        title="Free Tech Guides for Beginners | TekSure"
        description="Browse 1,000+ free step-by-step tech guides for Windows, Mac, iPhone, Android, safety, and everyday apps. Written in plain language for beginners."
        path="/guides"
        jsonLd={{
          '@context': 'https://schema.org',
          '@type': 'CollectionPage',
          name: 'TekSure Technology Guides',
          description: 'Free step-by-step technology guides written in plain language for everyday people.',
          url: 'https://teksure.com/guides',
          isPartOf: { '@type': 'WebSite', name: 'TekSure', url: 'https://teksure.com' },
          numberOfItems: guides.length,
        }}
      />
      <Navbar />

      {/* Header */}
      <section className="border-b">
        <div className="container py-14 md:py-20">
          <div className="max-w-2xl mx-auto text-center">
            <h1 className="text-3xl md:text-4xl font-bold tracking-tight mb-3">
              Guides & Tutorials
            </h1>
            <p className="text-muted-foreground text-lg mb-8">
              {guides.length}+ free step-by-step guides. No jargon, just answers.
            </p>
            <div className="relative max-w-md mx-auto">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground/60" />
              <Input
                placeholder="Search guides..."
                aria-label="Search guides"
                className="pl-11 h-12 bg-card border-border/60 rounded-2xl text-sm shadow-sm focus:border-primary/40 focus:shadow-md focus:shadow-primary/[0.06] transition-all"
                value={search}
                onChange={e => setSearch(e.target.value)}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Progress banner */}
      {progressStats.completed > 0 && (
        <div className="container mt-6">
          <div className="flex items-center gap-3 p-3 rounded-xl bg-green-50 dark:bg-green-950/20 border border-green-200 dark:border-green-900">
            <CheckCircle2 className="h-4 w-4 text-green-600 shrink-0" />
            <div className="flex-1 min-w-0">
              <p className="text-xs font-medium text-green-700 dark:text-green-400">
                {progressStats.completed} of {progressStats.total} completed
              </p>
              <Progress value={progressStats.pct} className="h-1 mt-1 bg-green-200 dark:bg-green-900" />
            </div>
            <span className="text-xs font-bold text-green-600 dark:text-green-400">{progressStats.pct}%</span>
          </div>
        </div>
      )}

      {/* Main content */}
      <section className="container py-8 pb-20">
        <Tabs value={activeTab} onValueChange={v => setActiveTab(v as typeof activeTab)}>
          <div className="flex items-center gap-4 mb-8 overflow-x-auto pb-2 no-scrollbar">
            <TabsList className="h-auto gap-1 bg-transparent p-0 flex-wrap">
              <TabsTrigger
                value="all"
                className="text-xs rounded-full px-3 py-1.5 min-h-[44px] data-[state=active]:bg-foreground data-[state=active]:text-background"
              >
                All ({guides.length})
              </TabsTrigger>
              {categories.map(cat => {
                const count = guides.filter(g => g.category === cat).length;
                return (
                  <TabsTrigger
                    key={cat}
                    value={cat}
                    className="text-xs rounded-full px-3 py-1.5 min-h-[44px] data-[state=active]:bg-foreground data-[state=active]:text-background"
                  >
                    {categoryLabels[cat]} ({count})
                  </TabsTrigger>
                );
              })}
            </TabsList>
          </div>

          {/* Difficulty filter */}
          <div className="flex items-center gap-2 mb-6">
            <span className="text-xs text-muted-foreground font-medium">Difficulty:</span>
            {(['all', 'Beginner', 'Intermediate', 'Advanced'] as const).map(level => (
              <button
                key={level}
                onClick={() => setDifficultyFilter(level)}
                className={`text-xs px-3 py-1.5 rounded-full border transition-all min-h-[44px] ${
                  difficultyFilter === level
                    ? level === 'Beginner' ? 'bg-green-100 border-green-300 text-green-700 dark:bg-green-900/30 dark:border-green-700 dark:text-green-300'
                    : level === 'Intermediate' ? 'bg-amber-100 border-amber-300 text-amber-700 dark:bg-amber-900/30 dark:border-amber-700 dark:text-amber-300'
                    : level === 'Advanced' ? 'bg-red-100 border-red-300 text-red-700 dark:bg-red-900/30 dark:border-red-700 dark:text-red-300'
                    : 'bg-foreground text-background border-foreground'
                    : 'border-border hover:border-primary/30'
                }`}
              >
                {level === 'all' ? 'All Levels' : level}
              </button>
            ))}
          </div>

          <TabsContent value={activeTab} className="mt-0">
            <div className="flex items-center justify-between mb-4">
              <div>
                {activeTab !== 'all' && categoryDescriptions[activeTab as GuideCategory] && (
                  <p className="text-sm text-muted-foreground">{categoryDescriptions[activeTab as GuideCategory]}</p>
                )}
              </div>
              <div className="flex items-center gap-1 border rounded-lg p-0.5">
                <button
                  onClick={() => toggleView('list')}
                  className={`p-2.5 rounded-md transition-colors ${viewMode === 'list' ? 'bg-foreground text-background' : 'text-muted-foreground hover:text-foreground'}`}
                  aria-label="List view"
                  aria-pressed={viewMode === 'list'}
                >
                  <LayoutList className="h-4 w-4" />
                </button>
                <button
                  onClick={() => toggleView('grid')}
                  className={`p-2.5 rounded-md transition-colors ${viewMode === 'grid' ? 'bg-foreground text-background' : 'text-muted-foreground hover:text-foreground'}`}
                  aria-label="Grid view"
                  aria-pressed={viewMode === 'grid'}
                >
                  <LayoutGrid className="h-4 w-4" />
                </button>
              </div>
            </div>

            {filtered.length === 0 ? (
              <GuidesEmptyState search={search} activeTab={activeTab} onClear={() => { setSearch(''); setActiveTab('all'); }} onSearch={setSearch} />
            ) : viewMode === 'list' ? (
              <div className="border rounded-xl overflow-hidden">
                {filtered.map((guide) => (
                  <GuideListItem key={guide.slug} guide={guide} completed={completedSlugs.has(guide.slug)} />
                ))}
              </div>
            ) : (
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {filtered.map((guide, i) => (
                  <div key={guide.slug}>
                    <GuideCard guide={guide} completed={completedSlugs.has(guide.slug)} />
                  </div>
                ))}
              </div>
            )}
          </TabsContent>
        </Tabs>

        {/* CTA */}
        <div className="mt-16 text-center p-10 rounded-2xl bg-muted/50 border border-border">
          <h2 className="text-xl font-bold mb-2">Can't find what you need?</h2>
          <p className="text-sm text-muted-foreground mb-5 max-w-sm mx-auto">
            Our verified technicians are ready to help with any tech issue.
          </p>
          <Button asChild className="gap-2 rounded-xl">
            <Link to="/get-help"><Phone className="h-4 w-4" /> Get Help</Link>
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Guides;

import { useState, useMemo, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import {
  Search, Monitor, Apple, Lightbulb, Sparkles, Bot, Clock, CheckCircle2,
  ShieldCheck, BookOpen, Phone, Heart, Wifi, CreditCard, Tv, MessageSquare,
  ArrowRightLeft, Landmark, ArrowRight, ArrowLeft, Flame, TrendingUp, Star,
  GraduationCap, MessageCircle, Brain, Shield, KeyRound, Video, PiggyBank, Home,
  type LucideIcon,
} from 'lucide-react';
import { GuideThumbnail } from '@/components/GuideThumbnail';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { guides, categoryLabels, categoryDescriptions, type Guide, type GuideCategory } from '@/data/guides';
import { getCompletedGuides, getProgressCount } from '@/lib/progress';

/* ══════════════════════════════════════════════════════════════════════
   Icon + color mapping per category
   ══════════════════════════════════════════════════════════════════════ */
const categoryIcons: Record<GuideCategory, typeof Monitor> = {
  'windows-guides': Monitor,
  'mac-guides': Apple,
  'essential-skills': Lightbulb,
  'tips-tricks': Sparkles,
  'ai-guides': Bot,
  'ai-advanced': Bot,
  'safety-guides': ShieldCheck,
  'how-to': BookOpen,
  'app-guides': Phone,
  'phone-guides': Phone,
  'social-media': MessageSquare,
  'health-tech': Heart,
  'government-civic': Landmark,
  'financial-tech': CreditCard,
  'smart-home': Tv,
  'entertainment': Sparkles,
  'communication': MessageSquare,
  'life-transitions': ArrowRightLeft,
  'internet-connectivity': Wifi,
};

const categoryTints: Record<GuideCategory, string> = {
  'windows-guides':        'from-sky-100 to-sky-50 dark:from-sky-950/40 dark:to-sky-950/10',
  'mac-guides':            'from-slate-100 to-slate-50 dark:from-slate-800/40 dark:to-slate-900/10',
  'essential-skills':      'from-amber-100 to-amber-50 dark:from-amber-950/40 dark:to-amber-950/10',
  'tips-tricks':           'from-violet-100 to-violet-50 dark:from-violet-950/40 dark:to-violet-950/10',
  'ai-guides':             'from-fuchsia-100 to-fuchsia-50 dark:from-fuchsia-950/40 dark:to-fuchsia-950/10',
  'ai-advanced':           'from-fuchsia-100 to-fuchsia-50 dark:from-fuchsia-950/40 dark:to-fuchsia-950/10',
  'safety-guides':         'from-red-100 to-red-50 dark:from-red-950/40 dark:to-red-950/10',
  'how-to':                'from-blue-100 to-blue-50 dark:from-blue-950/40 dark:to-blue-950/10',
  'app-guides':            'from-emerald-100 to-emerald-50 dark:from-emerald-950/40 dark:to-emerald-950/10',
  'phone-guides':          'from-emerald-100 to-emerald-50 dark:from-emerald-950/40 dark:to-emerald-950/10',
  'social-media':          'from-pink-100 to-pink-50 dark:from-pink-950/40 dark:to-pink-950/10',
  'health-tech':           'from-rose-100 to-rose-50 dark:from-rose-950/40 dark:to-rose-950/10',
  'government-civic':      'from-indigo-100 to-indigo-50 dark:from-indigo-950/40 dark:to-indigo-950/10',
  'financial-tech':        'from-green-100 to-green-50 dark:from-green-950/40 dark:to-green-950/10',
  'smart-home':            'from-teal-100 to-teal-50 dark:from-teal-950/40 dark:to-teal-950/10',
  'entertainment':         'from-purple-100 to-purple-50 dark:from-purple-950/40 dark:to-purple-950/10',
  'communication':         'from-cyan-100 to-cyan-50 dark:from-cyan-950/40 dark:to-cyan-950/10',
  'life-transitions':      'from-orange-100 to-orange-50 dark:from-orange-950/40 dark:to-orange-950/10',
  'internet-connectivity': 'from-sky-100 to-sky-50 dark:from-sky-950/40 dark:to-sky-950/10',
};

/* ══════════════════════════════════════════════════════════════════════
   Helpers
   ══════════════════════════════════════════════════════════════════════ */

/** Locate a guide that matches any of the preferred keywords (or a specific slug). */
function pickGuide(opts: { slug?: string; keywords?: string[]; category?: GuideCategory }): Guide | undefined {
  if (opts.slug) {
    const hit = guides.find(g => g.slug === opts.slug);
    if (hit) return hit;
  }
  if (opts.keywords?.length) {
    const kws = opts.keywords.map(k => k.toLowerCase());
    const strict = guides.find(g =>
      kws.every(k =>
        g.slug.includes(k) ||
        g.title.toLowerCase().includes(k) ||
        g.tags.some(t => t.toLowerCase().includes(k))
      )
    );
    if (strict) return strict;
    const loose = guides.find(g =>
      kws.some(k =>
        g.slug.includes(k) ||
        g.title.toLowerCase().includes(k) ||
        g.tags.some(t => t.toLowerCase().includes(k))
      )
    );
    if (loose) return loose;
  }
  if (opts.category) {
    return guides.find(g => g.category === opts.category);
  }
  return undefined;
}

/* ══════════════════════════════════════════════════════════════════════
   Featured slots — hand-picked topics
   ══════════════════════════════════════════════════════════════════════ */
type FeaturedSlot = {
  heading: string;
  blurb: string;
  Icon: LucideIcon;
  tint: string;
  keywords: string[];
  preferredSlug?: string;
};

const FEATURED_SLOTS: FeaturedSlot[] = [
  {
    heading: 'Scam Defense',
    blurb: 'Spot phony calls, texts, and emails before they trick you or someone you love.',
    Icon: Shield,
    tint: 'from-red-50 to-orange-50 dark:from-red-950/40 dark:to-orange-950/30',
    preferredSlug: 'social-media-safety',
    keywords: ['scam', 'phishing', 'spot'],
  },
  {
    heading: 'Password Managers',
    blurb: 'Let an app safely remember every password so you never lose another login.',
    Icon: KeyRound,
    tint: 'from-amber-50 to-yellow-50 dark:from-amber-950/40 dark:to-yellow-950/30',
    preferredSlug: 'create-strong-password',
    keywords: ['password', 'manager'],
  },
  {
    heading: 'Video Calling',
    blurb: 'See the grandkids on Zoom, FaceTime, or WhatsApp — with confidence.',
    Icon: Video,
    tint: 'from-sky-50 to-blue-50 dark:from-sky-950/40 dark:to-blue-950/30',
    preferredSlug: 'how-to-video-call-on-zoom',
    keywords: ['video', 'call'],
  },
  {
    heading: 'Online Banking',
    blurb: 'Check balances and pay bills from the couch — safely, in a few taps.',
    Icon: PiggyBank,
    tint: 'from-emerald-50 to-green-50 dark:from-emerald-950/40 dark:to-green-950/30',
    keywords: ['banking', 'online'],
  },
  {
    heading: 'Smart Home',
    blurb: 'Alexa, Nest, Ring — set them up once and enjoy a home that listens.',
    Icon: Home,
    tint: 'from-teal-50 to-cyan-50 dark:from-teal-950/40 dark:to-cyan-950/30',
    keywords: ['smart', 'home'],
  },
  {
    heading: 'Everyday AI',
    blurb: 'Use ChatGPT and friends like a patient, helpful assistant in your pocket.',
    Icon: Bot,
    tint: 'from-fuchsia-50 to-purple-50 dark:from-fuchsia-950/40 dark:to-purple-950/30',
    keywords: ['chatgpt', 'ai'],
  },
];

/* ══════════════════════════════════════════════════════════════════════
   Quick-pick chips
   ══════════════════════════════════════════════════════════════════════ */
type QuickPick = 'popular' | 'newest' | 'beginner' | 'helpful';
const QUICK_PICKS: { key: QuickPick; label: string; icon: typeof Flame }[] = [
  { key: 'popular',  label: 'Most popular', icon: Flame },
  { key: 'newest',   label: 'Newest',       icon: Sparkles },
  { key: 'beginner', label: 'Beginner',     icon: GraduationCap },
  { key: 'helpful',  label: 'Most helpful', icon: Star },
];

/* ══════════════════════════════════════════════════════════════════════
   Presentational cards
   ══════════════════════════════════════════════════════════════════════ */

function GuideCard({ guide, completed }: { guide: Guide; completed?: boolean }) {
  const diff = guide.difficulty;
  return (
    <Link
      to={`/guides/${guide.slug}`}
      className={`group block h-full rounded-2xl border-2 overflow-hidden transition-all hover:shadow-lg hover:-translate-y-0.5 ${
        completed
          ? 'border-green-500/50 bg-green-50/50 dark:bg-green-950/20'
          : 'border-border bg-card'
      }`}
    >
      <div className="p-5 flex flex-col h-full min-h-[44px]">
        <div className="flex items-start gap-3 mb-3">
          <GuideThumbnail category={guide.category} size="h-8 w-8" />
          <div className="flex-1 min-w-0">
            <h3 className="font-bold text-lg leading-snug group-hover:text-primary transition-colors line-clamp-2">
              {guide.title}
            </h3>
          </div>
          {completed && <CheckCircle2 className="h-5 w-5 text-green-500 shrink-0" aria-label="Completed" />}
        </div>
        <p className="text-base text-foreground/75 line-clamp-2 leading-relaxed mb-4 flex-1">
          {guide.excerpt}
        </p>
        <div className="flex items-center gap-2 flex-wrap mt-auto">
          {diff && (
            <span className={`text-sm font-semibold px-2.5 py-1 rounded-full ${
              diff === 'Beginner'     ? 'bg-green-100 text-green-800 dark:bg-green-900/40 dark:text-green-200'
              : diff === 'Intermediate' ? 'bg-amber-100 text-amber-800 dark:bg-amber-900/40 dark:text-amber-200'
              :                           'bg-red-100 text-red-800 dark:bg-red-900/40 dark:text-red-200'
            }`}>
              {diff}
            </span>
          )}
          <span className="inline-flex items-center gap-1 text-sm text-muted-foreground font-medium">
            <Clock className="h-4 w-4" /> {guide.readTime}
          </span>
          {guide.verifiedHelpful && (
            <Badge variant="outline" className="text-sm border-green-500/50 text-green-700 dark:text-green-300 gap-1">
              <CheckCircle2 className="h-3.5 w-3.5" /> Verified
            </Badge>
          )}
        </div>
      </div>
    </Link>
  );
}

function FeaturedCard({ slot }: { slot: FeaturedSlot }) {
  const guide = useMemo(
    () => pickGuide({ slug: slot.preferredSlug, keywords: slot.keywords }),
    [slot.preferredSlug, slot.keywords]
  );
  if (!guide) return null;
  return (
    <Link
      to={`/guides/${guide.slug}`}
      className={`group relative block rounded-3xl border-2 border-border bg-gradient-to-br ${slot.tint} p-6 md:p-7 transition-all hover:shadow-xl hover:-translate-y-0.5 min-h-[44px]`}
    >
      <div className="flex items-start gap-4">
        <span className="inline-flex items-center justify-center h-16 w-16 md:h-20 md:w-20 rounded-2xl bg-background/70 backdrop-blur shrink-0 shadow-sm" aria-hidden="true">
          <slot.Icon className="h-8 w-8 md:h-10 md:w-10 text-primary" />
        </span>
        <div className="flex-1 min-w-0">
          <p className="text-xs font-bold uppercase tracking-wider text-foreground/60 mb-1">
            Featured
          </p>
          <h3 className="font-bold text-xl md:text-2xl leading-tight mb-2 group-hover:text-primary transition-colors">
            {slot.heading}
          </h3>
          <p className="text-base text-foreground/80 leading-relaxed mb-3">
            {slot.blurb}
          </p>
          <p className="text-base font-medium text-foreground/90 mb-3 line-clamp-1">
            Start here: <span className="underline underline-offset-4 decoration-2">{guide.title}</span>
          </p>
          <span className="inline-flex items-center gap-1.5 text-base font-semibold text-primary">
            Read guide <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </span>
        </div>
      </div>
    </Link>
  );
}

function CategoryCard({ cat, topGuides, count }: { cat: GuideCategory; topGuides: Guide[]; count: number }) {
  const Icon = categoryIcons[cat] ?? BookOpen;
  const tint = categoryTints[cat] ?? 'from-amber-100 to-amber-50';
  return (
    <Link
      to={`/guides?category=${cat}`}
      className="group block rounded-3xl border-2 border-border bg-card overflow-hidden transition-all hover:shadow-lg hover:-translate-y-0.5 min-h-[44px]"
    >
      <div className={`bg-gradient-to-br ${tint} p-5 flex items-center gap-3 border-b-2 border-border`}>
        <div className="h-14 w-14 rounded-2xl bg-background/80 backdrop-blur flex items-center justify-center shrink-0 shadow-sm">
          <Icon className="h-7 w-7 text-foreground" />
        </div>
        <div className="flex-1 min-w-0">
          <h3 className="font-bold text-xl leading-tight group-hover:text-primary transition-colors">
            {categoryLabels[cat]}
          </h3>
          <p className="text-sm font-semibold text-foreground/60">
            {count} {count === 1 ? 'guide' : 'guides'}
          </p>
        </div>
      </div>
      <div className="p-5 space-y-2">
        {topGuides.slice(0, 3).map(g => (
          <div key={g.slug} className="flex items-start gap-2 text-base leading-snug">
            <ArrowRight className="h-4 w-4 mt-1 text-primary/70 shrink-0" aria-hidden="true" />
            <span className="line-clamp-1 text-foreground/80 group-hover:text-foreground transition-colors">
              {g.title}
            </span>
          </div>
        ))}
        <div className="pt-2 text-sm font-semibold text-primary inline-flex items-center gap-1">
          Browse all <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
        </div>
      </div>
    </Link>
  );
}

/* ══════════════════════════════════════════════════════════════════════
   Page
   ══════════════════════════════════════════════════════════════════════ */
const Guides = () => {
  const navigate = useNavigate();
  const [search, setSearch] = useState('');
  const [quickPick, setQuickPick] = useState<QuickPick>('popular');
  const [activeCategory, setActiveCategory] = useState<GuideCategory | null>(null);
  const [completedSlugs, setCompletedSlugs] = useState<Set<string>>(() => getCompletedGuides());

  // Pick up ?q= and ?category= URL params (links into the hub from elsewhere or category cards)
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const q = params.get('q');
    if (q) setSearch(q);
    const cat = params.get('category') as GuideCategory | null;
    if (cat && categoryLabels[cat]) setActiveCategory(cat);
  }, []);

  const clearCategory = () => {
    setActiveCategory(null);
    window.history.replaceState(null, '', '/guides');
  };

  const categoryGuides = useMemo(
    () => (activeCategory ? guides.filter(g => g.category === activeCategory) : []),
    [activeCategory]
  );

  useEffect(() => {
    const handleUpdate = () => setCompletedSlugs(getCompletedGuides());
    window.addEventListener('teksure-progress-update', handleUpdate);
    return () => window.removeEventListener('teksure-progress-update', handleUpdate);
  }, []);

  const allSlugs = useMemo(() => guides.map(g => g.slug), []);
  const progressStats = useMemo(() => getProgressCount(allSlugs), [allSlugs]);

  /* Category summaries for the grid — surfaces the 3 best guides per category as previews. */
  const categorySummaries = useMemo(() => {
    const cats = Object.keys(categoryLabels) as GuideCategory[];
    return cats
      .map(cat => {
        const inCat = guides.filter(g => g.category === cat);
        const top = [...inCat].sort((a, b) => {
          const av = a.verifiedHelpful ? 0 : 1;
          const bv = b.verifiedHelpful ? 0 : 1;
          if (av !== bv) return av - bv;
          const ab = a.difficulty === 'Beginner' ? 0 : 1;
          const bb = b.difficulty === 'Beginner' ? 0 : 1;
          return ab - bb;
        }).slice(0, 3);
        return { cat, count: inCat.length, top };
      })
      .filter(c => c.count > 0);
  }, []);

  /* Quick-pick list (driven by the chip above the grid). */
  const popularPicks = useMemo(() => {
    const base = [...guides];
    if (quickPick === 'newest') {
      return base
        .sort((a, b) => (b.publishedAt || '').localeCompare(a.publishedAt || ''))
        .slice(0, 6);
    }
    if (quickPick === 'beginner') {
      return base.filter(g => g.difficulty === 'Beginner').slice(0, 6);
    }
    if (quickPick === 'helpful') {
      return base.filter(g => g.verifiedHelpful).slice(0, 6);
    }
    // popular (default): verifiedHelpful first, then newest-first
    return base
      .sort((a, b) => {
        const av = a.verifiedHelpful ? 0 : 1;
        const bv = b.verifiedHelpful ? 0 : 1;
        if (av !== bv) return av - bv;
        return (b.publishedAt || '').localeCompare(a.publishedAt || '');
      })
      .slice(0, 6);
  }, [quickPick]);

  /* Trending this week — newest 6 guides published in the last 3 weeks. SSR-safe. */
  const trendingThisWeek = useMemo(() => {
    const threeWeeksMs = 21 * 24 * 60 * 60 * 1000;
    const cutoff = Date.now() - threeWeeksMs;
    const recent = guides.filter(g => {
      if (!g.publishedAt) return false;
      const t = Date.parse(g.publishedAt);
      return !Number.isNaN(t) && t >= cutoff;
    });
    const pool = recent.length >= 6 ? recent : [...guides];
    return pool
      .sort((a, b) => (b.publishedAt || '').localeCompare(a.publishedAt || ''))
      .slice(0, 6);
  }, []);

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const q = search.trim();
    if (q) navigate(`/search?q=${encodeURIComponent(q)}`);
  };

  return (
    <div id="main-content" className="min-h-screen bg-background">
      <SEOHead
        title={`Find a Guide for Anything | ${guides.length.toLocaleString()}+ Free Tech Guides | TekSure`}
        description={`Browse ${guides.length.toLocaleString()}+ free step-by-step tech guides for Windows, Mac, iPhone, Android, safety, banking, smart home, and everyday apps. Written in plain language for beginners.`}
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

      {/* ══════════════════════════════════════════
            HERO
         ══════════════════════════════════════════ */}
      <section className="relative overflow-hidden border-b border-border/40">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 opacity-40"
          style={{
            background:
              'radial-gradient(900px circle at 50% 0%, hsl(var(--primary) / 0.07), transparent 65%)',
          }}
        />
        <div className="container relative py-16 md:py-24">
          <div className="max-w-3xl mx-auto text-center">
            <p className="inline-flex items-center gap-2 rounded-full border-2 border-border bg-card/70 backdrop-blur px-4 py-1.5 text-sm font-semibold text-foreground/80 mb-6">
              <Sparkles className="h-4 w-4 text-emerald-600" />
              {guides.length.toLocaleString()} plain-English guides
            </p>
            <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight leading-[1.05] mb-5">
              Find a guide for{' '}
              <span className="text-gradient">
                anything
              </span>
            </h1>
            <p className="text-lg md:text-2xl text-foreground/80 mb-8 leading-relaxed">
              Written in plain language. No jargon. Ever.
            </p>

            <form onSubmit={handleSearchSubmit} className="relative max-w-2xl mx-auto">
              <label htmlFor="guides-search" className="sr-only">Search guides</label>
              <Search className="absolute left-5 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground pointer-events-none" />
              <Input
                id="guides-search"
                placeholder={`Search ${guides.length.toLocaleString()}+ guides...`}
                aria-label="Search guides"
                className="pl-14 pr-32 h-14 bg-card border-2 border-border rounded-2xl text-lg shadow-md focus:border-primary focus-visible:ring-2 focus-visible:ring-primary/20 transition-all"
                value={search}
                onChange={e => setSearch(e.target.value)}
              />
              <Button
                type="submit"
                className="absolute right-2 top-1/2 -translate-y-1/2 h-11 px-5 rounded-xl text-base font-semibold gap-1"
              >
                Search <ArrowRight className="h-4 w-4" />
              </Button>
            </form>

            <div className="flex flex-wrap justify-center gap-2 mt-6">
              {QUICK_PICKS.map(({ key, label, icon: Icon }) => {
                const active = quickPick === key;
                return (
                  <button
                    key={key}
                    onClick={() => setQuickPick(key)}
                    aria-pressed={active}
                    className={`inline-flex items-center gap-2 rounded-full border-2 px-4 py-2 text-base font-semibold min-h-[44px] transition-all ${
                      active
                        ? 'bg-foreground text-background border-foreground shadow-md'
                        : 'bg-card border-border hover:border-foreground/40 hover:bg-accent'
                    }`}
                  >
                    <Icon className="h-4 w-4" /> {label}
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Progress banner */}
      {progressStats.completed > 0 && (
        <div className="container mt-6">
          <div className="flex items-center gap-4 p-4 rounded-2xl bg-green-50 dark:bg-green-950/20 border-2 border-green-200 dark:border-green-900">
            <CheckCircle2 className="h-6 w-6 text-green-600 shrink-0" />
            <div className="flex-1 min-w-0">
              <p className="text-base font-semibold text-green-800 dark:text-green-300">
                You've completed {progressStats.completed} of {progressStats.total} guides — nicely done.
              </p>
              <Progress value={progressStats.pct} className="h-2 mt-2 bg-green-200 dark:bg-green-900" />
            </div>
            <span className="text-lg font-bold text-green-700 dark:text-green-300">{progressStats.pct}%</span>
          </div>
        </div>
      )}

      {/* ══════════════════════════════════════════
            CATEGORY VIEW (shown when ?category=X is set)
         ══════════════════════════════════════════ */}
      {activeCategory && (
        <section className="container py-12 md:py-16">
          <button
            onClick={clearCategory}
            className="inline-flex items-center gap-2 text-base font-semibold text-foreground/70 hover:text-foreground transition-colors mb-6 min-h-[44px]"
          >
            <ArrowLeft className="h-4 w-4" /> All guides
          </button>
          <div className="flex items-start gap-4 mb-8">
            {(() => {
              const Icon = categoryIcons[activeCategory] ?? BookOpen;
              return (
                <div className={`h-16 w-16 rounded-2xl bg-gradient-to-br ${categoryTints[activeCategory] ?? ''} border-2 border-border flex items-center justify-center shrink-0`}>
                  <Icon className="h-8 w-8 text-foreground" />
                </div>
              );
            })()}
            <div className="flex-1 min-w-0">
              <h2 className="text-2xl md:text-3xl font-bold tracking-tight mb-1">
                {categoryLabels[activeCategory]}
              </h2>
              <p className="text-lg text-muted-foreground">
                {categoryDescriptions[activeCategory]} · {categoryGuides.length} {categoryGuides.length === 1 ? 'guide' : 'guides'}
              </p>
            </div>
          </div>
          {categoryGuides.length === 0 ? (
            <div className="text-center py-16">
              <p className="text-5xl mb-4 select-none" aria-hidden="true"></p>
              <p className="text-lg text-muted-foreground">No guides in this category yet — check back soon.</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5">
              {categoryGuides.map(g => (
                <GuideCard key={g.slug} guide={g} completed={completedSlugs.has(g.slug)} />
              ))}
            </div>
          )}
        </section>
      )}

      {/* ══════════════════════════════════════════
            QUICK-PICK SECTION (driven by chip)
         ══════════════════════════════════════════ */}
      {!activeCategory && (
      <>
      <section className="container py-12 md:py-16">
        <div className="flex items-end justify-between gap-4 mb-6">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold tracking-tight">
              {quickPick === 'popular'  && 'Most popular right now'}
              {quickPick === 'newest'   && 'Just published'}
              {quickPick === 'beginner' && 'Great for beginners'}
              {quickPick === 'helpful'  && 'Most helpful — reader verified'}
            </h2>
            <p className="text-lg text-muted-foreground mt-1">
              Tap any chip above the search bar to swap the picks.
            </p>
          </div>
          <Link
            to="/search"
            className="hidden md:inline-flex items-center gap-1 text-base font-semibold text-primary hover:underline min-h-[44px]"
          >
            See all <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5">
          {popularPicks.map(g => (
            <GuideCard key={g.slug} guide={g} completed={completedSlugs.has(g.slug)} />
          ))}
        </div>
      </section>

      {/* ══════════════════════════════════════════
            FEATURED GUIDES (6 hand-picked topics)
         ══════════════════════════════════════════ */}
      <section className="bg-gradient-to-b from-background via-amber-50/40 to-background dark:via-amber-950/10 py-12 md:py-16 border-y-2 border-border">
        <div className="container">
          <div className="max-w-2xl mb-8 md:mb-10">
            <p className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-wider text-amber-700 dark:text-amber-400 mb-2">
              <Flame className="h-4 w-4" /> Featured
            </p>
            <h2 className="text-2xl md:text-3xl font-bold tracking-tight mb-2">
              Six topics worth your time
            </h2>
            <p className="text-lg text-muted-foreground">
              The guides readers come back to the most. Start anywhere.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-5">
            {FEATURED_SLOTS.map(slot => (
              <FeaturedCard key={slot.heading} slot={slot} />
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
            CATEGORY GRID
         ══════════════════════════════════════════ */}
      <section className="container py-12 md:py-16">
        <div className="max-w-2xl mb-8 md:mb-10">
          <h2 className="text-2xl md:text-3xl font-bold tracking-tight mb-2">
            Browse by topic
          </h2>
          <p className="text-lg text-muted-foreground">
            Pick a category that matches what you're trying to do today.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5">
          {categorySummaries.map(({ cat, top, count }) => (
            <CategoryCard key={cat} cat={cat} topGuides={top} count={count} />
          ))}
        </div>
      </section>

      {/* ══════════════════════════════════════════
            TRENDING THIS WEEK
         ══════════════════════════════════════════ */}
      <section className="bg-muted/40 border-y-2 border-border py-12 md:py-16">
        <div className="container">
          <div className="flex items-end justify-between gap-4 mb-6">
            <div>
              <p className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-wider text-rose-700 dark:text-rose-400 mb-2">
                <TrendingUp className="h-4 w-4" /> Trending this week
              </p>
              <h2 className="text-2xl md:text-3xl font-bold tracking-tight">
                Fresh from our writers
              </h2>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5">
            {trendingThisWeek.map(g => (
              <GuideCard key={g.slug} guide={g} completed={completedSlugs.has(g.slug)} />
            ))}
          </div>
        </div>
      </section>
      </>
      )}

      {/* ══════════════════════════════════════════
            BOTTOM CTA — Ask TekBrain
         ══════════════════════════════════════════ */}
      <section className="container py-16 md:py-20">
        <div className="relative overflow-hidden rounded-3xl border-2 border-border bg-gradient-to-br from-amber-100 via-orange-50 to-rose-100 dark:from-amber-950/40 dark:via-orange-950/30 dark:to-rose-950/40 p-8 md:p-12 text-center">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 opacity-60"
            style={{
              background:
                'radial-gradient(500px circle at 50% 0%, rgb(253 186 116 / 0.3), transparent 70%)',
            }}
          />
          <div className="relative">
            <div className="inline-flex items-center justify-center h-16 w-16 rounded-2xl bg-background/80 backdrop-blur shadow-md mb-4">
              <Brain className="h-8 w-8 text-amber-600" />
            </div>
            <h2 className="text-2xl md:text-4xl font-bold tracking-tight mb-3">
              Can't find what you need?
            </h2>
            <p className="text-lg md:text-xl text-foreground/80 max-w-xl mx-auto mb-8 leading-relaxed">
              Ask TekBrain — our friendly AI helper walks you through any tech problem, step by step, in plain language.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
              <Button asChild size="lg" className="h-14 text-lg px-8 rounded-2xl gap-2 shadow-md">
                <Link to="/tekbrain">
                  <Brain className="h-5 w-5" /> Ask TekBrain <ArrowRight className="h-5 w-5" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="h-14 text-lg px-8 rounded-2xl gap-2 border-2">
                <Link to="/get-help">
                  <MessageCircle className="h-5 w-5" /> Talk to a person
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Guides;

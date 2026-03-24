import { useState, useMemo, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Search, Monitor, Apple, Lightbulb, Sparkles, ArrowRight, Bot, Clock, CheckCircle2, ShieldCheck, BookOpen } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { guides, categoryLabels, categoryDescriptions, type GuideCategory } from '@/data/guides';
import { getCompletedGuides, getProgressCount } from '@/lib/progress';
import { StarRating } from '@/components/StarRating';
import { Progress } from '@/components/ui/progress';

const categoryIcons: Record<GuideCategory, typeof Monitor> = {
  'windows-guides': Monitor,
  'mac-guides': Apple,
  'essential-skills': Lightbulb,
  'tips-tricks': Sparkles,
  'ai-guides': Bot,
  'safety-guides': ShieldCheck,
  'how-to': BookOpen,
};

const difficultyConfig = {
  Beginner: { emoji: '🟢', className: 'border-[hsl(var(--teksure-success)/0.5)] text-[hsl(var(--teksure-success))]' },
  Intermediate: { emoji: '🟡', className: 'border-[hsl(var(--teksure-warning)/0.5)] text-[hsl(var(--teksure-warning))]' },
  Advanced: { emoji: '🔴', className: 'border-destructive/50 text-destructive' },
};

const GuideCard = ({ guide, completed }: { guide: typeof guides[0]; completed?: boolean }) => {
  const diff = guide.difficulty ? difficultyConfig[guide.difficulty] : null;
  return (
    <Link to={`/guides/${guide.slug}`}>
      <Card className={`h-full hover:shadow-lg transition-all hover:-translate-y-1 group relative ${completed ? 'border-green-500/30 bg-green-500/5 dark:bg-green-500/10' : ''}`}>
        {completed && (
          <div className="absolute top-3 right-3">
            <CheckCircle2 className="h-5 w-5 text-green-500" />
          </div>
        )}
        <CardContent className="pt-6">
          <div className="text-4xl mb-4">{guide.thumbnailEmoji}</div>
          <div className="flex items-center gap-2 mb-3 flex-wrap">
            <Badge variant="secondary" className="text-xs capitalize">
              {categoryLabels[guide.category]}
            </Badge>
            {diff && (
              <Badge variant="outline" className={`text-xs ${diff.className}`}>
                {diff.emoji} {guide.difficulty}
              </Badge>
            )}
            <span className="flex items-center gap-1 text-xs text-muted-foreground">
              <Clock className="h-3 w-3" /> {guide.readTime}
            </span>
          </div>
          <h3 className="font-semibold text-lg mb-2 group-hover:text-secondary transition-colors leading-snug">
            {guide.title}
          </h3>
          <p className="text-sm text-muted-foreground line-clamp-2">{guide.excerpt}</p>
          <div className="mt-2">
            <StarRating guideSlug={guide.slug} readOnly size="sm" />
          </div>
          <div className="flex flex-wrap gap-1.5 mt-3">
            {guide.tags.slice(0, 3).map(tag => (
              <span key={tag} className="text-xs px-2 py-0.5 rounded-full bg-muted text-muted-foreground">
                {tag}
              </span>
            ))}
          </div>
        </CardContent>
      </Card>
    </Link>
  );
};

const Guides = () => {
  const [search, setSearch] = useState('');
  const [activeTab, setActiveTab] = useState<'all' | GuideCategory>('all');
  const [completedSlugs, setCompletedSlugs] = useState<Set<string>>(() => getCompletedGuides());

  useEffect(() => {
    const handleUpdate = () => setCompletedSlugs(getCompletedGuides());
    window.addEventListener('teksure-progress-update', handleUpdate);
    return () => window.removeEventListener('teksure-progress-update', handleUpdate);
  }, []);

  const allSlugs = useMemo(() => guides.map(g => g.slug), []);
  const progressStats = getProgressCount(allSlugs);

  const filtered = useMemo(() => {
    let results = guides;
    if (activeTab !== 'all') {
      results = results.filter(g => g.category === activeTab);
    }
    if (search.trim()) {
      const q = search.toLowerCase();
      results = results.filter(g =>
        g.title.toLowerCase().includes(q) ||
        g.excerpt.toLowerCase().includes(q) ||
        g.tags.some(t => t.includes(q))
      );
    }
    return results;
  }, [search, activeTab]);

  const categories: ('all' | GuideCategory)[] = ['all', 'windows-guides', 'mac-guides', 'essential-skills', 'tips-tricks', 'ai-guides'];

  return (
    <div className="min-h-screen">
      <SEOHead
        title="Tech Guides for Beginners | TekSure"
        description="Browse 300+ free step-by-step tech guides for Windows, Mac, essential skills, tips, and AI tools. Written for beginners."
        path="/guides"
      />
      <Navbar />

      {/* Hero */}
      <section className="hero-gradient text-primary-foreground">
        <div className="container py-16 md:py-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-2xl mx-auto text-center"
          >
            <h1 className="text-3xl md:text-5xl font-bold tracking-tight mb-4">
              Tech Guides & Resources
            </h1>
            <p className="text-lg opacity-90 mb-8">
              DIY troubleshooting, expert tips, and video tutorials. Fix it yourself or know when to call a pro.
            </p>
            <div className="relative max-w-md mx-auto">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
              <Input
                placeholder="Search guides... (e.g. wifi, printer, security)"
                className="pl-10 bg-card text-foreground h-12 text-base"
                value={search}
                onChange={e => setSearch(e.target.value)}
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Category Stats */}
      <section className="container -mt-8 relative z-10 mb-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {(['windows-guides', 'mac-guides', 'essential-skills', 'tips-tricks'] as GuideCategory[]).map((cat, i) => {
            const Icon = categoryIcons[cat];
            const count = guides.filter(g => g.category === cat).length;
            return (
              <motion.div
                key={cat}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
              >
                <Card
                  className="cursor-pointer hover:shadow-md transition-shadow"
                  onClick={() => setActiveTab(cat)}
                >
                  <CardContent className="flex items-center gap-3 py-4">
                    <div className="h-10 w-10 rounded-lg bg-accent flex items-center justify-center shrink-0">
                      <Icon className="h-5 w-5 text-accent-foreground" />
                    </div>
                    <div className="min-w-0">
                      <p className="text-sm font-medium truncate">{categoryLabels[cat]}</p>
                      <p className="text-xs text-muted-foreground">{count} {count === 1 ? 'article' : 'articles'}</p>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* Progress Banner */}
      {progressStats.completed > 0 && (
        <section className="container mb-4">
          <div className="flex items-center gap-4 p-4 rounded-xl bg-green-500/10 border border-green-500/20">
            <CheckCircle2 className="h-5 w-5 text-green-500 shrink-0" />
            <div className="flex-1 min-w-0">
              <p className="text-sm font-medium text-green-700 dark:text-green-400">
                {progressStats.completed} of {progressStats.total} guides completed
              </p>
              <Progress value={progressStats.pct} className="h-1.5 mt-1.5 bg-green-200 dark:bg-green-900" />
            </div>
            <span className="text-sm font-bold text-green-600 dark:text-green-400 shrink-0">{progressStats.pct}%</span>
          </div>
        </section>
      )}

      {/* Guides Grid */}
      <section className="container pb-20">
        <Tabs value={activeTab} onValueChange={v => setActiveTab(v as typeof activeTab)}>
          <TabsList className="mb-8 flex-wrap h-auto gap-1">
            {categories.map(cat => (
              <TabsTrigger key={cat} value={cat} className="capitalize">
                {cat === 'all' ? 'All Guides' : categoryLabels[cat]}
              </TabsTrigger>
            ))}
          </TabsList>

          {categories.map(cat => (
            <TabsContent key={cat} value={cat}>
              {cat !== 'all' && (
                <p className="text-muted-foreground mb-6">
                  {categoryDescriptions[cat as GuideCategory]}
                </p>
              )}

              {filtered.length === 0 ? (
                <div className="text-center py-16">
                  <p className="text-4xl mb-4">🔍</p>
                  <p className="text-lg font-medium mb-2">No guides found</p>
                  <p className="text-muted-foreground">Try a different search term or category.</p>
                </div>
              ) : (
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {filtered.map((guide, i) => (
                    <motion.div
                      key={guide.slug}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: Math.min(i * 0.05, 0.3) }}
                    >
                      <GuideCard guide={guide} completed={completedSlugs.has(guide.slug)} />
                    </motion.div>
                  ))}
                </div>
              )}
            </TabsContent>
          ))}
        </Tabs>

        {/* CTA Banner */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16"
        >
          <Card className="hero-gradient text-primary-foreground overflow-hidden">
            <CardContent className="py-12 text-center">
              <h2 className="text-2xl md:text-3xl font-bold mb-3">Can't find what you need?</h2>
              <p className="opacity-90 mb-6 max-w-md mx-auto">
                Our verified technicians are ready to help with any tech issue — remote or in-person.
              </p>
              <Link
                to="/signup"
                className="inline-flex items-center gap-2 bg-secondary text-secondary-foreground px-6 py-3 rounded-lg font-medium hover:opacity-90 transition-opacity"
              >
                Book a Tech <ArrowRight className="h-4 w-4" />
              </Link>
            </CardContent>
          </Card>
        </motion.div>
      </section>

      <Footer />
    </div>
  );
};

export default Guides;

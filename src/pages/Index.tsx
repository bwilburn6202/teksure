import { useState, useMemo } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  Search, Shield, ArrowRight, Monitor, Apple, Lightbulb,
  Sparkles, Bot, BookOpen, ChevronRight, Clock,
  Phone, Mail, Loader2, CheckCircle, Wrench, Heart
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { guides, categoryLabels, type GuideCategory } from '@/data/guides';

const categoryIcons: Record<string, typeof Monitor> = {
  'windows-guides': Monitor,
  'mac-guides': Apple,
  'essential-skills': Lightbulb,
  'tips-tricks': Sparkles,
  'ai-guides': Bot,
  'how-to': BookOpen,
  'safety-guides': Shield,
  'app-guides': Phone,
  'health-tech': Heart,
};

const topicPills = [
  { label: 'WiFi Issues', query: 'wifi' },
  { label: 'Slow Computer', query: 'slow' },
  { label: 'Virus Alert', query: 'virus' },
  { label: 'Printer Help', query: 'printer' },
  { label: 'Passwords', query: 'password' },
  { label: 'Phone Setup', query: 'phone' },
];

const quickFixes = [
  { problem: "Computer Won't Turn On", fix: "Check power cable and outlet first", slug: 'turn-pc-on-and-off', icon: Monitor },
  { problem: "Everything is Slow", fix: "Restart your device — fixes 80% of slowdowns", slug: 'restart-pc-windows', icon: Sparkles },
  { problem: "WiFi Not Working", fix: "Unplug your router for 30 seconds", slug: 'connect-wifi-windows', icon: Shield },
  { problem: "Printer Won't Print", fix: "Check it's set as default printer", slug: 'fix-printer-windows', icon: Wrench },
  { problem: "Forgot Password", fix: "Use 'Forgot Password' on the login page", slug: 'manage-passwords-windows', icon: Shield },
  { problem: "Phone Storage Full", fix: "Delete unused apps and clear cache", slug: 'manage-storage-windows', icon: Phone },
];

function NewsletterSignup() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim()) return;
    setStatus('loading');
    try {
      const { supabase } = await import('@/integrations/supabase/client');
      await (supabase as any).from('newsletter_signups').insert({ email: email.trim() });
      setStatus('success');
    } catch {
      console.log('Newsletter signup:', email.trim());
      setStatus('success');
    }
  };

  if (status === 'success') {
    return (
      <div className="flex flex-col items-center gap-2 py-2">
        <CheckCircle className="h-5 w-5 text-green-600" />
        <p className="text-sm font-medium">You're in! First tip lands next week.</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-2.5 max-w-md mx-auto">
      <Input
        type="email"
        placeholder="your@email.com"
        value={email}
        onChange={e => setEmail(e.target.value)}
        required
        className="h-11 flex-1 bg-background"
      />
      <Button type="submit" disabled={status === 'loading'} className="h-11 px-5 shrink-0">
        {status === 'loading' ? <Loader2 className="h-4 w-4 animate-spin" /> : 'Subscribe'}
      </Button>
    </form>
  );
}

const fade = {
  hidden: { opacity: 0, y: 16 },
  visible: (i: number) => ({
    opacity: 1, y: 0,
    transition: { delay: i * 0.08, duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }
  }),
};

const Index = () => {
  const [search, setSearch] = useState('');
  const navigate = useNavigate();
  const { t } = useLanguage();

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (search.trim()) navigate(`/search?q=${encodeURIComponent(search.trim())}`);
  };

  const featuredGuides = useMemo(() => {
    const picks: typeof guides[0][] = [];
    const categories: GuideCategory[] = ['windows-guides', 'mac-guides', 'essential-skills', 'tips-tricks', 'ai-guides', 'app-guides'];
    for (const cat of categories) {
      const catGuides = guides.filter(g => g.category === cat);
      if (catGuides.length > 0) picks.push(catGuides[0]);
      if (picks.length >= 6) break;
    }
    if (picks.length < 6) picks.push(...guides.filter(g => !picks.includes(g)).slice(0, 6 - picks.length));
    return picks.slice(0, 6);
  }, []);

  const latestGuides = useMemo(() => {
    return [...guides].sort((a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()).slice(0, 4);
  }, []);

  const visibleCategories = (Object.keys(categoryLabels) as GuideCategory[]).slice(0, 6);

  return (
    <div className="min-h-screen bg-background">
      <SEOHead
        title="TekSure — Free Tech Help for Beginners | Step-by-Step Guides"
        description="Free step-by-step tech guides, quick fixes, and verified tech support for seniors and beginners. No jargon, just answers."
        path="/"
        jsonLd={{
          '@context': 'https://schema.org',
          '@type': 'Organization',
          name: 'TekSure',
          url: 'https://teksure.lovable.app',
          description: 'The #1 tech help resource for beginners.',
        }}
      />
      <Navbar />

      {/* ── Hero ────────────────────────────────────────── */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/[0.03] to-transparent" />
        <div className="container relative pt-20 pb-16 md:pt-32 md:pb-24">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
            className="max-w-2xl mx-auto text-center"
          >
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-4 leading-[1.08]">
              {t('hero.title', 'Tech help that')}{' '}
              <span className="text-gradient">
                {t('hero.highlight', 'makes sense')}
              </span>
            </h1>
            <p className="text-lg text-muted-foreground mb-8 max-w-lg mx-auto leading-relaxed">
              {t('hero.subtitle', 'Free guides, real human support, and simple tools — built for people who just want their tech to work.')}
            </p>

            {/* Search */}
            <form onSubmit={handleSearch} className="max-w-md mx-auto mb-6">
              <div className="relative">
                <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input
                  placeholder='Search for help... (e.g. "connect to Wi-Fi")'
                  className="pl-10 pr-20 h-12 bg-muted/50 border-border rounded-xl text-sm"
                  value={search}
                  onChange={e => setSearch(e.target.value)}
                />
                <Button
                  type="submit"
                  size="sm"
                  className="absolute right-1.5 top-1/2 -translate-y-1/2 h-8 rounded-lg text-xs"
                >
                  Search
                </Button>
              </div>
            </form>

            {/* Topic pills */}
            <div className="flex flex-wrap justify-center gap-2 mb-10">
              {topicPills.map((topic) => (
                <button
                  key={topic.query}
                  onClick={() => navigate(`/guides?q=${encodeURIComponent(topic.query)}`)}
                  className="px-3 py-1.5 rounded-full text-xs font-medium text-muted-foreground bg-muted hover:bg-accent hover:text-foreground transition-colors border border-transparent hover:border-border"
                >
                  {topic.label}
                </button>
              ))}
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap items-center justify-center gap-3">
              <Button asChild size="lg" className="gap-2 rounded-xl h-12 px-6">
                <Link to="/get-help"><Phone className="h-4 w-4" /> Get Help Now</Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="gap-2 rounded-xl h-12 px-6">
                <Link to="/guides"><BookOpen className="h-4 w-4" /> Browse Guides</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── Stats strip ─────────────────────────────────── */}
      <div className="border-y">
        <div className="container py-5">
          <div className="flex flex-wrap items-center justify-center gap-8 md:gap-14 text-sm">
            <div className="text-center">
              <p className="text-2xl font-bold text-foreground">{guides.length}+</p>
              <p className="text-xs text-muted-foreground mt-0.5">Free guides</p>
            </div>
            <div className="hidden sm:block w-px h-8 bg-border" />
            <div className="text-center">
              <p className="text-2xl font-bold text-foreground">12k+</p>
              <p className="text-xs text-muted-foreground mt-0.5">Members</p>
            </div>
            <div className="hidden sm:block w-px h-8 bg-border" />
            <div className="text-center">
              <p className="text-2xl font-bold text-foreground">4.9</p>
              <p className="text-xs text-muted-foreground mt-0.5">Avg rating</p>
            </div>
            <div className="hidden sm:block w-px h-8 bg-border" />
            <div className="text-center">
              <p className="text-2xl font-bold text-foreground">30+</p>
              <p className="text-xs text-muted-foreground mt-0.5">Free tools</p>
            </div>
          </div>
        </div>
      </div>

      {/* ── Quick Fixes ─────────────────────────────────── */}
      <section className="container py-20">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-3">Quick Fixes</h2>
          <p className="text-muted-foreground max-w-md mx-auto">Solutions to the most common tech problems — no appointment needed.</p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-4xl mx-auto">
          {quickFixes.map((fix, i) => (
            <motion.div key={fix.slug} custom={i} initial="hidden" whileInView="visible" variants={fade} viewport={{ once: true }}>
              <Link to={`/guides/${fix.slug}`} className="group block">
                <div className="p-5 rounded-2xl border border-border bg-card hover:bg-accent/50 transition-all hover:shadow-sm">
                  <div className="flex items-start gap-3.5">
                    <div className="h-9 w-9 rounded-xl bg-primary/[0.07] flex items-center justify-center shrink-0">
                      <fix.icon className="h-4 w-4 text-primary" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="font-semibold text-sm mb-1 group-hover:text-primary transition-colors">{fix.problem}</h3>
                      <p className="text-xs text-muted-foreground leading-relaxed">{fix.fix}</p>
                    </div>
                    <ArrowRight className="h-4 w-4 text-muted-foreground/40 group-hover:text-primary transition-colors shrink-0 mt-0.5" />
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ── Browse by Category ──────────────────────────── */}
      <section className="bg-muted/40 py-20">
        <div className="container">
          <div className="flex items-end justify-between mb-12">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-3">Browse by Category</h2>
              <p className="text-muted-foreground">Find guides organized by what you need help with.</p>
            </div>
            <Button asChild variant="ghost" className="hidden md:flex gap-1 text-sm">
              <Link to="/guides">View all <ArrowRight className="h-4 w-4" /></Link>
            </Button>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {visibleCategories.map((cat, i) => {
              const Icon = categoryIcons[cat] || BookOpen;
              const count = guides.filter(g => g.category === cat).length;

              return (
                <motion.div key={cat} custom={i} initial="hidden" whileInView="visible" variants={fade} viewport={{ once: true }}>
                  <Link to={`/guides?category=${cat}`} className="group block">
                    <div className="p-6 rounded-2xl border border-border bg-card hover:shadow-md transition-all">
                      <div className="flex items-center justify-between mb-4">
                        <div className="h-10 w-10 rounded-xl bg-primary/[0.07] flex items-center justify-center">
                          <Icon className="h-5 w-5 text-primary" />
                        </div>
                        <span className="text-xs text-muted-foreground">{count} guides</span>
                      </div>
                      <h3 className="font-semibold text-base mb-1 group-hover:text-primary transition-colors">
                        {categoryLabels[cat]}
                      </h3>
                    </div>
                  </Link>
                </motion.div>
              );
            })}
          </div>

          <div className="md:hidden text-center mt-8">
            <Button asChild variant="outline" className="gap-1">
              <Link to="/guides">View all guides <ArrowRight className="h-4 w-4" /></Link>
            </Button>
          </div>
        </div>
      </section>

      {/* ── Popular Guides ──────────────────────────────── */}
      <section className="container py-20">
        <div className="flex items-end justify-between mb-12">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-3">Popular Guides</h2>
            <p className="text-muted-foreground">The most helpful articles for beginners.</p>
          </div>
          <Button asChild variant="ghost" className="hidden md:flex gap-1 text-sm">
            <Link to="/guides">View all <ArrowRight className="h-4 w-4" /></Link>
          </Button>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {featuredGuides.map((guide, i) => (
            <motion.div key={guide.slug} custom={i} initial="hidden" whileInView="visible" variants={fade} viewport={{ once: true }}>
              <Link to={`/guides/${guide.slug}`} className="group block h-full">
                <div className="p-6 rounded-2xl border border-border bg-card hover:shadow-md transition-all h-full flex flex-col">
                  <div className="text-3xl mb-4">{guide.thumbnailEmoji}</div>
                  <div className="flex items-center gap-2 mb-3">
                    <Badge variant="secondary" className="text-[10px] font-medium">{categoryLabels[guide.category]}</Badge>
                    <span className="text-[10px] text-muted-foreground flex items-center gap-1">
                      <Clock className="h-3 w-3" /> {guide.readTime}
                    </span>
                  </div>
                  <h3 className="font-semibold text-sm mb-2 group-hover:text-primary transition-colors leading-snug flex-1">
                    {guide.title}
                  </h3>
                  <p className="text-xs text-muted-foreground line-clamp-2 leading-relaxed">{guide.excerpt}</p>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ── How It Works ────────────────────────────────── */}
      <section className="bg-muted/40 py-20">
        <div className="container">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-3">How TekSure Works</h2>
            <p className="text-muted-foreground max-w-sm mx-auto">Three steps. Simpler than calling your cable company.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-3xl mx-auto">
            {[
              { step: '1', title: 'Tell us what\'s wrong', desc: 'One quick form. Just your phone or email — that\'s all we need.' },
              { step: '2', title: 'We reach out to you', desc: 'A real person calls or texts. No chatbots. Usually within a few hours.' },
              { step: '3', title: 'Problem solved', desc: 'We walk you through the fix step by step. Plain English, no jargon.' },
            ].map((s, i) => (
              <motion.div key={s.step} custom={i} initial="hidden" whileInView="visible" variants={fade} viewport={{ once: true }}>
                <div className="text-center">
                  <div className="w-10 h-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-sm font-bold mx-auto mb-5">
                    {s.step}
                  </div>
                  <h3 className="font-semibold text-base mb-2">{s.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button asChild size="lg" className="gap-2 rounded-xl h-12 px-6">
              <Link to="/get-help"><Phone className="h-4 w-4" /> Get Help Now</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* ── Latest Guides ───────────────────────────────── */}
      <section className="container py-20">
        <div className="flex items-end justify-between mb-12">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-3">Latest Guides</h2>
            <p className="text-muted-foreground">Fresh step-by-step articles.</p>
          </div>
          <Button asChild variant="ghost" className="hidden md:flex gap-1 text-sm">
            <Link to="/guides">See all <ArrowRight className="h-4 w-4" /></Link>
          </Button>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {latestGuides.map((guide, i) => (
            <motion.div key={guide.slug} custom={i} initial="hidden" whileInView="visible" variants={fade} viewport={{ once: true }}>
              <Link to={`/guides/${guide.slug}`} className="group block h-full">
                <div className="p-5 rounded-2xl border border-border bg-card hover:shadow-md transition-all h-full">
                  <div className="text-2xl mb-3">{guide.thumbnailEmoji}</div>
                  <Badge variant="secondary" className="text-[10px] font-medium mb-2">{categoryLabels[guide.category]}</Badge>
                  <h4 className="font-semibold text-sm group-hover:text-primary transition-colors line-clamp-2 leading-snug">
                    {guide.title}
                  </h4>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ── Newsletter ──────────────────────────────────── */}
      <section className="border-y bg-muted/30">
        <div className="container py-16">
          <div className="max-w-md mx-auto text-center">
            <Mail className="h-6 w-6 text-primary mx-auto mb-4" />
            <h2 className="text-xl font-bold mb-2">Free weekly tech tip</h2>
            <p className="text-sm text-muted-foreground mb-6">
              One helpful tip every Sunday. No spam, unsubscribe any time.
            </p>
            <NewsletterSignup />
          </div>
        </div>
      </section>

      {/* ── Final CTA ───────────────────────────────────── */}
      <section className="hero-gradient text-white">
        <div className="container py-20 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
              Tech trouble? We've got you.
            </h2>
            <p className="text-white/60 mb-8 max-w-md mx-auto">
              Browse {guides.length}+ free guides — or skip the reading and talk to a real person.
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              <Button asChild size="lg" className="gap-2 rounded-xl h-12 px-6 bg-white text-foreground hover:bg-white/90">
                <Link to="/get-help"><Phone className="h-4 w-4" /> Get Help Now</Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="gap-2 rounded-xl h-12 px-6 border-white/20 text-white hover:bg-white/10">
                <Link to="/guides"><BookOpen className="h-4 w-4" /> Browse Guides</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;

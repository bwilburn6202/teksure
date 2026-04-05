import { useState, useMemo, useEffect, useRef } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Link, useNavigate } from 'react-router-dom';
import {
  Search, Shield, ArrowRight, Monitor, Apple, Lightbulb,
  Sparkles, Bot, BookOpen, Phone, Mail, Loader2, CheckCircle, Wrench, Heart,
  MessageCircle, Zap, Users, Star, PlayCircle, Clock
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { Card, CardContent } from '@/components/ui/card';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { guides, categoryLabels, type GuideCategory } from '@/data/guides';
import { getGuideThumbnailUrl, getGuideThumbnailSmall } from '@/lib/guideThumbnails';
import { getInProgressGuides, getRecentGuides } from '@/lib/progress';

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

const categoryColors: Record<string, string> = {
  'windows-guides': 'bg-blue-50 text-blue-700 dark:bg-blue-950/40 dark:text-blue-300',
  'mac-guides': 'bg-gray-100 text-gray-700 dark:bg-gray-800 dark:text-gray-300',
  'essential-skills': 'bg-amber-50 text-amber-700 dark:bg-amber-950/40 dark:text-amber-300',
  'tips-tricks': 'bg-purple-50 text-purple-700 dark:bg-purple-950/40 dark:text-purple-300',
  'ai-guides': 'bg-cyan-50 text-cyan-700 dark:bg-cyan-950/40 dark:text-cyan-300',
  'safety-guides': 'bg-red-50 text-red-700 dark:bg-red-950/40 dark:text-red-300',
  'app-guides': 'bg-green-50 text-green-700 dark:bg-green-950/40 dark:text-green-300',
  'health-tech': 'bg-pink-50 text-pink-700 dark:bg-pink-950/40 dark:text-pink-300',
};

const problemCards = [
  { label: 'WiFi Not Working', query: 'wifi', icon: '📶', color: 'from-blue-500/10 to-blue-500/5 border-blue-200/50 dark:border-blue-800/50' },
  { label: 'Computer Is Slow', query: 'slow', icon: '🐌', color: 'from-amber-500/10 to-amber-500/5 border-amber-200/50 dark:border-amber-800/50' },
  { label: 'Virus or Pop-up', query: 'virus', icon: '⚠️', color: 'from-red-500/10 to-red-500/5 border-red-200/50 dark:border-red-800/50' },
  { label: 'Printer Help', query: 'printer', icon: '🖨️', color: 'from-gray-500/10 to-gray-500/5 border-gray-200/50 dark:border-gray-700/50' },
  { label: 'Forgot Password', query: 'password', icon: '🔑', color: 'from-green-500/10 to-green-500/5 border-green-200/50 dark:border-green-800/50' },
  { label: 'Phone Storage Full', query: 'storage', icon: '📱', color: 'from-purple-500/10 to-purple-500/5 border-purple-200/50 dark:border-purple-800/50' },
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
    } catch (err) {
      console.error('Newsletter signup failed:', err);
      setStatus('error');
    }
  };

  if (status === 'success') {
    return (
      <div className="flex flex-col items-center gap-2 py-2">
        <CheckCircle className="h-5 w-5 text-teksure-success" />
        <p className="text-sm font-medium">You're in! Expect one friendly email each week.</p>
      </div>
    );
  }

  if (status === 'error') {
    return (
      <div className="flex flex-col items-center gap-2 py-2">
        <p className="text-sm text-destructive font-medium">Something went wrong. Please try again later.</p>
        <button onClick={() => setStatus('idle')} className="text-sm text-primary hover:underline">Try again</button>
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

function useReveal() {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { el.classList.add('visible'); observer.unobserve(el); } },
      { threshold: 0.1, rootMargin: '0px 0px -40px 0px' }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);
  return ref;
}

function RevealSection({ children, className = '' }: { children: React.ReactNode; className?: string }) {
  const ref = useReveal();
  return <div ref={ref} className={`reveal ${className}`}>{children}</div>;
}

function ContinueWhereYouLeftOff() {
  const [inProgress, setInProgress] = useState<{ slug: string; step: number; totalSteps: number; pct: number }[]>([]);
  const [recentSlugs, setRecentSlugs] = useState<string[]>([]);

  useEffect(() => {
    setInProgress(getInProgressGuides().slice(0, 3));
    setRecentSlugs(getRecentGuides().slice(0, 6));
  }, []);

  useEffect(() => {
    const handler = () => {
      setInProgress(getInProgressGuides().slice(0, 3));
      setRecentSlugs(getRecentGuides().slice(0, 6));
    };
    window.addEventListener('teksure-progress-update', handler);
    return () => window.removeEventListener('teksure-progress-update', handler);
  }, []);

  if (inProgress.length === 0 && recentSlugs.length === 0) return null;

  return (
    <section className="border-y bg-muted/30">
      <div className="container py-10">
        {inProgress.length > 0 && (
          <div className="mb-8">
            <div className="flex items-center gap-2 mb-4">
              <PlayCircle className="h-5 w-5 text-primary" />
              <h2 className="text-xl font-bold">Continue where you left off</h2>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {inProgress.map(item => {
                const guide = guides.find(g => g.slug === item.slug);
                if (!guide) return null;
                return (
                  <Link key={item.slug} to={`/guides/${item.slug}`} className="block">
                    <Card className="h-full hover:shadow-md transition-shadow group">
                      <CardContent className="pt-5">
                        <div className="flex items-start gap-3">
                          <img src={getGuideThumbnailSmall(guide)} alt="" className="w-10 h-10 rounded-lg object-cover shrink-0" loading="lazy" decoding="async" width="40" height="40" />
                          <div className="flex-1 min-w-0">
                            <p className="text-sm font-medium group-hover:text-primary transition-colors line-clamp-2">{guide.title}</p>
                            <div className="flex items-center gap-2 mt-2">
                              <Progress value={item.pct} className="h-1.5 flex-1" />
                              <span className="text-xs text-muted-foreground whitespace-nowrap">Step {item.step + 1}/{item.totalSteps}</span>
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </Link>
                );
              })}
            </div>
          </div>
        )}

        {recentSlugs.length > 0 && (
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Clock className="h-5 w-5 text-muted-foreground" />
              <h2 className="text-lg font-semibold">Recently viewed</h2>
            </div>
            <div className="flex flex-wrap gap-2">
              {recentSlugs.map(slug => {
                const guide = guides.find(g => g.slug === slug);
                if (!guide) return null;
                return (
                  <Link key={slug} to={`/guides/${guide.slug}`}>
                    <Badge variant="outline" className="gap-1.5 px-3 py-1.5 text-sm hover:bg-muted transition-colors cursor-pointer min-h-[44px]">
                      <img src={getGuideThumbnailSmall(guide)} alt="" className="w-4 h-4 rounded object-cover" loading="lazy" decoding="async" width="16" height="16" />
                      {guide.title}
                    </Badge>
                  </Link>
                );
              })}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}

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

  const visibleCategories = (Object.keys(categoryLabels) as GuideCategory[]).slice(0, 6);

  const quickFixes = [
    { problem: "Computer Won't Turn On", fix: "Check power cable and outlet first", slug: 'turn-pc-on-and-off', icon: Monitor },
    { problem: "Everything is Slow", fix: "Restart your device — fixes 80% of slowdowns", slug: 'restart-pc-windows', icon: Sparkles },
    { problem: "WiFi Not Working", fix: "Unplug your router for 30 seconds", slug: 'connect-wifi-windows', icon: Shield },
    { problem: "Printer Won't Print", fix: "Check it's set as default printer", slug: 'fix-printer-windows', icon: Wrench },
    { problem: "Forgot Password", fix: "Use 'Forgot Password' on the login page", slug: 'manage-passwords-windows', icon: Shield },
    { problem: "Phone Storage Full", fix: "Delete unused apps and clear cache", slug: 'manage-storage-windows', icon: Phone },
  ];

  return (
    <div className="min-h-screen bg-background">
      <SEOHead
        title="TekSure — Free Tech Help for Beginners | Step-by-Step Guides"
        description="Free step-by-step tech guides, quick fixes, and verified tech support for seniors and beginners. No jargon, just answers."
        path="/"
        jsonLd={[
          {
            '@context': 'https://schema.org',
            '@type': 'Organization',
            '@id': 'https://teksure.com/#organization',
            name: 'TekSure',
            url: 'https://teksure.com',
            logo: 'https://teksure.com/og-image.png',
            description: 'Free step-by-step tech guides for seniors and beginners. Plain English. No jargon.',
            contactPoint: {
              '@type': 'ContactPoint',
              contactType: 'customer support',
              email: 'hello@teksure.com',
              availableLanguage: 'English',
            },
          },
          {
            '@context': 'https://schema.org',
            '@type': 'WebSite',
            '@id': 'https://teksure.com/#website',
            url: 'https://teksure.com',
            name: 'TekSure',
            description: 'Free tech help for beginners and seniors — step-by-step guides, tools, and verified technicians.',
            publisher: { '@id': 'https://teksure.com/#organization' },
            potentialAction: {
              '@type': 'SearchAction',
              target: { '@type': 'EntryPoint', urlTemplate: 'https://teksure.com/search?q={search_term_string}' },
              'query-input': 'required name=search_term_string',
            },
          },
        ]}
      />
      <Navbar />

      {/* ── Conversational Hero ───────────────────────────── */}
      <section className="relative overflow-hidden mesh-gradient">
        <div className="absolute inset-0 dot-grid opacity-40" />
        <div className="container relative pt-20 pb-16 md:pt-28 md:pb-24">
          <div className="max-w-3xl mx-auto text-center">
            {/* Greeting */}
            {/* Hidden h1 for SEO — the conversational design is for UX */}
            <h1 className="sr-only">TekSure — Free Tech Help for Beginners &amp; Seniors</h1>

            <div className="conversation-bubble mb-8 animate-float">
              <div className="flex items-start gap-3 text-left">
                <div className="h-10 w-10 rounded-full bg-primary flex items-center justify-center shrink-0">
                  <MessageCircle className="h-5 w-5 text-white" />
                </div>
                <div>
                  <p className="text-lg font-semibold mb-1">Hi there! What can we help with today?</p>
                  <p className="text-sm text-muted-foreground">Pick what's going on — or search below.</p>
                </div>
              </div>
            </div>

            {/* Problem picker grid */}
            <div className="grid grid-cols-2 md:grid-cols-3 gap-3 mb-8 stagger">
              {problemCards.map((card) => (
                <button
                  key={card.query}
                  onClick={() => navigate(`/guides?q=${encodeURIComponent(card.query)}`)}
                  className={`group relative overflow-hidden rounded-2xl border bg-gradient-to-br ${card.color} p-4 text-left transition-all duration-200 hover:scale-[1.02] hover:shadow-md`}
                >
                  <span className="text-2xl mb-1 block">{card.icon}</span>
                  <span className="text-sm font-medium block">{card.label}</span>
                </button>
              ))}
            </div>

            {/* Search */}
            <form onSubmit={handleSearch} className="max-w-md mx-auto mb-6">
              <div className="relative">
                <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input
                  placeholder='Or type your question...'
                  aria-label="Search for tech help"
                  className="pl-10 pr-20 h-12 bg-background shadow-sm rounded-xl text-sm"
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

            {/* CTAs */}
            <div className="flex flex-wrap items-center justify-center gap-3">
              <Button asChild size="lg" className="gap-2 rounded-xl h-12 px-6 shadow-lg shadow-primary/20 hover:shadow-xl hover:shadow-primary/30 transition-shadow">
                <Link to="/get-help"><Phone className="h-4 w-4" /> Talk to a Person</Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="gap-2 rounded-xl h-12 px-6">
                <Link to="/guides"><BookOpen className="h-4 w-4" /> Browse Guides</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* ── Continue where you left off ─────────────────── */}
      <ContinueWhereYouLeftOff />

      {/* ── Stats strip ─────────────────────────────────── */}
      <RevealSection>
        <div className="border-y bg-muted/30">
          <div className="container py-6">
            <div className="flex flex-wrap items-center justify-center gap-6 md:gap-12 text-sm">
              {[
                { value: `${guides.length}+`, label: 'Free guides' },
                { value: '30+', label: 'Interactive tools' },
                { value: '100%', label: 'Free to browse' },
                { value: 'No jargon', label: 'Plain English always' },
              ].map((stat, i) => (
                <div key={i} className="text-center">
                  <p className="text-2xl font-bold text-foreground">{stat.value}</p>
                  <p className="text-xs text-muted-foreground mt-0.5">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </RevealSection>

      {/* ── Bento Grid: Quick Fixes + Featured ──────────── */}
      <section className="container py-16 md:py-24">
        <RevealSection>
          <div className="text-center mb-12">
            <h2 className="display-heading text-3xl md:text-5xl mb-3">Quick answers, right now</h2>
            <p className="text-muted-foreground max-w-md mx-auto">The most common fixes — no appointment needed.</p>
          </div>
        </RevealSection>

        <div className="grid grid-cols-1 md:grid-cols-4 md:grid-rows-2 gap-4 max-w-5xl mx-auto stagger">
          {/* Large card - spans 2 cols, 2 rows */}
          <div className="md:col-span-2 md:row-span-2">
            <div className="bento-card h-full bg-gradient-to-br from-primary/[0.06] to-primary/[0.02] flex flex-col justify-between">
              <div>
                <div className="h-12 w-12 rounded-2xl bg-primary/10 flex items-center justify-center mb-4">
                  <Zap className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-2">Need hands-on help?</h3>
                <p className="text-muted-foreground mb-6">A real person will walk you through any fix — step by step, in plain English. No jargon, no rush.</p>
              </div>
              <Button asChild className="gap-2 rounded-xl self-start">
                <Link to="/get-help">Get Help Now <ArrowRight className="h-4 w-4" /></Link>
              </Button>
            </div>
          </div>

          {/* Quick fix cards */}
          {quickFixes.slice(0, 4).map((fix) => (
            <div key={fix.slug}>
              <Link to={`/guides/${fix.slug}`} className="block h-full">
                <div className="bento-card h-full group">
                  <div className="flex items-start gap-3">
                    <div className="h-9 w-9 rounded-xl bg-primary/[0.07] flex items-center justify-center shrink-0 group-hover:bg-primary/15 transition-colors">
                      <fix.icon className="h-4 w-4 text-primary" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="font-semibold text-sm mb-1 group-hover:text-primary transition-colors">{fix.problem}</h3>
                      <p className="text-xs text-muted-foreground leading-relaxed">{fix.fix}</p>
                    </div>
                  </div>
                </div>
              </Link>
            </div>
          ))}

          {/* Wide card */}
          <div className="md:col-span-2">
            <div className="bento-card bg-gradient-to-r from-teksure-success/[0.06] to-teksure-success/[0.02]">
              <div className="flex items-center gap-4">
                <div className="h-12 w-12 rounded-2xl bg-teksure-success/10 flex items-center justify-center shrink-0">
                  <Shield className="h-6 w-6 text-teksure-success" />
                </div>
                <div className="flex-1">
                  <h3 className="font-bold mb-1">Scam Alert Center</h3>
                  <p className="text-sm text-muted-foreground">Latest scams targeting everyday users — stay informed and protected.</p>
                </div>
                <Button asChild variant="outline" size="sm" className="shrink-0 rounded-xl">
                  <Link to="/safety/scam-alerts">View Alerts <ArrowRight className="h-3 w-3 ml-1" /></Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Browse by Category ──────────────────────────── */}
      <section className="zone-guides border-y">
        <div className="container py-16 md:py-24">
          <RevealSection>
            <div className="flex items-end justify-between mb-10">
              <div>
                <h2 className="display-heading text-3xl md:text-4xl mb-2">Browse by Category</h2>
                <p className="text-muted-foreground">Find guides organized by what you need help with.</p>
              </div>
              <Button asChild variant="ghost" className="hidden md:flex gap-1 text-sm">
                <Link to="/guides">View all <ArrowRight className="h-4 w-4" /></Link>
              </Button>
            </div>
          </RevealSection>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 stagger">
            {visibleCategories.map((cat) => {
              const Icon = categoryIcons[cat] || BookOpen;
              const count = guides.filter(g => g.category === cat).length;
              const colorClass = categoryColors[cat] || 'bg-muted text-muted-foreground';

              return (
                <div key={cat}>
                  <Link to={`/guides?category=${cat}`} className="block h-full">
                    <div className="bento-card h-full group">
                      <div className="flex items-center justify-between mb-4">
                        <div className={`h-11 w-11 rounded-xl flex items-center justify-center ${colorClass}`}>
                          <Icon className="h-5 w-5" />
                        </div>
                        <span className="text-xs text-muted-foreground">{count} guides</span>
                      </div>
                      <h3 className="font-semibold text-base group-hover:text-primary transition-colors">
                        {categoryLabels[cat]}
                      </h3>
                    </div>
                  </Link>
                </div>
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
      <section className="container py-16 md:py-24">
        <RevealSection>
          <div className="flex items-end justify-between mb-10">
            <div>
              <h2 className="display-heading text-3xl md:text-4xl mb-2">Popular Guides</h2>
              <p className="text-muted-foreground">The most helpful articles for beginners.</p>
            </div>
            <Button asChild variant="ghost" className="hidden md:flex gap-1 text-sm">
              <Link to="/guides">View all <ArrowRight className="h-4 w-4" /></Link>
            </Button>
          </div>
        </RevealSection>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 stagger">
          {featuredGuides.map((guide) => (
            <div key={guide.slug}>
              <Link to={`/guides/${guide.slug}`} className="block h-full">
                <div className="bento-card h-full group overflow-hidden p-0">
                  <div className="h-36 overflow-hidden bg-muted">
                    <img src={getGuideThumbnailUrl(guide)} alt={guide.title} className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105" loading="lazy" decoding="async" width="600" height="400" />
                  </div>
                  <div className="p-5 flex flex-col flex-1">
                    <div className="flex items-center gap-2 mb-3">
                      <Badge variant="secondary" className="text-xs font-medium">{categoryLabels[guide.category]}</Badge>
                      <span className="text-xs text-muted-foreground">{guide.readTime}</span>
                    </div>
                    <h3 className="font-semibold text-sm mb-2 group-hover:text-primary transition-colors leading-snug flex-1">
                      {guide.title}
                    </h3>
                    <p className="text-xs text-muted-foreground line-clamp-2 leading-relaxed">{guide.excerpt}</p>
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </section>

      {/* ── How It Works ────────────────────────────────── */}
      <section className="zone-support border-y">
        <div className="container py-16 md:py-24">
          <RevealSection>
            <div className="text-center mb-12">
              <h2 className="display-heading text-3xl md:text-4xl mb-3">How TekSure Works</h2>
              <p className="text-muted-foreground max-w-sm mx-auto">Three steps. Simpler than calling your cable company.</p>
            </div>
          </RevealSection>

          <div className="grid md:grid-cols-3 gap-8 max-w-3xl mx-auto stagger">
            {[
              { step: '1', title: 'Tell us what\'s wrong', desc: 'One quick form. Just your phone or email — that\'s all we need.', icon: MessageCircle },
              { step: '2', title: 'We reach out to you', desc: 'A real person calls or texts. No chatbots. Usually within a few hours.', icon: Phone },
              { step: '3', title: 'Problem solved', desc: 'We walk you through the fix step by step. Plain English, no jargon.', icon: CheckCircle },
            ].map((s) => (
              <div key={s.step} className="text-center">
                <div className="relative inline-flex mb-6">
                  <div className="w-14 h-14 rounded-2xl bg-primary text-white flex items-center justify-center text-lg font-bold">
                    {s.step}
                  </div>
                  <div className="absolute -inset-1 rounded-2xl bg-primary/20 animate-pulse-ring" />
                </div>
                <h3 className="font-semibold text-base mb-2">{s.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button asChild size="lg" className="gap-2 rounded-xl h-12 px-6 shadow-lg shadow-primary/20">
              <Link to="/get-help"><Phone className="h-4 w-4" /> Get Help Now</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* ── Trust / Social Proof ────────────────────────── */}
      <section className="container py-16 md:py-24">
        <RevealSection>
          <div className="max-w-4xl mx-auto">
            <div className="grid sm:grid-cols-3 gap-6">
              {[
                { icon: Users, value: '10,000+', label: 'People helped' },
                { icon: Star, value: '4.9/5', label: 'Average rating' },
                { icon: Zap, value: '< 2hrs', label: 'Response time' },
              ].map((stat) => (
                <div key={stat.label} className="text-center p-6 rounded-2xl bg-muted/30">
                  <stat.icon className="h-6 w-6 text-primary mx-auto mb-3" />
                  <p className="text-3xl font-bold mb-1">{stat.value}</p>
                  <p className="text-sm text-muted-foreground">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </RevealSection>
      </section>

      {/* ── Newsletter ──────────────────────────────────── */}
      <RevealSection>
        <section className="border-y bg-muted/30">
          <div className="container py-12">
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
      </RevealSection>

      {/* ── Final CTA ───────────────────────────────────── */}
      <section className="hero-gradient text-white">
        <div className="container py-16 md:py-24 text-center">
          <RevealSection>
            <div>
              <h2 className="display-heading text-3xl md:text-5xl mb-4">
                Tech trouble? We've got you.
              </h2>
              <p className="text-white/80 mb-8 max-w-md mx-auto text-lg">
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
            </div>
          </RevealSection>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;

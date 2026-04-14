import { useState, useMemo, useEffect, useRef } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Link, useNavigate } from 'react-router-dom';
import {
  Search, Shield, ArrowRight, Monitor, Apple, Lightbulb,
  Sparkles, Bot, BookOpen, Phone, Mail, Loader2, CheckCircle, Wrench, Heart,
  Users, Star, Zap, MessageCircle, ChevronRight
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

const categoryAccentColors: Record<string, { border: string; bg: string; text: string }> = {
  'windows-guides': { border: 'border-l-blue-500', bg: 'bg-blue-50 dark:bg-blue-950/30', text: 'text-blue-600 dark:text-blue-400' },
  'mac-guides': { border: 'border-l-gray-500', bg: 'bg-gray-100 dark:bg-gray-800/30', text: 'text-gray-600 dark:text-gray-400' },
  'essential-skills': { border: 'border-l-amber-500', bg: 'bg-amber-50 dark:bg-amber-950/30', text: 'text-amber-600 dark:text-amber-400' },
  'tips-tricks': { border: 'border-l-purple-500', bg: 'bg-purple-50 dark:bg-purple-950/30', text: 'text-purple-600 dark:text-purple-400' },
  'ai-guides': { border: 'border-l-cyan-500', bg: 'bg-cyan-50 dark:bg-cyan-950/30', text: 'text-cyan-600 dark:text-cyan-400' },
  'safety-guides': { border: 'border-l-red-500', bg: 'bg-red-50 dark:bg-red-950/30', text: 'text-red-600 dark:text-red-400' },
  'app-guides': { border: 'border-l-green-500', bg: 'bg-green-50 dark:bg-green-950/30', text: 'text-green-600 dark:text-green-400' },
  'health-tech': { border: 'border-l-pink-500', bg: 'bg-pink-50 dark:bg-pink-950/30', text: 'text-pink-600 dark:text-pink-400' },
};

const problemPills = [
  { label: 'WiFi Not Working', query: 'wifi', icon: '📶' },
  { label: 'Computer Is Slow', query: 'slow', icon: '🐌' },
  { label: 'Virus or Pop-up', query: 'virus', icon: '⚠️' },
  { label: 'Printer Help', query: 'printer', icon: '🖨️' },
  { label: 'Forgot Password', query: 'password', icon: '🔑' },
  { label: 'Phone Storage Full', query: 'storage', icon: '📱' },
];

function NewsletterSignup() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const trimmed = email.trim().toLowerCase();
    if (!trimmed) return;
    setStatus('loading');
    try {
      const { supabase } = await import('@/integrations/supabase/client');
      const { error: dbError } = await supabase.from('newsletter_subscribers').insert({ email: trimmed });

      if (dbError && dbError.code !== '23505') {
        console.error('Newsletter signup error:', dbError);
        setStatus('error');
        return;
      }

      // Fire-and-forget admin notification
      supabase.functions.invoke('send-notification', {
        body: { type: 'newsletter_signup', data: { email: trimmed } },
      }).catch(err => console.warn('Newsletter notification failed (non-fatal):', err));

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
    <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-2.5 max-w-md w-full">
      <Input
        type="email"
        placeholder="your@email.com"
        value={email}
        onChange={e => setEmail(e.target.value)}
        required
        className="h-12 flex-1 bg-background/10 border-background/20 text-inherit placeholder:text-inherit/40 rounded-xl"
      />
      <Button type="submit" disabled={status === 'loading'} className="h-12 px-6 shrink-0 rounded-xl bg-background text-foreground hover:bg-background/90">
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
    { problem: "Computer Won't Turn On", fix: "Check power cable and outlet first", slug: 'turn-pc-on-and-off', icon: Monitor, emoji: '🖥️' },
    { problem: "Everything is Slow", fix: "Restart your device — fixes 80% of slowdowns", slug: 'restart-pc-windows', icon: Sparkles, emoji: '🐢' },
    { problem: "WiFi Not Working", fix: "Unplug your router for 30 seconds", slug: 'connect-wifi-windows', icon: Shield, emoji: '📶' },
    { problem: "Printer Won't Print", fix: "Check it's set as default printer", slug: 'fix-printer-windows', icon: Wrench, emoji: '🖨️' },
    { problem: "Forgot Password", fix: "Use 'Forgot Password' on the login page", slug: 'manage-passwords-windows', icon: Shield, emoji: '🔑' },
    { problem: "Phone Storage Full", fix: "Delete unused apps and clear cache", slug: 'manage-storage-windows', icon: Phone, emoji: '📱' },
  ];

  return (
    <div className="min-h-screen bg-background">
      <SEOHead
        title="TekSure — Free Tech Help for Beginners | American Tech Support"
        description="TekSure is an American tech support company offering free step-by-step guides, quick fixes, and verified tech support for seniors and beginners. No jargon, just answers."
        path="/"
        jsonLd={[
          {
            '@context': 'https://schema.org',
            '@type': 'Organization',
            '@id': 'https://teksure.com/#organization',
            name: 'TekSure',
            url: 'https://teksure.com',
            logo: 'https://teksure.com/og-image.png',
            description: 'American tech support company offering free step-by-step guides for seniors and beginners. Plain English. No jargon.',
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
            description: 'American tech support — free guides, tools, and verified technicians for beginners and seniors.',
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

      {/* ── Hero ─────────────────────────────────────────── */}
      <section className="relative overflow-hidden hero-glow">
        <div className="container relative pt-20 pb-16 md:pt-28 md:pb-24">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="sr-only">TekSure — American Tech Support Company | Free Help for Beginners &amp; Seniors</h1>

            <div className="mb-8 stagger">
              <h2 className="display-heading text-4xl md:text-6xl lg:text-7xl mb-5">
                Tech help that{' '}
                <span className="gradient-text">speaks your language</span>.
              </h2>
              <p className="text-lg md:text-xl text-muted-foreground max-w-xl mx-auto leading-relaxed">
                Free step-by-step guides, tools, and real human support — all in plain English. No jargon, no rush, no judgment.
              </p>
            </div>

            <form onSubmit={handleSearch} className="max-w-xl mx-auto mb-8">
              <div className="relative">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground/50" />
                <Input
                  placeholder="What do you need help with?"
                  aria-label="Search for tech help"
                  className="pl-12 pr-24 h-14 bg-card shadow-md rounded-2xl text-base border-border focus:border-primary/40 focus:shadow-lg focus:shadow-primary/[0.08] transition-all duration-300"
                  value={search}
                  onChange={e => setSearch(e.target.value)}
                />
                <Button type="submit" size="sm" className="absolute right-2 top-1/2 -translate-y-1/2 h-10 rounded-xl px-5 text-sm font-medium shadow-sm shadow-primary/20">
                  Search
                </Button>
              </div>
            </form>

            <div className="flex flex-wrap items-center justify-center gap-2 mb-8">
              {problemPills.map((pill) => (
                <button
                  key={pill.query}
                  onClick={() => navigate(`/guides?q=${encodeURIComponent(pill.query)}`)}
                  className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-full bg-card border border-border text-sm font-medium text-muted-foreground hover:text-foreground hover:border-primary/30 hover:shadow-md shadow-sm transition-all duration-200"
                >
                  <span>{pill.icon}</span>
                  {pill.label}
                </button>
              ))}
            </div>

            <div className="flex flex-wrap items-center justify-center gap-3 mb-10">
              <Button asChild size="lg" className="gap-2 rounded-xl h-13 px-7 shadow-md shadow-primary/25 hover:shadow-lg hover:shadow-primary/30 transition-all duration-300 text-base">
                <Link to="/get-help"><Phone className="h-4 w-4" /> Get Help Now</Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="gap-2 rounded-xl h-13 px-7 text-base border-border hover:border-primary/30">
                <Link to="/guides"><BookOpen className="h-4 w-4" /> Browse Guides</Link>
              </Button>
            </div>

            <div className="inline-flex flex-wrap items-center justify-center gap-6 md:gap-8 text-sm bg-card rounded-2xl border border-border px-6 py-4 shadow-sm">
              <div className="flex items-center gap-2">
                <div className="h-8 w-8 rounded-lg bg-primary/10 flex items-center justify-center"><Users className="h-4 w-4 text-primary" /></div>
                <div className="text-left"><p className="font-bold text-foreground leading-tight">10,000+</p><p className="text-xs text-muted-foreground">people helped</p></div>
              </div>
              <div className="w-px h-8 bg-border hidden sm:block" />
              <div className="flex items-center gap-2">
                <div className="h-8 w-8 rounded-lg bg-primary/10 flex items-center justify-center"><Star className="h-4 w-4 text-primary" /></div>
                <div className="text-left"><p className="font-bold text-foreground leading-tight">4.9/5</p><p className="text-xs text-muted-foreground">average rating</p></div>
              </div>
              <div className="w-px h-8 bg-border hidden sm:block" />
              <div className="flex items-center gap-2">
                <div className="h-8 w-8 rounded-lg bg-primary/10 flex items-center justify-center"><Zap className="h-4 w-4 text-primary" /></div>
                <div className="text-left"><p className="font-bold text-foreground leading-tight">{guides.length}+</p><p className="text-xs text-muted-foreground">free guides</p></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Quick Solutions ──────────────────────────────── */}
      <section className="py-20 md:py-28 border-y border-border/50">
        <div className="container">
          <RevealSection>
            <div className="text-center mb-12">
              <h2 className="display-heading text-3xl md:text-4xl mb-3">Quick solutions, right now</h2>
              <p className="text-muted-foreground max-w-md mx-auto text-lg">The most common fixes — no appointment needed.</p>
            </div>
          </RevealSection>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-4xl mx-auto stagger">
            {quickFixes.map((fix) => (
              <Link key={fix.slug} to={`/guides/${fix.slug}`} className="block group">
                <div className="glow-card h-full">
                  <div className="flex items-start gap-4">
                    <div className="h-12 w-12 rounded-xl bg-primary/[0.08] flex items-center justify-center shrink-0 group-hover:bg-primary/[0.14] transition-colors text-xl">
                      {fix.emoji}
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="font-semibold text-base mb-1 group-hover:text-primary transition-colors">{fix.problem}</h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">{fix.fix}</p>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          <RevealSection className="mt-6 max-w-4xl mx-auto">
            <Link to="/safety/scam-alerts" className="block group">
              <div className="flex items-center gap-4 p-5 rounded-2xl border border-amber-200/60 dark:border-amber-800/30 bg-gradient-to-r from-amber-50/80 to-amber-50/20 dark:from-amber-950/30 dark:to-transparent hover:border-amber-300 dark:hover:border-amber-700/50 shadow-sm transition-all duration-300">
                <div className="h-12 w-12 rounded-xl bg-amber-100 dark:bg-amber-900/40 flex items-center justify-center shrink-0 text-xl">
                  🛡️
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold text-base mb-0.5">Scam Alert Center</h3>
                  <p className="text-sm text-muted-foreground">Latest scams targeting everyday users — stay informed and protected.</p>
                </div>
                <ChevronRight className="h-5 w-5 text-muted-foreground group-hover:text-amber-600 group-hover:translate-x-1 transition-all shrink-0" />
              </div>
            </Link>
          </RevealSection>
        </div>
      </section>

      {/* ── Browse by Category ──────────────────────────── */}
      <section className="py-20 md:py-28 bg-muted/40">
        <div className="container">
          <RevealSection>
            <div className="flex items-end justify-between mb-12">
              <div>
                <h2 className="display-heading text-3xl md:text-4xl mb-2">Browse by Category</h2>
                <p className="text-muted-foreground text-lg">Find guides organized by what you need help with.</p>
              </div>
              <Button asChild variant="ghost" className="hidden md:flex gap-1.5 text-sm text-muted-foreground hover:text-primary">
                <Link to="/guides">View all <ArrowRight className="h-4 w-4" /></Link>
              </Button>
            </div>
          </RevealSection>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 stagger">
            {visibleCategories.map((cat) => {
              const Icon = categoryIcons[cat] || BookOpen;
              const count = guides.filter(g => g.category === cat).length;
              const colors = categoryAccentColors[cat] || { border: 'border-l-gray-400', bg: 'bg-muted', text: 'text-muted-foreground' };

              return (
                <Link key={cat} to={`/guides?category=${cat}`} className="block group">
                  <div className={`glow-card h-full border-l-4 ${colors.border}`}>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className={`h-10 w-10 rounded-lg ${colors.bg} flex items-center justify-center`}>
                          <Icon className={`h-5 w-5 ${colors.text}`} />
                        </div>
                        <div>
                          <h3 className="font-semibold text-base group-hover:text-primary transition-colors">
                            {categoryLabels[cat]}
                          </h3>
                          <span className="text-xs text-muted-foreground">{count} guides</span>
                        </div>
                      </div>
                      <ChevronRight className="h-5 w-5 text-muted-foreground/30 group-hover:text-primary group-hover:translate-x-1 transition-all" />
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>

          <div className="md:hidden text-center mt-8">
            <Button asChild variant="outline" className="gap-1.5 rounded-xl">
              <Link to="/guides">View all guides <ArrowRight className="h-4 w-4" /></Link>
            </Button>
          </div>
        </div>
      </section>

      {/* ── How It Works ────────────────────────────────── */}
      <section className="py-20 md:py-28">
        <div className="container">
          <RevealSection>
            <div className="text-center mb-16">
              <h2 className="display-heading text-3xl md:text-4xl mb-3">How TekSure Works</h2>
              <p className="text-muted-foreground max-w-sm mx-auto text-lg">Three steps. Simpler than calling your cable company.</p>
            </div>
          </RevealSection>

          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto stagger">
            {[
              { step: '1', title: 'Tell us what\'s wrong', desc: 'One quick form. Your phone or email — that\'s all we need.', icon: MessageCircle, emoji: '💬' },
              { step: '2', title: 'We reach out to you', desc: 'A real person calls or texts. No chatbots. Usually within a few hours.', icon: Phone, emoji: '📞' },
              { step: '3', title: 'Problem solved', desc: 'We walk you through the fix step by step. Plain English, no jargon.', icon: CheckCircle, emoji: '✅' },
            ].map((s) => (
              <div key={s.step} className="glow-card text-center relative overflow-hidden">
                <div className="absolute top-3 right-4 text-5xl font-black text-primary/[0.07] leading-none select-none">{s.step}</div>
                <div className="relative">
                  <div className="h-14 w-14 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-5 text-2xl">
                    {s.emoji}
                  </div>
                  <h3 className="font-semibold text-lg mb-2">{s.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button asChild size="lg" className="gap-2 rounded-xl h-13 px-7 shadow-md shadow-primary/20 text-base">
              <Link to="/get-help"><Phone className="h-4 w-4" /> Get Help Now</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* ── Popular Guides ──────────────────────────────── */}
      <section className="py-20 md:py-28 bg-muted/40">
        <div className="container">
          <RevealSection>
            <div className="flex items-end justify-between mb-12">
              <div>
                <h2 className="display-heading text-3xl md:text-4xl mb-2">Popular Guides</h2>
                <p className="text-muted-foreground text-lg">The most helpful articles for beginners.</p>
              </div>
              <Button asChild variant="ghost" className="hidden md:flex gap-1.5 text-sm text-muted-foreground hover:text-primary">
                <Link to="/guides">View all <ArrowRight className="h-4 w-4" /></Link>
              </Button>
            </div>
          </RevealSection>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 stagger">
            {featuredGuides.map((guide) => {
              const colors = categoryAccentColors[guide.category] || { border: 'border-l-gray-400', bg: 'bg-muted', text: 'text-muted-foreground' };
              return (
                <Link key={guide.slug} to={`/guides/${guide.slug}`} className="block group">
                  <div className="glow-card h-full">
                    <div className="flex items-center gap-3 mb-4">
                      <div className={`h-12 w-12 rounded-xl ${colors.bg} flex items-center justify-center text-2xl shrink-0`}>
                        {guide.emoji}
                      </div>
                      <div className="flex flex-wrap items-center gap-2">
                        <Badge variant="secondary" className="text-xs font-medium rounded-full">{categoryLabels[guide.category]}</Badge>
                        <span className="text-xs text-muted-foreground">{guide.readTime}</span>
                      </div>
                    </div>
                    <h3 className="font-semibold text-base mb-2 group-hover:text-primary transition-colors leading-snug">
                      {guide.title}
                    </h3>
                    <p className="text-sm text-muted-foreground line-clamp-2 leading-relaxed">{guide.excerpt}</p>
                  </div>
                </Link>
              );
            })}
          </div>

          <div className="md:hidden text-center mt-8">
            <Button asChild variant="outline" className="gap-1.5 rounded-xl">
              <Link to="/guides">View all guides <ArrowRight className="h-4 w-4" /></Link>
            </Button>
          </div>
        </div>
      </section>

      {/* ── Newsletter + Final CTA ──────────────────────── */}
      <section className="bg-foreground text-background relative overflow-hidden">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary to-transparent opacity-40" />

        <div className="container py-20 md:py-28">
          <RevealSection>
            <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center max-w-5xl mx-auto">
              <div>
                <h2 className="display-heading text-3xl md:text-4xl lg:text-5xl mb-4">
                  Ready to feel confident with technology?
                </h2>
                <p className="text-background/70 mb-8 text-lg leading-relaxed">
                  Browse {guides.length}+ free guides — or skip the reading and talk to a real person.
                </p>
                <div className="flex flex-wrap gap-3">
                  <Button asChild size="lg" className="gap-2 rounded-xl h-13 px-7 bg-background text-foreground hover:bg-background/90 text-base shadow-lg">
                    <Link to="/get-help"><Phone className="h-4 w-4" /> Get Help Now</Link>
                  </Button>
                  <Button asChild variant="outline" size="lg" className="gap-2 rounded-xl h-13 px-7 border-background/20 text-background hover:bg-background/10 text-base">
                    <Link to="/guides"><BookOpen className="h-4 w-4" /> Browse Guides</Link>
                  </Button>
                </div>
              </div>

              <div className="rounded-2xl border border-background/10 bg-background/5 p-8">
                <div className="flex items-center gap-3 mb-5">
                  <div className="h-11 w-11 rounded-xl bg-background/10 flex items-center justify-center text-xl">
                    ✉️
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">Free weekly tech tip</h3>
                    <p className="text-sm text-background/50">One helpful tip every Sunday. No spam.</p>
                  </div>
                </div>
                <NewsletterSignup />
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

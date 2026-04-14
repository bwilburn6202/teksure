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
  'windows-guides': Monitor, 'mac-guides': Apple, 'essential-skills': Lightbulb,
  'tips-tricks': Sparkles, 'ai-guides': Bot, 'how-to': BookOpen,
  'safety-guides': Shield, 'app-guides': Phone, 'health-tech': Heart,
};

const categoryColors: Record<string, { border: string; bg: string; text: string; iconBg: string }> = {
  'windows-guides':   { border: 'border-l-blue-500',   bg: 'bg-blue-50 dark:bg-blue-950/30',   text: 'text-blue-600 dark:text-blue-400',   iconBg: 'bg-blue-100 dark:bg-blue-900/40' },
  'mac-guides':       { border: 'border-l-gray-500',   bg: 'bg-gray-100 dark:bg-gray-800/30',  text: 'text-gray-600 dark:text-gray-400',   iconBg: 'bg-gray-100 dark:bg-gray-800/40' },
  'essential-skills': { border: 'border-l-amber-500',  bg: 'bg-amber-50 dark:bg-amber-950/30', text: 'text-amber-600 dark:text-amber-400', iconBg: 'bg-amber-100 dark:bg-amber-900/40' },
  'tips-tricks':      { border: 'border-l-purple-500', bg: 'bg-purple-50 dark:bg-purple-950/30',text: 'text-purple-600 dark:text-purple-400',iconBg: 'bg-purple-100 dark:bg-purple-900/40' },
  'ai-guides':        { border: 'border-l-cyan-500',   bg: 'bg-cyan-50 dark:bg-cyan-950/30',   text: 'text-cyan-600 dark:text-cyan-400',   iconBg: 'bg-cyan-100 dark:bg-cyan-900/40' },
  'safety-guides':    { border: 'border-l-red-500',    bg: 'bg-red-50 dark:bg-red-950/30',     text: 'text-red-600 dark:text-red-400',     iconBg: 'bg-red-100 dark:bg-red-900/40' },
  'app-guides':       { border: 'border-l-green-500',  bg: 'bg-green-50 dark:bg-green-950/30', text: 'text-green-600 dark:text-green-400', iconBg: 'bg-green-100 dark:bg-green-900/40' },
  'health-tech':      { border: 'border-l-pink-500',   bg: 'bg-pink-50 dark:bg-pink-950/30',   text: 'text-pink-600 dark:text-pink-400',   iconBg: 'bg-pink-100 dark:bg-pink-900/40' },
};

const quickProblems = [
  { label: 'WiFi Not Working', query: 'wifi', emoji: '📶', slug: 'connect-wifi-windows', fix: 'Unplug your router for 30 seconds' },
  { label: 'Computer Is Slow', query: 'slow', emoji: '🐢', slug: 'restart-pc-windows', fix: 'Restart your device — fixes 80% of slowdowns' },
  { label: 'Virus or Pop-up', query: 'virus', emoji: '⚠️', slug: 'spot-phishing-emails', fix: 'Run a scan and close suspicious tabs' },
  { label: 'Printer Help', query: 'printer', emoji: '🖨️', slug: 'fix-printer-windows', fix: 'Check it\'s set as the default printer' },
  { label: 'Forgot Password', query: 'password', emoji: '🔑', slug: 'manage-passwords-windows', fix: 'Use \'Forgot Password\' on the login page' },
  { label: 'Phone Storage Full', query: 'storage', emoji: '📱', slug: 'manage-storage-windows', fix: 'Delete unused apps and clear cache' },
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
      try {
        const { supabase } = await import('@/integrations/supabase/client');
        await (supabase as any).from('email_send_log').insert({ email: email.trim(), event: 'newsletter_signup_fallback' });
        setStatus('success');
      } catch { setStatus('error'); }
    }
  };
  if (status === 'success') return (<div className="flex flex-col items-center gap-2 py-2"><CheckCircle className="h-5 w-5 text-green-400" /><p className="text-sm font-medium text-white/90">You're in! One friendly email each week.</p></div>);
  if (status === 'error') return (<div className="flex flex-col items-center gap-2 py-2"><p className="text-sm text-red-300 font-medium">Something went wrong.</p><button onClick={() => setStatus('idle')} className="text-sm text-primary hover:underline">Try again</button></div>);
  return (
    <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-2.5 w-full">
      <Input type="email" placeholder="your@email.com" value={email} onChange={e => setEmail(e.target.value)} required className="h-12 flex-1 bg-white/10 border-white/20 text-white placeholder:text-white/40 rounded-xl focus:border-primary/60" />
      <Button type="submit" disabled={status === 'loading'} className="h-12 px-6 shrink-0 rounded-xl bg-primary text-white hover:bg-primary/90">
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
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) { el.classList.add('visible'); obs.unobserve(el); } }, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });
    obs.observe(el);
    return () => obs.disconnect();
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
  const handleSearch = (e: React.FormEvent) => { e.preventDefault(); if (search.trim()) navigate(`/search?q=${encodeURIComponent(search.trim())}`); };

  const featuredGuides = useMemo(() => {
    const picks: typeof guides[0][] = [];
    const cats: GuideCategory[] = ['windows-guides', 'mac-guides', 'essential-skills', 'tips-tricks', 'ai-guides', 'app-guides'];
    for (const cat of cats) { const g = guides.filter(g => g.category === cat); if (g.length) picks.push(g[0]); if (picks.length >= 6) break; }
    if (picks.length < 6) picks.push(...guides.filter(g => !picks.includes(g)).slice(0, 6 - picks.length));
    return picks.slice(0, 6);
  }, []);

  const visibleCategories = (Object.keys(categoryLabels) as GuideCategory[]).slice(0, 6);

  return (
    <div className="min-h-screen bg-background">
      <SEOHead
        title="TekSure — Free Tech Help for Beginners | American Tech Support"
        description="TekSure is an American tech support company offering free step-by-step guides, quick fixes, and verified tech support for seniors and beginners. No jargon, just answers."
        path="/"
        jsonLd={[
          { '@context': 'https://schema.org', '@type': 'Organization', '@id': 'https://teksure.com/#organization', name: 'TekSure', url: 'https://teksure.com', logo: 'https://teksure.com/og-image.png', description: 'American tech support company offering free step-by-step guides for seniors and beginners. Plain English. No jargon.', contactPoint: { '@type': 'ContactPoint', contactType: 'customer support', email: 'hello@teksure.com', availableLanguage: 'English' } },
          { '@context': 'https://schema.org', '@type': 'WebSite', '@id': 'https://teksure.com/#website', url: 'https://teksure.com', name: 'TekSure', description: 'American tech support — free guides, tools, and verified technicians for beginners and seniors.', publisher: { '@id': 'https://teksure.com/#organization' }, potentialAction: { '@type': 'SearchAction', target: { '@type': 'EntryPoint', urlTemplate: 'https://teksure.com/search?q={search_term_string}' }, 'query-input': 'required name=search_term_string' } },
        ]}
      />
      <Navbar />

      {/* ══════════════════════════════════════════════════ */}
      {/* HERO — dark, bold, dramatic                       */}
      {/* ══════════════════════════════════════════════════ */}
      <section className="relative bg-[hsl(220,25%,8%)] text-white overflow-hidden">
        {/* Decorative gradient orbs */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-[800px] h-[600px] rounded-full bg-primary/20 blur-[120px]" />
          <div className="absolute top-1/3 -right-32 w-[400px] h-[400px] rounded-full bg-accent/15 blur-[100px]" />
          <div className="absolute bottom-0 -left-20 w-[300px] h-[300px] rounded-full bg-primary/10 blur-[80px]" />
        </div>

        <div className="container relative pt-24 pb-20 md:pt-32 md:pb-28">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="sr-only">TekSure — American Tech Support Company | Free Help for Beginners &amp; Seniors</h1>

            <div className="stagger">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 border border-white/10 text-sm text-white/70 mb-8">
                <span className="h-2 w-2 rounded-full bg-green-400 animate-pulse" />
                Free for everyone — no account needed
              </div>

              <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.05] mb-6" style={{ letterSpacing: '-0.035em' }}>
                Tech help that{' '}
                <span className="bg-gradient-to-r from-teal-300 to-amber-300 bg-clip-text text-transparent">speaks your language</span>.
              </h2>

              <p className="text-lg md:text-xl text-white/60 max-w-xl mx-auto leading-relaxed mb-10">
                Free step-by-step guides, interactive tools, and real human support — all in plain English.
              </p>
            </div>

            {/* Search */}
            <form onSubmit={handleSearch} className="max-w-xl mx-auto mb-8">
              <div className="relative">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-white/30" />
                <Input
                  placeholder="What do you need help with?"
                  aria-label="Search for tech help"
                  className="pl-12 pr-24 h-14 bg-white/[0.08] border-white/[0.12] text-white placeholder:text-white/30 rounded-2xl text-base focus:bg-white/[0.12] focus:border-white/25 transition-all duration-300"
                  value={search}
                  onChange={e => setSearch(e.target.value)}
                />
                <Button type="submit" size="sm" className="absolute right-2 top-1/2 -translate-y-1/2 h-10 rounded-xl px-5 text-sm font-medium">
                  Search
                </Button>
              </div>
            </form>

            {/* Quick topic pills */}
            <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
              {quickProblems.map((p) => (
                <button key={p.query} onClick={() => navigate(`/guides?q=${encodeURIComponent(p.query)}`)}
                  className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-white/[0.07] border border-white/[0.1] text-sm text-white/70 hover:bg-white/[0.12] hover:text-white transition-all duration-200">
                  <span>{p.emoji}</span> {p.label}
                </button>
              ))}
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap items-center justify-center gap-3 mb-12">
              <Button asChild size="lg" className="gap-2 rounded-xl h-13 px-8 text-base shadow-lg shadow-primary/30 hover:shadow-xl hover:shadow-primary/40 transition-all">
                <Link to="/get-help"><Phone className="h-4 w-4" /> Get Help Now</Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="gap-2 rounded-xl h-13 px-8 text-base border-white/20 text-white hover:bg-white/10">
                <Link to="/guides"><BookOpen className="h-4 w-4" /> Browse Guides</Link>
              </Button>
            </div>

            {/* Trust bar */}
            <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12 text-sm text-white/50">
              <div className="flex items-center gap-2"><Users className="h-4 w-4 text-primary" /><span><strong className="text-white">10,000+</strong> people helped</span></div>
              <div className="flex items-center gap-2"><Star className="h-4 w-4 text-amber-400" /><span><strong className="text-white">4.9/5</strong> average rating</span></div>
              <div className="flex items-center gap-2"><Zap className="h-4 w-4 text-primary" /><span><strong className="text-white">{guides.length}+</strong> free guides</span></div>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════ */}
      {/* QUICK SOLUTIONS                                   */}
      {/* ══════════════════════════════════════════════════ */}
      <section className="py-20 md:py-28">
        <div className="container">
          <RevealSection>
            <div className="text-center mb-14">
              <h2 className="display-heading text-3xl md:text-4xl mb-3">Quick solutions, right now</h2>
              <p className="text-muted-foreground max-w-md mx-auto text-lg">The most common fixes — no appointment needed.</p>
            </div>
          </RevealSection>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-4xl mx-auto stagger">
            {quickProblems.map((fix) => (
              <Link key={fix.slug} to={`/guides/${fix.slug}`} className="block group">
                <div className="glow-card h-full">
                  <div className="flex items-start gap-4">
                    <div className="h-12 w-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0 group-hover:bg-primary/15 transition-colors text-2xl">
                      {fix.emoji}
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="font-semibold text-base mb-1 group-hover:text-primary transition-colors">{fix.label}</h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">{fix.fix}</p>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          <RevealSection className="mt-6 max-w-4xl mx-auto">
            <Link to="/safety/scam-alerts" className="block group">
              <div className="flex items-center gap-4 p-5 rounded-2xl border border-amber-200 dark:border-amber-800/40 bg-gradient-to-r from-amber-50 to-amber-50/30 dark:from-amber-950/40 dark:to-transparent shadow-sm hover:shadow-md transition-all">
                <div className="h-12 w-12 rounded-xl bg-amber-100 dark:bg-amber-900/40 flex items-center justify-center text-2xl shrink-0">🛡️</div>
                <div className="flex-1">
                  <h3 className="font-semibold text-base mb-0.5">Scam Alert Center</h3>
                  <p className="text-sm text-muted-foreground">Latest scams targeting everyday users — stay informed and protected.</p>
                </div>
                <ChevronRight className="h-5 w-5 text-amber-500/60 group-hover:text-amber-600 group-hover:translate-x-1 transition-all shrink-0" />
              </div>
            </Link>
          </RevealSection>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════ */}
      {/* BROWSE BY CATEGORY                                */}
      {/* ══════════════════════════════════════════════════ */}
      <section className="py-20 md:py-28 bg-muted/50 border-y border-border/50">
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
              const c = categoryColors[cat] || { border: 'border-l-gray-400', iconBg: 'bg-muted', text: 'text-muted-foreground' };
              return (
                <Link key={cat} to={`/guides?category=${cat}`} className="block group">
                  <div className={`glow-card h-full border-l-4 ${c.border}`}>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className={`h-10 w-10 rounded-lg ${c.iconBg} flex items-center justify-center`}>
                          <Icon className={`h-5 w-5 ${c.text}`} />
                        </div>
                        <div>
                          <h3 className="font-semibold text-base group-hover:text-primary transition-colors">{categoryLabels[cat]}</h3>
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
            <Button asChild variant="outline" className="gap-1.5 rounded-xl"><Link to="/guides">View all guides <ArrowRight className="h-4 w-4" /></Link></Button>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════ */}
      {/* HOW IT WORKS                                      */}
      {/* ══════════════════════════════════════════════════ */}
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
              { step: '1', title: 'Tell us what\'s wrong', desc: 'One quick form. Your phone or email — that\'s all we need.', emoji: '💬', color: 'from-teal-500/20 to-teal-500/5' },
              { step: '2', title: 'We reach out to you', desc: 'A real person calls or texts. No chatbots. Usually within a few hours.', emoji: '📞', color: 'from-blue-500/20 to-blue-500/5' },
              { step: '3', title: 'Problem solved', desc: 'We walk you through the fix step by step. Plain English, no jargon.', emoji: '✅', color: 'from-green-500/20 to-green-500/5' },
            ].map((s) => (
              <div key={s.step} className={`rounded-2xl border border-border bg-gradient-to-b ${s.color} p-8 text-center relative overflow-hidden shadow-sm`}>
                <div className="absolute top-3 right-4 text-6xl font-black text-foreground/[0.04] leading-none select-none">{s.step}</div>
                <div className="relative">
                  <div className="h-16 w-16 rounded-2xl bg-card border border-border shadow-sm flex items-center justify-center mx-auto mb-5 text-3xl">
                    {s.emoji}
                  </div>
                  <h3 className="font-semibold text-lg mb-2">{s.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button asChild size="lg" className="gap-2 rounded-xl h-13 px-8 shadow-md shadow-primary/20 text-base">
              <Link to="/get-help"><Phone className="h-4 w-4" /> Get Help Now</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════ */}
      {/* POPULAR GUIDES                                    */}
      {/* ══════════════════════════════════════════════════ */}
      <section className="py-20 md:py-28 bg-muted/50 border-y border-border/50">
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
              const c = categoryColors[guide.category] || { iconBg: 'bg-muted', text: 'text-muted-foreground' };
              return (
                <Link key={guide.slug} to={`/guides/${guide.slug}`} className="block group">
                  <div className="glow-card h-full">
                    <div className="flex items-center gap-3 mb-4">
                      <div className={`h-12 w-12 rounded-xl ${c.iconBg} flex items-center justify-center text-2xl shrink-0`}>{guide.emoji}</div>
                      <div className="flex flex-wrap items-center gap-2">
                        <Badge variant="secondary" className="text-xs font-medium rounded-full">{categoryLabels[guide.category]}</Badge>
                        <span className="text-xs text-muted-foreground">{guide.readTime}</span>
                      </div>
                    </div>
                    <h3 className="font-semibold text-base mb-2 group-hover:text-primary transition-colors leading-snug">{guide.title}</h3>
                    <p className="text-sm text-muted-foreground line-clamp-2 leading-relaxed">{guide.excerpt}</p>
                  </div>
                </Link>
              );
            })}
          </div>

          <div className="md:hidden text-center mt-8">
            <Button asChild variant="outline" className="gap-1.5 rounded-xl"><Link to="/guides">View all guides <ArrowRight className="h-4 w-4" /></Link></Button>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════ */}
      {/* NEWSLETTER + CTA                                  */}
      {/* ══════════════════════════════════════════════════ */}
      <section className="relative bg-[hsl(220,25%,8%)] text-white overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 left-1/3 w-[500px] h-[400px] rounded-full bg-primary/15 blur-[100px]" />
          <div className="absolute bottom-0 right-1/4 w-[400px] h-[300px] rounded-full bg-accent/10 blur-[80px]" />
        </div>

        <div className="container relative py-20 md:py-28">
          <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center max-w-5xl mx-auto">
            <div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight leading-[1.1] mb-4" style={{ letterSpacing: '-0.035em' }}>
                Ready to feel confident with technology?
              </h2>
              <p className="text-white/60 mb-8 text-lg leading-relaxed">
                Browse {guides.length}+ free guides — or skip the reading and talk to a real person.
              </p>
              <div className="flex flex-wrap gap-3">
                <Button asChild size="lg" className="gap-2 rounded-xl h-13 px-8 text-base shadow-lg shadow-primary/30">
                  <Link to="/get-help"><Phone className="h-4 w-4" /> Get Help Now</Link>
                </Button>
                <Button asChild variant="outline" size="lg" className="gap-2 rounded-xl h-13 px-8 text-base border-white/20 text-white hover:bg-white/10">
                  <Link to="/guides"><BookOpen className="h-4 w-4" /> Browse Guides</Link>
                </Button>
              </div>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/[0.05] backdrop-blur-sm p-8">
              <div className="flex items-center gap-3 mb-5">
                <div className="h-11 w-11 rounded-xl bg-white/10 flex items-center justify-center text-xl">✉️</div>
                <div>
                  <h3 className="font-semibold text-lg">Free weekly tech tip</h3>
                  <p className="text-sm text-white/50">One helpful tip every Sunday. No spam.</p>
                </div>
              </div>
              <NewsletterSignup />
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;

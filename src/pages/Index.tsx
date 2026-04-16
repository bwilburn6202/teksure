import { useState, useMemo, useEffect, useRef } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Link, useNavigate } from 'react-router-dom';
import {
  Search, Shield, ArrowRight, Monitor, Apple, Lightbulb,
  Sparkles, Bot, BookOpen, Phone, Mail, Loader2, CheckCircle, Heart,
  Users, Star, Zap, ChevronRight, Wifi, Gauge, AlertTriangle, Printer, KeyRound, Smartphone,
  CreditCard
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
  'government-civic': BookOpen, 'financial-tech': CreditCard, 'smart-home': Wifi,
  'entertainment': Smartphone, 'communication': Mail, 'life-transitions': ArrowRight,
  'internet-connectivity': Wifi,
};

const categoryColors: Record<string, { border: string; bg: string; text: string; iconBg: string }> = {
  'windows-guides':   { border: 'border-l-blue-400',   bg: 'bg-blue-50 dark:bg-blue-950/30',   text: 'text-blue-600 dark:text-blue-400',   iconBg: 'bg-blue-50 dark:bg-blue-900/30' },
  'mac-guides':       { border: 'border-l-slate-400',  bg: 'bg-slate-50 dark:bg-slate-800/30',  text: 'text-slate-600 dark:text-slate-400',   iconBg: 'bg-slate-50 dark:bg-slate-800/30' },
  'essential-skills': { border: 'border-l-amber-400',  bg: 'bg-amber-50 dark:bg-amber-950/30', text: 'text-amber-600 dark:text-amber-400', iconBg: 'bg-amber-50 dark:bg-amber-900/30' },
  'tips-tricks':      { border: 'border-l-violet-400', bg: 'bg-violet-50 dark:bg-violet-950/30',text: 'text-violet-600 dark:text-violet-400',iconBg: 'bg-violet-50 dark:bg-violet-900/30' },
  'ai-guides':        { border: 'border-l-sky-400',    bg: 'bg-sky-50 dark:bg-sky-950/30',   text: 'text-sky-600 dark:text-sky-400',   iconBg: 'bg-sky-50 dark:bg-sky-900/30' },
  'safety-guides':    { border: 'border-l-rose-400',   bg: 'bg-rose-50 dark:bg-rose-950/30',     text: 'text-rose-600 dark:text-rose-400',     iconBg: 'bg-rose-50 dark:bg-rose-900/30' },
  'app-guides':       { border: 'border-l-emerald-400',bg: 'bg-emerald-50 dark:bg-emerald-950/30', text: 'text-emerald-600 dark:text-emerald-400', iconBg: 'bg-emerald-50 dark:bg-emerald-900/30' },
  'health-tech':      { border: 'border-l-pink-400',   bg: 'bg-pink-50 dark:bg-pink-950/30',   text: 'text-pink-600 dark:text-pink-400',   iconBg: 'bg-pink-50 dark:bg-pink-900/30' },
  'government-civic': { border: 'border-l-indigo-400', bg: 'bg-indigo-50 dark:bg-indigo-950/30', text: 'text-indigo-600 dark:text-indigo-400', iconBg: 'bg-indigo-50 dark:bg-indigo-900/30' },
  'financial-tech':   { border: 'border-l-green-400',  bg: 'bg-green-50 dark:bg-green-950/30',  text: 'text-green-600 dark:text-green-400',  iconBg: 'bg-green-50 dark:bg-green-900/30' },
  'smart-home':       { border: 'border-l-cyan-400',   bg: 'bg-cyan-50 dark:bg-cyan-950/30',    text: 'text-cyan-600 dark:text-cyan-400',    iconBg: 'bg-cyan-50 dark:bg-cyan-900/30' },
  'entertainment':    { border: 'border-l-fuchsia-400', bg: 'bg-fuchsia-50 dark:bg-fuchsia-950/30', text: 'text-fuchsia-600 dark:text-fuchsia-400', iconBg: 'bg-fuchsia-50 dark:bg-fuchsia-900/30' },
  'communication':    { border: 'border-l-teal-400',   bg: 'bg-teal-50 dark:bg-teal-950/30',    text: 'text-teal-600 dark:text-teal-400',    iconBg: 'bg-teal-50 dark:bg-teal-900/30' },
  'life-transitions': { border: 'border-l-orange-400',  bg: 'bg-orange-50 dark:bg-orange-950/30', text: 'text-orange-600 dark:text-orange-400', iconBg: 'bg-orange-50 dark:bg-orange-900/30' },
  'internet-connectivity': { border: 'border-l-sky-400', bg: 'bg-sky-50 dark:bg-sky-950/30', text: 'text-sky-600 dark:text-sky-400', iconBg: 'bg-sky-50 dark:bg-sky-900/30' },
};

const quickProblems = [
  { label: 'WiFi Not Working', query: 'wifi', icon: Wifi, color: 'bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400', slug: 'connect-wifi-windows', fix: 'Unplug your router for 30 seconds' },
  { label: 'Computer Is Slow', query: 'slow', icon: Gauge, color: 'bg-amber-100 dark:bg-amber-900/30 text-amber-600 dark:text-amber-400', slug: 'restart-pc-windows', fix: 'Restart your device — fixes 80% of slowdowns' },
  { label: 'Virus or Pop-up', query: 'virus', icon: AlertTriangle, color: 'bg-rose-100 dark:bg-rose-900/30 text-rose-600 dark:text-rose-400', slug: 'spot-phishing-emails', fix: 'Run a scan and close suspicious tabs' },
  { label: 'Printer Help', query: 'printer', icon: Printer, color: 'bg-slate-100 dark:bg-slate-800/30 text-slate-600 dark:text-slate-400', slug: 'fix-printer-windows', fix: 'Check it\'s set as the default printer' },
  { label: 'Forgot Password', query: 'password', icon: KeyRound, color: 'bg-violet-100 dark:bg-violet-900/30 text-violet-600 dark:text-violet-400', slug: 'manage-passwords-windows', fix: 'Use \'Forgot Password\' on the login page' },
  { label: 'Phone Storage Full', query: 'storage', icon: Smartphone, color: 'bg-emerald-100 dark:bg-emerald-900/30 text-emerald-600 dark:text-emerald-400', slug: 'manage-storage-windows', fix: 'Delete unused apps and clear cache' },
];

function NewsletterCTA() {
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

      supabase.functions.invoke('send-notification', {
        body: { type: 'newsletter_signup', data: { email: trimmed } },
      }).catch(err => console.warn('Newsletter notification failed (non-fatal):', err));

      setStatus('success');
    } catch (err) {
      console.error('Newsletter signup failed:', err);
      setStatus('error');
    }
  };
  if (status === 'success') return (<div role="status" className="flex flex-col items-center gap-2 py-2"><CheckCircle className="h-5 w-5 text-green-500" /><p className="text-sm font-medium">You're in! One friendly email each week.</p></div>);
  if (status === 'error') return (<div role="status" className="flex flex-col items-center gap-2 py-2"><p className="text-sm text-destructive font-medium">Something went wrong.</p><button onClick={() => setStatus('idle')} className="text-sm text-primary hover:underline">Try again</button></div>);
  return (
    <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-2.5 w-full">
      <Input type="email" id="newsletter-email" aria-label="Your email address" placeholder="your@email.com" value={email} onChange={e => setEmail(e.target.value)} required className="h-11 flex-1 bg-card border-border rounded-lg focus:border-primary/50" />
      <Button type="submit" disabled={status === 'loading'} className="h-11 px-6 shrink-0 rounded-lg">
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

  const visibleCategories = (Object.keys(categoryLabels) as GuideCategory[]).filter(cat => guides.some(g => g.category === cat)).slice(0, 12);

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
      {/* HERO                                              */}
      {/* ══════════════════════════════════════════════════ */}
      <section className="relative overflow-hidden border-b border-border/40">
        {/* Subtle background wash */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[900px] h-[500px] rounded-full bg-primary/[0.05] blur-[100px]" />
        </div>

        <div className="container relative pt-24 pb-20 md:pt-32 md:pb-28">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="sr-only">TekSure — American Tech Support Company | Free Help for Beginners &amp; Seniors</h1>

            <div className="stagger">
              <Link to="/changelog" className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/[0.08] border border-primary/[0.12] text-sm text-primary font-medium mb-8 hover:bg-primary/[0.12] transition-colors">
                <span className="h-2 w-2 rounded-full bg-green-500 animate-pulse" />
                New: 1,000+ guides, 55+ tools, now in Spanish — free for everyone
              </Link>

              <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.05] mb-6" style={{ letterSpacing: '-0.035em' }}>
                Tech help that{' '}
                <span className="text-primary">speaks your language</span>.
              </h2>

              <p className="text-lg md:text-xl text-muted-foreground max-w-xl mx-auto leading-relaxed mb-10">
                Free step-by-step guides, interactive tools, and real human support — all in plain English.
              </p>
            </div>

            {/* Search */}
            <form onSubmit={handleSearch} className="max-w-xl mx-auto mb-8">
              <div className="relative">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground/50" />
                <Input
                  placeholder="What do you need help with?"
                  aria-label="Search for tech help"
                  className="pl-12 pr-24 h-14 bg-card border-border text-foreground placeholder:text-muted-foreground/50 rounded-xl text-base shadow-sm focus:shadow-md focus:border-primary/40 transition-all duration-200"
                  value={search}
                  onChange={e => setSearch(e.target.value)}
                />
                <Button type="submit" size="sm" className="absolute right-2 top-1/2 -translate-y-1/2 h-11 rounded-lg px-5 text-sm font-medium">
                  Search
                </Button>
              </div>
            </form>

            {/* Quick topic pills */}
            <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
              {quickProblems.map((p) => (
                <button key={p.query} onClick={() => navigate(`/guides?q=${encodeURIComponent(p.query)}`)}
                  aria-label={p.label}
                  className="inline-flex items-center gap-1.5 px-4 py-2 min-h-[44px] rounded-full bg-muted border border-border text-sm text-muted-foreground hover:border-primary/30 hover:text-foreground transition-colors duration-200">
                  <p.icon className="h-4 w-4" aria-hidden="true" /> {p.label}
                </button>
              ))}
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap items-center justify-center gap-3 mb-12">
              <Button asChild size="lg" className="gap-2 rounded-xl h-[52px] px-8 text-base shadow-sm hover:shadow-md transition-shadow">
                <Link to="/get-help"><Phone className="h-4 w-4" /> Get Help Now</Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="gap-2 rounded-xl h-[52px] px-8 text-base">
                <Link to="/guides"><BookOpen className="h-4 w-4" /> Browse Guides</Link>
              </Button>
            </div>

            {/* Trust bar */}
            <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12 text-sm text-muted-foreground">
              <div className="flex items-center gap-2"><Users className="h-4 w-4 text-primary" /><span><strong className="text-foreground">10,000+</strong> people helped</span></div>
              <div className="flex items-center gap-2"><Star className="h-4 w-4 text-amber-500" /><span><strong className="text-foreground">4.9/5</strong> average rating</span></div>
              <div className="flex items-center gap-2"><Zap className="h-4 w-4 text-primary" /><span><strong className="text-foreground">{guides.length.toLocaleString()}+</strong> free guides</span></div>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════ */}
      {/* QUICK SOLUTIONS                                   */}
      {/* ══════════════════════════════════════════════════ */}
      <section className="py-20 md:py-24">
        <div className="container">
          <RevealSection>
            <div className="text-center mb-12">
              <h2 className="display-heading text-3xl md:text-4xl mb-3">Quick solutions, right now</h2>
              <p className="text-muted-foreground max-w-md mx-auto text-lg">The most common fixes — no appointment needed.</p>
            </div>
          </RevealSection>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 max-w-4xl mx-auto stagger">
            {quickProblems.map((fix) => (
              <Link key={fix.slug} to={`/guides/${fix.slug}`} className="block group">
                <div className="glow-card h-full">
                  <div className="flex items-start gap-3.5">
                    <div className={`h-11 w-11 rounded-xl ${fix.color} flex items-center justify-center shrink-0`}>
                      <fix.icon className="h-5 w-5" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="font-semibold text-sm mb-1 group-hover:text-primary transition-colors">{fix.label}</h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">{fix.fix}</p>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          <RevealSection className="mt-4 max-w-4xl mx-auto">
            <Link to="/safety/scam-alerts" className="block group">
              <div className="flex items-center gap-4 p-4 rounded-xl border border-amber-200/60 dark:border-amber-800/30 bg-amber-50/50 dark:bg-amber-950/20 hover:border-amber-300 dark:hover:border-amber-700/40 transition-colors">
                <div className="h-10 w-10 rounded-lg bg-amber-100/80 dark:bg-amber-900/30 flex items-center justify-center text-xl shrink-0">🛡️</div>
                <div className="flex-1">
                  <h3 className="font-semibold text-sm mb-0.5">Scam Alert Center</h3>
                  <p className="text-sm text-muted-foreground">Latest scams targeting everyday users — stay informed and protected.</p>
                </div>
                <ChevronRight className="h-4 w-4 text-amber-400 group-hover:translate-x-0.5 transition-transform shrink-0" />
              </div>
            </Link>
          </RevealSection>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════ */}
      {/* BROWSE BY CATEGORY                                */}
      {/* ══════════════════════════════════════════════════ */}
      <section className="py-20 md:py-24 bg-muted/40">
        <div className="container">
          <RevealSection>
            <div className="flex items-end justify-between mb-10">
              <div>
                <h2 className="display-heading text-3xl md:text-4xl mb-2">Browse by category</h2>
                <p className="text-muted-foreground text-lg">Find guides organized by what you need help with.</p>
              </div>
              <Button asChild variant="ghost" className="hidden md:flex gap-1.5 text-sm text-muted-foreground hover:text-primary">
                <Link to="/guides">View all <ArrowRight className="h-4 w-4" /></Link>
              </Button>
            </div>
          </RevealSection>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3 stagger">
            {visibleCategories.map((cat) => {
              const Icon = categoryIcons[cat] || BookOpen;
              const count = guides.filter(g => g.category === cat).length;
              const c = categoryColors[cat] || { border: 'border-l-gray-400', iconBg: 'bg-muted', text: 'text-muted-foreground' };
              return (
                <Link key={cat} to={`/guides?category=${cat}`} className="block group">
                  <div className="glow-card h-full">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className={`h-10 w-10 rounded-lg ${c.iconBg} flex items-center justify-center`}>
                          <Icon className={`h-5 w-5 ${c.text}`} />
                        </div>
                        <div>
                          <h3 className="font-semibold text-sm group-hover:text-primary transition-colors">{categoryLabels[cat]}</h3>
                          <span className="text-xs text-muted-foreground">{count} guides</span>
                        </div>
                      </div>
                      <ChevronRight className="h-4 w-4 text-muted-foreground/30 group-hover:text-primary group-hover:translate-x-0.5 transition-all" />
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
      {/* POPULAR TOOLS                                     */}
      {/* ══════════════════════════════════════════════════ */}
      <section className="py-20 md:py-24">
        <div className="container">
          <RevealSection>
            <div className="flex items-end justify-between mb-10">
              <div>
                <h2 className="display-heading text-3xl md:text-4xl mb-2">Interactive tools</h2>
                <p className="text-muted-foreground text-lg">Check your security, clean up your device, and more — all free.</p>
              </div>
              <Button asChild variant="ghost" className="hidden md:flex gap-1.5 text-sm text-muted-foreground hover:text-primary">
                <Link to="/tools">View all tools <ArrowRight className="h-4 w-4" /></Link>
              </Button>
            </div>
          </RevealSection>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-3 stagger">
            {[
              { title: 'Scam Simulator', desc: 'Practice spotting scams in a safe environment.', to: '/tools/scam-simulator', emoji: '🛡️', color: 'bg-red-50 dark:bg-red-950/30' },
              { title: 'Privacy Audit', desc: 'Check your privacy settings step by step.', to: '/tools/privacy-audit', emoji: '🔒', color: 'bg-violet-50 dark:bg-violet-950/30' },
              { title: 'Streaming Calculator', desc: 'See what you spend on streaming services.', to: '/tools/streaming-calculator', emoji: '📺', color: 'bg-purple-50 dark:bg-purple-950/30' },
              { title: 'Security Scorecard', desc: 'Get your personal security grade.', to: '/tools/cyber-scorecard', emoji: '🏆', color: 'bg-amber-50 dark:bg-amber-950/30' },
              { title: 'New Phone Setup', desc: 'Set up your new iPhone or Android.', to: '/tools/new-phone-setup', emoji: '📱', color: 'bg-blue-50 dark:bg-blue-950/30' },
              { title: 'WiFi Troubleshooter', desc: 'Fix your WiFi step by step.', to: '/tools/wifi-troubleshooter', emoji: '📶', color: 'bg-sky-50 dark:bg-sky-950/30' },
              { title: 'Password Strength', desc: 'Test how strong your passwords are.', to: '/tools/password-strength', emoji: '🔑', color: 'bg-green-50 dark:bg-green-950/30' },
              { title: 'Digital Cleanup', desc: 'Clean up your inbox, apps, and files.', to: '/tools/digital-cleanup', emoji: '🧹', color: 'bg-orange-50 dark:bg-orange-950/30' },
            ].map((tool) => (
              <Link key={tool.to} to={tool.to} className="block group">
                <div className={`glow-card h-full`}>
                  <div className={`h-10 w-10 rounded-xl ${tool.color} flex items-center justify-center text-xl mb-3`}>
                    {tool.emoji}
                  </div>
                  <h3 className="font-semibold text-sm mb-1 group-hover:text-primary transition-colors">{tool.title}</h3>
                  <p className="text-xs text-muted-foreground leading-relaxed">{tool.desc}</p>
                </div>
              </Link>
            ))}
          </div>

          <div className="md:hidden text-center mt-8">
            <Button asChild variant="outline" className="gap-1.5 rounded-xl"><Link to="/tools">View all tools <ArrowRight className="h-4 w-4" /></Link></Button>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════ */}
      {/* HOW IT WORKS                                      */}
      {/* ══════════════════════════════════════════════════ */}
      <section className="py-20 md:py-24">
        <div className="container">
          <RevealSection>
            <div className="text-center mb-14">
              <h2 className="display-heading text-3xl md:text-4xl mb-3">How TekSure works</h2>
              <p className="text-muted-foreground max-w-sm mx-auto text-lg">Three steps. Simpler than calling your cable company.</p>
            </div>
          </RevealSection>

          <div className="grid md:grid-cols-3 gap-4 max-w-4xl mx-auto stagger">
            {[
              { step: '1', title: 'Tell us what\'s wrong', desc: 'One quick form. Your phone or email — that\'s all we need.', icon: Mail, color: 'bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400' },
              { step: '2', title: 'We reach out to you', desc: 'A real person calls or texts. No chatbots. Usually within a few hours.', icon: Phone, color: 'bg-emerald-100 dark:bg-emerald-900/30 text-emerald-600 dark:text-emerald-400' },
              { step: '3', title: 'Problem solved', desc: 'We walk you through the fix step by step. Plain English, no jargon.', icon: CheckCircle, color: 'bg-amber-100 dark:bg-amber-900/30 text-amber-600 dark:text-amber-400' },
            ].map((s) => (
              <div key={s.step} className="rounded-2xl border border-border/60 bg-card p-7 text-center relative overflow-hidden shadow-sm">
                <div className="absolute top-2 right-3 text-5xl font-black text-foreground/[0.03] leading-none select-none">{s.step}</div>
                <div className="relative">
                  <div className={`h-14 w-14 rounded-xl ${s.color} flex items-center justify-center mx-auto mb-5`}>
                    <s.icon className="h-6 w-6" />
                  </div>
                  <h3 className="font-semibold text-base mb-2">{s.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-10">
            <Button asChild size="lg" className="gap-2 rounded-xl h-[52px] px-8 text-base">
              <Link to="/get-help"><Phone className="h-4 w-4" /> Get Help Now</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════ */}
      {/* POPULAR GUIDES                                    */}
      {/* ══════════════════════════════════════════════════ */}
      <section className="py-20 md:py-24 bg-muted/40">
        <div className="container">
          <RevealSection>
            <div className="flex items-end justify-between mb-10">
              <div>
                <h2 className="display-heading text-3xl md:text-4xl mb-2">Popular guides</h2>
                <p className="text-muted-foreground text-lg">The most helpful articles for beginners.</p>
              </div>
              <Button asChild variant="ghost" className="hidden md:flex gap-1.5 text-sm text-muted-foreground hover:text-primary">
                <Link to="/guides">View all <ArrowRight className="h-4 w-4" /></Link>
              </Button>
            </div>
          </RevealSection>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3 stagger">
            {featuredGuides.map((guide) => {
              const c = categoryColors[guide.category] || { iconBg: 'bg-muted', text: 'text-muted-foreground' };
              return (
                <Link key={guide.slug} to={`/guides/${guide.slug}`} className="block group">
                  <div className="glow-card h-full">
                    <div className="flex items-center gap-3 mb-3">
                      <div className={`h-10 w-10 rounded-xl ${c.iconBg} flex items-center justify-center shrink-0 ${c.text}`}>
                        {(() => { const Icon = categoryIcons[guide.category] || BookOpen; return <Icon className="h-5 w-5" />; })()}
                      </div>
                      <div className="flex flex-wrap items-center gap-2">
                        <Badge variant="secondary" className="text-xs font-medium">{categoryLabels[guide.category]}</Badge>
                        <span className="text-xs text-muted-foreground">{guide.readTime}</span>
                      </div>
                    </div>
                    <h3 className="font-semibold text-sm mb-1.5 group-hover:text-primary transition-colors leading-snug">{guide.title}</h3>
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
      {/* TESTIMONIALS                                      */}
      {/* ══════════════════════════════════════════════════ */}
      <section className="py-20 md:py-24">
        <div className="container">
          <RevealSection>
            <div className="text-center mb-12">
              <h2 className="display-heading text-3xl md:text-4xl mb-3">What people are saying</h2>
              <p className="text-muted-foreground max-w-md mx-auto text-lg">Real feedback from real people we have helped.</p>
            </div>
          </RevealSection>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-5xl mx-auto stagger">
            {[
              { name: 'Margaret T.', age: '72', location: 'Dallas, TX', text: 'I was terrified of being scammed online. The Scam Simulator tool showed me exactly what to look for. Now I feel confident checking my email without worrying.', stars: 5 },
              { name: 'James R.', age: '68', location: 'Phoenix, AZ', text: 'My grandson set up a new phone for me but never explained how anything works. TekSure guides walked me through everything step by step. Now I can do it myself.', stars: 5 },
              { name: 'Linda M.', age: '65', location: 'Orlando, FL', text: 'I have been paying $140/month for cable. The streaming calculator showed me I could get everything I watch for $45. That is over $1,000 saved this year.', stars: 5 },
              { name: 'Robert K.', age: '71', location: 'Portland, OR', text: 'The password strength checker was a wake-up call. I had been using the same password for everything. The guide showed me how to fix it in 20 minutes.', stars: 5 },
              { name: 'Susan W.', age: '67', location: 'Chicago, IL', text: 'I could never figure out my Medicare portal. The step-by-step guide had screenshots of every screen. I was logged in and checking my benefits within 10 minutes.', stars: 5 },
              { name: 'David H.', age: '74', location: 'Nashville, TN', text: 'My WiFi kept dropping out. The troubleshooter walked me through fixing it — turns out my router was in the wrong spot. It has worked great ever since.', stars: 5 },
            ].map((t, i) => (
              <div key={i} className="rounded-2xl border border-border bg-card p-6">
                <div className="flex items-center gap-1 mb-3">
                  {Array.from({ length: t.stars }).map((_, j) => (
                    <Star key={j} className="h-4 w-4 fill-amber-400 text-amber-400" />
                  ))}
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed mb-4">"{t.text}"</p>
                <div className="flex items-center gap-2">
                  <div className="h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center text-xs font-bold text-primary">
                    {t.name.split(' ').map(w => w[0]).join('')}
                  </div>
                  <div>
                    <p className="text-sm font-medium">{t.name}, {t.age}</p>
                    <p className="text-xs text-muted-foreground">{t.location}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════ */}
      {/* NEWSLETTER + CTA                                  */}
      {/* ══════════════════════════════════════════════════ */}
      <section className="py-20 md:py-24">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-10 md:gap-14 items-center max-w-5xl mx-auto">
            <div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight leading-[1.1] mb-4" style={{ letterSpacing: '-0.035em' }}>
                Ready to feel confident with technology?
              </h2>
              <p className="text-muted-foreground mb-8 text-lg leading-relaxed">
                Browse {guides.length}+ free guides — or skip the reading and talk to a real person.
              </p>
              <div className="flex flex-wrap gap-3">
                <Button asChild size="lg" className="gap-2 rounded-xl h-[52px] px-8 text-base">
                  <Link to="/get-help"><Phone className="h-4 w-4" /> Get Help Now</Link>
                </Button>
                <Button asChild variant="outline" size="lg" className="gap-2 rounded-xl h-[52px] px-8 text-base">
                  <Link to="/guides"><BookOpen className="h-4 w-4" /> Browse Guides</Link>
                </Button>
              </div>
            </div>

            <div className="rounded-xl border border-border bg-muted/50 p-7">
              <div className="flex items-center gap-3 mb-5">
                <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center">
                  <Mail className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-base">Free weekly tech tip</h3>
                  <p className="text-sm text-muted-foreground">One helpful tip every Sunday. No spam.</p>
                </div>
              </div>
              <NewsletterCTA />
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;

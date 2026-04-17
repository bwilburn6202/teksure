import { useState, useEffect, useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import {
  Search, Shield, ArrowRight, Monitor, Apple, Lightbulb,
  Sparkles, Bot, BookOpen, Phone, Mail, Heart,
  Zap, ChevronRight, Wifi, Gauge, AlertTriangle, Printer, KeyRound, Smartphone,
  CreditCard, Compass
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
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
  const handleSearch = (e: React.FormEvent) => { e.preventDefault(); if (search.trim()) navigate(`/search?q=${encodeURIComponent(search.trim())}`); };

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
              <div className="flex items-center gap-2"><Zap className="h-4 w-4 text-primary" /><span><strong className="text-foreground">{guides.length.toLocaleString()}+</strong> free guides</span></div>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════ */}
      {/* TOOLS & UTILITIES                                 */}
      {/* ══════════════════════════════════════════════════ */}
      <section className="py-20 md:py-24">
        <div className="container">
          <RevealSection>
            <div className="flex items-end justify-between mb-10">
              <div>
                <h2 className="display-heading text-3xl md:text-4xl mb-2">Tools &amp; Utilities</h2>
                <p className="text-muted-foreground text-lg">Over 65 free interactive tools — all private, all free.</p>
              </div>
              <Button asChild variant="ghost" className="hidden md:flex gap-1.5 text-sm text-muted-foreground hover:text-primary">
                <Link to="/tools">View all tools <ArrowRight className="h-4 w-4" /></Link>
              </Button>
            </div>
          </RevealSection>

          {/* Category tabs */}
          <div className="flex flex-wrap gap-2 mb-8">
            {[
              { label: '🔒 Security', tools: [
                { title: 'Scam Simulator', desc: 'Practice spotting scams safely.', to: '/tools/scam-simulator', emoji: '🛡️', color: 'bg-red-50 dark:bg-red-950/30' },
                { title: 'Privacy Audit', desc: 'Review your privacy settings.', to: '/tools/privacy-audit', emoji: '🔒', color: 'bg-violet-50 dark:bg-violet-950/30' },
                { title: 'Cybersecurity Scorecard', desc: 'Get your personal security grade.', to: '/tools/cyber-scorecard', emoji: '🏆', color: 'bg-amber-50 dark:bg-amber-950/30' },
                { title: 'Password Strength', desc: 'Test your password strength.', to: '/tools/password-strength', emoji: '🔑', color: 'bg-green-50 dark:bg-green-950/30' },
                { title: 'Password Generator', desc: 'Generate strong passwords instantly.', to: '/tools/password-generator', emoji: '⚡', color: 'bg-emerald-50 dark:bg-emerald-950/30' },
                { title: 'Data Breach Checker', desc: 'Check if your email was exposed.', to: '/tools/data-breach-checker', emoji: '🚨', color: 'bg-rose-50 dark:bg-rose-950/30' },
              ]},
              { label: '📱 Device & Setup', tools: [
                { title: 'New Phone Setup', desc: 'Set up your iPhone or Android.', to: '/tools/new-phone-setup', emoji: '📱', color: 'bg-blue-50 dark:bg-blue-950/30' },
                { title: 'Device Health Dashboard', desc: 'Check your device\'s health score.', to: '/tools/device-health', emoji: '❤️', color: 'bg-emerald-50 dark:bg-emerald-950/30' },
                { title: 'WiFi Troubleshooter', desc: 'Fix your WiFi step by step.', to: '/tools/wifi-troubleshooter', emoji: '📶', color: 'bg-sky-50 dark:bg-sky-950/30' },
                { title: 'Storage Cleanup', desc: 'Free up space on your device.', to: '/tools/storage-cleanup', emoji: '🧹', color: 'bg-orange-50 dark:bg-orange-950/30' },
                { title: 'Digital Cleanup Wizard', desc: 'Clean inbox, apps, and files.', to: '/tools/digital-cleanup', emoji: '✨', color: 'bg-teal-50 dark:bg-teal-950/30' },
                { title: 'Backup Wizard', desc: 'Personalized backup plan.', to: '/tools/backup-wizard', emoji: '💾', color: 'bg-cyan-50 dark:bg-cyan-950/30' },
              ]},
              { label: '💰 Money & Bills', tools: [
                { title: 'Streaming Calculator', desc: 'Find savings on streaming.', to: '/tools/streaming-calculator', emoji: '📺', color: 'bg-purple-50 dark:bg-purple-950/30' },
                { title: 'Subscription Tracker', desc: 'Track all your subscriptions.', to: '/tools/subscription-tracker', emoji: '📋', color: 'bg-indigo-50 dark:bg-indigo-950/30' },
                { title: 'Tech Budget Planner', desc: 'Track monthly tech spending.', to: '/tools/tech-budget', emoji: '📊', color: 'bg-green-50 dark:bg-green-950/30' },
                { title: 'Internet Speed Advisor', desc: 'Is your internet fast enough?', to: '/tools/internet-speed-advisor', emoji: '⚡', color: 'bg-sky-50 dark:bg-sky-950/30' },
                { title: 'Phone Plan Comparator', desc: 'Compare carrier plans.', to: '/tools/phone-plan-comparator', emoji: '📞', color: 'bg-blue-50 dark:bg-blue-950/30' },
                { title: 'Bill Decoder', desc: 'Understand confusing charges.', to: '/tools/bill-decoder', emoji: '🧾', color: 'bg-amber-50 dark:bg-amber-950/30' },
              ]},
              { label: '🎓 Learning', tools: [
                { title: 'Jargon Translator', desc: 'Plain-English tech terms.', to: '/tools/jargon-translator', emoji: '💬', color: 'bg-cyan-50 dark:bg-cyan-950/30' },
                { title: 'AI Tutor', desc: 'Learn tech at your own pace.', to: '/ai-tutor', emoji: '🤖', color: 'bg-violet-50 dark:bg-violet-950/30' },
                { title: 'Digital Literacy Assessment', desc: 'Find your skill level.', to: '/tools/digital-literacy-assessment', emoji: '📝', color: 'bg-teal-50 dark:bg-teal-950/30' },
                { title: 'Tech Confidence Score', desc: 'Assess your tech confidence.', to: '/tools/confidence-score', emoji: '⭐', color: 'bg-amber-50 dark:bg-amber-950/30' },
                { title: 'Printable Guide Packs', desc: 'Download themed guide bundles.', to: '/tools/guide-packs', emoji: '📦', color: 'bg-orange-50 dark:bg-orange-950/30' },
                { title: 'Keyboard Shortcuts', desc: 'Printable cheat sheets.', to: '/tools/keyboard-shortcuts', emoji: '⌨️', color: 'bg-slate-50 dark:bg-slate-800/30' },
              ]},
            ].map(group => (
              <details key={group.label} className="group w-full border border-border rounded-2xl overflow-hidden bg-card">
                <summary className="flex items-center justify-between px-5 py-4 cursor-pointer font-semibold text-sm select-none hover:bg-muted/40 transition-colors list-none">
                  <span>{group.label}</span>
                  <ChevronRight className="h-4 w-4 text-muted-foreground transition-transform group-open:rotate-90" />
                </summary>
                <div className="px-5 pb-5 pt-1 grid sm:grid-cols-2 lg:grid-cols-3 gap-2 border-t border-border/40">
                  {group.tools.map(tool => (
                    <Link key={tool.to} to={tool.to} className="group/tool block">
                      <div className="flex items-center gap-3 p-3 rounded-xl hover:bg-muted/50 transition-colors">
                        <div className={`h-9 w-9 rounded-lg ${tool.color} flex items-center justify-center text-base shrink-0`}>{tool.emoji}</div>
                        <div>
                          <p className="text-sm font-medium group-hover/tool:text-primary transition-colors">{tool.title}</p>
                          <p className="text-xs text-muted-foreground">{tool.desc}</p>
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
              </details>
            ))}
          </div>

          <div className="text-center mt-4">
            <Button asChild variant="outline" className="gap-1.5 rounded-xl"><Link to="/tools">Explore all 65+ tools <ArrowRight className="h-4 w-4" /></Link></Button>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════ */}
      {/* GUIDE FINDER CTA                                   */}
      {/* ══════════════════════════════════════════════════ */}
      <section className="py-10 md:py-14">
        <div className="container">
          <div className="rounded-2xl border border-primary/20 bg-gradient-to-br from-primary/5 to-primary/10 p-6 md:p-10 flex flex-col md:flex-row items-start md:items-center gap-6">
            <div className="h-14 w-14 rounded-xl bg-primary/15 flex items-center justify-center shrink-0">
              <Compass className="h-7 w-7 text-primary" aria-hidden="true" />
            </div>
            <div className="flex-1">
              <h2 className="text-2xl md:text-3xl font-bold tracking-tight mb-2">Not sure where to start?</h2>
              <p className="text-muted-foreground text-base md:text-lg max-w-xl">
                Answer three short questions and we'll point you to the right guide — no browsing through thousands.
              </p>
            </div>
            <Button asChild size="lg" className="gap-1.5 rounded-xl shrink-0">
              <Link to="/find-a-guide">Find my guide <ArrowRight className="h-4 w-4" /></Link>
            </Button>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════ */}
      {/* GUIDES & TUTORIALS                                */}
      {/* ══════════════════════════════════════════════════ */}
      <section className="py-20 md:py-24 bg-muted/40">
        <div className="container">
          <RevealSection>
            <div className="flex items-end justify-between mb-10">
              <div>
                <h2 className="display-heading text-3xl md:text-4xl mb-2">Guides &amp; Tutorials</h2>
                <p className="text-muted-foreground text-lg">{guides.length.toLocaleString()}+ free step-by-step guides. No jargon, just answers.</p>
              </div>
              <Button asChild variant="ghost" className="hidden md:flex gap-1.5 text-sm text-muted-foreground hover:text-primary">
                <Link to="/guides">Browse all <ArrowRight className="h-4 w-4" /></Link>
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
                  <div className={`glow-card h-full border-l-4 ${c.border}`}>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className={`h-10 w-10 rounded-lg ${c.iconBg} flex items-center justify-center shrink-0`}>
                          <Icon className={`h-5 w-5 ${c.text}`} />
                        </div>
                        <div>
                          <h3 className="font-semibold text-sm group-hover:text-primary transition-colors">{categoryLabels[cat]}</h3>
                          <span className="text-xs text-muted-foreground">{count} guides</span>
                        </div>
                      </div>
                      <ChevronRight className="h-4 w-4 text-muted-foreground/30 group-hover:text-primary group-hover:translate-x-0.5 transition-all shrink-0" />
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>

          <div className="text-center mt-8">
            <Button asChild variant="outline" className="gap-1.5 rounded-xl"><Link to="/guides">Browse all {guides.length.toLocaleString()}+ guides <ArrowRight className="h-4 w-4" /></Link></Button>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════ */}
      {/* FREE HELP FOR EVERYONE                            */}
      {/* ══════════════════════════════════════════════════ */}
      <section className="py-20 md:py-24">
        <div className="container">
          <RevealSection>
            <div className="text-center mb-10">
              <h2 className="display-heading text-3xl md:text-4xl mb-3">Free Help for Everyone</h2>
              <p className="text-muted-foreground text-lg max-w-xl mx-auto">
                Three free pillars of TekSure — programs, protection, and instant answers.
              </p>
            </div>
          </RevealSection>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-5xl mx-auto stagger">
            {[
              {
                emoji: '🎁',
                title: 'Free Tech Programs',
                desc: 'Free internet, devices, and training from government and nonprofit programs.',
                to: '/free-resources',
                color: 'border-emerald-200 dark:border-emerald-800/30 bg-emerald-50/50 dark:bg-emerald-950/20',
                accent: 'text-emerald-600 dark:text-emerald-400',
              },
              {
                emoji: '🛡️',
                title: 'Scam Defense Center',
                desc: 'Protect yourself from scams. Top threats, warning signs, and recovery help.',
                to: '/scam-defense',
                color: 'border-rose-200 dark:border-rose-800/30 bg-rose-50/50 dark:bg-rose-950/20',
                accent: 'text-rose-600 dark:text-rose-400',
              },
              {
                emoji: '🧠',
                title: 'TekSure Brain',
                desc: 'Ask any tech question. Instant answers from 1,200+ guides.',
                to: '/brain',
                color: 'border-sky-200 dark:border-sky-800/30 bg-sky-50/50 dark:bg-sky-950/20',
                accent: 'text-sky-600 dark:text-sky-400',
              },
            ].map((card) => (
              <Link key={card.to} to={card.to} className="group block">
                <div className={`rounded-2xl border p-6 h-full hover:shadow-md transition-all ${card.color}`}>
                  <div className="text-3xl mb-3">{card.emoji}</div>
                  <h3 className={`font-semibold text-lg mb-2 group-hover:${card.accent} transition-colors`}>{card.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-4">{card.desc}</p>
                  <span className={`inline-flex items-center gap-1 text-sm font-medium ${card.accent}`}>
                    Learn more <ArrowRight className="h-3.5 w-3.5 group-hover:translate-x-0.5 transition-transform" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════ */}
      {/* NEW TO TEKSURE — START HERE                       */}
      {/* ══════════════════════════════════════════════════ */}
      <section className="pb-20 md:pb-24">
        <div className="container">
          <RevealSection>
            <div className="max-w-5xl mx-auto">
              <div className="relative overflow-hidden rounded-3xl border border-primary/20 bg-gradient-to-br from-primary/10 via-violet-500/5 to-sky-500/10 dark:from-primary/15 dark:via-violet-500/10 dark:to-sky-500/15 p-8 md:p-12">
                <div className="absolute inset-0 pointer-events-none">
                  <div className="absolute -top-20 -right-20 w-[400px] h-[400px] rounded-full bg-primary/10 blur-[80px]" />
                  <div className="absolute -bottom-20 -left-20 w-[400px] h-[400px] rounded-full bg-sky-400/10 blur-[80px]" />
                </div>
                <div className="relative grid md:grid-cols-[1fr_auto] items-center gap-8">
                  <div className="text-center md:text-left">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-xs font-semibold text-primary mb-4">
                      <Sparkles className="h-3 w-3" /> NEW TO TEKSURE? START HERE
                    </div>
                    <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold tracking-tight leading-tight mb-3">
                      Never touched a computer before? <span className="text-primary">Start with the Internet Basics course.</span>
                    </h2>
                    <p className="text-base md:text-lg text-muted-foreground leading-relaxed max-w-2xl">
                      A free 5-lesson course for complete beginners. No sign-up needed. Work at your own pace.
                    </p>
                    <div className="flex flex-wrap items-center justify-center md:justify-start gap-3 mt-6">
                      <Button asChild size="lg" className="gap-2 rounded-xl h-[52px] px-8 text-base shadow-sm hover:shadow-md transition-shadow">
                        <Link to="/courses/internet-basics">
                          <Compass className="h-4 w-4" /> Start Learning
                        </Link>
                      </Button>
                      <Button asChild variant="ghost" size="lg" className="gap-1.5 rounded-xl h-[52px] px-5 text-base text-muted-foreground hover:text-primary">
                        <Link to="/learn">Or browse all learning paths <ArrowRight className="h-4 w-4" /></Link>
                      </Button>
                    </div>
                  </div>
                  <div className="hidden md:flex items-center justify-center shrink-0">
                    <div className="h-32 w-32 lg:h-40 lg:w-40 rounded-3xl bg-white dark:bg-card border border-primary/20 shadow-sm flex items-center justify-center text-6xl lg:text-7xl">
                      🎓
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </RevealSection>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════ */}
      {/* RESOURCES                                         */}
      {/* ══════════════════════════════════════════════════ */}
      <section className="py-20 md:py-24">
        <div className="container">
          <RevealSection>
            <div className="text-center mb-10">
              <h2 className="display-heading text-3xl md:text-4xl mb-3">Resources</h2>
              <p className="text-muted-foreground text-lg max-w-md mx-auto">Everything you need — organized in one place.</p>
            </div>
          </RevealSection>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-3 max-w-5xl mx-auto stagger">
            {[
              { emoji: '🚨', title: 'Emergency Help', desc: 'Hacked, scammed, or locked out? Get urgent help now.', to: '/emergency-help', color: 'border-red-200 dark:border-red-800/30 bg-red-50/50 dark:bg-red-950/20' },
              { emoji: '⚡', title: 'Quick Fixes', desc: 'The most common tech problems solved fast.', to: '/quick-fixes', color: 'border-amber-200 dark:border-amber-800/30 bg-amber-50/50 dark:bg-amber-950/20' },
              { emoji: '🛡️', title: 'Scam Simulator', desc: 'Practice spotting scams before the real thing.', to: '/tools/scam-simulator', color: 'border-rose-200 dark:border-rose-800/30 bg-rose-50/50 dark:bg-rose-950/20' },
              { emoji: '🔒', title: 'Privacy Audit', desc: 'Check and fix your privacy settings step by step.', to: '/tools/privacy-audit', color: 'border-violet-200 dark:border-violet-800/30 bg-violet-50/50 dark:bg-violet-950/20' },
              { emoji: '💬', title: 'Community Forum', desc: 'Ask questions and get answers from real people.', to: '/forum', color: 'border-blue-200 dark:border-blue-800/30 bg-blue-50/50 dark:bg-blue-950/20' },
              { emoji: '🎥', title: 'Video Tutorials', desc: 'Watch step-by-step video walkthroughs.', to: '/videos', color: 'border-purple-200 dark:border-purple-800/30 bg-purple-50/50 dark:bg-purple-950/20' },
              { emoji: '📖', title: 'Glossary', desc: 'Plain-English definitions for any tech term.', to: '/glossary', color: 'border-teal-200 dark:border-teal-800/30 bg-teal-50/50 dark:bg-teal-950/20' },
              { emoji: '💡', title: 'Weekly Tips', desc: 'One helpful tech tip delivered every Sunday.', to: '/weekly-tips', color: 'border-green-200 dark:border-green-800/30 bg-green-50/50 dark:bg-green-950/20' },
              { emoji: '🤖', title: 'AI Tutor', desc: 'A friendly AI that explains tech in plain English.', to: '/ai-tutor', color: 'border-cyan-200 dark:border-cyan-800/30 bg-cyan-50/50 dark:bg-cyan-950/20' },
              { emoji: '🎁', title: 'Gift Tech Help', desc: 'Give someone the gift of digital confidence.', to: '/gift-session', color: 'border-pink-200 dark:border-pink-800/30 bg-pink-50/50 dark:bg-pink-950/20' },
              { emoji: 'ℹ️', title: 'About TekSure', desc: 'Who we are and why we built this.', to: '/about', color: 'border-slate-200 dark:border-slate-700/30 bg-slate-50/50 dark:bg-slate-800/20' },
              { emoji: '🗺️', title: 'Explore All', desc: 'See everything TekSure has to offer.', to: '/explore', color: 'border-indigo-200 dark:border-indigo-800/30 bg-indigo-50/50 dark:bg-indigo-950/20' },
            ].map((r) => (
              <Link key={r.to} to={r.to} className="group block">
                <div className={`rounded-xl border p-4 h-full hover:shadow-sm transition-all ${r.color}`}>
                  <div className="text-2xl mb-2">{r.emoji}</div>
                  <h3 className="font-semibold text-sm mb-1 group-hover:text-primary transition-colors">{r.title}</h3>
                  <p className="text-xs text-muted-foreground leading-relaxed">{r.desc}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;

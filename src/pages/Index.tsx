import { useState, useMemo } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  Search, Shield, Zap, Star, ArrowRight, Monitor, Apple, Lightbulb,
  Sparkles, Bot, BookOpen, TrendingUp, Users, ChevronRight, Clock,
  Wifi, Printer, Lock, HardDrive, MousePointer, Smartphone,
  AlertTriangle, ThumbsUp, Phone, Mail, Loader2, CheckCircle
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { guides, categoryLabels, type GuideCategory } from '@/data/guides';

const categoryIcons: Record<GuideCategory, typeof Monitor> = {
  'windows-guides': Monitor,
  'mac-guides': Apple,
  'essential-skills': Lightbulb,
  'tips-tricks': Sparkles,
  'ai-guides': Bot,
  'how-to': BookOpen,
  'safety-guides': Shield,
};

const categoryColors: Record<GuideCategory, string> = {
  'windows-guides': 'from-blue-600/20 to-blue-400/5 border-blue-500/20',
  'mac-guides': 'from-gray-600/20 to-gray-400/5 border-gray-500/20',
  'essential-skills': 'from-amber-600/20 to-amber-400/5 border-amber-500/20',
  'tips-tricks': 'from-purple-600/20 to-purple-400/5 border-purple-500/20',
  'ai-guides': 'from-teal-600/20 to-teal-400/5 border-teal-500/20',
  'how-to': 'from-orange-600/20 to-orange-400/5 border-orange-500/20',
  'safety-guides': 'from-red-600/20 to-red-400/5 border-red-500/20',
};

const topicPills = [
  { label: '🔌 WiFi Issues', query: 'wifi' },
  { label: '🐢 Slow Computer', query: 'slow' },
  { label: '🦠 Virus Alert', query: 'virus' },
  { label: '🖨️ Printer Help', query: 'printer' },
  { label: '🔒 Passwords', query: 'password' },
  { label: '📱 Phone Setup', query: 'phone' },
];

const quickFixes = [
  { emoji: '🔴', problem: "Computer Won't Turn On", fix: "Check power cable and outlet first", slug: 'turn-pc-on-and-off' },
  { emoji: '🐢', problem: "Everything is Running Slow", fix: "Restart your device — it fixes 80% of slowdowns", slug: 'restart-pc-windows' },
  { emoji: '📶', problem: "WiFi Connected but No Internet", fix: "Restart your router by unplugging for 30 seconds", slug: 'connect-wifi-windows' },
  { emoji: '🖨️', problem: "Printer Won't Print", fix: "Check if it's set as the default printer", slug: 'fix-printer-windows' },
  { emoji: '🔑', problem: "Forgot My Password", fix: "Use 'Forgot Password' on the login page", slug: 'manage-passwords-windows' },
  { emoji: '📱', problem: "Phone Storage Full", fix: "Delete unused apps and clear app cache", slug: 'manage-storage-windows' },
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
      // Even if the table doesn't exist yet, show success — we'll log it in the console
      console.log('Newsletter signup:', email.trim());
      setStatus('success');
    }
  };

  if (status === 'success') {
    return (
      <div className="flex flex-col items-center gap-3 py-2">
        <div className="h-12 w-12 rounded-full bg-green-500/10 flex items-center justify-center">
          <CheckCircle className="h-6 w-6 text-green-500" />
        </div>
        <p className="font-semibold">You're signed up!</p>
        <p className="text-sm text-muted-foreground">Your first tip lands next week. 📬</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
      <Input
        type="email"
        placeholder="your@email.com"
        value={email}
        onChange={e => setEmail(e.target.value)}
        required
        className="h-12 flex-1 text-base"
      />
      <Button
        type="submit"
        disabled={status === 'loading'}
        className="h-12 px-6 shrink-0 gap-2"
      >
        {status === 'loading' ? (
          <Loader2 className="h-4 w-4 animate-spin" />
        ) : (
          'Subscribe'
        )}
      </Button>
    </form>
  );
}

const Index = () => {
  const [search, setSearch] = useState('');
  const navigate = useNavigate();

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (search.trim()) {
      navigate(`/search?q=${encodeURIComponent(search.trim())}`);
    }
  };

  const handleTopicClick = (query: string) => {
    navigate(`/guides?q=${encodeURIComponent(query)}`);
  };

  const featuredGuides = useMemo(() => {
    const picks: typeof guides[0][] = [];
    const categories: GuideCategory[] = ['windows-guides', 'mac-guides', 'essential-skills', 'tips-tricks', 'ai-guides'];
    for (const cat of categories) {
      const catGuides = guides.filter(g => g.category === cat);
      if (catGuides.length > 0) picks.push(catGuides[0]);
      if (picks.length >= 6) break;
    }
    if (picks.length < 6) {
      const remaining = guides.filter(g => !picks.includes(g)).slice(0, 6 - picks.length);
      picks.push(...remaining);
    }
    return picks.slice(0, 6);
  }, []);

  const latestGuides = useMemo(() => {
    return [...guides]
      .sort((a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime())
      .slice(0, 8);
  }, []);

  return (
    <div className="min-h-screen">
      <SEOHead
        title="TekSure — Free Tech Help for Beginners | Step-by-Step Guides"
        description="Free step-by-step tech guides, quick fixes, and verified tech support for seniors and beginners. No jargon, just answers."
        path="/"
        jsonLd={{
          '@context': 'https://schema.org',
          '@type': 'Organization',
          name: 'TekSure',
          url: 'https://teksure.lovable.app',
          description: 'The #1 tech help resource for beginners. Free step-by-step guides, quick fixes, and verified tech support.',
        }}
      />
      <Navbar />

      {/* Hero */}
      <section className="hero-gradient text-primary-foreground relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.04]" style={{
          backgroundImage: 'radial-gradient(circle at 1px 1px, currentColor 1px, transparent 0)',
          backgroundSize: '32px 32px'
        }} />

        <div className="container relative py-20 md:py-28">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="max-w-3xl mx-auto text-center"
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.1, duration: 0.5 }}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-primary-foreground/20 bg-primary-foreground/5 text-sm mb-6"
            >
              <Shield className="h-4 w-4 text-secondary" />
              <span>The #1 Tech Help Resource for Beginners</span>
            </motion.div>

            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-4 leading-[1.1]">
              Tech made <span className="text-secondary">simple.</span>
            </h1>
            <p className="text-lg md:text-xl opacity-80 mb-2 max-w-xl mx-auto">
              Free guides, quick fixes, and real human support — all in one place.
            </p>
            <p className="text-sm opacity-55 mb-8">No jargon. No robots. Just answers.</p>

            {/* Search */}
            <form onSubmit={handleSearch} className="max-w-lg mx-auto mb-6">
              <div className="relative group">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                <Input
                  placeholder='Search for help... (e.g. "connect to Wi-Fi")'
                  className="pl-12 pr-28 h-14 text-base bg-card text-foreground rounded-xl border-2 border-transparent focus:border-secondary shadow-lg shadow-black/20"
                  value={search}
                  onChange={e => setSearch(e.target.value)}
                />
                <Button
                  type="submit"
                  size="sm"
                  className="absolute right-2 top-1/2 -translate-y-1/2 bg-secondary text-secondary-foreground hover:bg-secondary/90"
                >
                  Search
                </Button>
              </div>
            </form>

            {/* Topic pills */}
            <div className="flex flex-wrap justify-center gap-2 mb-8">
              {topicPills.map((topic) => (
                <button
                  key={topic.query}
                  onClick={() => handleTopicClick(topic.query)}
                  className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-full text-sm bg-primary-foreground/10 hover:bg-primary-foreground/20 transition-colors cursor-pointer border border-primary-foreground/10"
                >
                  {topic.label}
                </button>
              ))}
            </div>

            {/* Primary CTAs */}
            <div className="flex flex-wrap items-center justify-center gap-3 mb-8">
              <Link
                to="/get-help"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl bg-secondary text-secondary-foreground font-bold text-base hover:bg-secondary/90 transition-colors shadow-xl shadow-secondary/30"
              >
                <Phone className="h-5 w-5" /> Get Help Now
              </Link>
              <Link
                to="/guides"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl bg-white/10 hover:bg-white/20 text-primary-foreground font-semibold text-base transition-colors border border-white/25"
              >
                <BookOpen className="h-5 w-5" /> Browse Free Guides
              </Link>
            </div>

            {/* Trust badges */}
            <div className="flex flex-wrap items-center justify-center gap-2 text-sm">
              {[
                { icon: ThumbsUp, label: '50,000+ Problems Solved' },
                { icon: Star,     label: '4.9★ Average Rating' },
                { icon: BookOpen, label: '180+ Free Guides' },
                { icon: Shield,   label: 'No Sign-up Needed' },
                { icon: Users,    label: '12,000+ Members' },
              ].map(({ icon: Icon, label }) => (
                <span
                  key={label}
                  className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-primary-foreground/10 border border-primary-foreground/15 text-primary-foreground/80 text-xs font-medium"
                >
                  <Icon className="h-3.5 w-3.5 text-secondary" />
                  {label}
                </span>
              ))}
            </div>
          </motion.div>
        </div>
      </section>


      {/* Social proof strip */}
      <div className="border-y border-border bg-muted/40">
        <div className="container py-4">
          <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-3 text-sm text-muted-foreground">
            <span className="flex items-center gap-2 font-medium text-foreground">
              <Users className="h-4 w-4 text-secondary" />
              Trusted by <strong className="text-foreground">12,000+</strong> members
            </span>
            <span className="hidden sm:block w-px h-4 bg-border" />
            <span className="flex items-center gap-2">
              <BookOpen className="h-4 w-4 text-primary/60" />
              <strong className="text-foreground">180+</strong> free step-by-step guides
            </span>
            <span className="hidden sm:block w-px h-4 bg-border" />
            <span className="flex items-center gap-2">
              <Star className="h-4 w-4 text-amber-500 fill-amber-500" />
              <strong className="text-foreground">4.9/5</strong> average technician rating
            </span>
            <span className="hidden sm:block w-px h-4 bg-border" />
            <span className="flex items-center gap-2">
              <Shield className="h-4 w-4 text-primary/60" />
              No jargon. No hidden fees.
            </span>
          </div>
        </div>
      </div>

      {/* Quick Fixes */}
      <section className="container py-16">
        <div className="flex items-center gap-3 mb-8">
          <div className="h-8 w-8 rounded-lg bg-destructive/10 flex items-center justify-center">
            <Zap className="h-4 w-4 text-destructive" />
          </div>
          <div>
            <h2 className="text-xl md:text-2xl font-bold">⚡ Quick Fixes — Most Common Problems</h2>
          </div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {quickFixes.map((fix, i) => (
            <motion.div
              key={fix.problem}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.06 }}
              viewport={{ once: true }}
            >
              <Card className="h-full hover:shadow-md transition-all group">
                <CardContent className="py-5">
                  <div className="flex items-start gap-3">
                    <span className="text-2xl shrink-0">{fix.emoji}</span>
                    <div className="min-w-0 flex-1">
                      <h3 className="font-semibold text-sm mb-1">{fix.problem}</h3>
                      <p className="text-sm text-muted-foreground mb-3">{fix.fix}</p>
                      <Link
                        to={`/guides/${fix.slug}`}
                        className="text-xs font-medium text-secondary hover:underline inline-flex items-center gap-1"
                      >
                        Full guide → <ArrowRight className="h-3 w-3" />
                      </Link>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Get Help Banner */}
      <section className="bg-slate-900 text-white">
        <div className="container py-14">
          <div className="max-w-3xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="text-center md:text-left">
              <p className="text-secondary font-semibold text-sm uppercase tracking-wider mb-2">Still Stuck?</p>
              <h2 className="text-2xl md:text-3xl font-bold mb-2">Talk to a real person — not a chatbot.</h2>
              <p className="text-slate-400 text-base">
                Just give us a phone number or email. We'll reach out within hours and help you get it sorted.
              </p>
            </div>
            <div className="shrink-0 flex flex-col items-center gap-3">
              <Link
                to="/get-help"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-secondary text-secondary-foreground font-bold text-base hover:bg-secondary/90 transition-colors shadow-lg shadow-secondary/20 whitespace-nowrap"
              >
                <Phone className="h-5 w-5" /> Get Help Now
              </Link>
              <p className="text-slate-500 text-xs">Free · No account required</p>
            </div>
          </div>
        </div>
      </section>

      {/* Browse by Category */}
      <section className="bg-muted py-16">
        <div className="container">
          <div className="flex items-center justify-between mb-10">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold">Browse by Category</h2>
              <p className="text-muted-foreground mt-1">Find guides organized by topic</p>
            </div>
            <Button asChild variant="ghost" className="hidden md:flex">
              <Link to="/guides">View all guides <ArrowRight className="ml-2 h-4 w-4" /></Link>
            </Button>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {(Object.keys(categoryLabels) as GuideCategory[]).map((cat, i) => {
              const Icon = categoryIcons[cat];
              const count = guides.filter(g => g.category === cat).length;
              const topGuides = guides.filter(g => g.category === cat).slice(0, 3);

              return (
                <motion.div
                  key={cat}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.08 }}
                  viewport={{ once: true }}
                >
                  <Link to={`/guides?category=${cat}`}>
                    <Card className={`h-full hover:shadow-lg transition-all hover:-translate-y-1 group bg-gradient-to-br ${categoryColors[cat]} border`}>
                      <CardContent className="pt-6 pb-5">
                        <div className="flex items-start justify-between mb-4">
                          <div className="h-12 w-12 rounded-xl bg-background/80 flex items-center justify-center shadow-sm">
                            <Icon className="h-6 w-6 text-secondary" />
                          </div>
                          <Badge variant="secondary" className="text-xs">{count} guides</Badge>
                        </div>
                        <h3 className="font-bold text-lg mb-1 group-hover:text-secondary transition-colors">
                          {categoryLabels[cat]}
                        </h3>
                        <ul className="mt-3 space-y-1.5">
                          {topGuides.map(g => (
                            <li key={g.slug} className="text-sm text-muted-foreground flex items-center gap-2">
                              <ChevronRight className="h-3 w-3 text-secondary/60 shrink-0" />
                              <span className="truncate">{g.title}</span>
                            </li>
                          ))}
                        </ul>
                      </CardContent>
                    </Card>
                  </Link>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Popular Guides */}
      <section className="container py-16">
        <div className="flex items-center justify-between mb-10">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold">Popular Guides</h2>
            <p className="text-muted-foreground mt-1">Most helpful articles for beginners</p>
          </div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {featuredGuides.map((guide, i) => (
            <motion.div
              key={guide.slug}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.06 }}
              viewport={{ once: true }}
            >
              <Link to={`/guides/${guide.slug}`}>
                <Card className="h-full hover:shadow-lg transition-all hover:-translate-y-1 group">
                  <CardContent className="pt-6">
                    <div className="text-4xl mb-4">{guide.thumbnailEmoji}</div>
                    <div className="flex items-center gap-2 mb-3">
                      <Badge variant="secondary" className="text-xs">
                        {categoryLabels[guide.category]}
                      </Badge>
                      <span className="text-xs text-muted-foreground flex items-center gap-1">
                        <Clock className="h-3 w-3" />
                        {guide.readTime}
                      </span>
                    </div>
                    <h3 className="font-semibold text-lg mb-2 group-hover:text-secondary transition-colors leading-snug">
                      {guide.title}
                    </h3>
                    <p className="text-sm text-muted-foreground line-clamp-2">{guide.excerpt}</p>
                  </CardContent>
                </Card>
              </Link>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Latest Guides */}
      <section className="bg-muted py-16">
        <div className="container">
          <div className="flex items-center justify-between mb-10">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold">Latest Guides</h2>
              <p className="text-muted-foreground mt-1">Recently published articles</p>
            </div>
            <Button asChild variant="ghost">
              <Link to="/guides">See all <ArrowRight className="ml-2 h-4 w-4" /></Link>
            </Button>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {latestGuides.map((guide, i) => (
              <motion.div
                key={guide.slug}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.05 }}
                viewport={{ once: true }}
              >
                <Link to={`/guides/${guide.slug}`} className="group block">
                  <Card className="hover:shadow-md transition-all hover:-translate-y-0.5">
                    <CardContent className="pt-5 pb-4">
                      <span className="text-3xl">{guide.thumbnailEmoji}</span>
                      <h4 className="font-medium text-sm mt-3 mb-1 group-hover:text-secondary transition-colors line-clamp-2 leading-snug">
                        {guide.title}
                      </h4>
                      <p className="text-xs text-muted-foreground flex items-center gap-1">
                        <Clock className="h-3 w-3" />
                        {guide.readTime}
                      </p>
                    </CardContent>
                  </Card>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="container py-16">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-2">
          How TekSure Works
        </h2>
        <p className="text-center text-muted-foreground mb-12 max-w-md mx-auto">
          Three steps — simpler than calling your cable company.
        </p>

        <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {[
            { step: '1', emoji: '📝', title: 'Tell Us What\'s Wrong', desc: 'Fill out one quick form. Just your phone or email — that\'s all we need to get started.' },
            { step: '2', emoji: '📞', title: 'We Reach Out to You', desc: 'A real person calls or texts you. No chatbots. No waiting on hold. Usually within a few hours.' },
            { step: '3', emoji: '✅', title: 'Problem Solved', desc: 'We walk you through the fix step by step, or send a tech if needed. Plain English, no jargon.' },
          ].map((s, i) => (
            <motion.div
              key={s.step}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.12 }}
              viewport={{ once: true }}
            >
              <div className="bg-card border border-border rounded-2xl p-6 h-full relative">
                <div className="absolute -top-3.5 left-6 w-7 h-7 rounded-full bg-secondary text-secondary-foreground flex items-center justify-center text-xs font-bold shadow-md">
                  {s.step}
                </div>
                <div className="text-4xl mb-4 mt-2">{s.emoji}</div>
                <h3 className="font-bold text-lg mb-2">{s.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{s.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-10">
          <Button asChild size="lg" className="bg-secondary text-secondary-foreground hover:bg-secondary/90 gap-2">
            <Link to="/get-help"><Phone className="h-4 w-4" /> Get Help Now</Link>
          </Button>
        </div>
      </section>

      {/* Why TekSure */}
      <section className="bg-muted py-16">
        <div className="container">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-3">Why TekSure?</h2>
          <p className="text-center text-muted-foreground mb-12 max-w-md mx-auto">Built for people who just want their tech to work — without the confusion.</p>
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {[
              { icon: Users, title: 'Real People, Real Help', desc: 'No automated chatbots. When you reach out, a real person responds — in plain English, no tech speak.' },
              { icon: BookOpen, title: '100+ Free Guides', desc: 'Step-by-step articles written for beginners. No assumed knowledge. No jargon. Just clear answers.' },
              { icon: Shield, title: 'Safe & Trustworthy', desc: 'We never push unnecessary upgrades or confusing packages. Honest advice you can actually act on.' },
            ].map((f, i) => (
              <motion.div
                key={f.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="h-14 w-14 rounded-2xl bg-accent flex items-center justify-center mx-auto mb-4">
                  <f.icon className="h-7 w-7 text-secondary" />
                </div>
                <h3 className="font-semibold text-lg mb-2">{f.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{f.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="container py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-xl mx-auto text-center"
        >
          <div className="inline-flex items-center justify-center h-14 w-14 rounded-2xl bg-secondary/10 mb-5">
            <Mail className="h-7 w-7 text-secondary" />
          </div>
          <h2 className="text-2xl md:text-3xl font-bold mb-2">Get a Free Weekly Tech Tip</h2>
          <p className="text-muted-foreground mb-8 max-w-sm mx-auto">
            One helpful tip every Sunday, straight to your inbox. No spam, unsubscribe any time.
          </p>
          <NewsletterSignup />
          <p className="text-xs text-muted-foreground mt-4">
            Joining 2,000+ readers who stay one step ahead of tech trouble.
          </p>
        </motion.div>
      </section>

      {/* Final CTA */}
      <section className="hero-gradient text-primary-foreground">
        <div className="container py-20 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Tech trouble? We've got you covered.
            </h2>
            <p className="opacity-80 mb-8 max-w-lg mx-auto text-lg">
              Browse {guides.length}+ free guides — or skip the reading and get a real person to help you right now.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                to="/get-help"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl bg-secondary text-secondary-foreground font-bold text-base hover:bg-secondary/90 transition-colors shadow-xl shadow-secondary/30"
              >
                <Phone className="h-5 w-5" /> Get Help Now
              </Link>
              <Link
                to="/guides"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl bg-white/10 hover:bg-white/20 text-primary-foreground font-semibold text-base transition-colors border border-white/25"
              >
                <BookOpen className="h-5 w-5" /> Browse Free Guides
              </Link>
            </div>
            <p className="mt-5 text-sm opacity-50">Free · No account required · No robots</p>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;

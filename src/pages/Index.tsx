import { useState, useMemo } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  Search, Shield, Zap, Star, ArrowRight, Monitor, Apple, Lightbulb,
  Sparkles, Bot, BookOpen, TrendingUp, Users, ChevronRight, Clock,
  Wifi, Printer, Lock, HardDrive, MousePointer, Smartphone,
  AlertTriangle, ThumbsUp
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
};

const categoryColors: Record<GuideCategory, string> = {
  'windows-guides': 'from-blue-600/20 to-blue-400/5 border-blue-500/20',
  'mac-guides': 'from-gray-600/20 to-gray-400/5 border-gray-500/20',
  'essential-skills': 'from-amber-600/20 to-amber-400/5 border-amber-500/20',
  'tips-tricks': 'from-purple-600/20 to-purple-400/5 border-purple-500/20',
  'ai-guides': 'from-teal-600/20 to-teal-400/5 border-teal-500/20',
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
            <p className="text-lg md:text-xl opacity-80 mb-3 max-w-xl mx-auto">
              Free step-by-step guides, expert tips, and on-demand tech support.
            </p>
            <p className="text-sm opacity-60 mb-8">No jargon, just answers.</p>

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

            {/* Trust stats */}
            <div className="flex flex-wrap items-center justify-center gap-4 text-sm opacity-70">
              <span className="flex items-center gap-1.5">
                <ThumbsUp className="h-4 w-4" /> 50,000+ Problems Solved
              </span>
              <span className="hidden sm:inline">·</span>
              <span className="flex items-center gap-1.5">
                <Star className="h-4 w-4 fill-current" /> 4.9★ Average Rating
              </span>
              <span className="hidden sm:inline">·</span>
              <span>Free to Use</span>
            </div>
          </motion.div>
        </div>
      </section>

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
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-4">
          Need hands-on help?
        </h2>
        <p className="text-center text-muted-foreground mb-12 max-w-lg mx-auto">
          Can't fix it yourself? Get matched with a verified technician in minutes.
        </p>

        <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {[
            { step: '1', icon: '💬', title: 'Describe Your Issue', desc: "WiFi down, slow PC, printer jams — tell us what's wrong." },
            { step: '2', icon: '🔍', title: 'Get Matched', desc: 'We pair you with a verified tech based on skill, location, and availability.' },
            { step: '3', icon: '✅', title: 'Get It Fixed', desc: 'Remote or in-person support. Pay securely when the job is done.' },
          ].map((s, i) => (
            <motion.div
              key={s.step}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.12 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="text-5xl mb-4">{s.icon}</div>
              <div className="w-8 h-8 rounded-full bg-secondary text-secondary-foreground flex items-center justify-center text-sm font-bold mx-auto mb-3">
                {s.step}
              </div>
              <h3 className="font-semibold text-lg mb-2">{s.title}</h3>
              <p className="text-muted-foreground text-sm">{s.desc}</p>
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-10">
          <Button asChild size="lg" className="bg-secondary text-secondary-foreground hover:bg-secondary/90">
            <Link to="/how-it-works">Learn More <ArrowRight className="ml-2 h-4 w-4" /></Link>
          </Button>
        </div>
      </section>

      {/* Why TekSure */}
      <section className="bg-muted py-16">
        <div className="container">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-12">Why TekSure?</h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {[
              { icon: Zap, title: 'Fast Matching', desc: 'Get matched with a qualified tech in minutes, not hours.' },
              { icon: Shield, title: 'Verified Techs', desc: 'Every technician goes through ID and background verification.' },
              { icon: Star, title: 'Transparent Pricing', desc: 'See rates upfront. Pay securely. No hidden fees.' },
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
                <p className="text-muted-foreground text-sm">{f.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
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
              Ready to solve your tech problems?
            </h2>
            <p className="opacity-80 mb-8 max-w-md mx-auto">
              Browse {guides.length}+ free guides or connect with a verified technician today.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button asChild size="lg" variant="secondary">
                <Link to="/guides">Browse Guides <BookOpen className="ml-2 h-4 w-4" /></Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="btn-hero-outline">
                <Link to="/signup">Get Tech Help <ArrowRight className="ml-2 h-4 w-4" /></Link>
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

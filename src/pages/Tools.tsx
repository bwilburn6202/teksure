import { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { Search, ArrowRight, Phone } from 'lucide-react';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import {
  KeyRound, Wifi, Wrench, HeartPulse, ArrowLeftRight, Type, Keyboard, Mail, AlertCircle, Languages, CreditCard,
  HelpCircle, Laptop, HardDrive, GraduationCap, Smartphone, ShieldCheck,
  MailCheck, Eye, Lock, ShieldAlert, WifiOff, Activity,
  Bluetooth, ClipboardCheck, Trash2,
  ShieldHalf, Sliders, KeySquare, Bell,
  Brain, Flag, Package, Bot, BarChart2, Users, Heart, Gift, Smile, MapPin, Award,
} from 'lucide-react';

type ToolCategory = 'All' | 'Security' | 'Device Health' | 'Learning' | 'Communication' | 'Setup & Troubleshooting';

const tools = [
  {
    title: 'Phishing URL Scanner',
    description: 'Paste any suspicious link and find out instantly if it\'s safe, risky, or a known phishing trap.',
    icon: ShieldAlert,
    path: '/tools/phishing-scanner',
    color: 'text-red-500',
    bg: 'bg-red-50 dark:bg-red-950/30',
    badge: 'New',
    category: 'Security' as ToolCategory,
  },
  {
    title: 'WiFi Troubleshooter',
    description: 'Answer a few quick questions and follow a guided step-by-step path to fix your WiFi.',
    icon: WifiOff,
    path: '/tools/wifi-troubleshooter',
    color: 'text-blue-500',
    bg: 'bg-blue-50 dark:bg-blue-950/30',
    badge: 'New',
    category: 'Setup & Troubleshooting' as ToolCategory,
  },
  {
    title: 'Cybersecurity Scorecard',
    description: '13 quick yes/no questions. Get a grade and a personalized action plan.',
    icon: Lock,
    path: '/tools/cyber-scorecard',
    color: 'text-violet-600',
    bg: 'bg-violet-50 dark:bg-violet-950/30',
    badge: 'New',
    category: 'Security' as ToolCategory,
  },
  {
    title: 'Accessibility Check',
    description: 'Get tailored device settings to make tech easier based on your needs.',
    icon: Eye,
    path: '/tools/accessibility-check',
    color: 'text-indigo-500',
    bg: 'bg-indigo-50 dark:bg-indigo-950/30',
    badge: 'New',
    category: 'Setup & Troubleshooting' as ToolCategory,
  },
  {
    title: 'Email Inbox Declutter',
    description: 'Organize your Gmail, Outlook, or Apple Mail inbox in under 20 minutes.',
    icon: MailCheck,
    path: '/tools/email-declutter',
    color: 'text-teal-500',
    bg: 'bg-teal-50 dark:bg-teal-950/30',
    badge: 'New',
    category: 'Communication' as ToolCategory,
  },
  {
    title: 'Device Health Dashboard',
    description: 'Check your device\'s health score with simple tips to improve each area.',
    icon: Activity,
    path: '/tools/device-health',
    color: 'text-emerald-500',
    bg: 'bg-emerald-50 dark:bg-emerald-950/30',
    badge: 'New',
    category: 'Device Health' as ToolCategory,
  },
  {
    title: 'Bluetooth Troubleshooter',
    description: 'Fix Bluetooth connection problems — guided step by step.',
    icon: Bluetooth,
    path: '/tools/bluetooth-troubleshooter',
    color: 'text-blue-500',
    bg: 'bg-blue-50 dark:bg-blue-950/30',
    badge: 'New',
    category: 'Device Health' as ToolCategory,
  },
  {
    title: 'Tech Health Quiz',
    description: '8 quick questions. Get a grade and personalized action steps.',
    icon: ClipboardCheck,
    path: '/tools/tech-health-quiz',
    color: 'text-violet-500',
    bg: 'bg-violet-50 dark:bg-violet-950/30',
    badge: 'New',
    category: 'Device Health' as ToolCategory,
  },
  {
    title: 'Storage Cleanup Wizard',
    description: 'Free up space with a step-by-step checklist — no tech knowledge needed.',
    icon: Trash2,
    path: '/tools/storage-cleanup',
    color: 'text-orange-500',
    bg: 'bg-orange-50 dark:bg-orange-950/30',
    badge: 'New',
    category: 'Device Health' as ToolCategory,
  },
  {
    title: 'VPN Setup Guide',
    description: 'What a VPN is, whether you need one, and how to set it up in under 10 minutes.',
    icon: ShieldHalf,
    path: '/tools/vpn-guide',
    color: 'text-teal-600',
    bg: 'bg-teal-50 dark:bg-teal-950/30',
    badge: 'New',
    category: 'Security' as ToolCategory,
  },
  {
    title: 'App Permission Auditor',
    description: 'Find out which apps have access to your location, camera, and microphone.',
    icon: Sliders,
    path: '/tools/app-permissions',
    color: 'text-rose-500',
    bg: 'bg-rose-50 dark:bg-rose-950/30',
    badge: 'New',
    category: 'Security' as ToolCategory,
  },
  {
    title: '2FA Setup Wizard',
    description: 'Set up two-factor authentication — the single most powerful thing you can do for security.',
    icon: KeySquare,
    path: '/tools/two-factor-setup',
    color: 'text-indigo-600',
    bg: 'bg-indigo-50 dark:bg-indigo-950/30',
    badge: 'New',
    category: 'Security' as ToolCategory,
  },
  {
    title: 'Push Notifications',
    description: 'Get weekly tech tips, scam alerts, and new guide announcements.',
    icon: Bell,
    path: '/notifications',
    color: 'text-amber-500',
    bg: 'bg-amber-50 dark:bg-amber-950/30',
    badge: 'New',
    category: 'Setup & Troubleshooting' as ToolCategory,
  },
  {
    title: 'Interactive Troubleshooter',
    description: 'Answer yes/no questions and get guided step-by-step to the exact fix.',
    icon: HelpCircle,
    path: '/tools/troubleshooter',
    color: 'text-primary',
    bg: 'bg-primary/5',
    badge: 'Popular',
    category: 'Setup & Troubleshooting' as ToolCategory,
  },
  {
    title: 'Device Chooser Quiz',
    description: 'Not sure whether to buy a tablet, laptop, or desktop? Get a personalized recommendation.',
    icon: Laptop,
    path: '/tools/device-chooser',
    color: 'text-violet-500',
    bg: 'bg-violet-50 dark:bg-violet-950/30',
    badge: 'Buying Guide',
    category: 'Learning' as ToolCategory,
  },
  {
    title: 'Data Backup Wizard',
    description: 'Personalized backup plan for your photos, documents, and contacts.',
    icon: HardDrive,
    path: '/tools/backup-wizard',
    color: 'text-sky-500',
    bg: 'bg-sky-50 dark:bg-sky-950/30',
    badge: 'Safety',
    category: 'Device Health' as ToolCategory,
  },
  {
    title: 'Internet Safety Course',
    description: 'Five bite-sized lessons on spotting scams, strong passwords, and safe shopping.',
    icon: GraduationCap,
    path: '/tools/safety-course',
    color: 'text-amber-500',
    bg: 'bg-amber-50 dark:bg-amber-950/30',
    badge: 'Course',
    category: 'Learning' as ToolCategory,
  },
  {
    title: 'App Recommender',
    description: 'Answer 3 questions about what you want to do — get personalized recommendations.',
    icon: Smartphone,
    path: '/tools/app-recommender',
    color: 'text-rose-500',
    bg: 'bg-rose-50 dark:bg-rose-950/30',
    badge: 'Recommended',
    category: 'Learning' as ToolCategory,
  },
  {
    title: 'Warranty & Repair Finder',
    description: 'Check your device warranty and find authorised repair options.',
    icon: ShieldCheck,
    path: '/tools/warranty-checker',
    color: 'text-lime-600',
    bg: 'bg-lime-50 dark:bg-lime-950/30',
    badge: 'Support',
    category: 'Setup & Troubleshooting' as ToolCategory,
  },
  {
    title: 'Password Strength Checker',
    description: 'Test how strong your password is with real-time feedback.',
    icon: KeyRound,
    path: '/tools/password-strength',
    color: 'text-green-500',
    bg: 'bg-green-50 dark:bg-green-950/30',
    badge: 'Safety',
    category: 'Security' as ToolCategory,
  },
  {
    title: 'Password Manager Guide',
    description: 'Learn what a password manager is and follow step-by-step setup instructions.',
    icon: Lock,
    path: '/tools/password-manager',
    color: 'text-emerald-600',
    bg: 'bg-emerald-50 dark:bg-emerald-950/30',
    badge: 'Safety',
    category: 'Security' as ToolCategory,
  },
  {
    title: 'WiFi Speed Test',
    description: 'Check your internet speed and get tips for improving slow connections.',
    icon: Wifi,
    path: '/tools/wifi-speed',
    color: 'text-blue-500',
    bg: 'bg-blue-50 dark:bg-blue-950/30',
    badge: 'Connectivity',
    category: 'Device Health' as ToolCategory,
  },
  {
    title: 'Tech Health Check',
    description: 'Take a quick 5-question quiz with color-coded results and tips.',
    icon: HeartPulse,
    path: '/tools/health-check',
    color: 'text-rose-500',
    bg: 'bg-rose-50 dark:bg-rose-950/30',
    badge: 'Quiz',
    category: 'Device Health' as ToolCategory,
  },
  {
    title: 'Device Comparison',
    description: 'Compare two devices side by side — price, battery life, ease of use.',
    icon: ArrowLeftRight,
    path: '/tools/device-compare',
    color: 'text-purple-500',
    bg: 'bg-purple-50 dark:bg-purple-950/30',
    badge: 'Devices',
    category: 'Learning' as ToolCategory,
  },
  {
    title: 'Font Size Adjuster',
    description: 'Use the settings button in the top navigation to adjust text size.',
    icon: Type,
    path: null,
    color: 'text-indigo-500',
    bg: 'bg-indigo-50 dark:bg-indigo-950/30',
    badge: 'Beginner',
    category: 'Setup & Troubleshooting' as ToolCategory,
  },
  {
    title: 'Keyboard Shortcuts',
    description: 'Printable cheat sheets for Windows, Mac, browsers, email, and more.',
    icon: Keyboard,
    path: '/tools/keyboard-shortcuts',
    color: 'text-orange-500',
    bg: 'bg-orange-50 dark:bg-orange-950/30',
    badge: 'Reference',
    category: 'Learning' as ToolCategory,
  },
  {
    title: 'Email Templates',
    description: '10 ready-to-use email templates for complaints, returns, and more.',
    icon: Mail,
    path: '/tools/email-templates',
    color: 'text-teal-500',
    bg: 'bg-teal-50 dark:bg-teal-950/30',
    badge: 'Productivity',
    category: 'Communication' as ToolCategory,
  },
  {
    title: 'Error Message Decoder',
    description: 'Search 20 common error messages with plain-English explanations.',
    icon: AlertCircle,
    path: '/tools/error-decoder',
    color: 'text-destructive',
    bg: 'bg-red-50 dark:bg-red-950/30',
    badge: 'Troubleshooting',
    category: 'Setup & Troubleshooting' as ToolCategory,
  },
  {
    title: 'Tech Jargon Translator',
    description: 'Type any confusing tech word and get a plain-English explanation.',
    icon: Languages,
    path: '/tools/jargon-translator',
    color: 'text-cyan-500',
    bg: 'bg-cyan-50 dark:bg-cyan-950/30',
    badge: 'Reference',
    category: 'Learning' as ToolCategory,
  },
  {
    title: 'Quick Reference Cards',
    description: 'Printable cheat-sheet cards for shortcuts, safety tips, and troubleshooting.',
    icon: CreditCard,
    path: '/tools/quick-reference',
    color: 'text-emerald-500',
    bg: 'bg-emerald-50 dark:bg-emerald-950/30',
    badge: 'Printable',
    category: 'Learning' as ToolCategory,
  },
  {
    title: 'Tech Confidence Score',
    description: 'Find out your true tech confidence level — and get a personalized learning plan.',
    icon: Brain,
    path: '/tools/confidence-score',
    color: 'text-violet-500',
    bg: 'bg-violet-50 dark:bg-violet-950/30',
    badge: 'Quiz',
    category: 'Learning' as ToolCategory,
  },
  {
    title: 'Report a Scam',
    description: 'Report a scam in seconds — helps protect others.',
    icon: Flag,
    path: '/tools/scam-report',
    color: 'text-red-500',
    bg: 'bg-red-50 dark:bg-red-950/30',
    badge: 'Safety',
    category: 'Security' as ToolCategory,
  },
  {
    title: 'Printable Guide Packs',
    description: 'Download themed guide bundles as a single print-ready document.',
    icon: Package,
    path: '/tools/guide-packs',
    color: 'text-amber-500',
    bg: 'bg-amber-50 dark:bg-amber-950/30',
    badge: 'Printable',
    category: 'Learning' as ToolCategory,
  },
  {
    title: 'AI Tutor',
    description: 'Learn at your own pace with a friendly AI that adapts to your skill level.',
    icon: Bot,
    path: '/ai-tutor',
    color: 'text-cyan-500',
    bg: 'bg-cyan-50 dark:bg-cyan-950/30',
    badge: 'AI',
    category: 'Learning' as ToolCategory,
  },
  {
    title: 'Progress Report',
    description: 'Track your learning journey — guides completed, streak, and what\'s next.',
    icon: BarChart2,
    path: '/progress-report',
    color: 'text-blue-500',
    bg: 'bg-blue-50 dark:bg-blue-950/30',
    badge: 'Learning',
    category: 'Learning' as ToolCategory,
  },
  {
    title: 'Family Tech Sharing',
    description: 'Share your TekSure access with up to 4 family members.',
    icon: Users,
    path: '/family-sharing',
    color: 'text-indigo-500',
    bg: 'bg-indigo-50 dark:bg-indigo-950/30',
    badge: 'Family',
    category: 'Communication' as ToolCategory,
  },
  {
    title: 'Caregiver Dashboard',
    description: 'Supporting a family member with tech? Book help on their behalf.',
    icon: Heart,
    path: '/caregiver',
    color: 'text-pink-500',
    bg: 'bg-pink-50 dark:bg-pink-950/30',
    badge: 'Caregivers',
    category: 'Communication' as ToolCategory,
  },
  {
    title: 'Tech Gift Guide',
    description: 'Curated picks for seniors, parents, and children with no jargon.',
    icon: Gift,
    path: '/gift-guide',
    color: 'text-rose-500',
    bg: 'bg-rose-50 dark:bg-rose-950/30',
    badge: 'Gifts',
    category: 'Learning' as ToolCategory,
  },
  {
    title: 'Dealing with Tech Anxiety',
    description: 'Practical coping strategies for anyone who finds technology stressful.',
    icon: Smile,
    path: '/tech-anxiety',
    color: 'text-teal-500',
    bg: 'bg-teal-50 dark:bg-teal-950/30',
    badge: 'Wellbeing',
    category: 'Learning' as ToolCategory,
  },
  {
    title: 'Find Local Help',
    description: 'Discover libraries, community groups, and repair cafes near you.',
    icon: MapPin,
    path: '/local-help',
    color: 'text-green-600',
    bg: 'bg-green-50 dark:bg-green-950/30',
    badge: 'Community',
    category: 'Communication' as ToolCategory,
  },
  {
    title: 'Digital Skills Certificate',
    description: 'Earn a printable certificate as you complete guides.',
    icon: Award,
    path: '/certificate',
    color: 'text-amber-600',
    bg: 'bg-amber-50 dark:bg-amber-950/30',
    badge: 'Achievement',
    category: 'Learning' as ToolCategory,
  },
  {
    title: 'Gift a Subscription',
    description: 'Give someone the gift of digital confidence.',
    icon: Gift,
    path: '/gift',
    color: 'text-pink-600',
    bg: 'bg-pink-50 dark:bg-pink-950/30',
    badge: 'Gift',
    category: 'Communication' as ToolCategory,
  },
];

const categories: ToolCategory[] = ['All', 'Security', 'Device Health', 'Learning', 'Communication', 'Setup & Troubleshooting'];

export default function Tools() {
  const [search, setSearch] = useState('');
  const [activeTab, setActiveTab] = useState<ToolCategory>('All');

  const filtered = useMemo(() => {
    let results = tools;
    if (activeTab !== 'All') results = results.filter(t => t.category === activeTab);
    if (search.trim()) {
      const q = search.toLowerCase();
      results = results.filter(t =>
        t.title.toLowerCase().includes(q) ||
        t.description.toLowerCase().includes(q)
      );
    }
    return results;
  }, [search, activeTab]);

  const featuredTools = filtered.slice(0, 6);
  const remainingTools = filtered.slice(6);

  return (
    <>
      <SEOHead
        title="Free Tech Tools & Utilities | TekSure"
        description="Free tech tools for everyday people — password strength checker, WiFi speed test, device health quiz, phishing scanner, and more."
        path="/tools"
        jsonLd={{
          '@context': 'https://schema.org',
          '@type': 'CollectionPage',
          name: 'TekSure Free Tech Tools',
          description: 'Free interactive technology tools for everyday people — security checks, device diagnostics, and learning resources.',
          url: 'https://teksure.com/tools',
          isPartOf: { '@type': 'WebSite', name: 'TekSure', url: 'https://teksure.com' },
          provider: { '@type': 'Organization', name: 'TekSure', url: 'https://teksure.com' },
        }}
      />
      <Navbar />
      <main className="min-h-screen bg-background">
        {/* Header */}
        <section className="border-b zone-tools">
          <div className="container py-12 md:py-16">
            <div className="max-w-2xl mx-auto text-center">
              <h1 className="text-3xl md:text-4xl font-bold tracking-tight mb-3">
                Tools & Utilities
              </h1>
              <p className="text-muted-foreground mb-8">
                Over 30 free interactive tools — all private, all free.
              </p>
              <div className="relative max-w-md mx-auto">
                <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input
                  placeholder="Search tools..."
                  className="pl-10 h-11 bg-background border-border rounded-xl text-sm"
                  value={search}
                  onChange={e => setSearch(e.target.value)}
                />
              </div>
            </div>
          </div>
        </section>

        <div className="container py-8 pb-24">
          <Tabs value={activeTab} onValueChange={v => setActiveTab(v as ToolCategory)}>
            <div className="flex items-center gap-4 mb-8 overflow-x-auto pb-2 no-scrollbar">
              <TabsList className="h-auto gap-1 bg-transparent p-0 flex-wrap">
                {categories.map(cat => {
                  const count = cat === 'All' ? tools.length : tools.filter(t => t.category === cat).length;
                  return (
                    <TabsTrigger
                      key={cat}
                      value={cat}
                      className="text-xs rounded-full px-3 py-1.5 data-[state=active]:bg-foreground data-[state=active]:text-background"
                    >
                      {cat} ({count})
                    </TabsTrigger>
                  );
                })}
              </TabsList>
            </div>

            <p className="text-sm text-muted-foreground mb-6">
              Showing {filtered.length} tool{filtered.length !== 1 ? 's' : ''}
            </p>

            <TabsContent value={activeTab} className="mt-0">
              {filtered.length === 0 ? (
                <div className="text-center py-20">
                  <p className="text-3xl mb-3">🔍</p>
                  <p className="font-medium mb-1">No tools found</p>
                  <p className="text-sm text-muted-foreground">
                    Try a different search term or choose another category.
                  </p>
                </div>
              ) : (
                <>
                  {/* Featured tools bento-style */}
                  {activeTab === 'All' && !search.trim() && (
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
                      {/* Large featured card */}
                      <div className="md:col-span-2 md:row-span-2">
                        {(() => {
                          const tool = featuredTools[0];
                          if (!tool) return null;
                          const card = (
                            <div className={`rounded-3xl border p-8 h-full flex flex-col justify-between bg-gradient-to-br ${tool.bg} border-border/60 transition-all hover:shadow-md`}>
                              <div>
                                <div className={`h-14 w-14 rounded-2xl ${tool.bg} flex items-center justify-center mb-4`}>
                                  <tool.icon className={`h-7 w-7 ${tool.color}`} />
                                </div>
                                <Badge variant="secondary" className="text-xs font-normal mb-3">{tool.badge}</Badge>
                                <h3 className="text-xl font-bold mb-2">{tool.title}</h3>
                                <p className="text-muted-foreground">{tool.description}</p>
                              </div>
                              {tool.path && (
                                <div className="mt-6">
                                  <span className="inline-flex items-center gap-1 text-sm font-medium text-primary">
                                    Try it now <ArrowRight className="h-3 w-3" />
                                  </span>
                                </div>
                              )}
                            </div>
                          );
                          if (!tool.path) return <div key={0}>{card}</div>;
                          return (
                            <Link key={tool.path} to={tool.path} className="group block">
                              {card}
                            </Link>
                          );
                        })()}
                      </div>

                      {/* Smaller featured cards */}
                      {featuredTools.slice(1, 5).map((tool, i) => {
                        const card = (
                          <div className={`rounded-2xl border p-5 h-full flex flex-col bg-gradient-to-br ${tool.bg} border-border/60 transition-all hover:shadow-md`}>
                            <div className="flex items-start justify-between mb-3">
                              <div className={`h-10 w-10 rounded-xl ${tool.bg} flex items-center justify-center`}>
                                <tool.icon className={`h-5 w-5 ${tool.color}`} />
                              </div>
                              <Badge variant="secondary" className="text-xs font-normal">{tool.badge}</Badge>
                            </div>
                            <h3 className="font-semibold text-sm mb-1">{tool.title}</h3>
                            <p className="text-xs text-muted-foreground line-clamp-2">{tool.description}</p>
                          </div>
                        );

                        if (!tool.path) return <div key={i}>{card}</div>;
                        return (
                          <Link key={tool.path} to={tool.path} className="group block">
                            {card}
                          </Link>
                        );
                      })}
                    </div>
                  )}

                  {/* Remaining tools grid */}
                  <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                    {(activeTab === 'All' && !search.trim() ? remainingTools : filtered).map((tool, i) => {
                      const card = (
                        <div className={`rounded-2xl border p-5 h-full transition-all hover:shadow-md bg-card`}>
                          <div className="flex items-start justify-between mb-3">
                            <div className={`h-10 w-10 rounded-xl ${tool.bg} flex items-center justify-center`}>
                              <tool.icon className={`h-5 w-5 ${tool.color}`} />
                            </div>
                            <Badge variant="secondary" className="text-xs font-normal">
                              {tool.badge}
                            </Badge>
                          </div>
                          <h3 className="font-semibold text-base mb-2">{tool.title}</h3>
                          <p className="text-muted-foreground text-sm">{tool.description}</p>
                        </div>
                      );

                      if (!tool.path) return <div key={i}>{card}</div>;

                      return (
                        <Link key={tool.path} to={tool.path} className="group">
                          {card}
                        </Link>
                      );
                    })}
                  </div>
                </>
              )}
            </TabsContent>
          </Tabs>

          {/* CTA */}
          <div className="mt-16 text-center p-10 rounded-2xl bg-muted/50 border border-border">
            <h2 className="text-xl font-bold mb-2">Still need help?</h2>
            <p className="text-sm text-muted-foreground mb-5 max-w-sm mx-auto">
              Our verified technicians are ready to walk you through any issue.
            </p>
            <Button asChild className="gap-2 rounded-xl">
              <Link to="/get-help"><Phone className="h-4 w-4" /> Get Help</Link>
            </Button>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}

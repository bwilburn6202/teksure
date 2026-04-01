import { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { Search } from 'lucide-react';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
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
    description: 'Paste any suspicious link and find out instantly if it\'s safe, risky, or a known phishing trap — all analysed privately in your browser.',
    icon: ShieldAlert,
    path: '/tools/phishing-scanner',
    color: 'text-red-500',
    badge: 'New',
    category: 'Security' as ToolCategory,
  },
  {
    title: 'WiFi Troubleshooter',
    description: 'Answer a few quick questions and follow a guided step-by-step path to fix your WiFi — no router manual needed.',
    icon: WifiOff,
    path: '/tools/wifi-troubleshooter',
    color: 'text-blue-500',
    badge: 'New',
    category: 'Setup & Troubleshooting' as ToolCategory,
  },
  {
    title: 'Cybersecurity Scorecard',
    description: '13 quick yes/no questions across passwords, devices, network, and email safety. Get a grade and a personalised action plan.',
    icon: Lock,
    path: '/tools/cyber-scorecard',
    color: 'text-violet-600',
    badge: 'New',
    category: 'Security' as ToolCategory,
  },
  {
    title: 'Accessibility Check',
    description: 'Answer 10 questions about your vision, hearing, motor skills, and cognitive preferences — then get tailored device settings to make tech easier.',
    icon: Eye,
    path: '/tools/accessibility-check',
    color: 'text-indigo-500',
    badge: 'New',
    category: 'Setup & Troubleshooting' as ToolCategory,
  },
  {
    title: 'Email Inbox Declutter',
    description: 'A step-by-step guide to unsubscribing, archiving, and organising your Gmail, Outlook, or Apple Mail inbox in under 20 minutes.',
    icon: MailCheck,
    path: '/tools/email-declutter',
    color: 'text-teal-500',
    badge: 'New',
    category: 'Communication' as ToolCategory,
  },
  {
    title: 'Device Health Dashboard',
    description: 'Check your device\'s health score across storage, security, battery, network, performance, and privacy — with simple tips to improve each area.',
    icon: Activity,
    path: '/tools/device-health',
    color: 'text-emerald-500',
    badge: 'New',
    category: 'Device Health' as ToolCategory,
  },
  {
    title: 'Bluetooth Troubleshooter',
    description: 'Fix Bluetooth connection problems with headphones, speakers, keyboards, and more — guided step by step with simple yes/no questions.',
    icon: Bluetooth,
    path: '/tools/bluetooth-troubleshooter',
    color: 'text-blue-500',
    badge: 'New',
    category: 'Device Health' as ToolCategory,
  },
  {
    title: 'Tech Health Quiz',
    description: '8 quick questions covering security, backup, privacy, battery, and scam awareness. Get a grade and personalised action steps.',
    icon: ClipboardCheck,
    path: '/tools/tech-health-quiz',
    color: 'text-violet-500',
    badge: 'New',
    category: 'Device Health' as ToolCategory,
  },
  {
    title: 'Storage Cleanup Wizard',
    description: 'Free up space on your Windows PC, Mac, iPhone, or Android phone with a step-by-step checklist — no tech knowledge needed.',
    icon: Trash2,
    path: '/tools/storage-cleanup',
    color: 'text-orange-500',
    badge: 'New',
    category: 'Device Health' as ToolCategory,
  },
  {
    title: 'VPN Setup Guide',
    description: 'Learn what a VPN is, whether you need one, and how to set it up in under 10 minutes. Includes trusted free and paid recommendations.',
    icon: ShieldHalf,
    path: '/tools/vpn-guide',
    color: 'text-teal-600',
    badge: 'New',
    category: 'Security' as ToolCategory,
  },
  {
    title: 'App Permission Auditor',
    description: 'Find out which apps have access to your location, camera, microphone, and contacts — then learn how to revoke risky permissions.',
    icon: Sliders,
    path: '/tools/app-permissions',
    color: 'text-rose-500',
    badge: 'New',
    category: 'Security' as ToolCategory,
  },
  {
    title: '2FA Setup Wizard',
    description: 'Set up two-factor authentication on Google, Apple, Facebook, Amazon, and your bank — the single most powerful thing you can do for account security.',
    icon: KeySquare,
    path: '/tools/two-factor-setup',
    color: 'text-indigo-600',
    badge: 'New',
    category: 'Security' as ToolCategory,
  },
  {
    title: 'Push Notifications',
    description: 'Opt in to get weekly tech tips, scam alerts, and new guide announcements right on your phone or browser.',
    icon: Bell,
    path: '/notifications',
    color: 'text-amber-500',
    badge: 'New',
    category: 'Setup & Troubleshooting' as ToolCategory,
  },
  {
    title: 'Interactive Troubleshooter',
    description: 'Answer yes/no questions and get guided step-by-step to the exact fix for WiFi, printers, passwords, phones, and more.',
    icon: HelpCircle,
    path: '/tools/troubleshooter',
    color: 'text-primary',
    badge: 'Popular',
    category: 'Setup & Troubleshooting' as ToolCategory,
  },
  {
    title: 'Device Chooser Quiz',
    description: 'Not sure whether to buy a tablet, laptop, or desktop? Answer 5 quick questions for a personalised recommendation.',
    icon: Laptop,
    path: '/tools/device-chooser',
    color: 'text-violet-500',
    badge: 'Buying Guide',
    category: 'Learning' as ToolCategory,
  },
  {
    title: 'Data Backup Wizard',
    description: 'Step-by-step personalised backup plan for your photos, documents, and contacts — covering cloud, USB drives, and more.',
    icon: HardDrive,
    path: '/tools/backup-wizard',
    color: 'text-sky-500',
    badge: 'Safety',
    category: 'Device Health' as ToolCategory,
  },
  {
    title: 'Internet Safety Course',
    description: 'Five bite-sized lessons on spotting scams, strong passwords, safe shopping, privacy, and what to do when things go wrong.',
    icon: GraduationCap,
    path: '/tools/safety-course',
    color: 'text-amber-500',
    badge: 'Course',
    category: 'Learning' as ToolCategory,
  },
  {
    title: 'App Recommender',
    description: 'Not sure which app to use? Answer 3 questions about what you want to do and your device — get personalised recommendations.',
    icon: Smartphone,
    path: '/tools/app-recommender',
    color: 'text-rose-500',
    badge: 'Recommended',
    category: 'Learning' as ToolCategory,
  },
  {
    title: 'Warranty & Repair Finder',
    description: 'Check how long your device warranty lasts, how to verify it\'s still active, and find authorised repair options.',
    icon: ShieldCheck,
    path: '/tools/warranty-checker',
    color: 'text-lime-600',
    badge: 'Support',
    category: 'Setup & Troubleshooting' as ToolCategory,
  },
  {
    title: 'Password Strength Checker',
    description: 'Test how strong your password is with real-time feedback, a visual strength meter, and a security checklist.',
    icon: KeyRound,
    path: '/tools/password-strength',
    color: 'text-green-500',
    badge: 'Safety',
    category: 'Security' as ToolCategory,
  },
  {
    title: 'Password Manager Guide',
    description: 'Learn what a password manager is, compare the top options, and follow step-by-step setup instructions for your device.',
    icon: Lock,
    path: '/tools/password-manager',
    color: 'text-emerald-600',
    badge: 'Safety',
    category: 'Security' as ToolCategory,
  },
  {
    title: 'WiFi Speed Test',
    description: 'Check your internet speed and get practical tips for improving slow or unreliable connections.',
    icon: Wifi,
    path: '/tools/wifi-speed',
    color: 'text-blue-500',
    badge: 'Connectivity',
    category: 'Device Health' as ToolCategory,
  },
  {
    title: 'Tech Health Check',
    description: 'Take a quick 5-question quiz to find out how healthy your device is — with colour-coded results and tips.',
    icon: HeartPulse,
    path: '/tools/health-check',
    color: 'text-rose-500',
    badge: 'Quiz',
    category: 'Device Health' as ToolCategory,
  },
  {
    title: 'Device Comparison',
    description: 'Compare two devices side by side — price, battery life, ease of use, storage, and our verdict.',
    icon: ArrowLeftRight,
    path: '/tools/device-compare',
    color: 'text-purple-500',
    badge: 'Devices',
    category: 'Learning' as ToolCategory,
  },
  {
    title: 'Font Size Adjuster',
    description: 'Use the A+/A- button in the top navigation bar to cycle between Normal → Large → XL text sizes.',
    icon: Type,
    path: null,
    color: 'text-indigo-500',
    badge: 'Beginner',
    category: 'Setup & Troubleshooting' as ToolCategory,
  },
  {
    title: 'Keyboard Shortcuts',
    description: 'Printable cheat sheets for Windows, Mac, browsers, email, Word/Docs, and Excel/Sheets.',
    icon: Keyboard,
    path: '/tools/keyboard-shortcuts',
    color: 'text-orange-500',
    badge: 'Reference',
    category: 'Learning' as ToolCategory,
  },
  {
    title: 'Email Templates',
    description: '10 ready-to-use email templates for complaints, returns, job enquiries, IT support, and more.',
    icon: Mail,
    path: '/tools/email-templates',
    color: 'text-teal-500',
    badge: 'Productivity',
    category: 'Communication' as ToolCategory,
  },
  {
    title: 'Error Message Decoder',
    description: 'Search 20 common error messages and get plain-English explanations with 3 practical fixes each.',
    icon: AlertCircle,
    path: '/tools/error-decoder',
    color: 'text-destructive',
    badge: 'Troubleshooting',
    category: 'Setup & Troubleshooting' as ToolCategory,
  },
  {
    title: 'Tech Jargon Translator',
    description: 'Type any confusing tech word and get a plain-English explanation anyone can understand.',
    icon: Languages,
    path: '/tools/jargon-translator',
    color: 'text-cyan-500',
    badge: 'Reference',
    category: 'Learning' as ToolCategory,
  },
  {
    title: 'Quick Reference Cards',
    description: 'Printable cheat-sheet cards for shortcuts, safety tips, and troubleshooting — stick them next to your screen.',
    icon: CreditCard,
    path: '/tools/quick-reference',
    color: 'text-emerald-500',
    badge: 'Printable',
    category: 'Learning' as ToolCategory,
  },
  {
    title: 'Tech Confidence Score',
    description: 'Take a 10-question quiz to find out your true tech confidence level — and get a personalised learning plan matched to your result.',
    icon: Brain,
    path: '/tools/confidence-score',
    color: 'text-violet-500',
    badge: 'Quiz',
    category: 'Learning' as ToolCategory,
  },
  {
    title: 'Report a Scam',
    description: 'Spotted a scam? Report it in seconds — your report helps protect others and is forwarded to the relevant authorities.',
    icon: Flag,
    path: '/tools/scam-report',
    color: 'text-red-500',
    badge: 'Safety',
    category: 'Security' as ToolCategory,
  },
  {
    title: 'Printable Guide Packs',
    description: 'Download themed guide bundles as a single print-ready document — perfect for keeping by the computer or gifting to someone who prefers paper.',
    icon: Package,
    path: '/tools/guide-packs',
    color: 'text-amber-500',
    badge: 'Printable',
    category: 'Learning' as ToolCategory,
  },
  {
    title: 'AI Tutor',
    description: 'Learn at your own pace with a friendly AI that adapts to your skill level — ask anything about tech and get a clear, plain-English answer.',
    icon: Bot,
    path: '/ai-tutor',
    color: 'text-cyan-500',
    badge: 'AI',
    category: 'Learning' as ToolCategory,
  },
  {
    title: 'Progress Report',
    description: 'Track your learning journey — see how many guides you\'ve completed, your streak, confidence score, and what to tackle next.',
    icon: BarChart2,
    path: '/progress-report',
    color: 'text-blue-500',
    badge: 'Learning',
    category: 'Learning' as ToolCategory,
  },
  {
    title: 'Family Tech Sharing',
    description: 'Share your TekSure access with up to 4 family members — each gets their own account, progress tracking, and separate login.',
    icon: Users,
    path: '/family-sharing',
    color: 'text-indigo-500',
    badge: 'Family',
    category: 'Communication' as ToolCategory,
  },
  {
    title: 'Caregiver Dashboard',
    description: 'Supporting a family member with tech? Book help on their behalf, share guides, and access our tips for tech caregivers.',
    icon: Heart,
    path: '/caregiver',
    color: 'text-pink-500',
    badge: 'Caregivers',
    category: 'Communication' as ToolCategory,
  },
  {
    title: 'Tech Gift Guide',
    description: 'Find the perfect tech gift for any budget — curated picks for seniors, parents, and children with no jargon.',
    icon: Gift,
    path: '/gift-guide',
    color: 'text-rose-500',
    badge: 'Gifts',
    category: 'Learning' as ToolCategory,
  },
  {
    title: 'Dealing with Tech Anxiety',
    description: 'Practical coping strategies, reassuring community stories, and calming resources for anyone who finds technology stressful.',
    icon: Smile,
    path: '/tech-anxiety',
    color: 'text-teal-500',
    badge: 'Wellbeing',
    category: 'Learning' as ToolCategory,
  },
  {
    title: 'Find Local Help',
    description: 'Discover libraries, community groups, adult education courses, and repair cafes near you that can help with technology in person.',
    icon: MapPin,
    path: '/local-help',
    color: 'text-green-600',
    badge: 'Community',
    category: 'Communication' as ToolCategory,
  },
  {
    title: 'Digital Skills Certificate',
    description: 'Earn a printable certificate as you complete guides — a great way to celebrate your progress and share your achievement.',
    icon: Award,
    path: '/certificate',
    color: 'text-amber-600',
    badge: 'Achievement',
    category: 'Learning' as ToolCategory,
  },
  {
    title: 'Gift a Subscription',
    description: 'Give someone the gift of digital confidence — a TekSure subscription makes a thoughtful present for any occasion.',
    icon: Gift,
    path: '/gift',
    color: 'text-pink-600',
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

  return (
    <>
      <SEOHead
        title="Tools & Utilities | TekSure"
        description="Free tech tools — password checker, WiFi speed test, health check quiz, device comparison, and more."
        path="/tools"
      />
      <Navbar />
      <main className="min-h-screen bg-background">
        {/* Header */}
        <section className="border-b">
          <div className="container py-12 md:py-16">
            <div className="max-w-2xl mx-auto text-center">
              <h1 className="text-3xl md:text-4xl font-bold tracking-tight mb-3">
                Tools &amp; Utilities
              </h1>
              <p className="text-muted-foreground mb-8">
                Over 30 free interactive tools — check passwords, test WiFi, quiz your device health, and more. All private, all free.
              </p>
              <div className="relative max-w-md mx-auto">
                <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input
                  placeholder="Search tools..."
                  className="pl-10 h-11 bg-muted/50 border-border rounded-xl text-sm"
                  value={search}
                  onChange={e => setSearch(e.target.value)}
                />
              </div>
            </div>
          </div>
        </section>

        <div className="container py-8 pb-16">
          {/* Category tabs + result count */}
          <Tabs value={activeTab} onValueChange={v => setActiveTab(v as ToolCategory)}>
            <div className="flex items-center gap-4 mb-6 overflow-x-auto pb-2 no-scrollbar">
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
                <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
                  {filtered.map((tool, i) => {
                    const card = (
                      <div
                        className="p-5 rounded-2xl border border-border bg-card hover:shadow-md transition-all h-full"
                      >
                        <div className="flex items-start justify-between mb-3">
                          <div className={`h-10 w-10 rounded-xl bg-primary/[0.07] flex items-center justify-center`}>
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
              )}
            </TabsContent>
          </Tabs>
        </div>
        </main>
      <Footer />
    </>
  );
}

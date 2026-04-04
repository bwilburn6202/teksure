import { useState } from 'react';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { NewsletterSignup } from '@/components/NewsletterSignup';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Newspaper, ExternalLink, Clock, ChevronDown, Lock, Monitor, Smartphone, Lightbulb, AlertTriangle, Bot, Package, Key, MessageSquare, Theater, AppWindow, MapPin, Camera, Satellite, Search, Phone, Mail, type LucideIcon } from 'lucide-react';

interface NewsItem {
  id: number;
  title: string;
  summary: string;
  category: 'security' | 'devices' | 'apps' | 'tips' | 'scams' | 'ai';
  date: string;
  icon: LucideIcon;
  readTime: string;
  source?: string;
  sourceUrl?: string;
}

const CATEGORY_COLORS: Record<NewsItem['category'], string> = {
  security: 'bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-300',
  devices:  'bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300',
  apps:     'bg-purple-100 text-purple-700 dark:bg-purple-900/30 dark:text-purple-300',
  tips:     'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-300',
  scams:    'bg-orange-100 text-orange-700 dark:bg-orange-900/30 dark:text-orange-300',
  ai:       'bg-pink-100 text-pink-700 dark:bg-pink-900/30 dark:text-pink-300',
};

const CATEGORY_LABELS: Record<NewsItem['category'], string> = {
  security: 'Security',
  devices:  'Devices',
  apps:     'Apps',
  tips:     'Tips',
  scams:    'Scam Alert',
  ai:       'AI',
};

const CATEGORY_ICONS: Record<NewsItem['category'], LucideIcon> = {
  security: Lock,
  devices:  Monitor,
  apps:     Smartphone,
  tips:     Lightbulb,
  scams:    AlertTriangle,
  ai:       Bot,
};

const NEWS_ITEMS: NewsItem[] = [
  {
    id: 16,
    title: 'Urgent: Apple Released a Critical iPhone Security Update — Install It Now',
    summary: 'Apple released iOS 18.7.7 on April 1, 2026 — a rare emergency security update that patches a serious flaw called "DarkSword." Without this update, a hacker could silently break into your iPhone just by getting you to visit the wrong website. No download required on your part. To install it: go to Settings → General → Software Update. If you see iOS 18.7.7 available, tap Download and Install. You\'ll need about 10 minutes and a charger. This is one of the rare updates worth doing right away.',
    category: 'security',
    date: '2026-04-03',
    icon: Smartphone,
    readTime: '2 min',
    source: 'Apple Support',
    sourceUrl: 'https://support.apple.com',
  },
  {
    id: 15,
    title: 'Windows Warning: Install Updates Before June 2026 or Your PC Could Stop Starting',
    summary: 'Microsoft is warning Windows 11 users that some security certificates built into many PCs will expire in June 2026. If Windows Update has not been run before that date, some computers may have trouble starting up correctly. This is one of the rare cases where skipping updates could actually stop your PC from turning on. The fix is simple: click the Start menu → Settings → Windows Update → Install all updates. Make sure Automatic Updates is turned on too. You have until June, but there\'s no reason to wait.',
    category: 'security',
    date: '2026-04-03',
    icon: Monitor,
    readTime: '2 min',
    source: 'Microsoft Support',
    sourceUrl: 'https://support.microsoft.com',
  },
  {
    id: 13,
    title: 'Windows 11 March Update May Cause Sign-In Problems',
    summary: 'Microsoft\'s March 2026 update (KB5079473) is causing some people to see "You\'ll need the Internet for this" errors when signing into Microsoft apps like Teams, OneDrive, Word, and Edge — even when they\'re connected to the internet. Microsoft has released a fix (KB5085516). Go to Settings > Windows Update to install it.',
    category: 'devices',
    date: '2026-03-28',
    icon: Monitor,
    readTime: '2 min',
    source: 'Microsoft Support',
    sourceUrl: 'https://support.microsoft.com',
  },
  {
    id: 14,
    title: '91% of Americans Over 50 Now Own a Smartphone',
    summary: 'According to AARP\'s 2026 Technology Trends report, smartphone ownership among older adults has reached an all-time high. Two-thirds of 50+ adults say technology enriches their lives. If you\'re still learning, you\'re not alone — and TekSure is here to help.',
    category: 'devices',
    date: '2026-03-26',
    icon: Smartphone,
    readTime: '2 min',
    source: 'AARP',
    sourceUrl: 'https://www.aarp.org',
  },
  {
    id: 1,
    title: 'New Scam: "Your parcel couldn\'t be delivered" Text Messages',
    summary: 'Millions of people are receiving fake text messages claiming a package couldn\'t be delivered and asking you to click a link to reschedule. The link takes you to a convincing fake USPS or FedEx website that steals your bank details. If you get one of these texts, delete it immediately. Real delivery companies never ask for payment via a text link.',
    category: 'scams',
    date: '2026-03-22',
    icon: Package,
    readTime: '2 min',
    source: 'FTC',
    sourceUrl: 'https://www.ftc.gov',
  },
  {
    id: 2,
    title: 'iPhone Update 18.3.2: What\'s New and Should You Update?',
    summary: 'Apple has released iOS 18.3.2, a security update that fixes several vulnerabilities that could allow attackers to take control of your phone. The update is small (around 200MB) and only takes a few minutes to install. Go to Settings → General → Software Update to install it. Security updates like this are always worth doing promptly.',
    category: 'security',
    date: '2026-03-20',
    icon: Smartphone,
    readTime: '2 min',
    source: 'Apple Support',
    sourceUrl: 'https://support.apple.com',
  },
  {
    id: 3,
    title: 'WhatsApp Adds New Privacy Feature: Protect IP Address in Calls',
    summary: 'WhatsApp has added a new setting that hides your real internet address (called an IP address) during calls, making it harder for strangers to track your location. To enable it: WhatsApp → Settings → Privacy → Advanced → "Protect IP address in calls". It\'s worth turning on, especially if you take calls from people you don\'t know well.',
    category: 'apps',
    date: '2026-03-18',
    icon: MessageSquare,
    readTime: '2 min',
  },
  {
    id: 4,
    title: 'AI Scams Are Getting More Convincing: What to Watch For',
    summary: 'Scammers are now using AI to clone voices and create fake video calls that look and sound exactly like real people — including family members and bank staff. If you receive an unexpected call from someone asking for money or personal details, hang up and call them back using a number you already have for them. Never trust a caller just because they sound familiar.',
    category: 'scams',
    date: '2026-03-16',
    icon: Theater,
    readTime: '3 min',
  },
  {
    id: 5,
    title: 'Google Chrome Update Makes Passwords Safer Automatically',
    summary: 'Google Chrome now automatically checks if any of your saved passwords have been leaked in data breaches and prompts you to change them. If you use Chrome, look for the shield icon in the address bar, or go to Settings → Password Manager → Checkup. It\'s a free, quick way to spot weak or compromised passwords.',
    category: 'security',
    date: '2026-03-15',
    icon: Key,
    readTime: '2 min',
  },
  {
    id: 6,
    title: 'Windows 11 Gets a New "Copilot" AI Assistant — Here\'s What It Does',
    summary: 'Microsoft has updated Windows 11 with an AI assistant called Copilot, which can answer questions, summarise documents, and help you find settings. You can open it by pressing the Windows key + C. It\'s genuinely useful for things like "how do I change my screen brightness" or "summarise this document". It\'s free and already installed if you have Windows 11 version 23H2 or newer.',
    category: 'ai',
    date: '2026-03-12',
    icon: AppWindow,
    readTime: '3 min',
  },
  {
    id: 7,
    title: 'Simple Tip: Turn Off "Precise Location" for Apps That Don\'t Need It',
    summary: 'Many apps ask for your precise GPS location when they really only need your general area. On iPhone: Settings → Privacy & Security → Location Services → tap each app → change "Precise Location" to off. On Android: Settings → Apps → Permissions → Location → choose "Approximate" for apps like weather or news. This saves battery life and protects your privacy.',
    category: 'tips',
    date: '2026-03-10',
    icon: MapPin,
    readTime: '2 min',
  },
  {
    id: 8,
    title: 'New Samsung Galaxy S25: Should You Upgrade?',
    summary: 'Samsung has released its latest flagship phone, the Galaxy S25. The key improvements over the S24 are a faster processor, better camera low-light performance, and seven years of software updates guaranteed. At $799–$1,199, it\'s expensive. If your current Android phone is 3 or more years old and starting to slow down, it\'s a good time to consider upgrading — but you don\'t need to rush.',
    category: 'devices',
    date: '2026-03-08',
    icon: Camera,
    readTime: '3 min',
  },
  {
    id: 9,
    title: 'Reminder: Check Your Router\'s Age — Old Routers Have Security Holes',
    summary: 'If your home router is more than 5 years old, it may no longer receive security updates from the manufacturer. This means hackers could exploit known vulnerabilities. Contact your internet provider to ask when your router was last updated, or if you own your router, check the manufacturer\'s website to see if it still supports your model. An upgrade could significantly improve your home\'s security.',
    category: 'security',
    date: '2026-03-05',
    icon: Satellite,
    readTime: '2 min',
  },
  {
    id: 10,
    title: 'Free Tool: HaveIBeenPwned Lets You Check If Your Email Was in a Data Breach',
    summary: 'HaveIBeenPwned (haveibeenpwned.com) is a free, safe website where you can enter your email address to check if it\'s appeared in any known data breaches. If it has, it tells you which sites were hacked and what information was exposed. It\'s run by a trusted security researcher and is completely free to use. Check all your email addresses — it only takes 30 seconds.',
    category: 'security',
    date: '2026-03-03',
    icon: Search,
    readTime: '2 min',
    source: 'Have I Been Pwned',
    sourceUrl: 'https://haveibeenpwned.com',
  },
  {
    id: 11,
    title: 'Beware of "Tech Support" Calls — No Company Ever Calls You Unsolicited',
    summary: 'A common scam: someone calls claiming to be from Microsoft, BT, or your bank saying your computer has a problem. They ask you to install software that gives them control of your screen. IMPORTANT: Microsoft, Apple, BT, and your bank will NEVER call you out of the blue about a computer problem. If you get one of these calls, hang up immediately.',
    category: 'scams',
    date: '2026-02-28',
    icon: Phone,
    readTime: '2 min',
  },
  {
    id: 12,
    title: 'Using AI to Write Emails: Helpful, But Be Careful What You Share',
    summary: 'AI tools like ChatGPT and Microsoft Copilot are excellent at helping you write emails, letters, and messages. However, be careful not to paste in sensitive personal information (account numbers, passwords, medical details, addresses) when using these tools, as your input may be used to improve the AI. Stick to general content or use dummy details where possible.',
    category: 'ai',
    date: '2026-02-25',
    icon: Mail,
    readTime: '3 min',
  },
];

const FILTER_CATEGORIES: { value: NewsItem['category'] | 'all'; label: string; icon?: LucideIcon }[] = [
  { value: 'all', label: 'All News' },
  { value: 'scams', label: 'Scam Alerts', icon: AlertTriangle },
  { value: 'security', label: 'Security', icon: Lock },
  { value: 'apps', label: 'Apps', icon: Smartphone },
  { value: 'devices', label: 'Devices', icon: Monitor },
  { value: 'tips', label: 'Tips', icon: Lightbulb },
  { value: 'ai', label: 'AI', icon: Bot },
];

export default function News() {
  const [activeCategory, setActiveCategory] = useState<NewsItem['category'] | 'all'>('all');
  const [visibleCount, setVisibleCount] = useState(6);

  const filtered = activeCategory === 'all'
    ? NEWS_ITEMS
    : NEWS_ITEMS.filter(n => n.category === activeCategory);

  const visible = filtered.slice(0, visibleCount);

  return (
    <>
      <SEOHead
        title="Tech News for Beginners — TekSure"
        description="Stay up to date with the latest tech news, scam alerts, and tips — explained in plain English with no jargon."
      path="/news"
      />
      <Navbar />

      <main className="min-h-screen bg-background">
        {/* Header */}
        <section className="border-b border-border py-16 px-4">
          <div className="container max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">Tech News</h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              The most important tech news and scam alerts explained in plain English — no jargon, no hype.
            </p>
          </div>
        </section>

        <div className="container max-w-4xl mx-auto px-4 py-16">
          {/* Category Filter */}
          <div className="flex flex-wrap gap-2 mb-12">
            {FILTER_CATEGORIES.map(cat => (
              <button
                key={cat.value}
                onClick={() => { setActiveCategory(cat.value); setVisibleCount(6); }}
                className={`px-4 py-2 rounded-xl text-sm font-medium border transition-all ${
                  activeCategory === cat.value
                    ? 'bg-primary text-primary-foreground border-primary'
                    : 'border-border bg-background hover:bg-muted'
                }`}
              >
                {cat.icon && <cat.icon className="h-3.5 w-3.5 inline-block mr-1" />}{cat.label}
              </button>
            ))}
          </div>

          {/* News Grid */}
          <div className="space-y-5">
            {visible.map((item, idx) => (
              <div
                key={item.id}
              >
                <Card className="rounded-2xl border border-border bg-card hover:border-border/60 transition-all">
                  <CardContent className="p-6">
                    <div className="flex gap-5">
                      <item.icon className="h-9 w-9 text-primary shrink-0" />
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-2 flex-wrap mb-3">
                          <span className={`text-xs font-medium px-2.5 py-1 rounded-lg inline-flex items-center gap-1 ${CATEGORY_COLORS[item.category]}`}>
                            {(() => { const CatIcon = CATEGORY_ICONS[item.category]; return <CatIcon className="h-3 w-3" />; })()}
                            {CATEGORY_LABELS[item.category]}
                          </span>
                          <span className="text-xs text-muted-foreground flex items-center gap-1">
                            <Clock className="h-3 w-3" /> {item.readTime}
                          </span>
                          <span className="text-xs text-muted-foreground ml-auto">
                            {new Date(item.date).toLocaleDateString('en-GB', { day: 'numeric', month: 'short' })}
                          </span>
                        </div>
                        <h2 className="font-semibold text-base leading-snug mb-2">{item.title}</h2>
                        <p className="text-sm text-muted-foreground leading-relaxed mb-3">{item.summary}</p>
                        {item.source && item.sourceUrl && (
                          <a
                            href={item.sourceUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1.5 text-xs font-medium text-primary hover:text-primary/80 transition-colors"
                          >
                            Source: {item.source} <ExternalLink className="h-3 w-3" />
                          </a>
                        )}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>

          {/* Load More */}
          {visibleCount < filtered.length && (
            <div className="text-center mt-12">
              <Button variant="outline" onClick={() => setVisibleCount(v => v + 6)} className="gap-2 rounded-xl">
                <ChevronDown className="h-4 w-4" /> Load more news
              </Button>
            </div>
          )}

          {filtered.length === 0 && (
            <p className="text-center text-muted-foreground py-12">No news in this category yet.</p>
          )}

          <NewsletterSignup className="mt-16" />
        </div>
      </main>

      <Footer />
    </>
  );
}

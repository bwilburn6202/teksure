import { useState, useEffect } from 'react';
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

interface HNStory {
  id: number;
  title: string;
  url?: string;
  score: number;
  by: string;
  time: number;
  descendants?: number;
}

function useHNTopStories(count = 10) {
  const [stories, setStories] = useState<HNStory[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    let cancelled = false;
    async function fetchStories() {
      try {
        setLoading(true);
        setError(false);
        const idsRes = await fetch('https://hacker-news.firebaseio.com/v0/topstories.json');
        const ids: number[] = await idsRes.json();
        const top = ids.slice(0, count * 3); // fetch extras to filter
        const storyPromises = top.map(id =>
          fetch(`https://hacker-news.firebaseio.com/v0/item/${id}.json`).then(r => r.json())
        );
        const results: HNStory[] = await Promise.all(storyPromises);
        if (!cancelled) {
          // Filter out job postings (type !== 'job') and items without URL
          const techStories = results
            .filter(s => s && s.title && s.url && !s.title.startsWith('Ask HN') && !s.title.startsWith('Hiring'))
            .slice(0, count);
          setStories(techStories);
          setLoading(false);
        }
      } catch {
        if (!cancelled) {
          setError(true);
          setLoading(false);
        }
      }
    }
    fetchStories();
    return () => { cancelled = true; };
  }, [count]);

  return { stories, loading, error };
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
    id: 26,
    title: 'iPhone Battery Draining Fast After a Recent Update? Here Is What Helps',
    summary: 'After any major iOS update, it is normal for your iPhone\'s battery to drain faster than usual for the first 24–48 hours while the phone finishes reindexing and reoptimizing in the background. If drain continues after 48 hours: go to Settings → Battery to see which app is using the most power, turn off Background App Refresh for apps that don\'t need it (Settings → General → Background App Refresh), and make sure your apps are all updated — developers release iOS-compatible versions alongside Apple\'s updates. If battery health has dropped below 80% (Settings → Battery → Battery Health & Charging), an Apple battery replacement for around $89 will restore normal battery life.',
    category: 'devices',
    date: '2026-04-20',
    icon: Smartphone,
    readTime: '2 min',
    source: 'Apple Support',
    sourceUrl: 'https://support.apple.com',
  },
  {
    id: 25,
    title: 'Windows 11 April Update Is Locking Some Users Out — Here Is the Free Fix',
    summary: 'Microsoft\'s April 2026 Patch Tuesday update (KB5083769) is triggering an unexpected BitLocker recovery screen on some Windows 11 PCs — the blue screen that asks for a 48-digit recovery key before Windows will load. Microsoft has acknowledged the issue. The fix is free and takes about 5 minutes: on your phone or another device, go to account.microsoft.com, sign in, tap Devices, and find your BitLocker recovery key. Type that 48-digit key on the blue screen to unlock your PC. Then install the follow-up update from Windows Update to prevent it recurring. Do not pay anyone who calls offering to help with this — the fix is completely free.',
    category: 'devices',
    date: '2026-04-20',
    icon: Monitor,
    readTime: '2 min',
    source: 'Microsoft Support',
    sourceUrl: 'https://support.microsoft.com',
  },
  {
    id: 24,
    title: 'Microsoft Released an Emergency Windows 11 Fix — Here\'s How to Get It',
    summary: 'After Windows 11 security updates in early 2026, Outlook, Word, and File Explorer started freezing whenever users tried to open or save files stored in OneDrive or Dropbox. Microsoft confirmed the bug and released an emergency out-of-band patch (KB5078127 for version 25H2 and KB5082052 for version 24H2) to fix it. The fix is free and takes about 5 minutes. Go to Start → Settings → Windows Update → Check for updates. Install any available patches and restart your computer. If your apps stop freezing after the restart, the fix worked. You may also notice that some previously downloaded emails re-download in Outlook after the fix — this is normal and clears up on its own.',
    category: 'devices',
    date: '2026-04-19',
    icon: Monitor,
    readTime: '2 min',
    source: 'Microsoft Support',
    sourceUrl: 'https://support.microsoft.com',
  },
  {
    id: 23,
    title: 'Samsung Plans to Put AI in 800 Million Devices by End of 2026 — What That Means for You',
    summary: 'Samsung announced a partnership with Google to double the number of mobile devices running advanced Gemini AI features, with a target of 800 million AI-capable Samsung and Google devices by end of 2026. For everyday users, this means your Samsung phone will gradually get smarter through regular software updates — things like AI-assisted photo editing, automatic text summarization in Messages, and a smarter voice assistant that understands follow-up questions. No new phone required: most Samsung Galaxy phones from 2023 onwards will receive these features as free over-the-air updates. The updates roll out in waves, so you may not see all features immediately — check Settings → Software Update to make sure you have the latest version.',
    category: 'devices',
    date: '2026-04-17',
    icon: Smartphone,
    readTime: '2 min',
    source: 'Google',
    sourceUrl: 'https://ai.google.dev',
  },
  {
    id: 22,
    title: 'Google Found 60 Security Holes in Chrome — Here\'s How to Make Sure Your Browser Is Protected',
    summary: 'Google confirmed 60 newly discovered security vulnerabilities in Chrome this week, two of them rated "critical" — meaning they could allow an attacker to harm your computer or steal information while you browse. The fix is already available but only applies after you restart Chrome. To trigger it manually: click the three dots in the top-right corner of Chrome, select Help, then About Google Chrome. If an update is waiting, you will see a button to Relaunch — click it and your tabs will reopen exactly as they were, now protected. If you see "Google Chrome is up to date," you are already covered.',
    category: 'security',
    date: '2026-04-18',
    icon: Monitor,
    readTime: '2 min',
    source: 'Google Chrome',
    sourceUrl: 'https://chromereleases.googleblog.com',
  },
  {
    id: 21,
    title: 'Apple Is Sending Real Security Warnings Directly to iPhones — Here\'s What to Do',
    summary: 'Apple has been pushing genuine lock-screen notifications to iPhones running older software, warning that hackers can attack your phone just by getting you to visit a compromised website — no clicking required. The vulnerability, known as DarkSword, affects devices running iOS 17 and earlier. If you see a "Critical Software" warning in your Settings app, it is a real Apple alert, not a scam. The fix is straightforward: go to Settings → General → Software Update and install the latest available update for your device. iPhone XR, 11, 12, and 13 owners should prioritize this — the update is free and takes about 10 minutes.',
    category: 'security',
    date: '2026-04-18',
    icon: Smartphone,
    readTime: '2 min',
    source: 'Apple Support',
    sourceUrl: 'https://support.apple.com',
  },
  {
    id: 20,
    title: 'FTC Alert: Fake Traffic Violation Texts Are Hitting Millions of Phones',
    summary: 'The FTC issued an urgent warning on April 14, 2026: scammers are sending fake text messages claiming recipients owe money for an unpaid traffic ticket, toll violation, or moving violation. The texts look official — they include case numbers and urgent payment deadlines — but the link leads to a page that steals your credit card number. Real government agencies never send payment links by text. If you receive one of these texts, delete it immediately and report it to the FTC at ReportFraud.ftc.gov. You can verify any real fine directly through your state\'s official DMV website.',
    category: 'scams',
    date: '2026-04-14',
    icon: AlertTriangle,
    readTime: '2 min',
    source: 'FTC Consumer Advice',
    sourceUrl: 'https://consumer.ftc.gov',
  },
  {
    id: 19,
    title: 'AARP: 7 in 10 Americans Over 50 Say Fraud Is a Top Concern in 2026',
    summary: 'New AARP research published April 8, 2026 shows that 70% of Americans over 50 now list fraud and scams as a major concern — up from 58% in 2024. The research found that AI-generated voice calls, fake government impersonators, and phishing texts are the three most frequently reported scam types. AARP is running free Fraud Prevention Month events throughout April, including community shred days and free fraud helpline sessions. If you or a family member wants free, confidential guidance from a trained fraud specialist, call the AARP Fraud Watch Network helpline at 877-908-3360, Monday through Friday, 8 AM – 8 PM Eastern.',
    category: 'scams',
    date: '2026-04-08',
    icon: AlertTriangle,
    readTime: '2 min',
    source: 'AARP',
    sourceUrl: 'https://www.aarp.org',
  },
  {
    id: 18,
    title: 'Google\'s New AI Works Directly on Your Phone — No Internet Needed',
    summary: 'Google released a new AI system called Gemma 4 that runs directly on your smartphone without sending your information to a server somewhere else. For everyday users, this means two things: it works faster, and your private photos, texts, and questions stay on your device instead of being uploaded to the cloud. Apple and Samsung are doing similar things. Over the next year, your phone will get noticeably smarter at tasks like summarizing long messages, improving your photos, and answering questions — all without your data leaving your hands. No action needed on your part: these improvements come through regular phone software updates.',
    category: 'ai',
    date: '2026-04-09',
    icon: Bot,
    readTime: '2 min',
    source: 'Google',
    sourceUrl: 'https://ai.google.dev',
  },
  {
    id: 17,
    title: 'FTC Alert: Fake "Expiring Reward Points" Texts Are a Scam',
    summary: 'The FTC is warning that millions of Americans are receiving text messages claiming their airline miles, store points, or credit card rewards are about to expire — and asking them to click a link to save them. If you click, the link takes you to a fake website designed to steal your login, credit card number, or Social Security number. The safe move: never click the link in the text. Instead, open the company\'s official app yourself and check your rewards balance there. You can also reduce how many scam texts you receive by turning on your carrier\'s free spam filter: AT&T Call Protect, T-Mobile Scam Shield, or Verizon Call Filter. Report scam texts to the FTC at ReportFraud.ftc.gov.',
    category: 'scams',
    date: '2026-04-07',
    icon: AlertTriangle,
    readTime: '2 min',
    source: 'FTC Consumer Advice',
    sourceUrl: 'https://consumer.ftc.gov',
  },
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
  const { stories: hnStories, loading: hnLoading, error: hnError } = useHNTopStories(10);

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

      <main id="main-content" className="min-h-screen bg-background">
        {/* Header */}
        <section className="border-b border-border py-16 px-4">
          <div className="container max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">Tech News</h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              The most important tech news and scam alerts explained in plain English — no jargon, no hype.
            </p>
          </div>
        </section>

        {/* HackerNews Live Feed */}
        <section className="bg-muted/30 border-b border-border py-12 px-4">
          <div className="container max-w-4xl mx-auto">
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-2">
                <span className="text-xl"></span>
                <div>
                  <h2 className="font-bold text-lg">Top Tech Stories Right Now</h2>
                  <p className="text-xs text-muted-foreground">Live from Hacker News · Updates when you refresh</p>
                </div>
              </div>
              <a
                href="https://news.ycombinator.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs text-muted-foreground hover:text-foreground transition-colors flex items-center gap-1"
              >
                View on HN <ExternalLink className="h-3 w-3" />
              </a>
            </div>

            {hnLoading && (
              <div className="space-y-3">
                {Array.from({ length: 5 }).map((_, i) => (
                  <div key={i} className="h-14 rounded-xl bg-muted animate-pulse" />
                ))}
              </div>
            )}

            {hnError && (
              <div className="text-center py-8 text-muted-foreground text-sm">
                <p>Could not load live stories right now. Check back in a moment.</p>
              </div>
            )}

            {!hnLoading && !hnError && hnStories.length > 0 && (
              <div className="space-y-2">
                {hnStories.map((story, i) => (
                  <a
                    key={story.id}
                    href={story.url || `https://news.ycombinator.com/item?id=${story.id}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-start gap-3 p-3 rounded-xl hover:bg-background transition-colors group border border-transparent hover:border-border"
                  >
                    <span className="text-sm font-bold text-muted-foreground/40 w-5 text-right shrink-0 mt-0.5">{i + 1}</span>
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-medium leading-snug group-hover:text-primary transition-colors line-clamp-2">
                        {story.title}
                      </p>
                      <div className="flex items-center gap-3 mt-1">
                        <span className="text-xs text-muted-foreground">▲ {story.score}</span>
                        {story.url && (
                          <span className="text-xs text-muted-foreground truncate">
                            {new URL(story.url).hostname.replace('www.', '')}
                          </span>
                        )}
                        {story.descendants !== undefined && (
                          <span className="text-xs text-muted-foreground">{story.descendants} comments</span>
                        )}
                      </div>
                    </div>
                    <ExternalLink className="h-3.5 w-3.5 text-muted-foreground/30 group-hover:text-primary shrink-0 mt-1 transition-colors" />
                  </a>
                ))}
              </div>
            )}

            <p className="text-xs text-muted-foreground mt-4 text-center">
              Powered by the <a href="https://github.com/HackerNews/API" target="_blank" rel="noopener noreferrer" className="hover:underline text-primary">HackerNews API</a> · Stories update on page refresh
            </p>
          </div>
        </section>

        <div className="container max-w-4xl mx-auto px-4 py-16">
          {/* TekSure Curated Stories label */}
          <div className="flex items-center gap-2 mb-6">
            <h2 className="font-bold text-lg">TekSure Curated Stories</h2>
            <span className="text-xs text-muted-foreground bg-muted px-2 py-0.5 rounded-full">Plain English summaries</span>
          </div>

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
                            {new Date(item.date).toLocaleDateString('en-US', { day: 'numeric', month: 'short' })}
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

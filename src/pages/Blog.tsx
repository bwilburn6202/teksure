import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { BookOpen, Clock, ChevronDown, ChevronRight } from 'lucide-react';

interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  emoji: string;
  date: string;
  readTime: string;
  featured?: boolean;
  content: string[];
}

const BLOG_POSTS: BlogPost[] = [
  {
    slug: 'why-software-updates-matter',
    title: 'Why You Should Never Ignore Software Updates',
    excerpt: 'That little notification telling you to update your phone or computer isn\'t just annoying — ignoring it could leave you wide open to hackers. Here\'s what\'s really happening behind the scenes.',
    category: 'Security',
    emoji: '🔄',
    date: '2026-03-20',
    readTime: '4 min',
    featured: true,
    content: [
      'Every time you see a "software update available" notification, your device is essentially saying: "We found some security holes — please let us fix them."',
      'When hackers discover a weakness in an operating system or app, they race to exploit it before the company can release a fix. These weaknesses are called "vulnerabilities." Software updates almost always include "patches" — code that closes those holes.',
      'In 2017, a ransomware attack called WannaCry infected over 200,000 computers in 150 countries. The attack specifically targeted a Windows vulnerability that Microsoft had already released a patch for — months earlier. Every infected computer had simply skipped the update.',
      'How to stay updated: On iPhone, go to Settings → General → Software Update. On Android, go to Settings → System → Software Update. On Windows, go to Start → Settings → Windows Update. Enable automatic updates everywhere you can — the default choice is usually the safest.',
    ],
  },
  {
    slug: 'password-manager-beginners',
    title: 'Password Managers: The Simplest Way to Stay Safe Online',
    excerpt: 'Remembering a different password for every website is impossible — and using the same password everywhere is dangerous. Password managers solve both problems at once.',
    category: 'Security',
    emoji: '🔐',
    date: '2026-03-17',
    readTime: '5 min',
    featured: true,
    content: [
      'Most people use the same password (or very similar ones) across multiple websites. It\'s completely understandable — how can anyone remember dozens of unique passwords? But it creates a serious problem: if one website is hacked and your password is stolen, criminals immediately try that same password on Amazon, Gmail, your bank, and everywhere else.',
      'A password manager is an app that remembers all your passwords for you — secured behind one strong "master password" that only you know. You only need to remember that one password; the manager handles everything else.',
      'Popular options include: Bitwarden (free, open-source), 1Password (paid, excellent for families), and the built-in options in Chrome (Google Password Manager) or Safari (iCloud Keychain) which are free and easy for beginners.',
      'Getting started: Download a password manager, create your account with a very strong master password (write it down on paper and keep it safe), then install the browser extension. From then on, when you log into websites, it will offer to save and auto-fill your passwords.',
      'Security fact: A good password manager generates random passwords like "Kx7#mP9$nQw2" for every site. Even if hackers steal your password from one website, it won\'t work anywhere else.',
    ],
  },
  {
    slug: 'ai-tools-for-seniors',
    title: 'How AI Can Make Daily Life Easier for Older Adults',
    excerpt: 'AI assistants aren\'t just for tech enthusiasts. From reminders to dictating messages, here are some genuinely useful ways AI tools are helping older people every day.',
    category: 'AI & Tech',
    emoji: '🤖',
    date: '2026-03-14',
    readTime: '4 min',
    content: [
      'Artificial intelligence has a reputation for being complicated and futuristic — but the reality is that many AI tools are specifically designed to be simple and helpful for everyday tasks.',
      'Voice assistants like Siri (iPhone), Google Assistant (Android), and Alexa (Amazon Echo) can: set reminders and alarms by voice, answer questions, play music or audiobooks, make phone calls hands-free, and control smart home devices.',
      'AI for writing: Tools like Microsoft Copilot (built into Windows 11) or ChatGPT can help you compose letters, emails, or messages. Simply describe what you want to say — "write a polite letter to my landlord asking them to fix the heating" — and it writes a draft you can edit.',
      'Health & medication: Some smart speakers can remind you to take medication at the same time each day. Just say "Alexa, remind me to take my tablets at 8am every day."',
      'Video calling: FaceTime, WhatsApp, and Google Meet all have simple interfaces for staying in touch with family. Many offer features like automatic captions and background noise reduction.',
    ],
  },
  {
    slug: 'smart-tv-guide',
    title: 'Getting the Most from Your Smart TV',
    excerpt: 'Modern smart TVs can do much more than just play channels. Here\'s a beginner\'s tour of everything your TV is probably capable of — and how to use it.',
    category: 'Devices',
    emoji: '📺',
    date: '2026-03-10',
    readTime: '5 min',
    content: [
      'Most televisions sold today are "smart TVs" — they connect to the internet and run apps just like a phone or tablet. If your TV was bought in the last 5 years, it almost certainly has these features.',
      'Streaming apps: Use the "Home" or "Smart Hub" button on your remote to open the app store. Free services worth installing include BBC iPlayer, ITVX, Channel 4, and YouTube. Paid services include Netflix, Disney+, and Amazon Prime Video.',
      'Screen mirroring: You can show your phone screen on your TV. On iPhone, look for "AirPlay" in the Control Centre (swipe down). On Android, look for "Cast" or "Smart View" in the notification bar or screen settings.',
      'Voice control: Many modern remotes have a microphone button — hold it and speak to search for shows, change volume, or open apps. No typing required.',
      'Tips: If your TV runs slowly, try turning it off completely (not just standby) for 30 seconds. Also check for TV software updates in the Settings menu — these improve performance and add features.',
    ],
  },
  {
    slug: 'spotting-fake-websites',
    title: 'How to Tell if a Website is Real or Fake',
    excerpt: 'Scammers create convincing fake websites to steal your details. Here are six quick checks that will protect you every time you\'re unsure about a site.',
    category: 'Scam Alerts',
    emoji: '🕵️',
    date: '2026-03-06',
    readTime: '3 min',
    content: [
      'Fake websites — also called "phishing sites" — are designed to look exactly like real ones. They might impersonate your bank, a parcel delivery company, HMRC, or a retailer. Here\'s how to check if a site is genuine.',
      '1. Check the address bar: The URL should start with "https://" (the s stands for secure). If it just says "http://" — especially on a page asking for payment or login — leave immediately.',
      '2. Check the domain name: Scammers use clever misspellings. "roya1mail.com" (with a 1) vs "royalmail.com". Always read the domain carefully before entering any details.',
      '3. Look for spelling mistakes: Real companies employ proofreaders. Poorly written text, odd phrases, or multiple spelling mistakes are red flags.',
      '4. Search for it: If you\'re unsure about a site, type the company name into Google and visit the result — rather than clicking the link you were given.',
      '5. Check the contact page: Genuine businesses have real addresses and phone numbers. If there\'s no contact information, be suspicious.',
      '6. Use a tool: You can check if a website has been reported as dangerous at safebrowsing.google.com/safebrowsing/report_phish/',
    ],
  },
  {
    slug: 'video-calls-tips',
    title: '10 Tips for Better Video Calls (Zoom, FaceTime & WhatsApp)',
    excerpt: 'Whether you\'re chatting with family or joining a work meeting, these simple tips will make your video calls look and sound much better.',
    category: 'Tips & Tricks',
    emoji: '📹',
    date: '2026-03-01',
    readTime: '3 min',
    content: [
      'Video calls have become a major part of staying connected — but poor lighting, background noise, and technical issues can make them frustrating. Here are ten quick tips to improve your calls.',
      '1. Face a window or lamp: Natural light from in front of you (not behind you) makes your face clearly visible. Backlighting turns you into a silhouette.',
      '2. Raise your device to eye level: Propping your phone or laptop up on a stack of books so the camera is at eye level is more flattering and natural than looking down at a screen on a table.',
      '3. Use headphones: Headphones dramatically reduce echo and background noise, making it much easier for others to hear you clearly.',
      '4. Find a quiet spot: Background noise — TV, traffic, other people — is distracting. Close doors and windows before important calls.',
      '5. Use Wi-Fi, not mobile data: Video calls use a lot of data and work much better on Wi-Fi. Move closer to your router if the connection is weak.',
      '6. Join early: Log in 2-3 minutes before a scheduled call to check your camera and microphone are working.',
      '7. Mute when not speaking: On group calls, mute your microphone when you\'re not talking to prevent background noise disrupting others.',
    ],
  },
];

const CATEGORY_COLORS: Record<string, string> = {
  Security: 'bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-300',
  'AI & Tech': 'bg-pink-100 text-pink-700 dark:bg-pink-900/30 dark:text-pink-300',
  Devices: 'bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300',
  'Scam Alerts': 'bg-orange-100 text-orange-700 dark:bg-orange-900/30 dark:text-orange-300',
  'Tips & Tricks': 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-300',
};

const CATEGORIES = ['All', ...new Set(BLOG_POSTS.map(p => p.category))];

function PostCard({ post, featured = false }: { post: BlogPost; featured?: boolean }) {
  return (
    <Card className={`border-border hover:shadow-md transition-shadow ${featured ? 'col-span-full' : ''}`}>
      <CardContent className={`p-5 ${featured ? 'md:flex md:gap-6' : ''}`}>
        {featured && <div className="text-5xl shrink-0 mb-4 md:mb-0 md:mt-1">{post.emoji}</div>}
        <div>
          <div className="flex items-center gap-2 flex-wrap mb-2">
            {!featured && <span className="text-2xl mr-1">{post.emoji}</span>}
            <span className={`text-xs font-medium px-2 py-0.5 rounded-full ${CATEGORY_COLORS[post.category] || 'bg-muted text-muted-foreground'}`}>
              {post.category}
            </span>
            {post.featured && <Badge variant="secondary" className="text-xs">Featured</Badge>}
            <span className="text-xs text-muted-foreground flex items-center gap-1 ml-auto">
              <Clock className="h-3 w-3" /> {post.readTime}
            </span>
            <span className="text-xs text-muted-foreground">
              {new Date(post.date).toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' })}
            </span>
          </div>
          <h2 className={`font-bold leading-snug mb-2 ${featured ? 'text-xl' : 'text-base'}`}>{post.title}</h2>
          <p className="text-sm text-muted-foreground leading-relaxed mb-3">{post.excerpt}</p>
          <Link
            to={`/blog/${post.slug}`}
            className="inline-flex items-center gap-1 text-xs font-medium text-primary hover:underline"
          >
            Read article <ChevronRight className="h-3 w-3" />
          </Link>
        </div>
      </CardContent>
    </Card>
  );
}

// Individual post view (full article)
function PostDetail({ post }: { post: BlogPost }) {
  return (
    <div className="container max-w-2xl mx-auto px-4 py-8">
      <Link to="/blog" className="inline-flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground mb-6 transition-colors">
        ← Back to Blog
      </Link>
      <div className="flex items-center gap-2 mb-3">
        <span className={`text-xs font-medium px-2 py-0.5 rounded-full ${CATEGORY_COLORS[post.category] || 'bg-muted text-muted-foreground'}`}>{post.category}</span>
        <span className="text-xs text-muted-foreground flex items-center gap-1"><Clock className="h-3 w-3" /> {post.readTime} read</span>
        <span className="text-xs text-muted-foreground ml-auto">{new Date(post.date).toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' })}</span>
      </div>
      <div className="text-5xl mb-4">{post.emoji}</div>
      <h1 className="text-2xl md:text-3xl font-bold mb-6 leading-tight">{post.title}</h1>
      <p className="text-muted-foreground leading-relaxed mb-6 text-base border-l-4 border-primary/40 pl-4 italic">{post.excerpt}</p>
      <div className="space-y-4">
        {post.content.map((para, i) => (
          <p key={i} className="text-sm leading-relaxed text-foreground/90">{para}</p>
        ))}
      </div>
      <div className="mt-8 pt-6 border-t border-border">
        <p className="text-sm text-muted-foreground mb-3">Keep learning with TekSure guides:</p>
        <Button asChild variant="outline" className="gap-2">
          <Link to="/guides"><BookOpen className="h-4 w-4" /> Browse all guides</Link>
        </Button>
      </div>
    </div>
  );
}

export default function Blog() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [visibleCount, setVisibleCount] = useState(6);
  // Detect if we're on a detail page via URL slug
  const slug = window.location.pathname.replace('/blog/', '').replace('/blog', '');
  const detailPost = slug && slug !== '' ? BLOG_POSTS.find(p => p.slug === slug) : null;

  if (detailPost) {
    return (
      <>
        <SEOHead title={`${detailPost.title} — TekSure Blog`} description={detailPost.excerpt} />
        <Navbar />
        <main className="min-h-screen bg-background">
          <PostDetail post={detailPost} />
        </main>
        <Footer />
      </>
    );
  }

  const filtered = activeCategory === 'All' ? BLOG_POSTS : BLOG_POSTS.filter(p => p.category === activeCategory);
  const visible = filtered.slice(0, visibleCount);
  const featured = BLOG_POSTS.filter(p => p.featured);

  return (
    <>
      <SEOHead
        title="Tech Blog for Beginners — TekSure"
        description="Simple, jargon-free articles about technology, security, and staying safe online. Written for everyone."
      />
      <Navbar />

      <main className="min-h-screen bg-background">
        <section className="bg-gradient-to-br from-primary/10 via-background to-secondary/10 border-b border-border py-10 px-4">
          <div className="container max-w-4xl mx-auto text-center">
            <div className="flex justify-center mb-3">
              <div className="p-3 bg-primary/10 rounded-full">
                <BookOpen className="h-8 w-8 text-primary" />
              </div>
            </div>
            <h1 className="text-3xl md:text-4xl font-bold mb-2">TekSure Blog</h1>
            <p className="text-muted-foreground text-lg max-w-xl mx-auto">
              Plain-English articles about technology, security, and making the most of your devices.
            </p>
          </div>
        </section>

        <div className="container max-w-4xl mx-auto px-4 py-8">
          {/* Category filter */}
          <div className="flex flex-wrap gap-2 mb-6">
            {CATEGORIES.map(cat => (
              <button
                key={cat}
                onClick={() => { setActiveCategory(cat); setVisibleCount(6); }}
                className={`px-3 py-1.5 rounded-full text-sm font-medium border transition-all ${
                  activeCategory === cat
                    ? 'bg-primary text-primary-foreground border-primary shadow-sm'
                    : 'bg-muted border-border hover:bg-accent'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Grid */}
          <div className="grid gap-4 md:grid-cols-2">
            {visible.map(post => (
              <PostCard key={post.slug} post={post} />
            ))}
          </div>

          {visibleCount < filtered.length && (
            <div className="text-center mt-6">
              <Button variant="outline" onClick={() => setVisibleCount(v => v + 6)} className="gap-2">
                <ChevronDown className="h-4 w-4" /> Load more posts
              </Button>
            </div>
          )}

          {filtered.length === 0 && (
            <p className="text-center text-muted-foreground py-12">No posts in this category yet.</p>
          )}
        </div>
      </main>

      <Footer />
    </>
  );
}

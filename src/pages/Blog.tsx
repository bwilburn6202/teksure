import { useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { NewsletterSignup } from '@/components/NewsletterSignup';
import { BookOpen, Clock, ChevronDown, ChevronRight, RefreshCw, Lock, Bot, Tv, Search, Video, Cloud, Battery, Volume2, ShoppingBag, ShieldCheck, Monitor, MapPin, CreditCard, type LucideIcon } from 'lucide-react';

interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  icon: LucideIcon;
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
    icon: RefreshCw,
    date: '2026-03-20',
    readTime: '4 min',
    featured: true,
    content: [
      'Every time you see a "software update available" notification, your device is essentially saying: "We found some security holes — please let us fix them."',
      'When hackers discover a weakness in an operating system or app, they race to exploit it before the company can release a fix. These weaknesses are called "vulnerabilities." Software updates almost always include "patches" — code that closes those holes.',
      'In 2017, a ransomware attack called WannaCry infected over 200,000 computers in 150 countries. The attack specifically targeted a Windows vulnerability that Microsoft had already released a patch for — months earlier. Every infected computer had skipped the update.',
      'How to stay updated: On iPhone, go to Settings → General → Software Update. On Android, go to Settings → System → Software Update. On Windows, go to Start → Settings → Windows Update. Enable automatic updates everywhere you can — the default choice is usually the safest.',
    ],
  },
  {
    slug: 'password-manager-beginners',
    title: 'Password Managers: The Simplest Way to Stay Safe Online',
    excerpt: 'Remembering a different password for every website is impossible — and using the same password everywhere is dangerous. Password managers solve both problems at once.',
    category: 'Security',
    icon: Lock,
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
    icon: Bot,
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
    icon: Tv,
    date: '2026-03-10',
    readTime: '5 min',
    content: [
      'Most televisions sold today are "smart TVs" — they connect to the internet and run apps just like a phone or tablet. If your TV was bought in the last 5 years, it almost certainly has these features.',
      'Streaming apps: Use the "Home" or "Smart Hub" button on your remote to open the app store. Free services worth installing include BBC iPlayer, ITVX, Channel 4, and YouTube. Paid services include Netflix, Disney+, and Amazon Prime Video.',
      'Screen mirroring: You can show your phone screen on your TV. On iPhone, look for "AirPlay" in the Control Center (swipe down). On Android, look for "Cast" or "Smart View" in the notification bar or screen settings.',
      'Voice control: Many modern remotes have a microphone button — hold it and speak to search for shows, change volume, or open apps. No typing required.',
      'Tips: If your TV runs slowly, try turning it off completely (not just standby) for 30 seconds. Also check for TV software updates in the Settings menu — these improve performance and add features.',
    ],
  },
  {
    slug: 'spotting-fake-websites',
    title: 'How to Tell if a Website is Real or Fake',
    excerpt: 'Scammers create convincing fake websites to steal your details. Here are six quick checks that will protect you every time you\'re unsure about a site.',
    category: 'Scam Alerts',
    icon: Search,
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
    icon: Video,
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
  {
    slug: 'what-is-the-cloud',
    title: 'What Exactly Is "the Cloud" — and Should You Use It?',
    excerpt: 'Everyone talks about "the cloud" but few people explain what it actually means. Here\'s a plain-English guide to what it is, how it works, and whether it\'s right for you.',
    category: 'Explainers',
    icon: Cloud,
    date: '2026-03-22',
    readTime: '5 min',
    content: [
      '"The cloud" means storing your files on someone else\'s computer server — connected to the internet — instead of only on your own device. When you save a photo to iCloud or Google Photos, it\'s traveling over the internet to a large computer building called a data center, where it\'s stored safely.',
      'The big advantage: your files are available from any device, anywhere. Lose your phone? Your photos are still safe in the cloud. Get a new laptop? Sign in and all your documents reappear.',
      'Popular cloud services you may already use: iCloud (Apple), Google Drive, Google Photos, OneDrive (Microsoft), and Dropbox. Most offer free storage up to a certain limit, with paid plans for more space.',
      'Is it safe? Reputable cloud services encrypt your files both in transit and at rest, meaning even the company itself can\'t easily read them. They\'re generally safer than keeping everything on one device that could be lost, stolen, or broken.',
      'Should you use it? For most people, yes — especially for photos. The peace of mind of knowing your memories are backed up even if something happens to your phone is worth it. Start with Google Photos or iCloud, both of which back up your photos automatically.',
      'Privacy note: cloud providers do have access to your data in theory. For very sensitive documents, consider encrypting them before uploading, or keeping them locally.',
    ],
  },
  {
    slug: 'phone-battery-tips',
    title: '10 Ways to Make Your Phone Battery Last Longer',
    excerpt: 'Battery life is one of the top complaints about modern smartphones. These practical tips can add hours to your daily charge — without needing a new phone.',
    category: 'Tips & Tricks',
    icon: Battery,
    date: '2026-03-19',
    readTime: '4 min',
    content: [
      'Modern phones are powerful — but that power comes at a cost to battery life. Here are the most effective things you can do to extend how long your charge lasts.',
      '1. Turn down screen brightness: The screen is the single biggest drain on battery life. Reducing brightness even slightly — or enabling auto-brightness — can add 1-2 hours to your day.',
      '2. Enable battery saver mode: Both iPhone (Low Power Mode) and Android (Battery Saver) reduce background activity when you\'re getting low. You can set these to activate automatically at 20%.',
      '3. Turn off WiFi and Bluetooth when not in use: These radios constantly scan for nearby networks and devices, using power even when you\'re not actively using them.',
      '4. Close unused apps: Apps running in the background still use battery. On iPhone, swipe up from the bottom and flick away apps. On Android, tap the square button and clear all.',
      '5. Check battery-draining apps: Go to Settings → Battery to see which apps are using the most power. Social media and email apps are usually the culprits.',
      '6. Reduce email push notifications: Having email "push" every few minutes constantly wakes your phone. Change to "fetch" every 30 minutes instead.',
      '7. Avoid charging to 100% or letting it hit 0%: Keeping your battery between 20-80% extends its overall lifespan. Many modern phones have a setting to stop charging at 80%.',
      '8. Turn off Location Services for apps that don\'t need it: Go to Settings → Privacy → Location Services and change most apps to "Only while using" rather than "Always".',
      '9. Use Dark Mode: If your phone has an OLED screen (most modern flagships), dark mode saves significant battery because black pixels are literally turned off.',
      '10. Keep your phone at room temperature: Extreme heat or cold damages lithium batteries permanently. Never leave your phone in a hot car.',
    ],
  },
  {
    slug: 'understanding-smart-speakers',
    title: 'Smart Speakers Explained: Amazon Echo, Google Nest, and Apple HomePod',
    excerpt: 'Smart speakers let you control devices, play music, and ask questions using just your voice. But which one is right for you — and should you be worried about privacy?',
    category: 'Devices',
    icon: Volume2,
    date: '2026-03-15',
    readTime: '5 min',
    content: [
      'Smart speakers are voice-activated devices that sit in your home and respond to questions, play music, set reminders, and control smart home devices. The three main options are Amazon Echo (Alexa), Google Nest (Google Assistant), and Apple HomePod (Siri).',
      'Amazon Echo / Alexa: The most popular and affordable option. Excellent for shopping, Amazon Music, audiobooks, and smart home control. The basic Echo Dot costs around $30.',
      'Google Nest: Best for answering general knowledge questions (Google search built in), setting reminders, and integrating with Google Calendar and Gmail. Particularly good if you already use Google services.',
      'Apple HomePod: Best for iPhone users who want premium sound quality. Integrates tightly with iCloud, Apple Music, and Apple\'s Home app for smart home control.',
      'Privacy concerns are real: Smart speakers are always listening for their "wake word" (Alexa / Hey Google / Hey Siri). This means audio is being processed continuously. All three companies have faced criticism for storing voice recordings. You can review and delete your recordings in each app\'s settings.',
      'Practical steps: Mute the microphone when you want privacy (all devices have a physical mute button). Regularly review your voice history in the companion app. Consider whether the convenience is worth the trade-off for your situation.',
      'For older adults: Smart speakers can be genuinely life-changing — allowing hands-free calls, medication reminders, weather checks, and music without needing to pick up a phone or find glasses.',
    ],
  },
  {
    slug: 'online-shopping-safely',
    title: 'How to Shop Online Safely — A Checklist for Every Purchase',
    excerpt: 'Online shopping is convenient and often cheaper — but scammers create convincing fake shops. This checklist protects you every time.',
    category: 'Security',
    icon: ShoppingBag,
    date: '2026-03-12',
    readTime: '4 min',
    content: [
      'Online shopping is fantastic — but fraudulent websites cost UK consumers over $100 million every year. Most of these scams are easy to avoid once you know what to look for.',
      'Before you buy: Check for HTTPS (padlock icon in your browser\'s address bar) — this means the connection is encrypted. However, even scam sites can have HTTPS now, so it\'s necessary but not sufficient.',
      'Check the domain name carefully: Scammers register near-identical domains like "amaz0n.co.uk" or "eba y.com". Always read the web address slowly before entering any details.',
      'Google the company + "reviews" or "+ scam": A few minutes of research can save you significant money. Look for reviews on independent platforms like Trustpilot.',
      'Be suspicious of prices that seem too good to be true: If a designer item is 90% off, it\'s almost certainly counterfeit or a scam.',
      'Use a credit card where possible: Credit cards offer much stronger fraud protection than debit cards or bank transfers. Under Section 75 of the Consumer Credit Act, purchases over $100 are protected.',
      'Never transfer money directly via bank transfer for purchases from strangers: Once money is transferred, it\'s very difficult to recover.',
      'Check the returns policy before buying: Legitimate retailers have clear, accessible returns policies. If you can\'t find one, that\'s a red flag.',
      'Safe payment methods: PayPal, credit card, and Apple/Google Pay all offer buyer protection. Gift cards and bank transfers do not.',
    ],
  },
  {
    slug: 'social-media-privacy',
    title: 'Protecting Your Privacy on Social Media: A Practical Guide',
    excerpt: 'Most people share far more than they realize on social media — and much of it is visible to strangers. Here\'s how to lock down your accounts in 15 minutes.',
    category: 'Security',
    icon: ShieldCheck,
    date: '2026-03-10',
    readTime: '5 min',
    content: [
      'Social media platforms are designed to encourage sharing — which is great for staying connected, but can create privacy risks if you\'re not careful. Here\'s how to tighten up the main ones.',
      'Facebook: Go to Settings & Privacy → Privacy Checkup. Change "Who can see your posts?" to Friends rather than Public. Review your "About" section and remove your phone number, home address, and employer if listed. Turn off facial recognition if it\'s available.',
      'Who can find you: Under Settings → How People Find and Contact You, change your phone number and email lookups to "Friends" only. This prevents strangers from finding your profile from your contact details.',
      'Instagram: Go to Settings → Account → Account Privacy and switch to a Private account if you only want followers you approve to see your posts. Be careful about geotagging — your home and regular locations can be inferred from background details in photos.',
      'WhatsApp: Go to Settings → Privacy. Set Last Seen, Profile Photo, and Status to "My Contacts" rather than "Everyone." Enable two-step verification under Settings → Account → Two-Step Verification.',
      'General rules: Never accept friend requests from people you don\'t know. Be cautious about what appears in your photos — house numbers, street signs, school uniforms. Criminals use social media to case potential targets.',
      'Oversharing is more dangerous than most people realize: Announcing you\'re going on vacation publicly tells burglars your home will be empty. Posting birthday or family information helps scammers answer security questions.',
    ],
  },
  {
    slug: 'tablet-vs-laptop',
    title: 'Tablet or Laptop? How to Choose the Right Device for You',
    excerpt: 'Many people end up buying the wrong device. Here\'s an honest comparison that will help you decide based on how you actually use technology.',
    category: 'Devices',
    icon: Monitor,
    date: '2026-03-08',
    readTime: '5 min',
    content: [
      'The single most common technology purchase mistake is buying a device that\'s wrong for how you actually use it. Let\'s break down when each makes sense.',
      'Choose a tablet if: You mainly use your device for browsing the web, watching videos, video calling, reading, checking emails, and social media. Tablets are lighter, have longer battery life, and are generally easier for beginners. The iPad is the most beginner-friendly option.',
      'Choose a laptop if: You need to type a lot (documents, spreadsheets, emails), use specific software like accounting programs or Photoshop, print regularly, or use USB devices like printers or external drives. Laptops are more capable but more complex.',
      'The hybrid option: Some devices bridge the gap — like the iPad with a keyboard case, or Microsoft Surface tablets. These work well but can be more expensive.',
      'For absolute beginners: We generally recommend an iPad as a first device. The App Store is well-curated, updates are simple, and the learning curve is gentler. An Amazon Fire tablet is a more budget-friendly option for basic use.',
      'Price guide: A basic Android tablet: $100-200. Entry-level iPad: $300-400. Budget laptop: $250-400. Mid-range laptop: $500-800.',
      'The most important question to ask: "What will I actually use it for?" Be honest with yourself. If you mostly want to watch iPlayer and video call your grandchildren, a $300 tablet will serve you better than a $600 laptop.',
    ],
  },
  {
    slug: 'getting-started-with-google',
    title: 'Getting Started with Google: Maps, Translate, and Photos Explained',
    excerpt: 'Google offers some genuinely brilliant free tools that many people haven\'t discovered. Here\'s how Maps, Translate, and Photos can make daily life easier.',
    category: 'Tips & Tricks',
    icon: MapPin,
    date: '2026-03-05',
    readTime: '6 min',
    content: [
      'Google offers a suite of free tools that can genuinely change how you navigate the world, communicate, and preserve memories. Here are three worth knowing about.',
      'Google Maps: Far more than just directions. Use the "Explore" tab to find nearby restaurants, pharmacies, and shops with opening hours and reviews. The Street View feature lets you see what a destination looks like before you arrive. Offline maps let you download an area to navigate without mobile data.',
      'Google Maps Tips: Save your home and work addresses under "Saved" for instant routing. Share your real-time location with family members for peace of mind when traveling alone. Use the wheelchair accessibility filter if mobility is a consideration.',
      'Google Translate: Point your camera at text in a foreign language — a menu, sign, or document — and it translates instantly on screen. You can also type or speak text for translation. Works with over 100 languages and is free.',
      'Translate in conversation: The "Conversation" mode lets two people speak to each other in different languages and hear the translation automatically — remarkable for communication with carers, medical professionals, or while traveling.',
      'Google Photos: Automatically backs up every photo from your phone to the cloud. The search feature is astonishingly good — type "beach 2019" or "birthday cake" and it finds matching photos. Shared albums let you exchange photos with family without sending individual attachments.',
      'Google Photos memory features: The "Memories" section resurfaces photos from the same date in previous years — a lovely way to look back at moments. You can create albums, slideshows, and even books from your photos.',
    ],
  },
  {
    slug: 'understanding-subscriptions',
    title: 'Are You Paying for Services You\'ve Forgotten About? How to Audit Your Subscriptions',
    excerpt: 'The average person wastes over $300 a year on forgotten subscriptions. Here\'s how to find and cancel the ones you no longer need.',
    category: 'Tips & Tricks',
    icon: CreditCard,
    date: '2026-03-03',
    readTime: '4 min',
    content: [
      'Subscription services are designed to be easy to start and easy to forget. Streaming services, app subscriptions, cloud storage plans, and digital magazines quietly drain money every month. The average UK adult now spends over $600 a year on subscriptions.',
      'How to find your subscriptions on iPhone: Go to Settings → [your name] → Subscriptions. This shows every active subscription billed through Apple.',
      'How to find subscriptions on Android: Open the Google Play Store → tap your profile picture → Payments & subscriptions → Subscriptions.',
      'Check your bank and credit card statements: Filter for recurring charges you don\'t recognize. Many subscriptions disguise themselves as unfamiliar company names — Amazon Prime shows as "AMZN DIGITAL SERVICES".',
      'Email search: Search your inbox for "subscription", "receipt", "renewal", and "billing" to surface subscriptions that aren\'t billed through your phone.',
      'The cancellation question to ask yourself: "Have I used this in the last 30 days?" If the answer is no, cancel it. You can always resubscribe if you miss it.',
      'Useful free tools: Many banks now have subscription tracking built into their apps. Monzo, Starling, and HSBC all show recurring payments grouped by merchant.',
      'Free alternatives to popular subscriptions: Instead of Microsoft Office ($60/year), try Google Docs (free). Instead of paying for news subscriptions, most local libraries provide free access to digital newspapers.',
    ],
  },
];

const CATEGORY_COLORS: Record<string, string> = {
  Security: 'bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-300',
  'AI & Tech': 'bg-pink-100 text-pink-700 dark:bg-pink-900/30 dark:text-pink-300',
  Devices: 'bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300',
  'Scam Alerts': 'bg-orange-100 text-orange-700 dark:bg-orange-900/30 dark:text-orange-300',
  'Tips & Tricks': 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-300',
  Explainers: 'bg-purple-100 text-purple-700 dark:bg-purple-900/30 dark:text-purple-300',
};

const CATEGORIES = ['All', ...new Set(BLOG_POSTS.map(p => p.category))];

function PostCard({ post, featured = false }: { post: BlogPost; featured?: boolean }) {
  return (
    <div
    >
      <div className={`glow-card ${featured ? 'col-span-full' : ''}`}>
        <div className={`${featured ? 'md:flex md:gap-8' : ''}`}>
          {featured && <post.icon className="h-14 w-14 text-primary shrink-0 mb-4 md:mb-0" />}
          <div className="flex-1">
            <div className="flex items-center gap-2 flex-wrap mb-3">
              {!featured && <post.icon className="h-7 w-7 text-primary mr-1" />}
              <span className={`text-xs font-medium px-2.5 py-1 rounded-lg ${CATEGORY_COLORS[post.category] || 'bg-muted text-muted-foreground'}`}>
                {post.category}
              </span>
              {post.featured && <Badge className="text-xs font-medium bg-primary/10 text-primary border-0">Featured</Badge>}
              <span className="text-xs text-muted-foreground flex items-center gap-1 ml-auto">
                <Clock className="h-3 w-3" /> {post.readTime}
              </span>
              <span className="text-xs text-muted-foreground">
                {new Date(post.date).toLocaleDateString('en-US', { day: 'numeric', month: 'short' })}
              </span>
            </div>
            <h2 className={`font-semibold leading-snug mb-2 ${featured ? 'text-2xl' : 'text-base'}`}>{post.title}</h2>
            <p className="text-sm text-muted-foreground leading-relaxed mb-4">{post.excerpt}</p>
            <Link
              to={`/blog/${post.slug}`}
              className="inline-flex items-center gap-1.5 text-sm font-medium text-primary hover:text-primary/80 transition-colors"
            >
              Read article <ChevronRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </div>
    </div>
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
        <span className="text-xs text-muted-foreground ml-auto">{new Date(post.date).toLocaleDateString('en-US', { day: 'numeric', month: 'long', year: 'numeric' })}</span>
      </div>
      <post.icon className="h-12 w-12 text-primary mb-4" />
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
  const { slug: routeSlug } = useParams<{ slug: string }>();
  const slug = routeSlug || '';
  const detailPost = slug && slug !== '' ? BLOG_POSTS.find(p => p.slug === slug) : null;

  if (detailPost) {
    return (
      <>
        <SEOHead
          title={`${detailPost.title} — TekSure Blog`}
          description={detailPost.excerpt}
          path={`/blog/${detailPost.slug}`}
          type="article"
          jsonLd={{
            '@context': 'https://schema.org',
            '@type': 'Article',
            headline: detailPost.title,
            description: detailPost.excerpt,
            datePublished: detailPost.date,
            dateModified: detailPost.date,
            author: { '@type': 'Organization', name: 'TekSure', url: 'https://teksure.com' },
            publisher: {
              '@type': 'Organization',
              name: 'TekSure',
              logo: { '@type': 'ImageObject', url: 'https://teksure.com/og-image.png' },
            },
            mainEntityOfPage: { '@type': 'WebPage', '@id': `https://teksure.com/blog/${detailPost.slug}` },
            articleSection: detailPost.category,
            keywords: detailPost.category,
          }}
        />
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
        path="/blog"
      />
      <Navbar />

      <main className="min-h-screen bg-background">
        <section className="border-b border-border py-16 px-4">
          <div className="container max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">TekSure Blog</h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Plain-English articles about technology, security, and making the most of your devices.
            </p>
          </div>
        </section>

        <div className="container max-w-4xl mx-auto px-4 py-16">
          {/* Category filter */}
          <div className="flex flex-wrap gap-2 mb-12">
            {CATEGORIES.map(cat => (
              <button
                key={cat}
                onClick={() => { setActiveCategory(cat); setVisibleCount(6); }}
                className={`px-4 py-2 rounded-xl text-sm font-medium border transition-all ${
                  activeCategory === cat
                    ? 'bg-primary text-primary-foreground border-primary'
                    : 'border-border bg-background hover:bg-muted'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Grid */}
          <div className="grid gap-6 md:grid-cols-2 mb-12">
            {visible.map(post => (
              <PostCard key={post.slug} post={post} />
            ))}
          </div>

          {visibleCount < filtered.length && (
            <div className="text-center mb-12">
              <Button variant="outline" onClick={() => setVisibleCount(v => v + 6)} className="gap-2 rounded-xl">
                <ChevronDown className="h-4 w-4" /> Load more posts
              </Button>
            </div>
          )}

          {filtered.length === 0 && (
            <p className="text-center text-muted-foreground py-12">No posts in this category yet.</p>
          )}

          {/* Newsletter */}
          <NewsletterSignup className="mt-16" />
        </div>
      </main>

      <Footer />
    </>
  );
}

import { useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Users,
  Facebook,
  Instagram,
  Music2,
  Twitter,
  Youtube,
  Linkedin,
  Home as HomeIcon,
  Shield,
  ShieldAlert,
  ShieldCheck,
  Eye,
  EyeOff,
  Lock,
  KeyRound,
  MessageSquare,
  UserCheck,
  UserX,
  Flag,
  AlertTriangle,
  CheckCircle2,
  XCircle,
  ChevronLeft,
  RotateCcw,
  ExternalLink,
  Printer,
  Lightbulb,
  Heart,
  HelpCircle,
  BookOpen,
  Baby,
  Clock,
  Megaphone,
  ShieldX,
  type LucideIcon,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Checkbox } from '@/components/ui/checkbox';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { BookmarkButton } from '@/components/BookmarkButton';

/* ──────────────────────────────────────────────────────────────
 * Social Media — Safe & Sane
 * ------------------------------------------------------------
 * A senior-friendly platform-by-platform privacy + scam defense
 * walkthrough for Facebook, Instagram, TikTok, X (Twitter),
 * YouTube, LinkedIn, and a bonus note on NextDoor. Plain
 * language, big tap targets, printable one-pager.
 * ────────────────────────────────────────────────────────────── */

type PlatformId =
  | 'facebook'
  | 'instagram'
  | 'tiktok'
  | 'x'
  | 'youtube'
  | 'linkedin'
  | 'nextdoor';

interface PrivacyItem {
  label: string;
  detail: string;
}

interface ScamPattern {
  name: string;
  description: string;
}

interface ReportStep {
  label: string;
}

interface Platform {
  id: PlatformId;
  name: string;
  blurb: string;
  icon: LucideIcon;
  color: string;       // text color class
  bg: string;          // background tint class
  border: string;      // border class for selected/highlight
  note?: string;
  privacy: PrivacyItem[];
  scams: ScamPattern[];
  reportSteps: ReportStep[];
  hackedSteps: ReportStep[];
  hackedUrl: { label: string; url: string };
  healthyUse: string[];
}

/* ── Platform data ───────────────────────────────────────────── */

const PLATFORMS: Platform[] = [
  {
    id: 'facebook',
    name: 'Facebook',
    blurb: 'The most-used social platform for seniors — and the most-targeted by scammers.',
    icon: Facebook,
    color: 'text-blue-600 dark:text-blue-400',
    bg: 'bg-blue-50 dark:bg-blue-950/30',
    border: 'border-blue-300 dark:border-blue-800',
    privacy: [
      {
        label: 'Who can see your profile and posts',
        detail:
          'Settings & privacy → Settings → Audience and visibility → Profile and tagging. Set "Who can see your future posts" to "Friends" — not "Public".',
      },
      {
        label: 'Who can tag you in photos',
        detail:
          'Settings → Profile and tagging → "Review tags people add to your posts before the tags appear on Facebook" → On.',
      },
      {
        label: 'Who can message you',
        detail:
          'Privacy Checkup → Who can find you on Facebook → Set "Who can send you friend requests" to "Friends of friends" to cut down on stranger DMs.',
      },
      {
        label: 'Hide your friend list',
        detail:
          'Profile → Friends → three-dot menu → Edit privacy → Friend list → "Only me". Scammers copy friend lists to run hacked-friend scams.',
      },
      {
        label: 'Turn off facial recognition',
        detail:
          'Settings → Face recognition → "Do you want Facebook to be able to recognize you in photos and videos?" → No.',
      },
      {
        label: 'Turn off location tagging',
        detail:
          'On your phone: Settings → Apps → Facebook → Location → Never (or While Using, never Always).',
      },
      {
        label: 'Review login locations',
        detail:
          'Settings → Security and login → Where you\'re logged in. Remove anything you don\'t recognize — then change your password.',
      },
      {
        label: 'Enable two-factor authentication',
        detail:
          'Settings → Security and login → Two-factor authentication → Use an authenticator app (like Google Authenticator) rather than text messages when possible.',
      },
    ],
    scams: [
      {
        name: '"You won a contest!" posts',
        description:
          'A friend tags you in a giveaway from a real-sounding company. Clicking leads to a fake form that harvests your name, birthday, and phone number.',
      },
      {
        name: 'Romance scams',
        description:
          'A handsome widower in the military or an oil rig worker sends a friend request. Weeks of sweet messages, then a sudden emergency needing money or gift cards.',
      },
      {
        name: 'Fake charity pages',
        description:
          'After a disaster, fake fundraisers pop up within hours. Real charities are listed on Charity Navigator — donate there directly, not through a Facebook ad.',
      },
      {
        name: 'Fake Medicare / Social Security pages',
        description:
          'A page that looks official tells you to click to "update your benefits." Medicare and SSA never ask for information via Facebook.',
      },
      {
        name: 'Hacked-friend money requests',
        description:
          '"Hey, are you awake? I need a favor." A friend you know is actually a hacker using their account. Call your friend — don\'t reply through Messenger.',
      },
      {
        name: 'Marketplace deposit scams',
        description:
          'A seller wants a Zelle deposit before you can see the item. Never pay before seeing an item in person, and never use Zelle with strangers.',
      },
    ],
    reportSteps: [
      { label: 'Go to the post, profile, message, or ad you want to report.' },
      { label: 'Tap the three-dot menu (···) in the top-right corner.' },
      { label: 'Choose "Find support or report" (or "Report" on some views).' },
      { label: 'Pick the closest category — scam, impersonation, harassment, false info.' },
      { label: 'To block: go to the profile → three-dot menu → Block. They won\'t be notified.' },
    ],
    hackedSteps: [
      { label: 'Go to facebook.com/hacked from a computer you trust.' },
      { label: 'Choose "My account is compromised" and enter your email or phone.' },
      { label: 'Facebook will walk you through identity checks — have your ID ready.' },
      { label: 'Change your password AND the password of your recovery email.' },
      { label: 'Turn on two-factor authentication once you\'re back in.' },
      { label: 'Check Settings → Security and login → "Where you\'re logged in" and remove unknown devices.' },
    ],
    hackedUrl: { label: 'facebook.com/hacked', url: 'https://www.facebook.com/hacked' },
    healthyUse: [
      'Mute keywords you don\'t want to see (politics, a TV show finale, medical topics).',
      'Snooze a friend for 30 days instead of unfriending — great for election seasons.',
      'Unfollow without unfriending to keep the relationship but remove the noise.',
      'Use "See First" for a handful of people you actually want updates from.',
    ],
  },

  {
    id: 'instagram',
    name: 'Instagram',
    blurb: 'Photos, videos, and DMs. Great for following family — and full of "brand ambassador" scams.',
    icon: Instagram,
    color: 'text-pink-600 dark:text-pink-400',
    bg: 'bg-pink-50 dark:bg-pink-950/30',
    border: 'border-pink-300 dark:border-pink-800',
    privacy: [
      {
        label: 'Make your account private',
        detail:
          'Profile → three-line menu → Settings and privacy → Account privacy → Private account. Only approved followers see your posts.',
      },
      {
        label: 'Who can tag or mention you',
        detail:
          'Settings → How others can interact with you → Tags → "People you follow". Mentions → "People you follow".',
      },
      {
        label: 'Who can message you',
        detail:
          'Settings → Messages and story replies → Message controls → Set "Others on Instagram" to "Don\'t receive requests".',
      },
      {
        label: 'Hide your follower and following lists',
        detail:
          'A private account automatically hides these from non-followers. For extra privacy, vet follower requests carefully.',
      },
      {
        label: 'Turn off location in stories and posts',
        detail:
          'On your phone: Settings → Apps → Instagram → Location → Never. Don\'t add location stickers to Stories if you post in real time.',
      },
      {
        label: 'Review login activity',
        detail:
          'Settings → Accounts Center → Password and security → Where you\'re logged in. Log out of anything unfamiliar.',
      },
      {
        label: 'Enable two-factor authentication',
        detail:
          'Settings → Accounts Center → Password and security → Two-factor authentication → Authenticator app preferred.',
      },
      {
        label: 'Turn off "Suggest similar accounts" on your profile',
        detail:
          'Settings → Privacy → Suggest similar accounts → Off. Stops Instagram from suggesting your account to strangers.',
      },
    ],
    scams: [
      {
        name: '"Brand ambassador" DMs',
        description:
          'A clothing or jewelry brand messages you to promote their product. They ship a cheap item and charge your card repeatedly — or never ship anything.',
      },
      {
        name: 'Fake giveaway DMs',
        description:
          'A celebrity or brand account DMs you saying you won. Real giveaways don\'t DM winners out of the blue and never ask for payment to "release" a prize.',
      },
      {
        name: '"Your account will be deleted" emails',
        description:
          'A fake Instagram email with a scary subject line about copyright or community guidelines. The link leads to a fake login that steals your password.',
      },
      {
        name: 'Fake verification scams',
        description:
          'Someone offers to get you a blue checkmark. Only Meta can verify accounts, and it requires real identification — not a third party.',
      },
      {
        name: 'Crypto and investment pitches',
        description:
          'A beautiful profile with luxury cars DMs about "teaching you passive income". It\'s always a scam — block and report.',
      },
    ],
    reportSteps: [
      { label: 'Open the post, profile, or DM.' },
      { label: 'Tap the three-dot menu (···).' },
      { label: 'Choose "Report" and pick the reason — Scam, Spam, Impersonation.' },
      { label: 'To block: profile → three-dot menu → Block. You can also block their future accounts.' },
      { label: 'To restrict (softer than block): profile → three-dot menu → Restrict. They won\'t know.' },
    ],
    hackedSteps: [
      { label: 'Open the Instagram login screen.' },
      { label: 'Tap "Get help logging in" or "Forgot password".' },
      { label: 'Choose "I can\'t log in" → Instagram sends a code or a support link.' },
      { label: 'If the hacker changed your email, pick "My login info isn\'t working" → send a video selfie for identity.' },
      { label: 'Once back in: change password, turn on two-factor auth, remove suspicious devices.' },
    ],
    hackedUrl: {
      label: 'instagram.com/hacked',
      url: 'https://help.instagram.com/149494825257596',
    },
    healthyUse: [
      'Use "Close Friends" to share Stories only with a small trusted circle.',
      'Mute accounts that stress you out without unfollowing them.',
      'Turn off Reels in your Home feed (Settings → Content preferences → Suggested content).',
      'Set a daily time limit: Settings → Your activity → Time spent → Daily time limit.',
    ],
  },

  {
    id: 'tiktok',
    name: 'TikTok',
    blurb: 'Short videos — popular with grandkids, increasingly used by seniors. Feed is powerful and scammy.',
    icon: Music2,
    color: 'text-rose-600 dark:text-rose-400',
    bg: 'bg-rose-50 dark:bg-rose-950/30',
    border: 'border-rose-300 dark:border-rose-800',
    privacy: [
      {
        label: 'Make your account private',
        detail: 'Profile → three-line menu → Settings and privacy → Privacy → Private account.',
      },
      {
        label: 'Turn off "Suggest your account to others"',
        detail:
          'Settings → Privacy → Suggest your account to others → Turn off all four options (contacts, Facebook friends, profiles you\'ve interacted with, profiles with mutual connections).',
      },
      {
        label: 'Who can message you',
        detail:
          'Settings → Privacy → Direct messages → "No one" or "Friends" (not "Everyone").',
      },
      {
        label: 'Who can Duet or Stitch your videos',
        detail:
          'Settings → Privacy → Duet and Stitch → "Friends" or "Only me". Prevents strangers from reusing your clips.',
      },
      {
        label: 'Turn off "Ads based on data from other apps"',
        detail:
          'Settings → Ads → Ads based on data from other apps and websites → Off.',
      },
      {
        label: 'Turn off location',
        detail:
          'On your phone: Settings → Apps → TikTok → Location → Never.',
      },
      {
        label: 'Review login devices',
        detail:
          'Settings → Account → Security → Manage devices. Log out of anything you don\'t recognize.',
      },
      {
        label: 'Enable two-factor authentication',
        detail:
          'Settings → Security → 2-step verification → Choose Email + SMS, or Email + Authenticator app.',
      },
    ],
    scams: [
      {
        name: 'Investment / crypto scams',
        description:
          'A creator with millions of followers pitches you on a "can\'t-lose" trading strategy. They\'re paid to funnel you to a sketchy exchange that steals your deposit.',
      },
      {
        name: 'Fake celebrity DMs',
        description:
          'A "verified-looking" account of a celebrity DMs asking for help or to chat privately. Real celebrities don\'t DM random followers asking for favors.',
      },
      {
        name: '"Live" gift and donation scams',
        description:
          'A livestream begs for "gifts" (which cost real money) to help a sick pet or a homeless child. Often fake — check their channel history.',
      },
      {
        name: 'Counterfeit storefronts',
        description:
          'A TikTok Shop seller lists brand-name items at 80% off. Products arrive counterfeit, broken, or never at all.',
      },
      {
        name: 'Health misinformation',
        description:
          'Videos claim a common food cures cancer or a supplement replaces medication. Check any health claim with your doctor — never rely on TikTok.',
      },
    ],
    reportSteps: [
      { label: 'Open the video, profile, or message you want to report.' },
      { label: 'Tap the Share arrow → "Report" (or long-press a message).' },
      { label: 'Choose the reason — Scam, Harassment, Misinformation.' },
      { label: 'To block: profile → Share arrow → Block. Removes them from your feed.' },
      { label: 'Tap "Not interested" on unwanted videos — resets your recommendations over time.' },
    ],
    hackedSteps: [
      { label: 'Open the TikTok app → Log in screen.' },
      { label: 'Tap "Need help?" or "Forgot password".' },
      { label: 'Follow the reset link sent to your email or phone.' },
      { label: 'If your email was changed, tap Profile → Settings → Report a problem → "Hacked account".' },
      { label: 'Change password, remove suspicious devices, and turn on 2-step verification.' },
    ],
    hackedUrl: {
      label: 'TikTok help — account access',
      url: 'https://support.tiktok.com/en/log-in-troubleshoot/log-in/my-account-has-been-hacked',
    },
    healthyUse: [
      'Hold-press any video and pick "Not interested" to reshape your For You feed.',
      'Clear your watch history: Settings → Activity center → Watch history.',
      'Screen time limits: Settings → Screen time → Daily screen time.',
      'Use Restricted Mode if you want lighter content: Settings → Content preferences → Restricted mode.',
    ],
  },

  {
    id: 'x',
    name: 'X (Twitter)',
    blurb: 'Fast-moving news and commentary. Verification no longer means what it used to.',
    icon: Twitter,
    color: 'text-slate-700 dark:text-slate-300',
    bg: 'bg-slate-50 dark:bg-slate-900/50',
    border: 'border-slate-300 dark:border-slate-700',
    privacy: [
      {
        label: 'Make your account protected (private)',
        detail:
          'Settings and privacy → Privacy and safety → Audience and tagging → "Protect your posts" → On.',
      },
      {
        label: 'Who can tag you',
        detail:
          'Privacy and safety → Audience and tagging → Photo tagging → "Only people you follow".',
      },
      {
        label: 'Who can send you DMs',
        detail:
          'Privacy and safety → Direct Messages → "Only people you follow" can message you.',
      },
      {
        label: 'Turn off "Discoverability"',
        detail:
          'Privacy and safety → Discoverability and contacts → Turn off both "Let people find you by email" and "by phone number".',
      },
      {
        label: 'Turn off location on posts',
        detail:
          'Privacy and safety → Your posts → "Add location information to your posts" → Off.',
      },
      {
        label: 'Review login sessions',
        detail:
          'Settings → Security and account access → Apps and sessions → Sessions. Sign out of anything you don\'t recognize.',
      },
      {
        label: 'Enable two-factor authentication',
        detail:
          'Security and account access → Security → Two-factor authentication → Use an authenticator app (free) rather than SMS.',
      },
    ],
    scams: [
      {
        name: 'Crypto "give-aways"',
        description:
          'An account claiming to be Elon Musk, MicroStrategy, or a crypto exchange promises to double any coins you send. They\'re all stolen — never send crypto to "get more back".',
      },
      {
        name: 'Fake blue check impersonators',
        description:
          'Anyone can buy a blue check now. A verified-looking "Amazon Help" account DMs you about a refund — it\'s a scam. Real support is at help.x.com pages, not DMs.',
      },
      {
        name: 'Fake customer service accounts',
        description:
          'You complain about Delta / Bank of America / PayPal on X. Within minutes a lookalike account DMs you for your account number. Always message the brand\'s official handle.',
      },
      {
        name: 'Romance and "investment mentor" DMs',
        description:
          'Same pattern as Facebook — friendly stranger, sweet talk, eventually a can\'t-lose investment. Block and report.',
      },
      {
        name: 'Link-shortener phishing',
        description:
          'A DM or reply sends you to a t.co or bit.ly link that loads a fake X login page. Real sign-in only at x.com.',
      },
    ],
    reportSteps: [
      { label: 'Tap the three-dot menu (···) on the post or profile.' },
      { label: 'Choose "Report".' },
      { label: 'Pick the reason — Scam, Impersonation, Spam, or Harassment.' },
      { label: 'To block: profile → three-dot menu → Block. They can\'t see your posts or message you.' },
      { label: 'To mute (softer): profile → three-dot menu → Mute. They won\'t know.' },
    ],
    hackedSteps: [
      { label: 'Go to x.com/i/account_access from a device you trust.' },
      { label: 'Enter your username, email, or phone number.' },
      { label: 'Request a password reset — X sends a link.' },
      { label: 'If your email was changed, tap "I don\'t know my password" then "Can\'t reset password?" to reach human support.' },
      { label: 'Once back in: change password, turn on 2FA, revoke all third-party app access in Security settings.' },
    ],
    hackedUrl: { label: 'x.com/i/account_access', url: 'https://x.com/i/account_access' },
    healthyUse: [
      'Use Lists to curate high-signal accounts without following them.',
      'Mute keywords you don\'t want to see (Settings → Privacy → Mute and block → Muted words).',
      'Turn off "Show me posts from people you don\'t follow" in Home timeline settings.',
      'Set the timeline to "Following" instead of "For you" for a calmer feed.',
    ],
  },

  {
    id: 'youtube',
    name: 'YouTube',
    blurb: 'Videos on everything — with real risks hiding in sidebar ads, fake streams, and comments.',
    icon: Youtube,
    color: 'text-red-600 dark:text-red-400',
    bg: 'bg-red-50 dark:bg-red-950/30',
    border: 'border-red-300 dark:border-red-800',
    privacy: [
      {
        label: 'Keep your playlists and subscriptions private',
        detail:
          'YouTube → You → Settings → Privacy → Keep all my saved playlists private, Keep all my subscriptions private.',
      },
      {
        label: 'Turn off personalized ads',
        detail:
          'myadcenter.google.com → Personalized ads → Off. Reduces the creepy ad targeting across YouTube.',
      },
      {
        label: 'Review comments privacy',
        detail:
          'If you post videos: YouTube Studio → Settings → Community → Default comment settings → "Hold all comments for review".',
      },
      {
        label: 'Pause Watch and Search history',
        detail:
          'youtube.com/history → Pause watch history and Pause search history. You still see videos — YouTube stops tracking them.',
      },
      {
        label: 'Review Google account login devices',
        detail:
          'myaccount.google.com → Security → Your devices. Remove anything you don\'t recognize.',
      },
      {
        label: 'Enable two-factor authentication on your Google account',
        detail:
          'myaccount.google.com → Security → 2-Step Verification. This protects YouTube, Gmail, and everything Google in one step.',
      },
      {
        label: 'Turn off Autoplay if it pulls you into rabbit holes',
        detail:
          'Player → Autoplay toggle at the top. Or Settings → Playback → Autoplay off.',
      },
    ],
    scams: [
      {
        name: 'Free-gift popup overlays',
        description:
          'Videos that overlay a fake "You\'ve won!" or "Your PC is infected" popup. Close the tab — don\'t click or call the number shown.',
      },
      {
        name: '"Only 10 spots left" investment channels',
        description:
          'Slick trading or real estate channels push paid courses, mentorship, or Discord groups. The "testimonials" are actors.',
      },
      {
        name: 'Fake TV show streaming links',
        description:
          'A sidebar ad or short claims to stream the latest season of a show. It\'s a phishing or malware site — watch on the real network\'s app or Paramount+, Hulu, Netflix, etc.',
      },
      {
        name: 'Fake tech support videos',
        description:
          'Channels that teach you to "speed up your PC" but install remote-access software. Microsoft, Apple, and Google don\'t ask you to install AnyDesk or TeamViewer.',
      },
      {
        name: 'Comment spam "I won $5,000 from..."',
        description:
          'Bots post the same testimonial under every video. Report and ignore — these are all crypto, romance, or loan scams.',
      },
    ],
    reportSteps: [
      { label: 'On a video: tap the three-dot menu (···) below the player → Report.' },
      { label: 'On a comment: tap the three-dot menu next to the comment → Report.' },
      { label: 'On a channel: open channel → three-dot menu → Report user.' },
      { label: 'To block a channel: three-dot menu → Block user. You won\'t see their videos or comments.' },
      { label: 'Tap "Not interested" or "Don\'t recommend channel" to clean up your homepage over time.' },
    ],
    hackedSteps: [
      { label: 'Go to accounts.google.com/signin/recovery from a device you trust.' },
      { label: 'Enter your Gmail / Google account email and follow the steps.' },
      { label: 'Google will ask identity questions — old passwords, recovery email, recovery phone.' },
      { label: 'If successful, change the password, review connected devices, and revoke third-party app access.' },
      { label: 'Enable 2-Step Verification at myaccount.google.com → Security.' },
    ],
    hackedUrl: {
      label: 'Google account recovery',
      url: 'https://accounts.google.com/signin/recovery',
    },
    healthyUse: [
      'Manage your home feed: tap "Not interested" on videos you don\'t want — YouTube adjusts quickly.',
      'Create topic-based playlists to keep your viewing on purpose, not drift.',
      'Turn on Take a Break and Bedtime reminders: YouTube → You → Settings → General.',
      'Subscribe to channels with a bell — the search and home algorithms are less reliable than your own list.',
    ],
  },

  {
    id: 'linkedin',
    name: 'LinkedIn',
    blurb: 'Professional networking — now flooded with AI-generated profiles and fake recruiters.',
    icon: Linkedin,
    color: 'text-sky-700 dark:text-sky-400',
    bg: 'bg-sky-50 dark:bg-sky-950/30',
    border: 'border-sky-300 dark:border-sky-800',
    privacy: [
      {
        label: 'Who can see your profile photo',
        detail:
          'Settings & Privacy → Visibility → "Profile photo visibility" → Your network or Connections only.',
      },
      {
        label: 'Who can see your connections',
        detail:
          'Settings → Visibility → "Who can see your connections" → Only you. Protects your network from recruiter/spam scraping.',
      },
      {
        label: 'Who can send you InMail / messages',
        detail:
          'Settings → Communications → Who can reach you → Messages → Turn off "Allow others to get in touch with you through email".',
      },
      {
        label: 'Hide your last name from non-connections',
        detail:
          'Settings → Visibility → "Profile visibility off LinkedIn" → Off. And "Name pronunciation" → First name only if you prefer.',
      },
      {
        label: 'Profile viewing in Private Mode',
        detail:
          'When researching jobs or people, set your viewing mode to Private: Settings → Visibility → Profile viewing options → Private mode.',
      },
      {
        label: 'Review login activity',
        detail:
          'Settings → Sign in & security → Where you\'re signed in. Sign out of anything you don\'t recognize.',
      },
      {
        label: 'Enable two-step verification',
        detail:
          'Settings → Sign in & security → Two-step verification → Authenticator app preferred over SMS.',
      },
    ],
    scams: [
      {
        name: 'Fake recruiters',
        description:
          'A recruiter with a brand-new profile and two connections pitches a remote job paying way above market. Real companies check out on LinkedIn — and they don\'t ask for SSN before an interview.',
      },
      {
        name: 'AI-generated profiles',
        description:
          'Headshot looks slightly off (fake earrings, odd background), job history is generic, only a few connections. Reverse-image search the photo before accepting.',
      },
      {
        name: '"Lead-gen" phishing',
        description:
          'A stranger offers to "send over their deck" or asks you to fill out a form. The link goes to a fake Microsoft login that steals your credentials.',
      },
      {
        name: 'Job-offer advance fee scams',
        description:
          'You "got the job" — but now you need to pay for equipment, training, or a background check up front. Real employers never charge you.',
      },
      {
        name: 'Romance scams on LinkedIn',
        description:
          'Yes, it happens here too. A handsome executive reaches out "to network" — and slowly pivots to personal messages and a crypto pitch.',
      },
    ],
    reportSteps: [
      { label: 'On a profile, post, or message: tap the three-dot menu (···).' },
      { label: 'Choose "Report" and pick the reason — Fake profile, Scam, Harassment, or Spam.' },
      { label: 'To block: profile → three-dot menu → Block. They lose access to your profile.' },
      { label: 'For a suspicious job post, click the flag icon under the job description.' },
    ],
    hackedSteps: [
      { label: 'Go to linkedin.com/help/linkedin/answer/56363 for "Account hacked".' },
      { label: 'Sign in and change your password at once.' },
      { label: 'If you can\'t sign in, use "Forgot password" and verify via email.' },
      { label: 'Review "Where you\'re signed in" and sign everything else out.' },
      { label: 'Review your Profile for any edits (photo, headline, experience) and restore.' },
      { label: 'Turn on two-step verification.' },
    ],
    hackedUrl: {
      label: 'LinkedIn Safety Center',
      url: 'https://www.linkedin.com/help/linkedin/answer/56363',
    },
    healthyUse: [
      'Turn off "In the news" and birthday notifications in Settings → Communications → Notifications.',
      'Mute connections whose posts aren\'t a fit rather than unfollowing relationships.',
      'Use your weekly time: check LinkedIn 1–2 times a week, not daily.',
      'Pin your top 3 skills instead of listing 50 — cuts the clutter for real recruiters.',
    ],
  },

  {
    id: 'nextdoor',
    name: 'NextDoor',
    blurb: 'Neighborhood app. Handy for local info — but flagged by consumer groups as prone to scams.',
    icon: HomeIcon,
    color: 'text-emerald-700 dark:text-emerald-400',
    bg: 'bg-emerald-50 dark:bg-emerald-950/30',
    border: 'border-emerald-300 dark:border-emerald-800',
    note:
      'NextDoor has a particular mix of problems: real people using real names, but also scam handymen, fake rental listings, "missing pet" phishing, and community gossip. Be skeptical of any DM that starts with a deal.',
    privacy: [
      {
        label: 'Decide how much of your address to show',
        detail:
          'Settings → Privacy → "Your address on your profile" → Choose "Street name only" or "Don\'t show". No one online needs your full address.',
      },
      {
        label: 'Who can see your posts',
        detail:
          'When posting, set the audience to "Your neighborhood" or a smaller list — not "Nearby neighborhoods + regional".',
      },
      {
        label: 'Who can message you',
        detail:
          'Settings → Privacy → Messaging → Allow only neighbors (not "Anyone"), or turn DMs off completely.',
      },
      {
        label: 'Hide your phone number from your profile',
        detail:
          'Settings → Profile → remove your phone, or set visibility to "Only me".',
      },
      {
        label: 'Turn off location in posts',
        detail:
          'Don\'t include your exact address in posts — including "lost pet" posts. Scammers use those to show up pretending to have found the pet.',
      },
      {
        label: 'Enable two-factor authentication',
        detail:
          'Settings → Account → Two-factor authentication → Turn on (SMS or authenticator app).',
      },
    ],
    scams: [
      {
        name: 'Fake handyman / contractor offers',
        description:
          'A "just out of work, can do it cheap" stranger offers to trim your trees or pressure-wash. They demand cash up front, then disappear — or, worse, case your house.',
      },
      {
        name: 'Fake rental listings',
        description:
          'Someone lists a house for rent at a great price — but they\'re out of state and ask for a deposit before a showing. Always see a rental in person, with a real agent.',
      },
      {
        name: '"Found your pet" scams',
        description:
          'You post about a lost pet. A stranger DMs claiming to have found them and asks for a reward sent via Zelle before they\'ll return it. Never pay before a photo and in-person hand-off.',
      },
      {
        name: 'Fake charity / GoFundMe chains',
        description:
          'A neighborhood tragedy becomes a fundraising post. Always go to the official GoFundMe page or give to a real organization — not through a middleman.',
      },
      {
        name: 'Community-member impersonation',
        description:
          'A new account uses your real neighbor\'s name to solicit donations, sell something, or spread rumors. Call your actual neighbor to verify.',
      },
    ],
    reportSteps: [
      { label: 'On a post or message: tap the three-dot menu → "Report".' },
      { label: 'Pick "Scam / fraud" or "Impersonation" from the list.' },
      { label: 'Block a member: profile → three-dot menu → Block. They can\'t see or contact you.' },
      { label: 'For local crime / hazards, also file a non-emergency report with your police department.' },
    ],
    hackedSteps: [
      { label: 'On a device you trust, go to nextdoor.com and tap "Forgot password".' },
      { label: 'Reset via email and change your recovery email if it was changed.' },
      { label: 'Check Settings → Account → Active sessions; sign out of everything except your current device.' },
      { label: 'Turn on two-factor authentication.' },
    ],
    hackedUrl: {
      label: 'NextDoor help center',
      url: 'https://help.nextdoor.com/s/?language=en_US',
    },
    healthyUse: [
      'Limit NextDoor to a weekly check-in — daily reads often raise anxiety more than they inform.',
      'Mute or hide posts from heavy users whose posts you don\'t want to see.',
      'Turn off "Nearby neighborhoods" so your feed stays local.',
      'Use the "For Sale & Free" section only for local, in-person, cash deals — never mail anything.',
    ],
  },
];

/* ── Scam DM scripts ─────────────────────────────────────────── */

interface ScamDm {
  opener: string;
  redFlag: string;
  response: string;
}

const SCAM_DMS: ScamDm[] = [
  {
    opener: '"I saw your profile and I was so impressed, I had to reach out..."',
    redFlag:
      'A stranger with no mutual friends opens with flattery. Classic romance-scam setup.',
    response:
      'Don\'t reply. Block and report. Real connections don\'t start with love-bombing a stranger.',
  },
  {
    opener: '"Congratulations! You\'ve been selected for a $9,500 grant through the Facebook Community Program."',
    redFlag:
      'Facebook does not give out grants. "Community Program" is a decade-old scam script.',
    response:
      'Report the message as a scam, then block the sender. Tell the friend who shared it if you got it from them.',
  },
  {
    opener: '"Hey is this you in this video? lol [link]"',
    redFlag:
      'Leads to a fake Facebook / Instagram login that steals your password. Often comes from a hacked friend.',
    response:
      'Do NOT click. Call the friend on their actual phone number. If your account gets hacked next, follow the "I got hacked" steps for that platform.',
  },
  {
    opener: '"I\'m stuck overseas and need $500 for a ticket home — I\'ll pay you back Friday."',
    redFlag:
      'Hacked-friend scam. Real friends don\'t ask for gift cards or wire transfers by DM.',
    response:
      'Write back: "I\'m worried — call me on my regular number." Any real friend will understand. A scammer will vanish.',
  },
  {
    opener: '"I\'m a brand ambassador recruiter from [fashion brand] — we\'d love to send you free product!"',
    redFlag:
      'They ship cheap merchandise and charge your card repeatedly, or never ship anything. Real brand deals are arranged over real email, not DM.',
    response:
      'Ignore and block. If you already gave card info, call your card issuer to dispute and freeze the card.',
  },
  {
    opener: '"This is [your bank name] — we noticed a suspicious charge. Please click this link to verify."',
    redFlag:
      'Banks don\'t DM you on social media. Always go to your bank\'s app or official website directly.',
    response:
      'Don\'t click. Call the number on the back of your card. Report and block the DM.',
  },
  {
    opener: '"I can teach you how to make $3,000 a week from your phone — just DM me YES."',
    redFlag:
      'Same script across TikTok, Instagram, and X. Leads to crypto exchanges, Forex scams, or paid "coaching".',
    response:
      'Ignore, report, block. Anyone who really had this trick would not be recruiting strangers on Instagram.',
  },
];

/* ── "What to share vs not share" data ───────────────────────── */

const SHARE_SAFE: string[] = [
  'Photos of you that don\'t show your address or daily routine',
  'Generic positive posts — a cookbook you love, a hobby project finished',
  'Travel photos AFTER you\'ve come home and are back to normal',
  'Grandkid photos with first names only (and only after parents agree)',
  'General opinions that don\'t reveal your location or health',
];

const SHARE_UNSAFE: string[] = [
  'Your current location in real time ("at the dentist now!")',
  'Medical conditions, medications, or doctor names',
  'Full date of birth (month + day is plenty for birthday wishes)',
  'Your mother\'s maiden name (common security question!)',
  'Travel dates before or during the trip ("leaving for Florida tomorrow!")',
  'Your exact financial situation, bonus, or savings amount',
  'Photos that show your full address, license plate, or house number',
  'Your high school, first pet, or first street name (all common security questions)',
];

/* ── Account recovery prep checklist ─────────────────────────── */

const RECOVERY_PREP: string[] = [
  'Write down your password on paper, kept somewhere private (a safe, or a lockbox).',
  'Add a trusted contact where supported (Facebook has this under Settings → Security).',
  'Keep your phone number up to date in each account — it\'s often needed to prove identity.',
  'Download and print your 2FA backup codes. Store them with your password.',
  'Use a recovery email that is NOT linked to the social account — e.g. a separate Gmail or iCloud.',
  'Keep a photo of your driver\'s license or passport ready (platforms may ask for ID to verify you).',
  'Save the help/recovery URL for each platform in your bookmarks BEFORE you need it.',
];

/* ── Impersonation defense ───────────────────────────────────── */

const IMPERSONATION_CASES = [
  {
    title: 'Someone made a fake "you"',
    steps: [
      'Go to the fake profile — don\'t engage, don\'t message.',
      'Tap the three-dot menu → Report → "Impersonation" (every major platform has this).',
      'Take screenshots of the fake profile (URL visible) for your records.',
      'Warn your real friends list so they don\'t accept requests from the fake account.',
      'If the impersonator sent messages pretending to be you, file an FTC report at reportfraud.ftc.gov.',
    ],
  },
  {
    title: 'Someone is spreading your images without permission',
    steps: [
      'Document: screenshots with URLs, dates, and usernames.',
      'File a DMCA takedown on each platform (look for "Copyright" in help).',
      'If the images are intimate or private, use StopNCII.org — a free, survivor-run takedown service.',
      'Consider having screenshots notarized (local notary, often free for seniors at banks or libraries).',
      'For severe cases (threats, blackmail), call local police AND file at ic3.gov.',
    ],
  },
  {
    title: 'Revenge content — someone is posting to harm you',
    steps: [
      'Stay safe first — if you feel in danger, call 911 or the National Domestic Violence Hotline: 1-800-799-7233.',
      'Save evidence before reporting (screenshots of posts, DMs, usernames, URLs, timestamps).',
      'Use StopNCII.org for non-consensual intimate imagery.',
      'Many states have revenge-porn laws — a local attorney or legal aid can help you enforce them.',
      'File with the FBI at ic3.gov and with your local police non-emergency line.',
    ],
  },
  {
    title: 'Celebrity impersonators contacting family',
    steps: [
      'A "celebrity" DMing a relative is always a scam — no exceptions.',
      'Screenshot the DM and the profile URL.',
      'Report the fake account on the platform (impersonation).',
      'Tell the family member clearly: do NOT send money, gift cards, or "fees" of any kind.',
      'If money has been sent, call the bank or card issuer at once — every minute matters.',
    ],
  },
];

/* ── Grandkid safety content ──────────────────────────────────── */

const GRANDKID_TIPS = [
  {
    title: 'TikTok Family Pairing',
    body:
      'A parent can link their TikTok to a teen\'s account to set screen time, restrict content, and limit DMs. Settings → Family Pairing. Offer to help your adult kids set this up for your grandkids.',
  },
  {
    title: 'Instagram Teen Accounts',
    body:
      'Instagram automatically makes accounts for under-18s private, limits DMs to people they follow, and sets sleep mode. Parents can add further supervision through Meta Family Center.',
  },
  {
    title: 'YouTube Kids vs. regular YouTube',
    body:
      'For kids under 13, YouTube Kids is a curated, ad-lighter app. Once they move to regular YouTube, supervised accounts let parents restrict mature content.',
  },
  {
    title: 'Have the "what are you on?" conversation',
    body:
      'Ask your grandkids to show you their favorite app. Let them explain it. You learn; they feel respected. You\'re more likely to notice red flags than a parent who\'s overwhelmed.',
  },
  {
    title: 'Be careful about "parental control" apps',
    body:
      'Some are great (Apple Screen Time, Google Family Link, Qustodio). Others are data-hungry or broken. Check reviews from Common Sense Media or PCMag before installing anything.',
  },
];

/* ── FAQ ──────────────────────────────────────────────────────── */

const FAQ_ITEMS = [
  {
    q: 'Can I post photos of my grandkids safely?',
    a: 'Yes, if you follow a few rules: ask the parents first every time, avoid full names, never tag their school or location, and don\'t post swimsuit or bath photos. Consider a private Facebook group or a shared photo album (like Google Photos or iCloud Shared Library) instead of public posts.',
  },
  {
    q: 'Should I use my real name?',
    a: 'Most platforms require real names in their terms of service. Using your real first name with only an initial for the last name (e.g., "Mary J.") is common and often allowed. For LinkedIn, you need your real name to be useful. For NextDoor, you must use your real name — but you can hide your address.',
  },
  {
    q: 'What if my friend\'s account is hacked?',
    a: 'Don\'t reply to suspicious DMs from them. Call your friend on their real phone number to let them know. Send them the platform\'s "I got hacked" URL (we have them in the per-platform cards above). Don\'t click any links the hacked account sends you, even if they look normal.',
  },
  {
    q: 'Are Facebook groups safe?',
    a: 'It depends on the group. Groups with active moderators, clear rules, and long histories are usually fine. Red flags: brand-new groups that pop up after a news event, groups pushing "exclusive" deals or investments, groups where admins DM you. If you\'re in a group that\'s mostly ads and drama, leave — your feed will thank you.',
  },
  {
    q: 'Is NextDoor safe?',
    a: 'NextDoor has useful local info (lost pets, power outages, road closures) mixed with anxiety-inducing posts and scams. Use it sparingly. Never use it to buy big-ticket items or hire workers without checking references. If a post makes you anxious about your neighborhood — check the facts before sharing.',
  },
  {
    q: 'Do I need a VPN for social media?',
    a: 'For most people, no. A VPN helps on public Wi-Fi (a coffee shop, airport) but doesn\'t protect you from scams, phishing, or bad privacy settings. The fixes in this guide matter a lot more than any VPN.',
  },
  {
    q: 'What\'s the single most important thing I can do?',
    a: 'Turn on two-factor authentication on every account — and use an authenticator app, not text messages, when possible. If your password ever leaks, 2FA alone stops almost every hack.',
  },
];

/* ── Related tools links ─────────────────────────────────────── */

const RELATED_TOOLS = [
  {
    label: 'Is This Real?',
    url: '/tools/is-this-real',
    blurb: 'Check suspicious messages, deals, or profiles',
  },
  {
    label: 'Scam Practice Simulator',
    url: '/tools/scam-simulator',
    blurb: 'Practice spotting scams in a safe sandbox',
  },
  {
    label: 'Email Spam Manager',
    url: '/tools/email-spam-manager',
    blurb: 'Clean up your inbox and stop future spam',
  },
  {
    label: 'Phishing Scanner',
    url: '/tools/phishing-scanner',
    blurb: 'Scan links and emails for phishing patterns',
  },
  {
    label: 'Password Strength Checker',
    url: '/tools/password-strength',
    blurb: 'See if your password would stand up to attacks',
  },
  {
    label: 'Refund & Return Helper',
    url: '/tools/refund-and-return-helper',
    blurb: 'Recover money from a scam or a bad purchase',
  },
];

/* ── Component ───────────────────────────────────────────────── */

export default function SocialMediaSafety() {
  const [selectedId, setSelectedId] = useState<PlatformId | null>(null);
  const [checked, setChecked] = useState<Record<string, boolean>>({});

  const selected = useMemo(
    () => PLATFORMS.find(p => p.id === selectedId) ?? null,
    [selectedId]
  );

  function handleSelect(id: PlatformId) {
    setSelectedId(id);
    setChecked({});
    setTimeout(() => {
      const el = document.getElementById('platform-detail');
      if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }, 50);
  }

  function handleReset() {
    setSelectedId(null);
    setChecked({});
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  function toggleCheck(key: string) {
    setChecked(prev => ({ ...prev, [key]: !prev[key] }));
  }

  function handlePrint() {
    window.print();
  }

  const checkedCount = selected
    ? selected.privacy.filter((_, i) => checked[`${selected.id}-${i}`]).length
    : 0;

  return (
    <>
      <SEOHead
        title="Social Media — Safe & Sane | TekSure"
        description="A senior-friendly walkthrough for staying safe on Facebook, Instagram, TikTok, X, YouTube, LinkedIn, and NextDoor. Privacy settings, scam patterns, blocking, reporting, recovery — all in plain English."
        path="/tools/social-media-safety"
      />
      <Navbar />
      <main
        id="main-content"
        className="container py-12 min-h-[80vh] max-w-4xl mx-auto"
      >
        {/* ── Hero ── */}
        <section className="relative text-center mb-10 rounded-3xl p-8 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 dark:from-blue-950/40 dark:via-indigo-950/30 dark:to-purple-950/40 border-2 border-indigo-200 dark:border-indigo-900">
          <div className="absolute right-4 top-4">
            <BookmarkButton
              type="tool"
              slug="social-media-safety"
              title="Social Media — Safe & Sane"
              url="/tools/social-media-safety"
            />
          </div>
          <div className="inline-flex items-center justify-center h-20 w-20 rounded-2xl bg-white text-indigo-700 dark:bg-indigo-900 dark:text-indigo-200 mb-5 shadow-sm">
            <Users className="h-12 w-12" aria-hidden="true" />
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold tracking-tight mb-3 text-indigo-950 dark:text-indigo-50">
            Social Media — Safe &amp; Sane
          </h1>
          <p className="text-lg sm:text-xl text-indigo-900/80 dark:text-indigo-100/80 max-w-2xl mx-auto">
            Enjoy the good stuff. Block the scams, spam, and drama.
          </p>
          <p className="text-base text-indigo-900/70 dark:text-indigo-100/70 max-w-2xl mx-auto mt-3">
            Pick a platform below and we&apos;ll walk you through privacy,
            scams, blocking, reporting, and what to do if your account gets hacked.
          </p>

          <div className="flex flex-wrap justify-center gap-3 mt-6">
            <Button
              size="lg"
              variant="outline"
              className="min-h-14 text-base gap-2 bg-white"
              onClick={handlePrint}
            >
              <Printer className="h-5 w-5" aria-hidden="true" />
              Print the safety one-pager
            </Button>
            <a href="#what-to-share" className="no-underline">
              <Button size="lg" variant="outline" className="min-h-14 text-base gap-2 bg-white">
                <Eye className="h-5 w-5" aria-hidden="true" />
                What to share vs. not share
              </Button>
            </a>
          </div>
        </section>

        {/* ── Platform picker ── */}
        {!selected && (
          <section className="mb-10">
            <h2 className="text-2xl sm:text-3xl font-bold mb-2 flex items-center gap-2">
              <Shield className="h-7 w-7 text-indigo-600 dark:text-indigo-400" aria-hidden="true" />
              Pick your platform
            </h2>
            <p className="text-base text-muted-foreground mb-5">
              Each one has its own privacy settings, scam patterns, and recovery paths.
            </p>
            <div className="grid gap-4 sm:grid-cols-2">
              {PLATFORMS.map(p => {
                const Icon = p.icon;
                return (
                  <button
                    key={p.id}
                    onClick={() => handleSelect(p.id)}
                    className={`group text-left w-full rounded-2xl border-2 ${p.border} ${p.bg} hover:shadow-md focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 transition-all p-5 min-h-[8rem]`}
                  >
                    <div className="flex items-start gap-4">
                      <div className={`shrink-0 inline-flex items-center justify-center h-14 w-14 rounded-xl bg-white dark:bg-black/20 ${p.color}`}>
                        <Icon className="h-8 w-8" aria-hidden="true" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <h3 className="text-xl font-bold mb-1 flex items-center gap-2">
                          {p.name}
                          {p.id === 'nextdoor' && (
                            <Badge variant="outline" className="text-xs bg-amber-100 text-amber-900 border-amber-400 dark:bg-amber-900/40 dark:text-amber-100">
                              Bonus — scam-prone
                            </Badge>
                          )}
                          {p.id === 'facebook' && (
                            <Badge variant="outline" className="text-xs bg-blue-100 text-blue-900 border-blue-400 dark:bg-blue-900/40 dark:text-blue-100">
                              Most seniors
                            </Badge>
                          )}
                        </h3>
                        <p className="text-sm text-muted-foreground leading-snug">
                          {p.blurb}
                        </p>
                      </div>
                    </div>
                  </button>
                );
              })}
            </div>

            {/* Age-gate note */}
            <Alert className="mt-6 border-2 border-sky-300 bg-sky-50 dark:bg-sky-950/30 dark:border-sky-800">
              <AlertTriangle className="h-5 w-5 text-sky-700 dark:text-sky-300" aria-hidden="true" />
              <AlertTitle className="text-sky-900 dark:text-sky-200 text-base">
                A quick note on age
              </AlertTitle>
              <AlertDescription className="text-sky-900/90 dark:text-sky-100/90 text-base">
                Facebook, Instagram, X, TikTok, and LinkedIn all require users to
                be 13+. Many seniors use them daily, but the risks look different
                than they do for a teenager — less peer pressure, more financial
                scams. The advice in this tool focuses on those adult risks.
              </AlertDescription>
            </Alert>
          </section>
        )}

        {/* ── Detail view ── */}
        {selected && (
          <section id="platform-detail" className="mb-10">
            <Button
              variant="ghost"
              size="lg"
              onClick={handleReset}
              className="mb-4 gap-2 text-base min-h-12"
            >
              <ChevronLeft className="h-5 w-5" aria-hidden="true" />
              Pick a different platform
            </Button>

            {/* Detail header */}
            <Card className={`mb-6 border-2 ${selected.border} ${selected.bg}`}>
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className={`shrink-0 inline-flex items-center justify-center h-16 w-16 rounded-xl bg-white dark:bg-black/20 ${selected.color}`}>
                    <selected.icon className="h-10 w-10" aria-hidden="true" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h2 className="text-3xl font-bold mb-2">{selected.name}</h2>
                    <p className="text-base leading-relaxed">{selected.blurb}</p>
                    {selected.note && (
                      <p className="text-sm mt-3 italic opacity-80">{selected.note}</p>
                    )}
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Tabs for the 4 per-platform sections */}
            <Tabs defaultValue="privacy" className="mb-6">
              <TabsList className="w-full grid grid-cols-2 sm:grid-cols-4 gap-1 h-auto p-1">
                <TabsTrigger value="privacy" className="text-base min-h-12">
                  Privacy
                </TabsTrigger>
                <TabsTrigger value="scams" className="text-base min-h-12">
                  Scams
                </TabsTrigger>
                <TabsTrigger value="report" className="text-base min-h-12">
                  Block &amp; Report
                </TabsTrigger>
                <TabsTrigger value="hacked" className="text-base min-h-12">
                  I Got Hacked
                </TabsTrigger>
              </TabsList>

              {/* Privacy checklist */}
              <TabsContent value="privacy" className="mt-4">
                <Card className="border-2">
                  <CardContent className="p-5 sm:p-6">
                    <div className="flex items-center justify-between gap-3 mb-4 flex-wrap">
                      <h3 className="text-2xl font-bold flex items-center gap-2">
                        <Lock className="h-6 w-6 text-indigo-600 dark:text-indigo-400" aria-hidden="true" />
                        Privacy checklist
                      </h3>
                      <span className="text-sm font-medium text-muted-foreground">
                        {checkedCount} of {selected.privacy.length} done
                      </span>
                    </div>
                    <p className="text-base text-muted-foreground mb-4">
                      Tick each one off as you finish. Menu names change a bit
                      over time — if you can&apos;t find a setting, open the
                      app&apos;s search and type the words in quotes.
                    </p>
                    <ul className="space-y-3">
                      {selected.privacy.map((item, i) => {
                        const key = `${selected.id}-${i}`;
                        const isChecked = !!checked[key];
                        return (
                          <li key={key}>
                            <label
                              htmlFor={key}
                              className={`flex items-start gap-3 p-4 rounded-xl border-2 cursor-pointer transition-colors min-h-[4rem] ${
                                isChecked
                                  ? 'bg-green-50 border-green-300 dark:bg-green-950/30 dark:border-green-800'
                                  : 'bg-background border-border hover:bg-muted/40'
                              }`}
                            >
                              <Checkbox
                                id={key}
                                checked={isChecked}
                                onCheckedChange={() => toggleCheck(key)}
                                className="mt-1 h-5 w-5"
                              />
                              <div className="flex-1">
                                <div
                                  className={`text-base font-semibold leading-snug ${
                                    isChecked ? 'text-green-900 dark:text-green-100' : ''
                                  }`}
                                >
                                  {item.label}
                                </div>
                                <div
                                  className={`text-sm leading-relaxed mt-1 ${
                                    isChecked
                                      ? 'text-green-900/90 dark:text-green-100/90'
                                      : 'text-muted-foreground'
                                  }`}
                                >
                                  {item.detail}
                                </div>
                              </div>
                            </label>
                          </li>
                        );
                      })}
                    </ul>

                    <Alert className="mt-5 border-2 border-emerald-300 bg-emerald-50 dark:bg-emerald-950/30 dark:border-emerald-800">
                      <KeyRound className="h-5 w-5 text-emerald-700 dark:text-emerald-300" aria-hidden="true" />
                      <AlertTitle className="text-emerald-900 dark:text-emerald-200 text-base">
                        Two-factor authentication is the single best move
                      </AlertTitle>
                      <AlertDescription className="text-emerald-900/90 dark:text-emerald-100/90 text-base">
                        Our{' '}
                        <Link to="/tools/password-strength" className="underline font-semibold">
                          Password Strength Checker
                        </Link>{' '}
                        can tell you if your password would stand up to an
                        attack — then add 2FA on top.
                      </AlertDescription>
                    </Alert>
                  </CardContent>
                </Card>
              </TabsContent>

              {/* Scams */}
              <TabsContent value="scams" className="mt-4">
                <Card className="border-2 border-red-300 bg-red-50/60 dark:bg-red-950/30 dark:border-red-800">
                  <CardContent className="p-5 sm:p-6">
                    <h3 className="text-2xl font-bold mb-4 flex items-center gap-2 text-red-900 dark:text-red-200">
                      <ShieldAlert className="h-6 w-6" aria-hidden="true" />
                      Common {selected.name} scam patterns
                    </h3>
                    <ul className="space-y-4">
                      {selected.scams.map((s, i) => (
                        <li key={i} className="rounded-xl bg-white dark:bg-red-950/40 p-4 border border-red-200 dark:border-red-900">
                          <div className="flex items-start gap-3">
                            <XCircle className="h-5 w-5 text-red-600 dark:text-red-400 shrink-0 mt-1" aria-hidden="true" />
                            <div>
                              <div className="text-base font-bold text-red-900 dark:text-red-100">
                                {s.name}
                              </div>
                              <p className="text-base leading-relaxed text-red-900/90 dark:text-red-100/90 mt-1">
                                {s.description}
                              </p>
                            </div>
                          </div>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </TabsContent>

              {/* Block & report */}
              <TabsContent value="report" className="mt-4">
                <Card className="border-2 border-orange-300 bg-orange-50/60 dark:bg-orange-950/30 dark:border-orange-800">
                  <CardContent className="p-5 sm:p-6">
                    <h3 className="text-2xl font-bold mb-4 flex items-center gap-2 text-orange-900 dark:text-orange-200">
                      <Flag className="h-6 w-6" aria-hidden="true" />
                      How to block or report on {selected.name}
                    </h3>
                    <ol className="space-y-3">
                      {selected.reportSteps.map((step, i) => (
                        <li key={i} className="flex items-start gap-3">
                          <span className="shrink-0 inline-flex items-center justify-center h-8 w-8 rounded-full bg-orange-600 text-white font-bold">
                            {i + 1}
                          </span>
                          <span className="text-base leading-relaxed text-orange-900 dark:text-orange-100 pt-1">
                            {step.label}
                          </span>
                        </li>
                      ))}
                    </ol>
                    <div className="mt-4 rounded-xl bg-white dark:bg-orange-950/40 p-4 border border-orange-200 dark:border-orange-900 text-sm text-orange-900 dark:text-orange-100">
                      <ImageIconNote />
                      Screenshots of the steps above are helpful. On iPhone: press Side + Volume Up. On Android: Power + Volume Down. On a Mac: Cmd-Shift-4. On Windows: Windows-Shift-S.
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              {/* Hacked */}
              <TabsContent value="hacked" className="mt-4">
                <Card className="border-2 border-rose-300 bg-rose-50/60 dark:bg-rose-950/30 dark:border-rose-800">
                  <CardContent className="p-5 sm:p-6">
                    <h3 className="text-2xl font-bold mb-4 flex items-center gap-2 text-rose-900 dark:text-rose-200">
                      <ShieldX className="h-6 w-6" aria-hidden="true" />
                      I got hacked on {selected.name} — now what?
                    </h3>
                    <ol className="space-y-3 mb-5">
                      {selected.hackedSteps.map((step, i) => (
                        <li key={i} className="flex items-start gap-3">
                          <span className="shrink-0 inline-flex items-center justify-center h-8 w-8 rounded-full bg-rose-600 text-white font-bold">
                            {i + 1}
                          </span>
                          <span className="text-base leading-relaxed text-rose-900 dark:text-rose-100 pt-1">
                            {step.label}
                          </span>
                        </li>
                      ))}
                    </ol>
                    <a
                      href={selected.hackedUrl.url}
                      target="_blank"
                      rel="noreferrer noopener"
                      className="inline-flex items-center gap-2 rounded-xl bg-rose-600 text-white px-5 py-3 font-semibold text-base hover:bg-rose-700 min-h-14"
                    >
                      Open {selected.hackedUrl.label}
                      <ExternalLink className="h-5 w-5" aria-hidden="true" />
                    </a>
                    <p className="text-sm text-rose-900/90 dark:text-rose-100/90 mt-4">
                      If the hacker asked for money from your contacts, see our{' '}
                      <Link to="/tools/refund-and-return-helper" className="underline font-semibold">
                        Refund &amp; Return Helper
                      </Link>
                      . If you&apos;re not sure whether a DM is real, use{' '}
                      <Link to="/tools/is-this-real" className="underline font-semibold">
                        Is This Real?
                      </Link>
                      .
                    </p>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>

            {/* Healthy use */}
            <Card className="mb-6 border-2">
              <CardContent className="p-5 sm:p-6">
                <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
                  <Heart className="h-6 w-6 text-pink-600 dark:text-pink-400" aria-hidden="true" />
                  Healthy use on {selected.name}
                </h3>
                <ul className="space-y-2">
                  {selected.healthyUse.map((t, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <CheckCircle2 className="h-5 w-5 text-pink-600 dark:text-pink-400 shrink-0 mt-1" aria-hidden="true" />
                      <span className="text-base leading-relaxed">{t}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            <div className="flex flex-wrap gap-3 mb-10">
              <Button size="lg" onClick={handleReset} className="gap-2 min-h-14 text-base">
                <RotateCcw className="h-5 w-5" aria-hidden="true" />
                Look at another platform
              </Button>
            </div>
          </section>
        )}

        {/* ── What to share vs not share ── */}
        <section id="what-to-share" className="mb-10">
          <h2 className="text-2xl sm:text-3xl font-bold mb-4 flex items-center gap-2">
            <Eye className="h-7 w-7 text-indigo-600 dark:text-indigo-400" aria-hidden="true" />
            What to share vs. what to keep private
          </h2>
          <div className="grid gap-4 sm:grid-cols-2">
            <Card className="border-2 border-green-300 bg-green-50 dark:bg-green-950/30 dark:border-green-800">
              <CardContent className="p-5">
                <h3 className="text-xl font-bold mb-3 flex items-center gap-2 text-green-900 dark:text-green-200">
                  <CheckCircle2 className="h-6 w-6" aria-hidden="true" />
                  Safe to share
                </h3>
                <ul className="space-y-2">
                  {SHARE_SAFE.map((s, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <span className="shrink-0 text-green-600 dark:text-green-400 mt-1">✓</span>
                      <span className="text-base leading-relaxed text-green-900 dark:text-green-100">{s}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
            <Card className="border-2 border-red-300 bg-red-50 dark:bg-red-950/30 dark:border-red-800">
              <CardContent className="p-5">
                <h3 className="text-xl font-bold mb-3 flex items-center gap-2 text-red-900 dark:text-red-200">
                  <XCircle className="h-6 w-6" aria-hidden="true" />
                  Keep to yourself
                </h3>
                <ul className="space-y-2">
                  {SHARE_UNSAFE.map((s, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <span className="shrink-0 text-red-600 dark:text-red-400 mt-1">✗</span>
                      <span className="text-base leading-relaxed text-red-900 dark:text-red-100">{s}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>
          <Alert className="mt-4 border-2 border-amber-300 bg-amber-50 dark:bg-amber-950/30 dark:border-amber-800">
            <Lightbulb className="h-5 w-5 text-amber-700 dark:text-amber-300" aria-hidden="true" />
            <AlertTitle className="text-amber-900 dark:text-amber-200 text-base">
              Quick Tip — the "security question" trap
            </AlertTitle>
            <AlertDescription className="text-amber-900/90 dark:text-amber-100/90 text-base">
              Those fun "first car, first pet, mother&apos;s maiden name, the
              street you grew up on" posts are the exact questions banks and
              email providers use to reset your password. Resist the urge to
              play along — no matter how harmless the quiz looks.
            </AlertDescription>
          </Alert>
        </section>

        {/* ── Recovery prep ── */}
        <section className="mb-10">
          <h2 className="text-2xl sm:text-3xl font-bold mb-4 flex items-center gap-2">
            <KeyRound className="h-7 w-7 text-indigo-600 dark:text-indigo-400" aria-hidden="true" />
            Account recovery — set this up BEFORE you need it
          </h2>
          <p className="text-base text-muted-foreground mb-4">
            These steps work across every platform. Doing them once means you
            can recover an account in minutes instead of losing it forever.
          </p>
          <Card className="border-2">
            <CardContent className="p-5 sm:p-6">
              <ul className="space-y-3">
                {RECOVERY_PREP.map((step, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="shrink-0 inline-flex items-center justify-center h-8 w-8 rounded-full bg-indigo-600 text-white font-bold">
                      {i + 1}
                    </span>
                    <span className="text-base leading-relaxed pt-1">{step}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </section>

        {/* ── Grandkid safety ── */}
        <section className="mb-10">
          <h2 className="text-2xl sm:text-3xl font-bold mb-4 flex items-center gap-2">
            <Baby className="h-7 w-7 text-indigo-600 dark:text-indigo-400" aria-hidden="true" />
            Grandkid safety — setting a good example
          </h2>
          <p className="text-base text-muted-foreground mb-4">
            You can&apos;t — and probably shouldn&apos;t — track every app your
            grandkids use. But you can model good behavior and stay curious
            about their world.
          </p>
          <div className="grid gap-3 sm:grid-cols-2">
            {GRANDKID_TIPS.map((tip, i) => (
              <Card key={i} className="border-2">
                <CardContent className="p-5">
                  <h3 className="text-lg font-bold mb-2 flex items-center gap-2">
                    <UserCheck className="h-5 w-5 text-indigo-600 dark:text-indigo-400 shrink-0" aria-hidden="true" />
                    {tip.title}
                  </h3>
                  <p className="text-base leading-relaxed text-muted-foreground">
                    {tip.body}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* ── Echo chamber awareness ── */}
        <section className="mb-10">
          <Card className="border-2 border-purple-300 bg-purple-50 dark:bg-purple-950/30 dark:border-purple-800">
            <CardContent className="p-5 sm:p-6">
              <h2 className="text-2xl font-bold mb-3 flex items-center gap-2 text-purple-900 dark:text-purple-200">
                <Megaphone className="h-7 w-7" aria-hidden="true" />
                Echo chamber awareness
              </h2>
              <p className="text-base leading-relaxed text-purple-900/90 dark:text-purple-100/90 mb-3">
                Social media feeds aren&apos;t a view of the world — they&apos;re
                a view of what keeps YOU scrolling. If every post makes you
                angry, the algorithm is doing its job, not telling the truth.
              </p>
              <ul className="space-y-2 text-base text-purple-900/90 dark:text-purple-100/90">
                <li className="flex items-start gap-3">
                  <Clock className="h-5 w-5 shrink-0 mt-1" aria-hidden="true" />
                  <span>Set a 15-minute app timer. iPhone: Settings → Screen Time. Android: Settings → Digital Wellbeing.</span>
                </li>
                <li className="flex items-start gap-3">
                  <EyeOff className="h-5 w-5 shrink-0 mt-1" aria-hidden="true" />
                  <span>Mute rather than unfollow for relationships you want to keep.</span>
                </li>
                <li className="flex items-start gap-3">
                  <Heart className="h-5 w-5 shrink-0 mt-1" aria-hidden="true" />
                  <span>Pick a weekly "break day" with no social media. Your brain will thank you.</span>
                </li>
                <li className="flex items-start gap-3">
                  <Shield className="h-5 w-5 shrink-0 mt-1" aria-hidden="true" />
                  <span>If a post stirs strong emotion, wait 24 hours before sharing. Scammers and outrage-bait both depend on you reacting fast.</span>
                </li>
              </ul>
            </CardContent>
          </Card>
        </section>

        {/* ── Impersonation defense ── */}
        <section className="mb-10">
          <h2 className="text-2xl sm:text-3xl font-bold mb-4 flex items-center gap-2">
            <UserX className="h-7 w-7 text-indigo-600 dark:text-indigo-400" aria-hidden="true" />
            Impersonation defense
          </h2>
          <p className="text-base text-muted-foreground mb-4">
            If someone is pretending to be you, or using your image or your
            family&apos;s images without permission, here&apos;s where to start.
          </p>
          <Accordion type="single" collapsible className="w-full">
            {IMPERSONATION_CASES.map((c, i) => (
              <AccordionItem key={i} value={`imp-${i}`} className="border-2 rounded-xl mb-3 px-4 data-[state=open]:bg-muted/30">
                <AccordionTrigger className="text-lg font-bold py-4 hover:no-underline min-h-14 text-left">
                  {c.title}
                </AccordionTrigger>
                <AccordionContent>
                  <ol className="space-y-2 pb-2">
                    {c.steps.map((s, j) => (
                      <li key={j} className="flex items-start gap-3">
                        <span className="shrink-0 inline-flex items-center justify-center h-7 w-7 rounded-full bg-indigo-600 text-white font-bold text-sm">
                          {j + 1}
                        </span>
                        <span className="text-base leading-relaxed pt-0.5">{s}</span>
                      </li>
                    ))}
                  </ol>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </section>

        {/* ── Scam DM scripts ── */}
        <section className="mb-10">
          <h2 className="text-2xl sm:text-3xl font-bold mb-4 flex items-center gap-2">
            <MessageSquare className="h-7 w-7 text-indigo-600 dark:text-indigo-400" aria-hidden="true" />
            Scam DM scripts — know the opening line
          </h2>
          <p className="text-base text-muted-foreground mb-4">
            Scammers run the same scripts over and over. If a DM sounds like
            one of these, you already know what it is.
          </p>
          <div className="grid gap-3">
            {SCAM_DMS.map((dm, i) => (
              <Card key={i} className="border-2">
                <CardContent className="p-5">
                  <div className="text-base font-semibold mb-2 text-red-900 dark:text-red-300">
                    {dm.opener}
                  </div>
                  <div className="text-sm text-muted-foreground mb-3 flex items-start gap-2">
                    <AlertTriangle className="h-4 w-4 shrink-0 mt-1 text-amber-600" aria-hidden="true" />
                    <span>{dm.redFlag}</span>
                  </div>
                  <div className="text-base leading-relaxed flex items-start gap-2">
                    <ShieldCheck className="h-5 w-5 shrink-0 mt-0.5 text-green-600 dark:text-green-400" aria-hidden="true" />
                    <span>
                      <strong>How to respond:</strong> {dm.response}
                    </span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* ── FAQ ── */}
        <section className="mb-10">
          <h2 className="text-2xl sm:text-3xl font-bold mb-4 flex items-center gap-2">
            <HelpCircle className="h-7 w-7 text-indigo-600 dark:text-indigo-400" aria-hidden="true" />
            Frequently asked questions
          </h2>
          <Accordion type="single" collapsible className="w-full">
            {FAQ_ITEMS.map((item, i) => (
              <AccordionItem key={i} value={`faq-${i}`} className="border-2 rounded-xl mb-3 px-4 data-[state=open]:bg-muted/30">
                <AccordionTrigger className="text-lg font-semibold py-4 hover:no-underline min-h-14 text-left">
                  {item.q}
                </AccordionTrigger>
                <AccordionContent>
                  <p className="text-base leading-relaxed pb-2">{item.a}</p>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </section>

        {/* ── Printable cheat sheet (hidden on screen; shows on print) ── */}
        <section className="hidden print:block mb-10" aria-hidden="true">
          <h2 className="text-3xl font-bold mb-4">Social Media Safety — One-Pager</h2>
          <p className="mb-2"><strong>Turn on 2-factor authentication on every account.</strong> Use an authenticator app when possible.</p>
          <p className="mb-2"><strong>Make your accounts private</strong> wherever possible.</p>
          <p className="mb-2"><strong>Never send money, gift cards, or crypto</strong> to anyone you met online.</p>
          <p className="mb-2"><strong>Verify on a different channel.</strong> If a friend DMs asking for money, call their phone.</p>
          <p className="mb-2"><strong>Don&apos;t post in real time</strong> while traveling. Post after you&apos;re home.</p>
          <p className="mb-2"><strong>Security-question traps</strong>: first pet, mother&apos;s maiden name, first street — don&apos;t play the quiz.</p>
          <p className="mb-2"><strong>Screenshot suspicious profiles and messages</strong> before reporting.</p>
          <p className="mb-2"><strong>If hacked</strong>:</p>
          <ul>
            <li>Facebook: facebook.com/hacked</li>
            <li>Instagram: Help → I can&apos;t log in</li>
            <li>TikTok: report within app</li>
            <li>X: x.com/i/account_access</li>
            <li>YouTube / Google: accounts.google.com/signin/recovery</li>
            <li>LinkedIn: LinkedIn Safety Center</li>
          </ul>
        </section>

        {/* ── Related tools ── */}
        <section className="mb-10">
          <h2 className="text-2xl sm:text-3xl font-bold mb-4 flex items-center gap-2">
            <BookOpen className="h-7 w-7 text-indigo-600 dark:text-indigo-400" aria-hidden="true" />
            Helpful next steps
          </h2>
          <div className="grid gap-3 sm:grid-cols-2">
            {RELATED_TOOLS.map((t, i) => (
              <Link
                key={i}
                to={t.url}
                className="block rounded-2xl border-2 border-border p-4 hover:border-indigo-400 hover:bg-indigo-50/50 dark:hover:bg-indigo-950/20 transition-colors min-h-[5rem]"
              >
                <div className="flex items-start gap-3">
                  <ShieldCheck className="h-5 w-5 text-indigo-600 dark:text-indigo-400 shrink-0 mt-1" aria-hidden="true" />
                  <div>
                    <div className="text-base font-bold">{t.label}</div>
                    <div className="text-sm text-muted-foreground">{t.blurb}</div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* ── Golden rule — always visible ── */}
        <Card className="border-2 border-amber-300 bg-amber-50 dark:bg-amber-950/30 dark:border-amber-800">
          <CardContent className="p-5 flex gap-3">
            <AlertTriangle className="h-6 w-6 text-amber-700 dark:text-amber-400 shrink-0 mt-0.5" aria-hidden="true" />
            <div>
              <p className="font-semibold text-amber-900 dark:text-amber-200 mb-1">
                The golden rule
              </p>
              <p className="text-base text-amber-900/90 dark:text-amber-100/90 leading-relaxed">
                Every platform in this guide changes its menus every few months.
                The names may shift — the concepts don&apos;t. When in doubt:
                make it private, turn on 2FA, never send money to anyone you
                met online, and verify every urgent message on a different
                channel before you act.
              </p>
            </div>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </>
  );
}

/* Small inline component for the screenshot hint icon */
function ImageIconNote() {
  return (
    <span className="inline-flex items-center justify-center h-5 w-5 rounded bg-orange-200 dark:bg-orange-900 text-orange-800 dark:text-orange-100 text-xs font-bold mr-2 align-text-bottom" aria-hidden="true">
      i
    </span>
  );
}

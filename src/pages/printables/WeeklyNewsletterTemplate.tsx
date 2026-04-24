import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Newspaper,
  Printer,
  Save,
  Trash2,
  Copy,
  Upload,
  QrCode,
  Mail,
  Calendar,
  ShieldAlert,
  Sparkles,
  Wand2,
  Palette,
  Clock,
  Users,
  MapPin,
  Info,
  CheckCircle2,
  ArrowRight,
  BookOpen,
  ShieldCheck,
} from 'lucide-react';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { BookmarkButton } from '@/components/BookmarkButton';
import { PageBreadcrumb } from '@/components/PageBreadcrumb';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { encodeText, toSvgPath } from '@/lib/qrcode';

/* ──────────────────────────────────────────────────────────────────────────
 * Weekly Tech Tip Newsletter Template
 * ------------------------------------------------------------------------
 * A fully fillable, printable one-page newsletter for senior centers,
 * community groups, libraries, and families to hand out every week.
 * Twelve prefilled editions rotate through TekSure's best weekly topics;
 * users can pick one, edit every field, and print, email, or post it.
 * All data stays in the browser — never sent to a server.
 * ──────────────────────────────────────────────────────────────────────── */

const STORAGE_KEY = 'teksure:weekly-newsletter-draft';

type FocusTopic =
  | 'Scams'
  | 'Safety'
  | 'New Device'
  | 'Money Saving'
  | 'Accessibility'
  | 'Learning';

type StyleId = 'classic' | 'friendly' | 'big-print';

interface NewsletterData {
  newsletterName: string;
  groupName: string;
  issueDate: string;
  issueNumber: string;
  logoDataUrl: string;
  focus: FocusTopic;
  headlineTitle: string;
  headlineBody: string;
  reminders: [string, string, string];
  scamTitle: string;
  scamBody: string;
  howToTitle: string;
  howToSteps: [string, string, string];
  events: string[];
  contactInfo: string;
  qrUrl: string;
  qrCaption: string;
  styleId: StyleId;
}

const EMPTY_DATA: NewsletterData = {
  newsletterName: 'Tech Tips Weekly',
  groupName: 'Sunrise Senior Center',
  issueDate: '',
  issueNumber: 'Issue 1',
  logoDataUrl: '',
  focus: 'Scams',
  headlineTitle: '',
  headlineBody: '',
  reminders: ['', '', ''],
  scamTitle: '',
  scamBody: '',
  howToTitle: '',
  howToSteps: ['', '', ''],
  events: ['', '', ''],
  contactInfo: '',
  qrUrl: 'https://teksure.com',
  qrCaption: 'Scan for more free tech tips',
  styleId: 'friendly',
};

/* ──────────────────────────── Prefilled editions ─────────────────────────── */

interface WeekTemplate {
  week: number;
  label: string;
  focus: FocusTopic;
  data: Partial<NewsletterData>;
}

const WEEK_TEMPLATES: WeekTemplate[] = [
  {
    week: 1,
    label: 'Spotting a phishing email',
    focus: 'Scams',
    data: {
      focus: 'Scams',
      headlineTitle: 'How to spot a phishing email before you click',
      headlineBody:
        'Phishing emails pretend to be from your bank, Amazon, or even a family member. The goal is to trick you into clicking a link or sharing a password. Slow down and read the sender address carefully — real companies rarely send urgent emails with spelling mistakes.',
      reminders: [
        'Hover your mouse over any link to see the real web address before clicking.',
        'If the message says "act now or your account will be closed," that is a red flag.',
        'Your bank will never ask for your password or full Social Security number by email.',
      ],
      scamTitle: 'Fake "Amazon order" emails are surging',
      scamBody:
        'Scam emails claiming a $600 charge on your Amazon account are circulating. Do not click the link or call the phone number. Open the Amazon app directly to check your real orders.',
      howToTitle: 'Report a phishing email',
      howToSteps: [
        'In Gmail: open the email, tap the three dots at the top right, and choose "Report phishing."',
        'In Apple Mail: forward the message to reportphishing@apple.com, then delete it.',
        'In Outlook: use the "Report" button on the ribbon and select "Phishing."',
      ],
    },
  },
  {
    week: 2,
    label: 'Setting up a password manager',
    focus: 'Safety',
    data: {
      focus: 'Safety',
      headlineTitle: 'Stop reusing the same password everywhere',
      headlineBody:
        'A password manager remembers every password for you, so you only need to remember one strong main password. It fills in login pages automatically and warns you when a site has been breached. Bitwarden is free and works on every phone and computer.',
      reminders: [
        'Never write passwords on a sticky note attached to your monitor.',
        'Your main password should be a long phrase you can remember — not a dictionary word.',
        'Turn on two-step verification (2FA) for email and bank accounts after setting up your manager.',
      ],
      scamTitle: 'Fake "password change" texts',
      scamBody:
        'Watch for texts claiming your password was changed. Do not tap the link. Open the app directly to check.',
      howToTitle: 'Get started with Bitwarden in 10 minutes',
      howToSteps: [
        'Download Bitwarden from your phone app store or visit bitwarden.com and create a free account.',
        'Pick a strong main password you can remember — 4 unrelated words works well.',
        'Start adding your most important logins: email, bank, Amazon. Bitwarden will fill them in from now on.',
      ],
    },
  },
  {
    week: 3,
    label: 'iPhone privacy basics',
    focus: 'Safety',
    data: {
      focus: 'Safety',
      headlineTitle: 'Three iPhone privacy settings worth 10 minutes',
      headlineBody:
        'Your iPhone shares more than you think by default — location, tracking, and ad data. A quick trip through Settings can lock things down without breaking any of your apps.',
      reminders: [
        'Turn on "Ask App Not to Track" so apps stop following you between websites.',
        'Review which apps can use your microphone and camera.',
        'Set Location Services to "While Using" for most apps, not "Always."',
      ],
      scamTitle: 'Fake "iCloud locked" pop-ups',
      scamBody:
        'If a webpage says your iCloud is locked and to call a number, close the page. Apple will never warn you this way. Open Settings yourself to check your account.',
      howToTitle: 'Turn on Ask App Not to Track',
      howToSteps: [
        'Open Settings and tap Privacy & Security.',
        'Tap Tracking.',
        'Turn off "Allow Apps to Request to Track." That blocks new apps from asking.',
      ],
    },
  },
  {
    week: 4,
    label: 'Video calling 101',
    focus: 'Learning',
    data: {
      focus: 'Learning',
      headlineTitle: 'Video calls without the stress',
      headlineBody:
        'FaceTime, Zoom, and Google Meet all work a little differently — but once you learn one, the rest make sense. The hardest part is usually the first call. After that, it gets easier every time.',
      reminders: [
        'Ask the person calling you what app they are using before the call.',
        'Plug your device in or make sure the battery is above 50 percent.',
        'Find a spot with a window or lamp in front of you, not behind you.',
      ],
      scamTitle: 'Fake grandkid video calls',
      scamBody:
        'Some scammers use AI voice cloning. If a "grandchild" calls asking for money, hang up and call them back on their regular number to confirm.',
      howToTitle: 'Start a FaceTime call with a family member',
      howToSteps: [
        'Open the FaceTime app on your iPhone or iPad.',
        'Tap the green "New FaceTime" button at the top.',
        'Type the person\'s name or phone number and tap FaceTime.',
      ],
    },
  },
  {
    week: 5,
    label: 'How to avoid "tech support" scams',
    focus: 'Scams',
    data: {
      focus: 'Scams',
      headlineTitle: 'The "Microsoft is calling" scam — how it works',
      headlineBody:
        'Real tech companies do not cold-call you. Every single "Microsoft support" or "Apple support" phone call is a scam. The caller tries to get you to install software that gives them control of your computer. Hang up every time.',
      reminders: [
        'No legitimate company will call you about a virus or refund on your computer.',
        'Never let a stranger take remote control of your screen.',
        'If you are worried, restart the computer and call a family member or local tech helper.',
      ],
      scamTitle: 'Fake pop-ups with a phone number',
      scamBody:
        'A loud warning that fills your browser is not a real virus. Close the tab or restart the device. Your computer is almost certainly fine.',
      howToTitle: 'Stop a suspicious "tech support" call',
      howToSteps: [
        'Say "no thank you" and hang up. Do not press any numbers.',
        'If you already gave access, unplug the computer and call a trusted family member.',
        'Report the call at reportfraud.ftc.gov so others can be warned.',
      ],
    },
  },
  {
    week: 6,
    label: 'Medicare online portal setup',
    focus: 'Money Saving',
    data: {
      focus: 'Money Saving',
      headlineTitle: 'Your Medicare.gov account — five minutes, done',
      headlineBody:
        'The official Medicare.gov site lets you see your claims, order a replacement card, compare drug plans, and find doctors who take Medicare. It is free. Do not pay a third party for what the government gives you at no cost.',
      reminders: [
        'The real website is medicare.gov — always type it yourself.',
        'You will need your Medicare number, which is on your red, white, and blue card.',
        'Pick a password you can remember and write it somewhere private, not on the fridge.',
      ],
      scamTitle: 'Fake "new Medicare card" calls',
      scamBody:
        'Medicare never calls to sell you a new card or charge a fee for one. Replacement cards are free at medicare.gov.',
      howToTitle: 'Create your Medicare.gov account',
      howToSteps: [
        'Go to medicare.gov and click "Log in or create an account."',
        'Have your red, white, and blue Medicare card ready.',
        'Follow the prompts, set a strong password, and save it.',
      ],
    },
  },
  {
    week: 7,
    label: "3 Alexa commands you'll actually use",
    focus: 'Learning',
    data: {
      focus: 'Learning',
      headlineTitle: 'Three Alexa commands worth memorizing',
      headlineBody:
        'An Amazon Echo or Alexa device can do a lot — but most people only ever ask it the weather. These three commands are the ones that come up every week once you start.',
      reminders: [
        '"Alexa, set a timer for 20 minutes" — great for the stove, laundry, and medication.',
        '"Alexa, call [family member name]" — if their number is in your contacts.',
        '"Alexa, play the local news" — pulls NPR or your preferred station.',
      ],
      scamTitle: 'Be careful with "skills" that ask for payment info',
      scamBody:
        'Some Alexa "skills" are made by third parties. Stick to skills by well-known brands and never give out credit card numbers to a voice assistant.',
      howToTitle: 'Teach Alexa to call a family member',
      howToSteps: [
        'Open the Alexa app on your phone and go to Communicate.',
        'Tap Contacts and make sure the family member is saved with a phone number.',
        'Say "Alexa, call [name]" and Alexa will ring their phone or Echo.',
      ],
    },
  },
  {
    week: 8,
    label: 'Backing up your photos for free',
    focus: 'Safety',
    data: {
      focus: 'Safety',
      headlineTitle: 'If your phone dies today, are your photos safe?',
      headlineBody:
        'Phones get lost, broken, and stolen. A free backup means you can get every photo back in minutes. Google Photos gives you 15 GB free and iCloud gives you 5 GB — usually enough for years of memories if you pick one and stick with it.',
      reminders: [
        'Turn on automatic photo backup once — then it runs forever in the background.',
        'Only back up on Wi-Fi so you do not use up your cellular data.',
        'Every six months, open the backup app and make sure recent photos are there.',
      ],
      scamTitle: 'Fake "storage full" pop-ups',
      scamBody:
        'A pop-up telling you to pay to recover your photos is a scam. Your real iCloud or Google storage is managed in your phone\'s Settings, not a web page.',
      howToTitle: 'Turn on Google Photos backup',
      howToSteps: [
        'Download the Google Photos app from your phone\'s app store.',
        'Sign in with your Google account.',
        'Tap your profile picture, then Photos Settings, then Backup — turn it on.',
      ],
    },
  },
  {
    week: 9,
    label: 'Canceling subscriptions you forgot',
    focus: 'Money Saving',
    data: {
      focus: 'Money Saving',
      headlineTitle: 'That $9.99 charge every month — is it still worth it?',
      headlineBody:
        'Most households pay for subscriptions they stopped using months ago. A quick review of your credit card statement can save $30 to $100 a month. The hardest part is finding where to cancel.',
      reminders: [
        'Pull up the last three months of your bank or credit card statement.',
        'Circle anything that charges every month — streaming, apps, magazines.',
        'Write down the date you last actually used each one.',
      ],
      scamTitle: 'Fake "your subscription was renewed" emails',
      scamBody:
        'Emails claiming Norton, McAfee, or Geek Squad renewed your $399 subscription are almost always fake. Do not call the phone number. Check your real bank statement instead.',
      howToTitle: 'Cancel an iPhone subscription',
      howToSteps: [
        'Open Settings and tap your name at the top.',
        'Tap Subscriptions to see every active subscription.',
        'Tap the one you want to stop and choose Cancel Subscription.',
      ],
    },
  },
  {
    week: 10,
    label: 'Reading the news without fake news',
    focus: 'Learning',
    data: {
      focus: 'Learning',
      headlineTitle: 'How to tell real news from made-up news',
      headlineBody:
        'Fake news is designed to make you angry, scared, or excited enough to share it. Real news tells you the source, the date, and who reported it. When in doubt, check a second source before you forward anything to family.',
      reminders: [
        'Look for the date on the article — old stories are often recycled as "breaking."',
        'Check the web address — odd endings like .co or .news are worth a pause.',
        'If an article uses ALL CAPS in the headline, be extra skeptical.',
      ],
      scamTitle: 'Doctored video clips on social media',
      scamBody:
        'AI can now put words in a real person\'s mouth. If a clip seems shocking, search the quote on Google News to see if any real outlet reported it.',
      howToTitle: 'Do a 30-second fact check',
      howToSteps: [
        'Copy a sentence from the article and paste it into Google News.',
        'Look for coverage from AP, Reuters, BBC, or your local paper.',
        'If only one strange site is covering it, treat it as unverified.',
      ],
    },
  },
  {
    week: 11,
    label: 'Fall detection on Apple Watch',
    focus: 'Accessibility',
    data: {
      focus: 'Accessibility',
      headlineTitle: 'Fall detection — the Apple Watch feature worth turning on',
      headlineBody:
        'If your Apple Watch detects a hard fall and you do not move for about a minute, it will call 911 and text your emergency contacts automatically. It has saved lives. Turning it on takes two minutes.',
      reminders: [
        'You must add emergency contacts in the Health app on your iPhone for this to work.',
        'Wear the watch snug enough that it stays in place but is not tight.',
        'Charge the watch overnight so it is ready every day.',
      ],
      scamTitle: 'Fake "medical alert" offers',
      scamBody:
        'Be wary of phone calls or mailers offering a "free medical alert button" — most end up charging high monthly fees. Your Apple Watch or Android watch already has this built in.',
      howToTitle: 'Turn on fall detection',
      howToSteps: [
        'On your iPhone, open the Watch app and tap My Watch.',
        'Tap Emergency SOS.',
        'Turn on Fall Detection and set it to "Always on."',
      ],
    },
  },
  {
    week: 12,
    label: 'Winterizing your tech',
    focus: 'New Device',
    data: {
      focus: 'New Device',
      headlineTitle: 'Cold weather and your phone — what to know',
      headlineBody:
        'Lithium batteries drain faster in the cold and can shut down when temperatures drop below freezing. A few small habits keep your phone reliable all winter — especially if you drive in bad weather.',
      reminders: [
        'Keep your phone in an inside pocket close to your body, not in a purse or coat pocket.',
        'Do not leave your phone in a parked car overnight.',
        'Keep a car charger in the glovebox for cold-weather emergencies.',
      ],
      scamTitle: 'Fake "battery replacement" calls',
      scamBody:
        'If someone calls offering to replace your phone battery cheaply, hang up. Use the official Apple, Samsung, or Google support sites only.',
      howToTitle: 'Check your iPhone battery health',
      howToSteps: [
        'Open Settings and tap Battery.',
        'Tap Battery Health & Charging.',
        'If Maximum Capacity is under 80 percent, consider a battery replacement at a real Apple Store.',
      ],
    },
  },
];

/* ──────────────────────────── Visual styles ─────────────────────────── */

interface StyleOption {
  id: StyleId;
  label: string;
  description: string;
}

const STYLE_OPTIONS: StyleOption[] = [
  {
    id: 'classic',
    label: 'Classic',
    description: 'Serif fonts and a bordered, traditional newsletter look.',
  },
  {
    id: 'friendly',
    label: 'Friendly',
    description: 'Rounded corners, warm amber accents, approachable.',
  },
  {
    id: 'big-print',
    label: 'Big Print',
    description: 'Extra-large text throughout for easy reading.',
  },
];

/* ──────────────────────────── Storage helpers ─────────────────────────── */

function loadDraft(): NewsletterData {
  if (typeof window === 'undefined') return EMPTY_DATA;
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    if (!raw) return EMPTY_DATA;
    const parsed = JSON.parse(raw);
    return {
      ...EMPTY_DATA,
      ...parsed,
      reminders: Array.from(
        { length: 3 },
        (_, i) => parsed.reminders?.[i] ?? '',
      ) as [string, string, string],
      howToSteps: Array.from(
        { length: 3 },
        (_, i) => parsed.howToSteps?.[i] ?? '',
      ) as [string, string, string],
      events: Array.isArray(parsed.events) ? parsed.events : ['', '', ''],
    };
  } catch {
    return EMPTY_DATA;
  }
}

function formatSavedAgo(ts: number | null): string {
  if (!ts) return '';
  const seconds = Math.floor((Date.now() - ts) / 1000);
  if (seconds < 5) return 'Saved moments ago';
  if (seconds < 60) return `Saved ${seconds} seconds ago`;
  const mins = Math.floor(seconds / 60);
  if (mins < 60) return `Saved ${mins} minute${mins === 1 ? '' : 's'} ago`;
  const hours = Math.floor(mins / 60);
  return `Saved ${hours} hour${hours === 1 ? '' : 's'} ago`;
}

/* ────────────────────────── QR code rendering ────────────────────────── */

function QrSvg({ text, size = 120 }: { text: string; size?: number }) {
  const { path, total } = useMemo(() => {
    const clean = text.trim() || 'https://teksure.com';
    try {
      const matrix = encodeText(clean, 'MEDIUM');
      const { path: p, size: total } = toSvgPath(matrix, 4);
      return { path: p, total };
    } catch {
      return { path: '', total: 29 };
    }
  }, [text]);

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox={`0 0 ${total} ${total}`}
      width={size}
      height={size}
      shapeRendering="crispEdges"
      aria-label="QR code"
    >
      <rect width="100%" height="100%" fill="#ffffff" />
      <path d={path} fill="#0f172a" />
    </svg>
  );
}

/* ──────────────────────── Style-specific classes ──────────────────────── */

function styleClasses(style: StyleId) {
  switch (style) {
    case 'classic':
      return {
        page: 'wn-page wn-classic',
        title: 'wn-title wn-title-classic',
        body: 'wn-body wn-body-classic',
        section: 'wn-section wn-section-classic',
      };
    case 'big-print':
      return {
        page: 'wn-page wn-bigprint',
        title: 'wn-title wn-title-bigprint',
        body: 'wn-body wn-body-bigprint',
        section: 'wn-section wn-section-bigprint',
      };
    case 'friendly':
    default:
      return {
        page: 'wn-page wn-friendly',
        title: 'wn-title wn-title-friendly',
        body: 'wn-body wn-body-friendly',
        section: 'wn-section wn-section-friendly',
      };
  }
}

/* ───────────────────────── Plain-text email builder ─────────────────── */

function buildEmailText(d: NewsletterData): string {
  const nonEmpty = (arr: string[]) => arr.map((s) => s.trim()).filter(Boolean);
  const lines: string[] = [];
  lines.push(d.newsletterName.toUpperCase());
  if (d.groupName) lines.push(d.groupName);
  if (d.issueDate || d.issueNumber) {
    lines.push([d.issueNumber, d.issueDate].filter(Boolean).join(' · '));
  }
  lines.push('');
  lines.push(`This week's focus: ${d.focus}`);
  lines.push('');
  if (d.headlineTitle) {
    lines.push(d.headlineTitle);
    lines.push('-'.repeat(Math.min(d.headlineTitle.length, 60)));
  }
  if (d.headlineBody) {
    lines.push(d.headlineBody);
    lines.push('');
  }
  const reminders = nonEmpty(d.reminders);
  if (reminders.length) {
    lines.push('QUICK REMINDERS');
    reminders.forEach((r, i) => lines.push(`  ${i + 1}. ${r}`));
    lines.push('');
  }
  if (d.scamTitle || d.scamBody) {
    lines.push('WATCH OUT FOR');
    if (d.scamTitle) lines.push(d.scamTitle);
    if (d.scamBody) lines.push(d.scamBody);
    lines.push('');
  }
  const steps = nonEmpty(d.howToSteps);
  if (d.howToTitle || steps.length) {
    lines.push(`HOW TO: ${d.howToTitle || ''}`.trim());
    steps.forEach((s, i) => lines.push(`  Step ${i + 1}. ${s}`));
    lines.push('');
  }
  const events = nonEmpty(d.events);
  if (events.length) {
    lines.push('UPCOMING EVENTS');
    events.forEach((e) => lines.push(`  • ${e}`));
    lines.push('');
  }
  if (d.contactInfo) {
    lines.push('CONTACT');
    lines.push(d.contactInfo);
    lines.push('');
  }
  if (d.qrUrl) {
    lines.push(`More free tech tips: ${d.qrUrl}`);
  }
  lines.push('');
  lines.push('Shared freely by TekSure.com — print, post, or forward to anyone.');
  return lines.join('\n');
}

/* ──────────────────────────── The Page ─────────────────────────── */

export default function WeeklyNewsletterTemplate() {
  const [data, setData] = useState<NewsletterData>(EMPTY_DATA);
  const [hydrated, setHydrated] = useState(false);
  const [lastSaved, setLastSaved] = useState<number | null>(null);
  const [savedLabel, setSavedLabel] = useState('');
  const [selectedWeek, setSelectedWeek] = useState<string>('1');
  const [emailCopied, setEmailCopied] = useState(false);
  const fileInputRef = useRef<HTMLInputElement | null>(null);

  /* Hydrate from localStorage */
  useEffect(() => {
    setData(loadDraft());
    setHydrated(true);
  }, []);

  /* Autosave */
  useEffect(() => {
    if (!hydrated) return;
    try {
      window.localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
      setLastSaved(Date.now());
    } catch {
      /* private browsing — ignore */
    }
  }, [data, hydrated]);

  /* Saved label ticker */
  useEffect(() => {
    setSavedLabel(formatSavedAgo(lastSaved));
    const t = window.setInterval(
      () => setSavedLabel(formatSavedAgo(lastSaved)),
      15_000,
    );
    return () => window.clearInterval(t);
  }, [lastSaved]);

  /* ── Helpers ── */
  const update = useCallback(<K extends keyof NewsletterData>(key: K, value: NewsletterData[K]) => {
    setData((d) => ({ ...d, [key]: value }));
  }, []);

  const updateReminder = (i: number, value: string) => {
    setData((d) => {
      const next = [...d.reminders] as [string, string, string];
      next[i] = value;
      return { ...d, reminders: next };
    });
  };

  const updateStep = (i: number, value: string) => {
    setData((d) => {
      const next = [...d.howToSteps] as [string, string, string];
      next[i] = value;
      return { ...d, howToSteps: next };
    });
  };

  const updateEvent = (i: number, value: string) => {
    setData((d) => {
      const next = [...d.events];
      next[i] = value;
      return { ...d, events: next };
    });
  };

  const addEvent = () => setData((d) => ({ ...d, events: [...d.events, ''] }));
  const removeEvent = (i: number) =>
    setData((d) => ({
      ...d,
      events: d.events.filter((_, idx) => idx !== i),
    }));

  const loadWeek = (weekStr: string) => {
    setSelectedWeek(weekStr);
    const wk = WEEK_TEMPLATES.find((w) => w.week === Number(weekStr));
    if (!wk) return;
    setData((d) => ({
      ...d,
      issueNumber: `Week ${wk.week}`,
      focus: (wk.data.focus ?? d.focus) as FocusTopic,
      headlineTitle: wk.data.headlineTitle ?? d.headlineTitle,
      headlineBody: wk.data.headlineBody ?? d.headlineBody,
      reminders: (wk.data.reminders ?? d.reminders) as [string, string, string],
      scamTitle: wk.data.scamTitle ?? d.scamTitle,
      scamBody: wk.data.scamBody ?? d.scamBody,
      howToTitle: wk.data.howToTitle ?? d.howToTitle,
      howToSteps: (wk.data.howToSteps ?? d.howToSteps) as [string, string, string],
    }));
  };

  const handleLogoUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    if (file.size > 1024 * 1024 * 2) {
      window.alert('Logo is larger than 2 MB. Please pick a smaller image.');
      return;
    }
    const reader = new FileReader();
    reader.onload = () => {
      const result = reader.result;
      if (typeof result === 'string') {
        update('logoDataUrl', result);
      }
    };
    reader.readAsDataURL(file);
  };

  const clearLogo = () => {
    update('logoDataUrl', '');
    if (fileInputRef.current) fileInputRef.current.value = '';
  };

  const clearAll = () => {
    if (!window.confirm('Start fresh? This will clear every field in the newsletter.')) {
      return;
    }
    setData(EMPTY_DATA);
  };

  const printNewsletter = () => {
    window.print();
  };

  const copyEmailText = async () => {
    const text = buildEmailText(data);
    try {
      await navigator.clipboard.writeText(text);
      setEmailCopied(true);
      window.setTimeout(() => setEmailCopied(false), 2500);
    } catch {
      /* ignore */
    }
  };

  const styles = styleClasses(data.styleId);
  const nonEmptyEvents = data.events.filter((e) => e.trim());
  const nonEmptyReminders = data.reminders.filter((r) => r.trim());
  const nonEmptySteps = data.howToSteps.filter((s) => s.trim());

  return (
    <>
      <SEOHead
        title="Weekly Tech Tip Newsletter — Free Printable Template for Senior Centers | TekSure"
        description="A ready-to-print one-page weekly tech tip newsletter for senior centers, libraries, and family groups. 12 prefilled weekly editions, edit any field, save, email, or print. 100% free."
        path="/printables/weekly-newsletter"
      />

      {/* Print styles — hide everything except the newsletter preview */}
      <style>{`
        /* ── Friendly (default) ───────────────────────── */
        .wn-page {
          background: #ffffff;
          color: #1f2937;
          width: 100%;
          max-width: 8.5in;
          margin: 0 auto;
          box-shadow: 0 12px 40px -12px rgba(0,0,0,0.22);
        }
        .wn-friendly {
          border-radius: 14px;
          padding: 0.55in 0.6in;
          font-family: ui-sans-serif, system-ui, -apple-system, "Segoe UI", Roboto, sans-serif;
        }
        .wn-friendly .wn-hr {
          height: 6px; background: linear-gradient(90deg, #b45309, #d97706, #fbbf24);
          border-radius: 3px; margin: 10px 0 14px;
        }
        .wn-title-friendly {
          font-size: 34pt; font-weight: 900; letter-spacing: -0.01em;
          color: #78350f; margin: 0;
        }
        .wn-body-friendly { font-size: 12pt; line-height: 1.5; }
        .wn-section-friendly {
          border: 2px solid #fbbf24; border-radius: 12px;
          padding: 10pt 12pt; margin-top: 12pt;
          background: #fffbeb;
          break-inside: avoid; page-break-inside: avoid;
        }
        .wn-friendly .wn-section-title {
          font-size: 13pt; font-weight: 800; color: #92400e;
          text-transform: uppercase; letter-spacing: 0.06em;
          margin: 0 0 6pt;
        }
        .wn-friendly .wn-scam {
          background: #fef2f2; border-color: #fca5a5; color: #7f1d1d;
        }
        .wn-friendly .wn-scam .wn-section-title { color: #991b1b; }

        /* ── Classic (serif, bordered) ────────────────── */
        .wn-classic {
          border: 3px double #1f2937; padding: 0.5in 0.55in;
          font-family: "Georgia", "Times New Roman", Times, serif;
        }
        .wn-classic .wn-hr {
          height: 2px; background: #1f2937; margin: 8px 0 12px;
          border-bottom: 1px solid #1f2937; padding-bottom: 3px;
        }
        .wn-title-classic {
          font-size: 32pt; font-weight: 700; text-align: center;
          color: #111827; margin: 0;
          border-top: 4px double #1f2937; border-bottom: 4px double #1f2937;
          padding: 6px 0; letter-spacing: 0.02em;
        }
        .wn-body-classic { font-size: 12pt; line-height: 1.55; }
        .wn-section-classic {
          border: 1.5px solid #1f2937; padding: 10pt 12pt; margin-top: 12pt;
          break-inside: avoid; page-break-inside: avoid;
        }
        .wn-classic .wn-section-title {
          font-size: 13pt; font-weight: 700; color: #111827;
          font-variant: small-caps; letter-spacing: 0.04em;
          margin: 0 0 6pt; border-bottom: 1px solid #1f2937; padding-bottom: 3pt;
        }
        .wn-classic .wn-scam { border-color: #991b1b; }
        .wn-classic .wn-scam .wn-section-title { color: #991b1b; border-color: #991b1b; }

        /* ── Big Print ───────────────────────────────── */
        .wn-bigprint {
          border: 2px solid #1f2937; border-radius: 8px;
          padding: 0.55in 0.55in;
          font-family: "Verdana", "Segoe UI", sans-serif;
        }
        .wn-bigprint .wn-hr {
          height: 8px; background: #1f2937; margin: 12px 0 16px; border-radius: 4px;
        }
        .wn-title-bigprint {
          font-size: 40pt; font-weight: 900; letter-spacing: -0.01em;
          color: #111827; margin: 0; line-height: 1;
        }
        .wn-body-bigprint { font-size: 16pt; line-height: 1.55; }
        .wn-section-bigprint {
          border: 3px solid #1f2937; border-radius: 8px;
          padding: 12pt 14pt; margin-top: 14pt;
          break-inside: avoid; page-break-inside: avoid;
        }
        .wn-bigprint .wn-section-title {
          font-size: 18pt; font-weight: 900; color: #111827;
          text-transform: uppercase; margin: 0 0 8pt;
        }
        .wn-bigprint .wn-scam { background: #fef2f2; border-color: #991b1b; color: #7f1d1d; }

        /* Common header row */
        .wn-header-row {
          display: flex; align-items: center; justify-content: space-between;
          gap: 14px; flex-wrap: wrap;
        }
        .wn-meta {
          font-size: 11pt; color: #4b5563; text-align: right;
        }
        .wn-bigprint .wn-meta { font-size: 14pt; color: #111827; }
        .wn-logo-box { width: 72px; height: 72px; display: flex; align-items: center; justify-content: center; }
        .wn-logo-box img { max-width: 100%; max-height: 100%; object-fit: contain; }

        .wn-reminders { margin: 4pt 0 0; padding-left: 20pt; }
        .wn-reminders li { margin-bottom: 4pt; }
        .wn-steps { margin: 4pt 0 0; padding: 0; list-style: none; counter-reset: step; }
        .wn-steps li {
          counter-increment: step;
          position: relative; padding-left: 34pt; margin-bottom: 6pt;
        }
        .wn-steps li::before {
          content: counter(step);
          position: absolute; left: 0; top: 0;
          width: 24pt; height: 24pt; border-radius: 50%;
          background: #b45309; color: #fff;
          display: flex; align-items: center; justify-content: center;
          font-weight: 800; font-size: 13pt;
        }
        .wn-classic .wn-steps li::before { background: #1f2937; }
        .wn-bigprint .wn-steps li::before { width: 32pt; height: 32pt; font-size: 16pt; }

        .wn-footer {
          display: flex; align-items: center; justify-content: space-between;
          gap: 12pt; margin-top: 14pt; padding-top: 10pt;
          border-top: 2px dashed #e5e7eb;
        }
        .wn-footer-contact { font-size: 11pt; line-height: 1.4; }
        .wn-bigprint .wn-footer-contact { font-size: 14pt; }
        .wn-qr { display: flex; flex-direction: column; align-items: center; gap: 4pt; }
        .wn-qr-caption {
          font-size: 9pt; color: #4b5563; text-align: center; max-width: 140px;
        }
        .wn-bigprint .wn-qr-caption { font-size: 12pt; color: #111827; }

        /* ── Print ── */
        @media print {
          html, body { background: #fff !important; }
          body * { visibility: hidden !important; }
          .wn-print-area, .wn-print-area * { visibility: visible !important; }
          .wn-print-area {
            position: absolute; left: 0; top: 0; width: 100%;
            padding: 0 !important; margin: 0 !important;
          }
          .wn-page {
            box-shadow: none !important; border-radius: 0 !important;
            max-width: 100% !important; margin: 0 !important;
          }
        }
        @page { size: letter; margin: 0.5in; }
      `}</style>

      <Navbar />

      <main className="min-h-screen bg-background">
        <div className="container max-w-7xl pt-4 px-4 print:hidden">
          <PageBreadcrumb
            segments={[
              { label: 'Tools', href: '/tools' },
              { label: 'Weekly Newsletter Template' },
            ]}
          />
        </div>

        {/* ── Hero ────────────────────────────────────────────── */}
        <section className="relative overflow-hidden print:hidden">
          <div
            className="absolute inset-0 bg-gradient-to-br from-amber-600 via-orange-500 to-amber-700"
            aria-hidden
          />
          <div className="relative container max-w-7xl mx-auto px-4 py-12 md:py-16 text-white">
            <div className="flex items-center gap-3 mb-4">
              <Badge className="bg-white/20 text-white border-white/30 hover:bg-white/30">
                <Newspaper className="h-3.5 w-3.5 mr-1" /> New printable
              </Badge>
              <Badge className="bg-white/20 text-white border-white/30 hover:bg-white/30">
                Free to share
              </Badge>
            </div>
            <div className="flex items-start gap-4 md:gap-6">
              <div className="shrink-0 hidden md:flex h-16 w-16 rounded-2xl bg-white/20 items-center justify-center">
                <Newspaper className="h-9 w-9" aria-hidden />
              </div>
              <div className="flex-1">
                <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight mb-3 leading-tight">
                  Weekly Tech Tip Newsletter — Print It, Post It, Share It
                </h1>
                <p className="text-lg md:text-xl text-white/90 max-w-3xl">
                  A ready-to-print one-page newsletter your senior center or family group
                  can hand out each week. Pre-filled with TekSure's best tips — or write
                  your own.
                </p>
                <div className="mt-5 flex flex-wrap gap-3 items-center">
                  <BookmarkButton
                    type="tool"
                    slug="weekly-newsletter"
                    title="Weekly Tech Tip Newsletter"
                    url="/printables/weekly-newsletter"
                    className="bg-white/20 border-white/30 hover:bg-white/30 text-white"
                  />
                  <Button
                    size="lg"
                    onClick={printNewsletter}
                    className="min-h-14 bg-white text-amber-800 hover:bg-amber-50 text-base font-semibold"
                  >
                    <Printer className="h-5 w-5 mr-2" /> Print this week's newsletter
                  </Button>
                  <Button
                    size="lg"
                    variant="outline"
                    onClick={copyEmailText}
                    className="min-h-14 border-white/60 text-white bg-white/10 hover:bg-white/20 text-base"
                  >
                    {emailCopied ? (
                      <>
                        <CheckCircle2 className="h-5 w-5 mr-2" /> Email text copied
                      </>
                    ) : (
                      <>
                        <Mail className="h-5 w-5 mr-2" /> Copy as email
                      </>
                    )}
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── Quick-start picker ─────────────────────────────── */}
        <section className="container max-w-7xl mx-auto px-4 py-8 print:hidden">
          <Card className="border-amber-200 dark:border-amber-900/40 bg-amber-50/60 dark:bg-amber-950/20">
            <CardContent className="p-5 md:p-6">
              <div className="flex items-start gap-3">
                <Wand2 className="h-6 w-6 text-amber-700 dark:text-amber-300 shrink-0 mt-0.5" />
                <div className="flex-1">
                  <h2 className="text-lg md:text-xl font-bold mb-1">
                    Start with a prefilled edition
                  </h2>
                  <p className="text-base text-muted-foreground mb-4">
                    Pick a week. Every field fills in with a topic TekSure recommends,
                    and you can still edit anything before you print.
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-3 items-end">
                    <div className="md:col-span-2">
                      <Label htmlFor="week-picker" className="text-base mb-1.5 block">
                        This week's edition
                      </Label>
                      <Select value={selectedWeek} onValueChange={loadWeek}>
                        <SelectTrigger id="week-picker" className="min-h-14 text-base">
                          <SelectValue placeholder="Pick a week" />
                        </SelectTrigger>
                        <SelectContent>
                          {WEEK_TEMPLATES.map((w) => (
                            <SelectItem key={w.week} value={String(w.week)}>
                              Week {w.week} — {w.label}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                    <Button
                      variant="outline"
                      onClick={() => loadWeek(selectedWeek)}
                      className="min-h-14 text-base"
                    >
                      <Sparkles className="h-5 w-5 mr-2" /> Load prefilled text
                    </Button>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* ── Main editor + preview ─────────────────────────── */}
        <section className="container max-w-7xl mx-auto px-4 pb-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* ── Left column: form ── */}
            <div className="space-y-6 print:hidden">
              <div className="flex items-center justify-between">
                <h2 className="text-2xl font-bold">Fill in your newsletter</h2>
                <span className="text-sm text-muted-foreground flex items-center gap-1.5">
                  <Save className="h-4 w-4" /> {savedLabel || 'Draft saved automatically'}
                </span>
              </div>

              {/* Style picker */}
              <Card>
                <CardContent className="p-5 space-y-3">
                  <Label className="text-base flex items-center gap-2">
                    <Palette className="h-4 w-4" /> Visual style
                  </Label>
                  <div className="grid grid-cols-3 gap-2">
                    {STYLE_OPTIONS.map((opt) => (
                      <button
                        key={opt.id}
                        type="button"
                        onClick={() => update('styleId', opt.id)}
                        className={[
                          'min-h-14 rounded-lg border-2 px-3 py-2 text-left transition',
                          data.styleId === opt.id
                            ? 'border-amber-600 bg-amber-50 dark:bg-amber-950/30'
                            : 'border-border hover:border-amber-300',
                        ].join(' ')}
                      >
                        <div className="font-semibold text-base">{opt.label}</div>
                        <div className="text-xs text-muted-foreground mt-0.5">
                          {opt.description}
                        </div>
                      </button>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Masthead */}
              <Card>
                <CardContent className="p-5 space-y-4">
                  <h3 className="font-semibold text-lg">Masthead</h3>
                  <div>
                    <Label htmlFor="nn" className="text-base">
                      Newsletter name
                    </Label>
                    <Input
                      id="nn"
                      value={data.newsletterName}
                      onChange={(e) => update('newsletterName', e.target.value)}
                      placeholder="Tech Tips Weekly"
                      className="min-h-14 text-base"
                    />
                  </div>
                  <div>
                    <Label htmlFor="gn" className="text-base">
                      Group or center name
                    </Label>
                    <Input
                      id="gn"
                      value={data.groupName}
                      onChange={(e) => update('groupName', e.target.value)}
                      placeholder="Sunrise Senior Center"
                      className="min-h-14 text-base"
                    />
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    <div>
                      <Label htmlFor="idate" className="text-base">
                        Issue date
                      </Label>
                      <Input
                        id="idate"
                        type="date"
                        value={data.issueDate}
                        onChange={(e) => update('issueDate', e.target.value)}
                        className="min-h-14 text-base"
                      />
                    </div>
                    <div>
                      <Label htmlFor="inum" className="text-base">
                        Issue number
                      </Label>
                      <Input
                        id="inum"
                        value={data.issueNumber}
                        onChange={(e) => update('issueNumber', e.target.value)}
                        placeholder="Issue 14"
                        className="min-h-14 text-base"
                      />
                    </div>
                  </div>
                  <div>
                    <Label htmlFor="logo" className="text-base flex items-center gap-2">
                      <Upload className="h-4 w-4" /> Logo (optional — PNG or JPG)
                    </Label>
                    <div className="flex items-center gap-3 mt-1">
                      <input
                        ref={fileInputRef}
                        id="logo"
                        type="file"
                        accept="image/png,image/jpeg,image/webp,image/svg+xml"
                        onChange={handleLogoUpload}
                        className="block text-sm min-h-14 file:mr-3 file:py-2 file:px-4 file:rounded-md file:border file:text-sm file:bg-background"
                      />
                      {data.logoDataUrl && (
                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={clearLogo}
                          className="text-rose-600"
                        >
                          <Trash2 className="h-4 w-4 mr-1" /> Remove
                        </Button>
                      )}
                    </div>
                    {data.logoDataUrl && (
                      <img
                        src={data.logoDataUrl}
                        alt="Uploaded logo preview"
                        className="mt-2 h-14 w-14 object-contain border rounded"
                      />
                    )}
                  </div>
                </CardContent>
              </Card>

              {/* Focus + headline */}
              <Card>
                <CardContent className="p-5 space-y-4">
                  <h3 className="font-semibold text-lg">This week's focus</h3>
                  <div>
                    <Label htmlFor="focus" className="text-base">
                      Topic
                    </Label>
                    <Select
                      value={data.focus}
                      onValueChange={(v: FocusTopic) => update('focus', v)}
                    >
                      <SelectTrigger id="focus" className="min-h-14 text-base">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="Scams">Scams</SelectItem>
                        <SelectItem value="Safety">Safety</SelectItem>
                        <SelectItem value="New Device">New Device</SelectItem>
                        <SelectItem value="Money Saving">Money Saving</SelectItem>
                        <SelectItem value="Accessibility">Accessibility</SelectItem>
                        <SelectItem value="Learning">Learning</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <Label htmlFor="ht" className="text-base">
                      Headline tip — title
                    </Label>
                    <Input
                      id="ht"
                      value={data.headlineTitle}
                      onChange={(e) => update('headlineTitle', e.target.value)}
                      placeholder="How to spot a phishing email before you click"
                      className="min-h-14 text-base"
                    />
                  </div>
                  <div>
                    <Label htmlFor="hb" className="text-base">
                      Headline tip — 2-3 sentences
                    </Label>
                    <Textarea
                      id="hb"
                      value={data.headlineBody}
                      onChange={(e) => update('headlineBody', e.target.value)}
                      placeholder="Explain the topic in plain English..."
                      className="min-h-[110px] text-base"
                      rows={4}
                    />
                  </div>
                </CardContent>
              </Card>

              {/* Three reminders */}
              <Card>
                <CardContent className="p-5 space-y-4">
                  <h3 className="font-semibold text-lg">Three quick reminders</h3>
                  {data.reminders.map((r, i) => (
                    <div key={i}>
                      <Label htmlFor={`rem-${i}`} className="text-base">
                        Reminder {i + 1}
                      </Label>
                      <Input
                        id={`rem-${i}`}
                        value={r}
                        onChange={(e) => updateReminder(i, e.target.value)}
                        placeholder="One short sentence your readers can act on"
                        className="min-h-14 text-base"
                      />
                    </div>
                  ))}
                </CardContent>
              </Card>

              {/* Scam callout */}
              <Card>
                <CardContent className="p-5 space-y-4">
                  <h3 className="font-semibold text-lg flex items-center gap-2">
                    <ShieldAlert className="h-5 w-5 text-rose-600" /> Watch out for
                  </h3>
                  <div>
                    <Label htmlFor="st" className="text-base">
                      Scam alert title
                    </Label>
                    <Input
                      id="st"
                      value={data.scamTitle}
                      onChange={(e) => update('scamTitle', e.target.value)}
                      placeholder='Fake "Amazon order" emails are surging'
                      className="min-h-14 text-base"
                    />
                  </div>
                  <div>
                    <Label htmlFor="sb" className="text-base">
                      Scam alert details
                    </Label>
                    <Textarea
                      id="sb"
                      value={data.scamBody}
                      onChange={(e) => update('scamBody', e.target.value)}
                      placeholder="Describe the scam and what to do in 1-3 sentences."
                      className="min-h-[100px] text-base"
                      rows={3}
                    />
                  </div>
                </CardContent>
              </Card>

              {/* How-to */}
              <Card>
                <CardContent className="p-5 space-y-4">
                  <h3 className="font-semibold text-lg">How to — 3 steps</h3>
                  <div>
                    <Label htmlFor="hot" className="text-base">
                      Mini-guide title
                    </Label>
                    <Input
                      id="hot"
                      value={data.howToTitle}
                      onChange={(e) => update('howToTitle', e.target.value)}
                      placeholder="Report a phishing email"
                      className="min-h-14 text-base"
                    />
                  </div>
                  {data.howToSteps.map((s, i) => (
                    <div key={i}>
                      <Label htmlFor={`step-${i}`} className="text-base">
                        Step {i + 1}
                      </Label>
                      <Textarea
                        id={`step-${i}`}
                        value={s}
                        onChange={(e) => updateStep(i, e.target.value)}
                        placeholder="Plain-English instruction"
                        className="min-h-[80px] text-base"
                        rows={2}
                      />
                    </div>
                  ))}
                </CardContent>
              </Card>

              {/* Events */}
              <Card>
                <CardContent className="p-5 space-y-4">
                  <h3 className="font-semibold text-lg flex items-center gap-2">
                    <Calendar className="h-5 w-5" /> Upcoming events
                  </h3>
                  {data.events.map((ev, i) => (
                    <div key={i} className="flex items-start gap-2">
                      <Input
                        value={ev}
                        onChange={(e) => updateEvent(i, e.target.value)}
                        placeholder="Tuesday, Jan 9 · Tech help drop-in · 2 pm"
                        className="min-h-14 text-base flex-1"
                      />
                      <Button
                        variant="ghost"
                        size="icon"
                        onClick={() => removeEvent(i)}
                        className="min-h-14 min-w-11 text-rose-600"
                        aria-label={`Remove event ${i + 1}`}
                      >
                        <Trash2 className="h-4 w-4" />
                      </Button>
                    </div>
                  ))}
                  <Button
                    variant="outline"
                    onClick={addEvent}
                    className="min-h-14 text-base w-full"
                  >
                    + Add another event
                  </Button>
                </CardContent>
              </Card>

              {/* Contact + QR */}
              <Card>
                <CardContent className="p-5 space-y-4">
                  <h3 className="font-semibold text-lg flex items-center gap-2">
                    <MapPin className="h-5 w-5" /> Contact info
                  </h3>
                  <Textarea
                    value={data.contactInfo}
                    onChange={(e) => update('contactInfo', e.target.value)}
                    placeholder={`Questions? Call the front desk at (555) 123-4567\nSunrise Senior Center · 123 Main St, Your Town`}
                    className="min-h-[100px] text-base"
                    rows={3}
                  />
                  <div className="pt-2 border-t">
                    <h3 className="font-semibold text-lg mb-2 flex items-center gap-2">
                      <QrCode className="h-5 w-5" /> QR code
                    </h3>
                    <Label htmlFor="qr" className="text-base">
                      Website URL
                    </Label>
                    <Input
                      id="qr"
                      value={data.qrUrl}
                      onChange={(e) => update('qrUrl', e.target.value)}
                      placeholder="https://teksure.com"
                      className="min-h-14 text-base"
                    />
                    <Label htmlFor="qrc" className="text-base mt-3">
                      QR code caption
                    </Label>
                    <Input
                      id="qrc"
                      value={data.qrCaption}
                      onChange={(e) => update('qrCaption', e.target.value)}
                      placeholder="Scan for more free tech tips"
                      className="min-h-14 text-base"
                    />
                  </div>
                </CardContent>
              </Card>

              {/* Action buttons */}
              <div className="flex flex-wrap gap-3 pt-2">
                <Button
                  onClick={printNewsletter}
                  className="min-h-14 text-base flex-1 min-w-[180px] bg-amber-700 hover:bg-amber-800"
                >
                  <Printer className="h-5 w-5 mr-2" /> Print newsletter
                </Button>
                <Button
                  variant="outline"
                  onClick={copyEmailText}
                  className="min-h-14 text-base flex-1 min-w-[180px]"
                >
                  {emailCopied ? (
                    <>
                      <CheckCircle2 className="h-5 w-5 mr-2" /> Copied
                    </>
                  ) : (
                    <>
                      <Copy className="h-5 w-5 mr-2" /> Copy email version
                    </>
                  )}
                </Button>
                <Button
                  variant="outline"
                  onClick={clearAll}
                  className="min-h-14 text-base text-rose-600 hover:text-rose-700"
                >
                  <Trash2 className="h-5 w-5 mr-2" /> Start fresh
                </Button>
              </div>
            </div>

            {/* ── Right column: preview ── */}
            <div className="lg:sticky lg:top-6 lg:self-start">
              <div className="mb-3 flex items-center justify-between print:hidden">
                <h2 className="text-2xl font-bold">Live preview</h2>
                <Badge variant="outline" className="text-sm">
                  Letter size · one page
                </Badge>
              </div>

              <div className="wn-print-area">
                <div className={styles.page}>
                  {/* Masthead */}
                  <div className="wn-header-row">
                    <div className="flex items-center gap-3">
                      {data.logoDataUrl ? (
                        <div className="wn-logo-box">
                          <img src={data.logoDataUrl} alt="" />
                        </div>
                      ) : null}
                      <div>
                        <h1 className={styles.title}>
                          {data.newsletterName || 'Tech Tips Weekly'}
                        </h1>
                        {data.groupName && (
                          <div
                            style={{
                              fontSize: data.styleId === 'big-print' ? '16pt' : '12pt',
                              fontWeight: 600,
                              color: '#6b7280',
                            }}
                          >
                            {data.groupName}
                          </div>
                        )}
                      </div>
                    </div>
                    <div className="wn-meta">
                      {data.issueNumber && <div>{data.issueNumber}</div>}
                      {data.issueDate && (
                        <div>
                          {new Date(data.issueDate + 'T00:00:00').toLocaleDateString(
                            'en-US',
                            {
                              weekday: 'long',
                              month: 'long',
                              day: 'numeric',
                              year: 'numeric',
                            },
                          )}
                        </div>
                      )}
                      <div style={{ marginTop: '4pt', fontStyle: 'italic' }}>
                        Focus: {data.focus}
                      </div>
                    </div>
                  </div>
                  <div className="wn-hr" />

                  <div className={styles.body}>
                    {/* Headline tip */}
                    {(data.headlineTitle || data.headlineBody) && (
                      <div className={styles.section}>
                        <div className="wn-section-title">
                          {data.headlineTitle || 'This week'}
                        </div>
                        {data.headlineBody && <p style={{ margin: 0 }}>{data.headlineBody}</p>}
                      </div>
                    )}

                    {/* Reminders */}
                    {nonEmptyReminders.length > 0 && (
                      <div className={styles.section}>
                        <div className="wn-section-title">Quick reminders</div>
                        <ul className="wn-reminders">
                          {nonEmptyReminders.map((r, i) => (
                            <li key={i}>{r}</li>
                          ))}
                        </ul>
                      </div>
                    )}

                    {/* Scam callout */}
                    {(data.scamTitle || data.scamBody) && (
                      <div className={`${styles.section} wn-scam`}>
                        <div className="wn-section-title">
                          ⚠ Watch out for: {data.scamTitle}
                        </div>
                        {data.scamBody && <p style={{ margin: 0 }}>{data.scamBody}</p>}
                      </div>
                    )}

                    {/* How-to */}
                    {(data.howToTitle || nonEmptySteps.length > 0) && (
                      <div className={styles.section}>
                        <div className="wn-section-title">
                          How to: {data.howToTitle}
                        </div>
                        <ol className="wn-steps">
                          {nonEmptySteps.map((s, i) => (
                            <li key={i}>{s}</li>
                          ))}
                        </ol>
                      </div>
                    )}

                    {/* Events */}
                    {nonEmptyEvents.length > 0 && (
                      <div className={styles.section}>
                        <div className="wn-section-title">Upcoming events</div>
                        <ul className="wn-reminders">
                          {nonEmptyEvents.map((ev, i) => (
                            <li key={i}>{ev}</li>
                          ))}
                        </ul>
                      </div>
                    )}

                    {/* Footer: contact + QR */}
                    <div className="wn-footer">
                      <div className="wn-footer-contact" style={{ whiteSpace: 'pre-line' }}>
                        {data.contactInfo || (
                          <span style={{ color: '#9ca3af' }}>
                            Add your contact info on the left.
                          </span>
                        )}
                        <div style={{ marginTop: '6pt', fontSize: '9pt', color: '#6b7280' }}>
                          Shared freely by TekSure.com — print, post, or forward to anyone.
                        </div>
                      </div>
                      <div className="wn-qr">
                        <QrSvg text={data.qrUrl || 'https://teksure.com'} size={96} />
                        {data.qrCaption && (
                          <div className="wn-qr-caption">{data.qrCaption}</div>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── Distribution tips ─────────────────────────────── */}
        <section className="container max-w-7xl mx-auto px-4 pb-12 print:hidden">
          <h2 className="text-2xl font-bold mb-4">Where to share this newsletter</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <Card>
              <CardContent className="p-5">
                <div className="flex items-center gap-2 mb-2">
                  <Printer className="h-5 w-5 text-amber-700" />
                  <h3 className="font-semibold text-lg">Print 10-50 copies</h3>
                </div>
                <p className="text-base text-muted-foreground">
                  A single-page letter-size printout costs pennies. Leave a stack at the
                  front desk or activity room of your senior center.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-5">
                <div className="flex items-center gap-2 mb-2">
                  <Users className="h-5 w-5 text-amber-700" />
                  <h3 className="font-semibold text-lg">Post it on the refrigerator</h3>
                </div>
                <p className="text-base text-muted-foreground">
                  Families love this for parents and grandparents. One page, a magnet,
                  and a reminder every time they open the fridge.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-5">
                <div className="flex items-center gap-2 mb-2">
                  <Mail className="h-5 w-5 text-amber-700" />
                  <h3 className="font-semibold text-lg">Email to a family group</h3>
                </div>
                <p className="text-base text-muted-foreground">
                  Use the "Copy email version" button to paste a plain-text edition into
                  any email — no formatting, no attachments, no spam filter problems.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-5">
                <div className="flex items-center gap-2 mb-2">
                  <MapPin className="h-5 w-5 text-amber-700" />
                  <h3 className="font-semibold text-lg">Community bulletin boards</h3>
                </div>
                <p className="text-base text-muted-foreground">
                  Grocery stores, libraries, churches, and community centers usually
                  have a free bulletin board. Ask at the front desk.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-5">
                <div className="flex items-center gap-2 mb-2">
                  <QrCode className="h-5 w-5 text-amber-700" />
                  <h3 className="font-semibold text-lg">Let the QR code do the work</h3>
                </div>
                <p className="text-base text-muted-foreground">
                  Point the QR code at TekSure.com, your own website, or any detailed
                  article. Readers with a smartphone can get the full guide in seconds.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-5">
                <div className="flex items-center gap-2 mb-2">
                  <Clock className="h-5 w-5 text-amber-700" />
                  <h3 className="font-semibold text-lg">One edition a week</h3>
                </div>
                <p className="text-base text-muted-foreground">
                  Weekly is sticky. Readers start looking for the new edition, and the
                  12 prefilled topics give you a full quarter to try it out.
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* ── Permissions ───────────────────────────────────── */}
        <section className="container max-w-4xl mx-auto px-4 pb-12 print:hidden">
          <Alert className="border-amber-200 dark:border-amber-900/40 bg-amber-50/60 dark:bg-amber-950/20">
            <Info className="h-5 w-5 text-amber-700" />
            <AlertTitle className="text-lg font-bold">Share freely</AlertTitle>
            <AlertDescription className="text-base">
              You are welcome to print, email, post, and distribute this newsletter as
              many times as you like. Credit to TekSure.com is appreciated but not
              required. If you change the content, please keep it accurate and in plain
              language so readers can trust it.
            </AlertDescription>
          </Alert>
        </section>

        {/* ── Related tools ─────────────────────────────────── */}
        <section className="container max-w-7xl mx-auto px-4 pb-16 print:hidden">
          <h2 className="text-2xl font-bold mb-4">Related tools</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <Link to="/safety/scam-alerts" className="block group">
              <Card className="h-full hover:shadow-lg hover:-translate-y-0.5 transition-all">
                <CardContent className="p-5">
                  <ShieldAlert className="h-6 w-6 text-rose-600 mb-2" />
                  <h3 className="font-semibold text-lg mb-1">Scam Alerts</h3>
                  <p className="text-sm text-muted-foreground mb-3">
                    Fresh scam warnings to use in your newsletter's "Watch out for"
                    section.
                  </p>
                  <span className="text-sm text-amber-700 font-semibold inline-flex items-center gap-1">
                    Open <ArrowRight className="h-4 w-4" />
                  </span>
                </CardContent>
              </Card>
            </Link>
            <Link to="/tools/is-this-real" className="block group">
              <Card className="h-full hover:shadow-lg hover:-translate-y-0.5 transition-all">
                <CardContent className="p-5">
                  <ShieldCheck className="h-6 w-6 text-emerald-600 mb-2" />
                  <h3 className="font-semibold text-lg mb-1">Is This Real?</h3>
                  <p className="text-sm text-muted-foreground mb-3">
                    Check a suspicious email, text, or phone call before writing about
                    it.
                  </p>
                  <span className="text-sm text-amber-700 font-semibold inline-flex items-center gap-1">
                    Open <ArrowRight className="h-4 w-4" />
                  </span>
                </CardContent>
              </Card>
            </Link>
            <Link to="/toolkits/caregiver" className="block group">
              <Card className="h-full hover:shadow-lg hover:-translate-y-0.5 transition-all">
                <CardContent className="p-5">
                  <Users className="h-6 w-6 text-blue-600 mb-2" />
                  <h3 className="font-semibold text-lg mb-1">Caregiver Toolkit</h3>
                  <p className="text-sm text-muted-foreground mb-3">
                    Pair with this toolkit when the newsletter is going to families or
                    caregivers.
                  </p>
                  <span className="text-sm text-amber-700 font-semibold inline-flex items-center gap-1">
                    Open <ArrowRight className="h-4 w-4" />
                  </span>
                </CardContent>
              </Card>
            </Link>
            <Link to="/tools/free-resource-hub" className="block group">
              <Card className="h-full hover:shadow-lg hover:-translate-y-0.5 transition-all">
                <CardContent className="p-5">
                  <BookOpen className="h-6 w-6 text-purple-600 mb-2" />
                  <h3 className="font-semibold text-lg mb-1">Free Resource Hub</h3>
                  <p className="text-sm text-muted-foreground mb-3">
                    Free government and nonprofit tech programs to list in your events
                    section.
                  </p>
                  <span className="text-sm text-amber-700 font-semibold inline-flex items-center gap-1">
                    Open <ArrowRight className="h-4 w-4" />
                  </span>
                </CardContent>
              </Card>
            </Link>
          </div>
        </section>
      </main>

      <div className="print:hidden">
        <Footer />
      </div>
    </>
  );
}

import { useEffect, useMemo, useState } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import {
  Smile,
  Wifi,
  MessageCircle,
  Globe,
  ShieldCheck,
  Settings,
  ArrowRight,
  ArrowLeft,
  RotateCcw,
  Share2,
  CheckCircle2,
  Sparkles,
  Trophy,
  Star,
  Rocket,
  Heart,
  Flower,
  HelpCircle,
  Copy,
} from 'lucide-react';

import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { BookmarkButton } from '@/components/BookmarkButton';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

/* ───────────────────────── Types ───────────────────────── */

type Domain = 'basics' | 'communication' | 'internet' | 'security' | 'advanced';

interface Question {
  id: number;
  domain: Domain;
  prompt: string; // "When you need to ..."
  scenario: string; // the action being rated
}

interface Attempt {
  date: string;   // ISO
  score: number;  // 0–100
  tier: string;
  domains: Record<Domain, number>; // per-domain total (0–20)
}

/* ─────────────────────── Domain meta ─────────────────────── */

const DOMAINS: Record<
  Domain,
  {
    label: string;
    short: string;
    icon: React.ComponentType<{ className?: string }>;
    color: string;
    barClass: string;
    helpers: { title: string; description: string; href: string }[];
  }
> = {
  basics: {
    label: 'Basics',
    short: 'Device basics',
    icon: Smile,
    color: 'text-teal-600',
    barClass: '[&>div]:bg-teal-500',
    helpers: [
      {
        title: 'My First Smartphone',
        description: 'A gentle, picture-based tour of your phone\u2019s buttons, icons, and gestures.',
        href: '/tools/my-first-smartphone',
      },
      {
        title: 'iPad for Seniors',
        description: 'Large-text setup walkthrough for new iPad owners \u2014 every tap shown clearly.',
        href: '/tools/ipad-for-seniors',
      },
    ],
  },
  communication: {
    label: 'Communication',
    short: 'Staying in touch',
    icon: MessageCircle,
    color: 'text-sky-600',
    barClass: '[&>div]:bg-sky-500',
    helpers: [
      {
        title: 'Video Call Helper',
        description: 'Friendly walkthroughs for FaceTime, Zoom, and Google Meet with real screenshots.',
        href: '/tools/video-call-helper',
      },
      {
        title: 'Email Spam Manager',
        description: 'Clean out your inbox, block senders, and keep the mail that matters.',
        href: '/tools/email-spam-manager',
      },
    ],
  },
  internet: {
    label: 'Internet',
    short: 'Web skills',
    icon: Globe,
    color: 'text-indigo-600',
    barClass: '[&>div]:bg-indigo-500',
    helpers: [
      {
        title: 'Tech Jargon Translator',
        description: 'Type any confusing word and get a plain-English explanation.',
        href: '/tools/tech-jargon-translator',
      },
      {
        title: 'Guide Library',
        description: 'Step-by-step guides on searching, tabs, downloads, and file management.',
        href: '/guides',
      },
    ],
  },
  security: {
    label: 'Security',
    short: 'Staying safe online',
    icon: ShieldCheck,
    color: 'text-red-600',
    barClass: '[&>div]:bg-red-500',
    helpers: [
      {
        title: 'Scam IQ Test',
        description: 'Practice spotting 20 real-world scam scenarios with red-flag feedback.',
        href: '/tools/scam-iq-test',
      },
      {
        title: 'Is This Real?',
        description: 'Paste any suspicious message and get an instant plain-English read.',
        href: '/tools/is-this-real',
      },
      {
        title: 'Password Strength Tester',
        description: 'See how long it would take a computer to crack your passwords \u2014 safely, in your browser.',
        href: '/tools/password-strength',
      },
    ],
  },
  advanced: {
    label: 'Advanced',
    short: 'Settings & fixes',
    icon: Settings,
    color: 'text-amber-600',
    barClass: '[&>div]:bg-amber-500',
    helpers: [
      {
        title: 'Phone First Aid',
        description: 'Walks you through the most common phone problems with fixes anyone can do.',
        href: '/tools/phone-first-aid',
      },
      {
        title: 'Settings Finder',
        description: 'Tell us what you want to change and we\u2019ll show you exactly where the setting lives.',
        href: '/tools/settings-finder',
      },
    ],
  },
};

/* ──────────────────────── Questions ──────────────────────── */

const QUESTIONS: Question[] = [
  /* Basics */
  { id: 1,  domain: 'basics',        prompt: 'When you need to turn your phone or tablet on or off…',                           scenario: 'Powering a device on and off.' },
  { id: 2,  domain: 'basics',        prompt: 'When you need to connect to a new Wi-Fi network at home or a cafe…',              scenario: 'Connecting to Wi-Fi.' },
  { id: 3,  domain: 'basics',        prompt: 'When you need to place a regular phone call…',                                    scenario: 'Making a phone call.' },
  { id: 4,  domain: 'basics',        prompt: 'When you want to take a photo with your phone camera…',                           scenario: 'Taking a photo.' },
  { id: 5,  domain: 'basics',        prompt: 'When your device is running low on battery…',                                     scenario: 'Charging your device.' },

  /* Communication */
  { id: 6,  domain: 'communication', prompt: 'When you need to send a text message to a friend…',                               scenario: 'Sending a text message.' },
  { id: 7,  domain: 'communication', prompt: 'When you need to read or send an email with an attachment…',                      scenario: 'Using email.' },
  { id: 8,  domain: 'communication', prompt: 'When a family member wants to video call you on FaceTime, Zoom, or Google Meet…', scenario: 'Making a video call.' },
  { id: 9,  domain: 'communication', prompt: 'When you\u2019re added to a group chat with several people…',                     scenario: 'Using group chats.' },
  { id: 10, domain: 'communication', prompt: 'When you want to share a photo from your phone with someone else…',               scenario: 'Sharing a photo.' },

  /* Internet */
  { id: 11, domain: 'internet',      prompt: 'When you need to look something up using a search engine…',                       scenario: 'Searching the web.' },
  { id: 12, domain: 'internet',      prompt: 'When you want to save a website so you can come back to it later…',               scenario: 'Using bookmarks.' },
  { id: 13, domain: 'internet',      prompt: 'When you need to have several websites open at once…',                            scenario: 'Working with browser tabs.' },
  { id: 14, domain: 'internet',      prompt: 'When you need to download a file or document from a website…',                    scenario: 'Downloading files.' },
  { id: 15, domain: 'internet',      prompt: 'When you need to find a file you saved earlier on your device…',                  scenario: 'Finding and organizing files.' },

  /* Security */
  { id: 16, domain: 'security',      prompt: 'When you\u2019re making a new password for an important account…',                scenario: 'Creating strong passwords.' },
  { id: 17, domain: 'security',      prompt: 'When a website asks for a second code from your phone to log in…',                scenario: 'Using two-factor sign-in.' },
  { id: 18, domain: 'security',      prompt: 'When a text or email claims your account will be closed unless you tap a link…',  scenario: 'Spotting phishing attempts.' },
  { id: 19, domain: 'security',      prompt: 'When a phone number keeps calling or texting you unwanted messages…',             scenario: 'Blocking unwanted numbers.' },
  { id: 20, domain: 'security',      prompt: 'When you\u2019re on public Wi-Fi at a hotel, airport, or cafe…',                  scenario: 'Staying safe on public Wi-Fi.' },

  /* Advanced */
  { id: 21, domain: 'advanced',      prompt: 'When you want to install a new app from the App Store or Play Store…',            scenario: 'Installing apps.' },
  { id: 22, domain: 'advanced',      prompt: 'When you need to change a setting \u2014 like text size or notifications…',       scenario: 'Adjusting device settings.' },
  { id: 23, domain: 'advanced',      prompt: 'When your device shows a software update is available…',                          scenario: 'Running system updates.' },
  { id: 24, domain: 'advanced',      prompt: 'When you want to make sure your photos and contacts are backed up safely…',       scenario: 'Backing up your device.' },
  { id: 25, domain: 'advanced',      prompt: 'When something on your device stops working the way it used to…',                 scenario: 'Troubleshooting a problem.' },
];

/* ─────────────────────── Answer choices ─────────────────────── */

interface Choice {
  score: 1 | 2 | 3 | 4;
  label: string;
  sub: string;
}

const CHOICES: Choice[] = [
  { score: 1, label: 'I\u2019ve never tried',          sub: 'This one is new to me.' },
  { score: 2, label: 'I\u2019ve tried but I struggle', sub: 'I\u2019ve had a go and it felt confusing.' },
  { score: 3, label: 'I can do it with instructions',  sub: 'With a guide or a friend\u2019s help, I can work through it.' },
  { score: 4, label: 'I do it without thinking',       sub: 'Second nature \u2014 I don\u2019t need help anymore.' },
];

/* ─────────────────────── Tiers ─────────────────────── */

interface Tier {
  name: string;
  min: number;
  max: number;
  tagline: string;
  paragraph: string;
  icon: React.ComponentType<{ className?: string }>;
  ring: string; // card border + tint
  text: string; // text color for name
}

const TIERS: Tier[] = [
  {
    name: 'Tech Wizard',
    min: 85,
    max: 100,
    tagline: 'You\u2019re the person your family calls for tech help.',
    paragraph:
      'You navigate almost any device with confidence. Use TekSure to keep sharp on security, deepfakes, and the newest scams \u2014 and maybe share what you know with someone who\u2019s earlier in their journey.',
    icon: Sparkles,
    ring: 'border-purple-300 bg-purple-50 dark:border-purple-900/50 dark:bg-purple-950/30',
    text: 'text-purple-700 dark:text-purple-300',
  },
  {
    name: 'Confident User',
    min: 65,
    max: 84,
    tagline: 'You handle most tech on your own \u2014 nice work.',
    paragraph:
      'You\u2019ve built a strong foundation. A few domains still feel less comfortable, and the start-here cards below point to the quickest wins for filling those gaps.',
    icon: Star,
    ring: 'border-blue-300 bg-blue-50 dark:border-blue-900/50 dark:bg-blue-950/30',
    text: 'text-blue-700 dark:text-blue-300',
  },
  {
    name: 'Growing Fast',
    min: 40,
    max: 64,
    tagline: 'You\u2019re in the sweet spot \u2014 every session builds real skill.',
    paragraph:
      'You know the basics and are picking up the rest. Pick one domain below and spend 15 minutes a week there \u2014 the confidence compounds quickly.',
    icon: Rocket,
    ring: 'border-emerald-300 bg-emerald-50 dark:border-emerald-900/50 dark:bg-emerald-950/30',
    text: 'text-emerald-700 dark:text-emerald-300',
  },
  {
    name: 'Getting Started',
    min: 20,
    max: 39,
    tagline: 'You\u2019re at the beginning \u2014 and that\u2019s a fine place to be.',
    paragraph:
      'Focus on one device and one task at a time. The guides below walk through each action with pictures, not jargon \u2014 no assumptions about what you already know.',
    icon: Flower,
    ring: 'border-amber-300 bg-amber-50 dark:border-amber-900/50 dark:bg-amber-950/30',
    text: 'text-amber-700 dark:text-amber-300',
  },
  {
    name: 'Brand New',
    min: 0,
    max: 19,
    tagline: 'Everyone started here. Welcome.',
    paragraph:
      'Nothing on this quiz was a trick. If most of it felt unfamiliar, start with one single thing \u2014 turning your phone on, making a call, or sending a text \u2014 and build from there. TekSure is designed for exactly this moment.',
    icon: Heart,
    ring: 'border-rose-300 bg-rose-50 dark:border-rose-900/50 dark:bg-rose-950/30',
    text: 'text-rose-700 dark:text-rose-300',
  },
];

function getTier(score: number): Tier {
  return TIERS.find((t) => score >= t.min && score <= t.max) ?? TIERS[TIERS.length - 1];
}

/* ────────── localStorage attempts ────────── */

const STORAGE_KEY = 'teksure:tech-confidence-attempts';

function loadAttempts(): Attempt[] {
  if (typeof window === 'undefined') return [];
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    if (!raw) return [];
    const parsed = JSON.parse(raw);
    return Array.isArray(parsed) ? parsed : [];
  } catch {
    return [];
  }
}

function saveAttempt(next: Attempt): Attempt[] {
  if (typeof window === 'undefined') return [];
  const existing = loadAttempts();
  const updated = [...existing, next].slice(-20);
  try {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
  } catch {
    /* storage full or disabled \u2014 graceful no-op */
  }
  return updated;
}

/* ───────────────────────── Component ───────────────────────── */

type Phase = 'intro' | 'quiz' | 'results';

export default function TechConfidenceQuiz() {
  const [searchParams] = useSearchParams();
  const sharedScore = (() => {
    const raw = searchParams.get('score');
    if (!raw) return null;
    const n = Number(raw);
    if (!Number.isFinite(n)) return null;
    return Math.max(0, Math.min(100, Math.round(n)));
  })();

  const [phase, setPhase] = useState<Phase>('intro');
  const [currentIdx, setCurrentIdx] = useState(0);
  const [answers, setAnswers] = useState<Record<number, 1 | 2 | 3 | 4>>({});
  const [attempts, setAttempts] = useState<Attempt[]>([]);
  const [priorBest, setPriorBest] = useState<number | null>(null);
  const [shareCopied, setShareCopied] = useState(false);

  useEffect(() => {
    const a = loadAttempts();
    setAttempts(a);
    setPriorBest(a.length > 0 ? Math.max(...a.map((x) => x.score)) : null);
  }, []);

  const total = QUESTIONS.length;
  const currentQ = QUESTIONS[currentIdx];
  const progressPct = (currentIdx / total) * 100;
  const answeredCount = Object.keys(answers).length;

  /* Score totals */
  const totalScore = useMemo(() => {
    let sum = 0;
    for (const q of QUESTIONS) sum += answers[q.id] ?? 0;
    return sum;
  }, [answers]);

  const domainTotals = useMemo(() => {
    const out: Record<Domain, number> = {
      basics: 0,
      communication: 0,
      internet: 0,
      security: 0,
      advanced: 0,
    };
    for (const q of QUESTIONS) {
      out[q.domain] += answers[q.id] ?? 0;
    }
    return out;
  }, [answers]);

  const tier = useMemo(() => getTier(totalScore), [totalScore]);

  const sortedDomains = useMemo(() => {
    return (Object.keys(domainTotals) as Domain[])
      .map((d) => ({ domain: d, total: domainTotals[d], pct: Math.round((domainTotals[d] / 20) * 100) }))
      .sort((a, b) => b.total - a.total);
  }, [domainTotals]);

  const strongest = sortedDomains.slice(0, 2);
  const growing = sortedDomains.slice(-2).reverse();

  /* ─── Handlers ─── */

  const startQuiz = () => {
    setPhase('quiz');
    setCurrentIdx(0);
    setAnswers({});
  };

  const pick = (score: 1 | 2 | 3 | 4) => {
    setAnswers((prev) => ({ ...prev, [currentQ.id]: score }));
    // Auto-advance after a short beat, unless it\u2019s the last question
    if (currentIdx < total - 1) {
      setTimeout(() => setCurrentIdx((i) => Math.min(i + 1, total - 1)), 180);
    }
  };

  const goBack = () => setCurrentIdx((i) => Math.max(0, i - 1));

  const goNext = () => {
    if (currentIdx < total - 1) {
      setCurrentIdx((i) => i + 1);
    } else {
      finishQuiz();
    }
  };

  const finishQuiz = () => {
    const t = getTier(totalScore);
    const attempt: Attempt = {
      date: new Date().toISOString(),
      score: totalScore,
      tier: t.name,
      domains: { ...domainTotals },
    };
    const updated = saveAttempt(attempt);
    setAttempts(updated);
    setPriorBest(updated.length > 0 ? Math.max(...updated.map((a) => a.score)) : null);
    setPhase('results');
  };

  const restart = () => {
    setPhase('quiz');
    setCurrentIdx(0);
    setAnswers({});
  };

  const shareScore = async () => {
    const shareText = `I scored ${totalScore}/100 on the TekSure Tech Confidence Quiz \u2014 tier: ${tier.name}. Find your tech comfort level here: `;
    const shareUrl =
      typeof window !== 'undefined'
        ? `${window.location.origin}/quizzes/tech-confidence?score=${totalScore}`
        : `/quizzes/tech-confidence?score=${totalScore}`;
    const payload = `${shareText}${shareUrl}`;
    try {
      if (typeof navigator !== 'undefined' && navigator.share) {
        await navigator.share({ title: 'My Tech Confidence score', text: shareText, url: shareUrl });
        return;
      }
      if (typeof navigator !== 'undefined' && navigator.clipboard) {
        await navigator.clipboard.writeText(payload);
        setShareCopied(true);
        setTimeout(() => setShareCopied(false), 2500);
      }
    } catch {
      /* user cancelled or permission denied \u2014 no-op */
    }
  };

  const allAnswered = answeredCount === total;

  /* ─── Shared chrome ─── */

  const SEO = (
    <SEOHead
      title="Tech Confidence Quiz \u2014 How Comfortable Are You With Tech? | TekSure"
      description="A 25-question self-assessment across device basics, communication, the internet, security, and advanced skills. No judgment \u2014 get a personalized starting point."
      path="/quizzes/tech-confidence"
    />
  );

  /* ──────────────────── RENDER: Intro ──────────────────── */

  if (phase === 'intro') {
    return (
      <>
        {SEO}
        <Navbar />
        <main className="min-h-screen bg-background">
          {/* Hero \u2014 warm teal gradient */}
          <section className="relative overflow-hidden bg-gradient-to-br from-teal-500 via-teal-600 to-emerald-700 text-white">
            <div className="container py-14 md:py-20">
              <div className="max-w-3xl">
                <div className="flex items-center gap-3 mb-5">
                  <div className="h-12 w-12 rounded-2xl bg-white/20 backdrop-blur flex items-center justify-center">
                    <Smile className="h-7 w-7 text-white" aria-hidden="true" />
                  </div>
                  <Badge className="bg-white/20 text-white hover:bg-white/25 border-white/30">Confidence Quiz</Badge>
                </div>
                <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
                  How Comfortable Are You With Tech?
                </h1>
                <p className="text-lg md:text-xl text-white/95 leading-relaxed max-w-2xl">
                  25 quick questions. No judgment. Get a personalized starting point.
                </p>

                <div className="mt-8 flex flex-wrap gap-3">
                  <Button
                    size="lg"
                    onClick={startQuiz}
                    className="min-h-14 text-base bg-white text-teal-800 hover:bg-white/90"
                  >
                    Start the 25-question quiz
                    <ArrowRight className="ml-2 h-5 w-5" aria-hidden="true" />
                  </Button>
                  <BookmarkButton
                    type="tool"
                    slug="tech-confidence"
                    title="Tech Confidence Quiz"
                    url="/quizzes/tech-confidence"
                    className="bg-white/10 text-white border-white/30 hover:bg-white/20 hover:text-white"
                  />
                </div>

                {priorBest !== null && (
                  <p className="mt-5 text-sm text-white/90">
                    Your best so far: <strong>{priorBest}/100</strong>. Room to grow \u2014 or a score to defend.
                  </p>
                )}
                {sharedScore !== null && (
                  <p className="mt-3 text-sm text-white/90">
                    A friend shared their score: <strong>{sharedScore}/100</strong>. See how your result compares.
                  </p>
                )}
              </div>
            </div>
          </section>

          {/* Encouragement */}
          <section className="container py-10 md:py-12">
            <Alert className="max-w-4xl mx-auto border-teal-200 bg-teal-50/60 dark:border-teal-900/40 dark:bg-teal-950/20">
              <Heart className="h-5 w-5 text-teal-700" aria-hidden="true" />
              <AlertTitle className="text-base font-semibold">Wherever you are is fine. Everyone started somewhere.</AlertTitle>
              <AlertDescription className="text-base leading-relaxed mt-1">
                This quiz is a mirror, not a test. Whatever your score, you\u2019ll leave with two or three specific
                places to start \u2014 plus a clear picture of what you already know how to do.
              </AlertDescription>
            </Alert>

            <div className="max-w-4xl mx-auto mt-10 grid gap-4 md:grid-cols-2">
              <Card>
                <CardContent className="p-6">
                  <h2 className="text-xl font-semibold mb-3 flex items-center gap-2">
                    <Sparkles className="h-5 w-5 text-teal-600" aria-hidden="true" />
                    How it works
                  </h2>
                  <ul className="space-y-2 text-base leading-relaxed list-disc pl-5">
                    <li>25 everyday scenarios across 5 areas of tech.</li>
                    <li>Each question has four honest answers \u2014 pick the one that fits.</li>
                    <li>At the end, see your score, a domain breakdown, and two places to start.</li>
                    <li>Your answers stay on your device. Nothing is sent anywhere.</li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <h2 className="text-xl font-semibold mb-3 flex items-center gap-2">
                    <Trophy className="h-5 w-5 text-amber-500" aria-hidden="true" />
                    Five comfort tiers
                  </h2>
                  <ul className="space-y-2 text-base leading-relaxed">
                    {TIERS.map((t) => {
                      const Icon = t.icon;
                      return (
                        <li key={t.name} className="flex items-start gap-2">
                          <Badge variant="outline" className={`${t.text} border-current min-w-fit`}>
                            <Icon className="h-3.5 w-3.5 mr-1" aria-hidden="true" />
                            {t.name}
                          </Badge>
                          <span className="text-muted-foreground text-sm">
                            {t.min}\u2013{t.max} points
                          </span>
                        </li>
                      );
                    })}
                  </ul>
                </CardContent>
              </Card>
            </div>

            <div className="max-w-4xl mx-auto mt-10">
              <h2 className="text-xl font-semibold mb-4">What you\u2019ll be rating</h2>
              <div className="grid gap-3 md:grid-cols-5 sm:grid-cols-2">
                {(Object.keys(DOMAINS) as Domain[]).map((d) => {
                  const meta = DOMAINS[d];
                  const Icon = meta.icon;
                  return (
                    <div
                      key={d}
                      className="rounded-xl border bg-muted/30 p-4 flex flex-col items-start gap-2"
                    >
                      <Icon className={`h-6 w-6 ${meta.color}`} aria-hidden="true" />
                      <div>
                        <p className="font-semibold">{meta.label}</p>
                        <p className="text-xs text-muted-foreground">{meta.short}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            <div className="max-w-4xl mx-auto mt-8 text-center">
              <Button size="lg" onClick={startQuiz} className="min-h-14 text-base bg-teal-600 hover:bg-teal-700 text-white">
                Begin \u2014 25 questions, about 5 minutes
                <ArrowRight className="ml-2 h-5 w-5" aria-hidden="true" />
              </Button>
            </div>
          </section>

          {/* FAQ */}
          <section className="container pb-16 md:pb-20">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
                <HelpCircle className="h-6 w-6 text-teal-600" aria-hidden="true" />
                Common questions
              </h2>
              <Accordion type="single" collapsible className="w-full border rounded-xl">
                <AccordionItem value="q1" className="px-4">
                  <AccordionTrigger className="text-left text-base font-medium">
                    Is this a judgment?
                  </AccordionTrigger>
                  <AccordionContent className="text-base leading-relaxed text-muted-foreground">
                    No. There are no wrong answers \u2014 only honest ones. The quiz gives you a starting map, not a grade.
                    Answer truthfully and you\u2019ll get a more useful plan at the end.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="q2" className="px-4">
                  <AccordionTrigger className="text-left text-base font-medium">
                    What if I score low?
                  </AccordionTrigger>
                  <AccordionContent className="text-base leading-relaxed text-muted-foreground">
                    Then you\u2019re in the right place \u2014 TekSure was built for exactly this. A low score means the
                    guides and tools we recommend at the end will be the most useful to you. One small win per week adds up faster than you\u2019d expect.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="q3" className="px-4">
                  <AccordionTrigger className="text-left text-base font-medium">
                    Should I show my results to family?
                  </AccordionTrigger>
                  <AccordionContent className="text-base leading-relaxed text-muted-foreground">
                    Only if you want to. Some people love sharing their tier with the grandkids (it makes for great texting
                    material). Others prefer to keep their score private and quietly work through the starter guides. Both are fine.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="q4" className="px-4">
                  <AccordionTrigger className="text-left text-base font-medium">
                    Can I retake it?
                  </AccordionTrigger>
                  <AccordionContent className="text-base leading-relaxed text-muted-foreground">
                    Absolutely. We save your recent attempts on your device so you can see how your confidence grows over
                    weeks and months. A lot of people take it again after 30 days to see what has changed.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
          </section>
        </main>
        <Footer />
      </>
    );
  }

  /* ──────────────────── RENDER: Quiz ──────────────────── */

  if (phase === 'quiz') {
    const DomIcon = DOMAINS[currentQ.domain].icon;
    const picked = answers[currentQ.id];

    return (
      <>
        {SEO}
        <Navbar />
        <main className="min-h-screen bg-background">
          <section className="bg-gradient-to-r from-teal-600 via-teal-600 to-emerald-700 text-white">
            <div className="container py-6">
              <div className="flex items-center justify-between gap-3 mb-3">
                <div className="flex items-center gap-2">
                  <Smile className="h-5 w-5" aria-hidden="true" />
                  <span className="font-semibold">Tech Confidence Quiz</span>
                </div>
                <span className="text-sm text-white/90">
                  Question {currentIdx + 1} of {total}
                </span>
              </div>
              <Progress
                value={progressPct}
                className="h-3 bg-white/20 [&>div]:bg-white"
                aria-label={`Progress: ${Math.round(progressPct)} percent complete`}
              />
            </div>
          </section>

          <section className="container py-8 md:py-12">
            <div className="max-w-3xl mx-auto">
              <Card className="mb-6">
                <CardContent className="p-6">
                  <div className="flex items-center gap-2 flex-wrap mb-4">
                    <Badge variant="outline" className="text-xs">
                      <DomIcon className={`h-3.5 w-3.5 mr-1 ${DOMAINS[currentQ.domain].color}`} aria-hidden="true" />
                      {DOMAINS[currentQ.domain].label}
                    </Badge>
                    <Badge variant="secondary" className="text-xs">
                      {currentQ.scenario}
                    </Badge>
                  </div>
                  <h2 className="text-xl md:text-2xl font-bold leading-snug">{currentQ.prompt}</h2>
                  <p className="text-base text-muted-foreground mt-3">
                    Pick the answer that feels most honest. There\u2019s no wrong choice.
                  </p>
                </CardContent>
              </Card>

              <h3 className="text-lg font-semibold mb-3">How comfortable are you?</h3>
              <div className="grid gap-3" role="radiogroup" aria-label="Comfort level options">
                {CHOICES.map((c) => {
                  const isPicked = picked === c.score;
                  return (
                    <button
                      key={c.score}
                      type="button"
                      role="radio"
                      aria-checked={isPicked}
                      onClick={() => pick(c.score)}
                      className={`min-h-14 w-full text-left rounded-xl border-2 px-5 py-4 transition-all text-base leading-snug focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-500 focus-visible:ring-offset-2 ${
                        isPicked
                          ? 'border-teal-600 bg-teal-50 dark:bg-teal-950/30 shadow-sm'
                          : 'border-border bg-background hover:border-teal-400 hover:bg-muted/40'
                      }`}
                    >
                      <div className="flex items-start gap-3">
                        <span
                          className={`mt-0.5 h-7 w-7 shrink-0 rounded-full border-2 flex items-center justify-center text-sm font-semibold ${
                            isPicked
                              ? 'border-teal-600 bg-teal-600 text-white'
                              : 'border-muted-foreground/40 text-muted-foreground'
                          }`}
                          aria-hidden="true"
                        >
                          {c.score}
                        </span>
                        <div className="flex-1">
                          <p className="font-medium">{c.label}</p>
                          <p className="text-sm text-muted-foreground">{c.sub}</p>
                        </div>
                        {isPicked && (
                          <CheckCircle2 className="h-5 w-5 text-teal-600 shrink-0" aria-hidden="true" />
                        )}
                      </div>
                    </button>
                  );
                })}
              </div>

              <div className="mt-8 flex items-center justify-between gap-3 flex-wrap">
                <Button
                  variant="outline"
                  size="lg"
                  onClick={goBack}
                  disabled={currentIdx === 0}
                  className="min-h-14 text-base"
                >
                  <ArrowLeft className="mr-2 h-5 w-5" aria-hidden="true" />
                  Back
                </Button>
                <span className="text-sm text-muted-foreground" aria-live="polite">
                  {answeredCount} of {total} answered
                </span>
                {currentIdx < total - 1 ? (
                  <Button
                    size="lg"
                    onClick={goNext}
                    disabled={picked === undefined}
                    className="min-h-14 text-base bg-teal-600 hover:bg-teal-700 text-white"
                  >
                    Next question
                    <ArrowRight className="ml-2 h-5 w-5" aria-hidden="true" />
                  </Button>
                ) : (
                  <Button
                    size="lg"
                    onClick={finishQuiz}
                    disabled={!allAnswered}
                    className="min-h-14 text-base bg-teal-600 hover:bg-teal-700 text-white"
                  >
                    See my result
                    <Trophy className="ml-2 h-5 w-5" aria-hidden="true" />
                  </Button>
                )}
              </div>
            </div>
          </section>
        </main>
        <Footer />
      </>
    );
  }

  /* ──────────────────── RENDER: Results ──────────────────── */

  // Improvement banner compared to previous attempt
  const improvedBanner = (() => {
    if (attempts.length < 2) return null;
    const thisAttempt = attempts[attempts.length - 1];
    const prev = attempts[attempts.length - 2];
    if (thisAttempt.score > prev.score) {
      return `You improved from ${prev.score} to ${thisAttempt.score} \u2014 real progress.`;
    }
    if (thisAttempt.score === prev.score) {
      return `You matched your last score of ${prev.score}/100.`;
    }
    return null;
  })();

  // Personalized "start here" \u2014 take helpers from the 2 growing domains
  const personalized = growing.flatMap((g) =>
    DOMAINS[g.domain].helpers.map((h) => ({ ...h, domain: g.domain })),
  );

  const TierIcon = tier.icon;

  return (
    <>
      {SEO}
      <Navbar />
      <main className="min-h-screen bg-background">
        {/* Results hero */}
        <section className="bg-gradient-to-br from-teal-500 via-teal-600 to-emerald-700 text-white">
          <div className="container py-12 md:py-16">
            <div className="max-w-3xl mx-auto text-center">
              <div className="inline-flex items-center justify-center h-16 w-16 rounded-2xl bg-white/20 backdrop-blur mb-5">
                <TierIcon className="h-9 w-9" aria-hidden="true" />
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-3">Your Tech Confidence</h1>
              <div className="text-7xl md:text-8xl font-bold mb-2">
                {totalScore}
                <span className="text-4xl md:text-5xl text-white/70">/100</span>
              </div>
              <p className="text-lg md:text-xl text-white/95 max-w-xl mx-auto">{tier.tagline}</p>

              {improvedBanner && (
                <div className="mt-5 inline-flex items-center gap-2 rounded-full bg-white/20 backdrop-blur px-4 py-2 text-sm">
                  <Sparkles className="h-4 w-4" aria-hidden="true" />
                  {improvedBanner}
                </div>
              )}
            </div>
          </div>
        </section>

        <section className="container py-10 md:py-14">
          <div className="max-w-4xl mx-auto space-y-8">
            {/* Tier card */}
            <Card className={`border-2 ${tier.ring}`}>
              <CardContent className="p-6 flex items-start gap-4 flex-wrap">
                <div className="h-16 w-16 rounded-2xl bg-white/80 dark:bg-white/10 border border-current/20 flex items-center justify-center shrink-0">
                  <TierIcon className={`h-9 w-9 ${tier.text}`} aria-hidden="true" />
                </div>
                <div className="flex-1 min-w-[14rem]">
                  <p className="text-sm uppercase tracking-wide text-muted-foreground font-semibold">Your tier</p>
                  <h2 className={`text-2xl md:text-3xl font-bold ${tier.text}`}>{tier.name}</h2>
                  <p className="text-base text-muted-foreground mt-2 leading-relaxed">{tier.paragraph}</p>
                </div>
                <div className="flex gap-2 flex-wrap">
                  <Button size="lg" onClick={shareScore} className="min-h-14 text-base bg-teal-600 hover:bg-teal-700 text-white">
                    {shareCopied ? (
                      <>
                        <CheckCircle2 className="h-5 w-5 mr-2" aria-hidden="true" />
                        Link copied
                      </>
                    ) : (
                      <>
                        <Share2 className="h-5 w-5 mr-2" aria-hidden="true" />
                        Share your result
                      </>
                    )}
                  </Button>
                  <Button variant="outline" size="lg" onClick={restart} className="min-h-14 text-base">
                    <RotateCcw className="h-5 w-5 mr-2" aria-hidden="true" />
                    Take again
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Per-domain bar chart */}
            <div>
              <h2 className="text-2xl font-bold mb-4">Where you scored highest \u2014 and where you\u2019re growing</h2>
              <Card>
                <CardContent className="p-6 space-y-5">
                  {(Object.keys(DOMAINS) as Domain[]).map((d) => {
                    const meta = DOMAINS[d];
                    const Icon = meta.icon;
                    const value = domainTotals[d];
                    const pct = Math.round((value / 20) * 100);
                    return (
                      <div key={d}>
                        <div className="flex items-center gap-2 mb-2">
                          <Icon className={`h-5 w-5 ${meta.color}`} aria-hidden="true" />
                          <h3 className="font-semibold text-base">{meta.label}</h3>
                          <span className="ml-auto text-sm font-semibold tabular-nums">
                            {value}/20
                            <span className="text-muted-foreground font-normal ml-1">({pct}%)</span>
                          </span>
                        </div>
                        <Progress
                          value={pct}
                          className={`h-3 ${meta.barClass}`}
                          aria-label={`${meta.label}: ${pct} percent`}
                        />
                      </div>
                    );
                  })}
                </CardContent>
              </Card>
            </div>

            {/* Strongest + growing */}
            <div className="grid gap-4 md:grid-cols-2">
              <Card className="border-l-4 border-l-emerald-500">
                <CardContent className="p-5">
                  <h3 className="font-semibold text-lg mb-3 flex items-center gap-2">
                    <Sparkles className="h-5 w-5 text-emerald-600" aria-hidden="true" />
                    Your strongest two
                  </h3>
                  <ul className="space-y-2">
                    {strongest.map((s) => {
                      const meta = DOMAINS[s.domain];
                      const Icon = meta.icon;
                      return (
                        <li key={s.domain} className="flex items-center gap-2 text-base">
                          <Icon className={`h-4 w-4 ${meta.color}`} aria-hidden="true" />
                          <span className="font-medium">{meta.label}</span>
                          <span className="ml-auto text-sm text-muted-foreground">{s.total}/20</span>
                        </li>
                      );
                    })}
                  </ul>
                </CardContent>
              </Card>

              <Card className="border-l-4 border-l-amber-500">
                <CardContent className="p-5">
                  <h3 className="font-semibold text-lg mb-3 flex items-center gap-2">
                    <Rocket className="h-5 w-5 text-amber-600" aria-hidden="true" />
                    Growing areas
                  </h3>
                  <ul className="space-y-2">
                    {growing.map((g) => {
                      const meta = DOMAINS[g.domain];
                      const Icon = meta.icon;
                      return (
                        <li key={g.domain} className="flex items-center gap-2 text-base">
                          <Icon className={`h-4 w-4 ${meta.color}`} aria-hidden="true" />
                          <span className="font-medium">{meta.label}</span>
                          <span className="ml-auto text-sm text-muted-foreground">{g.total}/20</span>
                        </li>
                      );
                    })}
                  </ul>
                </CardContent>
              </Card>
            </div>

            {/* Start here \u2014 personalized tools/guides */}
            <div>
              <h2 className="text-2xl font-bold mb-4">Start here</h2>
              <p className="text-base text-muted-foreground mb-4 leading-relaxed">
                Based on your two growing areas, these are the tools and guides we\u2019d hand you first. Pick one and
                spend 15 minutes \u2014 you\u2019ll feel the difference.
              </p>
              <div className="grid gap-3 md:grid-cols-2">
                {personalized.map((h) => {
                  const meta = DOMAINS[h.domain];
                  const Icon = meta.icon;
                  return (
                    <Link
                      key={h.href}
                      to={h.href}
                      className="rounded-xl border p-5 hover:border-teal-500 hover:bg-muted/40 transition-colors"
                    >
                      <div className="flex items-start gap-3">
                        <div className="h-10 w-10 rounded-xl bg-muted flex items-center justify-center shrink-0">
                          <Icon className={`h-5 w-5 ${meta.color}`} aria-hidden="true" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center gap-2 mb-1 flex-wrap">
                            <Badge variant="outline" className="text-xs">{meta.label}</Badge>
                          </div>
                          <h3 className="font-semibold text-base mb-1">{h.title}</h3>
                          <p className="text-sm text-muted-foreground leading-relaxed">{h.description}</p>
                        </div>
                        <ArrowRight className="h-5 w-5 text-muted-foreground shrink-0" aria-hidden="true" />
                      </div>
                    </Link>
                  );
                })}
              </div>
            </div>

            {/* Encouragement */}
            <Alert className="border-teal-200 bg-teal-50/60 dark:border-teal-900/40 dark:bg-teal-950/20">
              <Heart className="h-5 w-5 text-teal-700" aria-hidden="true" />
              <AlertTitle className="text-base font-semibold">Wherever you are is fine. Everyone started somewhere.</AlertTitle>
              <AlertDescription className="text-base leading-relaxed mt-1">
                Tech confidence is a skill, not a personality trait. The people in the Tech Wizard tier all started at
                zero. Your next 5 points are closer than you think.
              </AlertDescription>
            </Alert>

            {/* Copy-link fallback */}
            <Card>
              <CardContent className="p-5 flex items-center gap-3 flex-wrap">
                <div className="h-10 w-10 rounded-xl bg-muted flex items-center justify-center shrink-0">
                  <Copy className="h-5 w-5 text-muted-foreground" aria-hidden="true" />
                </div>
                <div className="flex-1 min-w-[12rem]">
                  <p className="font-semibold">Share this quiz with a friend</p>
                  <p className="text-sm text-muted-foreground">
                    5 minutes of honest self-assessment beats a year of guessing.
                  </p>
                </div>
                <Button variant="outline" onClick={shareScore} className="min-h-14">
                  <Share2 className="h-5 w-5 mr-2" aria-hidden="true" />
                  {shareCopied ? 'Link copied' : 'Copy link'}
                </Button>
              </CardContent>
            </Card>

            {/* Attempts history */}
            {attempts.length > 1 && (
              <div>
                <h2 className="text-xl font-bold mb-3">Your attempt history</h2>
                <Card>
                  <CardContent className="p-4">
                    <ul className="divide-y">
                      {attempts
                        .slice()
                        .reverse()
                        .map((a, i) => (
                          <li
                            key={`${a.date}-${i}`}
                            className="py-2 flex items-center gap-3 text-sm flex-wrap"
                          >
                            <span className="text-muted-foreground w-40 shrink-0">
                              {new Date(a.date).toLocaleString(undefined, {
                                dateStyle: 'medium',
                                timeStyle: 'short',
                              })}
                            </span>
                            <Badge variant="outline">{a.tier}</Badge>
                            <span className="ml-auto font-semibold tabular-nums">{a.score}/100</span>
                          </li>
                        ))}
                    </ul>
                  </CardContent>
                </Card>
              </div>
            )}

            {/* Browse all */}
            <div className="grid gap-3 md:grid-cols-3">
              <Link
                to="/tools"
                className="rounded-xl border p-5 hover:border-teal-500 hover:bg-muted/40 transition-colors"
              >
                <Sparkles className="h-6 w-6 text-teal-600 mb-2" aria-hidden="true" />
                <h3 className="font-semibold mb-1">All TekSure tools</h3>
                <p className="text-sm text-muted-foreground">
                  99+ free tools across safety, learning, health, and more.
                </p>
              </Link>
              <Link
                to="/guides"
                className="rounded-xl border p-5 hover:border-teal-500 hover:bg-muted/40 transition-colors"
              >
                <Globe className="h-6 w-6 text-indigo-600 mb-2" aria-hidden="true" />
                <h3 className="font-semibold mb-1">Guide library</h3>
                <p className="text-sm text-muted-foreground">
                  Thousands of plain-English walkthroughs with pictures at every step.
                </p>
              </Link>
              <Link
                to="/ai-tutor"
                className="rounded-xl border p-5 hover:border-teal-500 hover:bg-muted/40 transition-colors"
              >
                <Star className="h-6 w-6 text-cyan-600 mb-2" aria-hidden="true" />
                <h3 className="font-semibold mb-1">AI Tutor</h3>
                <p className="text-sm text-muted-foreground">
                  Ask any tech question and get an answer matched to your comfort level.
                </p>
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

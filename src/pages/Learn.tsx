import { Link } from 'react-router-dom';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import {
  BookOpen,
  ArrowRight,
  Clock,
  Layers,
  Compass,
  Bookmark,
  HeartHandshake,
  Sparkles,
} from 'lucide-react';

type Course = {
  id: string;
  emoji: string;
  title: string;
  description: string;
  level: 'Beginner' | 'Intermediate' | 'Advanced';
  time: string;
  lessonCount: number;
  guides: { slug: string; title: string }[];
  accent: string;
};

const courses: Course[] = [
  {
    id: 'start-here',
    emoji: '',
    title: 'Start Here — Technology Basics',
    description:
      'Brand new to this? You are in exactly the right place. Eight short lessons that cover the essentials every device user should know — browsers, Wi-Fi, passwords, and email.',
    level: 'Beginner',
    time: '~2 hours',
    lessonCount: 8,
    accent: 'from-emerald-50 to-emerald-100/40 dark:from-emerald-950/30 dark:to-emerald-900/10',
    guides: [
      { slug: 'what-is-a-web-browser', title: 'What is a web browser?' },
      { slug: 'how-to-connect-wifi', title: 'How to connect to Wi-Fi' },
      { slug: 'how-to-create-strong-password', title: 'How to create a strong password' },
      { slug: 'how-to-send-email', title: 'How to send an email' },
      { slug: 'set-up-gmail-account', title: 'Set up a Gmail account' },
      { slug: 'what-is-a-chromebook', title: 'What is a Chromebook?' },
      { slug: 'clear-browser-history-cache', title: 'Clear your browser history and cache' },
      { slug: 'how-to-bookmark-websites', title: 'How to bookmark websites' },
    ],
  },
  {
    id: 'stay-safe',
    emoji: '',
    title: 'Stay Safe Online',
    description:
      'The ten lessons that will protect you most. Passwords, phishing, scams, two-factor authentication, public Wi-Fi, and what to do when something goes wrong.',
    level: 'Beginner',
    time: '~3 hours',
    lessonCount: 10,
    accent: 'from-blue-50 to-blue-100/40 dark:from-blue-950/30 dark:to-blue-900/10',
    guides: [
      { slug: 'how-to-create-strong-password', title: 'How to create a strong password' },
      { slug: 'how-to-spot-phishing-email', title: 'How to spot a phishing email' },
      { slug: 'how-to-spot-fake-online-reviews', title: 'How to spot fake online reviews' },
      { slug: 'set-up-two-factor-authentication', title: 'Set up two-factor authentication' },
      { slug: 'spot-bank-impersonation-scam', title: 'Spot a bank impersonation scam' },
      { slug: 'freeze-credit-identity-theft', title: 'Freeze your credit to prevent identity theft' },
      { slug: 'stay-safe-public-wifi', title: 'Stay safe on public Wi-Fi' },
      { slug: 'use-vpn-for-work', title: 'Use a VPN for work' },
      { slug: 'share-passwords-safely-family', title: 'Share passwords safely with family' },
      { slug: 'how-to-backup-iphone', title: 'How to back up your iPhone' },
    ],
  },
  {
    id: 'your-smartphone',
    emoji: '',
    title: 'Your Smartphone',
    description:
      'Nine lessons that turn your phone from a mystery into a trusted tool — screenshots, document scanning, spam blocking, mobile payments, and medication reminders.',
    level: 'Beginner',
    time: '~2.5 hours',
    lessonCount: 9,
    accent: 'from-violet-50 to-violet-100/40 dark:from-violet-950/30 dark:to-violet-900/10',
    guides: [
      { slug: 'set-up-new-ipad', title: 'Set up a new iPad' },
      { slug: 'how-to-take-screenshot', title: 'How to take a screenshot' },
      { slug: 'scan-documents-phone', title: 'Scan documents with your phone' },
      { slug: 'block-unwanted-calls-texts', title: 'Block unwanted calls and texts' },
      { slug: 'use-digital-boarding-pass', title: 'Use a digital boarding pass' },
      { slug: 'use-apple-pay-google-pay', title: 'Use Apple Pay and Google Pay' },
      { slug: 'set-up-medication-reminders', title: 'Set up medication reminders' },
      { slug: 'how-to-backup-iphone', title: 'How to back up your iPhone' },
      { slug: 'use-phone-abroad', title: 'Use your phone abroad' },
    ],
  },
  {
    id: 'your-computer',
    emoji: '',
    title: 'Your Computer',
    description:
      'Ten lessons for everyday computer life — documents, cloud storage, printing, electronic signatures, and the free alternatives that save you real money.',
    level: 'Beginner',
    time: '~3 hours',
    lessonCount: 10,
    accent: 'from-orange-50 to-orange-100/40 dark:from-orange-950/30 dark:to-orange-900/10',
    guides: [
      { slug: 'use-microsoft-word-online', title: 'Use Microsoft Word Online' },
      { slug: 'use-google-docs-writing', title: 'Use Google Docs for writing' },
      { slug: 'use-cloud-storage', title: 'Use cloud storage' },
      { slug: 'organize-digital-files-folders', title: 'Organize digital files and folders' },
      { slug: 'set-up-wireless-printer', title: 'Set up a wireless printer' },
      { slug: 'print-photos-at-home', title: 'Print photos at home' },
      { slug: 'sign-documents-electronically', title: 'Sign documents electronically' },
      { slug: 'free-alternatives-microsoft-office', title: 'Free alternatives to Microsoft Office' },
      { slug: 'clear-browser-history-cache', title: 'Clear browser history and cache' },
      { slug: 'use-browser-zoom-large-text', title: 'Use browser zoom and large text' },
    ],
  },
  {
    id: 'living-with-ai',
    emoji: '',
    title: 'Living with AI',
    description:
      'Six approachable lessons about using AI assistants in daily life — writing emails, getting cooking help, spotting AI-generated images, and using ChatGPT for practical things.',
    level: 'Intermediate',
    time: '~2 hours',
    lessonCount: 6,
    accent: 'from-rose-50 to-rose-100/40 dark:from-rose-950/30 dark:to-rose-900/10',
    guides: [
      { slug: 'use-chatgpt-daily-life', title: 'Use ChatGPT in daily life' },
      { slug: 'write-prompts-ai', title: 'Write better prompts for AI' },
      { slug: 'ai-image-generation', title: 'AI image generation basics' },
      { slug: 'spot-ai-generated-images', title: 'Spot AI-generated images' },
      { slug: 'use-ai-writing-assistant', title: 'Use an AI writing assistant' },
      { slug: 'ai-voice-assistants-basics', title: 'AI voice assistants — the basics' },
    ],
  },
];

const whyPoints = [
  {
    icon: Layers,
    title: 'One topic at a time',
    description:
      'Each course covers a single part of your life — safety, your phone, your computer. No jumping around, no overwhelm.',
  },
  {
    icon: Bookmark,
    title: 'Never forget where you left off',
    description:
      'Every lesson links to the next. Come back tomorrow and pick up exactly where you stopped — no hunting through menus.',
  },
  {
    icon: HeartHandshake,
    title: 'Zero pressure',
    description:
      'Take a week per lesson if you need to. Nothing is timed, nothing is graded, and nothing asks for a sign-up.',
  },
];

function levelBadgeClass(level: Course['level']) {
  switch (level) {
    case 'Beginner':
      return 'bg-emerald-100 text-emerald-800 dark:bg-emerald-900/40 dark:text-emerald-200 border-emerald-200';
    case 'Intermediate':
      return 'bg-amber-100 text-amber-800 dark:bg-amber-900/40 dark:text-amber-200 border-amber-200';
    case 'Advanced':
      return 'bg-rose-100 text-rose-800 dark:bg-rose-900/40 dark:text-rose-200 border-rose-200';
  }
}

export default function Learn() {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <SEOHead
        title="Learn Technology — Free Step-by-Step Courses | TekSure"
        description="Five free courses that teach digital literacy at your own pace. No sign-up required. Start with the basics, stay safe online, master your phone, your computer, and modern AI."
        path="/learn"
      />
      <Navbar />
      <main className="flex-1">
        {/* Hero */}
        <section className="border-b border-border">
          <div className="container max-w-3xl text-center py-16 md:py-20">
            <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-primary/10 mb-5">
              <BookOpen className="h-7 w-7 text-primary" />
            </div>
            <h1 className="text-3xl md:text-5xl font-bold tracking-tight text-primary mb-4">
              Learn Technology at Your Own Pace
            </h1>
            <p className="text-muted-foreground text-lg md:text-xl leading-relaxed max-w-2xl mx-auto">
              Five free courses. Start wherever feels comfortable. No sign-up required.
            </p>
            <div className="mt-6 flex items-center justify-center gap-2 text-sm text-muted-foreground">
              <Sparkles className="h-4 w-4 text-primary" />
              <span>43 lessons · written in plain language · updated monthly</span>
            </div>
          </div>
        </section>

        {/* Courses */}
        <section className="container max-w-6xl py-14">
          <div className="mb-8">
            <h2 className="text-2xl md:text-3xl font-bold text-primary mb-2">Pick a course</h2>
            <p className="text-muted-foreground">
              Each card shows the first lesson on click. You can leave and come back whenever you want.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {courses.map((course) => {
              const firstGuide = course.guides[0];
              return (
                <Card
                  key={course.id}
                  className={`relative overflow-hidden rounded-2xl border border-border bg-gradient-to-br ${course.accent} transition-all hover:shadow-md hover:-translate-y-0.5`}
                >
                  <CardContent className="p-6 flex flex-col h-full">
                    <div className="flex items-start justify-between mb-4">
                      <div className="text-4xl leading-none" aria-hidden="true">
                        {course.emoji}
                      </div>
                      <Badge
                        variant="outline"
                        className={`text-xs ${levelBadgeClass(course.level)}`}
                      >
                        {course.level}
                      </Badge>
                    </div>

                    <h3 className="text-lg font-bold text-foreground mb-2 leading-snug">
                      {course.title}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                      {course.description}
                    </p>

                    <div className="flex items-center gap-4 text-xs text-muted-foreground mb-5">
                      <span className="inline-flex items-center gap-1.5">
                        <Clock className="h-3.5 w-3.5" />
                        {course.time}
                      </span>
                      <span className="inline-flex items-center gap-1.5">
                        <BookOpen className="h-3.5 w-3.5" />
                        {course.lessonCount} lessons
                      </span>
                    </div>

                    <div className="mb-5 flex-1">
                      <div className="text-xs font-semibold text-foreground/70 uppercase tracking-wider mb-2">
                        What you'll learn
                      </div>
                      <ol className="space-y-1.5">
                        {course.guides.slice(0, 4).map((g, i) => (
                          <li
                            key={g.slug}
                            className="text-xs text-muted-foreground flex items-start gap-2"
                          >
                            <span className="w-4 h-4 rounded-full bg-background border border-border flex items-center justify-center text-[10px] font-semibold shrink-0 mt-0.5">
                              {i + 1}
                            </span>
                            <span className="leading-snug">{g.title}</span>
                          </li>
                        ))}
                        {course.guides.length > 4 && (
                          <li className="text-xs text-muted-foreground/80 pl-6">
                            + {course.guides.length - 4} more lesson
                            {course.guides.length - 4 === 1 ? '' : 's'}
                          </li>
                        )}
                      </ol>
                    </div>

                    <Button
                      asChild
                      className="w-full rounded-xl bg-primary text-primary-foreground hover:bg-primary/90 gap-2"
                    >
                      <Link to={`/guides/${firstGuide.slug}`}>
                        Start lesson 1
                        <ArrowRight className="h-4 w-4" />
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </section>

        {/* Why learning paths */}
        <section className="bg-muted/30 border-y border-border">
          <div className="container max-w-5xl py-14">
            <div className="mb-8 text-center">
              <h2 className="text-2xl md:text-3xl font-bold text-primary mb-2">
                Why learning paths?
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                We could have given you 1,200 guides and a search box. Instead, we built paths —
                because direction beats volume when you are learning something new.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-5">
              {whyPoints.map((point) => (
                <Card
                  key={point.title}
                  className="rounded-2xl border border-border bg-card"
                >
                  <CardContent className="p-6">
                    <div className="rounded-xl bg-primary/10 w-11 h-11 flex items-center justify-center mb-4">
                      <point.icon className="h-5 w-5 text-primary" />
                    </div>
                    <h3 className="font-semibold text-foreground mb-2">{point.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {point.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Browse CTA */}
        <section className="container max-w-4xl py-14">
          <Card className="rounded-2xl border border-border bg-card">
            <CardContent className="p-8 md:p-10 text-center">
              <Compass className="h-8 w-8 text-primary mx-auto mb-4" />
              <h2 className="text-xl md:text-2xl font-bold text-primary mb-2">
                Prefer to browse instead?
              </h2>
              <p className="text-muted-foreground mb-6 max-w-xl mx-auto">
                If you have a specific question in mind, our full guide library has more than 1,200
                answers organized by topic, device, and difficulty.
              </p>
              <div className="flex gap-3 justify-center flex-wrap">
                <Button
                  asChild
                  size="lg"
                  className="rounded-xl bg-primary text-primary-foreground hover:bg-primary/90 gap-2"
                >
                  <Link to="/guides">
                    Browse all guides
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg" className="rounded-xl">
                  <Link to="/tools">See our free tools</Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        </section>
      </main>
      <Footer />
    </div>
  );
}

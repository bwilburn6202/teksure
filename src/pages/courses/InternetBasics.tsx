import { useState, useEffect, useMemo, useRef } from 'react';
import { Link } from 'react-router-dom';
import {
  Globe,
  Compass,
  Mail,
  ShieldCheck,
  LifeBuoy,
  CheckCircle2,
  Circle,
  ArrowRight,
  ArrowUp,
  Trophy,
  BookOpen,
  Sparkles,
  Users,
} from 'lucide-react';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';

const STORAGE_KEY = 'teksure:course:internet-basics:completed';

type LessonMeta = {
  id: string;
  number: number;
  icon: typeof Globe;
  title: string;
  subtitle: string;
  accent: string; // gradient/bg utility classes
  border: string;
  iconBg: string;
  iconText: string;
};

const lessons: LessonMeta[] = [
  {
    id: 'lesson-1',
    number: 1,
    icon: Globe,
    title: 'What Is the Internet?',
    subtitle: 'The big picture, in plain English.',
    accent: 'from-sky-50 to-blue-50 dark:from-sky-950/30 dark:to-blue-950/30',
    border: 'border-sky-200 dark:border-sky-800/40',
    iconBg: 'bg-sky-100 dark:bg-sky-900/40',
    iconText: 'text-sky-600 dark:text-sky-400',
  },
  {
    id: 'lesson-2',
    number: 2,
    icon: Compass,
    title: 'Web Browsers — Your Door to the Internet',
    subtitle: 'How you actually get to websites.',
    accent: 'from-violet-50 to-fuchsia-50 dark:from-violet-950/30 dark:to-fuchsia-950/30',
    border: 'border-violet-200 dark:border-violet-800/40',
    iconBg: 'bg-violet-100 dark:bg-violet-900/40',
    iconText: 'text-violet-600 dark:text-violet-400',
  },
  {
    id: 'lesson-3',
    number: 3,
    icon: Mail,
    title: 'Email — Sending Messages Online',
    subtitle: 'The first app most people use.',
    accent: 'from-emerald-50 to-teal-50 dark:from-emerald-950/30 dark:to-teal-950/30',
    border: 'border-emerald-200 dark:border-emerald-800/40',
    iconBg: 'bg-emerald-100 dark:bg-emerald-900/40',
    iconText: 'text-emerald-600 dark:text-emerald-400',
  },
  {
    id: 'lesson-4',
    number: 4,
    icon: ShieldCheck,
    title: 'Staying Safe Online',
    subtitle: 'Simple rules that stop almost every scam.',
    accent: 'from-rose-50 to-amber-50 dark:from-rose-950/30 dark:to-amber-950/30',
    border: 'border-rose-200 dark:border-rose-800/40',
    iconBg: 'bg-rose-100 dark:bg-rose-900/40',
    iconText: 'text-rose-600 dark:text-rose-400',
  },
  {
    id: 'lesson-5',
    number: 5,
    icon: LifeBuoy,
    title: "Getting Help When You're Stuck",
    subtitle: "You don't have to figure it out alone.",
    accent: 'from-indigo-50 to-sky-50 dark:from-indigo-950/30 dark:to-sky-950/30',
    border: 'border-indigo-200 dark:border-indigo-800/40',
    iconBg: 'bg-indigo-100 dark:bg-indigo-900/40',
    iconText: 'text-indigo-600 dark:text-indigo-400',
  },
];

function useCompleted() {
  const [completed, setCompleted] = useState<Record<string, boolean>>({});

  // Load from localStorage once on mount (guarded for SSR)
  useEffect(() => {
    if (typeof window === 'undefined') return;
    try {
      const raw = window.localStorage.getItem(STORAGE_KEY);
      if (raw) setCompleted(JSON.parse(raw));
    } catch {
      // ignore
    }
  }, []);

  // Persist
  useEffect(() => {
    if (typeof window === 'undefined') return;
    try {
      window.localStorage.setItem(STORAGE_KEY, JSON.stringify(completed));
    } catch {
      // ignore
    }
  }, [completed]);

  const toggle = (id: string) =>
    setCompleted((c) => ({ ...c, [id]: !c[id] }));

  const markDone = (id: string) =>
    setCompleted((c) => ({ ...c, [id]: true }));

  const reset = () => setCompleted({});

  return { completed, toggle, markDone, reset };
}

function scrollToId(id: string) {
  if (typeof document === 'undefined') return;
  const el = document.getElementById(id);
  if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

type LessonShellProps = {
  lesson: LessonMeta;
  isDone: boolean;
  onToggleDone: () => void;
  onNext?: () => void;
  nextLabel?: string;
  children: React.ReactNode;
};

function LessonShell({ lesson, isDone, onToggleDone, onNext, nextLabel, children }: LessonShellProps) {
  const Icon = lesson.icon;
  return (
    <section id={lesson.id} className="scroll-mt-24">
      <Card className={`overflow-hidden border ${lesson.border}`}>
        <div className={`bg-gradient-to-br ${lesson.accent} px-6 md:px-10 py-8 md:py-10 border-b ${lesson.border}`}>
          <div className="flex items-start gap-4 md:gap-5">
            <div className={`h-14 w-14 md:h-16 md:w-16 rounded-2xl ${lesson.iconBg} ${lesson.iconText} flex items-center justify-center shrink-0 shadow-sm`}>
              <Icon className="h-7 w-7 md:h-8 md:w-8" aria-hidden="true" />
            </div>
            <div className="min-w-0">
              <Badge variant="secondary" className="mb-2 text-xs font-medium">
                Lesson {lesson.number} of {lessons.length}
              </Badge>
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold tracking-tight leading-tight">
                {lesson.title}
              </h2>
              <p className="text-base md:text-lg text-muted-foreground mt-2">
                {lesson.subtitle}
              </p>
            </div>
          </div>
        </div>
        <CardContent className="px-6 md:px-10 py-8 md:py-10">
          <div className="prose-lesson space-y-6 text-[17px] md:text-[18px] leading-relaxed text-foreground/90">
            {children}
          </div>

          <div className="mt-10 pt-6 border-t border-border/60 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <button
              type="button"
              onClick={onToggleDone}
              className={`inline-flex items-center gap-2 px-4 py-2 rounded-xl border text-sm font-medium transition-colors ${
                isDone
                  ? 'border-emerald-300 dark:border-emerald-700/50 bg-emerald-50 dark:bg-emerald-950/40 text-emerald-700 dark:text-emerald-300'
                  : 'border-border bg-card hover:bg-muted text-foreground'
              }`}
              aria-pressed={isDone}
            >
              {isDone ? (
                <>
                  <CheckCircle2 className="h-4 w-4" /> Lesson complete
                </>
              ) : (
                <>
                  <Circle className="h-4 w-4" /> Mark lesson complete
                </>
              )}
            </button>
            {onNext && (
              <Button onClick={onNext} className="gap-2 rounded-xl h-11 px-5">
                {nextLabel ?? 'Continue'} <ArrowRight className="h-4 w-4" />
              </Button>
            )}
          </div>
        </CardContent>
      </Card>
    </section>
  );
}

const InternetBasics = () => {
  const { completed, toggle, markDone, reset } = useCompleted();

  const doneCount = useMemo(
    () => lessons.filter((l) => completed[l.id]).length,
    [completed]
  );
  const percent = Math.round((doneCount / lessons.length) * 100);
  const allDone = doneCount === lessons.length;

  // Scroll-to-top button visibility
  const [showTop, setShowTop] = useState(false);
  useEffect(() => {
    if (typeof window === 'undefined') return;
    const onScroll = () => setShowTop(window.scrollY > 600);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const goNext = (currentIdx: number) => {
    markDone(lessons[currentIdx].id);
    const next = lessons[currentIdx + 1];
    if (next) {
      setTimeout(() => scrollToId(next.id), 60);
    } else {
      setTimeout(() => scrollToId('congrats'), 60);
    }
  };

  const tocRef = useRef<HTMLDivElement>(null);

  return (
    <div className="min-h-screen bg-background">
      <SEOHead
        title="Internet Basics Course — Learn the Internet from Zero | TekSure"
        description="A free 5-lesson internet basics course for complete beginners. Learn what the internet is, how to use a web browser, send email, stay safe online, and get help. Plain English, no jargon."
        path="/courses/internet-basics"
        jsonLd={[
          {
            '@context': 'https://schema.org',
            '@type': 'Course',
            name: 'Internet Basics — Everything You Need to Know',
            description:
              'A free 5-lesson course for anyone starting from zero. Learn what the internet is, how browsers work, how to send email, how to stay safe, and where to get help.',
            provider: {
              '@type': 'Organization',
              name: 'TekSure',
              sameAs: 'https://teksure.com',
            },
            inLanguage: 'en',
            isAccessibleForFree: true,
            educationalLevel: 'Beginner',
            url: 'https://teksure.com/courses/internet-basics',
          },
        ]}
      />
      <Navbar />

      {/* Hero */}
      <section className="relative overflow-hidden border-b border-border/40">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[900px] h-[500px] rounded-full bg-primary/[0.05] blur-[100px]" />
        </div>
        <div className="container relative pt-20 pb-14 md:pt-28 md:pb-20">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/[0.08] border border-primary/[0.12] text-sm text-primary font-medium mb-6">
              <Sparkles className="h-3.5 w-3.5" />
              Free 5-lesson course — no sign-up needed
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.05] mb-5" style={{ letterSpacing: '-0.03em' }}>
              Internet Basics — <span className="text-primary">Everything You Need to Know</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed mb-8">
              A free 5-lesson course for anyone starting from zero. Work through it in one sitting or come back each day — your progress is automatic.
            </p>

            <div className="flex flex-wrap items-center justify-center gap-3">
              <Button
                size="lg"
                className="gap-2 rounded-xl h-[52px] px-8 text-base"
                onClick={() => scrollToId('lesson-1')}
              >
                Start Lesson 1 <ArrowRight className="h-4 w-4" />
              </Button>
              <Button asChild variant="outline" size="lg" className="gap-2 rounded-xl h-[52px] px-8 text-base">
                <Link to="/learn"><BookOpen className="h-4 w-4" /> Browse all learning paths</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Progress + Table of Contents */}
      <section className="py-10 md:py-14 border-b border-border/40 bg-muted/30">
        <div className="container">
          <div className="max-w-3xl mx-auto">
            <Card className="border border-border/70">
              <CardContent className="p-6 md:p-8">
                <div className="flex items-center justify-between gap-4 mb-4">
                  <div>
                    <h2 className="text-lg md:text-xl font-semibold">Your progress</h2>
                    <p className="text-sm text-muted-foreground mt-0.5">
                      {doneCount} of {lessons.length} lessons complete · {percent}% done
                    </p>
                  </div>
                  {doneCount > 0 && (
                    <button
                      type="button"
                      onClick={reset}
                      className="text-xs text-muted-foreground hover:text-primary underline underline-offset-2"
                    >
                      Reset progress
                    </button>
                  )}
                </div>
                <Progress value={percent} className="h-2.5 mb-6" aria-label="Course progress" />

                <div ref={tocRef} className="space-y-2">
                  <p className="text-xs uppercase tracking-wider text-muted-foreground font-semibold mb-3">
                    Table of contents
                  </p>
                  <ul className="space-y-1.5">
                    {lessons.map((l) => {
                      const isDone = !!completed[l.id];
                      const Icon = l.icon;
                      return (
                        <li key={l.id}>
                          <button
                            type="button"
                            onClick={() => scrollToId(l.id)}
                            className="w-full flex items-center gap-3 p-3 rounded-xl hover:bg-muted/70 transition-colors text-left"
                          >
                            <div className={`h-9 w-9 rounded-lg ${l.iconBg} ${l.iconText} flex items-center justify-center shrink-0`}>
                              <Icon className="h-[18px] w-[18px]" aria-hidden="true" />
                            </div>
                            <div className="flex-1 min-w-0">
                              <p className="font-medium text-sm md:text-[15px]">
                                Lesson {l.number}: {l.title}
                              </p>
                              <p className="text-xs text-muted-foreground truncate">{l.subtitle}</p>
                            </div>
                            {isDone ? (
                              <CheckCircle2 className="h-5 w-5 text-emerald-500 shrink-0" aria-label="Complete" />
                            ) : (
                              <Circle className="h-5 w-5 text-muted-foreground/40 shrink-0" aria-hidden="true" />
                            )}
                          </button>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Lessons */}
      <section className="py-12 md:py-16">
        <div className="container">
          <div className="max-w-3xl mx-auto space-y-10 md:space-y-14">
            {/* Lesson 1 */}
            <LessonShell
              lesson={lessons[0]}
              isDone={!!completed[lessons[0].id]}
              onToggleDone={() => toggle(lessons[0].id)}
              onNext={() => goNext(0)}
              nextLabel="Ready to move on — Lesson 2"
            >
              <p>
                The internet is a giant network that connects billions of computers around the world so they can share information. Think of it like a postal system — but instead of letters, you send pieces of information to and from computers anywhere on Earth, in seconds.
              </p>
              <p>
                When you open a website, send an email, or watch a video, your device is quietly reaching out across that network, pulling bits of information from another computer somewhere else, and showing it to you. You don't need to understand the wires and towers behind it all. You just need to know a few simple ideas to feel comfortable.
              </p>
              <p>
                The internet is not one thing you can point to. It's made of many smaller pieces: your device, the cables or signals that carry information, huge computers called <em>servers</em> that store websites, and the software that ties it all together. Every time you click a link, you're tapping into that web of connections.
              </p>
              <p>
                You don't have to be technical to use the internet well. Most of it comes down to learning a handful of everyday tools — a web browser, email, and a few safety habits. That's what the rest of this course will cover.
              </p>

              <h3 className="text-xl font-semibold tracking-tight mt-8">How it works (the short version)</h3>
              <p>
                When you type a website name, your device sends a small request over the internet. That request travels — often in fractions of a second — to a server somewhere in the world. The server sends back the web page, and your device displays it. That's really all that's happening, just very quickly and very often.
              </p>

              <h3 className="text-xl font-semibold tracking-tight mt-8">What you need to use it</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>
                  <strong>A device</strong> — a phone, tablet, laptop, or desktop computer.
                </li>
                <li>
                  <strong>An internet connection</strong> — either Wi-Fi at home or in a public place, or cell data on your phone.
                </li>
                <li>
                  <strong>A browser or app</strong> — the software you actually tap or click to see things (more on this in Lesson 2).
                </li>
              </ul>

              <h3 className="text-xl font-semibold tracking-tight mt-8">Key terms in plain English</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>
                  <strong>Website</strong> — a place on the internet you can visit, like teksure.com. Every website has an <em>address</em> (also called a URL).
                </li>
                <li>
                  <strong>Browser</strong> — the app you use to open websites. Common ones are Chrome, Safari, Firefox, and Edge.
                </li>
                <li>
                  <strong>Wi-Fi</strong> — a way for your device to connect to the internet without wires, usually from a box in your home.
                </li>
                <li>
                  <strong>Router</strong> — that box. It's the little device (often with blinking lights) that brings internet into your home and shares it wirelessly with your phone, laptop, and TV.
                </li>
              </ul>

              <div className="rounded-xl border border-primary/20 bg-primary/5 p-5 mt-8">
                <p className="text-sm md:text-base m-0">
                  <strong>Quick Tip:</strong> You don't have to memorize any of this. If a word confuses you later, you can always check our{' '}
                  <Link to="/glossary" className="text-primary font-medium underline underline-offset-2">glossary</Link>.
                </p>
              </div>
            </LessonShell>

            {/* Lesson 2 */}
            <LessonShell
              lesson={lessons[1]}
              isDone={!!completed[lessons[1].id]}
              onToggleDone={() => toggle(lessons[1].id)}
              onNext={() => goNext(1)}
              nextLabel="Continue to Lesson 3"
            >
              <p>
                A <strong>web browser</strong> is the app you use to open and read websites. It's the door that takes you into the internet. Without a browser, your device can connect to the internet but can't really show you web pages.
              </p>
              <p>
                The four browsers you'll see most often are:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>Chrome</strong> — made by Google. Works on almost every device.</li>
                <li><strong>Safari</strong> — made by Apple. Comes already installed on iPhones, iPads, and Macs.</li>
                <li><strong>Firefox</strong> — a free, privacy-friendly browser you can download.</li>
                <li><strong>Edge</strong> — made by Microsoft. Comes already installed on Windows computers.</li>
              </ul>
              <p>
                You only need one. Pick whichever came with your device and you'll be fine.
              </p>

              <h3 className="text-xl font-semibold tracking-tight mt-8">How to open a browser</h3>
              <p>
                Look at the home screen of your phone, tablet, or computer and find an icon that matches one of the names above. Tap or click it. A new window will open, usually with a blank page or a search box in the middle. You're in the browser.
              </p>

              <h3 className="text-xl font-semibold tracking-tight mt-8">The address bar</h3>
              <p>
                At the top of every browser window is a long text box called the <strong>address bar</strong>. It has two jobs: it shows you the address of the website you're currently on, and it's also where you type to go somewhere new.
              </p>
              <p>
                You can do two things with the address bar:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>
                  <strong>Type a URL</strong> — a full website address like <code className="px-1.5 py-0.5 bg-muted rounded text-sm">teksure.com</code>. Press Enter and the browser goes straight there.
                </li>
                <li>
                  <strong>Type a search</strong> — just words like "how to cook rice". Press Enter and the browser shows search results from Google (or your default search engine).
                </li>
              </ul>

              <h3 className="text-xl font-semibold tracking-tight mt-8">Links</h3>
              <p>
                A <strong>link</strong> is a piece of text (or sometimes a picture) that takes you to another page when you click it. Links are usually a different color — often blue — and sometimes underlined. If you move your mouse over a link, the arrow often turns into a little pointing hand. That's how you know you can click it.
              </p>

              <h3 className="text-xl font-semibold tracking-tight mt-8">Bookmarks</h3>
              <p>
                A <strong>bookmark</strong> is like a shortcut. When you find a page you'll want to come back to, you can save it as a bookmark and open it with one click instead of typing the address again.
              </p>
              <p>
                Learn how step by step in our full guide:{' '}
                <Link to="/guides/how-to-bookmark-websites" className="text-primary font-medium underline underline-offset-2">
                  How to bookmark websites
                </Link>.
              </p>

              <h3 className="text-xl font-semibold tracking-tight mt-8">Tabs — multiple pages at once</h3>
              <p>
                A <strong>tab</strong> is a single web page inside your browser window. You can open many tabs at the same time, each with a different website, and switch between them by clicking along the top. It's like having several magazines open in front of you at once.
              </p>
              <p>
                To open a new tab, look for a small "+" button near the top of the browser. To close a tab, click the little "×" on the tab itself.
              </p>

              <h3 className="text-xl font-semibold tracking-tight mt-8">Back, forward, and refresh</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>
                  <strong>Back arrow (←)</strong> — takes you to the page you were on before.
                </li>
                <li>
                  <strong>Forward arrow (→)</strong> — takes you back to where you were after pressing the back button.
                </li>
                <li>
                  <strong>Refresh (circular arrow)</strong> — reloads the current page. Use this if a page looks broken or frozen.
                </li>
              </ul>

              <div className="rounded-xl border border-primary/20 bg-primary/5 p-5 mt-8">
                <p className="text-sm md:text-base m-0">
                  <strong>Quick Tip:</strong> If a website ever looks strange, try pressing Refresh first. It fixes most small glitches.
                </p>
              </div>
            </LessonShell>

            {/* Lesson 3 */}
            <LessonShell
              lesson={lessons[2]}
              isDone={!!completed[lessons[2].id]}
              onToggleDone={() => toggle(lessons[2].id)}
              onNext={() => goNext(2)}
              nextLabel="Continue to Lesson 4"
            >
              <p>
                <strong>Email</strong> (short for "electronic mail") is a way to send written messages from one person to another over the internet. It works a lot like a letter, but it arrives in seconds, costs nothing, and can include pictures, documents, or links.
              </p>
              <p>
                Email is different from <strong>texting</strong>. Text messages (also called SMS) go from phone number to phone number through your cell carrier. Email goes from an <em>email address</em> (like <code className="px-1.5 py-0.5 bg-muted rounded text-sm">name@gmail.com</code>) to another email address over the internet. Email is usually longer, more formal, and better for things like bills, receipts, and work.
              </p>

              <h3 className="text-xl font-semibold tracking-tight mt-8">The parts of an email</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>
                  <strong>To</strong> — the email address of the person you're writing to.
                </li>
                <li>
                  <strong>Subject</strong> — a short headline that tells the reader what the message is about.
                </li>
                <li>
                  <strong>Body</strong> — the main message itself.
                </li>
                <li>
                  <strong>Attachments</strong> — extra files you add, like a photo or a PDF.
                </li>
              </ul>

              <h3 className="text-xl font-semibold tracking-tight mt-8">How to send an email</h3>
              <ol className="list-decimal pl-6 space-y-2">
                <li>Open your email app or go to your email website (like gmail.com).</li>
                <li>Click the <strong>Compose</strong> or <strong>New message</strong> button — usually a "+" or a pencil icon.</li>
                <li>Type the recipient's email address in the <strong>To</strong> field.</li>
                <li>Add a short <strong>Subject</strong> so they know what to expect.</li>
                <li>Write your message in the big box underneath.</li>
                <li>Click <strong>Send</strong>. That's it — your message is delivered.</li>
              </ol>
              <p>
                Step-by-step with pictures:{' '}
                <Link to="/guides/set-up-gmail-account" className="text-primary font-medium underline underline-offset-2">Set up a Gmail account</Link>{' '}
                and{' '}
                <Link to="/guides/send-receive-email" className="text-primary font-medium underline underline-offset-2">Send and receive email</Link>.
              </p>

              <h3 className="text-xl font-semibold tracking-tight mt-8">Reply vs. forward</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>
                  <strong>Reply</strong> sends a message back to the person who wrote to you. Use it for conversations.
                </li>
                <li>
                  <strong>Reply all</strong> sends your answer to everyone on the original message. Use carefully — sometimes you only want to reply to one person.
                </li>
                <li>
                  <strong>Forward</strong> sends the message you received on to a <em>different</em> person. Use it to pass along information.
                </li>
              </ul>

              <h3 className="text-xl font-semibold tracking-tight mt-8">Attachments explained</h3>
              <p>
                An <strong>attachment</strong> is a file you send along with your email — a photo, a scanned document, a PDF, a spreadsheet. Look for a paperclip icon when writing a message. Click it, choose the file from your device, and it'll ride along with your email.
              </p>
              <p>
                Full guide:{' '}
                <Link to="/guides/manage-email-attachments" className="text-primary font-medium underline underline-offset-2">
                  Manage email attachments
                </Link>.
              </p>

              <h3 className="text-xl font-semibold tracking-tight mt-8">Signing out on shared computers</h3>
              <p>
                If you check email on a library computer, a friend's laptop, or any device that isn't yours, always <strong>sign out</strong> when you're finished. If you don't, the next person can read — and send from — your account. Look for your name or profile icon in the top corner, click it, and choose <strong>Sign out</strong> or <strong>Log out</strong>.
              </p>

              <div className="rounded-xl border border-primary/20 bg-primary/5 p-5 mt-8">
                <p className="text-sm md:text-base m-0">
                  <strong>Quick Tip:</strong> If an email looks odd, has lots of spelling mistakes, or asks for money or passwords — don't reply. Delete it. You'll learn more in the next lesson.
                </p>
              </div>
            </LessonShell>

            {/* Lesson 4 */}
            <LessonShell
              lesson={lessons[3]}
              isDone={!!completed[lessons[3].id]}
              onToggleDone={() => toggle(lessons[3].id)}
              onNext={() => goNext(3)}
              nextLabel="Continue to Lesson 5"
            >
              <p>
                The internet is a wonderful place — but like any public space, it has some bad actors. The good news: a few simple habits stop almost every scam before it gets anywhere near you.
              </p>

              <h3 className="text-xl font-semibold tracking-tight mt-8">The 3 golden rules</h3>
              <div className="grid gap-3 not-prose">
                <div className="rounded-xl border border-rose-200 dark:border-rose-800/40 bg-rose-50/60 dark:bg-rose-950/20 p-5">
                  <p className="font-semibold mb-1 text-rose-700 dark:text-rose-300">1. Don't trust urgent messages.</p>
                  <p className="text-[16px] leading-relaxed m-0 text-foreground/90">
                    Real companies and government agencies don't demand instant action. If a message says "your account will be closed in 1 hour" or "pay right now or go to jail" — it's almost certainly a scam.
                  </p>
                </div>
                <div className="rounded-xl border border-amber-200 dark:border-amber-800/40 bg-amber-50/60 dark:bg-amber-950/20 p-5">
                  <p className="font-semibold mb-1 text-amber-700 dark:text-amber-300">2. Don't click unknown links.</p>
                  <p className="text-[16px] leading-relaxed m-0 text-foreground/90">
                    If you don't recognize the sender, don't click the link. Go straight to the company's real website by typing it into your browser instead.
                  </p>
                </div>
                <div className="rounded-xl border border-violet-200 dark:border-violet-800/40 bg-violet-50/60 dark:bg-violet-950/20 p-5">
                  <p className="font-semibold mb-1 text-violet-700 dark:text-violet-300">3. Don't share passwords.</p>
                  <p className="text-[16px] leading-relaxed m-0 text-foreground/90">
                    No legitimate company will ever ask for your password by email, text, or phone. Not your bank. Not Amazon. Not Microsoft. Ever.
                  </p>
                </div>
              </div>

              <h3 className="text-xl font-semibold tracking-tight mt-8">Spotting phishing</h3>
              <p>
                <strong>Phishing</strong> is when a scammer pretends to be a company you trust — a bank, a delivery service, even a friend — to trick you into clicking a link, handing over a password, or sending money. Here's what to watch for:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>A sender address that looks "off" (like <code className="px-1.5 py-0.5 bg-muted rounded text-sm">support@amaz0n-help.co</code> instead of amazon.com).</li>
                <li>Spelling or grammar mistakes that a real company wouldn't make.</li>
                <li>A link that claims to be a company but goes somewhere else when you hover over it.</li>
                <li>Pressure to act <em>right now</em>.</li>
                <li>Unexpected attachments, especially zip files or documents asking you to "enable macros".</li>
              </ul>

              <h3 className="text-xl font-semibold tracking-tight mt-8">Strong passwords</h3>
              <p>
                A strong password is long and hard to guess. Use at least 12 characters. Mix in numbers and symbols. Avoid obvious things like "password", your birthday, or your pet's name. And never reuse the same password across different sites.
              </p>
              <p>
                Full guide:{' '}
                <Link to="/guides/how-to-create-strong-password" className="text-primary font-medium underline underline-offset-2">
                  How to create a strong password
                </Link>.
                Or let us generate one for you:{' '}
                <Link to="/tools/password-generator" className="text-primary font-medium underline underline-offset-2">
                  Password generator
                </Link>.
              </p>
              <p>
                You can also check whether your email has been caught up in a past data leak with our{' '}
                <Link to="/tools/data-breach-checker" className="text-primary font-medium underline underline-offset-2">
                  Data Breach Checker
                </Link>.
              </p>

              <h3 className="text-xl font-semibold tracking-tight mt-8">Two-factor authentication</h3>
              <p>
                <strong>Two-factor authentication</strong> (often called 2FA) adds a second lock to your account. After you type your password, the site asks for a short code sent to your phone or generated by an app. Even if a scammer steals your password, they still can't get in without that code. Turn it on for your email, your bank, and anywhere else that offers it.
              </p>

              <h3 className="text-xl font-semibold tracking-tight mt-8">Recognizing scam websites</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>Check the address bar. Real websites use the company's exact name (amazon.com, not amaz0n-deals.net).</li>
                <li>Look for the small padlock icon next to the address. No padlock means don't type anything sensitive.</li>
                <li>If a deal seems unbelievable, it probably is.</li>
                <li>Pop-ups shouting about viruses are almost always fake. Close the tab.</li>
              </ul>

              <p>
                Want more help? Visit our{' '}
                <Link to="/scam-defense" className="text-primary font-medium underline underline-offset-2">
                  Scam Defense Center
                </Link>{' '}
                for the latest threats, warning signs, and recovery help.
              </p>
            </LessonShell>

            {/* Lesson 5 */}
            <LessonShell
              lesson={lessons[4]}
              isDone={!!completed[lessons[4].id]}
              onToggleDone={() => toggle(lessons[4].id)}
              onNext={() => goNext(4)}
              nextLabel="Finish the course"
            >
              <p>
                Everyone gets stuck. Even people who work with computers all day get stuck. The difference is knowing where to look for help — so that "I don't understand this" turns into "OK, I figured it out" in a few minutes.
              </p>

              <h3 className="text-xl font-semibold tracking-tight mt-8">TekSure Brain</h3>
              <p>
                <Link to="/brain" className="text-primary font-medium underline underline-offset-2">
                  TekSure Brain
                </Link>{' '}
                is a search tool built on top of our 1,200+ guides. Ask it a question in plain English ("how do I change my WiFi password") and it'll pull the most relevant answers for you in seconds.
              </p>

              <h3 className="text-xl font-semibold tracking-tight mt-8">TekSure's free guides</h3>
              <p>
                We have step-by-step guides for almost every everyday tech task — setting up a phone, writing an email, joining a video call, spotting a scam. They're all free and written in plain English. Browse them all at{' '}
                <Link to="/guides" className="text-primary font-medium underline underline-offset-2">/guides</Link>.
              </p>

              <h3 className="text-xl font-semibold tracking-tight mt-8">Community forum</h3>
              <p>
                Not finding exactly what you need? Ask other real people on our{' '}
                <Link to="/forum" className="text-primary font-medium underline underline-offset-2">community forum</Link>. Other TekSure users and our team read and answer questions — no question is too basic.
              </p>

              <h3 className="text-xl font-semibold tracking-tight mt-8">Libraries and tech help near you</h3>
              <p>
                Many public libraries, senior centers, and community organizations offer free one-on-one tech help. A real person, in your neighborhood, can make all the difference. Find local help on our{' '}
                <Link to="/tech-help-near-me" className="text-primary font-medium underline underline-offset-2">
                  Tech Help Near Me
                </Link>{' '}
                page.
              </p>

              <h3 className="text-xl font-semibold tracking-tight mt-8">It's OK to ask</h3>
              <p>
                There's nothing embarrassing about asking for help with technology. New devices, apps, and websites come out every week — nobody knows them all. The people who seem the most confident are simply the ones who have learned to ask good questions and look things up. You can do that too.
              </p>

              <div className="rounded-xl border border-primary/20 bg-primary/5 p-5 mt-8">
                <p className="text-sm md:text-base m-0">
                  <strong>Remember:</strong> every expert was once a beginner. Asking questions is how you become the person other people ask.
                </p>
              </div>
            </LessonShell>

            {/* Congratulations */}
            <section id="congrats" className="scroll-mt-24">
              <Card className={`overflow-hidden border ${allDone ? 'border-emerald-300 dark:border-emerald-700/50' : 'border-border'}`}>
                <div className={`bg-gradient-to-br ${allDone ? 'from-emerald-50 to-teal-50 dark:from-emerald-950/40 dark:to-teal-950/40' : 'from-muted to-muted/50'} px-6 md:px-10 py-10 md:py-14 text-center`}>
                  <div className={`mx-auto h-16 w-16 rounded-2xl ${allDone ? 'bg-emerald-100 dark:bg-emerald-900/50 text-emerald-600 dark:text-emerald-300' : 'bg-muted-foreground/10 text-muted-foreground'} flex items-center justify-center mb-5`}>
                    <Trophy className="h-8 w-8" aria-hidden="true" />
                  </div>
                  <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold tracking-tight mb-3">
                    {allDone ? "Congratulations — You've Finished!" : 'Almost there!'}
                  </h2>
                  <p className="text-base md:text-lg text-muted-foreground max-w-xl mx-auto">
                    {allDone
                      ? "You've completed all five lessons of Internet Basics. You now know more about the internet than most people do on their first day online."
                      : `You've completed ${doneCount} of ${lessons.length} lessons. Mark every lesson complete to earn your badge.`}
                  </p>

                  {allDone && (
                    <div className="inline-flex items-center gap-2 mt-6 px-5 py-2.5 rounded-full bg-emerald-600 text-white font-semibold shadow-sm">
                      <Sparkles className="h-4 w-4" />
                      Badge earned: Internet Basics Graduate
                    </div>
                  )}
                </div>

                <CardContent className="px-6 md:px-10 py-8 md:py-10">
                  <h3 className="text-lg md:text-xl font-semibold mb-5">What's next?</h3>
                  <div className="grid sm:grid-cols-2 gap-3">
                    <Link to="/learn" className="group block">
                      <div className="rounded-xl border border-border bg-card p-5 h-full hover:border-primary/40 hover:shadow-sm transition-all">
                        <div className="flex items-center gap-3 mb-2">
                          <div className="h-10 w-10 rounded-lg bg-violet-100 dark:bg-violet-900/40 text-violet-600 dark:text-violet-400 flex items-center justify-center">
                            <BookOpen className="h-5 w-5" />
                          </div>
                          <h4 className="font-semibold group-hover:text-primary transition-colors">All learning paths</h4>
                        </div>
                        <p className="text-sm text-muted-foreground">Every TekSure course in one place, sorted by skill level.</p>
                      </div>
                    </Link>
                    <Link to="/scam-defense" className="group block">
                      <div className="rounded-xl border border-border bg-card p-5 h-full hover:border-primary/40 hover:shadow-sm transition-all">
                        <div className="flex items-center gap-3 mb-2">
                          <div className="h-10 w-10 rounded-lg bg-rose-100 dark:bg-rose-900/40 text-rose-600 dark:text-rose-400 flex items-center justify-center">
                            <ShieldCheck className="h-5 w-5" />
                          </div>
                          <h4 className="font-semibold group-hover:text-primary transition-colors">Scam Defense Center</h4>
                        </div>
                        <p className="text-sm text-muted-foreground">Go deeper on staying safe online — threats, warning signs, recovery help.</p>
                      </div>
                    </Link>
                    <Link to="/brain" className="group block">
                      <div className="rounded-xl border border-border bg-card p-5 h-full hover:border-primary/40 hover:shadow-sm transition-all">
                        <div className="flex items-center gap-3 mb-2">
                          <div className="h-10 w-10 rounded-lg bg-sky-100 dark:bg-sky-900/40 text-sky-600 dark:text-sky-400 flex items-center justify-center">
                            <Sparkles className="h-5 w-5" />
                          </div>
                          <h4 className="font-semibold group-hover:text-primary transition-colors">TekSure Brain</h4>
                        </div>
                        <p className="text-sm text-muted-foreground">Ask any tech question and get an answer drawn from all 1,200+ guides.</p>
                      </div>
                    </Link>
                    <Link to="/forum" className="group block">
                      <div className="rounded-xl border border-border bg-card p-5 h-full hover:border-primary/40 hover:shadow-sm transition-all">
                        <div className="flex items-center gap-3 mb-2">
                          <div className="h-10 w-10 rounded-lg bg-emerald-100 dark:bg-emerald-900/40 text-emerald-600 dark:text-emerald-400 flex items-center justify-center">
                            <Users className="h-5 w-5" />
                          </div>
                          <h4 className="font-semibold group-hover:text-primary transition-colors">Community forum</h4>
                        </div>
                        <p className="text-sm text-muted-foreground">Ask real people your next question. No question is too basic.</p>
                      </div>
                    </Link>
                  </div>
                </CardContent>
              </Card>
            </section>
          </div>
        </div>
      </section>

      {/* Back-to-top floating button */}
      {showTop && (
        <button
          type="button"
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          aria-label="Back to top"
          className="fixed bottom-6 right-6 z-40 h-11 w-11 rounded-full bg-primary text-primary-foreground shadow-lg hover:shadow-xl transition-shadow flex items-center justify-center"
        >
          <ArrowUp className="h-5 w-5" />
        </button>
      )}

      <Footer />
    </div>
  );
};

export default InternetBasics;

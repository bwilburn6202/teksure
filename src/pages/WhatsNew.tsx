import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { PageBreadcrumb } from '@/components/PageBreadcrumb';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { Link } from 'react-router-dom';
import {
  Sparkles,
  Wrench,
  BookOpen,
  Bug,
  Rss,
  Mail,
  ArrowRight,
  Mic,
  Shield,
  Rocket,
  Calendar,
} from 'lucide-react';

// ── Category styling for grouped updates ─────────────────────────────────────
type UpdateType = 'guide' | 'tool' | 'improvement' | 'fix';

const TYPE_META: Record<
  UpdateType,
  { label: string; emoji: string; icon: typeof Sparkles; className: string }
> = {
  guide: {
    label: 'New guides',
    emoji: '🆕',
    icon: BookOpen,
    className:
      'bg-violet-100 text-violet-700 dark:bg-violet-900/40 dark:text-violet-300',
  },
  tool: {
    label: 'New tools',
    emoji: '',
    icon: Wrench,
    className:
      'bg-blue-100 text-blue-700 dark:bg-blue-900/40 dark:text-blue-300',
  },
  improvement: {
    label: 'Improvements',
    emoji: '',
    icon: Sparkles,
    className:
      'bg-green-100 text-green-700 dark:bg-green-900/40 dark:text-green-300',
  },
  fix: {
    label: 'Fixes',
    emoji: '',
    icon: Bug,
    className:
      'bg-amber-100 text-amber-700 dark:bg-amber-900/40 dark:text-amber-300',
  },
};

interface Update {
  title: string;
  description: string;
}

interface MonthlyRelease {
  /** Stable id, used as the Accordion value */
  id: string;
  /** Heading label (e.g. "April 2026") */
  label: string;
  /** Short summary that shows under the heading */
  summary?: string;
  groups: Partial<Record<UpdateType, Update[]>>;
}

// ── Featured highlights for "This Month" ─────────────────────────────────────
const FEATURED_THIS_MONTH: {
  title: string;
  description: string;
  icon: typeof Sparkles;
  href?: string;
  cta?: string;
}[] = [
  {
    title: 'TekBrain now talks back',
    description:
      "Our friendly AI assistant added voice mode — just tap the mic and ask. Great if typing is hard or you'd rather chat like you would with a friend.",
    icon: Mic,
    href: '/tekbrain',
    cta: 'Try TekBrain',
  },
  {
    title: '22 brand-new interactive tools',
    description:
      'Scam Simulator, Medicare Plan Chooser, Bill Negotiator, Phone First Aid, and more — tiny apps that solve real problems in a few taps.',
    icon: Wrench,
    href: '/tools',
    cta: 'Browse all tools',
  },
  {
    title: '21 new guides for real-life tech',
    description:
      'From password managers to telehealth, AI voice-cloning scams to digital estate planning — written in plain English, no jargon ever.',
    icon: BookOpen,
    href: '/guides',
    cta: 'Read the guides',
  },
];

// ── Monthly releases (newest first) ──────────────────────────────────────────
const RELEASES: MonthlyRelease[] = [
  {
    id: 'apr-2026',
    label: 'April 2026',
    summary: 'Our biggest month yet — 22 new tools, 21 new guides, and a major homepage refresh.',
    groups: {
      tool: [
        { title: 'TekBrain voice mode', description: 'Ask TekBrain out loud — hands-free help for anyone who finds typing tiring.' },
        { title: 'Practice Mode', description: 'Try clicks, taps, and menus in a safe sandbox so real screens feel familiar.' },
        { title: 'Scam Simulator', description: 'Walk through realistic fake texts and emails to learn the red flags without any risk.' },
        { title: 'Digital Footprint Scanner', description: 'See what the internet knows about you and get a plain-English cleanup plan.' },
        { title: 'Phone First Aid', description: 'Step-by-step fixes for the most common phone problems — no Apple Store trip needed.' },
        { title: 'Senior Discount Finder', description: 'Tell us your age and location; we list every senior discount worth claiming.' },
        { title: 'Medicare Plan Chooser', description: 'Answer six friendly questions and get a short list of plans that fit your life.' },
        { title: 'Safe Link Checker', description: 'Paste any suspicious link and we tell you whether it is safe to click.' },
        { title: 'Email Writer Helper', description: 'Tell us what you want to say; we turn it into a polite, polished email.' },
        { title: 'Bill Negotiator', description: 'Scripts and tips for knocking down your cable, internet, and phone bills.' },
        { title: 'Family Tech Planner', description: 'Organize devices, passwords, and streaming subscriptions across the whole family.' },
        { title: 'Printer Troubleshooter', description: 'Finally figure out why the printer is doing that — with fixes for every common model.' },
        { title: 'Smart TV Setup Wizard', description: 'Get your new TV talking to WiFi, streaming apps, and the remote — one step at a time.' },
        { title: 'WiFi QR Generator', description: 'Print a code that lets guests join your WiFi without you reading the password aloud.' },
        { title: 'Jargon Translator', description: 'Paste confusing tech-speak and get a plain-English translation in seconds.' },
        { title: 'Device Age Checker', description: "Find out how old your phone, laptop, or tablet is — and whether it's time to upgrade." },
        { title: 'Browser Safety Audit', description: 'A quick scan of your browser settings with friendly recommendations to tighten things up.' },
        { title: 'Privacy Audit', description: 'Walk through your accounts and apps to lock down what gets shared with whom.' },
        { title: 'Tech Break Reminder', description: 'Gentle nudges to rest your eyes, stretch, and step away from the screen.' },
        { title: 'Password Strength Tester', description: 'See if your password could stand up to a scammer — without ever sending it to us.' },
        { title: 'Digital Will Template', description: 'A clear, printable template for recording accounts, passwords, and wishes for loved ones.' },
        { title: 'Accessibility Profile Builder', description: 'Create a saved profile of text size, color, and reading preferences that follows you across the site.' },
      ],
      guide: [
        { title: 'Spotting AI voice-cloning scams', description: "If 'your grandchild' calls in tears asking for money, here's how to check before you act." },
        { title: 'Using MyChart without the confusion', description: 'A friendly tour of test results, messages, and appointments in your patient portal.' },
        { title: 'ChatGPT for everyday life', description: 'Real examples of how to ask for recipes, emails, and translations — no tech background needed.' },
        { title: 'Password managers made simple', description: 'Why one good password and a manager is safer than sticky notes on the monitor.' },
        { title: 'Smart home without the headache', description: 'What a smart bulb actually does, which assistants get along, and what to skip.' },
        { title: 'Video calls that just work', description: 'FaceTime, Zoom, and Google Meet — the short version, with pictures.' },
        { title: 'Streaming without overpaying', description: 'How to tell which services you actually use and cancel the rest in a few clicks.' },
        { title: 'Two-factor authentication explained', description: 'What those codes are, why they matter, and how to set them up without losing access.' },
        { title: 'Cloud storage for normal people', description: 'iCloud, Google Drive, OneDrive — the differences in plain English.' },
        { title: 'When to trust a QR code', description: 'The quick tests to tell a real menu code from a scam sticker in the parking lot.' },
        { title: 'Online banking, the safe way', description: 'Habits that keep your checking account safe without making banking a chore.' },
        { title: 'Your first telehealth visit', description: 'How to prepare, what to click, and what to do if the video freezes.' },
        { title: 'Seeing every subscription you pay', description: 'A simple method for finding hidden charges on your credit card statements.' },
        { title: 'Lowering your phone bill', description: 'The calls to make and the plans to ask about — with word-for-word scripts.' },
        { title: 'Spotting fake reviews', description: 'Before you buy: the tells that give away paid and AI-written reviews.' },
        { title: 'Emergency contacts on every device', description: 'Make sure first responders can see who to call without unlocking your phone.' },
        { title: 'Everyday AI without the fear', description: "A gentle introduction to what AI can and can't do — and why it matters." },
        { title: 'Digital estate planning', description: 'Leaving clear instructions for your photos, email, and online accounts.' },
        { title: 'Tech after losing a spouse', description: 'A kind, practical guide to accounts, devices, and passwords after a loss.' },
        { title: 'Tech for veterans', description: 'VA.gov, telehealth, and benefits apps — the ones that actually work.' },
        { title: 'Rural internet options', description: 'Starlink, fixed wireless, and cellular — what works where cable does not.' },
        { title: 'Low-vision accessibility tour', description: "Every setting on your device that makes text bigger, louder, and easier to read." },
      ],
      improvement: [
        { title: 'Homepage redesign', description: 'Cleaner layout, clearer paths — easier to find what you actually came for.' },
        { title: 'Glass-bubble navigation', description: 'A calmer, more readable menu that stays out of your way while you read.' },
        { title: 'Per-page color variations', description: 'Subtle color shifts so you always know which section of the site you are in.' },
        { title: 'TekSure logo on every page', description: 'Consistent branding so you always know you are in the right place.' },
        { title: 'Guides hub redesign', description: 'Easier to browse by topic, with clearer descriptions and better search.' },
        { title: 'Tools hub with 9 categories', description: 'Every interactive tool sorted into friendly categories instead of one long list.' },
        { title: 'Guide detail sticky sidebar', description: 'A table of contents that follows you as you scroll — jump to any step in one click.' },
        { title: 'Accessibility Hub', description: 'One page gathering every accessibility setting, guide, and keyboard shortcut we offer.' },
        { title: 'Footer redesign', description: 'Four clear columns instead of one wall of links — easier to find About, Help, Family, and Contact.' },
        { title: '404 page redesign', description: 'If you ever land on a missing page, you get a friendly nudge back to safety.' },
        { title: 'Achievement badges', description: 'Celebrate progress as you learn — little wins that add up.' },
        { title: 'Learning Paths', description: 'Curated guide sequences so you can go from "new to this" to "confident" step by step.' },
        { title: 'Bookmarks & Favorites', description: 'Save any guide or tool and come back to it later from your dashboard.' },
      ],
      fix: [
        { title: 'Critical routing fixes', description: 'Links that used to 404 now go exactly where you expect them to.' },
        { title: 'Accessibility polish', description: 'Bumped body text to 18px minimum and brought all contrast up to WCAG AA.' },
        { title: 'Skip-link targets restored', description: 'Screen reader and keyboard users can jump to the main content on every page.' },
        { title: 'Safer secrets handling', description: 'Added .env to gitignore so environment variables never leave the developer machine.' },
        { title: 'Loading timeouts', description: 'Slow pages now show a gentle message instead of spinning forever.' },
      ],
    },
  },
  {
    id: 'mar-2026',
    label: 'March 2026',
    summary: 'Payments, bookings, and TekBrain — the core of TekSure came online.',
    groups: {
      tool: [
        { title: 'TekBrain chat launch', description: 'Our friendly AI tech assistant went live — ask anything, any time.' },
        { title: 'Booking system', description: 'Schedule a real human technician right from the website.' },
      ],
      improvement: [
        { title: 'Stripe payments live', description: 'Pay securely online with a small deposit that comes off your final bill.' },
        { title: 'Admin dashboard', description: 'Our team can now manage bookings, content, and guides without writing code.' },
        { title: 'Email notifications', description: 'Booking confirmations and reminders so you never miss a session.' },
      ],
    },
  },
  {
    id: 'early-2026',
    label: 'January – February 2026',
    summary: 'The launch. First guides, first tools, mobile-friendly from day one.',
    groups: {
      guide: [
        { title: 'First 50 guides published', description: 'Plain-English tech help across phones, computers, internet, and safety.' },
      ],
      improvement: [
        { title: 'Initial launch content', description: 'Homepage, about page, how-it-works, and the very first Tools hub.' },
        { title: 'Mobile responsiveness', description: 'Every page tuned to work beautifully on phones and tablets, not just desktops.' },
      ],
    },
  },
];

// ── Small helpers ────────────────────────────────────────────────────────────
function FeaturedCard({
  title,
  description,
  icon: Icon,
  href,
  cta,
}: {
  title: string;
  description: string;
  icon: typeof Sparkles;
  href?: string;
  cta?: string;
}) {
  return (
    <div className="group flex flex-col h-full rounded-2xl border border-amber-200/60 dark:border-border bg-gradient-to-br from-white via-amber-50/40 to-orange-50/40 dark:from-background dark:via-muted/20 dark:to-muted/30 p-6 shadow-sm hover:shadow-md transition-shadow">
      <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
        <Icon className="h-6 w-6" aria-hidden="true" />
      </div>
      <h3 className="text-lg md:text-xl font-semibold text-foreground mb-2 leading-snug">
        {title}
      </h3>
      <p className="text-base text-foreground/75 leading-relaxed flex-1">
        {description}
      </p>
      {href && cta && (
        <Link
          to={href}
          className="mt-4 inline-flex items-center gap-1.5 text-base font-medium text-primary hover:text-primary/80 underline-offset-4 hover:underline transition-colors"
        >
          {cta}
          <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" aria-hidden="true" />
        </Link>
      )}
    </div>
  );
}

function UpdateGroup({ type, items }: { type: UpdateType; items: Update[] }) {
  const meta = TYPE_META[type];
  const Icon = meta.icon;
  return (
    <div>
      <h4 className="flex items-center gap-2 text-base md:text-lg font-semibold text-foreground mb-3">
        <span className="text-xl leading-none" aria-hidden="true">{meta.emoji}</span>
        {meta.label}
        <Badge variant="secondary" className={`ml-1 text-xs font-medium ${meta.className}`}>
          {items.length}
        </Badge>
      </h4>
      <ul className="space-y-3">
        {items.map((item) => (
          <li key={item.title} className="flex items-start gap-3">
            <Icon
              className="h-4 w-4 mt-1 shrink-0 text-foreground/40"
              aria-hidden="true"
            />
            <div>
              <p className="text-base font-medium text-foreground leading-snug">{item.title}</p>
              <p className="text-sm md:text-base text-foreground/70 leading-relaxed">{item.description}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

// ── Page ─────────────────────────────────────────────────────────────────────
export default function WhatsNew() {
  const [thisMonth, ...earlierMonths] = RELEASES;
  const orderedTypes: UpdateType[] = ['tool', 'guide', 'improvement', 'fix'];

  return (
    <>
      <SEOHead
        title="What's New on TekSure — Fresh Guides, Tools, and Improvements"
        description="See the latest guides, interactive tools, and improvements added to TekSure. New content every week — fresh this month and going back to launch."
        path="/whats-new"
      />
      <Navbar />
      <main className="min-h-screen bg-background">
        <div className="container max-w-5xl mx-auto pt-4 px-4">
          <PageBreadcrumb segments={[{ label: "What's New" }]} />
        </div>

        {/* Hero */}
        <section className="border-b border-border py-16 bg-gradient-to-b from-amber-50/60 via-orange-50/30 to-transparent dark:from-muted/30 dark:via-muted/10 dark:to-transparent">
          <div className="container max-w-4xl mx-auto text-center px-4">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
              <Rocket className="h-4 w-4" aria-hidden="true" />
              Updated weekly
            </div>
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
              What&rsquo;s New on TekSure
            </h1>
            <p className="text-lg md:text-xl text-foreground/75 max-w-2xl mx-auto leading-relaxed">
              New guides, tools, and improvements &mdash; fresh every week.
            </p>
          </div>
        </section>

        {/* This Month featured */}
        <section className="container max-w-5xl mx-auto px-4 py-12">
          <div className="flex items-end justify-between mb-6 flex-wrap gap-3">
            <div>
              <div className="inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-wider text-primary mb-2">
                <Calendar className="h-4 w-4" aria-hidden="true" />
                This Month
              </div>
              <h2 className="text-2xl md:text-3xl font-bold tracking-tight">
                The biggest changes in April
              </h2>
            </div>
            <Button asChild variant="outline" size="lg" className="text-base">
              <a href="#timeline">See the full timeline</a>
            </Button>
          </div>
          <div className="grid gap-5 md:grid-cols-3">
            {FEATURED_THIS_MONTH.map((f) => (
              <FeaturedCard key={f.title} {...f} />
            ))}
          </div>
        </section>

        {/* Monthly timeline */}
        <section id="timeline" className="container max-w-5xl mx-auto px-4 pb-16">
          <div className="mb-6">
            <h2 className="text-2xl md:text-3xl font-bold tracking-tight mb-2">
              Monthly timeline
            </h2>
            <p className="text-base text-foreground/70">
              Expand any month to see everything we shipped. Newest first.
            </p>
          </div>

          <Accordion
            type="multiple"
            defaultValue={[thisMonth.id]}
            className="rounded-2xl border border-border bg-card/50"
          >
            {RELEASES.map((release, index) => {
              const totals = orderedTypes.map((t) => ({
                type: t,
                count: release.groups[t]?.length ?? 0,
              })).filter((t) => t.count > 0);
              return (
                <AccordionItem
                  key={release.id}
                  value={release.id}
                  className={
                    index === RELEASES.length - 1
                      ? 'border-b-0 px-4 md:px-6'
                      : 'px-4 md:px-6'
                  }
                >
                  <AccordionTrigger className="hover:no-underline py-5">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2 w-full pr-2 text-left">
                      <div>
                        <h3 className="text-lg md:text-xl font-bold text-foreground leading-tight">
                          {release.label}
                        </h3>
                        {release.summary && (
                          <p className="text-sm md:text-base text-foreground/70 font-normal mt-1 leading-relaxed">
                            {release.summary}
                          </p>
                        )}
                      </div>
                      <div className="flex flex-wrap items-center gap-1.5 shrink-0">
                        {totals.map(({ type, count }) => {
                          const meta = TYPE_META[type];
                          return (
                            <Badge
                              key={type}
                              variant="secondary"
                              className={`text-xs font-medium ${meta.className}`}
                            >
                              <span className="mr-1" aria-hidden="true">{meta.emoji}</span>
                              {count}
                            </Badge>
                          );
                        })}
                      </div>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="pb-6">
                    <div className="grid gap-8 md:grid-cols-2 pt-2">
                      {orderedTypes.map((t) => {
                        const items = release.groups[t];
                        if (!items || items.length === 0) return null;
                        return <UpdateGroup key={t} type={t} items={items} />;
                      })}
                    </div>
                  </AccordionContent>
                </AccordionItem>
              );
            })}
          </Accordion>
        </section>

        {/* Subscribe / RSS */}
        <section className="border-t border-border bg-gradient-to-b from-transparent via-amber-50/40 to-amber-50/60 dark:via-muted/10 dark:to-muted/30 py-14">
          <div className="container max-w-3xl mx-auto px-4 text-center">
            <div className="inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10 text-primary mb-5">
              <Mail className="h-7 w-7" aria-hidden="true" />
            </div>
            <h2 className="text-2xl md:text-3xl font-bold tracking-tight mb-3">
              Get new features in your inbox
            </h2>
            <p className="text-base md:text-lg text-foreground/75 mb-6 leading-relaxed">
              One friendly email a month with the newest guides, tools, and improvements.
              No spam, ever &mdash; and you can unsubscribe any time.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 mb-6">
              <Button
                asChild
                size="lg"
                className="h-12 px-6 text-base font-semibold"
              >
                <a href="mailto:hello@teksure.com?subject=Subscribe%20to%20What%27s%20New&body=Please%20add%20me%20to%20the%20TekSure%20What%27s%20New%20newsletter.">
                  <Mail className="mr-2 h-5 w-5" aria-hidden="true" />
                  Email me updates
                </a>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="h-12 px-6 text-base font-semibold"
              >
                <a href="/rss.xml" aria-label="Subscribe via RSS">
                  <Rss className="mr-2 h-5 w-5" aria-hidden="true" />
                  RSS feed
                </a>
              </Button>
            </div>
            <div className="flex flex-wrap items-center justify-center gap-x-5 gap-y-2 text-sm text-foreground/60">
              <Link to="/changelog" className="inline-flex items-center gap-1.5 hover:text-primary hover:underline underline-offset-4 transition-colors">
                <Shield className="h-4 w-4" aria-hidden="true" />
                Technical changelog
              </Link>
              <Link to="/roadmap" className="inline-flex items-center gap-1.5 hover:text-primary hover:underline underline-offset-4 transition-colors">
                <Rocket className="h-4 w-4" aria-hidden="true" />
                What&rsquo;s coming next
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

import { Link } from 'react-router-dom';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import {
  Eye,
  Ear,
  Hand,
  Brain,
  ArrowRight,
  Accessibility,
  Sparkles,
  Settings,
  Users,
  ExternalLink,
  HeartHandshake,
  Mail,
  BookOpen,
  MessageCircle,
  Lightbulb,
} from 'lucide-react';

// ─── Quick-access categories ─────────────────────────────────────────────────

type Category = {
  id: string;
  icon: typeof Eye;
  label: string;
  tagline: string;
  conditions: string[];
  accent: string;
  to: string;
};

const categories: Category[] = [
  {
    id: 'vision',
    icon: Eye,
    label: 'Vision',
    tagline: 'Make what is on the screen easier to see — or hear.',
    conditions: ['Low Vision', 'Blind', 'Color Blindness'],
    accent: 'from-sky-50 to-sky-100/40 dark:from-sky-950/30 dark:to-sky-900/10',
    to: '/accessibility#vision',
  },
  {
    id: 'hearing',
    icon: Ear,
    label: 'Hearing',
    tagline: 'Captions, visual alerts, and better sound for every call and video.',
    conditions: ['Hard of Hearing', 'Deaf'],
    accent: 'from-emerald-50 to-emerald-100/40 dark:from-emerald-950/30 dark:to-emerald-900/10',
    to: '/accessibility#hearing',
  },
  {
    id: 'motor',
    icon: Hand,
    label: 'Motor',
    tagline: 'Control your device with your voice, a switch, or a single tap.',
    conditions: ['Limited Dexterity', 'Tremors'],
    accent: 'from-amber-50 to-amber-100/40 dark:from-amber-950/30 dark:to-amber-900/10',
    to: '/accessibility#motor',
  },
  {
    id: 'cognitive',
    icon: Brain,
    label: 'Cognitive',
    tagline: 'Simpler screens, fewer distractions, gentle reminders.',
    conditions: ['Dementia', 'Memory', 'Learning'],
    accent: 'from-violet-50 to-violet-100/40 dark:from-violet-950/30 dark:to-violet-900/10',
    to: '/accessibility#cognitive',
  },
];

// ─── Feature details for anchored sections ───────────────────────────────────

type FeatureDetail = {
  id: string;
  icon: typeof Eye;
  label: string;
  heading: string;
  intro: string;
  features: { name: string; description: string; to: string }[];
};

const categoryDetails: FeatureDetail[] = [
  {
    id: 'vision',
    icon: Eye,
    label: 'Vision',
    heading: 'Vision — for low vision, blindness, and color blindness',
    intro:
      'Every phone and computer can read the screen out loud, magnify text, and shift colors to match your eyes. You do not need to buy anything new.',
    features: [
      {
        name: 'Screen reader (VoiceOver, TalkBack, Narrator)',
        description:
          'Reads everything on screen out loud and describes images and buttons. The most powerful feature for anyone who cannot comfortably read the screen.',
        to: '/guides/voiceover-screen-reader-setup',
      },
      {
        name: 'Zoom and magnification',
        description:
          'Magnify the whole screen up to 15x, or only the area around your cursor. Works in every app without the app needing to support it.',
        to: '/guides/use-browser-zoom-large-text',
      },
      {
        name: 'Larger text system-wide',
        description:
          'Makes text bigger in menus, messages, email, and most apps. Adjustable on a slider so you can find the right size for your eyes.',
        to: '/guides/make-text-larger-iphone-android',
      },
      {
        name: 'Color filters for color blindness',
        description:
          'Shifts colors to make red-green or blue-yellow differences easier to see. Built-in presets for the most common forms of color vision deficiency.',
        to: '/guides/color-filters-accessibility',
      },
    ],
  },
  {
    id: 'hearing',
    icon: Ear,
    label: 'Hearing',
    heading: 'Hearing — for hard of hearing and Deaf users',
    intro:
      'Real-time captions, visual notifications, and direct hearing-aid connections are already on your devices. Turn them on once and they stay on.',
    features: [
      {
        name: 'Live captions for any audio',
        description:
          'Real-time captions for phone calls, FaceTime, YouTube, and podcasts — even when the app itself has no captions.',
        to: '/guides/live-captions-phone',
      },
      {
        name: 'Visual and LED flash alerts',
        description:
          'Flashes the camera light or the screen when you get a call or notification. Useful if you keep your phone on silent.',
        to: '/guides/flash-notifications-phone',
      },
      {
        name: 'Hearing-aid Bluetooth pairing',
        description:
          'Stream phone calls, music, and TV audio directly to your hearing aids with no middleman device.',
        to: '/guides/hearing-aid-bluetooth',
      },
      {
        name: 'Mono audio and caption customization',
        description:
          'Combine stereo into one channel so you never miss half of a call. Make captions bigger, bolder, and easier to read.',
        to: '/guides/customize-captions-streaming',
      },
    ],
  },
  {
    id: 'motor',
    icon: Hand,
    label: 'Motor',
    heading: 'Motor — for limited dexterity and tremors',
    intro:
      'If typing, tapping, or holding the phone is painful, your device can listen to your voice, respond to a single switch, or ignore shaky touches.',
    features: [
      {
        name: 'Voice Control and Voice Access',
        description:
          'Control the whole device by speaking. Open apps, tap buttons, type messages, and scroll without touching the screen.',
        to: '/guides/voice-control-setup',
      },
      {
        name: 'AssistiveTouch and one-finger gestures',
        description:
          'An on-screen button that replaces complex multi-finger gestures with simple taps.',
        to: '/guides/assistivetouch-iphone',
      },
      {
        name: 'Switch Control',
        description:
          'Operate your device with an external switch — a large button, a puff-sip sensor, or a camera that detects head movement.',
        to: '/guides/switch-control-accessibility',
      },
      {
        name: 'Sticky Keys and Filter Keys',
        description:
          'Press shortcuts one key at a time. Ignore accidental repeated keypresses — a lifesaver for tremors.',
        to: '/guides/sticky-keys-filter-keys',
      },
    ],
  },
  {
    id: 'cognitive',
    icon: Brain,
    label: 'Cognitive',
    heading: 'Cognitive — for dementia, memory, and learning',
    intro:
      'Fewer choices, gentle reminders, and one-app-at-a-time modes reduce overwhelm. These features protect focus without taking away independence.',
    features: [
      {
        name: 'Simplified interface modes',
        description:
          'iPhone Assistive Access, Android Simple Mode, and Samsung Easy Mode shrink the phone to a few large buttons — calls, messages, camera, photos.',
        to: '/guides/simplified-phone-mode',
      },
      {
        name: 'Guided Access and Focus Mode',
        description:
          'Locks the device into a single app. Great for reducing distractions during reading, calls, or medical appointments.',
        to: '/guides/guided-access-focus-mode',
      },
      {
        name: 'Reduce motion',
        description:
          'Removes spinning, sliding, and parallax animations. If motion on screens makes you dizzy, this is the first setting to flip.',
        to: '/guides/reduce-motion-accessibility',
      },
      {
        name: 'Spoken content and text-to-speech',
        description:
          'Highlight any text and have it read out loud. Helpful for long articles, dense documents, or anyone who learns better by listening.',
        to: '/guides/text-to-speech-spoken-content',
      },
    ],
  },
];

// ─── Featured tools ──────────────────────────────────────────────────────────

const featuredTools = [
  {
    icon: Sparkles,
    title: 'Tech Comfort Quiz',
    description:
      'A gentle five-minute quiz that matches you to the setup most likely to work for your eyes, ears, hands, and focus.',
    to: '/tools/tech-comfort-quiz',
    cta: 'Take the quiz',
  },
  {
    icon: BookOpen,
    title: 'TekBrain',
    description:
      'Ask any plain-English tech question and TekBrain walks you through the answer — no jargon, no rush, no shame.',
    to: '/tekbrain',
    cta: 'Ask TekBrain',
  },
  {
    icon: Lightbulb,
    title: 'Accessibility Needs Finder',
    description:
      'Answer a handful of questions and we will tell you the exact settings to turn on first on your device.',
    to: '/tools/accessibility-needs-finder',
    cta: 'Find what fits',
  },
  {
    icon: Users,
    title: 'Accessibility Profile Builder',
    description:
      'Save a profile of your preferences so every guide on TekSure adjusts to what works best for you.',
    to: '/tools/accessibility-profile-builder',
    cta: 'Build a profile',
  },
];

// ─── Organizations ──────────────────────────────────────────────────────────

const organizations = [
  {
    name: 'National Federation of the Blind (NFB)',
    description:
      'The oldest and largest membership organization of blind people in the United States. Free resources, legal advocacy, and local chapters in every state.',
    url: 'https://nfb.org',
  },
  {
    name: 'Hearing Loss Association of America (HLAA)',
    description:
      'Support groups, caption advocacy, and plain-language guides to hearing aids and cochlear implants. Chapters nationwide and an active online community.',
    url: 'https://www.hearingloss.org',
  },
  {
    name: 'American Foundation for the Blind (AFB)',
    description:
      'Research, policy, and the long-running AccessWorld publication. AFB reviews of apps and devices are trusted by people who use them daily.',
    url: 'https://www.afb.org',
  },
  {
    name: 'DO-IT at the University of Washington',
    description:
      'Programs that help people with disabilities use technology to pursue college, careers, and community. Free publications, webinars, and mentoring.',
    url: 'https://www.washington.edu/doit/',
  },
];

// ─── Component ──────────────────────────────────────────────────────────────

export default function AccessibilityHub() {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <SEOHead
        title="Accessibility Hub — Technology for Everyone | TekSure"
        description="Plain-English guides to built-in accessibility features for vision, hearing, motor, and cognitive needs. Technology should adapt to you, not the other way around."
        path="/accessibility"
      />
      <Navbar />

      <main id="main-content" className="flex-1">
        {/* ── Hero ───────────────────────────────────────────────────────── */}
        <section aria-labelledby="hero-heading" className="relative overflow-hidden border-b border-border bg-gradient-to-b from-[#F7D9C5]/60 via-[#FBE7D9]/30 to-transparent">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 opacity-60"
            style={{
              background:
                'radial-gradient(800px circle at 20% 0%, rgb(247 217 197 / 0.55), transparent 60%), radial-gradient(600px circle at 80% 20%, rgb(251 231 217 / 0.45), transparent 60%)',
            }}
          />
          <div className="container relative max-w-4xl text-center py-16 md:py-24">
            <div
              className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-primary/15 mb-6"
              aria-hidden="true"
            >
              <Accessibility className="h-8 w-8 text-primary" />
            </div>
            <h1
              id="hero-heading"
              className="text-4xl md:text-6xl font-bold tracking-tight text-foreground mb-6"
            >
              Technology for Everyone
            </h1>
            <p className="text-xl md:text-2xl leading-relaxed text-foreground/90 max-w-3xl mx-auto mb-4">
              Technology should adapt to you — not the other way around.
            </p>
            <p className="text-xl leading-relaxed text-foreground/80 max-w-3xl mx-auto">
              Every major device already includes powerful accessibility features. This hub shows
              you how to turn them on, plus the organizations and tools that can help.
            </p>
          </div>
        </section>

        {/* ── Quick-access categories ───────────────────────────────────── */}
        <section
          aria-labelledby="categories-heading"
          className="container max-w-6xl py-14 md:py-20"
        >
          <div className="mb-10">
            <h2
              id="categories-heading"
              className="text-3xl md:text-4xl font-bold text-foreground mb-3"
            >
              Start with what you need
            </h2>
            <p className="text-xl text-foreground/80 max-w-3xl">
              Jump straight to the features that match how you use your device.
            </p>
          </div>

          <ul
            className="grid md:grid-cols-2 gap-5"
            role="list"
            aria-label="Accessibility categories"
          >
            {categories.map((cat) => (
              <li key={cat.id}>
                <Link
                  to={cat.to}
                  aria-label={`${cat.label} — ${cat.conditions.join(', ')}. ${cat.tagline}`}
                  className="group block h-full focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-primary/60 rounded-2xl"
                >
                  <Card
                    className={`rounded-2xl border-2 border-border bg-gradient-to-br ${cat.accent} h-full hover:border-primary transition-colors`}
                  >
                    <CardContent className="p-6 md:p-7">
                      <div className="flex items-start gap-4 mb-4">
                        <div
                          className="rounded-xl bg-background w-14 h-14 flex items-center justify-center shrink-0 border border-border"
                          aria-hidden="true"
                        >
                          <cat.icon className="h-7 w-7 text-primary" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-1">
                            {cat.label}
                          </h3>
                          <p className="text-lg text-foreground/80 leading-snug">
                            {cat.tagline}
                          </p>
                        </div>
                      </div>
                      <div className="flex flex-wrap gap-2 mb-4">
                        {cat.conditions.map((c) => (
                          <Badge
                            key={c}
                            variant="outline"
                            className="text-base px-3 py-1 bg-background/80 text-foreground border-foreground/20"
                          >
                            {c}
                          </Badge>
                        ))}
                      </div>
                      <span className="inline-flex items-center gap-2 text-lg font-semibold text-primary group-hover:underline">
                        Explore {cat.label.toLowerCase()} features
                        <ArrowRight
                          className="h-5 w-5 group-hover:translate-x-1 transition-transform"
                          aria-hidden="true"
                        />
                      </span>
                    </CardContent>
                  </Card>
                </Link>
              </li>
            ))}
          </ul>
        </section>

        {/* ── Built-in features CTA (batch-117 guide) ──────────────────── */}
        <section
          aria-labelledby="builtin-heading"
          className="bg-foreground text-background border-y border-border"
        >
          <div className="container max-w-5xl py-14">
            <div className="grid md:grid-cols-3 gap-8 items-center">
              <div className="md:col-span-2">
                <Badge
                  variant="outline"
                  className="mb-4 text-base px-3 py-1 bg-background/10 text-background border-background/40"
                >
                  Built-in features you already have
                </Badge>
                <h2
                  id="builtin-heading"
                  className="text-3xl md:text-4xl font-bold mb-4"
                >
                  Your phone can already read, magnify, caption, and listen for you
                </h2>
                <p className="text-xl leading-relaxed text-background/90">
                  Most people never turn these features on because nobody told them they were
                  there. Our complete guide walks through every one in plain English — with the
                  exact taps to turn them on.
                </p>
              </div>
              <div className="md:text-right">
                <Button
                  asChild
                  size="lg"
                  className="rounded-xl gap-2 h-14 text-lg px-6 bg-background text-foreground hover:bg-background/90"
                >
                  <Link
                    to="/guides/hidden-accessibility-features-your-phone-already-has"
                    aria-label="Open the complete hidden accessibility features guide"
                  >
                    See the full guide
                    <ArrowRight className="h-5 w-5" aria-hidden="true" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* ── Detailed feature sections (anchored by category id) ──────── */}
        <section
          aria-label="Detailed feature list by category"
          className="container max-w-6xl py-14 md:py-20 space-y-16"
        >
          {categoryDetails.map((cat) => (
            <div key={cat.id} id={cat.id} className="scroll-mt-28">
              <header className="mb-6">
                <div className="flex items-center gap-4 mb-3">
                  <div
                    className="rounded-xl bg-primary/15 w-14 h-14 flex items-center justify-center shrink-0"
                    aria-hidden="true"
                  >
                    <cat.icon className="h-7 w-7 text-primary" />
                  </div>
                  <h2 className="text-3xl md:text-4xl font-bold text-foreground">
                    {cat.heading}
                  </h2>
                </div>
                <p className="text-xl text-foreground/80 leading-relaxed max-w-4xl">
                  {cat.intro}
                </p>
              </header>

              <ul className="grid md:grid-cols-2 gap-5" role="list">
                {cat.features.map((feature) => (
                  <li key={feature.name}>
                    <Card className="rounded-2xl border-2 border-border bg-card hover:border-primary transition-colors h-full">
                      <CardContent className="p-6 flex flex-col h-full">
                        <h3 className="text-xl md:text-2xl font-bold text-foreground mb-2 leading-tight">
                          {feature.name}
                        </h3>
                        <p className="text-lg text-foreground/85 leading-relaxed mb-5 flex-1">
                          {feature.description}
                        </p>
                        <Button
                          asChild
                          variant="outline"
                          size="lg"
                          className="rounded-xl gap-2 self-start text-lg h-12 px-5 border-2"
                        >
                          <Link
                            to={feature.to}
                            aria-label={`Open the ${feature.name} guide`}
                          >
                            Turn it on
                            <ArrowRight className="h-4 w-4" aria-hidden="true" />
                          </Link>
                        </Button>
                      </CardContent>
                    </Card>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </section>

        {/* ── Featured tools ────────────────────────────────────────────── */}
        <section
          aria-labelledby="tools-heading"
          className="bg-muted/40 border-y border-border"
        >
          <div className="container max-w-6xl py-14 md:py-20">
            <div className="mb-10">
              <Badge
                variant="outline"
                className="mb-4 text-base px-3 py-1 bg-background"
              >
                TekSure tools
              </Badge>
              <h2
                id="tools-heading"
                className="text-3xl md:text-4xl font-bold text-foreground mb-3"
              >
                Tools that work for every ability
              </h2>
              <p className="text-xl text-foreground/80 max-w-3xl">
                Free, plain-English tools designed to adapt to how you use your device — not the
                other way around.
              </p>
            </div>

            <ul className="grid md:grid-cols-2 gap-5" role="list">
              {featuredTools.map((tool) => (
                <li key={tool.title}>
                  <Card className="rounded-2xl border-2 border-border bg-card hover:border-primary transition-colors h-full">
                    <CardContent className="p-6 flex flex-col h-full">
                      <div className="flex items-start gap-4 mb-3">
                        <div
                          className="rounded-xl bg-primary/15 w-12 h-12 flex items-center justify-center shrink-0"
                          aria-hidden="true"
                        >
                          <tool.icon className="h-6 w-6 text-primary" />
                        </div>
                        <h3 className="text-xl md:text-2xl font-bold text-foreground leading-snug pt-1">
                          {tool.title}
                        </h3>
                      </div>
                      <p className="text-lg text-foreground/85 leading-relaxed mb-5 flex-1">
                        {tool.description}
                      </p>
                      <Button
                        asChild
                        size="lg"
                        className="rounded-xl gap-2 self-start text-lg h-12 px-5"
                      >
                        <Link to={tool.to} aria-label={`${tool.cta} — ${tool.title}`}>
                          {tool.cta}
                          <ArrowRight className="h-5 w-5" aria-hidden="true" />
                        </Link>
                      </Button>
                    </CardContent>
                  </Card>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* ── Organizations ─────────────────────────────────────────────── */}
        <section
          aria-labelledby="organizations-heading"
          className="container max-w-6xl py-14 md:py-20"
        >
          <div className="mb-10">
            <div className="flex items-center gap-3 mb-3">
              <HeartHandshake className="h-7 w-7 text-primary" aria-hidden="true" />
              <h2
                id="organizations-heading"
                className="text-3xl md:text-4xl font-bold text-foreground"
              >
                Organizations that can help
              </h2>
            </div>
            <p className="text-xl text-foreground/80 max-w-3xl">
              These are the groups we trust. All four are nonprofit, member-driven, and offer free
              or low-cost resources to people of every age.
            </p>
          </div>

          <ul className="grid md:grid-cols-2 gap-5" role="list">
            {organizations.map((org) => (
              <li key={org.name}>
                <Card className="rounded-2xl border-2 border-border bg-card hover:border-primary transition-colors h-full">
                  <CardContent className="p-6 flex flex-col h-full">
                    <h3 className="text-xl md:text-2xl font-bold text-foreground mb-3 leading-snug">
                      {org.name}
                    </h3>
                    <p className="text-lg text-foreground/85 leading-relaxed mb-5 flex-1">
                      {org.description}
                    </p>
                    <a
                      href={org.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`Visit ${org.name} website (opens in a new tab)`}
                      className="inline-flex items-center gap-2 text-lg font-semibold text-primary hover:underline self-start focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-primary/60 rounded-md"
                    >
                      Visit website
                      <ExternalLink className="h-5 w-5" aria-hidden="true" />
                    </a>
                  </CardContent>
                </Card>
              </li>
            ))}
          </ul>
        </section>

        {/* ── Request a custom guide CTA ────────────────────────────────── */}
        <section
          aria-labelledby="custom-heading"
          className="bg-primary/10 border-t border-border"
        >
          <div className="container max-w-4xl py-16 md:py-20 text-center">
            <div
              className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-primary/20 mb-5"
              aria-hidden="true"
            >
              <Mail className="h-7 w-7 text-primary" />
            </div>
            <h2
              id="custom-heading"
              className="text-3xl md:text-4xl font-bold text-foreground mb-4"
            >
              Don't see your situation?
            </h2>
            <p className="text-xl md:text-2xl text-foreground/85 leading-relaxed max-w-2xl mx-auto mb-3">
              Request a custom guide.
            </p>
            <p className="text-xl text-foreground/80 leading-relaxed max-w-2xl mx-auto mb-8">
              Every disability is different and every device is too. Tell us what you are trying to
              do and we will write a guide for it — for free, and we will email it to you when it
              is ready.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                asChild
                size="lg"
                className="rounded-xl gap-2 h-14 text-lg px-7"
              >
                <Link
                  to="/ask"
                  aria-label="Request a custom accessibility guide"
                >
                  Request a custom guide
                  <ArrowRight className="h-5 w-5" aria-hidden="true" />
                </Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="rounded-xl gap-2 h-14 text-lg px-7 border-2"
              >
                <Link to="/forum" aria-label="Ask the TekSure community forum">
                  <MessageCircle className="h-5 w-5" aria-hidden="true" />
                  Ask the community
                </Link>
              </Button>
            </div>
            <p className="mt-8 text-base text-foreground/70">
              Already know what to tweak? Jump to{' '}
              <Link to="/accessibility#vision" className="underline font-medium text-primary">
                Settings → Accessibility
              </Link>{' '}
              shortcuts for every major device.
            </p>
            <div className="mt-10">
              <Button
                asChild
                variant="ghost"
                size="lg"
                className="rounded-xl gap-2 text-lg h-12"
              >
                <Link
                  to="/guides?category=accessibility"
                  aria-label="Browse all accessibility guides"
                >
                  <Settings className="h-5 w-5" aria-hidden="true" />
                  Browse all accessibility guides
                </Link>
              </Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

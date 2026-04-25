import { useState, useEffect, useCallback } from 'react';
import { Rocket, Clock, Compass, ArrowUp, Lightbulb, Mail } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { SEOHead } from '@/components/SEOHead';

// ── Data ─────────────────────────────────────────────────────────────────────
type RoadmapStatus = 'now' | 'next' | 'later';

interface RoadmapItem {
  id: string;
  title: string;
  description: string;
  status: RoadmapStatus;
  initialVotes: number;
}

const ROADMAP_ITEMS: RoadmapItem[] = [
  // ── NOW ──
  {
    id: 'tekbrain-expansion',
    title: 'TekBrain knowledge base expansion',
    description:
      'Embedding thousands more step-by-step guides so TekBrain can answer almost any everyday tech question.',
    status: 'now',
    initialVotes: 248,
  },
  {
    id: 'mobile-app',
    title: 'Mobile app for iOS and Android',
    description:
      'A simple, senior-friendly phone app with offline guides, one-tap help, and larger buttons.',
    status: 'now',
    initialVotes: 412,
  },
  {
    id: 'spanish-guides',
    title: 'Spanish language guides',
    description:
      'Every TekSure guide available in clear, everyday Spanish — written by native speakers, not machine translation.',
    status: 'now',
    initialVotes: 187,
  },
  {
    id: 'volunteer-program',
    title: 'Volunteer contributor program',
    description:
      'A welcoming way for retired techies, teachers, and kind neighbors to help write and review guides.',
    status: 'now',
    initialVotes: 96,
  },

  // ── NEXT ──
  {
    id: 'teksure-plus',
    title: 'TekSure Plus membership tier',
    description:
      'Priority help, printable guide packets, and extra tools for folks who want a little more support — still free at the core.',
    status: 'next',
    initialVotes: 134,
  },
  {
    id: 'live-video-help',
    title: 'Live 1-on-1 tech help video sessions',
    description:
      'Book a friendly technician for a face-to-face video call when typing just isn\u2019t enough.',
    status: 'next',
    initialVotes: 356,
  },
  {
    id: 'print-booklets',
    title: 'Print-on-demand booklets by mail',
    description:
      'Physical, spiral-bound guidebooks mailed to your door — no printer required, easy to keep by the computer.',
    status: 'next',
    initialVotes: 201,
  },
  {
    id: 'weekly-newsletter',
    title: 'Weekly email newsletter',
    description:
      'One short, friendly email every Sunday with a helpful tip, a scam warning, and the week\u2019s best guide.',
    status: 'next',
    initialVotes: 289,
  },
  {
    id: 'partner-library',
    title: 'Partner library integration',
    description:
      'Partnering with local libraries so TekSure guides are available on library computers and at help desks.',
    status: 'next',
    initialVotes: 78,
  },
  {
    id: 'chrome-extension',
    title: 'Chrome extension \u2014 scam warnings',
    description:
      'A small browser helper that quietly warns you when a webpage or link looks like a known scam.',
    status: 'next',
    initialVotes: 312,
  },
  {
    id: 'smart-tv-app',
    title: 'Smart TV app with voice control',
    description:
      'Watch TekSure video guides on your television, and ask TekBrain questions out loud from your couch.',
    status: 'next',
    initialVotes: 142,
  },
  {
    id: 'voice-first-calls',
    title: 'Voice-first AI calls (TekBrain over phone)',
    description:
      'Call a phone number and talk to TekBrain out loud — perfect for folks who don\u2019t want to type.',
    status: 'next',
    initialVotes: 267,
  },

  // ── LATER ──
  {
    id: 'mandarin-vietnamese',
    title: 'Mandarin and Vietnamese translations',
    description:
      'Expanding beyond Spanish to reach more communities with carefully translated, culturally-aware guides.',
    status: 'later',
    initialVotes: 64,
  },
  {
    id: 'ar-glasses',
    title: 'AR glasses tutorials',
    description:
      'Once augmented-reality glasses become everyday tech, we\u2019ll help people learn to use them safely.',
    status: 'later',
    initialVotes: 29,
  },
  {
    id: 'in-person-classes',
    title: 'In-person TekSure classes in major cities',
    description:
      'Small, friendly group classes at senior centers and libraries \u2014 starting with a few pilot cities.',
    status: 'later',
    initialVotes: 173,
  },
  {
    id: 'white-label-senior-living',
    title: 'White-label for senior living communities',
    description:
      'A custom version of TekSure that senior living communities can offer to every resident.',
    status: 'later',
    initialVotes: 87,
  },
  {
    id: 'family-account-plans',
    title: 'Family account plans',
    description:
      'One account shared by a whole family so adult children can help parents and grandparents remotely.',
    status: 'later',
    initialVotes: 221,
  },
  {
    id: 'teksure-hardware',
    title: 'TekSure Hardware \u2014 senior-friendly tablet',
    description:
      'A simple, pre-configured tablet with TekSure built in \u2014 big buttons, no confusing setup.',
    status: 'later',
    initialVotes: 308,
  },
  {
    id: 'community-buddies',
    title: 'Community tech buddies matching',
    description:
      'Match kind volunteers with people who need a little ongoing tech support \u2014 like a gentle pen-pal for tech questions.',
    status: 'later',
    initialVotes: 115,
  },
  {
    id: 'video-first-guides',
    title: 'Video-first guide format',
    description:
      'Short, plain-language video walkthroughs as the main format for every guide, with text as a backup.',
    status: 'later',
    initialVotes: 198,
  },
];

// ── Status config ────────────────────────────────────────────────────────────
const statusConfig: Record<RoadmapStatus, {
  label: string;
  description: string;
  icon: typeof Rocket;
  badgeClass: string;
  columnAccent: string;
  dotClass: string;
}> = {
  now: {
    label: 'Now',
    description: 'Currently building',
    icon: Rocket,
    badgeClass:
      'bg-[hsl(var(--teksure-success)/0.15)] text-[hsl(var(--teksure-success))] border-[hsl(var(--teksure-success)/0.3)]',
    columnAccent: 'border-[hsl(var(--teksure-success)/0.4)]',
    dotClass: 'bg-[hsl(var(--teksure-success))]',
  },
  next: {
    label: 'Next',
    description: 'Coming soon',
    icon: Clock,
    badgeClass:
      'bg-[hsl(var(--teksure-info)/0.15)] text-[hsl(var(--teksure-info))] border-[hsl(var(--teksure-info)/0.3)]',
    columnAccent: 'border-[hsl(var(--teksure-info)/0.4)]',
    dotClass: 'bg-[hsl(var(--teksure-info))]',
  },
  later: {
    label: 'Later',
    description: 'Exploring',
    icon: Compass,
    badgeClass: 'bg-muted text-muted-foreground border-border',
    columnAccent: 'border-border',
    dotClass: 'bg-muted-foreground',
  },
};

const STORAGE_VOTES = 'teksure-roadmap-votes';
const STORAGE_VOTED = 'teksure-roadmap-voted';

// Safe localStorage helpers — avoid SSR crashes
function readJSON<T>(key: string, fallback: T): T {
  if (typeof window === 'undefined') return fallback;
  try {
    const raw = window.localStorage.getItem(key);
    if (!raw) return fallback;
    return JSON.parse(raw) as T;
  } catch {
    return fallback;
  }
}

function writeJSON(key: string, value: unknown) {
  if (typeof window === 'undefined') return;
  try {
    window.localStorage.setItem(key, JSON.stringify(value));
  } catch {
    // quota exceeded / private mode — silently ignore
  }
}

// ── Page ─────────────────────────────────────────────────────────────────────
export default function Roadmap() {
  // Vote counts keyed by item id
  const [votes, setVotes] = useState<Record<string, number>>({});
  // Which items the user has already voted on
  const [voted, setVoted] = useState<Record<string, boolean>>({});

  // Load from localStorage once on mount, merging with any new items
  useEffect(() => {
    const savedVotes = readJSON<Record<string, number>>(STORAGE_VOTES, {});
    const savedVoted = readJSON<Record<string, boolean>>(STORAGE_VOTED, {});

    const merged: Record<string, number> = {};
    for (const item of ROADMAP_ITEMS) {
      merged[item.id] = savedVotes[item.id] ?? item.initialVotes;
    }
    setVotes(merged);
    setVoted(savedVoted);
  }, []);

  const handleUpvote = useCallback((id: string) => {
    setVotes((prev) => {
      const next = { ...prev, [id]: (prev[id] ?? 0) + 1 };
      writeJSON(STORAGE_VOTES, next);
      return next;
    });
    setVoted((prev) => {
      const next = { ...prev, [id]: true };
      writeJSON(STORAGE_VOTED, next);
      return next;
    });
  }, []);

  const columns: { status: RoadmapStatus; items: RoadmapItem[] }[] = (
    ['now', 'next', 'later'] as RoadmapStatus[]
  ).map((status) => ({
    status,
    items: ROADMAP_ITEMS.filter((i) => i.status === status),
  }));

  const renderCard = (item: RoadmapItem) => {
    const cfg = statusConfig[item.status];
    const count = votes[item.id] ?? item.initialVotes;
    const hasVoted = !!voted[item.id];

    return (
      <Card
        key={item.id}
        className="rounded-2xl border border-border bg-card hover:border-primary/40 hover:shadow-md transition-all duration-200"
      >
        <CardContent className="p-6 flex flex-col gap-4">
          <div className="flex items-start justify-between gap-3">
            <h3 className="text-lg font-semibold text-foreground leading-snug flex-1">
              {item.title}
            </h3>
            <Badge className={`shrink-0 text-xs border ${cfg.badgeClass}`}>
              {cfg.label}
            </Badge>
          </div>

          <p className="text-base text-foreground/75 leading-relaxed">
            {item.description}
          </p>

          <div className="pt-2 flex items-center justify-between border-t border-border/60">
            <Button
              type="button"
              variant={hasVoted ? 'default' : 'outline'}
              size="lg"
              onClick={() => handleUpvote(item.id)}
              disabled={hasVoted}
              aria-label={
                hasVoted
                  ? `You voted for ${item.title}. ${count} total votes.`
                  : `Vote for ${item.title}. Currently ${count} votes.`
              }
              className={`h-11 rounded-full px-5 text-base font-semibold gap-2 ${
                hasVoted
                  ? 'bg-primary text-primary-foreground cursor-default'
                  : 'hover:bg-primary/10 hover:border-primary hover:text-primary'
              }`}
            >
              <ArrowUp className="h-5 w-5" aria-hidden="true" />
              {hasVoted ? 'Voted' : 'Upvote'}
            </Button>
            <span
              className="text-lg font-semibold text-foreground tabular-nums"
              aria-hidden="true"
            >
              {count.toLocaleString()}
            </span>
          </div>
        </CardContent>
      </Card>
    );
  };

  return (
    <>
      <SEOHead
        title="What We're Building Next | TekSure Roadmap"
        description="Our public roadmap. See what TekSure is building now, next, and later — and vote on what should come first."
        path="/roadmap"
      />
      <main className="min-h-screen bg-background">
        {/* Hero */}
        <section className="border-b border-border bg-gradient-to-b from-amber-50/60 via-orange-50/30 to-background dark:from-muted/40 dark:via-muted/20 dark:to-background py-16 md:py-20">
          <div className="container mx-auto px-4 max-w-6xl text-center">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium mb-6">
              <Rocket className="h-4 w-4" aria-hidden="true" />
              Public Roadmap
            </div>
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-foreground mb-4">
              What We&rsquo;re Building Next
            </h1>
            <p className="text-lg md:text-xl text-foreground/70 max-w-2xl mx-auto leading-relaxed">
              Our public roadmap. Vote on what should come first.
            </p>
          </div>
        </section>

        {/* Three-column roadmap */}
        <section className="py-16 md:py-20">
          <div className="container mx-auto px-4 max-w-7xl">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-6">
              {columns.map(({ status, items }) => {
                const cfg = statusConfig[status];
                const Icon = cfg.icon;
                return (
                  <div key={status} className="flex flex-col gap-5">
                    {/* Column header */}
                    <div
                      className={`rounded-2xl border-2 ${cfg.columnAccent} bg-card p-5 flex items-center gap-3`}
                    >
                      <span
                        className={`w-3 h-3 rounded-full ${cfg.dotClass}`}
                        aria-hidden="true"
                      />
                      <Icon
                        className="h-6 w-6 text-foreground/70"
                        aria-hidden="true"
                      />
                      <div className="flex-1">
                        <h2 className="text-2xl font-bold text-foreground leading-tight">
                          {cfg.label}
                        </h2>
                        <p className="text-sm text-foreground/65">
                          {cfg.description} &middot; {items.length} item
                          {items.length !== 1 ? 's' : ''}
                        </p>
                      </div>
                    </div>

                    {/* Column items */}
                    <div className="flex flex-col gap-5">
                      {items.map(renderCard)}
                    </div>
                  </div>
                );
              })}
            </div>

            {/* "Have an idea?" card */}
            <div className="mt-16">
              <Card className="rounded-2xl border-2 border-primary/20 bg-gradient-to-br from-primary/5 via-amber-50/50 to-orange-50/50 dark:from-primary/10 dark:via-muted/40 dark:to-muted/40">
                <CardContent className="p-8 md:p-10 flex flex-col md:flex-row items-center gap-6 text-center md:text-left">
                  <div className="shrink-0 h-16 w-16 rounded-full bg-primary/15 flex items-center justify-center">
                    <Lightbulb
                      className="h-8 w-8 text-primary"
                      aria-hidden="true"
                    />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-foreground mb-2">
                      Have an idea?
                    </h3>
                    <p className="text-base md:text-lg text-foreground/75 leading-relaxed">
                      We read every suggestion. Tell us what would make TekSure more
                      helpful for you, your parents, or the folks you look after.
                    </p>
                  </div>
                  <Button
                    asChild
                    size="lg"
                    className="h-14 px-8 text-base font-semibold rounded-full shadow-md hover:shadow-lg whitespace-nowrap"
                  >
                    <a
                      href="mailto:roadmap@teksure.com?subject=TekSure%20Roadmap%20Idea"
                      aria-label="Email your roadmap idea to roadmap@teksure.com"
                    >
                      <Mail className="mr-2 h-5 w-5" aria-hidden="true" />
                      Share your idea
                    </a>
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}

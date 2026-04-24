import { Link } from 'react-router-dom';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { PageBreadcrumb } from '@/components/PageBreadcrumb';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import {
  Sprout,
  Leaf,
  TreePine,
  ArrowRight,
  Heart,
  HandHeart,
  Brain,
  Calendar,
  MapPin,
  CheckCircle2,
  BookOpen,
} from 'lucide-react';

// Level guide sequences — uses real slugs from the TekSure library with sensible
// substitutes where exact slugs were not available. Substitutes still route to
// the closest in-library guide so users never hit a dead link.

type GuideLink = {
  num: number;
  title: string;
  slug: string;
};

const level1Guides: GuideLink[] = [
  { num: 1, title: 'How to turn on your device', slug: 'how-to-turn-on-your-computer' },
  { num: 2, title: 'What is the internet', slug: 'what-is-the-internet' },
  { num: 3, title: 'How to connect to WiFi', slug: 'how-to-connect-wifi' },
  { num: 4, title: 'How to open a web browser', slug: 'what-is-a-web-browser' },
  { num: 5, title: 'How to search Google', slug: 'how-to-search-google' },
  { num: 6, title: 'How to stay safe online (the basics)', slug: 'how-to-create-strong-password' },
];

const level2Guides: GuideLink[] = [
  { num: 1, title: 'How to send email', slug: 'set-up-gmail-account' },
  { num: 2, title: 'How to video call your family', slug: 'use-facetime-iphone-ipad' },
  { num: 3, title: 'How to take and share photos', slug: 'how-to-take-screenshot' },
  { num: 4, title: 'How to use the appointment calendar', slug: 'use-google-calendar' },
  { num: 5, title: 'How to shop online safely', slug: 'shop-safely-amazon' },
  { num: 6, title: 'How to stream entertainment', slug: 'use-youtube-on-tv' },
  { num: 7, title: 'How to pay bills online', slug: 'pay-bills-online' },
  { num: 8, title: 'How to check Medicare online', slug: 'use-medicare-website-app' },
];

const level3Guides: GuideLink[] = [
  { num: 1, title: 'How to use AI helpers', slug: 'use-chatgpt-daily-life' },
  { num: 2, title: 'How to organize your digital life', slug: 'organize-digital-files-folders' },
  { num: 3, title: 'How to back up your devices', slug: 'how-to-backup-iphone' },
  { num: 4, title: 'How to teach other seniors', slug: 'teach-seniors-technology' },
  { num: 5, title: 'How to build a password system', slug: 'share-passwords-safely-family' },
  { num: 6, title: 'Digital estate planning', slug: 'create-digital-estate-plan' },
];

const levelCards = [
  {
    icon: Sprout,
    emoji: '',
    title: 'Brand New',
    description: 'Never used a computer or smartphone before. We will start from step one.',
    levelHref: '#level-1',
    bg: 'bg-emerald-50 dark:bg-emerald-950/30',
    iconColor: 'text-emerald-600',
  },
  {
    icon: Leaf,
    emoji: '',
    title: 'Some Experience',
    description: 'You can check email or make a call. You want to do more.',
    levelHref: '#level-2',
    bg: 'bg-sky-50 dark:bg-sky-950/30',
    iconColor: 'text-sky-600',
  },
  {
    icon: TreePine,
    emoji: '',
    title: 'Comfortable',
    description: 'You use your device daily and are ready for advanced topics.',
    levelHref: '#level-3',
    bg: 'bg-amber-50 dark:bg-amber-950/30',
    iconColor: 'text-amber-700',
  },
];

function LevelSection({
  id,
  badge,
  title,
  subtitle,
  guides,
  accentClass,
}: {
  id: string;
  badge: string;
  title: string;
  subtitle: string;
  guides: GuideLink[];
  accentClass: string;
}) {
  return (
    <section id={id} className="scroll-mt-20">
      <div className="mb-6">
        <Badge className={`${accentClass} text-base py-1 px-3 mb-3`}>{badge}</Badge>
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-2">{title}</h2>
        <p className="text-lg text-muted-foreground">{subtitle}</p>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        {guides.map((g) => (
          <Link
            key={g.slug}
            to={`/guides/${g.slug}`}
            className="group flex items-center gap-4 rounded-2xl border bg-card p-5 min-h-[88px] transition hover:border-primary hover:shadow-md focus:outline-none focus:ring-2 focus:ring-primary"
          >
            <div className={`h-12 w-12 rounded-full ${accentClass} flex items-center justify-center font-bold text-xl flex-shrink-0`}>
              {g.num}
            </div>
            <div className="flex-1 min-w-0">
              <p className="font-semibold text-lg leading-snug">{g.title}</p>
            </div>
            <ArrowRight className="h-5 w-5 text-muted-foreground group-hover:text-primary transition flex-shrink-0" aria-hidden="true" />
          </Link>
        ))}
      </div>
    </section>
  );
}

export default function SeniorTechPath() {
  return (
    <>
      <SEOHead
        title="Tech for Seniors — A Step-by-Step Path for Older Adults | TekSure"
        description="A step-by-step path designed specifically for adults over 60. Start with the basics. No experience needed. No pressure. No jargon."
        path="/senior-tech-path"
      />
      <Navbar />
      <main className="min-h-screen bg-background text-[18px] leading-relaxed">
        <div className="container pt-4">
          <PageBreadcrumb segments={[{ label: 'Tech for Seniors' }]} />
        </div>

        {/* Hero */}
        <section className="border-b">
          <div className="container py-12 md:py-20 max-w-4xl">
            <div className="flex items-center gap-3 mb-5">
              <div className="h-14 w-14 rounded-2xl bg-rose-50 dark:bg-rose-950/30 flex items-center justify-center flex-shrink-0">
                <HandHeart className="h-7 w-7 text-rose-600" aria-hidden="true" />
              </div>
              <Badge variant="secondary" className="text-base py-1 px-3">For Adults 60+</Badge>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-5">
              Technology at Your Own Pace
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed">
              A step-by-step path designed specifically for adults over 60. Start with the basics.
              No experience needed. No pressure. No jargon.
            </p>
          </div>
        </section>

        {/* Start Where You Are */}
        <section className="container py-14 md:py-16 max-w-5xl">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-3">
            Start Where You Are
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl">
            Pick the description that fits you best today. You can always move up — and there is no rush.
          </p>

          <div className="grid gap-5 md:grid-cols-3">
            {levelCards.map((card) => {
              const Icon = card.icon;
              return (
                <a
                  key={card.title}
                  href={card.levelHref}
                  className={`group block rounded-3xl border-2 bg-card p-7 transition hover:shadow-lg hover:border-primary focus:outline-none focus:ring-2 focus:ring-primary`}
                >
                  <div className={`h-16 w-16 rounded-2xl ${card.bg} flex items-center justify-center mb-4`}>
                    <Icon className={`h-8 w-8 ${card.iconColor}`} aria-hidden="true" />
                  </div>
                  <div className="text-3xl mb-2" aria-hidden="true">{card.emoji}</div>
                  <h3 className="text-2xl font-bold mb-2">{card.title}</h3>
                  <p className="text-lg text-muted-foreground leading-relaxed">{card.description}</p>
                </a>
              );
            })}
          </div>
        </section>

        {/* Levels */}
        <div className="container pb-8 max-w-4xl space-y-16">
          <LevelSection
            id="level-1"
            badge="Level 1"
            title="Your First Steps"
            subtitle="Six short guides that cover the very beginning. If something feels confusing, that is normal. Read it twice and come back tomorrow."
            guides={level1Guides}
            accentClass="bg-emerald-100 text-emerald-800 dark:bg-emerald-950/40 dark:text-emerald-300"
          />

          <LevelSection
            id="level-2"
            badge="Level 2"
            title="Everyday Essentials"
            subtitle="The things most people use technology for every week — email, video calls, photos, shopping, and bills."
            guides={level2Guides}
            accentClass="bg-sky-100 text-sky-800 dark:bg-sky-950/40 dark:text-sky-300"
          />

          <LevelSection
            id="level-3"
            badge="Level 3"
            title="Confidence Builder"
            subtitle="You have the basics. Now let's make your digital life safer, tidier, and more useful for the people you love."
            guides={level3Guides}
            accentClass="bg-amber-100 text-amber-800 dark:bg-amber-950/40 dark:text-amber-300"
          />
        </div>

        {/* Take Your Time callout */}
        <section className="container py-12 max-w-4xl">
          <div className="rounded-3xl border-2 border-rose-200 bg-rose-50/60 dark:bg-rose-950/20 dark:border-rose-900 p-8 md:p-10">
            <div className="flex items-start gap-4">
              <div className="h-14 w-14 rounded-2xl bg-rose-100 dark:bg-rose-950/50 flex items-center justify-center flex-shrink-0">
                <Heart className="h-7 w-7 text-rose-600" aria-hidden="true" />
              </div>
              <div>
                <h2 className="text-2xl md:text-3xl font-bold mb-3">Take Your Time</h2>
                <p className="text-lg md:text-xl leading-relaxed">
                  Technology is not a race. If one step feels hard, it is OK to come back tomorrow.
                  Most people don't remember their first time using a computer — and you won't either,
                  once it becomes natural.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Free Tech Help Programs card */}
        <section className="container py-8 max-w-4xl">
          <Card className="border-2">
            <CardHeader>
              <div className="flex items-center gap-3">
                <div className="h-12 w-12 rounded-xl bg-emerald-50 dark:bg-emerald-950/30 flex items-center justify-center flex-shrink-0">
                  <BookOpen className="h-6 w-6 text-emerald-600" aria-hidden="true" />
                </div>
                <CardTitle className="text-2xl">Free Tech Help Programs</CardTitle>
              </div>
            </CardHeader>
            <CardContent className="space-y-5">
              <p className="text-lg leading-relaxed">
                You do not have to figure this out alone. Several national programs offer free,
                patient, senior-specific tech help — by phone, by video, or in person.
              </p>
              <ul className="space-y-3 text-lg">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="h-6 w-6 text-emerald-600 mt-1 flex-shrink-0" aria-hidden="true" />
                  <span><strong>Senior Planet</strong> — free online classes for adults 60+.</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="h-6 w-6 text-emerald-600 mt-1 flex-shrink-0" aria-hidden="true" />
                  <span><strong>AARP TEK</strong> — free workshops and phone help for members and non-members.</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="h-6 w-6 text-emerald-600 mt-1 flex-shrink-0" aria-hidden="true" />
                  <span><strong>Cyber-Seniors</strong> — free tech tutoring from trained student volunteers.</span>
                </li>
              </ul>
              <Button asChild size="lg" className="min-h-[48px] text-base">
                <Link to="/free-resources">
                  See All Free Programs
                  <ArrowRight className="ml-2 h-5 w-5" aria-hidden="true" />
                </Link>
              </Button>
            </CardContent>
          </Card>
        </section>

        {/* Not Finding What You Need */}
        <section className="container py-12 pb-24 max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-3">
            Not Finding What You Need?
          </h2>
          <p className="text-lg text-muted-foreground mb-8">
            Three different ways to get help — whichever feels most comfortable for you.
          </p>

          <div className="grid gap-5 md:grid-cols-3">
            <Link
              to="/brain"
              className="group block rounded-2xl border-2 bg-card p-6 min-h-[180px] transition hover:shadow-md hover:border-primary focus:outline-none focus:ring-2 focus:ring-primary"
            >
              <div className="h-12 w-12 rounded-xl bg-violet-50 dark:bg-violet-950/30 flex items-center justify-center mb-3">
                <Brain className="h-6 w-6 text-violet-600" aria-hidden="true" />
              </div>
              <h3 className="text-xl font-bold mb-2">Ask Any Question</h3>
              <p className="text-base text-muted-foreground leading-relaxed">
                Type a question in plain English. Our helper will answer in plain English.
              </p>
            </Link>

            <Link
              to="/get-help"
              className="group block rounded-2xl border-2 bg-card p-6 min-h-[180px] transition hover:shadow-md hover:border-primary focus:outline-none focus:ring-2 focus:ring-primary"
            >
              <div className="h-12 w-12 rounded-xl bg-sky-50 dark:bg-sky-950/30 flex items-center justify-center mb-3">
                <Calendar className="h-6 w-6 text-sky-600" aria-hidden="true" />
              </div>
              <h3 className="text-xl font-bold mb-2">Book a Session</h3>
              <p className="text-base text-muted-foreground leading-relaxed">
                One-on-one help from a real person. Go at your pace, ask anything.
              </p>
            </Link>

            <Link
              to="/tech-help-near-me"
              className="group block rounded-2xl border-2 bg-card p-6 min-h-[180px] transition hover:shadow-md hover:border-primary focus:outline-none focus:ring-2 focus:ring-primary"
            >
              <div className="h-12 w-12 rounded-xl bg-emerald-50 dark:bg-emerald-950/30 flex items-center justify-center mb-3">
                <MapPin className="h-6 w-6 text-emerald-600" aria-hidden="true" />
              </div>
              <h3 className="text-xl font-bold mb-2">Find Local Help</h3>
              <p className="text-base text-muted-foreground leading-relaxed">
                Libraries, senior centers, and community groups near you.
              </p>
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

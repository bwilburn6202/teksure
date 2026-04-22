import {
  Library,
  Users,
  Heart,
  HandHeart,
  Church,
  GraduationCap,
  ExternalLink,
  Phone,
  MapPin,
  Clock,
  Battery,
  KeyRound,
  ListChecks,
  Home,
  BookOpen,
  ShieldAlert,
  AlertTriangle,
  Store,
  Apple,
  Monitor,
  UserCircle,
  PhoneCall,
  Wrench,
  Sparkles,
  CheckCircle2,
  XCircle,
  PenLine,
} from 'lucide-react';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';

// ── Types ──────────────────────────────────────────────────────────────────────

interface HelpOption {
  icon: typeof Library;
  emoji: string;
  title: string;
  offers: string;
  howToFind: string;
  cost: string;
  primaryLink?: { label: string; url: string; internal?: boolean };
}

interface SessionTip {
  icon: typeof Clock;
  title: string;
  detail: string;
}

interface RedFlag {
  icon: typeof AlertTriangle;
  title: string;
  detail: string;
}

// ── Free help ──────────────────────────────────────────────────────────────────

const freeHelp: HelpOption[] = [
  {
    icon: Library,
    emoji: '📚',
    title: 'Public libraries',
    offers:
      'Most US libraries offer free tech classes and one-on-one appointments with a librarian or volunteer. Bring any device — phone, laptop, tablet.',
    howToFind:
      'Walk in and ask at the info desk, or search the IMLS public library directory for one near you.',
    cost: 'Free',
    primaryLink: { label: 'Find a library (IMLS)', url: 'https://www.imls.gov/search-compare' },
  },
  {
    icon: Heart,
    emoji: '🏢',
    title: 'AARP Tech Wednesdays',
    offers:
      'Weekly free virtual and in-person tech classes taught by AARP volunteers. Topics rotate — smartphones, scam spotting, video calling, social media.',
    howToFind:
      'Search your city on AARP local events. Members and non-members are both welcome at most sessions.',
    cost: 'Free (no membership required)',
    primaryLink: { label: 'AARP local events', url: 'https://local.aarp.org' },
  },
  {
    icon: Users,
    emoji: '👴',
    title: 'Senior centers',
    offers:
      'Local senior centers often have drop-in tech help, sometimes paired with teen volunteers from nearby schools as part of service-learning programs.',
    howToFind:
      'Call the Eldercare Locator — they will tell you every senior service near your ZIP code, including tech help hours.',
    cost: 'Free',
    primaryLink: { label: 'Eldercare Locator', url: 'https://eldercare.acl.gov' },
  },
  {
    icon: HandHeart,
    emoji: '🎓',
    title: 'Cyber-Seniors',
    offers:
      'A nonprofit that connects seniors with student volunteers for free remote (and sometimes in-person) tech tutoring. Schedule one-on-one sessions over video or phone.',
    howToFind:
      'Sign up on cyberseniors.org or call their toll-free line to be matched with a student mentor.',
    cost: 'Free',
    primaryLink: { label: 'Cyber-Seniors', url: 'https://cyberseniors.org' },
  },
  {
    icon: BookOpen,
    emoji: '💻',
    title: 'GetSetUp',
    offers:
      'Live online classes designed for adults 50+ — everything from iPhone basics to Zoom, banking apps, fraud defense, even fitness and languages.',
    howToFind:
      'Sign up on getsetup.io. Many classes are free thanks to state and health plan partnerships.',
    cost: 'Many classes free, some paid',
    primaryLink: { label: 'GetSetUp', url: 'https://www.getsetup.io' },
  },
];

// ── Paid but accessible ────────────────────────────────────────────────────────

const paidHelp: HelpOption[] = [
  {
    icon: Store,
    emoji: '🛒',
    title: 'Best Buy Geek Squad',
    offers:
      'In-home tech visits for setup, troubleshooting, smart-home install, and virus removal. Can also work remotely or at a Best Buy store.',
    howToFind:
      'Book online or call 1-800-GEEK-SQUAD. In-home visits start around $100; Total Tech membership covers unlimited visits.',
    cost: '~$100/visit · Total Tech ~$200/year unlimited',
    primaryLink: { label: 'Geek Squad', url: 'https://www.bestbuy.com/services/triage/home' },
  },
  {
    icon: Apple,
    emoji: '🍎',
    title: 'Today at Apple',
    offers:
      'Free in-store sessions at any Apple Store — hands-on with iPhone, iPad, Mac, Apple Watch. Great for device basics, photos, messages, accessibility features.',
    howToFind:
      'Reserve a spot on apple.com/today. Sessions are free even if you did not buy your device from Apple.',
    cost: 'Free',
    primaryLink: { label: 'Today at Apple', url: 'https://www.apple.com/today/' },
  },
  {
    icon: Monitor,
    emoji: '🪟',
    title: 'Microsoft Store Workshops',
    offers:
      'Where Microsoft Experience Centers still exist, free Windows and Surface workshops are available, plus free virtual answer desk appointments.',
    howToFind:
      'Visit microsoft.com/store/locations or book a virtual answer desk session — you do not need a Microsoft device to attend.',
    cost: 'Free',
    primaryLink: {
      label: 'Microsoft Answer Desk',
      url: 'https://support.microsoft.com/en-us/contactus',
    },
  },
  {
    icon: UserCircle,
    emoji: '👨‍🎓',
    title: 'Ask a teenager',
    offers:
      'Grandkids, nieces, nephews, and neighborhood teens often know their way around phones and computers. Offering $15–$25 an hour turns a favor into a reliable habit.',
    howToFind:
      'Ask family first. For neighborhood teens, post on Nextdoor or ask a local high school about students in their tech or service club.',
    cost: 'Free to ~$25/hour',
  },
];

// ── Community ──────────────────────────────────────────────────────────────────

const communityHelp: HelpOption[] = [
  {
    icon: Home,
    emoji: '🏘️',
    title: 'Nextdoor',
    offers:
      'The neighborhood social app. Post a polite request — "Looking for a kind neighbor to help me set up my new iPhone" — and you will often get several offers within a day.',
    howToFind:
      'Sign up on nextdoor.com with your address. Use the "Help" or "Recommendations" category for tech requests.',
    cost: 'Free',
    primaryLink: { label: 'Nextdoor', url: 'https://nextdoor.com' },
  },
  {
    icon: Church,
    emoji: '⛪',
    title: 'Church tech ministries',
    offers:
      'Many churches, synagogues, mosques, and community centers run tech help as part of their outreach — often staffed by retired engineers and teachers who love to help.',
    howToFind:
      'Call the church office and ask if they have a tech volunteer or "digital ministry." Most welcome everyone, not just members.',
    cost: 'Free (a small donation is appreciated)',
  },
  {
    icon: GraduationCap,
    emoji: '🏫',
    title: 'Community college continuing ed',
    offers:
      'Affordable short courses on computers, smartphones, online safety, and specific apps. Classes meet weekly for a few weeks — you get real practice with a patient instructor.',
    howToFind:
      'Search your local community college for "continuing education" or "lifelong learning." Seniors 60+ often attend free or at a discount.',
    cost: '$0–$75/course · senior discounts common',
  },
];

// ── Emergency ──────────────────────────────────────────────────────────────────

const emergencyHelp: HelpOption[] = [
  {
    icon: PhoneCall,
    emoji: '📞',
    title: 'Call a family member first',
    offers:
      'For urgent problems — you think you clicked a scam link, a charge you do not recognize, a device that will not turn on — call someone who knows you before paying anyone.',
    howToFind:
      'Keep the phone numbers of one or two trusted family members written down somewhere easy to see. A trusted voice beats a stranger every time.',
    cost: 'Free',
  },
  {
    icon: Wrench,
    emoji: '🛟',
    title: 'Book a TekSure technician',
    offers:
      'Plain-language, patient tech help over video. A TekSure helper can walk you through almost anything — from passwords to printer setup to figuring out what that pop-up means.',
    howToFind:
      'Book online at /book. Sessions are scheduled so you never wait on hold.',
    cost: 'Flat fee per session · see pricing at booking',
    primaryLink: { label: 'Book a session', url: '/book', internal: true },
  },
];

// ── Session tips & red flags ───────────────────────────────────────────────────

const sessionTips: SessionTip[] = [
  {
    icon: PenLine,
    title: 'Write down your problem beforehand',
    detail:
      'In a single sentence: "My printer stopped working on Tuesday" or "I cannot sign in to my email." Specific beats vague every time.',
  },
  {
    icon: Battery,
    title: 'Bring your device and charger',
    detail:
      'Take the exact device that is giving you trouble, with its charger. Sessions run longer than expected and batteries die at bad moments.',
  },
  {
    icon: KeyRound,
    title: 'Have passwords ready — safely',
    detail:
      'Use a password manager like Bitwarden, or write passwords on paper in a sealed envelope. Never leave them on a sticky note on your monitor.',
  },
  {
    icon: ListChecks,
    title: 'Ask them to go slow and write things down',
    detail:
      'It is fine to say "Can you slow down?" or "Can you write that step down for me?" A good helper will do both without being annoyed.',
  },
];

const redFlags: RedFlag[] = [
  {
    icon: AlertTriangle,
    title: 'Door-to-door tech help',
    detail:
      'Nobody legitimate shows up at your door offering computer repair. If someone knocks claiming to be from Microsoft, Apple, or your internet company, do not let them in. Close the door and call a family member.',
  },
  {
    icon: PhoneCall,
    title: 'Unexpected callers offering "support"',
    detail:
      'Microsoft, Apple, Google, and your bank will never call you out of the blue about a virus or a problem with your account. Hang up. If you are worried, call the company yourself using the number on your bill or card.',
  },
  {
    icon: KeyRound,
    title: 'Anyone asking for passwords by phone',
    detail:
      'No real tech helper needs your password read aloud on the phone. If someone asks for your password, your Social Security number, or a gift card code — it is a scam. Every single time.',
  },
  {
    icon: XCircle,
    title: 'Pay-per-minute hotlines',
    detail:
      'Some "tech support" numbers charge by the minute and drag out the call. Free options above (libraries, AARP, Eldercare Locator) cover almost everything and will not nickel-and-dime you.',
  },
];

// ── Card renderer ──────────────────────────────────────────────────────────────

const OptionCard = ({ option }: { option: HelpOption }) => {
  const Icon = option.icon;
  return (
    <Card className="flex flex-col h-full border-2 border-amber-200/60 bg-white/70 hover:border-amber-400 hover:shadow-lg transition-all">
      <CardHeader className="pb-3">
        <div className="flex items-center gap-3 mb-2">
          <div className="inline-flex h-12 w-12 items-center justify-center rounded-lg bg-amber-100 text-amber-800">
            <Icon className="h-6 w-6" />
          </div>
          <span className="text-3xl" aria-hidden="true">
            {option.emoji}
          </span>
        </div>
        <CardTitle className="text-xl text-stone-900">{option.title}</CardTitle>
      </CardHeader>
      <CardContent className="flex-1 flex flex-col space-y-3">
        <p className="text-base text-stone-700 leading-relaxed">
          <span className="font-semibold text-stone-900">What they offer: </span>
          {option.offers}
        </p>
        <p className="text-base text-stone-700 leading-relaxed">
          <span className="font-semibold text-stone-900">How to find them: </span>
          {option.howToFind}
        </p>
        <div className="flex items-center gap-2 pt-1">
          <Badge className="bg-amber-100 text-amber-900 hover:bg-amber-100 border border-amber-300">
            {option.cost}
          </Badge>
        </div>
        {option.primaryLink && (
          <div className="mt-auto pt-2">
            <Button
              asChild
              size="lg"
              className="w-full bg-amber-700 hover:bg-amber-800 text-white text-base min-h-[48px]"
            >
              {option.primaryLink.internal ? (
                <a
                  href={option.primaryLink.url}
                  className="inline-flex items-center justify-center gap-2"
                >
                  {option.primaryLink.label}
                </a>
              ) : (
                <a
                  href={option.primaryLink.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2"
                >
                  {option.primaryLink.label}
                  <ExternalLink className="h-4 w-4" />
                </a>
              )}
            </Button>
          </div>
        )}
      </CardContent>
    </Card>
  );
};

// ── Page ───────────────────────────────────────────────────────────────────────

const TechHelpNearMe = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-50 via-orange-50/40 to-amber-50/60">
      <SEOHead
        title="Get In-Person Tech Help Near You | TekSure"
        description="Libraries, senior centers, AARP classes, and more — often free. A friendly directory of real, human tech help in your neighborhood."
      />
      <Navbar />

      <main className="container mx-auto px-4 py-12 md:py-16">
        {/* Hero */}
        <section className="mx-auto max-w-3xl text-center mb-14">
          <div className="inline-flex items-center gap-2 rounded-full bg-amber-100 text-amber-900 px-4 py-1.5 text-sm font-semibold mb-5 border border-amber-200">
            <MapPin className="h-4 w-4" />
            In-Person Tech Help Directory
          </div>
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-5 text-stone-900">
            Get In-Person Tech Help Near You
          </h1>
          <p className="text-xl md:text-2xl text-stone-700 leading-relaxed">
            Libraries, senior centers, AARP classes, and more —{' '}
            <span className="font-semibold text-amber-800">often free.</span>
          </p>
          <p className="text-base md:text-lg text-stone-600 mt-4">
            Face-to-face help is often the fastest way to solve a stubborn tech problem. Here are
            the best places to find real people nearby who can sit with you and walk you through it.
          </p>
        </section>

        {/* Free help */}
        <section className="mb-16">
          <div className="flex items-center gap-3 mb-6">
            <div className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-green-100 text-green-800">
              <Sparkles className="h-5 w-5" />
            </div>
            <div>
              <h2 className="text-3xl font-bold text-stone-900">Free help</h2>
              <p className="text-stone-600">
                These services cost nothing. Start here — almost every question can be answered for
                free.
              </p>
            </div>
          </div>
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {freeHelp.map((option) => (
              <OptionCard key={option.title} option={option} />
            ))}
          </div>
        </section>

        {/* Paid but accessible */}
        <section className="mb-16">
          <div className="flex items-center gap-3 mb-6">
            <div className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-blue-100 text-blue-800">
              <Store className="h-5 w-5" />
            </div>
            <div>
              <h2 className="text-3xl font-bold text-stone-900">Paid but accessible</h2>
              <p className="text-stone-600">
                Affordable, reputable options when you want dedicated one-on-one time.
              </p>
            </div>
          </div>
          <div className="grid gap-5 md:grid-cols-2">
            {paidHelp.map((option) => (
              <OptionCard key={option.title} option={option} />
            ))}
          </div>
        </section>

        {/* Community */}
        <section className="mb-16">
          <div className="flex items-center gap-3 mb-6">
            <div className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-purple-100 text-purple-800">
              <Users className="h-5 w-5" />
            </div>
            <div>
              <h2 className="text-3xl font-bold text-stone-900">Community</h2>
              <p className="text-stone-600">
                Neighbors, church groups, and local classes that often have a friendly face eager to
                help.
              </p>
            </div>
          </div>
          <div className="grid gap-5 md:grid-cols-3">
            {communityHelp.map((option) => (
              <OptionCard key={option.title} option={option} />
            ))}
          </div>
        </section>

        {/* Emergency */}
        <section className="mb-16">
          <div className="flex items-center gap-3 mb-6">
            <div className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-rose-100 text-rose-800">
              <ShieldAlert className="h-5 w-5" />
            </div>
            <div>
              <h2 className="text-3xl font-bold text-stone-900">In an emergency</h2>
              <p className="text-stone-600">
                Something urgent — a suspected scam, a device that will not start, a charge you do
                not recognize.
              </p>
            </div>
          </div>
          <div className="grid gap-5 md:grid-cols-2">
            {emergencyHelp.map((option) => (
              <OptionCard key={option.title} option={option} />
            ))}
          </div>
        </section>

        {/* How to make the most of a session */}
        <section className="mx-auto max-w-5xl rounded-2xl border-2 border-amber-200 bg-white/80 p-8 md:p-12 mb-16 shadow-sm">
          <div className="flex items-start gap-4 mb-8">
            <div className="inline-flex h-12 w-12 items-center justify-center rounded-lg bg-green-100 text-green-800 shrink-0">
              <CheckCircle2 className="h-6 w-6" />
            </div>
            <div>
              <h2 className="text-2xl md:text-3xl font-bold mb-2 text-stone-900">
                How to make the most of an in-person session
              </h2>
              <p className="text-stone-700">
                A little preparation turns a 20-minute visit into a lot more value. These four
                habits work every time.
              </p>
            </div>
          </div>
          <div className="grid gap-5 sm:grid-cols-2">
            {sessionTips.map((tip) => {
              const Icon = tip.icon;
              return (
                <div
                  key={tip.title}
                  className="flex gap-4 p-4 rounded-xl bg-amber-50/60 border border-amber-100"
                >
                  <div className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-amber-200/60 text-amber-900 shrink-0">
                    <Icon className="h-5 w-5" />
                  </div>
                  <div>
                    <div className="font-semibold text-stone-900 mb-1">{tip.title}</div>
                    <p className="text-base text-stone-700 leading-relaxed">{tip.detail}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* Red flags */}
        <section className="mx-auto max-w-5xl rounded-2xl border-2 border-red-300 bg-red-50/70 p-8 md:p-12 mb-16 shadow-sm">
          <div className="flex items-start gap-4 mb-8">
            <div className="inline-flex h-12 w-12 items-center justify-center rounded-lg bg-red-100 text-red-800 shrink-0">
              <AlertTriangle className="h-6 w-6" />
            </div>
            <div>
              <h2 className="text-2xl md:text-3xl font-bold mb-2 text-stone-900">
                Red flags — avoid these
              </h2>
              <p className="text-stone-700">
                Scammers love to pose as tech support. If any of these happen, stop and call a
                family member before paying or clicking anything.
              </p>
            </div>
          </div>
          <div className="grid gap-5 sm:grid-cols-2">
            {redFlags.map((flag) => {
              const Icon = flag.icon;
              return (
                <div
                  key={flag.title}
                  className="flex gap-4 p-4 rounded-xl bg-white border border-red-200"
                >
                  <div className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-red-100 text-red-700 shrink-0">
                    <Icon className="h-5 w-5" />
                  </div>
                  <div>
                    <div className="font-semibold text-stone-900 mb-1">{flag.title}</div>
                    <p className="text-base text-stone-700 leading-relaxed">{flag.detail}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* Eldercare Locator — universal fallback */}
        <section className="mx-auto max-w-4xl rounded-2xl border-2 border-amber-300 bg-amber-100/60 p-8 md:p-12 mb-16">
          <div className="flex flex-col md:flex-row items-start md:items-center gap-6">
            <div className="inline-flex h-16 w-16 items-center justify-center rounded-full bg-amber-700 text-white shrink-0">
              <Phone className="h-8 w-8" />
            </div>
            <div className="flex-1">
              <h2 className="text-2xl font-bold mb-2 text-stone-900">
                Not sure where to start? Call the Eldercare Locator.
              </h2>
              <p className="text-stone-700 mb-4">
                A free government service that finds local senior centers, tech classes,
                transportation, and meal programs for any US ZIP code. A real person will point you
                to exactly the right place.
              </p>
              <div className="flex flex-wrap gap-3">
                <Button
                  asChild
                  size="lg"
                  className="bg-amber-700 hover:bg-amber-800 text-white min-h-[48px]"
                >
                  <a href="tel:18006771116" className="inline-flex items-center gap-2">
                    <Phone className="h-4 w-4" />
                    Call 1-800-677-1116
                  </a>
                </Button>
                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="border-amber-700 text-amber-900 hover:bg-amber-50 min-h-[48px]"
                >
                  <a
                    href="https://eldercare.acl.gov"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2"
                  >
                    Open Eldercare Locator
                    <ExternalLink className="h-4 w-4" />
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Encouragement */}
        <section className="mx-auto max-w-3xl text-center">
          <div className="inline-flex items-center justify-center h-14 w-14 rounded-full bg-amber-200 text-amber-900 mb-4">
            <Heart className="h-7 w-7" />
          </div>
          <h2 className="text-3xl font-bold mb-3 text-stone-900">You are not alone</h2>
          <p className="text-lg text-stone-700 mb-6 leading-relaxed">
            Asking for tech help is not a sign of weakness — it is how everyone learns. The people
            running these programs chose this work because they like helping. Bring your questions.
            No question is too basic.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <Button
              asChild
              size="lg"
              className="bg-amber-700 hover:bg-amber-800 text-white min-h-[48px]"
            >
              <a href="/book">Book a TekSure session</a>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-amber-700 text-amber-900 hover:bg-amber-50 min-h-[48px]"
            >
              <a href="/free-resources">See free online programs</a>
            </Button>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default TechHelpNearMe;

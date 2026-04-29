import { Link } from 'react-router-dom';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import {
  Heart,
  Smartphone,
  Moon,
  Eye,
  Users,
  Clock,
  Apple,
  Smartphone as Android,
  Monitor,
  Laptop,
  Shield,
  Leaf,
  Brain,
  Phone,
  Mail,
  Bed,
  Baby,
  Briefcase,
  AlertTriangle,
  ExternalLink,
  CheckCircle2,
  ArrowRight,
} from 'lucide-react';

const signs = [
  {
    icon: Smartphone,
    title: 'Phone checked before getting out of bed',
    description:
      'You reach for the phone before your feet hit the floor. The day starts on someone else\'s schedule, not yours.',
  },
  {
    icon: Eye,
    title: "Can't sit still without scrolling",
    description:
      'Standing in line, waiting for coffee, sitting at a red light — the phone comes out automatically, even when you have nothing to look up.',
  },
  {
    icon: Moon,
    title: 'Sleep interrupted by phone',
    description:
      'You wake up at 3 a.m. and check it. You fall asleep watching short videos. Your sleep tracker shows you scrolled at 2 a.m. and you do not remember.',
  },
  {
    icon: Heart,
    title: 'Feel worse after social media',
    description:
      'You open the app to relax and close it more anxious, more comparing, more behind. The pattern repeats and you keep opening it.',
  },
  {
    icon: Baby,
    title: 'Kids ask you to put phone down',
    description:
      'A child has had to say "look at me" more than once this week. They notice before adults do.',
  },
  {
    icon: Brain,
    title: "Can't remember what you did today",
    description:
      'Hours pass and the only memory is the feed. The day blurs into a stream of someone else\'s posts.',
  },
];

const apps = [
  {
    name: 'Opal',
    url: 'https://opal.so',
    description:
      'Blocks distracting apps in scheduled sessions. Works on iPhone and Android. Has a "deep focus" mode that locks you out completely.',
    bestFor: 'People who need a hard wall, not a polite reminder.',
  },
  {
    name: 'Freedom',
    url: 'https://freedom.to',
    description:
      'Cross-device blocker — sets the same block on your phone, tablet, and computer at once. Useful if you bounce between screens.',
    bestFor: 'Knowledge workers and writers who lose hours to tab-switching.',
  },
  {
    name: 'One Sec',
    url: 'https://one-sec.app',
    description:
      'Asks you to take a deep breath before opening Instagram, TikTok, or X. The forced pause kills 60-80% of opens, by their numbers.',
    bestFor: 'Anyone whose phone-checking is muscle memory, not intention.',
  },
  {
    name: 'Forest',
    url: 'https://forestapp.cc',
    description:
      'Plant a virtual tree when you start a focus session. The tree dies if you leave the app. Gamified, but it works.',
    bestFor: 'Students and anyone who likes a small visual reward.',
  },
  {
    name: 'Headspace',
    url: 'https://headspace.com',
    description:
      'Guided meditation with a friendly tone. Has 1-3 minute sessions for when you have no time and 20-minute deep dives for when you do.',
    bestFor: 'New meditators who want structure.',
  },
  {
    name: 'Calm',
    url: 'https://calm.com',
    description:
      'Sleep stories read by familiar voices, breathing exercises, and short meditations. Best at the bedtime use case.',
    bestFor: 'People who use the phone to fall asleep and want to swap doomscrolling for something restorative.',
  },
];

const resetPlan = [
  {
    day: 'Day 1',
    title: 'Audit your screen time honestly',
    steps: [
      'Open Screen Time (iPhone) or Digital Wellbeing (Android) and look at the last 7 days.',
      'Write down the top 3 apps and the daily average for each.',
      'No judgment, no plan to change yet — the goal today is honest data.',
    ],
  },
  {
    day: 'Day 2',
    title: 'Remove 3 apps temporarily',
    steps: [
      'Pick the top 3 from yesterday\'s audit. Delete them from the home screen (you can reinstall any time).',
      'You can still check them on a desktop browser if you truly need to — the friction is the point.',
      'Notice when you reach for the phone today. That motion is the habit, not the app.',
    ],
  },
  {
    day: 'Day 3',
    title: 'Replace scroll time with one activity',
    steps: [
      'Pick one thing you have been "too busy" for: a walk, a phone call to a friend, a book, a stretch, cooking something new.',
      'Do that thing during a window when you would normally scroll — first 30 minutes after waking, lunch break, or after dinner.',
      'You are not quitting the phone. You are giving the time to something else and seeing how it feels.',
    ],
  },
];

const situations = [
  {
    id: 'work-email',
    q: "I can't stop checking work email",
    a: [
      'Remove the work email account from your phone, or move it into a separate Focus mode that only delivers notifications between 9 a.m. and 5 p.m.',
      'On iPhone: Settings → Focus → Work → choose which apps and people can break through. Outside those hours, work email goes silent.',
      'If your job genuinely requires after-hours access, set a rule: check at 7 p.m. for 10 minutes, then close it. Not all evening, in bursts.',
      'Tell one coworker you are doing this. Public commitment makes it stick.',
    ],
  },
  {
    id: 'social-media',
    q: 'Social media makes me feel bad',
    a: [
      'The feed is engineered to keep you watching, not to make you feel good. Feeling worse after using it is the design working as intended.',
      'Try this for one week: unfollow or mute every account that makes you feel behind, jealous, or anxious. Be ruthless. The feed will get quieter and more useful.',
      'Move the app off the home screen and into a folder on the second page. Adds 2 seconds of friction per open. That is enough to break automatic opens.',
      'Set a daily app limit of 30 minutes. When the limit hits, close it. The limit is for the future you who will be glad you stopped.',
    ],
  },
  {
    id: 'fall-asleep',
    q: 'I use my phone to fall asleep',
    a: [
      'Buy a $15 alarm clock and charge the phone in another room. This single change is the most-recommended digital detox step by sleep doctors, and the most-resisted by everyone.',
      'If the phone has to be in the bedroom, plug it in across the room, not on the nightstand. The reach is the friction.',
      'Swap scrolling for an audio replacement: a sleep story (Calm), a podcast on a 30-minute sleep timer, or a wind-down playlist.',
      'If you wake at 3 a.m., do not check the phone. Checking lights up the brain and time disappears. Lie still — sleep usually comes back within 20 minutes.',
    ],
  },
  {
    id: 'kids-mirror',
    q: 'My kids mirror my phone use',
    a: [
      'Children copy what they see, not what they are told. The most effective change for their phone habits is the parent\'s phone habits.',
      'Pick one phone-free zone (the dinner table is the classic) and one phone-free time (first hour after school, or last hour before bed). Hold it for both of you.',
      'Narrate what you are doing on the phone when you use it in front of them: "I am looking up the weather for tomorrow." This separates intentional use from doomscrolling in their eyes.',
      'When they catch you scrolling, thank them for noticing. Do not get defensive. The thank-you teaches them their observation matters.',
    ],
  },
  {
    id: 'phone-for-work',
    q: 'I need my phone for work',
    a: [
      'Almost no one needs their phone the way they think they do. Audit what you actually use it for during work hours and how much of that is required vs. habit.',
      'The work apps you truly need (Slack, email, calendar, Maps, scanner) can stay. Everything else can be removed without affecting your job.',
      'Consider a second, dumber phone for work, or use Apple Watch for work notifications and leave the phone in a drawer. Splits the device from the dopamine machine.',
      'Set Focus mode rules: during work, only work apps notify. After work, work apps go silent. The phone serves you in shifts, not all day.',
    ],
  },
];

export default function DigitalDetox() {
  return (
    <div className="min-h-screen bg-background">
      <SEOHead
        title="Digital Detox — Healthy Screen Time Without Guilt | TekSure"
        description="A supportive guide to changing your relationship with technology. Built-in tools, helpful apps, a 3-day reset, and answers for the situations where screens get hard."
      />
      <Navbar />

      <main id="main-content" tabIndex={-1} className="outline-none">

      {/* Hero */}
      <section className="relative overflow-hidden border-b bg-gradient-to-b from-emerald-50 to-background dark:from-emerald-950/30">
        <div className="container mx-auto px-4 py-16 md:py-24">
          <div className="mx-auto max-w-4xl text-center">
            <Badge variant="secondary" className="mb-4">
              <Leaf className="mr-1 h-3 w-3" />
              Healthy Tech Habits
            </Badge>
            <h1 className="mb-6 text-4xl font-bold tracking-tight md:text-5xl lg:text-6xl">
              You Don't Need to Quit Technology. You Need a Better Relationship With It.
            </h1>
            <p className="mx-auto max-w-2xl text-lg text-muted-foreground md:text-xl">
              No shame. No throwing your phone in a lake. Just practical tools and a few small
              changes that give you back the hours the feed has been quietly taking.
            </p>
          </div>
        </div>
      </section>

      {/* Signs */}
      <section className="container mx-auto px-4 py-16">
        <div className="mx-auto mb-10 max-w-3xl text-center">
          <h2 className="mb-3 text-3xl font-bold md:text-4xl">The Signs You Need a Break</h2>
          <p className="text-muted-foreground">
            None of these make you a bad person. They are common patterns the apps were designed
            to create. If 2 or more sound familiar, this page is for you.
          </p>
        </div>
        <div className="mx-auto grid max-w-6xl gap-4 md:grid-cols-2 lg:grid-cols-3">
          {signs.map((sign) => {
            const Icon = sign.icon;
            return (
              <Card key={sign.title} className="border-2">
                <CardContent className="p-6">
                  <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-lg bg-emerald-100 text-emerald-700 dark:bg-emerald-900/40 dark:text-emerald-300">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h3 className="mb-2 font-semibold">{sign.title}</h3>
                  <p className="text-sm text-muted-foreground">{sign.description}</p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </section>

      {/* Built-in Tools */}
      <section className="border-y bg-muted/30">
        <div className="container mx-auto px-4 py-16">
          <div className="mx-auto mb-10 max-w-3xl text-center">
            <h2 className="mb-3 text-3xl font-bold md:text-4xl">Built-In Tools You Already Have</h2>
            <p className="text-muted-foreground">
              Before you download anything new, the device in your hand has serious controls
              already. Here is how to find and use them.
            </p>
          </div>

          <div className="mx-auto grid max-w-6xl gap-6 lg:grid-cols-2">
            {/* iPhone Screen Time */}
            <Card>
              <CardContent className="p-6">
                <div className="mb-3 flex items-center gap-2">
                  <Apple className="h-5 w-5" />
                  <h3 className="text-xl font-semibold">iPhone Screen Time</h3>
                </div>
                <p className="mb-3 text-sm text-muted-foreground">
                  Settings → Screen Time. Turn it on. Wait one week and check the report.
                </p>
                <ul className="space-y-2 text-sm">
                  <li className="flex gap-2">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 flex-shrink-0 text-emerald-600" />
                    <span><strong>App Limits:</strong> Set a daily cap on Instagram, TikTok, X, etc. When the limit hits, the app grays out.</span>
                  </li>
                  <li className="flex gap-2">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 flex-shrink-0 text-emerald-600" />
                    <span><strong>Downtime:</strong> Schedule "lights out" hours when only essential apps work. Bedtime to morning is the common choice.</span>
                  </li>
                  <li className="flex gap-2">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 flex-shrink-0 text-emerald-600" />
                    <span><strong>Always Allowed:</strong> Phone, Maps, and Messages stay available even during Downtime so emergencies still work.</span>
                  </li>
                  <li className="flex gap-2">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 flex-shrink-0 text-emerald-600" />
                    <span><strong>Communication Limits:</strong> Restrict who can reach you during Downtime — useful for parents and on-call workers.</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            {/* iPhone Focus Modes */}
            <Card>
              <CardContent className="p-6">
                <div className="mb-3 flex items-center gap-2">
                  <Apple className="h-5 w-5" />
                  <h3 className="text-xl font-semibold">iPhone Focus Modes</h3>
                </div>
                <p className="mb-3 text-sm text-muted-foreground">
                  Settings → Focus. Different modes for different parts of your day. Each one
                  filters notifications and home screens.
                </p>
                <ul className="space-y-2 text-sm">
                  <li><strong>Personal:</strong> After-hours mode. Family and friends only.</li>
                  <li><strong>Work:</strong> Slack, email, work calendar. Personal apps muted.</li>
                  <li><strong>Sleep:</strong> Auto-on at bedtime. Phone goes silent and dims.</li>
                  <li><strong>Mindfulness:</strong> Meditation, sleep, journaling apps only.</li>
                  <li><strong>Driving:</strong> Auto-replies to messages. Maps stays available.</li>
                </ul>
              </CardContent>
            </Card>

            {/* Android Digital Wellbeing */}
            <Card>
              <CardContent className="p-6">
                <div className="mb-3 flex items-center gap-2">
                  <Android className="h-5 w-5" />
                  <h3 className="text-xl font-semibold">Android Digital Wellbeing</h3>
                </div>
                <p className="mb-3 text-sm text-muted-foreground">
                  Settings → Digital Wellbeing &amp; parental controls. Built into every modern
                  Android phone.
                </p>
                <ul className="space-y-2 text-sm">
                  <li className="flex gap-2">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 flex-shrink-0 text-emerald-600" />
                    <span><strong>Dashboard:</strong> See unlocks, app usage, and notifications per app.</span>
                  </li>
                  <li className="flex gap-2">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 flex-shrink-0 text-emerald-600" />
                    <span><strong>Bedtime mode:</strong> Auto-grayscale + Do Not Disturb after a chosen time. Grayscale alone cuts scrolling significantly.</span>
                  </li>
                  <li className="flex gap-2">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 flex-shrink-0 text-emerald-600" />
                    <span><strong>Focus mode:</strong> Pause distracting apps during work or study hours.</span>
                  </li>
                  <li className="flex gap-2">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 flex-shrink-0 text-emerald-600" />
                    <span><strong>App timers:</strong> Set a daily limit per app. Icon grays out when hit.</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            {/* Mac Screen Time */}
            <Card>
              <CardContent className="p-6">
                <div className="mb-3 flex items-center gap-2">
                  <Laptop className="h-5 w-5" />
                  <h3 className="text-xl font-semibold">Mac Screen Time</h3>
                </div>
                <p className="mb-3 text-sm text-muted-foreground">
                  System Settings → Screen Time. Same controls as iPhone, but for the laptop.
                </p>
                <ul className="space-y-2 text-sm">
                  <li>App Limits and Downtime sync across all your Apple devices when iCloud is on.</li>
                  <li>Website limits: block specific sites in Safari during work hours.</li>
                  <li>Communication Limits also apply to Messages on Mac.</li>
                  <li>Pair with Focus modes for a unified work/personal split across devices.</li>
                </ul>
              </CardContent>
            </Card>

            {/* Windows Focus Sessions */}
            <Card className="lg:col-span-2">
              <CardContent className="p-6">
                <div className="mb-3 flex items-center gap-2">
                  <Monitor className="h-5 w-5" />
                  <h3 className="text-xl font-semibold">Windows Focus Sessions</h3>
                </div>
                <p className="mb-3 text-sm text-muted-foreground">
                  Built into Windows 11. Open the Clock app → Focus Sessions. Pomodoro-style work
                  blocks with built-in break reminders.
                </p>
                <ul className="space-y-2 text-sm">
                  <li>Choose a session length (15, 30, 45, or 60 minutes) and Windows mutes notifications for the duration.</li>
                  <li>Integrates with Spotify for focus music if you sign in.</li>
                  <li>Connects to Microsoft To Do — pick a task to focus on for the session.</li>
                  <li>Tracks daily focus streaks and time, similar to a fitness tracker.</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Apps That Help */}
      <section className="container mx-auto px-4 py-16">
        <div className="mx-auto mb-10 max-w-3xl text-center">
          <h2 className="mb-3 text-3xl font-bold md:text-4xl">Apps That Help</h2>
          <p className="text-muted-foreground">
            When the built-in tools are not enough, these are the ones that consistently work for
            real people.
          </p>
        </div>
        <div className="mx-auto grid max-w-6xl gap-4 md:grid-cols-2 lg:grid-cols-3">
          {apps.map((app) => (
            <Card key={app.name} className="border-2">
              <CardContent className="p-6">
                <div className="mb-2 flex items-center justify-between">
                  <h3 className="text-lg font-semibold">{app.name}</h3>
                  <a
                    href={app.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-foreground"
                    aria-label={`Visit ${app.name} website`}
                  >
                    <ExternalLink className="h-4 w-4" />
                  </a>
                </div>
                <p className="mb-3 text-sm text-muted-foreground">{app.description}</p>
                <p className="text-xs text-muted-foreground">
                  <span className="font-medium text-foreground">Best for:</span> {app.bestFor}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Three-Day Reset */}
      <section className="border-y bg-emerald-50/50 dark:bg-emerald-950/20">
        <div className="container mx-auto px-4 py-16">
          <div className="mx-auto mb-10 max-w-3xl text-center">
            <Badge variant="secondary" className="mb-3">
              <Clock className="mr-1 h-3 w-3" />
              72 Hours
            </Badge>
            <h2 className="mb-3 text-3xl font-bold md:text-4xl">The Three-Day Reset</h2>
            <p className="text-muted-foreground">
              Not a 30-day cleanse. Not delete-everything cold turkey. Three days, three small
              actions, one shift in your relationship with the device.
            </p>
          </div>
          <div className="mx-auto grid max-w-5xl gap-6 md:grid-cols-3">
            {resetPlan.map((day) => (
              <Card key={day.day} className="border-2 border-emerald-200 dark:border-emerald-900">
                <CardContent className="p-6">
                  <Badge variant="outline" className="mb-3">{day.day}</Badge>
                  <h3 className="mb-3 text-xl font-semibold">{day.title}</h3>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    {day.steps.map((step, i) => (
                      <li key={i} className="flex gap-2">
                        <span className="font-semibold text-emerald-700 dark:text-emerald-300">
                          {i + 1}.
                        </span>
                        <span>{step}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Specific Situations */}
      <section className="container mx-auto px-4 py-16">
        <div className="mx-auto mb-10 max-w-3xl text-center">
          <h2 className="mb-3 text-3xl font-bold md:text-4xl">Specific Situations</h2>
          <p className="text-muted-foreground">
            The "I know what I should do but I can't" situations. These are the most common ones
            and what tends to actually help.
          </p>
        </div>
        <div className="mx-auto max-w-3xl">
          <Accordion type="single" collapsible className="w-full">
            {situations.map((s) => (
              <AccordionItem key={s.id} value={s.id}>
                <AccordionTrigger className="text-left text-base font-medium">
                  {s.q}
                </AccordionTrigger>
                <AccordionContent>
                  <div className="space-y-3 text-muted-foreground">
                    {s.a.map((p, i) => (
                      <p key={i}>{p}</p>
                    ))}
                  </div>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* When to Get Help */}
      <section className="border-y bg-amber-50/50 dark:bg-amber-950/20">
        <div className="container mx-auto px-4 py-16">
          <div className="mx-auto max-w-4xl">
            <div className="mb-8 text-center">
              <Badge variant="secondary" className="mb-3">
                <AlertTriangle className="mr-1 h-3 w-3" />
                When It Is Bigger
              </Badge>
              <h2 className="mb-3 text-3xl font-bold md:text-4xl">When to Get Help</h2>
              <p className="text-muted-foreground">
                Phone use can become a real compulsion. There is no shame in that, and there are
                people trained to help.
              </p>
            </div>

            <Card>
              <CardContent className="space-y-6 p-6 md:p-8">
                <div>
                  <h3 className="mb-3 font-semibold">Signs it has crossed into addiction territory</h3>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• You have lied about how much you use the phone, or hidden the use.</li>
                    <li>• Phone use has cost you a relationship, a job, or a meaningful opportunity.</li>
                    <li>• You feel real anxiety, anger, or panic when you cannot access the phone.</li>
                    <li>• You have tried to cut back many times and failed.</li>
                    <li>• You use the phone to avoid hard feelings (grief, loneliness, anger) instead of moving through them.</li>
                  </ul>
                </div>

                <div>
                  <h3 className="mb-3 font-semibold">Where to start</h3>
                  <ul className="space-y-3 text-sm">
                    <li>
                      <a
                        href="https://smartrecovery.org"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-medium text-primary hover:underline"
                      >
                        SMART Recovery
                      </a>
                      <span className="text-muted-foreground">
                        {' '}— Free, science-based mutual support meetings (online and in-person) for
                        any addictive behavior, including screen and internet use.
                      </span>
                    </li>
                    <li>
                      <a
                        href="https://www.psychologytoday.com/us/therapists"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-medium text-primary hover:underline"
                      >
                        Psychology Today therapist finder
                      </a>
                      <span className="text-muted-foreground">
                        {' '}— Filter by "process addiction" or "internet addiction." Most plans
                        cover behavioral health visits.
                      </span>
                    </li>
                    <li>
                      <a
                        href="https://988lifeline.org"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-medium text-primary hover:underline"
                      >
                        988 Suicide &amp; Crisis Lifeline
                      </a>
                      <span className="text-muted-foreground">
                        {' '}— If phone use is connected to depression or thoughts of self-harm, call
                        or text 988 anytime.
                      </span>
                    </li>
                  </ul>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Footer */}
      <section className="container mx-auto px-4 py-16">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="mb-4 text-2xl font-bold md:text-3xl">
            One small change today is enough.
          </h2>
          <p className="mb-6 text-muted-foreground">
            You do not have to do all of this. Pick one card from this page that felt like it was
            written for you, and try that thing for a week.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <Button asChild>
              <Link to="/free-resources">
                Find more free resources
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button asChild variant="outline">
              <Link to="/guides">Browse all guides</Link>
            </Button>
          </div>
        </div>
      </section>

      </main>

      <Footer />
    </div>
  );
}

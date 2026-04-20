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
  Apple,
  Smartphone,
  Monitor,
  Laptop,
} from 'lucide-react';

type Feature = {
  name: string;
  devices: string;
  description: string;
  linkLabel: string;
  linkTo: string;
};

type Section = {
  id: string;
  icon: typeof Eye;
  badge: string;
  title: string;
  subtitle: string;
  accent: string;
  features: Feature[];
};

const sections: Section[] = [
  {
    id: 'vision',
    icon: Eye,
    badge: '👁️ VISION',
    title: 'Vision',
    subtitle: 'For people with low vision or blindness',
    accent: 'from-sky-50 to-sky-100/40 dark:from-sky-950/30 dark:to-sky-900/10',
    features: [
      {
        name: 'Screen reader',
        devices: 'VoiceOver (iOS/Mac) · TalkBack (Android) · Narrator (Windows)',
        description:
          'Reads everything on screen out loud and describes images and buttons. The single most powerful feature for anyone who cannot comfortably read the screen.',
        linkLabel: 'Turn it on',
        linkTo: '/guides/voiceover-screen-reader-setup',
      },
      {
        name: 'Zoom and magnification',
        devices: 'Built into every iPhone, iPad, Android, Windows PC, and Mac',
        description:
          'Magnify the whole screen up to 15x, or only the area around your cursor. Works in every app without the app needing to support it.',
        linkLabel: 'Turn it on',
        linkTo: '/guides/use-browser-zoom-large-text',
      },
      {
        name: 'Larger text system-wide',
        devices: 'iOS, Android, Windows, Mac',
        description:
          'Makes text bigger in menus, messages, email, and most apps — not just in the browser. Adjustable on a slider so you can find the right size for your eyes.',
        linkLabel: 'Turn it on',
        linkTo: '/guides/make-text-larger-iphone-android',
      },
      {
        name: 'High contrast and dark mode',
        devices: 'iOS, Android, Windows, Mac',
        description:
          'Dark mode flips the screen to light-on-dark which reduces glare. High contrast sharpens the difference between text and background for tired eyes.',
        linkLabel: 'Turn it on',
        linkTo: '/guides/dark-mode-high-contrast',
      },
      {
        name: 'Color filters for color blindness',
        devices: 'iOS, Android, Windows, Mac',
        description:
          'Shifts colors to make red/green or blue/yellow differences easier to see. Built-in presets for the most common forms of color vision deficiency.',
        linkLabel: 'Turn it on',
        linkTo: '/guides/color-filters-accessibility',
      },
    ],
  },
  {
    id: 'hearing',
    icon: Ear,
    badge: '👂 HEARING',
    title: 'Hearing',
    subtitle: 'For people with hearing loss',
    accent: 'from-emerald-50 to-emerald-100/40 dark:from-emerald-950/30 dark:to-emerald-900/10',
    features: [
      {
        name: 'Live captions',
        devices: 'iOS Live Captions · Android Live Caption · Windows Live Captions',
        description:
          'Real-time captions for any audio playing on your device — phone calls, FaceTime, YouTube, podcasts. Works even when the app itself has no captions.',
        linkLabel: 'Turn it on',
        linkTo: '/guides/live-captions-phone',
      },
      {
        name: 'Visual and LED flash alerts',
        devices: 'iPhone camera flash · Android flash notifications · Windows visual alerts',
        description:
          'Flashes the camera light or the screen when you get a call or notification. Useful if you keep your phone on silent or have trouble hearing the ringtone.',
        linkLabel: 'Turn it on',
        linkTo: '/guides/flash-notifications-phone',
      },
      {
        name: 'Hearing aid Bluetooth pairing',
        devices: 'Made for iPhone (MFi) · Android ASHA hearing aids',
        description:
          'Stream phone calls, music, and TV audio directly to your hearing aids with no middleman device. Adjust the left/right balance and save presets for different rooms.',
        linkLabel: 'Turn it on',
        linkTo: '/guides/hearing-aid-bluetooth',
      },
      {
        name: 'Mono audio',
        devices: 'iOS, Android, Windows, Mac',
        description:
          'Combines left and right channels into one so you never miss half of a song or a phone call when using only one ear or one earbud.',
        linkLabel: 'Turn it on',
        linkTo: '/guides/mono-audio-accessibility',
      },
      {
        name: 'Caption customization',
        devices: 'iOS, Android, Apple TV, Roku, Fire TV',
        description:
          'Make captions bigger, change the font, add a solid background, or shift the position. Works across Netflix, YouTube, Apple TV, and most streaming apps.',
        linkLabel: 'Turn it on',
        linkTo: '/guides/customize-captions-streaming',
      },
    ],
  },
  {
    id: 'motor',
    icon: Hand,
    badge: '✋ MOTOR',
    title: 'Motor',
    subtitle: 'For people with limited dexterity',
    accent: 'from-amber-50 to-amber-100/40 dark:from-amber-950/30 dark:to-amber-900/10',
    features: [
      {
        name: 'Voice Control and Voice Access',
        devices: 'Voice Control (iOS/Mac) · Voice Access (Android) · Voice Access (Windows)',
        description:
          'Control the whole device by speaking — open apps, tap buttons, type messages, and scroll. Once it is on, you may never need to touch the screen again.',
        linkLabel: 'Turn it on',
        linkTo: '/guides/voice-control-setup',
      },
      {
        name: 'AssistiveTouch and gesture control',
        devices: 'iPhone · iPad · Android (Accessibility Menu)',
        description:
          'An on-screen button that replaces complex multi-finger gestures with simple taps. Use one finger to do everything swipes and pinches normally require.',
        linkLabel: 'Turn it on',
        linkTo: '/guides/assistivetouch-iphone',
      },
      {
        name: 'Switch Control',
        devices: 'iOS, Android, Mac',
        description:
          'Operate your device with an external switch — a large button, a puff-sip sensor, or even a camera that detects head movement. Built-in support for dozens of switches.',
        linkLabel: 'Turn it on',
        linkTo: '/guides/switch-control-accessibility',
      },
      {
        name: 'Sticky Keys and Filter Keys',
        devices: 'Windows, Mac',
        description:
          'Sticky Keys lets you press shortcuts like Ctrl+Alt+Delete one key at a time. Filter Keys ignores accidental repeated keypresses — a lifesaver for tremors.',
        linkLabel: 'Turn it on',
        linkTo: '/guides/sticky-keys-filter-keys',
      },
      {
        name: 'Back Tap',
        devices: 'iPhone 8 and later',
        description:
          'Double-tap or triple-tap the back of your iPhone to do things like take a screenshot, open the camera, or call for help. No button pressing required.',
        linkLabel: 'Turn it on',
        linkTo: '/guides/back-tap-iphone',
      },
    ],
  },
  {
    id: 'cognitive',
    icon: Brain,
    badge: '🧠 COGNITIVE',
    title: 'Cognitive',
    subtitle: 'For focus, learning, and memory',
    accent: 'from-violet-50 to-violet-100/40 dark:from-violet-950/30 dark:to-violet-900/10',
    features: [
      {
        name: 'Guided Access and Focus Mode',
        devices: 'Guided Access (iOS) · Focus mode (iOS/Mac) · Do Not Disturb (Android)',
        description:
          'Locks the device into a single app — great for handing a phone to a grandchild, or for reducing distractions during reading, calls, or medical appointments.',
        linkLabel: 'Turn it on',
        linkTo: '/guides/guided-access-focus-mode',
      },
      {
        name: 'Reduce motion',
        devices: 'iOS, Android, Windows, Mac',
        description:
          'Removes spinning, sliding, and parallax animations. If motion on screens makes you dizzy or nauseous, this is the first setting to flip.',
        linkLabel: 'Turn it on',
        linkTo: '/guides/reduce-motion-accessibility',
      },
      {
        name: 'Spoken content and text-to-speech',
        devices: 'iOS, Android, Windows, Mac, Kindle, Chrome',
        description:
          'Highlight any text and have it read out loud. Helpful for long articles, dense documents, or anyone who learns better by listening than reading.',
        linkLabel: 'Turn it on',
        linkTo: '/guides/text-to-speech-spoken-content',
      },
      {
        name: 'Simplified interface modes',
        devices: 'iPhone Assistive Access · Android Simple Mode · Samsung Easy Mode',
        description:
          'Shrinks the phone to a few large buttons — calls, messages, camera, photos. Fewer apps, bigger icons, and a layout that never changes.',
        linkLabel: 'Turn it on',
        linkTo: '/guides/simplified-phone-mode',
      },
    ],
  },
];

const quickSetup = [
  {
    icon: Smartphone,
    device: 'iPhone or iPad',
    path: 'Settings → Accessibility',
    note: 'Every feature on this page lives here. Scroll down to Vision, Physical and Motor, Hearing, and General.',
  },
  {
    icon: Apple,
    device: 'Mac',
    path: 'System Settings → Accessibility',
    note: 'On newer Macs use Settings → Accessibility. On older Macs use System Preferences → Accessibility.',
  },
  {
    icon: Monitor,
    device: 'Windows PC',
    path: 'Settings → Accessibility',
    note: 'Press the Windows key and type "Accessibility" to jump straight there. Also try the Windows + U shortcut.',
  },
  {
    icon: Laptop,
    device: 'Android phone or tablet',
    path: 'Settings → Accessibility',
    note: 'Exact wording varies by brand — Samsung calls it Accessibility, Google Pixel does too. Pull down the quick-settings shade to toggle on the fly.',
  },
];

export default function AccessibilityHub() {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <SEOHead
        title="Accessibility Features — Make Your Devices Easier to Use | TekSure"
        description="Every major device has built-in accessibility features — screen readers, live captions, voice control, simplified modes, and more. A complete plain-English guide to turning them on."
        path="/accessibility"
      />
      <Navbar />
      <main className="flex-1">
        {/* Hero */}
        <section className="border-b border-border">
          <div className="container max-w-3xl text-center py-16 md:py-20">
            <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-primary/10 mb-5">
              <Accessibility className="h-7 w-7 text-primary" />
            </div>
            <h1 className="text-3xl md:text-5xl font-bold tracking-tight text-primary mb-4">
              Technology That Works for Everyone
            </h1>
            <p className="text-muted-foreground text-lg md:text-xl leading-relaxed max-w-2xl mx-auto">
              Every major device has built-in accessibility features. Most people never turn them
              on — here's how.
            </p>
          </div>
        </section>

        {/* Tool callout */}
        <section className="container max-w-4xl py-8">
          <Card className="rounded-2xl border border-primary/30 bg-primary/5">
            <CardContent className="p-5 md:p-6 flex flex-col md:flex-row md:items-center gap-4">
              <div className="rounded-xl bg-primary/10 w-11 h-11 flex items-center justify-center shrink-0">
                <Sparkles className="h-5 w-5 text-primary" />
              </div>
              <div className="flex-1">
                <h2 className="font-semibold text-foreground mb-1">
                  Not sure where to start?
                </h2>
                <p className="text-sm text-muted-foreground">
                  Answer a few questions and we'll tell you exactly which features to turn on first.
                </p>
              </div>
              <Button asChild className="rounded-xl gap-2 shrink-0">
                <Link to="/tools/accessibility-needs-finder">
                  Accessibility Needs Finder
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
            </CardContent>
          </Card>
        </section>

        {/* Feature sections */}
        <section className="container max-w-6xl py-10 space-y-14">
          {sections.map((section) => (
            <div key={section.id} id={section.id} className="scroll-mt-20">
              <div
                className={`rounded-2xl bg-gradient-to-br ${section.accent} border border-border p-6 md:p-8 mb-6`}
              >
                <div className="flex items-start gap-4">
                  <div className="rounded-xl bg-background/70 w-12 h-12 flex items-center justify-center shrink-0">
                    <section.icon className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <Badge variant="outline" className="mb-2 text-xs bg-background/60">
                      {section.badge}
                    </Badge>
                    <h2 className="text-2xl md:text-3xl font-bold text-primary mb-1">
                      {section.title}
                    </h2>
                    <p className="text-muted-foreground">{section.subtitle}</p>
                  </div>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                {section.features.map((feature) => (
                  <Card
                    key={feature.name}
                    className="rounded-2xl border border-border bg-card hover:border-primary/40 transition-colors"
                  >
                    <CardContent className="p-5 flex flex-col h-full">
                      <div className="flex items-start gap-3 mb-3">
                        <div className="rounded-lg bg-primary/10 p-2 shrink-0">
                          <section.icon className="h-4 w-4 text-primary" />
                        </div>
                        <div className="flex-1">
                          <h3 className="font-semibold text-foreground leading-tight mb-1">
                            {feature.name}
                          </h3>
                          <p className="text-xs text-muted-foreground/80">{feature.devices}</p>
                        </div>
                      </div>
                      <p className="text-sm text-muted-foreground leading-relaxed mb-4 flex-1">
                        {feature.description}
                      </p>
                      <Button
                        asChild
                        variant="outline"
                        size="sm"
                        className="rounded-xl gap-2 self-start"
                      >
                        <Link to={feature.linkTo}>
                          {feature.linkLabel}
                          <ArrowRight className="h-3.5 w-3.5" />
                        </Link>
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          ))}
        </section>

        {/* Quick setup */}
        <section className="bg-muted/30 border-t border-border">
          <div className="container max-w-5xl py-14">
            <div className="mb-8 text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-2xl bg-primary/10 mb-4">
                <Settings className="h-6 w-6 text-primary" />
              </div>
              <h2 className="text-2xl md:text-3xl font-bold text-primary mb-2">
                Quick setup guide
              </h2>
              <p className="text-muted-foreground max-w-xl mx-auto">
                Every device puts its accessibility settings in roughly the same spot. Here is the
                exact path on yours.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              {quickSetup.map((item) => (
                <Card
                  key={item.device}
                  className="rounded-2xl border border-border bg-card"
                >
                  <CardContent className="p-5">
                    <div className="flex items-start gap-4">
                      <div className="rounded-xl bg-primary/10 w-11 h-11 flex items-center justify-center shrink-0">
                        <item.icon className="h-5 w-5 text-primary" />
                      </div>
                      <div className="flex-1">
                        <h3 className="font-semibold text-foreground mb-1">{item.device}</h3>
                        <code className="inline-block text-xs font-mono bg-muted px-2 py-1 rounded-md mb-2 text-foreground/80">
                          {item.path}
                        </code>
                        <p className="text-sm text-muted-foreground leading-relaxed">
                          {item.note}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="mt-10 text-center">
              <Button asChild variant="outline" size="lg" className="rounded-xl gap-2">
                <Link to="/guides?category=accessibility">
                  See all accessibility guides
                  <ArrowRight className="h-4 w-4" />
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

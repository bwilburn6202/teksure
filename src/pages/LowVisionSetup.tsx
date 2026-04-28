import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { PageBreadcrumb } from '@/components/PageBreadcrumb';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import {
  Eye, ChevronRight, Type, Sun, Contrast, Zap, Volume2, Palette,
} from 'lucide-react';

type Platform = 'iphone' | 'android' | 'mac' | 'windows';

interface Step {
  title: string;
  icon: typeof Type;
  steps: Record<Platform, string[]>;
}

const STEPS: Step[] = [
  {
    title: 'Make text bigger everywhere',
    icon: Type,
    steps: {
      iphone:  [
        'Settings → Display & Brightness → Text Size.',
        'Drag the slider to the right until it feels comfortable.',
        'Want it bigger still? Settings → Accessibility → Display & Text Size → Larger Text → turn ON "Larger Accessibility Sizes" — that slider goes much further.',
      ],
      android: [
        'Settings → Display → Font size and style → Font size.',
        'Drag the slider to "Huge" if you need it.',
        'Also turn on "Display size" (one screen back) to make icons and buttons bigger too.',
      ],
      mac:     [
        'System Settings → Displays → click "Larger Text" preset.',
        'For browser-only: in Safari, View menu → "Make Text Bigger" (Cmd-Plus).',
      ],
      windows: [
        'Settings → Accessibility → Text size.',
        'Drag the slider to make text larger across Windows.',
        'For browsers, Ctrl-Plus zooms each page.',
      ],
    },
  },
  {
    title: 'Turn on bold text',
    icon: Type,
    steps: {
      iphone:  ['Settings → Accessibility → Display & Text Size → Bold Text → ON.'],
      android: ['Settings → Display → Font size and style → "Bold font" → ON.'],
      mac:     ['Built into "Larger Text" preset above. For more, System Settings → Accessibility → Display → "Bold text".'],
      windows: ['Settings → Accessibility → Visual effects (no system bold yet) — but you can install the Windows "Aldrich" or "Verdana Bold" system font.'],
    },
  },
  {
    title: 'Crank up contrast',
    icon: Contrast,
    steps: {
      iphone:  [
        'Settings → Accessibility → Display & Text Size → "Increase Contrast" → ON.',
        'Also "Differentiate Without Color" → ON if green/red is hard to tell apart.',
      ],
      android: [
        'Settings → Accessibility → Visibility enhancements → "High contrast fonts" → ON.',
        'Same screen has "Color contrast" — pick a setting that pops for you.',
      ],
      mac:     ['System Settings → Accessibility → Display → "Increase contrast" → ON.'],
      windows: ['Settings → Accessibility → Contrast themes → pick "Aquatic" or "Dusk" — both are high-contrast.'],
    },
  },
  {
    title: 'Set up the magnifier',
    icon: Zap,
    steps: {
      iphone:  [
        'Settings → Accessibility → Magnifier → ON.',
        'Now triple-click the side button anywhere — your camera turns into a magnifying glass.',
        'Great for menus, pill bottles, mail.',
      ],
      android: [
        'Settings → Accessibility → Magnification → "Magnification shortcut" → ON.',
        'Pick the triple-tap or floating button option.',
        'Tap the shortcut to magnify whatever is on screen.',
      ],
      mac:     [
        'System Settings → Accessibility → Zoom → turn on "Use scroll gesture with modifier keys".',
        'Now hold the Control key and scroll — the screen zooms in wherever your cursor points.',
      ],
      windows: [
        'Press Windows key + Plus to start the Magnifier.',
        'Press Windows key + Esc to close it.',
        'Settings → Accessibility → Magnifier to change zoom level.',
      ],
    },
  },
  {
    title: 'Turn on screen brightness + Night Shift',
    icon: Sun,
    steps: {
      iphone:  [
        'Drag brightness slider in Control Center to about 75%.',
        'Settings → Display & Brightness → Night Shift → schedule sunset to sunrise (warmer color, easier on eyes at night).',
      ],
      android: [
        'Pull down quick settings → drag brightness up.',
        'Settings → Display → "Eye comfort shield" → schedule it sunset to sunrise.',
      ],
      mac:     ['System Settings → Displays → "Night Shift" → schedule sunset to sunrise.'],
      windows: ['Settings → System → Display → "Night light" → schedule sunset to sunrise.'],
    },
  },
  {
    title: 'Use color filters if needed',
    icon: Palette,
    steps: {
      iphone:  [
        'Settings → Accessibility → Display & Text Size → Color Filters → ON.',
        'Pick the filter that matches your color blindness type. "Color Tint" lets you slide for fine-tuning.',
      ],
      android: [
        'Settings → Accessibility → Visibility enhancements → "Color correction" → pick deuteranomaly, protanomaly, or tritanomaly.',
      ],
      mac:     ['System Settings → Accessibility → Display → "Color Filters".'],
      windows: ['Settings → Accessibility → Color filters → pick Deuteranopia, Protanopia, or Tritanopia.'],
    },
  },
  {
    title: 'Hear the screen read aloud (optional)',
    icon: Volume2,
    steps: {
      iphone:  [
        'Settings → Accessibility → Spoken Content → "Speak Screen" → ON.',
        'Now swipe down with two fingers from the top of any screen — your iPhone reads everything aloud.',
      ],
      android: [
        'Settings → Accessibility → "Select to Speak" → ON.',
        'Tap the floating speaker icon, then tap any text on screen — it reads aloud.',
      ],
      mac:     [
        'System Settings → Accessibility → Spoken Content → "Speak selection" → ON.',
        'Highlight any text and press Option-Esc to hear it.',
      ],
      windows: [
        'Press Windows key + Ctrl + Enter to start Narrator.',
        'For lighter use: Settings → Accessibility → Narrator → "Read aloud" hotkeys.',
      ],
    },
  },
];

const PLATFORMS: { id: Platform; label: string }[] = [
  { id: 'iphone',  label: 'iPhone / iPad' },
  { id: 'android', label: 'Android phone / tablet' },
  { id: 'mac',     label: 'Mac computer' },
  { id: 'windows', label: 'Windows computer' },
];

export default function LowVisionSetup() {
  const [platform, setPlatform] = useState<Platform>('iphone');
  const [done, setDone] = useState<Set<string>>(new Set());

  const toggle = (id: string) => {
    setDone(prev => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });
  };

  return (
    <>
      <SEOHead
        title="Low-Vision Setup"
        description="A guided walkthrough to make your iPhone, Android, Mac, or Windows computer easier to see. Bigger text, bold fonts, contrast, magnifier, and screen reading — all the free settings, in plain English."
        path="/low-vision-setup"
      />
      <Navbar />

      <main className="min-h-screen bg-background">
        <section className="bg-gradient-to-br from-primary/10 via-background to-secondary/10 border-b border-border py-10 px-4">
          <div className="container max-w-3xl mx-auto text-center">
            <div className="flex justify-center mb-3">
              <div className="p-3 bg-primary/10 rounded-full">
                <Eye className="h-8 w-8 text-primary" />
              </div>
            </div>
            <h1 className="text-3xl md:text-4xl font-bold mb-2">Low-Vision Setup</h1>
            <p className="text-muted-foreground text-lg max-w-xl mx-auto">
              A free, guided walkthrough to make your device easier to see. Pick your device — we will walk through the seven settings that matter most.
            </p>
          </div>
        </section>

        <div className="container max-w-3xl mx-auto px-4 py-8">
          <PageBreadcrumb segments={[{ label: 'Low-Vision Setup' }]} />

          <Card className="border-border shadow-sm mb-8">
            <CardContent className="p-5">
              <p className="text-sm font-semibold mb-3">Pick your device</p>
              <div className="grid sm:grid-cols-2 gap-2">
                {PLATFORMS.map(p => (
                  <button
                    key={p.id}
                    onClick={() => setPlatform(p.id)}
                    className={`p-3 rounded-lg border text-left transition-all ${
                      platform === p.id
                        ? 'border-primary bg-primary/5 ring-2 ring-primary/20'
                        : 'border-border hover:border-primary/50 hover:bg-primary/5'
                    }`}
                  >
                    <p className="font-medium text-sm">{p.label}</p>
                  </button>
                ))}
              </div>
            </CardContent>
          </Card>

          <div className="flex items-center justify-between mb-4">
            <p className="text-sm text-muted-foreground">{done.size} of {STEPS.length} done</p>
            {done.size > 0 && (
              <Button variant="ghost" size="sm" onClick={() => setDone(new Set())}>Reset</Button>
            )}
          </div>

          <div className="space-y-4">
            {STEPS.map((step, i) => {
              const Icon = step.icon;
              const id = `step-${i}`;
              const isDone = done.has(id);
              return (
                <Card key={id} id={id} className={`border-border scroll-mt-24 transition-colors ${isDone ? 'bg-green-50 dark:bg-green-950/20 border-green-300 dark:border-green-800' : ''}`}>
                  <CardContent className="p-5">
                    <div className="flex items-start gap-3 mb-3">
                      <button
                        onClick={() => toggle(id)}
                        className={`shrink-0 w-7 h-7 rounded-full border-2 transition-colors flex items-center justify-center ${
                          isDone ? 'bg-green-500 border-green-500 text-white' : 'border-border hover:border-primary'
                        }`}
                        aria-label={isDone ? 'Mark not done' : 'Mark done'}
                      >
                        {isDone ? '✓' : i + 1}
                      </button>
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-1">
                          <Icon className="h-4 w-4 text-primary" />
                          <h2 className="font-semibold">{step.title}</h2>
                        </div>
                        <ol className="space-y-1.5 text-sm mt-2">
                          {step.steps[platform].map((s, j) => (
                            <li key={j} className="flex gap-2">
                              <span className="text-muted-foreground shrink-0">{j + 1}.</span>
                              <span>{s}</span>
                            </li>
                          ))}
                        </ol>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          {done.size === STEPS.length && (
            <Card className="border-green-300 bg-green-50 dark:bg-green-950/20 mt-6">
              <CardContent className="p-6 text-center">
                <Badge className="mb-2 bg-green-100 text-green-700 border-green-300">All done</Badge>
                <p className="font-semibold">Your device is set up for easier viewing.</p>
                <p className="text-sm text-muted-foreground mt-1">Come back any time — these settings can always be adjusted.</p>
              </CardContent>
            </Card>
          )}

          <div className="mt-10 pt-8 border-t border-border">
            <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-3">Related</p>
            <div className="grid sm:grid-cols-3 gap-3">
              <Link to="/tools/low-vision-tech-hub" className="p-3 rounded-lg border border-border hover:border-primary/50 hover:bg-primary/5 transition-all">
                <p className="font-medium text-sm">Low-Vision Tech Hub</p>
                <p className="text-xs text-muted-foreground mt-0.5">Apps, tools, and devices for low vision.</p>
              </Link>
              <Link to="/tools/screen-reader-starter" className="p-3 rounded-lg border border-border hover:border-primary/50 hover:bg-primary/5 transition-all">
                <p className="font-medium text-sm">Screen Reader Starter</p>
                <p className="text-xs text-muted-foreground mt-0.5">Learn VoiceOver and TalkBack.</p>
              </Link>
              <Link to="/accessibility" className="p-3 rounded-lg border border-border hover:border-primary/50 hover:bg-primary/5 transition-all">
                <p className="font-medium text-sm">Accessibility Hub</p>
                <p className="text-xs text-muted-foreground mt-0.5">Hearing, motor, cognitive support too.</p>
              </Link>
            </div>
            <p className="text-xs text-muted-foreground mt-4 flex items-center gap-1">
              <ChevronRight className="h-3 w-3" /> Tip: TekSure has its own font-size and contrast toggles in the top toolbar. Use them right now.
            </p>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}

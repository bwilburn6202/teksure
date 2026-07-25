import { useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { PageBreadcrumb } from '@/components/PageBreadcrumb';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import {
  BatteryFull,
  BatteryMedium,
  BatteryLow,
  BatteryWarning,
  HelpCircle,
  RotateCcw,
  ChevronRight,
  Lightbulb,
  Wrench,
  DollarSign,
} from 'lucide-react';

type DeviceKind = 'iphone' | 'android';
type Verdict = 'great' | 'good' | 'aging' | 'replace';

interface CoachResult {
  verdict: Verdict;
  headline: string;
  detail: string;
  remainingLifeYears: string;
  replacementCost: string;
  habits: string[];
  nextStep: string;
}

const VERDICT_STYLES: Record<Verdict, { ring: string; bg: string; text: string; icon: typeof BatteryFull; label: string }> = {
  great: {
    ring: 'ring-emerald-200 dark:ring-emerald-900/40',
    bg: 'bg-emerald-50 dark:bg-emerald-950/20',
    text: 'text-emerald-700 dark:text-emerald-300',
    icon: BatteryFull,
    label: 'Excellent',
  },
  good: {
    ring: 'ring-sky-200 dark:ring-sky-900/40',
    bg: 'bg-sky-50 dark:bg-sky-950/20',
    text: 'text-sky-700 dark:text-sky-300',
    icon: BatteryMedium,
    label: 'Good',
  },
  aging: {
    ring: 'ring-amber-200 dark:ring-amber-900/40',
    bg: 'bg-amber-50 dark:bg-amber-950/20',
    text: 'text-amber-700 dark:text-amber-300',
    icon: BatteryLow,
    label: 'Aging',
  },
  replace: {
    ring: 'ring-red-200 dark:ring-red-900/40',
    bg: 'bg-red-50 dark:bg-red-950/20',
    text: 'text-red-700 dark:text-red-300',
    icon: BatteryWarning,
    label: 'Time to Replace',
  },
};

function getResult(device: DeviceKind, percent: number): CoachResult {
  const isApple = device === 'iphone';
  const cost = isApple
    ? '$89 for an iPhone battery replacement at an Apple Store (most models). Older iPhone 14 and earlier are typically $69–$99. AppleCare+ holders pay $0 if the battery is below 80%.'
    : '$50–$120 for most Android phones at a Samsung Walk-In Service Center, uBreakiFix, or Best Buy. Samsung Care+ members pay a reduced fee.';

  const baseHabits = [
    'Avoid charging to 100% all the time. Modern phones are happiest between 20% and 80%.',
    'Avoid letting the battery drain to 0%. Plug in before you hit 10%.',
    'Skip extreme heat. Do not leave your phone on a hot car dashboard or in direct sun.',
    'Use the original charger or a quality replacement (Apple, Anker, Belkin) — cheap chargers can degrade batteries faster.',
  ];

  if (percent >= 90) {
    return {
      verdict: 'great',
      headline: 'Your battery is in great shape.',
      detail: `At ${percent}% capacity, your battery is performing close to factory new. You should expect normal full-day use without any noticeable issues.`,
      remainingLifeYears: 'About 2–3 more years of healthy use, if you treat it well.',
      replacementCost: cost,
      habits: baseHabits,
      nextStep: 'Nothing to do — keep your charging habits gentle and check back in a year.',
    };
  }

  if (percent >= 80) {
    return {
      verdict: 'good',
      headline: 'Your battery is still healthy.',
      detail: `At ${percent}% capacity, you are above Apple\'s and most Android manufacturers\' "good" threshold. You may notice a small drop in how long the phone lasts on a full charge compared to when it was new, but it is normal.`,
      remainingLifeYears: 'About 1–2 more years before replacement is worth considering.',
      replacementCost: cost,
      habits: baseHabits,
      nextStep: 'No action needed. Re-check the percentage in 6 months.',
    };
  }

  if (percent >= 70) {
    return {
      verdict: 'aging',
      headline: 'Your battery is starting to age.',
      detail: `At ${percent}% capacity, you may notice your phone runs out of charge sooner than it used to. ${
        isApple
          ? 'iPhone may also show "Service Recommended" in Settings → Battery → Battery Health when you drop below 80%.'
          : 'On Android, you may also see slower charging or warmer-than-usual charging.'
      } The phone is still safe to use.`,
      remainingLifeYears: 'About 6–18 months until a replacement makes a meaningful difference.',
      replacementCost: cost,
      habits: [
        ...baseHabits,
        'Lower your screen brightness or use auto-brightness. The screen is the biggest battery drain.',
        'Turn off background app refresh for apps you do not use daily.',
      ],
      nextStep:
        'Start watching for battery replacement deals. You do not need to act today — but it is a good time to check warranty status (AppleCare, Samsung Care+).',
    };
  }

  return {
    verdict: 'replace',
    headline: 'Your battery should be replaced soon.',
    detail: `At ${percent}% capacity, you are below the manufacturer "service recommended" threshold. You will likely notice the phone shutting down unexpectedly when the battery is still showing 20% or 30%, especially in cold weather. ${
      isApple
        ? 'iPhone may also throttle (slow down) the processor to prevent shutdowns. This is the leading cause of "my phone got slow" complaints.'
        : 'Android phones may automatically reduce performance to keep the battery from dying mid-task.'
    }`,
    remainingLifeYears: 'Less than 6 months of comfortable daily use without a replacement.',
    replacementCost: cost,
    habits: [
      'Carry a portable battery pack (Anker, Mophie — $25–$50) for the meantime.',
      'Keep a charging cable in your car and at frequently visited places.',
      'Avoid letting the battery drop below 20% — sudden shutdowns are likely.',
    ],
    nextStep:
      'Replace the battery, or plan an upgrade if your phone is also getting older. A battery swap is dramatically cheaper than a new phone and often makes the device feel new again.',
  };
}

export default function BatteryHealthCoach() {
  const [device, setDevice] = useState<DeviceKind | null>(null);
  const [percent, setPercent] = useState<number>(85);
  const [submitted, setSubmitted] = useState(false);

  const result = useMemo(() => {
    if (!device || !submitted) return null;
    return getResult(device, percent);
  }, [device, percent, submitted]);

  const reset = () => {
    setDevice(null);
    setPercent(85);
    setSubmitted(false);
  };

  const styles = result ? VERDICT_STYLES[result.verdict] : null;
  const Icon = styles?.icon ?? BatteryFull;

  return (
    <>
      <SEOHead
        title="Phone Battery Health Coach — Is It Time to Replace? | TekSure"
        description="Enter your iPhone or Android battery health percentage and get plain-English advice on whether to keep it, watch it, or replace it. Free, takes 30 seconds."
        path="/tools/battery-health-coach"
      />
      <Navbar />

      <main className="min-h-screen bg-background">
        <section className="bg-gradient-to-br from-emerald-50 via-background to-sky-50 dark:from-emerald-950/20 dark:to-sky-950/20 border-b border-border py-10 px-4">
          <div className="container max-w-3xl mx-auto text-center">
            <div className="flex justify-center mb-3">
              <div className="p-3 bg-emerald-500/10 rounded-full">
                <BatteryFull className="h-8 w-8 text-emerald-600" aria-hidden="true" />
              </div>
            </div>
            <Badge variant="secondary" className="mb-3">Free Tool · 30 seconds</Badge>
            <h1 className="text-3xl md:text-4xl font-bold mb-2">Phone Battery Health Coach</h1>
            <p className="text-muted-foreground text-lg max-w-xl mx-auto">
              Enter your phone's battery health percentage and we will tell you, in plain English,
              whether it is still in good shape, aging, or due for replacement — plus what it
              actually costs.
            </p>
          </div>
        </section>

        <div className="container max-w-3xl mx-auto px-4 py-8 space-y-6">
          <PageBreadcrumb
            segments={[
              { label: 'Tools', href: '/tools' },
              { label: 'Battery Health Coach' },
            ]}
          />

          {!result && (
            <>
              {/* Step 1: device */}
              <Card>
                <CardContent className="p-6">
                  <h2 className="text-lg font-semibold mb-4">Step 1: Which phone do you have?</h2>
                  <div className="grid sm:grid-cols-2 gap-3">
                    <button
                      type="button"
                      onClick={() => setDevice('iphone')}
                      className={`text-left p-4 rounded-xl border-2 transition-all ${
                        device === 'iphone'
                          ? 'border-primary bg-primary/5'
                          : 'border-border hover:border-primary/50 hover:bg-primary/5'
                      }`}
                    >
                      <p className="font-semibold mb-1">iPhone</p>
                      <p className="text-sm text-muted-foreground">
                        Find: Settings → Battery → Battery Health & Charging
                      </p>
                    </button>
                    <button
                      type="button"
                      onClick={() => setDevice('android')}
                      className={`text-left p-4 rounded-xl border-2 transition-all ${
                        device === 'android'
                          ? 'border-primary bg-primary/5'
                          : 'border-border hover:border-primary/50 hover:bg-primary/5'
                      }`}
                    >
                      <p className="font-semibold mb-1">Android Phone</p>
                      <p className="text-sm text-muted-foreground">
                        Samsung: Settings → Battery and device care → Battery
                      </p>
                    </button>
                  </div>
                </CardContent>
              </Card>

              {/* Step 2: percentage */}
              {device && (
                <Card>
                  <CardContent className="p-6">
                    <h2 className="text-lg font-semibold mb-2">Step 2: Enter your battery health</h2>
                    <p className="text-sm text-muted-foreground mb-4">
                      It is the "Maximum Capacity" number on iPhone, or the "Battery health"
                      reading on most Android phones. If you do not see it, see the help below.
                    </p>

                    <div className="space-y-4">
                      <div className="flex items-center gap-4">
                        <input
                          type="range"
                          min={50}
                          max={100}
                          step={1}
                          value={percent}
                          onChange={(e) => setPercent(parseInt(e.target.value, 10))}
                          className="flex-1 accent-primary"
                          aria-label="Battery health percentage"
                        />
                        <div className="text-3xl font-bold tabular-nums w-20 text-right">{percent}%</div>
                      </div>
                      <div className="flex justify-between text-xs text-muted-foreground">
                        <span>50% — replace</span>
                        <span>80% — good</span>
                        <span>100% — new</span>
                      </div>
                    </div>

                    <Button
                      size="lg"
                      onClick={() => setSubmitted(true)}
                      className="w-full sm:w-auto mt-6 gap-2"
                    >
                      Get my advice <ChevronRight className="h-4 w-4" aria-hidden="true" />
                    </Button>
                  </CardContent>
                </Card>
              )}

              {/* Help: how to find battery health */}
              <Card className="border-dashed">
                <CardContent className="p-6">
                  <h3 className="font-semibold mb-2 flex items-center gap-2">
                    <HelpCircle className="h-4 w-4 text-muted-foreground" aria-hidden="true" />
                    Where do I find this number?
                  </h3>
                  <div className="grid md:grid-cols-2 gap-4 text-sm">
                    <div>
                      <p className="font-medium mb-1">iPhone</p>
                      <ol className="list-decimal list-inside space-y-1 text-muted-foreground">
                        <li>Open Settings.</li>
                        <li>Tap "Battery."</li>
                        <li>Tap "Battery Health & Charging."</li>
                        <li>Read the "Maximum Capacity" number.</li>
                      </ol>
                    </div>
                    <div>
                      <p className="font-medium mb-1">Samsung Galaxy</p>
                      <ol className="list-decimal list-inside space-y-1 text-muted-foreground">
                        <li>Open Settings.</li>
                        <li>Tap "Battery and device care."</li>
                        <li>Tap "Diagnostics" → "Battery status."</li>
                        <li>Read the capacity result.</li>
                      </ol>
                    </div>
                    <div>
                      <p className="font-medium mb-1">Google Pixel</p>
                      <ol className="list-decimal list-inside space-y-1 text-muted-foreground">
                        <li>Open Settings.</li>
                        <li>Tap "Battery."</li>
                        <li>Tap "Battery Health."</li>
                      </ol>
                      <p className="text-xs text-muted-foreground mt-1">
                        Pixel 8a and newer show the percentage directly.
                      </p>
                    </div>
                    <div>
                      <p className="font-medium mb-1">Other Android</p>
                      <p className="text-muted-foreground">
                        Try a free app like AccuBattery (Google Play). It tracks your battery
                        capacity over a few full charge cycles and shows the result.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </>
          )}

          {result && styles && (
            <>
              {/* Verdict */}
              <Card className={`ring-2 ${styles.ring}`}>
                <CardContent className={`p-6 ${styles.bg}`}>
                  <div className="flex items-start gap-4">
                    <div className="h-14 w-14 rounded-full bg-white/80 dark:bg-black/20 flex items-center justify-center flex-shrink-0">
                      <Icon className={`h-7 w-7 ${styles.text}`} aria-hidden="true" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <Badge className={`mb-2 ${styles.text} bg-white/70 dark:bg-black/20 border-0`}>
                        {styles.label}
                      </Badge>
                      <h2 className="text-xl md:text-2xl font-bold mb-2">{result.headline}</h2>
                      <p className="text-base leading-relaxed">{result.detail}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Expected life + cost */}
              <div className="grid sm:grid-cols-2 gap-4">
                <Card>
                  <CardContent className="p-5">
                    <h3 className="font-semibold mb-1 flex items-center gap-2">
                      <Lightbulb className="h-4 w-4 text-muted-foreground" aria-hidden="true" />
                      Expected remaining life
                    </h3>
                    <p className="text-sm text-muted-foreground">{result.remainingLifeYears}</p>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="p-5">
                    <h3 className="font-semibold mb-1 flex items-center gap-2">
                      <DollarSign className="h-4 w-4 text-muted-foreground" aria-hidden="true" />
                      Replacement cost
                    </h3>
                    <p className="text-sm text-muted-foreground">{result.replacementCost}</p>
                  </CardContent>
                </Card>
              </div>

              {/* Habits */}
              <Card>
                <CardContent className="p-6">
                  <h3 className="font-semibold mb-4 flex items-center gap-2">
                    <Wrench className="h-5 w-5 text-muted-foreground" aria-hidden="true" />
                    Habits that extend battery life
                  </h3>
                  <ul className="space-y-2 text-sm">
                    {result.habits.map((h, i) => (
                      <li key={i} className="flex gap-2">
                        <span className="text-primary font-semibold">•</span>
                        <span>{h}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>

              {/* Next step */}
              <Card>
                <CardContent className="p-6">
                  <h3 className="font-semibold mb-2">What to do next</h3>
                  <p className="text-sm text-muted-foreground mb-4">{result.nextStep}</p>
                  <div className="flex flex-wrap gap-3">
                    <Button variant="outline" onClick={reset} className="gap-2">
                      <RotateCcw className="h-4 w-4" aria-hidden="true" /> Check another phone
                    </Button>
                    <Button asChild>
                      <Link to="/tools/device-age-checker">Check my device age</Link>
                    </Button>
                    <Button asChild variant="outline">
                      <Link to="/guides/new-phone-first-day-setup-checklist">
                        New phone setup guide
                      </Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </>
          )}

          <div className="pt-4 text-xs text-muted-foreground text-center">
            Replacement cost figures are approximate, US-based, and current as of 2026. Apple Store
            pricing reference: support.apple.com/iphone/repair/service/battery. Apple
            recommends battery service when capacity drops below 80%.
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}

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
  ShieldPlus, ChevronRight, ExternalLink, Watch, Phone,
  CheckCircle2, AlertTriangle, type LucideIcon,
} from 'lucide-react';

type Device = 'apple-watch' | 'pixel-watch' | 'samsung-watch' | 'iphone' | 'pixel' | 'medical-alert' | 'none';

interface DeviceGuide {
  label: string;
  icon: LucideIcon;
  freeAfter: string;
  whoFor: string;
  setup: string[];
  contactsHow: string;
  notes?: string[];
  link?: { label: string; href: string };
}

const GUIDES: Record<Exclude<Device, 'none'>, DeviceGuide> = {
  'apple-watch': {
    label: 'Apple Watch',
    icon: Watch,
    freeAfter: 'Free after the watch (Series 4 and newer)',
    whoFor: 'Already wear the watch every day, or willing to start.',
    setup: [
      'On your iPhone, open the Watch app.',
      'Tap "My Watch" tab → "Emergency SOS".',
      'Turn ON "Fall Detection".',
      'Below it, pick "Always on" if you are over 55 (the default). Otherwise pick "Only on during workouts" — but Always on is what we want for seniors.',
      'Test it: hold the side button on the watch. After a few seconds it counts down and calls 911. Cancel before it fires the first time.',
    ],
    contactsHow: 'On your iPhone, open Health → tap your photo top-right → Medical ID → Edit → scroll to Emergency Contacts → Add. The watch will text these people automatically when 911 is called.',
    notes: [
      'Apple Watch SE works too — same fall detection feature.',
      'When a fall is detected and you do not move for 60 seconds, the watch calls 911 and texts your emergency contacts with your location.',
    ],
    link: { label: 'Apple Support — Fall Detection', href: 'https://support.apple.com/en-us/108896' },
  },
  'pixel-watch': {
    label: 'Google Pixel Watch',
    icon: Watch,
    freeAfter: 'Free after the watch',
    whoFor: 'Use Android. Pixel Watch (any generation) detects falls automatically.',
    setup: [
      'Open the Pixel Watch app on your Android phone.',
      'Tap "Personal safety" → "Fall detection".',
      'Toggle it ON.',
      'Allow location and emergency call permissions when asked.',
      'Test it on the watch itself: long-press the side button, then "Test Emergency SOS" — make sure you press cancel before it dials 911.',
    ],
    contactsHow: 'In the Personal Safety app on your phone (separate from the Watch app), tap "Emergency contacts" → "Add". The watch will share your location with these people during an emergency.',
    notes: [
      'Requires the watch to be on your wrist with skin contact.',
      'Like Apple Watch — calls 911 + texts emergency contacts after a fall and 30 seconds of no movement.',
    ],
    link: { label: 'Google Support — Pixel Watch fall detection', href: 'https://support.google.com/googlepixelwatch/answer/13351814' },
  },
  'samsung-watch': {
    label: 'Samsung Galaxy Watch',
    icon: Watch,
    freeAfter: 'Free after the watch (Watch 4 and newer)',
    whoFor: 'Use a Samsung phone, or any Android with the Galaxy Wearable app.',
    setup: [
      'Open the Galaxy Wearable app on your phone.',
      'Tap "Watch settings" → "Safety and emergency" → "Hard fall detection".',
      'Toggle it ON. Pick "Always on" instead of "When working out".',
      'In the same menu, set up "Emergency SOS" so the side button calls 911.',
    ],
    contactsHow: 'Galaxy Wearable → "Watch settings" → "Safety and emergency" → "Emergency contacts" → Add up to 4. They get a location text when an SOS fires.',
    notes: [
      'Watch must be paired and within Bluetooth range of your phone for the call to go through (or have its own LTE).',
    ],
    link: { label: 'Samsung Support — Hard Fall Detection', href: 'https://www.samsung.com/us/support/answer/ANS00088876/' },
  },
  'iphone': {
    label: 'iPhone (without a watch)',
    icon: Phone,
    freeAfter: 'Free — built into the phone',
    whoFor: 'Carry an iPhone in a pocket or bag. iPhone 14 and newer support Crash Detection (cars, motorcycles); fall detection is on the Watch only.',
    setup: [
      'Open Settings → Emergency SOS.',
      'Turn ON "Call with Hold and Release" — hold the side + volume button to dial 911.',
      'Turn ON "Auto Call" — it dials automatically after a few seconds.',
      'Open Health app → Medical ID → Edit → fill in your conditions, medications, allergies, and emergency contacts.',
      'Turn ON "Show When Locked" so first responders can see it without your passcode.',
    ],
    contactsHow: 'Health → Medical ID → Edit → scroll to "Emergency Contacts" → Add. They get a text with your location when Emergency SOS fires.',
    notes: [
      'Without a watch, the iPhone cannot detect a fall — only a car crash. For real fall protection consider an Apple Watch or a medical-alert pendant.',
    ],
    link: { label: 'Apple Support — Emergency SOS', href: 'https://support.apple.com/en-us/101412' },
  },
  'pixel': {
    label: 'Google Pixel phone (without a watch)',
    icon: Phone,
    freeAfter: 'Free — built in',
    whoFor: 'Carry a Pixel. Pixel 3 and newer have Personal Safety + crash detection; fall detection is on the Watch only.',
    setup: [
      'Open the Personal Safety app (pre-installed on Pixel).',
      'Tap "Set up emergency contacts".',
      'Turn ON "Car crash detection" — it works without a watch.',
      'Turn ON "Emergency SOS" — pressing the power button five times dials 911.',
    ],
    contactsHow: 'Personal Safety app → Emergency contacts → Add up to 5. They will get your location during an SOS.',
    notes: [
      'Without a watch, the phone cannot tell when you fall — only when you crash. Consider a Pixel Watch or a medical-alert pendant.',
    ],
    link: { label: 'Pixel Personal Safety', href: 'https://support.google.com/pixelphone/answer/9319337' },
  },
  'medical-alert': {
    label: 'Medical-alert pendant or wristband',
    icon: ShieldPlus,
    freeAfter: 'Monthly fee, no smartphone needed',
    whoFor: 'Do not want to wear a smartwatch, or want a dedicated device. Most reliable option for someone living alone.',
    setup: [
      'Pick a service. Reliable US options: Medical Guardian, MobileHelp, Bay Alarm Medical, Lively Mobile Plus.',
      'Most cost between $30 and $50 per month with no contract. Many waive shipping and the activation fee.',
      'Confirm the device has automatic fall detection — not all do. Look for the words "fall detection included".',
      'When it arrives, charge it overnight, then call the company\'s test number to confirm it works at your home.',
      'Test it again any time you travel — the GPS models call you while away from home, the home-only models do not.',
    ],
    contactsHow: 'Set up by phone with the service: they keep a list of people to call (usually 3–5) before or instead of dispatching an ambulance.',
    notes: [
      'Avoid pendants advertised on TV with "FREE pendant" — most lock you into a long contract. Always check the cancellation policy.',
      'Medicare does not cover medical-alert devices. Some Medicare Advantage plans (PPOs especially) reimburse a portion — check yours.',
    ],
    link: { label: 'Consumer Reports — Medical Alert Buying Guide', href: 'https://www.consumerreports.org/medical-alert-systems/best-medical-alert-systems-a8323264137/' },
  },
};

const DEVICE_OPTIONS: { id: Device; label: string }[] = [
  { id: 'apple-watch',   label: 'Apple Watch' },
  { id: 'pixel-watch',   label: 'Google Pixel Watch' },
  { id: 'samsung-watch', label: 'Samsung Galaxy Watch' },
  { id: 'iphone',        label: 'iPhone only (no watch)' },
  { id: 'pixel',         label: 'Pixel / Android phone only' },
  { id: 'medical-alert', label: 'A pendant or wristband (no phone needed)' },
  { id: 'none',          label: "I don't have any of these yet" },
];

export default function FallDetectionSetup() {
  const [device, setDevice] = useState<Device | null>(null);

  const guide = device && device !== 'none' ? GUIDES[device] : null;

  return (
    <>
      <SEOHead
        title="Fall Detection Setup"
        description="Set up automatic fall detection on Apple Watch, Pixel Watch, Galaxy Watch, iPhone, Pixel, or a medical-alert pendant. Free, plain-English steps and an honest comparison of which one fits you."
        path="/tools/fall-detection-setup"
      />
      <Navbar />

      <main className="min-h-screen bg-background">
        <section className="bg-gradient-to-br from-red-50 via-background to-orange-50 dark:from-red-950/20 dark:to-orange-950/20 border-b border-border py-10 px-4">
          <div className="container max-w-3xl mx-auto text-center">
            <div className="flex justify-center mb-3">
              <div className="p-3 bg-red-500/10 rounded-full">
                <ShieldPlus className="h-8 w-8 text-red-600" />
              </div>
            </div>
            <h1 className="text-3xl md:text-4xl font-bold mb-2">Fall Detection Setup</h1>
            <p className="text-muted-foreground text-lg max-w-xl mx-auto">
              Set it up once. If you fall and cannot move, your watch or phone calls for help — and texts your family.
            </p>
            <p className="text-sm text-muted-foreground mt-3">Takes about 5 minutes. Free if you already own the device.</p>
          </div>
        </section>

        <div className="container max-w-3xl mx-auto px-4 py-8">
          <PageBreadcrumb segments={[{ label: 'Tools', href: '/tools' }, { label: 'Fall Detection Setup' }]} />

          {!device ? (
            <Card className="border-border shadow-sm">
              <CardContent className="p-6">
                <p className="text-sm font-semibold mb-3">Which device do you have or are you considering?</p>
                <div className="grid sm:grid-cols-2 gap-2">
                  {DEVICE_OPTIONS.map(o => (
                    <button key={o.id} onClick={() => setDevice(o.id)}
                      className="p-3 rounded-lg border border-border hover:border-primary/50 hover:bg-primary/5 transition-all text-left">
                      <p className="font-medium text-sm">{o.label}</p>
                    </button>
                  ))}
                </div>
              </CardContent>
            </Card>
          ) : device === 'none' ? (
            <>
              <Card className="border-border shadow-sm mb-6">
                <CardContent className="p-5 flex items-center justify-between flex-wrap gap-3">
                  <Badge variant="outline">No device yet</Badge>
                  <Button variant="outline" size="sm" onClick={() => setDevice(null)}>Start over</Button>
                </CardContent>
              </Card>

              <Card className="border-border mb-6">
                <CardContent className="p-5">
                  <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-3">Three honest options for someone starting from zero</p>

                  <div className="space-y-4">
                    <div className="p-4 rounded-lg border border-border">
                      <p className="font-semibold">A medical-alert pendant ($30–$50/month)</p>
                      <p className="text-sm text-muted-foreground mt-1">
                        The simplest option. No phone or watch needed. Press the button or fall — a real person calls you and dispatches help. Best if you do not want to learn a smartwatch.
                      </p>
                      <Button variant="outline" size="sm" className="mt-2" onClick={() => setDevice('medical-alert')}>
                        Show me pendants <ChevronRight className="h-3 w-3 ml-1" />
                      </Button>
                    </div>

                    <div className="p-4 rounded-lg border border-border">
                      <p className="font-semibold">An Apple Watch SE (~$250 one-time, no monthly fee)</p>
                      <p className="text-sm text-muted-foreground mt-1">
                        Best if you also want texts, calls, and step counts. Pairs with an iPhone. Same medical-alert features as a pendant, plus a lot more.
                      </p>
                      <Button variant="outline" size="sm" className="mt-2" onClick={() => setDevice('apple-watch')}>
                        Show me Apple Watch setup <ChevronRight className="h-3 w-3 ml-1" />
                      </Button>
                    </div>

                    <div className="p-4 rounded-lg border border-border">
                      <p className="font-semibold">A Pixel Watch or Galaxy Watch (~$200–$300 one-time)</p>
                      <p className="text-sm text-muted-foreground mt-1">
                        Same idea, for Android users. Pixel Watch with a Pixel phone is the smoothest setup.
                      </p>
                      <Button variant="outline" size="sm" className="mt-2" onClick={() => setDevice('pixel-watch')}>
                        Show me Pixel Watch setup <ChevronRight className="h-3 w-3 ml-1" />
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </>
          ) : guide ? (
            <>
              <Card className="border-border shadow-sm mb-6">
                <CardContent className="p-5 flex items-center justify-between flex-wrap gap-3">
                  <div className="flex items-center gap-3">
                    <Badge variant="outline">{guide.label}</Badge>
                    <Badge>{guide.freeAfter}</Badge>
                  </div>
                  <Button variant="outline" size="sm" onClick={() => setDevice(null)}>Change device</Button>
                </CardContent>
              </Card>

              <Card className="border-border mb-6">
                <CardContent className="p-5">
                  <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-2">Who this fits</p>
                  <p className="text-sm text-muted-foreground mb-5">{guide.whoFor}</p>

                  <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-3">Setup steps</p>
                  <ol className="space-y-3 mb-5">
                    {guide.setup.map((s, i) => (
                      <li key={i} className="flex gap-3 text-sm">
                        <span className="shrink-0 w-6 h-6 rounded-full bg-primary/10 text-primary font-semibold text-xs flex items-center justify-center mt-0.5">{i + 1}</span>
                        <span>{s}</span>
                      </li>
                    ))}
                  </ol>

                  <div className="p-4 rounded-lg bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 mb-5">
                    <p className="text-sm font-semibold text-blue-900 dark:text-blue-100 mb-1">Add 2 to 3 emergency contacts</p>
                    <p className="text-xs text-blue-800 dark:text-blue-200">{guide.contactsHow}</p>
                  </div>

                  {guide.notes && guide.notes.length > 0 && (
                    <ul className="space-y-2 mb-3">
                      {guide.notes.map((n, i) => (
                        <li key={i} className="flex gap-2 text-xs text-muted-foreground">
                          <CheckCircle2 className="h-3 w-3 text-green-600 shrink-0 mt-0.5" />
                          <span>{n}</span>
                        </li>
                      ))}
                    </ul>
                  )}

                  {guide.link && (
                    <a href={guide.link.href} target="_blank" rel="noreferrer"
                      className="inline-flex items-center gap-1 text-sm text-primary hover:underline">
                      {guide.link.label} <ExternalLink className="h-4 w-4" />
                    </a>
                  )}
                </CardContent>
              </Card>

              <Card className="border-amber-300 bg-amber-50 dark:bg-amber-950/20 mb-6">
                <CardContent className="p-5 flex gap-3">
                  <AlertTriangle className="h-5 w-5 text-amber-600 shrink-0 mt-0.5" />
                  <div className="text-sm">
                    <p className="font-semibold mb-1">Test it once, with someone present</p>
                    <p className="text-muted-foreground">
                      The first time you trigger an alert, the dispatcher will ask if you actually need help. Have a family member with you the first time you press the SOS button so you can confirm everything routes correctly. After that, you know it works.
                    </p>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-green-300 bg-green-50 dark:bg-green-950/20">
                <CardContent className="p-5 flex gap-3">
                  <CheckCircle2 className="h-5 w-5 text-green-600 shrink-0 mt-0.5" />
                  <div className="text-sm">
                    <p className="font-semibold mb-1">One more thing</p>
                    <p className="text-muted-foreground">
                      Add an emergency note to your lock screen with your medications and allergies. First responders look there first. Open your phone&apos;s Health (or Personal Safety) app to fill it in.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </>
          ) : null}

          <div className="mt-10 pt-8 border-t border-border">
            <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-3">Related</p>
            <div className="grid sm:grid-cols-3 gap-3">
              <Link to="/tools/hearing-aid-pairing-wizard" className="p-3 rounded-lg border border-border hover:border-primary/50 hover:bg-primary/5 transition-all">
                <p className="font-medium text-sm">Hearing Aid Pairing</p>
                <p className="text-xs text-muted-foreground mt-0.5">Connect hearing aids to your phone.</p>
              </Link>
              <Link to="/low-vision-setup" className="p-3 rounded-lg border border-border hover:border-primary/50 hover:bg-primary/5 transition-all">
                <p className="font-medium text-sm">Low-Vision Setup</p>
                <p className="text-xs text-muted-foreground mt-0.5">Make your screen easier to see.</p>
              </Link>
              <Link to="/accessibility" className="p-3 rounded-lg border border-border hover:border-primary/50 hover:bg-primary/5 transition-all">
                <p className="font-medium text-sm">Accessibility Hub</p>
                <p className="text-xs text-muted-foreground mt-0.5">All accessibility resources.</p>
              </Link>
            </div>
          </div>
          <p className="text-xs text-muted-foreground mt-4 flex items-center gap-1">
            <ChevronRight className="h-3 w-3" /> Quick Tip: charge your watch every night on the same nightstand, so it is always ready in the morning.
          </p>
        </div>
      </main>

      <Footer />
    </>
  );
}

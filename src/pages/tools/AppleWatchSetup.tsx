import { useCallback, useEffect, useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import { SEOHead } from '@/components/SEOHead';
import { BookmarkButton } from '@/components/BookmarkButton';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import {
  Watch,
  ArrowLeft,
  ArrowRight,
  RotateCcw,
  Image as ImageIcon,
  Lightbulb,
  AlertTriangle,
  CheckCircle2,
  Coffee,
  Heart,
  HeartPulse,
  Activity,
  Battery,
  ShieldCheck,
  Siren,
  MapPin,
  Users,
  Accessibility,
  HelpCircle,
  Bookmark,
  Smartphone,
  Sparkles,
  Lock,
  Power,
  Camera,
  PhoneCall,
  MessageSquare,
  Timer,
  Wallet,
  Mic,
  CloudSun,
  Moon,
  Pill,
  Volume2,
  type LucideIcon,
} from 'lucide-react';

/* ──────────────────────────────────────────────────────────────
 * Apple Watch — Set Up and Settle In
 * ------------------------------------------------------------
 * A senior-friendly setup wizard + feature orientation for
 * someone who just got a new Apple Watch (or is setting one up
 * for a parent). 12 short steps with stumbling-block tips, then
 * safety settings, health features, daily basics, accessibility,
 * troubleshooting, Family Setup, privacy, and an FAQ.
 * ────────────────────────────────────────────────────────────── */

type WatchModel = 'series9plus' | 'series4to8' | 'se' | 'ultra' | 'series3';

const STORAGE_KEY = 'teksure:apple-watch-setup';

interface SavedProgress {
  model: WatchModel | null;
  stepIndex: number;
  completed: number[];
  savedAt: string;
}

interface WizardStep {
  title: string;
  oneLiner: string;
  icon: LucideIcon;
  actions: string[];
  stumble: string;
  why?: string;
  screenshot: string;
}

/* ── Watch model info ─────────────────────────────────────────── */

interface ModelInfo {
  id: WatchModel;
  name: string;
  years: string;
  note: string;
  supported: boolean;
  crashDetection: boolean;
  bloodOxygen: boolean;
  ecg: boolean;
  fallDetectionCapable: boolean;
}

const MODELS: ModelInfo[] = [
  {
    id: 'series9plus',
    name: 'Series 9 or Series 10',
    years: '2023 or newer',
    note: 'Newest features: double-tap gesture, on-device Siri, brightest screen.',
    supported: true,
    crashDetection: true,
    bloodOxygen: true,
    ecg: true,
    fallDetectionCapable: true,
  },
  {
    id: 'series4to8',
    name: 'Series 4, 5, 6, 7, or 8',
    years: '2018 through 2022',
    note: 'Fully supported. Most setup steps are identical to the newer models.',
    supported: true,
    crashDetection: false,
    bloodOxygen: true,
    ecg: true,
    fallDetectionCapable: true,
  },
  {
    id: 'se',
    name: 'Apple Watch SE (1st or 2nd generation)',
    years: '2020 or 2022',
    note: 'A great value. No ECG or Blood Oxygen app, but otherwise full-featured.',
    supported: true,
    crashDetection: true,
    bloodOxygen: false,
    ecg: false,
    fallDetectionCapable: true,
  },
  {
    id: 'ultra',
    name: 'Apple Watch Ultra or Ultra 2',
    years: '2022 or newer',
    note: 'Largest screen, longest battery, loudest siren. Setup is the same.',
    supported: true,
    crashDetection: true,
    bloodOxygen: true,
    ecg: true,
    fallDetectionCapable: true,
  },
  {
    id: 'series3',
    name: 'Series 3 (or older)',
    years: '2017 and earlier',
    note: 'No longer supported by the latest watchOS. Most steps still work, but you will not get new features or security updates.',
    supported: false,
    crashDetection: false,
    bloodOxygen: false,
    ecg: false,
    fallDetectionCapable: false,
  },
];

function getModel(id: WatchModel | null): ModelInfo | null {
  if (!id) return null;
  return MODELS.find((m) => m.id === id) ?? null;
}

/* ── Setup wizard steps ───────────────────────────────────────── */

const WIZARD_STEPS: WizardStep[] = [
  {
    title: "What's in the box + charger check",
    oneLiner: 'Before you turn anything on, let us lay out the pieces and find the charger.',
    icon: Watch,
    actions: [
      'The WATCH itself — a small rectangle with a screen and two buttons on the right side.',
      'A BAND already attached to the watch (a sport band, loop, or leather strap).',
      'A CHARGING PUCK — a small round magnet on a cable. The end that plugs into power may be USB-C (newer) or USB-A (older).',
      'A power brick is NOT always included. Any Apple or name-brand USB wall charger works fine.',
      'Set these three things on the table in front of you: watch, charging puck, wall charger.',
    ],
    stumble:
      'No wall brick in the box? That is normal for newer models. The charging cable plugs into any USB port — a phone charger, a laptop, or a power strip with USB ports all work.',
    why: 'Knowing what each piece does before you start prevents the "what do I plug where?" moment halfway through setup.',
    screenshot: 'Apple Watch, charging puck, and USB-C cable laid out on a table.',
  },
  {
    title: 'Charge to at least 50% before starting',
    oneLiner: 'Pairing uses battery. Give the watch a short drink before the big first day.',
    icon: Battery,
    actions: [
      'Place the back of the watch on the flat round charging puck — magnets pull it into place.',
      'Plug the other end of the cable into a USB wall charger and plug that into the wall.',
      'A green lightning bolt appears on the watch screen — that means it is charging.',
      'Leave it for 30 to 60 minutes. You want at least 50% before starting setup.',
      'To check the charge, give the side button one quick press — the battery number shows up.',
    ],
    stumble:
      'Watch screen stays black forever? The magnets might be off-center. Lift the watch off the puck, line it up again, and look for a small green charging symbol. If nothing happens after a minute, try a different USB port.',
    screenshot: 'Apple Watch face-up on the charging puck with a green lightning bolt showing.',
  },
  {
    title: 'Turn on the watch',
    oneLiner: 'Press and hold the flat side button — not the round crown — until an Apple logo shows up.',
    icon: Power,
    actions: [
      'Find the TWO buttons on the right side of the watch.',
      'The round wheel on top is the Digital Crown. The flat button below it is the side button.',
      'Press and HOLD the flat side button for about 3 seconds.',
      'A white Apple logo appears on a black screen. This can take up to a minute.',
      'When you see the word "Hello" in several languages, you are ready for the next step.',
    ],
    stumble:
      'Nothing happens after 3 seconds? Hold longer — up to 10 seconds on a fully drained watch. If still nothing, put it back on the charger for 20 more minutes and try again.',
    screenshot: 'Apple Watch showing the black screen with a white Apple logo during startup.',
  },
  {
    title: 'Bring your iPhone close — watch the pairing animation',
    oneLiner: 'The iPhone recognizes the new watch on its own. No searching menus.',
    icon: Smartphone,
    actions: [
      'Unlock your iPhone and bring it within 6 inches of the watch.',
      'A card pops up on the iPhone that says "Use your iPhone to set up this Apple Watch" — tap Continue.',
      'If that card does not appear, open the Watch app on the iPhone (a black watch icon with a white face) and tap Pair New Watch.',
      'On the watch, a swirling blue, red, and yellow pattern appears. That is the pairing animation.',
      'The iPhone tells you to "Hold your iPhone over the watch" — do not put them side by side yet.',
    ],
    stumble:
      'No pop-up on the iPhone? Make sure Bluetooth and Wi-Fi are ON (Settings → Bluetooth, Settings → Wi-Fi). The watch needs both to pair. The iPhone also needs to be running iOS 17 or newer for a Series 9/10/Ultra 2.',
    why: 'Apple built pairing this way so you never have to type codes or search Bluetooth lists. The animation is a visual key — only your iPhone can read it.',
    screenshot: 'iPhone setup card with the swirling pairing animation on the Apple Watch below.',
  },
  {
    title: 'Scan the pairing animation',
    oneLiner: 'Point the iPhone camera at the watch face — same as scanning a QR code.',
    icon: Camera,
    actions: [
      'On the iPhone, tap Set Up for Myself (or Set Up for a Family Member — more on that later).',
      'The iPhone opens a viewfinder — a yellow square in the middle of the screen.',
      'Hold the iPhone about 4 to 6 inches above the watch, centering the animation inside the yellow square.',
      'Stay still — the scan takes 1 to 2 seconds.',
      'You hear a little chime and see "Your Apple Watch is paired" on the iPhone.',
    ],
    stumble:
      'Animation not being recognized? Make sure the watch screen is clean and bright — rub the watch face with your shirt. Move to a room with good light, and keep your hand steady.',
    screenshot: "iPhone camera viewfinder centered on the watch's swirling pairing pattern.",
  },
  {
    title: 'Set up as new, or restore from a backup',
    oneLiner: 'Brand new? Pick "Set Up as New." Replacing an older watch? Pick the backup.',
    icon: Sparkles,
    actions: [
      'The iPhone asks "Set Up as New Apple Watch" or "Restore from Backup."',
      'FIRST-TIME owner: tap Set Up as New Apple Watch.',
      'REPLACING an older Apple Watch: tap Restore from Backup and pick the most recent backup — your old apps, watch faces, and health data come back.',
      'If you see "Set Up for a Family Member," skip that unless you are a child or a senior whose iPhone you are not using (see the Family Setup section farther down).',
    ],
    stumble:
      "Not sure if you had a backup? If you synced your old watch with your iPhone in the last 30 days, there is almost certainly a backup. Picking Restore won't hurt — if no backup is found, the watch sets up as new automatically.",
    screenshot: 'iPhone screen showing "Set Up as New Apple Watch" and "Restore from Backup" buttons.',
  },
  {
    title: 'Pick wrist + Digital Crown side',
    oneLiner: 'Which wrist will you wear it on, and which side should the crown face?',
    icon: Watch,
    actions: [
      'Tap the wrist you plan to wear the watch on — Left or Right.',
      'Next, pick which side of the watch the Digital Crown should face.',
      'Most people wear the watch on the non-writing wrist (righties wear it on the left).',
      'Crown facing UP the back of your hand is the default — the watch reads better that way.',
      'If you change your mind later: iPhone → Watch app → General → Watch Orientation.',
    ],
    stumble:
      'Crown ending up pointing toward your elbow? That is normal for some people. If it feels wrong, flip the band around — the band comes off with two small buttons on the back of the watch.',
    screenshot: 'iPhone screen showing wrist selection (left / right) with a small watch diagram.',
  },
  {
    title: 'Terms, Apple ID, and passcode',
    oneLiner: 'Agree to the terms, sign in with the same Apple ID as your iPhone, and pick a passcode.',
    icon: Lock,
    actions: [
      'Scroll through the Terms and Conditions, then tap Agree.',
      'Sign in with your Apple ID — it is the same email and password you use on the iPhone. The iPhone often fills it in for you.',
      'Choose a passcode. This is a short number you tap on the watch screen when it comes off your wrist.',
      'You can pick 4 digits (fast but less secure) or 6 digits (a bit slower but much safer). 6 digits is recommended if you use Apple Pay.',
      'Re-enter the passcode to confirm. Write it down somewhere safe until you remember it.',
    ],
    stumble:
      'Forgot which Apple ID is on your iPhone? On the iPhone: Settings → tap your name at the top — the email under your name is your Apple ID. If you are asked for the password and cannot recall it, tap "Forgot Apple ID or password?" on the iPhone first, not the watch.',
    why: "The passcode stops a stranger from using your watch if it falls off. The watch locks automatically every time it leaves your wrist — so you'll type this number a lot at first. It becomes muscle memory within a week.",
    screenshot: 'Apple Watch showing a passcode-entry keypad with six empty dots.',
  },
  {
    title: 'Unlock with iPhone + wrist detection',
    oneLiner: 'Two quiet features that make the watch much friendlier. Turn both on.',
    icon: ShieldCheck,
    actions: [
      'UNLOCK WITH iPHONE: when you unlock your iPhone, the watch unlocks too — no passcode needed. Tap "Unlock with iPhone" → On.',
      'WRIST DETECTION: the watch senses when it is on your wrist. When you take it off, it locks. When you put it back on, the passcode is asked once.',
      'Both are ON by default. Leave them on — they make everyday use much easier.',
      'Later, if you want to change them: iPhone → Watch app → Passcode.',
    ],
    stumble:
      'Wrist detection keeps asking for a passcode even when you are wearing it? The watch may be too loose. Tighten the band one notch — the heart rate sensors on the back need to touch skin.',
    screenshot: 'iPhone Watch app Passcode screen with "Unlock with iPhone" and "Wrist Detection" toggled on.',
  },
  {
    title: 'Siri, Always-On, and Screen Time defaults',
    oneLiner: 'Three choices in a row. Pick the senior-friendly default for each.',
    icon: Mic,
    actions: [
      'SIRI: tap Enable. This lets you say "Siri, set a timer for 20 minutes" or "Siri, call my daughter" hands-free.',
      'ALWAYS-ON DISPLAY (Series 5 and newer): tap Enable. The watch screen stays dim when you lower your wrist — you can glance at the time without lifting your arm. Uses a bit more battery but well worth it.',
      'SCREEN TIME: tap Continue. This quietly tracks how much you use the watch — you can ignore it if you want, it does nothing unless you open the report.',
      'The iPhone then says "Choose Your App View" — pick List View. The grid of floating bubbles is pretty but hard to tap accurately.',
    ],
    stumble:
      "Worried about Siri listening all the time? Siri only listens when you say \"Hey Siri\" or press and hold the Digital Crown. The watch doesn't stream conversation to Apple.",
    screenshot: 'iPhone setup screen with Siri, Always-On Display, and Screen Time toggles.',
  },
  {
    title: 'App install preferences',
    oneLiner: 'The iPhone asks if every app on your phone should also install on the watch. Say no.',
    icon: Bookmark,
    actions: [
      'You see "Install Available Apps" with Install All and Install Later buttons.',
      'Tap Install Later (or Choose Later, depending on wording). This avoids a cluttered watch full of apps you never use.',
      'You can add apps one at a time afterward: iPhone → Watch app → scroll to "Available Apps" → tap Install next to the ones you actually want.',
      'Good apps to install early: Weather, Messages, Maps, Phone, Heart Rate, Workout. Most others can wait.',
    ],
    stumble:
      'If you accidentally tapped Install All, no problem — you can remove apps later by pressing the Digital Crown on the watch, long-pressing any app icon, and tapping the X. Or use the Watch app on the iPhone to turn them off one by one.',
    why: 'A watch screen is tiny. Fewer apps means the ones you do use are always easy to find.',
    screenshot: 'iPhone prompt with "Install All Available Apps" and "Install Later" options.',
  },
  {
    title: 'Done! Let your watch sync',
    oneLiner: 'The swirling sync screen can take 5 to 20 minutes. Go make a cup of coffee.',
    icon: CheckCircle2,
    actions: [
      'A spinning circle appears on both the watch and the iPhone — that is the sync.',
      'Keep the watch and iPhone close together (on the same table is fine).',
      'Leave the watch on the charger during this step — it uses battery.',
      'When you hear a chime and feel a tap on the wrist, you are done. The watch face is showing.',
      'Try this right now: press the Digital Crown once to go to the app list. Press it again to return to the watch face.',
    ],
    stumble:
      "Sync stuck on the same percentage for more than 30 minutes? Unpair and try again: iPhone → Watch app → My Watch → All Watches → tap the small (i) → Unpair Apple Watch. Then start over from step 3. Your data is safe — it's backed up on your iPhone.",
    why: "Congratulations — you are through the hard part. Everything from here is about learning the small daily delights: reading texts on your wrist, feeling a gentle tap for your next medication, calling for help if you fall. Take a break. You earned it.",
    screenshot: 'Apple Watch showing a spinning sync indicator with the iPhone beside it.',
  },
];

/* ── Main component ───────────────────────────────────────────── */

export default function AppleWatchSetup() {
  const [model, setModel] = useState<WatchModel | null>(null);
  const [stepIndex, setStepIndex] = useState(0);
  const [completed, setCompleted] = useState<Set<number>>(new Set());
  const [resumeOffer, setResumeOffer] = useState<SavedProgress | null>(null);
  const [wizardStarted, setWizardStarted] = useState(false);

  /* ── Load saved progress on mount ── */
  useEffect(() => {
    if (typeof window === 'undefined') return;
    try {
      const raw = window.localStorage.getItem(STORAGE_KEY);
      if (!raw) return;
      const saved = JSON.parse(raw) as SavedProgress;
      if (saved && typeof saved.stepIndex === 'number') {
        setResumeOffer(saved);
      }
    } catch {
      // ignore corrupted data
    }
  }, []);

  /* ── Save progress whenever state changes ── */
  const saveNow = useCallback(() => {
    if (typeof window === 'undefined') return;
    if (!wizardStarted) return;
    const payload: SavedProgress = {
      model,
      stepIndex,
      completed: Array.from(completed),
      savedAt: new Date().toISOString(),
    };
    try {
      window.localStorage.setItem(STORAGE_KEY, JSON.stringify(payload));
    } catch {
      // storage may be full or disabled
    }
  }, [model, stepIndex, completed, wizardStarted]);

  useEffect(() => {
    saveNow();
  }, [saveNow]);

  /* ── Wizard navigation ── */
  const totalSteps = WIZARD_STEPS.length;
  const current: WizardStep | null = wizardStarted ? WIZARD_STEPS[stepIndex] ?? null : null;
  const progress = wizardStarted ? Math.round(((stepIndex + 1) / totalSteps) * 100) : 0;

  const startWizard = () => {
    setWizardStarted(true);
    setStepIndex(0);
    setCompleted(new Set());
    setResumeOffer(null);
    if (typeof window !== 'undefined') window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const goNext = () => {
    setCompleted((prev) => new Set(prev).add(stepIndex));
    setStepIndex((i) => Math.min(i + 1, totalSteps - 1));
    if (typeof window !== 'undefined') window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const goBack = () => {
    setStepIndex((i) => Math.max(i - 1, 0));
    if (typeof window !== 'undefined') window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const jumpTo = (i: number) => {
    setStepIndex(i);
    if (typeof window !== 'undefined') window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const restart = () => {
    setWizardStarted(false);
    setStepIndex(0);
    setCompleted(new Set());
    if (typeof window !== 'undefined') {
      window.localStorage.removeItem(STORAGE_KEY);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const takeABreak = () => {
    saveNow();
    if (typeof window !== 'undefined') {
      // eslint-disable-next-line no-alert
      window.alert(
        "Your progress has been saved. You can close this page and come back any time — we'll remember where you left off.",
      );
    }
  };

  const resumeFromOffer = () => {
    if (!resumeOffer) return;
    setModel(resumeOffer.model);
    setStepIndex(resumeOffer.stepIndex);
    setCompleted(new Set(resumeOffer.completed));
    setWizardStarted(true);
    setResumeOffer(null);
    if (typeof window !== 'undefined') window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const dismissResume = () => {
    setResumeOffer(null);
    if (typeof window !== 'undefined') window.localStorage.removeItem(STORAGE_KEY);
  };

  const selectedModel = getModel(model);

  /* ── Hero ── */
  const Hero = useMemo(
    () => (
      <section className="relative overflow-hidden border-b border-border">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-200 via-zinc-100 to-slate-300 dark:from-slate-900 dark:via-zinc-900 dark:to-slate-800" />
        <div className="absolute inset-0 opacity-50 bg-[radial-gradient(ellipse_at_top_right,rgba(148,163,184,0.4),transparent_60%)]" />
        <div className="container relative py-10 md:py-14">
          <div className="absolute top-6 right-6">
            <BookmarkButton
              type="tool"
              slug="apple-watch-setup"
              title="Apple Watch Setup"
              url="/tools/apple-watch-setup"
            />
          </div>
          <div className="flex items-center gap-2 mb-4">
            <Watch className="w-5 h-5 text-slate-700 dark:text-slate-200" />
            <Badge variant="outline" className="text-xs border-slate-400 text-slate-800 dark:text-slate-200">
              New Apple Watch · Guided setup
            </Badge>
          </div>
          <h1 className="text-3xl md:text-5xl font-bold mb-3 pr-14 leading-tight">
            Apple Watch — Set Up and Settle In
          </h1>
          <p className="text-lg md:text-2xl text-muted-foreground max-w-3xl leading-relaxed">
            Get your Apple Watch paired, safe, and ready to help you.
          </p>
        </div>
      </section>
    ),
    [],
  );

  /* ── LANDING view: model picker + full feature orientation ── */
  if (!wizardStarted) {
    return (
      <>
        <SEOHead
          title="Apple Watch Setup — Pairing, Safety, and First-Week Orientation"
          description="A step-by-step Apple Watch setup wizard for seniors and first-time owners. 12 short steps, plus Fall Detection, Emergency SOS, Medical ID, health features, and Family Setup."
          path="/tools/apple-watch-setup"
        />
        <main className="min-h-screen bg-background">
          {Hero}

          {/* Resume banner */}
          {resumeOffer && (
            <section className="container pt-6">
              <Alert className="border-slate-400/60 bg-slate-50 dark:bg-slate-900/30">
                <Bookmark className="h-5 w-5 text-slate-700 dark:text-slate-300" />
                <AlertTitle className="text-base">Welcome back!</AlertTitle>
                <AlertDescription className="text-base leading-relaxed">
                  You were on step {resumeOffer.stepIndex + 1} of your Apple Watch walkthrough. Want to pick up
                  where you left off?
                  <div className="mt-3 flex flex-wrap gap-2">
                    <Button size="lg" className="min-h-14 text-base" onClick={resumeFromOffer}>
                      Yes, continue where I left off
                      <ArrowRight className="w-5 h-5 ml-1" />
                    </Button>
                    <Button size="lg" variant="outline" className="min-h-14 text-base" onClick={dismissResume}>
                      Start fresh
                    </Button>
                  </div>
                </AlertDescription>
              </Alert>
            </section>
          )}

          {/* Model identifier */}
          <section className="container py-10 md:py-14">
            <h2 className="text-2xl md:text-3xl font-semibold mb-3">Which Apple Watch do you have?</h2>
            <p className="text-base md:text-lg text-muted-foreground mb-6 max-w-3xl leading-relaxed">
              Most of the setup steps are the same across models. Pick yours so we can point out the small
              differences — Crash Detection, Blood Oxygen, and ECG are only on certain models.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {MODELS.map((m) => {
                const active = model === m.id;
                return (
                  <button
                    key={m.id}
                    type="button"
                    onClick={() => setModel(m.id)}
                    className={[
                      'text-left rounded-2xl border-2 p-5 md:p-6 transition-all min-h-14',
                      active
                        ? 'border-slate-700 bg-slate-100 dark:border-slate-300 dark:bg-slate-800/60'
                        : 'border-border bg-card hover:border-slate-500 hover:bg-slate-50 dark:hover:bg-slate-900/40',
                    ].join(' ')}
                  >
                    <div className="flex items-start gap-3">
                      <div
                        className={[
                          'p-3 rounded-xl shrink-0',
                          m.supported
                            ? 'bg-slate-200 text-slate-800 dark:bg-slate-700 dark:text-slate-100'
                            : 'bg-amber-100 text-amber-800 dark:bg-amber-950/40 dark:text-amber-200',
                        ].join(' ')}
                      >
                        <Watch className="w-7 h-7" />
                      </div>
                      <div className="flex-1">
                        <div className="flex flex-wrap items-center gap-2 mb-1">
                          <h3 className="text-lg md:text-xl font-semibold">{m.name}</h3>
                          {!m.supported && (
                            <Badge className="bg-amber-600 hover:bg-amber-600 text-white text-xs">
                              Older — limited support
                            </Badge>
                          )}
                          {active && (
                            <Badge className="bg-slate-700 hover:bg-slate-700 text-white text-xs">
                              Selected
                            </Badge>
                          )}
                        </div>
                        <p className="text-sm md:text-base text-muted-foreground">{m.years}</p>
                        <p className="text-base leading-relaxed mt-2">{m.note}</p>
                      </div>
                    </div>
                  </button>
                );
              })}
            </div>

            {selectedModel && (
              <Card className="mt-6 border-slate-400/60">
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-3 flex items-center gap-2">
                    <Sparkles className="w-5 h-5 text-slate-700 dark:text-slate-300" />
                    What works on your {selectedModel.name}
                  </h3>
                  <ul className="space-y-2 text-base leading-relaxed">
                    <li className="flex gap-2">
                      <CheckCircle2
                        className={`w-5 h-5 shrink-0 mt-0.5 ${
                          selectedModel.fallDetectionCapable ? 'text-green-700' : 'text-muted-foreground'
                        }`}
                      />
                      <span>
                        <strong>Fall Detection:</strong>{' '}
                        {selectedModel.fallDetectionCapable ? 'Yes — included.' : 'Not available.'}
                      </span>
                    </li>
                    <li className="flex gap-2">
                      <CheckCircle2
                        className={`w-5 h-5 shrink-0 mt-0.5 ${
                          selectedModel.crashDetection ? 'text-green-700' : 'text-muted-foreground'
                        }`}
                      />
                      <span>
                        <strong>Crash Detection:</strong>{' '}
                        {selectedModel.crashDetection
                          ? 'Yes — on by default.'
                          : 'Not available on this model.'}
                      </span>
                    </li>
                    <li className="flex gap-2">
                      <CheckCircle2
                        className={`w-5 h-5 shrink-0 mt-0.5 ${
                          selectedModel.bloodOxygen ? 'text-green-700' : 'text-muted-foreground'
                        }`}
                      />
                      <span>
                        <strong>Blood Oxygen app:</strong>{' '}
                        {selectedModel.bloodOxygen ? 'Yes.' : 'Not available on this model.'}
                      </span>
                    </li>
                    <li className="flex gap-2">
                      <CheckCircle2
                        className={`w-5 h-5 shrink-0 mt-0.5 ${
                          selectedModel.ecg ? 'text-green-700' : 'text-muted-foreground'
                        }`}
                      />
                      <span>
                        <strong>ECG (heart rhythm):</strong>{' '}
                        {selectedModel.ecg ? 'Yes.' : 'Not available on this model.'}
                      </span>
                    </li>
                  </ul>
                  {!selectedModel.supported && (
                    <Alert className="mt-4 border-amber-400/60 bg-amber-50 dark:bg-amber-950/30">
                      <AlertTriangle className="h-5 w-5 text-amber-700 dark:text-amber-300" />
                      <AlertTitle className="text-base">Heads up about older models</AlertTitle>
                      <AlertDescription className="text-base leading-relaxed">
                        Series 3 and older do not receive the latest watchOS updates. Pairing still works, but you
                        will miss newer features and some security updates. If this watch is a gift, consider a
                        Series SE or newer.
                      </AlertDescription>
                    </Alert>
                  )}
                </CardContent>
              </Card>
            )}

            <div className="mt-8 flex flex-col sm:flex-row items-start sm:items-center gap-3">
              <Button
                size="lg"
                className="min-h-14 text-base gap-2"
                onClick={startWizard}
              >
                Start the setup walkthrough
                <ArrowRight className="w-5 h-5" />
              </Button>
              <p className="text-sm text-muted-foreground">
                12 short steps. Your progress is saved automatically.
              </p>
            </div>
          </section>

          {/* What to expect FAQ */}
          <section className="border-t border-border bg-muted/30">
            <div className="container py-10 md:py-14">
              <h2 className="text-2xl md:text-3xl font-semibold mb-3">What to expect</h2>
              <p className="text-base md:text-lg text-muted-foreground mb-6 max-w-3xl leading-relaxed">
                A few friendly answers before we begin.
              </p>
              <div className="max-w-3xl">
                <Accordion type="single" collapsible className="w-full">
                  <AccordionItem value="how-long">
                    <AccordionTrigger className="text-base md:text-lg text-left">
                      How long does the setup take?
                    </AccordionTrigger>
                    <AccordionContent className="text-base leading-relaxed">
                      Plan for 30 to 45 minutes, plus a 5-to-20 minute automatic sync at the end. Your progress
                      saves after every step, so you can stop and come back whenever.
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="need-iphone">
                    <AccordionTrigger className="text-base md:text-lg text-left">
                      Do I need an iPhone?
                    </AccordionTrigger>
                    <AccordionContent className="text-base leading-relaxed">
                      For the first setup, yes. You need an iPhone XS or newer running a current version of iOS.
                      After setup, the watch can do many things on its own — Family Setup even lets a parent use an
                      Apple Watch without owning an iPhone.
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="break-it">
                    <AccordionTrigger className="text-base md:text-lg text-left">
                      Can I break the watch by tapping the wrong thing?
                    </AccordionTrigger>
                    <AccordionContent className="text-base leading-relaxed">
                      No. Every step in this walkthrough is safe. If you do tap the wrong button during setup, you
                      can always start over — all your data lives on the iPhone.
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </div>
            </div>
          </section>

          {/* ── After-setup content (always visible on landing) ── */}
          <MustDoSafetySettings />
          <HealthFeaturesWalkthrough />
          <DailyBasics />
          <AccessibilitySection />
          <FamilySetupSection />
          <PrivacyCard />
          <TroubleshootingSection />
          <MainFAQ />
          <RelatedLinks />
        </main>
      </>
    );
  }

  /* ── WIZARD view ── */
  const isLastStep = stepIndex === totalSteps - 1;
  const StepIcon = current?.icon ?? Watch;

  return (
    <>
      <SEOHead
        title="Apple Watch Setup — Step-by-step walkthrough"
        description="A gentle, step-by-step Apple Watch pairing walkthrough. 12 short steps in plain English. Designed for seniors and first-time owners."
        path="/tools/apple-watch-setup"
      />
      <main className="min-h-screen bg-background">
        {/* Progress header */}
        <section className="border-b border-border bg-gradient-to-br from-slate-100 via-zinc-50 to-slate-200 dark:from-slate-900/60 dark:via-zinc-900/40 dark:to-slate-800/40">
          <div className="container py-6 md:py-8">
            <div className="flex flex-wrap items-center justify-between gap-3 mb-4">
              <div className="flex items-center gap-3">
                <StepIcon className="w-5 h-5 text-slate-700 dark:text-slate-200" />
                <span className="text-base md:text-lg font-medium">Apple Watch walkthrough</span>
              </div>
              <div className="flex flex-wrap gap-2">
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={takeABreak}
                  className="gap-2 min-h-11 text-base"
                >
                  <Coffee className="w-4 h-4" />
                  Take a break
                </Button>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={restart}
                  className="gap-2 min-h-11 text-base"
                >
                  <RotateCcw className="w-4 h-4" />
                  Start over
                </Button>
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-x-3 gap-y-1 mb-2">
              <span className="text-sm md:text-base font-medium">
                Step {stepIndex + 1} of {totalSteps}
              </span>
              <span className="text-sm md:text-base text-muted-foreground">·</span>
              <span className="text-sm md:text-base text-muted-foreground">
                {completed.size} completed
              </span>
              <span className="text-sm md:text-base text-muted-foreground">·</span>
              <span className="text-sm md:text-base text-muted-foreground">
                You&apos;re doing great — take your time.
              </span>
            </div>
            <Progress value={progress} className="h-3" aria-label="Walkthrough progress" />
          </div>
        </section>

        {current && (
          <section className="container py-8 md:py-12 max-w-4xl">
            <article className="space-y-6">
              {/* Step header */}
              <header className="space-y-3">
                <div className="flex flex-wrap items-center gap-2">
                  <Badge className="text-sm bg-slate-700 hover:bg-slate-700 text-white">
                    Step {stepIndex + 1} / {totalSteps}
                  </Badge>
                  {selectedModel && (
                    <Badge variant="outline" className="text-sm">
                      {selectedModel.name}
                    </Badge>
                  )}
                </div>
                <div className="flex items-start gap-3">
                  <div className="p-3 rounded-xl bg-slate-200 text-slate-800 dark:bg-slate-800 dark:text-slate-100 shrink-0">
                    <StepIcon className="w-8 h-8" />
                  </div>
                  <div>
                    <h1 className="text-3xl md:text-4xl font-bold leading-tight">{current.title}</h1>
                    <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mt-2">
                      {current.oneLiner}
                    </p>
                  </div>
                </div>
              </header>

              {/* Screenshot placeholder */}
              <div
                role="img"
                aria-label={`Screenshot placeholder: ${current.screenshot}`}
                className="relative aspect-video rounded-xl border-2 border-dashed border-muted-foreground/30 bg-gradient-to-br from-slate-100 to-zinc-100 dark:from-slate-900/40 dark:to-zinc-900/40 flex flex-col items-center justify-center text-center gap-3 p-6"
              >
                <div className="p-3 rounded-full bg-background border">
                  <ImageIcon className="w-8 h-8 text-muted-foreground" aria-hidden="true" />
                </div>
                <div className="text-sm text-muted-foreground uppercase tracking-wider">Screenshot</div>
                <div className="text-base md:text-lg font-medium max-w-md">{current.screenshot}</div>
              </div>

              {/* Actions list */}
              <Card>
                <CardContent className="p-6 md:p-8">
                  <h2 className="text-xl md:text-2xl font-semibold mb-4">What to do</h2>
                  <ol className="space-y-3">
                    {current.actions.map((action, i) => (
                      <li key={i} className="flex gap-3 text-base md:text-lg leading-relaxed">
                        <span
                          aria-hidden="true"
                          className="shrink-0 w-8 h-8 rounded-full bg-slate-200 text-slate-800 dark:bg-slate-800 dark:text-slate-100 font-bold flex items-center justify-center text-base"
                        >
                          {i + 1}
                        </span>
                        <span className="pt-1">{action}</span>
                      </li>
                    ))}
                  </ol>
                </CardContent>
              </Card>

              {/* Stumbling block */}
              <Alert className="border-amber-400/60 bg-amber-50 dark:bg-amber-950/30">
                <Lightbulb className="h-5 w-5 text-amber-700 dark:text-amber-300" />
                <AlertTitle className="text-base md:text-lg">Common stumbling block</AlertTitle>
                <AlertDescription className="text-base leading-relaxed">
                  {current.stumble}
                </AlertDescription>
              </Alert>

              {current.why && (
                <Alert className="border-primary/40 bg-primary/5">
                  <Sparkles className="h-5 w-5 text-primary" />
                  <AlertTitle className="text-base md:text-lg">Why this matters</AlertTitle>
                  <AlertDescription className="text-base leading-relaxed">
                    {current.why}
                  </AlertDescription>
                </Alert>
              )}

              {/* Nav */}
              <div className="flex flex-wrap items-center justify-between gap-3 pt-4 border-t border-border">
                <Button
                  variant="outline"
                  size="lg"
                  onClick={goBack}
                  disabled={stepIndex === 0}
                  className="gap-2 min-h-14 text-base"
                >
                  <ArrowLeft className="w-5 h-5" />
                  Back
                </Button>

                {isLastStep ? (
                  <Button
                    size="lg"
                    onClick={goNext}
                    className="gap-2 min-h-14 text-base bg-green-600 hover:bg-green-700"
                  >
                    I&apos;m finished!
                    <CheckCircle2 className="w-5 h-5" />
                  </Button>
                ) : (
                  <Button size="lg" onClick={goNext} className="gap-2 min-h-14 text-base">
                    {completed.has(stepIndex) ? 'Next step' : 'Got it — next step'}
                    <ArrowRight className="w-5 h-5" />
                  </Button>
                )}
              </div>

              {/* Final celebration */}
              {isLastStep && completed.has(stepIndex) && (
                <Card className="border-green-600/40 bg-green-50/40 dark:bg-green-950/20">
                  <CardContent className="p-6 md:p-8 space-y-4">
                    <h2 className="text-2xl md:text-3xl font-bold flex items-center gap-2">
                      <CheckCircle2 className="w-7 h-7 text-green-700 dark:text-green-400" />
                      You did it!
                    </h2>
                    <p className="text-base md:text-lg leading-relaxed">
                      Your Apple Watch is paired. Next, please scroll back to the top and read the{' '}
                      <strong>Must-do safety settings</strong> section — Fall Detection, Emergency SOS, and Medical
                      ID only take a few minutes to turn on and can save a life.
                    </p>
                    <div className="flex flex-wrap gap-2">
                      <Button
                        size="lg"
                        className="min-h-14 text-base gap-2"
                        onClick={() => {
                          setWizardStarted(false);
                          if (typeof window !== 'undefined')
                            window.scrollTo({ top: 0, behavior: 'smooth' });
                        }}
                      >
                        Back to safety + features
                        <ArrowRight className="w-5 h-5" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              )}

              {/* Step-jump grid */}
              <div className="pt-4">
                <h2 className="text-base font-semibold mb-3 text-muted-foreground">All steps</h2>
                <div className="flex flex-wrap gap-2">
                  {WIZARD_STEPS.map((s, i) => {
                    const done = completed.has(i);
                    const active = i === stepIndex;
                    return (
                      <button
                        key={i}
                        type="button"
                        onClick={() => jumpTo(i)}
                        aria-current={active ? 'step' : undefined}
                        className={[
                          'px-3 py-2 rounded-lg text-sm font-medium transition-colors border min-h-11',
                          active
                            ? 'bg-slate-700 text-white border-slate-700'
                            : done
                              ? 'bg-green-50 dark:bg-green-950/30 text-green-800 dark:text-green-300 border-green-600/40'
                              : 'bg-background text-foreground border-border hover:border-slate-500',
                        ].join(' ')}
                      >
                        {done && !active ? (
                          <CheckCircle2 className="w-4 h-4 inline mr-1.5 align-[-2px]" />
                        ) : null}
                        {i + 1}. {s.title.split(' ').slice(0, 4).join(' ')}
                        {s.title.split(' ').length > 4 ? '…' : ''}
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Reassurance footer */}
              <Card className="bg-muted/30">
                <CardContent className="p-5 flex items-start gap-3">
                  <AlertTriangle className="w-5 h-5 text-primary shrink-0 mt-0.5" aria-hidden="true" />
                  <div className="text-base leading-relaxed">
                    <strong>You can&apos;t break the watch here.</strong> If something looks different on your
                    screen, take a photo and{' '}
                    <Link to="/get-help" className="text-primary underline font-medium">
                      book a TekSure technician
                    </Link>{' '}
                    for a short video session.
                  </div>
                </CardContent>
              </Card>
            </article>
          </section>
        )}
      </main>
    </>
  );
}

/* ───────────────────────────────────────────────────────────────
 * After-setup sections
 * ───────────────────────────────────────────────────────────── */

/* ── Must-do safety settings ─────────────────────────────────── */

interface SafetyItem {
  icon: LucideIcon;
  title: string;
  why: string;
  path: string;
  eligibility?: string;
}

const SAFETY_ITEMS: SafetyItem[] = [
  {
    icon: Activity,
    title: 'Fall Detection',
    why: 'If the watch senses a hard fall and you don\'t move for about 60 seconds, it can call 911 and your emergency contacts on its own. This has saved many lives.',
    path: 'iPhone → Watch app → My Watch → Emergency SOS → Fall Detection → Always on',
    eligibility:
      'Available on Series 4 and later, SE, and Ultra. ON by default for users 55 and older when the age on file in Health is set. If you are younger than 55, turn it on manually — especially if you live alone, have balance issues, or are recovering from surgery.',
  },
  {
    icon: Siren,
    title: 'Emergency SOS + Medical ID',
    why: 'Press and hold the flat side button for 3 seconds to show the Emergency SOS slider. Medical ID lets paramedics see your medications, allergies, and blood type even when the watch is locked.',
    path: 'Fill in Medical ID on iPhone → Health app → tap your photo (top right) → Medical ID → Edit → turn ON "Show When Locked."',
  },
  {
    icon: Users,
    title: 'Emergency Contacts',
    why: 'When SOS triggers, the watch texts your emergency contacts your location. Add at least two people — a family member plus a close neighbor is ideal.',
    path: 'iPhone → Health app → tap your photo → Medical ID → Edit → scroll to Emergency Contacts → Add.',
  },
  {
    icon: MapPin,
    title: 'Share location with family via Find My',
    why: 'A trusted family member can see where you are on a map — helpful if you get disoriented or the watch triggers SOS while you are out.',
    path: 'iPhone → Settings → tap your name → Find My → Share My Location → add a family member.',
  },
  {
    icon: HeartPulse,
    title: 'Heart Rate notifications',
    why: 'The watch can alert you if your heart rate is unusually high or low while you\'re still, or if the rhythm looks irregular. These alerts have caught dangerous conditions early.',
    path: 'iPhone → Watch app → My Watch → Heart → turn on High Heart Rate (120 bpm), Low Heart Rate (40 bpm), and Irregular Rhythm.',
  },
  {
    icon: Volume2,
    title: 'Noise threshold',
    why: 'The watch warns you when surroundings get loud enough to harm hearing over time (90+ dB). Helpful at concerts, construction sites, and on the subway.',
    path: 'iPhone → Watch app → My Watch → Noise → turn on Environmental Sound Measurements and set the threshold to 90 dB.',
  },
  {
    icon: ShieldCheck,
    title: 'Enable Crash Detection',
    why: 'Series 8, SE (2nd gen), Series 9/10, and Ultra can detect a serious car crash. If you don\'t respond within 10 seconds, the watch calls 911 and shares your location.',
    path: 'ON by default on eligible models. Confirm: iPhone → Watch app → My Watch → Emergency SOS → Call After Severe Crash (ON).',
    eligibility: 'Series 8 and later, SE 2nd generation, and Ultra models only.',
  },
];

function MustDoSafetySettings() {
  return (
    <section className="border-t border-border bg-red-50/40 dark:bg-red-950/10">
      <div className="container py-10 md:py-14">
        <div className="flex items-center gap-2 mb-3">
          <Siren className="w-6 h-6 text-red-700 dark:text-red-300" />
          <Badge className="bg-red-700 hover:bg-red-700 text-white">Do these first</Badge>
        </div>
        <h2 className="text-2xl md:text-3xl font-semibold mb-3">Must-do safety settings</h2>
        <p className="text-base md:text-lg text-muted-foreground mb-6 max-w-3xl leading-relaxed">
          The Apple Watch is a small computer on your wrist, but it&apos;s also one of the best personal-safety
          devices ever made — if you turn a handful of features on. Walk through these seven once; they stay on
          forever.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {SAFETY_ITEMS.map((item, i) => (
            <Card key={i} className="border-red-200/60 dark:border-red-900/40">
              <CardContent className="p-5 md:p-6 space-y-3">
                <div className="flex items-start gap-3">
                  <div className="p-2.5 rounded-lg bg-red-100 text-red-800 dark:bg-red-950/40 dark:text-red-200 shrink-0">
                    <item.icon className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-lg md:text-xl font-semibold">{item.title}</h3>
                  </div>
                </div>
                <p className="text-base leading-relaxed">{item.why}</p>
                <div className="rounded-md bg-muted/60 p-3 text-sm md:text-base font-mono leading-relaxed">
                  <strong className="font-semibold">How to turn it on:</strong> {item.path}
                </div>
                {item.eligibility && (
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    <strong>Eligibility:</strong> {item.eligibility}
                  </p>
                )}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ── Health features walkthrough ──────────────────────────────── */

interface HealthFeature {
  icon: LucideIcon;
  title: string;
  eligibility?: string;
  what: string;
  howTo: string;
}

const HEALTH_FEATURES: HealthFeature[] = [
  {
    icon: Activity,
    title: 'Activity Rings',
    what: 'Three colored rings track daily movement. Red = calories burned. Green = minutes of brisk activity. Blue = hours you stood up. Close all three and the watch gives you a little celebration animation.',
    howTo: 'Open the Activity app on the watch (a red, green, and blue ring icon). To adjust your goals: on the watch, scroll down and tap Change Goals.',
  },
  {
    icon: HeartPulse,
    title: 'Heart Rate',
    what: 'The watch checks your heart rate every few minutes — more often during workouts. You can also take a reading any time, which is useful before a doctor\'s visit.',
    howTo: 'Open the Heart Rate app on the watch (a heart icon). Sit still for 30 seconds for the best reading.',
  },
  {
    icon: Heart,
    title: 'ECG (heart rhythm check)',
    eligibility: 'Series 4 and later, excluding SE.',
    what: 'A 30-second medical-grade heart rhythm recording. Can detect atrial fibrillation, a common rhythm problem.',
    howTo: 'Open the ECG app on the watch (a heart-with-line icon). Rest your arm on a table and touch the Digital Crown with the finger of your other hand for 30 seconds. A PDF report is saved in the iPhone Health app — you can print or email it to your doctor.',
  },
  {
    icon: CloudSun,
    title: 'Blood Oxygen',
    eligibility: 'Series 6, 7, 8, 9, 10, and Ultra (not SE). Availability may vary by region and model year.',
    what: 'Measures how much oxygen your blood is carrying. Normal is 95–100%. Helpful for people with lung or sleep breathing concerns.',
    howTo: 'Open the Blood Oxygen app on the watch. Keep your wrist flat on a table for 15 seconds. The watch also takes readings quietly in the background — see them in the iPhone Health app.',
  },
  {
    icon: Moon,
    title: 'Sleep tracking',
    what: 'Wear the watch to bed and it records how long and how well you sleep, including heart rate and breathing rate while you rest.',
    howTo: 'iPhone → Health app → Browse → Sleep → Set Up Sleep. Set a bedtime and wake-up time. Charge the watch while you shower each morning so it\'s ready for bed again.',
  },
  {
    icon: Pill,
    title: 'Medications app',
    what: 'A built-in reminder for every pill you take. The watch gently taps your wrist at the right time, and you tap Taken or Skipped.',
    howTo: 'iPhone → Health app → Browse → Medications → Add a Medication. You can scan the bottle label to speed things up. The reminder shows up on the watch automatically.',
  },
  {
    icon: Activity,
    title: 'Walking Steadiness',
    what: 'Quietly measures how steady you are on your feet and warns you if your steadiness drops — an early sign of fall risk.',
    howTo: 'iPhone → Health app → Browse → Mobility → Walking Steadiness Notifications → Turn on. Wear the watch daily and carry the iPhone in a pocket for best results.',
  },
  {
    icon: Activity,
    title: 'Fall Detection',
    eligibility: 'Series 4 and later, SE, and Ultra.',
    what: 'If the watch senses a hard fall and you don\'t move for about 60 seconds, it calls 911 and alerts your emergency contacts.',
    howTo: 'iPhone → Watch app → My Watch → Emergency SOS → Fall Detection → Always on (recommended for all users, not only 55+).',
  },
];

function HealthFeaturesWalkthrough() {
  return (
    <section className="border-t border-border">
      <div className="container py-10 md:py-14">
        <div className="flex items-center gap-2 mb-3">
          <HeartPulse className="w-6 h-6 text-rose-700 dark:text-rose-300" />
          <Badge variant="outline" className="text-sm">
            Health features
          </Badge>
        </div>
        <h2 className="text-2xl md:text-3xl font-semibold mb-3">What the watch can do for your health</h2>
        <p className="text-base md:text-lg text-muted-foreground mb-6 max-w-3xl leading-relaxed">
          Eight features in plain English — what each one does, and how to open it. Start with one or two; add
          more as you get comfortable.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {HEALTH_FEATURES.map((f, i) => (
            <Card key={i}>
              <CardContent className="p-5 md:p-6 space-y-3">
                <div className="flex items-start gap-3">
                  <div className="p-2.5 rounded-lg bg-rose-100 text-rose-800 dark:bg-rose-950/40 dark:text-rose-200 shrink-0">
                    <f.icon className="w-6 h-6" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg md:text-xl font-semibold">{f.title}</h3>
                    {f.eligibility && (
                      <p className="text-sm text-muted-foreground">{f.eligibility}</p>
                    )}
                  </div>
                </div>
                <p className="text-base leading-relaxed">
                  <strong>What it does:</strong> {f.what}
                </p>
                <p className="text-base leading-relaxed">
                  <strong>How to use it:</strong> {f.howTo}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ── Daily basics (8 things) ──────────────────────────────────── */

interface DailyBasic {
  icon: LucideIcon;
  title: string;
  steps: string[];
}

const DAILY_BASICS: DailyBasic[] = [
  {
    icon: PhoneCall,
    title: 'Answer a call on the watch',
    steps: [
      'The watch taps your wrist and the caller\'s name appears.',
      'Tap the green phone button to answer — you can talk directly to the watch.',
      'To hang up: tap the red phone button or say "Siri, hang up."',
      'To move the call to your iPhone later, tap the three dots → Answer on iPhone.',
    ],
  },
  {
    icon: MessageSquare,
    title: 'Tell someone you\'ll call back',
    steps: [
      'When a call comes in, swipe UP on the red decline button.',
      'A short list of messages appears: "Can\'t talk right now," "I\'ll call you back," and "On my way."',
      'Tap one — it sends as a text message to the caller.',
      'You can edit these messages later: iPhone → Watch app → My Watch → Phone → Custom Replies.',
    ],
  },
  {
    icon: Timer,
    title: 'Set a timer or alarm',
    steps: [
      'Say "Siri, set a timer for 10 minutes" — easiest way.',
      'Or open the Timer app on the watch, pick a preset, and tap Start.',
      'For an alarm: "Siri, wake me up at 7 a.m." — the watch buzzes your wrist (silent for your partner).',
      'See or cancel active timers: open the Timer app, swipe down on the main screen.',
    ],
  },
  {
    icon: CloudSun,
    title: 'Ask Siri for the weather',
    steps: [
      'Press and hold the Digital Crown for 1 second.',
      'When you hear the chime, say "What\'s the weather today?" — the forecast appears on the screen.',
      'Try: "Will it rain tomorrow?" or "What\'s the temperature in Chicago?"',
      'You can also add a weather widget to the watch face: press firmly on the face → Edit → Complications.',
    ],
  },
  {
    icon: HeartPulse,
    title: 'Check your heart rate',
    steps: [
      'Open the Heart Rate app (a red heart icon) on the watch.',
      'Sit still and wait 10 seconds — the number shows up.',
      'Scroll down with the Digital Crown to see today\'s range: resting, walking, and workout.',
      'Take a reading before walking up stairs, then after — it\'s a fun way to see how fit you are getting.',
    ],
  },
  {
    icon: Smartphone,
    title: 'Find your iPhone (ping)',
    steps: [
      'Swipe UP from the bottom of the watch face to open Control Center.',
      'Tap the iPhone icon with sound waves around it.',
      'Your iPhone plays a loud chirp even if it\'s on silent.',
      'Hold the button instead of tapping and the iPhone flashes too — helpful in a dark room.',
    ],
  },
  {
    icon: Lock,
    title: 'Unlock your Mac (if you have one)',
    steps: [
      'On your Mac: Apple menu → System Settings → Login Password → Use your Apple Watch to unlock apps and your Mac → turn on.',
      'The Mac and Watch need to be signed into the same Apple ID with two-factor on, and Wi-Fi + Bluetooth on.',
      'Walk up to the Mac wearing the watch — it logs you in automatically. No typing.',
      'Works in Safari and other apps for password prompts too.',
    ],
  },
  {
    icon: Wallet,
    title: 'Apple Pay basics + safety',
    steps: [
      'Add a credit card: iPhone → Wallet app → + (top right) → follow the prompts.',
      'To pay at a store: double-click the flat side button of the watch, then hold the watch face close to the card reader.',
      'A gentle tap on your wrist + a checkmark means the payment went through.',
      'If the watch is lost, your card is safe — Apple Pay can be shut off from iCloud.com within seconds, no need to cancel the actual card.',
    ],
  },
];

function DailyBasics() {
  return (
    <section className="border-t border-border bg-muted/30">
      <div className="container py-10 md:py-14">
        <h2 className="text-2xl md:text-3xl font-semibold mb-3">Daily basics — 8 things you&apos;ll actually use</h2>
        <p className="text-base md:text-lg text-muted-foreground mb-6 max-w-3xl leading-relaxed">
          Master these eight and you have 90% of what most people use the watch for. Practice each one once —
          you&apos;ll remember them for good.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {DAILY_BASICS.map((b, i) => (
            <Card key={i}>
              <CardContent className="p-5 md:p-6 space-y-3">
                <div className="flex items-start gap-3">
                  <div className="p-2.5 rounded-lg bg-slate-200 text-slate-800 dark:bg-slate-800 dark:text-slate-100 shrink-0">
                    <b.icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg md:text-xl font-semibold">{b.title}</h3>
                </div>
                <ol className="space-y-2 text-base leading-relaxed">
                  {b.steps.map((s, j) => (
                    <li key={j} className="flex gap-2">
                      <span
                        aria-hidden="true"
                        className="shrink-0 w-6 h-6 rounded-full bg-slate-300 text-slate-900 dark:bg-slate-700 dark:text-slate-100 font-bold flex items-center justify-center text-xs"
                      >
                        {j + 1}
                      </span>
                      <span>{s}</span>
                    </li>
                  ))}
                </ol>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ── Accessibility section ────────────────────────────────────── */

function AccessibilitySection() {
  return (
    <section className="border-t border-border">
      <div className="container py-10 md:py-14">
        <div className="flex items-center gap-2 mb-3">
          <Accessibility className="w-6 h-6 text-indigo-700 dark:text-indigo-300" />
          <Badge variant="outline" className="text-sm">
            Accessibility
          </Badge>
        </div>
        <h2 className="text-2xl md:text-3xl font-semibold mb-3">
          Make the watch easier to see, hear, and use
        </h2>
        <p className="text-base md:text-lg text-muted-foreground mb-6 max-w-3xl leading-relaxed">
          Apple built deep accessibility into every Apple Watch. These are the six settings that make the biggest
          difference for most people.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Card>
            <CardContent className="p-5 space-y-2">
              <h3 className="text-lg font-semibold">Bigger watch face + text size</h3>
              <p className="text-base leading-relaxed">
                Pick a simpler, bigger watch face like X-Large or Numerals. Then bump the text size.
              </p>
              <p className="text-sm font-mono leading-relaxed text-muted-foreground">
                Watch: press firmly on the face → browse faces → pick X-Large. For text: iPhone → Watch app → My
                Watch → Display &amp; Brightness → Text Size.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-5 space-y-2">
              <h3 className="text-lg font-semibold">Zoom</h3>
              <p className="text-base leading-relaxed">
                Double-tap with two fingers to zoom in. Drag with two fingers to move around. Double-tap again to
                zoom out.
              </p>
              <p className="text-sm font-mono leading-relaxed text-muted-foreground">
                iPhone → Watch app → My Watch → Accessibility → Zoom → On.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-5 space-y-2">
              <h3 className="text-lg font-semibold">VoiceOver</h3>
              <p className="text-base leading-relaxed">
                The watch reads what&apos;s on the screen out loud. For people with low vision or those who find
                the text hard to read.
              </p>
              <p className="text-sm font-mono leading-relaxed text-muted-foreground">
                iPhone → Watch app → My Watch → Accessibility → VoiceOver → On.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-5 space-y-2">
              <h3 className="text-lg font-semibold">AssistiveTouch (for tremor or limited dexterity)</h3>
              <p className="text-base leading-relaxed">
                Control the watch with hand gestures — clench your fist twice to tap, pinch your fingers to
                scroll. No touching the screen needed.
              </p>
              <p className="text-sm font-mono leading-relaxed text-muted-foreground">
                iPhone → Watch app → My Watch → Accessibility → AssistiveTouch → On, then run Hand Gestures
                Tutorial.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-5 space-y-2">
              <h3 className="text-lg font-semibold">Reduce Motion</h3>
              <p className="text-base leading-relaxed">
                Turns off the swooping animations between apps. Helpful for motion sickness or people who find
                the movement distracting.
              </p>
              <p className="text-sm font-mono leading-relaxed text-muted-foreground">
                iPhone → Watch app → My Watch → Accessibility → Reduce Motion → On.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-5 space-y-2">
              <h3 className="text-lg font-semibold">Bold Text + higher contrast</h3>
              <p className="text-base leading-relaxed">
                Makes all the letters thicker and easier to read at a glance. Pair with Increase Contrast for
                even better readability.
              </p>
              <p className="text-sm font-mono leading-relaxed text-muted-foreground">
                iPhone → Watch app → My Watch → Display &amp; Brightness → Bold Text + Accessibility → Increase
                Contrast.
              </p>
            </CardContent>
          </Card>
        </div>

        <div className="mt-6">
          <Alert className="border-indigo-400/60 bg-indigo-50 dark:bg-indigo-950/20">
            <Sparkles className="h-5 w-5 text-indigo-700 dark:text-indigo-300" />
            <AlertDescription className="text-base leading-relaxed">
              Looking for more help with accessibility across all your devices?{' '}
              <Link to="/tools/accessibility-hub" className="text-primary underline font-medium">
                Visit the TekSure Accessibility Hub
              </Link>{' '}
              for vision, hearing, and mobility guides.
            </AlertDescription>
          </Alert>
        </div>
      </div>
    </section>
  );
}

/* ── Family Setup section ─────────────────────────────────────── */

function FamilySetupSection() {
  return (
    <section className="border-t border-border bg-blue-50/40 dark:bg-blue-950/10">
      <div className="container py-10 md:py-14">
        <div className="flex items-center gap-2 mb-3">
          <Users className="w-6 h-6 text-blue-700 dark:text-blue-300" />
          <Badge variant="outline" className="text-sm border-blue-400">
            Family Setup
          </Badge>
        </div>
        <h2 className="text-2xl md:text-3xl font-semibold mb-3">
          Setting up a watch for a parent who doesn&apos;t have an iPhone
        </h2>
        <p className="text-base md:text-lg text-muted-foreground mb-6 max-w-3xl leading-relaxed">
          With Family Setup, a family member can pair an Apple Watch to their OWN iPhone, then hand it to a
          parent. The parent gets calls, texts, and emergency features on the wrist — no iPhone needed.
        </p>

        <Card className="mb-6 border-blue-300/60">
          <CardContent className="p-6 space-y-3">
            <h3 className="text-xl font-semibold flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5 text-blue-700 dark:text-blue-300" />
              Requirements
            </h3>
            <ul className="space-y-2 text-base leading-relaxed">
              <li className="flex gap-2">
                <ArrowRight className="w-5 h-5 text-blue-700 shrink-0 mt-0.5" />
                <span>
                  A <strong>cellular</strong> Apple Watch Series 4 or later (GPS + Cellular model — look for the
                  red dot on the Digital Crown of older models, or check the box).
                </span>
              </li>
              <li className="flex gap-2">
                <ArrowRight className="w-5 h-5 text-blue-700 shrink-0 mt-0.5" />
                <span>
                  An active cellular plan on that watch — most US carriers offer $10/month Apple Watch plans.
                </span>
              </li>
              <li className="flex gap-2">
                <ArrowRight className="w-5 h-5 text-blue-700 shrink-0 mt-0.5" />
                <span>The family member&apos;s iPhone (the one doing the setup).</span>
              </li>
              <li className="flex gap-2">
                <ArrowRight className="w-5 h-5 text-blue-700 shrink-0 mt-0.5" />
                <span>
                  An Apple ID for the parent — create a free one during setup if they don&apos;t have one.
                </span>
              </li>
            </ul>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <h3 className="text-xl font-semibold mb-4">Step-by-step Family Setup</h3>
            <ol className="space-y-3 text-base leading-relaxed">
              {[
                'On the family member\'s iPhone, open the Watch app.',
                'Tap All Watches at the top, then Add Watch.',
                'Tap Set Up for a Family Member when the choice comes up.',
                'Scan the pairing animation on the new watch (same as a normal setup).',
                'Enter the parent\'s name, date of birth, and Apple ID — or tap "Create an Apple ID" for them.',
                'Pick a passcode the parent can remember (4 digits is fine if they don\'t use Apple Pay).',
                'Turn on Schooltime or Bedtime if desired, and add Emergency Contacts — the family member\'s number plus one neighbor.',
                'Finish — the watch is tied to the family member\'s account but runs as a separate device on the parent\'s wrist.',
              ].map((s, i) => (
                <li key={i} className="flex gap-3">
                  <span
                    aria-hidden="true"
                    className="shrink-0 w-7 h-7 rounded-full bg-blue-100 text-blue-800 dark:bg-blue-950/40 dark:text-blue-200 font-bold flex items-center justify-center text-sm"
                  >
                    {i + 1}
                  </span>
                  <span>{s}</span>
                </li>
              ))}
            </ol>

            <Alert className="mt-4 border-blue-400/60 bg-blue-50 dark:bg-blue-950/20">
              <Lightbulb className="h-5 w-5 text-blue-700 dark:text-blue-300" />
              <AlertTitle className="text-base">Tip</AlertTitle>
              <AlertDescription className="text-base leading-relaxed">
                Family Setup is a wonderful option for a parent who doesn&apos;t want a smartphone but would use a
                watch for calls and safety. Health data and workouts still work — but some third-party apps do
                not. The basics are all covered.
              </AlertDescription>
            </Alert>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}

/* ── Privacy card ─────────────────────────────────────────────── */

function PrivacyCard() {
  return (
    <section className="border-t border-border">
      <div className="container py-10 md:py-14">
        <div className="flex items-center gap-2 mb-3">
          <ShieldCheck className="w-6 h-6 text-emerald-700 dark:text-emerald-300" />
          <Badge variant="outline" className="text-sm border-emerald-400">
            Privacy + security
          </Badge>
        </div>
        <h2 className="text-2xl md:text-3xl font-semibold mb-3">Your data, your rules</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Card className="border-emerald-300/60">
            <CardContent className="p-5 space-y-3">
              <h3 className="text-lg font-semibold">What Apple can and cannot see</h3>
              <p className="text-base leading-relaxed">
                Health data (heart rate, ECG, sleep, steps, blood oxygen) is encrypted both on your devices and
                when it syncs through iCloud. Apple cannot read any of it — not even their own support team.
              </p>
              <p className="text-base leading-relaxed">
                If you ever want to review or download everything Apple has: iPhone → Settings → your name →
                Sign-In &amp; Security → Data &amp; Privacy → Request a copy of your data.
              </p>
            </CardContent>
          </Card>

          <Card className="border-emerald-300/60">
            <CardContent className="p-5 space-y-3">
              <h3 className="text-lg font-semibold">Two-factor authentication on Apple ID</h3>
              <p className="text-base leading-relaxed">
                Turn this on today if it isn&apos;t already. It stops a scammer from signing into your account
                even if they somehow get your password.
              </p>
              <p className="text-sm font-mono leading-relaxed text-muted-foreground">
                iPhone → Settings → your name → Sign-In &amp; Security → Two-Factor Authentication → On.
              </p>
            </CardContent>
          </Card>

          <Card className="border-emerald-300/60">
            <CardContent className="p-5 space-y-3">
              <h3 className="text-lg font-semibold">Removing the watch before selling or giving it away</h3>
              <p className="text-base leading-relaxed">
                Always unpair the watch from your iPhone first — this wipes the watch and removes Activation
                Lock, so the next owner can set it up fresh.
              </p>
              <p className="text-sm font-mono leading-relaxed text-muted-foreground">
                iPhone → Watch app → My Watch → All Watches → tap the (i) → Unpair Apple Watch → enter Apple ID
                password.
              </p>
            </CardContent>
          </Card>

          <Card className="border-emerald-300/60">
            <CardContent className="p-5 space-y-3">
              <h3 className="text-lg font-semibold">Erase All Content and Settings</h3>
              <p className="text-base leading-relaxed">
                If the watch is stuck or you want to start fresh without going through an iPhone, you can wipe it
                from the watch itself — this is safe as long as you also unpair from the iPhone afterward.
              </p>
              <p className="text-sm font-mono leading-relaxed text-muted-foreground">
                On the watch: Settings → General → Reset → Erase All Content and Settings → confirm.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}

/* ── Troubleshooting accordion ────────────────────────────────── */

function TroubleshootingSection() {
  return (
    <section className="border-t border-border bg-muted/30">
      <div className="container py-10 md:py-14">
        <div className="flex items-center gap-2 mb-3">
          <HelpCircle className="w-6 h-6 text-amber-700 dark:text-amber-300" />
          <Badge variant="outline" className="text-sm">
            Troubleshooting
          </Badge>
        </div>
        <h2 className="text-2xl md:text-3xl font-semibold mb-3">When something isn&apos;t working</h2>
        <p className="text-base md:text-lg text-muted-foreground mb-6 max-w-3xl leading-relaxed">
          Seven common problems and the quickest fix for each. When in doubt, restart — it solves most issues.
        </p>

        <div className="max-w-3xl">
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="wont-pair">
              <AccordionTrigger className="text-base md:text-lg text-left">
                The watch won&apos;t pair with my iPhone
              </AccordionTrigger>
              <AccordionContent className="text-base leading-relaxed space-y-2">
                <p>Try these in order:</p>
                <ul className="list-disc pl-6 space-y-1">
                  <li>Turn on Bluetooth AND Wi-Fi on the iPhone (both are needed).</li>
                  <li>Restart the iPhone: hold the side button + a volume button → Slide to power off.</li>
                  <li>Restart the watch: hold the flat side button for 10 seconds → swipe Power Off.</li>
                  <li>
                    Make sure the iPhone is running the latest iOS (Settings → General → Software Update).
                  </li>
                  <li>If still stuck: wipe the watch (Settings → General → Reset on the watch) and try again.</li>
                </ul>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="couldnt-complete">
              <AccordionTrigger className="text-base md:text-lg text-left">
                The watch says &quot;Setup couldn&apos;t complete&quot;
              </AccordionTrigger>
              <AccordionContent className="text-base leading-relaxed space-y-2">
                <p>This almost always means a weak internet connection during the Apple ID check.</p>
                <ul className="list-disc pl-6 space-y-1">
                  <li>Move closer to the Wi-Fi router (within 20 feet during setup).</li>
                  <li>If Wi-Fi is slow, switch the iPhone to cellular data for setup.</li>
                  <li>Tap Try Again on the watch, or Unpair and start fresh from step 3.</li>
                </ul>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="no-notifs">
              <AccordionTrigger className="text-base md:text-lg text-left">
                Notifications aren&apos;t coming through to the watch
              </AccordionTrigger>
              <AccordionContent className="text-base leading-relaxed space-y-2">
                <ul className="list-disc pl-6 space-y-1">
                  <li>
                    Make sure Silent Mode is OFF on the watch: swipe up → Control Center → tap the bell icon.
                  </li>
                  <li>
                    Make sure Do Not Disturb / Focus is OFF on both watch AND iPhone. Swipe down from the top-right of the
                    iPhone to check.
                  </li>
                  <li>iPhone must be unlocked OR screen asleep for notifications to forward. If you&apos;re
                    actively using the iPhone, they stay on the phone.</li>
                  <li>
                    iPhone → Watch app → Notifications → check each app is set to Mirror iPhone or Custom.
                  </li>
                </ul>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="false-fall">
              <AccordionTrigger className="text-base md:text-lg text-left">
                Fall Detection keeps triggering by accident
              </AccordionTrigger>
              <AccordionContent className="text-base leading-relaxed space-y-2">
                <p>Common causes:</p>
                <ul className="list-disc pl-6 space-y-1">
                  <li>Swinging arms hard during vigorous exercise, woodworking, or pickleball.</li>
                  <li>A loose band — the watch bounces against the wrist.</li>
                </ul>
                <p>Fixes:</p>
                <ul className="list-disc pl-6 space-y-1">
                  <li>Tighten the band one notch.</li>
                  <li>
                    iPhone → Watch app → Emergency SOS → Fall Detection → set to &quot;Only on during workouts&quot;
                    if daily false alarms are the issue.
                  </li>
                  <li>Always tap Cancel before the countdown ends — nothing is called out.</li>
                </ul>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="battery">
              <AccordionTrigger className="text-base md:text-lg text-left">
                Battery dies too fast
              </AccordionTrigger>
              <AccordionContent className="text-base leading-relaxed space-y-2">
                <p>Start with the biggest battery drains:</p>
                <ul className="list-disc pl-6 space-y-1">
                  <li>Turn Always-On Display OFF temporarily (iPhone → Watch app → Display → Always On).</li>
                  <li>Turn off Background App Refresh for apps you don&apos;t use (Watch app → General).</li>
                  <li>Lower brightness: swipe up on the watch → tap the sun icon → step it down one notch.</li>
                  <li>A healthy watch lasts 18 hours. If you&apos;re not getting 8, a Genius Bar check is worth it — batteries degrade after 2–3 years.</li>
                </ul>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="screen-wake">
              <AccordionTrigger className="text-base md:text-lg text-left">
                The screen won&apos;t wake up
              </AccordionTrigger>
              <AccordionContent className="text-base leading-relaxed space-y-2">
                <ul className="list-disc pl-6 space-y-1">
                  <li>Tap the screen firmly — Always-On can be too dim in bright sunlight.</li>
                  <li>Turn the Digital Crown — that wakes the watch even if the tap-to-wake setting is off.</li>
                  <li>Press the side button once.</li>
                  <li>Check the battery: on the charger? Red lightning bolt? If the battery hit zero, give it
                    15 minutes on the charger before testing.</li>
                  <li>
                    Force-restart if frozen: hold BOTH the Digital Crown AND the side button for 10 seconds until the
                    Apple logo appears.
                  </li>
                </ul>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="activity-rings">
              <AccordionTrigger className="text-base md:text-lg text-left">
                Activity Rings aren&apos;t tracking correctly
              </AccordionTrigger>
              <AccordionContent className="text-base leading-relaxed space-y-2">
                <ul className="list-disc pl-6 space-y-1">
                  <li>
                    Wrist detection must be ON and the watch must be snug — loose watches skip readings.
                  </li>
                  <li>
                    Make sure the right Wrist and Crown Orientation are set (Watch app → General → Watch
                    Orientation).
                  </li>
                  <li>
                    Check that Fitness Tracking is on: iPhone → Settings → Privacy &amp; Security → Motion &amp;
                    Fitness → Fitness Tracking (ON).
                  </li>
                  <li>
                    For walking workouts, start a Workout session (Workout app → Outdoor Walk) — it records more
                    accurately.
                  </li>
                </ul>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </div>
    </section>
  );
}

/* ── Main FAQ ─────────────────────────────────────────────────── */

function MainFAQ() {
  return (
    <section className="border-t border-border">
      <div className="container py-10 md:py-14">
        <h2 className="text-2xl md:text-3xl font-semibold mb-3">Frequently asked questions</h2>
        <p className="text-base md:text-lg text-muted-foreground mb-6 max-w-3xl leading-relaxed">
          Straight answers to the questions we hear most from new owners.
        </p>
        <div className="max-w-3xl">
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="without-iphone">
              <AccordionTrigger className="text-base md:text-lg text-left">
                Does Apple Watch work without an iPhone?
              </AccordionTrigger>
              <AccordionContent className="text-base leading-relaxed">
                Once it&apos;s set up, a cellular Apple Watch can make calls, send texts, use Maps, stream music,
                and call 911 all on its own — no iPhone within reach. A non-cellular (GPS-only) watch does most of
                the same things on Wi-Fi, but needs the iPhone nearby for phone calls and new text messages.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="android">
              <AccordionTrigger className="text-base md:text-lg text-left">
                Can I use an Apple Watch with an Android phone?
              </AccordionTrigger>
              <AccordionContent className="text-base leading-relaxed">
                No. The Apple Watch only pairs with iPhones. If you have an Android phone (Samsung, Google Pixel,
                etc.), a Samsung Galaxy Watch or a Google Pixel Watch is the equivalent. If you want an Apple Watch,
                you&apos;d need to switch to an iPhone — or use Family Setup with a family member&apos;s iPhone.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="how-long">
              <AccordionTrigger className="text-base md:text-lg text-left">
                How long should an Apple Watch last?
              </AccordionTrigger>
              <AccordionContent className="text-base leading-relaxed">
                Most models receive software updates for 5–6 years after release. The battery is the part that
                typically gives out first — expect 3–4 years of all-day use before you notice a big drop. Apple
                replaces batteries for around $100 at any Apple Store.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="pool">
              <AccordionTrigger className="text-base md:text-lg text-left">
                What if I drop it in the pool — or wear it in the shower?
              </AccordionTrigger>
              <AccordionContent className="text-base leading-relaxed">
                All Apple Watches since Series 2 are swim-proof (rated for water up to 50 meters). You can shower
                with it, swim laps, and walk in the rain. Avoid hot tubs, saunas, and high-pressure water
                (pressure washers) — the high heat and hard spray can damage the seals over time.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="doctor">
              <AccordionTrigger className="text-base md:text-lg text-left">
                Can my doctor see my heart data?
              </AccordionTrigger>
              <AccordionContent className="text-base leading-relaxed">
                Only if you share it. From the iPhone Health app: tap your photo (top right) → Health Records /
                Sharing → Share with Your Doctor or Export PDF. Many doctors can now import Apple Health data
                directly. For an urgent ECG reading, open Health → Heart → ECG → tap a reading → tap the share icon
                → email the PDF.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </div>
    </section>
  );
}

/* ── Related links ────────────────────────────────────────────── */

function RelatedLinks() {
  const links: Array<{ title: string; to: string; blurb: string; icon: LucideIcon }> = [
    {
      title: 'Medication Reminder Setup',
      to: '/tools/medication-reminder-setup',
      blurb: 'Set up wrist-taps for every dose. Works with Apple Watch and iPhone.',
      icon: Pill,
    },
    {
      title: 'Voice Assistant Setup',
      to: '/tools/voice-assistant-setup',
      blurb: 'Teach Siri to help hands-free — ideal once your watch is paired.',
      icon: Mic,
    },
    {
      title: 'My First Smartphone',
      to: '/tools/my-first-smartphone',
      blurb: 'Need help with the iPhone side first? Start here.',
      icon: Smartphone,
    },
    {
      title: 'All Health Tech guides',
      to: '/guides?category=health-tech',
      blurb: 'Deeper how-tos for heart rate, sleep, Medications, and more.',
      icon: HeartPulse,
    },
  ];

  return (
    <section className="border-t border-border bg-muted/30">
      <div className="container py-10 md:py-14">
        <h2 className="text-2xl md:text-3xl font-semibold mb-6">Related TekSure tools and guides</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              className="group rounded-xl border-2 border-border bg-card p-5 hover:border-slate-500 transition-all min-h-14 flex items-start gap-4"
            >
              <div className="p-3 rounded-lg bg-slate-200 text-slate-800 dark:bg-slate-800 dark:text-slate-100 shrink-0">
                <l.icon className="w-6 h-6" />
              </div>
              <div className="flex-1">
                <h3 className="text-lg md:text-xl font-semibold mb-1 group-hover:text-primary transition-colors">
                  {l.title}
                </h3>
                <p className="text-base text-muted-foreground leading-relaxed">{l.blurb}</p>
              </div>
              <ArrowRight className="w-5 h-5 text-muted-foreground mt-2 group-hover:translate-x-0.5 transition-transform shrink-0" />
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

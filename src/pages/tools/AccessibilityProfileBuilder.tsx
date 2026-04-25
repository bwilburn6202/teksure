import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { SEOHead } from '@/components/SEOHead';
import { PageBreadcrumb } from '@/components/PageBreadcrumb';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import {
  Accessibility,
  Eye,
  Ear,
  Hand,
  Volume2,
  MousePointer2,
  Sparkles,
  Smartphone,
  Apple,
  ArrowLeft,
  CheckCircle2,
  RotateCcw,
  ExternalLink,
  Info,
} from 'lucide-react';

// ─── Types ─────────────────────────────────────────────────────────────────
type YesNo = 'yes' | 'no';
type YesSometimesNo = 'yes' | 'sometimes' | 'no';

interface Answers {
  smallText: YesSometimesNo | null;
  contrastTrouble: YesNo | null;
  motionBothers: YesNo | null;
  hearingAid: YesNo | null;
  tapTargets: YesSometimesNo | null;
  preferAloud: YesNo | null;
  screenReader: YesNo | null;
}

type FontSize = 'normal' | 'large' | 'x-large';

interface Profile {
  fontSize: FontSize;
  highContrast: boolean;
  reduceMotion: boolean;
  captionsPreferred: boolean;
  largerTapTargets: boolean;
  textToSpeech: boolean;
  screenReaderOptimized: boolean;
}

const STORAGE_KEY = 'teksure-a11y-profile';

// ─── Question definitions ──────────────────────────────────────────────────
interface QuestionDef {
  id: keyof Answers;
  icon: typeof Eye;
  text: string;
  options: Array<{ value: 'yes' | 'no' | 'sometimes'; label: string }>;
}

const QUESTIONS: QuestionDef[] = [
  {
    id: 'smallText',
    icon: Eye,
    text: 'Do you wear reading glasses or struggle to see small text?',
    options: [
      { value: 'yes', label: 'Yes' },
      { value: 'sometimes', label: 'Sometimes' },
      { value: 'no', label: 'No' },
    ],
  },
  {
    id: 'contrastTrouble',
    icon: Eye,
    text: 'Do you have trouble reading white text on dark backgrounds (or vice versa)?',
    options: [
      { value: 'yes', label: 'Yes' },
      { value: 'no', label: 'No' },
    ],
  },
  {
    id: 'motionBothers',
    icon: Sparkles,
    text: 'Do bright flashing or moving animations bother you?',
    options: [
      { value: 'yes', label: 'Yes' },
      { value: 'no', label: 'No' },
    ],
  },
  {
    id: 'hearingAid',
    icon: Ear,
    text: 'Do you use a hearing aid?',
    options: [
      { value: 'yes', label: 'Yes' },
      { value: 'no', label: 'No' },
    ],
  },
  {
    id: 'tapTargets',
    icon: Hand,
    text: 'Do you have trouble with small tap targets (like tiny buttons)?',
    options: [
      { value: 'yes', label: 'Yes' },
      { value: 'sometimes', label: 'Sometimes' },
      { value: 'no', label: 'No' },
    ],
  },
  {
    id: 'preferAloud',
    icon: Volume2,
    text: 'Do you prefer to hear content read aloud?',
    options: [
      { value: 'yes', label: 'Yes' },
      { value: 'no', label: 'No' },
    ],
  },
  {
    id: 'screenReader',
    icon: MousePointer2,
    text: 'Do you use a screen reader like VoiceOver or TalkBack?',
    options: [
      { value: 'yes', label: 'Yes' },
      { value: 'no', label: 'No' },
    ],
  },
];

// ─── Profile generation from answers ──────────────────────────────────────
function buildProfile(a: Answers): Profile {
  // Font size
  let fontSize: FontSize = 'normal';
  if (a.smallText === 'yes') fontSize = 'x-large';
  else if (a.smallText === 'sometimes') fontSize = 'large';

  // If they use a screen reader, keep text at least large for sighted companions
  if (a.screenReader === 'yes' && fontSize === 'normal') fontSize = 'large';

  return {
    fontSize,
    highContrast: a.contrastTrouble === 'yes',
    reduceMotion: a.motionBothers === 'yes',
    captionsPreferred: a.hearingAid === 'yes',
    largerTapTargets: a.tapTargets === 'yes' || a.tapTargets === 'sometimes',
    textToSpeech: a.preferAloud === 'yes',
    screenReaderOptimized: a.screenReader === 'yes',
  };
}

// ─── Apply profile to the site ─────────────────────────────────────────────
function applyProfile(p: Profile) {
  const html = document.documentElement;
  const body = document.body;

  // Font size — use TekSure's existing font-size-* classes on html
  html.classList.remove('font-size-large', 'font-size-xl', 'font-size-xxl');
  if (p.fontSize === 'large') html.classList.add('font-size-large');
  else if (p.fontSize === 'x-large') html.classList.add('font-size-xl');

  // High contrast — use TekSure's existing high-contrast class on html
  if (p.highContrast) html.classList.add('high-contrast');
  else html.classList.remove('high-contrast');

  // User-facing semantic body classes (spec)
  body.classList.toggle('teksure-large-text', p.fontSize !== 'normal');
  body.classList.toggle('teksure-high-contrast', p.highContrast);
  body.classList.toggle('teksure-reduce-motion', p.reduceMotion);
  body.classList.toggle('teksure-large-targets', p.largerTapTargets);
  body.classList.toggle('teksure-tts', p.textToSpeech);
  body.classList.toggle('teksure-screen-reader', p.screenReaderOptimized);

  // Persist
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(p));
  } catch {
    /* storage disabled — best effort */
  }
}

// ─── Component ────────────────────────────────────────────────────────────
export default function AccessibilityProfileBuilder() {
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState<Answers>({
    smallText: null,
    contrastTrouble: null,
    motionBothers: null,
    hearingAid: null,
    tapTargets: null,
    preferAloud: null,
    screenReader: null,
  });
  const [done, setDone] = useState(false);
  const [profile, setProfile] = useState<Profile | null>(null);

  // On mount, load any saved profile so the preview reflects the current state
  useEffect(() => {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (raw) {
        const saved: Profile = JSON.parse(raw);
        setProfile(saved);
      }
    } catch {
      /* ignore */
    }
  }, []);

  const totalSteps = QUESTIONS.length;
  const currentQuestion = QUESTIONS[step];
  const progressPct = Math.round(((step + (done ? 1 : 0)) / (totalSteps + 1)) * 100);

  const selectAnswer = (value: 'yes' | 'no' | 'sometimes') => {
    const updated = { ...answers, [currentQuestion.id]: value } as Answers;
    setAnswers(updated);
    // auto-advance
    if (step < totalSteps - 1) {
      setStep(step + 1);
    } else {
      const p = buildProfile(updated);
      setProfile(p);
      applyProfile(p);
      setDone(true);
    }
  };

  const goBack = () => {
    if (done) {
      setDone(false);
      setStep(totalSteps - 1);
      return;
    }
    if (step > 0) setStep(step - 1);
  };

  const reset = () => {
    setStep(0);
    setAnswers({
      smallText: null,
      contrastTrouble: null,
      motionBothers: null,
      hearingAid: null,
      tapTargets: null,
      preferAloud: null,
      screenReader: null,
    });
    setDone(false);
  };

  const clearSaved = () => {
    try {
      localStorage.removeItem(STORAGE_KEY);
    } catch {
      /* ignore */
    }
    // Remove all applied classes
    const html = document.documentElement;
    html.classList.remove('font-size-large', 'font-size-xl', 'font-size-xxl', 'high-contrast');
    const body = document.body;
    [
      'teksure-large-text',
      'teksure-high-contrast',
      'teksure-reduce-motion',
      'teksure-large-targets',
      'teksure-tts',
      'teksure-screen-reader',
    ].forEach((c) => body.classList.remove(c));
    setProfile(null);
    reset();
  };

  const CurrentIcon = currentQuestion?.icon;
  const selectedValue = currentQuestion ? answers[currentQuestion.id] : null;

  return (
    <div className="min-h-screen flex flex-col bg-background teksure-a11y-quiz">
      <SEOHead
        title="Accessibility Profile Builder — Make TekSure Work For You | TekSure"
        description="Answer a few quick questions about your eyes, ears, and hands. We'll build a personalized accessibility profile, apply it to TekSure, and show you how to set up your phone to match."
        path="/tools/accessibility-profile-builder"
      />

      <main className="flex-1">
        <PageBreadcrumb
          items={[
            { label: 'Tools', href: '/tools' },
            { label: 'Accessibility Profile Builder' },
          ]}
        />

        {/* Hero — always larger text & high contrast within the quiz itself */}
        <section className="bg-gradient-to-b from-primary/10 to-background py-12 md:py-16">
          <div className="container mx-auto px-4 max-w-3xl text-center">
            <div className="inline-flex items-center gap-2 bg-primary/15 text-primary px-4 py-2 rounded-full text-base font-semibold mb-5">
              <Accessibility className="h-5 w-5" />
              Personalized setup
            </div>
            <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-5 leading-tight">
              Make TekSure (and Your Phone) Work for You
            </h1>
            <p className="text-xl md:text-2xl text-foreground/90 font-medium">
              Quick questions about your eyes, ears, and hands — we'll set everything up.
            </p>
          </div>
        </section>

        {/* Quiz / Results */}
        <section className="py-10 md:py-14">
          <div className="container mx-auto px-4 max-w-3xl">
            {/* Progress bar — accessible to screen readers */}
            <div
              className="mb-6"
              role="progressbar"
              aria-valuenow={progressPct}
              aria-valuemin={0}
              aria-valuemax={100}
              aria-label="Quiz progress"
            >
              <div className="flex items-center justify-between mb-2">
                <span className="text-base font-semibold text-foreground">
                  {done ? 'All done!' : `Question ${step + 1} of ${totalSteps}`}
                </span>
                <span className="text-base font-medium text-muted-foreground">{progressPct}%</span>
              </div>
              <div className="h-3 w-full rounded-full bg-muted overflow-hidden">
                <div
                  className="h-full bg-primary transition-all duration-300"
                  style={{ width: `${progressPct}%` }}
                />
              </div>
            </div>

            {/* ── Quiz (extra-high contrast + large text inside the quiz) ── */}
            {!done && currentQuestion && (
              <div
                className="bg-card border-2 border-foreground/15 rounded-2xl p-6 md:p-10 shadow-md quiz-card"
                style={{ fontSize: '1.125rem' }}
              >
                <div className="flex items-start gap-4 mb-6">
                  {CurrentIcon && (
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-primary/15 text-primary">
                      <CurrentIcon className="h-6 w-6" aria-hidden="true" />
                    </div>
                  )}
                  <h2 className="text-2xl md:text-3xl font-bold leading-snug">
                    {currentQuestion.text}
                  </h2>
                </div>

                <div
                  className="grid gap-3 sm:gap-4"
                  role="radiogroup"
                  aria-label={currentQuestion.text}
                >
                  {currentQuestion.options.map((opt) => {
                    const selected = selectedValue === opt.value;
                    return (
                      <button
                        key={opt.value}
                        type="button"
                        role="radio"
                        aria-checked={selected}
                        onClick={() => selectAnswer(opt.value)}
                        className={[
                          'w-full text-left px-5 py-5 rounded-xl border-2 transition-colors',
                          'text-xl font-semibold min-h-[3.5rem]',
                          'focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-primary/40',
                          selected
                            ? 'border-primary bg-primary/10 text-primary'
                            : 'border-foreground/20 bg-background hover:bg-muted hover:border-foreground/40',
                        ].join(' ')}
                      >
                        <span className="inline-flex items-center gap-3">
                          <span
                            className={[
                              'h-5 w-5 rounded-full border-2 shrink-0',
                              selected ? 'border-primary bg-primary' : 'border-foreground/40',
                            ].join(' ')}
                            aria-hidden="true"
                          />
                          {opt.label}
                        </span>
                      </button>
                    );
                  })}
                </div>

                <div className="flex justify-between items-center mt-8 pt-6 border-t border-foreground/10">
                  <Button
                    variant="outline"
                    onClick={goBack}
                    disabled={step === 0}
                    className="gap-2 text-base h-12 px-5"
                  >
                    <ArrowLeft className="h-5 w-5" /> Back
                  </Button>
                  <span className="text-sm text-muted-foreground hidden sm:inline">
                    Tap an answer to continue
                  </span>
                  <div className="w-[92px]" aria-hidden="true" />
                </div>
              </div>
            )}

            {/* ── Results ────────────────────────────────────────────── */}
            {done && profile && (
              <div className="space-y-6">
                {/* Confirmation + Summary */}
                <div className="bg-card border-2 border-primary/30 rounded-2xl p-6 md:p-8 shadow-md">
                  <div className="flex items-start gap-3 mb-4">
                    <CheckCircle2 className="h-8 w-8 text-green-600 shrink-0" aria-hidden="true" />
                    <div>
                      <h2 className="text-2xl md:text-3xl font-bold mb-1">
                        Your profile is saved and applied
                      </h2>
                      <p className="text-base text-muted-foreground">
                        TekSure will remember these settings on this device. Look around — things
                        should already feel more comfortable.
                      </p>
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-3 mt-5">
                    <ProfileRow label="Font size" value={fontSizeLabel(profile.fontSize)} />
                    <ProfileRow label="High contrast" value={profile.highContrast ? 'On' : 'Off'} />
                    <ProfileRow label="Reduce motion" value={profile.reduceMotion ? 'On' : 'Off'} />
                    <ProfileRow
                      label="Captions preferred"
                      value={profile.captionsPreferred ? 'Yes' : 'No'}
                    />
                    <ProfileRow
                      label="Larger tap targets"
                      value={profile.largerTapTargets ? 'On' : 'Off'}
                    />
                    <ProfileRow
                      label="Text-to-speech"
                      value={profile.textToSpeech ? 'Available' : 'Off'}
                    />
                    <ProfileRow
                      label="Screen reader optimized"
                      value={profile.screenReaderOptimized ? 'Yes' : 'No'}
                    />
                  </div>
                </div>

                {/* Live preview */}
                <div className="bg-card border rounded-2xl p-6 md:p-8 shadow-sm">
                  <h3 className="text-xl md:text-2xl font-bold mb-2 flex items-center gap-2">
                    <Sparkles className="h-5 w-5 text-primary" />
                    This is what it looks like now
                  </h3>
                  <p className="text-muted-foreground mb-5">
                    Here's a little sample of the TekSure look with your settings applied.
                  </p>
                  <div className="rounded-xl border-2 border-dashed border-foreground/20 p-5 space-y-4">
                    <h4 className="font-bold text-foreground">Hello from TekSure</h4>
                    <p className="text-foreground">
                      This paragraph uses your chosen text size. If it feels small, rerun the quiz
                      and pick "yes" for glasses. If it feels too big, you can always adjust.
                    </p>
                    <div className="flex flex-wrap gap-3">
                      <Button size="lg">Primary button</Button>
                      <Button size="lg" variant="outline">
                        Secondary button
                      </Button>
                      <Badge variant="secondary">Sample badge</Badge>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      Smaller supporting text looks like this.
                    </p>
                  </div>
                </div>

                {/* Apply to phone */}
                <div className="bg-primary/5 border-2 border-primary/20 rounded-2xl p-6 md:p-8">
                  <h3 className="text-xl md:text-2xl font-bold mb-2 flex items-center gap-2">
                    <Smartphone className="h-6 w-6 text-primary" />
                    Apply to my phone too
                  </h3>
                  <p className="text-muted-foreground mb-5">
                    Your phone has its own accessibility settings. Here's how to match them to your
                    TekSure profile.
                  </p>

                  <div className="grid md:grid-cols-2 gap-5">
                    <PhoneCard
                      platform="iPhone / iPad"
                      icon={<Apple className="h-5 w-5" />}
                      linkLabel="Open Accessibility Settings"
                      // Opening Settings on iOS requires the device itself; link shows the path.
                      href="https://support.apple.com/guide/iphone/accessibility-features-iph3e2e4367/ios"
                      steps={iphoneSteps(profile)}
                    />
                    <PhoneCard
                      platform="Android"
                      icon={<Smartphone className="h-5 w-5" />}
                      linkLabel="Open Android Accessibility Help"
                      href="https://support.google.com/accessibility/android/answer/6006564"
                      steps={androidSteps(profile)}
                    />
                  </div>

                  <p className="mt-5 text-sm text-muted-foreground flex items-start gap-2">
                    <Info className="h-4 w-4 mt-0.5 shrink-0" />
                    These open help pages in a new tab — the actual toggles live inside the
                    Settings app on your phone.
                  </p>
                </div>

                {/* Actions */}
                <div className="flex flex-wrap gap-3 justify-between items-center pt-2">
                  <div className="flex flex-wrap gap-3">
                    <Button onClick={reset} variant="outline" className="gap-2 h-12 text-base">
                      <RotateCcw className="h-4 w-4" /> Retake the quiz
                    </Button>
                    <Button onClick={clearSaved} variant="ghost" className="h-12 text-base">
                      Clear my profile
                    </Button>
                  </div>
                  <Button asChild size="lg" className="h-12 text-base">
                    <Link to="/accessibility">Visit the Accessibility Hub</Link>
                  </Button>
                </div>
              </div>
            )}
          </div>
        </section>
      </main>

    </div>
  );
}

// ─── Small helpers & subcomponents ─────────────────────────────────────────

function fontSizeLabel(f: FontSize): string {
  if (f === 'large') return 'Large';
  if (f === 'x-large') return 'X-Large';
  return 'Normal';
}

function ProfileRow({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex items-center justify-between bg-muted/40 rounded-lg px-4 py-3 border border-border">
      <span className="font-medium">{label}</span>
      <span className="text-foreground font-semibold">{value}</span>
    </div>
  );
}

function PhoneCard({
  platform,
  icon,
  steps,
  linkLabel,
  href,
}: {
  platform: string;
  icon: React.ReactNode;
  steps: string[];
  linkLabel: string;
  href: string;
}) {
  return (
    <div className="bg-card border rounded-xl p-5">
      <div className="flex items-center gap-2 mb-3">
        {icon}
        <h4 className="text-lg font-bold">{platform}</h4>
      </div>
      <ol className="space-y-2 mb-4 list-decimal list-inside">
        {steps.map((s, i) => (
          <li key={i} className="text-foreground leading-relaxed">
            {s}
          </li>
        ))}
      </ol>
      <Button asChild variant="outline" size="sm" className="gap-2">
        <a href={href} target="_blank" rel="noopener noreferrer">
          {linkLabel}
          <ExternalLink className="h-3.5 w-3.5" />
        </a>
      </Button>
    </div>
  );
}

function iphoneSteps(p: Profile): string[] {
  const steps: string[] = ['Open Settings → Accessibility'];
  if (p.fontSize !== 'normal') {
    steps.push(
      `Display & Text Size → Larger Text → turn on and drag slider to ${
        p.fontSize === 'x-large' ? 'the largest size' : 'a comfortable larger size'
      }`,
    );
  }
  if (p.highContrast) {
    steps.push('Display & Text Size → Increase Contrast → On');
    steps.push('Display & Text Size → Bold Text → On');
  }
  if (p.reduceMotion) steps.push('Motion → Reduce Motion → On');
  if (p.captionsPreferred) {
    steps.push('Hearing Devices → pair your hearing aid (Made for iPhone)');
    steps.push('Subtitles & Captioning → Closed Captions + SDH → On');
    steps.push('Live Captions → On');
  }
  if (p.largerTapTargets) steps.push('Touch → AssistiveTouch (optional) + enable Haptic Touch delay');
  if (p.textToSpeech) steps.push('Spoken Content → Speak Screen → On (swipe down with two fingers to read)');
  if (p.screenReaderOptimized) steps.push('VoiceOver → On (or triple-click the side button)');
  if (steps.length === 1) steps.push('Explore settings that suit you — no changes required based on your answers.');
  return steps;
}

function androidSteps(p: Profile): string[] {
  const steps: string[] = ['Open Settings → Accessibility'];
  if (p.fontSize !== 'normal') {
    steps.push(
      `Display size and text → Font size → ${
        p.fontSize === 'x-large' ? 'drag to maximum' : 'drag one or two steps larger'
      }`,
    );
    steps.push('Display size and text → Display size → Larger');
  }
  if (p.highContrast) {
    steps.push('Display size and text → High contrast text → On');
    steps.push('Color and motion → Color correction (if needed)');
  }
  if (p.reduceMotion) steps.push('Color and motion → Remove animations → On');
  if (p.captionsPreferred) {
    steps.push('Hearing → Hearing aids → pair your device');
    steps.push('Hearing → Live Caption → On');
    steps.push('Hearing → Caption preferences → customize size & style');
  }
  if (p.largerTapTargets) steps.push('Interaction controls → Touch & hold delay → Long');
  if (p.textToSpeech) steps.push('Text-to-speech output → set voice + tap Select to Speak');
  if (p.screenReaderOptimized) steps.push('TalkBack → On (or hold both volume keys for 3 seconds)');
  if (steps.length === 1) steps.push('Explore settings that suit you — no changes required based on your answers.');
  return steps;
}

import { useEffect, useMemo, useRef, useState, useCallback } from 'react';
import { SEOHead } from '@/components/SEOHead';
import { PageBreadcrumb } from '@/components/PageBreadcrumb';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Switch } from '@/components/ui/switch';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from '@/components/ui/dialog';
import { useToast } from '@/hooks/use-toast';
import {
  Leaf,
  Eye,
  Armchair,
  Droplets,
  Sunset,
  Timer,
  Volume2,
  VolumeX,
  Sparkles,
  HeartPulse,
  Clock,
  Settings as SettingsIcon,
  Waves,
  ChevronRight,
} from 'lucide-react';

// ─────────────────────────────────────────────────────────────────────────────
// Types & constants
// ─────────────────────────────────────────────────────────────────────────────

type Intensity = 'gentle' | 'normal' | 'strict';

type ReminderKey = 'eyes' | 'stretch' | 'posture' | 'hydration' | 'sunset';

type Settings = {
  enabled: Record<ReminderKey, boolean>;
  sound: boolean;
  intensity: Intensity;
};

type Stretch = {
  name: string;
  icon: string;
  instruction: string;
  duration: string;
};

const STRETCHES: Stretch[] = [
  {
    name: 'Neck rolls',
    icon: '',
    instruction:
      'Sit up tall. Slowly lower your chin to your chest, then gently roll your head in a half-circle to the right, back to center, then to the left. Repeat 3 times. Never roll the full circle backward — it strains the neck.',
    duration: '30 seconds',
  },
  {
    name: 'Shoulder blade squeeze',
    icon: '',
    instruction:
      'Sit or stand with arms at your sides. Squeeze your shoulder blades together as if trying to pinch a pencil between them. Hold for 5 seconds, then release. Repeat 5 times.',
    duration: '45 seconds',
  },
  {
    name: 'Wrist stretch',
    icon: '',
    instruction:
      'Extend your right arm in front of you, palm down. With your left hand, gently pull your fingers back toward your body until you feel a gentle stretch. Hold 15 seconds. Switch hands.',
    duration: '45 seconds',
  },
  {
    name: 'Seated back stretch',
    icon: '',
    instruction:
      'Sit tall in your chair. Place your right hand on the outside of your left knee and gently twist your upper body to the left. Hold for 10 seconds. Slowly return to center and switch sides.',
    duration: '30 seconds',
  },
  {
    name: 'Eye palming',
    icon: '',
    instruction:
      'Rub your palms together briskly until warm. Gently cup them over your closed eyes — don\'t press on the eyeballs. Breathe slowly for 20 seconds. Feel the warmth and dark relax your eyes.',
    duration: '30 seconds',
  },
];

const DEFAULT_SETTINGS: Settings = {
  enabled: { eyes: true, stretch: true, posture: true, hydration: true, sunset: true },
  sound: false,
  intensity: 'gentle',
};

const STORAGE_KEY = 'teksure-break-reminders';
const SCREEN_TIME_KEY = 'teksure-break-screen-time';

// Intensity multipliers (1.0 = strict default, gentle is longer, strict is shorter)
const INTENSITY_MULT: Record<Intensity, number> = {
  gentle: 1.25,
  normal: 1.0,
  strict: 0.75,
};

// Base intervals in minutes
const BASE_INTERVALS = {
  eyes: 20,
  stretch: 50,
  posture: 30,
  hydration: 60,
};

// ─────────────────────────────────────────────────────────────────────────────
// Storage helpers
// ─────────────────────────────────────────────────────────────────────────────

function loadSettings(): Settings {
  if (typeof window === 'undefined') return DEFAULT_SETTINGS;
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return DEFAULT_SETTINGS;
    const parsed = JSON.parse(raw);
    return {
      enabled: { ...DEFAULT_SETTINGS.enabled, ...(parsed.enabled || {}) },
      sound: typeof parsed.sound === 'boolean' ? parsed.sound : DEFAULT_SETTINGS.sound,
      intensity: parsed.intensity || DEFAULT_SETTINGS.intensity,
    };
  } catch {
    return DEFAULT_SETTINGS;
  }
}

function saveSettings(s: Settings) {
  if (typeof window === 'undefined') return;
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(s));
  } catch {
    /* no-op */
  }
}

type ScreenTimeRecord = { date: string; seconds: number };

function loadScreenTime(): ScreenTimeRecord {
  if (typeof window === 'undefined') return { date: todayISO(), seconds: 0 };
  try {
    const raw = localStorage.getItem(SCREEN_TIME_KEY);
    if (!raw) return { date: todayISO(), seconds: 0 };
    const parsed = JSON.parse(raw) as ScreenTimeRecord;
    if (parsed.date !== todayISO()) return { date: todayISO(), seconds: 0 };
    return parsed;
  } catch {
    return { date: todayISO(), seconds: 0 };
  }
}

function saveScreenTime(r: ScreenTimeRecord) {
  if (typeof window === 'undefined') return;
  try {
    localStorage.setItem(SCREEN_TIME_KEY, JSON.stringify(r));
  } catch {
    /* no-op */
  }
}

function todayISO(): string {
  const d = new Date();
  return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}-${String(d.getDate()).padStart(2, '0')}`;
}

function formatDuration(totalSeconds: number): string {
  const h = Math.floor(totalSeconds / 3600);
  const m = Math.floor((totalSeconds % 3600) / 60);
  const s = totalSeconds % 60;
  if (h > 0) return `${h}h ${m}m`;
  if (m > 0) return `${m}m ${s}s`;
  return `${s}s`;
}

function formatMMSS(totalSeconds: number): string {
  const m = Math.floor(Math.max(0, totalSeconds) / 60);
  const s = Math.max(0, totalSeconds) % 60;
  return `${String(m).padStart(2, '0')}:${String(s).padStart(2, '0')}`;
}

// ─────────────────────────────────────────────────────────────────────────────
// Sound — gentle synthesized bell using Web Audio API
// ─────────────────────────────────────────────────────────────────────────────

function useGentleBell(enabled: boolean) {
  const ctxRef = useRef<AudioContext | null>(null);
  const play = useCallback(() => {
    if (!enabled || typeof window === 'undefined') return;
    try {
      if (!ctxRef.current) {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        const AC: typeof AudioContext = (window as any).AudioContext || (window as any).webkitAudioContext;
        if (!AC) return;
        ctxRef.current = new AC();
      }
      const ctx = ctxRef.current;
      if (ctx.state === 'suspended') ctx.resume();
      const now = ctx.currentTime;
      // A soft, bell-like chime: two sine tones that decay
      const frequencies = [523.25, 783.99]; // C5 + G5 (a soft chord)
      frequencies.forEach((freq, i) => {
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        osc.type = 'sine';
        osc.frequency.value = freq;
        gain.gain.setValueAtTime(0, now + i * 0.06);
        gain.gain.linearRampToValueAtTime(0.18, now + i * 0.06 + 0.03);
        gain.gain.exponentialRampToValueAtTime(0.0001, now + i * 0.06 + 1.6);
        osc.connect(gain).connect(ctx.destination);
        osc.start(now + i * 0.06);
        osc.stop(now + i * 0.06 + 1.7);
      });
    } catch {
      /* ignore audio errors */
    }
  }, [enabled]);
  return play;
}

// ─────────────────────────────────────────────────────────────────────────────
// Sunset calculation — approximate, no geolocation required
// Uses a simple seasonal swing around 6:00pm
// ─────────────────────────────────────────────────────────────────────────────

function approximateSunsetHour(date = new Date()): number {
  // Day of year
  const start = new Date(date.getFullYear(), 0, 0);
  const diff = date.getTime() - start.getTime();
  const dayOfYear = Math.floor(diff / (1000 * 60 * 60 * 24));
  // Swing ±1.5 hours around 18.0 across the year (peaks near summer solstice)
  const angle = ((dayOfYear - 80) / 365) * 2 * Math.PI;
  return 18.0 + 1.5 * Math.sin(angle);
}

function isPastSunset(date = new Date()): boolean {
  const sunsetHour = approximateSunsetHour(date);
  const current = date.getHours() + date.getMinutes() / 60;
  return current >= sunsetHour && current < 23.5;
}

// ─────────────────────────────────────────────────────────────────────────────
// Main component
// ─────────────────────────────────────────────────────────────────────────────

type ActiveModal = {
  kind: ReminderKey;
  stretch?: Stretch;
} | null;

export default function TechBreakReminder() {
  const [settings, setSettings] = useState<Settings>(DEFAULT_SETTINGS);
  const [loaded, setLoaded] = useState(false);

  // Next-due timestamps (ms since epoch). Drives the visible countdowns.
  const [nextEyes, setNextEyes] = useState<number>(0);
  const [nextStretch, setNextStretch] = useState<number>(0);
  const [nextPosture, setNextPosture] = useState<number>(0);
  const [nextHydration, setNextHydration] = useState<number>(0);

  // 20-20-20 focus countdown — when non-null we're in the 20s "look away" phase.
  const [focusPhaseRemaining, setFocusPhaseRemaining] = useState<number | null>(null);

  // Modal state for "bigger" reminders
  const [modal, setModal] = useState<ActiveModal>(null);

  // Track which reminder toasts were fired but not dismissed, for escalation
  const firedAtRef = useRef<Partial<Record<ReminderKey, number>>>({});
  const dismissedAtRef = useRef<Partial<Record<ReminderKey, number>>>({});

  // Screen time
  const [screenTime, setScreenTime] = useState<number>(0);
  const lastTickRef = useRef<number>(Date.now());
  const visibleRef = useRef<boolean>(true);

  // Now tick (drives countdowns + checks)
  const [now, setNow] = useState<number>(Date.now());

  // Sunset shown this session
  const [sunsetShown, setSunsetShown] = useState<boolean>(false);

  const { toast } = useToast();
  const playBell = useGentleBell(settings.sound);

  // ── Load settings + screen time once ──
  useEffect(() => {
    const s = loadSettings();
    setSettings(s);
    const rec = loadScreenTime();
    setScreenTime(rec.seconds);
    setLoaded(true);
    // Seed next timers based on intensity
    const mult = INTENSITY_MULT[s.intensity];
    const t = Date.now();
    setNextEyes(t + BASE_INTERVALS.eyes * 60_000 * mult);
    setNextStretch(t + BASE_INTERVALS.stretch * 60_000 * mult);
    setNextPosture(t + BASE_INTERVALS.posture * 60_000 * mult);
    setNextHydration(t + BASE_INTERVALS.hydration * 60_000 * mult);
  }, []);

  // ── Persist settings on change ──
  useEffect(() => {
    if (!loaded) return;
    saveSettings(settings);
  }, [settings, loaded]);

  // ── Visibility tracking for screen-time ──
  useEffect(() => {
    const onVisibility = () => {
      visibleRef.current = document.visibilityState === 'visible';
      if (visibleRef.current) lastTickRef.current = Date.now();
    };
    document.addEventListener('visibilitychange', onVisibility);
    return () => document.removeEventListener('visibilitychange', onVisibility);
  }, []);

  // ── Main 1-second tick ──
  useEffect(() => {
    const id = setInterval(() => {
      const t = Date.now();
      setNow(t);

      // Update screen time only while visible
      if (visibleRef.current) {
        setScreenTime((prev) => {
          const next = prev + 1;
          saveScreenTime({ date: todayISO(), seconds: next });
          return next;
        });
      }

      // Focus phase (the 20-second "look away")
      setFocusPhaseRemaining((r) => {
        if (r === null) return r;
        if (r <= 1) {
          // Finished the 20-second look-away
          playBell();
          return null;
        }
        return r - 1;
      });
    }, 1000);
    return () => clearInterval(id);
  }, [playBell]);

  // ── Reminder scheduler (checks every tick) ──
  useEffect(() => {
    if (!loaded) return;
    const mult = INTENSITY_MULT[settings.intensity];
    const t = now;

    const fire = (k: ReminderKey, stretch?: Stretch) => {
      firedAtRef.current[k] = t;
      playBell();
      const copy = REMINDER_COPY[k];
      if (k === 'stretch' && stretch) {
        toast({
          title: `${stretch.icon}  Stretch break — ${stretch.name}`,
          description: stretch.instruction,
        });
      } else {
        toast({
          title: copy.toastTitle,
          description: copy.toastBody,
        });
      }
    };

    // EYES — 20-20-20
    if (settings.enabled.eyes && nextEyes > 0 && t >= nextEyes && focusPhaseRemaining === null) {
      fire('eyes');
      // Begin the 20-second focus phase
      setFocusPhaseRemaining(20);
      setNextEyes(t + BASE_INTERVALS.eyes * 60_000 * mult);
    }

    // STRETCH
    if (settings.enabled.stretch && nextStretch > 0 && t >= nextStretch) {
      const idx = Math.floor((t / 60_000) % STRETCHES.length);
      const stretch = STRETCHES[idx];
      fire('stretch', stretch);
      setNextStretch(t + BASE_INTERVALS.stretch * 60_000 * mult);
    }

    // POSTURE
    if (settings.enabled.posture && nextPosture > 0 && t >= nextPosture) {
      fire('posture');
      setNextPosture(t + BASE_INTERVALS.posture * 60_000 * mult);
    }

    // HYDRATION
    if (settings.enabled.hydration && nextHydration > 0 && t >= nextHydration) {
      fire('hydration');
      setNextHydration(t + BASE_INTERVALS.hydration * 60_000 * mult);
    }

    // SUNSET — once per session, after sunset
    if (settings.enabled.sunset && !sunsetShown && isPastSunset(new Date(t))) {
      setSunsetShown(true);
      playBell();
      toast({
        title: '  The sun has set',
        description:
          'Consider dimming your screen, turning on Night Shift / blue-light filter, or wrapping up for the evening. Good sleep starts with lower light.',
      });
    }

    // ESCALATION — if toast fired but user hasn't interacted for 3 minutes,
    // open a bigger modal so they notice.
    (Object.keys(firedAtRef.current) as ReminderKey[]).forEach((k) => {
      const firedAt = firedAtRef.current[k];
      const dismissedAt = dismissedAtRef.current[k] ?? 0;
      if (firedAt && firedAt > dismissedAt && t - firedAt > 3 * 60_000 && !modal) {
        // Open a modal — use the most recent stretch if that's the escalation
        let stretch: Stretch | undefined;
        if (k === 'stretch') {
          const idx = Math.floor((firedAt / 60_000) % STRETCHES.length);
          stretch = STRETCHES[idx];
        }
        setModal({ kind: k, stretch });
        dismissedAtRef.current[k] = t; // mark handled for escalation purposes
      }
    });
  }, [
    now,
    loaded,
    settings.enabled.eyes,
    settings.enabled.stretch,
    settings.enabled.posture,
    settings.enabled.hydration,
    settings.enabled.sunset,
    settings.intensity,
    nextEyes,
    nextStretch,
    nextPosture,
    nextHydration,
    focusPhaseRemaining,
    modal,
    sunsetShown,
    playBell,
    toast,
  ]);

  // ── Derived countdown seconds ──
  const eyesIn = Math.max(0, Math.floor((nextEyes - now) / 1000));
  const stretchIn = Math.max(0, Math.floor((nextStretch - now) / 1000));
  const postureIn = Math.max(0, Math.floor((nextPosture - now) / 1000));
  const hydrationIn = Math.max(0, Math.floor((nextHydration - now) / 1000));

  const sunsetHour = useMemo(() => approximateSunsetHour(new Date(now)), [now]);
  const sunsetLabel = useMemo(() => {
    const h = Math.floor(sunsetHour);
    const m = Math.round((sunsetHour - h) * 60);
    const displayH = ((h + 11) % 12) + 1;
    const ampm = h >= 12 ? 'PM' : 'AM';
    return `${displayH}:${String(m).padStart(2, '0')} ${ampm}`;
  }, [sunsetHour]);

  // ── Handlers ──
  const toggleReminder = (k: ReminderKey) =>
    setSettings((s) => ({ ...s, enabled: { ...s.enabled, [k]: !s.enabled[k] } }));
  const setIntensity = (intensity: Intensity) => setSettings((s) => ({ ...s, intensity }));
  const toggleSound = () => setSettings((s) => ({ ...s, sound: !s.sound }));
  const resetAllTimers = () => {
    const mult = INTENSITY_MULT[settings.intensity];
    const t = Date.now();
    setNextEyes(t + BASE_INTERVALS.eyes * 60_000 * mult);
    setNextStretch(t + BASE_INTERVALS.stretch * 60_000 * mult);
    setNextPosture(t + BASE_INTERVALS.posture * 60_000 * mult);
    setNextHydration(t + BASE_INTERVALS.hydration * 60_000 * mult);
    setFocusPhaseRemaining(null);
    toast({ title: 'Timers reset', description: 'Fresh countdowns, ready when you are.' });
  };
  const skipNext = (k: ReminderKey) => {
    const mult = INTENSITY_MULT[settings.intensity];
    const t = Date.now();
    if (k === 'eyes') setNextEyes(t + BASE_INTERVALS.eyes * 60_000 * mult);
    if (k === 'stretch') setNextStretch(t + BASE_INTERVALS.stretch * 60_000 * mult);
    if (k === 'posture') setNextPosture(t + BASE_INTERVALS.posture * 60_000 * mult);
    if (k === 'hydration') setNextHydration(t + BASE_INTERVALS.hydration * 60_000 * mult);
  };

  const dismissModal = () => {
    if (modal) dismissedAtRef.current[modal.kind] = Date.now();
    setModal(null);
  };

  return (
    <>
      <SEOHead
        title="Tech Break Reminder — Healthier Screen Habits | TekSure"
        description="Built-in breaks, better posture, healthier habits. Gentle 20-20-20 eye reminders, stretch breaks, posture checks, hydration, and sunset wind-down."
        path="/tools/tech-break-reminder"
      />
      <main className="min-h-screen bg-background text-foreground">
        <div className="container pt-4">
          <PageBreadcrumb segments={[{ label: 'Tools', href: '/tools' }, { label: 'Tech Break Reminder' }]} />
        </div>

        {/* Hero */}
        <section className="border-b border-border bg-background">
          <div className="container py-12 md:py-16 max-w-3xl">
            <div className="flex items-center gap-3 mb-4">
              <div className="h-14 w-14 rounded-2xl bg-emerald-100 dark:bg-emerald-950/40 flex items-center justify-center flex-shrink-0">
                <Leaf className="h-7 w-7 text-emerald-700 dark:text-emerald-300" aria-hidden="true" />
              </div>
              <Badge variant="secondary" className="bg-emerald-100 text-emerald-800 hover:bg-emerald-100 border-emerald-200">
                Wellness
              </Badge>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4 text-emerald-900 dark:text-emerald-100">
              Your Eyes (and Brain) Will Thank You
            </h1>
            <p className="text-xl md:text-2xl text-emerald-800/80 dark:text-emerald-200/80 leading-relaxed">
              Built-in breaks, better posture, healthier habits.
            </p>
          </div>
        </section>

        <div className="container py-8 pb-24 max-w-4xl space-y-8">
          {/* Focus phase banner */}
          {focusPhaseRemaining !== null && (
            <Card className="border-emerald-300 bg-emerald-50 dark:bg-emerald-950/30 shadow-sm">
              <CardContent className="pt-6 text-center space-y-3">
                <div className="flex items-center justify-center gap-2 text-emerald-800 dark:text-emerald-200">
                  <Eye className="h-6 w-6" aria-hidden="true" />
                  <span className="text-lg font-semibold">Look at something 20 feet away</span>
                </div>
                <div className="text-5xl md:text-6xl font-bold tabular-nums text-emerald-700 dark:text-emerald-300">
                  {focusPhaseRemaining}s
                </div>
                <p className="text-sm text-emerald-800/80 dark:text-emerald-200/80">
                  A window, a doorway, or anything across the room. We'll chime when you can look back.
                </p>
              </CardContent>
            </Card>
          )}

          {/* Active timers dashboard */}
          <section>
            <h2 className="text-2xl font-bold mb-4 text-emerald-900 dark:text-emerald-100 flex items-center gap-2">
              <Timer className="h-6 w-6" aria-hidden="true" /> Active reminders
            </h2>
            <div className="grid md:grid-cols-2 gap-4">
              <TimerCard
                icon={<Eye className="h-6 w-6" />}
                title="20-20-20 rule"
                subtitle="Rest your eyes"
                enabled={settings.enabled.eyes}
                seconds={eyesIn}
                onToggle={() => toggleReminder('eyes')}
                onSkip={() => skipNext('eyes')}
                accent="emerald"
              />
              <TimerCard
                icon={<HeartPulse className="h-6 w-6" />}
                title="Stretch break"
                subtitle="5 gentle stretches, on rotation"
                enabled={settings.enabled.stretch}
                seconds={stretchIn}
                onToggle={() => toggleReminder('stretch')}
                onSkip={() => skipNext('stretch')}
                accent="green"
              />
              <TimerCard
                icon={<Armchair className="h-6 w-6" />}
                title="Posture check"
                subtitle="Feet flat, back supported, screen at eye level"
                enabled={settings.enabled.posture}
                seconds={postureIn}
                onToggle={() => toggleReminder('posture')}
                onSkip={() => skipNext('posture')}
                accent="teal"
              />
              <TimerCard
                icon={<Droplets className="h-6 w-6" />}
                title="Hydration"
                subtitle="A glass of water, every hour"
                enabled={settings.enabled.hydration}
                seconds={hydrationIn}
                onToggle={() => toggleReminder('hydration')}
                onSkip={() => skipNext('hydration')}
                accent="sky"
              />
            </div>
          </section>

          {/* Sunset card */}
          <Card className="border-amber-200 bg-amber-50/60 dark:bg-amber-950/20 dark:border-amber-900/40">
            <CardContent className="pt-6 flex items-start gap-4">
              <div className="h-12 w-12 rounded-xl bg-amber-100 dark:bg-amber-900/40 flex items-center justify-center flex-shrink-0">
                <Sunset className="h-6 w-6 text-amber-700 dark:text-amber-300" aria-hidden="true" />
              </div>
              <div className="flex-1">
                <div className="flex items-center justify-between gap-3 flex-wrap">
                  <h3 className="font-semibold text-lg text-amber-900 dark:text-amber-100">Sunset wind-down</h3>
                  <Switch
                    checked={settings.enabled.sunset}
                    onCheckedChange={() => toggleReminder('sunset')}
                    aria-label="Toggle sunset wind-down"
                  />
                </div>
                <p className="text-sm text-amber-900/80 dark:text-amber-100/80 mt-1">
                  Around sunset (~{sunsetLabel} today), we'll suggest dimming your screen and reducing blue light. Your sleep quality will thank you.
                </p>
                {isPastSunset(new Date(now)) && (
                  <p className="mt-2 text-sm font-medium text-amber-800 dark:text-amber-200 flex items-center gap-1">
                    <Sparkles className="h-4 w-4" aria-hidden="true" /> The sun has set. Consider Night Shift or Night Light now.
                  </p>
                )}
              </div>
            </CardContent>
          </Card>

          {/* Today's screen time */}
          <Card className="border-emerald-200 dark:border-emerald-900/40">
            <CardHeader>
              <CardTitle className="text-lg flex items-center gap-2 text-emerald-900 dark:text-emerald-100">
                <Clock className="h-5 w-5" aria-hidden="true" /> Today on TekSure
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex items-baseline gap-3 flex-wrap">
                <span className="text-4xl md:text-5xl font-bold tabular-nums text-emerald-700 dark:text-emerald-300">
                  {formatDuration(screenTime)}
                </span>
                <span className="text-sm text-muted-foreground">active on this site since midnight</span>
              </div>
              <p className="text-sm text-muted-foreground mt-3">
                We count only time you've had the page visible — switching tabs or minimizing the window pauses the clock.
              </p>
            </CardContent>
          </Card>

          {/* Settings */}
          <Card>
            <CardHeader>
              <CardTitle className="text-lg flex items-center gap-2">
                <SettingsIcon className="h-5 w-5" aria-hidden="true" /> Settings
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              {/* Sound */}
              <div className="flex items-center justify-between gap-4 flex-wrap">
                <div className="flex items-center gap-3">
                  {settings.sound ? (
                    <Volume2 className="h-5 w-5 text-emerald-700" aria-hidden="true" />
                  ) : (
                    <VolumeX className="h-5 w-5 text-muted-foreground" aria-hidden="true" />
                  )}
                  <div>
                    <p className="font-medium">Gentle chime</p>
                    <p className="text-sm text-muted-foreground">A soft bell when a reminder fires. Off by default.</p>
                  </div>
                </div>
                <Switch checked={settings.sound} onCheckedChange={toggleSound} aria-label="Toggle sound" />
              </div>

              {/* Intensity */}
              <div className="space-y-2">
                <p className="font-medium">Reminder intensity</p>
                <div className="grid grid-cols-3 gap-2">
                  {(['gentle', 'normal', 'strict'] as Intensity[]).map((level) => (
                    <button
                      key={level}
                      onClick={() => setIntensity(level)}
                      className={`p-3 rounded-xl border text-sm font-medium transition-colors ${
                        settings.intensity === level
                          ? 'border-emerald-500 bg-emerald-50 dark:bg-emerald-950/30 text-emerald-800 dark:text-emerald-200'
                          : 'hover:border-primary hover:bg-muted/50'
                      }`}
                      aria-pressed={settings.intensity === level}
                    >
                      <div className="capitalize">{level}</div>
                      <div className="text-xs text-muted-foreground mt-1">
                        {level === 'gentle' && 'Fewer nudges'}
                        {level === 'normal' && 'Balanced'}
                        {level === 'strict' && 'More frequent'}
                      </div>
                    </button>
                  ))}
                </div>
                <p className="text-xs text-muted-foreground">
                  Eyes: every {Math.round(BASE_INTERVALS.eyes * INTENSITY_MULT[settings.intensity])}m · Posture: every{' '}
                  {Math.round(BASE_INTERVALS.posture * INTENSITY_MULT[settings.intensity])}m · Stretch: every{' '}
                  {Math.round(BASE_INTERVALS.stretch * INTENSITY_MULT[settings.intensity])}m · Water: every{' '}
                  {Math.round(BASE_INTERVALS.hydration * INTENSITY_MULT[settings.intensity])}m
                </p>
              </div>

              <div className="pt-2 flex gap-2 flex-wrap">
                <Button variant="outline" onClick={resetAllTimers}>
                  <Waves className="h-4 w-4 mr-2" aria-hidden="true" /> Reset all timers
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Posture diagram */}
          <Card>
            <CardHeader>
              <CardTitle className="text-lg flex items-center gap-2">
                <Armchair className="h-5 w-5 text-emerald-700" aria-hidden="true" /> Good posture, at a glance
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-6 items-center">
                <PostureDiagram />
                <ul className="space-y-3 text-base">
                  <PostureItem label="Feet flat on the floor" detail="Or on a footrest. Knees at roughly 90°." />
                  <PostureItem label="Back against the chair" detail="Use a small pillow or rolled towel for lower back support." />
                  <PostureItem label="Screen at eye level" detail="The top of the screen should meet your gaze. Raise a laptop on books if needed." />
                  <PostureItem label="Elbows at 90°" detail="Shoulders relaxed, wrists straight — not bent up or down." />
                </ul>
              </div>
            </CardContent>
          </Card>

          {/* Five rotating stretches */}
          <Card>
            <CardHeader>
              <CardTitle className="text-lg flex items-center gap-2">
                <HeartPulse className="h-5 w-5 text-emerald-700" aria-hidden="true" /> The five stretches we rotate through
              </CardTitle>
            </CardHeader>
            <CardContent className="grid md:grid-cols-2 gap-3">
              {STRETCHES.map((s) => (
                <div key={s.name} className="p-4 rounded-xl border bg-muted/30">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-2xl" aria-hidden="true">
                      {s.icon}
                    </span>
                    <p className="font-semibold">{s.name}</p>
                    <span className="ml-auto text-xs text-muted-foreground">{s.duration}</span>
                  </div>
                  <p className="text-sm text-muted-foreground">{s.instruction}</p>
                </div>
              ))}
            </CardContent>
          </Card>

          {/* Senior-specific tips */}
          <Card className="border-border bg-muted/20">
            <CardHeader>
              <CardTitle className="text-lg flex items-center gap-2 text-emerald-900 dark:text-emerald-100">
                <Leaf className="h-5 w-5" aria-hidden="true" /> Tips for older eyes and older shoulders
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-base">
              <div>
                <p className="font-semibold text-emerald-900 dark:text-emerald-100">If you have dry eye, blinking exercises help.</p>
                <p className="text-emerald-900/80 dark:text-emerald-200/80 mt-1">
                  We blink about half as often when staring at screens. Try this: close your eyes slowly, squeeze gently for 2 seconds, then open. Repeat 5 times every hour. Artificial tears (like Systane or Refresh) are fine to use, but talk to your eye doctor if dryness is persistent.
                </p>
              </div>
              <div>
                <p className="font-semibold text-emerald-900 dark:text-emerald-100">Cataracts and screens: talk to your eye doctor.</p>
                <p className="text-emerald-900/80 dark:text-emerald-200/80 mt-1">
                  Screens don't cause cataracts, but bright glare can make cloudy vision worse. If text looks smeary or halos appear around lights, schedule a comprehensive eye exam. Cataract surgery today is very safe and often dramatically improves screen use.
                </p>
              </div>
              <div>
                <p className="font-semibold text-emerald-900 dark:text-emerald-100">Text-neck is real — prop your phone up, don't hunch.</p>
                <p className="text-emerald-900/80 dark:text-emerald-200/80 mt-1">
                  Looking down at a phone loads the neck with up to 60 pounds of force. Instead: bring the phone up to eye level, or prop it on a stand. For longer reading, switch to a tablet or computer. Your neck and upper back will feel the difference within days.
                </p>
              </div>
              <div>
                <p className="font-semibold text-emerald-900 dark:text-emerald-100">Ask your eye doctor about "computer glasses."</p>
                <p className="text-emerald-900/80 dark:text-emerald-200/80 mt-1">
                  If you already wear bifocals or progressives, a dedicated pair of single-focus "computer distance" glasses can remove the strain of tilting your head to find the right zone.
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Cross-links */}
          <div className="grid md:grid-cols-2 gap-4">
            <a
              href="/tools/accessibility-check"
              className="block rounded-xl border p-4 hover:border-emerald-500 hover:bg-emerald-50 dark:hover:bg-emerald-950/20 transition-colors"
            >
              <p className="font-semibold text-sm flex items-center gap-1">
                Accessibility check-up <ChevronRight className="h-4 w-4" />
              </p>
              <p className="text-xs text-muted-foreground mt-1">
                Bigger text, higher contrast, louder sound — tune your device for easier use.
              </p>
            </a>
            <a
              href="/digital-detox"
              className="block rounded-xl border p-4 hover:border-emerald-500 hover:bg-emerald-50 dark:hover:bg-emerald-950/20 transition-colors"
            >
              <p className="font-semibold text-sm flex items-center gap-1">
                Digital detox guide <ChevronRight className="h-4 w-4" />
              </p>
              <p className="text-xs text-muted-foreground mt-1">
                Gentler ways to step back from screens without going off-grid.
              </p>
            </a>
          </div>
        </div>
      </main>

      {/* Escalation modal */}
      <Dialog open={modal !== null} onOpenChange={(open) => !open && dismissModal()}>
        <DialogContent className="max-w-md">
          {modal && (
            <>
              <DialogHeader>
                <DialogTitle className="text-2xl flex items-center gap-2">
                  {modal.kind === 'eyes' && (
                    <>
                      <Eye className="h-6 w-6 text-emerald-600" aria-hidden="true" /> Time to rest your eyes
                    </>
                  )}
                  {modal.kind === 'stretch' && modal.stretch && (
                    <>
                      <span className="text-2xl">{modal.stretch.icon}</span> {modal.stretch.name}
                    </>
                  )}
                  {modal.kind === 'posture' && (
                    <>
                      <Armchair className="h-6 w-6 text-emerald-600" aria-hidden="true" /> Posture check
                    </>
                  )}
                  {modal.kind === 'hydration' && (
                    <>
                      <Droplets className="h-6 w-6 text-sky-600" aria-hidden="true" /> Take a sip
                    </>
                  )}
                  {modal.kind === 'sunset' && (
                    <>
                      <Sunset className="h-6 w-6 text-amber-600" aria-hidden="true" /> Wind down
                    </>
                  )}
                </DialogTitle>
                <DialogDescription className="text-base pt-2">
                  {modal.kind === 'eyes' && 'Look at something at least 20 feet away for 20 seconds. A window is perfect.'}
                  {modal.kind === 'stretch' && modal.stretch && modal.stretch.instruction}
                  {modal.kind === 'posture' &&
                    'Feet flat, back against the chair, screen at eye level, elbows at 90°. Take ten seconds to reset.'}
                  {modal.kind === 'hydration' &&
                    'Grab a glass of water. Even mild dehydration causes fatigue and headaches — and most of us don\'t drink enough.'}
                  {modal.kind === 'sunset' && 'Dim your screen, turn on Night Shift / Night Light, and think about wrapping up for the evening.'}
                </DialogDescription>
              </DialogHeader>
              <div className="flex justify-end gap-2 pt-4">
                <Button onClick={dismissModal} className="bg-emerald-600 hover:bg-emerald-700">
                  Done
                </Button>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// Sub-components
// ─────────────────────────────────────────────────────────────────────────────

const REMINDER_COPY: Record<ReminderKey, { toastTitle: string; toastBody: string }> = {
  eyes: {
    toastTitle: '  Time for the 20-20-20',
    toastBody: 'Look at something 20 feet away for 20 seconds. We\'ll chime when the 20 seconds are up.',
  },
  stretch: {
    toastTitle: '  Stretch break',
    toastBody: 'Stand up, move a little. Your back will thank you.',
  },
  posture: {
    toastTitle: '  Posture check',
    toastBody: 'Feet flat, back supported, screen at eye level, elbows at 90°.',
  },
  hydration: {
    toastTitle: '  Take a sip',
    toastBody: 'A glass of water goes a long way. Most of us don\'t drink enough.',
  },
  sunset: {
    toastTitle: '  The sun has set',
    toastBody: 'Dim your screen or turn on Night Shift / blue-light filter. Better light, better sleep.',
  },
};

type Accent = 'emerald' | 'green' | 'teal' | 'sky';

const ACCENT_CLASSES: Record<Accent, { icon: string; bg: string }> = {
  emerald: { icon: 'text-emerald-700 dark:text-emerald-300', bg: 'bg-emerald-100 dark:bg-emerald-950/40' },
  green: { icon: 'text-green-700 dark:text-green-300', bg: 'bg-green-100 dark:bg-green-950/40' },
  teal: { icon: 'text-teal-700 dark:text-teal-300', bg: 'bg-teal-100 dark:bg-teal-950/40' },
  sky: { icon: 'text-sky-700 dark:text-sky-300', bg: 'bg-sky-100 dark:bg-sky-950/40' },
};

function TimerCard({
  icon,
  title,
  subtitle,
  enabled,
  seconds,
  onToggle,
  onSkip,
  accent,
}: {
  icon: React.ReactNode;
  title: string;
  subtitle: string;
  enabled: boolean;
  seconds: number;
  onToggle: () => void;
  onSkip: () => void;
  accent: Accent;
}) {
  const cls = ACCENT_CLASSES[accent];
  return (
    <Card className={enabled ? 'border-emerald-200 dark:border-emerald-900/40' : 'opacity-70'}>
      <CardContent className="pt-5 space-y-3">
        <div className="flex items-start justify-between gap-3">
          <div className="flex items-start gap-3">
            <div className={`h-11 w-11 rounded-xl ${cls.bg} flex items-center justify-center flex-shrink-0`}>
              <span className={cls.icon}>{icon}</span>
            </div>
            <div>
              <p className="font-semibold text-base leading-tight">{title}</p>
              <p className="text-xs text-muted-foreground mt-0.5">{subtitle}</p>
            </div>
          </div>
          <Switch checked={enabled} onCheckedChange={onToggle} aria-label={`Toggle ${title}`} />
        </div>
        <div className="flex items-end justify-between gap-3">
          <div>
            <p className="text-xs text-muted-foreground">Next in</p>
            <p className="text-3xl font-bold tabular-nums text-emerald-800 dark:text-emerald-200">
              {enabled ? formatMMSS(seconds) : '--:--'}
            </p>
          </div>
          <Button
            variant="outline"
            size="sm"
            onClick={onSkip}
            disabled={!enabled}
            aria-label={`Skip next ${title}`}
          >
            Skip
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}

function PostureItem({ label, detail }: { label: string; detail: string }) {
  return (
    <li className="flex items-start gap-3">
      <span className="mt-1 h-2.5 w-2.5 rounded-full bg-emerald-500 flex-shrink-0" aria-hidden="true" />
      <div>
        <p className="font-semibold">{label}</p>
        <p className="text-sm text-muted-foreground">{detail}</p>
      </div>
    </li>
  );
}

// A simple SVG posture diagram — person seated at a desk
function PostureDiagram() {
  return (
    <svg
      role="img"
      aria-label="Illustration of good seated posture at a desk: back straight, screen at eye level, elbows at 90 degrees, feet flat."
      viewBox="0 0 320 260"
      className="w-full h-auto max-w-xs mx-auto"
    >
      {/* Floor */}
      <line x1="10" y1="240" x2="310" y2="240" stroke="#1f3a2e" strokeWidth="2" />

      {/* Desk */}
      <rect x="150" y="140" width="150" height="6" fill="#7f5a3a" />
      <rect x="160" y="146" width="4" height="94" fill="#7f5a3a" />
      <rect x="286" y="146" width="4" height="94" fill="#7f5a3a" />

      {/* Monitor on a stand */}
      <rect x="195" y="70" width="90" height="60" rx="4" fill="#1f3a2e" />
      <rect x="200" y="75" width="80" height="50" rx="2" fill="#9fd8b9" />
      <rect x="235" y="130" width="10" height="8" fill="#1f3a2e" />
      <rect x="218" y="138" width="44" height="3" fill="#1f3a2e" />

      {/* Chair back */}
      <rect x="60" y="120" width="8" height="80" fill="#4a7c59" />
      <rect x="40" y="120" width="30" height="70" rx="4" fill="#6aa67f" />

      {/* Person */}
      {/* Head */}
      <circle cx="115" cy="95" r="18" fill="#f6d5b1" stroke="#1f3a2e" strokeWidth="2" />
      {/* Eyes looking forward to monitor */}
      <circle cx="123" cy="93" r="1.5" fill="#1f3a2e" />
      <circle cx="130" cy="93" r="1.5" fill="#1f3a2e" />
      {/* Neck */}
      <rect x="111" y="110" width="10" height="14" fill="#f6d5b1" />
      {/* Torso - straight */}
      <rect x="95" y="120" width="42" height="70" rx="6" fill="#77b894" stroke="#1f3a2e" strokeWidth="2" />
      {/* Upper arm */}
      <rect x="133" y="130" width="8" height="34" rx="3" fill="#77b894" stroke="#1f3a2e" strokeWidth="1.5" />
      {/* Forearm — horizontal (elbow ~90°) */}
      <rect x="138" y="160" width="40" height="8" rx="3" fill="#77b894" stroke="#1f3a2e" strokeWidth="1.5" />
      {/* Hand on desk */}
      <circle cx="180" cy="164" r="5" fill="#f6d5b1" stroke="#1f3a2e" strokeWidth="1.5" />

      {/* Legs — knees at 90° */}
      <rect x="98" y="188" width="44" height="12" rx="3" fill="#4a6fa5" stroke="#1f3a2e" strokeWidth="1.5" />
      <rect x="100" y="198" width="12" height="42" rx="2" fill="#4a6fa5" stroke="#1f3a2e" strokeWidth="1.5" />
      <rect x="128" y="198" width="12" height="42" rx="2" fill="#4a6fa5" stroke="#1f3a2e" strokeWidth="1.5" />

      {/* Feet */}
      <ellipse cx="106" cy="242" rx="9" ry="4" fill="#1f3a2e" />
      <ellipse cx="134" cy="242" rx="9" ry="4" fill="#1f3a2e" />

      {/* Eye-level guideline from eyes to monitor top */}
      <line x1="133" y1="95" x2="200" y2="80" stroke="#4a7c59" strokeWidth="1" strokeDasharray="3 3" />

      {/* Annotation arrows and labels */}
      <text x="18" y="90" fontSize="10" fill="#1f3a2e" fontFamily="sans-serif">
        Screen at eye level
      </text>
      <line x1="18" y1="94" x2="82" y2="100" stroke="#1f3a2e" strokeWidth="0.8" />

      <text x="210" y="180" fontSize="10" fill="#1f3a2e" fontFamily="sans-serif">
        Elbows ~90°
      </text>
      <line x1="210" y1="176" x2="168" y2="162" stroke="#1f3a2e" strokeWidth="0.8" />

      <text x="170" y="225" fontSize="10" fill="#1f3a2e" fontFamily="sans-serif">
        Feet flat
      </text>
      <line x1="170" y1="229" x2="140" y2="238" stroke="#1f3a2e" strokeWidth="0.8" />
    </svg>
  );
}

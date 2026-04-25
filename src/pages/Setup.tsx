import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Sparkles, Monitor, Smartphone, Tablet, Laptop,
  Baby, User, GraduationCap, BookOpen, Shield,
  Wifi, Lock, Camera, ChevronRight, CheckCircle2, ArrowRight,
  KeyRound, Apple, ImageIcon, Mail, Target,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { SEOHead } from '@/components/SEOHead';

/* ── Types ───────────────────────────────── */
type Device = 'windows' | 'mac' | 'iphone' | 'android' | 'tablet';
type Confidence = 'beginner' | 'some' | 'comfortable';
type Goal = 'safety' | 'basics' | 'photos' | 'communication' | 'productivity';

interface SetupAnswers {
  device: Device | null;
  confidence: Confidence | null;
  goals: Goal[];
}

const STORAGE_KEY = 'teksure-setup';

/* ── Step configs ────────────────────────── */
const devices: { id: Device; label: string; icon: React.ElementType; desc: string }[] = [
  { id: 'windows', label: 'Windows PC / Laptop', icon: Monitor, desc: 'Desktop or laptop running Windows' },
  { id: 'mac', label: 'Mac / MacBook', icon: Laptop, desc: 'Apple desktop or laptop (macOS)' },
  { id: 'iphone', label: 'iPhone or iPad', icon: Smartphone, desc: 'Apple phone or tablet (iOS)' },
  { id: 'android', label: 'Android Phone', icon: Smartphone, desc: 'Samsung, Google, or other Android' },
  { id: 'tablet', label: 'Tablet (other)', icon: Tablet, desc: 'Kindle Fire, other tablet' },
];

const confidenceLevels: { id: Confidence; label: string; icon: React.ElementType; desc: string }[] = [
  { id: 'beginner', label: "I'm a complete beginner", icon: Baby, desc: "Technology feels confusing — I need clear, simple steps" },
  { id: 'some', label: 'I know a little', icon: User, desc: "I can do basic things but often get stuck" },
  { id: 'comfortable', label: "I'm fairly comfortable", icon: GraduationCap, desc: "I just want to fill in gaps and learn tips" },
];

const goals: { id: Goal; label: string; icon: React.ElementType; desc: string }[] = [
  { id: 'safety', label: 'Stay safe online', icon: Shield, desc: 'Avoid scams, protect passwords, browse safely' },
  { id: 'basics', label: 'Learn the basics', icon: BookOpen, desc: 'Files, folders, settings, and everyday tasks' },
  { id: 'photos', label: 'Manage my photos', icon: Camera, desc: 'Organize, back up, and share photos' },
  { id: 'communication', label: 'Video calls & messaging', icon: Wifi, desc: 'Zoom, FaceTime, WhatsApp, email' },
  { id: 'productivity', label: 'Get more done', icon: Lock, desc: 'Shortcuts, apps, and time-saving tricks' },
];

/* ── Recommendation logic ───────────────── */
interface Recommendation {
  title: string;
  icon: React.ElementType;
  reason: string;
  guideSlug: string;
  category: string;
}

function getRecommendations(answers: SetupAnswers): Recommendation[] {
  const recs: Recommendation[] = [];

  // Safety-first guides for everyone
  if (answers.goals.includes('safety') || answers.confidence === 'beginner') {
    recs.push({
      title: 'How to Create a Strong Password',
      icon: KeyRound,
      reason: "Your first line of defense online — let's make it solid.",
      guideSlug: 'create-strong-password',
      category: 'Essential Skills',
    });
  }

  // Device-specific starter guide
  if (answers.device === 'windows') {
    recs.push({
      title: 'Turning Your PC On and Off Correctly',
      icon: Monitor,
      reason: 'The perfect starting point for any Windows user.',
      guideSlug: 'turn-pc-on-and-off',
      category: 'Windows Guides',
    });
  }
  if (answers.device === 'mac') {
    recs.push({
      title: 'Getting Started with Your Mac',
      icon: Apple,
      reason: "Mac has its own way of doing things — let's learn the basics.",
      guideSlug: 'turn-mac-on-and-off',
      category: 'Mac Guides',
    });
  }

  // Photo guides
  if (answers.goals.includes('photos')) {
    recs.push({
      title: 'Backing Up Your Photos',
      icon: ImageIcon,
      reason: 'Never lose a precious memory again.',
      guideSlug: 'setup-windows-backup',
      category: 'Essential Skills',
    });
  }

  // Communication guides
  if (answers.goals.includes('communication')) {
    recs.push({
      title: 'How to Use Email Safely',
      icon: Mail,
      reason: 'Email is how most of the internet communicates — master it.',
      guideSlug: 'setup-email-windows-mail',
      category: 'Windows Guides',
    });
  }

  // Screenshot guide — universal quick win
  if (answers.goals.includes('basics') || answers.goals.includes('productivity')) {
    recs.push({
      title: 'How to Take a Screenshot',
      icon: Camera,
      reason: 'One of the most useful skills for showing someone what you see.',
      guideSlug: answers.device === 'mac' ? 'take-screenshot-mac' : 'take-screenshot-windows',
      category: answers.device === 'mac' ? 'Mac Guides' : 'Windows Guides',
    });
  }

  // WiFi guide — nearly always useful
  recs.push({
    title: 'Connecting to WiFi',
    icon: Wifi,
    reason: 'Everything starts with a good internet connection.',
    guideSlug: answers.device === 'mac' ? 'connect-wifi-mac' : 'connect-wifi-windows',
    category: answers.device === 'mac' ? 'Mac Guides' : 'Windows Guides',
  });

  // Deduplicate and return top 4
  const seen = new Set<string>();
  return recs.filter(r => {
    if (seen.has(r.guideSlug)) return false;
    seen.add(r.guideSlug);
    return true;
  }).slice(0, 4);
}

/* ── Slide animation ─────────────────────── */
const slide = {
  initial: { opacity: 0, x: 40 },
  animate: { opacity: 1, x: 0 },
  exit: { opacity: 0, x: -40 },
  transition: { duration: 0.25 },
};

/* ── Main component ──────────────────────── */
export default function Setup() {
  const navigate = useNavigate();
  const [step, setStep] = useState(0); // 0=device, 1=confidence, 2=goals, 3=results
  const [answers, setAnswers] = useState<SetupAnswers>({ device: null, confidence: null, goals: [] });
  const [alreadyDone, setAlreadyDone] = useState(false);

  useEffect(() => {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored) setAlreadyDone(true);
  }, []);

  const progress = ((step) / 3) * 100;

  function saveAndFinish(finalAnswers: SetupAnswers) {
    if (typeof window !== 'undefined') localStorage.setItem(STORAGE_KEY, JSON.stringify(finalAnswers));
  }

  function toggleGoal(goal: Goal) {
    setAnswers(prev => ({
      ...prev,
      goals: prev.goals.includes(goal)
        ? prev.goals.filter(g => g !== goal)
        : [...prev.goals, goal],
    }));
  }

  const recs = step === 3 ? getRecommendations(answers) : [];

  if (alreadyDone && step === 0) {
    return (
      <>
        <SEOHead title="Setup Complete | TekSure" description="Your TekSure setup is already done." path="/setup" />
        <main className="min-h-screen bg-background flex flex-col items-center justify-center px-4">
          <div className="container max-w-xl mx-auto py-24 text-center gap-6 flex flex-col items-center">
            <CheckCircle2 className="h-16 w-16 text-green-500" />
            <h1 className="text-3xl md:text-4xl font-bold tracking-tight text-primary">You're all set up!</h1>
            <p className="text-muted-foreground text-lg">
              You've already completed the setup quiz. Head to your profile to see your personalized learning path, or browse all guides.
            </p>
            <div className="flex gap-3 flex-wrap justify-center">
              <Button onClick={() => navigate('/guides')} className="rounded-xl">Browse Guides</Button>
              <Button variant="outline" onClick={() => { localStorage.removeItem(STORAGE_KEY); setAlreadyDone(false); }} className="rounded-xl">
                Redo Setup
              </Button>
            </div>
          </div>
        </main>
      </>
    );
  }

  return (
    <>
      <SEOHead
        title="Getting Started | TekSure"
        description="Answer 3 quick questions and get a personalized learning path matched to your device and goals."
        path="/setup"
      />
      <main className="min-h-screen bg-background container py-12 max-w-2xl mx-auto">

        {/* Header */}
        <div className="flex items-center gap-3 mb-2">
          <div className="p-2 bg-primary/10 rounded-xl">
            <Sparkles className="h-6 w-6 text-primary" />
          </div>
          <h1 className="text-3xl md:text-4xl font-bold tracking-tight text-primary">Getting Started</h1>
        </div>
        <p className="text-muted-foreground mb-6">
          Answer 3 quick questions and we'll build your personalized starting point.
        </p>

        {step < 3 && (
          <div className="mb-8">
            <div className="flex justify-between text-sm text-muted-foreground mb-1">
              <span>Step {step + 1} of 3</span>
              <span>{Math.round(progress)}%</span>
            </div>
            <Progress value={progress} className="h-2" />
          </div>
        )}

        <>

          {/* Step 0 — Device */}
          {step === 0 && (
            <div key="device" {...slide}>
              <h2 className="text-xl font-semibold mb-4 text-primary">What's your main device?</h2>
              <div className="grid gap-3">
                {devices.map(d => {
                  const Icon = d.icon;
                  const selected = answers.device === d.id;
                  return (
                    <button
                      key={d.id}
                      onClick={() => { setAnswers(p => ({ ...p, device: d.id })); setStep(1); }}
                      className={`flex items-center gap-4 p-4 rounded-xl border-2 text-left transition-all hover:border-primary/60 hover:bg-primary/5 ${selected ? 'border-primary bg-primary/10' : 'border-border bg-card'}`}
                    >
                      <Icon className="h-8 w-8 text-primary shrink-0" />
                      <div>
                        <div className="font-medium text-primary">{d.label}</div>
                        <div className="text-sm text-muted-foreground">{d.desc}</div>
                      </div>
                      <ChevronRight className="h-5 w-5 text-muted-foreground ml-auto shrink-0" />
                    </button>
                  );
                })}
              </div>
            </div>
          )}

          {/* Step 1 — Confidence */}
          {step === 1 && (
            <div key="confidence" {...slide}>
              <h2 className="text-xl font-semibold mb-4 text-primary">How comfortable are you with technology?</h2>
              <div className="grid gap-3">
                {confidenceLevels.map(c => {
                  const Icon = c.icon;
                  return (
                    <button
                      key={c.id}
                      onClick={() => { setAnswers(p => ({ ...p, confidence: c.id })); setStep(2); }}
                      className="flex items-center gap-4 p-4 rounded-xl border-2 border-border bg-card text-left transition-all hover:border-primary/60 hover:bg-primary/5"
                    >
                      <Icon className="h-8 w-8 text-primary shrink-0" />
                      <div>
                        <div className="font-medium text-primary">{c.label}</div>
                        <div className="text-sm text-muted-foreground">{c.desc}</div>
                      </div>
                      <ChevronRight className="h-5 w-5 text-muted-foreground ml-auto shrink-0" />
                    </button>
                  );
                })}
              </div>
              <Button variant="ghost" className="mt-4 rounded-xl" onClick={() => setStep(0)}>← Back</Button>
            </div>
          )}

          {/* Step 2 — Goals */}
          {step === 2 && (
            <div key="goals" {...slide}>
              <h2 className="text-xl font-semibold mb-1 text-primary">What do you most want to learn?</h2>
              <p className="text-muted-foreground mb-4 text-sm">Pick as many as you like.</p>
              <div className="grid gap-3">
                {goals.map(g => {
                  const Icon = g.icon;
                  const selected = answers.goals.includes(g.id);
                  return (
                    <button
                      key={g.id}
                      onClick={() => toggleGoal(g.id)}
                      className={`flex items-center gap-4 p-4 rounded-xl border-2 text-left transition-all ${selected ? 'border-primary bg-primary/10' : 'border-border bg-card hover:border-primary/60 hover:bg-primary/5'}`}
                    >
                      <Icon className={`h-8 w-8 shrink-0 ${selected ? 'text-primary' : 'text-muted-foreground'}`} />
                      <div>
                        <div className="font-medium text-primary">{g.label}</div>
                        <div className="text-sm text-muted-foreground">{g.desc}</div>
                      </div>
                      {selected && <CheckCircle2 className="h-5 w-5 text-primary ml-auto shrink-0" />}
                    </button>
                  );
                })}
              </div>
              <div className="flex gap-3 mt-6">
                <Button variant="ghost" onClick={() => setStep(1)} className="rounded-xl">← Back</Button>
                <Button
                  onClick={() => {
                    const final = { ...answers, goals: answers.goals.length ? answers.goals : ['basics' as Goal] };
                    setAnswers(final);
                    saveAndFinish(final);
                    setStep(3);
                  }}
                  className="ml-auto rounded-xl"
                >
                  Show My Learning Path <ArrowRight className="h-4 w-4 ml-2" />
                </Button>
              </div>
            </div>
          )}

          {/* Step 3 — Results */}
          {step === 3 && (
            <div key="results" {...slide}>
              <div className="flex items-center gap-3 mb-2">
                <CheckCircle2 className="h-8 w-8 text-green-500" />
                <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-primary">Your personalized starting point</h2>
              </div>
              <p className="text-muted-foreground mb-6">
                Based on your answers, here are the best guides to start with. Work through them in order — each one builds on the last.
              </p>

              <div className="grid gap-4 mb-8">
                {recs.map((rec, i) => (
                  <Card key={rec.guideSlug} className="rounded-2xl border border-border bg-card hover:shadow-md transition-shadow">
                    <CardContent className="p-4 flex items-start gap-4">
                      <div className="flex items-center justify-center h-10 w-10 rounded-full bg-primary/10 text-xl shrink-0 font-bold text-primary">
                        {i + 1}
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-2 flex-wrap">
                          {(() => { const RIcon = rec.icon; return <RIcon className="h-5 w-5 text-primary" />; })()}
                          <span className="font-semibold text-primary">{rec.title}</span>
                        </div>
                        <p className="text-sm text-muted-foreground mt-0.5">{rec.reason}</p>
                        <span className="text-xs text-muted-foreground">{rec.category}</span>
                      </div>
                      <Button size="sm" variant="outline" asChild className="shrink-0 rounded-xl">
                        <a href={`/guides/${rec.guideSlug}`}>
                          Start <ChevronRight className="h-3 w-3 ml-1" />
                        </a>
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>

              <div className="rounded-xl bg-primary/10 border border-primary/20 p-5 mb-6">
                <p className="font-semibold text-primary mb-1 flex items-center gap-2"><Target className="h-4 w-4" /> Quick tip</p>
                <p className="text-sm text-muted-foreground">
                  Don't try to do everything at once. Complete one guide, then take a break.
                  You'll find it all starts to make sense faster than you think.
                </p>
              </div>

              <div className="flex gap-3 flex-wrap">
                <Button onClick={() => navigate('/guides')} className="rounded-xl">
                  Browse All Guides <ArrowRight className="h-4 w-4 ml-2" />
                </Button>
                <Button variant="outline" onClick={() => navigate('/tools')} className="rounded-xl">
                  Explore Tools
                </Button>
              </div>
            </div>
          )}

        </>
      </main>
    </>
  );
}

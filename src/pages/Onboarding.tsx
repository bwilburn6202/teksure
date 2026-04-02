import React, { useState, useMemo } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { ArrowRight, CheckCircle2, BookOpen, Monitor, Laptop, Smartphone, HelpCircle, Sprout, Leaf, TreeDeciduous } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { useAuth } from '@/contexts/AuthContext';
import { guides } from '@/data/guides';

/* ── Types ───────────────────────────────── */
type DeviceOption = 'windows' | 'mac' | 'iphone' | 'android' | 'not-sure';

interface OnboardingData {
  device: DeviceOption | null;
  frustrations: string[];
  confidence: 'beginner' | 'intermediate' | 'comfortable' | null;
}

/* ── Options ─────────────────────────────── */
const deviceOptions: { id: DeviceOption; icon: React.ComponentType<{ className?: string }>; label: string }[] = [
  { id: 'windows', icon: Monitor, label: 'Windows Computer' },
  { id: 'mac', icon: Laptop, label: 'Mac / MacBook' },
  { id: 'iphone', icon: Smartphone, label: 'iPhone / iPad' },
  { id: 'android', icon: Smartphone, label: 'Android Phone / Tablet' },
  { id: 'not-sure', icon: HelpCircle, label: 'Not sure' },
];

const frustrationOptions = [
  'WiFi and internet problems',
  'Keeping safe from scams',
  'Passwords and logging in',
  'Printers and devices',
  'Phone and tablet basics',
  'Video calls and messaging',
  'Email troubles',
  'Something else',
];

const confidenceOptions: { id: 'beginner' | 'intermediate' | 'comfortable'; icon: React.ComponentType<{ className?: string }>; label: string; desc: string }[] = [
  { id: 'beginner', icon: Sprout, label: 'Just starting', desc: 'I need help with the basics' },
  { id: 'intermediate', icon: Leaf, label: 'Getting there', desc: 'I can do some things but get stuck' },
  { id: 'comfortable', icon: TreeDeciduous, label: 'Fairly comfortable', desc: 'I want to learn new tricks' },
];

/* ── Animation ───────────────────────────── */
const slide = {
  initial: { opacity: 0, x: 40 },
  animate: { opacity: 1, x: 0 },
  exit: { opacity: 0, x: -40 },
  transition: { duration: 0.25 },
};

/* ── Guide matching logic ────────────────── */
function getRecommendedGuides(data: OnboardingData) {
  const scored = guides.map((guide) => {
    let score = 0;
    const titleLower = guide.title.toLowerCase();
    const excerptLower = guide.excerpt.toLowerCase();
    const tags = guide.tags.map((t) => t.toLowerCase());
    const combined = `${titleLower} ${excerptLower} ${tags.join(' ')}`;

    // Device match
    if (data.device === 'windows' && (guide.category === 'windows-guides' || combined.includes('windows'))) score += 3;
    if (data.device === 'mac' && (guide.category === 'mac-guides' || combined.includes('mac'))) score += 3;
    if (data.device === 'iphone' && (guide.category === 'phone-guides' || combined.includes('iphone') || combined.includes('ipad'))) score += 3;
    if (data.device === 'android' && (guide.category === 'phone-guides' || combined.includes('android'))) score += 3;

    // Frustration matches
    for (const f of data.frustrations) {
      const fl = f.toLowerCase();
      if (fl.includes('wifi') && combined.includes('wifi')) score += 2;
      if (fl.includes('scam') && (guide.category === 'safety-guides' || combined.includes('scam'))) score += 2;
      if (fl.includes('password') && (combined.includes('password') || combined.includes('login'))) score += 2;
      if (fl.includes('printer') && combined.includes('printer')) score += 2;
      if (fl.includes('phone') && (guide.category === 'phone-guides' || combined.includes('phone') || combined.includes('tablet'))) score += 2;
      if (fl.includes('video call') && (combined.includes('zoom') || combined.includes('video call') || combined.includes('facetime'))) score += 2;
      if (fl.includes('email') && combined.includes('email')) score += 2;
    }

    // Confidence match — prefer beginner guides for beginners
    if (data.confidence === 'beginner' && guide.difficulty === 'Beginner') score += 2;
    if (data.confidence === 'intermediate' && (guide.difficulty === 'Beginner' || guide.difficulty === 'Intermediate')) score += 1;
    if (data.confidence === 'comfortable' && (guide.difficulty === 'Intermediate' || guide.difficulty === 'Advanced')) score += 1;

    // Prefer essential skills for beginners
    if (data.confidence === 'beginner' && guide.category === 'essential-skills') score += 1;

    return { guide, score };
  });

  return scored
    .filter((s) => s.score > 0)
    .sort((a, b) => b.score - a.score)
    .slice(0, 3)
    .map((s) => s.guide);
}

/* ── Main component ──────────────────────── */
export default function Onboarding() {
  const { user } = useAuth();
  const navigate = useNavigate();
  const [step, setStep] = useState(0);
  const [data, setData] = useState<OnboardingData>({
    device: null,
    frustrations: [],
    confidence: null,
  });

  const totalSteps = 3;
  const progressDots = Array.from({ length: totalSteps }, (_, i) => i);

  const recommended = useMemo(
    () => (step === 3 ? getRecommendedGuides(data) : []),
    [step, data],
  );

  const toggleFrustration = (f: string) => {
    setData((prev) => {
      const has = prev.frustrations.includes(f);
      if (has) return { ...prev, frustrations: prev.frustrations.filter((x) => x !== f) };
      if (prev.frustrations.length >= 3) return prev;
      return { ...prev, frustrations: [...prev.frustrations, f] };
    });
  };

  const finish = () => {
    try {
      localStorage.setItem('teksure-onboarding', JSON.stringify(data));
    } catch {}
    if (user) {
      navigate('/customer');
    } else {
      navigate('/guides');
    }
  };

  // Step 3 = results
  if (step === 3) {
    return (
      <>
        <SEOHead
          title="Your Personalized Plan | TekSure"
          description="Based on your answers, here are guides picked just for you."
          path="/onboarding"
        />
        <Navbar />
        <main className="min-h-screen bg-background">
          <div className="container py-16 md:py-24 max-w-2xl mx-auto">
            <div
              className="text-center mb-10"
            >
              <div className="h-16 w-16 rounded-full bg-green-500/10 flex items-center justify-center mx-auto mb-6">
                <CheckCircle2 className="h-8 w-8 text-green-600" />
              </div>
              <h1 className="text-3xl md:text-4xl font-bold tracking-tight mb-3">
                You're all set!
              </h1>
              <p className="text-muted-foreground text-lg">
                Based on your answers, here are 3 guides we think you'll love.
              </p>
            </div>

            {/* Recommended guides */}
            <div className="space-y-3 mb-10">
              {recommended.length > 0 ? (
                recommended.map((guide, i) => (
                  <div
                    key={guide.slug}
                  >
                    <Link to={`/guides/${guide.slug}`}>
                      <Card className="rounded-xl border border-border bg-card hover:border-primary/30 hover:shadow-sm transition-all cursor-pointer">
                        <CardContent className="p-5 flex items-center gap-4">
                          <span className="text-3xl shrink-0">{guide.thumbnailEmoji}</span>
                          <div className="flex-1 min-w-0">
                            <h3 className="font-semibold text-sm mb-1">{guide.title}</h3>
                            <p className="text-xs text-muted-foreground line-clamp-2">{guide.excerpt}</p>
                          </div>
                          <ArrowRight className="h-4 w-4 text-muted-foreground shrink-0" />
                        </CardContent>
                      </Card>
                    </Link>
                  </div>
                ))
              ) : (
                <div>
                  <Card className="rounded-xl border border-border bg-card">
                    <CardContent className="p-6 text-center">
                      <BookOpen className="h-8 w-8 text-muted-foreground mx-auto mb-3" />
                      <p className="font-medium mb-1">We have hundreds of guides for you</p>
                      <p className="text-sm text-muted-foreground">
                        Browse our full library to find exactly what you need.
                      </p>
                    </CardContent>
                  </Card>
                </div>
              )}
            </div>

            {/* Summary card */}
            <div
            >
              <Card className="rounded-xl border border-border bg-muted/30 mb-8">
                <CardContent className="p-5 text-sm space-y-2">
                  <p className="font-semibold mb-3">Your preferences</p>
                  <p>
                    <strong>Device:</strong>{' '}
                    {deviceOptions.find((d) => d.id === data.device)?.label ?? 'Not specified'}
                  </p>
                  <p>
                    <strong>Main frustrations:</strong>{' '}
                    {data.frustrations.length > 0 ? data.frustrations.join(', ') : 'None selected'}
                  </p>
                  <p>
                    <strong>Confidence:</strong>{' '}
                    {confidenceOptions.find((c) => c.id === data.confidence)?.label ?? 'Not specified'}
                  </p>
                </CardContent>
              </Card>
            </div>

            <div className="flex gap-3 justify-center">
              <Button onClick={finish} className="rounded-xl gap-2">
                {user ? 'Go to My Dashboard' : 'Browse All Guides'}{' '}
                <ArrowRight className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </main>
        <Footer />
      </>
    );
  }

  return (
    <>
      <SEOHead
        title="Get Started with TekSure | Onboarding"
        description="Tell us a little about yourself so we can recommend the right guides and tools for you."
        path="/onboarding"
      />
      <Navbar />
      <main className="min-h-screen bg-background">
        <div className="container py-16 max-w-2xl mx-auto">
          {/* Header */}
          <div
            className="mb-8"
          >
            <h1 className="text-3xl md:text-4xl font-bold tracking-tight mb-3">
              Let's get you started
            </h1>
            <p className="text-muted-foreground text-lg">
              Answer 3 quick questions so we can point you to the right guides and tools.
            </p>
          </div>

          {/* Progress dots */}
          <div
            className="flex items-center justify-center gap-3 mb-10"
          >
            {progressDots.map((i) => (
              <div
                key={i}
                className={`h-3 w-3 rounded-full transition-all duration-300 ${
                  i === step
                    ? 'bg-primary scale-125'
                    : i < step
                    ? 'bg-primary/50'
                    : 'bg-border'
                }`}
              />
            ))}
          </div>

          <>
            {/* ── Step 0: Device ── */}
            {step === 0 && (
              <div key="device" {...slide}>
                <h2 className="text-2xl font-bold tracking-tight mb-2">
                  What device do you use most?
                </h2>
                <p className="text-muted-foreground mb-8">
                  This helps us show you the right guides for your device.
                </p>

                <div className="grid gap-3 sm:grid-cols-2 mb-8">
                  {deviceOptions.map((opt) => (
                    <button
                      key={opt.id}
                      onClick={() => {
                        setData((prev) => ({ ...prev, device: opt.id }));
                        setStep(1);
                      }}
                      className={`flex items-center gap-4 p-5 rounded-xl border transition-all text-left min-h-[56px] ${
                        data.device === opt.id
                          ? 'border-primary bg-primary/5'
                          : 'border-border bg-card hover:border-primary/30 hover:bg-card/80'
                      }`}
                    >
                      <opt.icon className="h-7 w-7 text-primary shrink-0" />
                      <span className="font-semibold text-base">{opt.label}</span>
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* ── Step 1: Frustrations ── */}
            {step === 1 && (
              <div key="frustrations" {...slide}>
                <h2 className="text-2xl font-bold tracking-tight mb-2">
                  What's your biggest tech frustration?
                </h2>
                <p className="text-muted-foreground mb-8">
                  Pick up to 3 things that bother you most. We'll find guides to help.
                </p>

                <div className="grid gap-3 sm:grid-cols-2 mb-8">
                  {frustrationOptions.map((f) => {
                    const selected = data.frustrations.includes(f);
                    const disabled = !selected && data.frustrations.length >= 3;
                    return (
                      <button
                        key={f}
                        onClick={() => toggleFrustration(f)}
                        disabled={disabled}
                        className={`flex items-center gap-3 p-4 rounded-xl border transition-all text-left min-h-[52px] ${
                          selected
                            ? 'border-primary bg-primary/5'
                            : disabled
                            ? 'border-border bg-muted/30 opacity-50 cursor-not-allowed'
                            : 'border-border bg-card hover:border-primary/30 hover:bg-card/80'
                        }`}
                      >
                        <div
                          className={`h-5 w-5 rounded border-2 flex items-center justify-center shrink-0 transition-colors ${
                            selected ? 'border-primary bg-primary' : 'border-border'
                          }`}
                        >
                          {selected && (
                            <CheckCircle2 className="h-3.5 w-3.5 text-primary-foreground" />
                          )}
                        </div>
                        <span className="text-sm font-medium">{f}</span>
                      </button>
                    );
                  })}
                </div>

                <p className="text-xs text-muted-foreground mb-6 text-center">
                  {data.frustrations.length}/3 selected
                </p>

                <div className="flex gap-3">
                  <Button
                    variant="outline"
                    onClick={() => setStep(0)}
                    className="rounded-xl"
                  >
                    &#8592; Back
                  </Button>
                  <Button
                    disabled={data.frustrations.length === 0}
                    onClick={() => setStep(2)}
                    className="ml-auto rounded-xl gap-2"
                  >
                    Continue <ArrowRight className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            )}

            {/* ── Step 2: Confidence ── */}
            {step === 2 && (
              <div key="confidence" {...slide}>
                <h2 className="text-2xl font-bold tracking-tight mb-2">
                  How confident are you with technology?
                </h2>
                <p className="text-muted-foreground mb-8">
                  No wrong answers here. This helps us match the right difficulty level for you.
                </p>

                <div className="space-y-3 mb-8">
                  {confidenceOptions.map((opt) => (
                    <button
                      key={opt.id}
                      onClick={() => {
                        setData((prev) => ({ ...prev, confidence: opt.id }));
                      }}
                      className={`w-full flex items-center gap-4 p-5 rounded-xl border transition-all text-left min-h-[64px] ${
                        data.confidence === opt.id
                          ? 'border-primary bg-primary/5'
                          : 'border-border bg-card hover:border-primary/30 hover:bg-card/80'
                      }`}
                    >
                      <opt.icon className="h-7 w-7 text-primary shrink-0" />
                      <div>
                        <span className="font-semibold text-base block">{opt.label}</span>
                        <span className="text-sm text-muted-foreground">{opt.desc}</span>
                      </div>
                    </button>
                  ))}
                </div>

                <div className="flex gap-3">
                  <Button
                    variant="outline"
                    onClick={() => setStep(1)}
                    className="rounded-xl"
                  >
                    &#8592; Back
                  </Button>
                  <Button
                    disabled={!data.confidence}
                    onClick={() => setStep(3)}
                    className="ml-auto rounded-xl gap-2"
                  >
                    See my results <ArrowRight className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            )}
          </>
        </div>
      </main>
      <Footer />
    </>
  );
}

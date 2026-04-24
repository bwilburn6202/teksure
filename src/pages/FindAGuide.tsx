import { useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { Badge } from '@/components/ui/badge';
import { ArrowRight, RotateCcw, ChevronLeft, Compass } from 'lucide-react';
import { guides, type Guide, type GuideCategory, categoryLabels } from '@/data/guides';
import { GuideThumbnail } from '@/components/GuideThumbnail';

type Device = 'phone' | 'tablet' | 'computer-windows' | 'computer-mac' | 'smart-home' | 'tv' | 'any';
type Topic = 'safety' | 'setup' | 'apps' | 'money' | 'health' | 'internet' | 'basics' | 'ai';
type Level = 'Beginner' | 'Intermediate' | 'Advanced';

interface Answers {
  device?: Device;
  topic?: Topic;
  level?: Level;
}

const DEVICE_OPTIONS: Array<{ value: Device; label: string; hint: string }> = [
  { value: 'phone',             label: 'Phone',              hint: 'iPhone or Android' },
  { value: 'tablet',            label: 'Tablet',             hint: 'iPad or Android tablet' },
  { value: 'computer-windows',  label: 'Windows computer',   hint: 'PC or laptop with Windows' },
  { value: 'computer-mac',      label: 'Mac',                hint: 'MacBook or iMac' },
  { value: 'smart-home',        label: 'Smart home device',  hint: 'Alexa, Nest, doorbell, etc.' },
  { value: 'tv',                label: 'TV or streaming',    hint: 'Roku, Fire TV, Apple TV' },
  { value: 'any',               label: 'Not sure / any',     hint: 'Show me everything' },
];

const TOPIC_OPTIONS: Array<{ value: Topic; label: string; hint: string }> = [
  { value: 'safety',   label: 'Safety & scams',       hint: 'Passwords, phishing, fraud' },
  { value: 'setup',    label: 'Setting something up', hint: 'New device, new app' },
  { value: 'apps',     label: 'Using an app',         hint: 'A specific app is confusing' },
  { value: 'money',    label: 'Money & banking',      hint: 'Paying, banking, taxes' },
  { value: 'health',   label: 'Health tech',          hint: 'Trackers, medical apps' },
  { value: 'internet', label: 'Internet / WiFi',      hint: 'Slow connection, setup' },
  { value: 'basics',   label: 'Learning the basics',  hint: 'How tech works' },
  { value: 'ai',       label: 'AI tools',             hint: 'ChatGPT, Siri, etc.' },
];

const LEVEL_OPTIONS: Array<{ value: Level; label: string; hint: string }> = [
  { value: 'Beginner',     label: 'New to this',    hint: 'Start simple' },
  { value: 'Intermediate', label: 'Some experience', hint: 'I know the basics' },
  { value: 'Advanced',     label: 'Pretty comfortable', hint: 'Show me more detail' },
];

// Map each (device, topic) combo to the GuideCategory values most relevant.
// Guides matching ANY of the listed categories are prioritized.
function relevantCategories(device: Device, topic: Topic): GuideCategory[] {
  const byTopic: Record<Topic, GuideCategory[]> = {
    safety:   ['safety-guides'],
    setup:    ['how-to', 'essential-skills'],
    apps:     ['app-guides', 'social-media'],
    money:    ['financial-tech', 'government-civic'],
    health:   ['health-tech'],
    internet: ['internet-connectivity'],
    basics:   ['essential-skills', 'tips-tricks', 'life-transitions'],
    ai:       ['ai-guides', 'ai-advanced'],
  };
  const byDevice: Record<Device, GuideCategory[]> = {
    phone:              ['phone-guides'],
    tablet:             ['phone-guides'],
    'computer-windows': ['windows-guides'],
    'computer-mac':     ['mac-guides'],
    'smart-home':       ['smart-home'],
    tv:                 ['entertainment'],
    any:                [],
  };
  return Array.from(new Set([...byTopic[topic], ...byDevice[device]]));
}

function scoreGuide(g: Guide, device: Device, topic: Topic, level: Level, categories: GuideCategory[]): number {
  let score = 0;
  if (categories.includes(g.category)) score += 10;
  if (g.difficulty === level) score += 4;
  if (g.verifiedHelpful) score += 2;

  // Light tag bonuses based on device/topic
  const tags = (g.tags ?? []).map((t) => t.toLowerCase());
  const deviceTagHints: Record<Device, string[]> = {
    phone: ['iphone', 'android', 'phone'],
    tablet: ['ipad', 'tablet'],
    'computer-windows': ['windows', 'pc'],
    'computer-mac': ['mac', 'macos'],
    'smart-home': ['alexa', 'smart home', 'nest', 'echo'],
    tv: ['roku', 'fire tv', 'apple tv', 'streaming'],
    any: [],
  };
  for (const hint of deviceTagHints[device]) {
    if (tags.some((t) => t.includes(hint))) {
      score += 1;
      break;
    }
  }
  return score;
}

const FindAGuide = () => {
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState<Answers>({});

  const totalSteps = 3;
  const progress = (step / totalSteps) * 100;

  const recommended: Guide[] = useMemo(() => {
    if (!answers.device || !answers.topic || !answers.level) return [];
    const cats = relevantCategories(answers.device, answers.topic);
    const scored = guides
      .map((g) => ({ g, score: scoreGuide(g, answers.device!, answers.topic!, answers.level!, cats) }))
      .filter(({ score }) => score > 0)
      .sort((a, b) => b.score - a.score);
    return scored.slice(0, 6).map(({ g }) => g);
  }, [answers]);

  const reset = () => {
    setStep(0);
    setAnswers({});
  };

  const back = () => setStep((s) => Math.max(0, s - 1));

  const pickDevice = (v: Device) => {
    setAnswers((a) => ({ ...a, device: v }));
    setStep(1);
  };
  const pickTopic = (v: Topic) => {
    setAnswers((a) => ({ ...a, topic: v }));
    setStep(2);
  };
  const pickLevel = (v: Level) => {
    setAnswers((a) => ({ ...a, level: v }));
    setStep(3);
  };

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <SEOHead
        title="Find the Right Guide — TekSure"
        description="Answer three short questions and we'll point you to the best TekSure guide for what you need."
        path="/find-a-guide"
      />
      <Navbar />

      <main id="main-content" tabIndex={-1} className="flex-1 w-full max-w-3xl mx-auto px-4 py-12 outline-none">
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-primary mb-3">
            <Compass className="h-4 w-4" />
            Guide Finder
          </div>
          <h1 className="text-3xl md:text-4xl font-bold tracking-tight mb-3">Find the right guide in 30 seconds</h1>
          <p className="text-muted-foreground text-lg max-w-xl mx-auto">
            Three quick questions. We'll match you to the best guides from our library.
          </p>
        </div>

        {step < totalSteps && (
          <div className="mb-6">
            <div className="flex items-center justify-between mb-2 text-sm text-muted-foreground">
              <span>Question {step + 1} of {totalSteps}</span>
              {step > 0 && (
                <Button variant="ghost" size="sm" onClick={back} className="h-7 px-2 text-xs">
                  <ChevronLeft className="h-3 w-3 mr-1" /> Back
                </Button>
              )}
            </div>
            <Progress value={progress} />
          </div>
        )}

        {step === 0 && (
          <Card>
            <CardContent className="p-6 md:p-8">
              <h2 className="text-xl font-semibold mb-2">What kind of device is this about?</h2>
              <p className="text-sm text-muted-foreground mb-6">Pick the closest match. You can always change it later.</p>
              <div className="grid gap-3 sm:grid-cols-2">
                {DEVICE_OPTIONS.map((opt) => (
                  <button
                    key={opt.value}
                    onClick={() => pickDevice(opt.value)}
                    className="text-left rounded-xl border border-border hover:border-primary hover:bg-primary/5 transition-colors px-4 py-3"
                  >
                    <div className="font-medium">{opt.label}</div>
                    <div className="text-xs text-muted-foreground mt-0.5">{opt.hint}</div>
                  </button>
                ))}
              </div>
            </CardContent>
          </Card>
        )}

        {step === 1 && (
          <Card>
            <CardContent className="p-6 md:p-8">
              <h2 className="text-xl font-semibold mb-2">What are you trying to figure out?</h2>
              <p className="text-sm text-muted-foreground mb-6">Pick the closest topic.</p>
              <div className="grid gap-3 sm:grid-cols-2">
                {TOPIC_OPTIONS.map((opt) => (
                  <button
                    key={opt.value}
                    onClick={() => pickTopic(opt.value)}
                    className="text-left rounded-xl border border-border hover:border-primary hover:bg-primary/5 transition-colors px-4 py-3"
                  >
                    <div className="font-medium">{opt.label}</div>
                    <div className="text-xs text-muted-foreground mt-0.5">{opt.hint}</div>
                  </button>
                ))}
              </div>
            </CardContent>
          </Card>
        )}

        {step === 2 && (
          <Card>
            <CardContent className="p-6 md:p-8">
              <h2 className="text-xl font-semibold mb-2">How comfortable are you with this already?</h2>
              <p className="text-sm text-muted-foreground mb-6">We'll match guides to your level.</p>
              <div className="grid gap-3 sm:grid-cols-3">
                {LEVEL_OPTIONS.map((opt) => (
                  <button
                    key={opt.value}
                    onClick={() => pickLevel(opt.value)}
                    className="text-left rounded-xl border border-border hover:border-primary hover:bg-primary/5 transition-colors px-4 py-3"
                  >
                    <div className="font-medium">{opt.label}</div>
                    <div className="text-xs text-muted-foreground mt-0.5">{opt.hint}</div>
                  </button>
                ))}
              </div>
            </CardContent>
          </Card>
        )}

        {step === totalSteps && (
          <div className="space-y-6">
            <Card>
              <CardContent className="p-6 md:p-8">
                <div className="flex items-start justify-between gap-4 mb-6 flex-wrap">
                  <div>
                    <h2 className="text-xl font-semibold mb-1">Top matches for you</h2>
                    <p className="text-sm text-muted-foreground">
                      Based on: {answers.device && DEVICE_OPTIONS.find((o) => o.value === answers.device)?.label} ·{' '}
                      {answers.topic && TOPIC_OPTIONS.find((o) => o.value === answers.topic)?.label} ·{' '}
                      {answers.level}
                    </p>
                  </div>
                  <Button variant="outline" size="sm" onClick={reset}>
                    <RotateCcw className="h-3.5 w-3.5 mr-1.5" /> Start over
                  </Button>
                </div>

                {recommended.length === 0 ? (
                  <div className="text-center py-8">
                    <p className="text-muted-foreground mb-4">
                      No perfect matches yet. Try browsing all guides instead.
                    </p>
                    <Button asChild>
                      <Link to="/guides">Browse all guides <ArrowRight className="h-4 w-4 ml-1" /></Link>
                    </Button>
                  </div>
                ) : (
                  <div className="space-y-3">
                    {recommended.map((g) => (
                      <Link
                        key={g.slug}
                        to={`/guides/${g.slug}`}
                        className="block rounded-xl border border-border hover:border-primary hover:bg-primary/5 transition-colors px-4 py-3"
                      >
                        <div className="flex items-start gap-3">
                          <GuideThumbnail category={g.category} size="h-6 w-6" />
                          <div className="flex-1 min-w-0">
                            <div className="font-medium text-base mb-0.5 truncate">{g.title}</div>
                            <div className="text-sm text-muted-foreground line-clamp-2">{g.excerpt}</div>
                            <div className="flex items-center gap-2 mt-2 flex-wrap">
                              <Badge variant="secondary" className="text-[10px]">
                                {categoryLabels[g.category] ?? g.category}
                              </Badge>
                              {g.difficulty && (
                                <Badge variant="outline" className="text-[10px]">{g.difficulty}</Badge>
                              )}
                              <span className="text-[11px] text-muted-foreground">{g.readTime}</span>
                            </div>
                          </div>
                        </div>
                      </Link>
                    ))}
                  </div>
                )}
              </CardContent>
            </Card>

            <div className="text-center">
              <Button variant="ghost" asChild>
                <Link to="/guides">Or browse all 1,000+ guides <ArrowRight className="h-4 w-4 ml-1" /></Link>
              </Button>
            </div>
          </div>
        )}
      </main>

      <Footer />
    </div>
  );
};

export default FindAGuide;

import { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Monitor, Tablet, Laptop, RotateCcw, ChevronRight, CheckCircle2, ArrowRight,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { SEOHead } from '@/components/SEOHead';

/* ── Questions ───────────────────────────────────── */

interface Choice {
  label: string;
  emoji: string;
  value: string;
}

interface Question {
  id: string;
  text: string;
  subtext?: string;
  choices: Choice[];
}

const questions: Question[] = [
  {
    id: 'usage',
    text: 'What will you mainly use it for?',
    subtext: 'Pick the one that fits you best.',
    choices: [
      { label: 'Emails, browsing & video calls', emoji: '', value: 'light' },
      { label: 'Office work, spreadsheets & documents', emoji: '', value: 'office' },
      { label: 'Photos, video editing & creative work', emoji: '', value: 'creative' },
      { label: 'Entertainment — Netflix, YouTube, games', emoji: '', value: 'media' },
    ],
  },
  {
    id: 'location',
    text: 'Where will you use it most?',
    choices: [
      { label: 'Mostly at one desk at home', emoji: '', value: 'desk' },
      { label: 'Between home and one other place', emoji: '', value: 'semi' },
      { label: 'On the move — travel, commute, outdoors', emoji: '', value: 'mobile' },
    ],
  },
  {
    id: 'keyboard',
    text: 'How important is a full keyboard to you?',
    choices: [
      { label: 'Essential — I type a lot', emoji: '⌨', value: 'essential' },
      { label: 'Nice to have but not required', emoji: '', value: 'nice' },
      { label: 'Not important — I prefer touch', emoji: '', value: 'no' },
    ],
  },
  {
    id: 'budget',
    text: "What's your rough budget?",
    subtext: 'Including all taxes and any extras.',
    choices: [
      { label: 'Under $300 / $300', emoji: '', value: 'low' },
      { label: '$300–$700 / $300–$700', emoji: '', value: 'mid' },
      { label: '$700+ / $700+', emoji: '', value: 'high' },
    ],
  },
  {
    id: 'techLevel',
    text: 'How comfortable are you with technology?',
    choices: [
      { label: 'Beginner — I need simple and easy', emoji: '', value: 'beginner' },
      { label: 'Some experience — I manage OK', emoji: '', value: 'mid' },
      { label: 'Confident — I\'m fairly tech-savvy', emoji: '', value: 'advanced' },
    ],
  },
];

/* ── Scoring logic ───────────────────────────────── */

type Answers = Record<string, string>;

interface DeviceResult {
  device: 'tablet' | 'laptop' | 'desktop';
  title: string;
  emoji: string;
  tagline: string;
  description: string;
  pros: string[];
  cons: string[];
  examples: { name: string; price: string; why: string }[];
  tipLink?: string;
}

function getRecommendation(answers: Answers): DeviceResult {
  let tabletScore = 0;
  let laptopScore = 0;
  let desktopScore = 0;

  // Usage
  if (answers.usage === 'light') { tabletScore += 3; laptopScore += 2; }
  if (answers.usage === 'office') { laptopScore += 3; desktopScore += 2; }
  if (answers.usage === 'creative') { desktopScore += 3; laptopScore += 2; }
  if (answers.usage === 'media') { tabletScore += 3; laptopScore += 1; desktopScore += 1; }

  // Location
  if (answers.location === 'desk') { desktopScore += 3; laptopScore += 1; }
  if (answers.location === 'semi') { laptopScore += 3; tabletScore += 1; }
  if (answers.location === 'mobile') { tabletScore += 3; laptopScore += 2; }

  // Keyboard
  if (answers.keyboard === 'essential') { laptopScore += 3; desktopScore += 2; }
  if (answers.keyboard === 'nice') { laptopScore += 2; tabletScore += 1; }
  if (answers.keyboard === 'no') { tabletScore += 3; }

  // Budget
  if (answers.budget === 'low') { tabletScore += 2; }
  if (answers.budget === 'mid') { laptopScore += 2; tabletScore += 1; }
  if (answers.budget === 'high') { desktopScore += 2; laptopScore += 1; }

  // Tech level
  if (answers.techLevel === 'beginner') { tabletScore += 2; laptopScore += 1; }
  if (answers.techLevel === 'mid') { laptopScore += 2; }
  if (answers.techLevel === 'advanced') { desktopScore += 2; laptopScore += 1; }

  const scores = { tablet: tabletScore, laptop: laptopScore, desktop: desktopScore };
  const winner = (Object.entries(scores).sort((a, b) => b[1] - a[1])[0][0]) as 'tablet' | 'laptop' | 'desktop';

  const results: Record<'tablet' | 'laptop' | 'desktop', DeviceResult> = {
    tablet: {
      device: 'tablet',
      title: 'Tablet',
      emoji: '',
      tagline: 'Simple, light, and perfect for everyday tasks',
      description: 'Based on your answers, a tablet is the best fit for you. Tablets are lightweight, easy to use, have great battery life, and are ideal for browsing, video calls, reading, and entertainment.',
      pros: [
        'Lightweight — easy to hold and carry',
        'Very simple to use — great for beginners',
        'Long battery life (8–12 hours)',
        'More affordable than laptops',
        'Great for Netflix, YouTube & video calls',
      ],
      cons: [
        'Typing can be awkward without a keyboard case',
        'Not ideal for complex office work',
        'Less powerful for editing or heavy software',
      ],
      examples: [
        { name: 'Apple iPad (10th gen)', price: 'From ~$349 / $329', why: 'Best beginner tablet — simple, reliable, and great support' },
        { name: 'Samsung Galaxy Tab A9', price: 'From ~$229 / $220', why: 'Excellent value for browsing and streaming' },
        { name: 'Amazon Fire HD 10', price: 'From ~$149 / $140', why: 'Budget-friendly and easy to set up' },
      ],
      tipLink: '/guides/phone-setup',
    },
    laptop: {
      device: 'laptop',
      title: 'Laptop',
      emoji: '',
      tagline: 'The most versatile choice for most people',
      description: 'A laptop is the best all-round choice for you. It gives you the power of a full computer with the flexibility to use it anywhere. Perfect for work, learning, and staying connected.',
      pros: [
        'Powerful enough for most tasks',
        'Portable — use it anywhere',
        'Full keyboard for easy typing',
        'Works for emails, office, streaming & more',
        'Wide range of prices to suit all budgets',
      ],
      cons: [
        'Heavier than a tablet',
        'Battery may need charging daily',
        'More to set up than a tablet',
      ],
      examples: [
        { name: 'Apple MacBook Air M2', price: 'From ~$1,099 / $1,099', why: 'Best for beginners — extremely reliable, great battery' },
        { name: 'Microsoft Surface Laptop Go 3', price: 'From ~$799 / $799', why: 'Lightweight Windows laptop, great for home use' },
        { name: 'Acer Aspire 3', price: 'From ~$299 / $299', why: 'Budget Windows laptop — solid for everyday tasks' },
      ],
      tipLink: '/guides/restart-pc-windows',
    },
    desktop: {
      device: 'desktop',
      title: 'Desktop Computer',
      emoji: '',
      tagline: 'Maximum power for serious work at home',
      description: 'Based on how you plan to use it, a desktop computer is your best bet. Desktops offer the most power, best screen size, and are easier to upgrade over time.',
      pros: [
        'Most powerful option — great for demanding tasks',
        'Larger screen is easier on the eyes',
        'No battery to worry about',
        'Easier and cheaper to repair/upgrade',
        'Best value for money at the high end',
      ],
      cons: [
        'Not portable — stays in one place',
        'Requires a separate monitor, keyboard & mouse',
        'Takes up more space',
      ],
      examples: [
        { name: 'Apple Mac Mini M2', price: 'From ~$649 / $599', why: 'Compact, powerful, very easy to use' },
        { name: 'Dell Inspiron Desktop', price: 'From ~$499 / $499', why: 'Reliable Windows desktop for home office use' },
        { name: 'HP Pavilion Desktop', price: 'From ~$399 / $399', why: 'Good all-rounder at a competitive price' },
      ],
      tipLink: '/guides/restart-pc-windows',
    },
  };

  return results[winner];
}

/* ── Main component ─────────────────────────────── */

export default function DeviceChooser() {
  const [step, setStep] = useState(0); // 0 = intro, 1-5 = questions, 6 = result
  const [answers, setAnswers] = useState<Answers>({});

  const currentQuestion = questions[step - 1];
  const progress = step === 0 ? 0 : Math.round((step / questions.length) * 100);
  const result = step > questions.length ? getRecommendation(answers) : null;

  const handleChoice = (value: string) => {
    const newAnswers = { ...answers, [currentQuestion.id]: value };
    setAnswers(newAnswers);
    if (step >= questions.length) {
      setStep(questions.length + 1);
    } else {
      setStep(s => s + 1);
    }
  };

  const reset = () => {
    setStep(0);
    setAnswers({});
  };

  const DeviceIcon = result?.device === 'tablet' ? Tablet : result?.device === 'laptop' ? Laptop : Monitor;

  return (
    <>
      <SEOHead
        title="Tablet vs Laptop vs Desktop — Which Should You Buy? | TekSure"
        description="Answer 5 quick questions to find out which device is right for you — tablet, laptop, or desktop. Free, unbiased recommendations for beginners."
        path="/tools/device-chooser"
      />
      <main className="container max-w-xl py-12 min-h-[70vh]">

        {/* Header */}
        <div className="flex items-start gap-3 mb-8">
          <Laptop className="h-8 w-8 text-primary shrink-0 mt-0.5" />
          <div>
            <h1 className="text-3xl font-bold">Device Chooser</h1>
            <p className="text-muted-foreground mt-1">Tablet, laptop, or desktop? Find out in 5 questions.</p>
          </div>
        </div>

        <>

          {/* Intro */}
          {step === 0 && (
            <div key="intro">
              <Card className="mb-6">
                <CardContent className="py-8 text-center">
                  <div className="flex justify-center gap-6 mb-6 text-5xl">
                    <span></span><span></span><span></span>
                  </div>
                  <h2 className="text-xl font-semibold mb-3">Not sure which device to buy?</h2>
                  <p className="text-muted-foreground text-sm leading-relaxed max-w-sm mx-auto">
                    This quick quiz asks 5 easy questions about how you'll use it, where, and your budget — then gives you a personalized, honest recommendation.
                  </p>
                </CardContent>
              </Card>

              <div className="grid grid-cols-3 gap-3 mb-8 text-center text-sm">
                {[
                  { emoji: '', label: '2 minutes' },
                  { emoji: '', label: '5 questions' },
                  { emoji: '🆓', label: 'Completely free' },
                ].map(item => (
                  <div key={item.label} className="bg-muted/50 rounded-xl p-3">
                    <div className="text-2xl mb-1">{item.emoji}</div>
                    <div className="font-medium text-xs text-muted-foreground">{item.label}</div>
                  </div>
                ))}
              </div>

              <Button size="lg" className="w-full h-14 text-base gap-2" onClick={() => setStep(1)}>
                Start Quiz <ChevronRight className="h-5 w-5" />
              </Button>
            </div>
          )}

          {/* Question */}
          {step >= 1 && step <= questions.length && currentQuestion && (
            <div key={`q-${step}`}>
              <div className="flex items-center justify-between mb-4 text-sm text-muted-foreground">
                <span>Question {step} of {questions.length}</span>
                <span>{progress}% complete</span>
              </div>
              <Progress value={progress} className="h-1.5 mb-8" />

              <Card className="mb-6">
                <CardContent className="py-7 text-center">
                  <p className="text-xl font-semibold mb-1">{currentQuestion.text}</p>
                  {currentQuestion.subtext && (
                    <p className="text-sm text-muted-foreground mt-2">{currentQuestion.subtext}</p>
                  )}
                </CardContent>
              </Card>

              <div className="space-y-3 mb-6">
                {currentQuestion.choices.map(choice => (
                  <button
                    key={choice.value}
                    onClick={() => handleChoice(choice.value)}
                    className="w-full flex items-center gap-4 p-4 rounded-xl border border-border bg-card hover:border-primary hover:shadow-md hover:bg-primary/5 transition-all text-left group"
                  >
                    <span className="text-2xl shrink-0">{choice.emoji}</span>
                    <span className="font-medium group-hover:text-primary transition-colors">{choice.label}</span>
                    <ChevronRight className="h-4 w-4 text-muted-foreground ml-auto group-hover:text-primary transition-colors" />
                  </button>
                ))}
              </div>

              {step > 1 && (
                <Button variant="ghost" size="sm" onClick={() => setStep(s => s - 1)} className="text-muted-foreground gap-2">
                  ← Back
                </Button>
              )}
            </div>
          )}

          {/* Result */}
          {step > questions.length && result && (
            <div key="result">

              <div className="text-center mb-8">
                <div className="text-6xl mb-3">{result.emoji}</div>
                <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-3">
                  <CheckCircle2 className="h-4 w-4" />
                  Our recommendation
                </div>
                <h2 className="text-3xl font-bold mb-1">Get a {result.title}</h2>
                <p className="text-muted-foreground">{result.tagline}</p>
              </div>

              <Card className="mb-6 border-primary/30">
                <CardContent className="py-6">
                  <p className="text-sm text-muted-foreground leading-relaxed mb-5">{result.description}</p>

                  <div className="grid sm:grid-cols-2 gap-4 mb-2">
                    <div>
                      <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-2"> Why it suits you</p>
                      <ul className="space-y-2">
                        {result.pros.map(p => (
                          <li key={p} className="flex items-start gap-2 text-sm">
                            <CheckCircle2 className="h-3.5 w-3.5 text-green-500 shrink-0 mt-0.5" />
                            {p}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-2"> Things to know</p>
                      <ul className="space-y-2">
                        {result.cons.map(c => (
                          <li key={c} className="flex items-start gap-2 text-sm text-muted-foreground">
                            <span className="text-amber-500 shrink-0">•</span>
                            {c}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Examples */}
              <h3 className="text-base font-semibold mb-3"> Specific models to consider</h3>
              <div className="space-y-3 mb-8">
                {result.examples.map((ex, i) => (
                  <div key={i} className="flex items-start gap-3 p-3 rounded-lg bg-muted/50 border border-border">
                    <Badge variant="outline" className="shrink-0 text-xs px-2">{i + 1}</Badge>
                    <div className="min-w-0">
                      <p className="font-medium text-sm">{ex.name}</p>
                      <p className="text-xs text-primary font-medium">{ex.price}</p>
                      <p className="text-xs text-muted-foreground mt-0.5">{ex.why}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="flex flex-col sm:flex-row gap-3 mb-6">
                <Button asChild className="flex-1 gap-2">
                  <Link to="/get-help">
                    <ArrowRight className="h-4 w-4" />
                    Ask a Tech for Advice
                  </Link>
                </Button>
                <Button variant="outline" asChild className="flex-1 gap-2">
                  <Link to="/tools/device-compare">
                    Compare Devices Side by Side
                  </Link>
                </Button>
              </div>

              <Button variant="ghost" onClick={reset} className="gap-2 text-muted-foreground w-full">
                <RotateCcw className="h-4 w-4" /> Take the quiz again
              </Button>
            </div>
          )}

        </>
      </main>
    </>
  );
}

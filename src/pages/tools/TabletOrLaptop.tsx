import { useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { PageBreadcrumb } from '@/components/PageBreadcrumb';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Label } from '@/components/ui/label';
import {
  Tablet, Laptop, ChevronRight, type LucideIcon,
} from 'lucide-react';

interface Question {
  id: string;
  question: string;
  options: { value: string; label: string; weight: number }[]; // positive = laptop, negative = tablet
}

const QUESTIONS: Question[] = [
  {
    id: 'docs',
    question: 'How often do you write longer documents (letters, journals, taxes)?',
    options: [
      { value: 'often',     label: 'Often — at least weekly',           weight: 30 },
      { value: 'sometimes', label: 'Sometimes — once a month or so',     weight: 5 },
      { value: 'rarely',    label: 'Rarely or never',                    weight: -20 },
    ],
  },
  {
    id: 'video',
    question: 'How often do you watch videos, FaceTime, or use streaming apps?',
    options: [
      { value: 'every-day', label: 'Every day or near-daily',           weight: -25 },
      { value: 'sometimes', label: 'A few times a week',                 weight: -5 },
      { value: 'rarely',    label: 'Rarely',                              weight: 5 },
    ],
  },
  {
    id: 'taxes',
    question: 'Do you do banking, taxes, or shopping that benefits from a real keyboard?',
    options: [
      { value: 'yes',       label: 'Yes, on a regular basis',           weight: 25 },
      { value: 'a-bit',     label: 'A little — but mostly bills, simple forms', weight: 10 },
      { value: 'not-really', label: 'Not really, the phone handles those',  weight: -15 },
    ],
  },
  {
    id: 'in-bed',
    question: 'Do you imagine using it from the couch, recliner, or bed?',
    options: [
      { value: 'yes',       label: 'Yes — most of the time',             weight: -30 },
      { value: 'sometimes', label: 'Sometimes',                          weight: -5 },
      { value: 'no',        label: 'I would sit at a desk or table',      weight: 20 },
    ],
  },
  {
    id: 'printer',
    question: 'Do you print things or save documents to a USB drive?',
    options: [
      { value: 'often',     label: 'Often',                              weight: 25 },
      { value: 'sometimes', label: 'Sometimes',                          weight: 10 },
      { value: 'never',     label: 'Never',                              weight: -10 },
    ],
  },
  {
    id: 'eyesight',
    question: 'How is your eyesight at a normal computer-screen distance?',
    options: [
      { value: 'fine',      label: 'Fine with reading glasses if needed', weight: 0 },
      { value: 'tablet',    label: 'I prefer the bigger phone-style text — pinch to zoom is helpful', weight: -15 },
      { value: 'laptop',    label: 'I want a big screen I can keep at a distance', weight: 15 },
    ],
  },
  {
    id: 'budget',
    question: 'What is your budget?',
    options: [
      { value: 'tight',     label: 'Tight — under $400',                  weight: -10 },
      { value: 'mid',       label: 'Around $500–$800',                    weight: 5 },
      { value: 'flex',      label: 'I will pay for what works long-term',  weight: 0 },
    ],
  },
  {
    id: 'travel',
    question: 'Will you carry it places (doctor visits, trips, family)?',
    options: [
      { value: 'lots',      label: 'Lots — I want it small and light',    weight: -15 },
      { value: 'sometimes', label: 'Sometimes',                            weight: 0 },
      { value: 'home',      label: 'It will mostly stay at home',          weight: 5 },
    ],
  },
];

interface Recommendation {
  primary: 'tablet' | 'laptop' | 'either';
  modelLabel: string;
  modelWhy: string;
  modelPrice: string;
  alt?: { label: string; why: string };
}

function recommend(answers: Record<string, number>): Recommendation {
  const score = Object.values(answers).reduce((s, n) => s + n, 0);
  // Positive score → laptop. Negative → tablet. Near zero → either.

  if (score >= 30) {
    return {
      primary: 'laptop',
      modelLabel: 'A 14" laptop or Chromebook',
      modelWhy: 'You will write, print, and use it at a desk often. The keyboard, real ports, and a bigger screen pay back every day.',
      modelPrice: '$300–$700',
      alt: {
        label: 'Specific picks',
        why: 'Chromebook — Lenovo IdeaPad Chromebook ($299) for almost everyone. Laptop — Lenovo IdeaPad 3 ($550) or MacBook Air M3 ($1,000) if you already use iPhone.',
      },
    };
  }

  if (score <= -30) {
    return {
      primary: 'tablet',
      modelLabel: 'An iPad (10th gen or 11th gen)',
      modelWhy: 'You watch, FaceTime, and read more than you type. A tablet you hold is the better seat-companion.',
      modelPrice: '$330–$500',
      alt: {
        label: 'Specific picks',
        why: 'iPad 11th gen ($349) for most people. iPad Air M3 ($599) if budget allows. Amazon Fire HD 10 ($150) is a cheaper backup option but is a step down.',
      },
    };
  }

  return {
    primary: 'either',
    modelLabel: 'A 2-in-1 / detachable, or both',
    modelWhy: 'Your needs land in the middle. Two paths work: (1) a 2-in-1 like the Microsoft Surface Go ($550) — laptop and tablet in one device, or (2) buy a $329 iPad now and add a Bluetooth keyboard ($60) later if you find yourself writing more.',
    modelPrice: '$330–$700',
  };
}

export default function TabletOrLaptop() {
  const [answers, setAnswers] = useState<Record<string, { value: string; weight: number }>>({});

  const setAnswer = (qid: string, value: string, weight: number) => {
    setAnswers(prev => ({ ...prev, [qid]: { value, weight } }));
  };

  const allAnswered = Object.keys(answers).length === QUESTIONS.length;

  const rec = useMemo(
    () => allAnswered ? recommend(Object.fromEntries(Object.entries(answers).map(([k, v]) => [k, v.weight]))) : null,
    [answers, allAnswered],
  );

  const reset = () => setAnswers({});

  const Icon: LucideIcon = rec?.primary === 'laptop' ? Laptop : Tablet;

  return (
    <>
      <SEOHead
        title="Tablet or Laptop?"
        description="Eight questions and a clear recommendation. Should you buy a tablet, a laptop, or a 2-in-1? Plain English, US prices, no marketing."
        path="/tools/tablet-or-laptop"
      />
      <Navbar />

      <main className="min-h-screen bg-background">
        <section className="bg-gradient-to-br from-violet-50 via-background to-fuchsia-50 dark:from-violet-950/20 dark:to-fuchsia-950/20 border-b border-border py-10 px-4">
          <div className="container max-w-3xl mx-auto text-center">
            <div className="flex justify-center mb-3 gap-2">
              <div className="p-3 bg-violet-500/10 rounded-full">
                <Tablet className="h-7 w-7 text-violet-600" />
              </div>
              <div className="p-3 bg-violet-500/10 rounded-full">
                <Laptop className="h-7 w-7 text-violet-600" />
              </div>
            </div>
            <h1 className="text-3xl md:text-4xl font-bold mb-2">Tablet or Laptop?</h1>
            <p className="text-muted-foreground text-lg max-w-xl mx-auto">
              Answer 8 questions. Get one clear recommendation with US prices and specific picks.
            </p>
          </div>
        </section>

        <div className="container max-w-3xl mx-auto px-4 py-8">
          <PageBreadcrumb segments={[{ label: 'Tools', href: '/tools' }, { label: 'Tablet or Laptop?' }]} />

          {!rec ? (
            <Card className="border-border shadow-sm">
              <CardContent className="p-6">
                <p className="text-sm text-muted-foreground mb-5">Pick one answer per question. {QUESTIONS.length - Object.keys(answers).length} to go.</p>
                <div className="space-y-6">
                  {QUESTIONS.map((q, i) => (
                    <div key={q.id}>
                      <p className="font-medium text-sm mb-3">{i + 1}. {q.question}</p>
                      <RadioGroup
                        value={answers[q.id]?.value ?? ''}
                        onValueChange={(v) => {
                          const opt = q.options.find(o => o.value === v);
                          if (opt) setAnswer(q.id, v, opt.weight);
                        }}
                      >
                        {q.options.map(opt => (
                          <div key={opt.value} className="flex items-center gap-3 p-2 rounded-lg hover:bg-muted/40">
                            <RadioGroupItem value={opt.value} id={`${q.id}-${opt.value}`} />
                            <Label htmlFor={`${q.id}-${opt.value}`} className="text-sm cursor-pointer flex-1">{opt.label}</Label>
                          </div>
                        ))}
                      </RadioGroup>
                    </div>
                  ))}
                </div>
                {!allAnswered && (
                  <p className="text-xs text-muted-foreground mt-5">Your recommendation will appear once all 8 are answered.</p>
                )}
              </CardContent>
            </Card>
          ) : (
            <>
              <Card className="border-2 border-primary bg-primary/5 mb-6">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4 mb-3">
                    <div className="p-3 bg-primary/10 rounded-xl">
                      <Icon className="h-7 w-7 text-primary" />
                    </div>
                    <div>
                      <Badge className="mb-2">Recommendation</Badge>
                      <p className="text-2xl font-bold">{rec.modelLabel}</p>
                      <Badge variant="outline" className="mt-1">{rec.modelPrice}</Badge>
                    </div>
                  </div>
                  <p className="text-sm text-muted-foreground">{rec.modelWhy}</p>
                </CardContent>
              </Card>

              {rec.alt && (
                <Card className="border-border mb-6">
                  <CardContent className="p-5">
                    <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-2">{rec.alt.label}</p>
                    <p className="text-sm">{rec.alt.why}</p>
                  </CardContent>
                </Card>
              )}

              <Card className="border-border bg-muted/30 mb-6">
                <CardContent className="p-5">
                  <p className="text-sm font-semibold mb-2">Before you buy</p>
                  <ol className="space-y-1.5 text-xs text-muted-foreground">
                    <li className="flex gap-2"><span className="text-primary">1.</span><span>If a friend or family member can lend you theirs for a weekend, that beats any review.</span></li>
                    <li className="flex gap-2"><span className="text-primary">2.</span><span>Check the return policy — Best Buy is 15 days, Amazon is 30 days, Apple is 14 days. Worth knowing before you commit.</span></li>
                    <li className="flex gap-2"><span className="text-primary">3.</span><span>Skip the extended warranty unless it is AppleCare+ (which actually does pay off for accidents).</span></li>
                    <li className="flex gap-2"><span className="text-primary">4.</span><span>Refurbished is fine — Apple Certified Refurbished and Best Buy Open Box save 15–30% with a real warranty.</span></li>
                  </ol>
                </CardContent>
              </Card>

              <Button variant="outline" onClick={reset}>Start over</Button>
            </>
          )}

          <div className="mt-10 pt-8 border-t border-border">
            <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-3">Related</p>
            <div className="grid sm:grid-cols-3 gap-3">
              <Link to="/tools/device-chooser" className="p-3 rounded-lg border border-border hover:border-primary/50 hover:bg-primary/5 transition-all">
                <p className="font-medium text-sm">Device Chooser</p>
                <p className="text-xs text-muted-foreground mt-0.5">Wider device comparison.</p>
              </Link>
              <Link to="/tools/device-age-checker" className="p-3 rounded-lg border border-border hover:border-primary/50 hover:bg-primary/5 transition-all">
                <p className="font-medium text-sm">Device Age Checker</p>
                <p className="text-xs text-muted-foreground mt-0.5">Should you replace what you have first?</p>
              </Link>
              <Link to="/tools/grandparent-device-setup" className="p-3 rounded-lg border border-border hover:border-primary/50 hover:bg-primary/5 transition-all">
                <p className="font-medium text-sm">Grandparent Device Setup</p>
                <p className="text-xs text-muted-foreground mt-0.5">Once you pick, set it up well.</p>
              </Link>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}

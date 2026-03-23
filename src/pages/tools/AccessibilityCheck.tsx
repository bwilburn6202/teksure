import { useState } from 'react';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Accessibility, ChevronRight, ChevronLeft, RotateCcw, CheckCircle2, AlertTriangle, Info, ExternalLink } from 'lucide-react';
import { Link } from 'react-router-dom';

interface Question {
  id: string;
  category: string;
  text: string;
  helpText?: string;
  options: { label: string; value: number }[];
}

const QUESTIONS: Question[] = [
  // Vision
  {
    id: 'q1', category: 'Vision',
    text: 'Can you comfortably read text on your screen without squinting?',
    helpText: 'If not, increasing text size or screen zoom can help.',
    options: [
      { label: 'Yes, clearly', value: 2 },
      { label: 'Sometimes struggle', value: 1 },
      { label: 'Often difficult', value: 0 },
    ],
  },
  {
    id: 'q2', category: 'Vision',
    text: 'Do you find bright screens uncomfortable or tiring?',
    options: [
      { label: 'No, fine as-is', value: 2 },
      { label: 'Sometimes', value: 1 },
      { label: 'Yes, often uncomfortable', value: 0 },
    ],
  },
  // Hearing
  {
    id: 'q3', category: 'Hearing',
    text: 'Can you hear audio clearly from your device (videos, calls, alerts)?',
    options: [
      { label: 'Yes, clearly', value: 2 },
      { label: 'Needs to be louder', value: 1 },
      { label: 'Difficult to hear', value: 0 },
    ],
  },
  {
    id: 'q4', category: 'Hearing',
    text: 'Do you use captions when watching videos?',
    helpText: 'Captions help if you struggle to follow audio.',
    options: [
      { label: "I don't need them", value: 2 },
      { label: 'Sometimes, yes', value: 2 },
      { label: 'I should but haven\'t set them up', value: 0 },
    ],
  },
  // Motor / Physical
  {
    id: 'q5', category: 'Motor Skills',
    text: 'Do you find small buttons or touch targets difficult to tap?',
    options: [
      { label: 'No, fine', value: 2 },
      { label: 'Sometimes miss them', value: 1 },
      { label: 'Often struggle', value: 0 },
    ],
  },
  {
    id: 'q6', category: 'Motor Skills',
    text: 'Do you ever use voice commands or a mouse instead of touch?',
    options: [
      { label: 'Touch/mouse works fine for me', value: 2 },
      { label: 'I use voice commands — it helps', value: 2 },
      { label: "I struggle but haven't tried alternatives", value: 0 },
    ],
  },
  // Cognitive / Memory
  {
    id: 'q7', category: 'Cognitive Ease',
    text: 'Do busy or cluttered screens feel overwhelming?',
    options: [
      { label: 'No, I manage fine', value: 2 },
      { label: 'Sometimes', value: 1 },
      { label: 'Yes, I prefer simpler screens', value: 0 },
    ],
  },
  {
    id: 'q8', category: 'Cognitive Ease',
    text: 'Do you find it hard to remember how to do things on your device?',
    options: [
      { label: 'Usually fine', value: 2 },
      { label: 'Occasionally forget', value: 1 },
      { label: 'Often need help', value: 0 },
    ],
  },
  // Colour
  {
    id: 'q9', category: 'Colour & Contrast',
    text: 'Do you sometimes find it hard to tell colours apart (e.g. green/red)?',
    helpText: 'This might indicate colour blindness — there are settings to help.',
    options: [
      { label: 'No difficulty', value: 2 },
      { label: 'Occasionally', value: 1 },
      { label: 'Often struggle with colours', value: 0 },
    ],
  },
  // General
  {
    id: 'q10', category: 'Overall Comfort',
    text: 'Overall, how comfortable are you using your device day-to-day?',
    options: [
      { label: 'Very comfortable', value: 2 },
      { label: 'Fairly comfortable', value: 1 },
      { label: 'Often find it frustrating', value: 0 },
    ],
  },
];

interface Recommendation {
  title: string;
  emoji: string;
  description: string;
  guideSlug?: string;
  guideLabel?: string;
}

function getRecommendations(answers: Record<string, number>): Recommendation[] {
  const recs: Recommendation[] = [];
  if ((answers['q1'] ?? 2) < 2) {
    recs.push({ emoji: '🔠', title: 'Increase text size', description: 'Use TekSure\'s font size toggle (the "A" button in the top bar) to make text bigger across the whole site. On your device: iPhone → Settings → Display & Brightness → Text Size.', guideSlug: 'accessibility-settings', guideLabel: 'Accessibility Guide' });
  }
  if ((answers['q2'] ?? 2) < 2) {
    recs.push({ emoji: '🌙', title: 'Try Dark Mode', description: 'Dark mode reduces eye strain significantly. Use the moon icon in the TekSure top bar to enable it. On iPhone: Settings → Display & Brightness → Dark. On Android: Settings → Display → Dark theme.' });
  }
  if ((answers['q3'] ?? 2) < 2) {
    recs.push({ emoji: '🔊', title: 'Adjust device volume & audio', description: 'On iPhone: Settings → Sounds & Haptics → Ringtone and Alerts volume. On Android: press the volume button and tap the settings icon. Also consider Bluetooth hearing aids which connect directly to modern smartphones.' });
  }
  if ((answers['q4'] ?? 2) === 0) {
    recs.push({ emoji: '💬', title: 'Turn on automatic captions', description: 'YouTube, Netflix, and most streaming services offer free automatic captions. On iPhone/iPad you can also enable "Live Captions" in Settings → Accessibility → Live Captions.' });
  }
  if ((answers['q5'] ?? 2) < 2) {
    recs.push({ emoji: '👆', title: 'Enable touch accessibility options', description: 'iPhone: Settings → Accessibility → Touch → "Touch Accommodations" (holds presses longer before registering). Android: Settings → Accessibility → Interaction controls → Touch & hold delay.' });
  }
  if ((answers['q6'] ?? 2) === 0) {
    recs.push({ emoji: '🎙️', title: 'Try voice commands', description: 'iPhone: Activate Siri with "Hey Siri". Android: say "Hey Google". You can open apps, send messages, make calls, and more — entirely hands-free.' });
  }
  if ((answers['q7'] ?? 2) < 2) {
    recs.push({ emoji: '🧘', title: 'Reduce visual clutter', description: 'iPhone: Settings → Accessibility → Display & Text Size → Reduce Motion + Reduce Transparency. Android: Settings → Accessibility → Visibility enhancements → Remove animations.' });
  }
  if ((answers['q9'] ?? 2) < 2) {
    recs.push({ emoji: '🎨', title: 'Use colour filters', description: 'iPhone: Settings → Accessibility → Display & Text Size → Colour Filters. Choose "Deuteranopia" (red-green), "Protanopia", or "Tritanopia" depending on your colour blindness type.' });
  }
  if ((answers['q8'] ?? 2) < 2) {
    recs.push({ emoji: '📚', title: 'Browse TekSure guides', description: 'Our step-by-step guides are designed to be easy to follow. Save the guides you use most to Favourites so you can find them again easily.', guideSlug: 'guides', guideLabel: 'Browse all guides' });
  }
  return recs;
}

function getScore(answers: Record<string, number>): { total: number; max: number; pct: number; label: string; color: string } {
  const total = Object.values(answers).reduce((a, b) => a + b, 0);
  const max = QUESTIONS.length * 2;
  const pct = Math.round((total / max) * 100);
  let label = 'Great setup!';
  let color = 'text-green-600';
  if (pct < 50) { label = 'Several improvements possible'; color = 'text-red-500'; }
  else if (pct < 75) { label = 'Some improvements possible'; color = 'text-amber-500'; }
  return { total, max, pct, label, color };
}

const CATEGORIES = [...new Set(QUESTIONS.map(q => q.category))];

export default function AccessibilityCheck() {
  const [currentQ, setCurrentQ] = useState(0);
  const [answers, setAnswers] = useState<Record<string, number>>({});
  const [done, setDone] = useState(false);

  const question = QUESTIONS[currentQ];
  const progress = Math.round((currentQ / QUESTIONS.length) * 100);
  const categoryProgress = CATEGORIES.map(cat => ({
    cat,
    count: QUESTIONS.filter(q => q.category === cat && answers[q.id] !== undefined).length,
    total: QUESTIONS.filter(q => q.category === cat).length,
  }));

  const handleAnswer = (value: number) => {
    const newAnswers = { ...answers, [question.id]: value };
    setAnswers(newAnswers);
    if (currentQ < QUESTIONS.length - 1) {
      setCurrentQ(q => q + 1);
    } else {
      setDone(true);
    }
  };

  const restart = () => {
    setAnswers({});
    setCurrentQ(0);
    setDone(false);
  };

  const score = done ? getScore(answers) : null;
  const recommendations = done ? getRecommendations(answers) : [];

  return (
    <>
      <SEOHead
        title="Accessibility Check — TekSure"
        description="Find out how accessible your device setup is and get personalised tips to make tech easier to use."
      path="/tools/accessibility-check"
      />
      <Navbar />

      <main className="min-h-screen bg-background">
        {/* Hero */}
        <section className="bg-gradient-to-br from-primary/10 via-background to-secondary/10 border-b border-border py-10 px-4">
          <div className="container max-w-3xl mx-auto text-center">
            <div className="flex justify-center mb-3">
              <div className="p-3 bg-primary/10 rounded-full">
                <Accessibility className="h-8 w-8 text-primary" />
              </div>
            </div>
            <h1 className="text-3xl md:text-4xl font-bold mb-2">Accessibility Check</h1>
            <p className="text-muted-foreground text-lg max-w-xl mx-auto">
              Answer 10 quick questions to see how well your device setup works for you — and get personalised tips to make things easier.
            </p>
          </div>
        </section>

        <div className="container max-w-2xl mx-auto px-4 py-8">
          {!done ? (
            <>
              {/* Category pills */}
              <div className="flex flex-wrap gap-2 mb-5">
                {categoryProgress.map(({ cat, count, total }) => (
                  <span
                    key={cat}
                    className={`text-xs px-2.5 py-1 rounded-full border font-medium transition-colors ${
                      count === total
                        ? 'bg-primary/10 border-primary/30 text-primary'
                        : count > 0
                        ? 'bg-amber-50 dark:bg-amber-900/20 border-amber-300 dark:border-amber-700 text-amber-700 dark:text-amber-300'
                        : 'bg-muted border-border text-muted-foreground'
                    }`}
                  >
                    {count === total ? '✓ ' : ''}{cat}
                  </span>
                ))}
              </div>

              {/* Progress */}
              <div className="mb-5">
                <div className="flex justify-between text-xs text-muted-foreground mb-1.5">
                  <span>Question {currentQ + 1} of {QUESTIONS.length}</span>
                  <span>{progress}% done</span>
                </div>
                <div className="h-1.5 bg-muted rounded-full overflow-hidden">
                  <div className="h-full bg-primary rounded-full transition-all duration-300" style={{ width: `${progress}%` }} />
                </div>
              </div>

              {/* Question card */}
              <Card className="border-border shadow-sm">
                <CardContent className="p-6 md:p-8">
                  <Badge variant="outline" className="mb-3 text-xs">{question.category}</Badge>
                  <h2 className="text-lg font-semibold mb-2 leading-snug">{question.text}</h2>
                  {question.helpText && (
                    <div className="flex items-start gap-2 p-2.5 rounded-lg bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 mb-4">
                      <Info className="h-3.5 w-3.5 text-blue-600 shrink-0 mt-0.5" />
                      <p className="text-xs text-blue-700 dark:text-blue-300">{question.helpText}</p>
                    </div>
                  )}

                  <div className="space-y-2 mt-4">
                    {question.options.map((opt, i) => (
                      <button
                        key={i}
                        onClick={() => handleAnswer(opt.value)}
                        className="w-full text-left px-4 py-3 rounded-xl border border-border hover:border-primary/50 hover:bg-primary/5 transition-all text-sm font-medium"
                      >
                        {opt.label}
                      </button>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Back button */}
              {currentQ > 0 && (
                <div className="mt-3">
                  <Button variant="ghost" size="sm" onClick={() => setCurrentQ(q => q - 1)} className="gap-1 text-xs text-muted-foreground">
                    <ChevronLeft className="h-3 w-3" /> Previous question
                  </Button>
                </div>
              )}
            </>
          ) : (
            <>
              {/* Score */}
              <Card className="mb-6 border-border shadow-sm overflow-hidden">
                <div className="bg-gradient-to-r from-primary/10 to-secondary/10 p-6 text-center">
                  <div className="relative inline-flex items-center justify-center w-28 h-28 mb-3">
                    <svg className="w-28 h-28 -rotate-90" viewBox="0 0 100 100">
                      <circle cx="50" cy="50" r="42" fill="none" stroke="currentColor" className="text-muted/40" strokeWidth="8" />
                      <circle
                        cx="50" cy="50" r="42"
                        fill="none"
                        stroke="currentColor"
                        className="text-primary"
                        strokeWidth="8"
                        strokeLinecap="round"
                        strokeDasharray={`${(score!.pct / 100) * 263.9} 263.9`}
                      />
                    </svg>
                    <span className="absolute text-2xl font-bold">{score!.pct}%</span>
                  </div>
                  <p className={`text-lg font-semibold ${score!.color}`}>{score!.label}</p>
                  <p className="text-sm text-muted-foreground mt-1">Based on your {QUESTIONS.length} answers</p>
                </div>

                {/* Category breakdown */}
                <CardContent className="p-5">
                  <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-3">Breakdown by area</p>
                  <div className="space-y-2">
                    {CATEGORIES.map(cat => {
                      const qs = QUESTIONS.filter(q => q.category === cat);
                      const catScore = qs.reduce((sum, q) => sum + (answers[q.id] ?? 0), 0);
                      const catMax = qs.length * 2;
                      const catPct = Math.round((catScore / catMax) * 100);
                      return (
                        <div key={cat} className="flex items-center gap-3">
                          <span className="text-xs w-32 shrink-0 text-muted-foreground">{cat}</span>
                          <div className="flex-1 h-2 bg-muted rounded-full overflow-hidden">
                            <div
                              className={`h-full rounded-full transition-all ${catPct >= 75 ? 'bg-green-500' : catPct >= 50 ? 'bg-amber-400' : 'bg-red-400'}`}
                              style={{ width: `${catPct}%` }}
                            />
                          </div>
                          <span className="text-xs w-8 text-right text-muted-foreground">{catPct}%</span>
                        </div>
                      );
                    })}
                  </div>
                </CardContent>
              </Card>

              {/* Recommendations */}
              {recommendations.length > 0 && (
                <div className="mb-6">
                  <h2 className="text-base font-semibold mb-3 flex items-center gap-2">
                    <AlertTriangle className="h-4 w-4 text-amber-500" />
                    Personalised recommendations
                  </h2>
                  <div className="space-y-3">
                    {recommendations.map((rec, i) => (
                      <Card key={i} className="border-border">
                        <CardContent className="p-4">
                          <div className="flex gap-3">
                            <span className="text-2xl shrink-0">{rec.emoji}</span>
                            <div>
                              <p className="font-medium text-sm mb-1">{rec.title}</p>
                              <p className="text-xs text-muted-foreground leading-relaxed">{rec.description}</p>
                              {rec.guideSlug && (
                                <Link
                                  to={rec.guideSlug.startsWith('/') ? rec.guideSlug : `/guides/${rec.guideSlug}`}
                                  className="inline-flex items-center gap-1 mt-2 text-xs text-primary hover:underline"
                                >
                                  {rec.guideLabel} <ExternalLink className="h-3 w-3" />
                                </Link>
                              )}
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </div>
              )}

              {recommendations.length === 0 && (
                <Card className="mb-6 border-green-200 dark:border-green-800 bg-green-50 dark:bg-green-950/20">
                  <CardContent className="p-5 flex gap-3">
                    <CheckCircle2 className="h-5 w-5 text-green-600 shrink-0 mt-0.5" />
                    <div>
                      <p className="font-medium text-sm text-green-800 dark:text-green-200">Excellent accessibility setup!</p>
                      <p className="text-xs text-green-700 dark:text-green-300 mt-1">Your answers suggest your device is already well set up for your needs. Keep an eye on our guides for new tips.</p>
                    </div>
                  </CardContent>
                </Card>
              )}

              <div className="flex gap-3">
                <Button variant="outline" onClick={restart} className="gap-2">
                  <RotateCcw className="h-4 w-4" /> Retake check
                </Button>
                <Button asChild className="gap-2">
                  <Link to="/guides">Browse guides <ChevronRight className="h-4 w-4" /></Link>
                </Button>
              </div>
            </>
          )}
        </div>
      </main>

      <Footer />
    </>
  );
}

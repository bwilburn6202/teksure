import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import {
  Map, CheckCircle2, Circle, ChevronRight, Trophy, Zap,
  RotateCcw, ArrowRight, Lock, BookOpen, Flame,
} from 'lucide-react';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { Badge } from '@/components/ui/badge';
import { guides } from '@/data/guides';
import { getCompletedGuides } from '@/lib/progress';

/* ── Learning paths definition ──────────────────────────────── */

const PATHS = [
  {
    id: 'beginner',
    emoji: '🌱',
    label: 'Beginner Basics',
    description: 'The most important things to know — start here if you\'re new to tech.',
    colour: 'from-green-400 to-emerald-500',
    bg: 'bg-green-50 border-green-200',
    textColour: 'text-green-700',
    slugs: [
      'turn-pc-on-and-off',
      'connect-wifi-windows',
      'staying-safe-online',
      'creating-strong-passwords',
      'avoiding-scams',
    ],
  },
  {
    id: 'safety',
    emoji: '🛡️',
    label: 'Safety Essentials',
    description: 'Keep yourself and your accounts safe online.',
    colour: 'from-amber-400 to-orange-500',
    bg: 'bg-amber-50 border-amber-200',
    textColour: 'text-amber-700',
    slugs: [
      'two-factor-auth',
      'home-network-security',
      'software-updates',
      'phishing-emails',
      'social-media-safety',
    ],
  },
  {
    id: 'practical',
    emoji: '💡',
    label: 'Practical Skills',
    description: 'Everyday tech that will save you time and frustration.',
    colour: 'from-blue-400 to-indigo-500',
    bg: 'bg-blue-50 border-blue-200',
    textColour: 'text-blue-700',
    slugs: [
      'video-calls',
      'setup-email-windows-mail',
      'take-screenshot-windows',
      'copy-paste-windows',
      'print-document-windows',
    ],
  },
  {
    id: 'devices',
    emoji: '📱',
    label: 'Devices & Apps',
    description: 'Get the most from your phone, tablet, and computer.',
    colour: 'from-purple-400 to-violet-500',
    bg: 'bg-purple-50 border-purple-200',
    textColour: 'text-purple-700',
    slugs: [
      'connect-bluetooth-windows',
      'manage-storage-windows',
      'setup-windows-backup',
      'setup-two-factor-auth-windows',
      'use-microsoft-store',
    ],
  },
  {
    id: 'advanced',
    emoji: '🚀',
    label: 'Level Up',
    description: 'For confident users who want to go further.',
    colour: 'from-rose-400 to-pink-500',
    bg: 'bg-rose-50 border-rose-200',
    textColour: 'text-rose-700',
    slugs: [
      'use-virtual-desktops-windows',
      'setup-windows-hello',
      'use-file-explorer-windows',
      'manage-windows-windows',
      'customize-taskbar-windows',
    ],
  },
];

/* ── Quiz questions ─────────────────────────────────────────── */

const QUIZ = [
  {
    id: 'q1',
    question: 'How comfortable are you with technology?',
    options: [
      { label: "I'm just starting out",        value: 'beginner' },
      { label: 'I can do the basics',           value: 'practical' },
      { label: "I'm pretty comfortable",        value: 'devices' },
      { label: 'I want advanced skills',        value: 'advanced' },
    ],
  },
  {
    id: 'q2',
    question: "What's your biggest concern right now?",
    options: [
      { label: 'Staying safe from scams',       value: 'safety' },
      { label: 'Using my device confidently',   value: 'beginner' },
      { label: 'Getting things done faster',    value: 'practical' },
      { label: 'Exploring new features',        value: 'advanced' },
    ],
  },
];

const QUIZ_KEY = 'teksure-my-path-chosen';

function getSavedPath(): string | null {
  return localStorage.getItem(QUIZ_KEY);
}

function savePathChoice(id: string) {
  localStorage.setItem(QUIZ_KEY, id);
}

/* ── Main component ─────────────────────────────────────────── */

export default function MyPath() {
  const [completed, setCompleted]   = useState<Set<string>>(getCompletedGuides);
  const [chosenId, setChosenId]     = useState<string | null>(getSavedPath);
  const [showQuiz, setShowQuiz]     = useState(false);
  const [quizStep, setQuizStep]     = useState(0);
  const [quizVotes, setQuizVotes]   = useState<Record<string, number>>({});

  // Keep progress in sync
  useEffect(() => {
    const refresh = () => setCompleted(getCompletedGuides());
    window.addEventListener('teksure-progress-update', refresh);
    return () => window.removeEventListener('teksure-progress-update', refresh);
  }, []);

  /* Quiz answer handler */
  function handleQuizAnswer(value: string) {
    const updated = { ...quizVotes, [value]: (quizVotes[value] ?? 0) + 1 };
    setQuizVotes(updated);

    if (quizStep < QUIZ.length - 1) {
      setQuizStep(s => s + 1);
    } else {
      // Pick path with most votes; tie-break to first
      const winner = Object.entries(updated).sort((a, b) => b[1] - a[1])[0]?.[0] ?? 'beginner';
      setChosenId(winner);
      savePathChoice(winner);
      setShowQuiz(false);
    }
  }

  function resetQuiz() {
    setChosenId(null);
    setShowQuiz(true);
    setQuizStep(0);
    setQuizVotes({});
    localStorage.removeItem(QUIZ_KEY);
  }

  /* Compute path progress */
  function pathProgress(slugs: string[]) {
    const valid = slugs.filter(s => guides.some(g => g.slug === s));
    const done  = valid.filter(s => completed.has(s)).length;
    return { done, total: valid.length, pct: valid.length ? Math.round((done / valid.length) * 100) : 0 };
  }

  const chosenPath = PATHS.find(p => p.id === chosenId) ?? null;

  /* ── Streak count (consecutive-day streak from localStorage) */
  const totalDone = completed.size;

  return (
    <>
      <SEOHead
        title="My Learning Path | TekSure"
        description="Follow a personalised step-by-step learning path and build your tech confidence at your own pace."
        path="/my-path"
      />
      <Navbar />

      <main className="min-h-screen bg-background">

        {/* ── Hero ── */}
        <section className="bg-gradient-to-br from-primary/10 via-background to-secondary/10 border-b border-border py-10 px-4">
          <div className="container max-w-3xl mx-auto">
            <div className="flex items-start justify-between gap-4 flex-wrap">
              <div>
                <div className="flex items-center gap-3 mb-2">
                  <div className="p-2 bg-primary/10 rounded-xl">
                    <Map className="h-6 w-6 text-primary" />
                  </div>
                  <h1 className="text-3xl font-bold">My Learning Path</h1>
                </div>
                <p className="text-muted-foreground text-lg max-w-lg">
                  Follow a step-by-step path and build your tech confidence at your own pace.
                </p>
              </div>

              {/* Progress pill */}
              {totalDone > 0 && (
                <div className="flex items-center gap-2 bg-secondary/10 border border-secondary/20 rounded-full px-4 py-2">
                  <Flame className="h-4 w-4 text-secondary" />
                  <span className="text-sm font-semibold text-secondary">{totalDone} guide{totalDone !== 1 ? 's' : ''} completed</span>
                </div>
              )}
            </div>
          </div>
        </section>

        <div className="container max-w-3xl mx-auto px-4 py-8 space-y-8">

          {/* ── Quiz ── */}
          {showQuiz ? (
            <Card className="border-primary/20">
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-1">
                  <p className="text-xs text-muted-foreground font-medium uppercase tracking-wide">
                    Question {quizStep + 1} of {QUIZ.length}
                  </p>
                  <button
                    onClick={() => setShowQuiz(false)}
                    className="text-xs text-muted-foreground hover:text-foreground"
                  >
                    Skip quiz
                  </button>
                </div>
                <Progress value={((quizStep) / QUIZ.length) * 100} className="h-1.5 mb-5" />
                <h2 className="text-xl font-semibold mb-4">{QUIZ[quizStep].question}</h2>
                <div className="grid gap-3">
                  {QUIZ[quizStep].options.map(opt => (
                    <button
                      key={opt.value}
                      onClick={() => handleQuizAnswer(opt.value)}
                      className="flex items-center justify-between p-4 rounded-xl border-2 border-border bg-card text-left text-sm font-medium hover:border-primary/60 hover:bg-primary/5 transition-all"
                    >
                      {opt.label}
                      <ChevronRight className="h-4 w-4 text-muted-foreground" />
                    </button>
                  ))}
                </div>
              </CardContent>
            </Card>
          ) : !chosenPath ? (
            /* ── No path chosen yet ── */
            <Card className="text-center py-10 border-dashed border-2">
              <CardContent className="space-y-4">
                <div className="text-4xl">🗺️</div>
                <h2 className="text-xl font-semibold">Find your perfect path</h2>
                <p className="text-muted-foreground max-w-sm mx-auto">
                  Answer 2 quick questions and we'll recommend the best learning path for you.
                </p>
                <Button onClick={() => setShowQuiz(true)} className="gap-2">
                  <Zap className="h-4 w-4" /> Take the quiz
                </Button>
                <p className="text-xs text-muted-foreground">
                  Or{' '}
                  <button
                    onClick={() => { setChosenId('beginner'); savePathChoice('beginner'); }}
                    className="text-primary hover:underline"
                  >
                    start with Beginner Basics
                  </button>
                </p>
              </CardContent>
            </Card>
          ) : (
            /* ── Active path ── */
            <>
              {/* Active path card */}
              <div>
                <div className="flex items-center justify-between mb-3">
                  <h2 className="text-lg font-semibold">Your Current Path</h2>
                  <button
                    onClick={resetQuiz}
                    className="flex items-center gap-1 text-xs text-muted-foreground hover:text-foreground transition-colors"
                  >
                    <RotateCcw className="h-3 w-3" /> Change path
                  </button>
                </div>

                {(() => {
                  const { done, total, pct } = pathProgress(chosenPath.slugs);
                  const nextSlug = chosenPath.slugs.find(s => !completed.has(s) && guides.some(g => g.slug === s));
                  const nextGuide = guides.find(g => g.slug === nextSlug);

                  return (
                    <Card className={`border ${chosenPath.bg}`}>
                      <CardContent className="p-5">
                        <div className="flex items-start gap-3 mb-4">
                          <span className="text-3xl">{chosenPath.emoji}</span>
                          <div className="flex-1">
                            <h3 className="font-bold text-lg">{chosenPath.label}</h3>
                            <p className="text-sm text-muted-foreground">{chosenPath.description}</p>
                          </div>
                          {pct === 100 && (
                            <Badge className="bg-green-500 text-white shrink-0">
                              <Trophy className="h-3 w-3 mr-1" /> Complete!
                            </Badge>
                          )}
                        </div>

                        <div className="mb-4">
                          <div className="flex justify-between text-xs text-muted-foreground mb-1">
                            <span>{done} of {total} guides completed</span>
                            <span className={`font-semibold ${chosenPath.textColour}`}>{pct}%</span>
                          </div>
                          <Progress value={pct} className="h-2.5" />
                        </div>

                        {/* Step list */}
                        <div className="space-y-2 mb-4">
                          {chosenPath.slugs.map((slug, i) => {
                            const guide = guides.find(g => g.slug === slug);
                            const isDone = completed.has(slug);
                            const isNext = slug === nextSlug;
                            return (
                              <div
                                key={slug}
                                className={`flex items-center gap-3 p-3 rounded-lg text-sm transition-all ${
                                  isDone
                                    ? 'bg-green-50 border border-green-200'
                                    : isNext
                                    ? 'bg-primary/5 border border-primary/30'
                                    : 'bg-muted/50 border border-transparent opacity-60'
                                }`}
                              >
                                {isDone ? (
                                  <CheckCircle2 className="h-5 w-5 text-green-500 shrink-0" />
                                ) : isNext ? (
                                  <div className="h-5 w-5 rounded-full border-2 border-primary flex items-center justify-center shrink-0">
                                    <ArrowRight className="h-3 w-3 text-primary" />
                                  </div>
                                ) : (
                                  <Lock className="h-5 w-5 text-muted-foreground shrink-0" />
                                )}
                                <span className={`flex-1 font-medium ${isDone ? 'line-through text-muted-foreground' : isNext ? 'text-primary' : ''}`}>
                                  {guide?.title ?? slug}
                                </span>
                                <span className="text-xs text-muted-foreground shrink-0">Step {i + 1}</span>
                              </div>
                            );
                          })}
                        </div>

                        {/* CTA */}
                        {nextGuide ? (
                          <Button asChild className="w-full gap-2">
                            <Link to={`/guides/${nextGuide.slug}`}>
                              <BookOpen className="h-4 w-4" />
                              {done === 0 ? 'Start path' : 'Continue'}: {nextGuide.title}
                            </Link>
                          </Button>
                        ) : (
                          <div className="text-center py-2">
                            <p className="text-sm font-medium text-green-600 mb-2">🎉 You've completed this path!</p>
                            <Button
                              variant="outline"
                              onClick={resetQuiz}
                              className="gap-2"
                            >
                              <Map className="h-4 w-4" /> Choose your next path
                            </Button>
                          </div>
                        )}
                      </CardContent>
                    </Card>
                  );
                })()}
              </div>
            </>
          )}

          {/* ── All paths ── */}
          <div>
            <h2 className="text-lg font-semibold mb-3">All Learning Paths</h2>
            <div className="grid gap-3 sm:grid-cols-2">
              {PATHS.map(path => {
                const { done, total, pct } = pathProgress(path.slugs);
                const isActive = path.id === chosenId;
                return (
                  <button
                    key={path.id}
                    onClick={() => { setChosenId(path.id); savePathChoice(path.id); setShowQuiz(false); }}
                    className={`text-left p-4 rounded-xl border-2 transition-all hover:shadow-sm ${
                      isActive ? 'border-primary bg-primary/5' : 'border-border bg-card hover:border-primary/40'
                    }`}
                  >
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center gap-2">
                        <span className="text-xl">{path.emoji}</span>
                        <span className="font-semibold text-sm">{path.label}</span>
                      </div>
                      {isActive && <Badge variant="secondary" className="text-xs">Active</Badge>}
                      {pct === 100 && <Trophy className="h-4 w-4 text-amber-500" />}
                    </div>
                    <p className="text-xs text-muted-foreground mb-2">{path.description}</p>
                    <div className="flex items-center gap-2">
                      <Progress value={pct} className="h-1.5 flex-1" />
                      <span className="text-xs font-medium text-muted-foreground shrink-0">{done}/{total}</span>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          {/* ── Achievements teaser ── */}
          {totalDone > 0 && (
            <Card className="bg-gradient-to-r from-amber-50 to-orange-50 border-amber-200">
              <CardContent className="p-4 flex items-center justify-between gap-4">
                <div className="flex items-center gap-3">
                  <Trophy className="h-8 w-8 text-amber-500 shrink-0" />
                  <div>
                    <p className="font-semibold text-sm">You've completed {totalDone} guide{totalDone !== 1 ? 's' : ''}!</p>
                    <p className="text-xs text-muted-foreground">Keep going to earn badges on your profile.</p>
                  </div>
                </div>
                <Button asChild variant="outline" size="sm">
                  <Link to="/profile">View badges</Link>
                </Button>
              </CardContent>
            </Card>
          )}

        </div>
      </main>

      <Footer />
    </>
  );
}

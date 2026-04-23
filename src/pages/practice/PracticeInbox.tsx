import { useEffect, useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import {
  Mail,
  ShieldAlert,
  CheckCircle2,
  XCircle,
  Paperclip,
  Inbox,
  Flame,
  ArrowRight,
  RotateCcw,
  ChevronLeft,
} from 'lucide-react';
import { useTier } from '@/contexts/TierContext';
import {
  EMAIL_SCENARIOS,
  getEmailScenariosForTier,
  type EmailScenario,
} from '@/data/practiceScenarios';
import {
  recordPracticeAttempt,
  resetPracticeStreak,
  getPracticeProgress,
  subscribeToPracticeUpdates,
  type PracticeProgress,
} from '@/lib/practiceProgress';

type RoundState =
  | { phase: 'briefing' }
  | { phase: 'playing'; queue: EmailScenario[]; index: number; score: number; missed: EmailScenario[] }
  | { phase: 'finished'; score: number; total: number; missed: EmailScenario[] };

const ROUND_SIZE = 6;

function shuffle<T>(arr: T[]): T[] {
  const out = [...arr];
  for (let i = out.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [out[i], out[j]] = [out[j], out[i]];
  }
  return out;
}

export default function PracticeInbox() {
  const { tier } = useTier();
  const [state, setState] = useState<RoundState>({ phase: 'briefing' });
  const [openEmail, setOpenEmail] = useState<EmailScenario | null>(null);
  const [feedback, setFeedback] = useState<{ scenario: EmailScenario; correct: boolean } | null>(null);
  const [progress, setProgress] = useState<PracticeProgress>(() => getPracticeProgress());

  useEffect(() => {
    const unsub = subscribeToPracticeUpdates(() => setProgress(getPracticeProgress()));
    return unsub;
  }, []);

  const tierPool = useMemo(() => getEmailScenariosForTier(tier), [tier]);

  const startRound = () => {
    const queue = shuffle(tierPool).slice(0, ROUND_SIZE);
    setState({ phase: 'playing', queue, index: 0, score: 0, missed: [] });
    setOpenEmail(queue[0] ?? null);
    setFeedback(null);
    resetPracticeStreak('inbox');
  };

  const handleGuess = (guess: 'phishing' | 'legit') => {
    if (state.phase !== 'playing') return;
    const scenario = state.queue[state.index];
    if (!scenario) return;
    const correct = guess === (scenario.verdict === 'phishing' ? 'phishing' : 'legit');
    recordPracticeAttempt({
      room: 'inbox',
      scenarioId: scenario.id,
      guess,
      truth: scenario.verdict,
    });
    setFeedback({ scenario, correct });
  };

  const advance = () => {
    if (state.phase !== 'playing' || !feedback) return;
    const wasCorrect = feedback.correct;
    const wasMissedScenario = wasCorrect ? null : feedback.scenario;
    const nextIndex = state.index + 1;
    const nextScore = state.score + (wasCorrect ? 1 : 0);
    const nextMissed = wasMissedScenario ? [...state.missed, wasMissedScenario] : state.missed;

    setFeedback(null);

    if (nextIndex >= state.queue.length) {
      setState({ phase: 'finished', score: nextScore, total: state.queue.length, missed: nextMissed });
      setOpenEmail(null);
      return;
    }
    setState({ ...state, index: nextIndex, score: nextScore, missed: nextMissed });
    setOpenEmail(state.queue[nextIndex]);
  };

  return (
    <>
      <SEOHead
        title="Practice Inbox — Spot phishing emails safely"
        path="/practice/inbox"
        description="A fake inbox to test your scam-spotting eye. Decide what's real and what's phishing — get instant feedback."
      />
      <Navbar />

      <main className="min-h-screen bg-background">
        {/* Top bar */}
        <div className="border-b border-border bg-card">
          <div className="container max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
            <Button variant="ghost" size="sm" asChild className="gap-1">
              <Link to="/practice">
                <ChevronLeft className="h-4 w-4" /> Practice Rooms
              </Link>
            </Button>
            <div className="flex items-center gap-3 text-sm">
              {progress.rooms.inbox.currentStreak > 0 && (
                <span className="inline-flex items-center gap-1 text-orange-600 dark:text-orange-400">
                  <Flame className="h-4 w-4" />
                  {progress.rooms.inbox.currentStreak} streak
                </span>
              )}
              {state.phase === 'playing' && (
                <span className="text-muted-foreground">
                  {state.index + 1} / {state.queue.length}
                </span>
              )}
            </div>
          </div>
        </div>

        {/* Briefing */}
        {state.phase === 'briefing' && (
          <div className="container max-w-2xl mx-auto px-4 py-12 text-center">
            <div className="flex justify-center mb-4">
              <div className="p-3 rounded-full bg-primary/10">
                <Inbox className="h-9 w-9 text-primary" />
              </div>
            </div>
            <h1 className="text-3xl md:text-4xl font-bold mb-3">The Practice Inbox</h1>
            <p className="text-muted-foreground text-lg mb-6">
              You'll see {ROUND_SIZE} emails, one at a time. For each one, decide:{' '}
              <strong>safe</strong> or <strong>phishing</strong>. We'll tell you what to look
              for after each answer.
            </p>
            <Card className="border-primary/20 bg-primary/5 mb-6 text-left">
              <CardContent className="p-5 text-sm text-muted-foreground space-y-2">
                <p>
                  <strong className="text-foreground">Nothing here is real.</strong> No links
                  click out, no money moves, no accounts get touched. This is purely a
                  training drill.
                </p>
                <p>
                  Your answers stay on your device. You can clear them anytime from the
                  Practice Rooms hub.
                </p>
              </CardContent>
            </Card>
            <Button size="lg" onClick={startRound} className="gap-2">
              Start round of {Math.min(ROUND_SIZE, tierPool.length)}
              <ArrowRight className="h-4 w-4" />
            </Button>
            {EMAIL_SCENARIOS.length > tierPool.length && (
              <p className="text-xs text-muted-foreground mt-3">
                Showing scenarios at or below your difficulty. Bump up your tier in{' '}
                <Link to="/setup" className="text-primary hover:underline">
                  setup
                </Link>{' '}
                to see harder ones.
              </p>
            )}
          </div>
        )}

        {/* Playing */}
        {state.phase === 'playing' && openEmail && (
          <div className="container max-w-3xl mx-auto px-4 py-6">
            <FakeEmailView email={openEmail} />

            {!feedback ? (
              <div className="mt-6 grid grid-cols-2 gap-3">
                <Button
                  variant="outline"
                  size="lg"
                  onClick={() => handleGuess('legit')}
                  className="h-14 text-base gap-2 border-emerald-500/40 hover:bg-emerald-500/10"
                >
                  <CheckCircle2 className="h-5 w-5 text-emerald-600" />
                  This looks safe
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  onClick={() => handleGuess('phishing')}
                  className="h-14 text-base gap-2 border-red-500/40 hover:bg-red-500/10"
                >
                  <ShieldAlert className="h-5 w-5 text-red-600" />
                  This is a scam
                </Button>
              </div>
            ) : (
              <FeedbackPanel feedback={feedback} onContinue={advance} />
            )}
          </div>
        )}

        {/* Finished */}
        {state.phase === 'finished' && (
          <div className="container max-w-2xl mx-auto px-4 py-12">
            <FinishedSummary
              state={state}
              onReplay={startRound}
            />
          </div>
        )}
      </main>

      <Footer />
    </>
  );
}

// ---------------------------------------------------------------------------

function FakeEmailView({ email }: { email: EmailScenario }) {
  return (
    <Card className="border-border shadow-sm overflow-hidden">
      {/* Header strip — looks like a real email client */}
      <div className="border-b border-border bg-muted/40 px-5 py-3 flex items-center gap-3">
        <Mail className="h-4 w-4 text-muted-foreground" />
        <span className="text-xs text-muted-foreground uppercase tracking-wider">
          Practice inbox · simulation
        </span>
      </div>

      <CardContent className="p-6">
        <h2 className="text-xl md:text-2xl font-bold mb-4 break-words">{email.subject}</h2>

        <div className="flex items-start gap-3 mb-5 pb-5 border-b border-border">
          <div className="h-10 w-10 rounded-full bg-primary/10 text-primary flex items-center justify-center font-semibold shrink-0">
            {email.fromName.charAt(0)}
          </div>
          <div className="flex-1 min-w-0">
            <p className="font-medium text-sm">{email.fromName}</p>
            <p className="text-xs text-muted-foreground break-all">&lt;{email.fromAddress}&gt;</p>
            <p className="text-xs text-muted-foreground mt-1">to me · {email.receivedAt}</p>
          </div>
        </div>

        {email.hasAttachment && email.attachmentName && (
          <div className="mb-4 inline-flex items-center gap-2 px-3 py-2 rounded-lg border border-border bg-muted/40 text-xs">
            <Paperclip className="h-3.5 w-3.5 text-muted-foreground" />
            <span>{email.attachmentName}</span>
          </div>
        )}

        <div className="text-sm leading-relaxed whitespace-pre-line text-foreground/90">
          {email.body}
        </div>
      </CardContent>
    </Card>
  );
}

function FeedbackPanel({
  feedback,
  onContinue,
}: {
  feedback: { scenario: EmailScenario; correct: boolean };
  onContinue: () => void;
}) {
  const { scenario, correct } = feedback;
  const isPhishing = scenario.verdict === 'phishing';

  return (
    <Card
      className={`mt-6 border-2 ${
        correct
          ? 'border-emerald-500/50 bg-emerald-500/5'
          : 'border-amber-500/50 bg-amber-500/5'
      }`}
    >
      <CardContent className="p-5">
        <div className="flex items-start gap-3 mb-3">
          {correct ? (
            <CheckCircle2 className="h-6 w-6 text-emerald-600 shrink-0 mt-0.5" />
          ) : (
            <XCircle className="h-6 w-6 text-amber-600 shrink-0 mt-0.5" />
          )}
          <div className="flex-1">
            <p className="font-bold text-base">
              {correct ? 'Nailed it.' : 'Not quite.'}
            </p>
            <p className="text-sm text-muted-foreground mt-0.5">
              That email was{' '}
              <strong className={isPhishing ? 'text-red-600' : 'text-emerald-700'}>
                {isPhishing ? 'a scam.' : 'real / safe.'}
              </strong>
            </p>
          </div>
        </div>

        {scenario.redFlags.length > 0 && (
          <div className="mb-3">
            <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-2">
              Red flags
            </p>
            <ul className="space-y-1.5 text-sm text-muted-foreground">
              {scenario.redFlags.map((flag, i) => (
                <li key={i} className="flex items-start gap-2">
                  <span className="text-red-500 mt-0.5" aria-hidden="true">
                    •
                  </span>
                  <span>{flag}</span>
                </li>
              ))}
            </ul>
          </div>
        )}

        <div className="rounded-lg bg-background/60 border border-border p-3 mb-4">
          <p className="text-xs font-semibold uppercase tracking-wider text-primary mb-1">
            Why
          </p>
          <p className="text-sm text-muted-foreground">{scenario.explanation}</p>
        </div>

        <Button onClick={onContinue} className="w-full gap-2">
          Next email
          <ArrowRight className="h-4 w-4" />
        </Button>
      </CardContent>
    </Card>
  );
}

function FinishedSummary({
  state,
  onReplay,
}: {
  state: { phase: 'finished'; score: number; total: number; missed: EmailScenario[] };
  onReplay: () => void;
}) {
  const pct = Math.round((state.score / state.total) * 100);
  let headline = 'Solid round.';
  if (pct === 100) headline = 'Perfect — every one.';
  else if (pct >= 80) headline = 'Sharp eye.';
  else if (pct >= 50) headline = 'Good start.';
  else headline = 'Plenty to learn.';

  return (
    <div className="text-center">
      <div className="flex justify-center mb-4">
        <div className="p-3 rounded-full bg-primary/10">
          <CheckCircle2 className="h-9 w-9 text-primary" />
        </div>
      </div>
      <h1 className="text-3xl font-bold mb-2">{headline}</h1>
      <p className="text-muted-foreground text-lg mb-6">
        You spotted <strong className="text-foreground">{state.score}</strong> of{' '}
        <strong className="text-foreground">{state.total}</strong> correctly. ({pct}%)
      </p>

      {state.missed.length > 0 && (
        <Card className="text-left mb-6">
          <CardContent className="p-5">
            <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-3">
              Worth reviewing
            </p>
            <ul className="space-y-3">
              {state.missed.map(s => (
                <li key={s.id} className="border-l-2 border-amber-500/60 pl-3">
                  <p className="text-sm font-medium">"{s.subject}"</p>
                  <p className="text-xs text-muted-foreground mt-0.5">
                    Was: {s.verdict === 'phishing' ? 'a scam' : 'real / safe'} · {s.explanation}
                  </p>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>
      )}

      <div className="flex flex-col sm:flex-row gap-2 justify-center">
        <Button onClick={onReplay} size="lg" className="gap-2">
          <RotateCcw className="h-4 w-4" />
          Play another round
        </Button>
        <Button variant="outline" size="lg" asChild className="gap-2">
          <Link to="/practice/phone">
            Try the Phone room
            <ArrowRight className="h-4 w-4" />
          </Link>
        </Button>
      </div>

      <div className="mt-6 flex flex-wrap gap-2 justify-center">
        <Badge variant="outline" asChild>
          <Link to="/guides/phishing-emails">Read: Phishing emails</Link>
        </Badge>
        <Badge variant="outline" asChild>
          <Link to="/guides/avoiding-scams">Read: Avoiding scams</Link>
        </Badge>
      </div>
    </div>
  );
}

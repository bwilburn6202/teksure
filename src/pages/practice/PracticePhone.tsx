import { useEffect, useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import {
  Phone,
  PhoneIncoming,
  PhoneOff,
  ShieldAlert,
  CheckCircle2,
  XCircle,
  MessageSquare,
  Flame,
  ArrowRight,
  RotateCcw,
  ChevronLeft,
} from 'lucide-react';
import { useTier } from '@/contexts/TierContext';
import {
  PHONE_SCENARIOS,
  getPhoneScenariosForTier,
  type PhoneEvent,
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
  | { phase: 'playing'; queue: PhoneEvent[]; index: number; score: number; missed: PhoneEvent[] }
  | { phase: 'finished'; score: number; total: number; missed: PhoneEvent[] };

const ROUND_SIZE = 6;

function shuffle<T>(arr: T[]): T[] {
  const out = [...arr];
  for (let i = out.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [out[i], out[j]] = [out[j], out[i]];
  }
  return out;
}

export default function PracticePhone() {
  const { tier } = useTier();
  const [state, setState] = useState<RoundState>({ phase: 'briefing' });
  const [feedback, setFeedback] = useState<{ event: PhoneEvent; correct: boolean } | null>(null);
  const [progress, setProgress] = useState<PracticeProgress>(() => getPracticeProgress());

  useEffect(() => {
    const unsub = subscribeToPracticeUpdates(() => setProgress(getPracticeProgress()));
    return unsub;
  }, []);

  const tierPool = useMemo(() => getPhoneScenariosForTier(tier), [tier]);

  const startRound = () => {
    const queue = shuffle(tierPool).slice(0, ROUND_SIZE);
    setState({ phase: 'playing', queue, index: 0, score: 0, missed: [] });
    setFeedback(null);
    resetPracticeStreak('phone');
  };

  const handleGuess = (guess: 'phishing' | 'legit') => {
    if (state.phase !== 'playing') return;
    const event = state.queue[state.index];
    if (!event) return;
    const correct = guess === event.verdict;
    recordPracticeAttempt({
      room: 'phone',
      scenarioId: event.id,
      guess,
      truth: event.verdict,
    });
    setFeedback({ event, correct });
  };

  const advance = () => {
    if (state.phase !== 'playing' || !feedback) return;
    const wasCorrect = feedback.correct;
    const wasMissedEvent = wasCorrect ? null : feedback.event;
    const nextIndex = state.index + 1;
    const nextScore = state.score + (wasCorrect ? 1 : 0);
    const nextMissed = wasMissedEvent ? [...state.missed, wasMissedEvent] : state.missed;

    setFeedback(null);

    if (nextIndex >= state.queue.length) {
      setState({ phase: 'finished', score: nextScore, total: state.queue.length, missed: nextMissed });
      return;
    }
    setState({ ...state, index: nextIndex, score: nextScore, missed: nextMissed });
  };

  const currentEvent = state.phase === 'playing' ? state.queue[state.index] : null;

  return (
    <>
      <SEOHead
        title="Practice Phone — Decide whether to answer, block, or report"
        path="/practice/phone"
        description="Fake calls and texts to train your scam-spotting eye. Decide which are real and which to ignore — get instant feedback."
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
              {progress.rooms.phone.currentStreak > 0 && (
                <span className="inline-flex items-center gap-1 text-orange-600 dark:text-orange-400">
                  <Flame className="h-4 w-4" />
                  {progress.rooms.phone.currentStreak} streak
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
                <Phone className="h-9 w-9 text-primary" />
              </div>
            </div>
            <h1 className="text-3xl md:text-4xl font-bold mb-3">The Practice Phone</h1>
            <p className="text-muted-foreground text-lg mb-6">
              You'll see {ROUND_SIZE} fake calls and texts. For each one, decide:{' '}
              <strong>safe</strong> or <strong>scam</strong>. We'll explain the tells after
              each answer.
            </p>
            <Card className="border-primary/20 bg-primary/5 mb-6 text-left">
              <CardContent className="p-5 text-sm text-muted-foreground space-y-2">
                <p>
                  <strong className="text-foreground">Nothing here is real.</strong> No phones
                  ring, no numbers get called back. This is purely a training drill.
                </p>
                <p>
                  Your answers stay on your device. Clear them anytime from the Practice Rooms
                  hub.
                </p>
              </CardContent>
            </Card>
            <Button size="lg" onClick={startRound} className="gap-2">
              Start round of {Math.min(ROUND_SIZE, tierPool.length)}
              <ArrowRight className="h-4 w-4" />
            </Button>
            {PHONE_SCENARIOS.length > tierPool.length && (
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
        {state.phase === 'playing' && currentEvent && (
          <div className="container max-w-md mx-auto px-4 py-6">
            {currentEvent.type === 'call' ? (
              <FakeCallView event={currentEvent} />
            ) : (
              <FakeTextView event={currentEvent} />
            )}

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
            <FinishedSummary state={state} onReplay={startRound} />
          </div>
        )}
      </main>

      <Footer />
    </>
  );
}

// ---------------------------------------------------------------------------

function FakeCallView({ event }: { event: Extract<PhoneEvent, { type: 'call' }> }) {
  return (
    <div className="rounded-3xl bg-gradient-to-b from-slate-900 to-slate-800 text-white p-6 shadow-xl border border-slate-700">
      <p className="text-center text-xs uppercase tracking-widest text-slate-400 mb-6">
        Incoming call · simulation
      </p>

      <div className="flex flex-col items-center text-center mb-6">
        <div className="h-20 w-20 rounded-full bg-slate-700 flex items-center justify-center mb-4">
          <PhoneIncoming className="h-10 w-10 text-slate-300" />
        </div>
        <p className="text-xl font-semibold">{event.callerId}</p>
        <p className="text-sm text-slate-400 mt-1">{event.number}</p>
      </div>

      <div className="rounded-xl bg-slate-700/40 border border-slate-600 p-4 text-sm text-slate-200 italic">
        <p className="text-xs uppercase tracking-wider text-slate-400 not-italic mb-2">
          What they would say if you answered:
        </p>
        {event.transcript}
      </div>

      <div className="grid grid-cols-3 gap-3 mt-6 pt-6 border-t border-slate-700">
        <FakePhoneButton color="red" icon={<PhoneOff className="h-5 w-5" />} label="Decline" />
        <FakePhoneButton color="green" icon={<Phone className="h-5 w-5" />} label="Answer" />
        <FakePhoneButton color="slate" icon={<ShieldAlert className="h-5 w-5" />} label="Block" />
      </div>
      <p className="text-center text-xs text-slate-500 mt-3">
        These buttons are display-only — make your call below.
      </p>
    </div>
  );
}

function FakePhoneButton({
  color,
  icon,
  label,
}: {
  color: 'red' | 'green' | 'slate';
  icon: React.ReactNode;
  label: string;
}) {
  const styles = {
    red: 'bg-red-500/80 text-white',
    green: 'bg-emerald-500/80 text-white',
    slate: 'bg-slate-600 text-white',
  } as const;
  return (
    <div
      aria-hidden="true"
      className={`flex flex-col items-center gap-1 py-3 rounded-2xl ${styles[color]} opacity-80`}
    >
      {icon}
      <span className="text-xs font-medium">{label}</span>
    </div>
  );
}

function FakeTextView({ event }: { event: Extract<PhoneEvent, { type: 'text' }> }) {
  return (
    <div className="rounded-3xl bg-gradient-to-b from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800 p-5 shadow-xl border border-border">
      <p className="text-center text-xs uppercase tracking-widest text-muted-foreground mb-5">
        New text · simulation
      </p>

      <div className="flex items-center gap-3 mb-5 pb-4 border-b border-border">
        <div className="h-10 w-10 rounded-full bg-muted flex items-center justify-center">
          <MessageSquare className="h-5 w-5 text-muted-foreground" />
        </div>
        <div>
          <p className="font-medium text-sm">{event.sender}</p>
          <p className="text-xs text-muted-foreground">SMS · now</p>
        </div>
      </div>

      <div className="bg-muted/50 dark:bg-slate-700/40 rounded-2xl rounded-tl-sm px-4 py-3 text-sm leading-relaxed">
        {event.message}
      </div>

      <p className="text-center text-xs text-muted-foreground mt-4">
        Make your call below — no link will open if you tap.
      </p>
    </div>
  );
}

function FeedbackPanel({
  feedback,
  onContinue,
}: {
  feedback: { event: PhoneEvent; correct: boolean };
  onContinue: () => void;
}) {
  const { event, correct } = feedback;
  const isPhishing = event.verdict === 'phishing';

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
              That {event.type === 'call' ? 'call' : 'text'} was{' '}
              <strong className={isPhishing ? 'text-red-600' : 'text-emerald-700'}>
                {isPhishing ? 'a scam.' : 'real / safe.'}
              </strong>
            </p>
          </div>
        </div>

        {event.redFlags.length > 0 && (
          <div className="mb-3">
            <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-2">
              Red flags
            </p>
            <ul className="space-y-1.5 text-sm text-muted-foreground">
              {event.redFlags.map((flag, i) => (
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
          <p className="text-sm text-muted-foreground">{event.explanation}</p>
        </div>

        <Button onClick={onContinue} className="w-full gap-2">
          Next one
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
  state: { phase: 'finished'; score: number; total: number; missed: PhoneEvent[] };
  onReplay: () => void;
}) {
  const pct = Math.round((state.score / state.total) * 100);
  let headline = 'Solid round.';
  if (pct === 100) headline = 'Perfect — every one.';
  else if (pct >= 80) headline = 'Sharp ear.';
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
                  <p className="text-sm font-medium">
                    {s.type === 'call' ? `Call from "${s.callerId}"` : `Text from ${s.sender}`}
                  </p>
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
          <Link to="/practice/inbox">
            Try the Inbox room
            <ArrowRight className="h-4 w-4" />
          </Link>
        </Button>
      </div>

      <div className="mt-6 flex flex-wrap gap-2 justify-center">
        <Badge variant="outline" asChild>
          <Link to="/tools/phone-safety">Tool: Phone safety check</Link>
        </Badge>
        <Badge variant="outline" asChild>
          <Link to="/guides/avoiding-scams">Read: Avoiding scams</Link>
        </Badge>
      </div>
    </div>
  );
}

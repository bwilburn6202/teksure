import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import {
  Mail,
  Phone,
  Trophy,
  Target,
  Flame,
  ShieldCheck,
  Sparkles,
  ArrowRight,
  RotateCcw,
} from 'lucide-react';
import { useTier, TIER_META } from '@/contexts/TierContext';
import {
  getPracticeProgress,
  subscribeToPracticeUpdates,
  clearPracticeProgress,
  accuracyPercent,
  type PracticeProgress,
} from '@/lib/practiceProgress';

export default function PracticeHub() {
  const { tier } = useTier();
  const [progress, setProgress] = useState<PracticeProgress>(() => getPracticeProgress());

  useEffect(() => {
    const unsub = subscribeToPracticeUpdates(() => setProgress(getPracticeProgress()));
    return unsub;
  }, []);

  const inboxStats = progress.rooms.inbox;
  const phoneStats = progress.rooms.phone;
  const totalSeen = inboxStats.totalSeen + phoneStats.totalSeen;

  const handleClear = () => {
    if (confirm('Reset all practice progress? Your streaks and totals will be cleared.')) {
      setProgress(clearPracticeProgress());
    }
  };

  return (
    <>
      <SEOHead
        title="Practice Rooms — Try spotting scams in a safe sandbox"
        path="/practice"
        description="Test your scam-spotting instincts on fake emails, calls, and texts. Nothing real, nothing risky — pure practice."
      />
      <Navbar />

      <main className="min-h-screen bg-background">
        {/* Hero */}
        <section className="bg-gradient-to-br from-primary/10 via-background to-secondary/10 border-b border-border py-12 px-4">
          <div className="container max-w-3xl mx-auto text-center">
            <div className="flex justify-center mb-4">
              <div className="p-3 bg-primary/10 rounded-full">
                <ShieldCheck className="h-9 w-9 text-primary" />
              </div>
            </div>
            <h1 className="text-3xl md:text-5xl font-bold mb-3">Practice Rooms</h1>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Try spotting scams in a safe sandbox. Nothing here is real — no money moves, no
              accounts get touched. Practice the moment of "wait, is this legit?" so it's
              second nature when it counts.
            </p>

            {tier && (
              <div className="mt-5 inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-background border border-border text-sm">
                <span aria-hidden="true">{TIER_META[tier].emoji}</span>
                <span className="text-muted-foreground">Difficulty:</span>
                <span className="font-medium">{TIER_META[tier].label}</span>
                <Link
                  to="/setup"
                  className="text-xs text-primary hover:underline ml-1"
                >
                  Change
                </Link>
              </div>
            )}
          </div>
        </section>

        <div className="container max-w-5xl mx-auto px-4 py-10">
          {/* Stats strip */}
          {totalSeen > 0 && (
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-10">
              <StatTile
                icon={<Target className="h-4 w-4" />}
                label="Scenarios played"
                value={String(totalSeen)}
              />
              <StatTile
                icon={<Trophy className="h-4 w-4" />}
                label="Best inbox streak"
                value={String(inboxStats.bestStreak)}
              />
              <StatTile
                icon={<Flame className="h-4 w-4" />}
                label="Best phone streak"
                value={String(phoneStats.bestStreak)}
              />
              <StatTile
                icon={<Sparkles className="h-4 w-4" />}
                label="Overall accuracy"
                value={
                  totalSeen > 0
                    ? `${Math.round(
                        ((inboxStats.totalCorrect + phoneStats.totalCorrect) / totalSeen) * 100,
                      )}%`
                    : '—'
                }
              />
            </div>
          )}

          {/* Two rooms */}
          <div className="grid md:grid-cols-2 gap-5 mb-10">
            <RoomCard
              to="/practice/inbox"
              title="The Inbox"
              tagline="Spot phishing emails before you click."
              icon={<Mail className="h-7 w-7 text-primary" aria-hidden="true" />}
              accent="from-blue-500/10 to-blue-500/5"
              stats={
                inboxStats.totalSeen > 0
                  ? {
                      seen: inboxStats.totalSeen,
                      accuracy: accuracyPercent('inbox', progress),
                      currentStreak: inboxStats.currentStreak,
                    }
                  : null
              }
            />
            <RoomCard
              to="/practice/phone"
              title="The Phone"
              tagline="Decide whether to answer, block, or report."
              icon={<Phone className="h-7 w-7 text-primary" aria-hidden="true" />}
              accent="from-emerald-500/10 to-emerald-500/5"
              stats={
                phoneStats.totalSeen > 0
                  ? {
                      seen: phoneStats.totalSeen,
                      accuracy: accuracyPercent('phone', progress),
                      currentStreak: phoneStats.currentStreak,
                    }
                  : null
              }
            />
          </div>

          {/* How it works */}
          <Card className="border-border mb-6">
            <CardContent className="p-6">
              <h2 className="text-xl font-bold mb-3">How it works</h2>
              <ol className="space-y-3 text-sm text-muted-foreground list-decimal pl-5">
                <li>
                  Each scenario is a fake email, call, or text. Some are scams. Some are real.
                </li>
                <li>
                  You decide: <strong>safe</strong> or <strong>scam</strong>. Then we tell you
                  what to look for.
                </li>
                <li>
                  Your streak goes up for every right answer in a row, and resets when you
                  miss one. The goal isn't a perfect score — it's training your eye.
                </li>
                <li>
                  Difficulty matches your comfort level (set in{' '}
                  <Link to="/setup" className="text-primary hover:underline">
                    your tier
                  </Link>
                  ). Power users get subtle spear-phishing; brand-new users get the obvious
                  stuff.
                </li>
              </ol>
            </CardContent>
          </Card>

          {/* Footer actions */}
          <div className="flex flex-wrap items-center justify-between gap-3 text-sm">
            <div className="flex flex-wrap gap-3">
              <Button variant="ghost" size="sm" asChild>
                <Link to="/guides/avoiding-scams" className="gap-2">
                  Read the scam-spotting guide
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
              <Button variant="ghost" size="sm" asChild>
                <Link to="/scam-defense" className="gap-2">
                  Visit the Scam Defense Center
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
            </div>
            {totalSeen > 0 && (
              <Button variant="ghost" size="sm" onClick={handleClear} className="gap-2 text-muted-foreground">
                <RotateCcw className="h-4 w-4" />
                Clear practice history
              </Button>
            )}
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}

// ---------------------------------------------------------------------------

function StatTile({ icon, label, value }: { icon: React.ReactNode; label: string; value: string }) {
  return (
    <div className="rounded-lg border border-border bg-card p-3">
      <div className="flex items-center gap-2 text-xs text-muted-foreground mb-1">
        {icon}
        <span>{label}</span>
      </div>
      <p className="text-2xl font-bold">{value}</p>
    </div>
  );
}

function RoomCard({
  to,
  title,
  tagline,
  icon,
  accent,
  stats,
}: {
  to: string;
  title: string;
  tagline: string;
  icon: React.ReactNode;
  accent: string;
  stats: { seen: number; accuracy: number; currentStreak: number } | null;
}) {
  return (
    <Link
      to={to}
      className={`group block rounded-2xl border border-border bg-gradient-to-br ${accent} p-6 transition-all hover:border-primary/40 hover:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary`}
    >
      <div className="flex items-start justify-between mb-4">
        <div className="p-3 rounded-xl bg-background border border-border">{icon}</div>
        <ArrowRight className="h-5 w-5 text-muted-foreground group-hover:text-primary group-hover:translate-x-0.5 transition-all" />
      </div>
      <h3 className="text-xl font-bold mb-1">{title}</h3>
      <p className="text-sm text-muted-foreground mb-4">{tagline}</p>

      {stats ? (
        <div className="flex items-center gap-4 text-xs text-muted-foreground border-t border-border/60 pt-3">
          <span>
            <strong className="text-foreground">{stats.seen}</strong> played
          </span>
          <span>
            <strong className="text-foreground">{stats.accuracy}%</strong> accuracy
          </span>
          {stats.currentStreak > 0 && (
            <span className="ml-auto inline-flex items-center gap-1 text-orange-600 dark:text-orange-400">
              <Flame className="h-3.5 w-3.5" />
              {stats.currentStreak} streak
            </span>
          )}
        </div>
      ) : (
        <p className="text-xs text-muted-foreground border-t border-border/60 pt-3">
          New — start your first round
        </p>
      )}
    </Link>
  );
}

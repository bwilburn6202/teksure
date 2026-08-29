import { useState } from "react";
import SEOHead from "@/components/SEOHead";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Target, Trash2, Printer, RotateCcw } from "lucide-react";

interface Game {
  id: string;
  date: string;
  alley: string;
  scores: number[];
  total: number;
  avg: number;
  best: number;
  note: string;
}

export default function BowlingScoreCard() {
  const [games, setGames] = useState<Game[]>([]);
  const [form, setForm] = useState({
    date: new Date().toISOString().slice(0, 10),
    alley: "",
    g1: "", g2: "", g3: "",
    note: "",
  });

  function add() {
    const scores = [parseInt(form.g1, 10), parseInt(form.g2, 10), parseInt(form.g3, 10)]
      .filter(n => Number.isFinite(n) && n >= 0 && n <= 300);
    if (scores.length === 0) return;
    const total = scores.reduce((s, n) => s + n, 0);
    const avg = total / scores.length;
    const best = Math.max(...scores);
    setGames(prev => [...prev, {
      id: Date.now().toString() + Math.random(),
      date: form.date,
      alley: form.alley.trim(),
      scores,
      total,
      avg,
      best,
      note: form.note.trim(),
    }]);
    setForm({ ...form, alley: "", g1: "", g2: "", g3: "", note: "" });
  }

  function remove(id: string) {
    setGames(prev => prev.filter(g => g.id !== id));
  }

  function reset() { setGames([]); }

  const allScores = games.flatMap(g => g.scores);
  const seasonAvg = allScores.length ? (allScores.reduce((s, n) => s + n, 0) / allScores.length).toFixed(1) : "0";
  const seasonHigh = allScores.length ? Math.max(...allScores) : 0;
  const gamesPlayed = allScores.length;

  return (
    <main className="min-h-screen bg-muted">
      <SEOHead title="Bowling Score Card | TekSure" description="Log up to 3 games per session. See your season average, high game, and total games. Print for league records." />
      <div className="max-w-2xl mx-auto px-4 py-8 print:p-4">
        <div className="mb-6 print:hidden">
          <div className="flex items-center gap-2 mb-1">
            <Target className="h-7 w-7 text-danger-foreground" />
            <h1 className="text-3xl font-bold text-foreground">Bowling Score Card</h1>
          </div>
          <p className="text-muted-foreground text-lg">Log your scores after league night or open bowling. Watch your average climb over the season.</p>
        </div>

        {games.length > 0 && (
          <div className="grid grid-cols-3 gap-3 mb-4">
            <Card><CardContent className="py-3 px-3 text-center"><p className="text-sm text-muted-foreground">Games played</p><p className="text-2xl font-bold text-danger-foreground">{gamesPlayed}</p></CardContent></Card>
            <Card><CardContent className="py-3 px-3 text-center"><p className="text-sm text-muted-foreground">Season average</p><p className="text-2xl font-bold text-danger-foreground">{seasonAvg}</p></CardContent></Card>
            <Card><CardContent className="py-3 px-3 text-center"><p className="text-sm text-muted-foreground">High game</p><p className="text-2xl font-bold text-danger-foreground">{seasonHigh}</p></CardContent></Card>
          </div>
        )}

        <Card className="mb-4 print:hidden">
          <CardContent className="py-4 px-4 space-y-2">
            <h2 className="text-lg font-semibold">Log a session</h2>
            <div className="grid grid-cols-2 gap-2">
              <Input type="date" value={form.date} onChange={e => setForm(f => ({ ...f, date: e.target.value }))} />
              <Input value={form.alley} onChange={e => setForm(f => ({ ...f, alley: e.target.value }))} placeholder="Alley / lane" />
            </div>
            <div className="grid grid-cols-3 gap-2">
              <Input type="number" min="0" max="300" value={form.g1} onChange={e => setForm(f => ({ ...f, g1: e.target.value }))} placeholder="Game 1" />
              <Input type="number" min="0" max="300" value={form.g2} onChange={e => setForm(f => ({ ...f, g2: e.target.value }))} placeholder="Game 2" />
              <Input type="number" min="0" max="300" value={form.g3} onChange={e => setForm(f => ({ ...f, g3: e.target.value }))} placeholder="Game 3" />
            </div>
            <Input value={form.note} onChange={e => setForm(f => ({ ...f, note: e.target.value }))} placeholder="Note (oil pattern, new ball, tournament)" />
            <Button onClick={add} className="bg-rose-700 hover:bg-rose-800">Log Session</Button>
          </CardContent>
        </Card>

        {games.length > 0 && (
          <Card>
            <CardContent className="py-4 px-4">
              <h2 className="text-lg font-semibold mb-2 flex items-center justify-between">
                <span>Sessions</span>
                <div className="flex gap-1 print:hidden">
                  <Button variant="outline" size="sm" onClick={reset} className="gap-1"><RotateCcw className="h-3 w-3" />Reset</Button>
                  <Button variant="outline" size="sm" onClick={() => window.print()} className="gap-1"><Printer className="h-3 w-3" />Print</Button>
                </div>
              </h2>
              <div className="divide-y">
                {[...games].reverse().map(g => (
                  <div key={g.id} className="py-2 text-sm flex items-start justify-between gap-2">
                    <div className="flex-1 min-w-0">
                      <div className="flex flex-wrap gap-2 items-center">
                        <span className="text-muted-foreground text-sm">{g.date}</span>
                        {g.alley && <span className="text-sm text-foreground">{g.alley}</span>}
                      </div>
                      <p className="font-semibold text-foreground mt-0.5">
                        {g.scores.join(" / ")} &nbsp; <span className="text-sm font-normal text-muted-foreground">total {g.total}, avg {g.avg.toFixed(1)}</span>
                      </p>
                      {g.note && <p className="text-sm text-muted-foreground italic mt-0.5">{g.note}</p>}
                    </div>
                    <Button variant="ghost" size="icon" onClick={() => remove(g.id)} className="h-6 w-6 text-danger-foreground hover:text-danger-foreground print:hidden">
                      <Trash2 className="h-3 w-3" />
                    </Button>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        )}

        <Card className="mt-4 bg-info border-info-foreground/25">
          <CardContent className="py-3 px-4">
            <p className="text-base text-info-foreground"><span className="font-semibold">League average matters:</span> Your USBC league average is calculated after 21 games. League secretaries use it for handicap. Most senior leagues use 80% handicap to a 220 scratch — meaning a lower-average bowler gets pins added to make a fair game.</p>
          </CardContent>
        </Card>
      </div>
    </main>
  );
}

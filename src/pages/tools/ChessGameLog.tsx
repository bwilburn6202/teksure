import { useState } from "react";
import SEOHead from "@/components/SEOHead";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Crown, Trash2, Printer, PlusCircle } from "lucide-react";

type Result = "Win" | "Loss" | "Draw";
type Color = "White" | "Black";

interface Game {
  id: string;
  date: string;
  opponent: string;
  color: Color;
  result: Result;
  timeControl: string;
  note: string;
}

export default function ChessGameLog() {
  const [games, setGames] = useState<Game[]>([]);
  const [form, setForm] = useState({
    date: new Date().toISOString().slice(0, 10),
    opponent: "",
    color: "White" as Color,
    result: "Win" as Result,
    timeControl: "10+0",
    note: "",
  });

  function add() {
    if (!form.opponent.trim()) return;
    setGames(prev => [...prev, {
      id: Date.now().toString() + Math.random(),
      date: form.date,
      opponent: form.opponent.trim(),
      color: form.color,
      result: form.result,
      timeControl: form.timeControl,
      note: form.note.trim(),
    }]);
    setForm({ ...form, opponent: "", note: "" });
  }

  function remove(id: string) {
    setGames(prev => prev.filter(g => g.id !== id));
  }

  const wins = games.filter(g => g.result === "Win").length;
  const losses = games.filter(g => g.result === "Loss").length;
  const draws = games.filter(g => g.result === "Draw").length;
  const total = games.length || 1;
  const winRate = ((wins / total) * 100).toFixed(0);
  const score = wins + 0.5 * draws;

  function resultColor(r: Result): string {
    return r === "Win" ? "bg-emerald-50 text-emerald-700 border-emerald-200" : r === "Loss" ? "bg-rose-50 text-rose-700 border-rose-200" : "bg-amber-50 text-amber-700 border-amber-200";
  }

  return (
    <main className="min-h-screen bg-muted">
      <SEOHead title="Chess Game Log | TekSure" description="Track every chess game you play - opponent, color, time control, result. See your win rate and game total. Print for tournament records." />
      <div className="max-w-2xl mx-auto px-4 py-8 print:p-4">
        <div className="mb-6 print:hidden">
          <div className="flex items-center gap-2 mb-1">
            <Crown className="h-7 w-7 text-warn-foreground" />
            <h1 className="text-3xl font-bold text-foreground">Chess Game Log</h1>
          </div>
          <p className="text-muted-foreground text-lg">Log every game over the board or online. Patterns and progress become visible after about 20 games.</p>
        </div>

        {games.length > 0 && (
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 mb-4">
            <Card><CardContent className="py-3 px-2 text-center"><p className="text-sm text-muted-foreground">Games</p><p className="text-xl font-bold text-foreground">{games.length}</p></CardContent></Card>
            <Card><CardContent className="py-3 px-2 text-center"><p className="text-sm text-muted-foreground">Win rate</p><p className="text-xl font-bold text-success-foreground">{winRate}%</p></CardContent></Card>
            <Card><CardContent className="py-3 px-2 text-center"><p className="text-sm text-muted-foreground">Record</p><p className="text-base font-semibold text-foreground">{wins}-{losses}-{draws}</p></CardContent></Card>
            <Card><CardContent className="py-3 px-2 text-center"><p className="text-sm text-muted-foreground">Score</p><p className="text-base font-bold text-foreground">{score} / {games.length}</p></CardContent></Card>
          </div>
        )}

        <Card className="mb-4 print:hidden">
          <CardContent className="py-4 px-4 space-y-2">
            <h2 className="text-lg font-semibold flex items-center gap-2"><PlusCircle className="h-5 w-5 text-warn-foreground" />Log a game</h2>
            <Input value={form.opponent} onChange={e => setForm(f => ({ ...f, opponent: e.target.value }))} placeholder="Opponent name or handle" />
            <div className="grid grid-cols-2 gap-2">
              <Input type="date" value={form.date} onChange={e => setForm(f => ({ ...f, date: e.target.value }))} />
              <Input value={form.timeControl} onChange={e => setForm(f => ({ ...f, timeControl: e.target.value }))} placeholder="Time control (10+0, 15+10, classical)" />
            </div>
            <div className="grid grid-cols-2 gap-2">
              <select value={form.color} onChange={e => setForm(f => ({ ...f, color: e.target.value as Color }))} className="border border-border rounded-md px-3 py-2 text-base bg-card">
                <option>White</option>
                <option>Black</option>
              </select>
              <select value={form.result} onChange={e => setForm(f => ({ ...f, result: e.target.value as Result }))} className="border border-border rounded-md px-3 py-2 text-base bg-card">
                <option>Win</option>
                <option>Loss</option>
                <option>Draw</option>
              </select>
            </div>
            <Input value={form.note} onChange={e => setForm(f => ({ ...f, note: e.target.value }))} placeholder="Note (opening, mistake, key moment)" />
            <Button onClick={add} className="bg-amber-700 hover:bg-amber-800">Log Game</Button>
          </CardContent>
        </Card>

        {games.length > 0 && (
          <Card>
            <CardContent className="py-4 px-4">
              <h2 className="text-lg font-semibold mb-2 flex items-center justify-between">
                <span>Game history</span>
                <Button variant="outline" size="sm" onClick={() => window.print()} className="gap-1 print:hidden">
                  <Printer className="h-3 w-3" />Print
                </Button>
              </h2>
              <div className="divide-y">
                {[...games].reverse().map(g => (
                  <div key={g.id} className="py-2 flex items-start justify-between gap-2 text-sm">
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 flex-wrap">
                        <span className="text-muted-foreground text-sm">{g.date}</span>
                        <Badge variant="outline" className="text-xs">{g.color}</Badge>
                        <Badge variant="outline" className={`text-xs ${resultColor(g.result)}`}>{g.result}</Badge>
                        <Badge variant="secondary" className="text-xs">{g.timeControl}</Badge>
                      </div>
                      <p className="font-semibold text-foreground mt-0.5">vs {g.opponent}</p>
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
            <p className="text-base text-info-foreground"><span className="font-semibold">Play more, study a little:</span> Most senior improvement comes from playing slow games and reviewing one move per game. Free tools: chess.com Game Review (3 free reviews per day), lichess.org analysis (unlimited and free). Join a USCF rated club if you want a real rating.</p>
          </CardContent>
        </Card>
      </div>
    </main>
  );
}

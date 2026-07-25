import { useState } from "react";
import SEOHead from "@/components/SEOHead";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Trophy, RotateCcw, Printer } from "lucide-react";

interface State {
  team1Name: string;
  team2Name: string;
  team1Score: number;
  team2Score: number;
  serverTeam: 1 | 2;
  serverNumber: 1 | 2;
  winningScore: 11 | 15 | 21;
  log: string[];
}

const initial: State = {
  team1Name: "Team 1",
  team2Name: "Team 2",
  team1Score: 0,
  team2Score: 0,
  serverTeam: 1,
  serverNumber: 1,
  winningScore: 11,
  log: [],
};

export default function PickleballScoreKeeper() {
  const [s, setS] = useState<State>(initial);

  function rallyResult(serverWon: boolean) {
    const log = [...s.log];
    let { team1Score, team2Score, serverTeam, serverNumber } = s;
    if (serverWon) {
      if (serverTeam === 1) team1Score++; else team2Score++;
      log.unshift("Point for server (" + (serverTeam === 1 ? s.team1Name : s.team2Name) + ")");
    } else {
      if (serverNumber === 1) {
        serverNumber = 2;
        log.unshift("Side-out attempt — second server now");
      } else {
        serverTeam = serverTeam === 1 ? 2 : 1;
        serverNumber = 1;
        log.unshift("SIDE OUT to " + (serverTeam === 1 ? s.team1Name : s.team2Name));
      }
    }
    setS({ ...s, team1Score, team2Score, serverTeam, serverNumber, log: log.slice(0, 15) });
  }

  function reset() {
    setS({ ...initial, team1Name: s.team1Name, team2Name: s.team2Name, winningScore: s.winningScore });
  }

  const winBy = 2;
  const winner = s.team1Score >= s.winningScore && s.team1Score - s.team2Score >= winBy
    ? s.team1Name
    : s.team2Score >= s.winningScore && s.team2Score - s.team1Score >= winBy
    ? s.team2Name
    : null;

  const callout = "Score: " + s.team1Score + " - " + s.team2Score + " - " + s.serverNumber;
  const serverName = s.serverTeam === 1 ? s.team1Name : s.team2Name;

  return (
    <div className="min-h-screen bg-gray-50">
      <SEOHead title="Pickleball Score Keeper | TekSure" description="A no-fuss pickleball scoreboard for older players. Track the score, server number, and side-out without arguing. Plays to 11, 15, or 21. Print the score history at game end." />
      <div className="max-w-2xl mx-auto px-4 py-8 print:p-4">
        <div className="mb-6 print:hidden">
          <div className="flex items-center gap-2 mb-1">
            <Trophy className="h-7 w-7 text-amber-600" />
            <h1 className="text-3xl font-bold text-gray-900">Pickleball Score Keeper</h1>
          </div>
          <p className="text-gray-600 text-lg">No more debates about whose turn it is to serve. Tap who won the rally — the score and server update automatically.</p>
        </div>

        <Card className="mb-4 print:hidden">
          <CardContent className="py-4 px-4 space-y-3">
            <div className="grid grid-cols-2 gap-2">
              <Input value={s.team1Name} onChange={e => setS({ ...s, team1Name: e.target.value })} placeholder="Team 1 name" />
              <Input value={s.team2Name} onChange={e => setS({ ...s, team2Name: e.target.value })} placeholder="Team 2 name" />
            </div>
            <div className="flex gap-2 text-sm items-center">
              <span className="font-medium">Game to:</span>
              {([11, 15, 21] as const).map(n => (
                <Button key={n} size="sm" variant={s.winningScore === n ? "default" : "outline"} onClick={() => setS({ ...s, winningScore: n })}>{n}</Button>
              ))}
            </div>
          </CardContent>
        </Card>

        {winner && (
          <Card className="mb-4 bg-amber-50 border-amber-300 border-2">
            <CardContent className="py-6 px-4 text-center">
              <p className="text-2xl font-bold text-amber-800">{winner} wins!</p>
              <p className="text-lg text-amber-700">{s.team1Score} - {s.team2Score}</p>
            </CardContent>
          </Card>
        )}

        <Card className="mb-4">
          <CardContent className="py-6 px-4">
            <div className="grid grid-cols-2 gap-4">
              <div className={`text-center p-3 rounded-lg ${s.serverTeam === 1 ? "bg-amber-50 border-2 border-amber-300" : ""}`}>
                <p className="text-sm text-gray-600">{s.team1Name}</p>
                <p className="text-6xl font-bold text-gray-900">{s.team1Score}</p>
                {s.serverTeam === 1 && <p className="text-xs text-amber-700 mt-1">Server {s.serverNumber}</p>}
              </div>
              <div className={`text-center p-3 rounded-lg ${s.serverTeam === 2 ? "bg-amber-50 border-2 border-amber-300" : ""}`}>
                <p className="text-sm text-gray-600">{s.team2Name}</p>
                <p className="text-6xl font-bold text-gray-900">{s.team2Score}</p>
                {s.serverTeam === 2 && <p className="text-xs text-amber-700 mt-1">Server {s.serverNumber}</p>}
              </div>
            </div>
            <p className="text-center text-lg text-gray-700 mt-4">
              <span className="font-semibold">{serverName}</span> calls: <span className="font-mono font-bold">{callout}</span>
            </p>
          </CardContent>
        </Card>

        <div className="grid grid-cols-2 gap-2 mb-4 print:hidden">
          <Button onClick={() => rallyResult(true)} className="bg-emerald-600 hover:bg-emerald-700 h-16 text-lg">
            Server won rally
          </Button>
          <Button onClick={() => rallyResult(false)} className="bg-rose-600 hover:bg-rose-700 h-16 text-lg">
            Receiver won rally
          </Button>
        </div>

        {s.log.length > 0 && (
          <Card className="mb-4">
            <CardContent className="py-3 px-4">
              <p className="text-xs font-semibold text-gray-500 mb-1">RECENT</p>
              <ol className="text-sm text-gray-700 space-y-0.5">
                {s.log.map((entry, i) => <li key={i}>{entry}</li>)}
              </ol>
            </CardContent>
          </Card>
        )}

        <div className="flex gap-2 print:hidden">
          <Button variant="outline" onClick={reset} className="gap-2"><RotateCcw className="h-4 w-4" />Reset</Button>
          <Button variant="outline" onClick={() => window.print()} className="gap-2"><Printer className="h-4 w-4" />Print</Button>
        </div>

        <Card className="mt-4 bg-blue-50 border-blue-200">
          <CardContent className="py-3 px-4">
            <p className="text-sm text-blue-900"><span className="font-semibold">Rules reminder:</span> Only the serving team can score. The server calls THREE numbers before serving: their team score, the receiving team score, and their server number (1 or 2). Side-out switches the serve to the other team. Win by 2.</p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

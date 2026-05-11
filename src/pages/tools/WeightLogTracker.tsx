import { useState } from "react";
import SEOHead from "@/components/SEOHead";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Scale, Trash2, Printer, TrendingUp, TrendingDown, Minus } from "lucide-react";

interface Reading {
  id: string;
  date: string;
  weight: number;
  notes: string;
}

export default function WeightLogTracker() {
  const [readings, setReadings] = useState<Reading[]>([]);
  const [date, setDate] = useState(new Date().toISOString().slice(0, 10));
  const [weight, setWeight] = useState("");
  const [notes, setNotes] = useState("");
  const [goal, setGoal] = useState("");
  const [error, setError] = useState("");

  function addReading() {
    const w = parseFloat(weight);
    if (!date) { setError("Please pick a date."); return; }
    if (!weight || isNaN(w) || w <= 0 || w > 1000) { setError("Please enter a valid weight."); return; }
    setError("");
    setReadings(prev => [
      ...prev,
      { id: Date.now().toString() + Math.random(), date, weight: parseFloat(w.toFixed(1)), notes: notes.trim() },
    ]);
    setWeight("");
    setNotes("");
  }

  function remove(id: string) {
    setReadings(prev => prev.filter(r => r.id !== id));
  }

  function formatDate(s: string) {
    const [y, m, d] = s.split("-");
    return `${m}/${d}/${y}`;
  }

  const sorted = [...readings].sort((a, b) => a.date.localeCompare(b.date));
  const latest = sorted[sorted.length - 1];
  const previous = sorted[sorted.length - 2];

  function avgLast(weeks: number): number | null {
    if (sorted.length === 0) return null;
    const cutoff = new Date();
    cutoff.setDate(cutoff.getDate() - weeks * 7);
    const cutoffStr = cutoff.toISOString().slice(0, 10);
    const recent = sorted.filter(r => r.date >= cutoffStr);
    if (recent.length === 0) return null;
    return recent.reduce((s, r) => s + r.weight, 0) / recent.length;
  }

  const avg4w = avgLast(4);
  const avg12w = avgLast(12);

  const totalChange = sorted.length >= 2 ? sorted[sorted.length - 1].weight - sorted[0].weight : 0;
  const lastChange = previous && latest ? latest.weight - previous.weight : 0;

  const goalNum = parseFloat(goal);
  const goalDiff = latest && !isNaN(goalNum) ? latest.weight - goalNum : null;

  return (
    <div className="min-h-screen bg-gray-50">
      <SEOHead
        title="Weight Log Tracker | TekSure"
        description="Track weight readings over time, see 4-week and 12-week averages, and check progress against your goal. Printable for doctor visits."
      />

      <div className="max-w-2xl mx-auto px-4 py-8 print:p-4">
        <div className="mb-6">
          <div className="flex items-center gap-2 mb-1">
            <Scale className="h-7 w-7 text-blue-600" />
            <h1 className="text-3xl font-bold text-gray-900">Weight Log Tracker</h1>
          </div>
          <p className="text-gray-600 text-lg">
            Log your weight when you take it. Watch the trend over weeks, not days — that is what matters.
          </p>
        </div>

        {/* Goal */}
        <Card className="mb-4 print:shadow-none">
          <CardContent className="py-3 px-4 flex flex-wrap gap-3 items-center justify-between">
            <div className="flex items-center gap-2">
              <Label htmlFor="goal" className="text-base font-medium">Goal weight (lbs):</Label>
              <Input id="goal" type="number" min="0" step="0.1" placeholder="optional" value={goal} onChange={e => setGoal(e.target.value)} className="text-base w-24" />
            </div>
            {goalDiff !== null && Math.abs(goalDiff) > 0.05 && (
              <Badge variant="secondary" className={`text-sm ${goalDiff > 0 ? "bg-amber-100 text-amber-800" : "bg-green-100 text-green-800"}`}>
                {goalDiff > 0 ? `${Math.abs(goalDiff).toFixed(1)} lbs above goal` : `${Math.abs(goalDiff).toFixed(1)} lbs below goal`}
              </Badge>
            )}
          </CardContent>
        </Card>

        {/* Add reading */}
        <Card className="mb-6 print:hidden">
          <CardHeader>
            <CardTitle className="text-xl">Log a Weight Reading</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              <div>
                <Label htmlFor="date" className="text-base font-medium">Date</Label>
                <Input id="date" type="date" value={date} onChange={e => setDate(e.target.value)} className="mt-1 text-base" />
              </div>
              <div>
                <Label htmlFor="weight" className="text-base font-medium">Weight (lbs)</Label>
                <Input id="weight" type="number" min="0" step="0.1" placeholder="170.5" value={weight} onChange={e => setWeight(e.target.value)} className="mt-1 text-base" />
              </div>
              <div>
                <Label htmlFor="notes" className="text-base font-medium">Notes (optional)</Label>
                <Input id="notes" placeholder="e.g. After breakfast" value={notes} onChange={e => setNotes(e.target.value)} className="mt-1 text-base" />
              </div>
            </div>
            {error && <p className="text-red-600 text-sm">{error}</p>}
            <Button onClick={addReading} size="lg" className="w-full sm:w-auto text-base">
              Add Reading
            </Button>
          </CardContent>
        </Card>

        {/* Stats */}
        {sorted.length > 0 && (
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-4">
            <Card>
              <CardContent className="py-3 px-3 text-center">
                <p className="text-xs text-gray-500">Latest</p>
                <p className="text-xl font-bold text-blue-700">{latest!.weight} lbs</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="py-3 px-3 text-center">
                <p className="text-xs text-gray-500">Last change</p>
                <p className={`text-xl font-bold flex items-center justify-center gap-1 ${
                  lastChange > 0 ? "text-amber-600" : lastChange < 0 ? "text-green-600" : "text-gray-500"
                }`}>
                  {lastChange > 0 ? <TrendingUp className="h-4 w-4" /> : lastChange < 0 ? <TrendingDown className="h-4 w-4" /> : <Minus className="h-4 w-4" />}
                  {lastChange === 0 ? "—" : `${lastChange > 0 ? "+" : ""}${lastChange.toFixed(1)}`}
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="py-3 px-3 text-center">
                <p className="text-xs text-gray-500">4-week avg</p>
                <p className="text-xl font-bold text-gray-700">{avg4w ? `${avg4w.toFixed(1)} lbs` : "—"}</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="py-3 px-3 text-center">
                <p className="text-xs text-gray-500">12-week avg</p>
                <p className="text-xl font-bold text-gray-700">{avg12w ? `${avg12w.toFixed(1)} lbs` : "—"}</p>
              </CardContent>
            </Card>
          </div>
        )}

        {/* Total change banner */}
        {sorted.length >= 2 && (
          <div className="mb-4 px-3 py-2 rounded-lg bg-gray-100 text-center text-sm">
            <span className="text-gray-700">Total change since first reading: </span>
            <span className={`font-bold ${totalChange > 0 ? "text-amber-700" : totalChange < 0 ? "text-green-700" : "text-gray-700"}`}>
              {totalChange > 0 ? "+" : ""}{totalChange.toFixed(1)} lbs
            </span>
          </div>
        )}

        {/* Readings list */}
        {sorted.length === 0 ? (
          <Card className="print:hidden">
            <CardContent className="py-10 text-center text-gray-500">
              <Scale className="h-10 w-10 text-gray-300 mx-auto mb-2" />
              <p className="text-lg">No readings yet.</p>
              <p className="text-sm mt-1">Add your first weight reading above.</p>
            </CardContent>
          </Card>
        ) : (
          <Card className="print:break-inside-avoid">
            <CardHeader className="pb-2 pt-3">
              <CardTitle className="text-lg">Readings (newest first)</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="divide-y">
                {[...sorted].reverse().map((r, idx, arr) => {
                  const next = arr[idx + 1];
                  const change = next ? r.weight - next.weight : 0;
                  return (
                    <div key={r.id} className="flex items-center justify-between py-2 gap-2">
                      <div className="flex items-center gap-3 flex-1 min-w-0">
                        <span className="text-sm text-gray-500 w-20 shrink-0">{formatDate(r.date)}</span>
                        <span className="text-base font-semibold text-gray-900 w-24">{r.weight} lbs</span>
                        {next && (
                          <span className={`text-xs ${change > 0 ? "text-amber-600" : change < 0 ? "text-green-600" : "text-gray-400"}`}>
                            {change > 0 ? "+" : ""}{change.toFixed(1)}
                          </span>
                        )}
                        {r.notes && <span className="text-xs text-gray-400 italic truncate">{r.notes}</span>}
                      </div>
                      <Button
                        variant="ghost"
                        size="icon"
                        className="h-8 w-8 text-red-400 hover:text-red-600 print:hidden"
                        onClick={() => remove(r.id)}
                        aria-label="Remove reading"
                      >
                        <Trash2 className="h-3 w-3" />
                      </Button>
                    </div>
                  );
                })}
              </div>
            </CardContent>
          </Card>
        )}

        {sorted.length > 0 && (
          <div className="flex flex-wrap gap-3 mt-4 print:hidden">
            <Button variant="outline" onClick={() => window.print()} className="gap-2">
              <Printer className="h-4 w-4" />
              Print for Doctor Visit
            </Button>
          </div>
        )}

        <Card className="mt-6 bg-blue-50 border-blue-200 print:hidden">
          <CardContent className="py-3 px-4">
            <p className="text-sm text-blue-800">
              <span className="font-semibold">Quick Tip: </span>
              Weigh yourself at the same time each day, in the same clothes (or none), on the same scale. Same conditions give you the most useful trend.
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

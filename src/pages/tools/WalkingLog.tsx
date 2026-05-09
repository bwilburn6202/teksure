import { useState } from "react";
import SEOHead from "@/components/SEOHead";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Footprints, Trash2, Printer, PlusCircle } from "lucide-react";

interface Walk {
  id: string;
  date: string;
  minutes: number;
  miles: number;
  route: string;
  notes: string;
}

export default function WalkingLog() {
  const [walks, setWalks] = useState<Walk[]>([]);
  const [form, setForm] = useState({
    date: new Date().toISOString().slice(0, 10),
    minutes: "",
    miles: "",
    route: "",
    notes: "",
  });
  const [error, setError] = useState("");

  function add() {
    const m = parseFloat(form.minutes);
    if (!m || m <= 0 || m > 1000) { setError("Please enter how many minutes you walked."); return; }
    setError("");
    setWalks(prev => [
      ...prev,
      {
        id: Date.now().toString() + Math.random(),
        date: form.date,
        minutes: m,
        miles: form.miles ? parseFloat(form.miles) : 0,
        route: form.route.trim(),
        notes: form.notes.trim(),
      },
    ]);
    setForm(f => ({ ...f, minutes: "", miles: "", route: "", notes: "" }));
  }

  function remove(id: string) {
    setWalks(prev => prev.filter(w => w.id !== id));
  }

  function formatDate(s: string) {
    const [y, m, d] = s.split("-");
    return `${m}/${d}/${y}`;
  }

  // Last 7 days
  const cutoff = new Date();
  cutoff.setDate(cutoff.getDate() - 7);
  const cutoffStr = cutoff.toISOString().slice(0, 10);
  const last7 = walks.filter(w => w.date >= cutoffStr);
  const totalMinutes = walks.reduce((s, w) => s + w.minutes, 0);
  const totalMiles = walks.reduce((s, w) => s + w.miles, 0);
  const week7Min = last7.reduce((s, w) => s + w.minutes, 0);
  const week7Miles = last7.reduce((s, w) => s + w.miles, 0);
  const weeklyGoalMet = week7Min >= 150; // CDC recommends 150 minutes per week

  const sorted = [...walks].sort((a, b) => b.date.localeCompare(a.date));

  return (
    <div className="min-h-screen bg-gray-50">
      <SEOHead
        title="Walking Log | TekSure"
        description="Log every walk — minutes, miles, route, notes. See weekly totals against the 150-minute health goal."
      />

      <div className="max-w-2xl mx-auto px-4 py-8 print:p-4">
        <div className="mb-6">
          <div className="flex items-center gap-2 mb-1">
            <Footprints className="h-7 w-7 text-green-600" />
            <h1 className="text-3xl font-bold text-gray-900">Walking Log</h1>
          </div>
          <p className="text-gray-600 text-lg">
            Log every walk and watch the minutes add up. CDC says 150 minutes a week is the goal for adults.
          </p>
        </div>

        {/* Stats */}
        {walks.length > 0 && (
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-4">
            <Card>
              <CardContent className="py-3 px-3 text-center">
                <p className="text-xs text-gray-500">Last 7 days</p>
                <p className="text-xl font-bold text-green-700">{week7Min} min</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="py-3 px-3 text-center">
                <p className="text-xs text-gray-500">Last 7 days miles</p>
                <p className="text-xl font-bold text-green-700">{week7Miles.toFixed(1)} mi</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="py-3 px-3 text-center">
                <p className="text-xs text-gray-500">All-time minutes</p>
                <p className="text-xl font-bold text-gray-700">{totalMinutes}</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="py-3 px-3 text-center">
                <p className="text-xs text-gray-500">All-time miles</p>
                <p className="text-xl font-bold text-gray-700">{totalMiles.toFixed(1)}</p>
              </CardContent>
            </Card>
          </div>
        )}

        {/* Goal banner */}
        {walks.length > 0 && (
          <Card className={`mb-4 ${weeklyGoalMet ? "bg-green-50 border-green-200" : "bg-amber-50 border-amber-200"}`}>
            <CardContent className="py-3 px-4 text-center">
              {weeklyGoalMet ? (
                <p className="text-sm text-green-800">
                  <span className="font-semibold">Goal met!</span> {week7Min} of 150 minutes this week. Keep it up.
                </p>
              ) : (
                <p className="text-sm text-amber-800">
                  <span className="font-semibold">{week7Min} of 150 minutes</span> this week — {150 - week7Min} more to go.
                </p>
              )}
              <div className="w-full bg-white border border-current rounded-full h-2 mt-2 overflow-hidden">
                <div
                  className={`h-2 rounded-full transition-all ${weeklyGoalMet ? "bg-green-500" : "bg-amber-500"}`}
                  style={{ width: `${Math.min(100, (week7Min / 150) * 100)}%` }}
                />
              </div>
            </CardContent>
          </Card>
        )}

        {/* Add form */}
        <Card className="mb-6 print:hidden">
          <CardHeader>
            <CardTitle className="text-xl flex items-center gap-2">
              <PlusCircle className="h-5 w-5 text-green-600" />
              Log a Walk
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              <div>
                <Label htmlFor="walk-date" className="text-base font-medium">Date</Label>
                <Input id="walk-date" type="date" value={form.date} onChange={e => setForm(f => ({ ...f, date: e.target.value }))} className="mt-1 text-base" />
              </div>
              <div>
                <Label htmlFor="minutes" className="text-base font-medium">Minutes</Label>
                <Input id="minutes" type="number" min="1" placeholder="30" value={form.minutes} onChange={e => setForm(f => ({ ...f, minutes: e.target.value }))} className="mt-1 text-base" />
              </div>
              <div>
                <Label htmlFor="miles" className="text-base font-medium">Miles (optional)</Label>
                <Input id="miles" type="number" min="0" step="0.1" placeholder="1.5" value={form.miles} onChange={e => setForm(f => ({ ...f, miles: e.target.value }))} className="mt-1 text-base" />
              </div>
            </div>
            <div>
              <Label htmlFor="route" className="text-base font-medium">Route (optional)</Label>
              <Input id="route" placeholder="e.g. Around the block, park trail" value={form.route} onChange={e => setForm(f => ({ ...f, route: e.target.value }))} className="mt-1 text-base" />
            </div>
            <div>
              <Label htmlFor="walk-notes" className="text-base font-medium">Notes (optional)</Label>
              <Input id="walk-notes" placeholder="e.g. Sunny day, walked with neighbor" value={form.notes} onChange={e => setForm(f => ({ ...f, notes: e.target.value }))} className="mt-1 text-base" />
            </div>
            {error && <p className="text-red-600 text-sm">{error}</p>}
            <Button onClick={add} size="lg" className="w-full sm:w-auto text-base">Log Walk</Button>
          </CardContent>
        </Card>

        {walks.length > 0 && (
          <div className="mb-3 flex flex-wrap items-center justify-between gap-3 print:hidden">
            <p className="text-sm text-gray-500">{walks.length} walk{walks.length !== 1 ? "s" : ""} logged</p>
            <Button variant="outline" onClick={() => window.print()} className="gap-2">
              <Printer className="h-4 w-4" />
              Print
            </Button>
          </div>
        )}

        {/* List */}
        {sorted.length === 0 ? (
          <Card className="print:hidden">
            <CardContent className="py-10 text-center text-gray-500">
              <Footprints className="h-10 w-10 text-gray-300 mx-auto mb-2" />
              <p className="text-lg">No walks logged yet.</p>
              <p className="text-sm mt-1">Take a short walk today and log it above.</p>
            </CardContent>
          </Card>
        ) : (
          <Card>
            <CardHeader className="pb-2 pt-3">
              <CardTitle className="text-lg">Walk Log (newest first)</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="divide-y">
                {sorted.map(w => (
                  <div key={w.id} className="py-2 flex items-start justify-between gap-2">
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 flex-wrap">
                        <span className="text-sm font-medium text-gray-700 w-20">{formatDate(w.date)}</span>
                        <Badge variant="secondary" className="text-xs">{w.minutes} min</Badge>
                        {w.miles > 0 && <Badge variant="outline" className="text-xs">{w.miles.toFixed(1)} mi</Badge>}
                      </div>
                      {w.route && <p className="text-xs text-gray-600 mt-1">{w.route}</p>}
                      {w.notes && <p className="text-xs text-gray-500 italic">{w.notes}</p>}
                    </div>
                    <Button
                      variant="ghost"
                      size="icon"
                      className="h-7 w-7 text-red-400 hover:text-red-600 print:hidden"
                      onClick={() => remove(w.id)}
                      aria-label="Remove walk"
                    >
                      <Trash2 className="h-3 w-3" />
                    </Button>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        )}

        <Card className="mt-6 bg-blue-50 border-blue-200 print:hidden">
          <CardContent className="py-3 px-4">
            <p className="text-sm text-blue-800">
              <span className="font-semibold">Quick Tip: </span>
              You do not need to walk 150 minutes in one go — three 10-minute walks count the same as a 30-minute walk. Break it up however works for you.
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

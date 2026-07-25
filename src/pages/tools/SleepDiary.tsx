import { useState } from "react";
import SEOHead from "@/components/SEOHead";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Moon, Trash2, Printer, Star } from "lucide-react";

interface SleepEntry {
  id: string;
  date: string;
  bedtime: string;
  wakeTime: string;
  quality: number; // 1-5
  notes: string;
}

function calcHours(bedtime: string, wakeTime: string): number {
  if (!bedtime || !wakeTime) return 0;
  const [bh, bm] = bedtime.split(":").map(Number);
  const [wh, wm] = wakeTime.split(":").map(Number);
  const bedMinutes = bh * 60 + bm;
  let wakeMinutes = wh * 60 + wm;
  // If wake time is before bedtime, it crossed midnight
  if (wakeMinutes <= bedMinutes) wakeMinutes += 24 * 60;
  return (wakeMinutes - bedMinutes) / 60;
}

export default function SleepDiary() {
  const [entries, setEntries] = useState<SleepEntry[]>([]);
  const [form, setForm] = useState({
    date: new Date().toISOString().slice(0, 10),
    bedtime: "22:30",
    wakeTime: "06:30",
    quality: 3,
    notes: "",
  });
  const [error, setError] = useState("");

  function add() {
    if (!form.date) { setError("Please pick a date."); return; }
    if (!form.bedtime || !form.wakeTime) { setError("Please enter both bedtime and wake time."); return; }
    setError("");
    setEntries(prev => [
      ...prev,
      { id: Date.now().toString() + Math.random(), date: form.date, bedtime: form.bedtime, wakeTime: form.wakeTime, quality: form.quality, notes: form.notes.trim() },
    ]);
    setForm(f => ({ ...f, notes: "" }));
  }

  function remove(id: string) {
    setEntries(prev => prev.filter(e => e.id !== id));
  }

  function formatDate(s: string) {
    const [y, m, d] = s.split("-");
    return `${m}/${d}/${y}`;
  }

  function formatTime(t: string) {
    if (!t) return "";
    const [h, m] = t.split(":");
    const hh = parseInt(h, 10);
    const period = hh >= 12 ? "PM" : "AM";
    const hour12 = hh === 0 ? 12 : hh > 12 ? hh - 12 : hh;
    return `${hour12}:${m} ${period}`;
  }

  const sorted = [...entries].sort((a, b) => a.date.localeCompare(b.date));
  const last7 = sorted.slice(-7);
  const avgHours = last7.length > 0 ? last7.reduce((s, e) => s + calcHours(e.bedtime, e.wakeTime), 0) / last7.length : 0;
  const avgQuality = last7.length > 0 ? last7.reduce((s, e) => s + e.quality, 0) / last7.length : 0;

  return (
    <div className="min-h-screen bg-gray-50">
      <SEOHead
        title="Sleep Diary | TekSure"
        description="Track your sleep for one week. Log bedtime, wake time, quality, and notes. Print for your doctor visit."
      />

      <div className="max-w-2xl mx-auto px-4 py-8 print:p-4">
        <div className="mb-6">
          <div className="flex items-center gap-2 mb-1">
            <Moon className="h-7 w-7 text-indigo-600" />
            <h1 className="text-3xl font-bold text-gray-900">Sleep Diary</h1>
          </div>
          <p className="text-gray-600 text-lg">
            Log your sleep each morning for one week. Patterns become much clearer than relying on memory.
          </p>
        </div>

        {/* Stats */}
        {last7.length > 0 && (
          <div className="grid grid-cols-3 gap-3 mb-4">
            <Card>
              <CardContent className="py-3 px-3 text-center">
                <p className="text-xs text-gray-500">Nights logged</p>
                <p className="text-xl font-bold text-indigo-700">{last7.length}/7</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="py-3 px-3 text-center">
                <p className="text-xs text-gray-500">Average sleep</p>
                <p className="text-xl font-bold text-indigo-700">{avgHours.toFixed(1)} hrs</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="py-3 px-3 text-center">
                <p className="text-xs text-gray-500">Average quality</p>
                <p className="text-xl font-bold text-indigo-700">{avgQuality.toFixed(1)} / 5</p>
              </CardContent>
            </Card>
          </div>
        )}

        {/* Entry form */}
        <Card className="mb-6 print:hidden">
          <CardHeader>
            <CardTitle className="text-xl">Log a Night of Sleep</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              <div>
                <Label htmlFor="sleep-date" className="text-base font-medium">Date (morning of)</Label>
                <Input id="sleep-date" type="date" value={form.date} onChange={e => setForm(f => ({ ...f, date: e.target.value }))} className="mt-1 text-base" />
              </div>
              <div>
                <Label htmlFor="bedtime" className="text-base font-medium">Bedtime</Label>
                <Input id="bedtime" type="time" value={form.bedtime} onChange={e => setForm(f => ({ ...f, bedtime: e.target.value }))} className="mt-1 text-base" />
              </div>
              <div>
                <Label htmlFor="wake" className="text-base font-medium">Wake Time</Label>
                <Input id="wake" type="time" value={form.wakeTime} onChange={e => setForm(f => ({ ...f, wakeTime: e.target.value }))} className="mt-1 text-base" />
              </div>
            </div>
            <div>
              <Label className="text-base font-medium">Quality (1 = poor, 5 = great)</Label>
              <div className="flex gap-1 mt-1">
                {[1, 2, 3, 4, 5].map(n => (
                  <button
                    key={n}
                    type="button"
                    onClick={() => setForm(f => ({ ...f, quality: n }))}
                    className="p-1"
                    aria-label={`Rate ${n} stars`}
                  >
                    <Star className={`h-7 w-7 ${n <= form.quality ? "fill-amber-400 text-amber-400" : "text-gray-300"}`} />
                  </button>
                ))}
              </div>
            </div>
            <div>
              <Label htmlFor="sleep-notes" className="text-base font-medium">Notes (optional)</Label>
              <Input id="sleep-notes" placeholder="e.g. Woke up twice, took 30 minutes to fall asleep" value={form.notes} onChange={e => setForm(f => ({ ...f, notes: e.target.value }))} className="mt-1 text-base" />
            </div>
            {error && <p className="text-red-600 text-sm">{error}</p>}
            <Button onClick={add} size="lg" className="w-full sm:w-auto text-base">Log Tonight</Button>
          </CardContent>
        </Card>

        {sorted.length > 0 && (
          <div className="mb-3 flex flex-wrap items-center justify-between gap-3 print:hidden">
            <p className="text-sm text-gray-500">{sorted.length} night{sorted.length !== 1 ? "s" : ""} logged</p>
            <Button variant="outline" onClick={() => window.print()} className="gap-2">
              <Printer className="h-4 w-4" />
              Print for Doctor
            </Button>
          </div>
        )}

        {/* Entry list */}
        {sorted.length === 0 ? (
          <Card className="print:hidden">
            <CardContent className="py-10 text-center text-gray-500">
              <Moon className="h-10 w-10 text-gray-300 mx-auto mb-2" />
              <p className="text-lg">No sleep entries yet.</p>
              <p className="text-sm mt-1">Log last night above to get started.</p>
            </CardContent>
          </Card>
        ) : (
          <Card>
            <CardHeader className="pb-2 pt-3">
              <CardTitle className="text-lg">Sleep Log</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="divide-y">
                {[...sorted].reverse().map(e => {
                  const hours = calcHours(e.bedtime, e.wakeTime);
                  return (
                    <div key={e.id} className="py-2 flex items-start justify-between gap-2">
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-2 flex-wrap">
                          <span className="text-sm font-medium text-gray-700 w-20">{formatDate(e.date)}</span>
                          <Badge variant="secondary" className="text-xs">{hours.toFixed(1)} hrs</Badge>
                          <span className="flex">
                            {[1, 2, 3, 4, 5].map(n => (
                              <Star key={n} className={`h-3 w-3 ${n <= e.quality ? "fill-amber-400 text-amber-400" : "text-gray-300"}`} />
                            ))}
                          </span>
                        </div>
                        <p className="text-xs text-gray-500 mt-1">
                          Bed: {formatTime(e.bedtime)} · Wake: {formatTime(e.wakeTime)}
                        </p>
                        {e.notes && <p className="text-xs text-gray-500 italic mt-0.5">{e.notes}</p>}
                      </div>
                      <Button
                        variant="ghost"
                        size="icon"
                        className="h-7 w-7 text-red-400 hover:text-red-600 print:hidden"
                        onClick={() => remove(e.id)}
                        aria-label="Remove entry"
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

        <Card className="mt-6 bg-blue-50 border-blue-200 print:hidden">
          <CardContent className="py-3 px-4">
            <p className="text-sm text-blue-800">
              <span className="font-semibold">Quick Tip: </span>
              Most adults need 7-9 hours of sleep. If you regularly get less, or if your quality scores are low, bring this diary to your next doctor visit.
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

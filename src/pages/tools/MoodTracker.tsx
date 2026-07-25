import { useState } from "react";
import SEOHead from "@/components/SEOHead";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Smile, Trash2, Printer, AlertTriangle } from "lucide-react";

interface Entry {
  id: string;
  date: string;
  mood: number; // 1-5
  notes: string;
}

const MOOD_LABELS: Record<number, { emoji: string; label: string; color: string }> = {
  1: { emoji: "😞", label: "Very low", color: "bg-red-100 text-red-700" },
  2: { emoji: "🙁", label: "Low", color: "bg-orange-100 text-orange-700" },
  3: { emoji: "😐", label: "Okay", color: "bg-yellow-100 text-yellow-700" },
  4: { emoji: "🙂", label: "Good", color: "bg-blue-100 text-blue-700" },
  5: { emoji: "😄", label: "Great", color: "bg-green-100 text-green-700" },
};

export default function MoodTracker() {
  const [entries, setEntries] = useState<Entry[]>([]);
  const [form, setForm] = useState({
    date: new Date().toISOString().slice(0, 10),
    mood: 3,
    notes: "",
  });
  const [error, setError] = useState("");

  function add() {
    if (!form.date) { setError("Please pick a date."); return; }
    setError("");
    setEntries(prev => [...prev, { id: Date.now().toString() + Math.random(), date: form.date, mood: form.mood, notes: form.notes.trim() }]);
    setForm(f => ({ ...f, notes: "" }));
  }

  function remove(id: string) {
    setEntries(prev => prev.filter(e => e.id !== id));
  }

  function formatDate(s: string) {
    const [y, m, d] = s.split("-");
    return `${m}/${d}/${y}`;
  }

  const sorted = [...entries].sort((a, b) => b.date.localeCompare(a.date));
  const cutoff = new Date();
  cutoff.setDate(cutoff.getDate() - 14);
  const cutoffStr = cutoff.toISOString().slice(0, 10);
  const last14 = entries.filter(e => e.date >= cutoffStr);
  const avg14 = last14.length > 0 ? last14.reduce((s, e) => s + e.mood, 0) / last14.length : 0;
  const lowsLast14 = last14.filter(e => e.mood <= 2).length;
  const concernThreshold = lowsLast14 >= 5 || (last14.length >= 7 && avg14 < 2.5);

  return (
    <div className="min-h-screen bg-gray-50">
      <SEOHead
        title="Mood Tracker | TekSure"
        description="Rate your mood each day on a 1-5 scale. See 14-day average and patterns. If you have many low days, the tool nudges you to talk to your doctor."
      />

      <div className="max-w-2xl mx-auto px-4 py-8 print:p-4">
        <div className="mb-6">
          <div className="flex items-center gap-2 mb-1">
            <Smile className="h-7 w-7 text-yellow-500" />
            <h1 className="text-3xl font-bold text-gray-900">Mood Tracker</h1>
          </div>
          <p className="text-gray-600 text-lg">
            Each day, tap the face that matches how you feel. Patterns over weeks tell a more useful story than any single day.
          </p>
        </div>

        {/* Stats */}
        {last14.length > 0 && (
          <div className="grid grid-cols-3 gap-3 mb-4">
            <Card>
              <CardContent className="py-3 px-3 text-center">
                <p className="text-xs text-gray-500">14-day entries</p>
                <p className="text-xl font-bold text-yellow-700">{last14.length}</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="py-3 px-3 text-center">
                <p className="text-xs text-gray-500">Average mood</p>
                <p className="text-xl font-bold text-yellow-700">{avg14 ? avg14.toFixed(1) : "—"} / 5</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="py-3 px-3 text-center">
                <p className="text-xs text-gray-500">Low days (1-2)</p>
                <p className="text-xl font-bold text-red-700">{lowsLast14}</p>
              </CardContent>
            </Card>
          </div>
        )}

        {/* Concern alert */}
        {concernThreshold && (
          <Card className="mb-4 bg-red-50 border-red-200 print:hidden">
            <CardContent className="py-3 px-4 flex items-start gap-2">
              <AlertTriangle className="h-5 w-5 text-red-600 mt-0.5 shrink-0" />
              <div>
                <p className="text-sm font-semibold text-red-800">Several low-mood days lately.</p>
                <p className="text-sm text-red-700 mt-0.5">
                  Talk to your doctor about how you have been feeling, or call the SAMHSA national helpline (free, confidential, 24/7): <strong>1-800-662-4357</strong>
                </p>
              </div>
            </CardContent>
          </Card>
        )}

        {/* Add form */}
        <Card className="mb-6 print:hidden">
          <CardHeader>
            <CardTitle className="text-xl">How are you today?</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <Label htmlFor="m-date" className="text-base font-medium">Date</Label>
              <Input id="m-date" type="date" value={form.date} onChange={e => setForm(f => ({ ...f, date: e.target.value }))} className="mt-1 text-base" />
            </div>
            <div>
              <Label className="text-base font-medium">Pick the face that matches:</Label>
              <div className="grid grid-cols-5 gap-2 mt-2">
                {[1, 2, 3, 4, 5].map(n => (
                  <button
                    key={n}
                    type="button"
                    onClick={() => setForm(f => ({ ...f, mood: n }))}
                    className={`p-3 rounded-lg border-2 flex flex-col items-center transition-colors ${
                      form.mood === n ? "border-blue-400 bg-blue-50" : "border-gray-200 bg-white hover:bg-gray-50"
                    }`}
                  >
                    <span className="text-3xl">{MOOD_LABELS[n].emoji}</span>
                    <span className="text-xs mt-1 text-gray-600">{MOOD_LABELS[n].label}</span>
                  </button>
                ))}
              </div>
            </div>
            <div>
              <Label htmlFor="m-notes" className="text-base font-medium">Notes (optional)</Label>
              <Input id="m-notes" placeholder="e.g. Slept poorly, missed lunch, called sister" value={form.notes} onChange={e => setForm(f => ({ ...f, notes: e.target.value }))} className="mt-1 text-base" />
            </div>
            {error && <p className="text-red-600 text-sm">{error}</p>}
            <Button onClick={add} size="lg" className="w-full sm:w-auto text-base">Save Today</Button>
          </CardContent>
        </Card>

        {entries.length > 0 && (
          <div className="mb-3 flex items-center justify-end print:hidden">
            <Button variant="outline" onClick={() => window.print()} className="gap-2">
              <Printer className="h-4 w-4" />
              Print for Doctor
            </Button>
          </div>
        )}

        {sorted.length === 0 ? (
          <Card className="print:hidden">
            <CardContent className="py-10 text-center text-gray-500">
              <Smile className="h-10 w-10 text-gray-300 mx-auto mb-2" />
              <p className="text-lg">No entries yet.</p>
              <p className="text-sm mt-1">Tap a face above to log how today is going.</p>
            </CardContent>
          </Card>
        ) : (
          <Card>
            <CardHeader className="pb-2 pt-3">
              <CardTitle className="text-lg">Your Log</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="divide-y">
                {sorted.map(e => (
                  <div key={e.id} className="py-2 flex items-start justify-between gap-2 print:break-inside-avoid">
                    <div className="flex items-center gap-3 flex-1 min-w-0">
                      <span className="text-3xl shrink-0">{MOOD_LABELS[e.mood].emoji}</span>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-2">
                          <span className="text-sm font-medium text-gray-700">{formatDate(e.date)}</span>
                          <Badge variant="secondary" className={`text-xs ${MOOD_LABELS[e.mood].color}`}>{MOOD_LABELS[e.mood].label}</Badge>
                        </div>
                        {e.notes && <p className="text-xs text-gray-500 italic mt-0.5">{e.notes}</p>}
                      </div>
                    </div>
                    <Button variant="ghost" size="icon" onClick={() => remove(e.id)} className="h-7 w-7 text-red-400 hover:text-red-600 print:hidden">
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
              <span className="font-semibold">Important: </span>
              This tool does not replace professional help. If you are having thoughts of harming yourself, call or text 988 (Suicide and Crisis Lifeline) — free and available 24/7.
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

import { useState } from "react";
import SEOHead from "@/components/SEOHead";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Activity, Trash2, Printer, PlusCircle, AlertTriangle } from "lucide-react";

interface Reading {
  id: string;
  date: string;
  time: string;
  value: number; // mg/dL
  context: string;
  notes: string;
}

const CONTEXTS = ["Fasting / morning", "Before meal", "After meal (2 hr)", "Bedtime", "Random / other"];

export default function GlucoseLog() {
  const [readings, setReadings] = useState<Reading[]>([]);
  const [form, setForm] = useState({
    date: new Date().toISOString().slice(0, 10),
    time: new Date().toTimeString().slice(0, 5),
    value: "",
    context: "Fasting / morning",
    notes: "",
  });
  const [error, setError] = useState("");

  function add() {
    const v = parseInt(form.value, 10);
    if (!form.value || isNaN(v) || v < 30 || v > 700) { setError("Please enter a valid reading (30-700 mg/dL)."); return; }
    if (!form.date || !form.time) { setError("Please pick a date and time."); return; }
    setError("");
    setReadings(prev => [...prev, { id: Date.now().toString() + Math.random(), date: form.date, time: form.time, value: v, context: form.context, notes: form.notes.trim() }]);
    setForm(f => ({ ...f, value: "", notes: "" }));
  }

  function remove(id: string) {
    setReadings(prev => prev.filter(r => r.id !== id));
  }

  function formatDate(s: string) {
    const [y, m, d] = s.split("-");
    return `${m}/${d}/${y}`;
  }

  function formatTime(t: string) {
    const [h, m] = t.split(":");
    const hh = parseInt(h, 10);
    const period = hh >= 12 ? "PM" : "AM";
    const hour12 = hh === 0 ? 12 : hh > 12 ? hh - 12 : hh;
    return `${hour12}:${m} ${period}`;
  }

  function rangeFor(value: number, context: string) {
    // ADA targets for adults with diabetes (general guidelines, not medical advice)
    if (context.startsWith("Fasting") || context.startsWith("Before")) {
      if (value < 70) return { label: "Low", color: "bg-red-100 text-red-700 border-red-300" };
      if (value <= 130) return { label: "In range", color: "bg-green-100 text-green-700 border-green-300" };
      return { label: "High", color: "bg-amber-100 text-amber-700 border-amber-300" };
    }
    if (context.startsWith("After")) {
      if (value < 70) return { label: "Low", color: "bg-red-100 text-red-700 border-red-300" };
      if (value <= 180) return { label: "In range", color: "bg-green-100 text-green-700 border-green-300" };
      return { label: "High", color: "bg-amber-100 text-amber-700 border-amber-300" };
    }
    if (value < 70) return { label: "Low", color: "bg-red-100 text-red-700 border-red-300" };
    if (value <= 180) return { label: "In range", color: "bg-green-100 text-green-700 border-green-300" };
    return { label: "High", color: "bg-amber-100 text-amber-700 border-amber-300" };
  }

  const sorted = [...readings].sort((a, b) => `${b.date} ${b.time}`.localeCompare(`${a.date} ${a.time}`));
  const cutoff = new Date();
  cutoff.setDate(cutoff.getDate() - 7);
  const cutoffStr = cutoff.toISOString().slice(0, 10);
  const last7 = readings.filter(r => r.date >= cutoffStr);
  const avg7 = last7.length > 0 ? Math.round(last7.reduce((s, r) => s + r.value, 0) / last7.length) : 0;
  const lows = last7.filter(r => r.value < 70).length;
  const highs = last7.filter(r => r.value > 180).length;

  return (
    <div className="min-h-screen bg-gray-50">
      <SEOHead
        title="Glucose Log | TekSure"
        description="Log blood sugar readings with context. Auto-classify in-range, low, or high. See 7-day average and counts. Print for doctor visits."
      />

      <div className="max-w-2xl mx-auto px-4 py-8 print:p-4">
        <div className="mb-6">
          <div className="flex items-center gap-2 mb-1">
            <Activity className="h-7 w-7 text-rose-600" />
            <h1 className="text-3xl font-bold text-gray-900">Glucose Log</h1>
          </div>
          <p className="text-gray-600 text-lg">
            Log each blood sugar reading with the time of day. Patterns matter more than a single number.
          </p>
        </div>

        {/* Stats */}
        {readings.length > 0 && (
          <>
            <div className="grid grid-cols-3 gap-3 mb-3">
              <Card>
                <CardContent className="py-3 px-3 text-center">
                  <p className="text-xs text-gray-500">Last 7 days avg</p>
                  <p className="text-xl font-bold text-rose-700">{avg7 || "—"} mg/dL</p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="py-3 px-3 text-center">
                  <p className="text-xs text-gray-500">Lows (last 7)</p>
                  <p className="text-xl font-bold text-red-700">{lows}</p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="py-3 px-3 text-center">
                  <p className="text-xs text-gray-500">Highs (last 7)</p>
                  <p className="text-xl font-bold text-amber-700">{highs}</p>
                </CardContent>
              </Card>
            </div>
            {lows > 0 && (
              <Card className="mb-4 bg-red-50 border-red-200 print:hidden">
                <CardContent className="py-3 px-4 flex items-start gap-2">
                  <AlertTriangle className="h-5 w-5 text-red-600 mt-0.5 shrink-0" />
                  <p className="text-sm text-red-800">
                    <span className="font-semibold">{lows} low reading{lows !== 1 ? "s" : ""}</span> in the last week. Mention this at your next doctor visit, or call sooner if you have symptoms.
                  </p>
                </CardContent>
              </Card>
            )}
          </>
        )}

        {/* Add form */}
        <Card className="mb-6 print:hidden">
          <CardHeader>
            <CardTitle className="text-xl flex items-center gap-2">
              <PlusCircle className="h-5 w-5 text-rose-600" />
              Log a Reading
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <div className="grid grid-cols-2 gap-3">
              <div>
                <Label htmlFor="g-date" className="text-base font-medium">Date</Label>
                <Input id="g-date" type="date" value={form.date} onChange={e => setForm(f => ({ ...f, date: e.target.value }))} className="mt-1 text-base" />
              </div>
              <div>
                <Label htmlFor="g-time" className="text-base font-medium">Time</Label>
                <Input id="g-time" type="time" value={form.time} onChange={e => setForm(f => ({ ...f, time: e.target.value }))} className="mt-1 text-base" />
              </div>
            </div>
            <div>
              <Label htmlFor="g-value" className="text-base font-medium">Reading (mg/dL)</Label>
              <Input id="g-value" type="number" min="30" max="700" placeholder="120" value={form.value} onChange={e => setForm(f => ({ ...f, value: e.target.value }))} className="mt-1 text-base" />
            </div>
            <div>
              <Label htmlFor="g-context" className="text-base font-medium">When was it taken?</Label>
              <select id="g-context" value={form.context} onChange={e => setForm(f => ({ ...f, context: e.target.value }))} className="mt-1 w-full border border-gray-300 rounded-md px-3 py-2 text-base bg-white">
                {CONTEXTS.map(c => <option key={c}>{c}</option>)}
              </select>
            </div>
            <div>
              <Label htmlFor="g-notes" className="text-base font-medium">Notes (optional)</Label>
              <Input id="g-notes" placeholder="e.g. After breakfast, felt shaky, took insulin" value={form.notes} onChange={e => setForm(f => ({ ...f, notes: e.target.value }))} className="mt-1 text-base" />
            </div>
            {error && <p className="text-red-600 text-sm">{error}</p>}
            <Button onClick={add} size="lg" className="w-full sm:w-auto text-base">Log Reading</Button>
          </CardContent>
        </Card>

        {readings.length > 0 && (
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
              <Activity className="h-10 w-10 text-gray-300 mx-auto mb-2" />
              <p className="text-lg">No readings yet.</p>
              <p className="text-sm mt-1">Take a reading and log it above.</p>
            </CardContent>
          </Card>
        ) : (
          <Card>
            <CardHeader className="pb-2 pt-3">
              <CardTitle className="text-lg">Readings (newest first)</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="divide-y">
                {sorted.map(r => {
                  const range = rangeFor(r.value, r.context);
                  return (
                    <div key={r.id} className="py-2 flex items-start justify-between gap-2 print:break-inside-avoid">
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-2 flex-wrap">
                          <span className="text-2xl font-bold text-gray-900">{r.value}</span>
                          <span className="text-xs text-gray-500">mg/dL</span>
                          <Badge variant="secondary" className={`text-xs border ${range.color}`}>
                            {range.label}
                          </Badge>
                        </div>
                        <p className="text-xs text-gray-500 mt-1">
                          {formatDate(r.date)} at {formatTime(r.time)} · <span className="italic">{r.context}</span>
                        </p>
                        {r.notes && <p className="text-xs text-gray-500 italic mt-0.5">{r.notes}</p>}
                      </div>
                      <Button
                        variant="ghost"
                        size="icon"
                        className="h-7 w-7 text-red-400 hover:text-red-600 print:hidden"
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

        <Card className="mt-6 bg-blue-50 border-blue-200 print:hidden">
          <CardContent className="py-3 px-4">
            <p className="text-sm text-blue-800">
              <span className="font-semibold">Important: </span>
              These ranges are general American Diabetes Association guidelines for adults. Your doctor may give you different targets — follow theirs first.
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

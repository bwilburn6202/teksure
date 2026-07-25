import { useState } from "react";
import SEOHead from "@/components/SEOHead";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { HeartPulse, Trash2, Printer, AlertTriangle, PlusCircle } from "lucide-react";

interface Reading {
  id: string;
  date: string;
  time: string;
  systolic: number;
  diastolic: number;
  pulse: number;
  context: string;
  notes: string;
}

const CONTEXTS = ["Morning, before meds", "Morning, after meds", "Evening", "After exercise", "Random / other"];

function classify(s: number, d: number) {
  if (s >= 180 || d >= 120) return { label: "Hypertensive crisis — call doctor", color: "bg-red-200 text-red-900 border-red-400" };
  if (s >= 140 || d >= 90) return { label: "Stage 2 high BP", color: "bg-red-100 text-red-700 border-red-300" };
  if (s >= 130 || d >= 80) return { label: "Stage 1 high BP", color: "bg-amber-100 text-amber-700 border-amber-300" };
  if (s >= 120 && d < 80) return { label: "Elevated", color: "bg-yellow-100 text-yellow-700 border-yellow-300" };
  if (s < 90 || d < 60) return { label: "Low", color: "bg-blue-100 text-blue-700 border-blue-300" };
  return { label: "Normal", color: "bg-green-100 text-green-700 border-green-300" };
}

export default function BloodPressureLog() {
  const [readings, setReadings] = useState<Reading[]>([]);
  const [form, setForm] = useState({
    date: new Date().toISOString().slice(0, 10),
    time: new Date().toTimeString().slice(0, 5),
    systolic: "",
    diastolic: "",
    pulse: "",
    context: "Morning, before meds",
    notes: "",
  });
  const [error, setError] = useState("");

  function add() {
    const s = parseInt(form.systolic, 10);
    const d = parseInt(form.diastolic, 10);
    const p = form.pulse ? parseInt(form.pulse, 10) : 0;
    if (!s || s < 60 || s > 260) { setError("Please enter a valid systolic (top number, 60-260)."); return; }
    if (!d || d < 40 || d > 180) { setError("Please enter a valid diastolic (bottom number, 40-180)."); return; }
    setError("");
    setReadings(prev => [...prev, { id: Date.now().toString() + Math.random(), date: form.date, time: form.time, systolic: s, diastolic: d, pulse: p, context: form.context, notes: form.notes.trim() }]);
    setForm(f => ({ ...f, systolic: "", diastolic: "", pulse: "", notes: "" }));
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

  const sorted = [...readings].sort((a, b) => `${b.date} ${b.time}`.localeCompare(`${a.date} ${a.time}`));
  const cutoff = new Date();
  cutoff.setDate(cutoff.getDate() - 7);
  const cutoffStr = cutoff.toISOString().slice(0, 10);
  const last7 = readings.filter(r => r.date >= cutoffStr);
  const avgS = last7.length > 0 ? Math.round(last7.reduce((s, r) => s + r.systolic, 0) / last7.length) : 0;
  const avgD = last7.length > 0 ? Math.round(last7.reduce((s, r) => s + r.diastolic, 0) / last7.length) : 0;
  const crisisLast7 = last7.filter(r => r.systolic >= 180 || r.diastolic >= 120).length;

  return (
    <div className="min-h-screen bg-gray-50">
      <SEOHead
        title="Blood Pressure Log | TekSure"
        description="Log blood pressure readings with auto-classification (Normal, Elevated, Stage 1, Stage 2, Crisis). 7-day average. Print for doctor."
      />

      <div className="max-w-2xl mx-auto px-4 py-8 print:p-4">
        <div className="mb-6">
          <div className="flex items-center gap-2 mb-1">
            <HeartPulse className="h-7 w-7 text-red-600" />
            <h1 className="text-3xl font-bold text-gray-900">Blood Pressure Log</h1>
          </div>
          <p className="text-gray-600 text-lg">
            Log each reading. The tool auto-classifies it and gives you a 7-day average to share with your doctor.
          </p>
        </div>

        {/* Stats */}
        {last7.length > 0 && (
          <Card className="mb-4 print:break-inside-avoid">
            <CardContent className="py-3 px-4 grid grid-cols-3 gap-3 text-center">
              <div>
                <p className="text-xs text-gray-500">7-day avg</p>
                <p className="text-xl font-bold text-red-700">{avgS} / {avgD}</p>
              </div>
              <div>
                <p className="text-xs text-gray-500">Readings</p>
                <p className="text-xl font-bold text-gray-700">{last7.length}</p>
              </div>
              <div>
                <p className="text-xs text-gray-500">Crisis (last 7)</p>
                <p className={`text-xl font-bold ${crisisLast7 > 0 ? "text-red-700" : "text-gray-700"}`}>{crisisLast7}</p>
              </div>
            </CardContent>
          </Card>
        )}

        {crisisLast7 > 0 && (
          <Card className="mb-4 bg-red-100 border-red-400 print:hidden">
            <CardContent className="py-3 px-4 flex items-start gap-2">
              <AlertTriangle className="h-5 w-5 text-red-700 mt-0.5 shrink-0" />
              <p className="text-sm text-red-800">
                <span className="font-semibold">Crisis-level readings (180/120 or higher) in the last week.</span> Call your doctor today, or 911 if you have chest pain, shortness of breath, or numbness.
              </p>
            </CardContent>
          </Card>
        )}

        {/* Add form */}
        <Card className="mb-6 print:hidden">
          <CardHeader>
            <CardTitle className="text-xl flex items-center gap-2">
              <PlusCircle className="h-5 w-5 text-red-600" />
              Log a Reading
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <div className="grid grid-cols-2 gap-3">
              <div>
                <Label htmlFor="bp-date" className="text-base font-medium">Date</Label>
                <Input id="bp-date" type="date" value={form.date} onChange={e => setForm(f => ({ ...f, date: e.target.value }))} className="mt-1 text-base" />
              </div>
              <div>
                <Label htmlFor="bp-time" className="text-base font-medium">Time</Label>
                <Input id="bp-time" type="time" value={form.time} onChange={e => setForm(f => ({ ...f, time: e.target.value }))} className="mt-1 text-base" />
              </div>
            </div>
            <div className="grid grid-cols-3 gap-3">
              <div>
                <Label htmlFor="sys" className="text-base font-medium">Top (systolic)</Label>
                <Input id="sys" type="number" min="60" max="260" placeholder="120" value={form.systolic} onChange={e => setForm(f => ({ ...f, systolic: e.target.value }))} className="mt-1 text-base" />
              </div>
              <div>
                <Label htmlFor="dia" className="text-base font-medium">Bottom (diastolic)</Label>
                <Input id="dia" type="number" min="40" max="180" placeholder="80" value={form.diastolic} onChange={e => setForm(f => ({ ...f, diastolic: e.target.value }))} className="mt-1 text-base" />
              </div>
              <div>
                <Label htmlFor="pulse" className="text-base font-medium">Pulse</Label>
                <Input id="pulse" type="number" min="30" max="220" placeholder="72" value={form.pulse} onChange={e => setForm(f => ({ ...f, pulse: e.target.value }))} className="mt-1 text-base" />
              </div>
            </div>
            <div>
              <Label className="text-base font-medium">When was it taken?</Label>
              <select value={form.context} onChange={e => setForm(f => ({ ...f, context: e.target.value }))} className="mt-1 w-full border border-gray-300 rounded-md px-3 py-2 text-base bg-white">
                {CONTEXTS.map(c => <option key={c}>{c}</option>)}
              </select>
            </div>
            <div>
              <Label htmlFor="bp-notes" className="text-base font-medium">Notes (optional)</Label>
              <Input id="bp-notes" placeholder="e.g. After morning walk, felt anxious" value={form.notes} onChange={e => setForm(f => ({ ...f, notes: e.target.value }))} className="mt-1 text-base" />
            </div>
            {error && <p className="text-red-600 text-sm">{error}</p>}
            <Button onClick={add} size="lg" className="w-full sm:w-auto text-base">Save Reading</Button>
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
              <HeartPulse className="h-10 w-10 text-gray-300 mx-auto mb-2" />
              <p className="text-lg">No readings yet.</p>
              <p className="text-sm mt-1">Log your first reading above.</p>
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
                  const c = classify(r.systolic, r.diastolic);
                  return (
                    <div key={r.id} className="py-2 flex items-start justify-between gap-2 print:break-inside-avoid">
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-2 flex-wrap">
                          <span className="text-2xl font-bold text-gray-900">{r.systolic} / {r.diastolic}</span>
                          {r.pulse > 0 && <span className="text-sm text-gray-500">· pulse {r.pulse}</span>}
                          <Badge variant="secondary" className={`text-xs border ${c.color}`}>{c.label}</Badge>
                        </div>
                        <p className="text-xs text-gray-500 mt-1">
                          {formatDate(r.date)} at {formatTime(r.time)} · <span className="italic">{r.context}</span>
                        </p>
                        {r.notes && <p className="text-xs text-gray-500 italic mt-0.5">{r.notes}</p>}
                      </div>
                      <Button variant="ghost" size="icon" onClick={() => remove(r.id)} className="h-7 w-7 text-red-400 hover:text-red-600 print:hidden">
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
              <span className="font-semibold">Categories shown are American Heart Association guidelines.</span> Your doctor may use different targets — follow their advice first.
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

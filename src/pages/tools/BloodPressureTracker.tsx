import { useState } from "react";
import SEOHead from "@/components/SEOHead";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Heart, Trash2, Printer, PlusCircle } from "lucide-react";

interface Reading {
  id: string;
  date: string;
  time: string;
  systolic: number;
  diastolic: number;
  pulse: number;
  note: string;
}

function classify(sys: number, dia: number): { label: string; tone: string } {
  if (sys >= 180 || dia >= 120) return { label: "Crisis - call doctor", tone: "bg-red-100 text-red-800 border-red-300" };
  if (sys >= 140 || dia >= 90) return { label: "Stage 2 high", tone: "bg-red-50 text-red-700 border-red-200" };
  if (sys >= 130 || dia >= 80) return { label: "Stage 1 high", tone: "bg-amber-50 text-amber-700 border-amber-200" };
  if (sys >= 120 && dia < 80) return { label: "Elevated", tone: "bg-yellow-50 text-yellow-700 border-yellow-200" };
  if (sys < 90 || dia < 60) return { label: "Low", tone: "bg-blue-50 text-blue-700 border-blue-200" };
  return { label: "Normal", tone: "bg-emerald-50 text-emerald-700 border-emerald-200" };
}

export default function BloodPressureTracker() {
  const [readings, setReadings] = useState<Reading[]>([]);
  const now = new Date();
  const [form, setForm] = useState({
    date: now.toISOString().slice(0, 10),
    time: now.toTimeString().slice(0, 5),
    systolic: "",
    diastolic: "",
    pulse: "",
    note: "",
  });

  function add() {
    const s = parseInt(form.systolic, 10);
    const d = parseInt(form.diastolic, 10);
    const p = parseInt(form.pulse, 10) || 0;
    if (!s || !d || s < 50 || s > 260 || d < 30 || d > 200) return;
    setReadings(prev => [...prev, {
      id: Date.now().toString() + Math.random(),
      date: form.date,
      time: form.time,
      systolic: s,
      diastolic: d,
      pulse: p,
      note: form.note.trim(),
    }]);
    setForm(f => ({ ...f, systolic: "", diastolic: "", pulse: "", note: "" }));
  }

  function remove(id: string) {
    setReadings(prev => prev.filter(r => r.id !== id));
  }

  const cutoff = new Date();
  cutoff.setDate(cutoff.getDate() - 14);
  const cutoffStr = cutoff.toISOString().slice(0, 10);
  const recent = readings.filter(r => r.date >= cutoffStr);
  const avgSys = recent.length ? Math.round(recent.reduce((s, r) => s + r.systolic, 0) / recent.length) : 0;
  const avgDia = recent.length ? Math.round(recent.reduce((s, r) => s + r.diastolic, 0) / recent.length) : 0;
  const avgPulse = recent.length ? Math.round(recent.reduce((s, r) => s + r.pulse, 0) / recent.length) : 0;
  const avgClass = avgSys && avgDia ? classify(avgSys, avgDia) : null;

  return (
    <div className="min-h-screen bg-gray-50">
      <SEOHead title="Blood Pressure Tracker | TekSure" description="Log home blood pressure readings, see your 14-day average, and print a clean report for your next doctor visit." />
      <div className="max-w-2xl mx-auto px-4 py-8 print:p-4">
        <div className="mb-6">
          <div className="flex items-center gap-2 mb-1">
            <Heart className="h-7 w-7 text-red-600" />
            <h1 className="text-3xl font-bold text-gray-900">Blood Pressure Tracker</h1>
          </div>
          <p className="text-gray-600 text-lg">Log each home reading. We will show your 14-day average and the category your doctor cares about.</p>
        </div>

        {recent.length > 0 && avgClass && (
          <Card className={`mb-4 border-2 ${avgClass.tone}`}>
            <CardContent className="py-4 px-4">
              <p className="text-sm font-semibold mb-1">14-day average ({recent.length} readings)</p>
              <p className="text-4xl font-bold">{avgSys} / {avgDia}</p>
              {avgPulse > 0 && <p className="text-sm">Pulse avg: {avgPulse} bpm</p>}
              <Badge className={`mt-2 ${avgClass.tone}`} variant="outline">{avgClass.label}</Badge>
            </CardContent>
          </Card>
        )}

        <Card className="mb-4 print:hidden">
          <CardHeader className="pb-2 pt-3">
            <CardTitle className="text-lg flex items-center gap-2">
              <PlusCircle className="h-5 w-5 text-red-600" />Add a Reading
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-2">
            <div className="grid grid-cols-2 gap-2">
              <Input type="date" value={form.date} onChange={e => setForm(f => ({ ...f, date: e.target.value }))} />
              <Input type="time" value={form.time} onChange={e => setForm(f => ({ ...f, time: e.target.value }))} />
            </div>
            <div className="grid grid-cols-3 gap-2">
              <Input type="number" placeholder="Top (systolic)" value={form.systolic} onChange={e => setForm(f => ({ ...f, systolic: e.target.value }))} />
              <Input type="number" placeholder="Bottom (diastolic)" value={form.diastolic} onChange={e => setForm(f => ({ ...f, diastolic: e.target.value }))} />
              <Input type="number" placeholder="Pulse" value={form.pulse} onChange={e => setForm(f => ({ ...f, pulse: e.target.value }))} />
            </div>
            <Input placeholder="Note - morning, after coffee, etc. (optional)" value={form.note} onChange={e => setForm(f => ({ ...f, note: e.target.value }))} />
            <Button onClick={add} className="bg-red-600 hover:bg-red-700">Log Reading</Button>
          </CardContent>
        </Card>

        {readings.length > 0 && (
          <Card>
            <CardHeader className="pb-2 pt-3">
              <CardTitle className="text-base flex items-center justify-between">
                <span>All readings ({readings.length})</span>
                <Button variant="outline" size="sm" onClick={() => window.print()} className="gap-1 print:hidden">
                  <Printer className="h-3 w-3" />Print for Doctor
                </Button>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="divide-y">
                {[...readings].reverse().map(r => {
                  const c = classify(r.systolic, r.diastolic);
                  return (
                    <div key={r.id} className="py-2 flex items-center justify-between gap-2 text-sm">
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-2 flex-wrap">
                          <span className="text-gray-500 text-xs">{r.date} {r.time}</span>
                          <Badge variant="outline" className={`text-xs ${c.tone}`}>{c.label}</Badge>
                        </div>
                        {r.note && <p className="text-xs text-gray-500 italic mt-0.5">{r.note}</p>}
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="font-bold text-gray-900">{r.systolic}/{r.diastolic}</span>
                        {r.pulse > 0 && <span className="text-xs text-gray-500">{r.pulse} bpm</span>}
                        <Button variant="ghost" size="icon" onClick={() => remove(r.id)} className="h-6 w-6 text-red-400 hover:text-red-600 print:hidden">
                          <Trash2 className="h-3 w-3" />
                        </Button>
                      </div>
                    </div>
                  );
                })}
              </div>
            </CardContent>
          </Card>
        )}

        <Card className="mt-4 bg-blue-50 border-blue-200">
          <CardContent className="py-3 px-4">
            <p className="text-sm text-blue-900"><span className="font-semibold">Categories per American Heart Association:</span> Normal (under 120/80), Elevated (120-129/under 80), Stage 1 (130-139/80-89), Stage 2 (140+/90+), Crisis (180+/120+ - call your doctor). This tool is for tracking, not diagnosis. Show your printed log to your doctor.</p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

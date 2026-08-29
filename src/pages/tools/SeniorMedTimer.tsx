import { useState } from "react";
import SEOHead from "@/components/SEOHead";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Pill, Trash2, Printer, PlusCircle, CheckCircle2 } from "lucide-react";

interface Med {
  id: string;
  name: string;
  dose: string;
  time: string;
  withFood: boolean;
  taken: boolean;
}

const TIME_PRESETS = [
  { label: "🌅 Breakfast (7am)", time: "07:00" },
  { label: "☀️ Mid-morning (10am)", time: "10:00" },
  { label: "🍽️ Lunch (12pm)", time: "12:00" },
  { label: "🥪 Mid-afternoon (3pm)", time: "15:00" },
  { label: "🌆 Dinner (6pm)", time: "18:00" },
  { label: "🌙 Bedtime (9pm)", time: "21:00" },
];

export default function SeniorMedTimer() {
  const [meds, setMeds] = useState<Med[]>([]);
  const [form, setForm] = useState({ name: "", dose: "", time: "08:00", withFood: false });
  const [error, setError] = useState("");

  function add() {
    if (!form.name.trim()) { setError("Please enter a medication name."); return; }
    if (!form.time) { setError("Please pick a time."); return; }
    setError("");
    setMeds(prev => [...prev, { id: Date.now().toString() + Math.random(), name: form.name.trim(), dose: form.dose.trim(), time: form.time, withFood: form.withFood, taken: false }]);
    setForm(f => ({ ...f, name: "", dose: "" }));
  }

  function remove(id: string) {
    setMeds(prev => prev.filter(m => m.id !== id));
  }

  function toggleTaken(id: string) {
    setMeds(prev => prev.map(m => m.id === id ? { ...m, taken: !m.taken } : m));
  }

  function resetTaken() {
    setMeds(prev => prev.map(m => ({ ...m, taken: false })));
  }

  function formatTime(t: string) {
    const [h, m] = t.split(":");
    const hh = parseInt(h, 10);
    const period = hh >= 12 ? "PM" : "AM";
    const hour12 = hh === 0 ? 12 : hh > 12 ? hh - 12 : hh;
    return `${hour12}:${m} ${period}`;
  }

  // Group by time
  const sorted = [...meds].sort((a, b) => a.time.localeCompare(b.time));
  const grouped = sorted.reduce<Record<string, Med[]>>((acc, m) => {
    acc[m.time] = acc[m.time] || [];
    acc[m.time].push(m);
    return acc;
  }, {});

  const takenCount = meds.filter(m => m.taken).length;
  const total = meds.length;

  return (
    <main className="min-h-screen bg-muted">
      <SEOHead
        title="Daily Medication Timer | TekSure"
        description="Visual day-of medication schedule. Tap each med as you take it. Print a clean schedule to keep with your pill bottles."
      />

      <div className="max-w-2xl mx-auto px-4 py-8 print:p-4">
        <div className="mb-6">
          <div className="flex items-center gap-2 mb-1">
            <Pill className="h-7 w-7 text-success-foreground" />
            <h1 className="text-3xl font-bold text-foreground">Daily Medication Timer</h1>
          </div>
          <p className="text-muted-foreground text-lg">
            Build today's medication schedule. Tap each med after you take it. Tap "Reset" each morning.
          </p>
        </div>

        {/* Stats + reset */}
        {meds.length > 0 && (
          <Card className="mb-4 print:break-inside-avoid">
            <CardContent className="py-3 px-4 flex flex-wrap items-center justify-between gap-3">
              <div>
                <p className="text-sm text-muted-foreground">Taken today</p>
                <p className="text-2xl font-bold text-success-foreground">{takenCount} of {total}</p>
              </div>
              <Button variant="outline" size="sm" onClick={resetTaken} className="print:hidden">Start a new day</Button>
            </CardContent>
          </Card>
        )}

        {/* Add form */}
        <Card className="mb-6 print:hidden">
          <CardHeader>
            <CardTitle className="text-xl flex items-center gap-2">
              <PlusCircle className="h-5 w-5 text-success-foreground" />
              Add a Medication
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <Label htmlFor="med-name" className="text-base font-medium">Medication name</Label>
                <Input id="med-name" placeholder="e.g. Lisinopril" value={form.name} onChange={e => setForm(f => ({ ...f, name: e.target.value }))} className="mt-1 text-base" />
              </div>
              <div>
                <Label htmlFor="med-dose" className="text-base font-medium">Dose</Label>
                <Input id="med-dose" placeholder="e.g. 10mg, 1 tablet" value={form.dose} onChange={e => setForm(f => ({ ...f, dose: e.target.value }))} className="mt-1 text-base" />
              </div>
            </div>
            <div>
              <Label htmlFor="med-time" className="text-base font-medium">Time of day</Label>
              <Input id="med-time" type="time" value={form.time} onChange={e => setForm(f => ({ ...f, time: e.target.value }))} className="mt-1 text-base" />
              <div className="flex flex-wrap gap-1 mt-2">
                {TIME_PRESETS.map(p => (
                  <button
                    key={p.time}
                    type="button"
                    onClick={() => setForm(f => ({ ...f, time: p.time }))}
                    className="text-xs px-2 py-1 rounded-full bg-success border border-success-foreground/25 text-success-foreground hover:bg-success"
                  >
                    {p.label}
                  </button>
                ))}
              </div>
            </div>
            <label className="flex items-center gap-2 text-base cursor-pointer">
              <input type="checkbox" checked={form.withFood} onChange={e => setForm(f => ({ ...f, withFood: e.target.checked }))} className="h-4 w-4" />
              <span>Take with food</span>
            </label>
            {error && <p className="text-danger-foreground text-base">{error}</p>}
            <Button onClick={add} size="lg" className="w-full sm:w-auto text-base">Add Medication</Button>
          </CardContent>
        </Card>

        {meds.length > 0 && (
          <div className="mb-3 flex items-center justify-end print:hidden">
            <Button variant="outline" onClick={() => window.print()} className="gap-2">
              <Printer className="h-4 w-4" />
              Print Schedule
            </Button>
          </div>
        )}

        {/* Schedule */}
        {meds.length === 0 ? (
          <Card className="print:hidden">
            <CardContent className="py-10 text-center text-muted-foreground">
              <Pill className="h-10 w-10 text-muted-foreground mx-auto mb-2" />
              <p className="text-lg">No medications scheduled yet.</p>
              <p className="text-base mt-1">Add the first one above. Use the time presets to fill in fast.</p>
            </CardContent>
          </Card>
        ) : (
          <div className="space-y-3">
            {Object.entries(grouped).map(([time, items]) => (
              <Card key={time} className="print:break-inside-avoid">
                <CardHeader className="pb-2 pt-3 bg-success">
                  <CardTitle className="text-lg text-success-foreground">⏰ {formatTime(time)}</CardTitle>
                </CardHeader>
                <CardContent className="pt-2">
                  <div className="space-y-2">
                    {items.map(m => (
                      <button
                        key={m.id}
                        onClick={() => toggleTaken(m.id)}
                        className={`w-full text-left flex items-center gap-3 p-3 rounded-lg border transition-colors ${
                          m.taken ? "bg-green-50 border-green-200" : "bg-white border-border hover:bg-gray-50"
                        }`}
                      >
                        {m.taken ? <CheckCircle2 className="h-6 w-6 text-success-foreground shrink-0" /> : <span className="h-6 w-6 rounded-full border-2 border-border shrink-0" />}
                        <div className="flex-1">
                          <p className={`font-semibold text-base ${m.taken ? "line-through text-gray-400" : "text-gray-900"}`}>{m.name}</p>
                          <div className="flex flex-wrap gap-2 mt-0.5">
                            {m.dose && <Badge variant="secondary" className="text-xs">{m.dose}</Badge>}
                            {m.withFood && <Badge variant="outline" className="text-xs">🍽️ With food</Badge>}
                          </div>
                        </div>
                        <Button variant="ghost" size="icon" onClick={(e) => { e.stopPropagation(); remove(m.id); }} className="h-7 w-7 text-danger-foreground hover:text-danger-foreground print:hidden">
                          <Trash2 className="h-3 w-3" />
                        </Button>
                      </button>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        )}

        <Card className="mt-6 bg-info border-info-foreground/25 print:hidden">
          <CardContent className="py-3 px-4">
            <p className="text-base text-info-foreground">
              <span className="font-semibold">Quick Tip: </span>
              Tap each medication in this tool right after you take it. Pair it with a phone alarm so you never miss a dose.
            </p>
          </CardContent>
        </Card>
      </div>
    </main>
  );
}

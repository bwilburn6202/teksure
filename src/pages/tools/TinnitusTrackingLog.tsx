import { useState } from "react";
import SEOHead from "@/components/SEOHead";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Volume2, Trash2, Printer, PlusCircle } from "lucide-react";

type Intensity = 1 | 2 | 3 | 4 | 5;
type Trigger = "Caffeine" | "Stress" | "Loud noise" | "Poor sleep" | "Salt/sodium" | "Alcohol" | "NSAID/aspirin" | "Unknown";

interface Entry {
  id: string;
  date: string;
  time: string;
  intensity: Intensity;
  durationHours: number;
  triggers: Trigger[];
  note: string;
}

const TRIGGERS: Trigger[] = ["Caffeine", "Stress", "Loud noise", "Poor sleep", "Salt/sodium", "Alcohol", "NSAID/aspirin", "Unknown"];

function intensityLabel(i: Intensity): string {
  return ["Barely there", "Mild", "Moderate", "Loud", "Overwhelming"][i - 1];
}

function intensityTone(i: Intensity): string {
  if (i <= 2) return "bg-emerald-50 text-emerald-700 border-emerald-200";
  if (i === 3) return "bg-yellow-50 text-yellow-700 border-yellow-200";
  if (i === 4) return "bg-orange-50 text-orange-700 border-orange-200";
  return "bg-red-50 text-red-700 border-red-200";
}

export default function TinnitusTrackingLog() {
  const [entries, setEntries] = useState<Entry[]>([]);
  const now = new Date();
  const [form, setForm] = useState({
    date: now.toISOString().slice(0, 10),
    time: now.toTimeString().slice(0, 5),
    intensity: 3 as Intensity,
    durationHours: "1",
    triggers: [] as Trigger[],
    note: "",
  });

  function toggleTrigger(t: Trigger) {
    setForm(f => ({
      ...f,
      triggers: f.triggers.includes(t) ? f.triggers.filter(x => x !== t) : [...f.triggers, t],
    }));
  }

  function add() {
    const dur = parseFloat(form.durationHours);
    if (!dur || dur <= 0) return;
    setEntries(prev => [...prev, {
      id: Date.now().toString() + Math.random(),
      date: form.date,
      time: form.time,
      intensity: form.intensity,
      durationHours: dur,
      triggers: [...form.triggers],
      note: form.note.trim(),
    }]);
    setForm(f => ({ ...f, triggers: [], note: "", durationHours: "1" }));
  }

  function remove(id: string) {
    setEntries(prev => prev.filter(e => e.id !== id));
  }

  const cutoff = new Date();
  cutoff.setDate(cutoff.getDate() - 14);
  const cutoffStr = cutoff.toISOString().slice(0, 10);
  const recent = entries.filter(e => e.date >= cutoffStr);
  const avgIntensity = recent.length ? (recent.reduce((s, e) => s + e.intensity, 0) / recent.length) : 0;
  const totalHours = recent.reduce((s, e) => s + e.durationHours, 0);

  const triggerCounts: Record<string, number> = {};
  recent.forEach(e => e.triggers.forEach(t => { triggerCounts[t] = (triggerCounts[t] || 0) + 1; }));
  const topTriggers = Object.entries(triggerCounts).sort((a, b) => b[1] - a[1]).slice(0, 3);

  return (
    <div className="min-h-screen bg-gray-50">
      <SEOHead title="Tinnitus Tracking Log | TekSure" description="Log ringing-in-the-ears episodes, find your personal triggers, and print a 14-day report for your audiologist." />
      <div className="max-w-2xl mx-auto px-4 py-8 print:p-4">
        <div className="mb-6">
          <div className="flex items-center gap-2 mb-1">
            <Volume2 className="h-7 w-7 text-purple-700" />
            <h1 className="text-3xl font-bold text-gray-900">Tinnitus Log</h1>
          </div>
          <p className="text-gray-600 text-lg">Track when the ringing flares up and what may have triggered it. Patterns become clear after a week or two.</p>
        </div>

        {recent.length > 0 && (
          <div className="grid grid-cols-3 gap-3 mb-4">
            <Card><CardContent className="py-3 px-3 text-center"><p className="text-xs text-gray-500">14-day episodes</p><p className="text-2xl font-bold text-purple-700">{recent.length}</p></CardContent></Card>
            <Card><CardContent className="py-3 px-3 text-center"><p className="text-xs text-gray-500">Avg intensity</p><p className="text-2xl font-bold text-purple-700">{avgIntensity.toFixed(1)}</p></CardContent></Card>
            <Card><CardContent className="py-3 px-3 text-center"><p className="text-xs text-gray-500">Total hours</p><p className="text-2xl font-bold text-purple-700">{totalHours.toFixed(0)}</p></CardContent></Card>
          </div>
        )}

        {topTriggers.length > 0 && (
          <Card className="mb-4 bg-amber-50 border-amber-200">
            <CardHeader className="pb-1 pt-3"><CardTitle className="text-base text-amber-900">Your top triggers (last 14 days)</CardTitle></CardHeader>
            <CardContent className="pb-3">
              <div className="flex flex-wrap gap-2">
                {topTriggers.map(([t, n]) => (
                  <Badge key={t} variant="outline" className="text-sm bg-white border-amber-300 text-amber-900">{t} - {n}x</Badge>
                ))}
              </div>
            </CardContent>
          </Card>
        )}

        <Card className="mb-4 print:hidden">
          <CardHeader className="pb-2 pt-3"><CardTitle className="text-lg flex items-center gap-2"><PlusCircle className="h-5 w-5 text-purple-700" />Log an episode</CardTitle></CardHeader>
          <CardContent className="space-y-2">
            <div className="grid grid-cols-2 gap-2">
              <Input type="date" value={form.date} onChange={e => setForm(f => ({ ...f, date: e.target.value }))} />
              <Input type="time" value={form.time} onChange={e => setForm(f => ({ ...f, time: e.target.value }))} />
            </div>
            <div>
              <label className="text-sm font-medium text-gray-700">Intensity (1=barely there, 5=overwhelming)</label>
              <div className="flex gap-1 mt-1">
                {([1, 2, 3, 4, 5] as Intensity[]).map(i => (
                  <Button key={i} type="button" size="sm" variant={form.intensity === i ? "default" : "outline"} onClick={() => setForm(f => ({ ...f, intensity: i }))} className="flex-1">
                    {i}
                  </Button>
                ))}
              </div>
            </div>
            <div>
              <label className="text-sm font-medium text-gray-700">How long did it last? (hours)</label>
              <Input type="number" step="0.5" min="0.1" value={form.durationHours} onChange={e => setForm(f => ({ ...f, durationHours: e.target.value }))} className="mt-1" />
            </div>
            <div>
              <label className="text-sm font-medium text-gray-700">Possible triggers (tap any that apply)</label>
              <div className="flex flex-wrap gap-1 mt-1">
                {TRIGGERS.map(t => (
                  <Button key={t} type="button" size="sm" variant={form.triggers.includes(t) ? "default" : "outline"} onClick={() => toggleTrigger(t)}>
                    {t}
                  </Button>
                ))}
              </div>
            </div>
            <Input placeholder="Notes (optional)" value={form.note} onChange={e => setForm(f => ({ ...f, note: e.target.value }))} />
            <Button onClick={add} className="bg-purple-700 hover:bg-purple-800">Log Episode</Button>
          </CardContent>
        </Card>

        {entries.length > 0 && (
          <Card>
            <CardHeader className="pb-2 pt-3">
              <CardTitle className="text-base flex items-center justify-between">
                <span>All entries ({entries.length})</span>
                <Button variant="outline" size="sm" onClick={() => window.print()} className="gap-1 print:hidden">
                  <Printer className="h-3 w-3" />Print for Audiologist
                </Button>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="divide-y">
                {[...entries].reverse().map(en => (
                  <div key={en.id} className="py-2 text-sm">
                    <div className="flex items-center justify-between gap-2">
                      <div className="flex items-center gap-2 flex-wrap">
                        <span className="text-gray-500 text-xs">{en.date} {en.time}</span>
                        <Badge variant="outline" className={`text-xs ${intensityTone(en.intensity)}`}>{en.intensity} - {intensityLabel(en.intensity)}</Badge>
                        <span className="text-xs text-gray-500">{en.durationHours}h</span>
                      </div>
                      <Button variant="ghost" size="icon" onClick={() => remove(en.id)} className="h-6 w-6 text-red-400 hover:text-red-600 print:hidden">
                        <Trash2 className="h-3 w-3" />
                      </Button>
                    </div>
                    {en.triggers.length > 0 && (
                      <div className="mt-1 flex flex-wrap gap-1">
                        {en.triggers.map(t => <Badge key={t} variant="secondary" className="text-xs">{t}</Badge>)}
                      </div>
                    )}
                    {en.note && <p className="text-xs text-gray-500 italic mt-0.5">{en.note}</p>}
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        )}

        <Card className="mt-4 bg-blue-50 border-blue-200">
          <CardContent className="py-3 px-4">
            <p className="text-sm text-blue-900">Tinnitus tracking helps you find your personal pattern. If you see one trigger come up over and over, try removing it for 2 weeks. Bring this log to your audiologist or ENT. Not medical advice.</p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

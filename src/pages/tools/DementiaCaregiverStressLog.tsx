import { useState } from "react";
import SEOHead from "@/components/SEOHead";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Brain, Trash2, Printer, PlusCircle } from "lucide-react";

type Stress = 1 | 2 | 3 | 4 | 5;

interface DayLog {
  id: string;
  date: string;
  stress: Stress;
  sleepHours: number;
  behaviorEvents: number;
  note: string;
}

function stressLabel(s: Stress): string {
  return ["Calm day", "Manageable", "Tough", "Very hard", "Breaking point"][s - 1];
}

function stressTone(s: Stress): string {
  if (s <= 2) return "bg-emerald-50 text-emerald-700 border-emerald-200";
  if (s === 3) return "bg-yellow-50 text-yellow-700 border-yellow-200";
  if (s === 4) return "bg-orange-50 text-orange-700 border-orange-200";
  return "bg-red-50 text-red-700 border-red-200";
}

export default function DementiaCaregiverStressLog() {
  const [logs, setLogs] = useState<DayLog[]>([]);
  const today = new Date().toISOString().slice(0, 10);
  const [form, setForm] = useState({ date: today, stress: 3 as Stress, sleepHours: "6", behaviorEvents: "0", note: "" });

  function add() {
    const sleep = parseFloat(form.sleepHours);
    const events = parseInt(form.behaviorEvents, 10);
    if (isNaN(sleep) || isNaN(events) || sleep < 0 || sleep > 24) return;
    setLogs(prev => [...prev, {
      id: Date.now().toString() + Math.random(),
      date: form.date,
      stress: form.stress,
      sleepHours: sleep,
      behaviorEvents: events,
      note: form.note.trim(),
    }]);
    setForm(f => ({ ...f, behaviorEvents: "0", note: "" }));
  }

  function remove(id: string) {
    setLogs(prev => prev.filter(l => l.id !== id));
  }

  const cutoff = new Date();
  cutoff.setDate(cutoff.getDate() - 14);
  const cutoffStr = cutoff.toISOString().slice(0, 10);
  const recent = logs.filter(l => l.date >= cutoffStr);
  const avgStress = recent.length ? (recent.reduce((s, l) => s + l.stress, 0) / recent.length) : 0;
  const avgSleep = recent.length ? (recent.reduce((s, l) => s + l.sleepHours, 0) / recent.length) : 0;
  const totalEvents = recent.reduce((s, l) => s + l.behaviorEvents, 0);
  const burnoutWarning = avgStress >= 4 || avgSleep < 5;

  return (
    <main className="min-h-screen bg-muted">
      <SEOHead title="Dementia Caregiver Stress Log | TekSure" description="Track your stress, sleep, and behavior events caring for a loved one with dementia. See your 14-day pattern. Bring it to your doctor or social worker." />
      <div className="max-w-2xl mx-auto px-4 py-8 print:p-4">
        <div className="mb-6">
          <div className="flex items-center gap-2 mb-1">
            <Brain className="h-7 w-7 text-primary" />
            <h1 className="text-3xl font-bold text-foreground">Caregiver Stress Log</h1>
          </div>
          <p className="text-muted-foreground text-lg">For spouses and family caring for a loved one with Alzheimer's or dementia. One quick entry per day. Patterns appear after about two weeks.</p>
        </div>

        {burnoutWarning && recent.length >= 5 && (
          <Card className="mb-4 bg-danger border-danger-foreground/25 border-2">
            <CardContent className="py-3 px-4">
              <p className="text-danger-foreground font-semibold">Caregiver burnout warning</p>
              <p className="text-base text-danger-foreground mt-1">Your stress has been at 4-5 most days, or your sleep is averaging under 5 hours. This is the body's signal that respite is no longer optional. Call the Alzheimer's Association 24/7 helpline: <span className="font-semibold">1-800-272-3900</span>. They will help you find respite care, even just for an afternoon.</p>
            </CardContent>
          </Card>
        )}

        {recent.length > 0 && (
          <div className="grid grid-cols-3 gap-3 mb-4">
            <Card><CardContent className="py-3 px-3 text-center"><p className="text-sm text-muted-foreground">14-day avg stress</p><p className="text-2xl font-bold text-primary">{avgStress.toFixed(1)}</p></CardContent></Card>
            <Card><CardContent className="py-3 px-3 text-center"><p className="text-sm text-muted-foreground">14-day avg sleep</p><p className="text-2xl font-bold text-primary">{avgSleep.toFixed(1)}h</p></CardContent></Card>
            <Card><CardContent className="py-3 px-3 text-center"><p className="text-sm text-muted-foreground">Total events</p><p className="text-2xl font-bold text-primary">{totalEvents}</p></CardContent></Card>
          </div>
        )}

        <Card className="mb-4 print:hidden">
          <CardHeader className="pb-2 pt-3"><CardTitle className="text-lg flex items-center gap-2"><PlusCircle className="h-5 w-5 text-primary" />Log today</CardTitle></CardHeader>
          <CardContent className="space-y-2">
            <Input type="date" value={form.date} onChange={e => setForm(f => ({ ...f, date: e.target.value }))} />
            <div>
              <label className="text-base font-medium text-foreground">Your stress today (1 = calm, 5 = breaking point)</label>
              <div className="flex gap-1 mt-1">
                {([1, 2, 3, 4, 5] as Stress[]).map(s => (
                  <Button key={s} type="button" size="sm" variant={form.stress === s ? "default" : "outline"} onClick={() => setForm(f => ({ ...f, stress: s }))} className="flex-1">
                    {s}
                  </Button>
                ))}
              </div>
              <p className="text-sm text-muted-foreground mt-1">{stressLabel(form.stress)}</p>
            </div>
            <div className="grid grid-cols-2 gap-2">
              <div>
                <label className="text-sm text-muted-foreground">Hours of sleep last night</label>
                <Input type="number" step="0.5" min="0" max="24" value={form.sleepHours} onChange={e => setForm(f => ({ ...f, sleepHours: e.target.value }))} />
              </div>
              <div>
                <label className="text-sm text-muted-foreground">Behavior events (wandering, aggression, etc)</label>
                <Input type="number" step="1" min="0" value={form.behaviorEvents} onChange={e => setForm(f => ({ ...f, behaviorEvents: e.target.value }))} />
              </div>
            </div>
            <Input placeholder="Note (optional)" value={form.note} onChange={e => setForm(f => ({ ...f, note: e.target.value }))} />
            <Button onClick={add} className="bg-violet-700 hover:bg-violet-800">Save day</Button>
          </CardContent>
        </Card>

        {logs.length > 0 && (
          <Card>
            <CardHeader className="pb-2 pt-3">
              <CardTitle className="text-base flex items-center justify-between">
                <span>All entries ({logs.length})</span>
                <Button variant="outline" size="sm" onClick={() => window.print()} className="gap-1 print:hidden">
                  <Printer className="h-3 w-3" />Print
                </Button>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="divide-y">
                {[...logs].reverse().map(l => (
                  <div key={l.id} className="py-2 text-sm">
                    <div className="flex items-center justify-between gap-2">
                      <div className="flex items-center gap-2 flex-wrap">
                        <span className="text-muted-foreground text-sm">{l.date}</span>
                        <Badge variant="outline" className={`text-xs ${stressTone(l.stress)}`}>{l.stress} - {stressLabel(l.stress)}</Badge>
                        <span className="text-sm text-muted-foreground">Sleep: {l.sleepHours}h</span>
                        {l.behaviorEvents > 0 && <span className="text-sm text-warn-foreground font-semibold">Events: {l.behaviorEvents}</span>}
                      </div>
                      <Button variant="ghost" size="icon" onClick={() => remove(l.id)} className="h-6 w-6 text-danger-foreground hover:text-danger-foreground print:hidden">
                        <Trash2 className="h-3 w-3" />
                      </Button>
                    </div>
                    {l.note && <p className="text-sm text-muted-foreground italic mt-0.5">{l.note}</p>}
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        )}

        <Card className="mt-4 bg-info border-info-foreground/25">
          <CardContent className="py-3 px-4">
            <p className="text-base text-info-foreground"><span className="font-semibold">Help for you, the caregiver:</span> Alzheimer's Association 24/7 helpline 1-800-272-3900. Eldercare Locator 1-800-677-1116 (your local Area Agency on Aging arranges respite). Hiring overnight respite even one night a week protects your health. You matter too.</p>
          </CardContent>
        </Card>
      </div>
    </main>
  );
}

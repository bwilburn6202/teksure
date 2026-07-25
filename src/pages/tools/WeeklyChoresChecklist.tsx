import { useState } from "react";
import SEOHead from "@/components/SEOHead";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle2, Circle, Printer, RotateCcw, Plus, Trash2 } from "lucide-react";

type Day = "Mon" | "Tue" | "Wed" | "Thu" | "Fri" | "Sat" | "Sun";

interface Chore {
  id: string;
  day: Day;
  task: string;
  done: boolean;
}

const DAYS: Day[] = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

const STARTER_CHORES: Omit<Chore, "id" | "done">[] = [
  { day: "Mon", task: "Dust living room and bedroom" },
  { day: "Mon", task: "Wipe down kitchen counters" },
  { day: "Tue", task: "Vacuum or sweep main floors" },
  { day: "Tue", task: "Empty trash and replace bag" },
  { day: "Wed", task: "Clean bathroom (toilet, sink, mirror)" },
  { day: "Wed", task: "Wash bath towels" },
  { day: "Thu", task: "Mop kitchen and bathroom floors" },
  { day: "Thu", task: "Wipe stovetop and microwave" },
  { day: "Fri", task: "Wash sheets and pillowcases" },
  { day: "Fri", task: "Water house plants" },
  { day: "Sat", task: "Grocery shop / restock" },
  { day: "Sat", task: "Pay bills due this week" },
  { day: "Sun", task: "Plan meals for the week" },
  { day: "Sun", task: "Light tidy-up — 15 minutes" },
];

export default function WeeklyChoresChecklist() {
  const [chores, setChores] = useState<Chore[]>([]);
  const [seeded, setSeeded] = useState(false);
  const [form, setForm] = useState<{ day: Day; task: string }>({ day: "Mon", task: "" });

  function seedDefaults() {
    setChores(STARTER_CHORES.map((c, i) => ({ ...c, id: `s-${i}`, done: false })));
    setSeeded(true);
  }

  function addChore() {
    if (!form.task.trim()) return;
    setChores(prev => [...prev, { id: Date.now().toString() + Math.random(), day: form.day, task: form.task.trim(), done: false }]);
    setForm(f => ({ ...f, task: "" }));
  }

  function remove(id: string) {
    setChores(prev => prev.filter(c => c.id !== id));
  }

  function toggle(id: string) {
    setChores(prev => prev.map(c => c.id === id ? { ...c, done: !c.done } : c));
  }

  function resetWeek() {
    setChores(prev => prev.map(c => ({ ...c, done: false })));
  }

  const grouped = DAYS.reduce<Record<Day, Chore[]>>((acc, d) => {
    acc[d] = chores.filter(c => c.day === d);
    return acc;
  }, {} as Record<Day, Chore[]>);

  const total = chores.length;
  const doneCount = chores.filter(c => c.done).length;

  return (
    <div className="min-h-screen bg-gray-50">
      <SEOHead
        title="Weekly Chores Checklist | TekSure"
        description="A simple weekly chore rotation. Start with 14 ready-made tasks or build your own. Check off as you go, reset each Sunday."
      />

      <div className="max-w-2xl mx-auto px-4 py-8 print:p-4">
        <div className="mb-6">
          <div className="flex items-center gap-2 mb-1">
            <CheckCircle2 className="h-7 w-7 text-emerald-600" />
            <h1 className="text-3xl font-bold text-gray-900">Weekly Chores Checklist</h1>
          </div>
          <p className="text-gray-600 text-lg">
            Spread household tasks across the week so no single day feels overwhelming. Check things off as you go.
          </p>
        </div>

        {chores.length === 0 && !seeded && (
          <Card className="mb-4 print:hidden">
            <CardContent className="py-6 text-center">
              <p className="text-gray-700 mb-3">Start with a ready-made weekly rotation, or build your own from scratch.</p>
              <Button onClick={seedDefaults} size="lg">Use Starter Rotation (14 tasks)</Button>
            </CardContent>
          </Card>
        )}

        {/* Stats */}
        {chores.length > 0 && (
          <Card className="mb-4">
            <CardContent className="py-3 px-4 flex items-center justify-between gap-3">
              <div>
                <p className="text-xs text-gray-500">Done this week</p>
                <p className="text-2xl font-bold text-emerald-700">{doneCount} / {total}</p>
              </div>
              <Button variant="outline" onClick={resetWeek} className="gap-2 print:hidden">
                <RotateCcw className="h-4 w-4" />
                Start fresh week
              </Button>
            </CardContent>
          </Card>
        )}

        {/* Add custom */}
        <Card className="mb-6 print:hidden">
          <CardHeader className="pb-2">
            <CardTitle className="text-lg flex items-center gap-2">
              <Plus className="h-5 w-5 text-emerald-600" />
              Add a Chore
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex flex-col sm:flex-row gap-2">
              <select value={form.day} onChange={e => setForm(f => ({ ...f, day: e.target.value as Day }))} className="border border-gray-300 rounded-md px-3 py-2 text-base bg-white">
                {DAYS.map(d => <option key={d}>{d}</option>)}
              </select>
              <Input placeholder="e.g. Water front yard" value={form.task} onChange={e => setForm(f => ({ ...f, task: e.target.value }))} onKeyDown={e => { if (e.key === "Enter") addChore(); }} className="flex-1" />
              <Button onClick={addChore}>Add</Button>
            </div>
          </CardContent>
        </Card>

        {chores.length > 0 && (
          <div className="mb-3 flex items-center justify-end print:hidden">
            <Button variant="outline" onClick={() => window.print()} className="gap-2">
              <Printer className="h-4 w-4" />
              Print
            </Button>
          </div>
        )}

        {/* Days */}
        <div className="space-y-3">
          {DAYS.map(day => {
            const items = grouped[day];
            if (items.length === 0) return null;
            const dayDone = items.filter(c => c.done).length;
            return (
              <Card key={day} className="print:break-inside-avoid">
                <CardHeader className="pb-2 pt-3 bg-emerald-50">
                  <CardTitle className="text-base text-emerald-800 flex items-center justify-between">
                    <span>{day}</span>
                    <Badge variant="secondary" className="text-xs">{dayDone}/{items.length}</Badge>
                  </CardTitle>
                </CardHeader>
                <CardContent className="pt-2">
                  <div className="space-y-1">
                    {items.map(c => (
                      <div key={c.id} className="flex items-start gap-2 py-1">
                        <button onClick={() => toggle(c.id)} className="mt-0.5 shrink-0" aria-label={c.done ? "Mark incomplete" : "Mark complete"}>
                          {c.done ? <CheckCircle2 className="h-5 w-5 text-emerald-600" /> : <Circle className="h-5 w-5 text-gray-400" />}
                        </button>
                        <span className={`flex-1 text-sm ${c.done ? "line-through text-gray-400" : "text-gray-800"}`}>{c.task}</span>
                        <Button variant="ghost" size="icon" onClick={() => remove(c.id)} className="h-6 w-6 text-red-400 hover:text-red-600 print:hidden">
                          <Trash2 className="h-3 w-3" />
                        </Button>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <Card className="mt-6 bg-blue-50 border-blue-200 print:hidden">
          <CardContent className="py-3 px-4">
            <p className="text-sm text-blue-800">
              <span className="font-semibold">Quick Tip: </span>
              The goal is consistency, not perfection. If you skip a task, no shame — just check it off the next time it comes around.
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

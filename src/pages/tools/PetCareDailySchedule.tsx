import { useState } from "react";
import SEOHead from "@/components/SEOHead";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { Badge } from "@/components/ui/badge";
import { PawPrint, Trash2, Printer, PlusCircle } from "lucide-react";

type Cat = "Feed" | "Medication" | "Walk/Exercise" | "Litter/Clean" | "Other";

interface Task {
  id: string;
  pet: string;
  task: string;
  category: Cat;
  time: string;
}

const CATEGORIES: Cat[] = ["Feed", "Medication", "Walk/Exercise", "Litter/Clean", "Other"];

export default function PetCareDailySchedule() {
  const [petName, setPetName] = useState("");
  const [tasks, setTasks] = useState<Task[]>([]);
  const [form, setForm] = useState({ task: "", category: "Feed" as Cat, time: "08:00" });
  const [done, setDone] = useState<Record<string, boolean>>({});

  function add() {
    if (!form.task.trim()) return;
    setTasks(prev => [...prev, {
      id: Date.now().toString() + Math.random(),
      pet: petName.trim() || "Pet",
      task: form.task.trim(),
      category: form.category,
      time: form.time,
    }].sort((a, b) => a.time.localeCompare(b.time)));
    setForm({ ...form, task: "" });
  }

  function remove(id: string) {
    setTasks(prev => prev.filter(t => t.id !== id));
  }

  function toggle(id: string) {
    setDone(p => ({ ...p, [id]: !p[id] }));
  }

  function todayKey() {
    return new Date().toISOString().slice(0, 10);
  }

  const completedToday = Object.entries(done).filter(([k, v]) => v && k.startsWith(todayKey())).length;

  return (
    <div className="min-h-screen bg-gray-50">
      <SEOHead title="Pet Care Daily Schedule | TekSure" description="A printable daily schedule for feeding, medication, walks, and litter care for your pet. Helpful for seniors with new pets and family helpers." />
      <div className="max-w-2xl mx-auto px-4 py-8 print:p-4">
        <div className="mb-6">
          <div className="flex items-center gap-2 mb-1">
            <PawPrint className="h-7 w-7 text-orange-700" />
            <h1 className="text-3xl font-bold text-gray-900">Pet Care Schedule</h1>
          </div>
          <p className="text-gray-600 text-lg">A printable daily schedule for your pet — so a family helper, dog walker, or pet sitter can take over without questions.</p>
        </div>

        <Card className="mb-4 print:hidden">
          <CardContent className="py-4 px-4 space-y-2">
            <Input value={petName} onChange={e => setPetName(e.target.value)} placeholder="Pet name (e.g. Bailey)" />
            <h2 className="text-lg font-semibold flex items-center gap-2"><PlusCircle className="h-5 w-5 text-orange-700" />Add a task</h2>
            <Input value={form.task} onChange={e => setForm(f => ({ ...f, task: e.target.value }))} placeholder="What to do (e.g. 1/2 cup kibble, give Rimadyl pill)" />
            <div className="grid grid-cols-2 gap-2">
              <select value={form.category} onChange={e => setForm(f => ({ ...f, category: e.target.value as Cat }))} className="border border-gray-300 rounded-md px-3 py-2 text-base bg-white">
                {CATEGORIES.map(c => <option key={c}>{c}</option>)}
              </select>
              <Input type="time" value={form.time} onChange={e => setForm(f => ({ ...f, time: e.target.value }))} />
            </div>
            <Button onClick={add} className="bg-orange-700 hover:bg-orange-800">Add Task</Button>
          </CardContent>
        </Card>

        {tasks.length > 0 && (
          <>
            {completedToday > 0 && (
              <Card className="mb-4 bg-emerald-50 border-emerald-200">
                <CardContent className="py-2 px-4 text-center">
                  <p className="text-sm text-emerald-900 font-semibold">{completedToday} task(s) done today</p>
                </CardContent>
              </Card>
            )}

            <Card>
              <CardContent className="py-4 px-4">
                <h2 className="text-lg font-semibold mb-2 flex items-center justify-between">
                  <span>{petName || "Pet"}'s daily schedule</span>
                  <Button variant="outline" size="sm" onClick={() => window.print()} className="gap-1 print:hidden">
                    <Printer className="h-3 w-3" />Print
                  </Button>
                </h2>
                <div className="space-y-2">
                  {tasks.map(t => {
                    const key = `${todayKey()}-${t.id}`;
                    return (
                      <div key={t.id} className="flex items-center gap-3 p-2 rounded-lg border border-gray-200 bg-white">
                        <Checkbox checked={!!done[key]} onCheckedChange={() => toggle(key)} className="print:hidden" />
                        <div className="flex-1">
                          <div className="flex items-center gap-2 flex-wrap">
                            <span className="font-mono text-sm font-semibold text-gray-700">{t.time}</span>
                            <Badge variant="secondary" className="text-xs">{t.category}</Badge>
                          </div>
                          <p className={`text-sm mt-0.5 ${done[key] ? "line-through text-gray-400" : "text-gray-900"}`}>{t.task}</p>
                        </div>
                        <Button variant="ghost" size="icon" onClick={() => remove(t.id)} className="h-6 w-6 text-red-400 hover:text-red-600 print:hidden">
                          <Trash2 className="h-3 w-3" />
                        </Button>
                      </div>
                    );
                  })}
                </div>
              </CardContent>
            </Card>
          </>
        )}

        <Card className="mt-4 bg-blue-50 border-blue-200">
          <CardContent className="py-3 px-4">
            <p className="text-sm text-blue-900"><span className="font-semibold">If a sitter is taking over:</span> Print this page and leave it on the kitchen counter with: vet name and number, microchip info, feeding amount, where leashes and meds are kept, and one emergency contact. Most pet emergencies happen during transitions.</p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

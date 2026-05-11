import { useState } from "react";
import SEOHead from "@/components/SEOHead";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Sun, Coffee, Moon, Trash2, Printer, PlusCircle, Clock } from "lucide-react";

type Period = "morning" | "afternoon" | "evening";

interface Activity {
  id: string;
  period: Period;
  time: string;
  task: string;
  notes: string;
}

const PERIOD_META: Record<Period, { label: string; emoji: string; icon: typeof Sun; color: string; bg: string }> = {
  morning: { label: "Morning", emoji: "🌅", icon: Sun, color: "text-amber-700", bg: "bg-amber-50" },
  afternoon: { label: "Afternoon", emoji: "☀️", icon: Coffee, color: "text-orange-700", bg: "bg-orange-50" },
  evening: { label: "Evening", emoji: "🌙", icon: Moon, color: "text-indigo-700", bg: "bg-indigo-50" },
};

const SUGGESTIONS: { period: Period; time: string; task: string }[] = [
  { period: "morning", time: "07:00", task: "Wake up and stretch" },
  { period: "morning", time: "07:30", task: "Take morning medications" },
  { period: "morning", time: "08:00", task: "Breakfast" },
  { period: "morning", time: "09:00", task: "Light walk or exercise" },
  { period: "morning", time: "10:00", task: "Check in with family by text or call" },
  { period: "afternoon", time: "12:00", task: "Lunch" },
  { period: "afternoon", time: "13:00", task: "Take afternoon medications" },
  { period: "afternoon", time: "14:00", task: "Quiet time or rest" },
  { period: "afternoon", time: "15:30", task: "Hobby or social activity" },
  { period: "afternoon", time: "16:30", task: "Snack and water" },
  { period: "evening", time: "18:00", task: "Dinner" },
  { period: "evening", time: "19:00", task: "Take evening medications" },
  { period: "evening", time: "20:00", task: "Watch TV or read" },
  { period: "evening", time: "21:30", task: "Get ready for bed" },
  { period: "evening", time: "22:00", task: "Lights out" },
];

export default function DailyRoutineBuilder() {
  const [activities, setActivities] = useState<Activity[]>([]);
  const [form, setForm] = useState({ period: "morning" as Period, time: "", task: "", notes: "" });
  const [error, setError] = useState("");

  function addActivity() {
    if (!form.time) { setError("Please enter a time."); return; }
    if (!form.task.trim()) { setError("Please enter what happens at that time."); return; }
    setError("");
    setActivities(prev => [
      ...prev,
      {
        id: Date.now().toString(),
        period: form.period,
        time: form.time,
        task: form.task.trim(),
        notes: form.notes.trim(),
      },
    ]);
    setForm(f => ({ ...f, time: "", task: "", notes: "" }));
  }

  function addSuggestion(s: typeof SUGGESTIONS[number]) {
    setActivities(prev => [
      ...prev,
      { id: Date.now().toString() + Math.random(), period: s.period, time: s.time, task: s.task, notes: "" },
    ]);
  }

  function removeActivity(id: string) {
    setActivities(prev => prev.filter(a => a.id !== id));
  }

  function formatTime(t: string) {
    if (!t) return "";
    const [hh, mm] = t.split(":");
    const h = parseInt(hh, 10);
    const period = h >= 12 ? "PM" : "AM";
    const hour12 = h === 0 ? 12 : h > 12 ? h - 12 : h;
    return `${hour12}:${mm} ${period}`;
  }

  const grouped: Record<Period, Activity[]> = {
    morning: activities.filter(a => a.period === "morning").sort((a, b) => a.time.localeCompare(b.time)),
    afternoon: activities.filter(a => a.period === "afternoon").sort((a, b) => a.time.localeCompare(b.time)),
    evening: activities.filter(a => a.period === "evening").sort((a, b) => a.time.localeCompare(b.time)),
  };

  const usedSuggestionTexts = new Set(activities.map(a => `${a.period}|${a.task}`));

  return (
    <div className="min-h-screen bg-gray-50">
      <SEOHead
        title="Daily Routine Builder | TekSure"
        description="Design a printable daily routine with morning, afternoon, and evening activities. Add medications, meals, exercise, and quiet time."
      />

      <div className="max-w-2xl mx-auto px-4 py-8 print:p-4">
        <div className="mb-6">
          <div className="flex items-center gap-2 mb-1">
            <Clock className="h-7 w-7 text-amber-600" />
            <h1 className="text-3xl font-bold text-gray-900">My Daily Routine</h1>
          </div>
          <p className="text-gray-600 text-lg">
            Build a clear daily plan with times for medications, meals, exercise, and rest. Print it and keep it handy.
          </p>
        </div>

        {/* Add activity */}
        <Card className="mb-6 print:hidden">
          <CardHeader>
            <CardTitle className="text-xl flex items-center gap-2">
              <PlusCircle className="h-5 w-5 text-amber-600" />
              Add an Activity
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <Label className="text-base font-medium">Time of Day</Label>
              <div className="flex gap-2 mt-1">
                {(["morning", "afternoon", "evening"] as Period[]).map(p => (
                  <button
                    key={p}
                    type="button"
                    onClick={() => setForm(f => ({ ...f, period: p }))}
                    className={`flex-1 px-3 py-2 rounded-md border text-sm font-medium ${
                      form.period === p ? "bg-amber-50 border-amber-400 text-amber-800" : "bg-white border-gray-200 text-gray-700 hover:bg-gray-50"
                    }`}
                  >
                    {PERIOD_META[p].emoji} {PERIOD_META[p].label}
                  </button>
                ))}
              </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              <div>
                <Label htmlFor="time" className="text-base font-medium">Time</Label>
                <Input id="time" type="time" value={form.time} onChange={e => setForm(f => ({ ...f, time: e.target.value }))} className="mt-1 text-base" />
              </div>
              <div className="sm:col-span-2">
                <Label htmlFor="task" className="text-base font-medium">What happens?</Label>
                <Input id="task" placeholder="e.g. Take blood pressure medication" value={form.task} onChange={e => setForm(f => ({ ...f, task: e.target.value }))} className="mt-1 text-base" />
              </div>
            </div>
            <div>
              <Label htmlFor="notes" className="text-base font-medium">Notes (optional)</Label>
              <Input id="notes" placeholder="e.g. With a glass of water, after breakfast" value={form.notes} onChange={e => setForm(f => ({ ...f, notes: e.target.value }))} className="mt-1 text-base" />
            </div>
            {error && <p className="text-red-600 text-sm">{error}</p>}
            <Button onClick={addActivity} size="lg" className="w-full sm:w-auto text-base">
              Add to Routine
            </Button>
          </CardContent>
        </Card>

        {/* Suggestions */}
        {activities.length < 5 && (
          <Card className="mb-4 bg-blue-50 border-blue-200 print:hidden">
            <CardHeader className="pb-2">
              <CardTitle className="text-base text-blue-800">Quick start suggestions</CardTitle>
            </CardHeader>
            <CardContent className="pt-0">
              <p className="text-sm text-blue-700 mb-2">Tap any suggestion below to add it. You can change times and details later.</p>
              <div className="flex flex-wrap gap-2">
                {SUGGESTIONS.filter(s => !usedSuggestionTexts.has(`${s.period}|${s.task}`)).slice(0, 8).map((s, i) => (
                  <button
                    key={i}
                    onClick={() => addSuggestion(s)}
                    className="text-xs px-2 py-1 rounded-full bg-white border border-blue-200 text-blue-700 hover:bg-blue-100"
                  >
                    + {formatTime(s.time)} {s.task}
                  </button>
                ))}
              </div>
            </CardContent>
          </Card>
        )}

        {/* Routine display */}
        {activities.length === 0 ? (
          <Card className="print:hidden">
            <CardContent className="py-10 text-center text-gray-500">
              <p className="text-lg">No activities yet.</p>
              <p className="text-sm mt-1">Add your first activity or pick a suggestion above.</p>
            </CardContent>
          </Card>
        ) : (
          <div className="space-y-4">
            {(["morning", "afternoon", "evening"] as Period[]).map(p => {
              const list = grouped[p];
              if (list.length === 0) return null;
              const meta = PERIOD_META[p];
              return (
                <Card key={p} className={`${meta.bg} print:break-inside-avoid`}>
                  <CardHeader className="pb-2 pt-4">
                    <CardTitle className={`text-xl ${meta.color}`}>
                      {meta.emoji} {meta.label}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="pt-0 pb-3">
                    <div className="space-y-2">
                      {list.map(a => (
                        <div key={a.id} className="bg-white rounded-md p-3 flex items-start justify-between gap-2 border border-gray-100">
                          <div className="flex-1">
                            <div className="flex items-center gap-2">
                              <Badge variant="secondary" className="text-sm font-mono">
                                {formatTime(a.time)}
                              </Badge>
                              <span className="font-medium text-gray-900">{a.task}</span>
                            </div>
                            {a.notes && <p className="text-sm text-gray-500 italic mt-1 ml-1">{a.notes}</p>}
                          </div>
                          <Button variant="ghost" size="icon" className="shrink-0 text-red-400 hover:text-red-600 print:hidden" onClick={() => removeActivity(a.id)}>
                            <Trash2 className="h-4 w-4" />
                          </Button>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        )}

        {activities.length > 0 && (
          <div className="flex flex-wrap gap-3 mt-4 print:hidden">
            <Button variant="outline" onClick={() => window.print()} className="gap-2">
              <Printer className="h-4 w-4" />
              Print My Routine
            </Button>
          </div>
        )}
      </div>
    </div>
  );
}

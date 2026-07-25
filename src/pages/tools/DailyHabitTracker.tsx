import { useState } from "react";
import SEOHead from "@/components/SEOHead";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Sparkles, Trash2, Printer, PlusCircle, CheckCircle2, Flame } from "lucide-react";

interface Habit {
  id: string;
  name: string;
  days: boolean[]; // length 7, index 0 = Mon
}

const DAY_LABELS = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

const SUGGESTIONS = [
  "Take morning walk",
  "Drink 6 glasses of water",
  "Take medications on time",
  "Stretch for 10 minutes",
  "Read for 30 minutes",
  "Call a friend or family member",
  "Eat a piece of fruit",
  "Floss",
];

export default function DailyHabitTracker() {
  const [habits, setHabits] = useState<Habit[]>([]);
  const [newHabit, setNewHabit] = useState("");
  const [error, setError] = useState("");

  function addHabit(name?: string) {
    const finalName = (name ?? newHabit).trim();
    if (!finalName) { setError("Please enter a habit name."); return; }
    setError("");
    setHabits(prev => [...prev, { id: Date.now().toString() + Math.random(), name: finalName, days: Array(7).fill(false) }]);
    if (!name) setNewHabit("");
  }

  function toggleDay(habitId: string, dayIdx: number) {
    setHabits(prev => prev.map(h => h.id === habitId ? { ...h, days: h.days.map((d, i) => i === dayIdx ? !d : d) } : h));
  }

  function removeHabit(id: string) {
    setHabits(prev => prev.filter(h => h.id !== id));
  }

  function streak(habit: Habit): number {
    let count = 0;
    for (let i = habit.days.length - 1; i >= 0; i--) {
      if (habit.days[i]) count++;
      else break;
    }
    return count;
  }

  function weekDone(habit: Habit): number {
    return habit.days.filter(Boolean).length;
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <SEOHead
        title="Daily Habit Tracker | TekSure"
        description="Track 7 days of healthy habits in a simple grid. Build a walking streak, water habit, or any routine you want to keep."
      />

      <div className="max-w-2xl mx-auto px-4 py-8 print:p-4">
        <div className="mb-6">
          <div className="flex items-center gap-2 mb-1">
            <Sparkles className="h-7 w-7 text-violet-600" />
            <h1 className="text-3xl font-bold text-gray-900">Daily Habit Tracker</h1>
          </div>
          <p className="text-gray-600 text-lg">
            Pick a few small habits, then check off each day you do them. Watch your streaks grow.
          </p>
        </div>

        {/* Add habit */}
        <Card className="mb-4 print:hidden">
          <CardHeader className="pb-2">
            <CardTitle className="text-lg flex items-center gap-2">
              <PlusCircle className="h-5 w-5 text-violet-600" />
              Add a habit
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <div className="flex flex-col sm:flex-row gap-2">
              <Input
                placeholder="e.g. Walk for 20 minutes"
                value={newHabit}
                onChange={e => setNewHabit(e.target.value)}
                onKeyDown={e => { if (e.key === "Enter") addHabit(); }}
                className="text-base"
              />
              <Button onClick={() => addHabit()} className="text-base">Add</Button>
            </div>
            {error && <p className="text-red-600 text-sm">{error}</p>}
            {habits.length < 3 && (
              <div>
                <p className="text-sm text-gray-500 mb-1">Quick add:</p>
                <div className="flex flex-wrap gap-1">
                  {SUGGESTIONS.filter(s => !habits.some(h => h.name === s)).slice(0, 6).map(s => (
                    <button
                      key={s}
                      type="button"
                      onClick={() => addHabit(s)}
                      className="text-xs px-2 py-1 rounded-full bg-violet-50 border border-violet-200 text-violet-700 hover:bg-violet-100"
                    >
                      + {s}
                    </button>
                  ))}
                </div>
              </div>
            )}
          </CardContent>
        </Card>

        {/* Habit grid */}
        {habits.length === 0 ? (
          <Card className="print:hidden">
            <CardContent className="py-10 text-center text-gray-500">
              <p className="text-lg">No habits yet.</p>
              <p className="text-sm mt-1">Add one or two small habits to start tracking.</p>
            </CardContent>
          </Card>
        ) : (
          <div className="space-y-3">
            {habits.map(h => {
              const s = streak(h);
              const done = weekDone(h);
              return (
                <Card key={h.id} className="print:break-inside-avoid">
                  <CardContent className="py-3 px-4">
                    <div className="flex items-start justify-between gap-2 mb-2">
                      <div>
                        <p className="font-semibold text-gray-900 text-base">{h.name}</p>
                        <div className="flex flex-wrap gap-1 mt-1">
                          {s > 0 && (
                            <Badge className="text-xs bg-orange-500 hover:bg-orange-600 gap-1">
                              <Flame className="h-3 w-3" />
                              {s} day{s !== 1 ? "s" : ""} streak
                            </Badge>
                          )}
                          <Badge variant="secondary" className="text-xs">
                            {done}/7 this week
                          </Badge>
                        </div>
                      </div>
                      <Button
                        variant="ghost"
                        size="icon"
                        className="shrink-0 text-red-400 hover:text-red-600 print:hidden"
                        onClick={() => removeHabit(h.id)}
                        aria-label="Remove habit"
                      >
                        <Trash2 className="h-4 w-4" />
                      </Button>
                    </div>

                    {/* Day grid */}
                    <div className="grid grid-cols-7 gap-1 mt-2">
                      {h.days.map((checked, i) => (
                        <button
                          key={i}
                          onClick={() => toggleDay(h.id, i)}
                          className={`flex flex-col items-center justify-center py-2 rounded-md border transition-colors ${
                            checked ? "bg-green-100 border-green-400" : "bg-white border-gray-200 hover:bg-gray-50"
                          }`}
                          aria-label={`Toggle ${DAY_LABELS[i]}`}
                        >
                          <span className="text-xs font-medium text-gray-600">{DAY_LABELS[i]}</span>
                          {checked
                            ? <CheckCircle2 className="h-5 w-5 text-green-600 mt-0.5" />
                            : <span className="h-5 w-5 mt-0.5" />}
                        </button>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        )}

        {habits.length > 0 && (
          <div className="flex flex-wrap gap-3 mt-4 print:hidden">
            <Button variant="outline" onClick={() => window.print()} className="gap-2">
              <Printer className="h-4 w-4" />
              Print Tracker
            </Button>
          </div>
        )}

        <Card className="mt-6 bg-blue-50 border-blue-200 print:hidden">
          <CardContent className="py-3 px-4">
            <p className="text-sm text-blue-800">
              <span className="font-semibold">Quick Tip: </span>
              Start with two or three habits at most. Once those feel automatic, add another. Trying too many at once is the fastest way to give up.
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

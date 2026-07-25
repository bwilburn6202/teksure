import { useState } from "react";
import SEOHead from "@/components/SEOHead";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Heart, Trash2, Printer, PlusCircle, Sparkles } from "lucide-react";

interface Entry {
  id: string;
  date: string;
  thing1: string;
  thing2: string;
  thing3: string;
}

export default function GratitudeJournal() {
  const [entries, setEntries] = useState<Entry[]>([]);
  const [form, setForm] = useState({
    date: new Date().toISOString().slice(0, 10),
    thing1: "",
    thing2: "",
    thing3: "",
  });
  const [error, setError] = useState("");

  function add() {
    const filled = [form.thing1, form.thing2, form.thing3].filter(t => t.trim()).length;
    if (filled === 0) { setError("Please write at least one thing you are grateful for today."); return; }
    setError("");
    setEntries(prev => [
      ...prev,
      { id: Date.now().toString() + Math.random(), date: form.date, thing1: form.thing1.trim(), thing2: form.thing2.trim(), thing3: form.thing3.trim() },
    ]);
    setForm(f => ({ ...f, thing1: "", thing2: "", thing3: "" }));
  }

  function remove(id: string) {
    setEntries(prev => prev.filter(e => e.id !== id));
  }

  function formatDate(s: string) {
    const [y, m, d] = s.split("-");
    return `${m}/${d}/${y}`;
  }

  // Streak (consecutive days from today)
  function streak(): number {
    if (entries.length === 0) return 0;
    const dates = new Set(entries.map(e => e.date));
    let count = 0;
    const cursor = new Date();
    while (true) {
      const s = cursor.toISOString().slice(0, 10);
      if (dates.has(s)) {
        count++;
        cursor.setDate(cursor.getDate() - 1);
      } else if (count === 0) {
        // Allow start: if today not filled, check yesterday
        cursor.setDate(cursor.getDate() - 1);
        if (count === 0 && dates.has(cursor.toISOString().slice(0, 10))) continue;
        break;
      } else {
        break;
      }
    }
    return count;
  }

  const sorted = [...entries].sort((a, b) => b.date.localeCompare(a.date));
  const myStreak = streak();

  return (
    <div className="min-h-screen bg-gray-50">
      <SEOHead
        title="Gratitude Journal | TekSure"
        description="Write three things you are grateful for each day. Build a streak and a small book of good moments to look back on."
      />

      <div className="max-w-2xl mx-auto px-4 py-8 print:p-4">
        <div className="mb-6">
          <div className="flex items-center gap-2 mb-1">
            <Heart className="h-7 w-7 text-rose-500" />
            <h1 className="text-3xl font-bold text-gray-900">Gratitude Journal</h1>
          </div>
          <p className="text-gray-600 text-lg">
            Each day, jot down three small things that went well. Over time it becomes a quiet record of good moments.
          </p>
        </div>

        {/* Stats */}
        {entries.length > 0 && (
          <div className="grid grid-cols-2 gap-3 mb-4">
            <Card>
              <CardContent className="py-3 px-3 text-center">
                <p className="text-xs text-gray-500">Days journaled</p>
                <p className="text-xl font-bold text-rose-700">{entries.length}</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="py-3 px-3 text-center">
                <p className="text-xs text-gray-500">Current streak</p>
                <p className="text-xl font-bold text-orange-600">{myStreak} day{myStreak !== 1 ? "s" : ""}</p>
              </CardContent>
            </Card>
          </div>
        )}

        {/* Add form */}
        <Card className="mb-6 print:hidden">
          <CardHeader>
            <CardTitle className="text-xl flex items-center gap-2">
              <PlusCircle className="h-5 w-5 text-rose-600" />
              Today's Three Things
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <div>
              <Input id="g-date" type="date" value={form.date} onChange={e => setForm(f => ({ ...f, date: e.target.value }))} className="text-base" />
            </div>
            <div>
              <label htmlFor="thing1" className="text-base font-medium text-gray-700 flex items-center gap-2">
                <Sparkles className="h-4 w-4 text-rose-400" />
                Something I am grateful for...
              </label>
              <Input id="thing1" placeholder="e.g. The way the morning light came through the kitchen window" value={form.thing1} onChange={e => setForm(f => ({ ...f, thing1: e.target.value }))} className="mt-1 text-base" />
            </div>
            <div>
              <label htmlFor="thing2" className="text-base font-medium text-gray-700 flex items-center gap-2">
                <Sparkles className="h-4 w-4 text-rose-400" />
                A second thing...
              </label>
              <Input id="thing2" placeholder="e.g. My daughter called to check in" value={form.thing2} onChange={e => setForm(f => ({ ...f, thing2: e.target.value }))} className="mt-1 text-base" />
            </div>
            <div>
              <label htmlFor="thing3" className="text-base font-medium text-gray-700 flex items-center gap-2">
                <Sparkles className="h-4 w-4 text-rose-400" />
                A third thing...
              </label>
              <Input id="thing3" placeholder="e.g. Found a quarter on the sidewalk" value={form.thing3} onChange={e => setForm(f => ({ ...f, thing3: e.target.value }))} className="mt-1 text-base" />
            </div>
            {error && <p className="text-red-600 text-sm">{error}</p>}
            <Button onClick={add} size="lg" className="w-full sm:w-auto text-base bg-rose-500 hover:bg-rose-600">Save Today</Button>
          </CardContent>
        </Card>

        {entries.length > 0 && (
          <div className="mb-3 flex items-center justify-end print:hidden">
            <Button variant="outline" onClick={() => window.print()} className="gap-2">
              <Printer className="h-4 w-4" />
              Print Journal
            </Button>
          </div>
        )}

        {sorted.length === 0 ? (
          <Card className="print:hidden">
            <CardContent className="py-10 text-center text-gray-500">
              <Heart className="h-10 w-10 text-gray-300 mx-auto mb-2" />
              <p className="text-lg">Your journal is empty.</p>
              <p className="text-sm mt-1">Take 30 seconds to jot down today's three things.</p>
            </CardContent>
          </Card>
        ) : (
          <div className="space-y-3">
            {sorted.map(e => {
              const items = [e.thing1, e.thing2, e.thing3].filter(t => t);
              return (
                <Card key={e.id} className="print:break-inside-avoid">
                  <CardContent className="py-3 px-4">
                    <div className="flex items-start justify-between gap-2 mb-2">
                      <p className="text-sm font-semibold text-rose-700">{formatDate(e.date)}</p>
                      <Button variant="ghost" size="icon" onClick={() => remove(e.id)} className="h-6 w-6 text-red-400 hover:text-red-600 print:hidden">
                        <Trash2 className="h-3 w-3" />
                      </Button>
                    </div>
                    <ol className="list-decimal pl-5 space-y-1">
                      {items.map((t, i) => (
                        <li key={i} className="text-sm text-gray-700">{t}</li>
                      ))}
                    </ol>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        )}

        <Card className="mt-6 bg-rose-50 border-rose-200 print:hidden">
          <CardContent className="py-3 px-4">
            <p className="text-sm text-rose-800">
              <span className="font-semibold">Quick Tip: </span>
              The smallest things count. The smell of coffee. A neighbor's wave. A song on the radio. The point is to notice them, not to find big ones.
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

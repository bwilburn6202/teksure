import { useState } from "react";
import SEOHead from "@/components/SEOHead";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Cake, Heart, Trash2, Printer, PlusCircle, Calendar } from "lucide-react";

type EventType = "birthday" | "anniversary" | "other";

interface DateEvent {
  id: string;
  name: string;
  type: EventType;
  month: number;
  day: number;
  year?: number;
  notes: string;
}

const TYPE_LABELS: Record<EventType, { label: string; emoji: string; color: string }> = {
  birthday: { label: "Birthday", emoji: "🎂", color: "bg-pink-100 text-pink-800" },
  anniversary: { label: "Anniversary", emoji: "💝", color: "bg-rose-100 text-rose-800" },
  other: { label: "Other", emoji: "📅", color: "bg-blue-100 text-blue-800" },
};

const MONTHS = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

function daysUntil(month: number, day: number): number {
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  let next = new Date(today.getFullYear(), month - 1, day);
  if (next < today) next = new Date(today.getFullYear() + 1, month - 1, day);
  return Math.ceil((next.getTime() - today.getTime()) / (1000 * 60 * 60 * 24));
}

function ageOnNext(year: number | undefined, month: number, day: number): number | null {
  if (!year) return null;
  const today = new Date();
  let nextYear = today.getFullYear();
  const nextDate = new Date(nextYear, month - 1, day);
  if (nextDate < today) nextYear += 1;
  return nextYear - year;
}

export default function BirthdayAnniversaryTracker() {
  const [events, setEvents] = useState<DateEvent[]>([]);
  const [form, setForm] = useState({
    name: "",
    type: "birthday" as EventType,
    month: "",
    day: "",
    year: "",
    notes: "",
  });
  const [error, setError] = useState("");

  function handleAdd() {
    if (!form.name.trim()) { setError("Please enter a name."); return; }
    const month = parseInt(form.month, 10);
    const day = parseInt(form.day, 10);
    if (!month || month < 1 || month > 12) { setError("Please pick a valid month."); return; }
    if (!day || day < 1 || day > 31) { setError("Please enter a valid day (1–31)."); return; }
    const year = form.year ? parseInt(form.year, 10) : undefined;
    if (form.year && (isNaN(year!) || year! < 1900 || year! > 2030)) {
      setError("Please enter a valid year (e.g. 1955) or leave it blank.");
      return;
    }
    setError("");
    setEvents(prev => [
      ...prev,
      {
        id: Date.now().toString(),
        name: form.name.trim(),
        type: form.type,
        month, day, year,
        notes: form.notes.trim(),
      },
    ]);
    setForm({ name: "", type: "birthday", month: "", day: "", year: "", notes: "" });
  }

  function handleRemove(id: string) {
    setEvents(prev => prev.filter(e => e.id !== id));
  }

  const sorted = [...events].sort((a, b) => daysUntil(a.month, a.day) - daysUntil(b.month, b.day));
  const upcoming = sorted.filter(e => daysUntil(e.month, e.day) <= 30);

  return (
    <div className="min-h-screen bg-gray-50">
      <SEOHead
        title="Birthday & Anniversary Tracker | TekSure"
        description="Keep birthdays and anniversaries in one place. See countdowns to upcoming dates and never miss an important day."
      />

      <div className="max-w-2xl mx-auto px-4 py-8 print:p-4">
        <div className="mb-6">
          <div className="flex items-center gap-2 mb-1">
            <Cake className="h-7 w-7 text-pink-500" />
            <h1 className="text-3xl font-bold text-gray-900">Birthday &amp; Anniversary Tracker</h1>
          </div>
          <p className="text-gray-600 text-lg">
            Add the dates you want to remember, then see countdowns to the next ones coming up.
          </p>
        </div>

        {/* Add form */}
        <Card className="mb-6 print:hidden">
          <CardHeader>
            <CardTitle className="text-xl flex items-center gap-2">
              <PlusCircle className="h-5 w-5 text-pink-600" />
              Add a Date
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <Label htmlFor="name" className="text-base font-medium">Whose date is this?</Label>
              <Input
                id="name"
                placeholder="e.g. Sarah, Tom &amp; Anne"
                value={form.name}
                onChange={e => setForm(f => ({ ...f, name: e.target.value }))}
                className="mt-1 text-base"
              />
            </div>
            <div>
              <Label className="text-base font-medium">Type</Label>
              <div className="flex gap-2 mt-1">
                {(["birthday", "anniversary", "other"] as EventType[]).map(t => (
                  <button
                    key={t}
                    type="button"
                    onClick={() => setForm(f => ({ ...f, type: t }))}
                    className={`flex-1 px-3 py-2 rounded-md border text-sm font-medium ${
                      form.type === t ? "bg-pink-50 border-pink-400 text-pink-800" : "bg-white border-gray-200 text-gray-700 hover:bg-gray-50"
                    }`}
                  >
                    {TYPE_LABELS[t].emoji} {TYPE_LABELS[t].label}
                  </button>
                ))}
              </div>
            </div>
            <div className="grid grid-cols-3 gap-3">
              <div>
                <Label htmlFor="month" className="text-base font-medium">Month</Label>
                <select
                  id="month"
                  value={form.month}
                  onChange={e => setForm(f => ({ ...f, month: e.target.value }))}
                  className="mt-1 w-full border border-gray-300 rounded-md px-2 py-2 text-base bg-white"
                >
                  <option value="">--</option>
                  {MONTHS.map((m, i) => <option key={m} value={i + 1}>{m}</option>)}
                </select>
              </div>
              <div>
                <Label htmlFor="day" className="text-base font-medium">Day</Label>
                <Input
                  id="day"
                  type="number"
                  min="1"
                  max="31"
                  placeholder="15"
                  value={form.day}
                  onChange={e => setForm(f => ({ ...f, day: e.target.value }))}
                  className="mt-1 text-base"
                />
              </div>
              <div>
                <Label htmlFor="year" className="text-base font-medium">Year (optional)</Label>
                <Input
                  id="year"
                  type="number"
                  min="1900"
                  max="2030"
                  placeholder="1955"
                  value={form.year}
                  onChange={e => setForm(f => ({ ...f, year: e.target.value }))}
                  className="mt-1 text-base"
                />
              </div>
            </div>
            <div>
              <Label htmlFor="notes" className="text-base font-medium">Notes (optional)</Label>
              <Input
                id="notes"
                placeholder="e.g. Likes flowers and chocolate"
                value={form.notes}
                onChange={e => setForm(f => ({ ...f, notes: e.target.value }))}
                className="mt-1 text-base"
              />
            </div>
            {error && <p className="text-red-600 text-sm">{error}</p>}
            <Button onClick={handleAdd} size="lg" className="w-full sm:w-auto text-base">
              Add Date
            </Button>
          </CardContent>
        </Card>

        {/* Header summary + print */}
        {events.length > 0 && (
          <div className="mb-4 flex flex-wrap items-center justify-between gap-3">
            <div>
              <p className="text-sm text-gray-500">Tracking</p>
              <p className="text-2xl font-bold text-gray-800">{events.length} date{events.length !== 1 ? "s" : ""}</p>
              {upcoming.length > 0 && (
                <p className="text-sm text-pink-700 font-medium">
                  {upcoming.length} coming up in the next 30 days
                </p>
              )}
            </div>
            <Button variant="outline" onClick={() => window.print()} className="print:hidden gap-2">
              <Printer className="h-4 w-4" />
              Print List
            </Button>
          </div>
        )}

        {/* Print header */}
        <div className="hidden print:block mb-4 border-b pb-3">
          <p className="text-sm text-gray-600">TekSure Birthday &amp; Anniversary Tracker</p>
          <p className="text-sm text-gray-600">Printed: {new Date().toLocaleDateString("en-US")}</p>
        </div>

        {/* List */}
        {sorted.length === 0 ? (
          <Card className="print:hidden">
            <CardContent className="py-10 text-center text-gray-500">
              <Calendar className="h-10 w-10 text-gray-300 mx-auto mb-2" />
              <p className="text-lg">No dates added yet.</p>
              <p className="text-sm mt-1">Add your first birthday or anniversary above.</p>
            </CardContent>
          </Card>
        ) : (
          <div className="space-y-3">
            {sorted.map(e => {
              const days = daysUntil(e.month, e.day);
              const age = ageOnNext(e.year, e.month, e.day);
              const isUpcoming = days <= 30;
              const isToday = days === 0;
              return (
                <Card key={e.id} className={isToday ? "border-2 border-pink-400 bg-pink-50" : isUpcoming ? "border-pink-200" : ""}>
                  <CardContent className="py-3 px-4">
                    <div className="flex items-start justify-between gap-2">
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-2 flex-wrap">
                          <span className="text-2xl" aria-hidden>{TYPE_LABELS[e.type].emoji}</span>
                          <span className="font-semibold text-gray-900 text-base">{e.name}</span>
                          <Badge variant="secondary" className={`text-xs ${TYPE_LABELS[e.type].color}`}>
                            {TYPE_LABELS[e.type].label}
                          </Badge>
                        </div>
                        <div className="flex flex-wrap gap-2 mt-1 items-center">
                          <span className="text-sm text-gray-700 font-medium">
                            {MONTHS[e.month - 1]} {e.day}
                          </span>
                          {age !== null && e.type === "birthday" && (
                            <span className="text-sm text-gray-500">turning {age}</span>
                          )}
                          {age !== null && e.type === "anniversary" && (
                            <span className="text-sm text-gray-500">{age} years</span>
                          )}
                        </div>
                        <p className={`text-sm mt-1 font-medium ${isToday ? "text-pink-700" : isUpcoming ? "text-pink-600" : "text-gray-500"}`}>
                          {isToday ? "🎉 Today!" : days === 1 ? "Tomorrow" : `In ${days} days`}
                        </p>
                        {e.notes && <p className="text-sm text-gray-500 italic mt-1">{e.notes}</p>}
                      </div>
                      <Button
                        variant="ghost"
                        size="icon"
                        className="shrink-0 text-red-400 hover:text-red-600 print:hidden"
                        onClick={() => handleRemove(e.id)}
                        aria-label="Remove date"
                      >
                        <Trash2 className="h-4 w-4" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        )}

        {/* Tip */}
        {events.length > 0 && (
          <Card className="mt-6 bg-blue-50 border-blue-200 print:hidden">
            <CardContent className="py-3 px-4">
              <p className="text-sm text-blue-800 flex items-start gap-2">
                <Heart className="h-4 w-4 mt-0.5 shrink-0" />
                <span>
                  <span className="font-semibold">Quick Tip: </span>
                  Add the same dates to your phone calendar with a yearly repeat. That way you will get a reminder automatically each year.
                </span>
              </p>
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  );
}

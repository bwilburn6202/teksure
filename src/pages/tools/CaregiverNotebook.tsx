import { useState } from "react";
import SEOHead from "@/components/SEOHead";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Notebook, Trash2, Printer, PlusCircle } from "lucide-react";

interface Entry {
  id: string;
  date: string;
  time: string;
  mood: string;
  eating: string;
  mobility: string;
  medications: string;
  observations: string;
  concerns: string;
}

const MOOD_OPTIONS = ["Happy / engaged", "Calm / steady", "Tired / withdrawn", "Confused", "Agitated / upset", "Other"];
const EATING_OPTIONS = ["Ate well", "Ate some", "Skipped meal", "Refused food", "Other"];
const MOBILITY_OPTIONS = ["Steady on feet", "Used walker / cane", "Needed help to stand", "Stayed in bed / chair", "Other"];

export default function CaregiverNotebook() {
  const [careForName, setCareForName] = useState("");
  const [entries, setEntries] = useState<Entry[]>([]);
  const [form, setForm] = useState({
    date: new Date().toISOString().slice(0, 10),
    time: new Date().toTimeString().slice(0, 5),
    mood: "Calm / steady",
    eating: "Ate some",
    mobility: "Steady on feet",
    medications: "",
    observations: "",
    concerns: "",
  });
  const [error, setError] = useState("");

  function add() {
    if (!form.date || !form.time) { setError("Please pick a date and time."); return; }
    setError("");
    setEntries(prev => [...prev, { id: Date.now().toString() + Math.random(), ...form }]);
    setForm(f => ({ ...f, observations: "", concerns: "", medications: "" }));
  }

  function remove(id: string) {
    setEntries(prev => prev.filter(e => e.id !== id));
  }

  function formatDate(s: string) {
    const [y, m, d] = s.split("-");
    return `${m}/${d}/${y}`;
  }

  function formatTime(t: string) {
    const [h, m] = t.split(":");
    const hh = parseInt(h, 10);
    const period = hh >= 12 ? "PM" : "AM";
    const hour12 = hh === 0 ? 12 : hh > 12 ? hh - 12 : hh;
    return `${hour12}:${m} ${period}`;
  }

  function moodColor(m: string) {
    if (m.includes("Happy") || m.includes("Calm")) return "bg-green-100 text-green-700";
    if (m.includes("Tired") || m.includes("Confused")) return "bg-amber-100 text-amber-700";
    if (m.includes("Agitated")) return "bg-red-100 text-red-700";
    return "bg-gray-100 text-gray-700";
  }

  const sorted = [...entries].sort((a, b) => `${b.date} ${b.time}`.localeCompare(`${a.date} ${a.time}`));
  const concerns = entries.filter(e => e.concerns.trim()).length;

  return (
    <div className="min-h-screen bg-gray-50">
      <SEOHead
        title="Caregiver Notebook | TekSure"
        description="Record daily observations as a caregiver — mood, meals, mobility, medications, and concerns. Print to share with family or doctors."
      />

      <div className="max-w-2xl mx-auto px-4 py-8 print:p-4">
        <div className="mb-6">
          <div className="flex items-center gap-2 mb-1">
            <Notebook className="h-7 w-7 text-purple-600" />
            <h1 className="text-3xl font-bold text-gray-900">Caregiver Notebook</h1>
          </div>
          <p className="text-gray-600 text-lg">
            Track daily observations for someone you care for. Patterns help doctors and family see what is happening between visits.
          </p>
        </div>

        {/* Care-for name */}
        <Card className="mb-4 print:shadow-none">
          <CardContent className="py-3 px-4 flex flex-wrap gap-3 items-center">
            <Label htmlFor="care-name" className="text-base font-medium shrink-0">Caring for:</Label>
            <Input id="care-name" placeholder="Mom" value={careForName} onChange={e => setCareForName(e.target.value)} className="text-base flex-1" />
          </CardContent>
        </Card>

        {/* Stats */}
        {entries.length > 0 && (
          <div className="grid grid-cols-2 gap-3 mb-4">
            <Card>
              <CardContent className="py-3 px-3 text-center">
                <p className="text-xs text-gray-500">Entries</p>
                <p className="text-xl font-bold text-purple-700">{entries.length}</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="py-3 px-3 text-center">
                <p className="text-xs text-gray-500">Days with concerns noted</p>
                <p className="text-xl font-bold text-amber-700">{concerns}</p>
              </CardContent>
            </Card>
          </div>
        )}

        {/* Add form */}
        <Card className="mb-6 print:hidden">
          <CardHeader>
            <CardTitle className="text-xl flex items-center gap-2">
              <PlusCircle className="h-5 w-5 text-purple-600" />
              New Entry
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <div className="grid grid-cols-2 gap-3">
              <div>
                <Label htmlFor="entry-date" className="text-base font-medium">Date</Label>
                <Input id="entry-date" type="date" value={form.date} onChange={e => setForm(f => ({ ...f, date: e.target.value }))} className="mt-1 text-base" />
              </div>
              <div>
                <Label htmlFor="entry-time" className="text-base font-medium">Time</Label>
                <Input id="entry-time" type="time" value={form.time} onChange={e => setForm(f => ({ ...f, time: e.target.value }))} className="mt-1 text-base" />
              </div>
            </div>
            <div>
              <Label className="text-base font-medium">Mood</Label>
              <select value={form.mood} onChange={e => setForm(f => ({ ...f, mood: e.target.value }))} className="mt-1 w-full border border-gray-300 rounded-md px-3 py-2 text-base bg-white">
                {MOOD_OPTIONS.map(m => <option key={m}>{m}</option>)}
              </select>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <Label className="text-base font-medium">Eating</Label>
                <select value={form.eating} onChange={e => setForm(f => ({ ...f, eating: e.target.value }))} className="mt-1 w-full border border-gray-300 rounded-md px-3 py-2 text-base bg-white">
                  {EATING_OPTIONS.map(o => <option key={o}>{o}</option>)}
                </select>
              </div>
              <div>
                <Label className="text-base font-medium">Mobility</Label>
                <select value={form.mobility} onChange={e => setForm(f => ({ ...f, mobility: e.target.value }))} className="mt-1 w-full border border-gray-300 rounded-md px-3 py-2 text-base bg-white">
                  {MOBILITY_OPTIONS.map(o => <option key={o}>{o}</option>)}
                </select>
              </div>
            </div>
            <div>
              <Label htmlFor="meds" className="text-base font-medium">Medications taken (optional)</Label>
              <Input id="meds" placeholder="e.g. Morning meds at 8am, blood pressure 130/80" value={form.medications} onChange={e => setForm(f => ({ ...f, medications: e.target.value }))} className="mt-1 text-base" />
            </div>
            <div>
              <Label htmlFor="obs" className="text-base font-medium">Observations</Label>
              <textarea id="obs" rows={3} placeholder="What stood out today? Sleep, conversations, activities, energy..." value={form.observations} onChange={e => setForm(f => ({ ...f, observations: e.target.value }))} className="mt-1 w-full border border-gray-300 rounded-md px-3 py-2 text-base bg-white" />
            </div>
            <div>
              <Label htmlFor="concerns" className="text-base font-medium">Concerns (optional)</Label>
              <Input id="concerns" placeholder="e.g. Forgetting words, weight loss, balance" value={form.concerns} onChange={e => setForm(f => ({ ...f, concerns: e.target.value }))} className="mt-1 text-base" />
            </div>
            {error && <p className="text-red-600 text-sm">{error}</p>}
            <Button onClick={add} size="lg" className="w-full sm:w-auto text-base">Save Entry</Button>
          </CardContent>
        </Card>

        {entries.length > 0 && (
          <div className="mb-3 flex flex-wrap items-center justify-between gap-3 print:hidden">
            <p className="text-sm text-gray-500">{entries.length} entr{entries.length !== 1 ? "ies" : "y"}</p>
            <Button variant="outline" onClick={() => window.print()} className="gap-2">
              <Printer className="h-4 w-4" />
              Print Notebook
            </Button>
          </div>
        )}

        {/* Print header */}
        <div className="hidden print:block mb-3 border-b pb-2">
          <h2 className="text-xl font-bold">Caregiver Notebook{careForName && ` — ${careForName}`}</h2>
          <p className="text-xs text-gray-500">Printed {new Date().toLocaleDateString("en-US")}</p>
        </div>

        {/* Entries */}
        {sorted.length === 0 ? (
          <Card className="print:hidden">
            <CardContent className="py-10 text-center text-gray-500">
              <Notebook className="h-10 w-10 text-gray-300 mx-auto mb-2" />
              <p className="text-lg">No entries yet.</p>
              <p className="text-sm mt-1">Make your first entry to start the log.</p>
            </CardContent>
          </Card>
        ) : (
          <div className="space-y-3">
            {sorted.map(e => (
              <Card key={e.id} className="print:break-inside-avoid">
                <CardContent className="py-3 px-4">
                  <div className="flex items-start justify-between gap-2">
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 flex-wrap">
                        <span className="text-sm font-semibold text-gray-700">{formatDate(e.date)} · {formatTime(e.time)}</span>
                        <Badge variant="secondary" className={`text-xs ${moodColor(e.mood)}`}>{e.mood}</Badge>
                      </div>
                      <div className="text-xs text-gray-600 mt-1">
                        <span className="font-semibold">Eating:</span> {e.eating} · <span className="font-semibold">Mobility:</span> {e.mobility}
                      </div>
                      {e.medications && (
                        <p className="text-xs text-gray-600 mt-1"><span className="font-semibold">Meds:</span> {e.medications}</p>
                      )}
                      {e.observations && (
                        <p className="text-sm text-gray-700 mt-1">{e.observations}</p>
                      )}
                      {e.concerns && (
                        <p className="text-sm text-amber-700 mt-1"><span className="font-semibold">⚠ Concerns:</span> {e.concerns}</p>
                      )}
                    </div>
                    <Button
                      variant="ghost"
                      size="icon"
                      className="h-7 w-7 text-red-400 hover:text-red-600 print:hidden"
                      onClick={() => remove(e.id)}
                      aria-label="Remove entry"
                    >
                      <Trash2 className="h-3 w-3" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        )}

        <Card className="mt-6 bg-blue-50 border-blue-200 print:hidden">
          <CardContent className="py-3 px-4">
            <p className="text-sm text-blue-800">
              <span className="font-semibold">Quick Tip: </span>
              Set a daily reminder on your phone to spend 60 seconds on an entry. It adds up to a clear picture for the doctor and family.
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

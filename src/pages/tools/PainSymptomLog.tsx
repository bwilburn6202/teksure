import { useState } from "react";
import SEOHead from "@/components/SEOHead";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { HeartPulse, Trash2, Printer, PlusCircle } from "lucide-react";

interface PainEntry {
  id: string;
  date: string;
  time: string;
  location: string;
  level: number; // 0-10
  type: string;
  trigger: string;
  helped: string;
}

const LOCATIONS = ["Head", "Neck", "Shoulder", "Back (upper)", "Back (lower)", "Chest", "Arm", "Hip", "Knee", "Foot", "Stomach", "Other"];
const TYPES = ["Sharp", "Dull", "Throbbing", "Burning", "Aching", "Stabbing", "Cramping", "Tingling", "Other"];

export default function PainSymptomLog() {
  const [entries, setEntries] = useState<PainEntry[]>([]);
  const [form, setForm] = useState({
    date: new Date().toISOString().slice(0, 10),
    time: new Date().toTimeString().slice(0, 5),
    location: "Back (lower)",
    level: 5,
    type: "Aching",
    trigger: "",
    helped: "",
  });
  const [error, setError] = useState("");

  function add() {
    if (!form.date || !form.time) { setError("Please pick a date and time."); return; }
    setError("");
    setEntries(prev => [...prev, { id: Date.now().toString() + Math.random(), ...form }]);
    setForm(f => ({ ...f, trigger: "", helped: "" }));
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

  function levelColor(n: number) {
    if (n <= 3) return "bg-green-100 text-green-700";
    if (n <= 6) return "bg-amber-100 text-amber-700";
    return "bg-red-100 text-red-700";
  }

  const sorted = [...entries].sort((a, b) => `${b.date} ${b.time}`.localeCompare(`${a.date} ${a.time}`));
  const avgLast7 = (() => {
    const cutoff = new Date();
    cutoff.setDate(cutoff.getDate() - 7);
    const cutoffStr = cutoff.toISOString().slice(0, 10);
    const recent = entries.filter(e => e.date >= cutoffStr);
    if (recent.length === 0) return 0;
    return recent.reduce((s, e) => s + e.level, 0) / recent.length;
  })();

  return (
    <div className="min-h-screen bg-gray-50">
      <SEOHead
        title="Pain & Symptom Log | TekSure"
        description="Track pain or symptoms with location, level, type, triggers, and what helped. Print for your next doctor visit."
      />

      <div className="max-w-2xl mx-auto px-4 py-8 print:p-4">
        <div className="mb-6">
          <div className="flex items-center gap-2 mb-1">
            <HeartPulse className="h-7 w-7 text-rose-600" />
            <h1 className="text-3xl font-bold text-gray-900">Pain &amp; Symptom Log</h1>
          </div>
          <p className="text-gray-600 text-lg">
            Note pain or symptoms when they happen. Patterns will help your doctor figure out what is going on.
          </p>
        </div>

        {/* Stats */}
        {entries.length > 0 && (
          <div className="grid grid-cols-2 gap-3 mb-4">
            <Card>
              <CardContent className="py-3 px-3 text-center">
                <p className="text-xs text-gray-500">Entries logged</p>
                <p className="text-xl font-bold text-rose-700">{entries.length}</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="py-3 px-3 text-center">
                <p className="text-xs text-gray-500">Avg level (last 7 days)</p>
                <p className="text-xl font-bold text-rose-700">{avgLast7 > 0 ? avgLast7.toFixed(1) : "—"} / 10</p>
              </CardContent>
            </Card>
          </div>
        )}

        {/* Add form */}
        <Card className="mb-6 print:hidden">
          <CardHeader>
            <CardTitle className="text-xl flex items-center gap-2">
              <PlusCircle className="h-5 w-5 text-rose-600" />
              Log Pain or Symptom
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <div className="grid grid-cols-2 gap-3">
              <div>
                <Label htmlFor="pain-date" className="text-base font-medium">Date</Label>
                <Input id="pain-date" type="date" value={form.date} onChange={e => setForm(f => ({ ...f, date: e.target.value }))} className="mt-1 text-base" />
              </div>
              <div>
                <Label htmlFor="pain-time" className="text-base font-medium">Time</Label>
                <Input id="pain-time" type="time" value={form.time} onChange={e => setForm(f => ({ ...f, time: e.target.value }))} className="mt-1 text-base" />
              </div>
            </div>
            <div>
              <Label htmlFor="pain-location" className="text-base font-medium">Where?</Label>
              <select id="pain-location" value={form.location} onChange={e => setForm(f => ({ ...f, location: e.target.value }))} className="mt-1 w-full border border-gray-300 rounded-md px-3 py-2 text-base bg-white">
                {LOCATIONS.map(l => <option key={l}>{l}</option>)}
              </select>
            </div>
            <div>
              <Label className="text-base font-medium">Pain level: <span className="font-bold text-rose-700">{form.level}</span> / 10</Label>
              <input
                type="range"
                min="0"
                max="10"
                value={form.level}
                onChange={e => setForm(f => ({ ...f, level: parseInt(e.target.value, 10) }))}
                className="w-full mt-1"
              />
              <div className="flex justify-between text-xs text-gray-500">
                <span>0 = none</span>
                <span>5 = moderate</span>
                <span>10 = worst</span>
              </div>
            </div>
            <div>
              <Label htmlFor="pain-type" className="text-base font-medium">Type</Label>
              <select id="pain-type" value={form.type} onChange={e => setForm(f => ({ ...f, type: e.target.value }))} className="mt-1 w-full border border-gray-300 rounded-md px-3 py-2 text-base bg-white">
                {TYPES.map(t => <option key={t}>{t}</option>)}
              </select>
            </div>
            <div>
              <Label htmlFor="trigger" className="text-base font-medium">What might have triggered it? (optional)</Label>
              <Input id="trigger" placeholder="e.g. Bending over, after lunch, stress" value={form.trigger} onChange={e => setForm(f => ({ ...f, trigger: e.target.value }))} className="mt-1 text-base" />
            </div>
            <div>
              <Label htmlFor="helped" className="text-base font-medium">What helped? (optional)</Label>
              <Input id="helped" placeholder="e.g. Tylenol, rest, heating pad" value={form.helped} onChange={e => setForm(f => ({ ...f, helped: e.target.value }))} className="mt-1 text-base" />
            </div>
            {error && <p className="text-red-600 text-sm">{error}</p>}
            <Button onClick={add} size="lg" className="w-full sm:w-auto text-base">Log Entry</Button>
          </CardContent>
        </Card>

        {entries.length > 0 && (
          <div className="mb-3 flex flex-wrap items-center justify-between gap-3 print:hidden">
            <p className="text-sm text-gray-500">{entries.length} entr{entries.length !== 1 ? "ies" : "y"}</p>
            <Button variant="outline" onClick={() => window.print()} className="gap-2">
              <Printer className="h-4 w-4" />
              Print for Doctor
            </Button>
          </div>
        )}

        {sorted.length === 0 ? (
          <Card className="print:hidden">
            <CardContent className="py-10 text-center text-gray-500">
              <HeartPulse className="h-10 w-10 text-gray-300 mx-auto mb-2" />
              <p className="text-lg">No entries yet.</p>
              <p className="text-sm mt-1">Log pain or a symptom when it happens — patterns are easier to spot from notes than from memory.</p>
            </CardContent>
          </Card>
        ) : (
          <Card>
            <CardHeader className="pb-2 pt-3">
              <CardTitle className="text-lg">Log (newest first)</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="divide-y">
                {sorted.map(e => (
                  <div key={e.id} className="py-2 flex items-start justify-between gap-2 print:break-inside-avoid">
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 flex-wrap">
                        <Badge variant="secondary" className={`text-xs ${levelColor(e.level)}`}>
                          {e.level}/10
                        </Badge>
                        <span className="font-medium text-gray-900">{e.location}</span>
                        <span className="text-xs text-gray-500">{e.type}</span>
                      </div>
                      <p className="text-xs text-gray-500 mt-0.5">
                        {formatDate(e.date)} at {formatTime(e.time)}
                      </p>
                      {(e.trigger || e.helped) && (
                        <div className="text-xs text-gray-600 mt-1">
                          {e.trigger && <span><span className="font-semibold">Trigger:</span> {e.trigger}</span>}
                          {e.trigger && e.helped && <span> · </span>}
                          {e.helped && <span><span className="font-semibold">Helped:</span> {e.helped}</span>}
                        </div>
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
                ))}
              </div>
            </CardContent>
          </Card>
        )}

        <Card className="mt-6 bg-blue-50 border-blue-200 print:hidden">
          <CardContent className="py-3 px-4">
            <p className="text-sm text-blue-800">
              <span className="font-semibold">Quick Tip: </span>
              Bring this log to your next doctor visit — they will spot patterns from a clear log that you might miss day to day.
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

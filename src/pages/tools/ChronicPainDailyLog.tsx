import { useState } from "react";
import SEOHead from "@/components/SEOHead";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Activity, Trash2, Printer, PlusCircle } from "lucide-react";

type Severity = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10;
type Location = "Lower back" | "Neck" | "Shoulder" | "Hip" | "Knee" | "Foot" | "Head" | "Abdomen" | "Other";

interface Entry {
  id: string;
  date: string;
  time: string;
  severity: Severity;
  locations: Location[];
  whatHelped: string;
  whatHurt: string;
  note: string;
}

const LOCATIONS: Location[] = ["Lower back", "Neck", "Shoulder", "Hip", "Knee", "Foot", "Head", "Abdomen", "Other"];

function severityTone(s: Severity): string {
  if (s <= 3) return "bg-emerald-50 text-emerald-700 border-emerald-200";
  if (s <= 5) return "bg-yellow-50 text-yellow-700 border-yellow-200";
  if (s <= 7) return "bg-orange-50 text-orange-700 border-orange-200";
  return "bg-red-50 text-red-700 border-red-200";
}

export default function ChronicPainDailyLog() {
  const [entries, setEntries] = useState<Entry[]>([]);
  const now = new Date();
  const [form, setForm] = useState({
    date: now.toISOString().slice(0, 10),
    time: now.toTimeString().slice(0, 5),
    severity: 5 as Severity,
    locations: [] as Location[],
    whatHelped: "",
    whatHurt: "",
    note: "",
  });

  function toggleLocation(loc: Location) {
    setForm(f => ({
      ...f,
      locations: f.locations.includes(loc) ? f.locations.filter(l => l !== loc) : [...f.locations, loc],
    }));
  }

  function add() {
    setEntries(prev => [...prev, {
      id: Date.now().toString() + Math.random(),
      date: form.date,
      time: form.time,
      severity: form.severity,
      locations: [...form.locations],
      whatHelped: form.whatHelped.trim(),
      whatHurt: form.whatHurt.trim(),
      note: form.note.trim(),
    }]);
    setForm(f => ({ ...f, locations: [], whatHelped: "", whatHurt: "", note: "" }));
  }

  function remove(id: string) {
    setEntries(prev => prev.filter(e => e.id !== id));
  }

  const cutoff = new Date();
  cutoff.setDate(cutoff.getDate() - 14);
  const cutoffStr = cutoff.toISOString().slice(0, 10);
  const recent = entries.filter(e => e.date >= cutoffStr);
  const avgSeverity = recent.length ? (recent.reduce((s, e) => s + e.severity, 0) / recent.length) : 0;

  const locationCounts: Record<string, number> = {};
  recent.forEach(e => e.locations.forEach(l => { locationCounts[l] = (locationCounts[l] || 0) + 1; }));
  const topLocations = Object.entries(locationCounts).sort((a, b) => b[1] - a[1]).slice(0, 3);

  return (
    <div className="min-h-screen bg-gray-50">
      <SEOHead title="Chronic Pain Daily Log | TekSure" description="Track pain severity, location, and what helped or hurt. See your 14-day pattern. Bring the print to your doctor for a more useful conversation than 'it just hurts a lot'." />
      <div className="max-w-2xl mx-auto px-4 py-8 print:p-4">
        <div className="mb-6">
          <div className="flex items-center gap-2 mb-1">
            <Activity className="h-7 w-7 text-red-700" />
            <h1 className="text-3xl font-bold text-gray-900">Chronic Pain Log</h1>
          </div>
          <p className="text-gray-600 text-lg">One entry a day. After 2 weeks, you have an honest picture of your pain and what helps. Bring the print to your doctor.</p>
        </div>

        {recent.length > 0 && (
          <Card className="mb-4 bg-red-50 border-red-200">
            <CardContent className="py-3 px-4 text-center">
              <p className="text-xs text-gray-600">14-day average pain ({recent.length} entries)</p>
              <p className="text-3xl font-bold text-red-700">{avgSeverity.toFixed(1)} / 10</p>
            </CardContent>
          </Card>
        )}

        {topLocations.length > 0 && (
          <Card className="mb-4 bg-amber-50 border-amber-200">
            <CardHeader className="pb-1 pt-3"><CardTitle className="text-base text-amber-900">Pain locations (last 14 days)</CardTitle></CardHeader>
            <CardContent className="pb-3">
              <div className="flex flex-wrap gap-2">
                {topLocations.map(([l, n]) => (
                  <Badge key={l} variant="outline" className="text-sm bg-white border-amber-300 text-amber-900">{l} - {n}x</Badge>
                ))}
              </div>
            </CardContent>
          </Card>
        )}

        <Card className="mb-4 print:hidden">
          <CardHeader className="pb-2 pt-3"><CardTitle className="text-lg flex items-center gap-2"><PlusCircle className="h-5 w-5 text-red-700" />Log today</CardTitle></CardHeader>
          <CardContent className="space-y-2">
            <div className="grid grid-cols-2 gap-2">
              <Input type="date" value={form.date} onChange={e => setForm(f => ({ ...f, date: e.target.value }))} />
              <Input type="time" value={form.time} onChange={e => setForm(f => ({ ...f, time: e.target.value }))} />
            </div>
            <div>
              <label className="text-sm font-medium text-gray-700">Pain today (1 = barely there, 10 = worst imaginable)</label>
              <div className="flex flex-wrap gap-1 mt-1">
                {([1, 2, 3, 4, 5, 6, 7, 8, 9, 10] as Severity[]).map(s => (
                  <Button key={s} type="button" size="sm" variant={form.severity === s ? "default" : "outline"} onClick={() => setForm(f => ({ ...f, severity: s }))} className="w-10">
                    {s}
                  </Button>
                ))}
              </div>
            </div>
            <div>
              <label className="text-sm font-medium text-gray-700">Where (tap all that apply)</label>
              <div className="flex flex-wrap gap-1 mt-1">
                {LOCATIONS.map(l => (
                  <Button key={l} type="button" size="sm" variant={form.locations.includes(l) ? "default" : "outline"} onClick={() => toggleLocation(l)}>
                    {l}
                  </Button>
                ))}
              </div>
            </div>
            <Input placeholder="What helped today (heat pad, walk, meds, rest)" value={form.whatHelped} onChange={e => setForm(f => ({ ...f, whatHelped: e.target.value }))} />
            <Input placeholder="What made it worse (lifting, weather, sitting too long)" value={form.whatHurt} onChange={e => setForm(f => ({ ...f, whatHurt: e.target.value }))} />
            <Input placeholder="Note (optional)" value={form.note} onChange={e => setForm(f => ({ ...f, note: e.target.value }))} />
            <Button onClick={add} className="bg-red-700 hover:bg-red-800">Save entry</Button>
          </CardContent>
        </Card>

        {entries.length > 0 && (
          <Card>
            <CardHeader className="pb-2 pt-3">
              <CardTitle className="text-base flex items-center justify-between">
                <span>All entries ({entries.length})</span>
                <Button variant="outline" size="sm" onClick={() => window.print()} className="gap-1 print:hidden">
                  <Printer className="h-3 w-3" />Print for Doctor
                </Button>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="divide-y">
                {[...entries].reverse().map(e => (
                  <div key={e.id} className="py-2 text-sm">
                    <div className="flex items-center justify-between gap-2">
                      <div className="flex items-center gap-2 flex-wrap">
                        <span className="text-gray-500 text-xs">{e.date} {e.time}</span>
                        <Badge variant="outline" className={`text-xs ${severityTone(e.severity)}`}>Pain {e.severity}/10</Badge>
                      </div>
                      <Button variant="ghost" size="icon" onClick={() => remove(e.id)} className="h-6 w-6 text-red-400 hover:text-red-600 print:hidden">
                        <Trash2 className="h-3 w-3" />
                      </Button>
                    </div>
                    {e.locations.length > 0 && (
                      <div className="mt-1 flex flex-wrap gap-1">
                        {e.locations.map(l => <Badge key={l} variant="secondary" className="text-xs">{l}</Badge>)}
                      </div>
                    )}
                    {e.whatHelped && <p className="text-xs text-emerald-700 mt-0.5"><span className="font-semibold">Helped:</span> {e.whatHelped}</p>}
                    {e.whatHurt && <p className="text-xs text-red-700"><span className="font-semibold">Worse:</span> {e.whatHurt}</p>}
                    {e.note && <p className="text-xs text-gray-500 italic mt-0.5">{e.note}</p>}
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  );
}

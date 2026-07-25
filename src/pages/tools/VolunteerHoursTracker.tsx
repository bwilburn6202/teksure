import { useState } from "react";
import SEOHead from "@/components/SEOHead";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { HandHeart, Trash2, Printer, PlusCircle } from "lucide-react";

interface Entry {
  id: string;
  date: string;
  organization: string;
  hours: number;
  activity: string;
  notes: string;
}

export default function VolunteerHoursTracker() {
  const [entries, setEntries] = useState<Entry[]>([]);
  const [form, setForm] = useState({
    date: new Date().toISOString().slice(0, 10),
    organization: "",
    hours: "",
    activity: "",
    notes: "",
  });
  const [error, setError] = useState("");

  function add() {
    if (!form.organization.trim()) { setError("Please enter the organization name."); return; }
    const h = parseFloat(form.hours);
    if (!h || h <= 0 || h > 24) { setError("Please enter valid hours (0.5 to 24)."); return; }
    setError("");
    setEntries(prev => [
      ...prev,
      { id: Date.now().toString() + Math.random(), date: form.date, organization: form.organization.trim(), hours: parseFloat(h.toFixed(1)), activity: form.activity.trim(), notes: form.notes.trim() },
    ]);
    setForm(f => ({ ...f, hours: "", activity: "", notes: "" }));
  }

  function remove(id: string) {
    setEntries(prev => prev.filter(e => e.id !== id));
  }

  function formatDate(s: string) {
    const [y, m, d] = s.split("-");
    return `${m}/${d}/${y}`;
  }

  // By organization totals
  const byOrg = entries.reduce<Record<string, number>>((acc, e) => {
    acc[e.organization] = (acc[e.organization] || 0) + e.hours;
    return acc;
  }, {});

  // This year totals
  const thisYear = new Date().getFullYear();
  const ytdHours = entries.filter(e => parseInt(e.date.split("-")[0], 10) === thisYear).reduce((s, e) => s + e.hours, 0);
  const totalHours = entries.reduce((s, e) => s + e.hours, 0);

  // This month
  const today = new Date();
  const thisMonth = `${today.getFullYear()}-${String(today.getMonth() + 1).padStart(2, "0")}`;
  const monthHours = entries.filter(e => e.date.startsWith(thisMonth)).reduce((s, e) => s + e.hours, 0);

  const sorted = [...entries].sort((a, b) => b.date.localeCompare(a.date));

  return (
    <div className="min-h-screen bg-gray-50">
      <SEOHead
        title="Volunteer Hours Tracker | TekSure"
        description="Log volunteer hours by organization. See month, year-to-date, and lifetime totals. Print for tax records or service awards."
      />

      <div className="max-w-2xl mx-auto px-4 py-8 print:p-4">
        <div className="mb-6">
          <div className="flex items-center gap-2 mb-1">
            <HandHeart className="h-7 w-7 text-rose-600" />
            <h1 className="text-3xl font-bold text-gray-900">Volunteer Hours Tracker</h1>
          </div>
          <p className="text-gray-600 text-lg">
            Log every volunteer shift. The total adds up to a record you can show for tax mileage or community service awards.
          </p>
        </div>

        {/* Stats */}
        {entries.length > 0 && (
          <div className="grid grid-cols-3 gap-3 mb-4">
            <Card>
              <CardContent className="py-3 px-3 text-center">
                <p className="text-xs text-gray-500">This month</p>
                <p className="text-xl font-bold text-rose-700">{monthHours.toFixed(1)} hrs</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="py-3 px-3 text-center">
                <p className="text-xs text-gray-500">{thisYear}</p>
                <p className="text-xl font-bold text-rose-700">{ytdHours.toFixed(1)} hrs</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="py-3 px-3 text-center">
                <p className="text-xs text-gray-500">Lifetime</p>
                <p className="text-xl font-bold text-gray-700">{totalHours.toFixed(1)} hrs</p>
              </CardContent>
            </Card>
          </div>
        )}

        {/* By organization */}
        {Object.keys(byOrg).length > 1 && (
          <Card className="mb-4 print:break-inside-avoid">
            <CardHeader className="pb-2 pt-3">
              <CardTitle className="text-base">Hours by Organization</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-1">
                {Object.entries(byOrg).sort((a, b) => b[1] - a[1]).map(([org, hours]) => (
                  <div key={org} className="flex items-center justify-between py-1 text-sm">
                    <span className="font-medium text-gray-800 truncate">{org}</span>
                    <Badge variant="secondary" className="text-xs">{hours.toFixed(1)} hrs</Badge>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        )}

        {/* Add form */}
        <Card className="mb-6 print:hidden">
          <CardHeader>
            <CardTitle className="text-xl flex items-center gap-2">
              <PlusCircle className="h-5 w-5 text-rose-600" />
              Log Volunteer Time
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <div className="grid grid-cols-2 gap-3">
              <div>
                <Label htmlFor="vol-date" className="text-base font-medium">Date</Label>
                <Input id="vol-date" type="date" value={form.date} onChange={e => setForm(f => ({ ...f, date: e.target.value }))} className="mt-1 text-base" />
              </div>
              <div>
                <Label htmlFor="vol-hours" className="text-base font-medium">Hours</Label>
                <Input id="vol-hours" type="number" min="0.25" max="24" step="0.25" placeholder="2.5" value={form.hours} onChange={e => setForm(f => ({ ...f, hours: e.target.value }))} className="mt-1 text-base" />
              </div>
            </div>
            <div>
              <Label htmlFor="vol-org" className="text-base font-medium">Organization</Label>
              <Input id="vol-org" placeholder="e.g. Local food bank, Library, Meals on Wheels" value={form.organization} onChange={e => setForm(f => ({ ...f, organization: e.target.value }))} className="mt-1 text-base" />
            </div>
            <div>
              <Label htmlFor="vol-activity" className="text-base font-medium">Activity (optional)</Label>
              <Input id="vol-activity" placeholder="e.g. Sorted donations, drove route, tutored" value={form.activity} onChange={e => setForm(f => ({ ...f, activity: e.target.value }))} className="mt-1 text-base" />
            </div>
            <div>
              <Label htmlFor="vol-notes" className="text-base font-medium">Notes (optional)</Label>
              <Input id="vol-notes" placeholder="e.g. With Linda, Saturday shift" value={form.notes} onChange={e => setForm(f => ({ ...f, notes: e.target.value }))} className="mt-1 text-base" />
            </div>
            {error && <p className="text-red-600 text-sm">{error}</p>}
            <Button onClick={add} size="lg" className="w-full sm:w-auto text-base">Log Hours</Button>
          </CardContent>
        </Card>

        {entries.length > 0 && (
          <div className="mb-3 flex items-center justify-end print:hidden">
            <Button variant="outline" onClick={() => window.print()} className="gap-2">
              <Printer className="h-4 w-4" />
              Print Records
            </Button>
          </div>
        )}

        {sorted.length === 0 ? (
          <Card className="print:hidden">
            <CardContent className="py-10 text-center text-gray-500">
              <HandHeart className="h-10 w-10 text-gray-300 mx-auto mb-2" />
              <p className="text-lg">No volunteer hours logged yet.</p>
              <p className="text-sm mt-1">Add your most recent shift above.</p>
            </CardContent>
          </Card>
        ) : (
          <Card>
            <CardHeader className="pb-2 pt-3">
              <CardTitle className="text-lg">Volunteer Log (newest first)</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="divide-y">
                {sorted.map(e => (
                  <div key={e.id} className="py-2 flex items-start justify-between gap-2 print:break-inside-avoid">
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 flex-wrap">
                        <span className="text-sm font-medium text-gray-700 w-20">{formatDate(e.date)}</span>
                        <Badge variant="secondary" className="text-xs">{e.hours.toFixed(1)} hrs</Badge>
                        <span className="font-medium text-gray-900 truncate">{e.organization}</span>
                      </div>
                      {e.activity && <p className="text-xs text-gray-600 mt-1 ml-20">{e.activity}</p>}
                      {e.notes && <p className="text-xs text-gray-500 italic ml-20">{e.notes}</p>}
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
              <span className="font-semibold">Tax Tip: </span>
              Volunteer time is not deductible, but mileage to and from volunteer sites may be — track miles separately. Keep this log as supporting documentation if asked.
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

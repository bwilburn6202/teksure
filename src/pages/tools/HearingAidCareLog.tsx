import { useState } from "react";
import SEOHead from "@/components/SEOHead";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Headphones, Trash2, Printer, PlusCircle, AlertTriangle } from "lucide-react";

type EventKind = "battery" | "clean" | "audiologist" | "repair" | "wax-guard";

interface CareEvent {
  id: string;
  date: string;
  kind: EventKind;
  notes: string;
}

const KIND_META: Record<EventKind, { label: string; emoji: string; intervalDays: number; color: string }> = {
  battery: { label: "Battery change", emoji: "🔋", intervalDays: 7, color: "bg-amber-100 text-amber-700" },
  clean: { label: "Weekly cleaning", emoji: "🧽", intervalDays: 7, color: "bg-blue-100 text-blue-700" },
  "wax-guard": { label: "Wax guard change", emoji: "🩺", intervalDays: 30, color: "bg-purple-100 text-purple-700" },
  audiologist: { label: "Audiologist visit", emoji: "👨‍⚕️", intervalDays: 365, color: "bg-green-100 text-green-700" },
  repair: { label: "Repair", emoji: "🔧", intervalDays: 0, color: "bg-red-100 text-red-700" },
};

export default function HearingAidCareLog() {
  const [events, setEvents] = useState<CareEvent[]>([]);
  const [form, setForm] = useState({
    date: new Date().toISOString().slice(0, 10),
    kind: "clean" as EventKind,
    notes: "",
  });

  function add() {
    setEvents(prev => [...prev, { id: Date.now().toString() + Math.random(), date: form.date, kind: form.kind, notes: form.notes.trim() }]);
    setForm(f => ({ ...f, notes: "" }));
  }

  function remove(id: string) {
    setEvents(prev => prev.filter(e => e.id !== id));
  }

  function lastEventOfKind(kind: EventKind): CareEvent | null {
    return events.filter(e => e.kind === kind).sort((a, b) => b.date.localeCompare(a.date))[0] || null;
  }

  function daysSince(d: string): number {
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    const date = new Date(d);
    date.setHours(0, 0, 0, 0);
    return Math.floor((today.getTime() - date.getTime()) / (1000 * 60 * 60 * 24));
  }

  function formatDate(s: string) {
    const [y, m, d] = s.split("-");
    return `${m}/${d}/${y}`;
  }

  const sorted = [...events].sort((a, b) => b.date.localeCompare(a.date));

  // Calculate due tasks
  const dueTasks = (["battery", "clean", "wax-guard", "audiologist"] as EventKind[]).map(k => {
    const last = lastEventOfKind(k);
    const interval = KIND_META[k].intervalDays;
    if (!last) return { kind: k, status: "never" as const, daysOverdue: 0 };
    const days = daysSince(last.date);
    return { kind: k, status: days >= interval ? "due" as const : "ok" as const, daysOverdue: days - interval, lastDate: last.date };
  });
  const dueCount = dueTasks.filter(t => t.status !== "ok").length;

  return (
    <div className="min-h-screen bg-gray-50">
      <SEOHead
        title="Hearing Aid Care Log | TekSure"
        description="Track hearing aid maintenance — battery changes, cleanings, wax guard changes, audiologist visits. See what's due and what's overdue."
      />

      <div className="max-w-2xl mx-auto px-4 py-8 print:p-4">
        <div className="mb-6">
          <div className="flex items-center gap-2 mb-1">
            <Headphones className="h-7 w-7 text-blue-600" />
            <h1 className="text-3xl font-bold text-gray-900">Hearing Aid Care Log</h1>
          </div>
          <p className="text-gray-600 text-lg">
            Hearing aids work best with regular care. Log each task and the tool tracks what is due.
          </p>
        </div>

        {/* Due tasks */}
        <Card className="mb-4 print:break-inside-avoid">
          <CardHeader className="pb-2 pt-3">
            <CardTitle className="text-lg flex items-center justify-between">
              <span>Care Status</span>
              {dueCount > 0 && <Badge className="text-xs bg-amber-500">{dueCount} due</Badge>}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              {dueTasks.map(t => {
                const meta = KIND_META[t.kind];
                return (
                  <div key={t.kind} className={`flex items-center justify-between gap-2 p-2 rounded ${
                    t.status === "due" ? "bg-amber-50" : t.status === "never" ? "bg-gray-50" : "bg-green-50"
                  }`}>
                    <div className="flex items-center gap-2">
                      <span className="text-xl">{meta.emoji}</span>
                      <div>
                        <p className="text-sm font-medium text-gray-800">{meta.label}</p>
                        <p className="text-xs text-gray-500">
                          {t.status === "never" ? "Never logged" : `Last: ${formatDate(t.lastDate!)}`}
                        </p>
                      </div>
                    </div>
                    {t.status === "due" && t.daysOverdue >= 0 && (
                      <Badge variant="secondary" className="bg-amber-200 text-amber-800 text-xs">
                        {t.daysOverdue === 0 ? "Due today" : `${t.daysOverdue} days overdue`}
                      </Badge>
                    )}
                    {t.status === "ok" && t.lastDate && (
                      <Badge variant="secondary" className="bg-green-200 text-green-800 text-xs">
                        On track
                      </Badge>
                    )}
                    {t.status === "never" && (
                      <Badge variant="secondary" className="bg-gray-200 text-gray-700 text-xs">
                        Set up
                      </Badge>
                    )}
                  </div>
                );
              })}
            </div>
          </CardContent>
        </Card>

        {dueCount > 0 && (
          <Card className="mb-4 bg-amber-50 border-amber-200 print:hidden">
            <CardContent className="py-3 px-4 flex items-start gap-2">
              <AlertTriangle className="h-5 w-5 text-amber-600 mt-0.5 shrink-0" />
              <p className="text-sm text-amber-800">
                <span className="font-semibold">{dueCount} care task{dueCount !== 1 ? "s" : ""} due.</span> Skipping cleaning is the #1 reason hearing aids stop working.
              </p>
            </CardContent>
          </Card>
        )}

        {/* Add form */}
        <Card className="mb-6 print:hidden">
          <CardHeader>
            <CardTitle className="text-lg flex items-center gap-2">
              <PlusCircle className="h-5 w-5 text-blue-600" />
              Log a Care Event
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <div>
              <Label className="text-base font-medium">What did you do?</Label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mt-1">
                {(Object.keys(KIND_META) as EventKind[]).map(k => (
                  <button
                    key={k}
                    type="button"
                    onClick={() => setForm(f => ({ ...f, kind: k }))}
                    className={`text-sm px-3 py-2 rounded-md border ${form.kind === k ? "bg-blue-50 border-blue-300 text-blue-800" : "bg-white border-gray-200 text-gray-700"}`}
                  >
                    {KIND_META[k].emoji} {KIND_META[k].label}
                  </button>
                ))}
              </div>
            </div>
            <div>
              <Label htmlFor="ha-date" className="text-base font-medium">Date</Label>
              <Input id="ha-date" type="date" value={form.date} onChange={e => setForm(f => ({ ...f, date: e.target.value }))} className="mt-1 text-base" />
            </div>
            <div>
              <Label htmlFor="ha-notes" className="text-base font-medium">Notes (optional)</Label>
              <Input id="ha-notes" placeholder="e.g. New 312 batteries, used wax brush" value={form.notes} onChange={e => setForm(f => ({ ...f, notes: e.target.value }))} className="mt-1 text-base" />
            </div>
            <Button onClick={add} size="lg" className="w-full sm:w-auto text-base">Log Event</Button>
          </CardContent>
        </Card>

        {events.length > 0 && (
          <div className="mb-3 flex items-center justify-end print:hidden">
            <Button variant="outline" onClick={() => window.print()} className="gap-2">
              <Printer className="h-4 w-4" />
              Print Log
            </Button>
          </div>
        )}

        {/* History */}
        {sorted.length === 0 ? (
          <Card className="print:hidden">
            <CardContent className="py-10 text-center text-gray-500">
              <Headphones className="h-10 w-10 text-gray-300 mx-auto mb-2" />
              <p className="text-lg">No care events logged yet.</p>
              <p className="text-sm mt-1">Start by logging your most recent battery change or cleaning.</p>
            </CardContent>
          </Card>
        ) : (
          <Card>
            <CardHeader className="pb-2 pt-3">
              <CardTitle className="text-lg">Care History</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="divide-y">
                {sorted.map(e => {
                  const meta = KIND_META[e.kind];
                  return (
                    <div key={e.id} className="py-2 flex items-start justify-between gap-2 print:break-inside-avoid">
                      <div className="flex items-start gap-2 flex-1 min-w-0">
                        <span className="text-xl shrink-0">{meta.emoji}</span>
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center gap-2 flex-wrap">
                            <Badge variant="secondary" className={`text-xs ${meta.color}`}>{meta.label}</Badge>
                            <span className="text-xs text-gray-500">{formatDate(e.date)}</span>
                          </div>
                          {e.notes && <p className="text-xs text-gray-500 italic mt-0.5">{e.notes}</p>}
                        </div>
                      </div>
                      <Button variant="ghost" size="icon" onClick={() => remove(e.id)} className="h-7 w-7 text-red-400 hover:text-red-600 print:hidden">
                        <Trash2 className="h-3 w-3" />
                      </Button>
                    </div>
                  );
                })}
              </div>
            </CardContent>
          </Card>
        )}

        <Card className="mt-6 bg-blue-50 border-blue-200 print:hidden">
          <CardContent className="py-3 px-4">
            <p className="text-sm text-blue-800">
              <span className="font-semibold">Quick Tip: </span>
              Wipe your hearing aids with a soft cloth every night before bed. Open the battery door so moisture can escape and batteries last longer.
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

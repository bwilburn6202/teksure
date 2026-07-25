import { useState } from "react";
import SEOHead from "@/components/SEOHead";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Pill, Trash2, Printer, PlusCircle, AlertTriangle, CheckCircle2 } from "lucide-react";

interface Prescription {
  id: string;
  name: string;
  pharmacy: string;
  daysSupply: number;
  lastFilled: string; // YYYY-MM-DD
  notes: string;
}

const PHARMACIES = ["CVS", "Walgreens", "Walmart", "Costco", "Kroger", "Local pharmacy", "Mail-order", "Other"];

export default function PrescriptionRefillCalendar() {
  const [prescriptions, setPrescriptions] = useState<Prescription[]>([]);
  const [form, setForm] = useState({ name: "", pharmacy: "CVS", daysSupply: "30", lastFilled: new Date().toISOString().slice(0, 10), notes: "" });
  const [error, setError] = useState("");

  function add() {
    if (!form.name.trim()) { setError("Please enter a medication name."); return; }
    const days = parseInt(form.daysSupply, 10);
    if (!days || days <= 0 || days > 365) { setError("Please enter a valid days supply (e.g. 30 or 90)."); return; }
    if (!form.lastFilled) { setError("Please pick the last fill date."); return; }
    setError("");
    setPrescriptions(prev => [
      ...prev,
      { id: Date.now().toString() + Math.random(), name: form.name.trim(), pharmacy: form.pharmacy, daysSupply: days, lastFilled: form.lastFilled, notes: form.notes.trim() },
    ]);
    setForm(f => ({ ...f, name: "", notes: "" }));
  }

  function remove(id: string) {
    setPrescriptions(prev => prev.filter(p => p.id !== id));
  }

  function markRefilled(id: string) {
    const today = new Date().toISOString().slice(0, 10);
    setPrescriptions(prev => prev.map(p => p.id === id ? { ...p, lastFilled: today } : p));
  }

  function refillDate(p: Prescription): Date {
    const last = new Date(p.lastFilled);
    return new Date(last.getTime() + p.daysSupply * 24 * 60 * 60 * 1000);
  }

  function daysUntilRefill(p: Prescription): number {
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    const refill = refillDate(p);
    refill.setHours(0, 0, 0, 0);
    return Math.ceil((refill.getTime() - today.getTime()) / (1000 * 60 * 60 * 24));
  }

  function formatDate(d: Date) {
    return d.toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" });
  }

  const sorted = [...prescriptions].sort((a, b) => daysUntilRefill(a) - daysUntilRefill(b));
  const overdue = prescriptions.filter(p => daysUntilRefill(p) < 0);
  const dueSoon = prescriptions.filter(p => { const d = daysUntilRefill(p); return d >= 0 && d <= 7; });

  function status(p: Prescription) {
    const d = daysUntilRefill(p);
    if (d < 0) return { label: `${Math.abs(d)} days overdue`, color: "bg-red-100 text-red-700 border-red-300", tone: "overdue" as const };
    if (d === 0) return { label: "Refill today", color: "bg-orange-100 text-orange-700 border-orange-300", tone: "now" as const };
    if (d <= 7) return { label: `${d} day${d !== 1 ? "s" : ""} left`, color: "bg-amber-100 text-amber-700 border-amber-300", tone: "soon" as const };
    if (d <= 14) return { label: `${d} days left`, color: "bg-blue-100 text-blue-700 border-blue-300", tone: "upcoming" as const };
    return { label: `${d} days left`, color: "bg-gray-100 text-gray-700 border-gray-200", tone: "ok" as const };
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <SEOHead
        title="Prescription Refill Calendar | TekSure"
        description="Never run out of medication again. Track when each prescription was last filled and see exactly when each one is due for refill."
      />

      <div className="max-w-2xl mx-auto px-4 py-8 print:p-4">
        <div className="mb-6">
          <div className="flex items-center gap-2 mb-1">
            <Pill className="h-7 w-7 text-emerald-600" />
            <h1 className="text-3xl font-bold text-gray-900">Prescription Refill Calendar</h1>
          </div>
          <p className="text-gray-600 text-lg">
            Add each prescription with the date you last filled it. The tool will tell you exactly when to call for a refill.
          </p>
        </div>

        {/* Alerts */}
        {(overdue.length > 0 || dueSoon.length > 0) && (
          <Card className="mb-4 bg-amber-50 border-amber-200 print:hidden">
            <CardContent className="py-3 px-4 flex items-start gap-2">
              <AlertTriangle className="h-5 w-5 text-amber-600 mt-0.5 shrink-0" />
              <div>
                {overdue.length > 0 && (
                  <p className="font-semibold text-red-700 text-sm">
                    {overdue.length} prescription{overdue.length !== 1 ? "s" : ""} overdue — call your pharmacy today
                  </p>
                )}
                {dueSoon.length > 0 && (
                  <p className="font-semibold text-amber-800 text-sm">
                    {dueSoon.length} due within 7 days
                  </p>
                )}
              </div>
            </CardContent>
          </Card>
        )}

        {/* Add form */}
        <Card className="mb-6 print:hidden">
          <CardHeader>
            <CardTitle className="text-xl flex items-center gap-2">
              <PlusCircle className="h-5 w-5 text-emerald-600" />
              Add a Prescription
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <div>
              <Label htmlFor="med-name" className="text-base font-medium">Medication Name</Label>
              <Input id="med-name" placeholder="e.g. Lisinopril 10mg" value={form.name} onChange={e => setForm(f => ({ ...f, name: e.target.value }))} className="mt-1 text-base" />
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              <div>
                <Label htmlFor="pharmacy" className="text-base font-medium">Pharmacy</Label>
                <select id="pharmacy" value={form.pharmacy} onChange={e => setForm(f => ({ ...f, pharmacy: e.target.value }))} className="mt-1 w-full border border-gray-300 rounded-md px-3 py-2 text-base bg-white">
                  {PHARMACIES.map(p => <option key={p}>{p}</option>)}
                </select>
              </div>
              <div>
                <Label htmlFor="days" className="text-base font-medium">Days Supply</Label>
                <Input id="days" type="number" min="1" max="365" value={form.daysSupply} onChange={e => setForm(f => ({ ...f, daysSupply: e.target.value }))} className="mt-1 text-base" />
              </div>
              <div>
                <Label htmlFor="last-filled" className="text-base font-medium">Last Filled</Label>
                <Input id="last-filled" type="date" value={form.lastFilled} onChange={e => setForm(f => ({ ...f, lastFilled: e.target.value }))} className="mt-1 text-base" />
              </div>
            </div>
            <div>
              <Label htmlFor="rx-notes" className="text-base font-medium">Notes (optional)</Label>
              <Input id="rx-notes" placeholder="e.g. Take with food, blue pill" value={form.notes} onChange={e => setForm(f => ({ ...f, notes: e.target.value }))} className="mt-1 text-base" />
            </div>
            {error && <p className="text-red-600 text-sm">{error}</p>}
            <Button onClick={add} size="lg" className="w-full sm:w-auto text-base">Add Prescription</Button>
          </CardContent>
        </Card>

        {/* Print summary */}
        {prescriptions.length > 0 && (
          <div className="mb-3 flex flex-wrap items-center justify-between gap-3 print:hidden">
            <p className="text-sm text-gray-500">
              <span className="font-semibold text-gray-800">{prescriptions.length}</span> prescription{prescriptions.length !== 1 ? "s" : ""} tracked
            </p>
            <Button variant="outline" onClick={() => window.print()} className="gap-2">
              <Printer className="h-4 w-4" />
              Print Calendar
            </Button>
          </div>
        )}

        {/* List */}
        {sorted.length === 0 ? (
          <Card className="print:hidden">
            <CardContent className="py-10 text-center text-gray-500">
              <Pill className="h-10 w-10 text-gray-300 mx-auto mb-2" />
              <p className="text-lg">No prescriptions tracked yet.</p>
              <p className="text-sm mt-1">Add a medication above to start tracking refill dates.</p>
            </CardContent>
          </Card>
        ) : (
          <div className="space-y-3">
            {sorted.map(p => {
              const s = status(p);
              return (
                <Card key={p.id} className={`border ${s.tone === "overdue" ? "border-red-200 bg-red-50/30" : s.tone === "now" ? "border-orange-200 bg-orange-50/30" : s.tone === "soon" ? "border-amber-200 bg-amber-50/30" : ""} print:break-inside-avoid`}>
                  <CardContent className="py-3 px-4">
                    <div className="flex items-start justify-between gap-2">
                      <div className="flex-1 min-w-0">
                        <p className="font-semibold text-gray-900 text-base">{p.name}</p>
                        <div className="flex flex-wrap gap-2 mt-1 items-center">
                          <Badge variant="secondary" className={`text-xs border ${s.color}`}>
                            {s.label}
                          </Badge>
                          <span className="text-xs text-gray-500">Refill by {formatDate(refillDate(p))}</span>
                        </div>
                        <p className="text-xs text-gray-500 mt-1">
                          {p.pharmacy} · {p.daysSupply}-day supply · last filled {formatDate(new Date(p.lastFilled))}
                        </p>
                        {p.notes && <p className="text-xs text-gray-500 italic mt-0.5">{p.notes}</p>}
                      </div>
                      <div className="flex flex-col gap-1 shrink-0 print:hidden">
                        <Button size="sm" variant="outline" onClick={() => markRefilled(p.id)} className="text-xs gap-1 h-7">
                          <CheckCircle2 className="h-3 w-3" />
                          Refilled
                        </Button>
                        <Button size="icon" variant="ghost" onClick={() => remove(p.id)} className="h-7 w-7 text-red-400 hover:text-red-600">
                          <Trash2 className="h-3 w-3" />
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        )}

        <Card className="mt-6 bg-blue-50 border-blue-200 print:hidden">
          <CardContent className="py-3 px-4">
            <p className="text-sm text-blue-800">
              <span className="font-semibold">Quick Tip: </span>
              Most pharmacies allow refills 5-7 days before the prescription runs out. Call sooner if you are heading on a trip or know the pharmacy may be busy.
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

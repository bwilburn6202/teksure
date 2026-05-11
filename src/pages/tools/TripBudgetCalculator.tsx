import { useState } from "react";
import SEOHead from "@/components/SEOHead";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Plane, Trash2, Printer, PlusCircle, AlertTriangle } from "lucide-react";

interface Expense {
  id: string;
  category: string;
  description: string;
  planned: number;
  actual: number;
}

const CATEGORIES = ["Flights / Travel", "Lodging", "Rental car / Gas", "Food & Dining", "Activities / Tours", "Tips & Service", "Souvenirs / Shopping", "Insurance", "Misc"];

export default function TripBudgetCalculator() {
  const [tripName, setTripName] = useState("");
  const [tripDates, setTripDates] = useState("");
  const [expenses, setExpenses] = useState<Expense[]>([]);
  const [form, setForm] = useState({
    category: "Flights / Travel",
    description: "",
    planned: "",
    actual: "",
  });
  const [error, setError] = useState("");

  function add() {
    if (!form.description.trim()) { setError("Please enter a description."); return; }
    const planned = parseFloat(form.planned) || 0;
    const actual = parseFloat(form.actual) || 0;
    if (planned === 0 && actual === 0) { setError("Please enter a planned or actual amount."); return; }
    setError("");
    setExpenses(prev => [...prev, { id: Date.now().toString() + Math.random(), category: form.category, description: form.description.trim(), planned, actual }]);
    setForm(f => ({ ...f, description: "", planned: "", actual: "" }));
  }

  function remove(id: string) {
    setExpenses(prev => prev.filter(e => e.id !== id));
  }

  function setActual(id: string, value: string) {
    const v = parseFloat(value) || 0;
    setExpenses(prev => prev.map(e => e.id === id ? { ...e, actual: v } : e));
  }

  function formatMoney(n: number) {
    return n.toLocaleString("en-US", { style: "currency", currency: "USD" });
  }

  const totalPlanned = expenses.reduce((s, e) => s + e.planned, 0);
  const totalActual = expenses.reduce((s, e) => s + e.actual, 0);
  const variance = totalActual - totalPlanned;
  const overBudget = variance > 0;

  // Group by category
  const grouped = CATEGORIES.reduce<Record<string, Expense[]>>((acc, cat) => {
    const items = expenses.filter(e => e.category === cat);
    if (items.length > 0) acc[cat] = items;
    return acc;
  }, {});

  return (
    <div className="min-h-screen bg-gray-50">
      <SEOHead
        title="Trip Budget Calculator | TekSure"
        description="Plan a trip budget by category, then track actual spending while you travel. See if you are on track or over budget."
      />

      <div className="max-w-2xl mx-auto px-4 py-8 print:p-4">
        <div className="mb-6">
          <div className="flex items-center gap-2 mb-1">
            <Plane className="h-7 w-7 text-blue-600" />
            <h1 className="text-3xl font-bold text-gray-900">Trip Budget Calculator</h1>
          </div>
          <p className="text-gray-600 text-lg">
            Plan what each part of your trip will cost, then update with actual amounts as you go. Easy to spot where you went over.
          </p>
        </div>

        {/* Trip details */}
        <Card className="mb-4 print:shadow-none">
          <CardContent className="py-3 px-4 grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div>
              <Label htmlFor="trip-name" className="text-base font-medium">Trip Name</Label>
              <Input id="trip-name" placeholder="e.g. Florida — January 2027" value={tripName} onChange={e => setTripName(e.target.value)} className="mt-1 text-base" />
            </div>
            <div>
              <Label htmlFor="trip-dates" className="text-base font-medium">Dates</Label>
              <Input id="trip-dates" placeholder="e.g. Jan 5 — Jan 14" value={tripDates} onChange={e => setTripDates(e.target.value)} className="mt-1 text-base" />
            </div>
          </CardContent>
        </Card>

        {/* Summary */}
        {expenses.length > 0 && (
          <Card className={`mb-4 ${overBudget ? "border-red-200 bg-red-50" : "border-green-200 bg-green-50"}`}>
            <CardContent className="py-4 px-4">
              <div className="grid grid-cols-3 gap-3 text-center">
                <div>
                  <p className="text-xs text-gray-500">Planned</p>
                  <p className="text-xl font-bold text-gray-700">{formatMoney(totalPlanned)}</p>
                </div>
                <div>
                  <p className="text-xs text-gray-500">Actual</p>
                  <p className="text-xl font-bold text-blue-700">{formatMoney(totalActual)}</p>
                </div>
                <div>
                  <p className="text-xs text-gray-500">{overBudget ? "Over by" : "Under by"}</p>
                  <p className={`text-2xl font-bold ${overBudget ? "text-red-700" : "text-green-700"}`}>{formatMoney(Math.abs(variance))}</p>
                </div>
              </div>
            </CardContent>
          </Card>
        )}

        {/* Add form */}
        <Card className="mb-6 print:hidden">
          <CardHeader>
            <CardTitle className="text-xl flex items-center gap-2">
              <PlusCircle className="h-5 w-5 text-blue-600" />
              Add a Budget Line
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <div>
              <Label className="text-base font-medium">Category</Label>
              <select value={form.category} onChange={e => setForm(f => ({ ...f, category: e.target.value }))} className="mt-1 w-full border border-gray-300 rounded-md px-3 py-2 text-base bg-white">
                {CATEGORIES.map(c => <option key={c}>{c}</option>)}
              </select>
            </div>
            <div>
              <Label htmlFor="exp-desc" className="text-base font-medium">Description</Label>
              <Input id="exp-desc" placeholder="e.g. Flights to Orlando" value={form.description} onChange={e => setForm(f => ({ ...f, description: e.target.value }))} className="mt-1 text-base" />
            </div>
            <div className="grid grid-cols-2 gap-3">
              <div>
                <Label htmlFor="planned" className="text-base font-medium">Planned ($)</Label>
                <Input id="planned" type="number" min="0" step="0.01" placeholder="0" value={form.planned} onChange={e => setForm(f => ({ ...f, planned: e.target.value }))} className="mt-1 text-base" />
              </div>
              <div>
                <Label htmlFor="actual" className="text-base font-medium">Actual ($) — fill later</Label>
                <Input id="actual" type="number" min="0" step="0.01" placeholder="0" value={form.actual} onChange={e => setForm(f => ({ ...f, actual: e.target.value }))} className="mt-1 text-base" />
              </div>
            </div>
            {error && <p className="text-red-600 text-sm">{error}</p>}
            <Button onClick={add} size="lg" className="w-full sm:w-auto text-base">Add Line</Button>
          </CardContent>
        </Card>

        {expenses.length > 0 && (
          <div className="mb-3 flex items-center justify-end print:hidden">
            <Button variant="outline" onClick={() => window.print()} className="gap-2">
              <Printer className="h-4 w-4" />
              Print Budget
            </Button>
          </div>
        )}

        {/* Print header */}
        <div className="hidden print:block mb-3 border-b pb-2">
          <h2 className="text-xl font-bold">{tripName || "Trip Budget"}{tripDates && ` (${tripDates})`}</h2>
        </div>

        {/* Grouped */}
        {expenses.length === 0 ? (
          <Card className="print:hidden">
            <CardContent className="py-10 text-center text-gray-500">
              <Plane className="h-10 w-10 text-gray-300 mx-auto mb-2" />
              <p className="text-lg">No budget lines yet.</p>
              <p className="text-sm mt-1">Add your first big expense (often flights or lodging).</p>
            </CardContent>
          </Card>
        ) : (
          <div className="space-y-3">
            {Object.entries(grouped).map(([cat, items]) => {
              const subPlanned = items.reduce((s, e) => s + e.planned, 0);
              const subActual = items.reduce((s, e) => s + e.actual, 0);
              const sub = subActual - subPlanned;
              return (
                <Card key={cat} className="print:break-inside-avoid">
                  <CardHeader className="pb-2 pt-3 bg-blue-50">
                    <CardTitle className="text-base text-blue-800 flex items-center justify-between">
                      <span>{cat}</span>
                      <Badge variant="secondary" className="text-xs">
                        {formatMoney(subActual)} / {formatMoney(subPlanned)}
                        {sub !== 0 && <span className={`ml-1 ${sub > 0 ? "text-red-700" : "text-green-700"}`}>({sub > 0 ? "+" : ""}{formatMoney(sub)})</span>}
                      </Badge>
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="pt-2">
                    <div className="space-y-1">
                      {items.map(e => {
                        const v = e.actual - e.planned;
                        return (
                          <div key={e.id} className="flex items-center justify-between gap-2 py-1">
                            <span className="text-sm text-gray-800 flex-1 truncate">{e.description}</span>
                            <div className="flex items-center gap-2 print:hidden">
                              <Input
                                type="number"
                                step="0.01"
                                min="0"
                                placeholder="actual"
                                value={e.actual || ""}
                                onChange={ev => setActual(e.id, ev.target.value)}
                                className="text-sm h-7 w-24"
                                aria-label="Actual amount"
                              />
                              <span className="text-xs text-gray-400 w-20 text-right">of {formatMoney(e.planned)}</span>
                              <Button variant="ghost" size="icon" onClick={() => remove(e.id)} className="h-6 w-6 text-red-400 hover:text-red-600">
                                <Trash2 className="h-3 w-3" />
                              </Button>
                            </div>
                            <span className="hidden print:inline text-sm">
                              {formatMoney(e.actual)} of {formatMoney(e.planned)}
                              {v !== 0 && ` (${v > 0 ? "+" : ""}${formatMoney(v)})`}
                            </span>
                          </div>
                        );
                      })}
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        )}

        {overBudget && expenses.length > 0 && (
          <Card className="mt-4 bg-amber-50 border-amber-200 print:hidden">
            <CardContent className="py-3 px-4 flex items-start gap-2">
              <AlertTriangle className="h-5 w-5 text-amber-600 mt-0.5 shrink-0" />
              <p className="text-sm text-amber-800">
                Currently over budget by <span className="font-semibold">{formatMoney(variance)}</span>. Look at which categories are most over to see where to pull back.
              </p>
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  );
}

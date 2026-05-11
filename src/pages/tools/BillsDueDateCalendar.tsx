import { useState } from "react";
import SEOHead from "@/components/SEOHead";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, Trash2, Printer, AlertTriangle, PlusCircle } from "lucide-react";

interface Bill {
  id: string;
  name: string;
  dueDay: number; // 1-31
  amount: number;
  autopay: boolean;
  notes: string;
}

const COMMON_BILLS = ["Electric", "Gas", "Water", "Internet", "Cell phone", "Cable/TV", "Mortgage", "Rent", "HOA", "Trash", "Insurance", "Streaming", "Newspaper"];

export default function BillsDueDateCalendar() {
  const [bills, setBills] = useState<Bill[]>([]);
  const [form, setForm] = useState({ name: "", dueDay: "1", amount: "", autopay: false, notes: "" });
  const [error, setError] = useState("");

  function add(name?: string) {
    const finalName = (name ?? form.name).trim();
    if (!finalName) { setError("Please enter a bill name."); return; }
    const day = parseInt(form.dueDay, 10);
    if (!day || day < 1 || day > 31) { setError("Please pick a valid day (1-31)."); return; }
    const amount = parseFloat(form.amount);
    setError("");
    setBills(prev => [
      ...prev,
      { id: Date.now().toString() + Math.random(), name: finalName, dueDay: day, amount: !isNaN(amount) ? amount : 0, autopay: form.autopay, notes: form.notes.trim() },
    ]);
    if (!name) {
      setForm({ name: "", dueDay: "1", amount: "", autopay: false, notes: "" });
    }
  }

  function remove(id: string) {
    setBills(prev => prev.filter(b => b.id !== id));
  }

  function toggleAutopay(id: string) {
    setBills(prev => prev.map(b => b.id === id ? { ...b, autopay: !b.autopay } : b));
  }

  function daysUntil(dueDay: number): number {
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    const thisMonth = new Date(today.getFullYear(), today.getMonth(), Math.min(dueDay, new Date(today.getFullYear(), today.getMonth() + 1, 0).getDate()));
    if (thisMonth >= today) {
      return Math.round((thisMonth.getTime() - today.getTime()) / (1000 * 60 * 60 * 24));
    }
    const nextMonth = new Date(today.getFullYear(), today.getMonth() + 1, Math.min(dueDay, new Date(today.getFullYear(), today.getMonth() + 2, 0).getDate()));
    return Math.round((nextMonth.getTime() - today.getTime()) / (1000 * 60 * 60 * 24));
  }

  function ordinal(n: number) {
    const s = ["th", "st", "nd", "rd"];
    const v = n % 100;
    return n + (s[(v - 20) % 10] || s[v] || s[0]);
  }

  const sorted = [...bills].sort((a, b) => daysUntil(a.dueDay) - daysUntil(b.dueDay));
  const due7Days = bills.filter(b => daysUntil(b.dueDay) <= 7);
  const monthlyTotal = bills.reduce((s, b) => s + b.amount, 0);
  const onAutopay = bills.filter(b => b.autopay).length;

  return (
    <div className="min-h-screen bg-gray-50">
      <SEOHead
        title="Bills Due Date Calendar | TekSure"
        description="Track every monthly bill with due day and amount. See what's coming up in the next 7 days. Print to put on the fridge."
      />

      <div className="max-w-2xl mx-auto px-4 py-8 print:p-4">
        <div className="mb-6">
          <div className="flex items-center gap-2 mb-1">
            <Calendar className="h-7 w-7 text-blue-600" />
            <h1 className="text-3xl font-bold text-gray-900">Bills Due Date Calendar</h1>
          </div>
          <p className="text-gray-600 text-lg">
            Add every recurring bill with the day of the month it is due. Print a clean monthly view for the fridge.
          </p>
        </div>

        {/* Stats */}
        {bills.length > 0 && (
          <div className="grid grid-cols-3 gap-3 mb-4">
            <Card>
              <CardContent className="py-3 px-3 text-center">
                <p className="text-xs text-gray-500">Bills</p>
                <p className="text-xl font-bold text-blue-700">{bills.length}</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="py-3 px-3 text-center">
                <p className="text-xs text-gray-500">Monthly total</p>
                <p className="text-xl font-bold text-blue-700">${monthlyTotal.toFixed(2)}</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="py-3 px-3 text-center">
                <p className="text-xs text-gray-500">On auto-pay</p>
                <p className="text-xl font-bold text-blue-700">{onAutopay}/{bills.length}</p>
              </CardContent>
            </Card>
          </div>
        )}

        {/* Alert */}
        {due7Days.length > 0 && (
          <Card className="mb-4 bg-amber-50 border-amber-200 print:hidden">
            <CardContent className="py-3 px-4 flex items-start gap-2">
              <AlertTriangle className="h-5 w-5 text-amber-600 mt-0.5 shrink-0" />
              <p className="text-sm text-amber-800">
                <span className="font-semibold">{due7Days.length} bill{due7Days.length !== 1 ? "s" : ""}</span> due in the next 7 days. Make sure your account has enough to cover them.
              </p>
            </CardContent>
          </Card>
        )}

        {/* Add form */}
        <Card className="mb-6 print:hidden">
          <CardHeader>
            <CardTitle className="text-xl flex items-center gap-2">
              <PlusCircle className="h-5 w-5 text-blue-600" />
              Add a Bill
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <div>
              <Label htmlFor="bill-name" className="text-base font-medium">Bill Name</Label>
              <Input id="bill-name" placeholder="e.g. Electric" value={form.name} onChange={e => setForm(f => ({ ...f, name: e.target.value }))} className="mt-1 text-base" />
              <div className="flex flex-wrap gap-1 mt-2">
                {COMMON_BILLS.filter(c => !bills.some(b => b.name.toLowerCase() === c.toLowerCase())).slice(0, 8).map(c => (
                  <button
                    key={c}
                    type="button"
                    onClick={() => setForm(f => ({ ...f, name: c }))}
                    className="text-xs px-2 py-1 rounded-full bg-blue-50 border border-blue-200 text-blue-700 hover:bg-blue-100"
                  >
                    {c}
                  </button>
                ))}
              </div>
            </div>
            <div className="grid grid-cols-2 gap-3">
              <div>
                <Label htmlFor="due-day" className="text-base font-medium">Due Day of Month</Label>
                <Input id="due-day" type="number" min="1" max="31" value={form.dueDay} onChange={e => setForm(f => ({ ...f, dueDay: e.target.value }))} className="mt-1 text-base" />
              </div>
              <div>
                <Label htmlFor="amount" className="text-base font-medium">Approx. Amount ($)</Label>
                <Input id="amount" type="number" min="0" step="0.01" placeholder="0.00" value={form.amount} onChange={e => setForm(f => ({ ...f, amount: e.target.value }))} className="mt-1 text-base" />
              </div>
            </div>
            <label className="flex items-center gap-2 text-sm cursor-pointer">
              <input type="checkbox" checked={form.autopay} onChange={e => setForm(f => ({ ...f, autopay: e.target.checked }))} className="h-4 w-4" />
              <span>This bill is on auto-pay</span>
            </label>
            <div>
              <Label htmlFor="bill-notes" className="text-base font-medium">Notes (optional)</Label>
              <Input id="bill-notes" placeholder="e.g. Paid from checking, account #1234" value={form.notes} onChange={e => setForm(f => ({ ...f, notes: e.target.value }))} className="mt-1 text-base" />
            </div>
            {error && <p className="text-red-600 text-sm">{error}</p>}
            <Button onClick={() => add()} size="lg" className="w-full sm:w-auto text-base">Add Bill</Button>
          </CardContent>
        </Card>

        {bills.length > 0 && (
          <div className="mb-3 flex items-center justify-end print:hidden">
            <Button variant="outline" onClick={() => window.print()} className="gap-2">
              <Printer className="h-4 w-4" />
              Print Calendar
            </Button>
          </div>
        )}

        {sorted.length === 0 ? (
          <Card className="print:hidden">
            <CardContent className="py-10 text-center text-gray-500">
              <Calendar className="h-10 w-10 text-gray-300 mx-auto mb-2" />
              <p className="text-lg">No bills tracked yet.</p>
              <p className="text-sm mt-1">Add your first bill above to start the calendar.</p>
            </CardContent>
          </Card>
        ) : (
          <Card>
            <CardHeader className="pb-2 pt-3">
              <CardTitle className="text-lg">Sorted by Next Due Date</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="divide-y">
                {sorted.map(b => {
                  const days = daysUntil(b.dueDay);
                  const soon = days <= 7;
                  return (
                    <div key={b.id} className={`py-2 flex items-start justify-between gap-2 ${soon ? "bg-amber-50/50 -mx-3 px-3 rounded" : ""}`}>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-2 flex-wrap">
                          <span className="font-medium text-gray-900">{b.name}</span>
                          {b.amount > 0 && <Badge variant="secondary" className="text-xs">${b.amount.toFixed(2)}</Badge>}
                          {b.autopay && <Badge className="text-xs bg-green-100 text-green-700 border-green-200">Auto-pay</Badge>}
                        </div>
                        <p className="text-xs text-gray-600 mt-1">
                          Due the {ordinal(b.dueDay)} · {days === 0 ? "today" : days === 1 ? "tomorrow" : `in ${days} days`}
                        </p>
                        {b.notes && <p className="text-xs text-gray-500 italic mt-0.5">{b.notes}</p>}
                      </div>
                      <div className="flex flex-col gap-1 shrink-0 print:hidden">
                        <button
                          onClick={() => toggleAutopay(b.id)}
                          className="text-xs text-blue-600 underline hover:text-blue-800"
                        >
                          {b.autopay ? "Mark manual" : "Mark auto-pay"}
                        </button>
                        <Button variant="ghost" size="icon" onClick={() => remove(b.id)} className="h-6 w-6 text-red-400 hover:text-red-600">
                          <Trash2 className="h-3 w-3" />
                        </Button>
                      </div>
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
              Auto-pay prevents late fees, but keep tracking the bills here so you can spot a charge that suddenly goes up.
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

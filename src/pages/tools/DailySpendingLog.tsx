import { useState } from "react";
import SEOHead from "@/components/SEOHead";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Wallet, Trash2, Printer, PlusCircle } from "lucide-react";

type Category = "Groceries" | "Eating out" | "Gas/Transit" | "Bills" | "Health" | "Fun/Hobbies" | "Gifts" | "Other";

interface Spend {
  id: string;
  date: string;
  category: Category;
  amount: number;
  note: string;
}

const CATEGORIES: Category[] = ["Groceries", "Eating out", "Gas/Transit", "Bills", "Health", "Fun/Hobbies", "Gifts", "Other"];

export default function DailySpendingLog() {
  const [spends, setSpends] = useState<Spend[]>([]);
  const [form, setForm] = useState({ date: new Date().toISOString().slice(0, 10), category: "Groceries" as Category, amount: "", note: "" });

  function add() {
    const a = parseFloat(form.amount);
    if (!a || a <= 0) return;
    setSpends(prev => [...prev, { id: Date.now().toString() + Math.random(), date: form.date, category: form.category, amount: parseFloat(a.toFixed(2)), note: form.note.trim() }]);
    setForm(f => ({ ...f, amount: "", note: "" }));
  }

  function remove(id: string) {
    setSpends(prev => prev.filter(s => s.id !== id));
  }

  function fmt(n: number) { return n.toLocaleString("en-US", { style: "currency", currency: "USD", maximumFractionDigits: 2 }); }

  const today = new Date().toISOString().slice(0, 10);
  const cutoff7 = new Date();
  cutoff7.setDate(cutoff7.getDate() - 7);
  const cutoff7Str = cutoff7.toISOString().slice(0, 10);
  const cutoff30 = new Date();
  cutoff30.setDate(cutoff30.getDate() - 30);
  const cutoff30Str = cutoff30.toISOString().slice(0, 10);

  const todayTotal = spends.filter(s => s.date === today).reduce((sum, s) => sum + s.amount, 0);
  const week7Total = spends.filter(s => s.date >= cutoff7Str).reduce((sum, s) => sum + s.amount, 0);
  const month30Total = spends.filter(s => s.date >= cutoff30Str).reduce((sum, s) => sum + s.amount, 0);

  const byCategory = CATEGORIES.map(c => ({
    category: c,
    total: spends.filter(s => s.date >= cutoff30Str && s.category === c).reduce((sum, s) => sum + s.amount, 0),
  })).filter(x => x.total > 0).sort((a, b) => b.total - a.total);

  return (
    <div className="min-h-screen bg-gray-50">
      <SEOHead title="Daily Spending Log | TekSure" description="Log expenses as you go. See today, last 7 days, and last 30 days totals — plus a breakdown by category." />
      <div className="max-w-2xl mx-auto px-4 py-8 print:p-4">
        <div className="mb-6">
          <div className="flex items-center gap-2 mb-1">
            <Wallet className="h-7 w-7 text-emerald-700" />
            <h1 className="text-3xl font-bold text-gray-900">Daily Spending Log</h1>
          </div>
          <p className="text-gray-600 text-lg">Log a spend in 10 seconds. Watch the daily, weekly, and monthly totals build up.</p>
        </div>

        {spends.length > 0 && (
          <div className="grid grid-cols-3 gap-3 mb-4">
            <Card><CardContent className="py-3 px-3 text-center"><p className="text-xs text-gray-500">Today</p><p className="text-xl font-bold text-emerald-700">{fmt(todayTotal)}</p></CardContent></Card>
            <Card><CardContent className="py-3 px-3 text-center"><p className="text-xs text-gray-500">Last 7 days</p><p className="text-xl font-bold text-emerald-700">{fmt(week7Total)}</p></CardContent></Card>
            <Card><CardContent className="py-3 px-3 text-center"><p className="text-xs text-gray-500">Last 30 days</p><p className="text-xl font-bold text-emerald-700">{fmt(month30Total)}</p></CardContent></Card>
          </div>
        )}

        <Card className="mb-4 print:hidden">
          <CardHeader className="pb-2 pt-3"><CardTitle className="text-lg flex items-center gap-2"><PlusCircle className="h-5 w-5 text-emerald-700" />Add a Spend</CardTitle></CardHeader>
          <CardContent className="space-y-2">
            <div className="grid grid-cols-2 gap-2">
              <Input type="date" value={form.date} onChange={e => setForm(f => ({ ...f, date: e.target.value }))} />
              <Input type="number" step="0.01" placeholder="Amount $" value={form.amount} onChange={e => setForm(f => ({ ...f, amount: e.target.value }))} />
            </div>
            <select value={form.category} onChange={e => setForm(f => ({ ...f, category: e.target.value as Category }))} className="w-full border border-gray-300 rounded-md px-3 py-2 text-base bg-white">
              {CATEGORIES.map(c => <option key={c}>{c}</option>)}
            </select>
            <Input placeholder="Note (optional)" value={form.note} onChange={e => setForm(f => ({ ...f, note: e.target.value }))} />
            <Button onClick={add}>Log Spend</Button>
          </CardContent>
        </Card>

        {byCategory.length > 0 && (
          <Card className="mb-4">
            <CardHeader className="pb-2 pt-3"><CardTitle className="text-base">Last 30 days by category</CardTitle></CardHeader>
            <CardContent>
              <div className="space-y-1">
                {byCategory.map(c => (
                  <div key={c.category} className="flex justify-between py-1 text-sm">
                    <span>{c.category}</span>
                    <span className="font-semibold">{fmt(c.total)}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        )}

        {spends.length > 0 && (
          <Card>
            <CardHeader className="pb-2 pt-3"><CardTitle className="text-base flex items-center justify-between"><span>All entries</span><Button variant="outline" size="sm" onClick={() => window.print()} className="gap-1 print:hidden"><Printer className="h-3 w-3" />Print</Button></CardTitle></CardHeader>
            <CardContent>
              <div className="divide-y">
                {[...spends].reverse().map(s => (
                  <div key={s.id} className="py-2 flex items-center justify-between gap-2 text-sm">
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 flex-wrap">
                        <span className="text-gray-500 text-xs">{s.date}</span>
                        <Badge variant="secondary" className="text-xs">{s.category}</Badge>
                      </div>
                      {s.note && <p className="text-xs text-gray-500 italic mt-0.5">{s.note}</p>}
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="font-semibold text-emerald-700">{fmt(s.amount)}</span>
                      <Button variant="ghost" size="icon" onClick={() => remove(s.id)} className="h-6 w-6 text-red-400 hover:text-red-600 print:hidden">
                        <Trash2 className="h-3 w-3" />
                      </Button>
                    </div>
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

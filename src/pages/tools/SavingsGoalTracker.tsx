import { useState } from "react";
import SEOHead from "@/components/SEOHead";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { PiggyBank, Trash2, Printer, PlusCircle, CheckCircle2 } from "lucide-react";

interface Goal {
  id: string;
  name: string;
  target: number;
  saved: number;
  deadline: string;
  notes: string;
}

const PRESETS = [
  { name: "Emergency fund", target: 1000 },
  { name: "Christmas / holidays", target: 500 },
  { name: "Vacation", target: 1500 },
  { name: "Home repair", target: 2500 },
  { name: "New appliance", target: 800 },
  { name: "Car repairs", target: 1200 },
];

export default function SavingsGoalTracker() {
  const [goals, setGoals] = useState<Goal[]>([]);
  const [form, setForm] = useState({ name: "", target: "", saved: "0", deadline: "", notes: "" });
  const [error, setError] = useState("");
  const [depositAmounts, setDepositAmounts] = useState<Record<string, string>>({});

  function add(presetName?: string, presetTarget?: number) {
    const finalName = (presetName ?? form.name).trim();
    const finalTarget = presetTarget ?? parseFloat(form.target);
    if (!finalName) { setError("Please enter a goal name."); return; }
    if (!finalTarget || finalTarget <= 0) { setError("Please enter a valid target amount."); return; }
    setError("");
    setGoals(prev => [
      ...prev,
      {
        id: Date.now().toString() + Math.random(),
        name: finalName,
        target: finalTarget,
        saved: !presetName && form.saved ? parseFloat(form.saved) || 0 : 0,
        deadline: !presetName ? form.deadline : "",
        notes: !presetName ? form.notes.trim() : "",
      },
    ]);
    if (!presetName) setForm({ name: "", target: "", saved: "0", deadline: "", notes: "" });
  }

  function remove(id: string) {
    setGoals(prev => prev.filter(g => g.id !== id));
    setDepositAmounts(prev => {
      const next = { ...prev };
      delete next[id];
      return next;
    });
  }

  function deposit(id: string) {
    const amt = parseFloat(depositAmounts[id] || "");
    if (!amt || amt <= 0) return;
    setGoals(prev => prev.map(g => g.id === id ? { ...g, saved: parseFloat((g.saved + amt).toFixed(2)) } : g));
    setDepositAmounts(prev => ({ ...prev, [id]: "" }));
  }

  function pct(g: Goal): number {
    return Math.min(100, Math.round((g.saved / g.target) * 100));
  }

  function formatMoney(n: number) {
    return n.toLocaleString("en-US", { style: "currency", currency: "USD" });
  }

  function daysUntil(d: string): number | null {
    if (!d) return null;
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    const target = new Date(d);
    target.setHours(0, 0, 0, 0);
    return Math.ceil((target.getTime() - today.getTime()) / (1000 * 60 * 60 * 24));
  }

  const totalTarget = goals.reduce((s, g) => s + g.target, 0);
  const totalSaved = goals.reduce((s, g) => s + g.saved, 0);

  return (
    <div className="min-h-screen bg-gray-50">
      <SEOHead
        title="Savings Goal Tracker | TekSure"
        description="Track multiple savings goals — emergency fund, holidays, vacation, repairs. Add deposits, see progress bars, and stay motivated."
      />

      <div className="max-w-2xl mx-auto px-4 py-8 print:p-4">
        <div className="mb-6">
          <div className="flex items-center gap-2 mb-1">
            <PiggyBank className="h-7 w-7 text-pink-600" />
            <h1 className="text-3xl font-bold text-gray-900">Savings Goal Tracker</h1>
          </div>
          <p className="text-gray-600 text-lg">
            Set savings goals and track each deposit. Watching the bar fill up keeps you motivated.
          </p>
        </div>

        {/* Stats */}
        {goals.length > 0 && (
          <div className="grid grid-cols-3 gap-3 mb-4">
            <Card>
              <CardContent className="py-3 px-3 text-center">
                <p className="text-xs text-gray-500">Goals</p>
                <p className="text-xl font-bold text-pink-700">{goals.length}</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="py-3 px-3 text-center">
                <p className="text-xs text-gray-500">Saved</p>
                <p className="text-xl font-bold text-green-700">{formatMoney(totalSaved)}</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="py-3 px-3 text-center">
                <p className="text-xs text-gray-500">Target</p>
                <p className="text-xl font-bold text-gray-700">{formatMoney(totalTarget)}</p>
              </CardContent>
            </Card>
          </div>
        )}

        {/* Add form */}
        <Card className="mb-6 print:hidden">
          <CardHeader>
            <CardTitle className="text-xl flex items-center gap-2">
              <PlusCircle className="h-5 w-5 text-pink-600" />
              Add a Goal
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <div>
              <Label htmlFor="goal-name" className="text-base font-medium">Goal Name</Label>
              <Input id="goal-name" placeholder="e.g. New refrigerator" value={form.name} onChange={e => setForm(f => ({ ...f, name: e.target.value }))} className="mt-1 text-base" />
              <div className="flex flex-wrap gap-1 mt-2">
                {PRESETS.filter(p => !goals.some(g => g.name === p.name)).map(p => (
                  <button
                    key={p.name}
                    type="button"
                    onClick={() => add(p.name, p.target)}
                    className="text-xs px-2 py-1 rounded-full bg-pink-50 border border-pink-200 text-pink-700 hover:bg-pink-100"
                  >
                    + {p.name} (${p.target})
                  </button>
                ))}
              </div>
            </div>
            <div className="grid grid-cols-2 gap-3">
              <div>
                <Label htmlFor="target" className="text-base font-medium">Target Amount ($)</Label>
                <Input id="target" type="number" min="1" step="0.01" placeholder="500" value={form.target} onChange={e => setForm(f => ({ ...f, target: e.target.value }))} className="mt-1 text-base" />
              </div>
              <div>
                <Label htmlFor="saved" className="text-base font-medium">Already Saved ($)</Label>
                <Input id="saved" type="number" min="0" step="0.01" placeholder="0" value={form.saved} onChange={e => setForm(f => ({ ...f, saved: e.target.value }))} className="mt-1 text-base" />
              </div>
            </div>
            <div>
              <Label htmlFor="deadline" className="text-base font-medium">Target Date (optional)</Label>
              <Input id="deadline" type="date" value={form.deadline} onChange={e => setForm(f => ({ ...f, deadline: e.target.value }))} className="mt-1 text-base" />
            </div>
            <div>
              <Label htmlFor="goal-notes" className="text-base font-medium">Notes (optional)</Label>
              <Input id="goal-notes" placeholder="e.g. From bonus and side gigs" value={form.notes} onChange={e => setForm(f => ({ ...f, notes: e.target.value }))} className="mt-1 text-base" />
            </div>
            {error && <p className="text-red-600 text-sm">{error}</p>}
            <Button onClick={() => add()} size="lg" className="w-full sm:w-auto text-base">Add Goal</Button>
          </CardContent>
        </Card>

        {goals.length > 0 && (
          <div className="mb-3 flex items-center justify-end print:hidden">
            <Button variant="outline" onClick={() => window.print()} className="gap-2">
              <Printer className="h-4 w-4" />
              Print
            </Button>
          </div>
        )}

        {goals.length === 0 ? (
          <Card className="print:hidden">
            <CardContent className="py-10 text-center text-gray-500">
              <PiggyBank className="h-10 w-10 text-gray-300 mx-auto mb-2" />
              <p className="text-lg">No savings goals yet.</p>
              <p className="text-sm mt-1">Pick a preset above or enter your own goal.</p>
            </CardContent>
          </Card>
        ) : (
          <div className="space-y-3">
            {goals.map(g => {
              const p = pct(g);
              const days = daysUntil(g.deadline);
              const done = g.saved >= g.target;
              return (
                <Card key={g.id} className={done ? "bg-green-50 border-green-200" : ""}>
                  <CardContent className="py-3 px-4">
                    <div className="flex items-start justify-between gap-2 mb-2">
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-2">
                          {done && <CheckCircle2 className="h-5 w-5 text-green-600" />}
                          <span className="font-semibold text-gray-900 text-base">{g.name}</span>
                        </div>
                        <p className="text-sm text-gray-600 mt-0.5">
                          <span className="font-bold text-pink-700">{formatMoney(g.saved)}</span>
                          <span className="text-gray-400"> of {formatMoney(g.target)}</span>
                          {days !== null && days > 0 && (
                            <span className="text-xs text-gray-500"> · {days} days to go</span>
                          )}
                          {days !== null && days <= 0 && !done && (
                            <Badge className="ml-2 text-xs bg-amber-500">Target date passed</Badge>
                          )}
                        </p>
                        {g.notes && <p className="text-xs text-gray-500 italic mt-0.5">{g.notes}</p>}
                      </div>
                      <Button variant="ghost" size="icon" onClick={() => remove(g.id)} className="h-7 w-7 text-red-400 hover:text-red-600 print:hidden">
                        <Trash2 className="h-3 w-3" />
                      </Button>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-3 overflow-hidden mb-2">
                      <div
                        className={`h-3 rounded-full transition-all ${done ? "bg-green-500" : "bg-pink-500"}`}
                        style={{ width: `${p}%` }}
                      />
                    </div>
                    <p className="text-xs text-gray-500 mb-2">{p}% of goal</p>
                    {!done && (
                      <div className="flex gap-2 print:hidden">
                        <Input
                          type="number"
                          min="0"
                          step="0.01"
                          placeholder="Add deposit $"
                          value={depositAmounts[g.id] || ""}
                          onChange={e => setDepositAmounts(prev => ({ ...prev, [g.id]: e.target.value }))}
                          className="text-sm h-8"
                        />
                        <Button size="sm" onClick={() => deposit(g.id)} className="h-8">Deposit</Button>
                      </div>
                    )}
                    {done && <p className="text-sm font-semibold text-green-700">🎉 Goal reached!</p>}
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
              Set up automatic transfers from checking to savings on the day you get paid. Money you don't see is money you don't spend.
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

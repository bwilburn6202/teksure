import { useState } from "react";
import SEOHead from "@/components/SEOHead";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { DollarSign, Trash2, Printer, PlusCircle, TrendingUp, TrendingDown } from "lucide-react";

type Kind = "asset" | "debt";

interface Account {
  id: string;
  kind: Kind;
  category: string;
  name: string;
  value: number;
}

const ASSET_CATEGORIES = ["Checking", "Savings / CD", "Retirement (IRA/401k)", "Brokerage", "Home (estimated)", "Vehicle", "Other asset"];
const DEBT_CATEGORIES = ["Mortgage", "Car loan", "Credit card", "Other debt"];

export default function NetWorthSnapshot() {
  const [accounts, setAccounts] = useState<Account[]>([]);
  const [snapshotDate, setSnapshotDate] = useState(new Date().toISOString().slice(0, 10));
  const [form, setForm] = useState({ kind: "asset" as Kind, category: "Checking", name: "", value: "" });
  const [error, setError] = useState("");

  function add() {
    if (!form.name.trim()) { setError("Please enter the account name."); return; }
    const v = parseFloat(form.value);
    if (!form.value || isNaN(v) || v < 0) { setError("Please enter a valid value."); return; }
    setError("");
    setAccounts(prev => [...prev, { id: Date.now().toString() + Math.random(), kind: form.kind, category: form.category, name: form.name.trim(), value: parseFloat(v.toFixed(2)) }]);
    setForm(f => ({ ...f, name: "", value: "" }));
  }

  function remove(id: string) {
    setAccounts(prev => prev.filter(a => a.id !== id));
  }

  function formatMoney(n: number) {
    return n.toLocaleString("en-US", { style: "currency", currency: "USD", maximumFractionDigits: 0 });
  }

  function formatDate(s: string) {
    const [y, m, d] = s.split("-");
    return `${m}/${d}/${y}`;
  }

  const assets = accounts.filter(a => a.kind === "asset");
  const debts = accounts.filter(a => a.kind === "debt");
  const totalAssets = assets.reduce((s, a) => s + a.value, 0);
  const totalDebts = debts.reduce((s, a) => s + a.value, 0);
  const netWorth = totalAssets - totalDebts;

  // Group by category
  function groupByCategory(items: Account[]) {
    return items.reduce<Record<string, Account[]>>((acc, item) => {
      acc[item.category] = acc[item.category] || [];
      acc[item.category].push(item);
      return acc;
    }, {});
  }

  const assetGroups = groupByCategory(assets);
  const debtGroups = groupByCategory(debts);

  const categories = form.kind === "asset" ? ASSET_CATEGORIES : DEBT_CATEGORIES;

  return (
    <div className="min-h-screen bg-gray-50">
      <SEOHead
        title="Net Worth Snapshot | TekSure"
        description="A quick way to add up all your accounts and see your net worth. Print a snapshot for your records."
      />

      <div className="max-w-2xl mx-auto px-4 py-8 print:p-4">
        <div className="mb-6">
          <div className="flex items-center gap-2 mb-1">
            <DollarSign className="h-7 w-7 text-emerald-600" />
            <h1 className="text-3xl font-bold text-gray-900">Net Worth Snapshot</h1>
          </div>
          <p className="text-gray-600 text-lg">
            Add up everything you own and everything you owe. Doing this once or twice a year gives you a clear picture.
          </p>
        </div>

        {/* Date */}
        <Card className="mb-4 print:shadow-none">
          <CardContent className="py-3 px-4 flex flex-wrap gap-3 items-center">
            <Label htmlFor="snap-date" className="text-base font-medium shrink-0">Snapshot date:</Label>
            <Input id="snap-date" type="date" value={snapshotDate} onChange={e => setSnapshotDate(e.target.value)} className="text-base w-44" />
          </CardContent>
        </Card>

        {/* Summary */}
        {accounts.length > 0 && (
          <Card className="mb-4 print:break-inside-avoid">
            <CardContent className="py-4 px-4">
              <div className="grid grid-cols-3 gap-3 text-center">
                <div>
                  <p className="text-xs text-gray-500 flex items-center justify-center gap-1">
                    <TrendingUp className="h-3 w-3" /> Assets
                  </p>
                  <p className="text-xl font-bold text-green-700">{formatMoney(totalAssets)}</p>
                </div>
                <div>
                  <p className="text-xs text-gray-500 flex items-center justify-center gap-1">
                    <TrendingDown className="h-3 w-3" /> Debts
                  </p>
                  <p className="text-xl font-bold text-red-700">{formatMoney(totalDebts)}</p>
                </div>
                <div>
                  <p className="text-xs text-gray-500">Net Worth</p>
                  <p className={`text-2xl font-bold ${netWorth >= 0 ? "text-emerald-700" : "text-red-700"}`}>{formatMoney(netWorth)}</p>
                </div>
              </div>
            </CardContent>
          </Card>
        )}

        {/* Add form */}
        <Card className="mb-6 print:hidden">
          <CardHeader>
            <CardTitle className="text-xl flex items-center gap-2">
              <PlusCircle className="h-5 w-5 text-emerald-600" />
              Add an Account
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <div className="flex gap-2">
              <button
                type="button"
                onClick={() => setForm(f => ({ ...f, kind: "asset", category: ASSET_CATEGORIES[0] }))}
                className={`flex-1 px-3 py-2 rounded-md border text-sm font-medium ${form.kind === "asset" ? "bg-green-50 border-green-400 text-green-800" : "bg-white border-gray-200 text-gray-700"}`}
              >
                What I Own (Asset)
              </button>
              <button
                type="button"
                onClick={() => setForm(f => ({ ...f, kind: "debt", category: DEBT_CATEGORIES[0] }))}
                className={`flex-1 px-3 py-2 rounded-md border text-sm font-medium ${form.kind === "debt" ? "bg-red-50 border-red-400 text-red-800" : "bg-white border-gray-200 text-gray-700"}`}
              >
                What I Owe (Debt)
              </button>
            </div>
            <div>
              <Label className="text-base font-medium">Category</Label>
              <select value={form.category} onChange={e => setForm(f => ({ ...f, category: e.target.value }))} className="mt-1 w-full border border-gray-300 rounded-md px-3 py-2 text-base bg-white">
                {categories.map(c => <option key={c}>{c}</option>)}
              </select>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <Label htmlFor="acct-name" className="text-base font-medium">Name</Label>
                <Input id="acct-name" placeholder="e.g. Chase Checking, Vanguard IRA" value={form.name} onChange={e => setForm(f => ({ ...f, name: e.target.value }))} className="mt-1 text-base" />
              </div>
              <div>
                <Label htmlFor="acct-value" className="text-base font-medium">{form.kind === "asset" ? "Value" : "Balance owed"} ($)</Label>
                <Input id="acct-value" type="number" min="0" step="0.01" placeholder="0" value={form.value} onChange={e => setForm(f => ({ ...f, value: e.target.value }))} className="mt-1 text-base" />
              </div>
            </div>
            {error && <p className="text-red-600 text-sm">{error}</p>}
            <Button onClick={add} size="lg" className="w-full sm:w-auto text-base">Add to Snapshot</Button>
          </CardContent>
        </Card>

        {accounts.length > 0 && (
          <div className="mb-3 flex items-center justify-end print:hidden">
            <Button variant="outline" onClick={() => window.print()} className="gap-2">
              <Printer className="h-4 w-4" />
              Print Snapshot
            </Button>
          </div>
        )}

        {/* Print header */}
        <div className="hidden print:block mb-3 border-b pb-2">
          <h2 className="text-xl font-bold">Net Worth Snapshot</h2>
          <p className="text-xs text-gray-500">As of {formatDate(snapshotDate)}</p>
        </div>

        {/* Assets */}
        {assets.length > 0 && (
          <Card className="mb-4 print:break-inside-avoid">
            <CardHeader className="pb-2 pt-3 bg-green-50">
              <CardTitle className="text-lg text-green-800">Assets — what I own</CardTitle>
            </CardHeader>
            <CardContent className="pt-2">
              {Object.entries(assetGroups).map(([cat, items]) => (
                <div key={cat} className="mb-2">
                  <p className="text-xs font-semibold text-gray-500 uppercase tracking-wide mt-2">{cat}</p>
                  <div className="divide-y">
                    {items.map(a => (
                      <div key={a.id} className="py-1.5 flex items-center justify-between text-sm">
                        <span className="text-gray-800">{a.name}</span>
                        <div className="flex items-center gap-2">
                          <span className="font-semibold text-green-700">{formatMoney(a.value)}</span>
                          <Button variant="ghost" size="icon" onClick={() => remove(a.id)} className="h-6 w-6 text-red-400 hover:text-red-600 print:hidden">
                            <Trash2 className="h-3 w-3" />
                          </Button>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
              <div className="border-t mt-3 pt-2 flex justify-between text-base">
                <span className="font-semibold text-gray-700">Total Assets</span>
                <span className="font-bold text-green-700">{formatMoney(totalAssets)}</span>
              </div>
            </CardContent>
          </Card>
        )}

        {/* Debts */}
        {debts.length > 0 && (
          <Card className="mb-4 print:break-inside-avoid">
            <CardHeader className="pb-2 pt-3 bg-red-50">
              <CardTitle className="text-lg text-red-800">Debts — what I owe</CardTitle>
            </CardHeader>
            <CardContent className="pt-2">
              {Object.entries(debtGroups).map(([cat, items]) => (
                <div key={cat} className="mb-2">
                  <p className="text-xs font-semibold text-gray-500 uppercase tracking-wide mt-2">{cat}</p>
                  <div className="divide-y">
                    {items.map(a => (
                      <div key={a.id} className="py-1.5 flex items-center justify-between text-sm">
                        <span className="text-gray-800">{a.name}</span>
                        <div className="flex items-center gap-2">
                          <span className="font-semibold text-red-700">{formatMoney(a.value)}</span>
                          <Button variant="ghost" size="icon" onClick={() => remove(a.id)} className="h-6 w-6 text-red-400 hover:text-red-600 print:hidden">
                            <Trash2 className="h-3 w-3" />
                          </Button>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
              <div className="border-t mt-3 pt-2 flex justify-between text-base">
                <span className="font-semibold text-gray-700">Total Debts</span>
                <span className="font-bold text-red-700">{formatMoney(totalDebts)}</span>
              </div>
            </CardContent>
          </Card>
        )}

        {/* Net worth banner */}
        {accounts.length > 0 && (
          <Card className={`mb-4 print:break-inside-avoid ${netWorth >= 0 ? "bg-emerald-50 border-emerald-200" : "bg-red-50 border-red-200"}`}>
            <CardContent className="py-3 px-4 text-center">
              <p className="text-sm text-gray-600">Net Worth</p>
              <p className={`text-3xl font-bold ${netWorth >= 0 ? "text-emerald-700" : "text-red-700"}`}>{formatMoney(netWorth)}</p>
            </CardContent>
          </Card>
        )}

        {accounts.length === 0 && (
          <Card className="print:hidden">
            <CardContent className="py-10 text-center text-gray-500">
              <DollarSign className="h-10 w-10 text-gray-300 mx-auto mb-2" />
              <p className="text-lg">Empty snapshot.</p>
              <p className="text-sm mt-1">Start by adding your checking account or another asset.</p>
            </CardContent>
          </Card>
        )}

        <Card className="mt-6 bg-blue-50 border-blue-200 print:hidden">
          <CardContent className="py-3 px-4">
            <p className="text-sm text-blue-800">
              <span className="font-semibold">Quick Tip: </span>
              Take a snapshot every January and July. The number itself matters less than the trend over time.
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

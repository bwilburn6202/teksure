import { useState } from "react";
import SEOHead from "@/components/SEOHead";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { DollarSign, Trash2, Printer, PlusCircle } from "lucide-react";

interface Dividend {
  id: string;
  date: string;
  symbol: string;
  amount: number;
  notes: string;
}

export default function DividendIncomeTracker() {
  const [taxYear, setTaxYear] = useState(new Date().getFullYear().toString());
  const [dividends, setDividends] = useState<Dividend[]>([]);
  const [form, setForm] = useState({
    date: new Date().toISOString().slice(0, 10),
    symbol: "",
    amount: "",
    notes: "",
  });
  const [error, setError] = useState("");

  function add() {
    if (!form.symbol.trim()) { setError("Please enter the stock or fund symbol."); return; }
    const a = parseFloat(form.amount);
    if (!a || isNaN(a) || a <= 0) { setError("Please enter a valid dividend amount."); return; }
    setError("");
    setDividends(prev => [...prev, { id: Date.now().toString() + Math.random(), date: form.date, symbol: form.symbol.trim().toUpperCase(), amount: parseFloat(a.toFixed(2)), notes: form.notes.trim() }]);
    setForm(f => ({ ...f, symbol: "", amount: "", notes: "" }));
  }

  function remove(id: string) {
    setDividends(prev => prev.filter(d => d.id !== id));
  }

  function formatMoney(n: number) {
    return n.toLocaleString("en-US", { style: "currency", currency: "USD" });
  }

  function formatDate(s: string) {
    const [y, m, d] = s.split("-");
    return `${m}/${d}/${y}`;
  }

  // Filter to year
  const yearDivs = dividends.filter(d => d.date.startsWith(taxYear));
  const total = yearDivs.reduce((s, d) => s + d.amount, 0);

  // Group by symbol
  const bySymbol = yearDivs.reduce<Record<string, Dividend[]>>((acc, d) => {
    acc[d.symbol] = acc[d.symbol] || [];
    acc[d.symbol].push(d);
    return acc;
  }, {});

  const symbolTotals = Object.entries(bySymbol).map(([sym, items]) => ({
    symbol: sym,
    total: items.reduce((s, d) => s + d.amount, 0),
    count: items.length,
  })).sort((a, b) => b.total - a.total);

  const sorted = [...yearDivs].sort((a, b) => b.date.localeCompare(a.date));

  return (
    <div className="min-h-screen bg-gray-50">
      <SEOHead
        title="Dividend Income Tracker | TekSure"
        description="Track dividend payments by stock symbol. See yearly totals, per-stock breakdowns, and a clean summary for tax time."
      />

      <div className="max-w-2xl mx-auto px-4 py-8 print:p-4">
        <div className="mb-6">
          <div className="flex items-center gap-2 mb-1">
            <DollarSign className="h-7 w-7 text-emerald-700" />
            <h1 className="text-3xl font-bold text-gray-900">Dividend Income Tracker</h1>
          </div>
          <p className="text-gray-600 text-lg">
            Note each dividend payment as it hits your account. By year-end you have a clean total ready for your tax preparer.
          </p>
        </div>

        {/* Year + total */}
        <Card className="mb-4 print:break-inside-avoid">
          <CardContent className="py-3 px-4 flex flex-wrap items-center justify-between gap-3">
            <div className="flex items-center gap-2">
              <Label htmlFor="year" className="text-base font-medium shrink-0">Year:</Label>
              <Input id="year" type="number" min="2000" max="2099" value={taxYear} onChange={e => setTaxYear(e.target.value)} className="text-base w-24" />
            </div>
            <div className="text-right">
              <p className="text-xs text-gray-500">Total dividends {taxYear}</p>
              <p className="text-2xl font-bold text-emerald-700">{formatMoney(total)}</p>
            </div>
          </CardContent>
        </Card>

        {/* By stock */}
        {symbolTotals.length > 0 && (
          <Card className="mb-4 print:break-inside-avoid">
            <CardHeader className="pb-2 pt-3">
              <CardTitle className="text-base">By Stock / Fund</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-1">
                {symbolTotals.map(s => (
                  <div key={s.symbol} className="flex items-center justify-between py-1 text-sm">
                    <span className="font-mono font-semibold text-gray-800">{s.symbol}</span>
                    <div className="flex items-center gap-3">
                      <span className="text-xs text-gray-500">{s.count} payment{s.count !== 1 ? "s" : ""}</span>
                      <span className="font-bold text-emerald-700">{formatMoney(s.total)}</span>
                    </div>
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
              <PlusCircle className="h-5 w-5 text-emerald-700" />
              Log a Dividend
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              <div>
                <Label htmlFor="d-date" className="text-base font-medium">Date</Label>
                <Input id="d-date" type="date" value={form.date} onChange={e => setForm(f => ({ ...f, date: e.target.value }))} className="mt-1 text-base" />
              </div>
              <div>
                <Label htmlFor="d-sym" className="text-base font-medium">Symbol</Label>
                <Input id="d-sym" placeholder="e.g. VTI, AAPL, T" value={form.symbol} onChange={e => setForm(f => ({ ...f, symbol: e.target.value.toUpperCase() }))} className="mt-1 text-base font-mono" />
              </div>
              <div>
                <Label htmlFor="d-amt" className="text-base font-medium">Amount ($)</Label>
                <Input id="d-amt" type="number" min="0" step="0.01" placeholder="0.00" value={form.amount} onChange={e => setForm(f => ({ ...f, amount: e.target.value }))} className="mt-1 text-base" />
              </div>
            </div>
            <div>
              <Label htmlFor="d-notes" className="text-base font-medium">Notes (optional)</Label>
              <Input id="d-notes" placeholder="e.g. Q1 dividend, reinvested" value={form.notes} onChange={e => setForm(f => ({ ...f, notes: e.target.value }))} className="mt-1 text-base" />
            </div>
            {error && <p className="text-red-600 text-sm">{error}</p>}
            <Button onClick={add} size="lg" className="w-full sm:w-auto text-base">Log Dividend</Button>
          </CardContent>
        </Card>

        {yearDivs.length > 0 && (
          <div className="mb-3 flex items-center justify-end print:hidden">
            <Button variant="outline" onClick={() => window.print()} className="gap-2">
              <Printer className="h-4 w-4" />
              Print {taxYear} Summary
            </Button>
          </div>
        )}

        {sorted.length === 0 ? (
          <Card className="print:hidden">
            <CardContent className="py-10 text-center text-gray-500">
              <DollarSign className="h-10 w-10 text-gray-300 mx-auto mb-2" />
              <p className="text-lg">No dividends logged for {taxYear}.</p>
              <p className="text-sm mt-1">Open your brokerage statement and log this month's payments.</p>
            </CardContent>
          </Card>
        ) : (
          <Card>
            <CardHeader className="pb-2 pt-3">
              <CardTitle className="text-lg">{taxYear} Payments</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="divide-y">
                {sorted.map(d => (
                  <div key={d.id} className="py-2 flex items-center justify-between gap-2 text-sm print:break-inside-avoid">
                    <div className="flex items-center gap-3 flex-1 min-w-0">
                      <span className="text-xs text-gray-500 w-20 shrink-0">{formatDate(d.date)}</span>
                      <Badge variant="secondary" className="text-xs font-mono">{d.symbol}</Badge>
                      {d.notes && <span className="text-xs text-gray-500 italic truncate">{d.notes}</span>}
                    </div>
                    <div className="flex items-center gap-2 shrink-0">
                      <span className="font-semibold text-emerald-700">{formatMoney(d.amount)}</span>
                      <Button variant="ghost" size="icon" onClick={() => remove(d.id)} className="h-6 w-6 text-red-400 hover:text-red-600 print:hidden">
                        <Trash2 className="h-3 w-3" />
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        )}

        <Card className="mt-6 bg-blue-50 border-blue-200 print:hidden">
          <CardContent className="py-3 px-4">
            <p className="text-sm text-blue-800">
              <span className="font-semibold">Tax tip: </span>
              Your brokerage will send a 1099-DIV in late January or February. Use this tracker to verify the numbers match — typos do happen.
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

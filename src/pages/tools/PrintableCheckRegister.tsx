import { useState } from "react";
import SEOHead from "@/components/SEOHead";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { FileText, Trash2, Printer, PlusCircle, RotateCcw } from "lucide-react";

type EntryType = "withdrawal" | "deposit";

interface Entry {
  id: string;
  date: string;
  checkNumber: string;
  payee: string;
  type: EntryType;
  amount: number;
  cleared: boolean;
}

export default function PrintableCheckRegister() {
  const [startingBalance, setStartingBalance] = useState("");
  const [entries, setEntries] = useState<Entry[]>([]);
  const [form, setForm] = useState({
    date: new Date().toISOString().slice(0, 10),
    checkNumber: "",
    payee: "",
    type: "withdrawal" as EntryType,
    amount: "",
  });
  const [error, setError] = useState("");

  function add() {
    if (!form.payee.trim()) { setError("Please enter who the check is to (or who deposited)."); return; }
    const a = parseFloat(form.amount);
    if (!a || isNaN(a) || a <= 0) { setError("Please enter a valid amount."); return; }
    setError("");
    setEntries(prev => [
      ...prev,
      {
        id: Date.now().toString() + Math.random(),
        date: form.date,
        checkNumber: form.checkNumber.trim(),
        payee: form.payee.trim(),
        type: form.type,
        amount: parseFloat(a.toFixed(2)),
        cleared: false,
      },
    ]);
    setForm(f => ({ ...f, checkNumber: "", payee: "", amount: "" }));
  }

  function remove(id: string) {
    setEntries(prev => prev.filter(e => e.id !== id));
  }

  function toggleCleared(id: string) {
    setEntries(prev => prev.map(e => e.id === id ? { ...e, cleared: !e.cleared } : e));
  }

  function reset() {
    setStartingBalance("");
    setEntries([]);
  }

  function formatMoney(n: number) {
    return n.toLocaleString("en-US", { style: "currency", currency: "USD" });
  }

  function formatDate(s: string) {
    const [y, m, d] = s.split("-");
    return `${m}/${d}/${y}`;
  }

  // Compute running balance
  const sorted = [...entries].sort((a, b) => a.date.localeCompare(b.date));
  const start = parseFloat(startingBalance) || 0;
  const withRunning = sorted.reduce<{ entries: (Entry & { balance: number })[]; balance: number }>(
    (acc, e) => {
      const newBal = e.type === "deposit" ? acc.balance + e.amount : acc.balance - e.amount;
      acc.entries.push({ ...e, balance: parseFloat(newBal.toFixed(2)) });
      acc.balance = newBal;
      return acc;
    },
    { entries: [], balance: start },
  );
  const currentBalance = withRunning.balance;
  const clearedTotal = entries.filter(e => e.cleared).reduce((s, e) => s + (e.type === "deposit" ? e.amount : -e.amount), 0);
  const reconciledBalance = parseFloat((start + clearedTotal).toFixed(2));

  return (
    <div className="min-h-screen bg-gray-50">
      <SEOHead
        title="Printable Check Register | TekSure"
        description="Track checks, withdrawals, and deposits. Auto-calculates running balance and reconciled balance. Print a fresh register page anytime."
      />

      <div className="max-w-3xl mx-auto px-4 py-8 print:p-4">
        <div className="mb-6 print:hidden">
          <div className="flex items-center gap-2 mb-1">
            <FileText className="h-7 w-7 text-emerald-700" />
            <h1 className="text-3xl font-bold text-gray-900">Check Register</h1>
          </div>
          <p className="text-gray-600 text-lg">
            Track every check, withdrawal, and deposit. The tool keeps the running balance for you.
          </p>
        </div>

        {/* Starting balance + balance display */}
        <Card className="mb-4 print:shadow-none">
          <CardContent className="py-3 px-4 grid grid-cols-1 sm:grid-cols-3 gap-3 items-end">
            <div>
              <Label htmlFor="start-balance" className="text-base font-medium">Starting Balance</Label>
              <Input id="start-balance" type="number" step="0.01" placeholder="0.00" value={startingBalance} onChange={e => setStartingBalance(e.target.value)} className="mt-1 text-base" />
            </div>
            <div className="text-center">
              <p className="text-xs text-gray-500">Current Balance</p>
              <p className={`text-2xl font-bold ${currentBalance >= 0 ? "text-emerald-700" : "text-red-700"}`}>{formatMoney(currentBalance)}</p>
            </div>
            <div className="text-center">
              <p className="text-xs text-gray-500">Reconciled (cleared only)</p>
              <p className="text-xl font-bold text-blue-700">{formatMoney(reconciledBalance)}</p>
            </div>
          </CardContent>
        </Card>

        {/* Add form */}
        <Card className="mb-4 print:hidden">
          <CardHeader className="pb-2">
            <CardTitle className="text-lg flex items-center gap-2">
              <PlusCircle className="h-5 w-5 text-emerald-600" />
              Add Entry
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <div className="flex gap-2">
              <button
                type="button"
                onClick={() => setForm(f => ({ ...f, type: "withdrawal" }))}
                className={`flex-1 px-3 py-2 rounded-md border text-sm font-medium ${form.type === "withdrawal" ? "bg-red-50 border-red-300 text-red-800" : "bg-white border-gray-200 text-gray-700"}`}
              >
                Money out (check / withdrawal)
              </button>
              <button
                type="button"
                onClick={() => setForm(f => ({ ...f, type: "deposit" }))}
                className={`flex-1 px-3 py-2 rounded-md border text-sm font-medium ${form.type === "deposit" ? "bg-green-50 border-green-300 text-green-800" : "bg-white border-gray-200 text-gray-700"}`}
              >
                Money in (deposit)
              </button>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-4 gap-2">
              <Input type="date" value={form.date} onChange={e => setForm(f => ({ ...f, date: e.target.value }))} className="text-base" />
              <Input placeholder={form.type === "withdrawal" ? "Check #" : "Source"} value={form.checkNumber} onChange={e => setForm(f => ({ ...f, checkNumber: e.target.value }))} className="text-base" />
              <Input placeholder={form.type === "withdrawal" ? "Payee" : "From"} value={form.payee} onChange={e => setForm(f => ({ ...f, payee: e.target.value }))} className="text-base sm:col-span-1" />
              <Input type="number" step="0.01" min="0" placeholder="Amount" value={form.amount} onChange={e => setForm(f => ({ ...f, amount: e.target.value }))} className="text-base" />
            </div>
            {error && <p className="text-red-600 text-sm">{error}</p>}
            <Button onClick={add} className="text-base">Add Entry</Button>
          </CardContent>
        </Card>

        {/* Register */}
        {entries.length > 0 && (
          <div className="mb-3 flex items-center justify-end gap-2 print:hidden">
            <Button variant="outline" onClick={() => window.print()} className="gap-2">
              <Printer className="h-4 w-4" />
              Print Register
            </Button>
            <Button variant="ghost" onClick={reset} className="gap-2 text-gray-500">
              <RotateCcw className="h-4 w-4" />
              Reset
            </Button>
          </div>
        )}

        {sorted.length === 0 ? (
          <Card className="print:hidden">
            <CardContent className="py-10 text-center text-gray-500">
              <FileText className="h-10 w-10 text-gray-300 mx-auto mb-2" />
              <p className="text-lg">No entries yet.</p>
              <p className="text-sm mt-1">Set your starting balance and add your first entry above.</p>
            </CardContent>
          </Card>
        ) : (
          <Card>
            <CardContent className="px-2 py-2 overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b text-xs text-gray-500 uppercase">
                    <th className="text-left py-2 px-2">Date</th>
                    <th className="text-left py-2 px-2">#</th>
                    <th className="text-left py-2 px-2">Payee / Source</th>
                    <th className="text-right py-2 px-2">Out</th>
                    <th className="text-right py-2 px-2">In</th>
                    <th className="text-right py-2 px-2">Balance</th>
                    <th className="text-center py-2 px-2 print:hidden">✓</th>
                    <th className="print:hidden"></th>
                  </tr>
                </thead>
                <tbody>
                  {withRunning.entries.map(e => (
                    <tr key={e.id} className={`border-b ${e.cleared ? "bg-blue-50/30" : ""}`}>
                      <td className="py-2 px-2 text-gray-700">{formatDate(e.date)}</td>
                      <td className="py-2 px-2 text-gray-500">{e.checkNumber || "—"}</td>
                      <td className="py-2 px-2 font-medium text-gray-900 truncate max-w-[180px]">{e.payee}</td>
                      <td className="py-2 px-2 text-right text-red-700">{e.type === "withdrawal" ? formatMoney(e.amount) : ""}</td>
                      <td className="py-2 px-2 text-right text-green-700">{e.type === "deposit" ? formatMoney(e.amount) : ""}</td>
                      <td className={`py-2 px-2 text-right font-semibold ${e.balance >= 0 ? "text-gray-900" : "text-red-700"}`}>{formatMoney(e.balance)}</td>
                      <td className="py-2 px-2 text-center print:hidden">
                        <input type="checkbox" checked={e.cleared} onChange={() => toggleCleared(e.id)} aria-label="Cleared" />
                      </td>
                      <td className="py-2 px-2 print:hidden">
                        <Button variant="ghost" size="icon" onClick={() => remove(e.id)} className="h-6 w-6 text-red-400 hover:text-red-600">
                          <Trash2 className="h-3 w-3" />
                        </Button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </CardContent>
          </Card>
        )}

        <Card className="mt-6 bg-blue-50 border-blue-200 print:hidden">
          <CardContent className="py-3 px-4">
            <p className="text-sm text-blue-800">
              <span className="font-semibold">Quick Tip: </span>
              Check off entries (✓) as they show up on your bank statement. The "reconciled" balance should match the bank's running balance.
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

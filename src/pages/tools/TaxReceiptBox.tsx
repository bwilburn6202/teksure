import { useState } from "react";
import SEOHead from "@/components/SEOHead";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Receipt, Trash2, Printer, PlusCircle } from "lucide-react";

type Category = "Medical" | "Charitable" | "Property tax" | "Mortgage interest" | "Business / self-employed" | "State / local tax" | "Casualty loss" | "Other";

interface ReceiptEntry {
  id: string;
  date: string;
  category: Category;
  payee: string;
  amount: number;
  notes: string;
  paperOrDigital: "paper" | "digital";
}

const CATEGORIES: Category[] = ["Medical", "Charitable", "Property tax", "Mortgage interest", "Business / self-employed", "State / local tax", "Casualty loss", "Other"];

export default function TaxReceiptBox() {
  const [taxYear, setTaxYear] = useState(new Date().getFullYear().toString());
  const [receipts, setReceipts] = useState<ReceiptEntry[]>([]);
  const [form, setForm] = useState({
    date: new Date().toISOString().slice(0, 10),
    category: "Medical" as Category,
    payee: "",
    amount: "",
    notes: "",
    paperOrDigital: "paper" as "paper" | "digital",
  });
  const [error, setError] = useState("");

  function add() {
    if (!form.payee.trim()) { setError("Please enter who paid or who you paid."); return; }
    const a = parseFloat(form.amount);
    if (!a || isNaN(a) || a <= 0) { setError("Please enter a valid amount."); return; }
    setError("");
    setReceipts(prev => [...prev, { id: Date.now().toString() + Math.random(), date: form.date, category: form.category, payee: form.payee.trim(), amount: parseFloat(a.toFixed(2)), notes: form.notes.trim(), paperOrDigital: form.paperOrDigital }]);
    setForm(f => ({ ...f, payee: "", amount: "", notes: "" }));
  }

  function remove(id: string) {
    setReceipts(prev => prev.filter(r => r.id !== id));
  }

  function formatMoney(n: number) {
    return n.toLocaleString("en-US", { style: "currency", currency: "USD" });
  }

  function formatDate(s: string) {
    const [y, m, d] = s.split("-");
    return `${m}/${d}/${y}`;
  }

  // Filter to tax year
  const yearReceipts = receipts.filter(r => r.date.startsWith(taxYear));
  const grouped = CATEGORIES.reduce<Record<Category, ReceiptEntry[]>>((acc, c) => {
    const items = yearReceipts.filter(r => r.category === c);
    if (items.length > 0) acc[c] = items;
    return acc;
  }, {} as Record<Category, ReceiptEntry[]>);

  const total = yearReceipts.reduce((s, r) => s + r.amount, 0);

  return (
    <div className="min-h-screen bg-gray-50">
      <SEOHead
        title="Tax Receipt Box | TekSure"
        description="Track tax-deductible receipts year-round. Group by category, see yearly totals, print a clean summary for your tax preparer."
      />

      <div className="max-w-2xl mx-auto px-4 py-8 print:p-4">
        <div className="mb-6">
          <div className="flex items-center gap-2 mb-1">
            <Receipt className="h-7 w-7 text-emerald-700" />
            <h1 className="text-3xl font-bold text-gray-900">Tax Receipt Box</h1>
          </div>
          <p className="text-gray-600 text-lg">
            Drop a receipt in here every time you pay something tax-deductible. By April you have an organized total.
          </p>
        </div>

        {/* Year + summary */}
        <Card className="mb-4 print:break-inside-avoid">
          <CardContent className="py-3 px-4 flex flex-wrap items-center justify-between gap-3">
            <div className="flex items-center gap-2">
              <Label htmlFor="year" className="text-base font-medium shrink-0">Tax year:</Label>
              <Input id="year" type="number" min="2000" max="2099" value={taxYear} onChange={e => setTaxYear(e.target.value)} className="text-base w-24" />
            </div>
            <div className="text-right">
              <p className="text-xs text-gray-500">Total {taxYear}</p>
              <p className="text-2xl font-bold text-emerald-700">{formatMoney(total)}</p>
            </div>
          </CardContent>
        </Card>

        {/* Add form */}
        <Card className="mb-6 print:hidden">
          <CardHeader>
            <CardTitle className="text-xl flex items-center gap-2">
              <PlusCircle className="h-5 w-5 text-emerald-700" />
              Add a Receipt
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <Label htmlFor="r-date" className="text-base font-medium">Date</Label>
                <Input id="r-date" type="date" value={form.date} onChange={e => setForm(f => ({ ...f, date: e.target.value }))} className="mt-1 text-base" />
              </div>
              <div>
                <Label htmlFor="r-amount" className="text-base font-medium">Amount ($)</Label>
                <Input id="r-amount" type="number" min="0" step="0.01" placeholder="0.00" value={form.amount} onChange={e => setForm(f => ({ ...f, amount: e.target.value }))} className="mt-1 text-base" />
              </div>
            </div>
            <div>
              <Label className="text-base font-medium">Category</Label>
              <select value={form.category} onChange={e => setForm(f => ({ ...f, category: e.target.value as Category }))} className="mt-1 w-full border border-gray-300 rounded-md px-3 py-2 text-base bg-white">
                {CATEGORIES.map(c => <option key={c}>{c}</option>)}
              </select>
            </div>
            <div>
              <Label htmlFor="r-payee" className="text-base font-medium">Paid to / from</Label>
              <Input id="r-payee" placeholder="e.g. Walgreens, American Red Cross, county treasurer" value={form.payee} onChange={e => setForm(f => ({ ...f, payee: e.target.value }))} className="mt-1 text-base" />
            </div>
            <div>
              <Label className="text-base font-medium">Receipt is...</Label>
              <div className="flex gap-2 mt-1">
                <button type="button" onClick={() => setForm(f => ({ ...f, paperOrDigital: "paper" }))} className={`flex-1 px-3 py-2 rounded-md border text-sm font-medium ${form.paperOrDigital === "paper" ? "bg-emerald-50 border-emerald-300 text-emerald-800" : "bg-white border-gray-200 text-gray-700"}`}>📄 Paper (in box)</button>
                <button type="button" onClick={() => setForm(f => ({ ...f, paperOrDigital: "digital" }))} className={`flex-1 px-3 py-2 rounded-md border text-sm font-medium ${form.paperOrDigital === "digital" ? "bg-emerald-50 border-emerald-300 text-emerald-800" : "bg-white border-gray-200 text-gray-700"}`}>📱 Digital (saved)</button>
              </div>
            </div>
            <div>
              <Label htmlFor="r-notes" className="text-base font-medium">Notes (optional)</Label>
              <Input id="r-notes" placeholder="e.g. Prescription co-pay, mileage 12 miles" value={form.notes} onChange={e => setForm(f => ({ ...f, notes: e.target.value }))} className="mt-1 text-base" />
            </div>
            {error && <p className="text-red-600 text-sm">{error}</p>}
            <Button onClick={add} size="lg" className="w-full sm:w-auto text-base">Add Receipt</Button>
          </CardContent>
        </Card>

        {yearReceipts.length > 0 && (
          <div className="mb-3 flex items-center justify-end print:hidden">
            <Button variant="outline" onClick={() => window.print()} className="gap-2">
              <Printer className="h-4 w-4" />
              Print Tax Summary
            </Button>
          </div>
        )}

        {/* Print header */}
        <div className="hidden print:block mb-3 border-b pb-2">
          <h2 className="text-xl font-bold">{taxYear} Tax Receipt Summary</h2>
          <p className="text-xs text-gray-500">Total: {formatMoney(total)}</p>
        </div>

        {yearReceipts.length === 0 ? (
          <Card className="print:hidden">
            <CardContent className="py-10 text-center text-gray-500">
              <Receipt className="h-10 w-10 text-gray-300 mx-auto mb-2" />
              <p className="text-lg">No receipts logged for {taxYear}.</p>
              <p className="text-sm mt-1">Start with your most recent medical or charity payment.</p>
            </CardContent>
          </Card>
        ) : (
          <div className="space-y-3">
            {Object.entries(grouped).map(([cat, items]) => {
              const catTotal = items.reduce((s, r) => s + r.amount, 0);
              return (
                <Card key={cat} className="print:break-inside-avoid">
                  <CardHeader className="pb-2 pt-3 bg-emerald-50">
                    <CardTitle className="text-base text-emerald-800 flex items-center justify-between">
                      <span>{cat}</span>
                      <Badge variant="secondary" className="text-xs">{formatMoney(catTotal)}</Badge>
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="pt-2">
                    <div className="divide-y">
                      {items.map(r => (
                        <div key={r.id} className="py-2 flex items-start justify-between gap-2">
                          <div className="flex-1 min-w-0">
                            <p className="text-sm font-medium text-gray-900">{r.payee}</p>
                            <p className="text-xs text-gray-500">{formatDate(r.date)} · {r.paperOrDigital === "paper" ? "📄 Paper" : "📱 Digital"}</p>
                            {r.notes && <p className="text-xs text-gray-500 italic mt-0.5">{r.notes}</p>}
                          </div>
                          <div className="flex items-center gap-2 shrink-0">
                            <span className="font-semibold text-emerald-700">{formatMoney(r.amount)}</span>
                            <Button variant="ghost" size="icon" onClick={() => remove(r.id)} className="h-6 w-6 text-red-400 hover:text-red-600 print:hidden">
                              <Trash2 className="h-3 w-3" />
                            </Button>
                          </div>
                        </div>
                      ))}
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
              Keep one folder labeled "{taxYear} Taxes" by your desk. Whenever you log a receipt here, drop the paper into that folder. By April, you have everything in one place.
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

import { useState } from "react";
import SEOHead from "@/components/SEOHead";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Gem, Trash2, Printer, PlusCircle } from "lucide-react";

type Status = "Inventory" | "For sale" | "Sold";

interface Item {
  id: string;
  description: string;
  acquired: string;
  paid: number;
  sold: number;
  fees: number;
  status: Status;
  source: string;
  note: string;
}

export default function AntiqueSaleTracker() {
  const [items, setItems] = useState<Item[]>([]);
  const [form, setForm] = useState({
    description: "",
    acquired: new Date().toISOString().slice(0, 10),
    paid: "",
    sold: "",
    fees: "",
    status: "Inventory" as Status,
    source: "",
    note: "",
  });

  function add() {
    const paid = parseFloat(form.paid) || 0;
    if (!form.description.trim() || paid <= 0) return;
    setItems(prev => [...prev, {
      id: Date.now().toString() + Math.random(),
      description: form.description.trim(),
      acquired: form.acquired,
      paid,
      sold: parseFloat(form.sold) || 0,
      fees: parseFloat(form.fees) || 0,
      status: form.status,
      source: form.source.trim(),
      note: form.note.trim(),
    }]);
    setForm({ description: "", acquired: new Date().toISOString().slice(0, 10), paid: "", sold: "", fees: "", status: "Inventory", source: "", note: "" });
  }

  function remove(id: string) {
    setItems(prev => prev.filter(i => i.id !== id));
  }

  function markSold(id: string, sold: string, fees: string) {
    const s = parseFloat(sold) || 0;
    const f = parseFloat(fees) || 0;
    setItems(prev => prev.map(i => i.id === id ? { ...i, sold: s, fees: f, status: "Sold" } : i));
  }

  function fmt(n: number) { return n.toLocaleString("en-US", { style: "currency", currency: "USD" }); }

  const totalSpent = items.reduce((sum, i) => sum + i.paid, 0);
  const totalRevenue = items.filter(i => i.status === "Sold").reduce((sum, i) => sum + i.sold - i.fees, 0);
  const totalCostBasis = items.filter(i => i.status === "Sold").reduce((sum, i) => sum + i.paid, 0);
  const profit = totalRevenue - totalCostBasis;
  const inventoryValue = items.filter(i => i.status !== "Sold").reduce((sum, i) => sum + i.paid, 0);

  return (
    <div className="min-h-screen bg-gray-50">
      <SEOHead title="Antique Sale Tracker | TekSure" description="Track antique purchases and resales. See your total invested, inventory value, sold revenue, and lifetime profit. Print a report for taxes or insurance." />
      <div className="max-w-2xl mx-auto px-4 py-8 print:p-4">
        <div className="mb-6">
          <div className="flex items-center gap-2 mb-1">
            <Gem className="h-7 w-7 text-violet-700" />
            <h1 className="text-3xl font-bold text-gray-900">Antique Sale Tracker</h1>
          </div>
          <p className="text-gray-600 text-lg">A clean record of what you bought, what you paid, what you sold it for. Real numbers for taxes, insurance, and estate planning.</p>
        </div>

        {items.length > 0 && (
          <div className="grid grid-cols-2 gap-3 mb-4">
            <Card><CardContent className="py-3 px-3 text-center"><p className="text-xs text-gray-500">Inventory value</p><p className="text-xl font-bold text-violet-700">{fmt(inventoryValue)}</p></CardContent></Card>
            <Card><CardContent className="py-3 px-3 text-center"><p className="text-xs text-gray-500">Lifetime profit</p><p className={`text-xl font-bold ${profit >= 0 ? "text-emerald-700" : "text-rose-700"}`}>{fmt(profit)}</p></CardContent></Card>
            <Card><CardContent className="py-3 px-3 text-center"><p className="text-xs text-gray-500">Total spent</p><p className="text-sm font-semibold text-gray-900">{fmt(totalSpent)}</p></CardContent></Card>
            <Card><CardContent className="py-3 px-3 text-center"><p className="text-xs text-gray-500">Total resale revenue</p><p className="text-sm font-semibold text-gray-900">{fmt(totalRevenue)}</p></CardContent></Card>
          </div>
        )}

        <Card className="mb-4 print:hidden">
          <CardContent className="py-4 px-4 space-y-2">
            <h2 className="text-lg font-semibold flex items-center gap-2"><PlusCircle className="h-5 w-5 text-violet-700" />Add an item</h2>
            <Input value={form.description} onChange={e => setForm(f => ({ ...f, description: e.target.value }))} placeholder="Description (e.g. Hummel figurine - Apple Tree Boy)" />
            <div className="grid grid-cols-2 gap-2">
              <Input type="date" value={form.acquired} onChange={e => setForm(f => ({ ...f, acquired: e.target.value }))} />
              <Input type="number" step="0.01" placeholder="What you paid $" value={form.paid} onChange={e => setForm(f => ({ ...f, paid: e.target.value }))} />
            </div>
            <Input value={form.source} onChange={e => setForm(f => ({ ...f, source: e.target.value }))} placeholder="Where acquired (Estate sale, eBay, gift...)" />
            <Input value={form.note} onChange={e => setForm(f => ({ ...f, note: e.target.value }))} placeholder="Notes (condition, provenance, restoration)" />
            <select value={form.status} onChange={e => setForm(f => ({ ...f, status: e.target.value as Status }))} className="w-full border border-gray-300 rounded-md px-3 py-2 text-base bg-white">
              <option>Inventory</option>
              <option>For sale</option>
              <option>Sold</option>
            </select>
            {form.status === "Sold" && (
              <div className="grid grid-cols-2 gap-2">
                <Input type="number" step="0.01" placeholder="Sold for $" value={form.sold} onChange={e => setForm(f => ({ ...f, sold: e.target.value }))} />
                <Input type="number" step="0.01" placeholder="Selling fees $" value={form.fees} onChange={e => setForm(f => ({ ...f, fees: e.target.value }))} />
              </div>
            )}
            <Button onClick={add} className="bg-violet-700 hover:bg-violet-800">Add Item</Button>
          </CardContent>
        </Card>

        {items.length > 0 && (
          <Card>
            <CardContent className="py-4 px-4">
              <h2 className="text-lg font-semibold mb-2 flex items-center justify-between">
                <span>Items ({items.length})</span>
                <Button variant="outline" size="sm" onClick={() => window.print()} className="gap-1 print:hidden">
                  <Printer className="h-3 w-3" />Print Report
                </Button>
              </h2>
              <div className="divide-y">
                {[...items].reverse().map(it => (
                  <div key={it.id} className="py-3 text-sm">
                    <div className="flex items-start justify-between gap-2">
                      <div className="flex-1 min-w-0">
                        <p className="font-semibold text-gray-900">{it.description}</p>
                        <p className="text-xs text-gray-500">Acquired {it.acquired}{it.source ? ` from ${it.source}` : ""}</p>
                        {it.note && <p className="text-xs text-gray-600 italic mt-0.5">{it.note}</p>}
                      </div>
                      <Button variant="ghost" size="icon" onClick={() => remove(it.id)} className="h-6 w-6 text-red-400 hover:text-red-600 print:hidden">
                        <Trash2 className="h-3 w-3" />
                      </Button>
                    </div>
                    <div className="mt-1 flex flex-wrap items-center gap-2">
                      <Badge variant="outline" className={it.status === "Sold" ? "bg-emerald-50 text-emerald-700 border-emerald-200" : it.status === "For sale" ? "bg-amber-50 text-amber-700 border-amber-200" : "bg-gray-100"}>
                        {it.status}
                      </Badge>
                      <span className="text-xs text-gray-500">Paid: <span className="font-semibold text-gray-900">{fmt(it.paid)}</span></span>
                      {it.status === "Sold" && (
                        <>
                          <span className="text-xs text-gray-500">Sold: <span className="font-semibold text-emerald-700">{fmt(it.sold)}</span></span>
                          {it.fees > 0 && <span className="text-xs text-gray-500">Fees: {fmt(it.fees)}</span>}
                          <span className="text-xs text-gray-500">Profit: <span className={`font-bold ${it.sold - it.fees - it.paid >= 0 ? "text-emerald-700" : "text-rose-700"}`}>{fmt(it.sold - it.fees - it.paid)}</span></span>
                        </>
                      )}
                    </div>
                    {it.status === "For sale" && (
                      <SellNowRow id={it.id} markSold={markSold} />
                    )}
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        )}

        <Card className="mt-4 bg-blue-50 border-blue-200">
          <CardContent className="py-3 px-4">
            <p className="text-sm text-blue-900"><span className="font-semibold">Tax note:</span> For collectibles held over a year, the federal long-term capital gains rate is up to 28 percent — higher than the 15-20 percent rate for stocks. Keep receipts. For seniors below the standard-deduction income threshold, most occasional sales are not taxable. Consult a CPA or AARP Tax-Aide.</p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

function SellNowRow({ id, markSold }: { id: string; markSold: (id: string, sold: string, fees: string) => void }) {
  const [sold, setSold] = useState("");
  const [fees, setFees] = useState("");
  return (
    <div className="mt-2 flex gap-2 items-center print:hidden">
      <Input type="number" step="0.01" placeholder="Sold price $" value={sold} onChange={e => setSold(e.target.value)} className="h-8 text-sm flex-1" />
      <Input type="number" step="0.01" placeholder="Fees $" value={fees} onChange={e => setFees(e.target.value)} className="h-8 text-sm w-24" />
      <Button size="sm" onClick={() => markSold(id, sold, fees)} disabled={!sold} className="h-8 bg-emerald-600 hover:bg-emerald-700">Mark Sold</Button>
    </div>
  );
}

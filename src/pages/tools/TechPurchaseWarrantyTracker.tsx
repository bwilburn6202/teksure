import { useState } from "react";
import SEOHead from "@/components/SEOHead";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Receipt, Trash2, Printer, PlusCircle, ShieldCheck } from "lucide-react";

interface Purchase {
  id: string;
  item: string;
  store: string;
  purchaseDate: string;
  price: number;
  warrantyMonths: number;
  receiptLocation: string;
  notes: string;
}

const STORES = ["Amazon", "Best Buy", "Walmart", "Costco", "Home Depot", "Lowe's", "Target", "Sam's Club", "Apple", "Other"];
const COMMON_WARRANTY = [{ label: "30 days", v: 1 }, { label: "90 days", v: 3 }, { label: "1 year", v: 12 }, { label: "2 years", v: 24 }, { label: "3 years", v: 36 }, { label: "5 years", v: 60 }, { label: "10 years", v: 120 }];

export default function TechPurchaseWarrantyTracker() {
  const [purchases, setPurchases] = useState<Purchase[]>([]);
  const [form, setForm] = useState({
    item: "",
    store: "Amazon",
    purchaseDate: new Date().toISOString().slice(0, 10),
    price: "",
    warrantyMonths: "12",
    receiptLocation: "",
    notes: "",
  });
  const [error, setError] = useState("");

  function add() {
    if (!form.item.trim()) { setError("Please enter the item name."); return; }
    const months = parseInt(form.warrantyMonths, 10);
    if (!months || months < 0 || months > 240) { setError("Please enter a valid warranty length in months."); return; }
    setError("");
    const price = parseFloat(form.price);
    setPurchases(prev => [
      ...prev,
      {
        id: Date.now().toString() + Math.random(),
        item: form.item.trim(),
        store: form.store,
        purchaseDate: form.purchaseDate,
        price: !isNaN(price) ? price : 0,
        warrantyMonths: months,
        receiptLocation: form.receiptLocation.trim(),
        notes: form.notes.trim(),
      },
    ]);
    setForm(f => ({ ...f, item: "", price: "", receiptLocation: "", notes: "" }));
  }

  function remove(id: string) {
    setPurchases(prev => prev.filter(p => p.id !== id));
  }

  function warrantyEnds(p: Purchase): Date {
    const d = new Date(p.purchaseDate);
    d.setMonth(d.getMonth() + p.warrantyMonths);
    return d;
  }

  function daysLeft(p: Purchase): number {
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    const end = warrantyEnds(p);
    end.setHours(0, 0, 0, 0);
    return Math.ceil((end.getTime() - today.getTime()) / (1000 * 60 * 60 * 24));
  }

  function status(p: Purchase) {
    const d = daysLeft(p);
    if (d < 0) return { label: "Expired", color: "bg-gray-100 text-gray-600" };
    if (d <= 30) return { label: `${d} days left`, color: "bg-amber-100 text-amber-700" };
    if (d <= 90) return { label: `${Math.round(d / 30)} months left`, color: "bg-blue-100 text-blue-700" };
    return { label: "Covered", color: "bg-green-100 text-green-700" };
  }

  function formatDate(d: Date | string) {
    const date = typeof d === "string" ? new Date(d) : d;
    return date.toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" });
  }

  function formatMoney(n: number) {
    return n.toLocaleString("en-US", { style: "currency", currency: "USD" });
  }

  const sorted = [...purchases].sort((a, b) => daysLeft(a) - daysLeft(b));
  const active = purchases.filter(p => daysLeft(p) >= 0).length;
  const expiringSoon = purchases.filter(p => { const d = daysLeft(p); return d >= 0 && d <= 30; }).length;

  return (
    <div className="min-h-screen bg-gray-50">
      <SEOHead
        title="Warranty & Purchase Tracker | TekSure"
        description="Track every major purchase with warranty length and receipt location. See what is still covered and what is about to expire."
      />

      <div className="max-w-2xl mx-auto px-4 py-8 print:p-4">
        <div className="mb-6">
          <div className="flex items-center gap-2 mb-1">
            <Receipt className="h-7 w-7 text-blue-600" />
            <h1 className="text-3xl font-bold text-gray-900">Warranty &amp; Purchase Tracker</h1>
          </div>
          <p className="text-gray-600 text-lg">
            Note every major purchase with the warranty length. The tool tells you exactly when each warranty ends.
          </p>
        </div>

        {/* Stats */}
        {purchases.length > 0 && (
          <div className="grid grid-cols-3 gap-3 mb-4">
            <Card>
              <CardContent className="py-3 px-3 text-center">
                <p className="text-xs text-gray-500">Items tracked</p>
                <p className="text-xl font-bold text-blue-700">{purchases.length}</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="py-3 px-3 text-center">
                <p className="text-xs text-gray-500">Under warranty</p>
                <p className="text-xl font-bold text-green-700">{active}</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="py-3 px-3 text-center">
                <p className="text-xs text-gray-500">Expiring in 30 days</p>
                <p className="text-xl font-bold text-amber-700">{expiringSoon}</p>
              </CardContent>
            </Card>
          </div>
        )}

        {/* Add form */}
        <Card className="mb-6 print:hidden">
          <CardHeader>
            <CardTitle className="text-xl flex items-center gap-2">
              <PlusCircle className="h-5 w-5 text-blue-600" />
              Track a Purchase
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <div>
              <Label htmlFor="item" className="text-base font-medium">Item</Label>
              <Input id="item" placeholder="e.g. Samsung 65 in TV" value={form.item} onChange={e => setForm(f => ({ ...f, item: e.target.value }))} className="mt-1 text-base" />
            </div>
            <div className="grid grid-cols-2 gap-3">
              <div>
                <Label htmlFor="store" className="text-base font-medium">Store</Label>
                <select id="store" value={form.store} onChange={e => setForm(f => ({ ...f, store: e.target.value }))} className="mt-1 w-full border border-gray-300 rounded-md px-3 py-2 text-base bg-white">
                  {STORES.map(s => <option key={s}>{s}</option>)}
                </select>
              </div>
              <div>
                <Label htmlFor="price" className="text-base font-medium">Price ($)</Label>
                <Input id="price" type="number" min="0" step="0.01" placeholder="0.00" value={form.price} onChange={e => setForm(f => ({ ...f, price: e.target.value }))} className="mt-1 text-base" />
              </div>
              <div>
                <Label htmlFor="pdate" className="text-base font-medium">Purchase Date</Label>
                <Input id="pdate" type="date" value={form.purchaseDate} onChange={e => setForm(f => ({ ...f, purchaseDate: e.target.value }))} className="mt-1 text-base" />
              </div>
              <div>
                <Label htmlFor="months" className="text-base font-medium">Warranty (months)</Label>
                <Input id="months" type="number" min="0" max="240" value={form.warrantyMonths} onChange={e => setForm(f => ({ ...f, warrantyMonths: e.target.value }))} className="mt-1 text-base" />
              </div>
            </div>
            <div className="flex flex-wrap gap-1">
              {COMMON_WARRANTY.map(w => (
                <button
                  key={w.v}
                  type="button"
                  onClick={() => setForm(f => ({ ...f, warrantyMonths: String(w.v) }))}
                  className={`text-xs px-2 py-1 rounded-full border ${form.warrantyMonths === String(w.v) ? "bg-blue-100 border-blue-400 text-blue-800" : "bg-white border-gray-200 text-gray-700"}`}
                >
                  {w.label}
                </button>
              ))}
            </div>
            <div>
              <Label htmlFor="receipt" className="text-base font-medium">Receipt location (optional)</Label>
              <Input id="receipt" placeholder="e.g. Folder in desk drawer, email from Amazon" value={form.receiptLocation} onChange={e => setForm(f => ({ ...f, receiptLocation: e.target.value }))} className="mt-1 text-base" />
            </div>
            <div>
              <Label htmlFor="warranty-notes" className="text-base font-medium">Notes (optional)</Label>
              <Input id="warranty-notes" placeholder="e.g. Serial number 12345, paid with Amex" value={form.notes} onChange={e => setForm(f => ({ ...f, notes: e.target.value }))} className="mt-1 text-base" />
            </div>
            {error && <p className="text-red-600 text-sm">{error}</p>}
            <Button onClick={add} size="lg" className="w-full sm:w-auto text-base">Add Purchase</Button>
          </CardContent>
        </Card>

        {purchases.length > 0 && (
          <div className="mb-3 flex items-center justify-end print:hidden">
            <Button variant="outline" onClick={() => window.print()} className="gap-2">
              <Printer className="h-4 w-4" />
              Print List
            </Button>
          </div>
        )}

        {sorted.length === 0 ? (
          <Card className="print:hidden">
            <CardContent className="py-10 text-center text-gray-500">
              <Receipt className="h-10 w-10 text-gray-300 mx-auto mb-2" />
              <p className="text-lg">No purchases tracked yet.</p>
              <p className="text-sm mt-1">Add your most recent appliance, electronic, or tool purchase.</p>
            </CardContent>
          </Card>
        ) : (
          <Card>
            <CardHeader className="pb-2 pt-3">
              <CardTitle className="text-lg">Tracked Purchases (most urgent first)</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="divide-y">
                {sorted.map(p => {
                  const s = status(p);
                  return (
                    <div key={p.id} className="py-2 flex items-start justify-between gap-2 print:break-inside-avoid">
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-2 flex-wrap">
                          <span className="font-medium text-gray-900">{p.item}</span>
                          <Badge variant="secondary" className={`text-xs ${s.color}`}>
                            <ShieldCheck className="h-3 w-3 mr-1 inline" />
                            {s.label}
                          </Badge>
                        </div>
                        <p className="text-xs text-gray-600 mt-1">
                          Bought from {p.store} on {formatDate(p.purchaseDate)}
                          {p.price > 0 && ` for ${formatMoney(p.price)}`}
                          {p.warrantyMonths > 0 && ` · Warranty ends ${formatDate(warrantyEnds(p))}`}
                        </p>
                        {p.receiptLocation && <p className="text-xs text-gray-500 mt-0.5"><span className="font-semibold">Receipt:</span> {p.receiptLocation}</p>}
                        {p.notes && <p className="text-xs text-gray-500 italic">{p.notes}</p>}
                      </div>
                      <Button variant="ghost" size="icon" onClick={() => remove(p.id)} className="h-7 w-7 text-red-400 hover:text-red-600 print:hidden">
                        <Trash2 className="h-3 w-3" />
                      </Button>
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
              Snap a photo of the receipt with your phone right after the purchase. Email it to yourself with the item name in the subject line — easy to find later.
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

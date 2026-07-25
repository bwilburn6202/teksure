import { useState } from "react";
import SEOHead from "@/components/SEOHead";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Trash2, Printer, Gift, AlertTriangle, PlusCircle } from "lucide-react";

interface Card_ {
  id: string;
  store: string;
  balance: number;
  original: number;
  expiration: string;
  notes: string;
}

const POPULAR_STORES = ["Amazon", "Walmart", "Target", "Apple", "Visa", "Mastercard", "Starbucks", "Home Depot", "Best Buy", "iTunes", "Lowe's", "Kohl's", "Macy's", "Cracker Barrel", "Olive Garden"];

export default function GiftCardBalanceTracker() {
  const [cards, setCards] = useState<Card_[]>([]);
  const [form, setForm] = useState({
    store: "",
    balance: "",
    original: "",
    expiration: "",
    notes: "",
  });
  const [error, setError] = useState("");

  const totalBalance = cards.reduce((sum, c) => sum + c.balance, 0);

  function handleAdd() {
    if (!form.store.trim()) { setError("Please enter the store or brand."); return; }
    const balance = parseFloat(form.balance);
    if (!form.balance || isNaN(balance) || balance < 0) {
      setError("Please enter a valid current balance."); return;
    }
    const original = form.original ? parseFloat(form.original) : balance;
    setError("");
    setCards(prev => [
      ...prev,
      {
        id: Date.now().toString(),
        store: form.store.trim(),
        balance: parseFloat(balance.toFixed(2)),
        original: parseFloat((original || balance).toFixed(2)),
        expiration: form.expiration,
        notes: form.notes.trim(),
      },
    ]);
    setForm({ store: "", balance: "", original: "", expiration: "", notes: "" });
  }

  function handleRemove(id: string) {
    setCards(prev => prev.filter(c => c.id !== id));
  }

  function handlePickStore(name: string) {
    setForm(f => ({ ...f, store: name }));
  }

  function formatCurrency(n: number) {
    return n.toLocaleString("en-US", { style: "currency", currency: "USD" });
  }

  function formatDate(s: string) {
    if (!s) return "";
    const [y, m, d] = s.split("-");
    return `${m}/${d}/${y}`;
  }

  function isExpiringSoon(s: string) {
    if (!s) return false;
    const now = new Date();
    const exp = new Date(s);
    const days = (exp.getTime() - now.getTime()) / (1000 * 60 * 60 * 24);
    return days >= 0 && days <= 60;
  }

  function isExpired(s: string) {
    if (!s) return false;
    const now = new Date();
    const exp = new Date(s);
    return exp.getTime() < now.getTime();
  }

  const sorted = [...cards].sort((a, b) => {
    if (!a.expiration && !b.expiration) return 0;
    if (!a.expiration) return 1;
    if (!b.expiration) return -1;
    return a.expiration.localeCompare(b.expiration);
  });

  const expiringSoon = cards.filter(c => isExpiringSoon(c.expiration) && !isExpired(c.expiration));

  return (
    <div className="min-h-screen bg-gray-50">
      <SEOHead
        title="Gift Card Balance Tracker | TekSure"
        description="Keep track of all your gift cards in one place. Record balances, expiration dates, and print a tidy list."
      />

      <div className="max-w-2xl mx-auto px-4 py-8 print:p-4">
        <div className="mb-6 print:mb-4">
          <div className="flex items-center gap-2 mb-1">
            <Gift className="h-7 w-7 text-pink-600" />
            <h1 className="text-3xl font-bold text-gray-900">Gift Card Balance Tracker</h1>
          </div>
          <p className="text-gray-600 text-lg">
            Keep your gift cards organized so none of them gather dust or expire unused.
          </p>
        </div>

        {/* Add card form */}
        <Card className="mb-6 print:hidden">
          <CardHeader>
            <CardTitle className="text-xl flex items-center gap-2">
              <PlusCircle className="h-5 w-5 text-pink-600" />
              Add a Gift Card
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <Label htmlFor="store" className="text-base font-medium">Store or Brand</Label>
              <Input
                id="store"
                placeholder="e.g. Amazon"
                value={form.store}
                onChange={e => setForm(f => ({ ...f, store: e.target.value }))}
                className="mt-1 text-base"
              />
              <div className="flex flex-wrap gap-1 mt-2">
                {POPULAR_STORES.map(s => (
                  <button
                    key={s}
                    type="button"
                    onClick={() => handlePickStore(s)}
                    className="text-xs px-2 py-1 rounded-full bg-gray-100 hover:bg-pink-100 text-gray-700 hover:text-pink-700 transition"
                  >
                    {s}
                  </button>
                ))}
              </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <Label htmlFor="balance" className="text-base font-medium">Current Balance ($)</Label>
                <Input
                  id="balance"
                  type="number"
                  min="0"
                  step="0.01"
                  placeholder="0.00"
                  value={form.balance}
                  onChange={e => setForm(f => ({ ...f, balance: e.target.value }))}
                  className="mt-1 text-base"
                />
              </div>
              <div>
                <Label htmlFor="original" className="text-base font-medium">Original Amount (optional)</Label>
                <Input
                  id="original"
                  type="number"
                  min="0"
                  step="0.01"
                  placeholder="0.00"
                  value={form.original}
                  onChange={e => setForm(f => ({ ...f, original: e.target.value }))}
                  className="mt-1 text-base"
                />
              </div>
              <div>
                <Label htmlFor="expiration" className="text-base font-medium">Expiration (optional)</Label>
                <Input
                  id="expiration"
                  type="date"
                  value={form.expiration}
                  onChange={e => setForm(f => ({ ...f, expiration: e.target.value }))}
                  className="mt-1 text-base"
                />
              </div>
              <div>
                <Label htmlFor="notes" className="text-base font-medium">Notes (optional)</Label>
                <Input
                  id="notes"
                  placeholder="e.g. From birthday 2026"
                  value={form.notes}
                  onChange={e => setForm(f => ({ ...f, notes: e.target.value }))}
                  className="mt-1 text-base"
                />
              </div>
            </div>
            {error && <p className="text-red-600 text-sm">{error}</p>}
            <Button onClick={handleAdd} size="lg" className="w-full sm:w-auto text-base">
              Add Gift Card
            </Button>
          </CardContent>
        </Card>

        {/* Total + print */}
        {cards.length > 0 && (
          <div className="mb-4 flex flex-wrap items-center justify-between gap-3">
            <div>
              <p className="text-sm text-gray-500">Total balance across {cards.length} card{cards.length !== 1 ? "s" : ""}</p>
              <p className="text-2xl font-bold text-pink-700">{formatCurrency(totalBalance)}</p>
            </div>
            <Button variant="outline" onClick={() => window.print()} className="print:hidden gap-2">
              <Printer className="h-4 w-4" />
              Print List
            </Button>
          </div>
        )}

        {/* Expiring warning */}
        {expiringSoon.length > 0 && (
          <Card className="mb-4 bg-amber-50 border-amber-200 print:hidden">
            <CardContent className="py-3 px-4 flex items-start gap-2">
              <AlertTriangle className="h-5 w-5 text-amber-600 mt-0.5 shrink-0" />
              <div>
                <p className="font-semibold text-amber-800 text-sm">
                  {expiringSoon.length} card{expiringSoon.length !== 1 ? "s" : ""} expiring within 60 days
                </p>
                <p className="text-sm text-amber-700">
                  Plan to use {expiringSoon.length === 1 ? "it" : "them"} soon so the value isn't lost.
                </p>
              </div>
            </CardContent>
          </Card>
        )}

        {/* Cards */}
        {sorted.length === 0 ? (
          <Card className="print:hidden">
            <CardContent className="py-10 text-center text-gray-500">
              <p className="text-lg">No gift cards added yet.</p>
              <p className="text-sm mt-1">Add your first card above to start tracking balances.</p>
            </CardContent>
          </Card>
        ) : (
          <div className="space-y-3">
            {sorted.map(c => {
              const expSoon = isExpiringSoon(c.expiration);
              const expired = isExpired(c.expiration);
              return (
                <Card key={c.id} className={expired ? "border-red-200 bg-red-50/30" : expSoon ? "border-amber-200 bg-amber-50/30" : ""}>
                  <CardContent className="py-3 px-4">
                    <div className="flex items-start justify-between gap-2">
                      <div className="flex-1 min-w-0">
                        <p className="font-semibold text-gray-900 text-base">{c.store}</p>
                        <div className="flex flex-wrap gap-2 mt-1 items-center">
                          <span className="text-pink-700 font-bold text-lg">{formatCurrency(c.balance)}</span>
                          {c.original > c.balance && (
                            <span className="text-gray-400 text-sm">of {formatCurrency(c.original)}</span>
                          )}
                          {c.expiration && (
                            <Badge
                              variant={expired ? "destructive" : expSoon ? "default" : "secondary"}
                              className={`text-xs ${expSoon && !expired ? "bg-amber-500 hover:bg-amber-600" : ""}`}
                            >
                              {expired ? "Expired " : "Expires "}{formatDate(c.expiration)}
                            </Badge>
                          )}
                        </div>
                        {c.notes && <p className="text-sm text-gray-500 mt-1 italic">{c.notes}</p>}
                      </div>
                      <Button
                        variant="ghost"
                        size="icon"
                        className="shrink-0 text-red-400 hover:text-red-600 print:hidden"
                        onClick={() => handleRemove(c.id)}
                        aria-label="Remove gift card"
                      >
                        <Trash2 className="h-4 w-4" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        )}

        {/* Tips */}
        {cards.length > 0 && (
          <Card className="mt-6 bg-blue-50 border-blue-200 print:hidden">
            <CardContent className="py-4 px-4">
              <p className="text-sm font-semibold text-blue-800 mb-2">Gift Card Tips</p>
              <ul className="text-sm text-blue-700 space-y-1 list-disc pl-4">
                <li>Most retailer gift cards have no expiration date by federal law, but inactivity fees can apply after 12 months.</li>
                <li>Visa and Mastercard prepaid cards often expire — check the back of the card.</li>
                <li>If you lose a card and registered it online, the issuer may be able to replace it.</li>
                <li>Take a picture of the card front and back as a backup record.</li>
              </ul>
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  );
}

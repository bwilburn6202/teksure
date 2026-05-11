import { useState, useRef } from "react";
import SEOHead from "@/components/SEOHead";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Trash2, Printer, PlusCircle, DollarSign } from "lucide-react";

interface Donation {
  id: string;
  organization: string;
  amount: number;
  date: string;
  method: string;
  notes: string;
}

const PAYMENT_METHODS = ["Check", "Credit Card", "Cash", "Online/Website", "Payroll Deduction", "Stock/Assets", "Other"];

const currentYear = new Date().getFullYear();

export default function CharitableDonationTracker() {
  const [donations, setDonations] = useState<Donation[]>([]);
  const [form, setForm] = useState({
    organization: "",
    amount: "",
    date: new Date().toISOString().slice(0, 10),
    method: "Check",
    notes: "",
  });
  const [error, setError] = useState("");
  const printRef = useRef<HTMLDivElement>(null);

  const totalDonated = donations.reduce((sum, d) => sum + d.amount, 0);

  function handleAdd() {
    if (!form.organization.trim()) { setError("Please enter the organization name."); return; }
    if (!form.amount || isNaN(parseFloat(form.amount)) || parseFloat(form.amount) <= 0) {
      setError("Please enter a valid donation amount."); return;
    }
    setError("");
    setDonations(prev => [
      ...prev,
      {
        id: Date.now().toString(),
        organization: form.organization.trim(),
        amount: parseFloat(parseFloat(form.amount).toFixed(2)),
        date: form.date,
        method: form.method,
        notes: form.notes.trim(),
      },
    ]);
    setForm(f => ({ ...f, organization: "", amount: "", notes: "" }));
  }

  function handleRemove(id: string) {
    setDonations(prev => prev.filter(d => d.id !== id));
  }

  function formatCurrency(n: number) {
    return n.toLocaleString("en-US", { style: "currency", currency: "USD" });
  }

  function formatDate(s: string) {
    const [y, m, d] = s.split("-");
    return `${m}/${d}/${y}`;
  }

  function handlePrint() {
    window.print();
  }

  const sorted = [...donations].sort((a, b) => a.date.localeCompare(b.date));

  return (
    <div className="min-h-screen bg-gray-50">
      <SEOHead
        title="Charitable Donation Tracker | TekSure"
        description="Track your charitable donations throughout the year. Print a summary at tax time to support your deductions."
      />

      <div className="max-w-2xl mx-auto px-4 py-8 print:p-4" ref={printRef}>
        <div className="mb-6 print:mb-4">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Charitable Donation Tracker</h1>
          <p className="text-gray-600 text-lg">
            Record your donations as you make them. Print a full summary when tax season arrives.
          </p>
        </div>

        {/* Add donation form — hidden when printing */}
        <Card className="mb-6 print:hidden">
          <CardHeader>
            <CardTitle className="text-xl flex items-center gap-2">
              <PlusCircle className="h-5 w-5 text-blue-600" />
              Add a Donation
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="sm:col-span-2">
                <Label htmlFor="org" className="text-base font-medium">Organization Name</Label>
                <Input
                  id="org"
                  placeholder="e.g. American Red Cross"
                  value={form.organization}
                  onChange={e => setForm(f => ({ ...f, organization: e.target.value }))}
                  className="mt-1 text-base"
                />
              </div>
              <div>
                <Label htmlFor="amount" className="text-base font-medium">Amount ($)</Label>
                <Input
                  id="amount"
                  type="number"
                  min="0.01"
                  step="0.01"
                  placeholder="0.00"
                  value={form.amount}
                  onChange={e => setForm(f => ({ ...f, amount: e.target.value }))}
                  className="mt-1 text-base"
                />
              </div>
              <div>
                <Label htmlFor="date" className="text-base font-medium">Date</Label>
                <Input
                  id="date"
                  type="date"
                  value={form.date}
                  onChange={e => setForm(f => ({ ...f, date: e.target.value }))}
                  className="mt-1 text-base"
                />
              </div>
              <div>
                <Label htmlFor="method" className="text-base font-medium">Payment Method</Label>
                <select
                  id="method"
                  value={form.method}
                  onChange={e => setForm(f => ({ ...f, method: e.target.value }))}
                  className="mt-1 w-full border border-gray-300 rounded-md px-3 py-2 text-base bg-white"
                >
                  {PAYMENT_METHODS.map(m => <option key={m}>{m}</option>)}
                </select>
              </div>
              <div>
                <Label htmlFor="notes" className="text-base font-medium">Notes (optional)</Label>
                <Input
                  id="notes"
                  placeholder="e.g. In memory of John, check #1042"
                  value={form.notes}
                  onChange={e => setForm(f => ({ ...f, notes: e.target.value }))}
                  className="mt-1 text-base"
                />
              </div>
            </div>
            {error && <p className="text-red-600 text-sm">{error}</p>}
            <Button onClick={handleAdd} size="lg" className="w-full sm:w-auto text-base">
              Add Donation
            </Button>
          </CardContent>
        </Card>

        {/* Summary totals */}
        {donations.length > 0 && (
          <div className="mb-6">
            <div className="flex flex-wrap items-center justify-between gap-3 mb-3">
              <div className="flex items-center gap-2">
                <DollarSign className="h-5 w-5 text-green-600" />
                <span className="text-xl font-semibold text-gray-800">
                  Total donated in {currentYear}: <span className="text-green-700">{formatCurrency(totalDonated)}</span>
                </span>
              </div>
              <Button variant="outline" onClick={handlePrint} className="print:hidden gap-2">
                <Printer className="h-4 w-4" />
                Print Summary
              </Button>
            </div>
            <p className="text-sm text-gray-500 print:hidden">
              Keep the receipts or confirmation emails from each organization as supporting documents.
            </p>
          </div>
        )}

        {/* Print header */}
        <div className="hidden print:block mb-4 border-b pb-3">
          <p className="text-sm text-gray-600">TekSure Charitable Donation Tracker — {currentYear} Summary</p>
          <p className="text-sm text-gray-600">Printed: {new Date().toLocaleDateString("en-US")}</p>
        </div>

        {/* Donations list */}
        {sorted.length === 0 ? (
          <Card className="print:hidden">
            <CardContent className="py-10 text-center text-gray-500">
              <p className="text-lg">No donations recorded yet.</p>
              <p className="text-sm mt-1">Add your first donation above to get started.</p>
            </CardContent>
          </Card>
        ) : (
          <div className="space-y-3">
            {sorted.map(d => (
              <Card key={d.id} className="border border-gray-200">
                <CardContent className="py-3 px-4">
                  <div className="flex items-start justify-between gap-2">
                    <div className="flex-1 min-w-0">
                      <p className="font-semibold text-gray-900 text-base truncate">{d.organization}</p>
                      <div className="flex flex-wrap gap-2 mt-1">
                        <span className="text-green-700 font-medium">{formatCurrency(d.amount)}</span>
                        <span className="text-gray-500 text-sm">{formatDate(d.date)}</span>
                        <Badge variant="secondary" className="text-xs">{d.method}</Badge>
                      </div>
                      {d.notes && <p className="text-sm text-gray-500 mt-1 italic">{d.notes}</p>}
                    </div>
                    <Button
                      variant="ghost"
                      size="icon"
                      className="shrink-0 text-red-400 hover:text-red-600 print:hidden"
                      onClick={() => handleRemove(d.id)}
                      aria-label="Remove donation"
                    >
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}

            {/* Print total row */}
            <div className="pt-3 border-t mt-2">
              <p className="text-lg font-bold text-gray-900 text-right">
                Total: {formatCurrency(totalDonated)}
              </p>
              <p className="text-sm text-gray-500 text-right print:hidden">
                {donations.length} donation{donations.length !== 1 ? "s" : ""} recorded
              </p>
            </div>
          </div>
        )}

        {/* Tax reminder */}
        {donations.length > 0 && (
          <Card className="mt-6 bg-blue-50 border-blue-200">
            <CardContent className="py-4 px-4">
              <p className="text-sm font-semibold text-blue-800 mb-1">Tax Season Reminder</p>
              <ul className="text-sm text-blue-700 space-y-1 list-disc pl-4">
                <li>You can only deduct donations to IRS-qualified 501(c)(3) organizations.</li>
                <li>Cash donations over $250 require a written acknowledgment from the organization.</li>
                <li>Keep receipts, bank statements, or emails as proof of each donation.</li>
                <li>Use IRS Form 1040, Schedule A to claim charitable deductions if you itemize.</li>
              </ul>
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  );
}

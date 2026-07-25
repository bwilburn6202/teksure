import { useState } from "react";
import SEOHead from "@/components/SEOHead";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Car } from "lucide-react";

function monthlyPayment(p: number, ratePct: number, months: number): number {
  if (p <= 0 || months <= 0) return 0;
  const r = ratePct / 100 / 12;
  if (r === 0) return p / months;
  return p * r / (1 - Math.pow(1 + r, -months));
}

function fmt(n: number) {
  if (!isFinite(n) || isNaN(n)) return "—";
  return n.toLocaleString("en-US", { style: "currency", currency: "USD", maximumFractionDigits: 0 });
}

export default function CarLoanCompare() {
  const [a, setA] = useState({ price: "", down: "", years: "5", rate: "" });
  const [b, setB] = useState({ price: "", down: "", years: "5", rate: "" });

  function calc(o: typeof a) {
    const p = parseFloat(o.price) - (parseFloat(o.down) || 0);
    const y = parseFloat(o.years);
    const r = parseFloat(o.rate);
    if (isNaN(p) || isNaN(y) || isNaN(r) || p <= 0) return null;
    const months = y * 12;
    const m = monthlyPayment(p, r, months);
    const total = m * months;
    const interest = total - p;
    return { monthly: m, total, interest, principal: p };
  }
  const A = calc(a), B = calc(b);

  return (
    <div className="min-h-screen bg-gray-50">
      <SEOHead title="Car Loan Compare | TekSure" description="Side-by-side compare two car loan offers — monthly payment, total cost, total interest. Find the better deal." />
      <div className="max-w-3xl mx-auto px-4 py-8">
        <div className="mb-6">
          <div className="flex items-center gap-2 mb-1">
            <Car className="h-7 w-7 text-blue-600" />
            <h1 className="text-3xl font-bold text-gray-900">Car Loan Comparison</h1>
          </div>
          <p className="text-gray-600 text-lg">Compare two car loan offers side by side. The right one isn't always the lowest monthly payment.</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          <Card>
            <CardHeader className="pb-2 pt-3 bg-blue-50">
              <CardTitle className="text-lg text-blue-800">Offer A</CardTitle>
            </CardHeader>
            <CardContent className="space-y-2 pt-3">
              <div><label className="text-sm font-medium">Price ($)</label><Input type="number" value={a.price} onChange={e => setA({ ...a, price: e.target.value })} /></div>
              <div><label className="text-sm font-medium">Down ($)</label><Input type="number" value={a.down} onChange={e => setA({ ...a, down: e.target.value })} /></div>
              <div><label className="text-sm font-medium">Years</label><Input type="number" value={a.years} onChange={e => setA({ ...a, years: e.target.value })} /></div>
              <div><label className="text-sm font-medium">Rate (%)</label><Input type="number" step="0.1" value={a.rate} onChange={e => setA({ ...a, rate: e.target.value })} /></div>
              {A && (
                <div className="mt-2 pt-2 border-t space-y-1">
                  <p className="text-xs text-gray-500">Monthly</p>
                  <p className="text-2xl font-bold text-blue-700">{fmt(A.monthly)}</p>
                  <p className="text-xs text-gray-500">Total {fmt(A.total)} · Interest {fmt(A.interest)}</p>
                </div>
              )}
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="pb-2 pt-3 bg-purple-50">
              <CardTitle className="text-lg text-purple-800">Offer B</CardTitle>
            </CardHeader>
            <CardContent className="space-y-2 pt-3">
              <div><label className="text-sm font-medium">Price ($)</label><Input type="number" value={b.price} onChange={e => setB({ ...b, price: e.target.value })} /></div>
              <div><label className="text-sm font-medium">Down ($)</label><Input type="number" value={b.down} onChange={e => setB({ ...b, down: e.target.value })} /></div>
              <div><label className="text-sm font-medium">Years</label><Input type="number" value={b.years} onChange={e => setB({ ...b, years: e.target.value })} /></div>
              <div><label className="text-sm font-medium">Rate (%)</label><Input type="number" step="0.1" value={b.rate} onChange={e => setB({ ...b, rate: e.target.value })} /></div>
              {B && (
                <div className="mt-2 pt-2 border-t space-y-1">
                  <p className="text-xs text-gray-500">Monthly</p>
                  <p className="text-2xl font-bold text-purple-700">{fmt(B.monthly)}</p>
                  <p className="text-xs text-gray-500">Total {fmt(B.total)} · Interest {fmt(B.interest)}</p>
                </div>
              )}
            </CardContent>
          </Card>
        </div>
        {A && B && (
          <Card className="mt-4">
            <CardContent className="py-3 px-4 text-center">
              <p className="text-sm text-gray-600">Total cost difference</p>
              <p className={`text-3xl font-bold ${A.total < B.total ? "text-blue-700" : "text-purple-700"}`}>
                Offer {A.total < B.total ? "A" : "B"} saves {fmt(Math.abs(A.total - B.total))}
              </p>
              <p className="text-xs text-gray-500 mt-1">over the full term of the loan</p>
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  );
}

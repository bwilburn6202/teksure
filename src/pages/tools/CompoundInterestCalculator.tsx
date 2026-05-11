import { useState } from "react";
import SEOHead from "@/components/SEOHead";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { TrendingUp } from "lucide-react";

export default function CompoundInterestCalculator() {
  const [principal, setPrincipal] = useState("");
  const [monthly, setMonthly] = useState("");
  const [rate, setRate] = useState("");
  const [years, setYears] = useState("");

  const P = parseFloat(principal) || 0;
  const M = parseFloat(monthly) || 0;
  const r = (parseFloat(rate) || 0) / 100;
  const y = parseFloat(years) || 0;
  const valid = (P > 0 || M > 0) && r >= 0 && y > 0;

  // Monthly compounding
  const monthlyRate = r / 12;
  const months = y * 12;
  const futurePrincipal = valid ? P * Math.pow(1 + monthlyRate, months) : 0;
  const futureContributions = valid && monthlyRate > 0
    ? M * ((Math.pow(1 + monthlyRate, months) - 1) / monthlyRate)
    : valid ? M * months : 0;
  const total = futurePrincipal + futureContributions;
  const totalContributed = P + (M * months);
  const totalInterest = total - totalContributed;

  function fmt(n: number) {
    if (!isFinite(n) || isNaN(n)) return "—";
    return n.toLocaleString("en-US", { style: "currency", currency: "USD", maximumFractionDigits: 0 });
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <SEOHead title="Compound Interest Calculator | TekSure" description="See how money grows over time. Add a starting amount, optional monthly deposits, expected rate, and years." />
      <div className="max-w-xl mx-auto px-4 py-8">
        <div className="mb-6">
          <div className="flex items-center gap-2 mb-1">
            <TrendingUp className="h-7 w-7 text-emerald-700" />
            <h1 className="text-3xl font-bold text-gray-900">Compound Interest Calculator</h1>
          </div>
          <p className="text-gray-600 text-lg">See how money grows over time with compound interest.</p>
        </div>
        <Card>
          <CardContent className="py-6 px-4 space-y-3">
            <div>
              <label className="text-base font-medium">Starting amount ($)</label>
              <Input type="number" min="0" value={principal} onChange={e => setPrincipal(e.target.value)} placeholder="10000" className="mt-1 text-base h-12" />
            </div>
            <div>
              <label className="text-base font-medium">Monthly contribution ($)</label>
              <Input type="number" min="0" value={monthly} onChange={e => setMonthly(e.target.value)} placeholder="200" className="mt-1 text-base h-12" />
            </div>
            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="text-base font-medium">Annual rate (%)</label>
                <Input type="number" step="0.1" min="0" value={rate} onChange={e => setRate(e.target.value)} placeholder="6" className="mt-1 text-base h-12" />
              </div>
              <div>
                <label className="text-base font-medium">Years</label>
                <Input type="number" min="0" value={years} onChange={e => setYears(e.target.value)} placeholder="10" className="mt-1 text-base h-12" />
              </div>
            </div>
            {valid && (
              <div className="text-center bg-emerald-50 border border-emerald-200 rounded-md py-4 px-3 space-y-2">
                <p className="text-sm text-emerald-700">After {y} year{y !== 1 ? "s" : ""}</p>
                <p className="text-4xl font-bold text-emerald-700">{fmt(total)}</p>
                <div className="grid grid-cols-2 gap-3 mt-2 text-xs">
                  <div><p className="text-gray-500">You contributed</p><p className="font-semibold">{fmt(totalContributed)}</p></div>
                  <div><p className="text-gray-500">Interest earned</p><p className="font-semibold text-green-700">{fmt(totalInterest)}</p></div>
                </div>
              </div>
            )}
          </CardContent>
        </Card>
        <Card className="mt-4 bg-blue-50 border-blue-200">
          <CardContent className="py-3 px-4">
            <p className="text-sm text-blue-800">
              <span className="font-semibold">Quick Tip: </span>
              A 6% return is typical for a balanced retirement portfolio over decades. High-yield savings accounts in 2026 are paying around 4%.
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

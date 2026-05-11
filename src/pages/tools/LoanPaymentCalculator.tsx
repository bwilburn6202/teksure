import { useState } from "react";
import SEOHead from "@/components/SEOHead";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { Calculator } from "lucide-react";

export default function LoanPaymentCalculator() {
  const [amount, setAmount] = useState("");
  const [years, setYears] = useState("");
  const [rate, setRate] = useState("");

  const p = parseFloat(amount);
  const n = parseFloat(years);
  const r = parseFloat(rate);
  const valid = p > 0 && n > 0 && r >= 0;

  let monthly = 0, total = 0, totalInterest = 0;
  if (valid) {
    const months = n * 12;
    const monthlyRate = r / 100 / 12;
    if (monthlyRate === 0) {
      monthly = p / months;
    } else {
      monthly = p * monthlyRate / (1 - Math.pow(1 + monthlyRate, -months));
    }
    total = monthly * months;
    totalInterest = total - p;
  }

  function fmt(n: number) { return n.toLocaleString("en-US", { style: "currency", currency: "USD", maximumFractionDigits: 2 }); }

  return (
    <div className="min-h-screen bg-gray-50">
      <SEOHead title="Loan Payment Calculator | TekSure" description="See your monthly payment, total paid, and total interest for a loan. Works for mortgages, auto loans, and personal loans." />
      <div className="max-w-xl mx-auto px-4 py-8">
        <div className="mb-6">
          <div className="flex items-center gap-2 mb-1">
            <Calculator className="h-7 w-7 text-emerald-700" />
            <h1 className="text-3xl font-bold text-gray-900">Loan Payment Calculator</h1>
          </div>
          <p className="text-gray-600 text-lg">Type your loan amount, term, and rate to see the monthly payment.</p>
        </div>
        <Card>
          <CardContent className="py-6 px-4 space-y-4">
            <div className="grid grid-cols-1 gap-3">
              <div>
                <label className="text-base font-medium text-gray-700">Loan amount ($)</label>
                <Input type="number" min="0" step="1000" placeholder="250000" value={amount} onChange={e => setAmount(e.target.value)} className="mt-1 text-2xl text-center h-14" />
              </div>
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="text-base font-medium text-gray-700">Years</label>
                  <Input type="number" min="0" max="50" step="0.5" placeholder="30" value={years} onChange={e => setYears(e.target.value)} className="mt-1 text-2xl text-center h-14" />
                </div>
                <div>
                  <label className="text-base font-medium text-gray-700">Annual rate (%)</label>
                  <Input type="number" min="0" max="30" step="0.125" placeholder="6.5" value={rate} onChange={e => setRate(e.target.value)} className="mt-1 text-2xl text-center h-14" />
                </div>
              </div>
            </div>
            {valid && (
              <div className="text-center bg-emerald-50 border border-emerald-200 rounded-md py-4 px-3 space-y-2">
                <p className="text-sm text-emerald-700">Monthly payment</p>
                <p className="text-4xl font-bold text-emerald-700">{fmt(monthly)}</p>
                <div className="grid grid-cols-2 gap-3 mt-3 text-sm">
                  <div><p className="text-gray-500">Total paid</p><p className="font-semibold">{fmt(total)}</p></div>
                  <div><p className="text-gray-500">Total interest</p><p className="font-semibold text-red-700">{fmt(totalInterest)}</p></div>
                </div>
              </div>
            )}
          </CardContent>
        </Card>
        <Card className="mt-4 bg-blue-50 border-blue-200">
          <CardContent className="py-3 px-4">
            <p className="text-sm text-blue-800">
              <span className="font-semibold">Note: </span>
              This shows principal and interest only. Your actual monthly payment may also include property taxes, homeowner's insurance, and PMI for a mortgage.
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

import { useState } from "react";
import SEOHead from "@/components/SEOHead";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { Calculator } from "lucide-react";

function payment(p: number, ratePct: number, years: number): number {
  const months = years * 12;
  const r = ratePct / 100 / 12;
  if (r === 0) return p / months;
  return p * r / (1 - Math.pow(1 + r, -months));
}

export default function MortgageRefiBreakEven() {
  const [balance, setBalance] = useState("");
  const [oldRate, setOldRate] = useState("");
  const [oldYears, setOldYears] = useState("");
  const [newRate, setNewRate] = useState("");
  const [newYears, setNewYears] = useState("");
  const [closingCosts, setClosingCosts] = useState("");

  const b = parseFloat(balance);
  const oR = parseFloat(oldRate);
  const oY = parseFloat(oldYears);
  const nR = parseFloat(newRate);
  const nY = parseFloat(newYears);
  const cc = parseFloat(closingCosts);
  const valid = b > 0 && oR >= 0 && oY > 0 && nR >= 0 && nY > 0 && cc >= 0;

  const oldPay = valid ? payment(b, oR, oY) : 0;
  const newPay = valid ? payment(b, nR, nY) : 0;
  const monthlySavings = oldPay - newPay;
  const breakEvenMonths = monthlySavings > 0 ? cc / monthlySavings : 0;

  function fmt(n: number) { return n.toLocaleString("en-US", { style: "currency", currency: "USD", maximumFractionDigits: 0 }); }

  return (
    <div className="min-h-screen bg-gray-50">
      <SEOHead title="Mortgage Refi Break-Even | TekSure" description="Figure out how many months it takes for refinance savings to pay off the closing costs." />
      <div className="max-w-xl mx-auto px-4 py-8">
        <div className="mb-6">
          <div className="flex items-center gap-2 mb-1">
            <Calculator className="h-7 w-7 text-emerald-700" />
            <h1 className="text-3xl font-bold text-gray-900">Refi Break-Even Calculator</h1>
          </div>
          <p className="text-gray-600 text-lg">How many months until refinance savings pay off the closing costs.</p>
        </div>
        <Card>
          <CardContent className="py-6 px-4 space-y-3">
            <div>
              <label className="text-base font-medium">Remaining mortgage balance ($)</label>
              <Input type="number" value={balance} onChange={e => setBalance(e.target.value)} placeholder="200000" className="mt-1 text-base h-12" />
            </div>
            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="text-base font-medium">Current rate (%)</label>
                <Input type="number" step="0.1" value={oldRate} onChange={e => setOldRate(e.target.value)} placeholder="6.5" className="mt-1 text-base h-12" />
              </div>
              <div>
                <label className="text-base font-medium">Years remaining</label>
                <Input type="number" step="0.5" value={oldYears} onChange={e => setOldYears(e.target.value)} placeholder="20" className="mt-1 text-base h-12" />
              </div>
              <div>
                <label className="text-base font-medium">New rate (%)</label>
                <Input type="number" step="0.1" value={newRate} onChange={e => setNewRate(e.target.value)} placeholder="5.5" className="mt-1 text-base h-12" />
              </div>
              <div>
                <label className="text-base font-medium">New term (years)</label>
                <Input type="number" step="0.5" value={newYears} onChange={e => setNewYears(e.target.value)} placeholder="20" className="mt-1 text-base h-12" />
              </div>
            </div>
            <div>
              <label className="text-base font-medium">Closing costs ($)</label>
              <Input type="number" value={closingCosts} onChange={e => setClosingCosts(e.target.value)} placeholder="4500" className="mt-1 text-base h-12" />
            </div>
            {valid && (
              <div className="space-y-2 mt-3">
                <div className="flex justify-between p-2 bg-gray-50 rounded text-sm"><span>Old payment</span><span className="font-semibold">{fmt(oldPay)}</span></div>
                <div className="flex justify-between p-2 bg-gray-50 rounded text-sm"><span>New payment</span><span className="font-semibold">{fmt(newPay)}</span></div>
                <div className="flex justify-between p-2 bg-emerald-50 rounded text-sm"><span>Monthly savings</span><span className={`font-semibold ${monthlySavings > 0 ? "text-emerald-700" : "text-red-700"}`}>{fmt(monthlySavings)}</span></div>
                {monthlySavings > 0 ? (
                  <div className="text-center bg-emerald-100 rounded-md py-3 px-3 mt-2">
                    <p className="text-sm">Break-even point</p>
                    <p className="text-3xl font-bold text-emerald-700">{breakEvenMonths.toFixed(1)} months</p>
                    <p className="text-xs text-emerald-600 mt-1">({(breakEvenMonths / 12).toFixed(1)} years to recoup closing costs)</p>
                  </div>
                ) : (
                  <div className="text-center bg-red-50 rounded-md py-3 px-3 mt-2">
                    <p className="text-sm text-red-800">The new payment is higher than the old one. This refi likely doesn't save money.</p>
                  </div>
                )}
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

import { useState } from "react";
import SEOHead from "@/components/SEOHead";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { PiggyBank } from "lucide-react";

const UNIFORM_LIFETIME_TABLE: Record<number, number> = {
  72: 27.4, 73: 26.5, 74: 25.5, 75: 24.6, 76: 23.7, 77: 22.9, 78: 22.0, 79: 21.1, 80: 20.2,
  81: 19.4, 82: 18.5, 83: 17.7, 84: 16.8, 85: 16.0, 86: 15.2, 87: 14.4, 88: 13.7, 89: 12.9, 90: 12.2,
  91: 11.5, 92: 10.8, 93: 10.1, 94: 9.5, 95: 8.9, 96: 8.4, 97: 7.8, 98: 7.3, 99: 6.8, 100: 6.4,
};

export default function RMDCalculator() {
  const [age, setAge] = useState("");
  const [balance, setBalance] = useState("");

  const a = parseInt(age, 10);
  const b = parseFloat(balance);
  const valid = !isNaN(a) && a >= 73 && a <= 100 && b > 0;
  const factor = valid ? UNIFORM_LIFETIME_TABLE[Math.min(a, 100)] || 6.4 : 0;
  const rmd = valid ? b / factor : 0;

  function fmt(n: number) { return n.toLocaleString("en-US", { style: "currency", currency: "USD", maximumFractionDigits: 2 }); }

  return (
    <div className="min-h-screen bg-gray-50">
      <SEOHead title="RMD Calculator | TekSure" description="Required Minimum Distribution calculator for traditional IRAs and 401(k)s. Uses the 2026 IRS Uniform Lifetime Table." />
      <div className="max-w-xl mx-auto px-4 py-8">
        <div className="mb-6">
          <div className="flex items-center gap-2 mb-1">
            <PiggyBank className="h-7 w-7 text-emerald-700" />
            <h1 className="text-3xl font-bold text-gray-900">RMD Calculator</h1>
          </div>
          <p className="text-gray-600 text-lg">Required Minimum Distribution from your traditional IRA or 401(k).</p>
        </div>
        <Card>
          <CardContent className="py-6 px-4 space-y-4">
            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="text-base font-medium text-gray-700">Your age this year</label>
                <Input type="number" min="73" max="100" placeholder="75" value={age} onChange={e => setAge(e.target.value)} className="mt-1 text-2xl text-center h-14" />
              </div>
              <div>
                <label className="text-base font-medium text-gray-700">Dec 31 balance ($)</label>
                <Input type="number" min="0" step="1000" placeholder="500000" value={balance} onChange={e => setBalance(e.target.value)} className="mt-1 text-2xl text-center h-14" />
              </div>
            </div>
            {valid && (
              <div className="text-center bg-emerald-50 border border-emerald-200 rounded-md py-4 px-3 space-y-2">
                <p className="text-sm text-emerald-700">Estimated RMD for this year</p>
                <p className="text-4xl font-bold text-emerald-700">{fmt(rmd)}</p>
                <p className="text-xs text-emerald-600 mt-2">Balance ÷ life expectancy factor of {factor} (IRS Uniform Lifetime Table)</p>
              </div>
            )}
            {a < 73 && age && <p className="text-sm text-gray-500">RMDs begin at age 73 (SECURE 2.0 Act).</p>}
          </CardContent>
        </Card>
        <Card className="mt-4 bg-amber-50 border-amber-200">
          <CardContent className="py-3 px-4">
            <p className="text-sm text-amber-800">
              <span className="font-semibold">Important: </span>
              This is an estimate using the standard table. If your spouse is the sole beneficiary and is more than 10 years younger, you use a different table. Roth IRAs do not require RMDs. Always confirm with your tax preparer.
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

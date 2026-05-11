import { useState } from "react";
import SEOHead from "@/components/SEOHead";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { Landmark } from "lucide-react";

export default function SSAClaimingAgeChart() {
  const [fra, setFra] = useState("3000");

  const fraNum = parseFloat(fra) || 0;
  const valid = fraNum > 0;

  // Approximate adjustments per SSA rules. Assumes FRA = 67 (typical for 1960+).
  const AGES = [
    { age: 62, factor: 0.70, note: "Earliest age — locks in a permanent 30% reduction" },
    { age: 63, factor: 0.75, note: "" },
    { age: 64, factor: 0.80, note: "" },
    { age: 65, factor: 0.867, note: "" },
    { age: 66, factor: 0.933, note: "" },
    { age: 67, factor: 1.00, note: "Full Retirement Age — assumed 67 for those born in 1960 or later" },
    { age: 68, factor: 1.08, note: "+8% per year delayed" },
    { age: 69, factor: 1.16, note: "" },
    { age: 70, factor: 1.24, note: "Maximum — no benefit to waiting past 70" },
  ];

  function fmt(n: number) { return n.toLocaleString("en-US", { style: "currency", currency: "USD", maximumFractionDigits: 0 }); }

  return (
    <div className="min-h-screen bg-gray-50">
      <SEOHead title="Social Security Claiming Age Chart | TekSure" description="See how your Social Security benefit changes if you claim at 62, FRA, or 70. Type your Full Retirement Age benefit to see the full chart." />
      <div className="max-w-2xl mx-auto px-4 py-8">
        <div className="mb-6">
          <div className="flex items-center gap-2 mb-1">
            <Landmark className="h-7 w-7 text-blue-700" />
            <h1 className="text-3xl font-bold text-gray-900">Social Security Claiming Chart</h1>
          </div>
          <p className="text-gray-600 text-lg">See what your monthly benefit would be at every claiming age between 62 and 70.</p>
        </div>
        <Card className="mb-4">
          <CardContent className="py-4 px-4">
            <label className="text-base font-medium">Your monthly benefit at Full Retirement Age ($)</label>
            <Input type="number" min="0" step="50" value={fra} onChange={e => setFra(e.target.value)} className="mt-1 text-2xl text-center h-14" />
            <p className="text-xs text-gray-500 mt-2">Look this up at ssa.gov/myaccount. Type 0 to see percent-based factors.</p>
          </CardContent>
        </Card>
        {valid && (
          <Card>
            <CardContent className="py-3 px-3">
              <div className="divide-y">
                {AGES.map(a => (
                  <div key={a.age} className={`py-2 px-2 flex items-center justify-between ${a.age === 67 ? "bg-blue-50" : a.age === 62 || a.age === 70 ? "bg-amber-50" : ""}`}>
                    <div>
                      <p className="font-semibold">Age {a.age}</p>
                      {a.note && <p className="text-xs text-gray-500">{a.note}</p>}
                    </div>
                    <div className="text-right">
                      <p className="text-xl font-bold text-blue-700">{fmt(fraNum * a.factor)}</p>
                      <p className="text-xs text-gray-500">{Math.round(a.factor * 100)}% of FRA</p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        )}
        <Card className="mt-4 bg-blue-50 border-blue-200">
          <CardContent className="py-3 px-4">
            <p className="text-sm text-blue-800">
              <span className="font-semibold">Note: </span>
              The chart assumes a Full Retirement Age of 67. If you were born before 1960, your FRA is between 66 and 66 years 10 months — the percentages shift slightly. Your actual benefit also depends on your lifetime earnings.
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

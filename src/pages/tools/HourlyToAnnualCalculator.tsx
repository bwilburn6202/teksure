import { useState } from "react";
import SEOHead from "@/components/SEOHead";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { DollarSign } from "lucide-react";

export default function HourlyToAnnualCalculator() {
  const [hourly, setHourly] = useState("");
  const [hoursPerWeek, setHoursPerWeek] = useState("40");

  const h = parseFloat(hourly);
  const hpw = parseFloat(hoursPerWeek);
  const valid = h > 0 && hpw > 0;
  const weekly = valid ? h * hpw : 0;
  const monthly = valid ? weekly * 52 / 12 : 0;
  const annual = valid ? weekly * 52 : 0;

  function fmt(n: number) { return n.toLocaleString("en-US", { style: "currency", currency: "USD", maximumFractionDigits: 0 }); }

  return (
    <div className="min-h-screen bg-gray-50">
      <SEOHead title="Hourly to Annual Salary Calculator | TekSure" description="Type an hourly wage and see what it adds up to weekly, monthly, and yearly." />
      <div className="max-w-xl mx-auto px-4 py-8">
        <div className="mb-6">
          <div className="flex items-center gap-2 mb-1">
            <DollarSign className="h-7 w-7 text-emerald-700" />
            <h1 className="text-3xl font-bold text-gray-900">Hourly to Annual Salary</h1>
          </div>
          <p className="text-gray-600 text-lg">Quickly convert an hourly wage to weekly, monthly, and yearly pay.</p>
        </div>
        <Card>
          <CardContent className="py-6 px-4 space-y-4">
            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="text-base font-medium text-gray-700">Hourly rate ($)</label>
                <Input type="number" min="0" step="0.25" placeholder="22.50" value={hourly} onChange={e => setHourly(e.target.value)} className="mt-1 text-2xl text-center h-14" />
              </div>
              <div>
                <label className="text-base font-medium text-gray-700">Hours per week</label>
                <Input type="number" min="1" max="80" placeholder="40" value={hoursPerWeek} onChange={e => setHoursPerWeek(e.target.value)} className="mt-1 text-2xl text-center h-14" />
              </div>
            </div>
            <div className="flex flex-wrap gap-1">
              {[10, 20, 25, 30, 35, 40].map(n => (
                <button key={n} onClick={() => setHoursPerWeek(String(n))} className="text-xs px-2 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-700 hover:bg-emerald-100">{n} hrs</button>
              ))}
            </div>
            {valid && (
              <div className="space-y-2">
                <div className="flex justify-between p-3 bg-emerald-50 rounded"><span className="text-base">Weekly</span><span className="text-xl font-bold text-emerald-700">{fmt(weekly)}</span></div>
                <div className="flex justify-between p-3 bg-emerald-50 rounded"><span className="text-base">Monthly</span><span className="text-xl font-bold text-emerald-700">{fmt(monthly)}</span></div>
                <div className="flex justify-between p-3 bg-emerald-100 rounded"><span className="text-base font-semibold">Yearly</span><span className="text-2xl font-bold text-emerald-700">{fmt(annual)}</span></div>
              </div>
            )}
          </CardContent>
        </Card>
        <Card className="mt-4 bg-blue-50 border-blue-200">
          <CardContent className="py-3 px-4">
            <p className="text-sm text-blue-800">
              <span className="font-semibold">Note: </span>
              These are gross (pre-tax) numbers. Federal, state, and FICA taxes typically take 20-30% before money hits your account.
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

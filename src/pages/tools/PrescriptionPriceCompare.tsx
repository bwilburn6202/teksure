import { useState } from "react";
import SEOHead from "@/components/SEOHead";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Pill, Printer } from "lucide-react";

interface Price {
  label: string;
  amount: string;
}

export default function PrescriptionPriceCompare() {
  const [drug, setDrug] = useState("");
  const [insurance, setInsurance] = useState("");
  const [costcoCash, setCostcoCash] = useState("");
  const [goodrx, setGoodrx] = useState("");
  const [marketCash, setMarketCash] = useState("");
  const [supply, setSupply] = useState("30");

  function num(s: string): number {
    const n = parseFloat(s);
    return Number.isFinite(n) ? n : 0;
  }

  const prices: Price[] = [
    { label: "Your insurance copay", amount: insurance },
    { label: "Costco cash (no card needed)", amount: costcoCash },
    { label: "GoodRx coupon at your pharmacy", amount: goodrx },
    { label: "Market cash price (pharmacy you visit)", amount: marketCash },
  ].filter(p => num(p.amount) > 0);

  const sorted = [...prices].sort((a, b) => num(a.amount) - num(b.amount));
  const cheapest = sorted[0];
  const savings = sorted.length >= 2 ? num(sorted[sorted.length - 1].amount) - num(sorted[0].amount) : 0;

  function fmt(n: number): string {
    return n.toLocaleString("en-US", { style: "currency", currency: "USD" });
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <SEOHead title="Prescription Price Compare Tool | TekSure" description="Compare prescription drug prices across insurance, Costco cash, GoodRx, and your local pharmacy. See your potential savings before you fill." />
      <div className="max-w-2xl mx-auto px-4 py-8 print:p-4">
        <div className="mb-6 print:hidden">
          <div className="flex items-center gap-2 mb-1">
            <Pill className="h-7 w-7 text-rose-700" />
            <h1 className="text-3xl font-bold text-gray-900">Prescription Price Compare</h1>
          </div>
          <p className="text-gray-600 text-lg">The same pill can cost five times more at one pharmacy than another. Type the prices you can find and see which is cheapest.</p>
        </div>

        <Card className="mb-4 print:hidden">
          <CardContent className="py-4 px-4 space-y-3">
            <div>
              <label className="text-base font-medium">Drug name (and dose)</label>
              <Input value={drug} onChange={e => setDrug(e.target.value)} placeholder="Lisinopril 20mg" className="mt-1" />
            </div>
            <div>
              <label className="text-base font-medium">Days supply</label>
              <select value={supply} onChange={e => setSupply(e.target.value)} className="w-full mt-1 border border-gray-300 rounded-md px-3 py-2 text-base bg-white">
                <option value="30">30 days</option>
                <option value="60">60 days</option>
                <option value="90">90 days</option>
              </select>
            </div>
            <div>
              <label className="text-base font-medium">1. Your insurance copay ($)</label>
              <p className="text-xs text-gray-500">From your most recent receipt or your plan benefits booklet</p>
              <Input type="number" step="0.01" value={insurance} onChange={e => setInsurance(e.target.value)} className="mt-1" placeholder="0.00" />
            </div>
            <div>
              <label className="text-base font-medium">2. Costco cash price ($)</label>
              <p className="text-xs text-gray-500">Costco sells to non-members. Search the drug at costco.com/pharmacy</p>
              <Input type="number" step="0.01" value={costcoCash} onChange={e => setCostcoCash(e.target.value)} className="mt-1" placeholder="0.00" />
            </div>
            <div>
              <label className="text-base font-medium">3. GoodRx coupon ($)</label>
              <p className="text-xs text-gray-500">Look up at goodrx.com. Show the coupon at any pharmacy</p>
              <Input type="number" step="0.01" value={goodrx} onChange={e => setGoodrx(e.target.value)} className="mt-1" placeholder="0.00" />
            </div>
            <div>
              <label className="text-base font-medium">4. Local pharmacy cash ($)</label>
              <p className="text-xs text-gray-500">Call your pharmacy and ask: what is the cash price for {drug || "this drug"}?</p>
              <Input type="number" step="0.01" value={marketCash} onChange={e => setMarketCash(e.target.value)} className="mt-1" placeholder="0.00" />
            </div>
          </CardContent>
        </Card>

        {sorted.length > 0 && (
          <Card className="mb-4 border-emerald-200 border-2 bg-emerald-50">
            <CardContent className="py-4 px-4">
              <p className="text-sm text-emerald-900">Cheapest option for {drug || "this drug"} ({supply}-day supply):</p>
              <p className="text-2xl font-bold text-emerald-900 mt-1">{cheapest.label}</p>
              <p className="text-3xl font-bold text-emerald-700">{fmt(num(cheapest.amount))}</p>
              {savings > 0 && (
                <p className="text-sm text-emerald-800 mt-2">You save up to <span className="font-bold">{fmt(savings)}</span> vs the most expensive option.</p>
              )}
            </CardContent>
          </Card>
        )}

        {sorted.length > 1 && (
          <Card className="mb-4">
            <CardContent className="py-4 px-4">
              <h2 className="text-lg font-semibold mb-2">Full comparison (cheapest first)</h2>
              <div className="divide-y">
                {sorted.map((p, i) => (
                  <div key={p.label} className="py-2 flex justify-between text-sm">
                    <span className={i === 0 ? "font-semibold text-emerald-700" : "text-gray-700"}>{p.label}</span>
                    <span className={i === 0 ? "font-bold text-emerald-700" : "font-semibold text-gray-900"}>{fmt(num(p.amount))}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        )}

        <Card className="mb-4 bg-blue-50 border-blue-200">
          <CardContent className="py-3 px-4">
            <p className="text-sm text-blue-900"><span className="font-semibold">Three quick tricks:</span> (1) Ask your doctor to switch you to a generic — typical savings 80-95%. (2) 90-day supply is almost always cheaper per pill than 30-day. (3) Mark Cuban Cost Plus Drugs (costplusdrugs.com) sells hundreds of generics at cost plus a $5 fee, with mailed delivery.</p>
          </CardContent>
        </Card>

        <Card className="bg-amber-50 border-amber-200 mb-4">
          <CardContent className="py-3 px-4">
            <p className="text-sm text-amber-900"><span className="font-semibold">Important:</span> If you use GoodRx or pay cash, the prescription does not go through your insurance and does not count toward your Part D deductible or true out-of-pocket (TrOOP). For most generics that is fine. For expensive brand-name drugs, talk to your pharmacist before going off-insurance.</p>
          </CardContent>
        </Card>

        <div className="flex gap-2 print:hidden">
          <Button variant="outline" onClick={() => window.print()} className="gap-2">
            <Printer className="h-4 w-4" />Print Comparison
          </Button>
        </div>
      </div>
    </div>
  );
}

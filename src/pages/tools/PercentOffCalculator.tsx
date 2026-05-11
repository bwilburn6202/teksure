import { useState } from "react";
import SEOHead from "@/components/SEOHead";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { Tag } from "lucide-react";

export default function PercentOffCalculator() {
  const [price, setPrice] = useState("");
  const [percentOff, setPercentOff] = useState("");

  const p = parseFloat(price);
  const o = parseFloat(percentOff);
  const valid = !isNaN(p) && !isNaN(o) && p > 0 && o >= 0 && o <= 100;
  const savings = valid ? (p * o) / 100 : 0;
  const finalPrice = valid ? p - savings : 0;

  return (
    <div className="min-h-screen bg-gray-50">
      <SEOHead title="Percent Off Calculator | TekSure" description="Type a price and a percent-off and see the sale price and what you save." />
      <div className="max-w-xl mx-auto px-4 py-8">
        <div className="mb-6">
          <div className="flex items-center gap-2 mb-1">
            <Tag className="h-7 w-7 text-rose-600" />
            <h1 className="text-3xl font-bold text-gray-900">Percent Off Calculator</h1>
          </div>
          <p className="text-gray-600 text-lg">Type the price and percent off — see the sale price and your savings.</p>
        </div>
        <Card>
          <CardContent className="py-6 px-4 space-y-4">
            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="text-base font-medium text-gray-700">Original price ($)</label>
                <Input type="number" min="0" step="0.01" placeholder="49.99" value={price} onChange={e => setPrice(e.target.value)} className="mt-1 text-2xl text-center h-14" />
              </div>
              <div>
                <label className="text-base font-medium text-gray-700">Percent off (%)</label>
                <Input type="number" min="0" max="100" step="1" placeholder="25" value={percentOff} onChange={e => setPercentOff(e.target.value)} className="mt-1 text-2xl text-center h-14" />
              </div>
            </div>
            <div className="flex flex-wrap gap-1">
              {[10, 15, 20, 25, 30, 40, 50, 60, 70, 75].map(n => (
                <button key={n} onClick={() => setPercentOff(String(n))} className="text-xs px-2 py-1 rounded-full bg-rose-50 border border-rose-200 text-rose-700 hover:bg-rose-100">{n}% off</button>
              ))}
            </div>
            {valid && (
              <div className="text-center bg-rose-50 border border-rose-200 rounded-md py-4 px-3 space-y-1">
                <p className="text-sm text-rose-600">You pay</p>
                <p className="text-4xl font-bold text-rose-700">${finalPrice.toFixed(2)}</p>
                <p className="text-sm text-rose-600">You save ${savings.toFixed(2)}</p>
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

import { useState } from "react";
import SEOHead from "@/components/SEOHead";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { Scale } from "lucide-react";

export default function WeightUnitConverter() {
  const [pounds, setPounds] = useState("");
  const [kilograms, setKilograms] = useState("");

  function fromLbs(v: string) {
    setPounds(v);
    const n = parseFloat(v);
    if (isNaN(n)) { setKilograms(""); return; }
    setKilograms((n * 0.453592).toFixed(2));
  }
  function fromKg(v: string) {
    setKilograms(v);
    const n = parseFloat(v);
    if (isNaN(n)) { setPounds(""); return; }
    setPounds((n / 0.453592).toFixed(2));
  }

  const lbs = parseFloat(pounds);
  const oz = !isNaN(lbs) ? (lbs * 16).toFixed(1) : null;
  const stones = !isNaN(lbs) ? (lbs / 14).toFixed(2) : null;
  const grams = !isNaN(parseFloat(kilograms)) ? (parseFloat(kilograms) * 1000).toFixed(0) : null;

  return (
    <div className="min-h-screen bg-gray-50">
      <SEOHead title="Weight Converter | TekSure" description="Two-way pounds and kilograms converter, plus ounces, stones, and grams." />
      <div className="max-w-xl mx-auto px-4 py-8">
        <div className="mb-6">
          <div className="flex items-center gap-2 mb-1">
            <Scale className="h-7 w-7 text-purple-600" />
            <h1 className="text-3xl font-bold text-gray-900">Weight Converter</h1>
          </div>
          <p className="text-gray-600 text-lg">Type into either box. The other updates instantly.</p>
        </div>
        <Card>
          <CardContent className="py-6 px-4 space-y-4">
            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="text-base font-medium text-gray-700">Pounds (lbs)</label>
                <Input type="number" step="0.1" min="0" placeholder="150" value={pounds} onChange={e => fromLbs(e.target.value)} className="mt-1 text-2xl text-center h-14" />
              </div>
              <div>
                <label className="text-base font-medium text-gray-700">Kilograms (kg)</label>
                <Input type="number" step="0.1" min="0" placeholder="68" value={kilograms} onChange={e => fromKg(e.target.value)} className="mt-1 text-2xl text-center h-14" />
              </div>
            </div>
            {(oz || grams) && (
              <div className="space-y-2 text-base">
                {oz && <div className="flex justify-between p-2 bg-purple-50 rounded"><span>Ounces</span><span className="font-semibold">{Number(oz).toLocaleString()} oz</span></div>}
                {grams && <div className="flex justify-between p-2 bg-purple-50 rounded"><span>Grams</span><span className="font-semibold">{Number(grams).toLocaleString()} g</span></div>}
                {stones && <div className="flex justify-between p-2 bg-purple-50 rounded"><span>Stones (UK)</span><span className="font-semibold">{stones} st</span></div>}
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

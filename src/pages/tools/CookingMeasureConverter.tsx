import { useState } from "react";
import SEOHead from "@/components/SEOHead";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ChefHat } from "lucide-react";

const CONVERSIONS = [
  { from: "tablespoon", fromAbbr: "tbsp", to: "teaspoon", multiplier: 3 },
  { from: "cup", fromAbbr: "cup", to: "tablespoon", multiplier: 16 },
  { from: "cup", fromAbbr: "cup", to: "teaspoon", multiplier: 48 },
  { from: "cup", fromAbbr: "cup", to: "fluid ounce", multiplier: 8 },
  { from: "quart", fromAbbr: "qt", to: "cup", multiplier: 4 },
  { from: "gallon", fromAbbr: "gal", to: "quart", multiplier: 4 },
  { from: "pound", fromAbbr: "lb", to: "ounce", multiplier: 16 },
  { from: "stick (butter)", fromAbbr: "stick", to: "tablespoon", multiplier: 8 },
];

export default function CookingMeasureConverter() {
  const [amount, setAmount] = useState("1");

  const n = parseFloat(amount);

  return (
    <div className="min-h-screen bg-gray-50">
      <SEOHead title="Cooking Measurement Converter | TekSure" description="Convert cups to tablespoons, sticks of butter, ounces, and more — clear chart at one glance." />
      <div className="max-w-xl mx-auto px-4 py-8">
        <div className="mb-6">
          <div className="flex items-center gap-2 mb-1">
            <ChefHat className="h-7 w-7 text-amber-600" />
            <h1 className="text-3xl font-bold text-gray-900">Cooking Measurement Converter</h1>
          </div>
          <p className="text-gray-600 text-lg">Type a number and see how it converts across the common kitchen units.</p>
        </div>

        <Card className="mb-4">
          <CardContent className="py-4 px-4">
            <label className="text-base font-medium text-gray-700">Amount</label>
            <Input type="number" step="0.25" min="0" value={amount} onChange={e => setAmount(e.target.value)} className="mt-1 text-3xl text-center h-16" />
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2 pt-3">
            <CardTitle className="text-base">Conversions</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="divide-y">
              {CONVERSIONS.map((c, i) => (
                <div key={i} className="py-2 flex items-center justify-between text-base">
                  <span className="text-gray-700">{!isNaN(n) ? n : "?"} {c.from}{!isNaN(n) && n !== 1 ? "s" : ""}</span>
                  <span className="text-gray-400">=</span>
                  <span className="font-semibold text-amber-700">
                    {!isNaN(n) ? (n * c.multiplier).toLocaleString("en-US", { maximumFractionDigits: 2 }) : "?"} {c.to}{!isNaN(n) && (n * c.multiplier) !== 1 ? "s" : ""}
                  </span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card className="mt-4 bg-blue-50 border-blue-200">
          <CardContent className="py-3 px-4">
            <p className="text-sm text-blue-800">
              <span className="font-semibold">Quick Tip: </span>
              For recipes that call for grams, remember a stick of butter (4 oz) is 113 grams, and a US cup of flour is around 125 grams.
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

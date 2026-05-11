import { useState } from "react";
import SEOHead from "@/components/SEOHead";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { ChefHat } from "lucide-react";

export default function RecipeScaler() {
  const [ingredients, setIngredients] = useState("");
  const [originalServings, setOriginalServings] = useState("4");
  const [newServings, setNewServings] = useState("");

  const factor = (parseFloat(newServings) / parseFloat(originalServings)) || 0;
  const lines = ingredients.split("\n").map(l => l.trim()).filter(Boolean);

  function scaleLine(line: string): string {
    if (!factor || factor === 1) return line;
    // Replace numbers (including fractions like 1/2, 1 1/2, decimals)
    return line.replace(/(\d+\s+\d+\/\d+|\d+\/\d+|\d+\.\d+|\d+)/g, m => {
      let n = 0;
      if (m.includes("/")) {
        const parts = m.split(/\s+/);
        for (const p of parts) {
          if (p.includes("/")) {
            const [num, den] = p.split("/").map(Number);
            n += num / den;
          } else {
            n += parseFloat(p);
          }
        }
      } else {
        n = parseFloat(m);
      }
      const scaled = n * factor;
      // Round to common cooking fractions
      if (scaled < 0.1) return scaled.toFixed(2);
      const eighths = Math.round(scaled * 8);
      if (eighths === 0) return "a pinch";
      if (eighths % 8 === 0) return String(eighths / 8);
      if (eighths % 4 === 0) return `${eighths / 4}/2`.replace("0/2", "0").replace("2/2", "1");
      if (eighths % 2 === 0) return formatFraction(eighths / 8);
      return formatFraction(eighths / 8);
    });
  }

  function formatFraction(d: number): string {
    const whole = Math.floor(d);
    const frac = d - whole;
    let fracStr = "";
    if (Math.abs(frac - 0.125) < 0.01) fracStr = "1/8";
    else if (Math.abs(frac - 0.25) < 0.01) fracStr = "1/4";
    else if (Math.abs(frac - 0.333) < 0.02) fracStr = "1/3";
    else if (Math.abs(frac - 0.375) < 0.01) fracStr = "3/8";
    else if (Math.abs(frac - 0.5) < 0.01) fracStr = "1/2";
    else if (Math.abs(frac - 0.625) < 0.01) fracStr = "5/8";
    else if (Math.abs(frac - 0.666) < 0.02) fracStr = "2/3";
    else if (Math.abs(frac - 0.75) < 0.01) fracStr = "3/4";
    else if (Math.abs(frac - 0.875) < 0.01) fracStr = "7/8";
    else fracStr = (Math.round(frac * 100) / 100).toString().slice(1); // .35
    if (whole === 0) return fracStr;
    if (!fracStr) return String(whole);
    return `${whole} ${fracStr}`;
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <SEOHead title="Recipe Scaler | TekSure" description="Type a recipe and the number of servings you want. The tool scales every ingredient amount." />
      <div className="max-w-2xl mx-auto px-4 py-8">
        <div className="mb-6">
          <div className="flex items-center gap-2 mb-1">
            <ChefHat className="h-7 w-7 text-amber-600" />
            <h1 className="text-3xl font-bold text-gray-900">Recipe Scaler</h1>
          </div>
          <p className="text-gray-600 text-lg">Paste a recipe and the number of servings you want. The tool will adjust the amounts.</p>
        </div>
        <Card>
          <CardContent className="py-4 px-4 space-y-3">
            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="text-base font-medium">Original servings</label>
                <Input type="number" min="1" value={originalServings} onChange={e => setOriginalServings(e.target.value)} className="mt-1 text-base h-12" />
              </div>
              <div>
                <label className="text-base font-medium">New servings (you want)</label>
                <Input type="number" min="1" value={newServings} onChange={e => setNewServings(e.target.value)} placeholder="2" className="mt-1 text-base h-12" />
              </div>
            </div>
            <div>
              <label className="text-base font-medium">Ingredients (one per line)</label>
              <textarea rows={8} value={ingredients} onChange={e => setIngredients(e.target.value)} placeholder={"2 cups flour\n1 cup sugar\n3 eggs\n1/2 tsp salt"} className="mt-1 w-full border border-gray-300 rounded-md px-3 py-2 text-base bg-white font-mono" />
            </div>
          </CardContent>
        </Card>

        {lines.length > 0 && newServings && factor > 0 && (
          <Card className="mt-4">
            <CardContent className="py-4 px-4">
              <p className="text-sm font-semibold text-amber-700 mb-2">Scaled for {newServings} serving{parseFloat(newServings) !== 1 ? "s" : ""}:</p>
              <ul className="space-y-1 font-mono text-sm">
                {lines.map((l, i) => (
                  <li key={i} className="py-1 border-b last:border-0">{scaleLine(l)}</li>
                ))}
              </ul>
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  );
}

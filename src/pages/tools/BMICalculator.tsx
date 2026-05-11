import { useState } from "react";
import SEOHead from "@/components/SEOHead";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { HeartPulse } from "lucide-react";

export default function BMICalculator() {
  const [feet, setFeet] = useState("");
  const [inches, setInches] = useState("");
  const [pounds, setPounds] = useState("");

  const f = parseInt(feet, 10);
  const i = parseFloat(inches);
  const lb = parseFloat(pounds);
  const heightInches = (isNaN(f) ? 0 : f * 12) + (isNaN(i) ? 0 : i);
  const valid = heightInches > 0 && !isNaN(lb) && lb > 0;
  const bmi = valid ? (lb / (heightInches * heightInches)) * 703 : 0;
  const bmiStr = bmi.toFixed(1);

  let category = "", color = "";
  if (valid) {
    if (bmi < 18.5) { category = "Underweight"; color = "text-blue-700 bg-blue-50 border-blue-200"; }
    else if (bmi < 25) { category = "Healthy range"; color = "text-green-700 bg-green-50 border-green-200"; }
    else if (bmi < 30) { category = "Overweight"; color = "text-amber-700 bg-amber-50 border-amber-200"; }
    else { category = "Obesity range"; color = "text-red-700 bg-red-50 border-red-200"; }
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <SEOHead title="BMI Calculator | TekSure" description="Enter your height and weight in US units and see your Body Mass Index with the standard health range." />
      <div className="max-w-xl mx-auto px-4 py-8">
        <div className="mb-6">
          <div className="flex items-center gap-2 mb-1">
            <HeartPulse className="h-7 w-7 text-red-600" />
            <h1 className="text-3xl font-bold text-gray-900">BMI Calculator</h1>
          </div>
          <p className="text-gray-600 text-lg">Body Mass Index based on your height in feet/inches and weight in pounds.</p>
        </div>
        <Card>
          <CardContent className="py-6 px-4 space-y-4">
            <div className="grid grid-cols-3 gap-2">
              <div>
                <label className="text-base font-medium text-gray-700">Feet</label>
                <Input type="number" min="3" max="8" placeholder="5" value={feet} onChange={e => setFeet(e.target.value)} className="mt-1 text-2xl text-center h-14" />
              </div>
              <div>
                <label className="text-base font-medium text-gray-700">Inches</label>
                <Input type="number" min="0" max="11" placeholder="7" value={inches} onChange={e => setInches(e.target.value)} className="mt-1 text-2xl text-center h-14" />
              </div>
              <div>
                <label className="text-base font-medium text-gray-700">Pounds</label>
                <Input type="number" min="50" max="600" placeholder="150" value={pounds} onChange={e => setPounds(e.target.value)} className="mt-1 text-2xl text-center h-14" />
              </div>
            </div>
            {valid && (
              <div className={`text-center border rounded-md py-4 px-3 ${color}`}>
                <p className="text-5xl font-bold">{bmiStr}</p>
                <p className="text-base mt-2 font-semibold">{category}</p>
                <p className="text-xs mt-1 opacity-80">Standard CDC ranges: 18.5-24.9 healthy, 25-29.9 overweight, 30+ obese</p>
              </div>
            )}
          </CardContent>
        </Card>
        <Card className="mt-4 bg-blue-50 border-blue-200">
          <CardContent className="py-3 px-4">
            <p className="text-sm text-blue-800">
              <span className="font-semibold">Important: </span>
              BMI is one rough measure. It doesn't account for muscle mass, bone density, or differences across ages and ethnicities. Talk with your doctor about what's healthy for you.
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

import { useState } from "react";
import SEOHead from "@/components/SEOHead";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Thermometer, ArrowLeftRight } from "lucide-react";

export default function TempUnitConverter() {
  const [fahrenheit, setFahrenheit] = useState("");
  const [celsius, setCelsius] = useState("");

  function fromF(v: string) {
    setFahrenheit(v);
    const n = parseFloat(v);
    if (isNaN(n)) { setCelsius(""); return; }
    setCelsius(((n - 32) * 5 / 9).toFixed(1));
  }

  function fromC(v: string) {
    setCelsius(v);
    const n = parseFloat(v);
    if (isNaN(n)) { setFahrenheit(""); return; }
    setFahrenheit((n * 9 / 5 + 32).toFixed(1));
  }

  const fNum = parseFloat(fahrenheit);
  let context = "";
  if (!isNaN(fNum)) {
    if (fNum >= 100.4) context = "🌡️ Fever (above 100.4°F)";
    else if (fNum >= 99.1) context = "Slightly elevated";
    else if (fNum >= 97.0 && fNum <= 99.0) context = "Normal body temperature";
    else if (fNum >= 32 && fNum <= 50) context = "❄️ Cold weather";
    else if (fNum >= 70 && fNum <= 80) context = "Room temperature";
    else if (fNum >= 350 && fNum <= 450) context = "🍰 Common baking range";
    else if (fNum >= 32 && fNum < 32.5) context = "Freezing point";
    else if (fNum >= 212) context = "Boiling point";
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <SEOHead title="Temperature Unit Converter | TekSure" description="Convert between Fahrenheit and Celsius. Body temperature, weather, cooking — instant two-way conversion." />
      <div className="max-w-xl mx-auto px-4 py-8">
        <div className="mb-6">
          <div className="flex items-center gap-2 mb-1">
            <Thermometer className="h-7 w-7 text-orange-600" />
            <h1 className="text-3xl font-bold text-gray-900">Temperature Converter</h1>
          </div>
          <p className="text-gray-600 text-lg">Type into either box. The other one updates instantly.</p>
        </div>
        <Card>
          <CardContent className="py-6 px-4 space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-[1fr_auto_1fr] gap-4 items-center">
              <div>
                <label className="text-base font-medium text-gray-700">Fahrenheit (°F)</label>
                <Input type="number" step="0.1" placeholder="98.6" value={fahrenheit} onChange={e => fromF(e.target.value)} className="mt-1 text-2xl text-center h-14" />
              </div>
              <ArrowLeftRight className="h-6 w-6 text-gray-400 mx-auto" />
              <div>
                <label className="text-base font-medium text-gray-700">Celsius (°C)</label>
                <Input type="number" step="0.1" placeholder="37" value={celsius} onChange={e => fromC(e.target.value)} className="mt-1 text-2xl text-center h-14" />
              </div>
            </div>
            {context && (
              <div className="text-center bg-blue-50 border border-blue-200 rounded-md py-2 px-3">
                <p className="text-sm text-blue-800 font-medium">{context}</p>
              </div>
            )}
          </CardContent>
        </Card>

        <Card className="mt-4">
          <CardHeader className="pb-2 pt-3">
            <CardTitle className="text-base">Common references</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-1 text-sm">
              <p><span className="text-gray-500">Freezing point of water:</span> <span className="font-mono">32°F = 0°C</span></p>
              <p><span className="text-gray-500">Normal body temperature:</span> <span className="font-mono">98.6°F = 37°C</span></p>
              <p><span className="text-gray-500">Fever threshold (CDC):</span> <span className="font-mono">100.4°F = 38°C</span></p>
              <p><span className="text-gray-500">Comfortable room:</span> <span className="font-mono">72°F = 22.2°C</span></p>
              <p><span className="text-gray-500">Hot summer day:</span> <span className="font-mono">90°F = 32.2°C</span></p>
              <p><span className="text-gray-500">Boiling point of water:</span> <span className="font-mono">212°F = 100°C</span></p>
              <p><span className="text-gray-500">Bake a cake:</span> <span className="font-mono">350°F = 177°C</span></p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

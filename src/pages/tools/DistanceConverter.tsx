import { useState } from "react";
import SEOHead from "@/components/SEOHead";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { MapPin } from "lucide-react";

export default function DistanceConverter() {
  const [miles, setMiles] = useState("1");
  const m = parseFloat(miles);
  const isValid = !isNaN(m) && m >= 0;

  return (
    <main className="min-h-screen bg-muted">
      <SEOHead title="Distance Converter | TekSure" description="Type miles and see kilometers, feet, meters, and yards instantly." />
      <div className="max-w-xl mx-auto px-4 py-8">
        <div className="mb-6">
          <div className="flex items-center gap-2 mb-1">
            <MapPin className="h-7 w-7 text-info-foreground" />
            <h1 className="text-3xl font-bold text-foreground">Distance Converter</h1>
          </div>
          <p className="text-muted-foreground text-lg">Type a distance in miles and see all the common conversions.</p>
        </div>
        <Card>
          <CardContent className="py-6 px-4 space-y-4">
            <div>
              <label className="text-base font-medium text-foreground">Miles</label>
              <Input type="number" step="0.1" min="0" value={miles} onChange={e => setMiles(e.target.value)} className="mt-1 text-3xl text-center h-16" />
            </div>
            {isValid && (
              <div className="space-y-2 text-base">
                <div className="flex justify-between p-2 bg-info rounded"><span>Kilometers</span><span className="font-semibold">{(m * 1.609344).toFixed(2)} km</span></div>
                <div className="flex justify-between p-2 bg-info rounded"><span>Feet</span><span className="font-semibold">{(m * 5280).toLocaleString()} ft</span></div>
                <div className="flex justify-between p-2 bg-info rounded"><span>Yards</span><span className="font-semibold">{(m * 1760).toLocaleString()} yd</span></div>
                <div className="flex justify-between p-2 bg-info rounded"><span>Meters</span><span className="font-semibold">{(m * 1609.344).toFixed(0)} m</span></div>
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </main>
  );
}

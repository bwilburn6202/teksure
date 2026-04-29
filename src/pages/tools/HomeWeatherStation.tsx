import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { CloudRain } from 'lucide-react';

const PICKS = [
  { name: 'WeatherFlow Tempest', price: '$330', best: 'Best premium. Lightning detection, rain, wind, temp. Wireless. Solar-powered.', good: 'Best overall pick.' },
  { name: 'Ambient Weather WS-2902', price: '$150', best: 'Mid-range. Full data set. Connects to your weather app and apps.', good: 'Best value.' },
  { name: 'AcuRite Iris (5-in-1)', price: '$150', best: 'Solid mid-range. Easy setup. Good display.', good: 'Reliable mid-tier.' },
  { name: 'AcuRite indoor/outdoor (basic)', price: '$30-50', best: 'Just temperature and humidity, indoor + outdoor. Not connected to internet — just a display.', good: 'Best entry point.' },
  { name: 'La Crosse Technology', price: '$50-150', best: 'Mid-range, simpler displays. Often available at Costco.', good: 'Good budget reliability.' },
];

export default function HomeWeatherStation() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Home Weather Station Picker — Tempest, AcuRite | TekSure" description="Hyperlocal weather data — temp, rain, wind right at your home. Plain-English picks for the best home weather stations." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <CloudRain className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Home Weather Station</h1>
          <p className="text-lg text-muted-foreground">Your YARD\'s weather, not just the airport\'s.</p>
        </div>

        <div className="space-y-3 mb-6">
          {PICKS.map(p => (
            <Card key={p.name}>
              <CardContent className="pt-6">
                <div className="flex justify-between items-baseline mb-1">
                  <h3 className="font-bold text-lg">{p.name}</h3>
                  <span className="text-sm font-semibold text-primary">{p.price}</span>
                </div>
                <p className="text-sm">{p.best}</p>
                <p className="text-sm text-muted-foreground">{p.good}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Why a home station beats apps</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li><strong>Hyperlocal</strong> — phone weather might be 10 miles away. Your mountain or the lake creates microclimates.</li>
              <li><strong>Lightning warning</strong> — Tempest detects strikes within minutes.</li>
              <li><strong>Rain accumulation</strong> — for gardening, water restrictions.</li>
              <li><strong>Frost warning</strong> for protecting plants.</li>
              <li><strong>Wind speed</strong> for sailors, kite flyers, gardeners with sensitive crops.</li>
              <li><strong>Connect to Citizen Weather</strong> network — your data helps weather forecasts.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Setup tips</h2>
            <ul className="list-disc pl-5 space-y-1 text-sm">
              <li>Mount in OPEN area — not next to house wall (heats up unequally).</li>
              <li>Rain gauge needs clear sky above (no overhang).</li>
              <li>Wind reading needs unobstructed view.</li>
              <li>If you connect to Wi-Fi, signal must reach outdoors.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="bg-muted/40">
          <CardContent className="pt-6">
            <h3 className="font-bold mb-2">For pure pleasure</h3>
            <p className="text-sm text-muted-foreground">A home weather station is one of those toys that brings simple joy. Watching real-time data from your yard. Comparing your high temp to neighbors. Tracking rain through a season. If you garden, sail, ski, or fly drones — surprisingly satisfying.</p>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}

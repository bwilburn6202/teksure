import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Wind } from 'lucide-react';

const PICKS = [
  { name: 'AirThings View Plus', price: '$300', best: 'Best all-round monitor. Radon, PM2.5, CO2, humidity, VOCs. Wi-Fi connected.', good: 'Best for full-home health.' },
  { name: 'PurpleAir', price: '$220', best: 'Outdoor air quality (PM2.5). Connects to community network — see real-time air everywhere.', good: 'Best for wildfire / pollution areas.' },
  { name: 'Awair Element', price: '$150', best: 'Indoor PM2.5, CO2, VOCs. Beautiful display. Connects to smart home.', good: 'Best entry-level monitor.' },
  { name: 'EcoQube', price: '$30-60', best: 'Cheap basic CO2 + temperature.', good: 'For just CO2 alerts.' },
  { name: 'AirNow app (FREE)', price: 'FREE', best: 'EPA real-time outdoor air quality. Map of your area.', good: 'Best free outdoor air check.' },
  { name: 'Radon test kit', price: '$15-30', best: 'One-time short-term radon test. Mail to lab.', good: 'EPA recommends every home test for radon.' },
];

export default function IndoorAirQuality() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Indoor Air Quality Monitor — PurpleAir, AirThings | TekSure" description="Wildfires, radon, mold — air quality affects sleep and health. Plain-English picks for indoor and outdoor air monitors." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Wind className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Indoor Air Quality</h1>
          <p className="text-lg text-muted-foreground">Air quality affects sleep, allergies, lungs, even cognition.</p>
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
            <h2 className="font-bold text-xl mb-3">What to monitor and why</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li><strong>PM2.5</strong> — fine particles from smoke, cooking, wildfires. Major cause of asthma, heart disease.</li>
              <li><strong>Radon</strong> — odorless gas from soil. Causes 21,000 lung cancer deaths/year in US. Test EVERY home.</li>
              <li><strong>CO2</strong> — high indoor CO2 causes drowsiness, headaches, poor concentration. Open windows.</li>
              <li><strong>VOCs</strong> — chemicals from cleaning products, paint, furniture. Linked to headaches and worse.</li>
              <li><strong>Humidity</strong> — under 30% causes dry skin/sinuses; over 60% breeds mold.</li>
              <li><strong>Temperature</strong> — for comfort and energy efficiency.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Air purifiers worth knowing</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li><strong>Coway AirMega 200M</strong> — best value. Around $150.</li>
              <li><strong>Levoit Core 400S</strong> — solid mid-range, smart features.</li>
              <li><strong>BlueAir 211+</strong> — premium quiet operation.</li>
              <li><strong>HEPA filter</strong> required to remove smoke and allergens. UV alone is mostly marketing.</li>
              <li><strong>Run continuously</strong> — air purifiers work over time, not in bursts.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="bg-muted/40">
          <CardContent className="pt-6">
            <h3 className="font-bold mb-2">If you live in wildfire country</h3>
            <p className="text-sm text-muted-foreground">A PurpleAir monitor + a $150 HEPA purifier in the bedroom = breathable air during smoke events. Worth far more than "wait it out."</p>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}

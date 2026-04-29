import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Zap } from 'lucide-react';

const EVS = [
  { name: 'Tesla Model 3', cost: '$40K', best: 'Best tech, supercharger network.', good: 'Best Tesla.' },
  { name: 'Hyundai Ioniq 5', cost: '$42K', best: 'Roomy, fast charging.', good: 'Best comfort.' },
  { name: 'Chevy Bolt', cost: '$27K', best: 'Cheapest reliable EV.', good: 'Best budget.' },
  { name: 'Ford Mustang Mach-E', cost: '$45K', best: 'SUV style, familiar Ford.', good: 'Best SUV.' },
  { name: 'Toyota bZ4X', cost: '$45K', best: 'Toyota reliability.', good: 'Best reliable.' },
];

export default function ElectricCarsForSeniors() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Electric Cars for Seniors | TekSure" description="Should seniors go EV? Plain-English guide." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Zap className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Electric Cars</h1>
          <p className="text-lg text-muted-foreground">EVs for seniors. Pros + cons.</p>
        </div>

        <div className="space-y-3 mb-6">
          {EVS.map(e => (
            <Card key={e.name}>
              <CardContent className="pt-6">
                <div className="flex justify-between items-baseline mb-1">
                  <h3 className="font-bold text-lg">{e.name}</h3>
                  <span className="text-sm font-semibold text-primary">{e.cost}</span>
                </div>
                <p className="text-sm">{e.best}</p>
                <p className="text-sm text-muted-foreground">{e.good}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">EV pros for seniors</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>No gas station trips.</li>
              <li>Quieter ride.</li>
              <li>Cheaper to operate (electricity vs gas).</li>
              <li>Less maintenance.</li>
              <li>Latest safety tech standard.</li>
              <li>Tax credits — $7,500 federal.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">EV cons</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Higher upfront cost.</li>
              <li>Charging time vs gas pump.</li>
              <li>Range anxiety road trips.</li>
              <li>Need home charger ($1K-3K).</li>
              <li>Battery replacement after 8-10 yrs.</li>
              <li>Tech-heavy interfaces.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Charging options</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li><strong>Level 1</strong> — regular outlet, slow.</li>
              <li><strong>Level 2 home</strong> — $1,500 install.</li>
              <li><strong>Tesla Superchargers</strong> — fast but Tesla-only.</li>
              <li><strong>Public DC fast chargers</strong> — 30 min.</li>
              <li>Charge overnight at home.</li>
              <li>Most never need public.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Senior pick: Tesla Model 3</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>$40K base price.</li>
              <li>$7,500 tax credit eligible.</li>
              <li>Best supercharger network.</li>
              <li>Auto-pilot helps senior drivers.</li>
              <li>Over-the-air software updates.</li>
              <li>App-controlled climate.</li>
              <li>Reliability improving.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">When EV NOT for you</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Apartment without charging.</li>
              <li>Frequent long road trips.</li>
              <li>Cold-climate worry (battery range).</li>
              <li>Tech-resistant.</li>
              <li>Limited budget.</li>
              <li>Hybrid better intermediate option.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Hybrid alternative</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Toyota Prius / RAV4 Hybrid.</li>
              <li>Honda CR-V Hybrid.</li>
              <li>Best of both worlds.</li>
              <li>50+ MPG.</li>
              <li>No charging required.</li>
              <li>Toyota reliability proven.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="bg-muted/40">
          <CardContent className="pt-6">
            <h3 className="font-bold mb-2">Test drive first</h3>
            <p className="text-sm text-muted-foreground">EVs feel different — instant acceleration. Many love it. Some find unsettling. Test drive 30 minutes. Use city + highway. Try home charger before buying. Tax credit eligibility check on irs.gov. Many Costco / membership groups have EV programs. AARP guides on EVs available.</p>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}

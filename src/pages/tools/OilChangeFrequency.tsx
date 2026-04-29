import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Wrench } from 'lucide-react';

export default function OilChangeFrequency() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Oil Change Frequency for Seniors | TekSure" description="3,000 miles? 7,500? Plain-English oil change guide for seniors." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Wrench className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Oil Change Frequency</h1>
          <p className="text-lg text-muted-foreground">Old advice = wrong. Save time + money.</p>
        </div>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Modern car reality</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Old advice: every 3,000 miles.</li>
              <li>Modern cars: 5,000-10,000 miles.</li>
              <li>Synthetic oil: 7,500-15,000 miles.</li>
              <li>Check OWNER&apos;S MANUAL.</li>
              <li>Most quick lube places try to upsell.</li>
              <li>Don&apos;t over-change — wastes money.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Where to go</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li><strong>Dealer</strong> — most expensive but full service.</li>
              <li><strong>Trusted independent</strong> — best value.</li>
              <li><strong>Quick lube (Jiffy, Valvoline)</strong> — convenient, watch upsells.</li>
              <li><strong>Costco</strong> — basic + cheap.</li>
              <li><strong>Walmart</strong> — cheapest, slow.</li>
              <li>Build relationship with mechanic.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Beware upsells</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>&quot;Engine flush&quot; — usually unnecessary.</li>
              <li>&quot;Transmission flush&quot; — only per manufacturer schedule.</li>
              <li>&quot;Coolant flush&quot; — usually only every 100K miles.</li>
              <li>&quot;Air filter&quot; — usually fine for 30K miles.</li>
              <li>Cabin air filter — every 1-2 years OK.</li>
              <li>Take photo of dashboard mileage before/after.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Senior tip: keep records</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Notebook in glove box.</li>
              <li>Date + mileage + service.</li>
              <li>Or app: Drivvo, MileIQ.</li>
              <li>Helps when selling car.</li>
              <li>Catches scams.</li>
              <li>Reminds when due.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="bg-muted/40">
          <CardContent className="pt-6">
            <h3 className="font-bold mb-2">Modern cars</h3>
            <p className="text-sm text-muted-foreground">Most 2010+ cars have oil life monitor on dashboard. Trust it. Says &quot;15% remaining&quot; — schedule change. Use synthetic if newer car. Saves money + time vs over-changing.</p>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}

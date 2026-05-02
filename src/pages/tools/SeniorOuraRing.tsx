import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Circle } from 'lucide-react';

export default function SeniorOuraRing() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Oura Ring for Seniors — Senior Guide" description="Use the Oura Ring to track sleep and health." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Circle className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Oura Ring</h1>
          <p className="text-lg text-muted-foreground">Health tracking on your finger.</p>
        </div>
        <div className="space-y-4">
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">1. What it is</h2><p>Smart ring that tracks sleep, heart rate, body temperature, activity. Worn 24/7.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">2. Cost</h2><p>$300-500 ring. $70/year membership for full data and insights.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">3. Get sized</h2><p>Free sizing kit. Wear plastic ring before ordering. Right size matters.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">4. Sleep score</h2><p>Each morning see a 0-100 score. Helps spot when sleep is too short or restless.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">5. Daytime readiness</h2><p>App suggests if you should rest or push hard. Helps avoid overdoing it.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">6. Battery</h2><p>5-7 days per charge. Tiny charger sits on a desk.</p></CardContent></Card>
          <Card className="bg-muted/40"><CardContent className="p-6"><p>Comfortable to sleep in. Some find it more useful than a watch — no screen distractions.</p></CardContent></Card>
        </div>
      </main>
      <Footer />
    </div>
  );
}

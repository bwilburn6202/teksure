import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Thermometer } from 'lucide-react';

export default function SeniorNestThermostat() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Nest Thermostat — Senior Guide" description="Use a Nest smart thermostat to save energy." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Thermometer className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Nest Thermostat</h1>
          <p className="text-lg text-muted-foreground">Save 10-15% on heating and cooling.</p>
        </div>
        <div className="space-y-4">
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">1. Cost</h2><p>$130 for the basic Nest. Many utilities give $50-100 rebates so it's nearly free.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">2. Pro install</h2><p>Hire an electrician for $100 if your old thermostat is complicated. Worth peace of mind.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">3. Google Home app</h2><p>Free app on phones. Adjust temperature from anywhere — even traveling.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">4. Schedule</h2><p>Set warmer when you're awake, cooler when you sleep. Saves on the bill.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">5. Voice control</h2><p>Hey Google, set thermostat to 72. Works with Alexa and Apple Home too.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">6. Energy report</h2><p>Email each month shows how much you ran the AC and how to save more.</p></CardContent></Card>
          <Card className="bg-muted/40"><CardContent className="p-6"><p>Pair with a smart vent or zone system for even more control. Or keep it simple — works great alone.</p></CardContent></Card>
        </div>
      </main>
      <Footer />
    </div>
  );
}

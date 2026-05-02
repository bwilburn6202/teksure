import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Thermometer } from 'lucide-react';

export default function SeniorEcobeeThermostat() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Ecobee Thermostat — Senior Guide" description="Save on heating with the Ecobee thermostat." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Thermometer className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Ecobee Thermostat</h1>
          <p className="text-lg text-muted-foreground">Smart, efficient temperature control.</p>
        </div>
        <div className="space-y-4">
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">1. Cost</h2><p>$170-250. Often utility rebate of $50-100 brings it down.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">2. Pro install</h2><p>$100 electrician for tricky wiring. Saves DIY frustration.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">3. Room sensors</h2><p>Place in bedrooms. Heats/cools rooms you actually use.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">4. Voice control</h2><p>Built-in Alexa speaker. Works with Google, Apple Home too.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">5. Energy reports</h2><p>App shows monthly usage. Compares to neighbors.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">6. Vacation hold</h2><p>One tap turns off when traveling. Resumes when you come home.</p></CardContent></Card>
          <Card className="bg-muted/40"><CardContent className="p-6"><p>Saves 10-15% on heating and cooling. Pays for itself in 1-2 years.</p></CardContent></Card>
        </div>
      </main>
      <Footer />
    </div>
  );
}

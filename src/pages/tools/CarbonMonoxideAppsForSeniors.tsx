import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Wind } from 'lucide-react';

export default function CarbonMonoxideAppsForSeniors() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Carbon Monoxide for Seniors | TekSure" description="CO detectors + apps. Senior silent killer prevention." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Wind className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Carbon Monoxide</h1>
          <p className="text-lg text-muted-foreground">Senior silent killer.</p>
        </div>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">CO detectors</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>$25-$50 each.</li><li>Outside bedrooms.</li><li>Each floor.</li><li>Senior critical.</li><li>10-year sealed best.</li><li>Test monthly.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Smart CO</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>Nest Protect $120.</li><li>Phone alerts.</li><li>Senior away from home.</li><li>Family alerted.</li><li>Voice + light.</li><li>Premium.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Symptoms</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>Headache.</li><li>Dizziness.</li><li>Confusion.</li><li>Senior similar to flu.</li><li>Multiple in house = CO.</li><li>Get out fast.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Causes</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>Furnace malfunction.</li><li>Gas water heater.</li><li>Stove + fireplace.</li><li>Senior gas appliances all.</li><li>Generator inside garage.</li><li>Car running closed garage.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Annual furnace check</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>$100-$200.</li><li>HVAC pro.</li><li>Senior critical fall.</li><li>Catches cracked heat exchanger.</li><li>CO source #1.</li><li>Don&apos;t skip.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Test + replace</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>Test monthly.</li><li>Replace 7-10 years.</li><li>Sensor degrades.</li><li>Senior schedule reminder.</li><li>Free Reminders app.</li><li>Critical maintenance.</li></ul></CardContent></Card>
        <Card className="bg-muted/40"><CardContent className="pt-6"><h3 className="font-bold mb-2">$50 CO + annual furnace = senior alive</h3><p className="text-sm text-muted-foreground">$50 CO detector outside bedroom + each floor = senior life saver. Plus $100-$200 annual furnace inspection critical fall. Replace detectors every 7-10 years. Smart Nest Protect $120 phone alerts when away. CO is silent killer — many seniors die yearly. Don&apos;t skip.</p></CardContent></Card>
      </main>
      <Footer />
    </div>
  );
}

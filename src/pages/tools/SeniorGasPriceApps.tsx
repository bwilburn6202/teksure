import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Fuel } from 'lucide-react';

export default function SeniorGasPriceApps() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Gas Price Apps for Seniors — TekSure" description="Find cheapest gas — GasBuddy, Upside, Costco app." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Fuel className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Gas Price Apps</h1>
          <p className="text-lg text-muted-foreground">Save 20-50¢ per gallon.</p>
        </div>
        <div className="space-y-4">
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">GasBuddy</h2><p>FREE. Most popular. User-reported prices update constantly.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Upside</h2><p>FREE. Cash back on gas. $100-$300/year typical earnings.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Costco app</h2><p>FREE. Costco gas is often 20-30¢ cheaper. Members only.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Sam&apos;s Club</h2><p>FREE. Same as Costco — members get cheaper gas.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Gas savings tips</h2><ul className="list-disc pl-5 space-y-1 text-sm"><li>Fill mid-week (Tue-Wed cheapest)</li><li>Avoid premium unless required</li><li>Properly inflated tires save 3%</li></ul></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Stack discounts</h2><p>Costco + Upside = 50¢/gallon savings sometimes. $500/year.</p></CardContent></Card>
          <Card className="bg-muted/40"><CardContent className="pt-6"><p className="text-sm">Quick Tip: Spending $100/week on gas? GasBuddy saves $5/week — $260/year.</p></CardContent></Card>
        </div>
      </main>
      <Footer />
    </div>
  );
}

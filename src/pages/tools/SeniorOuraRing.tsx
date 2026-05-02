import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Circle } from 'lucide-react';

export default function SeniorOuraRing() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Oura Ring for Seniors — TekSure" description="Oura Ring tracks sleep, heart, and recovery for seniors who don't like watches." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Circle className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Oura Ring for Seniors</h1>
          <p className="text-lg text-muted-foreground">A health tracker on your finger.</p>
        </div>
        <div className="space-y-4">
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Cost</h2><p>$300 ring + $6/month subscription. Premium feature unlocks reports.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Why a ring</h2><p>Smaller. No screen distractions. 5-7 day battery. Wear 24/7.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Tracks</h2><ul className="list-disc pl-5 space-y-1 text-sm"><li>Heart rate</li><li>Sleep stages</li><li>Body temperature</li><li>Stress levels</li><li>Activity</li></ul></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Sizing</h2><p>Free sizing kit before buying. Wear different rings for a few days to find fit.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Health insights</h2><p>App spots illness coming based on temperature/heart trends. Helps with meds and rest.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Alternatives</h2><p>Ultrahuman Ring ($349, no subscription). Samsung Galaxy Ring ($400).</p></CardContent></Card>
          <Card className="bg-muted/40"><CardContent className="pt-6"><p className="text-sm">Quick Tip: Wear ring on non-dominant hand. Less interference with daily activities.</p></CardContent></Card>
        </div>
      </main>
      <Footer />
    </div>
  );
}

import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Sparkles } from 'lucide-react';

export default function SeniorSwimmingApps() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Swimming Apps for Seniors — TekSure" description="Senior swimming — pool finder, water aerobics, swim watches." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Sparkles className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Swimming for Seniors</h1>
          <p className="text-lg text-muted-foreground">Best low-impact exercise.</p>
        </div>
        <div className="space-y-4">
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">SilverSneakers Splash</h2><p>FREE with Medicare Advantage. Water aerobics class.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Find a pool</h2><p>SwimUSA app. YMCA membership $40-$80/month.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Apple Watch swim</h2><p>Tracks laps and calories. Auto-detects swim strokes.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Why for seniors</h2><ul className="list-disc pl-5 space-y-1 text-sm"><li>Zero joint impact</li><li>Strengthens heart</li><li>Supports body</li><li>Builds muscle</li><li>Low fall risk</li></ul></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Aqua aerobics</h2><p>Easier than lap swimming. Most senior centers offer classes.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">3x weekly</h2><p>30 minutes 3x weekly = strong heart, joint pain reduction, better mood.</p></CardContent></Card>
          <Card className="bg-muted/40"><CardContent className="pt-6"><p className="text-sm">Quick Tip: Lap swim with kickboard if can&apos;t do full strokes. Cardio without arms.</p></CardContent></Card>
        </div>
      </main>
      <Footer />
    </div>
  );
}

import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Sparkles } from 'lucide-react';

export default function SeniorResistanceBands() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Resistance Bands for Seniors — TekSure" description="Strength training with bands — safer than weights for seniors." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Sparkles className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Resistance Bands</h1>
          <p className="text-lg text-muted-foreground">Safer than weights.</p>
        </div>
        <div className="space-y-4">
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Set $20</h2><p>5 bands. Light to heavy. Plenty for senior strength training.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Why for seniors</h2><ul className="list-disc pl-5 space-y-1 text-sm"><li>No heavy weights to drop</li><li>Variable resistance</li><li>Travel-friendly</li><li>Joint-friendly</li></ul></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">YouTube</h2><p>Free. &ldquo;Senior resistance band exercises.&rdquo; Lots of guided routines.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">2-3x weekly</h2><p>20 minutes. Targets all major muscle groups.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Strength = independence</h2><p>Maintains ability to climb stairs, carry groceries, get up from floor.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Safety</h2><p>Inspect bands monthly. Replace if cracked. Snap = injury.</p></CardContent></Card>
          <Card className="bg-muted/40"><CardContent className="pt-6"><p className="text-sm">Quick Tip: 20-min senior strength = better than 1-hour workout 1x weekly.</p></CardContent></Card>
        </div>
      </main>
      <Footer />
    </div>
  );
}

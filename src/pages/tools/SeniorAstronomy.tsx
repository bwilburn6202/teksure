import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Compass } from 'lucide-react';

export default function SeniorAstronomy() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Astronomy Apps for Seniors — TekSure" description="Star Walk, SkyView, Stellarium, smart telescopes for seniors." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Compass className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Astronomy for Seniors</h1>
          <p className="text-lg text-muted-foreground">Look up. See magic.</p>
        </div>
        <div className="space-y-4">
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">SkyView Free</h2><p>FREE. Point at sky. Identifies stars and planets.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Star Walk 2</h2><p>FREE. Beautiful constellations. Time travel mode.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Stellarium</h2><p>FREE desktop. Planetarium-grade. For Mac/PC.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Smart telescopes</h2><p>Unistellar eVscope $2,500. Auto-aligns. Senior-easy.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Beginner telescope</h2><p>Celestron NexStar $300. Computerized goto. Find objects.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Star parties</h2><p>Local astronomy clubs. Free events. Use their telescopes.</p></CardContent></Card>
          <Card className="bg-muted/40"><CardContent className="pt-6"><p className="text-sm">Quick Tip: Phone app + naked eye = magical free astronomy. No telescope needed.</p></CardContent></Card>
        </div>
      </main>
      <Footer />
    </div>
  );
}

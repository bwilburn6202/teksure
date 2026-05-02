import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Hand } from 'lucide-react';

export default function SeniorOneHandedCooking() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="One-Handed Cooking for Seniors — TekSure" description="Cooking after stroke or arm injury — adaptive tools for seniors." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Hand className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">One-Handed Cooking</h1>
          <p className="text-lg text-muted-foreground">After stroke or injury.</p>
        </div>
        <div className="space-y-4">
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Cutting board with spikes</h2><p>$25. Spikes hold food. Cut with one hand.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Rocker knife</h2><p>$15. Roll instead of saw. Easier with one hand.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Suction bowl</h2><p>$20. Bowl sticks to counter. Stir without bowl moving.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Electric can opener</h2><p>$30. One-button operation.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Jar opener</h2><p>$15. Mounts under cabinet. Press jar against. One hand.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Heat-resistant gloves</h2><p>$20. Safer than mitts. Better grip with one hand.</p></CardContent></Card>
          <Card className="bg-muted/40"><CardContent className="pt-6"><p className="text-sm">Quick Tip: Stroke recovery occupational therapists teach one-handed cooking.</p></CardContent></Card>
        </div>
      </main>
      <Footer />
    </div>
  );
}

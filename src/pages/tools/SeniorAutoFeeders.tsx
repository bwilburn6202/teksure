import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Sparkles } from 'lucide-react';

export default function SeniorAutoFeeders() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Automatic Pet Feeders for Seniors — TekSure" description="Smart pet feeders for seniors — schedule meals, monitor portions." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Sparkles className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Automatic Pet Feeders</h1>
          <p className="text-lg text-muted-foreground">Set it. Forget it. Pet stays fed.</p>
        </div>
        <div className="space-y-4">
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">PetSafe Smart Feed</h2><p>$170. Wi-Fi connected. Schedule from phone. Slow-feed mode for fast eaters.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Petlibro Granary</h2><p>$95. Well-rated budget pick. App-controlled.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">SureFeed Microchip</h2><p>$170. Opens only for the pet whose microchip you registered. Stops other pets stealing food.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Wet food feeder</h2><p>Cat Mate C500 ($60). Ice pack underneath keeps food cool 8+ hours.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Battery backup</h2><p>Pick a feeder with battery + plug. Power outages won&apos;t skip a meal.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Travel use</h2><p>Most run 1-2 weeks. Combine with a Furbo camera to check in remotely.</p></CardContent></Card>
          <Card className="bg-muted/40"><CardContent className="pt-6"><p className="text-sm">Quick Tip: Test for a week before leaving. Pet adjusts to the new schedule.</p></CardContent></Card>
        </div>
      </main>
      <Footer />
    </div>
  );
}

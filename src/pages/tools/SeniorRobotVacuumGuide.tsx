import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Sparkles } from 'lucide-react';

export default function SeniorRobotVacuumGuide() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Robot Vacuums for Seniors — TekSure" description="Best robot vacuums for seniors — Roomba, Roborock, and Eufy compared." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Sparkles className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Robot Vacuums for Seniors</h1>
          <p className="text-lg text-muted-foreground">Skip the bending and pushing.</p>
        </div>
        <div className="space-y-4">
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Why seniors choose them</h2><p>No back strain. Schedule daily cleaning. Empties itself on premium models.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Eufy 11S</h2><p>$160. Quiet. Slim — fits under furniture. Remote control included.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Roomba i3+</h2><p>$400. Self-emptying. Maps your home. Great for pet hair.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Roborock Q5</h2><p>$300. Very strong suction. Avoids stairs reliably.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">First-time setup</h2><p>Charge 6 hours. Pick up cords and small rugs. Hit the &ldquo;Clean&rdquo; button.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Maintenance</h2><p>Empty bin weekly. Clean brushes monthly. Replace filter every 6 months.</p></CardContent></Card>
          <Card className="bg-muted/40"><CardContent className="pt-6"><p className="text-sm">Quick Tip: Run it while you&apos;re out of the house — the noise is gone when you return.</p></CardContent></Card>
        </div>
      </main>
      <Footer />
    </div>
  );
}

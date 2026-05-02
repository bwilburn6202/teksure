import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Video } from 'lucide-react';

export default function SeniorTelevet() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Telehealth Vet Apps for Seniors — TekSure" description="Video chat with a vet from home — Pawp, Vetster, Chewy Connect." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Video className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Telehealth Vet Apps</h1>
          <p className="text-lg text-muted-foreground">Vet help from home.</p>
        </div>
        <div className="space-y-4">
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Pawp</h2><p>$24/month for unlimited 24/7 vet calls. $3,000 emergency fund included.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Vetster</h2><p>$50-$80 per video visit. Pay per visit. Real licensed vets.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Chewy Connect with a Vet</h2><p>Free for autoship customers. 24/7 chat.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Best for</h2><ul className="list-disc pl-5 space-y-1 text-sm"><li>Skin issues</li><li>Mild stomach upset</li><li>Behavior questions</li><li>Med refills</li></ul></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Not for emergencies</h2><p>Bleeding, breathing trouble, won&apos;t eat 24+ hours — go to a real vet ER.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Save money</h2><p>$50 video visit beats a $200 vet visit for minor issues.</p></CardContent></Card>
          <Card className="bg-muted/40"><CardContent className="pt-6"><p className="text-sm">Quick Tip: Have a list of pet&apos;s symptoms ready. Saves time on the call.</p></CardContent></Card>
        </div>
      </main>
      <Footer />
    </div>
  );
}

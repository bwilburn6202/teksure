import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { ClipboardCheck } from 'lucide-react';

export default function SeniorFuneralPlanning() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Funeral Planning for Seniors — TekSure" description="Plan funeral now — saves family thousands and stress." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <ClipboardCheck className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Funeral Planning</h1>
          <p className="text-lg text-muted-foreground">Gift to family.</p>
        </div>
        <div className="space-y-4">
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Pre-paid plans</h2><p>$5,000-$15,000. Locks in price. Family doesn&apos;t make decisions in grief.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Cremation cheaper</h2><p>$1,500-$3,500. Burial $7,000-$12,000+.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Funeral Consumers Alliance</h2><p>FREE. Local consumer help. Avoid scams.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Direct cremation</h2><p>$1,000-$2,000. No service. Family does memorial separately.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Veterans benefits</h2><p>FREE military burial in national cemetery. Spouse included.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Final Roadmap app</h2><p>$15. Stores all final wishes. Family accesses when needed.</p></CardContent></Card>
          <Card className="bg-muted/40"><CardContent className="pt-6"><p className="text-sm">Quick Tip: Tell family wishes now. Saves them stressful decisions in grief.</p></CardContent></Card>
        </div>
      </main>
      <Footer />
    </div>
  );
}

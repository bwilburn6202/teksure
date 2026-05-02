import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Tv } from 'lucide-react';

export default function SeniorSling() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Sling TV for Seniors — TekSure" description="Cheapest cable alternative — Sling TV for seniors. $40/month." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Tv className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Sling TV</h1>
          <p className="text-lg text-muted-foreground">Cheapest live TV.</p>
        </div>
        <div className="space-y-4">
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Sling Orange</h2><p>$40/month. ESPN, Disney, CNN, Food Network.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Sling Blue</h2><p>$40/month. NBC, FOX (in some areas), USA, MSNBC.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Combo</h2><p>$55/month. Both packages. Most channels for the price.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Local channels</h2><p>Limited. Most cities don&apos;t get NBC/ABC/CBS via Sling.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Add antenna</h2><p>$30 antenna gets ABC/NBC/CBS/FOX free. Combine with Sling = full cable replacement.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">DVR</h2><p>Free 50 hours. $5/month for 200 hours.</p></CardContent></Card>
          <Card className="bg-muted/40"><CardContent className="pt-6"><p className="text-sm">Quick Tip: Sling + antenna + Netflix = $60/month vs $150 cable.</p></CardContent></Card>
        </div>
      </main>
      <Footer />
    </div>
  );
}

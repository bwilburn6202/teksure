import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Ear } from 'lucide-react';

export default function SeniorOTCHearingAids() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="OTC Hearing Aids for Seniors — TekSure" description="Over-the-counter hearing aids for seniors — Lexie, Eargo, Jabra." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Ear className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">OTC Hearing Aids</h1>
          <p className="text-lg text-muted-foreground">No prescription. Save thousands.</p>
        </div>
        <div className="space-y-4">
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">FDA approved 2022</h2><p>Now legal to buy without prescription. Big savings vs traditional.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Lexie B2</h2><p>$1,000/pair. Bose-designed. Top-rated mid-range.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Eargo 7</h2><p>$2,950/pair. Invisible. Premium.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Jabra Enhance Plus</h2><p>$1,000/pair. Looks like earbuds. Great for tech-savvy seniors.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">AirPods Pro 2</h2><p>$249. FDA-approved as hearing aid. Massive savings if mild loss.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Real prescription</h2><p>For severe loss, see audiologist. Some Medicare Advantage covers.</p></CardContent></Card>
          <Card className="bg-muted/40"><CardContent className="pt-6"><p className="text-sm">Quick Tip: Try AirPods Pro 2 first. Save $700+ if it works for your level of loss.</p></CardContent></Card>
        </div>
      </main>
      <Footer />
    </div>
  );
}

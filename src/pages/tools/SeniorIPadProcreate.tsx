import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Pencil } from 'lucide-react';

export default function SeniorIPadProcreate() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Procreate for Senior Artists — TekSure" description="Procreate iPad app — digital painting, no mess, senior-friendly." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Pencil className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Procreate for Seniors</h1>
          <p className="text-lg text-muted-foreground">Digital art on iPad.</p>
        </div>
        <div className="space-y-4">
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Cost</h2><p>$13 one-time. No subscription. iPad only.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Apple Pencil</h2><p>$80-$130. Like real pencil. Pressure sensitive.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Why for seniors</h2><ul className="list-disc pl-5 space-y-1 text-sm"><li>No paint mess</li><li>Unlimited paper</li><li>Undo any mistake</li><li>Travel-friendly</li></ul></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">YouTube tutorials</h2><p>FREE. Hundreds. Senior-friendly slow tutorials.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Print art</h2><p>Save as JPEG. Print at home or Walgreens.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Sell prints</h2><p>Etsy, Redbubble. Many seniors sell digital art for income.</p></CardContent></Card>
          <Card className="bg-muted/40"><CardContent className="pt-6"><p className="text-sm">Quick Tip: Procreate + iPad + Apple Pencil = best senior art studio in your lap.</p></CardContent></Card>
        </div>
      </main>
      <Footer />
    </div>
  );
}

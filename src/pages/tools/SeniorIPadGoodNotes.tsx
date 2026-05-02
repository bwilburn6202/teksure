import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { PenTool } from 'lucide-react';

export default function SeniorIPadGoodNotes() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="GoodNotes for Senior iPad Users — TekSure" description="Handwriting on iPad — GoodNotes, Notability for seniors." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <PenTool className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">GoodNotes for Seniors</h1>
          <p className="text-lg text-muted-foreground">Handwriting on iPad.</p>
        </div>
        <div className="space-y-4">
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">GoodNotes 6</h2><p>$30/year. Best handwriting app. Convert to text.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Notability</h2><p>$15/year. Easier interface. Audio recording too.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Apple Notes</h2><p>FREE. Built-in handwriting. Works with Apple Pencil.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Why for seniors</h2><ul className="list-disc pl-5 space-y-1 text-sm"><li>Familiar handwriting feel</li><li>No more paper notes lost</li><li>Search handwriting</li><li>Search by date</li></ul></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Convert handwriting</h2><p>GoodNotes converts your handwriting to typed text.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Better than paper</h2><p>Search 100+ pages instantly. Find anything fast.</p></CardContent></Card>
          <Card className="bg-muted/40"><CardContent className="pt-6"><p className="text-sm">Quick Tip: Apple Notes is FREE. Try first before paying.</p></CardContent></Card>
        </div>
      </main>
      <Footer />
    </div>
  );
}

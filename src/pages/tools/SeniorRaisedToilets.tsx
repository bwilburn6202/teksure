import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Sparkles } from 'lucide-react';

export default function SeniorRaisedToilets() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Raised Toilet Seats for Seniors — TekSure" description="Easier to sit and stand — raised toilet seats with handles." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Sparkles className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Raised Toilet Seats</h1>
          <p className="text-lg text-muted-foreground">Easier on knees, hips.</p>
        </div>
        <div className="space-y-4">
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Drive Medical 4&quot;</h2><p>$30. Adds 4 inches. With or without arms.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">With handles</h2><p>$60. Arms to push up. Big help post-surgery.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Comfort-height toilet</h2><p>$200-$400. Permanent install. 17-19&quot; high vs standard 15&quot;.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Medicare</h2><p>Often covers raised seats with doctor prescription.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">After hip surgery</h2><p>Required for 6 weeks. Doctor sends prescription.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Easy clean</h2><p>Removes for cleaning. Most are dishwasher-safe.</p></CardContent></Card>
          <Card className="bg-muted/40"><CardContent className="pt-6"><p className="text-sm">Quick Tip: Toilet falls are common. $30 raised seat prevents most.</p></CardContent></Card>
        </div>
      </main>
      <Footer />
    </div>
  );
}

import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Heart } from 'lucide-react';

export default function SeniorAdultDiapersGuide() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Adult Briefs &amp; Pads for Seniors — TekSure" description="Incontinence products for seniors — discreet, comfortable, affordable." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Heart className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Adult Briefs &amp; Pads</h1>
          <p className="text-lg text-muted-foreground">No shame. Practical solutions.</p>
        </div>
        <div className="space-y-4">
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Best brands</h2><ul className="list-disc pl-5 space-y-1 text-sm"><li>Tena (most absorbent)</li><li>Depend (most popular)</li><li>Always Discreet (lighter)</li><li>Poise (pads)</li></ul></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Subscribe &amp; Save</h2><p>Amazon. 10-15% off. Auto-delivery. No store trips.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Medicare Advantage</h2><p>Some plans cover incontinence supplies. Check yours.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Free samples</h2><p>Tena, Depend send free samples. Try before buying boxes.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">When to see doctor</h2><p>Incontinence often treatable. Pelvic floor PT, meds, surgery.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Don&apos;t hide</h2><p>Affects 50%+ of senior women. Common. Help is available.</p></CardContent></Card>
          <Card className="bg-muted/40"><CardContent className="pt-6"><p className="text-sm">Quick Tip: Pelvic floor PT (Kegels with help) often resolves stress incontinence.</p></CardContent></Card>
        </div>
      </main>
      <Footer />
    </div>
  );
}

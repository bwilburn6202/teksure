import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Users } from 'lucide-react';

export default function SeniorMyHeritage() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="MyHeritage — Senior Guide" description="Use MyHeritage for DNA, photos, and family trees." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Users className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">MyHeritage</h1>
          <p className="text-lg text-muted-foreground">Genealogy plus photo magic.</p>
        </div>
        <div className="space-y-4">
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">1. DNA test</h2><p>$89. Strong in European ancestry. Combines well with Ancestry results.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">2. Photo enhancer</h2><p>Sharpens blurry old photos. Free for first 10. Subscription for more.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">3. Deep Nostalgia</h2><p>Animates old photos — eyes blink, head turns. Eerie and emotional.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">4. Colorize old photos</h2><p>Black and white photos get realistic color. Looks like a different era.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">5. Subscription</h2><p>$15-25/month for full records and unlimited tree size.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">6. Multi-language</h2><p>Strong support for Eastern European records others miss. Polish, Hungarian, German.</p></CardContent></Card>
          <Card className="bg-muted/40"><CardContent className="p-6"><p>Free 14-day trial. Test before paying. Cancel reminder on phone calendar.</p></CardContent></Card>
        </div>
      </main>
      <Footer />
    </div>
  );
}

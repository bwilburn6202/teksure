import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { CircleAlert } from 'lucide-react';

export default function SeniorMushroomID() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Mushroom ID Apps — Senior Guide" description="Apps for identifying mushrooms — with cautions." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <CircleAlert className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Mushroom ID Apps</h1>
          <p className="text-lg text-muted-foreground">Use cautiously. Eat carefully.</p>
        </div>
        <div className="space-y-4">
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">1. Picture Mushroom</h2><p>Snap photo. AI suggests species. $30/year for full database.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">2. Shroomify</h2><p>Free. UK-focused but works for similar North American species.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">3. iNaturalist</h2><p>Free. Real expert reviewers identify your photos. More reliable than AI alone.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">4. Never eat without expert</h2><p>Apps are not 100% accurate. Many edible mushrooms have deadly look-alikes.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">5. Local mycology club</h2><p>Search Mycological society + your state. Real experts hold free walks.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">6. Photo for fun</h2><p>Best use of these apps — identify and learn, not eat.</p></CardContent></Card>
          <Card className="bg-muted/40"><CardContent className="p-6"><p>Death cap mushrooms look like edible mushrooms. They kill. Always verify with multiple expert sources before eating.</p></CardContent></Card>
        </div>
      </main>
      <Footer />
    </div>
  );
}

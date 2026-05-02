import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Hammer } from 'lucide-react';

export default function SeniorWoodCarving() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Wood Carving for Seniors — TekSure" description="Senior wood carving — beginner kits, classes, safety." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Hammer className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Wood Carving</h1>
          <p className="text-lg text-muted-foreground">Calming senior hobby.</p>
        </div>
        <div className="space-y-4">
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Whittling kit</h2><p>$30 starter. Knife + basswood. Safe for beginners.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">YouTube</h2><p>FREE tutorials. Doug Linker. Easy senior projects.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Cut-resistant gloves</h2><p>$15. Critical safety. Wear always.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Dremel</h2><p>$80. Power carver. Easier on arthritic hands.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Senior wood clubs</h2><p>Most cities. Free or low fee. Senior wisdom shared.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Sell on Etsy</h2><p>Many carvers earn $200+/month from hobby.</p></CardContent></Card>
          <Card className="bg-muted/40"><CardContent className="pt-6"><p className="text-sm">Quick Tip: Whittle while watching TV. Productive hobby.</p></CardContent></Card>
        </div>
      </main>
      <Footer />
    </div>
  );
}

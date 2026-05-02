import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Apple } from 'lucide-react';

export default function SeniorProteinIntake() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Protein for Seniors — TekSure" description="Seniors need more protein than younger adults — track and meet daily goal." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Apple className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Protein for Seniors</h1>
          <p className="text-lg text-muted-foreground">Most seniors don&apos;t eat enough.</p>
        </div>
        <div className="space-y-4">
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Senior need</h2><p>1.0-1.2g protein per kg body weight. 150 lb senior = 70-80g daily.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Best sources</h2><ul className="list-disc pl-5 space-y-1 text-sm"><li>Eggs (6g each)</li><li>Greek yogurt (15g/cup)</li><li>Cottage cheese (28g/cup)</li><li>Salmon (25g/4oz)</li><li>Beans (15g/cup)</li></ul></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Spread protein</h2><p>30g per meal. Better absorption than 60g at one meal.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Protein shakes</h2><p>Premier Protein, Fairlife. 30g/serving. Easy senior breakfast.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Why critical</h2><p>Sarcopenia (muscle loss) accelerates after 60. Protein + exercise prevents.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Track in app</h2><p>MyFitnessPal. Cronometer. See actual protein vs goal.</p></CardContent></Card>
          <Card className="bg-muted/40"><CardContent className="pt-6"><p className="text-sm">Quick Tip: Greek yogurt + protein shake = 45g protein in 10 minutes.</p></CardContent></Card>
        </div>
      </main>
      <Footer />
    </div>
  );
}

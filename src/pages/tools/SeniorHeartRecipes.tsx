import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Apple } from 'lucide-react';

export default function SeniorHeartRecipes() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Heart-Healthy Recipe Apps for Seniors — TekSure" description="DASH diet, Mediterranean recipes — heart-healthy app guide." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Apple className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Heart-Healthy Recipes</h1>
          <p className="text-lg text-muted-foreground">DASH and Mediterranean.</p>
        </div>
        <div className="space-y-4">
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">DASH diet apps</h2><p>NIH official. FREE recipe app. Lower BP within weeks.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Mediterranean Diet</h2><p>NYT Cooking, Taste of Home. Salmon, olive oil, vegetables.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">American Heart Association</h2><p>FREE recipes. heart.org. Doctor-approved.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Filter by sodium</h2><p>Yummly, Allrecipes filter under 600 mg. Real heart-healthy meals.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Replace salt</h2><p>Lemon, herbs, garlic. Same flavor without sodium.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Real benefit</h2><p>DASH diet drops BP 8-14 mmHg. Better than some medications.</p></CardContent></Card>
          <Card className="bg-muted/40"><CardContent className="pt-6"><p className="text-sm">Quick Tip: Cook 80% from scratch. Restaurant food has 3x sodium.</p></CardContent></Card>
        </div>
      </main>
      <Footer />
    </div>
  );
}

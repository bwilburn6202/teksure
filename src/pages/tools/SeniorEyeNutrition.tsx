import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Apple } from 'lucide-react';

export default function SeniorEyeNutrition() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Eye Nutrition for Seniors — TekSure" description="Foods and supplements for senior eye health — AREDS2, lutein." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Apple className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Eye Nutrition for Seniors</h1>
          <p className="text-lg text-muted-foreground">Slow macular degeneration.</p>
        </div>
        <div className="space-y-4">
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">AREDS2 supplements</h2><p>$15/month. Doctor-recommended. Slows macular degeneration progression.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Best foods</h2><ul className="list-disc pl-5 space-y-1 text-sm"><li>Spinach (lutein)</li><li>Salmon (omega-3)</li><li>Eggs (zeaxanthin)</li><li>Bell peppers (vitamin C)</li><li>Nuts (vitamin E)</li></ul></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Skip</h2><p>Vitamin A overdose harmful. Stick to recommended daily.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Carrots myth</h2><p>Helps but spinach better. Beta carotene for night vision.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Annual eye exam</h2><p>Macular degeneration silent. Yearly screen catches early.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Hydration</h2><p>Dry eyes from dehydration. 8 glasses of water daily helps.</p></CardContent></Card>
          <Card className="bg-muted/40"><CardContent className="pt-6"><p className="text-sm">Quick Tip: Real food beats supplements. Eat spinach 3x weekly.</p></CardContent></Card>
        </div>
      </main>
      <Footer />
    </div>
  );
}

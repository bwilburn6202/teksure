import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Apple } from 'lucide-react';

export default function SeniorLowCarbCooking() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Low-Carb Cooking for Seniors — TekSure" description="Low-carb recipes for diabetic seniors — apps and meal planning." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Apple className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Low-Carb Cooking</h1>
          <p className="text-lg text-muted-foreground">Manage diabetes through food.</p>
        </div>
        <div className="space-y-4">
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Diet Doctor app</h2><p>$10/month. Best low-carb recipe app. Tested for blood sugar.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Carb Manager</h2><p>FREE. Logs every meal. Auto-tracks carbs.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Best swaps</h2><ul className="list-disc pl-5 space-y-1 text-sm"><li>Cauliflower rice instead of white rice</li><li>Zucchini noodles instead of pasta</li><li>Greek yogurt instead of sour cream</li><li>Almond flour instead of wheat flour</li></ul></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Read labels</h2><p>Total carbs &minus; fiber = net carbs. Track net carbs.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Plate method</h2><p>1/2 plate vegetables. 1/4 protein. 1/4 carbs. Easy guide.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Real benefit</h2><p>Studies show 20-30% A1C reduction with consistent low-carb.</p></CardContent></Card>
          <Card className="bg-muted/40"><CardContent className="pt-6"><p className="text-sm">Quick Tip: Eggs and avocado are senior diabetic favorites. Filling, no spike.</p></CardContent></Card>
        </div>
      </main>
      <Footer />
    </div>
  );
}

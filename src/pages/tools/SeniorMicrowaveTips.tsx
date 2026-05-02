import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Utensils } from 'lucide-react';

export default function SeniorMicrowaveTips() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Microwave Tips for Seniors — TekSure" description="Easy microwave cooking — frozen veggies, popcorn, baked potato in 5 min." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Utensils className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Microwave Tips</h1>
          <p className="text-lg text-muted-foreground">5-minute meals.</p>
        </div>
        <div className="space-y-4">
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Steam veggies</h2><p>2 cups in bowl. 1/4 cup water. Cover. 4 min. Drain.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Baked potato</h2><p>Wash. Pierce. 5-7 min. Faster than oven.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Hard-boiled eggs</h2><p>Microwave egg cooker $15. 6-8 min for hard-boiled.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Mug meals</h2><p>YouTube has hundreds. Eggs, oatmeal, cake in 2 minutes.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Reheat</h2><p>Rice with damp paper towel. Pizza on plate with cup of water. Better results.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Defrost</h2><p>Use defrost setting, not full power. Even thawing.</p></CardContent></Card>
          <Card className="bg-muted/40"><CardContent className="pt-6"><p className="text-sm">Quick Tip: 5-min Mug Meals cookbook for seniors. Hundreds of recipes.</p></CardContent></Card>
        </div>
      </main>
      <Footer />
    </div>
  );
}

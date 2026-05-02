import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Flame } from 'lucide-react';

export default function SeniorAirFryers() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Air Fryers for Seniors — TekSure" description="Best air fryers for seniors — easier, healthier than oven cooking." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Flame className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Air Fryers for Seniors</h1>
          <p className="text-lg text-muted-foreground">Easier than ovens. Healthier than frying.</p>
        </div>
        <div className="space-y-4">
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Ninja Foodi 6-quart</h2><p>$120. Most popular. Easy buttons. Good for 1-4 servings.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">COSORI 5.8-quart</h2><p>$100. Senior-friendly. Few buttons. Reliable.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Why seniors love them</h2><ul className="list-disc pl-5 space-y-1 text-sm"><li>No bending into oven</li><li>Cooks fast (10-15 min)</li><li>Less oil = healthier</li><li>Easier cleanup than frying</li></ul></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Easy meals</h2><p>Frozen chicken, fish, fries, vegetables. 12-18 minutes. No flipping needed.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Reheat better</h2><p>Pizza, fries, chicken — air fryer reheats crisp like new (microwaves make it soggy).</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Recipes</h2><p>Search &ldquo;air fryer for seniors&rdquo; on YouTube. Many simple cooks demonstrate.</p></CardContent></Card>
          <Card className="bg-muted/40"><CardContent className="pt-6"><p className="text-sm">Quick Tip: Spray with oil before cooking. Even 1 second of spray makes everything crispier.</p></CardContent></Card>
        </div>
      </main>
      <Footer />
    </div>
  );
}

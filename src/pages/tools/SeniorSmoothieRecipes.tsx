import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { GlassWater } from 'lucide-react';

export default function SeniorSmoothieRecipes() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Senior Smoothie Recipes | TekSure" description="High-protein high-nutrient smoothies for seniors. 5 plain-English recipes for energy + muscle." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <GlassWater className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Senior Smoothie Recipes</h1>
          <p className="text-lg text-muted-foreground">Easy nutrition when chewing or cooking is hard.</p>
        </div>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Why smoothies for seniors</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Easy chewing/swallowing.</li>
              <li>Pack 30g protein in 1 glass.</li>
              <li>Fit in fruits + veggies easily.</li>
              <li>Quick — 3 minutes prep.</li>
              <li>Save in freezer = lazy day breakfast.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">1. Power Breakfast (30g protein)</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>1 cup Greek yogurt</li>
              <li>1 scoop vanilla protein powder</li>
              <li>1 banana</li>
              <li>1 Tbsp peanut butter</li>
              <li>½ cup milk</li>
              <li>Ice — blend 30 sec.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">2. Berry Brain Booster</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>1 cup mixed frozen berries</li>
              <li>1 cup spinach (you won&apos;t taste it)</li>
              <li>1 scoop protein powder</li>
              <li>1 Tbsp ground flaxseed</li>
              <li>1 cup unsweetened almond milk</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">3. Green Goddess</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>1 cup spinach or kale</li>
              <li>½ avocado</li>
              <li>1 banana</li>
              <li>1 Tbsp honey</li>
              <li>1 cup orange juice</li>
              <li>Ginger (small piece) for anti-inflammatory.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">4. Tropical Recovery</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>½ cup frozen mango</li>
              <li>½ cup frozen pineapple</li>
              <li>1 scoop vanilla protein</li>
              <li>1 cup coconut water (electrolytes)</li>
              <li>Turmeric pinch.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">5. Chocolate Strength</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>1 scoop chocolate protein</li>
              <li>1 banana</li>
              <li>1 Tbsp almond butter</li>
              <li>1 Tbsp cocoa powder</li>
              <li>1 cup milk</li>
              <li>Ice — feels like dessert, 30g protein.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="bg-muted/40">
          <CardContent className="pt-6">
            <h3 className="font-bold mb-2">Best blender for seniors</h3>
            <p className="text-sm text-muted-foreground"><strong>NutriBullet Pro</strong> — $90, simple, no buttons. <strong>Magic Bullet</strong> — $40 budget pick. Avoid heavy Vitamix unless gift from family. One-button operation = senior friendly.</p>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}

import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { ChefHat } from 'lucide-react';

export default function MealPrepForOne() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Meal Prep for One | TekSure" description="Cooking solo for seniors. Plain-English meal-prep guide." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <ChefHat className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Meal Prep for One</h1>
          <p className="text-lg text-muted-foreground">Cook smarter alone. Save money + waste.</p>
        </div>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Cook once, eat 3x</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Cook on Sunday.</li>
              <li>Eat through Wednesday.</li>
              <li>Cook again Thursday.</li>
              <li>Eat through weekend.</li>
              <li>2 prep sessions per week.</li>
              <li>Saves time + money.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Single-serving cookware</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li><strong>Small skillet</strong> ($30) — 8-inch.</li>
              <li><strong>Personal slow cooker</strong> ($25).</li>
              <li><strong>Toaster oven</strong> — single chicken breast.</li>
              <li><strong>Rice cooker</strong> — small ($30).</li>
              <li><strong>Glass containers</strong> — leftovers.</li>
              <li><strong>Sharp knife</strong> — most important.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Easy single meals</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Sheet pan chicken + veggies.</li>
              <li>Baked sweet potato + broccoli.</li>
              <li>Egg scramble + toast.</li>
              <li>Salmon + rice + greens.</li>
              <li>Lentil soup (freezes well).</li>
              <li>Big salad + rotisserie chicken.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Build-a-meal pantry</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Eggs (12-pack lasts).</li>
              <li>Frozen veggies (no waste).</li>
              <li>Frozen fish portions.</li>
              <li>Greek yogurt + fruit.</li>
              <li>Whole grain bread.</li>
              <li>Beans + rice.</li>
              <li>Olive oil + spices.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Freeze + portion</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Cook 6 chicken breasts at once.</li>
              <li>Freeze in single-portion bags.</li>
              <li>Defrost morning of.</li>
              <li>Soups + chili freeze great.</li>
              <li>Label with date.</li>
              <li>Use within 3 months.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Senior nutrition focus</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Protein at every meal.</li>
              <li>2-3 cups vegetables daily.</li>
              <li>Fiber (whole grains, beans).</li>
              <li>Calcium (dairy, sardines, kale).</li>
              <li>Hydration — water with meals.</li>
              <li>Avoid: processed, sugary.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="bg-muted/40">
          <CardContent className="pt-6">
            <h3 className="font-bold mb-2">When you don&apos;t want to cook</h3>
            <p className="text-sm text-muted-foreground">Meals on Wheels — local, FREE for seniors qualifying. Silver Cuisine — heart-healthy delivered. Mom&apos;s Meals — Medicare-covered for some. Trader Joe&apos;s + Wegmans — single-serve heat-and-eat. Don&apos;t skip meals — leads to malnutrition. One nutritious meal beats none. Take care.</p>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}

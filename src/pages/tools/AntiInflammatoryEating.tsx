import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Salad } from 'lucide-react';

export default function AntiInflammatoryEating() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Anti-Inflammatory Eating for Seniors | TekSure" description="Reduce arthritis pain + chronic inflammation. Plain-English Mediterranean-style eating for seniors." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Salad className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Anti-Inflammatory Eating</h1>
          <p className="text-lg text-muted-foreground">Less pain. More energy. Slower aging.</p>
        </div>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Why inflammation matters</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Chronic inflammation = arthritis, heart disease, dementia.</li>
              <li>&quot;Inflammaging&quot; — increased inflammation with age.</li>
              <li>Diet is biggest lever you control.</li>
              <li>Mediterranean diet most studied + senior-friendly.</li>
              <li>2-4 weeks to feel difference.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Eat MORE of these</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li><strong>Fatty fish</strong> — salmon, sardines, mackerel. 2x/week.</li>
              <li><strong>Berries</strong> — blueberries, strawberries. Daily handful.</li>
              <li><strong>Leafy greens</strong> — spinach, kale, arugula.</li>
              <li><strong>Olive oil</strong> — extra virgin. Replace butter.</li>
              <li><strong>Nuts</strong> — walnuts, almonds. Daily handful.</li>
              <li><strong>Beans + lentils</strong> — multiple times/week.</li>
              <li><strong>Turmeric + ginger</strong> — fresh or in cooking.</li>
              <li><strong>Green tea</strong> — 2-3 cups/day.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Eat LESS of these</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li><strong>Processed meats</strong> — bacon, sausage, deli meat.</li>
              <li><strong>Sugary drinks</strong> — soda, sweet tea.</li>
              <li><strong>White flour</strong> — white bread, pastries.</li>
              <li><strong>Fried foods</strong> — fast food fries.</li>
              <li><strong>Margarine + vegetable oils</strong> — corn, soybean.</li>
              <li><strong>Excess alcohol</strong> — 1 drink/day max.</li>
              <li><strong>Red meat</strong> — limit to 1-2x/week.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Sample day</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li><strong>Breakfast</strong> — Greek yogurt, blueberries, walnuts, honey.</li>
              <li><strong>Lunch</strong> — salad with chickpeas, olive oil, tuna.</li>
              <li><strong>Snack</strong> — apple + almond butter.</li>
              <li><strong>Dinner</strong> — baked salmon, roasted veggies, brown rice.</li>
              <li><strong>Drink</strong> — water, green tea, occasional red wine.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="bg-muted/40">
          <CardContent className="pt-6">
            <h3 className="font-bold mb-2">Free resources</h3>
            <p className="text-sm text-muted-foreground"><strong>Oldways.org</strong> — free Mediterranean diet guides. <strong>Arthritis.org</strong> — free anti-inflammatory recipes. <strong>NIH MedlinePlus</strong> — Mediterranean diet for seniors. No supplements needed — food works.</p>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}

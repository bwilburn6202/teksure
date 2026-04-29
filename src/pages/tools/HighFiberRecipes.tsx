import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Apple } from 'lucide-react';

export default function HighFiberRecipes() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="High Fiber Recipes for Seniors | TekSure" description="Fiber-rich foods. Plain-English senior nutrition guide." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Apple className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">High Fiber Foods</h1>
          <p className="text-lg text-muted-foreground">Digestion, heart, weight. Get more fiber.</p>
        </div>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Senior fiber needs</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Women: 21g/day.</li>
              <li>Men: 30g/day.</li>
              <li>Most seniors get only 15g.</li>
              <li>Constipation = #1 senior complaint.</li>
              <li>Heart benefits.</li>
              <li>Lower cholesterol.</li>
              <li>Stable blood sugar.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Best fiber sources</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li><strong>Beans</strong> — black, kidney, garbanzo (15g/cup).</li>
              <li><strong>Berries</strong> — raspberries (8g/cup).</li>
              <li><strong>Avocado</strong> — 10g per fruit.</li>
              <li><strong>Pears</strong> — 6g.</li>
              <li><strong>Apples with skin</strong> — 4g.</li>
              <li><strong>Whole oats</strong> — 4g/cup cooked.</li>
              <li><strong>Sweet potato</strong> — 6g.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Easy senior recipes</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li><strong>Oatmeal</strong> + berries + nuts (10g).</li>
              <li><strong>Bean chili</strong> with vegetables (15g).</li>
              <li><strong>Avocado toast</strong> + tomato (12g).</li>
              <li><strong>Lentil soup</strong> (15g).</li>
              <li><strong>Whole-grain pasta</strong> + veggies (8g).</li>
              <li><strong>Chickpea salad</strong> (10g).</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Increase slowly</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Add 5g per week.</li>
              <li>Increase water with fiber.</li>
              <li>Bloating + gas = too fast.</li>
              <li>Soluble fiber gentler.</li>
              <li>Take 2-4 weeks to adjust.</li>
              <li>Check with doctor if conditions.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Drinks with fiber</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li><strong>Smoothies</strong> — chia + spinach + berries.</li>
              <li><strong>Prune juice</strong> — classic constipation help.</li>
              <li><strong>Metamucil</strong> — psyllium fiber.</li>
              <li><strong>Benefiber</strong> — tasteless fiber.</li>
              <li><strong>Citrucel</strong> — methylcellulose.</li>
              <li>OTC supplements OK.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Constipation relief</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Water 6-8 glasses daily.</li>
              <li>Move daily — even short walks.</li>
              <li>Coffee in morning.</li>
              <li>Fiber gradual.</li>
              <li>Probiotic yogurt.</li>
              <li>Magnesium citrate (gentle laxative).</li>
              <li>Doctor if 3+ days no go.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="bg-muted/40">
          <CardContent className="pt-6">
            <h3 className="font-bold mb-2">Convenient + cheap</h3>
            <p className="text-sm text-muted-foreground">Frozen mixed berries — fiber + antioxidants. Canned beans — quick, no cooking. Apples — keep at counter for snacks. Oatmeal — bulk = $0.30/serving. Bean burritos — frozen, microwave. Don&apos;t need expensive supplements. Whole foods cheaper + better.</p>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}

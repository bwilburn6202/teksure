import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Droplets } from 'lucide-react';

export default function SaltReductionTips() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Salt Reduction Tips for Seniors | TekSure" description="Cut sodium without losing flavor. Plain-English low-salt guide for seniors with high blood pressure." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Droplets className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Salt Reduction</h1>
          <p className="text-lg text-muted-foreground">Lower BP without losing flavor.</p>
        </div>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Sodium targets</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>FDA limit: 2,300mg/day (1 tsp salt).</li>
              <li>Heart Association recommends: 1,500mg/day.</li>
              <li>Most Americans eat 3,400mg/day.</li>
              <li>Cutting salt 1,000mg/day = lower BP 5-10 points.</li>
              <li>Read every label — sodium hides everywhere.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Hidden salt sources</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li><strong>Bread</strong> — 200mg per slice. Surprising #1.</li>
              <li><strong>Lunch meats</strong> — 500-1,000mg per 2oz.</li>
              <li><strong>Canned soup</strong> — 700-1,000mg per cup.</li>
              <li><strong>Pizza</strong> — 1,200mg per slice.</li>
              <li><strong>Frozen meals</strong> — 800-1,500mg.</li>
              <li><strong>Restaurant food</strong> — usually 2,000-4,000mg/meal.</li>
              <li><strong>Pickles, soy sauce, salad dressing</strong> — extreme.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Low-salt substitutes</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li><strong>Mrs. Dash</strong> — salt-free seasoning blends.</li>
              <li><strong>Lemon juice</strong> — adds bright flavor.</li>
              <li><strong>Garlic + onion</strong> — fresh or powder.</li>
              <li><strong>Black pepper</strong> — generous use OK.</li>
              <li><strong>Vinegar</strong> — apple cider, balsamic.</li>
              <li><strong>Fresh herbs</strong> — basil, rosemary, thyme.</li>
              <li>Avoid &quot;lite salt&quot; if on potassium-restricted diet.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Easy swaps</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>&quot;Low sodium&quot; canned soup (50% less).</li>
              <li>Rinse canned beans — removes 40% sodium.</li>
              <li>Fresh chicken instead of deli ham.</li>
              <li>Homemade pizza on naan (less salt than frozen).</li>
              <li>Unsalted nuts.</li>
              <li>Restaurant: ask sauce on side, no added salt.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="bg-muted/40">
          <CardContent className="pt-6">
            <h3 className="font-bold mb-2">DASH diet</h3>
            <p className="text-sm text-muted-foreground"><strong>DASH (Dietary Approaches to Stop Hypertension)</strong> — proven to lower BP. Free guide at NHLBI.nih.gov. Mediterranean diet works similarly. Both senior-friendly + don&apos;t require extreme changes.</p>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}

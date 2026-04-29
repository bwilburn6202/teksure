import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Calculator } from 'lucide-react';

export default function BulkBuyingMath() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Bulk Buying Math — When Costco Pays Off | TekSure" description="When bulk saves money. When it doesn&apos;t. Plain-English math + checklist for senior bulk shopping." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Calculator className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Bulk Buying Math</h1>
          <p className="text-lg text-muted-foreground">When it pays off. When it&apos;s a trap.</p>
        </div>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Best bulk buys</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li><strong>Paper goods</strong> — toilet paper, paper towels. Don&apos;t go bad.</li>
              <li><strong>Cleaning supplies</strong> — laundry detergent, dish soap.</li>
              <li><strong>Vitamins / supplements</strong> — Costco brands quality + cheap.</li>
              <li><strong>Pet food</strong> — if dog/cat eats consistently.</li>
              <li><strong>Coffee + tea</strong> — store properly.</li>
              <li><strong>Frozen meat / chicken</strong> — split + freeze in portions.</li>
              <li><strong>Spices</strong> — only IF you&apos;ll use within 12 months.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4 bg-yellow-50 border-yellow-300 dark:bg-yellow-950/20 dark:border-yellow-800">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Bad bulk buys</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li><strong>Fresh produce</strong> — rots. Especially for 1-2 person households.</li>
              <li><strong>Bread</strong> — molds in days.</li>
              <li><strong>Mayo, condiments</strong> — too much for 1-person.</li>
              <li><strong>Olive oil</strong> — turns rancid in 6-12 months.</li>
              <li><strong>Fancy snacks</strong> — you&apos;ll eat ALL of it. Calorie overspend.</li>
              <li><strong>Anything you don&apos;t already buy</strong> — Costco is great at making you buy more.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">The math test</h2>
            <ol className="list-decimal pl-5 space-y-2 text-sm">
              <li>Calculate price per unit (oz, lb, sheet) — Costco price + grocery price.</li>
              <li>Costco usually 20-50% cheaper per unit.</li>
              <li>BUT — only counts if you USE the whole package.</li>
              <li>If 25% goes to waste — you saved nothing.</li>
              <li>Senior households of 1-2 — many bulk items waste = no savings.</li>
            </ol>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Senior bulk-buy strategies</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Split with neighbor or family — buy big bulk, divide.</li>
              <li>Freeze in portions — meat, bread, butter.</li>
              <li>Buy NON-PERISHABLES bulk only.</li>
              <li>Visit ONCE per month, not weekly.</li>
              <li>Don&apos;t go hungry.</li>
              <li>List BEFORE — stick to it.</li>
              <li>Buy fresh produce + dairy at regular grocery.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="bg-muted/40">
          <CardContent className="pt-6">
            <h3 className="font-bold mb-2">Costco vs Aldi vs Walmart</h3>
            <p className="text-sm text-muted-foreground"><strong>Costco</strong> — best for bulk + meat + members-only specialties. <strong>Aldi</strong> — best for cheap regular groceries. <strong>Walmart</strong> — middle ground, biggest selection. Many senior households use ALL three. No need to be loyal.</p>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}

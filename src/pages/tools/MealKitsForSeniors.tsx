import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Soup } from 'lucide-react';

export default function MealKitsForSeniors() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Meal Kits for Seniors | TekSure" description="HelloFresh, Blue Apron senior meal kit comparison." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Soup className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Meal Kits</h1>
          <p className="text-lg text-muted-foreground">Senior cooking made easy.</p>
        </div>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">HelloFresh</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>$60-$100/week 2-person.</li><li>Senior-friendly recipes.</li><li>Pre-portioned.</li><li>30-min meals.</li><li>Free first box deal.</li><li>Worth trying.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Silver Cuisine BistroMD</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>Senior-targeted.</li><li>Heart-healthy options.</li><li>Diabetic-friendly.</li><li>Heat + serve.</li><li>$120/week.</li><li>Worth condition-specific.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Mom&apos;s Meals</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>$8/meal.</li><li>Medicare Advantage covers some.</li><li>Senior chronic conditions.</li><li>Heat + serve.</li><li>Free with eligibility.</li><li>Worth checking.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Senior tips</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>Start small order.</li><li>Pause subscription easy.</li><li>Senior less waste.</li><li>2-person box for solo.</li><li>Leftovers tomorrow.</li><li>Worth trying.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Cheaper alternatives</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>Walmart+ grocery delivery.</li><li>Senior plan + cook.</li><li>$50/week typical.</li><li>vs $300/week meal kits.</li><li>Worth math.</li><li>Cooking taught.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Costco prepared</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>Take-and-bake meals.</li><li>$10-$20 family-size.</li><li>Senior easy.</li><li>Heat + serve.</li><li>Cheap alternative.</li><li>Worth visit.</li></ul></CardContent></Card>
        <Card className="bg-muted/40"><CardContent className="pt-6"><h3 className="font-bold mb-2">Mom&apos;s Meals Medicare = senior often free</h3><p className="text-sm text-muted-foreground">Senior Mom&apos;s Meals often Medicare Advantage free for chronic conditions — check eligibility. HelloFresh $60-$100/wk if cooking. Silver Cuisine $120/wk heart-healthy. Costco take-and-bake $10-$20 cheap alternative. Many senior options.</p></CardContent></Card>
      </main>
      <Footer />
    </div>
  );
}

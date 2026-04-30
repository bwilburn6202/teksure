import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Salad } from 'lucide-react';

export default function SauerkrautBeansForSeniorGut() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Senior Gut Health Apps | TekSure" description="Microbiome tracking + senior gut health apps." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Salad className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Senior Gut Health</h1>
          <p className="text-lg text-muted-foreground">Microbiome + apps.</p>
        </div>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">ZOE app</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>$300 setup + $30/mo.</li><li>Personalized gut health.</li><li>Tim Spector science.</li><li>Senior nutrition.</li><li>Test gut + blood sugar.</li><li>Detailed program.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Free fiber tracking</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>MyFitnessPal — free.</li><li>Track fiber daily.</li><li>30g+ goal.</li><li>Senior gut benefit.</li><li>Most under-eat fiber.</li><li>Easy upgrade.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">30 plant rule</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>30 different plants/week.</li><li>Diversify gut bacteria.</li><li>Track in spreadsheet.</li><li>Seeds, herbs, spices count.</li><li>Senior gut diversity.</li><li>Studies support.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Fermented foods</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>Sauerkraut.</li><li>Kimchi.</li><li>Yogurt.</li><li>Kombucha.</li><li>Senior daily small.</li><li>Probiotic naturally.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">When to see GI</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>Constipation lasting.</li><li>Senior bloody stool — urgent.</li><li>Sudden changes.</li><li>Weight loss.</li><li>Don&apos;t self-treat.</li><li>Worth doctor.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Senior simple wins</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>Beans daily.</li><li>Berries daily.</li><li>Walking after meals.</li><li>Water 8 cups.</li><li>Senior gut basics.</li><li>Free + powerful.</li></ul></CardContent></Card>
        <Card className="bg-muted/40"><CardContent className="pt-6"><h3 className="font-bold mb-2">Free fiber + 30 plants/wk = senior gut</h3><p className="text-sm text-muted-foreground">Free MyFitnessPal tracks fiber. Aim 30g/day + 30 plants/week. ZOE app $300+ if want personalized. Senior gut affects everything — energy, mood, immunity. Cheap fix: more beans, berries, sauerkraut. Most senior wellness habit.</p></CardContent></Card>
      </main>
      <Footer />
    </div>
  );
}

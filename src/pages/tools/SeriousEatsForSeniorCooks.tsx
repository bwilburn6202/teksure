import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { UtensilsCrossed } from 'lucide-react';

export default function SeriousEatsForSeniorCooks() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Serious Eats for Senior Cooks | TekSure" description="Free best-tested recipes. Serious Eats senior cook guide." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <UtensilsCrossed className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Serious Eats</h1>
          <p className="text-lg text-muted-foreground">Free tested recipes.</p>
        </div>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Why senior cooks love it</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>Free recipes.</li><li>Heavily tested.</li><li>Explains the why.</li><li>Senior science approach.</li><li>Reliable results.</li><li>Trusted source.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">J Kenji Lopez-Alt</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>Site founder.</li><li>The Food Lab book.</li><li>YouTube channel free.</li><li>Senior cooking education.</li><li>Best how-to chef online.</li><li>Patient explainer.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Best categories</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>Best-ever recipes.</li><li>Quick weeknight.</li><li>Equipment reviews.</li><li>Technique guides.</li><li>Holiday menus.</li><li>Senior reliable.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Equipment reviews</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>Best knife.</li><li>Best cookware.</li><li>Best toaster oven.</li><li>Tested rigorously.</li><li>Senior smart purchase.</li><li>Save money on right gear.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Free vs paid</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>SeriousEats.com free.</li><li>NYT Cooking $60/yr.</li><li>America&apos;s Test Kitchen $50/yr.</li><li>Use free first.</li><li>Senior frugal.</li><li>Excellent quality free.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Senior tips</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>iPad in kitchen.</li><li>Increase font size.</li><li>Watch Kenji&apos;s YouTube videos.</li><li>Read comments tips.</li><li>Adjust to taste.</li><li>Build kitchen confidence.</li></ul></CardContent></Card>
        <Card className="bg-muted/40"><CardContent className="pt-6"><h3 className="font-bold mb-2">Free Kenji = senior chef training</h3><p className="text-sm text-muted-foreground">Free SeriousEats.com + Kenji&apos;s YouTube channel = best senior cooking education available. Tested recipes, the why behind them, equipment reviews. Many seniors discover real cooking skill late in life. Patient, science-based, trustworthy. Free.</p></CardContent></Card>
      </main>
      <Footer />
    </div>
  );
}

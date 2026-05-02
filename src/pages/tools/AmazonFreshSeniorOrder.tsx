import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Truck } from 'lucide-react';

export default function AmazonFreshSeniorOrder() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Amazon Fresh for Senior Orders | TekSure" description="Senior guide to Amazon Fresh + Whole Foods delivery." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Truck className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Amazon Fresh</h1>
          <p className="text-lg text-muted-foreground">Senior delivery.</p>
        </div>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Free with Prime</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>$139/year Prime.</li><li>Free Fresh delivery $100+.</li><li>Senior under = $10 fee.</li><li>2-hour windows.</li><li>Worth member.</li><li>Combine orders.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Whole Foods</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>Same Prime free delivery.</li><li>Senior premium produce.</li><li>$35 min.</li><li>2-hour windows.</li><li>Worth Prime.</li><li>365 brand cheap.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Selection limits</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>Not all areas served.</li><li>Senior check zip code.</li><li>Limited produce sometimes.</li><li>Compare local stores.</li><li>Worth backup option.</li><li>Don&apos;t rely solely.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Subscribe + Save</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>5-15% off recurring items.</li><li>Senior staples auto-deliver.</li><li>Toiletries, paper goods.</li><li>Worth setup.</li><li>Pause + cancel easy.</li><li>Saves trips.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Senior Prime Access</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>$7/month for SNAP/EBT/Medicaid.</li><li>50% off Prime.</li><li>Senior eligible.</li><li>Same Fresh benefits.</li><li>Worth checking.</li><li>Free if eligible.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Tips + ratings</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>Tip $5-$15 driver.</li><li>Senior good service tip.</li><li>Rate experience.</li><li>Substitutions option.</li><li>Worth setup.</li><li>Quality grocery delivery.</li></ul></CardContent></Card>
        <Card className="bg-muted/40"><CardContent className="pt-6"><h3 className="font-bold mb-2">Prime $139 + Subscribe Save = senior savings</h3><p className="text-sm text-muted-foreground">Senior Prime $139/yr unlocks free Amazon Fresh + Whole Foods delivery $100+. Subscribe + Save 5-15% staples auto-deliver. Senior Prime Access $7/mo if SNAP/EBT/Medicaid. Tip $5-$15 driver. Worth Prime member overall.</p></CardContent></Card>
      </main>
      <Footer />
    </div>
  );
}

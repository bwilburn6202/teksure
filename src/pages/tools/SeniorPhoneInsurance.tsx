import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Umbrella } from 'lucide-react';

export default function SeniorPhoneInsurance() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Phone Insurance for Seniors — TekSure" description="Phone insurance comparison — AppleCare+, AT&amp;T, Asurion, SquareTrade." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Umbrella className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Phone Insurance</h1>
          <p className="text-lg text-muted-foreground">Worth it for seniors? Often yes.</p>
        </div>
        <div className="space-y-4">
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">AppleCare+</h2><p>$10-$13/month. Best for iPhone. $29 screen repair, $99 other damage.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Carrier insurance</h2><p>$10-$20/month. AT&amp;T, Verizon, T-Mobile. Often more expensive than AppleCare+.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Asurion</h2><p>Common third party. $200 deductibles often. Read fine print.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">SquareTrade</h2><p>$8/month. 30-day return policy. Allstate-owned.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Credit card protection</h2><p>Premium cards (Chase Sapphire, Amex Platinum) include phone protection. FREE.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Skip insurance if</h2><p>Old phone or careful person. Insurance only worth it if you drop phones.</p></CardContent></Card>
          <Card className="bg-muted/40"><CardContent className="pt-6"><p className="text-sm">Quick Tip: AppleCare+ within 60 days of phone purchase only. Don&apos;t wait.</p></CardContent></Card>
        </div>
      </main>
      <Footer />
    </div>
  );
}

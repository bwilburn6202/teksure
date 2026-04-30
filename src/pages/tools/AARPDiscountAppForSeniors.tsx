import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Tag } from 'lucide-react';

export default function AARPDiscountAppForSeniors() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="AARP Discount App for Seniors | TekSure" description="$15 AARP membership = senior discounts everywhere." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Tag className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">AARP Discounts</h1>
          <p className="text-lg text-muted-foreground">$15 = many savings.</p>
        </div>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Membership</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>$15-$60/year.</li><li>5-year — $43 (best deal).</li><li>50+ eligible.</li><li>Senior huge savings.</li><li>Pays for itself fast.</li><li>Spouse free.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Discounts</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>5-15% hotels.</li><li>10% restaurants.</li><li>UPS shipping.</li><li>Eyewear.</li><li>Auto insurance.</li><li>Senior wide reach.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">App</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>AARP app — free.</li><li>Show ID at counter.</li><li>Find local discounts.</li><li>Senior easy.</li><li>iOS + Android.</li><li>QR code.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Restaurants</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>Outback 15%.</li><li>Denny&apos;s.</li><li>IHOP.</li><li>McDonald&apos;s coffee discount.</li><li>Senior daily savings.</li><li>Show card.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Auto insurance</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>The Hartford partner.</li><li>Safe driver discount.</li><li>Senior often save.</li><li>Compare quote.</li><li>$$ off premium.</li><li>Worth shopping.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Senior smart use</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>Always ask senior discount.</li><li>Show AARP card.</li><li>Stack with credit card rewards.</li><li>Senior frugal.</li><li>$500+/yr typical savings.</li><li>Multi-pay back.</li></ul></CardContent></Card>
        <Card className="bg-muted/40"><CardContent className="pt-6"><h3 className="font-bold mb-2">$43 5-year AARP = senior best value</h3><p className="text-sm text-muted-foreground">$43 for 5-year AARP membership = best senior discount value. $9/year. Pays in one hotel stay. Hotels, restaurants, auto insurance, eyewear, UPS. Free AARP app shows discounts. 50+ eligible. Most under-considered senior savings.</p></CardContent></Card>
      </main>
      <Footer />
    </div>
  );
}

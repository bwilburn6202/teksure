import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Gift } from 'lucide-react';

export default function SeniorChristmasShopping() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Holiday Shopping for Seniors — TekSure" description="Black Friday, Cyber Monday tips for seniors — saving without scams." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Gift className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Holiday Shopping</h1>
          <p className="text-lg text-muted-foreground">Save without falling for scams.</p>
        </div>
        <div className="space-y-4">
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Black Friday</h2><p>Friday after Thanksgiving. Best deals on TVs, laptops, appliances.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Cyber Monday</h2><p>Monday after Black Friday. Online deals. Same items often cheaper online.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Top apps</h2><ul className="list-disc pl-5 space-y-1 text-sm"><li>Honey (auto-applies coupons)</li><li>Rakuten (cash back)</li><li>Camelcamelcamel (Amazon prices)</li><li>Slickdeals (real deals)</li></ul></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Watch out for</h2><ul className="list-disc pl-5 space-y-1 text-sm"><li>Fake brand websites</li><li>&ldquo;Going out of business&rdquo; emails</li><li>Random gift card requests</li><li>Pressure-sale tactics</li></ul></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Use credit card</h2><p>Better fraud protection than debit. Free chargebacks.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Buy from known retailers</h2><p>Walmart, Target, Best Buy, Amazon — direct from the apps. Skip random ads.</p></CardContent></Card>
          <Card className="bg-muted/40"><CardContent className="pt-6"><p className="text-sm">Quick Tip: 20% senior discount on Tuesdays at Kohl&apos;s, Belk, others. Always ask.</p></CardContent></Card>
        </div>
      </main>
      <Footer />
    </div>
  );
}

import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Truck } from 'lucide-react';

export default function WalmartPlusForSeniors() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Walmart Plus for Seniors | TekSure" description="Walmart subscription. Free delivery + gas discount senior guide." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Truck className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Walmart Plus</h1>
          <p className="text-lg text-muted-foreground">Walmart subscription.</p>
        </div>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">What it is</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>$98/year subscription.</li><li>Free delivery.</li><li>Gas discount $0.10/gal.</li><li>Paramount+ included.</li><li>Senior alternative to Prime.</li><li>30-day trial.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Free delivery</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>Groceries to door.</li><li>$35 minimum order.</li><li>Same-day available.</li><li>Senior aging-in-place.</li><li>Cheaper than Instacart often.</li><li>Worth comparing.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Gas savings</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>$0.10/gal off.</li><li>Walmart, Murphy, Exxon.</li><li>App scans card.</li><li>Senior $50/yr savings driving.</li><li>Stacks with credit card.</li><li>Adds up.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Paramount+ included</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>Free Paramount+ Essential.</li><li>$60/year value.</li><li>Walmart+ effectively $38/yr.</li><li>Senior streaming bonus.</li><li>NCIS, CSI, Yellowstone.</li><li>Senior favorites.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">vs Amazon Prime</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>Walmart+ — $98.</li><li>Prime — $139.</li><li>Walmart cheaper.</li><li>Prime more selection.</li><li>Senior pick most useful.</li><li>Both have streaming.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Senior tips</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>Try 30 days free.</li><li>Cancel if not using.</li><li>Use grocery delivery weekly.</li><li>Save Paramount+ separately.</li><li>Senior frugal.</li><li>Compare benefits.</li></ul></CardContent></Card>
        <Card className="bg-muted/40"><CardContent className="pt-6"><h3 className="font-bold mb-2">$98 Walmart+ = grocery delivery</h3><p className="text-sm text-muted-foreground">$98/year Walmart+ = senior grocery delivery + Paramount+ + gas discount. Cheaper than Amazon Prime + Instacart fees. Especially if Walmart your local store. 30-day free trial. Many seniors prefer over Prime if don&apos;t need Amazon shopping.</p></CardContent></Card>
      </main>
      <Footer />
    </div>
  );
}

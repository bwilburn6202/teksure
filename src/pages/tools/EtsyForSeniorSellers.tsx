import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Store } from 'lucide-react';

export default function EtsyForSeniorSellers() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Etsy for Senior Sellers | TekSure" description="Sell crafts online. Etsy senior shop guide." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Store className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Etsy Selling</h1>
          <p className="text-lg text-muted-foreground">Senior craft income.</p>
        </div>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Open shop</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>$0.20 per listing.</li><li>6.5% transaction fee.</li><li>Senior easy setup.</li><li>Sell crafts globally.</li><li>4-month listing.</li><li>Renewals.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">What sells well</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>Vintage 20+ years.</li><li>Handmade crafts.</li><li>Personalized gifts.</li><li>Senior unique items.</li><li>Quilts, knits, paintings.</li><li>Pottery.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Photos critical</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>Bright natural light.</li><li>Multiple angles.</li><li>Senior take time.</li><li>$70 ring light.</li><li>Sells better.</li><li>Worth practice.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Shipping</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>USPS easy.</li><li>Etsy labels discount.</li><li>Senior package + ship.</li><li>Calculate before listing.</li><li>Free supplies USPS.</li><li>Track orders.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Senior income</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>$50-$5,000/month.</li><li>Depends item + effort.</li><li>Senior side income.</li><li>Tax implications.</li><li>1099-K threshold.</li><li>Consult accountant.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Watch fees</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>Listing + transaction + payment + ads.</li><li>Add up.</li><li>Senior price accordingly.</li><li>Calculate margin.</li><li>Don&apos;t lose money.</li><li>Etsy fee calculator.</li></ul></CardContent></Card>
        <Card className="bg-muted/40"><CardContent className="pt-6"><h3 className="font-bold mb-2">$0.20 listing = senior craft income</h3><p className="text-sm text-muted-foreground">Etsy $0.20 per listing + 6.5% sale fee = senior craft income side hustle. Vintage 20+ years sells well. Photos critical — bright light. USPS shipping easy. Senior $50-$5000/mo possible. Watch fees stack. Calculate margin.</p></CardContent></Card>
      </main>
      <Footer />
    </div>
  );
}

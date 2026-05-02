import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Truck } from 'lucide-react';

export default function MotorhomeRentalForSeniors() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Motorhome Rentals for Seniors | TekSure" description="RV rentals for senior road trips. Outdoorsy + RVshare." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Truck className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">RV Rentals</h1>
          <p className="text-lg text-muted-foreground">Senior road trips.</p>
        </div>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Outdoorsy</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>$100-$400/night.</li><li>Owner-listed RVs.</li><li>Senior try before buy.</li><li>Insurance included.</li><li>Class C easier drive.</li><li>Worth trying.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">RVshare</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>Similar to Outdoorsy.</li><li>Compare both.</li><li>Senior options.</li><li>Read reviews.</li><li>Delivery option.</li><li>Worth comparing.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Try before buy</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>RV $50k-$300k.</li><li>Senior big purchase.</li><li>Rent few times first.</li><li>Discover preferences.</li><li>Save big mistake.</li><li>Worth $$.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Class type</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>Class A — bus, hard drive.</li><li>Class B — van, easy.</li><li>Class C — easier.</li><li>Senior Class B/C best.</li><li>Smaller manageable.</li><li>Worth picking.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Cruise America</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>Major chain.</li><li>Standardized.</li><li>Senior reliable.</li><li>Pickup major cities.</li><li>$150-$300/night.</li><li>Worth chain.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Total cost</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>Rental + gas + camping.</li><li>$200-$500/day.</li><li>Senior plan ahead.</li><li>National parks reservations.</li><li>Worth knowing.</li><li>Plan budget.</li></ul></CardContent></Card>
        <Card className="bg-muted/40"><CardContent className="pt-6"><h3 className="font-bold mb-2">Outdoorsy + Class B = senior try-before-buy</h3><p className="text-sm text-muted-foreground">Senior dream RV — rent first via Outdoorsy/RVshare. Class B/C easier drive. $200-$500/day total. Try multiple before $50k+ purchase. Discover preferences. Cruise America chain reliable. Plan campground reservations. Worth multiple trial trips.</p></CardContent></Card>
      </main>
      <Footer />
    </div>
  );
}

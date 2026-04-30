import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Smartphone } from 'lucide-react';

export default function SIMTransferForSeniors() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="SIM Transfer + eSIM for Seniors | TekSure" description="Switch carriers + phones. Senior SIM card guide." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Smartphone className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">SIM + eSIM</h1>
          <p className="text-lg text-muted-foreground">Senior carrier switch.</p>
        </div>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">eSIM new way</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>iPhone 14+ US — eSIM only.</li><li>No physical card.</li><li>Activate via app.</li><li>Senior simpler.</li><li>Travel multiple eSIMs.</li><li>Newer phones.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Port number</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>Keep old number.</li><li>Tell new carrier.</li><li>They handle transfer.</li><li>1-2 hours typical.</li><li>Senior easy.</li><li>Don&apos;t cancel old first.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">SIM swap fraud</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>Scammer steals number.</li><li>Senior major risk.</li><li>Set carrier PIN.</li><li>Required for changes.</li><li>Critical protection.</li><li>Call carrier set up.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Travel eSIM</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>Airalo app.</li><li>Buy eSIM by country.</li><li>$10-$50 per trip.</li><li>Senior cheaper than roaming.</li><li>Multiple eSIMs phone.</li><li>Free download.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Old SIM cards</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>iPhone 13 + before — physical.</li><li>Pop SIM tool.</li><li>Move card to new phone.</li><li>Senior simple.</li><li>Reactivate via carrier.</li><li>Easy switch.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Carrier help</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>Walk into store.</li><li>Free transfer.</li><li>Senior in-person help.</li><li>Same day.</li><li>Bring ID.</li><li>Worth visit.</li></ul></CardContent></Card>
        <Card className="bg-muted/40"><CardContent className="pt-6"><h3 className="font-bold mb-2">Set carrier PIN = senior fraud protection</h3><p className="text-sm text-muted-foreground">SIM swap fraud big senior risk — call carrier set PIN required for changes. Plus eSIM new iPhones simpler. Travel Airalo eSIM saves vs roaming. Carrier store free help senior switching. Don&apos;t skip PIN protection.</p></CardContent></Card>
      </main>
      <Footer />
    </div>
  );
}

import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Store } from 'lucide-react';

export default function CostcoAppForSeniors() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Costco App for Seniors | TekSure" description="Costco app for membership, deals, photo. Senior Costco app guide." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Store className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Costco App</h1>
          <p className="text-lg text-muted-foreground">Card + deals + photo.</p>
        </div>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Digital membership card</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>2024 added.</li><li>Forget physical card.</li><li>Show app at door.</li><li>Senior less to carry.</li><li>Free.</li><li>Same access.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Costco Online</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>Costco.com.</li><li>Often cheaper than store.</li><li>Free shipping member items.</li><li>2-day Instacart delivery.</li><li>Senior couch shopping.</li><li>No driving.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Photo prints</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>Costco Photo Center online.</li><li>Cheap prices.</li><li>Pickup in store.</li><li>Senior gift books.</li><li>Quality good.</li><li>Compare Walgreens.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Pharmacy</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>Costco pharmacy in app.</li><li>Often cheapest meds.</li><li>No membership needed for Rx.</li><li>Senior big savings.</li><li>Compare GoodRx.</li><li>Worth checking.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Hearing aids</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>Kirkland Signature 9.0.</li><li>$1,400/pair vs $5,000 elsewhere.</li><li>Free hearing test.</li><li>Senior major savings.</li><li>Free reprogramming.</li><li>Cheaper than retail.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Senior tips</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>Executive membership $130/yr.</li><li>2% cashback ($1,300+ purchases).</li><li>Often pays for itself.</li><li>Senior budget shop.</li><li>Bulk save.</li><li>Compare Sam&apos;s/BJs.</li></ul></CardContent></Card>
        <Card className="bg-muted/40"><CardContent className="pt-6"><h3 className="font-bold mb-2">Costco app + Executive = senior savings</h3><p className="text-sm text-muted-foreground">Costco app digital card + Executive membership 2% cashback. Plus cheapest pharmacy + hearing aids in US. Many seniors save thousands. Use app for pickup orders. Compare Costco Photo Center for senior gifts. Most under-used senior shopping app.</p></CardContent></Card>
      </main>
      <Footer />
    </div>
  );
}

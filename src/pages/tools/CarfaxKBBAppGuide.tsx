import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Car } from 'lucide-react';

export default function CarfaxKBBAppGuide() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Carfax + Kelley Blue Book for Senior Car Buyers | TekSure" description="Buying or selling a car? Carfax + KBB apps for senior auto shoppers." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Car className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Carfax + KBB</h1>
          <p className="text-lg text-muted-foreground">Smart car research apps.</p>
        </div>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Carfax</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Vehicle history reports.</li>
              <li>Accident history.</li>
              <li>Service records.</li>
              <li>Title issues.</li>
              <li>$45-$60 per report.</li>
              <li>Critical for used car buying.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Kelley Blue Book (KBB)</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Free pricing reference.</li>
              <li>Trade-in value.</li>
              <li>Private party sale value.</li>
              <li>Dealer retail value.</li>
              <li>Use to negotiate.</li>
              <li>Don&apos;t accept dealer&apos;s first offer.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Edmunds True Cost</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Total cost of ownership 5 years.</li>
              <li>Fuel + insurance + repairs.</li>
              <li>Compare across vehicles.</li>
              <li>Free.</li>
              <li>Better than just sticker price.</li>
              <li>Plan retirement budget.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">TrueCar</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Local price ranges.</li>
              <li>What others paid.</li>
              <li>Connect to local dealers.</li>
              <li>Get pre-negotiated price.</li>
              <li>Free service.</li>
              <li>Bargaining power.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Senior buyer tips</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Always test drive.</li>
              <li>Get pre-purchase inspection ($150).</li>
              <li>Carfax before serious offer.</li>
              <li>KBB price as ceiling.</li>
              <li>Shop multiple dealers.</li>
              <li>Walk away if pressured.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Selling old car</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>KBB private party value baseline.</li>
              <li>List on Facebook Marketplace.</li>
              <li>CarMax instant offer (free).</li>
              <li>Carvana online quote.</li>
              <li>Compare offers.</li>
              <li>Often beat dealer trade-in.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="bg-muted/40">
          <CardContent className="pt-6">
            <h3 className="font-bold mb-2">$60 Carfax saves thousands</h3>
            <p className="text-sm text-muted-foreground">When buying used car, $60 for Carfax report is essential. Reveals accident history, title issues, service gaps. Combined with KBB pricing + pre-purchase inspection, you avoid $5,000+ surprises. Senior buyers especially benefit from this homework. Don&apos;t skip the research.</p>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}

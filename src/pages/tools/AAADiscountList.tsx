import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { BadgePercent } from 'lucide-react';

export default function AAADiscountList() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="AAA Discount List for Seniors | TekSure" description="Maximize AAA membership savings. Plain-English discount guide." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <BadgePercent className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">AAA Discount List</h1>
          <p className="text-lg text-muted-foreground">$70/yr membership = $1,000+ savings.</p>
        </div>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Hotel discounts</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Most major chains 10% off.</li>
              <li>Hilton, Marriott, Hyatt, IHG, Choice, Best Western.</li>
              <li>Stack with senior discounts.</li>
              <li>Always select &quot;AAA rate&quot; when booking.</li>
              <li>Save $20-50/night.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Theme parks</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Disney, Universal — buy through AAA.</li>
              <li>Six Flags, Cedar Point.</li>
              <li>Aquariums, zoos, museums.</li>
              <li>Save 5-30% per ticket.</li>
              <li>AAA office prints tickets.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Other discounts</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Restaurants — Outback, Olive Garden, IHOP.</li>
              <li>Tours — group + individual.</li>
              <li>Cruises — discount + onboard credits.</li>
              <li>Rental cars — Hertz Gold easy.</li>
              <li>Movie theaters.</li>
              <li>Eyewear (LensCrafters, Pearle Vision).</li>
              <li>UPS Store + FedEx.</li>
              <li>Identity theft monitoring (free with Plus).</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Best AAA value tier</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li><strong>Classic</strong> — $70-90/yr. 4 free tows/yr (100 mile).</li>
              <li><strong>Plus</strong> — $110/yr. 200-mile tows.</li>
              <li><strong>Premier</strong> — $150/yr. 200-mile tow + extras.</li>
              <li>Most seniors fine with Classic.</li>
              <li>Plus if travel often.</li>
              <li>Family plan adds $30-40 per member.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Free DMV services</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Many states — register vehicles via AAA.</li>
              <li>Skip DMV lines.</li>
              <li>License renewal.</li>
              <li>ID cards.</li>
              <li>Vehicle title transfers.</li>
              <li>$10-20 service fee but skip 2-hour DMV wait.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="bg-muted/40">
          <CardContent className="pt-6">
            <h3 className="font-bold mb-2">Worth it?</h3>
            <p className="text-sm text-muted-foreground">If you drive — yes. Membership pays back from one tow + a few hotel stays. AAA Classic = best senior value. Use online or app to check discounts. Free passport photos. Free maps + travel planning. Many seniors keep AAA decades.</p>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}

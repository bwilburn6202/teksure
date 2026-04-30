import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Truck } from 'lucide-react';

export default function CapsulePharmacyDelivery() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Capsule Pharmacy Same-Day Delivery for Seniors | TekSure" description="Capsule pharmacy delivers prescriptions same-day for free. How seniors can use it." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Truck className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Capsule Pharmacy</h1>
          <p className="text-lg text-muted-foreground">Same-day prescription delivery, free.</p>
        </div>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">What is Capsule?</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Mail-order pharmacy with same-day delivery.</li>
              <li>Free 2-hour delivery in many cities.</li>
              <li>Available in 15+ major US metros.</li>
              <li>Insurance + cash both accepted.</li>
              <li>Real pharmacist text/call support.</li>
              <li>App tracks delivery in real time.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Where it&apos;s available</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>NYC + tri-state area.</li>
              <li>Boston, Philadelphia, DC.</li>
              <li>Chicago, Twin Cities.</li>
              <li>Los Angeles, San Francisco.</li>
              <li>Miami + Orlando.</li>
              <li>Check Capsule.com to see your zip.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">How to use</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Go to Capsule.com or download app.</li>
              <li>Enter zip code to confirm coverage.</li>
              <li>Add insurance info or pay cash.</li>
              <li>Tell them which pharmacy to transfer from.</li>
              <li>Capsule contacts your doctor for new prescriptions.</li>
              <li>Free delivery, scheduled or on-demand.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Senior-friendly features</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Text or call pharmacist anytime.</li>
              <li>Delivery to door — no driving needed.</li>
              <li>Birth-control + many specialties supported.</li>
              <li>Easy refill via app or text.</li>
              <li>Same-day for new urgent meds.</li>
              <li>Free contactless delivery.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Insurance accepted</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Most major insurance accepted.</li>
              <li>Medicare Part D supported.</li>
              <li>Medicaid in supported states.</li>
              <li>Tricare for veterans.</li>
              <li>Submit insurance info on signup.</li>
              <li>Compare price like any pharmacy.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Capsule alternatives</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Amazon Pharmacy — covered separately.</li>
              <li>PillPack (also Amazon-owned) — pre-sorted by date.</li>
              <li>Costco Pharmacy delivery.</li>
              <li>CVS, Walgreens delivery — slower.</li>
              <li>Some local pharmacies offer free delivery.</li>
              <li>Compare delivery time + price.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="bg-muted/40">
          <CardContent className="pt-6">
            <h3 className="font-bold mb-2">For seniors with mobility issues</h3>
            <p className="text-sm text-muted-foreground">For seniors who have trouble getting to the pharmacy — limited driving, mobility issues, no nearby family — Capsule&apos;s same-day delivery is life-changing. They handle transfers from your old pharmacy automatically, accept insurance, and deliver free. If you live in a covered metro, this is one of the best healthcare upgrades available.</p>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}

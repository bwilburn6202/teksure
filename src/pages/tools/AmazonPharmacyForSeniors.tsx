import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Pill } from 'lucide-react';

export default function AmazonPharmacyForSeniors() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Amazon Pharmacy for Seniors | TekSure" description="Get prescriptions delivered with Amazon Pharmacy. Plain-English guide for seniors." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Pill className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Amazon Pharmacy</h1>
          <p className="text-lg text-muted-foreground">Prescriptions delivered. Often cheapest.</p>
        </div>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">What it offers</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Free 2-day delivery (Prime members).</li>
              <li>Prices shown before ordering.</li>
              <li>Insurance + cash prices both visible.</li>
              <li>RxPass — $9/month for unlimited generic meds (Prime members).</li>
              <li>24/7 pharmacist phone access.</li>
              <li>Auto-refill option.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">RxPass details</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>$9/month flat fee.</li>
              <li>Covers 50+ commonly-prescribed generics.</li>
              <li>Hypertension, cholesterol, diabetes, depression meds.</li>
              <li>Prime membership required.</li>
              <li>Not eligible if Medicare/Medicaid.</li>
              <li>Best for those without drug coverage.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">How to set up</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Go to Pharmacy.Amazon.com.</li>
              <li>Sign in with Amazon account.</li>
              <li>Enter insurance info (or pay cash).</li>
              <li>Tell them which prescriptions to transfer.</li>
              <li>Amazon contacts your current pharmacy.</li>
              <li>First delivery in a few days.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Medicare + insurance</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Accepts most Medicare Part D plans.</li>
              <li>Accepts most major insurance plans.</li>
              <li>Submits claims for you.</li>
              <li>Some plans require prior authorization.</li>
              <li>Compare cash price vs insurance — sometimes cash cheaper.</li>
              <li>Tricare, Medicaid usually accepted.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Best for</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Seniors without easy pharmacy access.</li>
              <li>Multiple maintenance medications.</li>
              <li>Those without good drug coverage.</li>
              <li>Anyone who already has Amazon Prime.</li>
              <li>People who hate pharmacy lines.</li>
              <li>Rural areas with limited pharmacies.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">When to skip</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>If you need med urgently — local pharmacy faster.</li>
              <li>Some controlled substances limited.</li>
              <li>If you like talking to pharmacist in person.</li>
              <li>Costco often cheaper for non-Prime users.</li>
              <li>GoodRx + local pharmacy may beat price.</li>
              <li>Compare each refill — best deal varies.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="bg-muted/40">
          <CardContent className="pt-6">
            <h3 className="font-bold mb-2">Try one prescription first</h3>
            <p className="text-sm text-muted-foreground">Don&apos;t transfer everything at once. Pick one maintenance medication you take daily and try Amazon Pharmacy. See how it works — delivery time, packaging, customer service. If you like it, transfer more. If not, no big deal. Many seniors find Amazon Pharmacy 30% cheaper than their old pharmacy with much more convenience.</p>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}

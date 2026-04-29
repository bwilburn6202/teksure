import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { ShoppingBag } from 'lucide-react';

export default function PrescriptionPriceShop() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Prescription Price Shopping for Seniors | TekSure" description="Same drug. Different prices. Plain-English Rx price shopping for seniors." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <ShoppingBag className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Rx Price Shopping</h1>
          <p className="text-lg text-muted-foreground">Same drug, 10x price difference. Always compare.</p>
        </div>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Best price tools</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li><strong>GoodRx</strong> — most popular. Compares all pharmacies.</li>
              <li><strong>SingleCare</strong> — competing app, sometimes lower.</li>
              <li><strong>RxSaver</strong> — Optum&apos;s app.</li>
              <li><strong>Cost Plus Drugs</strong> — Mark Cuban. Often 50-90% cheaper.</li>
              <li><strong>Amazon Pharmacy</strong> — Prime member discounts.</li>
              <li><strong>WellRx</strong> — competing.</li>
              <li>Compare ALL — different drugs cheaper at different places.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">$4 generic lists</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li><strong>Walmart $4 List</strong> — 600+ generics for $4 (30 days) or $10 (90 days).</li>
              <li><strong>Costco</strong> — often cheaper than insurance copays.</li>
              <li><strong>HEB</strong> — many generics free.</li>
              <li><strong>Publix</strong> — free metformin, lisinopril, others.</li>
              <li>If your med on a $4 list — skip insurance.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Insurance vs cash</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Sometimes cash + GoodRx beats insurance copay.</li>
              <li>Tell pharmacist to compare.</li>
              <li>Used to be illegal to mention — now legal (2018 law).</li>
              <li>Never pay more than cash price.</li>
              <li>Cash WON&apos;T count toward Part D out-of-pocket — consider for non-formulary.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Brand vs generic</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Generic = same active ingredient. Saves 80%.</li>
              <li>FDA tests bioequivalence.</li>
              <li>Always ask for generic.</li>
              <li>Some brand needed for narrow-therapeutic-window drugs (warfarin, levothyroxine).</li>
              <li>Doctor must approve generic substitute.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">90-day vs 30-day</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>90-day fills usually 1 copay (vs 3).</li>
              <li>Saves 30-67%.</li>
              <li>Mail order — Express Scripts, Caremark often free shipping.</li>
              <li>Some retail also offer 90-day.</li>
              <li>Less frequent pharmacy trips.</li>
              <li>Best for stable, long-term meds.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Patient assistance programs</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li><strong>NeedyMeds</strong> — needymeds.org. Free directory.</li>
              <li><strong>RxAssist</strong> — pharma assistance programs.</li>
              <li><strong>Pharmaceutical company programs</strong> — e.g., Eliquis, Trulicity assistance.</li>
              <li>Income limits often $50K+ — many qualify.</li>
              <li>Some 100% free for limited time.</li>
              <li>Manufacturer copay cards — for brand drugs.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="bg-muted/40">
          <CardContent className="pt-6">
            <h3 className="font-bold mb-2">Cost Plus Drugs</h3>
            <p className="text-sm text-muted-foreground">Mark Cuban&apos;s pharmacy: costplusdrugs.com. Cuts middlemen. Often 90% off retail. 1,000+ generics. No insurance accepted but cash prices often lower than insurance copays. Senior favorite. Mail-order to your home. Worth checking every prescription.</p>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}

import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { DollarSign } from 'lucide-react';

export default function CostPlusDrugsExplained() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Mark Cuban Cost Plus Drugs for Seniors | TekSure" description="How Mark Cuban&apos;s Cost Plus Drug Company saves seniors money. Plain-English guide." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <DollarSign className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Cost Plus Drugs</h1>
          <p className="text-lg text-muted-foreground">Mark Cuban&apos;s pharmacy. Honest pricing.</p>
        </div>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">What is Cost Plus Drugs?</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Online pharmacy started by Mark Cuban.</li>
              <li>Charges manufacturer cost + 15% + small fee.</li>
              <li>Transparent pricing — no insurance games.</li>
              <li>2,000+ generic medications.</li>
              <li>Often 80%+ cheaper than retail pharmacies.</li>
              <li>Mail order only — delivered to your door.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">How much you save</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Imatinib (cancer drug): $9 vs $9,000 retail.</li>
              <li>Atorvastatin (cholesterol): $4/month.</li>
              <li>Metformin (diabetes): $4/month.</li>
              <li>Most maintenance medications under $20/month.</li>
              <li>Sometimes cheaper than insurance copay.</li>
              <li>Compare your meds at CostPlusDrugs.com.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">How to use it</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Go to CostPlusDrugs.com.</li>
              <li>Search your medication name.</li>
              <li>See exact price + 15% markup shown.</li>
              <li>Order — they contact your doctor for prescription.</li>
              <li>Or upload prescription image directly.</li>
              <li>Delivered in about a week.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Insurance + Medicare</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Most insurance NOT accepted (cash only).</li>
              <li>Medicare doesn&apos;t apply.</li>
              <li>But: cash price often cheaper than insurance copay.</li>
              <li>Check + compare each medication.</li>
              <li>Use this for drugs not covered by your insurance.</li>
              <li>Or use for non-formulary drugs.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Best for these situations</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>No insurance or high deductible plans.</li>
              <li>Maintenance meds for diabetes, heart, cholesterol.</li>
              <li>Generic drugs (most major drugs available).</li>
              <li>Brand-name not covered by insurance.</li>
              <li>Rural areas with no pharmacy nearby.</li>
              <li>Many seniors save $500+/year switching some meds.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Limitations</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>No controlled substances yet.</li>
              <li>Not all medications available.</li>
              <li>Mail-order only — slower than local pharmacy.</li>
              <li>No emergency same-day fills.</li>
              <li>Insurance won&apos;t apply.</li>
              <li>Have backup local pharmacy too.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="bg-muted/40">
          <CardContent className="pt-6">
            <h3 className="font-bold mb-2">Check your meds today</h3>
            <p className="text-sm text-muted-foreground">Spend 5 minutes at CostPlusDrugs.com checking your medication list. Compare each drug price to what you pay now. If you&apos;re paying $40+/month for any maintenance medication, Cost Plus is likely 50–90% cheaper. The math is often life-changing for seniors on fixed incomes. Many people switching saved $1,000+/year on prescriptions.</p>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}

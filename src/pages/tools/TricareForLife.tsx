import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Cross } from 'lucide-react';

export default function TricareForLife() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="TRICARE For Life Guide | TekSure" description="Free secondary insurance for military retirees. Plain-English TFL guide for senior vets." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Cross className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">TRICARE For Life (TFL)</h1>
          <p className="text-lg text-muted-foreground">Free secondary insurance. Best deal in healthcare.</p>
        </div>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">What is TFL?</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>For military retirees + spouses age 65+.</li>
              <li>Pays SECONDARY to Medicare.</li>
              <li>Medicare pays 80%, TFL pays remaining 20%.</li>
              <li>Almost zero out-of-pocket.</li>
              <li>NO premium for TFL itself.</li>
              <li>Must enroll in Medicare Part A + B.</li>
              <li>Better than most Medigap plans.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Eligibility</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Military retiree (20+ years service or medical retirement).</li>
              <li>Surviving spouse of military retiree.</li>
              <li>Adult child with disability before age 21.</li>
              <li>Age 65 OR younger if disabled (with Medicare).</li>
              <li>Must have Medicare Part A + B.</li>
              <li>Drop Tricare Prime/Select at 65 — TFL replaces.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Coverage</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>All Medicare-covered services.</li>
              <li>Plus things Medicare doesn&apos;t cover (TRICARE benefits).</li>
              <li>Prescriptions through TRICARE Pharmacy ($16-58 copay).</li>
              <li>Worldwide coverage (Medicare doesn&apos;t cover overseas).</li>
              <li>Senior travel benefit.</li>
              <li>NO networks — see any Medicare provider.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Costs</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>$0 premium for TFL.</li>
              <li>$185/mo Medicare Part B premium (2026).</li>
              <li>Generic Rx: $16 copay (90-day supply).</li>
              <li>Brand name: $48-58 copay.</li>
              <li>Use Express Scripts mail-order = 90 days for 1 copay.</li>
              <li>Cheaper than most senior insurance.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Skip Medicare Advantage</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>TFL works ONLY with Original Medicare.</li>
              <li>If you join Medicare Advantage — TFL doesn&apos;t pay.</li>
              <li>Original Medicare + TFL = much better than Advantage for vets.</li>
              <li>Don&apos;t fall for Medicare Advantage marketing — you have something better.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Enroll</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Auto-enrolled if you have TRICARE + Medicare A+B.</li>
              <li>Update DEERS — myaccess.dmdc.osd.mil.</li>
              <li>Sign up for Medicare 3 months before 65th birthday.</li>
              <li>TFL handbook online at tricare.mil.</li>
              <li>Customer service 1-866-773-0404.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="bg-muted/40">
          <CardContent className="pt-6">
            <h3 className="font-bold mb-2">Beneficiary card</h3>
            <p className="text-sm text-muted-foreground">Get military ID card showing TFL eligibility. Bring to medical appointments. Most providers know how to bill TFL secondary. If they don&apos;t — provide TFL claim form. Customer service helps with denials. Excellent benefit — use it fully.</p>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}

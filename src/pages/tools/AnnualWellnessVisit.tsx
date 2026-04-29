import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { ClipboardCheck } from 'lucide-react';

export default function AnnualWellnessVisit() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Medicare Annual Wellness Visit | TekSure" description="Free yearly Medicare visit. Plain-English guide for seniors maximizing visit." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <ClipboardCheck className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Annual Wellness Visit</h1>
          <p className="text-lg text-muted-foreground">FREE yearly. Most seniors miss it.</p>
        </div>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">What it is</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>FREE yearly visit Medicare covers.</li>
              <li>NOT physical exam.</li>
              <li>Update health plan + screenings.</li>
              <li>Cognitive screening included.</li>
              <li>Fall risk assessment.</li>
              <li>Medication review.</li>
              <li>Schedule preventive screenings.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Required services covered</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Health risk assessment.</li>
              <li>BMI calculation.</li>
              <li>BP check.</li>
              <li>Cognitive impairment assessment.</li>
              <li>Depression screening.</li>
              <li>Functional ability screening.</li>
              <li>5-10 year screening schedule.</li>
              <li>End-of-life planning discussion.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Schedule yours</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Call doctor — &quot;Annual Wellness Visit, please.&quot;</li>
              <li>Important: SAY this term so it&apos;s coded right.</li>
              <li>If they call it &quot;physical&quot; = different (not free).</li>
              <li>30-60 min visit.</li>
              <li>Bring meds list, family history, questions.</li>
              <li>Free yearly — schedule now.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Bring to visit</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>List of all medications + supplements.</li>
              <li>List of doctors you see.</li>
              <li>Recent test results from specialists.</li>
              <li>Family medical history.</li>
              <li>Concerns + questions written down.</li>
              <li>Spouse / caregiver if helpful.</li>
              <li>Recent home BP readings if monitor.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Use to maximum</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Ask about ALL screenings due (mammogram, colonoscopy, etc.).</li>
              <li>Get vaccines updated (shingles, flu, COVID, pneumonia).</li>
              <li>Cognitive screening — track over years.</li>
              <li>Discuss falls + safety.</li>
              <li>Mental health — depression common, treatable.</li>
              <li>Advance directive — discuss + complete.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="bg-muted/40">
          <CardContent className="pt-6">
            <h3 className="font-bold mb-2">Use it. Free.</h3>
            <p className="text-sm text-muted-foreground">90% of Medicare beneficiaries don&apos;t use Annual Wellness Visit. Free preventive care. Often catches issues early. Schedule yearly. Ask doctor if you&apos;re not sure if you&apos;ve had one. Best Medicare benefit + most missed.</p>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}

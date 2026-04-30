import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Stethoscope } from 'lucide-react';

export default function ColonCancerScreening() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Colon Cancer Screening for Seniors | TekSure" description="Cologuard vs colonoscopy. Plain-English screening guide for seniors." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Stethoscope className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Colon Cancer Screening</h1>
          <p className="text-lg text-muted-foreground">Skip is not an option. Right test = best outcomes.</p>
        </div>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">When to screen</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Start age 45 average risk.</li>
              <li>Continue until 75 (or 85 if healthy).</li>
              <li>Family history — start earlier.</li>
              <li>Most common preventable cancer.</li>
              <li>Saves lives if caught early.</li>
              <li>Medicare covers fully.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Test options</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li><strong>Colonoscopy</strong> — every 10 years. Gold standard.</li>
              <li><strong>Cologuard</strong> — every 3 years. Stool DNA. At home.</li>
              <li><strong>FIT test</strong> — yearly. Stool blood. At home.</li>
              <li><strong>Sigmoidoscopy</strong> — every 5 years. Partial colon.</li>
              <li><strong>CT colonography</strong> — every 5 years.</li>
              <li>Talk to doctor — pick best for you.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Colonoscopy facts</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>30-min outpatient procedure.</li>
              <li>Sedation = no pain.</li>
              <li>Removes polyps during procedure (prevents cancer).</li>
              <li>Most accurate.</li>
              <li>Prep day before unpleasant but doable.</li>
              <li>Drive home with friend.</li>
              <li>Back to normal next day.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Cologuard at home</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Mail-order kit.</li>
              <li>Collect stool sample at home.</li>
              <li>Mail back.</li>
              <li>Results 2 weeks.</li>
              <li>Positive = colonoscopy needed.</li>
              <li>Less invasive but less accurate.</li>
              <li>Medicare covers if eligible.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Senior considerations</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Healthy + 75-85 — discuss with doctor.</li>
              <li>Multiple comorbidities — may stop screening.</li>
              <li>Polyps removed — back next 1-3 years.</li>
              <li>Negative test — back in 5-10 years.</li>
              <li>Don&apos;t skip — colon cancer survivable if caught.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="bg-muted/40">
          <CardContent className="pt-6">
            <h3 className="font-bold mb-2">Free with Medicare</h3>
            <p className="text-sm text-muted-foreground">Medicare Part B covers colorectal cancer screening fully. No copay for screening colonoscopy. If polyp removed, becomes &quot;diagnostic&quot; — small copay. Cologuard fully covered. FIT yearly fully covered. Take advantage.</p>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}

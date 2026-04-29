import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Flag } from 'lucide-react';

export default function NationalCemeteryBurial() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="National Cemetery Burial for Veterans | TekSure" description="Free veterans burial benefits explained. Plain-English guide for senior vets + families." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Flag className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">National Cemetery Burial</h1>
          <p className="text-lg text-muted-foreground">Free for veterans. Honors service.</p>
        </div>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">What&apos;s included FREE</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Gravesite at any national cemetery with space.</li>
              <li>Opening + closing of grave.</li>
              <li>Government headstone or marker.</li>
              <li>Burial flag (3x5 ft, given to family).</li>
              <li>Presidential Memorial Certificate.</li>
              <li>Military funeral honors (folding flag, taps).</li>
              <li>Spouse + dependents may also be buried with vet.</li>
              <li>Approximately $7K-12K saved.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Eligibility</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Honorable / general discharge.</li>
              <li>Active duty 24+ months OR full term.</li>
              <li>Reservists with 20 years qualifying service.</li>
              <li>Recipients of Purple Heart or other awards.</li>
              <li>Spouses + minor children eligible.</li>
              <li>Adult disabled children sometimes eligible.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Apply for pre-determination</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>VA Form 40-10007 — apply BEFORE death.</li>
              <li>Removes paperwork burden from family at time of grief.</li>
              <li>Confirms eligibility now.</li>
              <li>Family just contacts cemetery at time of need.</li>
              <li>VA.gov/burials-memorials.</li>
              <li>FREE. Takes 30 days for approval.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">155 national cemeteries</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Find nearest at cem.va.gov.</li>
              <li>Some full — check space available.</li>
              <li>Spouse can be buried with you (reserved spot).</li>
              <li>Some state veterans cemeteries also free.</li>
              <li>Arlington National Cemetery — strict eligibility.</li>
              <li>Choose pre-burial = your final resting place secured.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Burial allowance for non-cemetery</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>If buried in private cemetery — vet may get burial allowance ($300-2,000).</li>
              <li>Plot allowance $948 (2026) for service-connected death.</li>
              <li>$893 transportation allowance.</li>
              <li>Service-connected death = full allowance.</li>
              <li>Apply via VA Form 21-530EZ.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="bg-muted/40">
          <CardContent className="pt-6">
            <h3 className="font-bold mb-2">Required documents</h3>
            <p className="text-sm text-muted-foreground">DD-214 (military discharge) is essential — get certified copy NOW. Keep with important docs. Family will need at time of death. Lost? Request from National Personnel Records Center (archives.gov). Often takes weeks. Don&apos;t wait. Free help: VFW + American Legion.</p>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}

import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Hospital } from 'lucide-react';

export default function HospitalCompareGuide() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Hospital Compare Guide for Seniors | TekSure" description="Pick safe hospitals for senior surgeries. Plain-English Medicare Care Compare guide." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Hospital className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Hospital Compare</h1>
          <p className="text-lg text-muted-foreground">5-star hospitals reduce death rates 2-3x.</p>
        </div>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Free comparison tools</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li><strong>Medicare Care Compare</strong> — medicare.gov/care-compare. Star ratings.</li>
              <li><strong>Leapfrog Hospital Safety Grade</strong> — A-F grades. hospitalsafetygrade.org.</li>
              <li><strong>US News Best Hospitals</strong> — annual rankings.</li>
              <li><strong>Healthgrades</strong> — patient experiences.</li>
              <li><strong>Hospital Compare ratings</strong> — readmission, mortality.</li>
              <li>All FREE.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">What to check</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Star rating overall.</li>
              <li>Mortality rates (lower better).</li>
              <li>Readmission rates (lower better).</li>
              <li>Hospital-acquired infections.</li>
              <li>Patient experience ratings.</li>
              <li>For specific procedure — surgical volume + outcomes.</li>
              <li>Magnet status (nursing excellence).</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Specialty hospitals</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>For elective surgery — research SPECIALIST hospitals.</li>
              <li>Hip / knee replacement: orthopedic specialty centers.</li>
              <li>Cardiac surgery: high-volume cardiac centers.</li>
              <li>Cancer: NCI-designated cancer centers.</li>
              <li>Higher volume = better outcomes.</li>
              <li>Travel for surgery worth it sometimes.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Worst hospitals to avoid</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>1-star Medicare ratings.</li>
              <li>D or F Leapfrog grades.</li>
              <li>High readmission rates.</li>
              <li>High infection rates.</li>
              <li>If only option — hire patient advocate.</li>
              <li>Or transfer if non-emergency.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">In-network matters</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Verify with insurance BEFORE elective surgery.</li>
              <li>In-network = lower cost.</li>
              <li>Out-of-network surprise bills $$$ (now mostly illegal but happens).</li>
              <li>Anesthesiologists + radiologists separately billed.</li>
              <li>Check ALL providers in-network, not just hospital.</li>
              <li>Get cost estimate in writing.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="bg-muted/40">
          <CardContent className="pt-6">
            <h3 className="font-bold mb-2">Patient advocate</h3>
            <p className="text-sm text-muted-foreground">If complex surgery — hire patient advocate ($75-200/hr). Nurses or social workers who navigate hospital. <strong>Patient Advocate Foundation</strong> — patientadvocate.org. Free for some. Insurance company should provide. Family member can ALSO be advocate — be present, ask questions.</p>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}

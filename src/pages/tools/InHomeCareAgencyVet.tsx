import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { UserCheck } from 'lucide-react';

export default function InHomeCareAgencyVet() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Vetting In-Home Care Agencies | TekSure" description="Hire safely. Plain-English checklist for vetting senior in-home caregivers + agencies." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <UserCheck className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Vetting In-Home Care</h1>
          <p className="text-lg text-muted-foreground">Hire carefully. Trust + safety first.</p>
        </div>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Agency vs private hire</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li><strong>Agency</strong> — handles taxes, insurance, backup. $25-40/hr. Safer.</li>
              <li><strong>Private hire</strong> — $15-25/hr. You handle taxes + payroll. Riskier.</li>
              <li>Most families start with agency, switch to private after finding good aide.</li>
              <li>Agencies replace if aide sick — reliability.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Agency vetting checklist</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>State-licensed home care agency.</li>
              <li>Bonded + insured (workers comp + liability).</li>
              <li>Background-checked employees.</li>
              <li>Drug-tested employees.</li>
              <li>References — talk to 3 current clients.</li>
              <li>BBB rating + Google reviews.</li>
              <li>Plan in writing with hourly rate + hours.</li>
              <li>RN supervisor for medical needs.</li>
              <li>24/7 phone if aide doesn&apos;t show up.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Aide interview questions</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Years of experience + types of seniors cared for.</li>
              <li>CPR + first aid certified?</li>
              <li>Worked with dementia / mobility issues?</li>
              <li>Driving record (if needed for errands).</li>
              <li>Cooking ability / dietary preferences.</li>
              <li>Why work in home care?</li>
              <li>How handle crisis (fall, choking)?</li>
              <li>Do they smoke?</li>
              <li>Trust your gut — bad fit = move on.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Protect senior + valuables</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Lock up jewelry, cash, prescriptions.</li>
              <li>Inventory valuables before aide starts.</li>
              <li>Bank statements + checkbooks secure.</li>
              <li>Camera in main living areas (legal in most states — check yours).</li>
              <li>Family check-ins regularly (varied times).</li>
              <li>Gift-giving rules — no cash, no expensive gifts.</li>
              <li>Aide doesn&apos;t take senior to bank/notary.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Red flags in agencies</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>No state license to share.</li>
              <li>Cash-only payments.</li>
              <li>Aides change constantly.</li>
              <li>No supervision visits.</li>
              <li>Pressure to sign long-term contract.</li>
              <li>Vague pricing.</li>
              <li>Bad reviews about missed shifts.</li>
              <li>Aides asking for personal favors / loans.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="bg-muted/40">
          <CardContent className="pt-6">
            <h3 className="font-bold mb-2">Free help</h3>
            <p className="text-sm text-muted-foreground"><strong>Care.com</strong> — find aides + caregivers. <strong>A Place for Mom</strong> — free senior placement. <strong>Eldercare Locator</strong> — 1-800-677-1116. Medicaid + VA programs cover home care for eligible. Long-term care insurance covers if pre-existing policy.</p>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}

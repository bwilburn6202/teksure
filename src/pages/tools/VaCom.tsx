import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Award } from 'lucide-react';

export default function VaCom() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="VA.gov for Veterans | TekSure" description="VA benefits online. Plain-English walkthrough of VA.gov for veterans of all ages." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Award className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">VA.gov for Veterans</h1>
          <p className="text-lg text-muted-foreground">Manage VA benefits online.</p>
        </div>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Setup VA.gov account</h2>
            <ol className="list-decimal pl-5 space-y-2 text-sm">
              <li>Go to <strong>va.gov</strong>.</li>
              <li>Sign in with Login.gov or ID.me.</li>
              <li>Verify VA enrollment.</li>
              <li>Set up direct deposit.</li>
              <li>Set 2FA.</li>
            </ol>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">What you can do</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Schedule + cancel medical appointments.</li>
              <li>View test results.</li>
              <li>Refill prescriptions.</li>
              <li>Send secure messages to VA team.</li>
              <li>Check claim status.</li>
              <li>Apply for new benefits.</li>
              <li>Update direct deposit.</li>
              <li>Get DD-214 + service records.</li>
              <li>Find VA facilities + travel reimbursement.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Benefits seniors often miss</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li><strong>Aid &amp; Attendance pension</strong> — for vets needing daily care help. $1,500-2,500/mo.</li>
              <li><strong>Free hearing aids</strong> — VA covers fully.</li>
              <li><strong>Free dental</strong> — for service-connected conditions.</li>
              <li><strong>Mental health care</strong> — fully covered, including therapy.</li>
              <li><strong>VA pharmacy</strong> — drugs $0-11/copay.</li>
              <li><strong>Vet Centers</strong> — free counseling, no formal enrollment.</li>
              <li><strong>HISA grant</strong> — up to $6,800 for home modifications.</li>
              <li><strong>VA hospice + home care</strong> — fully covered.</li>
              <li><strong>Free national park pass</strong> — disabled vets.</li>
              <li><strong>Burial benefits</strong> — flag, headstone, vet cemetery.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">PACT Act (2022)</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Massive expansion of VA benefits.</li>
              <li>Covers veterans exposed to burn pits, Agent Orange, etc.</li>
              <li>Many older vets newly qualified.</li>
              <li>Apply at va.gov/pact.</li>
              <li>Even decades-old service may qualify.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="bg-muted/40">
          <CardContent className="pt-6">
            <h3 className="font-bold mb-2">VSO can help</h3>
            <p className="text-sm text-muted-foreground">Veterans Service Officers (VSO) are FREE help. American Legion, VFW, DAV all have them. They navigate VA paperwork + help apply. Don&apos;t pay claim assistance companies — VSO is free + better. Find at va.gov/vso.</p>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}

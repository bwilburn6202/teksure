import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Shield } from 'lucide-react';

export default function AgentOrangeBenefits() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Agent Orange + PACT Act Benefits | TekSure" description="Vietnam + Gulf War vets — presumptive conditions explained. Plain-English VA disability guide." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Shield className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Agent Orange + PACT Act</h1>
          <p className="text-lg text-muted-foreground">Vietnam + Gulf War vets — apply NOW. Money owed.</p>
        </div>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">PACT Act 2022 = expanded benefits</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Major 2022 law expanded toxin exposure benefits.</li>
              <li>Added 20+ new conditions to presumptive list.</li>
              <li>Vietnam, Korea, Gulf War, post-9/11 vets all covered.</li>
              <li>Burn pit + Agent Orange + radiation exposure.</li>
              <li>Most eligible vets HAVEN&apos;T applied.</li>
              <li>$300-3,500/mo tax-free disability + healthcare.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Agent Orange (Vietnam) presumptive</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Type 2 diabetes.</li>
              <li>Ischemic heart disease.</li>
              <li>Hypertension (added 2022).</li>
              <li>Parkinson&apos;s + Parkinsonism.</li>
              <li>Bladder cancer.</li>
              <li>Hypothyroidism.</li>
              <li>Multiple cancers (prostate, lung, etc.).</li>
              <li>Chronic B-cell leukemias.</li>
              <li>Peripheral neuropathy.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Burn pit + post-9/11</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Iraq, Afghanistan, Gulf War vets.</li>
              <li>Asthma, COPD, sinusitis, rhinitis.</li>
              <li>Many cancers (presumptive).</li>
              <li>Reproductive cancers.</li>
              <li>Brain cancer.</li>
              <li>If served in Southwest Asia — apply.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Apply</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>VA.gov/disability — file online.</li>
              <li>VA Form 21-526EZ.</li>
              <li>Provide DD-214 + medical records.</li>
              <li>FREE help — VFW, American Legion, DAV.</li>
              <li>NEVER pay private &quot;benefits consultants.&quot;</li>
              <li>Backpay from filing date.</li>
              <li>Process 4-12 months.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Survivors benefits (DIC)</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Surviving spouse may be eligible if vet died from condition.</li>
              <li>Even if vet died years ago.</li>
              <li>$1,663+/month tax-free (2026).</li>
              <li>Apply for service-connected death.</li>
              <li>Many widows don&apos;t know.</li>
              <li>Check spouse&apos;s death certificate cause of death.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Free toxic exposure screening</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>VA offers free toxic exposure screening.</li>
              <li>For ANY vet, regardless of conditions.</li>
              <li>Documents exposure for future claims.</li>
              <li>Schedule at local VA medical center.</li>
              <li>Takes 30 minutes.</li>
              <li>Critical record even if healthy now.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="bg-muted/40">
          <CardContent className="pt-6">
            <h3 className="font-bold mb-2">Don&apos;t wait</h3>
            <p className="text-sm text-muted-foreground">If you served + have any of these conditions = APPLY. Many vets denied initially — APPEAL. VFW/American Legion service officers handle 95% appeals successfully. Disability rating 10% gets free VA healthcare. Money owed — claim it.</p>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}

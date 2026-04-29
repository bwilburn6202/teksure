import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Scale } from 'lucide-react';

export default function GuardianshipVsConservatorship() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Guardianship vs Conservatorship | TekSure" description="Last resort court options for incapacitated seniors. Plain-English guide to family decisions." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Scale className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Guardianship + Conservatorship</h1>
          <p className="text-lg text-muted-foreground">Last resort — but sometimes necessary.</p>
        </div>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Definitions</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li><strong>Guardianship</strong> — court-appointed person makes PERSONAL decisions (where to live, healthcare).</li>
              <li><strong>Conservatorship</strong> — court-appointed person manages FINANCES.</li>
              <li>Some states use one term for both, others split.</li>
              <li>Both: court-supervised, ongoing oversight.</li>
              <li>Strips legal rights from elder.</li>
              <li>Used when no POA exists + person can&apos;t consent.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Why families need this</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Parent has dementia, no POA done in time.</li>
              <li>Parent making dangerous financial decisions.</li>
              <li>Falling for scams repeatedly.</li>
              <li>Spending on inappropriate &quot;girlfriend.&quot;</li>
              <li>Refusing necessary medical care.</li>
              <li>Self-neglecting (hoarding, hygiene).</li>
              <li>No POA + family member needs to act.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Avoid if possible</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li><strong>Cost</strong> — $5,000-15,000 attorney fees, ongoing.</li>
              <li><strong>Time</strong> — 6-12 months process.</li>
              <li><strong>Public</strong> — court records.</li>
              <li><strong>Stigma</strong> — elder loses dignity.</li>
              <li><strong>Family conflict</strong> — siblings fight over who.</li>
              <li><strong>Court oversight</strong> — annual reports, accounting.</li>
              <li>POA done early avoids ALL this.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Process overview</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>File petition in elder&apos;s county court.</li>
              <li>Doctor evaluation of incapacity.</li>
              <li>Notice to all family members.</li>
              <li>Court hearing — elder may attend / be represented.</li>
              <li>Court appoints guardian/conservator.</li>
              <li>Bond often required.</li>
              <li>Annual accounting + reports to court.</li>
              <li>Hire elder law attorney — DON&apos;T DIY this.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Less restrictive alternatives</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li><strong>POA</strong> — if before incapacity (best).</li>
              <li><strong>Trust + trustee</strong> — manages assets without court.</li>
              <li><strong>Joint bank accounts</strong> — limited but useful.</li>
              <li><strong>Representative payee</strong> — for Social Security.</li>
              <li><strong>Supported decision-making</strong> — newer alternative.</li>
              <li><strong>Geriatric care manager</strong> — coordinates care.</li>
              <li>Only seek guardianship as LAST resort.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="bg-muted/40">
          <CardContent className="pt-6">
            <h3 className="font-bold mb-2">For families considering</h3>
            <p className="text-sm text-muted-foreground">Consult elder law attorney FIRST — many alternatives. National Academy of Elder Law Attorneys (NAELA) finds qualified ones. Britney Spears case made &quot;conservatorship&quot; controversial — court oversight critical to prevent abuse. <strong>Justice in Aging</strong> — free legal help for low-income seniors.</p>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}

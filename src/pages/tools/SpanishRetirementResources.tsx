import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { PiggyBank } from 'lucide-react';

export default function SpanishRetirementResources() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Spanish Retirement Resources | Recursos de Jubilación | TekSure" description="Spanish-language Social Security, Medicare, retirement planning. Plain-English (and Spanish) resources." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <PiggyBank className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Spanish Retirement Resources</h1>
          <p className="text-lg text-muted-foreground">Recursos de jubilación.</p>
        </div>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Social Security en español</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li><strong>ssa.gov/espanol</strong> — official Spanish site.</li>
              <li><strong>1-800-772-1213</strong> — pick option 2 for Spanish.</li>
              <li>"Mi Cuenta de Seguro Social" — manage benefits in Spanish.</li>
              <li>Apply for benefits online in Spanish.</li>
              <li>Free Spanish-language helpline 7 AM-7 PM weekdays.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Medicare en español</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li><strong>medicare.gov/es</strong> — official Spanish.</li>
              <li><strong>1-800-MEDICARE</strong> — Spanish option.</li>
              <li><strong>SHIP en Español</strong> — free Spanish counselors via shiphelp.org.</li>
              <li><strong>NCLR/UnidosUS Senior Tech program</strong> — free Spanish Medicare help.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Other Spanish resources</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li><strong>AARP en Español</strong> — aarp.org/espanol. Massive resource library.</li>
              <li><strong>Eldercare Locator</strong> — Spanish operators 1-800-677-1116.</li>
              <li><strong>UnidosUS</strong> — Spanish senior advocacy.</li>
              <li><strong>National Hispanic Council on Aging</strong> — nhcoa.org.</li>
              <li><strong>VA en Español</strong> — for Hispanic veterans.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Senior taxes in Spanish</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li><strong>IRS español</strong> — irs.gov/spanish. Forms in Spanish.</li>
              <li><strong>AARP Tax-Aide</strong> — many sites have bilingual volunteers. Free for any age.</li>
              <li><strong>VITA</strong> — IRS volunteer tax program. Bilingual at many locations.</li>
              <li><strong>Free File en español</strong> — IRS partnership for free filing.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Spanish financial advice</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li><strong>NerdWallet español</strong> — articles on credit, mortgages, more.</li>
              <li><strong>Finanzas Personales (Univision)</strong> — Spanish-language money advice.</li>
              <li><strong>Bilingual fee-only advisors</strong> — search NAPFA.org filter language.</li>
              <li><strong>Hispanic American Realtors</strong> — bilingual estate planning + housing.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="bg-muted/40">
          <CardContent className="pt-6">
            <h3 className="font-bold mb-2">No sea barrera</h3>
            <p className="text-sm text-muted-foreground">Hispanic seniors face higher poverty rates partly due to language barriers in claiming benefits. Don&apos;t skip Social Security, Medicare, or retirement help due to English-only fear. ALL these are FREE in Spanish.</p>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}

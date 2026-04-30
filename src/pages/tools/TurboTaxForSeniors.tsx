import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { FileText } from 'lucide-react';

export default function TurboTaxForSeniors() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="TurboTax for Seniors | TekSure" description="TurboTax for senior tax filers. Costs, alternatives, and free options." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <FileText className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">TurboTax</h1>
          <p className="text-lg text-muted-foreground">Most popular tax software.</p>
        </div>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Pricing</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Free Edition — simple returns only.</li>
              <li>Deluxe — $69, more deductions.</li>
              <li>Premier — $99, investments + rental.</li>
              <li>Self-Employed — $129, business owners.</li>
              <li>Plus state filing $59 each.</li>
              <li>Often more expensive than alternatives.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Why so popular?</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>User-friendly interview style.</li>
              <li>Imports prior year automatically.</li>
              <li>Imports W-2 forms from many employers.</li>
              <li>Audit defense option.</li>
              <li>Live expert help available ($).</li>
              <li>Trusted brand.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Free options most seniors miss</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>AARP Tax-Aide — completely FREE.</li>
              <li>VITA — free for income under ~$67K.</li>
              <li>IRS Free File — free if income under $84K.</li>
              <li>FreeTaxUSA — free federal.</li>
              <li>Skip TurboTax if eligible.</li>
              <li>Save $70–$200 per year.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">When TurboTax worth it</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Self-employed.</li>
              <li>Multiple rental properties.</li>
              <li>Complex investments.</li>
              <li>Want hand-holding interview.</li>
              <li>Don&apos;t qualify for free options.</li>
              <li>Comfortable with software.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Cheaper alternatives</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>FreeTaxUSA — free federal, $15 state.</li>
              <li>Cash App Taxes — completely free.</li>
              <li>TaxAct — cheaper than TurboTax.</li>
              <li>H&amp;R Block Online — similar pricing.</li>
              <li>Save $50–$100 with alternatives.</li>
              <li>All produce same final return.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Senior-specific deductions</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Higher standard deduction at 65+.</li>
              <li>Medical expense threshold lower.</li>
              <li>Credit for Elderly + Disabled.</li>
              <li>Property tax deductions.</li>
              <li>Long-term care insurance premiums.</li>
              <li>TurboTax catches these — but so does free software.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="bg-muted/40">
          <CardContent className="pt-6">
            <h3 className="font-bold mb-2">AARP Tax-Aide first</h3>
            <p className="text-sm text-muted-foreground">Before paying TurboTax $70+, check AARP Tax-Aide near you (AARP.org/taxaide). Free volunteer tax preparation specifically for seniors. They handle most senior tax situations including Social Security, pensions, IRAs. Many seniors who used TurboTax for years switch to free Tax-Aide and save hundreds yearly.</p>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}

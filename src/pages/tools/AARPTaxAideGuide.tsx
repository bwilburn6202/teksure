import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { FileText } from 'lucide-react';

export default function AARPTaxAideGuide() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="AARP Tax-Aide Free Tax Help for Seniors | TekSure" description="Free tax preparation for seniors through AARP Tax-Aide and VITA. Plain-English guide." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <FileText className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Free Tax Help</h1>
          <p className="text-lg text-muted-foreground">AARP Tax-Aide and VITA — completely free.</p>
        </div>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">AARP Tax-Aide</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Completely free — no AARP membership required.</li>
              <li>Trained volunteers prepare your taxes.</li>
              <li>In-person and virtual appointments.</li>
              <li>Specializes in seniors and moderate-income taxpayers.</li>
              <li>5,000+ locations nationwide.</li>
              <li>Available February through April each year.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">VITA program</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>VITA = Volunteer Income Tax Assistance.</li>
              <li>IRS-sponsored free tax prep.</li>
              <li>Free if income under $67,000 (check current limit).</li>
              <li>Located at libraries, community centers, churches.</li>
              <li>IRS-certified volunteers prepare returns.</li>
              <li>Find location at IRS.gov or call 800-906-9887.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">IRS Free File</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>File taxes free online at IRS.gov/freefile.</li>
              <li>Free if income under $84,000.</li>
              <li>Guided software — like TurboTax but free.</li>
              <li>8 partner companies offer free filing.</li>
              <li>Available January through October.</li>
              <li>State return may cost extra — varies.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">What to bring to appointment</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Photo ID and Social Security cards for all.</li>
              <li>All W-2, 1099, and SSA-1099 forms.</li>
              <li>1099-R if you have retirement distributions.</li>
              <li>Prior year tax return if available.</li>
              <li>Bank account info for direct deposit refund.</li>
              <li>Property tax and mortgage interest statements.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Senior tax credits</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Credit for the Elderly and Disabled — check eligibility.</li>
              <li>Higher standard deduction for age 65+.</li>
              <li>Medical expense deduction — lower threshold at 65+.</li>
              <li>State-specific credits — varies by state.</li>
              <li>Trained volunteers know these credits — ask them.</li>
              <li>Many seniors overpay taxes by not claiming these.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">How to find help</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>AARP Tax-Aide: AARP.org/taxaide or 888-687-2277.</li>
              <li>VITA locator: IRS.gov/VITA or 800-906-9887.</li>
              <li>Or search &quot;VITA tax help near me.&quot;</li>
              <li>Schedule early — spots fill up in February.</li>
              <li>Virtual appointment available at many sites.</li>
              <li>Both free — no income limit for AARP.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="bg-muted/40">
          <CardContent className="pt-6">
            <h3 className="font-bold mb-2">Stop paying for tax prep</h3>
            <p className="text-sm text-muted-foreground">Millions of seniors pay $150–$400 to tax preparers for returns that qualify for free preparation through AARP Tax-Aide or VITA. These programs serve seniors with Social Security income, pensions, investment income, and most common situations. The volunteers are IRS-certified and trained for senior-specific situations. Call to schedule an appointment in January before spots fill.</p>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}

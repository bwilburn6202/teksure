import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Home } from 'lucide-react';

export default function VAHomeLoanGuide() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="VA Home Loan Guide for Senior Veterans | TekSure" description="VA loan benefits + IRRRL refi. Plain-English guide for senior vets buying / refi-ing." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Home className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">VA Home Loan</h1>
          <p className="text-lg text-muted-foreground">$0 down. No PMI. Use it again + again.</p>
        </div>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Senior VA loan benefits</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>$0 down payment required.</li>
              <li>NO private mortgage insurance (PMI).</li>
              <li>Lower rates than conventional.</li>
              <li>Easier qualification.</li>
              <li>Use multiple times in lifetime.</li>
              <li>Can downsize using VA loan.</li>
              <li>Can buy condo if VA-approved.</li>
              <li>Refi existing mortgage with IRRRL.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Eligibility</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>90+ days active duty wartime, or 181 days peacetime.</li>
              <li>6+ years National Guard / Reserves.</li>
              <li>Surviving spouses (un-remarried).</li>
              <li>Honorable / general discharge.</li>
              <li>Get Certificate of Eligibility (COE) at VA.gov.</li>
              <li>VA-approved lender required.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">IRRRL — refinance simply</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Interest Rate Reduction Refinance Loan.</li>
              <li>Refi existing VA loan to lower rate.</li>
              <li>NO appraisal usually.</li>
              <li>NO income verification usually.</li>
              <li>Closing costs rolled into loan.</li>
              <li>Often closes in 30 days.</li>
              <li>Easiest refi available.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Cash-out refi</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Up to 100% of home value (vs 80% conventional).</li>
              <li>Pay off credit cards, do home repairs.</li>
              <li>Lower rates than home equity loan.</li>
              <li>Caution — using equity should be careful.</li>
              <li>Don&apos;t blow on consumables.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Funding fee</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>One-time fee 1.25-3.3% of loan.</li>
              <li>Can be rolled into loan.</li>
              <li><strong>WAIVED if disability rating 10%+</strong>.</li>
              <li>Always check eligibility — many qualify, don&apos;t know.</li>
              <li>Surviving spouses also waived.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Disability + property tax exemption</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Many states give 100% disabled vets full property tax exemption.</li>
              <li>Florida, Texas, others — major savings.</li>
              <li>Check your state&apos;s rules.</li>
              <li>$3,000-15,000/yr savings possible.</li>
              <li>Apply through county assessor.</li>
              <li>Plus VA-disability monthly compensation tax-free.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="bg-muted/40">
          <CardContent className="pt-6">
            <h3 className="font-bold mb-2">Find a VA loan specialist</h3>
            <p className="text-sm text-muted-foreground"><strong>Veterans United</strong> — top VA lender. <strong>Navy Federal Credit Union</strong> — vets only. <strong>USAA</strong> — military families. Get 3 quotes — rates vary 0.5%+. Watch for &quot;teaser&quot; rates that adjust. Senior tip: prefer fixed-rate over adjustable. Compare on bankrate.com.</p>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}

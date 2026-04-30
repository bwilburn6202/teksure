import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Receipt } from 'lucide-react';

export default function IRSOnlineAccount() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="IRS Online Account for Seniors | TekSure" description="Manage taxes online. Plain-English IRS.gov account guide for seniors." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Receipt className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">IRS Online Account</h1>
          <p className="text-lg text-muted-foreground">Skip phone wait. Solve taxes online.</p>
        </div>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">What you can do</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>View tax balance + recent payments.</li>
              <li>See 5 years of tax records.</li>
              <li>Make + schedule payments.</li>
              <li>View notices online.</li>
              <li>Get tax transcripts free.</li>
              <li>Track refund status.</li>
              <li>View 1099 + W-2 info IRS has.</li>
              <li>Set up payment plans.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Setup</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Go to irs.gov/account.</li>
              <li>Click &quot;Sign in&quot; or &quot;Create account.&quot;</li>
              <li>Use ID.me OR Login.gov.</li>
              <li>Need: SSN, prior year AGI, photo ID, phone.</li>
              <li>30-60 min for full verification.</li>
              <li>Sign in moving forward.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Skip phone hold</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>IRS phone wait often 1-3 hours.</li>
              <li>Online account answers most questions.</li>
              <li>Refund status — Where&apos;s My Refund tool.</li>
              <li>View notices online — easier than phone explanation.</li>
              <li>Documentation in account.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Free file taxes</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li><strong>IRS Free File</strong> — under $79K AGI. Free.</li>
              <li><strong>AARP Tax-Aide</strong> — free Feb-April for 50+.</li>
              <li><strong>VITA</strong> — IRS free help under $64K.</li>
              <li><strong>TCE</strong> — Tax Counseling for Elderly.</li>
              <li><strong>FreeTaxUSA</strong> — federal free, $15 state.</li>
              <li><strong>TurboTax Free Edition</strong> — simple returns.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">IRS scams</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>IRS NEVER calls demanding immediate payment.</li>
              <li>IRS NEVER asks for credit card / wire / gift cards.</li>
              <li>IRS NEVER threatens arrest.</li>
              <li>IRS sends LETTERS first.</li>
              <li>Verify any letter at IRS.gov account.</li>
              <li>Suspicious call — hang up. Call IRS 1-800-829-1040 directly.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="bg-muted/40">
          <CardContent className="pt-6">
            <h3 className="font-bold mb-2">Stop identity theft</h3>
            <p className="text-sm text-muted-foreground">Set up IRS.gov account NOW even if don&apos;t need yet. Same as Social Security — scammer can&apos;t create fake account in your name. Get IRS PIN ($5 fee) — adds extra security to tax filings. Identity theft refund fraud was $2B+ last year.</p>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}

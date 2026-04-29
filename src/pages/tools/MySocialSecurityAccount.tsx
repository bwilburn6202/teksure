import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { ShieldCheck } from 'lucide-react';

export default function MySocialSecurityAccount() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="my Social Security Account Setup | TekSure" description="Set up + use SSA.gov online account. Plain-English guide for senior beneficiaries." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <ShieldCheck className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">my Social Security Account</h1>
          <p className="text-lg text-muted-foreground">Manage benefits online. Free. Essential.</p>
        </div>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">What you can do</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Apply for benefits online.</li>
              <li>Check benefit status.</li>
              <li>Get benefit letter (proof of income).</li>
              <li>Change direct deposit.</li>
              <li>Update tax withholding.</li>
              <li>Print benefit verification.</li>
              <li>Replace Medicare card.</li>
              <li>Estimate future benefits.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Setup (15 min)</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Go to ssa.gov/myaccount.</li>
              <li>Click &quot;Sign In or Create Account.&quot;</li>
              <li>Click &quot;Sign in with Login.gov.&quot;</li>
              <li>Or use ID.me (alternative).</li>
              <li>Need: SSN, valid email, US address, mobile phone.</li>
              <li>Verify identity through credit history questions.</li>
              <li>Sign in moving forward.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Login.gov vs ID.me</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li><strong>Login.gov</strong> — federal government&apos;s system. Free.</li>
              <li><strong>ID.me</strong> — third-party. Same access.</li>
              <li>Many seniors find ID.me easier.</li>
              <li>Takes 30-60 min for full ID verification.</li>
              <li>Use SAME account at IRS, VA, Medicare.</li>
              <li>Done once = use everywhere.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Block scammers</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Set up account NOW — even if not collecting yet.</li>
              <li>Otherwise scammer creates fake account in your name.</li>
              <li>Reroutes your benefits!</li>
              <li>Block account creation = blocks scam.</li>
              <li>One of best identity theft prevention.</li>
              <li>Fraud is on rise.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Senior tips</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>SSA never calls — fraud if they do.</li>
              <li>Use 2FA on Login.gov account.</li>
              <li>Don&apos;t share SSN.</li>
              <li>Check estimated benefits annually.</li>
              <li>Plan retirement age based on data.</li>
              <li>Print earnings record yearly — verify SSA tracking right.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="bg-muted/40">
          <CardContent className="pt-6">
            <h3 className="font-bold mb-2">In-person help</h3>
            <p className="text-sm text-muted-foreground">Local SSA office — appointment recommended (1-800-772-1213). Free help. Bring ID + Medicare card. <strong>SHIP counselors</strong> — free Medicare help. Most issues resolved by phone or online now. 99% don&apos;t need office visit.</p>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}

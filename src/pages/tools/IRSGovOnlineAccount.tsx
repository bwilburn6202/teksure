import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Building } from 'lucide-react';

export default function IRSGovOnlineAccount() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="IRS.gov Online Account for Seniors | TekSure" description="View tax records, payments, transcripts free at IRS.gov. Senior-friendly setup." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Building className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">IRS Online Account</h1>
          <p className="text-lg text-muted-foreground">Free direct access to IRS records.</p>
        </div>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">What you can do</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>View tax records + balance.</li>
              <li>Make payments.</li>
              <li>Set up payment plan.</li>
              <li>Get transcripts free.</li>
              <li>Track refund.</li>
              <li>View past returns.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Setup process</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Go to IRS.gov.</li>
              <li>Click &quot;Sign In to Your Account.&quot;</li>
              <li>Verify identity through ID.me.</li>
              <li>Photo ID + selfie required.</li>
              <li>20–30 minute first-time setup.</li>
              <li>Use computer not phone (easier).</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Get transcripts</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Often required for mortgage applications.</li>
              <li>For Medicare/Medicaid applications.</li>
              <li>Replace lost W-2s + 1099s.</li>
              <li>Free download anytime.</li>
              <li>Avoid mailing requests.</li>
              <li>Get last 10 years.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Payment plan</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>If you owe taxes you can&apos;t pay.</li>
              <li>Set up online payment plan.</li>
              <li>Short-term (120 days) — no fee.</li>
              <li>Long-term — small fee.</li>
              <li>Stops collection actions.</li>
              <li>Avoids penalties stacking.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Watch for IRS scams</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>IRS NEVER calls demanding payment.</li>
              <li>NEVER threatens arrest.</li>
              <li>NEVER asks for gift cards.</li>
              <li>Real IRS sends letters first.</li>
              <li>Always verify by calling IRS directly.</li>
              <li>1-800-829-1040 is real number.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">If you receive IRS letter</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Don&apos;t panic.</li>
              <li>Read carefully.</li>
              <li>Login to IRS.gov to verify.</li>
              <li>Most letters are simple.</li>
              <li>Respond by deadline.</li>
              <li>Get help from CPA or AARP Tax-Aide if confused.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="bg-muted/40">
          <CardContent className="pt-6">
            <h3 className="font-bold mb-2">Set up account now</h3>
            <p className="text-sm text-muted-foreground">Don&apos;t wait until you need it. Set up your IRS online account in low-stress times. Spend 30 minutes verifying identity through ID.me. Once active, you can access tax info anytime. Lost W-2s, transcript needs for mortgage, payment questions — all immediate access. Saves months of mail back-and-forth with IRS.</p>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}

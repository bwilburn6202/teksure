import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Building } from 'lucide-react';

export default function SocialSecurityOnline() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Social Security Online — Plain English | TekSure" description="my Social Security account at ssa.gov. Plain-English setup + what you can do online." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Building className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Social Security Online</h1>
          <p className="text-lg text-muted-foreground">my Social Security account.</p>
        </div>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Sign up at SSA.gov</h2>
            <ol className="list-decimal pl-5 space-y-2 text-sm">
              <li>Go to <strong>ssa.gov/myaccount</strong>.</li>
              <li>Click "Create an Account".</li>
              <li>Use Login.gov or ID.me for identity verification.</li>
              <li>Provides SSN, address, phone for verification.</li>
              <li>Set strong password.</li>
              <li>Set 2FA — text or authenticator app.</li>
            </ol>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">What you can do online</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Check current + future benefits.</li>
              <li>Apply for retirement benefits.</li>
              <li>Apply for disability benefits.</li>
              <li>Get statement of earnings history.</li>
              <li>Request replacement Social Security card.</li>
              <li>Update address + phone.</li>
              <li>Set up direct deposit.</li>
              <li>Get tax forms (1099-SSA).</li>
              <li>Manage Medicare enrollment.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Lock your SSN online</h2>
            <ol className="list-decimal pl-5 space-y-2 text-sm">
              <li>Account settings → Security.</li>
              <li>Self-Lock SSN — prevents fraudulent use.</li>
              <li>Unlocks for legitimate use later.</li>
              <li>Best identity-theft protection for SSN.</li>
            </ol>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Common scams to avoid</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>SSA NEVER calls demanding immediate payment.</li>
              <li>SSA NEVER threatens arrest.</li>
              <li>SSA NEVER asks for gift card payment.</li>
              <li>Real SSA contact = mail letter first, official phone.</li>
              <li>Anyone calling claiming "SSN suspended" = SCAM.</li>
              <li>Hang up. Report at oig.ssa.gov.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="bg-muted/40">
          <CardContent className="pt-6">
            <h3 className="font-bold mb-2">Free help</h3>
            <p className="text-sm text-muted-foreground">Local Social Security office — but make appointment online (busy walk-ins often turned away). 1-800-772-1213 free hotline. SHIP for Medicare-related questions free.</p>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}

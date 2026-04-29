import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { ShieldCheck } from 'lucide-react';

export default function TwoFactorAuthGuide() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Two-Factor Authentication for Seniors | TekSure" description="Stop hackers with 2FA. Plain-English setup guide for senior accounts." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <ShieldCheck className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Two-Factor Auth (2FA)</h1>
          <p className="text-lg text-muted-foreground">Single best protection against hacking.</p>
        </div>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">What is 2FA?</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Password + second verification = login.</li>
              <li>Code sent to phone, OR app code, OR fingerprint.</li>
              <li>Stops 99% of hacking attempts.</li>
              <li>Required by most banks now.</li>
              <li>Free.</li>
              <li>Works on email, banking, social media.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Methods, best to worst</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li><strong>Authenticator app</strong> (Google, Microsoft, Authy) — BEST.</li>
              <li><strong>Passkey / Face ID</strong> — easiest, also best.</li>
              <li><strong>Hardware key (YubiKey)</strong> — most secure.</li>
              <li><strong>Email backup code</strong> — okay.</li>
              <li><strong>Text message code</strong> — okay but SIM swap risk.</li>
              <li>Avoid text-only if possible.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Critical accounts to protect</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li><strong>Email</strong> — protect FIRST. Gateway to everything.</li>
              <li><strong>Banking + investment</strong>.</li>
              <li><strong>Apple ID / Google account</strong>.</li>
              <li><strong>Tax sites (IRS, state)</strong>.</li>
              <li><strong>Medicare.gov + Social Security</strong>.</li>
              <li><strong>Amazon</strong>.</li>
              <li><strong>Facebook</strong> — identity theft vector.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Setup steps</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Sign into account.</li>
              <li>Settings → Security → Two-Factor or 2-Step Verification.</li>
              <li>Choose method (recommended: app + backup phone).</li>
              <li>Scan QR code with authenticator app.</li>
              <li>Save backup codes printed somewhere SAFE.</li>
              <li>Test by logging out + back in.</li>
              <li>10 min per account.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Best authenticator apps</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li><strong>Google Authenticator</strong> — simplest. FREE.</li>
              <li><strong>Microsoft Authenticator</strong> — Microsoft accounts.</li>
              <li><strong>Authy</strong> — backs up codes (helpful if lose phone).</li>
              <li><strong>1Password / Bitwarden</strong> — built into password manager.</li>
              <li>All free.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">If you lose phone</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Backup codes save you (printed somewhere safe).</li>
              <li>Authy syncs to new phone (Google Auth doesn&apos;t).</li>
              <li>Trust contact (Apple, Google) recovery.</li>
              <li>Don&apos;t skip backup codes — critical.</li>
              <li>Print + put in safe / safety deposit.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="bg-muted/40">
          <CardContent className="pt-6">
            <h3 className="font-bold mb-2">Family member helps</h3>
            <p className="text-sm text-muted-foreground">2FA setup intimidating but worthwhile. Have tech-savvy family member set up critical accounts. Email + bank + Apple ID = top 3. After done — stays set up. Phone-text 2FA ok for non-critical (Facebook, etc.). App-based for critical.</p>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}

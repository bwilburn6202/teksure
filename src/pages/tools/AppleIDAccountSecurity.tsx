import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { KeyRound } from 'lucide-react';

export default function AppleIDAccountSecurity() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Apple ID Security for Seniors | TekSure" description="Secure your Apple ID — the master account for everything Apple. Senior-friendly setup." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <KeyRound className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Apple ID Security</h1>
          <p className="text-lg text-muted-foreground">Lock down your master Apple account.</p>
        </div>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Why this matters</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Apple ID = key to all Apple devices + services.</li>
              <li>Lost Apple ID = lost iCloud, photos, app purchases.</li>
              <li>Hijacked Apple ID = devices can be locked remotely.</li>
              <li>Critical to protect.</li>
              <li>Most seniors haven&apos;t reviewed in years.</li>
              <li>15-minute checkup recommended yearly.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Where to check</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>iPhone: Settings → tap your name at top.</li>
              <li>Mac: System Settings → tap your name.</li>
              <li>Web: AppleID.Apple.com.</li>
              <li>All show same account info.</li>
              <li>Sign In + Security section.</li>
              <li>Update from any device.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Enable 2FA (if not already)</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Settings → Apple ID → Sign In + Security.</li>
              <li>Tap Two-Factor Authentication.</li>
              <li>Enable + verify trusted phone numbers.</li>
              <li>Login codes sent to trusted devices/numbers.</li>
              <li>Once on, can&apos;t turn off (security feature).</li>
              <li>Required for newer iCloud features.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Recovery contacts</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Designate trusted family members.</li>
              <li>Account Recovery → Add Recovery Contact.</li>
              <li>They can help if you forget password.</li>
              <li>Up to 5 recovery contacts.</li>
              <li>Best: spouse + adult children.</li>
              <li>Also designate Recovery Key (printed code).</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Legacy contact</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Designates who gets your data after death.</li>
              <li>Apple ID → Sign In + Security → Legacy Contact.</li>
              <li>Up to 5 legacy contacts.</li>
              <li>They get access key to share with you.</li>
              <li>Required to claim data plus death certificate.</li>
              <li>Critical for digital legacy planning.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Connected devices</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Settings → Apple ID → scroll down — devices list.</li>
              <li>See every device signed into your account.</li>
              <li>Old phones, tablets, computers.</li>
              <li>Tap unfamiliar — &quot;Remove from Account.&quot;</li>
              <li>Review yearly.</li>
              <li>Old devices being recycled = remove first.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="bg-muted/40">
          <CardContent className="pt-6">
            <h3 className="font-bold mb-2">Set up Recovery Contact this week</h3>
            <p className="text-sm text-muted-foreground">If you forget your Apple ID password, recovery contacts can help you back in within hours instead of days. Add your spouse and an adult child as Recovery Contacts. Also enable Legacy Contact for digital inheritance. These two settings take 10 minutes and are critical for any senior using Apple devices. They prevent both lockouts AND data loss after death.</p>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}

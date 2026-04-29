import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Key } from 'lucide-react';

export default function YubiKeyForSeniors() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="YubiKey for Senior Security | TekSure" description="Hardware security keys explained. Plain-English YubiKey guide for seniors." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Key className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">YubiKey for Seniors</h1>
          <p className="text-lg text-muted-foreground">Physical key that protects accounts. Most secure.</p>
        </div>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">What is a YubiKey?</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>USB-shaped physical key.</li>
              <li>Plug into computer/phone to log in.</li>
              <li>Hackers can&apos;t steal what they don&apos;t have.</li>
              <li>$45-75 per key.</li>
              <li>Buy 2 (one as backup).</li>
              <li>Stops 100% phishing/hacking.</li>
              <li>For Gmail, banks, crypto, tax accounts.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Best YubiKey models</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li><strong>YubiKey 5C NFC</strong> — $55. Works on USB-C + NFC phones.</li>
              <li><strong>YubiKey 5 NFC</strong> — $50. Standard USB + NFC.</li>
              <li><strong>YubiKey 5Ci</strong> — $75. iPhone Lightning + USB-C.</li>
              <li>Bundle 2 different keys = backup if lost.</li>
              <li>Last 10+ years.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Worth it for seniors?</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li><strong>YES</strong> — if active hacking targets (executives, lawyers, doctors).</li>
              <li><strong>YES</strong> — if managing $$$ online.</li>
              <li><strong>YES</strong> — if past identity theft victim.</li>
              <li><strong>NO</strong> — if only basic email + Facebook (overkill).</li>
              <li>Most seniors fine with authenticator app instead.</li>
              <li>Gmail account compromise = scary so YubiKey worth $50.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Setup</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Buy from yubico.com or Amazon.</li>
              <li>Sign into account → Security → Add 2FA.</li>
              <li>Choose &quot;Hardware key.&quot;</li>
              <li>Tap key in computer/phone.</li>
              <li>Set backup key too.</li>
              <li>30 min for several accounts.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Carry safely</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>On keychain — small.</li>
              <li>Backup key at home in safe.</li>
              <li>Never connect strange computers.</li>
              <li>If lost — disable on accounts immediately.</li>
              <li>Backup key takes over.</li>
              <li>Replace lost key $50.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="bg-muted/40">
          <CardContent className="pt-6">
            <h3 className="font-bold mb-2">Free alternative: passkey</h3>
            <p className="text-sm text-muted-foreground">Apple, Google, Microsoft now support PASSKEYS — phone&apos;s Face ID/fingerprint replaces password. Free. Same security level. Easier than YubiKey. See /tools/passkey-explained. Many seniors find passkeys sufficient. YubiKey if you want maximum security across all devices.</p>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}

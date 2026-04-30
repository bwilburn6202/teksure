import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { KeyRound } from 'lucide-react';

export default function PasskeyExplained() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Passkeys Explained for Seniors | TekSure" description="Replace passwords forever. Plain-English passkey guide for seniors." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <KeyRound className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Passkeys Explained</h1>
          <p className="text-lg text-muted-foreground">Goodbye passwords. Hello fingerprint sign-ins.</p>
        </div>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">What is a passkey?</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Replaces password.</li>
              <li>Sign in with Face ID / fingerprint.</li>
              <li>NO password to remember or type.</li>
              <li>Apple, Google, Microsoft all support.</li>
              <li>Most secure login method.</li>
              <li>Phishing-proof.</li>
              <li>Free.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Why better than password</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Can&apos;t be guessed.</li>
              <li>Can&apos;t be phished.</li>
              <li>Can&apos;t be stolen in data breach.</li>
              <li>Don&apos;t need to remember.</li>
              <li>Faster — Face ID 1 second.</li>
              <li>Tied to YOUR device — hackers can&apos;t use.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Sites supporting passkeys</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Apple ID, Google, Microsoft, Amazon.</li>
              <li>PayPal, eBay.</li>
              <li>Best Buy, Target, Costco.</li>
              <li>Nintendo, Adobe.</li>
              <li>WhatsApp, X (Twitter).</li>
              <li>List growing weekly.</li>
              <li>Banks slowly adding.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Setup (per site)</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Sign into account.</li>
              <li>Account Settings → Security.</li>
              <li>Look for &quot;Passkeys&quot; or &quot;Passwordless sign-in.&quot;</li>
              <li>Click &quot;Set up.&quot;</li>
              <li>Confirm with Face ID / fingerprint.</li>
              <li>Done. Next sign-in = no password.</li>
              <li>Keep password as backup.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Where passkeys stored</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Apple — iCloud Keychain.</li>
              <li>Google — Google Password Manager.</li>
              <li>Microsoft — Microsoft Authenticator.</li>
              <li>Sync across YOUR devices automatically.</li>
              <li>Phone, tablet, laptop all work.</li>
              <li>Lost device — sign in on new device, syncs back.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Are they safe?</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>YES — most secure login method invented.</li>
              <li>Stays on YOUR device.</li>
              <li>Companies never see private key.</li>
              <li>Lost phone — recover from cloud backup.</li>
              <li>Industry standard (FIDO2 alliance).</li>
              <li>Apple, Google, Microsoft trust = safe.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="bg-muted/40">
          <CardContent className="pt-6">
            <h3 className="font-bold mb-2">Future of login</h3>
            <p className="text-sm text-muted-foreground">Passwords going away over next 5-10 years. Passkeys replacing them. Worth learning. Easier than passwords once set up. Less to remember. More secure. Set up on critical accounts (Apple, Google, banks) when offered.</p>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}

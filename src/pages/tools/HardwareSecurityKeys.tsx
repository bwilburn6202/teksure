import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Key } from 'lucide-react';

export default function HardwareSecurityKeys() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Hardware Security Keys for Seniors | TekSure" description="YubiKey + Titan keys explained. The strongest 2FA available for senior users." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Key className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Hardware Security Keys</h1>
          <p className="text-lg text-muted-foreground">Strongest 2FA. Physical key.</p>
        </div>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">What they are</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Small USB key (size of car key).</li>
              <li>Plug into computer or tap to phone (NFC).</li>
              <li>Login requires the physical key.</li>
              <li>Hackers can&apos;t access without it.</li>
              <li>Most secure 2FA available.</li>
              <li>$25–$70 each.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">YubiKey 5 Series</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>$50–$70 — gold standard.</li>
              <li>YubiKey 5C NFC — most popular.</li>
              <li>USB-C + NFC tap to iPhone.</li>
              <li>Works with Google, Apple, Microsoft, banks.</li>
              <li>Very durable — waterproof, crushproof.</li>
              <li>Lasts 5+ years.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Google Titan</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>$30 — Google&apos;s alternative.</li>
              <li>Bluetooth + USB versions.</li>
              <li>Works seamlessly with Google accounts.</li>
              <li>Less universal than YubiKey.</li>
              <li>Good for Google-heavy users.</li>
              <li>Buy from Google Store.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Buy two keys</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>One primary — keep on keychain.</li>
              <li>One backup — in fireproof safe at home.</li>
              <li>Without backup, lost key = locked out.</li>
              <li>Set up both with each account.</li>
              <li>Yes, total cost is $100–$140.</li>
              <li>Worth it for valuable accounts.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Best for these accounts</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Email — your master key.</li>
              <li>Investment accounts.</li>
              <li>Major bank accounts.</li>
              <li>Apple ID + Google account.</li>
              <li>Password manager (1Password, Bitwarden).</li>
              <li>Government accounts (SSA, VA).</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Setup process</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Login to account.</li>
              <li>Settings → Security → 2-Step Verification.</li>
              <li>Add Security Key option.</li>
              <li>Plug in or tap key when prompted.</li>
              <li>Press button on key to confirm.</li>
              <li>Repeat for backup key.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="bg-muted/40">
          <CardContent className="pt-6">
            <h3 className="font-bold mb-2">Worth it for major accounts</h3>
            <p className="text-sm text-muted-foreground">For most seniors, a YubiKey 5C NFC + a backup ($120 total) protects email, banking, and investment accounts at the highest level available. If hackers steal your password, they STILL can&apos;t get in without the physical key. Many financial advisors recommend this for clients with significant assets. Yes, $120 — but compared to losing a $200,000 retirement account to fraud, it&apos;s the cheapest insurance you&apos;ll ever buy.</p>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}

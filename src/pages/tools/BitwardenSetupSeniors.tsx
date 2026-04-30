import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Lock } from 'lucide-react';

export default function BitwardenSetupSeniors() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Bitwarden Setup for Seniors | TekSure" description="Free password manager setup for seniors. Bitwarden step-by-step tutorial." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Lock className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Bitwarden</h1>
          <p className="text-lg text-muted-foreground">Free password manager. Open source.</p>
        </div>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Why Bitwarden?</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>100% free for unlimited passwords.</li>
              <li>Open source — code publicly inspected.</li>
              <li>Works on every device.</li>
              <li>Premium ($10/year) adds 2FA + extras.</li>
              <li>Strong reputation among security experts.</li>
              <li>Best free password manager.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Step 1: Sign up</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Go to Bitwarden.com.</li>
              <li>Tap &quot;Get Started&quot; — Create Account.</li>
              <li>Enter email + master password.</li>
              <li>Master password = the ONE password you remember.</li>
              <li>Use a long passphrase (4+ random words).</li>
              <li>Write it down + store securely (NOT in Bitwarden!).</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Step 2: Install everywhere</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Browser extension — Chrome, Safari, Firefox, Edge.</li>
              <li>Phone app — iPhone + Android.</li>
              <li>Sign in on each with master password.</li>
              <li>Your vault syncs everywhere.</li>
              <li>Add fingerprint/Face ID for quick unlock.</li>
              <li>Same vault, all devices.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Step 3: Add your passwords</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Visit a website you use, log in normally.</li>
              <li>Bitwarden asks &quot;Save this login?&quot;</li>
              <li>Tap &quot;Save&quot; — done.</li>
              <li>Repeat for each website over a few weeks.</li>
              <li>Or import from browser&apos;s saved passwords.</li>
              <li>Eventually all passwords in Bitwarden.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Step 4: Use Bitwarden daily</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Visit website — Bitwarden offers to fill login.</li>
              <li>Tap fill — auto-types your saved info.</li>
              <li>Generate strong unique passwords for new accounts.</li>
              <li>Bitwarden warns about reused or weak passwords.</li>
              <li>Browser extension makes this seamless.</li>
              <li>Phone autofill for app logins too.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">For families</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Bitwarden Families: $40/year for 6 users.</li>
              <li>Shared family password collections.</li>
              <li>Streaming service logins, etc.</li>
              <li>Adult children can help manage.</li>
              <li>Emergency Access — designate trusted contact.</li>
              <li>If you can&apos;t login, they can help recover.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="bg-muted/40">
          <CardContent className="pt-6">
            <h3 className="font-bold mb-2">One master password to remember</h3>
            <p className="text-sm text-muted-foreground">The one tradeoff: you must remember your master password. Pick something memorable but strong — &quot;sunflower elephant guitar Tuesday&quot; is much stronger than &quot;Password1!&quot; and easier to remember. Write it on paper, lock it in a fireproof safe with your important documents. After that, Bitwarden remembers all your other passwords. Free forever.</p>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}

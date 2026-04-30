import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Lock } from 'lucide-react';

const APPS = [
  { name: '1Password', cost: '$3/mo individual / $5/mo family', best: 'Easiest senior-friendly UI. Apple Watch. Family sharing. Top recommendation.', good: 'Best overall.' },
  { name: 'Bitwarden', cost: 'FREE (Premium $10/yr)', best: 'Open-source. Free version is fully usable. Good apps. Trusted by experts.', good: 'Best free.' },
  { name: 'Apple Passwords', cost: 'FREE (with iPhone/Mac)', best: 'iOS 18+ standalone Passwords app. Built-in. Syncs across Apple devices. Adequate.', good: 'Best for iPhone-only homes.' },
  { name: 'Google Password Manager', cost: 'FREE', best: 'Built into Chrome and Android. Free. Decent but locked to Google.', good: 'Best for Chrome users.' },
  { name: 'Dashlane', cost: '$5/mo', best: 'Strong dark-web monitoring. Includes VPN.', good: 'Most extras.' },
  { name: 'LastPass', cost: '$3/mo', best: 'Was popular. Had major 2022 breach. Many users moved away.', good: 'Avoid until track record improves.' },
];

export default function PasswordManagerCompare() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Password Manager Compared | TekSure" description="1Password, Bitwarden, Apple Passwords, Dashlane. Plain-English picks for the best password manager — and which one to skip." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Lock className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Password Manager Compare</h1>
          <p className="text-lg text-muted-foreground">Stop reusing passwords. One master, the rest random.</p>
        </div>

        <div className="space-y-3 mb-6">
          {APPS.map(a => (
            <Card key={a.name}>
              <CardContent className="pt-6">
                <div className="flex justify-between items-baseline mb-1">
                  <h3 className="font-bold text-lg">{a.name}</h3>
                  <span className="text-sm font-semibold text-primary">{a.cost}</span>
                </div>
                <p className="text-sm">{a.best}</p>
                <p className="text-sm text-muted-foreground">{a.good}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Why a password manager</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>You only memorize ONE master password.</li>
              <li>Every site gets a unique, random 20-character password.</li>
              <li>If one site gets breached, your other accounts are safe.</li>
              <li>Auto-fills login on websites and apps. Saves typing.</li>
              <li>Warns you if a password leaks online.</li>
              <li>Family sharing — share streaming and bank passwords without texting them.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Quick decision</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li><strong>Family of 2-6 people, mix of devices</strong> — 1Password Family ($5/mo).</li>
              <li><strong>One person, want it free</strong> — Bitwarden Free.</li>
              <li><strong>All Apple, basic needs</strong> — Apple Passwords (free, built in).</li>
              <li><strong>Want maximum security/extras</strong> — 1Password individual.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">First-time setup (15 min)</h2>
            <ol className="list-decimal pl-5 space-y-2 text-sm">
              <li>Pick one. Install on phone + computer.</li>
              <li>Create master password — 4 random words like "BlueTractor-Apple-Window-7". Easy to remember, hard to crack. Write it on paper. Put paper somewhere safe.</li>
              <li>Import old passwords from browser (Chrome, Safari, Firefox export — manager imports).</li>
              <li>Each time you log into a site, save the password.</li>
              <li>Once a week, change ONE old reused password to a new random one.</li>
              <li>After 6 months, every password is unique.</li>
            </ol>
          </CardContent>
        </Card>

        <Card className="bg-muted/40">
          <CardContent className="pt-6">
            <h3 className="font-bold mb-2">Master password</h3>
            <p className="text-sm text-muted-foreground">If you lose your master password — you lose ALL your passwords. Write it on paper. Sealed envelope. Safe deposit box or fireproof safe. Tell ONE trusted person where it is.</p>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}

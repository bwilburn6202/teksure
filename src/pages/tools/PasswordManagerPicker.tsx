import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { KeyRound } from 'lucide-react';

const APPS = [
  { name: 'Bitwarden', cost: 'FREE forever (premium $10/year)', best: 'Best free password manager. Open source, audited, trusted by security pros. Works on every device.', good: 'Free version is perfect for most people.' },
  { name: 'Apple Passwords', cost: 'FREE (built into iOS 18+)', best: 'iPhone/Mac users. Now a real standalone app. Strong, simple, integrated.', good: 'Best free pick if you\'re all Apple.' },
  { name: 'Google Password Manager', cost: 'FREE (built into Chrome and Android)', best: 'Android and Chrome users. Built into Google account. Auto-fills on most websites.', good: 'Already there if you use Google.' },
  { name: '1Password', cost: '$3-5/month', best: 'Best premium password manager. Family plan ($5/mo for 5 people). Fantastic for couples and families. Emergency access setup.', good: 'Worth the cost for households.' },
  { name: 'Dashlane', cost: '$3-5/month', best: 'Includes a free VPN. Strong autofill.', good: 'Good middle option.' },
  { name: 'NordPass', cost: '$2-3/month', best: 'From the makers of NordVPN. Simple interface.', good: 'Often runs sales.' },
];

export default function PasswordManagerPicker() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Password Manager Picker — Bitwarden, 1Password, Apple, Google | TekSure" description="Stop re-using the same password. Plain-English picks for free and paid password managers — and how to switch from your old method." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <KeyRound className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Password Manager Picker</h1>
          <p className="text-lg text-muted-foreground">One strong password to remember. The rest are stored.</p>
        </div>

        <Card className="mb-6 bg-primary/5 border-primary/20">
          <CardContent className="pt-6">
            <h2 className="font-bold mb-2">Why everyone needs one</h2>
            <p className="text-sm">Re-using the same password across accounts is the #1 cause of getting hacked. When ANY website you use leaks passwords (and they all do eventually), the hackers try those passwords on every other site. A password manager generates a unique, strong password for each account, and remembers them for you.</p>
            <p className="text-sm mt-2"><strong>You only need to remember ONE password</strong> — the master password to the manager. That\'s it.</p>
          </CardContent>
        </Card>

        <div className="space-y-3 mb-6">
          {APPS.map(a => (
            <Card key={a.name}>
              <CardContent className="pt-6">
                <div className="flex justify-between items-baseline mb-1">
                  <h3 className="font-bold text-lg">{a.name}</h3>
                  <span className="text-sm font-semibold text-primary">{a.cost}</span>
                </div>
                <p className="text-sm mb-1">{a.best}</p>
                <p className="text-sm text-muted-foreground">{a.good}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Setup (any manager)</h2>
            <ol className="list-decimal pl-5 space-y-2 text-sm">
              <li>Install the app on every device — phone, tablet, computer.</li>
              <li>Make a master password. <strong>This is the only one you ever memorize.</strong> Use 4 random words: "purple-sandwich-mountain-shoes". Long is more important than complicated.</li>
              <li>Write the master password on paper. Put it somewhere safe (with your will, in a safe deposit box).</li>
              <li>Install the browser extension for Chrome / Safari / Edge / Firefox.</li>
              <li>Start adding passwords as you use sites. Or import from your browser\'s saved passwords (most managers offer one-click import).</li>
            </ol>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Setup Emergency Access</h2>
            <p className="text-sm mb-2">If something happens to you, your spouse or adult child needs access. Every good password manager has this.</p>
            <ul className="list-disc pl-5 space-y-1 text-sm">
              <li><strong>Bitwarden</strong> — Settings → Emergency Access → invite a trusted person.</li>
              <li><strong>1Password</strong> — Family plan auto-includes recovery for each member.</li>
              <li><strong>Apple Passwords</strong> — Apple Legacy Contact handles this.</li>
            </ul>
            <p className="text-sm mt-2">Set up a 7-day waiting period — they request access, you have a week to deny if it\'s a mistake. After that, they can read your passwords.</p>
          </CardContent>
        </Card>

        <Card className="mb-4 border-yellow-300 dark:border-yellow-800">
          <CardContent className="pt-6">
            <h3 className="font-bold mb-2">If you\'ve been writing passwords on paper</h3>
            <p className="text-sm">It\'s OK as a starting point. But every site needs a UNIQUE password. Most retired adults have 50-100 online accounts; a notebook can\'t keep up. The password manager lets you generate fresh strong passwords as you go — without typing them.</p>
          </CardContent>
        </Card>

        <Card className="bg-muted/40">
          <CardContent className="pt-6">
            <h3 className="font-bold mb-2">Where to start</h3>
            <p className="text-sm text-muted-foreground"><strong>Bitwarden free</strong> if you\'re curious and don\'t want to pay. <strong>Apple Passwords</strong> if you only use Apple devices. <strong>1Password Families</strong> if you and a spouse share lots of accounts and want emergency access set up properly.</p>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}

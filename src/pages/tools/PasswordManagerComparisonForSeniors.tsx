import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Key } from 'lucide-react';

export default function PasswordManagerComparisonForSeniors() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Password Manager Comparison for Seniors | TekSure" description="1Password vs Bitwarden vs Apple Passwords. Senior comparison." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Key className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Password Manager Compare</h1>
          <p className="text-lg text-muted-foreground">Pick the right one.</p>
        </div>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Apple Passwords</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>Free with Apple device.</li><li>iOS 18+ standalone app.</li><li>iCloud sync.</li><li>Senior simple.</li><li>2FA built-in.</li><li>Best for Apple-only families.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Bitwarden free</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>Free unlimited passwords.</li><li>Works any device.</li><li>Open source.</li><li>Senior frugal.</li><li>$10/yr Premium.</li><li>Best free option.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">1Password</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>$3-$5/month.</li><li>Polished UI.</li><li>Family $5/mo.</li><li>Senior premium.</li><li>Best customer support.</li><li>Worth $$.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">LastPass — avoid</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>Past breaches.</li><li>Free tier limited.</li><li>Senior switch off.</li><li>Better options exist.</li><li>Bitwarden migration.</li><li>1Password migration.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Senior pick guide</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>All Apple — Apple Passwords free.</li><li>Mixed devices — Bitwarden free.</li><li>Family share — 1Password Family.</li><li>Each fits situation.</li><li>Senior choice.</li><li>Don&apos;t pay if free works.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Migration</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>Export from old.</li><li>Import to new.</li><li>15 minutes.</li><li>Senior one-time work.</li><li>Adult kid help.</li><li>Worth switching.</li></ul></CardContent></Card>
        <Card className="bg-muted/40"><CardContent className="pt-6"><h3 className="font-bold mb-2">Senior pick = Apple Passwords or Bitwarden</h3><p className="text-sm text-muted-foreground">Senior all-Apple = free Apple Passwords app. Mixed devices = free Bitwarden. Family sharing = $5/mo 1Password. Avoid LastPass after breaches. Free options sufficient for most seniors. Adult kid sets up + family sharing.</p></CardContent></Card>
      </main>
      <Footer />
    </div>
  );
}

import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { ShieldCheck } from 'lucide-react';

export default function AuthenticatorAppForSeniors() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Authenticator App Guide for Seniors | TekSure" description="2-factor authentication apps. Senior step-by-step setup guide." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <ShieldCheck className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Authenticator Apps</h1>
          <p className="text-lg text-muted-foreground">Stronger than text codes.</p>
        </div>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Why use one</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>SMS codes can be stolen.</li><li>Authenticator app safer.</li><li>Free.</li><li>Codes change every 30 sec.</li><li>Hacker-resistant.</li><li>Banks recommend.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Best apps</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>Google Authenticator — free.</li><li>Microsoft Authenticator — free.</li><li>Authy — free, syncs devices.</li><li>1Password (paid).</li><li>iPhone built-in (Passwords).</li><li>Pick one.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Setup at site</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>Login site security.</li><li>2-Factor → Authenticator app.</li><li>Scan QR code with app.</li><li>Enter 6-digit code.</li><li>Done — protected.</li><li>Save backup codes.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Daily use</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>Login to site.</li><li>Open authenticator app.</li><li>Find that site.</li><li>Type 6-digit code.</li><li>Codes change every 30 sec.</li><li>Quick once habit.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Backup codes</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>Print + save.</li><li>If you lose phone.</li><li>Recovery codes work once.</li><li>Senior file at home.</li><li>Don&apos;t lose them.</li><li>Hugely important.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Senior tips</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>Start with bank account.</li><li>Then email.</li><li>Then social media.</li><li>Authy syncs across devices.</li><li>Don&apos;t skip backup codes.</li><li>Family help with setup.</li></ul></CardContent></Card>
        <Card className="bg-muted/40"><CardContent className="pt-6"><h3 className="font-bold mb-2">Authenticator + bank = senior safety</h3><p className="text-sm text-muted-foreground">SIM-swap scams target seniors. Text code 2FA can be stolen. Authenticator app codes can&apos;t. Free Google Authenticator + 30 minutes setup = senior accounts much safer. Start with bank, email. Save backup codes. Don&apos;t skip — fraud prevention essential.</p></CardContent></Card>
      </main>
      <Footer />
    </div>
  );
}

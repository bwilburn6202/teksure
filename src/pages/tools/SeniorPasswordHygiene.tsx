import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Lock } from 'lucide-react';

export default function SeniorPasswordHygiene() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Password Hygiene — Senior Guide" description="Keep passwords safe with simple habits." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Lock className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Password Hygiene</h1>
          <p className="text-lg text-muted-foreground">Simple rules to stay safe.</p>
        </div>
        <div className="space-y-4">
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">1. Unique per site</h2><p>Reuse one password and a leak at one site exposes all. Each account, fresh password.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">2. Long beats complex</h2><p>Three random words like Tuesday-violet-mountain. Easier to remember. Hard to crack.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">3. Use a manager</h2><p>1Password, Bitwarden, Apple Passwords. Remember one master password — it remembers the rest.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">4. Skip pet names</h2><p>Pet name + birth year is too easy to guess. Use random words.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">5. Check breaches</h2><p>haveibeenpwned.com — type email. See if your password was leaked online.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">6. Two-factor where possible</h2><p>Even if password leaks, 2FA blocks the thief.</p></CardContent></Card>
          <Card className="bg-muted/40"><CardContent className="p-6"><p>Stop changing passwords every 90 days unless required. Modern advice — change only if leaked.</p></CardContent></Card>
        </div>
      </main>
      <Footer />
    </div>
  );
}

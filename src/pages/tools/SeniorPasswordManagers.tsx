import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Key } from 'lucide-react';

export default function SeniorPasswordManagers() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Password Managers for Seniors — TekSure" description="Best password managers for seniors — Bitwarden, 1Password, Apple Keychain." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Key className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Password Managers</h1>
          <p className="text-lg text-muted-foreground">One master password. All others remembered for you.</p>
        </div>
        <div className="space-y-4">
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Bitwarden</h2><p>Free forever. Open source. Strong reputation. Best free pick.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">1Password</h2><p>$36/year for family of 5. Easy to share with spouse.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Apple iCloud Keychain</h2><p>Free. Built into iPhone, iPad, Mac. Great if you only use Apple.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Google Password Manager</h2><p>Free. Built into Chrome and Android.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Master password</h2><p>Make it long: 4 random words, like &ldquo;CoffeeRiverYellowBoat.&rdquo; Easy to remember, hard to guess.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Backup recovery</h2><p>Print the recovery code. Store in your safe or with a trusted family member.</p></CardContent></Card>
          <Card className="bg-muted/40"><CardContent className="pt-6"><p className="text-sm">Quick Tip: Once installed, never type passwords again. The manager auto-fills.</p></CardContent></Card>
        </div>
      </main>
      <Footer />
    </div>
  );
}

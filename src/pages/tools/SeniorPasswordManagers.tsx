import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { KeyRound } from 'lucide-react';

export default function SeniorPasswordManagers() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Password Managers — Senior Guide" description="Use a password manager to stay safe online." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <KeyRound className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Password Managers</h1>
          <p className="text-lg text-muted-foreground">Stop reusing passwords.</p>
        </div>
        <div className="space-y-4">
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">1. Why use one</h2><p>Hundreds of accounts need unique passwords. Manager remembers them all for you.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">2. Bitwarden free</h2><p>Free for unlimited passwords on every device. Open-source and trusted.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">3. 1Password</h2><p>Easier interface. $36/year for individual, $60/year for families up to 5.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">4. Apple Passwords</h2><p>Built into iPhone, iPad, Mac. Free. Syncs through iCloud.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">5. Master password</h2><p>Pick one strong master password. Write it down and store somewhere safe at home.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">6. Family sharing</h2><p>Share Netflix, Wi-Fi, or banking with a spouse safely. No more texting passwords.</p></CardContent></Card>
          <Card className="bg-muted/40"><CardContent className="p-6"><p>If you only remember one password (the master), the manager remembers the rest. Much safer than reuse.</p></CardContent></Card>
        </div>
      </main>
      <Footer />
    </div>
  );
}

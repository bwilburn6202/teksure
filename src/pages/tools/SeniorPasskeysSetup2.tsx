import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Key } from 'lucide-react';

export default function SeniorPasskeysSetup2() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Passkeys Setup — Senior Guide" description="Replace passwords with passkeys." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Key className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Passkeys Setup</h1>
          <p className="text-lg text-muted-foreground">No passwords to remember.</p>
        </div>
        <div className="space-y-4">
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">1. What's a passkey</h2><p>Replaces passwords. Sign in with face, fingerprint, or PIN.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">2. Apple ID</h2><p>Settings, Apple ID, Password & Security. Add a passkey.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">3. Google account</h2><p>Visit g.co/passkeys. Tap Use passkeys instead.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">4. Banks</h2><p>Major banks now offer passkeys. Find in security settings.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">5. Backup phone</h2><p>Set up passkeys on more than one device. So you can sign in even if phone is lost.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">6. Why bother</h2><p>Passkeys can't be phished. Stops most online break-ins cold.</p></CardContent></Card>
          <Card className="bg-muted/40"><CardContent className="p-6"><p>Old passwords still work as backup. Passkeys are an extra layer of safety.</p></CardContent></Card>
        </div>
      </main>
      <Footer />
    </div>
  );
}

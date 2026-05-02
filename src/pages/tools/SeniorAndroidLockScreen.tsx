import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Lock } from 'lucide-react';

export default function SeniorAndroidLockScreen() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Android Lock Screen — Senior Guide" description="Set up a secure but easy lock on Android." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Lock className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Android Lock Screen</h1>
          <p className="text-lg text-muted-foreground">Lock without locking yourself out.</p>
        </div>
        <div className="space-y-4">
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">1. Set a PIN</h2><p>Settings, Security, Screen lock. Pick PIN. Use 6 digits — easier to remember than complex.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">2. Add fingerprint</h2><p>Settings, Security, Fingerprint. Tap your finger several times when asked.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">3. Face unlock</h2><p>On phones that support it, set up Face Unlock for hands-free unlocking.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">4. Lock screen messages</h2><p>Settings, Display, Lock screen. Add a message like If found, please call (555)...</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">5. Hide notifications</h2><p>Pick Hide sensitive content so passcodes from texts don't show on the lock screen.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">6. Emergency info</h2><p>Settings, About phone, Emergency information. Add medical info — accessible without a PIN.</p></CardContent></Card>
          <Card className="bg-muted/40"><CardContent className="p-6"><p>Avoid 1234 or 0000 — thieves try these first. Pick something unique only you know.</p></CardContent></Card>
        </div>
      </main>
      <Footer />
    </div>
  );
}

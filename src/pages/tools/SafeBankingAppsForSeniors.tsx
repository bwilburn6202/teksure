import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Lock } from 'lucide-react';

export default function SafeBankingAppsForSeniors() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Safe Banking Apps for Seniors | TekSure" description="Senior secure banking practices + app guide." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Lock className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Safe Banking Apps</h1>
          <p className="text-lg text-muted-foreground">Senior banking habits.</p>
        </div>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Setup safety</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>Strong unique password.</li><li>2FA — authenticator app.</li><li>Biometric Face/Touch ID.</li><li>Senior layered.</li><li>Different from email password.</li><li>Worth time.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Daily habits</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>Check daily 30 sec.</li><li>Catch fraud fast.</li><li>Set alerts on transactions.</li><li>Senior vigilant.</li><li>$1+ alerts.</li><li>Email + text.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Watch outs</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>Never bank on public wifi.</li><li>VPN if must.</li><li>Cellular safer.</li><li>Senior avoid hotel wifi.</li><li>Coffee shops risky.</li><li>Home wifi ok.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Mobile deposit</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>Take check photo.</li><li>App deposits.</li><li>No bank trip.</li><li>Senior arthritis-friendly.</li><li>Free.</li><li>Save trip.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Send money</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>Zelle in bank app.</li><li>Family known recipients.</li><li>Don&apos;t Zelle strangers.</li><li>Senior caution scams.</li><li>Verify before send.</li><li>Confirm phone call.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Joint accounts</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>Adult kid view-only access.</li><li>Or POA.</li><li>Senior fraud catch.</li><li>Family monitors.</li><li>Don&apos;t give full access strangers.</li><li>Senior protection.</li></ul></CardContent></Card>
        <Card className="bg-muted/40"><CardContent className="pt-6"><h3 className="font-bold mb-2">Daily check + alerts = senior fraud catcher</h3><p className="text-sm text-muted-foreground">Senior daily 30-second bank app check + transaction alerts = catch fraud immediately. Strong password, 2FA authenticator, biometric. Mobile deposit replaces bank trip. Adult kid view-only access for backup. Most under-set-up senior banking safety.</p></CardContent></Card>
      </main>
      <Footer />
    </div>
  );
}

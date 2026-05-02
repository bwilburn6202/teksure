import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Shield } from 'lucide-react';

export default function SeniorPhoneSecuritySetup() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Senior Phone Security Setup | TekSure" description="One-time setup, lifetime senior protection." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Shield className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Senior Phone Security</h1>
          <p className="text-lg text-muted-foreground">One-time setup.</p>
        </div>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">6-digit passcode</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>Settings → Face ID + Passcode.</li><li>6 digits minimum.</li><li>Avoid 1234, birth year.</li><li>Senior strong passcode.</li><li>Free.</li><li>Critical.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Face ID/Touch ID</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>Set up biometric.</li><li>Senior easier than passcode.</li><li>More secure than passcode alone.</li><li>Add multiple fingers.</li><li>Free.</li><li>Worth setup.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Find My on</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>Settings → Apple ID → Find My.</li><li>All on.</li><li>Senior locate lost phone.</li><li>Activation Lock prevents thief use.</li><li>Free.</li><li>Critical.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Auto-update</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>Settings → General → Software Update.</li><li>Auto on.</li><li>Senior security patches automatic.</li><li>Critical for safety.</li><li>Free.</li><li>Don&apos;t skip.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Stolen Device Protection</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>iOS 17.3+.</li><li>Settings → Face ID + Passcode.</li><li>Even if thief knows passcode — Face ID required.</li><li>Senior critical.</li><li>Free.</li><li>Big anti-theft.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Lockdown Mode</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>For high-risk targets.</li><li>Most seniors skip.</li><li>Limits features.</li><li>Public figures use.</li><li>Free option.</li><li>Most don&apos;t need.</li></ul></CardContent></Card>
        <Card className="bg-muted/40"><CardContent className="pt-6"><h3 className="font-bold mb-2">30-min setup = senior lifetime security</h3><p className="text-sm text-muted-foreground">30-min senior phone security setup: 6-digit passcode + Face ID + Find My + auto-update + Stolen Device Protection. All free. Critical for fraud prevention. Adult kid helps. Most under-set-up senior phone security. Don&apos;t skip — fraud expensive.</p></CardContent></Card>
      </main>
      <Footer />
    </div>
  );
}

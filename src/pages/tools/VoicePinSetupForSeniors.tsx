import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Lock } from 'lucide-react';

export default function VoicePinSetupForSeniors() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Voice PIN Setup for Senior Bank Calls | TekSure" description="Voice authentication banks. Senior phone security." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Lock className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Voice PIN Banks</h1>
          <p className="text-lg text-muted-foreground">Senior phone banking.</p>
        </div>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Voice ID concerns</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>Banks use voice ID.</li><li>Senior verifying calls.</li><li>AI clones can fool.</li><li>Disable or skeptical.</li><li>Use multiple methods.</li><li>Don&apos;t rely solely.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Carrier PIN</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>Required for SIM swap.</li><li>Senior fraud protection.</li><li>Call carrier set up.</li><li>Free.</li><li>Critical.</li><li>Don&apos;t skip.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Bank security</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>2FA app authenticator.</li><li>Don&apos;t use voice for big transfers.</li><li>Senior call back known number.</li><li>Email verify.</li><li>Multiple layers.</li><li>Best practice.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Verify caller</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>Bank cold calls = scam.</li><li>Hang up.</li><li>Call back number on card.</li><li>Senior never trust caller.</li><li>Free protection.</li><li>Critical.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Family code</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>Pick word — &quot;blueberry.&quot;</li><li>Real family knows.</li><li>Scammer cloning fails.</li><li>Senior verifying.</li><li>Discuss together.</li><li>Free + life-saving.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Senior tips</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>Slow down on phone.</li><li>Don&apos;t pressured.</li><li>Always verify.</li><li>Senior cautious.</li><li>Trust your gut.</li><li>Hang up okay.</li></ul></CardContent></Card>
        <Card className="bg-muted/40"><CardContent className="pt-6"><h3 className="font-bold mb-2">Family safe word + carrier PIN = senior secure</h3><p className="text-sm text-muted-foreground">Family safe word + carrier PIN + bank 2FA app = senior secure. AI voice clones fool voice ID — don&apos;t rely solely. Always verify by hanging up + calling back known number. Bank cold calls = scam. Most senior phone security setup. Free.</p></CardContent></Card>
      </main>
      <Footer />
    </div>
  );
}

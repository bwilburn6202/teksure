import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Link } from 'lucide-react';

export default function AppleContinuityForSeniors() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Apple Continuity for Seniors | TekSure" description="iPhone, iPad, Mac work together. Apple Continuity senior guide." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Link className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Apple Continuity</h1>
          <p className="text-lg text-muted-foreground">Devices work together.</p>
        </div>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">What it does</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>Start on iPhone, finish on iPad.</li><li>Copy iPhone, paste Mac.</li><li>Phone calls on Mac.</li><li>Texts everywhere.</li><li>Same Apple ID needed.</li><li>Free.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Universal Clipboard</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>Copy text on iPhone.</li><li>Paste on Mac or iPad.</li><li>Just works.</li><li>Senior big win.</li><li>No emailing yourself.</li><li>Magic.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Phone calls on Mac</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>iPhone rings — answer Mac.</li><li>Loud Mac speaker.</li><li>Type while talking.</li><li>Senior ergonomic.</li><li>FaceTime there too.</li><li>Hands-free convenience.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Handoff</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>Email on iPhone.</li><li>Open Mac — banner appears.</li><li>Click — continue typing.</li><li>Web pages too.</li><li>Notes too.</li><li>Senior workflow.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">AirDrop</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>Send photo iPhone to Mac.</li><li>Done in 5 seconds.</li><li>No cable.</li><li>No email.</li><li>Mac printer too.</li><li>Senior magic.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Setup</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>Same Apple ID.</li><li>Bluetooth + WiFi on.</li><li>Same network.</li><li>Mostly automatic.</li><li>System Settings if not.</li><li>Senior auto-configure.</li></ul></CardContent></Card>
        <Card className="bg-muted/40"><CardContent className="pt-6"><h3 className="font-bold mb-2">Apple ecosystem rewards loyalty</h3><p className="text-sm text-muted-foreground">If senior uses iPhone + iPad or iPhone + Mac, Continuity transforms workflow. Universal Clipboard alone saves hours yearly. Phone calls on Mac with big speaker = hearing helper. Handoff smooth. AirDrop replaces email-yourself. Worth knowing.</p></CardContent></Card>
      </main>
      <Footer />
    </div>
  );
}

import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Monitor } from 'lucide-react';

export default function RemoteSupportForSeniors() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Remote Support for Senior Family | TekSure" description="Family helps senior remotely. TeamViewer + alternatives." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Monitor className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Remote Support</h1>
          <p className="text-lg text-muted-foreground">Family helps senior.</p>
        </div>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">TeamViewer</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>Free personal use.</li><li>Family shares senior screen.</li><li>Help with tech.</li><li>Senior + family.</li><li>Cross-platform.</li><li>Trusted decade.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">FaceTime SharePlay</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>iPhone family.</li><li>Share screen during call.</li><li>Senior watches family explain.</li><li>Free.</li><li>Built-in iOS 15+.</li><li>Best Apple option.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Google Meet share</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>Senior shares screen.</li><li>Family takes control mouse.</li><li>Cross-platform.</li><li>Free.</li><li>Senior consents control.</li><li>Worth knowing.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Senior consent critical</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>Never let stranger control.</li><li>Only trusted family.</li><li>Verify by call first.</li><li>Senior fraud common.</li><li>Don&apos;t click pop-ups.</li><li>Microsoft doesn&apos;t call.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Setup beforehand</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>Family installs in advance.</li><li>Senior crisis ready.</li><li>Test once together.</li><li>Free.</li><li>Set + forget.</li><li>Worth 10 min.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Apple Watch family</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>Family setup feature.</li><li>Adult kid manages senior watch.</li><li>Health data shared.</li><li>Senior bonus monitoring.</li><li>iOS 15+.</li><li>Free.</li></ul></CardContent></Card>
        <Card className="bg-muted/40"><CardContent className="pt-6"><h3 className="font-bold mb-2">FaceTime SharePlay = senior family help</h3><p className="text-sm text-muted-foreground">FaceTime SharePlay free for iPhone family — share senior screen during call, family explains how to use. Or TeamViewer free for cross-platform. NEVER let stranger control. Senior install + test once with family. Crisis-ready free help.</p></CardContent></Card>
      </main>
      <Footer />
    </div>
  );
}

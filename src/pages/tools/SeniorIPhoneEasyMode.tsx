import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Smartphone } from 'lucide-react';

export default function SeniorIPhoneEasyMode() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="iPhone Senior Mode — TekSure" description="Make iPhone simpler for seniors — Assistive Access mode and senior tips." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Smartphone className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">iPhone Senior Mode</h1>
          <p className="text-lg text-muted-foreground">A simpler iPhone. Built in.</p>
        </div>
        <div className="space-y-4">
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Assistive Access</h2><p>Settings → Accessibility → Assistive Access. Big buttons. Phone, FaceTime, Messages, Camera, Photos, Music.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Lock down apps</h2><p>Pick only the apps you want. Hide everything else.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Larger text</h2><p>Settings → Display → Text Size. Crank to maximum.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Simple home screen</h2><p>Long-press apps you don&apos;t use → Remove from Home Screen. Cleaner phone.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Triple-click button</h2><p>Settings → Accessibility → Triple-Click Side Button. Set to Magnifier or Zoom.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Free help</h2><p>Apple Genius Bar appointments are free. Up to 90 minutes of teaching.</p></CardContent></Card>
          <Card className="bg-muted/40"><CardContent className="pt-6"><p className="text-sm">Quick Tip: Ask a tech-savvy grandchild to set up Assistive Access. Done in 10 minutes.</p></CardContent></Card>
        </div>
      </main>
      <Footer />
    </div>
  );
}

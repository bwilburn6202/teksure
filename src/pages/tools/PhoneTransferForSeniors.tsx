import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Smartphone } from 'lucide-react';

export default function PhoneTransferForSeniors() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Phone Transfer for Seniors | TekSure" description="Move data to new phone. Senior step-by-step transfer." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Smartphone className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Phone Transfer</h1>
          <p className="text-lg text-muted-foreground">Move data to new phone.</p>
        </div>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Quick Start (iPhone)</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>New iPhone near old.</li><li>Animation prompts.</li><li>Hold over old.</li><li>Auto-transfers everything.</li><li>1-2 hours.</li><li>Senior magic.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Android transfer</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>Google account auto.</li><li>Photos, contacts sync.</li><li>App restoration.</li><li>Senior similar.</li><li>30-60 min.</li><li>Free.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">iPhone to Android</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>Switch app from Apple.</li><li>Photos to Google Photos.</li><li>Contacts via Google sync.</li><li>Senior switch possible.</li><li>1-2 hours.</li><li>Some apps re-buy.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Android to iPhone</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>Move to iOS app.</li><li>Photos, messages, contacts.</li><li>Senior welcome.</li><li>1-2 hours.</li><li>Apple Store helps.</li><li>Free.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Apple Store help</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>Free senior setup.</li><li>Genius Bar.</li><li>Walk in.</li><li>1-2 hours.</li><li>Take old phone.</li><li>Best for senior nervous.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Carrier help</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>Verizon, ATT, T-Mobile stores.</li><li>Free with phone purchase.</li><li>Senior in-person help.</li><li>Same day.</li><li>Take both phones.</li><li>Free.</li></ul></CardContent></Card>
        <Card className="bg-muted/40"><CardContent className="pt-6"><h3 className="font-bold mb-2">Apple Store free transfer = senior easy</h3><p className="text-sm text-muted-foreground">Senior new iPhone setup — Apple Store does it free. 1-2 hours, walk out with new phone identical to old. Or DIY Quick Start auto-transfers. Don&apos;t struggle alone. Free senior service. Same for carrier stores. Take advantage.</p></CardContent></Card>
      </main>
      <Footer />
    </div>
  );
}

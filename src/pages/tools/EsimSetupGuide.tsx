import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Smartphone, AlertTriangle, CheckCircle2 } from 'lucide-react';

export default function EsimSetupGuide() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="eSIM Setup Guide — What It Is and How to Switch | TekSure" description="No more tiny SIM cards — eSIM uses a digital code instead. Plain-English steps to set up or switch eSIM on iPhone and Android." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Smartphone className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">eSIM Setup Guide</h1>
          <p className="text-lg text-muted-foreground">What eSIM is, why it matters, and how to set yours up.</p>
        </div>

        <Card className="mb-6">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-2">What is eSIM?</h2>
            <p className="text-sm mb-3">A SIM card is the tiny chip that connects your phone to your carrier (Verizon, T-Mobile, AT&T). For decades it's been a small plastic card you slide into the phone.</p>
            <p className="text-sm mb-3"><strong>eSIM ("embedded SIM")</strong> replaces that little card with a digital version built into your phone. There's nothing to slide in — your carrier sends you a QR code or activation, and your phone is connected.</p>
            <p className="text-sm">All iPhones sold in the US since the iPhone 14 (2022) are eSIM-only — no physical SIM slot. Most newer Android phones support eSIM too.</p>
          </CardContent>
        </Card>

        <Card className="mb-6 bg-primary/5 border-primary/20">
          <CardContent className="pt-6">
            <h2 className="font-bold mb-2">Why eSIM is good for you</h2>
            <ul className="text-sm space-y-2 list-disc pl-5">
              <li>Switching carriers takes minutes, not a trip to the store.</li>
              <li>You can have two phone numbers on one phone (great for travel or a separate "junk" number).</li>
              <li>You can't lose a tiny card.</li>
              <li>Traveling abroad? Buy a local data plan online and activate it before you land.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-6">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">📱 Setting up eSIM on iPhone</h2>
            <p className="text-sm mb-3"><strong>If your phone is brand new from the carrier:</strong> It comes pre-activated. Just turn it on and follow the prompts.</p>
            <p className="text-sm mb-2"><strong>Switching from a different phone:</strong></p>
            <ol className="list-decimal pl-5 space-y-2 text-sm mb-4">
              <li>Settings → Cellular → Add eSIM.</li>
              <li>Tap "Transfer From Nearby iPhone" — both phones need iOS 16 or newer and to be near each other.</li>
              <li>Confirm on the old phone. Wait 1-5 minutes.</li>
              <li>If your carrier doesn't support transfer, tap "Use QR Code" and scan the one your carrier emailed.</li>
            </ol>
            <p className="text-sm"><strong>Carrier-provided QR codes:</strong> Verizon, AT&T, and T-Mobile all let you request one in their app, by phone, or in store.</p>
          </CardContent>
        </Card>

        <Card className="mb-6">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">🤖 Setting up eSIM on Android</h2>
            <ol className="list-decimal pl-5 space-y-2 text-sm">
              <li>Settings → Network & internet → SIMs (or "Mobile network" on some Samsungs).</li>
              <li>Tap "+" or "Add SIM".</li>
              <li>Choose "Download a SIM instead?" or "Add eSIM".</li>
              <li>Scan the QR code from your carrier — or enter the activation code they sent.</li>
              <li>Wait a minute or two for activation.</li>
            </ol>
            <p className="text-sm mt-3">If your carrier app has a "Set up eSIM" button, that's the easiest path — let the app guide you.</p>
          </CardContent>
        </Card>

        <Card className="mb-6 border-yellow-300 dark:border-yellow-800">
          <CardContent className="pt-6">
            <div className="flex gap-3">
              <AlertTriangle className="w-6 h-6 text-yellow-700 dark:text-yellow-400 shrink-0" />
              <div>
                <h3 className="font-bold mb-1">Things to know first</h3>
                <ul className="text-sm space-y-1 list-disc pl-5 text-muted-foreground">
                  <li>You need internet to activate (Wi-Fi works fine).</li>
                  <li>Save your carrier's QR code email — you may need it again if you reset the phone.</li>
                  <li>Not all phones support eSIM. If yours is older than 2020, check the carrier's website first.</li>
                  <li>Not every prepaid carrier supports eSIM — call customer service to confirm.</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-green-50 border-green-300 dark:bg-green-950/20 dark:border-green-800">
          <CardContent className="pt-6">
            <div className="flex gap-3">
              <CheckCircle2 className="w-6 h-6 text-green-700 dark:text-green-400 shrink-0" />
              <div>
                <h3 className="font-bold mb-1">If you get stuck</h3>
                <p className="text-sm text-muted-foreground">Call your carrier and say "I need help activating eSIM on my new phone." They do this hundreds of times a day. It usually takes 5-10 minutes.</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}

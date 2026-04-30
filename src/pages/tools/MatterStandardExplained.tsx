import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Network } from 'lucide-react';

export default function MatterStandardExplained() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Matter Standard Explained | TekSure" description="Matter unifies smart home brands. Plain-English guide for seniors confused by smart home apps." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Network className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Matter Standard</h1>
          <p className="text-lg text-muted-foreground">One app. Any brand. Finally.</p>
        </div>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">What is Matter?</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Universal smart home language.</li>
              <li>Apple, Google, Amazon, Samsung all support it.</li>
              <li>Buy any &quot;Matter&quot; device — works with any voice assistant.</li>
              <li>Replaces &quot;Works with Alexa,&quot; &quot;Works with Google Home,&quot; etc.</li>
              <li>Started 2023, mature in 2025-26.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Why seniors should care</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Stop switching between 5 apps.</li>
              <li>One app controls everything.</li>
              <li>Buying decisions easier — just look for &quot;Matter&quot; logo.</li>
              <li>Change voice assistant later — devices still work.</li>
              <li>Devices can use Apple HomeKit + Alexa simultaneously.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Matter-compatible hubs</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li><strong>Apple HomePod (any)</strong> — built-in.</li>
              <li><strong>Apple TV 4K</strong> — built-in.</li>
              <li><strong>Amazon Echo (4th gen+)</strong> — built-in.</li>
              <li><strong>Google Nest Hub (2nd gen)</strong> — built-in.</li>
              <li><strong>Samsung SmartThings Hub</strong> — built-in.</li>
              <li>Already have one? You&apos;re Matter-ready.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Recommended approach</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Use the voice assistant you already have.</li>
              <li>When buying NEW smart home devices — look for &quot;Matter&quot; logo.</li>
              <li>Skip the manufacturer app — use Apple Home / Google Home / Alexa app.</li>
              <li>Existing non-Matter devices still work via brand apps.</li>
              <li>Matter is BACKGROUND — no extra app to install.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Setting up a Matter device</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Open phone&apos;s home app (Apple Home, Google Home, etc.).</li>
              <li>Tap + → Add Device.</li>
              <li>Scan the Matter QR code on box.</li>
              <li>Done — usually 30 seconds.</li>
              <li>Way simpler than old &quot;create account, link account, etc.&quot;</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="bg-muted/40">
          <CardContent className="pt-6">
            <h3 className="font-bold mb-2">Look for Matter logo</h3>
            <p className="text-sm text-muted-foreground">Check box for Matter logo + supported assistants. Most new smart bulbs, plugs, locks, sensors are Matter as of 2025+. Don&apos;t replace working devices — just buy Matter when adding new ones. Smart home is finally simple.</p>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}

import { useState } from 'react';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Wifi, AlertTriangle } from 'lucide-react';

export default function PhoneHotspotHelper() {
  const [tab, setTab] = useState<'iphone' | 'android'>('iphone');

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Phone Hotspot Helper — Use Your Phone as Wi-Fi | TekSure" description="Need internet on your laptop or tablet when there's no Wi-Fi? Use your phone's Personal Hotspot. Plain steps for iPhone and Android." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Wifi className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Phone Hotspot Helper</h1>
          <p className="text-lg text-muted-foreground">Turn your phone into a Wi-Fi network for your laptop or tablet.</p>
        </div>

        <Card className="mb-6">
          <CardContent className="pt-6">
            <h2 className="font-bold mb-2">When you'd want this</h2>
            <ul className="text-sm space-y-1 list-disc pl-5 text-muted-foreground">
              <li>You're traveling and the hotel Wi-Fi is broken or unsafe.</li>
              <li>Your home internet is down and you need to send an important email.</li>
              <li>You want to use your laptop in the car or at a park.</li>
              <li>You're at a coffee shop but don't trust the public Wi-Fi.</li>
            </ul>
          </CardContent>
        </Card>

        <div className="flex gap-2 mb-4">
          <button onClick={() => setTab('iphone')} className={`flex-1 p-3 rounded-lg border-2 ${tab === 'iphone' ? 'border-primary bg-primary/10' : 'border-muted'}`}>📱 iPhone</button>
          <button onClick={() => setTab('android')} className={`flex-1 p-3 rounded-lg border-2 ${tab === 'android' ? 'border-primary bg-primary/10' : 'border-muted'}`}>🤖 Android</button>
        </div>

        {tab === 'iphone' && (
          <Card className="mb-4">
            <CardContent className="pt-6">
              <h3 className="font-bold text-lg mb-3">iPhone Personal Hotspot</h3>
              <ol className="list-decimal pl-5 space-y-2 text-sm">
                <li>Open <strong>Settings</strong>.</li>
                <li>Tap <strong>Personal Hotspot</strong> near the top.</li>
                <li>Turn on <strong>"Allow Others to Join"</strong>.</li>
                <li>Note the <strong>"Wi-Fi Password"</strong> shown — you'll need it.</li>
                <li>On your laptop or tablet, go to Wi-Fi settings.</li>
                <li>Pick the network with your iPhone's name (like "John's iPhone").</li>
                <li>Type the password from step 4. You're online.</li>
              </ol>
              <p className="text-sm mt-3 bg-muted/50 p-3 rounded"><strong>Don't see Personal Hotspot?</strong> Call your carrier. Most plans include it free, but a few prepaid plans don't.</p>
            </CardContent>
          </Card>
        )}

        {tab === 'android' && (
          <Card className="mb-4">
            <CardContent className="pt-6">
              <h3 className="font-bold text-lg mb-3">Android Hotspot</h3>
              <ol className="list-decimal pl-5 space-y-2 text-sm">
                <li>Open <strong>Settings</strong>.</li>
                <li>Tap <strong>Network & internet</strong> (or <strong>Connections</strong> on Samsung).</li>
                <li>Tap <strong>Hotspot & tethering</strong> → <strong>Wi-Fi hotspot</strong>.</li>
                <li>Turn the switch ON.</li>
                <li>Tap "Hotspot password" to see or change the password.</li>
                <li>On your laptop, pick the new Wi-Fi network and enter the password.</li>
              </ol>
              <p className="text-sm mt-3 bg-muted/50 p-3 rounded"><strong>Samsung shortcut:</strong> Swipe down from the top of the screen twice. Look for the "Mobile Hotspot" tile and tap it.</p>
            </CardContent>
          </Card>
        )}

        <Card className="mb-4 border-yellow-300 dark:border-yellow-800">
          <CardContent className="pt-6">
            <div className="flex gap-3">
              <AlertTriangle className="w-6 h-6 text-yellow-700 dark:text-yellow-400 shrink-0" />
              <div>
                <h3 className="font-bold mb-1">Watch your data</h3>
                <ul className="text-sm space-y-1 list-disc pl-5 text-muted-foreground">
                  <li>Hotspot uses your phone's cellular data.</li>
                  <li>Streaming video burns data fast — a one-hour Netflix show can be 1-3 GB.</li>
                  <li>Most plans slow down after a "hotspot data limit" (often 15-30 GB/month).</li>
                  <li>Check your plan in the carrier's app before a long trip.</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-muted/40">
          <CardContent className="pt-6">
            <h3 className="font-bold mb-2">Battery tip</h3>
            <p className="text-sm text-muted-foreground">Hotspot drains the phone fast. Plug your phone into a charger (or a battery pack) while using it. Turn the hotspot off when you're done.</p>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}

import { useState } from 'react';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Map } from 'lucide-react';

export default function OfflineMapsHowTo() {
  const [tab, setTab] = useState<'google' | 'apple'>('google');

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Offline Maps — Save Maps for No-Signal Areas | TekSure" description="Download Google Maps or Apple Maps to your phone for offline use. Plain-English steps for road trips and overseas travel." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Map className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Download Offline Maps</h1>
          <p className="text-lg text-muted-foreground">Navigate with no signal. No data charges.</p>
        </div>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Why you want this</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Driving through mountains, deserts, rural areas — signal cuts out.</li>
              <li>Traveling overseas — avoid huge data roaming charges.</li>
              <li>Backup if cell network is down.</li>
              <li>Phone battery lasts longer (no constant data lookup).</li>
            </ul>
          </CardContent>
        </Card>

        <div className="grid grid-cols-2 gap-2 mb-4">
          <button onClick={() => setTab('google')} className={`p-3 rounded-lg border-2 ${tab === 'google' ? 'border-primary bg-primary/10' : 'border-muted'}`}>Google Maps</button>
          <button onClick={() => setTab('apple')} className={`p-3 rounded-lg border-2 ${tab === 'apple' ? 'border-primary bg-primary/10' : 'border-muted'}`}>Apple Maps</button>
        </div>

        {tab === 'google' && (
          <Card className="mb-4">
            <CardContent className="pt-6">
              <h3 className="font-bold text-lg mb-3">Google Maps (iPhone &amp; Android)</h3>
              <ol className="list-decimal pl-5 space-y-2 text-sm">
                <li>Open Google Maps.</li>
                <li>Search the area you want (city or region).</li>
                <li>Tap the place name at the bottom.</li>
                <li>Tap "Download" (icon looks like a downward arrow).</li>
                <li>Adjust the box to cover the area you want. Tap "Download".</li>
                <li>Map saves to phone. Works for 1 year (auto-refreshes when on wifi).</li>
              </ol>
              <p className="text-sm mt-3 text-muted-foreground">Typical map ~150-500MB. Use wifi to download.</p>
            </CardContent>
          </Card>
        )}

        {tab === 'apple' && (
          <Card className="mb-4">
            <CardContent className="pt-6">
              <h3 className="font-bold text-lg mb-3">Apple Maps (iPhone iOS 17+)</h3>
              <ol className="list-decimal pl-5 space-y-2 text-sm">
                <li>Open Maps.</li>
                <li>Tap your account icon (top right).</li>
                <li>Tap "Offline Maps".</li>
                <li>Tap "Download New Map".</li>
                <li>Search city or region. Adjust the box.</li>
                <li>Tap "Download".</li>
                <li>Maps available even in airplane mode.</li>
              </ol>
            </CardContent>
          </Card>
        )}

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Tips for road trips</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Download EVERY state you&apos;ll cross. Better safe than stuck.</li>
              <li>Download a wider area than you think — accidents reroute you.</li>
              <li>Do it at home on wifi the night before.</li>
              <li>Maps still need GPS (free, works without signal). All phones have GPS.</li>
              <li>Turn-by-turn navigation works offline. Live traffic does NOT.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="bg-muted/40">
          <CardContent className="pt-6">
            <h3 className="font-bold mb-2">Best for international travel</h3>
            <p className="text-sm text-muted-foreground">Download maps of your destination cities BEFORE leaving. Walking around Rome or Tokyo with no data plan? Apple/Google Maps still works — even shows your blue dot moving in real time. Saves hundreds in roaming.</p>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}

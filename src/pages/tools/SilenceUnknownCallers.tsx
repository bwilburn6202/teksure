import { useState } from 'react';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { BellOff } from 'lucide-react';

export default function SilenceUnknownCallers() {
  const [tab, setTab] = useState<'iphone' | 'android'>('iphone');

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Silence Unknown Callers | TekSure" description="Stop spam calls cold. Plain-English steps to silence unknown callers on iPhone and Android. Real callers leave a message." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <BellOff className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Silence Unknown Callers</h1>
          <p className="text-lg text-muted-foreground">The single best phone setting for seniors.</p>
        </div>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">What it does</h2>
            <p className="text-sm">Phone rings ONLY for numbers in your contacts. Unknown callers go straight to voicemail. Real people (doctors, family, businesses you&apos;ve called) leave a message. Robocallers don&apos;t.</p>
          </CardContent>
        </Card>

        <div className="grid grid-cols-2 gap-2 mb-4">
          <button onClick={() => setTab('iphone')} className={`p-3 rounded-lg border-2 ${tab === 'iphone' ? 'border-primary bg-primary/10' : 'border-muted'}`}>iPhone</button>
          <button onClick={() => setTab('android')} className={`p-3 rounded-lg border-2 ${tab === 'android' ? 'border-primary bg-primary/10' : 'border-muted'}`}>Android</button>
        </div>

        {tab === 'iphone' && (
          <Card className="mb-4">
            <CardContent className="pt-6">
              <h3 className="font-bold text-lg mb-3">iPhone</h3>
              <ol className="list-decimal pl-5 space-y-2 text-sm">
                <li>Settings.</li>
                <li>Apps → Phone (or just "Phone" on older iOS).</li>
                <li>Scroll down to "Silence Unknown Callers".</li>
                <li>Toggle ON.</li>
                <li>That&apos;s it. Done.</li>
              </ol>
              <p className="text-sm mt-3">Bonus: turn on "Live Voicemail" — iPhone shows you the voicemail being left in real time. You can pick up if it&apos;s real.</p>
            </CardContent>
          </Card>
        )}

        {tab === 'android' && (
          <Card className="mb-4">
            <CardContent className="pt-6">
              <h3 className="font-bold text-lg mb-3">Android (Pixel/Samsung Phone app)</h3>
              <ol className="list-decimal pl-5 space-y-2 text-sm">
                <li>Open Phone app.</li>
                <li>Tap three-dot menu (top right).</li>
                <li>Settings → "Caller ID &amp; spam".</li>
                <li>Turn ON "Filter spam calls".</li>
                <li>Also turn ON "See caller and spam ID".</li>
              </ol>
              <p className="text-sm mt-3">For Pixel — turn on "Call Screen". Google AI answers unknown calls and screens them.</p>
            </CardContent>
          </Card>
        )}

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Add important numbers to contacts</h2>
            <p className="text-sm">Once silencing is on, anyone NOT in contacts goes to voicemail. Add:</p>
            <ul className="list-disc pl-5 space-y-1 text-sm mt-2">
              <li>Doctor&apos;s office.</li>
              <li>Pharmacy.</li>
              <li>Bank.</li>
              <li>Family on both sides.</li>
              <li>Plumber, handyman, lawn service.</li>
              <li>Insurance.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Add the National Do Not Call list</h2>
            <p className="text-sm">Free. Stops most legitimate telemarketers. Doesn&apos;t stop scammers, but layers help.</p>
            <ol className="list-decimal pl-5 space-y-1 text-sm mt-2">
              <li>Call <strong>1-888-382-1222</strong> from the phone you want to register.</li>
              <li>Or visit <strong>donotcall.gov</strong>.</li>
              <li>Takes 30 days. Permanent.</li>
            </ol>
          </CardContent>
        </Card>

        <Card className="bg-muted/40">
          <CardContent className="pt-6">
            <h3 className="font-bold mb-2">Phone bliss</h3>
            <p className="text-sm text-muted-foreground">Most people who turn this on say it&apos;s the best phone setting they ever changed. Phone goes from ringing 10 times a day to 2-3. Stress level drops. You only hear the people you actually want to hear from.</p>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}

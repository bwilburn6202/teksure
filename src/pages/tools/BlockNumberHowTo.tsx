import { useState } from 'react';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { PhoneOff } from 'lucide-react';

export default function BlockNumberHowTo() {
  const [tab, setTab] = useState<'iphone' | 'android'>('iphone');

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="How to Block a Phone Number | TekSure" description="Block scam calls and texts on iPhone and Android. Plain-English steps in under 30 seconds." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <PhoneOff className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Block a Phone Number</h1>
          <p className="text-lg text-muted-foreground">30 seconds. Done forever.</p>
        </div>

        <div className="grid grid-cols-2 gap-2 mb-4">
          <button onClick={() => setTab('iphone')} className={`p-3 rounded-lg border-2 ${tab === 'iphone' ? 'border-primary bg-primary/10' : 'border-muted'}`}>iPhone</button>
          <button onClick={() => setTab('android')} className={`p-3 rounded-lg border-2 ${tab === 'android' ? 'border-primary bg-primary/10' : 'border-muted'}`}>Android</button>
        </div>

        {tab === 'iphone' && (
          <Card className="mb-4">
            <CardContent className="pt-6">
              <h3 className="font-bold text-lg mb-3">iPhone — block from a call</h3>
              <ol className="list-decimal pl-5 space-y-2 text-sm mb-4">
                <li>Open Phone app → Recents.</li>
                <li>Tap the (i) info circle next to the number.</li>
                <li>Scroll down. Tap "Block this Caller".</li>
                <li>Confirm. Done.</li>
              </ol>
              <h3 className="font-bold text-lg mb-3">iPhone — block from a text</h3>
              <ol className="list-decimal pl-5 space-y-2 text-sm">
                <li>Open the text. Tap the contact name/number at top.</li>
                <li>Tap the (i) info button.</li>
                <li>Tap "Block Caller". Confirm.</li>
              </ol>
            </CardContent>
          </Card>
        )}

        {tab === 'android' && (
          <Card className="mb-4">
            <CardContent className="pt-6">
              <h3 className="font-bold text-lg mb-3">Android — block from a call</h3>
              <ol className="list-decimal pl-5 space-y-2 text-sm mb-4">
                <li>Open Phone app → Recents.</li>
                <li>Tap and hold the number.</li>
                <li>Tap "Block / report spam".</li>
                <li>Confirm.</li>
              </ol>
              <h3 className="font-bold text-lg mb-3">Android — block from a text</h3>
              <ol className="list-decimal pl-5 space-y-2 text-sm">
                <li>Open Messages app. Open the conversation.</li>
                <li>Tap three-dot menu (top right).</li>
                <li>Tap "Block / report spam".</li>
                <li>Confirm.</li>
              </ol>
            </CardContent>
          </Card>
        )}

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Block all unknown callers</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li><strong>iPhone</strong> — Settings → Phone → "Silence Unknown Callers" ON.</li>
              <li><strong>Android</strong> — Phone app → three dots → Settings → "Caller ID &amp; spam" → "Filter spam calls" ON.</li>
              <li>Unknown calls go straight to voicemail. Real callers leave a message.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Carrier-level blocking (free)</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li><strong>Verizon</strong> — Call Filter app (free).</li>
              <li><strong>AT&amp;T</strong> — ActiveArmor app (free).</li>
              <li><strong>T-Mobile</strong> — Scam Shield app (free).</li>
              <li>These auto-flag known scam numbers BEFORE your phone even rings.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="bg-muted/40">
          <CardContent className="pt-6">
            <h3 className="font-bold mb-2">Don&apos;t answer "yes"</h3>
            <p className="text-sm text-muted-foreground">Scammers record you saying "yes" and use it to authorize charges. Best practice: don&apos;t say "yes" to a stranger asking "Can you hear me?". Just say "Who&apos;s calling?" or hang up.</p>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}

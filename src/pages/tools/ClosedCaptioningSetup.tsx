import { useState } from 'react';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Captions } from 'lucide-react';

export default function ClosedCaptioningSetup() {
  const [tab, setTab] = useState<'tv' | 'phone' | 'streaming'>('tv');

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Closed Captioning Setup | TekSure" description="Turn on captions on TV, iPhone, Android, Netflix. Plain-English steps for hearing-friendly viewing." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Captions className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Closed Captioning Setup</h1>
          <p className="text-lg text-muted-foreground">Catch every word.</p>
        </div>

        <div className="grid grid-cols-3 gap-2 mb-4">
          <button onClick={() => setTab('tv')} className={`p-3 rounded-lg border-2 ${tab === 'tv' ? 'border-primary bg-primary/10' : 'border-muted'}`}>TV</button>
          <button onClick={() => setTab('phone')} className={`p-3 rounded-lg border-2 ${tab === 'phone' ? 'border-primary bg-primary/10' : 'border-muted'}`}>Phone</button>
          <button onClick={() => setTab('streaming')} className={`p-3 rounded-lg border-2 ${tab === 'streaming' ? 'border-primary bg-primary/10' : 'border-muted'}`}>Streaming</button>
        </div>

        {tab === 'tv' && (
          <Card className="mb-4">
            <CardContent className="pt-6">
              <h3 className="font-bold text-lg mb-3">TV captions (cable / antenna)</h3>
              <ul className="list-disc pl-5 space-y-2 text-sm">
                <li>Look for "CC" button on remote, or Menu → Captions.</li>
                <li>Many remotes have "Subtitles" or "Audio" button.</li>
                <li>Make text BIGGER — Settings → Accessibility → Caption Size.</li>
                <li>Change color or background for contrast.</li>
                <li>Required by law on all US programming since 2014.</li>
              </ul>
            </CardContent>
          </Card>
        )}

        {tab === 'phone' && (
          <Card className="mb-4">
            <CardContent className="pt-6">
              <h3 className="font-bold text-lg mb-3">iPhone Live Captions</h3>
              <ul className="list-disc pl-5 space-y-2 text-sm">
                <li>Settings → Accessibility → Live Captions → ON.</li>
                <li>Auto-captions ANY audio — phone calls, FaceTime, YouTube, in-person conversations.</li>
                <li>Free. Built into iOS 16+.</li>
                <li>Floating overlay, drag where you want it.</li>
              </ul>
              <h3 className="font-bold text-lg mb-3 mt-4">Android Live Caption</h3>
              <ul className="list-disc pl-5 space-y-2 text-sm">
                <li>Press volume button → tap CC icon.</li>
                <li>Auto-captions any audio. Pixel + Samsung built-in.</li>
              </ul>
            </CardContent>
          </Card>
        )}

        {tab === 'streaming' && (
          <Card className="mb-4">
            <CardContent className="pt-6">
              <h3 className="font-bold text-lg mb-3">Streaming services</h3>
              <ul className="list-disc pl-5 space-y-2 text-sm">
                <li><strong>Netflix</strong> — during show, tap screen → "Audio &amp; Subtitles" → English.</li>
                <li><strong>Hulu</strong> — same. Tap screen → CC icon.</li>
                <li><strong>YouTube</strong> — tap CC icon at bottom right.</li>
                <li><strong>Apple TV+</strong> — swipe down on remote → tap CC.</li>
                <li><strong>Amazon Prime</strong> — top-right CC during show.</li>
                <li>All let you change font size + color in Settings → Accessibility.</li>
              </ul>
            </CardContent>
          </Card>
        )}

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Best caption settings</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Font size — at least Large.</li>
              <li>White text on solid black background = easiest read.</li>
              <li>Stand-out edge / shadow makes text pop.</li>
              <li>Sans-serif font (Helvetica/Arial style) easier than serif.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="bg-muted/40">
          <CardContent className="pt-6">
            <h3 className="font-bold mb-2">Phone calls with captions</h3>
            <p className="text-sm text-muted-foreground">Hard of hearing? <strong>CapTel</strong> + <strong>InnoCaption</strong> + <strong>Hamilton CapTel</strong> — FREE phone services that caption every call. Federal program (FCC). Verify hearing loss with audiologist letter. Phones provided free.</p>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}

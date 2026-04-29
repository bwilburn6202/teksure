import { useState } from 'react';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Camera } from 'lucide-react';

export default function ScreenshotHowTo() {
  const [tab, setTab] = useState<'iphone' | 'android' | 'mac' | 'windows'>('iphone');

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="How to Take a Screenshot | TekSure" description="Take a screenshot on iPhone, Android, Mac, or Windows. Plain-English steps for every device." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Camera className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Take a Screenshot</h1>
          <p className="text-lg text-muted-foreground">Capture what&apos;s on your screen.</p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 mb-4">
          {[['iphone', '📱 iPhone'], ['android', '🤖 Android'], ['mac', '🍎 Mac'], ['windows', '🪟 Windows']].map(([id, label]) => (
            <button key={id} onClick={() => setTab(id as any)} className={`p-3 rounded-lg border-2 ${tab === id ? 'border-primary bg-primary/10' : 'border-muted'}`}>{label}</button>
          ))}
        </div>

        {tab === 'iphone' && (
          <Card className="mb-4">
            <CardContent className="pt-6">
              <h3 className="font-bold text-lg mb-3">iPhone</h3>
              <ul className="list-disc pl-5 space-y-2 text-sm">
                <li><strong>Face ID iPhones</strong> (no home button) — press Side button + Volume Up at the same time. Quick press, release.</li>
                <li><strong>Home button iPhones</strong> — press Home button + Side/top button at the same time.</li>
                <li>You&apos;ll hear shutter sound. Thumbnail appears bottom-left.</li>
                <li>Tap thumbnail to mark up. Or wait — auto-saves to Photos.</li>
                <li>Find later in Photos → Albums → Screenshots.</li>
              </ul>
            </CardContent>
          </Card>
        )}

        {tab === 'android' && (
          <Card className="mb-4">
            <CardContent className="pt-6">
              <h3 className="font-bold text-lg mb-3">Android</h3>
              <ul className="list-disc pl-5 space-y-2 text-sm">
                <li>Press Power + Volume Down at the same time.</li>
                <li>Or swipe down with three fingers (some Samsungs and Pixels).</li>
                <li>Or press and hold Power → tap "Screenshot" on menu.</li>
                <li>Saves to Photos app → Library → Screenshots.</li>
              </ul>
            </CardContent>
          </Card>
        )}

        {tab === 'mac' && (
          <Card className="mb-4">
            <CardContent className="pt-6">
              <h3 className="font-bold text-lg mb-3">Mac</h3>
              <ul className="list-disc pl-5 space-y-2 text-sm">
                <li><strong>Whole screen</strong> — <kbd className="bg-muted px-1.5 py-0.5 rounded">⌘</kbd> + <kbd className="bg-muted px-1.5 py-0.5 rounded">Shift</kbd> + <kbd className="bg-muted px-1.5 py-0.5 rounded">3</kbd></li>
                <li><strong>Just part of screen</strong> — <kbd className="bg-muted px-1.5 py-0.5 rounded">⌘</kbd> + <kbd className="bg-muted px-1.5 py-0.5 rounded">Shift</kbd> + <kbd className="bg-muted px-1.5 py-0.5 rounded">4</kbd>. Drag a box.</li>
                <li><strong>Just one window</strong> — <kbd className="bg-muted px-1.5 py-0.5 rounded">⌘</kbd> + <kbd className="bg-muted px-1.5 py-0.5 rounded">Shift</kbd> + <kbd className="bg-muted px-1.5 py-0.5 rounded">4</kbd>, then press Spacebar. Click the window.</li>
                <li>Saves to Desktop by default.</li>
              </ul>
            </CardContent>
          </Card>
        )}

        {tab === 'windows' && (
          <Card className="mb-4">
            <CardContent className="pt-6">
              <h3 className="font-bold text-lg mb-3">Windows 10/11</h3>
              <ul className="list-disc pl-5 space-y-2 text-sm">
                <li><strong>Whole screen</strong> — Press <kbd className="bg-muted px-1.5 py-0.5 rounded">PrtSc</kbd> (or "Print Screen"). Copies to clipboard. Paste into email or Word.</li>
                <li><strong>Whole screen, save as file</strong> — <kbd className="bg-muted px-1.5 py-0.5 rounded">Win</kbd> + <kbd className="bg-muted px-1.5 py-0.5 rounded">PrtSc</kbd>. Saves to Pictures → Screenshots.</li>
                <li><strong>Snipping tool</strong> — <kbd className="bg-muted px-1.5 py-0.5 rounded">Win</kbd> + <kbd className="bg-muted px-1.5 py-0.5 rounded">Shift</kbd> + <kbd className="bg-muted px-1.5 py-0.5 rounded">S</kbd>. Drag a box. Mark up. Save.</li>
              </ul>
            </CardContent>
          </Card>
        )}

        <Card className="bg-muted/40">
          <CardContent className="pt-6">
            <h3 className="font-bold mb-2">Why screenshots help</h3>
            <p className="text-sm text-muted-foreground">When something goes wrong on screen, take a screenshot. Send to family or tech support. They can see exactly what you see — way easier than describing it. Saves hours of "what does it say now?" back-and-forth.</p>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}

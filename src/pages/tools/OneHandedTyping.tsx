import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Hand } from 'lucide-react';

export default function OneHandedTyping() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="One-Handed Typing &amp; Phone Tips | TekSure" description="Stroke recovery, arthritis, broken arm. Plain-English tips for one-handed phone use, voice typing, and shrunken keyboards." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Hand className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">One-Handed Phone Tips</h1>
          <p className="text-lg text-muted-foreground">After a stroke, broken arm, or with arthritis.</p>
        </div>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">iPhone — One-Handed Keyboard</h2>
            <ol className="list-decimal pl-5 space-y-2 text-sm">
              <li>Open any keyboard.</li>
              <li>Press and hold the globe icon 🌐 (bottom-left).</li>
              <li>Pick "Right" or "Left" handed keyboard.</li>
              <li>Keys shrink + shift to one side. Easier with thumb.</li>
              <li>Switch back: hold globe → tap centered icon.</li>
            </ol>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">iPhone — Reachability</h2>
            <p className="text-sm">Brings the top of the screen down to your thumb&apos;s reach:</p>
            <ul className="list-disc pl-5 space-y-1 text-sm mt-2">
              <li>Settings → Accessibility → Touch → "Reachability" ON.</li>
              <li>Swipe DOWN on the bottom edge of screen.</li>
              <li>Top half of screen drops to thumb level.</li>
              <li>Swipe up or wait — restores normal.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Voice typing (saves your hand)</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Tap microphone icon on keyboard. Speak. Phone types.</li>
              <li><strong>iPhone</strong> — built into keyboard. Says "comma", "period", "new paragraph" for punctuation.</li>
              <li><strong>Android</strong> — Gboard mic icon. Same idea.</li>
              <li><strong>For long writing</strong> — open Notes/Word, tap mic, dictate full paragraphs.</li>
              <li>iOS 17+ improved punctuation auto-detection — fewer command words needed.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Bigger touch targets</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li><strong>iPhone</strong> — Settings → Accessibility → Display &amp; Text Size → "Larger Text". Also "Bold Text".</li>
              <li><strong>iPhone Display Zoom</strong> — Settings → Display &amp; Brightness → Display Zoom → "Larger Text".</li>
              <li><strong>Android</strong> — Settings → Display → Font Size + Display Size sliders.</li>
              <li><strong>App icon size</strong> — also under display settings.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Useful accessories</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li><strong>PopSocket</strong> ($15) — grip on back of phone. One-handed grip much steadier.</li>
              <li><strong>Phone tripod</strong> ($20) — for reading recipes/articles hands-free.</li>
              <li><strong>Stylus</strong> ($10-30) — easier to tap than fingertip if grip is weak.</li>
              <li><strong>Bluetooth keyboard</strong> ($30) — type on table with one hand if needed.</li>
              <li><strong>Wireless earbuds</strong> — voice commands without holding phone.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Voice control everything</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li><strong>Siri / Google Assistant / Alexa</strong> — calls, messages, reminders without touching phone.</li>
              <li><strong>iPhone Voice Control</strong> (Settings → Accessibility) — control entire phone by voice.</li>
              <li><strong>Android Voice Access</strong> — same on Android.</li>
              <li><strong>"Hey Siri"</strong> hands-free.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="bg-muted/40">
          <CardContent className="pt-6">
            <h3 className="font-bold mb-2">Free occupational therapy</h3>
            <p className="text-sm text-muted-foreground">Medicare covers occupational therapy for hand recovery. OTs are experts in adaptive tech — they&apos;ll show you tricks specific to your situation. Ask doctor for referral. Many strokes/injuries qualify automatically.</p>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}

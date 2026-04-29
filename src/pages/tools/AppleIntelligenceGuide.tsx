import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Wand2 } from 'lucide-react';

export default function AppleIntelligenceGuide() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Apple Intelligence Guide | TekSure" description="What Apple Intelligence does, what iPhones support it, and the features that actually help seniors. Plain English." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Wand2 className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Apple Intelligence Guide</h1>
          <p className="text-lg text-muted-foreground">AI baked into iPhone, iPad, and Mac.</p>
        </div>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">What it is</h2>
            <p className="text-sm">Apple&apos;s AI features built into iPhone 15 Pro and newer, iPads with M1 chip+, and Macs with Apple Silicon. Free. Built in. Most processing happens ON your phone (private).</p>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">What works on which device</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li><strong>iPhone 15 Pro / Pro Max</strong> ✅</li>
              <li><strong>iPhone 16 / 16 Plus / 16 Pro / 16 Pro Max</strong> ✅</li>
              <li><strong>iPhone 14 and older</strong> ❌ (not enough chip power)</li>
              <li><strong>iPad with M1+ chip</strong> ✅</li>
              <li><strong>Mac with M1+ chip</strong> ✅</li>
              <li>Free with iOS 18.1+, iPadOS 18.1+, macOS 15+.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Senior-friendly features</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li><strong>Cleaner</strong> — remove tourists from your photos. Tap → select → done.</li>
              <li><strong>Email summary</strong> — top of long emails get a 1-line summary.</li>
              <li><strong>Notification summary</strong> — bundles 10 messages into one short blurb.</li>
              <li><strong>Writing tools</strong> — highlight any text, tap "Proofread" or "Rewrite friendly". Fixes grammar.</li>
              <li><strong>Smart Siri</strong> — better at understanding "umm" and "actually I meant..."</li>
              <li><strong>ChatGPT in Siri</strong> — ask Siri something, she taps ChatGPT for tough questions (with permission).</li>
              <li><strong>Image Playground</strong> — describe an image, AI draws it. Fun for cards/birthdays.</li>
              <li><strong>Genmoji</strong> — describe a custom emoji, get a unique one.</li>
              <li><strong>Recording with summary</strong> — record a phone call, get transcript and summary.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">How to turn it on</h2>
            <ol className="list-decimal pl-5 space-y-2 text-sm">
              <li>Settings → Apple Intelligence &amp; Siri.</li>
              <li>Toggle "Apple Intelligence" ON.</li>
              <li>iPhone downloads ~5GB of AI models (over wifi).</li>
              <li>Wait 30 minutes. Features start appearing.</li>
              <li>Optional: connect ChatGPT under "Extensions".</li>
            </ol>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Privacy notes</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Most processing on YOUR device — never uploaded.</li>
              <li>Bigger requests use Apple&apos;s "Private Cloud Compute" — encrypted, deleted after.</li>
              <li>ChatGPT integration is opt-in. Asks before each use.</li>
              <li>Apple says no training on your data. (Google and Meta sometimes do.)</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="bg-muted/40">
          <CardContent className="pt-6">
            <h3 className="font-bold mb-2">Best one to try first</h3>
            <p className="text-sm text-muted-foreground">"Clean Up" in Photos. Open any photo, tap Edit → Clean Up. Tap any unwanted person, sign, or trash can. AI removes it. Magic. Once you do it once, you&apos;ll go through old photos cleaning them up.</p>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}

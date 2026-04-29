import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Watch } from 'lucide-react';

export default function AppleWatchTextingTips() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Apple Watch Texting Tips for Seniors | TekSure" description="Reply to texts from wrist. Plain-English step-by-step for senior-friendly Apple Watch messaging." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Watch className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Apple Watch Texting</h1>
          <p className="text-lg text-muted-foreground">Reply from your wrist.</p>
        </div>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">5 ways to reply</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li><strong>Voice dictation</strong> — speak, watch transcribes.</li>
              <li><strong>Audio message</strong> — watch records voice, sends as audio.</li>
              <li><strong>Smart Reply suggestions</strong> — tap pre-built short replies.</li>
              <li><strong>Emoji</strong> — tap face icon, scroll, send.</li>
              <li><strong>Scribble</strong> — write letters with finger on screen (slow).</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Smart Reply setup</h2>
            <ol className="list-decimal pl-5 space-y-2 text-sm">
              <li>iPhone Watch app → My Watch → Messages → Default Replies.</li>
              <li>Edit list — add common responses you actually use.</li>
              <li>Examples: "OK", "On my way", "Call me", "Love you", "Running late", "Yes, please", "No, thanks".</li>
              <li>Watch shows these when you reply.</li>
              <li>One tap = sent.</li>
            </ol>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Voice dictation</h2>
            <ol className="list-decimal pl-5 space-y-2 text-sm">
              <li>Tap message → Reply → microphone.</li>
              <li>Speak full message.</li>
              <li>Tap done.</li>
              <li>Tap "Send as text" or "Send as audio".</li>
              <li>Audio = recipient hears your voice.</li>
              <li>Text = transcribed words.</li>
            </ol>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Senior tips</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Audio messages = best for shaky fingers.</li>
              <li>Reply WHILE walking, gardening, cooking — phone stays in pocket.</li>
              <li>"Hey Siri, send text to ___" — completely hands-free.</li>
              <li>Larger watch = easier to read messages.</li>
              <li>Apple Watch SE 44mm = best size for seniors.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="bg-muted/40">
          <CardContent className="pt-6">
            <h3 className="font-bold mb-2">Charging routine</h3>
            <p className="text-sm text-muted-foreground">Charge while showering daily — establishes routine. Or while sleeping (if not using sleep tracking). 30 min charges to 80%. Never run out if charging routine consistent.</p>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}

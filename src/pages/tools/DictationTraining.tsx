import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Mic } from 'lucide-react';

export default function DictationTraining() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Voice Dictation Training | TekSure" description="Stop typing — talk to write. Plain-English guide to using voice dictation on iPhone, Android, Mac, Windows for emails and notes." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Mic className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Voice Dictation Training</h1>
          <p className="text-lg text-muted-foreground">Talk to your devices instead of typing.</p>
        </div>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Why dictation</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>3-5x faster than typing for most people.</li>
              <li>Saves arthritic fingers.</li>
              <li>Better emails (you sound more natural).</li>
              <li>Works while cooking, walking, driving.</li>
              <li>Free, built into every modern phone, computer.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">iPhone / iPad</h2>
            <ol className="list-decimal pl-5 space-y-2 text-sm">
              <li>Open any app with text (Messages, Mail, Notes, Safari).</li>
              <li>Tap microphone icon at bottom-right of keyboard.</li>
              <li>Speak. Words appear instantly.</li>
              <li>Tap mic again to stop.</li>
              <li>Punctuation: most automatic since iOS 16.</li>
              <li>If needed: say "comma", "period", "new line", "new paragraph", "question mark".</li>
            </ol>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Android (Gboard)</h2>
            <ol className="list-decimal pl-5 space-y-2 text-sm">
              <li>Tap microphone on keyboard.</li>
              <li>Or hold spacebar.</li>
              <li>Speak. Pixel/Samsung have AI for natural punctuation.</li>
              <li>"Alpha" / "Bravo" works for spelling out letters.</li>
            </ol>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Mac</h2>
            <ol className="list-decimal pl-5 space-y-2 text-sm">
              <li>System Settings → Keyboard → Dictation ON.</li>
              <li>Press F5 (or whatever shortcut) to start dictating in any app.</li>
              <li>Or open Notes/Pages, click microphone icon.</li>
              <li>Continuous dictation — talks for as long as you want.</li>
            </ol>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Windows</h2>
            <ol className="list-decimal pl-5 space-y-2 text-sm">
              <li>In any text field, press <kbd className="bg-muted px-1.5 py-0.5 rounded">Win</kbd> + <kbd className="bg-muted px-1.5 py-0.5 rounded">H</kbd>.</li>
              <li>Voice typing toolbar appears.</li>
              <li>Speak. Words appear.</li>
              <li>Auto-punctuation in Windows 11.</li>
            </ol>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Tips for accuracy</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Speak clearly, normal speed. NOT slowly — that confuses AI.</li>
              <li>Use a quiet room first time.</li>
              <li>Get headphones with mic — much better quality than built-in.</li>
              <li>Read first paragraph back, fix errors. Speed comes with practice.</li>
              <li>"Stop dictation" or tap mic to end.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="bg-muted/40">
          <CardContent className="pt-6">
            <h3 className="font-bold mb-2">Practice with low-stakes tasks</h3>
            <p className="text-sm text-muted-foreground">First week — dictate your shopping lists, reminders, short text messages. By week 2, try short emails. By month 2, you&apos;ll dictate longer messages without thinking. Most people never go back to thumb typing for anything more than 3 sentences.</p>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}

import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Keyboard } from 'lucide-react';

export default function VoiceTypingPhoneTutorial() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Voice Typing on Phone Tutorial for Seniors | TekSure" description="Type by talking on iPhone or Android. Stop pecking at tiny keyboard." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Keyboard className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Voice Typing</h1>
          <p className="text-lg text-muted-foreground">Talk instead of type. Easy on hands.</p>
        </div>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Why voice typing?</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Faster than tapping tiny keys.</li>
              <li>Easier with arthritis or shaky hands.</li>
              <li>No squinting at screen for letters.</li>
              <li>Surprisingly accurate now.</li>
              <li>Built into every modern phone.</li>
              <li>Free — already on your device.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">iPhone voice typing</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Open any text field — Messages, Notes, etc.</li>
              <li>Tap microphone icon on keyboard.</li>
              <li>Speak naturally.</li>
              <li>Words appear as you talk.</li>
              <li>Say &quot;period,&quot; &quot;comma,&quot; &quot;new line&quot; for punctuation.</li>
              <li>Tap microphone again to stop.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Android voice typing</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Open any text field.</li>
              <li>Tap microphone on Gboard keyboard.</li>
              <li>Or tap mic in voice search bar.</li>
              <li>Speak naturally.</li>
              <li>Same punctuation commands as iPhone.</li>
              <li>Continuous voice typing in newer Pixels.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Punctuation commands</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>&quot;Period&quot; → .</li>
              <li>&quot;Comma&quot; → ,</li>
              <li>&quot;Question mark&quot; → ?</li>
              <li>&quot;Exclamation point&quot; → !</li>
              <li>&quot;New line&quot; → break to next line.</li>
              <li>&quot;New paragraph&quot; → skip a line.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Tips for best results</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Speak clearly, normal pace.</li>
              <li>Quiet room helps accuracy.</li>
              <li>Hold phone close to mouth.</li>
              <li>Don&apos;t mumble.</li>
              <li>Spell out unusual names.</li>
              <li>Edit afterward as needed.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Computer voice typing</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Google Docs — Tools menu, Voice Typing.</li>
              <li>Microsoft Word — Dictate button (mic icon).</li>
              <li>Apple Mac — System Settings → Dictation.</li>
              <li>Windows — Win+H opens dictation.</li>
              <li>All free, built-in.</li>
              <li>Works almost as well as phone.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="bg-muted/40">
          <CardContent className="pt-6">
            <h3 className="font-bold mb-2">Try it for emails</h3>
            <p className="text-sm text-muted-foreground">Tomorrow morning, instead of typing your first email, tap the microphone and dictate it. Don&apos;t type a single key. You&apos;ll be amazed how natural it feels and how accurate modern voice typing is. Many seniors with stiff fingers or vision issues find voice typing eliminates 80% of phone typing frustration. It&apos;s already built in — just start using it.</p>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}

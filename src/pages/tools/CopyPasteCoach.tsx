import { useState } from 'react';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Clipboard } from 'lucide-react';

export default function CopyPasteCoach() {
  const [tab, setTab] = useState<'iphone' | 'android' | 'mac' | 'windows'>('iphone');

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Copy and Paste Coach — Move Text Between Apps | TekSure" description="The single most useful skill on a phone or computer. Plain-English steps to copy text, links, and photos between apps." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Clipboard className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Copy & Paste Coach</h1>
          <p className="text-lg text-muted-foreground">The most useful 30 seconds of computer learning ever.</p>
        </div>

        <Card className="mb-6 bg-primary/5 border-primary/20">
          <CardContent className="pt-6">
            <h2 className="font-bold mb-2">What "copy and paste" means</h2>
            <p className="text-sm">Copy = grab text or a photo, hold it on a hidden clipboard.<br />Paste = drop it somewhere else.</p>
            <p className="text-sm mt-2">Use it for: a phone number from a website to your contacts, a recipe link to a text, a long password from your notes to a login screen, an emoji from a friend's text into an email.</p>
          </CardContent>
        </Card>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 mb-4">
          {[['iphone', '📱 iPhone'], ['android', '🤖 Android'], ['mac', '🍎 Mac'], ['windows', '🪟 Windows']].map(([id, label]) => (
            <button key={id} onClick={() => setTab(id as any)} className={`p-3 rounded-lg border-2 ${tab === id ? 'border-primary bg-primary/10' : 'border-muted'}`}>{label}</button>
          ))}
        </div>

        {tab === 'iphone' && (
          <Card className="mb-4">
            <CardContent className="pt-6">
              <h3 className="font-bold text-lg mb-3">📱 iPhone — Copy and Paste</h3>
              <p className="font-semibold text-sm mt-2">Copy text:</p>
              <ol className="list-decimal pl-5 space-y-1 text-sm mb-3">
                <li>Press and hold a word until it's highlighted in blue.</li>
                <li>Drag the blue dots to grab more (or less).</li>
                <li>Tap "Copy" in the popup.</li>
              </ol>
              <p className="font-semibold text-sm">Paste text:</p>
              <ol className="list-decimal pl-5 space-y-1 text-sm mb-3">
                <li>Tap where you want the text to go (a text box, an email, a search bar).</li>
                <li>Tap one more time — a popup appears.</li>
                <li>Tap "Paste".</li>
              </ol>
              <p className="font-semibold text-sm">Copy a photo:</p>
              <ol className="list-decimal pl-5 space-y-1 text-sm">
                <li>In Photos, open the picture.</li>
                <li>Tap the Share button (square with arrow up) → "Copy Photo".</li>
                <li>Open Messages or email, tap in the message area, tap again, "Paste".</li>
              </ol>
            </CardContent>
          </Card>
        )}

        {tab === 'android' && (
          <Card className="mb-4">
            <CardContent className="pt-6">
              <h3 className="font-bold text-lg mb-3">🤖 Android — Copy and Paste</h3>
              <p className="font-semibold text-sm mt-2">Copy text:</p>
              <ol className="list-decimal pl-5 space-y-1 text-sm mb-3">
                <li>Press and hold any word — it highlights.</li>
                <li>Drag the handles to expand the selection.</li>
                <li>Tap "Copy" at the top.</li>
              </ol>
              <p className="font-semibold text-sm">Paste:</p>
              <ol className="list-decimal pl-5 space-y-1 text-sm">
                <li>Press and hold in a text field.</li>
                <li>Tap "Paste".</li>
              </ol>
              <p className="text-sm mt-3 bg-muted/50 p-3 rounded"><strong>Bonus on Samsung and Pixel:</strong> The "clipboard" remembers the last few things you copied. Tap the little clipboard icon above the keyboard to see them.</p>
            </CardContent>
          </Card>
        )}

        {tab === 'mac' && (
          <Card className="mb-4">
            <CardContent className="pt-6">
              <h3 className="font-bold text-lg mb-3">🍎 Mac — Copy and Paste</h3>
              <p className="font-semibold text-sm mt-2">Copy text:</p>
              <ol className="list-decimal pl-5 space-y-1 text-sm mb-3">
                <li>Click and drag to highlight the text (or double-click a word).</li>
                <li>Press <kbd className="bg-muted px-1.5 py-0.5 rounded">⌘</kbd> + <kbd className="bg-muted px-1.5 py-0.5 rounded">C</kbd>.</li>
              </ol>
              <p className="font-semibold text-sm">Paste:</p>
              <ol className="list-decimal pl-5 space-y-1 text-sm">
                <li>Click where you want the text.</li>
                <li>Press <kbd className="bg-muted px-1.5 py-0.5 rounded">⌘</kbd> + <kbd className="bg-muted px-1.5 py-0.5 rounded">V</kbd>.</li>
              </ol>
              <p className="text-sm mt-3 bg-muted/50 p-3 rounded"><strong>Right-click works too:</strong> Two-finger tap on the trackpad → "Copy" or "Paste" from the menu.</p>
              <p className="text-sm mt-2"><strong>Magic — copy on iPhone, paste on Mac:</strong> If your iPhone and Mac are signed in to the same Apple ID, you can copy something on one and paste on the other. It just works.</p>
            </CardContent>
          </Card>
        )}

        {tab === 'windows' && (
          <Card className="mb-4">
            <CardContent className="pt-6">
              <h3 className="font-bold text-lg mb-3">🪟 Windows — Copy and Paste</h3>
              <p className="font-semibold text-sm mt-2">Copy text:</p>
              <ol className="list-decimal pl-5 space-y-1 text-sm mb-3">
                <li>Click and drag to highlight (or double-click a word for one word, triple-click for a line).</li>
                <li>Press <kbd className="bg-muted px-1.5 py-0.5 rounded">Ctrl</kbd> + <kbd className="bg-muted px-1.5 py-0.5 rounded">C</kbd>.</li>
              </ol>
              <p className="font-semibold text-sm">Paste:</p>
              <ol className="list-decimal pl-5 space-y-1 text-sm">
                <li>Click where you want it.</li>
                <li>Press <kbd className="bg-muted px-1.5 py-0.5 rounded">Ctrl</kbd> + <kbd className="bg-muted px-1.5 py-0.5 rounded">V</kbd>.</li>
              </ol>
              <p className="text-sm mt-3 bg-muted/50 p-3 rounded"><strong>Right-click works too:</strong> Right-click selected text → "Copy". Right-click in destination → "Paste".</p>
              <p className="text-sm mt-2"><strong>Cut</strong> (move instead of copy) is <kbd className="bg-muted px-1.5 py-0.5 rounded">Ctrl</kbd> + <kbd className="bg-muted px-1.5 py-0.5 rounded">X</kbd>.</p>
            </CardContent>
          </Card>
        )}

        <Card className="bg-muted/40">
          <CardContent className="pt-6">
            <h3 className="font-bold mb-2">Most useful daily uses</h3>
            <ul className="list-disc pl-5 space-y-1 text-sm">
              <li>Copy a confirmation number from an email and paste into a tracking site.</li>
              <li>Copy a recipe from a website and paste into your Notes app.</li>
              <li>Copy a long password from a password manager and paste into a login.</li>
              <li>Copy a phone number from a website and paste into your dialer.</li>
              <li>Copy a long URL and paste into a text or email to share.</li>
            </ul>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}

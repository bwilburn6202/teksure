import { useState } from 'react';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Volume2 } from 'lucide-react';

export default function ReadAloudAnywhere() {
  const [tab, setTab] = useState<'iphone' | 'android' | 'mac' | 'windows'>('iphone');

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Read Aloud Any Text — Speak Screen, Read Aloud | TekSure" description="Make your phone or computer READ any web page, book, or email aloud. Plain-English steps for iPhone, Android, Mac, Windows." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Volume2 className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Read Aloud Any Text</h1>
          <p className="text-lg text-muted-foreground">Phone reads articles, books, emails to you — free.</p>
        </div>

        <Card className="mb-6 bg-primary/5 border-primary/20">
          <CardContent className="pt-6">
            <h2 className="font-bold mb-2">Use cases</h2>
            <ul className="text-sm list-disc pl-5">
              <li>Tired eyes — let phone read while you walk.</li>
              <li>Car ride — articles instead of audiobooks.</li>
              <li>Vision loss — full screen-reading via VoiceOver/TalkBack.</li>
              <li>Multitasking — read recipe while cooking.</li>
              <li>Helping low-literacy or English-as-second-language family.</li>
            </ul>
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
              <h3 className="font-bold text-lg mb-3">iPhone — Speak Screen</h3>
              <ol className="list-decimal pl-5 space-y-2 text-sm">
                <li>Settings → Accessibility → Spoken Content.</li>
                <li>Turn ON "Speak Screen".</li>
                <li>To use: open any article, email, book. Swipe DOWN with TWO FINGERS from top of screen.</li>
                <li>Phone reads the screen aloud. Controls appear (faster, slower, pause, skip).</li>
              </ol>
              <p className="text-sm mt-3">Also turn on "Speak Selection" — select any text → "Speak" appears in popup.</p>
            </CardContent>
          </Card>
        )}

        {tab === 'android' && (
          <Card className="mb-4">
            <CardContent className="pt-6">
              <h3 className="font-bold text-lg mb-3">Android — Select to Speak</h3>
              <ol className="list-decimal pl-5 space-y-2 text-sm">
                <li>Settings → Accessibility → Select to Speak (or "Talkback" for full reader).</li>
                <li>Turn ON.</li>
                <li>An icon appears bottom right of screen. Tap it, then tap any text or "Read all".</li>
                <li>Or use Google Assistant: "Hey Google, read this" while on a page.</li>
              </ol>
            </CardContent>
          </Card>
        )}

        {tab === 'mac' && (
          <Card className="mb-4">
            <CardContent className="pt-6">
              <h3 className="font-bold text-lg mb-3">Mac — Spoken Content</h3>
              <ol className="list-decimal pl-5 space-y-2 text-sm">
                <li>System Settings → Accessibility → Spoken Content.</li>
                <li>Turn ON "Speak announcements" or "Speak Selection".</li>
                <li>Set the keyboard shortcut (default: Option + Esc).</li>
                <li>Select text → press shortcut → Mac reads it.</li>
              </ol>
            </CardContent>
          </Card>
        )}

        {tab === 'windows' && (
          <Card className="mb-4">
            <CardContent className="pt-6">
              <h3 className="font-bold text-lg mb-3">Windows — Narrator + Edge Read Aloud</h3>
              <ol className="list-decimal pl-5 space-y-2 text-sm">
                <li><strong>Edge browser</strong>: Open any webpage → click the three-dot menu → "Read aloud". Press start.</li>
                <li><strong>Word documents</strong>: Review menu → "Read Aloud".</li>
                <li><strong>Full screen reader</strong>: Press <kbd className="bg-muted px-1.5 py-0.5 rounded">Win</kbd> + <kbd className="bg-muted px-1.5 py-0.5 rounded">Ctrl</kbd> + <kbd className="bg-muted px-1.5 py-0.5 rounded">Enter</kbd> for Narrator.</li>
              </ol>
            </CardContent>
          </Card>
        )}

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Apps for read-aloud</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li><strong>Pocket</strong> — save articles, listen later.</li>
              <li><strong>Kindle "Listen"</strong> — read most Kindle books aloud (text-to-speech).</li>
              <li><strong>Speechify</strong> — premium app with very natural voices.</li>
              <li><strong>NaturalReader</strong> — same idea.</li>
              <li><strong>Apple Books</strong> — has Speak feature for any book.</li>
              <li><strong>Google Play Books</strong> — same.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="bg-muted/40">
          <CardContent className="pt-6">
            <h3 className="font-bold mb-2">For long articles</h3>
            <p className="text-sm text-muted-foreground">Save to <strong>Pocket</strong> (free) or <strong>Speechify</strong> ($12/mo). Listen during walks. Many people who "don\'t read" actually love this — articles become podcasts.</p>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}

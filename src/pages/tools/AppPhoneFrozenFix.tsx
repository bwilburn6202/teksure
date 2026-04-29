import { useState } from 'react';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { RefreshCw } from 'lucide-react';

export default function AppPhoneFrozenFix() {
  const [tab, setTab] = useState<'iphone' | 'android' | 'mac' | 'windows'>('iphone');

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="App Frozen, Phone Frozen — How to Fix | TekSure" description="App stuck? Phone unresponsive? Plain-English force-quit and restart steps for iPhone, Android, Mac, and Windows." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <RefreshCw className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Frozen App / Phone Fix</h1>
          <p className="text-lg text-muted-foreground">When tapping does nothing.</p>
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
              <p className="font-semibold text-sm mt-2">App stuck:</p>
              <ol className="list-decimal pl-5 space-y-1 text-sm mb-3">
                <li>Swipe up from bottom (or double-press home button on older iPhones).</li>
                <li>App switcher appears.</li>
                <li>Swipe stuck app UP off screen.</li>
                <li>Re-open the app.</li>
              </ol>
              <p className="font-semibold text-sm">iPhone fully frozen:</p>
              <ol className="list-decimal pl-5 space-y-1 text-sm">
                <li><strong>iPhone 8 and later</strong>: Press volume UP, release. Press volume DOWN, release. Press AND HOLD side button until Apple logo appears.</li>
                <li><strong>iPhone 7</strong>: Hold volume DOWN + side button.</li>
                <li><strong>iPhone 6 / SE</strong>: Hold home button + side button.</li>
              </ol>
            </CardContent>
          </Card>
        )}

        {tab === 'android' && (
          <Card className="mb-4">
            <CardContent className="pt-6">
              <h3 className="font-bold text-lg mb-3">Android</h3>
              <p className="font-semibold text-sm mt-2">App stuck:</p>
              <ol className="list-decimal pl-5 space-y-1 text-sm mb-3">
                <li>Settings → Apps → tap stuck app → "Force Stop".</li>
                <li>Or use the recent apps button (square at bottom) → swipe app away.</li>
              </ol>
              <p className="font-semibold text-sm">Phone fully frozen:</p>
              <ol className="list-decimal pl-5 space-y-1 text-sm">
                <li>Hold POWER button + Volume DOWN for 10-20 seconds.</li>
                <li>Phone should restart.</li>
              </ol>
            </CardContent>
          </Card>
        )}

        {tab === 'mac' && (
          <Card className="mb-4">
            <CardContent className="pt-6">
              <h3 className="font-bold text-lg mb-3">Mac</h3>
              <p className="font-semibold text-sm mt-2">App not responding:</p>
              <ol className="list-decimal pl-5 space-y-1 text-sm mb-3">
                <li>Press <kbd className="bg-muted px-1.5 py-0.5 rounded">⌘</kbd> + <kbd className="bg-muted px-1.5 py-0.5 rounded">Option</kbd> + <kbd className="bg-muted px-1.5 py-0.5 rounded">Esc</kbd></li>
                <li>Force Quit window opens. Pick frozen app. Click "Force Quit".</li>
                <li>Or right-click the app icon in dock → Force Quit.</li>
              </ol>
              <p className="font-semibold text-sm">Mac fully frozen:</p>
              <ol className="list-decimal pl-5 space-y-1 text-sm">
                <li>Hold POWER button 10 seconds — Mac shuts off.</li>
                <li>Press power again to restart.</li>
              </ol>
            </CardContent>
          </Card>
        )}

        {tab === 'windows' && (
          <Card className="mb-4">
            <CardContent className="pt-6">
              <h3 className="font-bold text-lg mb-3">Windows</h3>
              <p className="font-semibold text-sm mt-2">App not responding:</p>
              <ol className="list-decimal pl-5 space-y-1 text-sm mb-3">
                <li>Press <kbd className="bg-muted px-1.5 py-0.5 rounded">Ctrl</kbd> + <kbd className="bg-muted px-1.5 py-0.5 rounded">Shift</kbd> + <kbd className="bg-muted px-1.5 py-0.5 rounded">Esc</kbd> → Task Manager.</li>
                <li>Click the frozen app. Click "End Task".</li>
              </ol>
              <p className="font-semibold text-sm">PC fully frozen:</p>
              <ol className="list-decimal pl-5 space-y-1 text-sm">
                <li>Hold POWER button 10 seconds — PC shuts off.</li>
                <li>Press power again to restart.</li>
                <li>If freeze repeats → may be virus, full disk, or hardware issue. (See our Computer Cleanup Coach.)</li>
              </ol>
            </CardContent>
          </Card>
        )}

        <Card className="bg-muted/40">
          <CardContent className="pt-6">
            <h3 className="font-bold mb-2">Restart fixes a lot</h3>
            <p className="text-sm text-muted-foreground">"Have you tried turning it off and on again?" exists as a meme because it works. Restart any device once a week. Solves 60% of weird tech problems.</p>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}

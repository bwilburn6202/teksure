import { useState } from 'react';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Camera } from 'lucide-react';

export default function ScreenshotCoach() {
  const [tab, setTab] = useState<'iphone' | 'android' | 'mac' | 'windows'>('iphone');

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="How to Take a Screenshot — Phone, Mac, Windows | TekSure" description="Need to send a picture of what's on your screen? Plain-English steps for iPhone, Android, Mac, and Windows." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Camera className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">How to Take a Screenshot</h1>
          <p className="text-lg text-muted-foreground">Capture what's on your screen — to share, save, or send to support.</p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 mb-4">
          {[['iphone', '📱 iPhone'], ['android', '🤖 Android'], ['mac', '🍎 Mac'], ['windows', '🪟 Windows']].map(([id, label]) => (
            <button key={id} onClick={() => setTab(id as any)} className={`p-3 rounded-lg border-2 ${tab === id ? 'border-primary bg-primary/10' : 'border-muted'}`}>{label}</button>
          ))}
        </div>

        {tab === 'iphone' && (
          <Card className="mb-4">
            <CardContent className="pt-6">
              <h3 className="font-bold text-lg mb-3">iPhone screenshot</h3>
              <p className="text-sm font-semibold mb-2">iPhone with Face ID (no Home button — most newer iPhones):</p>
              <ol className="list-decimal pl-5 space-y-1 text-sm mb-4">
                <li>Press the <strong>side button</strong> AND <strong>volume up</strong> at the same time.</li>
                <li>Release them quickly.</li>
                <li>You'll hear a camera click and see a preview in the bottom-left corner.</li>
                <li>Tap the preview to mark it up, or wait — it saves to Photos automatically.</li>
              </ol>
              <p className="text-sm font-semibold mb-2">iPhone with Home button (SE, older models):</p>
              <ol className="list-decimal pl-5 space-y-1 text-sm">
                <li>Press the <strong>Home button</strong> AND <strong>side/top button</strong> at the same time.</li>
                <li>Same: preview appears, screenshot saves to Photos.</li>
              </ol>
              <p className="text-sm mt-4 bg-muted/50 p-3 rounded"><strong>Tip — back tap shortcut:</strong> Settings → Accessibility → Touch → Back Tap → Double Tap → Screenshot. Now you tap the back of your iPhone twice to take a screenshot. Game changer.</p>
            </CardContent>
          </Card>
        )}

        {tab === 'android' && (
          <Card className="mb-4">
            <CardContent className="pt-6">
              <h3 className="font-bold text-lg mb-3">Android screenshot</h3>
              <p className="text-sm font-semibold mb-2">Most Android phones:</p>
              <ol className="list-decimal pl-5 space-y-1 text-sm mb-4">
                <li>Press <strong>power button</strong> AND <strong>volume down</strong> at the same time.</li>
                <li>Release quickly. Screen flashes — screenshot saved.</li>
                <li>Find it in Photos or the Gallery app, in a folder called "Screenshots".</li>
              </ol>
              <p className="text-sm font-semibold mb-2">Samsung Galaxy — extra option:</p>
              <ol className="list-decimal pl-5 space-y-1 text-sm">
                <li>Swipe the side of your hand across the screen from right to left (or left to right). Snap.</li>
                <li>Or use Bixby — say "Take a screenshot".</li>
              </ol>
            </CardContent>
          </Card>
        )}

        {tab === 'mac' && (
          <Card className="mb-4">
            <CardContent className="pt-6">
              <h3 className="font-bold text-lg mb-3">Mac screenshot</h3>
              <ul className="space-y-3 text-sm">
                <li><strong>Whole screen:</strong> Press <kbd className="bg-muted px-1.5 py-0.5 rounded">Shift</kbd> + <kbd className="bg-muted px-1.5 py-0.5 rounded">⌘</kbd> + <kbd className="bg-muted px-1.5 py-0.5 rounded">3</kbd> at the same time.</li>
                <li><strong>Just part of the screen:</strong> Press <kbd className="bg-muted px-1.5 py-0.5 rounded">Shift</kbd> + <kbd className="bg-muted px-1.5 py-0.5 rounded">⌘</kbd> + <kbd className="bg-muted px-1.5 py-0.5 rounded">4</kbd>. The cursor turns into crosshairs — drag to select the area.</li>
                <li><strong>One window:</strong> <kbd className="bg-muted px-1.5 py-0.5 rounded">Shift</kbd> + <kbd className="bg-muted px-1.5 py-0.5 rounded">⌘</kbd> + <kbd className="bg-muted px-1.5 py-0.5 rounded">4</kbd>, then press the <kbd className="bg-muted px-1.5 py-0.5 rounded">Space</kbd> bar. Click the window you want.</li>
              </ul>
              <p className="text-sm mt-3">Screenshots save to your Desktop by default, named "Screen Shot [date].png".</p>
            </CardContent>
          </Card>
        )}

        {tab === 'windows' && (
          <Card className="mb-4">
            <CardContent className="pt-6">
              <h3 className="font-bold text-lg mb-3">Windows screenshot</h3>
              <ul className="space-y-3 text-sm">
                <li><strong>Easiest — whole screen:</strong> Press the <kbd className="bg-muted px-1.5 py-0.5 rounded">Windows</kbd> key + <kbd className="bg-muted px-1.5 py-0.5 rounded">PrtScn</kbd>. Saved automatically to Pictures → Screenshots.</li>
                <li><strong>Just part of the screen:</strong> Press <kbd className="bg-muted px-1.5 py-0.5 rounded">Windows</kbd> + <kbd className="bg-muted px-1.5 py-0.5 rounded">Shift</kbd> + <kbd className="bg-muted px-1.5 py-0.5 rounded">S</kbd>. Drag to select the area. It copies to clipboard — paste into email or a document with <kbd className="bg-muted px-1.5 py-0.5 rounded">Ctrl</kbd> + <kbd className="bg-muted px-1.5 py-0.5 rounded">V</kbd>.</li>
                <li><strong>One window:</strong> <kbd className="bg-muted px-1.5 py-0.5 rounded">Alt</kbd> + <kbd className="bg-muted px-1.5 py-0.5 rounded">PrtScn</kbd>. Copies the active window only.</li>
              </ul>
              <p className="text-sm mt-3">No PrtScn key? Open the "Snipping Tool" app from the Start menu — same idea.</p>
            </CardContent>
          </Card>
        )}

        <Card className="bg-muted/40">
          <CardContent className="pt-6">
            <h3 className="font-bold mb-2">Quick Tip — sending a screenshot</h3>
            <p className="text-sm text-muted-foreground">After you take it, tap "Share" (or use Mail / Messages). Screenshots are how tech support helps you fastest — when something's wrong on your screen, send a picture instead of describing it.</p>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}

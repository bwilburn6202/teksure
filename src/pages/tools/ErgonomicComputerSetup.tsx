import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Armchair } from 'lucide-react';

export default function ErgonomicComputerSetup() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Ergonomic Computer Setup — Wrist Pain, Eye Strain, Back Pain | TekSure" description="Sore wrists, sore back, tired eyes after computer use? Plain-English ergonomic fixes — vertical mouse, big keyboard, monitor height." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Armchair className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Ergonomic Computer Setup</h1>
          <p className="text-lg text-muted-foreground">Stop wrist, neck, back, and eye pain at the computer.</p>
        </div>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">🖱️ Mouse — for wrist & arthritis pain</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li><strong>Vertical mouse (Logitech MX Vertical, Anker)</strong> — $40-100. Hand position is "handshake" instead of palm-down. Cuts forearm strain.</li>
              <li><strong>Trackball mouse (Logitech M575)</strong> — $40. Move thumb, not whole arm. Easy on shoulders.</li>
              <li><strong>Apple Magic Trackpad</strong> — gestures via swipes. Works on Mac and iPad.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">⌨️ Keyboard — for visibility & typing</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li><strong>Logitech K780 / K780 Plus</strong> — large keys, easy on aging hands.</li>
              <li><strong>Apple Magic Keyboard with Numeric Keypad</strong> — bigger than the slim version.</li>
              <li><strong>Logitech ERGO K860</strong> — split, curved layout. Best for serious typers.</li>
              <li><strong>Big-key keyboards for low vision</strong> — search "low vision keyboard" — high-contrast, oversized letters.</li>
              <li><strong>Backlit keyboard</strong> — see keys in dim rooms.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">🖥️ Monitor & laptop placement</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li><strong>Top of screen at eye level</strong> — stops the head-tilt-down that wrecks necks.</li>
              <li><strong>Laptop stand</strong> ($30) — props laptop up. PAIR with external keyboard so you\'re not reaching up.</li>
              <li><strong>Monitor arm</strong> ($60-150) — adjustable height and angle. Game-changer for desk setups.</li>
              <li><strong>20-20-20 rule</strong> — every 20 minutes, look at something 20 feet away for 20 seconds. Cuts eye strain.</li>
              <li><strong>Brightness:</strong> match the room\'s light. Don\'t crank to max in a dim room.</li>
              <li><strong>Night Shift / Night Light</strong> — both Mac and Windows have it. Reduces blue light evening hours.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">💺 Chair & posture</h2>
            <ul className="list-disc pl-5 space-y-1 text-sm">
              <li>Feet flat on the floor (or on a footrest).</li>
              <li>Knees at 90°.</li>
              <li>Hips slightly higher than knees.</li>
              <li>Back supported (lumbar pillow if your chair lacks one).</li>
              <li>Shoulders relaxed, NOT shrugged.</li>
              <li>Elbows at ~90° at the keyboard.</li>
              <li>Get up every 30 minutes. Even just to refill water.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">🕶️ Eye strain</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li><strong>Computer glasses</strong> — drugstore +1.0 to +1.5 reading glasses for screen distance. Cheap and effective.</li>
              <li><strong>Get a real eye exam yearly</strong> — astigmatism gets worse with age and causes screen pain.</li>
              <li><strong>Increase font size system-wide</strong> — Settings → Display → Larger Text. Don\'t squint at default size.</li>
              <li><strong>Use Reader Mode</strong> on long articles — fewer ads, bigger text.</li>
              <li><strong>Blue-light filtering glasses</strong> — research is mixed. Probably small effect, but inexpensive to try.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="bg-muted/40">
          <CardContent className="pt-6">
            <h3 className="font-bold mb-2">Order of impact</h3>
            <p className="text-sm text-muted-foreground">If you have $100 to spend on ONE thing — get a vertical mouse. If $150 — laptop stand + external keyboard. If $200 — adjustable monitor arm. If $50 — drugstore computer glasses. Each of these eliminates a different daily pain.</p>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}

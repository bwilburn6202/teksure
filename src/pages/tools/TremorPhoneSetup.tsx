import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Hand } from 'lucide-react';

export default function TremorPhoneSetup() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Phone Setup for Tremors & Parkinson&apos;s | TekSure" description="Hands shake or arthritis makes typing tough? Plain-English settings to make iPhone or Android easier to use with tremors, Parkinson&apos;s, or essential tremor." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Hand className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Phone Setup for Tremors</h1>
          <p className="text-lg text-muted-foreground">Settings that make tapping, typing, and swiping easier.</p>
        </div>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">📱 iPhone — most helpful settings</h2>
            <p className="font-semibold text-sm mt-2">Touch accommodations:</p>
            <ol className="list-decimal pl-5 space-y-1 text-sm mb-3">
              <li>Settings → Accessibility → Touch → Touch Accommodations → ON.</li>
              <li><strong>Hold Duration</strong> — sets how long you must hold before a tap registers. Set to 0.10s — ignores accidental brief touches.</li>
              <li><strong>Ignore Repeat</strong> — set to 0.50s — ignores duplicate taps from a tremor.</li>
              <li><strong>Tap Assistance: Use Initial Touch Location</strong> — registers where you first touched, not where the finger drifted to.</li>
            </ol>
            <p className="font-semibold text-sm">Bigger tap targets:</p>
            <ol className="list-decimal pl-5 space-y-1 text-sm mb-3">
              <li>Settings → Display & Brightness → Display Zoom → "Larger Text".</li>
              <li>Settings → Display & Brightness → Text Size → max.</li>
            </ol>
            <p className="font-semibold text-sm">Voice and dictation:</p>
            <ol className="list-decimal pl-5 space-y-1 text-sm">
              <li>Voice Control (Settings → Accessibility → Voice Control) lets you say "Tap Send" or "Open Mail".</li>
              <li>Dictation (microphone on keyboard) — speak instead of type.</li>
              <li>Siri — "Hey Siri, send a text to Mary saying I\'m running late".</li>
            </ol>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">🤖 Android — most helpful settings</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li><strong>Touch & hold delay</strong>: Settings → Accessibility → Touch & hold delay → "Long". Stops accidental triggers.</li>
              <li><strong>Display size</strong>: Settings → Display → Display size → maximum. Bigger buttons.</li>
              <li><strong>Voice Access app</strong> (free, Play Store) — "Tap 5", "Open Camera".</li>
              <li><strong>Google Assistant</strong> — "Hey Google, call my daughter".</li>
              <li><strong>Big keyboard</strong>: Install "Big Buttons Keyboard" from the Play Store.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Hardware that helps</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li><strong>Phone stand or grip</strong> — PopSocket, ring grip, or a tabletop stand. Stops hand from holding the phone weight.</li>
              <li><strong>Stylus</strong> — wider than a finger; rests on the screen more steadily.</li>
              <li><strong>Apple Pencil or generic capacitive stylus</strong> — controllable pressure.</li>
              <li><strong>Big Bluetooth keyboard</strong> — pair with phone or tablet for a real keyboard with bigger keys.</li>
              <li><strong>iPad over iPhone</strong> — bigger screen, bigger buttons, more comfortable.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">For Parkinson\'s specifically</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li><strong>Apple Watch + StrivePD</strong> — tracks tremor, OFF time, etc. Shares data with neurologist.</li>
              <li><strong>Constant Therapy app</strong> — speech and language exercises.</li>
              <li><strong>BeatPD app</strong> — speech volume training (Parkinson\'s tends to lower voice volume).</li>
              <li><strong>Parky for Parkinson\'s</strong> — symptom journal designed for the disease.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="bg-muted/40">
          <CardContent className="pt-6">
            <h3 className="font-bold mb-2">Quick Tip — get help adjusting</h3>
            <p className="text-sm text-muted-foreground">If these settings help, ask a family member or visit an Apple or Best Buy store. Most stores will help you set up Accessibility for free in 30-60 minutes. Apple Stores in particular are known for taking care of accessibility setup patiently.</p>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}

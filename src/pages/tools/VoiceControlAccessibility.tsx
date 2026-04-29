import { useState } from 'react';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Speech } from 'lucide-react';

export default function VoiceControlAccessibility() {
  const [tab, setTab] = useState<'iphone' | 'android'>('iphone');

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Voice Control & VoiceOver — Hands-Free Phone | TekSure" description="Use your phone with your voice. Plain-English steps to set up voice control and screen reading for vision impairment, arthritis, or hands-free use." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Speech className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Voice Control & VoiceOver</h1>
          <p className="text-lg text-muted-foreground">Use your phone with your voice. Free. Built in.</p>
        </div>

        <Card className="mb-6 bg-primary/5 border-primary/20">
          <CardContent className="pt-6">
            <h2 className="font-bold mb-2">Two different features</h2>
            <ul className="text-sm list-disc pl-5">
              <li><strong>Voice Control</strong> — talk to your phone, it taps and types for you. Best if hands hurt or arthritis makes typing tough.</li>
              <li><strong>VoiceOver / TalkBack</strong> — phone reads aloud what\'s on screen. Best for vision loss.</li>
              <li><strong>Dictation</strong> — speak instead of type, but otherwise use the phone normally.</li>
            </ul>
          </CardContent>
        </Card>

        <div className="flex gap-2 mb-4">
          <button onClick={() => setTab('iphone')} className={`flex-1 p-3 rounded-lg border-2 ${tab === 'iphone' ? 'border-primary bg-primary/10' : 'border-muted'}`}>📱 iPhone</button>
          <button onClick={() => setTab('android')} className={`flex-1 p-3 rounded-lg border-2 ${tab === 'android' ? 'border-primary bg-primary/10' : 'border-muted'}`}>🤖 Android</button>
        </div>

        {tab === 'iphone' && (
          <>
            <Card className="mb-4">
              <CardContent className="pt-6">
                <h3 className="font-bold text-lg mb-3">Voice Control (iPhone)</h3>
                <ol className="list-decimal pl-5 space-y-2 text-sm">
                  <li>Settings → Accessibility → Voice Control → "Set Up Voice Control" (one-time).</li>
                  <li>Now turn it on. Say things like "Open Mail", "Tap Send", "Scroll Up", "Go Home".</li>
                  <li>"Show numbers" — every tappable thing gets a number; you say "Tap 5".</li>
                  <li>"Show grid" — splits the screen into numbered squares for precise commands.</li>
                </ol>
                <p className="text-sm mt-2 bg-muted/50 p-3 rounded">Once you\'re used to it, you can use your iPhone hands-free for everything.</p>
              </CardContent>
            </Card>
            <Card className="mb-4">
              <CardContent className="pt-6">
                <h3 className="font-bold text-lg mb-3">VoiceOver — for vision impairment</h3>
                <ol className="list-decimal pl-5 space-y-2 text-sm">
                  <li>Settings → Accessibility → VoiceOver.</li>
                  <li>Toggle ON. Phone speaks every button. Single tap = read out, double tap = activate.</li>
                  <li>Tip: triple-click the side button to toggle VoiceOver on/off (after configuring Accessibility Shortcut).</li>
                  <li>Speech rate, voice, and language all adjustable.</li>
                </ol>
              </CardContent>
            </Card>
          </>
        )}

        {tab === 'android' && (
          <>
            <Card className="mb-4">
              <CardContent className="pt-6">
                <h3 className="font-bold text-lg mb-3">Voice Access (Android)</h3>
                <ol className="list-decimal pl-5 space-y-2 text-sm">
                  <li>Install the free <strong>Voice Access</strong> app from the Play Store (often pre-installed).</li>
                  <li>Settings → Accessibility → Voice Access → ON.</li>
                  <li>Say "Hey Google, voice access" to activate. Then "Open Camera", "Tap 5", "Go back", "Scroll down".</li>
                </ol>
              </CardContent>
            </Card>
            <Card className="mb-4">
              <CardContent className="pt-6">
                <h3 className="font-bold text-lg mb-3">TalkBack — for vision impairment</h3>
                <ol className="list-decimal pl-5 space-y-2 text-sm">
                  <li>Settings → Accessibility → TalkBack → ON.</li>
                  <li>Single tap = announce, double tap = activate.</li>
                  <li>Set up a quick toggle: Settings → Accessibility → Volume Key Shortcut.</li>
                </ol>
              </CardContent>
            </Card>
          </>
        )}

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Dictation (speak to type)</h2>
            <p className="text-sm mb-2">Easier than full voice control. Just talk instead of type.</p>
            <ul className="list-disc pl-5 space-y-1 text-sm">
              <li><strong>iPhone:</strong> Tap the microphone icon next to the spacebar in any keyboard. Speak.</li>
              <li><strong>Android:</strong> Same — microphone on the keyboard. Or hold the spacebar to speak.</li>
              <li>Say "comma" "period" "question mark" to add punctuation.</li>
              <li>Say "new paragraph" to start a new line.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="bg-muted/40">
          <CardContent className="pt-6">
            <h3 className="font-bold mb-2">For arthritis or essential tremor</h3>
            <p className="text-sm text-muted-foreground">Voice Control + Dictation together can let you use a phone almost completely without tapping. Worth setting up before hands really start to give you trouble. Apple is generally further ahead than Android on accessibility — iPhone or iPad is often the better pick if these features matter.</p>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}

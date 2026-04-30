import { useState } from 'react';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Captions, Volume2 } from 'lucide-react';

export default function LiveCaptionsSetup() {
  const [tab, setTab] = useState<'iphone' | 'android'>('iphone');

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Live Captions Setup — Real-Time Subtitles for Calls and Videos | TekSure" description="Hard of hearing? Your phone can show captions in real-time during calls, videos, and even in-person conversations. Free and built in." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Captions className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Live Captions Setup</h1>
          <p className="text-lg text-muted-foreground">Real-time subtitles for any video, call, or conversation.</p>
        </div>

        <Card className="mb-6 bg-primary/5 border-primary/20">
          <CardContent className="pt-6">
            <h2 className="font-bold mb-2">What live captions do</h2>
            <p className="text-sm">Your phone listens and types out what it hears, in real time, on the screen. Works for YouTube, FaceTime calls, phone calls, podcasts — and you can hold up the phone during in-person conversations to read along.</p>
          </CardContent>
        </Card>

        <div className="flex gap-2 mb-4">
          <button onClick={() => setTab('iphone')} className={`flex-1 p-3 rounded-lg border-2 ${tab === 'iphone' ? 'border-primary bg-primary/10' : 'border-muted'}`}>📱 iPhone (iOS 16+)</button>
          <button onClick={() => setTab('android')} className={`flex-1 p-3 rounded-lg border-2 ${tab === 'android' ? 'border-primary bg-primary/10' : 'border-muted'}`}>🤖 Android</button>
        </div>

        {tab === 'iphone' && (
          <Card className="mb-4">
            <CardContent className="pt-6">
              <h3 className="font-bold text-lg mb-3">iPhone — Live Captions</h3>
              <ol className="list-decimal pl-5 space-y-2 text-sm">
                <li>Open <strong>Settings</strong>.</li>
                <li>Tap <strong>Accessibility</strong>.</li>
                <li>Tap <strong>Live Captions</strong> (under "Hearing").</li>
                <li>Turn on <strong>Live Captions</strong>.</li>
                <li>You can also turn on Live Captions in FaceTime — captions show what each person says with their name.</li>
              </ol>
              <p className="text-sm mt-3">A floating box appears on screen with text of whatever is being said. Tap the box to make it bigger, smaller, or to pause it.</p>
              <p className="text-sm mt-3 bg-muted/50 p-3 rounded"><strong>Quick toggle:</strong> Settings → Accessibility → Accessibility Shortcut → choose Live Captions. Then triple-click the side button to turn it on/off anytime.</p>
            </CardContent>
          </Card>
        )}

        {tab === 'android' && (
          <Card className="mb-4">
            <CardContent className="pt-6">
              <h3 className="font-bold text-lg mb-3">Android — Live Caption</h3>
              <ol className="list-decimal pl-5 space-y-2 text-sm">
                <li>Open <strong>Settings</strong>.</li>
                <li>Tap <strong>Accessibility</strong> → <strong>Live Caption</strong>. (On Samsung: Accessibility → Hearing enhancements → Live Caption.)</li>
                <li>Turn it on.</li>
                <li>Now press the volume up or down button — a small "captions" icon appears next to the volume slider. Tap it to turn captions on/off anytime.</li>
              </ol>
              <p className="text-sm mt-3">Live Caption works on YouTube, podcasts, video calls, voice notes, and even phone calls (on Pixel and many newer phones).</p>
              <div className="mt-3 bg-muted/50 p-3 rounded text-sm">
                <p className="font-semibold mb-1">In-person conversations:</p>
                <p>Open the free <strong>"Live Transcribe"</strong> app from Google. It uses your phone's microphone to caption whatever it hears — perfect for chatting at a noisy restaurant.</p>
              </div>
            </CardContent>
          </Card>
        )}

        <Card className="mb-4">
          <CardContent className="pt-6">
            <div className="flex gap-3">
              <Volume2 className="w-6 h-6 text-primary shrink-0" />
              <div>
                <h3 className="font-bold mb-1">Bonus: turn on captions everywhere</h3>
                <ul className="list-disc pl-5 space-y-1 text-sm">
                  <li><strong>YouTube:</strong> Tap the "CC" button on any video.</li>
                  <li><strong>Netflix / Disney+ / Max / Hulu:</strong> Look for the speech-bubble icon during playback. Set to "English" or your preferred language.</li>
                  <li><strong>Zoom:</strong> Click "Show Captions" at the bottom of the meeting window.</li>
                  <li><strong>Your TV:</strong> Most remotes have a "CC" or "Subtitles" button — press it once.</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-muted/40">
          <CardContent className="pt-6">
            <h3 className="font-bold mb-2">Captions aren't perfect</h3>
            <p className="text-sm text-muted-foreground">Live captions guess the words from sound, so they sometimes get names or unusual words wrong — especially in noisy places. They're best for general meaning, not legal or medical detail.</p>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}

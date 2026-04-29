import { useState } from 'react';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Siren, AlertTriangle } from 'lucide-react';

export default function EmergencySosSetup() {
  const [tab, setTab] = useState<'iphone' | 'android'>('iphone');

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Emergency SOS Setup — Phone Calls 911 With One Hand | TekSure" description="Both iPhone and Android can call 911 and text family with your location — fast, even when you can't unlock the phone. Set it up before you need it." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Siren className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Emergency SOS Setup</h1>
          <p className="text-lg text-muted-foreground">Press a button — phone calls 911 and texts family your location.</p>
        </div>

        <Card className="mb-6 bg-primary/5 border-primary/20">
          <CardContent className="pt-6">
            <h2 className="font-bold mb-2">Why this matters</h2>
            <p className="text-sm">If you fall, faint, or are in a scary situation, you may not have time to unlock your phone, find the dialer, and type 911. SOS does it with one button press.</p>
          </CardContent>
        </Card>

        <div className="flex gap-2 mb-4">
          <button onClick={() => setTab('iphone')} className={`flex-1 p-3 rounded-lg border-2 ${tab === 'iphone' ? 'border-primary bg-primary/10' : 'border-muted'}`}>📱 iPhone</button>
          <button onClick={() => setTab('android')} className={`flex-1 p-3 rounded-lg border-2 ${tab === 'android' ? 'border-primary bg-primary/10' : 'border-muted'}`}>🤖 Android</button>
        </div>

        {tab === 'iphone' && (
          <Card className="mb-4">
            <CardContent className="pt-6">
              <h3 className="font-bold text-lg mb-3">iPhone — Emergency SOS</h3>
              <p className="text-sm mb-3">Already on by default — but let's set it up properly.</p>
              <ol className="list-decimal pl-5 space-y-2 text-sm">
                <li>Settings → <strong>Emergency SOS</strong>.</li>
                <li>Turn ON <strong>"Call with Hold and Release"</strong> — press and hold side button + either volume button → countdown starts → release to call 911.</li>
                <li>Turn ON <strong>"Call with 5 Presses"</strong> — pressing the side button 5 times in a row also calls 911. Easier with one hand.</li>
                <li>Turn ON <strong>"Call Quietly"</strong> only if you might need to call without anyone hearing.</li>
                <li>Tap <strong>"Set up Emergency Contacts in Health"</strong> — this opens Medical ID. Add 2-3 contacts. They get a text with your location AFTER you call 911.</li>
              </ol>
              <div className="mt-3 bg-muted/50 p-3 rounded text-sm">
                <p className="font-semibold mb-1">Crash detection (iPhone 14 and newer):</p>
                <p>Settings → Emergency SOS → "Call After Severe Crash" — auto-dials 911 if the phone detects a car accident.</p>
              </div>
              <div className="mt-3 bg-muted/50 p-3 rounded text-sm">
                <p className="font-semibold mb-1">Apple Watch — fall detection:</p>
                <p>If you have an Apple Watch — Watch app on iPhone → My Watch → Emergency SOS → "Fall Detection" → "Always On". The watch detects a hard fall and calls 911 if you don't move for 1 minute.</p>
              </div>
            </CardContent>
          </Card>
        )}

        {tab === 'android' && (
          <Card className="mb-4">
            <CardContent className="pt-6">
              <h3 className="font-bold text-lg mb-3">Android — Emergency SOS</h3>
              <p className="text-sm mb-3">Setup varies by phone — most common paths:</p>
              <p className="font-semibold text-sm mt-3">Pixel, Motorola, OnePlus and most others:</p>
              <ol className="list-decimal pl-5 space-y-2 text-sm">
                <li>Settings → <strong>Safety & emergency</strong>.</li>
                <li>Tap <strong>Emergency SOS</strong>.</li>
                <li>Turn ON. Press the power button 5 times to trigger.</li>
                <li>Choose what happens: call 911, share your location, record video, or all three.</li>
                <li>Add Emergency contacts in the same menu — they get notified.</li>
              </ol>
              <p className="font-semibold text-sm mt-4">Samsung Galaxy:</p>
              <ol className="list-decimal pl-5 space-y-2 text-sm">
                <li>Settings → <strong>Safety and emergency</strong> → <strong>Send SOS messages</strong>.</li>
                <li>Turn it on.</li>
                <li>Pressing the side button 3 or 5 times sends a text with your location to chosen contacts (and optionally calls 911).</li>
                <li>Add up to 4 emergency contacts.</li>
              </ol>
            </CardContent>
          </Card>
        )}

        <Card className="mb-4 border-yellow-300 dark:border-yellow-800">
          <CardContent className="pt-6">
            <div className="flex gap-3">
              <AlertTriangle className="w-6 h-6 text-yellow-700 dark:text-yellow-400 shrink-0" />
              <div>
                <h3 className="font-bold mb-1">Test it (just once, carefully)</h3>
                <p className="text-sm text-muted-foreground">Don't accidentally call 911. Instead — practice the button presses without going through the countdown. On iPhone, you'll see a countdown circle — let go of the buttons before it ends. That confirms you know how to trigger it.</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-muted/40">
          <CardContent className="pt-6">
            <h3 className="font-bold mb-2">For caregivers</h3>
            <p className="text-sm text-muted-foreground">If you help an aging parent — set this up for them, then practice it together. Have them try the button press while you watch. Add yourself AND a sibling as emergency contacts (don't put all eggs in one basket).</p>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}

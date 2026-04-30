import { useState } from 'react';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Tv } from 'lucide-react';

const COMBOS: Record<string, { title: string; steps: string[]; tip?: string }> = {
  'iphone-apple': { title: 'iPhone → Apple TV (or AirPlay TV)', steps: ['Both devices on the same Wi-Fi.', 'Open the photo, video, or app on your iPhone.', 'Tap the AirPlay icon — looks like a TV with a triangle. Or open Control Center (swipe down from top-right corner) and tap "Screen Mirroring".', 'Pick your Apple TV or AirPlay TV from the list.', 'If a 4-digit code shows on your TV, type it on your phone.', 'You\'re mirroring. To stop, tap Screen Mirroring → "Stop Mirroring".'] },
  'iphone-roku': { title: 'iPhone → Roku TV', steps: ['Make sure AirPlay is on in your Roku: Settings → Apple AirPlay and HomeKit → AirPlay → On.', 'Both devices on the same Wi-Fi.', 'Open Control Center on iPhone → tap "Screen Mirroring" → pick your Roku.', 'Type the code shown on TV.'], tip: 'Older Roku models don\'t support AirPlay — you\'ll need a Roku Express 4K (model 3940) or newer.' },
  'iphone-chromecast': { title: 'iPhone → Chromecast / Google TV', steps: ['Install the free <strong>Google Home</strong> app from the App Store.', 'Set up your Chromecast in the app (one-time).', 'In an app like YouTube or Netflix, tap the Cast icon (a TV with Wi-Fi waves).', 'Pick your Chromecast.', 'For full screen mirroring (anything on iPhone), use a third-party app — built-in mirroring isn\'t supported.'] },
  'iphone-fire': { title: 'iPhone → Amazon Fire TV', steps: ['Install <strong>AirScreen</strong> on your Fire TV (free, from Fire TV app store).', 'Open AirScreen on the TV — note the AirPlay name shown.', 'On iPhone: Control Center → Screen Mirroring → pick the Fire TV.'], tip: 'Built-in AirPlay is in newer Fire TV Stick 4K Max — check Fire TV Settings → Display & Sounds → Display Mirroring.' },
  'android-chromecast': { title: 'Android → Chromecast / Google TV', steps: ['Both on the same Wi-Fi.', 'Most apps (YouTube, Netflix, Spotify) have a Cast icon at the top — tap it.', 'Pick your Chromecast or Google TV from the list.', 'For mirroring the whole screen: pull down twice from the top, tap "Screen Cast" or "Smart View".'] },
  'android-roku': { title: 'Android → Roku TV', steps: ['Pull down twice from top of Android screen.', 'Tap "Smart View" or "Cast" tile.', 'Pick your Roku.'], tip: 'On Samsung Galaxy: it\'s called "Smart View".' },
  'android-fire': { title: 'Android → Fire TV', steps: ['On Fire TV: Settings → Display & Sounds → Enable Display Mirroring.', 'On Android: pull down → tap Smart View / Cast / Wireless Display.', 'Pick your Fire TV.'] },
  'android-apple': { title: 'Android → Apple TV', steps: ['Apple TV doesn\'t natively support Android casting.', 'Install <strong>AirScreen</strong> on Apple TV (or use a third-party app).', 'Then on Android: Smart View → pick the Apple TV.'] },
};

export default function CastPhoneToTv() {
  const [phone, setPhone] = useState<'iphone' | 'android' | null>(null);
  const [tv, setTv] = useState<'apple' | 'roku' | 'chromecast' | 'fire' | null>(null);

  const key = phone && tv ? `${phone}-${tv}` : null;
  const result = key ? COMBOS[key] : null;

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Cast Your Phone to the TV — Photos, Videos, Anything | TekSure" description="Show photos and videos from your phone on your big TV. iPhone or Android, paired with Apple TV, Roku, Chromecast, or Fire TV. Plain-English steps." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Tv className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Cast Phone to TV</h1>
          <p className="text-lg text-muted-foreground">Photos and videos on the big screen — perfect for sharing with family.</p>
        </div>

        {!phone && (
          <Card>
            <CardContent className="pt-6 space-y-3">
              <h2 className="font-bold text-lg">Step 1 — What kind of phone?</h2>
              <button onClick={() => setPhone('iphone')} className="w-full p-4 border-2 rounded-lg text-left hover:border-primary">📱 iPhone</button>
              <button onClick={() => setPhone('android')} className="w-full p-4 border-2 rounded-lg text-left hover:border-primary">🤖 Android (Samsung, Pixel, Motorola...)</button>
            </CardContent>
          </Card>
        )}

        {phone && !tv && (
          <Card>
            <CardContent className="pt-6 space-y-3">
              <h2 className="font-bold text-lg">Step 2 — What's on or attached to your TV?</h2>
              <button onClick={() => setTv('apple')} className="w-full p-4 border-2 rounded-lg text-left hover:border-primary">🍎 Apple TV (or "AirPlay" TV like Samsung/LG newer models)</button>
              <button onClick={() => setTv('roku')} className="w-full p-4 border-2 rounded-lg text-left hover:border-primary">🟣 Roku TV or Roku stick</button>
              <button onClick={() => setTv('chromecast')} className="w-full p-4 border-2 rounded-lg text-left hover:border-primary">🟢 Chromecast or Google TV</button>
              <button onClick={() => setTv('fire')} className="w-full p-4 border-2 rounded-lg text-left hover:border-primary">🟠 Amazon Fire TV / Fire Stick</button>
              <button onClick={() => setPhone(null)} className="text-sm text-primary mt-2">← Back</button>
            </CardContent>
          </Card>
        )}

        {result && (
          <>
            <Card className="mb-4">
              <CardContent className="pt-6">
                <h2 className="font-bold text-xl mb-3">{result.title}</h2>
                <ol className="list-decimal pl-5 space-y-2 text-sm">
                  {result.steps.map((s, i) => <li key={i} dangerouslySetInnerHTML={{ __html: s }} />)}
                </ol>
                {result.tip && <p className="mt-3 bg-muted/50 p-3 rounded text-sm"><strong>Tip:</strong> {result.tip}</p>}
              </CardContent>
            </Card>
            <button onClick={() => { setPhone(null); setTv(null); }} className="w-full p-3 border rounded-lg text-sm">Start over</button>
          </>
        )}
      </main>
      <Footer />
    </div>
  );
}

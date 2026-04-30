import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Camera } from 'lucide-react';

export default function IphoneCameraTipsSeniors() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="iPhone Camera Tips for Seniors | TekSure" description="Take better photos with your iPhone camera. Built-in features seniors should know." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Camera className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">iPhone Camera Tips</h1>
          <p className="text-lg text-muted-foreground">Hidden features. Better photos.</p>
        </div>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Tap to focus</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Tap subject in viewfinder.</li>
              <li>Yellow square — focus + exposure locked.</li>
              <li>Hold to lock — won&apos;t change as you move.</li>
              <li>Slide sun icon up/down to adjust brightness.</li>
              <li>Best photo trick most seniors don&apos;t use.</li>
              <li>Improves nearly every photo.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Portrait mode</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Blurry background — like fancy camera.</li>
              <li>Swipe to Portrait mode in Camera app.</li>
              <li>Take portrait of person or pet.</li>
              <li>Edit blur amount after.</li>
              <li>Available iPhone X and newer.</li>
              <li>Makes photos look professional.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Burst mode</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Hold shutter button down.</li>
              <li>Camera takes rapid photos.</li>
              <li>Pick best one later.</li>
              <li>Great for kids, pets, action.</li>
              <li>Or volume button → continuous shooting.</li>
              <li>Eliminates blurry/bad timing photos.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Live Photos</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Camera records 1.5 sec before + after photo.</li>
              <li>Tap + hold photo to play.</li>
              <li>Pick best frame as still photo.</li>
              <li>Apply effects — Loop, Bounce, Long Exposure.</li>
              <li>Captures moment + sound.</li>
              <li>Toggle on/off in Camera app.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Grid lines</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Settings → Camera → Grid ON.</li>
              <li>9 squares appear in viewfinder.</li>
              <li>Use rule of thirds — eyes on top line.</li>
              <li>Helps level horizons.</li>
              <li>Improves composition immediately.</li>
              <li>Free professional photographer trick.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Senior-friendly camera tricks</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Volume button — also takes photo (no shaking).</li>
              <li>Use AirPods button as remote shutter.</li>
              <li>&quot;Hey Siri, take a photo&quot; — voice triggered.</li>
              <li>Apple Watch as camera remote.</li>
              <li>Larger phone = steadier hold.</li>
              <li>iPhone tripod for $20 helps.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="bg-muted/40">
          <CardContent className="pt-6">
            <h3 className="font-bold mb-2">Tap to focus changes everything</h3>
            <p className="text-sm text-muted-foreground">If you do nothing else, learn to tap on your subject before taking photos. The yellow box ensures the camera focuses on what matters and exposes correctly. Adjust brightness with the sun icon. This single 5-second habit dramatically improves photos. Your grandkids&apos; pictures, vacation photos, family gatherings — all noticeably better.</p>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}

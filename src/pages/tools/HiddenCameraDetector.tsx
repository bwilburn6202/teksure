import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Eye } from 'lucide-react';

export default function HiddenCameraDetector() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Hidden Camera Detector — Hotel & Airbnb Privacy Check | TekSure" description="Hidden cameras in Airbnbs and hotels are real. A 5-minute privacy sweep using just your phone. Plain-English steps." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Eye className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Hidden Camera Detector</h1>
          <p className="text-lg text-muted-foreground">5-minute sweep when you check into a rental.</p>
        </div>

        <Card className="mb-6 bg-primary/5 border-primary/20">
          <CardContent className="pt-6">
            <h2 className="font-bold mb-2">The reality</h2>
            <p className="text-sm">Hidden cameras in Airbnbs and short-term rentals are uncommon but documented. Most are dishonest hosts pointing cameras at "outdoor" areas that include private decks. A 5-minute sweep on arrival catches the obvious ones.</p>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Step 1 — Look at common hiding spots</h2>
            <p className="text-sm mb-2">Most hidden cameras are placed where they get a clear view of:</p>
            <ul className="list-disc pl-5 space-y-1 text-sm">
              <li>The bed.</li>
              <li>The shower area (through the bathroom door).</li>
              <li>The living room couch.</li>
            </ul>
            <p className="text-sm mt-3 mb-2">Things to inspect:</p>
            <ul className="list-disc pl-5 space-y-1 text-sm">
              <li><strong>Smoke detectors</strong> — especially with a small visible lens. Look closely at the small holes.</li>
              <li><strong>Wall clocks, picture frames, mirrors with frames</strong>.</li>
              <li><strong>Air fresheners, alarm clocks, USB chargers</strong> placed in odd spots.</li>
              <li><strong>Small holes in walls, art, or curtains</strong> where there\'s no obvious reason.</li>
              <li><strong>Anything plugged in but pointed at the bed.</strong></li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Step 2 — Use your phone\'s camera</h2>
            <p className="text-sm mb-2">Most hidden cameras have an infrared (IR) light to see in the dark. Your phone\'s front camera CAN see IR. Test:</p>
            <ol className="list-decimal pl-5 space-y-1 text-sm">
              <li>Turn off all room lights — make it dark.</li>
              <li>Open your phone\'s camera and switch to the SELFIE/FRONT camera.</li>
              <li>Slowly pan the room. Look at the screen.</li>
              <li>An IR light shows up on screen as a faint pinkish-purple dot. Real cameras and motion sensors won\'t — they shouldn\'t glow on phone camera in IR view.</li>
            </ol>
            <p className="text-sm mt-2 text-muted-foreground">Note: Apple iPhone front cameras filter IR, so this works better on Android. For iPhone, use the back camera with a TV remote pointed at it as a test (you should see a glow when you press buttons).</p>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Step 3 — Check the Wi-Fi (Android)</h2>
            <p className="text-sm mb-2">Apps like <strong>Fing</strong> (free) scan a Wi-Fi network for connected devices. Sometimes you spot a "camera" device the host didn\'t mention. iOS\'s privacy makes this less effective; Android works fine.</p>
            <p className="text-sm">Note: Modern hidden cameras can be 4G/cellular and not on Wi-Fi at all. So this finds some, not all.</p>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Step 4 — Dedicated detector apps and devices</h2>
            <ul className="list-disc pl-5 space-y-1 text-sm">
              <li><strong>Hidden Camera Detector apps</strong> — most are gimmicky. Skip the paid ones.</li>
              <li><strong>RF detector wand ($20-40 on Amazon)</strong> — actually works. Beeps near radio-frequency-emitting devices. Best dedicated tool for frequent travelers.</li>
              <li><strong>Spy-Hawk PRO</strong> or similar professional detectors ($150-300) — overkill for most.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">If you find something</h2>
            <ol className="list-decimal pl-5 space-y-1 text-sm">
              <li>Don\'t move or destroy it.</li>
              <li>Take photos / video as evidence.</li>
              <li>Leave the property if you feel unsafe.</li>
              <li>Contact Airbnb / VRBO support — they take this very seriously.</li>
              <li>Call local police.</li>
              <li>Filing a police report often gets a refund and the host removed.</li>
            </ol>
          </CardContent>
        </Card>

        <Card className="bg-muted/40">
          <CardContent className="pt-6">
            <h3 className="font-bold mb-2">What\'s legal</h3>
            <p className="text-sm text-muted-foreground">Airbnb and VRBO require hosts to DISCLOSE any cameras in the listing. Hidden cameras = ban. Cameras inside the home (even if disclosed) are not allowed in private spaces (bedrooms, bathrooms). Outdoor cameras must be disclosed.</p>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}

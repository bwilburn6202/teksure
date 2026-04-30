import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { ZoomIn } from 'lucide-react';

export default function IphoneMagnifierTutorial() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="iPhone Magnifier App Tutorial for Seniors | TekSure" description="Use your iPhone as a digital magnifying glass. Built-in feature for seniors with vision issues." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <ZoomIn className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">iPhone Magnifier</h1>
          <p className="text-lg text-muted-foreground">Your phone is a magnifying glass.</p>
        </div>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">What it does</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Built-in magnifying glass on every iPhone.</li>
              <li>Read tiny menus, labels, prescriptions.</li>
              <li>Improve contrast for low-vision needs.</li>
              <li>Add filters — green/red/blue color modes.</li>
              <li>Freeze frame to study image.</li>
              <li>Free, already on your phone.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">How to find it</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Swipe down on home screen — search &quot;Magnifier.&quot;</li>
              <li>Or add to Control Center: Settings → Control Center → Magnifier.</li>
              <li>Now swipe down from top right — tap magnifier icon.</li>
              <li>Or triple-click side button (set in Accessibility).</li>
              <li>Open Magnifier app icon if added to home screen.</li>
              <li>Multiple ways to access.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Using it well</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Slide bar to zoom in.</li>
              <li>Tap lightning icon for flashlight.</li>
              <li>Tap freeze button to stop image moving.</li>
              <li>Try color filters for easier reading.</li>
              <li>Take photo to keep magnified image.</li>
              <li>Hold steady or rest on table.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Best uses for seniors</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Read pill bottle labels.</li>
              <li>Restaurant menus in dim light.</li>
              <li>Tiny serial numbers on devices.</li>
              <li>Read tags on clothing.</li>
              <li>Read fine print on contracts.</li>
              <li>See small details in photos.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Detection Mode (advanced)</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>iOS 16+ feature in Magnifier app.</li>
              <li>People Detection — alerts when someone near.</li>
              <li>Door Detection — finds doors + reads signs.</li>
              <li>Image Descriptions — speaks what camera sees.</li>
              <li>Designed for low-vision users.</li>
              <li>Requires iPhone Pro models for full features.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Android equivalent</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Settings → Accessibility → Magnification.</li>
              <li>Triple-tap to zoom anywhere.</li>
              <li>Or download &quot;Magnifying Glass&quot; app from Play Store.</li>
              <li>Built-in zoom on most Android devices.</li>
              <li>Pinch to zoom in apps.</li>
              <li>Samsung has &quot;Magnifier&quot; in Galaxy Apps.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="bg-muted/40">
          <CardContent className="pt-6">
            <h3 className="font-bold mb-2">Add to Control Center today</h3>
            <p className="text-sm text-muted-foreground">If you have an iPhone, take 30 seconds right now: Settings → Control Center → tap green plus next to &quot;Magnifier.&quot; Now any time you need to read tiny print, swipe down from top right and tap the magnifying glass icon. This single setup eliminates the need for separate magnifying glasses around the house. Many seniors don&apos;t know this feature exists.</p>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}

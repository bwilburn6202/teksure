import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { ZoomIn } from 'lucide-react';

const APPS = [
  { name: 'iPhone Magnifier (built-in)', cost: 'FREE', best: 'iOS Magnifier app — control center, then tap. 10x zoom + flashlight + filters + freeze frame.', good: 'Best built-in.' },
  { name: 'Android Magnifier', cost: 'FREE', best: 'Settings → Accessibility → Magnification. Triple-tap to zoom anywhere.', good: 'Best for Android.' },
  { name: 'Seeing AI (Microsoft)', cost: 'FREE', best: 'Reads text aloud. Identifies products, money, faces, scenes. iPhone only.', good: 'Best for low vision.' },
  { name: 'Be My Eyes', cost: 'FREE', best: 'Volunteer or AI helper for blind/low-vision users. Connects via video call.', good: 'Best for blindness.' },
  { name: 'Envision Glasses (separate)', cost: '$1,800-3,500', best: 'AI smart glasses that read, identify, narrate. For severe low vision.', good: 'Best dedicated device.' },
];

export default function MagnifierAppPicks() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Magnifier Apps for Low Vision | TekSure" description="Built-in iPhone Magnifier, Seeing AI, Be My Eyes. Plain-English picks for free magnifier apps that beat any handheld magnifying glass." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <ZoomIn className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Magnifier Apps</h1>
          <p className="text-lg text-muted-foreground">Phone is your new magnifying glass.</p>
        </div>

        <div className="space-y-3 mb-6">
          {APPS.map(a => (
            <Card key={a.name}>
              <CardContent className="pt-6">
                <div className="flex justify-between items-baseline mb-1">
                  <h3 className="font-bold text-lg">{a.name}</h3>
                  <span className="text-sm font-semibold text-primary">{a.cost}</span>
                </div>
                <p className="text-sm">{a.best}</p>
                <p className="text-sm text-muted-foreground">{a.good}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">iPhone Magnifier setup</h2>
            <ol className="list-decimal pl-5 space-y-2 text-sm">
              <li>Open Magnifier app (already on iPhone — search "Magnifier" on home screen).</li>
              <li>Or add to Control Center: Settings → Control Center → Magnifier.</li>
              <li>Triple-press side button as accessibility shortcut.</li>
              <li>Slider zooms 1x to 10x.</li>
              <li>Tap flashlight for low-light reading.</li>
              <li>Tap freeze button to freeze image — read at your own pace.</li>
              <li>Color filters help with sensitivity (yellow on black, etc.).</li>
            </ol>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Seeing AI — for vision loss</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Aim phone at any text — instantly reads it aloud.</li>
              <li>Reads documents (handles handwritten too).</li>
              <li>Identifies US currency by denomination.</li>
              <li>Describes scenes: "A blue couch with a cat sleeping on it."</li>
              <li>Reads barcodes on grocery items.</li>
              <li>Identifies family members&apos; faces (after training).</li>
              <li>Free, made by Microsoft.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Be My Eyes — volunteer help</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Free app. Tap "Call a Volunteer".</li>
              <li>Random sighted volunteer from millions worldwide answers your video call.</li>
              <li>You point camera at: medication label, recipe, mail, etc.</li>
              <li>Volunteer reads it.</li>
              <li>Average wait: 30 seconds.</li>
              <li>"Be My AI" — free AI alternative if no volunteer needed.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="bg-muted/40">
          <CardContent className="pt-6">
            <h3 className="font-bold mb-2">When to see a low-vision specialist</h3>
            <p className="text-sm text-muted-foreground">If you&apos;re struggling daily — see an optometrist who specializes in low vision. They can prescribe specialty glasses, electronic magnifiers (CCTVs $300-3,000), or refer to occupational therapy. Medicare and most insurance covers low-vision evaluations. Find specialist at LowVision.org.</p>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}

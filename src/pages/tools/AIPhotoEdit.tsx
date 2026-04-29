import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Sparkles } from 'lucide-react';

const APPS = [
  { name: 'iPhone Photos Clean Up (iOS 18+)', cost: 'FREE', best: 'Built into iPhone Photos. Tap unwanted objects → vanish. Magical.', good: 'Best built-in.' },
  { name: 'Google Photos Magic Eraser', cost: 'FREE', best: 'Same idea on Android + iPhone. Free with Google account.', good: 'Best for Android.' },
  { name: 'Adobe Lightroom Mobile', cost: 'FREE / $10/mo Premium', best: 'Pro-grade photo editor. Restore old photos. Premium AI features.', good: 'Best for serious photos.' },
  { name: 'Photoshop Express', cost: 'FREE', best: 'Quick edits. Fix old / damaged scanned photos.', good: 'Best for repairs.' },
  { name: 'Remini', cost: '$5/wk subscription', best: 'AI restores blurry old photos. Good for ancestor photos.', good: 'Best for old photo restoration.' },
];

export default function AIPhotoEdit() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="AI Photo Editing for Seniors | TekSure" description="Apple Clean Up, Google Magic Eraser, Remini. Plain-English picks for AI photo editing — fix old photos magically." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Sparkles className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">AI Photo Editing</h1>
          <p className="text-lg text-muted-foreground">Magic on photos.</p>
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
            <h2 className="font-bold text-xl mb-3">Magic uses</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Remove tourist behind grandkids in vacation photo.</li>
              <li>Erase trash bin from beach shot.</li>
              <li>Fix red eye on old photos.</li>
              <li>Restore faded color on 1970s photos.</li>
              <li>Remove ex-spouse from family photo (yes, common).</li>
              <li>Sharpen blurry phone photos.</li>
              <li>Animate old photos (Remini, MyHeritage).</li>
              <li>Colorize black-and-white ancestor photos.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">iPhone Clean Up walkthrough</h2>
            <ol className="list-decimal pl-5 space-y-2 text-sm">
              <li>Open Photos. Pick photo to edit.</li>
              <li>Tap "Edit" (top right).</li>
              <li>Tap "Clean Up" icon.</li>
              <li>Brush over object you want gone.</li>
              <li>Apple AI removes + fills in background.</li>
              <li>Save (replaces original).</li>
              <li>Need iPhone 15 Pro+ or newer.</li>
            </ol>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Restore old photos</h2>
            <ol className="list-decimal pl-5 space-y-2 text-sm">
              <li>Scan old photo (Apple Notes scanner OR PhotoScan app).</li>
              <li>Open in Remini / Adobe Photoshop Express.</li>
              <li>Tap "Enhance" or "AI Restore".</li>
              <li>Wait 10-30 seconds.</li>
              <li>Faded → vibrant. Blurry → clear.</li>
              <li>Save high-res version.</li>
              <li>Print + give to family.</li>
            </ol>
          </CardContent>
        </Card>

        <Card className="bg-muted/40">
          <CardContent className="pt-6">
            <h3 className="font-bold mb-2">AI animation feels weird</h3>
            <p className="text-sm text-muted-foreground">MyHeritage Deep Nostalgia animates old photos — moves their face. Some find it magical, some find it unsettling. Try with permission. Best for distant ancestors. Not always appropriate for recent loved ones.</p>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}

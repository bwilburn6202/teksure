import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Palette } from 'lucide-react';

const APPS = [
  { name: 'Procreate (iPad only)', cost: '$13 once', best: 'Best digital drawing app. One-time purchase. Industrial-strength but easy to start.', good: 'Pair with Apple Pencil for the full experience.' },
  { name: 'Affinity Photo / Designer', cost: '$70-90 once', best: 'Photoshop / Illustrator alternative. One-time purchase, no subscription.', good: 'Best Photoshop alternative for serious editing.' },
  { name: 'Adobe Lightroom', cost: '$10-12/mo', best: 'Industry standard for photo editing. Cloud sync between phone and computer.', good: 'Worth it for serious photographers.' },
  { name: 'Photopea (free, browser)', cost: 'FREE', best: 'Photoshop in your browser. Free. No install. Open .PSD files.', good: 'Best free Photoshop alternative.' },
  { name: 'GIMP', cost: 'FREE', best: 'Free Photoshop alternative for desktop. Steep learning curve.', good: 'Genuinely capable, just looks dated.' },
  { name: 'Canva', cost: 'FREE; $13/mo Pro', best: 'Easy graphic design — birthday cards, posters, social media, family newsletters.', good: 'Templates do most of the work.' },
  { name: 'Snapseed (free)', cost: 'FREE', best: 'Powerful free photo editor on phone. Made by Google.', good: 'Best free phone photo editor.' },
];

export default function DrawingPhotoEditingApps() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Drawing & Photo Editing Apps — Procreate, Lightroom, Free Options | TekSure" description="Edit photos, draw, design cards. Plain-English picks for the best drawing and photo apps — paid and free." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Palette className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Drawing & Photo Editing Apps</h1>
          <p className="text-lg text-muted-foreground">From color-by-number to professional retouching.</p>
        </div>

        <div className="space-y-3 mb-6">
          {APPS.map(a => (
            <Card key={a.name}>
              <CardContent className="pt-6">
                <div className="flex justify-between items-baseline mb-1">
                  <h3 className="font-bold text-lg">{a.name}</h3>
                  <span className="text-sm font-semibold text-primary">{a.cost}</span>
                </div>
                <p className="text-sm mb-1">{a.best}</p>
                <p className="text-sm text-muted-foreground">{a.good}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">For absolute beginners</h2>
            <ul className="list-disc pl-5 space-y-1 text-sm">
              <li><strong>Apple Photos / Google Photos</strong> — built-in editing. Auto-enhance, crop, light tweaks. Often enough.</li>
              <li><strong>Snapseed</strong> — free, good selective editing without learning curve.</li>
              <li><strong>Canva</strong> — drag-and-drop. Make a Christmas card with family photos in 10 minutes.</li>
              <li><strong>Paint by Numbers, Happy Color (free)</strong> — relaxing color-by-number on iPad/phone.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">For serious photo editing</h2>
            <ul className="list-disc pl-5 space-y-1 text-sm">
              <li><strong>Adobe Lightroom</strong> — industry standard. $10/mo.</li>
              <li><strong>Affinity Photo</strong> — $70 once, no subscription. Excellent.</li>
              <li><strong>Apple Photos\' built-in tools</strong> — improved enormously. Free.</li>
              <li><strong>Pixelmator Pro (Mac)</strong> — $40 once, very polished.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="bg-muted/40">
          <CardContent className="pt-6">
            <h3 className="font-bold mb-2">Free YouTube tutorials beat paid courses</h3>
            <p className="text-sm text-muted-foreground">Whatever app you pick — search YouTube for "[app name] tutorial for beginners". Hundreds of free hours of teaching. Watch 30 minutes, then play. Better than any paid course for first-timers.</p>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}

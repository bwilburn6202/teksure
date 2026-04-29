import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Tablet } from 'lucide-react';

const PICKS = [
  { name: 'iPad 10th gen', cost: '$349', best: 'Best mainstream tablet. Use for years.', good: 'Best overall.' },
  { name: 'iPad mini', cost: '$499', best: 'Smaller + lighter. Good for arthritic hands.', good: 'Best small.' },
  { name: 'Amazon Fire HD 10', cost: '$140-200', best: 'Cheap. Works for video calls + reading.', good: 'Best budget.' },
  { name: 'Samsung Galaxy Tab A9+', cost: '$220', best: 'Android, mid-range.', good: 'Best Android.' },
  { name: 'GrandPad', cost: '$80 + $40/mo', best: 'Senior-specific. Locked-down.', good: 'Best senior-only.' },
];

export default function TabletForSeniorsBasics() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Tablet Basics for Seniors | TekSure" description="Pick + use a tablet. Plain-English guide for senior first tablets." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Tablet className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Tablet for Seniors</h1>
          <p className="text-lg text-muted-foreground">Big screen. Lighter than laptop. Easier than phone.</p>
        </div>

        <div className="space-y-3 mb-6">
          {PICKS.map(p => (
            <Card key={p.name}>
              <CardContent className="pt-6">
                <div className="flex justify-between items-baseline mb-1">
                  <h3 className="font-bold text-lg">{p.name}</h3>
                  <span className="text-sm font-semibold text-primary">{p.cost}</span>
                </div>
                <p className="text-sm">{p.best}</p>
                <p className="text-sm text-muted-foreground">{p.good}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Why tablet over laptop</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Touchscreen — more intuitive.</li>
              <li>Lighter, portable.</li>
              <li>No keyboard / mouse confusion.</li>
              <li>Battery 8-12 hrs.</li>
              <li>Larger text easier on eyes.</li>
              <li>Fewer scams (no Windows pop-ups).</li>
              <li>Cheaper than laptop.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Top senior uses</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li><strong>Video calls</strong> — FaceTime, Zoom, Skype.</li>
              <li><strong>News + weather</strong>.</li>
              <li><strong>Email</strong>.</li>
              <li><strong>Photos</strong> — share family albums.</li>
              <li><strong>Library books</strong> — Libby, Kindle.</li>
              <li><strong>Streaming</strong> — Netflix, Hulu.</li>
              <li><strong>Brain games</strong> — solitaire, sudoku.</li>
              <li><strong>Recipes</strong> — Allrecipes app.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Senior-friendly settings</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Increase text size — Settings → Display.</li>
              <li>Bold text on.</li>
              <li>Dark mode if eyes hurt.</li>
              <li>Disable auto-rotate (frustrating).</li>
              <li>One-tap (vs double-tap) when possible.</li>
              <li>Increase touch sensitivity.</li>
              <li>VoiceOver if needed (reads aloud).</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Accessories</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li><strong>Stand</strong> — hands-free viewing.</li>
              <li><strong>Stylus</strong> — easier than fingertip for some.</li>
              <li><strong>Bluetooth keyboard</strong> — for typing emails.</li>
              <li><strong>Stylus + iPad</strong> — Apple Pencil for writing.</li>
              <li><strong>Cover/case</strong> — protects from drops.</li>
              <li><strong>Larger charger cable</strong> — less fumbling.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="bg-muted/40">
          <CardContent className="pt-6">
            <h3 className="font-bold mb-2">iPad with Assistive Access (free)</h3>
            <p className="text-sm text-muted-foreground">iOS 17+ has Assistive Access — simplifies iPad to 5 apps senior chooses. Big text, simple icons. Settings → Accessibility → Assistive Access. FREE simplification. Family member sets up once. Senior just sees 5 large icons. Works like GrandPad without monthly fee.</p>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}

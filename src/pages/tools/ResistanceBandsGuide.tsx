import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Activity } from 'lucide-react';

export default function ResistanceBandsGuide() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Resistance Bands for Seniors | TekSure" description="Best resistance bands, exercises, and senior modifications. Plain-English guide. Build strength gently." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Activity className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Resistance Bands Guide</h1>
          <p className="text-lg text-muted-foreground">Strength training. Joint-friendly. $30.</p>
        </div>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Best bands</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li><strong>Whatafit / Te-Rich set</strong> ($30) — 5 tube bands with handles + door anchor + ankle straps. Most complete.</li>
              <li><strong>Theraband (loop)</strong> ($10) — flat loops, classic PT brand. Most senior PTs use these.</li>
              <li><strong>Resistance loop bands</strong> — small mini-loops for hips/glutes.</li>
              <li><strong>Rubberbanditz</strong> — heavy-duty, expensive but lasts forever.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Top 10 senior-friendly exercises</h2>
            <ol className="list-decimal pl-5 space-y-2 text-sm">
              <li><strong>Bicep curl</strong> — stand on band, pull up.</li>
              <li><strong>Overhead press</strong> — band under feet, press up.</li>
              <li><strong>Standing row</strong> — anchor in door, pull toward chest.</li>
              <li><strong>Chest press</strong> — anchor behind, push forward.</li>
              <li><strong>Lat pull-down</strong> — anchor high, pull down.</li>
              <li><strong>Squat</strong> — band under feet, hold at shoulders.</li>
              <li><strong>Glute bridge</strong> — band around thighs, lift hips.</li>
              <li><strong>Side step</strong> — loop band around ankles, sidestep.</li>
              <li><strong>Tricep extension</strong> — anchor up, push down.</li>
              <li><strong>Standing twist</strong> — band anchored side, twist away.</li>
            </ol>
            <p className="text-sm mt-3">Each: 10-15 reps × 2 sets. 15-20 min total.</p>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Why bands beat dumbbells for seniors</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Resistance throughout entire motion (not just lifting).</li>
              <li>Multiple resistance levels in one set.</li>
              <li>Light enough to start. Heavy enough to grow.</li>
              <li>No risk of dropping on toe.</li>
              <li>Travel friendly — fit in suitcase.</li>
              <li>$30 covers all upper + lower body.</li>
              <li>Easy on shoulders, knees.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Free YouTube workouts</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li><strong>SilverSneakers band workouts</strong> — free.</li>
              <li><strong>More Life Health Seniors</strong> — Mike Hines, free, professional PT.</li>
              <li><strong>Eldergym</strong> — Doug Schrift PT, senior-specific.</li>
              <li><strong>HASfit</strong> — full sessions with senior modifications.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="bg-muted/40">
          <CardContent className="pt-6">
            <h3 className="font-bold mb-2">Check bands monthly</h3>
            <p className="text-sm text-muted-foreground">Bands wear out — small cuts, dry-out. Replace every 12-18 months for safety. A snap during use can hurt. $30/year is cheap insurance.</p>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}

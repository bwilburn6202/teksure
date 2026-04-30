import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Dumbbell } from 'lucide-react';

export default function ResistanceBandsForSeniors() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Resistance Bands for Senior Strength | TekSure" description="Build strength safely with bands. Senior resistance band guide and apps." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Dumbbell className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Resistance Bands</h1>
          <p className="text-lg text-muted-foreground">Safe senior strength.</p>
        </div>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Why bands</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>Joint-friendly resistance.</li><li>$15-$30 set.</li><li>Travel anywhere.</li><li>No weights to drop.</li><li>Different strengths.</li><li>Senior-safe.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Best beginner sets</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>Bodylastics — $40.</li><li>WODFitters loops.</li><li>Theraband — PT favorite.</li><li>Light, medium, heavy.</li><li>Door anchor included.</li><li>Senior starter.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Free senior apps</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>SilverSneakers Go.</li><li>Bowflex Trainer.</li><li>YouTube — Senior Shape Fitness.</li><li>HASfit — free.</li><li>Eldergym Fitness.</li><li>Big senior community.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Senior exercises</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>Bicep curls — seated.</li><li>Lateral raises.</li><li>Rows — door anchor.</li><li>Leg extensions.</li><li>Glute bridges.</li><li>Total body workout.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Safety</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>Inspect for tears.</li><li>Check anchor secure.</li><li>Never near eyes.</li><li>Slow controlled.</li><li>Wear shoes.</li><li>Stop if hurt.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Routine</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>2-3 times per week.</li><li>15-20 minutes.</li><li>8-12 reps each.</li><li>Rest day between.</li><li>Build strength + bone.</li><li>Slow + steady.</li></ul></CardContent></Card>
        <Card className="bg-muted/40"><CardContent className="pt-6"><h3 className="font-bold mb-2">$30 = senior strength foundation</h3><p className="text-sm text-muted-foreground">$30 resistance band set + free YouTube videos = complete senior strength program. Builds bone density, prevents falls, improves balance. Many seniors strong at 80+ thanks to bands. Travel with them. Use daily. Best low-cost senior fitness investment.</p></CardContent></Card>
      </main>
      <Footer />
    </div>
  );
}

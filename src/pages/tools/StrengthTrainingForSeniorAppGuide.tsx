import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Dumbbell } from 'lucide-react';

export default function StrengthTrainingForSeniorAppGuide() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Strength Training Apps for Seniors | TekSure" description="Free strength workout apps for older adults." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Dumbbell className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Strength Apps</h1>
          <p className="text-lg text-muted-foreground">Senior strong + healthy.</p>
        </div>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">SilverSneakers Go</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>Free with Medicare Advantage.</li><li>Senior-specific.</li><li>Beginner workouts.</li><li>Strength + balance.</li><li>Senior focus.</li><li>Worth checking.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Bowflex Trainer free</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>Free workouts.</li><li>Resistance band routines.</li><li>Senior friendly.</li><li>Bodyweight too.</li><li>iPhone + Android.</li><li>Free.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Why senior strength</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>Muscle loss with age.</li><li>Bone density.</li><li>Fall prevention.</li><li>Senior independence.</li><li>2x/week minimum.</li><li>Doctor-recommended.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Equipment</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>$30 resistance bands.</li><li>$60 dumbbells 5+8 lb.</li><li>Senior adequate start.</li><li>Or bodyweight.</li><li>YouTube guidance.</li><li>Free + simple.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Eldergym YouTube</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>Free senior strength videos.</li><li>Patient instructor.</li><li>Modifications shown.</li><li>Senior trusted source.</li><li>Free always.</li><li>Daily routines.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Form first</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>Light weight.</li><li>Slow movement.</li><li>Senior injury prevention.</li><li>Build to heavier.</li><li>Spotter helpful.</li><li>Watch YouTube form videos.</li></ul></CardContent></Card>
        <Card className="bg-muted/40"><CardContent className="pt-6"><h3 className="font-bold mb-2">Free Eldergym + bands = senior strength</h3><p className="text-sm text-muted-foreground">Free Eldergym YouTube + $30 resistance bands = senior at-home strength training. SilverSneakers Go free if Medicare Advantage. 2x/week prevents muscle loss + falls. Form first, slow, light weight. Bone density preserved. Senior independence priority.</p></CardContent></Card>
      </main>
      <Footer />
    </div>
  );
}

import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { GitBranch } from 'lucide-react';

export default function BalanceTrainingForFallPrevention() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Balance Training for Fall Prevention | TekSure" description="Daily balance exercises to prevent senior falls. Apps and routines." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <GitBranch className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Balance Training</h1>
          <p className="text-lg text-muted-foreground">Prevent senior falls.</p>
        </div>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Why balance matters</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>1 in 4 seniors fall yearly.</li><li>Falls = #1 senior injury.</li><li>Balance trainable at any age.</li><li>10 minutes daily helps.</li><li>Independence preserver.</li><li>Hospital trips reducer.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Daily exercises</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>Single-leg stand — 30 sec.</li><li>Heel-to-toe walking.</li><li>Tai chi flow.</li><li>Stand from chair no hands.</li><li>Marching in place.</li><li>Hold counter for safety.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Apps + classes</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>StandStrong app.</li><li>BalancePoint Therapy.</li><li>YouTube — Eldergym.</li><li>Tai chi videos.</li><li>SilverSneakers BOOM Mind.</li><li>Senior PT clinics.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Equipment</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>Wobble cushion $20.</li><li>Foam pad.</li><li>BOSU ball — advanced.</li><li>Use sturdy chair.</li><li>Counter for support.</li><li>$30 setup.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Tai chi</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>Best balance training.</li><li>Free YouTube classes.</li><li>Tai Chi for Arthritis.</li><li>Senior-friendly pace.</li><li>Slow flowing movements.</li><li>Mind + body.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Doctor consult</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>If unsteady — see PT.</li><li>Insurance often covers.</li><li>Senior assessment.</li><li>Custom plan.</li><li>Reduce med list if dizzy.</li><li>Balance can improve.</li></ul></CardContent></Card>
        <Card className="bg-muted/40"><CardContent className="pt-6"><h3 className="font-bold mb-2">10 minutes daily = no falls</h3><p className="text-sm text-muted-foreground">Studies show 10 minutes daily balance work reduces senior falls by 30%. Free YouTube routines. Standing on one leg while brushing teeth = quick win. Tai chi best long-term. Falls preventable, not inevitable. Don&apos;t skip — independence is on the line.</p></CardContent></Card>
      </main>
      <Footer />
    </div>
  );
}

import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Sparkles } from 'lucide-react';

export default function SeniorMassageGuns() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Massage Guns for Seniors — TekSure" description="Best massage guns for sore muscles — Theragun, Hyperice, budget picks." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Sparkles className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Massage Guns for Seniors</h1>
          <p className="text-lg text-muted-foreground">Sore muscles. Faster recovery.</p>
        </div>
        <div className="space-y-4">
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Theragun Mini</h2><p>$200. Quiet. Compact. Easy on hands.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Hyperice Hypervolt</h2><p>$200. Most powerful. Multiple speeds.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Renpho R3</h2><p>$70. Budget. Surprisingly good.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">When to use</h2><ul className="list-disc pl-5 space-y-1 text-sm"><li>Sore neck/shoulders</li><li>After walks/exercise</li><li>Lower back tension</li><li>Calf cramps</li></ul></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">When to AVOID</h2><p>Don&apos;t use on bones, throat, blood thinners, recent surgery, varicose veins.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Ask your doctor</h2><p>Especially if you take blood thinners or have heart conditions.</p></CardContent></Card>
          <Card className="bg-muted/40"><CardContent className="pt-6"><p className="text-sm">Quick Tip: Lowest setting. 30 seconds per area. Less is more.</p></CardContent></Card>
        </div>
      </main>
      <Footer />
    </div>
  );
}

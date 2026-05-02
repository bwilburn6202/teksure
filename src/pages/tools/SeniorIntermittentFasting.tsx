import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Clock } from 'lucide-react';

export default function SeniorIntermittentFasting() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Intermittent Fasting Apps for Seniors — TekSure" description="Intermittent fasting for seniors — Zero, Fastic, safety considerations." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Clock className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Intermittent Fasting</h1>
          <p className="text-lg text-muted-foreground">Safe for seniors? Maybe.</p>
        </div>
        <div className="space-y-4">
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Zero</h2><p>FREE basic. Most popular fasting tracker.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Fastic</h2><p>FREE basic. More social features.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">12:12 method</h2><p>Easy senior start. 12 hours fasting (overnight) + 12 eating window.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">16:8 method</h2><p>Skip breakfast. 8-hour eating window. Some senior research benefits.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">SAFETY</h2><ul className="list-disc pl-5 space-y-1 text-sm"><li>Talk to doctor first</li><li>Diabetes meds need adjustment</li><li>Underweight seniors should avoid</li><li>Stop if dizzy or weak</li></ul></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Drink water</h2><p>Black coffee, tea, water are okay during fast.</p></CardContent></Card>
          <Card className="bg-muted/40"><CardContent className="pt-6"><p className="text-sm">Quick Tip: Many seniors find 12:12 plenty of benefit without strict 16:8.</p></CardContent></Card>
        </div>
      </main>
      <Footer />
    </div>
  );
}

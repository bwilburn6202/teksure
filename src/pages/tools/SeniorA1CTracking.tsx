import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Activity } from 'lucide-react';

export default function SeniorA1CTracking() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="A1C Tracking for Seniors — TekSure" description="Track diabetes long-term — A1C goals, home tests, doctor coordination." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Activity className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">A1C Tracking</h1>
          <p className="text-lg text-muted-foreground">Long-term diabetes control.</p>
        </div>
        <div className="space-y-4">
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">A1C goal</h2><p>Most seniors: under 7%. Some 7.5-8% if frail. Doctor sets your goal.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Home test</h2><p>$30-$60. A1cNow. Quarterly check between doctor visits.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Lab test</h2><p>$30-$80 if no insurance. Free with Medicare quarterly.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Track in app</h2><p>Apple Health, mySugr, Glucose Buddy. Plot trends over time.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">CGM = real-time A1C</h2><p>Continuous monitor estimates A1C anytime. Live diabetes management.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Lower A1C</h2><p>Diet, exercise, meds, sleep. Each 1% drop = 35% fewer complications.</p></CardContent></Card>
          <Card className="bg-muted/40"><CardContent className="pt-6"><p className="text-sm">Quick Tip: A1C every 3 months. Catch trends before complications.</p></CardContent></Card>
        </div>
      </main>
      <Footer />
    </div>
  );
}

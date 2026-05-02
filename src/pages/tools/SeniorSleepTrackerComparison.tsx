import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Moon } from 'lucide-react';

export default function SeniorSleepTrackerComparison() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Sleep Tracker Comparison for Seniors — TekSure" description="Compare sleep trackers — Eight Sleep, Withings Sleep, Apple Watch, Oura." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Moon className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Sleep Tracker Comparison</h1>
          <p className="text-lg text-muted-foreground">Pick the right one.</p>
        </div>
        <div className="space-y-4">
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Withings Sleep Mat</h2><p>$130. Slips under mattress. No watch needed. Detects sleep apnea.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Apple Watch</h2><p>$249+. Tracks sleep stages. Heart rate. Wear watch to bed.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Oura Ring</h2><p>$300 + $6/month. Most accurate ring. Premium body data.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Eight Sleep Pod</h2><p>$2,500+. Mattress topper. Cools/warms. Tracks everything.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Phone-only apps</h2><p>FREE. Sleep Cycle, AutoSleep. Less accurate but no extra device.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Watch out for sleep apnea</h2><p>If snoring + tired all day: ask doctor about sleep study.</p></CardContent></Card>
          <Card className="bg-muted/40"><CardContent className="pt-6"><p className="text-sm">Quick Tip: Withings Mat is best for seniors who don&apos;t want to wear devices.</p></CardContent></Card>
        </div>
      </main>
      <Footer />
    </div>
  );
}

import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Moon } from 'lucide-react';

export default function SeniorSleepTracking() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Sleep Tracking Apps for Seniors — TekSure" description="Track sleep on phone or watch — improve rest and spot problems." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Moon className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Sleep Tracking</h1>
          <p className="text-lg text-muted-foreground">Better rest. Earlier diagnosis of issues.</p>
        </div>
        <div className="space-y-4">
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Apple Health (iPhone)</h2><p>Free. With Apple Watch, tracks deep sleep automatically.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Google Fit</h2><p>Free. With Pixel Watch or Fitbit, tracks stages and snoring.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Sleep Cycle</h2><p>Free trial. Phone on nightstand — listens to breathing. Wakes you at light sleep.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">SnoreLab</h2><p>Free. Records snoring overnight. Detects possible sleep apnea.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Why track?</h2><p>Sleep apnea is undiagnosed in 80% of seniors. Tracking is the first step.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Share with doctor</h2><p>Show 2 weeks of data. Loud snoring + tiredness = ask about a sleep study.</p></CardContent></Card>
          <Card className="bg-muted/40"><CardContent className="pt-6"><p className="text-sm">Quick Tip: Same bedtime every night beats any app. Aim for 7-8 hours.</p></CardContent></Card>
        </div>
      </main>
      <Footer />
    </div>
  );
}

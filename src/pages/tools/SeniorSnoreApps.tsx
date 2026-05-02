import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Volume2 } from 'lucide-react';

export default function SeniorSnoreApps() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Snore Tracking Apps for Seniors — TekSure" description="Detect snoring and sleep apnea — SnoreLab, SnoreClock, sleep apnea apps." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Volume2 className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Snore Tracking Apps</h1>
          <p className="text-lg text-muted-foreground">Catch sleep apnea early.</p>
        </div>
        <div className="space-y-4">
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">SnoreLab</h2><p>FREE. Records snoring. Plays back loudest moments. Most popular.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">SnoreClock</h2><p>FREE. Snore detection. Doesn&apos;t need to be charging.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">SleepWatch</h2><p>FREE basic. Apple Watch app. Tracks heart, sleep stages, snoring.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Why important</h2><p>80% of seniors with sleep apnea are undiagnosed. Apps catch it.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Show doctor</h2><p>Email recordings to your doctor. Real evidence helps diagnosis.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Anti-snore devices</h2><p>If diagnosed: CPAP machine. Most Medicare plans cover.</p></CardContent></Card>
          <Card className="bg-muted/40"><CardContent className="pt-6"><p className="text-sm">Quick Tip: Track for 1 week. Pattern matters more than one bad night.</p></CardContent></Card>
        </div>
      </main>
      <Footer />
    </div>
  );
}

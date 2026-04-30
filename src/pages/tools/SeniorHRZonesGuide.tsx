import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { HeartPulse } from 'lucide-react';

export default function SeniorHRZonesGuide() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Senior Heart Rate Zones Guide | TekSure" description="Understand heart rate zones for senior fitness." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <HeartPulse className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Heart Rate Zones</h1>
          <p className="text-lg text-muted-foreground">Senior fitness training.</p>
        </div>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Calculate max</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>220 minus age.</li><li>70 yr — 150 max.</li><li>Senior estimate.</li><li>Trackers calculate.</li><li>Personalized formula better.</li><li>Free.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Zones</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>Z1 50-60% — easy.</li><li>Z2 60-70% — fat burn.</li><li>Z3 70-80% — cardio.</li><li>Z4 80-90% — peak.</li><li>Z5 90%+ — sprint.</li><li>Senior Z2 most.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Senior recommendation</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>Z2 most workouts.</li><li>Conversational pace.</li><li>Heart healthy.</li><li>Z3 occasional.</li><li>Skip Z4-Z5 mostly.</li><li>Doctor-approved.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Apple Watch zones</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>Settings → Heart.</li><li>Customize zones.</li><li>Real-time on workout.</li><li>Senior knows zone.</li><li>Free.</li><li>Built-in.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Resting HR</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>Lower = fitter.</li><li>60-100 normal.</li><li>Senior track over weeks.</li><li>Drops with training.</li><li>Health indicator.</li><li>Free.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">When to see doctor</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>Resting HR 100+.</li><li>Sudden changes.</li><li>Irregular rhythms.</li><li>Senior concerning patterns.</li><li>Apple Watch ECG check.</li><li>Don&apos;t ignore.</li></ul></CardContent></Card>
        <Card className="bg-muted/40"><CardContent className="pt-6"><h3 className="font-bold mb-2">Z2 conversational pace = senior best</h3><p className="text-sm text-muted-foreground">Senior fitness — Z2 conversational pace heart rate (60-70% max) most workouts = healthiest. Apple Watch / Fitbit calculates zones automatically. Skip intense Z4-Z5 unless doctor okays. Resting HR drops with training = good sign.</p></CardContent></Card>
      </main>
      <Footer />
    </div>
  );
}

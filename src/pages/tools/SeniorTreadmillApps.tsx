import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Activity } from 'lucide-react';

export default function SeniorTreadmillApps() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Treadmill Apps for Seniors — TekSure" description="Indoor walking — treadmill apps and walking workouts for seniors." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Activity className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Treadmill for Seniors</h1>
          <p className="text-lg text-muted-foreground">Walk indoors anytime.</p>
        </div>
        <div className="space-y-4">
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Walking Pad</h2><p>$300. Folds under bed. Compact. Senior favorite.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">NordicTrack T 6.5 Si</h2><p>$700. Includes 30-day iFit free.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">iFit</h2><p>$15/month. Walking workouts in scenic locations. World tours.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Apple Fitness+</h2><p>$10/month. Time to Walk audio walks.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Mall walking</h2><p>FREE. Many malls open early for senior walkers. Climate-controlled.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Watch TV</h2><p>Most seniors walk during favorite shows. 30-60 min flies by.</p></CardContent></Card>
          <Card className="bg-muted/40"><CardContent className="pt-6"><p className="text-sm">Quick Tip: Walking Pad is best $300 senior tech. Walk indoors anytime.</p></CardContent></Card>
        </div>
      </main>
      <Footer />
    </div>
  );
}

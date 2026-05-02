import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Footprints } from 'lucide-react';

export default function SeniorFitbitBasics() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Fitbit for Seniors — Senior Guide" description="Track steps and sleep with a Fitbit." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Footprints className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Fitbit Basics</h1>
          <p className="text-lg text-muted-foreground">Steps and sleep on your wrist.</p>
        </div>
        <div className="space-y-4">
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">1. Pick a model</h2><p>Fitbit Inspire 3 is $80 — basic steps and sleep. Charge 6 is $160 — heart, GPS.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">2. Set up</h2><p>Free Fitbit app. Sign up. Hold near phone. App walks you through.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">3. Daily goals</h2><p>Default 10,000 steps. Adjust to 5,000 or 7,000 if more realistic. Move at your pace.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">4. Sleep tracking</h2><p>Wear at night. App shows light, deep, REM sleep — helpful for spotting bad nights.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">5. Heart rate</h2><p>24/7 heart rate. Spot when something is unusual.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">6. Battery</h2><p>5-7 days per charge. No daily charging like an Apple Watch.</p></CardContent></Card>
          <Card className="bg-muted/40"><CardContent className="p-6"><p>Fitbit is now owned by Google. Sign in with a Google account from 2025 onward.</p></CardContent></Card>
        </div>
      </main>
      <Footer />
    </div>
  );
}

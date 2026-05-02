import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Activity } from 'lucide-react';

export default function SeniorMyFitnessPal() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="MyFitnessPal for Seniors — TekSure" description="Track calories, sodium, sugar — MyFitnessPal app for seniors." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Activity className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">MyFitnessPal</h1>
          <p className="text-lg text-muted-foreground">Track calories. Lower blood pressure.</p>
        </div>
        <div className="space-y-4">
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Free version</h2><p>FREE. Tracks calories, exercise, water. Largest food database.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Premium</h2><p>$20/month. Tracks sodium, fat, fiber, sugar specifically.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Scan barcode</h2><p>Tap barcode. Instant nutrition info logged. Saves time.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">For diabetics</h2><p>Premium tracks carbs by meal. Helps blood sugar control.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">For heart patients</h2><p>Track sodium under 1,500 mg/day. Premium needed for sodium tracking.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Other apps</h2><p>Lose It! and Cronometer also good. Try free versions to find your favorite.</p></CardContent></Card>
          <Card className="bg-muted/40"><CardContent className="pt-6"><p className="text-sm">Quick Tip: Even 2 weeks of tracking shows where calories sneak in.</p></CardContent></Card>
        </div>
      </main>
      <Footer />
    </div>
  );
}

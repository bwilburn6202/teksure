import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Heart } from 'lucide-react';

export default function SeniorAFibTracking() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="AFib Tracking for Seniors — TekSure" description="Atrial fibrillation tracking — Apple Watch, KardiaMobile, ECG apps." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Heart className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">AFib Tracking</h1>
          <p className="text-lg text-muted-foreground">Catch atrial fibrillation early.</p>
        </div>
        <div className="space-y-4">
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Apple Watch</h2><p>Series 4+. ECG app. Detects AFib with 99% accuracy. FDA approved.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">KardiaMobile</h2><p>$80. Place fingers on it. Medical-grade ECG in 30 seconds.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Withings ScanWatch</h2><p>$300. Hybrid analog watch with ECG. Looks normal.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Why critical</h2><p>AFib increases stroke risk 5x. Often silent. Tracking saves lives.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Share with doctor</h2><p>Apps email PDF reports. Show during cardiology visits.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Symptoms</h2><p>Skipped beats, fluttering, lightheaded. Use device when symptoms occur.</p></CardContent></Card>
          <Card className="bg-muted/40"><CardContent className="pt-6"><p className="text-sm">Quick Tip: Many seniors discover AFib only when wearing Apple Watch. Lifesaver.</p></CardContent></Card>
        </div>
      </main>
      <Footer />
    </div>
  );
}

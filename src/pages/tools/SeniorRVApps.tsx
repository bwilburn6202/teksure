import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Compass } from 'lucide-react';

export default function SeniorRVApps() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="RV Travel Apps for Seniors — TekSure" description="RV apps — RV LIFE, AllStays, KOA, Good Sam for senior road trips." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Compass className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">RV Apps for Seniors</h1>
          <p className="text-lg text-muted-foreground">RV-friendly route planning.</p>
        </div>
        <div className="space-y-4">
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">RV LIFE</h2><p>$60/year. RV-safe routing. Avoids low bridges, weight limits.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">AllStays</h2><p>$10. Camping, dump stations, walmart parking allowed.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">KOA</h2><p>FREE app. Reserve KOA campgrounds. Senior discounts.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Good Sam</h2><p>$30/year. Discounts at 2,000+ campgrounds. Roadside assistance.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Cracker Barrel</h2><p>FREE overnight RV parking. Check ahead for permission.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Boondockers Welcome</h2><p>$80/year. Free overnight at private homes.</p></CardContent></Card>
          <Card className="bg-muted/40"><CardContent className="pt-6"><p className="text-sm">Quick Tip: Senior National Park lifetime pass $80. Saves $1000s on entrance fees.</p></CardContent></Card>
        </div>
      </main>
      <Footer />
    </div>
  );
}

import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Car } from 'lucide-react';

export default function SeniorTrafficApps() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Traffic Apps for Seniors — TekSure" description="Avoid traffic jams — Waze, Google Maps, Apple Maps senior comparison." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Car className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Traffic Apps for Seniors</h1>
          <p className="text-lg text-muted-foreground">Avoid jams. Save time.</p>
        </div>
        <div className="space-y-4">
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Waze</h2><p>FREE. Best for traffic alerts. Crowdsourced. Reports speed traps and accidents.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Google Maps</h2><p>FREE. Reliable. Better for senior-easy interface.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Apple Maps</h2><p>FREE on iPhone. Improved a lot. Strong privacy. Built in.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Avoid highways</h2><p>All apps offer this option. Less stressful for some seniors.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Voice navigation</h2><p>Always use voice. Eyes on road. No texting/touching phone.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">CarPlay/Android Auto</h2><p>Plug phone into newer cars. Big screen on dashboard.</p></CardContent></Card>
          <Card className="bg-muted/40"><CardContent className="pt-6"><p className="text-sm">Quick Tip: Set Home and Work in app. One-tap navigation home from anywhere.</p></CardContent></Card>
        </div>
      </main>
      <Footer />
    </div>
  );
}

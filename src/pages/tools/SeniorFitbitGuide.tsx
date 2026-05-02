import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Activity } from 'lucide-react';

export default function SeniorFitbitGuide() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Fitbit for Seniors — TekSure" description="Best Fitbit for seniors — Inspire, Versa, Charge compared." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Activity className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Fitbit for Seniors</h1>
          <p className="text-lg text-muted-foreground">Track steps, sleep, and heart — simply.</p>
        </div>
        <div className="space-y-4">
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Fitbit Inspire 3</h2><p>$100. Cheapest. Steps, sleep, 10-day battery.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Fitbit Charge 6</h2><p>$160. Bigger screen, GPS, ECG, Google Maps.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Fitbit Versa 4</h2><p>$200. Smartwatch features. Notifications. Calls.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Sleep tracking</h2><p>Auto-tracks sleep stages. Some seniors discover sleep apnea this way.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Premium $9.99/month</h2><p>Optional. Adds detailed analysis and guided programs. Free for first 6 months.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Works on iPhone &amp; Android</h2><p>Unlike Apple Watch, Fitbit pairs with both phones.</p></CardContent></Card>
          <Card className="bg-muted/40"><CardContent className="pt-6"><p className="text-sm">Quick Tip: Set a 6,000-step daily goal first. Easier to keep than 10,000.</p></CardContent></Card>
        </div>
      </main>
      <Footer />
    </div>
  );
}

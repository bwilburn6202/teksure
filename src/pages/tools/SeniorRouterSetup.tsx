import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Wifi } from 'lucide-react';

export default function SeniorRouterSetup() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Wi-Fi Router Setup for Seniors — TekSure" description="Easy Wi-Fi router for seniors — eero, Google Nest WiFi, Netgear Orbi." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Wifi className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Wi-Fi Router for Seniors</h1>
          <p className="text-lg text-muted-foreground">Strong, simple Wi-Fi everywhere.</p>
        </div>
        <div className="space-y-4">
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Amazon eero</h2><p>$100-$300. Easiest setup. App walks you through. 5-minute setup.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Google Nest WiFi</h2><p>$200. Works with Google Home. Voice control.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Netgear Orbi</h2><p>$300+. Best for big houses. 4,500+ sq ft coverage.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Single house? One router</h2><p>2-bedroom apartment? One eero/Nest is plenty.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Big house? Mesh</h2><p>3-pack covers most homes. Add nodes anywhere.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Avoid carrier router</h2><p>Comcast/Spectrum routers are weak. Buy your own — saves $15/month rental too.</p></CardContent></Card>
          <Card className="bg-muted/40"><CardContent className="pt-6"><p className="text-sm">Quick Tip: Save $180/year buying your own router. Pays for itself in 1 year.</p></CardContent></Card>
        </div>
      </main>
      <Footer />
    </div>
  );
}

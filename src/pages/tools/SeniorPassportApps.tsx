import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Globe } from 'lucide-react';

export default function SeniorPassportApps() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Passport Renewal for Seniors — TekSure" description="Renew US passport online or by mail — Travel.State.gov for seniors." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Globe className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Passport for Seniors</h1>
          <p className="text-lg text-muted-foreground">Renew online or by mail.</p>
        </div>
        <div className="space-y-4">
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Online renewal</h2><p>FREE setup. travel.state.gov/passport-online. Easier than ever.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Mail-in renewal</h2><p>$130. Send Form DS-82 + old passport + photo + check.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">When to renew</h2><p>9 months before expiration. Many countries require 6 months validity.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Passport photos</h2><p>$15 at CVS or Walgreens. Most reliable.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Smart Traveler Enrollment</h2><p>FREE at step.state.gov. State Department contacts you in emergencies abroad.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Travel insurance</h2><p>Always buy. Medical evac alone can cost $50,000+.</p></CardContent></Card>
          <Card className="bg-muted/40"><CardContent className="pt-6"><p className="text-sm">Quick Tip: Photograph passport. Email to yourself. Lost passport replacement faster.</p></CardContent></Card>
        </div>
      </main>
      <Footer />
    </div>
  );
}

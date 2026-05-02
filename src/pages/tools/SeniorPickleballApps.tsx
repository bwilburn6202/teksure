import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Activity } from 'lucide-react';

export default function SeniorPickleballApps() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Pickleball Apps for Seniors — TekSure" description="Find pickleball games near you — Places2Play, court reservation apps." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Activity className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Pickleball Apps</h1>
          <p className="text-lg text-muted-foreground">America&apos;s fastest-growing senior sport.</p>
        </div>
        <div className="space-y-4">
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Places2Play</h2><p>FREE. Find every pickleball court in the US. By location.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">CourtReserve</h2><p>FREE. Reserve courts at clubs. Sign up for open play.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">DUPR</h2><p>FREE. Tracks your skill rating. Find players at your level.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">USA Pickleball</h2><p>$30/year membership. Free clinics and sanctioned tournaments.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Senior leagues</h2><p>Most rec centers run senior-only leagues. Easier matches, more social.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Why seniors love it</h2><p>Slower than tennis. Court is smaller. Easier on joints. Built-in social.</p></CardContent></Card>
          <Card className="bg-muted/40"><CardContent className="pt-6"><p className="text-sm">Quick Tip: A $40 starter paddle is plenty. Don&apos;t buy expensive gear until you&apos;re hooked.</p></CardContent></Card>
        </div>
      </main>
      <Footer />
    </div>
  );
}

import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Satellite } from 'lucide-react';

export default function SatellitePhonesForSeniorTravel() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Satellite SOS for Senior Travelers | TekSure" description="iPhone satellite + Garmin inReach. Senior off-grid emergency." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Satellite className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Satellite SOS</h1>
          <p className="text-lg text-muted-foreground">No-cell emergency.</p>
        </div>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">iPhone 14+ Emergency</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>Built-in satellite SOS.</li><li>Free 2 years.</li><li>Off-grid emergency.</li><li>Senior hiking safe.</li><li>National parks.</li><li>Game-changing.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Garmin inReach</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>$300-$450 device.</li><li>$15-$70/month.</li><li>2-way satellite text.</li><li>SOS button.</li><li>Senior remote travel.</li><li>Worldwide.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">When senior need</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>National parks hiking.</li><li>Cruise — port wifi.</li><li>RV remote sites.</li><li>Boating offshore.</li><li>Senior adventure.</li><li>Peace of mind.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">How iPhone works</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>SOS button.</li><li>Point at satellite (app guides).</li><li>Text emergency services.</li><li>Senior takes 1-2 minutes.</li><li>Free 2 years.</li><li>Worth practice.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Find My satellite</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>Share location off-grid.</li><li>Family knows position.</li><li>Senior peace.</li><li>iPhone 14+.</li><li>Free.</li><li>Premium feature.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Senior tip</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>Practice once before trip.</li><li>Demo mode.</li><li>Know how before need.</li><li>Senior hiking solo.</li><li>National parks worth it.</li><li>Free 2 years.</li></ul></CardContent></Card>
        <Card className="bg-muted/40"><CardContent className="pt-6"><h3 className="font-bold mb-2">iPhone 14+ satellite = senior off-grid</h3><p className="text-sm text-muted-foreground">iPhone 14+ free 2-year satellite SOS = senior off-grid emergency. National parks, hiking, RV remote spots. Practice in demo mode first. Garmin inReach $300+ for serious adventurers. Most under-known senior travel safety feature.</p></CardContent></Card>
      </main>
      <Footer />
    </div>
  );
}

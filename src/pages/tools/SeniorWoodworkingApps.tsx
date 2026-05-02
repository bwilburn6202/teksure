import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Hammer } from 'lucide-react';

export default function SeniorWoodworkingApps() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Woodworking Apps for Seniors — Senior Guide" description="Apps for woodworkers and DIY projects." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Hammer className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Woodworking Apps</h1>
          <p className="text-lg text-muted-foreground">DIY help on your phone.</p>
        </div>
        <div className="space-y-4">
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">1. Magic Plan</h2><p>Free. Snap photos to make floor plans. Useful for room layouts.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">2. iHandy Carpenter</h2><p>$2. Phone becomes level, ruler, plumb bob. Surprisingly accurate.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">3. Stud Finder</h2><p>Free apps use phone's compass to find studs. Backup when batteries on real one die.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">4. ShopSmart</h2><p>Track project budgets. Note tools borrowed from friends.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">5. YouTube tutorials</h2><p>Channels like Steve Ramsey, WoodWhisperer. Free hours of senior-friendly woodworking.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">6. Rockler app</h2><p>Free woodworking plans, video tips, store locator.</p></CardContent></Card>
          <Card className="bg-muted/40"><CardContent className="p-6"><p>Always wear safety glasses and hearing protection. Tools haven't gotten quieter with age.</p></CardContent></Card>
        </div>
      </main>
      <Footer />
    </div>
  );
}

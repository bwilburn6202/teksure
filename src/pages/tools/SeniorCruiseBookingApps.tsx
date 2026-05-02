import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Ship } from 'lucide-react';

export default function SeniorCruiseBookingApps() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Cruise Booking Apps for Seniors — TekSure" description="Find cruise deals — CruiseDirect, VacationsToGo, Cruise Critic." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Ship className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Cruise Booking</h1>
          <p className="text-lg text-muted-foreground">Best deals on senior-favorite cruises.</p>
        </div>
        <div className="space-y-4">
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">CruiseDirect</h2><p>FREE. Compares 30+ cruise lines. Often the cheapest prices.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">VacationsToGo</h2><p>FREE. 90-day deal alerts. Last-minute cabin steals.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Cruise Critic</h2><p>FREE. Reviews and ratings. Real cruiser community advice.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Top senior lines</h2><ul className="list-disc pl-5 space-y-1 text-sm"><li>Holland America (older crowd)</li><li>Princess (relaxed)</li><li>Viking (no kids, all-inclusive)</li><li>Royal Caribbean (more activity)</li></ul></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Best deals when</h2><p>Wave Season (Jan-Mar). Last-minute bookings. Repositioning cruises.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Travel insurance</h2><p>Always buy. Cancellations and medical evac happen.</p></CardContent></Card>
          <Card className="bg-muted/40"><CardContent className="pt-6"><p className="text-sm">Quick Tip: Inside cabins are 50% cheaper than balconies. Most time spent off-cabin anyway.</p></CardContent></Card>
        </div>
      </main>
      <Footer />
    </div>
  );
}

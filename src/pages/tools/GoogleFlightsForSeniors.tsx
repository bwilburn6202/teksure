import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Plane } from 'lucide-react';

export default function GoogleFlightsForSeniors() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Google Flights for Senior Travelers | TekSure" description="Best flight search engine. Senior Google Flights guide." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Plane className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Google Flights</h1>
          <p className="text-lg text-muted-foreground">Best flight search.</p>
        </div>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Why senior love it</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>Free Google service.</li><li>Compare all airlines.</li><li>Calendar best dates.</li><li>Track price changes.</li><li>Senior research tool.</li><li>Better than airline sites.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Price tracking</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>Track route + dates.</li><li>Email when drops.</li><li>Senior buy at low.</li><li>Free.</li><li>Multiple routes.</li><li>Save $200+.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Calendar view</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>See cheap dates.</li><li>Travel mid-week save.</li><li>Senior flexible dates.</li><li>$300 savings sometimes.</li><li>Worth flexibility.</li><li>Best value visible.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Layover info</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>Layover length.</li><li>Senior avoid 1-hr risky.</li><li>2+ hrs safer.</li><li>Same airport vs different.</li><li>Senior planning.</li><li>Free info.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Direct vs connecting</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>Filter direct only.</li><li>Senior less stress.</li><li>Worth more $$.</li><li>Less luggage risk.</li><li>Less missed connections.</li><li>Senior peace.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Book direct</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>Find via Google Flights.</li><li>Book on airline website.</li><li>Better customer service.</li><li>Senior changes easier.</li><li>Avoid 3rd-party trips.</li><li>Save fees.</li></ul></CardContent></Card>
        <Card className="bg-muted/40"><CardContent className="pt-6"><h3 className="font-bold mb-2">Free Google Flights = senior best deal</h3><p className="text-sm text-muted-foreground">Free Google Flights = best senior airfare research. Compare all airlines. Calendar shows cheapest dates. Track price drops. Many seniors save $200-$500 per trip. Always book direct on airline though, not via Expedia. Senior flight habit.</p></CardContent></Card>
      </main>
      <Footer />
    </div>
  );
}

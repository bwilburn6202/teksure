import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Calendar } from 'lucide-react';

export default function TripItForSeniorTravelers() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="TripIt for Senior Travelers | TekSure" description="Auto-organize travel itineraries. Senior TripIt guide." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Calendar className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">TripIt</h1>
          <p className="text-lg text-muted-foreground">Travel itinerary organizer.</p>
        </div>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">What it does</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>Forward confirmation emails.</li><li>Auto-creates itinerary.</li><li>Flights, hotels, cars.</li><li>Phone view trip.</li><li>Free version solid.</li><li>Senior magic.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Setup</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>Free signup.</li><li>plans@tripit.com.</li><li>Forward all confirmations.</li><li>Auto-organized in app.</li><li>Senior easy.</li><li>5 min setup.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Senior wins</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>One place all reservations.</li><li>Phone has full trip.</li><li>Hotel address ready.</li><li>Flight times accessible.</li><li>Senior less stress.</li><li>No printing pages.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Pro $50/year</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>Flight delays alert.</li><li>Better seat alerts.</li><li>Find vehicle parking.</li><li>Senior frequent traveler.</li><li>Or use free.</li><li>Pro best in delays.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Family share</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>Share trip with family.</li><li>Adult kid sees senior travel.</li><li>Worry less.</li><li>Senior + family peace.</li><li>Free.</li><li>Best for solo seniors.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Offline</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>Works without internet.</li><li>Hotel address visible.</li><li>Reservation numbers.</li><li>Senior abroad safe.</li><li>Cached locally.</li><li>No data needed.</li></ul></CardContent></Card>
        <Card className="bg-muted/40"><CardContent className="pt-6"><h3 className="font-bold mb-2">Free TripIt = senior trip organized</h3><p className="text-sm text-muted-foreground">Free TripIt = forward confirmations, get organized phone itinerary. Senior never lose hotel address. All flights + reservations one place. Family can see (free). Pro $50/yr for delay alerts if frequent. Most under-used senior travel app.</p></CardContent></Card>
      </main>
      <Footer />
    </div>
  );
}

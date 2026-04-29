import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { User } from 'lucide-react';

export default function SoloSeniorTravelTips() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Solo Senior Travel Tips | TekSure" description="Safe and confident solo travel for seniors. Practical tips and tech tools for traveling alone." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <User className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Solo Senior Travel</h1>
          <p className="text-lg text-muted-foreground">Travel alone safely and confidently.</p>
        </div>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Why solo travel is great</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Go where you want, when you want.</li>
              <li>Your pace — no compromise.</li>
              <li>Meet new people more easily.</li>
              <li>Re-discover independence.</li>
              <li>Many widowed or divorced seniors travel solo.</li>
              <li>Millions of seniors do it safely every year.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Before you leave</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Share itinerary with trusted family member.</li>
              <li>Check in schedule — text when you arrive.</li>
              <li>Travel insurance — especially medical evacuation.</li>
              <li>Copies of documents — passport, insurance, prescriptions.</li>
              <li>Emergency contact card in wallet.</li>
              <li>Medications + doctor&apos;s note for customs.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Tech tools for safety</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Life360 — share real-time location with family.</li>
              <li>Find My (iPhone) — family can see your location.</li>
              <li>Google Maps — save hotel address offline.</li>
              <li>TripIt — all bookings organized.</li>
              <li>WhatsApp — free calls home over WiFi.</li>
              <li>Apple Watch / SOS button — emergency call.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Accommodation tips</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Hotels often safer than vacation rentals solo.</li>
              <li>Request room near elevator — less walking.</li>
              <li>Don&apos;t display room number where strangers see.</li>
              <li>Use door security chain always.</li>
              <li>Choose well-reviewed hotels in central areas.</li>
              <li>Front desk staff are your allies.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Group tours option</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Solo but not alone — best of both.</li>
              <li>Tauck, Collette, Road Scholar — senior-friendly.</li>
              <li>Tour guide handles all logistics.</li>
              <li>Meet other solo travelers.</li>
              <li>Safe transportation included.</li>
              <li>Good for first international trip alone.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Money safety</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Notify bank before traveling — avoid card block.</li>
              <li>Bring two cards — keep one separate from purse.</li>
              <li>Small amounts of cash for tips + emergencies.</li>
              <li>Money belt for passport + extra card.</li>
              <li>No visible expensive jewelry or watch.</li>
              <li>Know bank&apos;s international ATM fees.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="bg-muted/40">
          <CardContent className="pt-6">
            <h3 className="font-bold mb-2">Start close to home</h3>
            <p className="text-sm text-muted-foreground">If you&apos;ve never traveled solo, start with a domestic trip — a nearby city, a national park, or a short flight somewhere. Get comfortable booking, navigating, and being on your own before international travel. Many seniors discover solo travel in their 60s and 70s after children leave or losing a spouse, and find it more freeing than they expected.</p>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}

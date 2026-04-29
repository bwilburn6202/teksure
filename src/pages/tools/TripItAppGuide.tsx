import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { MapPin } from 'lucide-react';

export default function TripItAppGuide() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="TripIt Travel App for Seniors | TekSure" description="TripIt explained for seniors. Organize all your travel details in one place." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <MapPin className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">TripIt</h1>
          <p className="text-lg text-muted-foreground">All your trip details in one place.</p>
        </div>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">What is TripIt?</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Free app that organizes your travel.</li>
              <li>Forward booking confirmation emails to TripIt.</li>
              <li>It creates a full itinerary automatically.</li>
              <li>Flights, hotels, car rentals — all in one place.</li>
              <li>Works offline — no internet needed while traveling.</li>
              <li>Share itinerary with family.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">How to use</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Download TripIt free from app store.</li>
              <li>Create account with email.</li>
              <li>Forward booking emails to plans@tripit.com.</li>
              <li>TripIt reads the email and adds to trip.</li>
              <li>View full day-by-day schedule in app.</li>
              <li>Print itinerary if you prefer paper.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">What it organizes</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Flight numbers, times, terminals, gates.</li>
              <li>Hotel address, check-in/check-out times.</li>
              <li>Car rental pickup location + confirmation.</li>
              <li>Restaurant reservations.</li>
              <li>Tour bookings + attraction tickets.</li>
              <li>Cruise details.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Sharing with family</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Tap &quot;Share trip&quot; — email itinerary to family.</li>
              <li>They can see your whole schedule.</li>
              <li>Know which flight you&apos;re on.</li>
              <li>Hotel address if they need to reach you.</li>
              <li>Peace of mind for adult children.</li>
              <li>No app required for person you share with.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">TripIt Pro (paid)</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>$49/year — optional.</li>
              <li>Flight alerts — gate changes, delays.</li>
              <li>Seat tracker — know if better seat opens.</li>
              <li>Fare refund alerts — price drop notifications.</li>
              <li>Free plan fine for most seniors.</li>
              <li>Try free first — upgrade only if needed.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Tips for seniors</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Print itinerary before leaving — backup for no internet.</li>
              <li>Add emergency contacts to notes section.</li>
              <li>Include hotel phone numbers.</li>
              <li>Screenshot each page before flying.</li>
              <li>Add travel insurance info.</li>
              <li>Keep in phone + email family the printout.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="bg-muted/40">
          <CardContent className="pt-6">
            <h3 className="font-bold mb-2">No more paper folders</h3>
            <p className="text-sm text-muted-foreground">Many seniors carry a paper folder with every booking confirmation. TripIt replaces that while keeping a printable backup option. Forward your airline, hotel, and car rental confirmation emails — TripIt assembles everything into one clean schedule. At the airport or hotel, just show your phone. Family can see your whole itinerary in real time.</p>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}

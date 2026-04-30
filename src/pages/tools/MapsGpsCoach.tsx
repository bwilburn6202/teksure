import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Map } from 'lucide-react';

export default function MapsGpsCoach() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Maps & GPS Coach — Apple Maps, Google Maps, Waze | TekSure" description="Don't get lost. Pick the right map app, save your home, share your location with family, and download offline maps for road trips." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Map className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Maps & GPS Coach</h1>
          <p className="text-lg text-muted-foreground">Find your way. Share your location. Avoid getting lost.</p>
        </div>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Which app to use?</h2>
            <ul className="space-y-2 text-sm">
              <li><strong>Apple Maps</strong> — built into iPhone, very good now (was bad years ago). Cleaner look. Best if you're in the Apple world.</li>
              <li><strong>Google Maps</strong> — most accurate everywhere. Best business hours, best reviews. Works on iPhone too.</li>
              <li><strong>Waze</strong> — best for daily commutes — finds the fastest route around traffic, accidents, police, road closures. Owned by Google.</li>
            </ul>
            <p className="text-sm mt-3 bg-muted/50 p-3 rounded"><strong>Best practice:</strong> Use Google Maps as your default; switch to Waze for big city or rush-hour driving.</p>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Save your "Home" and "Work"</h2>
            <p className="text-sm mb-2">Once saved, you tap once and start driving — no typing.</p>
            <p className="font-semibold text-sm mt-3">Apple Maps:</p>
            <ol className="list-decimal pl-5 space-y-1 text-sm mb-3">
              <li>Open Maps → tap your photo (top right) → "Favorites" → "+ Add".</li>
              <li>Type "Home" → enter your address. Repeat for "Work" or your favorite restaurant.</li>
            </ol>
            <p className="font-semibold text-sm">Google Maps:</p>
            <ol className="list-decimal pl-5 space-y-1 text-sm">
              <li>Open Google Maps → tap "Saved" → "Labeled" → tap "Home" → enter address.</li>
            </ol>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Share your location with family</h2>
            <p className="font-semibold text-sm mt-2">iPhone — Find My (free, built in):</p>
            <ol className="list-decimal pl-5 space-y-1 text-sm mb-3">
              <li>Open the <strong>Find My</strong> app.</li>
              <li>Tap "People" → "Start Sharing Location".</li>
              <li>Pick your spouse or child. Choose "Share Indefinitely".</li>
              <li>They tap to share back, and now you both can see each other's location anytime.</li>
            </ol>
            <p className="font-semibold text-sm">Google Maps — Location Sharing:</p>
            <ol className="list-decimal pl-5 space-y-1 text-sm">
              <li>Open Google Maps → tap your photo → "Location sharing".</li>
              <li>Tap "+ New share" → pick a contact → choose duration ("Until you turn this off" for ongoing).</li>
              <li>They get a notification with a link.</li>
            </ol>
            <p className="text-sm mt-3 bg-muted/50 p-3 rounded">When they share back, you'll see them on the map too. Useful for road trips ("how far away are you?").</p>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Download offline maps before a road trip</h2>
            <p className="text-sm mb-2">No more "GPS lost" warnings in the mountains.</p>
            <p className="font-semibold text-sm mt-3">Google Maps:</p>
            <ol className="list-decimal pl-5 space-y-1 text-sm mb-3">
              <li>Open Google Maps → tap your photo → "Offline maps".</li>
              <li>"Select your own map" → drag and zoom to cover your route.</li>
              <li>Tap "Download". 100 MB to 1 GB depending on size.</li>
              <li>Now navigation works even with no signal.</li>
            </ol>
            <p className="font-semibold text-sm">Apple Maps (iOS 17+):</p>
            <ol className="list-decimal pl-5 space-y-1 text-sm">
              <li>Search a city, tap its name at the top → scroll down → "Download Map".</li>
            </ol>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Helpful tricks</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li><strong>Avoid highways</strong> — in the navigation menu, toggle this on to scenic-route a drive.</li>
              <li><strong>Avoid tolls</strong> — same menu. Saves $5-30 on long drives.</li>
              <li><strong>Speed limit</strong> — Google Maps and Waze show the current speed limit on screen.</li>
              <li><strong>Find restrooms / gas / charging</strong> — tap the search bar → "Restrooms" or "Gas". Pick a stop on your route.</li>
              <li><strong>Send a friend an address</strong> — long-press a spot on the map → tap Share → text or AirDrop.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="bg-muted/40">
          <CardContent className="pt-6">
            <h3 className="font-bold mb-2">Stay safe</h3>
            <p className="text-sm text-muted-foreground">Mount the phone where you can see the screen without looking down. Use voice directions ("Hey Siri, take me home"). Don't tap the phone while driving — pull over first.</p>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}

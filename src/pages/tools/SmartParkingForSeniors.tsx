import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { ParkingSquare } from 'lucide-react';

export default function SmartParkingForSeniors() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Smart Parking + Find My Car for Seniors | TekSure" description="Never lose your car. Apple Maps + apps that remember where you parked." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <ParkingSquare className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Find Your Parked Car</h1>
          <p className="text-lg text-muted-foreground">Never lose car in big lot.</p>
        </div>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">iPhone — automatic</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Settings → Maps → Show Parked Location.</li>
              <li>iPhone notes spot when you exit car.</li>
              <li>Bluetooth car connection required.</li>
              <li>Maps shows path back.</li>
              <li>Free, automatic, built-in.</li>
              <li>Saves senior brain power.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Manual marker</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Google Maps — drop pin on car.</li>
              <li>Photo of section letter/number.</li>
              <li>Apple Notes voice memo.</li>
              <li>Photo of nearby landmark.</li>
              <li>Works at airport, mall, hospital.</li>
              <li>30 seconds prevents 30 minutes searching.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">AirTag for car</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Place Apple AirTag in car.</li>
              <li>Find My app shows car location.</li>
              <li>$30 one-time cost.</li>
              <li>Helpful in big lots + parking garages.</li>
              <li>Anti-theft if car stolen.</li>
              <li>Battery lasts year.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Hospital parking</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Take photo of garage level + section.</li>
              <li>Cell signal often weak in hospitals.</li>
              <li>AirTag may not work indoors.</li>
              <li>Note row letter on entry.</li>
              <li>Stress + exit — easy to lose car.</li>
              <li>Plan ahead.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Airport long-term</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Photo of garage level + row.</li>
              <li>Email yourself location.</li>
              <li>Note in Apple Notes.</li>
              <li>10 days later — easy to forget.</li>
              <li>Save photo with date.</li>
              <li>Consult before returning.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">If you lose car</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Use key fob — press unlock + horn.</li>
              <li>Listen for honk.</li>
              <li>Walk toward sound.</li>
              <li>If multi-level, try each level.</li>
              <li>Ask security for help.</li>
              <li>Don&apos;t panic — happens to everyone.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="bg-muted/40">
          <CardContent className="pt-6">
            <h3 className="font-bold mb-2">Photo + iPhone Bluetooth = magic</h3>
            <p className="text-sm text-muted-foreground">When parking at airport, hospital, big mall — take 3 seconds to photograph your section/row. Plus iPhone&apos;s Bluetooth-detected parked location. These two habits prevent the senior nightmare of forgetting where you parked. Free, easy, transformative for stress reduction.</p>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}

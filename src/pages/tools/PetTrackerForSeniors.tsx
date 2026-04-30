import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { MapPin } from 'lucide-react';

export default function PetTrackerForSeniors() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Pet Trackers for Seniors | TekSure" description="GPS pet trackers for senior owners. Find lost pets fast." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <MapPin className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Pet Trackers</h1>
          <p className="text-lg text-muted-foreground">GPS pet locators.</p>
        </div>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">AirTag</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>$30.</li><li>iPhone Find My.</li><li>Bluetooth — local only.</li><li>Senior cheap option.</li><li>Cats indoor mostly.</li><li>Limited tracking.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Tractive GPS</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>$50 + $10/month.</li><li>Real GPS — anywhere.</li><li>Senior dog runner.</li><li>Live tracking.</li><li>Cellular built-in.</li><li>Worth it.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Fi Collar</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>$150 + $100/year.</li><li>Premium.</li><li>Activity tracking.</li><li>Senior comprehensive.</li><li>3-month battery.</li><li>Best dog tracker.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Senior wins</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>Find escape artist dogs.</li><li>Cat outdoor return.</li><li>Senior less worry.</li><li>Real-time location.</li><li>Geofence alerts.</li><li>Critical for runners.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Indoor cats</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>AirTag enough.</li><li>$30 one-time.</li><li>Senior cheap option.</li><li>Bluetooth in house.</li><li>Find lost cat hiding.</li><li>Worth tiny investment.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Microchip too</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>$40 vet implant.</li><li>Permanent ID.</li><li>Shelters scan.</li><li>Senior backup.</li><li>One-time cost.</li><li>Don&apos;t skip.</li></ul></CardContent></Card>
        <Card className="bg-muted/40"><CardContent className="pt-6"><h3 className="font-bold mb-2">$50 Tractive = senior dog finder</h3><p className="text-sm text-muted-foreground">$50 Tractive GPS + $10/month = senior dog tracker. Real cellular GPS anywhere. Find escape artists fast. Plus microchip $40 permanent ID. Best senior pet safety combo. Cheaper $30 AirTag for indoor cats. Senior pet peace.</p></CardContent></Card>
      </main>
      <Footer />
    </div>
  );
}

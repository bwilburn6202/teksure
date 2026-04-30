import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Truck } from 'lucide-react';

export default function RVTripsForSeniors() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="RV Trips for Seniors | TekSure" description="RV apps + senior road trip planning. RV LIFE + alternatives." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Truck className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">RV Senior Travel</h1>
          <p className="text-lg text-muted-foreground">Apps for RV life.</p>
        </div>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">RV LIFE Pro</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>$65/year.</li><li>RV-safe routing.</li><li>Avoid low bridges.</li><li>Campground reviews.</li><li>Senior favorite.</li><li>Trip planner.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Campendium</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>Free + Pro $50/yr.</li><li>Campground reviews.</li><li>Boondocking spots.</li><li>Senior community.</li><li>Honest reviews.</li><li>Free starting point.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Allstays</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>$10 one-time.</li><li>Walmart RV parking.</li><li>Truck stop overnights.</li><li>Senior road trip.</li><li>Phone app.</li><li>Worth it.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Good Sam Club</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>$30/year.</li><li>Discounts at campgrounds.</li><li>Roadside service.</li><li>Senior RVer staple.</li><li>Senior 55+ discount.</li><li>Save fees.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Senior America the Beautiful</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>$80 lifetime.</li><li>62+.</li><li>National parks free.</li><li>Camping 50% off.</li><li>Senior best deal.</li><li>Don&apos;t miss.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Senior tips</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>4-5 hrs driving max.</li><li>Avoid backup needed.</li><li>Drive-through campgrounds.</li><li>Spouse spotter.</li><li>Senior pace.</li><li>Reserve ahead summer.</li></ul></CardContent></Card>
        <Card className="bg-muted/40"><CardContent className="pt-6"><h3 className="font-bold mb-2">$80 senior pass + $30 Good Sam = RV deal</h3><p className="text-sm text-muted-foreground">62+ America the Beautiful pass $80 lifetime = free National Parks + 50% camping. Plus $30 Good Sam Club for campground discounts + roadside. Best senior RV combo. RV LIFE Pro $65 if frequent traveler. Senior road trip golden age.</p></CardContent></Card>
      </main>
      <Footer />
    </div>
  );
}

import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Map } from 'lucide-react';

export default function RoadtripPlannerAppsForSeniors() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Roadtrip Planner Apps for Seniors | TekSure" description="Plan epic road trips with Roadtrippers and other senior-friendly apps." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Map className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Road Trip Planning</h1>
          <p className="text-lg text-muted-foreground">Plan epic senior journeys.</p>
        </div>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Roadtrippers</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>Free + Pro ($30/yr).</li><li>Find quirky stops.</li><li>National parks + landmarks.</li><li>Plan day-by-day route.</li><li>Save itinerary.</li><li>Share with family.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Google Maps</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>Multi-stop routes.</li><li>Driving time estimates.</li><li>Save lists of places.</li><li>Offline maps for no-signal areas.</li><li>Free.</li><li>Familiar to use.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">RV-friendly apps</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>RV LIFE Pro ($65/yr).</li><li>Avoid low bridges.</li><li>RV park reviews.</li><li>Dump station finder.</li><li>Senior RVer favorite.</li><li>Worth it for RVers.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">National Parks app</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>Official NPS app.</li><li>All US parks.</li><li>Trail maps offline.</li><li>Visitor info.</li><li>Free.</li><li>Senior pass info ($80 lifetime).</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Senior pacing</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>4-6 hours driving max.</li><li>Stops every 90 minutes.</li><li>Stretch + restroom.</li><li>Hotel by 4 PM ideal.</li><li>Not at dusk.</li><li>Enjoy the journey.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Senior pass</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>$80 lifetime — 62+.</li><li>All National Parks free entry.</li><li>50% off camping.</li><li>Best US senior deal ever.</li><li>Buy online or at park.</li><li>Show with photo ID.</li></ul></CardContent></Card>
        <Card className="bg-muted/40"><CardContent className="pt-6"><h3 className="font-bold mb-2">$80 senior pass = priceless</h3><p className="text-sm text-muted-foreground">If you&apos;re 62+, $80 America the Beautiful Senior Pass is the best deal in US senior travel. Free entry to all National Parks for life. Plus Roadtrippers app + Google Maps offline. Plan year of bucket-list trips. Many seniors save thousands over remaining years.</p></CardContent></Card>
      </main>
      <Footer />
    </div>
  );
}

import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Anchor } from 'lucide-react';

export default function CruiseAppGuide() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Cruise Apps — What to Download Before You Sail | TekSure" description="Carnival Hub, Royal Caribbean, NCL apps. Plain-English guide to cruise line apps for boarding passes, dining, and onboard messaging." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Anchor className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Cruise App Guide</h1>
          <p className="text-lg text-muted-foreground">Download BEFORE you board.</p>
        </div>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Major cruise line apps</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li><strong>Royal Caribbean App</strong> — best app overall. Boarding pass, dining, shows, deck plans.</li>
              <li><strong>Carnival HUB</strong> — same idea. Free chat between family on board ($5/cruise).</li>
              <li><strong>Norwegian Cruise Line (NCL)</strong> — itinerary, dining, shows.</li>
              <li><strong>Princess MedallionClass</strong> — wear a "medallion" — door unlocks, drinks delivered to wherever you are.</li>
              <li><strong>Holland America Navigator</strong> — itinerary, shows.</li>
              <li><strong>Celebrity Cruises</strong> — same features as Royal Caribbean (same parent company).</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Why download BEFORE you sail</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Onboard wifi is slow and expensive — downloads take forever.</li>
              <li>You need the app for boarding pass at port (most lines).</li>
              <li>Pre-book dining and shows — best slots fill before sailing.</li>
              <li>Some lines fine you $5-25 if you don&apos;t complete app check-in.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Free chat between family</h2>
            <p className="text-sm">Most cruise apps include chat that works on the ship&apos;s wifi WITHOUT needing internet package:</p>
            <ul className="list-disc pl-5 space-y-1 text-sm mt-2">
              <li>Royal Caribbean — free in app.</li>
              <li>Carnival — $5/person/cruise.</li>
              <li>NCL — free in app.</li>
              <li>Princess — free with Medallion.</li>
            </ul>
            <p className="text-sm mt-2">Saves $100+ on internet packages just to text family. Connect via app on day 1.</p>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Phone settings before boarding</h2>
            <ol className="list-decimal pl-5 space-y-2 text-sm">
              <li>Turn ON Airplane Mode.</li>
              <li>Turn wifi BACK ON (still works on ship).</li>
              <li>This avoids cellular roaming charges (often $10/MB at sea).</li>
              <li>Use ship wifi (or Starlink, increasingly common) for messaging.</li>
              <li>OR buy ship internet package ($10-25/day for streaming).</li>
            </ol>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Tips for first-time cruisers (60+)</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Pre-book 2 specialty restaurants on day 1 — best windows fill fast.</li>
              <li>Download deck plans before sailing — confusing ships are confusing.</li>
              <li>Get medallion / cruise card at port — keys to room, ID, charge card.</li>
              <li>Bring power strip (most rooms have 1-2 outlets).</li>
              <li>Keep printed copy of passport in safe.</li>
              <li>Buy travel insurance for cruises (see /tools/travel-insurance-reality).</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="bg-muted/40">
          <CardContent className="pt-6">
            <h3 className="font-bold mb-2">Costco Travel cruises</h3>
            <p className="text-sm text-muted-foreground">If you&apos;re a Costco member, book your cruise through Costco Travel. Same price as the cruise line, plus Costco gives a $50-300 cash card per cabin AND on-board credit. Members report saving 5-10% per booking. No extra cost.</p>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}

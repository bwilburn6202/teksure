import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Ticket } from 'lucide-react';

export default function ConcertTicketTips() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Concert + Event Ticket Tips | TekSure" description="Buy tickets safely + cheaper. Plain-English picks for Ticketmaster, StubHub, scam avoidance, senior accessibility." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Ticket className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Concert Ticket Tips</h1>
          <p className="text-lg text-muted-foreground">Avoid scams. Save money. Sit comfortably.</p>
        </div>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Where to buy</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li><strong>Official venue site</strong> — best for first-tier seats.</li>
              <li><strong>Ticketmaster / Live Nation</strong> — primary market. Beware fees.</li>
              <li><strong>StubHub</strong> — legitimate resale. FanProtect Guarantee.</li>
              <li><strong>SeatGeek</strong> — comparison site. Shows fees upfront.</li>
              <li><strong>Vivid Seats</strong> — large resale.</li>
              <li><strong>AVOID</strong> Craigslist + random sellers — common scam.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Save money</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li><strong>Wait until day-of</strong> — resale prices often drop 30-70% as show approaches.</li>
              <li><strong>Tuesday-Wednesday</strong> evening shows = cheaper.</li>
              <li><strong>Senior + member discounts</strong> — AAA, AARP often partner.</li>
              <li><strong>Free local concerts</strong> — parks, churches, libraries.</li>
              <li><strong>Symphony pricing</strong> — much cheaper than rock. $20-50.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Senior accessibility</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>ADA-accessible seating — every venue required to offer.</li>
              <li>Aisle seats — easier to leave for restroom.</li>
              <li>Avoid GA (general admission) standing-only shows.</li>
              <li>Hearing-loop systems available at major venues — call ahead.</li>
              <li>Ear plugs ($1-30) reduce volume + tinnitus risk.</li>
              <li>Park-and-ride lots beat downtown driving + parking.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4 bg-yellow-50 border-yellow-300 dark:bg-yellow-950/20 dark:border-yellow-800">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Avoid scams</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>NEVER buy outside venue or via random Craigslist listing.</li>
              <li>"Limited time! Today only!" = often scam.</li>
              <li>Pay with credit card (chargeback if scammed).</li>
              <li>NEVER pay via Zelle / Venmo to stranger.</li>
              <li>Most scams = duplicate / fake tickets — won&apos;t scan at gate.</li>
              <li>Buy directly from artists / official band site when possible.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="bg-muted/40">
          <CardContent className="pt-6">
            <h3 className="font-bold mb-2">Free music</h3>
            <p className="text-sm text-muted-foreground">Local libraries + parks + churches host FREE concerts year-round. Search "[your city] free concerts". Most major cities have weekly summer concert series. Beats $200 ticket — different vibe but real fun.</p>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}

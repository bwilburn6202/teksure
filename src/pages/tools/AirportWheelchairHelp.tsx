import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Plane } from 'lucide-react';

export default function AirportWheelchairHelp() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Airport Wheelchair Help | TekSure" description="How to get free wheelchair assistance at airports. Plain-English guide for senior travelers." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Plane className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Airport Wheelchair Help</h1>
          <p className="text-lg text-muted-foreground">FREE service. Even if you don&apos;t use a wheelchair daily.</p>
        </div>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">When to request</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Tire easily walking long distances.</li>
              <li>Knee/hip/back issues.</li>
              <li>Heart or breathing condition.</li>
              <li>Tight connection times.</li>
              <li>You don&apos;t need to be permanently disabled.</li>
              <li>Federal law (Air Carrier Access Act) requires it free.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">How to request</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>When booking — &quot;Special assistance&quot; checkbox.</li>
              <li>Or call airline 48 hrs before flight.</li>
              <li>Or at airport check-in counter.</li>
              <li>Confirm at gate after check-in.</li>
              <li>Both for departure + arrival airport.</li>
              <li>Ask for help through security too.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">What to expect</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Attendant pushes you through airport.</li>
              <li>Goes through security express line.</li>
              <li>Boards before everyone (early board).</li>
              <li>Helps with carry-on if needed.</li>
              <li>Picks you up at arrival gate.</li>
              <li>Takes you to baggage claim or curb.</li>
              <li>Tip $5-10 per trip (wheelchair attendants are tipped).</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Senior travel tips</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li><strong>TSA PreCheck</strong> — keep shoes on, faster line. $78 for 5 yrs.</li>
              <li><strong>TSA Cares</strong> — call 855-787-2227 for medical assistance.</li>
              <li><strong>Family bathroom</strong> at most airports.</li>
              <li><strong>Shorter walking</strong> — pick gate close to entrance.</li>
              <li><strong>Aisle seat</strong> — easier bathroom access.</li>
              <li><strong>Direct flights</strong> — fewer transfers = less risk.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Bringing your own wheelchair</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Wheelchair flies FREE — never count toward bags.</li>
              <li>Powered chair — ground crew handles batteries.</li>
              <li>Tag chair before gate-check.</li>
              <li>Take photos in case damaged in transit.</li>
              <li>If damaged — file claim immediately at airport.</li>
              <li>Most airlines repair/replace within 30 days.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="bg-muted/40">
          <CardContent className="pt-6">
            <h3 className="font-bold mb-2">Cruise + train</h3>
            <p className="text-sm text-muted-foreground"><strong>Cruises</strong> — accessible cabins fill fast. Book early. Cruise lines provide wheelchair assistance free. <strong>Amtrak</strong> — accessible bedrooms. Senior 65+ discount 10% on most fares. Plan for slower boarding/disembark.</p>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}

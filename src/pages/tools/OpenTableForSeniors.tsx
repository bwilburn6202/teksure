import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { UtensilsCrossed } from 'lucide-react';

export default function OpenTableForSeniors() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="OpenTable for Senior Diners | TekSure" description="Book restaurant reservations easy with OpenTable app. Senior dining tips." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <UtensilsCrossed className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">OpenTable</h1>
          <p className="text-lg text-muted-foreground">Book restaurants without phone calls.</p>
        </div>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">What OpenTable does</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Book restaurant reservations 24/7.</li>
              <li>50,000+ restaurants worldwide.</li>
              <li>Free to use.</li>
              <li>Earn dining points (200 per booking).</li>
              <li>1,000 points = $10 credit.</li>
              <li>No more phone tag for reservations.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">How to book</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Open OpenTable app.</li>
              <li>Search restaurant or cuisine.</li>
              <li>Pick date + time + party size.</li>
              <li>Select available time slot.</li>
              <li>Confirm reservation.</li>
              <li>Get confirmation email/text.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Senior-friendly features</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Add notes — &quot;quiet table preferred.&quot;</li>
              <li>Special requests — birthday, anniversary.</li>
              <li>Save favorite restaurants.</li>
              <li>See restaurant photos + menus first.</li>
              <li>Read reviews before booking.</li>
              <li>Cancel via app — no phone calls.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Resy alternative</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Hotter restaurants often Resy not OpenTable.</li>
              <li>Especially big cities + upscale.</li>
              <li>Free to use.</li>
              <li>Notify on cancellations.</li>
              <li>Owned by American Express.</li>
              <li>Both worth installing.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Yelp for reviews</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Free reviews + photos.</li>
              <li>Check Yelp before booking.</li>
              <li>Save favorites.</li>
              <li>Filter senior-friendly options.</li>
              <li>Often shows hours, parking.</li>
              <li>OpenTable + Yelp combo powerful.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Special tips</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Note your birthday — restaurant often gives free dessert.</li>
              <li>Anniversary gets special treatment.</li>
              <li>Mention dietary restrictions ahead.</li>
              <li>Wheelchair access — request directly.</li>
              <li>Quiet area preference — ask.</li>
              <li>Most restaurants accommodating.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="bg-muted/40">
          <CardContent className="pt-6">
            <h3 className="font-bold mb-2">No more phone calls</h3>
            <p className="text-sm text-muted-foreground">For senior diners, OpenTable eliminates the phone tag of restaurant reservations. Browse + book at any time of day. See photos + reviews before committing. Special requests in notes. Earn $10 credits over time. Free, install once, use forever. Lots more dining options visible than just calling around.</p>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}

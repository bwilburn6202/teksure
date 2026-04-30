import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Key } from 'lucide-react';

export default function VRBOAirbnbCompareSeniors() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="VRBO vs Airbnb for Senior Travelers | TekSure" description="VRBO and Airbnb compared for seniors. Which rental site is better for your trip?" />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Key className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">VRBO vs Airbnb</h1>
          <p className="text-lg text-muted-foreground">Vacation rentals — which is better?</p>
        </div>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">What are vacation rentals?</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Rent someone&apos;s home, condo, or cottage.</li>
              <li>More space than a hotel room.</li>
              <li>Kitchen included — cook your own meals.</li>
              <li>Often cheaper for groups or longer stays.</li>
              <li>More privacy than hotels.</li>
              <li>Good for families visiting multiple generations.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">VRBO — better for seniors</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Whole-home rentals only — no shared spaces.</li>
              <li>No strangers sharing your rental.</li>
              <li>More traditional family vacation homes.</li>
              <li>Clearer pricing up front.</li>
              <li>Better for longer stays (1+ week).</li>
              <li>Owned by Expedia group — established company.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Airbnb — larger selection</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>More listings — more cities and options.</li>
              <li>Includes shared rooms and private rooms.</li>
              <li>Read carefully — whole home vs. shared.</li>
              <li>Often urban-focused.</li>
              <li>Unique stays — treehouses, cabins, etc.</li>
              <li>Better for shorter stays (1–3 nights).</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Safety tips</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Read all reviews carefully — especially negative.</li>
              <li>Look for &quot;Superhost&quot; or &quot;Premier Host&quot; badge.</li>
              <li>Communicate only through the platform.</li>
              <li>Never pay outside the app — scam risk.</li>
              <li>Check refund policy before booking.</li>
              <li>Verify address before arriving.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Accessibility filters</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Airbnb — filter for &quot;no stairs&quot; or &quot;wide doorways.&quot;</li>
              <li>VRBO — search for single-story homes.</li>
              <li>Check description for step count.</li>
              <li>Message host before booking — ask accessibility questions.</li>
              <li>Ground-floor bedroom available?</li>
              <li>Grab bars in bathroom?</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Fees to watch for</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Cleaning fee — often $50–$200 added at checkout.</li>
              <li>Service fee — platform takes a cut.</li>
              <li>Total price often much higher than nightly rate.</li>
              <li>Click &quot;show total&quot; before comparing.</li>
              <li>Some hosts require minimum nights.</li>
              <li>Cancellation policies vary widely.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="bg-muted/40">
          <CardContent className="pt-6">
            <h3 className="font-bold mb-2">VRBO for senior trips</h3>
            <p className="text-sm text-muted-foreground">For most seniors — especially family reunion trips or grandparent visits — VRBO is the better choice. You always get the whole house, never a shared space. Renting a 3-bedroom beach house for a week often costs less per person than a hotel, and everyone has a kitchen and living room together. Filter by pet-friendly or single-story for accessibility.</p>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}

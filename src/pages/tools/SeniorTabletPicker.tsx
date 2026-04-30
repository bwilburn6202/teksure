import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Tablet } from 'lucide-react';

const PICKS = [
  { name: 'Apple iPad (10th generation)', price: '$349 new, $200 refurbished', best: 'Best overall — easiest to use, hooks into the Apple world (FaceTime, iMessage, photos sync with iPhone). Great for video calls with family.', cons: 'Costs more than alternatives.' },
  { name: 'Apple iPad Mini', price: '$499', best: 'Great for those who find a full iPad too heavy. Fits in a purse. Same software as the big iPad.', cons: 'Premium price.' },
  { name: 'Amazon Fire HD 10', price: '$140 (often on sale for $90)', best: 'Cheapest option that\'s actually good. Fine for reading, video calls, news, audiobooks. Big bright screen.', cons: 'Limited app store — no Apple FaceTime, no Google Photos. Mostly Amazon-app-world.' },
  { name: 'Samsung Galaxy Tab A9+', price: '$220', best: 'Real Android with full Google apps (Photos, Calendar, Maps). Cheaper than iPad with similar size and brightness.', cons: 'Less senior-friendly out of the box than iPad — needs more setup.' },
  { name: 'GrandPad', price: '$60-$80/month subscription', best: 'Made specifically for older adults. Big icons, simple interface, video calls only with pre-approved family. Lock-down mode prevents wandering or scams.', cons: 'Subscription cost adds up. Limited beyond the basics.' },
];

export default function SeniorTabletPicker() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Best Tablet for Seniors — Picker With Honest Tradeoffs | TekSure" description="iPad, Fire, Galaxy, or GrandPad? Plain-English picks for older adults — by what they\'ll use it for." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Tablet className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Senior Tablet Picker</h1>
          <p className="text-lg text-muted-foreground">Honest tradeoffs. No mystery jargon.</p>
        </div>

        <Card className="mb-6 bg-primary/5 border-primary/20">
          <CardContent className="pt-6">
            <h2 className="font-bold mb-2">Most important — match the tablet to the person</h2>
            <ul className="text-sm list-disc pl-5">
              <li>If they have an iPhone, an iPad will feel familiar. (Top recommendation for most.)</li>
              <li>If they want cheap and just need email/news/video calls, Fire HD 10 works.</li>
              <li>If they\'ll be using it for grandkid video calls only and you worry about scams or confusion, GrandPad is purpose-built.</li>
            </ul>
          </CardContent>
        </Card>

        <div className="space-y-4">
          {PICKS.map(p => (
            <Card key={p.name}>
              <CardContent className="pt-6">
                <div className="flex justify-between items-baseline mb-2">
                  <h3 className="font-bold text-lg">{p.name}</h3>
                  <span className="text-sm font-semibold text-primary">{p.price}</span>
                </div>
                <p className="text-sm mb-2"><strong>Best for:</strong> {p.best}</p>
                <p className="text-sm text-muted-foreground"><strong>Watch out:</strong> {p.cons}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <Card className="mt-6">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">What size to pick</h2>
            <ul className="list-disc pl-5 space-y-1 text-sm">
              <li><strong>10-11 inch (standard):</strong> Best for reading, video calls, news. Comfortable in two hands.</li>
              <li><strong>8-inch (Mini):</strong> Easier to hold one-handed. Good for travel.</li>
              <li><strong>12-inch+ (iPad Pro):</strong> Overkill for most seniors. Heavy.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mt-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Add-ons worth buying</h2>
            <ul className="list-disc pl-5 space-y-1 text-sm">
              <li><strong>Folio case with stand</strong> — props the tablet up for video calls.</li>
              <li><strong>Bluetooth keyboard</strong> ($30) — for typing emails. Game-changer.</li>
              <li><strong>Apple Pencil or stylus</strong> — only if they like to draw or write notes.</li>
              <li><strong>Screen protector</strong> — strongly recommended; $10 saves $200 in cracked-screen repair.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mt-4 bg-muted/40">
          <CardContent className="pt-6">
            <h3 className="font-bold mb-2">Don't pay full price</h3>
            <p className="text-sm text-muted-foreground">Apple sells "Certified Refurbished" iPads at apple.com — same warranty, $50-$150 cheaper. Amazon Renewed offers iPads and Fire tablets cheap. Black Friday is the best time of year for tablets.</p>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}

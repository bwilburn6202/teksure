import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { BookOpen } from 'lucide-react';

export default function PhotoBookCreator() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Make a Photo Book — Shutterfly, Mixbook, Chatbooks | TekSure" description="Turn phone photos into a real bound book. Best apps, prices, and tips for keepsake gifts and family yearbooks." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <BookOpen className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Make a Photo Book</h1>
          <p className="text-lg text-muted-foreground">Phone photos → real printed book. Great gift, easy to make.</p>
        </div>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Best photo book apps</h2>
            <div className="space-y-3 text-sm">
              <div><strong>Shutterfly</strong> — biggest, most layouts. Often 50% off coupons. Hardcover starts at $30.</div>
              <div><strong>Mixbook</strong> — better quality printing, more design control. $30-60.</div>
              <div><strong>Chatbooks</strong> — easiest. App pulls from Instagram or your camera roll. $10-15 paperback.</div>
              <div><strong>Apple Photos (Mac)</strong> — built into Mac\'s Photos app. Clean designs. $20-100.</div>
              <div><strong>Walgreens / CVS / Walmart</strong> — same-day pickup if you need it fast. Lower quality.</div>
              <div><strong>Snapfish</strong> — competitor to Shutterfly. Similar pricing.</div>
            </div>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Steps (any service)</h2>
            <ol className="list-decimal pl-5 space-y-2 text-sm">
              <li>Install the app or go to the website.</li>
              <li>Pick book size (8×8" softcover is the most common starter size).</li>
              <li>Pick a theme — they\'ll suggest layouts.</li>
              <li>Select photos from your phone or computer.</li>
              <li>Most apps auto-fill the pages — you just rearrange and tweak.</li>
              <li>Add captions and dates. (This is what makes a book special.)</li>
              <li>Order. Hardcover books arrive in 1-2 weeks.</li>
            </ol>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Save on price</h2>
            <ul className="list-disc pl-5 space-y-1 text-sm">
              <li><strong>Coupons:</strong> Shutterfly emails 50% codes weekly. Sign up for their email — wait 48 hours.</li>
              <li><strong>Honey browser extension</strong> auto-applies coupon codes at checkout.</li>
              <li><strong>Black Friday / Mother\'s Day</strong> — both have the deepest discounts.</li>
              <li><strong>Buy a credit pack</strong> — Shutterfly sometimes sells "$25 worth of books for $10" deals.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Photo book ideas worth making</h2>
            <ul className="list-disc pl-5 space-y-1 text-sm">
              <li><strong>Year in review</strong> — every January, make a book of the year. 5 minutes per month, big payoff.</li>
              <li><strong>Big trip</strong> — vacations live forever in a hardcover.</li>
              <li><strong>Grandkid\'s first year</strong> — perfect 1st birthday gift to the parents.</li>
              <li><strong>Wedding</strong> — couple\'s year-1 anniversary gift.</li>
              <li><strong>Family genealogy</strong> — compile old digitized photos with captions.</li>
              <li><strong>Recipe book</strong> — Mom\'s recipes plus photos of family meals.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="bg-muted/40">
          <CardContent className="pt-6">
            <h3 className="font-bold mb-2">Quick Tip</h3>
            <p className="text-sm text-muted-foreground">Photo books take 1-2 hours to make the first time, less after. Order ONE printed copy first, look it over, then order copies for everyone. Saves expensive mistakes.</p>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}

import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { ShoppingCart } from 'lucide-react';

export default function PoshmarkVintageSelling() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Poshmark for Senior Sellers | TekSure" description="Sell vintage clothing + accessories on Poshmark. Senior selling guide." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <ShoppingCart className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Poshmark</h1>
          <p className="text-lg text-muted-foreground">Sell clothing + accessories.</p>
        </div>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">What is Poshmark?</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Clothing-focused selling app.</li>
              <li>80 million users.</li>
              <li>Vintage + designer especially popular.</li>
              <li>Easier than eBay for clothes.</li>
              <li>Free to list.</li>
              <li>20% commission on sales.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">What sells well</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Vintage clothing — 50s-90s.</li>
              <li>Designer handbags.</li>
              <li>Costume jewelry.</li>
              <li>Vintage scarves.</li>
              <li>Quality leather goods.</li>
              <li>Mid-century accessories.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Listing process</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Photograph item — multiple angles.</li>
              <li>Tap List An Item.</li>
              <li>Add brand, size, condition.</li>
              <li>Set price.</li>
              <li>Poshmark provides shipping label after sale.</li>
              <li>Pack + drop at USPS.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Vintage especially valuable</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>50s + 60s pieces have collectors.</li>
              <li>Younger generations love vintage.</li>
              <li>Original tags add value.</li>
              <li>Clean carefully but don&apos;t over-restore.</li>
              <li>Document era + style.</li>
              <li>Mention era in listing title.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Shipping</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Poshmark prepaid shipping label.</li>
              <li>Up to 5 lbs included.</li>
              <li>Buyer pays $7.97 flat shipping.</li>
              <li>Drop at any USPS or schedule pickup.</li>
              <li>Use any box from home.</li>
              <li>Pad fragile items well.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Senior tips</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Start with 5 best vintage items.</li>
              <li>Photograph in natural light.</li>
              <li>Honest condition descriptions.</li>
              <li>Negotiate offers — accept reasonable.</li>
              <li>Build positive reviews.</li>
              <li>Persistence — items take weeks to sell.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="bg-muted/40">
          <CardContent className="pt-6">
            <h3 className="font-bold mb-2">Closet from past 30 years = goldmine</h3>
            <p className="text-sm text-muted-foreground">Many seniors have closets of vintage clothing from 70s, 80s, 90s. Younger generations love vintage. Pieces may sell for $50–$300+. Poshmark&apos;s flat-rate shipping makes selling easy. List 5 items this week. Watch what sells. Free spring closet cleaning that funds your next vacation.</p>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}

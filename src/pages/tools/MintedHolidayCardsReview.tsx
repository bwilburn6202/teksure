import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Sparkles } from 'lucide-react';

export default function MintedHolidayCardsReview() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Minted Holiday Cards for Seniors | TekSure" description="Premium holiday cards from Minted reviewed for senior gift card senders." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Sparkles className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Minted</h1>
          <p className="text-lg text-muted-foreground">Premium designer holiday cards.</p>
        </div>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Why Minted?</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Designer-quality cards.</li>
              <li>Independent artists curated.</li>
              <li>Higher quality than Shutterfly.</li>
              <li>More expensive — $2–$4 per card.</li>
              <li>Free address printing on envelopes.</li>
              <li>Concierge service for help.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Holiday cards</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Photo holiday cards.</li>
              <li>Foil-stamped designs.</li>
              <li>Letterpress options.</li>
              <li>Religious + secular.</li>
              <li>Save the date + wedding announcements.</li>
              <li>New baby announcements.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Free address printing</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Upload Excel of addresses.</li>
              <li>Or import from contacts.</li>
              <li>Minted prints addresses on envelopes.</li>
              <li>Free service.</li>
              <li>Saves hours of handwriting.</li>
              <li>Professional return address too.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Other Minted products</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Wedding invitations + paper goods.</li>
              <li>Wall art + photo prints.</li>
              <li>Calendars + journals.</li>
              <li>Stationery sets.</li>
              <li>Higher-end gifts.</li>
              <li>Quality + price match.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Cost comparison</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Shutterfly cards — $1 each on sale.</li>
              <li>Minted cards — $2–$4 each.</li>
              <li>Worth premium if quality matters.</li>
              <li>Or for special occasions.</li>
              <li>Combine — Minted for VIP list, Shutterfly for rest.</li>
              <li>Watch sales for both.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">When Minted is worth it</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>50th anniversary celebration.</li>
              <li>Big family announcement.</li>
              <li>Wedding paper goods.</li>
              <li>Memorial cards.</li>
              <li>When premium quality matters.</li>
              <li>Fine paper feels different.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="bg-muted/40">
          <CardContent className="pt-6">
            <h3 className="font-bold mb-2">Shutterfly for volume, Minted for quality</h3>
            <p className="text-sm text-muted-foreground">For sending 50–100 holiday cards yearly, Shutterfly during 50% off sales saves significantly. For special occasions — golden anniversary, milestone birthdays, weddings — Minted&apos;s premium quality is worth the extra cost. Many seniors use both depending on occasion. Free address printing makes either much faster than handwriting.</p>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}

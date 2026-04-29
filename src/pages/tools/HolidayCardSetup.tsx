import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Heart } from 'lucide-react';

export default function HolidayCardSetup() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Holiday Card Setup for Seniors | TekSure" description="Mail 50 holiday cards in 1 hour. Plain-English picks for digital + automated holiday card services." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Heart className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Holiday Card Setup</h1>
          <p className="text-lg text-muted-foreground">Done in 1 hour.</p>
        </div>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Best holiday card services</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li><strong>Shutterfly</strong> — biggest. 50%+ sales constantly. $1-2/card.</li>
              <li><strong>Minted</strong> — premium cards. Best designs.</li>
              <li><strong>Snapfish</strong> — cheapest. $0.70-1.50/card.</li>
              <li><strong>Mixbook</strong> — mid-range, beautiful.</li>
              <li><strong>Costco Photo Center</strong> — best value if member.</li>
              <li>All ship to YOU — you address + mail.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Address-and-mail-for-you</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li><strong>Postable</strong> — they print + address + mail. $2-3/card.</li>
              <li><strong>Mixbook Send</strong> — same.</li>
              <li><strong>Punkpost</strong> — handwritten cards.</li>
              <li>Best for: 50+ cards, mobility issues, time-saver.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Workflow that works</h2>
            <ol className="list-decimal pl-5 space-y-2 text-sm">
              <li>October — pick photo for card (family photo from year).</li>
              <li>October-November — design at Shutterfly + watch for 50% off.</li>
              <li>Mid-November — order. Arrives in 5-7 days.</li>
              <li>December 1-5 — address + sign + mail.</li>
              <li>Mail by Dec 12 = arrives by Christmas.</li>
              <li>Or use Postable to handle ALL of it.</li>
            </ol>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Save the address book</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Type addresses into Apple Contacts ONCE — save forever.</li>
              <li>Or use Postable&apos;s address book.</li>
              <li>Update each year as people move.</li>
              <li>Re-use list for: holidays, birthdays, occasional letters.</li>
              <li>10 min upfront = years of saved time.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="bg-muted/40">
          <CardContent className="pt-6">
            <h3 className="font-bold mb-2">Skip the year-in-review letter</h3>
            <p className="text-sm text-muted-foreground">Long "letter from the family" most people don&apos;t read. Photo card + handwritten "thinking of you" line means more. 30 short personal notes &gt; 30 mass letters.</p>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}

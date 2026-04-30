import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Backpack } from 'lucide-react';

export default function EvacuationGoBag() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Evacuation Go-Bag for Seniors | TekSure" description="3-day emergency go-bag. Plain-English checklist of essentials seniors need to grab + go in 60 seconds." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Backpack className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Evacuation Go-Bag</h1>
          <p className="text-lg text-muted-foreground">Pack now. Grab in 60 seconds.</p>
        </div>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Senior go-bag essentials</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li><strong>7-day medications</strong> — rotate every 3 months.</li>
              <li><strong>Glasses + reading glasses</strong> — extra pair.</li>
              <li><strong>Hearing aid + batteries</strong>.</li>
              <li><strong>Denture supplies</strong>.</li>
              <li><strong>Photo ID + passport copy</strong>.</li>
              <li><strong>Insurance cards</strong>.</li>
              <li><strong>Doctor + medication list</strong>.</li>
              <li><strong>Emergency contacts</strong>.</li>
              <li><strong>$200-500 cash</strong> in small bills.</li>
              <li><strong>Phone charger + power bank</strong>.</li>
              <li><strong>Flashlight + spare batteries</strong>.</li>
              <li><strong>3-day clothes + closed-toe shoes</strong>.</li>
              <li><strong>Toiletries</strong> + medications, masks.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Documents in waterproof bag</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Birth + marriage certificates.</li>
              <li>Passport.</li>
              <li>Driver&apos;s license / state ID.</li>
              <li>Social Security card (or copy).</li>
              <li>Medicare card.</li>
              <li>Insurance — health, home, auto.</li>
              <li>Will + estate documents (or location).</li>
              <li>Bank account list (numbers, NOT passwords).</li>
              <li>Pet papers (vaccinations, microchip).</li>
              <li>Family photo (in case separated).</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Pet go-bag</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>3 days food + water.</li>
              <li>Leash + carrier.</li>
              <li>Medications.</li>
              <li>Vaccination records.</li>
              <li>Photo (if separated).</li>
              <li>Comfort toy.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Where to keep</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Closet near front door.</li>
              <li>Backpack — easier to carry than suitcase.</li>
              <li>Tell family WHERE it is.</li>
              <li>Check + refresh every 6 months.</li>
              <li>Keep KEYS by bag.</li>
              <li>Have second smaller bag in car trunk.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="bg-muted/40">
          <CardContent className="pt-6">
            <h3 className="font-bold mb-2">Daily essentials separately</h3>
            <p className="text-sm text-muted-foreground">Don&apos;t put critical daily items (current meds, glasses, hearing aids) IN the bag — you need them daily. Have a "grab" list taped on bag: phone + glasses + hearing aid + meds. 30 seconds. Out the door.</p>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}

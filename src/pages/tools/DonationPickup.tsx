import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Truck } from 'lucide-react';

const SERVICES = [
  { name: 'Vietnam Veterans of America (VVA)', what: 'Most popular FREE pickup. Schedule online. Clothing, furniture, electronics.', good: 'pickupplease.org or 1-855-784-7424.' },
  { name: 'Salvation Army', what: 'FREE pickup. Furniture, appliances, clothing.', good: 'satruck.org or call local thrift.' },
  { name: 'Habitat for Humanity ReStore', what: 'FREE pickup of building materials, furniture, appliances. Sales fund Habitat homes.', good: 'habitat.org/restores.' },
  { name: 'GreenDrop', what: 'FREE pickup partnering with several charities (Purple Heart, etc.).', good: 'gogreendrop.com.' },
  { name: 'Goodwill', what: 'Most locations don\'t pickup. Drive donations to nearest store.', good: 'BUT some larger locations DO pickup furniture.' },
  { name: 'Furniture Bank Network', what: 'Donates to families fleeing domestic violence and homelessness.', good: 'help-furniturebanks.org.' },
  { name: 'Books Through Bars / local library Friends', what: 'FREE drop-off donations of books.', good: 'Library "Friends" group runs annual sale.' },
  { name: 'PickupMyDonation.com', what: 'Aggregator finds free pickup in your zip code.', good: 'Single search across multiple charities.' },
];

export default function DonationPickup() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Free Donation Pickup Services | TekSure" description="Free pickup of furniture, clothing, electronics. Plain-English guide to charities that come to your door — VVA, Salvation Army, Habitat ReStore." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Truck className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Donation Pickup</h1>
          <p className="text-lg text-muted-foreground">Free pickup at your door. Tax deduction. Cleared garage.</p>
        </div>

        <div className="space-y-3 mb-6">
          {SERVICES.map(s => (
            <Card key={s.name}>
              <CardContent className="pt-6">
                <h3 className="font-bold text-lg">{s.name}</h3>
                <p className="text-sm">{s.what}</p>
                <p className="text-sm text-muted-foreground">{s.good}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">How pickup works</h2>
            <ol className="list-decimal pl-5 space-y-2 text-sm">
              <li>Schedule online or by phone — give a list of items.</li>
              <li>Pickup window is usually 4 hours wide.</li>
              <li>Items go on the porch, driveway, or in the garage. Truck driver doesn\'t enter the home.</li>
              <li>You get a tax-deductible receipt — keep it.</li>
              <li>Call back if items get damaged or lost.</li>
            </ol>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">What\'s usually accepted</h2>
            <ul className="list-disc pl-5 space-y-1 text-sm">
              <li>Couches, chairs, tables, beds (frame and mattress vary).</li>
              <li>Working appliances.</li>
              <li>Clothing, shoes, hats.</li>
              <li>Books, DVDs.</li>
              <li>Working electronics (older TVs may not be).</li>
              <li>Toys.</li>
              <li>Kitchen and household items.</li>
            </ul>
            <p className="text-sm mt-2"><strong>Usually NOT</strong>: torn upholstery, mattresses without protector, broken items, big-box junk. Look at the charity\'s "what we accept" list.</p>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Tax deduction</h2>
            <ul className="list-disc pl-5 space-y-1 text-sm">
              <li>Save the receipt — required for amounts over $250.</li>
              <li>Take photos of donated items before pickup.</li>
              <li>Use IT\'S DEDUCTIBLE app or Goodwill Donation Tracker for fair-market values.</li>
              <li>Deductible only if you ITEMIZE. With high senior standard deductions, many won\'t.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="bg-muted/40">
          <CardContent className="pt-6">
            <h3 className="font-bold mb-2">Pair with downsizing</h3>
            <p className="text-sm text-muted-foreground">If moving or decluttering, schedule pickups in waves. Use NASMM (Senior Move Manager) to coordinate the whole process — they\'ll handle pickup scheduling, sales of valuable items, and donation receipts.</p>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}

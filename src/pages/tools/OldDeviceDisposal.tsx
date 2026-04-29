import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Recycle } from 'lucide-react';

const PLACES = [
  { name: 'Apple Trade In', what: 'Old iPhone, iPad, Mac, Watch. Get gift card or credit toward new device. They handle data wipe.', good: 'apple.com/trade-in' },
  { name: 'Best Buy Recycling', what: 'Most electronics — phones, laptops, TVs, batteries. Free for many items.', good: '3 items per household per day.' },
  { name: 'Staples / Office Depot', what: 'Free recycling of small electronics, ink, batteries.', good: 'Convenient drop-off.' },
  { name: 'Carrier (Verizon/AT&T/T-Mobile)', what: 'Phone trade-in for credit on new phone or service.', good: 'Best for active phone customers.' },
  { name: 'Decluttr / GadgetGoneApp / Gazelle', what: 'Mail-in services. Free shipping. Pays cash for usable phones, tablets, laptops.', good: 'Best for older devices still working.' },
  { name: 'eBay / Swappa', what: 'Sell directly. Higher payout but more work.', good: 'Best resale value.' },
  { name: 'Local e-waste recycling event', what: 'Free electronic recycling held by towns/cities. Search "[town] e-waste day".', good: 'For TVs, monitors, microwaves.' },
  { name: 'Goodwill / Salvation Army', what: 'Donate working phones/laptops. They wipe data, resell.', good: 'Tax-deductible.' },
  { name: 'Cell Phones for Soldiers / Domestic violence shelters', what: 'Donate working phones for charity.', good: 'Helps those in need.' },
];

export default function OldDeviceDisposal() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Old Device Disposal — Recycle, Sell, Donate Safely | TekSure" description="That drawer of old phones and laptops? Plain-English guide to wiping data, recycling, selling, or donating safely." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Recycle className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Old Device Disposal</h1>
          <p className="text-lg text-muted-foreground">Clear out the drawer of old phones — safely.</p>
        </div>

        <Card className="mb-6 bg-primary/5 border-primary/20">
          <CardContent className="pt-6">
            <h2 className="font-bold mb-2">⚠️ Wipe data FIRST</h2>
            <p className="text-sm">Old phones and computers contain banking, photos, contacts, accounts. Always WIPE before donating or recycling. (See our "Erase Old Phone" tool.) For old hard drives — hammer + drill = guaranteed wiped, or pay $5 at a UPS Store for shredding.</p>
          </CardContent>
        </Card>

        <div className="space-y-3 mb-6">
          {PLACES.map(p => (
            <Card key={p.name}>
              <CardContent className="pt-6">
                <h3 className="font-bold text-lg">{p.name}</h3>
                <p className="text-sm mb-1">{p.what}</p>
                <p className="text-sm text-muted-foreground">{p.good}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Where each device goes</h2>
            <ul className="list-disc pl-5 space-y-1 text-sm">
              <li><strong>Working phone (less than 5 years old)</strong> — Apple Trade In, carrier, or Decluttr.</li>
              <li><strong>Old phone (5+ years)</strong> — recycle at Best Buy or e-waste event.</li>
              <li><strong>Old laptop with HDD/SSD</strong> — wipe drive, then Best Buy or sell on eBay.</li>
              <li><strong>Old TV</strong> — Best Buy ($30 fee), e-waste day (free), or Salvation Army (if working).</li>
              <li><strong>Old desktop tower</strong> — Best Buy or e-waste day.</li>
              <li><strong>Old printer</strong> — Best Buy (free for some), Staples.</li>
              <li><strong>Batteries</strong> — Best Buy, Home Depot, Staples — never throw in trash.</li>
              <li><strong>Cables, chargers</strong> — Best Buy or e-waste day.</li>
              <li><strong>External hard drive with sensitive data</strong> — physically destroy (drill or hammer) before recycling.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Maximize trade-in value</h2>
            <ul className="list-disc pl-5 space-y-1 text-sm">
              <li>Trade in within first year of new model launch — values drop fast.</li>
              <li>Compare offers — Apple, Best Buy, your carrier all offer different prices.</li>
              <li>Original box and charger boost value $20-50.</li>
              <li>Crack-free screen worth way more.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="bg-muted/40">
          <CardContent className="pt-6">
            <h3 className="font-bold mb-2">DON\'T put in regular trash</h3>
            <p className="text-sm text-muted-foreground">Electronics contain lead, mercury, lithium that pollute landfills. Many states ban e-waste in trash. Also — your old data could be recovered. Always recycle properly.</p>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}

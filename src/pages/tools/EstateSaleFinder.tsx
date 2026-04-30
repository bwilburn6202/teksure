import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Tag } from 'lucide-react';

const SITES = [
  { name: 'EstateSales.net', what: 'Biggest estate sale finder. Photos of items, addresses, dates.', good: 'Your local Saturday treasure hunt.' },
  { name: 'EstateSales.org', what: 'Alternative listing.', good: 'Different sales listed here.' },
  { name: 'Maxsold', what: 'Online auction format. Bid on items at upcoming sales.', good: 'Bid before the rush.' },
  { name: 'Everything But the House', what: 'Online estate auctions. Pickup at the home.', good: 'Modern online estate sale.' },
  { name: 'AuctionZip', what: 'Live auctions, including estate auctions.', good: 'For experienced buyers.' },
  { name: 'CTBids (Caring Transitions)', what: 'Senior move + estate sales.', good: 'Comprehensive senior-focused.' },
  { name: 'Local Facebook Marketplace', what: 'Lots of items from estate sales appear here individually.', good: 'For specific items.' },
];

export default function EstateSaleFinder() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Estate Sale Finder — EstateSales.net, Maxsold | TekSure" description="Find local estate sales for great deals — or hire a pro to run yours. Plain-English guide to finding sales, bidding online, and selling your own estate." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Tag className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Estate Sale Finder</h1>
          <p className="text-lg text-muted-foreground">Hunt treasures. Or sell your own.</p>
        </div>

        <div className="space-y-3 mb-6">
          {SITES.map(s => (
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
            <h2 className="font-bold text-xl mb-3">Best deals at estate sales</h2>
            <ul className="list-disc pl-5 space-y-1 text-sm">
              <li>Furniture — old well-built pieces 10-20% of new.</li>
              <li>Books — often $0.50-2 each.</li>
              <li>Jewelry — costume often great deals; have fine jewelry appraised before bidding.</li>
              <li>Art — varies wildly. Research before buying expensive.</li>
              <li>Tools — often retired DIY-er\'s lifetime of high-quality tools.</li>
              <li>Vintage clothing.</li>
              <li>Records, comics, sports cards — some hidden gems.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">When YOU need to sell an estate</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li><strong>NASMM Senior Move Manager</strong> — coordinates entire process. (See our Senior Downsizing tool.)</li>
              <li><strong>Estate sale company</strong> — runs sale for 25-40% commission. Find one rated highly on EstateSales.net.</li>
              <li><strong>Maxsold / Everything But the House</strong> — online auction, no in-person foot traffic.</li>
              <li><strong>DIY garage sale</strong> — only for small items, smaller estates.</li>
              <li><strong>Donation pickup + tax deduction</strong> — for what you don\'t want to sell. (See our Donation Pickup tool.)</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="bg-muted/40">
          <CardContent className="pt-6">
            <h3 className="font-bold mb-2">Tip for buyers</h3>
            <p className="text-sm text-muted-foreground">Last day of an estate sale is usually 50% off. Walk away from anything overpriced — and come back the last day. Items still there often go cheap.</p>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}

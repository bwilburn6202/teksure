import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Tag } from 'lucide-react';

export default function SeniorYardSaleStrategy() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Yard Sale Tech for Senior Downsizers | TekSure" description="Apps + tech to make your yard sale successful. Senior downsizing strategies." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Tag className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Yard Sale Tech</h1>
          <p className="text-lg text-muted-foreground">Modern tools, old-school sale.</p>
        </div>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Advertise online</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>YardSaleSearch.com — free listing.</li>
              <li>Facebook Marketplace yard sale post.</li>
              <li>Nextdoor neighbor app.</li>
              <li>Local Facebook groups.</li>
              <li>Plus printed signs.</li>
              <li>Plus newspaper classifieds.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Accept digital payments</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Venmo or Zelle for buyer convenience.</li>
              <li>Square Reader for credit cards ($10).</li>
              <li>Apple Pay if buyer has it.</li>
              <li>Cash still primary.</li>
              <li>$50+ items — verify Venmo cleared.</li>
              <li>Don&apos;t accept checks.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Pricing apps</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Quick eBay search for similar items.</li>
              <li>WorthPoint — auction history.</li>
              <li>Find what items have sold for.</li>
              <li>Yard sale price = 25–50% of online.</li>
              <li>Mark up + negotiate down.</li>
              <li>Have prices on every item.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Print signs at home</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Canva — free poster templates.</li>
              <li>Print 10+ signs.</li>
              <li>Big arrows pointing to sale.</li>
              <li>Place at major intersections.</li>
              <li>Include date + address.</li>
              <li>Bright colors.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Senior safety</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Don&apos;t do it alone.</li>
              <li>Family + friends help.</li>
              <li>Cash in fanny pack on you.</li>
              <li>Don&apos;t leave money in garage unattended.</li>
              <li>Lock house doors during sale.</li>
              <li>Don&apos;t let buyers in house for restroom.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">After the sale</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Donate remaining to Goodwill.</li>
              <li>Goodwill app for pickup.</li>
              <li>Track tax-deductible donations.</li>
              <li>1-800-GOT-JUNK for hauls.</li>
              <li>Tally cash + count.</li>
              <li>Celebrate with family.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="bg-muted/40">
          <CardContent className="pt-6">
            <h3 className="font-bold mb-2">Modern + traditional combined</h3>
            <p className="text-sm text-muted-foreground">Best yard sale = traditional setup + online advertising. Post on Nextdoor + Facebook Marketplace 3 days ahead. Print Canva signs the night before. Accept cash + Venmo. Tag everything. Bring helpers. Senior downsizers can clear thousands of items in one weekend with this combo. Donate the rest.</p>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}

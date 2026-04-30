import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Disc } from 'lucide-react';

export default function DiscogsForRecordCollectors() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Discogs for Senior Record Collectors | TekSure" description="Identify, value, sell vinyl records. Discogs app for senior music collectors." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Disc className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Discogs</h1>
          <p className="text-lg text-muted-foreground">Vinyl records database + marketplace.</p>
        </div>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">What is Discogs?</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>World&apos;s largest music database.</li>
              <li>Identify any record.</li>
              <li>See current values.</li>
              <li>Buy + sell vinyl.</li>
              <li>9 million users.</li>
              <li>Free.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Identify records</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Photograph record cover.</li>
              <li>Or enter catalog number.</li>
              <li>App shows pressings + values.</li>
              <li>1965 first pressing vs 1985 reissue different.</li>
              <li>Some records worth thousands.</li>
              <li>Many seniors have valuable collections.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Catalog your collection</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Scan barcodes to add to collection.</li>
              <li>Build digital catalog.</li>
              <li>Track value over time.</li>
              <li>Insurance documentation.</li>
              <li>Estate planning records.</li>
              <li>Heirs know what&apos;s valuable.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Sell records</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>List on Discogs marketplace.</li>
              <li>Set price based on database.</li>
              <li>Worldwide buyer pool.</li>
              <li>Better prices than eBay typically.</li>
              <li>8% seller fee.</li>
              <li>Pack carefully + insure.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Buy records</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Find rare records globally.</li>
              <li>Read seller ratings.</li>
              <li>Specify condition you accept.</li>
              <li>Compare prices across sellers.</li>
              <li>Replace old beloved records.</li>
              <li>Find never-found-elsewhere.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Vinyl revival</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Vinyl outsells CDs again.</li>
              <li>Younger generations love.</li>
              <li>Senior collections valuable.</li>
              <li>Don&apos;t throw out old records.</li>
              <li>Some pressings worth $1,000+.</li>
              <li>Check before discarding.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="bg-muted/40">
          <CardContent className="pt-6">
            <h3 className="font-bold mb-2">Catalog before downsizing</h3>
            <p className="text-sm text-muted-foreground">Before downsizing or estate cleanup, catalog your record collection with Discogs. The 30-minute scanning of 50 records may reveal $2,000+ in value. Don&apos;t throw out old vinyl without checking. Family members may not realize value either. Many estate sales sell rare records for $5 that should fetch $200.</p>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}

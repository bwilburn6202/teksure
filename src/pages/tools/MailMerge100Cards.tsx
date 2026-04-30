import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { ListChecks } from 'lucide-react';

export default function MailMerge100Cards() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Mailing 100 Holiday Cards Without Hand Cramps | TekSure" description="Print address labels in bulk. Mail merge for senior holiday card senders." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <ListChecks className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Bulk Holiday Cards</h1>
          <p className="text-lg text-muted-foreground">No more hand cramps from addresses.</p>
        </div>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Use printer&apos;s addressing</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Shutterfly + Minted print addresses free on envelopes.</li>
              <li>Upload Excel of addresses.</li>
              <li>Or import from Google Contacts.</li>
              <li>Eliminates handwriting.</li>
              <li>Best feature for arthritic seniors.</li>
              <li>Use this whenever possible.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Print labels yourself</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Buy Avery 5160 labels at office store.</li>
              <li>Use Avery&apos;s free design tool online.</li>
              <li>Or Microsoft Word mail merge.</li>
              <li>Print all labels at once.</li>
              <li>Stick on envelopes.</li>
              <li>Way faster than handwriting.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Build address book once</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Excel or Google Sheets columns: Name, Address, City, State, Zip.</li>
              <li>Build it once over a few sessions.</li>
              <li>Use it every year forward.</li>
              <li>Update only when people move.</li>
              <li>Share with adult children for emergencies.</li>
              <li>Saves hours every year.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Writing inside cards</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Sign once, then take photo.</li>
              <li>Or use stamp with your signature.</li>
              <li>Pre-print message inside (Shutterfly/Minted offer this).</li>
              <li>Personalize only special cards by hand.</li>
              <li>Reduce wrist strain.</li>
              <li>Quality of cards more important than handwritten.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Stamps in bulk</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Buy 100 forever stamps at once.</li>
              <li>USPS.com — order online, mailed to you.</li>
              <li>No trip to post office.</li>
              <li>Forever stamps don&apos;t expire.</li>
              <li>Coil stamps — use stamp roller for speed.</li>
              <li>Self-adhesive easier than wet sponge.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Drop off vs mail</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>USPS pickup — schedule online.</li>
              <li>Mail carrier picks up from your home.</li>
              <li>No box trip required.</li>
              <li>Free with prepaid postage.</li>
              <li>Schedule day before.</li>
              <li>Game-changer for senior mailing.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="bg-muted/40">
          <CardContent className="pt-6">
            <h3 className="font-bold mb-2">Free address printing changes everything</h3>
            <p className="text-sm text-muted-foreground">If you send 50+ holiday cards yearly, free address printing from Shutterfly or Minted is genuinely transformative. Upload Excel of addresses, they print envelopes, you stuff cards + apply stamps. What used to be 5+ hours of hand-cramping work becomes 30 minutes. The cost savings + time savings + reduced wrist pain make this one of the best senior tech upgrades.</p>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}

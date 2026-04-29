import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { ListChecks } from 'lucide-react';

const APPS = [
  { name: 'Apple Notes (built-in)', cost: 'FREE', best: 'Use built-in iPhone Notes. Make a folder. Photo each room. List items. Done.', good: 'Best simple.' },
  { name: 'Sortly', cost: 'FREE basic / $50/year Plus', best: 'Best dedicated home inventory app. Barcode scanning, room labels, value tracking.', good: 'Best overall.' },
  { name: 'Encircle (was Magic Home Inventory)', cost: 'FREE', best: 'Free, simple. Photo + list. Built for insurance claims.', good: 'Best free.' },
  { name: 'Nest Egg (Inventory)', cost: 'FREE / $5 Pro', best: 'Tracks value over time. Receipts. Senior-friendly UI.', good: 'Best UI.' },
  { name: 'Microsoft Excel/Numbers', cost: 'FREE', best: 'Old-school spreadsheet. Item, room, value, date bought. Save photos in folders.', good: 'Best for spreadsheet fans.' },
];

export default function HomeInventoryApps() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Home Inventory Apps — Insurance Ready | TekSure" description="Document your stuff before disaster. Plain-English picks for free apps to photograph and list household items for insurance claims." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <ListChecks className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Home Inventory Apps</h1>
          <p className="text-lg text-muted-foreground">Insurance company will ask. Have it ready.</p>
        </div>

        <div className="space-y-3 mb-6">
          {APPS.map(a => (
            <Card key={a.name}>
              <CardContent className="pt-6">
                <div className="flex justify-between items-baseline mb-1">
                  <h3 className="font-bold text-lg">{a.name}</h3>
                  <span className="text-sm font-semibold text-primary">{a.cost}</span>
                </div>
                <p className="text-sm">{a.best}</p>
                <p className="text-sm text-muted-foreground">{a.good}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <Card className="mb-4 bg-yellow-50 border-yellow-300 dark:bg-yellow-950/20 dark:border-yellow-800">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Why bother</h2>
            <p className="text-sm">After a fire, theft, or flood — insurance asks for a list of what you owned, value, and proof. Without inventory, claims drop 40-60%. With photos and receipts — full payout.</p>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">2-hour quick inventory</h2>
            <ol className="list-decimal pl-5 space-y-2 text-sm">
              <li>Walk through each room with phone.</li>
              <li>Open each closet, drawer, cabinet.</li>
              <li>Take VIDEO of each room (faster than photos).</li>
              <li>Narrate as you go: "Dell XPS laptop, 2022, $1,200. 65" Samsung TV, 2024, $800."</li>
              <li>Open jewelry boxes — high-value items individually photographed.</li>
              <li>Save video to iCloud + email a copy to yourself.</li>
              <li>Re-do once a year.</li>
            </ol>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">High-priority items to document</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>TVs, computers, tablets, phones (with serial numbers).</li>
              <li>Jewelry (with appraisals if any).</li>
              <li>Watches, art, collectibles.</li>
              <li>Tools, power equipment, lawn mower.</li>
              <li>Designer handbags, fur coats.</li>
              <li>Antiques and inherited items (these need separate appraisals for full coverage).</li>
              <li>Firearms — list make, model, serial.</li>
              <li>Musical instruments.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Save receipts</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Snap photo of receipt right after purchase. Save to Photos > "Receipts" album.</li>
              <li>Or scan to Apple Notes / Google Drive.</li>
              <li>Email receipts — keep a "Receipts" email folder forever.</li>
              <li>Box with original packaging in basement = also proof.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="bg-muted/40">
          <CardContent className="pt-6">
            <h3 className="font-bold mb-2">Where to keep the inventory</h3>
            <p className="text-sm text-muted-foreground">Cloud (iCloud, Google Drive). Separate USB drive at a relative&apos;s house. NOT just on your phone — that burns in the same fire as the house. Email a copy to your home insurance agent so they have it on file.</p>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}

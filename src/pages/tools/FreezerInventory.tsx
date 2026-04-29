import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Snowflake } from 'lucide-react';

export default function FreezerInventory() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Freezer Inventory — Stop Wasting Food | TekSure" description="Apps and simple systems for tracking what&apos;s in your freezer. Stop buying duplicates and tossing freezer-burned mystery meat." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Snowflake className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Freezer Inventory</h1>
          <p className="text-lg text-muted-foreground">Save $300+/year on food you forgot you had.</p>
        </div>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Free apps</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li><strong>Pantry Check</strong> — free iPhone/Android. Scan barcode → adds to list. Tracks expiration.</li>
              <li><strong>NoWaste</strong> — free. Tracks freezer, fridge, pantry. Reminds you when items are old.</li>
              <li><strong>Apple Notes / Google Keep</strong> — simplest option. Just type a list.</li>
              <li><strong>Excel / Google Sheets</strong> — column for item, quantity, date frozen.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">The no-app system</h2>
            <ol className="list-decimal pl-5 space-y-2 text-sm">
              <li>Tape a piece of paper to the freezer door.</li>
              <li>When you put something in — write it down + date.</li>
              <li>When you take it out — cross it off.</li>
              <li>Once a month, check what&apos;s near the bottom.</li>
            </ol>
            <p className="text-sm mt-3">Sounds silly. Works perfectly. No charging, no apps.</p>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">How long things actually last frozen</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li><strong>Beef, pork, lamb (raw)</strong> — 6-12 months.</li>
              <li><strong>Chicken (raw)</strong> — 9 months. Pieces 4-6 months.</li>
              <li><strong>Cooked meat / leftovers</strong> — 2-3 months.</li>
              <li><strong>Bread, baked goods</strong> — 2-3 months.</li>
              <li><strong>Vegetables (blanched)</strong> — 8-12 months.</li>
              <li><strong>Fruit</strong> — 8-12 months.</li>
              <li><strong>Soup, stew</strong> — 2-3 months.</li>
              <li><strong>Fish</strong> — fatty 2-3 months, lean 6 months.</li>
            </ul>
            <p className="text-sm mt-3">Frozen food doesn&apos;t go bad — it loses quality. After the dates above it&apos;s safe but tastes worse.</p>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Label everything</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Painter&apos;s tape + Sharpie. $5 setup.</li>
              <li>Write WHAT and DATE FROZEN.</li>
              <li>"2 lbs chicken thighs — 2/15/26"</li>
              <li>Saves the "what is this?" mystery in 6 months.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="bg-muted/40">
          <CardContent className="pt-6">
            <h3 className="font-bold mb-2">"Eat from the freezer" week</h3>
            <p className="text-sm text-muted-foreground">Every 3 months, do an "eat from the freezer" week. Skip the grocery store. Cook only what&apos;s already frozen. Forces rotation, rediscovers forgotten meals, saves $100-200 in groceries that week.</p>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}

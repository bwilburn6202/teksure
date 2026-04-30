import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Coffee } from 'lucide-react';

export default function StarbucksAppRewards() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Starbucks App for Senior Customers | TekSure" description="Order ahead, earn rewards, save money. Starbucks app guide for seniors." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Coffee className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Starbucks App</h1>
          <p className="text-lg text-muted-foreground">Order ahead. Save money. Earn rewards.</p>
        </div>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Order ahead</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Place order in app.</li>
              <li>Skip the line — drink ready when you arrive.</li>
              <li>Especially helpful for arthritic hands.</li>
              <li>No standing in long line.</li>
              <li>Customize easily — modifications saved.</li>
              <li>5–10 minutes faster typical visit.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Stars rewards</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Earn Stars per dollar spent.</li>
              <li>25 Stars — extra shot or syrup free.</li>
              <li>100 Stars — handcrafted drink free.</li>
              <li>200 Stars — sandwich or salad.</li>
              <li>400 Stars — merchandise or whole bean.</li>
              <li>Stars expire after 6 months — use them.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Pay through app</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Reload Starbucks card via app.</li>
              <li>Earn 2 Stars per dollar paying through app.</li>
              <li>1 Star per dollar paying with credit card.</li>
              <li>Auto-reload to never run dry.</li>
              <li>Save QR code in Apple Wallet.</li>
              <li>Tap phone to pay.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Senior savings tips</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Free hot water + tea bag = bring your own tea.</li>
              <li>Senior coffee discount sometimes available.</li>
              <li>AARP discount — check for current promo.</li>
              <li>Bring own cup — discount + earn Stars.</li>
              <li>Free refills on tea + coffee with reward.</li>
              <li>Add savings up over months.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Starbucks for non-coffee drinkers</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Tea — green, herbal, black.</li>
              <li>Hot chocolate.</li>
              <li>Refreshers — fruit + tea.</li>
              <li>Lemonade.</li>
              <li>Decaf coffee.</li>
              <li>Don&apos;t need to like coffee to earn Stars.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Other coffee apps</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Dunkin&apos; — also has rewards app.</li>
              <li>Panera Bread — free coffee subscription $11.99/mo.</li>
              <li>McDonald&apos;s — McCafé Rewards in MyMcDonald&apos;s app.</li>
              <li>All earn rewards through their apps.</li>
              <li>Each accumulates over months.</li>
              <li>Worth using if frequent customer.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="bg-muted/40">
          <CardContent className="pt-6">
            <h3 className="font-bold mb-2">Order ahead saves time</h3>
            <p className="text-sm text-muted-foreground">If you visit Starbucks weekly, the app pays for itself in time alone. Order on the way, walk in, drink waiting on counter. Plus accumulating Stars eventually means a free drink. Less standing in line — easier on senior backs and feet. Many seniors say this single app changed how they enjoy their morning coffee.</p>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}

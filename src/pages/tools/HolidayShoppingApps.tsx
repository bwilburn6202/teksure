import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Gift } from 'lucide-react';

export default function HolidayShoppingApps() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Holiday Shopping Apps for Seniors | TekSure" description="Black Friday + Cyber Monday tips. Plain-English picks for senior-friendly holiday shopping apps + price tracking." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Gift className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Holiday Shopping</h1>
          <p className="text-lg text-muted-foreground">Stress less. Save more.</p>
        </div>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Best deal-hunting apps</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li><strong>Honey</strong> — auto-applies coupon codes at checkout. Free.</li>
              <li><strong>Capital One Shopping</strong> — price compare across stores.</li>
              <li><strong>Camelcamelcamel</strong> — Amazon price history. Reveals fake "sales".</li>
              <li><strong>Slickdeals</strong> — set alerts for "TV under $400".</li>
              <li><strong>Rakuten</strong> — cash back at 3,500+ stores.</li>
              <li><strong>RetailMeNot</strong> — coupon code database.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Best buying days</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li><strong>Black Friday</strong> (Nov) — TVs, electronics, appliances.</li>
              <li><strong>Cyber Monday</strong> (Nov) — online deals, smaller items.</li>
              <li><strong>Prime Day</strong> (July) — Amazon-specific.</li>
              <li><strong>Memorial Day</strong> — mattresses, furniture.</li>
              <li><strong>Labor Day</strong> — appliances.</li>
              <li><strong>President&apos;s Day</strong> — winter clothing.</li>
              <li><strong>End-of-month</strong> — cars (sales quotas).</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Avoid scams during holidays</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Fake "Amazon order confirmation" emails surge in November-December.</li>
              <li>Sketchy "deal of the day" sites = often scams.</li>
              <li>Use credit cards (chargeback protection) NOT debit.</li>
              <li>Don&apos;t click email links — go to retailer&apos;s site directly.</li>
              <li>Beware "package delivery problem" texts — usually phishing.</li>
              <li>If deal seems too good — it&apos;s fake. Stick to known retailers.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="bg-muted/40">
          <CardContent className="pt-6">
            <h3 className="font-bold mb-2">Senior shopping tip</h3>
            <p className="text-sm text-muted-foreground">Make a "to buy" list in November. Add things to Slickdeals/Camelcamelcamel alerts. Wait for actual Black Friday — many "early Black Friday" deals are fake. Deals 25-Nov to 2-Dec are real ones.</p>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}

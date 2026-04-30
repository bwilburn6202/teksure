import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { PageBreadcrumb } from '@/components/PageBreadcrumb';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Checkbox } from '@/components/ui/checkbox';
import { ShoppingCart, ChevronRight, type LucideIcon, CreditCard, Lock, Truck, Eye } from 'lucide-react';

interface CheckItem {
  id: string;
  title: string;
  detail: string;
}

interface Section {
  id: string;
  title: string;
  icon: LucideIcon;
  items: CheckItem[];
}

const SECTIONS: Section[] = [
  {
    id: 'before',
    title: 'Before you click "Buy"',
    icon: Eye,
    items: [
      { id: 'b1', title: 'Look at the URL', detail: 'Real Amazon is amazon.com — never amazon-deals.com or amaz0n.com. Real Macy\'s is macys.com. Typo-domains catch a lot of seniors. Read the address bar before you type a card number.' },
      { id: 'b2', title: 'Look for the lock icon', detail: 'Browsers show a small lock or "https" before the address. No lock = the connection is not encrypted. Skip those sites for purchases.' },
      { id: 'b3', title: 'Search the brand on AnnualCreditReport.com or BBB', detail: 'For unknown brands. Better Business Bureau and Trustpilot reviews tell you fast if a "small business" is actually a dropshipper from overseas.' },
      { id: 'b4', title: 'Compare price across two sites', detail: 'A $40 Yeti tumbler is fine. A $40 "Yeti" on a no-name site is a knockoff. Real luxury brands rarely discount more than 15-20%.' },
      { id: 'b5', title: 'Check Amazon Review Spotter on third-party sellers', detail: 'On Amazon especially, a 4.7-star "ZJBYHB" wireless speaker is almost certainly fake reviews.', },
    ],
  },
  {
    id: 'paying',
    title: 'When paying',
    icon: CreditCard,
    items: [
      { id: 'p1', title: 'Use a credit card, not debit', detail: 'Credit cards have $50 federal liability cap and the bank fights fraud for you. Debit pulls money straight from your account — recovery is slower.' },
      { id: 'p2', title: 'Use a virtual card if your bank offers it', detail: 'Capital One Eno, Chase Privacy.com card numbers, Citi virtual numbers. Generates a one-time number for online buys. If the merchant gets hacked, your real number is safe.' },
      { id: 'p3', title: 'Skip "store accounts" and store credit cards', detail: 'Macy\'s offers 20% off if you sign up for their card. Trap. The interest rates are 25%+ and missing one payment kills your credit.' },
      { id: 'p4', title: 'Save the order confirmation email', detail: 'Filter for "order confirmation" once a quarter. Cross-check with your card statement. Disputes have a 60-day window — find issues fast.' },
      { id: 'p5', title: 'Never use Zelle, wire, or gift cards to pay', detail: 'Real online stores accept Visa/Mastercard/Amex/Discover. Anything else (Cash App, Zelle, Bitcoin) means the merchant cannot accept normal payment — almost always a scam.' },
    ],
  },
  {
    id: 'shipping',
    title: 'Shipping and tracking',
    icon: Truck,
    items: [
      { id: 's1', title: 'Save the tracking number', detail: 'Forward the order email to yourself with "tracking" in the subject so you can find it later.' },
      { id: 's2', title: 'Use Informed Delivery for USPS', detail: 'Free email previews of every letter and package. informeddelivery.usps.com.' },
      { id: 's3', title: 'For pricey items, schedule a signature requirement', detail: 'On Amazon: "Track Package" → "Sign for delivery". Stops porch pirates and lets you redirect.' },
      { id: 's4', title: 'If a package never arrives', detail: 'Amazon: chat support, usually refunds within an hour. Other stores: dispute the charge with your credit card after 14 days of "delivered" with no package.' },
    ],
  },
  {
    id: 'returns',
    title: 'After it arrives',
    icon: Lock,
    items: [
      { id: 'a1', title: 'Open and inspect within the return window', detail: 'Most US stores offer 14-30 day returns. Amazon is 30 days. Best Buy is 15 days. Apple is 14 days. Open it that week.' },
      { id: 'a2', title: 'Save packaging until satisfied', detail: 'Returns work much better if you have the original packaging. Store it for the return window before recycling.' },
      { id: 'a3', title: 'Photograph any damage immediately', detail: 'Phone photos with the timestamp + the item + the box. You will need them if you dispute.' },
      { id: 'a4', title: 'Mark fraudulent charges fast', detail: 'If you see a charge you did not make, call the back-of-card number that day. Federal law protects you only if you report within 60 days.' },
    ],
  },
];

export default function OnlineShoppingSafety() {
  const [done, setDone] = useState<Set<string>>(new Set());
  const total = SECTIONS.reduce((s, x) => s + x.items.length, 0);

  const toggle = (id: string) => {
    setDone(prev => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });
  };

  return (
    <>
      <SEOHead
        title="Online Shopping Safety Checklist"
        description="Eighteen safety habits for buying online — before you click buy, when paying, while shipping, and after the package arrives. Avoid scams, fake stores, and lost packages."
        path="/tools/online-shopping-safety"
      />
      <Navbar />

      <main className="min-h-screen bg-background">
        <section className="bg-gradient-to-br from-orange-50 via-background to-amber-50 dark:from-orange-950/20 dark:to-amber-950/20 border-b border-border py-10 px-4">
          <div className="container max-w-3xl mx-auto text-center">
            <div className="flex justify-center mb-3">
              <div className="p-3 bg-orange-500/10 rounded-full">
                <ShoppingCart className="h-8 w-8 text-orange-600" />
              </div>
            </div>
            <h1 className="text-3xl md:text-4xl font-bold mb-2">Online Shopping Safety Checklist</h1>
            <p className="text-muted-foreground text-lg max-w-xl mx-auto">
              18 habits across four phases: before buying, paying, shipping, and after the package arrives.
            </p>
          </div>
        </section>

        <div className="container max-w-3xl mx-auto px-4 py-8">
          <PageBreadcrumb segments={[{ label: 'Tools', href: '/tools' }, { label: 'Online Shopping Safety' }]} />

          <p className="text-sm text-muted-foreground mb-3">{done.size} of {total} done</p>

          {SECTIONS.map(s => {
            const Icon = s.icon;
            return (
              <section key={s.id} id={s.id} className="mb-6 scroll-mt-24">
                <div className="flex items-center gap-3 mb-3">
                  <div className="p-2 bg-primary/10 rounded-lg">
                    <Icon className="h-5 w-5 text-primary" />
                  </div>
                  <h2 className="text-xl font-bold">{s.title}</h2>
                </div>
                <Card className="border-border">
                  <CardContent className="p-5">
                    <div className="space-y-2">
                      {s.items.map(item => (
                        <label key={item.id}
                          className={`flex items-start gap-3 p-3 rounded-lg border cursor-pointer transition-all ${
                            done.has(item.id) ? 'border-green-300 bg-green-50/50 dark:bg-green-950/20' : 'border-border hover:bg-muted/40'
                          }`}>
                          <Checkbox checked={done.has(item.id)} onCheckedChange={() => toggle(item.id)} className="mt-1" />
                          <div className="flex-1">
                            <p className={`font-medium text-sm ${done.has(item.id) ? 'line-through text-muted-foreground' : ''}`}>{item.title}</p>
                            <p className="text-xs text-muted-foreground mt-1">{item.detail}</p>
                          </div>
                        </label>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </section>
            );
          })}

          <Card className="border-border bg-muted/30">
            <CardContent className="p-5">
              <p className="text-sm font-semibold mb-2">Quick tip: the "Honey" / coupon-extension caution</p>
              <p className="text-xs text-muted-foreground">
                Browser extensions like Honey and Capital One Shopping promise automatic coupons. They DO sometimes work — but they also sometimes intercept commission from the seller without giving the discount to you, and sometimes track your shopping. If you use them, install only the official versions, and skip the third-party "coupon helper" tools that come from random sites.
              </p>
            </CardContent>
          </Card>

          <div className="mt-10 pt-8 border-t border-border">
            <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-3">Related</p>
            <div className="grid sm:grid-cols-3 gap-3">
              <Link to="/tools/amazon-review-spotter" className="p-3 rounded-lg border border-border hover:border-primary/50 hover:bg-primary/5 transition-all">
                <p className="font-medium text-sm">Amazon Review Spotter</p>
                <p className="text-xs text-muted-foreground mt-0.5">Spot fake reviews.</p>
              </Link>
              <Link to="/tools/refund-and-return-helper" className="p-3 rounded-lg border border-border hover:border-primary/50 hover:bg-primary/5 transition-all">
                <p className="font-medium text-sm">Refund &amp; Return Helper</p>
                <p className="text-xs text-muted-foreground mt-0.5">When the package was wrong.</p>
              </Link>
              <Link to="/tools/online-banking-safety" className="p-3 rounded-lg border border-border hover:border-primary/50 hover:bg-primary/5 transition-all">
                <p className="font-medium text-sm">Online Banking Safety</p>
                <p className="text-xs text-muted-foreground mt-0.5">Protect the card you shop with.</p>
              </Link>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}

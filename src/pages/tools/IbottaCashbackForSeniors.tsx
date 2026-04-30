import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Receipt } from 'lucide-react';

export default function IbottaCashbackForSeniors() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Ibotta Cashback App for Seniors | TekSure" description="Earn cashback on grocery and everyday purchases. Ibotta and Fetch explained for seniors." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Receipt className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Cashback Apps</h1>
          <p className="text-lg text-muted-foreground">Get money back on groceries you already buy.</p>
        </div>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">What is Ibotta?</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Free app — earn cashback on grocery purchases.</li>
              <li>Browse offers before shopping.</li>
              <li>Buy qualifying items at any participating store.</li>
              <li>Scan receipt — money credits to your account.</li>
              <li>Cash out via PayPal, Venmo, or gift cards.</li>
              <li>Average user earns $10–$30/month.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">How to use Ibotta</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Download Ibotta free from app store.</li>
              <li>Browse offers — pick ones for items you&apos;d buy anyway.</li>
              <li>Shop normally at any participating store.</li>
              <li>Open app, tap &quot;Submit Receipt.&quot;</li>
              <li>Photograph receipt — Ibotta scans it.</li>
              <li>Cash credits within 24 hours.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Fetch Rewards — easier alternative</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Free app — scan ANY grocery receipt.</li>
              <li>No browsing offers required first.</li>
              <li>Points on most items, bonus for partner brands.</li>
              <li>Cash out via gift cards (Amazon, Walmart, etc.).</li>
              <li>Simpler than Ibotta — just scan everything.</li>
              <li>Smaller earnings but easier process.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Rakuten — for online shopping</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Cashback on online purchases — Amazon, Macy&apos;s, Walmart, etc.</li>
              <li>Install browser extension on computer.</li>
              <li>Pop-up reminds you to activate cashback.</li>
              <li>2–10% back on most stores.</li>
              <li>Quarterly check or PayPal payment.</li>
              <li>$30 sign-up bonus often available.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Honey — coupon finder</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Free browser extension by PayPal.</li>
              <li>Auto-finds coupon codes at checkout.</li>
              <li>Tries every code — applies the best one.</li>
              <li>Earn Honey Gold on partner sites.</li>
              <li>Works on Amazon, Macy&apos;s, Walmart, etc.</li>
              <li>Saves time + money on online orders.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Senior tips</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Don&apos;t buy items just because of cashback.</li>
              <li>Stick to brands you already use.</li>
              <li>Ibotta + grocery store loyalty = double savings.</li>
              <li>Combine with senior discount day at Kohl&apos;s, etc.</li>
              <li>Cashout monthly — set as a fun &quot;extra&quot; fund.</li>
              <li>Skip if you find apps stressful.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="bg-muted/40">
          <CardContent className="pt-6">
            <h3 className="font-bold mb-2">Start with Fetch — it&apos;s easiest</h3>
            <p className="text-sm text-muted-foreground">Fetch Rewards is the easiest cashback app for seniors because you don&apos;t browse offers — just scan every grocery receipt. No thinking required. Earnings are smaller than Ibotta, but the simplicity wins. Once comfortable, try Ibotta for higher earnings on items you&apos;d buy anyway. Both apps free, no commitment, real money back.</p>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}

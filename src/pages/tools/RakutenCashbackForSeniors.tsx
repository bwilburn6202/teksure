import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { DollarSign } from 'lucide-react';

export default function RakutenCashbackForSeniors() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Rakuten Cashback for Seniors | TekSure" description="Earn cashback on online shopping. Rakuten guide for senior shoppers." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <DollarSign className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Rakuten Cashback</h1>
          <p className="text-lg text-muted-foreground">Free money on shopping.</p>
        </div>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">How it works</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>Free signup at Rakuten.com.</li><li>Click through Rakuten before shopping.</li><li>Stores pay Rakuten commission.</li><li>Rakuten pays you a portion.</li><li>Quarterly check or PayPal.</li><li>$30 signup bonus.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Stores</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>Walmart 1-3%.</li><li>Macy&apos;s 6%.</li><li>Kohl&apos;s 10%.</li><li>Hotels.com 4%.</li><li>3,500+ stores.</li><li>Most major retailers.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Browser extension</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>Free Chrome/Safari add-on.</li><li>Pops up on stores.</li><li>One-click activation.</li><li>Don&apos;t forget to use.</li><li>Auto-applies coupons.</li><li>Senior set + forget.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Real savings</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>$200/year typical.</li><li>$500+ heavy shoppers.</li><li>Free money for clicking.</li><li>Stack with credit card rewards.</li><li>Plus store coupons.</li><li>Senior bonus.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Don&apos;t forget</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>Visit Rakuten FIRST.</li><li>Then click through to store.</li><li>Forgot? — no cashback.</li><li>Browser extension reminds.</li><li>Make it routine.</li><li>iPad or computer best.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Senior tips</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>Bookmark Rakuten.com.</li><li>Browser ext on Chrome.</li><li>PayPal payout fastest.</li><li>$5 minimum payout.</li><li>Quarterly check.</li><li>Free money habit.</li></ul></CardContent></Card>
        <Card className="bg-muted/40"><CardContent className="pt-6"><h3 className="font-bold mb-2">Rakuten + Capital One Shopping = stack</h3><p className="text-sm text-muted-foreground">Use Rakuten for cashback. Use Capital One Shopping for coupons + price compare. Both free, both legitimate. $200-$500/year free for senior shoppers. Set up once, use Chrome extension, never forget. Easy passive savings on online shopping you do anyway.</p></CardContent></Card>
      </main>
      <Footer />
    </div>
  );
}

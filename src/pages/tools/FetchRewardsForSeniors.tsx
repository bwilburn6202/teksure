import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Receipt } from 'lucide-react';

export default function FetchRewardsForSeniors() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Fetch Rewards App for Seniors | TekSure" description="Earn gift cards by snapping receipts. Fetch Rewards senior guide." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Receipt className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Fetch Rewards</h1>
          <p className="text-lg text-muted-foreground">Receipts = gift cards.</p>
        </div>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">How it works</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>Free app — iOS/Android.</li><li>Snap any receipt.</li><li>Earn points.</li><li>Redeem for gift cards.</li><li>Amazon, Target, Walmart cards.</li><li>Free money for receipts.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Earning rate</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>~25 points per receipt.</li><li>1,000 points = $1.</li><li>Bonus for branded items.</li><li>$5-$15/month typical.</li><li>$60-$180/year passive.</li><li>Free coffee fund.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">What receipts</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>Grocery stores.</li><li>Drugstores.</li><li>Big box stores.</li><li>Restaurants.</li><li>Gas stations.</li><li>Even Amazon.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Senior workflow</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>Save receipts in basket.</li><li>Snap them weekly.</li><li>Recycle paper.</li><li>14-day deadline.</li><li>Don&apos;t miss.</li><li>Routine = free $$.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Privacy</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>Sees what you bought.</li><li>Sells aggregated data.</li><li>You consent for rewards.</li><li>Reasonable trade.</li><li>Don&apos;t share names.</li><li>Up to you.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Tips</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>Brighter light helps scan.</li><li>Flatten receipts first.</li><li>Daily streak bonuses.</li><li>Special offer items.</li><li>Refer friends — bonus.</li><li>$3 sign-up code.</li></ul></CardContent></Card>
        <Card className="bg-muted/40"><CardContent className="pt-6"><h3 className="font-bold mb-2">Receipts already paid for</h3><p className="text-sm text-muted-foreground">You already shop. You already get receipts. Fetch turns them into gift cards. Many seniors earn $100-$200/year passive. Free coffee or gas fund. Snap receipts before throwing away. Easy senior money habit. Pairs with Ibotta for groceries.</p></CardContent></Card>
      </main>
      <Footer />
    </div>
  );
}

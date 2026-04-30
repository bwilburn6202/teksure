import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Store } from 'lucide-react';

export default function CostcoMembershipForSeniors() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Costco Membership for Seniors | TekSure" description="Is Costco worth it for seniors living alone? Membership tiers, hidden perks, and tips." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Store className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Costco for Seniors</h1>
          <p className="text-lg text-muted-foreground">Worth it? Membership tiers + hidden perks.</p>
        </div>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Membership tiers (2025)</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Gold Star — $65/year, basic membership.</li>
              <li>Executive — $130/year, gets 2% rewards back.</li>
              <li>Executive pays for itself if you spend $3,250+/year.</li>
              <li>Two cards per membership (yourself + spouse).</li>
              <li>No senior discount on membership itself.</li>
              <li>Cancel anytime for full refund — risk-free.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Best Costco senior values</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Pharmacy — often cheapest in town, no membership needed.</li>
              <li>Hearing aids — top quality, half the audiologist price.</li>
              <li>Optical center — eye exams + glasses, lower prices.</li>
              <li>Tires — best total cost-of-ownership.</li>
              <li>Gas — usually 20–40 cents/gallon cheaper.</li>
              <li>Travel — Costco Travel competitive cruise + hotel deals.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Costco hidden perks</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Pharmacy — open to non-members, often huge savings.</li>
              <li>Hearing aid centers — free hearing test.</li>
              <li>Concierge tech support — free for electronics bought there.</li>
              <li>Returns — easy, even years later in many cases.</li>
              <li>Hot dog + drink combo — still $1.50.</li>
              <li>Costco Cash — load card for non-member to shop.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Worth it for seniors living alone?</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Bulk sizes can be too much for one person.</li>
              <li>But: meat/cheese can be split + frozen.</li>
              <li>Splitting membership with adult child = perfect.</li>
              <li>Pharmacy + optical + tires alone = membership pays.</li>
              <li>If you live near a Costco — usually worth it.</li>
              <li>If 30+ minutes away — probably not.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Online Costco</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Costco.com works without going in store.</li>
              <li>Many items same warehouse price.</li>
              <li>Free shipping on most items.</li>
              <li>Same generous return policy.</li>
              <li>Special online-only items.</li>
              <li>Great if mobility makes warehouse trips hard.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Senior shopping tips</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Tuesday/Wednesday mornings = quieter.</li>
              <li>Free electric carts available — ask at entrance.</li>
              <li>Concierge can carry items to your car.</li>
              <li>Sample tables make a free lunch.</li>
              <li>Use scan-and-go skip the checkout line.</li>
              <li>Take pictures of receipts in case of returns.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="bg-muted/40">
          <CardContent className="pt-6">
            <h3 className="font-bold mb-2">Even non-members can use pharmacy</h3>
            <p className="text-sm text-muted-foreground">Federal law requires Costco pharmacies to serve non-members. You can fill prescriptions there at member prices without paying for membership. For many medications, Costco prices match or beat GoodRx. Walk in, tell them you&apos;re not a member but want to fill a prescription, and they&apos;ll take care of you. Many seniors save hundreds yearly this way without ever joining.</p>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}

import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { ShoppingBag } from 'lucide-react';

export default function GroceryAppDeepDive() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Grocery Store Apps for Seniors | TekSure" description="Kroger, Publix, Wegmans, Albertsons app deep dive for senior shoppers." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <ShoppingBag className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Grocery Store Apps</h1>
          <p className="text-lg text-muted-foreground">Save with each store&apos;s app.</p>
        </div>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Kroger Plus</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Earn fuel points — $0.10/gal off per 100 points.</li>
              <li>Digital coupons — load with one tap.</li>
              <li>Senior Wednesday — 5% off in some stores.</li>
              <li>Free pickup orders over $35.</li>
              <li>Boost membership — extra fuel points.</li>
              <li>Affiliated brands: Ralphs, Fred Meyer, Smith&apos;s.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Publix</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Senior Wednesday — discounts in Florida + Carolinas.</li>
              <li>BOGO deals plus Publix.</li>
              <li>Digital coupons + paper coupons stack.</li>
              <li>Online shopping via Instacart.</li>
              <li>Pharmacy + curbside pickup.</li>
              <li>Loyalty cards.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Albertsons family</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Albertsons + Safeway + Vons + Tom Thumb.</li>
              <li>Just for U digital deals.</li>
              <li>Earn rewards toward groceries + fuel.</li>
              <li>Senior Wednesdays in some regions.</li>
              <li>Curbside pickup + delivery.</li>
              <li>Same app across brands.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Wegmans</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Shoppers Club rewards.</li>
              <li>Meal kit recipes with shopping list.</li>
              <li>Mobile checkout — scan + pay.</li>
              <li>Skip checkout line.</li>
              <li>Senior favorite for high-quality.</li>
              <li>Available in Northeast US.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Costco app</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Membership card on phone.</li>
              <li>Show app at entrance.</li>
              <li>See receipts + warranty info.</li>
              <li>Track Executive 2% rewards.</li>
              <li>Costco Photo Center built in.</li>
              <li>Weekly coupon book digital.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Tips for savings</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Open app BEFORE shopping.</li>
              <li>Load digital coupons.</li>
              <li>Check weekly ad.</li>
              <li>Senior days at all chains.</li>
              <li>Stack coupons + sales.</li>
              <li>Compare unit prices in app.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="bg-muted/40">
          <CardContent className="pt-6">
            <h3 className="font-bold mb-2">Kroger fuel points add up</h3>
            <p className="text-sm text-muted-foreground">If you shop at Kroger family stores, the fuel points alone save serious money. Spend $100 weekly = 100 points = $0.10/gallon off. Can stack to $1.00/gallon off. On 15 gallons that&apos;s $15 saved per fill-up. Combined with digital coupons + senior Wednesday discount, it adds up to hundreds yearly. The app is worth installing if you have any Kroger family store nearby.</p>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}

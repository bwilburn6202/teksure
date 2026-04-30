import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Pill } from 'lucide-react';

export default function GoodRxDrugSavings() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="GoodRx Drug Savings for Seniors | TekSure" description="Save on prescriptions with GoodRx. Free coupons at pharmacies nationwide. Plain-English guide." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Pill className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">GoodRx</h1>
          <p className="text-lg text-muted-foreground">Lower your drug costs — free coupons.</p>
        </div>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">What is GoodRx?</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Free service — lowers prescription prices.</li>
              <li>Search your drug name, get discount coupons.</li>
              <li>Show coupon at pharmacy — pay less.</li>
              <li>Accepted at CVS, Walgreens, Walmart, Kroger, +70,000 pharmacies.</li>
              <li>Sometimes cheaper than your insurance copay.</li>
              <li>No membership required for basic use.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">How to use</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Go to GoodRx.com or download free app.</li>
              <li>Type your medication name.</li>
              <li>Enter your zip code.</li>
              <li>Compare prices at nearby pharmacies.</li>
              <li>Click &quot;Get Free Coupon.&quot;</li>
              <li>Show coupon at pharmacy counter (phone or printout).</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">How much can you save?</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Generic drugs — often 50–80% off retail.</li>
              <li>Some drugs cost pennies with GoodRx.</li>
              <li>Brand-name — smaller discounts but still helps.</li>
              <li>Example: Metformin (diabetes) — under $5 with GoodRx.</li>
              <li>Compare GoodRx price vs your Medicare copay.</li>
              <li>Use whichever is cheaper that day.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">GoodRx vs insurance</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Sometimes GoodRx beats your insurance copay.</li>
              <li>Always check — prices vary by pharmacy.</li>
              <li>Medicare: GoodRx can&apos;t be combined with Medicare Part D.</li>
              <li>Use GoodRx for drugs NOT covered by insurance.</li>
              <li>Great for people without drug coverage.</li>
              <li>No income limit — anyone can use it.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Mark Cuban&apos;s Cost Plus Drugs</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>CostPlusDrugs.com — transparent pricing.</li>
              <li>Cost + 15% markup only — very honest.</li>
              <li>Home delivery only — not at pharmacies.</li>
              <li>Excellent for maintenance medications.</li>
              <li>Compare prices with GoodRx.</li>
              <li>Both free to use.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Other savings programs</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>RxSaver — similar to GoodRx.</li>
              <li>NeedyMeds — patient assistance programs.</li>
              <li>Manufacturer coupons — brand-name drugs.</li>
              <li>State pharmaceutical assistance programs.</li>
              <li>Medicare Extra Help (Low Income Subsidy).</li>
              <li>Ask pharmacist — they often know savings options.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="bg-muted/40">
          <CardContent className="pt-6">
            <h3 className="font-bold mb-2">Check before every refill</h3>
            <p className="text-sm text-muted-foreground">Drug prices change often. What was cheap last month may have a better deal today at a different pharmacy. Check GoodRx every time you refill a prescription — takes 30 seconds. Many seniors save $50–$200/month on medications they&apos;ve been overpaying for years. Show the coupon on your phone — pharmacists deal with GoodRx every day.</p>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}

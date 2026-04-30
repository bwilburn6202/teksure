import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Wine } from 'lucide-react';

export default function HappyHourFinderApps() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Happy Hour Finder Apps for Seniors | TekSure" description="Find happy hour deals near you. Senior dining + drinks bargain apps." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Wine className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Happy Hour Apps</h1>
          <p className="text-lg text-muted-foreground">Find dining deals near you.</p>
        </div>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Tap.so</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Find happy hour deals near you.</li>
              <li>Free app.</li>
              <li>Filter by drink, food, time.</li>
              <li>Save 50%+ on dinner.</li>
              <li>Coverage in major cities.</li>
              <li>Senior dinner can be cheap.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Yelp happy hour filter</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Search &quot;happy hour&quot; in Yelp.</li>
              <li>Filter by current time.</li>
              <li>See deals at restaurants.</li>
              <li>Restaurants often discount 4-7pm.</li>
              <li>Half-price appetizers + drinks.</li>
              <li>Free filter — most useful.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Senior early-bird deals</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Many restaurants have early-bird specials.</li>
              <li>Often 4-6pm.</li>
              <li>Fixed-price 2-3 course meals.</li>
              <li>Senior-specific menus.</li>
              <li>Up to 50% off regular.</li>
              <li>Ask host on arrival.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Restaurant-specific deals</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Olive Garden — early dinner $9.99.</li>
              <li>Applebee&apos;s — late afternoon specials.</li>
              <li>IHOP — 55+ menu daily.</li>
              <li>Denny&apos;s — AARP discount.</li>
              <li>Chick-fil-A — senior coffee free.</li>
              <li>Most chains have senior options.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Always ask</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Many discounts not advertised.</li>
              <li>Ask: &quot;Senior discount?&quot;</li>
              <li>Ask: &quot;Any specials today?&quot;</li>
              <li>Ask: &quot;Happy hour menu?&quot;</li>
              <li>Worst response is no.</li>
              <li>Often save 15-50%.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Restaurant.com</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Pre-buy restaurant gift certificates.</li>
              <li>$25 cert for $10 typical.</li>
              <li>Hundreds of restaurants.</li>
              <li>Read terms — minimum spend often $35.</li>
              <li>Plan ahead for savings.</li>
              <li>Many seniors love this.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="bg-muted/40">
          <CardContent className="pt-6">
            <h3 className="font-bold mb-2">Always ask first</h3>
            <p className="text-sm text-muted-foreground">Best money-saving habit at restaurants: always ask for senior discount. Many places have unadvertised senior pricing — 10-20% off. Combined with happy hour timing (4-6pm) and AARP discounts at chains, dinner out can cost 30-50% less than peak times. Apps help find deals; asking confirms them.</p>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}

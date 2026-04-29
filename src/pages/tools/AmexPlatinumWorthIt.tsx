import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Crown } from 'lucide-react';

export default function AmexPlatinumWorthIt() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Amex Platinum Worth It for Seniors? | TekSure" description="$695/yr card. Plain-English analysis for senior travelers." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Crown className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Amex Platinum</h1>
          <p className="text-lg text-muted-foreground">$695/yr. Worth it? Depends.</p>
        </div>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">$695/yr but lots of credits</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>$200 airline fee credit.</li>
              <li>$200 hotel credit (FHR/THC).</li>
              <li>$240 streaming/digital credit.</li>
              <li>$200 Uber credit.</li>
              <li>$155 Walmart+ membership.</li>
              <li>$189 CLEAR Plus credit.</li>
              <li>$300 Equinox credit.</li>
              <li>If used = $1,400+ value.</li>
              <li>If you&apos;d use anyway.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Premium benefits</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Centurion Lounges (best airport lounges).</li>
              <li>Priority Pass.</li>
              <li>Marriott Gold + Hilton Gold.</li>
              <li>5X points flights + hotels.</li>
              <li>Global Entry credit.</li>
              <li>Hotel breakfast + early check-in (FHR).</li>
              <li>Travel insurance excellent.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Worth it for seniors who...</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Travel 3+ times/year by air.</li>
              <li>Use airline lounges (international travel especially).</li>
              <li>Use Uber regularly.</li>
              <li>Stream + use streaming services.</li>
              <li>Stay at premium hotels.</li>
              <li>Use most credit benefits.</li>
              <li>Otherwise — overkill.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Skip if</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>1-2 trips/year.</li>
              <li>Don&apos;t fly internationally.</li>
              <li>Won&apos;t use most credits.</li>
              <li>Tight budget.</li>
              <li>Don&apos;t want chase complex credits.</li>
              <li>Chase Sapphire Preferred ($95) much better value.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="bg-muted/40">
          <CardContent className="pt-6">
            <h3 className="font-bold mb-2">Better senior cards</h3>
            <p className="text-sm text-muted-foreground">For most seniors: <strong>Chase Sapphire Preferred ($95)</strong> = better value. Or FREE <strong>Costco Citi Visa</strong> + <strong>Chase Freedom Unlimited</strong>. Amex Platinum = lifestyle card for frequent international travelers. Most seniors fine without.</p>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}

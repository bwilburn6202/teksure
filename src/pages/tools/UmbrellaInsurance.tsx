import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Umbrella } from 'lucide-react';

export default function UmbrellaInsurance() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Umbrella Insurance for Seniors | TekSure" description="$1M umbrella for $200/yr. Plain-English explainer of when seniors need umbrella insurance + how to buy." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Umbrella className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Umbrella Insurance</h1>
          <p className="text-lg text-muted-foreground">$1M for ~$200/yr.</p>
        </div>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">What it is</h2>
            <p className="text-sm">Extra liability coverage on top of your home + auto. Kicks in when those run out. $1-2 million coverage typically $150-400/year.</p>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">When seniors need it</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li><strong>Net worth $500K+</strong> — assets at risk if sued.</li>
              <li><strong>Pool / hot tub</strong> at home.</li>
              <li><strong>Trampoline / playset</strong> for grandkids.</li>
              <li><strong>Drive frequently</strong> — auto liability rare to cover serious injury.</li>
              <li><strong>Rental property</strong> owner.</li>
              <li><strong>Volunteer board member</strong> at non-profit.</li>
              <li><strong>Dog breeds insurance flags</strong>.</li>
              <li><strong>Active social media</strong> — defamation lawsuits.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Cost</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li><strong>$1M coverage</strong> — $150-300/year.</li>
              <li><strong>$2M</strong> — $200-400/year.</li>
              <li><strong>$5M+</strong> — for high-net-worth.</li>
              <li>Cheapest insurance per dollar of coverage.</li>
              <li>Cheaper if bundled with home + auto.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">What it covers</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Bodily injury you cause (car accident).</li>
              <li>Property damage you cause.</li>
              <li>Personal injury (libel, slander, false arrest).</li>
              <li>Legal fees in lawsuits.</li>
              <li>Worldwide coverage.</li>
              <li>NOT covered: business liability, contracts, intentional acts.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Where to buy</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Same insurer as home + auto = bundle discount.</li>
              <li>USAA, State Farm, Liberty Mutual, Allstate all offer.</li>
              <li>RLI Insurance — sometimes cheapest standalone.</li>
              <li>Need: minimum auto liability ($250K-$500K) + home liability ($300K).</li>
              <li>If under those — raise auto/home first.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="bg-muted/40">
          <CardContent className="pt-6">
            <h3 className="font-bold mb-2">Senior reality</h3>
            <p className="text-sm text-muted-foreground">Senior at-fault accidents can result in catastrophic verdicts ($2M+ in serious cases). Umbrella protects retirement savings if you cause severe injury. $200/yr buys massive peace of mind. Especially if you drive + have $500K+ saved.</p>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}

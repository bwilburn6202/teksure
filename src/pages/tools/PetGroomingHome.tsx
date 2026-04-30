import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Sparkles } from 'lucide-react';

export default function PetGroomingHome() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Pet Grooming at Home | TekSure" description="Save on pet grooming. Plain-English senior at-home guide." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Sparkles className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Pet Grooming at Home</h1>
          <p className="text-lg text-muted-foreground">Save $1,000+/yr. DIY basics.</p>
        </div>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Tools needed ($75)</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li><strong>Pet hair clippers</strong> ($30) — Wahl, Andis.</li>
              <li><strong>Slicker brush</strong> ($10).</li>
              <li><strong>Nail clippers / grinder</strong> ($15).</li>
              <li><strong>Pet shampoo</strong> ($10).</li>
              <li><strong>Towels</strong>.</li>
              <li>Grooming table optional.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Brushing routine</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Short hair — 2x/week.</li>
              <li>Long hair — daily.</li>
              <li>Reduces shedding 50%.</li>
              <li>Bonding time.</li>
              <li>Distractions — peanut butter.</li>
              <li>Catch problems early — lumps, ticks.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Bath time</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Every 4-6 weeks for dogs.</li>
              <li>Cats — rarely (self-clean).</li>
              <li>Lukewarm water only.</li>
              <li>Pet-specific shampoo.</li>
              <li>Avoid eyes + ears.</li>
              <li>Towel dry + air dry.</li>
              <li>Walk-in shower easiest.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Nail trimming</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Once monthly minimum.</li>
              <li>Cut tip only — avoid quick.</li>
              <li>Have styptic powder ready.</li>
              <li>Grinder gentler than clippers.</li>
              <li>Treats — positive.</li>
              <li>Vet does it $15 if scared.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Watch first on YouTube</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Search &quot;groom golden retriever home&quot;.</li>
              <li>Search breed-specific videos.</li>
              <li>Watch 3-4 before starting.</li>
              <li>Andis YouTube channel.</li>
              <li>GroomerTV.</li>
              <li>How To channels.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">When to use pro</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Difficult breeds — Poodle, Standard.</li>
              <li>Aggressive / scared pet.</li>
              <li>Show cuts.</li>
              <li>Anal gland expression.</li>
              <li>Mat removal.</li>
              <li>Mobile groomers — come to home.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="bg-muted/40">
          <CardContent className="pt-6">
            <h3 className="font-bold mb-2">Mobile groomers</h3>
            <p className="text-sm text-muted-foreground">Mobile pet groomer comes to home — $80-150 per visit. Less stress on pet + you. Search Yelp, Nextdoor. Booksy app — schedule online. Especially senior pets. Your dog visits you in your driveway — no transport. Worth premium for elderly pets / mobility-limited owners.</p>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}

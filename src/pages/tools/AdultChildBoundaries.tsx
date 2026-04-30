import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Heart } from 'lucide-react';

export default function AdultChildBoundaries() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Boundaries with Adult Kids | TekSure" description="Practical, kind tips for boundaries with adult children + their spouses. Plain-English picks for healthy parent-adult-child relationships." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Heart className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Adult Child Boundaries</h1>
          <p className="text-lg text-muted-foreground">Love + space.</p>
        </div>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Common boundary issues</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Calling too often / not enough.</li>
              <li>Unsolicited parenting advice.</li>
              <li>Money loans → unspoken expectations.</li>
              <li>Showing up unannounced.</li>
              <li>Comparing to siblings.</li>
              <li>Politics + religion arguments.</li>
              <li>Grandparenting style differences.</li>
              <li>Cultural / generational gap on technology, dating, work.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Rules that work</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li><strong>Ask before advising</strong> — "Do you want my opinion?"</li>
              <li><strong>Respect their parenting</strong> — they&apos;re raising YOUR grandkids how THEY see fit.</li>
              <li><strong>Don&apos;t triangulate</strong> — direct conversations beat going through siblings.</li>
              <li><strong>Money</strong> — gift OR loan, never unclear. Give written terms.</li>
              <li><strong>Plan visits</strong> — don&apos;t just drop in.</li>
              <li><strong>Honor their time</strong> — adult kids juggle work + kids + life.</li>
              <li><strong>Apologize when wrong</strong> — modeling repair is best teaching.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Tools that help</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li><strong>Family therapy</strong> — even occasional sessions help.</li>
              <li><strong>Adult-child relationship books</strong> — "Boundaries" by Cloud + Townsend, "Difficult Mothers" by Streep.</li>
              <li><strong>Family group chat</strong> — shares photos / news without one-on-one demands.</li>
              <li><strong>Standing date</strong> — Sunday call, predictable + brief.</li>
              <li><strong>Family Calendar app</strong> — see what they&apos;re juggling.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Estranged adult child</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>1 in 4 US adults estranged from family member.</li>
              <li>Don&apos;t give up — but also respect their space.</li>
              <li>Send 1-2 cards/year — birthdays, holidays. No pressure.</li>
              <li>Apologize specifically if there&apos;s something to apologize for.</li>
              <li>Consider therapy — yourself OR family.</li>
              <li>Books: "Reconnecting with Your Estranged Adult Child" — Tina Gilbertson.</li>
              <li>Stand Alone Network has support groups.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="bg-muted/40">
          <CardContent className="pt-6">
            <h3 className="font-bold mb-2">Long game</h3>
            <p className="text-sm text-muted-foreground">Adult kids&apos; relationships with parents often improve in 50s-60s+ when grandkids arrive. Patience pays. Focus on being someone they WANT to call — not someone they HAVE to. Less advice + more interest = better calls.</p>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}

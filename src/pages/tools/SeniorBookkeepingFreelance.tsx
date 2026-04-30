import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Calculator } from 'lucide-react';

export default function SeniorBookkeepingFreelance() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Bookkeeping Freelance for Seniors | TekSure" description="Earn part-time as a bookkeeper. QuickBooks, Wave, FreshBooks for senior accounting." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Calculator className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Bookkeeping</h1>
          <p className="text-lg text-muted-foreground">Number-savvy senior part-time work.</p>
        </div>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Why bookkeeping</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Always-needed skill.</li>
              <li>Work from home.</li>
              <li>Choose your hours.</li>
              <li>$30-$100/hour rates.</li>
              <li>Small business clients.</li>
              <li>Seniors with finance background ideal.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">QuickBooks ProAdvisor</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Free certification through QuickBooks.</li>
              <li>Listed in QuickBooks ProAdvisor directory.</li>
              <li>Clients find you free.</li>
              <li>Annual recertification.</li>
              <li>Adds credibility.</li>
              <li>Worth pursuing.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Software to learn</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>QuickBooks Online — most popular.</li>
              <li>Xero — alternative.</li>
              <li>Wave — free for clients.</li>
              <li>FreshBooks — small business.</li>
              <li>Pick 1-2 to specialize.</li>
              <li>Free trials to learn.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Find clients</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Local Chamber of Commerce.</li>
              <li>Upwork freelance platform.</li>
              <li>Facebook small business groups.</li>
              <li>Word of mouth.</li>
              <li>QuickBooks ProAdvisor directory.</li>
              <li>Niche down — restaurants, contractors, etc.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Income ranges</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>$25-$50/hour — basic data entry.</li>
              <li>$50-$80/hour — full bookkeeping.</li>
              <li>$80-$150/hour — controller-level.</li>
              <li>Monthly retainers $300-$3,000+.</li>
              <li>5 clients = comfortable income.</li>
              <li>Flexible scheduling.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Senior advantages</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Lifetime financial experience.</li>
              <li>Reliability + trust.</li>
              <li>Detail-oriented.</li>
              <li>Better than younger competition often.</li>
              <li>Full-time before, now part-time freedom.</li>
              <li>High-meaning work.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="bg-muted/40">
          <CardContent className="pt-6">
            <h3 className="font-bold mb-2">Senior accountants in demand</h3>
            <p className="text-sm text-muted-foreground">If you have any accounting/finance background, freelance bookkeeping is excellent senior income. Get QuickBooks ProAdvisor cert (free), build small client base, work from home. Many seniors earn $30K-$80K+/year part-time. Seniors trust other seniors with money — your demographic is your client. Start with one client this month.</p>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}

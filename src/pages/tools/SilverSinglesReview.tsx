import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { HeartHandshake } from 'lucide-react';

export default function SilverSinglesReview() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="SilverSingles Review for Senior Daters | TekSure" description="Premium 50+ matchmaking site. SilverSingles cost, features, success for senior dating." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <HeartHandshake className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">SilverSingles</h1>
          <p className="text-lg text-muted-foreground">Premium 50+ matchmaking.</p>
        </div>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">What makes it different</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Personality test-based matching.</li>
              <li>Higher quality profiles than OurTime.</li>
              <li>50+ only, no younger users.</li>
              <li>Owned by Spark Networks.</li>
              <li>Premium pricing reflects quality.</li>
              <li>Less &quot;swipe&quot; culture.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Cost</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Premium: $24/month (3-month).</li>
              <li>$60/month (1-month).</li>
              <li>Free profile + view matches.</li>
              <li>Need premium to message.</li>
              <li>More expensive than OurTime.</li>
              <li>Get what you pay for — fewer scammers.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Personality test</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>30-minute questionnaire on signup.</li>
              <li>Personality + values questions.</li>
              <li>Algorithm matches you with compatibles.</li>
              <li>Get 3–7 daily curated matches.</li>
              <li>No endless swiping.</li>
              <li>Quality over quantity approach.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Profile tips</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Take personality test honestly.</li>
              <li>Quality photos — clear face.</li>
              <li>Detailed profile descriptions.</li>
              <li>List specific interests, not generic.</li>
              <li>Mention long-term partner goals.</li>
              <li>Be authentic about age + life stage.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Best for these seniors</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Looking for serious relationship.</li>
              <li>Want quality over quantity.</li>
              <li>Educated/professional crowd.</li>
              <li>Willing to pay premium for safety.</li>
              <li>Don&apos;t want endless swiping.</li>
              <li>Patient with personality test approach.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">vs OurTime</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>SilverSingles — fewer but higher quality.</li>
              <li>OurTime — more users to choose from.</li>
              <li>SilverSingles — better personality matching.</li>
              <li>OurTime — better in smaller cities.</li>
              <li>Both legitimate.</li>
              <li>Try OurTime free first.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="bg-muted/40">
          <CardContent className="pt-6">
            <h3 className="font-bold mb-2">Worth premium pricing</h3>
            <p className="text-sm text-muted-foreground">If you&apos;re serious about finding a long-term partner and OurTime didn&apos;t work, SilverSingles&apos; premium pricing filters out casual daters and scammers. The personality test takes 30 minutes but produces better matches. Many senior couples meet here. Worth the investment for those committed to finding a meaningful relationship in their later years.</p>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}

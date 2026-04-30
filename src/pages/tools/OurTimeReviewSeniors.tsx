import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Heart } from 'lucide-react';

export default function OurTimeReviewSeniors() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="OurTime Review for Senior Daters | TekSure" description="OurTime dating site for 50+ reviewed. Cost, safety, success rates for senior daters." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Heart className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">OurTime</h1>
          <p className="text-lg text-muted-foreground">Most popular 50+ dating site.</p>
        </div>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">What is OurTime?</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Largest 50+ dating site.</li>
              <li>Owned by Match Group.</li>
              <li>5+ million members.</li>
              <li>Designed specifically for older adults.</li>
              <li>Web + mobile app.</li>
              <li>Established + reliable.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Cost</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Free to browse.</li>
              <li>$30/month for messaging.</li>
              <li>Cheaper for 6-month subscription.</li>
              <li>Often promo deals first month.</li>
              <li>Standard dating site pricing.</li>
              <li>Cancel before auto-renew.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Safety tips</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Never send money to anyone you haven&apos;t met.</li>
              <li>Video chat before meeting in person.</li>
              <li>Meet in public the first 3 times.</li>
              <li>Tell friend/family location of date.</li>
              <li>Watch for romance scam red flags.</li>
              <li>Block + report suspicious users.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Profile tips</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Recent photos — multiple angles.</li>
              <li>Smile + clear face shot.</li>
              <li>Photo with hobby or pet.</li>
              <li>Honest about age + interests.</li>
              <li>Specific examples — &quot;love hiking&quot; not just &quot;active.&quot;</li>
              <li>Profile written in your authentic voice.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Common scam signs</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Asks to communicate off-site quickly.</li>
              <li>Photos look too professional.</li>
              <li>Falls in love within 2 weeks.</li>
              <li>Always traveling or military overseas.</li>
              <li>Asks for money for &quot;emergency.&quot;</li>
              <li>Reverse image search profile photos.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Alternatives</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>SilverSingles — premium 50+ matchmaking.</li>
              <li>Match.com — broader age range, $30+/mo.</li>
              <li>eHarmony — questionnaire-based, $35+/mo.</li>
              <li>SeniorMatch — also designed for 50+.</li>
              <li>Bumble — younger crowd skew.</li>
              <li>Local — meetup, faith communities.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="bg-muted/40">
          <CardContent className="pt-6">
            <h3 className="font-bold mb-2">Try free first</h3>
            <p className="text-sm text-muted-foreground">OurTime offers free browsing — see who&apos;s in your area before paying. If you find people who interest you, then upgrade. Be patient — finding someone takes weeks or months. Stay safe — never send money to online connections. Many seniors find lasting partnerships through these sites; many also encounter scams. Caution + persistence both required.</p>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}

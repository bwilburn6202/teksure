import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Home } from 'lucide-react';

export default function SeniorRoommateMatching() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Senior Roommate Matching | TekSure" description="Find compatible senior roommates. Plain-English guide to home-sharing services for 60+." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Home className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Senior Roommate Matching</h1>
          <p className="text-lg text-muted-foreground">Cut housing costs. Beat loneliness.</p>
        </div>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Why home-share</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Cuts housing cost in half.</li>
              <li>Built-in companionship.</li>
              <li>Safety — someone notices if you fall.</li>
              <li>Shared chores.</li>
              <li>Stay in your own home longer.</li>
              <li>Or move in with someone — keep house equity.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Senior-focused services</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li><strong>Silvernest</strong> — senior home-sharing. silvernest.com. ~$30/mo.</li>
              <li><strong>HomeShare USA</strong> — multiple cities. Free assessments.</li>
              <li><strong>SeniorAdvisor.com</strong> — listings + reviews.</li>
              <li><strong>Roommates.com</strong> — general but filter by 55+.</li>
              <li><strong>Local nonprofits</strong> — many Area Agencies on Aging match.</li>
              <li><strong>Golden Girls Network</strong> — women 50+ home-sharing.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Vetting potential roommates</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Background check (Silvernest includes).</li>
              <li>Credit check + references.</li>
              <li>Multiple coffee meetings before deciding.</li>
              <li>Trial weekend.</li>
              <li>Discuss: smoking, pets, guests, schedules, food, cleaning.</li>
              <li>Get written agreement — rent, utilities, chores, exit terms.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Money + legal</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Written room rental agreement (basic, 1-page).</li>
              <li>Splits utilities clearly — by % or by usage.</li>
              <li>Talk to insurance — extra resident may affect homeowner&apos;s.</li>
              <li>Tax: rent income reportable; mortgage interest still deductible.</li>
              <li>Talk to estate planner if long-term arrangement.</li>
              <li>Local zoning — some areas limit unrelated housemates.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="bg-muted/40">
          <CardContent className="pt-6">
            <h3 className="font-bold mb-2">Cohousing alternative</h3>
            <p className="text-sm text-muted-foreground">Senior cohousing communities = own unit + shared common space. Cohousing.org has list. New ones forming yearly. Mutual support without total privacy loss. $100K-500K to buy in. Low monthly fees vs assisted living.</p>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}

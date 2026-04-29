import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Briefcase } from 'lucide-react';

export default function FiverrFreelanceSeniors() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Fiverr + Freelance for Senior Retirees | TekSure" description="Use career skills for retirement income. Plain-English freelance guide for seniors." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Briefcase className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Fiverr + Freelance</h1>
          <p className="text-lg text-muted-foreground">Decades of experience = valuable skills.</p>
        </div>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Best platforms</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li><strong>Fiverr</strong> — gigs starting $5-1,000+. Beginner friendly.</li>
              <li><strong>Upwork</strong> — long-term contracts, professional services.</li>
              <li><strong>LinkedIn ProFinder</strong> — your network knows you.</li>
              <li><strong>Toptal</strong> — top 3% only, premium rates.</li>
              <li><strong>FlexJobs</strong> ($14/mo) — vetted remote work.</li>
              <li><strong>RetiredBrains</strong> — senior-specific job board.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Senior-friendly skills</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li><strong>Writing + editing</strong> — high demand.</li>
              <li><strong>Bookkeeping / accounting</strong> — QuickBooks.</li>
              <li><strong>Resume writing</strong> — your career experience valuable.</li>
              <li><strong>Tutoring</strong> — math, English, test prep.</li>
              <li><strong>Translation</strong> — if multilingual.</li>
              <li><strong>Voice over</strong> — read books, narrate ads.</li>
              <li><strong>Customer service</strong> — phone work from home.</li>
              <li><strong>Real estate research</strong> — for investors.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Get started Fiverr</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Free signup at fiverr.com.</li>
              <li>Create &quot;gigs&quot; — services you offer.</li>
              <li>Start prices low ($5-25) to get first reviews.</li>
              <li>Raise prices once 5-10 reviews.</li>
              <li>Photo + clear description.</li>
              <li>Specific services sell better than &quot;I do anything.&quot;</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Set your hours</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Decide — 5 hrs/week? 20?</li>
              <li>Block calendar.</li>
              <li>Don&apos;t overcommit — burnout is real.</li>
              <li>Decline if booked.</li>
              <li>Vacation mode in Fiverr settings.</li>
              <li>Income should supplement, not stress.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Realistic income</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Beginner (3-6 months): $0-500/mo.</li>
              <li>Established (1-2 yrs): $500-3,000/mo.</li>
              <li>Pro (2+ yrs reputation): $3,000-10,000/mo.</li>
              <li>Specialized expertise pays more.</li>
              <li>Fiverr takes 20% commission.</li>
              <li>Direct clients (after starting on Fiverr) = no fees.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Social Security impact</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Above Full Retirement Age (67) = no impact.</li>
              <li>Below FRA — earnings limit ($23,400/yr 2026 reduces benefits).</li>
              <li>$1 reduction for every $2 over.</li>
              <li>Year you reach FRA = different limit.</li>
              <li>Lost benefits not gone — recouped at FRA.</li>
              <li>Self-employment = pay 15.3% SE tax.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="bg-muted/40">
          <CardContent className="pt-6">
            <h3 className="font-bold mb-2">Why work in retirement</h3>
            <p className="text-sm text-muted-foreground">More than money — purpose, mental sharpness, social. Studies: working seniors stay healthier longer. Even 5 hrs/week meaningful. Your skills + experience = valuable. Many career-second-act seniors find more fulfillment than career one. Try it.</p>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}

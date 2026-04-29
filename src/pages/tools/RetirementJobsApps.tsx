import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Briefcase } from 'lucide-react';

const APPS = [
  { name: 'AARP Job Board (jobs.aarp.org)', cost: 'FREE', best: 'Curated for 50+. Companies that have signed AARP\'s "Employer Pledge" — they value experienced workers.', good: 'Best free starting point.' },
  { name: 'RetiredBrains.com', cost: 'FREE', best: 'Specifically for retirees and seniors. Part-time, seasonal, encore careers.', good: 'Niche but well-curated.' },
  { name: 'Retirementjobs.com', cost: 'FREE basic', best: '30,000+ jobs from age-friendly employers. Filter by part-time, work-from-home.', good: 'Strong retirement-specific filtering.' },
  { name: 'FlexJobs', cost: '$10-15/month', best: 'Best for remote work. Hand-screened to remove scams. Many of their jobs aren\'t on free job boards.', good: 'Worth $15/month if seriously job hunting.' },
  { name: 'LinkedIn', cost: 'Free; $40/mo Premium', best: 'World\'s largest professional network. Real recruiters use it.', good: 'Premium tier shows who searched for you.' },
  { name: 'Indeed', cost: 'FREE', best: 'Biggest job board overall. Search "part-time", "remote", or include your age preferences in description.', good: 'Browse without signing up.' },
  { name: 'Encore.org', cost: 'FREE', best: 'Resources for "second careers" and purposeful retirement work. Fellowships and bridge jobs.', good: 'For meaning, not just money.' },
];

export default function RetirementJobsApps() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Part-Time & Retirement Jobs — Apps and Sites for 50+ | TekSure" description="Want a little extra income, purpose, or social interaction? Plain-English guide to the best job sites for part-time and retirement work." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Briefcase className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Part-Time & Retirement Jobs</h1>
          <p className="text-lg text-muted-foreground">A few extra hours a week, on YOUR terms.</p>
        </div>

        <Card className="mb-6 bg-primary/5 border-primary/20">
          <CardContent className="pt-6">
            <h2 className="font-bold mb-2">Why part-time work in retirement</h2>
            <ul className="text-sm list-disc pl-5">
              <li>Extra income without depleting savings or RMDs.</li>
              <li>Social connection — research shows part-time workers in retirement live longer.</li>
              <li>Sense of purpose.</li>
              <li>Structure to the week.</li>
              <li>Can pause when you want.</li>
            </ul>
          </CardContent>
        </Card>

        <div className="space-y-3 mb-6">
          {APPS.map(a => (
            <Card key={a.name}>
              <CardContent className="pt-6">
                <div className="flex justify-between items-baseline mb-1">
                  <h3 className="font-bold text-lg">{a.name}</h3>
                  <span className="text-sm font-semibold text-primary">{a.cost}</span>
                </div>
                <p className="text-sm mb-1">{a.best}</p>
                <p className="text-sm text-muted-foreground">{a.good}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Roles that suit retirees well</h2>
            <ul className="list-disc pl-5 space-y-1 text-sm">
              <li><strong>Tax preparer</strong> (H&R Block hires Jan-April).</li>
              <li><strong>School bus driver</strong> — flexible, good benefits, even part-time.</li>
              <li><strong>Library assistant.</strong></li>
              <li><strong>Museum docent / state park interpreter.</strong></li>
              <li><strong>Substitute teacher</strong> — apply through local school district.</li>
              <li><strong>Tutor</strong> — Wyzant, Outschool, or local community center.</li>
              <li><strong>Customer service from home</strong> — many companies hire for phone work.</li>
              <li><strong>Bookkeeping for small businesses</strong> — if you have the skills.</li>
              <li><strong>Seasonal Amazon, FedEx, UPS</strong> — Nov/Dec.</li>
              <li><strong>Tax-Aide volunteer</strong> — unpaid but free training and meaningful work.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4 border-yellow-300 dark:border-yellow-800">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">⚠️ Income limits if collecting Social Security</h2>
            <p className="text-sm">If you take Social Security before your full retirement age (66-67), your earnings can reduce your benefit.</p>
            <ul className="list-disc pl-5 space-y-1 text-sm mt-2">
              <li><strong>Before full retirement age:</strong> $1 reduced for every $2 earned over $22,320/yr (2025).</li>
              <li><strong>Year you reach full retirement age:</strong> Less strict.</li>
              <li><strong>After full retirement age:</strong> No earnings limit.</li>
            </ul>
            <p className="text-sm mt-2">Most senior part-time jobs stay safely under the limit. But run the math at <strong>ssa.gov/benefits/retirement/planner/</strong>.</p>
          </CardContent>
        </Card>

        <Card className="bg-muted/40">
          <CardContent className="pt-6">
            <h3 className="font-bold mb-2">Watch out for job scams</h3>
            <p className="text-sm text-muted-foreground">"Work from home, $4000 a week, just deposit our check and send back the difference" — always a scam. Real employers never pay you upfront, never ask you to buy gift cards, never need you to wire money. Stick to known sites and verify the company on BBB.</p>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}

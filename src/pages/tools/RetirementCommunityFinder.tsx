import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { MapPin } from 'lucide-react';

const SVCS = [
  { name: 'A Place for Mom', cost: 'FREE for seniors', best: 'Largest senior placement service. Free advisor matched to you.', good: 'Best free advisor.' },
  { name: 'Caring.com', cost: 'FREE', best: 'Reviews + ratings. Owned by AARP.', good: 'Best reviews.' },
  { name: 'SeniorAdvisor.com', cost: 'FREE', best: 'Search senior living + reviews.', good: 'Best community search.' },
  { name: 'After55.com', cost: 'FREE', best: '55+ active adult communities (independent living).', good: 'Best for active.' },
  { name: 'AARP Community Map', cost: 'FREE', best: 'Maps senior-friendly + accessible communities.', good: 'Best senior-friendly cities.' },
];

export default function RetirementCommunityFinder() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Retirement Community Finders | TekSure" description="A Place for Mom, Caring.com. Plain-English picks for finding the right senior community." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <MapPin className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Retirement Community Finder</h1>
          <p className="text-lg text-muted-foreground">Find the right home for the next chapter.</p>
        </div>

        <div className="space-y-3 mb-6">
          {SVCS.map(s => (
            <Card key={s.name}>
              <CardContent className="pt-6">
                <div className="flex justify-between items-baseline mb-1">
                  <h3 className="font-bold text-lg">{s.name}</h3>
                  <span className="text-sm font-semibold text-primary">{s.cost}</span>
                </div>
                <p className="text-sm">{s.best}</p>
                <p className="text-sm text-muted-foreground">{s.good}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Levels of senior living</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li><strong>Active adult / 55+ community</strong> — own home, age-restricted. $200K-$2M to buy.</li>
              <li><strong>Independent living</strong> — apartment + meals + activities. $2K-$5K/mo.</li>
              <li><strong>Assisted living</strong> — apartment + meals + medication management + bathing help. $4K-$8K/mo.</li>
              <li><strong>Memory care</strong> — for dementia. Higher staffing. $6K-$10K/mo.</li>
              <li><strong>Skilled nursing / nursing home</strong> — 24/7 medical. $8K-$12K/mo.</li>
              <li><strong>CCRC (Continuing Care)</strong> — all levels in one community. Buy-in $200K-$2M + monthly.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Important questions to ask</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Pricing: ALL fees. (Many hide "level of care" surcharges.)</li>
              <li>Staffing ratio.</li>
              <li>Recent state inspection report. (Ask for it.)</li>
              <li>Annual rate increases (typical 3-8%).</li>
              <li>What happens if money runs out?</li>
              <li>Memory care upgrade path?</li>
              <li>Visiting hours + family policy.</li>
              <li>COVID / outbreak protocols.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4 bg-yellow-50 border-yellow-300 dark:bg-yellow-950/20 dark:border-yellow-800">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">"A Place for Mom" warning</h2>
            <p className="text-sm">A Place for Mom is FREE because communities pay them when you move in. They&apos;re not unbiased. Use them as ONE tool — but also research independently. Same with most "free" placement services.</p>
          </CardContent>
        </Card>

        <Card className="bg-muted/40">
          <CardContent className="pt-6">
            <h3 className="font-bold mb-2">Get state inspection reports</h3>
            <p className="text-sm text-muted-foreground">Every state inspects assisted living + nursing homes. Reports public. Search "[your state] assisted living inspection". OR <strong>Medicare.gov/care-compare</strong> for nursing homes specifically. Star ratings + violations.</p>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}

import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Wrench } from 'lucide-react';

const APPS = [
  { name: 'TaskRabbit', cost: '$50-100/hr typical', best: 'Quick handyman tasks. Background-checked taskers. Same-day available.', good: 'Best for small jobs.' },
  { name: 'Angi (Angie&apos;s List)', cost: 'FREE app, varies', best: 'Bigger jobs. Vetted contractors with reviews.', good: 'Best for projects.' },
  { name: 'Thumbtack', cost: 'FREE app, varies', best: 'Get 3-5 quotes from local pros. Compare.', good: 'Best for quotes.' },
  { name: 'HomeAdvisor (now Angi)', cost: 'FREE app, varies', best: 'Same parent company as Angi. Lots of vetted pros.', good: 'Best research.' },
  { name: 'Handy.com', cost: '$60-100/hr', best: 'House cleaning + handyman. Background checks.', good: 'Best for cleaning + handyman.' },
  { name: 'Nextdoor recommendations', cost: 'FREE', best: 'Neighbors recommend pros they actually used. Ask around.', good: 'Best for word-of-mouth.' },
];

export default function HandymanFinder() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Find a Handyman — Apps + Tips | TekSure" description="Hang shelves, fix toilet, install grab bars. Plain-English picks for finding trustworthy handyman apps + how to vet them." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Wrench className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Handyman Finder</h1>
          <p className="text-lg text-muted-foreground">Get small things fixed without sketchy strangers.</p>
        </div>

        <div className="space-y-3 mb-6">
          {APPS.map(a => (
            <Card key={a.name}>
              <CardContent className="pt-6">
                <div className="flex justify-between items-baseline mb-1">
                  <h3 className="font-bold text-lg">{a.name}</h3>
                  <span className="text-sm font-semibold text-primary">{a.cost}</span>
                </div>
                <p className="text-sm">{a.best}</p>
                <p className="text-sm text-muted-foreground">{a.good}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Vet before hiring</h2>
            <ol className="list-decimal pl-5 space-y-2 text-sm">
              <li>Read reviews — sort by recent, look for photos.</li>
              <li>Read 3-star reviews (most honest).</li>
              <li>Get 3 quotes for any job over $300.</li>
              <li>Check Better Business Bureau.</li>
              <li>Ask for proof of insurance + license (state laws vary).</li>
              <li>Pay no more than 50% upfront.</li>
              <li>NEVER pay 100% upfront for big jobs.</li>
            </ol>
          </CardContent>
        </Card>

        <Card className="mb-4 bg-yellow-50 border-yellow-300 dark:bg-yellow-950/20 dark:border-yellow-800">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Senior contractor scams</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Door-to-door &quot;I noticed your roof&quot; — almost always a scam.</li>
              <li>Demands cash only.</li>
              <li>Pressures decision today.</li>
              <li>Won&apos;t put estimate in writing.</li>
              <li>Asks for full payment upfront.</li>
              <li>Walk away. Find through Angi or Nextdoor instead.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Common projects + costs</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Hang shelves / pictures — $50-100.</li>
              <li>Mount TV — $100-200.</li>
              <li>Install grab bars — $100-200.</li>
              <li>Replace garbage disposal — $200-400.</li>
              <li>Replace ceiling fan — $200-400.</li>
              <li>Paint a room — $300-600 (just labor).</li>
              <li>Replace toilet — $300-600.</li>
              <li>Install ramp — $1,000-3,000.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="bg-muted/40">
          <CardContent className="pt-6">
            <h3 className="font-bold mb-2">Free senior help</h3>
            <p className="text-sm text-muted-foreground"><strong>Habitat for Humanity Aging in Place</strong> — free home repairs for low-income seniors. <strong>Rebuilding Together</strong> — free annual repair days. <strong>Veterans</strong> — VA grants for home modifications. <strong>Local Area Agency on Aging</strong> — knows free programs in your area.</p>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}

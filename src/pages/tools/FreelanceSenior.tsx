import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Laptop } from 'lucide-react';

const SITES = [
  { name: 'Upwork', cost: '20% fee initial / 5% later', best: 'Largest freelance platform. Writing, consulting, design, accounting.', good: 'Best variety.' },
  { name: 'Fiverr', cost: '20% fee', best: 'Sell defined services ($5-1,000+).', good: 'Best fixed services.' },
  { name: 'LinkedIn ProFinder', cost: 'FREE', best: 'Use your LinkedIn network. Direct connections, no platform fees.', good: 'Best networking.' },
  { name: 'Toptal', cost: 'Vetted only', best: 'Premium freelancers. Hard to get in. Top rates.', good: 'Best premium.' },
  { name: 'FlexJobs', cost: '$15/mo', best: 'Hand-vetted remote + freelance jobs. Worth it for serious search.', good: 'Best vetted.' },
  { name: 'Catalant / GLG / Wonder', cost: 'FREE to apply', best: 'Senior expertise marketplaces. Specifically value experience.', good: 'Best for experts.' },
];

export default function FreelanceSenior() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Freelance Sites for Seniors | TekSure" description="Upwork, Fiverr, LinkedIn ProFinder, Catalant. Plain-English picks for senior freelancers monetizing 30+ years of expertise." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Laptop className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Freelance Sites for Seniors</h1>
          <p className="text-lg text-muted-foreground">30 years of expertise = real value.</p>
        </div>

        <div className="space-y-3 mb-6">
          {SITES.map(s => (
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
            <h2 className="font-bold text-xl mb-3">Best fields for senior freelancers</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li><strong>Writing + editing</strong> — articles, books, marketing.</li>
              <li><strong>Bookkeeping + accounting</strong> — small businesses.</li>
              <li><strong>HR consulting</strong> — for past managers/execs.</li>
              <li><strong>Marketing strategy</strong> — career marketers.</li>
              <li><strong>Engineering / project management</strong> — high rates.</li>
              <li><strong>Legal services</strong> — paralegal, contract review.</li>
              <li><strong>Healthcare consulting</strong> — for nurses/admins.</li>
              <li><strong>Sales coaching</strong> — train younger reps.</li>
              <li><strong>Voiceover / narration</strong> — your career voice.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Set rates correctly</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Charge full corporate value of your time, not hourly office rate.</li>
              <li>$50-150/hr typical for experienced consultants.</li>
              <li>$200-500/hr for specialists (legal, medical, financial).</li>
              <li>Charge per project for fixed scope, hourly for ongoing.</li>
              <li>Don&apos;t lowball — undermines whole industry.</li>
              <li>Add 30-50% to "feel right" rate to cover taxes + downtime.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="bg-muted/40">
          <CardContent className="pt-6">
            <h3 className="font-bold mb-2">Big mistake: undercharging</h3>
            <p className="text-sm text-muted-foreground">Senior freelancers often underprice — feel guilty charging "real" rates. Don&apos;t. Your 30 years of experience is what clients pay premium for. They couldn&apos;t hire someone like you for $20/hr if they tried.</p>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}

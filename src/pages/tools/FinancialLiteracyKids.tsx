import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { BookOpen } from 'lucide-react';

const APPS = [
  { name: 'Greenlight', cost: '$5/mo', best: 'Debit card + savings + investing for kids. Parental controls. Senior-favorite gift.', good: 'Best overall.' },
  { name: 'GoHenry', cost: '$5/mo', best: 'Same idea. Slight variations.', good: 'Best 2nd option.' },
  { name: 'BusyKid', cost: '$4/mo', best: 'Allowance + chores + savings + giving.', good: 'Best for chores.' },
  { name: 'Goalsetter', cost: '$5/mo', best: 'Black-owned, financial literacy quizzes built in.', good: 'Best with education.' },
  { name: 'Stockpile', cost: 'FREE / fees per trade', best: 'Buy fractional shares as gifts. Kids own real stocks.', good: 'Best for stock gifts.' },
  { name: 'Bank kids account', cost: 'FREE', best: 'Most banks have free kids accounts. Old-school works.', good: 'Best free.' },
];

export default function FinancialLiteracyKids() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Financial Literacy Apps for Kids | TekSure" description="Greenlight, GoHenry, Stockpile. Plain-English picks for grandkid money apps." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <BookOpen className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Financial Literacy for Kids</h1>
          <p className="text-lg text-muted-foreground">Better than another toy.</p>
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
            <h2 className="font-bold text-xl mb-3">Greenlight features</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Debit card kids can use anywhere.</li>
              <li>Parents/grandparents see every purchase.</li>
              <li>Set spending limits per category.</li>
              <li>"Round up" + invest spare change.</li>
              <li>Kids invest in real stocks (Disney, Apple).</li>
              <li>Earn allowance with chores tracker.</li>
              <li>Charity donation tracking.</li>
              <li>Best for ages 8-18.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="bg-muted/40">
          <CardContent className="pt-6">
            <h3 className="font-bold mb-2">Best birthday gift</h3>
            <p className="text-sm text-muted-foreground">Instead of $25 in toys — $25 in Stockpile (Disney stock). Kid follows real company they know. Lessons + ownership. After 5 years they understand investing way more than peers.</p>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}

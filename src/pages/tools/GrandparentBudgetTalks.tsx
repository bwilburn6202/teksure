import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Wallet } from 'lucide-react';

export default function GrandparentBudgetTalks() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Money Talks with Grandkids | TekSure" description="Teach financial wisdom across generations. Plain-English guide to age-appropriate money conversations." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Wallet className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Money Talks Across Generations</h1>
          <p className="text-lg text-muted-foreground">Best gift = wisdom.</p>
        </div>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">By age</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li><strong>5-7</strong> — coins, simple counting, "save / spend / give" jars.</li>
              <li><strong>8-10</strong> — allowance management, banking basics, comparison shopping.</li>
              <li><strong>11-13</strong> — opening savings account, budget first phone bill.</li>
              <li><strong>14-17</strong> — earning income, taxes, Roth IRA, college funds, credit basics.</li>
              <li><strong>18+</strong> — student loans, credit cards, investing 101.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Stories that teach</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Your first job — what you earned + what you bought.</li>
              <li>First savings — "I saved $500 by 16."</li>
              <li>Mistakes — "I bought X on credit + paid years."</li>
              <li>Smart wins — "I started saving for retirement at 25."</li>
              <li>Compound interest — show 1 cent doubled daily for 30 days.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Books that help</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li><strong>Lemonade in Winter</strong> (4-7) — math + entrepreneurship.</li>
              <li><strong>The Berenstain Bears&apos; Trouble with Money</strong> (5-8).</li>
              <li><strong>Smart Money, Smart Kids</strong> — Dave Ramsey + daughter.</li>
              <li><strong>The Richest Man in Babylon</strong> — for teens.</li>
              <li><strong>Rich Dad Poor Dad</strong> — older teens.</li>
              <li><strong>The Money Book for the Young, Fabulous &amp; Broke</strong> — Suze Orman, for 20s.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Activities that teach</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Grocery shop together — show comparison.</li>
              <li>Help open first bank account.</li>
              <li>Match Roth IRA contributions when they earn.</li>
              <li>Help track first paycheck — gross vs net, taxes.</li>
              <li>Teach to compare loans — APR, total cost.</li>
              <li>Track stock or fund quarterly together.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="bg-muted/40">
          <CardContent className="pt-6">
            <h3 className="font-bold mb-2">Lasting impact</h3>
            <p className="text-sm text-muted-foreground">Studies show kids learn financial habits more from grandparents than schools. Wisdom + stories + practice = better money decisions for their lifetime. Best multi-generation gift after love + time.</p>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}

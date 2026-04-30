import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Banknote } from 'lucide-react';

export default function SuddenMoneyChecklist() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Sudden Money Checklist — Inheritance, Lottery, Lawsuit | TekSure" description="Got a windfall? Plain-English steps to take BEFORE making big decisions. Protects your family and your sanity." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Banknote className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Sudden Money Checklist</h1>
          <p className="text-lg text-muted-foreground">Inheritance, lottery, settlement. Don\'t spend it yet.</p>
        </div>

        <Card className="mb-6 bg-primary/5 border-primary/20">
          <CardContent className="pt-6">
            <h2 className="font-bold mb-2">First — pause</h2>
            <p className="text-sm">70% of lottery winners are broke within 5 years. Sudden inheritance often disappears in 18 months. The reason: emotional decisions made while still grieving or shocked. Pause for 30-90 days before any big moves.</p>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Day 1-7</h2>
            <ol className="list-decimal pl-5 space-y-2 text-sm">
              <li><strong>Don\'t tell people</strong>. The fewer who know, the fewer asks for loans/handouts.</li>
              <li><strong>Park money in HIGH-YIELD savings</strong> at a different bank than your daily one. (See our High-Yield Savings tool.) Earn 4-5% while you think.</li>
              <li><strong>Sit on it</strong>. Don\'t buy anything bigger than dinner.</li>
            </ol>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Day 7-30</h2>
            <ol className="list-decimal pl-5 space-y-2 text-sm">
              <li><strong>Hire a fee-only fiduciary</strong> for a one-time plan ($1,500-5,000). NAPFA.org. (See our Fiduciary Advisor Finder.)</li>
              <li><strong>CPA</strong> — for large windfalls, tax planning matters. Estate, gift, capital gains.</li>
              <li><strong>Estate attorney</strong> — update YOUR will, trust, beneficiaries.</li>
              <li><strong>Pay off high-interest debt</strong> (credit cards). NOT mortgage yet.</li>
              <li><strong>Build a 12-month emergency fund</strong>.</li>
            </ol>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Month 2-6</h2>
            <ol className="list-decimal pl-5 space-y-2 text-sm">
              <li><strong>Long-term plan</strong> — invest for retirement, charity, children/grandchildren.</li>
              <li><strong>Max out tax-advantaged accounts</strong> for the year.</li>
              <li><strong>Consider Roth conversions</strong> if you suddenly have low income.</li>
              <li><strong>Plan donations</strong> — if charitable, do it intentionally with maximum tax benefit (DAF, QCDs, etc.).</li>
              <li><strong>Discuss with spouse</strong>. ALL money decisions are joint.</li>
              <li><strong>"No" templates</strong> for family/friends asking for help. "I\'ve put everything in a trust I can\'t access."</li>
            </ol>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Big mistakes</h2>
            <ul className="list-disc pl-5 space-y-1 text-sm">
              <li>Buying a luxury car in week 1.</li>
              <li>Lending family huge sums (more than 3 family members ALL coming with big asks).</li>
              <li>Investing in a friend\'s business.</li>
              <li>Quitting your job before plan is finalized.</li>
              <li>Buying a fancy second home.</li>
              <li>Listening to first advisor that calls (often the broker handling deceased\'s account).</li>
              <li>Mixing inheritance with marital assets if not married decades (depending on state).</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">If lottery</h2>
            <ul className="list-disc pl-5 space-y-1 text-sm">
              <li>Sign back of ticket. Photocopy. Lock in safe deposit box.</li>
              <li>Check state rules — some allow anonymity (DE, KS, MD, ND, OH, SC, etc.).</li>
              <li>Hire CPA + attorney + financial planner BEFORE claiming.</li>
              <li>Lump sum vs annuity — usually lump sum, but get advice.</li>
              <li>Set up trust to claim if your state allows.</li>
              <li>Federal + state taxes 25-50% off the top.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="bg-muted/40">
          <CardContent className="pt-6">
            <h3 className="font-bold mb-2">Resource</h3>
            <p className="text-sm text-muted-foreground">"Sudden Money: Managing a Financial Windfall" by Susan Bradley. Top book on the topic. Free at most libraries.</p>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}

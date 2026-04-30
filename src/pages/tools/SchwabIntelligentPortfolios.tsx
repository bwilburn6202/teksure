import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Briefcase } from 'lucide-react';

export default function SchwabIntelligentPortfolios() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Schwab Intelligent Portfolios for Seniors | TekSure" description="Schwab&apos;s free robo-advisor explained. Senior-friendly automated investing." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Briefcase className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Schwab Intelligent Portfolios</h1>
          <p className="text-lg text-muted-foreground">Free robo-advisor. Set + forget.</p>
        </div>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">What is a robo-advisor?</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Computer manages your investments automatically.</li>
              <li>Picks portfolio based on your goals.</li>
              <li>Rebalances over time.</li>
              <li>No emotional trading mistakes.</li>
              <li>Cheaper than human advisor.</li>
              <li>Schwab&apos;s version is FREE (other companies charge).</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Schwab Intelligent — free</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Zero advisory fee.</li>
              <li>$5,000 minimum investment.</li>
              <li>Diversified ETF portfolio.</li>
              <li>Tax-loss harvesting at $50K+.</li>
              <li>Quarterly automatic rebalancing.</li>
              <li>Best free robo-advisor available.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Schwab Intelligent Premium</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>$25K minimum.</li>
              <li>$300 one-time setup fee.</li>
              <li>$30/month subscription.</li>
              <li>Unlimited access to human CFP.</li>
              <li>Personalized retirement plan.</li>
              <li>Worth it for $250K+ accounts.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">How it works</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Answer 10–15 questions about goals + age.</li>
              <li>App suggests portfolio mix.</li>
              <li>Deposit money — auto-invested.</li>
              <li>Schwab manages everything.</li>
              <li>You see growth in app.</li>
              <li>Withdraw anytime.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Other robo-advisors</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Vanguard Digital Advisor — 0.20% fee.</li>
              <li>Betterment — 0.25% fee.</li>
              <li>Wealthfront — 0.25% fee.</li>
              <li>Fidelity Go — 0.35% fee on $25K+.</li>
              <li>All charge fees — Schwab is free.</li>
              <li>Schwab is best free option.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Best for these seniors</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Don&apos;t want to manage investments yourself.</li>
              <li>Don&apos;t want to pay 1%+ to a human advisor.</li>
              <li>$5K–$200K to invest.</li>
              <li>Comfortable with technology.</li>
              <li>Set-and-forget personality.</li>
              <li>Trust Schwab&apos;s reputation.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="bg-muted/40">
          <CardContent className="pt-6">
            <h3 className="font-bold mb-2">Free is rare in finance</h3>
            <p className="text-sm text-muted-foreground">Most financial advisors charge 1% per year — that&apos;s $5,000 per year on a $500K portfolio. Schwab Intelligent Portfolios charges zero advisory fee for the same automated management. The catch: they hold some cash in your account (which earns less interest). For most senior investors, the savings far outweigh that drawback. Worth considering as DIY-light option.</p>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}

import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { PageBreadcrumb } from '@/components/PageBreadcrumb';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { CreditCard, ChevronRight, AlertTriangle } from 'lucide-react';

type Priority = 'cash-back' | 'travel' | 'no-fee' | 'groceries';

interface RewardCard {
  id: string;
  name: string;
  issuer: string;
  annualFee: string;
  baseRate: string;
  signupBonus: string;
  whoFor: string;
  pros: string[];
  cons: string[];
  priorities: Priority[];
}

const CARDS: RewardCard[] = [
  {
    id: 'citi-double-cash',
    name: 'Citi Double Cash',
    issuer: 'Citi',
    annualFee: '$0',
    baseRate: '2% on everything (1% when you buy, 1% when you pay)',
    signupBonus: '$200 after $1,500 in first 6 months',
    whoFor: 'Anyone who wants one card that pays well on every purchase, with no categories to track.',
    pros: [
      'Flat 2% on every purchase — no rotating categories.',
      'No annual fee, ever.',
      'Cash back, not points — paid as a statement credit or check.',
      'Good for groceries, gas, utilities, doctor copays — anywhere.',
    ],
    cons: [
      'No big bonus categories — travel cards beat it on flights and hotels.',
      'You earn the second 1% only after you pay the bill.',
    ],
    priorities: ['cash-back', 'no-fee'],
  },
  {
    id: 'wells-fargo-active-cash',
    name: 'Wells Fargo Active Cash',
    issuer: 'Wells Fargo',
    annualFee: '$0',
    baseRate: '2% cash back on everything',
    signupBonus: '$200 after $500 in first 3 months',
    whoFor: 'Same idea as Citi Double Cash, but you bank with Wells Fargo already.',
    pros: [
      '2% on every purchase — no categories to remember.',
      'Smaller spending requirement to earn the signup bonus ($500).',
      'No annual fee.',
      'Cell phone protection if you pay your phone bill with the card.',
    ],
    cons: [
      'You earn 2% in one swipe (slightly simpler than Citi).',
      'Wells Fargo customer service has a mixed reputation.',
    ],
    priorities: ['cash-back', 'no-fee'],
  },
  {
    id: 'chase-sapphire-preferred',
    name: 'Chase Sapphire Preferred',
    issuer: 'Chase',
    annualFee: '$95',
    baseRate: '1x on most purchases, 3x on dining, 2x on travel',
    signupBonus: '60,000 points after $4,000 in 3 months (worth ~$750 in travel)',
    whoFor: 'People who travel at least 2-3 times a year and want extra value on flights and hotels.',
    pros: [
      'Strong travel benefits — trip cancellation, lost luggage, rental car coverage.',
      'Points transfer to airlines (United, Southwest) and hotels (Hyatt, Marriott).',
      'Points worth 25% more when booked through Chase Travel.',
      'No foreign transaction fees — works abroad without extra charges.',
    ],
    cons: [
      '$95 annual fee every year — you need to use the perks to break even.',
      'Travel rewards are more complex to redeem than plain cash back.',
      'Higher spending requirement for the bonus ($4,000 in 3 months).',
    ],
    priorities: ['travel'],
  },
  {
    id: 'amex-blue-cash-preferred',
    name: 'American Express Blue Cash Preferred',
    issuer: 'American Express',
    annualFee: '$95',
    baseRate: '6% at U.S. supermarkets (up to $6,000/year), 6% on streaming, 3% on gas, 1% else',
    signupBonus: '$250 after $3,000 in 6 months',
    whoFor: 'People who spend a lot at the grocery store — Publix, Kroger, Safeway, Wegmans, ShopRite.',
    pros: [
      '6% at U.S. supermarkets is the best grocery rate available.',
      '6% on Netflix, Hulu, Disney+, Spotify, Apple TV+ subscriptions.',
      '3% on gas and transit.',
      'If you spend $50/week on groceries, the 6% pays back $156/year.',
    ],
    cons: [
      '$95 annual fee — only worth it if you spend at least $50/week at supermarkets.',
      'Walmart and Target do not count as supermarkets for the 6%.',
      'AmEx is not accepted at every small business the way Visa or Mastercard is.',
      '$6,000/year cap on the 6% — after that it drops to 1%.',
    ],
    priorities: ['groceries'],
  },
  {
    id: 'discover-it',
    name: 'Discover it Cash Back',
    issuer: 'Discover',
    annualFee: '$0',
    baseRate: '5% on rotating quarterly categories, 1% else',
    signupBonus: 'Cashback Match — Discover doubles all cash back you earn the first year',
    whoFor: 'Patient people willing to track which category is active each quarter (gas, groceries, restaurants, Amazon, etc.).',
    pros: [
      'No annual fee.',
      'First-year bonus is huge — if you earn $300 cash back, Discover pays $600.',
      'U.S.-based customer service that actually picks up the phone.',
      'Free FICO credit score every month on your statement.',
    ],
    cons: [
      'You have to "activate" the 5% category every 3 months on the Discover website.',
      'Some merchants do not accept Discover (less common than Visa or Mastercard).',
      '5% is capped at $1,500 in spending per quarter.',
    ],
    priorities: ['cash-back', 'no-fee'],
  },
  {
    id: 'aarp-barclays',
    name: 'AARP Essential Rewards Mastercard (Barclays)',
    issuer: 'Barclays',
    annualFee: '$0',
    baseRate: '3% on gas and drugstores, 2% on medical expenses, 1% else',
    signupBonus: '$100 cash back after $500 in first 90 days',
    whoFor: 'AARP members 50+ who want a card built for retirement spending — gas, pharmacy copays, doctor visits.',
    pros: [
      'No annual fee.',
      '2% on medical expenses — including doctor copays and pharmacy.',
      '3% at gas stations and drugstores like CVS and Walgreens.',
      'A portion of every purchase goes to AARP Foundation programs.',
    ],
    cons: [
      'You need to be an AARP member ($16/year, often discounted).',
      'Base rate on everything else is only 1% — Citi Double Cash beats it on non-bonus spending.',
      'No big travel benefits.',
    ],
    priorities: ['cash-back', 'no-fee'],
  },
];

export default function CreditCardRewardsPicker() {
  const [priority, setPriority] = useState<Priority | null>(null);
  const [showAll, setShowAll] = useState(false);

  const highlighted = priority ? CARDS.filter(c => c.priorities.includes(priority)).slice(0, 2) : [];
  const visibleCards = showAll ? CARDS : CARDS.slice(0, 3);

  return (
    <>
      <SEOHead
        title="Credit Card Rewards Picker"
        description="Pick the right rewards credit card without the marketing noise. Plain-English comparison of Citi Double Cash, Chase Sapphire Preferred, AmEx Blue Cash Preferred, Discover it, Wells Fargo Active Cash, and the AARP card."
        path="/tools/credit-card-rewards-picker"
      />
      <Navbar />

      <main className="min-h-screen bg-background">
        <section className="bg-gradient-to-br from-emerald-50 via-background to-teal-50 dark:from-emerald-950/20 dark:to-teal-950/20 border-b border-border py-10 px-4">
          <div className="container max-w-3xl mx-auto text-center">
            <div className="flex justify-center mb-3">
              <div className="p-3 bg-emerald-500/10 rounded-full">
                <CreditCard className="h-8 w-8 text-emerald-600" />
              </div>
            </div>
            <h1 className="text-3xl md:text-4xl font-bold mb-2">Credit Card Rewards Picker</h1>
            <p className="text-muted-foreground text-lg max-w-xl mx-auto">
              Six honest cards compared. No marketing fluff, no signup gimmicks. Pick the one that fits how you actually spend.
            </p>
          </div>
        </section>

        <div className="container max-w-3xl mx-auto px-4 py-8">
          <PageBreadcrumb segments={[{ label: 'Tools', href: '/tools' }, { label: 'Credit Card Rewards Picker' }]} />

          <Card className="border-border bg-muted/30 mb-6">
            <CardContent className="p-5">
              <p className="text-sm font-semibold mb-2">Before you pick a card</p>
              <p className="text-xs text-muted-foreground">
                Rewards only matter if you pay the full balance every month. If you carry a balance, the interest (often 22-29% a year) wipes out every dollar of cash back. Pay in full, on time, and treat rewards as a small bonus on spending you would do anyway. Never spend more to chase a category bonus.
              </p>
            </CardContent>
          </Card>

          <Card className="border-border shadow-sm mb-6">
            <CardContent className="p-6">
              <p className="text-sm font-semibold mb-3">What matters most to you?</p>
              <div className="grid sm:grid-cols-2 gap-2">
                <Button
                  variant={priority === 'cash-back' ? 'default' : 'outline'}
                  onClick={() => setPriority('cash-back')}
                  className="h-auto py-3 text-left whitespace-normal"
                >
                  Simple cash back on everything
                </Button>
                <Button
                  variant={priority === 'travel' ? 'default' : 'outline'}
                  onClick={() => setPriority('travel')}
                  className="h-auto py-3 text-left whitespace-normal"
                >
                  Travel — flights and hotels
                </Button>
                <Button
                  variant={priority === 'no-fee' ? 'default' : 'outline'}
                  onClick={() => setPriority('no-fee')}
                  className="h-auto py-3 text-left whitespace-normal"
                >
                  Absolutely no annual fee
                </Button>
                <Button
                  variant={priority === 'groceries' ? 'default' : 'outline'}
                  onClick={() => setPriority('groceries')}
                  className="h-auto py-3 text-left whitespace-normal"
                >
                  Groceries are my biggest expense
                </Button>
              </div>
              {priority && (
                <p className="text-xs text-muted-foreground mt-3">
                  Pick changed? Tap a different option above and the highlights update.
                </p>
              )}
            </CardContent>
          </Card>

          {highlighted.length > 0 && (
            <Card className="border-2 border-emerald-300 bg-emerald-50 dark:bg-emerald-950/20 mb-6">
              <CardContent className="p-6">
                <Badge className="mb-2">Best fit for you</Badge>
                <h2 className="text-xl font-bold mb-3">
                  {priority === 'cash-back' && 'For straightforward cash back'}
                  {priority === 'travel' && 'For travel rewards'}
                  {priority === 'no-fee' && 'For no annual fee'}
                  {priority === 'groceries' && 'For grocery spending'}
                </h2>
                <div className="space-y-3">
                  {highlighted.map(card => (
                    <div key={card.id} className="bg-background rounded-lg p-4 border border-border">
                      <div className="flex items-start justify-between gap-2 flex-wrap mb-1">
                        <p className="font-semibold">{card.name}</p>
                        <Badge variant="outline">{card.annualFee} annual fee</Badge>
                      </div>
                      <p className="text-sm text-muted-foreground mb-1">{card.baseRate}</p>
                      <p className="text-xs text-muted-foreground"><strong>Best for:</strong> {card.whoFor}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          )}

          <p className="text-sm font-semibold mb-3">All six cards compared</p>
          <div className="space-y-4 mb-6">
            {visibleCards.map(card => (
              <Card key={card.id} className="border-border">
                <CardContent className="p-5">
                  <div className="flex items-start justify-between gap-3 mb-2 flex-wrap">
                    <div>
                      <p className="font-semibold text-base">{card.name}</p>
                      <p className="text-xs text-muted-foreground">Issued by {card.issuer}</p>
                    </div>
                    <Badge variant="outline">{card.annualFee} annual fee</Badge>
                  </div>

                  <div className="bg-muted/40 rounded-md p-3 mb-3">
                    <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-1">Rewards rate</p>
                    <p className="text-sm mb-2">{card.baseRate}</p>
                    <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-1">Signup bonus</p>
                    <p className="text-sm">{card.signupBonus}</p>
                  </div>

                  <p className="text-sm text-muted-foreground mb-3"><strong>Best for:</strong> {card.whoFor}</p>

                  <div className="grid sm:grid-cols-2 gap-2">
                    <div>
                      <p className="text-xs font-semibold text-green-700 dark:text-green-300 mb-1">Pros</p>
                      <ul className="space-y-0.5">
                        {card.pros.map((p, i) => (
                          <li key={i} className="text-xs flex gap-1"><span className="text-green-600">+</span><span>{p}</span></li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <p className="text-xs font-semibold text-red-700 dark:text-red-300 mb-1">Cons</p>
                      <ul className="space-y-0.5">
                        {card.cons.map((c, i) => (
                          <li key={i} className="text-xs flex gap-1"><span className="text-red-600">−</span><span>{c}</span></li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
            {!showAll && (
              <Button variant="outline" onClick={() => setShowAll(true)}>Show all 6 cards</Button>
            )}
          </div>

          <Card className="border-amber-300 bg-amber-50 dark:bg-amber-950/20 mb-6">
            <CardContent className="p-5 flex gap-3">
              <AlertTriangle className="h-5 w-5 text-amber-600 shrink-0 mt-0.5" />
              <div className="text-sm">
                <p className="font-semibold mb-1">Watch out for fake card offers</p>
                <p className="text-muted-foreground mb-2">
                  Some pre-approved card mailers in your mailbox are real. Many phone calls and emails offering "instant approval" are not.
                </p>
                <ul className="space-y-1.5 mt-2">
                  <li className="flex gap-2"><span className="text-amber-700 dark:text-amber-300 font-semibold">1.</span><span>Real card issuers (Chase, Citi, AmEx, Discover, Capital One) never call you to demand your Social Security number, mother's maiden name, or bank login.</span></li>
                  <li className="flex gap-2"><span className="text-amber-700 dark:text-amber-300 font-semibold">2.</span><span>Never give out your SSN or card numbers to anyone who called YOU. If you want a card, hang up and apply yourself by going to the issuer's official website.</span></li>
                  <li className="flex gap-2"><span className="text-amber-700 dark:text-amber-300 font-semibold">3.</span><span>If a mailer says "guaranteed approval" with no credit check and a fee up front, it is a scam. Real cards check your credit and never charge a fee before approval.</span></li>
                  <li className="flex gap-2"><span className="text-amber-700 dark:text-amber-300 font-semibold">4.</span><span>To stop most pre-approved mail, go to optoutprescreen.com (the official site set up by the credit bureaus).</span></li>
                </ul>
              </div>
            </CardContent>
          </Card>

          <Card className="border-border bg-muted/30 mb-6">
            <CardContent className="p-5">
              <p className="text-sm font-semibold mb-2">Honest tradeoff: annual fee or no fee?</p>
              <p className="text-xs text-muted-foreground">
                A $95 annual fee is only worth paying if the rewards beat it by a comfortable margin. Quick math: at 2% cash back, you would need to spend $4,750 a year on groceries to earn back the $95 fee on the AmEx Blue Cash Preferred (versus the Citi Double Cash). If you spend less than that at supermarkets, the no-fee Citi card wins. If you travel only once a year, the Chase Sapphire Preferred is probably not worth its fee either — a no-fee 2% card plus a separate vacation savings account is often the better choice.
              </p>
            </CardContent>
          </Card>

          <Card className="border-border bg-muted/30 mb-6">
            <CardContent className="p-5">
              <p className="text-sm font-semibold mb-2">Worth knowing about credit scores</p>
              <p className="text-xs text-muted-foreground">
                Applying for a card causes a small temporary dip in your credit score (usually 5-10 points) that recovers in a few months. Do not apply for three cards in one week — pick one. If your score is below 670, you may not be approved for the travel cards listed here; the Discover it Secured or Capital One Platinum are gentler starting points.
              </p>
            </CardContent>
          </Card>

          <div className="mt-10 pt-8 border-t border-border">
            <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-3">Related</p>
            <div className="grid sm:grid-cols-3 gap-3">
              <Link to="/tools/online-banking-safety" className="p-3 rounded-lg border border-border hover:border-primary/50 hover:bg-primary/5 transition-all">
                <p className="font-medium text-sm">Online Banking Safety</p>
                <p className="text-xs text-muted-foreground mt-0.5">Protect the account you pay the card from.</p>
              </Link>
              <Link to="/tools/credit-freeze-walkthrough" className="p-3 rounded-lg border border-border hover:border-primary/50 hover:bg-primary/5 transition-all">
                <p className="font-medium text-sm">Credit Freeze Walkthrough</p>
                <p className="text-xs text-muted-foreground mt-0.5">Stop crooks from opening cards in your name.</p>
              </Link>
              <Link to="/tools/credit-report-reader" className="p-3 rounded-lg border border-border hover:border-primary/50 hover:bg-primary/5 transition-all">
                <p className="font-medium text-sm">Credit Report Reader</p>
                <p className="text-xs text-muted-foreground mt-0.5">Read your free annual credit report.</p>
              </Link>
            </div>
          </div>
          <p className="text-xs text-muted-foreground mt-4 flex items-center gap-1">
            <ChevronRight className="h-3 w-3" /> Quick Tip: pull a free credit report once a year at annualcreditreport.com (the only federally authorized free site) before you apply. Knowing your score saves you from being declined.
          </p>
        </div>
      </main>

      <Footer />
    </>
  );
}

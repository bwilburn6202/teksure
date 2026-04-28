import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { PageBreadcrumb } from '@/components/PageBreadcrumb';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { TrendingUp, ChevronRight, ExternalLink, AlertTriangle } from 'lucide-react';

interface Brokerage {
  name: string;
  fees: string;
  whoFor: string;
  pros: string[];
  cons: string[];
  link: string;
}

const BROKERAGES: Brokerage[] = [
  {
    name: 'Fidelity',
    fees: '$0 stock trades, $0 account fee',
    whoFor: 'Best all-around pick for most retirees. Strong customer service, free index funds, friendly phone support.',
    pros: [
      'Free stock and ETF trades.',
      'Zero-fee index funds (FZROX, FZILX) — no minimum.',
      'Excellent phone support staffed in the US.',
      'Local branch offices in many cities for in-person help.',
      'Free check-writing and bill-pay built in.',
    ],
    cons: [
      'Website has many menus — takes time to learn.',
      'They will offer managed accounts that charge 1%+ — politely decline unless you want hand-holding.',
    ],
    link: 'https://www.fidelity.com',
  },
  {
    name: 'Vanguard',
    fees: '$0 stock trades, $0 account fee on most accounts',
    whoFor: 'Best if you want index funds and a buy-and-hold strategy. Founded by John Bogle, the inventor of the index fund.',
    pros: [
      'Famous for ultra-low-cost index funds (VTI, VOO, VTSAX).',
      'Owned by its fund holders — no shareholders to please.',
      'Strong reputation for putting customers first.',
      'Best place for traditional or Roth IRAs focused on long-term growth.',
    ],
    cons: [
      'Website and app are dated — Fidelity is more polished.',
      'Phone hold times can be long during market hours.',
      'Less hand-holding than Fidelity or Schwab.',
    ],
    link: 'https://investor.vanguard.com',
  },
  {
    name: 'Charles Schwab',
    fees: '$0 stock trades, $0 account fee',
    whoFor: 'Great pick if you want a full-service broker plus a checking account in one place. Acquired TD Ameritrade in 2023.',
    pros: [
      'Free stock and ETF trades.',
      'Schwab Bank checking with no foreign transaction fees and unlimited ATM rebates.',
      'Hundreds of physical branches nationwide for in-person help.',
      'Excellent research tools and educational content.',
    ],
    cons: [
      'Cash sweep pays low interest — move idle cash to a money market fund.',
      'Their robo-advisor (Intelligent Portfolios) requires a large cash holding that hurts returns.',
    ],
    link: 'https://www.schwab.com',
  },
  {
    name: 'Edward Jones',
    fees: 'Typically 1.35%-2% per year of your balance, plus fund fees',
    whoFor: 'For people who want a real human advisor in a local office and are willing to pay a lot for hand-holding. Most retirees do not need this.',
    pros: [
      'Local office in almost every small town.',
      'Dedicated advisor who knows you by name.',
      'Helpful if you find online platforms overwhelming and want a person to call.',
    ],
    cons: [
      'Fees are very high — paying 1.5% per year on a $500,000 account costs you $7,500 every year.',
      'Often steered into commission-loaded mutual funds (American Funds) when cheaper index funds exist.',
      'Over a 20-year retirement, the fees can quietly cost you a six-figure sum versus Fidelity or Vanguard.',
      'Hard to leave — transferring assets out can take weeks.',
    ],
    link: 'https://www.edwardjones.com',
  },
  {
    name: 'Robinhood',
    fees: '$0 stock trades, $5/month for Robinhood Gold',
    whoFor: 'Built for active day-traders and crypto buyers. NOT recommended for retirees or anyone using this money for living expenses.',
    pros: [
      'Slick phone app.',
      'Fractional shares (buy a piece of one share).',
      '$0 trades.',
    ],
    cons: [
      'App design uses confetti animations and gamified features that encourage frequent trading — which destroys returns.',
      'History of outages during major market events. In March 2020, customers could not log in to sell.',
      'Customer support is mostly chat-based — no clear phone line.',
      'Limited retirement account options compared to Fidelity, Vanguard, or Schwab.',
      'In 2021 paid a $70 million FINRA fine for harming customers and giving false information.',
    ],
    link: 'https://robinhood.com',
  },
];

export default function InvestmentAppPicker() {
  const [showAll, setShowAll] = useState(false);

  return (
    <>
      <SEOHead
        title="Investment App Picker"
        description="Choose the right investment account — Fidelity, Vanguard, Schwab, Edward Jones, or Robinhood. Honest, plain-English comparison for retirees."
        path="/tools/investment-app-picker"
      />
      <Navbar />

      <main className="min-h-screen bg-background">
        <section className="bg-gradient-to-br from-emerald-50 via-background to-green-50 dark:from-emerald-950/20 dark:to-green-950/20 border-b border-border py-10 px-4">
          <div className="container max-w-3xl mx-auto text-center">
            <div className="flex justify-center mb-3">
              <div className="p-3 bg-emerald-500/10 rounded-full">
                <TrendingUp className="h-8 w-8 text-emerald-700 dark:text-emerald-300" />
              </div>
            </div>
            <h1 className="text-3xl md:text-4xl font-bold mb-2">Investment App Picker</h1>
            <p className="text-muted-foreground text-lg max-w-xl mx-auto">
              Where to open a retirement or brokerage account. Five honest comparisons.
            </p>
          </div>
        </section>

        <div className="container max-w-3xl mx-auto px-4 py-8">
          <PageBreadcrumb segments={[{ label: 'Tools', href: '/tools' }, { label: 'Investment App Picker' }]} />

          <Card className="border-border bg-muted/30 mb-6">
            <CardContent className="p-5">
              <p className="text-sm font-semibold mb-2">Read this first</p>
              <p className="text-xs text-muted-foreground mb-3">
                Where you hold your money matters less than what you hold and how often you trade. A boring index fund at any of the top three brokers below will out-perform a fancy advisor charging 1.5% per year over the long run. The big three — Fidelity, Vanguard, and Schwab — are all reputable, all charge zero for stock trades, and all carry SIPC insurance up to 500,000 dollars per account. Pick whichever feels most comfortable to you and your family.
              </p>
            </CardContent>
          </Card>

          <div className="space-y-4 mb-6">
            {(showAll ? BROKERAGES : BROKERAGES.slice(0, 3)).map(b => (
              <Card key={b.name} className="border-border">
                <CardContent className="p-5">
                  <div className="flex items-start justify-between gap-3 mb-2 flex-wrap">
                    <p className="font-semibold text-base">{b.name}</p>
                    <Badge variant="outline">{b.fees}</Badge>
                  </div>
                  <p className="text-sm text-muted-foreground mb-3"><strong>Best for:</strong> {b.whoFor}</p>

                  <div className="grid sm:grid-cols-2 gap-2 mb-3">
                    <div>
                      <p className="text-xs font-semibold text-green-700 dark:text-green-300 mb-1">Pros</p>
                      <ul className="space-y-0.5">
                        {b.pros.map((p, i) => <li key={i} className="text-xs flex gap-1"><span className="text-green-600">+</span><span>{p}</span></li>)}
                      </ul>
                    </div>
                    <div>
                      <p className="text-xs font-semibold text-red-700 dark:text-red-300 mb-1">Cons</p>
                      <ul className="space-y-0.5">
                        {b.cons.map((c, i) => <li key={i} className="text-xs flex gap-1"><span className="text-red-600">−</span><span>{c}</span></li>)}
                      </ul>
                    </div>
                  </div>

                  <a href={b.link} target="_blank" rel="noreferrer"
                    className="inline-flex items-center gap-1 text-xs text-primary hover:underline">
                    View on official site <ExternalLink className="h-3 w-3" />
                  </a>
                </CardContent>
              </Card>
            ))}
            {!showAll && (
              <Button variant="outline" onClick={() => setShowAll(true)}>Show all 5 picks</Button>
            )}
          </div>

          <Card className="border-border bg-muted/30 mb-6">
            <CardContent className="p-5">
              <p className="text-sm font-semibold mb-2">Do not time the market</p>
              <p className="text-xs text-muted-foreground mb-2">
                The single biggest mistake retirees make: pulling money out when the market drops, then waiting on the sidelines for it to feel safe again. By the time it feels safe, the rebound has already happened.
              </p>
              <p className="text-xs text-muted-foreground mb-2">
                A study by Fidelity found that the best-performing customer accounts belonged to people who had forgotten the account existed — they did nothing for years. The worst-performing accounts belonged to people who reacted to every headline.
              </p>
              <p className="text-xs text-muted-foreground">
                A common rule of thumb for retirees: keep one to two years of living expenses in cash or short-term bonds, and leave the rest invested. That cash buffer means you do not have to sell stocks during a downturn. Talk to a fee-only fiduciary (one who charges by the hour, not by your balance) if you want a personalized plan.
              </p>
            </CardContent>
          </Card>

          <Card className="border-amber-300 bg-amber-50 dark:bg-amber-950/20 mb-6">
            <CardContent className="p-5 flex gap-3">
              <AlertTriangle className="h-5 w-5 text-amber-600 shrink-0 mt-0.5" />
              <div className="text-sm">
                <p className="font-semibold mb-1">If they found you on social media — they are not your friend</p>
                <p className="text-xs mb-2">
                  TikTok and YouTube are flooded with confident-looking people calling themselves "wealth coaches", "trading mentors", or "private group" leaders. Many run paid Discord servers, Telegram channels, or "exclusive" investor groups. Almost all of them are unregistered and illegal under US law.
                </p>
                <p className="text-xs mb-2">
                  By federal law, anyone giving paid investment advice to the public must be registered with the SEC or a state regulator, and must register as a broker-dealer or investment advisor representative. Influencers who skip this step are committing a crime — and you have no recourse when their picks lose your money.
                </p>
                <p className="text-xs font-semibold mb-1">Before sending anyone money or following their picks:</p>
                <ol className="space-y-1.5 mt-2">
                  <li className="flex gap-2"><span className="text-amber-700 dark:text-amber-300 font-semibold">1.</span><span>Run their full legal name through <a href="https://brokercheck.finra.org" target="_blank" rel="noreferrer" className="underline">finra.org/brokercheck</a> — free, takes 30 seconds. If they are not in there, walk away.</span></li>
                  <li className="flex gap-2"><span className="text-amber-700 dark:text-amber-300 font-semibold">2.</span><span>Check the SEC's investment advisor database at <a href="https://adviserinfo.sec.gov" target="_blank" rel="noreferrer" className="underline">adviserinfo.sec.gov</a>.</span></li>
                  <li className="flex gap-2"><span className="text-amber-700 dark:text-amber-300 font-semibold">3.</span><span>Anyone promising "guaranteed returns", crypto pumps, or "secret" trades is running a scam. Real advisors cannot promise returns — that is securities fraud.</span></li>
                  <li className="flex gap-2"><span className="text-amber-700 dark:text-amber-300 font-semibold">4.</span><span>"Pig butchering" scams (where someone befriends you online, then walks you into a fake trading platform) cost Americans over 4 billion dollars in 2024. Never invest through a platform someone you met online told you about.</span></li>
                </ol>
              </div>
            </CardContent>
          </Card>

          <Card className="border-border bg-muted/30">
            <CardContent className="p-5">
              <p className="text-sm font-semibold mb-2">Worth knowing about transferring accounts</p>
              <p className="text-xs text-muted-foreground">
                If you already have an account at Edward Jones or another high-fee broker, you can move it to Fidelity, Vanguard, or Schwab without selling anything (an "ACATS transfer"). This avoids tax. The new broker handles the paperwork — you sign one form, it takes about 5-10 business days. The old firm may charge a 75 dollar exit fee, which the new firm often reimburses. Call the broker you want to move TO and ask them to start the transfer.
              </p>
            </CardContent>
          </Card>

          <div className="mt-10 pt-8 border-t border-border">
            <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-3">Related</p>
            <div className="grid sm:grid-cols-3 gap-3">
              <Link to="/tools/social-security-setup" className="p-3 rounded-lg border border-border hover:border-primary/50 hover:bg-primary/5 transition-all">
                <p className="font-medium text-sm">Social Security Setup</p>
                <p className="text-xs text-muted-foreground mt-0.5">Create your my Social Security account.</p>
              </Link>
              <Link to="/tools/online-banking-safety" className="p-3 rounded-lg border border-border hover:border-primary/50 hover:bg-primary/5 transition-all">
                <p className="font-medium text-sm">Online Banking Safety</p>
                <p className="text-xs text-muted-foreground mt-0.5">Lock down your bank login.</p>
              </Link>
              <Link to="/tools/scam-message-decoder" className="p-3 rounded-lg border border-border hover:border-primary/50 hover:bg-primary/5 transition-all">
                <p className="font-medium text-sm">Scam Message Decoder</p>
                <p className="text-xs text-muted-foreground mt-0.5">Spot fake "advisor" texts and DMs.</p>
              </Link>
            </div>
          </div>
          <p className="text-xs text-muted-foreground mt-4 flex items-center gap-1">
            <ChevronRight className="h-3 w-3" /> Quick Tip: open the account at the broker, then call them on the phone with your first deposit question. The quality of that first call tells you everything about how they will treat you for the next 20 years.
          </p>
        </div>
      </main>

      <Footer />
    </>
  );
}

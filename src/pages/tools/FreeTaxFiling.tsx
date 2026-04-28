import { useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { PageBreadcrumb } from '@/components/PageBreadcrumb';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Receipt, ChevronRight, ExternalLink, AlertTriangle } from 'lucide-react';

interface Option {
  id: string;
  name: string;
  cost: string;
  whoFor: string;
  pros: string[];
  cons: string[];
  link: string;
}

const OPTIONS: Option[] = [
  {
    id: 'aarp',
    name: 'AARP Tax-Aide',
    cost: 'Free',
    whoFor: 'Anyone, but tailored to filers 50+. No income limit. Volunteers do it for you in person at libraries and senior centers.',
    pros: [
      'Real human walks through it with you.',
      'IRS-certified volunteers (most are retired CPAs and lawyers).',
      'Handles Schedule C self-employment and capital gains.',
      'Held at libraries, senior centers, and community sites February through April.',
    ],
    cons: [
      'Need to make an appointment — slots fill in March.',
      'Cannot file complex returns (rental property, foreign income).',
    ],
    link: 'https://www.aarp.org/money/taxes/aarp_taxaide/',
  },
  {
    id: 'vita',
    name: 'VITA (Volunteer Income Tax Assistance)',
    cost: 'Free',
    whoFor: 'Income under about $64,000, or disabled, or limited English. IRS-run program with volunteer preparers.',
    pros: [
      'Free in-person prep with IRS-certified volunteers.',
      'Available year-round at some locations.',
      'Handles most simple returns very well.',
    ],
    cons: [
      'Income cap means higher earners do not qualify.',
      'Some sites have limited hours.',
    ],
    link: 'https://irs.treasury.gov/freetaxprep/',
  },
  {
    id: 'irs-free-file',
    name: 'IRS Free File',
    cost: 'Free',
    whoFor: 'Income under $84,000 (2025 limit). Do it yourself online with one of the IRS partner companies.',
    pros: [
      'Do it from home. No appointment.',
      'Filing is genuinely free for federal — no upsell traps.',
      'TurboTax left the program; the partners now are TaxSlayer, FreeTaxUSA, OLT, ezTaxReturn.',
    ],
    cons: [
      'Each partner has its own income limits and state-return policies.',
      'You have to find the right partner for your situation.',
    ],
    link: 'https://www.irs.gov/filing/irs-free-file-do-your-taxes-for-free',
  },
  {
    id: 'irs-direct',
    name: 'IRS Direct File',
    cost: 'Free',
    whoFor: 'Available in 25 states for tax year 2024. W-2 income only — no Schedule C or capital gains. Government-run, no third party.',
    pros: [
      'Filed straight to the IRS, no middleman.',
      'No upsell, no advertising for paid products.',
      'Walks you through in plain English.',
    ],
    cons: [
      'Limited to simpler returns (W-2 income, standard deduction).',
      'Not all 50 states yet — check your state at the link.',
      'Does not file your state return — you still need to do that separately.',
    ],
    link: 'https://www.irs.gov/about-irs/strategic-plan/irs-direct-file-pilot',
  },
  {
    id: 'freetaxusa',
    name: 'FreeTaxUSA',
    cost: '$0 federal, $15 state',
    whoFor: 'Anyone who wants to do taxes online without income limits. The actual cheapest "real" tax software.',
    pros: [
      'Federal e-file is genuinely free for everyone, regardless of income.',
      '$15 state return is the lowest in the industry.',
      'Handles complex returns (Schedule C, K-1s, capital gains) at no extra cost.',
      'Audit support is $8 add-on.',
    ],
    cons: [
      'State return is not free.',
      'Interface is plainer than TurboTax.',
    ],
    link: 'https://www.freetaxusa.com',
  },
  {
    id: 'cash-app',
    name: 'Cash App Taxes',
    cost: 'Free federal AND state',
    whoFor: 'Anyone who can file a relatively simple return. Was Credit Karma Tax until 2020.',
    pros: [
      'Both federal AND state genuinely free, even for higher earners.',
      'Handles most income types including Schedule C.',
    ],
    cons: [
      'Have to download the Cash App.',
      'Cannot file in multiple states or for nonresident state returns.',
      'Less hand-holding than TurboTax or H&R Block.',
    ],
    link: 'https://cash.app/taxes',
  },
];

interface Recommendation {
  primary: Option;
  alternative?: Option;
  reasoning: string;
}

function recommend(income: number, age: number, complexity: string): Recommendation {
  if (age >= 50 && complexity !== 'complex') {
    return {
      primary: OPTIONS.find(o => o.id === 'aarp')!,
      alternative: OPTIONS.find(o => o.id === 'irs-free-file')!,
      reasoning: 'AARP Tax-Aide is built for filers 50+ — free, in-person, with volunteers who handle most returns. If you prefer doing it from home, IRS Free File is the backup.',
    };
  }
  if (income < 64000 && complexity !== 'complex') {
    return {
      primary: OPTIONS.find(o => o.id === 'vita')!,
      alternative: OPTIONS.find(o => o.id === 'irs-free-file')!,
      reasoning: 'VITA is the strongest free in-person option below the income cap. IRS Free File is the do-it-yourself online alternative if you prefer.',
    };
  }
  if (complexity === 'simple') {
    return {
      primary: OPTIONS.find(o => o.id === 'irs-direct')!,
      alternative: OPTIONS.find(o => o.id === 'cash-app')!,
      reasoning: 'A simple W-2 return can be filed directly with the IRS through Direct File (in supported states). Cash App Taxes handles state for free if you are in a non-Direct-File state.',
    };
  }
  return {
    primary: OPTIONS.find(o => o.id === 'freetaxusa')!,
    alternative: OPTIONS.find(o => o.id === 'cash-app')!,
    reasoning: 'For a complex return without paying TurboTax, FreeTaxUSA is the best value ($0 federal + $15 state). Cash App Taxes is your free-state alternative if your situation fits.',
  };
}

export default function FreeTaxFiling() {
  const [income, setIncome] = useState('');
  const [age, setAge] = useState('');
  const [complexity, setComplexity] = useState('');

  const result = useMemo(() => {
    const inc = parseFloat(income);
    const ag = parseInt(age, 10);
    if (!complexity || isNaN(inc) || isNaN(ag)) return null;
    return recommend(inc, ag, complexity);
  }, [income, age, complexity]);

  return (
    <>
      <SEOHead
        title="Free Tax Filing Helper"
        description="File your taxes free. AARP Tax-Aide, VITA, IRS Direct File, IRS Free File, FreeTaxUSA, Cash App Taxes — pick the one that fits your situation."
        path="/tools/free-tax-filing"
      />
      <Navbar />

      <main className="min-h-screen bg-background">
        <section className="bg-gradient-to-br from-emerald-50 via-background to-teal-50 dark:from-emerald-950/20 dark:to-teal-950/20 border-b border-border py-10 px-4">
          <div className="container max-w-3xl mx-auto text-center">
            <div className="flex justify-center mb-3">
              <div className="p-3 bg-emerald-500/10 rounded-full">
                <Receipt className="h-8 w-8 text-emerald-600" />
              </div>
            </div>
            <h1 className="text-3xl md:text-4xl font-bold mb-2">Free Tax Filing Helper</h1>
            <p className="text-muted-foreground text-lg max-w-xl mx-auto">
              You should never pay TurboTax. Here is the free option that fits your situation.
            </p>
          </div>
        </section>

        <div className="container max-w-3xl mx-auto px-4 py-8">
          <PageBreadcrumb segments={[{ label: 'Tools', href: '/tools' }, { label: 'Free Tax Filing Helper' }]} />

          <Card className="border-border shadow-sm mb-6">
            <CardContent className="p-6 space-y-5">
              <div>
                <Label htmlFor="age">Your age</Label>
                <Input id="age" type="number" placeholder="e.g. 67" value={age} onChange={(e) => setAge(e.target.value)} className="mt-1 max-w-[150px]" />
              </div>
              <div>
                <Label htmlFor="income">Your household income</Label>
                <Input id="income" type="number" placeholder="e.g. 55000" value={income} onChange={(e) => setIncome(e.target.value)} className="mt-1 max-w-[200px]" />
              </div>
              <div>
                <Label className="text-sm font-semibold mb-2 block">How complex is your return?</Label>
                <div className="space-y-2">
                  <label className="flex items-start gap-3 p-3 rounded-lg border border-border cursor-pointer hover:bg-muted/40">
                    <input type="radio" name="complexity" value="simple" checked={complexity === 'simple'} onChange={(e) => setComplexity(e.target.value)} className="mt-1" />
                    <div>
                      <p className="font-medium text-sm">Simple — W-2 income, standard deduction</p>
                      <p className="text-xs text-muted-foreground">One job, no investments, no rental property.</p>
                    </div>
                  </label>
                  <label className="flex items-start gap-3 p-3 rounded-lg border border-border cursor-pointer hover:bg-muted/40">
                    <input type="radio" name="complexity" value="medium" checked={complexity === 'medium'} onChange={(e) => setComplexity(e.target.value)} className="mt-1" />
                    <div>
                      <p className="font-medium text-sm">Medium — itemized, retirement accounts, dividends</p>
                      <p className="text-xs text-muted-foreground">A few 1099s and itemized deductions.</p>
                    </div>
                  </label>
                  <label className="flex items-start gap-3 p-3 rounded-lg border border-border cursor-pointer hover:bg-muted/40">
                    <input type="radio" name="complexity" value="complex" checked={complexity === 'complex'} onChange={(e) => setComplexity(e.target.value)} className="mt-1" />
                    <div>
                      <p className="font-medium text-sm">Complex — self-employment, rental property, K-1s</p>
                      <p className="text-xs text-muted-foreground">Schedule C, multiple states, capital gains.</p>
                    </div>
                  </label>
                </div>
              </div>
            </CardContent>
          </Card>

          {result && (
            <>
              <Card className="border-2 border-primary bg-primary/5 mb-6">
                <CardContent className="p-6">
                  <Badge className="mb-2">Best fit</Badge>
                  <p className="text-2xl font-bold mb-1">{result.primary.name}</p>
                  <Badge variant="outline" className="mb-2">{result.primary.cost}</Badge>
                  <p className="text-sm text-muted-foreground mb-3">{result.reasoning}</p>
                  <a href={result.primary.link} target="_blank" rel="noreferrer"
                    className="inline-flex items-center gap-1 text-sm text-primary hover:underline font-medium">
                    Visit {result.primary.name} <ExternalLink className="h-4 w-4" />
                  </a>
                </CardContent>
              </Card>

              {result.alternative && (
                <Card className="border-border mb-6">
                  <CardContent className="p-5">
                    <Badge variant="outline" className="mb-1">Backup option</Badge>
                    <p className="font-semibold text-base">{result.alternative.name}</p>
                    <Badge variant="outline" className="my-1">{result.alternative.cost}</Badge>
                    <p className="text-sm text-muted-foreground mt-2">{result.alternative.whoFor}</p>
                    <a href={result.alternative.link} target="_blank" rel="noreferrer"
                      className="inline-flex items-center gap-1 mt-2 text-xs text-primary hover:underline">
                      Learn more <ExternalLink className="h-3 w-3" />
                    </a>
                  </CardContent>
                </Card>
              )}
            </>
          )}

          <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-3 mt-6">All free options compared</p>
          <div className="space-y-3 mb-6">
            {OPTIONS.map(o => (
              <Card key={o.id} className="border-border">
                <CardContent className="p-5">
                  <div className="flex items-start justify-between gap-3 mb-2 flex-wrap">
                    <p className="font-semibold">{o.name}</p>
                    <Badge variant="outline">{o.cost}</Badge>
                  </div>
                  <p className="text-xs text-muted-foreground mb-2"><strong>For:</strong> {o.whoFor}</p>
                  <div className="grid sm:grid-cols-2 gap-2 mb-2">
                    <div>
                      <p className="text-xs font-semibold text-green-700 dark:text-green-300 mb-1">Pros</p>
                      <ul className="space-y-1">
                        {o.pros.map((p, i) => (
                          <li key={i} className="text-xs flex gap-2"><span className="text-green-600 shrink-0">+</span><span>{p}</span></li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <p className="text-xs font-semibold text-red-700 dark:text-red-300 mb-1">Cons</p>
                      <ul className="space-y-1">
                        {o.cons.map((c, i) => (
                          <li key={i} className="text-xs flex gap-2"><span className="text-red-600 shrink-0">−</span><span>{c}</span></li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  <a href={o.link} target="_blank" rel="noreferrer"
                    className="inline-flex items-center gap-1 text-xs text-primary hover:underline">
                    Visit {o.name} <ExternalLink className="h-3 w-3" />
                  </a>
                </CardContent>
              </Card>
            ))}
          </div>

          <Card className="border-amber-300 bg-amber-50 dark:bg-amber-950/20">
            <CardContent className="p-5 flex gap-3">
              <AlertTriangle className="h-5 w-5 text-amber-600 shrink-0 mt-0.5" />
              <div className="text-sm">
                <p className="font-semibold mb-1">Watch for tax-prep upsells</p>
                <p className="text-muted-foreground">
                  TurboTax and H&R Block "free editions" exist mostly to upsell you. They route most filers into paid tiers within minutes. The options on this page are the genuinely-free ones the IRS endorses or partners with.
                </p>
              </div>
            </CardContent>
          </Card>

          <div className="mt-10 pt-8 border-t border-border">
            <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-3">Related</p>
            <div className="grid sm:grid-cols-3 gap-3">
              <Link to="/tools/scam-message-decoder" className="p-3 rounded-lg border border-border hover:border-primary/50 hover:bg-primary/5 transition-all">
                <p className="font-medium text-sm">Scam Message Decoder</p>
                <p className="text-xs text-muted-foreground mt-0.5">For "IRS owes you a refund" texts.</p>
              </Link>
              <Link to="/tools/id-theft-recovery" className="p-3 rounded-lg border border-border hover:border-primary/50 hover:bg-primary/5 transition-all">
                <p className="font-medium text-sm">ID Theft Recovery</p>
                <p className="text-xs text-muted-foreground mt-0.5">If a fraudulent return was filed in your name.</p>
              </Link>
              <Link to="/tools/government-benefits-portal" className="p-3 rounded-lg border border-border hover:border-primary/50 hover:bg-primary/5 transition-all">
                <p className="font-medium text-sm">Government Benefits Portal</p>
                <p className="text-xs text-muted-foreground mt-0.5">Other federal benefits and credits.</p>
              </Link>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}

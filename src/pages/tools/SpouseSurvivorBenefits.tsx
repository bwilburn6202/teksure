import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { PageBreadcrumb } from '@/components/PageBreadcrumb';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { HeartHandshake, ChevronRight, ExternalLink, AlertTriangle } from 'lucide-react';

type Tab = 'spousal' | 'survivor';

interface Step {
  id: string;
  title: string;
  detail: string;
}

const SPOUSAL_STEPS: Step[] = [
  {
    id: 's1',
    title: 'Confirm you qualify',
    detail: 'You must be at least 62 years old, married to your current spouse for at least one year, and your spouse must already be receiving their own Social Security retirement or disability benefit. (For ex-spouses: 10 or more years of marriage, divorced two years, and not remarried.)',
  },
  {
    id: 's2',
    title: 'Sign in at ssa.gov',
    detail: 'Go to ssa.gov and click "Sign In" — use your my Social Security account. If you do not have one, set it up first using our My Social Security Setup guide.',
  },
  {
    id: 's3',
    title: 'Click "Apply for Benefits"',
    detail: 'On the home dashboard, choose "Apply for Benefits". Pick "Retirement / Spouse" when the form asks what you are applying for.',
  },
  {
    id: 's4',
    title: 'Provide spouse details',
    detail: 'You will need your spouse\'s full legal name, Social Security number, and date of birth. Have your marriage certificate scanned in case the SSA requests it.',
  },
  {
    id: 's5',
    title: 'Choose your start date',
    detail: 'Pick the month you want benefits to begin. Earlier than full retirement age means a permanent reduction. Submit and write down the confirmation number.',
  },
  {
    id: 's6',
    title: 'Watch the mail for a decision letter',
    detail: 'A paper letter arrives in 30 to 60 days with your award amount. Direct deposit is set up using the same account on file. Call 1-800-772-1213 if you hear nothing in 60 days.',
  },
];

const SURVIVOR_STEPS: Step[] = [
  {
    id: 'v1',
    title: 'Report the death first',
    detail: 'A funeral home usually files the death report with Social Security. If not, call 1-800-772-1213 right away. You cannot apply for survivor benefits online — this part has to be done by phone or in person.',
  },
  {
    id: 'v2',
    title: 'Call to schedule an appointment',
    detail: 'Call 1-800-772-1213 (TTY 1-800-325-0778), Monday to Friday, 8 a.m. to 7 p.m. local time. Ask for a survivor benefits appointment. You can do it by phone or at your local office.',
  },
  {
    id: 'v3',
    title: 'Gather the paperwork',
    detail: 'Bring or have ready: certified death certificate, your birth certificate, marriage certificate, your Social Security number and your late spouse\'s, your most recent W-2 or self-employment tax return, and bank info for direct deposit.',
  },
  {
    id: 'v4',
    title: 'Ask about the lump-sum death payment',
    detail: 'A one-time payment of $255 goes to a surviving spouse who lived with the deceased, or to a child who qualifies. You must apply for this within two years of the death. Mention it during your appointment.',
  },
  {
    id: 'v5',
    title: 'Decide on your start age',
    detail: 'Survivor benefits can start as early as age 60 (50 if disabled). Starting before your own full retirement age means a smaller monthly amount — but waiting too long when funds are tight may not be worth it. Ask the agent to walk you through the math at 60, 62, and your full retirement age.',
  },
  {
    id: 'v6',
    title: 'Confirm direct deposit',
    detail: 'Set up direct deposit during the appointment. Watch the first month\'s payment land in the account before assuming everything is set. Keep the confirmation paperwork.',
  },
];

export default function SpouseSurvivorBenefits() {
  const [tab, setTab] = useState<Tab>('spousal');

  const steps = tab === 'spousal' ? SPOUSAL_STEPS : SURVIVOR_STEPS;

  return (
    <>
      <SEOHead
        title="Spousal & Survivor Benefits"
        description="A plain-language walkthrough of Social Security spousal and survivor benefits — who qualifies, how much you get, and how to apply at ssa.gov, by phone, or in person."
        path="/tools/spouse-survivor-benefits"
      />
      <Navbar />

      <main className="min-h-screen bg-background">
        <section className="bg-gradient-to-br from-rose-50 via-background to-pink-50 dark:from-rose-950/20 dark:to-pink-950/20 border-b border-border py-10 px-4">
          <div className="container max-w-3xl mx-auto text-center">
            <div className="flex justify-center mb-3">
              <div className="p-3 bg-rose-500/10 rounded-full">
                <HeartHandshake className="h-8 w-8 text-rose-600" />
              </div>
            </div>
            <h1 className="text-3xl md:text-4xl font-bold mb-2">Spousal & Survivor Benefits</h1>
            <p className="text-muted-foreground text-lg max-w-xl mx-auto">
              Two different Social Security programs for married couples — one while you are both alive, one after a spouse dies. Here is who qualifies and how to apply.
            </p>
          </div>
        </section>

        <div className="container max-w-3xl mx-auto px-4 py-8">
          <PageBreadcrumb segments={[{ label: 'Tools', href: '/tools' }, { label: 'Spousal & Survivor Benefits' }]} />

          <Card className="border-border mb-6">
            <CardContent className="p-5">
              <p className="text-sm font-semibold mb-2">Which one are you here for?</p>
              <div className="flex flex-wrap gap-2">
                <Button
                  variant={tab === 'spousal' ? 'default' : 'outline'}
                  size="sm"
                  onClick={() => setTab('spousal')}
                >
                  Spousal benefits (both alive)
                </Button>
                <Button
                  variant={tab === 'survivor' ? 'default' : 'outline'}
                  size="sm"
                  onClick={() => setTab('survivor')}
                >
                  Survivor benefits (after a death)
                </Button>
              </div>
            </CardContent>
          </Card>

          {tab === 'spousal' ? (
            <section id="spousal" className="mb-8 scroll-mt-24">
              <div className="flex items-start gap-3 mb-3">
                <div className="p-2 bg-rose-500/10 rounded-lg">
                  <HeartHandshake className="h-5 w-5 text-rose-600" />
                </div>
                <div>
                  <h2 className="text-xl font-bold">Spousal benefits — while you are both alive</h2>
                  <p className="text-xs text-muted-foreground italic mt-0.5">A way for the lower-earning spouse to draw on the higher earner's record.</p>
                </div>
              </div>

              <Card className="border-border mb-4">
                <CardContent className="p-5 space-y-3 text-sm">
                  <p>
                    <span className="font-semibold">What it is.</span> If your own Social Security retirement benefit would be small (or zero) because you spent fewer years in paid work, you can claim a benefit based on your spouse's earnings record instead. The maximum is half of your spouse's full retirement age benefit.
                  </p>
                  <div>
                    <p className="font-semibold mb-1">Who qualifies</p>
                    <ul className="list-disc pl-5 space-y-1 text-muted-foreground">
                      <li>Age 62 or older (or any age if caring for the spouse's child under 16)</li>
                      <li>Married for at least one year (or 10+ years and divorced, see below)</li>
                      <li>Your spouse already filed for their own retirement or disability benefit</li>
                      <li>For ex-spouses: marriage lasted 10+ years, divorced 2+ years, you have not remarried</li>
                    </ul>
                  </div>
                  <div>
                    <p className="font-semibold mb-1">How much you get</p>
                    <p className="text-muted-foreground">
                      Up to 50% of your spouse's full retirement age benefit. If your own earned benefit is higher, the SSA pays the higher amount — you do not get both stacked. Claiming before your full retirement age (66 to 67 for most people) permanently shrinks your check.
                    </p>
                  </div>
                  <div>
                    <p className="font-semibold mb-1">When it makes sense</p>
                    <p className="text-muted-foreground">
                      If half of your spouse's benefit is more than your own benefit at full retirement age — claim spousal. If your own would be higher, claim on your own record. The SSA estimator inside your my Social Security account does this math for you.
                    </p>
                  </div>
                  <div className="flex flex-wrap gap-2 pt-2">
                    <Badge variant="secondary">Apply online</Badge>
                    <Badge variant="secondary">Both alive</Badge>
                    <Badge variant="secondary">Up to 50%</Badge>
                  </div>
                </CardContent>
              </Card>

              <h3 className="text-base font-semibold mb-2">How to apply — step by step</h3>
              <Card className="border-border">
                <CardContent className="p-5 space-y-2">
                  {steps.map((step, idx) => (
                    <div key={step.id} className="flex items-start gap-3 p-3 rounded-lg border border-border">
                      <div className="flex-shrink-0 w-7 h-7 rounded-full bg-rose-500/10 text-rose-700 dark:text-rose-300 flex items-center justify-center text-xs font-semibold">
                        {idx + 1}
                      </div>
                      <div className="flex-1">
                        <p className="font-medium text-sm">{step.title}</p>
                        <p className="text-xs text-muted-foreground mt-1">{step.detail}</p>
                      </div>
                    </div>
                  ))}
                </CardContent>
              </Card>
            </section>
          ) : (
            <section id="survivor" className="mb-8 scroll-mt-24">
              <div className="flex items-start gap-3 mb-3">
                <div className="p-2 bg-rose-500/10 rounded-lg">
                  <HeartHandshake className="h-5 w-5 text-rose-600" />
                </div>
                <div>
                  <h2 className="text-xl font-bold">Survivor benefits — after a spouse dies</h2>
                  <p className="text-xs text-muted-foreground italic mt-0.5">Replaces income when the working or retired spouse passes away.</p>
                </div>
              </div>

              <Card className="border-border mb-4">
                <CardContent className="p-5 space-y-3 text-sm">
                  <p>
                    <span className="font-semibold">What it is.</span> When a worker dies, certain family members can collect benefits based on that worker's earnings. For widows and widowers, the benefit can be up to 100% of what the deceased was getting (or would have been entitled to) at full retirement age.
                  </p>
                  <div>
                    <p className="font-semibold mb-1">Who qualifies</p>
                    <ul className="list-disc pl-5 space-y-1 text-muted-foreground">
                      <li>Married 9+ months at the time of death (waived in cases of accidental death)</li>
                      <li>Age 60 or older for a full survivor benefit (50+ if disabled)</li>
                      <li>Any age if caring for the deceased's child under 16</li>
                      <li>Surviving ex-spouse if marriage lasted 10+ years and you have not remarried before age 60</li>
                      <li>Unmarried children under 18 (or up to 19 if still in high school)</li>
                    </ul>
                  </div>
                  <div>
                    <p className="font-semibold mb-1">How much you get</p>
                    <p className="text-muted-foreground">
                      A widow or widower at full retirement age can receive 100% of the deceased's benefit. Claiming earlier (as early as 60) drops it to about 71.5%. If you are also entitled to your own retirement benefit, the SSA pays whichever is larger — you do not collect both.
                    </p>
                  </div>
                  <div>
                    <p className="font-semibold mb-1">The lump-sum death payment</p>
                    <p className="text-muted-foreground">
                      A one-time payment of 255 dollars goes to a qualifying surviving spouse or child. You have to ask for it within two years of the death.
                    </p>
                  </div>
                  <div>
                    <p className="font-semibold mb-1">Important</p>
                    <p className="text-muted-foreground">
                      You cannot apply for survivor benefits online. The SSA requires a phone or in-person interview. Plan an hour for the call.
                    </p>
                  </div>
                  <div className="flex flex-wrap gap-2 pt-2">
                    <Badge variant="secondary">Phone or in person</Badge>
                    <Badge variant="secondary">Up to 100%</Badge>
                    <Badge variant="secondary">$255 lump sum</Badge>
                  </div>
                </CardContent>
              </Card>

              <h3 className="text-base font-semibold mb-2">How to apply — step by step</h3>
              <Card className="border-border">
                <CardContent className="p-5 space-y-2">
                  {steps.map((step, idx) => (
                    <div key={step.id} className="flex items-start gap-3 p-3 rounded-lg border border-border">
                      <div className="flex-shrink-0 w-7 h-7 rounded-full bg-rose-500/10 text-rose-700 dark:text-rose-300 flex items-center justify-center text-xs font-semibold">
                        {idx + 1}
                      </div>
                      <div className="flex-1">
                        <p className="font-medium text-sm">{step.title}</p>
                        <p className="text-xs text-muted-foreground mt-1">{step.detail}</p>
                      </div>
                    </div>
                  ))}
                </CardContent>
              </Card>
            </section>
          )}

          <Card className="border-border mb-6">
            <CardContent className="p-5">
              <h3 className="text-base font-semibold mb-3">When to claim — the age trade-off</h3>
              <div className="space-y-3 text-sm">
                <div className="flex items-start gap-2">
                  <ChevronRight className="h-4 w-4 text-rose-600 shrink-0 mt-0.5" />
                  <p>
                    <span className="font-semibold">Age 62 (earliest for spousal):</span> Permanent reduction of about 25 to 30% versus claiming at full retirement age. Pick this only if the household needs the money now.
                  </p>
                </div>
                <div className="flex items-start gap-2">
                  <ChevronRight className="h-4 w-4 text-rose-600 shrink-0 mt-0.5" />
                  <p>
                    <span className="font-semibold">Age 60 (earliest for survivor):</span> About 71.5% of the full benefit. The lower amount sticks for life.
                  </p>
                </div>
                <div className="flex items-start gap-2">
                  <ChevronRight className="h-4 w-4 text-rose-600 shrink-0 mt-0.5" />
                  <p>
                    <span className="font-semibold">Full retirement age (66 to 67):</span> 100% of the spousal or survivor amount. The default best choice for most people in good health.
                  </p>
                </div>
                <div className="flex items-start gap-2">
                  <ChevronRight className="h-4 w-4 text-rose-600 shrink-0 mt-0.5" />
                  <p>
                    <span className="font-semibold">Age 70:</span> Waiting past full retirement age does NOT grow spousal or survivor benefits — only your own retirement benefit grows after FRA. So once you hit FRA, file for the spousal or survivor amount and stop waiting.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-amber-300 bg-amber-50 dark:bg-amber-950/20 mb-6">
            <CardContent className="p-5 flex gap-3">
              <AlertTriangle className="h-5 w-5 text-amber-600 shrink-0 mt-0.5" />
              <div className="text-sm">
                <p className="font-semibold mb-1">Watch for fake "Social Security" calls</p>
                <p className="text-muted-foreground">
                  The SSA does not call you about benefits, threaten to suspend your number, or ask for your bank info by phone. Real notices arrive on paper, by mail. If a caller claims to be from Social Security and pressures you, hang up and call 1-800-772-1213 yourself to check.
                </p>
              </div>
            </CardContent>
          </Card>

          <Card className="border-border mb-6">
            <CardContent className="p-5">
              <p className="text-sm font-semibold mb-3">Useful direct links</p>
              <ul className="space-y-2 text-sm">
                <li><a href="https://www.ssa.gov/benefits/retirement/planner/applying7.html" target="_blank" rel="noreferrer" className="text-primary hover:underline inline-flex items-center gap-1">Apply for spousal benefits <ExternalLink className="h-3 w-3" /></a> — official ssa.gov page</li>
                <li><a href="https://www.ssa.gov/benefits/survivors/" target="_blank" rel="noreferrer" className="text-primary hover:underline inline-flex items-center gap-1">Survivor benefits overview <ExternalLink className="h-3 w-3" /></a> — qualifications and amounts</li>
                <li><a href="https://www.ssa.gov/benefits/survivors/ifyou.html" target="_blank" rel="noreferrer" className="text-primary hover:underline inline-flex items-center gap-1">If a family member dies <ExternalLink className="h-3 w-3" /></a> — what to do, who to call</li>
                <li><a href="https://faq.ssa.gov" target="_blank" rel="noreferrer" className="text-primary hover:underline inline-flex items-center gap-1">faq.ssa.gov <ExternalLink className="h-3 w-3" /></a> — official FAQs</li>
              </ul>
            </CardContent>
          </Card>

          <div className="mt-10 pt-8 border-t border-border">
            <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-3">Related</p>
            <div className="grid sm:grid-cols-3 gap-3">
              <Link to="/tools/social-security-setup" className="p-3 rounded-lg border border-border hover:border-primary/50 hover:bg-primary/5 transition-all">
                <p className="font-medium text-sm">My Social Security Setup</p>
                <p className="text-xs text-muted-foreground mt-0.5">Create the account first.</p>
              </Link>
              <Link to="/tools/account-after-loss" className="p-3 rounded-lg border border-border hover:border-primary/50 hover:bg-primary/5 transition-all">
                <p className="font-medium text-sm">Accounts After a Loss</p>
                <p className="text-xs text-muted-foreground mt-0.5">Closing and transferring accounts.</p>
              </Link>
              <Link to="/tools/medicare-plan-chooser" className="p-3 rounded-lg border border-border hover:border-primary/50 hover:bg-primary/5 transition-all">
                <p className="font-medium text-sm">Medicare Plan Chooser</p>
                <p className="text-xs text-muted-foreground mt-0.5">Pair with the right Medicare plan.</p>
              </Link>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}

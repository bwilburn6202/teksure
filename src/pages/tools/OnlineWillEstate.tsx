import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { PageBreadcrumb } from '@/components/PageBreadcrumb';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Scroll, ChevronRight, ExternalLink, AlertTriangle } from 'lucide-react';

interface WillService {
  name: string;
  cost: string;
  whoFor: string;
  pros: string[];
  cons: string[];
  link: string;
}

const SERVICES: WillService[] = [
  {
    name: 'Trust & Will',
    cost: '$199 will / $499 trust',
    whoFor: 'Best overall for most families. Clean interface, attorney-reviewed templates, AARP partner.',
    pros: ['Step-by-step questions in plain English.', 'Attorney-approved in all 50 states.', 'Free updates for one year.', 'AARP members get a discount.'],
    cons: ['Higher price than the bare-bones options.', 'No live attorney chat on the basic plan.'],
    link: 'https://trustandwill.com',
  },
  {
    name: 'FreeWill',
    cost: 'Free',
    whoFor: 'Budget-conscious folks with a simple estate (one home, one or two heirs, no business).',
    pros: ['Truly free — funded by charity partners.', 'Most people finish in 20 minutes.', 'Covers will, healthcare directive, power of attorney.'],
    cons: ['Less hand-holding than paid tools.', 'No trust option — will only.', 'Asks if you want to leave a charity gift (you can skip).'],
    link: 'https://www.freewill.com',
  },
  {
    name: 'LegalZoom',
    cost: '$89 will / $279 trust + $14.99/mo',
    whoFor: 'People who want phone support and attorney access bundled in.',
    pros: ['Live attorney consultations on premium tier.', 'Big brand — around for 25 years.', 'Covers business documents too.'],
    cons: ['Subscription auto-renews — read the fine print.', 'Upsells throughout the process.', 'Slower interface than newer competitors.'],
    link: 'https://www.legalzoom.com/personal/estate-planning/',
  },
  {
    name: 'Rocket Lawyer',
    cost: '$39.99/mo membership',
    whoFor: 'Anyone who wants ongoing legal documents (lease, contracts) plus a will.',
    pros: ['Monthly membership covers many document types.', '30-minute attorney consultations included.', 'Free 7-day trial.'],
    cons: ['Monthly fee adds up if you only need a will.', 'Cancel before day 7 or you are charged.'],
    link: 'https://www.rocketlawyer.com/family-and-personal/estate-planning',
  },
  {
    name: 'Tomorrow.app',
    cost: 'Free / $39 premium',
    whoFor: 'Parents with young kids. The free tier covers guardianship and basic will needs.',
    pros: ['Mobile-first — finish on your phone.', 'Strong guardianship section for kids.', 'Free tier covers the essentials.'],
    cons: ['Smaller company — fewer reviews to compare.', 'No trust option.', 'Limited customer support hours.'],
    link: 'https://www.tomorrow.me',
  },
  {
    name: 'Quicken WillMaker',
    cost: '$109 download',
    whoFor: 'One-time buyers who do not want ongoing fees or cloud storage.',
    pros: ['Software you download — no subscription.', 'Made by Nolo, a trusted legal publisher since 1971.', 'Includes living will, power of attorney, healthcare directive.'],
    cons: ['Not valid in Louisiana.', 'Older desktop interface.', 'No cloud backup — if your computer dies, your draft is gone.'],
    link: 'https://www.willmaker.com',
  },
];

export default function OnlineWillEstate() {
  const [showAll, setShowAll] = useState(false);

  return (
    <>
      <SEOHead
        title="Online Will & Estate Tool Picker"
        description="Compare 6 online will services — Trust & Will, FreeWill, LegalZoom, Rocket Lawyer, Tomorrow.app, Quicken WillMaker."
        path="/tools/online-will-estate"
      />
      <Navbar />

      <main className="min-h-screen bg-background">
        <section className="bg-gradient-to-br from-amber-50 via-background to-stone-50 dark:from-amber-950/20 dark:to-stone-950/20 border-b border-border py-10 px-4">
          <div className="container max-w-3xl mx-auto text-center">
            <div className="flex justify-center mb-3">
              <div className="p-3 bg-amber-500/10 rounded-full">
                <Scroll className="h-8 w-8 text-amber-700 dark:text-amber-300" />
              </div>
            </div>
            <h1 className="text-3xl md:text-4xl font-bold mb-2">Online Will & Estate Tools</h1>
            <p className="text-muted-foreground text-lg max-w-xl mx-auto">Six honest comparisons of online will services — costs, who they fit, pros, cons.</p>
          </div>
        </section>

        <div className="container max-w-3xl mx-auto px-4 py-8">
          <PageBreadcrumb segments={[{ label: 'Tools', href: '/tools' }, { label: 'Online Will & Estate' }]} />

          <Card className="border-border bg-muted/30 mb-6">
            <CardContent className="p-5">
              <p className="text-sm font-semibold mb-2">Why an online will may be enough</p>
              <p className="text-xs text-muted-foreground">
                If your estate is straightforward — a home, a bank account, a retirement fund, and clear heirs — a reputable online service produces the same document a $1,500 attorney would, for under $200. The catch: the document still needs to be printed, signed in wet ink, and witnessed properly to count in court. The tool handles the writing; you handle the signing ritual.
              </p>
            </CardContent>
          </Card>

          <div className="space-y-4 mb-6">
            {(showAll ? SERVICES : SERVICES.slice(0, 3)).map(s => (
              <Card key={s.name} className="border-border">
                <CardContent className="p-5">
                  <div className="flex items-start justify-between gap-3 mb-2 flex-wrap">
                    <p className="font-semibold text-base">{s.name}</p>
                    <Badge variant="outline">{s.cost}</Badge>
                  </div>
                  <p className="text-sm text-muted-foreground mb-3"><strong>Best for:</strong> {s.whoFor}</p>
                  <div className="grid sm:grid-cols-2 gap-2 mb-3">
                    <div>
                      <p className="text-xs font-semibold text-green-700 dark:text-green-300 mb-1">Pros</p>
                      <ul className="space-y-0.5">{s.pros.map((p, i) => <li key={i} className="text-xs flex gap-1"><span className="text-green-600">+</span><span>{p}</span></li>)}</ul>
                    </div>
                    <div>
                      <p className="text-xs font-semibold text-red-700 dark:text-red-300 mb-1">Cons</p>
                      <ul className="space-y-0.5">{s.cons.map((c, i) => <li key={i} className="text-xs flex gap-1"><span className="text-red-600">−</span><span>{c}</span></li>)}</ul>
                    </div>
                  </div>
                  <a href={s.link} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1 text-xs text-primary hover:underline">
                    View on official site <ExternalLink className="h-3 w-3" />
                  </a>
                </CardContent>
              </Card>
            ))}
            {!showAll && (<Button variant="outline" onClick={() => setShowAll(true)}>Show all 6 services</Button>)}
          </div>

          <Card className="border-amber-300 bg-amber-50 dark:bg-amber-950/20 mb-6">
            <CardContent className="p-5 flex gap-3">
              <AlertTriangle className="h-5 w-5 text-amber-600 shrink-0 mt-0.5" />
              <div className="text-sm">
                <p className="font-semibold mb-1">Signing rules — most wills require wet ink</p>
                <p className="text-xs mt-1">
                  In nearly every state, your will is not valid until you print it, sign it in pen, and have two adult witnesses sign in front of you. Some states (Nevada, Indiana, Arizona, Colorado, Florida, Illinois, North Dakota, Utah, Washington) allow electronic wills with notary video sessions, but the rules vary. When unsure: print, pen, two witnesses, notary if your state asks. Store the original in a fireproof box and tell your executor where it is.
                </p>
              </div>
            </CardContent>
          </Card>

          <Card className="border-border bg-muted/30 mb-6">
            <CardContent className="p-5">
              <p className="text-sm font-semibold mb-2">When to skip these tools and hire an attorney</p>
              <ul className="text-xs text-muted-foreground space-y-1.5">
                <li>• Estate is over $1 million or you own property in multiple states.</li>
                <li>• You own a business or rental properties.</li>
                <li>• You have a child with special needs (a special needs trust is involved).</li>
                <li>• Blended family with stepchildren and complicated inheritance wishes.</li>
                <li>• You expect family conflict or a contested will.</li>
                <li>• You want a tax-saving trust structure.</li>
              </ul>
              <p className="text-xs text-muted-foreground mt-3">In any of those cases, a $1,500 attorney saves your family $50,000 in probate fees later. Worth every dollar.</p>
            </CardContent>
          </Card>

          <div className="mt-10 pt-8 border-t border-border">
            <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-3">Related</p>
            <div className="grid sm:grid-cols-3 gap-3">
              <Link to="/tools/tech-will-builder" className="p-3 rounded-lg border border-border hover:border-primary/50 hover:bg-primary/5 transition-all">
                <p className="font-medium text-sm">Tech Will Builder</p>
                <p className="text-xs text-muted-foreground mt-0.5">Plan what happens to your digital accounts.</p>
              </Link>
              <Link to="/tools/account-after-loss" className="p-3 rounded-lg border border-border hover:border-primary/50 hover:bg-primary/5 transition-all">
                <p className="font-medium text-sm">Account After Loss</p>
                <p className="text-xs text-muted-foreground mt-0.5">Close accounts of a loved one who passed.</p>
              </Link>
              <Link to="/tools/free-legal-help" className="p-3 rounded-lg border border-border hover:border-primary/50 hover:bg-primary/5 transition-all">
                <p className="font-medium text-sm">Free Legal Help</p>
                <p className="text-xs text-muted-foreground mt-0.5">Find no-cost legal aid in your state.</p>
              </Link>
            </div>
          </div>
          <p className="text-xs text-muted-foreground mt-4 flex items-center gap-1">
            <ChevronRight className="h-3 w-3" /> Quick Tip: tell your executor where the signed original lives. A perfect will hidden in a drawer no one knows about helps no one.
          </p>
        </div>
      </main>

      <Footer />
    </>
  );
}

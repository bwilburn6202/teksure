import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { PageBreadcrumb } from '@/components/PageBreadcrumb';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Scale, ChevronRight, ExternalLink, AlertTriangle, type LucideIcon } from 'lucide-react';

interface Service {
  name: string;
  icon: LucideIcon;
  cost: string;
  category: string;
  who: string;
  helpsWith: string;
  howToStart: string;
  link?: string;
  phone?: string;
  notes?: string[];
}

const SERVICES: Service[] = [
  {
    name: 'Legal Services Corporation (LSC)',
    icon: Scale,
    cost: 'Free',
    category: 'Housing',
    who: 'Anyone with a household income at or below 125% of the federal poverty line. LSC funds the largest network of free civil legal aid offices in the country.',
    helpsWith: 'Eviction defense, foreclosure, domestic abuse protective orders, public benefits appeals (SNAP, Medicaid, SSI), and consumer fraud.',
    howToStart: 'Visit lsc.gov and use the "Find Legal Aid" search box with your zip code. The site lists every LSC-funded office near you with its phone number and intake hours.',
    link: 'https://www.lsc.gov/about-lsc/what-legal-aid/get-legal-help',
    notes: [
      'Civil cases only. LSC offices do not handle criminal defense.',
      'Intake lines fill up early in the day — call when they open for the best chance.',
    ],
  },
  {
    name: 'LawHelp.org (Pro Bono Net)',
    icon: Scale,
    cost: 'Free',
    category: 'All',
    who: 'Anyone needing free or low-cost civil legal help. The site is run by Pro Bono Net, the parent of Lawyers Without Borders volunteer programs in the US.',
    helpsWith: 'Family law, housing, immigration, public benefits, debt, wills, and small claims. Plain-language self-help articles plus a directory of local legal aid programs.',
    howToStart: 'Open lawhelp.org, pick your state, then enter a zip code. The site routes you to the right intake office and lists free legal clinics and forms for your county.',
    link: 'https://www.lawhelp.org',
    notes: [
      'Best starting point if you are not sure which type of legal aid you need.',
      'Includes Spanish-language pages and a "for seniors" filter on most state pages.',
    ],
  },
  {
    name: 'AARP Legal Counsel for the Elderly',
    icon: Scale,
    cost: 'Free',
    category: 'Will & Estate',
    who: 'DC residents age 60 and older. (For other states, use the AARP volunteer attorney directory below.)',
    helpsWith: 'Wills, powers of attorney, advance directives, eviction defense, consumer fraud, and elder abuse cases.',
    howToStart: 'Call the AARP Legal Hotline for DC seniors at 202-434-2120 or visit aarp.org/lce. Outside DC, AARP runs a national volunteer-attorney finder by zip.',
    link: 'https://www.aarp.org/states/dc/aarp-foundation-legal-counsel-for-the-elderly.html',
    phone: '202-434-2120',
    notes: [
      'DC-only direct service, but the website has free templates for living wills and powers of attorney any senior can use.',
    ],
  },
  {
    name: 'Senior Legal Hotlines (state-by-state)',
    icon: Scale,
    cost: 'Free',
    category: 'All',
    who: 'Adults age 60 and older. Most states fund a free hotline with grants from the federal Older Americans Act.',
    helpsWith: 'Quick legal questions on Medicare, Medicaid, Social Security, scams, family disputes, landlord problems, and end-of-life paperwork.',
    howToStart: 'Visit eldercare.acl.gov or call the federal Eldercare Locator at 1-800-677-1116. Ask for the "senior legal hotline" in your state. They give you the number to call for a free 30-minute consult.',
    link: 'https://eldercare.acl.gov',
    phone: '1-800-677-1116',
    notes: [
      'Most hotlines call you back within 1-3 business days.',
      'Confidential — they will not share your information with your family or a nursing home.',
    ],
  },
  {
    name: 'Court Self-Help Centers',
    icon: Scale,
    cost: 'Free',
    category: 'Family',
    who: 'Anyone representing themselves in court (called "pro se"). Most US state and county courts run a self-help center inside or near the courthouse.',
    helpsWith: 'Filling out divorce papers, name changes, small claims, restraining orders, custody, and basic landlord-tenant filings.',
    howToStart: 'Search "[your county] court self-help center" online or call the courthouse and ask for the self-help desk. Most also offer phone or video consults.',
    notes: [
      'Staff are not attorneys and will not give legal advice, but they help you fill the forms correctly so the judge will accept them.',
      'Many centers run free "ask-a-lawyer" clinics one evening a week — no appointment needed.',
    ],
  },
  {
    name: 'ABA Free Legal Answers',
    icon: Scale,
    cost: 'Free',
    category: 'Consumer',
    who: 'Adults with household income at or below 250% of the federal poverty line. Run by the American Bar Association in 40+ states.',
    helpsWith: 'A volunteer attorney answers a written legal question online — typical topics: debt collection, garnishments, wage theft, identity theft, contract disputes, and small landlord problems.',
    howToStart: 'Open abafreelegalanswers.org, pick your state, sign up with an email, and post a written question. A volunteer attorney from your state replies within a few days.',
    link: 'https://abafreelegalanswers.org',
    notes: [
      'Civil only — no criminal cases, no immigration cases, no court representation.',
      'Great for the "is this legal?" or "what should I write back?" type of question.',
    ],
  },
  {
    name: 'National Disability Rights Network (NDRN)',
    icon: Scale,
    cost: 'Free',
    category: 'Disability',
    who: 'People with physical, mental, or developmental disabilities, and their families. Every state has a federally funded Protection & Advocacy (P&A) office.',
    helpsWith: 'Special education disputes, housing discrimination, denial of Social Security or Medicaid waiver services, abuse and neglect in care facilities, and accessibility violations.',
    howToStart: 'Open ndrn.org, click "Find Your P&A", pick your state, then call the local office. Initial intake is free and confidential.',
    link: 'https://www.ndrn.org/about/ndrn-member-agencies-2',
    notes: [
      'Each state P&A office is independent and can sue government agencies and care facilities on your behalf.',
      'They also handle voting access cases for people with disabilities.',
    ],
  },
  {
    name: 'Rocket Lawyer / LegalZoom (paid alternatives)',
    icon: Scale,
    cost: 'Pay (around 40 a month)',
    category: 'Will & Estate',
    who: 'Anyone who wants a quick will, lease, power of attorney, or simple LLC document and does not qualify for free legal aid.',
    helpsWith: 'Drafting wills, trusts, leases, healthcare directives, and basic business documents. Both offer 30-minute attorney consults inside a monthly membership.',
    howToStart: 'rocketlawyer.com or legalzoom.com. Pick a document, fill in the prompts, then add a paid attorney review if you want one.',
    link: 'https://www.rocketlawyer.com',
    notes: [
      'Cancel any time. Most people use one month, finish their documents, and stop.',
      'Not a substitute for a real attorney on a complex estate, divorce, or lawsuit.',
    ],
  },
];

const CATEGORIES = ['All', 'Family', 'Housing', 'Will & Estate', 'Consumer', 'Disability', 'Immigration'];

export default function FreeLegalHelp() {
  const [cat, setCat] = useState('All');

  const filtered = cat === 'All'
    ? SERVICES
    : SERVICES.filter(s => s.category === cat || s.category === 'All');

  return (
    <>
      <SEOHead
        title="Free Legal Help"
        description="Free and low-cost legal aid for seniors and low-income families. Legal Services Corporation, LawHelp.org, AARP Legal Counsel, senior legal hotlines, ABA Free Legal Answers, court self-help centers."
        path="/tools/free-legal-help"
      />
      <Navbar />

      <main className="min-h-screen bg-background">
        <section className="bg-gradient-to-br from-amber-50 via-background to-orange-50 dark:from-amber-950/20 dark:to-orange-950/20 border-b border-border py-10 px-4">
          <div className="container max-w-3xl mx-auto text-center">
            <div className="flex justify-center mb-3">
              <div className="p-3 bg-amber-500/10 rounded-full">
                <Scale className="h-8 w-8 text-amber-600" />
              </div>
            </div>
            <h1 className="text-3xl md:text-4xl font-bold mb-2">Free Legal Help</h1>
            <p className="text-muted-foreground text-lg max-w-xl mx-auto">
              Eight real places to get free or low-cost legal help — wills, eviction, Medicaid appeals, consumer fraud, and more. No upfront fees.
            </p>
          </div>
        </section>

        <div className="container max-w-3xl mx-auto px-4 py-8">
          <PageBreadcrumb segments={[{ label: 'Tools', href: '/tools' }, { label: 'Free Legal Help' }]} />

          <Card className="border-amber-300 bg-amber-50 dark:bg-amber-950/20 mb-6">
            <CardContent className="p-5 flex gap-3">
              <AlertTriangle className="h-5 w-5 text-amber-600 shrink-0 mt-0.5" />
              <div className="text-sm">
                <p className="font-semibold mb-1">Watch for legal advice scams</p>
                <p className="text-muted-foreground">
                  Real legal aid is free or sliding-scale. If a person calls you out of the blue, says you owe a court fine, demands a wire transfer or gift card, or asks for money before they will look at your case, it is a scam. Hang up and call the resources on this page directly.
                </p>
              </div>
            </CardContent>
          </Card>

          <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-2">Filter by topic</p>
          <div className="flex flex-wrap gap-2 mb-6">
            {CATEGORIES.map(c => (
              <button
                key={c}
                onClick={() => setCat(c)}
                className={`px-3 py-1.5 rounded-full text-xs font-medium border transition-colors ${
                  cat === c
                    ? 'bg-primary text-primary-foreground border-primary'
                    : 'bg-background border-border hover:border-primary/50 hover:bg-primary/5'
                }`}
              >
                {c}
              </button>
            ))}
          </div>

          <div className="space-y-4 mb-6">
            {filtered.map(s => {
              const Icon = s.icon;
              return (
                <Card key={s.name} className="border-border">
                  <CardContent className="p-5">
                    <div className="flex items-start gap-3 mb-3">
                      <div className="p-2 bg-primary/10 rounded-lg">
                        <Icon className="h-5 w-5 text-primary" />
                      </div>
                      <div className="flex-1">
                        <p className="font-semibold text-base">{s.name}</p>
                        <div className="flex flex-wrap gap-2 mt-1">
                          <Badge variant="outline">{s.cost}</Badge>
                          <Badge variant="outline">{s.category}</Badge>
                        </div>
                      </div>
                    </div>

                    <p className="text-sm text-muted-foreground mb-2"><strong>Who it fits:</strong> {s.who}</p>
                    <p className="text-sm text-muted-foreground mb-2"><strong>What they help with:</strong> {s.helpsWith}</p>
                    <p className="text-sm text-muted-foreground mb-3"><strong>How to start:</strong> {s.howToStart}</p>

                    {s.notes && (
                      <ul className="space-y-1 mt-3 pt-3 border-t border-border">
                        {s.notes.map((n, i) => (
                          <li key={i} className="text-xs text-muted-foreground flex gap-2">
                            <span className="text-primary">&bull;</span><span>{n}</span>
                          </li>
                        ))}
                      </ul>
                    )}

                    <div className="flex flex-wrap gap-3 mt-3">
                      {s.link && (
                        <a
                          href={s.link}
                          target="_blank"
                          rel="noreferrer"
                          className="inline-flex items-center gap-1 text-xs text-primary hover:underline"
                        >
                          Visit website <ExternalLink className="h-3 w-3" />
                        </a>
                      )}
                      {s.phone && (
                        <span className="text-xs text-muted-foreground">
                          <strong>Phone:</strong> {s.phone}
                        </span>
                      )}
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          <Card className="border-border bg-muted/30 mb-6">
            <CardContent className="p-5">
              <p className="text-sm font-semibold mb-2">Other places to look</p>
              <ul className="space-y-1.5 text-xs text-muted-foreground">
                <li className="flex gap-2"><span className="text-primary">&bull;</span><span><strong>Law school clinics:</strong> most US law schools run free clinics where supervised students draft wills, defend tenants, and fight benefits denials.</span></li>
                <li className="flex gap-2"><span className="text-primary">&bull;</span><span><strong>State bar lawyer-referral services:</strong> a 30-minute consult for around $35, then you decide if you want to hire the attorney.</span></li>
                <li className="flex gap-2"><span className="text-primary">&bull;</span><span><strong>Public library legal nights:</strong> many libraries host free "ask-a-lawyer" evenings once a month.</span></li>
              </ul>
              <Button asChild variant="outline" size="sm" className="mt-3">
                <a href="https://www.americanbar.org/groups/legal_services/flh-home" target="_blank" rel="noreferrer">
                  ABA legal-aid directory <ChevronRight className="h-3 w-3 ml-1" />
                </a>
              </Button>
            </CardContent>
          </Card>

          <div className="mt-10 pt-8 border-t border-border">
            <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-3">Related</p>
            <div className="grid sm:grid-cols-3 gap-3">
              <Link
                to="/tools/government-benefits-portal"
                className="p-3 rounded-lg border border-border hover:border-primary/50 hover:bg-primary/5 transition-all"
              >
                <p className="font-medium text-sm">Government Benefits Portal</p>
                <p className="text-xs text-muted-foreground mt-0.5">Find every benefit you qualify for.</p>
              </Link>
              <Link
                to="/tools/account-after-loss"
                className="p-3 rounded-lg border border-border hover:border-primary/50 hover:bg-primary/5 transition-all"
              >
                <p className="font-medium text-sm">Account After Loss</p>
                <p className="text-xs text-muted-foreground mt-0.5">Close accounts after a death.</p>
              </Link>
              <Link
                to="/tools/tech-will-builder"
                className="p-3 rounded-lg border border-border hover:border-primary/50 hover:bg-primary/5 transition-all"
              >
                <p className="font-medium text-sm">Tech Will Builder</p>
                <p className="text-xs text-muted-foreground mt-0.5">Plan digital accounts for heirs.</p>
              </Link>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}

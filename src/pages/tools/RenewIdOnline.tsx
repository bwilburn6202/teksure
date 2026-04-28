import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { PageBreadcrumb } from '@/components/PageBreadcrumb';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { CreditCard, ChevronRight, ExternalLink, AlertTriangle, type LucideIcon, Shield } from 'lucide-react';

type Doc = 'passport' | 'drivers' | 'state-id' | 'real-id' | 'ssn-card' | 'medicare';

interface Renewal {
  name: string;
  who: string;
  cost: string;
  online: boolean;
  steps: string[];
  warning?: string;
  link: string;
  icon: LucideIcon;
}

const RENEWALS: Record<Doc, Renewal> = {
  passport: {
    name: 'US Passport',
    who: 'Anyone whose passport expires within the next year (or already has).',
    cost: '$130 book, $30 card, $190 both',
    online: true,
    steps: [
      'Go to travel.state.gov.',
      'If your last passport was issued less than 15 years ago AND when you were 16+, you can renew online or by mail.',
      'Online renewal: travel.state.gov/passportonline → log in or sign up.',
      'Upload a digital photo (specific size — use the official photo tool).',
      'Pay by credit card.',
      'Submit your old passport when asked (mail it back during processing).',
    ],
    warning: 'Routine processing is 6-8 weeks. Pay $60 extra for expedited (2-3 weeks). For travel within 14 days, make an appointment at a passport agency.',
    link: 'https://travel.state.gov/content/travel/en/passports.html',
    icon: CreditCard,
  },
  drivers: {
    name: 'Driver\'s License Renewal',
    who: 'Most states let you renew online if your license is not expired more than 90 days.',
    cost: '$25–$80 depending on state',
    online: true,
    steps: [
      'Go to your state DMV website (search "[state] DMV").',
      'Find "Renew online" — usually under Drivers > Renewal.',
      'You will need: current license, last 4 of SSN, credit card.',
      'Some states require a vision test in person every 2-3 renewals — they tell you online if you cannot renew online.',
      'New license arrives by mail in 7-14 days.',
    ],
    warning: 'Avoid sites that charge "service fees" — your state DMV does not. Stick to .gov websites.',
    link: 'https://www.usa.gov/state-motor-vehicle-services',
    icon: CreditCard,
  },
  'state-id': {
    name: 'State ID Card (non-driver)',
    who: 'For people who do not drive but need ID for travel, banking, voting.',
    cost: '$10–$50',
    online: true,
    steps: [
      'Go to your state DMV — same online renewal as driver\'s licenses but without the driving test.',
      'Bring proof of identity (birth certificate, Social Security card) for first-time issuance.',
      'Renewals after that are usually online.',
    ],
    link: 'https://www.usa.gov/state-motor-vehicle-services',
    icon: CreditCard,
  },
  'real-id': {
    name: 'REAL ID',
    who: 'Anyone who flies domestically. Required at TSA from May 7, 2025.',
    cost: '$10–$50 added to driver\'s license fee',
    online: false,
    steps: [
      'Schedule an appointment at your state DMV — REAL ID requires in-person verification.',
      'Bring: birth certificate or passport, Social Security card or W-2, two proofs of address (utility bills work).',
      'They take a photo, you pay the fee, the new license arrives by mail.',
      'Look for a star in the upper-right of the new license — that is the REAL ID marker.',
    ],
    warning: 'You CANNOT do REAL ID online. Save yourself the trip — confirm your documents are correct before going.',
    link: 'https://www.dhs.gov/real-id',
    icon: Shield,
  },
  'ssn-card': {
    name: 'Replacement Social Security Card',
    who: 'Lost or damaged the original.',
    cost: 'Free',
    online: true,
    steps: [
      'Go to ssa.gov → "Replace Social Security Card".',
      'You may be able to do it online (in 45 states) if you have a my Social Security account.',
      'If not, the form will print and you mail it with proof of identity (driver\'s license is usually enough).',
      'New card arrives in 10-14 days.',
    ],
    warning: 'You only get 3 replacements per year and 10 in your lifetime. Memorise the number — you should not need the physical card often.',
    link: 'https://www.ssa.gov/number-card/replace-card',
    icon: Shield,
  },
  medicare: {
    name: 'Medicare Card',
    who: 'Lost or damaged your red-white-and-blue Medicare card.',
    cost: 'Free',
    online: true,
    steps: [
      'Go to medicare.gov → "Sign in" or "Create account" with your Medicare number.',
      'Click "Manage My Account" → "Replace Medicare card".',
      'New card mails in 30 days.',
      'Need it sooner? Print a temporary one from medicare.gov immediately — pharmacies and doctors accept it.',
    ],
    link: 'https://www.medicare.gov/account/login',
    icon: Shield,
  },
};

const DOC_OPTIONS: { id: Doc; label: string }[] = [
  { id: 'passport',  label: 'US Passport' },
  { id: 'drivers',   label: 'Driver\'s License' },
  { id: 'state-id',  label: 'State ID (non-driver)' },
  { id: 'real-id',   label: 'REAL ID' },
  { id: 'ssn-card',  label: 'Social Security Card' },
  { id: 'medicare',  label: 'Medicare Card' },
];

export default function RenewIdOnline() {
  const [doc, setDoc] = useState<Doc | null>(null);

  const r = doc ? RENEWALS[doc] : null;

  return (
    <>
      <SEOHead
        title="Renew ID Online Helper"
        description="Renew your US passport, driver's license, REAL ID, Social Security card, or Medicare card online — through the official .gov sites only. No middlemen."
        path="/tools/renew-id-online"
      />
      <Navbar />

      <main className="min-h-screen bg-background">
        <section className="bg-gradient-to-br from-blue-50 via-background to-indigo-50 dark:from-blue-950/20 dark:to-indigo-950/20 border-b border-border py-10 px-4">
          <div className="container max-w-3xl mx-auto text-center">
            <div className="flex justify-center mb-3">
              <div className="p-3 bg-blue-500/10 rounded-full">
                <CreditCard className="h-8 w-8 text-blue-600" />
              </div>
            </div>
            <h1 className="text-3xl md:text-4xl font-bold mb-2">Renew ID Online Helper</h1>
            <p className="text-muted-foreground text-lg max-w-xl mx-auto">
              Renew US documents through the real .gov site — never a middleman that adds a $50 "service fee".
            </p>
          </div>
        </section>

        <div className="container max-w-3xl mx-auto px-4 py-8">
          <PageBreadcrumb segments={[{ label: 'Tools', href: '/tools' }, { label: 'Renew ID Online' }]} />

          {!doc ? (
            <Card className="border-border shadow-sm">
              <CardContent className="p-6">
                <p className="text-sm font-semibold mb-3">What do you need to renew?</p>
                <div className="grid sm:grid-cols-2 gap-2">
                  {DOC_OPTIONS.map(o => (
                    <button key={o.id} onClick={() => setDoc(o.id)}
                      className="p-3 rounded-lg border border-border hover:border-primary/50 hover:bg-primary/5 transition-all text-left">
                      <p className="font-medium text-sm">{o.label}</p>
                    </button>
                  ))}
                </div>
              </CardContent>
            </Card>
          ) : r ? (
            <>
              <Card className="border-border shadow-sm mb-6">
                <CardContent className="p-5 flex items-center justify-between flex-wrap gap-3">
                  <div className="flex items-center gap-3 flex-wrap">
                    <r.icon className="h-5 w-5 text-primary shrink-0" />
                    <Badge variant="outline">{r.name}</Badge>
                    <Badge variant="outline">{r.cost}</Badge>
                    {r.online && <Badge>Online OK</Badge>}
                  </div>
                  <Button variant="outline" size="sm" onClick={() => setDoc(null)}>Change</Button>
                </CardContent>
              </Card>

              <Card className="border-border mb-6">
                <CardContent className="p-5">
                  <p className="text-sm text-muted-foreground mb-3"><strong>Who this is for:</strong> {r.who}</p>

                  <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-3">Steps</p>
                  <ol className="space-y-3">
                    {r.steps.map((s, i) => (
                      <li key={i} className="flex gap-3 text-sm">
                        <span className="shrink-0 w-6 h-6 rounded-full bg-primary/10 text-primary font-semibold text-xs flex items-center justify-center mt-0.5">{i + 1}</span>
                        <span>{s}</span>
                      </li>
                    ))}
                  </ol>

                  {r.warning && (
                    <div className="mt-4 p-3 rounded-lg bg-amber-50 dark:bg-amber-900/20 border border-amber-200 dark:border-amber-800">
                      <p className="text-xs"><strong className="text-amber-700 dark:text-amber-300">Watch out:</strong>{' '}<span className="text-amber-700 dark:text-amber-300">{r.warning}</span></p>
                    </div>
                  )}

                  <a href={r.link} target="_blank" rel="noreferrer"
                    className="inline-flex items-center gap-1 mt-4 text-sm text-primary hover:underline font-medium">
                    Visit the official .gov site <ExternalLink className="h-4 w-4" />
                  </a>
                </CardContent>
              </Card>
            </>
          ) : null}

          <Card className="border-amber-300 bg-amber-50 dark:bg-amber-950/20 mb-6">
            <CardContent className="p-5 flex gap-3">
              <AlertTriangle className="h-5 w-5 text-amber-600 shrink-0 mt-0.5" />
              <div className="text-sm">
                <p className="font-semibold mb-1">Watch out for "passport renewal" middleman sites</p>
                <p className="text-muted-foreground">
                  Many top Google results for "renew passport" are services that charge $50-$200 to fill out the same form. The official site (travel.state.gov) charges nothing extra. Same goes for driver\'s license renewals — ONLY use your state\'s actual DMV site, ending in .gov.
                </p>
              </div>
            </CardContent>
          </Card>

          <div className="mt-10 pt-8 border-t border-border">
            <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-3">Related</p>
            <div className="grid sm:grid-cols-3 gap-3">
              <Link to="/tools/voter-info-verifier" className="p-3 rounded-lg border border-border hover:border-primary/50 hover:bg-primary/5 transition-all">
                <p className="font-medium text-sm">Voter Info Verifier</p>
                <p className="text-xs text-muted-foreground mt-0.5">Other state .gov links.</p>
              </Link>
              <Link to="/tools/government-benefits-portal" className="p-3 rounded-lg border border-border hover:border-primary/50 hover:bg-primary/5 transition-all">
                <p className="font-medium text-sm">Government Benefits Portal</p>
                <p className="text-xs text-muted-foreground mt-0.5">Federal benefit applications.</p>
              </Link>
              <Link to="/tools/scam-message-decoder" className="p-3 rounded-lg border border-border hover:border-primary/50 hover:bg-primary/5 transition-all">
                <p className="font-medium text-sm">Scam Message Decoder</p>
                <p className="text-xs text-muted-foreground mt-0.5">"Renew your license" texts are scams.</p>
              </Link>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}

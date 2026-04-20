import { useState } from 'react';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { PageBreadcrumb } from '@/components/PageBreadcrumb';
import { Badge } from '@/components/ui/badge';
import {
  FileText,
  AlertTriangle,
  ShieldCheck,
  ExternalLink,
  ChevronDown,
  ChevronUp,
  CheckCircle2,
  Eye,
  Lock,
} from 'lucide-react';

interface Section {
  id: string;
  label: string;
  summary: string;
  sample: React.ReactNode;
  explain: React.ReactNode;
}

const sections: Section[] = [
  {
    id: 'personal',
    label: '1. Personal Information',
    summary: 'Your name, addresses, Social Security number (last 4), date of birth, and employers on record.',
    sample: (
      <div className="font-mono text-xs leading-relaxed">
        <p className="font-bold mb-2 text-sm">PERSONAL INFORMATION</p>
        <p>Name on file: JANE Q DOE</p>
        <p>Also known as: JANE DOE, J Q DOE</p>
        <p>Date of birth: 01/15/1962</p>
        <p>Social Security: XXX-XX-1234</p>
        <p className="mt-2">Current address: 123 MAIN ST, SPRINGFIELD, IL 62701 (reported 2024)</p>
        <p>Previous address: 456 OAK AVE, CHICAGO, IL 60614 (reported 2019)</p>
        <p className="text-red-600">Previous address: 999 UNKNOWN LN, MIAMI, FL 33101 (reported 2023)</p>
        <p className="mt-2">Current employer: ACME CORP</p>
      </div>
    ),
    explain: (
      <>
        <p>
          This section lists everything the bureau thinks it knows about you — names, addresses, and employers. It's the first place to check because <strong>errors here often point to identity theft.</strong>
        </p>
        <ul className="mt-3 space-y-1.5">
          <li className="flex gap-2"><AlertTriangle className="h-4 w-4 text-amber-500 flex-shrink-0 mt-0.5" aria-hidden="true" /><span>An address you don't recognize can mean someone opened accounts in your name and had the bills sent elsewhere.</span></li>
          <li className="flex gap-2"><AlertTriangle className="h-4 w-4 text-amber-500 flex-shrink-0 mt-0.5" aria-hidden="true" /><span>A Social Security number that doesn't match yours is a serious red flag.</span></li>
          <li className="flex gap-2"><AlertTriangle className="h-4 w-4 text-amber-500 flex-shrink-0 mt-0.5" aria-hidden="true" /><span>Name variations are usually harmless (maiden name, nickname), but look for names you've never used.</span></li>
        </ul>
      </>
    ),
  },
  {
    id: 'summary',
    label: '2. Summary / Score Section',
    summary: 'Your credit score, account counts, balances, and a quick health snapshot.',
    sample: (
      <div className="font-mono text-xs leading-relaxed">
        <p className="font-bold mb-2 text-sm">ACCOUNT SUMMARY</p>
        <p>Credit score (FICO 8): 724</p>
        <p>Total accounts: 12 (9 open, 3 closed)</p>
        <p>Total balances: $14,220</p>
        <p>Credit limit total: $58,000</p>
        <p>Credit utilization: 24%</p>
        <p>Oldest account: 18 years</p>
        <p>Average age of accounts: 9 years 4 months</p>
        <p>Inquiries (last 2 years): 2</p>
        <p>Public records: 0</p>
        <p>Collections: 0</p>
      </div>
    ),
    explain: (
      <>
        <p>This is the cheat sheet for your financial life in 10 lines.</p>
        <ul className="mt-3 space-y-2">
          <li><strong>Credit score:</strong> A number from 300–850 that lenders use to decide if they'll lend to you and at what rate. 670+ is "good," 740+ is "very good," 800+ is "excellent."</li>
          <li><strong>Credit utilization:</strong> Total balances divided by total limits. Keep this under 30% — under 10% is ideal. It is the second biggest factor in your score.</li>
          <li><strong>Oldest account / average age:</strong> Older is better. That's why you never close your oldest credit card just because you don't use it.</li>
          <li><strong>Inquiries:</strong> Each time you apply for credit, a "hard inquiry" is logged. A couple is fine; a pile of them in a few months looks desperate to lenders.</li>
        </ul>
      </>
    ),
  },
  {
    id: 'accounts',
    label: '3. Account Details (Tradelines)',
    summary: "Every credit card, loan, and line of credit you have or had — with the most detail and the most to check.",
    sample: (
      <div className="font-mono text-xs leading-relaxed space-y-3">
        <div>
          <p className="font-bold text-sm">CHASE SAPPHIRE PREFERRED</p>
          <p>Account #: XXXX-XXXX-XXXX-4821</p>
          <p>Status: OPEN / Current</p>
          <p>Account type: Credit Card (Revolving)</p>
          <p>Date opened: 03/2008</p>
          <p>Credit limit: $18,000</p>
          <p>High balance: $9,420 (03/2022)</p>
          <p>Current balance: $1,220</p>
          <p>Payment: $35 / month</p>
          <p>Payment history (last 24 months):</p>
          <p>OK OK OK OK OK OK OK OK OK OK OK OK OK OK OK OK OK OK OK OK OK OK OK OK</p>
        </div>
        <div>
          <p className="font-bold text-sm">CAPITAL ONE QUICKSILVER</p>
          <p>Status: <span className="text-red-600">CLOSED — Charged off</span></p>
          <p>Date opened: 06/2015 &nbsp; Closed: 11/2023</p>
          <p>Balance: $0 &nbsp; Charge-off amount: $2,148</p>
          <p>Payment history shows: OK OK OK 30 60 90 120 CO</p>
        </div>
      </div>
    ),
    explain: (
      <>
        <p>This is the biggest section and where most errors hide. Read each account like a detective.</p>
        <ul className="mt-3 space-y-2">
          <li><strong>Status:</strong> "Open/Current" = healthy. "Closed" = paid off or closed (usually fine). "Charged off" / "Collections" = ugly — the lender gave up trying to collect. These hurt your score badly and stay for 7 years.</li>
          <li><strong>Date opened:</strong> Affects "length of credit history." Older is better.</li>
          <li><strong>Current balance:</strong> What you owe today. Lower is better; paying in full every month is ideal.</li>
          <li><strong>Payment history symbols:</strong> "OK" or "✓" means paid on time. "30" = 30 days late, "60" = 60 days late, etc. "CO" = charged off. Even one 30-day-late mark can drop your score 60–100 points.</li>
          <li><strong>High credit limit / high balance:</strong> Shows the highest balance you've ever carried. Lenders look at this to judge risk.</li>
        </ul>
        <div className="mt-4 p-3 rounded-xl bg-amber-50 dark:bg-amber-950/20 border border-amber-200 dark:border-amber-900 text-sm text-amber-800 dark:text-amber-300">
          <strong>Red flags:</strong> an account you don't recognize, a balance that's wrong, a late payment you know you made on time, or an old account still showing "open" when you closed it.
        </div>
      </>
    ),
  },
  {
    id: 'inquiries',
    label: '4. Inquiries',
    summary: 'Who has pulled your credit — and whether it affected your score.',
    sample: (
      <div className="font-mono text-xs leading-relaxed">
        <p className="font-bold mb-2 text-sm">INQUIRIES (LAST 24 MONTHS)</p>
        <p className="font-semibold">Hard inquiries:</p>
        <p>02/14/2026 — CHASE BANK — Credit card application</p>
        <p>09/03/2025 — TOYOTA FINANCIAL — Auto loan</p>
        <p className="mt-2 font-semibold">Soft inquiries (do not affect score):</p>
        <p>03/01/2026 — CREDIT KARMA — Consumer disclosure</p>
        <p>02/20/2026 — CAPITAL ONE — Pre-approval offer</p>
        <p>01/15/2026 — YOURSELF — Consumer request</p>
      </div>
    ),
    explain: (
      <>
        <ul className="space-y-2">
          <li><strong>Hard inquiries</strong> happen when you actively apply for credit. Each can drop your score a few points. They stay on your report for 2 years but only affect your score for about 12 months.</li>
          <li><strong>Soft inquiries</strong> happen when you check your own credit, a lender offers you a pre-approval, or a current creditor reviews your account. These do not affect your score.</li>
          <li><strong>Rate shopping exception:</strong> Multiple mortgage or auto loan inquiries within a 14–45 day window are usually counted as a single inquiry.</li>
        </ul>
        <div className="mt-4 p-3 rounded-xl bg-red-50 dark:bg-red-950/20 border border-red-200 dark:border-red-900 text-sm text-red-800 dark:text-red-300">
          <strong>Hard inquiries you didn't make = potential identity theft.</strong> If you see an application for credit you never filled out, dispute it immediately and consider freezing your credit.
        </div>
      </>
    ),
  },
  {
    id: 'public',
    label: '5. Public Records',
    summary: 'Bankruptcies, tax liens, and civil judgments that show up in court databases.',
    sample: (
      <div className="font-mono text-xs leading-relaxed">
        <p className="font-bold mb-2 text-sm">PUBLIC RECORDS</p>
        <p>No bankruptcies on file.</p>
        <p>No tax liens on file.</p>
        <p>No civil judgments on file.</p>
      </div>
    ),
    explain: (
      <>
        <ul className="space-y-2">
          <li><strong>Chapter 7 bankruptcy:</strong> Stays on your report for <strong>10 years</strong>.</li>
          <li><strong>Chapter 13 bankruptcy:</strong> Stays for <strong>7 years</strong>.</li>
          <li><strong>Civil judgments and tax liens:</strong> As of 2017, most of these no longer appear on consumer credit reports due to rule changes by the bureaus — but they can still affect you in other ways.</li>
          <li>This section is often blank, which is good. Seeing something here is serious and usually drops your score by 100+ points.</li>
        </ul>
      </>
    ),
  },
  {
    id: 'dispute',
    label: '6. Dispute Rights',
    summary: 'Your legal right to challenge anything wrong on your report — for free.',
    sample: (
      <div className="font-mono text-xs leading-relaxed">
        <p className="font-bold mb-2 text-sm">YOUR RIGHTS UNDER THE FAIR CREDIT REPORTING ACT (FCRA)</p>
        <p>You have the right to:</p>
        <p>• Receive a free copy of your credit report annually</p>
        <p>• Dispute inaccurate or incomplete information</p>
        <p>• Have disputed items investigated within 30 days</p>
        <p>• Have errors corrected or removed</p>
        <p>• Add a 100-word statement to explain disputed items</p>
      </div>
    ),
    explain: (
      <>
        <p>Every bureau must investigate a dispute within <strong>30 days</strong> (sometimes 45). It's free. You do not need to pay a credit repair company.</p>
        <p className="mt-3"><strong>How to dispute:</strong></p>
        <ol className="mt-2 space-y-1.5 list-decimal pl-5">
          <li>File your dispute online directly with the bureau (Experian, Equifax, TransUnion) or by certified mail.</li>
          <li>Include a copy of your report with the disputed item circled.</li>
          <li>Explain clearly what's wrong and what it should say.</li>
          <li>Attach any proof — a paid receipt, a letter from a creditor, a bank statement.</li>
          <li>Keep copies of everything you send.</li>
        </ol>
        <a
          href="https://consumer.ftc.gov/articles/sample-letter-disputing-errors-credit-reports-business-supplied-information"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 mt-4 text-sm text-primary hover:underline"
        >
          <ExternalLink className="h-3.5 w-3.5" aria-hidden="true" />
          FTC sample dispute letter
        </a>
      </>
    ),
  },
];

const factors = [
  { label: 'Payment history', weight: '35%', note: 'Do you pay on time, every time? This matters most. A single 30-day-late payment can cost 60–100 points.' },
  { label: 'Credit utilization (amounts owed)', weight: '30%', note: 'Keep balances under 30% of your limit — under 10% is ideal.' },
  { label: 'Length of credit history', weight: '15%', note: 'Older accounts help. Think twice before closing your oldest credit card.' },
  { label: 'New credit / inquiries', weight: '10%', note: 'Applying for a lot of credit at once looks risky. Space out applications.' },
  { label: 'Credit mix', weight: '10%', note: 'Having a mix (card + installment loan + mortgage) helps a little. Do not open accounts just for this.' },
];

export default function CreditReportReader() {
  const [open, setOpen] = useState<string | null>('personal');

  return (
    <>
      <SEOHead
        title="Credit Report Reader — Understand Your Credit Report | TekSure"
        description="A plain-English walkthrough of every section of your credit report, with red flags to watch for, where to get yours free, and how to dispute errors."
        path="/tools/credit-report-reader"
      />
      <Navbar />
      <main className="min-h-screen bg-background">
        <div className="container pt-4">
          <PageBreadcrumb segments={[{ label: 'Tools', href: '/tools' }, { label: 'Credit Report Reader' }]} />
        </div>

        <section className="border-b">
          <div className="container py-12 md:py-16 max-w-3xl">
            <div className="flex items-center gap-3 mb-4">
              <div className="h-12 w-12 rounded-2xl bg-sky-50 dark:bg-sky-950/30 flex items-center justify-center flex-shrink-0">
                <FileText className="h-6 w-6 text-sky-600" aria-hidden="true" />
              </div>
              <Badge variant="secondary">Free Tool</Badge>
            </div>
            <h1 className="text-3xl md:text-4xl font-bold tracking-tight mb-3">
              Credit Reports Are Confusing. We'll Walk You Through Yours.
            </h1>
            <p className="text-muted-foreground text-lg">
              Open up your credit report side by side with this guide, and go section by section. In about 10 minutes you'll know exactly what it says, what's normal, and what's a problem worth fixing.
            </p>
          </div>
        </section>

        <div className="container py-10 pb-24 max-w-3xl space-y-10">
          <div className="rounded-2xl border-2 border-primary/20 bg-primary/5 p-6">
            <h2 className="text-lg font-bold mb-3 flex items-center gap-2">
              <ShieldCheck className="h-5 w-5 text-primary" aria-hidden="true" />
              Where to get your free credit report
            </h2>
            <p className="text-sm mb-4 text-muted-foreground leading-relaxed">
              You are legally entitled to a free copy of your report from each of the three bureaus. Since 2020 you can get them <strong>weekly</strong> — for free, forever. Use this instead of any paid service.
            </p>
            <ul className="space-y-2 text-sm">
              <li className="flex gap-2">
                <CheckCircle2 className="h-4 w-4 text-green-600 flex-shrink-0 mt-0.5" aria-hidden="true" />
                <span>
                  <a href="https://www.annualcreditreport.com" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline font-medium">AnnualCreditReport.com</a>
                  {' '}— the only federally authorized source. Get reports from Equifax, Experian, and TransUnion here.
                </span>
              </li>
              <li className="flex gap-2">
                <CheckCircle2 className="h-4 w-4 text-green-600 flex-shrink-0 mt-0.5" aria-hidden="true" />
                <span><strong>Credit Karma</strong> — free Equifax and TransUnion reports + a score, no credit card required.</span>
              </li>
              <li className="flex gap-2">
                <CheckCircle2 className="h-4 w-4 text-green-600 flex-shrink-0 mt-0.5" aria-hidden="true" />
                <span><strong>Experian app</strong> — free Experian report and FICO score.</span>
              </li>
              <li className="flex gap-2">
                <CheckCircle2 className="h-4 w-4 text-green-600 flex-shrink-0 mt-0.5" aria-hidden="true" />
                <span><strong>Capital One CreditWise</strong> — free TransUnion report and VantageScore, no card needed.</span>
              </li>
            </ul>
            <p className="text-xs text-muted-foreground mt-4">
              Pull reports from all three bureaus — they don't always have the same information, and errors often appear on just one.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold mb-2">Section-by-section walkthrough</h2>
            <p className="text-sm text-muted-foreground mb-6">
              Tap any section to see a sample and what to look for. The samples are fictional but match what real bureaus send.
            </p>
            <div className="space-y-3">
              {sections.map(s => {
                const isOpen = open === s.id;
                return (
                  <div key={s.id} className="rounded-2xl border border-border bg-card overflow-hidden">
                    <button
                      onClick={() => setOpen(isOpen ? null : s.id)}
                      className="w-full text-left p-5 flex items-start gap-3"
                      aria-expanded={isOpen}
                    >
                      <div className="flex-1 min-w-0">
                        <h3 className="font-semibold text-base mb-1">{s.label}</h3>
                        <p className="text-sm text-muted-foreground">{s.summary}</p>
                      </div>
                      {isOpen
                        ? <ChevronUp className="h-4 w-4 text-muted-foreground flex-shrink-0 mt-1" aria-hidden="true" />
                        : <ChevronDown className="h-4 w-4 text-muted-foreground flex-shrink-0 mt-1" aria-hidden="true" />}
                    </button>
                    {isOpen && (
                      <div className="border-t border-border">
                        <div className="p-5 bg-muted/30">
                          <p className="text-xs font-semibold uppercase text-muted-foreground mb-3">Sample from a report</p>
                          {s.sample}
                        </div>
                        <div className="p-5 text-sm leading-relaxed space-y-2">
                          <p className="text-xs font-semibold uppercase text-muted-foreground mb-2">What it means</p>
                          {s.explain}
                        </div>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>

          <div className="rounded-2xl border border-red-200 dark:border-red-900 bg-red-50 dark:bg-red-950/20 p-6">
            <h2 className="text-lg font-bold mb-3 flex items-center gap-2 text-red-800 dark:text-red-300">
              <Eye className="h-5 w-5" aria-hidden="true" />
              Identity theft red flags
            </h2>
            <p className="text-sm text-red-800 dark:text-red-300 mb-3 leading-relaxed">
              Watch for any of these. Even one means you should freeze your credit today.
            </p>
            <ul className="space-y-2 text-sm text-red-800 dark:text-red-300">
              <li className="flex gap-2"><span>•</span> Accounts, credit cards, or loans you don't recognize.</li>
              <li className="flex gap-2"><span>•</span> An address where you've never lived.</li>
              <li className="flex gap-2"><span>•</span> Collections or charge-offs for debts that aren't yours.</li>
              <li className="flex gap-2"><span>•</span> Hard inquiries from lenders you never applied with.</li>
              <li className="flex gap-2"><span>•</span> Your name misspelled in a way you've never used.</li>
              <li className="flex gap-2"><span>•</span> Employer listings you've never worked for.</li>
            </ul>
          </div>

          <div className="rounded-2xl border border-border bg-card p-6">
            <h2 className="text-lg font-bold mb-3 flex items-center gap-2">
              <Lock className="h-5 w-5 text-primary" aria-hidden="true" />
              Freeze your credit (it's free and fast)
            </h2>
            <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
              A credit freeze blocks anyone — including scammers — from opening new accounts in your name. It takes about 5 minutes at each bureau. It does not hurt your score, and you can unfreeze any time when you need to apply for credit.
            </p>
            <ul className="space-y-2 text-sm">
              <li className="flex gap-2"><CheckCircle2 className="h-4 w-4 text-green-600 flex-shrink-0 mt-0.5" /><span>Equifax — equifax.com/personal/credit-report-services</span></li>
              <li className="flex gap-2"><CheckCircle2 className="h-4 w-4 text-green-600 flex-shrink-0 mt-0.5" /><span>Experian — experian.com/freeze</span></li>
              <li className="flex gap-2"><CheckCircle2 className="h-4 w-4 text-green-600 flex-shrink-0 mt-0.5" /><span>TransUnion — transunion.com/credit-freeze</span></li>
            </ul>
            <a
              href="/guides/freeze-credit-identity-theft"
              className="inline-flex items-center gap-1.5 mt-4 text-sm text-primary hover:underline font-medium"
            >
              Full guide: How to freeze your credit
            </a>
          </div>

          <div>
            <h2 className="text-xl font-bold mb-4">Credit score factors explained</h2>
            <p className="text-sm text-muted-foreground mb-4">
              Your FICO score isn't a mystery — these five factors are the whole formula.
            </p>
            <div className="space-y-3">
              {factors.map(f => (
                <div key={f.label} className="rounded-2xl border border-border bg-card p-4">
                  <div className="flex items-baseline justify-between mb-1">
                    <h3 className="font-semibold text-sm">{f.label}</h3>
                    <span className="text-sm font-mono font-semibold text-primary">{f.weight}</span>
                  </div>
                  <p className="text-sm text-muted-foreground">{f.note}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}

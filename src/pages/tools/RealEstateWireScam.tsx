import { Link } from 'react-router-dom';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { PageBreadcrumb } from '@/components/PageBreadcrumb';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import {
  AlertTriangle,
  Home,
  Phone,
  Mail,
  ShieldAlert,
  Clock,
  ChevronRight,
  ExternalLink,
  CheckCircle2,
} from 'lucide-react';

interface ScamPart {
  title: string;
  hook: string;
  pattern: string;
  redFlag: string;
  whatToDo: string;
}

const PARTS: ScamPart[] = [
  {
    title: 'Email interception during closing',
    hook: 'Email from "your title company": "Hi — small change. Wire the closing funds to the account below by 3pm today so we can record on time."',
    pattern:
      'A hacker quietly reads emails between you, your real estate agent, your lender, and your title company for weeks. The day before closing, they send a message that looks like it came from a real person on the closing team. The email matches the writing style. The signature looks right. The wire instructions are new. The account belongs to the thief.',
    redFlag:
      'Wire instructions arrive by email — or change at the last minute. The reply-to address is one letter off (titlefirm.com vs titlefrim.com). The note pushes urgency: "wire today or we lose the close date".',
    whatToDo:
      'Stop. Do not wire anything based on instructions you got by email. Call the title company on the phone number printed on a paper document you got days earlier — never the number in the email signature. Read the wire details aloud and confirm them digit by digit.',
  },
  {
    title: 'Fake escrow company website',
    hook: '"BadHomeOnline Escrow & Title — secure closing for modern buyers."',
    pattern:
      'Some scams skip the email hack and build a fake escrow company from scratch. Slick website, fake reviews, fake address, fake licensing badges. The "agent" emails wire instructions that point to a brand-new bank account. By the time the closing date passes and the seller asks where the money is, the website is offline and the account is empty.',
    redFlag:
      'Escrow firm you never heard of. No physical office you can visit. Reviews all posted in the same week. Website domain registered less than 6 months ago. License number does not match the state real-estate database.',
    whatToDo:
      'Look up the escrow or title company on your state\'s Department of Insurance or Real Estate Commission website. Call the licensing board to confirm the firm is real. Drive past the office address. If anything feels off, walk away.',
  },
  {
    title: 'Spoofed agent / lender phone call',
    hook: '"This is Sarah from the title company — I am calling to confirm the wire instructions I emailed earlier."',
    pattern:
      'After sending the fake email, the scammer calls you from a spoofed number that matches the real agent\'s caller ID. The voice may even be an AI clone of the real person, built from public videos. They sound friendly, professional, calm. They confirm the fake account number.',
    redFlag:
      'They called you. Real closing teams almost never push you to wire same-day over the phone. The phone confirmation matches the suspicious email, not the original closing disclosure.',
    whatToDo:
      'Hang up politely. Call back using the number on a document you received in person — closing disclosure, signed engagement letter, business card you were handed face to face. If the wire details on the call do not match what that real person tells you, you have caught the scam.',
  },
];

const BUYER_PROTECTION = [
  {
    icon: Phone,
    title: 'Verify by phone — using a known number',
    body: 'Before you wire a single dollar, call the title company. Use a number from a piece of paper you received before today (closing disclosure, business card, mailed welcome letter). Never the number in the wire-instruction email. Never a number from a Google search. Read the wire details aloud and have them confirm.',
  },
  {
    icon: Mail,
    title: 'Treat email as untrusted for money',
    body: 'Email is the weakest link in a real estate transaction. Anyone watching can see when you are about to close. Assume any wire instructions that arrive by email may be fake — even if they come from an address you have written to a hundred times. Phone confirmation is the only real defense.',
  },
  {
    icon: Home,
    title: 'Confirm the firm is real and licensed',
    body: 'Look up the escrow / title company on your state\'s real-estate or insurance regulator site. Confirm the office address on Google Maps Street View. Check that the website domain is not brand new (use whois.domaintools.com). A real firm has a paper trail going back years.',
  },
  {
    icon: ShieldAlert,
    title: 'Watch for last-minute changes',
    body: 'Be especially careful in the final 48 hours before closing. Real wire instructions rarely change at the last minute. Any "small update", "new bank", or "different account" message in the final week is a red flag worth a phone call before you do anything.',
  },
  {
    icon: CheckCircle2,
    title: 'Use wire-verification services if your title firm offers them',
    body: 'Some closing firms now use services like CertifID or FundingShield that confirm wire details with a verified phone call and matching identity check. If your title company offers it, accept. If they do not, ask your lender what protection they have in place.',
  },
];

const RECOVERY_STEPS = [
  {
    icon: Phone,
    title: 'Call your bank now — this hour',
    body: 'Tell them: "I sent a fraudulent wire and I need a wire recall right now." Ask for the wire-fraud team. Many banks can recall a wire if it has not been picked up by the receiving bank yet. Speed is the entire game.',
  },
  {
    icon: ShieldAlert,
    title: 'File at IC3.gov within 24 hours',
    body: 'Go to ic3.gov and file an Internet Crime Complaint. Include the amount, the receiving account number, the receiving bank, and the wire reference number. The FBI\'s Recovery Asset Team can file what is called the Financial Fraud Kill Chain — a process that freezes funds at the receiving bank if reported fast enough.',
  },
  {
    icon: Clock,
    title: 'The 24-72 hour window matters',
    body: 'The FBI\'s Financial Fraud Kill Chain works best in the first 24-48 hours and almost never works after 72 hours. After that, the money has been moved through layers of accounts and out of the country. Files reported in the first day have recovered hundreds of millions of dollars in real cases.',
  },
  {
    icon: Mail,
    title: 'Notify your title company, agent, and lender',
    body: 'Email and call every party in the closing. They need to know there is a hacker in the email chain — the same hacker may try the next buyer. Ask the title company to alert their IT team. Save every email you have related to the wire as evidence.',
  },
  {
    icon: AlertTriangle,
    title: 'Report locally and to the FTC',
    body: 'File a police report in your county — a paper report helps with any insurance claim. Report at reportfraud.ftc.gov. If a real estate agent or title firm name was used, report to your state\'s real-estate commission so they can warn others.',
  },
];

export default function RealEstateWireScam() {
  return (
    <>
      <SEOHead
        title="Real Estate Wire Fraud Defense"
        description="Buyers lose six figures to fake wire instructions during home closings. Learn how the scam works, the verify-by-phone rule, and how to recover funds in the first 24-48 hours."
        path="/tools/real-estate-wire-scam"
      />
      <Navbar />

      <main className="min-h-screen bg-background">
        <section className="bg-gradient-to-br from-red-50 via-background to-orange-50 dark:from-red-950/20 dark:to-orange-950/20 border-b border-border py-10 px-4">
          <div className="container max-w-3xl mx-auto text-center">
            <div className="flex justify-center mb-3">
              <div className="p-3 bg-red-500/10 rounded-full">
                <Home className="h-8 w-8 text-red-600" />
              </div>
            </div>
            <h1 className="text-3xl md:text-4xl font-bold mb-2">Real Estate Wire Fraud Defense</h1>
            <p className="text-muted-foreground text-lg max-w-xl mx-auto">
              The scam that empties down-payment accounts. How to spot it, how to stop it, and what to do in the first 24 hours if you have already sent the wire.
            </p>
          </div>
        </section>

        <div className="container max-w-3xl mx-auto px-4 py-8">
          <PageBreadcrumb segments={[{ label: 'Tools', href: '/tools' }, { label: 'Real Estate Wire Scam' }]} />

          {/* Big alert: FBI IC3 stat */}
          <Card className="border-red-300 dark:border-red-800 bg-red-50 dark:bg-red-950/30 mb-6">
            <CardContent className="p-5">
              <div className="flex items-start gap-3">
                <AlertTriangle className="h-8 w-8 text-red-600 dark:text-red-400 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-bold text-base text-red-900 dark:text-red-100 mb-1">
                    Real estate wire fraud cost US victims more than 446 million dollars in 2023.
                  </p>
                  <p className="text-sm text-red-900/90 dark:text-red-100/90">
                    Source: FBI Internet Crime Complaint Center (IC3) Annual Report. The average single loss tops 90,000 dollars. Most victims are first-time home buyers and seniors moving for retirement.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* How it works */}
          <h2 className="text-2xl font-bold mb-3">How the scam plays out</h2>
          <p className="text-sm text-muted-foreground mb-4">
            A real estate transaction is the perfect target: large dollar amount, tight deadline, dozens of emails between strangers. Hackers know this and they have three main entry points.
          </p>

          <div className="space-y-4 mb-10">
            {PARTS.map((p) => (
              <Card key={p.title} className="border-border">
                <CardContent className="p-5">
                  <div className="flex items-start justify-between gap-3 mb-2 flex-wrap">
                    <p className="font-semibold text-base">{p.title}</p>
                    <Badge variant="outline">Wire fraud</Badge>
                  </div>

                  <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mt-3 mb-1">Hook</p>
                  <p className="text-sm italic p-2 rounded bg-muted/40 border border-border">{p.hook}</p>

                  <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mt-3 mb-1">How it works</p>
                  <p className="text-sm">{p.pattern}</p>

                  <p className="text-xs font-semibold text-red-700 dark:text-red-300 uppercase tracking-wider mt-3 mb-1">Red flag</p>
                  <p className="text-sm p-2 rounded bg-red-50 dark:bg-red-950/20 border border-red-200 dark:border-red-800">{p.redFlag}</p>

                  <p className="text-xs font-semibold text-green-700 dark:text-green-300 uppercase tracking-wider mt-3 mb-1">What to do</p>
                  <p className="text-sm p-2 rounded bg-green-50 dark:bg-green-950/20 border border-green-200 dark:border-green-800">{p.whatToDo}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Section 1: Buyer protection */}
          <h2 className="text-2xl font-bold mb-3">Buyer protection</h2>
          <p className="text-sm text-muted-foreground mb-4">
            Five rules that stop wire fraud before it happens. Print this list and keep it next to the closing paperwork.
          </p>

          <div className="space-y-3 mb-10">
            {BUYER_PROTECTION.map((rule) => {
              const Icon = rule.icon;
              return (
                <Card key={rule.title} className="border-border">
                  <CardContent className="p-5">
                    <div className="flex items-start gap-3">
                      <div className="p-2 bg-primary/10 rounded-lg flex-shrink-0">
                        <Icon className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <p className="font-semibold text-base mb-1">{rule.title}</p>
                        <p className="text-sm text-muted-foreground">{rule.body}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          {/* Section 2: Recovery */}
          <Card className="border-orange-300 dark:border-orange-800 bg-orange-50 dark:bg-orange-950/30 mb-4">
            <CardContent className="p-5">
              <div className="flex items-start gap-3">
                <Clock className="h-7 w-7 text-orange-600 dark:text-orange-400 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-bold text-base text-orange-900 dark:text-orange-100 mb-1">
                    What to do if you have been hit (act in the next 24 hours)
                  </p>
                  <p className="text-sm text-orange-900/90 dark:text-orange-100/90">
                    Recovery is possible — but the window is short. The FBI Financial Fraud Kill Chain has the best chance in the first 24-48 hours after the wire leaves your account. Do these five things in order, today.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          <div className="space-y-3 mb-10">
            {RECOVERY_STEPS.map((step, i) => {
              const Icon = step.icon;
              return (
                <Card key={step.title} className="border-border">
                  <CardContent className="p-5">
                    <div className="flex items-start gap-3">
                      <div className="flex-shrink-0 flex flex-col items-center">
                        <div className="p-2 bg-orange-500/10 rounded-lg">
                          <Icon className="h-5 w-5 text-orange-600 dark:text-orange-400" />
                        </div>
                        <span className="mt-2 text-xs font-bold text-muted-foreground">Step {i + 1}</span>
                      </div>
                      <div>
                        <p className="font-semibold text-base mb-1">{step.title}</p>
                        <p className="text-sm text-muted-foreground">{step.body}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          {/* Reporting + resources */}
          <Card className="border-border bg-muted/30 mb-6">
            <CardContent className="p-5">
              <p className="text-sm font-semibold mb-2">Where to report wire fraud</p>
              <ul className="space-y-1.5 text-sm">
                <li>
                  <a
                    href="https://www.ic3.gov"
                    target="_blank"
                    rel="noreferrer"
                    className="text-primary hover:underline inline-flex items-center gap-1"
                  >
                    ic3.gov <ExternalLink className="h-3 w-3" />
                  </a>{' '}
                  — FBI Internet Crime Complaint Center (file within 24 hours)
                </li>
                <li>
                  <a
                    href="https://reportfraud.ftc.gov"
                    target="_blank"
                    rel="noreferrer"
                    className="text-primary hover:underline inline-flex items-center gap-1"
                  >
                    reportfraud.ftc.gov <ExternalLink className="h-3 w-3" />
                  </a>{' '}
                  — Federal Trade Commission
                </li>
                <li>Your bank&apos;s wire-fraud line — ask for a wire recall and the SWIFT trace</li>
                <li>Your local police department — paper report number for any insurance claim</li>
                <li>State real-estate commission — if a licensed firm name was used in the scam</li>
              </ul>
            </CardContent>
          </Card>

          {/* Related */}
          <div className="mt-10 pt-8 border-t border-border">
            <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-3">Related</p>
            <div className="grid sm:grid-cols-3 gap-3">
              <Link
                to="/tools/scam-message-decoder"
                className="p-3 rounded-lg border border-border hover:border-primary/50 hover:bg-primary/5 transition-all"
              >
                <p className="font-medium text-sm">Scam Message Decoder</p>
                <p className="text-xs text-muted-foreground mt-0.5">Paste the suspicious email and check it.</p>
              </Link>
              <Link
                to="/tools/scam-witness-statement"
                className="p-3 rounded-lg border border-border hover:border-primary/50 hover:bg-primary/5 transition-all"
              >
                <p className="font-medium text-sm">Witness Statement Builder</p>
                <p className="text-xs text-muted-foreground mt-0.5">Build a clean report for the FBI and police.</p>
              </Link>
              <Link
                to="/tools/online-banking-safety"
                className="p-3 rounded-lg border border-border hover:border-primary/50 hover:bg-primary/5 transition-all"
              >
                <p className="font-medium text-sm">Online Banking Safety</p>
                <p className="text-xs text-muted-foreground mt-0.5">Lock down the account before the next wire.</p>
              </Link>
            </div>
          </div>

          <p className="text-xs text-muted-foreground mt-4 flex items-center gap-1">
            <ChevronRight className="h-3 w-3" /> Quick Tip: the day you sign a purchase agreement, write the title company&apos;s real phone number on a paper card and tape it to your monitor. That number is the only one you trust during closing week.
          </p>
        </div>
      </main>

      <Footer />
    </>
  );
}

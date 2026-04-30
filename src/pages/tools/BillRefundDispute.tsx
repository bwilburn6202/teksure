import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { PageBreadcrumb } from '@/components/PageBreadcrumb';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import {
  Receipt, ChevronRight, ExternalLink, AlertTriangle,
  CreditCard, Hospital, BedDouble, RefreshCw, Zap,
} from 'lucide-react';

type DisputeType = 'credit-card' | 'hospital' | 'hotel-rental' | 'subscription' | 'utility';

interface DisputeStep {
  title: string;
  detail: string;
  link?: { label: string; href: string };
  callOut?: string;
}

const TYPES: { id: DisputeType; label: string; sub: string; icon: typeof CreditCard }[] = [
  { id: 'credit-card',  label: 'Credit or debit card charge',     sub: 'Wrong amount, double-billed, or a charge you did not make', icon: CreditCard },
  { id: 'hospital',     label: 'Hospital or medical bill',        sub: 'Surprise bill, charges that look wrong, or balance billing', icon: Hospital },
  { id: 'hotel-rental', label: 'Hotel or rental car charge',      sub: 'Damage fee, "incidentals", or a rate that changed at checkout', icon: BedDouble },
  { id: 'subscription', label: 'Recurring subscription or app',   sub: 'Charged after you cancelled, free trial that auto-renewed', icon: RefreshCw },
  { id: 'utility',      label: 'Utility bill (power, water, gas, internet)', sub: 'Bill suddenly doubled, meter looks wrong, mystery fees', icon: Zap },
];

const PLANS: Record<DisputeType, DisputeStep[]> = {
  'credit-card': [
    {
      title: 'Gather the charge details',
      detail: 'Pull up the statement (paper or in the app). Write down the date, the merchant name, the exact amount, and what you think went wrong. Keep any receipts or emails you have.',
    },
    {
      title: 'Try the merchant first (optional but smart)',
      detail: 'A quick call or email to the store can sometimes fix it in minutes — and it shows the bank you tried. If they refuse or never respond within a few days, move on to the bank.',
    },
    {
      title: 'Open a dispute with your card issuer',
      detail: 'Call the number on the back of the card or use the bank app — most have a "Dispute a charge" button right next to each transaction. Tell them: "I want to dispute this charge under the Fair Credit Billing Act."',
      callOut: 'Federal law gives you 60 days from the statement date to dispute. After 60 days, the bank can refuse — so do not sit on it.',
    },
    {
      title: 'Send a written follow-up letter',
      detail: 'After the phone call, mail a short letter to the bank\'s billing-inquiries address (on the back of the statement). Include your name, account number, the charge details, and what you want fixed. Send it certified mail so you have proof.',
    },
    {
      title: 'Hold the disputed amount — do not pay it',
      detail: 'While the dispute is open, you do not have to pay the disputed charge or interest on it. Keep paying the rest of your bill as normal so the account stays in good standing.',
    },
    {
      title: 'Wait for the response (up to 90 days)',
      detail: 'The bank has 30 days to acknowledge your letter and 90 days total to resolve it. If they side with you, the charge is reversed. If not, they must explain in writing — and you can escalate to the CFPB.',
      link: { label: 'File a complaint with the CFPB', href: 'https://www.consumerfinance.gov/complaint/' },
    },
  ],
  hospital: [
    {
      title: 'Request an itemized bill',
      detail: 'The bill you got in the mail is usually a summary. Call the hospital\'s billing office and say: "Please send me a fully itemized bill with every charge code." They are required to provide it. Most errors hide in the summary.',
      callOut: 'Roughly 80% of hospital bills contain at least one error — duplicate charges, wrong room rates, services you never received.',
    },
    {
      title: 'Compare it to your insurance EOB',
      detail: 'Your insurance company sends an Explanation of Benefits (EOB) — what they paid, what you owe. Line up the EOB next to the itemized bill. Anything on the bill that is not on the EOB is worth questioning.',
    },
    {
      title: 'Call billing and dispute the line items',
      detail: 'Go through the itemized bill line by line on the phone. Ask: "What is this code? Why was I charged for this?" Take notes — name of person, date, what they said. Ask for a corrected bill in writing.',
    },
    {
      title: 'Ask about financial assistance and payment plans',
      detail: 'Every nonprofit hospital is required by law to offer a financial-assistance program. Even if you have insurance, you can often get the bill cut by 30-70% based on income. Ask: "Do you have a financial-assistance application?"',
      link: { label: 'Hospital billing rights (CMS)', href: 'https://www.cms.gov/medical-bill-rights' },
    },
    {
      title: 'Dispute surprise bills under the No Surprises Act',
      detail: 'If you got an out-of-network bill from an emergency room, an anesthesiologist, or a lab during an in-network visit, federal law protects you. Call the No Surprises Help Desk: 1-800-985-3059.',
      link: { label: 'No Surprises Act help', href: 'https://www.cms.gov/nosurprises' },
    },
    {
      title: 'Do not let it go to collections without writing back',
      detail: 'If a debt collector contacts you, send a written request for "validation" within 30 days. They must prove the debt is yours and accurate. Until they do, they cannot legally keep collecting.',
    },
  ],
  'hotel-rental': [
    {
      title: 'Stop at the front desk before you check out',
      detail: 'In-person, with a calm tone, walk through the bill line by line with the desk clerk. Most disputes are resolved on the spot — they have the authority to remove charges without a manager.',
    },
    {
      title: 'Ask for the manager if the clerk cannot help',
      detail: 'Politely ask: "Could I speak with the duty manager about this charge?" Have the original confirmation email or quote ready on your phone. A printed quote almost always wins over a verbal one.',
    },
    {
      title: 'Get the removal in writing before you leave',
      detail: 'If they agree to take a charge off, ask them to print a corrected folio (the itemized hotel bill) showing the new total. Take a photo of it. Without paper, the charge can reappear days later.',
    },
    {
      title: 'For rental cars: photograph the car at pickup and drop-off',
      detail: 'Walk around the car with your phone\'s camera before you drive away and again when you return. Time-stamped photos kill 90% of damage-fee disputes. If they bill you for damage later, email the photos to their claims address.',
    },
    {
      title: 'If they refuse, dispute with your card issuer',
      detail: 'Once you are home, call the credit card you paid with. This counts as a billing error under the Fair Credit Billing Act — same 60-day window. Send the bank your photos, the original quote, and the corrected folio.',
      callOut: 'Pay hotels and rental cars with a credit card, never debit. Credit cards have stronger dispute protection by federal law.',
    },
    {
      title: 'Leave an honest review only after the dispute closes',
      detail: 'A factual public review (Google, TripAdvisor, the booking site) often gets a corporate response faster than a phone call. But wait until the dispute is resolved so you can describe the full story.',
    },
  ],
  subscription: [
    {
      title: 'Cancel inside the app or website first',
      detail: 'Find Settings → Subscriptions (or Account → Billing). Take a screenshot of the cancellation confirmation page and the email they send. You will need that proof later.',
    },
    {
      title: 'For app-store subscriptions, cancel in the store',
      detail: 'iPhone: Settings → your name → Subscriptions. Android: Play Store → profile → Payments & subscriptions. Cancelling inside the app itself does not always work — Apple and Google control the billing.',
      link: { label: 'Cancel an Apple subscription', href: 'https://support.apple.com/en-us/HT202039' },
    },
    {
      title: 'Email the company asking for a refund',
      detail: 'Short, factual: "I cancelled on [date] but was charged $X on [date]. Please refund this charge to my original payment method." Attach the cancellation screenshot. Most companies refund without a fight if you ask within 30 days.',
    },
    {
      title: 'Ask your bank for a stop-payment on the merchant',
      detail: 'If the company keeps charging you after you cancelled, call the bank and ask for a "merchant stop-payment" or "block this merchant." This is different from a one-time dispute — it stops all future charges from that company.',
    },
    {
      title: 'Dispute the charges that already hit',
      detail: 'For each charge after your cancellation date, file a separate dispute with the bank. Provide the cancellation email or screenshot. Banks treat these as clear-cut billing errors and usually refund within a week.',
      callOut: 'Federal law gives you 60 days from each statement to dispute that month\'s charge — every month is its own clock.',
    },
    {
      title: 'Report repeat-offender companies',
      detail: 'If a company keeps making it hard to cancel or refuses refunds, file a complaint with the FTC. The "click-to-cancel" rule means they must let you cancel as easily as you signed up.',
      link: { label: 'Report to the FTC', href: 'https://reportfraud.ftc.gov/' },
    },
  ],
  utility: [
    {
      title: 'Read the meter yourself',
      detail: 'Go outside (or to your basement) and read the actual number on the meter. Compare it to the "current read" on your bill. If your reading is much lower, the bill is based on an estimate — ask for a re-read.',
    },
    {
      title: 'Call customer service and ask for a "billing review"',
      detail: 'Have the bill in front of you. Ask: "Can you walk me through every line item? Why is this month higher than last month?" Take down the rep\'s name and a reference number. Many errors are fixed on this call.',
    },
    {
      title: 'Send a written dispute within 30 days',
      detail: 'Most state utility commissions give you 30 days from the bill date to dispute in writing. Mail or email a short letter listing the bill date, the amount you dispute, and why. Keep a copy.',
      callOut: 'While a written dispute is open, the utility legally cannot shut off your service for the disputed amount. Pay the undisputed portion to keep that protection.',
    },
    {
      title: 'Ask for a payment plan if you cannot pay it all',
      detail: 'Every regulated utility offers a payment plan — all you have to do is ask. Many also have a "winter shutoff moratorium" or low-income assistance program (LIHEAP for energy bills) that can wipe out hundreds of dollars.',
      link: { label: 'LIHEAP energy assistance', href: 'https://www.acf.hhs.gov/ocs/programs/liheap' },
    },
    {
      title: 'Escalate to your state utility commission',
      detail: 'If the company will not budge, file a complaint with your state\'s public utility commission (PUC) or public service commission (PSC). They have authority to force a correction. Search "[your state] public utility commission complaint."',
    },
    {
      title: 'Watch for crammed third-party charges',
      detail: 'Phone and internet bills sometimes include charges from third-party companies you never signed up with — called "cramming." Look for unfamiliar line items. Ask your provider to remove them and add a "third-party billing block" to your account.',
    },
  ],
};

export default function BillRefundDispute() {
  const [picked, setPicked] = useState<DisputeType | null>(null);

  const restart = () => setPicked(null);
  const steps = picked ? PLANS[picked] : null;
  const pickedMeta = picked ? TYPES.find(t => t.id === picked) : null;

  return (
    <>
      <SEOHead
        title="Bill or Refund Dispute Helper"
        description="Wrong charge on a bill? Pick the type — credit card, hospital, hotel, subscription, or utility — and get a clear, step-by-step plan to dispute it and get your money back."
        path="/tools/bill-refund-dispute"
      />
      <Navbar />

      <main className="min-h-screen bg-background">
        <section className="bg-gradient-to-br from-blue-50 via-background to-emerald-50 dark:from-blue-950/20 dark:to-emerald-950/20 border-b border-border py-10 px-4">
          <div className="container max-w-3xl mx-auto text-center">
            <div className="flex justify-center mb-3">
              <div className="p-3 bg-blue-500/10 rounded-full">
                <Receipt className="h-8 w-8 text-blue-600" />
              </div>
            </div>
            <h1 className="text-3xl md:text-4xl font-bold mb-2">Bill or Refund Dispute Helper</h1>
            <p className="text-muted-foreground text-lg max-w-xl mx-auto">
              Pick the type of bill — we will give you a clear, step-by-step plan to dispute it and get your money back.
            </p>
          </div>
        </section>

        <div className="container max-w-3xl mx-auto px-4 py-8">
          <PageBreadcrumb segments={[{ label: 'Tools', href: '/tools' }, { label: 'Bill Refund Dispute' }]} />

          {!picked ? (
            <Card className="border-border shadow-sm mb-6">
              <CardContent className="p-6">
                <p className="text-sm font-semibold mb-1">What kind of charge are you disputing?</p>
                <p className="text-xs text-muted-foreground mb-4">Pick the closest match.</p>
                <div className="space-y-2">
                  {TYPES.map(t => {
                    const Icon = t.icon;
                    return (
                      <button
                        key={t.id}
                        onClick={() => setPicked(t.id)}
                        className="w-full flex items-start gap-3 p-3 rounded-lg border border-border hover:border-primary hover:bg-primary/5 transition-all text-left"
                      >
                        <Icon className="h-5 w-5 text-muted-foreground shrink-0 mt-0.5" />
                        <div className="flex-1">
                          <p className="font-medium text-sm">{t.label}</p>
                          <p className="text-xs text-muted-foreground mt-0.5">{t.sub}</p>
                        </div>
                        <ChevronRight className="h-4 w-4 text-muted-foreground mt-1" />
                      </button>
                    );
                  })}
                </div>
              </CardContent>
            </Card>
          ) : (
            <>
              <Card className="border-amber-300 bg-amber-50 dark:bg-amber-950/20 mb-6">
                <CardContent className="p-5 flex gap-3">
                  <AlertTriangle className="h-5 w-5 text-amber-600 shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold text-sm">If a debt collector contacts you, demand a written validation letter.</p>
                    <p className="text-xs text-muted-foreground mt-1">
                      Real collectors must mail you a validation letter within 5 days of first contact, listing the amount, the original creditor, and your right to dispute. No letter? It is almost certainly a scam — do not pay.
                    </p>
                  </div>
                </CardContent>
              </Card>

              {pickedMeta && (
                <div className="flex items-center gap-2 mb-3">
                  <Badge variant="outline" className="text-xs">{pickedMeta.label}</Badge>
                  <p className="text-xs text-muted-foreground">Follow these in order — most disputes are won at step 1 or 2.</p>
                </div>
              )}

              <div className="space-y-3 mb-6">
                {steps?.map((step, i) => (
                  <Card key={i} className="border-border">
                    <CardContent className="p-4">
                      <p className="font-semibold text-sm mb-1">{i + 1}. {step.title}</p>
                      <p className="text-sm text-muted-foreground">{step.detail}</p>
                      {step.callOut && (
                        <p className="text-xs mt-2 p-2 rounded bg-muted/40 border border-border">
                          <strong>Tip:</strong> {step.callOut}
                        </p>
                      )}
                      {step.link && (
                        step.link.href.startsWith('/') ? (
                          <Link to={step.link.href}
                            className="inline-flex items-center gap-1 mt-2 text-xs text-primary hover:underline">
                            {step.link.label} <ChevronRight className="h-3 w-3" />
                          </Link>
                        ) : (
                          <a href={step.link.href} target="_blank" rel="noreferrer"
                            className="inline-flex items-center gap-1 mt-2 text-xs text-primary hover:underline">
                            {step.link.label} <ExternalLink className="h-3 w-3" />
                          </a>
                        )
                      )}
                    </CardContent>
                  </Card>
                ))}
              </div>

              <div className="flex flex-wrap gap-3 mt-6">
                <Button variant="outline" onClick={restart}>Pick a different type</Button>
                <Button asChild>
                  <Link to="/tools/refund-and-return-helper">Refund and return helper</Link>
                </Button>
              </div>
            </>
          )}

          <div className="mt-10 pt-8 border-t border-border">
            <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-3">Related</p>
            <div className="grid sm:grid-cols-3 gap-3">
              <Link to="/tools/online-banking-safety" className="p-3 rounded-lg border border-border hover:border-primary/50 hover:bg-primary/5 transition-all">
                <p className="font-medium text-sm">Online Banking Safety</p>
                <p className="text-xs text-muted-foreground mt-0.5">Keep your accounts locked down.</p>
              </Link>
              <Link to="/tools/scam-message-decoder" className="p-3 rounded-lg border border-border hover:border-primary/50 hover:bg-primary/5 transition-all">
                <p className="font-medium text-sm">Scam Message Decoder</p>
                <p className="text-xs text-muted-foreground mt-0.5">Spot fake "you owe money" texts.</p>
              </Link>
              <Link to="/tools/refund-and-return-helper" className="p-3 rounded-lg border border-border hover:border-primary/50 hover:bg-primary/5 transition-all">
                <p className="font-medium text-sm">Refund and Return Helper</p>
                <p className="text-xs text-muted-foreground mt-0.5">Get your money back from any retailer.</p>
              </Link>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}

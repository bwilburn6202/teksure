import { useState } from 'react';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { PageBreadcrumb } from '@/components/PageBreadcrumb';
import { Badge } from '@/components/ui/badge';
import {
  Stethoscope,
  AlertTriangle,
  CheckCircle2,
  HelpCircle,
  ChevronDown,
  ChevronUp,
  ShieldAlert,
  Info,
} from 'lucide-react';

interface Field {
  key: string;
  label: string;
  sample: string;
  plain: string;
}

interface FieldGroup {
  id: string;
  title: string;
  intro: string;
  fields: Field[];
}

const groups: FieldGroup[] = [
  {
    id: 'header',
    title: 'Header Section',
    intro: 'This tells you who the EOB is about and which visit it covers.',
    fields: [
      { key: 'subscriber', label: 'Subscriber / Member name', sample: 'JANE Q DOE', plain: 'The person who holds the insurance policy. That could be you, a spouse, or a parent if you are on a family plan.' },
      { key: 'member-id', label: 'Member ID', sample: 'XJD123456789', plain: 'Your unique ID on the insurance plan. You\'ll find this on your insurance card.' },
      { key: 'group', label: 'Group number', sample: 'GRP-00487', plain: 'Identifies your employer\'s plan. Not all plans have this — individual plans usually don\'t.' },
      { key: 'dos', label: 'Date of service', sample: '03/12/2026', plain: 'The day the care happened. Double check this — billing errors often start here.' },
      { key: 'provider', label: 'Provider', sample: 'DR. SAMUEL REYES, MD — SPRINGFIELD FAMILY MEDICINE', plain: 'The doctor, hospital, or lab that provided the care.' },
      { key: 'claim', label: 'Claim number', sample: 'CLM-202603-778214', plain: 'The insurance company\'s tracking number for this specific claim. Write it down before you call.' },
    ],
  },
  {
    id: 'financial',
    title: 'Financial Breakdown (this is where people get confused)',
    intro: 'This is the math. Read it left to right: what was charged, what insurance agreed to, what they paid, and what you owe.',
    fields: [
      { key: 'billed', label: 'Billed amount (Charge)', sample: '$420.00', plain: 'What the provider CHARGED. This is often 2–5× what anyone actually pays. Almost no one pays "billed" — insurance negotiates it way down.' },
      { key: 'allowed', label: 'Allowed amount (Eligible)', sample: '$186.00', plain: 'What insurance AGREES is reasonable for this service. The difference between billed and allowed is usually the in-network discount — and you owe $0 on that difference if the provider is in network.' },
      { key: 'contract', label: 'Contracted adjustment / Discount', sample: '$234.00', plain: 'The amount written off because of the network agreement. You don\'t pay this. The provider can\'t bill you for it if they\'re in network.' },
      { key: 'deductible', label: 'Deductible applied', sample: '$86.00', plain: 'Amount applied toward your annual deductible (the amount you pay before insurance really kicks in). This IS your responsibility.' },
      { key: 'copay', label: 'Copay', sample: '$30.00', plain: 'A fixed fee you pay for a visit (e.g., $30 for primary care, $50 for specialist). Paid at the time of visit in most cases.' },
      { key: 'coinsurance', label: 'Coinsurance', sample: '$14.00', plain: 'A percentage you pay after you\'ve met your deductible — commonly 10%, 20%, or 30% of the allowed amount.' },
      { key: 'plan-paid', label: 'Plan paid (Insurance paid)', sample: '$56.00', plain: 'What insurance actually sent to the provider.' },
      { key: 'responsibility', label: 'Your responsibility / Patient owes', sample: '$130.00', plain: 'The bottom line. This is the most YOU can be asked to pay. If the provider bills you for more, something is wrong.' },
    ],
  },
];

interface Code {
  code: string;
  meaning: string;
  detail: string;
}

const codes: Code[] = [
  { code: 'PR', meaning: 'Patient Responsibility', detail: 'You owe this part (deductible, copay, coinsurance).' },
  { code: 'CO', meaning: 'Contractual Obligation', detail: 'Written off because of the network contract. You don\'t pay this — neither does the plan.' },
  { code: 'OA', meaning: 'Other Adjustment', detail: 'Reduced for some other reason (duplicate, coordination of benefits, etc.).' },
  { code: 'PI', meaning: 'Payer Initiated Reduction', detail: 'Insurance reduced it for a non-contractual reason.' },
  { code: '1', meaning: 'Deductible amount', detail: 'Applied to your yearly deductible.' },
  { code: '2', meaning: 'Coinsurance amount', detail: 'Your percentage share.' },
  { code: '3', meaning: 'Copayment amount', detail: 'Your flat copay.' },
  { code: '45', meaning: 'Charge exceeds fee schedule', detail: 'Provider charged more than the negotiated rate — you don\'t pay the difference in network.' },
  { code: '96', meaning: 'Non-covered charge', detail: 'Your plan doesn\'t cover this service. You may owe it — but check if an appeal or coding fix is possible.' },
  { code: '197', meaning: 'Precertification / authorization not obtained', detail: 'Often appealable — the provider may not have filed the right paperwork.' },
];

interface Scenario {
  id: string;
  title: string;
  body: React.ReactNode;
}

const scenarios: Scenario[] = [
  {
    id: 'bill-higher',
    title: 'Wait — I got a bill for MORE than the EOB says I owe',
    body: (
      <>
        <p>This is the single most common EOB problem. The fix starts with three questions:</p>
        <ol className="list-decimal pl-5 mt-3 space-y-2">
          <li><strong>Is the provider in network?</strong> If yes and they billed you for the contractual adjustment, that's called <em>balance billing</em> and it's usually not legal under your plan's contract. Call both the provider and insurer.</li>
          <li><strong>Is the "No Surprises Act" in play?</strong> If you got emergency care, or care at an in-network facility from an out-of-network provider you didn't choose (anesthesiologist, radiologist, etc.), you are federally protected from balance billing. Dispute at cms.gov/nosurprises.</li>
          <li><strong>Is the bill from a different visit?</strong> Check the dates. Sometimes it's just an older claim you forgot about.</li>
        </ol>
        <p className="mt-3">Before paying any medical bill, always wait for the matching EOB and compare the numbers. Never pay a bill that's higher than the EOB's "patient owes" line.</p>
      </>
    ),
  },
  {
    id: 'disagree',
    title: "I disagree with how they processed this",
    body: (
      <>
        <p>You have the right to appeal any insurance decision. The EOB itself usually lists the appeal deadline — often 180 days from the date on the EOB.</p>
        <ol className="list-decimal pl-5 mt-3 space-y-2">
          <li>Call the member services number on the back of your insurance card and ask exactly why the claim was processed this way.</li>
          <li>Ask the provider's billing office to resubmit with a corrected CPT or diagnosis code if there's a coding issue.</li>
          <li>File a formal written appeal — include the claim number, EOB, medical records, and a clear letter. Keep copies.</li>
          <li>If your appeal is denied, you have the right to an <strong>external review</strong> by an independent third party.</li>
          <li>For state-regulated plans, your state insurance commissioner can also help. For self-funded employer plans, contact the Department of Labor.</li>
        </ol>
      </>
    ),
  },
  {
    id: 'owe-nothing',
    title: 'The EOB says I owe $0 — but the provider still tried to bill me',
    body: (
      <>
        <p>Great news — you don't owe anything. Send the provider a copy of the EOB with the "patient owes" amount circled and a short note saying the claim is fully settled.</p>
        <p className="mt-3">If you already paid them up front (e.g., a copay at check-in that turned out not to apply), they owe you a refund. Many providers won't issue it unless you ask — so ask.</p>
      </>
    ),
  },
  {
    id: 'prior-auth',
    title: 'Prior authorization was denied',
    body: (
      <>
        <p>Prior auth denials are one of the most appealable categories. Common reasons and fixes:</p>
        <ul className="list-disc pl-5 mt-3 space-y-2">
          <li><strong>"Not medically necessary":</strong> Ask your doctor to submit a letter of medical necessity with records and literature supporting the treatment.</li>
          <li><strong>"Experimental / investigational":</strong> If it's FDA-approved and your doctor recommends it, appeal with research.</li>
          <li><strong>"Try a cheaper option first":</strong> If you've already tried and failed the step-therapy drugs, appeal with dates and outcomes.</li>
          <li><strong>Paperwork issue:</strong> Often the provider just didn't submit the right form. Call both sides and get them on the same page.</li>
        </ul>
        <p className="mt-3">If care is urgent, ask for an <strong>expedited appeal</strong> — decisions in 72 hours or less.</p>
      </>
    ),
  },
];

export default function EobDecoder() {
  const [open, setOpen] = useState<string | null>('header');
  const [openScenario, setOpenScenario] = useState<string | null>(null);

  return (
    <>
      <SEOHead
        title="Insurance EOB Decoder — Understand Your Explanation of Benefits | TekSure"
        description="Your insurance EOB, decoded. Every field, code, and dollar amount explained in plain English — and what to do when a bill doesn't match."
        path="/tools/eob-decoder"
      />
      <Navbar />
      <main className="min-h-screen bg-background">
        <div className="container pt-4">
          <PageBreadcrumb segments={[{ label: 'Tools', href: '/tools' }, { label: 'EOB Decoder' }]} />
        </div>

        <section className="border-b">
          <div className="container py-12 md:py-16 max-w-3xl">
            <div className="flex items-center gap-3 mb-4">
              <div className="h-12 w-12 rounded-2xl bg-rose-50 dark:bg-rose-950/30 flex items-center justify-center flex-shrink-0">
                <Stethoscope className="h-6 w-6 text-rose-600" aria-hidden="true" />
              </div>
              <Badge variant="secondary">Free Tool</Badge>
            </div>
            <h1 className="text-3xl md:text-4xl font-bold tracking-tight mb-3">
              What Does This Insurance Statement Actually Mean?
            </h1>
            <p className="text-muted-foreground text-lg">
              Pull out your Explanation of Benefits and we'll go line by line. By the time you finish this page you'll know what you owe, why, and what to do if it doesn't match the bill.
            </p>
          </div>
        </section>

        <div className="container py-10 pb-24 max-w-3xl space-y-10">
          <div className="rounded-2xl border-2 border-primary/20 bg-primary/5 p-6">
            <h2 className="text-lg font-bold mb-2 flex items-center gap-2">
              <Info className="h-5 w-5 text-primary" aria-hidden="true" />
              First: this is NOT a bill.
            </h2>
            <p className="text-sm text-muted-foreground leading-relaxed">
              An Explanation of Benefits (EOB) is a statement from your insurance company telling you how they processed a medical claim. It shows what the provider charged, what insurance paid, and what you may owe. A separate bill comes from the provider — and if it doesn't match the EOB, something is wrong.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold mb-4">Sample EOB — click any field to understand it</h2>
            <div className="rounded-2xl border border-border bg-card overflow-hidden">
              <div className="bg-muted/50 px-5 py-4 border-b border-border">
                <p className="text-xs font-mono uppercase text-muted-foreground">Blue Shield of Illinois — Explanation of Benefits</p>
                <p className="text-xs font-mono text-muted-foreground">This is not a bill.</p>
              </div>
              <div className="divide-y divide-border">
                {groups.map(group => {
                  const isOpen = open === group.id;
                  return (
                    <div key={group.id}>
                      <button
                        onClick={() => setOpen(isOpen ? null : group.id)}
                        className="w-full text-left px-5 py-4 flex items-center justify-between hover:bg-muted/40"
                        aria-expanded={isOpen}
                      >
                        <div>
                          <p className="font-semibold text-sm">{group.title}</p>
                          <p className="text-xs text-muted-foreground mt-0.5">{group.intro}</p>
                        </div>
                        {isOpen
                          ? <ChevronUp className="h-4 w-4 text-muted-foreground" aria-hidden="true" />
                          : <ChevronDown className="h-4 w-4 text-muted-foreground" aria-hidden="true" />}
                      </button>
                      {isOpen && (
                        <div className="bg-muted/20 px-5 py-4 space-y-3">
                          {group.fields.map(f => (
                            <details key={f.key} className="group rounded-xl border border-border bg-background">
                              <summary className="cursor-pointer list-none px-4 py-3 flex items-center justify-between gap-4">
                                <div className="flex-1 min-w-0">
                                  <p className="font-mono text-xs text-muted-foreground mb-0.5">{f.label}</p>
                                  <p className="font-mono text-sm font-semibold">{f.sample}</p>
                                </div>
                                <HelpCircle className="h-4 w-4 text-muted-foreground flex-shrink-0" aria-hidden="true" />
                              </summary>
                              <div className="px-4 pb-4 pt-2 text-sm text-muted-foreground leading-relaxed border-t border-border">
                                {f.plain}
                              </div>
                            </details>
                          ))}
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          <div>
            <h2 className="text-xl font-bold mb-2">Status / adjustment codes explained</h2>
            <p className="text-sm text-muted-foreground mb-4">
              Your EOB uses short codes to explain why each amount was adjusted. Here are the ones you'll see most.
            </p>
            <div className="grid grid-cols-1 gap-3">
              {codes.map(c => (
                <div key={c.code} className="rounded-2xl border border-border bg-card p-4 flex gap-4 items-start">
                  <div className="flex-shrink-0 w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center">
                    <span className="font-mono font-bold text-primary">{c.code}</span>
                  </div>
                  <div className="flex-1">
                    <p className="font-semibold text-sm mb-0.5">{c.meaning}</p>
                    <p className="text-sm text-muted-foreground leading-relaxed">{c.detail}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h2 className="text-xl font-bold mb-4">Common situations</h2>
            <div className="space-y-3">
              {scenarios.map(s => {
                const isOpen = openScenario === s.id;
                return (
                  <div key={s.id} className="rounded-2xl border border-border bg-card overflow-hidden">
                    <button
                      onClick={() => setOpenScenario(isOpen ? null : s.id)}
                      className="w-full text-left p-5 flex items-start justify-between gap-4"
                      aria-expanded={isOpen}
                    >
                      <h3 className="font-semibold text-base">{s.title}</h3>
                      {isOpen
                        ? <ChevronUp className="h-4 w-4 text-muted-foreground flex-shrink-0 mt-1" />
                        : <ChevronDown className="h-4 w-4 text-muted-foreground flex-shrink-0 mt-1" />}
                    </button>
                    {isOpen && (
                      <div className="px-5 pb-5 text-sm leading-relaxed border-t border-border pt-4 text-muted-foreground">
                        {s.body}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>

          <div className="rounded-2xl border border-red-200 dark:border-red-900 bg-red-50 dark:bg-red-950/20 p-6">
            <h2 className="text-lg font-bold mb-3 flex items-center gap-2 text-red-800 dark:text-red-300">
              <ShieldAlert className="h-5 w-5" aria-hidden="true" />
              Red flags on an EOB
            </h2>
            <ul className="space-y-2 text-sm text-red-800 dark:text-red-300">
              <li className="flex gap-2"><span>•</span> A service you didn't actually receive — possible billing fraud. Report to your insurer's fraud line.</li>
              <li className="flex gap-2"><span>•</span> The same service charged twice on the same date — duplicate billing, call the provider.</li>
              <li className="flex gap-2"><span>•</span> A provider name you don't recognize — did you actually see them? (Sometimes the billing name differs from the person you saw — check first.)</li>
              <li className="flex gap-2"><span>•</span> A date of service that doesn't match your actual visit.</li>
              <li className="flex gap-2"><span>•</span> Out-of-network when you specifically confirmed in-network — appeal using the "No Surprises Act."</li>
              <li className="flex gap-2"><span>•</span> A bill higher than the "patient owes" amount on the EOB.</li>
            </ul>
          </div>

          <div className="rounded-2xl border border-border bg-muted/50 p-6">
            <div className="flex gap-3 items-start">
              <AlertTriangle className="h-5 w-5 text-amber-600 flex-shrink-0 mt-0.5" aria-hidden="true" />
              <div>
                <p className="font-semibold text-sm mb-1">Rule of thumb</p>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Never pay a medical bill until you see the matching EOB. Line up both pieces of paper. The "patient responsibility" number on the EOB is the ceiling. You rarely owe the full "billed amount" — and you never owe the "contractual adjustment" if the provider is in network.
                </p>
              </div>
            </div>
          </div>

          <div className="rounded-2xl border border-border bg-card p-6">
            <h3 className="font-semibold text-base mb-2 flex items-center gap-2">
              <CheckCircle2 className="h-5 w-5 text-primary" aria-hidden="true" />
              Before you hang up with insurance, always ask:
            </h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li className="flex gap-2"><span>•</span> "Can you give me the call reference number?"</li>
              <li className="flex gap-2"><span>•</span> "What is the appeal deadline for this claim?"</li>
              <li className="flex gap-2"><span>•</span> "What's the exact reason code on this line?"</li>
              <li className="flex gap-2"><span>•</span> "Can you email or mail me a written confirmation of this conversation?"</li>
              <li className="flex gap-2"><span>•</span> "What's the rep's name I'm speaking to?"</li>
            </ul>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}

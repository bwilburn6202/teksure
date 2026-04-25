import { useState, useMemo } from 'react';
import { SEOHead } from '@/components/SEOHead';
import { PageBreadcrumb } from '@/components/PageBreadcrumb';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import {
  Stethoscope,
  AlertTriangle,
  CheckCircle2,
  HelpCircle,
  ChevronDown,
  ChevronUp,
  ShieldAlert,
  Search,
  Phone,
  ExternalLink,
  FileText,
  Receipt,
} from 'lucide-react';

// ---------------------------------------------------------------------------
// Sample EOB fields — used in the "click any field to understand it" tour
// ---------------------------------------------------------------------------

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
    title: 'Header section — who and when',
    intro: 'This tells you who the EOB is about and which visit it covers.',
    fields: [
      { key: 'subscriber', label: 'Subscriber / Member name', sample: 'JANE Q DOE', plain: 'The person who holds the insurance policy. That could be you, a spouse, or a parent if you are on a family plan.' },
      { key: 'member-id', label: 'Member ID', sample: 'XJD123456789', plain: 'Your unique ID on the insurance plan. You will find this on your insurance card.' },
      { key: 'group', label: 'Group number', sample: 'GRP-00487', plain: 'Identifies your employer\'s plan. Not all plans have this — individual and Medicare plans usually do not.' },
      { key: 'dos', label: 'Date of service', sample: '03/12/2026', plain: 'The day the care happened. Double-check this — billing errors often start here. If you did not get care that day, flag it.' },
      { key: 'provider', label: 'Provider', sample: 'DR. SAMUEL REYES, MD — SPRINGFIELD FAMILY MEDICINE', plain: 'The doctor, hospital, or lab that provided the care. Sometimes the billing name is the practice, not the person you saw — that is normal.' },
      { key: 'claim', label: 'Claim number', sample: 'CLM-202603-778214', plain: 'The insurance company\'s tracking number for this specific claim. Write it down before you call anyone.' },
    ],
  },
  {
    id: 'service',
    title: 'Service / procedure line',
    intro: 'This is what was done and how insurance coded it.',
    fields: [
      { key: 'cpt', label: 'CPT / procedure code', sample: '99213', plain: 'A five-digit code that describes the service. See the full decoder below — 99213 is a common office visit, for example.' },
      { key: 'description', label: 'Service description', sample: 'OFFICE/OUTPATIENT VISIT EST', plain: 'The plain-text version of the CPT code. "EST" means established patient (you have seen this doctor before).' },
      { key: 'diagnosis', label: 'Diagnosis code (ICD-10)', sample: 'E11.9', plain: 'A code for the reason for the visit. E11.9 means type 2 diabetes without complications. If this looks wrong, ask the provider to correct it — wrong diagnoses can affect other claims.' },
    ],
  },
  {
    id: 'financial',
    title: 'Financial breakdown — the dollar columns',
    intro: 'Read these left to right: what was charged, what insurance agreed to, what they paid, and what you owe.',
    fields: [
      { key: 'billed', label: 'Amount billed (Charge)', sample: '$420.00', plain: 'What the provider CHARGED. This is often 2–5x what anyone actually pays. Almost no one pays the "billed" amount — insurance negotiates it way down.' },
      { key: 'allowed', label: 'Amount approved (Allowed / Eligible)', sample: '$186.00', plain: 'What insurance AGREES is reasonable for this service. The difference between billed and allowed is usually the in-network discount — and you owe $0 on that difference if the provider is in network.' },
      { key: 'contract', label: 'Contracted adjustment / Discount', sample: '$234.00', plain: 'The amount written off because of the network agreement. You do NOT pay this. The provider cannot bill you for it if they are in network.' },
      { key: 'deductible', label: 'Deductible applied', sample: '$86.00', plain: 'Amount applied toward your annual deductible (the amount you pay before insurance really kicks in). This IS your responsibility.' },
      { key: 'copay', label: 'Copay', sample: '$30.00', plain: 'A fixed fee you pay for a visit (for example, $30 for primary care, $50 for a specialist). Often paid at the front desk when you check in.' },
      { key: 'coinsurance', label: 'Coinsurance', sample: '$14.00', plain: 'A percentage you pay after you have met your deductible — commonly 10%, 20%, or 30% of the allowed amount.' },
      { key: 'plan-paid', label: 'Amount insurance paid (Plan paid)', sample: '$56.00', plain: 'What insurance actually sent to the provider. You do not need to do anything with this number.' },
      { key: 'responsibility', label: 'You may owe / Patient responsibility', sample: '$130.00', plain: 'The bottom line. This is the MOST you can be asked to pay. If the provider later sends you a bill for more than this, something is wrong — do not pay it until you sort it out.' },
    ],
  },
];

// ---------------------------------------------------------------------------
// Common CPT procedure codes in plain English (~30)
// ---------------------------------------------------------------------------

interface CptCode {
  code: string;
  category: string;
  plain: string;
}

const cptCodes: CptCode[] = [
  { code: '99202', category: 'Office visit — new patient, short', plain: 'A basic visit with a doctor you have never seen before. Usually 15–29 minutes.' },
  { code: '99203', category: 'Office visit — new patient, medium', plain: 'A standard visit with a new doctor. 30–44 minutes. This is common for first-time appointments.' },
  { code: '99204', category: 'Office visit — new patient, longer', plain: 'A longer new-patient visit, often for a more complex issue. 45–59 minutes.' },
  { code: '99205', category: 'Office visit — new patient, long', plain: 'A complex first visit, 60–74 minutes. Often used for complicated histories or multiple issues.' },
  { code: '99211', category: 'Office visit — established patient, very short', plain: 'A brief check-in you had with staff (a nurse visit, blood pressure check, shot). Usually under 10 minutes.' },
  { code: '99212', category: 'Office visit — established, short', plain: 'A short follow-up visit with a doctor you have seen before. 10–19 minutes.' },
  { code: '99213', category: 'Office visit — established, standard', plain: 'The most common billing code for a regular follow-up visit. 20–29 minutes. If you went in for a cold or a medication refill, this is probably what you got.' },
  { code: '99214', category: 'Office visit — established, longer', plain: 'A longer follow-up, usually for two or more concerns or a more complex problem. 30–39 minutes.' },
  { code: '99215', category: 'Office visit — established, long', plain: 'A long or complex follow-up, 40–54 minutes. Used for serious or multi-issue visits.' },
  { code: '99395', category: 'Annual wellness visit — adult, established', plain: 'A yearly physical for an adult you have been seeing. Preventive — usually 100% covered with no copay on most plans.' },
  { code: '99397', category: 'Annual wellness visit — senior, established', plain: 'Annual wellness for patients 65 and older. On Medicare, the first one has a different code (G0438).' },
  { code: 'G0438', category: 'Medicare initial wellness visit', plain: 'Your first "Welcome to Medicare" or Annual Wellness Visit. Free under Medicare if billed correctly.' },
  { code: 'G0439', category: 'Medicare annual wellness (subsequent)', plain: 'The yearly follow-up wellness visit on Medicare. Free if billed as preventive.' },
  { code: '90471', category: 'Vaccine administration', plain: 'The fee for giving a shot (not the shot itself — the shot is billed separately).' },
  { code: '90686', category: 'Flu shot', plain: 'A standard seasonal flu vaccine. Usually 100% covered.' },
  { code: '90715', category: 'Tdap (tetanus, diphtheria, pertussis) shot', plain: 'A tetanus booster, often with whooping cough protection added.' },
  { code: '90732', category: 'Pneumonia vaccine', plain: 'A pneumonia shot (Pneumovax). Often free for seniors under Medicare.' },
  { code: '71045', category: 'Chest X-ray, single view', plain: 'A basic chest X-ray — one image.' },
  { code: '71046', category: 'Chest X-ray, two views', plain: 'A chest X-ray with two pictures (front and side).' },
  { code: '80050', category: 'General health panel (blood work)', plain: 'A broad blood test that includes chemistry, blood cell counts, and thyroid.' },
  { code: '80053', category: 'Comprehensive metabolic panel', plain: 'A common blood test that checks kidney function, liver function, blood sugar, and electrolytes.' },
  { code: '83036', category: 'Hemoglobin A1C', plain: 'A blood test that measures your average blood sugar over the last 3 months — for diabetes management.' },
  { code: '85025', category: 'Complete Blood Count (CBC) with differential', plain: 'The standard blood count — red cells, white cells, platelets. Very common.' },
  { code: '36415', category: 'Blood draw', plain: 'The act of drawing blood (the needle stick). Billed on top of the actual lab tests.' },
  { code: '93000', category: 'Electrocardiogram (EKG)', plain: 'A heart rhythm test — the sticky patches and paper printout.' },
  { code: 'G0008', category: 'Flu shot administration (Medicare)', plain: 'The fee for giving the flu shot on a Medicare plan. Free when billed correctly.' },
  { code: '77067', category: 'Screening mammogram', plain: 'A routine breast cancer screening. Free under most plans once a year after age 40.' },
  { code: '45378', category: 'Colonoscopy, diagnostic', plain: 'A colonoscopy performed to check on symptoms. Different code than a pure screening (which should be free).' },
  { code: 'G0121', category: 'Screening colonoscopy (Medicare)', plain: 'A preventive screening colonoscopy on Medicare. No copay or coinsurance if billed this way — if you are charged, ask them to re-bill.' },
  { code: '97110', category: 'Physical therapy — therapeutic exercise', plain: '15 minutes of supervised exercises with a physical therapist. Often one visit has 3–4 of these stacked.' },
];

// ---------------------------------------------------------------------------
// EOB adjustment codes (CARC / group codes)
// ---------------------------------------------------------------------------

interface Code {
  code: string;
  meaning: string;
  detail: string;
}

const codes: Code[] = [
  { code: 'PR', meaning: 'Patient Responsibility', detail: 'You owe this part (deductible, copay, or coinsurance).' },
  { code: 'CO', meaning: 'Contractual Obligation', detail: 'Written off because of the network contract. You do NOT pay this — and neither does the plan.' },
  { code: 'OA', meaning: 'Other Adjustment', detail: 'Reduced for some other reason (duplicate, coordination of benefits, etc.).' },
  { code: 'PI', meaning: 'Payer Initiated Reduction', detail: 'Insurance reduced it for a non-contractual reason.' },
  { code: '1', meaning: 'Deductible amount', detail: 'Applied to your yearly deductible.' },
  { code: '2', meaning: 'Coinsurance amount', detail: 'Your percentage share.' },
  { code: '3', meaning: 'Copayment amount', detail: 'Your flat copay.' },
  { code: '45', meaning: 'Charge exceeds fee schedule', detail: 'Provider charged more than the negotiated rate — you do not pay the difference in network.' },
  { code: '96', meaning: 'Non-covered charge', detail: 'Your plan does not cover this service. You may owe it — but ask if an appeal or coding fix is possible.' },
  { code: '197', meaning: 'Precertification / authorization not obtained', detail: 'Often appealable — the provider may not have filed the right paperwork.' },
];

// ---------------------------------------------------------------------------
// Common scenarios
// ---------------------------------------------------------------------------

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
          <li><strong>Is the provider in network?</strong> If yes and they billed you for the contractual adjustment, that is called <em>balance billing</em> and it is usually not allowed under your plan's contract. Call both the provider and your insurer.</li>
          <li><strong>Is the "No Surprises Act" in play?</strong> If you got emergency care, or care at an in-network facility from an out-of-network provider you did not choose (anesthesiologist, radiologist, etc.), you are federally protected from balance billing. Dispute at cms.gov/nosurprises.</li>
          <li><strong>Is the bill from a different visit?</strong> Check the dates. Sometimes it is just an older claim you forgot about.</li>
        </ol>
        <p className="mt-3">Before paying any medical bill, always wait for the matching EOB and compare the numbers. Never pay a bill that is higher than the EOB's "patient owes" line.</p>
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
          <li>Ask the provider's billing office to resubmit with a corrected CPT or diagnosis code if there is a coding issue.</li>
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
        <p>Great news — you do not owe anything. Send the provider a copy of the EOB with the "patient owes" amount circled and a short note saying the claim is fully settled.</p>
        <p className="mt-3">If you already paid them up front (for example, a copay at check-in that turned out not to apply), they owe you a refund. Many providers will not issue it unless you ask — so ask.</p>
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
          <li><strong>"Experimental / investigational":</strong> If it is FDA-approved and your doctor recommends it, appeal with research.</li>
          <li><strong>"Try a cheaper option first":</strong> If you have already tried and failed the step-therapy drugs, appeal with dates and outcomes.</li>
          <li><strong>Paperwork issue:</strong> Often the provider just did not submit the right form. Call both sides and get them on the same page.</li>
        </ul>
        <p className="mt-3">If care is urgent, ask for an <strong>expedited appeal</strong> — decisions in 72 hours or less.</p>
      </>
    ),
  },
];

// ---------------------------------------------------------------------------
// Main component
// ---------------------------------------------------------------------------

export default function EobDecoder() {
  const [open, setOpen] = useState<string | null>('header');
  const [openScenario, setOpenScenario] = useState<string | null>(null);
  const [cptSearch, setCptSearch] = useState('');

  // Line-by-line entry form state
  const [form, setForm] = useState({
    provider: '',
    dateOfService: '',
    cpt: '',
    billed: '',
    approved: '',
    insurancePaid: '',
    deductible: '',
    copay: '',
    coinsurance: '',
  });

  const updateForm = (key: keyof typeof form, value: string) =>
    setForm(prev => ({ ...prev, [key]: value }));

  const parseNum = (s: string) => {
    const n = parseFloat(s.replace(/[^0-9.\-]/g, ''));
    return isNaN(n) ? 0 : n;
  };

  const youMayOwe = useMemo(() => {
    return parseNum(form.deductible) + parseNum(form.copay) + parseNum(form.coinsurance);
  }, [form.deductible, form.copay, form.coinsurance]);

  const hasAnyFinancial =
    form.billed !== '' ||
    form.approved !== '' ||
    form.insurancePaid !== '' ||
    form.deductible !== '' ||
    form.copay !== '' ||
    form.coinsurance !== '';

  const isABillLater = youMayOwe > 0;

  const matchedCpt = useMemo(() => {
    if (!form.cpt) return null;
    return cptCodes.find(c => c.code.toLowerCase() === form.cpt.trim().toLowerCase()) || null;
  }, [form.cpt]);

  // Balance-billing flag: billed > approved AND approved > 0 means there is
  // a contractual write-off — if any of that is billed back to the patient
  // beyond "you may owe", it is probably illegal.
  const writeOff = Math.max(parseNum(form.billed) - parseNum(form.approved), 0);

  const filteredCpt = useMemo(() => {
    const q = cptSearch.trim().toLowerCase();
    if (!q) return cptCodes;
    return cptCodes.filter(
      c =>
        c.code.toLowerCase().includes(q) ||
        c.category.toLowerCase().includes(q) ||
        c.plain.toLowerCase().includes(q),
    );
  }, [cptSearch]);

  return (
    <>
      <SEOHead
        title="What Does My EOB Mean? — Insurance Statement Decoder | TekSure"
        description="Your insurance EOB, decoded in plain English. We walk through every field, CPT code, and dollar amount — and tell you whether it is actually a bill."
        path="/tools/eob-decoder"
      />
      <main className="min-h-screen bg-background">
        <div className="container pt-4">
          <PageBreadcrumb segments={[{ label: 'Tools', href: '/tools' }, { label: 'EOB Decoder' }]} />
        </div>

        {/* ---------------- HERO ---------------- */}
        <section className="border-b">
          <div className="container py-12 md:py-16 max-w-3xl">
            <div className="flex items-center gap-3 mb-4">
              <div className="h-12 w-12 rounded-2xl bg-rose-50 dark:bg-rose-950/30 flex items-center justify-center flex-shrink-0">
                <Stethoscope className="h-6 w-6 text-rose-600" aria-hidden="true" />
              </div>
              <Badge variant="secondary">Free Tool</Badge>
            </div>
            <h1 className="text-3xl md:text-5xl font-bold tracking-tight mb-4">
              What Does My EOB Mean?
            </h1>
            <p className="text-muted-foreground text-lg md:text-xl leading-relaxed">
              We'll help you read the insurance statement — no bills to pay here, most of the time.
            </p>
          </div>
        </section>

        <div className="container py-10 pb-24 max-w-3xl space-y-12">

          {/* ---------------- AMBER "THIS IS NOT A BILL" BANNER ---------------- */}
          <div
            role="alert"
            className="rounded-2xl border-4 border-amber-400 bg-amber-50 dark:bg-amber-950/30 dark:border-amber-500 p-6 md:p-7 shadow-sm"
          >
            <div className="flex items-start gap-4">
              <AlertTriangle className="h-8 w-8 md:h-10 md:w-10 text-amber-600 dark:text-amber-400 flex-shrink-0 mt-0.5" aria-hidden="true" />
              <div>
                <h2 className="text-2xl md:text-3xl font-extrabold text-amber-900 dark:text-amber-200 mb-2 tracking-tight">
                  THIS IS NOT A BILL
                </h2>
                <p className="text-base md:text-lg text-amber-900 dark:text-amber-100 leading-relaxed">
                  An <strong>Explanation of Benefits (EOB)</strong> is a statement from your insurance
                  company. It shows how they processed a medical claim. <strong>You do not send payment in
                  response to an EOB.</strong> A separate bill comes from the doctor or hospital — and you
                  only owe what it says under <em>"you may owe."</em> If the bill from the provider is higher
                  than that, something is wrong.
                </p>
              </div>
            </div>
          </div>

          {/* ---------------- LINE-BY-LINE INPUT FORM ---------------- */}
          <section>
            <h2 className="text-2xl font-bold mb-2">Decode your own EOB — line by line</h2>
            <p className="text-muted-foreground mb-6">
              Type what you see on your statement into the boxes below. We'll translate it, add up what you might actually owe, and tell you whether you should expect a bill later.
            </p>

            <div className="rounded-2xl border-2 border-border bg-card p-6 md:p-8 space-y-5">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div>
                  <Label htmlFor="provider" className="text-base font-semibold">Provider</Label>
                  <p className="text-xs text-muted-foreground mb-2">Doctor, clinic, or hospital name.</p>
                  <Input
                    id="provider"
                    className="h-12 text-base"
                    placeholder="Dr. Smith Family Medicine"
                    value={form.provider}
                    onChange={e => updateForm('provider', e.target.value)}
                  />
                </div>
                <div>
                  <Label htmlFor="dos" className="text-base font-semibold">Date of service</Label>
                  <p className="text-xs text-muted-foreground mb-2">The day you got care.</p>
                  <Input
                    id="dos"
                    className="h-12 text-base"
                    placeholder="03/12/2026"
                    value={form.dateOfService}
                    onChange={e => updateForm('dateOfService', e.target.value)}
                  />
                </div>
              </div>

              <div>
                <Label htmlFor="cpt" className="text-base font-semibold">Service / CPT code (optional)</Label>
                <p className="text-xs text-muted-foreground mb-2">A 5-digit code like 99213 — we'll decode it.</p>
                <Input
                  id="cpt"
                  className="h-12 text-base font-mono"
                  placeholder="99213"
                  value={form.cpt}
                  onChange={e => updateForm('cpt', e.target.value)}
                />
                {form.cpt && (
                  <div className={`mt-3 rounded-xl p-4 text-sm leading-relaxed ${matchedCpt ? 'bg-emerald-50 dark:bg-emerald-950/30 border border-emerald-200 dark:border-emerald-900' : 'bg-muted border border-border'}`}>
                    {matchedCpt ? (
                      <>
                        <p className="font-semibold mb-1">{matchedCpt.code} — {matchedCpt.category}</p>
                        <p className="text-muted-foreground">{matchedCpt.plain}</p>
                      </>
                    ) : (
                      <p className="text-muted-foreground">
                        We don't have that one in our common-codes list. Try searching the CPT decoder below or ask your provider what that code means.
                      </p>
                    )}
                  </div>
                )}
              </div>

              <hr className="border-border" />

              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div>
                  <Label htmlFor="billed" className="text-base font-semibold">Amount billed by provider</Label>
                  <p className="text-xs text-muted-foreground mb-2">The charge — often much higher than what anyone pays.</p>
                  <Input
                    id="billed"
                    className="h-12 text-base font-mono"
                    placeholder="420.00"
                    value={form.billed}
                    onChange={e => updateForm('billed', e.target.value)}
                    inputMode="decimal"
                  />
                </div>
                <div>
                  <Label htmlFor="approved" className="text-base font-semibold">Amount insurance approved</Label>
                  <p className="text-xs text-muted-foreground mb-2">The negotiated "allowed" amount.</p>
                  <Input
                    id="approved"
                    className="h-12 text-base font-mono"
                    placeholder="186.00"
                    value={form.approved}
                    onChange={e => updateForm('approved', e.target.value)}
                    inputMode="decimal"
                  />
                </div>
                <div>
                  <Label htmlFor="insPaid" className="text-base font-semibold">Amount insurance paid</Label>
                  <p className="text-xs text-muted-foreground mb-2">What your plan actually sent the provider.</p>
                  <Input
                    id="insPaid"
                    className="h-12 text-base font-mono"
                    placeholder="56.00"
                    value={form.insurancePaid}
                    onChange={e => updateForm('insurancePaid', e.target.value)}
                    inputMode="decimal"
                  />
                </div>
                <div>
                  <Label htmlFor="deductible" className="text-base font-semibold">Deductible applied</Label>
                  <p className="text-xs text-muted-foreground mb-2">Amount that counts toward your yearly deductible.</p>
                  <Input
                    id="deductible"
                    className="h-12 text-base font-mono"
                    placeholder="86.00"
                    value={form.deductible}
                    onChange={e => updateForm('deductible', e.target.value)}
                    inputMode="decimal"
                  />
                </div>
                <div>
                  <Label htmlFor="copay" className="text-base font-semibold">Copay</Label>
                  <p className="text-xs text-muted-foreground mb-2">Flat fee like $30.</p>
                  <Input
                    id="copay"
                    className="h-12 text-base font-mono"
                    placeholder="30.00"
                    value={form.copay}
                    onChange={e => updateForm('copay', e.target.value)}
                    inputMode="decimal"
                  />
                </div>
                <div>
                  <Label htmlFor="coinsurance" className="text-base font-semibold">Coinsurance</Label>
                  <p className="text-xs text-muted-foreground mb-2">Your percentage share (often 20%).</p>
                  <Input
                    id="coinsurance"
                    className="h-12 text-base font-mono"
                    placeholder="14.00"
                    value={form.coinsurance}
                    onChange={e => updateForm('coinsurance', e.target.value)}
                    inputMode="decimal"
                  />
                </div>
              </div>

              {/* ---------------- VERDICT BOX ---------------- */}
              {hasAnyFinancial && (
                <div className="pt-4 border-t-2 border-border">
                  <div className={`rounded-2xl p-6 ${isABillLater ? 'bg-amber-50 dark:bg-amber-950/30 border-2 border-amber-400' : 'bg-emerald-50 dark:bg-emerald-950/30 border-2 border-emerald-400'}`}>
                    <div className="flex items-start gap-3 mb-3">
                      {isABillLater ? (
                        <Receipt className="h-7 w-7 text-amber-700 dark:text-amber-300 flex-shrink-0" aria-hidden="true" />
                      ) : (
                        <CheckCircle2 className="h-7 w-7 text-emerald-700 dark:text-emerald-300 flex-shrink-0" aria-hidden="true" />
                      )}
                      <div>
                        <p className={`text-sm font-semibold uppercase tracking-wide ${isABillLater ? 'text-amber-800 dark:text-amber-200' : 'text-emerald-800 dark:text-emerald-200'}`}>
                          {isABillLater ? 'Is this a bill? — Not yet, but one is probably coming' : 'Is this a bill? — No, and you owe nothing'}
                        </p>
                        <p className="text-3xl md:text-4xl font-extrabold mt-1">
                          You may owe: ${youMayOwe.toFixed(2)}
                        </p>
                      </div>
                    </div>
                    <p className={`text-sm leading-relaxed ${isABillLater ? 'text-amber-900 dark:text-amber-100' : 'text-emerald-900 dark:text-emerald-100'}`}>
                      {isABillLater ? (
                        <>
                          The EOB itself is <strong>still not a bill.</strong> But the provider will usually
                          mail you a bill for this <strong>${youMayOwe.toFixed(2)}</strong> in the next few
                          weeks. When it arrives, make sure the total matches this amount. If it is higher,
                          do not pay until you have sorted it out.
                        </>
                      ) : (
                        <>
                          Your insurance covered this completely. The provider should not send you a bill.
                          If one arrives anyway, send them a copy of this EOB with the "$0 patient
                          responsibility" line circled.
                        </>
                      )}
                    </p>

                    {/* Write-off note */}
                    {writeOff > 0 && (
                      <p className="text-xs text-muted-foreground mt-4 leading-relaxed">
                        The <strong>${writeOff.toFixed(2)}</strong> difference between what the provider
                        billed and what insurance approved is a <strong>contractual write-off</strong>. You
                        do NOT pay that, even though it shows up on the statement. If the provider bills you
                        for it, that's called <em>balance billing</em> and it may be against the law.
                      </p>
                    )}
                  </div>
                </div>
              )}
            </div>
          </section>

          {/* ---------------- CLICK-THROUGH SAMPLE ---------------- */}
          <section>
            <h2 className="text-2xl font-bold mb-2">Or walk through a sample EOB</h2>
            <p className="text-muted-foreground mb-4">
              Click any field to open the <em>"What is this?"</em> plain-English explanation.
            </p>
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
                          <p className="font-semibold text-base">{group.title}</p>
                          <p className="text-sm text-muted-foreground mt-0.5">{group.intro}</p>
                        </div>
                        {isOpen
                          ? <ChevronUp className="h-5 w-5 text-muted-foreground flex-shrink-0 ml-3" aria-hidden="true" />
                          : <ChevronDown className="h-5 w-5 text-muted-foreground flex-shrink-0 ml-3" aria-hidden="true" />}
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
                                <div className="flex items-center gap-1.5 text-xs text-primary font-semibold flex-shrink-0">
                                  <HelpCircle className="h-4 w-4" aria-hidden="true" />
                                  What is this?
                                </div>
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
          </section>

          {/* ---------------- CPT CODE DECODER ---------------- */}
          <section>
            <h2 className="text-2xl font-bold mb-2">Common CPT procedure codes, decoded</h2>
            <p className="text-muted-foreground mb-4">
              CPT codes are the 5-digit numbers that describe what the doctor actually did. Here are the ones you'll see most often on an EOB.
            </p>
            <div className="relative mb-4">
              <Search className="h-5 w-5 text-muted-foreground absolute left-3 top-1/2 -translate-y-1/2" aria-hidden="true" />
              <Input
                className="h-12 pl-10 text-base"
                placeholder="Search by code or keyword (e.g., 99213, flu shot, blood draw)"
                value={cptSearch}
                onChange={e => setCptSearch(e.target.value)}
              />
            </div>
            <div className="rounded-2xl border border-border bg-card divide-y divide-border">
              {filteredCpt.length === 0 && (
                <div className="p-6 text-center text-sm text-muted-foreground">
                  No matches. Try a different term — or ask your provider for the plain-English name.
                </div>
              )}
              {filteredCpt.map(c => (
                <div key={c.code} className="p-4 flex gap-4 items-start">
                  <div className="flex-shrink-0 w-20 h-14 rounded-xl bg-primary/10 flex items-center justify-center">
                    <span className="font-mono font-bold text-primary text-sm">{c.code}</span>
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="font-semibold text-sm mb-0.5">{c.category}</p>
                    <p className="text-sm text-muted-foreground leading-relaxed">{c.plain}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* ---------------- ADJUSTMENT CODE DECODER ---------------- */}
          <section>
            <h2 className="text-2xl font-bold mb-2">Status / adjustment codes</h2>
            <p className="text-muted-foreground mb-4">
              Your EOB uses short codes to explain why each dollar amount was adjusted. Here are the ones you'll see most.
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
          </section>

          {/* ---------------- RED FLAGS ---------------- */}
          <section className="rounded-2xl border-2 border-red-300 dark:border-red-900 bg-red-50 dark:bg-red-950/20 p-6 md:p-8">
            <h2 className="text-xl md:text-2xl font-bold mb-2 flex items-center gap-2 text-red-900 dark:text-red-200">
              <ShieldAlert className="h-6 w-6" aria-hidden="true" />
              Red flags — signs of a billing error or fraud
            </h2>
            <p className="text-sm text-red-900 dark:text-red-200 mb-4">
              If you see any of these, stop and investigate before you pay anything.
            </p>
            <ul className="space-y-3 text-base text-red-900 dark:text-red-200 leading-relaxed">
              <li className="flex gap-3">
                <span className="flex-shrink-0 mt-1">•</span>
                <span><strong>Services you don't remember receiving.</strong> Even if it's a small lab fee — if you didn't get it, it shouldn't be on your EOB.</span>
              </li>
              <li className="flex gap-3">
                <span className="flex-shrink-0 mt-1">•</span>
                <span><strong>Amounts wildly different from what you expected.</strong> A $30 office visit suddenly billed at $800 is worth a phone call.</span>
              </li>
              <li className="flex gap-3">
                <span className="flex-shrink-0 mt-1">•</span>
                <span><strong>A provider name you don't recognize.</strong> Sometimes the billing name is the practice or a lab, not the person you saw — but always confirm.</span>
              </li>
              <li className="flex gap-3">
                <span className="flex-shrink-0 mt-1">•</span>
                <span><strong>Balance billing over the insurance-approved amount.</strong> If an in-network provider tries to bill you more than the "you may owe" line, that may be illegal under your plan's contract and the No Surprises Act.</span>
              </li>
              <li className="flex gap-3">
                <span className="flex-shrink-0 mt-1">•</span>
                <span><strong>The same service charged twice on the same day</strong> — classic duplicate billing error.</span>
              </li>
              <li className="flex gap-3">
                <span className="flex-shrink-0 mt-1">•</span>
                <span><strong>A date of service that doesn't match your actual visit.</strong></span>
              </li>
              <li className="flex gap-3">
                <span className="flex-shrink-0 mt-1">•</span>
                <span><strong>Out-of-network when you confirmed in-network.</strong> Appeal under the "No Surprises Act."</span>
              </li>
            </ul>
          </section>

          {/* ---------------- FRAUD REPORTING ---------------- */}
          <section className="rounded-2xl border-2 border-border bg-card p-6 md:p-8">
            <h2 className="text-xl md:text-2xl font-bold mb-2 flex items-center gap-2">
              <Phone className="h-6 w-6 text-primary" aria-hidden="true" />
              See something suspicious? Report it.
            </h2>
            <p className="text-base text-muted-foreground mb-5 leading-relaxed">
              Medicare fraud costs taxpayers billions every year. If a service on your EOB looks wrong and the provider won't fix it, you can report it in minutes.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <a
                href="https://www.medicare.gov/basics/reporting-medicare-fraud-and-abuse"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-2xl border-2 border-border bg-background p-5 hover:border-primary transition-colors flex items-start gap-3"
              >
                <ExternalLink className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" aria-hidden="true" />
                <div>
                  <p className="font-bold text-base mb-1">Medicare.gov/fraud</p>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Report Medicare fraud online. Works for Medicare Parts A, B, C, and D.
                  </p>
                </div>
              </a>
              <a
                href="tel:18006334227"
                className="rounded-2xl border-2 border-border bg-background p-5 hover:border-primary transition-colors flex items-start gap-3"
              >
                <Phone className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" aria-hidden="true" />
                <div>
                  <p className="font-bold text-base mb-1">1-800-MEDICARE</p>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    (1-800-633-4227) — Call 24/7. Tell them you want to report suspected fraud and have your Medicare number ready.
                  </p>
                </div>
              </a>
            </div>
            <p className="text-xs text-muted-foreground mt-4">
              For private insurance, call the fraud line on the back of your insurance card instead.
            </p>
          </section>

          {/* ---------------- SCENARIOS ---------------- */}
          <section>
            <h2 className="text-2xl font-bold mb-4">Common situations</h2>
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
                      <h3 className="font-semibold text-base md:text-lg">{s.title}</h3>
                      {isOpen
                        ? <ChevronUp className="h-5 w-5 text-muted-foreground flex-shrink-0 mt-1" aria-hidden="true" />
                        : <ChevronDown className="h-5 w-5 text-muted-foreground flex-shrink-0 mt-1" aria-hidden="true" />}
                    </button>
                    {isOpen && (
                      <div className="px-5 pb-5 text-sm md:text-base leading-relaxed border-t border-border pt-4 text-muted-foreground">
                        {s.body}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </section>

          {/* ---------------- RULES + OFFICIAL LINKS ---------------- */}
          <section className="rounded-2xl border border-border bg-muted/40 p-6">
            <div className="flex gap-3 items-start">
              <CheckCircle2 className="h-6 w-6 text-primary flex-shrink-0 mt-0.5" aria-hidden="true" />
              <div>
                <p className="font-bold text-base mb-1">Rule of thumb</p>
                <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                  Never pay a medical bill until you see the matching EOB. Line up both pieces of paper. The <strong>"you may owe"</strong> number on the EOB is the ceiling. You rarely owe the full "billed amount" — and you never owe the "contractual adjustment" if the provider is in network.
                </p>
              </div>
            </div>
          </section>

          <section className="rounded-2xl border border-border bg-card p-6">
            <h3 className="font-bold text-base md:text-lg mb-3 flex items-center gap-2">
              <FileText className="h-5 w-5 text-primary" aria-hidden="true" />
              See your official Medicare claims
            </h3>
            <p className="text-sm md:text-base text-muted-foreground mb-4 leading-relaxed">
              If you're on Medicare, you can see every claim ever filed on your behalf — and download your Medicare Summary Notices (the Medicare version of an EOB) — directly from the official website.
            </p>
            <Button asChild size="lg" className="w-full sm:w-auto">
              <a
                href="https://www.medicare.gov/claims"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2"
              >
                Open Medicare.gov/claims
                <ExternalLink className="h-4 w-4" aria-hidden="true" />
              </a>
            </Button>
          </section>

          <section className="rounded-2xl border border-border bg-card p-6">
            <h3 className="font-bold text-base md:text-lg mb-3 flex items-center gap-2">
              <HelpCircle className="h-5 w-5 text-primary" aria-hidden="true" />
              Before you hang up with insurance, always ask:
            </h3>
            <ul className="space-y-2 text-sm md:text-base text-muted-foreground">
              <li className="flex gap-2"><span>•</span> "Can you give me the call reference number?"</li>
              <li className="flex gap-2"><span>•</span> "What is the appeal deadline for this claim?"</li>
              <li className="flex gap-2"><span>•</span> "What's the exact reason code on this line?"</li>
              <li className="flex gap-2"><span>•</span> "Can you email or mail me a written confirmation of this conversation?"</li>
              <li className="flex gap-2"><span>•</span> "What's the name of the rep I'm speaking to?"</li>
            </ul>
          </section>
        </div>
      </main>
    </>
  );
}

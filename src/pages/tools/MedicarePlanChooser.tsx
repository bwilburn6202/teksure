import { useMemo, useState } from 'react';
import { SEOHead } from '@/components/SEOHead';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import {
  Stethoscope,
  ShieldCheck,
  Plane,
  UserCheck,
  Pill,
  HeartPulse,
  DollarSign,
  ExternalLink,
  Info,
  Sparkles,
  CheckCircle2,
  XCircle,
  AlertTriangle,
  Phone,
  Calendar,
  HelpCircle,
  RotateCcw,
} from 'lucide-react';

// ── Types ─────────────────────────────────────────────────────────────────────
type YesNo = 'yes' | 'no';
type YesNoSometimes = 'yes' | 'no' | 'sometimes';
type Manager = 'traditional' | 'private';
type CostPriority = 'lowest' | 'balance' | 'coverage';
type RxLevel = 'none' | '1-3' | '4+';

interface Answers {
  ageEligible: YesNo;
  manager: Manager;
  costPriority: CostPriority;
  travels: YesNo;
  keepDoctors: YesNo;
  prescriptions: RxLevel;
  chronicConditions: YesNoSometimes;
}

type PlanKey = 'original' | 'advantage' | 'dual';

interface PlanRecommendation {
  key: PlanKey;
  title: string;
  subtitle: string;
  accentClass: string;
  iconClass: string;
  icon: React.ComponentType<{ className?: string; 'aria-hidden'?: boolean }>;
  letters: string;
  covers: string[];
  monthlyCostRange: string;
  monthlyCostNote: string;
  prescriptions: string;
  extras: string;
  pros: string[];
  cons: string[];
  enrollmentPeriods: { name: string; when: string; what: string }[];
  bestFor: string;
  enrollUrl: string;
}

// ── Plan reference data (educational) ────────────────────────────────────────
const PLANS: Record<PlanKey, PlanRecommendation> = {
  original: {
    key: 'original',
    title: 'Original Medicare (Parts A + B)',
    subtitle: 'Run by the federal government. Add Medigap + Part D for full coverage.',
    accentClass: 'border-sky-500',
    iconClass: 'bg-sky-50 dark:bg-sky-950/30 text-sky-600',
    icon: ShieldCheck,
    letters: 'A + B + G + D',
    covers: [
      'Part A — Hospital stays, skilled nursing, hospice, some home health care',
      'Part B — Doctor visits, outpatient care, preventive screenings, medical equipment',
      'Medigap (Part G) — Pays most of what Original Medicare does not, like the 20% coinsurance',
      'Part D — A separate prescription drug plan (chosen from a private insurer)',
      'Any doctor or hospital in the US that accepts Medicare — no network restrictions',
    ],
    monthlyCostRange: '$175 – $400 / month (estimate)',
    monthlyCostNote:
      'Part B is about $185/mo for most people. A good Medigap Plan G runs $100–$200/mo. A Part D drug plan is $0–$70/mo. You may owe a higher premium if your income is above certain limits.',
    prescriptions: 'Not included — you must add a separate Part D prescription drug plan.',
    extras:
      'Dental, vision, and hearing are NOT included. You can buy a separate dental/vision plan, or pay out of pocket.',
    pros: [
      'Go to any Medicare-accepting doctor or hospital in the country — no referrals, no network',
      'Travels with you — works in all 50 states, great for snowbirds and visiting family',
      'With Medigap Plan G, you pay almost nothing out of pocket after the small Part B deductible',
      'Most predictable coverage — very few surprise bills',
      "Your coverage does not change year to year based on a private insurer's decisions",
    ],
    cons: [
      'Higher monthly premiums than Medicare Advantage',
      'Does NOT include dental, vision, or hearing aids',
      'You manage two or three cards: Medicare, Medigap, and Part D',
      'Medigap can be more expensive or harder to get if you apply after your initial window',
    ],
    enrollmentPeriods: [
      {
        name: 'Initial Enrollment Period (IEP)',
        when: '7-month window: 3 months before, the month of, and 3 months after your 65th birthday',
        what: 'This is the easiest time to enroll in Part A, Part B, and a Medigap plan with no medical questions',
      },
      {
        name: 'General Enrollment Period',
        when: 'January 1 – March 31 each year',
        what: 'If you missed your IEP, you can enroll here — but you may owe a permanent late penalty',
      },
      {
        name: 'Medigap Open Enrollment',
        when: '6 months starting the first month you have Part B and are 65+',
        what: 'Your one chance to buy ANY Medigap plan with no health questions — very important',
      },
      {
        name: 'Part D Annual Enrollment',
        when: 'October 15 – December 7 each year',
        what: 'Switch your prescription drug plan for the following year',
      },
    ],
    bestFor:
      'People who travel, want to keep specific doctors, have chronic conditions, or want the most predictable coverage',
    enrollUrl: 'https://www.medicare.gov/basics/get-started-with-medicare',
  },
  advantage: {
    key: 'advantage',
    title: 'Medicare Advantage (Part C)',
    subtitle: 'Bundled plan from a private insurer — usually includes drugs, dental, vision, hearing.',
    accentClass: 'border-emerald-500',
    iconClass: 'bg-emerald-50 dark:bg-emerald-950/30 text-emerald-600',
    icon: HeartPulse,
    letters: 'Part C',
    covers: [
      'Everything Part A and Part B cover (hospital and medical)',
      'Usually includes Part D prescription drug coverage built in',
      'Most plans include some dental, vision, and hearing benefits',
      'Some plans include gym memberships (SilverSneakers), over-the-counter allowances, or transportation',
      'Runs through a private insurance company like Humana, Aetna, UnitedHealthcare, Kaiser',
    ],
    monthlyCostRange: '$0 – $150 / month premium',
    monthlyCostNote:
      'Many plans advertise a $0 monthly premium — but you still pay your Part B premium (~$185/mo) AND copays/coinsurance when you use care. Out-of-pocket maximums range from $4,000 to $8,850 per year.',
    prescriptions: 'Usually included (called MAPD — Medicare Advantage Prescription Drug plan).',
    extras:
      'Often includes some dental, vision, and hearing — but coverage is usually limited (for example: $1,500/year dental cap, one eye exam, basic hearing aid allowance).',
    pros: [
      'Low or $0 monthly premium — attractive if you are on a fixed income',
      'One card, one plan, one insurance company to call',
      'Usually includes prescription drugs, dental, vision, and hearing in one bundle',
      'Out-of-pocket maximum caps your annual spending (Medigap has no cap, but also rarely has bills)',
      'Often includes extras like gym memberships or over-the-counter benefits',
    ],
    cons: [
      "Network restrictions — you must use doctors in the plan's HMO or PPO network, or pay much more",
      'Referrals often required to see a specialist',
      'Coverage and drug lists (formularies) can change every January',
      'May not work well when traveling — some plans only cover emergencies outside your area',
      'Prior authorization is common — the plan can refuse to cover care your doctor recommends',
      'If you later want to switch BACK to Original Medicare, you may not be able to buy Medigap without medical underwriting',
    ],
    enrollmentPeriods: [
      {
        name: 'Initial Enrollment Period (IEP)',
        when: '7-month window around your 65th birthday',
        what: 'You can pick a Medicare Advantage plan when you first become eligible',
      },
      {
        name: 'Annual Enrollment Period (AEP)',
        when: 'October 15 – December 7 each year',
        what: 'Switch Medicare Advantage plans or go from Original Medicare to Advantage (and vice versa)',
      },
      {
        name: 'Medicare Advantage Open Enrollment',
        when: 'January 1 – March 31 each year',
        what: 'If you are already in a MA plan, you can switch plans or drop back to Original Medicare once',
      },
      {
        name: 'Special Enrollment Periods',
        when: 'If you move, lose other coverage, or qualify for Extra Help',
        what: 'Certain life events open a window to change plans outside of AEP',
      },
    ],
    bestFor:
      'Healthy people on a fixed income who stay in one area and are comfortable with a doctor network',
    enrollUrl: 'https://www.medicare.gov/plan-compare/',
  },
  dual: {
    key: 'dual',
    title: 'Dual Eligible — Medicare + Medicaid',
    subtitle:
      'If your income is limited, you may qualify for BOTH programs. Medicaid picks up costs Medicare does not.',
    accentClass: 'border-violet-500',
    iconClass: 'bg-violet-50 dark:bg-violet-950/30 text-violet-600',
    icon: UserCheck,
    letters: 'Medicare + Medicaid',
    covers: [
      'Full Medicare (Parts A, B, and often D through a special "D-SNP" Advantage plan)',
      'Medicaid pays your Medicare premiums, deductibles, and copays (full dual)',
      'Medicaid covers long-term care in nursing homes — Medicare does NOT',
      'Dental, vision, and hearing are often covered by Medicaid or a D-SNP plan',
      'Non-emergency medical transportation is usually included',
    ],
    monthlyCostRange: '$0 / month (for full-dual eligible)',
    monthlyCostNote:
      'If you qualify as "full dual," you typically pay no premiums, no deductibles, and no copays. Even partial dual status (QMB, SLMB, QI programs) can save you $200+/month.',
    prescriptions:
      'Yes — you automatically qualify for Extra Help, which makes prescriptions cost $0 – $11 each.',
    extras: 'Usually covered through Medicaid or a D-SNP plan (dental, vision, hearing, transportation).',
    pros: [
      'Near-zero cost for healthcare — premiums and copays are paid for you',
      'Extra Help (also called LIS) makes prescriptions almost free',
      'Medicaid covers long-term nursing home care, which Medicare does not',
      'D-SNP plans are specifically designed to coordinate Medicare + Medicaid for you',
    ],
    cons: [
      'Income and asset limits are strict and vary by state',
      'Applying takes paperwork and patience — a SHIP counselor can help for free',
      'In some states, Medicaid requires using specific providers',
      'You must keep income/asset documentation current or coverage can lapse',
    ],
    enrollmentPeriods: [
      {
        name: 'Apply anytime',
        when: 'Medicaid applications accepted year-round',
        what: 'Apply through your state Medicaid office or healthcare.gov',
      },
      {
        name: 'Special Enrollment Period (monthly)',
        when: 'Once per calendar quarter for Jan–Sep, plus Oct 15–Dec 7',
        what: 'Dual-eligible people can change Medicare plans more often than others',
      },
      {
        name: 'Medicare Savings Programs (MSP)',
        when: 'Apply anytime through your state Medicaid office',
        what: 'Even if you are not full-dual, QMB/SLMB/QI can pay your Part B premium',
      },
    ],
    bestFor:
      'People with limited income and savings — roughly under $1,700/month individual or $2,300 couple (exact limits vary by state)',
    enrollUrl: 'https://www.medicaid.gov/about-us/beneficiary-resources/index.html',
  },
};

// ── Recommendation logic ─────────────────────────────────────────────────────
function recommend(answers: Answers): { primary: PlanRecommendation; secondary?: PlanRecommendation; reasons: string[] } {
  const reasons: string[] = [];

  // Dual eligibility is a qualification question, not a preference — flag it
  // as a possibility whenever the user chose "lowest cost" so they can check.
  const considerDual = answers.costPriority === 'lowest';

  // Score Original vs Advantage
  let originalScore = 0;
  let advantageScore = 0;

  if (answers.manager === 'traditional') {
    originalScore += 3;
    reasons.push('You preferred traditional government-run Medicare.');
  } else {
    advantageScore += 3;
    reasons.push('You preferred a private insurance company to manage your plan.');
  }

  if (answers.costPriority === 'lowest') {
    advantageScore += 3;
    reasons.push('Lowest monthly premium is your priority — Advantage plans often start at $0/mo.');
  } else if (answers.costPriority === 'coverage') {
    originalScore += 3;
    reasons.push('Most comprehensive coverage is your priority — Original + Medigap has the fewest gaps.');
  } else {
    originalScore += 1;
    advantageScore += 1;
  }

  if (answers.travels === 'yes') {
    originalScore += 3;
    reasons.push(
      'You travel or have out-of-state family — Original Medicare works nationwide with no network.'
    );
  }

  if (answers.keepDoctors === 'yes') {
    originalScore += 3;
    reasons.push(
      'You want to keep specific doctors — Original Medicare lets you see any Medicare-accepting provider.'
    );
  }

  if (answers.chronicConditions === 'yes') {
    originalScore += 2;
    reasons.push(
      'With frequent care needs, Original + Medigap usually has fewer surprise bills and prior-auth hurdles.'
    );
  } else if (answers.chronicConditions === 'sometimes') {
    originalScore += 1;
  }

  if (answers.prescriptions === '4+') {
    originalScore += 1;
    reasons.push(
      'With many prescriptions, a stand-alone Part D plan often gives you more drug-list flexibility.'
    );
  }

  const primaryKey: PlanKey = originalScore >= advantageScore ? 'original' : 'advantage';
  const secondaryKey: PlanKey | undefined = considerDual ? 'dual' : undefined;

  return {
    primary: PLANS[primaryKey],
    secondary: secondaryKey ? PLANS[secondaryKey] : undefined,
    reasons,
  };
}

// ── Component ─────────────────────────────────────────────────────────────────
export default function MedicarePlanChooser() {
  const [ageEligible, setAgeEligible] = useState<YesNo>('yes');
  const [manager, setManager] = useState<Manager>('traditional');
  const [costPriority, setCostPriority] = useState<CostPriority>('balance');
  const [travels, setTravels] = useState<YesNo>('no');
  const [keepDoctors, setKeepDoctors] = useState<YesNo>('yes');
  const [prescriptions, setPrescriptions] = useState<RxLevel>('1-3');
  const [chronicConditions, setChronicConditions] = useState<YesNoSometimes>('no');
  const [showResults, setShowResults] = useState(false);

  const answers: Answers = {
    ageEligible,
    manager,
    costPriority,
    travels,
    keepDoctors,
    prescriptions,
    chronicConditions,
  };

  const result = useMemo(() => recommend(answers), [
    ageEligible,
    manager,
    costPriority,
    travels,
    keepDoctors,
    prescriptions,
    chronicConditions,
  ]);

  const pickerButton = (selected: boolean) =>
    `px-5 py-3 rounded-full text-base font-medium min-h-[52px] border-2 transition-colors ${
      selected
        ? 'bg-foreground text-background border-foreground'
        : 'bg-background border-border hover:border-foreground/30'
    }`;

  const resetForm = () => {
    setAgeEligible('yes');
    setManager('traditional');
    setCostPriority('balance');
    setTravels('no');
    setKeepDoctors('yes');
    setPrescriptions('1-3');
    setChronicConditions('no');
    setShowResults(false);
  };

  return (
    <>
      <SEOHead
        title="Medicare Plan Chooser — Understand A, B, C, D, and Medigap | TekSure"
        description="A plain-English Medicare guide. Answer 7 questions and learn which Medicare plan type fits your situation — Original Medicare, Medicare Advantage, or Dual Eligibility. Free, educational, no sales pitch."
        path="/tools/medicare-plan-chooser"
      />
      <main className="min-h-screen bg-background">
        {/* ── Header ── */}
        <section className="border-b">
          <div className="container py-12 md:py-16 max-w-3xl">
            <div className="flex items-center gap-3 mb-4">
              <div className="h-14 w-14 rounded-2xl bg-sky-50 dark:bg-sky-950/30 flex items-center justify-center flex-shrink-0">
                <Stethoscope className="h-7 w-7 text-sky-600" aria-hidden="true" />
              </div>
              <Badge variant="secondary" className="text-sm">Free Educational Tool</Badge>
            </div>
            <h1 className="text-3xl md:text-5xl font-bold tracking-tight mb-4">
              Medicare Plan Chooser
            </h1>
            <p className="text-muted-foreground text-lg md:text-xl leading-relaxed">
              Medicare has Parts A, B, C, D, and Medigap — and it confuses almost everyone. This tool won&apos;t sell you anything. Answer 7 plain-English questions and we&apos;ll explain which type of Medicare plan usually fits your situation best, and which rabbit hole to dig into next.
            </p>

            <Card className="mt-6 p-5 rounded-2xl bg-amber-50/60 dark:bg-amber-950/20 border-amber-200 dark:border-amber-900">
              <div className="flex gap-3">
                <AlertTriangle className="h-6 w-6 text-amber-600 flex-shrink-0 mt-0.5" aria-hidden="true" />
                <p className="text-base leading-relaxed">
                  <span className="font-semibold">This is educational, not advice.</span> TekSure is not an insurance broker and doesn&apos;t sell plans. For personalized help, talk to a{' '}
                  <a
                    href="https://www.shiphelp.org/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline font-semibold text-amber-900 dark:text-amber-200"
                  >
                    free SHIP counselor
                  </a>
                  {' '}— they&apos;re trained, unbiased, and paid by the government, not a commission.
                </p>
              </div>
            </Card>
          </div>
        </section>

        {/* ── Questions ── */}
        <section className="container py-10 max-w-3xl">
          <Card className="p-6 md:p-8 rounded-2xl">
            <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
              <Sparkles className="h-6 w-6 text-sky-600" aria-hidden="true" />
              Tell us about your situation
            </h2>

            <div className="space-y-8">
              {/* Q1 — Age */}
              <div>
                <label className="text-lg font-semibold mb-3 flex items-center gap-2">
                  <Calendar className="h-5 w-5" aria-hidden="true" />
                  1. Are you 65 or older, or turning 65 within 3 months?
                </label>
                <div className="flex flex-wrap gap-2">
                  {(['yes', 'no'] as YesNo[]).map(v => (
                    <button
                      key={v}
                      onClick={() => setAgeEligible(v)}
                      className={pickerButton(ageEligible === v)}
                    >
                      {v === 'yes' ? 'Yes' : 'No, not yet'}
                    </button>
                  ))}
                </div>
                {ageEligible === 'no' && (
                  <p className="mt-3 text-sm text-muted-foreground">
                    Most people qualify for Medicare at 65. You can also qualify earlier with certain disabilities or ESRD. Keep going — this tool still works as a learning guide.
                  </p>
                )}
              </div>

              {/* Q2 — Manager */}
              <div>
                <label className="text-lg font-semibold mb-3 flex items-center gap-2">
                  <ShieldCheck className="h-5 w-5" aria-hidden="true" />
                  2. Would you rather have the government manage your plan, or a private insurance company?
                </label>
                <div className="flex flex-wrap gap-2">
                  {(
                    [
                      ['traditional', 'Government (traditional Medicare)'],
                      ['private', 'Private insurance company'],
                    ] as [Manager, string][]
                  ).map(([v, label]) => (
                    <button
                      key={v}
                      onClick={() => setManager(v)}
                      className={pickerButton(manager === v)}
                    >
                      {label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Q3 — Cost vs coverage */}
              <div>
                <label className="text-lg font-semibold mb-3 flex items-center gap-2">
                  <DollarSign className="h-5 w-5" aria-hidden="true" />
                  3. How important is low cost versus more coverage?
                </label>
                <div className="flex flex-wrap gap-2">
                  {(
                    [
                      ['lowest', 'Lowest monthly cost'],
                      ['balance', 'Balance of both'],
                      ['coverage', 'Most coverage, even if it costs more'],
                    ] as [CostPriority, string][]
                  ).map(([v, label]) => (
                    <button
                      key={v}
                      onClick={() => setCostPriority(v)}
                      className={pickerButton(costPriority === v)}
                    >
                      {label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Q4 — Travel */}
              <div>
                <label className="text-lg font-semibold mb-3 flex items-center gap-2">
                  <Plane className="h-5 w-5" aria-hidden="true" />
                  4. Do you travel a lot, or have family in other states?
                </label>
                <div className="flex flex-wrap gap-2">
                  {(['yes', 'no'] as YesNo[]).map(v => (
                    <button
                      key={v}
                      onClick={() => setTravels(v)}
                      className={pickerButton(travels === v)}
                    >
                      {v === 'yes' ? 'Yes' : 'No, I stay close to home'}
                    </button>
                  ))}
                </div>
              </div>

              {/* Q5 — Keep doctors */}
              <div>
                <label className="text-lg font-semibold mb-3 flex items-center gap-2">
                  <UserCheck className="h-5 w-5" aria-hidden="true" />
                  5. Do you have specific doctors you want to keep seeing?
                </label>
                <div className="flex flex-wrap gap-2">
                  {(['yes', 'no'] as YesNo[]).map(v => (
                    <button
                      key={v}
                      onClick={() => setKeepDoctors(v)}
                      className={pickerButton(keepDoctors === v)}
                    >
                      {v === 'yes' ? 'Yes' : "No, I'm flexible"}
                    </button>
                  ))}
                </div>
              </div>

              {/* Q6 — Prescriptions */}
              <div>
                <label className="text-lg font-semibold mb-3 flex items-center gap-2">
                  <Pill className="h-5 w-5" aria-hidden="true" />
                  6. How many prescription medications do you take?
                </label>
                <div className="flex flex-wrap gap-2">
                  {(
                    [
                      ['none', 'None'],
                      ['1-3', '1 – 3'],
                      ['4+', '4 or more'],
                    ] as [RxLevel, string][]
                  ).map(([v, label]) => (
                    <button
                      key={v}
                      onClick={() => setPrescriptions(v)}
                      className={pickerButton(prescriptions === v)}
                    >
                      {label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Q7 — Chronic conditions */}
              <div>
                <label className="text-lg font-semibold mb-3 flex items-center gap-2">
                  <HeartPulse className="h-5 w-5" aria-hidden="true" />
                  7. Do you have chronic conditions that need frequent care?
                </label>
                <div className="flex flex-wrap gap-2">
                  {(
                    [
                      ['yes', 'Yes, frequent visits'],
                      ['sometimes', 'Sometimes'],
                      ['no', "No, I'm generally healthy"],
                    ] as [YesNoSometimes, string][]
                  ).map(([v, label]) => (
                    <button
                      key={v}
                      onClick={() => setChronicConditions(v)}
                      className={pickerButton(chronicConditions === v)}
                    >
                      {label}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            <Button
              className="w-full mt-10 rounded-xl h-14 text-lg font-semibold"
              onClick={() => {
                setShowResults(true);
                setTimeout(() => {
                  document.getElementById('medicare-results')?.scrollIntoView({ behavior: 'smooth' });
                }, 100);
              }}
            >
              Show my best-fit Medicare options
            </Button>
          </Card>
        </section>

        {/* ── Results ── */}
        {showResults && (
          <section id="medicare-results" className="container pb-12 max-w-4xl">
            <div className="mb-6 flex items-start justify-between gap-4">
              <div>
                <h2 className="text-2xl md:text-3xl font-bold mb-1">Your recommended path</h2>
                <p className="text-muted-foreground text-base">
                  Based on your answers, here&apos;s what usually fits best — and what to ask about.
                </p>
              </div>
              <Button variant="outline" size="sm" onClick={resetForm} className="flex-shrink-0">
                <RotateCcw className="h-4 w-4 mr-1.5" aria-hidden="true" />
                Start over
              </Button>
            </div>

            {/* Why this? */}
            {result.reasons.length > 0 && (
              <Card className="p-5 rounded-2xl mb-6 bg-sky-50/50 dark:bg-sky-950/10 border-sky-200 dark:border-sky-900">
                <h3 className="font-bold text-lg mb-3 flex items-center gap-2">
                  <Info className="h-5 w-5 text-sky-600" aria-hidden="true" />
                  Why we suggested this
                </h3>
                <ul className="space-y-2">
                  {result.reasons.map((r, i) => (
                    <li key={i} className="flex gap-2 text-base">
                      <CheckCircle2 className="h-5 w-5 text-sky-600 flex-shrink-0 mt-0.5" aria-hidden="true" />
                      <span>{r}</span>
                    </li>
                  ))}
                </ul>
              </Card>
            )}

            {/* Primary recommendation */}
            <PlanCard plan={result.primary} isPrimary />

            {/* Secondary (dual eligible flag) */}
            {result.secondary && (
              <>
                <div className="mt-8 mb-4">
                  <h3 className="text-xl md:text-2xl font-bold mb-1">Also worth checking</h3>
                  <p className="text-muted-foreground text-base">
                    Because you said cost is your top priority, you may qualify for a program that pays most of your Medicare costs for you.
                  </p>
                </div>
                <PlanCard plan={result.secondary} />
              </>
            )}

            {/* SHIP callout (appears in every result) */}
            <Card className="mt-8 p-6 rounded-2xl bg-violet-50/60 dark:bg-violet-950/20 border-violet-200 dark:border-violet-900">
              <div className="flex gap-4 items-start">
                <div className="h-12 w-12 rounded-xl bg-violet-100 dark:bg-violet-900/30 flex items-center justify-center flex-shrink-0">
                  <Phone className="h-6 w-6 text-violet-600" aria-hidden="true" />
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-2">Before you enroll — talk to SHIP (free)</h3>
                  <p className="text-base leading-relaxed mb-3">
                    SHIP stands for State Health Insurance Assistance Program. It&apos;s free, unbiased, one-on-one Medicare counseling paid for by the federal government. Counselors are NOT paid commissions and cannot sell you anything — their only job is helping you understand your options. Every state has one.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <Button asChild variant="default" className="rounded-xl">
                      <a href="https://www.shiphelp.org/" target="_blank" rel="noopener noreferrer">
                        Find your SHIP counselor
                        <ExternalLink className="h-4 w-4 ml-1.5" aria-hidden="true" />
                      </a>
                    </Button>
                    <Button asChild variant="outline" className="rounded-xl">
                      <a href="tel:1-877-839-2675">
                        <Phone className="h-4 w-4 mr-1.5" aria-hidden="true" />
                        Call 1-877-839-2675
                      </a>
                    </Button>
                  </div>
                </div>
              </div>
            </Card>
          </section>
        )}

        {/* ── What Medicare DOESN T cover (always visible) ── */}
        <section className="container pb-12 max-w-3xl">
          <Card className="p-6 md:p-8 rounded-2xl bg-rose-50/40 dark:bg-rose-950/10 border-rose-200 dark:border-rose-900">
            <h2 className="text-2xl font-bold mb-2 flex items-center gap-2">
              <XCircle className="h-6 w-6 text-rose-600" aria-hidden="true" />
              What Medicare does NOT cover
            </h2>
            <p className="text-base text-muted-foreground mb-4">
              This is what confuses people most. Medicare is not universal health insurance — it has real gaps. Here&apos;s what is usually NOT included:
            </p>
            <ul className="space-y-3 text-base">
              <li className="flex gap-3">
                <XCircle className="h-5 w-5 text-rose-600 flex-shrink-0 mt-0.5" aria-hidden="true" />
                <div>
                  <span className="font-semibold">Long-term care (nursing homes, assisted living).</span>{' '}
                  Medicare only pays for short-term skilled nursing after a hospital stay — not ongoing custodial care. For long-term care, people use savings, long-term care insurance, or Medicaid.
                </div>
              </li>
              <li className="flex gap-3">
                <XCircle className="h-5 w-5 text-rose-600 flex-shrink-0 mt-0.5" aria-hidden="true" />
                <div>
                  <span className="font-semibold">Most dental care.</span> Cleanings, fillings, dentures, and most dental surgery. Some Medicare Advantage plans include limited dental, but caps are usually $1,000–$2,500/year.
                </div>
              </li>
              <li className="flex gap-3">
                <XCircle className="h-5 w-5 text-rose-600 flex-shrink-0 mt-0.5" aria-hidden="true" />
                <div>
                  <span className="font-semibold">Routine vision care.</span> Eye exams for glasses and the glasses themselves. Medicare covers cataract surgery and eye issues related to disease (like diabetes).
                </div>
              </li>
              <li className="flex gap-3">
                <XCircle className="h-5 w-5 text-rose-600 flex-shrink-0 mt-0.5" aria-hidden="true" />
                <div>
                  <span className="font-semibold">Hearing aids.</span> Medicare doesn&apos;t cover the devices themselves. Some Advantage plans offer an allowance. Over-the-counter hearing aids (since 2022) can be a good low-cost option.
                </div>
              </li>
              <li className="flex gap-3">
                <XCircle className="h-5 w-5 text-rose-600 flex-shrink-0 mt-0.5" aria-hidden="true" />
                <div>
                  <span className="font-semibold">Cosmetic surgery and most alternative medicine.</span> Acupuncture for chronic lower back pain is covered; most other alternative care is not.
                </div>
              </li>
              <li className="flex gap-3">
                <XCircle className="h-5 w-5 text-rose-600 flex-shrink-0 mt-0.5" aria-hidden="true" />
                <div>
                  <span className="font-semibold">Care outside the United States.</span> Original Medicare generally won&apos;t cover you abroad. Some Medigap plans add limited foreign travel emergency coverage.
                </div>
              </li>
              <li className="flex gap-3">
                <XCircle className="h-5 w-5 text-rose-600 flex-shrink-0 mt-0.5" aria-hidden="true" />
                <div>
                  <span className="font-semibold">Concierge / direct primary care fees.</span> The monthly membership fee some doctors charge is not reimbursed by Medicare.
                </div>
              </li>
            </ul>
          </Card>
        </section>

        {/* ── Letter-soup key (always visible) ── */}
        <section className="container pb-24 max-w-3xl">
          <Card className="p-6 md:p-8 rounded-2xl">
            <h2 className="text-2xl font-bold mb-2 flex items-center gap-2">
              <HelpCircle className="h-6 w-6 text-sky-600" aria-hidden="true" />
              Medicare alphabet, decoded
            </h2>
            <p className="text-base text-muted-foreground mb-4">
              The parts are named with letters, which is why everyone finds it confusing. Here&apos;s what each letter actually means:
            </p>
            <dl className="space-y-4 text-base">
              <div>
                <dt className="font-bold">Part A — Hospital insurance</dt>
                <dd className="text-muted-foreground">
                  Inpatient hospital stays, skilled nursing, hospice, some home health. Usually free if you or your spouse worked 10+ years.
                </dd>
              </div>
              <div>
                <dt className="font-bold">Part B — Medical insurance</dt>
                <dd className="text-muted-foreground">
                  Doctor visits, outpatient care, preventive care, medical equipment. About $185/month for most people in 2026.
                </dd>
              </div>
              <div>
                <dt className="font-bold">Part C — Medicare Advantage</dt>
                <dd className="text-muted-foreground">
                  A private-insurer bundle that replaces Parts A + B (and usually D). Lower premium, but network restrictions.
                </dd>
              </div>
              <div>
                <dt className="font-bold">Part D — Prescription drugs</dt>
                <dd className="text-muted-foreground">
                  A stand-alone drug plan you add to Original Medicare. $0–$70/month typical.
                </dd>
              </div>
              <div>
                <dt className="font-bold">Medigap (Parts F, G, N, etc.) — Supplement</dt>
                <dd className="text-muted-foreground">
                  A private plan that pays the 20% coinsurance Original Medicare leaves. Plan G is the most popular choice today. Does NOT work with Medicare Advantage.
                </dd>
              </div>
              <div>
                <dt className="font-bold">Extra Help / LIS — Prescription subsidy</dt>
                <dd className="text-muted-foreground">
                  A federal program that makes Part D drugs nearly free for people with limited income.
                </dd>
              </div>
              <div>
                <dt className="font-bold">SHIP — Free Medicare counseling</dt>
                <dd className="text-muted-foreground">
                  State Health Insurance Assistance Program — free, unbiased help from trained volunteers in every state.{' '}
                  <a
                    href="https://www.shiphelp.org/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline font-semibold"
                  >
                    shiphelp.org
                  </a>
                </dd>
              </div>
            </dl>
          </Card>

          <Card className="mt-6 p-6 rounded-2xl bg-muted/30">
            <p className="text-sm text-muted-foreground leading-relaxed">
              <span className="font-semibold text-foreground">Disclaimer:</span> This tool is for educational purposes only and reflects general Medicare rules as of 2026. It is not insurance advice, and TekSure is not a licensed insurance agent or broker. Specific costs, networks, and rules change every year and vary by location. Always confirm details on{' '}
              <a
                href="https://www.medicare.gov/"
                target="_blank"
                rel="noopener noreferrer"
                className="underline"
              >
                Medicare.gov
              </a>{' '}
              or with a SHIP counselor before enrolling.
            </p>
          </Card>
        </section>
      </main>
    </>
  );
}

// ── Sub-component: recommendation card ───────────────────────────────────────
function PlanCard({ plan, isPrimary = false }: { plan: PlanRecommendation; isPrimary?: boolean }) {
  const Icon = plan.icon;
  return (
    <Card className={`p-6 md:p-8 rounded-2xl ${isPrimary ? `${plan.accentClass} border-2` : ''}`}>
      {isPrimary && (
        <Badge className="mb-4 bg-sky-600 hover:bg-sky-600 text-base px-3 py-1">
          <CheckCircle2 className="h-4 w-4 mr-1.5" aria-hidden="true" /> Most likely fit for you
        </Badge>
      )}

      <div className="flex items-start gap-4 mb-4">
        <div className={`h-14 w-14 rounded-2xl flex items-center justify-center flex-shrink-0 ${plan.iconClass}`}>
          <Icon className="h-7 w-7" aria-hidden={true} />
        </div>
        <div>
          <div className="text-xs uppercase tracking-wide font-semibold text-muted-foreground mb-1">
            {plan.letters}
          </div>
          <h3 className="text-xl md:text-2xl font-bold">{plan.title}</h3>
          <p className="text-muted-foreground mt-1 text-base">{plan.subtitle}</p>
        </div>
      </div>

      {/* Cost */}
      <div className="bg-muted/40 rounded-xl p-4 mb-5">
        <div className="flex items-center gap-2 mb-1">
          <DollarSign className="h-5 w-5 text-emerald-600" aria-hidden="true" />
          <span className="font-bold text-lg">{plan.monthlyCostRange}</span>
        </div>
        <p className="text-sm text-muted-foreground leading-relaxed">{plan.monthlyCostNote}</p>
      </div>

      {/* Covers */}
      <div className="mb-5">
        <h4 className="font-bold text-lg mb-2">What it actually covers</h4>
        <ul className="space-y-2">
          {plan.covers.map((c, i) => (
            <li key={i} className="flex gap-2 text-base">
              <CheckCircle2 className="h-5 w-5 text-emerald-600 flex-shrink-0 mt-0.5" aria-hidden="true" />
              <span>{c}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Prescriptions + extras */}
      <div className="grid md:grid-cols-2 gap-4 mb-5">
        <div className="p-4 rounded-xl border">
          <div className="flex items-center gap-2 mb-1">
            <Pill className="h-5 w-5 text-sky-600" aria-hidden="true" />
            <span className="font-semibold">Prescriptions</span>
          </div>
          <p className="text-sm text-muted-foreground leading-relaxed">{plan.prescriptions}</p>
        </div>
        <div className="p-4 rounded-xl border">
          <div className="flex items-center gap-2 mb-1">
            <HeartPulse className="h-5 w-5 text-sky-600" aria-hidden="true" />
            <span className="font-semibold">Dental / Vision / Hearing</span>
          </div>
          <p className="text-sm text-muted-foreground leading-relaxed">{plan.extras}</p>
        </div>
      </div>

      {/* Pros / Cons */}
      <div className="grid md:grid-cols-2 gap-4 mb-5">
        <div>
          <h4 className="font-bold text-lg mb-2 flex items-center gap-2 text-emerald-700 dark:text-emerald-400">
            <CheckCircle2 className="h-5 w-5" aria-hidden="true" /> Pros
          </h4>
          <ul className="space-y-2">
            {plan.pros.map((p, i) => (
              <li key={i} className="flex gap-2 text-base">
                <CheckCircle2 className="h-4 w-4 text-emerald-600 flex-shrink-0 mt-1" aria-hidden="true" />
                <span>{p}</span>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h4 className="font-bold text-lg mb-2 flex items-center gap-2 text-rose-700 dark:text-rose-400">
            <XCircle className="h-5 w-5" aria-hidden="true" /> Cons
          </h4>
          <ul className="space-y-2">
            {plan.cons.map((c, i) => (
              <li key={i} className="flex gap-2 text-base">
                <XCircle className="h-4 w-4 text-rose-600 flex-shrink-0 mt-1" aria-hidden="true" />
                <span>{c}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Enrollment */}
      <div className="mb-5">
        <h4 className="font-bold text-lg mb-2 flex items-center gap-2">
          <Calendar className="h-5 w-5 text-sky-600" aria-hidden="true" />
          When to enroll
        </h4>
        <div className="space-y-3">
          {plan.enrollmentPeriods.map((ep, i) => (
            <div key={i} className="p-3 rounded-xl border">
              <div className="font-semibold text-base">{ep.name}</div>
              <div className="text-sm text-muted-foreground italic mb-1">{ep.when}</div>
              <div className="text-sm">{ep.what}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Best for */}
      <div className="mb-5 p-4 rounded-xl bg-sky-50/60 dark:bg-sky-950/20 border border-sky-200 dark:border-sky-900">
        <div className="font-semibold mb-1">Typically a good fit for:</div>
        <p className="text-base">{plan.bestFor}</p>
      </div>

      {/* Actions */}
      <div className="flex flex-wrap gap-2">
        <Button asChild className="rounded-xl">
          <a href={plan.enrollUrl} target="_blank" rel="noopener noreferrer">
            Learn more on Medicare.gov
            <ExternalLink className="h-4 w-4 ml-1.5" aria-hidden="true" />
          </a>
        </Button>
        <Button asChild variant="outline" className="rounded-xl">
          <a href="https://www.shiphelp.org/" target="_blank" rel="noopener noreferrer">
            Talk to a free SHIP counselor
            <ExternalLink className="h-4 w-4 ml-1.5" aria-hidden="true" />
          </a>
        </Button>
      </div>

      {/* Per-result disclaimer */}
      <p className="mt-5 text-xs text-muted-foreground leading-relaxed border-t pt-3">
        Educational content — not personalized insurance advice. Costs and coverage vary by location and change each year.
      </p>
    </Card>
  );
}
